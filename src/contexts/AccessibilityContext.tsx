// src/contexts/AccessibilityContext.tsx
// ✅ NIEUW — spiegelt ThemeContext.tsx exact (zelfde bewezen patroon:
// localStorage-init, useEffect die een class op <html> zet, setter die
// state + localStorage bijwerkt). Geen Supabase-sync nodig — dit zijn
// lokale weergavevoorkeuren, geen accountgegevens.

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

interface AccessibilityContextType {
  highContrast: boolean;
  dyslexiaFont: boolean;
  setHighContrast: (v: boolean) => void;
  setDyslexiaFont: (v: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

const HIGH_CONTRAST_KEY = "langlearn_high_contrast";
const DYSLEXIA_FONT_KEY = "langlearn_dyslexia_font";

function readBoolPref(key: string): boolean {
  try {
    return localStorage.getItem(key) === "true";
  } catch {
    return false;
  }
}

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [highContrast, setHighContrastState] = useState<boolean>(() => readBoolPref(HIGH_CONTRAST_KEY));
  const [dyslexiaFont, setDyslexiaFontState] = useState<boolean>(() => readBoolPref(DYSLEXIA_FONT_KEY));

  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.classList.toggle("dyslexia-font", dyslexiaFont);
  }, [dyslexiaFont]);

  const setHighContrast = useCallback((v: boolean) => {
    setHighContrastState(v);
    try {
      localStorage.setItem(HIGH_CONTRAST_KEY, String(v));
    } catch {
      // localStorage kan falen — mag de toggle zelf niet blokkeren
    }
  }, []);

  const setDyslexiaFont = useCallback((v: boolean) => {
    setDyslexiaFontState(v);
    try {
      localStorage.setItem(DYSLEXIA_FONT_KEY, String(v));
    } catch {
      // idem
    }
  }, []);

  return (
    <AccessibilityContext.Provider value={{ highContrast, dyslexiaFont, setHighContrast, setDyslexiaFont }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility(): AccessibilityContextType {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider");
  }
  return ctx;
}
