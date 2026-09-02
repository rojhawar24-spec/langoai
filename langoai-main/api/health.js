import { setCors, rateLimit } from "./_helpers.js";

// 🔒 FIX: was hardcoded to `hasClaude: !!process.env.ANTHROPIC_API_KEY` —
// once AI_PROVIDER can be "gemini" too, that check would report `false`
// (looking broken) on a perfectly working Gemini setup that simply doesn't
// need an Anthropic key. Reports whichever provider + key is actually
// selected instead of assuming it's always Claude.
function checkAiConfig() {
  const provider = (process.env.AI_PROVIDER || "claude").toLowerCase().trim();
  const requiredEnvVar = provider === "gemini" ? "GEMINI_API_KEY" : "ANTHROPIC_API_KEY";
  return {
    aiProvider: provider,
    hasAiKey: !!process.env[requiredEnvVar],
  };
}

export default async function handler(req, res) {
  setCors(res, req);
  if (req.method === "OPTIONS") return res.status(200).end();

  const rl = await rateLimit(req, { scope: "health", maxRequests: 60, windowMs: 60_000 });
  if (!rl.ok) return res.status(429).json({ error: "Too many requests" });

  res.json({
    ok: true,
    ...checkAiConfig(),
    hasKv: !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN),
    time: new Date().toISOString(),
  });
}
