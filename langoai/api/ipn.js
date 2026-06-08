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

import { kv } from "@vercel/kv";

const PAYPAL_IPN_VERIFY_URL = "https://ipnpb.paypal.com/cgi-bin/webscr";

function parseAmount(value) {
  const n = parseFloat(String(value || "0").replace(",", "."));
  return Number.isFinite(n) ? n : 0;
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

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