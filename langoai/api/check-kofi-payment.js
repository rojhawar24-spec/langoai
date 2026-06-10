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

function isRecentPaymentForSession(payment, session) {
  const paymentTime = new Date(payment.receivedAt || 0).getTime();
  const sessionTime = new Date(session.createdAt || 0).getTime();

  if (!paymentTime || !sessionTime) return false;

  const fiveMinutesBeforeSession = sessionTime - 5 * 60 * 1000;
  const twoHoursAfterSession = sessionTime + 2 * 60 * 60 * 1000;

  return paymentTime >= fiveMinutesBeforeSession && paymentTime <= twoHoursAfterSession;
}

export default async function handler(req, res) {
  setCors(res);

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const { sessionId } = req.body || {};

  if (!sessionId) {
    return res.status(400).json({ error: "Missing Ko-fi payment session." });
  }

  const session = await kv.get(`kofi-session:${sessionId}`);

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
  const paymentKeys = await kv.keys("kofi-payment:*");
  const normalizedSessionEmail = normalizeEmail(session.payerEmail);

  for (const key of paymentKeys) {
    const payment = await kv.get(key);
    if (!payment) continue;

    const paymentEmail = normalizeEmail(payment.payerEmail);
    const sameEmail = paymentEmail && paymentEmail === normalizedSessionEmail;
    const messageText = `${payment.message || ""} ${payment.searchText || ""}`.toLowerCase();
    const messageHasSession = messageText.includes(String(sessionId).toLowerCase());
    const recentFallback = !paymentEmail && isRecentPaymentForSession(payment, session);

    const correctPayment =
      payment.verified === true &&
      payment.claimed !== true &&
      payment.currency === "EUR" &&
      Number(payment.amount) >= expectedAmount &&
      (sameEmail || messageHasSession || recentFallback);

    if (!correctPayment) continue;

    const accessToken = randomBytes(32).toString("hex");
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + premiumDays);
    const expiresAtIso = expiresAt.toISOString();

    await kv.set(
      `token:${accessToken}`,
      { valid: true, expiresAt: expiresAtIso, source: "kofi" },
      { ex: 60 * 60 * 24 * premiumDays }
    );

    await kv.set(
      key,
      {
        ...payment,
        claimed: true,
        claimedBy: sessionId,
        claimedAt: new Date().toISOString(),
      },
      { ex: 60 * 60 * 24 * 60 }
    );

    await kv.set(
      `kofi-session:${sessionId}`,
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