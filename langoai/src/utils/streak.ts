//
// Streak Engine
// Tracks consecutive days of learning activity from the user's local calendar.
// A "day" counts as active if the user earned at least 1 XP on that day.
//

const STREAK_HISTORY_KEY = "langlearn_streak_dates";

/**
 * Returns YYYY-MM-DD for the user's local date.
 */
export function getTodayLocal(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/**
 * Returns YYYY-MM-DD for N days ago (local).
 */
export function getDateDaysAgo(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/**
 * Returns YYYY-MM-DD for yesterday (local).
 */
export function getYesterdayLocal(): string {
  return getDateDaysAgo(1);
}

// ── Active‑date registry ──

export function getActiveDates(): Set<string> {
  try {
    const raw = localStorage.getItem(STREAK_HISTORY_KEY);
    if (!raw) return new Set();
    const arr: string[] = JSON.parse(raw);
    return new Set(arr.filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)));
  } catch {
    return new Set();
  }
}

function saveActiveDates(dates: Set<string>): void {
  localStorage.setItem(
    STREAK_HISTORY_KEY,
    JSON.stringify(Array.from(dates).sort())
  );
}

/** Mark today as active (call when any XP is earned). */
export function markTodayActive(): void {
  const dates = getActiveDates();
  dates.add(getTodayLocal());
  saveActiveDates(dates);
}

/**
 * Mark a specific date as active (for backfilling).
 */
export function markDateActive(dateStr: string): void {
  const dates = getActiveDates();
  dates.add(dateStr);
  saveActiveDates(dates);
}

export function isTodayActive(): boolean {
  return getActiveDates().has(getTodayLocal());
}

export function isDateActive(dateStr: string): boolean {
  return getActiveDates().has(dateStr);
}

// ── Streak calculation ──

export interface StreakResult {
  streak: number;
  todayActive: boolean;
  yesterdayActive: boolean;
}

/**
 * Compute the current streak by walking backwards from yesterday.
 *
 * Rules:
 *  • If today is active, the streak INCLUDES today.
 *  • Walk backwards day‑by‑day from the most recent active day.
 *  • As soon as a day is missing, the streak stops.
 */
export function computeStreak(): StreakResult {
  const activeDates = getActiveDates();
  const today = getTodayLocal();
  const yesterday = getYesterdayLocal();

  const todayActive = activeDates.has(today);
  const yesterdayActive = activeDates.has(yesterday);

  let streak = 0;

  // The walkback starts from the latest active day that forms a chain.
  // If today is active, the chain starts today. Otherwise, start from yesterday.
  if (todayActive) {
    streak = 1;
    // walk backwards from yesterday
    let i = 1;
    while (activeDates.has(getDateDaysAgo(i))) {
      streak++;
      i++;
    }
  } else if (yesterdayActive) {
    // chain starts yesterday
    streak = 1;
    let i = 2;
    while (activeDates.has(getDateDaysAgo(i))) {
      streak++;
      i++;
    }
  } else {
    // No activity today or yesterday → streak is 0
    streak = 0;
  }

  return { streak, todayActive, yesterdayActive };
}

/**
 * Get the last 7 days (including today) as an array of { date, active }.
 */
export function getLast7Days(): { date: string; label: string; active: boolean; isToday: boolean }[] {
  const activeDates = getActiveDates();
  const today = getTodayLocal();
  const days: { date: string; label: string; active: boolean; isToday: boolean }[] = [];

  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    days.push({
      date: dateStr,
      label: dayNames[d.getDay()],
      active: activeDates.has(dateStr),
      isToday: dateStr === today,
    });
  }

  return days;
}

/**
 * Reconcile the user profile's streak field with the computed streak.
 * Call this on dashboard load and after any XP award.
 *
 * Returns the corrected streak value.
 */
export function reconcileStreak(currentStoredStreak: number): {
  streak: number;
  changed: boolean;
} {
  const { streak } = computeStreak();
  const changed = streak !== currentStoredStreak;
  return { streak, changed };
}

// ── Streak freeze (premium placeholder) ──
// The UI can check this flag to offer a "streak freeze" item.
export function hasStreakFreeze(): boolean {
  return localStorage.getItem("langlearn_streak_freeze") === "true";
}

export function consumeStreakFreeze(): boolean {
  if (hasStreakFreeze()) {
    localStorage.removeItem("langlearn_streak_freeze");
    return true;
  }
  return false;
}

export function grantStreakFreeze(): void {
  localStorage.setItem("langlearn_streak_freeze", "true");
}

// ── Bootstrap / migration ──

const BOOTSTRAPPED_KEY = "langlearn_streak_bootstrapped";

/**
 * One‑time migration: backfill STREAK_HISTORY_KEY from existing user data
 * so existing users don't lose their streak after the engine change.
 *
 * Call this once on app init or first dashboard load.
 */
export function bootstrapStreakData(lastActivityDate: string | null): void {
  if (localStorage.getItem(BOOTSTRAPPED_KEY) === "true") return;

  const activeDates = getActiveDates();

  // If we already have dates, nothing to do
  if (activeDates.size > 0) {
    localStorage.setItem(BOOTSTRAPPED_KEY, "true");
    return;
  }

  // Backfill from the user profile's lastActivityDate
  if (lastActivityDate) {
    activeDates.add(lastActivityDate);
  }

  // Also check daily-XP key — if it has XP for today, mark today active
  try {
    const raw = localStorage.getItem("langlearn_daily_xp");
    if (raw) {
      const data = JSON.parse(raw);
      if (data.date && data.xp > 0) {
        activeDates.add(data.date);
      }
    }
  } catch {
    // ignore
  }

  saveActiveDates(activeDates);
  localStorage.setItem(BOOTSTRAPPED_KEY, "true");
}