import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTranslate } from "@/i18n/I18nContext";
import { verifyPassword } from "@/utils/auth";
import { findUserByEmailOrUsername, setRememberMe } from "@/utils/storage";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t } = useTranslate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMeState] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForgotMsg, setShowForgotMsg] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setShowForgotMsg(false);

    if (!identifier.trim() || !password) {
      setError(t("login.errorEmpty"));
      return;
    }

    setIsSubmitting(true);

    try {
      const user = findUserByEmailOrUsername(identifier.trim());
      if (!user) {
        setError(t("login.errorInvalid"));
        setIsSubmitting(false);
        return;
      }

      const valid = await verifyPassword(password, user.hashedPassword);
      if (!valid) {
        setError(t("login.errorInvalid"));
        setIsSubmitting(false);
        return;
      }

      setRememberMe(rememberMe);
      login(user);
      navigate("/dashboard", { replace: true });
    } catch {
      setError(t("login.errorGeneral"));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 dark:bg-slate-900 sm:px-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400"
          >
            <svg
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            Lango AI
          </Link>
          <h1 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
            {t("login.title")}
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {t("login.subtitle")}
          </p>
        </div>

        {/* Form card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          {error && (
            <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-400">
              {error}
            </div>
          )}

          {showForgotMsg && (
            <div className="mb-4 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
              {t("login.forgotMsg")}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Identifier */}
            <div>
              <label
                htmlFor="identifier"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                {t("login.identifier")}
              </label>
              <input
                id="identifier"
                type="text"
                autoComplete="username"
                value={identifier}
                onChange={(e) => {
                  setIdentifier(e.target.value);
                  if (error) setError("");
                }}
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                placeholder={t("placeholder.identifier")}
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  {t("login.password")}
                </label>
                <button
                  type="button"
                  onClick={() => setShowForgotMsg(true)}
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
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError("");
                }}
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                placeholder={t("placeholder.passwordLogin")}
              />
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMeState(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600"
              />
              <label
                htmlFor="remember"
                className="text-sm text-slate-600 dark:text-slate-400"
              >
                {t("login.rememberMe")}
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting && (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              )}
              {t("login.submit")}
            </button>
          </form>
        </div>

        {/* Footer link */}
        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          {t("login.noAccount")}{" "}
          <Link
            to="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          >
            {t("login.createAccount")}
          </Link>
        </p>
      </div>
    </div>
  );
}
