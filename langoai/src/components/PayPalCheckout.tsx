//
// PayPalCheckout.tsx - PayPal.me payment
// User pays via paypal.me/RojHawar, then clicks confirm to unlock.
//

import { useState } from "react";
import { markPaymentVerified, PREMIUM_DAYS, PREMIUM_PRICE_EUR } from "@/utils/apiConfig";

interface PayPalCheckoutProps {
  onSuccess: (expiresAt: string) => void;
  onError: (msg: string) => void;
  amount?: string;
}

export default function PayPalCheckout({
  onSuccess,
  amount = PREMIUM_PRICE_EUR,
}: PayPalCheckoutProps) {
  const [confirmed, setConfirmed] = useState(false);

  function handleConfirm() {
    const expiresAt = markPaymentVerified();
    setConfirmed(true);
    onSuccess(expiresAt);
  }

  if (confirmed) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-5 text-center dark:border-emerald-800 dark:bg-emerald-900/20">
        <p className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
          AI Tutor unlocked
        </p>
        <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">
          Your 30 day access starts now.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="bg-[#003087] px-5 py-4 text-white">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-100">
          PayPal.me payment
        </p>
        <p className="mt-1 text-2xl font-extrabold">EUR {amount}</p>
        <p className="mt-1 text-sm text-blue-100">
          {PREMIUM_DAYS} days of AI Tutor access
        </p>
      </div>

      <div className="space-y-4 p-5">
        <p className="text-center text-sm text-slate-600 dark:text-slate-300">
          Send EUR {amount} to your PayPal.me wallet.
        </p>

        <a
          href={`https://paypal.me/RojHawar/${amount}EUR`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-xl bg-[#0070ba] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#005ea6] active:scale-[0.98]"
        >
          Pay with PayPal.me
        </a>

        <div className="rounded-xl bg-slate-50 p-3 text-xs leading-relaxed text-slate-500 dark:bg-slate-900/60 dark:text-slate-400">
          After payment, come back here and confirm. The AI opens for one month.
          When the month ends, the AI locks again and the user must pay EUR {amount} again.
        </div>

        <button
          onClick={handleConfirm}
          className="w-full rounded-xl bg-emerald-500 px-4 py-3 text-sm font-bold text-white shadow transition hover:bg-emerald-600 active:scale-[0.98]"
        >
          I have paid - unlock AI Tutor
        </button>
      </div>
    </div>
  );
}