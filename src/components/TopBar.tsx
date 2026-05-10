import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslate } from "@/i18n/I18nContext";
import { UI_LANGUAGES, type UILanguage } from "@/i18n/translations";

export default function TopBar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { t, uiLanguage, setUILanguage } = useTranslate();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/login");
  };

  if (!user) return null;

  const initials = user.username.slice(0, 2).toUpperCase();
  const currentLang = UI_LANGUAGES.find((l) => l.code === uiLanguage);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          to="/dashboard"
          className="flex items-center gap-2 text-xl font-bold text-indigo-600 dark:text-indigo-400"
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
          <span className="hidden sm:inline">Lango AI</span>
        </Link>

        {/* Right section */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center rounded-lg p-2 text-lg transition hover:bg-slate-100 dark:hover:bg-slate-800"
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* UI Language selector */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-sm transition hover:bg-slate-100 dark:hover:bg-slate-800"
              title={t("topbar.uiLanguage")}
            >
              <span className="text-lg">{currentLang?.flag ?? "🌐"}</span>
              <svg
                className={`hidden h-3 w-3 text-slate-400 transition-transform sm:block ${
                  langMenuOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-800">
                <div className="px-3 py-2 text-xs font-semibold uppercase text-slate-400">
                  {t("topbar.uiLanguage")}
                </div>
                {UI_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setUILanguage(lang.code as UILanguage);
                      setLangMenuOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition ${
                      uiLanguage === lang.code
                        ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                        : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700/50"
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                    {uiLanguage === lang.code && (
                      <span className="ml-auto text-indigo-500">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Level badge */}
          <div className="hidden items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 sm:flex">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>
              {t("topbar.level")} {user.level}
            </span>
          </div>

          {/* XP */}
          <div className="hidden items-center gap-1 text-sm text-slate-500 dark:text-slate-400 sm:flex">
            <svg
              className="h-4 w-4 text-indigo-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path
                d="M12 6v6l4 2"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {user.totalXP.toLocaleString()} {t("topbar.xp")}
            </span>
          </div>

          {/* User menu */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 rounded-full p-1 transition hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-bold text-white shadow-sm">
                {initials}
              </div>
              <span className="hidden text-sm font-medium text-slate-700 dark:text-slate-300 sm:inline">
                {user.username}
              </span>
              <svg
                className={`hidden h-4 w-4 text-slate-400 transition-transform sm:block ${
                  menuOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-800">
                <div className="border-b border-slate-100 px-4 py-3 dark:border-slate-700">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {user.username}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {user.email}
                  </p>
                </div>
                <div className="px-4 py-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>
                      {t("topbar.level")} {user.level}
                    </span>
                    <span>
                      🔥 {user.streak} {t("topbar.streak")}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {user.totalXP.toLocaleString()} {t("topbar.xp")}
                  </div>
                </div>
                <div className="border-t border-slate-100 dark:border-slate-700">
                  <Link
                    to="/profile"
                    onClick={() => setMenuOpen(false)}
                    className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-slate-700 transition hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700/50"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    onClick={() => setMenuOpen(false)}
                    className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-slate-700 transition hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700/50"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Settings
                  </Link>
                  <div className="border-t border-slate-100 px-4 py-2 dark:border-slate-700">
                    <Link
                      to="/privacy"
                      onClick={() => setMenuOpen(false)}
                      className="block text-xs text-slate-400 transition hover:text-slate-600 dark:hover:text-slate-300"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/terms"
                      onClick={() => setMenuOpen(false)}
                      className="block text-xs text-slate-400 transition hover:text-slate-600 dark:hover:text-slate-300"
                    >
                      Terms of Service
                    </Link>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    {t("topbar.logout")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
