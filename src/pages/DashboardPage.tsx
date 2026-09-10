import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
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
  {
    emoji: string;
    key: TranslationKey;
  }
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
   LOCAL TEXT
   Geen nieuwe translation keys nodig.
========================================================= */

const UI_TEXT = {
  dashboard: "Dashboard",
  mainEvent: "Hoofdevenement",
  season: "Seizoen",
  arenaOpen: "Arena openen",
  arenaLevel: "Level",
  arenaXP: "XP",
  arenaStreak: "Streak",
  arenaJourney: "Jouw competitieve reis",
  arenaLevels: "Levels",
  arenaUnlock: "Ontgrendel",
  arenaPlay: "Speel",
  arenaEarn: "Verdien EP",
  arenaFallbackDescription:
    "Seizoenslevels. Ontgrendel, speel en verdien EP.",
  today: "Vandaag",
  dailyProgress: "Dagelijkse voortgang",
  progress: "Voortgang",
  learning: "Leren",
  learningTitle: "Leren en verbeteren",
  learningDescription:
    "Verbeter je taal met lessen, oefeningen en herhaling.",
  mascotDescription:
    "Je AI-leerpartner helpt je gefocust te blijven en stap voor stap vooruit te gaan.",
  smartFeedback: "Slimme feedback",
  alwaysReady: "Altijd klaar",
  language: "Taal",
  languageChoose: "Kies je leertaal",
  seasonBadge: "SEIZOEN",
  primaryBadge: "HOOFDFEATURE",
  levelShort: "LVL",
  enterArena: "Naar de Arena",
};

/* =========================================================
   SUPABASE RPC WRAPPER
   Voorkomt TS-errors wanneer Database types RPC's nog niet
   bevatten. Runtime gebruikt gewoon supabase.rpc().
========================================================= */

type RpcClient = {
  rpc: (
    functionName: string,
    args?: Record<string, unknown>
  ) => Promise<{
    data: any;
    error: any;
  }>;
};

const rpcClient = supabase as unknown as RpcClient;

/* =========================================================
   MASCOT
========================================================= */

type MascotMood = "greeting" | "happy" | "supportive";

const MASCOT_META: Record<
  MascotMood,
  {
    emoji: string;
    key: TranslationKey;
  }
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
  {
    rgb: string;
    smile: string;
  }
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
  description,
  smartFeedback,
  alwaysReady,
}: {
  message: string;
  mood?: MascotMood;
  description: string;
  smartFeedback: string;
  alwaysReady: string;
}) {
  const c = MOOD_STYLE[mood];

  return (
    <section
      className="
        relative mb-8 overflow-hidden rounded-[30px]
        border border-slate-200/80 bg-white
        shadow-[0_18px_55px_-28px_rgba(15,23,42,.32)]
        dark:border-white/[0.07]
        dark:bg-white/[0.035]
        dark:shadow-[0_24px_70px_-35px_rgba(0,0,0,.8)]
      "
      aria-label="AI learning mascot"
    >
      <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-indigo-300/15 blur-3xl dark:bg-indigo-500/10" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 h-48 w-48 rounded-full bg-cyan-300/15 blur-3xl dark:bg-cyan-500/10" />

      <div className="relative grid items-center gap-5 px-5 py-5 sm:grid-cols-[175px_minmax(0,1fr)] sm:px-7 sm:py-6">
        <div
          className="relative mx-auto h-[200px] w-[175px] shrink-0"
          aria-hidden="true"
        >
          <div
            className="pointer-events-none absolute left-1/2 top-[34%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, rgba(${c.rgb},.25), transparent 72%)`,
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
                id="dashboardMascotHead"
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
                id="dashboardMascotBody"
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
                id="dashboardMascotLimb"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#c3cad4" />
              </linearGradient>

              <linearGradient
                id="dashboardMascotDark"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>

              <radialGradient
                id="dashboardMascotVisor"
                cx="42%"
                cy="30%"
                r="80%"
              >
                <stop offset="0%" stopColor="#20293b" />
                <stop offset="55%" stopColor="#0f1626" />
                <stop offset="100%" stopColor="#020617" />
              </radialGradient>

              <clipPath id="dashboardMascotVisorClip">
                <rect
                  x="52"
                  y="82"
                  width="116"
                  height="88"
                  rx="42"
                />
              </clipPath>

              <filter
                id="dashboardMascotGlow"
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
                transformOrigin:
                  "110px 120px",
              }}
            >
              <ellipse
                cx="110"
                cy="230"
                rx="48"
                ry="7"
                fill="rgba(15,23,42,.14)"
              />

              <rect
                x="82"
                y="196"
                width="19"
                height="28"
                rx="9.5"
                fill="url(#dashboardMascotLimb)"
                stroke="#c3cad4"
              />

              <rect
                x="119"
                y="196"
                width="19"
                height="28"
                rx="9.5"
                fill="url(#dashboardMascotLimb)"
                stroke="#c3cad4"
              />

              <rect
                x="79"
                y="218"
                width="25"
                height="12"
                rx="6"
                fill="url(#dashboardMascotDark)"
              />

              <rect
                x="116"
                y="218"
                width="25"
                height="12"
                rx="6"
                fill="url(#dashboardMascotDark)"
              />

              <rect
                x="62"
                y="148"
                width="96"
                height="56"
                rx="26"
                fill="url(#dashboardMascotBody)"
                stroke="#d4dae2"
                strokeWidth="2"
              />

              <rect
                x="99"
                y="156"
                width="22"
                height="16"
                rx="4"
                fill="url(#dashboardMascotDark)"
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

              <rect
                x="95"
                y="120"
                width="30"
                height="32"
                rx="10"
                fill="url(#dashboardMascotDark)"
              />

              <g transform="rotate(14 60 162)">
                <rect
                  x="24"
                  y="153"
                  width="42"
                  height="18"
                  rx="9"
                  fill="url(#dashboardMascotLimb)"
                  stroke="#c3cad4"
                />
              </g>

              <circle
                cx="26"
                cy="162"
                r="10"
                fill="url(#dashboardMascotDark)"
              />

              <g transform="rotate(-14 160 162)">
                <rect
                  x="154"
                  y="153"
                  width="42"
                  height="18"
                  rx="9"
                  fill="url(#dashboardMascotLimb)"
                  stroke="#c3cad4"
                />
              </g>

              <circle
                cx="194"
                cy="162"
                r="10"
                fill="url(#dashboardMascotDark)"
              />

              <circle
                cx="38"
                cy="98"
                r="18"
                fill="url(#dashboardMascotLimb)"
                stroke="#c3cad4"
                strokeWidth="2"
              />

              <circle
                cx="38"
                cy="98"
                r="11"
                fill="url(#dashboardMascotDark)"
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
                fill="url(#dashboardMascotLimb)"
                stroke="#c3cad4"
                strokeWidth="2"
              />

              <circle
                cx="182"
                cy="98"
                r="11"
                fill="url(#dashboardMascotDark)"
              />

              <circle
                cx="177"
                cy="93"
                r="2.4"
                fill="#ffffff"
                opacity="0.35"
              />

              <rect
                x="30"
                y="24"
                width="160"
                height="150"
                rx="70"
                fill="url(#dashboardMascotHead)"
                stroke="#d4dae2"
                strokeWidth="2"
              />

              <ellipse
                cx="70"
                cy="55"
                rx="38"
                ry="18"
                fill="#ffffff"
                opacity="0.5"
                filter="url(#dashboardMascotGlow)"
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

              <rect
                x="52"
                y="82"
                width="116"
                height="88"
                rx="42"
                fill="url(#dashboardMascotVisor)"
              />

              <g clipPath="url(#dashboardMascotVisorClip)">
                <ellipse
                  cx="80"
                  cy="98"
                  rx="26"
                  ry="13"
                  fill="#ffffff"
                  opacity="0.06"
                />

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
                    filter="url(#dashboardMascotGlow)"
                  />

                  <rect
                    x="119"
                    y="108"
                    width="15"
                    height="20"
                    rx="7.5"
                    fill={`rgb(${c.rgb})`}
                    filter="url(#dashboardMascotGlow)"
                  />
                </g>

                <path
                  d={c.smile}
                  fill="none"
                  stroke={`rgb(${c.rgb})`}
                  strokeWidth="3.4"
                  strokeLinecap="round"
                  filter="url(#dashboardMascotGlow)"
                />
              </g>
            </g>
          </svg>
        </div>

        <div className="min-w-0 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            AI Learning Companion
          </div>

          <p className="mt-3 text-lg font-black tracking-tight text-slate-900 dark:text-white sm:text-xl">
            {message}
          </p>

          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-600 dark:bg-white/[0.06] dark:text-slate-300">
              ⚡ {smartFeedback}
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-600 dark:bg-white/[0.06] dark:text-slate-300">
              🦾 {alwaysReady}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  icon,
  label,
  value,
  detail,
  tone,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  detail?: string;
  tone: "amber" | "indigo" | "orange" | "emerald";
}) {
  const styles = {
    amber: {
      card:
        "border-amber-200/80 bg-amber-50 dark:border-amber-500/20 dark:bg-white/[0.03]",
      icon:
        "bg-amber-500/10 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300",
      label:
        "text-amber-600 dark:text-amber-400",
      bar: "bg-amber-400",
    },
    indigo: {
      card:
        "border-indigo-200/80 bg-indigo-50 dark:border-indigo-500/20 dark:bg-white/[0.03]",
      icon:
        "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300",
      label:
        "text-indigo-600 dark:text-indigo-400",
      bar: "bg-indigo-500",
    },
    orange: {
      card:
        "border-orange-200/80 bg-orange-50 dark:border-orange-500/20 dark:bg-white/[0.03]",
      icon:
        "bg-orange-500/10 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300",
      label:
        "text-orange-600 dark:text-orange-400",
      bar: "bg-orange-400",
    },
    emerald: {
      card:
        "border-emerald-200/80 bg-emerald-50 dark:border-emerald-500/20 dark:bg-white/[0.03]",
      icon:
        "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300",
      label:
        "text-emerald-600 dark:text-emerald-400",
      bar: "bg-emerald-500",
    },
  };

  const current = styles[tone];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${current.card}`}
    >
      <div className="relative">
        <div
          className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${current.icon}`}
        >
          {icon}
        </div>

        <p
          className={`text-[10px] font-black uppercase tracking-[0.18em] ${current.label}`}
        >
          {label}
        </p>

        <p className="mt-1 truncate text-xl font-black text-slate-900 dark:text-white">
          {value}
        </p>

        {detail && (
          <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
            {detail}
          </p>
        )}

        <div
          className={`mt-4 h-1 w-8 rounded-full ${current.bar}`}
        />
      </div>
    </div>
  );
}

/* =========================================================
   LEARNING CARD
========================================================= */

function LearningCard({
  title,
  subtitle,
  icon,
  tone,
  onClick,
}: {
  title: string;
  subtitle: string;
  icon: ReactNode;
  tone: "indigo" | "emerald" | "rose" | "amber";
  onClick: () => void;
}) {
  const tones = {
    indigo: {
      card:
        "border-indigo-200 bg-indigo-50/80 dark:border-indigo-500/25 dark:bg-indigo-500/10",
      icon:
        "bg-indigo-500 text-white shadow-indigo-500/20",
      hover:
        "hover:border-indigo-300 hover:shadow-indigo-100/60 dark:hover:border-indigo-500/50",
      arrow:
        "text-indigo-300 group-hover:text-indigo-500 dark:text-indigo-500",
    },
    emerald: {
      card:
        "border-emerald-200 bg-emerald-50/80 dark:border-emerald-500/25 dark:bg-emerald-500/10",
      icon:
        "bg-emerald-500 text-white shadow-emerald-500/20",
      hover:
        "hover:border-emerald-300 hover:shadow-emerald-100/60 dark:hover:border-emerald-500/50",
      arrow:
        "text-emerald-300 group-hover:text-emerald-500 dark:text-emerald-500",
    },
    rose: {
      card:
        "border-rose-200 bg-rose-50/80 dark:border-rose-500/25 dark:bg-rose-500/10",
      icon:
        "bg-rose-500 text-white shadow-rose-500/20",
      hover:
        "hover:border-rose-300 hover:shadow-rose-100/60 dark:hover:border-rose-500/50",
      arrow:
        "text-rose-300 group-hover:text-rose-500 dark:text-rose-500",
    },
    amber: {
      card:
        "border-amber-200 bg-amber-50/80 dark:border-amber-500/25 dark:bg-amber-500/10",
      icon:
        "bg-amber-500 text-white shadow-amber-500/20",
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
      className={`group relative flex min-h-[185px] flex-col gap-5 overflow-hidden rounded-2xl border p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl dark:hover:bg-white/[0.05] ${current.card} ${current.hover}`}
    >
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
   MAIN
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
     LANGUAGE
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
     DAILY CHEST
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
    [
      user?.streak,
      user?.lastActivityDate,
    ]
  );

  const last7Days = useMemo(
    () => getLast7Days(),
    [
      user?.streak,
      user?.lastActivityDate,
    ]
  );

  const totalXP = user?.totalXP;

  useEffect(() => {
    if (!user) return;

    checkBadges({
      totalXP: user.totalXP,
      streak: computedStreak,
    });

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
    xpRequiredForLevel(
      user.level
    );

  const xpProgress = Math.min(
    Math.max(
      (xpCurrent /
        xpNeededForNext) *
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
      } = await rpcClient.rpc(
        "complete_learning_activity",
        {
          p_kind: "daily_goal",
          p_ref: today,
        }
      );

      if (error) {
        const msg =
          String(error.message || "");

        if (
          msg.includes(
            "activity_already_completed"
          )
        ) {
          window.alert(
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
          window.alert(
            "Je bent niet meer ingelogd. Log opnieuw in."
          );
        } else if (
          msg.includes(
            "daily_xp_cap_reached"
          )
        ) {
          window.alert(
            "Dagelijkse XP-limiet bereikt. Probeer morgen opnieuw."
          );
        } else {
          console.error(
            "complete_learning_activity failed:",
            error
          );

          window.alert(
            "Kon dagelijkse XP-bonus niet claimen. Controleer de database."
          );
        }

        return;
      }

      const payload = data as {
        xpAwarded?: number;
      } | null;

      const xpAwarded =
        payload?.xpAwarded ??
        DAILY_XP_REWARD;

      window.alert(
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
      await rpcClient.rpc(
        "buy_streak_shield"
      );

    if (error) {
      console.error(
        "buy_streak_shield failed:",
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
    } = await rpcClient.rpc(
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
    setGeneratedGiftCode(
      String(data)
    );

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
    } = await rpcClient.rpc(
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

    const reward =
      data as {
        prizeType:
          | "coins"
          | "shield";
        prizeAmount: number;
      };

    if (
      reward.prizeType ===
      "coins"
    ) {
      setRedeemMessage(
        t(
          "dashboard.giftRedeemedCoins"
        ).replace(
          "{amount}",
          String(
            reward.prizeAmount
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
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-indigo-100/60 blur-[100px] dark:bg-indigo-600/20" />

          <div className="absolute -right-32 top-1/3 h-[450px] w-[450px] rounded-full bg-purple-100/50 blur-[90px] dark:bg-purple-600/15" />

          <div className="absolute bottom-0 left-1/4 h-[350px] w-[350px] rounded-full bg-blue-100/40 blur-[80px] dark:bg-blue-600/10" />
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
                      <span className="w-10 text-4xl transition-all duration-300 group-hover:scale-125">
                        {lang.flag}
                      </span>

                      <div className="flex-1">
                        <p className="text-base font-black text-slate-900 dark:text-white">
                          {t(
                            lang.nameKey
                          )}
                        </p>

                        <p className="text-xs text-slate-400 dark:text-slate-500">
                          Kies deze taal om te beginnen
                        </p>
                      </div>

                      <ChevronRight className="h-5 w-5 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-indigo-500 dark:text-slate-600" />
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
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -left-40 -top-40 h-[620px] w-[620px] rounded-full bg-indigo-100/60 blur-[120px] dark:bg-indigo-600/20" />

        <div className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-100/50 blur-[100px] dark:bg-purple-600/15" />

        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-[90px] dark:bg-blue-600/10" />
      </div>

      {newBadge && (
        <BadgeNotification
          badge={newBadge}
          onDone={clearNewBadge}
        />
      )}

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="mb-7">
          <p className="mb-1 text-[10px] font-black uppercase tracking-[0.28em] text-indigo-500 dark:text-indigo-400">
            {UI_TEXT.dashboard}
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
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-lg shadow-sm ring-1 ring-slate-200 dark:bg-white/5 dark:ring-white/10">
                {selectedLang.flag}
              </span>

              <span className="text-sm text-slate-500 dark:text-slate-400">
                {t(
                  "dashboard.learningLanguage"
                )}
              </span>

              <strong className="text-sm font-bold text-slate-800 dark:text-white">
                {t(
                  selectedLang.nameKey
                )}
              </strong>

              <button
                type="button"
                onClick={() =>
                  setLangChosen(false)
                }
                className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-600 dark:bg-white/[0.06] dark:text-slate-400"
              >
                {t(
                  "dashboard.changeLanguage"
                )}
              </button>
            </div>
          )}
        </header>

        {/* =====================================================
            LEGEND ARENA — MAIN FEATURE
        ===================================================== */}

        <section className="mb-8">
          <button
            type="button"
            onClick={() =>
              navigate("/arena")
            }
            aria-label={
              UI_TEXT.enterArena
            }
            className="group relative block w-full overflow-hidden rounded-[34px] p-[1px] text-left shadow-[0_28px_85px_-35px_rgba(79,70,229,.72)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_34px_95px_-36px_rgba(79,70,229,.82)] active:translate-y-0"
          >
            {/* Gradient edge */}
            <div className="absolute inset-0 rounded-[34px] bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500" />

            <div className="relative overflow-hidden rounded-[33px] bg-[#080b16]">
              {/* Atmosphere */}
              <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-[100px]" />

              <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-violet-500/20 blur-[100px]" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[90px]" />

              {/* Decorative circles */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-[310px] w-[310px] rounded-full border border-white/[0.05]" />

              <div className="pointer-events-none absolute -right-5 -top-5 h-[190px] w-[190px] rounded-full border border-white/[0.04]" />

              <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-10">
                {/* TROPHY */}
                <div className="mx-auto lg:mx-0">
                  <div className="relative">
                    <div className="absolute inset-0 scale-90 rounded-[32px] bg-indigo-500/35 blur-2xl transition-transform duration-500 group-hover:scale-110" />

                    <div className="relative flex h-28 w-28 items-center justify-center rounded-[30px] border border-white/10 bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 shadow-[0_18px_45px_-12px_rgba(99,102,241,.85)] ring-1 ring-white/10 sm:h-32 sm:w-32">
                      <Trophy className="h-14 w-14 text-white drop-shadow-lg sm:h-16 sm:w-16" />

                      <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-sm backdrop-blur-md">
                        ✦
                      </span>
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="min-w-0 text-center lg:text-left">
                  <div className="mb-3 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                    <span className="rounded-full bg-indigo-500/20 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300 ring-1 ring-indigo-400/20">
                      {UI_TEXT.primaryBadge}
                    </span>

                    <span className="rounded-full bg-white/[0.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 ring-1 ring-white/[0.06]">
                      {UI_TEXT.season}
                    </span>
                  </div>

                  <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[42px]">
                    {t(
                      "dashboard.arenaTitle"
                    )}
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-slate-300 sm:text-base">
                    {t(
                      "dashboard.arenaSub"
                    ) ||
                      UI_TEXT.arenaFallbackDescription}
                  </p>

                  {/* USER ARENA STATUS */}
                  <div className="mt-5 grid grid-cols-3 gap-2 sm:max-w-lg">
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.04] px-3 py-3">
                      <div className="flex items-center justify-center gap-1.5 lg:justify-start">
                        <Star className="h-3.5 w-3.5 text-yellow-300" />

                        <span className="text-lg font-black text-white">
                          {user.level}
                        </span>
                      </div>

                      <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                        {
                          UI_TEXT.arenaLevel
                        }
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.04] px-3 py-3">
                      <div className="flex items-center justify-center gap-1.5 lg:justify-start">
                        <Zap className="h-3.5 w-3.5 text-cyan-300" />

                        <span className="text-lg font-black text-white">
                          {user.totalXP.toLocaleString()}
                        </span>
                      </div>

                      <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                        {
                          UI_TEXT.arenaXP
                        }
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.04] px-3 py-3">
                      <div className="flex items-center justify-center gap-1.5 lg:justify-start">
                        <Flame className="h-3.5 w-3.5 text-orange-300" />

                        <span className="text-lg font-black text-white">
                          {
                            computedStreak
                          }
                        </span>
                      </div>

                      <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                        {
                          UI_TEXT.arenaStreak
                        }
                      </p>
                    </div>
                  </div>
                </div>

                {/* MAIN ARENA BUTTON */}
                <div className="flex justify-center lg:justify-end">
                  <span className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-black text-slate-900 shadow-2xl transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-white/10">
                    {UI_TEXT.arenaOpen}

                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>

              {/* JOURNEY */}
              <div className="border-t border-white/[0.07] bg-white/[0.025] px-6 py-4 sm:px-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 sm:text-left">
                    {UI_TEXT.arenaJourney}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-semibold text-slate-400 sm:justify-end">
                    <span>
                      {UI_TEXT.arenaLevels}
                    </span>

                    <span className="text-slate-700">
                      •
                    </span>

                    <span>
                      {UI_TEXT.arenaUnlock}
                    </span>

                    <span className="text-slate-700">
                      •
                    </span>

                    <span>
                      {UI_TEXT.arenaPlay}
                    </span>

                    <span className="text-slate-700">
                      •
                    </span>

                    <span className="font-black text-indigo-300">
                      {UI_TEXT.arenaEarn}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </section>

        {/* =====================================================
            AI COMPANION
        ===================================================== */}

        <DashboardRobotMascot
          message={t(mascot.key)}
          mood={mascotMood}
          description={
            UI_TEXT.mascotDescription
          }
          smartFeedback={
            UI_TEXT.smartFeedback
          }
          alwaysReady={
            UI_TEXT.alwaysReady
          }
        />

        {/* =====================================================
            TODAY
        ===================================================== */}

        <section className="mb-8">
          <div className="mb-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              {UI_TEXT.today}
            </p>

            <h2 className="mt-1 text-xl font-black tracking-tight text-slate-900 dark:text-white">
              {UI_TEXT.dailyProgress}
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {/* DAILY GOAL */}
            <div className="rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm dark:border-white/[0.06] dark:bg-white/[0.03]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                  <Zap className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                    {t(
                      "dashboard.dailyGoal"
                    )}
                  </p>

                  <p className="mt-0.5 truncate text-sm font-bold text-slate-800 dark:text-white">
                    {dailyGoal.percent >=
                    100
                      ? t(
                          "dashboard.dailyGoalReached"
                        )
                      : `${dailyGoal.current} / ${dailyGoal.goal} ${t(
                          "topbar.xp"
                        )}`}
                  </p>
                </div>
              </div>
            </div>

            {/* STREAK */}
            <div className="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm dark:border-white/[0.06] dark:bg-white/[0.03]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500 dark:bg-orange-500/10 dark:text-orange-300">
                  <Flame className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                    {t(
                      "dashboard.streak"
                    )}
                  </p>

                  <p className="mt-0.5 truncate text-sm font-bold text-slate-800 dark:text-white">
                    {computedStreak}{" "}
                    {t(
                      "dashboard.days"
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* CHEST */}
            <button
              type="button"
              onClick={claimChest}
              disabled={
                chestClaimedToday ||
                claiming
              }
              className={`rounded-2xl border p-4 text-left shadow-sm transition-all ${
                chestClaimedToday
                  ? "cursor-default border-slate-200 bg-slate-50 dark:border-white/[0.06] dark:bg-white/[0.02]"
                  : "border-amber-200 bg-amber-50 hover:-translate-y-0.5 hover:shadow-md dark:border-amber-500/20 dark:bg-white/[0.03]"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-lg dark:bg-amber-500/10">
                  {chestClaimedToday
                    ? "✅"
                    : "🎁"}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                    {t(
                      "dashboard.chestTitle"
                    )}
                  </p>

                  <p className="mt-0.5 truncate text-sm font-bold text-slate-800 dark:text-white">
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
                  <span className="rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-black text-white">
                    {claiming
                      ? "..."
                      : t(
                          "dashboard.chestButton"
                        )}
                  </span>
                )}
              </div>
            </button>
          </div>
        </section>

        {/* =====================================================
            PROGRESS
        ===================================================== */}

        <section className="mb-8">
          <div className="mb-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              {UI_TEXT.progress}
            </p>

            <h2 className="mt-1 text-xl font-black tracking-tight text-slate-900 dark:text-white">
              {t(
                "dashboard.progressTitle"
              ) || UI_TEXT.progress}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <StatCard
              icon={
                <Star className="h-5 w-5" />
              }
              label={t(
                "dashboard.level"
              )}
              value={String(
                user.level
              )}
              tone="amber"
            />

            <StatCard
              icon={
                <Zap className="h-5 w-5" />
              }
              label={t(
                "dashboard.totalXP"
              )}
              value={user.totalXP.toLocaleString()}
              tone="indigo"
            />

            <StatCard
              icon={
                <Flame className="h-5 w-5" />
              }
              label={t(
                "dashboard.streak"
              )}
              value={`${computedStreak} ${t(
                "dashboard.days"
              )}`}
              detail={
                !hasActivityToday
                  ? t(
                      "dashboard.streakAtRisk"
                    )
                  : undefined
              }
              tone="orange"
            />

            <StatCard
              icon={
                selectedLang ? (
                  <span className="text-lg">
                    {
                      selectedLang.flag
                    }
                  </span>
                ) : (
                  <span className="text-lg">
                    🌍
                  </span>
                )
              }
              label={t(
                "dashboard.language"
              )}
              value={
                selectedLang
                  ? t(
                      selectedLang.nameKey
                    )
                  : t(
                      "dashboard.none"
                    )
              }
              tone="emerald"
            />
          </div>
        </section>

        {/* =====================================================
            XP + DAILY GOAL
        ===================================================== */}

        <section className="mb-8 grid gap-4 xl:grid-cols-2">
          {/* XP */}
          <div className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-sm dark:border-white/[0.06] dark:bg-white/[0.03]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 to-transparent dark:from-indigo-500/8" />

            <div className="relative p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
                    {t(
                      "dashboard.level"
                    )}{" "}
                    {user.level}
                  </p>

                  <h3 className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
                    {t(
                      "dashboard.xpProgress"
                    )}{" "}
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                      {user.level + 1}
                    </span>
                  </h3>
                </div>

                <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-black text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300">
                  {Math.round(
                    xpProgress
                  )}
                  %
                </span>
              </div>

              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {xpCurrent.toLocaleString()}
                    <span className="font-normal text-slate-400">
                      {" "}
                      /{" "}
                      {xpNeededForNext.toLocaleString()}{" "}
                      {t(
                        "topbar.xp"
                      )}
                    </span>
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200 dark:bg-white/5 dark:ring-white/10">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${xpProgress}%`,
                      background:
                        "linear-gradient(90deg,#6366f1,#a855f7)",
                      boxShadow:
                        "0 0 14px rgba(99,102,241,.45)",
                    }}
                  />
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                {xpNeeded > 0 ? (
                  <>
                    {t(
                      "dashboard.needMoreXP"
                    )}{" "}
                    <strong className="text-slate-800 dark:text-white">
                      {
                        xpNeeded
                      }
                    </strong>{" "}
                    {t(
                      "dashboard.moreXP"
                    )}{" "}
                    <strong className="text-slate-800 dark:text-white">
                      {user.level +
                        1}
                    </strong>
                    .
                  </>
                ) : (
                  <strong className="text-indigo-600 dark:text-indigo-400">
                    {t(
                      "dashboard.levelUp"
                    )}
                  </strong>
                )}
              </p>
            </div>
          </div>

          {/* DAILY GOAL */}
          <div className="relative overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm dark:border-white/[0.06] dark:bg-white/[0.03]">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 to-transparent dark:from-orange-500/6" />

            <div className="relative p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 dark:text-orange-400">
                    {t(
                      "dashboard.dailyGoal"
                    )}
                  </p>

                  <h3 className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
                    {dailyGoal.current}{" "}
                    /{" "}
                    {dailyGoal.goal}
                  </h3>
                </div>

                <div className="relative h-20 w-20 shrink-0">
                  <svg
                    className="-rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="9"
                      className="text-slate-100 dark:text-white/5"
                    />

                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="url(#dashboardGoalGradient)"
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeDasharray={
                        2 *
                        Math.PI *
                        42
                      }
                      strokeDashoffset={
                        2 *
                        Math.PI *
                        42 *
                        (1 -
                          Math.min(
                            dailyGoal.percent,
                            100
                          ) /
                            100)
                      }
                    />

                    <defs>
                      <linearGradient
                        id="dashboardGoalGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
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
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-black text-slate-900 dark:text-white">
                      {Math.round(
                        Math.min(
                          dailyGoal.percent,
                          100
                        )
                      )}
                      %
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700"
                    style={{
                      width: `${Math.min(
                        dailyGoal.percent,
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3 border-t border-slate-100 pt-5 dark:border-white/5">
                <span className="text-2xl">
                  {hasActivityToday
                    ? "🔥"
                    : "💤"}
                </span>

                <div>
                  <p className="text-sm font-bold text-slate-800 dark:text-white">
                    {
                      computedStreak
                    }{" "}
                    {t(
                      "dashboard.streakActive"
                    )}
                  </p>

                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {
                      streakWeather.emoji
                    }{" "}
                    {t(
                      streakWeather.key
                    )}
                  </p>

                  {!hasActivityToday && (
                    <p className="mt-1 text-xs font-semibold text-orange-500 dark:text-orange-400">
                      {t(
                        "dashboard.streakAtRisk"
                      )}
                    </p>
                  )}

                  {hasShield && (
                    <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-cyan-100 px-2 py-1 text-[10px] font-black text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300">
                      <Shield className="h-3 w-3" />

                      {t(
                        "dashboard.shieldActive"
                      )}
                    </span>
                  )}

                  {!hasShield &&
                    !hasActivityToday && (
                      <button
                        type="button"
                        onClick={
                          buyStreakShield
                        }
                        className="mt-2 inline-flex items-center gap-1 rounded-full bg-cyan-50 px-2 py-1 text-[10px] font-black text-cyan-700 transition hover:bg-cyan-100 dark:bg-cyan-500/10 dark:text-cyan-300"
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
                    )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LAST 7 DAYS
        ===================================================== */}

        <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/[0.06] dark:bg-white/[0.03]">
          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  {t(
                    "dashboard.streak"
                  )}
                </p>

                <h2 className="mt-1 text-lg font-black text-slate-900 dark:text-white">
                  {t(
                    "dashboard.last7days"
                  )}
                </h2>
              </div>

              {computedStreak >=
                7 && (
                <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-black text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                  ⭐{" "}
                  {t(
                    "dashboard.milestone7"
                  )}
                </span>
              )}
            </div>

            <div className="mt-5 flex items-center justify-between gap-1">
              {last7Days.map(
                (day) => (
                  <div
                    key={day.date}
                    className="flex flex-1 flex-col items-center gap-2"
                    title={day.date}
                  >
                    <span className="text-[9px] font-bold text-slate-400">
                      {
                        day.label
                      }
                    </span>

                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm ${
                        day.active
                          ? "bg-orange-100 text-orange-500 ring-2 ring-orange-300 dark:bg-orange-500/20 dark:text-orange-300 dark:ring-1 dark:ring-orange-500/40"
                          : "bg-slate-100 text-slate-300 dark:bg-white/[0.03] dark:text-slate-700"
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
              30 && (
              <div className="mt-5 rounded-xl bg-purple-50 px-4 py-3 text-center text-xs font-black text-purple-700 dark:bg-purple-500/10 dark:text-purple-300">
                🏆{" "}
                {t(
                  "dashboard.milestone30"
                )}
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            LEARNING HUB
        ===================================================== */}

        <section className="mb-8">
          <div className="mb-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
              {UI_TEXT.learning}
            </p>

            <h2 className="mt-1 text-xl font-black tracking-tight text-slate-900 dark:text-white">
              {UI_TEXT.learningTitle}
            </h2>

            <p className="mt-1 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
              {UI_TEXT.learningDescription}
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
              onClick={() =>
                navigate(
                  "/grammar"
                )
              }
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

        {/* =====================================================
            LANGUAGE
        ===================================================== */}

        <section className="mb-8">
          <div className="mb-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              {UI_TEXT.language}
            </p>

            <h2 className="mt-1 text-lg font-black text-slate-900 dark:text-white">
              {UI_TEXT.languageChoose}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {LEARNING_LANGUAGES.map(
              (lang) => {
                const selected =
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
                    className={`relative flex flex-col items-center gap-2 rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                      selected
                        ? "border-indigo-400 bg-indigo-50 shadow-md ring-2 ring-indigo-200 dark:border-indigo-500/60 dark:bg-indigo-500/10 dark:ring-indigo-500/30"
                        : "border-slate-200 bg-white dark:border-white/[0.06] dark:bg-white/[0.03]"
                    }`}
                  >
                    <span className="text-3xl">
                      {lang.flag}
                    </span>

                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {t(
                        lang.nameKey
                      )}
                    </span>

                    {selected && (
                      <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-white shadow-md">
                        <Check className="h-3 w-3" />
                      </span>
                    )}
                  </button>
                );
              }
            )}
          </div>
        </section>

        {/* =====================================================
            GIFTS
        ===================================================== */}

        <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/[0.06] dark:bg-white/[0.03]">
          <button
            type="button"
            onClick={() =>
              setGiftsOpen(
                (value) =>
                  !value
              )
            }
            aria-expanded={
              giftsOpen
            }
            className="flex w-full items-center justify-between p-5 text-left"
          >
            <span className="flex items-center gap-2 text-sm font-black text-slate-800 dark:text-white">
              <GiftIcon className="h-4 w-4 text-indigo-500" />

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
            />
          </button>

          {giftsOpen && (
            <div className="space-y-6 border-t border-slate-200 p-5 dark:border-white/[0.06]">
              <div>
                <p className="mb-3 text-xs font-bold text-slate-500 dark:text-slate-400">
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
                        className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300"
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
                    className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    🛡️{" "}
                    {t(
                      "dashboard.giftShield"
                    )}
                  </button>
                </div>

                {giftSendError && (
                  <p className="mt-2 text-xs font-semibold text-orange-500">
                    {
                      giftSendError
                    }
                  </p>
                )}

                {generatedGiftCode && (
                  <div className="mt-4 rounded-xl border border-indigo-100 bg-indigo-50/60 p-4 dark:border-indigo-900/40 dark:bg-indigo-950/20">
                    <p className="mb-2 text-xs text-slate-500 dark:text-slate-400">
                      {t(
                        "dashboard.giftGenerated"
                      )}
                    </p>

                    <code className="block break-all rounded-lg bg-white px-3 py-2 text-xs text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                      {
                        generatedGiftCode
                      }
                    </code>

                    <button
                      type="button"
                      onClick={
                        shareGiftCode
                      }
                      className="mt-3 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-bold text-white hover:bg-indigo-700"
                    >
                      {t(
                        "dashboard.giftShareButton"
                      )}
                    </button>
                  </div>
                )}
              </div>

              <div>
                <p className="mb-3 text-xs font-bold text-slate-500 dark:text-slate-400">
                  {t(
                    "dashboard.giftRedeemTitle"
                  )}
                </p>

                <div className="flex gap-2">
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
                    className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-700 outline-none focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  />

                  <button
                    type="button"
                    onClick={
                      redeemGift
                    }
                    disabled={
                      !redeemInput.trim()
                    }
                    className="shrink-0 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {t(
                      "dashboard.giftRedeemButton"
                    )}
                  </button>
                </div>

                {redeemMessage && (
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    {
                      redeemMessage
                    }
                  </p>
                )}
              </div>
            </div>
          )}
        </section>

        {/* =====================================================
            ADVERTISEMENT
            Geen props omdat jouw AdSlot geen props accepteert.
        ===================================================== */}

        <div className="mb-8">
          <AdSlot />
        </div>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <div className="pb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm dark:border-white/[0.06] dark:bg-white/[0.03]">
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