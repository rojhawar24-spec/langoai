import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslate } from "@/i18n/I18nContext";
import { UI_LANGUAGES, type UILanguage } from "@/i18n/translations";
import { hashPassword, verifyPassword } from "@/utils/auth";
import { findUserByEmail, deleteUser } from "@/utils/storage";
import { getPayPalClientId, setPayPalClientId } from "@/utils/apiConfig";

const LEARNING_LANGUAGES = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "nl", name: "Dutch", flag: "🇳🇱" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
];

type Tab = "account" | "preferences" | "learning" | "ai";

export default function SettingsPage() {
  const { user, updateProfile, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const { uiLanguage, setUILanguage } = useTranslate();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<Tab>("account");

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 flex items-center gap-1 text-sm text-slate-500 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </button>

        <h1 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          ⚙️ Settings
        </h1>

        {/* Tabs */}
        <div className="mb-6 flex gap-1 overflow-x-auto border-b border-slate-200 dark:border-slate-700">
          {(
            [
              ["account", "🔑 Account"],
              ["preferences", "🎨 Preferences"],
              ["learning", "📚 Learning"],
              ["ai", "🤖 AI"],
            ] as [Tab, string][]
          ).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`whitespace-nowrap rounded-t-lg px-4 py-3 text-sm font-medium transition ${
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
            <AccountSection user={user} updateProfile={updateProfile} logout={logout} navigate={navigate} />
          )}
          {activeTab === "preferences" && (
            <PreferencesSection
              theme={theme}
              setTheme={setTheme}
              uiLanguage={uiLanguage}
              setUILanguage={setUILanguage}
              user={user}
              updateProfile={updateProfile}
            />
          )}
          {activeTab === "learning" && (
            <LearningSection
              user={user}
              updateProfile={updateProfile}
              navigate={navigate}
            />
          )}
          {activeTab === "ai" && <AISettingsSection />}
        </div>
      </div>
    </div>
  );
}

// ─── Account Section ───

function AccountSection({
  user,
  updateProfile,
  logout,
  navigate,
}: {
  user: NonNullable<ReturnType<typeof useAuth>["user"]>;
  updateProfile: ReturnType<typeof useAuth>["updateProfile"];
  logout: ReturnType<typeof useAuth>["logout"];
  navigate: ReturnType<typeof useNavigate>;
}) {
  const [emailMsg, setEmailMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState("");

  async function handleChangeEmail(e: FormEvent) {
    e.preventDefault();
    setEmailMsg("");
    const form = e.target as HTMLFormElement;
    const newEmail = (form.elements.namedItem("newEmail") as HTMLInputElement).value.trim();
    const pw = (form.elements.namedItem("emailPassword") as HTMLInputElement).value;

    if (!newEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
      setEmailMsg("Please enter a valid email.");
      return;
    }
    if (findUserByEmail(newEmail)) {
      setEmailMsg("This email is already in use.");
      return;
    }

    const valid = await verifyPassword(pw, user.hashedPassword);
    if (!valid) {
      setEmailMsg("Current password is incorrect.");
      return;
    }
    updateProfile({ email: newEmail.toLowerCase() });
    setEmailMsg("✅ Email updated successfully!");
    form.reset();
  }

  async function handleChangePassword(e: FormEvent) {
    e.preventDefault();
    setPasswordMsg("");
    const form = e.target as HTMLFormElement;
    const currentPw = (form.elements.namedItem("currentPassword") as HTMLInputElement).value;
    const newPw = (form.elements.namedItem("newPassword") as HTMLInputElement).value;
    const confirmPw = (form.elements.namedItem("confirmNewPassword") as HTMLInputElement).value;

    const valid = await verifyPassword(currentPw, user.hashedPassword);
    if (!valid) {
      setPasswordMsg("Current password is incorrect.");
      return;
    }
    if (newPw.length < 6) {
      setPasswordMsg("New password must be at least 6 characters.");
      return;
    }
    if (newPw !== confirmPw) {
      setPasswordMsg("New passwords do not match.");
      return;
    }
    const hashed = await hashPassword(newPw);
    updateProfile({ hashedPassword: hashed });
    setPasswordMsg("✅ Password changed successfully!");
    form.reset();
  }

  function handleDeleteAccount() {
    if (deleteConfirm !== user.username) return;
    deleteUser(user.id);
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <div className="space-y-8">
      {/* Change Email */}
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
              id="newEmail"
              name="newEmail"
              type="email"
              className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="emailPassword" className="block text-xs font-medium text-slate-600 dark:text-slate-400">
              Current password (to confirm)
            </label>
            <input
              id="emailPassword"
              name="emailPassword"
              type="password"
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
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Update Email
          </button>
        </form>
      </div>

      <hr className="border-slate-200 dark:border-slate-700" />

      {/* Change Password */}
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
              id="currentPassword"
              name="currentPassword"
              type="password"
              className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="newPassword" className="block text-xs font-medium text-slate-600 dark:text-slate-400">
              New password
            </label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="confirmNewPassword" className="block text-xs font-medium text-slate-600 dark:text-slate-400">
              Confirm new password
            </label>
            <input
              id="confirmNewPassword"
              name="confirmNewPassword"
              type="password"
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
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Change Password
          </button>
        </form>
      </div>

      <hr className="border-slate-200 dark:border-slate-700" />

      {/* Delete Account */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-red-500">Delete Account</h3>
        <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
          Type your username <strong>{user.username}</strong> to confirm permanent deletion. This cannot be undone.
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            value={deleteConfirm}
            onChange={(e) => setDeleteConfirm(e.target.value)}
            className="flex-1 rounded-lg border border-red-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500 dark:border-red-600 dark:bg-slate-800 dark:text-white"
            placeholder={`Type "${user.username}" to confirm`}
          />
          <button
            onClick={handleDeleteAccount}
            disabled={deleteConfirm !== user.username}
            className="rounded-lg bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-40"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Preferences Section ───

function PreferencesSection({
  theme,
  setTheme,
  uiLanguage,
  setUILanguage,
  user,
  updateProfile,
}: {
  theme: string;
  setTheme: (t: "light" | "dark") => void;
  uiLanguage: string;
  setUILanguage: (l: UILanguage) => void;
  user: NonNullable<ReturnType<typeof useAuth>["user"]>;
  updateProfile: ReturnType<typeof useAuth>["updateProfile"];
}) {
  return (
    <div className="space-y-8">
      {/* Theme */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">Theme</h3>
        <div className="flex gap-3">
          <button
            onClick={() => setTheme("light")}
            className={`flex items-center gap-2 rounded-xl border-2 px-5 py-3 text-sm font-medium transition ${
              theme === "light"
                ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300"
                : "border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:text-slate-400"
            }`}
          >
            ☀️ Light
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`flex items-center gap-2 rounded-xl border-2 px-5 py-3 text-sm font-medium transition ${
              theme === "dark"
                ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300"
                : "border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:text-slate-400"
            }`}
          >
            🌙 Dark
          </button>
        </div>
      </div>

      <hr className="border-slate-200 dark:border-slate-700" />

      {/* UI Language */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
          Interface Language
        </h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {UI_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
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

       {/* Learning language */}
       <div>
         <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
           Learning Language
         </h3>
         <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
           {LEARNING_LANGUAGES.map((lang) => {
             const isActive = user.currentLanguage === lang.code;
             return (
               <button
                 key={lang.code}
                 onClick={() => updateProfile({ currentLanguage: lang.code, interfaceLanguage: lang.code })}
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
    </div>
  );
}

// ─── Learning Section ───

function LearningSection({
  updateProfile,
  navigate,
}: {
  user: NonNullable<ReturnType<typeof useAuth>["user"]>;
  updateProfile: ReturnType<typeof useAuth>["updateProfile"];
  navigate: ReturnType<typeof useNavigate>;
}) {
  return (
    <div className="space-y-8">
      {/* Reset progress */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
          Reset Progress
        </h3>
        <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
          This resets your XP, level, and streak to zero. Your account and settings remain.
        </p>
        <button
          onClick={() => {
            if (confirm("Reset all learning progress? This cannot be undone.")) {
              updateProfile({ totalXP: 0, level: 1, streak: 0, lastActivityDate: null });
              navigate("/dashboard");
            }
          }}
          className="rounded-lg border border-red-300 px-5 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 dark:border-red-600 dark:text-red-400 dark:hover:bg-red-900/20"
        >
          Reset All Progress
        </button>
      </div>

      <hr className="border-slate-200 dark:border-slate-700" />

      {/* Daily XP goal */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
          Daily XP Goal
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Default: 50 XP. Custom goals will be available in a future update.
        </p>
      </div>
    </div>
  );
}

// ─── AI Settings Section ───

function AISettingsSection() {
  const [paypalId, setPaypalId] = useState(getPayPalClientId);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setPayPalClientId(paypalId);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
          Payment & AI Configuration
        </h3>
        <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-900/20">
          <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
            🔒 Fully Secure — Vercel Deployment
          </p>
          <ul className="mt-2 space-y-1 text-xs text-emerald-600 dark:text-emerald-400">
            <li>• Claude API key → Vercel <code className="rounded bg-white/50 px-1 dark:bg-black/20">ANTHROPIC_API_KEY</code></li>
            <li>• PayPal Secret → Vercel <code className="rounded bg-white/50 px-1 dark:bg-black/20">PAYPAL_SECRET</code></li>
            <li>• AI requests go to <code className="rounded bg-white/50 px-1 dark:bg-black/20">/api/chat</code> (same domain)</li>
            <li>• Payment verified via <code className="rounded bg-white/50 px-1 dark:bg-black/20">/api/verify-payment</code></li>
            <li>• Zero API keys in browser, GitHub, or frontend</li>
          </ul>
        </div>
      </div>

      <hr className="border-slate-200 dark:border-slate-700" />

      {/* PayPal Client ID (only config field needed) */}
      <div>
        <h3 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          PayPal Client ID <span className="text-xs text-emerald-500">(public)</span>
        </h3>
        <p className="mb-2 text-xs text-slate-400">
          This is the ONLY setting you need. Put your PayPal Client ID here. Secret keys go in Vercel.
        </p>
        <input
          type="text"
          value={paypalId}
          onChange={(e) => setPaypalId(e.target.value)}
          placeholder="AT90GR3..."
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-mono outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
      </div>

      {/* AI Model info */}
      <div>
        <h3 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">AI Model</h3>
        <select
          disabled
          value="claude"
          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-400 dark:border-slate-600 dark:bg-slate-800/50"
        >
          <option value="claude">Claude 3.5 Haiku (active)</option>
          <option value="gpt4">GPT-4 (coming soon)</option>
          <option value="gpt35">GPT-3.5 Turbo (coming soon)</option>
        </select>
      </div>

      <button onClick={handleSave} className="w-full rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700">
        {saved ? "✅ Saved!" : "Save Configuration"}
      </button>

      <div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-4 text-center dark:border-slate-600 dark:bg-slate-800/50">
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
          ✅ No API keys in browser or GitHub.
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Deploy to Vercel, set <code className="rounded bg-slate-100 px-1 dark:bg-slate-700">ANTHROPIC_API_KEY</code> + <code className="rounded bg-slate-100 px-1 dark:bg-slate-700">PAYPAL_SECRET</code> in environment variables. Done.
        </p>
      </div>
    </div>
  );
}
