import React, { useEffect, useState } from "react";

const FONT_IMPORT_CSS =
  "@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;1,14..32,400&family=Playfair+Display:ital,wght@0,700;1,700&family=JetBrains+Mono:wght@400;500;700&display=swap');";

import {
  CheckCircle2,
  BookOpen,
  FileText,
  HelpCircle,
  Target,
  AlertCircle,
  ArrowLeft,
  Lightbulb,
  Star,
  Zap,
  Heart,
  Sparkles,
  Palette,
  Flame,
  Crown,
  Gem,
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

/* ── Meertalige labels ──────────────────────────────────────────────── */
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
    tapToReveal: "Tap to reveal",
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
    tapToReveal: "Tik om te onthullen",
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
    markComplete: "Als abgeschlossen markieren",
    completed: "Abgeschlossen",
    takeTest: "Test machen",
    back: "Zurück",
  },
};

/* ── Section Title ──────────────────────────────────────────────────── */
function SectionTitle({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <h2 className="font-display flex items-center gap-3 text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 dark:text-white">
      <span className="h-1 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex-shrink-0" />
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {label}
    </h2>
  );
}

/* ── Markdown Renderer (vet, cursief, code) ─────────────────────────── */
function RenderMarkdown({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**"))
          return (
            <strong key={i} className="font-bold text-amber-600 dark:text-amber-400">
              {part.slice(2, -2)}
            </strong>
          );
        if (part.startsWith("*") && part.endsWith("*"))
          return (
            <em key={i} className="italic text-rose-500 dark:text-rose-400">
              {part.slice(1, -1)}
            </em>
          );
        if (part.startsWith("`") && part.endsWith("`"))
          return (
            <code
              key={i}
              className="rounded-md bg-indigo-100 dark:bg-indigo-900/50 px-2 py-0.5 text-xs font-mono font-semibold text-indigo-700 dark:text-indigo-300"
            >
              {part.slice(1, -1)}
            </code>
          );
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

/* ── Hoofdcomponent ──────────────────────────────────────────────────── */
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
  useEffect(() => {
    const id = "langoai-grammar-fonts";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = FONT_IMPORT_CSS;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, []);

  const langCode = lesson.id.split("-")[0]?.toLowerCase() ?? "nl";
  const labels = UI_LABELS[langCode] ?? UI_LABELS["nl"];

  const LEVELS = ["A1", "A2", "B1", "B2", "C1"] as const;
  const lvlToCEFR = (n: number) => LEVELS[Math.min(Math.max(n - 1, 0), 4)];

  /* ── Thema's voor kaarten ────────────────────────────────────────────── */
  const barThemes = [
    {
      top: "bg-gradient-to-r from-indigo-500 via-indigo-400 to-purple-500",
      badge: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300",
      titleText: "text-indigo-800 dark:text-indigo-200",
      accent: "#4f46e5",
      accentDark: "#818cf8",
      chipBg: "bg-indigo-50 dark:bg-indigo-900/20",
      chipText: "text-indigo-700 dark:text-indigo-300",
      chipBgLight: "bg-indigo-100/60 dark:bg-indigo-800/30",
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
      chipBgLight: "bg-emerald-100/60 dark:bg-emerald-800/30",
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
      chipBgLight: "bg-violet-100/60 dark:bg-violet-800/30",
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
      chipBgLight: "bg-rose-100/60 dark:bg-rose-800/30",
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
      chipBgLight: "bg-amber-100/60 dark:bg-amber-800/30",
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
      chipBgLight: "bg-cyan-100/60 dark:bg-cyan-800/30",
      chipTextDark: "text-cyan-800 dark:text-cyan-200",
      chipBgAlt: "bg-slate-50 dark:bg-slate-700/30",
      chipTextMedium: "text-slate-600 dark:text-slate-400",
    },
  ];

  /* ── Iconen voor callouts ────────────────────────────────────────────── */
  const calloutIcons = [Lightbulb, Sparkles, Zap, Heart, Star, Flame, Crown, Gem, Palette];

  /* ── Kleuren voor callouts ────────────────────────────────────────────── */
  const calloutColors = [
    { border: "border-l-amber-500", bg: "bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/30 dark:to-slate-900/50", icon: "text-amber-600 dark:text-amber-400" },
    { border: "border-l-emerald-500", bg: "bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/30 dark:to-slate-900/50", icon: "text-emerald-600 dark:text-emerald-400" },
    { border: "border-l-indigo-500", bg: "bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/30 dark:to-slate-900/50", icon: "text-indigo-600 dark:text-indigo-400" },
    { border: "border-l-rose-500", bg: "bg-gradient-to-br from-rose-50 to-white dark:from-rose-950/30 dark:to-slate-900/50", icon: "text-rose-600 dark:text-rose-400" },
    { border: "border-l-violet-500", bg: "bg-gradient-to-br from-violet-50 to-white dark:from-violet-950/30 dark:to-slate-900/50", icon: "text-violet-600 dark:text-violet-400" },
    { border: "border-l-cyan-500", bg: "bg-gradient-to-br from-cyan-50 to-white dark:from-cyan-950/30 dark:to-slate-900/50", icon: "text-cyan-600 dark:text-cyan-400" },
    { border: "border-l-orange-500", bg: "bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/30 dark:to-slate-900/50", icon: "text-orange-600 dark:text-orange-400" },
    { border: "border-l-teal-500", bg: "bg-gradient-to-br from-teal-50 to-white dark:from-teal-950/30 dark:to-slate-900/50", icon: "text-teal-600 dark:text-teal-400" },
    { border: "border-l-pink-500", bg: "bg-gradient-to-br from-pink-50 to-white dark:from-pink-950/30 dark:to-slate-900/50", icon: "text-pink-600 dark:text-pink-400" },
  ];

  /* ── Kleuren voor snelle herhaling ───────────────────────────────────── */
  const reviewBadgeColors = [
    "bg-emerald-600 text-white",
    "bg-indigo-600 text-white",
    "bg-amber-600 text-white",
    "bg-rose-600 text-white",
    "bg-violet-600 text-white",
    "bg-cyan-600 text-white",
  ];

  const reviewColors = [
    "border-l-emerald-500",
    "border-l-indigo-500",
    "border-l-amber-500",
    "border-l-rose-500",
    "border-l-violet-500",
    "border-l-cyan-500",
  ];

  /* ── Enrichment voor HTML details ───────────────────────────────────── */
  const buildDetailHtml = (raw: string) =>
    typeof raw === "string"
      ? raw
          .replace(/\*\*(.*?)\*\*/g, `<strong>$1</strong>`)
          .replace(/\*(.*?)\*/g, `<em>$1</em>`)
          .replace(/`(.*?)`/g, `<code>$1</code>`)
      : "";

  const enrich = (body: string, _acc?: string): string => {
    let html = buildDetailHtml(body);

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

    html = html.replace(/(<p>\s*)(<li[\s\S]*?<\/li>)+/g, (match) =>
      match.replace(/<p>\s*/, "").replace(/<\/p>/, "")
    );
    html = html.replace(/(<\/li>\s*){2,}/g, "</li>");
    html = html.replace(/<li[\s\S]*?<\/li>/, (match) => `<ul class="my-3 space-y-1.5 pl-1">\n${match}\n</ul>`);

    html = html.replace(
      /\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)*)/g,
      (_full: string, headerRow: string, bodyRows: string) => {
        const headers = headerRow.split("|").map((h: string) => h.trim()).filter(Boolean);
        const rows = bodyRows.trim().split("\n").map((r: string) =>
          r.split("|").map((c: string) => c.trim()).filter(Boolean)
        );
        return `
          <div class="overflow-x-auto my-8 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-lg bg-white dark:bg-slate-800/90 backdrop-blur-sm">
            <table class="w-full border-collapse min-w-[480px]">
              <thead>
                <tr>
                  ${headers.map((h: string) =>
                    `<th class="bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-500 dark:to-indigo-400 text-white text-xs font-bold uppercase tracking-wider px-6 py-4 text-left">${h}</th>`
                  ).join("")}
                </tr>
              </thead>
              <tbody>
                ${rows.map((row: string[], ri: number) =>
                  `<tr class="${ri % 2 ? "bg-slate-50 dark:bg-slate-800/50" : "bg-white dark:bg-slate-800/20"} hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10 transition-colors">
                    ${row.map((cell: string, ci: number) => {
                      const hc = cell
                        .replace(/ó/g, '<span class="text-indigo-600 dark:text-indigo-300 font-semibold">ó</span>')
                        .replace(/á/g, '<span class="text-indigo-600 dark:text-indigo-300 font-semibold">á</span>')
                        .replace(/é/g, '<span class="text-indigo-600 dark:text-indigo-300 font-semibold">é</span>')
                        .replace(/í/g, '<span class="text-indigo-600 dark:text-indigo-300 font-semibold">í</span>')
                        .replace(/ú/g, '<span class="text-indigo-600 dark:text-indigo-300 font-semibold">ú</span>');
                      return `<td class="px-6 py-4 border-t border-slate-200/50 dark:border-slate-700/30 text-base text-slate-800 dark:text-slate-200 ${ci === 0 ? "font-semibold text-slate-900 dark:text-slate-100" : ""}">${hc}</td>`;
                    }).join("")}
                  </tr>`
                ).join("")}
              </tbody>
            </table>
          </div>`;
      }
    );

    return html;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8 font-sans">
      {/* ═══════════ HEADER ═══════════ */}
      <header className="mb-12">
        <div className="flex items-center gap-2.5 mb-4 flex-wrap">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-semibold text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:text-slate-400 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400 transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              {labels.back}
            </button>
          )}
          <span className="rounded-full px-3 py-1.5 text-xs font-black tracking-wide uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md">
            {lvlToCEFR(lesson.level)}
          </span>
          <span className="rounded-full bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 px-3 py-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 shadow-sm">
            {lesson.topic}
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {lesson.title}
          </span>
        </h1>
        {lesson.overview && (
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-2xl border-l-4 border-amber-400 pl-4 py-1">
            <RenderMarkdown text={lesson.overview} />
          </p>
        )}
      </header>

      <div className="space-y-10">
        {/* ═══════════ DATA TABLE ═══════════ */}
        {lesson.timeExpressions && (
          <section id={lesson.anchorSectionId ?? "table"} className="scroll-mt-20">
            <SectionTitle
              icon={<BookOpen className="w-6 h-6 text-indigo-500" />}
              label={lesson.timeExpressionsLabel || ""}
            />
            <div className="overflow-x-auto rounded-2xl border border-slate-200/70 dark:border-slate-700/50 shadow-lg mt-4 bg-white dark:bg-slate-900/60 backdrop-blur-sm">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">
                    {lesson.timeExpressions.header.split("|").map((h, i) => (
                      <th key={i} className="px-4 py-3.5 text-left text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                        {h.trim()}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {lesson.timeExpressions.rows.map((row, ri) => (
                    <tr
                      key={ri}
                      className={
                        ri % 2 === 1
                          ? "bg-indigo-50/30 dark:bg-indigo-900/5"
                          : "bg-white dark:bg-slate-800/20"
                      }
                    >
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className="px-4 py-3 text-sm text-slate-700 dark:text-slate-200 border-t border-indigo-100/60 dark:border-indigo-800/20"
                          dangerouslySetInnerHTML={{ __html: cell }}
                        />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ═══════════ GEDETAILLEERDE UITLEG (accordions) – NU EERST ═══════════ */}
        {lesson.details && lesson.details.length > 0 && (
          <section id="explanation" className="scroll-mt-20">
            <SectionTitle
              icon={<FileText className="w-6 h-6 text-slate-400" />}
              label={labels.detailedExplanation}
            />
            <Accordion type="single" className="space-y-3 mt-4">
              {lesson.details.map((sec, i) => {
                const t = barThemes[i % barThemes.length];
                return (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className={cn(
                      "group overflow-hidden rounded-2xl border border-slate-200/50 dark:border-slate-700/40 bg-white dark:bg-slate-800/60 shadow-md hover:shadow-lg transition-shadow",
                      "border-l-4 data-[state=open]:border-l-indigo-500"
                    )}
                  >
                    <div className={`h-2 w-full shrink-0 ${t.top}`} />
                    <AccordionTrigger
                      className={cn(
                        "flex items-center gap-3 px-5 py-4",
                        "hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors duration-200",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40",
                        "text-left w-full"
                      )}
                    >
                      <span
                        className={cn(
                          "shrink-0 h-9 min-w-[36px] px-2 rounded-xl inline-flex items-center justify-center text-sm font-black",
                          t.badge
                        )}
                      >
                        {i + 1}
                      </span>
                      <span className={cn("flex-1 min-w-0 font-extrabold text-sm", t.titleText)}>
                        {sec.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div
                        className={cn(
                          "px-5 pb-5 space-y-0.5 text-slate-700 dark:text-slate-300",
                          "prose prose-slate dark:prose-invert max-w-none",
                          "prose-p:my-2.5 prose-p:text-slate-700 prose-p:dark:text-slate-300 prose-p:leading-relaxed",
                          "prose-strong:font-bold prose-strong:text-slate-900 prose-strong:dark:text-slate-100",
                          "prose-em:italic prose-em:text-rose-600 prose-em:dark:text-rose-400",
                          "prose-code:rounded-lg prose-code:bg-indigo-100 prose-code:dark:bg-indigo-900/40 prose-code:px-2 prose-code:py-0.5 prose-code:text-xs prose-code:font-mono prose-code:font-bold prose-code:text-indigo-700 prose-code:dark:text-indigo-300",
                          "prose-blockquote:my-3 prose-blockquote:border-l-4 prose-blockquote:border-amber-400 prose-blockquote:bg-amber-50/50 prose-blockquote:dark:bg-amber-900/10 prose-blockquote:rounded-r-xl prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:text-slate-600 prose-blockquote:dark:text-slate-400",
                          "prose-ul:my-3 prose-ul:space-y-1.5 prose-ul:list-none",
                          "prose-li:ml-1.5 prose-li:relative prose-li:pl-5 prose-li:text-slate-700 prose-li:dark:text-slate-300",
                          "prose-li:before:content-[''] prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-2 prose-li:before:w-1.5 prose-li:before:h-1.5 prose-li:before:rounded-full prose-li:before:bg-indigo-400 prose-li:before:dark:bg-indigo-500",
                          "prose-table:my-4 prose-table:overflow-x-auto prose-table:rounded-2xl prose-table:border prose-table:border-slate-200/70 prose-table:dark:border-slate-700 prose-table:shadow-md",
                          "prose-th:bg-gradient-to-r prose-th:from-indigo-600 prose-th:to-indigo-500 prose-th:text-white prose-th:text-xs prose-th:font-bold prose-th:uppercase prose-th:tracking-wider prose-th:px-4 prose-th:py-3 prose-th:text-left",
                          "prose-td:px-4 prose-td:py-3 prose-td:text-sm prose-td:text-slate-700 prose-td:dark:text-slate-300 prose-td:border-t prose-td:border-slate-100 prose-td:dark:border-slate-700/50",
                          "prose-tr:nth-child(even):bg-slate-50/60 prose-tr:nth-child(even):dark:bg-slate-800/30",
                          "max-sm:prose-sm"
                        )}
                      >
                        <div dangerouslySetInnerHTML={{ __html: enrich(sec.body) }} />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </section>
        )}

        {/* ═══════════ GRAMMATICAREGELS (kaartjes) – NU NA DE UITLEG ═══════════ */}
        {lesson.rulesTable && lesson.rulesTable.length > 0 && (
          <section id="rules" className="scroll-mt-20">
            <SectionTitle
              icon={<Sparkles className="w-6 h-6 text-amber-500" />}
              label={labels.rules}
            />
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              {lesson.rulesTable.map((r, i) => {
                const t = barThemes[i % barThemes.length];
                return (
                  <div
                    key={i}
                    className="group relative flex flex-col rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/50 dark:border-slate-700/50 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
                  >
                    <div
                      className={`h-2.5 shrink-0 ${t.top} relative`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-out" />
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-1 rounded-full blur-sm opacity-60" style={{ backgroundColor: t.accent }} />
                    </div>

                    <div className="flex-1 p-5 sm:p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`shrink-0 w-10 h-10 rounded-2xl ${t.badge} flex items-center justify-center text-lg font-black shadow-md ring-2 ring-white/80 dark:ring-slate-700/80`}
                        >
                          {i + 1}
                        </span>
                        <h3 className={`font-display font-extrabold text-base sm:text-lg leading-snug ${t.titleText}`}>
                          {r.rule}
                        </h3>
                      </div>

                      <div className="space-y-4">
                        <div className="rounded-xl bg-slate-50/80 dark:bg-slate-900/60 p-3.5 ring-1 ring-slate-200/60 dark:ring-slate-700/40">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5" style={{ color: t.accent }}>
                            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: t.accent }} />
                            {labels.structure}
                          </p>
                          <div className={`text-sm leading-relaxed ${t.chipText}`}>
                            <RenderMarkdown text={r.structure} />
                          </div>
                        </div>
                        <div className="rounded-xl bg-amber-50/70 dark:bg-amber-900/20 p-3.5 ring-1 ring-amber-200/60 dark:ring-amber-700/30">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5" style={{ color: t.accentDark }}>
                            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: t.accentDark }} />
                            {labels.example}
                          </p>
                          <div className={`text-sm leading-relaxed ${t.chipTextDark}`}>
                            <RenderMarkdown text={r.example} />
                          </div>
                        </div>
                        <div className="rounded-xl bg-blue-50/70 dark:bg-blue-900/20 p-3.5 ring-1 ring-blue-200/60 dark:ring-blue-700/30">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5" style={{ color: t.accent }}>
                            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: t.accent }} />
                            {labels.usage}
                          </p>
                          <div className={`text-sm leading-relaxed ${t.chipTextMedium}`}>
                            <RenderMarkdown text={r.usage} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-white/60 dark:group-hover:ring-slate-500/30 pointer-events-none transition-all duration-500" />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ═══════════ BELANGRIJKE PUNTEN (callouts) ═══════════ */}
        {lesson.callouts && lesson.callouts.length > 0 && (
          <section id="callouts" className="scroll-mt-20">
            <SectionTitle
              icon={<AlertCircle className="w-6 h-6 text-amber-500" />}
              label={(lesson as any).calloutsLabel || labels.importantPoints}
            />
            <div className="grid gap-5 mt-6 sm:grid-cols-2">
              {lesson.callouts.map((c, i) => {
                const Icon = calloutIcons[i % calloutIcons.length];
                const col = calloutColors[i % calloutColors.length];
                return (
                  <div
                    key={i}
                    className="group relative rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/50 dark:border-slate-700/40 shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 flex flex-col">
                      <div
                        className={`w-full flex-1 ${col.border} relative`}
                        style={{ backgroundColor: col.icon }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-8 rounded-full blur-md opacity-40" style={{ backgroundColor: col.icon }} />
                      </div>
                    </div>

                    <div className="flex items-start gap-4 pl-7 p-5">
                      <div className="relative shrink-0">
                        <div
                          className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                          style={{ backgroundColor: col.icon }}
                        />
                        <div className="relative w-11 h-11 rounded-2xl flex items-center justify-center bg-white/90 dark:bg-slate-900/80 shadow-md ring-1 ring-white/50 dark:ring-slate-700/50">
                          <Icon className="w-5 h-5" style={{ color: col.icon }} />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500 mb-1.5">
                          {c.label}
                        </p>
                        <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-200 font-medium prose-a:text-inherit prose-a:underline">
                          <RenderMarkdown text={c.text} />
                        </div>
                      </div>
                    </div>

                    <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" style={{ backgroundColor: col.icon }} />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ═══════════ VEELGEMAAKTE FOUTEN ═══════════ */}
        {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
          <section id="mistakes" className="scroll-mt-20">
            <SectionTitle
              icon={<Target className="w-6 h-6 text-rose-500" />}
              label={labels.commonMistakes}
            />
            <div className="overflow-x-auto rounded-2xl border border-slate-200/70 dark:border-slate-700/50 shadow-lg mt-4 bg-white dark:bg-slate-900/60">
              <table className="w-full border-collapse min-w-[480px] sm:min-w-[600px]">
                <thead>
                  <tr className="bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600">
                    <th className="px-5 py-3.5 text-left text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                      {labels.incorrect}
                    </th>
                    <th className="px-5 py-3.5 text-left text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                      {labels.correct}
                    </th>
                    <th className="px-5 py-3.5 text-left text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                      {labels.why}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {lesson.commonMistakes.map((m, i) => (
                    <tr
                      key={i}
                      className={
                        i % 2 === 1
                          ? "bg-slate-50/60 dark:bg-slate-800/30"
                          : "bg-white dark:bg-slate-800/10"
                      }
                    >
                      <td className="px-5 py-3.5 text-sm text-rose-600 dark:text-rose-400 line-through font-medium border-t border-slate-100 dark:border-slate-700/30">
                        {m.incorrect}
                      </td>
                      <td className="px-5 py-3.5 text-sm text-emerald-700 dark:text-emerald-400 font-bold border-t border-slate-100 dark:border-slate-700/30">
                        {m.correct}
                      </td>
                      <td className="px-5 py-3.5 text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed border-t border-slate-100 dark:border-slate-700/30">
                        <RenderMarkdown text={m.explanation} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ═══════════ SNELLE HERHALING ═══════════ */}
        {lesson.review && lesson.review.length > 0 && (
          <section id="review" className="scroll-mt-20">
            <SectionTitle
              icon={<CheckCircle2 className="w-6 h-6 text-emerald-500" />}
              label={(lesson as any).reviewLabel || labels.quickReview}
            />
            <div className="space-y-4 mt-6">
              {lesson.review.map((item, i) => {
                const rawColorClasses = reviewColors[i % reviewColors.length];
                const accentBorderClass = rawColorClasses
                  .split(' ')
                  .find((c) => c.startsWith('border-l-'));
                const accentColor = accentBorderClass
                  ? accentBorderClass.replace('border-l-', '')
                  : 'emerald-500';
                const badgeClasses = reviewBadgeColors[i % reviewBadgeColors.length];
                return (
                  <div
                    key={i}
                    className="group relative flex items-center gap-5 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/50 dark:border-slate-700/40 shadow-lg hover:shadow-2xl hover:translate-x-1 transition-all duration-500 overflow-hidden pl-7 pr-5 py-5"
                  >
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1.5 bg-${accentColor} overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40 -translate-y-full group-hover:translate-y-full transition-transform duration-700 ease-out" />
                      <div
                        className={`absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-10 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500 bg-${accentColor}`}
                      />
                    </div>
                    <div className="relative shrink-0">
                      <div
                        className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-${accentColor}`}
                      />
                      <span
                        className={`relative flex items-center justify-center w-10 h-10 rounded-full shadow-md ring-1 ring-white/60 dark:ring-slate-700/60 text-sm font-black ${badgeClasses}`}
                      >
                        {i + 1}
                      </span>
                    </div>
                    <p className="flex-1 text-base sm:text-lg leading-relaxed text-slate-800 dark:text-slate-200 font-semibold">
                      <RenderMarkdown text={item} />
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ═══════════ OEFENVRAGEN ═══════════ */}
        {lesson.qa && lesson.qa.length > 0 && (
          <section id="qa" className="scroll-mt-20">
            <SectionTitle
              icon={<HelpCircle className="w-6 h-6 text-indigo-500" />}
              label={(lesson as any).qaLabel || labels.practiceQuestions}
            />
            {(() => {
              const [revealed, setRevealed] = useState<Record<number, boolean>>({});
              const toggle = (i: number) =>
                setRevealed((prev) => ({ ...prev, [i]: !prev[i] }));
              return (
                <div className="space-y-3 mt-4">
                  {lesson.qa.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/40 overflow-hidden shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="p-5 border-b border-slate-100 dark:border-slate-700/30">
                        <p className="text-xs font-black text-slate-400 dark:text-slate-500 mb-1.5 uppercase tracking-wider">
                          {labels.question}
                        </p>
                        <p className="text-sm text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
                          <RenderMarkdown text={item.question} />
                        </p>
                      </div>
                      <div className="p-5 bg-slate-50/40 dark:bg-slate-800/20">
                        <button
                          onClick={() => toggle(i)}
                          className={`font-bold rounded-xl px-5 py-2.5 text-sm transition-all duration-300 ${
                            revealed[i]
                              ? "text-emerald-700 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-900/30 shadow-inner"
                              : "text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600"
                          }`}
                        >
                          {revealed[i] ? (
                            <span>
                              <RenderMarkdown text={item.answer} />
                            </span>
                          ) : (
                            labels.tapToReveal
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </section>
        )}

        {/* ═══════════ ACTIEKNOPPEN ═══════════ */}
        <div className="flex flex-col gap-3 sm:flex-row pt-4">
          {completed ? (
            <span className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-400 dark:border-emerald-500 shadow-md">
              <CheckCircle2 className="w-5 h-5" />
              {labels.completed} · +{XP_REWARDS.GRAMMAR_LESSON_COMPLETE} XP
            </span>
          ) : (
            <button
              onClick={onComplete}
              className="rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-xl hover:shadow-indigo-500/40 hover:brightness-110 active:scale-[0.97]"
            >
              {labels.markComplete} · +{XP_REWARDS.GRAMMAR_LESSON_COMPLETE} XP
            </button>
          )}
          {hasTest && (
            <button
              onClick={onTest}
              className="rounded-2xl border-2 border-amber-400/60 bg-gradient-to-br from-amber-50 to-white dark:from-amber-900/10 dark:to-slate-800/40 px-7 py-3 text-sm font-bold text-amber-700 dark:text-amber-300 transition-all hover:bg-amber-50/80 dark:hover:bg-amber-900/20 hover:border-amber-400 active:scale-[0.97] shadow-md"
            >
              {labels.takeTest}
            </button>
          )}
        </div>
        <AdSlot className="mt-4" />
      </div>
    </div>
  );
}

export default GrammarLessonDesign;