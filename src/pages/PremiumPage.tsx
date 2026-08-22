// src/pages/PremiumPage.tsx
// ✅ Betaalknop uitgeschakeld — Coming Soon
//    Niemand kan betalen totdat Ko-fi webhook is ingesteld

import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTranslate } from "@/i18n/I18nContext";
import {
  formatPremiumExpiry,
  getPaymentExpiresAt,
  isPremiumActive,
  PREMIUM_DAYS,
  PREMIUM_PRICE_EUR,
} from "@/utils/apiConfig";

export default function PremiumPage() {
  const { user } = useAuth();
  const navigate  = useNavigate();
  const { t }     = useTranslate();

  if (!user) return null;

  // ✅ FIX (audit): gebruikte voorheen isPaymentVerified(), die ALLEEN naar
  // localStorage keek. Iedereen kon met 2 regels in de devtools-console
  // (localStorage.setItem) zichzelf hier een "Premium actief tot ..."-banner
  // laten zien. isPremiumActive(user) kijkt eerst naar het server-profiel
  // (Supabase) en valt alleen terug op localStorage als er geen ingelogde
  // gebruiker met een echt profiel is. Puur cosmetisch probleem (deze pagina
  // ontgrendelt zelf niks), maar nu ook hier niet meer na te bootsen.
  const alreadyPremium   = isPremiumActive(user);
  const premiumExpiresAt = user.premiumExpiresAt ?? getPaymentExpiresAt();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-8 pb-28 sm:px-6">

        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 flex items-center gap-1 text-sm font-medium text-slate-500 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-300"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t("generic.back_dashboard")}
        </button>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">

          {/* Left: info */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="border-b border-slate-200 bg-slate-950 px-6 py-7 text-white dark:border-slate-800">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-200">
                Lango AI · {t("premium.monthlyAccess")}
              </p>
              <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                {t("premium.aiTutorComingSoon")}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                {t("premium.introText")
                  .replace("{price}", String(PREMIUM_PRICE_EUR))
                  .replace("{days}", String(PREMIUM_DAYS))}
              </p>

              {alreadyPremium && (
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-300/30">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  {t("premium.activeUntil").replace("{date}", formatPremiumExpiry(premiumExpiresAt))}
                </div>
              )}
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/60">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t("premium.price")}</p>
                <p className="mt-2 text-2xl font-extrabold text-slate-950 dark:text-white">
                  EUR {PREMIUM_PRICE_EUR}
                </p>
                <p className="mt-1 text-xs text-slate-500">{t("premium.oneMonthAccess")}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/60">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t("premium.access")}</p>
                <p className="mt-2 text-2xl font-extrabold text-slate-950 dark:text-white">
                  {PREMIUM_DAYS} {t("premium.days")}
                </p>
                <p className="mt-1 text-xs text-slate-500">{t("premium.aiClosesAfterMonth")}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/60">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t("premium.payment")}</p>
                <p className="mt-2 text-lg font-extrabold text-slate-950 dark:text-white">Ko-fi</p>
                <p className="mt-1 text-xs text-slate-500">ko-fi.com/rojhawar</p>
              </div>
            </div>
          </section>

          {/* Right: payment — COMING SOON */}
          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="rounded-2xl border border-rose-100 bg-rose-50 p-4 dark:border-rose-900/60 dark:bg-rose-950/40">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-600 dark:text-rose-300">
                {t("premium.monthlyPlan")}
              </p>
              <div className="mt-3 flex items-end justify-between gap-4">
                <div>
                  <p className="text-4xl font-extrabold text-slate-950 dark:text-white">
                    EUR {PREMIUM_PRICE_EUR}
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{t("premium.forOneMonth")}</p>
                </div>
                <div className="rounded-2xl bg-white px-3 py-2 text-center shadow-sm dark:bg-slate-900">
                  <p className="text-lg font-bold text-rose-700 dark:text-rose-300">{PREMIUM_DAYS}</p>
                  <p className="text-[11px] font-medium text-rose-500">{t("premium.days")}</p>
                </div>
              </div>
            </div>

            {/* ✅ COMING SOON — betaalknop uitgeschakeld */}
            <div className="mt-5 flex flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-indigo-200 bg-indigo-50 px-4 py-8 text-center dark:border-indigo-800 dark:bg-indigo-950/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-3xl shadow-lg">
                🤖
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                {t("ai.coming_soon")}
              </h3>
              <p className="max-w-xs text-sm text-slate-500 dark:text-slate-400">
                {t("ai.coming_soon_desc")}
              </p>
              {/* ✅ Knop ziet er uit als button maar doet niets */}
              <button
                disabled
                className="mt-2 w-full cursor-not-allowed rounded-xl bg-slate-300 px-4 py-3 text-sm font-bold text-slate-400 dark:bg-slate-700 dark:text-slate-500"
              >
                {t("premium.payButtonPrefix").replace("{price}", String(PREMIUM_PRICE_EUR))} — {t("ai.coming_soon")}
              </button>
            </div>

            <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-xs leading-relaxed text-slate-500 dark:bg-slate-950/60 dark:text-slate-400">
              {t("premium.paymentEnabledSoon")}
            </div>
          </aside>
        </div>

        {/* What you get */}
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-bold text-slate-950 dark:text-white">
            {t("premium.whatOpensAfterPayment")}
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [t("premium.grammarHelp"),   t("premium.faq1a")],
              [t("premium.translations"),  t("premium.faq2a")],
              [t("premium.conversation"),  t("premium.faq3a")],
              ["Claude AI",      t("premium.claudeAiDesc")],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                <p className="text-sm font-bold text-slate-900 dark:text-white">{title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-5 text-lg font-bold text-slate-950 dark:text-white">FAQ</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { q: t("premium.faq1q"), a: t("premium.faq1a") },
              { q: t("premium.faq2q"), a: t("premium.faq2a") },
              { q: t("premium.faq3q"), a: t("premium.faq3a") },
              { q: t("premium.faq4q"), a: t("premium.faq4a") },
            ].map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/60">
                <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">{faq.q}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
