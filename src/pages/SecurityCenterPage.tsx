// src/pages/SecurityCenterPage.tsx
// ✅ Trust page — uitleg van echte, geverifieerde security-maatregelen in
//    gewone taal. Volledig vertaald via t() (i18n), i.t.t. PrivacyPolicyPage/
//    TermsPage die als statisch tweetalig juridisch document blijven staan.
//    Bereikbaar zonder login (zie App.tsx) zodat het ook via de Footer op
//    Login/Register te vinden is.

import { useNavigate, Link } from "react-router-dom";
import { useTranslate } from "@/i18n/I18nContext";
import type { TranslationKey } from "@/i18n/translations";
import {
  ShieldCheck,
  Database,
  Lock,
  KeyRound,
  ShieldAlert,
  EyeOff,
  Download,
  Bot,
  Mail,
} from "lucide-react";

const CARDS: { icon: typeof Database; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { icon: Database,    titleKey: "securityCenter.card1Title", descKey: "securityCenter.card1Desc" },
  { icon: Lock,        titleKey: "securityCenter.card2Title", descKey: "securityCenter.card2Desc" },
  { icon: KeyRound,    titleKey: "securityCenter.card3Title", descKey: "securityCenter.card3Desc" },
  { icon: ShieldAlert, titleKey: "securityCenter.card4Title", descKey: "securityCenter.card4Desc" },
  { icon: EyeOff,      titleKey: "securityCenter.card5Title", descKey: "securityCenter.card5Desc" },
  { icon: Download,    titleKey: "securityCenter.card6Title", descKey: "securityCenter.card6Desc" },
];

export default function SecurityCenterPage() {
  const navigate = useNavigate();
  const { t } = useTranslate();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
        >
          <span aria-hidden="true">←</span>
          {t("securityCenter.back")}
        </button>

        <div className="mb-3 flex items-center gap-3">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300">
            <ShieldCheck className="h-6 w-6" aria-hidden="true" />
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
            {t("securityCenter.title")}
          </h1>
        </div>
        <p className="mb-10 max-w-xl text-sm text-slate-500 dark:text-slate-400">
          {t("securityCenter.subtitle")}
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {CARDS.map(({ icon: Icon, titleKey, descKey }) => (
            <div
              key={titleKey}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-teal-800"
            >
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-300">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mb-1 text-sm font-bold text-slate-900 dark:text-white">
                {t(titleKey)}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {t(descKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20">
          <div className="mb-2 flex items-center gap-2">
            <Bot className="h-5 w-5 text-indigo-600 dark:text-indigo-300" aria-hidden="true" />
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              {t("securityCenter.aiTitle")}
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {t("securityCenter.aiDesc")}
          </p>
        </div>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <h2 className="mb-1 text-sm font-bold text-slate-900 dark:text-white">
            {t("securityCenter.reportTitle")}
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {t("securityCenter.reportDesc")}
          </p>
          <a
            href="mailto:privacy@langoai.com"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {t("securityCenter.reportButton")}
          </a>
        </div>

        <p className="mt-8 text-xs text-slate-400 dark:text-slate-500">
          {t("securityCenter.legalNote")}
        </p>
        <div className="mt-2 flex gap-4 text-xs">
          <Link
            to="/privacy"
            className="font-semibold text-indigo-600 underline-offset-2 hover:underline dark:text-indigo-400"
          >
            {t("footer.privacy")}
          </Link>
          <Link
            to="/terms"
            className="font-semibold text-indigo-600 underline-offset-2 hover:underline dark:text-indigo-400"
          >
            {t("footer.terms")}
          </Link>
        </div>
      </div>
    </div>
  );
}
