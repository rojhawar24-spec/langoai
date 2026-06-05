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
          <button onClick={() => setSelected(null)} className="mb-6 flex items-center gap-1 text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
            Back to Mistakes
          </button>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-4 flex items-center gap-2">
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${selected.source === "exercise" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"}`}>
                {selected.source === "exercise" ? "🎯 Practice" : "📝 Test"} · {selected.topic}
              </span>
              {selected.reviewed && <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">Reviewed</span>}
            </div>

            {/* Question */}
            <div className="rounded-xl bg-slate-50 p-5 dark:bg-slate-800/50">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Question</p>
              <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{selected.question}</p>
            </div>

            {/* Your answer vs Correct */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border-2 border-red-200 bg-red-50 p-5 dark:border-red-800 dark:bg-red-900/20">
                <p className="text-xs font-medium text-red-500">❌ Your Answer</p>
                <p className="mt-2 text-xl font-bold text-red-700 dark:text-red-300">{selected.yourAnswer}</p>
              </div>
              <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-800 dark:bg-emerald-900/20">
                <p className="text-xs font-medium text-emerald-500">✅ Correct Answer</p>
                <p className="mt-2 text-xl font-bold text-emerald-700 dark:text-emerald-300">{selected.correctAnswer}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3">
              {!selected.reviewed && (
                <button onClick={() => handleReview(selected)} className="flex-1 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700">
                  ✅ Mark as Reviewed
                </button>
              )}
              <button onClick={() => handleDelete(selected.id)} className="rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20">
                🗑️ Delete
              </button>
            </div>
          </div>

          {/* Try again: go to exercises */}
          <button onClick={() => navigate("/arena")} className="mt-4 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
            🎯 Practice Again
          </button>
        </div>
      </div>
    );
  }

  // ---- List view ----
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <button onClick={() => navigate("/dashboard")} className="mb-6 flex items-center gap-1 text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          Back to Dashboard
        </button>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">🔧 Mistake Review</h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">
            Learn from your mistakes · {stats.total} saved · {stats.reviewed} reviewed
          </p>
        </div>

        {/* Stats cards */}
        <div className="mb-6 grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center dark:border-red-800 dark:bg-red-900/20">
            <p className="text-2xl font-bold text-red-600">{stats.total}</p>
            <p className="text-xs text-red-500">Total</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center dark:border-amber-800 dark:bg-amber-900/20">
            <p className="text-2xl font-bold text-amber-600">{stats.total - stats.reviewed}</p>
            <p className="text-xs text-amber-500">Unreviewed</p>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center dark:border-emerald-800 dark:bg-emerald-900/20">
            <p className="text-2xl font-bold text-emerald-600">{stats.reviewed}</p>
            <p className="text-xs text-emerald-500">Reviewed</p>
          </div>
        </div>

        {/* Search + Filter */}
        <div className="mb-4 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search mistakes..."
              className="w-full rounded-xl border border-slate-300 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />
          </div>
          <div className="flex gap-1">
            {(["all","unreviewed","reviewed"] as const).map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={`rounded-full border px-4 py-1.5 text-xs font-medium capitalize transition ${
                filter === f ? "border-red-500 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300" : "border-slate-200 text-slate-500 dark:border-slate-700 dark:text-slate-400"
              }`}>{f}</button>
            ))}
          </div>
        </div>

        {/* Clear all */}
        {list.length > 0 && (
          <div className="mb-4 text-right">
            <button onClick={handleClearAll} className="text-xs text-red-400 hover:text-red-600">Clear all mistakes</button>
          </div>
        )}

        {/* Mistake list */}
        <div className="space-y-3">
          {filtered.length === 0 && (
            <div className="rounded-2xl border-2 border-dashed border-slate-300 p-12 text-center dark:border-slate-600">
              <span className="text-5xl">🎉</span>
              <h3 className="mt-3 text-lg font-semibold text-slate-700 dark:text-slate-300">
                {list.length === 0 ? "No mistakes yet!" : "No matching mistakes"}
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                {list.length === 0 ? "Keep practicing — mistakes will appear here so you can learn from them." : "Try a different filter."}
              </p>
            </div>
          )}

          {filtered.map((m) => (
            <button key={m.id} onClick={() => setSelected(m)}
              className={`w-full rounded-xl border-2 p-4 text-left transition hover:shadow-md ${
                m.reviewed
                  ? "border-emerald-200 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-900/10"
                  : "border-red-200 bg-white hover:border-red-300 dark:border-red-800 dark:bg-slate-800 dark:hover:border-red-700"
              }`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${m.source === "exercise" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"}`}>
                      {m.source === "exercise" ? "🎯" : "📝"} {m.topic}
                    </span>
                    {m.reviewed && <span className="text-xs text-emerald-500">✅ Reviewed</span>}
                    {!m.reviewed && <span className="text-xs text-red-400">⚠️ Unreviewed</span>}
                  </div>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200 line-clamp-1">{m.question}</p>
                  <div className="mt-1.5 flex items-center gap-2 text-xs">
                    <span className="text-red-500 line-through">{m.yourAnswer}</span>
                    <span className="text-slate-300">→</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">{m.correctAnswer}</span>
                  </div>
                </div>
                <button onClick={(e) => { e.stopPropagation(); handleDelete(m.id); }} className="shrink-0 rounded-lg p-2 text-slate-300 hover:bg-red-50 hover:text-red-400 dark:hover:bg-red-900/20">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
