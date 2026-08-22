// src/utils/apiConfig.test.ts
import { describe, it, expect } from "vitest";
import {
  isPaymentVerified,
  isPremiumActive,
  saveAccessToken,
  getAccessToken,
  formatPremiumExpiry,
} from "./apiConfig";

function futureDate(days = 30): string {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
}
function pastDate(days = 1): string {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}

describe("isPaymentVerified (localStorage-only check, used when no user is logged in)", () => {
  it("is false when nothing is stored", () => {
    expect(isPaymentVerified()).toBe(false);
  });

  it("is true when a token with a future expiry is stored", () => {
    saveAccessToken("tok123", futureDate());
    expect(isPaymentVerified()).toBe(true);
  });

  it("is false and clears the token once the expiry is in the past", () => {
    saveAccessToken("tok123", pastDate());
    expect(isPaymentVerified()).toBe(false);
    expect(getAccessToken()).toBeNull();
  });
});

describe("isPremiumActive (server-profile-first check, used for real users)", () => {
  it("is false with no user and nothing in localStorage", () => {
    expect(isPremiumActive()).toBe(false);
    expect(isPremiumActive(null)).toBe(false);
  });

  it("is true when the user object has a future premiumExpiresAt", () => {
    expect(isPremiumActive({ premium: true, premiumExpiresAt: futureDate() })).toBe(true);
  });

  it("is false when the user object has a past premiumExpiresAt", () => {
    expect(isPremiumActive({ premium: false, premiumExpiresAt: pastDate() })).toBe(false);
  });

  it("REGRESSION: a normal non-premium user (premiumExpiresAt: null) can never be spoofed via a fake localStorage value", () => {
    // premiumExpiresAt: null is the default for every account today. Someone
    // opening devtools and setting a fake future date in localStorage must
    // NOT be able to make a real, logged-in, non-premium user look premium.
    saveAccessToken("fake-token-from-devtools", futureDate(365));
    expect(isPremiumActive({ premium: false, premiumExpiresAt: null })).toBe(false);
  });

  it("only falls back to localStorage when no user object is passed at all", () => {
    saveAccessToken("tok", futureDate());
    expect(isPremiumActive()).toBe(true);
    expect(isPremiumActive(undefined)).toBe(true);
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
