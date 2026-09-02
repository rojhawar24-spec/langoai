import { useTranslate } from "@/i18n/I18nContext";

interface FloatingChatButtonProps {
  onClick: () => void;
  hasNewMessages?: boolean;
}

export default function FloatingChatButton({ onClick, hasNewMessages }: FloatingChatButtonProps) {
  const { t } = useTranslate();
  return (
    <button
      onClick={onClick}
      className="group fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-300 transition-all hover:scale-110 hover:shadow-xl hover:shadow-indigo-400 active:scale-95 lg:bottom-8 lg:right-8 lg:h-14 lg:w-14 dark:shadow-indigo-900/50 dark:hover:shadow-indigo-800/50"
      title={t("ai.title")}
      aria-label={hasNewMessages ? t("ai.open_panel_new") : t("ai.open_panel")}
    >
      <span className="text-2xl transition-transform group-hover:scale-110" aria-hidden="true">🤖</span>
      {hasNewMessages && (
        <span
          className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white ring-2 ring-white dark:ring-slate-900"
          aria-hidden="true"
        >
          !
        </span>
      )}
      {/* ✅ UX-FIX (audit): consistent met de "binnenkort"-badge in BottomNav —
          zonder dit leek de knop volledig actief en kwam de gebruiker pas na
          een klik erachter dat de AI Tutor nog niet werkt. Bestaande
          hasNewMessages-badge hierboven blijft ongewijzigd staan. */}
      <span
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-semibold text-indigo-600 shadow-sm ring-1 ring-white dark:bg-indigo-900/60 dark:text-indigo-300 dark:ring-slate-900"
        aria-hidden="true"
      >
        {t("ai.coming_soon_badge")}
      </span>
    </button>
  );
}
