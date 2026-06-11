export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({
    ok: true,
    hasClaude: !!process.env.ANTHROPIC_API_KEY,
    hasKofi: !!(process.env.KOFI_USERNAME && process.env.KOFI_VERIFICATION_TOKEN),
    hasKv: !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN),
    time: new Date().toISOString(),
  });
}