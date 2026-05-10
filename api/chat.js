//
// /api/chat.js — Deployed on Vercel
// Calls Claude API using ANTHROPIC_API_KEY from Vercel environment.
// Key NEVER reaches the browser.
//

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Claude API key missing on server" });
  }

  const { messages, systemPrompt, maxTokens } = req.body || {};
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
