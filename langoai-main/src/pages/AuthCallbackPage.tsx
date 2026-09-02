import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";

export default function AuthCallbackPage() {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("Verifying your email…");

  useEffect(() => {
    let alive = true;
    const requestId = searchParams.get("request_id");
    const tokenHash = searchParams.get("token_hash");

    const run = async () => {
      if (tokenHash) {
        await supabase.auth.verifyOtp({ token_hash: tokenHash, type: "email" });
      }

      let session = (await supabase.auth.getSession()).data.session;

      // Supabase JS handles the implicit-flow session from the URL hash.
      // Give the auth listener a moment to process it on a fresh device.
      if (!session) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        session = (await supabase.auth.getSession()).data.session;
      }

      if (!session?.user || !requestId) {
        if (alive) setMessage("Email verified. You can return to the device where you signed up.");
        return;
      }

      const response = await fetch("/api/verification-complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ requestId }),
      });

      if (alive) {
        setMessage(response.ok
          ? "Email verified. Go back to the device where you signed up — it will continue automatically."
          : "Email was verified, but the handoff could not be completed. You can return to the signup device and try again.");
      }
    };

    void run().catch(() => {
      if (alive) setMessage("Email verification failed. Please request a new confirmation email.");
    });

    return () => { alive = false; };
  }, [searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 dark:bg-slate-900">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="mb-4 text-5xl" aria-hidden="true">✅</div>
        <h1 className="text-xl font-semibold text-slate-900 dark:text-white">Email verification</h1>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{message}</p>
        <Link to="/login" className="mt-6 inline-block rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">
          Back to login
        </Link>
      </div>
    </div>
  );
}
