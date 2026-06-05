//
// Content Engine — type definitions and loader for file‑based content
//

export interface GrammarLesson {
  id: string;
  title: string;
  level: number;
  topic: string;
  body: string;         // markdown‑ish body
  exercises: GrammarExercise[];
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
