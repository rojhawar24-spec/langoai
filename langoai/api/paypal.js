import { setCors, rateLimit } from "./_helpers.js";

export default function handler(req, res) {
  setCors(res, req);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "GET only" });

  const rl = rateLimit(req, { maxRequests: 30, windowMs: 60_000 });
  if (!rl.ok) return res.status(429).json({ error: "Too many requests" });

  const clientId = process.env.PAYPAL_CLIENT_ID;
  if (!clientId) return res.status(500).json({ error: "PAYPAL_CLIENT_ID not configured" });

  return res.json({ clientId });
}