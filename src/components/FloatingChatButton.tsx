interface FloatingChatButtonProps {
  onClick: () => void;
  hasNewMessages?: boolean;
}

export default function FloatingChatButton({ onClick, hasNewMessages }: FloatingChatButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-300 transition-all hover:scale-110 hover:shadow-xl hover:shadow-indigo-400 active:scale-95 lg:bottom-8 lg:right-8 lg:h-14 lg:w-14 dark:shadow-indigo-900/50 dark:hover:shadow-indigo-800/50"
      title="AI Tutor"
    >
      <span className="text-2xl transition-transform group-hover:scale-110">🤖</span>
      {hasNewMessages && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white ring-2 ring-white dark:ring-slate-900">
          !
        </span>
      )}
    </button>
  );
}
