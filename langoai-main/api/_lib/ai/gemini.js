// api/_lib/ai/gemini.js
// Google Gemini provider for the AI Tutor.
//
// Exposes the exact same generateReply({messages, system, maxTokens}) shape
// as claude.js, so api/chat.js never needs to know which provider is
// active — see api/_lib/ai/index.js.
//
// Endpoint / field names verified against Google's current docs (Aug 2026):
// https://ai.google.dev/api/generate-content
//
// Two gotchas we deliberately avoid here:
//  1. `systemInstruction` MUST be an object { parts: [{ text }] }, never a
//     bare string — sending a bare string is silently ignored (no error),
//     which is a nasty thing to debug the first time you hit it.
//  2. Gemini's assistant role is called "model", not "assistant" — the app
//     talks about messages using "assistant" everywhere else, so we map it
//     here at the edge instead of leaking that detail into the rest of the
//     codebase.

const DEFAULT_MODEL = "gemini-2.5-flash"; // cheap + fast tier — good fit for a tutor chat

/**
 * @param {{ messages: {role: "user"|"assistant", content: string}[], system: string, maxTokens: number }} params
 * @returns {Promise<string>} the model's reply text
 */
export async function generateReply({ messages, system, maxTokens }) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    const err = new Error("GEMINI_API_KEY missing on server");
    err.status = 500;
    throw err;
  }

  const model = process.env.GEMINI_MODEL || DEFAULT_MODEL;

  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents,
        generationConfig: { maxOutputTokens: maxTokens },
      }),
    }
  );

  if (!response.ok) {
    const errText = await response.text();
    console.error("Gemini error:", response.status, errText.slice(0, 300));
    const err = new Error(`Gemini error ${response.status}`);
    err.status = response.status >= 400 && response.status < 500 ? response.status : 502;
    throw err;
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (text === undefined) {
    // Most common cause: the response was blocked by a safety filter, so
    // there's no candidate text at all. Surface something useful instead
    // of returning an empty string that looks like a silent failure.
    const finishReason = data.candidates?.[0]?.finishReason;
    console.error("Gemini returned no text, finishReason:", finishReason);
    const err = new Error(`Gemini returned no text (finishReason: ${finishReason ?? "unknown"})`);
    err.status = 502;
    throw err;
  }

  return text;
}

export const providerName = "gemini";
export const requiredEnvVar = "GEMINI_API_KEY";
