# LangoAI — Security fixes applied (code-level)

## MUST RUN IN SUPABASE
1. `supabase/schema.sql` (if not already)
2. `supabase/email_verification.sql`
3. **`supabase/security_hardening.sql`** (NEW — required)

Without step 3, `claim_daily_chest`, `complete_arena_level`, `grant_premium_entitlement`, and trigger fix are not live.

## Code changes in this package

| Area | Change |
|------|--------|
| Daily chest | `claim_daily_chest()` RPC + Dashboard uses it; PK (user_id, date) |
| Arena | `complete_arena_level(lang, season, level)` + ArenaPage uses it; PK prevents replay |
| earn_coins | **REVOKE** from authenticated — clients cannot call |
| Payment | Webhook updates `profiles.premium` via `grant_premium_entitlement` + KV txn idempotency; session stores `userId` |
| create-kofi-session | Requires Bearer auth; binds `userId` |
| verification-start | Rate limit IP + email (fail closed) |
| verification-complete | Atomic update `WHERE confirmed=false`; profile upsert recovery |
| verification-status | Rate limit; minimal response |
| AuthContext | No optimistic success on failed game-state RPC |
| MFA | auth-guard reset only after MFA success (not after password alone) |
| ipn.js | Returns 410 (disabled) |
| package-lock.json | Generated |

## Still NOT VERIFIED (needs your production)
- Whether SQL migrations are applied in **live** Supabase
- End-to-end Ko-fi webhook with real token
- Laptop → phone → laptop registration on production
- Live CSP response headers
- Full `npm test` / typecheck in CI with env secrets

## Attack expectations AFTER migration applied

| Attack | Expected |
|--------|----------|
| `rpc('earn_coins', {p_amount:50})` | **DENIED** (no execute grant) |
| `rpc('claim_daily_chest')` twice | 2nd fails `daily_chest_already_claimed` |
| `rpc('complete_arena_level', ...)` twice | 2nd fails `arena_level_already_completed` |
| localStorage clear + chest | Server still rejects second claim same day |
| Fake Arena localStorage only | No coins/XP without successful RPC |
| Webhook same txn twice | Idempotent (KV + processed_payments) |
| Frontend premium=true only | `/api/chat` still checks profiles |
| Fake profiles.premium client update | Column not in GRANT UPDATE list |
