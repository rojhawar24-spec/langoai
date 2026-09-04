// src/pages/PrivacyPolicyPage.tsx
// ✅ GDPR-compliant Privacy Policy
//    Gebaseerd op EU GDPR / Belgisch recht
//    Verplichte onderdelen: verwerkingsdoel, rechtsgrond, bewaartermijn,
//    verwerkingsverantwoordelijke, rechten betrokkene, DPA contactgegevens
//
// 🔒 FIX (audit #17 — same gap as TermsPage.tsx, fixed the same way):
// this page also had zero t() calls — 320 lines of hardcoded bilingual/
// Dutch-only text. Fully wired to the i18n system now. See the notice at
// the top of TermsPage.tsx for the same caveat about legal-document
// translation review that applies here too — this page has even more
// specific GDPR article citations and a Belgian Data Protection Authority
// reference that benefit from a native-speaker/legal check before being
// treated as equally authoritative to the Dutch original.

import { useNavigate } from "react-router-dom";
import { useTranslate } from "@/i18n/I18nContext";

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();
  const { t } = useTranslate();

  const thirdParties = [
    { name: t("privacy.s5.supabaseName"), info: t("privacy.s5.supabaseInfo"), link: "https://supabase.com/privacy" },
    { name: t("privacy.s5.vercelName"), info: t("privacy.s5.vercelInfo"), link: "https://vercel.com/legal/privacy-policy" },
    { name: t("privacy.s5.anthropicName"), info: t("privacy.s5.anthropicInfo"), link: "https://www.anthropic.com/privacy" },
    { name: t("privacy.s5.adsenseName"), info: t("privacy.s5.adsenseInfo"), link: "https://policies.google.com/privacy" },
  ];

  const dataRows: [string, string, string][] = [
    [t("privacy.s2.row1cat"), t("privacy.s2.row1data"), t("privacy.s2.legalBasisContract")],
    [t("privacy.s2.row2cat"), t("privacy.s2.row2data"), t("privacy.s2.legalBasisContract")],
    [t("privacy.s2.row3cat"), t("privacy.s2.row3data"), t("privacy.s2.legalBasisContract")],
    [t("privacy.s2.row5cat"), t("privacy.s2.row5data"), t("privacy.s2.legalBasisContract")],
    [t("privacy.s2.row6cat"), t("privacy.s2.row6data"), t("privacy.s2.legalBasisInterest")],
  ];

  const rights: [string, string][] = [
    [t("privacy.s6.r1title"), t("privacy.s6.r1desc")],
    [t("privacy.s6.r2title"), t("privacy.s6.r2desc")],
    [t("privacy.s6.r3title"), t("privacy.s6.r3desc")],
    [t("privacy.s6.r4title"), t("privacy.s6.r4desc")],
    [t("privacy.s6.r5title"), t("privacy.s6.r5desc")],
    [t("privacy.s6.r6title"), t("privacy.s6.r6desc")],
    [t("privacy.s6.r7title"), t("privacy.s6.r7desc")],
    [t("privacy.s6.r8title"), t("privacy.s6.r8desc")],
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
        >
          {t("privacy.back")}
        </button>

        <h1 className="mb-2 text-3xl font-extrabold text-slate-900 dark:text-white">
          {t("privacy.title")}
        </h1>
        <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
          {t("privacy.lastUpdated")}
        </p>
        <p className="mb-2 text-xs text-slate-400 dark:text-slate-500">
          {t("privacy.applicableTo")}
        </p>
        <p className="mb-8 text-xs italic text-slate-400 dark:text-slate-500">
          {t("legal.translationNotice")}
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-slate-700 dark:text-slate-300">

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("privacy.s1.title")}</h2>
            <p className="mb-2">
              <strong>Lango AI</strong> {t("privacy.s1.p1")}
            </p>
            <p className="mb-2">
              <strong>{t("privacy.s1.contactLabel")}</strong><br />
              {t("privacy.s1.email")}{" "}
              <a href="mailto:privacy@langoai.com" className="text-indigo-600 underline dark:text-indigo-400">privacy@langoai.com</a><br />
              {t("privacy.s1.establishedIn")}
            </p>
            <p className="text-xs text-slate-400">{t("privacy.s1.dpo")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("privacy.s2.title")}</h2>
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="px-4 py-2 font-semibold text-slate-700 dark:text-slate-300">{t("privacy.s2.colCategory")}</th>
                    <th className="px-4 py-2 font-semibold text-slate-700 dark:text-slate-300">{t("privacy.s2.colData")}</th>
                    <th className="px-4 py-2 font-semibold text-slate-700 dark:text-slate-300">{t("privacy.s2.colBasis")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {dataRows.map(([cat, data, grond]) => (
                    <tr key={cat} className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-2 font-medium text-slate-800 dark:text-slate-200">{cat}</td>
                      <td className="px-4 py-2 text-slate-600 dark:text-slate-400">{data}</td>
                      <td className="px-4 py-2 text-slate-500 dark:text-slate-500">{grond}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">{t("privacy.s2.noSpecialCategories")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("privacy.s3.title")}</h2>
            <ul className="ml-5 list-disc space-y-1">
              <li>{t("privacy.s3.li1")}</li>
              <li>{t("privacy.s3.li2")}</li>
              <li>{t("privacy.s3.li4")}</li>
              <li>{t("privacy.s3.li5")}</li>
              <li>{t("privacy.s3.li6")}</li>
            </ul>
            <p className="mt-2 text-xs text-red-500 dark:text-red-400 font-medium">{t("privacy.s3.noSale")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("privacy.s4.title")}</h2>
            <ul className="ml-5 list-disc space-y-1">
              <li><strong>{t("privacy.s2.row1cat")}:</strong> {t("privacy.s4.li1")}</li>
              <li><strong>{t("privacy.s2.row2cat")}:</strong> {t("privacy.s4.li2")}</li>
              <li><strong>{t("privacy.s2.row5cat")}:</strong> {t("privacy.s4.li4")}</li>
              <li>{t("privacy.s4.li5")}</li>
              <li>{t("privacy.s4.li6")}</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("privacy.s5.title")}</h2>
            <div className="space-y-3">
              {thirdParties.map((item) => (
                <div key={item.name} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                  <p className="font-semibold text-slate-800 dark:text-slate-200">{item.name}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.info}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer"
                    className="mt-1 text-xs text-indigo-600 underline hover:text-indigo-500 dark:text-indigo-400">
                    {t("privacy.s5.privacyLinkText")}
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("privacy.s6.title")}</h2>
            <p className="mb-3">{t("privacy.s6.intro")}</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {rights.map(([title, desc]) => (
                <div key={title} className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{title}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-950/20">
              <p className="text-xs font-semibold text-indigo-800 dark:text-indigo-300">{t("privacy.s6.exerciseTitle")}</p>
              <p className="mt-1 text-xs text-indigo-700 dark:text-indigo-400">
                {t("privacy.s6.exercisePrefix")}{" "}
                <a href="mailto:privacy@langoai.com" className="underline">privacy@langoai.com</a>.
                {" "}{t("privacy.s6.exerciseSuffix")}
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("privacy.s7.title")}</h2>
            <p className="mb-2">{t("privacy.s7.intro")}</p>
            <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
              <p className="font-semibold text-slate-800 dark:text-slate-200">{t("privacy.s7.authorityName")}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Drukpersstraat 35, 1000 Brussel<br />
                Tel: +32 2 274 48 00<br />
                Website:{" "}
                <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener noreferrer"
                  className="text-indigo-600 underline dark:text-indigo-400">
                  gegevensbeschermingsautoriteit.be
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("privacy.s8.title")}</h2>
            <p className="mb-2">{t("privacy.s8.intro")}</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>{t("privacy.s8.li1")}</li>
              <li>{t("privacy.s8.li2")}</li>
              <li>{t("privacy.s8.li3")}</li>
            </ul>
            <p className="mt-2 text-xs text-slate-400">
              {t("privacy.s8.adsensePrefix")}{" "}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer"
                className="text-indigo-600 underline dark:text-indigo-400">
                {t("privacy.s8.adsenseLinkText")}
              </a>.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("privacy.s9.title")}</h2>
            <ul className="ml-5 list-disc space-y-1">
              <li>{t("privacy.s9.li1")}</li>
              <li>{t("privacy.s9.li2")}</li>
              <li>{t("privacy.s9.li3")}</li>
              <li>{t("privacy.s9.li4")}</li>
              <li>{t("privacy.s9.li5")}</li>
              <li>{t("privacy.s9.li6")}</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("privacy.s10.title")}</h2>
            <p>{t("privacy.s10.body")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("privacy.s11.title")}</h2>
            <p>{t("privacy.s11.body")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t("privacy.s12.title")}</h2>
            <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-xs text-slate-600 dark:text-slate-300">
                📧{" "}
                <a href="mailto:privacy@langoai.com" className="font-semibold text-indigo-600 underline dark:text-indigo-400">
                  privacy@langoai.com
                </a>
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{t("privacy.s12.response")}</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
