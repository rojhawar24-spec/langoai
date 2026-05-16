// Minimal dataset to unblock Vite build.
// Word Of The Day page expects ALL_WOTD_WORDS exported from this module.

import type { VocabWord } from "@/content/types";

export const ALL_WOTD_WORDS: VocabWord[] = [
  // Dutch
  {
    id: "wotd-nl-1",
    word: "boek",
    translation: "book",
    languageCode: "nl",
    partOfSpeech: "zelfstandig naamwoord",
    example: "Het boek ligt op tafel.",
    topic: "Basis",
  },
  // English fallback
  {
    id: "wotd-en-1",
    word: "table",
    translation: "table",
    languageCode: "en",
    partOfSpeech: "noun",
    example: "The table is in the kitchen.",
    topic: "Basis",
  },
];

