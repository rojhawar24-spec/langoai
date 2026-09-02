// src/components/LanguagePickerGrid.tsx
// ✅ Herbruikbare "full-screen language picker" — kaarten met vlag + native
//    naam (UI_LANGUAGES.name is al de native spelling, bv. "Nederlands",
//    "Français" — geen aparte vertaalde naam nodig). Gebruikt nu in
//    OnboardingPage; kan later ook in Instellingen hergebruikt worden zonder
//    duplicatie.

import { UI_LANGUAGES, type UILanguage } from "@/i18n/translations";

interface LanguagePickerGridProps {
  value: UILanguage;
  onSelect: (lang: UILanguage) => void;
}

export default function LanguagePickerGrid({ value, onSelect }: LanguagePickerGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {UI_LANGUAGES.map((lang) => {
        const active = value === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => onSelect(lang.code as UILanguage)}
            aria-pressed={active}
            className={`flex flex-col items-center gap-2 rounded-2xl border-2 p-5 text-center shadow-sm transition ${
              active
                ? "border-indigo-500 bg-indigo-50 dark:border-indigo-400 dark:bg-indigo-950/30"
                : "border-slate-200 bg-white hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-indigo-800"
            }`}
          >
            <span className="text-4xl" aria-hidden="true">{lang.flag}</span>
            <span className="text-sm font-bold text-slate-900 dark:text-white">{lang.name}</span>
          </button>
        );
      })}
    </div>
  );
}
