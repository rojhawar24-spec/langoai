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
  ArrowLeft,
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

type CalloutColor = "amber" | "indigo" | "emerald" | "rose";

/* ═══════════════════════════════════════════════════════
 * SECTION TITLE — narrow accent bar, optional icon
 * ═══════════════════════════════════════════════════════ */

function SectionTitle({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <h2 className="flex items-center gap-2.5 text-base font-extrabold text-slate-900 dark:text-white -mb-0.5">
      <span className="h-px w-6 bg-indigo-400 dark:bg-indigo-500 flex-shrink-0" />
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {label}
    </h2>
  );
}

/* ═══════════════════════════════════════════════════════
 * CALLOUT STYLES — used by flat card layout
 * ═══════════════════════════════════════════════════════ */

const calloutStyles: Record<CalloutColor, { iconBg: string; iconColor: string }> = {
  amber:  { iconBg: "bg-amber-100 dark:bg-amber-900/40",   iconColor: "text-amber-600 dark:text-amber-400" },
  indigo: { iconBg: "bg-indigo-100 dark:bg-indigo-900/40", iconColor: "text-indigo-600 dark:text-indigo-400" },
  emerald:{ iconBg: "bg-emerald-100 dark:bg-emerald-900/40",iconColor: "text-emerald-600 dark:text-emerald-400" },
  rose:   { iconBg: "bg-rose-100 dark:bg-rose-900/40",     iconColor: "text-rose-600 dark:text-rose-400" },
};

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
    <section id={id} className="scroll-mt-20 gl-id-section rounded-2xl bg-slate-50/60 dark:bg-slate-800/30 -mx-2 sm:-mx-4 px-2 sm:px-4 py-5">
      <SectionTitle icon={icon} label={title} />
      <div className="mt-3">{children}</div>
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

  /* ── Rotating border-left accent for accordion items ── */
  const sectionAccordionBorder = [
    "border-l-2 border-l-indigo-400 data-[state=open]:border-l-indigo-500",
    "border-l-2 border-l-emerald-400 data-[state=open]:border-l-emerald-500",
    "border-l-2 border-l-purple-400 data-[state=open]:border-l-purple-500",
    "border-l-2 border-l-rose-400 data-[state=open]:border-l-rose-500",
    "border-l-2 border-l-amber-400 data-[state=open]:border-l-amber-500",
  ];

  /* ── Onthoud / blockquote / list / code rendering for detail body HTML ── */
  const buildDetailHtml = (raw: string) =>
    typeof raw === "string"
      ? raw
          // ── bold & italic ──
          .replace(/\*\*(.*?)\*\*/g, `<strong>$1</strong>`)
          .replace(/\*(.*?)\*/g, `<em>$1</em>`)
          .replace(/`(.*?)`/g, `<code>$1</code>`)
      : "";

  const enrich = (body: string): string => {
    let html = buildDetailHtml(body);

    // ── Blockquotes ──
    html = html.replace(
      /^> (.*)$/gm,
      `<blockquote class="my-3 pl-4 border-l-4 border-indigo-300 dark:border-indigo-700 py-1.5 pr-3 bg-indigo-50/40 dark:bg-indigo-900/15 rounded-r-lg italic text-slate-600 dark:text-slate-400 leading-relaxed">
        <span class="not-italic text-indigo-500 dark:text-indigo-400 mr-1">"</span>$1<span class="not-italic text-indigo-500 dark:text-indigo-400 ml-1">"</span>
      </blockquote>`
    );

    // ── Bullet list ──
    html = html.replace(/^• (.*)$/gm, `<li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">$1</li>`);

    // ── Paragraph breaks ──
    html = html.replace(/\n\n/g, "</p><p class='my-2.5'>");

    // ── Wrap non-tag lines in <p> ──
    html = html.replace(/^(?!<[a-z])/im, "<p class='my-2.5'>");

    // ── Close orphan <p> ──
    html = html.replace(/(?<!>)$/g, "</p>");

    // ── Wrap consecutive <li> in <ul> ──
    html = html.replace(/(<p>\s*)(<li[\s\S]*?<\/li>)+/g, (match) =>
      match.replace(/<p>\s*/, "").replace(/<\/p>/, "")
    );
    html = html.replace(/(<\/li>\s*){2,}/g, "</li>");
    html = html.replace(/<li[\s\S]*?<\/li>/, (match) => `<ul class="my-3 space-y-1.5 pl-1">\n${match}\n</ul>`);

    // ── Tables from markdown pipe syntax ──
    html = html.replace(
      /\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)*)/g,
      (_full, headerRow, bodyRows) => {
        const headers = headerRow.split("|").map((h: string) => h.trim()).filter(Boolean);
        const rows = bodyRows.trim().split("\n").map((r: string) =>
          r.split("|").map((c: string) => c.trim()).filter(Boolean)
        );
        return `
          <div class="overflow-x-auto my-4 rounded-xl border border-slate-200/70 dark:border-slate-700">
            <table class="w-full border-collapse">
              <thead>
                <tr>
                  ${headers.map((h: string) =>
                    `<th class="bg-slate-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-2 text-left">${h}</th>`
                  ).join("")}
                </tr>
              </thead>
              <tbody>
                ${rows.map(
                  (row: string[], ri: number) =>
                    `<tr class="${ri % 2 ? 'bg-slate-50/60 dark:bg-slate-800/30' : ''}">
                      ${row.map((cell: string, ci: number) =>
                        `<td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-300 ${ci === 0 ? 'font-semibold text-slate-800 dark:text-slate-100' : ''} border-t border-slate-100 dark:border-slate-700/50">${cell}</td>`
                      ).join("")}
                    </tr>`
                ).join("")}
              </tbody>
            </table>
          </div>`;
      }
    );

    // ── Indented / italicised extra lines ──
    html = html.replace(
      /^[ \t]+[^\s<].*$/gm,
      (line) =>
        line.startsWith("\t\t") || line.startsWith("      ")
          ? `<p class="ml-6 text-xs text-slate-500 dark:text-slate-500 mt-0.5 my-0.5">${line.trim()}</p>`
          : line
    );

    return html;
  };

  /* ── Markdown-like renderer for card plain-text helpers ── */
  function RenderMarkdown({ text }: { text: string }) {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
    return (
      <span>
        {parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**"))
            return (
              <strong key={i} className="font-bold text-slate-800 dark:text-slate-100">
                {part.slice(2, -2)}
              </strong>
            );
          if (part.startsWith("*") && part.endsWith("*"))
            return (
              <em key={i} className="italic text-slate-600 dark:text-slate-400">
                {part.slice(1, -1)}
              </em>
            );
          if (part.startsWith("`") && part.endsWith("`"))
            return (
              <code
                key={i}
                className="rounded bg-slate-200/60 dark:bg-slate-700/50 px-1.5 py-0.5 text-xs font-mono text-indigo-700 dark:text-indigo-300 font-semibold"
              >
                {part.slice(1, -1)}
              </code>
            );
          return <span key={i}>{part}</span>;
        })}
      </span>
    );
  }

  /* ════════════════════════════════════════════════
   * RENDER
   * ════════════════════════════════════════════════ */

   return (
     <div className="max-w-3xl mx-auto px-4 py-6">
       {/* ═══════════════════════════════════════
         * HEADER
         * ═══════════════════════════════════════ */}
       <header className="mb-10">
         <div className="flex items-center gap-2.5 mb-3 flex-wrap">
           {onBack && (
             <button
               onClick={onBack}
               className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:text-slate-400 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400 transition-colors"
             >
               <ArrowLeft className="h-4 w-4" />
               Back
             </button>
           )}
           <span
             className="rounded-full px-3 py-1 text-[11px] font-black leading-none tracking-wide uppercase bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm"
           >
             {lvlToCEFR(lesson.level)}
           </span>
           <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
             {lesson.topic}
           </span>
         </div>
         <h1 className="text-[1.85rem] font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 leading-tight">
           {lesson.title}
         </h1>
         {lesson.overview && (
           <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl">
             <RenderMarkdown text={lesson.overview} />
           </p>
         )}
       </header>

        <div className="space-y-6">
          {/* ═══════════════════════════════════════
            * ALPHABET TABLE (26 LETTERS) - FIRST UNDER GRAMMAR RULES
            * ═════════════════════════════════════ */}
          {lesson.timeExpressions && (
            <section id="alphabet" className="gl-id-section">
              <SectionTitle icon={<BookOpen className="w-5 h-5 text-indigo-500" />} label="Alfabet – 26 Letters" />
              <div className="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm mt-3">
                <RichTable
                  headers={lesson.timeExpressions.header.split("|").map(h => h.trim()) as string[]}
                  rows={lesson.timeExpressions.rows as never[]}
                  theme="indigo"
                  rowSpan
                />
              </div>
            </section>
          )}
          
          {/* ═══════════════════════════════════════
            * CONJUGATION TABLE
            * ═════════════════════════════════════ */}
          {lesson.conjugationTable && (
            <section id="conjugation" className="gl-id-section">
              <SectionTitle icon={<BookOpen className="w-5 h-5 text-indigo-500" />} label="Vervoeging" />
              <div className="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700/50 shadow-sm mt-3">
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
                            className={`px-3 py-2.5 border-t border-slate-200 dark:border-slate-700/50 text-sm ${
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
            </section>
          )}

         {/* ═══════════════════════════════════════
           * RULES CARDS
           * ═══════════════════════════════════════ */}
         {lesson.rulesTable && lesson.rulesTable.length > 0 && (
           <section id="rules" className="gl-id-section rounded-2xl bg-slate-50/60 dark:bg-slate-800/30 -mx-2 sm:-mx-4 px-2 sm:px-4 py-5">
             <SectionTitle icon={<BookOpen className="w-5 h-5 text-indigo-500" />} label="Grammaticaregels" />
             <div className="grid sm:grid-cols-2 gap-3 mt-3">
                {lesson.rulesTable.map((r, i) => {
                  const barColors = [
                   "bg-indigo-300 dark:bg-indigo-500",
                   "bg-emerald-300 dark:bg-emerald-500",
                   "bg-purple-300 dark:bg-purple-500",
                   "bg-rose-300 dark:bg-rose-500",
                   "bg-amber-300 dark:bg-amber-500",
                 ];
                 const bar = barColors[i % barColors.length];
                 return (
                   <div
                     key={i}
                     className={`flex rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/50 shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-200`}
                   >
                     {/* left accent bar */}
                     <div className={`w-1 flex-shrink-0 self-stretch ${bar}`} />
                     <div className="flex-1 p-4">
                       <h3 className="font-semibold text-sm leading-snug text-slate-900 dark:text-slate-100 mb-2">{r.rule}</h3>
                       <div className="space-y-1.5">
                         <div>
                           <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Structuur</p>
                           <span className="font-mono bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-md px-2.5 py-1.5 text-xs leading-relaxed">{r.structure}</span>
                         </div>
                         <div>
                           <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Voorbeeld</p>
                           <p className="text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-700/30 rounded-md px-2.5 py-1.5 text-xs">{r.example}</p>
                         </div>
                         <div>
                           <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Gebruik</p>
                           <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs">{r.usage}</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 );
               })}
             </div>
           </section>
         )}

         {/* ═══════════════════════════════════════
           * TIME EXPRESSIONS TABLE
           * ═══════════════════════════════════════ */}
         {lesson.timeExpressions && (
           <SectionCard
             id="time-expressions"
             icon={<Clock className="w-5 h-5 text-amber-500" />}
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
           <section id="explanation" className="gl-id-section">
             <SectionTitle icon={<FileText className="w-5 h-5 text-slate-400" />} label="Gedetailleerde uitleg" />
             <Accordion type="single" className="space-y-2 mt-3">
               {lesson.details.map((sec, i) => {
                 const c = detailColors[i % detailColors.length];
                 return (
                   <AccordionItem key={i} value={`item-${i}`}>
                     <AccordionTrigger
                       className={cn(
                         "group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-slate-200/70 dark:border-slate-700/50 bg-white dark:bg-slate-800/40",
                         "hover:bg-slate-50/80 dark:hover:bg-slate-800/60 transition-colors duration-200",
                         "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40",
                         "data-[state=open]:bg-white data-[state=open]:dark:bg-slate-800/60",
                         "text-left",
                         sectionAccordionBorder[i % sectionAccordionBorder.length]
                       )}
                     >
                       <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${c.iconBg} flex items-center justify-center text-sm font-bold ${c.iconText} transition-opacity duration-200 group-hover:opacity-80`}>
                         {i + 1}
                       </div>
                       <div className="flex-1 min-w-0 text-left">
                         <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">{sec.title}</span>
                       </div>
                     </AccordionTrigger>
                     <AccordionContent>
                       <div
                         className={cn(
                           /* ── CONTENT THEME ── */
                           "text-sm leading-relaxed text-slate-700 dark:text-slate-300 space-y-0.5 p-4 rounded-b-xl bg-slate-50/50 dark:bg-slate-800/20 border border-t-0 border-slate-200/60 dark:border-slate-700/40",
                           "prose prose-sm dark:prose-invert max-w-none",
                           /* ── Markdown HTML overrides ── */
                           "[&_p]:my-2.5 [&_p]:text-slate-700 [&_p]:dark:text-slate-300",
                           "[&_strong]:font-bold [&_strong]:text-slate-900 [&_strong]:dark:text-slate-100",
                           "[&_em]:italic [&_em]:text-slate-600 [&_em]:dark:text-slate-400",
                           "[&_code]:rounded [&_code]:bg-slate-200/60 [&_code]:dark:bg-slate-700/50 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-xs [&_code]:font-mono [&_code]:font-bold [&_code]:text-indigo-700 [&_code]:dark:text-indigo-300",
                           "[&_blockquote]:my-3 [&_blockquote]:pl-4 [&_blockquote]:border-l-4 [&_blockquote]:border-indigo-300 [&_blockquote]:dark:border-indigo-700 [&_blockquote]:py-1.5 [&_blockquote]:pr-3 [&_blockquote]:bg-indigo-50/40 [&_blockquote]:dark:bg-indigo-900/15 [&_blockquote]:rounded-r-lg [&_blockquote]:italic [&_blockquote]:text-slate-600 [&_blockquote]:dark:text-slate-400",
                           "[&_ul]:my-3 [&_ul]:space-y-1.5 [&_ul]:pl-1 [&_ul]:list-none",
                           "[&_li]:ml-1.5 [&_li]:relative [&_li]:pl-5 [&_li]:text-slate-700 [&_li]:dark:text-slate-300",
                           "[&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-2 [&_li]:before:w-1.5 [&_li]:before:h-1.5 [&_li]:before:rounded-full [&_li]:before:bg-indigo-400 [&_li]:dark:before:bg-indigo-500",
                           "[&_table]:my-4 [&_table]:overflow-x-auto [&_table]:rounded-xl [&_table]:border [&_table]:border-slate-200/70 [&_table]:dark:border-slate-700 [&_table]:shadow-sm",
                           "[&_th]:bg-slate-600 [&_th]:text-white [&_th]:text-[11px] [&_th]:font-bold [&_th]:uppercase [&_th]:tracking-wider [&_th]:px-3 [&_th]:py-2 [&_th]:text-left",
                           "[&_td]:px-3 [&_td]:py-2 [&_td]:text-sm [&_td]:text-slate-700 [&_td]:dark:text-slate-300 [&_td]:border-t [&_td]:border-slate-100 [&_td]:dark:border-slate-700/50",
                           "[&_tr:nth-child(even)]:bg-slate-50/60 [&_tr:nth-child(even)]:dark:bg-slate-800/30",
                         )}
                         dangerouslySetInnerHTML={{ __html: enrich(sec.body) }}
                       />
                     </AccordionContent>
                   </AccordionItem>
                 );
               })}
             </Accordion>
           </section>
         )}

         {/* ═══════════════════════════════════════
           * CALLOUTS
           * ═══════════════════════════════════════ */}
         {lesson.callouts && lesson.callouts.length > 0 && (
           <section id="callouts" className="gl-id-section">
             <SectionTitle icon={<AlertCircle className="w-5 h-5 text-slate-400" />} label="Belangrijke punten" />
             <div className="grid gap-3 sm:grid-cols-2 mt-3">
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
                 const s = calloutStyles[entryColor];
                 return (
                   <div
                     key={i}
                     className={`flex gap-3 rounded-xl border border-slate-200/70 dark:border-slate-700/50 bg-white dark:bg-slate-800/50 shadow-sm p-4 transition-shadow hover:shadow-md`}
                   >
                     <span className={`flex-shrink-0 mt-0.5 h-8 w-8 rounded-lg ${s.iconBg} flex items-center justify-center ${s.iconColor}`}>
                       {iconMap[c.type] ?? <Lightbulb className="w-4 h-4" />}
                     </span>
                     <div>
                       <p className="text-[11px] font-bold uppercase tracking-wider mb-1 text-slate-400">{c.label}</p>
                       <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{c.text}</p>
                     </div>
                   </div>
                 );
               })}
             </div>
           </section>
         )}

         {/* ═══════════════════════════════════════
           * MISTAKES TABLE
           * ═══════════════════════════════════════ */}
         {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
           <SectionCard
             id="mistakes"
             icon={<Target className="w-5 h-5 text-rose-500" />}
             title="Veelgemaakte fouten"
           >
             <div className="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700/50 shadow-sm mt-3">
               <table className="w-full border-collapse min-w-[600px]">
                 <thead>
                   <tr>
                     <th className="bg-slate-500 text-white font-semibold text-[11px] uppercase tracking-wider px-3 py-2.5 text-left">Incorrect</th>
                     <th className="bg-slate-500 text-white font-semibold text-[11px] uppercase tracking-wider px-3 py-2.5 text-left">Correct</th>
                     <th className="bg-slate-500 text-white font-semibold text-[11px] uppercase tracking-wider px-3 py-2.5 text-left">Why?</th>
                   </tr>
                 </thead>
                 <tbody>
                   {lesson.commonMistakes.map((m, i) => (
                     <tr key={i} className={i % 2 === 1 ? "bg-slate-50/60 dark:bg-slate-800/30" : undefined}>
                       <td className="px-3 py-2.5 text-sm text-rose-600 dark:text-rose-400 line-through font-medium">{m.incorrect}</td>
                       <td className="px-3 py-2.5 text-sm text-emerald-700 dark:text-emerald-400 font-semibold">{m.correct}</td>
                       <td className="px-3 py-2.5 text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed">{m.explanation}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </SectionCard>
         )}

         {/* ═══════════════════════════════════════
           * QUICK REVIEW — pill bullets
           * ═══════════════════════════════════════ */}
         {lesson.review && lesson.review.length > 0 && (
           <SectionCard
             id="review"
             icon={<CheckCircle2 className="w-5 h-5 text-emerald-500" />}
             title="Snelle herhaling"
           >
             <ul className="space-y-2 mt-3">
               {lesson.review.map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 group">
                   <span className="inline-flex items-center justify-center w-5 h-5 mt-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[10px] font-bold flex-shrink-0">
                     {i + 1}
                   </span>
                   <span className="flex-1 leading-relaxed">
                     <RenderMarkdown text={item} />
                   </span>
                 </li>
               ))}
             </ul>
           </SectionCard>
         )}

         {/* ═══════════════════════════════════════
           * PRACTICE QUESTIONS
           * ═══════════════════════════════════════ */}
         {lesson.qa && lesson.qa.length > 0 && (
           <SectionCard
             id="qa"
             icon={<HelpCircle className="w-5 h-5 text-indigo-500" />}
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
             <span className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-emerald-700 dark:text-emerald-400 bg-white dark:bg-slate-800 border-2 border-emerald-400 dark:border-emerald-500 shadow-sm">
               <CheckCircle2 className="w-4 h-4" />
               Voltooid · +{XP_REWARDS.GRAMMAR_LESSON_COMPLETE} XP
             </span>
           ) : (
             <button
               onClick={onComplete}
               className="rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-indigo-500/25 transition-all hover:shadow-lg hover:shadow-indigo-500/35 hover:brightness-110 active:scale-[0.98]"
             >
               Markeer als voltooid · +{XP_REWARDS.GRAMMAR_LESSON_COMPLETE} XP
             </button>
           )}

           {hasTest && (
             <button
               onClick={onTest}
               className="rounded-xl border-2 border-amber-400/70 bg-white dark:bg-slate-800/60 px-5 py-2.5 text-sm font-bold text-amber-700 dark:text-amber-300 transition-all hover:bg-amber-50/80 dark:hover:bg-amber-900/10 hover:border-amber-400 active:scale-[0.98] shadow-sm"
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
