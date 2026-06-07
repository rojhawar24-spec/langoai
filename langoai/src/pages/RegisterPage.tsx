// src/pages/RegisterPage.tsx
import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTranslate } from "@/i18n/I18nContext";
import { apiRegister } from "@/utils/storage";

type FieldErrors = {
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
};

export default function RegisterPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t } = useTranslate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(): boolean {
    const errs: FieldErrors = {};

    if (!email.trim()) {
      errs.email = t("register.errorEmailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = t("register.errorEmailFormat");
    }

    if (!username.trim()) {
      errs.username = t("register.errorUsernameRequired");
    } else if (username.trim().length < 3) {
      errs.username = t("register.errorUsernameShort");
    } else if (!/^[a-zA-Z0-9_]+$/.test(username.trim())) {
      errs.username = t("register.errorUsernameChars");
    }

    if (!password) {
      errs.password = t("register.errorPasswordRequired");
    } else if (password.length < 6) {
      errs.password = t("register.errorPasswordShort");
    }

    if (!confirmPassword) {
      errs.confirmPassword = t("register.errorConfirmRequired");
    } else if (password !== confirmPassword) {
      errs.confirmPassword = t("register.errorConfirmMatch");
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setErrors({});

    try {
      const newUser = await apiRegister({
        email: email.trim().toLowerCase(),
        username: username.trim(),
        password,
        currentLanguage: null,
        theme: "light",
        interfaceLanguage: "en",
      });

      login(newUser);
      navigate("/dashboard", { replace: true });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "";
      if (msg === "email_taken") {
        setErrors({ email: t("register.errorEmailExists") });
      } else if (msg === "username_taken") {
        setErrors({ username: t("register.errorUsernameTaken") });
      } else {
        setErrors({ general: t("register.errorGeneral") });
      }
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
            {t("register.title")}
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {t("register.subtitle")}
          </p>
        </div>

        {/* Form card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          {errors.general && (
            <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-400">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                {t("register.email")}
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((p) => ({ ...p, email: undefined })); }}
                className={`mt-1 block w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:bg-slate-900 dark:text-white ${errors.email ? "border-red-300 focus:ring-red-500 dark:border-red-500" : "border-slate-300 dark:border-slate-600"}`}
                placeholder={t("placeholder.email")}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                {t("register.username")}
              </label>
              <input
                id="username"
                type="text"
                autoComplete="username"
                value={username}
                onChange={(e) => { setUsername(e.target.value); if (errors.username) setErrors((p) => ({ ...p, username: undefined })); }}
                className={`mt-1 block w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:bg-slate-900 dark:text-white ${errors.username ? "border-red-300 focus:ring-red-500 dark:border-red-500" : "border-slate-300 dark:border-slate-600"}`}
                placeholder={t("placeholder.username")}
              />
              {errors.username && <p className="mt-1 text-xs text-red-500">{errors.username}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                {t("register.password")}
              </label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); if (errors.password) setErrors((p) => ({ ...p, password: undefined })); }}
                className={`mt-1 block w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:bg-slate-900 dark:text-white ${errors.password ? "border-red-300 focus:ring-red-500 dark:border-red-500" : "border-slate-300 dark:border-slate-600"}`}
                placeholder={t("placeholder.password")}
              />
              {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                {t("register.confirmPassword")}
              </label>
              <input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => { setConfirmPassword(e.target.value); if (errors.confirmPassword) setErrors((p) => ({ ...p, confirmPassword: undefined })); }}
                className={`mt-1 block w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:bg-slate-900 dark:text-white ${errors.confirmPassword ? "border-red-300 focus:ring-red-500 dark:border-red-500" : "border-slate-300 dark:border-slate-600"}`}
                placeholder={t("placeholder.confirmPassword")}
              />
              {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>}
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
              {t("register.submit")}
            </button>
          </form>
        </div>

        {/* Footer link */}
        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          {t("register.hasAccount")}{" "}
          <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
            {t("register.loginLink")}
          </Link>
        </p>
      </div>
    </div>
  );
}