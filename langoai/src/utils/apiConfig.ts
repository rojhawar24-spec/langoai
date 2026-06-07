//
// src/utils/apiConfig.ts
//

const ACCESS_TOKEN_KEY = "langlearn_access_token";
const EXPIRES_AT_KEY = "langlearn_payment_expires_at";

export const PREMIUM_PRICE_EUR = "4.00";
export const PREMIUM_DAYS = 30;

export function saveAccessToken(token: string, expiresAt: string): void {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
  localStorage.setItem(EXPIRES_AT_KEY, expiresAt);
}

export function getAccessToken(): string | null {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getPaymentExpiresAt(): string | null {
  return localStorage.getItem(EXPIRES_AT_KEY);
}

export function clearAccessToken(): void {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(EXPIRES_AT_KEY);
}

// Alias so PremiumPage and any other file still compiles
export const clearPaymentVerified = clearAccessToken;

export function isPaymentVerified(): boolean {
  const token = getAccessToken();
  const expiresAt = getPaymentExpiresAt();
  if (!token || !expiresAt) return false;
  const active = new Date(expiresAt).getTime() > Date.now();
  if (!active) clearAccessToken();
  return active;
}

export function isPremiumActive(
  user?: { premium?: boolean; premiumExpiresAt?: string | null } | null
): boolean {
  const expiresAt = user?.premiumExpiresAt ?? getPaymentExpiresAt();
  if (!expiresAt) return false;
  return new Date(expiresAt).getTime() > Date.now();
}

// Kept so nothing breaks if referenced elsewhere
export function markPaymentVerified(): string {
  return getPaymentExpiresAt() ?? "";
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
  const accessToken = getAccessToken();

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages, systemPrompt, maxTokens, accessToken }),
    });

    if (response.status === 401) {
      clearAccessToken();
      throw new Error("Payment required. Please pay to use the AI.");
    }

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error((err as { error?: string }).error || `Error ${response.status}`);
    }

    const data = await response.json() as { text?: string };
    return data.text ?? "";
  } catch (e) {
    if (e instanceof TypeError && e.message === "Failed to fetch") {
      throw new Error("AI API not reachable. Deploy to Vercel and set ANTHROPIC_API_KEY.");
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