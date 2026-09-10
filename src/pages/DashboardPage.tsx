import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  FileText,
  Gift as GiftIcon,
  Flame,
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
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-cyan-300/15 blur-3xl dark:bg-cyan-500/10" />

      <div className="relative grid items-center gap-5 px-5 py-5 sm:grid-cols-[170px_minmax(0,1fr)] sm:px-7 sm:py-6">
        {/* ROBOT */}
        <div className="relative mx-auto h-[195px] w-[170px] shrink-0" aria-hidden="true">
          <div
            className="pointer-events-none absolute left-1/2 top-[34%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
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
              {/* Shadow */}
              <ellipse
                cx="110"
                cy="230"
                rx="48"
                ry="7"
                fill="rgba(15,23,42,.14)"
              />

              {/* Legs */}
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

              {/* Body */}
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

              {/* Mini control window */}
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

              {/* Neck */}
              <rect
                x="95"
                y="120"
                width="30"
                height="32"
                rx="10"
                fill="url(#mDark)"
              />

              {/* Left arm */}
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

              {/* Right arm */}
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

              {/* Ears */}
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

              {/* Head */}
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

              {/* Highlight */}
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

              {/* Visor */}
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

                {/* Eyes */}
                <g
                  className="mascot-eyes"
                  style={{
                    animation:
                      "mascotBlink 6s ease-in-out infinite",
                    transformOrigin: "110px 118px",
                    transformBox: "fill-box",
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

                {/* Smile */}
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

        {/* MASCOT MESSAGE */}
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
   LANGUAGES
========================================================= */

const LEARNING_LANGUAGES = [
  {
    code: "en",
    nameKey: "lang.en" as const,
    flag: "🇬🇧",
    color: "from-blue-500 to-indigo-600",
  },
  {
    code: "nl",
    nameKey: "lang.nl" as const,
    flag: "🇳🇱",
    color: "from-orange-500 to-amber-500",
  },
  {
    code: "fr",
    nameKey: "lang.fr" as const,
    flag: "🇫🇷",
    color: "from-blue-500 to-violet-600",
  },
  {
    code: "de",
    nameKey: "lang.de" as const,
    flag: "🇩🇪",
    color: "from-red-500 to-rose-600",
  },
  {
    code: "es",
    nameKey: "lang.es" as const,
    flag: "🇪🇸",
    color: "from-yellow-500 to-orange-500",
  },
];

/* =========================================================
   DASHBOARD
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

  const [langChosen, setLangChosen] = useState(false);
  const [chestClaimedToday, setChestClaimedToday] = useState(false);
  const [claiming, setClaiming] = useState(false);

  const hasShield = (user?.streakFreezes ?? 0) > 0;

  const [giftsOpen, setGiftsOpen] = useState(false);
  const [generatedGiftCode, setGeneratedGiftCode] =
    useState<string | null>(null);
  const [giftSendError, setGiftSendError] =
    useState<string | null>(null);
  const [redeemInput, setRedeemInput] = useState("");
  const [redeemMessage, setRedeemMessage] =
    useState<string | null>(null);

  /* =========================================================
     LANGUAGE STATE
  ========================================================= */

  useEffect(() => {
    if (!user) return;

    const key = `langoai_language_chosen_${user.id ?? user.username}`;

    const alreadyChosen =
      localStorage.getItem(key) === "true" ||
      !!user.currentLanguage;

    setLangChosen(alreadyChosen);

    if (alreadyChosen) {
      try {
        localStorage.setItem(key, "true");
      } catch {
        // ignore localStorage errors
      }
    }
  }, [
    user?.id,
    user?.username,
    user?.currentLanguage,
  ]);

  /* =========================================================
     DAILY CHEST
  ========================================================= */

  useEffect(() => {
    if (!user) return;

    try {
      const today = new Date()
        .toISOString()
        .slice(0, 10);

      setChestClaimedToday(
        localStorage.getItem(DAILY_CHEST_KEY) === today
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

    // Intentionally excluded to avoid badge loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalXP, computedStreak]);

  if (!user) {
    return null;
  }

  /* =========================================================
     DERIVED VALUES
  ========================================================= */

  const languageChoiceKey =
    `langoai_language_chosen_${user.id ?? user.username}`;

  const selectedLang = LEARNING_LANGUAGES.find(
    (lang) => lang.code === user.currentLanguage
  );

  const xpNeededForNext = xpForNextLevel(user.level);

  const xpCurrent =
    user.totalXP -
    xpRequiredForLevel(user.level);

  const xpProgress = Math.min(
    (xpCurrent / xpNeededForNext) * 100,
    100
  );

  const xpNeeded = Math.max(
    xpNeededForNext - xpCurrent,
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
    !hasActivityToday && computedStreak > 0
      ? "supportive"
      : dailyGoal.percent >= 100 ||
        computedStreak >= 7
      ? "happy"
      : "greeting";

  const mascot = MASCOT_META[mascotMood];

  /* =========================================================
     ACTIONS
  ========================================================= */

  function selectLanguage(code: string) {
    updateProfile({
      currentLanguage: code,
    });

    localStorage.setItem(languageChoiceKey, "true");
    setLangChosen(true);
  }

  function continueLearning() {
    navigate("/grammar");
  }

  async function claimChest() {
    if (chestClaimedToday || claiming) return;

    const today = new Date()
      .toISOString()
      .slice(0, 10);

    setClaiming(true);

    try {
      const { data, error } =
        await supabase.rpc(
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

          setChestClaimedToday(true);

          try {
            localStorage.setItem(
              DAILY_CHEST_KEY,
              today
            );
          } catch {
            // ignore
          }
        } else if (
          msg.includes("not_authenticated") ||
          msg.includes("JWT")
        ) {
          alert(
            "Je bent niet meer ingelogd. Log opnieuw in."
          );
        } else if (
          msg.includes("daily_xp_cap_reached")
        ) {
          alert(
            "Dagelijkse XP-limiet bereikt. Probeer morgen opnieuw."
          );
        } else {
          alert(
            "Kon dagelijkse XP-bonus niet claimen. Controleer of de database-migratie is gedraaid."
          );

          console.error(
            "complete_learning_activity (daily_goal) failed:",
            error
          );
        }

        return;
      }

      const payload = data as {
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

      setChestClaimedToday(true);

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
    const { data, error } =
      await supabase.rpc(
        "create_gift_code",
        {
          p_prize_type: payload.type,
          p_prize_amount:
            payload.type === "coins"
              ? payload.amount
              : 0,
        }
      );

    if (error || !data) {
      setGiftSendError(
        t("dashboard.giftNotEnoughCoins")
      );

      setGeneratedGiftCode(null);
      return;
    }

    setGiftSendError(null);
    setGeneratedGiftCode(data);

    await refreshUser();
  }

  async function shareGiftCode() {
    if (!generatedGiftCode) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Lango AI",
          text: generatedGiftCode,
        });
      } catch {
        // User cancelled share sheet
      }

      return;
    }

    try {
      await navigator.clipboard.writeText(
        generatedGiftCode
      );

      window.alert(
        t("dashboard.giftCopiedConfirm")
      );
    } catch {
      // Clipboard unavailable
    }
  }

  async function redeemGift() {
    const trimmed =
      redeemInput.trim();

    if (!trimmed) {
      setRedeemMessage(
        t("dashboard.giftInvalidCode")
      );

      return;
    }

    const { data, error } =
      await supabase.rpc(
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
        msg.includes("already_used")
      ) {
        setRedeemMessage(
          t("dashboard.giftAlreadyUsed")
        );
      } else {
        setRedeemMessage(
          t("dashboard.giftInvalidCode")
        );
      }

      return;
    }

    if (data.prizeType === "coins") {
      setRedeemMessage(
        t("dashboard.giftRedeemedCoins").replace(
          "{amount}",
          String(data.prizeAmount)
        )
      );
    } else {
      setRedeemMessage(
        t("dashboard.giftRedeemedShield")
      );
    }

    setRedeemInput("");

    await refreshUser();
  }

  /* =========================================================
     LANGUAGE FIRST SCREEN
  ========================================================= */

  if (!langChosen) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-[#0b0f1a]">
        {/* LIGHT BACKGROUND */}
        <div className="pointer-events-none fixed inset-0 z-0 dark:hidden">
          <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-indigo-100/60 blur-[100px]" />
          <div className="absolute -right-32 top-1/2 h-[400px] w-[400px] rounded-full bg-purple-100/50 blur-[80px]" />
          <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-blue-100/40 blur-[60px]" />
        </div>

        {/* DARK BACKGROUND */}
        <div className="pointer-events-none fixed inset-0 z-0 hidden dark:block">
          <div className="absolute -left-40 -top-40 h-[700px] w-[700px] animate-pulse rounded-full bg-indigo-600/20 blur-[140px]" />
          <div className="absolute -right-32 top-1/3 h-[500px] w-[500px] animate-pulse rounded-full bg-purple-600/15 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-blue-600/10 blur-[80px]" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            {/* HEADER */}
            <div className="mb-8 text-center">
              <div className="relative mx-auto mb-5 inline-flex">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-400 to-purple-600 opacity-40 blur-2xl" />

                <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 text-5xl shadow-2xl shadow-indigo-500/40 ring-2 ring-white/20">
                  🌍
                </div>
              </div>

              <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                {t("dashboard.welcome")}{" "}
                <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                  {user.username}
                </span>
                ! 👋
              </h1>

              <p className="mt-3 text-base font-medium text-slate-500 dark:text-slate-400">
                {t("dashboard.chooseLanguage")}
              </p>
            </div>

            {/* LANGUAGE OPTIONS */}
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
                          {t(lang.nameKey)}
                        </p>

                        <p className="text-xs text-slate-400 dark:text-slate-500">
                          {t("dashboard.continueLearning")}
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
            WELCOME
        =================================================== */}

        <div className="mb-8">
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
            <p className="mt-3 flex flex-wrap items-center gap-2 text-base text-slate-500 dark:text-slate-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-lg shadow-sm ring-1 ring-slate-200 dark:bg-white/5 dark:ring-white/10">
                {selectedLang.flag}
              </span>

              {t("dashboard.learningLanguage")}{" "}

              <strong className="font-semibold text-slate-800 dark:text-white">
                {t(selectedLang.nameKey)}
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
        </div>

        {/* ===================================================
            AI MASCOT
        =================================================== */}

        <DashboardRobotMascot
          message={t(mascot.key)}
          mood={mascotMood}
        />

        {/* ===================================================
            PRIMARY LEARNING ACTION
        =================================================== */}

        <section className="mb-8 overflow-hidden rounded-[28px] border border-indigo-200/80 bg-white shadow-[0_20px_55px_-30px_rgba(79,70,229,.45)] dark:border-indigo-500/20 dark:bg-white/[0.035]">
          <div className="relative p-5 sm:p-7">
            <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-500/10" />

            <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                  <Zap className="h-3.5 w-3.5" />
                  Your next step
                </div>

                <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                  {t("dashboard.continueLearning")}
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  Keep building your skills with your next lesson, grammar practice and focused learning.
                </p>
              </div>

              <button
                type="button"
                onClick={continueLearning}
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-4 text-sm font-black text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30 active:translate-y-0"
              >
                <BookOpen className="h-5 w-5" />

                {t("dashboard.continueLearning")}

                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>

        {/* ===================================================
            TODAY
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
                  {t("dashboard.dailyGoal")}
                </p>

                <p className="mt-1 text-sm font-bold text-slate-800 dark:text-white">
                  {dailyGoal.percent >= 100
                    ? t("dashboard.dailyGoalReached")
                    : t("dashboard.xpLeftToday").replace(
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
            STATS
        =================================================== */}

        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {/* LEVEL */}
          <div className="group relative overflow-hidden rounded-2xl border border-amber-200/80 bg-amber-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-100 dark:border-amber-500/20 dark:bg-white/[0.03] dark:hover:border-amber-500/30">
            <div className="pointer-events-none absolute -right-3 -top-3 h-16 w-16 rounded-full bg-amber-200/60 blur-xl dark:bg-amber-500/10" />

            <div className="relative">
              <div className="mb-3 text-2xl">
                ⭐
              </div>

              <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                {t("dashboard.level")}
              </p>

              <p className="mt-0.5 text-xl font-black text-slate-900 dark:text-white">
                {user.level}
              </p>

              <div className="mt-3 h-1 w-8 rounded-full bg-amber-400" />
            </div>
          </div>

          {/* XP */}
          <div className="group relative overflow-hidden rounded-2xl border border-indigo-200/80 bg-indigo-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100 dark:border-indigo-500/20 dark:bg-white/[0.03] dark:hover:border-indigo-500/30">
            <div className="pointer-events-none absolute -right-3 -top-3 h-16 w-16 rounded-full bg-indigo-200/60 blur-xl dark:bg-indigo-500/10" />

            <div className="relative">
              <div className="mb-3 text-2xl">
                ⚡
              </div>

              <p className="text-[11px] font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                {t("dashboard.totalXP")}
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
                ? "border-orange-200/80 bg-orange-50 hover:shadow-orange-100 dark:border-orange-500/20 dark:hover:border-orange-500/30"
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
                {t("dashboard.streak")}
              </p>

              <p className="mt-0.5 text-xl font-black text-slate-900 dark:text-white">
                {computedStreak}{" "}
                {t("dashboard.days")}
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
          <div className="group relative overflow-hidden rounded-2xl border border-emerald-200/80 bg-emerald-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-100 dark:border-emerald-500/20 dark:bg-white/[0.03] dark:hover:border-emerald-500/30">
            <div className="relative">
              <div className="mb-3 text-2xl">
                {selectedLang
                  ? selectedLang.flag
                  : "🌍"}
              </div>

              <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                {t("dashboard.language")}
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

        {/* ===================================================
            PROGRESS
        =================================================== */}

        <div className="mb-8 grid gap-4 xl:grid-cols-2">
          {/* XP PROGRESS */}
          <div className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-sm dark:border-white/[0.06] dark:bg-white/[0.03] dark:ring-1 dark:ring-indigo-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 to-transparent dark:from-indigo-500/8 dark:to-transparent" />

            <div className="relative p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
                {t("dashboard.level")}{" "}
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
                      {t("topbar.xp")}
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

          {/* DAILY GOAL + STREAK */}
          <div className="relative overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm dark:border-white/[0.06] dark:bg-white/[0.03] dark:ring-1 dark:ring-orange-500/10">
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
                        id="ringGrad"
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
                      stroke="url(#ringGrad)"
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
                          dailyGoal.percent /
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
                      / {dailyGoal.goal}
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
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {dailyGoal.current}{" "}
                        / {dailyGoal.goal}{" "}
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
                    </div>
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
                          {computedStreak}{" "}
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
                              className="mt-1 inline-flex items-center gap-1 rounded-full bg-cyan-50 px-2 py-0.5 text-xs font-bold text-cyan-700 transition-colors hover:bg-cyan-100 dark:bg-cyan-500/10 dark:text-cyan-300 dark:hover:bg-cyan-500/20"
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
                          {day.label}
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
                  <div className="mt-3 rounded-xl bg-indigo-50 px-3 py-2 text-center text-xs font-bold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-1 dark:ring-indigo-500/20">
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
            LEARNING HUB
        =================================================== */}

        <section className="mb-8">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
                Learn
              </p>

              <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                {t(
                  "dashboard.quickActions"
                )}
              </h2>
            </div>

            <button
              type="button"
              onClick={continueLearning}
              className="hidden items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 sm:inline-flex dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Open lessons
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {/* GRAMMAR / LESSONS */}
            <button
              type="button"
              onClick={() =>
                navigate("/grammar")
              }
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border-2 border-indigo-200 bg-indigo-50/70 p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:bg-white hover:shadow-xl hover:shadow-indigo-100/60 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:hover:border-indigo-500/50 dark:hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white shadow-md shadow-indigo-500/25">
                  <BookOpen className="h-6 w-6" />
                </div>

                <ChevronRight className="h-4 w-4 text-indigo-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-indigo-500 dark:text-indigo-500" />
              </div>

              <div>
                <p className="text-base font-black text-slate-900 dark:text-white">
                  Grammar & Lessons
                </p>

                <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  Learn new grammar and continue your lessons.
                </p>
              </div>
            </button>

            {/* TESTS */}
            <button
              type="button"
              onClick={() =>
                navigate("/tests")
              }
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-white hover:shadow-xl hover:shadow-emerald-100/60 dark:border-emerald-500/25 dark:bg-emerald-500/10 dark:hover:border-emerald-500/50 dark:hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20">
                  <FileText className="h-6 w-6" />
                </div>

                <ChevronRight className="h-4 w-4 text-emerald-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-emerald-500 dark:text-emerald-500" />
              </div>

              <div>
                <p className="text-base font-black text-slate-900 dark:text-white">
                  {t(
                    "dashboard.testYourself"
                  )}
                </p>

                <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {t(
                    "dashboard.testYourselfSub"
                  )}{" "}
                  +{XP_REWARDS.TEST_PASSED}{" "}
                  {t("topbar.xp")}
                </p>
              </div>
            </button>

            {/* MISTAKES */}
            <button
              type="button"
              onClick={() =>
                navigate("/mistakes")
              }
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-rose-200 bg-rose-50/70 p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-300 hover:bg-white hover:shadow-xl hover:shadow-rose-100/60 dark:border-rose-500/25 dark:bg-rose-500/10 dark:hover:border-rose-500/50 dark:hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500 text-white shadow-md shadow-rose-500/20">
                  <Wrench className="h-6 w-6" />
                </div>

                <ChevronRight className="h-4 w-4 text-rose-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-rose-500 dark:text-rose-500" />
              </div>

              <div>
                <p className="text-base font-black text-slate-900 dark:text-white">
                  {t(
                    "dashboard.mistakeReview"
                  )}
                </p>

                <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {t(
                    "dashboard.mistakeReviewSub"
                  )}
                </p>
              </div>
            </button>

            {/* WORD OF THE DAY */}
            <button
              type="button"
              onClick={() =>
                navigate("/wotd")
              }
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-amber-200 bg-amber-50/70 p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-xl hover:shadow-amber-100/60 dark:border-amber-500/25 dark:bg-amber-500/10 dark:hover:border-amber-500/50 dark:hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-white shadow-md shadow-amber-500/20">
                  <Star className="h-6 w-6" />
                </div>

                <ChevronRight className="h-4 w-4 text-amber-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-amber-500 dark:text-amber-500" />
              </div>

              <div>
                <p className="text-base font-black text-slate-900 dark:text-white">
                  {t(
                    "dashboard.wotd"
                  )}
                </p>

                <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {t(
                    "dashboard.wotdSub"
                  )}
                </p>
              </div>
            </button>
          </div>
        </section>

        {/* ===================================================
            LEGEND ARENA
        =================================================== */}

        <section className="mb-8">
          <button
            type="button"
            onClick={() =>
              navigate("/arena")
            }
            className="group relative w-full overflow-hidden rounded-[28px] p-px shadow-xl shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/30 active:translate-y-0"
          >
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative flex items-center gap-5 rounded-[28px] bg-gradient-to-r from-slate-900/95 to-slate-900/85 px-5 py-6 text-left sm:px-8 sm:py-7 dark:from-slate-950/95 dark:to-slate-950/85">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-indigo-500/50 blur-xl" />

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/40 ring-1 ring-white/20">
                  <Trophy className="h-8 w-8 text-white drop-shadow" />
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <div className="mb-1.5 flex items-center gap-2">
                  <span className="rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-indigo-300 ring-1 ring-indigo-500/40">
                    {t(
                      "dashboard.mainEvent"
                    )}
                  </span>
                </div>

                <p className="text-xl font-black tracking-tight text-white sm:text-2xl">
                  {t(
                    "dashboard.arenaTitle"
                  )}
                </p>

                <p className="mt-1 text-sm font-medium text-slate-300 sm:text-base">
                  {t(
                    "dashboard.arenaSub"
                  )}
                </p>
              </div>

              <div className="hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-all duration-300 group-hover:translate-x-1.5 group-hover:bg-white/20 sm:flex">
                <ChevronRight className="h-6 w-6" />
              </div>
            </div>
          </button>
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
                {t(selectedLang.nameKey)}
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
                        🪙 {amount}
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
                      {generatedGiftCode}
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
                    value={redeemInput}
                    onChange={(
                      event: ChangeEvent<HTMLInputElement>
                    ) =>
                      setRedeemInput(
                        event.target.value
                      )
                    }
                    placeholder={t(
                      "dashboard.giftRedeemPlaceholder"
                    )}
                    className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:border-indigo-500 dark:focus:ring-indigo-500/10"
                  />

                  <button
                    type="button"
                    onClick={redeemGift}
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
            AD
        =================================================== */}

        <div className="mb-8">
          <AdSlot
            variant="banner"
            className="mb-0"
          />
        </div>

        {/* ===================================================
            FOOTER / SMALL STATUS
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