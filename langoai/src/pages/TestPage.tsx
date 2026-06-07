import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { getTests, LANGUAGE_FLAGS } from "@/content/index";
import type { TestItem } from "@/content/types";
import { XP_REWARDS, createXPAwarder } from "@/utils/xp";
import { addMistake } from "@/utils/mistakes";
import Celebration from "@/components/Celebration";


const LEVELS = ["A1","A2","B1","B2","C1"] as const;
type Level = typeof LEVELS[number];

const lvlColors: Record<Level, { bg: string; light: string; dot: string }> = {
  A1: { bg: "bg-emerald-500",  light: "bg-emerald-50  border-emerald-200  dark:bg-emerald-900/20  dark:border-emerald-700",  dot: "bg-emerald-500" },
  A2: { bg: "bg-teal-500",     light: "bg-teal-50     border-teal-200     dark:bg-teal-900/20     dark:border-teal-700",     dot: "bg-teal-500" },
  B1: { bg: "bg-blue-500",     light: "bg-blue-50     border-blue-200     dark:bg-blue-900/20     dark:border-blue-700",     dot: "bg-blue-500" },
  B2: { bg: "bg-violet-500",   light: "bg-violet-50   border-violet-200   dark:bg-violet-900/20   dark:border-violet-700",   dot: "bg-violet-500" },
  C1: { bg: "bg-rose-500",     light: "bg-rose-50     border-rose-200     dark:bg-rose-900/20     dark:border-rose-700",     dot: "bg-rose-500" },
};

// ─────────── TEST TAKEN PAGE ───────────
function TestTaker({ test, onBack, onDone, languageCode }: {
  test: TestItem; onBack: () => void; onDone: () => void; languageCode: string;
}) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const q = test.questions[current];

  const score = test.questions.reduce((acc, q, i) => (answers[i] === q.answer ? acc + 1 : acc), 0);
  const max = test.questions.length;
  const pct = max > 0 ? Math.round((score / max) * 100) : 0;
  const passed = pct >= test.passScore;
  const { updateProfile } = useAuth();
  const awardRef = useRef(createXPAwarder(updateProfile));
  const [celeb, setCeleb] = useState(false);
  const [newLvl, setNewLvl] = useState(0);

  const handleSubmit = () => {
    setSubmitted(true);
    if (passed) {
      const r = awardRef.current(XP_REWARDS.TEST_PASSED);
      if (r.leveledUp) { setNewLvl(r.newLevel); setCeleb(true); }
    }
    // Save mistakes
    test.questions.forEach((q, i) => {
      if (answers[i] && answers[i] !== q.answer) {
        addMistake({ question: q.prompt, yourAnswer: answers[i], correctAnswer: q.answer, topic: test.topic, languageCode, source: "test" });
      }
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        {celeb && <Celebration newLevel={newLvl} onDone={() => setCeleb(false)} />}
        <div className="mx-auto max-w-2xl px-4 py-12 text-center sm:px-6">
          <div className="text-6xl mb-4">{passed ? "🎉" : "💪"}</div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">{passed ? "Test Passed!" : "Keep Practicing!"}</h2>
          <p className="text-slate-500 mt-1">{test.title}</p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{score}/{max}</p>
              <p className="text-xs text-slate-500">Score</p>
            </div>
            <div className={`rounded-xl border p-4 ${passed ? "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20" : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20"}`}>
              <p className={`text-3xl font-bold ${passed ? "text-emerald-600" : "text-red-500"}`}>{pct}%</p>
              <p className="text-xs text-slate-500">Pass: {test.passScore}%</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
              <p className="text-3xl font-bold text-indigo-600">{passed ? `+${XP_REWARDS.TEST_PASSED}` : "0"}</p>
              <p className="text-xs text-slate-500">XP</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <button onClick={onBack} className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">Back to Tests</button>
            <button onClick={onDone} className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">Dashboard</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">← Back</button>
          <span className="text-xs text-slate-400">{current + 1}/{max}</span>
          <button onClick={() => setSubmitted(true)} className="text-sm font-semibold text-indigo-500">Submit</button>
        </div>
        <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 mb-8">
          <div className="h-full rounded-full bg-indigo-500 transition-all" style={{ width: `${(current / max) * 100}%` }} />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 mb-4">{test.topic}</div>
          <p className="text-lg font-semibold text-slate-900 dark:text-white mb-6">{q.prompt}</p>
          <div className="space-y-3">
            {q.options.map(opt => {
              const chosen = answers[current] === opt;
              return (
                <button key={opt} onClick={() => { const a = [...answers]; a[current] = opt; setAnswers(a); }}
                  className={`w-full rounded-xl border-2 px-5 py-3.5 text-left text-sm font-medium transition ${chosen ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:border-indigo-400 dark:bg-indigo-900/30 dark:text-indigo-300" : "border-slate-200 hover:border-slate-300 dark:border-slate-600 dark:hover:border-slate-500"}`}>
                  <span className="flex items-center gap-3">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${chosen ? "bg-indigo-500 text-white" : "border border-slate-300 text-slate-400 dark:border-slate-500"}`}>{chosen ? "✓" : "○"}</span>
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="flex justify-between mt-6">
            <button onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0}
              className="rounded-lg border px-4 py-2 text-sm text-slate-600 disabled:opacity-30 dark:border-slate-700 dark:text-slate-400">Previous</button>
            {current + 1 < max ? (
              <button onClick={() => setCurrent(current + 1)} className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">Next</button>
            ) : (
              <button onClick={handleSubmit} disabled={answers.filter(Boolean).length < max * 0.5}
                className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-40">Submit Test</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────── MAIN TESTS PAGE ───────────
export default function TestPage() {
  const { user } = useAuth();
  const nav = useNavigate();
  const lang = user?.currentLanguage ?? "en";
  
  const [allTests, setAllTests] = useState<TestItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [activeLevel, setActiveLevel] = useState<Level>("A1");
  const [selectedTest, setSelectedTest] = useState<TestItem | null>(null);
  const [search, setSearch] = useState("");

  // Load content lazily when language changes
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getTests(lang).then(t => {
      if (!cancelled) {
        setAllTests(t);
        setLoading(false);
      }
    });
    return () => { cancelled = true; };
  }, [lang]);

  const tests = search 
    ? allTests.filter(t => t.title.toLowerCase().includes(search.toLowerCase()) || t.topic.toLowerCase().includes(search.toLowerCase()))
    : allTests;

  const activeTests = search ? tests : tests;

  const snapTo = (i: number) => {
    setSearch("");
    setActiveLevel(LEVELS[i]);
  };
  const cls = lvlColors[activeLevel];

  // ── Test taker view ──
  if (selectedTest) {
    return <TestTaker test={selectedTest} onBack={() => setSelectedTest(null)} onDone={() => nav("/dashboard")} languageCode={lang} />;
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-amber-600 border-r-transparent"></div>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Loading tests...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f6f2] dark:bg-[#14141e]">
      {/* ── HEADER ── */}
      <div className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur-lg dark:border-slate-700/70 dark:bg-slate-900/85">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button onClick={() => nav("/dashboard")} className="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">← Dashboard</button>
          <h1 className="text-sm font-bold text-slate-800 dark:text-white sm:text-base">📝 {LANGUAGE_FLAGS[lang]} Tests</h1>
          <span className="text-xs text-slate-500">{allTests.length} tests</span>
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-3">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search tests..."
              className="w-full rounded-xl border border-slate-300 py-2 pl-10 pr-4 text-sm outline-none focus:border-amber-400 dark:border-slate-600 dark:bg-slate-800 dark:text-white" />
          </div>
        </div>
      </div>

      {/* ── LEVEL SELECTOR ── */}
      <div className="mx-auto mt-5 max-w-lg px-4">
        <div className="flex items-center justify-between gap-1 sm:gap-2">
          {LEVELS.map((lvl, i) => (
            <button key={lvl} onClick={() => snapTo(i)}
              className={`flex-1 rounded-xl py-2.5 text-sm font-black tracking-wide transition-all duration-200 sm:text-base sm:py-3 ${
                search ? "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600 opacity-50" :
                activeLevel === lvl ? `${lvlColors[lvl].bg} text-white shadow-lg` : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}>{lvl}</button>
          ))}
        </div>
        {search ? (
          <p className="mt-2 text-center text-[10px] text-indigo-400">Showing all levels · tap a level to focus</p>
        ) : (
          <div className="mt-2 flex justify-center gap-1.5">
            {LEVELS.map((lvl, i) => (
              <button key={lvl} onClick={() => snapTo(i)}
                className={`rounded-full transition-all ${activeLevel===lvl ? `w-5 h-1.5 ${lvlColors[lvl].dot}` : "w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600"}`} />
            ))}
          </div>
        )}
      </div>

      {/* ── TEST CARDS ── */}
      <div className="mx-auto mt-6 max-w-2xl px-4 pb-24">
        <div className={`mb-4 flex items-center gap-2 rounded-xl ${search ? "bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-700" : cls.light} border px-4 py-2.5`}>
          <span className="text-lg">{search ? "🔍" : "📝"}</span>
          <span className="font-black tracking-wide text-slate-700 dark:text-slate-200">
            {search ? "All Levels" : activeLevel}
          </span>
          {search && (
            <button onClick={() => setSearch("")} className="ml-2 text-xs text-indigo-500 hover:text-indigo-600">✕ clear</button>
          )}
          <span className="ml-auto text-xs text-slate-500">{activeTests.length} {search ? "results" : "tests"}</span>
        </div>

        {activeTests.length === 0 ? (
          <div className={`rounded-xl border-2 border-dashed p-8 text-center ${cls.light}`}><p className="text-sm text-slate-500">No tests found</p></div>
        ) : (
          <div className="space-y-3">
            {activeTests.map(test => (
              <button key={test.id} onClick={() => setSelectedTest(test)}
                className={`w-full rounded-xl border-2 p-4 text-left shadow-sm transition-all hover:shadow-md active:scale-[0.99] ${cls.light}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">{test.topic}</span>
                      <span className="text-[10px] text-slate-400">{test.questions.length} questions</span>
                      <span className="text-[10px] text-slate-400">Pass: {test.passScore}%</span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">{test.title}</h3>
                    <p className="text-xs text-indigo-500 mt-1">+{XP_REWARDS.TEST_PASSED} XP on pass</p>
                  </div>
                  <svg className="mt-1 h-4 w-4 shrink-0 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}