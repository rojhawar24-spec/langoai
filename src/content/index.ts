import type { GrammarLesson, VocabWord, TestItem } from "./types";

// Expliciete imports zodat Vite correct kan code-splitten.
// Template-string imports (`./grammar/${lang}/index.ts`) worden door Vite
// NIET gesplitst — alle talen belanden in één bundle.

async function loadGrammar(lang: string): Promise<GrammarLesson[]> {
  try {
    switch (lang) {
      case "nl": return (await import("./grammar/nl/index")).nlGrammar ?? [];
      case "en": return (await import("./grammar/en/index")).enGrammar ?? [];
      case "fr": return (await import("./grammar/fr/index")).frGrammar ?? [];
      case "de": return (await import("./grammar/de/index")).deGrammar ?? [];
      case "es": return (await import("./grammar/es/index")).esGrammar ?? [];
      default: return [];
    }
  } catch {
    return [];
  }
}

async function loadWords(lang: string): Promise<VocabWord[]> {
  try {
    switch (lang) {
      case "nl": return (await import("./words/nl")).nlWords ?? [];
      case "en": return (await import("./words/en")).enWords ?? [];
      case "fr": return (await import("./words/fr")).frWords ?? [];
      case "de": return (await import("./words/de")).deWords ?? [];
      case "es": return (await import("./words/es")).esWords ?? [];
      default: return [];
    }
  } catch {
    return [];
  }
}

async function loadTests(lang: string): Promise<TestItem[]> {
  try {
    switch (lang) {
      case "en": return (await import("./tests/en")).enTests ?? [];
      case "fr": return (await import("./tests/fr")).frTests ?? [];
      case "de": return (await import("./tests/de")).deTests ?? [];
      case "es": return (await import("./tests/es")).esTests ?? [];
      // nl gebruikt het lazy systeem in tests/lazy.ts — geen directe import nodig
      default: return [];
    }
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
  const pool =
    kind === "grammar"
      ? await getGrammarLessons(lang)
      : kind === "words"
        ? await getVocabularyWords(lang)
        : await getTests(lang);

  return [...new Set((pool ?? []).map((item: any) => item.topic ?? ""))]
    .filter(Boolean)
    .sort();
}

export async function getByTopic<T extends { topic?: string }>(
  lang: string,
  kind: "grammar" | "words" | "tests",
  topic: string
): Promise<T[]> {
  const pool =
    kind === "grammar"
      ? await getGrammarLessons(lang)
      : kind === "words"
        ? await getVocabularyWords(lang)
        : await getTests(lang);

  return (pool ?? []).filter((i: any) => i.topic === topic) as unknown as T[];
}

export const LANGUAGE_NAMES: Record<string, string> = {
  en: "English",
  nl: "Dutch",
  fr: "French",
  de: "German",
  es: "Spanish",
};

export const LANGUAGE_FLAGS: Record<string, string> = {
  en: "\uD83C\uDDEC\uD83C\uDDE7",
  nl: "\uD83C\uDDF3\uD83C\uDDF1",
  fr: "\uD83C\uDDEB\uD83C\uDDF7",
  de: "\uD83C\uDDE9\uD83C\uDDEA",
  es: "\uD83C\uDDE7\uD83C\uDDEA",
};