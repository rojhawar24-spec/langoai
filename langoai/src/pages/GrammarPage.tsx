import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import type { GrammarLesson } from "@/content/types";
import type { GrammarLessonMeta } from "@/content/grammar/lazy";
import { createXPAwarder, XP_REWARDS } from "@/utils/xp";
import { lazy, Suspense } from "react";
import Celebration from "@/components/Celebration";
import AdSlot from "@/components/AdSlot";
import { getGrammarLessonById, getGrammarLessonList } from "@/content/grammar/lazy";

const GrammarLessonDesign = lazy(() => import("@/components/GrammarLessonDesign"));

const COMPLETED_KEY = "langlearn_completed_grammar";

function getCompleted(): Set<string> {
  try {
    return new Set(JSON.parse(localStorage.getItem(COMPLETED_KEY) ?? "[]"));
  } catch {
    return new Set();
  }
}

function markCompleted(id: string) {
  const s = getCompleted();
  s.add(id);
  localStorage.setItem(COMPLETED_KEY, JSON.stringify([...s]));
  return s;
}

const LEVELS = ["A0", "A1", "A2", "B1", "B2", "C1"] as const;

type Level = typeof LEVELS[number];

const lvlToCEFR = (n: number): string => LEVELS[Math.min(Math.max(n - 1, 0), 5)];
const lvlColors: Record<Level, { bg: string; light: string; text: string; border: string; glow: string }> = {
A0: { bg: "bg-rose-500", text: "text-rose-600", border: "border-rose-300", light: "bg-rose-50", glow: "shadow-rose-200" },  
  A1: {
    bg: "bg-emerald-500",
    light: "bg-emerald-50/70 dark:bg-emerald-950/30",
    text: "text-emerald-700 dark:text-emerald-300",
    border: "border-emerald-200/60 dark:border-emerald-800/40",
    glow: "shadow-emerald-500/20",
  },
  A2: {
    bg: "bg-teal-500",
    light: "bg-teal-50/70 dark:bg-teal-950/30",
    text: "text-teal-700 dark:text-teal-300",
    border: "border-teal-200/60 dark:border-teal-800/40",
    glow: "shadow-teal-500/20",
  },
  B1: {
    bg: "bg-blue-500",
    light: "bg-blue-50/70 dark:bg-blue-950/30",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-200/60 dark:border-blue-800/40",
    glow: "shadow-blue-500/20",
  },
  B2: {
    bg: "bg-violet-500",
    light: "bg-violet-50/70 dark:bg-violet-950/30",
    text: "text-violet-700 dark:text-violet-300",
    border: "border-violet-200/60 dark:border-violet-800/40",
    glow: "shadow-violet-500/20",
  },
  C1: {
    bg: "bg-rose-500",
    light: "bg-rose-50/70 dark:bg-rose-950/30",
    text: "text-rose-700 dark:text-rose-300",
    border: "border-rose-200/60 dark:border-rose-800/40",
    glow: "shadow-rose-500/20",
  },
};

export default function GrammarPage() {
  const { updateProfile, user } = useAuth();
  const nav = useNavigate();

  const lang = user?.currentLanguage ?? "nl";
  const [allLessons, setAllLessons] = useState<GrammarLessonMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState<Set<string>>(getCompleted);
  const [activeLevel, setActiveLevel] = useState<Level>("A1");
  const [selectedLesson, setSelectedLesson] = useState<GrammarLesson | null>(null);
  const [search, setSearch] = useState("");
  const [celebrate, setCelebrate] = useState(false);
  const [newLvl, setNewLvl] = useState(0);
  const [visibleCount, setVisibleCount] = useState(10);

  const awardRef = useRef(createXPAwarder(updateProfile));
  awardRef.current = createXPAwarder(updateProfile);

  useEffect(() => {
    setLoading(true);
    setSelectedLesson(null);
    getGrammarLessonList(lang).then((lessons) => {
      setAllLessons(lessons);
      setLoading(false);
    });
  }, [lang]);

  useEffect(() => {
    setVisibleCount(10);
  }, [activeLevel, search]);

  if (loading && !selectedLesson) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="flex flex-col items-center gap-4">
          <div className="relative h-12 w-12">
            <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-800"></div>
            <div className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
          </div>
          <p className="text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400 animate-pulse">Lessen laden...</p>
        </div>
      </div>
    );
  }

  const lessons = search
    ? allLessons.filter(
        (lesson) =>
          lesson.title.toLowerCase().includes(search.toLowerCase()) ||
          lesson.topic.toLowerCase().includes(search.toLowerCase())
      )
    : allLessons;

  const filteredLessons = search ? lessons : lessons.filter((lesson) => lvlToCEFR(lesson.level) === activeLevel);
  const visibleLessons = filteredLessons.slice(0, visibleCount);
  const completedCount = allLessons.filter((lesson) => completed.has(lesson.id)).length;
  const pct = allLessons.length ? Math.round((completedCount / allLessons.length) * 100) : 0;

  const snapTo = (i: number) => {
    setSearch("");
    setActiveLevel(LEVELS[i]);
  };

  const openLesson = async (lessonMeta: GrammarLessonMeta) => {
    setLoading(true);
    const lesson = await getGrammarLessonById(lang, lessonMeta.id);
    setLoading(false);
    if (lesson) setSelectedLesson(lesson);
  };

  const complete = (lesson: GrammarLesson) => {
    if (completed.has(lesson.id)) return;
    const updated = markCompleted(lesson.id);
    setCompleted(new Set(updated));
    const reward = awardRef.current(XP_REWARDS.GRAMMAR_LESSON_COMPLETE);
    if (reward.leveledUp) {
      setNewLvl(reward.newLevel);
      setCelebrate(true);
    }
  };

  if (selectedLesson) {
    return (
      <>
        {celebrate && <Celebration newLevel={newLvl} onDone={() => setCelebrate(false)} />}
        <Suspense fallback={<div className="flex h-screen items-center justify-center bg-slate-50 dark:bg-slate-950"><div className="h-8 w-8 animate-spin rounded-full border-b-2 border-indigo-500"></div></div>}>
          <GrammarLessonDesign
            lesson={selectedLesson}
            onBack={() => setSelectedLesson(null)}
            completed={completed.has(selectedLesson.id)}
            onComplete={() => complete(selectedLesson)}
            hasTest={false}
            onTest={() => {}}
          />
        </Suspense>
      </>
    );
  }

  const cls = lvlColors[activeLevel];

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      
      {/* --- Premium Mesh Gradient Background --- */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-400/20 blur-[100px] dark:bg-indigo-600/10" />
        <div className="absolute top-1/3 -left-20 h-[400px] w-[400px] rounded-full bg-emerald-400/20 blur-[100px] dark:bg-emerald-600/10" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-400/20 blur-[100px] dark:bg-violet-600/10" />
        {/* Subtle noise texture overlay for premium feel */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      {celebrate && <Celebration newLevel={newLvl} onDone={() => setCelebrate(false)} />}

      {/* --- Glassmorphic Sticky Header --- */}
      <div className="sticky top-0 z-30 border-b border-slate-200/50 bg-white/60 backdrop-blur-xl dark:border-slate-800/50 dark:bg-slate-950/60">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <button
            onClick={() => nav("/dashboard")}
            className="group flex items-center gap-2 text-sm font-semibold text-slate-500 transition-all hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-indigo-50 dark:bg-slate-800 dark:group-hover:bg-indigo-950/50">
              <svg className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </div>
            <span className="hidden sm:inline">Dashboard</span>
          </button>

          <div className="flex flex-col items-center">
            <h1 className="text-xl font-black tracking-tight bg-gradient-to-br from-slate-800 to-slate-600 bg-clip-text text-transparent dark:from-white dark:to-slate-400">
              Grammatica
            </h1>
            <div className="mt-2 flex items-center gap-3 rounded-full bg-slate-100/80 px-3 py-1.5 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800/50">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                {completedCount}<span className="text-slate-400 font-normal">/{allLessons.length}</span>
              </span>
              <div className="relative h-2 w-20 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div 
                  className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-700 ease-out shadow-[0_0_12px_rgba(16,185,129,0.5)]" 
                  style={{ width: `${pct}%` }} 
                />
              </div>
              <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">{pct}%</span>
            </div>
          </div>

          <div className="w-10 sm:w-20" /> {/* Spacer for perfect centering */}
        </div>

        {/* --- Search & Level Filters --- */}
        <div className="mx-auto max-w-5xl px-4 pb-4">
          <div className="relative mb-4 group">
            <svg className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Zoek een onderwerp of les..."
              className="w-full rounded-xl border border-slate-200/60 bg-white/50 py-3 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all placeholder:font-normal placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-indigo-500 dark:focus:bg-slate-900 dark:focus:ring-indigo-500/20"
            />
          </div>

          {!search && (
            <div className="flex items-center gap-1.5 rounded-2xl bg-slate-100/80 p-1.5 shadow-inner border border-slate-200/50 dark:bg-slate-900/80 dark:border-slate-800/50">
              {LEVELS.map((lvl) => {
                const isActive = activeLevel === lvl;
                const colors = lvlColors[lvl];
                return (
                  <button
                    key={lvl}
                    onClick={() => snapTo(LEVELS.indexOf(lvl))}
                    className={`relative flex-1 rounded-xl py-2.5 text-sm font-black tracking-wide transition-all duration-300 ${
                      isActive
                        ? `${colors.bg} text-white shadow-lg ${colors.glow}`
                        : "text-slate-500 hover:bg-slate-200/60 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-200"
                    }`}
                  >
                    {lvl}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="relative mx-auto mt-8 max-w-3xl px-4 pb-32">
        
        {/* Active Level Info Banner */}
        {!search && (
          <div className={`mb-8 flex items-center justify-between rounded-2xl border px-5 py-4 backdrop-blur-sm ${cls.light} ${cls.border}`}>
            <div className="flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${cls.bg} text-white shadow-md ${cls.glow}`}>
                <span className="text-xl font-black">{activeLevel}</span>
              </div>
              <div>
                <p className="text-base font-bold text-slate-800 dark:text-slate-100">Niveau {activeLevel} Grammatica</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{filteredLessons.length} lessen beschikbaar</p>
              </div>
            </div>
          </div>
        )}

        {filteredLessons.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 bg-white/40 py-20 text-center dark:border-slate-800 dark:bg-slate-900/40 backdrop-blur-sm">
            <div className="mb-4 rounded-full bg-slate-100 p-4 dark:bg-slate-800">
              <svg className="h-8 w-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <p className="text-lg font-bold text-slate-700 dark:text-slate-200">Geen lessen gevonden</p>
            <p className="mt-1 text-sm text-slate-500">Probeer een andere zoekterm of kies een ander niveau.</p>
          </div>
        ) : (
          <>
            <div className="space-y-3">
              {visibleLessons.map((lesson) => {
                const done = completed.has(lesson.id);
                const levelColor = lvlColors[lvlToCEFR(lesson.level) as Level];

                return (
                  <button
                    key={lesson.id}
                    onClick={() => openLesson(lesson)}
                    className={`group relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-2xl ${
                      done
                        ? "border-emerald-200/60 bg-emerald-50/40 hover:border-emerald-300/80 dark:border-emerald-800/40 dark:bg-emerald-900/10 dark:hover:border-emerald-700/60"
                        : "border-slate-200/60 bg-white/60 hover:border-indigo-300/80 hover:shadow-indigo-500/10 dark:border-slate-800/60 dark:bg-slate-900/40 dark:hover:border-indigo-500/40 dark:hover:shadow-indigo-500/10 backdrop-blur-md"
                    }`}
                  >
                    {/* Decorative side accent bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 ${done ? 'bg-emerald-500' : 'bg-transparent group-hover:bg-indigo-500'}`} />

                    <div className="flex items-start gap-4">
                      {/* Icon / Status Circle */}
                      <div className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        done 
                          ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400" 
                          : `${levelColor.light} ${levelColor.text} group-hover:scale-105`
                      }`}>
                        {done ? (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        ) : (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        )}
                      </div>

                      {/* Text Content */}
                      <div className="flex-1 min-w-0 pt-0.5">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-sm ${levelColor.bg}`}>
                            {lvlToCEFR(lesson.level)}
                          </span>
                          <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                            {lesson.topic}
                          </span>
                          {done && (
                            <span className="ml-auto flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                              Voltooid
                            </span>
                          )}
                        </div>
                        <h3 className="text-base font-bold leading-snug text-slate-800 transition-colors group-hover:text-indigo-600 dark:text-slate-100 dark:group-hover:text-indigo-400">
                          {lesson.title}
                        </h3>
                      </div>

                      {/* Hover Arrow */}
                      <div className="mt-2 flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-300 transition-all duration-300 group-hover:bg-indigo-50 group-hover:text-indigo-500 dark:bg-slate-800 dark:text-slate-600 dark:group-hover:bg-indigo-900/30 dark:group-hover:text-indigo-400">
                        <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {visibleCount < filteredLessons.length && (
              <button
                onClick={() => setVisibleCount((v) => v + 10)}
                className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/60 py-3.5 text-sm font-bold text-slate-600 shadow-sm backdrop-blur-md transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-indigo-700 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-400"
              >
                <span>Laad meer lessen</span>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-500 transition-colors group-hover:bg-indigo-100 group-hover:text-indigo-600 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:bg-indigo-900 dark:group-hover:text-indigo-300">
                  {filteredLessons.length - visibleCount}
                </span>
              </button>
            )}
          </>
        )}

        <div className="mt-12">
          <AdSlot />
        </div>
      </div>
    </div>
  );
}