// src/utils/apiConfig.ts

export function isPremiumActive(
  user?: { premium?: boolean; premiumExpiresAt?: string | null } | null
): boolean {
  if (!user?.premium || !user.premiumExpiresAt) return false;
  return new Date(user.premiumExpiresAt).getTime() > Date.now();
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
  void systemPrompt;

  try {
    const { supabase } = await import("@/lib/supabase");
    const { data: { session } } = await supabase.auth.getSession();
    const accessToken = session?.access_token ?? null;

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      },
      body: JSON.stringify({ messages, maxTokens }),
    });

    if (response.status === 401) {
      throw new Error("Please log in to use the AI Tutor.");
    }

    if (response.status === 403) {
      throw new Error("Premium access required. Please activate Premium access on your account.");
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

  const modeInstruction =
    mode === "grammar"
      ? `Focus on ${lang} grammar: explain rules clearly, give examples, and correct errors.`
      : mode === "translation"
        ? `Focus on accurate translation involving ${lang}, and explain important wording choices.`
        : `Focus on natural conversation practice in ${lang}, correcting mistakes gently.`;

  return [
    "You are the Lango AI language tutor.",
    "Only help with language learning.",
    modeInstruction,
  ].join(" ");
}
