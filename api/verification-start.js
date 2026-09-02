import { createClient } from "@supabase/supabase-js";
import crypto from "node:crypto";
import { kv } from "@vercel/kv";

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
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Vary", "Origin");
}

function getIp(req) {
  return (
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "unknown"
  );
}

async function rateLimit(key, max, windowSec) {
  try {
    const count = await kv.incr(key);
    if (count === 1) await kv.expire(key, windowSec);
    return count <= max;
  } catch {
    // Fail closed for verification-start (abuse vector)
    return false;
  }
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

  const ip = getIp(req);
  const ipOk = await rateLimit(`rl:verif-start:ip:${ip}`, 10, 60);
  const emailOk = await rateLimit(`rl:verif-start:email:${email}`, 5, 3600);
  if (!ipOk || !emailOk) {
    res.setHeader("Retry-After", "60");
    return res.status(429).json({ error: "too_many_requests" });
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
    console.error("verification-start failed:", error.message);
    return res.status(500).json({ error: "verification_start_failed" });
  }

  return res.status(200).json({ requestId });
}
