import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  Flame,
  FileText,
  Gift as GiftIcon,
  Shield,
  Star,
  Trophy,
  Wrench,
  Zap,
} from "lucide-react";

import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { useTranslate } from "@/i18n/I18nContext";
import type { TranslationKey } from "@/i18n/translations";

import { getDailyGoalProgress } from "@/utils/progress";
import {
  computeStreak,
  getLast7Days,
  getStreakWeather,
} from "@/utils/streak";
import {
  xpForNextLevel,
  xpRequiredForLevel,
  XP_REWARDS,
} from "@/utils/xp";

import { useBadgeChecker } from "@/hooks/useBadgeChecker";
import { useStreakReconciler } from "@/hooks/useStreakReconciler";

import BadgeNotification from "@/components/BadgeNotification";
import AdSlot from "@/components/AdSlot";

/* =========================================================
   CONSTANTS
========================================================= */

const DAILY_CHEST_KEY = "langlearn_daily_chest_date";
const DAILY_XP_REWARD = XP_REWARDS.DAILY_GOAL_BONUS;
const STREAK_SHIELD_COST = 15;

const WEATHER_META: Record<
  string,
  { emoji: string; key: TranslationKey }
> = {
  storm: {
    emoji: "⛈️",
    key: "dashboard.weatherStorm",
  },
  cloudy: {
    emoji: "☁️",
    key: "dashboard.weatherCloudy",
  },
  partlySunny: {
    emoji: "🌤️",
    key: "dashboard.weatherPartlySunny",
  },
  sunny: {
    emoji: "☀️",
    key: "dashboard.weatherSunny",
  },
  rainbow: {
    emoji: "🌈",
    key: "dashboard.weatherRainbow",
  },
};

/* =========================================================
   MASCOT
========================================================= */

type MascotMood = "greeting" | "happy" | "supportive";

const MASCOT_META: Record<
  MascotMood,
  { emoji: string; key: TranslationKey }
> = {
  greeting: {
    emoji: "🤖",
    key: "mascot.greeting",
  },
  happy: {
    emoji: "🤖✨",
    key: "mascot.happy",
  },
  supportive: {
    emoji: "🤖💪",
    key: "mascot.supportive",
  },
};

const MOOD_STYLE: Record<
  MascotMood,
  { rgb: string; smile: string }
> = {
  greeting: {
    rgb: "125,211,252",
    smile: "M83,158 Q110,172 137,158",
  },
  happy: {
    rgb: "110,231,183",
    smile: "M76,153 Q110,182 144,153",
  },
  supportive: {
    rgb: "252,211,142",
    smile: "M90,161 Q110,167 130,161",
  },
};

function DashboardRobotMascot({
  message,
  mood = "greeting",
}: {
  message: string;
  mood?: MascotMood;
}) {
  const c = MOOD_STYLE[mood];

  return (
    <section
      className="
        relative mb-8 overflow-hidden rounded-[30px]
        border border-slate-200/80 bg-white
        shadow-[0_18px_55px_-28px_rgba(15,23,42,.35)]
        dark:border-white/[0.07]
        dark:bg-white/[0.035]
        dark:shadow-[0_24px_70px_-35px_rgba(0,0,0,.8)]
      "
      aria-label="AI learning mascot"
    >
      <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-indigo-300/15 blur-3xl dark:bg-indigo-500/10" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-cyan-300/15 blur-3xl dark:bg-cyan-500/10" />

      <div className="relative grid items-center gap-5 px-5 py-5 sm:grid-cols-[175px_minmax(0,1fr)] sm:px-7 sm:py-6">
        {/* ROBOT */}
        <div
          className="relative mx-auto h-[200px] w-[175px] shrink-0"
          aria-hidden="true"
        >
          <div
            className="pointer-events-none absolute left-1/2 top-[34%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, rgba(${c.rgb},.28), transparent 72%)`,
            }}
          />

          <style>{`
            @keyframes mascotFloat {
              0%, 100% {
                transform: translateY(0);
              }

              50% {
                transform: translateY(-5px);
              }
            }

            @keyframes mascotBlink {
              0%, 92%, 100% {
                transform: scaleY(1);
              }

              94%, 97% {
                transform: scaleY(.12);
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .mascot-float,
              .mascot-eyes {
                animation: none !important;
              }
            }
          `}</style>

          <svg
            viewBox="0 0 220 240"
            className="relative h-full w-full"
            role="img"
            aria-label="AI learning companion"
          >
            <defs>
              <linearGradient
                id="mHead"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#f3f5f8" />
                <stop offset="100%" stopColor="#d4dae2" />
              </linearGradient>

              <linearGradient
                id="mBody"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="65%" stopColor="#e9ecf1" />
                <stop offset="100%" stopColor="#c3cad4" />
              </linearGradient>

              <linearGradient
                id="mLimb"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#c3cad4" />
              </linearGradient>

              <linearGradient
                id="mDark"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>

              <radialGradient
                id="mVisor"
                cx="42%"
                cy="30%"
                r="80%"
              >
                <stop offset="0%" stopColor="#20293b" />
                <stop offset="55%" stopColor="#0f1626" />
                <stop offset="100%" stopColor="#020617" />
              </radialGradient>

              <clipPath id="mVisorClip">
                <rect
                  x="52"
                  y="82"
                  width="116"
                  height="88"
                  rx="42"
                />
              </clipPath>

              <filter
                id="mSoftGlow"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur
                  stdDeviation="2.2"
                  result="b"
                />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g
              className="mascot-float"
              style={{
                animation:
                  "mascotFloat 4.2s ease-in-out infinite",
                transformOrigin: "110px 120px",
              }}
            >
              {/* SHADOW */}
              <ellipse
                cx="110"
                cy="230"
                rx="48"
                ry="7"
                fill="rgba(15,23,42,.14)"
              />

              {/* LEGS */}
              <rect
                x="82"
                y="196"
                width="19"
                height="28"
                rx="9.5"
                fill="url(#mLimb)"
                stroke="#c3cad4"
              />

              <rect
                x="119"
                y="196"
                width="19"
                height="28"
                rx="9.5"
                fill="url(#mLimb)"
                stroke="#c3cad4"
              />

              <rect
                x="79"
                y="218"
                width="25"
                height="12"
                rx="6"
                fill="url(#mDark)"
              />

              <rect
                x="116"
                y="218"
                width="25"
                height="12"
                rx="6"
                fill="url(#mDark)"
              />

              {/* BODY */}
              <rect
                x="62"
                y="148"
                width="96"
                height="56"
                rx="26"
                fill="url(#mBody)"
                stroke="#d4dae2"
                strokeWidth="2"
              />

              {/* CONTROL WINDOW */}
              <rect
                x="99"
                y="156"
                width="22"
                height="16"
                rx="4"
                fill="url(#mDark)"
              />

              <rect
                x="103"
                y="160"
                width="3.5"
                height="3.5"
                rx="1"
                fill="#5eead4"
                opacity="0.9"
              />

              <rect
                x="109"
                y="160"
                width="3.5"
                height="3.5"
                rx="1"
                fill="#fca5a5"
                opacity="0.9"
              />

              <rect
                x="103"
                y="166"
                width="3.5"
                height="3.5"
                rx="1"
                fill="#93c5fd"
                opacity="0.9"
              />

              <rect
                x="109"
                y="166"
                width="3.5"
                height="3.5"
                rx="1"
                fill="#fcd34d"
                opacity="0.85"
              />

              {/* NECK */}
              <rect
                x="95"
                y="120"
                width="30"
                height="32"
                rx="10"
                fill="url(#mDark)"
              />

              {/* LEFT ARM */}
              <g transform="rotate(14 60 162)">
                <rect
                  x="24"
                  y="153"
                  width="42"
                  height="18"
                  rx="9"
                  fill="url(#mLimb)"
                  stroke="#c3cad4"
                />
              </g>

              <circle
                cx="26"
                cy="162"
                r="10"
                fill="url(#mDark)"
              />

              {/* RIGHT ARM */}
              <g transform="rotate(-14 160 162)">
                <rect
                  x="154"
                  y="153"
                  width="42"
                  height="18"
                  rx="9"
                  fill="url(#mLimb)"
                  stroke="#c3cad4"
                />
              </g>

              <circle
                cx="194"
                cy="162"
                r="10"
                fill="url(#mDark)"
              />

              {/* EARS */}
              <circle
                cx="38"
                cy="98"
                r="18"
                fill="url(#mLimb)"
                stroke="#c3cad4"
                strokeWidth="2"
              />

              <circle
                cx="38"
                cy="98"
                r="11"
                fill="url(#mDark)"
              />

              <circle
                cx="33"
                cy="93"
                r="2.4"
                fill="#ffffff"
                opacity="0.35"
              />

              <circle
                cx="182"
                cy="98"
                r="18"
                fill="url(#mLimb)"
                stroke="#c3cad4"
                strokeWidth="2"
              />

              <circle
                cx="182"
                cy="98"
                r="11"
                fill="url(#mDark)"
              />

              <circle
                cx="177"
                cy="93"
                r="2.4"
                fill="#ffffff"
                opacity="0.35"
              />

              {/* HEAD */}
              <rect
                x="30"
                y="24"
                width="160"
                height="150"
                rx="70"
                fill="url(#mHead)"
                stroke="#d4dae2"
                strokeWidth="2"
              />

              {/* HIGHLIGHT */}
              <ellipse
                cx="70"
                cy="55"
                rx="38"
                ry="18"
                fill="#ffffff"
                opacity="0.5"
                filter="url(#mSoftGlow)"
              />

              <line
                x1="84"
                y1="36"
                x2="136"
                y2="36"
                stroke="#d4dae2"
                strokeWidth="1.5"
              />

              <circle
                cx="80"
                cy="36"
                r="1.6"
                fill="#b7c0cc"
              />

              <circle
                cx="140"
                cy="36"
                r="1.6"
                fill="#b7c0cc"
              />

              {/* VISOR */}
              <rect
                x="52"
                y="82"
                width="116"
                height="88"
                rx="42"
                fill="url(#mVisor)"
              />

              <g clipPath="url(#mVisorClip)">
                <ellipse
                  cx="80"
                  cy="98"
                  rx="26"
                  ry="13"
                  fill="#ffffff"
                  opacity="0.06"
                />

                {/* EYES */}
                <g
                  className="mascot-eyes"
                  style={{
                    animation:
                      "mascotBlink 6s ease-in-out infinite",
                    transformOrigin:
                      "110px 118px",
                    transformBox:
                      "fill-box",
                  }}
                >
                  <rect
                    x="86"
                    y="108"
                    width="15"
                    height="20"
                    rx="7.5"
                    fill={`rgb(${c.rgb})`}
                    filter="url(#mSoftGlow)"
                  />

                  <rect
                    x="119"
                    y="108"
                    width="15"
                    height="20"
                    rx="7.5"
                    fill={`rgb(${c.rgb})`}
                    filter="url(#mSoftGlow)"
                  />
                </g>

                {/* SMILE */}
                <path
                  d={c.smile}
                  fill="none"
                  stroke={`rgb(${c.rgb})`}
                  strokeWidth="3.4"
                  strokeLinecap="round"
                  filter="url(#mSoftGlow)"
                />
              </g>
            </g>
          </svg>
        </div>

        {/* MESSAGE */}
        <div className="min-w-0 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            AI Learning Companion
          </div>

          <p className="mt-3 text-lg font-black tracking-tight text-slate-900 dark:text-white sm:text-xl">
            {message}
          </p>

          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Your learning companion is here to keep you focused and moving forward.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-600 dark:bg-white/[0.06] dark:text-slate-300">
              ⚡ Smart feedback
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-600 dark:bg-white/[0.06] dark:text-slate-300">
              🦾 Always ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   LEARNING LANGUAGES
========================================================= */

const LEARNING_LANGUAGES = [
  {
    code: "en",
    nameKey: "lang.en" as const,
    flag: "🇬🇧",
  },
  {
    code: "nl",
    nameKey: "lang.nl" as const,
    flag: "🇳🇱",
  },
  {
    code: "fr",
    nameKey: "lang.fr" as const,
    flag: "🇫🇷",
  },
  {
    code: "de",
    nameKey: "lang.de" as const,
    flag: "🇩🇪",
  },
  {
    code: "es",
    nameKey: "lang.es" as const,
    flag: "🇪🇸",
  },
];

/* =========================================================
   LEARNING CARD
========================================================= */

function LearningCard({
  title,
  subtitle,
  icon,
  tone,
  onClick,
  featured = false,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  tone: "indigo" | "emerald" | "rose" | "amber";
  onClick: () => void;
  featured?: boolean;
}) {
  const tones = {
    indigo: {
      card: "border-indigo-200 bg-indigo-50/80 dark:border-indigo-500/25 dark:bg-indigo-500/10",
      icon: "bg-indigo-500 text-white shadow-indigo-500/25",
      hover:
        "hover:border-indigo-300 hover:shadow-indigo-100/60 dark:hover:border-indigo-500/50",
      arrow:
        "text-indigo-300 group-hover:text-indigo-500 dark:text-indigo-500",
    },
    emerald: {
      card: "border-emerald-200 bg-emerald-50/80 dark:border-emerald-500/25 dark:bg-emerald-500/10",
      icon: "bg-emerald-500 text-white shadow-emerald-500/25",
      hover:
        "hover:border-emerald-300 hover:shadow-emerald-100/60 dark:hover:border-emerald-500/50",
      arrow:
        "text-emerald-300 group-hover:text-emerald-500 dark:text-emerald-500",
    },
    rose: {
      card: "border-rose-200 bg-rose-50/80 dark:border-rose-500/25 dark:bg-rose-500/10",
      icon: "bg-rose-500 text-white shadow-rose-500/25",
      hover:
        "hover:border-rose-300 hover:shadow-rose-100/60 dark:hover:border-rose-500/50",
      arrow:
        "text-rose-300 group-hover:text-rose-500 dark:text-rose-500",
    },
    amber: {
      card: "border-amber-200 bg-amber-50/80 dark:border-amber-500/25 dark:bg-amber-500/10",
      icon: "bg-amber-500 text-white shadow-amber-500/25",
      hover:
        "hover:border-amber-300 hover:shadow-amber-100/60 dark:hover:border-amber-500/50",
      arrow:
        "text-amber-300 group-hover:text-amber-500 dark:text-amber-500",
    },
  };

  const current = tones[tone];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex min-h-[190px] flex-col gap-5 overflow-hidden rounded-2xl border p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl dark:hover:bg-white/[0.05] ${current.card} ${current.hover} ${
        featured
          ? "ring-2 ring-indigo-200/70 dark:ring-indigo-500/20"
          : ""
      }`}
    >
      {featured && (
        <div className="absolute right-3 top-3 rounded-full bg-indigo-500/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">
          Primary
        </div>
      )}

      <div className="flex items-center justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-md ${current.icon}`}
        >
          {icon}
        </div>

        <ChevronRight
          className={`h-4 w-4 transition-all duration-200 group-hover:translate-x-0.5 ${current.arrow}`}
        />
      </div>

      <div className="mt-auto">
        <p className="text-base font-black text-slate-900 dark:text-white">
          {title}
        </p>

        <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      </div>
    </button>
  );
}

/* =========================================================
   MAIN DASHBOARD
========================================================= */

export default function DashboardPage() {
  const {
    user,
    updateProfile,
    refreshUser,
  } = useAuth();

  const { t } = useTranslate();
  const navigate = useNavigate();

  useStreakReconciler();

  const {
    newBadge,
    checkBadges,
    clearNewBadge,
  } = useBadgeChecker();

  const [langChosen, setLangChosen] =
    useState(false);

  const [chestClaimedToday, setChestClaimedToday] =
    useState(false);

  const [claiming, setClaiming] =
    useState(false);

  const [giftsOpen, setGiftsOpen] =
    useState(false);

  const [
    generatedGiftCode,
    setGeneratedGiftCode,
  ] = useState<string | null>(null);

  const [
    giftSendError,
    setGiftSendError,
  ] = useState<string | null>(null);

  const [
    redeemInput,
    setRedeemInput,
  ] = useState("");

  const [
    redeemMessage,
    setRedeemMessage,
  ] = useState<string | null>(null);

  const hasShield =
    (user?.streakFreezes ?? 0) > 0;

  /* =========================================================
     LANGUAGE INITIALIZATION
  ========================================================= */

  useEffect(() => {
    if (!user) return;

    const key =
      `langoai_language_chosen_${user.id ?? user.username}`;

    const alreadyChosen =
      localStorage.getItem(key) === "true" ||
      !!user.currentLanguage;

    setLangChosen(alreadyChosen);

    if (alreadyChosen) {
      try {
        localStorage.setItem(
          key,
          "true"
        );
      } catch {
        // ignore
      }
    }
  }, [
    user?.id,
    user?.username,
    user?.currentLanguage,
  ]);

  /* =========================================================
     DAILY CHEST INITIALIZATION
  ========================================================= */

  useEffect(() => {
    if (!user) return;

    try {
      const today = new Date()
        .toISOString()
        .slice(0, 10);

      setChestClaimedToday(
        localStorage.getItem(
          DAILY_CHEST_KEY
        ) === today
      );
    } catch {
      setChestClaimedToday(false);
    }
  }, [user?.id]);

  /* =========================================================
     PROGRESS
  ========================================================= */

  const dailyGoal = useMemo(
    () => getDailyGoalProgress(),
    [user?.totalXP]
  );

  const {
    streak: computedStreak,
    todayActive: hasActivityToday,
  } = useMemo(
    () => computeStreak(),
    [user?.streak, user?.lastActivityDate]
  );

  const last7Days = useMemo(
    () => getLast7Days(),
    [user?.streak, user?.lastActivityDate]
  );

  const totalXP = user?.totalXP;

  /* =========================================================
     BADGES
  ========================================================= */

  useEffect(() => {
    if (!user) return;

    checkBadges({
      totalXP: user.totalXP,
      streak: computedStreak,
    });

    // Intentionally excluded.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalXP, computedStreak]);

  if (!user) {
    return null;
  }

  /* =========================================================
     DERIVED
  ========================================================= */

  const languageChoiceKey =
    `langoai_language_chosen_${user.id ?? user.username}`;

  const selectedLang =
    LEARNING_LANGUAGES.find(
      (lang) =>
        lang.code ===
        user.currentLanguage
    );

  const xpNeededForNext =
    xpForNextLevel(user.level);

  const xpCurrent =
    user.totalXP -
    xpRequiredForLevel(user.level);

  const xpProgress = Math.min(
    Math.max(
      (xpCurrent / xpNeededForNext) *
        100,
      0
    ),
    100
  );

  const xpNeeded = Math.max(
    xpNeededForNext -
      xpCurrent,
    0
  );

  const streakWeather =
    WEATHER_META[
      getStreakWeather(
        computedStreak,
        hasActivityToday
      )
    ];

  const mascotMood: MascotMood =
    !hasActivityToday &&
    computedStreak > 0
      ? "supportive"
      : dailyGoal.percent >=
          100 ||
        computedStreak >= 7
      ? "happy"
      : "greeting";

  const mascot =
    MASCOT_META[mascotMood];

  /* =========================================================
     ACTIONS
  ========================================================= */

  function selectLanguage(
    code: string
  ) {
    updateProfile({
      currentLanguage: code,
    });

    localStorage.setItem(
      languageChoiceKey,
      "true"
    );

    setLangChosen(true);
  }

  function openArena() {
    navigate("/arena");
  }

  function openGrammar() {
    navigate("/grammar");
  }

  async function claimChest() {
    if (
      chestClaimedToday ||
      claiming
    ) {
      return;
    }

    const today = new Date()
      .toISOString()
      .slice(0, 10);

    setClaiming(true);

    try {
      const {
        data,
        error,
      } = await supabase.rpc(
        "complete_learning_activity",
        {
          p_kind: "daily_goal",
          p_ref: today,
        }
      );

      if (error) {
        const msg = String(
          error.message || ""
        );

        if (
          msg.includes(
            "activity_already_completed"
          )
        ) {
          alert(
            "Je hebt de dagelijkse XP-bonus al geclaimd vandaag."
          );

          setChestClaimedToday(
            true
          );

          try {
            localStorage.setItem(
              DAILY_CHEST_KEY,
              today
            );
          } catch {
            // ignore
          }
        } else if (
          msg.includes(
            "not_authenticated"
          ) ||
          msg.includes("JWT")
        ) {
          alert(
            "Je bent niet meer ingelogd. Log opnieuw in."
          );
        } else if (
          msg.includes(
            "daily_xp_cap_reached"
          )
        ) {
          alert(
            "Dagelijkse XP-limiet bereikt. Probeer morgen opnieuw."
          );
        } else {
          alert(
            "Kon dagelijkse XP-bonus niet claimen. Controleer of de database-migratie is gedraaid."
          );

          console.error(
            "complete_learning_activity failed:",
            error
          );
        }

        return;
      }

      const payload =
        data as {
          xpAwarded?: number;
          profile?: unknown;
        } | null;

      const xpAwarded =
        payload?.xpAwarded ??
        DAILY_XP_REWARD;

      alert(
        `+${xpAwarded} XP toegevoegd!`
      );

      try {
        localStorage.setItem(
          DAILY_CHEST_KEY,
          today
        );
      } catch {
        // ignore
      }

      setChestClaimedToday(
        true
      );

      await refreshUser();
    } finally {
      setClaiming(false);
    }
  }

  async function buyStreakShield() {
    if (hasShield) return;

    const { error } =
      await supabase.rpc(
        "buy_streak_shield"
      );

    if (error) {
      console.error(
        "buy_streak_shield RPC failed:",
        error
      );

      return;
    }

    await refreshUser();
  }

  async function sendGift(
    payload:
      | {
          type: "coins";
          amount: number;
        }
      | {
          type: "shield";
        }
  ) {
    const {
      data,
      error,
    } = await supabase.rpc(
      "create_gift_code",
      {
        p_prize_type:
          payload.type,
        p_prize_amount:
          payload.type ===
          "coins"
            ? payload.amount
            : 0,
      }
    );

    if (error || !data) {
      setGiftSendError(
        t(
          "dashboard.giftNotEnoughCoins"
        )
      );

      setGeneratedGiftCode(
        null
      );

      return;
    }

    setGiftSendError(null);
    setGeneratedGiftCode(data);

    await refreshUser();
  }

  async function shareGiftCode() {
    if (!generatedGiftCode) {
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Lango AI",
          text: generatedGiftCode,
        });
      } catch {
        // cancelled
      }

      return;
    }

    try {
      await navigator.clipboard.writeText(
        generatedGiftCode
      );

      window.alert(
        t(
          "dashboard.giftCopiedConfirm"
        )
      );
    } catch {
      // ignore
    }
  }

  async function redeemGift() {
    const trimmed =
      redeemInput.trim();

    if (!trimmed) {
      setRedeemMessage(
        t(
          "dashboard.giftInvalidCode"
        )
      );

      return;
    }

    const {
      data,
      error,
    } = await supabase.rpc(
      "redeem_gift_code",
      {
        p_code: trimmed,
      }
    );

    if (error || !data) {
      const msg = String(
        error?.message ?? ""
      );

      if (
        msg.includes(
          "already_used"
        )
      ) {
        setRedeemMessage(
          t(
            "dashboard.giftAlreadyUsed"
          )
        );
      } else {
        setRedeemMessage(
          t(
            "dashboard.giftInvalidCode"
          )
        );
      }

      return;
    }

    if (
      data.prizeType ===
      "coins"
    ) {
      setRedeemMessage(
        t(
          "dashboard.giftRedeemedCoins"
        ).replace(
          "{amount}",
          String(
            data.prizeAmount
          )
        )
      );
    } else {
      setRedeemMessage(
        t(
          "dashboard.giftRedeemedShield"
        )
      );
    }

    setRedeemInput("");

    await refreshUser();
  }

  /* =========================================================
     LANGUAGE SCREEN
  ========================================================= */

  if (!langChosen) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-[#0b0f1a]">
        <div className="pointer-events-none fixed inset-0 z-0 dark:hidden">
          <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-indigo-100/60 blur-[100px]" />
          <div className="absolute -right-32 top-1/2 h-[400px] w-[400px] rounded-full bg-purple-100/50 blur-[80px]" />
          <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-blue-100/40 blur-[60px]" />
        </div>

        <div className="pointer-events-none fixed inset-0 z-0 hidden dark:block">
          <div className="absolute -left-40 -top-40 h-[700px] w-[700px] animate-pulse rounded-full bg-indigo-600/20 blur-[140px]" />
          <div className="absolute -right-32 top-1/3 h-[500px] w-[500px] animate-pulse rounded-full bg-purple-600/15 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-blue-600/10 blur-[80px]" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center">
              <div className="relative mx-auto mb-5 inline-flex">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-400 to-purple-600 opacity-40 blur-2xl" />

                <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 text-5xl shadow-2xl shadow-indigo-500/40 ring-2 ring-white/20">
                  🌍
                </div>
              </div>

              <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                {t(
                  "dashboard.welcome"
                )}{" "}
                <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                  {user.username}
                </span>
                ! 👋
              </h1>

              <p className="mt-3 text-base font-medium text-slate-500 dark:text-slate-400">
                {t(
                  "dashboard.chooseLanguage"
                )}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {LEARNING_LANGUAGES.map(
                (lang) => (
                  <button
                    type="button"
                    key={lang.code}
                    onClick={() =>
                      selectLanguage(
                        lang.code
                      )
                    }
                    className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white px-6 py-4 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-xl active:translate-y-0 active:scale-[0.99] dark:border-white/[0.07] dark:bg-white/[0.04] dark:hover:border-indigo-500/50 dark:hover:bg-indigo-500/10"
                  >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-500 group-hover:translate-x-full dark:via-white/5" />

                    <div className="relative flex items-center gap-4">
                      <span className="inline-block w-10 text-4xl drop-shadow-md transition-all duration-300 group-hover:scale-125 group-hover:-rotate-6">
                        {lang.flag}
                      </span>

                      <div className="flex-1">
                        <p className="text-base font-black text-slate-900 dark:text-white">
                          {t(
                            lang.nameKey
                          )}
                        </p>

                        <p className="text-xs text-slate-400 dark:text-slate-500">
                          {t(
                            "dashboard.continueLearning"
                          )}
                        </p>
                      </div>

                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 transition-all duration-200 group-hover:scale-110 group-hover:bg-indigo-500 dark:bg-white/[0.08]">
                        <ChevronRight className="h-4 w-4 text-slate-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white dark:text-slate-500" />
                      </span>
                    </div>
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================
     MAIN DASHBOARD
  ========================================================= */

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 transition-colors duration-300 dark:bg-[#0b0f1a]">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 dark:hidden">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-indigo-100/60 blur-[100px]" />
        <div className="absolute -right-32 top-1/2 h-[400px] w-[400px] rounded-full bg-purple-100/50 blur-[80px]" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-blue-100/40 blur-[60px]" />
      </div>

      <div className="pointer-events-none fixed inset-0 z-0 hidden dark:block">
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] animate-pulse rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-[500px] w-[500px] animate-pulse rounded-full bg-purple-600/15 blur-[100px] [animation-delay:2s]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-blue-600/10 blur-[80px] [animation-delay:4s]" />
      </div>

      {newBadge && (
        <BadgeNotification
          badge={newBadge}
          onDone={clearNewBadge}
        />
      )}

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        {/* ===================================================
            HEADER
        =================================================== */}

        <header className="mb-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-400">
            Dashboard
          </p>

          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t(
              "dashboard.welcome"
            )}{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
              {user.username}
            </span>
            ! 👋
          </h1>

          {selectedLang && (
            <p className="mt-3 flex flex-wrap items-center gap-2 text-base text-slate-500 dark:text-slate-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-lg shadow-sm ring-1 ring-slate-200 dark:bg-white/5 dark:ring-white/10">
                {selectedLang.flag}
              </span>

              {t(
                "dashboard.learningLanguage"
              )}{" "}

              <strong className="font-semibold text-slate-800 dark:text-white">
                {t(
                  selectedLang.nameKey
                )}
              </strong>

              <button
                type="button"
                onClick={() =>
                  setLangChosen(false)
                }
                className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-500 transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:bg-white/[0.06] dark:text-slate-400 dark:hover:bg-indigo-500/20 dark:hover:text-indigo-300"
              >
                {t(
                  "dashboard.changeLanguage"
                )}
              </button>
            </p>
          )}
        </header>

        {/* ===================================================
            LEGEND ARENA — MAIN EVENT
        =================================================== */}

        <section className="mb-8">
          <button
            type="button"
            onClick={openArena}
            aria-label={t(
              "dashboard.arenaTitle"
            )}
            className="group relative block w-full overflow-hidden rounded-[32px] p-[1px] text-left shadow-[0_24px_70px_-32px_rgba(79,70,229,.65)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_-32px_rgba(79,70,229,.72)] active:translate-y-0"
          >
            {/* Outer gradient border */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-95" />

            {/* Hover light */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px]">
              <div className="absolute -left-1/2 top-0 h-full w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[400%]" />
            </div>

            {/* Main card */}
            <div className="relative overflow-hidden rounded-[31px] bg-[#080b16]">
              {/* Background glows */}
              <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-[90px]" />
              <div className="pointer-events-none absolute -right-24 -bottom-28 h-80 w-80 rounded-full bg-violet-500/20 blur-[100px]" />
              <div className="pointer-events-none absolute right-1/3 top-1/2 h-48 w-48 rounded-full bg-fuchsia-500/10 blur-[80px]" />

              {/* Decorative rings */}
              <div className="pointer-events-none absolute right-[-90px] top-[-110px] h-[280px] w-[280px] rounded-full border border-white/[0.06]" />
              <div className="pointer-events-none absolute right-[-45px] top-[-65px] h-[190px] w-[190px] rounded-full border border-white/[0.05]" />

              <div className="relative flex flex-col gap-7 p-6 sm:p-8 lg:flex-row lg:items-center lg:gap-10">
                {/* Trophy / Arena visual */}
                <div className="relative mx-auto shrink-0 lg:mx-0">
                  <div className="absolute inset-0 scale-90 rounded-[30px] bg-indigo-500/25 blur-2xl transition-transform duration-500 group-hover:scale-110" />

                  <div className="relative flex h-28 w-28 items-center justify-center rounded-[30px] border border-white/10 bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 shadow-[0_18px_45px_-15px_rgba(99,102,241,.8)] ring-1 ring-white/10 sm:h-32 sm:w-32 sm:rounded-[34px]">
                    <Trophy className="h-14 w-14 text-white drop-shadow-lg sm:h-16 sm:w-16" />

                    <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm shadow-lg backdrop-blur-md">
                      ✦
                    </span>
                  </div>

                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-indigo-200 backdrop-blur-md">
                    Main Event
                  </div>
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1 text-center lg:text-left">
                  <div className="mb-3 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                    <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300 ring-1 ring-indigo-400/20">
                      {t(
                        "dashboard.mainEvent"
                      )}
                    </span>

                    <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 ring-1 ring-white/[0.06]">
                      Season
                    </span>
                  </div>

                  <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                    {t(
                      "dashboard.arenaTitle"
                    )}
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                    {t(
                      "dashboard.arenaSub"
                    )}
                  </p>

                  {/* Arena progression mini row */}
                  <div className="mt-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.07] px-3 py-1.5 text-[11px] font-bold text-slate-200 ring-1 ring-white/[0.06]">
                      <Star className="h-3.5 w-3.5 text-yellow-300" />
                      Season levels
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.07] px-3 py-1.5 text-[11px] font-bold text-slate-200 ring-1 ring-white/[0.06]">
                      <Shield className="h-3.5 w-3.5 text-cyan-300" />
                      Unlock
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.07] px-3 py-1.5 text-[11px] font-bold text-slate-200 ring-1 ring-white/[0.06]">
                      ⚡ Earn EP
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex shrink-0 items-center justify-center lg:justify-end">
                  <span className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-black text-slate-900 shadow-xl transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-2xl sm:px-6">
                    {t(
                      "dashboard.arenaTitle"
                    )}

                    <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>

              {/* Bottom season strip */}
              <div className="relative border-t border-white/[0.07] bg-white/[0.025] px-6 py-3.5 sm:px-8">
                <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    Your competitive journey
                  </p>

                  <div className="flex items-center justify-center gap-2 text-[11px] font-semibold text-slate-400 sm:justify-end">
                    <span>Levels</span>
                    <span className="text-slate-600">•</span>
                    <span>Unlock</span>
                    <span className="text-slate-600">•</span>
                    <span>Play</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-indigo-300">Earn EP</span>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </section>

        {/* ===================================================
            AI COMPANION
        =================================================== */}

        <DashboardRobotMascot
          message={t(mascot.key)}
          mood={mascotMood}
        />

        {/* ===================================================
            TODAY STATUS
        =================================================== */}

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          {/* DAILY GOAL */}
          <div className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm dark:border-white/[0.06] dark:bg-white/[0.03]">
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-100 blur-2xl dark:bg-indigo-500/10" />

            <div className="relative flex items-center gap-3">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-xl dark:bg-indigo-500/10">
                ⚡
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-400">
                  {t(
                    "dashboard.dailyGoal"
                  )}
                </p>

                <p className="mt-1 text-sm font-bold text-slate-800 dark:text-white">
                  {dailyGoal.percent >=
                  100
                    ? t(
                        "dashboard.dailyGoalReached"
                      )
                    : t(
                        "dashboard.xpLeftToday"
                      ).replace(
                        "{xp}",
                        String(
                          Math.max(
                            dailyGoal.goal -
                              dailyGoal.current,
                            0
                          )
                        )
                      )}
                </p>
              </div>
            </div>
          </div>

          {/* DAILY CHEST */}
          <button
            type="button"
            onClick={claimChest}
            disabled={
              chestClaimedToday ||
              claiming
            }
            className={`relative flex items-center gap-3 overflow-hidden rounded-2xl border p-5 text-left shadow-sm transition-all duration-300 ${
              chestClaimedToday
                ? "cursor-default border-slate-200 bg-slate-50 dark:border-white/[0.06] dark:bg-white/[0.02]"
                : "border-amber-200 bg-amber-50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-100 dark:border-amber-500/20 dark:bg-white/[0.03] dark:hover:border-amber-500/30"
            }`}
          >
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-amber-100 text-xl dark:bg-amber-500/10">
              {chestClaimedToday
                ? "✅"
                : "🎁"}
            </span>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-slate-800 dark:text-white">
                {t(
                  "dashboard.chestTitle"
                )}
              </p>

              <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                {chestClaimedToday
                  ? t(
                      "dashboard.chestSubtitleClaimed"
                    )
                  : t(
                      "dashboard.chestSubtitleOpen"
                    ).replace(
                      "{xp}",
                      String(
                        DAILY_XP_REWARD
                      )
                    )}
              </p>
            </div>

            {!chestClaimedToday && (
              <span className="flex-shrink-0 rounded-full bg-amber-500 px-3 py-1.5 text-xs font-bold text-white shadow-sm">
                {claiming
                  ? "Bezig..."
                  : t(
                      "dashboard.chestButton"
                    )}
              </span>
            )}
          </button>
        </div>

        {/* ===================================================
            CORE STATS
        =================================================== */}

        <section className="mb-8">
          <div className="mb-4">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Progress
            </p>

            <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
              Your progress
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {/* LEVEL */}
            <div className="group relative overflow-hidden rounded-2xl border border-amber-200/80 bg-amber-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-100 dark:border-amber-500/20 dark:bg-white/[0.03]">
              <div className="pointer-events-none absolute -right-3 -top-3 h-16 w-16 rounded-full bg-amber-200/60 blur-xl dark:bg-amber-500/10" />

              <div className="relative">
                <div className="mb-3 text-2xl">
                  ⭐
                </div>

                <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  {t(
                    "dashboard.level"
                  )}
                </p>

                <p className="mt-0.5 text-xl font-black text-slate-900 dark:text-white">
                  {user.level}
                </p>

                <div className="mt-3 h-1 w-8 rounded-full bg-amber-400" />
              </div>
            </div>

            {/* XP */}
            <div className="group relative overflow-hidden rounded-2xl border border-indigo-200/80 bg-indigo-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100 dark:border-indigo-500/20 dark:bg-white/[0.03]">
              <div className="pointer-events-none absolute -right-3 -top-3 h-16 w-16 rounded-full bg-indigo-200/60 blur-xl dark:bg-indigo-500/10" />

              <div className="relative">
                <div className="mb-3 text-2xl">
                  ⚡
                </div>

                <p className="text-[11px] font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                  {t(
                    "dashboard.totalXP"
                  )}
                </p>

                <p className="mt-0.5 text-xl font-black text-slate-900 dark:text-white">
                  {user.totalXP.toLocaleString()}
                </p>

                <div className="mt-3 h-1 w-8 rounded-full bg-indigo-500" />
              </div>
            </div>

            {/* STREAK */}
            <div
              className={`group relative overflow-hidden rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                hasActivityToday
                  ? "border-orange-200/80 bg-orange-50 hover:shadow-orange-100 dark:border-orange-500/20"
                  : "border-slate-200/80 bg-slate-50 dark:border-white/[0.06]"
              } dark:bg-white/[0.03]`}
            >
              <div className="relative">
                <div className="mb-3 text-2xl">
                  {hasActivityToday
                    ? "🔥"
                    : "💤"}
                </div>

                <p
                  className={`text-[11px] font-semibold uppercase tracking-widest ${
                    hasActivityToday
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-slate-500"
                  }`}
                >
                  {t(
                    "dashboard.streak"
                  )}
                </p>

                <p className="mt-0.5 text-xl font-black text-slate-900 dark:text-white">
                  {computedStreak}{" "}
                  {t(
                    "dashboard.days"
                  )}
                </p>

                <div
                  className={`mt-3 h-1 w-8 rounded-full ${
                    hasActivityToday
                      ? "bg-orange-400"
                      : "bg-slate-300 dark:bg-slate-600"
                  }`}
                />
              </div>
            </div>

            {/* LANGUAGE */}
            <div className="group relative overflow-hidden rounded-2xl border border-emerald-200/80 bg-emerald-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-100 dark:border-emerald-500/20 dark:bg-white/[0.03]">
              <div className="relative">
                <div className="mb-3 text-2xl">
                  {selectedLang
                    ? selectedLang.flag
                    : "🌍"}
                </div>

                <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  {t(
                    "dashboard.language"
                  )}
                </p>

                <p className="mt-0.5 truncate text-xl font-black text-slate-900 dark:text-white">
                  {selectedLang
                    ? t(
                        selectedLang.nameKey
                      )
                    : t(
                        "dashboard.none"
                      )}
                </p>

                <div className="mt-3 h-1 w-8 rounded-full bg-emerald-500" />
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            XP + DAILY PROGRESS
        =================================================== */}

        <div className="mb-8 grid gap-4 xl:grid-cols-2">
          {/* XP PROGRESS */}
          <div className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-sm dark:border-white/[0.06] dark:bg-white/[0.03]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 to-transparent dark:from-indigo-500/8 dark:to-transparent" />

            <div className="relative p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
                {t(
                  "dashboard.level"
                )}{" "}
                {user.level}
              </p>

              <p className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
                {t(
                  "dashboard.xpProgress"
                )}{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  {user.level + 1}
                </span>
              </p>

              <div className="mt-5">
                <div className="mb-2.5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {xpCurrent.toLocaleString()}
                    <span className="font-normal text-slate-400 dark:text-slate-500">
                      {" "}
                      /{" "}
                      {xpNeededForNext.toLocaleString()}{" "}
                      {t(
                        "topbar.xp"
                      )}
                    </span>
                  </span>

                  <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-bold text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300">
                    {Math.round(
                      xpProgress
                    )}
                    %
                  </span>
                </div>

                <div className="relative h-3 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200 dark:bg-white/5 dark:ring-white/10">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${xpProgress}%`,
                      background:
                        "linear-gradient(90deg, #6366f1, #a855f7)",
                      boxShadow:
                        "0 0 12px rgba(99,102,241,0.5)",
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-transparent" />
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-500 dark:text-slate-500">
                {xpNeeded > 0 ? (
                  <>
                    {t(
                      "dashboard.needMoreXP"
                    )}{" "}
                    <span className="font-bold text-slate-700 dark:text-slate-200">
                      {xpNeeded.toLocaleString()}
                    </span>{" "}
                    {t(
                      "dashboard.moreXP"
                    )}{" "}
                    <span className="font-bold text-slate-700 dark:text-slate-200">
                      {user.level + 1}
                    </span>
                    .
                  </>
                ) : (
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">
                    {t(
                      "dashboard.levelUp"
                    )}
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* DAILY GOAL */}
          <div className="relative overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm dark:border-white/[0.06] dark:bg-white/[0.03]">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 to-transparent dark:from-orange-500/6 dark:to-transparent" />

            <div className="relative p-6">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 dark:text-orange-400">
                {t(
                  "dashboard.dailyGoal"
                )}
              </p>

              <div className="flex items-center gap-6">
                {/* RING */}
                <div className="relative flex-shrink-0">
                  <svg
                    className="relative h-28 w-28 -rotate-90"
                    viewBox="0 0 120 120"
                  >
                    <defs>
                      <linearGradient
                        id="ringGradDashboard"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#6366f1"
                        />
                        <stop
                          offset="100%"
                          stopColor="#a855f7"
                        />
                      </linearGradient>
                    </defs>

                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="10"
                      className="text-slate-100 dark:text-white/5"
                    />

                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke="url(#ringGradDashboard)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={
                        2 * Math.PI * 52
                      }
                      strokeDashoffset={
                        2 *
                        Math.PI *
                        52 *
                        (1 -
                          Math.min(
                            dailyGoal.percent,
                            100
                          ) /
                            100)
                      }
                      style={{
                        transition:
                          "stroke-dashoffset 0.8s ease-out",
                        filter:
                          "drop-shadow(0 0 6px rgba(99,102,241,0.4))",
                      }}
                    />
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-slate-900 dark:text-white">
                      {dailyGoal.current}
                    </span>

                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      /{" "}
                      {dailyGoal.goal}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  {dailyGoal.percent >=
                  100 ? (
                    <p className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                      {t(
                        "dashboard.dailyGoalReached"
                      )}
                    </p>
                  ) : dailyGoal.current ===
                    0 ? (
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                      {t(
                        "dashboard.dailyGoalEmpty"
                      )}
                    </p>
                  ) : (
                    <>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {
                          dailyGoal.current
                        }{" "}
                        /{" "}
                        {
                          dailyGoal.goal
                        }{" "}
                        {t(
                          "topbar.xp"
                        )}
                      </p>

                      <p className="mt-1 text-xs text-slate-400 dark:text-slate-600">
                        {Math.max(
                          dailyGoal.goal -
                            dailyGoal.current,
                          0
                        )}{" "}
                        {t(
                          "topbar.xp"
                        )}
                      </p>
                    </>
                  )}

                  <div className="mt-4 border-t border-slate-100 pt-4 dark:border-white/5">
                    <div className="flex items-start gap-2">
                      <span className="text-2xl">
                        {hasActivityToday
                          ? "🔥"
                          : "💤"}
                      </span>

                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-800 dark:text-white">
                          {
                            computedStreak
                          }{" "}
                          {t(
                            "dashboard.streakActive"
                          )}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                          <span aria-hidden="true">
                            {
                              streakWeather.emoji
                            }
                          </span>{" "}
                          {t(
                            streakWeather.key
                          )}
                        </p>

                        {!hasActivityToday && (
                          <p className="text-xs text-orange-500 dark:text-orange-400">
                            {t(
                              "dashboard.streakAtRisk"
                            )}
                          </p>
                        )}

                        {hasShield ? (
                          <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-cyan-100 px-2 py-0.5 text-xs font-bold text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300">
                            <Shield className="h-3 w-3" />
                            {t(
                              "dashboard.shieldActive"
                            )}
                          </span>
                        ) : (
                          !hasActivityToday && (
                            <button
                              type="button"
                              onClick={
                                buyStreakShield
                              }
                              className="mt-1 inline-flex items-center gap-1 rounded-full bg-cyan-50 px-2 py-0.5 text-xs font-bold text-cyan-700 transition-colors hover:bg-cyan-100 dark:bg-cyan-500/10 dark:text-cyan-300"
                            >
                              <Shield className="h-3 w-3" />
                              {t(
                                "dashboard.shieldBuy"
                              ).replace(
                                "{coins}",
                                String(
                                  STREAK_SHIELD_COST
                                )
                              )}
                            </button>
                          )
                        )}

                        {computedStreak >=
                          30 && (
                          <span className="mt-1 inline-block rounded-full bg-purple-100 px-2 py-0.5 text-xs font-bold text-purple-700 dark:bg-purple-500/20 dark:text-purple-300">
                            🏆{" "}
                            {t(
                              "dashboard.milestone30"
                            )}
                          </span>
                        )}

                        {computedStreak >=
                          7 &&
                          computedStreak <
                            30 && (
                            <span className="mt-1 inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
                              ⭐{" "}
                              {t(
                                "dashboard.milestone7"
                              )}
                            </span>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LAST 7 DAYS */}
              <div className="mt-5 border-t border-slate-100 pt-4 dark:border-white/5">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
                  {t(
                    "dashboard.last7days"
                  )}
                </p>

                <div className="flex items-center justify-between gap-1">
                  {last7Days.map(
                    (day) => (
                      <div
                        key={day.date}
                        className="flex flex-1 flex-col items-center gap-1.5"
                        title={day.date}
                      >
                        <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-600">
                          {
                            day.label
                          }
                        </span>

                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition-all duration-200 ${
                            day.active
                              ? "bg-orange-100 text-orange-500 ring-2 ring-orange-300 dark:bg-orange-500/20 dark:text-orange-300 dark:ring-1 dark:ring-orange-500/40"
                              : "bg-slate-100 text-slate-300 dark:bg-white/[0.03] dark:text-slate-700 dark:ring-1 dark:ring-white/5"
                          } ${
                            day.isToday
                              ? "ring-slate-400 dark:ring-slate-500"
                              : ""
                          }`}
                        >
                          {day.active
                            ? "🔥"
                            : "·"}
                        </div>
                      </div>
                    )
                  )}
                </div>

                {computedStreak >=
                  7 && (
                  <div className="mt-3 rounded-xl bg-indigo-50 px-3 py-2 text-center text-xs font-bold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                    🎉{" "}
                    {t(
                      "dashboard.streakBonus"
                    ).replace(
                      "{xp}",
                      String(
                        XP_REWARDS.STREAK_7_DAYS
                      )
                    )}

                    {computedStreak >=
                      30 &&
                      ` • ${t(
                        "dashboard.streakBonus30"
                      )}`}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            LEARNING
        =================================================== */}

        <section className="mb-8">
          <div className="mb-4">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
              Learn
            </p>

            <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
              {t(
                "dashboard.quickActions"
              )}
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Build your language skills through lessons, practice and review.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <LearningCard
              title={t(
                "dashboard.lessons"
              )}
              subtitle={t(
                "dashboard.lessonsSub"
              )}
              icon={
                <BookOpen className="h-6 w-6" />
              }
              tone="indigo"
              featured
              onClick={openGrammar}
            />

            <LearningCard
              title={t(
                "dashboard.testYourself"
              )}
              subtitle={`${t(
                "dashboard.testYourselfSub"
              )} +${
                XP_REWARDS.TEST_PASSED
              } ${t(
                "topbar.xp"
              )}`}
              icon={
                <FileText className="h-6 w-6" />
              }
              tone="emerald"
              onClick={() =>
                navigate(
                  "/tests"
                )
              }
            />

            <LearningCard
              title={t(
                "dashboard.mistakeReview"
              )}
              subtitle={t(
                "dashboard.mistakeReviewSub"
              )}
              icon={
                <Wrench className="h-6 w-6" />
              }
              tone="rose"
              onClick={() =>
                navigate(
                  "/mistakes"
                )
              }
            />

            <LearningCard
              title={t(
                "dashboard.wotd"
              )}
              subtitle={t(
                "dashboard.wotdSub"
              )}
              icon={
                <Star className="h-6 w-6" />
              }
              tone="amber"
              onClick={() =>
                navigate(
                  "/wotd"
                )
              }
            />
          </div>
        </section>

        {/* ===================================================
            LANGUAGE SELECTOR
        =================================================== */}

        <section className="mb-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Language
              </p>

              <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
                {t(
                  "dashboard.chooseLanguage"
                )}
              </h2>
            </div>

            {selectedLang && (
              <span className="hidden rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-600 sm:inline-flex dark:bg-indigo-500/10 dark:text-indigo-300">
                {selectedLang.flag}{" "}
                {t(
                  selectedLang.nameKey
                )}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {LEARNING_LANGUAGES.map(
              (lang) => {
                const isSelected =
                  user.currentLanguage ===
                  lang.code;

                return (
                  <button
                    type="button"
                    key={lang.code}
                    onClick={() =>
                      selectLanguage(
                        lang.code
                      )
                    }
                    className={`relative flex flex-col items-center gap-2 rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 ${
                      isSelected
                        ? "border-indigo-400 bg-indigo-50 shadow-md ring-2 ring-indigo-200 dark:border-indigo-500/60 dark:bg-indigo-500/10 dark:ring-1 dark:ring-indigo-500/30"
                        : "border-slate-200 bg-white hover:border-indigo-200 hover:bg-indigo-50/50 dark:border-white/[0.06] dark:bg-white/[0.03] dark:hover:border-indigo-500/30 dark:hover:bg-white/[0.06]"
                    }`}
                  >
                    <span className="text-3xl drop-shadow-sm">
                      {lang.flag}
                    </span>

                    <span
                      className={`text-sm font-semibold ${
                        isSelected
                          ? "text-indigo-700 dark:text-indigo-300"
                          : "text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {t(
                        lang.nameKey
                      )}
                    </span>

                    {isSelected && (
                      <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white shadow-md shadow-indigo-500/40">
                        <Check className="h-3 w-3" />
                      </span>
                    )}
                  </button>
                );
              }
            )}
          </div>
        </section>

        {/* ===================================================
            GIFTS
        =================================================== */}

        <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
          <button
            type="button"
            onClick={() =>
              setGiftsOpen(
                (value) => !value
              )
            }
            aria-expanded={giftsOpen}
            className="flex w-full items-center justify-between p-4 text-left"
          >
            <span className="flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-white">
              <GiftIcon
                className="h-4 w-4 text-indigo-500"
                aria-hidden="true"
              />

              {t(
                "dashboard.giftsTitle"
              )}
            </span>

            <ChevronDown
              className={`h-4 w-4 text-slate-400 transition-transform ${
                giftsOpen
                  ? "rotate-180"
                  : ""
              }`}
              aria-hidden="true"
            />
          </button>

          {giftsOpen && (
            <div className="space-y-5 border-t border-slate-200 p-4 dark:border-slate-800">
              {/* SEND */}
              <div>
                <p className="mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {t(
                    "dashboard.giftSendTitle"
                  )}
                </p>

                <div className="flex flex-wrap gap-2">
                  {[10, 20, 30].map(
                    (amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() =>
                          sendGift({
                            type: "coins",
                            amount,
                          })
                        }
                        className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-700 dark:text-slate-300"
                      >
                        🪙{" "}
                        {amount}
                      </button>
                    )
                  )}

                  <button
                    type="button"
                    onClick={() =>
                      sendGift({
                        type: "shield",
                      })
                    }
                    className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-700 dark:text-slate-300"
                  >
                    🛡️{" "}
                    {t(
                      "dashboard.giftShield"
                    )}
                  </button>
                </div>

                {giftSendError && (
                  <p className="mt-2 text-xs text-orange-500 dark:text-orange-400">
                    {giftSendError}
                  </p>
                )}

                {generatedGiftCode && (
                  <div className="mt-3 rounded-xl border border-indigo-100 bg-indigo-50/60 p-3 dark:border-indigo-900/40 dark:bg-indigo-950/20">
                    <p className="mb-1.5 text-xs text-slate-500 dark:text-slate-400">
                      {t(
                        "dashboard.giftGenerated"
                      )}
                    </p>

                    <code className="block break-all rounded-lg bg-white px-2 py-1.5 text-[11px] text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                      {
                        generatedGiftCode
                      }
                    </code>

                    <button
                      type="button"
                      onClick={
                        shareGiftCode
                      }
                      className="mt-2 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-indigo-700"
                    >
                      {t(
                        "dashboard.giftShareButton"
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* REDEEM */}
              <div>
                <p className="mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {t(
                    "dashboard.giftRedeemTitle"
                  )}
                </p>

                <div className="flex flex-wrap gap-2">
                  <input
                    type="text"
                    value={
                      redeemInput
                    }
                    onChange={(
                      event: ChangeEvent<HTMLInputElement>
                    ) =>
                      setRedeemInput(
                        event.target
                          .value
                      )
                    }
                    placeholder={t(
                      "dashboard.giftRedeemPlaceholder"
                    )}
                    className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:border-indigo-500 dark:focus:ring-indigo-500/10"
                  />

                  <button
                    type="button"
                    onClick={
                      redeemGift
                    }
                    disabled={
                      !redeemInput.trim()
                    }
                    className="shrink-0 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-40"
                  >
                    {t(
                      "dashboard.giftRedeemButton"
                    )}
                  </button>
                </div>

                {redeemMessage && (
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                    {redeemMessage}
                  </p>
                )}
              </div>
            </div>
          )}
        </section>

        {/* ===================================================
            ADVERTISEMENT
        =================================================== */}

        <div className="mb-6">
          <AdSlot
            variant="banner"
            className="mb-0"
          />
        </div>

        {/* ===================================================
            FOOTER STATUS
        =================================================== */}

        <div className="pb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm dark:border-white/[0.06] dark:bg-white/[0.03] dark:text-slate-400">
            <Flame className="h-3.5 w-3.5 text-orange-400" />

            {hasActivityToday
              ? `${computedStreak} ${t(
                  "dashboard.days"
                )}`
              : t(
                  "dashboard.streakAtRisk"
                )}
          </div>
        </div>
      </div>
    </div>
  );
}