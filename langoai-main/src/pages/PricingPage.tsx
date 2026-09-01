// src/pages/PricingPage.tsx
// ✅ Trust page — publiek toegankelijke pricing-info. /premium bestaat al
//    met veel detail, maar zit achter ProtectedRouteWrapper: bezoekers die
//    nog geen account hebben konden nergens de prijs zien. Dit is bewust een
//    korte, publieke samenvatting — geen kopie van /premium — zodat er maar
//    één plek met de volledige details blijft (minder kans op verschil).

import { Link, useNavigate } from "react-router-dom";
import { useTranslate } from "@/i18n/I18nContext";
import { Tag, CheckCircle2, Sparkles } from "lucide-react";

export default function PricingPage() {
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
          {t("pricing.back")}
        </button>

        <div className="mb-3 flex items-center gap-3">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300">
            <Tag className="h-6 w-6" aria-hidden="true" />
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
            {t("pricing.title")}
          </h1>
        </div>
        <p className="mb-10 max-w-xl text-sm text-slate-500 dark:text-slate-400">
          {t("pricing.subtitle")}
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Free tier */}
          <div className="rounded-2xl border border-teal-200 bg-white p-5 shadow-sm dark:border-teal-900/50 dark:bg-slate-950">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
              {t("pricing.freeBadge")}
            </span>
            <h2 className="mb-1 text-lg font-bold text-slate-900 dark:text-white">
              {t("pricing.freeTitle")}
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {t("pricing.freeDesc")}
            </p>
          </div>

          {/* Premium tier — coming soon */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {t("pricing.premiumBadge")}
            </span>
            <h2 className="mb-1 text-lg font-bold text-slate-900 dark:text-white">
              {t("pricing.premiumTitle")}
            </h2>
            <div className="mb-3 flex items-baseline gap-1.5">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {t("pricing.premiumPrice")}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {t("pricing.premiumPeriod")}
              </span>
            </div>
            <ul className="mb-3 space-y-1.5">
              {[t("pricing.premiumPerk1"), t("pricing.premiumPerk2")].map((perk) => (
                <li key={perk} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" aria-hidden="true" />
                  {perk}
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed text-slate-400 dark:text-slate-500">
              {t("pricing.premiumDesc")}
            </p>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-400 dark:text-slate-500">
          {t("pricing.legalNote")}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/register"
            className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            {t("pricing.freeTitle")}
          </Link>
          <Link
            to="/faq"
            className="text-sm font-semibold text-indigo-600 underline-offset-2 hover:underline dark:text-indigo-400"
          >
            {t("pricing.faqCta")}
          </Link>
        </div>
      </div>
    </div>
  );
}
