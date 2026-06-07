import type { GrammarLesson, VocabWord, TestItem } from "./types";

async function loadGrammar(lang: string): Promise<GrammarLesson[]> {
  try {
    const mod = await import(`./grammar/${lang}/index.ts`);
    return (mod as Record<string, GrammarLesson[]>)[`${lang}Grammar`] || [];
  } catch {
    return [];
  }
}

async function loadWords(lang: string): Promise<VocabWord[]> {
  try {
    const mod = await import(`./words/${lang}.ts`);
    return (mod as Record<string, VocabWord[]>)[`${lang}Words`] || [];
  } catch {
    return [];
  }
}

async function loadTests(lang: string): Promise<TestItem[]> {
  try {
    const mod = await import(`./tests/${lang}.ts`);
    return (mod as Record<string, TestItem[]>)[`${lang}Tests`] || [];
  } catch {
    return [];
  }
}

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
  return (pool ?? []).filter((i: any) => i.topic === topic) as unknown as T[];
}

export const LANGUAGE_NAMES: Record<string, string> = {
  en: "English", nl: "Dutch", fr: "French", de: "German", es: "Spanish",
};
export const LANGUAGE_FLAGS: Record<string, string> = {
  en: '🇬🇧', nl: '🇳🇱', fr: '🇫🇷', de: '🇩🇪', es: '🇪🇸',
};
