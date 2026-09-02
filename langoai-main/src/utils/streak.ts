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
// ── Streak weather ──
// Puur presentatie: zet streak-lengte + "vandaag al actief" om naar een
// simpel weerbeeld (☔/☀️-metafoor), i.p.v. alleen het kale getal. Geen
// i18n hier — DashboardPage.tsx koppelt de state aan emoji + vertaalde
// tekst, dit bestand blijft puur en makkelijk te testen.
export type StreakWeatherState = "storm" | "cloudy" | "partlySunny" | "sunny" | "rainbow";

export function getStreakWeather(streak: number, todayActive: boolean): StreakWeatherState {
  if (streak > 0 && !todayActive) return "storm"; // streak leeft nog, maar vandaag nog niet gedaan
  if (streak === 0) return "cloudy";
  if (streak < 7) return "partlySunny";
  if (streak < 30) return "sunny";
  return "rainbow";
}

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
    while (true) {
      const dateStr = getDateDaysAgo(i);
      if (activeDates.has(dateStr) || freezeCoversDate(dateStr)) {
        streak++;
        i++;
        continue;
      }
      break;
    }
  } else if (yesterdayActive) {
    // chain starts yesterday
    streak = 1;
    let i = 2;
    while (true) {
      const dateStr = getDateDaysAgo(i);
      if (activeDates.has(dateStr) || freezeCoversDate(dateStr)) {
        streak++;
        i++;
        continue;
      }
      break;
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

export interface CalendarDay {
  date: string; // YYYY-MM-DD
  day: number;  // 1-31
  active: boolean;
  isToday: boolean;
  isFuture: boolean;
}

/**
 * Volledige-maand-versie van getLast7Days, voor de Streak Calendar op het
 * Profiel. Zelfde lokale-datumopbouw (getFullYear/getMonth/getDate) als de
 * rest van dit bestand — geen toISOString(), dat is UTC-gebaseerd en kan
 * rond middernacht een dag verschuiven afhankelijk van tijdzone.
 */
export function getMonthCalendar(year: number, month: number /* 0-11 */): CalendarDay[] {
  const activeDates = getActiveDates();
  const today = getTodayLocal();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const result: CalendarDay[] = [];
  for (let day = 1; day <= daysInMonth; day++) {
    const d = new Date(year, month, day);
    const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    result.push({
      date: dateStr,
      day,
      active: activeDates.has(dateStr),
      isToday: dateStr === today,
      isFuture: dateStr > today,
    });
  }
  return result;
}

/**
 * Hoeveel lege cellen er vóór dag 1 moeten komen zodat de kalender op de
 * juiste weekdag begint. weekStartsOnMonday: NL/BE-conventie (maandag
 * eerst) i.p.v. de Amerikaanse zondag-eerst.
 */
export function getMonthLeadingBlanks(year: number, month: number, weekStartsOnMonday = true): number {
  const firstWeekday = new Date(year, month, 1).getDay(); // 0=zo .. 6=za
  if (!weekStartsOnMonday) return firstWeekday;
  return (firstWeekday + 6) % 7; // 0=ma .. 6=zo
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

// ── Streak freeze ──
// placeholder", maar computeStreak() gebruikte ze nergens — de vlag deed
// dus feitelijk niets. Nu wel: computeStreak() overbrugt precies 1
// ontbrekende dag als er een freeze beschikbaar is.
//
// freezeCoversDate() is idempotent: zodra een freeze "gecommitteerd" is
// aan een specifieke datum, blijft precies díe datum overbrugd bij
// herhaalde computeStreak()-aanroepen (Dashboard, useStreakReconciler,
// reconcileStreak roepen dit allemaal aan) — zonder dat dezelfde freeze
// ooit een tweede, ander gat beschermt. Zonder dit zou de freeze bij elke
// nieuwe aanroep opnieuw "beschikbaar" lijken, of andersom, bij elke
// aanroep opnieuw verbruikt worden en een wisselende streak opleveren.
const STREAK_FREEZE_KEY          = "langlearn_streak_freeze";
const STREAK_FREEZE_USED_FOR_KEY = "langlearn_streak_freeze_used_for";

export function hasStreakFreeze(): boolean {
  return localStorage.getItem(STREAK_FREEZE_KEY) === "true";
}

export function grantStreakFreeze(): void {
  localStorage.setItem(STREAK_FREEZE_KEY, "true");
}

export function consumeStreakFreeze(): boolean {
  if (hasStreakFreeze()) {
    localStorage.removeItem(STREAK_FREEZE_KEY);
    return true;
  }
  return false;
}

function freezeCoversDate(dateStr: string): boolean {
  const committedTo = localStorage.getItem(STREAK_FREEZE_USED_FOR_KEY);
  if (committedTo === dateStr) return true;
  if (committedTo) return false; // al aan een andere datum besteed
  if (!hasStreakFreeze()) return false;
  localStorage.setItem(STREAK_FREEZE_USED_FOR_KEY, dateStr);
  localStorage.removeItem(STREAK_FREEZE_KEY);
  return true;
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