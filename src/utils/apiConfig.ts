//
// API Configuration — FRONTEND (NO secret keys!)
//
// All secret keys live in Vercel Environment Variables.
// Frontend calls /api/chat and /api/verify-payment on the SAME domain.
// Users never see API keys. GitHub has zero keys.
//

const PAYPAL_CLIENT_ID_KEY = "langlearn_paypal_client_id";
const PAYMENT_VERIFIED_KEY = "langlearn_payment_verified";

// ── PayPal Client ID (public — safe in frontend) ──

const DEFAULT_PAYPAL_CLIENT_ID = "AT90GR3drk5LVHarSQZ1sNLzpiKcyUd0uTwu4MI_j6O6bDskCtnNW1u7TXPwHbNMkWHleYsk3KbRTmOv";

export function getPayPalClientId(): string {
  return localStorage.getItem(PAYPAL_CLIENT_ID_KEY) || DEFAULT_PAYPAL_CLIENT_ID;
}

export function setPayPalClientId(id: string): void {
  localStorage.setItem(PAYPAL_CLIENT_ID_KEY, id);
}

// ── Payment ──

export function isPaymentVerified(): boolean {
  return localStorage.getItem(PAYMENT_VERIFIED_KEY) === "true";
}

export function markPaymentVerified(): void {
  localStorage.setItem(PAYMENT_VERIFIED_KEY, "true");
}

// ── Call Claude via /api/chat (same domain, Vercel serverless) ──

interface ClaudeMessage {
  role: "user" | "assistant";
  content: string;
}

export async function callClaude(
  messages: ClaudeMessage[],
  systemPrompt: string,
  maxTokens = 500
): Promise<string> {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages, systemPrompt, maxTokens }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error || `Error ${response.status}`);
    }

    const data = await response.json();
    return data.text ?? "";
  } catch (e) {
    // If API not deployed yet, give clear message
    if (e instanceof TypeError && e.message === "Failed to fetch") {
      throw new Error("AI API not reachable. Deploy to Vercel and set ANTHROPIC_API_KEY in environment variables.");
    }
    throw e;
  }
}

// ── Verify payment via /api/verify-payment ──

export async function verifyPaymentViaProxy(orderID: string): Promise<boolean> {
  try {
    const response = await fetch("/api/verify-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderID }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error || "Verification failed");
    }

    const data = await response.json();
    return data.verified === true;
  } catch (e) {
    if (e instanceof TypeError && e.message === "Failed to fetch") {
      throw new Error("Payment verification not reachable. Deploy to Vercel and set PAYPAL_SECRET.");
    }
    throw e;
  }
}

// ── System prompts per mode ──

export function getSystemPrompt(
  mode: "grammar" | "translation" | "conversation",
  learningLanguage: string
): string {
  const langName: Record<string, string> = {
    en: "English", nl: "Dutch", fr: "French", de: "German", es: "Spanish",
  };
  const lang = langName[learningLanguage] || "English";

  switch (mode) {
    case "grammar":
      return `You are a friendly, patient ${lang} teacher. Explain grammar rules clearly with examples. Use simple language, break down concepts step by step, and always give example sentences. Keep answers concise (under 500 tokens). Be encouraging.`;
    case "translation":
      return `You are a helpful ${lang} translator. Translate the user's message into ${lang}, and briefly explain key vocabulary or grammar points. Keep it friendly and concise.`;
    case "conversation":
      return `You are a friendly ${lang} conversation partner. Chat naturally in ${lang}, gently correct any mistakes, and keep the conversation flowing. Use simple ${lang} suitable for a learner. Be encouraging!`;
    default:
      return "You are a helpful language tutor.";
  }
}
