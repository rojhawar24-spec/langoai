# ONE migration chain (required order)

Run in Supabase SQL Editor **exactly** in this order:

1. `schema.sql`
2. `email_verification.sql`
3. **`content_catalog.sql`**  ← creates `arena_catalog` + `learning_content` (+ seeds)
4. `security_hardening.sql` ← RPCs that depend on those tables

Do **not** run `security_hardening.sql` before `content_catalog.sql`.

Re-run `content_catalog.sql` whenever Arena JSON or content IDs change, then keep `security_hardening.sql` RPCs.

Local check (CI):

```bash
npm run check:catalog
```
