//
// Mistakes Tracker
// Saves every wrong answer from exercises & tests so users can review & improve.
//

const MISTAKES_KEY = "langlearn_mistakes";

export interface MistakeEntry {
  id: string;
  question: string;
  yourAnswer: string;
  correctAnswer: string;
  topic: string;
  languageCode: string;
  source: "exercise" | "test";
  timestamp: string;
  reviewed: boolean;
}

export function getMistakes(): MistakeEntry[] {
  try {
    const raw = localStorage.getItem(MISTAKES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveMistakes(list: MistakeEntry[]): void {
  localStorage.setItem(MISTAKES_KEY, JSON.stringify(list));
}

export function addMistake(entry: Omit<MistakeEntry, "id" | "timestamp" | "reviewed">): void {
  const list = getMistakes();
  list.push({
    ...entry,
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    reviewed: false,
  });
  // Keep max 200 mistakes
  if (list.length > 200) list.splice(0, list.length - 200);
  saveMistakes(list);
}

export function markMistakeReviewed(id: string): void {
  const list = getMistakes();
  const entry = list.find((m) => m.id === id);
  if (entry) {
    entry.reviewed = true;
    saveMistakes(list);
  }
}

export function deleteMistake(id: string): void {
  const list = getMistakes().filter((m) => m.id !== id);
  saveMistakes(list);
}

export function clearAllMistakes(): void {
  localStorage.removeItem(MISTAKES_KEY);
}

export function getMistakeStats(): { total: number; reviewed: number; byTopic: Record<string, number> } {
  const list = getMistakes();
  const byTopic: Record<string, number> = {};
  let reviewed = 0;
  for (const m of list) {
    byTopic[m.topic] = (byTopic[m.topic] || 0) + 1;
    if (m.reviewed) reviewed++;
  }
  return { total: list.length, reviewed, byTopic };
}
