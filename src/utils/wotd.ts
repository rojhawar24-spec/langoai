//
// Word of the Day — Daily Cycle Engine
// Fixed start date: 2025-01-01
// 1 new word per day. Known words reviewed after 7 days.
//

export interface WOTDWord {
  id: string;
  languageCode: string;
  word: string;
  emoji: string;
  hint: string;
  translation: string;
  type?: string;
  emojiHint?: string;
}

export interface WordProgress {
  id: string;
  lastResult: "known" | "unknown" | null;
  lastInteractionDate: string | null;
  nextReviewDate: string | null;
}

const PROGRESS_KEY = "langlearn_wotd_progress";
const FIXED_START = new Date("2025-01-01");

// ── Progress ──

export function getAllProgress(): Record<string, WordProgress> {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) ?? "{}"); } catch { return {}; }
}

function saveProgress(p: Record<string, WordProgress>): void {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}

function getToday(): string {
  return new Date().toISOString().slice(0, 10);
}

function daysSince(start: Date): number {
  return Math.floor((new Date().getTime() - start.getTime()) / 86400000);
}

// ── Actions ──

export function markWordKnown(wordId: string): WordProgress {
  const all = getAllProgress();
  const today = getToday();
  const existing = all[wordId];

  const reviewDate = new Date();
  reviewDate.setDate(reviewDate.getDate() + 7);

  const prog: WordProgress = {
    id: wordId,
    lastResult: "known",
    lastInteractionDate: today,
    nextReviewDate: reviewDate.toISOString().slice(0, 10),
  };

  all[wordId] = { ...existing, ...prog };
  saveProgress(all);
  return prog;
}

export function markWordUnknown(wordId: string): WordProgress {
  const all = getAllProgress();
  const today = getToday();
  const existing = all[wordId];

  const reviewDate = new Date();
  reviewDate.setDate(reviewDate.getDate() + 1);

  const prog: WordProgress = {
    id: wordId,
    lastResult: "unknown",
    lastInteractionDate: today,
    nextReviewDate: reviewDate.toISOString().slice(0, 10),
  };

  all[wordId] = { ...existing, ...prog };
  saveProgress(all);
  return prog;
}

// ── Selection ──

export function selectDailyWords(
  allWords: WOTDWord[],
  progress: Record<string, WordProgress>
): { wordOfTheDay: WOTDWord | null; reviewWords: WOTDWord[] } {
  if (allWords.length === 0) return { wordOfTheDay: null, reviewWords: [] };

  const today = getToday();

  // Main word: D mod len, where D = days since 2025-01-01
  const d = daysSince(FIXED_START);
  const mainIndex = d % allWords.length;
  const wordOfTheDay = allWords[mainIndex];

  // Review words: nextReviewDate <= today AND not the main word AND not already done today
  const reviewWords = allWords.filter((w) => {
    if (w.id === wordOfTheDay.id) return false;
    const p = progress[w.id];
    if (!p || !p.nextReviewDate) return false;
    if (p.lastInteractionDate === today) return false; // already done today
    return p.nextReviewDate <= today;
  });

  // Sort: unknown first, then older review dates
  reviewWords.sort((a, b) => {
    const pa = progress[a.id];
    const pb = progress[b.id];
    if (pa?.lastResult === "unknown" && pb?.lastResult !== "unknown") return -1;
    if (pa?.lastResult !== "unknown" && pb?.lastResult === "unknown") return 1;
    return (pa?.nextReviewDate ?? "").localeCompare(pb?.nextReviewDate ?? "");
  });

  return { wordOfTheDay, reviewWords: reviewWords.slice(0, 3) };
}

// ── Stats ──

export function getProgressStats(words: WOTDWord[]): { total: number; seen: number; new: number } {
  const prog = getAllProgress();
  const seen = words.filter((w) => prog[w.id]?.lastInteractionDate != null).length;
  return { total: words.length, seen, new: words.length - seen };
}
