import { kv } from "@vercel/kv";
import { randomBytes } from "crypto";

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

export default async function handler(req, res) {
  setCors(res);

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const payerEmail = normalizeEmail(req.body?.payerEmail);

  if (!payerEmail || !payerEmail.includes("@")) {
    return res.status(400).json({ error: "Enter the PayPal email you will pay with." });
  }

  const amount = process.env.PREMIUM_PRICE_EUR || "4.00";
  const currency = "EUR";
  const sessionId = `pay_${randomBytes(12).toString("hex")}`;

  await kv.set(
    `payment-session:${sessionId}`,
    {
      status: "pending",
      payerEmail,
      amount,
      currency,
      createdAt: new Date().toISOString(),
    },
    { ex: 60 * 60 * 2 }
  );

  return res.json({
    sessionId,
    payerEmail,
    amount,
    currency,
    paypalUrl: `https://paypal.me/RojHawar/${amount}EUR`,
  });
}