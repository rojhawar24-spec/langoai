//
// Save & restore user's position across learning pages.
// When the user leaves mid‑lesson / mid‑test, we persist the exact state.
//

const POSITION_KEY = "langlearn_saved_position";

// ㉑ "exercises" verwijderd — /exercises route bestaat niet in App.tsx
export type PageId = "grammar" | "vocabulary" | "tests";

export interface SavedPosition {
  page: PageId;
  timestamp: number;
  // Grammar
  grammarLessonId?: string;
  grammarTopic?: string;
  // Vocabulary
  vocabularyWordId?: string;
  vocabularyTopic?: string;
  // Tests
  testId?: string;
  testIndex?: number;
  testAnswers?: string[];
  testTopic?: string;
}

export function savePosition(pos: SavedPosition): void {
  // ㉒ Lege if-block verwijderd — code deed niets
  localStorage.setItem(POSITION_KEY, JSON.stringify({ ...pos, timestamp: Date.now() }));
}

export function getSavedPosition(): SavedPosition | null {
  try {
    const raw = localStorage.getItem(POSITION_KEY);
    if (!raw) return null;
    const pos: SavedPosition = JSON.parse(raw);
    // Expire after 7 days
    if (Date.now() - pos.timestamp > 7 * 86400000) {
      clearPosition();
      return null;
    }
    return pos;
  } catch {
    return null;
  }
}

export function clearPosition(): void {
  localStorage.removeItem(POSITION_KEY);
}

/** Returns the route to resume from saved position, or null if nothing is saved. */
export function getResumeRoute(): { route: string; label: string; icon: string } | null {
  const pos = getSavedPosition();
  if (!pos) return null;

  const label =
    pos.page === "grammar"
      ? "Continue Grammar"
      : pos.page === "vocabulary"
      ? "Continue Vocabulary"
      : "Continue Test";

  const icon =
    pos.page === "grammar" ? "📖" : pos.page === "vocabulary" ? "📦" : "📝";

  return { route: `/${pos.page}`, label, icon };
}