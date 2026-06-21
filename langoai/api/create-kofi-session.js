import { kv } from "@vercel/kv";
import { randomBytes } from "crypto";
import { setCors, rateLimit } from "./_helpers.js";

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function buildKofiUrl(amount, sessionId, payerEmail) {
  const username = process.env.KOFI_USERNAME || "rojhawar";
  const message = `LANGOAI ${sessionId} ${payerEmail}`;
  const url = new URL(`https://ko-fi.com/${username}`);
  url.searchParams.set("amount", amount);
  url.searchParams.set("message", message);
  return url.toString();
}

export default async function handler(req, res) {
  setCors(res, req);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  // Rate limit: max 10 sessies per minuut per IP (payment endpoint)
  const rl = rateLimit(req, { maxRequests: 10, windowMs: 60_000 });
  if (!rl.ok) {
    res.setHeader("Retry-After", "60");
    return res.status(429).json({ error: "Too many requests. Probeer het over een minuut opnieuw." });
  }

  const payerEmail = normalizeEmail(req.body?.payerEmail);
  if (!payerEmail || !payerEmail.includes("@")) {
    return res.status(400).json({ error: "Enter the email you will pay with on Ko-fi." });
  }

  const amount = process.env.PREMIUM_PRICE_EUR || "4.00";
  const currency = "EUR";
  const sessionId = `kofi_${randomBytes(12).toString("hex")}`;

  await kv.set(
    `kofi-session:${sessionId}`,
    { status: "pending", payerEmail, amount, currency, createdAt: new Date().toISOString() },
    { ex: 60 * 60 * 2 }
  );

  return res.json({
    sessionId,
    payerEmail,
    amount,
    currency,
    kofiUrl: buildKofiUrl(amount, sessionId, payerEmail),
  });
}