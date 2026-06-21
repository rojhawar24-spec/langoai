import { kv } from "@vercel/kv";
import { setCors, rateLimit } from "./_helpers.js";

export default async function handler(req, res) {
  setCors(res, req);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  // Rate limit: max 30 chat requests per minuut per IP
  const rl = rateLimit(req, { maxRequests: 30, windowMs: 60_000 });
  if (!rl.ok) {
    res.setHeader("Retry-After", "60");
    return res.status(429).json({ error: "Too many requests. Probeer het over een minuut opnieuw." });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "Claude API key missing on server" });

  const { messages, systemPrompt, maxTokens, accessToken } = req.body || {};

  if (!accessToken) return res.status(401).json({ error: "No access token. Please pay first." });

  try {
    const tokenData = await kv.get(`token:${accessToken}`);
    if (!tokenData || !tokenData.valid) return res.status(401).json({ error: "Invalid access token." });
    if (new Date(tokenData.expiresAt).getTime() < Date.now()) {
      await kv.delete(`token:${accessToken}`);
      return res.status(401).json({ error: "Access expired. Please pay again." });
    }
  } catch (err) {
    console.error("Token check error:", err);
    return res.status(500).json({ error: "Could not verify payment. Try again." });
  }

  if (!messages || !Array.isArray(messages)) return res.status(400).json({ error: "Missing messages" });

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
    return res.json({ text: data.content?.[0]?.text ?? "" });
  } catch (err) {
    console.error("Chat error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}