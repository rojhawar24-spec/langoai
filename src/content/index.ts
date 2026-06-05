import type { GrammarLesson, VocabWord, TestItem } from "./types";
import { getGrammarLessons } from "./grammar-json.js";

export { getGrammarLessons };

export async function getVocabularyWords(lang: string): Promise<VocabWord[]> {
  try {
    const mod = await import(`./words/${lang}.ts`);
    return (mod as Record<string, VocabWord[]>)[`${lang}Words`] || [];
  } catch {
    return [];
  }
}

export async function getTests(lang: string): Promise<TestItem[]> {
  try {
    const mod = await import(`./tests/${lang}.ts`);
    return (mod as Record<string, TestItem[]>)[`${lang}Tests`] || [];
  } catch {
    return [];
  }
}

export async function getTopics(lang: string, kind: "grammar" | "words" | "tests"): Promise<string[]> {
  const pool = kind === "grammar" 
    ? await getGrammarLessons(lang) 
    : kind === "words" 
    ? await getVocabularyWords(lang) 
    : await getTests(lang);
  return [...new Set((pool ?? []).map((item: any) => item.topic ?? "")).filter(Boolean).sort()];
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
  en: "🇬🇧", nl: "🇳🇱", fr: "🇫🇷", de: "🇩🇪", es: "🇪🇸",
};