import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { getGrammarLessons, getTests, LANGUAGE_FLAGS } from "@/content/index";
import type { GrammarLesson } from "@/content/types";
import { XP_REWARDS, createXPAwarder } from "@/utils/xp";
import { getSavedPosition } from "@/utils/savePosition";
import Celebration from "@/components/Celebration";
import AdSlot from "@/components/AdSlot";
import {
  Bell, Lightbulb, Pin, Key, BookOpen, CheckCircle2,
} from 'lucide-react';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

/* ═══════════════════════════════════════════════════════════════
 * CONSTANTS
 * ═══════════════════════════════════════════════════════════════ */
const COMPLETED_KEY = "langlearn_completed_grammar";
function getCompleted(): Set<string> {
  try { return new Set(JSON.parse(localStorage.getItem(COMPLETED_KEY) ?? "[]")); } catch { return new Set(); }
}
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

/* ═══════════════════════════════════════════════════════════════
 * TABLE THEMES & HELPER
 * ═══════════════════════════════════════════════════════════════ */
type TableTheme = "slate" | "indigo" | "emerald" | "amber";

const tableStyles: Record<TableTheme, { th: string; td: string; odd: string }> = {
  slate:  { th: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300", td: "px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700/50", odd: "" },
  indigo: { th: "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",  td: "px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 border-t border-indigo-100 dark:border-indigo-700/40", odd: "" },
  emerald:{ th: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300", td: "px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 border-t border-emerald-100 dark:border-emerald-700/40", odd: "" },
  amber:  { th: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",         td: "px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 border-t border-amber-100 dark:border-amber-700/40",    odd: "" },
};

function RichTable<T extends readonly string[]>({
  headers, rows, theme = "slate", rowSpan = false,
}: {
  headers: readonly string[];
  rows: T[];
  theme?: TableTheme;
  rowSpan?: boolean;
}) {
  const s = tableStyles[theme];
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
      <table className="w-full border-collapse min-w-[480px]">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                colSpan={rowSpan && i === 0 ? 2 : undefined}
                className={`${s.th} font-semibold text-xs uppercase tracking-wider px-4 py-2.5 text-left`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 1 ? s.odd : undefined}>
              {row.map((cell, ci) => (
                <td key={ci} className={`${s.td} whitespace-pre-wrap ${ci === 0 ? "font-semibold text-slate-900 dark:text-slate-100" : ""}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
 * COMMON MISTAKES TABLE
 * ═══════════════════════════════════════════════════════════════ */
function MistakesTable({ mistakes }: { mistakes: { incorrect: string; correct: string; explanation: string }[] }) {
  if (!mistakes.length) return null;
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm">
      <table className="w-full border-collapse min-w-[600px]">
        <thead>
          <tr>
            <th className="bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400 font-semibold text-xs uppercase tracking-wider px-4 py-2.5 text-left">❌ Incorrect</th>
            <th className="bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 font-semibold text-xs uppercase tracking-wider px-4 py-2.5 text-left">✅ Correct</th>
            <th className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 font-semibold text-xs uppercase tracking-wider px-4 py-2.5 text-left">💡 Why?</th>
          </tr>
        </thead>
        <tbody>
          {mistakes.map((m, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-slate-50/60 dark:bg-slate-800/40" : undefined}>
              <td className="px-4 py-2.5 text-sm text-red-600 dark:text-red-400 line-through bg-red-50/30 dark:bg-red-900/5">{m.incorrect}</td>
              <td className="px-4 py-2.5 text-sm text-emerald-700 dark:text-emerald-400 font-medium bg-emerald-50/40 dark:bg-emerald-900/10">{m.correct}</td>
              <td className="px-4 py-2.5 text-sm text-slate-600 dark:text-slate-400 italic">{m.explanation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
 * Q&A TABLE
 * ═══════════════════════════════════════════════════════════════ */
function QATable({ qa }: { qa: { question: string; answer: string }[] }) {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setRevealed(prev => ({ ...prev, [i]: !prev[i] }));
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm">
      <table className="w-full border-collapse min-w-[500px]">
        <thead>
          <tr>
            <th className="bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 font-semibold text-xs uppercase tracking-wider px-4 py-2.5 text-left w-12">#</th>
            <th className="bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 font-semibold text-xs uppercase tracking-wider px-4 py-2.5 text-left">Question</th>
            <th className="bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 font-semibold text-xs uppercase tracking-wider px-4 py-2.5 text-left">Answer</th>
          </tr>
        </thead>
        <tbody>
          {qa.map((item, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-slate-50/60 dark:bg-slate-800/40" : undefined}>
              <td className="px-4 py-2.5 text-sm font-bold text-slate-400 dark:text-slate-500 text-center">{i + 1}</td>
              <td className="px-4 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200">{item.question}</td>
              <td className="px-4 py-2.5 text-sm">
                <button
                  onClick={() => toggle(i)}
                  className={`font-medium rounded-lg px-3 py-1 text-xs transition-all ${
                    revealed[i]
                      ? "text-emerald-700 dark:text-emerald-400 bg-emerald-100/70 dark:bg-emerald-900/30 hover:bg-emerald-100"
                      : "text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {revealed[i] ? item.answer : "Tap to reveal"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
 * CALLOUT BOX
 * ═══════════════════════════════════════════════════════════════ */
function CalloutBox({ icon, label, color, children }: {
  icon: React.ReactNode; label: string; color: "yellow" | "indigo" | "emerald" | "rose";
  children: React.ReactNode;
}) {
  const map: Record<string, string> = {
    yellow:  "border-amber-400 bg-amber-50/70 dark:bg-amber-900/15 text-amber-800 dark:text-amber-300",
    indigo:  "border-indigo-400 bg-indigo-50/70 dark:bg-indigo-900/15 text-indigo-800 dark:text-indigo-300",
    emerald: "border-emerald-400 bg-emerald-50/70 dark:bg-emerald-900/15 text-emerald-800 dark:text-emerald-300",
    rose:    "border-rose-400 bg-rose-50/70 dark:bg-rose-900/15 text-rose-800 dark:text-rose-300",
  };
  return (
    <div className={`rounded-xl border-l-4 ${map[color]} p-4 shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
        <div>
          <p className="font-bold text-[11px] uppercase tracking-wider mb-1 opacity-75">{label}</p>
          <p className="text-sm leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
 * LESSON DETAIL  (new rich structured view)
 * ═══════════════════════════════════════════════════════════════ */
function GrammarLessonDetail({
  lesson,
  onBack,
  completed,
  onComplete,
  hasTest,
  onTest,
}: {
  lesson: GrammarLesson;
  onBack: () => void;
  completed: boolean;
  onComplete: () => void;
  hasTest: boolean;
  onTest: () => void;
}) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 space-y-6">

        {/* ── BACK BAR ── */}
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
          Back to Lessons
        </button>

        {/* ── TITLE & OVERVIEW ── */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
            Level {lesson.level} · {lesson.topic}
          </div>
          <h1 className="mt-2 text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            {lesson.title}
          </h1>

          {/* overview */}
          {lesson.overview && (
            <div className="mt-5 overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-indigo-50/40 dark:from-indigo-950/30 dark:via-slate-800 dark:to-indigo-950/20 shadow-sm dark:border-indigo-700/40">
              <div className="flex items-start gap-4 p-5">
                <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-md dark:from-indigo-400 dark:to-indigo-600">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
                    Overview
                  </span>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-800 dark:text-slate-200"
                     dangerouslySetInnerHTML={{ __html: lesson.overview
                       .replace(/\*\*(.+?)\*\*/g,
                         '<strong class="font-semibold text-indigo-700 dark:text-indigo-300 inline rounded bg-indigo-100/60 dark:bg-indigo-400/15 px-1 py-0.5">$1</strong>')
                     }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* rules table */}
          {lesson.rulesTable && lesson.rulesTable.length > 0 && (
            <div id={lesson.anchorSectionId ?? "rules"} className="mt-5 scroll-mt-20">
              <RichTable
                headers={["Rule", "Structure / Formula", "Example", "Usage"]}
                rows={lesson.rulesTable.map(r => [
                  r.rule, r.structure, r.example, r.usage,
                ]) as never[]}
                theme="indigo"
              />
            </div>
          )}
        </div>

        {/* ── CONJUGATION TABLE ── */}
        {lesson.conjugationTable && (
          <div id="conjugation" className="scroll-mt-20 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h2 className="gl-section-title text-base">🔤 Verb / Word Forms</h2>
            <RichTable
              headers={[lesson.conjugationTable.header, ...Array(3).fill("")]}
              rows={lesson.conjugationTable.rows as never[]}
              theme="emerald"
              rowSpan
            />
          </div>
        )}

        {/* ── TIME EXPRESSIONS TABLE ── */}
        {lesson.timeExpressions && (
          <div id="time-expressions" className="scroll-mt-20 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h2 className="gl-section-title text-base">⏰ Time Expressions &amp; Signal Words</h2>
            <RichTable
              headers={[lesson.timeExpressions.header, ...Array(3).fill("")]}
              rows={lesson.timeExpressions.rows as never[]}
              theme="amber"
              rowSpan
            />
          </div>
        )}

        {/* ── DETAILED EXPLANATION (ACCORDIONS) ── */}
        {lesson.details && lesson.details.length > 0 && (
          <div id="explanation" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h2 className="gl-section-title text-base">📚 Detailed Explanation</h2>
            <Accordion type="multiple" className="mt-3">
              {lesson.details.map((sec, i) => (
                <AccordionItem key={i} value={`sec-${i}`}>
                  <AccordionTrigger className="font-semibold text-slate-800 dark:text-slate-200 text-sm hover:no-underline py-3">
                    <span className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-xs font-bold text-indigo-600 dark:text-indigo-400">
                        {i + 1}
                      </span>
                      {sec.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    {/* embedded tables inside each detail section */}
                    <RichTable
                      headers={["Structure", "Example / Meaning", "Notes"]}
                      rows={sec.body.split("\n").filter(Boolean).flatMap(line => line.startsWith("|") ? [line] : []).map(l => l.split("|").map(s => s.trim().replace(/[{}]/g, ""))).slice(1, 5) as never[]}
                      theme="slate"
                    />
                    {/* plain body paragraphs */}
                    <div
                      className="mt-3 space-y-2"
                      dangerouslySetInnerHTML={{
                        __html: sec.body
                          .split("\n\n")
                          .filter(p => !p.startsWith("|"))
                          .map(p => `<p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${p}</p>`).join(""),
                      }}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {/* ── CALLOUTS / IMPORTANT POINTS ── */}
        {lesson.callouts && lesson.callouts.length > 0 && (
          <div id="callouts" className="scroll-mt-20">
            <h2 className="gl-section-title text-base mb-3">⚠️ Important Points</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {lesson.callouts.map((c, i) => {
                const icons: Record<string, { svg: React.ReactNode; color: "yellow" | "indigo" | "emerald" | "rose" }> = {
                  remember: { svg: <Bell className="w-5 h-5"/>, color: "yellow" },
                  tip:      { svg: <Lightbulb className="w-5 h-5"/>, color: "indigo" },
                  note:     { svg: <Pin className="w-5 h-5"/>, color: "rose" },
                  key:      { svg: <Key className="w-5 h-5"/>, color: "emerald" },
                };
                const entry = icons[c.type] ?? icons.tip;
                return (
                  <CalloutBox key={i} icon={entry.svg} label={c.label} color={entry.color}>
                    {c.text}
                  </CalloutBox>
                );
              })}
            </div>
          </div>
        )}

        {/* ── COMMON MISTAKES ── */}
        {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
          <div id="mistakes" className="rounded-2xl border border-slate-200 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h2 className="gl-section-title text-base mb-3">🚫 Common Mistakes</h2>
            <MistakesTable mistakes={lesson.commonMistakes} />
          </div>
        )}

        {/* ── REVIEW / SUMMARY ── */}
        {lesson.review && lesson.review.length > 0 && (
          <div id="review" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h2 className="gl-section-title text-base mb-3">✅ Quick Review</h2>
            <ul className="space-y-2">
              {lesson.review.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Q&A PRACTICE ── */}
        {(lesson.qa && lesson.qa.length > 0) && (
          <div id="qa" className="rounded-2xl border border-slate-200 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h2 className="gl-section-title text-base mb-3">📝 Practice Questions</h2>
            <QATable qa={lesson.qa} />
          </div>
        )}

        {/* ── COMPLETION + TEST ── */}
        <div className="flex flex-col gap-3 sm:flex-row pt-2">
          {completed ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              ✅ Completed · +{XP_REWARDS.GRAMMAR_LESSON_COMPLETE} XP
            </span>
          ) : (
            <button
              onClick={onComplete}
              className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.98]"
            >
              Mark as Complete · +{XP_REWARDS.GRAMMAR_LESSON_COMPLETE} XP
            </button>
          )}
          {hasTest && (
            <button
              onClick={onTest}
              className="rounded-xl border-2 border-amber-400 px-5 py-2.5 text-sm font-semibold text-amber-700 transition hover:bg-amber-50 dark:border-amber-500 dark:text-amber-300 dark:hover:bg-amber-900/20"
            >
              📝 Take Test
            </button>
          )}
        </div>

        <AdSlot className="mt-2" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
 * MAIN PAGE
 * ═══════════════════════════════════════════════════════════════ */
export default function GrammarPage() {
  const { user, updateProfile } = useAuth();
  const nav = useNavigate();
  const lang = user?.currentLanguage ?? "en";
  const allLessons = useMemo(() => getGrammarLessons(lang), [lang]);
  const allTests   = useMemo(() => getTests(lang), [lang]);

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
    const list = allLessons;
    if (!search) return list;
    const s = search.toLowerCase();
    return list.filter(l => l.title.toLowerCase().includes(s) || l.topic.toLowerCase().includes(s));
  }, [allLessons, search]);

  const activeLessons = useMemo(() => {
    if (search) return lessons;
    return lessons.filter(l => lvlToCEFR(l.level) === activeLevel);
  }, [lessons, activeLevel, search]);

  const completedCount = allLessons.filter(l => completed.has(l.id)).length;
  const pct = allLessons.length ? Math.round((completedCount / allLessons.length) * 100) : 0;
  const hasTest = (topic: string) => allTests.some(t => t.topic === topic);

  // Auto-scroll to anchor when opening a lesson via saved position
  const scrollToAnchor = useCallback((anchor?: string) => {
    if (!anchor) return;
    requestAnimationFrame(() => {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  useEffect(() => {
    const pos = getSavedPosition();
    if (pos?.page === "grammar" && pos.grammarLessonId) {
      const l = allLessons.find(x => x.id === pos.grammarLessonId);
      if (l) {
        setSelectedLesson(l);
        scrollToAnchor(l.anchorSectionId ?? "rules");
      }
    }
  }, [allLessons, scrollToAnchor]);

  // Also scroll when selected lessons changes programmatically
  useEffect(() => {
    if (selectedLesson) scrollToAnchor(selectedLesson.anchorSectionId ?? "rules");
  }, [selectedLesson, scrollToAnchor]);

  const snapTo = (i: number) => {
    setSearch("");
    setActiveLevel(LEVELS[i]);
  };

  const openLesson = (l: GrammarLesson) => setSelectedLesson(l);

  const complete = (l: GrammarLesson) => {
    if (completed.has(l.id)) return;
    const updated = markCompleted(l.id);
    setCompleted(new Set(updated));
    const r = awardRef.current(XP_REWARDS.GRAMMAR_LESSON_COMPLETE);
    if (r.leveledUp) { setNewLvl(r.newLevel); setCelebrate(true); }
  };

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) {
      const idx = LEVELS.indexOf(activeLevel);
      if (diff > 0 && idx < 4) snapTo(idx + 1);
      else if (diff < 0 && idx > 0) snapTo(idx - 1);
    }
  };

  // ── DENSE LESSON VIEW ──
  if (selectedLesson) {
    return (
      <>
        {celebrate && <Celebration newLevel={newLvl} onDone={() => setCelebrate(false)} />}
        <GrammarLessonDetail
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

  // ── LEVEL LIST VIEW ──
  const cls = lvlColors[activeLevel];

  return (
    <div className="min-h-screen bg-[#f8f6f2] dark:bg-[#14141e]" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {celebrate && <Celebration newLevel={newLvl} onDone={() => setCelebrate(false)} />}

      {/* ── STICKY HEADER ── */}
      <div className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur-lg dark:border-slate-700/70 dark:bg-slate-900/85">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button onClick={() => nav("/dashboard")} className="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
            ← Dashboard
          </button>
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
            <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search lessons…"
              className="w-full rounded-xl border border-slate-300 py-2 pl-10 pr-4 text-sm outline-none focus:border-indigo-400 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* ── LEVEL SELECTOR ── */}
      <div className="mx-auto mt-5 max-w-lg px-4">
        <p className="mb-2 hidden text-center text-[10px] text-slate-400 sm:block">← swipe →</p>
        <div className="flex items-center justify-between gap-1 sm:gap-2">
          {LEVELS.map((lvl, i) => (
            <button key={lvl} onClick={() => snapTo(i)}
              className={`flex-1 rounded-xl py-2.5 text-sm font-black tracking-wide transition-all duration-200 sm:text-base sm:py-3 ${
                search ? "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600 opacity-50" :
                activeLevel === lvl
                  ? `${lvlColors[lvl].bg} text-white shadow-lg`
                  : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
        {search ? (
          <p className="mt-2 text-center text-[10px] text-indigo-400">Showing all levels · tap a level to focus</p>
        ) : (
          <div className="mt-2 flex justify-center gap-1.5">
            {LEVELS.map((lvl, i) => (
              <button key={lvl} onClick={() => snapTo(i)}
                className={`rounded-full transition-all ${activeLevel === lvl ? `w-5 h-1.5 ${lvlColors[lvl].dot}` : "w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600"}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── LESSON CARDS ── */}
      <div className="mx-auto mt-6 max-w-2xl px-4 pb-24">
        <div className={`mb-4 flex items-center gap-2 rounded-xl ${search ? "bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-700" : cls.light} border px-4 py-2.5`}>
          <span className="text-lg">{search ? "🔍" : "🚉"}</span>
          <span className="font-black tracking-wide text-slate-700 dark:text-slate-200">
            {search ? "All Levels" : activeLevel}
          </span>
          {search && (
            <button onClick={() => setSearch("")} className="ml-2 text-xs text-indigo-500 hover:text-indigo-600">✕ clear</button>
          )}
          <span className="ml-auto text-xs text-slate-500">{activeLessons.length} {search ? "results" : "lessons"}</span>
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
                  }`}
                >
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
