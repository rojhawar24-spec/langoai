// src/utils/giftCode.test.ts
import { describe, it, expect } from "vitest";
import {
  generateGiftCode,
  parseGiftCode,
  isGiftCodeUsed,
  markGiftCodeUsed,
} from "./giftCode";

describe("generateGiftCode + parseGiftCode round-trip", () => {
  it("round-trips a coins gift correctly", () => {
    const code = generateGiftCode({ type: "coins", amount: 20 });
    expect(parseGiftCode(code)).toEqual({ type: "coins", amount: 20 });
  });

  it("round-trips a shield gift correctly", () => {
    const code = generateGiftCode({ type: "shield" });
    expect(parseGiftCode(code)).toEqual({ type: "shield" });
  });

  it("codes have the expected LANGO-...-.. shape", () => {
    const code = generateGiftCode({ type: "coins", amount: 10 });
    expect(code).toMatch(/^LANGO-[A-Za-z0-9+/]+-[a-z0-9]{2}$/);
  });
});

describe("parseGiftCode — rejects invalid input", () => {
  it("rejects a completely malformed string", () => {
    expect(parseGiftCode("not-a-real-code")).toBeNull();
    expect(parseGiftCode("")).toBeNull();
    expect(parseGiftCode("LANGO--")).toBeNull();
  });

  it("rejects a tampered code (checksum no longer matches)", () => {
    const code = generateGiftCode({ type: "coins", amount: 20 });
    // Verander 1 teken in het gecodeerde deel — checksum klopt dan niet meer
    const tampered = code.replace(/^(LANGO-.)(.)/, (_m, a, b) => a + (b === "A" ? "B" : "A"));
    expect(tampered).not.toBe(code);
    expect(parseGiftCode(tampered)).toBeNull();
  });

  it("rejects a coins amount above the cap, even with a valid checksum", () => {
    // We bouwen zelf een geldig-ondertekende code met een te hoog bedrag,
    // om te bewijzen dat de cap losstaat van de checksum-check.
    const oversized = generateGiftCode({ type: "coins", amount: 999999 });
    expect(parseGiftCode(oversized)).toBeNull();
  });

  it("rejects a zero or negative coins amount", () => {
    expect(parseGiftCode(generateGiftCode({ type: "coins", amount: 0 }))).toBeNull();
    expect(parseGiftCode(generateGiftCode({ type: "coins", amount: -5 }))).toBeNull();
  });
});

describe("gift code used-tracking", () => {
  it("is not used before being marked", () => {
    const code = generateGiftCode({ type: "coins", amount: 5 });
    expect(isGiftCodeUsed(code)).toBe(false);
  });

  it("is used after being marked, and only that exact code", () => {
    const codeA = generateGiftCode({ type: "coins", amount: 5 });
    const codeB = generateGiftCode({ type: "coins", amount: 10 });
    markGiftCodeUsed(codeA);
    expect(isGiftCodeUsed(codeA)).toBe(true);
    expect(isGiftCodeUsed(codeB)).toBe(false);
  });
});
