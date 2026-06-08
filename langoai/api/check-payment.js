import { kv } from "@vercel/kv";
import { randomBytes } from "crypto";

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req, res) {
  setCors(res);

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const { sessionId } = req.body || {};

  if (!sessionId) {
    return res.status(400).json({ error: "Missing payment session." });
  }

  const session = await kv.get(`payment-session:${sessionId}`);

  if (!session) {
    return res.status(404).json({
      verified: false,
      error: "Payment session expired. Start payment again.",
    });
  }

  if (session.status === "verified" && session.accessToken && session.expiresAt) {
    return res.json({
      verified: true,
      accessToken: session.accessToken,
      expiresAt: session.expiresAt,
    });
  }

  const expectedAmount = parseFloat(process.env.PREMIUM_PRICE_EUR || "4.00");
  const premiumDays = parseInt(process.env.PREMIUM_DAYS || "30", 10);
  const paymentKeys = await kv.keys("payment:*");

  for (const key of paymentKeys) {
    const payment = await kv.get(key);
    if (!payment) continue;

    const sameEmail =
      String(payment.payerEmail || "").toLowerCase() ===
      String(session.payerEmail || "").toLowerCase();

    const correctPayment =
      payment.verified === true &&
      payment.claimed !== true &&
      sameEmail &&
      payment.currency === "EUR" &&
      Number(payment.amount) >= expectedAmount;

    if (!correctPayment) continue;

    const accessToken = randomBytes(32).toString("hex");
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + premiumDays);
    const expiresAtIso = expiresAt.toISOString();

    await kv.set(
      `token:${accessToken}`,
      { valid: true, expiresAt: expiresAtIso },
      { ex: 60 * 60 * 24 * premiumDays }
    );

    await kv.set(key, { ...payment, claimed: true, claimedBy: sessionId });

    await kv.set(
      `payment-session:${sessionId}`,
      {
        ...session,
        status: "verified",
        accessToken,
        expiresAt: expiresAtIso,
        verifiedAt: new Date().toISOString(),
      },
      { ex: 60 * 60 * 24 * premiumDays }
    );

    return res.json({
      verified: true,
      accessToken,
      expiresAt: expiresAtIso,
    });
  }

  return res.json({ verified: false });
}