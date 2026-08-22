// src/components/ErrorBoundary.tsx
// ✅ Vangt onverwachte runtime-fouten ergens in de React-boom op.
// Zonder dit crasht de HELE app naar een wit scherm zodra er ergens
// een render-fout optreedt (bv. corrupte content, null-reference).
// Met dit component krijgt de gebruiker een nette foutpagina met een
// "Probeer opnieuw"-knop, en blijft de rest van de site normaal werken
// na een refresh/reset.

import { Component, useContext, type ErrorInfo, type ReactNode } from "react";
import { I18nContext } from "@/i18n/I18nContext";

interface Props {
  children: ReactNode;
  /** Optionele naam van de sectie, voor duidelijkere logging (bv. "GrammarPage"). */
  scope?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

// ✅ i18n FIX (audit 3.4): een class component kan geen hooks gebruiken,
// dus de daadwerkelijke (vertaalde) foutpagina zit in dit losse functionele
// component. Zo blijft de crash-vangende logica in de class, maar toont de
// gebruiker altijd een foutmelding in de door hen gekozen interfacetaal
// i.p.v. altijd Nederlands.
//
// ⚠️ BELANGRIJK: dit component wordt ook gebruikt door de root-ErrorBoundary
// in main.tsx, die BUITEN de <I18nProvider> valt (die zit pas binnenin App).
// Als App zelf al crasht vóórdat I18nProvider mount, is er geen taalcontext
// beschikbaar. Daarom lezen we de context hier direct met useContext()
// (die veilig null teruggeeft) i.p.v. de useTranslate()-hook (die een error
// gooit zonder provider) — anders zou de allerlaatste vangnet-boundary zelf
// weer een crash veroorzaken en alsnog een wit scherm tonen.
function ErrorFallback({
  error,
  onRetry,
  onReload,
}: {
  error: Error | null;
  onRetry: () => void;
  onReload: () => void;
}) {
  const ctx = useContext(I18nContext);
  const t = ctx?.t ?? ((key: string) => FALLBACK_EN[key] ?? key);

  return (
    <div
      role="alert"
      className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-6 text-center dark:bg-slate-900"
    >
      <div className="text-5xl" aria-hidden="true">
        ⚠️
      </div>
      <h1 className="text-xl font-bold text-slate-900 dark:text-white">
        {t("boundary.title")}
      </h1>
      <p className="max-w-sm text-sm text-slate-600 dark:text-slate-400">
        {t("boundary.message")}
      </p>
      <div className="flex gap-3">
        <button
          onClick={onRetry}
          className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {t("boundary.retry")}
        </button>
        <button
          onClick={onReload}
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {t("boundary.toDashboard")}
        </button>
      </div>
      {import.meta.env.DEV && error && (
        <pre className="mt-4 max-w-lg overflow-auto rounded-lg bg-slate-200 p-3 text-left text-xs text-slate-800 dark:bg-slate-800 dark:text-slate-200">
          {error.message}
        </pre>
      )}
    </div>
  );
}

// Minimale Engelse noodtekst — alleen gebruikt als deze boundary vuurt
// vóórdat er een taalcontext bestaat (zie uitleg hierboven).
const FALLBACK_EN: Record<string, string> = {
  "boundary.title": "Something went wrong",
  "boundary.message":
    "An unexpected error occurred. Your data is safe — try reloading the page, or go back to the dashboard.",
  "boundary.retry": "Try again",
  "boundary.toDashboard": "To dashboard",
};

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // In productie zou je dit naar een logging-service (Sentry e.d.) sturen.
    // Voor nu: duidelijke console-log zodat het zichtbaar is in Vercel logs.
    console.error(
      `[ErrorBoundary${this.props.scope ? `:${this.props.scope}` : ""}]`,
      error,
      errorInfo.componentStack
    );
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  private handleReload = () => {
    window.location.href = "/dashboard";
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback
          error={this.state.error}
          onRetry={this.handleReset}
          onReload={this.handleReload}
        />
      );
    }

    return this.props.children;
  }
}
