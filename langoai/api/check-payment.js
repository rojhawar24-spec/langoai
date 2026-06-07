//
// /api/check-payment.js
// Frontend polls this after the user pays.
// Returns a signed access token when real PayPal payment is confirmed.
//

import { kv } from "@vercel/kv";
import { randomBytes } from "crypto";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const EXPECTED_AMOUNT = parseFloat(process.env.PREMIUM_PRICE_EUR || "4.00");
  const PREMIUM_DAYS = parseInt(process.env.PREMIUM_DAYS || "30", 10);

  try {
    const keys = await kv.keys("payment:*");

    for (const key of keys) {
      const p = await kv.get(key);
      if (!p) continue;

      if (p.verified && !p.claimed && p.amount >= EXPECTED_AMOUNT) {
        // Generate a real server-side access token
        const accessToken = randomBytes(32).toString("hex");
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + PREMIUM_DAYS);
        const expiresAtIso = expiresAt.toISOString();

        // Store the token in KV — this is what /api/chat will check
        await kv.set(
          `token:${accessToken}`,
          { valid: true, expiresAt: expiresAtIso },
          { ex: 60 * 60 * 24 * PREMIUM_DAYS }
        );

        // Mark payment as claimed so it can't be reused
        await kv.set(key, { ...p, claimed: true });

        return res.json({
          verified: true,
          accessToken,
          expiresAt: expiresAtIso,
        });
      }
    }

    return res.json({ verified: false });
  } catch (err) {
    console.error("check-payment error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}