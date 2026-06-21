import type { GrammarLesson, VocabWord, TestItem } from "./types";
import * as enGrammarModule from "./grammar/en/index";
import * as nlGrammarModule from "./grammar/nl/index";
import * as frGrammarModule from "./grammar/fr/index";
import * as deGrammarModule from "./grammar/de/index";
import * as esGrammarModule from "./grammar/es/index";

import * as enWordsModule from "./words/en";
import * as nlWordsModule from "./words/nl";
import * as frWordsModule from "./words/fr";
import * as deWordsModule from "./words/de";
import * as esWordsModule from "./words/es";

import * as enTestsModule from "./tests/en";
import * as nlTestsModule from "./tests/nl";
import * as frTestsModule from "./tests/fr";
import * as deTestsModule from "./tests/de";
import * as esTestsModule from "./tests/es";

function loadGrammar(lang: string): GrammarLesson[] {
  const modules: Record<string, any> = {
    en: enGrammarModule,
    nl: nlGrammarModule,
    fr: frGrammarModule,
    de: deGrammarModule,
    es: esGrammarModule,
  };
  const mod = modules[lang];
  return mod ? (mod[`${lang}Grammar`] || []) : [];
}

function loadWords(lang: string): VocabWord[] {
  const modules: Record<string, any> = {
    en: enWordsModule,
    nl: nlWordsModule,
    fr: frWordsModule,
    de: deWordsModule,
    es: esWordsModule,
  };
  const mod = modules[lang];
  return mod ? (mod[`${lang}Words`] || []) : [];
}

function loadTests(lang: string): TestItem[] {
  const modules: Record<string, any> = {
    en: enTestsModule,
    nl: nlTestsModule,
    fr: frTestsModule,
    de: deTestsModule,
    es: esTestsModule,
  };
  const mod = modules[lang];
  return mod ? (mod[`${lang}Tests`] || []) : [];
}

const grammarCache = new Map<string, GrammarLesson[]>();
const wordsCache = new Map<string, VocabWord[]>();
const testsCache = new Map<string, TestItem[]>();

export function getGrammarLessons(lang: string): GrammarLesson[] {
  if (grammarCache.has(lang)) return grammarCache.get(lang)!;
  const data = loadGrammar(lang);
  grammarCache.set(lang, data);
  return data;
}

export function getVocabularyWords(lang: string): VocabWord[] {
  if (wordsCache.has(lang)) return wordsCache.get(lang)!;
  const data = loadWords(lang);
  wordsCache.set(lang, data);
  return data;
}

export function getTests(lang: string): TestItem[] {
  if (testsCache.has(lang)) return testsCache.get(lang)!;
  const data = loadTests(lang);
  testsCache.set(lang, data);
  return data;
}

export function getTopics(lang: string, kind: "grammar" | "words" | "tests"): string[] {
  const pool =
    kind === "grammar"
      ? getGrammarLessons(lang)
      : kind === "words"
        ? getVocabularyWords(lang)
        : getTests(lang);

  return [...new Set((pool ?? []).map((item: any) => item.topic ?? ""))]
    .filter(Boolean)
    .sort();
}

export function getByTopic<T extends { topic?: string }>(
  lang: string,
  kind: "grammar" | "words" | "tests",
  topic: string
): T[] {
  const pool =
    kind === "grammar"
      ? getGrammarLessons(lang)
      : kind === "words"
        ? getVocabularyWords(lang)
        : getTests(lang);

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
  es: "\uD83C\uDDEA\uD83C\uDDF8",
};
