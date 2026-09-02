// src/i18n/I18nContext.tsx
// 🔒 FIX (audit #7 — "learning language and interface language are
// tangled"): this file previously did the opposite of what it claimed to —
// changing your LEARNING language silently forced the whole UI to switch
// too, and vice versa. For a language-learning app that's backwards: the
// entire point is being able to learn Dutch with an English interface, or
// German with a Sorani interface. The two are now fully independent:
//   currentLanguage    → what you're LEARNING (grammar/vocab/tests content)
//   interfaceLanguage  → what the UI CHROME is displayed in
// Changing one never touches the other, anywhere in the app.

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  type UILanguage,
  type TranslationKey,
  getTranslation as getTrans,
} from "@/i18n/translations";

interface I18nContextType {
  uiLanguage: UILanguage;
  setUILanguage: (lang: UILanguage) => void;
  t: (key: TranslationKey) => string;
}

export const I18nContext = createContext<I18nContextType | null>(null);
const STORAGE_KEY = "langlearn_ui_language";

const VALID_LANGS: UILanguage[] = ["en", "nl", "fr", "de", "es"];

function getStoredLanguage(): UILanguage {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw && VALID_LANGS.includes(raw as UILanguage)) {
      return raw as UILanguage;
    }
  } catch { /* ignore */ }
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const { user, updateProfile, isAuthenticated } = useAuth();
  const [uiLanguage, setUILanguageState] = useState<UILanguage>(getStoredLanguage);

  // Interface language follows the profile's OWN interfaceLanguage field —
  // never the learning language. This just keeps the UI in sync if the
  // profile was updated elsewhere (e.g. right after login, before this
  // provider had a chance to read it from localStorage).
  useEffect(() => {
    if (!isAuthenticated || !user?.interfaceLanguage) return;

    const lang = user.interfaceLanguage as UILanguage;
    if (!VALID_LANGS.includes(lang)) return;

    setUILanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }, [user?.interfaceLanguage]);

  // ✅ FIX (audit — toegankelijkheid & SEO): <html lang="..."> stond altijd
  // vast op "en" in index.html en werd nergens aangepast. Schermlezers
  // gebruiken dit attribuut om de juiste uitspraak te kiezen, en Google
  // gebruikt het als taalsignaal. Nu houden we het synchroon met de
  // daadwerkelijk gekozen interface-taal.
  useEffect(() => {
    document.documentElement.lang = uiLanguage;
  }, [uiLanguage]);

  // Manually change the interface language (via Settings or onboarding).
  // Only interfaceLanguage is touched — the language being learned is a
  // completely separate choice, made separately.
  const setUILanguage = useCallback(
    (lang: UILanguage) => {
      setUILanguageState(lang);
      localStorage.setItem(STORAGE_KEY, lang);
      if (isAuthenticated && user) {
        updateProfile({ interfaceLanguage: lang });
      }
    },
    [isAuthenticated, user, updateProfile]
  );

  const t = useCallback(
    (key: TranslationKey): string => getTrans(uiLanguage, key),
    [uiLanguage]
  );

  return (
    <I18nContext.Provider value={{ uiLanguage, setUILanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslate(): I18nContextType {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslate must be used within an I18nProvider");
  return ctx;
}
