//
// Daily XP tracking & per-language progress
//

const DAILY_XP_KEY = "langlearn_daily_xp";
const LANGUAGE_XP_KEY = "langlearn_language_xp";
const LAST_ACTIVITY_KEY = "langlearn_last_activity";

interface DailyXPData {
  date: string; // YYYY-MM-DD
  xp: number;
}

export function getTodayDate(): string {
  return new Date().toISOString().slice(0, 10);
}

export function getDailyXP(): DailyXPData {
  const today = getTodayDate();
  try {
    const raw = localStorage.getItem(DAILY_XP_KEY);
    if (raw) {
      const data: DailyXPData = JSON.parse(raw);
      if (data.date === today) return data;
    }
  } catch {
    // ignore
  }
  return { date: today, xp: 0 };
}

export function setDailyXP(xp: number): void {
  const today = getTodayDate();
  localStorage.setItem(DAILY_XP_KEY, JSON.stringify({ date: today, xp }));
}

export function addDailyXP(amount: number): number {
  const current = getDailyXP();
  const newXP = current.xp + amount;
  setDailyXP(newXP);
  return newXP;
}

export function getDailyGoal(): number {
  return 50;
}

export function getDailyGoalProgress(): { current: number; goal: number; percent: number } {
  const current = getDailyXP().xp;
  const goal = getDailyGoal();
  const percent = Math.min(Math.round((current / goal) * 100), 100);
  return { current, goal, percent };
}

// Per-language XP
interface LanguageXPData {
  [languageCode: string]: number;
}

export function getLanguageXP(languageCode: string): number {
  try {
    const raw = localStorage.getItem(LANGUAGE_XP_KEY);
    if (raw) {
      const data: LanguageXPData = JSON.parse(raw);
      return data[languageCode] ?? 0;
    }
  } catch {
    // ignore
  }
  return 0;
}

export function setLanguageXP(languageCode: string, xp: number): void {
  let data: LanguageXPData = {};
  try {
    const raw = localStorage.getItem(LANGUAGE_XP_KEY);
    if (raw) data = JSON.parse(raw);
  } catch {
    // ignore
  }
  data[languageCode] = xp;
  localStorage.setItem(LANGUAGE_XP_KEY, JSON.stringify(data));
}

export function addLanguageXP(languageCode: string, amount: number): number {
  const current = getLanguageXP(languageCode);
  const newXP = current + amount;
  setLanguageXP(languageCode, newXP);
  return newXP;
}

// Last activity
export function getLastActivityDate(): string | null {
  return localStorage.getItem(LAST_ACTIVITY_KEY);
}

export function setLastActivityDate(date: string): void {
  localStorage.setItem(LAST_ACTIVITY_KEY, date);
}

// Use today's learning activity to compute streak
export function recordActivity(): void {
  const today = getTodayDate();
  setLastActivityDate(today);
}
