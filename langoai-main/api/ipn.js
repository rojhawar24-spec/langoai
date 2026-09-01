//
// /api/ipn.js
// PayPal IPN receiver for PayPal.me payments.
//
// Setup in PayPal:
// 1. Open PayPal account settings
// 2. Find Instant Payment Notifications / IPN
// 3. Set notification URL to:
//    https://YOUR-DOMAIN.com/api/ipn
//
// This stores real completed payments in Vercel KV.
// /api/check-payment.js later matches payment by payer PayPal email.
//
// 🧪 TESTING NOTE: while checking this end-to-end (same pass that found
// the Ko-fi wiring bug), turned up that /api/check-payment.js — the file
// this comment block references as reading what gets stored below —
// doesn't exist anywhere in this codebase, and nothing else reads a
// `payment:*` key either. There's also no PayPal UI anywhere in src/ —
// the only "PayPal" mentions in the app are in the Terms/Privacy pages,
// describing it as a payment method WITHIN Ko-fi's own checkout, not this
// separate direct integration. Cross-referencing what I know from our
// broader conversation: PayPal was one of several platforms explored
// and moved away from specifically because it requires KYC documentation
// that isn't currently available — which lines up with this looking like
// leftover scaffolding from before that pivot to Ko-fi, not a feature
// mid-completion. I haven't built the missing check-payment.js or wired
// up a frontend for it — finishing a payment path for a processor that
// may not be usable isn't a good use of effort without confirming that
// first. What I DID fix below: this endpoint is still live and publicly
// reachable on Vercel regardless of whether anything calls it, so it's a
// real (if currently low-stakes) surface — added the same rate limiting
// every other endpoint in this codebase has, since as originally written
// it called out to PayPal's servers on every single incoming request
// before any validation of its own ran at all, and removed a dead
// duplicate line.

import { kv } from "@vercel/kv";
import { rateLimit } from "./_helpers.js";

const PAYPAL_IPN_VERIFY_URL = "https://ipnpb.paypal.com/cgi-bin/webscr";

function parseAmount(value) {
  const n = parseFloat(String(value || "0").replace(",", "."));
  return Number.isFinite(n) ? n : 0;
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

const ALLOWED_ORIGIN = process.env.APP_ORIGIN || "https://langoaiapp.vercel.app";

export default async function handler(req, res) {
  // CORS — alleen eigen domein en PayPal IPN
  res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  // Dead payment path: not used by Premium (Ko-fi only). Disabled to remove attack surface.
  return res.status(410).json({ error: "PayPal IPN disabled. Use Ko-fi payment flow." });


  // 🔒 FIX: was missing entirely — every other payment-adjacent endpoint
  // in this codebase rate-limits. Generous limit (PayPal's own IPN
  // retries legitimately, and this fires per-transaction, not per-user
  // click), just enough to stop this from being a free way to make the
  // server hammer PayPal's verify endpoint in a loop.
  const rl = await rateLimit(req, { scope: "paypal-ipn", maxRequests: 30, windowMs: 60_000 });
  if (!rl.ok) return res.status(429).end();

  try {
    const rawBody = await getRawBody(req);

    const verifyBody = `cmd=_notify-validate&${rawBody}`;
    const verifyRes = await fetch(PAYPAL_IPN_VERIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(verifyBody).toString(),
        "User-Agent": "LangoAI-IPN-Listener/1.0",
      },
      body: verifyBody,
    });

    const verifyText = await verifyRes.text();

    if (verifyText !== "VERIFIED") {
      console.warn("IPN not verified:", verifyText);
      return res.status(200).end();
    }

    const params = new URLSearchParams(rawBody);

    const txnId = params.get("txn_id");
    const paymentStatus = params.get("payment_status");
    const receiverEmail = normalizeEmail(params.get("receiver_email"));
    const payerEmail = normalizeEmail(params.get("payer_email"));
    const amount = parseAmount(params.get("mc_gross"));
    const currency = params.get("mc_currency");

    const expectedAmount = parseAmount(process.env.PREMIUM_PRICE_EUR || "4.00");
    const expectedReceiver = normalizeEmail(process.env.PAYPAL_RECEIVER_EMAIL);

    const receiverOk =
      !expectedReceiver || receiverEmail === expectedReceiver;

    const isValid =
      txnId &&
      paymentStatus === "Completed" &&
      currency === "EUR" &&
      amount >= expectedAmount &&
      receiverOk &&
      payerEmail;

    if (!isValid) {
      console.warn("IPN rejected:", {
        txnId,
        paymentStatus,
        receiverEmail,
        payerEmail,
        amount,
        currency,
      });
      return res.status(200).end();
    }

    const paymentKey = `payment:${txnId}`;
    const existing = await kv.get(paymentKey);

    if (!existing) {
      await kv.set(
        paymentKey,
        {
          verified: true,
          claimed: false,
          amount,
          currency,
          payerEmail,
          receiverEmail,
          txnId,
          createdAt: new Date().toISOString(),
        },
        { ex: 60 * 60 * 24 * 7 }
      );
    }

    return res.status(200).end();
  } catch (err) {
    console.error("IPN error:", err);
    return res.status(200).end();
  }
}

function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}