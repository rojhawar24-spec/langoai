//
// /api/verify-payment.js — Deployed on Vercel
// Verifies PayPal order using server-side PAYPAL_SECRET.
// NEVER exposes secret keys to the frontend.
//

export default async function handler(req, res) {
  // CORS — allow requests from your frontend
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const { orderID } = req.body || {};
  if (!orderID) return res.status(400).json({ error: "Missing orderID" });

  const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
  const SECRET = process.env.PAYPAL_SECRET;

  if (!CLIENT_ID || !SECRET) {
    return res.status(500).json({ error: "PayPal keys missing on server" });
  }

  try {
    // Get PayPal access token
    const auth = Buffer.from(`${CLIENT_ID}:${SECRET}`).toString("base64");
    const tokenRes = await fetch("https://api-m.paypal.com/v1/oauth2/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });

    if (!tokenRes.ok) {
      return res.status(500).json({ error: "PayPal auth failed" });
    }

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    // Verify the order
    const orderRes = await fetch(
      `https://api-m.paypal.com/v2/checkout/orders/${orderID}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    if (!orderRes.ok) {
      return res.status(500).json({ error: "Order verification failed" });
    }

    const orderData = await orderRes.json();

    if (orderData.status === "COMPLETED") {
      return res.json({ verified: true, status: "COMPLETED" });
    } else {
      return res.json({ verified: false, status: orderData.status });
    }
  } catch (err) {
    console.error("PayPal error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
