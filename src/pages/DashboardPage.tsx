import { useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTranslate } from "@/i18n/I18nContext";
import { getDailyGoalProgress } from "@/utils/progress";
import { xpForNextLevel, xpRequiredForLevel, XP_REWARDS } from "@/utils/xp";
import { computeStreak, getLast7Days } from "@/utils/streak";
import { useStreakReconciler } from "@/hooks/useStreakReconciler";
import { getResumeRoute } from "@/utils/savePosition";
import { useBadgeChecker } from "@/hooks/useBadgeChecker";
import BadgeNotification from "@/components/BadgeNotification";
import AdSlot from "@/components/AdSlot";
const LEARNING_LANGUAGES = [
  { code: "en", nameKey: "lang.en" as const, flag: "🇬🇧", color: "from-blue-400 to-indigo-500" },
  { code: "nl", nameKey: "lang.nl" as const, flag: "🇳🇱", color: "from-orange-400 to-amber-500" },
  { code: "fr", nameKey: "lang.fr" as const, flag: "🇫🇷", color: "from-blue-400 to-indigo-600" },
  { code: "de", nameKey: "lang.de" as const, flag: "🇩🇪", color: "from-red-400 to-rose-500" },
  { code: "es", nameKey: "lang.es" as const, flag: "🇪🇸", color: "from-yellow-400 to-orange-500" },
];

export default function DashboardPage() {
  const { user, updateProfile } = useAuth();
  const { t } = useTranslate();

  // Reconcile streak from source-of-truth active-date registry
  useStreakReconciler();
  const { newBadge, checkBadges, clearNewBadge } = useBadgeChecker();

  if (!user) return null;

  const navigate = useNavigate();
  const resume = useMemo(() => getResumeRoute(), []);
  const dailyGoal = useMemo(() => getDailyGoalProgress(), []);

  const xpNeededForNext = xpForNextLevel(user.level);
  const xpCurrent = user.totalXP - xpRequiredForLevel(user.level);
  const xpProgress = Math.min((xpCurrent / xpNeededForNext) * 100, 100);
  const xpNeeded = Math.max(xpNeededForNext - xpCurrent, 0);

  const selectedLang = LEARNING_LANGUAGES.find(
    (l) => l.code === user.currentLanguage
  );

  const { streak: computedStreak, todayActive: hasActivityToday } =
    useMemo(() => computeStreak(), [user?.streak]);
  const last7Days = useMemo(() => getLast7Days(), [user?.streak]);

  // Check badges whenever XP/streak changes
  useEffect(() => {
    checkBadges({ totalXP: user.totalXP, streak: computedStreak });
  }, [user.totalXP, computedStreak]);

  function selectLanguage(code: string) {
    updateProfile({ currentLanguage: code });
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {newBadge && <BadgeNotification badge={newBadge} onDone={clearNewBadge} />}
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* ========== WELCOME SECTION ========== */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            {t("dashboard.welcome")} {user.username}! 👋
          </h1>
          {selectedLang ? (
            <p className="mt-2 flex items-center gap-2 text-lg text-slate-600 dark:text-slate-400">
              <span className="text-2xl">{selectedLang.flag}</span>
              <span>
                {t("dashboard.learningLanguage")}{" "}
                <strong className="text-slate-800 dark:text-slate-200">
                  {t(selectedLang.nameKey)}
                </strong>
              </span>
            </p>
          ) : (
            <div className="mt-3 rounded-xl border-2 border-dashed border-amber-300 bg-amber-50 px-5 py-3 dark:border-amber-600 dark:bg-amber-900/20">
              <p className="text-sm font-medium text-amber-700 dark:text-amber-300">
                🌍 {t("dashboard.noLanguagePrompt")}
              </p>
            </div>
          )}
        </div>

        {/* ========== STATS CARDS ========== */}
        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {/* Level card */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-xl dark:bg-amber-900/40">
                ⭐
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t("dashboard.level")}
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  {user.level}
                </p>
              </div>
            </div>
          </div>

          {/* XP card */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-xl dark:bg-indigo-900/40">
                ⚡
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t("dashboard.totalXP")}
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  {user.totalXP.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Streak card */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl text-xl ${
                  hasActivityToday
                    ? "bg-orange-100 dark:bg-orange-900/40"
                    : "bg-slate-100 dark:bg-slate-700"
                }`}
              >
                {hasActivityToday ? "🔥" : "💤"}
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t("dashboard.streak")}
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  {computedStreak} {t("dashboard.days")}
                </p>
              </div>
            </div>
          </div>

          {/* Language card */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-xl dark:bg-emerald-900/40">
                {selectedLang ? selectedLang.flag : "🌍"}
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t("dashboard.language")}
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  {selectedLang ? t(selectedLang.nameKey) : t("dashboard.none")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========== TWO-COLUMN LAYOUT: Progress + Daily Goal ========== */}
        <div className="mb-6 grid gap-6 xl:grid-cols-2">
          {/* ----- PROGRESS CARD ----- */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-slate-400">
              {t("dashboard.level")} {user.level}
            </h2>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">
              {t("dashboard.xpProgress")} {user.level + 1}
            </p>

            {/* XP bar */}
            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  {xpCurrent.toLocaleString()} / {xpNeededForNext.toLocaleString()} {t(
                    "topbar.xp"
                  )}
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  {Math.round(xpProgress)}%
                </span>
              </div>
              <div className="h-4 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700 ease-out"
                  style={{ width: `${xpProgress}%` }}
                />
              </div>
            </div>

            {xpNeeded > 0 ? (
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                {t("dashboard.needMoreXP")}{" "}
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {xpNeeded.toLocaleString()}
                </span>{" "}
                {t("dashboard.moreXP")}{" "}
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {user.level + 1}
                </span>
                .
              </p>
            ) : (
              <p className="mt-3 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                🎉 You're ready to level up!
              </p>
            )}
          </div>

          {/* ----- DAILY GOAL + STREAK ----- */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
              {t("dashboard.dailyGoal")}
            </h2>

            <div className="flex items-center gap-6">
              {/* Circular progress ring */}
              <div className="relative flex-shrink-0">
                <svg className="h-28 w-28 -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    className="text-slate-200 dark:text-slate-700"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                    className="text-indigo-500"
                    strokeDasharray={`${2 * Math.PI * 52}`}
                    strokeDashoffset={`${2 * Math.PI * 52 * (1 - dailyGoal.percent / 100)}`}
                    style={{ transition: "stroke-dashoffset 0.8s ease-out" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {dailyGoal.current}
                  </span>
                  <span className="text-xs text-slate-400">/ {dailyGoal.goal}</span>
                </div>
              </div>

              {/* Text + Streak */}
              <div className="flex-1">
                {dailyGoal.percent >= 100 ? (
                  <div>
                    <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                      {t("dashboard.dailyGoalReached")}
                    </p>
                  </div>
                ) : dailyGoal.current === 0 ? (
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {t("dashboard.dailyGoalEmpty")}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {dailyGoal.current} / {dailyGoal.goal} {t("topbar.xp")} today
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {dailyGoal.goal - dailyGoal.current} {t("topbar.xp")} to go
                    </p>
                  </div>
                )}

                {/* Streak flame section */}
                <div className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-700">
                  {computedStreak > 0 ? (
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-2xl ${
                          hasActivityToday ? "animate-pulse" : "opacity-40"
                        }`}
                      >
                        🔥
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                          {computedStreak} {t("dashboard.streakActive")}
                        </p>
                        {!hasActivityToday && (
                          <p className="text-xs text-orange-500 dark:text-orange-400">
                            {t("dashboard.streakAtRisk")}
                          </p>
                        )}
                        {/* Milestone badges */}
                        {computedStreak >= 30 && (
                          <span className="mt-1 inline-block rounded-full bg-purple-100 px-2 py-0.5 text-xs font-semibold text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                            🏆 30-day champion
                          </span>
                        )}
                        {computedStreak >= 7 && computedStreak < 30 && (
                          <span className="mt-1 inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                            ⭐ 7-day streak
                          </span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-2xl opacity-40">🔥</span>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {t("dashboard.emptyStreak")}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 7-Day streak calendar */}
            <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-700">
              <p className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-400">
                Last 7 days
              </p>
              <div className="flex items-center justify-between gap-1">
                {last7Days.map((day) => (
                  <div
                    key={day.date}
                    className="flex flex-1 flex-col items-center gap-1.5"
                    title={day.date}
                  >
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                      {day.label}
                    </span>
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition-all ${
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
              {computedStreak >= 7 && (
                <div className="mt-3 rounded-lg bg-indigo-50 px-3 py-2 text-center text-xs font-medium text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400">
                  🎉 Streak bonus! +{XP_REWARDS.STREAK_7_DAYS} XP for reaching 7 days
                  {computedStreak >= 30 && ` • +${XP_REWARDS.STREAK_30_DAYS} XP for 30 days`}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ========== LEGEND BUTTON ========== */}
        <div className="mb-4">
          <button
            onClick={() => navigate("/arena")}
            className="group relative w-full overflow-hidden rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 p-1 shadow-xl shadow-amber-200 transition-all duration-300 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-300 dark:border-amber-600 dark:from-amber-900/50 dark:via-yellow-900/50 dark:to-orange-900/50 dark:shadow-amber-900/60">
            <div className="flex items-center justify-center gap-4 rounded-xl bg-white/70 px-6 py-4 backdrop-blur-md dark:bg-black/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-200 to-yellow-300 text-2xl shadow-md dark:from-amber-700 dark:to-yellow-600 dark:shadow-amber-900/50">
                🏆
              </div>
              <div className="text-left">
                <p className="text-lg font-extrabold text-amber-900 dark:text-amber-100">
                  Legend
                </p>
                <p className="text-sm font-medium text-amber-700 dark:text-amber-300">
                  Seizoen levels. Ontgrendel, speel, verdien XP.
                </p>
              </div>
              <svg className="h-5 w-5 text-amber-600 transition-transform group-hover:translate-x-1 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </button>
        </div>

        {/* ========== CONTINUE LEARNING BUTTON ========== */}
        <div className="mb-8">
          <button
            onClick={() => navigate(resume?.route ?? "/grammar")}
            className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-1 shadow-lg shadow-indigo-200 transition hover:shadow-xl hover:shadow-indigo-300 dark:shadow-indigo-900/50 dark:hover:shadow-indigo-800/50">
            <div className="flex items-center justify-center gap-4 rounded-xl bg-white/10 px-8 py-5 backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl">
                {resume?.icon ?? "📚"}
              </div>
              <div className="text-left">
                <p className="text-lg font-bold text-white">
                  {resume?.label ?? t("dashboard.continueLearning")}
                </p>
                <p className="text-sm text-indigo-100">
                  {resume
                    ? "Pick up exactly where you left off"
                    : selectedLang
                    ? `Pick up where you left off in ${t(selectedLang.nameKey)}`
                    : "Start your first lesson"}
                </p>
              </div>
              <svg
                className="h-6 w-6 text-white transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* ========== LANGUAGE SELECTION ========== */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            {t("dashboard.chooseLanguage")}
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {LEARNING_LANGUAGES.map((lang) => {
              const isSelected = user.currentLanguage === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className={`relative flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all hover:shadow-md ${
                    isSelected
                      ? "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200 dark:border-indigo-400 dark:bg-indigo-900/20 dark:ring-indigo-700"
                      : "border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600"
                  }`}
                >
                  <span className="text-3xl">{lang.flag}</span>
                  <span
                    className={`text-sm font-medium ${
                      isSelected
                        ? "text-indigo-700 dark:text-indigo-300"
                        : "text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {t(lang.nameKey)}
                  </span>
                  {isSelected && (
                    <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-xs text-white">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <AdSlot variant="banner" className="mb-6" />

        {/* ========== QUICK-ACTION CARDS ========== */}
        <div className="grid gap-4 sm:grid-cols-2">
          <button onClick={() => navigate("/grammar")} className="rounded-xl border-2 border-slate-200 bg-white p-6 text-left transition hover:border-indigo-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-500">
            <span className="text-4xl">📖</span>
            <h3 className="mt-2 font-semibold text-slate-900 dark:text-white">Grammar Lessons</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Step-by-step grammar guides with exercises.</p>
          </button>
          <button onClick={() => navigate("/mistakes")} className="rounded-xl border-2 border-slate-200 bg-white p-6 text-left transition hover:border-red-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-red-500">
            <span className="text-4xl">🔧</span>
            <h3 className="mt-2 font-semibold text-slate-900 dark:text-white">Mistake Review</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Learn from your mistakes & improve.</p>
          </button>
          <button onClick={() => navigate("/tests")} className="rounded-xl border-2 border-slate-200 bg-white p-6 text-left transition hover:border-amber-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-amber-500">
            <span className="text-4xl">📝</span>
            <h3 className="mt-2 font-semibold text-slate-900 dark:text-white">Tests & Quizzes</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Challenge yourself +{XP_REWARDS.TEST_PASSED} XP on pass.</p>
          </button>
          <button onClick={() => navigate("/arena")} className="rounded-xl border-2 border-slate-200 bg-white p-6 text-left transition hover:border-amber-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-amber-500">
            <span className="text-4xl">🏆</span>
            <h3 className="mt-2 font-semibold text-slate-900 dark:text-white">Legend</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Seizoen levels. Ontgrendel, speel, verdien XP.</p>
          </button>
        </div>

        {/* ========== WORD OF THE DAY ========== */}
        <div className="mt-6">
          <button onClick={() => navigate("/wotd")} className="w-full rounded-xl border-2 border-slate-200 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 text-left transition hover:border-indigo-300 hover:shadow-md dark:border-slate-700 dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-800 dark:hover:border-indigo-500">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🌟</span>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">Word of the Day</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Learn a new word daily. Expand your vocabulary!</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}


