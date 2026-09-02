import { useAuth } from "@/contexts/AuthContext";
import { useTranslate } from "@/i18n/I18nContext";
import { formatPremiumExpiry, isPremiumActive } from "@/utils/apiConfig";

export default function PremiumPage() {
  const { user } = useAuth();
  const { t } = useTranslate();

  if (!user) return null;

  const active = isPremiumActive(user);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-10 pb-28 sm:px-6">
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="bg-slate-950 px-6 py-8 text-white sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">LangoAI</p>
            <h1 className="mt-3 text-3xl font-black sm:text-4xl">{t("premium.title")}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              {t("premium.description")}
            </p>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/60">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t("premium.access")}</p>
              <p className="mt-2 text-xl font-extrabold text-slate-950 dark:text-white">Server managed</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/60">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t("premium.payment")}</p>
              <p className="mt-2 text-xl font-extrabold text-slate-950 dark:text-white">Supabase</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/60">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Platform</p>
              <p className="mt-2 text-xl font-extrabold text-slate-950 dark:text-white">Vercel</p>
            </div>
          </div>

          {active ? (
            <div className="mx-6 mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-200 sm:mx-8 sm:mb-8">
              <p className="font-bold">{t("premium.activeTitle")}</p>
              <p className="mt-1 text-sm">
                {t("premium.activeUntil").replace("{date}", formatPremiumExpiry(user.premiumExpiresAt))}
              </p>
            </div>
          ) : (
            <div className="mx-6 mb-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-900/50 dark:bg-indigo-950/30 sm:mx-8 sm:mb-8">
              <h2 className="text-lg font-extrabold text-slate-950 dark:text-white">{t("premium.managedTitle")}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{t("premium.managedDescription")}</p>
            </div>
          )}

          <div className="border-t border-slate-200 p-6 dark:border-slate-800 sm:p-8">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">{t("premium.accessRuleTitle")}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{t("premium.accessRuleDescription")}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
