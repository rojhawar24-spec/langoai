-- ═══════════════════════════════════════════════════════════════
-- LangoAI — Security Hardening Migration (run AFTER schema.sql
-- and email_verification.sql in Supabase SQL Editor)
-- ═══════════════════════════════════════════════════════════════
-- CLIENT = UNTRUSTED. Server decides rewards. Idempotent events.
-- ═══════════════════════════════════════════════════════════════

-- ── 1. Event tables (idempotency) ─────────────────────────────

CREATE TABLE IF NOT EXISTS public.daily_chest_claims (
  user_id   UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  claim_date TEXT NOT NULL, -- YYYY-MM-DD in server timezone (UTC)
  coins     INTEGER NOT NULL DEFAULT 8,
  claimed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, claim_date)
);

ALTER TABLE public.daily_chest_claims ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own chest claims" ON public.daily_chest_claims;
CREATE POLICY "Users can view own chest claims"
  ON public.daily_chest_claims FOR SELECT
  USING (auth.uid() = user_id);
-- No INSERT/UPDATE/DELETE for authenticated — only SECURITY DEFINER RPCs

CREATE TABLE IF NOT EXISTS public.arena_completions (
  user_id    UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  lang       TEXT NOT NULL,
  season_id  INTEGER NOT NULL,
  level_id   INTEGER NOT NULL,
  coins      INTEGER NOT NULL DEFAULT 2,
  xp         INTEGER NOT NULL DEFAULT 20,
  completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, lang, season_id, level_id)
);

ALTER TABLE public.arena_completions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own arena completions" ON public.arena_completions;
CREATE POLICY "Users can view own arena completions"
  ON public.arena_completions FOR SELECT
  USING (auth.uid() = user_id);

-- ── 2. REVOKE generic earn_coins from clients ─────────────────
-- Internal helpers may still exist; clients must use event RPCs.

REVOKE EXECUTE ON FUNCTION public.earn_coins(INTEGER) FROM PUBLIC, authenticated, anon;

-- Keep award_xp for lesson/test flows that still route through it,
-- but clients should prefer complete_* functions. We leave award_xp
-- executable but daily-capped; new event RPCs are the preferred path.

-- ── 3. claim_daily_chest() — server decides amount + idempotent ─

CREATE OR REPLACE FUNCTION public.claim_daily_chest()
RETURNS public.profiles
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_today   TEXT := TO_CHAR(NOW() AT TIME ZONE 'UTC', 'YYYY-MM-DD');
  v_reward  CONSTANT INTEGER := 8;
  v_profile public.profiles;
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'not_authenticated';
  END IF;

  INSERT INTO public.daily_chest_claims (user_id, claim_date, coins)
  VALUES (v_user_id, v_today, v_reward);

  UPDATE public.profiles
  SET coins = coins + v_reward
  WHERE id = v_user_id
  RETURNING * INTO v_profile;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'profile_not_found';
  END IF;

  RETURN v_profile;
EXCEPTION
  WHEN unique_violation THEN
    RAISE EXCEPTION 'daily_chest_already_claimed';
END;
$$;

REVOKE EXECUTE ON FUNCTION public.claim_daily_chest() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.claim_daily_chest() TO authenticated;

-- ── 4. complete_arena_level() — server decides coins + XP ─────

CREATE OR REPLACE FUNCTION public.complete_arena_level(
  p_lang TEXT,
  p_season_id INTEGER,
  p_level_id INTEGER
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_coins   CONSTANT INTEGER := 2;
  v_xp      CONSTANT INTEGER := 20;
  v_profile public.profiles;
  v_today   TEXT := TO_CHAR(NOW() AT TIME ZONE 'UTC', 'YYYY-MM-DD');
  v_xp_today INTEGER;
  v_daily_cap CONSTANT INTEGER := 1000;
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'not_authenticated';
  END IF;
  IF p_lang IS NULL OR length(trim(p_lang)) = 0 THEN
    RAISE EXCEPTION 'invalid_lang';
  END IF;
  IF p_season_id IS NULL OR p_season_id < 1 OR p_season_id > 50 THEN
    RAISE EXCEPTION 'invalid_season';
  END IF;
  IF p_level_id IS NULL OR p_level_id < 1 OR p_level_id > 20 THEN
    RAISE EXCEPTION 'invalid_level';
  END IF;

  INSERT INTO public.arena_completions (user_id, lang, season_id, level_id, coins, xp)
  VALUES (v_user_id, lower(trim(p_lang)), p_season_id, p_level_id, v_coins, v_xp);

  SELECT * INTO v_profile FROM public.profiles WHERE id = v_user_id FOR UPDATE;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'profile_not_found';
  END IF;

  v_xp_today := CASE WHEN v_profile.xp_awarded_today_date IS DISTINCT FROM v_today
                     THEN 0 ELSE v_profile.xp_awarded_today END;

  IF v_xp_today + v_xp > v_daily_cap THEN
    -- Still record completion (idempotent PK already inserted), but no more XP
    UPDATE public.profiles
    SET coins = coins + v_coins
    WHERE id = v_user_id
    RETURNING * INTO v_profile;
  ELSE
    UPDATE public.profiles
    SET coins = coins + v_coins,
        total_xp = total_xp + v_xp,
        level = public.compute_level(total_xp + v_xp),
        last_activity_date = v_today,
        xp_awarded_today = v_xp_today + v_xp,
        xp_awarded_today_date = v_today,
        streak = CASE
          WHEN last_activity_date = v_today THEN GREATEST(streak, 1)
          WHEN last_activity_date = TO_CHAR((NOW() AT TIME ZONE 'UTC') - INTERVAL '1 day', 'YYYY-MM-DD')
            THEN streak + 1
          ELSE 1
        END
    WHERE id = v_user_id
    RETURNING * INTO v_profile;
  END IF;

  RETURN json_build_object(
    'coinsAwarded', v_coins,
    'xpAwarded', v_xp,
    'profile', row_to_json(v_profile)
  );
EXCEPTION
  WHEN unique_violation THEN
    RAISE EXCEPTION 'arena_level_already_completed';
END;
$$;

REVOKE EXECUTE ON FUNCTION public.complete_arena_level(TEXT, INTEGER, INTEGER) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.complete_arena_level(TEXT, INTEGER, INTEGER) TO authenticated;

-- ── 5. Ensure handle_new_user creates profiles (authoritative) ─
-- Replaces any stub from schema.sql.

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  meta JSONB := COALESCE(NEW.raw_user_meta_data, '{}'::jsonb);
  wanted_username TEXT := NULLIF(BTRIM(meta->>'username'), '');
BEGIN
  IF wanted_username IS NOT NULL THEN
    INSERT INTO public.profiles (
      id, username, email, current_language, theme, interface_language
    )
    VALUES (
      NEW.id,
      wanted_username,
      LOWER(NEW.email),
      NULLIF(meta->>'currentLanguage', ''),
      CASE WHEN meta->>'theme' IN ('light','dark') THEN meta->>'theme' ELSE 'light' END,
      COALESCE(NULLIF(meta->>'interfaceLanguage',''), 'en')
    )
    ON CONFLICT (id) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, authenticated, anon;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ── 7. XP: revoke generic award_xp; event-bound activities only ─────────

REVOKE EXECUTE ON FUNCTION public.award_xp(INTEGER, TEXT) FROM PUBLIC, authenticated, anon;
-- Also try single-arg overload if present
DO $$ BEGIN
  REVOKE EXECUTE ON FUNCTION public.award_xp(INTEGER) FROM PUBLIC, authenticated, anon;
EXCEPTION WHEN undefined_function THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS public.learning_activity_log (
  id           BIGSERIAL PRIMARY KEY,
  user_id      UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  activity_kind TEXT NOT NULL,
  activity_ref  TEXT NOT NULL DEFAULT '',
  xp_awarded    INTEGER NOT NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- One-time activities: unique per user+kind+ref
CREATE UNIQUE INDEX IF NOT EXISTS learning_activity_once_idx
  ON public.learning_activity_log (user_id, activity_kind, activity_ref)
  WHERE activity_kind IN (
    'grammar_lesson', 'test_passed', 'streak_7', 'streak_30', 'daily_goal',
    'vocabulary_word', 'exercise_correct'
  );

-- Daily-capped kinds still go through xp_awarded_today on profiles;
-- exercise_correct / vocabulary_word may repeat but hit daily XP cap.

ALTER TABLE public.learning_activity_log ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can view own activity log" ON public.learning_activity_log;
CREATE POLICY "Users can view own activity log"
  ON public.learning_activity_log FOR SELECT
  USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.complete_learning_activity(
  p_kind TEXT,
  p_ref  TEXT DEFAULT ''
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_xp INTEGER;
  v_kind TEXT := lower(BTRIM(COALESCE(p_kind, '')));
  v_profile public.profiles;
  v_today TEXT := TO_CHAR(NOW() AT TIME ZONE 'UTC', 'YYYY-MM-DD');
  v_xp_today INTEGER;
  v_daily_cap CONSTANT INTEGER := 1000;
  v_ref TEXT := COALESCE(NULLIF(BTRIM(p_ref), ''), '');
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'not_authenticated';
  END IF;

  SELECT * INTO v_profile FROM public.profiles WHERE id = v_user_id FOR UPDATE;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'profile_not_found';
  END IF;

  -- Server decides XP; client cannot choose amount
  v_xp := CASE v_kind
    WHEN 'grammar_lesson'     THEN 10
    WHEN 'vocabulary_word'    THEN 5
    WHEN 'exercise_correct'   THEN 5
    WHEN 'test_passed'        THEN 30
    WHEN 'daily_goal'         THEN 15
    WHEN 'streak_7'           THEN 20
    WHEN 'streak_30'          THEN 50
    ELSE NULL
  END;

  IF v_xp IS NULL THEN
    RAISE EXCEPTION 'invalid_activity_kind';
  END IF;

  -- State-gated rewards: client cannot invent streak/daily_goal without matching profile
  IF v_kind = 'streak_7' AND COALESCE(v_profile.streak, 0) < 7 THEN
    RAISE EXCEPTION 'streak_requirement_not_met';
  END IF;
  IF v_kind = 'streak_30' AND COALESCE(v_profile.streak, 0) < 30 THEN
    RAISE EXCEPTION 'streak_requirement_not_met';
  END IF;
  -- daily_goal: only once per UTC day (ref forced to date)
  IF v_kind = 'daily_goal' THEN
    v_ref := v_today;
  END IF;

  -- One-time kinds need a stable ref (lesson/test id). Empty ref rejected.
  IF v_kind IN ('grammar_lesson', 'test_passed') AND v_ref = '' THEN
    RAISE EXCEPTION 'activity_ref_required';
  END IF;

  -- Limit ref length / charset to reduce invent-space abuse
  IF length(v_ref) > 128 THEN
    RAISE EXCEPTION 'activity_ref_too_long';
  END IF;

  INSERT INTO public.learning_activity_log (user_id, activity_kind, activity_ref, xp_awarded)
  VALUES (v_user_id, v_kind, v_ref, v_xp);

  v_xp_today := CASE WHEN v_profile.xp_awarded_today_date IS DISTINCT FROM v_today
                     THEN 0 ELSE v_profile.xp_awarded_today END;

  IF v_xp_today + v_xp > v_daily_cap THEN
    RAISE EXCEPTION 'daily_xp_cap_reached';
  END IF;

  UPDATE public.profiles
  SET total_xp = total_xp + v_xp,
      level = public.compute_level(total_xp + v_xp),
      last_activity_date = v_today,
      xp_awarded_today = v_xp_today + v_xp,
      xp_awarded_today_date = v_today,
      streak = CASE
        WHEN last_activity_date = v_today THEN GREATEST(streak, 1)
        WHEN last_activity_date = TO_CHAR((NOW() AT TIME ZONE 'UTC') - INTERVAL '1 day', 'YYYY-MM-DD')
          THEN streak + 1
        WHEN last_activity_date = TO_CHAR((NOW() AT TIME ZONE 'UTC') - INTERVAL '2 day', 'YYYY-MM-DD')
             AND streak_freezes > 0
          THEN streak + 1
        ELSE 1
      END,
      streak_freezes = CASE
        WHEN last_activity_date = TO_CHAR((NOW() AT TIME ZONE 'UTC') - INTERVAL '2 day', 'YYYY-MM-DD')
             AND streak_freezes > 0
          THEN streak_freezes - 1
        ELSE streak_freezes
      END
  WHERE id = v_user_id
  RETURNING * INTO v_profile;

  RETURN json_build_object(
    'xpAwarded', v_xp,
    'activityKind', v_kind,
    'profile', row_to_json(v_profile)
  );
EXCEPTION
  WHEN unique_violation THEN
    RAISE EXCEPTION 'activity_already_completed';
END;
$$;

REVOKE EXECUTE ON FUNCTION public.complete_learning_activity(TEXT, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.complete_learning_activity(TEXT, TEXT) TO authenticated;

-- ── 8. Arena catalog enforcement (requires content_catalog.sql) ──────────

CREATE OR REPLACE FUNCTION public.complete_arena_level(
  p_lang TEXT,
  p_season_id INTEGER,
  p_level_id INTEGER
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_coins   CONSTANT INTEGER := 2;
  v_xp      CONSTANT INTEGER := 20;
  v_profile public.profiles;
  v_today   TEXT := TO_CHAR(NOW() AT TIME ZONE 'UTC', 'YYYY-MM-DD');
  v_xp_today INTEGER;
  v_daily_cap CONSTANT INTEGER := 1000;
  v_lang TEXT := lower(BTRIM(COALESCE(p_lang, '')));
  v_prev_exists BOOLEAN;
  v_prev_done BOOLEAN;
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'not_authenticated';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM public.arena_catalog
    WHERE lang = v_lang AND season_id = p_season_id AND level_id = p_level_id
  ) THEN
    RAISE EXCEPTION 'arena_level_not_found';
  END IF;

  -- Prerequisite: previous level in same season must be completed (level 1 free)
  IF p_level_id > 1 THEN
    SELECT EXISTS (
      SELECT 1 FROM public.arena_catalog
      WHERE lang = v_lang AND season_id = p_season_id AND level_id = p_level_id - 1
    ) INTO v_prev_exists;
    IF v_prev_exists THEN
      SELECT EXISTS (
        SELECT 1 FROM public.arena_completions
        WHERE user_id = v_user_id AND lang = v_lang
          AND season_id = p_season_id AND level_id = p_level_id - 1
      ) INTO v_prev_done;
      IF NOT v_prev_done THEN
        RAISE EXCEPTION 'arena_level_locked';
      END IF;
    END IF;
  END IF;

  INSERT INTO public.arena_completions (user_id, lang, season_id, level_id, coins, xp)
  VALUES (v_user_id, v_lang, p_season_id, p_level_id, v_coins, v_xp);

  SELECT * INTO v_profile FROM public.profiles WHERE id = v_user_id FOR UPDATE;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'profile_not_found';
  END IF;

  v_xp_today := CASE WHEN v_profile.xp_awarded_today_date IS DISTINCT FROM v_today
                     THEN 0 ELSE v_profile.xp_awarded_today END;

  IF v_xp_today + v_xp > v_daily_cap THEN
    UPDATE public.profiles SET coins = coins + v_coins
    WHERE id = v_user_id RETURNING * INTO v_profile;
  ELSE
    UPDATE public.profiles
    SET coins = coins + v_coins,
        total_xp = total_xp + v_xp,
        level = public.compute_level(total_xp + v_xp),
        last_activity_date = v_today,
        xp_awarded_today = v_xp_today + v_xp,
        xp_awarded_today_date = v_today,
        streak = CASE
          WHEN last_activity_date = v_today THEN GREATEST(streak, 1)
          WHEN last_activity_date = TO_CHAR((NOW() AT TIME ZONE 'UTC') - INTERVAL '1 day', 'YYYY-MM-DD')
            THEN streak + 1
          ELSE 1
        END
    WHERE id = v_user_id
    RETURNING * INTO v_profile;
  END IF;

  RETURN json_build_object(
    'coinsAwarded', v_coins,
    'xpAwarded', v_xp,
    'profile', row_to_json(v_profile)
  );
EXCEPTION
  WHEN unique_violation THEN
    RAISE EXCEPTION 'arena_level_already_completed';
END;
$$;

REVOKE EXECUTE ON FUNCTION public.complete_arena_level(TEXT, INTEGER, INTEGER) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.complete_arena_level(TEXT, INTEGER, INTEGER) TO authenticated;

-- ── 9. Learning activity: require catalog for grammar/test ───────────────

CREATE OR REPLACE FUNCTION public.complete_learning_activity(
  p_kind TEXT,
  p_ref  TEXT DEFAULT ''
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_xp INTEGER;
  v_kind TEXT := lower(BTRIM(COALESCE(p_kind, '')));
  v_profile public.profiles;
  v_today TEXT := TO_CHAR(NOW() AT TIME ZONE 'UTC', 'YYYY-MM-DD');
  v_xp_today INTEGER;
  v_daily_cap CONSTANT INTEGER := 1000;
  v_ref TEXT := COALESCE(NULLIF(BTRIM(p_ref), ''), '');
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'not_authenticated';
  END IF;

  SELECT * INTO v_profile FROM public.profiles WHERE id = v_user_id FOR UPDATE;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'profile_not_found';
  END IF;

  v_xp := CASE v_kind
    WHEN 'grammar_lesson'     THEN 10
    WHEN 'vocabulary_word'    THEN 5
    WHEN 'exercise_correct'   THEN 5
    WHEN 'test_passed'        THEN 30
    WHEN 'daily_goal'         THEN 15
    WHEN 'streak_7'           THEN 20
    WHEN 'streak_30'          THEN 50
    ELSE NULL
  END;
  IF v_xp IS NULL THEN
    RAISE EXCEPTION 'invalid_activity_kind';
  END IF;

  IF v_kind = 'streak_7' AND COALESCE(v_profile.streak, 0) < 7 THEN
    RAISE EXCEPTION 'streak_requirement_not_met';
  END IF;
  IF v_kind = 'streak_30' AND COALESCE(v_profile.streak, 0) < 30 THEN
    RAISE EXCEPTION 'streak_requirement_not_met';
  END IF;
  IF v_kind = 'daily_goal' THEN
    v_ref := v_today;
  END IF;

  IF v_kind IN ('grammar_lesson', 'test_passed', 'vocabulary_word', 'exercise_correct') THEN
    IF v_ref = '' THEN
      RAISE EXCEPTION 'activity_ref_required';
    END IF;
    IF NOT EXISTS (
      SELECT 1 FROM public.learning_content
      WHERE kind = v_kind AND content_id = v_ref
    ) THEN
      RAISE EXCEPTION 'unknown_content_id';
    END IF;
  END IF;

  IF length(v_ref) > 128 THEN
    RAISE EXCEPTION 'activity_ref_too_long';
  END IF;

  -- vocabulary_word / exercise_correct: still rate-limited by daily XP cap only
  -- (item-level proof would need per-word IDs in learning_content)

  INSERT INTO public.learning_activity_log (user_id, activity_kind, activity_ref, xp_awarded)
  VALUES (v_user_id, v_kind, v_ref, v_xp);

  v_xp_today := CASE WHEN v_profile.xp_awarded_today_date IS DISTINCT FROM v_today
                     THEN 0 ELSE v_profile.xp_awarded_today END;
  IF v_xp_today + v_xp > v_daily_cap THEN
    RAISE EXCEPTION 'daily_xp_cap_reached';
  END IF;

  UPDATE public.profiles
  SET total_xp = total_xp + v_xp,
      level = public.compute_level(total_xp + v_xp),
      last_activity_date = v_today,
      xp_awarded_today = v_xp_today + v_xp,
      xp_awarded_today_date = v_today,
      streak = CASE
        WHEN last_activity_date = v_today THEN GREATEST(streak, 1)
        WHEN last_activity_date = TO_CHAR((NOW() AT TIME ZONE 'UTC') - INTERVAL '1 day', 'YYYY-MM-DD')
          THEN streak + 1
        WHEN last_activity_date = TO_CHAR((NOW() AT TIME ZONE 'UTC') - INTERVAL '2 day', 'YYYY-MM-DD')
             AND streak_freezes > 0 THEN streak + 1
        ELSE 1
      END,
      streak_freezes = CASE
        WHEN last_activity_date = TO_CHAR((NOW() AT TIME ZONE 'UTC') - INTERVAL '2 day', 'YYYY-MM-DD')
             AND streak_freezes > 0 THEN streak_freezes - 1
        ELSE streak_freezes
      END
  WHERE id = v_user_id
  RETURNING * INTO v_profile;

  RETURN json_build_object(
    'xpAwarded', v_xp,
    'activityKind', v_kind,
    'profile', row_to_json(v_profile)
  );
EXCEPTION
  WHEN unique_violation THEN
    RAISE EXCEPTION 'activity_already_completed';
END;
$$;

REVOKE EXECUTE ON FUNCTION public.complete_learning_activity(TEXT, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.complete_learning_activity(TEXT, TEXT) TO authenticated;
