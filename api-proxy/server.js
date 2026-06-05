//
// Lango AI — Secure API Proxy + Auth Server
//
// Endpoints:
//   POST /ask-ai            — Forwards a question to Claude
//   POST /verify-payment    — Validates a PayPal order
//   GET  /health            — Health check
//   POST /auth/register     — Register new user
//   POST /auth/login        — Login user
//   POST /auth/logout       — Logout user
//   GET  /auth/me           — Get current session user
//   PATCH /auth/user        — Update user data
//

import "dotenv/config";
import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
import crypto from "crypto";

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

const PORT = process.env.PORT || 3001;
const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY || "";
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || "";
const PAYPAL_SECRET = process.env.PAYPAL_SECRET || "";
const SALT = "langlearn_salt_value";

// ─── Database setup ──────────────────────────────────────────
const db = new Database("./lango_users.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    username TEXT UNIQUE NOT NULL,
    hashedPassword TEXT NOT NULL,
    currentLanguage TEXT,
    totalXP INTEGER DEFAULT 0,
    level INTEGER DEFAULT 1,
    streak INTEGER DEFAULT 0,
    lastActivityDate TEXT,
    theme TEXT DEFAULT 'light',
    interfaceLanguage TEXT DEFAULT 'en',
    premium INTEGER DEFAULT 0,
    createdAt TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS sessions (
    token TEXT PRIMARY KEY,
    userId TEXT NOT NULL,
    createdAt TEXT NOT NULL
  );
`);

// ─── Password helpers ────────────────────────────────────────
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + SALT);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

function generateToken() {
  return crypto.randomBytes(32).toString("hex");
}

function userToJson(user) {
  return {
    id: user.id,
    email: user.email,
    username: user.username,
    currentLanguage: user.currentLanguage,
    totalXP: user.totalXP,
    level: user.level,
    streak: user.streak,
    lastActivityDate: user.lastActivityDate,
    theme: user.theme,
    interfaceLanguage: user.interfaceLanguage,
    premium: !!user.premium,
    createdAt: user.createdAt,
  };
}

// ─── Auth middleware ─────────────────────────────────────────
function requireAuth(req, res, next) {
  const token = req.headers["authorization"]?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Not authenticated" });
  const session = db.prepare("SELECT * FROM sessions WHERE token = ?").get(token);
  if (!session) return res.status(401).json({ error: "Invalid session" });
  const user = db.prepare("SELECT * FROM users WHERE id = ?").get(session.userId);
  if (!user) return res.status(401).json({ error: "User not found" });
  req.user = user;
  next();
}

// ─── Health check ────────────────────────────────────────────
app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    hasClaudeKey: !!CLAUDE_API_KEY,
    hasPayPalKeys: !!(PAYPAL_CLIENT_ID && PAYPAL_SECRET),
  });
});

// ─── Register ────────────────────────────────────────────────
app.post("/auth/register", async (req, res) => {
  const { email, username, password, currentLanguage, theme, interfaceLanguage } = req.body;
  if (!email || !username || !password)
    return res.status(400).json({ error: "Missing fields" });

  const existingEmail = db.prepare("SELECT id FROM users WHERE email = ?").get(email.toLowerCase());
  if (existingEmail) return res.status(409).json({ error: "email_taken" });

  const existingUsername = db.prepare("SELECT id FROM users WHERE username = ?").get(username);
  if (existingUsername) return res.status(409).json({ error: "username_taken" });

  try {
    const hashed = await hashPassword(password);
    const id = crypto.randomUUID();
    const now = new Date().toISOString();

    db.prepare(`
      INSERT INTO users (id, email, username, hashedPassword, currentLanguage, totalXP, level, streak, lastActivityDate, theme, interfaceLanguage, premium, createdAt)
      VALUES (?, ?, ?, ?, ?, 0, 1, 0, NULL, ?, ?, 0, ?)
    `).run(id, email.toLowerCase(), username, hashed, currentLanguage ?? null, theme ?? "light", interfaceLanguage ?? "en", now);

    const user = db.prepare("SELECT * FROM users WHERE id = ?").get(id);
    const token = generateToken();
    db.prepare("INSERT INTO sessions (token, userId, createdAt) VALUES (?, ?, ?)").run(token, id, now);

    res.json({ user: userToJson(user), token });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ─── Login ───────────────────────────────────────────────────
app.post("/auth/login", async (req, res) => {
  const { identifier, password } = req.body;
  if (!identifier || !password)
    return res.status(400).json({ error: "Missing fields" });

  const user = db.prepare(
    "SELECT * FROM users WHERE email = ? OR username = ?"
  ).get(identifier.toLowerCase(), identifier);

  if (!user) return res.status(401).json({ error: "invalid_credentials" });

  const hashed = await hashPassword(password);
  if (hashed !== user.hashedPassword)
    return res.status(401).json({ error: "invalid_credentials" });

  const token = generateToken();
  db.prepare("INSERT INTO sessions (token, userId, createdAt) VALUES (?, ?, ?)").run(
    token, user.id, new Date().toISOString()
  );

  res.json({ user: userToJson(user), token });
});

// ─── Logout ──────────────────────────────────────────────────
app.post("/auth/logout", (req, res) => {
  const token = req.headers["authorization"]?.replace("Bearer ", "");
  if (token) {
    db.prepare("DELETE FROM sessions WHERE token = ?").run(token);
  }
  res.json({ ok: true });
});

// ─── Get current user ────────────────────────────────────────
app.get("/auth/me", requireAuth, (req, res) => {
  res.json({ user: userToJson(req.user) });
});

// ─── Update user ─────────────────────────────────────────────
app.patch("/auth/user", requireAuth, (req, res) => {
  const allowed = ["currentLanguage", "totalXP", "level", "streak", "lastActivityDate", "theme", "interfaceLanguage", "premium"];
  const updates = {};
  for (const key of allowed) {
    if (req.body[key] !== undefined) updates[key] = req.body[key];
  }
  if (Object.keys(updates).length === 0)
    return res.status(400).json({ error: "No valid fields" });

  const set = Object.keys(updates).map((k) => `${k} = ?`).join(", ");
  const values = [...Object.values(updates), req.user.id];
  db.prepare(`UPDATE users SET ${set} WHERE id = ?`).run(...values);

  const updated = db.prepare("SELECT * FROM users WHERE id = ?").get(req.user.id);
  res.json({ user: userToJson(updated) });
});

// ─── Ask AI ──────────────────────────────────────────────────
app.post("/ask-ai", async (req, res) => {
  if (!CLAUDE_API_KEY)
    return res.status(500).json({ error: "Claude API key not configured on server." });

  const { messages, systemPrompt, maxTokens } = req.body;
  if (!messages || !Array.isArray(messages))
    return res.status(400).json({ error: "Missing 'messages' array." });

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
      return res.status(response.status).json({ error: `Claude API error: ${response.status}`, detail: errText.slice(0, 200) });
    }

    const data = await response.json();
    res.json({ text: data.content?.[0]?.text ?? "" });
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: "Failed to reach Claude API." });
  }
});

// ─── Verify PayPal Payment ───────────────────────────────────
app.post("/verify-payment", async (req, res) => {
  if (!PAYPAL_CLIENT_ID || !PAYPAL_SECRET)
    return res.status(500).json({ error: "PayPal keys not configured on server." });

  const { orderID } = req.body;
  if (!orderID) return res.status(400).json({ error: "Missing 'orderID'." });

  try {
    const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`).toString("base64");
    const tokenRes = await fetch("https://api-m.paypal.com/v1/oauth2/token", {
      method: "POST",
      headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/x-www-form-urlencoded" },
      body: "grant_type=client_credentials",
    });

    if (!tokenRes.ok) return res.status(500).json({ error: "PayPal authentication failed." });

    const { access_token } = await tokenRes.json();
    const orderRes = await fetch(`https://api-m.paypal.com/v2/checkout/orders/${orderID}`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (!orderRes.ok) return res.status(500).json({ error: "Payment verification failed." });

    const orderData = await orderRes.json();
    res.json({ verified: orderData.status === "COMPLETED", status: orderData.status });
  } catch (err) {
    console.error("PayPal proxy error:", err);
    res.status(500).json({ error: "Failed to verify payment." });
  }
});

// ─── Start ───────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🔒 Lango AI Proxy running on http://localhost:${PORT}`);
  console.log(`   Auth DB        : ✅ lango_users.db`);
  console.log(`   Claude API key : ${CLAUDE_API_KEY ? "✅ configured" : "❌ missing"}`);
  console.log(`   PayPal keys    : ${PAYPAL_CLIENT_ID && PAYPAL_SECRET ? "✅ configured" : "❌ missing"}\n`);
});