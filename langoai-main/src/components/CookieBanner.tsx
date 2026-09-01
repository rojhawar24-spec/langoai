// src/components/CookieBanner.tsx
// ✅ GDPR verplicht — Cookie toestemmingsbanner
// Toont bij eerste bezoek — verdwijnt na accepteren of weigeren

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslate } from "@/i18n/I18nContext";

const COOKIE_KEY = "langlearn_cookie_consent";
const ADSENSE_SCRIPT_ID = "adsbygoogle-script";

export type CookieConsent = "accepted" | "declined" | null;

export function getCookieConsent(): CookieConsent {
  try {
    const val = localStorage.getItem(COOKIE_KEY);
    if (val === "accepted" || val === "declined") return val;
  } catch { /* ignore */ }
  return null;
}

// ✅ GDPR-FIX: dit is nu de ENIGE plek in de hele app die AdSense laadt.
// Er staat geen <script> meer in index.html — dit voorkomt dat het
// trackingscript draait vóórdat de gebruiker toestemming heeft gegeven.
// Idempotent: injecteert het script maar één keer, ook als deze functie
// meerdere keren wordt aangeroepen (bv. bij elke terugkerende sessie).
function loadAdSense() {
  try {
    if (document.getElementById(ADSENSE_SCRIPT_ID)) return; // al geladen
    const script = document.createElement("script");
    script.id = ADSENSE_SCRIPT_ID;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2793563271769362";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  } catch { /* ignore */ }
}

export default function CookieBanner() {
  const { t } = useTranslate();
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const consent = getCookieConsent();

    if (consent === null) {
      // Nog geen keuze gemaakt → toon de banner (kleine vertraging zodat
      // de pagina eerst laadt), AdSense blijft uit tot er een keuze is.
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }

    if (consent === "accepted") {
      // ✅ Op een terugkerend bezoek met eerdere toestemming: laad AdSense
      // alsnog (dit gebeurde voorheen NIET, want de banner-knop wordt dan
      // nooit opnieuw ingedrukt — dat was de bug).
      loadAdSense();
    }
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
    loadAdSense();
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
    // Geen AdSense-script laden — respecteert de weigering volledig.
  }

  // ✅ A11Y-FIX (audit 4.2.3): focus vangen + Escape sluit de banner.
  // Escape wordt behandeld als "weigeren", nooit als "accepteren" — onder
  // GDPR moet toestemming een actieve, ondubbelzinnige handeling zijn, dus
  // een onduidelijke sluit-actie mag nooit als consent worden geïnterpreteerd.
  useEffect(() => {
    if (!visible) return;

    // Focus het dialoogvenster zodra het verschijnt.
    dialogRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        decline();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      aria-label={t("cookie.title")}
      className="fixed bottom-20 left-3 right-3 z-50 mx-auto max-w-lg animate-in slide-in-from-bottom-4 duration-300 outline-none lg:bottom-6 lg:left-6 lg:right-auto lg:max-w-md"
    >
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-800">

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50 px-5 py-4 dark:border-slate-700 dark:bg-slate-900">
          <span className="text-2xl" aria-hidden="true">🍪</span>
          <div>
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              {t("cookie.title")}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              GDPR / AVG — België · EU
            </p>
          </div>
        </div>

        {/* Inhoud */}
        <div className="px-5 py-4">
          <p className="text-xs leading-5 text-slate-600 dark:text-slate-300">
            {t("cookie.description")}{" "}
            <Link
              to="/privacy"
              className="font-semibold text-indigo-600 underline hover:text-indigo-500 dark:text-indigo-400"
            >
              {t("cookie.privacy_link")}
            </Link>
          </p>

          <div className="mt-2 space-y-1 text-xs text-slate-500 dark:text-slate-400">
            <p>✅ {t("cookie.necessary")} — {t("cookie.necessary_desc")}</p>
            <p>📊 {t("cookie.analytics")} — {t("cookie.analytics_desc")}</p>
            <p>📢 {t("cookie.advertising")} — {t("cookie.advertising_desc")}</p>
          </div>
        </div>

        {/* Knoppen */}
        <div className="flex gap-2 border-t border-slate-100 px-5 py-4 dark:border-slate-700">
          <button
            onClick={decline}
            className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
          >
            {t("cookie.decline")}
          </button>
          <button
            onClick={accept}
            className="flex-1 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {t("cookie.accept")}
          </button>
        </div>

      </div>
    </div>
  );
}
