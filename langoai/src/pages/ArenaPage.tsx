import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { createXPAwarder } from "@/utils/xp";

const XP_PER_LEVEL = 20;
const STORAGE = "langlearn_arena_v3";

type QType = "translation" | "multiple-choice" | "fill-blank";

interface Question {
  type: QType;
  question: string;
  answer: string;
  options: string[];
}

interface Level {
  level: number;
  questions: Question[];
}

interface SeasonMeta {
  id: number;
  title: string;
  levelCount: number;
}

interface Season {
  id: number;
  title: string;
  levels: Level[];
}

interface LangIndex {
  name: string;
  seasons: SeasonMeta[];
}

interface Progress {
  completed: Record<string, number[]>;
  unlocked: Record<string, number[]>;
}

const langFlags: Record<string, string> = {
  nl: "NL",
  en: "EN",
  fr: "FR",
  de: "DE",
  es: "ES",
};

const langNames: Record<string, string> = {
  nl: "Dutch",
  en: "English",
  fr: "French",
  de: "German",
  es: "Spanish",
};

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

function load(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE);
    return raw ? (JSON.parse(raw) as Progress) : { completed: {}, unlocked: {} };
  } catch {
    return { completed: {}, unlocked: {} };
  }
}

function save(progress: Progress) {
  localStorage.setItem(STORAGE, JSON.stringify(progress));
}

function doneLvls(lang: string, sid: number): number[] {
  return load().completed?.[`${lang}-${sid}`] ?? [];
}

function unlockedSeasons(lang: string): number[] {
  return load().unlocked?.[lang] ?? [1];
}

function complete(lang: string, sid: number, lvl: number) {
  const progress = load();
  const key = `${lang}-${sid}`;

  progress.completed[key] ??= [];
  if (!progress.completed[key].includes(lvl)) {
    progress.completed[key].push(lvl);
  }

  progress.unlocked[lang] ??= [1];
  if (progress.completed[key].length >= 10 && !progress.unlocked[lang].includes(sid + 1)) {
    progress.unlocked[lang].push(sid + 1);
  }

  save(progress);
}

function Quiz({ questions, onDone }: { questions: Question[]; onDone: (score: number, max: number) => void }) {
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

    const userAnswer = (q.type === "multiple-choice" ? chosen ?? "" : inp).trim();
    const good = userAnswer.toLowerCase() === q.answer.toLowerCase();

    setFb(good ? "correct" : "wrong");
    if (good) setScore((value) => value + 1);
  };

  const advance = () => {
    if (i + 1 >= questions.length) {
      onDone(score + (fb === "correct" ? 1 : 0), questions.length);
      return;
    }

    setI((value) => value + 1);
    setInp("");
    setChosen(null);
    setFb(null);
  };

  if (!q) {
    return <div className="text-center font-bold text-slate-500">No questions</div>;
  }

  return (
    <div className="flex flex-col items-center w-full animate-slideup">
      <div className="w-full mb-5">
        <div className="flex justify-between text-xs font-medium text-slate-400 mb-2">
          <span>Question</span>
          <span>{i + 1}/{questions.length}</span>
        </div>
        <div className="h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500 ease-out"
            style={{ width: `${((i + (ok ? 1 : 0)) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div
        className={`w-full rounded-[2rem] border-2 p-7 sm:p-9 shadow-xl transition-all duration-300 ${
          dark ? "bg-slate-800 border-slate-600" : "bg-white border-slate-200"
        } ${fb === "correct" ? "!border-green-400 shadow-green-200/20" : fb === "wrong" ? "!border-red-400 animate-shake" : ""}`}
      >
        <span
          className={`inline-block rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider mb-5 ${
            dark ? "bg-indigo-500/20 text-indigo-300" : "bg-indigo-100 text-indigo-600"
          }`}
        >
          {q.type === "translation" ? "Translate" : q.type === "fill-blank" ? "Fill In" : "Multiple Choice"}
        </span>

        <p className={`text-xl sm:text-2xl font-extrabold mb-7 leading-snug ${dark ? "text-white" : "text-slate-800"}`}>
          {q.question}
        </p>

        {q.type === "multiple-choice" ? (
          <div className="space-y-3">
            {q.options.map((opt) => (
              <button
                key={opt}
                onClick={() => !ok && setChosen(opt)}
                className={`w-full rounded-2xl border-2 px-5 py-4 text-left font-bold transition-all duration-200 ${
                  ok && opt === q.answer
                    ? "border-green-400 bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-300"
                    : ok && opt === chosen && opt !== q.answer
                    ? "border-red-400 bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300"
                    : chosen === opt
                    ? "border-indigo-400 bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                    : dark
                    ? "border-slate-600 text-slate-300 hover:border-slate-400 hover:bg-slate-700"
                    : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        ) : (
          <input
            type="text"
            value={inp}
            onChange={(e) => setInp(e.target.value)}
            disabled={ok}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !ok) check();
            }}
            placeholder="Type your answer..."
            autoFocus
            className={`w-full rounded-2xl border-2 px-5 py-4 text-lg font-semibold outline-none transition ${
              dark ? "bg-slate-700 text-white placeholder:text-slate-400" : "bg-slate-50 text-slate-800 placeholder:text-slate-400"
            } ${fb === "correct" ? "border-green-400" : fb === "wrong" ? "border-red-400" : "border-slate-300 dark:border-slate-600 focus:border-indigo-400"}`}
          />
        )}

        {ok && (
          <div
            className={`mt-5 rounded-2xl px-5 py-4 font-semibold animate-fadein ${
              fb === "correct"
                ? "bg-green-50 text-green-700 border border-green-200 dark:bg-green-500/10 dark:text-green-300 dark:border-green-500/30"
                : "bg-red-50 text-red-700 border border-red-200 dark:bg-red-500/10 dark:text-red-300 dark:border-red-500/30"
            }`}
          >
            {fb === "correct" ? "Excellent!" : <>Answer: <strong className="text-base">{q.answer}</strong></>}
          </div>
        )}

        <div className="mt-6">
          {!ok ? (
            <button
              onClick={check}
              disabled={q.type === "multiple-choice" ? !chosen : !inp.trim()}
              className="w-full rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 py-4 text-lg font-black text-white shadow-lg shadow-green-200 transition hover:from-green-600 hover:to-emerald-600 disabled:opacity-40 active:scale-[0.98] dark:shadow-green-900/30"
            >
              CHECK
            </button>
          ) : (
            <button
              onClick={advance}
              className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 py-4 text-lg font-black text-white shadow-lg shadow-indigo-200 transition hover:from-indigo-600 hover:to-purple-600 active:scale-[0.98] dark:shadow-indigo-900/30"
            >
              {i + 1 >= questions.length ? "FINISH" : "CONTINUE"}
            </button>
          )}
        </div>
      </div>

      <style>{`@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}.animate-shake{animation:shake .4s ease-out}@keyframes fadein{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.animate-fadein{animation:fadein .3s ease-out}@keyframes slideup{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}.animate-slideup{animation:slideup .35s ease-out}`}</style>
    </div>
  );
}

function SeasonView({ season, lang, onBack, award }: { season: Season; lang: string; onBack: () => void; award: (n: number) => void }) {
  const { theme } = useTheme();
  const dark = theme === "dark";

  const [completed, setCompleted] = useState<number[]>(() => doneLvls(lang, season.id));
  const [activeLvl, setActiveLvl] = useState<number | null>(null);
  const [popup, setPopup] = useState(false);
  const [popMsg, setPopMsg] = useState("");

  const totalDone = completed.length;
  const total = season.levels.length;
  const pct = total ? Math.round((totalDone / total) * 100) : 0;

  const finishLvl = (score: number, max: number) => {
    if (!activeLvl) return;

    if (score >= Math.ceil(max * 0.6)) {
      complete(lang, season.id, activeLvl);
      setCompleted(doneLvls(lang, season.id));
      award(XP_PER_LEVEL);
      setPopMsg(`${score}/${max} +${XP_PER_LEVEL} XP`);
    } else {
      setPopMsg(`${score}/${max} Try again`);
    }

    setPopup(true);
    setTimeout(() => {
      setPopup(false);
      setActiveLvl(null);
    }, 2000);
  };

  if (activeLvl) {
    const lvl = season.levels.find((item) => item.level === activeLvl);

    return (
      <div className={`min-h-screen ${dark ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="mx-auto max-w-lg px-4 py-6">
          <button onClick={() => setActiveLvl(null)} className={`mb-6 font-semibold ${dark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-800"}`}>
            Back
          </button>
          {lvl && <Quiz questions={lvl.questions} onDone={finishLvl} />}
          {popup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
              <div className="animate-pop rounded-3xl bg-gradient-to-r from-green-500 to-emerald-500 px-10 py-6 text-xl font-black text-white shadow-2xl">
                {popMsg}
              </div>
            </div>
          )}
        </div>
        <style>{`@keyframes pop{0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}.animate-pop{animation:pop .4s cubic-bezier(.175,.885,.32,1.275)}`}</style>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${dark ? "bg-slate-900" : "bg-slate-50"}`}>
      <div className="mx-auto max-w-2xl px-4 py-6">
        <button onClick={onBack} className={`mb-4 font-semibold ${dark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-800"}`}>
          All Seasons
        </button>

        <div className="flex items-center gap-4 mb-6">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-3xl font-black text-white shadow-xl shadow-amber-200 dark:shadow-amber-900/30">
            {season.id}
          </span>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white">{season.title}</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{totalDone}/{total} levels · {pct}% complete</p>
          </div>
        </div>

        <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-700 mb-8 overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-700 ease-out" style={{ width: `${pct}%` }} />
        </div>

        <div className="relative pl-10">
          <div className="absolute left-[23px] top-6 bottom-6 w-[3px] rounded-full bg-slate-200 dark:bg-slate-700" />
          {season.levels.map((lvl) => {
            const done = completed.includes(lvl.level);
            const next = !done && (lvl.level === 1 || completed.includes(lvl.level - 1));

            return (
              <button
                key={lvl.level}
                onClick={() => (done || next) && setActiveLvl(lvl.level)}
                disabled={!done && !next}
                className="relative flex items-center gap-5 mb-6 w-full text-left group"
              >
                <div
                  className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-black transition-all duration-300 border-2 ${
                    done
                      ? "bg-green-500 border-green-400 text-white shadow-[0_0_20px_rgba(34,197,94,0.5)] scale-110"
                      : next
                      ? "bg-white dark:bg-slate-700 border-indigo-400 text-indigo-600 dark:text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.4)] animate-pulse"
                      : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-600 text-slate-400"
                  }`}
                >
                  {done ? "OK" : lvl.level}
                </div>

                <div
                  className={`flex-1 rounded-2xl border-2 px-5 py-4 transition-all ${
                    next
                      ? "border-indigo-200 bg-white dark:border-indigo-500/30 dark:bg-indigo-500/5 group-hover:border-indigo-300 group-hover:shadow-lg dark:group-hover:border-indigo-400"
                      : done
                      ? "border-green-200 bg-green-50/50 dark:border-green-500/20 dark:bg-green-500/5"
                      : "border-slate-200 bg-slate-50/50 dark:border-slate-700 dark:bg-slate-800/50 opacity-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`font-bold ${done ? "text-green-700 dark:text-green-300" : next ? "text-slate-800 dark:text-white" : "text-slate-400"}`}>
                        Level {lvl.level}
                      </p>
                      <p className={`text-xs mt-0.5 ${next ? "text-indigo-500" : done ? "text-green-500" : "text-slate-400"}`}>
                        {done ? "Completed" : next ? `${lvl.questions.length} questions` : "Locked"}
                      </p>
                    </div>
                    <div className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${done ? "bg-green-100 dark:bg-green-500/20 text-green-600" : next ? "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600" : "bg-slate-100 dark:bg-slate-700 text-slate-400"}`}>
                      {done ? "Done" : next ? "Go" : "Lock"}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

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
  const [progressVersion, setProgressVersion] = useState(0);

  const award = useMemo(() => createXPAwarder(updateProfile), [updateProfile]);

  useEffect(() => {
    let cancelled = false;

    setLoadingIndex(true);
    setActiveSeason(null);

    fetchJson<LangIndex>(`/arena/${lang}/index.json`).then((data) => {
      if (cancelled) return;
      setLangIndex(data);
      setLoadingIndex(false);
    });

    return () => {
      cancelled = true;
    };
  }, [lang]);

  const unlocked = useMemo(() => unlockedSeasons(lang), [lang, progressVersion]);
  const seasons = langIndex?.seasons ?? [];

  const openSeason = async (seasonId: number) => {
    setLoadingSeason(true);
    const season = await fetchJson<Season>(`/arena/${lang}/season-${seasonId}.json`);
    setLoadingSeason(false);

    if (season) setActiveSeason(season);
  };

  if (activeSeason) {
    return (
      <SeasonView
        season={activeSeason}
        lang={lang}
        onBack={() => {
          setActiveSeason(null);
          setProgressVersion((value) => value + 1);
        }}
        award={award}
      />
    );
  }

  if (loadingIndex || loadingSeason) {
    return (
      <div className={`flex min-h-screen items-center justify-center ${dark ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-amber-500 border-r-transparent" />
          <p className="mt-3 text-sm font-semibold text-slate-500">Loading Legend...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${dark ? "bg-slate-900" : "bg-slate-50"}`}>
      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="flex items-center justify-between mb-3">
          <button onClick={() => nav("/dashboard")} className={`font-semibold ${dark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-800"}`}>
            Dashboard
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-black rounded-lg bg-slate-200 px-2 py-1 dark:bg-slate-700 dark:text-white">{langFlags[lang] ?? lang.toUpperCase()}</span>
            <span className={`text-sm font-bold ${dark ? "text-slate-300" : "text-slate-500"}`}>{langNames[lang] ?? lang.toUpperCase()}</span>
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className={`text-5xl font-black tracking-tight ${dark ? "text-white" : "text-slate-800"}`}>Legend</h1>
          <p className={`mt-2 text-sm font-medium ${dark ? "text-slate-400" : "text-slate-500"}`}>Complete seasons. Earn XP. Become fluent.</p>
          <div className="flex items-center justify-center gap-5 mt-4">
            <span className={`text-sm font-bold ${dark ? "text-slate-300" : "text-slate-600"}`}>{user?.streak ?? 0} streak</span>
            <span className={`text-sm font-bold ${dark ? "text-slate-300" : "text-slate-600"}`}>Level {user?.level ?? 1}</span>
            <span className={`text-sm font-bold ${dark ? "text-slate-300" : "text-slate-600"}`}>{user?.totalXP?.toLocaleString() ?? 0} XP</span>
          </div>
        </div>

        {seasons.length === 0 ? (
          <div className={`text-center py-20 rounded-3xl border-2 border-dashed ${dark ? "bg-slate-800 border-slate-600" : "bg-white border-slate-200"}`}>
            <p className={`mt-4 text-xl font-bold ${dark ? "text-white" : "text-slate-800"}`}>No content for {langNames[lang]}</p>
            <p className="text-slate-500 mt-2">Add files to public/arena/{lang}/</p>
          </div>
        ) : (
          <div className="space-y-4">
            {seasons.map((season) => {
              const open = unlocked.includes(season.id);
              const done = doneLvls(lang, season.id);
              const allDone = season.levelCount > 0 && done.length >= season.levelCount;
              const pct = season.levelCount ? Math.round((done.length / season.levelCount) * 100) : 0;

              return (
                <button
                  key={season.id}
                  onClick={() => open && openSeason(season.id)}
                  disabled={!open}
                  className={`w-full rounded-3xl border-2 p-5 text-left transition-all duration-300 ${dark ? "bg-slate-800" : "bg-white"} ${
                    allDone
                      ? "border-green-400 shadow-lg shadow-green-200/10"
                      : open
                      ? "border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-400 hover:shadow-xl"
                      : "border-slate-200 dark:border-slate-700 opacity-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-2xl font-black shadow-lg ${
                        allDone
                          ? "bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-green-200"
                          : open
                          ? "bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-amber-200"
                          : "bg-slate-300 dark:bg-slate-600 text-slate-500"
                      }`}
                    >
                      {allDone ? "OK" : open ? season.id : "Lock"}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg font-extrabold ${allDone ? "text-green-600 dark:text-green-400" : open ? (dark ? "text-white" : "text-slate-800") : "text-slate-400"}`}>
                        {season.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex-1 h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <div className={`h-full rounded-full transition-all duration-700 ${allDone ? "bg-gradient-to-r from-green-400 to-emerald-500" : "bg-gradient-to-r from-amber-400 to-orange-500"}`} style={{ width: `${pct}%` }} />
                        </div>
                        <span className={`text-xs font-bold shrink-0 ${allDone ? "text-green-500" : "text-slate-500"}`}>{pct}%</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1.5">{season.levelCount} levels · {done.length} completed</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        <div className="mt-10 flex justify-center gap-6 text-xs font-medium text-slate-400">
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500" /> Active</span>
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-green-500" /> Done</span>
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" /> Locked</span>
        </div>
      </div>
    </div>
  );
}