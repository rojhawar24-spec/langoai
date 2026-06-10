import { useMemo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Wrench, FileText, Trophy, Star } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useTranslate } from "@/i18n/I18nContext";
import { getDailyGoalProgress } from "@/utils/progress";
import { xpForNextLevel, xpRequiredForLevel, XP_REWARDS } from "@/utils/xp";
import { computeStreak, getLast7Days } from "@/utils/streak";
import { useStreakReconciler } from "@/hooks/useStreakReconciler";
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

  useStreakReconciler();
  const { newBadge, checkBadges, clearNewBadge } = useBadgeChecker();

  const [langChosen, setLangChosen] = useState(false);

  if (!user) return null;

  const navigate = useNavigate();
  const dailyGoal = useMemo(() => getDailyGoalProgress(), []);

  const xpNeededForNext = xpForNextLevel(user.level);
  const xpCurrent = user.totalXP - xpRequiredForLevel(user.level);
  const xpProgress = Math.min((xpCurrent / xpNeededForNext) * 100, 100);
  const xpNeeded = Math.max(xpNeededForNext - xpCurrent, 0);

  const selectedLang = LEARNING_LANGUAGES.find((l) => l.code === user.currentLanguage);

  const { streak: computedStreak, todayActive: hasActivityToday } =
    useMemo(() => computeStreak(), [user?.streak]);
  const last7Days = useMemo(() => getLast7Days(), [user?.streak]);

  useEffect(() => {
    checkBadges({ totalXP: user.totalXP, streak: computedStreak });
  }, [user.totalXP, computedStreak]);

  function selectLanguage(code: string) {
    updateProfile({ currentLanguage: code, interfaceLanguage: code });
    setLangChosen(true);
  }

  // ══════════════════════════════════════════════════
  // STAP 1 — Taal kiezen: kleine pagina die eerst opent
  // ══════════════════════════════════════════════════
  if (!langChosen) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-[#0b0f1a] transition-colors duration-300">
        {/* Light background */}
        <div className="pointer-events-none fixed inset-0 z-0 dark:hidden">
          <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-indigo-100/60 blur-[100px]" />
          <div className="absolute top-1/2 -right-32 h-[400px] w-[400px] rounded-full bg-purple-100/50 blur-[80px]" />
        </div>
        {/* Dark background */}
        <div className="pointer-events-none fixed inset-0 z-0 hidden dark:block">
          <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse" />
          <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[100px] animate-pulse [animation-delay:2s]" />
        </div>

        {/* Centered card */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
          <div className="w-full max-w-sm">
            {/* Card */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-indigo-200/60 dark:bg-[#111528] dark:shadow-indigo-900/30 dark:ring-1 dark:ring-white/10">
              {/* Top accent */}
              <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500" />

              <div className="px-8 py-8">
                <div className="mb-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-3xl shadow-lg shadow-indigo-500/30">
                    🌍
                  </div>
                  <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                    Welkom, {user.username}!
                  </h1>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Welke taal wil je leren? Alle lessen, toetsen en woorden worden automatisch in jouw taal gezet.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5">
                  {LEARNING_LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => selectLanguage(lang.code)}
                      className="group flex items-center gap-4 rounded-2xl border-2 border-slate-200 bg-slate-50 px-5 py-4 text-left transition-all duration-150 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-white hover:shadow-md dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-indigo-500/50 dark:hover:bg-white/[0.07]"
                    >
                      <span className="text-3xl drop-shadow">{lang.flag}</span>
                      <span className="flex-1 text-base font-black text-slate-800 dark:text-white">
                        {t(lang.nameKey)}
                      </span>
                      <svg className="h-5 w-5 text-slate-300 transition-transform duration-150 group-hover:translate-x-1 group-hover:text-indigo-400 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════════════════
  // STAP 2 — Volledig dashboard (taal is gekozen)
  // ══════════════════════════════════════════════════
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-[#0b0f1a] transition-colors duration-300">

      {/* ── Light mode: soft gradient wash ── */}
      <div className="pointer-events-none fixed inset-0 z-0 dark:hidden">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-indigo-100/60 blur-[100px]" />
        <div className="absolute top-1/2 -right-32 h-[400px] w-[400px] rounded-full bg-purple-100/50 blur-[80px]" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-blue-100/40 blur-[60px]" />
      </div>

      {/* ── Dark mode: animated mesh ── */}
      <div className="pointer-events-none fixed inset-0 z-0 hidden dark:block">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[100px] animate-pulse [animation-delay:2s]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[80px] animate-pulse [animation-delay:4s]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {newBadge && <BadgeNotification badge={newBadge} onDone={clearNewBadge} />}

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-10 sm:px-6">

        {/* ========== WELCOME SECTION ========== */}
        <div className="mb-10">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-400">
            Dashboard
          </p>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t("dashboard.welcome")}{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
              {user.username}
            </span>
            ! 👋
          </h1>
          {selectedLang && (
            <p className="mt-3 flex items-center gap-3 text-base text-slate-500 dark:text-slate-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200 text-lg dark:bg-white/5 dark:ring-white/10">
                {selectedLang.flag}
              </span>
              {t("dashboard.learningLanguage")}{" "}
              <strong className="font-semibold text-slate-800 dark:text-white">{t(selectedLang.nameKey)}</strong>
              <button
                onClick={() => setLangChosen(false)}
                className="ml-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors dark:bg-white/[0.06] dark:text-slate-400 dark:hover:bg-indigo-500/20 dark:hover:text-indigo-300"
              >
                Wijzigen
              </button>
            </p>
          )}
        </div>

        {/* ========== STATS CARDS ========== */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            {
              icon: "⭐",
              label: t("dashboard.level"),
              value: String(user.level),
              lightBg: "bg-amber-50 border-amber-200/80",
              darkBg: "dark:bg-white/[0.03] dark:border-white/[0.06]",
              lightOrb: "bg-amber-100",
              darkOrb: "dark:bg-amber-500/10",
              dot: "bg-amber-400",
              lightLabel: "text-amber-600",
              darkLabel: "dark:text-amber-400",
              hoverLight: "hover:shadow-amber-100",
              hoverDark: "dark:hover:shadow-amber-500/10",
            },
            {
              icon: "⚡",
              label: t("dashboard.totalXP"),
              value: user.totalXP.toLocaleString(),
              lightBg: "bg-indigo-50 border-indigo-200/80",
              darkBg: "dark:bg-white/[0.03] dark:border-white/[0.06]",
              lightOrb: "bg-indigo-100",
              darkOrb: "dark:bg-indigo-500/10",
              dot: "bg-indigo-500",
              lightLabel: "text-indigo-600",
              darkLabel: "dark:text-indigo-400",
              hoverLight: "hover:shadow-indigo-100",
              hoverDark: "dark:hover:shadow-indigo-500/10",
            },
            {
              icon: hasActivityToday ? "🔥" : "💤",
              label: t("dashboard.streak"),
              value: `${computedStreak} ${t("dashboard.days")}`,
              lightBg: hasActivityToday ? "bg-orange-50 border-orange-200/80" : "bg-slate-50 border-slate-200",
              darkBg: "dark:bg-white/[0.03] dark:border-white/[0.06]",
              lightOrb: hasActivityToday ? "bg-orange-100" : "bg-slate-100",
              darkOrb: hasActivityToday ? "dark:bg-orange-500/10" : "dark:bg-slate-700/30",
              dot: hasActivityToday ? "bg-orange-400" : "bg-slate-400",
              lightLabel: hasActivityToday ? "text-orange-600" : "text-slate-500",
              darkLabel: hasActivityToday ? "dark:text-orange-400" : "dark:text-slate-500",
              hoverLight: "hover:shadow-orange-100",
              hoverDark: "dark:hover:shadow-orange-500/10",
            },
            {
              icon: selectedLang ? selectedLang.flag : "🌍",
              label: t("dashboard.language"),
              value: selectedLang ? t(selectedLang.nameKey) : t("dashboard.none"),
              lightBg: "bg-emerald-50 border-emerald-200/80",
              darkBg: "dark:bg-white/[0.03] dark:border-white/[0.06]",
              lightOrb: "bg-emerald-100",
              darkOrb: "dark:bg-emerald-500/10",
              dot: "bg-emerald-500",
              lightLabel: "text-emerald-600",
              darkLabel: "dark:text-emerald-400",
              hoverLight: "hover:shadow-emerald-100",
              hoverDark: "dark:hover:shadow-emerald-500/10",
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${card.lightBg} ${card.darkBg} ${card.hoverLight} ${card.hoverDark}`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20" />
              <div className={`pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full blur-xl opacity-60 ${card.lightOrb} ${card.darkOrb}`} />
              <div className="relative">
                <div className="mb-3 text-2xl">{card.icon}</div>
                <p className={`text-[11px] font-semibold uppercase tracking-widest ${card.lightLabel} ${card.darkLabel}`}>
                  {card.label}
                </p>
                <p className="mt-0.5 text-xl font-black text-slate-900 dark:text-white">{card.value}</p>
                <div className={`mt-3 h-1 w-8 rounded-full ${card.dot}`} />
              </div>
            </div>
          ))}
        </div>

        {/* ========== TWO-COLUMN LAYOUT ========== */}
        <div className="mb-8 grid gap-4 xl:grid-cols-2">

          {/* ----- PROGRESS CARD ----- */}
          <div className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-sm dark:border-white/[0.06] dark:bg-white/[0.03] dark:shadow-none dark:ring-1 dark:ring-indigo-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 to-transparent dark:from-indigo-500/8 dark:to-transparent" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300/60 to-transparent dark:via-indigo-400/40" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-100 blur-2xl dark:bg-indigo-500/10" />
            <div className="relative p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
                {t("dashboard.level")} {user.level}
              </p>
              <p className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
                {t("dashboard.xpProgress")}{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  {user.level + 1}
                </span>
              </p>
              <div className="mt-5">
                <div className="mb-2.5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {xpCurrent.toLocaleString()}
                    <span className="font-normal text-slate-400 dark:text-slate-500"> / {xpNeededForNext.toLocaleString()} {t("topbar.xp")}</span>
                  </span>
                  <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-bold text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300">
                    {Math.round(xpProgress)}%
                  </span>
                </div>
                <div className="relative h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-white/5 ring-1 ring-slate-200 dark:ring-white/10">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${xpProgress}%`,
                      background: "linear-gradient(90deg, #6366f1, #a855f7)",
                      boxShadow: "0 0 12px rgba(99,102,241,0.5)",
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-transparent" />
                  </div>
                </div>
              </div>
              {xpNeeded > 0 ? (
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-500">
                  {t("dashboard.needMoreXP")}{" "}
                  <span className="font-bold text-slate-700 dark:text-slate-200">{xpNeeded.toLocaleString()}</span>{" "}
                  {t("dashboard.moreXP")}{" "}
                  <span className="font-bold text-slate-700 dark:text-slate-200">{user.level + 1}</span>.
                </p>
              ) : (
                <p className="mt-4 text-sm font-bold text-indigo-600 dark:text-indigo-400">
                  🎉 You're ready to level up!
                </p>
              )}
            </div>
          </div>

          {/* ----- DAILY GOAL + STREAK ----- */}
          <div className="relative overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm dark:border-white/[0.06] dark:bg-white/[0.03] dark:shadow-none dark:ring-1 dark:ring-orange-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 to-transparent dark:from-orange-500/6 dark:to-transparent" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/60 to-transparent dark:via-orange-400/30" />
            <div className="relative p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 dark:text-orange-400 mb-5">
                {t("dashboard.dailyGoal")}
              </p>
              <div className="flex items-center gap-6">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 rounded-full blur-xl opacity-30 bg-indigo-300 dark:opacity-40 dark:bg-indigo-600" />
                  <svg className="relative h-28 w-28 -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="10"
                      className="text-slate-100 dark:text-white/5" />
                    <circle
                      cx="60" cy="60" r="52" fill="none" strokeWidth="10" strokeLinecap="round"
                      style={{
                        stroke: "url(#ringGrad)",
                        strokeDasharray: `${2 * Math.PI * 52}`,
                        strokeDashoffset: `${2 * Math.PI * 52 * (1 - dailyGoal.percent / 100)}`,
                        transition: "stroke-dashoffset 0.8s ease-out",
                        filter: "drop-shadow(0 0 5px rgba(99,102,241,0.5))",
                      }}
                    />
                    <defs>
                      <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-slate-900 dark:text-white">{dailyGoal.current}</span>
                    <span className="text-xs text-slate-400">/ {dailyGoal.goal}</span>
                  </div>
                </div>
                <div className="flex-1">
                  {dailyGoal.percent >= 100 ? (
                    <p className="text-base font-bold text-emerald-600 dark:text-emerald-400">{t("dashboard.dailyGoalReached")}</p>
                  ) : dailyGoal.current === 0 ? (
                    <p className="text-sm text-slate-500 dark:text-slate-500">{t("dashboard.dailyGoalEmpty")}</p>
                  ) : (
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {dailyGoal.current} / {dailyGoal.goal} {t("topbar.xp")} today
                      </p>
                      <p className="mt-1 text-xs text-slate-400 dark:text-slate-600">
                        {dailyGoal.goal - dailyGoal.current} {t("topbar.xp")} to go
                      </p>
                    </div>
                  )}
                  <div className="mt-4 border-t border-slate-100 pt-4 dark:border-white/5">
                    {computedStreak > 0 ? (
                      <div className="flex items-center gap-2">
                        <span className={`text-2xl ${hasActivityToday ? "animate-pulse" : "opacity-30"}`}>🔥</span>
                        <div>
                          <p className="text-sm font-bold text-slate-800 dark:text-white">
                            {computedStreak} {t("dashboard.streakActive")}
                          </p>
                          {!hasActivityToday && (
                            <p className="text-xs text-orange-500 dark:text-orange-400">{t("dashboard.streakAtRisk")}</p>
                          )}
                          {computedStreak >= 30 && (
                            <span className="mt-1 inline-block rounded-full bg-purple-100 px-2 py-0.5 text-xs font-bold text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 dark:ring-1 dark:ring-purple-500/30">
                              🏆 30-day champion
                            </span>
                          )}
                          {computedStreak >= 7 && computedStreak < 30 && (
                            <span className="mt-1 inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 dark:ring-1 dark:ring-blue-500/30">
                              ⭐ 7-day streak
                            </span>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-2xl opacity-20">🔥</span>
                        <p className="text-sm text-slate-500 dark:text-slate-600">{t("dashboard.emptyStreak")}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-5 border-t border-slate-100 pt-4 dark:border-white/5">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
                  Last 7 days
                </p>
                <div className="flex items-center justify-between gap-1">
                  {last7Days.map((day) => (
                    <div key={day.date} className="flex flex-1 flex-col items-center gap-1.5" title={day.date}>
                      <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-600">{day.label}</span>
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition-all duration-200 ${
                          day.active
                            ? "bg-orange-100 text-orange-500 ring-2 ring-orange-300 dark:bg-orange-500/20 dark:text-orange-300 dark:ring-1 dark:ring-orange-500/40 dark:shadow-[0_0_10px_rgba(249,115,22,0.25)]"
                            : "bg-slate-100 text-slate-300 dark:bg-white/[0.03] dark:text-slate-700 dark:ring-1 dark:ring-white/5"
                        } ${day.isToday ? "ring-slate-400 dark:ring-slate-500" : ""}`}
                      >
                        {day.active ? "🔥" : "·"}
                      </div>
                    </div>
                  ))}
                </div>
                {computedStreak >= 7 && (
                  <div className="mt-3 rounded-xl bg-indigo-50 px-3 py-2 text-center text-xs font-bold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-1 dark:ring-indigo-500/20">
                    🎉 Streak bonus! +{XP_REWARDS.STREAK_7_DAYS} XP for reaching 7 days
                    {computedStreak >= 30 && ` • +${XP_REWARDS.STREAK_30_DAYS} XP for 30 days`}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ========== LEGEND ARENA — BELANGRIJKSTE BUTTON ========== */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/arena")}
            className="group relative w-full overflow-hidden rounded-3xl p-px shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-1 active:translate-y-0 dark:shadow-indigo-900/20 dark:hover:shadow-indigo-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 opacity-90 transition-opacity group-hover:opacity-100" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            <div className="relative flex items-center gap-5 rounded-3xl bg-gradient-to-r from-slate-900/95 to-slate-900/80 px-6 py-6 sm:px-8 sm:py-7 dark:from-slate-950/95 dark:to-slate-950/80">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-3xl shadow-lg shadow-indigo-500/30 ring-1 ring-white/20">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="rounded-full bg-indigo-500/20 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-indigo-300 ring-1 ring-indigo-500/30">
                    Main Event
                  </span>
                </div>
                <p className="text-xl font-black tracking-tight text-white sm:text-2xl">
                  Legend Arena
                </p>
                <p className="mt-1 text-sm font-medium text-slate-300 sm:text-base">
                  Seizoen levels. Ontgrendel, speel, verdien XP.
                </p>
              </div>
              <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-transform duration-300 group-hover:translate-x-2 group-hover:bg-white/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </button>
        </div>

        {/* ========== LANGUAGE SELECTION ========== */}
        <div className="mb-8">
          <h2 className="mb-4 text-base font-black tracking-tight text-slate-900 dark:text-white">
            {t("dashboard.chooseLanguage")}
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {LEARNING_LANGUAGES.map((lang) => {
              const isSelected = user.currentLanguage === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className={`relative flex flex-col items-center gap-2 rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-md ${
                    isSelected
                      ? "border-indigo-400 bg-indigo-50 ring-2 ring-indigo-200 shadow-md dark:border-indigo-500/60 dark:bg-indigo-500/10 dark:ring-1 dark:ring-indigo-500/30 dark:shadow-indigo-500/20"
                      : "border-slate-200 bg-white hover:border-slate-300 dark:border-white/[0.06] dark:bg-white/[0.03] dark:hover:border-white/10 dark:hover:bg-white/[0.06]"
                  }`}
                >
                  <span className="text-3xl drop-shadow-sm">{lang.flag}</span>
                  <span className={`text-sm font-semibold ${isSelected ? "text-indigo-700 dark:text-indigo-300" : "text-slate-600 dark:text-slate-400"}`}>
                    {t(lang.nameKey)}
                  </span>
                  {isSelected && (
                    <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white shadow-md shadow-indigo-500/40">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <AdSlot variant="banner" className="mb-8" />

        {/* ========== QUICK-ACTION GRID ========== */}
        <div className="mb-6">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            {t("dashboard.quickActions") === "dashboard.quickActions" ? "Wat wil je doen?" : t("dashboard.quickActions")}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* Lessen — alle 10 categorieën */}
            <button
              onClick={() => navigate("/grammar")}
              className="group relative flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-200 dark:border-white/5 dark:bg-white/[0.03] dark:hover:border-indigo-500/30 dark:hover:bg-white/[0.06]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 transition-colors group-hover:bg-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-indigo-500/20 dark:group-hover:bg-indigo-500/20">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <p className="text-base font-bold text-slate-900 dark:text-white">Lessen</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Grammatica, Vocabulaire, Uitspraak, Lezen, Schrijven en meer.
                </p>
              </div>
            </button>

            {/* Fout Herstel */}
            <button
              onClick={() => navigate("/mistakes")}
              className="group relative flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-rose-200 dark:border-white/5 dark:bg-white/[0.03] dark:hover:border-rose-500/30 dark:hover:bg-white/[0.06]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600 ring-1 ring-rose-100 transition-colors group-hover:bg-rose-100 dark:bg-rose-500/10 dark:text-rose-400 dark:ring-rose-500/20 dark:group-hover:bg-rose-500/20">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <p className="text-base font-bold text-slate-900 dark:text-white">Fout Herstel</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Leer van je fouten en verbeter jezelf.</p>
              </div>
            </button>

            {/* Toets jezelf */}
            <button
              onClick={() => navigate("/tests")}
              className="group relative flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-200 dark:border-white/5 dark:bg-white/[0.03] dark:hover:border-emerald-500/30 dark:hover:bg-white/[0.06]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 transition-colors group-hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20 dark:group-hover:bg-emerald-500/20">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="text-base font-bold text-slate-900 dark:text-white">Toets jezelf</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Test je kennis. +{XP_REWARDS.TEST_PASSED} XP bij slagen.</p>
              </div>
            </button>

            {/* Woord van de Dag */}
            <button
              onClick={() => navigate("/wotd")}
              className="group relative flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-amber-200 dark:border-white/5 dark:bg-white/[0.03] dark:hover:border-amber-500/30 dark:hover:bg-white/[0.06]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 ring-1 ring-amber-100 transition-colors group-hover:bg-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-500/20 dark:group-hover:bg-amber-500/20">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <p className="text-base font-bold text-slate-900 dark:text-white">Woord van de Dag</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Leer elke dag 1 nieuw woord. Verdien XP!</p>
              </div>
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}