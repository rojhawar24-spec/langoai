// api/kofi-webhook.js — Payment grants Supabase profiles.premium (authoritative)

import { kv } from "@vercel/kv";
import { timingSafeEqual, createHash, randomBytes } from "crypto";
import { createClient } from "@supabase/supabase-js";

const ALLOWED_ORIGIN = process.env.APP_ORIGIN || "https://langoaiapp.vercel.app";
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

function safeEqual(a, b) {
  const hashA = createHash("sha256").update(String(a ?? "")).digest();
  const hashB = createHash("sha256").update(String(b ?? "")).digest();
  return timingSafeEqual(hashA, hashB);
}

function setCors(res, origin) {
  const allowed = origin === ALLOWED_ORIGIN || origin === "http://localhost:5173";
  res.setHeader("Access-Control-Allow-Origin", allowed ? origin : ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Vary", "Origin");
}

function parseKofiPayload(body) {
  if (!body) return null;
  if (typeof body === "string") {
    try {
      const params = new URLSearchParams(body);
      const data = params.get("data");
      return data ? JSON.parse(data) : JSON.parse(body);
    } catch { return null; }
  }
  if (body.data) {
    try { return typeof body.data === "string" ? JSON.parse(body.data) : body.data; }
    catch { return null; }
  }
  return body;
}

function extractSessionId(message) {
  const match = String(message || "").match(/kofi_[a-f0-9]{24}/i);
  return match ? match[0] : null;
}

export default async function handler(req, res) {
  const origin = req.headers.origin || "";
  setCors(res, origin);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const payload = parseKofiPayload(req.body);
  if (!payload) return res.status(400).json({ error: "Invalid payload" });

  const verificationToken = process.env.KOFI_VERIFICATION_TOKEN;
  if (!verificationToken) {
    console.error("kofi-webhook: KOFI_VERIFICATION_TOKEN missing");
    return res.status(500).json({ error: "Webhook not configured" });
  }
  if (!payload.verification_token || !safeEqual(payload.verification_token, verificationToken)) {
    return res.status(403).json({ error: "Invalid verification token" });
  }

  const email = payload.email?.toLowerCase();
  const amount = parseFloat(payload.amount || "0");
  const currency = payload.currency || "USD";
  const kofiTransactionId = payload.kofi_transaction_id;
  if (!email || !kofiTransactionId) {
    return res.status(400).json({ error: "Missing email or transaction ID" });
  }

  const premiumPrice = parseFloat(process.env.PREMIUM_PRICE_EUR || "4.00");
  if (!(currency === "EUR" && amount >= premiumPrice)) {
    return res.json({ success: true, message: "Thank you for your support!" });
  }

  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: "Server not configured for entitlements" });
  }

  const premiumDays = parseInt(process.env.PREMIUM_DAYS || "30", 10);
  const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  try {
    const txnKey = `kofi-txn:${kofiTransactionId}`;
    if (await kv.get(txnKey)) {
      return res.json({ success: true, message: "Already processed", idempotent: true });
    }

    const sessionId = extractSessionId(payload.message);
    let userId = null;
    let session = null;

    if (sessionId) {
      session = await kv.get(`kofi-session:${sessionId}`);
      if (session?.userId) userId = session.userId;
      if (session?.payerEmail && session.payerEmail !== email && !userId) {
        return res.status(400).json({ error: "Session email mismatch" });
      }
    }

    if (!userId) {
      const { data: profiles } = await admin.from("profiles").select("id").eq("email", email).limit(2);
      if (profiles && profiles.length === 1) userId = profiles[0].id;
    }

    if (!userId) {
      return res.status(400).json({ error: "Could not link payment to an account. Pay while logged in." });
    }

    const { data: profile, error: grantError } = await admin.rpc("grant_premium_entitlement", {
      p_user_id: userId,
      p_days: premiumDays,
      p_provider: "kofi",
      p_transaction_id: kofiTransactionId,
      p_email: email,
      p_amount: amount,
      p_currency: currency,
    });

    if (grantError) {
      // No weak fallback: entitlement must go through grant_premium_entitlement only.
      console.error("grant_premium_entitlement failed:", grantError.message);
      return res.status(500).json({ error: "Could not grant premium entitlement", retry: true });
    }
    const expiresAt = profile?.premium_expires_at || new Date(Date.now() + premiumDays * 86400000).toISOString();

    await kv.set(txnKey, { userId, email, processedAt: new Date().toISOString() }, { ex: premiumDays * 172800 });
    const accessToken = randomBytes(32).toString("hex");
    await kv.set(`token:${accessToken}`, { valid: true, email, userId, amount, currency, kofiTransactionId, expiresAt }, { ex: premiumDays * 86400 });

    if (sessionId && session) {
      await kv.set(`kofi-session:${sessionId}`, { ...session, status: "verified", accessToken, expiresAt, userId, verifiedAt: new Date().toISOString() }, { ex: premiumDays * 86400 });
    }

    return res.json({ success: true, message: "Premium access granted!" });
  } catch (err) {
    console.error("kofi-webhook error:", err);
    return res.status(500).json({ error: "Could not process payment" });
  }
}
