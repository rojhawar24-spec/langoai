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

const I18nContext = createContext<I18nContextType | null>(null);

const STORAGE_KEY = "langlearn_ui_language";

function getStoredLanguage(): UILanguage {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (
      raw &&
      ["en", "nl", "fr", "de", "es"].includes(raw)
    ) {
      return raw as UILanguage;
    }
  } catch {
    // ignore
  }
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const { user, updateProfile, isAuthenticated } = useAuth();
  const [uiLanguage, setUILanguageState] = useState<UILanguage>(getStoredLanguage);

   // Sync with user profile if available
   useEffect(() => {
     if (isAuthenticated && user?.interfaceLanguage) {
       const lang = user.interfaceLanguage as UILanguage;
       if (["en", "nl", "fr", "de", "es"].includes(lang)) {
         // If user picks an interface language, use it for ALL UI language content.
         setUILanguageState(lang);
         localStorage.setItem(STORAGE_KEY, lang);
         // Also set learning language to match UI language when syncing from profile
         if (user.currentLanguage !== lang) {
           updateProfile({ interfaceLanguage: lang, currentLanguage: lang });
         }
       }
     }
   }, [isAuthenticated, user?.interfaceLanguage, user?.currentLanguage, updateProfile]);

   const setUILanguage = useCallback(
     (lang: UILanguage) => {
       setUILanguageState(lang);
       localStorage.setItem(STORAGE_KEY, lang);
       if (isAuthenticated && user) {
         updateProfile({ interfaceLanguage: lang, currentLanguage: lang });
       }
     },
     [isAuthenticated, user, updateProfile]
   );

  const t = useCallback(
    (key: TranslationKey): string => {
      return getTrans(uiLanguage, key);
    },
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
  if (!ctx) {
    throw new Error("useTranslate must be used within an I18nProvider");
  }
  return ctx;
}
