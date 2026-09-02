// src/pages/RegisterPage.tsx
// ✅ BUG-29 FIXED: password minimum 8 characters + strength indicator

import { useState, useEffect, type FormEvent, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTranslate } from "@/i18n/I18nContext";
import { apiRegister } from "@/utils/storage";
import { ShieldCheck } from "lucide-react";

type FieldErrors = {
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
};

// ✅ Password strength calculation
function getPasswordStrength(password: string): {
  score: number; // 0-4
  label: string;
  color: string;
} {
  if (!password) return { score: 0, label: "", color: "" };

  let score = 0;
  if (password.length >= 8)  score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const levels = [
    { label: "register.veryWeak",   color: "bg-red-500" },
    { label: "register.weak",       color: "bg-orange-500" },
    { label: "register.fair",       color: "bg-yellow-500" },
    { label: "register.strong",     color: "bg-blue-500" },
    { label: "register.veryStrong", color: "bg-emerald-500" },
  ];

  const capped = Math.min(score, 4);
  return { score: capped, ...levels[capped] };
}

export default function RegisterPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t } = useTranslate();

  const [email,           setEmail]           = useState("");
  const [username,        setUsername]        = useState("");
  const [password,        setPassword]        = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors,          setErrors]          = useState<FieldErrors>({});
  const [isSubmitting,    setIsSubmitting]    = useState(false);
  const [needsEmailConfirmation, setNeedsEmailConfirmation] = useState(false);
  const [verificationRequestId, setVerificationRequestId] = useState<string | null>(null);
  const [verificationChecking, setVerificationChecking] = useState(false);
  const [showPassword,    setShowPassword]    = useState(false);

  const strength = getPasswordStrength(password);

  useEffect(() => {
    if (!needsEmailConfirmation || !verificationRequestId) return;

    let stopped = false;
    const check = async () => {
      try {
        const response = await fetch(`/api/verification-status?request_id=${encodeURIComponent(verificationRequestId)}`);
        const data = await response.json().catch(() => ({}));
        if (stopped || !response.ok || !data.verified) return;

        setVerificationChecking(true);
        const result = await import("@/utils/storage").then((m) =>
          m.apiLogin(email.trim().toLowerCase(), password)
        );
        if (result.status === "ok") {
          login(result.user);
          navigate("/onboarding", { replace: true });
          return;
        }
      } catch (err) {
        console.error("Cross-device verification polling failed:", err);
      } finally {
        if (!stopped) setVerificationChecking(false);
      }
    };

    const interval = window.setInterval(check, 2500);
    void check();
    return () => { stopped = true; window.clearInterval(interval); };
  }, [needsEmailConfirmation, verificationRequestId, email, password, login, navigate]);

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
    } else if (password.length < 8) {
      // ✅ BUG-29 FIX: 8 instead of 6
      errs.password = t("register.passwordShort");
    } else if (strength.score < 1) {
      errs.password = t("register.passwordWeak");
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
        email:            email.trim().toLowerCase(),
        username:         username.trim(),
        password,
        currentLanguage:  null,
        theme:            "light",
        interfaceLanguage: "en",
      });

      login(newUser);
      // ✅ Nieuw: eerst de onboarding-flow (taal, waarom, dagdoel) i.p.v.
      // direct naar het dashboard — was voorheen altijd "/dashboard".
      navigate("/onboarding", { replace: true });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "";
      if (msg.startsWith("email_confirmation_required:")) {
        const requestId = msg.slice("email_confirmation_required:".length);
        setVerificationRequestId(requestId);
        setNeedsEmailConfirmation(true);
      } else if (msg === "email_taken") {
        setErrors({ email: t("register.errorEmailTaken") });
      } else if (msg === "username_taken") {
        setErrors({ username: t("register.errorUsernameTaken") });
      } else {
        setErrors({ general: t("register.errorGeneral") });
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  if (needsEmailConfirmation) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 dark:bg-slate-900 sm:px-6">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="mb-4 text-5xl" aria-hidden="true">📬</div>
          <h1 className="text-xl font-semibold text-slate-900 dark:text-white">{t("register.confirmEmailTitle")}</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Open Gmail on your phone and press <strong>Verify your email</strong>. This laptop will continue automatically after verification.</p>
          {verificationChecking && <p className="mt-3 text-xs font-medium text-indigo-600 dark:text-indigo-400">Verification detected — signing you in…</p>}
          <Link to="/login" className="mt-6 inline-block rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">
            {t("login.backToLogin")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-12 dark:bg-slate-900 sm:px-6">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-900/20" />
        <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-900/20" />
      </div>

      <div className="relative w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400"
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

        {/* Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          {errors.general && (
            <div role="alert" className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-400">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>

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
                onChange={(e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); if (errors.email) setErrors((p) => ({ ...p, email: undefined })); }}
                aria-describedby={errors.email ? "email-err" : undefined}
                aria-invalid={!!errors.email}
                className={`mt-1 block w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:bg-slate-900 dark:text-white ${errors.email ? "border-red-400 dark:border-red-600" : "border-slate-300 dark:border-slate-600"}`}
                placeholder="you@example.com"
              />
              {errors.email && <p id="email-err" role="alert" className="mt-1 text-xs text-red-500">{errors.email}</p>}
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
                onChange={(e: ChangeEvent<HTMLInputElement>) => { setUsername(e.target.value); if (errors.username) setErrors((p) => ({ ...p, username: undefined })); }}
                aria-describedby={errors.username ? "user-err" : undefined}
                aria-invalid={!!errors.username}
                className={`mt-1 block w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:bg-slate-900 dark:text-white ${errors.username ? "border-red-400 dark:border-red-600" : "border-slate-300 dark:border-slate-600"}`}
                placeholder="cooluser123"
              />
              {errors.username && <p id="user-err" role="alert" className="mt-1 text-xs text-red-500">{errors.username}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                {t("register.password")}
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value); if (errors.password) setErrors((p) => ({ ...p, password: undefined })); }}
                  aria-describedby={errors.password ? "pass-err" : "pass-hint"}
                  aria-invalid={!!errors.password}
                  className={`block w-full rounded-lg border px-4 py-2.5 pr-10 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:bg-slate-900 dark:text-white ${errors.password ? "border-red-400 dark:border-red-600" : "border-slate-300 dark:border-slate-600"}`}
                  placeholder={t("placeholder.password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? t("generic.hidePassword") : t("generic.showPassword")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              {/* ✅ Strength bar */}
              {password && (
                <div className="mt-2">
                  <div className="flex gap-1">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full transition-all ${i < strength.score ? strength.color : "bg-slate-200 dark:bg-slate-700"}`}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{t(strength.label as Parameters<typeof t>[0])}</p>
                </div>
              )}

              {errors.password
                ? <p id="pass-err" role="alert" className="mt-1 text-xs text-red-500">{errors.password}</p>
                : <p id="pass-hint" className="mt-1 text-xs text-slate-400">{t("register.passwordHint")}</p>
              }
            </div>

            {/* Confirm password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                {t("register.confirmPassword")}
              </label>
              <input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) => { setConfirmPassword(e.target.value); if (errors.confirmPassword) setErrors((p) => ({ ...p, confirmPassword: undefined })); }}
                aria-describedby={errors.confirmPassword ? "conf-err" : undefined}
                aria-invalid={!!errors.confirmPassword}
                className={`mt-1 block w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:bg-slate-900 dark:text-white ${errors.confirmPassword ? "border-red-400 dark:border-red-600" : "border-slate-300 dark:border-slate-600"}`}
                placeholder={t("register.confirmPasswordPlaceholder")}
              />
              {errors.confirmPassword && (
                <p id="conf-err" role="alert" className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting && (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" aria-hidden="true" />
              )}
              {t("register.submit")}
            </button>
          </form>
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
        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          {t("register.haveAccount")}{" "}
          <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
            {t("register.login")}
          </Link>
        </p>
      </div>
    </div>
  );
}
