// api/delete-account.js — GDPR Artikel 17 (recht op vergetelheid)
// ✅ Verwijdert de auth-user écht (Supabase Admin API)
// ✅ profiles-rij + alle gekoppelde data verdwijnt automatisch (ON DELETE CASCADE)
// ✅ Verifieert dat de aanvrager alleen ZIJN/HAAR EIGEN account kan verwijderen
//    (via het eigen sessie-token — nooit een ander account-id vertrouwen)

import { createClient } from "@supabase/supabase-js";

const ALLOWED_ORIGIN = process.env.APP_ORIGIN || "https://langoaiapp.vercel.app";
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

function setCors(res, origin) {
  const allowed = origin === ALLOWED_ORIGIN || origin === "http://localhost:5173";
  res.setHeader("Access-Control-Allow-Origin", allowed ? origin : ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Vary", "Origin");
}

export default async function handler(req, res) {
  const origin = req.headers.origin || "";
  setCors(res, origin);

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    console.error("delete-account: missing SUPABASE_URL or SERVICE_ROLE_KEY env var");
    return res.status(500).json({ error: "Server not configured" });
  }

  // ── Stap 1: haal het sessie-token van de aanvrager op ──────────────────
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
  if (!token) {
    return res.status(401).json({ error: "Missing auth token" });
  }

  // Client met ANON key, alleen om het token te verifiëren
  const anonClient = createClient(SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);
  const { data: userData, error: userError } = await anonClient.auth.getUser(token);

  if (userError || !userData?.user) {
    return res.status(401).json({ error: "Invalid or expired session" });
  }

  const userId = userData.user.id;

  // ── Stap 2: verwijder het account écht, met de Admin API ───────────────
  // Alleen deze server (nooit de browser) heeft de service role key.
  const adminClient = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { error: deleteError } = await adminClient.auth.admin.deleteUser(userId);

  if (deleteError) {
    console.error("delete-account failed:", deleteError.message);
    return res.status(500).json({ error: "Account deletion failed" });
  }

  console.log("[AUTH_AUDIT]", JSON.stringify({
    type: "account_deleted",
    userId,
    time: new Date().toISOString(),
  }));

  return res.status(200).json({ success: true });
}
