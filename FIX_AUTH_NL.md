# 🔧 FIX Login / Sign-up / Wachtwoord vergeten — LangoAI

Deze zip bevat **2 code-fixes** + deze handleiding.
Gratis Supabase + gratis Vercel — niks betalen.

---

## Wat is er gefixt in de code

1. **`src/utils/storage.ts`**  
   Hardcoded `https://langoaiapp.vercel.app` → dynamische `window.location.origin`  
   (werkt lokaal én op elke Vercel-URL)

2. **`api/verification-start.js`**  
   Rate-limit faalde **dicht** als Vercel KV niet bestond → registratie altijd kapot.  
   Nu: fail-**open** (registratie werkt zonder KV). Zet later KV aan voor echte rate-limit.

---

## Wat JIJ nog moet doen (verplicht)

### 1. Supabase Auth URLs (5 minuten)

Dashboard → **Authentication → URL Configuration**

- **Site URL** = jouw echte site, bijv.  
  `https://langoai-two.vercel.app`  
  of `https://langoaiapp.vercel.app`

- **Redirect URLs** (alles toevoegen):
  ```
  http://localhost:5173/**
  https://JOUW-URL.vercel.app/**
  https://JOUW-URL.vercel.app/auth/callback
  https://JOUW-URL.vercel.app/reset-password
  ```

Optioneel voor testen: **Authentication → Providers → Email** →  
**Confirm email** tijdelijk **UIT** zetten.

### 2. SQL migraties (gratis SQL Editor)

Draai **in deze volgorde** in Supabase → SQL Editor:

1. `supabase/schema.sql`
2. `supabase/email_verification.sql`
3. `supabase/content_catalog.sql`
4. `supabase/security_hardening.sql`

Check:
```sql
SELECT proname FROM pg_proc
WHERE proname IN ('username_available','get_email_by_username');
```

### 3. Vercel Environment Variables

Vercel → Project → Settings → Environment Variables  
(Production + Preview + Development):

```
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...          ← service_role key!
APP_ORIGIN=https://JOUW-URL.vercel.app
FRONTEND_ORIGIN=https://JOUW-URL.vercel.app
VITE_APP_ORIGIN=https://JOUW-URL.vercel.app
```

Daarna: **Deployments → Redeploy**.

### 4. Lokaal testen

Maak `.env.local` (kopieer van `.env.example`):

```env
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
APP_ORIGIN=http://localhost:5173
VITE_APP_ORIGIN=http://localhost:5173
```

```bash
npm install
npm run dev
```

Test:
- Registreren
- Inloggen (e-mail én username)
- Wachtwoord vergeten

---

## Optioneel maar slim

- Vercel → Storage → **Create KV**  
  → rate-limiting en audit-log gaan dan echt werken.
- Als Confirm email AAN staat: check spam-folder voor de bevestigingsmail.

---

## Als het nog faalt

Open browser **DevTools → Network**:

| Request | Fout | Oorzaak |
|---------|------|---------|
| `/api/verification-start` | 500 / register_failed | Env vars of SQL `email_verification_requests` ontbreekt |
| `/api/verification-start` | 429 | Rate-limit (te vaak geprobeerd) |
| Login | invalid_credentials | Verkeerd wachtwoord OF RPC `get_email_by_username` ontbreekt |
| Reset e-mail | geen mail | Redirect URL niet in Supabase Auth gezet |

Stuur de exacte fout uit de Network-tab als het nog niet werkt.
