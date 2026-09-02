import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const ALLOWED_ORIGIN = process.env.APP_ORIGIN || "https://langoaiapp.vercel.app";

function setCors(res, origin) {
  const allowed =
    origin === ALLOWED_ORIGIN ||
    origin === "http://localhost:5173" ||
    /^https:\/\/[a-z0-9-]+-[a-z0-9]+\.vercel\.app$/.test(origin || "");
  res.setHeader("Access-Control-Allow-Origin", allowed ? origin : ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Vary", "Origin");
}

export default async function handler(req, res) {
  const origin = req.headers.origin || "";
  setCors(res, origin);

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "method_not_allowed" });

  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: "server_configuration_error" });
  }

  const requestId = String(req.body?.requestId || "");
  const token = String(req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  if (!/^[0-9a-f-]{36}$/i.test(requestId) || !token) {
    return res.status(400).json({ error: "invalid_request" });
  }

  const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: userData, error: userError } = await admin.auth.getUser(token);
  if (userError || !userData.user || !userData.user.email_confirmed_at) {
    return res.status(401).json({ error: "email_not_verified" });
  }

  const userEmail = (userData.user.email || "").toLowerCase();

  // Atomic one-time claim: only succeeds if still unconfirmed and not expired
  const { data: updatedRows, error: updateError } = await admin
    .from("email_verification_requests")
    .update({
      confirmed: true,
      confirmed_user_id: userData.user.id,
      confirmed_at: new Date().toISOString(),
    })
    .eq("id", requestId)
    .eq("confirmed", false)
    .eq("email", userEmail)
    .gt("expires_at", new Date().toISOString())
    .select("id");

  if (updateError) {
    console.error("verification-complete update failed:", updateError.message);
    return res.status(500).json({ error: "verification_complete_failed" });
  }

  if (!updatedRows || updatedRows.length === 0) {
    // Distinguish already-used vs missing/expired/mismatch for debugging only
    const { data: row } = await admin
      .from("email_verification_requests")
      .select("id,email,confirmed,expires_at")
      .eq("id", requestId)
      .maybeSingle();

    if (!row) return res.status(404).json({ error: "verification_request_not_found" });
    if (row.confirmed) return res.status(409).json({ error: "verification_already_completed" });
    if (new Date(row.expires_at).getTime() < Date.now()) {
      return res.status(410).json({ error: "verification_request_expired" });
    }
    if (row.email !== userEmail) return res.status(403).json({ error: "verification_email_mismatch" });
    return res.status(409).json({ error: "verification_claim_failed" });
  }

  // Ensure profile exists (recovery if trigger missed)
  const meta = userData.user.user_metadata || {};
  const username = String(meta.username || "").trim();
  if (username) {
    await admin.from("profiles").upsert(
      {
        id: userData.user.id,
        username,
        email: userEmail,
        current_language: meta.currentLanguage || null,
        theme: meta.theme === "dark" ? "dark" : "light",
        interface_language: meta.interfaceLanguage || "en",
      },
      { onConflict: "id", ignoreDuplicates: true }
    );
  }

  return res.status(200).json({ ok: true });
}
