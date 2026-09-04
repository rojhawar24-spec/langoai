/**
 * Gedeelde helpers voor alle API endpoints.
 */

import { kv } from "@vercel/kv";


// ── CORS ─────────────────────────────────────────────────────────────────────
// Verander ALLOWED_ORIGIN naar jouw productie-URL zodra je die weet.
// Lokale dev draait op Vite (poort 5173) en Vercel preview-URLs worden
// automatisch via de env-var VERCEL_URL opgepikt.
const PRODUCTION_ORIGIN = process.env.FRONTEND_ORIGIN || "https://langoaiapp.vercel.app";

function getAllowedOrigin(req) {
  const origin = req.headers.origin || "";
  // Sta de productie-origin toe
  if (origin === PRODUCTION_ORIGIN) return origin;
  // Sta Vercel preview-deployments toe  (*.vercel.app)
  if (/^https:\/\/[a-z0-9-]+-[a-z0-9]+\.vercel\.app$/.test(origin)) return origin;
  // Sta lokale dev toe
  if (/^http:\/\/localhost:\d+$/.test(origin)) return origin;
  // Onbekende origin: geen header sturen → browser blokkeert het request
  return null;
}

export function setCors(res, req) {
  const allowed = getAllowedOrigin(req);
  if (allowed) {
    res.setHeader("Access-Control-Allow-Origin", allowed);
    res.setHeader("Vary", "Origin");
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

// ── RATE LIMITING ─────────────────────────────────────────────────────────────
// 🔒 FIX (audit #10 — "rate limiter lives in server memory"): the previous
// version tracked hits in a plain `Map` in module memory. On Vercel,
// concurrent requests can land on different warm serverless instances, each
// with its OWN copy of that Map — so the real limit was never reliably
// "N requests per minute," it was closer to "N times however many instances
// happen to be warm." Moved to @vercel/kv (shared, so every instance sees
// the same counter) — same fixed-window shape already used in api/chat.js.
//
// 🧪 TESTING NOTE: also found while porting this — the old Map was declared
// ONCE at module scope and shared by EVERY endpoint that imports this file,
// keyed only by IP. Within a single warm instance, hitting /api/health
// repeatedly was silently eating into the SAME budget as
// each endpoint, even though each call site passes its own
// maxRequests. Added a required `scope` so each endpoint's limit is
// actually independent, matching what each call site already looked like
// it intended.
//
// Trade-off worth being upfront about: this is a fixed window (resets every
// windowMs), not the sliding window the old in-memory version technically
// was. A fixed window allows a burst of up to ~2x maxRequests right across
// a window boundary; a sliding window doesn't. For abuse-prevention on
// these endpoints (not billed API calls — see chat.js for the one that
// actually costs money), fixed-window is the standard, much simpler
// trade-off and is what @vercel/kv's primitives make easy to get right.
//
// @param {import('http').IncomingMessage} req
// @param {{ scope: string, maxRequests?: number, windowMs?: number }} opts
// @returns {Promise<{ ok: boolean, remaining: number, degraded: boolean }>}
export async function rateLimit(req, { scope, maxRequests = 20, windowMs = 60_000 }) {
  if (!scope) {
    throw new Error("rateLimit() requires a `scope` so endpoints don't share a budget");
  }

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "unknown";

  const key = `rate:${scope}:${ip}`;
  const windowSeconds = Math.ceil(windowMs / 1000);

  try {
    const { kv } = await import("@vercel/kv");
    const count = await kv.incr(key);
    if (count === 1) {
      await kv.expire(key, windowSeconds);
    }
    return { ok: count <= maxRequests, remaining: Math.max(0, maxRequests - count), degraded: false };
  } catch (err) {
    console.error(`Rate limit check failed for scope "${scope}" (KV unavailable):`, err);
    // Fail OPEN here (unlike chat.js): these endpoints aren't a metered,
    // billed AI call — a KV hiccup blocking login attempts or the health
    // check entirely would hurt availability for no real cost benefit.
    // See api/chat.js for why the AI endpoint makes the opposite call.
    return { ok: true, remaining: maxRequests, degraded: true };
  }
}