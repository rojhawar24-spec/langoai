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
  ChevronDown,
  ChevronRight,
  Gift,
  Flame,
  FileText,
  Languages,
  Lock,
  Shield,
  Sparkles,
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

const DAILY_CHEST_KEY = "langlearn_daily_chest_date";
const DAILY_CHEST_REWARD = 8;
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

type MascotMood = "greeting" | "happy" | "supportive";

const MASCOT_META: Record<
  MascotMood,
  { key: TranslationKey; accent: string }
> = {
  greeting: {
    key: "mascot.greeting",
    accent: "125,211,252",
  },
  happy: {
    key: "mascot.happy",
    accent: "110,231,183",
  },
  supportive: {
    key: "mascot.supportive",
    accent: "252,211,142",
  },
};

type GiftPrize =
  | {
      prizeType: "coins";
      prizeAmount: number;
    }
  | {
      prizeType: "shield";
      prizeAmount: number;
    };

type RpcClient = {
  rpc: (
    functionName: string,
    args?: Record<string, unknown>,
  ) => Promise<{
    data: any;
    error: any;
  }>;
};

const rpcClient = supabase as unknown as RpcClient;

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function DashboardRobotMascot({
  message,
  mood,
}: {
  message: string;
  mood: MascotMood;
}) {
  const meta = MASCOT_META[mood];

  return (
    <section className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_18px_50px_-30px_rgba(15,23,42,0.28)] dark:border-white/[0.07] dark:bg-[#111722] dark:shadow-[0_28px_70px_-34px_rgba(0,0,0,0.8)]">
      <style>{`
        @keyframes dashboardRobotFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -5px, 0);
          }
        }

        @keyframes dashboardRobotBlink {
          0%, 90%, 100% {
            transform: scaleY(1);
          }
          93%, 97% {
            transform: scaleY(.12);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dashboard-robot-float,
          .dashboard-robot-blink {
            animation: none !important;
          }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(99,102,241,.10),transparent_28%),radial-gradient(circle_at_80%_100%,rgba(56,189,248,.08),transparent_30%)]" />

      <div className="relative grid items-center gap-6 p-5 sm:grid-cols-[180px_minmax(0,1fr)] sm:p-7">
        <div
          className="relative mx-auto h-[190px] w-[170px]"
          style={{ perspective: "900px" }}
          aria-hidden="true"
        >
          <div
            className="dashboard-robot-float relative h-full w-full"
            style={{
              animation: "dashboardRobotFloat 4.8s ease-in-out infinite",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="absolute bottom-1 left-1/2 h-4 w-28 -translate-x-1/2 rounded-[50%] bg-black/10 blur-lg dark:bg-black/40" />

            <div className="absolute bottom-[8%] left-[33%] h-[12%] w-[14%] rounded-[40%] border border-slate-400/50 bg-gradient-to-b from-slate-100 via-slate-300 to-slate-500" />
            <div className="absolute bottom-[8%] right-[33%] h-[12%] w-[14%] rounded-[40%] border border-slate-400/50 bg-gradient-to-b from-slate-100 via-slate-300 to-slate-500" />

            <div className="absolute bottom-[12%] left-1/2 h-[34%] w-[56%] -translate-x-1/2 rounded-[40%_40%_45%_45%] bg-slate-500/30 blur-[1px]" />

            <div
              className="absolute bottom-[10%] left-1/2 h-[36%] w-[58%] -translate-x-1/2 overflow-hidden rounded-[42%_42%_48%_48%] border-2 border-slate-300 bg-gradient-to-b from-white via-slate-100 to-slate-300 shadow-[inset_0_10px_20px_rgba(255,255,255,.9),inset_0_-12px_22px_rgba(15,23,42,.15),0_14px_28px_rgba(15,23,42,.16)]"
              style={{
                transform: "translateZ(6px) translateX(-50%)",
              }}
            >
              <div className="absolute inset-x-[18%] top-[28%] h-px bg-slate-400/30" />
              <div className="absolute bottom-[15%] left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-slate-400" />
            </div>

            <div
              className="absolute left-0 top-[49%] h-8 w-14 rounded-full border-2 border-slate-400/60 bg-gradient-to-b from-white to-slate-300 shadow-lg"
              style={{
                transform: "translateZ(4px) rotate(16deg)",
                transformOrigin: "right center",
              }}
            >
              <span className="absolute -right-2 top-1/2 h-5 w-4 -translate-y-1/2 rounded-full border border-slate-400/70 bg-slate-500" />
            </div>

            <div
              className="absolute right-0 top-[49%] h-8 w-14 rounded-full border-2 border-slate-400/60 bg-gradient-to-b from-white to-slate-300 shadow-lg"
              style={{
                transform: "translateZ(4px) rotate(-16deg)",
                transformOrigin: "left center",
              }}
            >
              <span className="absolute -left-2 top-1/2 h-5 w-4 -translate-y-1/2 rounded-full border border-slate-400/70 bg-slate-500" />
            </div>

            <div
              className="absolute left-1/2 top-0 h-[64%] w-[82%] -translate-x-1/2 rounded-[46%] bg-slate-500/35"
              style={{
                transform: "translateZ(-7px) translateX(-50%)",
              }}
            />

            <div className="absolute -left-[4%] top-[27%] h-[24%] w-[14%] rounded-full border-2 border-slate-400/60 bg-gradient-to-b from-slate-100 to-slate-500 shadow-md">
              <div className="absolute inset-[4px] rounded-full bg-slate-800" />
            </div>

            <div className="absolute -right-[4%] top-[27%] h-[24%] w-[14%] rounded-full border-2 border-slate-400/60 bg-gradient-to-b from-slate-100 to-slate-500 shadow-md">
              <div className="absolute inset-[4px] rounded-full bg-slate-800" />
            </div>

            <div
              className="absolute left-1/2 top-0 h-[64%] w-[78%] -translate-x-1/2 rounded-[46%] border-2 border-slate-300 bg-gradient-to-b from-white via-slate-50 to-slate-200 shadow-[inset_0_12px_20px_rgba(255,255,255,.95),inset_0_-16px_24px_rgba(15,23,42,.12),0_18px_30px_rgba(15,23,42,.18)]"
              style={{
                transform: "translateZ(15px) translateX(-50%)",
              }}
            >
              <div className="absolute inset-x-[22%] top-[9%] h-px bg-slate-300" />

              <div className="absolute inset-x-[10%] top-[23%] bottom-[10%] overflow-hidden rounded-[40%] bg-[radial-gradient(circle_at_50%_18%,#1e293b_0%,#0f172a_55%,#020617_100%)] shadow-[inset_0_0_26px_rgba(0,0,0,.85)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_14%,rgba(255,255,255,.12),transparent_28%)]" />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div
                    className="dashboard-robot-blink flex items-center gap-6"
                    style={{
                      animation:
                        "dashboardRobotBlink 5.8s ease-in-out infinite",
                    }}
                  >
                    <span
                      className="h-3.5 w-3.5 rounded-full"
                      style={{
                        background: `rgb(${meta.accent})`,
                        boxShadow: `0 0 10px rgba(${meta.accent},.75)`,
                      }}
                    />
                    <span
                      className="h-3.5 w-3.5 rounded-full"
                      style={{
                        background: `rgb(${meta.accent})`,
                        boxShadow: `0 0 10px rgba(${meta.accent},.75)`,
                      }}
                    />
                  </div>

                  <svg width="58" height="24" viewBox="0 0 58 24">
                    <path
                      d={
                        mood === "happy"
                          ? "M10 10 Q29 24 48 10"
                          : mood === "supportive"
                            ? "M15 11 Q29 16 43 11"
                            : "M12 10 Q29 20 46 10"
                      }
                      fill="none"
                      stroke={`rgb(${meta.accent})`}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 dark:border-white/[0.07] dark:bg-white/[0.04] dark:text-slate-400">
            <Sparkles className="h-3.5 w-3.5" />
            AI Learning Companion
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 dark:text-white sm:text-[28px]">
            {message}
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
            Stay focused, keep your streak alive, and turn every session into
            real progress.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-600 dark:bg-white/[0.05] dark:text-slate-300">
              Smart feedback
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-600 dark:bg-white/[0.05] dark:text-slate-300">
              Daily guidance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  action,
}: {
  eyebrow?: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        {eyebrow && (
          <p className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
            {eyebrow}
          </p>
        )}
        <h2 className="text-xl font-black tracking-tight text-slate-950 dark:text-white sm:text-2xl">
          {title}
        </h2>
      </div>

      {action}
    </div>
  );
}

function MetricCard({
  icon,
  label,
  value,
  detail,
  tone = "neutral",
}: {
  icon: ReactNode;
  label: string;
  value: string;
  detail?: string;
  tone?: "indigo" | "orange" | "emerald" | "amber" | "neutral";
}) {
  const tones = {
    indigo: {
      icon: "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300",
      dot: "bg-indigo-500",
    },
    orange: {
      icon: "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300",
      dot: "bg-orange-500",
    },
    emerald: {
      icon: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300",
      dot: "bg-emerald-500",
    },
    amber: {
      icon: "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300",
      dot: "bg-amber-500",
    },
    neutral: {
      icon: "bg-slate-100 text-slate-600 dark:bg-white/[0.05] dark:text-slate-300",
      dot: "bg-slate-400",
    },
  }[tone];

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_12px_32px_-24px_rgba(15,23,42,.25)] dark:border-white/[0.07] dark:bg-[#111722]">
      <div className="flex items-start justify-between gap-3">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-xl",
            tones.icon,
          )}
        >
          {icon}
        </div>

        <span className={cn("mt-1 h-1.5 w-1.5 rounded-full", tones.dot)} />
      </div>

      <p className="mt-4 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-xl font-black tracking-tight text-slate-950 dark:text-white">
        {value}
      </p>

      {detail && (
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          {detail}
        </p>
      )}
    </div>
  );
}

function ActionCard({
  icon,
  title,
  description,
  onClick,
  tone,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  tone: "indigo" | "rose" | "emerald" | "amber";
}) {
  const styles = {
    indigo:
      "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300",
    rose:
      "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300",
    emerald:
      "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300",
    amber:
      "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300",
  }[tone];

  return (
    <button
      type="button"
      onClick={onClick}
      className="group rounded-2xl border border-slate-200/80 bg-white p-5 text-left shadow-[0_14px_34px_-26px_rgba(15,23,42,.26)] transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,.34)] dark:border-white/[0.07] dark:bg-[#111722] dark:hover:border-white/[0.12]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className={cn("flex h-11 w-11 items-center justify-center rounded-xl", styles)}>
          {icon}
        </div>

        <ChevronRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-slate-500 dark:text-slate-600 dark:group-hover:text-slate-300" />
      </div>

      <div className="mt-5">
        <p className="text-base font-black text-slate-950 dark:text-white">
          {title}
        </p>
        <p className="mt-1.5 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
    </button>
  );
}

export default function DashboardPage() {
  const { user, updateProfile, refreshUser } = useAuth();
  const { t } = useTranslate();
  const navigate = useNavigate();

  useStreakReconciler();

  const { newBadge, checkBadges, clearNewBadge } = useBadgeChecker();

  const [langChosen, setLangChosen] = useState(false);
  const [chestClaimedToday, setChestClaimedToday] = useState(false);

  const [giftsOpen, setGiftsOpen] = useState(false);
  const [generatedGiftCode, setGeneratedGiftCode] = useState<string | null>(
    null,
  );
  const [giftSendError, setGiftSendError] = useState<string | null>(null);
  const [redeemInput, setRedeemInput] = useState("");
  const [redeemMessage, setRedeemMessage] = useState<string | null>(null);

  const hasShield = (user?.streakFreezes ?? 0) > 0;

  useEffect(() => {
    if (!user) return;

    const key = `langoai_language_chosen_${user.id ?? user.username}`;

    try {
      setLangChosen(localStorage.getItem(key) === "true");
    } catch {
      setLangChosen(false);
    }
  }, [user?.id, user?.username]);

  useEffect(() => {
    if (!user) return;

    try {
      const today = new Date().toISOString().slice(0, 10);
      setChestClaimedToday(
        localStorage.getItem(DAILY_CHEST_KEY) === today,
      );
    } catch {
      setChestClaimedToday(false);
    }
  }, [user?.id]);

  const dailyGoal = useMemo(
    () => getDailyGoalProgress(),
    [user?.totalXP],
  );

  const { streak: computedStreak, todayActive: hasActivityToday } =
    useMemo(
      () => computeStreak(),
      [user?.streak, user?.lastActivityDate],
    );

  const last7Days = useMemo(
    () => getLast7Days(),
    [user?.streak, user?.lastActivityDate],
  );

  const totalXP = user?.totalXP ?? 0;

  useEffect(() => {
    if (!user) return;

    checkBadges({
      totalXP: user.totalXP,
      streak: computedStreak,
    });

    // The checker itself handles persistence.
    // Keep it out of dependencies to avoid a checker -> user -> checker loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalXP, computedStreak]);

  if (!user) {
    return null;
  }

  const languageChoiceKey = `langoai_language_chosen_${user.id ?? user.username}`;

  const selectedLang = LEARNING_LANGUAGES.find(
    (lang) => lang.code === user.currentLanguage,
  );

  const level = user.level ?? 1;

  const xpNeededForNext = Math.max(
    xpForNextLevel(level),
    1,
  );

  const xpCurrent = Math.max(
    user.totalXP - xpRequiredForLevel(level),
    0,
  );

  const xpProgress = Math.min(
    (xpCurrent / xpNeededForNext) * 100,
    100,
  );

  const xpNeeded = Math.max(
    xpNeededForNext - xpCurrent,
    0,
  );

  const streakWeather =
    WEATHER_META[
      getStreakWeather(computedStreak, hasActivityToday)
    ] ?? WEATHER_META.cloudy;

  const mascotMood: MascotMood =
    !hasActivityToday && computedStreak > 0
      ? "supportive"
      : dailyGoal.percent >= 100 || computedStreak >= 7
        ? "happy"
        : "greeting";

  function selectLanguage(code: string) {
    updateProfile({
      currentLanguage: code,
    });

    try {
      localStorage.setItem(languageChoiceKey, "true");
    } catch {
      // UI still works if storage is unavailable.
    }

    setLangChosen(true);
  }

  async function claimChest() {
    if (chestClaimedToday) return;

    const { data, error } = await rpcClient.rpc(
      "claim_daily_chest",
    );

    if (error || !data) {
      const message = String(error?.message ?? "");

      if (
        message.includes("daily_chest_already_claimed")
      ) {
        setChestClaimedToday(true);

        try {
          localStorage.setItem(
            DAILY_CHEST_KEY,
            new Date().toISOString().slice(0, 10),
          );
        } catch {
          // ignore local cache errors
        }

        return;
      }

      console.error(
        "claim_daily_chest RPC failed:",
        error,
      );
      return;
    }

    try {
      localStorage.setItem(
        DAILY_CHEST_KEY,
        new Date().toISOString().slice(0, 10),
      );
    } catch {
      // ignore local cache errors
    }

    setChestClaimedToday(true);
    refreshUser();
  }

  async function buyStreakShield() {
    if (hasShield) return;

    const { error } = await rpcClient.rpc(
      "buy_streak_shield",
    );

    if (error) {
      console.error(
        "buy_streak_shield RPC failed:",
        error,
      );
      return;
    }

    refreshUser();
  }

  async function sendGift(
    payload:
      | { type: "coins"; amount: number }
      | { type: "shield" },
  ) {
    const { data, error } = await rpcClient.rpc(
      "create_gift_code",
      {
        p_prize_type: payload.type,
        p_prize_amount:
          payload.type === "coins" ? payload.amount : 0,
      },
    );

    if (error || !data) {
      setGiftSendError(
        t("dashboard.giftNotEnoughCoins"),
      );
      setGeneratedGiftCode(null);
      return;
    }

    setGiftSendError(null);
    setGeneratedGiftCode(String(data));
    refreshUser();
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
        // User cancelled sharing.
      }

      return;
    }

    try {
      await navigator.clipboard.writeText(
        generatedGiftCode,
      );

      window.alert(
        t("dashboard.giftCopiedConfirm"),
      );
    } catch {
      // Clipboard unavailable.
    }
  }

  async function redeemGift() {
    const trimmed = redeemInput.trim();

    if (!trimmed) {
      setRedeemMessage(
        t("dashboard.giftInvalidCode"),
      );
      return;
    }

    const { data, error } = await rpcClient.rpc(
      "redeem_gift_code",
      {
        p_code: trimmed,
      },
    );

    if (error || !data) {
      const message = String(
        error?.message ?? "",
      );

      if (message.includes("already_used")) {
        setRedeemMessage(
          t("dashboard.giftAlreadyUsed"),
        );
      } else {
        setRedeemMessage(
          t("dashboard.giftInvalidCode"),
        );
      }

      return;
    }

    const reward = data as GiftPrize;

    if (reward.prizeType === "coins") {
      setRedeemMessage(
        t("dashboard.giftRedeemedCoins").replace(
          "{amount}",
          String(reward.prizeAmount),
        ),
      );
    } else {
      setRedeemMessage(
        t("dashboard.giftRedeemedShield"),
      );
    }

    setRedeemInput("");
    refreshUser();
  }

  if (!langChosen) {
    return (
      <div className="min-h-screen bg-[#f6f7fb] px-4 py-10 dark:bg-[#0b0f16]">
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-lg items-center">
          <div className="w-full">
            <div className="mb-8">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-xl dark:bg-white dark:text-slate-950">
                <Languages className="h-7 w-7" />
              </div>

              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-indigo-500 dark:text-indigo-400">
                Lango AI
              </p>

              <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                {t("dashboard.welcome")}{" "}
                <span className="text-indigo-500">
                  {user.username}
                </span>
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {t("dashboard.chooseLanguage")}
              </p>
            </div>

            <div className="space-y-3">
              {LEARNING_LANGUAGES.map((lang) => (
                <button
                  type="button"
                  key={lang.code}
                  onClick={() =>
                    selectLanguage(lang.code)
                  }
                  className="group flex w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-[0_12px_32px_-26px_rgba(15,23,42,.3)] transition duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-[0_20px_40px_-26px_rgba(79,70,229,.32)] dark:border-white/[0.07] dark:bg-[#111722] dark:hover:border-indigo-400/30"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-2xl dark:bg-white/[0.05]">
                    {lang.flag}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-black text-slate-950 dark:text-white">
                      {t(lang.nameKey)}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      {t("dashboard.continueLearning")}
                    </p>
                  </div>

                  <ChevronRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-indigo-500 dark:text-slate-600" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-950 dark:bg-[#0b0f16] dark:text-white">
      <style>{`
        @keyframes dashboardHeroShine {
          0% { transform: translateX(-130%); opacity: 0; }
          15% { opacity: .7; }
          45% { opacity: 0; }
          100% { transform: translateX(150%); opacity: 0; }
        }

        @keyframes dashboardArenaFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .dashboard-arena-motion {
            animation: none !important;
          }
        }
      `}</style>

      {newBadge && (
        <BadgeNotification
          badge={newBadge}
          onDone={clearNewBadge}
        />
      )}

      <main className="mx-auto max-w-6xl px-4 py-7 sm:px-6 sm:py-10">
        {/* HEADER */}
        <header className="mb-7 flex flex-col gap-4 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-indigo-500 dark:text-indigo-400">
              Dashboard
            </p>

            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-[38px]">
              {t("dashboard.welcome")}{" "}
              <span className="text-indigo-500">
                {user.username}
              </span>
            </h1>

            <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              {selectedLang && (
                <>
                  <span className="text-base">
                    {selectedLang.flag}
                  </span>

                  <span>
                    {t("dashboard.learningLanguage")}{" "}
                    <strong className="font-bold text-slate-800 dark:text-slate-200">
                      {t(selectedLang.nameKey)}
                    </strong>
                  </span>
                </>
              )}

              <button
                type="button"
                onClick={() => setLangChosen(false)}
                className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-500 transition hover:border-indigo-200 hover:text-indigo-600 dark:border-white/[0.07] dark:bg-white/[0.03] dark:text-slate-400 dark:hover:border-indigo-500/30 dark:hover:text-indigo-300"
              >
                {t("dashboard.changeLanguage")}
              </button>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-white/[0.07] dark:bg-[#111722]">
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
                {t("dashboard.level")}
              </p>
              <p className="mt-0.5 text-lg font-black text-slate-950 dark:text-white">
                {level}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-white/[0.07] dark:bg-[#111722]">
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
                {t("dashboard.totalXP")}
              </p>
              <p className="mt-0.5 text-lg font-black text-slate-950 dark:text-white">
                {user.totalXP.toLocaleString()}
              </p>
            </div>
          </div>
        </header>

        {/* HERO: LEGEND ARENA */}
        <section className="mb-7">
          <button
            type="button"
            onClick={() => navigate("/arena")}
            className="group relative block w-full overflow-hidden rounded-[30px] text-left shadow-[0_28px_70px_-32px_rgba(79,70,229,.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_38px_80px_-30px_rgba(79,70,229,.62)]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(115deg,#0f172a_0%,#171c43_48%,#312e81_100%)]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,rgba(168,85,247,.34),transparent_30%),radial-gradient(circle_at_20%_110%,rgba(99,102,241,.24),transparent_36%)]" />

            <div
              className="pointer-events-none absolute inset-y-0 left-[-35%] w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              style={{
                animation:
                  "dashboardHeroShine 6s linear infinite",
              }}
            />

            <div className="relative grid gap-7 p-6 sm:grid-cols-[1fr_auto] sm:p-8 lg:p-10">
              <div className="min-w-0">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-200 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-300 shadow-[0_0_12px_rgba(129,140,248,.9)]" />
                  {t("dashboard.mainEvent")}
                </div>

                <div className="flex items-start gap-4">
                  <div className="dashboard-arena-motion flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] shadow-[0_12px_30px_-8px_rgba(99,102,241,.65)] backdrop-blur-sm sm:h-20 sm:w-20">
                    <Trophy className="h-8 w-8 text-white sm:h-10 sm:w-10" />
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                      {t("dashboard.arenaTitle")}
                    </h2>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-indigo-100/80 sm:text-base">
                      {t("dashboard.arenaSub")}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-black text-slate-950 shadow-lg">
                    {t("dashboard.arenaTitle")}
                    <ArrowRight className="h-4 w-4" />
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.07] px-3.5 py-2.5 text-xs font-bold text-white/80">
                    <Sparkles className="h-4 w-4" />
                    EP
                  </span>
                </div>
              </div>

              <div className="hidden items-end sm:flex">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-right backdrop-blur-md">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-indigo-200/80">
                    Season
                  </p>
                  <p className="mt-1 text-3xl font-black text-white">
                    {level}
                  </p>
                  <p className="mt-1 text-xs text-indigo-100/65">
                    {xpCurrent.toLocaleString()} /{" "}
                    {xpNeededForNext.toLocaleString()} XP
                  </p>
                </div>
              </div>
            </div>
          </button>
        </section>

        {/* PROGRESS STRIP */}
        <section className="mb-7 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_16px_40px_-28px_rgba(15,23,42,.25)] dark:border-white/[0.07] dark:bg-[#111722] sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                    {t("dashboard.xpProgress")}
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-200">
                    {xpCurrent.toLocaleString()} /{" "}
                    {xpNeededForNext.toLocaleString()}{" "}
                    {t("topbar.xp")}
                  </p>
                </div>

                <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-black text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                  {Math.round(xpProgress)}%
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/[0.05]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 transition-all duration-700"
                  style={{
                    width: `${xpProgress}%`,
                  }}
                />
              </div>

              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                {xpNeeded > 0 ? (
                  <>
                    {t("dashboard.needMoreXP")}{" "}
                    <strong className="font-bold text-slate-800 dark:text-slate-200">
                      {xpNeeded.toLocaleString()}
                    </strong>{" "}
                    {t("dashboard.moreXP")}
                  </>
                ) : (
                  <strong className="font-bold text-emerald-600 dark:text-emerald-400">
                    {t("dashboard.levelUp")}
                  </strong>
                )}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:w-[300px]">
              <div className="rounded-xl bg-slate-50 px-3 py-3 dark:bg-white/[0.04]">
                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                  {t("dashboard.streak")}
                </p>
                <p className="mt-1 text-lg font-black text-slate-950 dark:text-white">
                  {computedStreak} {t("dashboard.days")}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 px-3 py-3 dark:bg-white/[0.04]">
                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                  {t("dashboard.dailyGoal")}
                </p>
                <p className="mt-1 text-lg font-black text-slate-950 dark:text-white">
                  {dailyGoal.current}/{dailyGoal.goal}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI COMPANION */}
        <section className="mb-8">
          <DashboardRobotMascot
            message={t(MASCOT_META[mascotMood].key)}
            mood={mascotMood}
          />
        </section>

        {/* TODAY */}
        <section className="mb-8">
          <SectionHeader
            eyebrow="Today"
            title={t("dashboard.dailyGoal")}
          />

          <div className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
            <div className="rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_16px_40px_-28px_rgba(15,23,42,.25)] dark:border-white/[0.07] dark:bg-[#111722] sm:p-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="relative mx-auto h-32 w-32 shrink-0 sm:mx-0">
                  <svg
                    className="h-32 w-32 -rotate-90"
                    viewBox="0 0 120 120"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="49"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="10"
                      className="text-slate-100 dark:text-white/[0.05]"
                    />

                    <circle
                      cx="60"
                      cy="60"
                      r="49"
                      fill="none"
                      stroke="url(#dashboardGoalGradient)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 49}`}
                      strokeDashoffset={`${
                        2 *
                        Math.PI *
                        49 *
                        (1 - dailyGoal.percent / 100)
                      }`}
                      className="transition-[stroke-dashoffset] duration-700"
                    />

                    <defs>
                      <linearGradient
                        id="dashboardGoalGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-slate-950 dark:text-white">
                      {dailyGoal.current}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      / {dailyGoal.goal}
                    </span>
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-lg font-black text-slate-950 dark:text-white">
                    {dailyGoal.percent >= 100
                      ? t("dashboard.dailyGoalReached")
                      : dailyGoal.current === 0
                        ? t("dashboard.dailyGoalEmpty")
                        : `${dailyGoal.current} / ${dailyGoal.goal} ${t(
                            "topbar.xp",
                          )}`}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {dailyGoal.percent >= 100
                      ? "You completed today's target."
                      : `${Math.max(
                          dailyGoal.goal - dailyGoal.current,
                          0,
                        )} ${t("topbar.xp")} remaining today.`}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600 dark:bg-white/[0.04] dark:text-slate-300">
                      <Flame className="h-3.5 w-3.5 text-orange-500" />
                      {computedStreak} {t("dashboard.days")}
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600 dark:bg-white/[0.04] dark:text-slate-300">
                      {streakWeather.emoji}
                      {t(streakWeather.key)}
                    </span>

                    {hasShield ? (
                      <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-bold text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300">
                        <Shield className="h-3.5 w-3.5" />
                        {t("dashboard.shieldActive")}
                      </span>
                    ) : (
                      !hasActivityToday && (
                        <button
                          type="button"
                          onClick={buyStreakShield}
                          className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-bold text-cyan-700 transition hover:bg-cyan-100 dark:bg-cyan-500/10 dark:text-cyan-300 dark:hover:bg-cyan-500/15"
                        >
                          <Shield className="h-3.5 w-3.5" />
                          {t("dashboard.shieldBuy").replace(
                            "{coins}",
                            String(STREAK_SHIELD_COST),
                          )}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-5 dark:border-white/[0.06]">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                    {t("dashboard.last7days")}
                  </p>

                  <span className="text-[10px] font-semibold text-slate-400">
                    {hasActivityToday ? "Active today" : "Not active today"}
                  </span>
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {last7Days.map((day) => (
                    <div
                      key={day.date}
                      className="text-center"
                      title={day.date}
                    >
                      <p className="mb-2 text-[9px] font-bold text-slate-400">
                        {day.label}
                      </p>

                      <div
                        className={cn(
                          "mx-auto flex h-8 w-8 items-center justify-center rounded-full text-xs",
                          day.active
                            ? "bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300"
                            : "bg-slate-100 text-slate-300 dark:bg-white/[0.04] dark:text-slate-600",
                          day.isToday &&
                            "ring-2 ring-indigo-200 dark:ring-indigo-500/20",
                        )}
                      >
                        {day.active ? "✓" : "·"}
                      </div>
                    </div>
                  ))}
                </div>

                {computedStreak >= 7 && (
                  <div className="mt-4 rounded-xl bg-indigo-50 px-3 py-2.5 text-center text-xs font-bold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                    {t("dashboard.streakBonus").replace(
                      "{xp}",
                      String(
                        XP_REWARDS.STREAK_7_DAYS,
                      ),
                    )}
                    {computedStreak >= 30 &&
                      ` • ${t(
                        "dashboard.streakBonus30",
                      )}`}
                  </div>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={claimChest}
              disabled={chestClaimedToday}
              className={cn(
                "group relative overflow-hidden rounded-[24px] border p-6 text-left transition duration-200",
                chestClaimedToday
                  ? "cursor-default border-slate-200 bg-slate-50 dark:border-white/[0.07] dark:bg-white/[0.02]"
                  : "border-amber-200 bg-gradient-to-br from-amber-50 to-white shadow-[0_18px_40px_-26px_rgba(245,158,11,.42)] hover:-translate-y-0.5 dark:border-amber-500/20 dark:from-amber-500/10 dark:to-[#111722]",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-2xl",
                    chestClaimedToday
                      ? "bg-slate-200 text-slate-500 dark:bg-white/[0.05] dark:text-slate-500"
                      : "bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300",
                  )}
                >
                  {chestClaimedToday ? (
                    <Trophy className="h-6 w-6" />
                  ) : (
                    <Gift className="h-6 w-6" />
                  )}
                </div>

                {!chestClaimedToday && (
                  <Sparkles className="h-5 w-5 text-amber-500" />
                )}
              </div>

              <p className="mt-6 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                Daily reward
              </p>

              <p className="mt-1 text-xl font-black text-slate-950 dark:text-white">
                {t("dashboard.chestTitle")}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {chestClaimedToday
                  ? t(
                      "dashboard.chestSubtitleClaimed",
                    )
                  : t(
                      "dashboard.chestSubtitleOpen",
                    ).replace(
                      "{coins}",
                      String(DAILY_CHEST_REWARD),
                    )}
              </p>

              {!chestClaimedToday && (
                <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-black text-white dark:bg-white dark:text-slate-950">
                  {t("dashboard.chestButton")}
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </button>
          </div>
        </section>

        {/* METRICS */}
        <section className="mb-8">
          <SectionHeader
            eyebrow="Progress"
            title="Your overview"
          />

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <MetricCard
              icon={<Star className="h-5 w-5" />}
              label={t("dashboard.level")}
              value={String(level)}
              detail={`Next: ${level + 1}`}
              tone="amber"
            />

            <MetricCard
              icon={<Zap className="h-5 w-5" />}
              label={t("dashboard.totalXP")}
              value={user.totalXP.toLocaleString()}
              detail={`${xpNeeded.toLocaleString()} XP to next level`}
              tone="indigo"
            />

            <MetricCard
              icon={<Flame className="h-5 w-5" />}
              label={t("dashboard.streak")}
              value={`${computedStreak}`}
              detail={t("dashboard.days")}
              tone="orange"
            />

            <MetricCard
              icon={
                selectedLang ? (
                  <span className="text-xl">
                    {selectedLang.flag}
                  </span>
                ) : (
                  <Languages className="h-5 w-5" />
                )
              }
              label={t("dashboard.language")}
              value={
                selectedLang
                  ? t(selectedLang.nameKey)
                  : t("dashboard.none")
              }
              tone="emerald"
            />
          </div>
        </section>

        {/* LEARNING HUB */}
        <section className="mb-8">
          <SectionHeader
            eyebrow="Learning"
            title="Learning hub"
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <ActionCard
              icon={<BookOpen className="h-5 w-5" />}
              title={t("dashboard.lessons")}
              description={t("dashboard.lessonsSub")}
              onClick={() => navigate("/grammar")}
              tone="indigo"
            />

            <ActionCard
              icon={<Wrench className="h-5 w-5" />}
              title={t("dashboard.mistakeReview")}
              description={t(
                "dashboard.mistakeReviewSub",
              )}
              onClick={() => navigate("/mistakes")}
              tone="rose"
            />

            <ActionCard
              icon={<FileText className="h-5 w-5" />}
              title={t("dashboard.testYourself")}
              description={`${t(
                "dashboard.testYourselfSub",
              )} +${XP_REWARDS.TEST_PASSED} ${t(
                "topbar.xp",
              )}`}
              onClick={() => navigate("/tests")}
              tone="emerald"
            />

            <ActionCard
              icon={<Star className="h-5 w-5" />}
              title={t("dashboard.wotd")}
              description={t("dashboard.wotdSub")}
              onClick={() => navigate("/wotd")}
              tone="amber"
            />
          </div>
        </section>

        {/* LANGUAGE SWITCHER */}
        <section className="mb-8">
          <SectionHeader
            eyebrow="Language"
            title={t("dashboard.chooseLanguage")}
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {LEARNING_LANGUAGES.map((lang) => {
              const isSelected =
                user.currentLanguage === lang.code;

              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => selectLanguage(lang.code)}
                  className={cn(
                    "relative rounded-2xl border p-4 text-left transition duration-200 hover:-translate-y-0.5",
                    isSelected
                      ? "border-indigo-300 bg-indigo-50 shadow-[0_16px_34px_-26px_rgba(79,70,229,.42)] dark:border-indigo-500/30 dark:bg-indigo-500/10"
                      : "border-slate-200 bg-white hover:border-slate-300 dark:border-white/[0.07] dark:bg-[#111722] dark:hover:border-white/[0.12]",
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-2xl">
                      {lang.flag}
                    </span>

                    {isSelected ? (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-[10px] font-black text-white">
                        ✓
                      </span>
                    ) : (
                      <span className="h-5 w-5 rounded-full border border-slate-200 dark:border-white/[0.1]" />
                    )}
                  </div>

                  <p
                    className={cn(
                      "mt-4 text-sm font-black",
                      isSelected
                        ? "text-indigo-700 dark:text-indigo-300"
                        : "text-slate-800 dark:text-slate-200",
                    )}
                  >
                    {t(lang.nameKey)}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* GIFTS */}
        <section className="mb-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/[0.07] dark:bg-[#111722]">
            <button
              type="button"
              onClick={() =>
                setGiftsOpen((value) => !value)
              }
              aria-expanded={giftsOpen}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                  <Gift className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-black text-slate-950 dark:text-white">
                    {t("dashboard.giftsTitle")}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    Send or redeem rewards
                  </p>
                </div>
              </div>

              <ChevronDown
                className={cn(
                  "h-5 w-5 text-slate-400 transition",
                  giftsOpen && "rotate-180",
                )}
              />
            </button>

            {giftsOpen && (
              <div className="border-t border-slate-100 p-5 dark:border-white/[0.06]">
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* SEND */}
                  <div>
                    <p className="mb-3 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                      {t("dashboard.giftSendTitle")}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {[10, 20, 30].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() =>
                            sendGift({
                              type: "coins",
                              amount,
                            })
                          }
                          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-black text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-indigo-500/30 dark:hover:text-indigo-300"
                        >
                          🪙 {amount}
                        </button>
                      ))}

                      <button
                        type="button"
                        onClick={() =>
                          sendGift({
                            type: "shield",
                          })
                        }
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-black text-slate-700 transition hover:border-cyan-200 hover:text-cyan-600 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-cyan-500/30 dark:hover:text-cyan-300"
                      >
                        <Shield className="h-3.5 w-3.5" />
                        {t("dashboard.giftShield")}
                      </button>
                    </div>

                    {giftSendError && (
                      <p className="mt-3 text-xs font-medium text-orange-600 dark:text-orange-400">
                        {giftSendError}
                      </p>
                    )}

                    {generatedGiftCode && (
                      <div className="mt-4 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 dark:border-indigo-500/15 dark:bg-indigo-500/5">
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
                          {t("dashboard.giftGenerated")}
                        </p>

                        <code className="mt-2 block break-all rounded-xl bg-white px-3 py-2.5 text-xs text-slate-700 shadow-sm dark:bg-slate-950 dark:text-slate-300">
                          {generatedGiftCode}
                        </code>

                        <button
                          type="button"
                          onClick={shareGiftCode}
                          className="mt-3 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-black text-white transition hover:bg-indigo-700"
                        >
                          {t("dashboard.giftShareButton")}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* REDEEM */}
                  <div>
                    <p className="mb-3 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                      {t("dashboard.giftRedeemTitle")}
                    </p>

                    <div className="flex flex-col gap-2 sm:flex-row">
                      <input
                        type="text"
                        value={redeemInput}
                        onChange={(
                          event: ChangeEvent<HTMLInputElement>,
                        ) =>
                          setRedeemInput(
                            event.target.value,
                          )
                        }
                        placeholder={t(
                          "dashboard.giftRedeemPlaceholder",
                        )}
                        className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-800 outline-none ring-0 placeholder:text-slate-400 focus:border-indigo-400 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-slate-200 dark:focus:border-indigo-500/50"
                      />

                      <button
                        type="button"
                        onClick={redeemGift}
                        disabled={!redeemInput.trim()}
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-xs font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                      >
                        {t("dashboard.giftRedeemButton")}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    {redeemMessage && (
                      <p className="mt-3 rounded-xl bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-600 dark:bg-white/[0.04] dark:text-slate-300">
                        {redeemMessage}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* OPTIONAL AD */}
        <div className="mb-8">
          <AdSlot />
        </div>

        {/* FOOTER STATUS */}
        <section className="rounded-2xl border border-slate-200/80 bg-white px-5 py-4 dark:border-white/[0.07] dark:bg-[#111722]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-white/[0.04] dark:text-slate-400">
                <Lock className="h-4 w-4" />
              </div>

              <div>
                <p className="text-xs font-black text-slate-800 dark:text-slate-200">
                  Your progress is connected
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                  XP, streaks and rewards stay synced with your account.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Active
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}