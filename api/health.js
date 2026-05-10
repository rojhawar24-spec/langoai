export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({
    ok: true,
    hasClaude: !!process.env.ANTHROPIC_API_KEY,
    hasPayPal: !!(process.env.PAYPAL_CLIENT_ID && process.env.PAYPAL_SECRET),
    time: new Date().toISOString(),
  });
}
