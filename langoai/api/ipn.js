//
// /api/ipn.js  — PayPal IPN (Instant Payment Notification) receiver
//
// PayPal calls this URL when money arrives.
// We validate with PayPal, then store in Vercel KV.
//
// Setup:
//   1. In PayPal: Settings → Notifications → IPN → set URL to https://YOUR_DOMAIN/api/ipn
//   2. Add Vercel KV to your project: vercel.com/dashboard → Storage → KV
//   3. That auto-adds KV_REST_API_URL and KV_REST_API_TOKEN to your env vars
//

import { kv } from "@vercel/kv";

const PAYPAL_IPN_VERIFY_URL = "https://ipnpb.paypal.com/cgi-bin/webscr"; // LIVE
// Use this for sandbox testing: "https://ipnpb.sandbox.paypal.com/cgi-bin/webscr"

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  // Step 1: Read raw body PayPal sent us
  const rawBody = await getRawBody(req);

  // Step 2: Post back to PayPal to verify it is genuine
  const verifyBody = "cmd=_notify-validate&" + rawBody;
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
    return res.status(200).end(); // Still return 200 to PayPal
  }

  // Step 3: Parse the IPN fields
  const params = new URLSearchParams(rawBody);
  const txnId = params.get("txn_id");
  const paymentStatus = params.get("payment_status");
  const receiverEmail = params.get("receiver_email");
  const mcGross = parseFloat(params.get("mc_gross") || "0");
  const mcCurrency = params.get("mc_currency");
  const payerEmail = params.get("payer_email");

  const PAYPAL_RECEIVER = process.env.PAYPAL_RECEIVER_EMAIL; // e.g. rojhawar@example.com

  // Step 4: Validate the payment
  const isValid =
    paymentStatus === "Completed" &&
    mcGross >= parseFloat(process.env.PREMIUM_PRICE_EUR || "4.00") &&
    mcCurrency === "EUR" &&
    (!PAYPAL_RECEIVER || receiverEmail === PAYPAL_RECEIVER);

  if (isValid && txnId) {
    // Check for duplicate
    const existing = await kv.get(`payment:${txnId}`);
    if (!existing) {
      await kv.set(
        `payment:${txnId}`,
        {
          verified: true,
          claimed: false,
          amount: mcGross,
          currency: mcCurrency,
          payerEmail,
          receiverEmail,
          createdAt: new Date().toISOString(),
        },
        { ex: 60 * 60 * 24 * 2 } // expire after 2 days (safety cleanup)
      );
      console.log("Payment recorded:", txnId, mcGross, mcCurrency);
    }
  } else {
    console.warn("IPN rejected — invalid payment:", { paymentStatus, mcGross, mcCurrency, receiverEmail });
  }

  // Always return 200 to PayPal or they will keep retrying
  return res.status(200).end();
}

// Helper: read raw body from request (needed for IPN verification)
function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => { data += chunk; });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}