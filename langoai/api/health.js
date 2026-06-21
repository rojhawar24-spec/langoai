import { setCors, rateLimit } from "./_helpers.js";

export default function handler(req, res) {
  setCors(res, req);
  if (req.method === "OPTIONS") return res.status(200).end();

  const rl = rateLimit(req, { maxRequests: 60, windowMs: 60_000 });
  if (!rl.ok) return res.status(429).json({ error: "Too many requests" });

  res.json({
    ok: true,
    hasClaude: !!process.env.ANTHROPIC_API_KEY,
    hasKofi: !!(process.env.KOFI_USERNAME && process.env.KOFI_VERIFICATION_TOKEN),
    hasKv: !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN),
    time: new Date().toISOString(),
  });
}