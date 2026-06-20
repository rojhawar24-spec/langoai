import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  getMistakes,
  markMistakeReviewed,
  deleteMistake,
  clearAllMistakes,
  getMistakeStats,
  type MistakeEntry,
} from "@/utils/mistakes";

export default function MistakesPage() {
  const navigate = useNavigate();
  const [list, setList] = useState<MistakeEntry[]>(getMistakes);
  const [selected, setSelected] = useState<MistakeEntry | null>(null);
  const [filter, setFilter] = useState<"all" | "unreviewed" | "reviewed">("all");
  const [search, setSearch] = useState("");

  const stats = useMemo(() => getMistakeStats(), [list]);

  const filtered = useMemo(() => {
    let items = list;
    if (filter === "unreviewed") items = items.filter((m) => !m.reviewed);
    if (filter === "reviewed") items = items.filter((m) => m.reviewed);
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
    if (confirm("Delete all mistakes? This cannot be undone.")) {
      clearAllMistakes();
      setList([]);
      setSelected(null);
    }
  }

  // ---- Detail view ----
  if (selected) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
          {/* Back button */}
          <button
            onClick={() => setSelected(null)}
            className="group mb-6 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:bg-white hover:text-indigo-600 hover:shadow-sm dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
          >
            <svg className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Mistakes
          </button>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-900/50">
            <div className="p-6 sm:p-8">
              {/* Badges */}
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                    selected.source === "exercise"
                      ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                      : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                  }`}
                >
                  {selected.source === "exercise" ? "🎯" : "📝"} {selected.source === "exercise" ? "Practice" : "Test"}
                  <span className="mx-1 opacity-50">·</span>
                  {selected.topic}
                </span>
                {selected.reviewed && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    ✅ Reviewed
                  </span>
                )}
                {!selected.reviewed && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-300">
                    ⚠️ Unreviewed
                  </span>
                )}
              </div>

              {/* Question card */}
              <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Question</p>
                <p className="mt-2 text-xl font-bold leading-relaxed text-slate-900 dark:text-white">{selected.question}</p>
              </div>

              {/* Your answer vs Correct */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-5 dark:border-red-800 dark:bg-red-900/20">
                  <p className="text-xs font-semibold text-red-500">❌ Your Answer</p>
                  <p className="mt-2 text-xl font-bold text-red-700 dark:text-red-300">{selected.yourAnswer}</p>
                </div>
                <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-800 dark:bg-emerald-900/20">
                  <p className="text-xs font-semibold text-emerald-500">✅ Correct Answer</p>
                  <p className="mt-2 text-xl font-bold text-emerald-700 dark:text-emerald-300">{selected.correctAnswer}</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row-reverse">
                {!selected.reviewed && (
                  <button
                    onClick={() => handleReview(selected)}
                    className="flex-1 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:from-indigo-700 hover:to-violet-700 hover:shadow-indigo-500/40 active:scale-[0.98]"
                  >
                    ✅ Mark as Reviewed
                  </button>
                )}
                <button
                  onClick={() => handleDelete(selected.id)}
                  className="flex-1 rounded-2xl border-2 border-red-200 bg-white px-6 py-3.5 text-sm font-bold text-red-600 transition-all hover:bg-red-50 hover:border-red-300 dark:border-red-800 dark:bg-slate-800 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:border-red-700 active:scale-[0.98]"
                >
                  🗑️ Delete Mistake
                </button>
              </div>
            </div>
          </div>

          {/* Try again button */}
          <button
            onClick={() => navigate("/arena")}
            className="mt-6 w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-600 hover:to-green-700 hover:shadow-emerald-500/40 active:scale-[0.98]"
          >
            🎯 Practice Again & Improve
          </button>
        </div>
      </div>
    );
  }

  // ---- List view ----
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        {/* Back to Dashboard */}
        <button
          onClick={() => navigate("/dashboard")}
          className="group mb-6 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:bg-white hover:text-indigo-600 hover:shadow-sm dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
        >
          <svg className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">🔧 Mistake Review</h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Learn from your mistakes · {stats.total} saved · {stats.reviewed} reviewed
          </p>
        </div>

        {/* Stats cards */}
        <div className="mb-8 grid grid-cols-3 gap-4">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-center shadow-sm dark:border-red-800 dark:bg-red-900/20">
            <p className="text-3xl font-bold text-red-600">{stats.total}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-red-500">Total</p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center shadow-sm dark:border-amber-800 dark:bg-amber-900/20">
            <p className="text-3xl font-bold text-amber-600">{stats.total - stats.reviewed}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-amber-500">Unreviewed</p>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center shadow-sm dark:border-emerald-800 dark:bg-emerald-900/20">
            <p className="text-3xl font-bold text-emerald-600">{stats.reviewed}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-emerald-500">Reviewed</p>
          </div>
        </div>

        {/* Search + Filter */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search mistakes..."
              className="w-full rounded-2xl border-2 border-slate-200 bg-white py-3 pl-12 pr-5 text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-red-400 focus:ring-4 focus:ring-red-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-red-500 dark:focus:ring-red-900/30"
            />
          </div>
          <div className="flex gap-2">
            {(["all", "unreviewed", "reviewed"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border-2 px-5 py-2.5 text-sm font-bold capitalize transition-all active:scale-95 ${
                  filter === f
                    ? "border-red-500 bg-red-50 text-red-700 shadow-sm dark:bg-red-900/30 dark:text-red-300"
                    : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Clear all mistakes */}
        {list.length > 0 && (
          <div className="mb-6 flex justify-end">
            <button
              onClick={handleClearAll}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-transparent px-4 py-2 text-xs font-bold text-red-400 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:hover:border-red-800 dark:hover:bg-red-900/20 dark:hover:text-red-300"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear all mistakes
            </button>
          </div>
        )}

        {/* Mistake list */}
        <div className="space-y-4">
          {filtered.length === 0 && (
            <div className="rounded-3xl border-2 border-dashed border-slate-300 p-12 text-center dark:border-slate-600">
              <span className="text-5xl">🎉</span>
              <h3 className="mt-4 text-xl font-semibold text-slate-700 dark:text-slate-300">
                {list.length === 0 ? "No mistakes yet!" : "No matching mistakes"}
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                {list.length === 0
                  ? "Keep practicing — mistakes will appear here so you can learn from them."
                  : "Try a different filter."}
              </p>
            </div>
          )}

          {filtered.map((m) => (
            <div
              key={m.id}
              className={`group overflow-hidden rounded-2xl border-2 bg-white transition-all hover:shadow-lg dark:bg-slate-800 ${
                m.reviewed
                  ? "border-emerald-200 hover:border-emerald-300 dark:border-emerald-800 dark:hover:border-emerald-700"
                  : "border-red-200 hover:border-red-300 dark:border-red-800 dark:hover:border-red-700"
              }`}
            >
              <button
                onClick={() => setSelected(m)}
                className="flex w-full items-start gap-4 p-5 text-left"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        m.source === "exercise"
                          ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                          : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                      }`}
                    >
                      {m.source === "exercise" ? "🎯" : "📝"} {m.topic}
                    </span>
                    {m.reviewed ? (
                      <span className="text-xs font-semibold text-emerald-500">✅ Reviewed</span>
                    ) : (
                      <span className="text-xs font-semibold text-red-400">⚠️ Unreviewed</span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">{m.question}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs">
                    <span className="font-medium text-red-500 line-through">{m.yourAnswer}</span>
                    <span className="text-slate-300">→</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{m.correctAnswer}</span>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(m.id);
                  }}
                  className="shrink-0 rounded-xl p-2.5 text-slate-300 transition-all hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                  title="Delete mistake"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}