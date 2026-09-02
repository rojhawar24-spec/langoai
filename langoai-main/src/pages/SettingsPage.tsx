// src/pages/SettingsPage.tsx
// ✅ FIXED: verifyPassword/hashPassword vervangen door Supabase auth
// ✅ FIXED BUG-10: leer-taal wijzigen verandert interfaceLanguage NIET meer
// ✅ FIXED BUG-17: window.confirm() vervangen door custom modal

import { useState, useEffect, useRef, type FormEvent, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { useTranslate } from "@/i18n/I18nContext";
import { UI_LANGUAGES, type UILanguage } from "@/i18n/translations";
import { supabase } from "@/lib/supabase";
import { resetAllLocalProgress } from "@/utils/resetProgress";
import { getDailyGoal, setDailyGoal } from "@/utils/progress";

const GOAL_OPTIONS = [
  { xp: 20,  labelKey: "onboarding.goalCasual" },
  { xp: 50,  labelKey: "onboarding.goalRegular" },
  { xp: 80,  labelKey: "onboarding.goalSerious" },
  { xp: 120, labelKey: "onboarding.goalIntense" },
] as const;

const LEARNING_LANGUAGES = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "nl", name: "Dutch",   flag: "🇳🇱" },
  { code: "fr", name: "French",  flag: "🇫🇷" },
  { code: "de", name: "German",  flag: "🇩🇪" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
];

type Tab = "account" | "preferences" | "learning" | "ai";

// ── Confirm Modal ────────────────────────────────────────────────────────
function ConfirmModal({
  title,
  message,
  onConfirm,
  onCancel,
}: {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const { t } = useTranslate();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<Element | null>(null);

  // ✅ NIEUW (accessibility-audit): Escape annuleert — nooit bevestigen.
  // Belangrijk juist hier: deze modal bewaakt destructieve acties
  // (account verwijderen), dus Escape mag nooit per ongeluk naar
  // onConfirm kunnen wijzen.
  //
  // 🔒 FIX (audit #19 — "modals don't have a complete focus trap"):
  // this had role="dialog"/aria-modal/aria-labelledby already correct,
  // but nothing actually moved or trapped focus. A screen reader user
  // had no signal a dialog had opened (focus stayed on whatever button
  // triggered it), and Tab/Shift+Tab could cycle through the page
  // BEHIND the modal while it was still visually blocking that content
  // — the exact "incomplete focus trap" the audit called out generally,
  // confirmed here by actually reading the code instead of assuming the
  // other correct-looking ARIA attributes meant this part was covered
  // too. Focus now moves to Cancel on open (the safe default for a
  // destructive confirmation — never auto-focus the destructive action
  // itself), is trapped inside the dialog while open, and returns to
  // whatever triggered the modal once it closes.
  useEffect(() => {
    previouslyFocused.current = document.activeElement;
    cancelRef.current?.focus();

    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onCancel();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus();
      }
    };
  }, [onCancel]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-modal-title"
      aria-describedby="confirm-modal-message"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-800">
        <h2 id="confirm-modal-title" className="mb-2 text-lg font-bold text-slate-900 dark:text-white">{title}</h2>
        <p id="confirm-modal-message" className="mb-6 text-sm text-slate-500 dark:text-slate-400">{message}</p>
        <div className="flex gap-3">
          <button ref={cancelRef} type="button" onClick={onCancel}
            className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"
          >
            {t("generic.cancel")}
          </button>
          <button type="button" onClick={onConfirm}
            className="flex-1 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            {t("generic.save")}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────
export default function SettingsPage() {
  const { user, updateProfile, logout } = useAuth();
  const { theme, setTheme }             = useTheme();
  const { uiLanguage, setUILanguage, t } = useTranslate();
  const navigate                         = useNavigate();
  const [activeTab, setActiveTab]        = useState<Tab>("account");

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-8 pb-28 sm:px-6">
        <button type="button" onClick={() => navigate("/dashboard")}
          aria-label={t("generic.back_dashboard")}
          className="mb-6 flex items-center gap-1 text-sm text-slate-500 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t("generic.back_dashboard")}
        </button>

        <h1 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          ⚙️ {t("settings.title")}
        </h1>

        {/* Tabs */}
        <div className="mb-6 flex gap-1 overflow-x-auto border-b border-slate-200 dark:border-slate-700 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {(
            [
              ["account",     `🔑 ${t("settings.account")}`],
              ["preferences", `🎨 ${t("settings.preferences")}`],
              ["learning",    `📚 ${t("settings.learning")}`],
              ["ai",          `🤖 ${t("settings.ai_tab")}`],
            ] as [Tab, string][]
          ).map(([key, label]) => (
            <button type="button" key={key}
              onClick={() => setActiveTab(key)}
              className={`whitespace-nowrap rounded-t-lg px-5 py-3.5 text-sm font-semibold transition min-h-[44px] ${
                activeTab === key
                  ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
                  : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          {activeTab === "account" && (
            <AccountSection
              user={user}
              logout={logout}
              navigate={navigate}
            />
          )}
          {activeTab === "preferences" && (
            <PreferencesSection
              theme={theme}
              setTheme={setTheme}
              uiLanguage={uiLanguage}
              setUILanguage={setUILanguage}
            />
          )}
          {activeTab === "learning" && (
            <LearningSection
              user={user}
              updateProfile={updateProfile}
              navigate={navigate}
              t={t}
            />
          )}
          {activeTab === "ai" && <AISettingsSection />}
        </div>
      </div>
    </div>
  );
}

// ── Account Section ──────────────────────────────────────────────────────
function AccountSection({
  user,
  logout,
  navigate,
}: {
  user: NonNullable<ReturnType<typeof useAuth>["user"]>;
  logout: ReturnType<typeof useAuth>["logout"];
  navigate: ReturnType<typeof useNavigate>;
}) {
  const { t } = useTranslate();
  const [emailMsg,     setEmailMsg]     = useState("");
  const [passwordMsg,  setPasswordMsg]  = useState("");
  const [deleteInput,  setDeleteInput]  = useState("");
  const [deleteError,  setDeleteError]  = useState("");
  const [isDeleting,   setIsDeleting]   = useState(false);
  const [isLoading,    setIsLoading]    = useState(false);

  // ✅ Email wijzigen via Supabase Auth
  async function handleChangeEmail(e: FormEvent) {
    e.preventDefault();
    setEmailMsg("");
    setIsLoading(true);

    const form     = e.target as HTMLFormElement;
    const newEmail = (form.elements.namedItem("newEmail") as HTMLInputElement).value.trim();
    const pw       = (form.elements.namedItem("emailPassword") as HTMLInputElement).value;

    if (!newEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
      setEmailMsg(t("settings.emailInvalid"));
      setIsLoading(false);
      return;
    }

    // Verify current password by re-signing in
    const { error: verifyErr } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: pw,
    });

    if (verifyErr) {
      setEmailMsg(t("settings.currentPasswordWrong"));
      setIsLoading(false);
      return;
    }

    // Update email in Supabase Auth. By Supabase's own default behaviour
    // this does NOT take effect immediately — it requires clicking a
    // confirmation link (sent to both the old and new address). It used
    // to ALSO immediately write newEmail into profiles.email here, which
    // meant an unconfirmed change already showed as if it were live —
    // and stayed that way forever if the confirmation link was never
    // clicked. profiles.email now updates itself automatically, only once
    // the auth email actually changes (see the on_auth_email_change
    // trigger in supabase/schema.sql section 9) — nothing to do here but
    // ask Supabase to start the (confirmation-gated) change.
    const { error } = await supabase.auth.updateUser({ email: newEmail });
    if (error) {
      // 🔒 FIX (audit #26 — "safe user message vs developer log"): this
      // used to concatenate the raw error.message from Supabase straight
      // into the UI. Two separate problems with that: it's an internal
      // detail leaking to the user (not severe here — Supabase's own auth
      // errors are reasonably tame, not raw SQL — but still the wrong
      // pattern), and it's an i18n bug in its own right, since Supabase's
      // error text is always in English regardless of the interface
      // language, so a French/German/Spanish user would see their
      // translated label followed by a stray raw English sentence.
      console.error("updateUser(email) failed:", error);
      setEmailMsg(t("settings.emailUpdateFailed"));
    } else {
      setEmailMsg(t("settings.emailUpdated"));
      form.reset();
    }
    setIsLoading(false);
  }

  // ✅ Wachtwoord wijzigen via Supabase Auth
  async function handleChangePassword(e: FormEvent) {
    e.preventDefault();
    setPasswordMsg("");
    setIsLoading(true);

    const form      = e.target as HTMLFormElement;
    const currentPw = (form.elements.namedItem("currentPassword") as HTMLInputElement).value;
    const newPw     = (form.elements.namedItem("newPassword") as HTMLInputElement).value;
    const confirmPw = (form.elements.namedItem("confirmNewPassword") as HTMLInputElement).value;

    if (newPw.length < 8) {
      setPasswordMsg(t("settings.passwordTooShort"));
      setIsLoading(false);
      return;
    }
    if (newPw !== confirmPw) {
      setPasswordMsg(t("settings.passwordMismatch"));
      setIsLoading(false);
      return;
    }

    // Verify current password
    const { error: verifyErr } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: currentPw,
    });
    if (verifyErr) {
      setPasswordMsg(t("settings.currentPasswordWrong"));
      setIsLoading(false);
      return;
    }

    // Update password
    const { error } = await supabase.auth.updateUser({ password: newPw });
    if (error) {
      // 🔒 FIX (audit #26) — same issue and same fix as handleChangeEmail
      // just above: raw Supabase error text was leaking into the UI in
      // whatever language IT happens to be in, mixed with our translated
      // label.
      console.error("updateUser(password) failed:", error);
      setPasswordMsg(t("settings.passwordUpdateFailed"));
    } else {
      setPasswordMsg(t("settings.passwordUpdated"));
      form.reset();
    }
    setIsLoading(false);
  }

  const [isExporting,  setIsExporting]  = useState(false);
  const [exportError,  setExportError]  = useState("");

  async function handleExportData() {
    setExportError("");
    setIsExporting(true);
    try {
      // 1. Server-data: eigen profiel-rij (enige uit Supabase, dankzij RLS)
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (profileError) throw profileError;

      // 1b. Gift-codes die dit account heeft aangemaakt of verzilverd
      //     (tabel toegevoegd deze sessie samen met de server-side coin-
      //     economie — hoorde hier meteen bij, anders mist de export ze).
      const { data: giftsSent } = await supabase
        .from("gift_codes")
        .select("code, prize_type, prize_amount, redeemed_at, created_at")
        .eq("created_by", user.id);
      const { data: giftsReceived } = await supabase
        .from("gift_codes")
        .select("code, prize_type, prize_amount, redeemed_at")
        .eq("redeemed_by", user.id);

      // 2. Lokale voortgangsdata (XP, streak, fouten, badges, chat, enz.)
      //    Dit staat op dit toestel in localStorage, niet op de server.
      const localData: Record<string, unknown> = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key) continue;
        // Sla technische/niet-persoonlijke sleutels over
        if (key.startsWith("sb-") || key === "theme") continue;
        const raw = localStorage.getItem(key);
        try {
          localData[key] = raw ? JSON.parse(raw) : raw;
        } catch {
          localData[key] = raw;
        }
      }

      const exportBundle = {
        exportedAt: new Date().toISOString(),
        account: profile,
        giftCodesSent: giftsSent ?? [],
        giftCodesReceived: giftsReceived ?? [],
        localProgressData: localData,
      };

      const blob = new Blob([JSON.stringify(exportBundle, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `langoai-data-${user.username}-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      setExportError(t("settings.exportFailed"));
    } finally {
      setIsExporting(false);
    }
  }

  async function handleDeleteAccount() {
    if (deleteInput !== user.username) return;
    setDeleteError("");
    setIsDeleting(true);
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const token = sessionData.session?.access_token;
      if (!token) throw new Error("no_session");

      const res = await fetch("/api/delete-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("delete_failed");

      // 🔒 FIX (found while checking delete-account.js end-to-end): the
      // server-side deletion itself is solid (verifies the requester's
      // own session token, uses the Admin API, profiles cascades via the
      // DB foreign key) — but logout() only ever clears the session, never
      // the langlearn_* localStorage keys (XP history, mistakes, badges,
      // streak calendar, arena state, ...). None of those are scoped to a
      // user id, so they'd survive account deletion untouched — and if
      // anyone (the same person, or someone else on a shared device)
      // later creates a NEW account in the same browser, that new account
      // would silently inherit the deleted one's leftover local history.
      // Same cleanup already built for Settings' "Reset Progress" button
      // (src/utils/resetProgress.ts) — reused here, not duplicated.
      resetAllLocalProgress();

      logout();
      navigate("/login", { replace: true });
    } catch {
      setDeleteError(t("settings.deleteFailed"));
      setIsDeleting(false);
    }
  }

  // ── 2FA (TOTP) ───────────────────────────────────────────────────────
  const [mfaFactors,   setMfaFactors]   = useState<{ id: string; friendlyName?: string }[]>([]);
  const [mfaLoading,   setMfaLoading]   = useState(true);
  const [mfaEnrolling, setMfaEnrolling] = useState(false);
  const [mfaQrCode,    setMfaQrCode]    = useState("");
  const [mfaSecret,    setMfaSecret]    = useState("");
  const [mfaFactorId,  setMfaFactorId]  = useState("");
  const [mfaCode,      setMfaCode]      = useState("");
  const [mfaError,     setMfaError]     = useState("");
  const [mfaBusy,      setMfaBusy]      = useState(false);
  const [mfaDisableConfirming, setMfaDisableConfirming] = useState(false);
  const [mfaDisablePassword,   setMfaDisablePassword]   = useState("");

  async function loadMfaFactors() {
    setMfaLoading(true);
    try {
      const { data } = await supabase.auth.mfa.listFactors();
      setMfaFactors(data?.totp ?? []);
    } finally {
      setMfaLoading(false);
    }
  }

  // Bij openen van de pagina: bestaande 2FA-factoren ophalen
  useEffect(() => {
    loadMfaFactors();
  }, []);

  async function handleMfaStartEnroll() {
    setMfaError("");
    setMfaBusy(true);
    try {
      const { data, error } = await supabase.auth.mfa.enroll({ factorType: "totp" });
      if (error || !data) throw error;
      setMfaFactorId(data.id);
      setMfaQrCode(data.totp.qr_code);
      setMfaSecret(data.totp.secret);
      setMfaEnrolling(true);
    } catch {
      setMfaError(t("settings.mfaStartFailed"));
    } finally {
      setMfaBusy(false);
    }
  }

  async function handleMfaConfirmEnroll(e: FormEvent) {
    e.preventDefault();
    setMfaError("");
    if (!/^\d{6}$/.test(mfaCode.trim())) {
      setMfaError(t("settings.mfaCodeFormatError"));
      return;
    }
    setMfaBusy(true);
    try {
      const { data: challenge, error: challengeError } =
        await supabase.auth.mfa.challenge({ factorId: mfaFactorId });
      if (challengeError || !challenge) throw challengeError;

      const { error: verifyError } = await supabase.auth.mfa.verify({
        factorId: mfaFactorId,
        challengeId: challenge.id,
        code: mfaCode.trim(),
      });
      if (verifyError) throw verifyError;

      setMfaEnrolling(false);
      setMfaCode("");
      setMfaQrCode("");
      setMfaSecret("");
      await loadMfaFactors();
    } catch {
      setMfaError(t("settings.mfaInvalidCode"));
    } finally {
      setMfaBusy(false);
    }
  }

  async function handleMfaCancelEnroll() {
    // Ruim de niet-bevestigde factor weer op, anders blijft hij "pending" staan
    try {
      if (mfaFactorId) {
        await supabase.auth.mfa.unenroll({ factorId: mfaFactorId });
      }
    } catch {
      /* best effort */
    }
    setMfaEnrolling(false);
    setMfaCode("");
    setMfaQrCode("");
    setMfaSecret("");
    setMfaFactorId("");
    setMfaError("");
  }

  // 🔒 FIX (found while re-checking MFA end-to-end): disabling 2FA used to
  // be a single click with no confirmation at all — the one action in
  // this whole page that REDUCES account security, and the only one that
  // didn't ask for the current password first (email/password changes
  // above both do, via signInWithPassword). An active session isn't the
  // same guarantee as "this is definitely the account owner acting with
  // full intent" — a hijacked session or an unlocked shared device could
  // otherwise turn a temporary compromise into a permanent one by quietly
  // switching the account back down to password-only.
  async function handleMfaRemove(factorId: string) {
    setMfaError("");
    setMfaBusy(true);
    try {
      const { error: verifyErr } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: mfaDisablePassword,
      });
      if (verifyErr) {
        setMfaError(t("settings.currentPasswordWrong"));
        return;
      }

      const { error } = await supabase.auth.mfa.unenroll({ factorId });
      if (error) throw error;
      setMfaDisableConfirming(false);
      setMfaDisablePassword("");
      await loadMfaFactors();
    } catch {
      setMfaError(t("settings.mfaRemoveFailed"));
    } finally {
      setMfaBusy(false);
    }
  }

  return (
    <div className="space-y-8">
      {/* {t("settings.changeEmail")} */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
          Change Email
        </h3>
        <form onSubmit={handleChangeEmail} className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-400">
              Current email
            </label>
            <input
              type="email"
              value={user.email}
              disabled
              className="mt-1 block w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 dark:border-slate-600 dark:bg-slate-800/50"
            />
          </div>
          <div>
            <label htmlFor="newEmail" className="block text-xs font-medium text-slate-600 dark:text-slate-400">
              New email
            </label>
            <input
              id="newEmail" name="newEmail" type="email"
              className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="emailPassword" className="block text-xs font-medium text-slate-600 dark:text-slate-400">
              Current password (to confirm)
            </label>
            <input
              id="emailPassword" name="emailPassword" type="password"
              className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />
          </div>
          {emailMsg && (
            <p className={`text-xs ${emailMsg.startsWith("✅") ? "text-emerald-600" : "text-red-500"}`}>
              {emailMsg}
            </p>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-60"
          >
            {isLoading ? t("generic.loading") : t("settings.changeEmail")}
          </button>
        </form>
      </div>

      <hr className="border-slate-200 dark:border-slate-700" />

      {/* {t("settings.changePassword")} */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
          Change Password
        </h3>
        <form onSubmit={handleChangePassword} className="space-y-3">
          <div>
            <label htmlFor="currentPassword" className="block text-xs font-medium text-slate-600 dark:text-slate-400">
              Current password
            </label>
            <input
              id="currentPassword" name="currentPassword" type="password"
              className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="newPassword" className="block text-xs font-medium text-slate-600 dark:text-slate-400">
              New password (min. 8 characters)
            </label>
            <input
              id="newPassword" name="newPassword" type="password"
              className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="confirmNewPassword" className="block text-xs font-medium text-slate-600 dark:text-slate-400">
              Confirm new password
            </label>
            <input
              id="confirmNewPassword" name="confirmNewPassword" type="password"
              className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />
          </div>
          {passwordMsg && (
            <p className={`text-xs ${passwordMsg.startsWith("✅") ? "text-emerald-600" : "text-red-500"}`}>
              {passwordMsg}
            </p>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-60"
          >
            {isLoading ? t("generic.loading") : t("settings.changePassword")}
          </button>
        </form>
      </div>

      <hr className="border-slate-200 dark:border-slate-700" />

      {/* GDPR Art. 20 — recht op dataportabiliteit */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
          {t("settings.downloadDataTitle")}
        </h3>
        <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
          {t("settings.downloadDataDesc")}
        </p>
        <button
          type="button"
          onClick={handleExportData}
          disabled={isExporting}
          className="rounded-lg bg-slate-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-40"
        >
          {isExporting ? "..." : t("settings.downloadDataTitle")}
        </button>
        {exportError && (
          <p className="mt-2 text-sm text-red-500">{exportError}</p>
        )}
      </div>

      <hr className="border-slate-200 dark:border-slate-700" />

      {/* Two-Factor Authentication (optioneel) */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
          {t("settings.mfaSectionTitle")}
        </h3>

        {mfaError && (
          <p className="mb-3 text-sm text-red-500">{mfaError}</p>
        )}

        {mfaLoading ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">{t("settings.loading")}</p>
        ) : mfaEnrolling ? (
          <div className="space-y-4 rounded-lg border border-slate-200 p-4 dark:border-slate-700">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {t("settings.mfaScanQr")}
            </p>
            {mfaQrCode && (
              <img src={mfaQrCode} alt={t("settings.mfaQrAlt")} className="mx-auto h-40 w-40" />
            )}
            <p className="text-center text-xs text-slate-500 dark:text-slate-400">
              {t("settings.mfaCantScan")}{" "}
              <code className="rounded bg-slate-100 px-1.5 py-0.5 dark:bg-slate-700">{mfaSecret}</code>
            </p>
            <form onSubmit={handleMfaConfirmEnroll} className="space-y-3">
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={mfaCode}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setMfaCode(e.target.value.replace(/\D/g, ""))}
                placeholder="000000"
                className="block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-center text-lg tracking-[0.5em] outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={mfaBusy || mfaCode.length !== 6}
                  className="flex-1 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-40"
                >
                  {mfaBusy ? "..." : t("generic.confirm")}
                </button>
                <button
                  type="button"
                  onClick={handleMfaCancelEnroll}
                  className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
                >
                  {t("generic.cancel")}
                </button>
              </div>
            </form>
          </div>
        ) : mfaFactors.length > 0 ? (
          <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">{t("settings.mfaEnabled")}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t("settings.mfaEnabledDesc")}</p>
              </div>
              {!mfaDisableConfirming && (
                <button
                  type="button"
                  onClick={() => { setMfaError(""); setMfaDisableConfirming(true); }}
                  className="rounded-lg border border-red-300 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 dark:border-red-600 dark:text-red-400 dark:hover:bg-red-900/20"
                >
                  {t("settings.mfaDisable")}
                </button>
              )}
            </div>
            {mfaDisableConfirming && (
              <form
                onSubmit={(e: FormEvent) => { e.preventDefault(); handleMfaRemove(mfaFactors[0].id); }}
                className="mt-3 space-y-2 border-t border-slate-200 pt-3 dark:border-slate-700"
              >
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400">
                  {t("settings.mfaDisableConfirmPassword")}
                </label>
                <input
                  type="password"
                  value={mfaDisablePassword}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setMfaDisablePassword(e.target.value)}
                  autoFocus
                  required
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-800"
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={mfaBusy || !mfaDisablePassword}
                    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-40"
                  >
                    {mfaBusy ? "..." : t("settings.mfaDisableConfirm")}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setMfaDisableConfirming(false); setMfaDisablePassword(""); setMfaError(""); }}
                    className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    {t("generic.cancel")}
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div>
            <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
              {t("settings.mfaEnableDesc")}
            </p>
            <button
              type="button"
              onClick={handleMfaStartEnroll}
              disabled={mfaBusy}
              className="rounded-lg bg-slate-700 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-40"
            >
              {mfaBusy ? "..." : t("settings.mfaEnableButton")}
            </button>
          </div>
        )}
      </div>

      <hr className="border-slate-200 dark:border-slate-700" />

      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-red-500">
          {t("settings.deleteAccount")}
        </h3>
        <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
          {t("settings.deleteConfirmText").split("{username}")[0]}
          <strong>{user.username}</strong>
          {t("settings.deleteConfirmText").split("{username}")[1]}
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            value={deleteInput}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDeleteInput(e.target.value)}
            placeholder={t("settings.deleteConfirmPlaceholder").replace("{username}", user.username)}
            className="flex-1 rounded-lg border border-red-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500 dark:border-red-600 dark:bg-slate-800 dark:text-white"
          />
          <button type="button" onClick={handleDeleteAccount}
            disabled={deleteInput !== user.username || isDeleting}
            className="rounded-lg bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-40"
          >
            {isDeleting ? "..." : t("settings.deleteButton")}
          </button>
        </div>
        {deleteError && (
          <p className="mt-2 text-sm text-red-500">{deleteError}</p>
        )}
      </div>
    </div>
  );
}

// ── Preferences Section ──────────────────────────────────────────────────
function PreferencesSection({
  theme,
  setTheme,
  uiLanguage,
  setUILanguage,
}: {
  theme: string;
  setTheme: (t: "light" | "dark") => void;
  uiLanguage: string;
  setUILanguage: (l: UILanguage) => void;
}) {
  const { t } = useTranslate();
  const { highContrast, dyslexiaFont, setHighContrast, setDyslexiaFont } = useAccessibility();
  return (
    <div className="space-y-8">
      {/* Theme */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">{t("settings.theme")}</h3>
        <div className="flex gap-3">
          {(["light", "dark"] as const).map((mode) => (
            <button type="button" key={mode}
              onClick={() => setTheme(mode)}
              className={`flex items-center gap-2 rounded-xl border-2 px-5 py-3 text-sm font-medium transition ${
                theme === mode
                  ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300"
                  : "border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:text-slate-400"
              }`}
            >
              {mode === "light" ? `☀️ ${t("settings.light")}` : `🌙 ${t("settings.dark")}`}
            </button>
          ))}
        </div>
      </div>

      <hr className="border-slate-200 dark:border-slate-700" />

      {/* UI Language */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
          {t("settings.uiLanguage")}
        </h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {UI_LANGUAGES.map((lang) => (
            <button type="button" key={lang.code}
              onClick={() => setUILanguage(lang.code as UILanguage)}
              className={`flex items-center gap-2 rounded-lg border-2 px-4 py-2.5 text-sm font-medium transition ${
                uiLanguage === lang.code
                  ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300"
                  : "border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:text-slate-400"
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>

      <hr className="border-slate-200 dark:border-slate-700" />

      {/* Accessibility */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
          {t("settings.accessibility")}
        </h3>
        <div className="space-y-3">
          <AccessibilityToggle
            label={t("settings.highContrast")}
            description={t("settings.highContrastDesc")}
            checked={highContrast}
            onChange={setHighContrast}
          />
          <AccessibilityToggle
            label={t("settings.dyslexiaFont")}
            description={t("settings.dyslexiaFontDesc")}
            checked={dyslexiaFont}
            onChange={setDyslexiaFont}
          />
        </div>
      </div>
    </div>
  );
}

function AccessibilityToggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      aria-pressed={checked}
      className={`flex w-full items-center justify-between rounded-xl border-2 px-4 py-3 text-left transition ${
        checked
          ? "border-indigo-500 bg-indigo-50 dark:border-indigo-400 dark:bg-indigo-900/20"
          : "border-slate-200 dark:border-slate-700"
      }`}
    >
      <span>
        <span className="block text-sm font-medium text-slate-700 dark:text-slate-200">{label}</span>
        <span className="block text-xs text-slate-400 dark:text-slate-500">{description}</span>
      </span>
      <span
        className={`flex h-6 w-11 shrink-0 items-center rounded-full p-0.5 transition-colors ${
          checked ? "bg-indigo-500" : "bg-slate-300 dark:bg-slate-600"
        }`}
      >
        <span
          className={`h-5 w-5 rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </span>
    </button>
  );
}

// ── Learning Section ─────────────────────────────────────────────────────
function LearningSection({
  user,
  updateProfile,
  navigate,
  t,
}: {
  user: NonNullable<ReturnType<typeof useAuth>["user"]>;
  updateProfile: ReturnType<typeof useAuth>["updateProfile"];
  navigate: ReturnType<typeof useNavigate>;
  t: (key: string) => string;
}) {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [goal, setGoal] = useState(() => getDailyGoal());

  return (
    <div className="space-y-8">
      {/* ✅ BUG-17: custom modal instead of window.confirm() */}
      {showResetConfirm && (
        <ConfirmModal
          title={t("settings.resetProgress") + "?"}
          message={t("settings.resetWarning")}
          onConfirm={() => {
            // 🔒 FIX (audit #24): this used to ONLY zero out the profile's
            // totalXP/level/streak — completed lessons, mistakes, badges,
            // arena state, and XP history all lived on untouched in
            // localStorage, so "Reset Progress" reset almost nothing.
            // updateProfile() below still handles the server-side fields
            // (routed through the reset_learning_progress RPC — see
            // AuthContext.tsx); this clears the rest.
            resetAllLocalProgress();
            updateProfile({ totalXP: 0, level: 1, streak: 0, lastActivityDate: null });
            setShowResetConfirm(false);
            navigate("/dashboard");
          }}
          onCancel={() => setShowResetConfirm(false)}
        />
      )}

      {/* ✅ BUG-10: Learning language — does NOT change interfaceLanguage */}
      <div>
        <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-slate-400">
          {t("settings.learningLang")}
        </h3>
        <p className="mb-4 text-xs text-slate-400">
          This changes what language you are learning — not the app language.
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {LEARNING_LANGUAGES.map((lang) => {
            const isActive = user.currentLanguage === lang.code;
            return (
              <button type="button" key={lang.code}
                // ✅ Only update currentLanguage — NOT interfaceLanguage
                onClick={() => updateProfile({ currentLanguage: lang.code })}
                className={`flex items-center gap-2 rounded-lg border-2 px-4 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300"
                    : "border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:text-slate-400"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <hr className="border-slate-200 dark:border-slate-700" />

      {/* Reset Progress */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
          {t("settings.resetProgress")}
        </h3>
        <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
          {t("settings.resetWarning")}
        </p>
        <button type="button" onClick={() => setShowResetConfirm(true)}
          className="rounded-lg border border-red-300 px-5 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 dark:border-red-600 dark:text-red-400 dark:hover:bg-red-900/20"
        >
          Reset All Progress
        </button>
      </div>

      <hr className="border-slate-200 dark:border-slate-700" />

      {/* Daily XP Goal */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
          {t("settings.dailyGoal")}
        </h3>
        {/* 🔒 FIX (audit #23): this used to be static text claiming custom
            goals were "available in a future update" — but setDailyGoal()
            already existed and already worked (onboarding uses it). The
            feature wasn't missing, it just wasn't exposed here yet. Same
            GOAL_OPTIONS/labels as the onboarding step, so the number
            someone picks always means the same thing everywhere. */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {GOAL_OPTIONS.map(({ xp, labelKey }) => {
            const active = goal === xp;
            return (
              <button
                key={xp}
                type="button"
                onClick={() => {
                  setDailyGoal(xp);
                  setGoal(xp);
                }}
                className={`rounded-xl border-2 px-3 py-2.5 text-center transition ${
                  active
                    ? "border-indigo-500 bg-indigo-50 dark:border-indigo-400 dark:bg-indigo-950/30"
                    : "border-slate-200 bg-white hover:border-indigo-200 dark:border-slate-700 dark:bg-slate-900"
                }`}
              >
                <span className="block text-sm font-bold text-slate-900 dark:text-white">{xp} XP</span>
                <span className="block text-[11px] text-slate-400">{t(labelKey)}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── AI Settings Section ──────────────────────────────────────────────────
function AISettingsSection() {
  const { t } = useTranslate();
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
          AI Tutor configuration
        </h3>
        <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-900/20">
          {/* ✅ FIX (audit #40): don't claim "Fully Secure" — list the actual,
              verifiable measures instead. A blanket claim is exactly the kind
              of thing a security review calls out on a page that's trying to
              build trust. */}
          <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
            🔒 {t("settings.fullySecureVercel")}
          </p>
          <ul className="mt-2 space-y-1 text-xs text-emerald-600 dark:text-emerald-400">
            <li>• {t("settings.bulletApiKey")}</li>
            <li>• {t("settings.bulletAiRequests")} <code className="rounded bg-white/50 px-1 dark:bg-black/20">/api/chat</code> ({t("settings.sameDomain")})</li>
            <li>• {t("settings.bulletZeroKeys")}</li>
          </ul>
        </div>
      </div>

      <hr className="border-slate-200 dark:border-slate-700" />

      <div>
        {/* ✅ FIX (audit #6 + #22): this used to hardcode "Claude 3.5 Haiku"
            in a fake, disabled <select> next to GPT options nothing could
            ever select — a stale label waiting to happen, and it already
            had (bug #6: a retired model name shown as "Active"). Which AI
            answers is now chosen server-side via AI_PROVIDER (see
            api/_lib/ai/index.js) and can be Claude OR Gemini — naming one
            specific model here would just go stale again the next time
            that env var changes. So: no model name in the UI at all. */}
        <h3 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">{t("settings.aiModel")}</h3>
        <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 dark:border-slate-600 dark:bg-slate-800/50">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">AI Tutor</span>
          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
            {t("ai.coming_soon")}
          </span>
        </div>
        <p className="mt-2 text-xs text-slate-400">{t("settings.aiModelNote")}</p>
      </div>

      <div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-4 text-center dark:border-slate-600 dark:bg-slate-800/50">
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
          {t("settings.savedNote")}
        </p>
        <p className="mt-1 text-xs text-slate-400">
          {t("settings.deployNote")} <code className="rounded bg-slate-100 px-1 dark:bg-slate-700">AI_PROVIDER</code> {t("settings.envVarsDone")}
        </p>
      </div>
    </div>
  );
}
