# 🚀 LangoAI - COMPLETE DEPLOYMENT GUIDE

**Status**: All systems ready for deployment (Web → GitHub → Vercel + SQL DB)

---

## 📋 QUICK START (5 Steps)

### Step 1️⃣: Start Web App Locally ✅
```powershell
cd c:\Users\rojha\Downloads\langoai-secured\langoai-main
npm run dev
# Open: http://localhost:5173
```

---

### Step 2️⃣: Create GitHub Repository
**If NOT already done:**

```bash
# Initialize git
git init
git add .
git commit -m "LangoAI - Initial commit"

# Create repo on GitHub first at https://github.com/new
# Then connect:
git remote add origin https://github.com/YOUR_USERNAME/langoai.git
git branch -M main
git push -u origin main
```

---

### Step 3️⃣: Setup Supabase Database (SQL)

1. **Create Supabase Account**
   - Go to: https://supabase.com
   - Sign up / Sign in
   - Create new project

2. **Copy Database Credentials**
   - Go to: **Settings → API**
   - Copy:
     - `Project URL` → `VITE_SUPABASE_URL`
     - `Anon Key` → `VITE_SUPABASE_ANON_KEY`
     - `Service Role Key` → `SUPABASE_SERVICE_ROLE_KEY` (⚠️ KEEP SECRET!)

3. **Run Database Migrations** (in SQL Editor, IN THIS EXACT ORDER)
   ```
   1. supabase/schema.sql
   2. supabase/email_verification.sql
   3. supabase/content_catalog.sql
   4. supabase/security_hardening.sql
   ```

---

### Step 4️⃣: Setup Local Environment Variables

**Create `.env.local` in project root:**
```env
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Ko-fi (if using payments)
KOFI_VERIFICATION_TOKEN=your-kofi-token
KOFI_USERNAME=your-kofi-username
PREMIUM_PRICE_EUR=4.00
PREMIUM_DAYS=30

# AI Provider
AI_PROVIDER=claude
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

**⚠️ IMPORTANT:**
- `.env.local` is in `.gitignore` - NEVER committed to GitHub
- Add same variables to Vercel (see Step 5)

---

### Step 5️⃣: Deploy to Vercel

1. **Push to GitHub** (if not done):
   ```bash
   git add .
   git commit -m "Ready for Vercel"
   git push origin main
   ```

2. **Deploy on Vercel**:
   - Go to: https://vercel.com/new
   - Select GitHub repo: `langoai`
   - Accept defaults (Vite auto-detected)
   - **Configure Environment Variables:**
     - `VITE_SUPABASE_URL` = your supabase URL
     - `VITE_SUPABASE_ANON_KEY` = your anon key
     - `SUPABASE_SERVICE_ROLE_KEY` = your service role key
     - `KOFI_VERIFICATION_TOKEN` = your Ko-fi token
     - `KOFI_USERNAME` = your Ko-fi username
     - `AI_PROVIDER` = `claude`
     - `ANTHROPIC_API_KEY` = your Anthropic key
   - Click **Deploy** ✅

3. **Your site is live!**
   - Automatic domain: `langoai.vercel.app`
   - Custom domain: Add in Vercel Settings

---

## 🔄 Workflow After Deployment

### Making Changes
```bash
# 1. Make code changes locally
# 2. Test locally: npm run dev
# 3. Commit & push:
git add .
git commit -m "Your change"
git push origin main

# 4. Vercel auto-deploys on push! ✨
```

### Database Changes
```bash
# 1. Make changes to migration files in supabase/
# 2. Run in Supabase SQL Editor
# 3. Commit to GitHub
# 4. Vercel uses new schema automatically
```

---

## 📊 Database Schema

**Main Tables:**
- `users` - Auth & profiles
- `user_streaks` - Learning streaks
- `learning_progress` - Test progress
- `learning_content` - Lessons (auto-seeded)
- `arena_catalog` - Arena matches (auto-seeded)
- `email_verification` - Temp verify tokens
- `payments` - Ko-fi/PayPal transactions

**Key Stored Procedures** (from `security_hardening.sql`):
- `verify_payment()` - Ko-fi webhook verification
- `get_user_learning_data()` - User stats
- `update_streak()` - Daily streak logic

---

## ✅ Verification Checklist

After deployment:

- [ ] Local web app runs: `npm run dev`
- [ ] GitHub repo exists & has all commits
- [ ] Supabase project created & migrations ran
- [ ] `.env.local` has all Supabase credentials
- [ ] Vercel project created from GitHub
- [ ] Vercel has all environment variables
- [ ] Vercel deployment succeeded (green checkmark)
- [ ] Live site loads: `langoai.vercel.app`
- [ ] Login works (Supabase Auth)
- [ ] Ko-fi webhook verified (if payments enabled)

---

## 🛠 Troubleshooting

### "Cannot find module @tailwindcss/vite"
```bash
# Missing dependencies - run:
npm install
```

### "Supabase connection failed"
- Check `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env.local`
- Verify Supabase project exists and is running
- Check network → should connect to `*.supabase.co`

### "Vercel deployment failed"
- Check Build Logs in Vercel dashboard
- Verify environment variables are set
- Check database migrations ran successfully

### "PayPal/Ko-fi webhook not working"
- Verify `KOFI_VERIFICATION_TOKEN` is correct
- Check webhook URL in Ko-fi settings: `https://your-domain/api/kofi-webhook`

---

## 📞 Support

All config files are documented in:
- `.env.example` - All variables explained
- `supabase/MIGRATION_ORDER.md` - Database setup
- `vercel.json` - Vercel deployment config
- `vite.config.ts` - Build configuration

---

**🎉 You're ready to deploy!**
