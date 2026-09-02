import { describe, it, expect } from "vitest";
import { formatPremiumExpiry, isPremiumActive } from "./apiConfig";

function futureDate(days = 30): string {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
}

function pastDate(days = 1): string {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}

describe("isPremiumActive", () => {
  it("is false without a user", () => {
    expect(isPremiumActive()).toBe(false);
    expect(isPremiumActive(null)).toBe(false);
  });

  it("is true for an active premium user", () => {
    expect(isPremiumActive({ premium: true, premiumExpiresAt: futureDate() })).toBe(true);
  });

  it("is false when premium is disabled", () => {
    expect(isPremiumActive({ premium: false, premiumExpiresAt: futureDate() })).toBe(false);
  });

  it("is false when premium has expired", () => {
    expect(isPremiumActive({ premium: true, premiumExpiresAt: pastDate() })).toBe(false);
  });

  it("is false without an expiry date", () => {
    expect(isPremiumActive({ premium: true, premiumExpiresAt: null })).toBe(false);
  });
});

describe("formatPremiumExpiry", () => {
  it("returns an empty string for null or undefined", () => {
    expect(formatPremiumExpiry(null)).toBe("");
    expect(formatPremiumExpiry(undefined)).toBe("");
  });

  it("formats a real date so the year is visible", () => {
    expect(formatPremiumExpiry("2026-12-25T00:00:00.000Z")).toContain("2026");
  });
});
