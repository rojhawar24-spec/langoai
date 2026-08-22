// src/components/BottomNav.tsx
// ✅ Max 5 items — "Meer" menu voor extra pagina's

import { useState, useRef, useEffect, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTranslate } from "@/i18n/I18nContext";

interface BottomNavProps {
  onOpenChat?: () => void;
}

export default function BottomNav({ onOpenChat }: BottomNavProps) {
  const location          = useLocation();
  const { user }          = useAuth();
  const { t }             = useTranslate();
  const [meerOpen, setMeerOpen] = useState(false);
  const meerRef           = useRef<HTMLDivElement>(null);

  // Sluit "Meer" menu als je erbuiten klikt
  useEffect(() => {
    function handleOutside(e: globalThis.MouseEvent) {
      if (meerRef.current && !meerRef.current.contains(e.target as Node)) {
        setMeerOpen(false);
      }
    }
    if (meerOpen) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [meerOpen]);

  // ✅ NIEUW (accessibility-audit): Escape sluit het "Meer"-menu ook voor
  // toetsenbord-only gebruikers, net als bij TopBar's dropdowns.
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setMeerOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Sluit "Meer" menu bij navigatie
  useEffect(() => { setMeerOpen(false); }, [location.pathname]);

  if (!user) return null;

  // ✅ Hoofditems: 5 max
  const mainItems = [
    { to: "/dashboard", icon: "🏠", label: t("nav.home")    },
    { to: "/grammar",   icon: "📖", label: t("nav.grammar") },
    { to: "/tests",     icon: "📝", label: t("nav.tests")   },
    { to: "/wotd",      icon: "🌟", label: "WOTD"           },
  ];

  // "Meer" submenu items
  const meerItems = [
    { to: "/vocabulary", icon: "📦", label: t("nav.vocabulary") },
    { to: "/arena",      icon: "🏆", label: "Arena"             },
    { to: "/mistakes",   icon: "🔧", label: t("nav.mistakes")   },
    { to: "#ai",         icon: "🤖", label: t("nav.ai_chat"), isAI: true },
  ];

  // Check of een "Meer" item actief is
  const meerActive = meerItems.some(
    (item) => item.to !== "#ai" && (location.pathname === item.to || location.pathname.startsWith(item.to + "/"))
  );

  function handleAIClick(e: MouseEvent) {
    e.preventDefault();
    setMeerOpen(false);
    onOpenChat?.();
  }

  return (
    <>
      {/* "Meer" popup menu */}
      {meerOpen && (
        <div
          ref={meerRef}
          className="fixed bottom-20 right-3 z-50 min-w-[160px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-800"
          role="menu"
          aria-label="Meer opties"
        >
          {meerItems.map((item) => {
            const active = item.to !== "#ai" && (location.pathname === item.to || location.pathname.startsWith(item.to + "/"));
            return item.isAI ? (
              <button
                key="ai"
                role="menuitem"
                onClick={handleAIClick}
                className="flex w-full items-center gap-3 px-4 py-3 text-sm text-slate-500 transition hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-700"
              >
                <span className="text-base">🤖</span>
                <span>{item.label}</span>
                <span className="ml-auto rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-semibold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                  {t("ai.coming_soon_badge")}
                </span>
              </button>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                role="menuitem"
                className={`flex items-center gap-3 px-4 py-3 text-sm transition hover:bg-slate-50 dark:hover:bg-slate-700 ${
                  active
                    ? "font-semibold text-indigo-600 dark:text-indigo-400"
                    : "text-slate-700 dark:text-slate-300"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}

      {/* Nav bar */}
      <nav
        aria-label="Hoofdnavigatie"
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-xl pb-safe dark:border-slate-700 dark:bg-slate-900/95 lg:hidden"
      >
        <div className="mx-auto flex h-16 max-w-lg items-center justify-around px-2">

          {/* Hoofd 4 items */}
          {mainItems.map((item) => {
            const active = location.pathname === item.to || location.pathname.startsWith(item.to + "/");
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-label={item.label}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-[44px] flex-1 flex-col items-center justify-center gap-0.5 rounded-xl transition ${
                  active
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                }`}
              >
                <span className="text-xl" aria-hidden="true">{item.icon}</span>
                <span className="text-[11px] font-semibold leading-tight tracking-tight">{item.label}</span>
                {active && <span className="h-1 w-4 rounded-full bg-indigo-500" />}
                {!active && <span className="h-1 w-4" />}
              </Link>
            );
          })}

          {/* Meer knop */}
          <button
            onClick={() => setMeerOpen((v) => !v)}
            aria-label={t("nav.moreOptions")}
            aria-expanded={meerOpen}
            className={`flex min-h-[44px] flex-1 flex-col items-center justify-center gap-0.5 rounded-xl transition ${
              meerOpen || meerActive
                ? "text-indigo-600 dark:text-indigo-400"
                : "text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
            }`}
          >
            <span className="text-xl" aria-hidden="true">⋯</span>
            <span className="text-[11px] font-semibold leading-tight tracking-tight">{t("nav.more")}</span>
            {(meerOpen || meerActive) && <span className="h-1 w-4 rounded-full bg-indigo-500" />}
            {!meerOpen && !meerActive && <span className="h-1 w-4" />}
          </button>

        </div>
      </nav>
    </>
  );
}
