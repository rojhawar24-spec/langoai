// src/utils/giftCode.ts
// ⚠️ DEPRECATED (superseded — audit #2/#3 follow-up): replaced by real,
// server-registered gift codes (supabase/schema.sql: create_gift_code /
// redeem_gift_code). DashboardPage.tsx no longer imports from this file.
//
// Why this specifically had to change, not just coins in general: this
// file's whole design was a code that CARRIES its payload (base64 +
// checksum) so redemption never needed a server round-trip — which also
// meant anyone reading the client bundle could hand-craft a valid-looking
// code for any amount, entirely bypassing the "spend coins to create a
// gift" step. Once coin SPENDING became server-verified elsewhere, that
// made gift redemption the one remaining way to mint coins for free.
// Kept (not deleted) as a reference for the encoding trick, not because
// anything still uses it.
//
// ✅ NIEUW — "Gifts" uit de lijst. Er bestaat nergens een manier om iets
// naar een andere gebruiker te sturen (geen vriendenlijst, geen berichten
// tussen accounts) — dat volledig bouwen is een te grote, te onzekere
// stap in 1 keer. Dit is een kleinere, veilige tussenvorm: de code zelf
// draagt het cadeau (bedrag + type, base64 + checksum, geen server nodig).
// Bewust laag ingezet qua bedragen — dit is virtuele coins zonder echte
// waarde erachter, dus "veiligheid" hier gaat over nette werking, niet
// over fraudebestendigheid zoals bij echte betalingen.

export interface GiftPayload {
  type: "coins" | "shield";
  amount?: number; // alleen voor coins
}

const MAX_GIFT_COINS = 50; // gelijk aan de Mystery Box-jackpot — geen enkel cadeau mag daar overheen gaan
const USED_CODES_KEY = "langlearn_used_gift_codes";
const USED_CODES_CAP = 200; // voorkomt dat deze lijst onbeperkt blijft groeien

function checksum(s: string): string {
  let sum = 0;
  for (let i = 0; i < s.length; i++) sum = (sum + s.charCodeAt(i) * (i + 1)) % 97;
  return sum.toString(36).padStart(2, "0");
}

/** Maakt een deelbare code voor 1 cadeau. Geen server nodig — de code IS het cadeau. */
export function generateGiftCode(payload: GiftPayload): string {
  const json = JSON.stringify(payload);
  const encoded = btoa(json).replace(/=+$/, "");
  return `LANGO-${encoded}-${checksum(encoded)}`;
}

/** Decodeert en valideert een code. Geeft null bij elke vorm van ongeldige/beschadigde input. */
export function parseGiftCode(code: string): GiftPayload | null {
  const trimmed = code.trim();
  const m = trimmed.match(/^LANGO-([A-Za-z0-9+/]+)-([a-z0-9]{2})$/);
  if (!m) return null;
  const [, encoded, check] = m;
  if (checksum(encoded) !== check) return null;

  let payload: GiftPayload;
  try {
    payload = JSON.parse(atob(encoded)) as GiftPayload;
  } catch {
    return null;
  }

  if (payload.type === "shield") return { type: "shield" };
  if (payload.type === "coins") {
    const amount = payload.amount;
    if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0 || amount > MAX_GIFT_COINS) {
      return null;
    }
    return { type: "coins", amount };
  }
  return null;
}

function readUsedCodes(): string[] {
  try {
    return JSON.parse(localStorage.getItem(USED_CODES_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function isGiftCodeUsed(code: string): boolean {
  return readUsedCodes().includes(code.trim());
}

export function markGiftCodeUsed(code: string): void {
  const used = readUsedCodes();
  used.push(code.trim());
  try {
    localStorage.setItem(USED_CODES_KEY, JSON.stringify(used.slice(-USED_CODES_CAP)));
  } catch {
    // niet kritiek — in het ergste geval kan dezelfde code nog eens ingewisseld worden
  }
}
