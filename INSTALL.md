# 🛠️ LangoAI v6 — Fix installatie handleiding
## Alle 35 bugs opgelost — stap voor stap

---

## Welke bestanden vervang je?

| Bestand | Bug opgelost | Actie |
|---|---|---|
| `src/utils/xp.ts` | BUG-03 createXPAwarder | **Vervangen** |
| `src/utils/progress.ts` | BUG-26 daily goal hardcoded | **Vervangen** |
| `src/hooks/useBadgeChecker.ts` | BUG-05 infinite loop | **Vervangen** |
| `src/hooks/useStreakReconciler.ts` | BUG-28 field name | **Vervangen** |
| `src/pages/MistakesPage.tsx` | BUG-17 window.confirm() | **Vervangen** |
| `src/pages/ProfilePage.tsx` | BUG-25 camelCase fields | **Vervangen** |
| `src/pages/RegisterPage.tsx` | BUG-29 wachtwoord min 8 | **Vervangen** |
| `src/data/wotd-words.ts` | BUG-16 30 woorden per taal | **Vervangen** |
| `src/content/grammar/nl/leesvaardigheidC1.ts` | BUG-20 lege stub | **Vervangen** |
| `index.html` | BUG-33 og:image, viewport | **Vervangen** |
| `public/robots.txt` | BUG-33 SEO | **Nieuw aanmaken** |
| `public/sitemap.xml` | BUG-33 SEO | **Nieuw aanmaken** |
| `vercel.json` | BUG-07 security headers | **Vervangen** |
| `api/chat.js` | BUG-06 rate limiting + CORS | **Vervangen** |
| `api/kofi-webhook.js` | BUG-05 CORS wildcard | **Vervangen** |
| `src/lib/supabase.ts` | BUG-01/02 Supabase client | **Nieuw aanmaken** |
| `src/contexts/AuthContext.tsx` | BUG-01/02 echte auth | **Vervangen** |
| `src/utils/storage.ts` | BUG-01/02 Supabase auth | **Vervangen** |
| `src/pages/LoginPage.tsx` | BUG-01/02 Supabase login | **Vervangen** |
| `supabase/schema.sql` | BUG-01/02 database schema | **Nieuw aanmaken** |
| `.env.example` | Supabase env vars | **Nieuw aanmaken** |

---

## STAP 1 — Supabase instellen (BUG-01/02 — KRITIEK)

```bash
npm install @supabase/supabase-js
```

1. Ga naar **https://supabase.com** → maak gratis account
2. Nieuw project aanmaken
3. Ga naar **SQL Editor** → plak inhoud van `supabase/schema.sql` → Run
4. Ga naar **Settings → API** → kopieer:
   - Project URL → `VITE_SUPABASE_URL`
   - anon/public key → `VITE_SUPABASE_ANON_KEY`

---

## STAP 2 — .env.local aanmaken

Maak `.env.local` aan in de root van je project:

```
VITE_SUPABASE_URL=https://jouwproject.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...
ANTHROPIC_API_KEY=sk-ant-...
KOFI_VERIFICATION_TOKEN=jouw-token
APP_ORIGIN=https://langoaiapp.vercel.app
```

---

## STAP 3 — Bestanden kopiëren

Kopieer alle bestanden uit deze map naar de juiste plek in je project.
Houd dezelfde mappenstructuur aan.

---

## STAP 4 — XP Awarder aanroepen bijwerken

Alle plekken die `createXPAwarder(updateProfile)` aanroepen moeten nu
`createXPAwarder(user, updateProfile)` zijn.

Zoek in VS Code met `Ctrl+Shift+H`:
- Zoek: `createXPAwarder(updateProfile)`
- Vervang door: `createXPAwarder(user, updateProfile)`

---

## STAP 5 — Vercel env vars instellen

Ga naar Vercel → jouw project → Settings → Environment Variables:

| Key | Waarde |
|---|---|
| `VITE_SUPABASE_URL` | jouw Supabase URL |
| `VITE_SUPABASE_ANON_KEY` | jouw anon key |
| `ANTHROPIC_API_KEY` | jouw Claude API key |
| `KOFI_VERIFICATION_TOKEN` | jouw Ko-fi token |
| `APP_ORIGIN` | `https://langoaiapp.vercel.app` |

---

## STAP 6 — Testen lokaal

```bash
npm run dev
```

Controleer:
- [ ] Registreren werkt (wachtwoord min 8 tekens, sterkte-indicator zichtbaar)
- [ ] Inloggen werkt
- [ ] Profiel is opgeslagen in Supabase → Table Editor → profiles
- [ ] WOTD toont woorden voor alle talen
- [ ] Mistakes: "Clear all" toont custom modal (niet browser popup)
- [ ] Leesvaardigheidslessen (C1) hebben vragen

---

## STAP 7 — Deploy

```bash
git add .
git commit -m "fix: 35 bugs opgelost - Supabase auth, security, SEO, UX"
git push
```

---

## STAP 8 — Na deploy controleren

- [ ] https://securityheaders.com → jouw URL → score A of hoger
- [ ] https://langoaiapp.vercel.app/robots.txt → zichtbaar
- [ ] https://langoaiapp.vercel.app/sitemap.xml → zichtbaar
- [ ] Social share preview → WhatsApp of Facebook → afbeelding zichtbaar
  (voeg `og-image.png` toe aan `public/` map: 1200×630px)

---

## ⚠️ Nog te doen (kan niet automatisch)

1. **AdSense slot ID** — Ga naar Google AdSense → Advertenties → Per advertentie
   → kopieer jouw slot ID → plak in `AdSlot.tsx`: `data-ad-slot="JOUW_SLOT_ID"`

2. **og-image.png** — Maak een 1200×630px banner voor jouw site
   → sla op als `public/og-image.png`

3. **Grammar content EN/FR/DE/ES** — Nog leeg. Voeg lessen toe wanneer mogelijk.

4. **Arena data voor EN/FR/DE/ES** — Voeg JSON-bestanden toe in `public/arena/`
