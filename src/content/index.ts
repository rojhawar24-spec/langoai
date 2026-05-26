//
// Content Engine — lazy loads content per language on demand
//
import type { GrammarLesson, VocabWord, TestItem } from "./types";

// Preload chunks for faster navigation (browser cache)
const preloadPromises = new Map<string, Promise<any>>();

// Lazy loaders for each language module with preloading hints
async function loadGrammar(lang: string): Promise<GrammarLesson[]> {
  if (!preloadPromises.has(`grammar-${lang}`)) {
    switch (lang) {
      case "en": preloadPromises.set(`grammar-${lang}`, import("./grammar/en")); break;
      case "nl": preloadPromises.set(`grammar-${lang}`, import("./grammar/nl")); break;
      case "fr": preloadPromises.set(`grammar-${lang}`, import("./grammar/fr")); break;
      case "de": preloadPromises.set(`grammar-${lang}`, import("./grammar/de")); break;
      case "es": preloadPromises.set(`grammar-${lang}`, import("./grammar/es")); break;
      default: return [];
    }
  }
  const mod = await preloadPromises.get(`grammar-${lang}`);
  return mod?.enGrammar || mod?.nlGrammar || mod?.frGrammar || mod?.deGrammar || mod?.esGrammar || [];
}

async function loadWords(lang: string): Promise<VocabWord[]> {
  if (!preloadPromises.has(`words-${lang}`)) {
    switch (lang) {
      case "en": preloadPromises.set(`words-${lang}`, import("./words/en")); break;
      case "nl": preloadPromises.set(`words-${lang}`, import("./words/nl")); break;
      case "fr": preloadPromises.set(`words-${lang}`, import("./words/fr")); break;
      case "de": preloadPromises.set(`words-${lang}`, import("./words/de")); break;
      case "es": preloadPromises.set(`words-${lang}`, import("./words/es")); break;
      default: return [];
    }
  }
  const mod = await preloadPromises.get(`words-${lang}`);
  return mod?.enWords || mod?.nlWords || mod?.frWords || mod?.deWords || mod?.esWords || [];
}

async function loadTests(lang: string): Promise<TestItem[]> {
  if (!preloadPromises.has(`tests-${lang}`)) {
    switch (lang) {
      case "en": preloadPromises.set(`tests-${lang}`, import("./tests/en")); break;
      case "nl": preloadPromises.set(`tests-${lang}`, import("./tests/nl")); break;
      case "fr": preloadPromises.set(`tests-${lang}`, import("./tests/fr")); break;
      case "de": preloadPromises.set(`tests-${lang}`, import("./tests/de")); break;
      case "es": preloadPromises.set(`tests-${lang}`, import("./tests/es")); break;
      default: return [];
    }
  }
  const mod = await preloadPromises.get(`tests-${lang}`);
  return mod?.enTests || mod?.nlTests || mod?.frTests || mod?.deTests || mod?.esTests || [];
}

// In-memory caches to avoid re-imports
const grammarCache = new Map<string, GrammarLesson[]>();
const wordsCache = new Map<string, VocabWord[]>();
const testsCache = new Map<string, TestItem[]>();

export async function getGrammarLessons(lang: string): Promise<GrammarLesson[]> {
  if (grammarCache.has(lang)) return grammarCache.get(lang)!;
  const data = await loadGrammar(lang);
  grammarCache.set(lang, data);
  return data;
}

export async function getVocabularyWords(lang: string): Promise<VocabWord[]> {
  if (wordsCache.has(lang)) return wordsCache.get(lang)!;
  const data = await loadWords(lang);
  wordsCache.set(lang, data);
  return data;
}

export async function getTests(lang: string): Promise<TestItem[]> {
  if (testsCache.has(lang)) return testsCache.get(lang)!;
  const data = await loadTests(lang);
  testsCache.set(lang, data);
  return data;
}

export async function getTopics(lang: string, kind: "grammar" | "words" | "tests"): Promise<string[]> {
  const pool = kind === "grammar" 
    ? await getGrammarLessons(lang) 
    : kind === "words" 
    ? await getVocabularyWords(lang) 
    : await getTests(lang);
  return [...new Set((pool ?? []).map((item: any) => item.topic ?? ""))].filter(Boolean).sort();
}

export async function getByTopic<T extends { topic?: string }>(
  lang: string, kind: "grammar" | "words" | "tests", topic: string
): Promise<T[]> {
  const pool = kind === "grammar" 
    ? await getGrammarLessons(lang) 
    : kind === "words" 
    ? await getVocabularyWords(lang) 
    : await getTests(lang);
  return (pool ?? []).filter((i: any) => i.topic === topic) as T[];
}

export const LANGUAGE_NAMES: Record<string, string> = {
  en: "English", nl: "Dutch", fr: "French", de: "German", es: "Spanish",
};
export const LANGUAGE_FLAGS: Record<string, string> = {
  en: "🇬🇧", nl: "🇳🇱", fr: "🇫🇷", de: "🇩🇪", es: "🇪🇸",
};
