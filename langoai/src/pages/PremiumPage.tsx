import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTranslate } from "@/i18n/I18nContext";
import {
  formatPremiumExpiry,
  getPaymentExpiresAt,
  isPaymentVerified,
  PREMIUM_DAYS,
  PREMIUM_PRICE_EUR,
} from "@/utils/apiConfig";
import KofiCheckout from "@/components/KofiCheckout";

export default function PremiumPage() {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslate();
  const [showKofi, setShowKofi] = useState(false);
  const [kofiError, setKofiError] = useState("");
  const [paymentDone, setPaymentDone] = useState(false);

  if (!user) return null;

  const alreadyPremium = isPaymentVerified();
  const premiumExpiresAt = getPaymentExpiresAt();

  function handlePaymentSuccess(expiresAt: string) {
    updateProfile({ premium: true, premiumExpiresAt: expiresAt });
    setPaymentDone(true);
    setShowKofi(false);
  }

  function handleKofiError(msg: string) {
    setKofiError(msg);
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
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
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="border-b border-slate-200 bg-slate-950 px-6 py-7 text-white dark:border-slate-800">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-200">
                Lango AI monthly access
              </p>

              <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Unlock the AI Tutor for one month
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Pay EUR {PREMIUM_PRICE_EUR} with Ko-fi. The AI opens for {PREMIUM_DAYS} days.
                When the month is finished, the AI locks again until the next payment.
              </p>

              {alreadyPremium && (
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-300/30">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  AI active until {formatPremiumExpiry(premiumExpiresAt)}
                </div>
              )}
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/60">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Price</p>
                <p className="mt-2 text-2xl font-extrabold text-slate-950 dark:text-white">
                  EUR {PREMIUM_PRICE_EUR}
                </p>
                <p className="mt-1 text-xs text-slate-500">One month of AI access.</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/60">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Access</p>
                <p className="mt-2 text-2xl font-extrabold text-slate-950 dark:text-white">
                  {PREMIUM_DAYS} days
                </p>
                <p className="mt-1 text-xs text-slate-500">AI closes after one month.</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/60">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Payment</p>
                <p className="mt-2 truncate text-lg font-extrabold text-slate-950 dark:text-white">
                  Ko-fi
                </p>
                <p className="mt-1 text-xs text-slate-500">ko-fi.com/rojhawar</p>
              </div>
            </div>

            {paymentDone && (
              <div className="mx-6 mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 dark:border-emerald-800 dark:bg-emerald-900/20">
                <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
                  Payment confirmed. AI Tutor is open now.
                </p>
                <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">
                  Access ends on {formatPremiumExpiry(premiumExpiresAt)}.
                </p>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="mt-3 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  Try AI Chat
                </button>
              </div>
            )}
          </section>

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="rounded-2xl border border-rose-100 bg-rose-50 p-4 dark:border-rose-900/60 dark:bg-rose-950/40">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-600 dark:text-rose-300">
                Monthly AI plan
              </p>

              <div className="mt-3 flex items-end justify-between gap-4">
                <div>
                  <p className="text-4xl font-extrabold text-slate-950 dark:text-white">
                    EUR {PREMIUM_PRICE_EUR}
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    for one month
                  </p>
                </div>

                <div className="rounded-2xl bg-white px-3 py-2 text-center shadow-sm dark:bg-slate-900">
                  <p className="text-lg font-bold text-rose-700 dark:text-rose-300">{PREMIUM_DAYS}</p>
                  <p className="text-[11px] font-medium text-rose-500 dark:text-rose-300">days</p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              {!alreadyPremium && !showKofi ? (
                <button
                  onClick={() => {
                    setShowKofi(true);
                    setKofiError("");
                  }}
                  className="w-full rounded-xl bg-[#ff5f5f] px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#e84f4f] active:scale-[0.98]"
                >
                  Pay EUR {PREMIUM_PRICE_EUR} with Ko-fi
                </button>
              ) : null}

              {showKofi && !alreadyPremium && (
                <div className="mt-4">
                  <KofiCheckout
                    onSuccess={handlePaymentSuccess}
                    onError={handleKofiError}
                    amount={PREMIUM_PRICE_EUR}
                  />

                  {kofiError && (
                    <p className="mt-2 text-center text-xs text-red-500">{kofiError}</p>
                  )}

                  <button
                    onClick={() => setShowKofi(false)}
                    className="mt-3 w-full text-center text-xs font-medium text-slate-400 hover:text-slate-500"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-xs leading-relaxed text-slate-500 dark:bg-slate-950/60 dark:text-slate-400">
              Ko-fi sends a webhook to your website after payment. Keep this page open after paying so the AI can unlock automatically.
            </div>
          </aside>
        </div>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-bold text-slate-950 dark:text-white">What opens after payment</h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Grammar help", "Ask for rules, examples, and corrections."],
              ["Translations", "Translate phrases and understand vocabulary."],
              ["Conversation", "Practice speaking with a language tutor."],
              ["Claude AI", "Private API key stays on the server."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                <p className="text-sm font-bold text-slate-900 dark:text-white">{title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-5 text-lg font-bold text-slate-950 dark:text-white">FAQ</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                q: "Is this a subscription?",
                a: "No. One Ko-fi payment opens AI for 30 days. After that, the user pays again.",
              },
              {
                q: "What happens after one month?",
                a: "AI Tutor locks again. The user must pay EUR 4 again to open another month.",
              },
              {
                q: "Does the money come to my wallet?",
                a: "Yes. Ko-fi pays through your connected PayPal account.",
              },
              {
                q: "Is the payment automatically verified?",
                a: "Yes, after you connect the Ko-fi webhook URL in Ko-fi settings.",
              },
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