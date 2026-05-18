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

/* ── Unified table style (colour: indigo | emerald | amber | slate) ── */
const unifiedTable: Record<TableTheme, {
  th: string; td: string; odd: string;
  col0?: string; colN?: string;
}> = {
  indigo: {
    th: "bg-indigo-600 text-white",
    td: "px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 border-t border-indigo-100 dark:border-indigo-800/30",
    odd: "bg-indigo-50/40 dark:bg-indigo-900/10",
    col0: "font-semibold text-slate-900 dark:text-slate-100",
    colN: "text-slate-600 dark:text-slate-400 text-center font-mono",
  },
  emerald: {
    th: "bg-emerald-600 text-white",
    td: "px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 border-t border-emerald-100 dark:border-emerald-800/30",
    odd: "bg-emerald-50/40 dark:bg-emerald-900/10",
    col0: "font-semibold text-slate-900 dark:text-slate-100",
    colN: "text-slate-600 dark:text-slate-400 text-center font-mono",
  },
  amber: {
    th: "bg-amber-600 text-white",
    td: "px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 border-t border-amber-100 dark:border-amber-800/30",
    odd: "bg-amber-50/40 dark:bg-amber-900/10",
    col0: "font-semibold text-slate-900 dark:text-slate-100",
    colN: "text-slate-600 dark:text-slate-400 text-center font-mono",
  },
  slate: {
    th: "bg-slate-600 text-white",
    td: "px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700/50",
    odd: "bg-slate-50/60 dark:bg-slate-800/30",
    col0: "font-semibold text-slate-800 dark:text-slate-100",
    colN: "text-slate-600 dark:text-slate-400 text-center font-mono",
  },
};

// ─── Multilingual UI labels ──────────────────────────────────────────────
const UI_LABELS: Record<string, Record<string, string>> = {
  en: {
    alphabet: "Alphabet – 26 Letters",
    conjugation: "Conjugation",
    rules: "Grammar Rules",
    timeExpressions: "Time Expressions",
    detailedExplanation: "Detailed Explanation",
    importantPoints: "Important Points",
    commonMistakes: "Common Mistakes",
    quickReview: "Quick Review",
    practiceQuestions: "Practice Questions",
    structure: "Structure",
    example: "Example",
    usage: "Usage",
    incorrect: "Incorrect",
    correct: "Correct",
    why: "Why?",
    question: "Question",
    answer: "Answer",
    tapToReveal: "Tap to reveal",
    markComplete: "Mark as completed",
    completed: "Completed",
    takeTest: "Take the test",
    back: "Back",
  },
  nl: {
    alphabet: "Alfabet – 26 Letters",
    conjugation: "Vervoeging",
    rules: "Grammaticaregels",
    timeExpressions: "Tijdsuitdrukkingen",
    detailedExplanation: "Gedetailleerde uitleg",
    importantPoints: "Belangrijke punten",
    commonMistakes: "Veelgemaakte fouten",
    quickReview: "Snelle herhaling",
    practiceQuestions: "Oefenvragen",
    structure: "Structuur",
    example: "Voorbeeld",
    usage: "Gebruik",
    incorrect: "Incorrect",
    correct: "Correct",
    why: "Waarom?",
    question: "Vraag",
    answer: "Antwoord",
    tapToReveal: "Tik om te onthullen",
    markComplete: "Markeer als voltooid",
    completed: "Voltooid",
    takeTest: "Doe de test",
    back: "Terug",
  },
  fr: {
    alphabet: "Alphabet – 26 Lettres",
    conjugation: "Conjugaison",
    rules: "Règles de grammaire",
    timeExpressions: "Expressions temporelles",
    detailedExplanation: "Explication détaillée",
    importantPoints: "Points importants",
    commonMistakes: "Erreurs fréquentes",
    quickReview: "Révision rapide",
    practiceQuestions: "Questions d’entraînement",
    structure: "Structure",
    example: "Exemple",
    usage: "Utilisation",
    incorrect: "Incorrect",
    correct: "Correct",
    why: "Pourquoi ?",
    question: "Question",
    answer: "Réponse",
    tapToReveal: "Appuyez pour révéler",
    markComplete: "Marquer comme terminé",
    completed: "Terminé",
    takeTest: "Passer le test",
    back: "Retour",
  },
  es: {
    alphabet: "Alfabeto – 26 Letras",
    conjugation: "Conjugación",
    rules: "Reglas gramaticales",
    timeExpressions: "Expresiones de tiempo",
    detailedExplanation: "Explicación detallada",
    importantPoints: "Puntos importantes",
    commonMistakes: "Errores comunes",
    quickReview: "Repaso rápido",
    practiceQuestions: "Preguntas de práctica",
    structure: "Estructura",
    example: "Ejemplo",
    usage: "Uso",
    incorrect: "Incorrecto",
    correct: "Correcto",
    why: "¿Por qué?",
    question: "Pregunta",
    answer: "Respuesta",
    tapToReveal: "Toca para revelar",
    markComplete: "Marcar como completado",
    completed: "Completado",
    takeTest: "Hacer la prueba",
    back: "Volver",
  },
  de: {
    alphabet: "Alphabet – 26 Buchstaben",
    conjugation: "Konjugation",
    rules: "Grammatikregeln",
    timeExpressions: "Zeitausdrücke",
    detailedExplanation: "Ausführliche Erklärung",
    importantPoints: "Wichtige Punkte",
    commonMistakes: "Häufige Fehler",
    quickReview: "Schnelle Wiederholung",
    practiceQuestions: "Übungsfragen",
    structure: "Struktur",
    example: "Beispiel",
    usage: "Verwendung",
    incorrect: "Falsch",
    correct: "Richtig",
    why: "Warum?",
    question: "Frage",
    answer: "Antwort",
    tapToReveal: "Zum Aufdecken tippen",
    markComplete: "Als abgeschlossen markieren",
    completed: "Abgeschlossen",
    takeTest: "Test machen",
    back: "Zurück",
  },
};

/* ═══════════════════════════════════════════════════════
 * SHARED TABLES
 * ═══════════════════════════════════════════════════════ */

function RichTable<T extends readonly string[]>({
  headers,
  rows,
  theme = "slate",
  rowSpan = false,
}: {
  headers: readonly string[];
  rows: T[];
  theme?: TableTheme;
  rowSpan?: boolean;
}) {
  const s = unifiedTable[theme];
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
                <td key={ci}>
                  <span className={`block ${ci === 0 ? s.col0 : ""} ${ci > 0 ? s.colN : ""} ${s.td} whitespace-pre-wrap`}>
                    {cell}
                  </span>
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
 * Q&A TABLE – now receives labels for dynamic headers
 * ═══════════════════════════════════════════════════════ */

function QATable({
  qa,
  labels,
}: {
  qa: { question: string; answer: string }[];
  labels: Record<string, string>;
}) {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const toggle = (i: number) =>
    setRevealed((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm">
      <table className="w-full border-collapse min-w-[500px]">
        <thead>
          <tr>
            <th className="bg-slate-600 text-white font-semibold text-[11px] uppercase tracking-wider px-3 py-2.5 text-left w-12">
              #
            </th>
            <th className="bg-slate-600 text-white font-semibold text-[11px] uppercase tracking-wider px-3 py-2.5 text-left">
              {labels.question}
            </th>
            <th className="bg-slate-600 text-white font-semibold text-[11px] uppercase tracking-wider px-3 py-2.5 text-left">
              {labels.answer}
            </th>
          </tr>
        </thead>
        <tbody>
          {qa.map((item, i) => (
            <tr
              key={i}
              className={
                i % 2 === 1 ? "bg-slate-50/60 dark:bg-slate-800/30" : undefined
              }
            >
              <td className="px-3 py-2.5 text-sm font-bold text-slate-400 dark:text-slate-500 text-center">
                {i + 1}
              </td>
              <td className="px-3 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200">
                {item.question}
              </td>
              <td className="px-3 py-2.5 text-sm">
                <button
                  onClick={() => toggle(i)}
                  className={`font-medium rounded-lg px-3 py-1.5 text-xs transition-all ${
                    revealed[i]
                      ? "text-emerald-700 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-900/30 shadow-inner"
                      : "text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600"
                  }`}
                >
                  {revealed[i] ? item.answer : labels.tapToReveal}
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

const calloutTheme: Record<CalloutColor, { bg: string; border: string; icon: string; text: string }> = {
  indigo: {
    bg: "bg-gradient-to-br from-indigo-50/80 to-white dark:from-indigo-900/20 dark:to-slate-800/50",
    border: "border-indigo-200 dark:border-indigo-700/50",
    icon: "text-indigo-600 dark:text-indigo-400",
    text: "text-indigo-900 dark:text-indigo-200",
  },
  emerald: {
    bg: "bg-gradient-to-br from-emerald-50/80 to-white dark:from-emerald-900/20 dark:to-slate-800/50",
    border: "border-emerald-200 dark:border-emerald-700/50",
    icon: "text-emerald-600 dark:text-emerald-400",
    text: "text-emerald-900 dark:text-emerald-200",
  },
  amber: {
    bg: "bg-gradient-to-br from-amber-50/80 to-white dark:from-amber-900/20 dark:to-slate-800/50",
    border: "border-amber-200 dark:border-amber-700/50",
    icon: "text-amber-600 dark:text-amber-400",
    text: "text-amber-900 dark:text-amber-200",
  },
  rose: {
    bg: "bg-gradient-to-br from-rose-50/80 to-white dark:from-rose-900/20 dark:to-slate-800/50",
    border: "border-rose-200 dark:border-rose-700/50",
    icon: "text-rose-600 dark:text-rose-400",
    text: "text-rose-900 dark:text-rose-200",
  },
};

const calloutEmoji: Record<string, string> = {
  remember: "💡",
  tip: "💡",
  note: "📌",
  key: "⭐",
};

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
    <section
      id={id}
      className="scroll-mt-20 gl-id-section rounded-2xl bg-slate-50/60 dark:bg-slate-800/30 -mx-2 sm:-mx-4 px-2 sm:px-4 py-5"
    >
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
  // ── Detect language from lesson ID (e.g. "en-gram-1" → "en") ──
  const langCode = lesson.id.split("-")[0]?.toLowerCase() ?? "nl";
  const labels = UI_LABELS[langCode] ?? UI_LABELS["nl"];

  /* ── Level badge colors ── */
  const LEVELS = ["A1", "A2", "B1", "B2", "C1"] as const;
  const lvlToCEFR = (n: number) => LEVELS[Math.min(Math.max(n - 1, 0), 4)];

   /* ── Rule-card full-accent themes ── */
  const barThemes = [
    {
      top: "bg-gradient-to-r from-indigo-400 to-indigo-300 dark:from-indigo-600 dark:to-indigo-500",
      badge: "bg-indigo-50 dark:bg-indigo-900/40",
      titleText: "text-indigo-700 dark:text-indigo-300",
      accent: "#4f46e5",
      accentDark: "#6366f1",
      chipBg: "bg-indigo-50 dark:bg-indigo-900/30",
      chipText: "text-indigo-700 dark:text-indigo-300",
      chipBgLight: "bg-indigo-100/60 dark:bg-indigo-800/30",
      chipTextDark: "text-indigo-800 dark:text-indigo-200",
      chipBgAlt: "bg-slate-50 dark:bg-slate-700/30",
      chipTextMedium: "text-slate-600 dark:text-slate-400",
    },
    {
      top: "bg-gradient-to-r from-emerald-400 to-emerald-300 dark:from-emerald-600 dark:to-emerald-500",
      badge: "bg-emerald-50 dark:bg-emerald-900/40",
      titleText: "text-emerald-700 dark:text-emerald-300",
      accent: "#059669",
      accentDark: "#10b981",
      chipBg: "bg-emerald-50 dark:bg-emerald-900/30",
      chipText: "text-emerald-700 dark:text-emerald-300",
      chipBgLight: "bg-emerald-100/60 dark:bg-emerald-800/30",
      chipTextDark: "text-emerald-800 dark:text-emerald-200",
      chipBgAlt: "bg-slate-50 dark:bg-slate-700/30",
      chipTextMedium: "text-slate-600 dark:text-slate-400",
    },
    {
      top: "bg-gradient-to-r from-violet-400 to-violet-300 dark:from-violet-600 dark:to-violet-500",
      badge: "bg-violet-50 dark:bg-violet-900/40",
      titleText: "text-violet-700 dark:text-violet-300",
      accent: "#7c3aed",
      accentDark: "#8b5cf6",
      chipBg: "bg-violet-50 dark:bg-violet-900/30",
      chipText: "text-violet-700 dark:text-violet-300",
      chipBgLight: "bg-violet-100/60 dark:bg-violet-800/30",
      chipTextDark: "text-violet-800 dark:text-violet-200",
      chipBgAlt: "bg-slate-50 dark:bg-slate-700/30",
      chipTextMedium: "text-slate-600 dark:text-slate-400",
    },
    {
      top: "bg-gradient-to-r from-rose-400 to-rose-300 dark:from-rose-600 dark:to-rose-500",
      badge: "bg-rose-50 dark:bg-rose-900/40",
      titleText: "text-rose-700 dark:text-rose-300",
      accent: "#e11d48",
      accentDark: "#f43f5e",
      chipBg: "bg-rose-50 dark:bg-rose-900/30",
      chipText: "text-rose-700 dark:text-rose-300",
      chipBgLight: "bg-rose-100/60 dark:bg-rose-800/30",
      chipTextDark: "text-rose-800 dark:text-rose-200",
      chipBgAlt: "bg-slate-50 dark:bg-slate-700/30",
      chipTextMedium: "text-slate-600 dark:text-slate-400",
    },
    {
      top: "bg-gradient-to-r from-amber-400 to-amber-300 dark:from-amber-600 dark:to-amber-500",
      badge: "bg-amber-50 dark:bg-amber-900/40",
      titleText: "text-amber-700 dark:text-amber-300",
      accent: "#d97706",
      accentDark: "#f59e0b",
      chipBg: "bg-amber-50 dark:bg-amber-900/30",
      chipText: "text-amber-700 dark:text-amber-300",
      chipBgLight: "bg-amber-100/60 dark:bg-amber-800/30",
      chipTextDark: "text-amber-800 dark:text-amber-200",
      chipBgAlt: "bg-slate-50 dark:bg-slate-700/30",
      chipTextMedium: "text-slate-600 dark:text-slate-400",
    },
  ];

  /* ── Accordion detail colours ── */
  const detailColors = [
    { ring: "ring-indigo-200/60 dark:ring-indigo-500/40",   iconBg: "bg-indigo-100 dark:bg-indigo-900/40",   iconText: "text-indigo-600 dark:text-indigo-400" },
    { ring: "ring-emerald-200/60 dark:ring-emerald-500/40", iconBg: "bg-emerald-100 dark:bg-emerald-900/40", iconText: "text-emerald-600 dark:text-emerald-400" },
    { ring: "ring-violet-200/60 dark:ring-violet-500/40",   iconBg: "bg-violet-100 dark:bg-violet-900/40",   iconText: "text-violet-600 dark:text-violet-400" },
    { ring: "ring-rose-200/60 dark:ring-rose-500/40",       iconBg: "bg-rose-100 dark:bg-rose-900/40",       iconText: "text-rose-600 dark:text-rose-400" },
    { ring: "ring-amber-200/60 dark:ring-amber-500/40",     iconBg: "bg-amber-100 dark:bg-amber-900/40",     iconText: "text-amber-600 dark:text-amber-400" },
  ];

  /* ── Rotating border-left accent for accordion items ── */
  const sectionAccordionBorder = [
    "border-l-2 border-l-indigo-400 data-[state=open]:border-l-indigo-500",
    "border-l-2 border-l-emerald-400 data-[state=open]:border-l-emerald-500",
    "border-l-2 border-l-violet-400 data-[state=open]:border-l-violet-500",
    "border-l-2 border-l-rose-400 data-[state=open]:border-l-rose-500",
    "border-l-2 border-l-amber-400 data-[state=open]:border-l-amber-500",
  ];

  /* ── Markdown / content enrichment ── */
  const buildDetailHtml = (raw: string) =>
    typeof raw === "string"
      ? raw
          .replace(/\*\*(.*?)\*\*/g, `<strong>$1</strong>`)
          .replace(/\*(.*?)\*/g, `<em>$1</em>`)
          .replace(/`(.*?)`/g, `<code>$1</code>`)
      : "";

  const enrich = (body: string, acc?: string): string => {
    let html = buildDetailHtml(body);
    const accent = acc ?? "#64748b";

    html = html.replace(
      /^> (.*)$/gm,
      `<blockquote class="my-3 pl-4 border-l-4 border-indigo-300 dark:border-indigo-700 py-1.5 pr-3 bg-indigo-50/40 dark:bg-indigo-900/15 rounded-r-lg italic text-slate-600 dark:text-slate-400 leading-relaxed">
        <span class="not-italic text-indigo-500 dark:text-indigo-400 mr-1">"</span>$1<span class="not-italic text-indigo-500 dark:text-indigo-400 ml-1">"</span>
      </blockquote>`
    );

    html = html.replace(
      /^• (.*)$/gm,
      `<li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">$1</li>`
    );

    html = html.replace(/\n\n/g, "</p><p class='my-2.5'>");
    html = html.replace(/^(?!<[a-z])/im, "<p class='my-2.5'>");
    html = html.replace(/(?<!>)$/g, "</p>");

    html = html.replace(
      /(<p>\s*)(<li[\s\S]*?<\/li>)+/g,
      (match) => match.replace(/<p>\s*/, "").replace(/<\/p>/, "")
    );
    html = html.replace(/(<\/li>\s*){2,}/g, "</li>");
    html = html.replace(
      /<li[\s\S]*?<\/li>/,
      (match) => `<ul class="my-3 space-y-1.5 pl-1">\n${match}\n</ul>`
    );

    html = html.replace(
      /\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)*)/g,
      (_full, headerRow, bodyRows) => {
        const headers = headerRow
          .split("|")
          .map((h: string) => h.trim())
          .filter(Boolean);
        const rows = bodyRows
          .trim()
          .split("\n")
          .map((r: string) =>
            r
              .split("|")
              .map((c: string) => c.trim())
              .filter(Boolean)
          );
        return `
          <div class="overflow-x-auto my-4 rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm">
            <table class="w-full border-collapse">
              <thead>
                <tr>
                  ${headers
                    .map(
                      (h: string) =>
                        `<th class="bg-[${accent}] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-2.5 text-left">${h}</th>`
                    )
                    .join("")}
                </tr>
              </thead>
              <tbody>
                ${rows
                  .map(
                    (row: string[], ri: number) =>
                      `<tr class="${ri % 2 ? "bg-slate-50/60 dark:bg-slate-800/30" : ""}">
                        ${row
                          .map(
                            (cell: string, ci: number) =>
                              `<td class="px-3 py-2.5 border-t border-slate-100 dark:border-slate-700/50 text-sm text-slate-700 dark:text-slate-300 ${
                                ci === 0
                                  ? "font-semibold text-slate-800 dark:text-slate-100"
                                  : ""
                              }">${cell}</td>`
                          )
                          .join("")}
                      </tr>`
                  )
                  .join("")}
              </tbody>
            </table>
          </div>`;
      }
    );

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
              <strong
                key={i}
                className="font-bold text-slate-800 dark:text-slate-100"
              >
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
      {/* HEADER */}
      <header className="mb-10">
        <div className="flex items-center gap-2.5 mb-3 flex-wrap">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:text-slate-400 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {labels.back}
            </button>
          )}
          <span className="rounded-full px-3 py-1 text-[11px] font-black leading-none tracking-wide uppercase bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm">
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
        {/* ALPHABET TABLE */}
        {lesson.timeExpressions && (
          <section id="alphabet" className="gl-id-section">
            <SectionTitle
              icon={<BookOpen className="w-5 h-5 text-indigo-500" />}
              label={labels.alphabet}
            />
            <div className="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm mt-3">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-500 via-indigo-400 to-purple-500">
                    <th className="w-[56px] px-3 py-2.5 text-left text-[10px] font-black uppercase tracking-wider text-white">Ltr</th>
                    <th className="w-[88px] px-3 py-2.5 text-left text-[10px] font-black uppercase tracking-wider text-white">Spelling</th>
                    <th className="px-3 py-2.5 text-left text-[10px] font-black uppercase tracking-wider text-white">Klank</th>
                    <th className="px-3 py-2.5 text-left text-[10px] font-black uppercase tracking-wider text-white">Voorbeelden</th>
                  </tr>
                </thead>
                <tbody>
                  {lesson.timeExpressions.rows.map(([letter, spelling, sound, examples], ri) => (
                    <tr key={ri} className={ri % 2 === 1 ? "bg-indigo-50/40 dark:bg-indigo-900/10" : "bg-white dark:bg-slate-800/40"}>
                      {/* Letter — indigo */}
                      <td className="px-3 py-2.5 text-sm font-black text-indigo-600 dark:text-indigo-400 border-t border-indigo-100/60 dark:border-indigo-800/30">{letter}</td>
                      {/* Spelling — amber */}
                      <td className="px-3 py-2.5 text-xs font-semibold text-amber-600 dark:text-amber-400 border-t border-indigo-100/60 dark:border-indigo-800/30">{spelling}</td>
                      {/* Sound — slate body; bold/italic children rendered from HTML */}
                      <td className="px-3 py-2.5 text-xs text-slate-700 dark:text-slate-200 leading-relaxed border-t border-indigo-100/60 dark:border-indigo-800/30" dangerouslySetInnerHTML={{ __html: sound }} />
                      {/* Examples — emerald; child spans inherit via forced reset on wrapper */}
                      <td className="px-3 py-2.5 text-[11px] text-emerald-700 dark:text-emerald-400 leading-relaxed border-t border-indigo-100/60 dark:border-indigo-800/30">
                        <span className="[&_em]:text-emerald-600 dark:[&_em]:text-emerald-500 [&_strong]:text-emerald-800 dark:[&_strong]:text-emerald-300 [&_code]:text-emerald-700 dark:[&_code]:text-emerald-400">
                          <RenderMarkdown text={examples} />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* CONJUGATION TABLE */}
        {lesson.conjugationTable && (
          <section id="conjugation" className="gl-id-section">
            <SectionTitle
              icon={<BookOpen className="w-5 h-5 text-indigo-500" />}
              label={labels.conjugation}
            />
            <div className="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700/50 shadow-sm mt-3">
              <table className="w-full border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-emerald-700 dark:to-emerald-600">
                    {lesson.conjugationTable.header
                      .split("|")
                      .map((h, i) => (
                        <th
                          key={i}
                          className="px-3 py-2.5 text-left text-[10px] font-black uppercase tracking-wider text-white"
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
                      className={
                        ri % 2 === 0
                          ? "bg-white dark:bg-slate-800/50"
                          : "bg-slate-50/60 dark:bg-slate-800/30"
                      }
                    >
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`px-3 py-2.5 border-t border-slate-100 dark:border-slate-700/50 text-sm ${
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

         {/* RULES CARDS */}
        {lesson.rulesTable && lesson.rulesTable.length > 0 && (
          <section
            id="rules"
            className="gl-id-section rounded-2xl bg-slate-50/60 dark:bg-slate-800/30 -mx-2 sm:-mx-4 px-2 sm:px-4 py-5"
          >
            <SectionTitle
              icon={<BookOpen className="w-5 h-5 text-indigo-500" />}
              label={labels.rules}
            />
            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              {lesson.rulesTable.map((r, i) => {
                const themed = barThemes[i % barThemes.length];
                return (
                  <div
                    key={i}
                    className="group flex flex-col rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/50 shadow-sm
                                 hover:shadow-lg hover:scale-[1.015] transition-all duration-200 overflow-hidden"
                  >
                    {/* Full-width top accent */}
                    <div className={`h-1.5 shrink-0 ${themed.top}`} />

                    <div className="flex-1 p-4">
                      {/* Rule title — picks accent color */}
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className={`shrink-0 w-7 h-7 rounded-lg ${themed.badge} flex items-center justify-center text-[13px] font-black ${themed.titleText}`}>
                          {i + 1}
                        </span>
                        <h3 className={`font-extrabold text-sm leading-snug ${themed.titleText}`}>
                          {r.rule}
                        </h3>
                      </div>

                      <div className="space-y-2">
                        {/* Structuur */}
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: themed.accent }}>
                            {labels.structure}
                          </p>
                          <p className={`text-xs leading-snug rounded-lg px-3 py-2 ${themed.chipBg} ${themed.chipText}`}>
                            {r.structure}
                          </p>
                        </div>

                        {/* Voorbeeld */}
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: themed.accentDark }}>
                            {labels.example}
                          </p>
                          <p className={`text-xs leading-relaxed rounded-lg px-3 py-2 ${themed.chipBgLight} ${themed.chipTextDark}`}>
                            {r.example}
                          </p>
                        </div>

                        {/* Gebruik */}
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: themed.accent }}>
                            {labels.usage}
                          </p>
                          <p className={`text-xs leading-relaxed rounded-lg px-3 py-2 ${themed.chipBgAlt} ${themed.chipTextMedium}`}>
                            {r.usage}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}



        {/* DETAILED EXPLANATION — ACCORDION */}
        {lesson.details && lesson.details.length > 0 && (
          <section id="explanation" className="gl-id-section">
            <SectionTitle
              icon={<FileText className="w-5 h-5 text-slate-400" />}
              label={labels.detailedExplanation}
            />
            <Accordion type="single" className="space-y-2 mt-3">
              {lesson.details.map((sec, i) => {
                const t = barThemes[i % barThemes.length];
                return (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className={cn(
                      "group overflow-hidden rounded-xl border border-slate-200/60 dark:border-slate-700/50 bg-white dark:bg-slate-800/50 shadow-sm",
                      sectionAccordionBorder[i % sectionAccordionBorder.length]
                    )}
                  >
                    {/* Full-width colour accent bar */}
                    <div className={`h-1.5 w-full shrink-0 ${t.top}`} />

                    <AccordionTrigger
                      className={cn(
                        "flex items-center gap-3 px-4 py-3",
                        "hover:bg-slate-50/70 dark:hover:bg-slate-800/60 transition-colors duration-200",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40",
                        "text-left w-full"
                      )}
                    >
                      {/* Colour badge */}
                      <span
                        className={cn(
                          "shrink-0 h-8 min-w-[32px] px-2 rounded-lg inline-flex items-center justify-center text-[13px] font-black",
                          t.badge, t.titleText
                        )}
                      >
                        {i + 1}
                      </span>
                      {/* Accent-coloured title */}
                      <span className={cn("flex-1 min-w-0 font-extrabold text-[13px]", t.titleText, "truncate")}>
                        {sec.title}
                      </span>
                    </AccordionTrigger>

                    <AccordionContent>
                      <div
                        className={cn(
                          "p-4 space-y-0.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300",
                          "bg-slate-50/50 dark:bg-slate-800/20",
                          "prose prose-sm dark:prose-invert max-w-none",
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
                          "[&_tr:nth-child(even)]:bg-slate-50/60 [&_tr:nth-child(even)]:dark:bg-slate-800/30"
                        )}
                      >
                        <div dangerouslySetInnerHTML={{ __html: enrich(sec.body, t.accent) }} />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </section>
        )}

        {/* CALLOUTS */}
        {lesson.callouts && lesson.callouts.length > 0 && (
          <section id="callouts" className="gl-id-section">
            <SectionTitle
              icon={<AlertCircle className="w-5 h-5 text-slate-400" />}
              label={labels.importantPoints}
            />
            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              {lesson.callouts.map((c, i) => {
                const colorMap: Record<string, CalloutColor> = {
                  remember: "indigo",
                  tip: "emerald",
                  note: "amber",
                  key: "rose",
                };
                const entryColor = colorMap[c.type] ?? "indigo";
                const t = calloutTheme[entryColor];
                const emoji = calloutEmoji[c.type] ?? "💡";
                
                return (
                  <div
                    key={i}
                    className={`group rounded-2xl border ${t.border} ${t.bg} p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 text-2xl">{emoji}</span>
                      <div className="flex-1">
                        <p className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${t.text}`}>
                          {c.label}
                        </p>
                        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                          {c.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* COMMON MISTAKES */}
        {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
          <SectionCard
            id="mistakes"
            icon={<Target className="w-5 h-5 text-rose-500" />}
            title={labels.commonMistakes}
          >
            <div className="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700/50 shadow-sm mt-3">
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-gradient-to-r from-rose-500 to-rose-400 dark:from-rose-600 dark:to-rose-500">
                    <th className="px-3 py-2.5 text-left text-[10px] font-black uppercase tracking-wider text-white">{labels.incorrect}</th>
                    <th className="px-3 py-2.5 text-left text-[10px] font-black uppercase tracking-wider text-white">{labels.correct}</th>
                    <th className="px-3 py-2.5 text-left text-[10px] font-black uppercase tracking-wider text-white">{labels.why}</th>
                  </tr>
                </thead>
                <tbody>
                  {lesson.commonMistakes.map((m, i) => (
                    <tr
                      key={i}
                      className={
                        i % 2 === 1 ? "bg-slate-50/60 dark:bg-slate-800/30" : "bg-white dark:bg-slate-800/40"
                      }
                    >
                      <td className="px-3 py-2.5 text-sm text-rose-600 dark:text-rose-400 line-through font-medium border-t border-slate-100 dark:border-slate-700/50">{m.incorrect}</td>
                      <td className="px-3 py-2.5 text-sm text-emerald-700 dark:text-emerald-400 font-semibold border-t border-slate-100 dark:border-slate-700/50">{m.correct}</td>
                      <td className="px-3 py-2.5 text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed border-t border-slate-100 dark:border-slate-700/50">{m.explanation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        )}

        {/* QUICK REVIEW */}
        {lesson.review && lesson.review.length > 0 && (
          <section id="review" className="gl-id-section">
            <SectionTitle
              icon={<CheckCircle2 className="w-5 h-5 text-emerald-500" />}
              label={labels.quickReview}
            />
            <div className="grid gap-3 sm:grid-cols-2 mt-3">
              {lesson.review.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl bg-gradient-to-br from-emerald-50/80 to-white dark:from-emerald-900/20 dark:to-slate-800/50 border border-emerald-200/60 dark:border-emerald-700/40 p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white text-sm font-bold shadow-sm">
                    {i + 1}
                  </span>
                  <p className="flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    <RenderMarkdown text={item} />
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PRACTICE QUESTIONS */}
        {lesson.qa && lesson.qa.length > 0 && (
          <section id="qa" className="gl-id-section">
            <SectionTitle
              icon={<HelpCircle className="w-5 h-5 text-indigo-500" />}
              label={labels.practiceQuestions}
            />
            {(() => {
              const [revealed, setRevealed] = useState<Record<number, boolean>>({});
              const toggle = (i: number) =>
                setRevealed((prev) => ({ ...prev, [i]: !prev[i] }));
              
              return (
                <div className="space-y-3 mt-3">
                  {lesson.qa.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/50 overflow-hidden shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="p-4 border-b border-slate-100 dark:border-slate-700/50">
                        <p className="text-xs font-bold text-slate-400 dark:text-slate-500 mb-1 uppercase tracking-wider">
                          {labels.question}
                        </p>
                        <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">
                          {item.question}
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50/40 dark:bg-slate-800/20">
                        <button
                          onClick={() => toggle(i)}
                          className={`font-medium rounded-lg px-3 py-1.5 text-xs transition-all ${
                            revealed[i]
                              ? "text-emerald-700 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-900/30 shadow-inner"
                              : "text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600"
                          }`}
                        >
                          {revealed[i] ? item.answer : labels.tapToReveal}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </section>
        )}

        {/* ACTION BUTTONS */}
        <div className="flex flex-col gap-3 sm:flex-row pt-3">
          {completed ? (
            <span className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-emerald-700 dark:text-emerald-400 bg-white dark:bg-slate-800 border-2 border-emerald-400 dark:border-emerald-500 shadow-sm">
              <CheckCircle2 className="w-4 h-4" />
              {labels.completed} · +{XP_REWARDS.GRAMMAR_LESSON_COMPLETE} XP
            </span>
          ) : (
            <button
              onClick={onComplete}
              className="rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-indigo-500/25 transition-all hover:shadow-lg hover:shadow-indigo-500/35 hover:brightness-110 active:scale-[0.98]"
            >
              {labels.markComplete} · +{XP_REWARDS.GRAMMAR_LESSON_COMPLETE} XP
            </button>
          )}

          {hasTest && (
            <button
              onClick={onTest}
              className="rounded-xl border-2 border-amber-400/70 bg-white dark:bg-slate-800/60 px-5 py-2.5 text-sm font-bold text-amber-700 dark:text-amber-300 transition-all hover:bg-amber-50/80 dark:hover:bg-amber-900/10 hover:border-amber-400 active:scale-[0.98] shadow-sm"
            >
              {labels.takeTest}
            </button>
          )}
        </div>

        <AdSlot className="mt-2" />
      </div>
    </div>
  );
}

export default GrammarLessonDesign;