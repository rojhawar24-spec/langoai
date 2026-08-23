// src/pages/WhyLangoAiPage.tsx
// ✅ Trust page — korte, eerlijke positionering. Elk punt verwijst naar iets
//    dat echt klopt in de codebase (geen marketing-verzinsels): gratis kern,
//    security-maatregelen, spelvormen in de Arena, consent-gated ads.

import { useNavigate, Link } from "react-router-dom";
import { useTranslate } from "@/i18n/I18nContext";
import type { TranslationKey } from "@/i18n/translations";
import { Sparkles, GraduationCap, ShieldCheck, Gamepad2, EyeOff } from "lucide-react";

const POINTS: { icon: typeof GraduationCap; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { icon: GraduationCap, titleKey: "why.point1Title", descKey: "why.point1Desc" },
  { icon: ShieldCheck,   titleKey: "why.point2Title", descKey: "why.point2Desc" },
  { icon: Gamepad2,      titleKey: "why.point3Title", descKey: "why.point3Desc" },
  { icon: EyeOff,        titleKey: "why.point4Title", descKey: "why.point4Desc" },
];

export default function WhyLangoAiPage() {
  const navigate = useNavigate();
  const { t } = useTranslate();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
        >
          <span aria-hidden="true">←</span>
          {t("why.back")}
        </button>

        <div className="mb-3 flex items-center gap-3">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-300">
            <Sparkles className="h-6 w-6" aria-hidden="true" />
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
            {t("why.title")}
          </h1>
        </div>
        <p className="mb-10 max-w-xl text-sm text-slate-500 dark:text-slate-400">
          {t("why.subtitle")}
        </p>

        <div className="space-y-4">
          {POINTS.map(({ icon: Icon, titleKey, descKey }) => (
            <div
              key={titleKey}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="mb-1 text-sm font-bold text-slate-900 dark:text-white">
                  {t(titleKey)}
                </h2>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {t(descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/register"
            className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            {t("pricing.freeBadge")}
          </Link>
          <Link
            to="/security"
            className="text-sm font-semibold text-indigo-600 underline-offset-2 hover:underline dark:text-indigo-400"
          >
            {t("why.securityCta")}
          </Link>
        </div>
      </div>
    </div>
  );
}
