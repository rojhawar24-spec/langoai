//
// /api/chat.js
// Calls Claude — but ONLY if the request includes a valid server-issued access token.
// No valid token = no AI. Cannot be faked from the browser.
//

import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Claude API key missing on server" });
  }

  const { messages, systemPrompt, maxTokens, accessToken } = req.body || {};

  // ── PAYMENT GATE ──────────────────────────────────────────────
  // Every request must carry the token that was issued after real payment.
  // We check it against KV. No localStorage trick can fake this.
  if (!accessToken) {
    return res.status(401).json({ error: "No access token. Please pay first." });
  }

  try {
    const tokenData = await kv.get(`token:${accessToken}`);

    if (!tokenData || !tokenData.valid) {
      return res.status(401).json({ error: "Invalid access token." });
    }

    if (new Date(tokenData.expiresAt).getTime() < Date.now()) {
      await kv.delete(`token:${accessToken}`);
      return res.status(401).json({ error: "Access expired. Please pay again." });
    }
  } catch (err) {
    console.error("Token check error:", err);
    return res.status(500).json({ error: "Could not verify payment. Try again." });
  }
  // ─────────────────────────────────────────────────────────────

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Missing messages" });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
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
      console.error("Claude error:", response.status, errText.slice(0, 300));
      return res.status(response.status).json({ error: `Claude error ${response.status}` });
    }

    const data = await response.json();
    const text = data.content?.[0]?.text ?? "";
    return res.json({ text });
  } catch (err) {
    console.error("Chat error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}