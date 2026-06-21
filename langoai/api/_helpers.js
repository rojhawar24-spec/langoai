/**
 * Gedeelde helpers voor alle API endpoints.
 */

// ── CORS ─────────────────────────────────────────────────────────────────────
// Verander ALLOWED_ORIGIN naar jouw productie-URL zodra je die weet.
// Lokale dev draait op Vite (poort 5173) en Vercel preview-URLs worden
// automatisch via de env-var VERCEL_URL opgepikt.
const PRODUCTION_ORIGIN = process.env.FRONTEND_ORIGIN || "https://langoai.vercel.app";

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
// Eenvoudige in-memory sliding-window rate limiter.
// (Werkt prima op Vercel Serverless; voor edge-functies gebruik je KV.)
const windows = new Map(); // ip → [timestamp, ...]

/**
 * @param {import('http').IncomingMessage} req
 * @param {{ maxRequests?: number, windowMs?: number }} opts
 * @returns {{ ok: boolean, remaining: number }}
 */
export function rateLimit(req, { maxRequests = 20, windowMs = 60_000 } = {}) {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    "unknown";

  const now = Date.now();
  const cutoff = now - windowMs;

  let hits = (windows.get(ip) || []).filter((t) => t > cutoff);
  hits.push(now);
  windows.set(ip, hits);

  // Prevent memory leak: prune old IPs every ~500 requests
  if (windows.size > 5000) {
    for (const [k, v] of windows) {
      if (v.every((t) => t <= cutoff)) windows.delete(k);
    }
  }

  return { ok: hits.length <= maxRequests, remaining: Math.max(0, maxRequests - hits.length) };
}