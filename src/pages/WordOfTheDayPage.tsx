import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTranslate } from "@/i18n/I18nContext";
import {
  selectDailyWords,
  markWordKnown,
  markWordUnknown,
  getAllProgress,
  type WordProgress,
} from "@/utils/wotd";
import { ALL_WOTD_WORDS } from "@/data/wotd-words";
import { XP_REWARDS, createXPAwarder } from "@/utils/xp";

export default function WordOfTheDayPage() {
  const { user, updateProfile } = useAuth();
  const { t } = useTranslate();
  const navigate = useNavigate();
  const languageCode = user?.currentLanguage ?? "nl";

  const [progress, setProgress] = useState<Record<string, WordProgress>>(getAllProgress);
  const [showHint, setShowHint] = useState(false);
  const [done, setDone] = useState(false);

  const awardXP = createXPAwarder(updateProfile);

  const words = useMemo(() => ALL_WOTD_WORDS.filter((w) => w.languageCode === languageCode), [languageCode]);
  const { wordOfTheDay, reviewWords } = useMemo(() => selectDailyWords(words, progress), [words, progress]);

  function handleKnown() {
    if (!wordOfTheDay) return;
    markWordKnown(wordOfTheDay.id);
    setProgress({ ...getAllProgress() });
    setDone(true);
    setShowHint(false);
    awardXP(XP_REWARDS.EXERCISE_CORRECT);
  }

  function handleUnknown() {
    if (!wordOfTheDay) return;
    markWordUnknown(wordOfTheDay.id);
    setProgress({ ...getAllProgress() });
    setDone(true);
    setShowHint(false);
  }

  const learned = words.filter((w) => progress[w.id]?.lastInteractionDate != null).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <div className="mx-auto max-w-md px-4 py-6 sm:py-10">
        {/* Back */}
        <button onClick={() => navigate("/dashboard")} className="mb-6 flex items-center gap-1 text-sm text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t("nav.home")}
        </button>

        {!wordOfTheDay ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="text-7xl">⏳</span>
            <h2 className="mt-6 text-2xl font-extrabold text-slate-800 dark:text-white">{t("wotd.youre_done")}</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400">{t("wotd.all_done_msg")}</p>
            <p className="mt-1 text-sm text-slate-400">🌙 {t("wotd.see_tomorrow")}</p>
          </div>
        ) : (
          <>
            {/* Label */}
            <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 dark:text-indigo-300">
              {t("wotd.title")}
            </p>

            {/* Main Card */}
            <div className={`rounded-3xl shadow-xl transition-all duration-500 ${
              done
                ? "bg-gradient-to-b from-emerald-50 to-white ring-2 ring-emerald-200 dark:from-emerald-900/20 dark:to-slate-800 dark:ring-emerald-700"
                : "bg-white ring-2 ring-slate-100 dark:bg-slate-800 dark:ring-slate-700"
            }`}>
              {/* Emoji section */}
              <div className="flex flex-col items-center px-6 pt-10 pb-6">
                <div className="mb-6 rounded-3xl bg-gradient-to-br from-indigo-100 to-purple-100 p-6 dark:from-indigo-900/30 dark:to-purple-900/30">
                  <span className="text-8xl">{wordOfTheDay.emoji}</span>
                </div>

                <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                  {wordOfTheDay.word}
                </h1>

                {done && (
                  <p className="mt-3 text-center text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {wordOfTheDay.translation}
                  </p>
                )}

                {/* Hint */}
                {!done && (
                  <div className="mt-5">
                    {!showHint ? (
                      <button onClick={() => setShowHint(true)}
                        className="rounded-full border-2 border-dashed border-amber-300 px-5 py-2 text-sm font-medium text-amber-600 transition hover:border-amber-400 hover:bg-amber-50 dark:border-amber-500 dark:text-amber-400 dark:hover:bg-amber-900/20">
                        💡 {t("wotd.show_hint")}
                      </button>
                    ) : (
                      <p className="rounded-2xl bg-amber-50 px-5 py-3 text-base italic leading-relaxed text-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
                        {wordOfTheDay.hint}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="px-6 pb-8">
                {!done ? (
                  <div className="flex flex-col gap-3">
                    <button onClick={handleKnown}
                      className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-200 transition hover:from-emerald-600 hover:to-teal-600 active:scale-[0.98] dark:shadow-emerald-900/40">
                      ✅ {t("wotd.i_know")} · +{XP_REWARDS.EXERCISE_CORRECT} XP
                    </button>
                    <button onClick={handleUnknown}
                      className="w-full rounded-2xl border-2 border-red-200 py-3 text-base font-semibold text-red-500 transition hover:bg-red-50 active:scale-[0.98] dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/20">
                      ❌ {t("wotd.dont_know")}
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2.5 text-lg font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                      ✅ {t("wotd.learned")} +{XP_REWARDS.EXERCISE_CORRECT} XP
                    </span>
                    <p className="mt-4 text-sm text-slate-400">{t("wotd.back_tomorrow")} 🌙</p>
                  </div>
                )}
              </div>
            </div>

            {/* Review words */}
            {reviewWords.length > 0 && (
              <div className="mt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  📋 {t("wotd.review")}
                </p>
                <div className="space-y-2">
                  {reviewWords.map((rw) => {
                    const p = progress[rw.id];
                    const dot = p?.lastResult === "unknown" ? "🟡" : "🟢";
                    return (
                      <div key={rw.id} className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{rw.emoji}</span>
                          <span className="flex-1 text-sm font-semibold text-slate-700 dark:text-slate-300">{rw.word}</span>
                          <span>{dot}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Progress */}
            <p className="mt-8 text-center text-xs text-slate-400">
              {learned} / {words.length} {t("wotd.words_learned")}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
