//
// /api/paypal.js — Returns public PayPal Client ID
//

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "GET only" });

  const clientId = process.env.PAYPAL_CLIENT_ID;
  if (!clientId) return res.status(500).json({ error: "PAYPAL_CLIENT_ID not configured" });

  return res.json({ clientId });
}
