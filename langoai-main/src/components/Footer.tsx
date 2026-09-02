import { Link } from "react-router-dom";
import { useTranslate } from "@/i18n/I18nContext";
import { Database, ShieldCheck, KeyRound } from "lucide-react";

interface FooterProps {
  minimal?: boolean;
}

export default function Footer({ minimal }: FooterProps) {
  const { t } = useTranslate();

  if (minimal) {
    return (
      <footer className="border-t border-slate-200 bg-white py-6 dark:border-slate-700 dark:bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 text-xs text-slate-400 dark:text-slate-500">
          <Link to="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            {t("topbar.privacyPolicy")}
          </Link>
          <Link to="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            {t("topbar.termsOfService")}
          </Link>
          <Link to="/security" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            {t("footer.security")}
          </Link>
          <Link to="/faq" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            {t("footer.faq")}
          </Link>
          <Link to="/pricing" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            {t("footer.pricing")}
          </Link>
          <Link to="/why" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            {t("footer.why")}
          </Link>
          <Link to="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            {t("footer.contact")}
          </Link>
          <span>© {new Date().getFullYear()} Lango AI</span>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-slate-200 bg-white py-6 dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            <Database className="h-3 w-3" aria-hidden="true" />
            {t("footer.badgeRls")}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            <ShieldCheck className="h-3 w-3" aria-hidden="true" />
            {t("footer.badgeGdpr")}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            <KeyRound className="h-3 w-3" aria-hidden="true" />
            {t("footer.badge2fa")}
          </span>
        </div>

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
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 dark:text-slate-500">
            <Link to="/privacy" className="transition hover:text-indigo-600 dark:hover:text-indigo-400">{t("footer.privacy")}</Link>
            <Link to="/terms" className="transition hover:text-indigo-600 dark:hover:text-indigo-400">{t("footer.terms")}</Link>
            <Link to="/security" className="transition hover:text-indigo-600 dark:hover:text-indigo-400">{t("footer.security")}</Link>
            <Link to="/faq" className="transition hover:text-indigo-600 dark:hover:text-indigo-400">{t("footer.faq")}</Link>
            <Link to="/pricing" className="transition hover:text-indigo-600 dark:hover:text-indigo-400">{t("footer.pricing")}</Link>
            <Link to="/why" className="transition hover:text-indigo-600 dark:hover:text-indigo-400">{t("footer.why")}</Link>
            <Link to="/contact" className="transition hover:text-indigo-600 dark:hover:text-indigo-400">{t("footer.contact")}</Link>
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
