// src/utils/mysteryBox.test.ts
import { describe, it, expect } from "vitest";
import { rollMysteryPrize } from "./mysteryBox";

describe("rollMysteryPrize — exact probability boundaries", () => {
  it("0 to just under 0.40 → 5 coins", () => {
    expect(rollMysteryPrize(false, 0)).toEqual({ type: "coins", amount: 5 });
    expect(rollMysteryPrize(false, 0.399)).toEqual({ type: "coins", amount: 5 });
  });

  it("0.40 to just under 0.65 → 12 coins", () => {
    expect(rollMysteryPrize(false, 0.4)).toEqual({ type: "coins", amount: 12 });
    expect(rollMysteryPrize(false, 0.649)).toEqual({ type: "coins", amount: 12 });
  });

  it("0.65 to just under 0.85 → 25 coins", () => {
    expect(rollMysteryPrize(false, 0.65)).toEqual({ type: "coins", amount: 25 });
    expect(rollMysteryPrize(false, 0.849)).toEqual({ type: "coins", amount: 25 });
  });

  it("0.85 to just under 0.95 → shield, unless one is already active", () => {
    expect(rollMysteryPrize(false, 0.85)).toEqual({ type: "shield" });
    expect(rollMysteryPrize(false, 0.949)).toEqual({ type: "shield" });
    // Already has a shield → a second one would be a no-op, so coins instead
    expect(rollMysteryPrize(true, 0.85)).toEqual({ type: "coins", amount: 15 });
    expect(rollMysteryPrize(true, 0.949)).toEqual({ type: "coins", amount: 15 });
  });

  it("0.95 to 1 → jackpot, 50 coins", () => {
    expect(rollMysteryPrize(false, 0.95)).toEqual({ type: "coins", amount: 50 });
    expect(rollMysteryPrize(false, 0.999)).toEqual({ type: "coins", amount: 50 });
  });

  it("defaults to Math.random() when no roll is given (smoke test — always a valid prize)", () => {
    const prize = rollMysteryPrize(false);
    const validShapes = [5, 12, 15, 25, 50];
    if (prize.type === "coins") {
      expect(validShapes).toContain(prize.amount);
    } else {
      expect(prize.type).toBe("shield");
    }
  });
});
