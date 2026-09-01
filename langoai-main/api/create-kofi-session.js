import { kv } from "@vercel/kv";
import { randomBytes } from "crypto";
import { createClient } from "@supabase/supabase-js";
import { setCors, rateLimit } from "./_helpers.js";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY;

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

  const rl = await rateLimit(req, { scope: "kofi-session", maxRequests: 10, windowMs: 60_000 });
  if (!rl.ok) {
    res.setHeader("Retry-After", "60");
    return res.status(429).json({ error: "Too many requests." });
  }

  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
  if (!token || !SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return res.status(401).json({ error: "Login required to start payment." });
  }

  const anon = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const { data: authData, error: authError } = await anon.auth.getUser(token);
  if (authError || !authData?.user) {
    return res.status(401).json({ error: "Invalid or expired session." });
  }

  const userId = authData.user.id;
  const accountEmail = (authData.user.email || "").toLowerCase();
  const payerEmail = normalizeEmail(req.body?.payerEmail) || accountEmail;
  if (!payerEmail.includes("@")) {
    return res.status(400).json({ error: "Enter the email you will pay with on Ko-fi." });
  }

  const amount = process.env.PREMIUM_PRICE_EUR || "4.00";
  const currency = "EUR";
  const sessionId = `kofi_${randomBytes(12).toString("hex")}`;

  await kv.set(
    `kofi-session:${sessionId}`,
    { status: "pending", userId, accountEmail, payerEmail, amount, currency, createdAt: new Date().toISOString() },
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
