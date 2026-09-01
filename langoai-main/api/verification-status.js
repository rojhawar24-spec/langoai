import { createClient } from "@supabase/supabase-js";
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
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
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

export default async function handler(req, res) {
  const origin = req.headers.origin || "";
  setCors(res, origin);

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "GET") return res.status(405).json({ error: "method_not_allowed" });

  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: "server_configuration_error" });
  }

  const requestId = String(req.query?.request_id || "");
  if (!/^[0-9a-f-]{36}$/i.test(requestId)) {
    return res.status(400).json({ error: "invalid_request_id" });
  }

  const ip = getIp(req);
  try {
    const key = `rl:verif-status:${ip}`;
    const count = await kv.incr(key);
    if (count === 1) await kv.expire(key, 60);
    if (count > 60) {
      res.setHeader("Retry-After", "60");
      return res.status(429).json({ error: "too_many_requests" });
    }
  } catch {
    return res.status(503).json({ error: "temporarily_unavailable" });
  }

  const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: row, error: rowError } = await admin
    .from("email_verification_requests")
    .select("confirmed,expires_at")
    .eq("id", requestId)
    .maybeSingle();

  if (rowError || !row) return res.status(404).json({ error: "verification_request_not_found" });
  if (new Date(row.expires_at).getTime() < Date.now()) {
    return res.status(410).json({ verified: false, expired: true });
  }

  return res.status(200).json({ verified: Boolean(row.confirmed) });
}
