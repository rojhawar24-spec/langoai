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

const LEVELS = ["A1", "A2", "B1", "B2", "C1"] as const;
type Level = typeof LEVELS[number];

const lvlToCEFR = (n: number): string => LEVELS[Math.min(Math.max(n - 1, 0), 4)];

const lvlColors: Record<Level, { bg: string; light: string; dot: string }> = {
  A1: {
    bg: "bg-emerald-500",
    light: "bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-700",
    dot: "bg-emerald-500",
  },
  A2: {
    bg: "bg-teal-500",
    light: "bg-teal-50 border-teal-200 dark:bg-teal-900/20 dark:border-teal-700",
    dot: "bg-teal-500",
  },
  B1: {
    bg: "bg-blue-500",
    light: "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-700",
    dot: "bg-blue-500",
  },
  B2: {
    bg: "bg-violet-500",
    light: "bg-violet-50 border-violet-200 dark:bg-violet-900/20 dark:border-violet-700",
    dot: "bg-violet-500",
  },
  C1: {
    bg: "bg-rose-500",
    light: "bg-rose-50 border-rose-200 dark:bg-rose-900/20 dark:border-rose-700",
    dot: "bg-rose-500",
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
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

    if (lesson) {
      setSelectedLesson(lesson);
    }
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
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
            </div>
          }
        >
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
    <div className="min-h-screen bg-[#f8f6f2] dark:bg-[#14141e]">
      {celebrate && <Celebration newLevel={newLvl} onDone={() => setCelebrate(false)} />}

      <div className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur-lg dark:border-slate-700/70 dark:bg-slate-900/85">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button
            onClick={() => nav("/dashboard")}
            className="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            Back
          </button>

          <h1 className="text-sm font-bold text-slate-800 dark:text-white sm:text-base">Grammar</h1>

          <div className="flex items-center gap-2 text-xs">
            <span className="hidden sm:inline text-slate-500">
              {completedCount}/{allLessons.length}
            </span>
            <div className="h-1.5 w-14 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
              <div className="h-full rounded-full bg-emerald-400 transition-all" style={{ width: `${pct}%` }} />
            </div>
            <span className="font-bold text-indigo-500">{pct}%</span>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-3">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Zoek lessen..."
              className="w-full rounded-xl border border-slate-300 py-2 pl-10 pr-4 text-sm outline-none focus:border-indigo-400 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-5 max-w-lg px-4">
        <div className="flex items-center justify-between gap-1 sm:gap-2">
          {LEVELS.map((lvl, i) => (
            <button
              key={lvl}
              onClick={() => snapTo(i)}
              className={`flex-1 rounded-xl py-2.5 text-sm font-black tracking-wide transition-all duration-200 sm:text-base sm:py-3 ${
                activeLevel === lvl
                  ? `${lvlColors[lvl].bg} text-white shadow-lg`
                  : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600"
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-2xl px-4 pb-24">
        <div className={`mb-4 flex items-center gap-2 rounded-xl ${cls.light} border px-4 py-2.5`}>
          <span className="font-black tracking-wide text-slate-700 dark:text-slate-200">{activeLevel}</span>
          <span className="ml-auto text-xs text-slate-500">{filteredLessons.length} lessen</span>
        </div>

        {filteredLessons.length === 0 ? (
          <div className={`rounded-xl border-2 border-dashed p-8 text-center ${cls.light}`}>
            <p className="text-sm text-slate-500">Geen lessen gevonden</p>
          </div>
        ) : (
          <>
            <div className="space-y-3">
              {visibleLessons.map((lesson) => {
                const done = completed.has(lesson.id);

                return (
                  <button
                    key={lesson.id}
                    onClick={() => openLesson(lesson)}
                    className={`w-full rounded-xl border-2 p-4 text-left shadow-sm transition-all duration-200 hover:shadow-md active:scale-[0.99] ${
                      done
                        ? "border-emerald-300 bg-emerald-50/60 dark:border-emerald-600 dark:bg-emerald-900/10"
                        : "border-slate-200 bg-white hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-500"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold text-white ${lvlColors[lvlToCEFR(lesson.level) as Level].bg}`}>
                            {lvlToCEFR(lesson.level)}
                          </span>
                          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                            {lesson.topic}
                          </span>
                          {done && <span className="text-xs text-emerald-500">Done</span>}
                        </div>
                        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">{lesson.title}</h3>
                      </div>

                      <svg
                        className="mt-1 h-4 w-4 shrink-0 text-slate-300 dark:text-slate-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                );
              })}
            </div>

            {visibleCount < filteredLessons.length && (
              <button
                onClick={() => setVisibleCount((v) => v + 10)}
                className="w-full py-3 mt-4 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors"
              >
                Laad meer ({filteredLessons.length - visibleCount} over)
              </button>
            )}
          </>
        )}

        <AdSlot className="mt-6" />
      </div>
    </div>
  );
}