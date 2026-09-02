import { useEffect, useMemo, useState, useCallback, useRef, type ChangeEvent, type KeyboardEvent, type MouseEvent, type FocusEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslate } from "@/i18n/I18nContext";
import type { TranslationKey } from "@/i18n/translations";
import { createXPAwarder } from "@/utils/xp";
import { isPremiumActive } from "@/utils/apiConfig";
import { computeStreak, getYesterdayLocal, markDateActive } from "@/utils/streak";

const XP_PER_LEVEL = 20;
const STORAGE = "langlearn_arena_v3";

// ─── TYPES ────────────────────────────────────────────────────────────────────
type QType =
  | "translation"
  | "multiple-choice"
  | "fill-blank"
  | "composition"
  | "listening"
  | "picture-sentence"
  | "qa"
  | "who-does-what"
  | "order-sentences"
  | "opposites"
  | "listen-answer"
  | "fill-dialogue"
  | "odd-one-out"
  | "complete-story"
  | "correct-the-error"
  | "true-false"
  | "listen-count"
  | "four-images-one-word"
  | "match-pairs"
  | "sort-category"
  | "speed-tap"
  | "word-chain"
  | "click-word"
  | "listen-type"
  | "word-tiles"
  | "emoji-story"
  | "scene-tap"
  | "multi-blank"
  | "listen-word-bank";

type SpeechSpeed = "slow" | "normal" | "fast";

interface DialogueLine {
  speaker: string;
  text: string;
  isBlank?: boolean;
}

interface Question {
  type: QType;
  question: string;
  answer: string;
  options: string[];
  audio?: string;
  imageUrl?: string;
  sentences?: string[];
  correctOrder?: number[];
  dialogue?: DialogueLine[];
  storyLines?: string[];
  errorWord?: string;
  images?: string[];
  labels?: string[];
  count?: number;
  fourImages?: string[];
  pairs?: [string, string][];
  categories?: string[];
  categoryAnswers?: Record<string, string[]>;
  timeLimit?: number;
  chainStart?: string;
  sentenceForClick?: string;
  blanks?: string[];
}

interface Level { level: number; questions: Question[]; }
interface SeasonMeta { id: number; title: string; levelCount: number; }
interface Season { id: number; title: string; levels: Level[]; }
interface LangIndex { name: string; seasons: SeasonMeta[]; }
interface Progress { completed: Record<string, number[]>; unlocked: Record<string, number[]>; hearts?: number; heartsUpdatedAt?: string; coins?: number; }
const MAX_HEARTS = 5;
const HEART_REGEN_MINUTES = 30;
// 🔒 FIX (audit #2): coins used to live here too, as a plain localStorage
// read/write anyone could edit directly — the same class of issue XP had
// (see xp.ts / supabase/schema.sql section 7). Coins are now server-
// authoritative (schema.sql section 8: earn_coins, buy_heart,
// buy_streak_repair, buy_streak_shield, open_mystery_box), read from
// useAuth()'s user.coins. `coins` stays in the Progress type/blob above
// only because old saved data in existing users' browsers may still have
// it — nothing reads or writes it anymore.
const COINS_PER_LEVEL = 2;
const HEART_COST = 10;
const STREAK_REPAIR_COST = 20;
const MYSTERY_BOX_COST = 12;

// ✅ NIEUW: hartjes-systeem. Verlies een hartje bij een fout antwoord, ze
// groeien vanzelf terug aan (1 per 30 min). Premium-gebruikers (server-
// geverifieerd, zie de RLS-fix) hebben onbeperkte hartjes.
function getHearts(): number {
  const p = load();
  const current = p.hearts ?? MAX_HEARTS;
  if (current >= MAX_HEARTS || !p.heartsUpdatedAt) return current;
  const elapsedMin = (Date.now() - new Date(p.heartsUpdatedAt).getTime()) / 60000;
  const regenerated = Math.floor(elapsedMin / HEART_REGEN_MINUTES);
  if (regenerated > 0) {
    const newHearts = Math.min(MAX_HEARTS, current + regenerated);
    save({ ...p, hearts: newHearts, heartsUpdatedAt: new Date().toISOString() });
    return newHearts;
  }
  return current;
}
function loseHeart(): number {
  const p = load();
  const next = Math.max(0, getHearts() - 1);
  save({ ...p, hearts: next, heartsUpdatedAt: new Date().toISOString() });
  return next;
}
function minutesUntilNextHeart(): number {
  const p = load();
  const current = p.hearts ?? MAX_HEARTS;
  if (current >= MAX_HEARTS || !p.heartsUpdatedAt) return 0;
  const elapsedMin = (Date.now() - new Date(p.heartsUpdatedAt).getTime()) / 60000;
  return Math.max(0, Math.ceil(HEART_REGEN_MINUTES - (elapsedMin % HEART_REGEN_MINUTES)));
}

function HeartsDisplay({ hearts, premium, dark, justLost }: { hearts: number; premium: boolean; dark: boolean; justLost: boolean }) {
  const { t } = useTranslate();
  if (premium) {
    return (
      <span className="flex items-center gap-1 text-sm font-bold" style={{ color: "#ec4899" }} aria-label={t("arena.unlimitedHearts")} title={t("arena.unlimitedHearts")}>
        <span aria-hidden="true">❤️</span><span aria-hidden="true">∞</span>
      </span>
    );
  }
  return (
    <span className="flex items-center gap-0.5" role="status" aria-live="polite" aria-label={`${hearts} ${t("arena.heartsLabel")}`}>
      {Array.from({ length: MAX_HEARTS }).map((_, idx) => (
        <span key={idx} aria-hidden="true"
          className={`text-lg transition-all duration-300 ${idx === hearts && justLost ? "animate-bounce" : ""} ${idx < hearts ? "" : "opacity-25 grayscale"}`}>
          ❤️
        </span>
      ))}
    </span>
  );
}

function CoinShop({ open, onClose, coins, setCoins, dark, themeColor }: {
  open: boolean; onClose: () => void; coins: number; setCoins: (n: number) => void; dark: boolean; themeColor: { from: string; to: string };
}) {
  const { t } = useTranslate();
  const { refreshUser } = useAuth();
  const [msg, setMsg] = useState<string | null>(null);
  const [boxOpening, setBoxOpening] = useState(false);
  const [busy, setBusy] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<Element | null>(null);

  // 🔒 FIX (audit #19 — same gap found and fixed in SettingsPage.tsx's
  // ConfirmModal): role="dialog"/aria-modal/aria-label were already
  // correct here, but nothing moved focus in, trapped it, or gave this
  // dialog an Escape-to-close like every other modal in the app has.
  // Effect runs unconditionally (Rules of Hooks — this component returns
  // null below when closed, so the effect itself has to be the thing
  // that checks `open`, not the other way around) and no-ops when closed.
  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement;
    dialogRef.current?.focus();

    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus();
      }
    };
  }, [open, onClose]);

  if (!open) return null;

  const heartsFull = getHearts() >= MAX_HEARTS;
  const { streak, todayActive, yesterdayActive } = computeStreak();
  const streakBroken = streak === 0 && !todayActive && !yesterdayActive;

  // 🔒 FIX (audit #2 follow-up): all three purchases below used to be a
  // synchronous spendCoins() (a pure localStorage decrement anyone could
  // skip by editing the value directly) immediately followed by applying
  // the reward locally too — nothing tied the two together, and nothing
  // verified the "spend" actually happened. Each is now ONE atomic RPC
  // that spends and applies the effect server-side in the same statement
  // (see supabase/schema.sql section 8) — there's no window between
  // "coins gone" and "reward granted" for a client to exploit.
  const buyHeart = async () => {
    if (heartsFull || coins < HEART_COST || busy) return;
    setBusy(true);
    const { data, error } = await supabase.rpc("buy_heart");
    setBusy(false);
    if (error || !data) {
      setMsg(t("arena.shopNotEnoughCoins"));
      return;
    }
    const p = load();
    save({ ...p, hearts: Math.min(MAX_HEARTS, (p.hearts ?? MAX_HEARTS) + 1), heartsUpdatedAt: new Date().toISOString() });
    setCoins(data.coins);
    refreshUser();
    soundEngine.playCorrect();
    setMsg(t("arena.shopHeartBought"));
  };

  const buyStreakRepair = async () => {
    if (!streakBroken || coins < STREAK_REPAIR_COST || busy) return;
    setBusy(true);
    const { data, error } = await supabase.rpc("buy_streak_repair");
    setBusy(false);
    if (error || !data) {
      setMsg(t("arena.shopNotEnoughCoins"));
      return;
    }
    markDateActive(getYesterdayLocal());
    setCoins(data.coins);
    refreshUser();
    soundEngine.playCorrect();
    setMsg(t("arena.shopStreakBought"));
  };

  const buyMysteryBox = async () => {
    if (boxOpening || coins < MYSTERY_BOX_COST || busy) return;
    setBusy(true);
    setMsg(null);
    setBoxOpening(true);
    // Korte "openen"-animatie blijft lokaal voor de klik-feedback, maar de
    // prijs zelf komt nu uit de server-roll (open_mystery_box) — niet meer
    // uit rollMysteryPrize() hier in de browser. Zie schema.sql: dezelfde
    // kansverdeling, nu server-side, zodat de uitkomst niet los te maken
    // is van de echte coin-spend die 'm betaalt.
    setTimeout(async () => {
      const { data, error } = await supabase.rpc("open_mystery_box");
      setBusy(false);
      setBoxOpening(false);
      if (error || !data) {
        setMsg(t("arena.shopNotEnoughCoins"));
        return;
      }
      if (data.prizeType === "coins") {
        setMsg(t("arena.shopMysteryCoins").replace("{amount}", String(data.prizeAmount)));
      } else {
        setMsg(t("arena.shopMysteryShield"));
      }
      setCoins(data.profile.coins);
      refreshUser();
      soundEngine.playCorrect();
    }, 600);
  };

  return (
    <div ref={dialogRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label={t("arena.shopTitle")}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-4 focus:outline-none"
      onClick={onClose}>
      <div onClick={(e: MouseEvent) => e.stopPropagation()}
        className={`w-full max-w-sm rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl ${dark ? "bg-slate-800" : "bg-white"}`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className={`text-lg font-black ${dark ? "text-white" : "text-slate-900"}`}>{t("arena.shopTitle")}</h2>
          <span className="flex items-center gap-1 text-sm font-bold" style={{ color: "#eab308" }}>🪙 {coins}</span>
        </div>
        {msg && <p className="mb-3 text-sm font-bold text-emerald-600 dark:text-emerald-400" role="status" aria-live="polite">{msg}</p>}
        <div className="space-y-3">
          <button type="button" onClick={buyHeart} disabled={heartsFull || coins < HEART_COST || busy}
            className={`w-full flex items-center justify-between rounded-2xl border-2 px-4 py-3 text-left transition ${heartsFull || coins < HEART_COST ? "opacity-40 cursor-not-allowed" : "hover:border-indigo-300"} ${dark ? "border-slate-600" : "border-slate-200"}`}>
            <span className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">❤️</span>
              <span>
                <span className={`block text-sm font-bold ${dark ? "text-white" : "text-slate-900"}`}>{t("arena.shopBuyHeart")}</span>
                <span className={`block text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>{heartsFull ? t("arena.shopHeartsFull") : ""}</span>
              </span>
            </span>
            <span className="text-sm font-black" style={{ color: themeColor.from }}>🪙 {HEART_COST}</span>
          </button>
          <button type="button" onClick={buyStreakRepair} disabled={!streakBroken || coins < STREAK_REPAIR_COST || busy}
            className={`w-full flex items-center justify-between rounded-2xl border-2 px-4 py-3 text-left transition ${!streakBroken || coins < STREAK_REPAIR_COST ? "opacity-40 cursor-not-allowed" : "hover:border-indigo-300"} ${dark ? "border-slate-600" : "border-slate-200"}`}>
            <span className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">🔥</span>
              <span>
                <span className={`block text-sm font-bold ${dark ? "text-white" : "text-slate-900"}`}>{t("arena.shopRepairStreak")}</span>
                <span className={`block text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>{!streakBroken ? t("arena.shopStreakNotBroken") : ""}</span>
              </span>
            </span>
            <span className="text-sm font-black" style={{ color: themeColor.from }}>🪙 {STREAK_REPAIR_COST}</span>
          </button>
          <button type="button" onClick={buyMysteryBox} disabled={boxOpening || coins < MYSTERY_BOX_COST}
            className={`w-full flex items-center justify-between rounded-2xl border-2 px-4 py-3 text-left transition ${boxOpening || coins < MYSTERY_BOX_COST ? "opacity-40 cursor-not-allowed" : "hover:border-indigo-300"} ${dark ? "border-slate-600" : "border-slate-200"}`}>
            <span className="flex items-center gap-3">
              <span className={`text-2xl ${boxOpening ? "animate-bounce" : ""}`} aria-hidden="true">🎲</span>
              <span>
                <span className={`block text-sm font-bold ${dark ? "text-white" : "text-slate-900"}`}>{t("arena.shopMysteryBox")}</span>
                <span className={`block text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>{t("arena.shopMysteryHint")}</span>
              </span>
            </span>
            <span className="text-sm font-black" style={{ color: themeColor.from }}>🪙 {MYSTERY_BOX_COST}</span>
          </button>
        </div>
        <button type="button" onClick={onClose}
          className={`mt-5 w-full rounded-2xl py-2.5 text-sm font-bold ${dark ? "text-slate-400 hover:bg-slate-700" : "text-slate-500 hover:bg-slate-100"}`}>
          {t("generic.cancel")}
        </button>
      </div>
    </div>
  );
}

const langFlags: Record<string, string> = { nl: "🇳🇱", en: "🇬🇧", fr: "🇫🇷", de: "🇩🇪", es: "🇪🇸" };
const langNames: Record<string, string> = { nl: "Dutch", en: "English", fr: "French", de: "German", es: "Spanish" };

const SEASON_THEMES = [
  { from: "#6366f1", to: "#8b5cf6", shadow: "rgba(99,102,241,0.35)", emoji: "🌱", name: "Beginner" },
  { from: "#f59e0b", to: "#f97316", shadow: "rgba(245,158,11,0.35)", emoji: "🔥", name: "Explorer" },
  { from: "#10b981", to: "#059669", shadow: "rgba(16,185,129,0.35)", emoji: "⚡", name: "Achiever" },
  { from: "#ec4899", to: "#f43f5e", shadow: "rgba(236,72,153,0.35)", emoji: "💫", name: "Pro" },
  { from: "#0ea5e9", to: "#6366f1", shadow: "rgba(14,165,233,0.35)", emoji: "🏆", name: "Master" },
];

// ⚠️ i18n FIX (audit): "label" is nu een VERTAALSLEUTEL (niet de tekst zelf).
// Voorheen stond hier de letterlijke Nederlandse tekst hardcoded, waardoor
// alle oefenvorm-labels in Arena/Legend Mode altijd Nederlands bleven, ook
// als de gebruiker Engels/Frans/Duits/Spaans had gekozen. Overal waar
// meta.label wordt weergegeven, moet het nu door t() gehaald worden
// (zie Quiz() en de "Question type legend" in ArenaPage()).
const TYPE_META: Record<QType, { label: string; icon: string; color: string }> = {
  "translation": { label: "arena.type.translation", icon: "🌍", color: "#6366f1" },
  "multiple-choice": { label: "arena.type.multipleChoice", icon: "🎯", color: "#f59e0b" },
  "fill-blank": { label: "arena.type.fillBlank", icon: "✏️", color: "#10b981" },
  "composition": { label: "arena.type.composition", icon: "✍️", color: "#ec4899" },
  "listening": { label: "arena.type.listening", icon: "👂", color: "#0ea5e9" },
  "picture-sentence": { label: "arena.type.pictureSentence", icon: "🖼️", color: "#8b5cf6" },
  "qa": { label: "arena.type.qa", icon: "💬", color: "#f97316" },
  "who-does-what": { label: "arena.type.whoDoesWhat", icon: "👤", color: "#059669" },
  "order-sentences": { label: "arena.type.orderSentences", icon: "🔢", color: "#f43f5e" },
  "opposites": { label: "arena.type.opposites", icon: "↔️", color: "#6366f1" },
  "listen-answer": { label: "arena.type.listenAnswer", icon: "🎧", color: "#0ea5e9" },
  "fill-dialogue": { label: "arena.type.fillDialogue", icon: "💬", color: "#ec4899" },
  "odd-one-out": { label: "arena.type.oddOneOut", icon: "🧠", color: "#f59e0b" },
  "complete-story": { label: "arena.type.completeStory", icon: "📝", color: "#10b981" },
  "correct-the-error": { label: "arena.type.correctError", icon: "🎭", color: "#f43f5e" },
  "true-false": { label: "arena.type.trueFalse", icon: "✔️", color: "#6366f1" },
  "listen-count": { label: "arena.type.listenCount", icon: "🔊", color: "#0ea5e9" },
  "four-images-one-word": { label: "arena.type.fourImagesOneWord", icon: "🖼️", color: "#8b5cf6" },
  "match-pairs": { label: "arena.type.matchPairs", icon: "🔗", color: "#f97316" },
  "sort-category": { label: "arena.type.sortCategory", icon: "📦", color: "#059669" },
  "speed-tap": { label: "arena.type.speedTap", icon: "🏃", color: "#f43f5e" },
  "word-chain": { label: "arena.type.wordChain", icon: "🎲", color: "#10b981" },
  "click-word": { label: "arena.type.clickWord", icon: "🎯", color: "#f59e0b" },
  "listen-type": { label: "arena.type.listenType", icon: "✍️", color: "#0ea5e9" },
  "word-tiles": { label: "arena.type.wordTiles", icon: "🧩", color: "#8b5cf6" },
  "emoji-story": { label: "arena.type.emojiStory", icon: "😄", color: "#f97316" },
  "scene-tap": { label: "arena.type.sceneTap", icon: "🏞️", color: "#059669" },
  "multi-blank": { label: "arena.type.multiBlank", icon: "📝", color: "#ec4899" },
  "listen-word-bank": { label: "arena.type.listenWordBank", icon: "🗂️", color: "#6366f1" },
};

// ─── SOUND ENGINE ─────────────────────────────────────────────────────────────
class SoundEngine {
  private ctx: AudioContext | null = null;
  private muted = false;
  private getCtx(): AudioContext {
    if (!this.ctx) this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    if (this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  }
  setMuted(m: boolean) { this.muted = m; }
  isMuted() { return this.muted; }
  playCorrect() {
    if (this.muted) return;
    const ctx = this.getCtx(); const now = ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      const osc = ctx.createOscillator(); const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = "sine"; osc.frequency.setValueAtTime(freq, now + i * 0.1);
      gain.gain.setValueAtTime(0, now + i * 0.1);
      gain.gain.linearRampToValueAtTime(0.25, now + i * 0.1 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.4);
      osc.start(now + i * 0.1); osc.stop(now + i * 0.1 + 0.4);
    });
  }
  playWrong() {
    if (this.muted) return;
    const ctx = this.getCtx(); const now = ctx.currentTime;
    const o1 = ctx.createOscillator(); const o2 = ctx.createOscillator(); const g = ctx.createGain();
    o1.connect(g); o2.connect(g); g.connect(ctx.destination);
    o1.type = "sawtooth"; o2.type = "square";
    o1.frequency.setValueAtTime(300, now); o1.frequency.linearRampToValueAtTime(150, now + 0.3);
    o2.frequency.setValueAtTime(290, now); o2.frequency.linearRampToValueAtTime(140, now + 0.3);
    g.gain.setValueAtTime(0.15, now); g.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    o1.start(now); o2.start(now); o1.stop(now + 0.4); o2.stop(now + 0.4);
  }
  playClick() {
    if (this.muted) return;
    const ctx = this.getCtx(); const now = ctx.currentTime;
    const osc = ctx.createOscillator(); const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = "sine"; osc.frequency.setValueAtTime(800, now); osc.frequency.exponentialRampToValueAtTime(400, now + 0.08);
    gain.gain.setValueAtTime(0.2, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    osc.start(now); osc.stop(now + 0.1);
  }
  playNext() {
    if (this.muted) return;
    const ctx = this.getCtx(); const now = ctx.currentTime;
    const osc = ctx.createOscillator(); const gain = ctx.createGain(); const filter = ctx.createBiquadFilter();
    osc.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
    osc.type = "sawtooth"; filter.type = "bandpass";
    filter.frequency.setValueAtTime(1000, now); filter.frequency.exponentialRampToValueAtTime(4000, now + 0.15);
    filter.Q.value = 2; osc.frequency.setValueAtTime(200, now); osc.frequency.exponentialRampToValueAtTime(800, now + 0.15);
    gain.gain.setValueAtTime(0.12, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    osc.start(now); osc.stop(now + 0.2);
  }
  playComplete() {
    if (this.muted) return;
    const ctx = this.getCtx(); const now = ctx.currentTime;
    [{ freq: 523.25, time: 0, dur: 0.15 }, { freq: 659.25, time: 0.15, dur: 0.15 },
     { freq: 783.99, time: 0.3, dur: 0.15 }, { freq: 1046.50, time: 0.45, dur: 0.3 },
     { freq: 783.99, time: 0.8, dur: 0.1 }, { freq: 1046.50, time: 0.95, dur: 0.5 }
    ].forEach(({ freq, time, dur }) => {
      const osc = ctx.createOscillator(); const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination); osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + time);
      gain.gain.setValueAtTime(0, now + time); gain.gain.linearRampToValueAtTime(0.3, now + time + 0.02);
      gain.gain.setValueAtTime(0.3, now + time + dur * 0.7); gain.gain.exponentialRampToValueAtTime(0.001, now + time + dur);
      osc.start(now + time); osc.stop(now + time + dur + 0.05);
    });
  }
  playUnlock() {
    if (this.muted) return;
    const ctx = this.getCtx(); const now = ctx.currentTime;
    [880, 1108.73, 1318.51, 1760].forEach((freq, i) => {
      const osc = ctx.createOscillator(); const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination); osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + i * 0.12);
      gain.gain.setValueAtTime(0, now + i * 0.12); gain.gain.linearRampToValueAtTime(0.2, now + i * 0.12 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.6);
      osc.start(now + i * 0.12); osc.stop(now + i * 0.12 + 0.6);
    });
  }
}
const soundEngine = new SoundEngine();

// Kleine gedeelde knop voor luister-oefeningen: speelt q.audio af als dat
// bestaat, anders valt hij terug op de spraaksynthese van speak() hierboven
// (die dezelfde langzaam/normaal/snel-instelling en taalkeuze respecteert
// als de rest van de luister-oefeningen).
function SpeakOrPlayButton({ audioSrc, text, lang, speed = "normal", dark, themeColor }: { audioSrc?: string; text: string; lang: string; speed?: SpeechSpeed; dark: boolean; themeColor: { from: string; to: string } }) {
  const { t } = useTranslate();
  const [playing, setPlaying] = useState(false);
  const handlePlay = () => {
    if (soundEngine.isMuted()) return;
    setPlaying(true);
    if (audioSrc) {
      const el = new Audio(audioSrc);
      el.onended = () => setPlaying(false);
      el.play().catch(() => setPlaying(false));
    } else {
      speak(text, speed, lang);
      setTimeout(() => setPlaying(false), Math.min(4000, text.length * 90));
    }
  };
  return (
    <button type="button" onClick={handlePlay} disabled={playing}
      className="flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold text-white shadow-lg transition active:scale-95 disabled:opacity-70"
      style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})` }}>
      <span aria-hidden="true">{playing ? "🔊" : "🎧"}</span>
      {playing ? t("arena.playing") : t("arena.playAudio")}
    </button>
  );
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
async function fetchJson<T>(url: string): Promise<T | null> {
  try { const r = await fetch(url); return r.ok ? (await r.json()) as T : null; } catch { return null; }
}
function load(): Progress {
  try { const r = localStorage.getItem(STORAGE); return r ? JSON.parse(r) : { completed: {}, unlocked: {} }; }
  catch { return { completed: {}, unlocked: {} }; }
}
function save(p: Progress) { localStorage.setItem(STORAGE, JSON.stringify(p)); }
function doneLvls(lang: string, sid: number) { return load().completed?.[`${lang}-${sid}`] ?? []; }
function unlockedSeasons(lang: string) { return load().unlocked?.[lang] ?? [1]; }
function complete(lang: string, sid: number, lvl: number) {
  const p = load(); const key = `${lang}-${sid}`;
  p.completed[key] ??= [];
  if (!p.completed[key].includes(lvl)) p.completed[key].push(lvl);
  p.unlocked[lang] ??= [1];
  if (p.completed[key].length >= 10 && !p.unlocked[lang].includes(sid + 1)) p.unlocked[lang].push(sid + 1);
  save(p);
}

// ─── SPEECH ───────────────────────────────────────────────────────────────────
const SPEED_MAP: Record<SpeechSpeed, number> = { slow: 0.65, normal: 0.9, fast: 1.15 };
const BCP47: Record<string, string> = { nl: "nl-NL", en: "en-US", fr: "fr-FR", de: "de-DE", es: "es-ES" };
// ✅ FIX (audit): deze functie zocht altijd een Nederlandse stem, ongeacht
// welke taal er werd bestudeerd. Nu kiest hij de beste beschikbare stem voor
// de opgegeven taal (lang), met dezelfde Google/Natural/lokaal-voorkeur.
function speak(text: string, speed: SpeechSpeed = "normal", lang: string = "nl") {
  if (!('speechSynthesis' in window)) return;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) { window.speechSynthesis.onvoiceschanged = () => speak(text, speed, lang); return; }
  const bcp = BCP47[lang] ?? "en-US";
  const prefix = bcp.split("-")[0];
  const google = voices.find(v => v.lang.startsWith(prefix) && v.name.includes('Google'));
  const natural = voices.find(v => v.lang.startsWith(prefix) && v.name.includes('Natural'));
  const local = voices.find(v => v.lang.startsWith(prefix) && v.localService);
  const any = voices.find(v => v.lang.startsWith(prefix));
  const utter = new SpeechSynthesisUtterance(text);
  utter.voice = google || natural || local || any || voices[0];
  utter.lang = utter.voice?.lang || bcp;
  utter.rate = SPEED_MAP[speed]; utter.pitch = 1.0; utter.volume = 1;
  window.speechSynthesis.cancel(); window.speechSynthesis.speak(utter);
}

// ─── SHARED COMPONENT ─────────────────────────────────────────────────────────
function OptionButton({ label, onClick, state, themeColor, dark }: {
  label: string;
  onClick: () => void;
  state: "idle" | "selected" | "correct" | "wrong";
  themeColor: { from: string; to: string };
  dark: boolean;
}) {
  return (
    <button type="button" onClick={onClick}
      className={`w-full rounded-2xl border-2 px-5 py-4 text-left text-sm font-bold transition-all duration-200 ${
        state === "correct" ? "border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
        : state === "wrong"   ? "border-red-400 bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300"
        : state === "selected" ? "border-2 text-white scale-[1.01]"
        : dark ? "border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-700/50"
        : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
      }`}
      style={state === "selected" ? { borderColor: themeColor.from, background: `${themeColor.from}18`, color: themeColor.from } : {}}>
      {label}
    </button>
  );
}

// ─── QUESTION RENDERERS ───────────────────────────────────────────────────────

// 1. picture-sentence
function PictureSentenceQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const { t } = useTranslate();
  const [chosen, setChosen] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const handlePick = (opt: string) => {
    if (done) return;
    soundEngine.playClick();
    setChosen(opt); setDone(true);
    const correct = opt === q.answer;
    correct ? soundEngine.playCorrect() : soundEngine.playWrong();
    onAnswer(correct);
  };
  return (
    <div className="space-y-4">
      {q.imageUrl ? (
        <div className="rounded-2xl overflow-hidden border-2 border-slate-100 dark:border-slate-700 aspect-video bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
          <img src={q.imageUrl} alt="Vraag plaatje" className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className={`rounded-2xl border-2 border-dashed ${dark ? "border-slate-700 bg-slate-800" : "border-slate-200 bg-slate-50"} p-8 text-center`}>
          <span className="text-5xl">🖼️</span>
          <p className={`mt-2 text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>{t("arena.imagePlaceholder")}</p>
        </div>
      )}
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>{t("arena.whichSentenceDescribes")}</p>
      <div className="space-y-2">
        {q.options.map(opt => (
          <OptionButton key={opt} label={opt} onClick={() => handlePick(opt)} dark={dark} themeColor={themeColor}
            state={!done ? (chosen === opt ? "selected" : "idle") : opt === q.answer ? "correct" : chosen === opt ? "wrong" : "idle"} />
        ))}
      </div>
    </div>
  );
}

// 2. qa
function QAQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const { t } = useTranslate();
  const [chosen, setChosen] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const handlePick = (opt: string) => {
    if (done) return;
    soundEngine.playClick();
    setChosen(opt); setDone(true);
    const correct = opt === q.answer;
    correct ? soundEngine.playCorrect() : soundEngine.playWrong();
    onAnswer(correct);
  };
  return (
    <div className="space-y-4">
      <div className={`rounded-2xl px-5 py-4 ${dark ? "bg-slate-700" : "bg-indigo-50"} border-l-4`} style={{ borderColor: themeColor.from }}>
        <p className={`text-base font-bold ${dark ? "text-white" : "text-slate-800"}`}>{q.question}</p>
      </div>
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>{t("arena.chooseCorrectAnswer")}</p>
      <div className="space-y-2">
        {q.options.map(opt => (
          <OptionButton key={opt} label={opt} onClick={() => handlePick(opt)} dark={dark} themeColor={themeColor}
            state={!done ? (chosen === opt ? "selected" : "idle") : opt === q.answer ? "correct" : chosen === opt ? "wrong" : "idle"} />
        ))}
      </div>
    </div>
  );
}

// 3. order-sentences
function shuffleArray(arr: number[]): number[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function OrderSentencesQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const { t } = useTranslate();
  const sentences = q.sentences ?? q.options;
  const correctOrder = q.correctOrder ?? sentences.map((_, i) => i);
  const [order, setOrder] = useState<number[]>(() => {
    let shuffled = shuffleArray(correctOrder);
    return shuffled;
  });
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    let shuffled = shuffleArray(correctOrder);
    setOrder(shuffled);
    setSubmitted(false);
    setCorrect(false);
  }, [q]);

  const moveUp = (idx: number) => {
    if (idx === 0 || submitted) return;
    soundEngine.playClick();
    const newOrder = [...order];
    [newOrder[idx - 1], newOrder[idx]] = [newOrder[idx], newOrder[idx - 1]];
    setOrder(newOrder);
  };
  const moveDown = (idx: number) => {
    if (idx === order.length - 1 || submitted) return;
    soundEngine.playClick();
    const newOrder = [...order];
    [newOrder[idx], newOrder[idx + 1]] = [newOrder[idx + 1], newOrder[idx]];
    setOrder(newOrder);
  };
  const handleSubmit = () => {
    const isCorrect = order.every((v, i) => v === correctOrder[i]);
    setCorrect(isCorrect);
    setSubmitted(true);
    isCorrect ? soundEngine.playCorrect() : soundEngine.playWrong();
  };
  const handleConfirm = () => {
    onAnswer(correct);
  };

  return (
    <div className="space-y-3">
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>{t("arena.dragToOrder")}</p>
      <div className="space-y-2">
        {order.map((sentIdx, posIdx) => (
          <div key={`${sentIdx}-${posIdx}`} className={`flex items-center gap-3 rounded-2xl border-2 px-4 py-3 transition-all ${
            submitted
              ? sentIdx === correctOrder[posIdx]
                ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-500/10"
                : "border-red-400 bg-red-50 dark:bg-red-500/10"
              : dark ? "border-slate-600 bg-slate-700" : "border-slate-200 bg-white"
          }`}>
            <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
              style={{ background: submitted
                ? sentIdx === correctOrder[posIdx] ? "#10b981" : "#f43f5e"
                : `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})` }}>
              {posIdx + 1}
            </span>
            <span className={`flex-1 text-sm font-semibold ${dark ? "text-white" : "text-slate-800"}`}>{sentences[sentIdx]}</span>
            {!submitted && (
              <div className="flex flex-col gap-1">
                <button type="button" onClick={() => moveUp(posIdx)} aria-label={t("arena.moveUp")} className={`text-xs px-2 py-1 rounded-lg font-bold transition ${dark ? "text-slate-400 hover:text-white hover:bg-slate-600" : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"}`}>▲</button>
                <button type="button" onClick={() => moveDown(posIdx)} aria-label={t("arena.moveDown")} className={`text-xs px-2 py-1 rounded-lg font-bold transition ${dark ? "text-slate-400 hover:text-white hover:bg-slate-600" : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"}`}>▼</button>
              </div>
            )}
          </div>
        ))}
      </div>
      {!submitted && (
        <button type="button" onClick={handleSubmit}
          className="w-full rounded-2xl py-3 text-sm font-black text-white transition-all active:scale-[0.98]"
          style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})` }}>
          {t("arena.checkOrder")}
        </button>
      )}
      {submitted && (
        <>
          <div className={`rounded-2xl px-4 py-3 text-sm font-bold flex items-start gap-2 ${
            correct ? "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300"
            : "bg-red-50 text-red-700 border border-red-200 dark:bg-red-500/10 dark:text-red-300"
          }`}>
            <span className="text-lg flex-shrink-0">{correct ? "✅" : "❌"}</span>
            <span>{correct ? t("arena.perfectOrder") : <span>{t("arena.correctOrder")} <strong>{correctOrder.map(i => sentences[i]).join(" → ")}</strong></span>}</span>
          </div>
          <button type="button" onClick={handleConfirm} className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 py-3 text-sm font-black text-white shadow-lg transition-all hover:from-emerald-600 hover:to-green-600 active:scale-[0.98]">{t("arena.next")}</button>
        </>
      )}
    </div>
  );
}

// 4. opposites
function OppositesQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const { t } = useTranslate();
  const [chosen, setChosen] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const handlePick = (opt: string) => {
    if (done) return;
    soundEngine.playClick();
    setChosen(opt); setDone(true);
    const correct = opt === q.answer;
    correct ? soundEngine.playCorrect() : soundEngine.playWrong();
    onAnswer(correct);
  };
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-4">
        <div className={`rounded-2xl px-8 py-5 text-center ${dark ? "bg-slate-700" : "bg-white border-2 border-slate-200 shadow-lg"}`}>
          <p className={`text-3xl font-black ${dark ? "text-white" : "text-slate-900"}`}>{q.question}</p>
        </div>
        <div className={`text-3xl font-black ${dark ? "text-slate-500" : "text-slate-400"}`}>↔️</div>
        <div className={`rounded-2xl px-8 py-5 border-2 border-dashed text-center ${dark ? "border-slate-600 bg-slate-800" : "border-slate-300 bg-slate-50"}`}>
          <p className={`text-3xl font-black ${dark ? "text-slate-500" : "text-slate-400"}`}>?</p>
        </div>
      </div>
      <p className={`text-sm font-semibold text-center ${dark ? "text-slate-400" : "text-slate-500"}`}>{t("arena.whatIsTheOpposite")}</p>
      <div className="grid grid-cols-3 gap-2">
        {q.options.map(opt => {
          const state = !done ? (chosen === opt ? "selected" : "idle") : opt === q.answer ? "correct" : chosen === opt ? "wrong" : "idle";
          return (
            <button type="button" key={opt} onClick={() => handlePick(opt)}
              className={`rounded-2xl border-2 px-3 py-4 text-center text-base font-black transition-all duration-200 ${
                state === "correct" ? "border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
                : state === "wrong"   ? "border-red-400 bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300"
                : state === "selected" ? "text-white scale-[1.02]"
                : dark ? "border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-700/50"
                : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              }`}
              style={state === "selected" ? { borderColor: themeColor.from, background: `${themeColor.from}18`, color: themeColor.from } : {}}>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// 5. fill-dialogue
function FillDialogueQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const { t } = useTranslate();
  const [chosen, setChosen] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const dialogue = q.dialogue ?? [];
  const handlePick = (opt: string) => {
    if (done) return;
    soundEngine.playClick();
    setChosen(opt); setDone(true);
    const correct = opt === q.answer;
    correct ? soundEngine.playCorrect() : soundEngine.playWrong();
    onAnswer(correct);
  };
  return (
    <div className="space-y-4">
      <div className={`rounded-2xl p-4 space-y-3 ${dark ? "bg-slate-700/50" : "bg-slate-50 border border-slate-200"}`}>
        {dialogue.map((line, idx) => (
          <div key={idx} className={`flex items-start gap-3 ${line.speaker === "B" ? "flex-row-reverse" : ""}`}>
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white`}
              style={{ background: line.speaker === "A" ? themeColor.from : "#10b981" }}>
              {line.speaker}
            </div>
            <div className={`rounded-2xl px-4 py-2.5 max-w-[80%] ${
              line.speaker === "A"
                ? dark ? "bg-slate-600 text-white" : "bg-white border border-slate-200 text-slate-800"
                : dark ? "bg-slate-800 text-white" : "bg-white border border-slate-200 text-slate-800"
            }`}>
              {line.isBlank ? (
                <span className={`font-bold ${chosen ? (chosen === q.answer ? "text-emerald-500" : "text-red-500") : ""}`}
                  style={!chosen ? { color: themeColor.from } : {}}>
                  {chosen ? `"${chosen}"` : `"___"`}
                </span>
              ) : (
                <span className="text-sm font-medium">{line.text}</span>
              )}
            </div>
          </div>
        ))}
      </div>
      {!done && (
        <>
          <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>{t("arena.chooseCorrectAnswer")}</p>
          <div className="grid grid-cols-3 gap-2">
            {q.options.map(opt => (
              <button type="button" key={opt} onClick={() => handlePick(opt)}
                className={`rounded-2xl border-2 px-3 py-3 text-center text-sm font-black transition-all ${dark ? "border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-700" : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"}`}>
                {opt}
              </button>
            ))}
          </div>
        </>
      )}
      {done && (
        <div className={`rounded-2xl px-4 py-3 text-sm font-bold flex items-center gap-2 ${
          chosen === q.answer ? "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300" : "bg-red-50 text-red-700 border border-red-200 dark:bg-red-500/10 dark:text-red-300"
        }`}>
          {chosen === q.answer ? t("arena.perfectDialogue") : <>❌ {t("arena.correctAnswerWas")} <strong className="ml-1">{q.answer}</strong></>}
        </div>
      )}
    </div>
  );
}

// 6. odd-one-out
function OddOneOutQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const { t } = useTranslate();
  const [chosen, setChosen] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const handlePick = (opt: string) => {
    if (done) return;
    soundEngine.playClick();
    setChosen(opt); setDone(true);
    const correct = opt === q.answer;
    correct ? soundEngine.playCorrect() : soundEngine.playWrong();
    onAnswer(correct);
  };
  return (
    <div className="space-y-4">
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>{t("arena.oddPre")} <strong>{t("arena.oddEmphasis")}</strong> {t("arena.oddPost")}</p>
      <div className="grid grid-cols-2 gap-3">
        {q.options.map(opt => {
          const state = !done ? (chosen === opt ? "selected" : "idle") : opt === q.answer ? "correct" : chosen === opt ? "wrong" : "idle";
          return (
            <button type="button" key={opt} onClick={() => handlePick(opt)}
              className={`rounded-2xl border-2 px-4 py-5 text-center text-base font-black transition-all duration-200 ${
                state === "correct" ? "border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 scale-105"
                : state === "wrong"   ? "border-red-400 bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300"
                : state === "selected" ? "text-white scale-[1.02]"
                : dark ? "border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-700/50"
                : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              }`}
              style={state === "selected" ? { borderColor: themeColor.from, background: `${themeColor.from}18`, color: themeColor.from } : {}}>
              {opt}
              {done && opt === q.answer && <div className="text-lg mt-1">🦆</div>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// 7. complete-story
function CompleteStoryQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const { t } = useTranslate();
  const [chosen, setChosen] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const storyLines = q.storyLines ?? [q.question];
  const handlePick = (opt: string) => {
    if (done) return;
    soundEngine.playClick();
    setChosen(opt); setDone(true);
    const correct = opt === q.answer;
    correct ? soundEngine.playCorrect() : soundEngine.playWrong();
    onAnswer(correct);
  };
  return (
    <div className="space-y-4">
      <div className={`rounded-2xl p-5 space-y-2 ${dark ? "bg-slate-700/50" : "bg-amber-50 border border-amber-200"}`}>
        {storyLines.map((line, idx) => (
          <p key={idx} className={`text-base font-semibold ${dark ? "text-white" : "text-slate-800"}`}>{line}</p>
        ))}
        <p className={`text-base font-semibold italic ${dark ? "text-slate-400" : "text-amber-600"}`}>
          {chosen ? `"${chosen}"` : '"..."'}
        </p>
      </div>
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>{t("arena.howDoesStoryContinue")}</p>
      <div className="space-y-2">
        {q.options.map(opt => (
          <OptionButton key={opt} label={opt} onClick={() => handlePick(opt)} dark={dark} themeColor={themeColor}
            state={!done ? (chosen === opt ? "selected" : "idle") : opt === q.answer ? "correct" : chosen === opt ? "wrong" : "idle"} />
        ))}
      </div>
    </div>
  );
}

// 8. correct-the-error
function CorrectErrorQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const { t } = useTranslate();
  const [inp, setInp] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);
  const words = q.question.split(" ");
  const errorWord = q.errorWord ?? "";

  const handleSubmit = () => {
    if (!inp.trim()) return;
    const isCorrect = inp.trim().toLowerCase() === q.answer.toLowerCase();
    setCorrect(isCorrect);
    setSubmitted(true);
    isCorrect ? soundEngine.playCorrect() : soundEngine.playWrong();
    onAnswer(isCorrect);
  };

  return (
    <div className="space-y-4">
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>🎭 {t("arena.fixTheError")}</p>
      <div className={`rounded-2xl p-5 flex flex-wrap gap-2 items-center ${dark ? "bg-slate-700/50" : "bg-red-50 border border-red-200"}`}>
        {words.map((word, idx) => {
          const isError = word.toLowerCase().includes(errorWord.toLowerCase()) && errorWord !== "";
          return (
            <span key={idx} className={`text-xl font-bold px-2 py-1 rounded-lg ${
              isError ? "bg-red-200 text-red-700 dark:bg-red-500/30 dark:text-red-300 underline decoration-wavy decoration-red-500" : dark ? "text-white" : "text-slate-800"
            }`}>{word}</span>
          );
        })}
      </div>
      <div className={`text-xs font-bold flex items-center gap-2 ${dark ? "text-slate-500" : "text-slate-400"}`}>
        <span className="text-red-400">✗ {t("arena.wrongWord")}</span>
        <span className={`px-2 py-0.5 rounded-lg text-red-600 font-black ${dark ? "bg-red-500/20" : "bg-red-100"}`}>{errorWord}</span>
        <span>→ {t("arena.typeCorrectWord")}</span>
      </div>
      {!submitted ? (
        <div className="flex gap-2">
          <input type="text" value={inp} onChange={(e: ChangeEvent<HTMLInputElement>) => setInp(e.target.value)}
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => { if (e.key === "Enter") handleSubmit(); }}
            placeholder={t("arena.correctWordPlaceholder")} autoFocus
            className={`flex-1 rounded-2xl border-2 px-4 py-3 text-base font-bold outline-none transition ${dark ? "bg-slate-700 text-white border-slate-600 placeholder:text-slate-500" : "bg-white text-slate-900 border-slate-200 placeholder:text-slate-400"}`}
          />
          <button type="button" onClick={handleSubmit} disabled={!inp.trim()}
            className="rounded-2xl px-5 py-3 text-sm font-black text-white transition disabled:opacity-30"
            style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})` }}>
            ✓
          </button>
        </div>
      ) : (
        <div className={`rounded-2xl px-4 py-3 text-sm font-bold flex items-center gap-2 ${
          correct ? "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300" : "bg-red-50 text-red-700 border border-red-200 dark:bg-red-500/10 dark:text-red-300"
        }`}>
          {correct ? t("arena.correctErrorSuccess").replace("{errorWord}", errorWord).replace("{answer}", q.answer) : <>❌ {t("arena.correctLabel")} <strong className="ml-1 text-base">{q.answer}</strong></>}
        </div>
      )}
    </div>
  );
}

// 9. true-false
function TrueFalseQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const [chosen, setChosen] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const handlePick = (opt: string) => {
    if (done) return;
    soundEngine.playClick();
    setChosen(opt); setDone(true);
    const correct = opt === q.answer;
    correct ? soundEngine.playCorrect() : soundEngine.playWrong();
    onAnswer(correct);
  };
  return (
    <div className="space-y-4">
      <p className={`text-xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>{q.question}</p>
      <div className="grid grid-cols-2 gap-3">
        {q.options.map(opt => {
          const state = !done ? (chosen === opt ? "selected" : "idle") : opt === q.answer ? "correct" : chosen === opt ? "wrong" : "idle";
          return (
            <button type="button" key={opt} onClick={() => handlePick(opt)}
              className={`rounded-2xl border-2 px-4 py-4 text-center text-lg font-black transition-all ${
                state === "correct" ? "border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10"
                : state === "wrong" ? "border-red-400 bg-red-50 text-red-700 dark:bg-red-500/10"
                : state === "selected" ? "text-white"
                : dark ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                : "border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
              style={state === "selected" ? { borderColor: themeColor.from, background: themeColor.from + "18", color: themeColor.from } : {}}>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// 10. listen-count
function ListenCountQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const { t } = useTranslate();
  const [counted, setCounted] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const maxCount = q.count ?? 3;
  const audioSrc = q.audio;

  const handleCount = (n: number) => {
    if (done) return;
    soundEngine.playClick();
    setCounted(n); setDone(true);
    const correct = n === parseInt(q.answer);
    correct ? soundEngine.playCorrect() : soundEngine.playWrong();
    onAnswer(correct);
  };

  return (
    <div className="space-y-4">
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}
         style={{ color: themeColor.from }}>
        🎧 {t("arena.listenCountInstruction")}
      </p>
      {audioSrc && <audio src={audioSrc} controls className="w-full" />}
      <div className="grid grid-cols-5 gap-2 mt-4">
        {Array.from({ length: maxCount + 2 }, (_, i) => (
          <button type="button" key={i} onClick={() => handleCount(i)}
            className={`rounded-2xl border-2 px-3 py-3 text-center text-sm font-black ${
              done && i === parseInt(q.answer) ? "border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10"
              : done && counted === i ? "border-red-400 bg-red-50 text-red-700 dark:bg-red-500/10"
              : dark ? "border-slate-600 text-slate-300 hover:bg-slate-700"
              : "border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}>
            {i}×
          </button>
        ))}
      </div>
    </div>
  );
}

// 11. four-images-one-word
function FourImagesOneWordQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const { t } = useTranslate();
  const [chosen, setChosen] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const images = q.fourImages ?? q.images ?? [];

  const handlePick = (opt: string) => {
    if (done) return;
    soundEngine.playClick();
    setChosen(opt); setDone(true);
    const correct = opt === q.answer;
    correct ? soundEngine.playCorrect() : soundEngine.playWrong();
    onAnswer(correct);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 mb-4">
        {images.map((src, idx) => (
          <div key={idx} className="rounded-2xl overflow-hidden border-2 border-slate-100 dark:border-slate-700 aspect-square bg-slate-100 dark:bg-slate-800">
            <img src={src} alt={`${t("arena.imageAltPrefix")} ${idx+1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>{t("arena.whichWordMatchesImages")}</p>
      <div className="space-y-2">
        {q.options.map(opt => (
          <OptionButton key={opt} label={opt} onClick={() => handlePick(opt)} dark={dark} themeColor={themeColor}
            state={!done ? (chosen === opt ? "selected" : "idle") : opt === q.answer ? "correct" : chosen === opt ? "wrong" : "idle"} />
        ))}
      </div>
    </div>
  );
}

// 12. match-pairs
function MatchPairsQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const { t } = useTranslate();
  const pairs = q.pairs ?? [["?", "?"]];
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [matched, setMatched] = useState<Record<string, string>>({});
  const [wrongFlash, setWrongFlash] = useState<string | null>(null);
  const words = pairs.map(p => p[0]);
  const meanings = pairs.map(p => p[1]);

  const handleWordClick = (word: string) => {
    if (matched[word]) return;
    soundEngine.playClick();
    if (selectedWord && selectedWord !== word) {
      const correctMeaning = pairs.find(p => p[0] === selectedWord)?.[1];
      if (word === correctMeaning) {
        setMatched(prev => ({ ...prev, [selectedWord]: word }));
        setSelectedWord(null);
      } else {
        setWrongFlash(word);
        setTimeout(() => setWrongFlash(null), 400);
      }
    } else {
      setSelectedWord(word);
    }
  };

  const allMatched = Object.keys(matched).length === words.length;
  useEffect(() => {
    if (allMatched) {
      soundEngine.playComplete();
      onAnswer(true);
    }
  }, [allMatched, onAnswer]);

  return (
    <div className="space-y-4">
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>{t("arena.matchWordToMeaning")}</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {words.map(word => (
            <button type="button" key={word} onClick={() => handleWordClick(word)}
              className={`w-full rounded-2xl border-2 px-4 py-3 text-center font-black text-sm transition ${
                matched[word] ? "border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10"
                : selectedWord === word ? "border-2"
                : dark ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                : "border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
              style={selectedWord === word && !matched[word] ? { borderColor: themeColor.from, background: themeColor.from + "18", color: themeColor.from } : {}}>
              {word}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {meanings.map(meaning => {
            const isWrongFlash = wrongFlash === meaning;
            return (
              <button type="button" key={meaning} onClick={() => handleWordClick(meaning)}
                className={`w-full rounded-2xl border-2 px-4 py-3 text-center font-black text-sm transition ${
                  isWrongFlash ? "border-red-400 bg-red-50 text-red-700 shake"
                  : Object.values(matched).includes(meaning) ? "border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10"
                  : dark ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                  : "border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}>
                {meaning}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// 13. sort-category (vereenvoudigd met klikken)
function SortCategoryQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const { t } = useTranslate();
  const categories = q.categories ?? [];
  const categoryAnswers = q.categoryAnswers ?? {};
  const allWords = q.options;
  const [buckets, setBuckets] = useState<Record<string, string[]>>({});
  const [done, setDone] = useState(false);

  const handleDrop = (word: string, cat: string) => {
    if (done) return;
    soundEngine.playClick();
    setBuckets(prev => {
      const newBuckets = { ...prev };
      Object.keys(newBuckets).forEach(c => {
        newBuckets[c] = newBuckets[c].filter(w => w !== word);
      });
      newBuckets[cat] = [...(newBuckets[cat] ?? []), word];
      return newBuckets;
    });
  };

  const checkAllCorrect = () => {
    const correct = categories.every(cat => {
      const required = categoryAnswers[cat] ?? [];
      const current = buckets[cat] ?? [];
      return required.length === current.length && required.every(w => current.includes(w));
    });
    setDone(true);
    correct ? soundEngine.playCorrect() : soundEngine.playWrong();
    onAnswer(correct);
  };

  return (
    <div className="space-y-4">
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>{t("arena.dragWordToCategory")}</p>
      <div className="grid grid-cols-2 gap-3">
        {categories.map(cat => (
          <div key={cat} className="rounded-2xl border-2 border-dashed p-3 min-h-[120px]"
            style={{ borderColor: dark ? "#475569" : "#cbd5e1" }}>
            <div className="text-xs font-black mb-2">{cat}</div>
            <div className="flex flex-wrap gap-2">
              {(buckets[cat] ?? []).map(w => (
                <span key={w} className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-xs font-bold cursor-pointer"
                  onClick={() => handleDrop(w, '')}>{w}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {allWords.filter(w => !Object.values(buckets).flat().includes(w)).map(w => (
          <button type="button" key={w} onClick={() => {
            // quick assign to first category for demo, should be improved with drag & drop
            const firstCat = categories[0];
            handleDrop(w, firstCat);
          }} className="px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border text-sm font-bold">
            {w}
          </button>
        ))}
      </div>
      {!done && (
        <button type="button" onClick={checkAllCorrect}
          className="w-full rounded-2xl py-3 text-sm font-black text-white"
          style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})` }}>
          {t("arena.checkAnswers")}
        </button>
      )}
    </div>
  );
}

// 14. speed-tap
function SpeedTapQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const words = q.options;
  const correctWord = q.answer;
  const [clicked, setClicked] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(q.timeLimit ?? 5);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (started && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !done) {
      setDone(true);
      const correctCount = clicked.filter(w => w === correctWord).length;
      const wrongClicks = clicked.filter(w => w !== correctWord).length;
      const isPassed = correctCount >= 3 && wrongClicks === 0;
      isPassed ? soundEngine.playCorrect() : soundEngine.playWrong();
      onAnswer(isPassed);
    }
  }, [started, timeLeft, clicked, done, correctWord, onAnswer]);

  const handleStart = () => {
    setStarted(true); soundEngine.playClick();
  };
  const handleClick = (word: string) => {
    if (done || !started) return;
    soundEngine.playClick();
    setClicked(prev => [...prev, word]);
  };

  return (
    <div className="space-y-4">
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>
        Tik zo vaak mogelijk op het juiste woord: <strong>{correctWord}</strong>
      </p>
      <div className="text-center text-4xl font-black">{started ? timeLeft : "⏱️"}</div>
      <div className="grid grid-cols-3 gap-2">
        {words.map(w => (
          <button type="button" key={w} onClick={() => handleClick(w)}
            className="rounded-2xl border-2 px-3 py-3 text-sm font-black"
            disabled={!started || done}
            style={{ borderColor: dark ? "#475569" : "#cbd5e1" }}>
            {w}
          </button>
        ))}
      </div>
      {!started && (
        <button type="button" onClick={handleStart} className="w-full rounded-2xl py-3 text-sm font-black text-white"
          style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})` }}>
          Start!
        </button>
      )}
      {done && (
        <div className="text-center font-bold">
          {clicked.filter(w => w === correctWord).length} keer goed, {clicked.filter(w => w !== correctWord).length} fout.
        </div>
      )}
    </div>
  );
}

// 15. word-chain
function WordChainQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const { t } = useTranslate();
  const startWord = q.chainStart ?? q.question;
  const [chain, setChain] = useState<string[]>([startWord]);
  const [input, setInput] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const validWords = q.options;

  const handleAdd = () => {
    const word = input.trim().toLowerCase();
    const lastWord = chain[chain.length - 1];
    const lastLetter = lastWord.slice(-1);
    if (!word.startsWith(lastLetter)) {
      setError(t("arena.mustStartWith").replace("{letter}", lastLetter)); return;
    }
    if (!validWords.includes(word)) {
      setError(t("arena.notValidWord")); return;
    }
    if (chain.includes(word)) {
      setError(t("arena.alreadyUsed")); return;
    }
    setChain([...chain, word]); setInput(""); setError("");
    if (chain.length + 1 >= 4) {
      setDone(true);
      soundEngine.playCorrect();
      onAnswer(true);
    }
  };

  return (
    <div className="space-y-4">
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>{t("arena.makeWordChain")}</p>
      <div className="flex flex-wrap gap-2">
        {chain.map(w => (
          <span key={w} className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 font-bold">{w}</span>
        ))}
      </div>
      {!done && (
        <div className="flex gap-2">
          <input type="text" value={input} onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && handleAdd()}
            placeholder={t("arena.nextWordPlaceholder")} className={`flex-1 rounded-xl border-2 px-4 py-2 ${dark ? "bg-slate-700 text-white border-slate-600" : "bg-white border-slate-200"}`}
          />
          <button type="button" onClick={handleAdd}
            className="rounded-xl px-4 py-2 text-white font-black"
            style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})` }}>
            +
          </button>
        </div>
      )}
      {error && <p className="text-red-500 text-xs">{error}</p>}
      {done && <p className="text-emerald-500 font-bold">✅ {t("arena.chainComplete")}</p>}
    </div>
  );
}

// 16. click-word
function ClickWordQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const { t } = useTranslate();
  const sentence = q.sentenceForClick ?? q.question;
  const target = q.answer;
  const words = sentence.split(" ");
  const [clickedIdx, setClickedIdx] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const handleClickWord = (word: string, idx: number) => {
    if (done) return;
    soundEngine.playClick();
    setClickedIdx(idx); setDone(true);
    const correct = word === target;
    correct ? soundEngine.playCorrect() : soundEngine.playWrong();
    onAnswer(correct);
  };

  return (
    <div className="space-y-4">
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}
         style={{ color: themeColor.from }}>
        {t("arena.clickCorrectWord")}
      </p>
      <div className="flex flex-wrap gap-2 text-lg">
        {words.map((w, idx) => {
          const isTarget = w === target;
          const isClicked = clickedIdx === idx;
          return (
            <span key={idx} onClick={() => handleClickWord(w, idx)}
              className={`px-2 py-1 rounded-xl font-bold transition cursor-pointer ${
                isTarget && done ? "bg-emerald-200 dark:bg-emerald-500/30 text-emerald-800 dark:text-emerald-200"
                : (isClicked && !isTarget) ? "bg-red-200 dark:bg-red-500/30 text-red-800 dark:text-red-200"
                : "hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}>
              {w}
            </span>
          );
        })}
      </div>
      {done && clickedIdx !== null && words[clickedIdx] !== target && (
        <p className="text-sm text-red-500">{t("arena.wordWas")} <strong>{target}</strong></p>
      )}
    </div>
  );
}

// 17. listen-type — luister & typ exact wat je hoort (dictee)
function ListenTypeQ({ q, onAnswer, dark, themeColor, lang, speed }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string }; lang: string; speed: SpeechSpeed }) {
  const { t } = useTranslate();
  const [input, setInput] = useState("");
  const [done, setDone] = useState(false);
  const isCorrect = input.trim().toLowerCase() === q.answer.trim().toLowerCase();

  const handleSubmit = () => {
    if (done || !input.trim()) return;
    soundEngine.playClick();
    setDone(true);
    isCorrect ? soundEngine.playCorrect() : soundEngine.playWrong();
    onAnswer(isCorrect);
  };

  return (
    <div className="space-y-4">
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`} style={{ color: themeColor.from }}>
        {t("arena.listenTypeInstruction")}
      </p>
      <SpeakOrPlayButton audioSrc={q.audio} text={q.answer} lang={lang} speed={speed} dark={dark} themeColor={themeColor} />
      <input
        type="text" value={input} disabled={done}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && handleSubmit()}
        placeholder={t("arena.typeAnswerPlaceholder")}
        className={`w-full rounded-2xl border-2 px-5 py-4 text-base font-semibold outline-none transition-all ${dark ? "bg-slate-700 text-white placeholder:text-slate-500 border-slate-600" : "bg-slate-50 text-slate-900 placeholder:text-slate-400 border-slate-200"}`} />
      {!done && (
        <button type="button" onClick={handleSubmit} disabled={!input.trim()}
          className="w-full rounded-2xl py-3 text-sm font-black text-white shadow-lg disabled:opacity-40"
          style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})` }}>
          {t("arena.checkButton")}
        </button>
      )}
      {done && (
        <div role="status" aria-live="polite" className={`rounded-2xl px-5 py-4 text-sm font-bold ${isCorrect ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300" : "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300"}`}>
          {isCorrect ? t("arena.greatCorrect") : <span>{t("arena.correctAnswerLabel")} <strong>{q.answer}</strong></span>}
        </div>
      )}
    </div>
  );
}

// 18. word-tiles — bouw de zin door tegels aan te tikken (met foute/overbodige tegels ertussen)
function WordTilesQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const { t } = useTranslate();
  const [pool] = useState<string[]>(() => [...(q.options ?? [])].sort(() => Math.random() - 0.5));
  const [picked, setPicked] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const built = picked.map(idx => pool[idx]).join(" ");
  const isCorrect = built.trim() === q.answer.trim();

  const addTile = (idx: number) => { if (!done && !picked.includes(idx)) { soundEngine.playClick(); setPicked(p => [...p, idx]); } };
  const removeTile = (pos: number) => { if (!done) { soundEngine.playClick(); setPicked(p => p.filter((_, i) => i !== pos)); } };
  const handleCheck = () => {
    if (done || picked.length === 0) return;
    soundEngine.playClick(); setDone(true);
    isCorrect ? soundEngine.playCorrect() : soundEngine.playWrong();
    onAnswer(isCorrect);
  };

  return (
    <div className="space-y-4">
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`} style={{ color: themeColor.from }}>{t("arena.wordTilesInstruction")}</p>
      <div className={`min-h-[56px] flex flex-wrap gap-2 rounded-2xl border-2 border-dashed p-3 ${dark ? "border-slate-600" : "border-slate-300"}`}>
        {picked.length === 0 && <span className={`text-sm ${dark ? "text-slate-500" : "text-slate-400"}`}>{t("arena.tapTilesHint")}</span>}
        {picked.map((idx, pos) => (
          <button type="button" key={pos} onClick={() => removeTile(pos)} className="rounded-xl px-3 py-2 text-sm font-bold text-white shadow"
            style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})` }}>{pool[idx]}</button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {pool.map((word, idx) => (
          <button type="button" key={idx} onClick={() => addTile(idx)} disabled={picked.includes(idx) || done}
            className={`rounded-xl border-2 px-3 py-2 text-sm font-bold transition ${picked.includes(idx) ? "opacity-30" : dark ? "border-slate-600 text-slate-200 hover:bg-slate-700" : "border-slate-200 text-slate-700 hover:bg-slate-50"}`}>{word}</button>
        ))}
      </div>
      {!done && (
        <button type="button" onClick={handleCheck} disabled={picked.length === 0}
          className="w-full rounded-2xl py-3 text-sm font-black text-white shadow-lg disabled:opacity-40"
          style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})` }}>{t("arena.checkButton")}</button>
      )}
      {done && (
        <div role="status" aria-live="polite" className={`rounded-2xl px-5 py-4 text-sm font-bold ${isCorrect ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300" : "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300"}`}>
          {isCorrect ? t("arena.greatCorrect") : <span>{t("arena.correctAnswerLabel")} <strong>{q.answer}</strong></span>}
        </div>
      )}
    </div>
  );
}

// 19. emoji-story — raad welke zin bij de emoji-reeks past
function EmojiStoryQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const { t } = useTranslate();
  const [chosen, setChosen] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const handlePick = (opt: string) => {
    if (done) return;
    soundEngine.playClick();
    setChosen(opt); setDone(true);
    const correct = opt === q.answer;
    correct ? soundEngine.playCorrect() : soundEngine.playWrong();
    onAnswer(correct);
  };

  return (
    <div className="space-y-4">
      <div className={`rounded-2xl p-6 text-center text-4xl tracking-wide ${dark ? "bg-slate-700" : "bg-slate-50"}`}>{q.question}</div>
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>{t("arena.emojiStoryInstruction")}</p>
      <div className="space-y-2">
        {q.options.map(opt => (
          <OptionButton key={opt} label={opt} onClick={() => handlePick(opt)} dark={dark} themeColor={themeColor}
            state={!done ? (chosen === opt ? "selected" : "idle") : opt === q.answer ? "correct" : chosen === opt ? "wrong" : "idle"} />
        ))}
      </div>
    </div>
  );
}

// 20. scene-tap — tik het juiste object aan in een scene van emoji
function SceneTapQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const { t } = useTranslate();
  const [tappedIdx, setTappedIdx] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const scene = q.images ?? [];
  const labels = q.labels ?? [];

  const handleTap = (idx: number) => {
    if (done) return;
    soundEngine.playClick();
    setTappedIdx(idx); setDone(true);
    const correct = labels[idx] === q.answer;
    correct ? soundEngine.playCorrect() : soundEngine.playWrong();
    onAnswer(correct);
  };

  return (
    <div className="space-y-4">
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`} style={{ color: themeColor.from }}>
        {t("arena.sceneTapInstruction")} <strong>{q.question}</strong>
      </p>
      <div className={`grid grid-cols-4 gap-3 rounded-2xl p-5 ${dark ? "bg-slate-700" : "bg-slate-50"}`}>
        {scene.map((emoji, idx) => (
          <button type="button" key={idx} onClick={() => handleTap(idx)} aria-label={labels[idx] ?? emoji}
            className={`aspect-square rounded-2xl flex items-center justify-center text-3xl transition ${
              done && labels[idx] === q.answer ? "bg-emerald-200 dark:bg-emerald-500/30 scale-110"
              : done && tappedIdx === idx ? "bg-red-200 dark:bg-red-500/30"
              : dark ? "bg-slate-600 hover:bg-slate-500" : "bg-white hover:bg-slate-100 shadow"
            }`}>{emoji}</button>
        ))}
      </div>
    </div>
  );
}

// 21. multi-blank — één zin met 2-3 gaten in plaats van maar 1
function MultiBlankQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
  const { t } = useTranslate();
  const parts = q.question.split("___");
  const blanks = q.blanks ?? [];
  const [values, setValues] = useState<string[]>(() => blanks.map(() => ""));
  const [done, setDone] = useState(false);
  const allFilled = values.every(v => v.trim().length > 0);
  const allCorrect = values.every((v, idx) => v.trim().toLowerCase() === (blanks[idx] ?? "").trim().toLowerCase());

  const setValue = (idx: number, v: string) => setValues(vals => vals.map((val, i) => (i === idx ? v : val)));
  const handleCheck = () => {
    if (done || !allFilled) return;
    soundEngine.playClick(); setDone(true);
    allCorrect ? soundEngine.playCorrect() : soundEngine.playWrong();
    onAnswer(allCorrect);
  };

  return (
    <div className="space-y-4">
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`} style={{ color: themeColor.from }}>{t("arena.multiBlankInstruction")}</p>
      <div className={`flex flex-wrap items-center gap-2 rounded-2xl p-4 text-lg font-semibold ${dark ? "bg-slate-700 text-white" : "bg-slate-50 text-slate-900"}`}>
        {parts.map((part, idx) => (
          <span key={idx} className="flex items-center gap-2 flex-wrap">
            {part}
            {idx < blanks.length && (
              <input type="text" value={values[idx]} disabled={done} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(idx, e.target.value)}
                className={`w-24 rounded-lg border-2 px-2 py-1 text-center text-base font-bold outline-none ${
                  done
                    ? values[idx].trim().toLowerCase() === (blanks[idx] ?? "").trim().toLowerCase()
                      ? "border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10"
                      : "border-red-400 bg-red-50 text-red-700 dark:bg-red-500/10"
                    : dark ? "border-slate-500 bg-slate-800 text-white" : "border-slate-300 bg-white"
                }`} />
            )}
          </span>
        ))}
      </div>
      {!done && (
        <button type="button" onClick={handleCheck} disabled={!allFilled}
          className="w-full rounded-2xl py-3 text-sm font-black text-white shadow-lg disabled:opacity-40"
          style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})` }}>{t("arena.checkButton")}</button>
      )}
      {done && !allCorrect && (
        <p role="status" aria-live="polite" className="text-sm text-red-500">{t("arena.correctAnswerLabel")} <strong>{blanks.join(", ")}</strong></p>
      )}
      {done && allCorrect && (
        <p role="status" aria-live="polite" className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{t("arena.greatCorrect")}</p>
      )}
    </div>
  );
}

// 22. listen-word-bank — luister, en bouw daarna de zin door tegels uit een woordenbank te tikken
function ListenWordBankQ({ q, onAnswer, dark, themeColor, lang, speed }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string }; lang: string; speed: SpeechSpeed }) {
  const { t } = useTranslate();
  const [pool] = useState<string[]>(() => [...(q.options ?? [])].sort(() => Math.random() - 0.5));
  const [picked, setPicked] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const built = picked.map(idx => pool[idx]).join(" ");
  const isCorrect = built.trim() === q.answer.trim();

  const addTile = (idx: number) => { if (!done && !picked.includes(idx)) { soundEngine.playClick(); setPicked(p => [...p, idx]); } };
  const removeTile = (pos: number) => { if (!done) { soundEngine.playClick(); setPicked(p => p.filter((_, i) => i !== pos)); } };
  const handleCheck = () => {
    if (done || picked.length === 0) return;
    soundEngine.playClick(); setDone(true);
    isCorrect ? soundEngine.playCorrect() : soundEngine.playWrong();
    onAnswer(isCorrect);
  };

  return (
    <div className="space-y-4">
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`} style={{ color: themeColor.from }}>{t("arena.listenWordBankInstruction")}</p>
      <SpeakOrPlayButton audioSrc={q.audio} text={q.answer} lang={lang} speed={speed} dark={dark} themeColor={themeColor} />
      <div className={`min-h-[56px] flex flex-wrap gap-2 rounded-2xl border-2 border-dashed p-3 ${dark ? "border-slate-600" : "border-slate-300"}`}>
        {picked.length === 0 && <span className={`text-sm ${dark ? "text-slate-500" : "text-slate-400"}`}>{t("arena.tapTilesHint")}</span>}
        {picked.map((idx, pos) => (
          <button type="button" key={pos} onClick={() => removeTile(pos)} className="rounded-xl px-3 py-2 text-sm font-bold text-white shadow"
            style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})` }}>{pool[idx]}</button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {pool.map((word, idx) => (
          <button type="button" key={idx} onClick={() => addTile(idx)} disabled={picked.includes(idx) || done}
            className={`rounded-xl border-2 px-3 py-2 text-sm font-bold transition ${picked.includes(idx) ? "opacity-30" : dark ? "border-slate-600 text-slate-200 hover:bg-slate-700" : "border-slate-200 text-slate-700 hover:bg-slate-50"}`}>{word}</button>
        ))}
      </div>
      {!done && (
        <button type="button" onClick={handleCheck} disabled={picked.length === 0}
          className="w-full rounded-2xl py-3 text-sm font-black text-white shadow-lg disabled:opacity-40"
          style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})` }}>{t("arena.checkButton")}</button>
      )}
      {done && (
        <div role="status" aria-live="polite" className={`rounded-2xl px-5 py-4 text-sm font-bold ${isCorrect ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300" : "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300"}`}>
          {isCorrect ? t("arena.greatCorrect") : <span>{t("arena.correctAnswerLabel")} <strong>{q.answer}</strong></span>}
        </div>
      )}
    </div>
  );
}

// ─── QUIZ COMPONENT ───────────────────────────────────────────────────────────
function Quiz({ questions, onDone, themeColor, lang = "en", premium = false, onOpenShop }: {
  questions: Question[];
  onDone: (score: number, max: number) => void;
  themeColor: { from: string; to: string };
  lang?: string;
  premium?: boolean;
  onOpenShop?: () => void;
}) {
  const { theme } = useTheme();
  const { t } = useTranslate();
  const dark = theme === "dark";
  const [i, setI] = useState(0);
  const [inp, setInp] = useState("");
  const [chosen, setChosen] = useState<string | null>(null);
  const [fb, setFb] = useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = useState(0);
  const [speechSpeed, setSpeechSpeed] = useState<SpeechSpeed>("normal");
  const [muted, setMuted] = useState(soundEngine.isMuted());
  const [newTypeAnswered, setNewTypeAnswered] = useState(false);
  const [hearts, setHearts] = useState(() => (premium ? MAX_HEARTS : getHearts()));
  const [justLostHeart, setJustLostHeart] = useState(false);

  const q = questions[i];
  const ok = fb !== null;

  const SELF_HANDLED_TYPES: QType[] = [
    "picture-sentence", "qa", "order-sentences", "opposites",
    "fill-dialogue", "odd-one-out", "complete-story", "correct-the-error",
    "true-false", "listen-count", "four-images-one-word",
    "match-pairs", "sort-category", "speed-tap", "word-chain", "click-word",
    "listen-type", "word-tiles", "emoji-story", "scene-tap", "multi-blank", "listen-word-bank"
  ];
  const isSelfHandled = q && SELF_HANDLED_TYPES.includes(q.type);

  useEffect(() => { soundEngine.setMuted(muted); }, [muted]);
  useEffect(() => { setNewTypeAnswered(false); }, [i]);

  const handleNewTypeAnswer = useCallback((correct: boolean) => {
    setNewTypeAnswered(true);
    if (correct) { setScore(v => v + 1); }
    else if (!premium) { setJustLostHeart(true); setHearts(loseHeart()); setTimeout(() => setJustLostHeart(false), 500); }
  }, [premium]);

  const handleCheck = useCallback(() => {
    if (ok || !q) return;
    soundEngine.playClick();
    if (q.type === "composition") {
      if (inp.trim().length === 0) return;
      setFb("correct"); setScore(v => v + 1); soundEngine.playCorrect();
      return;
    }
    const ans = (q.type === "multiple-choice" ? chosen ?? "" : inp).trim();
    const good = ans.toLowerCase() === q.answer.toLowerCase();
    setFb(good ? "correct" : "wrong");
    if (good) { setScore(v => v + 1); soundEngine.playCorrect(); }
    else {
      soundEngine.playWrong();
      if (!premium) { setJustLostHeart(true); setHearts(loseHeart()); setTimeout(() => setJustLostHeart(false), 500); }
    }
  }, [ok, q, inp, chosen, premium]);

  const handleAdvance = useCallback(() => {
    if (i + 1 >= questions.length) {
      soundEngine.playComplete();
      onDone(score, questions.length);
      return;
    }
    soundEngine.playNext();
    setI(v => v + 1); setInp(""); setChosen(null); setFb(null);
  }, [i, questions.length, score, onDone]);

  const handleChoose = useCallback((opt: string) => {
    if (ok) return;
    soundEngine.playClick();
    setChosen(opt);
  }, [ok]);

  if (!q) return null;
  const pct = ((i + ((ok || newTypeAnswered) ? 1 : 0)) / questions.length) * 100;
  const meta = TYPE_META[q.type] ?? { label: q.type, icon: "❓", color: themeColor.from };

  return (
    <div className="w-full max-w-lg mx-auto">
      <style>{`
        @keyframes shakeX{0%,100%{transform:translateX(0)}20%{transform:translateX(-10px)}40%{transform:translateX(10px)}60%{transform:translateX(-6px)}80%{transform:translateX(6px)}}
        .shake{animation:shakeX .45s ease-out}
        @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        .fade-up{animation:fadeUp .25s ease-out}
        @keyframes softPulse{0%{opacity:1;transform:scale(1)}50%{opacity:0.7;transform:scale(1.08)}100%{opacity:1;transform:scale(1)}}
        .speaker-icon{animation:softPulse 1.2s ease-in-out infinite}
        @keyframes soundWave{0%{transform:scaleY(0.4)}50%{transform:scaleY(1)}100%{transform:scaleY(0.4)}}
        .sound-bar{animation:soundWave 0.6s ease-in-out infinite}
        .sound-bar:nth-child(2){animation-delay:0.1s}
        .sound-bar:nth-child(3){animation-delay:0.2s}
        .sound-bar:nth-child(4){animation-delay:0.3s}
      `}</style>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-slate-400">{i + 1} / {questions.length}</span>
          <div className="flex items-center gap-3">
            <HeartsDisplay hearts={hearts} premium={premium} dark={dark} justLost={justLostHeart} />
            <button type="button" onClick={() => setMuted(m => !m)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition ${dark ? "bg-slate-700 hover:bg-slate-600" : "bg-slate-100 hover:bg-slate-200"}`}
              title={muted ? t("generic.unmuteSound") : t("generic.muteSound")}
              aria-label={muted ? t("generic.unmuteSound") : t("generic.muteSound")}>
              {muted ? "🔇" : "🔊"}
            </button>
            <span className="text-xs font-bold" style={{ color: themeColor.from }}>{Math.round(pct)}%</span>
          </div>
        </div>
        <div className={`h-3 rounded-full overflow-hidden ${dark ? "bg-slate-700" : "bg-slate-100"}`}>
          <div className="h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${themeColor.from}, ${themeColor.to})` }} />
        </div>
      </div>

      {hearts <= 0 && !premium ? (
        <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-red-200 dark:border-red-900/50 py-14 px-6 text-center">
          <div className="text-5xl" aria-hidden="true">💔</div>
          <h2 className={`text-lg font-black ${dark ? "text-white" : "text-slate-900"}`}>{t("arena.outOfHeartsTitle")}</h2>
          <p className={`text-sm max-w-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>{t("arena.outOfHeartsMessage")}</p>
          <p className="text-xs font-bold" style={{ color: themeColor.from }}>
            {t("arena.heartsRefillIn").replace("{minutes}", String(minutesUntilNextHeart()))}
          </p>
          <div className="mt-2 flex gap-3">
            {onOpenShop && (
              <button type="button" onClick={() => { onOpenShop(); onDone(score, questions.length); }}
                className="rounded-2xl px-5 py-3 text-sm font-black text-white shadow-lg"
                style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})` }}>
                🪙 {t("arena.shopTitle")}
              </button>
            )}
            <button type="button" onClick={() => onDone(score, questions.length)}
              className={`rounded-2xl px-5 py-3 text-sm font-black shadow-lg ${dark ? "bg-slate-700 text-white" : "bg-slate-100 text-slate-700"}`}>
              {t("arena.backToSeasons")}
            </button>
          </div>
        </div>
      ) : (
      <>
      {/* Card */}
      <div className={`rounded-3xl border-2 p-7 transition-all duration-300 ${dark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100 shadow-xl shadow-slate-100"} ${
        fb === "correct" ? "!border-emerald-400" : fb === "wrong" ? "!border-red-400 shake" : ""
      }`}>

        {/* Type badge */}
        <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-5"
          style={{ background: `${meta.color}18`, color: meta.color }}>
          {meta.icon} {t(meta.label as TranslationKey)}
        </div>

        {/* Question for classic types */}
        {!isSelfHandled && (
          <>
            <p className={`text-2xl font-extrabold leading-snug mb-4 ${dark ? "text-white" : "text-slate-900"}`}>
              {q.question}
            </p>

            {/* Speak button */}
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <button type="button" onClick={() => speak(q.question, speechSpeed)}
                className={`text-xs font-bold flex items-center gap-2 rounded-full px-4 py-2 transition speaker-icon ${dark ? "bg-slate-700 text-slate-300 hover:bg-slate-600" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                <span className="flex items-end gap-[2px] h-4">
                  {[1,2,3,4].map(n => (<span key={n} className="sound-bar w-[3px] h-full rounded-full" style={{ background: themeColor.from }} />))}
                </span>
                🔊 Uitspreken
              </button>
              <div className={`flex rounded-full overflow-hidden border ${dark ? "border-slate-600" : "border-slate-200"}`}>
                {(["slow", "normal", "fast"] as SpeechSpeed[]).map(s => (
                  <button type="button" key={s} onClick={() => { setSpeechSpeed(s); soundEngine.playClick(); }}
                    className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-wide transition ${speechSpeed === s ? "text-white" : dark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-700"}`}
                    style={speechSpeed === s ? { background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})` } : {}}>
                    {s === "slow" ? "🐢" : s === "normal" ? "🚶" : "🏃"}
                  </button>
                ))}
              </div>
            </div>

            {/* Classic answer inputs */}
            {q.type === "multiple-choice" ? (
              <div className="space-y-3">
                {q.options.map(opt => {
                  const isCorrect = ok && opt === q.answer;
                  const isWrong = ok && opt === chosen && opt !== q.answer;
                  const isSelected = chosen === opt;
                  return (
                    <button type="button" key={opt} onClick={() => handleChoose(opt)}
                      className={`w-full rounded-2xl border-2 px-5 py-4 text-left text-sm font-bold transition-all duration-200 ${
                        isCorrect ? "border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
                        : isWrong ? "border-red-400 bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300"
                        : isSelected ? "border-2 text-white scale-[1.01]"
                        : dark ? "border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-700/50"
                        : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                      style={isSelected && !ok ? { borderColor: themeColor.from, background: `${themeColor.from}18`, color: themeColor.from } : {}}>
                      {opt}
                    </button>
                  );
                })}
              </div>
            ) : q.type === "composition" ? (
              <div>
                <textarea value={inp} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInp(e.target.value)} disabled={ok}
                  placeholder={t("arena.writeAnswerPlaceholder")} rows={3}
                  className={`w-full rounded-2xl border-2 px-5 py-4 text-base font-semibold outline-none transition-all ${dark ? "bg-slate-700 text-white placeholder:text-slate-500" : "bg-slate-50 text-slate-900 placeholder:text-slate-400"} border-slate-200 dark:border-slate-600`} />
                {ok && (<div role="status" aria-live="polite" className="mt-3 rounded-2xl bg-emerald-50 text-emerald-700 px-5 py-4 text-sm font-bold border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/30">✅ {t("arena.taskComplete")}</div>)}
              </div>
            ) : (
              <input type="text" value={inp} onChange={(e: ChangeEvent<HTMLInputElement>) => setInp(e.target.value)} disabled={ok}
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => { if (e.key === "Enter" && !ok) handleCheck(); }}
                placeholder={t("arena.typeAnswerPlaceholder")} autoFocus
                className={`w-full rounded-2xl border-2 px-5 py-4 text-base font-semibold outline-none transition-all ${dark ? "bg-slate-700 text-white placeholder:text-slate-500" : "bg-slate-50 text-slate-900 placeholder:text-slate-400"} ${fb === "correct" ? "border-emerald-400" : fb === "wrong" ? "border-red-400" : "border-slate-200 dark:border-slate-600"}`}
                onFocus={(e: FocusEvent<HTMLInputElement>) => { if (!fb) e.target.style.borderColor = themeColor.from; }}
                onBlur={(e: FocusEvent<HTMLInputElement>) => { if (!fb) e.target.style.borderColor = ""; }}
              />
            )}

            {/* Classic feedback */}
            {ok && q.type !== "composition" && (
              <div role="status" aria-live="polite" className={`mt-5 rounded-2xl px-5 py-4 text-sm font-bold fade-up flex items-center gap-3 ${
                fb === "correct" ? "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/30"
                : "bg-red-50 text-red-700 border border-red-200 dark:bg-red-500/10 dark:text-red-300 dark:border-red-500/30"
              }`}>
                <span className="text-xl" aria-hidden="true">{fb === "correct" ? "✅" : "❌"}</span>
                {fb === "correct" ? t("arena.greatCorrect") : <span>{t("arena.correctAnswerLabel")} <strong className="text-base">{q.answer}</strong></span>}
              </div>
            )}

            {/* Classic action buttons */}
            <div className="mt-6">
              {!ok ? (
                <button type="button" onClick={handleCheck}
                  disabled={q.type === "multiple-choice" ? !chosen : q.type === "composition" ? !inp.trim() : !inp.trim()}
                  className="w-full rounded-2xl py-4 text-base font-black text-white transition-all active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})`, boxShadow: `0 8px 24px -4px ${themeColor.from}55` }}>
                  {q.type === "composition" ? t("arena.submitButton") : t("arena.checkButton")}
                </button>
              ) : (
                <button type="button" onClick={handleAdvance}
                  className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 py-4 text-base font-black text-white shadow-lg transition-all hover:from-emerald-600 hover:to-green-600 active:scale-[0.98]">
                  {i + 1 >= questions.length ? t("arena.finishButton") : t("arena.next")}
                </button>
              )}
            </div>
          </>
        )}

        {/* NEW TYPE RENDERERS */}
        {isSelfHandled && (
          <>
            {![
              "order-sentences", "odd-one-out", "picture-sentence", "fill-dialogue", "correct-the-error", "complete-story",
              "listen-type", "word-tiles", "emoji-story", "scene-tap", "multi-blank", "listen-word-bank"
            ].includes(q.type) && (
              <p className={`text-xl font-extrabold leading-snug mb-4 ${dark ? "text-white" : "text-slate-900"}`}>{q.question}</p>
            )}

            {q.type === "picture-sentence" && <PictureSentenceQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "qa" && <QAQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "order-sentences" && <OrderSentencesQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "opposites" && <OppositesQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "fill-dialogue" && <FillDialogueQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "odd-one-out" && <OddOneOutQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "complete-story" && <CompleteStoryQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "correct-the-error" && <CorrectErrorQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "true-false" && <TrueFalseQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "listen-count" && <ListenCountQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "four-images-one-word" && <FourImagesOneWordQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "match-pairs" && <MatchPairsQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "sort-category" && <SortCategoryQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "speed-tap" && <SpeedTapQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "word-chain" && <WordChainQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "click-word" && <ClickWordQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "listen-type" && <ListenTypeQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} lang={lang} speed={speechSpeed} />}
            {q.type === "word-tiles" && <WordTilesQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "emoji-story" && <EmojiStoryQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "scene-tap" && <SceneTapQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "multi-blank" && <MultiBlankQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} />}
            {q.type === "listen-word-bank" && <ListenWordBankQ q={q} onAnswer={handleNewTypeAnswer} dark={dark} themeColor={themeColor} lang={lang} speed={speechSpeed} />}

            {newTypeAnswered && (
              <button type="button" onClick={handleAdvance}
                className="w-full mt-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 py-4 text-base font-black text-white shadow-lg transition-all hover:from-emerald-600 hover:to-green-600 active:scale-[0.98] fade-up">
                {i + 1 >= questions.length ? t("arena.finishButton") : t("arena.next")}
              </button>
            )}
          </>
        )}
      </div>
      </>
      )}
    </div>
  );
}

// ─── SNAKE PATH ────────────────────────────────────────────────────────────────
function SnakePath({ levels, completed, onSelect, theme }: {
  levels: Level[]; completed: number[]; onSelect: (lvl: number) => void; theme: typeof SEASON_THEMES[0];
}) {
  const { theme: mode } = useTheme();
  const dark = mode === "dark";
  const rows: Level[][] = [];
  for (let i = 0; i < levels.length; i += 3) rows.push(levels.slice(i, i + 3));

  return (
    <div className="relative py-4">
      <style>{`
        @keyframes nodePulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
        @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
      `}</style>
      {rows.map((row, rowIdx) => {
        const reversed = rowIdx % 2 === 1;
        const displayRow = reversed ? [...row].reverse() : row;
        return (
          <div key={rowIdx} className="relative mb-2">
            <div className="relative flex items-center justify-around px-6">
              <div className={`absolute left-[12%] right-[12%] top-1/2 -translate-y-1/2 h-1.5 rounded-full ${dark ? "bg-slate-700" : "bg-slate-100"}`} />
              {displayRow.map(lvl => {
                const done = completed.includes(lvl.level);
                const next = !done && (lvl.level === 1 || completed.includes(lvl.level - 1));
                const locked = !done && !next;
                return (
                  <div key={lvl.level} className="relative flex flex-col items-center z-10">
                    {next && <div className="absolute -top-8 text-lg" style={{ animation: "bounce 1s infinite" }}>👇</div>}
                    <button type="button" onClick={() => !locked && (soundEngine.playClick(), onSelect(lvl.level))} disabled={locked}
                      className={`relative flex h-[70px] w-[70px] items-center justify-center rounded-full border-4 text-lg font-black transition-all duration-300 ${locked ? "cursor-not-allowed opacity-35" : "cursor-pointer"} ${done ? "scale-105" : next ? "hover:scale-110" : ""}`}
                      style={done ? { background: "linear-gradient(135deg,#10b981,#059669)", borderColor: "#34d399", color: "white", boxShadow: "0 8px 24px -4px rgba(16,185,129,0.5)" }
                        : next ? { background: `linear-gradient(135deg,${theme.from},${theme.to})`, borderColor: theme.from + "80", color: "white", boxShadow: `0 8px 24px -4px ${theme.shadow}`, animation: "nodePulse 2s ease-in-out infinite" }
                        : { background: dark ? "#1e293b" : "#f1f5f9", borderColor: dark ? "#334155" : "#e2e8f0", color: dark ? "#475569" : "#94a3b8" }}>
                      {done ? "⭐" : next ? lvl.level : "🔒"}
                    </button>
                    <div className="mt-2.5 text-center">
                      <div className={`text-xs font-black ${done ? "text-emerald-500" : next ? "" : "text-slate-400"}`} style={next ? { color: theme.from } : {}}>
                        {done ? "Klaar" : `Level ${lvl.level}`}
                      </div>
                      {next && <div className="text-[10px] text-slate-400 font-medium">{lvl.questions.length} vragen</div>}
                    </div>
                  </div>
                );
              })}
            </div>
            {rowIdx < rows.length - 1 && (
              <div className="relative h-14 mx-4 mt-1">
                <div className={`absolute inset-0 rounded-b-[40px] border-b-[6px] border-dashed ${dark ? "border-slate-700" : "border-slate-200"} ${reversed ? "border-l-[6px] rounded-bl-[40px] rounded-br-none ml-[10%] mr-[75%]" : "border-r-[6px] rounded-br-[40px] rounded-bl-none ml-[75%] mr-[10%]"}`} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── SEASON VIEW ───────────────────────────────────────────────────────────────
function SeasonView({ season, lang, onBack, award, themeConfig, premium = false }: {
  season: Season; lang: string; onBack: () => void; award: (n: number) => void; themeConfig: typeof SEASON_THEMES[0]; premium?: boolean;
}) {
  const { theme } = useTheme();
  const { t } = useTranslate();
  const { user, refreshUser } = useAuth();
  const dark = theme === "dark";
  const [completed, setCompleted] = useState<number[]>(() => doneLvls(lang, season.id));
  const [activeLvl, setActiveLvl] = useState<number | null>(null);
  const [popup, setPopup] = useState<{ score: number; max: number; passed: boolean } | null>(null);
  // 🔒 FIX (audit #2 follow-up): coins now read from the server-
  // authoritative user.coins (see supabase/schema.sql section 8) instead
  // of the localStorage-only getCoins(). CoinShop's purchases below call
  // the matching RPC and resync from the response — never a raw
  // localStorage read/write for the balance itself anymore.
  const [coins, setCoins] = useState(() => user?.coins ?? 0);
  const [shopOpen, setShopOpen] = useState(false);

  const totalDone = completed.length; const total = season.levels.length;
  const pct = total ? Math.round((totalDone / total) * 100) : 0;

  const finishLvl = (score: number, max: number) => {
    if (!activeLvl) return;
    const passed = score >= Math.ceil(max * 0.6);
    if (passed) {
      complete(lang, season.id, activeLvl);
      const prevUnlocked = unlockedSeasons(lang);
      setCompleted(doneLvls(lang, season.id));
      // Server-authoritative completion: coins + XP decided by DB; idempotent per level
      supabase.rpc("complete_arena_level", {
        p_lang: lang,
        p_season_id: season.id,
        p_level_id: activeLvl,
      }).then(({ data, error }) => {
        if (error) {
          const msg = String(error.message || "");
          if (msg.includes("arena_level_already_completed")) {
            // UI may already show complete; no extra reward
            return;
          }
          console.error("complete_arena_level RPC failed:", error);
          return;
        }
        if (data?.profile) {
          setCoins(data.profile.coins ?? data.profile.Coins);
          refreshUser();
        } else if (data) {
          refreshUser();
        }
      });
      const newUnlocked = unlockedSeasons(lang);
      if (newUnlocked.length > prevUnlocked.length) soundEngine.playUnlock();
    }
    setPopup({ score, max, passed });
    setTimeout(() => { setPopup(null); setActiveLvl(null); }, 2500);
  };

  if (activeLvl) {
    const lvl = season.levels.find(l => l.level === activeLvl);
    return (
      <div className={`min-h-screen ${dark ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="mx-auto max-w-lg px-4 py-6">
          <button type="button" onClick={() => { soundEngine.playClick(); setActiveLvl(null); }}
            className={`mb-6 flex items-center gap-2 text-sm font-bold rounded-xl px-4 py-2.5 transition ${dark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-500 hover:text-slate-800 hover:bg-white shadow-sm"}`}>
            ← Terug
          </button>
          {lvl && <Quiz questions={lvl.questions} onDone={finishLvl} themeColor={themeConfig} lang={lang} premium={premium} onOpenShop={() => setShopOpen(true)} />}
        </div>
        {popup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-6">
            <div className="w-full max-w-xs rounded-3xl p-8 text-center text-white"
              style={{ background: popup.passed ? "linear-gradient(135deg,#10b981,#059669)" : "linear-gradient(135deg,#f43f5e,#ec4899)", boxShadow: popup.passed ? "0 24px 64px -12px rgba(16,185,129,0.6)" : "0 24px 64px -12px rgba(244,63,94,0.6)", animation: "popBounce .5s cubic-bezier(.175,.885,.32,1.275)" }}>
              <div className="text-5xl mb-3">{popup.passed ? "🏆" : "💪"}</div>
              <div className="text-3xl font-black">{popup.score}/{popup.max}</div>
              <div className="text-base font-semibold mt-2 opacity-90">{popup.passed ? t("arena.xpEarned").replace("{xp}", String(XP_PER_LEVEL)) : t("arena.tryAgain")}</div>
            </div>
          </div>
        )}
        <style>{`@keyframes popBounce{0%{transform:scale(0.3);opacity:0}70%{transform:scale(1.05)}100%{transform:scale(1);opacity:1}}`}</style>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${dark ? "bg-slate-900" : "bg-slate-50"}`}>
      <div className="mx-auto max-w-2xl px-4 py-6">
        <button type="button" onClick={() => { soundEngine.playClick(); onBack(); }}
          className={`mb-5 flex items-center gap-2 text-sm font-bold rounded-xl px-4 py-2.5 transition ${dark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-500 hover:text-slate-800 hover:bg-white shadow-sm"}`}>
          ← Alle seizoenen
        </button>
        <div className={`rounded-3xl p-6 mb-6 overflow-hidden relative ${dark ? "bg-slate-800" : "bg-white shadow-lg shadow-slate-100"}`}>
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
            style={{ background: `radial-gradient(circle, ${themeConfig.from}, transparent)` }} />
          <div className="relative flex items-center gap-4">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl text-4xl font-black text-white shadow-xl"
              style={{ background: `linear-gradient(135deg, ${themeConfig.from}, ${themeConfig.to})`, boxShadow: `0 12px 32px -6px ${themeConfig.shadow}` }}>
              {themeConfig.emoji}
            </div>
            <div className="flex-1">
              <div className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: themeConfig.from }}>{t("arena.season")} {season.id}</div>
              <h2 className={`text-2xl font-extrabold ${dark ? "text-white" : "text-slate-900"}`}>{season.title}</h2>
              <p className={`text-sm mt-0.5 ${dark ? "text-slate-400" : "text-slate-500"}`}>{totalDone}/{total} levels · {pct}%</p>
            </div>
            <button type="button" onClick={() => { soundEngine.playClick(); setShopOpen(true); }}
              aria-label={t("arena.shopTitle")}
              className={`shrink-0 flex items-center gap-1.5 rounded-2xl px-3 py-2 text-sm font-black shadow-sm transition ${dark ? "bg-slate-700 text-white hover:bg-slate-600" : "bg-white text-slate-700 hover:bg-slate-50"}`}>
              <span aria-hidden="true">🪙</span>{coins}
            </button>
          </div>
          <div className={`mt-5 h-3 rounded-full overflow-hidden ${dark ? "bg-slate-700" : "bg-slate-100"}`}>
            <div className="h-full rounded-full transition-all duration-700"
              style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${themeConfig.from}, ${themeConfig.to})` }} />
          </div>
        </div>
        <SnakePath levels={season.levels} completed={completed} onSelect={setActiveLvl} theme={themeConfig} />
        {pct === 100 && (
          <div className="text-center mt-4 py-6">
            <div className="text-5xl mb-2">🏁</div>
            <p className="font-black text-emerald-500 text-lg">{t("arena.seasonComplete")}</p>
          </div>
        )}
      </div>
      <CoinShop open={shopOpen} onClose={() => setShopOpen(false)} coins={coins} setCoins={setCoins} dark={dark} themeColor={themeConfig} />
    </div>
  );
}

// ─── ARENA HOME ────────────────────────────────────────────────────────────────
export default function ArenaPage() {
  const { user, updateProfile } = useAuth();
  const { theme } = useTheme();
  const { t } = useTranslate();
  const dark = theme === "dark";
  const nav = useNavigate();

  const lang = user?.currentLanguage ?? "nl";
  const [langIndex, setLangIndex] = useState<LangIndex | null>(null);
  const [loadingIndex, setLoadingIndex] = useState(true);
  const [loadingSeason, setLoadingSeason] = useState(false);
  const [activeSeason, setActiveSeason] = useState<Season | null>(null);
  const [activeTheme, setActiveTheme] = useState(SEASON_THEMES[0]);
  const [progressVersion, setProgressVersion] = useState(0);
  const award = useMemo(() => createXPAwarder(updateProfile), [updateProfile]);

  useEffect(() => {
    let cancelled = false;
    setLoadingIndex(true); setActiveSeason(null);
    fetchJson<LangIndex>(`/arena/${lang}/index.json`).then(d => {
      if (!cancelled) { setLangIndex(d); setLoadingIndex(false); }
    });
    return () => { cancelled = true; };
  }, [lang]);

  const unlocked = useMemo(() => unlockedSeasons(lang), [lang, progressVersion]);
  const seasons = langIndex?.seasons ?? [];

  const openSeason = async (seasonId: number, t: typeof SEASON_THEMES[0]) => {
    soundEngine.playClick();
    setLoadingSeason(true);
    const season = await fetchJson<Season>(`/arena/${lang}/season-${seasonId}.json`);
    setLoadingSeason(false);
    if (season) { setActiveSeason(season); setActiveTheme(t); }
  };

  if (activeSeason) {
    return <SeasonView season={activeSeason} lang={lang}
      onBack={() => { setActiveSeason(null); setProgressVersion(v => v + 1); }}
      award={award} themeConfig={activeTheme} premium={isPremiumActive(user)} />;
  }

  if (loadingIndex || loadingSeason) {
    return (
      <div className={`flex min-h-screen items-center justify-center ${dark ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-[3px] border-solid border-indigo-500 border-r-transparent mb-4" />
          <p className="text-sm font-bold text-slate-400">{t("arena.loading")}</p>
        </div>
      </div>
    );
  }

  const totalLevels = seasons.reduce((a, s) => a + s.levelCount, 0);
  const totalDone = seasons.reduce((a, s) => a + doneLvls(lang, s.id).length, 0);
  const overallPct = totalLevels ? Math.round((totalDone / totalLevels) * 100) : 0;

  return (
    <div className={`min-h-screen ${dark ? "bg-slate-900" : "bg-slate-50"}`}>
      <style>{`
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        .shimmer-text{background:linear-gradient(90deg,#6366f1,#8b5cf6,#ec4899,#6366f1);background-size:200%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:shimmer 3s linear infinite}
      `}</style>
      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <button type="button" onClick={() => { soundEngine.playClick(); nav("/dashboard"); }}
            className={`flex items-center gap-2 text-sm font-bold rounded-xl px-4 py-2.5 transition ${dark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-500 hover:text-slate-800 hover:bg-white shadow-sm border border-slate-100"}`}>
            ← Dashboard
          </button>
          <div className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-bold ${dark ? "bg-slate-800 text-white" : "bg-white text-slate-800 shadow-sm border border-slate-100"}`}>
            <span className="text-xl">{langFlags[lang] ?? "🌐"}</span>
            <span>{langNames[lang] ?? lang}</span>
          </div>
        </div>

        <div className={`rounded-3xl p-7 mb-8 overflow-hidden relative ${dark ? "bg-slate-800" : "bg-white shadow-xl shadow-slate-100 border border-slate-100"}`}>
          <div className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #6366f1, transparent)" }} />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #ec4899, transparent)" }} />
          <div className="relative">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Legend Mode</p>
                <h1 className="text-4xl font-black tracking-tight shimmer-text">🏆 Legend</h1>
                <p className={`mt-2 text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>{t("arena.tagline")}</p>
              </div>
              <div className={`shrink-0 rounded-2xl px-4 py-3 text-center ${dark ? "bg-slate-700" : "bg-slate-50"}`}>
                <div className="text-2xl font-black" style={{ color: "#6366f1" }}>{overallPct}%</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{t("arena.total")}</div>
              </div>
            </div>
            <div className={`h-3 rounded-full overflow-hidden mb-2 ${dark ? "bg-slate-700" : "bg-slate-100"}`}>
              <div className="h-full rounded-full transition-all duration-1000"
                style={{ width: `${overallPct}%`, background: "linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)" }} />
            </div>
            <p className={`text-xs font-medium ${dark ? "text-slate-500" : "text-slate-400"}`}>{totalDone}/{totalLevels} levels voltooid</p>
            <div className="flex items-center gap-4 mt-5 flex-wrap">
              {[
                { icon: "🔥", label: "Streak", val: `${user?.streak ?? 0} dagen` },
                { icon: "⚡", label: "Level", val: `${user?.level ?? 1}` },
                { icon: "✨", label: "XP", val: `${user?.totalXP?.toLocaleString() ?? 0}` },
              ].map(s => (
                <div key={s.label} className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm ${dark ? "bg-slate-700" : "bg-slate-50"}`}>
                  <span>{s.icon}</span>
                  <div>
                    <div className={`text-[10px] font-bold uppercase tracking-wide ${dark ? "text-slate-500" : "text-slate-400"}`}>{s.label}</div>
                    <div className={`text-sm font-black ${dark ? "text-white" : "text-slate-900"}`}>{s.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Question type legend */}
        <div className="mb-4 flex flex-wrap gap-2">
          {Object.entries(TYPE_META).map(([type, meta]) => (
            <div key={type} className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-black`}
              style={{ background: `${meta.color}15`, color: meta.color }}>
              {meta.icon} {t(meta.label as TranslationKey)}
            </div>
          ))}
        </div>

        {seasons.length === 0 ? (
          <div className={`text-center py-20 rounded-3xl border-2 border-dashed ${dark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
            <p className="text-5xl mb-4">📭</p>
            <p className={`text-lg font-bold ${dark ? "text-white" : "text-slate-800"}`}>{t("arena.noContent").replace("{lang}", langNames[lang])}</p>
            <p className="text-sm text-slate-400 mt-1">{t("arena.noContentNote").replace("{lang}", lang)}</p>
          </div>
        ) : (
          <div className="space-y-3">
            <h2 className={`text-xs font-black uppercase tracking-widest mb-4 ${dark ? "text-slate-500" : "text-slate-400"}`}>{t("arena.seasons")}</h2>
            {seasons.map((season, idx) => {
              const open = unlocked.includes(season.id);
              const done = doneLvls(lang, season.id);
              const allDone = season.levelCount > 0 && done.length >= season.levelCount;
              const pct = season.levelCount ? Math.round((done.length / season.levelCount) * 100) : 0;
              const st = SEASON_THEMES[idx % SEASON_THEMES.length];
              return (
                <button type="button" key={season.id} onClick={() => open && openSeason(season.id, st)} disabled={!open}
                  className={`w-full rounded-3xl border-2 p-5 text-left transition-all duration-300 group ${dark ? "bg-slate-800" : "bg-white"} ${
                    allDone ? "border-emerald-300 dark:border-emerald-500/30 shadow-md"
                    : open ? "border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-0.5"
                    : "border-slate-100 dark:border-slate-800 opacity-45 cursor-not-allowed"}`}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-3xl text-3xl font-black text-white transition-transform duration-300 group-hover:scale-105"
                      style={allDone ? { background: "linear-gradient(135deg,#10b981,#059669)", boxShadow: "0 8px 24px -4px rgba(16,185,129,0.4)" }
                        : open ? { background: `linear-gradient(135deg,${st.from},${st.to})`, boxShadow: `0 8px 24px -4px ${st.shadow}` }
                        : { background: dark ? "#1e293b" : "#f1f5f9" }}>
                      {allDone ? "✅" : open ? st.emoji : "🔒"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: open ? st.from : dark ? "#475569" : "#94a3b8" }}>
                            {t("arena.season")} {season.id} · {st.name}
                          </div>
                          <h3 className={`text-base font-extrabold leading-tight ${dark ? "text-white" : "text-slate-900"} ${!open ? "text-slate-400" : ""}`}>
                            {season.title}
                          </h3>
                        </div>
                        <div className={`shrink-0 rounded-2xl px-3 py-1.5 text-xs font-black ${
                          allDone ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                          : open ? "" : "bg-slate-100 text-slate-400 dark:bg-slate-700"}`}
                          style={open && !allDone ? { background: `${st.from}18`, color: st.from } : {}}>
                          {allDone ? `✓ ${t("arena.done")}` : open ? `${pct}%` : "🔒"}
                        </div>
                      </div>
                      <div className={`h-2 rounded-full overflow-hidden mt-2.5 ${dark ? "bg-slate-700" : "bg-slate-100"}`}>
                        <div className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${pct}%`, background: allDone ? "linear-gradient(90deg,#10b981,#059669)" : `linear-gradient(90deg,${st.from},${st.to})` }} />
                      </div>
                      <p className={`text-xs mt-1.5 ${dark ? "text-slate-500" : "text-slate-400"}`}>{done.length}/{season.levelCount} levels</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        <div className="mt-8 flex justify-center gap-6 text-xs font-semibold text-slate-400">
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-indigo-500" /> {t("arena.active")}</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" /> {t("arena.done")}</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full" style={{ background: "#334155" }} /> {t("arena.lockedLabel")}</span>
        </div>
      </div>
    </div>
  );
}