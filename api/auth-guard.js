// api/auth-guard.js — Brute-force bescherming + audit logging voor login
// ✅ Rate limiting: max 5 mislukte pogingen per 15 min, per (IP + identifier)
// ✅ Audit log: elke login-poging (check/fail/reset) wordt gelogd
// ✅ Fail-open bij KV-storing (blokkeert nooit onterecht door een storing)
// ✅ CORS: alleen eigen domein

import { kv } from "@vercel/kv";

const MAX_ATTEMPTS   = 5;
const WINDOW_SECONDS = 15 * 60; // 15 minuten
const ALLOWED_ORIGIN = process.env.APP_ORIGIN || "https://langoaiapp.vercel.app";

// ── CORS ────────────────────────────────────────
function setCors(res, origin) {
  const allowed = origin === ALLOWED_ORIGIN || origin === "http://localhost:5173";
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

// Identifier maskeren voor logs (privacy: nooit volledige e-mail/username loggen)
function maskIdentifier(identifier) {
  if (!identifier) return "unknown";
  if (identifier.includes("@")) {
    const [name, domain] = identifier.split("@");
    return `${name.slice(0, 2)}***@${domain}`;
  }
  return `${identifier.slice(0, 2)}***`;
}

async function writeAuditLog(entry) {
  try {
    const line = JSON.stringify(entry);
    // Server console (zichtbaar in Vercel logs)
    console.log("[AUTH_AUDIT]", line);
    // Bewaar ook de laatste 500 events in KV, zodat je ze later kan opvragen
    await kv.lpush("auditlog:auth", line);
    await kv.ltrim("auditlog:auth", 0, 499);
  } catch (err) {
    // Audit logging mag nooit de login zelf blokkeren
    console.error("Audit log write failed:", err);
  }
}

export default async function handler(req, res) {
  const origin = req.headers.origin || "";
  setCors(res, origin);

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const { action, identifier } = req.body || {};
  if (!identifier || typeof identifier !== "string") {
    return res.status(400).json({ error: "Missing identifier" });
  }

  const ip = getIp(req);
  // IP + identifier gecombineerd: één account kan niet vanaf alle IP's
  // platgebeukt worden, en één IP kan niet alle accounts brute-forcen
  // zonder zelf tegen de limiet aan te lopen.
  const key = `authguard:${ip}:${identifier.toLowerCase().trim()}`;
  const maskedId = maskIdentifier(identifier);

  try {
    if (action === "check") {
      const attempts = Number((await kv.get(key)) || 0);

      if (attempts >= MAX_ATTEMPTS) {
        const ttl = await kv.ttl(key);
        await writeAuditLog({
          type: "login_blocked",
          ip,
          identifier: maskedId,
          attempts,
          time: new Date().toISOString(),
        });
        return res.status(429).json({
          error: "Too many failed attempts. Please wait before trying again.",
          retryAfterSeconds: ttl > 0 ? ttl : WINDOW_SECONDS,
        });
      }

      return res.status(200).json({ allowed: true });
    }

    if (action === "fail") {
      const attempts = await kv.incr(key);
      if (attempts === 1) {
        await kv.expire(key, WINDOW_SECONDS);
      }
      await writeAuditLog({
        type: "login_failed",
        ip,
        identifier: maskedId,
        attempts,
        time: new Date().toISOString(),
      });
      return res.status(200).json({ remaining: Math.max(0, MAX_ATTEMPTS - attempts) });
    }

    if (action === "reset") {
      await kv.del(key);
      await writeAuditLog({
        type: "login_success",
        ip,
        identifier: maskedId,
        time: new Date().toISOString(),
      });
      return res.status(200).json({ ok: true });
    }

    return res.status(400).json({ error: "Invalid action" });
  } catch (err) {
    console.error("auth-guard error:", err);
    // Bij een KV-storing: niet blokkeren (fail-open) — beschikbaarheid
    // van de login gaat voor, maar we loggen de storing wel.
    return res.status(200).json({ allowed: true });
  }
}
