//
// Daily XP tracking & per-language progress
// ✅ BUG-26 FIXED: getDailyGoal() reads from localStorage (customisable)
//                  Default is 50 XP, but users/premium can change it
//

const DAILY_XP_KEY     = "langlearn_daily_xp";
const LANGUAGE_XP_KEY  = "langlearn_language_xp";
const LAST_ACTIVITY_KEY = "langlearn_last_activity";
const DAILY_GOAL_KEY   = "langlearn_daily_goal";

interface DailyXPData {
  date: string; // YYYY-MM-DD
  xp: number;
}

/** ✅ Local date — not UTC */
export function getTodayDate(): string {
  const d = new Date();
  return (
    d.getFullYear() +
    "-" +
    String(d.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(d.getDate()).padStart(2, "0")
  );
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
  localStorage.setItem(DAILY_XP_KEY, JSON.stringify({ date: getTodayDate(), xp }));
}

export function addDailyXP(amount: number): number {
  const current = getDailyXP();
  const newXP = current.xp + amount;
  setDailyXP(newXP);
  return newXP;
}

// ✅ BUG-26 FIX: getDailyGoal reads from localStorage, default 50
export function getDailyGoal(overrideGoal?: number): number {
  if (overrideGoal && overrideGoal > 0) return overrideGoal;
  try {
    const stored = localStorage.getItem(DAILY_GOAL_KEY);
    if (stored) {
      const val = Number(stored);
      if (!isNaN(val) && val > 0) return val;
    }
  } catch {
    // ignore
  }
  return 50; // default
}

// ✅ Allow premium users to set a custom daily goal
export function setDailyGoal(goal: number): void {
  if (goal > 0 && goal <= 500) {
    localStorage.setItem(DAILY_GOAL_KEY, String(goal));
  }
}

export function getDailyGoalProgress(overrideGoal?: number): {
  current: number;
  goal: number;
  percent: number;
} {
  const current = getDailyXP().xp;
  const goal = getDailyGoal(overrideGoal);
  const percent = Math.min(Math.round((current / goal) * 100), 100);
  return { current, goal, percent };
}

// ---- Per-language XP ----
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

export function getLastActivityDate(): string | null {
  return localStorage.getItem(LAST_ACTIVITY_KEY);
}

export function setLastActivityDate(date: string): void {
  localStorage.setItem(LAST_ACTIVITY_KEY, date);
}

export function recordActivity(): void {
  setLastActivityDate(getTodayDate());
}
