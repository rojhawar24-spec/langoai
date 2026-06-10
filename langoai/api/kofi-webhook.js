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

function firstValue(...values) {
  return values.find((value) => value !== undefined && value !== null && String(value).trim() !== "");
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function parseAmount(value) {
  const raw = String(value || "").replace(",", ".");
  const match = raw.match(/\d+(\.\d+)?/);
  return match ? Number(match[0]) : 0;
}

function buildSearchText(payload) {
  return JSON.stringify(payload || {}).toLowerCase();
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
  const receivedToken = firstValue(payload.verification_token, payload.verificationToken);

  if (expectedToken && receivedToken !== expectedToken) {
    await kv.set(
      `kofi-webhook-error:${Date.now()}`,
      {
        error: "Invalid Ko-fi verification token",
        receivedToken: receivedToken || "",
        receivedAt: new Date().toISOString(),
      },
      { ex: 60 * 60 * 24 * 7 }
    );

    return res.status(401).json({ error: "Invalid Ko-fi verification token" });
  }

  const type = String(payload.type || "").trim();
  const typeLower = type.toLowerCase();
  const isPayment = ["tip", "donation", "subscription", "shop order", "commission"].includes(typeLower);

  if (!isPayment) {
    return res.status(200).json({ ok: true, ignored: true, type });
  }

  const transactionId = String(
    firstValue(
      payload.kofi_transaction_id,
      payload.transaction_id,
      payload.message_id,
      payload.order_id,
      payload.id,
      `${Date.now()}-${Math.random()}`
    )
  );

  const amount = parseAmount(firstValue(payload.amount, payload.amount_received, payload.total, payload.value));
  const currency = String(firstValue(payload.currency, payload.currency_code, "EUR")).toUpperCase();
  const payerEmail = normalizeEmail(
    firstValue(payload.email, payload.from_email, payload.supporter_email, payload.payer_email)
  );
  const message = String(firstValue(payload.message, payload.message_text, payload.note, payload.support_message, ""));
  const expectedAmount = Number(process.env.PREMIUM_PRICE_EUR || "4.00");
  const searchText = buildSearchText(payload);

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
        type,
        searchText,
        payload,
        receivedAt: new Date().toISOString(),
      },
      { ex: 60 * 60 * 24 * 30 }
    );

    return res.status(200).json({ ok: true, accepted: false, amount, currency });
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
      fromName: payload.from_name || payload.fromName || "",
      message,
      searchText,
      raw: payload,
      receivedAt: new Date().toISOString(),
    },
    { ex: 60 * 60 * 24 * 60 }
  );

  return res.status(200).json({ ok: true, accepted: true });
}