// src/utils/streak.test.ts
import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  markTodayActive,
  markDateActive,
  computeStreak,
  getTodayLocal,
  getDateDaysAgo,
  isTodayActive,
  reconcileStreak,
  hasStreakFreeze,
  grantStreakFreeze,
  consumeStreakFreeze,
  getStreakWeather,
  getMonthCalendar,
  getMonthLeadingBlanks,
} from "./streak";

// We zetten de systeemklok vast op een bekende datum/tijd zodat de tests
// altijd hetzelfde resultaat geven, ongeacht wanneer ze draaien.
const FIXED_NOW = new Date("2026-07-21T10:00:00"); // dinsdag, lokale tijd

beforeEach(() => {
  localStorage.clear();
  vi.useFakeTimers();
  vi.setSystemTime(FIXED_NOW);
});

describe("getTodayLocal / getDateDaysAgo", () => {
  it("returns today in YYYY-MM-DD format", () => {
    expect(getTodayLocal()).toBe("2026-07-21");
  });

  it("computes N days ago correctly, including month rollover", () => {
    expect(getDateDaysAgo(1)).toBe("2026-07-20");
    expect(getDateDaysAgo(21)).toBe("2026-06-30"); // crosses month boundary
  });
});

describe("computeStreak", () => {
  it("is 0 when there is no activity at all", () => {
    expect(computeStreak()).toEqual({
      streak: 0,
      todayActive: false,
      yesterdayActive: false,
    });
  });

  it("is 1 when only today is active", () => {
    markTodayActive();
    const result = computeStreak();
    expect(result.streak).toBe(1);
    expect(result.todayActive).toBe(true);
  });

  it("counts a consecutive run of days ending today", () => {
    markDateActive("2026-07-19");
    markDateActive("2026-07-20");
    markTodayActive(); // 2026-07-21
    expect(computeStreak().streak).toBe(3);
  });

  it("does NOT count a gap — streak stops at the first missing day", () => {
    markDateActive("2026-07-17"); // gap here (18th missing)
    markDateActive("2026-07-19");
    markDateActive("2026-07-20");
    markTodayActive();
    // Chain is 19, 20, 21 → 3. The 17th is disconnected by the missing 18th.
    expect(computeStreak().streak).toBe(3);
  });

  it("keeps the streak alive if yesterday was active but today isn't yet (grace period)", () => {
    markDateActive("2026-07-19");
    markDateActive("2026-07-20"); // yesterday
    // today NOT marked active yet
    const result = computeStreak();
    expect(result.todayActive).toBe(false);
    expect(result.yesterdayActive).toBe(true);
    expect(result.streak).toBe(2); // still counts yesterday's chain
  });

  it("resets to 0 if there's a gap of 2+ days (no grace beyond yesterday)", () => {
    markDateActive("2026-07-18"); // 3 days ago — too old
    const result = computeStreak();
    expect(result.streak).toBe(0);
  });

  it("handles a full 30-day streak correctly (regression guard for level-up math)", () => {
    for (let i = 0; i < 30; i++) {
      markDateActive(getDateDaysAgo(i));
    }
    expect(computeStreak().streak).toBe(30);
  });
});

describe("isTodayActive", () => {
  it("reflects whether today was marked active", () => {
    expect(isTodayActive()).toBe(false);
    markTodayActive();
    expect(isTodayActive()).toBe(true);
  });
});

describe("reconcileStreak", () => {
  it("reports changed=false when stored value already matches computed streak", () => {
    markTodayActive();
    const { streak, changed } = reconcileStreak(1);
    expect(streak).toBe(1);
    expect(changed).toBe(false);
  });

  it("reports changed=true and corrects a stale/incorrect stored streak", () => {
    // Nothing active → real streak is 0, but profile still says 5 (stale).
    const { streak, changed } = reconcileStreak(5);
    expect(streak).toBe(0);
    expect(changed).toBe(true);
  });
});

describe("streak freeze — basic lifecycle", () => {
  it("has/grant/consume behave as a simple one-shot flag", () => {
    expect(hasStreakFreeze()).toBe(false);
    grantStreakFreeze();
    expect(hasStreakFreeze()).toBe(true);
    expect(consumeStreakFreeze()).toBe(true);
    expect(hasStreakFreeze()).toBe(false);
    expect(consumeStreakFreeze()).toBe(false); // niks meer te verbruiken
  });
});

describe("streak freeze — bridging a gap in computeStreak", () => {
  it("without a freeze, a gap still breaks the streak (unchanged baseline behavior)", () => {
    markDateActive("2026-07-18");
    markDateActive("2026-07-19");
    // gap at 2026-07-20
    markTodayActive(); // 2026-07-21
    expect(computeStreak().streak).toBe(1); // only today counts
  });

  it("with a freeze available, exactly one gap is bridged", () => {
    markDateActive("2026-07-18");
    markDateActive("2026-07-19");
    // gap at 2026-07-20
    markTodayActive(); // 2026-07-21
    grantStreakFreeze();

    expect(computeStreak().streak).toBe(4); // 18, 19, [20 bridged], 21
    expect(hasStreakFreeze()).toBe(false); // consumed
  });

  it("only bridges ONE gap, even with a freeze — a second gap still stops the streak", () => {
    markDateActive("2026-07-18");
    // gaps at both 2026-07-19 and 2026-07-20
    markTodayActive(); // 2026-07-21
    grantStreakFreeze();

    // 21 (today) + 20 (bridged) = 2. The 19th is a second, unbridged gap,
    // so the 18th — even though it's active — is unreachable.
    expect(computeStreak().streak).toBe(2);
  });

  it("is idempotent: repeated calls (Dashboard + useStreakReconciler both call this) return the same streak", () => {
    markDateActive("2026-07-19");
    // gap at 2026-07-20
    markTodayActive(); // 2026-07-21
    grantStreakFreeze();

    const first = computeStreak().streak;
    const second = computeStreak().streak;
    const third = computeStreak().streak;

    expect(first).toBe(3); // 19, [20 bridged], 21
    expect(second).toBe(3);
    expect(third).toBe(3);
  });

  it("does not resurrect an already-broken streak (today AND yesterday both inactive)", () => {
    markDateActive("2026-07-18");
    // 19, 20, 21 (today) all inactive
    grantStreakFreeze();
    // No active chain to attach the freeze to yet — streak is genuinely 0
    // until the user is active again today or the freeze is spent some
    // other way. This keeps the feature predictable rather than silently
    // reviving old streaks with no recent activity at all.
    expect(computeStreak().streak).toBe(0);
    expect(hasStreakFreeze()).toBe(true); // untouched — nothing to bridge yet
  });
});

describe("getStreakWeather", () => {
  it("is 'storm' whenever the streak is alive but today isn't done yet — regardless of length", () => {
    expect(getStreakWeather(1, false)).toBe("storm");
    expect(getStreakWeather(6, false)).toBe("storm");
    expect(getStreakWeather(29, false)).toBe("storm");
    expect(getStreakWeather(100, false)).toBe("storm");
  });

  it("is 'cloudy' for a streak of exactly 0 (nothing at risk, fresh start)", () => {
    expect(getStreakWeather(0, false)).toBe("cloudy");
    expect(getStreakWeather(0, true)).toBe("cloudy");
  });

  it("is 'partlySunny' for 1-6 days, done today", () => {
    expect(getStreakWeather(1, true)).toBe("partlySunny");
    expect(getStreakWeather(6, true)).toBe("partlySunny");
  });

  it("is 'sunny' for 7-29 days, done today", () => {
    expect(getStreakWeather(7, true)).toBe("sunny");
    expect(getStreakWeather(29, true)).toBe("sunny");
  });

  it("is 'rainbow' for 30+ days, done today", () => {
    expect(getStreakWeather(30, true)).toBe("rainbow");
    expect(getStreakWeather(365, true)).toBe("rainbow");
  });
});

describe("getMonthCalendar", () => {
  it("returns the correct number of days for July 2026 (31 days)", () => {
    const days = getMonthCalendar(2026, 6); // 0-indexed: 6 = July
    expect(days).toHaveLength(31);
    expect(days[0].day).toBe(1);
    expect(days[30].day).toBe(31);
  });

  it("marks exactly today as isToday", () => {
    markTodayActive(); // 2026-07-21 per de FIXED_NOW fixture hierboven
    const days = getMonthCalendar(2026, 6);
    const todayEntries = days.filter((d) => d.isToday);
    expect(todayEntries).toHaveLength(1);
    expect(todayEntries[0].date).toBe("2026-07-21");
  });

  it("marks days after today as future, today and earlier as not future", () => {
    const days = getMonthCalendar(2026, 6);
    expect(days.find((d) => d.day === 21)!.isFuture).toBe(false); // vandaag zelf
    expect(days.find((d) => d.day === 22)!.isFuture).toBe(true);
    expect(days.find((d) => d.day === 20)!.isFuture).toBe(false);
  });

  it("reflects marked-active dates within the month, and only those", () => {
    markDateActive("2026-07-05");
    markDateActive("2026-07-12");
    const days = getMonthCalendar(2026, 6);
    expect(days.find((d) => d.day === 5)!.active).toBe(true);
    expect(days.find((d) => d.day === 12)!.active).toBe(true);
    expect(days.find((d) => d.day === 6)!.active).toBe(false);
  });

  it("handles a leap-year February correctly (2028 → 29 days)", () => {
    expect(getMonthCalendar(2028, 1)).toHaveLength(29);
  });

  it("handles a non-leap-year February correctly (2026 → 28 days)", () => {
    expect(getMonthCalendar(2026, 1)).toHaveLength(28);
  });
});

describe("getMonthLeadingBlanks", () => {
  it("with weekStartsOnMonday=false, matches Date.getDay() directly", () => {
    const year = 2026, month = 5;
    const realWeekday = new Date(year, month, 1).getDay();
    expect(getMonthLeadingBlanks(year, month, false)).toBe(realWeekday);
  });

  it("with weekStartsOnMonday=true, Monday-first mapping is correct across every starting weekday", () => {
    // Scant alle 12 maanden van 2026 — dat dekt gegarandeerd elke
    // mogelijke startweekdag minstens 1x, zonder dat we zelf hoeven te
    // weten/onthouden op welke weekdag een specifieke datum valt.
    for (let month = 0; month < 12; month++) {
      const realWeekday = new Date(2026, month, 1).getDay(); // 0=zo..6=za
      const expected = (realWeekday + 6) % 7;                // 0=ma..6=zo
      expect(getMonthLeadingBlanks(2026, month, true)).toBe(expected);
    }
  });
});
