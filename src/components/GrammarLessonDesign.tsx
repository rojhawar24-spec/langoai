import React, { useState } from "react";
import {
  Bell,
  CheckCircle2,
  Key,
  Lightbulb,
  Pin,
  BookOpen,
  FileText,
  HelpCircle,
  Target,
  AlertCircle,
  Clock,
} from "lucide-react";
import type { GrammarLesson } from "@/content/types";
import { XP_REWARDS } from "@/utils/xp";
import AdSlot from "@/components/AdSlot";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type TableTheme = "indigo" | "emerald" | "amber" | "slate";

const tableStyles: Record<TableTheme, { th: string; td: string; odd: string }> = {
  indigo: {
    th: "bg-indigo-500 text-white",
    td: "px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 border-t border-indigo-100 dark:border-indigo-900/40",
    odd: "bg-indigo-50/40 dark:bg-indigo-900/10",
  },
  emerald: {
    th: "bg-emerald-500 text-white",
    td: "px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 border-t border-emerald-100 dark:border-emerald-900/40",
    odd: "bg-emerald-50/40 dark:bg-emerald-900/10",
  },
  amber: {
    th: "bg-amber-500 text-white",
    td: "px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 border-t border-amber-100 dark:border-amber-900/40",
    odd: "bg-amber-50/40 dark:bg-amber-900/10",
  },
  slate: {
    th: "bg-slate-600 text-white",
    td: "px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700/50",
    odd: "bg-slate-50/60 dark:bg-slate-800/30",
  },
};

/* ═══════════════════════════════════════════════════════
 * SHARED TABLES
 * ═══════════════════════════════════════════════════════ */

function RichTable<T extends readonly string[]>({
  headers,
  rows,
  theme = "indigo",
  rowSpan = false,
}: {
  headers: readonly string[];
  rows: T[];
  theme?: TableTheme;
  rowSpan?: boolean;
}) {
  const s = tableStyles[theme];
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm">
      <table className="w-full border-collapse min-w-[480px]">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                colSpan={rowSpan && i === 0 ? 2 : undefined}
                className={`${s.th} font-semibold text-[11px] uppercase tracking-wider px-3 py-2.5 text-left`}
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
                <td
                  key={ci}
                  className={`${s.td} whitespace-pre-wrap`}
                >
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

function MistakesTable({
  mistakes,
}: {
  mistakes: { incorrect: string; correct: string; explanation: string }[];
}) {
  if (!mistakes.length) return null;
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm">
      <table className="w-full border-collapse min-w-[600px]">
        <thead>
          <tr>
            <th className="bg-gradient-to-b from-rose-500 to-rose-600 text-white font-semibold text-[11px] uppercase tracking-wider px-3 py-2.5 text-left">Incorrect</th>
            <th className="bg-gradient-to-b from-emerald-500 to-emerald-600 text-white font-semibold text-[11px] uppercase tracking-wider px-3 py-2.5 text-left">Correct</th>
            <th className="bg-slate-400 text-white font-semibold text-[11px] uppercase tracking-wider px-3 py-2.5 text-left">Why?</th>
          </tr>
        </thead>
        <tbody>
          {mistakes.map((m, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-slate-50/60 dark:bg-slate-800/40" : undefined}>
              <td className="px-3 py-2.5 text-sm text-rose-600 dark:text-rose-400 line-through font-medium">{m.incorrect}</td>
              <td className="px-3 py-2.5 text-sm text-emerald-700 dark:text-emerald-400 font-semibold">{m.correct}</td>
              <td className="px-3 py-2.5 text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed">{m.explanation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
 * ACCORDION BODY CONTENT — styled via className injection
 * ═══════════════════════════════════════════════════════ */

/* Each section inside an accordion item gets these base classes:
 *  - text-sm leading-relaxed text-slate-700 dark:text-slate-300
 * HTML2Markdown parser injects rich class tags; we provide a
 * shared render wrapper that supplements them without breaking. */

function QATable({ qa }: { qa: { question: string; answer: string }[] }) {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setRevealed((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm">
      <table className="w-full border-collapse min-w-[500px]">
        <thead>
          <tr>
            <th className="bg-indigo-500 text-white font-semibold text-[11px] uppercase tracking-wider px-3 py-2.5 text-left w-12">#</th>
            <th className="bg-indigo-500 text-white font-semibold text-[11px] uppercase tracking-wider px-3 py-2.5 text-left">Question</th>
            <th className="bg-indigo-500 text-white font-semibold text-[11px] uppercase tracking-wider px-3 py-2.5 text-left">Answer</th>
          </tr>
        </thead>
        <tbody>
          {qa.map((item, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-indigo-50/40 dark:bg-indigo-900/10" : undefined}>
              <td className="px-3 py-2.5 text-sm font-bold text-slate-400 dark:text-slate-500 text-center">{i + 1}</td>
              <td className="px-3 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200">{item.question}</td>
              <td className="px-3 py-2.5 text-sm">
                <button
                  onClick={() => toggle(i)}
                  className={`font-medium rounded-lg px-3 py-1.5 text-xs transition-all ${
                    revealed[i]
                      ? "text-emerald-700 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-900/30 shadow-inner"
                      : "text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600"
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

/* ═══════════════════════════════════════════════════════
 * CALLOUT BOXES
 * ═══════════════════════════════════════════════════════ */

type CalloutColor = "amber" | "indigo" | "emerald" | "rose";

function CalloutBox({
  icon,
  label,
  color,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  color: CalloutColor;
  children: React.ReactNode;
}) {
  const styles: Record<CalloutColor, string> = {
    amber:  "border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/15 dark:to-orange-900/10 text-amber-800 dark:text-amber-300",
    indigo: "border-indigo-400 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/15 dark:to-blue-900/10 text-indigo-800 dark:text-indigo-300",
    emerald:"border-emerald-400 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/15 dark:to-teal-900/10 text-emerald-800 dark:text-emerald-300",
    rose:   "border-rose-400 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/15 dark:to-pink-900/10 text-rose-800 dark:text-rose-300",
  };
  const icons: Record<CalloutColor, string> = {
    amber:  "text-amber-600 dark:text-amber-400",
    indigo: "text-indigo-600 dark:text-indigo-400",
    emerald:"text-emerald-600 dark:text-emerald-400",
    rose:   "text-rose-600 dark:text-rose-400",
  };

  return (
    <div className={`rounded-xl border-l-4 ${styles[color]} p-4 shadow-sm transition-colors`}>
      <div className="flex items-start gap-3">
        <span className={`text-xl flex-shrink-0 mt-0.5 ${icons[color]}`}>{icon}</span>
        <div>
          <p className="font-bold text-[11px] uppercase tracking-wider mb-1 opacity-75">{label}</p>
          <p className="text-sm leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
 * SECTION CARD
 * ═══════════════════════════════════════════════════════ */

function SectionCard({
  id,
  icon,
  title,
  children,
}: {
  id?: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="flex items-center gap-2.5 text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">{icon}</span>
        {title}
      </h2>
      <div className="mb-2">{children}</div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
 * MAIN COMPONENT
 * ═══════════════════════════════════════════════════════ */

function GrammarLessonDesign({
  lesson,
  completed,
  onComplete,
  hasTest,
  onTest,
  onBack,
}: {
  lesson: GrammarLesson;
  completed: boolean;
  onComplete: () => void;
  hasTest: boolean;
  onTest: () => void;
  onBack?: () => void;
}) {
  /* ── Level badge colors ── */
  const LEVELS = ["A1","A2","B1","B2","C1"] as const;
  const lvlToCEFR = (n: number) => LEVELS[Math.min(Math.max(n - 1, 0), 4)];

  /* ── Rule-card accent colors ── */
  const detailColors = [
    { ring: "ring-indigo-200/60 dark:ring-indigo-500/40",    iconBg: "bg-indigo-100 dark:bg-indigo-900/40", iconText: "text-indigo-600 dark:text-indigo-400" },
    { ring: "ring-emerald-200/60 dark:ring-emerald-500/40",   iconBg: "bg-emerald-100 dark:bg-emerald-900/40", iconText: "text-emerald-600 dark:text-emerald-400" },
    { ring: "ring-purple-200/60 dark:ring-purple-500/40",     iconBg: "bg-purple-100 dark:bg-purple-900/40", iconText: "text-purple-600 dark:text-purple-400" },
    { ring: "ring-rose-200/60 dark:ring-rose-500/40",         iconBg: "bg-rose-100 dark:bg-rose-900/40", iconText: "text-rose-600 dark:text-rose-400" },
    { ring: "ring-amber-200/60 dark:ring-amber-500/40",       iconBg: "bg-amber-100 dark:bg-amber-900/40", iconText: "text-amber-600 dark:text-amber-400" },
  ];

  /* ── Inline render helpers ── */
  function RenderBold({ children }: { children: React.ReactNode }) {
    return <strong className="font-bold text-slate-900 dark:text-slate-100">{children}</strong>;
  }
  function RenderItalic({ children }: { children: React.ReactNode }) {
    return <em className="italic text-slate-600 dark:text-slate-400">{children}</em>;
  }
  function RenderCode({ children }: { children: React.ReactNode }) {
    return (
      <code className="rounded bg-slate-200/60 dark:bg-slate-700/50 px-1.5 py-0.5 text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300">
        {children}
      </code>
    );
  }
  function RenderInline({ text }: { text: string }) {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
    return (
      <>
        {parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**"))
            return <RenderBold key={i}>{part.slice(2, -2)}</RenderBold>;
          if (part.startsWith("*") && part.endsWith("*"))
            return <RenderItalic key={i}>{part.slice(1, -1)}</RenderItalic>;
          if (part.startsWith("`") && part.endsWith("`"))
            return <RenderCode key={i}>{part.slice(1, -1)}</RenderCode>;
          return <React.Fragment key={i}>{part}</React.Fragment>;
        })}
      </>
    );
  }

  /* bodyMarkdown → array of { type, content } */
  function parseBody(body: string): { type: string; content: string[] }[] {
    const lines = body.split("\n");
    const sections: { type: string; content: string[] }[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i].trimEnd();

      // ── H3 heading ──
      if (line.startsWith("### ")) {
        sections.push({ type: "h3", content: [line.slice(4)] });
        i++;
        continue;
      }
      // ── H2 heading ──
      if (line.startsWith("## ")) {
        sections.push({ type: "h2", content: [line.slice(3)] });
        i++;
        continue;
      }

      // ── Blockquote ("> " or ">") ──
      if (line.startsWith(">")) {
        const bqLines: string[] = [];
        while (i < lines.length && lines[i].trimStart().startsWith(">")) {
          bqLines.push(lines[i].trimStart().replace(/^>\s?/, ""));
          i++;
        }
        sections.push({ type: "blockquote", content: bqLines });
        continue;
      }

      // ── Bullet item "• " ──
      if (line.startsWith("• ")) {
        const items: string[] = [];
        while (i < lines.length && lines[i].startsWith("• ")) {
          items.push(lines[i].replace(/^•\s?/, ""));
          i++;
        }
        sections.push({ type: "bullets", content: items });
        continue;
      }

      // ── Table block ──
      if (line.includes("|") && i + 1 < lines.length && /^\|?[\s\-|]+\|?$/.test(lines[i + 1])) {
        const headerLine = line;
        const sepLine   = lines[i + 1];
        const rowLines: string[] = [];
        i += 2;
        while (i < lines.length && lines[i].includes("|")) {
          rowLines.push(lines[i]);
          i++;
        }
        sections.push({ type: "table", content: [headerLine, sepLine, ...rowLines] });
        continue;
      }

      // ── Blank line gap ──
      if (line === "") { i++; continue; }

      // ── Paragraph ──
      const paraLines: string[] = [];
      while (
        i < lines.length &&
        lines[i].trim() !== "" &&
        !lines[i].startsWith("### ") &&
        !lines[i].startsWith("## ") &&
        !lines[i].startsWith(">") &&
        !/^[•\-]\s?/.test(lines[i]) &&
        !(lines[i].includes("|") && i + 1 < lines.length && /^\|?[\s\-|]+\|?$/.test(lines[i + 1]))
      ) {
        paraLines.push(lines[i]);
        i++;
      }
      if (paraLines.length) sections.push({ type: "para", content: paraLines });
    }

    return sections;
  }

  function RenderSectionBody({ body }: { body: string }) {
    const sections = parseBody(body);

    return (
      <div className="space-y-4">
        {sections.map((sec, si) => {
          switch (sec.type) {
            case "h2":
              return (
                <h3 key={si} className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-5 mb-2.5 pb-1 border-b border-slate-200/60 dark:border-slate-700/60">
                  <RenderInline text={sec.content.join(" ")} />
                </h3>
              );
            case "h3":
              return (
                <h4 key={si} className="text-base font-bold text-slate-800 dark:text-slate-200 mt-4 mb-2">
                  <RenderInline text={sec.content.join(" ")} />
                </h4>
              );
            case "blockquote": {
              const text = sec.content.join(" ");
              const isLetOp = text.startsWith("Let op") || text.startsWith("Note") || text.startsWith("Achtung");
              return (
                <blockquote
                  key={si}
                  className={cn(
                    "my-3 pl-4 border-l-[3px] pr-3 py-2 rounded-r-lg italic text-sm leading-relaxed",
                    isLetOp
                      ? "border-amber-400 bg-gradient-to-r from-amber-50 to-orange-50/60 dark:from-amber-900/20 dark:to-orange-900/10 text-amber-800 dark:text-amber-300"
                      : "border-indigo-300 bg-indigo-50/50 dark:bg-indigo-900/15 dark:border-indigo-700 text-slate-600 dark:text-slate-400"
                  )}
                >
                  <span className="not-italic text-lg font-serif mr-1 opacity-60">{isLetOp ? "⚡" : '"'}</span>
                  <RenderInline text={text} />
                </blockquote>
              );
            }
            case "bullets":
              return (
                <ul key={si} className="my-3 ml-1 space-y-1.5">
                  {sec.content.map((item, bi) => (
                    <li key={bi} className="relative pl-5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <span className="absolute left-0 top-[0.55rem] w-1.5 h-1.5 rounded-full bg-indigo-400 dark:bg-indigo-500 flex-shrink-0" />
                      <RenderInline text={item} />
                    </li>
                  ))}
                </ul>
              );
            case "table": {
              const headerCells = sec.content[0].split("|").map((c: string) => c.trim()).filter(Boolean);
              const rows = sec.content.slice(2).map((r: string) =>
                r.split("|").map((c: string) => c.trim()).filter(Boolean)
              );
              return (
                <div key={si} className="my-4 overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-600">
                        {headerCells.map((h: string, hi: number) => (
                          <th key={hi} className="px-3 py-2 text-left text-[11px] font-bold text-white uppercase tracking-wider">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row: string[], ri: number) => (
                        <tr key={ri} className={ri % 2 === 1 ? "bg-slate-50/60 dark:bg-slate-800/30" : undefined}>
                          {row.map((cell: string, ci: number) => (
                            <td key={ci} className="px-3 py-2 text-sm text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700/50">
                              <RenderInline text={cell} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            case "para":
            default: {
              const text = sec.content.join(" ").trim();
              if (!text) return null;
              return (
                <p key={si} className="my-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <RenderInline text={text} />
                </p>
              );
            }
          }
        })}
      </div>
    );
  }

  /* bodyMarkdown → array of { type, content } */

  /* ════════════════════════════════════════════════
   * RENDER
   * ════════════════════════════════════════════════ */

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* ── HEADER ── */}
      <header className="mb-8">
        <div className="flex items-center gap-2.5 mb-3 flex-wrap">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:text-slate-400 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          )}
          <span
            className="rounded-full px-2.5 py-0.5 text-[11px] font-black leading-none tracking-wide uppercase"
            style={{ background: "var(--badge, #6366f1)", color: "#fff" }}
          >
            {lvlToCEFR(lesson.level)}
          </span>
          <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600 dark:text-slate-400">
            {lesson.topic}
          </span>
        </div>
        <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3 leading-tight">
          {lesson.title}
        </h1>
        {lesson.overview && (
          <div className="rounded-2xl border border-indigo-200/70 dark:border-indigo-800/40 bg-gradient-to-br from-indigo-50 via-white to-purple-50/30 dark:from-indigo-900/15 dark:via-slate-800/50 dark:to-purple-900/10 p-5 shadow-sm">
            <div className="grid gap-3.5 sm:grid-cols-3">
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs font-black">1</span>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Gebruik je voor wat <span className="font-bold text-indigo-700 dark:text-indigo-400">nu</span>, altijd of regelmatig gebeurt
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 text-xs font-black">2</span>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Meeste werkwoorden eindigen op <span className="font-semibold text-emerald-700 dark:text-emerald-400 font-mono text-xs bg-emerald-100 dark:bg-emerald-900/40 px-1.5 py-0.5 rounded">-en</span>
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 text-xs font-black">3</span>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Stam = <span className="font-bold text-amber-700 dark:text-amber-400">infinitief</span> minus <span className="font-semibold text-amber-700 dark:text-amber-400 font-mono text-xs bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded">-en</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="space-y-7">
        {/* ═══════════════════════════════════════
          * CONJUGATION TABLE
          * ═══════════════════════════════════════ */}
        {lesson.conjugationTable && (
          <SectionCard
            id="conjugation"
            icon={<BookOpen className="w-5 h-5" />}
            title="Vervoeging"
          >
            <div className="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm">
              <table className="w-full border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-gradient-to-r from-emerald-500 to-teal-500">
                    {lesson.conjugationTable.header.split("|").map((h, i) => (
                      <th
                        key={i}
                        className="px-3 py-2 text-left text-xs font-bold text-white uppercase tracking-wider"
                      >
                        {h.trim()}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {lesson.conjugationTable.rows.map((row, ri) => (
                    <tr
                      key={ri}
                      className={ri % 2 === 0 ? "bg-white dark:bg-slate-800/50" : "bg-slate-50/50 dark:bg-slate-800/20"}
                    >
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`px-3 py-2.5 border-t border-slate-200 dark:border-slate-700 text-sm ${
                            ci === 0
                              ? "font-bold text-slate-900 dark:text-slate-100"
                              : "text-slate-600 dark:text-slate-400 text-center font-mono"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        )}

        {/* ═══════════════════════════════════════
          * RULES CARDS
          * ═══════════════════════════════════════ */}
        {lesson.rulesTable && lesson.rulesTable.length > 0 && (
          <SectionCard
            id="rules"
            icon={<BookOpen className="w-5 h-5" />}
            title="Grammaticaregels"
          >
            <div className="grid sm:grid-cols-2 gap-3">
              {lesson.rulesTable.map((r, i) => {
                const c = detailColors[i % detailColors.length];
                return (
                  <div
                    key={i}
                    className={`rounded-xl ring-1 ${c.ring} p-4 bg-white dark:bg-slate-800/60 hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start gap-2.5 mb-2.5">
                      <div className={`w-8 h-8 rounded-lg ${c.iconBg} flex items-center justify-center flex-shrink-0 text-sm font-bold ${c.iconText}`}>
                        {i + 1}
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm leading-snug">{r.rule}</h3>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <p className="font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Structuur</p>
                        <p className="font-mono bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-md px-2.5 py-1.5 inline-block">{r.structure}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Voorbeeld</p>
                        <p className="text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-700/30 rounded-md px-2.5 py-1.5">{r.example}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Gebruik</p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{r.usage}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionCard>
        )}

        {/* ═══════════════════════════════════════
          * TIME EXPRESSIONS TABLE
          * ═══════════════════════════════════════ */}
        {lesson.timeExpressions && (
          <SectionCard
            id="time-expressions"
            icon={<Clock className="w-5 h-5" />}
            title="Tijdsuitdrukkingen"
          >
            <RichTable
              headers={lesson.timeExpressions.header.split("|").map(h => h.trim()) as string[]}
              rows={lesson.timeExpressions.rows as never[]}
              theme="amber"
              rowSpan
            />
          </SectionCard>
        )}

        {/* ═══════════════════════════════════════
          * DETAILED EXPLANATION — ACCORDION
          * ═══════════════════════════════════════ */}
        {lesson.details && lesson.details.length > 0 && (
          <SectionCard
            id="explanation"
            icon={<FileText className="w-5 h-5" />}
            title="Gedetailleerde uitleg"
          >
            <Accordion type="single" className="space-y-2">
              {lesson.details.map((sec, i) => {
                const c = detailColors[i % detailColors.length];
                return (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger
                      className={cn(
                        "group flex items-center gap-3 p-4 rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-800/60",
                        "hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200",
                        "focus-visible:border-ring focus-visible:ring-ring/50",
                        "data-[state=open]:ring-2 data-[state=open]:ring-indigo-200 dark:data-[state=open]:ring-indigo-800 data-[state=open]:border-indigo-300 dark:data-[state=open]:border-indigo-700"
                      )}
                    >
                      <div className={`w-9 h-9 rounded-xl ${c.iconBg} flex items-center justify-center font-bold text-sm shrink-0 ${c.iconText} transition-transform duration-200 group-hover:scale-110 group-data-[state=open]:scale-110`}>
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">{sec.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="px-1">
                        <RenderSectionBody body={sec.body} />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </SectionCard>
        )}

        {/* ═══════════════════════════════════════
          * CALLOUTS
          * ═══════════════════════════════════════ */}
        {lesson.callouts && lesson.callouts.length > 0 && (
          <SectionCard
            id="callouts"
            icon={<AlertCircle className="w-5 h-5" />}
            title="Belangrijke punten"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {lesson.callouts.map((c, i) => {
                const colorMap: Record<string, CalloutColor> = {
                  remember: "indigo",
                  tip:      "emerald",
                  note:     "amber",
                  key:      "rose",
                };
                const iconMap: Record<string, React.ReactNode> = {
                  remember: <Lightbulb className="w-4 h-4" />,
                  tip:      <Pin className="w-4 h-4" />,
                  note:     <Bell className="w-4 h-4" />,
                  key:      <Key className="w-4 h-4" />,
                };
                const entryColor = colorMap[c.type] ?? "indigo";
                return (
                  <CalloutBox key={i} icon={iconMap[c.type] ?? <Lightbulb className="w-4 h-4" />} label={c.label} color={entryColor}>
                    {c.text}
                  </CalloutBox>
                );
              })}
            </div>
          </SectionCard>
        )}

        {/* ═══════════════════════════════════════
          * MISTAKES TABLE
          * ═══════════════════════════════════════ */}
        {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
          <SectionCard
            id="mistakes"
            icon={<Target className="w-5 h-5" />}
            title="Veelgemaakte fouten"
          >
            <MistakesTable mistakes={lesson.commonMistakes} />
          </SectionCard>
        )}

        {/* ═══════════════════════════════════════
          * QUICK REVIEW — numbered cards
          * ═══════════════════════════════════════ */}
        {lesson.review && lesson.review.length > 0 && (
          <SectionCard
            id="review"
            icon={<CheckCircle2 className="w-5 h-5" />}
            title="Snelle herhaling"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {lesson.review.map((item, i) => {
                const bgColors = [
                  "bg-gradient-to-br from-indigo-500 to-indigo-600",
                  "bg-gradient-to-br from-emerald-500 to-emerald-600",
                  "bg-gradient-to-br from-amber-500 to-amber-600",
                  "bg-gradient-to-br from-rose-500 to-rose-600",
                  "bg-gradient-to-br from-purple-500 to-purple-600",
                  "bg-gradient-to-br from-blue-500 to-blue-600",
                ];
                const bg = bgColors[i % bgColors.length];
                return (
                  <div
                    key={i}
                    className="group rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-800/60 p-4 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-200 flex items-start gap-3"
                  >
                    <span
                      className={`inline-flex items-center justify-center w-7 h-7 rounded-lg ${bg} text-white text-[11px] font-black flex-shrink-0 shadow-md shadow-indigo-500/20`}
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-0.5">
                      {item.split(/(\*\*.*?\*\*|\*.*?\*)/g).map((part, i) => {
                        if (part.startsWith("**") && part.endsWith("**"))
                          return <strong key={i} className="font-bold text-slate-900 dark:text-slate-100">{part.slice(2, -2)}</strong>;
                        if (part.startsWith("*") && part.endsWith("*"))
                          return <em key={i} className="italic text-slate-600 dark:text-slate-400">{part.slice(1, -1)}</em>;
                        return <span key={i}>{part}</span>;
                      })}
                    </p>
                  </div>
                );
              })}
            </div>
          </SectionCard>
        )}

        {/* ═══════════════════════════════════════
          * PRACTICE QUESTIONS
          * ═══════════════════════════════════════ */}
        {lesson.qa && lesson.qa.length > 0 && (
          <SectionCard
            id="qa"
            icon={<HelpCircle className="w-5 h-5" />}
            title="Oefenvragen"
          >
            <QATable qa={lesson.qa} />
          </SectionCard>
        )}

        {/* ═══════════════════════════════════════
          * ACTION BUTTONS
          * ═══════════════════════════════════════ */}
        <div className="flex flex-col gap-3 sm:flex-row pt-3">
          {completed ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-500/30">
              <CheckCircle2 className="w-4 h-4" />
              Voltooid · +{XP_REWARDS.GRAMMAR_LESSON_COMPLETE} XP
            </span>
          ) : (
            <button
              onClick={onComplete}
              className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-indigo-500/30 transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/40 active:scale-[0.98]"
            >
              Markeer als voltooid · +{XP_REWARDS.GRAMMAR_LESSON_COMPLETE} XP
            </button>
          )}

          {hasTest && (
            <button
              onClick={onTest}
              className="rounded-xl border-2 border-amber-400 bg-amber-50 dark:bg-amber-900/10 px-5 py-2.5 text-sm font-bold text-amber-700 dark:text-amber-300 transition-all hover:bg-amber-100 dark:hover:bg-amber-900/20 active:scale-[0.98]"
            >
              Doe de test
            </button>
          )}
        </div>

        <AdSlot className="mt-2" />
      </div>
    </div>
  );
}

export default GrammarLessonDesign;
