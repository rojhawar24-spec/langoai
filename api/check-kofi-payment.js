// api/check-kofi-payment.js
// 🔒 FIX (audit #9, plus a more serious bug found while checking it): this
// used to try a direct `kofi-payment-session:{sessionId}` lookup, then
// fall back to `kv.keys("kofi-payment:*")` and scan every result. Neither
// path ever found anything — nothing in this codebase ever wrote a key
// matching either of those patterns; api/kofi-webhook.js only ever wrote
// `token:*` and `email:*:token`. The scan wasn't just architecturally
// inefficient (the audit's original concern) — it was scanning for data
// that never existed, full stop. The PremiumPage.tsx pay button is
// disabled ("Coming Soon") today, so this hadn't affected a real user
// yet, but it was guaranteed to break the moment that button turned on:
// someone could pay, the webhook would correctly grant a token, and the
// app would just never notice — permanently "waiting for payment."
//
// Real fix lives in kofi-webhook.js: it now extracts the sessionId that
// was already being embedded in the Ko-fi message (see buildKofiUrl in
// create-kofi-session.js) and writes the verified result DIRECTLY onto
// `kofi-session:{sessionId}` the moment payment is confirmed. That turns
// this endpoint into what it should always have been: one direct read,
// no scanning, no guessing by email/message-text/time-window.

import { kv } from "@vercel/kv";
import { setCors, rateLimit } from "./_helpers.js";

export default async function handler(req, res) {
  setCors(res, req);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  // Rate limit: max 20 checks per minuut per IP (voorkomt brute-force op sessionId)
  const rl = await rateLimit(req, { scope: "kofi-check", maxRequests: 20, windowMs: 60_000 });
  if (!rl.ok) {
    res.setHeader("Retry-After", "60");
    return res.status(429).json({ error: "Too many requests." });
  }

  const { sessionId } = req.body || {};
  if (!sessionId) return res.status(400).json({ error: "Missing Ko-fi payment session." });

  const session = await kv.get(`kofi-session:${sessionId}`);
  if (!session) {
    return res.status(404).json({ verified: false, error: "Payment session expired. Start payment again." });
  }

  if (session.status === "verified" && session.accessToken && session.expiresAt) {
    return res.json({ verified: true, accessToken: session.accessToken, expiresAt: session.expiresAt });
  }

  // Webhook hasn't fired yet (or the payment used a different email than
  // expected, in which case kofi-webhook.js still grants a token — just
  // not linked to this specific session). Frontend keeps polling.
  return res.json({ verified: false });
}
