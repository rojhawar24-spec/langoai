import { type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTranslate } from "@/i18n/I18nContext";

interface BottomNavProps { onOpenChat?: () => void; }

export default function BottomNav({ onOpenChat }: BottomNavProps) {
  const location = useLocation();
  const { user } = useAuth();
  const { t } = useTranslate();
  if (!user) return null;

  const items = [
    { to: "/dashboard", icon: "🏠", label: t("nav.home"), isRoute: true },
    { to: "/grammar", icon: "📖", label: t("nav.grammar"), isRoute: true },
    { to: "/wotd", icon: "🌟", label: "WOTD", isRoute: true },
    { to: "/arena", icon: "🏆", label: "Legend", isRoute: true },
    { to: "/tests", icon: "📝", label: t("nav.tests"), isRoute: true },
    { to: "/mistakes", icon: "🔧", label: t("nav.mistakes"), isRoute: true },
    { to: "#", icon: "🤖", label: t("nav.ai_chat"), isRoute: false },
  ];

  function handleClick(e: MouseEvent, isRoute: boolean) {
    if (!isRoute && onOpenChat) { e.preventDefault(); onOpenChat(); }
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-xl pb-safe dark:border-slate-700 dark:bg-slate-900/95 lg:hidden">
      <div className="mx-auto flex h-14 max-w-lg items-center justify-around px-1">
        {items.map((item) => {
          const active = item.isRoute && (location.pathname === item.to || location.pathname.startsWith(item.to + "/"));
          return (
            <Link key={item.label} to={item.to} onClick={(e) => handleClick(e, item.isRoute)}
              className={`flex flex-1 flex-col items-center gap-0.5 rounded-lg py-1 transition ${active ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"}`}>
              <span className="text-lg">{item.icon}</span>
              <span className="text-[9px] font-medium leading-tight sm:text-[10px]">{item.label}</span>
              {active && <span className="h-1 w-4 rounded-full bg-indigo-500 dark:bg-indigo-400" />}
              {!active && <span className="h-1 w-4" />}
            </Link>
          );
        })}
      </div>
      <p className="pb-1 text-center text-[9px] text-slate-300 dark:text-slate-600">
        © {new Date().getFullYear()} Lango AI · Roj
      </p>
    </nav>
  );
}
