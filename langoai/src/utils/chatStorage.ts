export type AIMode = "grammar" | "translation" | "conversation";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  mode: AIMode;
  timestamp: string;
}

const CHAT_HISTORY_KEY = "langlearn_chat_history";

// ── Load / Save full history ──

export function loadChatHistory(): ChatMessage[] {
  try {
    const raw = localStorage.getItem(CHAT_HISTORY_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveChatHistory(history: ChatMessage[]): void {
  // Keep only last 200 messages
  const trimmed = history.slice(-200);
  localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(trimmed));
}

export function clearChatHistory(): void {
  localStorage.removeItem(CHAT_HISTORY_KEY);
}

// ── Append ──

export function appendChatMessage(msg: ChatMessage): ChatMessage[] {
  const history = loadChatHistory();
  history.push(msg);
  saveChatHistory(history);
  return history;
}

// ── Filter by mode ──

export function filterByMode(mode: AIMode): ChatMessage[] {
  return loadChatHistory().filter((m) => m.mode === mode);
}

// ── Precomputed AI responses (offline placeholder) ──

const GRAMMAR_RESPONSES: Record<string, string> = {
  default:
    "That's a great grammar question! When the AI tutor is connected, I'll give you detailed explanations with examples, tables, and tips. For now, here's a quick tip: practice with simple sentences first, then gradually increase complexity.",
};

const TRANSLATION_RESPONSES: Record<string, string> = {
  default:
    "I'd love to help with translations! When connected to an AI provider, I'll translate between any supported language pair instantly. Until then, try the vocabulary exercises on your dashboard — they're great for building your word bank!",
};

const CONVERSATION_RESPONSES: Record<string, string> = {
  default:
    "¡Hola! Bonjour! Hallo! I'm excited to practice conversation with you. Once the AI tutor is connected, I'll chat with you in your target language, gently correct mistakes, and help you gain confidence speaking. For now, keep up your streak and complete your daily exercises!",
};

export function getAIResponse(
  userMessage: string,
  mode: AIMode
): string {
  const responses =
    mode === "grammar"
      ? GRAMMAR_RESPONSES
      : mode === "translation"
      ? TRANSLATION_RESPONSES
      : CONVERSATION_RESPONSES;

  // Simple keyword matching for demo
  const lower = userMessage.toLowerCase();

  if (mode === "grammar") {
    if (lower.includes("passé composé") || lower.includes("past tense")) {
      return "The passé composé is used for completed actions in the past. It's formed with 'avoir' or 'être' + past participle. Example: 'J'ai mangé' (I ate/I have eaten). The imparfait is used for ongoing or habitual past actions. Example: 'Je mangeais' (I was eating/I used to eat). When the AI is connected, I'll give more detailed explanations!";
    }
    if (lower.includes("ser") || lower.includes("estar")) {
      return "Great question! 'Ser' is used for permanent characteristics (Soy alto - I am tall), while 'Estar' is for temporary states (Estoy cansado - I am tired). A helpful mnemonic: 'How you feel and where you are, always use the verb ESTAR!'";
    }
    if (lower.includes("der") || lower.includes("die") || lower.includes("das")) {
      return "German articles can be tricky! Der (masculine), Die (feminine), Das (neuter). Some tips: words ending in -ung, -heit, -keit are usually Die; words ending in -chen, -lein are Das; days/months/seasons are Der. More detailed help coming when the AI is connected!";
    }
  }

  if (mode === "translation") {
    if (lower.includes("hello") || lower.includes("hola") || lower.includes("bonjour")) {
      return "'Hello' in different languages: 🇪🇸 Spanish: Hola, 🇫🇷 French: Bonjour, 🇩🇪 German: Hallo, 🇳🇱 Dutch: Hallo/Hoi. The full translation AI will handle complete sentences and paragraphs when connected!";
    }
    if (lower.includes("thank you") || lower.includes("gracias") || lower.includes("merci")) {
      return "'Thank you' across languages: 🇪🇸 Gracias, 🇫🇷 Merci, 🇩🇪 Danke, 🇳🇱 Dank je wel. The AI translator will be able to handle complex sentences with proper grammar when connected!";
    }
  }

  if (mode === "conversation") {
    if (lower.includes("hello") || lower.includes("hi") || lower.includes("hola")) {
      return "Hello! 👋 I see you're ready to practice conversation. When the AI tutor is connected, we can have full conversations in your target language. I'll gently correct your mistakes and help you improve naturally. For now, try the quick exercises for instant practice!";
    }
    if (lower.includes("how are you") || lower.includes("cómo estás")) {
      return "¡Estoy muy bien, gracias! (I'm very well, thank you!) — See, we're already practicing! When the full AI is connected, I'll respond naturally in your target language and help you with pronunciation tips too.";
    }
  }

  return responses.default;
}
