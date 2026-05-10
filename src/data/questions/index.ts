export interface Question {
  id: string;
  topic: string;
  type: "multiple-choice" | "translation";
  prompt: string;
  options: string[];
  correctAnswer: string;
  languageCode: string;
}

// All questions across all languages and topics
import { englishQuestions } from "./english";
import { dutchQuestions } from "./dutch";
import { frenchQuestions } from "./french";
import { germanQuestions } from "./german";
import { spanishQuestions } from "./spanish";

export const ALL_QUESTIONS: Question[] = [
  ...englishQuestions,
  ...dutchQuestions,
  ...frenchQuestions,
  ...germanQuestions,
  ...spanishQuestions,
];

export function getQuestionsByLanguage(languageCode: string): Question[] {
  return ALL_QUESTIONS.filter((q) => q.languageCode === languageCode);
}

export function getTopicsByLanguage(languageCode: string): string[] {
  const topics = new Set(
    ALL_QUESTIONS
      .filter((q) => q.languageCode === languageCode)
      .map((q) => q.topic)
  );
  return Array.from(topics).sort();
}

export function getQuestionsByTopic(
  languageCode: string,
  topic: string
): Question[] {
  return ALL_QUESTIONS.filter(
    (q) => q.languageCode === languageCode && q.topic === topic
  );
}

export function getRandomQuestions(
  languageCode: string,
  topic?: string,
  count = 10
): Question[] {
  let pool = topic
    ? getQuestionsByTopic(languageCode, topic)
    : getQuestionsByLanguage(languageCode);

  // Fisher-Yates shuffle and slice
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export const TOPIC_ICONS: Record<string, string> = {
  Verbs: "🏃",
  Nouns: "📦",
  Adjectives: "🎨",
  Phrases: "💬",
  Greetings: "👋",
  Numbers: "🔢",
  Colors: "🌈",
  "Food & Drink": "🍽️",
  Family: "👨‍👩‍👧‍👦",
  Travel: "✈️",
  "Days & Time": "📅",
  Pronouns: "👤",
  Prepositions: "📍",
  Conjunctions: "🔗",
  "Common Expressions": "🗣️",
  Questions: "❓",
  Clothing: "👕",
  "Body Parts": "🦵",
};
