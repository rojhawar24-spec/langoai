import { useEffect, useRef, useState } from "react";
import { PREMIUM_DAYS, PREMIUM_PRICE_EUR, saveAccessToken } from "@/utils/apiConfig";

interface KofiCheckoutProps {
  onSuccess: (expiresAt: string) => void;
  onError: (msg: string) => void;
  amount?: string;
}

type Step = "idle" | "ready" | "waiting" | "verified" | "failed";

interface KofiSession {
  sessionId: string;
  payerEmail: string;
  amount: string;
  currency: string;
  kofiUrl: string;
}

export default function KofiCheckout({
  onSuccess,
  onError,
  amount = PREMIUM_PRICE_EUR,
}: KofiCheckoutProps) {
  const [step, setStep] = useState<Step>("idle");
  const [payerEmail, setPayerEmail] = useState("");
  const [session, setSession] = useState<KofiSession | null>(null);
  const [statusMsg, setStatusMsg] = useState("");
  const [dots, setDots] = useState(".");
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dotRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (step !== "waiting") {
      if (dotRef.current) clearInterval(dotRef.current);
      return;
    }

    dotRef.current = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "." : d + "."));
    }, 500);

    return () => {
      if (dotRef.current) clearInterval(dotRef.current);
    };
  }, [step]);

  useEffect(() => {
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
      if (dotRef.current) clearInterval(dotRef.current);
    };
  }, []);

  async function createSession() {
    const email = payerEmail.trim().toLowerCase();

    if (!email || !email.includes("@")) {
      setStatusMsg("Enter the email you will use on Ko-fi.");
      return;
    }

    setStatusMsg("");
    setStep("idle");

    try {
      const res = await fetch("/api/create-kofi-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ payerEmail: email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Could not start Ko-fi payment.");
      }

      setSession(data);
      setStep("ready");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Ko-fi payment setup failed.";
      setStatusMsg(msg);
      setStep("failed");
      onError(msg);
    }
  }

  function startPayment() {
    if (!session) return;

    window.open(session.kofiUrl, "_blank", "noopener,noreferrer");
    startPolling(session.sessionId);
  }

  function startPolling(sessionId: string) {
    setStep("waiting");
    setStatusMsg("");

    let attempts = 0;
        const maxAttempts = 75;

    if (pollRef.current) clearInterval(pollRef.current);

    pollRef.current = setInterval(async () => {
      attempts++;

      try {
        const res = await fetch("/api/check-kofi-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        });

        const data = await res.json();

        if (data.verified && data.accessToken && data.expiresAt) {
          if (pollRef.current) clearInterval(pollRef.current);

          saveAccessToken(data.accessToken, data.expiresAt);
          setStep("verified");
          onSuccess(data.expiresAt);
          return;
        }

        if (!res.ok && data.error) {
          setStatusMsg(data.error);
        }
      } catch {
        // Keep polling during temporary network issues.
      }

      if (attempts >= maxAttempts) {
        if (pollRef.current) clearInterval(pollRef.current);

        const msg = "Payment not detected after 10 minutes. Check the email or try again.";
        setStep("failed");
        setStatusMsg(msg);
        onError(msg);
      }
    }, 8000);
  }

  if (step === "verified") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-5 text-center dark:border-emerald-800 dark:bg-emerald-900/20">
        <p className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
          Payment confirmed
        </p>
        <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">
          AI Tutor is unlocked for {PREMIUM_DAYS} days.
        </p>
      </div>
    );
  }

  if (step === "waiting") {
    return (
      <div className="rounded-2xl border border-blue-200 bg-blue-50 px-6 py-5 text-center dark:border-blue-800 dark:bg-blue-900/20">
        <p className="text-base font-bold text-blue-700 dark:text-blue-300">
          Waiting for Ko-fi payment{dots}
        </p>
        <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">
          We are checking for EUR {amount} from {session?.payerEmail}.
        </p>
        <p className="mt-3 text-xs text-blue-500">
          Keep this page open after paying. It can take 1-3 minutes.
        </p>

        {statusMsg && <p className="mt-3 text-xs text-red-500">{statusMsg}</p>}

        <button
          onClick={() => {
            setStep("ready");
            if (pollRef.current) clearInterval(pollRef.current);
          }}
          className="mt-4 text-xs font-medium text-blue-600 underline dark:text-blue-300"
        >
          Cancel waiting
        </button>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="bg-[#ff5f5f] px-5 py-4 text-white">
        <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
          Ko-fi payment
        </p>
        <p className="mt-1 text-2xl font-extrabold">EUR {amount}</p>
        <p className="mt-1 text-sm text-white/85">
          {PREMIUM_DAYS} days of AI Tutor access
        </p>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <label className="mb-1 block text-xs font-semibold text-slate-600 dark:text-slate-300">
            Email you will use on Ko-fi
          </label>
          <input
            type="email"
            value={payerEmail}
            onChange={(e) => setPayerEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-indigo-500 dark:focus:ring-indigo-800"
          />
        </div>

        {!session ? (
          <button
            onClick={createSession}
            className="w-full rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-slate-800 active:scale-[0.98] dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Continue to Ko-fi
          </button>
        ) : (
          <button
            onClick={startPayment}
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#ff5f5f] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#e84f4f] active:scale-[0.98]"
          >
            Pay EUR {amount} with Ko-fi
          </button>
        )}

        {session && (
          <div className="rounded-xl bg-slate-50 p-3 text-xs leading-relaxed text-slate-500 dark:bg-slate-900/60 dark:text-slate-400">
            Pay with this email if Ko-fi asks for it:
            <span className="block font-semibold text-slate-700 dark:text-slate-200">
              {session.payerEmail}
            </span>
            Do not remove the LANGOAI code from the Ko-fi message.
          </div>
        )}

        {statusMsg && (
          <p className="text-center text-xs text-red-500">{statusMsg}</p>
        )}

        <p className="text-center text-xs leading-relaxed text-slate-400">
          Automatic unlock works after Ko-fi webhook is connected.
        </p>
      </div>
    </div>
  );
}