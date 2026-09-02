// src/pages/FaqPage.tsx
// ✅ Trust page — veelgestelde vragen, gegroepeerd. Gebruikt de bestaande
//    Accordion (Radix, al elders gebruikt in GrammarLessonDesign.tsx) zodat
//    de stijl consistent blijft. Volledig vertaald via t() (i18n).
//    Bereikbaar zonder login (zie App.tsx + Footer).

import { useNavigate, Link } from "react-router-dom";
import { useTranslate } from "@/i18n/I18nContext";
import type { TranslationKey } from "@/i18n/translations";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { HelpCircle, Mail } from "lucide-react";

interface QA {
  q: TranslationKey;
  a: TranslationKey;
}
interface Group {
  headingKey: TranslationKey;
  items: QA[];
}

const GROUPS: Group[] = [
  {
    headingKey: "faq.groupStart",
    items: [
      { q: "faq.q1", a: "faq.a1" },
      { q: "faq.q2", a: "faq.a2" },
      { q: "faq.q3", a: "faq.a3" },
    ],
  },
  {
    headingKey: "faq.groupPrivacy",
    items: [
      { q: "faq.q7", a: "faq.a7" },
      { q: "faq.q8", a: "faq.a8" },
      { q: "faq.q9", a: "faq.a9" },
    ],
  },
  {
    headingKey: "faq.groupUsing",
    items: [
      { q: "faq.q10", a: "faq.a10" },
      { q: "faq.q11", a: "faq.a11" },
    ],
  },
];

export default function FaqPage() {
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
          {t("faq.back")}
        </button>

        <div className="mb-3 flex items-center gap-3">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-300">
            <HelpCircle className="h-6 w-6" aria-hidden="true" />
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
            {t("faq.title")}
          </h1>
        </div>
        <p className="mb-10 max-w-xl text-sm text-slate-500 dark:text-slate-400">
          {t("faq.subtitle")}
        </p>

        <div className="space-y-8">
          {GROUPS.map((group) => (
            <section key={group.headingKey}>
              <h2 className="mb-3 text-xs font-bold tracking-wide text-indigo-500 uppercase dark:text-indigo-400">
                {t(group.headingKey)}
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {group.items.map(({ q, a }) => (
                  <AccordionItem
                    key={q}
                    value={q}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 data-[state=open]:border-indigo-200 data-[state=open]:shadow-md dark:data-[state=open]:border-indigo-800/60"
                  >
                    <AccordionTrigger className="px-5 py-4 text-left text-sm font-bold text-slate-900 hover:bg-slate-50/80 hover:no-underline dark:text-white dark:hover:bg-slate-900/40">
                      {t(q)}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {t(a)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:privacy@langoai.com"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {t("faq.emailUs")}
          </a>
          <Link
            to="/security"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
          >
            {t("faq.securityCenterLink")}
          </Link>
          <Link
            to="/terms"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
          >
            {t("faq.termsLink")}
          </Link>
        </div>
      </div>
    </div>
  );
}
