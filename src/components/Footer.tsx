import { Link } from "react-router-dom";

interface FooterProps {
  minimal?: boolean;
}

export default function Footer({ minimal }: FooterProps) {
  if (minimal) {
    return (
      <footer className="border-t border-slate-200 bg-white py-6 dark:border-slate-700 dark:bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 text-xs text-slate-400 dark:text-slate-500">
          <Link to="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            Terms of Service
          </Link>
          <span>© {new Date().getFullYear()} Lango AI</span>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-slate-200 bg-white py-6 dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Lango AI</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
            <Link to="/privacy" className="transition hover:text-indigo-600 dark:hover:text-indigo-400">Privacy</Link>
            <Link to="/terms" className="transition hover:text-indigo-600 dark:hover:text-indigo-400">Terms</Link>

          </div>

          {/* Credit */}
          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} Lango AI · <span className="text-slate-400 dark:text-slate-500">Roj</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
