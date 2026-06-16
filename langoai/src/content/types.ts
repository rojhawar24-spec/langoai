export interface GrammarLesson {
  id: string;
  title: string;
  level: number;
  topic: string;
  body: string;
  exercises: GrammarExercise[];

  /** Short overview / intro shown at the top of the lesson */
  overview?: string;

  /** Slug used as the first in-page scroll anchor when a lesson opens */
  anchorSectionId?: string;

  /** Main rules / formula table */
  rulesTable?: GrammarRuleRow[];

  /** Optional label for the time expressions section */
  timeExpressionsLabel?: string;

  /** Verb conjugation / word-form table */
  conjugationTable?: { header: string; rows: string[][] };

  /** Time expressions, trigger words, signals */
  timeExpressions?: { header: string; rows: string[][] };

  /** Long-form detailed teaching sections, rendered inside accordions */
  details?: { title: string; body: string }[];

  /** Callout rows */
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

  /** Q&A table */
  qa?: { question: string; answer: string }[];

  /** Quick overview concept cards */
  conceptCards?: {
    title: string;
    structure: string;
    example: string;
  }[];
}

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
  level?:  | "A0" | "A1" | "A2" | "B1" | "B2" | "C1";
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