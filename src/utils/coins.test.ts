// src/utils/coins.test.ts
import { describe, it, expect } from "vitest";
import { getCoins, addCoins, spendCoins } from "./coins";

const ARENA_STORAGE_KEY = "langlearn_arena_v3";

describe("getCoins", () => {
  it("is 0 when nothing is stored yet", () => {
    expect(getCoins()).toBe(0);
  });

  it("reads back an existing coins value", () => {
    localStorage.setItem(ARENA_STORAGE_KEY, JSON.stringify({ completed: {}, unlocked: {}, coins: 42 }));
    expect(getCoins()).toBe(42);
  });
});

describe("addCoins", () => {
  it("starts from 0 and returns the new total", () => {
    expect(addCoins(8)).toBe(8);
    expect(getCoins()).toBe(8);
  });

  it("accumulates across multiple calls", () => {
    addCoins(8);
    addCoins(5);
    expect(getCoins()).toBe(13);
  });

  it("REGRESSION: never destroys existing lesson progress (completed/unlocked/hearts)", () => {
    // Dit is de kritieke garantie: de Daily Chest mag nooit iemands
    // les-voortgang wissen, alleen coins optellen bij het bestaande object.
    const existing = {
      completed: { "nl-1": [1, 2, 3] },
      unlocked: { "nl-1": [1, 2, 3, 4] },
      hearts: 3,
      heartsUpdatedAt: "2026-07-30T10:00:00.000Z",
      coins: 20,
    };
    localStorage.setItem(ARENA_STORAGE_KEY, JSON.stringify(existing));

    const newTotal = addCoins(8);

    expect(newTotal).toBe(28);
    const stored = JSON.parse(localStorage.getItem(ARENA_STORAGE_KEY) as string);
    expect(stored.completed).toEqual({ "nl-1": [1, 2, 3] });
    expect(stored.unlocked).toEqual({ "nl-1": [1, 2, 3, 4] });
    expect(stored.hearts).toBe(3);
    expect(stored.heartsUpdatedAt).toBe("2026-07-30T10:00:00.000Z");
    expect(stored.coins).toBe(28);
  });
});

describe("spendCoins", () => {
  it("refuses to spend more than the current balance and leaves it unchanged", () => {
    addCoins(10);
    expect(spendCoins(20)).toBe(false);
    expect(getCoins()).toBe(10);
  });

  it("deducts the amount and returns true when the balance is sufficient", () => {
    addCoins(20);
    expect(spendCoins(8)).toBe(true);
    expect(getCoins()).toBe(12);
  });

  it("allows spending down to exactly 0", () => {
    addCoins(10);
    expect(spendCoins(10)).toBe(true);
    expect(getCoins()).toBe(0);
  });
});
