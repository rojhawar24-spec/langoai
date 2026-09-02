-- ══════════════════════════════════════════════════
-- LangoAI — Supabase Database Schema
-- Uitvoeren in: Supabase Dashboard → SQL Editor
-- ══════════════════════════════════════════════════

-- 1. Profiles tabel (gekoppeld aan Supabase Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
  id                 UUID        PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username           TEXT        UNIQUE NOT NULL,
  email              TEXT        NOT NULL,
  current_language   TEXT        DEFAULT NULL,
  total_xp           INTEGER     DEFAULT 0,
  level              INTEGER     DEFAULT 1,
  streak             INTEGER     DEFAULT 0,
  last_activity_date TEXT        DEFAULT NULL,
  theme              TEXT        DEFAULT 'light' CHECK (theme IN ('light', 'dark')),
  interface_language TEXT        DEFAULT 'en',
  premium            BOOLEAN     DEFAULT false,
  premium_expires_at TIMESTAMPTZ DEFAULT NULL,
  created_at         TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Row Level Security (RLS) inschakelen
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Gebruiker kan alleen zijn eigen profiel lezen
CREATE POLICY "Users can read own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

-- Gebruiker kan alleen zijn eigen profiel updaten
CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- ⚠️ SECURITY FIX (audit): RLS hierboven bepaalt alleen WELKE RIJ een
-- gebruiker mag updaten (zijn eigen), NIET welke KOLOMMEN. Zonder onderstaande
-- regels kan elke ingelogde gebruiker via de browser console gewoon
-- `supabase.from('profiles').update({ premium: true }).eq('id', <eigen id>)`
-- aanroepen en zichzelf gratis Premium geven — dat is met de anon-key en een
-- geldige sessie gewoon toegestaan tenzij je dit expliciet afsluit.
-- Kolom-rechten zijn in Postgres een aparte laag bovenop RLS; dit combineert
-- prima met de policy hierboven.
REVOKE UPDATE ON public.profiles FROM authenticated;

GRANT UPDATE (
  current_language,
  interface_language,
  total_xp,
  level,
  streak,
  last_activity_date,
  theme,
  email
) ON public.profiles TO authenticated;

-- Bewust NIET in de lijst: premium, premium_expires_at, username, id,
-- created_at. Die mag alleen de service_role wijzigen (gebeurt al correct
-- in api/kofi-webhook.js en api/delete-account.js, die de service_role key
-- gebruiken die RLS/kolomrechten sowieso omzeilt).

-- Gebruiker kan zijn eigen profiel aanmaken (tijdens registratie)
CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- 3. Automatisch profiel aanmaken na registratie (trigger)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Profiel wordt aangemaakt vanuit de app na registratie
  -- Deze trigger is als fallback
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 🧪 TESTING NOTE (found during a full-file consistency sweep, not part of
-- the original code): this pre-existing function had neither a GRANT nor
-- a REVOKE, unlike every function added this session, which all got an
-- explicit REVOKE FROM PUBLIC even where — like here — direct invocation
-- outside a real trigger context would just error (NEW isn't bound). Not
-- a live risk either way, but for consistency with the posture applied
-- everywhere else in this file:
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, authenticated, anon;

-- Also found while checking this: there's no CREATE TRIGGER anywhere in
-- this file that actually attaches handle_new_user() to
-- `AFTER INSERT ON auth.users`. The comment above calls it a fallback,
-- but as it stands it's defined and never wired up — dead code, not a
-- bug I'm fixing here. The app's own registration flow (apiRegister in
-- src/utils/storage.ts) already creates the profiles row directly and
-- cleans up correctly if that insert fails, so this doesn't leave a
-- functional gap today. Wiring this up for real would mean deciding what
-- the fallback should actually populate (a username has to come from
-- somewhere) — a product decision, not something to guess at here.

-- 4. Index voor snelle username-lookup (voor login met username)
CREATE INDEX IF NOT EXISTS profiles_username_idx ON public.profiles (LOWER(username));
CREATE INDEX IF NOT EXISTS profiles_email_idx    ON public.profiles (LOWER(email));

-- ══════════════════════════════════════════════════
-- 5. VEILIGE USERNAME → EMAIL LOOKUP (voor login)
-- ══════════════════════════════════════════════════
-- ⚠️ BELANGRIJK: de RLS-policy hierboven ("auth.uid() = id") betekent dat
-- een NIET-ingelogde gebruiker helemaal GEEN rij uit profiles mag lezen.
-- Dat brak in de praktijk de "log in met gebruikersnaam"-functie, want
-- de app moet vóór het inloggen (dus zonder sessie) de e-mail bij een
-- username kunnen opzoeken.
--
-- Oplossing: één smalle, veilige database-functie (SECURITY DEFINER) die
-- ALLEEN het e-mailadres teruggeeft — nooit de rest van het profiel
-- (geen XP, streak, premium-status, enz.). De onderliggende tabel blijft
-- via RLS volledig afgeschermd voor iedereen behalve de eigenaar.
CREATE OR REPLACE FUNCTION public.get_email_by_username(lookup_username TEXT)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  found_email TEXT;
BEGIN
  SELECT email INTO found_email
  FROM public.profiles
  WHERE LOWER(username) = LOWER(TRIM(lookup_username))
  LIMIT 1;

  RETURN found_email; -- geeft NULL terug als username niet bestaat
END;
$$;

-- Alleen uitvoerbaar (niet: rechtstreekse tabeltoegang) door anon/authenticated
GRANT EXECUTE ON FUNCTION public.get_email_by_username(TEXT) TO anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.get_email_by_username(TEXT) FROM PUBLIC;

-- ══════════════════════════════════════════════════
-- 6. VEILIGE USERNAME-BESCHIKBAARHEID CHECK (voor registratie)
-- ══════════════════════════════════════════════════
-- ⚠️ ZELFDE PROBLEEM ALS HIERBOVEN: vóór registratie is er nog geen
-- sessie, dus RLS blokkeerde de oude ".select('id').ilike('username',...)"
-- check volledig — die gaf altijd "niet gevonden" terug, ook als de
-- username al bestond. Resultaat: de check deed feitelijk niets.
--
-- Deze functie geeft ALLEEN true/false terug — geen enkele profieldata.
CREATE OR REPLACE FUNCTION public.username_available(check_username TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN NOT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE LOWER(username) = LOWER(TRIM(check_username))
  );
END;
$$;

GRANT EXECUTE ON FUNCTION public.username_available(TEXT) TO anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.username_available(TEXT) FROM PUBLIC;

-- ══════════════════════════════════════════════════
-- 7. SERVER-AUTHORITATIVE XP / LEVEL / STREAK
-- ══════════════════════════════════════════════════
-- 🔒 SECURITY FIX (audit — the #1 P0 item in both reviews): total_xp,
-- level, streak and last_activity_date were in the GRANT UPDATE list above,
-- which means any authenticated user could open the browser console and
-- run:
--   supabase.from('profiles').update({ total_xp: 999999, level: 100 })
--            .eq('id', <their own id>)
-- ...and it would succeed — RLS only decides WHICH ROW you may touch, not
-- what values you're allowed to put in it. That's not an RLS bug, it's a
-- missing layer: game-state fields need to be write-only-through-
-- server-logic, the same way `premium` already correctly is above.
--
-- Fix: remove those 4 columns from direct client UPDATE, and add
-- SECURITY DEFINER functions that compute the award themselves instead of
-- trusting whatever the client sends. The app's own frontend code barely
-- had to change for this — see src/contexts/AuthContext.tsx, which routes
-- through award_xp() / reset_learning_progress() automatically whenever an
-- update touches these fields, so all 5 pages that call createXPAwarder()
-- (ArenaPage, TestPage, GrammarPage, WordOfTheDayPage, VocabularyPage) keep
-- working completely unchanged.

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS coins                  INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS streak_freezes         INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS xp_awarded_today       INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS xp_awarded_today_date  TEXT    DEFAULT NULL;
-- `coins` is prep for making the Arena/shop economy server-authoritative
-- too (currently still localStorage — see CHANGELOG_AUDIT_FIXES.md for why
-- that one's a deliberately separate, not-yet-wired follow-up). Nothing
-- reads/writes it yet, but it's deliberately NOT in the GRANT list below,
-- so it's safe to add now and wire up later without a second migration.

-- Re-issue the grant WITHOUT total_xp / level / streak / last_activity_date.
-- (Re-running REVOKE+GRANT here is safe if you re-run this whole file on an
-- existing database — both statements are idempotent.)
REVOKE UPDATE ON public.profiles FROM authenticated;

GRANT UPDATE (
  current_language,
  interface_language,
  theme,
  email
) ON public.profiles TO authenticated;

-- Bewust NIET in de lijst: premium, premium_expires_at, username, id,
-- created_at, total_xp, level, streak, last_activity_date, coins,
-- streak_freezes, xp_awarded_today, xp_awarded_today_date. Die mogen alleen
-- de service_role (webhooks) of de SECURITY DEFINER functies hieronder
-- aanpassen.

-- Mirrors xpRequiredForLevel() / computeLevel() in src/utils/xp.ts EXACTLY
-- (same formula, same while-loop shape) — if you ever tune the XP curve,
-- change it in both places or the client and server will disagree about
-- what level someone is.
CREATE OR REPLACE FUNCTION public.xp_required_for_level(p_level INTEGER)
RETURNS INTEGER
LANGUAGE sql
IMMUTABLE
AS $$
  SELECT CASE WHEN p_level <= 1 THEN 0 ELSE 50 * p_level * (p_level - 1) END;
$$;

-- 🧪 TESTING NOTE: Postgres grants EXECUTE on new functions to PUBLIC by
-- default (unlike tables). These 3 helpers are pure/read-only and have no
-- side effects, so leaving that default wouldn't have been an actual
-- vulnerability — but it WOULD have been inconsistent with every other
-- function in this file (all explicitly locked down), and defense in depth
-- is cheap here. Found by cross-checking GRANT/REVOKE counts against
-- function counts while verifying this migration, not by inspection alone.
REVOKE EXECUTE ON FUNCTION public.xp_required_for_level(INTEGER) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.xp_required_for_level(INTEGER) TO authenticated;

CREATE OR REPLACE FUNCTION public.compute_level(p_total_xp INTEGER)
RETURNS INTEGER
LANGUAGE plpgsql
IMMUTABLE
AS $$
DECLARE
  v_level INTEGER := 1;
BEGIN
  WHILE public.xp_required_for_level(v_level + 1) <= p_total_xp LOOP
    v_level := v_level + 1;
  END LOOP;
  RETURN v_level;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.compute_level(INTEGER) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.compute_level(INTEGER) TO authenticated;

-- 🧪 TESTING NOTE: an earlier draft of this function whitelisted exact
-- values (5, 10, 15, 20, 30, 50) pulled from XP_REWARDS in src/utils/xp.ts.
-- While verifying that list against every actual call site, ArenaPage.tsx
-- turned out to award XP through its OWN separate constant —
-- `const XP_PER_LEVEL = 20` — never imported from XP_REWARDS at all. It
-- happened to already be a value in the list, but that was luck, not
-- design: any future retuning of either constant, in either file, could
-- silently break legitimate rewards with an exact-match whitelist. A range
-- cap is far more robust to exactly that kind of drift between files,
-- while still closing the actual vulnerability (a client sending 999999).
-- 100 is comfortably above every legitimate reward in the app today
-- (max is 50) with headroom for reasonable future tuning.
CREATE OR REPLACE FUNCTION public.is_allowed_xp_amount(p_amount INTEGER)
RETURNS BOOLEAN
LANGUAGE sql
IMMUTABLE
AS $$
  SELECT p_amount > 0 AND p_amount <= 100;
$$;

REVOKE EXECUTE ON FUNCTION public.is_allowed_xp_amount(INTEGER) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_allowed_xp_amount(INTEGER) TO authenticated;

CREATE OR REPLACE FUNCTION public.award_xp(p_amount INTEGER, p_source TEXT DEFAULT NULL)
RETURNS public.profiles
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id    UUID := auth.uid();
  v_today      TEXT := TO_CHAR(NOW(), 'YYYY-MM-DD');
  v_yesterday  TEXT := TO_CHAR(NOW() - INTERVAL '1 day', 'YYYY-MM-DD');
  v_two_days   TEXT := TO_CHAR(NOW() - INTERVAL '2 days', 'YYYY-MM-DD');
  v_profile    public.profiles;
  v_new_streak INTEGER;
  v_new_freezes INTEGER;
  v_xp_today   INTEGER;
  v_daily_cap  CONSTANT INTEGER := 1000; -- generous ceiling; tune to taste
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'not_authenticated';
  END IF;

  IF NOT public.is_allowed_xp_amount(p_amount) THEN
    RAISE EXCEPTION 'invalid_xp_amount';
  END IF;

  SELECT * INTO v_profile FROM public.profiles WHERE id = v_user_id FOR UPDATE;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'profile_not_found';
  END IF;

  -- ⚠️ Deliberate scope note: this whitelists the AMOUNT, not the specific
  -- lesson/exercise the client claims to have completed (that would need a
  -- lesson_id + a completions table for true idempotency — a good next
  -- step, not done here). What this DOES fully close: a client can no
  -- longer write an arbitrary total_xp/level/streak directly. What it
  -- narrows but doesn't eliminate: someone could still script award_xp(50)
  -- in a loop. The daily cap below bounds that to "roughly one generous
  -- day's worth, once, until it resets" instead of "unlimited."
  v_xp_today := CASE WHEN v_profile.xp_awarded_today_date IS DISTINCT FROM v_today
                      THEN 0 ELSE v_profile.xp_awarded_today END;

  IF v_xp_today + p_amount > v_daily_cap THEN
    RAISE EXCEPTION 'daily_xp_cap_reached';
  END IF;

  -- Streak: active today already → unchanged. Exactly one day missed →
  -- increment. Exactly one day missed AND a streak freeze is banked →
  -- bridge the gap and consume the freeze. Anything older → reset to 1.
  v_new_freezes := v_profile.streak_freezes;
  IF v_profile.last_activity_date = v_today THEN
    v_new_streak := GREATEST(v_profile.streak, 1);
  ELSIF v_profile.last_activity_date = v_yesterday THEN
    v_new_streak := v_profile.streak + 1;
  ELSIF v_profile.last_activity_date = v_two_days AND v_profile.streak_freezes > 0 THEN
    v_new_streak := v_profile.streak + 1;
    v_new_freezes := v_profile.streak_freezes - 1;
  ELSE
    v_new_streak := 1;
  END IF;

  UPDATE public.profiles
  SET total_xp = v_profile.total_xp + p_amount,
      level = public.compute_level(v_profile.total_xp + p_amount),
      streak = v_new_streak,
      last_activity_date = v_today,
      streak_freezes = v_new_freezes,
      xp_awarded_today = v_xp_today + p_amount,
      xp_awarded_today_date = v_today
  WHERE id = v_user_id
  RETURNING * INTO v_profile;

  RETURN v_profile;
END;
$$;

GRANT EXECUTE ON FUNCTION public.award_xp(INTEGER, TEXT) TO authenticated;
REVOKE EXECUTE ON FUNCTION public.award_xp(INTEGER, TEXT) FROM PUBLIC;

-- Streak-only correction, called by useStreakReconciler.ts on login/app
-- open to apply "you missed a day" decay. Takes NO client-supplied number
-- at all — recomputed purely from last_activity_date, which only
-- award_xp() above can move forward. That's what makes it safe to expose
-- with zero input validation: there IS no input to validate.
CREATE OR REPLACE FUNCTION public.reconcile_streak()
RETURNS public.profiles
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id   UUID := auth.uid();
  v_today     TEXT := TO_CHAR(NOW(), 'YYYY-MM-DD');
  v_yesterday TEXT := TO_CHAR(NOW() - INTERVAL '1 day', 'YYYY-MM-DD');
  v_profile   public.profiles;
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'not_authenticated';
  END IF;

  SELECT * INTO v_profile FROM public.profiles WHERE id = v_user_id FOR UPDATE;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'profile_not_found';
  END IF;

  -- Only ever decays the streak to 0 on a genuine gap — incrementing only
  -- ever happens inside award_xp(), tied to an actual XP-earning event.
  IF v_profile.last_activity_date IS NULL
     OR v_profile.last_activity_date NOT IN (v_today, v_yesterday) THEN
    UPDATE public.profiles SET streak = 0 WHERE id = v_user_id RETURNING * INTO v_profile;
  END IF;

  RETURN v_profile;
END;
$$;

GRANT EXECUTE ON FUNCTION public.reconcile_streak() TO authenticated;
REVOKE EXECUTE ON FUNCTION public.reconcile_streak() FROM PUBLIC;

-- Settings → Reset Progress (audit #24: this now genuinely zeroes the
-- server-side numbers; the matching localStorage cleanup for everything
-- else — mistakes, badges, arena state, XP history, etc. — lives in
-- src/utils/resetProgress.ts).
CREATE OR REPLACE FUNCTION public.reset_learning_progress()
RETURNS public.profiles
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_profile public.profiles;
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'not_authenticated';
  END IF;

  UPDATE public.profiles
  SET total_xp = 0,
      level = 1,
      streak = 0,
      last_activity_date = NULL,
      xp_awarded_today = 0,
      xp_awarded_today_date = NULL,
      coins = 0,
      streak_freezes = 0
  WHERE id = v_user_id
  RETURNING * INTO v_profile;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'profile_not_found';
  END IF;

  RETURN v_profile;
END;
$$;

GRANT EXECUTE ON FUNCTION public.reset_learning_progress() TO authenticated;
REVOKE EXECUTE ON FUNCTION public.reset_learning_progress() FROM PUBLIC;

-- ══════════════════════════════════════════════════
-- 8. SERVER-AUTHORITATIVE COINS / HEARTS-PURCHASES / MYSTERY BOX / GIFTS
-- ══════════════════════════════════════════════════
-- 🔒 SECURITY FIX (audit #2, #3 — flagged, deliberately deferred in the
-- previous pass, done now): coins lived entirely in a client localStorage
-- blob (`langlearn_arena_v3`), read/written directly by both
-- ArenaPage.tsx and src/utils/coins.ts. Same category of issue as XP in
-- section 7 above, extended here to cover every coin-earning and
-- coin-spending action: Arena level completion, the Dashboard's Daily
-- Chest, buying a heart/streak-repair/streak-shield, opening the Mystery
-- Box, and sending/redeeming gift codes.
--
-- Each purchase gets its OWN function (not one generic "spend N coins" +
-- a client-trusted side effect) — spend-and-effect happen in the SAME
-- atomic statement, so there's no window where a client could report a
-- successful spend without it actually happening, or apply an effect
-- without a matching spend.
--
-- 🧪 TESTING NOTE: hearts themselves (the 0-5 count during gameplay, and
-- their 30-minute regen) are DELIBERATELY NOT moved server-side here.
-- They're a session pacing mechanic with no persisted value of their own
-- — the only place real value changes hands is when coins buy one back,
-- which IS covered below. Round-tripping to the server on every wrong
-- answer would add latency to the most frequent interaction in the app
-- for a check that doesn't protect anything real; the Dutch audit's own
-- speed/performance priorities argue against exactly that trade.

-- Boolean-shaped, stored as an int for simplicity — mirrors
-- hasStreakFreeze()/grantStreakFreeze() in streak.ts EXACTLY, which are a
-- true on/off flag ("a second Shield doesn't do anything, it's not
-- stackable" — see the comment in mysteryBox.ts). Capped at 1 everywhere
-- below, not just incremented, so the server can't drift from that
-- boolean semantic into an unbounded counter.

CREATE OR REPLACE FUNCTION public.is_allowed_coin_amount(p_amount INTEGER)
RETURNS BOOLEAN
LANGUAGE sql
IMMUTABLE
AS $$
  -- Range, not an exact whitelist — same reasoning as is_allowed_xp_amount
  -- above. Every legitimate amount today (2, 5, 8, 12, 15, 25, 50) fits
  -- comfortably inside 1..50; a range survives future retuning of any one
  -- of those constants without needing a matching SQL change.
  SELECT p_amount > 0 AND p_amount <= 50;
$$;
REVOKE EXECUTE ON FUNCTION public.is_allowed_coin_amount(INTEGER) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_allowed_coin_amount(INTEGER) TO authenticated;

-- Arena level completion, Daily Chest claim.
CREATE OR REPLACE FUNCTION public.earn_coins(p_amount INTEGER)
RETURNS public.profiles
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_profile public.profiles;
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'not_authenticated';
  END IF;
  IF NOT public.is_allowed_coin_amount(p_amount) THEN
    RAISE EXCEPTION 'invalid_coin_amount';
  END IF;

  UPDATE public.profiles
  SET coins = coins + p_amount
  WHERE id = v_user_id
  RETURNING * INTO v_profile;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'profile_not_found';
  END IF;

  RETURN v_profile;
END;
$$;
-- Clients must use claim_daily_chest / complete_arena_level (see security_hardening.sql).
-- earn_coins remains as internal helper only.
REVOKE EXECUTE ON FUNCTION public.earn_coins(INTEGER) FROM PUBLIC, authenticated, anon;

-- Buy a heart. Note there's no "already full" check server-side — the
-- server doesn't track the hearts count (see testing note above), so it
-- can't verify that. Worst case if a client buys past full: their own
-- local Math.min(MAX_HEARTS, ...) clamp (already in ArenaPage.tsx)
-- absorbs it — wasted coins, not an exploit.
CREATE OR REPLACE FUNCTION public.buy_heart()
RETURNS public.profiles
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_cost    CONSTANT INTEGER := 10; -- HEART_COST in ArenaPage.tsx
  v_profile public.profiles;
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'not_authenticated';
  END IF;

  UPDATE public.profiles
  SET coins = coins - v_cost
  WHERE id = v_user_id AND coins >= v_cost
  RETURNING * INTO v_profile;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'insufficient_coins';
  END IF;

  RETURN v_profile;
END;
$$;
GRANT EXECUTE ON FUNCTION public.buy_heart() TO authenticated;
REVOKE EXECUTE ON FUNCTION public.buy_heart() FROM PUBLIC;

-- Buy-back for an ALREADY broken streak (ArenaPage.tsx's "Repair Streak"
-- shop item). Validates "broken" against the server's own
-- last_activity_date/streak — not a client-supplied flag — then restores
-- continuity by treating yesterday as covered and resuming the count at 1.
--
-- 🧪 TESTING NOTE: this is a judgment call, not a literal behavior port.
-- The original client-side version replayed a full local activity
-- calendar to decide "broken," and there's no equivalent calendar
-- server-side (see section 7's testing notes on streak). Restoring to
-- streak=1 rather than trying to recover a pre-break number is the
-- simpler, defensible choice — that pre-break number may not even be
-- recoverable once reconcile_streak() has already zeroed it.
CREATE OR REPLACE FUNCTION public.buy_streak_repair()
RETURNS public.profiles
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id   UUID := auth.uid();
  v_cost      CONSTANT INTEGER := 20; -- STREAK_REPAIR_COST in ArenaPage.tsx
  v_today     TEXT := TO_CHAR(NOW(), 'YYYY-MM-DD');
  v_yesterday TEXT := TO_CHAR(NOW() - INTERVAL '1 day', 'YYYY-MM-DD');
  v_profile   public.profiles;
  v_is_broken BOOLEAN;
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'not_authenticated';
  END IF;

  SELECT * INTO v_profile FROM public.profiles WHERE id = v_user_id FOR UPDATE;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'profile_not_found';
  END IF;

  v_is_broken := v_profile.last_activity_date IS NULL
              OR v_profile.last_activity_date NOT IN (v_today, v_yesterday);

  IF NOT v_is_broken THEN
    RAISE EXCEPTION 'streak_not_broken';
  END IF;
  IF v_profile.coins < v_cost THEN
    RAISE EXCEPTION 'insufficient_coins';
  END IF;

  UPDATE public.profiles
  SET coins = coins - v_cost,
      last_activity_date = v_yesterday,
      streak = GREATEST(v_profile.streak, 1)
  WHERE id = v_user_id
  RETURNING * INTO v_profile;

  RETURN v_profile;
END;
$$;
GRANT EXECUTE ON FUNCTION public.buy_streak_repair() TO authenticated;
REVOKE EXECUTE ON FUNCTION public.buy_streak_repair() FROM PUBLIC;

-- Dashboard's "Streak Shield" purchase — grants the SAME banked freeze
-- consumed automatically inside award_xp() (section 7). Capped at 1, not
-- incremented, matching hasStreakFreeze()'s boolean semantic.
CREATE OR REPLACE FUNCTION public.buy_streak_shield()
RETURNS public.profiles
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_cost    CONSTANT INTEGER := 15; -- STREAK_SHIELD_COST in DashboardPage.tsx
  v_profile public.profiles;
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'not_authenticated';
  END IF;

  UPDATE public.profiles
  SET coins = coins - v_cost,
      streak_freezes = 1
  WHERE id = v_user_id AND coins >= v_cost
  RETURNING * INTO v_profile;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'insufficient_coins';
  END IF;

  RETURN v_profile;
END;
$$;
GRANT EXECUTE ON FUNCTION public.buy_streak_shield() TO authenticated;
REVOKE EXECUTE ON FUNCTION public.buy_streak_shield() FROM PUBLIC;

-- Mystery Box. Ports rollMysteryPrize() from src/utils/mysteryBox.ts
-- verbatim (same thresholds, same order) — see that file's own comment
-- for the documented probability table. Rolling server-side (not just
-- spending server-side) is the part that actually matters here: if the
-- roll stayed client-side, a real coin spend could still be paired with a
-- client-reported "I rolled the jackpot" outcome that never really
-- happened — coins-in-then-arbitrary-coins-out, laundering straight
-- through the one part of this system left ungated.
CREATE OR REPLACE FUNCTION public.open_mystery_box()
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id   UUID := auth.uid();
  v_cost      CONSTANT INTEGER := 12; -- MYSTERY_BOX_COST in ArenaPage.tsx
  v_profile   public.profiles;
  v_roll      DOUBLE PRECISION := random(); -- [0, 1), same as JS Math.random()
  v_prize_type TEXT;
  v_prize_amount INTEGER := 0;
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'not_authenticated';
  END IF;

  SELECT * INTO v_profile FROM public.profiles WHERE id = v_user_id FOR UPDATE;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'profile_not_found';
  END IF;
  IF v_profile.coins < v_cost THEN
    RAISE EXCEPTION 'insufficient_coins';
  END IF;

  IF v_roll < 0.40 THEN
    v_prize_type := 'coins'; v_prize_amount := 5;
  ELSIF v_roll < 0.65 THEN
    v_prize_type := 'coins'; v_prize_amount := 12;
  ELSIF v_roll < 0.85 THEN
    v_prize_type := 'coins'; v_prize_amount := 25;
  ELSIF v_roll < 0.95 THEN
    IF v_profile.streak_freezes > 0 THEN
      -- Already has a shield banked — a second one is a no-op, so this
      -- roll pays out its "similar value" coin fallback instead, exactly
      -- like the client version already did.
      v_prize_type := 'coins'; v_prize_amount := 15;
    ELSE
      v_prize_type := 'shield'; v_prize_amount := 0;
    END IF;
  ELSE
    v_prize_type := 'coins'; v_prize_amount := 50;
  END IF;

  UPDATE public.profiles
  SET coins = coins - v_cost + v_prize_amount,
      streak_freezes = CASE WHEN v_prize_type = 'shield' THEN 1 ELSE streak_freezes END
  WHERE id = v_user_id
  RETURNING * INTO v_profile;

  RETURN json_build_object(
    'prizeType', v_prize_type,
    'prizeAmount', v_prize_amount,
    'profile', row_to_json(v_profile)
  );
END;
$$;
GRANT EXECUTE ON FUNCTION public.open_mystery_box() TO authenticated;
REVOKE EXECUTE ON FUNCTION public.open_mystery_box() FROM PUBLIC;

-- ── Gift codes ──────────────────────────────────────────────────────────
-- 🔒 Why this needs to exist at all now: the OLD gift system (still in
-- src/utils/giftCode.ts) encodes the payload directly INTO the shareable
-- code (base64 + checksum) — redeeming it is a pure client-side decode,
-- no server involved. Once coin SPENDING is server-verified (buy_heart
-- etc. above) but coin EARNING via gift redemption still isn't, redeeming
-- a hand-crafted code becomes the one remaining way to mint free coins —
-- a bypass of everything else in this section. A real table + a
-- single-use, atomic redeem function closes that.
-- 🧪 TESTING NOTE: gen_random_uuid() is built into Postgres 13+ (which any
-- current Supabase project is on), so this is almost certainly a no-op —
-- but nothing ELSE in this file happens to already rely on that function,
-- so there was nothing to confirm it against. Cheap insurance.
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.gift_codes (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code         TEXT UNIQUE NOT NULL,
  prize_type   TEXT NOT NULL CHECK (prize_type IN ('coins', 'shield')),
  prize_amount INTEGER NOT NULL DEFAULT 0,
  created_by   UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  redeemed_by  UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  redeemed_at  TIMESTAMPTZ,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.gift_codes ENABLE ROW LEVEL SECURITY;

-- 🧪 TESTING NOTE: RLS was enabled here with NO policies at all — every
-- direct table access (including SELECT) is denied by default in that
-- state, which was intentional for INSERT/UPDATE (those only ever happen
-- through create_gift_code()/redeem_gift_code() above). Found while
-- wiring up Settings' data export to include gift-code history: a plain
-- `select().eq('created_by', ...)` from the client would have silently
-- returned zero rows — no error, just quietly incomplete data, the kind
-- of gap that's easy to miss because nothing LOOKS broken. Read-only,
-- own-rows-only access is safe to allow directly.
CREATE POLICY "Users can view own gift codes"
  ON public.gift_codes FOR SELECT
  TO authenticated
  USING (created_by = auth.uid() OR redeemed_by = auth.uid());

CREATE OR REPLACE FUNCTION public.create_gift_code(p_prize_type TEXT, p_prize_amount INTEGER)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_cost    INTEGER;
  v_code    TEXT;
  v_profile public.profiles;
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'not_authenticated';
  END IF;
  IF p_prize_type NOT IN ('coins', 'shield') THEN
    RAISE EXCEPTION 'invalid_prize_type';
  END IF;

  -- Sending a coin gift costs exactly the coins being gifted (mirrors
  -- sendGift() in DashboardPage.tsx); sending a shield gift costs the
  -- shield's shop price, same as buy_streak_shield() above.
  IF p_prize_type = 'coins' THEN
    IF NOT public.is_allowed_coin_amount(p_prize_amount) THEN
      RAISE EXCEPTION 'invalid_coin_amount';
    END IF;
    v_cost := p_prize_amount;
  ELSE
    v_cost := 15; -- STREAK_SHIELD_COST
  END IF;

  UPDATE public.profiles
  SET coins = coins - v_cost
  WHERE id = v_user_id AND coins >= v_cost
  RETURNING * INTO v_profile;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'insufficient_coins';
  END IF;

  -- Short, shareable, collision-checked code — 8 chars from a 32-symbol
  -- alphabet (no 0/O/1/I, so it reads back unambiguously out loud or from
  -- a screenshot) is ~40 bits of entropy, plenty for a value this small
  -- with a bounded lifetime, while staying short enough to actually type.
  LOOP
    v_code := (
      SELECT string_agg(substr('ABCDEFGHJKLMNPQRSTUVWXYZ23456789', (random() * 32)::INTEGER + 1, 1), '')
      FROM generate_series(1, 8)
    );
    EXIT WHEN NOT EXISTS (SELECT 1 FROM public.gift_codes WHERE code = v_code);
  END LOOP;

  INSERT INTO public.gift_codes (code, prize_type, prize_amount, created_by)
  VALUES (v_code, p_prize_type, CASE WHEN p_prize_type = 'coins' THEN p_prize_amount ELSE 0 END, v_user_id);

  RETURN v_code;
END;
$$;
GRANT EXECUTE ON FUNCTION public.create_gift_code(TEXT, INTEGER) TO authenticated;
REVOKE EXECUTE ON FUNCTION public.create_gift_code(TEXT, INTEGER) FROM PUBLIC;

CREATE OR REPLACE FUNCTION public.redeem_gift_code(p_code TEXT)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_gift    public.gift_codes;
  v_profile public.profiles;
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'not_authenticated';
  END IF;

  SELECT * INTO v_gift FROM public.gift_codes WHERE code = UPPER(TRIM(p_code)) FOR UPDATE;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'gift_code_not_found';
  END IF;
  IF v_gift.redeemed_by IS NOT NULL THEN
    RAISE EXCEPTION 'gift_code_already_used';
  END IF;
  IF v_gift.created_by = v_user_id THEN
    RAISE EXCEPTION 'cannot_redeem_own_gift';
  END IF;

  UPDATE public.gift_codes
  SET redeemed_by = v_user_id, redeemed_at = NOW()
  WHERE id = v_gift.id;

  IF v_gift.prize_type = 'coins' THEN
    UPDATE public.profiles SET coins = coins + v_gift.prize_amount
    WHERE id = v_user_id RETURNING * INTO v_profile;
  ELSE
    UPDATE public.profiles SET streak_freezes = 1
    WHERE id = v_user_id RETURNING * INTO v_profile;
  END IF;

  RETURN json_build_object(
    'prizeType', v_gift.prize_type,
    'prizeAmount', v_gift.prize_amount,
    'profile', row_to_json(v_profile)
  );
END;
$$;
GRANT EXECUTE ON FUNCTION public.redeem_gift_code(TEXT) TO authenticated;
REVOKE EXECUTE ON FUNCTION public.redeem_gift_code(TEXT) FROM PUBLIC;

-- ══════════════════════════════════════════════════
-- 9. KEEP profiles.email IN SYNC WITH auth.users.email
-- ══════════════════════════════════════════════════
-- 🔒 FIX (audit #12 — "email change can desync profiles.email from the
-- real auth email"): SettingsPage.tsx's change-email flow calls
-- supabase.auth.updateUser({ email: newEmail }) then immediately wrote
-- newEmail straight into profiles.email too. The problem: by Supabase's
-- OWN default behaviour, an email change on auth.users does NOT take
-- effect immediately — it requires clicking a confirmation link (sent to
-- both the old and new address), and if that's never clicked, the auth
-- email never actually changes. profiles.email was being updated
-- unconditionally and immediately regardless, so a user who requested a
-- change but never confirmed it would be left with profiles.email showing
-- a DIFFERENT address than what they actually log in with — permanently,
-- silently, until someone notices.
--
-- Fix: a trigger, not more application-code discipline. profiles.email
-- now only ever changes in response to auth.users.email ACTUALLY
-- changing (which only happens post-confirmation) — regardless of which
-- code path caused that (this Settings page, a future admin tool, a
-- support intervention via the Supabase dashboard, anything). One source
-- of truth, enforced at the data layer, the same approach used for XP/
-- coins elsewhere in this file. SettingsPage.tsx's handleChangeEmail no
-- longer writes to profiles.email at all — see the code comment there.
CREATE OR REPLACE FUNCTION public.sync_profile_email()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.profiles SET email = NEW.email WHERE id = NEW.id;
  RETURN NEW;
END;
$$;

-- Consistent with every other function in this file (defense in depth),
-- even though a trigger function can't meaningfully be called directly —
-- NEW/OLD only bind during real trigger execution, so a direct RPC call
-- would just error, not do anything.
REVOKE EXECUTE ON FUNCTION public.sync_profile_email() FROM PUBLIC, authenticated;

DROP TRIGGER IF EXISTS on_auth_email_change ON auth.users;
CREATE TRIGGER on_auth_email_change
  AFTER UPDATE OF email ON auth.users
  FOR EACH ROW
  WHEN (OLD.email IS DISTINCT FROM NEW.email)
  EXECUTE FUNCTION public.sync_profile_email();
