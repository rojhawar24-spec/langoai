// api/kofi-webhook.js — ✅ FIX BUG-05: CORS restricted to own domain
// ✅ FIX (audit): verification token is nu VERPLICHT (fail-closed) i.p.v.
//    optioneel. Voorheen werd de check volledig overgeslagen als de
//    env-var KOFI_VERIFICATION_TOKEN ontbrak — dat betekende dat iemand
//    zonder enige verificatie een "premium betaling" kon nabootsen als de
//    env-var per ongeluk niet was ingesteld in productie. Nu weigert de
//    endpoint alle verzoeken zolang de env-var niet correct is ingesteld.
// ✅ FIX (audit): timing-safe vergelijking van het verificatietoken i.p.v.
//    een gewone `!==` string-vergelijking, om timing-aanvallen te voorkomen.
//
// 🔒 FIX (audit #9, en een ernstiger bug eronder): de audit noemde de
// kv.keys("kofi-payment:*") scan in check-kofi-payment.js architecturaal
// zwak. Bij het narekenen bleek het probleem groter: dit bestand schreef
// NOOIT een kofi-payment:*-sleutel — die scan doorzocht dus altijd nul
// resultaten, hoe dan ook. Erger nog: er bestond helemaal geen link tussen
// een betaling (hier, bekend via e-mail) en de sessie die de gebruiker in
// de browser aan het pollen was (check-kofi-payment.js, bekend via
// sessionId) — de PayNow-knop staat vandaag uit ("Coming Soon" op
// PremiumPage.tsx), dus dit trof nog geen echte gebruiker, maar was wel
// gegarandeerd stuk gegaan zodra die knop aan zou gaan: iemand had kunnen
// betalen, de webhook had een token toegekend, en de app had het nooit
// gemerkt — voor altijd "wachten op betaling".
//
// Fix: sessionId staat al in het Ko-fi-bericht (zie buildKofiUrl in
// create-kofi-session.js: "LANGOAI {sessionId} {payerEmail}") — die wordt
// hier nu uitgelezen en direct gebruikt om de sessie te markeren. Geen
// scan meer nodig; check-kofi-payment.js hoeft alleen nog maar de sessie
// zelf te lezen (zie dat bestand).

import { kv } from "@vercel/kv";
import { timingSafeEqual, createHash, randomBytes } from "crypto";

const ALLOWED_ORIGIN = process.env.APP_ORIGIN || "https://langoaiapp.vercel.app";

// Timing-safe string vergelijking. We hashen eerst naar een vaste lengte
// (SHA-256) zodat timingSafeEqual nooit kan falen op een lengteverschil
// (wat zelf óók een timing-lek zou zijn).
function safeEqual(a, b) {
  const hashA = createHash("sha256").update(String(a ?? "")).digest();
  const hashB = createHash("sha256").update(String(b ?? "")).digest();
  return timingSafeEqual(hashA, hashB);
}

// ✅ FIX: geen wildcard meer
function setCors(res, origin) {
  const allowed =
    origin === ALLOWED_ORIGIN || origin === "http://localhost:5173";
  res.setHeader("Access-Control-Allow-Origin", allowed ? origin : ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Vary", "Origin");
}

function parseKofiPayload(body) {
  if (!body) return null;
  if (typeof body === "string") {
    try {
      const params = new URLSearchParams(body);
      const data = params.get("data");
      return data ? JSON.parse(data) : JSON.parse(body);
    } catch {
      return null;
    }
  }
  if (body.data) {
    try { return typeof body.data === "string" ? JSON.parse(body.data) : body.data; }
    catch { return null; }
  }
  return body;
}

// sessionId's zijn altijd `kofi_` + 24 hex-tekens (randomBytes(12) in
// create-kofi-session.js) — specifiek genoeg om nooit per ongeluk met iets
// anders in een vrij-tekstbericht te matchen.
function extractSessionId(message) {
  const match = String(message || "").match(/kofi_[a-f0-9]{24}/i);
  return match ? match[0] : null;
}

export default async function handler(req, res) {
  const origin = req.headers.origin || "";
  setCors(res, origin);

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const payload = parseKofiPayload(req.body);
  if (!payload) return res.status(400).json({ error: "Invalid payload" });

  const verificationToken = process.env.KOFI_VERIFICATION_TOKEN;

  // ✅ Fail-closed: zonder correct geconfigureerde env-var wordt NIETS
  // meer geaccepteerd. Dit voorkomt dat een misconfiguratie in productie
  // (lege/ontbrekende env-var) ooit als "geen verificatie nodig" gelezen
  // kan worden.
  if (!verificationToken) {
    console.error("kofi-webhook: KOFI_VERIFICATION_TOKEN is not configured — rejecting all requests");
    return res.status(500).json({ error: "Webhook not configured" });
  }

  if (!payload.verification_token || !safeEqual(payload.verification_token, verificationToken)) {
    return res.status(403).json({ error: "Invalid verification token" });
  }

  const email = payload.email?.toLowerCase();
  const amount = parseFloat(payload.amount || "0");
  const currency = payload.currency || "USD";
  const kofiTransactionId = payload.kofi_transaction_id;

  if (!email || !kofiTransactionId) {
    return res.status(400).json({ error: "Missing email or transaction ID" });
  }

  const premiumPrice = parseFloat(process.env.PREMIUM_PRICE_EUR || "4.00");
  // 🔒 FIX: was `amount >= premiumPrice` with no currency check at all —
  // PREMIUM_PRICE_EUR is, as the name says, a EUR amount. Comparing it
  // against a bare number regardless of what currency that number is
  // actually IN meant a payment of the same face value in a weaker
  // currency (Ko-fi doesn't convert for you) would have been accepted as
  // if it were EUR. This app doesn't do currency conversion, so anything
  // that isn't EUR is treated as not meeting the threshold at all, same
  // as a too-small payment.
  const isPremiumPayment = currency === "EUR" && amount >= premiumPrice;

  if (!isPremiumPayment) {
    return res.json({ success: true, message: "Thank you for your support!" });
  }

  try {
    // 🔒 FIX: was `kt_${kofiTransactionId}_${Date.now()}` — derived from
    // two values that are each at least partially predictable/observable
    // (a transaction ID whose format Ko-fi controls, and a timestamp
    // that's easy to narrow down to a small window if you know roughly
    // when a payment happened), not actually random. randomBytes(32) is
    // the same strength already used by the (until now, unreachable)
    // token generator in check-kofi-payment.js — this makes both paths
    // consistent instead of one being meaningfully weaker.
    const accessToken = randomBytes(32).toString("hex");
    const premiumDays = parseInt(process.env.PREMIUM_DAYS || "30", 10);
    const expiresAt = new Date(Date.now() + premiumDays * 24 * 60 * 60 * 1000).toISOString();

    await kv.set(
      `token:${accessToken}`,
      { valid: true, email, amount, currency, kofiTransactionId, expiresAt, grantedAt: new Date().toISOString() },
      { ex: premiumDays * 24 * 60 * 60 }
    );

    await kv.set(
      `email:${email}:token`,
      { accessToken, expiresAt },
      { ex: premiumDays * 24 * 60 * 60 }
    );

    // 🔒 THE FIX (see the file-header note above): link this payment back
    // to the browser session that's polling check-kofi-payment.js, so
    // that endpoint can find it with a single direct read instead of a
    // scan over data that was never being written in the first place.
    const sessionId = extractSessionId(payload.message);
    if (sessionId) {
      const session = await kv.get(`kofi-session:${sessionId}`);
      if (session) {
        await kv.set(
          `kofi-session:${sessionId}`,
          { ...session, status: "verified", accessToken, expiresAt, verifiedAt: new Date().toISOString() },
          { ex: premiumDays * 24 * 60 * 60 }
        );
      }
      // Geen sessie gevonden (verlopen na 2 uur, of iemand betaalde zonder
      // via de app te starten) — geen probleem: het token hierboven staat
      // al klaar onder e-mail, en is bij een matige toekomstige uitbreiding
      // ook zonder sessie op te halen (bv. "voer het e-mailadres in
      // waarmee je betaald hebt").
    }

    return res.json({ success: true, message: "Premium access granted!" });
  } catch (err) {
    console.error("KV error:", err);
    return res.status(500).json({ error: "Could not store token" });
  }
}
