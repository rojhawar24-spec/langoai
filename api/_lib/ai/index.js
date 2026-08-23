// api/_lib/ai/index.js
// Single switch point for "which AI powers the tutor".
//
// Change providers with ONE environment variable in Vercel — no code edit,
// no redeploy of logic, nothing to touch here:
//
//   AI_PROVIDER=claude   (default)   → needs ANTHROPIC_API_KEY
//   AI_PROVIDER=gemini               → needs GEMINI_API_KEY
//
// Optional: override the exact model without touching code either:
//   CLAUDE_MODEL=claude-haiku-4-5-20251001   (default)
//   GEMINI_MODEL=gemini-2.5-flash            (default)
//
// To add a third provider later (e.g. OpenAI): write api/_lib/ai/openai.js
// exporting the same generateReply({messages, system, maxTokens}) shape as
// claude.js / gemini.js, import it below, add it to PROVIDERS. That's it —
// api/chat.js never changes.

import * as claude from "./claude.js";
import * as gemini from "./gemini.js";

const PROVIDERS = {
  claude,
  gemini,
};

export function getAIProvider() {
  const name = (process.env.AI_PROVIDER || "claude").toLowerCase().trim();
  const provider = PROVIDERS[name];

  if (!provider) {
    const available = Object.keys(PROVIDERS).join(", ");
    const err = new Error(`Unknown AI_PROVIDER "${name}". Available: ${available}`);
    err.status = 500;
    throw err;
  }

  return provider;
}
