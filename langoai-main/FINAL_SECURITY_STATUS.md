# FINAL SECURITY STATUS (repo code — not live production proof)

## PRODUCTION BLOCKERS
1. **NOT VERIFIED live**: `security_hardening.sql` must be applied in your Supabase (includes revoke award_xp/earn_coins, claim_daily_chest, complete_arena_level, complete_learning_activity, grant_premium_entitlement, handle_new_user trigger).
2. **NOT VERIFIED live**: Ko-fi webhook → profiles.premium → /api/chat on real deployment.
3. **NOT VERIFIED live**: Laptop → phone → laptop registration on production.
4. **PARTIAL**: `exercise_correct` / `vocabulary_word` can still be called repeatedly until daily XP cap (no per-item idempotency) — farm limited by cap, not proof of work for every item.
5. **PARTIAL**: grammar_lesson / test_passed require ref for uniqueness, but client can invent refs until content IDs are enforced against a server lesson list.

Until (1)–(3) are proven on your project: **DO NOT treat production as secure.**

## FIXED (in this repository)
- `earn_coins` revoked from authenticated
- `award_xp` revoked from authenticated  
- `claim_daily_chest()` + Dashboard
- `complete_arena_level()` + ArenaPage
- `complete_learning_activity(kind, ref)` + AuthContext routing (no client amount mint)
- AuthContext: no fake XP/coin success on RPC/network failure
- userToRow: no premium/XP/streak fields
- verification-start/status rate limits; verification-complete atomic
- Ko-fi session binds userId; webhook grants profiles.premium + txn idempotency
- package-lock.json present
- ipn.js disabled (410)

## REMAINING
- Live migration verification
- End-to-end payment + registration device tests
- Stronger lesson/test ID catalog checks server-side
- get_email_by_username privacy
- exercise_correct spam until daily cap

## NOT VERIFIED
- Actual Supabase object state
- Production headers/CSP response
- Real concurrent attack results against your project
- Full npm test/typecheck in CI with secrets

## localStorage keys (server must NOT trust)

| Key | Purpose | Server trusts? | Safe? |
|-----|---------|----------------|-------|
| langlearn_cookie_consent | UI | No | UI-only OK |
| langlearn_high_contrast | UI | No | OK |
| langlearn_dyslexia_font | UI | No | OK |
| langlearn_theme | UI | No | OK |
| langlearn_ui_language | UI | No | OK |
| langlearn_onboarding_* | UI flow | No | OK |
| langlearn_arena_v3 | local progress UI | **No** — rewards via complete_arena_level | OK if RPC only path |
| langlearn_daily_chest_date | UI cache | **No** — claim_daily_chest is authority | OK as cache |
| langlearn_completed_grammar | local checklist | No | progress-only |
| langlearn_learned_words | local | No | progress-only |
| langlearn_earned_badges | local | No | cosmetic unless server rewards |
| langlearn_used_gift_codes | local cache | **No** — redeem_gift_code DB | OK as cache |
| langlearn_mistakes | local | No | OK |
| langlearn_daily_xp | local UI | **No** | must not gate rewards |
| langlearn_language_xp | local UI | **No** | OK cosmetic |
| langlearn_last_activity | local | **No** — profiles.last_activity_date | OK cosmetic |
| langlearn_daily_goal | local preference | No | OK |
| langlearn_saved_position | UI | No | OK |
| langlearn_streak_dates | local | **No** — server streak | OK cosmetic |
| langlearn_streak_freeze* | local | **No** — profiles.streak_freezes | **unsafe if trusted** — must not be |
| langlearn_xp_history | local | No | OK |
| langlearn_wotd_progress | local | No | progress-only |

## Migration order (Supabase)
1. schema.sql  
2. email_verification.sql  
3. security_hardening.sql (entire file, including XP section at end)

## Attack expectations AFTER live migration
| Call | Expected |
|------|----------|
| rpc('award_xp', {p_amount:50}) | FAIL permission |
| rpc('earn_coins', {p_amount:50}) | FAIL permission |
| rpc('claim_daily_chest') ×2 | 2nd FAIL |
| rpc('complete_arena_level',...) ×2 | 2nd FAIL |
| rpc('complete_learning_activity',{p_kind:'grammar_lesson',p_ref:'x'}) ×2 | 2nd FAIL |
| rpc('complete_learning_activity',{p_kind:'fake'}) | FAIL invalid kind |
| Client .update({premium:true}) | FAIL column grant |
| Frontend premium only | chat still 403 without DB |

PASS for attacks = only after you run them on your project.
