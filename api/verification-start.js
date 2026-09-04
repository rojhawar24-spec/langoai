export default async function handler(req, res) {
  // Tijdelijke simpele versie: altijd succes, geen rate-limiting of database
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "method_not_allowed" });

  return res.status(200).json({ requestId: "dummy-" + Date.now() });
}
