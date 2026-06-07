import { useState, useRef, useEffect, type FormEvent } from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  type AIMode,
  type ChatMessage,
  appendChatMessage,
  clearChatHistory,
  filterByMode,
} from "@/utils/chatStorage";
import {
  callClaude,
  formatPremiumExpiry,
  getSystemPrompt,
  isPaymentVerified,
  isPremiumActive,
  PREMIUM_PRICE_EUR,
} from "@/utils/apiConfig";
import PayPalCheckout from "@/components/PayPalCheckout";

interface AIChatProps {
  open: boolean;
  onClose: () => void;
}

const MODES: { key: AIMode; label: string; icon: string; desc: string }[] = [
  { key: "grammar", label: "Grammar Help", icon: "BookOpen", desc: "Ask about any grammar rule" },
  { key: "translation", label: "Translation", icon: "Languages", desc: "Translate phrases and sentences" },
  { key: "conversation", label: "Conversation", icon: "MessageCircle", desc: "Practice speaking naturally" },
];

export default function AIChat({ open, onClose }: AIChatProps) {
  const { user, updateProfile } = useAuth();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false);
  const [paypalError, setPaypalError] = useState("");
  const [expiresAt, setExpiresAt] = useState<string | null>(null);
  const [mode, setMode] = useState<AIMode>("grammar");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [apiError, setApiError] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      const verified = isPremiumActive(user) || isPaymentVerified();
      const activeExpiresAt = user?.premiumExpiresAt ?? localStorage.getItem("langlearn_payment_expires_at");

      setIsUnlocked(verified);
      setExpiresAt(verified ? activeExpiresAt : null);
      setShowPayPal(false);
      setPaypalError("");

      if (verified) {
        setMessages(filterByMode(mode));
        setApiError("");
        setTimeout(() => inputRef.current?.focus(), 200);
      } else {
        setMessages([]);
      }
    }
  }, [open, mode, user?.premiumExpiresAt]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || !isUnlocked) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text: trimmed,
      mode,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    appendChatMessage(userMsg);
    setInput("");
    setIsTyping(true);
    setApiError("");

    try {
      const systemPrompt = getSystemPrompt(mode, user?.currentLanguage ?? "en");
      const conversationHistory = [...messages, userMsg]
        .filter((m) => m.role === "user" || m.role === "assistant")
        .map((m) => ({ role: m.role as "user" | "assistant", content: m.text }));

      const recentHistory = conversationHistory.slice(-10);
      const responseText = await callClaude(recentHistory, systemPrompt, 500);

      const aiMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        text: responseText,
        mode,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, aiMsg]);
      appendChatMessage(aiMsg);
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : "AI request failed";
      setApiError(errMsg);
    } finally {
      setIsTyping(false);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  function handleClear() {
    clearChatHistory();
    setMessages([]);
    setApiError("");
  }

  function handlePaymentSuccess(paymentExpiresAt: string) {
    updateProfile({ premium: true, premiumExpiresAt: paymentExpiresAt });
    setExpiresAt(paymentExpiresAt);
    setIsUnlocked(true);
    setShowPayPal(false);
    setPaypalError("");
    setMessages(filterByMode(mode));
    setApiError("");
    setTimeout(() => inputRef.current?.focus(), 200);
  }

  function modeIcon(icon: string) {
    if (icon === "BookOpen") {
      return (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253" />
        </svg>
      );
    }

    if (icon === "Languages") {
      return (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10m-2-4h-6" />
        </svg>
      );
    }

    return (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    );
  }

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-white shadow-2xl dark:bg-slate-950 lg:inset-y-0 lg:left-auto lg:right-0 lg:max-w-lg lg:rounded-l-3xl">
        <div className="border-b border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${isUnlocked ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300"}`}>
                {isUnlocked ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M12 3l7 4v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V7l7-4z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2h-1V8a5 5 0 00-10 0v3H6a2 2 0 00-2 2v6a2 2 0 002 2zm3-10V8a3 3 0 016 0v3" />
                  </svg>
                )}
              </div>

              <div className="min-w-0">
                <h2 className="truncate text-sm font-semibold text-slate-950 dark:text-white">
                  {isUnlocked ? "AI Tutor active" : "Unlock AI Tutor"}
                </h2>
                <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                  {isUnlocked
                    ? `Access until ${formatPremiumExpiry(expiresAt)}`
                    : `EUR ${PREMIUM_PRICE_EUR} for 1 month`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {isUnlocked && (
                <button onClick={handleClear} className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300" title="Clear chat">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}

              <button onClick={onClose} className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300" title="Close">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {!isUnlocked && (
          <div className="flex flex-1 flex-col overflow-y-auto bg-slate-50 dark:bg-slate-950">
            <div className="px-5 py-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
                  Monthly AI access
                </p>

                <div className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white">
                      EUR {PREMIUM_PRICE_EUR}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Opens AI Tutor for 30 days.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-indigo-50 px-3 py-2 text-center dark:bg-indigo-900/30">
                    <p className="text-lg font-bold text-indigo-700 dark:text-indigo-200">30</p>
                    <p className="text-[11px] font-medium text-indigo-500 dark:text-indigo-300">days</p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
                  {["Grammar help", "Translations", "Conversation", "Claude AI"].map((item) => (
                    <div key={item} className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-3 text-sm text-blue-900 dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-100">
                  Payment goes to your PayPal.me wallet:
                  <span className="mt-1 block font-semibold">paypal.me/RojHawar</span>
                </div>

                <div className="mt-5">
                  {!showPayPal ? (
                    <button
                      onClick={() => { setShowPayPal(true); setPaypalError(""); }}
                      className="w-full rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800 active:scale-[0.98] dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                    >
                      Pay EUR {PREMIUM_PRICE_EUR} with PayPal.me
                    </button>
                  ) : (
                    <div>
                      <PayPalCheckout
                        onSuccess={handlePaymentSuccess}
                        onError={(msg) => setPaypalError(msg)}
                        amount={PREMIUM_PRICE_EUR}
                      />
                      {paypalError && <p className="mt-3 text-xs text-red-500">{paypalError}</p>}
                      <button onClick={() => setShowPayPal(false)} className="mt-3 w-full text-xs font-medium text-slate-400 hover:text-slate-500">
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <p className="mt-4 px-2 text-center text-xs text-slate-400">
                After one month, AI access closes until the next EUR {PREMIUM_PRICE_EUR} payment.
              </p>
            </div>
          </div>
        )}

        {isUnlocked && (
          <>
            <div className="flex gap-1 border-b border-slate-200 bg-white px-2 py-2 dark:border-slate-800 dark:bg-slate-950">
              {MODES.map((m) => (
                <button
                  key={m.key}
                  onClick={() => setMode(m.key)}
                  className={`flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-xl px-2 py-2 text-xs font-medium transition ${
                    mode === m.key
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                  }`}
                >
                  {modeIcon(m.icon)}
                  <span className="truncate">{m.label}</span>
                </button>
              ))}
            </div>

            {apiError && (
              <div className="border-b border-red-200 bg-red-50 px-5 py-2 dark:border-red-800 dark:bg-red-900/20">
                <p className="text-xs text-red-600 dark:text-red-400">{apiError}</p>
              </div>
            )}

            <div className="border-b border-slate-100 bg-slate-50 px-5 py-2 dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {MODES.find((m) => m.key === mode)?.desc} - powered by Claude
              </p>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto bg-white px-5 py-4 dark:bg-slate-950">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300">
                    {modeIcon(MODES.find((m) => m.key === mode)?.icon ?? "MessageCircle")}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    AI Tutor ready
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Ask anything about grammar, translations, or conversation.
                  </p>

                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {["Explain Dutch word order", "Translate this sentence", "Practice conversation", "Fix my grammar"].map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-600 transition hover:border-indigo-300 hover:bg-indigo-50 dark:border-slate-700 dark:text-slate-400 dark:hover:border-indigo-500 dark:hover:bg-indigo-900/20"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                      msg.role === "user"
                        ? "rounded-br-md bg-indigo-600 text-white"
                        : "rounded-bl-md bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    <p className={`mt-1 text-xs ${msg.role === "user" ? "text-indigo-200" : "text-slate-400 dark:text-slate-500"}`}>
                      {new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-slate-100 px-4 py-3 dark:bg-slate-800">
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:0.15s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:0.3s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="border-t border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    mode === "grammar"
                      ? "Ask a grammar question..."
                      : mode === "translation"
                        ? "Type a phrase to translate..."
                        : "Start a conversation..."
                  }
                  className="min-w-0 flex-1 rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-indigo-500 dark:focus:ring-indigo-800"
                  disabled={isTyping}
                />

                <button
                  type="submit"
                  disabled={isTyping || !input.trim()}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-700 disabled:opacity-40"
                  title="Send"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>

              <p className="mt-2 text-center text-xs text-slate-400">
                AI access active until {formatPremiumExpiry(expiresAt)}
              </p>
            </form>
          </>
        )}
      </div>
    </>
  );
}