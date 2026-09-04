// src/components/Skeleton.tsx
// ✅ Skeleton loading component — nette laadanimatie

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-slate-200 dark:bg-slate-700 ${className}`}
      aria-hidden="true"
    />
  );
}

// Dashboard skeleton
export function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-2xl space-y-6 px-4 py-6 pb-28 sm:px-6">
        {/* XP card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="mb-3 flex items-center justify-between">
            <div className="space-y-2">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-8 w-32" />
            </div>
            <Skeleton className="h-9 w-24 rounded-xl" />
          </div>
          <Skeleton className="h-2 w-full rounded-full" />
          <Skeleton className="mt-1 ml-auto h-3 w-24" />
        </div>

        {/* Daily goal */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="mb-3 flex items-center justify-between">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-3 w-full rounded-full" />
        </div>

        {/* Streak */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="mb-4 flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-28" />
              <Skeleton className="h-3 w-20" />
            </div>
          </div>
          <div className="flex gap-1.5">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <Skeleton className="h-8 w-full rounded-lg" />
                <Skeleton className="h-2 w-4" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-center gap-3">
                <Skeleton className="h-5 w-5 rounded" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Page skeleton — generic
export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-2xl space-y-4 px-4 py-8 pb-28 sm:px-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-32" />
        <div className="mt-6 space-y-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-xl" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
