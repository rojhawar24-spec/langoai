//
// PayPalCheckout.tsx
// Shows PayPal link. Polls server for real payment confirmation.
// No "I have paid" button. No self-granting. Server issues the token.
//

import { useState, useEffect, useRef } from "react";
import { PREMIUM_PRICE_EUR, PREMIUM_DAYS, saveAccessToken } from "@/utils/apiConfig";

interface PayPalCheckoutProps {
  onSuccess: (expiresAt: string) => void;
  onError: (msg: string) => void;
  amount?: string;
}

export default function PayPalCheckout({
  onSuccess,
  onError,
  amount = PREMIUM_PRICE_EUR,
}: PayPalCheckoutProps) {
  const [step, setStep] = useState<"idle" | "waiting" | "verified" | "failed">("idle");
  const [statusMsg, setStatusMsg] = useState("");
  const [dots, setDots] = useState(".");
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dotRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (step === "waiting") {
      dotRef.current = setInterval(() => {
        setDots((d) => (d.length >= 3 ? "." : d + "."));
      }, 500);
    } else {
      if (dotRef.current) clearInterval(dotRef.current);
    }
    return () => { if (dotRef.current) clearInterval(dotRef.current); };
  }, [step]);

  useEffect(() => {
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, []);

  function startPolling() {
    setStep("waiting");
    setStatusMsg("");

    let attempts = 0;
    const MAX_ATTEMPTS = 75; // 75 × 8s = 10 minutes

    pollRef.current = setInterval(async () => {
      attempts++;
      try {
        const res = await fetch("/api/check-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        });
        const data = await res.json();

        if (data.verified && data.accessToken && data.expiresAt) {
          if (pollRef.current) clearInterval(pollRef.current);
          // Save the real server-issued token
          saveAccessToken(data.accessToken, data.expiresAt);
          setStep("verified");
          onSuccess(data.expiresAt);
          return;
        }
      } catch {
        // network hiccup — keep polling
      }

      if (attempts >= MAX_ATTEMPTS) {
        if (pollRef.current) clearInterval(pollRef.current);
        setStep("failed");
        setStatusMsg("Payment not detected after 10 minutes. If you paid, contact support.");
        onError("Payment timeout");
      }
    }, 8000);
  }

  if (step === "verified") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-5 text-center dark:border-emerald-800 dark:bg-emerald-900/20">
        <p className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
          ✅ Payment confirmed — AI Tutor unlocked!
        </p>
        <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">
          Your {PREMIUM_DAYS}-day access starts now.
        </p>
      </div>
    );
  }

  if (step === "waiting") {
    return (
      <div className="rounded-2xl border border-blue-200 bg-blue-50 px-6 py-5 text-center dark:border-blue-800 dark:bg-blue-900/20">
        <p className="text-base font-bold text-blue-700 dark:text-blue-300">
          Waiting for your payment{dots}
        </p>
        <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">
          This page updates automatically when EUR {amount} arrives.
        </p>
        <p className="mt-3 text-xs text-blue-500">
          Do not close this window. This can take 2–3 minutes.
        </p>
        {statusMsg && <p className="mt-3 text-xs text-red-500">{statusMsg}</p>}
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
        {step === "failed" && (
          <div className="rounded-xl bg-red-50 p-3 text-xs text-red-600 dark:bg-red-900/20 dark:text-red-400">
            {statusMsg}
          </div>
        )}

        <p className="text-center text-sm text-slate-600 dark:text-slate-300">
          Pay EUR {amount} via PayPal. The AI unlocks automatically once your payment arrives — no button to click.
        </p>

        <a
          href={`https://paypal.me/RojHawar/${amount}EUR`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={startPolling}
          className="inline-flex w-full items-center justify-center rounded-xl bg-[#0070ba] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#005ea6] active:scale-[0.98]"
        >
          Pay EUR {amount} with PayPal.me →
        </a>

        <div className="rounded-xl bg-slate-50 p-3 text-xs leading-relaxed text-slate-500 dark:bg-slate-900/60 dark:text-slate-400">
          After paying, stay on this page. Access unlocks automatically when the payment is confirmed.
        </div>
      </div>
    </div>
  );
}