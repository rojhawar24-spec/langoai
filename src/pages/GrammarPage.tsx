import { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { getGrammarLessons, getTests, LANGUAGE_FLAGS } from "@/content/index";
import type { GrammarLesson } from "@/content/types";
import { XP_REWARDS, createXPAwarder } from "@/utils/xp";
import { getSavedPosition } from "@/utils/savePosition";
import Celebration from "@/components/Celebration";
import AdSlot from "@/components/AdSlot";
const COMPLETED_KEY = "langlearn_completed_grammar";
function getCompleted(): Set<string> { try { return new Set(JSON.parse(localStorage.getItem(COMPLETED_KEY) ?? "[]")); } catch { return new Set(); } }
function markCompleted(id: string) { const s = getCompleted(); s.add(id); localStorage.setItem(COMPLETED_KEY, JSON.stringify([...s])); return s; }

const LEVELS = ["A1","A2","B1","B2","C1"] as const;
type Level = typeof LEVELS[number];
const lvlToCEFR = (n: number): string => LEVELS[Math.min(Math.max(n - 1, 0), 4)];

const lvlColors: Record<Level, { bg: string; light: string; dot: string }> = {
  A1: { bg: "bg-emerald-500",  light: "bg-emerald-50  border-emerald-200  dark:bg-emerald-900/20  dark:border-emerald-700",  dot: "bg-emerald-500" },
  A2: { bg: "bg-teal-500",     light: "bg-teal-50     border-teal-200     dark:bg-teal-900/20     dark:border-teal-700",     dot: "bg-teal-500" },
  B1: { bg: "bg-blue-500",     light: "bg-blue-50     border-blue-200     dark:bg-blue-900/20     dark:border-blue-700",     dot: "bg-blue-500" },
  B2: { bg: "bg-violet-500",   light: "bg-violet-50   border-violet-200   dark:bg-violet-900/20   dark:border-violet-700",   dot: "bg-violet-500" },
  C1: { bg: "bg-rose-500",     light: "bg-rose-50     border-rose-200     dark:bg-rose-900/20     dark:border-rose-700",     dot: "bg-rose-500" },
};

// ─────────────── LESSON DETAIL PAGE ───────────────
function LessonDetail({ lesson, onBack, completed, onComplete, hasTest, onTest }: {
  lesson: GrammarLesson;
  onBack: () => void;
  completed: boolean;
  onComplete: () => void;
  hasTest: boolean;
  onTest: () => void;
}) {
  const renderBody = (b: string) => b
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold mt-5 mb-2 text-slate-800 dark:text-slate-200">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-slate-900 dark:text-white">$1</strong>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-slate-700 dark:text-slate-300">$1</li>')
    .replace(/\n\n/g, '</p><p class="mt-2 text-slate-700 dark:text-slate-300 leading-relaxed">')
    .replace(/\n/g, '<br/>');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <button onClick={onBack} className="mb-6 flex items-center gap-1 text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          Back to Lessons
        </button>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
            Level {lesson.level} · {lesson.topic}
          </div>
          <h1 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{lesson.title}</h1>
          <div className="mt-6" dangerouslySetInnerHTML={{ __html: `<p class="text-slate-700 dark:text-slate-300 leading-relaxed">${renderBody(lesson.body)}</p>` }} />

          {lesson.exercises.length > 0 && (
            <div className="mt-8 rounded-xl border border-slate-100 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/50">
              <h3 className="mb-3 font-semibold text-slate-800 dark:text-slate-200">✏️ Quick Exercises</h3>
              {lesson.exercises.map((ex, i) => (
                <div key={i} className="mb-4 last:mb-0">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{ex.question}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {ex.options.map((opt) => (
                      <span key={opt} className={`rounded-full border px-3 py-1 text-xs font-medium ${opt === ex.answer ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300" : "border-slate-200 text-slate-500 dark:border-slate-600 dark:text-slate-400"}`}>{opt}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {completed ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">✅ Completed · +{XP_REWARDS.GRAMMAR_LESSON_COMPLETE} XP</span>
            ) : (
              <button onClick={onComplete} className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">Mark as Complete · +{XP_REWARDS.GRAMMAR_LESSON_COMPLETE} XP</button>
            )}
            {hasTest && (
              <button onClick={onTest} className="rounded-xl border-2 border-amber-400 px-5 py-2.5 text-sm font-semibold text-amber-700 transition hover:bg-amber-50 dark:border-amber-500 dark:text-amber-300 dark:hover:bg-amber-900/20">📝 Take Test</button>
            )}
          </div>
        </div>
        <AdSlot className="mt-6" />
      </div>
    </div>
  );
}

// ─────────────── MAIN PAGE ───────────────
export default function GrammarPage() {
  const { user, updateProfile } = useAuth();
  const nav = useNavigate();
  const lang = user?.currentLanguage ?? "en";
  const allLessons = useMemo(() => getGrammarLessons(lang), [lang]);
  const allTests = useMemo(() => getTests(lang), [lang]);

  const [completed, setCompleted] = useState<Set<string>>(getCompleted);
  const [activeLevel, setActiveLevel] = useState<Level>("A1");
  const [selectedLesson, setSelectedLesson] = useState<GrammarLesson | null>(null);
  const [search, setSearch] = useState("");
  const [celebrate, setCelebrate] = useState(false);
  const [newLvl, setNewLvl] = useState(0);

  const awardRef = useRef(createXPAwarder(updateProfile));
  awardRef.current = createXPAwarder(updateProfile);
  const touchStartX = useRef(0);

  const lessons = useMemo(() => {
    let list = allLessons;
    if (search) { const s = search.toLowerCase(); list = list.filter(l => l.title.toLowerCase().includes(s) || l.topic.toLowerCase().includes(s)); }
    return list;
  }, [allLessons, search]);

  // Show lessons for active level OR all when searching
  const activeLessons = useMemo(() => {
    if (search) return lessons;
    return lessons.filter(l => lvlToCEFR(l.level) === activeLevel);
  }, [lessons, activeLevel, search]);

  const completedCount = allLessons.filter(l => completed.has(l.id)).length;
  const pct = allLessons.length ? Math.round((completedCount / allLessons.length) * 100) : 0;
  const hasTest = (topic: string) => allTests.some(t => t.topic === topic);

  useEffect(() => {
    const pos = getSavedPosition();
    if (pos?.page === "grammar" && pos.grammarLessonId) {
      const l = allLessons.find(x => x.id === pos.grammarLessonId); if (l) setSelectedLesson(l);
    }
  }, [allLessons]);

  const snapTo = (i: number) => {
    setSearch("");  // Clear search when switching levels
    setActiveLevel(LEVELS[i]);
  };

  const openLesson = (l: GrammarLesson) => setSelectedLesson(l);
  const complete = (l: GrammarLesson) => {
    if (completed.has(l.id)) return;
    const updated = markCompleted(l.id); setCompleted(new Set(updated));
    const r = awardRef.current(XP_REWARDS.GRAMMAR_LESSON_COMPLETE);
    if (r.leveledUp) { setNewLvl(r.newLevel); setCelebrate(true); }
  };

  // Touch swipe for level nav
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) {
      const idx = LEVELS.indexOf(activeLevel);
      if (diff > 0 && idx < 4) snapTo(idx + 1);
      else if (diff < 0 && idx > 0) snapTo(idx - 1);
    }
  };

  // ── Lesson detail view ──
  if (selectedLesson) {
    return (
      <>
        {celebrate && <Celebration newLevel={newLvl} onDone={() => setCelebrate(false)} />}
        <LessonDetail
          lesson={selectedLesson}
          onBack={() => setSelectedLesson(null)}
          completed={completed.has(selectedLesson.id)}
          onComplete={() => complete(selectedLesson)}
          hasTest={hasTest(selectedLesson.topic)}
          onTest={() => nav(`/tests?topic=${encodeURIComponent(selectedLesson.topic)}`)}
        />
      </>
    );
  }

  // ── Level list view ──
  const cls = lvlColors[activeLevel];

  return (
    <div className="min-h-screen bg-[#f8f6f2] dark:bg-[#14141e]" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {celebrate && <Celebration newLevel={newLvl} onDone={() => setCelebrate(false)} />}

      {/* ── STICKY HEADER ── */}
      <div className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur-lg dark:border-slate-700/70 dark:bg-slate-900/85">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button onClick={() => nav("/dashboard")} className="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">← Dashboard</button>
          <h1 className="text-sm font-bold text-slate-800 dark:text-white sm:text-base">📖 {LANGUAGE_FLAGS[lang]} Grammar</h1>
          <div className="flex items-center gap-2 text-xs">
            <span className="hidden sm:inline text-slate-500">{completedCount}/{allLessons.length}</span>
            <div className="h-1.5 w-14 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
              <div className="h-full rounded-full bg-emerald-400 transition-all" style={{ width: `${pct}%` }} />
            </div>
            <span className="font-bold text-indigo-500">{pct}%</span>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-3">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search lessons..."
              className="w-full rounded-xl border border-slate-300 py-2 pl-10 pr-4 text-sm outline-none focus:border-indigo-400 dark:border-slate-600 dark:bg-slate-800 dark:text-white" />
          </div>
        </div>
      </div>

      {/* ── LEVEL SELECTOR ── */}
      <div className="mx-auto mt-5 max-w-lg px-4">
        {/* Swipe hint — desktop */}
        <p className="mb-2 hidden text-center text-[10px] text-slate-400 sm:block">← swipe →</p>

        {/* Level buttons row */}
        <div className="flex items-center justify-between gap-1 sm:gap-2">
          {LEVELS.map((lvl, i) => (
            <button key={lvl} onClick={() => snapTo(i)}
              className={`flex-1 rounded-xl py-2.5 text-sm font-black tracking-wide transition-all duration-200 sm:text-base sm:py-3 ${
                search ? "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600 opacity-50" :
                activeLevel === lvl
                  ? `${lvlColors[lvl].bg} text-white shadow-lg`
                  : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}>
              {lvl}
            </button>
          ))}
        </div>

        {/* Dots — hidden when searching */}
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

      {/* ── LESSON CARDS ── */}
      <div className="mx-auto mt-6 max-w-2xl px-4 pb-24">
        {/* Station header */}
        <div className={`mb-4 flex items-center gap-2 rounded-xl ${search ? "bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-700" : cls.light} border px-4 py-2.5`}>
          <span className="text-lg">{search ? "🔍" : "🚉"}</span>
          <span className="font-black tracking-wide text-slate-700 dark:text-slate-200">
            {search ? "All Levels" : activeLevel}
          </span>
          {search && (
            <button onClick={() => setSearch("")} className="ml-2 text-xs text-indigo-500 hover:text-indigo-600">✕ clear</button>
          )}
          <span className="ml-auto text-xs text-slate-500">
            {activeLessons.length} {search ? "results" : "lessons"}
          </span>
        </div>

        {activeLessons.length === 0 ? (
          <div className={`rounded-xl border-2 border-dashed p-8 text-center ${cls.light}`}>
            <p className="text-sm text-slate-500">No lessons found</p>
          </div>
        ) : (
          <div className="space-y-3">
            {activeLessons.map((lesson) => {
              const done = completed.has(lesson.id);
              return (
                <button key={lesson.id} onClick={() => openLesson(lesson)}
                  className={`w-full rounded-xl border-2 p-4 text-left shadow-sm transition-all duration-200 hover:shadow-md active:scale-[0.99] ${
                    done
                      ? "border-emerald-300 bg-emerald-50/60 dark:border-emerald-600 dark:bg-emerald-900/10"
                      : "border-slate-200 bg-white hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-500"
                  }`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold text-white ${lvlColors[lvlToCEFR(lesson.level) as Level].bg}`}>
                          {lvlToCEFR(lesson.level)}
                        </span>
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500 dark:bg-slate-700 dark:text-slate-400">{lesson.topic}</span>
                        {done && <span className="text-xs text-emerald-500">✅</span>}
                      </div>
                      <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">{lesson.title}</h3>
                    </div>
                    <svg className="mt-1 h-4 w-4 shrink-0 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>
        )}
        <AdSlot className="mt-6" />
      </div>
    </div>
  );
}
