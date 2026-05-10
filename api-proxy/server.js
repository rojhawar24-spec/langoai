//
// Lango AI — Secure API Proxy
//
// This tiny server sits between the user's browser and the AI + payment services.
// It holds your secret API keys and NEVER exposes them to the frontend.
//
// Endpoints:
//   POST /ask-ai       — Forwards a question to Claude, returns the answer.
//   POST /verify-payment — Validates a PayPal order using server-side secret.
//   GET  /health        — Health check.
//

import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY || "";
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || "";
const PAYPAL_SECRET = process.env.PAYPAL_SECRET || "";

// ─── Health check ────────────────────────────────────────────
app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    hasClaudeKey: !!CLAUDE_API_KEY,
    hasPayPalKeys: !!(PAYPAL_CLIENT_ID && PAYPAL_SECRET),
  });
});

// ─── Ask AI ──────────────────────────────────────────────────
app.post("/ask-ai", async (req, res) => {
  if (!CLAUDE_API_KEY) {
    return res.status(500).json({ error: "Claude API key not configured on server." });
  }

  const { messages, systemPrompt, maxTokens } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Missing 'messages' array." });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": CLAUDE_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-haiku-20241022",
        max_tokens: maxTokens || 500,
        system: systemPrompt || "You are a helpful language tutor.",
        messages,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Claude API error:", response.status, errText);
      return res.status(response.status).json({
        error: `Claude API error: ${response.status}`,
        detail: errText.slice(0, 200),
      });
    }

    const data = await response.json();
    const text = data.content?.[0]?.text ?? "";
    res.json({ text });
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: "Failed to reach Claude API." });
  }
});

// ─── Verify PayPal Payment ───────────────────────────────────
app.post("/verify-payment", async (req, res) => {
  if (!PAYPAL_CLIENT_ID || !PAYPAL_SECRET) {
    return res.status(500).json({ error: "PayPal keys not configured on server." });
  }

  const { orderID } = req.body;

  if (!orderID) {
    return res.status(400).json({ error: "Missing 'orderID'." });
  }

  try {
    // Get PayPal access token
    const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`).toString("base64");
    const tokenRes = await fetch("https://api-m.paypal.com/v1/oauth2/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });

    if (!tokenRes.ok) {
      console.error("PayPal auth error:", tokenRes.status);
      return res.status(500).json({ error: "PayPal authentication failed." });
    }

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    // Verify the order
    const orderRes = await fetch(`https://api-m.paypal.com/v2/checkout/orders/${orderID}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!orderRes.ok) {
      console.error("PayPal verify error:", orderRes.status);
      return res.status(500).json({ error: "Payment verification failed." });
    }

    const orderData = await orderRes.json();

    if (orderData.status === "COMPLETED") {
      res.json({ verified: true, status: "COMPLETED" });
    } else {
      res.json({ verified: false, status: orderData.status });
    }
  } catch (err) {
    console.error("PayPal proxy error:", err);
    res.status(500).json({ error: "Failed to verify payment." });
  }
});

// ─── Start ───────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🔒 Lango AI Proxy running on http://localhost:${PORT}`);
  console.log(`   Claude API key : ${CLAUDE_API_KEY ? "✅ configured" : "❌ missing"}`);
  console.log(`   PayPal keys    : ${PAYPAL_CLIENT_ID && PAYPAL_SECRET ? "✅ configured" : "❌ missing"}`);
  console.log(`\n   Endpoints:`);
  console.log(`   POST /ask-ai          — Forward to Claude`);
  console.log(`   POST /verify-payment  — Verify PayPal order`);
  console.log(`   GET  /health          — Status check\n`);
});
