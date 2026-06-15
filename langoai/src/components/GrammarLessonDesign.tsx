import React, { useState, useMemo, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
 
import type { GrammarLesson } from "@/content/types";
import { XP_REWARDS } from "@/utils/xp";
import AdSlot from "@/components/AdSlot";
 
import {
  CheckCircle2,
  BookOpen,
  FileText,
  HelpCircle,
  Target,
  AlertCircle,
  ArrowLeft,
  Lightbulb,
  Sparkles,
  Eye,
  EyeOff,
  Trophy,
} from "lucide-react";
 
/* ─────────────────────────────────────────────────────────────────────────
   MEERTALIGE LABELS
───────────────────────────────────────────────────────────────────────── */
const UI_LABELS: Record<string, Record<string, string>> = {
  en: {
    rules: "Grammar Rules",
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
    tapToReveal: "Tap to reveal answer",
    hideAnswer: "Hide answer",
    markComplete: "Mark as completed",
    completed: "Completed",
    takeTest: "Take the test",
    back: "Back",
  },
  nl: {
    rules: "Grammaticaregels",
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
    tapToReveal: "Tik om het antwoord te zien",
    hideAnswer: "Antwoord verbergen",
    markComplete: "Markeer als voltooid",
    completed: "Voltooid",
    takeTest: "Doe de test",
    back: "Terug",
  },
  fr: {
    rules: "Règles de grammaire",
    detailedExplanation: "Explication détaillée",
    importantPoints: "Points importants",
    commonMistakes: "Erreurs fréquentes",
    quickReview: "Révision rapide",
    practiceQuestions: "Questions d'entraînement",
    structure: "Structure",
    example: "Exemple",
    usage: "Utilisation",
    incorrect: "Incorrect",
    correct: "Correct",
    why: "Pourquoi ?",
    question: "Question",
    answer: "Réponse",
    tapToReveal: "Appuyez pour révéler",
    hideAnswer: "Masquer la réponse",
    markComplete: "Marquer comme terminé",
    completed: "Terminé",
    takeTest: "Passer le test",
    back: "Retour",
  },
  es: {
    rules: "Reglas gramaticales",
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
    hideAnswer: "Ocultar respuesta",
    markComplete: "Marcar como completado",
    completed: "Completado",
    takeTest: "Hacer la prueba",
    back: "Volver",
  },
  de: {
    rules: "Grammatikregeln",
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
    hideAnswer: "Antwort verbergen",
    markComplete: "Als abgeschlossen markieren",
    completed: "Abgeschlossen",
    takeTest: "Test machen",
    back: "Zurück",
  },
};
 
/* ─────────────────────────────────────────────────────────────────────────
   THEMA PALETTEN — één per CEFR-niveau-kleur
───────────────────────────────────────────────────────────────────────── */
const BAR_THEMES = [
  {
    top: "bg-gradient-to-r from-indigo-500 via-indigo-400 to-purple-500",
    badge: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300",
    titleText: "text-indigo-800 dark:text-indigo-200",
    accent: "#4f46e5",
    accentDark: "#818cf8",
    chipBg: "bg-indigo-50 dark:bg-indigo-900/20",
    chipText: "text-indigo-700 dark:text-indigo-300",
    chipBgLight: "bg-indigo-50/60 dark:bg-indigo-800/30",
    chipTextDark: "text-indigo-800 dark:text-indigo-200",
    chipBgAlt: "bg-slate-50 dark:bg-slate-700/30",
    chipTextMedium: "text-slate-600 dark:text-slate-400",
  },
  {
    top: "bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500",
    badge: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    titleText: "text-emerald-800 dark:text-emerald-200",
    accent: "#059669",
    accentDark: "#34d399",
    chipBg: "bg-emerald-50 dark:bg-emerald-900/20",
    chipText: "text-emerald-700 dark:text-emerald-300",
    chipBgLight: "bg-emerald-50/60 dark:bg-emerald-800/30",
    chipTextDark: "text-emerald-800 dark:text-emerald-200",
    chipBgAlt: "bg-slate-50 dark:bg-slate-700/30",
    chipTextMedium: "text-slate-600 dark:text-slate-400",
  },
  {
    top: "bg-gradient-to-r from-violet-500 via-violet-400 to-fuchsia-500",
    badge: "bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300",
    titleText: "text-violet-800 dark:text-violet-200",
    accent: "#7c3aed",
    accentDark: "#a78bfa",
    chipBg: "bg-violet-50 dark:bg-violet-900/20",
    chipText: "text-violet-700 dark:text-violet-300",
    chipBgLight: "bg-violet-50/60 dark:bg-violet-800/30",
    chipTextDark: "text-violet-800 dark:text-violet-200",
    chipBgAlt: "bg-slate-50 dark:bg-slate-700/30",
    chipTextMedium: "text-slate-600 dark:text-slate-400",
  },
  {
    top: "bg-gradient-to-r from-rose-500 via-rose-400 to-pink-500",
    badge: "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300",
    titleText: "text-rose-800 dark:text-rose-200",
    accent: "#e11d48",
    accentDark: "#fb7185",
    chipBg: "bg-rose-50 dark:bg-rose-900/20",
    chipText: "text-rose-700 dark:text-rose-300",
    chipBgLight: "bg-rose-50/60 dark:bg-rose-800/30",
    chipTextDark: "text-rose-800 dark:text-rose-200",
    chipBgAlt: "bg-slate-50 dark:bg-slate-700/30",
    chipTextMedium: "text-slate-600 dark:text-slate-400",
  },
  {
    top: "bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500",
    badge: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    titleText: "text-amber-800 dark:text-amber-200",
    accent: "#d97706",
    accentDark: "#fbbf24",
    chipBg: "bg-amber-50 dark:bg-amber-900/20",
    chipText: "text-amber-700 dark:text-amber-300",
    chipBgLight: "bg-amber-50/60 dark:bg-amber-800/30",
    chipTextDark: "text-amber-800 dark:text-amber-200",
    chipBgAlt: "bg-slate-50 dark:bg-slate-700/30",
    chipTextMedium: "text-slate-600 dark:text-slate-400",
  },
  {
    top: "bg-gradient-to-r from-cyan-500 via-cyan-400 to-sky-500",
    badge: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300",
    titleText: "text-cyan-800 dark:text-cyan-200",
    accent: "#0891b2",
    accentDark: "#22d3ee",
    chipBg: "bg-cyan-50 dark:bg-cyan-900/20",
    chipText: "text-cyan-700 dark:text-cyan-300",
    chipBgLight: "bg-cyan-50/60 dark:bg-cyan-800/30",
    chipTextDark: "text-cyan-800 dark:text-cyan-200",
    chipBgAlt: "bg-slate-50 dark:bg-slate-700/30",
    chipTextMedium: "text-slate-600 dark:text-slate-400",
  },
] as const;
 
 
 
/* ─────────────────────────────────────────────────────────────────────────
   SECTION TITLE
───────────────────────────────────────────────────────────────────────── */
function SectionTitle({
  icon,
  label,
  id,
  count,
}: {
  icon: React.ReactNode;
  label: string;
  id?: string;
  count?: number;
}) {
  return (
    <div className="flex items-center gap-3 mb-6" id={id}>
      <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-200/60 dark:ring-slate-700/50 shrink-0">
        <span className="opacity-80">{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h2 className="font-sans text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
          {label}
          {count !== undefined && (
            <span className="ml-2 text-sm font-bold text-slate-400 dark:text-slate-500">
              ({count})
            </span>
          )}
        </h2>
        <div className="mt-1 h-[3px] w-16 rounded-full gl-accent-bar" />
      </div>
    </div>
  );
}
 
/* ─────────────────────────────────────────────────────────────────────────
   MARKDOWN RENDERER
───────────────────────────────────────────────────────────────────────── */
function RenderMarkdown({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`|⚠️\s*PAS OP\b)/gi);
  return (
    <span className="font-sans text-[13px] sm:text-sm leading-relaxed">
      {parts.map((part, i) => {
        if (/^⚠️\s*PAS OP\b/gi.test(part))
          return <span key={i} className="pas-op-highlight">⚠️ PAS OP</span>;
        if (part.startsWith("**") && part.endsWith("**"))
          return <strong key={i} className="font-extrabold text-amber-600 dark:text-amber-400">{part.slice(2, -2)}</strong>;
        if (part.startsWith("*") && part.endsWith("*"))
          return <em key={i} className="italic font-medium text-rose-500 dark:text-rose-400">{part.slice(1, -1)}</em>;
        if (part.startsWith("`") && part.endsWith("`"))
          return (
            <code key={i} className="rounded-md bg-indigo-100 dark:bg-indigo-900/50 px-2 py-0.5 text-[11px] sm:text-xs font-mono font-semibold tracking-wide text-indigo-700 dark:text-indigo-300">
              {part.slice(1, -1)}
            </code>
          );
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}
 
/* ─────────────────────────────────────────────────────────────────────────
   SAFE HTML RENDERER
───────────────────────────────────────────────────────────────────────── */
function SafeHtml({ html }: { html: string }) {
  const processed = html.replace(
    /<strong(.*?)>([\s\S]*?)<\/strong>/gi,
    '<strong class="font-extrabold text-slate-900 dark:text-white"$1>$2</strong>'
  );
  return (
    <div
      className="font-sans text-[13px] sm:text-sm leading-relaxed"
      dangerouslySetInnerHTML={{ __html: processed }}
    />
  );
}
 
 
/* ─────────────────────────────────────────────────────────────────────────
   BEAUTIFUL DATA TABLE (herbruikbaar component)
───────────────────────────────────────────────────────────────────────── */
interface BeautifulTableProps {
  headerRow: string;
  rows: string[][];
  themeIndex?: number;
}
 
function BeautifulTable({ headerRow, rows, themeIndex = 0 }: BeautifulTableProps) {
  const t = BAR_THEMES[themeIndex % BAR_THEMES.length];
  const headers = headerRow.split("|").map((h) => h.trim()).filter(Boolean);
 
  return (
    <div className="gl-table-wrap overflow-x-auto rounded-2xl border border-slate-200/70 dark:border-slate-700/50 shadow-lg">
      <table className="w-full border-collapse" style={{ minWidth: `${Math.max(480, headers.length * 140)}px` }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className={cn(
                  t.top,
                  "px-5 py-4 text-left text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-white",
                  i === 0 && "rounded-tl-2xl",
                  i === headers.length - 1 && "rounded-tr-2xl"
                )}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={cn(
                "group transition-colors duration-150",
                ri % 2 === 1 ? "bg-slate-50/70 dark:bg-slate-800/40" : "bg-white dark:bg-slate-900/20"
              )}
              style={{ ["--hover-bg" as string]: `${t.accent}18` }}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={cn(
                    "px-5 py-3.5 text-[13px] sm:text-sm border-t border-slate-100 dark:border-slate-700/30 leading-relaxed align-top",
                    ci === 0
                      ? "font-bold text-slate-900 dark:text-slate-100"
                      : "text-slate-700 dark:text-slate-300",
                    ri === rows.length - 1 && ci === 0 && "rounded-bl-2xl",
                    ri === rows.length - 1 && ci === row.length - 1 && "rounded-br-2xl"
                  )}
                  dangerouslySetInnerHTML={{
                    __html: cell
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-extrabold text-amber-600 dark:text-amber-400">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em class="italic text-rose-500 dark:text-rose-400">$1</em>')
                      .replace(/`(.*?)`/g, '<code class="rounded bg-indigo-100 dark:bg-indigo-900/40 px-1.5 py-0.5 text-[11px] font-mono font-semibold text-indigo-700 dark:text-indigo-300">$1</code>')
                      .replace(/'(.*?)'/g, '<span class="font-mono font-semibold text-amber-600 dark:text-amber-400">\'$1\'</span>'),
                  }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 
/* ─────────────────────────────────────────────────────────────────────────
   QA COMPONENT
───────────────────────────────────────────────────────────────────────── */
function QASection({
  qa,
  labels,
}: {
  qa: { question: string; answer: string }[];
  labels: Record<string, string>;
}) {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setRevealed((prev) => ({ ...prev, [i]: !prev[i] }));
 
  return (
    <div className="space-y-4">
      {qa.map((item, i) => {
        const isOpen = !!revealed[i];
        const t = BAR_THEMES[i % BAR_THEMES.length];
        return (
          <div key={i} className="gl-card rounded-2xl overflow-hidden transition-all duration-300">
            {/* Gekleurde topbalk */}
            <div className={cn("h-1.5 w-full", t.top)} />
 
            {/* Vraag */}
            <div className="px-5 pt-4 pb-3 flex items-start gap-4">
              <span className={cn("shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black", t.badge)}>
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-1.5">
                  {labels.question}
                </p>
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
                  <RenderMarkdown text={item.question} />
                </p>
              </div>
            </div>
 
            {/* Antwoord */}
            <div className={cn(
              "mx-4 mb-4 rounded-xl overflow-hidden transition-all duration-300",
              isOpen ? "bg-emerald-50/80 dark:bg-emerald-900/20 ring-1 ring-emerald-200 dark:ring-emerald-700/40" : "bg-slate-50 dark:bg-slate-800/30"
            )}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold transition-all duration-200"
              >
                <span className={isOpen ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400"}>
                  {isOpen ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </span>
                <span className={isOpen ? "text-emerald-700 dark:text-emerald-300" : "text-slate-500 dark:text-slate-400"}>
                  {isOpen ? labels.hideAnswer : labels.tapToReveal}
                </span>
              </button>
              {isOpen && (
                <div className="px-4 pb-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200 border-t border-emerald-100 dark:border-emerald-800/30 pt-3">
                  <RenderMarkdown text={item.answer} />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
 
/* ─────────────────────────────────────────────────────────────────────────
   PROGRESS INDICATOR
───────────────────────────────────────────────────────────────────────── */
function LessonProgress({ completed }: { completed: boolean }) {
  const [scrollPct, setScrollPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = Math.min(100, (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100) || 0;
      setScrollPct(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-200/60 dark:bg-slate-800/60">
      <div
        className={cn(
          "h-full transition-all duration-150",
          completed
            ? "bg-gradient-to-r from-emerald-400 to-teal-500"
            : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        )}
        style={{ width: `${scrollPct}%` }}
      />
    </div>
  );
}
 
/* ─────────────────────────────────────────────────────────────────────────
   MARKDOWN → HTML HELPER (buiten render)
───────────────────────────────────────────────────────────────────────── */
function buildDetailHtml(raw: string): string {
  if (typeof raw !== "string") return "";
  return raw
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`(.*?)`/g, "<code>$1</code>")
    .replace(/⚠️\s*PAS OP\b/gi, '<span class="pas-op-highlight">⚠️ PAS OP</span>');
}
 
/* ─────────────────────────────────────────────────────────────────────────
   HOOFDCOMPONENT
───────────────────────────────────────────────────────────────────────── */
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
  const langCode = useMemo(() => lesson.id.split("-")[0]?.toLowerCase() ?? "nl", [lesson.id]);
  const labels = useMemo(() => UI_LABELS[langCode] ?? UI_LABELS["nl"], [langCode]);
 
  const LEVELS = ["A1", "A2", "B1", "B2", "C1"] as const;
  const lvlToCEFR = useCallback((n: number) => LEVELS[Math.min(Math.max(n - 1, 0), 4)], []);
 
  const themeIndex = useMemo(() => (lesson.level - 1) % BAR_THEMES.length, [lesson.level]);
  const tableTheme = useMemo(() => BAR_THEMES[themeIndex], [themeIndex]);
 
  /* ── Accordion content processor ─────────────────────────────────── */
  const getProcessedContent = useCallback(
    (content: string): string => {
      if (!content) return "";
      let html = buildDetailHtml(content);
 
      html = html.replace(
        /^> (.*)$/gm,
        `<blockquote class="my-3 pl-4 border-l-4 border-indigo-300 dark:border-indigo-700 py-1.5 pr-3 bg-indigo-50/40 dark:bg-indigo-900/15 rounded-r-lg italic text-slate-600 dark:text-slate-400 leading-relaxed">
          <span class="not-italic text-indigo-500 mr-1">"</span>$1<span class="not-italic text-indigo-500 ml-1">"</span>
        </blockquote>`
      );
 
      html = html.replace(
        /^• (.*)$/gm,
        `<li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">$1</li>`
      );
 
      html = html.replace(/\n\n/g, "</p><p class='my-2.5'>");
      html = html.replace(/^(?!<[a-z])/im, "<p class='my-2.5'>");
      html = html.replace(/(?<!>)$/g, "</p>");
      html = html.replace(/(<p>\s*)(<li[\s\S]*?<\/li>)+/g, (match) =>
        match.replace(/<p>\s*/, "").replace(/<\/p>/, "")
      );
      html = html.replace(/<li[\s\S]*?<\/li>/, (match) =>
        `<ul class="my-3 space-y-1.5 pl-1">\n${match}\n</ul>`
      );
 
      /* Markdown-style tables in accordion bodies */
      html = html.replace(
        /\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)*)/g,
        (_full: string, headerRow: string, bodyRows: string) => {
          const headers = headerRow.split("|").map((h: string) => h.trim()).filter(Boolean);
          const rows = bodyRows
            .trim()
            .split("\n")
            .map((r: string) => r.split("|").map((c: string) => c.trim()).filter(Boolean));
 
          let out = `<div class="overflow-x-auto my-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-md"><table class="w-full border-collapse" style="min-width:${Math.max(480, headers.length * 140)}px"><thead><tr>`;
          headers.forEach((h) => {
            out += `<th class="${tableTheme.top} px-5 py-3.5 text-left text-[10px] font-extrabold uppercase tracking-[0.15em] text-white">${h}</th>`;
          });
          out += `</tr></thead><tbody>`;
          rows.forEach((row, ri) => {
            out += `<tr class="${ri % 2 === 1 ? "bg-slate-50/70 dark:bg-slate-800/40" : "bg-white dark:bg-slate-900/20"}">`;
            row.forEach((cell, ci) => {
              out += `<td class="px-5 py-3.5 text-sm border-t border-slate-100 dark:border-slate-700/30 leading-relaxed ${ci === 0 ? "font-bold text-slate-900 dark:text-slate-100" : "text-slate-700 dark:text-slate-300"}">${cell}</td>`;
            });
            out += `</tr>`;
          });
          out += `</tbody></table></div>`;
          return out;
        }
      );
 
      return html;
    },
    [tableTheme]
  );
 
 
  if (!lesson) {
    return <div className="animate-pulse h-40 bg-slate-200 rounded-2xl my-8" />;
  }
 
  return (
    <>
      {/* ── Lees-voortgangsbalk bovenaan ── */}
      <LessonProgress completed={completed} />
 
      <style>{`
        /* ── Light page background ── */
        .gl-page {
          background-color: #f4f5fb;
          background-image:
            radial-gradient(ellipse 80% 60% at 70% -10%, rgba(99,102,241,.12) 0%, transparent 65%),
            radial-gradient(ellipse 55% 45% at -5% 65%, rgba(168,85,247,.07) 0%, transparent 58%),
            radial-gradient(circle at 1px 1px, rgba(99,102,241,.045) 1px, transparent 0);
          background-size: 100% 100%, 100% 100%, 24px 24px;
        }
        /* ── Dark page background ── */
        .dark .gl-page {
          background-color: #0b1122;
          background-image:
            radial-gradient(ellipse 75% 55% at 65% -8%, rgba(99,102,241,.22) 0%, transparent 62%),
            radial-gradient(ellipse 55% 45% at 100% 85%, rgba(168,85,247,.11) 0%, transparent 58%),
            radial-gradient(ellipse 30% 25% at 0% 42%, rgba(56,189,248,.06) 0%, transparent 50%),
            radial-gradient(circle at 1px 1px, rgba(148,163,184,.032) 1px, transparent 0);
          background-size: 100% 100%, 100% 100%, 100% 100%, 24px 24px;
        }
        /* ── Accent bar under section titles ── */
        .gl-accent-bar {
          background: linear-gradient(90deg, #6366f1, #a855f7, #ec4899);
        }
        /* ── Card glass ── */
        .gl-card {
          background: rgba(255,255,255,0.93);
          border: 1px solid rgba(226,232,240,0.65);
          box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(99,102,241,0.055);
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .dark .gl-card {
          background: rgba(30,41,59,0.70);
          border: 1px solid rgba(51,65,85,0.45);
          box-shadow: 0 2px 8px rgba(0,0,0,0.32), 0 6px 24px rgba(0,0,0,0.22);
          backdrop-filter: blur(12px);
        }
        .gl-card:hover {
          box-shadow: 0 2px 6px rgba(0,0,0,0.06), 0 10px 36px rgba(99,102,241,0.10);
        }
        .dark .gl-card:hover {
          box-shadow: 0 3px 10px rgba(0,0,0,0.4), 0 14px 44px rgba(99,102,241,0.14);
        }
        /* ── Table wrapper ── */
        .gl-table-wrap {
          background: rgba(255,255,255,0.97);
          box-shadow: 0 2px 12px rgba(99,102,241,0.07);
        }
        .dark .gl-table-wrap {
          background: rgba(15,23,42,0.75);
          box-shadow: 0 4px 24px rgba(0,0,0,0.3);
          backdrop-filter: blur(10px);
        }
        /* ── PAS OP badge ── */
        .pas-op-highlight {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-weight: 900;
          color: #b45309;
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          border: 1.5px solid #fbbf24;
          border-radius: 6px;
          padding: 1px 8px;
          font-size: 0.8em;
        }
        .dark .pas-op-highlight {
          color: #fbbf24;
          background: linear-gradient(135deg, rgba(254,243,199,0.12), rgba(253,230,138,0.08));
          border-color: rgba(251,191,36,0.4);
        }
        /* ── Hover row highlight ── */
        tr:hover td {
          background-color: rgba(99,102,241,0.04);
        }
        .dark tr:hover td {
          background-color: rgba(99,102,241,0.06);
        }
        /* ── Scroll offset voor ankerpunten ── */
        section[id] {
          scroll-margin-top: 80px;
        }
      `}</style>
 
      {/* ── Full-page background layer ── */}
      <div className="gl-page fixed inset-0 pointer-events-none -z-10" aria-hidden />
 
      <div className="relative min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <main className="font-sans">
 
              {/* ═══ HEADER ═══ */}
              <header className="mb-12">
                <div className="flex items-center gap-2.5 mb-5 flex-wrap">
                  {onBack && (
                    <button
                      onClick={onBack}
                      className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-semibold text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:text-slate-400 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400 transition-all"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      {labels.back}
                    </button>
                  )}
                  <span className="rounded-full px-3.5 py-1.5 text-xs font-black tracking-wide uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md shadow-indigo-500/25">
                    {lvlToCEFR(lesson.level)}
                  </span>
                  <span className="rounded-full bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 px-3.5 py-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 shadow-sm">
                    {lesson.topic}
                  </span>
                  {completed && (
                    <span className="ml-auto flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      <Trophy className="w-3.5 h-3.5" />
                      +{XP_REWARDS.GRAMMAR_LESSON_COMPLETE} XP
                    </span>
                  )}
                </div>
 
                <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-5 leading-tight">
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {lesson.title}
                  </span>
                </h1>
 
                {lesson.overview && (
                  <div className="relative rounded-2xl overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full" />
                    <p className="pl-5 pr-4 py-3.5 text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed bg-amber-50/70 dark:bg-amber-900/10 rounded-2xl ring-1 ring-amber-200/50 dark:ring-amber-700/20">
                      <RenderMarkdown text={lesson.overview} />
                    </p>
                  </div>
                )}
              </header>
 
              {/* ═══════════════════════════════════════════════════════
                  SECTIES
              ═══════════════════════════════════════════════════════ */}
              <div className="space-y-14">
 
                {/* ─── DATA TABEL ─── */}
                {lesson.timeExpressions && (
                  <section id="toc-table" className="scroll-mt-20">
                    <SectionTitle
                      icon={<BookOpen className="w-5 h-5 text-indigo-500" />}
                      label={lesson.timeExpressionsLabel || ""}
                    />
                    <BeautifulTable
                      headerRow={lesson.timeExpressions.header}
                      rows={lesson.timeExpressions.rows}
                      themeIndex={themeIndex}
                    />
                  </section>
                )}
 
                {/* ─── GEDETAILLEERDE UITLEG (accordions) ─── */}
                {lesson.details && lesson.details.length > 0 && (
                  <section id="toc-explanation" className="scroll-mt-20">
                    <SectionTitle
                      icon={<FileText className="w-5 h-5 text-violet-500" />}
                      label={labels.detailedExplanation}
                      count={lesson.details.length}
                    />
                    <Accordion type="single" collapsible className="space-y-3">
                      {lesson.details.map((sec, i) => {
                        const t = BAR_THEMES[i % BAR_THEMES.length];
                        return (
                          <AccordionItem
                            key={i}
                            value={`detail-${i}`}
                            className={cn(
                              "gl-card overflow-hidden rounded-2xl",
                              "data-[state=open]:shadow-lg data-[state=open]:ring-2 data-[state=open]:ring-indigo-200 dark:data-[state=open]:ring-indigo-800/50"
                            )}
                          >
                            <div className={cn("h-1.5 w-full shrink-0", t.top)} />
                            <AccordionTrigger
                              className={cn(
                                "flex items-center gap-3 px-5 py-4",
                                "hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-colors duration-200",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-400/40",
                                "text-left w-full"
                              )}
                            >
                              <span className={cn("shrink-0 h-9 w-9 rounded-xl inline-flex items-center justify-center text-sm font-black shadow-sm", t.badge)}>
                                {i + 1}
                              </span>
                              <span className={cn("flex-1 min-w-0 font-extrabold text-sm sm:text-base", t.titleText)}>
                                {sec.title}
                              </span>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className={cn(
                                "px-5 pb-6 pt-1 text-slate-700 dark:text-slate-300",
                                "prose prose-slate dark:prose-invert max-w-none",
                                "prose-p:my-2.5 prose-p:text-[13px] sm:prose-p:text-sm prose-p:leading-relaxed",
                                "prose-strong:font-extrabold prose-strong:text-slate-900 dark:prose-strong:text-slate-100",
                                "prose-em:italic prose-em:font-medium prose-em:text-rose-600 dark:prose-em:text-rose-400",
                                "prose-code:rounded-lg prose-code:bg-indigo-100 dark:prose-code:bg-indigo-900/40 prose-code:px-2 prose-code:py-0.5 prose-code:text-[11px] prose-code:font-mono prose-code:font-semibold prose-code:text-indigo-700 dark:prose-code:text-indigo-300",
                                "prose-blockquote:border-amber-400 prose-blockquote:bg-amber-50/50 dark:prose-blockquote:bg-amber-900/10",
                                "prose-ul:list-none prose-li:pl-5 prose-li:relative",
                                "max-sm:prose-sm"
                              )}>
                                <SafeHtml html={getProcessedContent(sec.body)} />
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  </section>
                )}
 
                {/* ─── GRAMMATICAREGELS (grid kaarten) ─── */}
                {lesson.rulesTable && lesson.rulesTable.length > 0 && (
                  <section id="toc-rules" className="scroll-mt-20">
                    <SectionTitle
                      icon={<Sparkles className="w-5 h-5 text-amber-500" />}
                      label={labels.rules}
                      count={lesson.rulesTable.length}
                    />
                    <div className="grid sm:grid-cols-2 gap-5">
                      {lesson.rulesTable.map((r, i) => {
                        const t = BAR_THEMES[i % BAR_THEMES.length];
                        return (
                          <div
                            key={i}
                            className="gl-card group relative flex flex-col rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-400"
                          >
                            {/* Sheen-effect bij hover */}
                            <div className={cn("h-2 shrink-0 relative overflow-hidden", t.top)}>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                            </div>
 
                            <div className="flex-1 p-5 sm:p-6 space-y-4">
                              <div className="flex items-start gap-3">
                                <span className={cn("shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black shadow-md ring-2 ring-white/80 dark:ring-slate-700/80", t.badge)}>
                                  {i + 1}
                                </span>
                                <h3 className={cn("font-sans font-extrabold text-base sm:text-lg leading-snug pt-1", t.titleText)}>
                                  {r.rule}
                                </h3>
                              </div>
 
                              {/* Structuur */}
                              <div className="rounded-xl bg-slate-50/90 dark:bg-slate-900/50 p-3.5 ring-1 ring-slate-200/50 dark:ring-slate-700/30">
                                <p className="text-[9px] font-black uppercase tracking-[0.25em] mb-2 flex items-center gap-1.5" style={{ color: t.accent }}>
                                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: t.accent }} />
                                  {labels.structure}
                                </p>
                                <div className={cn("text-sm leading-relaxed", t.chipText)}>
                                  <RenderMarkdown text={r.structure} />
                                </div>
                              </div>
 
                              {/* Voorbeeld */}
                              <div className="rounded-xl bg-amber-50/80 dark:bg-amber-900/15 p-3.5 ring-1 ring-amber-200/50 dark:ring-amber-700/20">
                                <p className="text-[9px] font-black uppercase tracking-[0.25em] mb-2 flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                  {labels.example}
                                </p>
                                <div className={cn("text-sm leading-relaxed", t.chipTextDark)}>
                                  <RenderMarkdown text={r.example} />
                                </div>
                              </div>
 
                              {/* Gebruik */}
                              <div className="rounded-xl bg-sky-50/70 dark:bg-sky-900/10 p-3.5 ring-1 ring-sky-200/40 dark:ring-sky-700/20">
                                <p className="text-[9px] font-black uppercase tracking-[0.25em] mb-2 flex items-center gap-1.5 text-sky-600 dark:text-sky-400">
                                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                                  {labels.usage}
                                </p>
                                <div className={cn("text-sm leading-relaxed", t.chipTextMedium)}>
                                  <RenderMarkdown text={r.usage} />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                )}
 
                {/* ─── BELANGRIJKE PUNTEN (callouts) ─── */}
                {lesson.callouts && lesson.callouts.length > 0 && (
                  <section id="toc-callouts" className="scroll-mt-20">
                    <SectionTitle
                      icon={<AlertCircle className="w-5 h-5 text-amber-500" />}
                      label={(lesson as any).calloutsLabel || labels.importantPoints}
                      count={lesson.callouts.length}
                    />
                    <div className="space-y-3">
                      {lesson.callouts.map((c, i) => (
                        <div
                          key={i}
                          className="gl-card rounded-2xl border-l-4 border-amber-400 dark:border-amber-500 overflow-hidden"
                        >
                          <div className="flex items-start gap-4 px-5 py-4">
                            <div className="shrink-0 mt-0.5 w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center">
                              <Lightbulb className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              {c.label && (
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600 dark:text-amber-500 mb-1">
                                  {c.label}
                                </p>
                              )}
                              <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                                <RenderMarkdown text={c.text} />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
 
                {/* ─── VEELGEMAAKTE FOUTEN ─── */}
                {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
                  <section id="toc-mistakes" className="scroll-mt-20">
                    <SectionTitle
                      icon={<Target className="w-5 h-5 text-rose-500" />}
                      label={labels.commonMistakes}
                      count={lesson.commonMistakes.length}
                    />
                    <div className="gl-table-wrap overflow-x-auto rounded-2xl border border-slate-200/70 dark:border-slate-700/50 shadow-lg">
                      <table className="w-full border-collapse min-w-[520px]">
                        <thead>
                          <tr className="bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600">
                            <th className="px-5 py-4 text-left text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-white rounded-tl-2xl w-[30%]">
                              {labels.incorrect}
                            </th>
                            <th className="px-5 py-4 text-left text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-white w-[30%]">
                              {labels.correct}
                            </th>
                            <th className="px-5 py-4 text-left text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-white rounded-tr-2xl w-[40%]">
                              {labels.why}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {lesson.commonMistakes.map((m, i) => (
                            <tr
                              key={i}
                              className={cn(
                                "transition-colors duration-150",
                                i % 2 === 1 ? "bg-slate-50/70 dark:bg-slate-800/40" : "bg-white dark:bg-slate-900/20"
                              )}
                            >
                              <td className="px-5 py-4 text-sm font-semibold text-rose-600 dark:text-rose-400 line-through border-t border-slate-100 dark:border-slate-700/30 align-top leading-relaxed">
                                {m.incorrect}
                              </td>
                              <td className="px-5 py-4 text-sm font-bold text-emerald-700 dark:text-emerald-400 border-t border-slate-100 dark:border-slate-700/30 align-top leading-relaxed">
                                {m.correct}
                              </td>
                              <td className="px-5 py-4 text-sm text-slate-600 dark:text-slate-300 italic border-t border-slate-100 dark:border-slate-700/30 align-top leading-relaxed">
                                <RenderMarkdown text={m.explanation} />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )}
 
                {/* ─── SNELLE HERHALING ─── */}
                {lesson.review && lesson.review.length > 0 && (
                  <section id="toc-review" className="scroll-mt-20">
                    <SectionTitle
                      icon={<CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                      label={(lesson as any).reviewLabel || labels.quickReview}
                      count={lesson.review.length}
                    />
                    <div className="gl-card rounded-2xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-700/40">
                      {lesson.review.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 px-5 py-4 hover:bg-slate-50/60 dark:hover:bg-slate-700/20 transition-colors duration-150">
                          <span className="shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-[11px] font-black text-indigo-600 dark:text-indigo-400">
                            {i + 1}
                          </span>
                          <p className="flex-1 text-sm sm:text-[15px] leading-relaxed text-slate-800 dark:text-slate-200">
                            <RenderMarkdown text={item} />
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
 
                {/* ─── OEFENVRAGEN ─── */}
                {lesson.qa && lesson.qa.length > 0 && (
                  <section id="toc-qa" className="scroll-mt-20">
                    <SectionTitle
                      icon={<HelpCircle className="w-5 h-5 text-indigo-500" />}
                      label={(lesson as any).qaLabel || labels.practiceQuestions}
                      count={lesson.qa.length}
                    />
                    <QASection qa={lesson.qa} labels={labels} />
                  </section>
                )}
 
                {/* ─── ACTIEKNOPPEN ─── */}
                <div className="flex flex-col gap-3 sm:flex-row pt-2 pb-4">
                  {completed ? (
                    <span className="inline-flex items-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-300 dark:border-emerald-700 shadow-md">
                      <CheckCircle2 className="w-5 h-5" />
                      {labels.completed}
                      <span className="ml-auto text-xs font-black bg-emerald-200/70 dark:bg-emerald-800/50 px-2 py-0.5 rounded-lg">
                        +{XP_REWARDS.GRAMMAR_LESSON_COMPLETE} XP
                      </span>
                    </span>
                  ) : (
                    <button
                      onClick={onComplete}
                      className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:brightness-110 active:scale-[0.97] transition-all"
                    >
                      <CheckCircle2 className="w-4.5 h-4.5" />
                      {labels.markComplete}
                      <span className="ml-auto text-xs font-black bg-white/20 px-2 py-0.5 rounded-lg">
                        +{XP_REWARDS.GRAMMAR_LESSON_COMPLETE} XP
                      </span>
                    </button>
                  )}
                  {hasTest && (
                    <button
                      onClick={onTest}
                      className="inline-flex items-center gap-2.5 rounded-2xl border-2 border-amber-400/70 bg-gradient-to-br from-amber-50 to-white dark:from-amber-900/10 dark:to-slate-800/40 px-7 py-3.5 text-sm font-bold text-amber-700 dark:text-amber-300 hover:border-amber-400 hover:bg-amber-50/90 dark:hover:bg-amber-900/20 active:scale-[0.97] transition-all shadow-md"
                    >
                      <Trophy className="w-4.5 h-4.5" />
                      {labels.takeTest}
                    </button>
                  )}
                </div>
 
                <AdSlot className="mt-2" />
              </div>
            </main>
          </div>
        </div>
    </>
  );
}
 
export default React.memo(GrammarLessonDesign);
 