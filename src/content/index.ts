//
// Content Engine — aggregates all file‑based content per language
//
import type { GrammarLesson, VocabWord, TestItem } from "./types";

// Grammar
import { enGrammar } from "./grammar/en";
import { nlGrammar } from "./grammar/nl";
import { frGrammar } from "./grammar/fr";
import { deGrammar } from "./grammar/de";
import { esGrammar } from "./grammar/es";

// Vocabulary
import { enWords } from "./words/en";
import { nlWords } from "./words/nl";
import { frWords } from "./words/fr";
import { deWords } from "./words/de";
import { esWords } from "./words/es";

// Tests
import { enTests } from "./tests/en";
import { nlTests } from "./tests/nl";
import { frTests } from "./tests/fr";
import { deTests } from "./tests/de";
import { esTests } from "./tests/es";

const grammarMap: Record<string, GrammarLesson[]> = {
  en: enGrammar, nl: nlGrammar, fr: frGrammar, de: deGrammar, es: esGrammar,
};
const wordsMap: Record<string, VocabWord[]> = {
  en: enWords, nl: nlWords, fr: frWords, de: deWords, es: esWords,
};
const testsMap: Record<string, TestItem[]> = {
  en: enTests, nl: nlTests, fr: frTests, de: deTests, es: esTests,
};

export function getGrammarLessons(lang: string): GrammarLesson[] {
  return grammarMap[lang] ?? [];
}
export function getVocabularyWords(lang: string): VocabWord[] {
  return wordsMap[lang] ?? [];
}
export function getTests(lang: string): TestItem[] {
  return testsMap[lang] ?? [];
}
export function getTopics(lang: string, kind: "grammar" | "words" | "tests"): string[] {
  const pool = kind === "grammar" ? grammarMap[lang] : kind === "words" ? wordsMap[lang] : testsMap[lang];
  return [...new Set((pool ?? []).map((item: any) => item.topic ?? ""))].filter(Boolean).sort();
}
export function getByTopic<T extends { topic?: string }>(
  lang: string, kind: "grammar" | "words" | "tests", topic: string
): T[] {
  const pool: any[] = kind === "grammar" ? grammarMap[lang] : kind === "words" ? wordsMap[lang] : testsMap[lang];
  return (pool ?? []).filter((i: any) => i.topic === topic) as T[];
}

export const LANGUAGE_NAMES: Record<string, string> = {
  en: "English", nl: "Dutch", fr: "French", de: "German", es: "Spanish",
};
export const LANGUAGE_FLAGS: Record<string, string> = {
  en: "🇬🇧", nl: "🇳🇱", fr: "🇫🇷", de: "🇩🇪", es: "🇪🇸",
};
