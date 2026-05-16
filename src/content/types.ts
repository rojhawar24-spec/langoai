//
// Content Engine — type definitions and loader for file‑based content
//

export interface GrammarLesson {
  id: string;
  title: string;
  level: number;
  topic: string;
  body: string;         // markdown‑ish body (fallback / introductory text)
  exercises: GrammarExercise[];

  // ── Structured section fields (all optional, backwards-compatible) ──

  /** Short overview / intro shown at the top of the lesson */
  overview?: string;

  /** Slug used as the first in-page scroll anchor when a lesson opens */
  anchorSectionId?: string;

  /** Main rules / formula table */
  rulesTable?: GrammarRuleRow[];

  /** Verb conjugation / word‑form table */
  conjugationTable?: { header: string; rows: string[][] };

  /** Time expressions, trigger words, signals */
  timeExpressions?: { header: string; rows: string[][] };

  /** Long-form detailed teaching sections, rendered inside accordions */
  details?: { title: string; body: string }[];

  /** Callout rows (Remember / Tip / Note / Key Point) */
  callouts?: {
    type: "remember" | "tip" | "note" | "key";
    label: string;
    text: string;
  }[];

  /** Common mistakes table */
  commonMistakes?: {
    incorrect: string;
    correct: string;
    explanation: string;
  }[];

  /** Quick review / summary bullets */
  review?: string[];

  /** Q&A table (extends exercises but rendered as a numbered practice table) */
  qa?: { question: string; answer: string }[];
}

/** One row in the main rules table */
export interface GrammarRuleRow {
  rule: string;
  structure: string;
  example: string;
  usage: string;
}

export interface GrammarExercise {
  question: string;
  options: string[];
  answer: string;
}

export interface VocabWord {
  id: string;
  word: string;
  translation: string;
  languageCode: string;
  partOfSpeech: string;
  example: string;
  topic: string;
}

export interface TestItem {
  id: string;
  title: string;
  passScore: number;
  languageCode: string;
  topic: string;
  questions: TestQuestion[];
}

export interface TestQuestion {
  prompt: string;
  options: string[];
  answer: string;
}
