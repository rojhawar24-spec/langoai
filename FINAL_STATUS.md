# FINAL STATUS

## Migration order (ONE chain)

1. `schema.sql`
2. `email_verification.sql`
3. `content_catalog.sql`  ← **required before hardening**
4. `security_hardening.sql`

Documented in `supabase/MIGRATION_ORDER.md`.  
CI/local: `npm run check:catalog`

## exercise_correct + vocabulary_word

- Require non-empty `p_ref` present in `learning_content`
- Unique index: one reward per (user, kind, ref) including these kinds
- Vocab IDs seeded from `src/content/words/*.ts` (`en-w-1`, …)
- Exercise IDs seeded as `exercise:{grammarStem}`
- Fake ref → `unknown_content_id`

## Arena + learning catalog sync

- `scripts/check-content-catalog.mjs` compares frontend sources ↔ SQL
- Result when last run: **OK**

## npm install / typecheck / test / build

**NOT EXECUTED** fully in this environment (sandbox timeouts/session).  
Run locally:

```bash
npm install
npm run check:catalog
npm run typecheck
npm test
npm run build
```

## Direct attack expectations (after live SQL)

| Attack | Expected |
|--------|----------|
| award_xp / earn_coins | DENIED (no EXECUTE) |
| fake lesson/test/vocab/exercise ref | DENIED |
| fake/locked arena level | DENIED |
| duplicate activity/chest/arena | DENIED / unique |

## PRODUCTION BLOCKERS

1. Live Supabase must run full migration chain — **NOT VERIFIED**
2. Live payment/cross-device/MFA attacks — **NOT VERIFIED**
3. Frontend must pass real `p_ref` (word id / exercise id / lesson id) into RPCs — wire call sites if still using amount-only award path

## FIXED (repo)

- Migration order docs + catalog-first
- Catalog generation + drift check
- Vocab/exercise catalog + uniqueness
- Arena catalog + prereq lock
- Payment weak fallback removed (earlier)

## REMAINING

- Live verification
- Wire every UI XP path to `complete_learning_activity(kind, realId)` with real IDs
- npm typecheck/test/build on your machine

## NOT VERIFIED

- Production database objects
- Real concurrent attacks on your project
- Full CI build here

## FINAL VERDICT

**READY FOR TESTING**

(Not READY FOR PRODUCTION — live DB + end-to-end attacks still required.)
