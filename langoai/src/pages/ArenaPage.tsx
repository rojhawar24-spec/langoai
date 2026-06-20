import { useEffect, useMemo, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { createXPAwarder } from "@/utils/xp";

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
  | "click-word";

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
}

interface Level { level: number; questions: Question[]; }
interface SeasonMeta { id: number; title: string; levelCount: number; }
interface Season { id: number; title: string; levels: Level[]; }
interface LangIndex { name: string; seasons: SeasonMeta[]; }
interface Progress { completed: Record<string, number[]>; unlocked: Record<string, number[]>; }

const langFlags: Record<string, string> = { nl: "🇳🇱", en: "🇬🇧", fr: "🇫🇷", de: "🇩🇪", es: "🇪🇸" };
const langNames: Record<string, string> = { nl: "Dutch", en: "English", fr: "French", de: "German", es: "Spanish" };

const SEASON_THEMES = [
  { from: "#6366f1", to: "#8b5cf6", shadow: "rgba(99,102,241,0.35)", emoji: "🌱", name: "Beginner" },
  { from: "#f59e0b", to: "#f97316", shadow: "rgba(245,158,11,0.35)", emoji: "🔥", name: "Explorer" },
  { from: "#10b981", to: "#059669", shadow: "rgba(16,185,129,0.35)", emoji: "⚡", name: "Achiever" },
  { from: "#ec4899", to: "#f43f5e", shadow: "rgba(236,72,153,0.35)", emoji: "💫", name: "Pro" },
  { from: "#0ea5e9", to: "#6366f1", shadow: "rgba(14,165,233,0.35)", emoji: "🏆", name: "Master" },
];

const TYPE_META: Record<QType, { label: string; icon: string; color: string }> = {
  "translation": { label: "Vertaal", icon: "🌍", color: "#6366f1" },
  "multiple-choice": { label: "Kies het juiste", icon: "🎯", color: "#f59e0b" },
  "fill-blank": { label: "Vul in", icon: "✏️", color: "#10b981" },
  "composition": { label: "Schrijf", icon: "✍️", color: "#ec4899" },
  "listening": { label: "Luister", icon: "👂", color: "#0ea5e9" },
  "picture-sentence": { label: "Plaatje & Zin", icon: "🖼️", color: "#8b5cf6" },
  "qa": { label: "Vraag & Antwoord", icon: "💬", color: "#f97316" },
  "who-does-what": { label: "Wie doet wat?", icon: "👤", color: "#059669" },
  "order-sentences": { label: "Zet in volgorde", icon: "🔢", color: "#f43f5e" },
  "opposites": { label: "Tegenstellingen", icon: "↔️", color: "#6366f1" },
  "listen-answer": { label: "Luister & Antwoord", icon: "🎧", color: "#0ea5e9" },
  "fill-dialogue": { label: "Dialoog aanvullen", icon: "💬", color: "#ec4899" },
  "odd-one-out": { label: "Vreemde eend", icon: "🧠", color: "#f59e0b" },
  "complete-story": { label: "Maak af", icon: "📝", color: "#10b981" },
  "correct-the-error": { label: "Verbeter de fout", icon: "🎭", color: "#f43f5e" },
  "true-false": { label: "Juist of fout", icon: "✔️", color: "#6366f1" },
  "listen-count": { label: "Luister & tel", icon: "🔊", color: "#0ea5e9" },
  "four-images-one-word": { label: "4 plaatjes 1 woord", icon: "🖼️", color: "#8b5cf6" },
  "match-pairs": { label: "Combineren", icon: "🔗", color: "#f97316" },
  "sort-category": { label: "Sorteerspel", icon: "📦", color: "#059669" },
  "speed-tap": { label: "Snel tikken", icon: "🏃", color: "#f43f5e" },
  "word-chain": { label: "Woordenslang", icon: "🎲", color: "#10b981" },
  "click-word": { label: "Klik het woord", icon: "🎯", color: "#f59e0b" },
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
function speak(text: string, speed: SpeechSpeed = "normal") {
  if (!('speechSynthesis' in window)) return;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) { window.speechSynthesis.onvoiceschanged = () => speak(text, speed); return; }
  const utter = new SpeechSynthesisUtterance(text);
  const googleNL = voices.find(v => v.lang.startsWith('nl') && v.name.includes('Google'));
  const naturalNL = voices.find(v => v.lang.startsWith('nl') && v.name.includes('Natural'));
  const localNL = voices.find(v => v.lang.startsWith('nl') && v.localService);
  const anyNL = voices.find(v => v.lang.startsWith('nl'));
  utter.voice = googleNL || naturalNL || localNL || anyNL || voices[0];
  utter.lang = utter.voice?.lang || 'nl-NL';
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
    <button onClick={onClick}
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
          <p className={`mt-2 text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>Plaatje (voeg imageUrl toe in JSON)</p>
        </div>
      )}
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>Welke zin beschrijft dit plaatje?</p>
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
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>Kies het juiste antwoord:</p>
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
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>Sleep de zinnen/woorden in de juiste volgorde 👇</p>
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
                <button onClick={() => moveUp(posIdx)} className={`text-xs px-2 py-1 rounded-lg font-bold transition ${dark ? "text-slate-400 hover:text-white hover:bg-slate-600" : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"}`}>▲</button>
                <button onClick={() => moveDown(posIdx)} className={`text-xs px-2 py-1 rounded-lg font-bold transition ${dark ? "text-slate-400 hover:text-white hover:bg-slate-600" : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"}`}>▼</button>
              </div>
            )}
          </div>
        ))}
      </div>
      {!submitted && (
        <button onClick={handleSubmit}
          className="w-full rounded-2xl py-3 text-sm font-black text-white transition-all active:scale-[0.98]"
          style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})` }}>
          CONTROLEER VOLGORDE ✓
        </button>
      )}
      {submitted && (
        <>
          <div className={`rounded-2xl px-4 py-3 text-sm font-bold flex items-start gap-2 ${
            correct ? "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300"
            : "bg-red-50 text-red-700 border border-red-200 dark:bg-red-500/10 dark:text-red-300"
          }`}>
            <span className="text-lg flex-shrink-0">{correct ? "✅" : "❌"}</span>
            <span>{correct ? "Perfecte volgorde!" : <span>Juiste volgorde: <strong>{correctOrder.map(i => sentences[i]).join(" → ")}</strong></span>}</span>
          </div>
          <button onClick={handleConfirm} className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 py-3 text-sm font-black text-white shadow-lg transition-all hover:from-emerald-600 hover:to-green-600 active:scale-[0.98]">VOLGENDE →</button>
        </>
      )}
    </div>
  );
}

// 4. opposites
function OppositesQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
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
      <p className={`text-sm font-semibold text-center ${dark ? "text-slate-400" : "text-slate-500"}`}>Wat is het tegendeel?</p>
      <div className="grid grid-cols-3 gap-2">
        {q.options.map(opt => {
          const state = !done ? (chosen === opt ? "selected" : "idle") : opt === q.answer ? "correct" : chosen === opt ? "wrong" : "idle";
          return (
            <button key={opt} onClick={() => handlePick(opt)}
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
          <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>Kies het juiste antwoord:</p>
          <div className="grid grid-cols-3 gap-2">
            {q.options.map(opt => (
              <button key={opt} onClick={() => handlePick(opt)}
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
          {chosen === q.answer ? "✅ Perfecte dialoog!" : <>❌ Juist antwoord: <strong className="ml-1">{q.answer}</strong></>}
        </div>
      )}
    </div>
  );
}

// 6. odd-one-out
function OddOneOutQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
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
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>Welk woord hoort er <strong>niet</strong> bij de andere?</p>
      <div className="grid grid-cols-2 gap-3">
        {q.options.map(opt => {
          const state = !done ? (chosen === opt ? "selected" : "idle") : opt === q.answer ? "correct" : chosen === opt ? "wrong" : "idle";
          return (
            <button key={opt} onClick={() => handlePick(opt)}
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
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>Hoe gaat het verhaal verder?</p>
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
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>🎭 Verbeter de fout in deze zin:</p>
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
        <span className="text-red-400">✗ Fout woord:</span>
        <span className={`px-2 py-0.5 rounded-lg text-red-600 font-black ${dark ? "bg-red-500/20" : "bg-red-100"}`}>{errorWord}</span>
        <span>→ Typ het juiste woord:</span>
      </div>
      {!submitted ? (
        <div className="flex gap-2">
          <input type="text" value={inp} onChange={e => setInp(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter") handleSubmit(); }}
            placeholder={`Juist woord...`} autoFocus
            className={`flex-1 rounded-2xl border-2 px-4 py-3 text-base font-bold outline-none transition ${dark ? "bg-slate-700 text-white border-slate-600 placeholder:text-slate-500" : "bg-white text-slate-900 border-slate-200 placeholder:text-slate-400"}`}
          />
          <button onClick={handleSubmit} disabled={!inp.trim()}
            className="rounded-2xl px-5 py-3 text-sm font-black text-white transition disabled:opacity-30"
            style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})` }}>
            ✓
          </button>
        </div>
      ) : (
        <div className={`rounded-2xl px-4 py-3 text-sm font-bold flex items-center gap-2 ${
          correct ? "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300" : "bg-red-50 text-red-700 border border-red-200 dark:bg-red-500/10 dark:text-red-300"
        }`}>
          {correct ? `✅ Perfect! "${errorWord}" → "${q.answer}" — jij bent een echte leraar!` : <>❌ Juist: <strong className="ml-1 text-base">{q.answer}</strong></>}
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
            <button key={opt} onClick={() => handlePick(opt)}
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
        🎧 Luister naar het fragment. Hoe vaak hoor je het woord?
      </p>
      {audioSrc && <audio src={audioSrc} controls className="w-full" />}
      <div className="grid grid-cols-5 gap-2 mt-4">
        {Array.from({ length: maxCount + 2 }, (_, i) => (
          <button key={i} onClick={() => handleCount(i)}
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
            <img src={src} alt={`plaatje ${idx+1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>Welk woord past bij deze vier plaatjes?</p>
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
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>Koppel elk woord aan de juiste betekenis</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {words.map(word => (
            <button key={word} onClick={() => handleWordClick(word)}
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
              <button key={meaning} onClick={() => handleWordClick(meaning)}
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
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>Sleep elk woord naar de juiste categorie</p>
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
          <button key={w} onClick={() => {
            // quick assign to first category for demo, should be improved with drag & drop
            const firstCat = categories[0];
            handleDrop(w, firstCat);
          }} className="px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border text-sm font-bold">
            {w}
          </button>
        ))}
      </div>
      {!done && (
        <button onClick={checkAllCorrect}
          className="w-full rounded-2xl py-3 text-sm font-black text-white"
          style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})` }}>
          Controleer
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
          <button key={w} onClick={() => handleClick(w)}
            className="rounded-2xl border-2 px-3 py-3 text-sm font-black"
            disabled={!started || done}
            style={{ borderColor: dark ? "#475569" : "#cbd5e1" }}>
            {w}
          </button>
        ))}
      </div>
      {!started && (
        <button onClick={handleStart} className="w-full rounded-2xl py-3 text-sm font-black text-white"
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
      setError(`Moet beginnen met: "${lastLetter}"`); return;
    }
    if (!validWords.includes(word)) {
      setError("Geen geldig woord"); return;
    }
    if (chain.includes(word)) {
      setError("Al gebruikt"); return;
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
      <p className={`text-sm font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}>Maak een woordenketting:</p>
      <div className="flex flex-wrap gap-2">
        {chain.map(w => (
          <span key={w} className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 font-bold">{w}</span>
        ))}
      </div>
      {!done && (
        <div className="flex gap-2">
          <input type="text" value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleAdd()}
            placeholder="Volgende woord..." className={`flex-1 rounded-xl border-2 px-4 py-2 ${dark ? "bg-slate-700 text-white border-slate-600" : "bg-white border-slate-200"}`}
          />
          <button onClick={handleAdd}
            className="rounded-xl px-4 py-2 text-white font-black"
            style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})` }}>
            +
          </button>
        </div>
      )}
      {error && <p className="text-red-500 text-xs">{error}</p>}
      {done && <p className="text-emerald-500 font-bold">✅ Ketting compleet!</p>}
    </div>
  );
}

// 16. click-word
function ClickWordQ({ q, onAnswer, dark, themeColor }: { q: Question; onAnswer: (correct: boolean) => void; dark: boolean; themeColor: { from: string; to: string } }) {
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
        Klik op het juiste woord in de zin:
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
        <p className="text-sm text-red-500">Het juiste woord was: <strong>{target}</strong></p>
      )}
    </div>
  );
}

// ─── QUIZ COMPONENT ───────────────────────────────────────────────────────────
function Quiz({ questions, onDone, themeColor }: {
  questions: Question[];
  onDone: (score: number, max: number) => void;
  themeColor: { from: string; to: string };
}) {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const [i, setI] = useState(0);
  const [inp, setInp] = useState("");
  const [chosen, setChosen] = useState<string | null>(null);
  const [fb, setFb] = useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = useState(0);
  const [speechSpeed, setSpeechSpeed] = useState<SpeechSpeed>("normal");
  const [muted, setMuted] = useState(soundEngine.isMuted());
  const [newTypeAnswered, setNewTypeAnswered] = useState(false);

  const q = questions[i];
  const ok = fb !== null;

  const SELF_HANDLED_TYPES: QType[] = [
    "picture-sentence", "qa", "order-sentences", "opposites",
    "fill-dialogue", "odd-one-out", "complete-story", "correct-the-error",
    "true-false", "listen-count", "four-images-one-word",
    "match-pairs", "sort-category", "speed-tap", "word-chain", "click-word"
  ];
  const isSelfHandled = q && SELF_HANDLED_TYPES.includes(q.type);

  useEffect(() => { soundEngine.setMuted(muted); }, [muted]);
  useEffect(() => { setNewTypeAnswered(false); }, [i]);

  const handleNewTypeAnswer = useCallback((correct: boolean) => {
    setNewTypeAnswered(true);
    if (correct) setScore(v => v + 1);
  }, []);

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
    if (good) { setScore(v => v + 1); soundEngine.playCorrect(); } else soundEngine.playWrong();
  }, [ok, q, inp, chosen]);

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
          <div className="flex items-center gap-2">
            <button onClick={() => setMuted(m => !m)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition ${dark ? "bg-slate-700 hover:bg-slate-600" : "bg-slate-100 hover:bg-slate-200"}`}
              title={muted ? "Geluid aan" : "Geluid uit"}>
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

      {/* Card */}
      <div className={`rounded-3xl border-2 p-7 transition-all duration-300 ${dark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100 shadow-xl shadow-slate-100"} ${
        fb === "correct" ? "!border-emerald-400" : fb === "wrong" ? "!border-red-400 shake" : ""
      }`}>

        {/* Type badge */}
        <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-5"
          style={{ background: `${meta.color}18`, color: meta.color }}>
          {meta.icon} {meta.label}
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
                  <button key={s} onClick={() => { setSpeechSpeed(s); soundEngine.playClick(); }}
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
                    <button key={opt} onClick={() => handleChoose(opt)}
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
                <textarea value={inp} onChange={e => setInp(e.target.value)} disabled={ok}
                  placeholder="Schrijf je antwoord…" rows={3}
                  className={`w-full rounded-2xl border-2 px-5 py-4 text-base font-semibold outline-none transition-all ${dark ? "bg-slate-700 text-white placeholder:text-slate-500" : "bg-slate-50 text-slate-900 placeholder:text-slate-400"} border-slate-200 dark:border-slate-600`} />
                {ok && (<div className="mt-3 rounded-2xl bg-emerald-50 text-emerald-700 px-5 py-4 text-sm font-bold border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/30">✅ Opdracht voltooid!</div>)}
              </div>
            ) : (
              <input type="text" value={inp} onChange={e => setInp(e.target.value)} disabled={ok}
                onKeyDown={e => { if (e.key === "Enter" && !ok) handleCheck(); }}
                placeholder="Typ je antwoord…" autoFocus
                className={`w-full rounded-2xl border-2 px-5 py-4 text-base font-semibold outline-none transition-all ${dark ? "bg-slate-700 text-white placeholder:text-slate-500" : "bg-slate-50 text-slate-900 placeholder:text-slate-400"} ${fb === "correct" ? "border-emerald-400" : fb === "wrong" ? "border-red-400" : "border-slate-200 dark:border-slate-600"}`}
                onFocus={e => { if (!fb) e.target.style.borderColor = themeColor.from; }}
                onBlur={e => { if (!fb) e.target.style.borderColor = ""; }}
              />
            )}

            {/* Classic feedback */}
            {ok && q.type !== "composition" && (
              <div className={`mt-5 rounded-2xl px-5 py-4 text-sm font-bold fade-up flex items-center gap-3 ${
                fb === "correct" ? "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/30"
                : "bg-red-50 text-red-700 border border-red-200 dark:bg-red-500/10 dark:text-red-300 dark:border-red-500/30"
              }`}>
                <span className="text-xl">{fb === "correct" ? "✅" : "❌"}</span>
                {fb === "correct" ? "Geweldig! Correct!" : <span>Goed antwoord: <strong className="text-base">{q.answer}</strong></span>}
              </div>
            )}

            {/* Classic action buttons */}
            <div className="mt-6">
              {!ok ? (
                <button onClick={handleCheck}
                  disabled={q.type === "multiple-choice" ? !chosen : q.type === "composition" ? !inp.trim() : !inp.trim()}
                  className="w-full rounded-2xl py-4 text-base font-black text-white transition-all active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})`, boxShadow: `0 8px 24px -4px ${themeColor.from}55` }}>
                  {q.type === "composition" ? "INLEVEREN ✍️" : "CONTROLEER ✓"}
                </button>
              ) : (
                <button onClick={handleAdvance}
                  className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 py-4 text-base font-black text-white shadow-lg transition-all hover:from-emerald-600 hover:to-green-600 active:scale-[0.98]">
                  {i + 1 >= questions.length ? "🏆 KLAAR!" : "VOLGENDE →"}
                </button>
              )}
            </div>
          </>
        )}

        {/* NEW TYPE RENDERERS */}
        {isSelfHandled && (
          <>
            {!["order-sentences", "odd-one-out", "picture-sentence", "fill-dialogue", "correct-the-error", "complete-story"].includes(q.type) && (
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

            {newTypeAnswered && (
              <button onClick={handleAdvance}
                className="w-full mt-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 py-4 text-base font-black text-white shadow-lg transition-all hover:from-emerald-600 hover:to-green-600 active:scale-[0.98] fade-up">
                {i + 1 >= questions.length ? "🏆 KLAAR!" : "VOLGENDE →"}
              </button>
            )}
          </>
        )}
      </div>
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
                    <button onClick={() => !locked && (soundEngine.playClick(), onSelect(lvl.level))} disabled={locked}
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
function SeasonView({ season, lang, onBack, award, themeConfig }: {
  season: Season; lang: string; onBack: () => void; award: (n: number) => void; themeConfig: typeof SEASON_THEMES[0];
}) {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const [completed, setCompleted] = useState<number[]>(() => doneLvls(lang, season.id));
  const [activeLvl, setActiveLvl] = useState<number | null>(null);
  const [popup, setPopup] = useState<{ score: number; max: number; passed: boolean } | null>(null);

  const totalDone = completed.length; const total = season.levels.length;
  const pct = total ? Math.round((totalDone / total) * 100) : 0;

  const finishLvl = (score: number, max: number) => {
    if (!activeLvl) return;
    const passed = score >= Math.ceil(max * 0.6);
    if (passed) {
      complete(lang, season.id, activeLvl);
      const prevUnlocked = unlockedSeasons(lang);
      setCompleted(doneLvls(lang, season.id));
      award(XP_PER_LEVEL);
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
          <button onClick={() => { soundEngine.playClick(); setActiveLvl(null); }}
            className={`mb-6 flex items-center gap-2 text-sm font-bold rounded-xl px-4 py-2.5 transition ${dark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-500 hover:text-slate-800 hover:bg-white shadow-sm"}`}>
            ← Terug
          </button>
          {lvl && <Quiz questions={lvl.questions} onDone={finishLvl} themeColor={themeConfig} />}
        </div>
        {popup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-6">
            <div className="w-full max-w-xs rounded-3xl p-8 text-center text-white"
              style={{ background: popup.passed ? "linear-gradient(135deg,#10b981,#059669)" : "linear-gradient(135deg,#f43f5e,#ec4899)", boxShadow: popup.passed ? "0 24px 64px -12px rgba(16,185,129,0.6)" : "0 24px 64px -12px rgba(244,63,94,0.6)", animation: "popBounce .5s cubic-bezier(.175,.885,.32,1.275)" }}>
              <div className="text-5xl mb-3">{popup.passed ? "🏆" : "💪"}</div>
              <div className="text-3xl font-black">{popup.score}/{popup.max}</div>
              <div className="text-base font-semibold mt-2 opacity-90">{popup.passed ? `+${XP_PER_LEVEL} XP verdiend!` : "Probeer het nogmaals!"}</div>
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
        <button onClick={() => { soundEngine.playClick(); onBack(); }}
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
              <div className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: themeConfig.from }}>Seizoen {season.id}</div>
              <h2 className={`text-2xl font-extrabold ${dark ? "text-white" : "text-slate-900"}`}>{season.title}</h2>
              <p className={`text-sm mt-0.5 ${dark ? "text-slate-400" : "text-slate-500"}`}>{totalDone}/{total} levels · {pct}%</p>
            </div>
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
            <p className="font-black text-emerald-500 text-lg">Seizoen voltooid!</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── ARENA HOME ────────────────────────────────────────────────────────────────
export default function ArenaPage() {
  const { user, updateProfile } = useAuth();
  const { theme } = useTheme();
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
      award={award} themeConfig={activeTheme} />;
  }

  if (loadingIndex || loadingSeason) {
    return (
      <div className={`flex min-h-screen items-center justify-center ${dark ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-[3px] border-solid border-indigo-500 border-r-transparent mb-4" />
          <p className="text-sm font-bold text-slate-400">Even laden…</p>
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
          <button onClick={() => { soundEngine.playClick(); nav("/dashboard"); }}
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
                <p className={`mt-2 text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>Doorloop seizoenen · Verdien XP · Word vloeiend</p>
              </div>
              <div className={`shrink-0 rounded-2xl px-4 py-3 text-center ${dark ? "bg-slate-700" : "bg-slate-50"}`}>
                <div className="text-2xl font-black" style={{ color: "#6366f1" }}>{overallPct}%</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Totaal</div>
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
              {meta.icon} {meta.label}
            </div>
          ))}
        </div>

        {seasons.length === 0 ? (
          <div className={`text-center py-20 rounded-3xl border-2 border-dashed ${dark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
            <p className="text-5xl mb-4">📭</p>
            <p className={`text-lg font-bold ${dark ? "text-white" : "text-slate-800"}`}>Geen content voor {langNames[lang]}</p>
            <p className="text-sm text-slate-400 mt-1">Voeg bestanden toe aan public/arena/{lang}/</p>
          </div>
        ) : (
          <div className="space-y-3">
            <h2 className={`text-xs font-black uppercase tracking-widest mb-4 ${dark ? "text-slate-500" : "text-slate-400"}`}>Seizoenen</h2>
            {seasons.map((season, idx) => {
              const open = unlocked.includes(season.id);
              const done = doneLvls(lang, season.id);
              const allDone = season.levelCount > 0 && done.length >= season.levelCount;
              const pct = season.levelCount ? Math.round((done.length / season.levelCount) * 100) : 0;
              const t = SEASON_THEMES[idx % SEASON_THEMES.length];
              return (
                <button key={season.id} onClick={() => open && openSeason(season.id, t)} disabled={!open}
                  className={`w-full rounded-3xl border-2 p-5 text-left transition-all duration-300 group ${dark ? "bg-slate-800" : "bg-white"} ${
                    allDone ? "border-emerald-300 dark:border-emerald-500/30 shadow-md"
                    : open ? "border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-0.5"
                    : "border-slate-100 dark:border-slate-800 opacity-45 cursor-not-allowed"}`}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-3xl text-3xl font-black text-white transition-transform duration-300 group-hover:scale-105"
                      style={allDone ? { background: "linear-gradient(135deg,#10b981,#059669)", boxShadow: "0 8px 24px -4px rgba(16,185,129,0.4)" }
                        : open ? { background: `linear-gradient(135deg,${t.from},${t.to})`, boxShadow: `0 8px 24px -4px ${t.shadow}` }
                        : { background: dark ? "#1e293b" : "#f1f5f9" }}>
                      {allDone ? "✅" : open ? t.emoji : "🔒"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: open ? t.from : dark ? "#475569" : "#94a3b8" }}>
                            Seizoen {season.id} · {t.name}
                          </div>
                          <h3 className={`text-base font-extrabold leading-tight ${dark ? "text-white" : "text-slate-900"} ${!open ? "text-slate-400" : ""}`}>
                            {season.title}
                          </h3>
                        </div>
                        <div className={`shrink-0 rounded-2xl px-3 py-1.5 text-xs font-black ${
                          allDone ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                          : open ? "" : "bg-slate-100 text-slate-400 dark:bg-slate-700"}`}
                          style={open && !allDone ? { background: `${t.from}18`, color: t.from } : {}}>
                          {allDone ? "✓ Klaar" : open ? `${pct}%` : "🔒"}
                        </div>
                      </div>
                      <div className={`h-2 rounded-full overflow-hidden mt-2.5 ${dark ? "bg-slate-700" : "bg-slate-100"}`}>
                        <div className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${pct}%`, background: allDone ? "linear-gradient(90deg,#10b981,#059669)" : `linear-gradient(90deg,${t.from},${t.to})` }} />
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
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-indigo-500" /> Actief</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Klaar</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full" style={{ background: "#334155" }} /> Vergrendeld</span>
        </div>
      </div>
    </div>
  );
}