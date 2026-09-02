// src/pages/MistakesPage.tsx
// ✅ BUG-17 FIXED: window.confirm() vervangen door custom modal
// ✅ CORRECT: stats.total - stats.reviewed (niet stats.unreviewed — bestaat niet)

import { useState, useMemo, useEffect, useRef, type ChangeEvent } from "react";
import { useTranslate } from "@/i18n/I18nContext";
import {
  getMistakes,
  markMistakeReviewed,
  deleteMistake,
  clearAllMistakes,
  getMistakeStats,
  type MistakeEntry,
} from "@/utils/mistakes";

// ── Confirm Modal ────────────────────────────────────────────────────────
function ConfirmDeleteModal({
  onConfirm,
  onCancel,
}: {
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const { t } = useTranslate();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<Element | null>(null);

  // 🔒 FIX (audit #19 — same gap already fixed in SettingsPage.tsx's
  // ConfirmModal and ArenaPage.tsx's CoinShop): role/aria-modal/
  // aria-labelledby were correct, but nothing moved focus in, trapped
  // it, or closed on Escape.
  useEffect(() => {
    previouslyFocused.current = document.activeElement;
    cancelRef.current?.focus();

    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onCancel();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus();
      }
    };
  }, [onCancel]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-800">
        <p className="mb-2 text-2xl">🗑️</p>
        <h2
          id="confirm-title"
          className="mb-2 text-lg font-bold text-slate-900 dark:text-white"
        >
          {t("mistakes.clear_all")}?
        </h2>
        <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
          {t("mistakes.clearAllWarning")}
        </p>
        <div className="flex gap-3">
          <button ref={cancelRef} type="button" onClick={onCancel}
            className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
          >
            {t("generic.cancel")}
          </button>
          <button type="button" onClick={onConfirm}
            className="flex-1 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            {t("mistakes.clear_all")}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main page ────────────────────────────────────────────────────────────
export default function MistakesPage() {
  const { t } = useTranslate();
  const [list,        setList]        = useState<MistakeEntry[]>(getMistakes);
  const [selected,    setSelected]    = useState<MistakeEntry | null>(null);
  const [filter,      setFilter]      = useState<"all" | "unreviewed" | "reviewed">("all");
  const [search,      setSearch]      = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  const stats = useMemo(() => getMistakeStats(), [list]);
  // ✅ CORRECT: getMistakeStats geeft { total, reviewed, byTopic } terug
  //            'unreviewed' bestaat niet → berekenen we zelf
  const unreviewedCount = stats.total - stats.reviewed;

  const filtered = useMemo(() => {
    let items = list;
    if (filter === "unreviewed") items = items.filter((m) => !m.reviewed);
    if (filter === "reviewed")   items = items.filter((m) =>  m.reviewed);
    if (search) {
      const s = search.toLowerCase();
      items = items.filter(
        (m) =>
          m.question.toLowerCase().includes(s) ||
          m.topic.toLowerCase().includes(s) ||
          m.correctAnswer.toLowerCase().includes(s)
      );
    }
    return items;
  }, [list, filter, search]);

  function handleReview(m: MistakeEntry) {
    markMistakeReviewed(m.id);
    setList(getMistakes());
  }

  function handleDelete(id: string) {
    deleteMistake(id);
    setList(getMistakes());
    if (selected?.id === id) setSelected(null);
  }

  function handleClearAll() {
    setShowConfirm(true);
  }

  function confirmClearAll() {
    clearAllMistakes();
    setList([]);
    setSelected(null);
    setShowConfirm(false);
  }

  // ── Detail view ──────────────────────────────────────────────────────────
  if (selected) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-2xl px-4 py-8 pb-28 sm:px-6">
          <button type="button" onClick={() => setSelected(null)}
            aria-label={t("mistakes.title")}
            className="mb-6 flex items-center gap-1 text-sm text-slate-500 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t("mistakespage.backDetail")}
          </button>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                selected.source === "exercise"
                  ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                  : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
              }`}>
                {selected.source === "exercise" ? `🎯 ${t("mistakes.source_exercise")}` : `📝 ${t("mistakes.source_test")}`} · {selected.topic}
              </span>
              {selected.reviewed && (
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  ✓ {t("mistakes.reviewed")}
                </span>
              )}
            </div>

            <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/50">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{t("mistakespage.question")}</p>
              <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">{selected.question}</p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-red-50 p-4 dark:bg-red-900/20">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-red-500">{t("mistakes.your_answer")}</p>
                <p className="text-sm text-red-800 dark:text-red-200">{selected.yourAnswer}</p>
              </div>
              <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-900/20">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-emerald-500">{t("mistakes.correct_answer")}</p>
                <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">{selected.correctAnswer}</p>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <button type="button" onClick={() => { handleReview(selected); setSelected(null); }}
                className="flex-1 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                {t("mistakes.review")}
              </button>
              <button type="button" onClick={() => handleDelete(selected.id)}
                className="rounded-xl border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20"
              >
                {t("mistakes.delete")}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── List view ────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {showConfirm && (
        <ConfirmDeleteModal
          onConfirm={confirmClearAll}
          onCancel={() => setShowConfirm(false)}
        />
      )}

      <div className="mx-auto max-w-2xl px-4 py-8 pb-28 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              🔧 {t("nav.mistakes")}
            </h1>
            {/* ✅ CORRECT: stats.total - stats.reviewed */}
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {stats.total} {t("mistakes.total")} · {unreviewedCount} {t("mistakes.unreviewed")}
            </p>
          </div>
          {list.length > 0 && (
            <button type="button" onClick={handleClearAll}
              className="rounded-xl border border-red-200 px-3 py-2 text-xs font-medium text-red-600 transition hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20"
            >
              {t("mistakes.clear_all")}
            </button>
          )}
        </div>

        <div className="mb-4 flex gap-2">
          {(["all", "unreviewed", "reviewed"] as const).map((f) => {
            const label = f === "all" ? t("mistakesview.all") : f === "unreviewed" ? t("mistakes.unreviewed") : t("mistakes.reviewed");
            return (
              <button type="button" key={f}
                onClick={() => setFilter(f)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium capitalize transition ${
                  filter === f
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="relative mb-4">
          <input
            type="search"
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            placeholder={t("mistakes.search")}
            aria-label={t("mistakes.search")}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 pl-9 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
          <svg className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-800">
            <p className="text-5xl">✨</p>
            <p className="mt-3 text-lg font-semibold text-slate-700 dark:text-slate-200">
              {list.length === 0 ? t("mistakes.no_mistakes") : t("mistakes.no_match")}
            </p>
            <p className="mt-1 text-sm text-slate-400">
              {list.length === 0
                ? t("mistakes.no_mistakes_msg")
                : t("mistakes.no_match")}
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((m) => (
              <button type="button" key={m.id}
                onClick={() => setSelected(m)}
                className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-indigo-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-700"
              >
                <span className={`h-2.5 w-2.5 flex-shrink-0 rounded-full ${m.reviewed ? "bg-slate-300 dark:bg-slate-600" : "bg-amber-400"}`} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-slate-900 dark:text-white">{m.question}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{m.topic}</p>
                </div>
                <svg className="h-4 w-4 flex-shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
