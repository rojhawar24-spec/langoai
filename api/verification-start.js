import { createClient } from "@supabase/supabase-js";
import crypto from "node:crypto";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const ALLOWED_ORIGIN = process.env.APP_ORIGIN || "https://langoaiapp.vercel.app";

function setCors(res, origin) {
  const allowed =
    origin === ALLOWED_ORIGIN ||
    origin === "http://localhost:5173" ||
    /^https:\/\/[a-z0-9-]+\.vercel\.app$/.test(origin || "") ||
    /^https:\/\/[a-z0-9-]+-[a-z0-9]+\.vercel\.app$/.test(origin || "");
  res.setHeader("Access-Control-Allow-Origin", allowed ? (origin || ALLOWED_ORIGIN) : ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
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
  const email = String(req.body?.email || "").trim().toLowerCase();
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: "invalid_email" });
  }
  const requestId = crypto.randomUUID();
  const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const { error } = await admin.from("email_verification_requests").insert({
    id: requestId,
    email,
    expires_at: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
  });
  if (error) {
    console.error(error.message);
    return res.status(500).json({ error: "verification_start_failed", detail: error.message });
  }
  return res.status(200).json({ requestId });
}