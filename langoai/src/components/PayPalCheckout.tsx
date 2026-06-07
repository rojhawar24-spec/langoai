//
// PayPalCheckout.tsx — Simple PayPal.me link
// User pays via paypal.me/RojHawar, then clicks "I paid" to unlock.
//

import { useState } from "react";
import { markPaymentVerified } from "@/utils/apiConfig";

interface PayPalCheckoutProps {
  onSuccess: () => void;
  onError: (msg: string) => void;
  amount?: string;
}

export default function PayPalCheckout({
  onSuccess,
  amount = "3.00",
}: PayPalCheckoutProps) {
  const [confirmed, setConfirmed] = useState(false);

  function handleConfirm() {
    markPaymentVerified();
    setConfirmed(true);
    onSuccess();
  }

  if (confirmed) {
    return (
      <div className="rounded-xl bg-emerald-50 px-6 py-4 text-center dark:bg-emerald-900/20">
        <p className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
          🎉 Unlocked! Thank you!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-700 dark:bg-amber-900/20">
      <p className="text-sm text-slate-600 dark:text-slate-300 text-center">
        Send <span className="font-bold text-slate-900 dark:text-white">€{amount}</span> via PayPal to unlock the AI Tutor:
      </p>

      <a
        href={`https://paypal.me/RojHawar/${amount}EUR`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl bg-[#0070ba] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#005ea6]"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 4.643-5.813 4.643h-2.19c-.966 0-1.782.705-1.932 1.658l-1.12 7.108H7.98l-.17 1.078h3.5c.524 0 .968-.382 1.05-.9l.43-2.712a1.063 1.063 0 0 1 1.05-.9h1.406c3.849 0 6.86-1.563 7.74-6.083.397-2.054.028-3.611-1.764-4.605z"/>
        </svg>
        Pay €{amount} via PayPal.me
      </a>

      <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
        After paying, click the button below to unlock:
      </p>

      <button
        onClick={handleConfirm}
        className="w-full rounded-xl bg-emerald-500 px-4 py-3 text-sm font-bold text-white shadow transition hover:bg-emerald-600"
      >
        ✅ I have paid — Unlock AI Tutor
      </button>
    </div>
  );
}
