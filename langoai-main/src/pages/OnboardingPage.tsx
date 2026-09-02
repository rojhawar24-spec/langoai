// src/pages/OnboardingPage.tsx
// Runs once after registration (see RegisterPage.tsx, navigate("/onboarding")
// instead of straight to "/dashboard").
//
// 🔒 FIX (audit #8 — "onboarding has the same language-coupling bug"): this
// used to have ONE language step that set both the learning language and
// the interface language together, so picking "I want to learn Dutch" also
// silently switched a native English speaker's whole UI to Dutch. Now split
// into two explicit steps, matching how src/i18n/I18nContext.tsx treats them
// everywhere else in the app:
//   Step 0 — "What do you want to learn?"     → currentLanguage
//   Step 1 — "What language should the app use?" → interfaceLanguage
//
// Everything else here is additive and skippable: none of it is required to
// use the app, and no new database column was added for it. Language + daily
// goal use the existing, already-working storage (updateProfile,
// setUILanguage, setDailyGoal). "Why are you learning" is purely for
// mood/possible later personalization and is only stored locally.

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTranslate } from "@/i18n/I18nContext";
import { setDailyGoal } from "@/utils/progress";
import LanguagePickerGrid from "@/components/LanguagePickerGrid";
import type { TranslationKey, UILanguage } from "@/i18n/translations";
import { Briefcase, Plane, Heart, Sparkles } from "lucide-react";

const ONBOARDING_DONE_KEY = "langlearn_onboarding_done";
const ONBOARDING_WHY_KEY  = "langlearn_onboarding_why";
const TOTAL_STEPS = 5;

const WHY_OPTIONS: { key: string; icon: typeof Briefcase; labelKey: TranslationKey }[] = [
  { key: "work",   icon: Briefcase, labelKey: "onboarding.whyWork" },
  { key: "move",   icon: Plane,     labelKey: "onboarding.whyMove" },
  { key: "family", icon: Heart,     labelKey: "onboarding.whyFamily" },
  { key: "fun",    icon: Sparkles,  labelKey: "onboarding.whyFun" },
];

const GOAL_OPTIONS: { minutes: number; xp: number; labelKey: TranslationKey }[] = [
  { minutes: 5,  xp: 20,  labelKey: "onboarding.goalCasual" },
  { minutes: 10, xp: 50,  labelKey: "onboarding.goalRegular" }, // 50 = existing default in progress.ts
  { minutes: 15, xp: 80,  labelKey: "onboarding.goalSerious" },
  { minutes: 20, xp: 120, labelKey: "onboarding.goalIntense" },
];

function markDone() {
  try {
    localStorage.setItem(ONBOARDING_DONE_KEY, "true");
  } catch {
    // localStorage can fail (private mode, full) — not worth blocking on
  }
}

export default function OnboardingPage() {
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();
  const { t, uiLanguage, setUILanguage } = useTranslate();

  const [step, setStep] = useState(0);
  const [learnLang, setLearnLang] = useState<UILanguage>(
    (user?.currentLanguage as UILanguage) || "nl"
  );
  const [goalMinutes, setGoalMinutes] = useState(10);

  function chooseLearnLang(lang: UILanguage) {
    setLearnLang(lang);
    // Only the LEARNING language — never touches interfaceLanguage.
    updateProfile({ currentLanguage: lang });
    setStep(1);
  }

  function chooseUiLang(lang: UILanguage) {
    // Only the INTERFACE language — never touches currentLanguage.
    setUILanguage(lang);
    setStep(2);
  }

  function chooseWhy(key: string) {
    try {
      localStorage.setItem(ONBOARDING_WHY_KEY, key);
    } catch {
      // not critical — purely for mood/later personalization
    }
    setStep(3);
  }

  function chooseGoal(minutes: number, xp: number) {
    setGoalMinutes(minutes);
    setDailyGoal(xp);
    setStep(4);
  }

  function finish() {
    markDone();
    navigate("/dashboard", { replace: true });
  }

  function skip() {
    markDone();
    navigate("/dashboard", { replace: true });
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
      <div className="flex items-center justify-between px-4 pt-6 sm:px-6">
        <div className="flex gap-1.5" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={TOTAL_STEPS}>
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-8 rounded-full transition-colors ${
                i <= step ? "bg-indigo-500" : "bg-slate-200 dark:bg-slate-700"
              }`}
            />
          ))}
        </div>
        {step < TOTAL_STEPS - 1 && (
          <button
            type="button"
            onClick={skip}
            className="text-xs font-semibold text-slate-400 transition hover:text-slate-600 dark:hover:text-slate-300"
          >
            {t("onboarding.skip")}
          </button>
        )}
      </div>

      <div className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6">
        <div className="w-full max-w-md">
          {step === 0 && (
            <div>
              <h1 className="mb-1 text-2xl font-extrabold text-slate-900 dark:text-white">
                {t("onboarding.learnLangTitle")}
              </h1>
              <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
                {t("onboarding.learnLangSubtitle")}
              </p>
              <LanguagePickerGrid
                value={learnLang}
                onSelect={chooseLearnLang}
              />
            </div>
          )}

          {step === 1 && (
            <div>
              <h1 className="mb-1 text-2xl font-extrabold text-slate-900 dark:text-white">
                {t("onboarding.langTitle")}
              </h1>
              <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
                {t("onboarding.langSubtitle")}
              </p>
              <LanguagePickerGrid
                value={uiLanguage}
                onSelect={chooseUiLang}
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <h1 className="mb-1 text-2xl font-extrabold text-slate-900 dark:text-white">
                {t("onboarding.whyTitle")}
              </h1>
              <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
                {t("onboarding.whySubtitle")}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {WHY_OPTIONS.map(({ key, icon: Icon, labelKey }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => chooseWhy(key)}
                    className="flex flex-col items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white p-5 text-center shadow-sm transition hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-indigo-800"
                  >
                    <Icon className="h-6 w-6 text-indigo-500" aria-hidden="true" />
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {t(labelKey)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h1 className="mb-1 text-2xl font-extrabold text-slate-900 dark:text-white">
                {t("onboarding.goalTitle")}
              </h1>
              <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
                {t("onboarding.goalSubtitle")}
              </p>
              <div className="space-y-2.5">
                {GOAL_OPTIONS.map(({ minutes, xp, labelKey }) => {
                  const active = goalMinutes === minutes;
                  return (
                    <button
                      key={minutes}
                      type="button"
                      onClick={() => chooseGoal(minutes, xp)}
                      className={`flex w-full items-center justify-between rounded-2xl border-2 px-5 py-4 text-left transition ${
                        active
                          ? "border-indigo-500 bg-indigo-50 dark:border-indigo-400 dark:bg-indigo-950/30"
                          : "border-slate-200 bg-white hover:border-indigo-200 dark:border-slate-800 dark:bg-slate-950"
                      }`}
                    >
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {t(labelKey)}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {minutes} {t("onboarding.min")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-indigo-100 text-4xl dark:bg-indigo-900/40">
                  🎉
                </span>
              </div>
              <h1 className="mb-1 text-2xl font-extrabold text-slate-900 dark:text-white">
                {t("onboarding.doneTitle")}
              </h1>
              <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
                {user?.username ? `${user.username} — ` : ""}
                {t("onboarding.doneSubtitle")}
              </p>
              <button
                type="button"
                onClick={finish}
                className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-indigo-700"
              >
                {t("onboarding.doneCta")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
