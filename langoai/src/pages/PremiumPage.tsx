import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { PREMIUM_PERKS } from "@/utils/premium";
import { isPaymentVerified } from "@/utils/apiConfig";
import PayPalCheckout from "@/components/PayPalCheckout";

export default function PremiumPage() {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [showPayPal, setShowPayPal] = useState(false);
  const [paypalError, setPaypalError] = useState("");
  const [paymentDone, setPaymentDone] = useState(false);

  if (!user) return null;

  const alreadyPremium = user.premium || isPaymentVerified();

  function handlePaymentSuccess() {
    updateProfile({ premium: true });
    setPaymentDone(true);
    setShowPayPal(false);
  }

  function handlePayPalError(msg: string) {
    setPaypalError(msg);
  }

  function handleDeactivate() {
    updateProfile({ premium: false });
    setPaymentDone(false);
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 flex items-center gap-1 text-sm text-slate-500 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          Back to Dashboard
        </button>

        {/* Hero */}
        <div className="mb-12 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-3xl shadow-lg shadow-amber-200 dark:shadow-amber-900/40">
            👑
          </div>
          <h1 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Unlock AI Tutor
          </h1>
          <p className="mt-3 text-lg text-slate-500 dark:text-slate-400">
            Get unlimited access to the AI Language Tutor powered by Claude.
          </p>

          {alreadyPremium && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              ✅ AI Tutor is unlocked
            </div>
          )}

          {paymentDone && (
            <div className="mt-4 rounded-xl bg-emerald-50 px-6 py-4 text-center dark:bg-emerald-900/20">
              <p className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
                🎉 Payment successful! AI Tutor is now unlocked.
              </p>
              <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">
                Start a conversation now — the AI is ready!
              </p>
              <button
                onClick={() => navigate("/dashboard")}
                className="mt-3 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                <span>🤖</span> Try AI Chat
              </button>
            </div>
          )}
        </div>

        {/* Pricing card */}
        <div className="mx-auto mb-12 max-w-md">
          <div className="relative rounded-2xl border-2 border-amber-400 bg-gradient-to-b from-amber-50 to-white p-8 shadow-lg shadow-amber-100 dark:border-amber-500 dark:from-amber-900/20 dark:to-slate-800 dark:shadow-amber-900/30">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-1 text-xs font-bold text-white shadow-sm">
              ONE-TIME PURCHASE
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">AI Tutor Access</h2>
              <span className="text-xl">🤖</span>
            </div>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Unlimited AI-powered language practice
            </p>
            <p className="mt-4">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">€3</span>
              <span className="text-slate-400"> one time</span>
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <svg className="h-4 w-4 shrink-0 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Unlimited AI chat messages
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <svg className="h-4 w-4 shrink-0 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Grammar help, translations & conversation
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <svg className="h-4 w-4 shrink-0 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Ad-free experience
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <svg className="h-4 w-4 shrink-0 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Premium badge & exclusive features
              </li>
            </ul>

            <div className="mt-8">
              {alreadyPremium ? (
                <button
                  onClick={handleDeactivate}
                  className="w-full rounded-lg border-2 border-amber-400 bg-white px-4 py-3 text-sm font-bold text-amber-700 transition hover:bg-amber-50 dark:border-amber-500 dark:bg-slate-800 dark:text-amber-300 dark:hover:bg-amber-900/30"
                >
                  (Demo) Deactivate Premium
                </button>
              ) : !showPayPal ? (
                <button
                  onClick={() => {
                    setShowPayPal(true);
                    setPaypalError("");
                  }}
                  className="w-full rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-3 text-sm font-bold text-white shadow-md shadow-amber-200 transition hover:from-amber-500 hover:to-orange-600 dark:shadow-amber-900/40"
                >
                  🎉 Unlock for €3 with PayPal
                </button>
              ) : null}

              {showPayPal && !alreadyPremium && (
                <div className="mt-4">
                  <PayPalCheckout
                    onSuccess={handlePaymentSuccess}
                    onError={handlePayPalError}
                    amount="3.00"
                  />
                  {paypalError && (
                    <p className="mt-2 text-center text-xs text-red-500">{paypalError}</p>
                  )}
                  <button
                    onClick={() => setShowPayPal(false)}
                    className="mt-2 w-full text-center text-xs text-slate-400 hover:text-slate-500"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <p className="mt-4 text-center text-xs text-slate-400">
              🔒 Secure payment via PayPal • API key protected
            </p>
          </div>
        </div>

        {/* Feature comparison */}
        <div className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="mb-6 text-lg font-bold text-slate-900 dark:text-white">What You Get</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="py-3 text-slate-500 font-medium">Feature</th>
                  <th className="py-3 text-center text-slate-500 font-medium">Free</th>
                  <th className="py-3 text-center text-amber-600 font-medium">€3 Unlock</th>
                </tr>
              </thead>
              <tbody>
                {PREMIUM_PERKS.map((perk) => (
                  <tr key={perk.label} className="border-b border-slate-100 dark:border-slate-700/50">
                    <td className="flex items-center gap-2 py-3 text-slate-700 dark:text-slate-300">
                      <span>{perk.icon}</span><span>{perk.label}</span>
                    </td>
                    <td className="py-3 text-center text-slate-500">
                      {typeof perk.free === "string" ? perk.free : perk.free ? "✅" : "—"}
                    </td>
                    <td className="py-3 text-center text-amber-600 dark:text-amber-400">
                      {typeof perk.premium === "string" ? perk.premium : perk.premium ? "✅" : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="mb-6 text-lg font-bold text-slate-900 dark:text-white">FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "Is this a one-time payment?", a: "Yes! €3 gives you permanent access to the AI Tutor. No subscriptions, no recurring fees." },
              { q: "How does the AI work?", a: "The AI Tutor is powered by Claude (Anthropic). It provides grammar explanations, translations, and conversation practice in your target language." },
              { q: "Is my payment secure?", a: "Absolutely. All payments are processed securely through PayPal. We never see or store your payment details." },
              { q: "Can I get a refund?", a: "If you're not satisfied within 7 days, contact us for a full refund. No questions asked." },
            ].map((faq) => (
              <div key={faq.q}>
                <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">{faq.q}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
