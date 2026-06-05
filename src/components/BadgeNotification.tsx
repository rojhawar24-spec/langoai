import { useEffect, useState } from "react";

export interface BadgeInfo {
  id: string;
  icon: string;
  label: string;
}

interface BadgeNotificationProps {
  badge: BadgeInfo;
  onDone: () => void;
}

export default function BadgeNotification({ badge, onDone }: BadgeNotificationProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 400);
    }, 3500);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className={`fixed inset-x-0 top-20 z-50 mx-auto w-max max-w-[90vw] transition-all duration-300 ${
      visible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
    }`}>
      <div className="animate-bounce-in rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-amber-50 to-white px-6 py-4 shadow-xl shadow-amber-200 dark:border-amber-600 dark:from-amber-900/30 dark:to-slate-800 dark:shadow-amber-900/40">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{badge.icon}</span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
              🏅 Badge Earned!
            </p>
            <p className="text-sm font-bold text-slate-800 dark:text-white">{badge.label}</p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes bounce-in {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.98); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in { animation: bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; }
      `}</style>
    </div>
  );
}
