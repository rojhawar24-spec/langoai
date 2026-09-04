// src/utils/xp.test.ts
import { describe, it, expect } from "vitest";
import { computeLevel, xpRequiredForLevel, xpForNextLevel, xpInCurrentLevel } from "./xp";

describe("xpRequiredForLevel", () => {
  it("level 1 requires 0 XP", () => {
    expect(xpRequiredForLevel(1)).toBe(0);
  });

  it("level 2 requires 100 XP", () => {
    expect(xpRequiredForLevel(2)).toBe(100);
  });

  it("level 3 requires 300 XP (triangular growth)", () => {
    expect(xpRequiredForLevel(3)).toBe(300);
  });

  it("is monotonically increasing", () => {
    for (let lvl = 1; lvl < 20; lvl++) {
      expect(xpRequiredForLevel(lvl + 1)).toBeGreaterThan(xpRequiredForLevel(lvl));
    }
  });
});

describe("computeLevel", () => {
  it("0 XP is level 1", () => {
    expect(computeLevel(0)).toBe(1);
  });

  it("99 XP is still level 1 (just under threshold)", () => {
    expect(computeLevel(99)).toBe(1);
  });

  it("100 XP is exactly level 2", () => {
    expect(computeLevel(100)).toBe(2);
  });

  it("299 XP is still level 2", () => {
    expect(computeLevel(299)).toBe(2);
  });

  it("300 XP is exactly level 3", () => {
    expect(computeLevel(300)).toBe(3);
  });

  it("never returns a level below 1, even for negative/odd input", () => {
    expect(computeLevel(0)).toBeGreaterThanOrEqual(1);
  });

  it("is consistent with xpRequiredForLevel for many values", () => {
    for (let xp = 0; xp <= 5000; xp += 37) {
      const level = computeLevel(xp);
      expect(xpRequiredForLevel(level)).toBeLessThanOrEqual(xp);
      expect(xpRequiredForLevel(level + 1)).toBeGreaterThan(xp);
    }
  });
});

describe("xpForNextLevel / xpInCurrentLevel", () => {
  it("xpForNextLevel scales with level", () => {
    expect(xpForNextLevel(1)).toBe(100);
    expect(xpForNextLevel(5)).toBe(500);
  });

  it("xpInCurrentLevel returns progress within the current level", () => {
    // Level 2 starts at 100 XP; at 150 XP total, 50 XP into level 2.
    expect(xpInCurrentLevel(150, 2)).toBe(50);
  });

  it("xpInCurrentLevel is 0 right at a level boundary", () => {
    expect(xpInCurrentLevel(300, 3)).toBe(0);
  });
});
