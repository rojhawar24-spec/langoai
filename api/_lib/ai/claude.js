// api/_lib/ai/claude.js
// Anthropic (Claude) provider for the AI Tutor.
//
// Same wire format Lango AI already used in the old api/chat.js — just
// extracted into its own file so chat.js no longer needs to know which AI
// is actually answering. See api/_lib/ai/index.js for how a provider gets
// selected.

const DEFAULT_MODEL = "claude-haiku-4-5-20251001"; // cheap + fast — good fit for a tutor chat

/**
 * @param {{ messages: {role: "user"|"assistant", content: string}[], system: string, maxTokens: number }} params
 * @returns {Promise<string>} the model's reply text
 */
export async function generateReply({ messages, system, maxTokens }) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    const err = new Error("ANTHROPIC_API_KEY missing on server");
    err.status = 500;
    throw err;
  }

  const model = process.env.CLAUDE_MODEL || DEFAULT_MODEL;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model,
      max_tokens: maxTokens,
      system,
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    console.error("Claude error:", response.status, errText.slice(0, 300));
    const err = new Error(`Claude error ${response.status}`);
    err.status = response.status >= 400 && response.status < 500 ? response.status : 502;
    throw err;
  }

  const data = await response.json();
  return data.content?.[0]?.text ?? "";
}

export const providerName = "claude";
export const requiredEnvVar = "ANTHROPIC_API_KEY";
