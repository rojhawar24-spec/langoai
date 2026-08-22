// src/pages/ProfilePage.tsx
// ✅ Alle teksten via t() — geen hardcoded Engels meer

import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTranslate } from "@/i18n/I18nContext";
import { xpForNextLevel, xpRequiredForLevel } from "@/utils/xp";
import { computeStreak, getLast7Days, getMonthCalendar, getMonthLeadingBlanks } from "@/utils/streak";
import { useStreakReconciler } from "@/hooks/useStreakReconciler";
import { formatPremiumExpiry, isPremiumActive } from "@/utils/apiConfig";
import { ALL_BADGES, getEarnedBadges } from "@/utils/badges";

const LEARNING_LANGUAGES = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "nl", name: "Dutch",   flag: "🇳🇱" },
  { code: "fr", name: "French",  flag: "🇫🇷" },
  { code: "de", name: "German",  flag: "🇩🇪" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
];

export default function ProfilePage() {
  const { user }  = useAuth();
  const navigate  = useNavigate();
  const { t }     = useTranslate();
  useStreakReconciler();

  if (!user) return null;

  const premiumActive    = isPremiumActive(user);
  // ✅ FIX (consistentie met apiConfig.ts): user.premiumExpiresAt is de bron
  // van waarheid zodra er een user is; alleen zonder user vielen we ooit
  // terug op localStorage. Niet exploiteerbaar zoals 'ie hiervoor stond
  // (premiumActive hierboven gebruikt al de gefixte check), maar wel
  // verwarrend om het patroon dat elders een bug was hier te laten staan.
  const premiumExpiresAt = user.premiumExpiresAt;

  const { streak: currentStreak } = useMemo(() => computeStreak(), [user.streak]);
  const last7Days = useMemo(() => getLast7Days(), [user.streak]);

  const xpNeededForNext = xpForNextLevel(user.level);
  const xpCurrent       = user.totalXP - xpRequiredForLevel(user.level);
  const xpProgress      = Math.min((xpCurrent / xpNeededForNext) * 100, 100);

  const initials    = user.username.slice(0, 2).toUpperCase();
  const memberSince = new Date(user.createdAt).toLocaleDateString(undefined, {
    year: "numeric", month: "long", day: "numeric",
  });

  async function handleShare() {
    const text = t("profile.shareText")
      .replace("{streak}", String(longestStreak))
      .replace("{earned}", String(earnedBadgeIds.size))
      .replace("{total}", String(ALL_BADGES.length));
    if (navigator.share) {
      try {
        await navigator.share({ title: "Lango AI", text });
      } catch {
        // Gebruiker annuleerde de share-sheet — geen actie nodig
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      window.alert(t("profile.copiedConfirm"));
    } catch {
      // Klembord niet beschikbaar — stil falen, geen kritieke actie
    }
  }
  const longestStreak      = Math.max(currentStreak, user.streak ?? 0);
  const activeDaysThisWeek = last7Days.filter((d) => d.active).length;
  const earnedBadgeIds     = useMemo(() => getEarnedBadges(), []);
  const journeyLevels = useMemo(() => {
    const start = Math.max(1, user.level - 2);
    const end = user.level + 5;
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [user.level]);
  const now = new Date();
  const calendarDays = useMemo(
    () => getMonthCalendar(now.getFullYear(), now.getMonth()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [now.getFullYear(), now.getMonth(), longestStreak],
  );
  const calendarLeadingBlanks = getMonthLeadingBlanks(now.getFullYear(), now.getMonth());
  const monthLabel = now.toLocaleDateString(undefined, { month: "long", year: "numeric" });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-8 pb-28 sm:px-6">

        {/* Terug knop */}
        <button type="button" onClick={() => navigate("/dashboard")}
          aria-label={t("profile.backToDashboard")}
          className="mb-6 flex items-center gap-1 text-sm text-slate-500 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t("profile.backToDashboard")}
        </button>

        {/* Avatar + naam */}
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-2xl font-bold text-white shadow-lg">
            {initials}
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {user.username}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {t("profile.member_since")} {memberSince}
            </p>
            {premiumActive && (
              <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                ⭐ {t("profile.premium_member")}
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: t("profile.totalXP"),        value: user.totalXP.toLocaleString(), icon: "⚡" },
            { label: t("profile.levelStat"),       value: String(user.level),            icon: "🏅" },
            { label: t("profile.currentStreak"),   value: `${currentStreak}`,            icon: "🔥" },
            { label: t("profile.thisWeek"),        value: `${activeDaysThisWeek}/7`,     icon: "📅" },
          ].map((s) => (
            <div key={s.label}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <p className="text-2xl">{s.icon}</p>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white">{s.value}</p>
              <p className="text-xs text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>

        {/* XP voortgangsbalk */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-semibold text-slate-900 dark:text-white">
              {t("profile.levelProgress")}
            </p>
            <span className="text-sm text-slate-500">{xpCurrent} / {xpNeededForNext} XP</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
            <div
              className="h-full rounded-full bg-indigo-500 transition-all duration-500"
              style={{ width: `${xpProgress}%` }}
            />
          </div>
        </div>

        {/* Laatste 7 dagen */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <p className="mb-3 font-semibold text-slate-900 dark:text-white">
            {t("profile.thisWeek")}
          </p>
          <div className="flex gap-1.5">
            {last7Days.map((day) => (
              <div key={day.date} className="flex flex-1 flex-col items-center gap-1">
                <div className={`h-8 w-full rounded-lg transition-colors ${
                  day.active
                    ? "bg-indigo-500"
                    : day.isToday
                    ? "border-2 border-indigo-300 bg-slate-100 dark:border-indigo-700 dark:bg-slate-700"
                    : "bg-slate-100 dark:bg-slate-700"
                }`} />
                <span className="text-[9px] text-slate-400">{day.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Taal */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <p className="mb-3 font-semibold text-slate-900 dark:text-white">
            {t("profile.currently_learning")}
          </p>
          <div className="flex flex-wrap gap-2">
            {LEARNING_LANGUAGES.map((lang) => {
              const isActive = user.currentLanguage === lang.code;
              return (
                <span key={lang.code}
                  className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400"
                  }`}
                >
                  {lang.flag} {lang.name}
                  {isActive && <span className="text-xs opacity-75">✓</span>}
                </span>
              );
            })}
          </div>
        </div>

        {/* Badges — Achievement Wall */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                {t("profile.achievements")}
              </p>
              <p className="text-xs text-slate-400">
                {t("profile.achievementsCount")
                  .replace("{earned}", String(earnedBadgeIds.size))
                  .replace("{total}", String(ALL_BADGES.length))}
              </p>
            </div>
            <button
              type="button"
              onClick={handleShare}
              className="rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-700 dark:text-slate-300"
            >
              {t("profile.shareButton")}
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-9">
            {ALL_BADGES.map((badge) => {
              const earned = earnedBadgeIds.has(badge.id);
              return (
                <div key={badge.id}
                  className={`flex flex-col items-center gap-1 rounded-xl border p-3 text-center transition ${
                    earned
                      ? "border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-900/20"
                      : "border-slate-200 bg-slate-50 opacity-40 dark:border-slate-700 dark:bg-slate-800"
                  }`}
                >
                  <span className="text-2xl">{badge.icon}</span>
                  <span className="text-[10px] font-medium text-slate-600 dark:text-slate-300">
                    {t(badge.labelKey)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Journey — level path (Progress Landscape) */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <p className="mb-5 font-semibold text-slate-900 dark:text-white">{t("profile.journeyTitle")}</p>
          <div className="flex items-center overflow-x-auto pb-3">
            {journeyLevels.map((lvl, i) => {
              const isCurrent = lvl === user.level;
              const isPast = lvl < user.level;
              const isMilestone = lvl % 5 === 0;
              return (
                <div key={lvl} className="flex shrink-0 items-center">
                  {i > 0 && (
                    <div
                      className={`h-0.5 w-8 shrink-0 ${
                        isPast || isCurrent ? "bg-indigo-400" : "bg-slate-200 dark:bg-slate-700"
                      }`}
                    />
                  )}
                  <div className="relative flex shrink-0 flex-col items-center">
                    {isMilestone && (
                      <span
                        className="absolute -top-3 text-xs"
                        aria-label={t("profile.journeyMilestone")}
                      >
                        ⭐
                      </span>
                    )}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${
                        isCurrent
                          ? "scale-110 bg-indigo-600 text-white shadow-lg shadow-indigo-300 dark:shadow-indigo-900/50"
                          : isPast
                            ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300"
                            : "bg-slate-100 text-slate-400 dark:bg-slate-700 dark:text-slate-500"
                      }`}
                    >
                      {lvl}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Streak Calendar */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <p className="mb-1 font-semibold text-slate-900 dark:text-white">
            {t("profile.streakCalendar")}
          </p>
          <p className="mb-4 text-xs text-slate-400 capitalize">{monthLabel}</p>
          <div className="grid grid-cols-7 gap-1.5">
            {Array.from({ length: calendarLeadingBlanks }).map((_, i) => (
              <div key={`blank-${i}`} />
            ))}
            {calendarDays.map((d) => (
              <div
                key={d.date}
                title={d.date}
                className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold ${
                  d.isFuture
                    ? "text-slate-300 dark:text-slate-600"
                    : d.active
                      ? "bg-indigo-500 text-white"
                      : "bg-slate-100 text-slate-400 dark:bg-slate-700 dark:text-slate-500"
                } ${d.isToday ? "ring-2 ring-indigo-400 ring-offset-1 dark:ring-offset-slate-800" : ""}`}
              >
                {d.day}
              </div>
            ))}
          </div>
        </div>

        {/* Premium status */}
        {premiumActive && premiumExpiresAt && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
            <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
              ⭐ {t("profile.aiAccessActive").replace("{date}", formatPremiumExpiry(premiumExpiresAt))}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
