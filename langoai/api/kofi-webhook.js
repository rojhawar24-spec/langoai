import { kv } from "@vercel/kv";

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
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

  if (typeof body.data === "string") {
    try {
      return JSON.parse(body.data);
    } catch {
      return null;
    }
  }

  if (typeof body === "object") return body;
  return null;
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

export default async function handler(req, res) {
  setCors(res);

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const payload = parseKofiPayload(req.body);

  if (!payload) {
    return res.status(400).json({ error: "Invalid Ko-fi payload" });
  }

  const expectedToken = process.env.KOFI_VERIFICATION_TOKEN;
  if (expectedToken && payload.verification_token !== expectedToken) {
    return res.status(401).json({ error: "Invalid Ko-fi verification token" });
  }

  const type = String(payload.type || "");
  const isPayment = ["Tip", "Donation", "Subscription", "Shop Order", "Commission"].includes(type);

  if (!isPayment) {
    return res.status(200).json({ ok: true, ignored: true });
  }

  const transactionId = String(
    payload.kofi_transaction_id || payload.message_id || `${Date.now()}-${Math.random()}`
  );

  const amount = Number(payload.amount || 0);
  const currency = String(payload.currency || "").toUpperCase();
  const payerEmail = normalizeEmail(payload.email);
  const message = String(payload.message || "");
  const expectedAmount = Number(process.env.PREMIUM_PRICE_EUR || "4.00");

  if (currency !== "EUR" || amount < expectedAmount) {
    await kv.set(
      `kofi-payment-rejected:${transactionId}`,
      {
        verified: false,
        reason: "Wrong currency or amount too low",
        amount,
        currency,
        payerEmail,
        message,
        payload,
        receivedAt: new Date().toISOString(),
      },
      { ex: 60 * 60 * 24 * 30 }
    );

    return res.status(200).json({ ok: true, accepted: false });
  }

  await kv.set(
    `kofi-payment:${transactionId}`,
    {
      verified: true,
      claimed: false,
      source: "kofi",
      transactionId,
      type,
      amount,
      currency,
      payerEmail,
      fromName: payload.from_name || "",
      message,
      raw: payload,
      receivedAt: new Date().toISOString(),
    },
    { ex: 60 * 60 * 24 * 60 }
  );

  return res.status(200).json({ ok: true, accepted: true });
}