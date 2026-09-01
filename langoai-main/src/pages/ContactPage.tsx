// src/pages/ContactPage.tsx
// ✅ Trust page — bewust simpel: 1 echt, al bestaand mailadres
//    (privacy@langoai.com, ook gebruikt in PrivacyPolicyPage.tsx), geen
//    nieuw contactkanaal verzinnen dat mogelijk niemand in de gaten houdt.

import { useNavigate, Link } from "react-router-dom";
import { useTranslate } from "@/i18n/I18nContext";
import { Mail, MessageCircleQuestion } from "lucide-react";

export default function ContactPage() {
  const navigate = useNavigate();
  const { t } = useTranslate();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-xl px-4 py-12 sm:px-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
        >
          <span aria-hidden="true">←</span>
          {t("contact.back")}
        </button>

        <div className="mb-3 flex items-center gap-3">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300">
            <Mail className="h-6 w-6" aria-hidden="true" />
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
            {t("contact.title")}
          </h1>
        </div>
        <p className="mb-10 max-w-xl text-sm text-slate-500 dark:text-slate-400">
          {t("contact.subtitle")}
        </p>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <h2 className="mb-1 text-sm font-bold text-slate-900 dark:text-white">
            {t("contact.emailTitle")}
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {t("contact.emailDesc")}
          </p>
          <a
            href="mailto:privacy@langoai.com"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            privacy@langoai.com
          </a>
        </div>

        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20">
          <MessageCircleQuestion className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600 dark:text-indigo-300" aria-hidden="true" />
          <div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {t("contact.securityNote")}
            </p>
            <Link
              to="/faq"
              className="mt-2 inline-block text-sm font-semibold text-indigo-600 underline-offset-2 hover:underline dark:text-indigo-400"
            >
              {t("contact.faqCta")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
