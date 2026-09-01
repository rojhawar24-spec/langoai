// src/pages/TermsPage.tsx
//
// 🔒 FIX (audit #17 — "hardcoded strings"): this entire page (265 lines)
// used zero t() calls — every string, including section headers and full
// legal paragraphs, was hardcoded Dutch (some headers bilingual NL/EN,
// most body text Dutch-only). An English/French/German/Spanish
// interface-language user saw the Terms of Service in Dutch regardless
// of their chosen language. Now fully wired to the i18n system, matching
// every other page in the app.
//
// 🧪 IMPORTANT — read before treating the 4 new language versions as
// equally authoritative to the Dutch original: this is legal content
// (Belgian/EU consumer law citations, GDPR references, liability terms),
// not UI copy. The translations use standard, official EU/GDPR
// terminology in each language (these concepts have established
// equivalents — "right of withdrawal"/"droit de rétractation"/
// "Widerrufsrecht"/"derecho de desistimiento" are the real, standardized
// terms, not inventions), and nothing about the legal SUBSTANCE was
// changed in translating it. But translating a binding legal document is
// different in kind from translating "Daily Goal" — get a native-speaker
// or legal review pass on the EN/FR/DE/ES versions before relying on them
// as equally binding. A new legal.translationNotice key states the Dutch
// version governs in case of any discrepancy — that clause didn't exist
// in any language before; it's standard, responsible practice once
// multiple language versions of the same legal document exist.

import { useNavigate } from "react-router-dom";
import { useTranslate } from "@/i18n/I18nContext";

export default function TermsPage() {
  const navigate = useNavigate();
  const { t } = useTranslate();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
        >
          {t("terms.back")}
        </button>

        <h1 className="mb-2 text-3xl font-extrabold text-slate-900 dark:text-white">
          {t("terms.title")}
        </h1>
        <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
          {t("terms.lastUpdated")}
        </p>
        <p className="mb-2 text-xs text-slate-400 dark:text-slate-500">
          {t("terms.applicableTo")}
        </p>
        <p className="mb-8 text-xs italic text-slate-400 dark:text-slate-500">
          {t("legal.translationNotice")}
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-slate-700 dark:text-slate-300">

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("terms.s1.title")}</h2>
            <p className="mb-2">{t("terms.s1.p1")}</p>
            <p className="mb-2">
              <strong>{t("terms.s1.contact")}</strong><br />
              <a href="mailto:legal@langoai.com" className="text-indigo-600 underline dark:text-indigo-400">legal@langoai.com</a>
            </p>
            <p className="text-xs text-slate-400">{t("terms.s1.p3")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("terms.s2.title")}</h2>
            <p className="mb-3">{t("terms.s2.body")}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                <p className="font-semibold text-slate-800 dark:text-slate-200">{t("terms.s2.freeTitle")}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{t("terms.s2.freeBody")}</p>
              </div>
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-950/20">
                <p className="font-semibold text-indigo-800 dark:text-indigo-300">{t("terms.s2.premiumTitle")}</p>
                <p className="mt-1 text-xs text-indigo-700 dark:text-indigo-400">{t("terms.s2.premiumBody")}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("terms.s3.title")}</h2>
            <ul className="ml-5 list-disc space-y-1">
              <li>{t("terms.s3.li1")}</li>
              <li>{t("terms.s3.li2")}</li>
              <li>{t("terms.s3.li3")}</li>
              <li>{t("terms.s3.li4")}</li>
              <li>{t("terms.s3.li5")}</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("terms.s4.title")}</h2>
            <p className="mb-2">{t("terms.s4.price")}</p>
            <p className="mb-3">{t("terms.s4.method")}</p>
            <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/20">
              <p className="font-semibold text-amber-800 dark:text-amber-300">{t("terms.s4.withdrawalTitle")}</p>
              <p className="mt-1 text-xs text-amber-700 dark:text-amber-400">{t("terms.s4.withdrawalBody")}</p>
            </div>
            <p className="mt-3 text-xs text-slate-400">{t("terms.s4.processing")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("terms.s5.title")}</h2>
            <p className="mb-2">{t("terms.s5.intro")}</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>{t("terms.s5.li1")}</li>
              <li>{t("terms.s5.li2")}</li>
              <li>{t("terms.s5.li3")}</li>
              <li>{t("terms.s5.li4")}</li>
              <li>{t("terms.s5.li5")}</li>
              <li>{t("terms.s5.li6")}</li>
            </ul>
            <p className="mt-3 text-xs text-red-500 dark:text-red-400">{t("terms.s5.violation")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("terms.s6.title")}</h2>
            <p className="mb-2">{t("terms.s6.p1")}</p>
            <p>{t("terms.s6.p2")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("terms.s7.title")}</h2>
            <ul className="ml-5 list-disc space-y-1">
              <li>{t("terms.s7.li1")}</li>
              <li>{t("terms.s7.li2")}</li>
              <li>{t("terms.s7.li3")}</li>
              <li>{t("terms.s7.li4")}</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("terms.s8.title")}</h2>
            <p className="mb-2">{t("terms.s8.intro")}</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>{t("terms.s8.li1")}</li>
              <li>{t("terms.s8.li2")}</li>
              <li>{t("terms.s8.li3")}</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">{t("terms.s8.liability")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("terms.s9.title")}</h2>
            <p>{t("terms.s9.body")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("terms.s10.title")}</h2>
            <p className="mb-2">{t("terms.s10.p1")}</p>
            <p className="mb-2">
              {t("terms.s10.p2Prefix")}{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer"
                className="text-indigo-600 underline dark:text-indigo-400">
                {t("terms.s10.odrLinkText")}
              </a>.
            </p>
            <p className="text-xs text-slate-400">{t("terms.s10.court")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("terms.s11.title")}</h2>
            <p>{t("terms.s11.body")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("terms.s12.title")}</h2>
            <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-xs text-slate-600 dark:text-slate-300">
                📧{" "}
                <a href="mailto:legal@langoai.com" className="font-semibold text-indigo-600 underline dark:text-indigo-400">
                  legal@langoai.com
                </a>
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{t("terms.s12.response")}</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
