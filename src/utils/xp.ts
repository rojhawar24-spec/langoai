//
// Centralised XP & levelling system
// XP needed for the next level = current level × 100 (cumulative total)
//

import { addDailyXP } from "@/utils/progress";
import { markTodayActive, computeStreak } from "@/utils/streak";
import type { UserData } from "@/utils/storage";
import { getTodayDate } from "@/utils/progress";

// ---- XP rewards ----
export const XP_REWARDS = {
  GRAMMAR_LESSON_COMPLETE: 10,
  VOCABULARY_WORD_LEARNED: 5,
  EXERCISE_CORRECT: 5,
  TEST_PASSED: 30,
  DAILY_GOAL_BONUS: 15,
  STREAK_7_DAYS: 20,
  STREAK_30_DAYS: 50,
} as const;

// ---- Level calculation ----
export function computeLevel(totalXP: number): number {
  // Level N requires total XP >= 100 * (N-1)*N / 2
  let level = 1;
  while (xpRequiredForLevel(level + 1) <= totalXP) {
    level++;
  }
  return level;
}

/** Total XP required to reach the given level (cumulative) */
export function xpRequiredForLevel(level: number): number {
  if (level <= 1) return 0;
  return 100 * ((level - 1) * level) / 2;
}

/** XP needed to advance from current level to next */
export function xpForNextLevel(currentLevel: number): number {
  return currentLevel * 100;
}

/** How much XP the user has earned within the current level */
export function xpInCurrentLevel(totalXP: number, level: number): number {
  return totalXP - xpRequiredForLevel(level);
}

// ---- XP awarding (pure logic) ----
export interface XPAwardResult {
  newTotalXP: number;
  newLevel: number;
  leveledUp: boolean;
  oldLevel: number;
  dailyXP: number;
  dailyGoalReached: boolean;
}

export function calculateXPAward(
  user: UserData,
  amount: number
): XPAwardResult {
  const oldLevel = user.level;
  const newTotalXP = user.totalXP + amount;
  const newLevel = computeLevel(newTotalXP);
  const leveledUp = newLevel > oldLevel;

  // Record daily XP
  const dailyXP = addDailyXP(amount);
  markTodayActive();

  const dailyGoalReached = dailyXP >= 50 && dailyXP - amount < 50;

  return {
    newTotalXP,
    newLevel,
    leveledUp,
    oldLevel,
    dailyXP,
    dailyGoalReached,
  };
}

// ---- Hook for awarding XP within components ----
/**
 * Creates an XP awarder function that works with a passed-in user object.
 * This is safer than reading from localStorage, especially after Supabase integration.
 *
 * @param user - The current user object
 * @param updateProfile - Function to update the user profile
 * @returns A function to award XP
 */
export function createXPAwarder(
  user: UserData,
  updateProfile: (u: Partial<UserData>) => void
) {
  return function awardXP(amount: number): XPAwardResult {
    if (!user) throw new Error("No user logged in");

    const result = calculateXPAward(user, amount);

    const updates: Partial<UserData> = {
      totalXP: result.newTotalXP,
      level: result.newLevel,
      lastActivityDate: getTodayDate(),
    };

    // Use the centralised streak engine
    const { streak: computedStreak } = computeStreak();
    updates.streak = computedStreak;

    updateProfile(updates);

    return result;
  };
}

// ---- XP history (for debugging/transparency) ----
const XP_HISTORY_KEY = "langlearn_xp_history";

export interface XPRecord {
  timestamp: string;
  amount: number;
  source: string;
}

export function addXPRecord(amount: number, source: string): void {
  const record: XPRecord = {
    timestamp: new Date().toISOString(),
    amount,
    source,
  };
  try {
    const raw = localStorage.getItem(XP_HISTORY_KEY);
    const history: XPRecord[] = raw ? JSON.parse(raw) : [];
    history.push(record);
    // Keep only last 100 entries
    if (history.length > 100) history.shift();
    localStorage.setItem(XP_HISTORY_KEY, JSON.stringify(history));
  } catch {
    // ignore
  }
}
