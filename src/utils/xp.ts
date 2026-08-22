// src/utils/xp.ts
// ✅ DEFINITIEF CORRECT:
//    - createXPAwarder werkt met BEIDE aanroepvormen:
//      1. createXPAwarder(updateProfile)         ← oude manier (5 pagina's ongewijzigd)
//      2. createXPAwarder(user, updateProfile)   ← nieuwe manier
//    - Wanneer alleen updateProfile meegegeven: user wordt uit memory cache gelezen
//    - Memory cache wordt bijgehouden door AuthContext via setCurrentUser()

import { addDailyXP } from "@/utils/progress";
import { markTodayActive, computeStreak, getTodayLocal } from "@/utils/streak";
import { type UserData, getCurrentUser } from "@/utils/storage";

// ── XP rewards ──────────────────────────────────────────────────────────
export const XP_REWARDS = {
  GRAMMAR_LESSON_COMPLETE: 10,
  VOCABULARY_WORD_LEARNED: 5,
  EXERCISE_CORRECT: 5,
  TEST_PASSED: 30,
  DAILY_GOAL_BONUS: 15,
  STREAK_7_DAYS: 20,
  STREAK_30_DAYS: 50,
} as const;

// ── Level berekening ─────────────────────────────────────────────────────
export function computeLevel(totalXP: number): number {
  let level = 1;
  while (xpRequiredForLevel(level + 1) <= totalXP) {
    level++;
  }
  return level;
}

export function xpRequiredForLevel(level: number): number {
  if (level <= 1) return 0;
  return 100 * ((level - 1) * level) / 2;
}

export function xpForNextLevel(currentLevel: number): number {
  return currentLevel * 100;
}

export function xpInCurrentLevel(totalXP: number, level: number): number {
  return totalXP - xpRequiredForLevel(level);
}

// ── XP award resultaat ───────────────────────────────────────────────────
export interface XPAwardResult {
  newTotalXP: number;
  newLevel: number;
  leveledUp: boolean;
  oldLevel: number;
  dailyXP: number;
  dailyGoalReached: boolean;
}

// ── ✅ BACKWARD COMPATIBLE createXPAwarder ────────────────────────────────
//
// Manier 1 (oud — 5 bestaande pagina's, ONGEWIJZIGD):
//   const award = createXPAwarder(updateProfile)
//   → user wordt gelezen uit memory cache (gevuld door AuthContext)
//
// Manier 2 (nieuw — expliciet):
//   const award = createXPAwarder(user, updateProfile)
//   → user wordt direct meegegeven
//
// 🔒 Sinds de server-authoritative XP fix (zie AuthContext.tsx +
// supabase/schema.sql, award_xp()) doet updateProfile() hieronder niet
// meer een directe kolom-write — het herkent deze exacte 4-velden-vorm en
// routeert 'm naar een gevalideerde RPC. Niets in DIT bestand hoefde
// daarvoor te veranderen: de optimistische berekening hieronder bepaalt
// nog steeds wat de UI DIRECT laat zien (voor instant feedback), de RPC
// bepaalt wat er written wordt. Als de server een ander bedrag toestaat
// dan verwacht (bv. dagelijkse cap bereikt), corrigeert de eerstvolgende
// profile-refresh dat vanzelf.
export function createXPAwarder(
  userOrUpdateFn: UserData | ((u: Partial<UserData>) => void),
  updateProfileArg?: (u: Partial<UserData>) => void
) {
  return function awardXP(amount: number): XPAwardResult {
    // Bepaal user en updateProfile op basis van aanroepvorm
    let user: UserData | null;
    let updateProfile: (u: Partial<UserData>) => void;

    if (typeof userOrUpdateFn === "function") {
      // Manier 1: createXPAwarder(updateProfile)
      user = getCurrentUser(); // ✅ Memory cache — gevuld door AuthContext
      updateProfile = userOrUpdateFn;
    } else {
      // Manier 2: createXPAwarder(user, updateProfile)
      user = userOrUpdateFn;
      updateProfile = updateProfileArg!;
    }

    if (!user) throw new Error("No user logged in");

    // ── Bereken nieuwe XP en level ───────────────────────────────────────
    const oldLevel   = user.level;
    const newTotalXP = user.totalXP + amount;
    const newLevel   = computeLevel(newTotalXP);
    const leveledUp  = newLevel > oldLevel;

    // ── Dagelijkse XP en streak bijwerken ────────────────────────────────
    const dailyXP         = addDailyXP(amount);
    markTodayActive();
    const dailyGoalReached = dailyXP >= 50 && dailyXP - amount < 50;

    const { streak: computedStreak } = computeStreak();

    // ── Profiel opslaan ──────────────────────────────────────────────────
    updateProfile({
      totalXP:          newTotalXP,
      level:            newLevel,
      streak:           computedStreak,
      lastActivityDate: getTodayLocal(),
    });

    return {
      newTotalXP,
      newLevel,
      leveledUp,
      oldLevel,
      dailyXP,
      dailyGoalReached,
    };
  };
}

// ── XP geschiedenis ──────────────────────────────────────────────────────
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
    if (history.length > 100) history.shift();
    localStorage.setItem(XP_HISTORY_KEY, JSON.stringify(history));
  } catch {
    // ignore
  }
}
