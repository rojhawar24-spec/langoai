import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { xpForNextLevel, xpRequiredForLevel } from "@/utils/xp";
import { computeStreak, getLast7Days } from "@/utils/streak";
import { useStreakReconciler } from "@/hooks/useStreakReconciler";

const LEARNING_LANGUAGES = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "nl", name: "Dutch", flag: "🇳🇱" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
];

export default function ProfilePage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  useStreakReconciler();

  if (!user) return null;

  const { streak: currentStreak } = useMemo(() => computeStreak(), [user?.streak]);
  const last7Days = useMemo(() => getLast7Days(), [user?.streak]);

  const xpNeededForNext = xpForNextLevel(user.level);
  const xpCurrent = user.totalXP - xpRequiredForLevel(user.level);
  const xpProgress = Math.min((xpCurrent / xpNeededForNext) * 100, 100);

  const initials = user.username.slice(0, 2).toUpperCase();
  const memberSince = new Date(user.createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Longest streak (simplified — we use current as a proxy) (simplified — we use current as a proxy)
  const longestStreak = Math.max(currentStreak, user.streak);

  const activeDaysThisWeek = last7Days.filter((d) => d.active).length;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 flex items-center gap-1 text-sm text-slate-500 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </button>

        {/* ===== HEADER ===== */}
        <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-2xl font-bold text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 sm:h-24 sm:w-24 sm:text-3xl">
            {initials}
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              {user.username}
            </h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Member since {memberSince}
            </p>
            <div className="mt-2 flex items-center justify-center gap-3 sm:justify-start">
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
                ⭐ Level {user.level}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">
                🔥 {currentStreak} day streak
              </span>
              {user.premium && (
                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
                  👑 PREMIUM
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ===== STATS GRID ===== */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{user.totalXP.toLocaleString()}</p>
            <p className="text-xs text-slate-500">Total XP</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{user.level}</p>
            <p className="text-xs text-slate-500">Level</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{currentStreak}</p>
            <p className="text-xs text-slate-500">Current Streak</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{longestStreak}</p>
            <p className="text-xs text-slate-500">Longest Streak</p>
          </div>
        </div>

        {/* ===== XP PROGRESS ===== */}
        <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Level Progress
          </h2>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium text-slate-700 dark:text-slate-300">
              Level {user.level}
            </span>
            <span className="text-slate-500">
              {xpCurrent} / {xpNeededForNext} XP → Level {user.level + 1}
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all"
              style={{ width: `${xpProgress}%` }}
            />
          </div>
        </div>

        {/* ===== WEEK ACTIVITY ===== */}
        <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
            This Week
          </h2>
          <div className="flex items-center justify-between">
            {last7Days.map((day) => (
              <div key={day.date} className="flex flex-1 flex-col items-center gap-2">
                <span className="text-xs font-medium text-slate-400">{day.label}</span>
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm ${
                    day.active
                      ? "bg-orange-100 text-orange-600 ring-2 ring-orange-300 dark:bg-orange-900/40 dark:text-orange-300 dark:ring-orange-600"
                      : "bg-slate-100 text-slate-300 dark:bg-slate-700 dark:text-slate-500"
                  } ${day.isToday ? "ring-slate-400 dark:ring-slate-500" : ""}`}
                >
                  {day.active ? "🔥" : "·"}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-slate-500">
            {activeDaysThisWeek} of 7 days active this week
          </p>
        </div>

        {/* ===== LANGUAGES ===== */}
        <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Learning Languages
          </h2>
          <div className="space-y-3">
            {LEARNING_LANGUAGES.map((lang) => {
              const isActive = user.currentLanguage === lang.code;
              return (
                <div
                  key={lang.code}
                  className={`flex items-center justify-between rounded-lg border p-3 ${
                    isActive
                      ? "border-indigo-200 bg-indigo-50 dark:border-indigo-700 dark:bg-indigo-900/20"
                      : "border-slate-100 dark:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <div>
                      <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                        {lang.name}
                      </p>
                      {isActive && (
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">
                          Currently learning
                        </p>
                      )}
                    </div>
                  </div>
                  {isActive && (
                    <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
                      Active
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== ACHIEVEMENTS PLACEHOLDER ===== */}
        <div className="mb-8 rounded-xl border border-dashed border-slate-300 bg-white p-6 dark:border-slate-600 dark:bg-slate-800">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Achievements
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { icon: "🔥", label: "7-Day Streak", earned: currentStreak >= 7 },
              { icon: "🏆", label: "30-Day Streak", earned: currentStreak >= 30 },
              { icon: "⭐", label: "First Lesson", earned: user.totalXP > 0 },
              { icon: "🎯", label: "Goal Crusher", earned: user.totalXP >= 100 },
              { icon: "📚", label: "Scholar", earned: user.totalXP >= 500 },
              { icon: "💪", label: "XP Warrior", earned: user.totalXP >= 1000 },
            ].map((ach) => (
              <div
                key={ach.label}
                className={`flex flex-col items-center gap-2 rounded-lg border p-4 text-center transition ${
                  ach.earned
                    ? "border-amber-200 bg-amber-50 dark:border-amber-700 dark:bg-amber-900/20"
                    : "border-slate-100 opacity-50 dark:border-slate-700"
                }`}
              >
                <span className={`text-2xl ${ach.earned ? "" : "grayscale"}`}>
                  {ach.icon}
                </span>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  {ach.label}
                </p>
                {ach.earned && (
                  <span className="text-xs text-amber-600 dark:text-amber-400">Earned!</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ===== PREMIUM STATUS ===== */}
        <div className={`mb-8 rounded-xl border p-6 shadow-sm ${
          user.premium
            ? "border-amber-300 bg-gradient-to-br from-amber-50 to-white dark:border-amber-600 dark:from-amber-900/10 dark:to-slate-800"
            : "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"
        }`}>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Membership
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{user.premium ? "👑" : "⭐"}</span>
              <div>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  {user.premium ? "Premium Member" : "Free Plan"}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {user.premium
                    ? "You have unlimited AI messages, ad-free experience, and all premium perks."
                    : "5 AI messages/day, ads, and basic features."}
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate("/premium")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                user.premium
                  ? "border border-amber-300 text-amber-700 hover:bg-amber-50 dark:border-amber-500 dark:text-amber-300 dark:hover:bg-amber-900/20"
                  : "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-sm hover:from-amber-500 hover:to-orange-600"
              }`}
            >
              {user.premium ? "Manage" : "Upgrade →"}
            </button>
          </div>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/settings")}
            className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            ⚙️ Settings
          </button>
        </div>
      </div>
    </div>
  );
}
