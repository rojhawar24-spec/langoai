import { useState, useRef, useEffect, type FormEvent } from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  type AIMode,
  type ChatMessage,
  appendChatMessage,
  clearChatHistory,
  filterByMode,
} from "@/utils/chatStorage";
import { callClaude, getSystemPrompt, isPaymentVerified } from "@/utils/apiConfig";
import PayPalCheckout from "@/components/PayPalCheckout";

interface AIChatProps {
  open: boolean;
  onClose: () => void;
}

const MODES: { key: AIMode; label: string; icon: string; desc: string }[] = [
  { key: "grammar", label: "Grammar Help", icon: "📖", desc: "Ask about any grammar rule" },
  { key: "translation", label: "Translation", icon: "🌐", desc: "Translate phrases & sentences" },
  { key: "conversation", label: "Conversation", icon: "💬", desc: "Practice speaking naturally" },
];

export default function AIChat({ open, onClose }: AIChatProps) {
  const { user } = useAuth();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false);
  const [paypalError, setPaypalError] = useState("");
  const [mode, setMode] = useState<AIMode>("grammar");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [apiError, setApiError] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Check unlock status on open — reset all state
  useEffect(() => {
    if (open) {
      const verified = user?.premium === true || isPaymentVerified();
      setIsUnlocked(verified);
      setShowPayPal(false);
      setPaypalError("");
      if (verified) {
        const filtered = filterByMode(mode);
        setMessages(filtered);
        setApiError("");
        setTimeout(() => inputRef.current?.focus(), 200);
      }
    }
  }, [open, mode, user?.premium]);

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

  function handlePaymentSuccess() {
    setIsUnlocked(true);
    setShowPayPal(false);
    setPaypalError("");
  }

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="fixed inset-0 z-50 flex flex-col bg-white shadow-2xl overflow-hidden dark:bg-slate-900 lg:inset-y-0 lg:left-auto lg:right-0 lg:max-w-lg lg:rounded-l-3xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl text-xl ${isUnlocked ? "bg-amber-100 dark:bg-amber-900/40" : "bg-slate-100 dark:bg-slate-700"}`}>
              {isUnlocked ? "🧠" : "🔒"}
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                {isUnlocked ? "AI Tutor (Claude)" : "AI Tutor"}
              </h2>
              <p className="text-xs text-slate-400">
                {isUnlocked ? "Premium — unlimited" : "Payment required"}
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
            <button onClick={onClose} className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* ========== PAYWALL (not unlocked) ========== */}
        {!isUnlocked && (
          <div className="flex flex-1 flex-col overflow-y-auto">
            <div className="flex flex-col items-center justify-center px-4 py-6 text-center">
              <span className="text-5xl">🔒</span>
              <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                Unlock AI Tutor
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                Get unlimited AI-powered grammar help, translations, and conversation practice.
              </p>

              <ul className="mt-4 space-y-1.5 text-left text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2"><span className="text-amber-500">📖</span> Grammar explanations</li>
                <li className="flex items-center gap-2"><span className="text-amber-500">🌐</span> Translate anything</li>
                <li className="flex items-center gap-2"><span className="text-amber-500">💬</span> Conversation practice</li>
                <li className="flex items-center gap-2"><span className="text-amber-500">🧠</span> Powered by Claude AI</li>
              </ul>

              <div className="mt-6 w-full max-w-xs">
                {!showPayPal ? (
                  <button
                    onClick={() => { setShowPayPal(true); setPaypalError(""); }}
                    className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-amber-200 transition hover:from-amber-500 hover:to-orange-600 active:scale-[0.98] dark:shadow-amber-900/40"
                  >
                    Unlock for €3 via PayPal
                  </button>
                ) : (
                  <div>
                    <PayPalCheckout
                      onSuccess={handlePaymentSuccess}
                      onError={(msg) => setPaypalError(msg)}
                      amount="3.00"
                    />
                    {paypalError && <p className="mt-3 text-xs text-red-500">{paypalError}</p>}
                    <button onClick={() => setShowPayPal(false)} className="mt-2 w-full text-xs text-slate-400 hover:text-slate-500">Cancel</button>
                  </div>
                )}
              </div>

              <p className="mt-4 pb-4 text-xs text-slate-400">🔒 Secure PayPal • API key protected</p>
            </div>
          </div>
        )}

        {/* ========== UNLOCKED CHAT ========== */}
        {isUnlocked && (
          <>
            {/* Mode tabs */}
            <div className="flex gap-1 border-b border-slate-200 px-2 py-2 dark:border-slate-700">
              {MODES.map((m) => (
                <button key={m.key} onClick={() => setMode(m.key)}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                    mode === m.key ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300" : "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                  }`}>
                  <span>{m.icon}</span><span className="hidden sm:inline">{m.label}</span>
                </button>
              ))}
            </div>

            {/* API error banner */}
            {apiError && (
              <div className="border-b border-red-200 bg-red-50 px-5 py-2 dark:border-red-800 dark:bg-red-900/20">
                <p className="text-xs text-red-600 dark:text-red-400">⚠️ {apiError}</p>
              </div>
            )}

            {/* Active mode info */}
            <div className="border-b border-slate-100 bg-slate-50 px-5 py-2 dark:border-slate-700 dark:bg-slate-800/50">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {MODES.find((m) => m.key === mode)?.icon} {MODES.find((m) => m.key === mode)?.desc}
                {" — powered by Claude"}
              </p>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <span className="text-5xl">🧠</span>
                  <p className="mt-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                    AI Tutor Ready
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Ask anything — grammar, translations, or start a conversation!
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {["Explain passé composé", "Ser vs Estar?", "How to say hello in Spanish?", "Let's practice!"].map((q) => (
                      <button key={q} onClick={() => sendMessage(q)}
                        className="rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-600 transition hover:bg-indigo-50 hover:border-indigo-300 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-indigo-900/20 dark:hover:border-indigo-500">
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                    msg.role === "user"
                      ? "bg-indigo-600 text-white rounded-br-md"
                      : "bg-slate-100 text-slate-800 rounded-bl-md dark:bg-slate-800 dark:text-slate-200"
                  }`}>
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

            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t border-slate-200 p-4 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    mode === "grammar" ? "Ask a grammar question..." : mode === "translation" ? "Type a phrase to translate..." : "Start a conversation..."
                  }
                  className="flex-1 rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:focus:border-indigo-500 dark:focus:ring-indigo-800"
                  disabled={isTyping}
                />
                <button type="submit" disabled={isTyping || !input.trim()}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-700 disabled:opacity-40">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <p className="mt-2 text-center text-xs text-amber-500">
                🧠 Premium — Claude AI • API key secured
              </p>
            </form>
          </>
        )}
      </div>
    </>
  );
}
