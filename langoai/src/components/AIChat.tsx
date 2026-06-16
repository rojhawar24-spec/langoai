interface AIChatProps {
  open: boolean;
  onClose: () => void;
}
 
export default function AIChat({ open, onClose }: AIChatProps) {
  if (!open) return null;
 
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm"
        onClick={onClose}
      />
 
      {/* Panel */}
      <div className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-white shadow-2xl dark:bg-slate-950 lg:inset-y-0 lg:left-auto lg:right-0 lg:max-w-lg lg:rounded-l-3xl">
        {/* Header */}
        <div className="border-b border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2h-1V8a5 5 0 00-10 0v3H6a2 2 0 00-2 2v6a2 2 0 002 2zm3-10V8a3 3 0 016 0v3" />
                </svg>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-slate-950 dark:text-white">AI Tutor</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">Coming Soon</p>
              </div>
            </div>
 
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
              title="Close"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
 
        {/* Coming Soon content */}
        <div className="flex flex-1 flex-col items-center justify-center bg-slate-50 px-6 py-12 text-center dark:bg-slate-950">
          {/* Animated robot */}
          <div className="relative mb-8">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl shadow-indigo-300 dark:shadow-indigo-900/50">
              <span className="text-5xl">🤖</span>
            </div>
            {/* Pulse ring */}
            <div className="absolute inset-0 -z-10 animate-ping rounded-3xl bg-indigo-400 opacity-20" />
          </div>
 
          <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white">
            Coming Soon
          </h3>
          <p className="mt-3 max-w-xs text-sm text-slate-500 dark:text-slate-400">
            De AI Tutor wordt binnenkort beschikbaar. We werken hard om je de beste leerervaring te geven!
          </p>
 
          {/* Feature preview */}
          <div className="mt-8 w-full max-w-xs space-y-2">
            {[
              { icon: "📖", label: "Grammar hulp" },
              { icon: "🌍", label: "Vertalingen" },
              { icon: "💬", label: "Gespreksoefening" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-500"
              >
                <span className="text-base opacity-50">{item.icon}</span>
                <span>{item.label}</span>
                <span className="ml-auto text-xs font-medium text-indigo-400 dark:text-indigo-500">binnenkort</span>
              </div>
            ))}
          </div>
 
          <button
            onClick={onClose}
            className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700 active:scale-95"
          >
            Sluit venster
          </button>
        </div>
      </div>
    </>
  );
}
 