import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { createXPAwarder } from "@/utils/xp";
 
const XP_PER_LEVEL = 20;
const STORAGE = "langlearn_arena_v3";
type QType = "translation" | "multiple-choice" | "fill-blank";
 
interface Question { type: QType; question: string; answer: string; options: string[]; }
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
 
// ─── QUIZ ─────────────────────────────────────────────────────────────────────
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
  const q = questions[i];
  const ok = fb !== null;
 
  const check = () => {
    if (ok || !q) return;
    const ans = (q.type === "multiple-choice" ? chosen ?? "" : inp).trim();
    const good = ans.toLowerCase() === q.answer.toLowerCase();
    setFb(good ? "correct" : "wrong");
    if (good) setScore(v => v + 1);
  };
 
  const advance = () => {
    if (i + 1 >= questions.length) { onDone(score + (fb === "correct" ? 1 : 0), questions.length); return; }
    setI(v => v + 1); setInp(""); setChosen(null); setFb(null);
  };
 
  if (!q) return null;
  const pct = ((i + (ok ? 1 : 0)) / questions.length) * 100;
 
  return (
    <div className="w-full max-w-lg mx-auto">
      <style>{`
        @keyframes shakeX{0%,100%{transform:translateX(0)}20%{transform:translateX(-10px)}40%{transform:translateX(10px)}60%{transform:translateX(-6px)}80%{transform:translateX(6px)}}
        .shake{animation:shakeX .45s ease-out}
        @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        .fade-up{animation:fadeUp .25s ease-out}
        @keyframes scaleIn{0%{transform:scale(0.94);opacity:0}100%{transform:scale(1);opacity:1}}
        .scale-in{animation:scaleIn .2s cubic-bezier(.22,1,.36,1)}
      `}</style>
 
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-slate-400">{i + 1} / {questions.length}</span>
          <span className="text-xs font-bold" style={{ color: themeColor.from }}>{Math.round(pct)}%</span>
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
        <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-6"
          style={{ background: `${themeColor.from}18`, color: themeColor.from }}>
          {q.type === "translation" ? "🌍 Vertaal" : q.type === "fill-blank" ? "✏️ Vul in" : "🎯 Kies"}
        </div>
 
        {/* Question */}
        <p className={`text-2xl font-extrabold leading-snug mb-8 ${dark ? "text-white" : "text-slate-900"}`}>
          {q.question}
        </p>
 
        {/* Answer area */}
        {q.type === "multiple-choice" ? (
          <div className="space-y-3">
            {q.options.map((opt) => {
              const isCorrect = ok && opt === q.answer;
              const isWrong = ok && opt === chosen && opt !== q.answer;
              const isSelected = chosen === opt;
              return (
                <button key={opt} onClick={() => !ok && setChosen(opt)}
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
        ) : (
          <input type="text" value={inp} onChange={e => setInp(e.target.value)} disabled={ok}
            onKeyDown={e => { if (e.key === "Enter" && !ok) check(); }}
            placeholder="Typ je antwoord…" autoFocus
            className={`w-full rounded-2xl border-2 px-5 py-4 text-base font-semibold outline-none transition-all ${
              dark ? "bg-slate-700 text-white placeholder:text-slate-500" : "bg-slate-50 text-slate-900 placeholder:text-slate-400"
            } ${fb === "correct" ? "border-emerald-400" : fb === "wrong" ? "border-red-400" : "border-slate-200 dark:border-slate-600"}`}
            style={!fb ? { '--tw-ring-color': themeColor.from } as React.CSSProperties : {}}
            onFocus={e => { if (!fb) e.target.style.borderColor = themeColor.from; }}
            onBlur={e => { if (!fb) e.target.style.borderColor = ""; }}
          />
        )}
 
        {/* Feedback */}
        {ok && (
          <div className={`mt-5 rounded-2xl px-5 py-4 text-sm font-bold fade-up flex items-center gap-3 ${
            fb === "correct"
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/30"
              : "bg-red-50 text-red-700 border border-red-200 dark:bg-red-500/10 dark:text-red-300 dark:border-red-500/30"
          }`}>
            <span className="text-xl">{fb === "correct" ? "✅" : "❌"}</span>
            {fb === "correct" ? "Geweldig! Correct!" : <span>Goed antwoord: <strong className="text-base">{q.answer}</strong></span>}
          </div>
        )}
 
        {/* Buttons */}
        <div className="mt-6">
          {!ok ? (
            <button onClick={check} disabled={q.type === "multiple-choice" ? !chosen : !inp.trim()}
              className="w-full rounded-2xl py-4 text-base font-black text-white transition-all active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ background: `linear-gradient(135deg, ${themeColor.from}, ${themeColor.to})`, boxShadow: `0 8px 24px -4px ${themeColor.from}55` }}>
              CONTROLEER ✓
            </button>
          ) : (
            <button onClick={advance}
              className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 py-4 text-base font-black text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30 transition-all hover:from-emerald-600 hover:to-green-600 active:scale-[0.98]">
              {i + 1 >= questions.length ? "🏆 KLAAR!" : "VOLGENDE →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
 
// ─── SNAKE PATH ────────────────────────────────────────────────────────────────
function SnakePath({ levels, completed, onSelect, theme: themeConfig }: {
  levels: Level[];
  completed: number[];
  onSelect: (lvl: number) => void;
  theme: typeof SEASON_THEMES[0];
}) {
  const { theme } = useTheme();
  const dark = theme === "dark";
 
  // Group into rows of 3 alternating direction
  const rows: Level[][] = [];
  for (let i = 0; i < levels.length; i += 3) rows.push(levels.slice(i, i + 3));
 
  return (
    <div className="relative py-4">
      {rows.map((row, rowIdx) => {
        const reversed = rowIdx % 2 === 1;
        const displayRow = reversed ? [...row].reverse() : row;
 
        return (
          <div key={rowIdx} className="relative mb-2">
            {/* Row nodes */}
            <div className="relative flex items-center justify-around px-6">
              {/* Connecting line */}
              <div className={`absolute left-[12%] right-[12%] top-1/2 -translate-y-1/2 h-1.5 rounded-full ${dark ? "bg-slate-700" : "bg-slate-100"}`} />
 
              {displayRow.map((lvl) => {
                const done = completed.includes(lvl.level);
                const next = !done && (lvl.level === 1 || completed.includes(lvl.level - 1));
                const locked = !done && !next;
 
                return (
                  <div key={lvl.level} className="relative flex flex-col items-center z-10">
                    {/* Next level bouncing arrow */}
                    {next && (
                      <div className="absolute -top-8 text-lg" style={{ animation: "bounce 1s infinite" }}>👇</div>
                    )}
 
                    {/* Node */}
                    <button
                      onClick={() => !locked && onSelect(lvl.level)}
                      disabled={locked}
                      className={`relative flex h-[70px] w-[70px] items-center justify-center rounded-full border-4 text-lg font-black transition-all duration-300 ${
                        locked ? "cursor-not-allowed opacity-35" : "cursor-pointer"
                      } ${done ? "scale-105" : next ? "hover:scale-110" : ""}`}
                      style={
                        done ? {
                          background: "linear-gradient(135deg, #10b981, #059669)",
                          borderColor: "#34d399",
                          color: "white",
                          boxShadow: "0 8px 24px -4px rgba(16,185,129,0.5)"
                        } : next ? {
                          background: `linear-gradient(135deg, ${themeConfig.from}, ${themeConfig.to})`,
                          borderColor: themeConfig.from + "80",
                          color: "white",
                          boxShadow: `0 8px 24px -4px ${themeConfig.shadow}`,
                          animation: "nodePulse 2s ease-in-out infinite"
                        } : {
                          background: dark ? "#1e293b" : "#f1f5f9",
                          borderColor: dark ? "#334155" : "#e2e8f0",
                          color: dark ? "#475569" : "#94a3b8"
                        }
                      }>
                      {done ? "⭐" : next ? lvl.level : "🔒"}
                    </button>
 
                    {/* Label */}
                    <div className={`mt-2.5 text-center`}>
                      <div className={`text-xs font-black ${
                        done ? "text-emerald-500" : next ? "" : "text-slate-400"
                      }`}
                        style={next ? { color: themeConfig.from } : {}}>
                        {done ? "Klaar" : `Level ${lvl.level}`}
                      </div>
                      {next && (
                        <div className="text-[10px] text-slate-400 font-medium">{lvl.questions.length} vragen</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
 
            {/* Snake curve connector between rows */}
            {rowIdx < rows.length - 1 && (
              <div className="relative h-14 mx-4 mt-1">
                <div className={`absolute inset-0 rounded-b-[40px] border-b-[6px] border-dashed ${
                  dark ? "border-slate-700" : "border-slate-200"
                } ${reversed
                  ? "border-l-[6px] rounded-bl-[40px] rounded-br-none ml-[10%] mr-[75%]"
                  : "border-r-[6px] rounded-br-[40px] rounded-bl-none ml-[75%] mr-[10%]"
                }`} />
              </div>
            )}
          </div>
        );
      })}
 
      <style>{`
        @keyframes nodePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
}
 
// ─── SEASON VIEW ───────────────────────────────────────────────────────────────
function SeasonView({ season, lang, onBack, award, themeConfig }: {
  season: Season; lang: string; onBack: () => void; award: (n: number) => void;
  themeConfig: typeof SEASON_THEMES[0];
}) {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const [completed, setCompleted] = useState<number[]>(() => doneLvls(lang, season.id));
  const [activeLvl, setActiveLvl] = useState<number | null>(null);
  const [popup, setPopup] = useState<{ score: number; max: number; passed: boolean } | null>(null);
 
  const totalDone = completed.length;
  const total = season.levels.length;
  const pct = total ? Math.round((totalDone / total) * 100) : 0;
 
  const finishLvl = (score: number, max: number) => {
    if (!activeLvl) return;
    const passed = score >= Math.ceil(max * 0.6);
    if (passed) { complete(lang, season.id, activeLvl); setCompleted(doneLvls(lang, season.id)); award(XP_PER_LEVEL); }
    setPopup({ score, max, passed });
    setTimeout(() => { setPopup(null); setActiveLvl(null); }, 2500);
  };
 
  if (activeLvl) {
    const lvl = season.levels.find(l => l.level === activeLvl);
    return (
      <div className={`min-h-screen ${dark ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="mx-auto max-w-lg px-4 py-6">
          <button onClick={() => setActiveLvl(null)}
            className={`mb-6 flex items-center gap-2 text-sm font-bold rounded-xl px-4 py-2.5 transition ${dark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-500 hover:text-slate-800 hover:bg-white shadow-sm"}`}>
            ← Terug
          </button>
          {lvl && <Quiz questions={lvl.questions} onDone={finishLvl} themeColor={themeConfig} />}
        </div>
 
        {popup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-6">
            <div className={`w-full max-w-xs rounded-3xl p-8 text-center text-white`}
              style={{
                background: popup.passed ? "linear-gradient(135deg, #10b981, #059669)" : "linear-gradient(135deg, #f43f5e, #ec4899)",
                boxShadow: popup.passed ? "0 24px 64px -12px rgba(16,185,129,0.6)" : "0 24px 64px -12px rgba(244,63,94,0.6)",
                animation: "popBounce .5s cubic-bezier(.175,.885,.32,1.275)"
              }}>
              <div className="text-5xl mb-3">{popup.passed ? "🏆" : "💪"}</div>
              <div className="text-3xl font-black">{popup.score}/{popup.max}</div>
              <div className="text-base font-semibold mt-2 opacity-90">
                {popup.passed ? `+${XP_PER_LEVEL} XP verdiend!` : "Probeer het nogmaals!"}
              </div>
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
 
        {/* Back */}
        <button onClick={onBack}
          className={`mb-5 flex items-center gap-2 text-sm font-bold rounded-xl px-4 py-2.5 transition ${dark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-500 hover:text-slate-800 hover:bg-white shadow-sm"}`}>
          ← Alle seizoenen
        </button>
 
        {/* Season header card */}
        <div className={`rounded-3xl p-6 mb-6 overflow-hidden relative ${dark ? "bg-slate-800" : "bg-white shadow-lg shadow-slate-100"}`}>
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
            style={{ background: `radial-gradient(circle, ${themeConfig.from}, transparent)` }} />
 
          <div className="relative flex items-center gap-4">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl text-4xl font-black text-white shadow-xl"
              style={{ background: `linear-gradient(135deg, ${themeConfig.from}, ${themeConfig.to})`, boxShadow: `0 12px 32px -6px ${themeConfig.shadow}` }}>
              {themeConfig.emoji}
            </div>
            <div className="flex-1">
              <div className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: themeConfig.from }}>
                Seizoen {season.id}
              </div>
              <h2 className={`text-2xl font-extrabold ${dark ? "text-white" : "text-slate-900"}`}>{season.title}</h2>
              <p className={`text-sm mt-0.5 ${dark ? "text-slate-400" : "text-slate-500"}`}>{totalDone}/{total} levels · {pct}%</p>
            </div>
          </div>
 
          {/* Progress bar */}
          <div className={`mt-5 h-3 rounded-full overflow-hidden ${dark ? "bg-slate-700" : "bg-slate-100"}`}>
            <div className="h-full rounded-full transition-all duration-700"
              style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${themeConfig.from}, ${themeConfig.to})` }} />
          </div>
        </div>
 
        {/* Snake path */}
        <SnakePath
          levels={season.levels}
          completed={completed}
          onSelect={setActiveLvl}
          theme={themeConfig}
        />
 
        {/* Finish */}
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
    setLoadingSeason(true);
    const season = await fetchJson<Season>(`/arena/${lang}/season-${seasonId}.json`);
    setLoadingSeason(false);
    if (season) { setActiveSeason(season); setActiveTheme(t); }
  };
 
  if (activeSeason) {
    return (
      <SeasonView season={activeSeason} lang={lang}
        onBack={() => { setActiveSeason(null); setProgressVersion(v => v + 1); }}
        award={award} themeConfig={activeTheme} />
    );
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
 
  // Calculate overall stats
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
 
        {/* Top nav */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={() => nav("/dashboard")}
            className={`flex items-center gap-2 text-sm font-bold rounded-xl px-4 py-2.5 transition ${dark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-500 hover:text-slate-800 hover:bg-white shadow-sm border border-slate-100"}`}>
            ← Dashboard
          </button>
          <div className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-bold ${dark ? "bg-slate-800 text-white" : "bg-white text-slate-800 shadow-sm border border-slate-100"}`}>
            <span className="text-xl">{langFlags[lang] ?? "🌐"}</span>
            <span>{langNames[lang] ?? lang}</span>
          </div>
        </div>
 
        {/* Hero */}
        <div className={`rounded-3xl p-7 mb-8 overflow-hidden relative ${dark ? "bg-slate-800" : "bg-white shadow-xl shadow-slate-100 border border-slate-100"}`}>
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #6366f1, transparent)" }} />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #ec4899, transparent)" }} />
 
          <div className="relative">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Legend Mode</p>
                <h1 className="text-4xl font-black tracking-tight shimmer-text">🏆 Legend</h1>
                <p className={`mt-2 text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>
                  Doorloop seizoenen · Verdien XP · Word vloeiend
                </p>
              </div>
              <div className={`shrink-0 rounded-2xl px-4 py-3 text-center ${dark ? "bg-slate-700" : "bg-slate-50"}`}>
                <div className="text-2xl font-black" style={{ color: "#6366f1" }}>{overallPct}%</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Totaal</div>
              </div>
            </div>
 
            {/* Overall progress bar */}
            <div className={`h-3 rounded-full overflow-hidden mb-2 ${dark ? "bg-slate-700" : "bg-slate-100"}`}>
              <div className="h-full rounded-full transition-all duration-1000"
                style={{ width: `${overallPct}%`, background: "linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)" }} />
            </div>
            <p className={`text-xs font-medium ${dark ? "text-slate-500" : "text-slate-400"}`}>{totalDone}/{totalLevels} levels voltooid</p>
 
            {/* Stats row */}
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
 
        {/* Season grid */}
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
                  className={`w-full rounded-3xl border-2 p-5 text-left transition-all duration-300 group ${
                    dark ? "bg-slate-800" : "bg-white"
                  } ${
                    allDone ? "border-emerald-300 dark:border-emerald-500/30 shadow-md"
                    : open ? "border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-0.5"
                    : "border-slate-100 dark:border-slate-800 opacity-45 cursor-not-allowed"
                  }`}
                  style={open && !allDone ? { '--hover-border': t.from } as React.CSSProperties : {}}>
 
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className={`flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-3xl text-3xl font-black text-white transition-transform duration-300 group-hover:scale-105`}
                      style={
                        allDone ? { background: "linear-gradient(135deg, #10b981, #059669)", boxShadow: "0 8px 24px -4px rgba(16,185,129,0.4)" }
                        : open ? { background: `linear-gradient(135deg, ${t.from}, ${t.to})`, boxShadow: `0 8px 24px -4px ${t.shadow}` }
                        : { background: dark ? "#1e293b" : "#f1f5f9" }
                      }>
                      {allDone ? "✅" : open ? t.emoji : "🔒"}
                    </div>
 
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-widest mb-0.5"
                            style={{ color: open ? t.from : dark ? "#475569" : "#94a3b8" }}>
                            Seizoen {season.id} · {t.name}
                          </div>
                          <h3 className={`text-base font-extrabold leading-tight ${
                            dark ? "text-white" : "text-slate-900"
                          } ${!open ? "text-slate-400" : ""}`}>
                            {season.title}
                          </h3>
                        </div>
                        <div className={`shrink-0 rounded-2xl px-3 py-1.5 text-xs font-black ${
                          allDone ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                          : open ? "" : "bg-slate-100 text-slate-400 dark:bg-slate-700"
                        }`}
                          style={open && !allDone ? { background: `${t.from}18`, color: t.from } : {}}>
                          {allDone ? "✓ Klaar" : open ? `${pct}%` : "🔒"}
                        </div>
                      </div>
 
                      {/* Mini progress bar */}
                      <div className={`h-2 rounded-full overflow-hidden mt-2.5 ${dark ? "bg-slate-700" : "bg-slate-100"}`}>
                        <div className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${pct}%`,
                            background: allDone
                              ? "linear-gradient(90deg, #10b981, #059669)"
                              : `linear-gradient(90deg, ${t.from}, ${t.to})`
                          }} />
                      </div>
                      <p className={`text-xs mt-1.5 ${dark ? "text-slate-500" : "text-slate-400"}`}>
                        {done.length}/{season.levelCount} levels
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
 
        {/* Legend */}
        <div className="mt-8 flex justify-center gap-6 text-xs font-semibold text-slate-400">
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-indigo-500" /> Actief</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Klaar</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full" style={{ background: "#334155" }} /> Vergrendeld</span>
        </div>
      </div>
    </div>
  );
}