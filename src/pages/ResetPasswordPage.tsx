// src/pages/ResetPasswordPage.tsx
// ✅ Pagina waar Supabase naartoe redirect na klikken reset link

import { useState, useEffect, useRef, type FormEvent, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useTranslate } from "@/i18n/I18nContext";

export default function ResetPasswordPage() {
  const navigate            = useNavigate();
  const { t }               = useTranslate();
  const [newPw,     setNewPw]     = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [error,     setError]     = useState("");
  const [success,   setSuccess]   = useState(false);
  // ✅ FIX (audit — memory/nav leak): als de gebruiker binnen de 3s wegnavigeert
  // ná een geslaagde reset, mag deze timer de navigatie niet alsnog forceren.
  const redirectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    return () => {
      if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
    };
  }, []);
  const [loading,   setLoading]   = useState(false);
  const [validLink, setValidLink] = useState(false);

  // 🔒 FIX (found while checking this page end-to-end — a real bypass,
  // not a code-quality nitpick): this used to check
  // supabase.auth.getSession() and treat ANY existing session as "the
  // user clicked a valid reset link." But an already-logged-in user
  // simply navigating to /reset-password also has a session — nothing
  // here distinguished "just clicked a genuine recovery email link" from
  // "already logged in for an unrelated reason." That meant anyone with
  // temporary access to a logged-in session (a stolen/shared session, an
  // unlocked device) could set a brand-new password on THIS page without
  // ever proving they knew the current one — bypassing the exact
  // safeguard Settings' own Change Password flow correctly enforces
  // (re-entering the current password via signInWithPassword) for the
  // identical action.
  //
  // Supabase fires a SPECIFIC "PASSWORD_RECOVERY" event via
  // onAuthStateChange — emitted INSTEAD OF "SIGNED_IN" specifically when
  // the URL contains a password-recovery link — precisely to make this
  // distinguishable. Verified against Supabase's own current docs before
  // relying on it, since getting an auth flow wrong from a guess would be
  // worse than not touching it. Only that specific event now unlocks
  // this form; a plain existing session no longer does.
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event: string) => {
      if (event === "PASSWORD_RECOVERY") setValidLink(true);
    });
    return () => subscription.unsubscribe();
  }, []);

  async function handleReset(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (newPw.length < 8) {
      setError(t("resetpw.errorTooShort"));
      return;
    }
    if (newPw !== confirmPw) {
      setError(t("resetpw.errorMismatch"));
      return;
    }

    setLoading(true);
    const { error: supaErr } = await supabase.auth.updateUser({ password: newPw });

    if (supaErr) {
      setError(t("resetpw.errorGeneral"));
    } else {
      setSuccess(true);
      redirectTimerRef.current = setTimeout(() => navigate("/login", { replace: true }), 3000);
    }
    setLoading(false);
  }

  if (!validLink) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 dark:bg-slate-900">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <p className="text-4xl">⚠️</p>
          <h1 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{t("resetpw.invalidTitle")}</h1>
          <p className="mt-2 text-sm text-slate-500">{t("resetpw.invalidBody")}</p>
          <button
            onClick={() => navigate("/login")}
            className="mt-6 rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            {t("resetpw.backToLogin")}
          </button>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 dark:bg-slate-900">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <p className="text-5xl">✅</p>
          <h1 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{t("resetpw.successTitle")}</h1>
          <p className="mt-2 text-sm text-slate-500">{t("resetpw.redirecting")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 dark:bg-slate-900">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t("resetpw.title")}</h1>
          <p className="mt-1 text-sm text-slate-500">{t("resetpw.subtitle")}</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          {error && (
            <div role="alert" className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleReset} className="space-y-5" noValidate>
            <div>
              <label htmlFor="newPw" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                {t("resetpw.newPasswordLabel")}
              </label>
              <input
                id="newPw"
                type="password"
                autoComplete="new-password"
                value={newPw}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setNewPw(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="confirmPw" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                {t("resetpw.confirmPasswordLabel")}
              </label>
              <input
                id="confirmPw"
                type="password"
                autoComplete="new-password"
                value={confirmPw}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPw(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:opacity-60"
            >
              {loading && <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />}
              {t("resetpw.submit")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
