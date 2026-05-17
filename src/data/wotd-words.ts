// Minimal dataset to unblock Vite build.
// Word Of The Day page expects ALL_WOTD_WORDS exported from this module.

import type { WOTDWord } from "@/utils/wotd";

export const ALL_WOTD_WORDS: WOTDWord[] = [
  // Dutch
  {
    id: "wotd-nl-1",
    word: "boek",
    translation: "book",
    languageCode: "nl",
    emoji: "📖",
    hint: "You read it",
  },
  // English fallback
  {
    id: "wotd-en-1",
    word: "table",
    translation: "table",
    languageCode: "en",
    emoji: "🪑",
    hint: "You eat on it",
  },
];

