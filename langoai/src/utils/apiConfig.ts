//
// API Configuration - FRONTEND (NO secret keys!)
//
// All secret keys live in Vercel Environment Variables.
// Frontend calls /api/chat on the SAME domain.
// Users never see API keys. GitHub has zero keys.
//

const PAYMENT_VERIFIED_KEY = "langlearn_payment_verified";
const PAYMENT_EXPIRES_AT_KEY = "langlearn_payment_expires_at";

export const PREMIUM_PRICE_EUR = "4.00";
export const PREMIUM_DAYS = 30;

export function getPaymentExpiresAt(): string | null {
  return localStorage.getItem(PAYMENT_EXPIRES_AT_KEY);
}

export function clearPaymentVerified(): void {
  localStorage.removeItem(PAYMENT_VERIFIED_KEY);
  localStorage.removeItem(PAYMENT_EXPIRES_AT_KEY);
}

export function isPremiumActive(
  user?: { premium?: boolean; premiumExpiresAt?: string | null } | null
): boolean {
  const expiresAt = user?.premiumExpiresAt ?? getPaymentExpiresAt();
  if (!expiresAt) return false;
  return new Date(expiresAt).getTime() > Date.now();
}

export function isPaymentVerified(): boolean {
  const expiresAt = getPaymentExpiresAt();
  if (!expiresAt) return false;

  const active = new Date(expiresAt).getTime() > Date.now();
  if (!active) clearPaymentVerified();
  return active;
}

export function markPaymentVerified(): string {
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + PREMIUM_DAYS);
  const expiresAtIso = expiresAt.toISOString();

  localStorage.setItem(PAYMENT_VERIFIED_KEY, "true");
  localStorage.setItem(PAYMENT_EXPIRES_AT_KEY, expiresAtIso);
  return expiresAtIso;
}

export function formatPremiumExpiry(expiresAt?: string | null): string {
  if (!expiresAt) return "";
  return new Date(expiresAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

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
      throw new Error((err as { error?: string }).error || `Error ${response.status}`);
    }

    const data = await response.json() as { text?: string };
    return data.text ?? "";
  } catch (e) {
    if (e instanceof TypeError && e.message === "Failed to fetch") {
      throw new Error("AI API not reachable. Deploy to Vercel and set ANTHROPIC_API_KEY in environment variables.");
    }
    throw e;
  }
}

export function getSystemPrompt(
  mode: "grammar" | "translation" | "conversation",
  learningLanguage: string
): string {
  const langName: Record<string, string> = {
    en: "English",
    nl: "Dutch",
    fr: "French",
    de: "German",
    es: "Spanish",
  };
  const lang = langName[learningLanguage] || "English";

  switch (mode) {
    case "grammar":
      return `You are a friendly, patient ${lang} teacher. Explain grammar rules clearly with examples. Use simple language, break down concepts step by step, and always give example sentences. Keep answers concise under 500 tokens. Be encouraging.`;
    case "translation":
      return `You are a helpful ${lang} translator. Translate the user's message into ${lang}, and briefly explain key vocabulary or grammar points. Keep it friendly and concise.`;
    case "conversation":
      return `You are a friendly ${lang} conversation partner. Chat naturally in ${lang}, gently correct mistakes, and keep the conversation flowing. Use simple ${lang} suitable for a learner. Be encouraging.`;
    default:
      return "You are a helpful language tutor.";
  }
}