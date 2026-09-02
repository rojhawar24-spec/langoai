// src/pages/LoginPage.tsx
// ✅ Wachtwoord vergeten — echte Supabase reset e-mail

import { useState, type FormEvent, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTranslate } from "@/i18n/I18nContext";
import { apiLogin, apiVerifyMfaLogin } from "@/utils/storage";
import { supabase } from "@/lib/supabase";
import { ShieldCheck } from "lucide-react";

type Mode = "login" | "forgot" | "mfa";

export default function LoginPage() {
  const navigate     = useNavigate();
  const { login }    = useAuth();
  const { t }        = useTranslate();

  const [mode,         setMode]         = useState<Mode>("login");
  const [identifier,   setIdentifier]   = useState("");
  const [password,     setPassword]     = useState("");
  const [forgotEmail,  setForgotEmail]  = useState("");
  const [mfaCode,      setMfaCode]      = useState("");
  const [mfaFactorId,  setMfaFactorId]  = useState("");
  const [error,        setError]        = useState("");
  const [successMsg,   setSuccessMsg]   = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ── LOGIN ──────────────────────────────────────────────
  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!identifier.trim() || !password) {
      setError(t("login.errorEmpty"));
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await apiLogin(identifier.trim(), password);
      if (result.status === "mfa_required") {
        setMfaFactorId(result.factorId);
        setMode("mfa");
      } else {
        login(result.user);
        navigate("/dashboard", { replace: true });
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "";
      if (msg === "rate_limited") {
        const seconds = (err as Error & { retryAfterSeconds?: number }).retryAfterSeconds;
        const minutes = seconds ? Math.ceil(seconds / 60) : 15;
        setError(t("login.errorRateLimited").replace("{minutes}", String(minutes)));
      } else if (msg === "invalid_credentials") {
        setError(t("login.errorInvalid"));
      } else {
        setError(t("login.errorGeneral"));
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  // ── 2FA-CODE VERIFIËREN ───────────────────────────────
  async function handleMfaVerify(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!/^\d{6}$/.test(mfaCode.trim())) {
      setError(t("login.mfaErrorFormat"));
      return;
    }

    setIsSubmitting(true);
    try {
      const user = await apiVerifyMfaLogin(mfaFactorId, mfaCode.trim(), identifier.trim());
      login(user);
      navigate("/dashboard", { replace: true });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "";
      if (msg === "rate_limited") {
        const seconds = (err as Error & { retryAfterSeconds?: number }).retryAfterSeconds;
        const minutes = seconds ? Math.ceil(seconds / 60) : 15;
        setError(t("login.errorRateLimited").replace("{minutes}", String(minutes)));
      } else {
        setError(t("login.mfaErrorInvalid"));
      }
      setMfaCode("");
    } finally {
      setIsSubmitting(false);
    }
  }

  // ── WACHTWOORD VERGETEN ───────────────────────────────
  async function handleForgot(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    if (!forgotEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forgotEmail)) {
      setError(t("login.forgotEmailInvalid"));
      return;
    }

    setIsSubmitting(true);
    try {
      const { error: supaErr } = await supabase.auth.resetPasswordForEmail(
        forgotEmail.trim().toLowerCase(),
        { redirectTo: `${window.location.origin}/reset-password` }
      );

      if (supaErr) {
        setError(t("login.forgotErrorSend"));
      } else {
        setSuccessMsg(t("login.forgotEmailSent"));
      }
    } catch {
      setError(t("login.errorGeneral"));
    } finally {
      setIsSubmitting(false);
    }
  }

  // ── UI ─────────────────────────────────────────────────
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-12 dark:bg-slate-900 sm:px-6">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-900/20" />
        <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-900/20" />
      </div>

      <div className="relative w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            Lango AI
          </Link>
          <h1 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
            {mode === "login" && t("login.title")}
            {mode === "forgot" && t("login.forgotPassword")}
            {mode === "mfa" && t("login.mfaTitle")}
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {mode === "login" && t("login.subtitle")}
            {mode === "forgot" && t("login.forgotMsg")}
            {mode === "mfa" && t("login.mfaSubtitle")}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">

          {/* Error */}
          {error && (
            <div role="alert" className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-400">
              {error}
            </div>
          )}

          {/* Success */}
          {successMsg && (
            <div role="status" className="mb-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              ✅ {successMsg}
            </div>
          )}

          {/* ── LOGIN FORM ── */}
          {mode === "login" && (
            <form onSubmit={handleLogin} className="space-y-5" noValidate>
              <div>
                <label htmlFor="identifier" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  {t("login.identifier")}
                </label>
                <input
                  id="identifier"
                  type="text"
                  autoComplete="username"
                  value={identifier}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => { setIdentifier(e.target.value); if (error) setError(""); }}
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                  placeholder={t("placeholder.identifier")}
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    {t("login.password")}
                  </label>
                  <button
                    type="button"
                    onClick={() => { setMode("forgot"); setError(""); setSuccessMsg(""); }}
                    className="text-xs font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                  >
                    {t("login.forgotPassword")}
                  </button>
                </div>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value); if (error) setError(""); }}
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                  placeholder={t("placeholder.passwordLogin")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting && <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" aria-hidden="true" />}
                {t("login.submit")}
              </button>
            </form>
          )}

          {/* ── 2FA CODE FORM ── */}
          {mode === "mfa" && (
            <form onSubmit={handleMfaVerify} className="space-y-5" noValidate>
              <div>
                <label htmlFor="mfaCode" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  {t("login.mfaCodeLabel")}
                </label>
                <input
                  id="mfaCode"
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={6}
                  value={mfaCode}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => { setMfaCode(e.target.value.replace(/\D/g, "")); if (error) setError(""); }}
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-center text-lg tracking-[0.5em] outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                  placeholder="000000"
                  autoFocus
                />
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  {t("login.mfaCodeHint")}
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || mfaCode.length !== 6}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting && <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" aria-hidden="true" />}
                {t("login.mfaVerifyButton")}
              </button>

              <button
                type="button"
                onClick={() => { setMode("login"); setMfaCode(""); setError(""); supabase.auth.signOut(); }}
                className="w-full text-center text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
              >
                ← {t("login.backToLogin")}
              </button>
            </form>
          )}

          {/* ── FORGOT PASSWORD FORM ── */}
          {mode === "forgot" && !successMsg && (
            <form onSubmit={handleForgot} className="space-y-5" noValidate>
              <div>
                <label htmlFor="forgotEmail" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  {t("login.forgotEmailLabel")}
                </label>
                <input
                  id="forgotEmail"
                  type="email"
                  autoComplete="email"
                  value={forgotEmail}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => { setForgotEmail(e.target.value); if (error) setError(""); }}
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                  placeholder="you@example.com"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting && <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" aria-hidden="true" />}
                {t("login.forgotSubmit")}
              </button>

              <button
                type="button"
                onClick={() => { setMode("login"); setError(""); setSuccessMsg(""); }}
                className="w-full text-center text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
              >
                ← {t("login.backToLogin")}
              </button>
            </form>
          )}

          {/* Success state — back to login */}
          {mode === "forgot" && successMsg && (
            <button
              type="button"
              onClick={() => { setMode("login"); setSuccessMsg(""); setForgotEmail(""); }}
              className="mt-2 w-full text-center text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
            >
              ← {t("login.backToLogin")}
            </button>
          )}
        </div>

        {/* Trust element */}
        <Link
          to="/security"
          className="mt-5 flex items-center justify-center gap-1.5 text-xs font-medium text-slate-400 transition hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400"
        >
          <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
          {t("trust.badgeText")}
        </Link>

        {/* Footer */}
        {mode === "login" && (
          <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
            {t("login.noAccount")}{" "}
            <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
              {t("login.createAccount")}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
