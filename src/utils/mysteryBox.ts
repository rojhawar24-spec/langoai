// src/utils/mysteryBox.ts
// ⚠️ DEPRECATED (superseded — audit #2 follow-up): the roll itself moved
// server-side too, not just the coin spend that pays for it — see
// open_mystery_box() in supabase/schema.sql section 8, which ports this
// exact probability table into SQL (verified decision-identical across a
// fine-grained sweep of the roll range, plus a 1M-trial Monte Carlo check
// of the resulting distribution). If the roll had stayed client-side while
// only the coin spend became server-verified, a real spend could still be
// paired with a client-reported "I won the jackpot" that never happened —
// coins-in-then-arbitrary-coins-out. ArenaPage.tsx no longer imports from
// this file. Kept as a readable reference for the probability table itself
// (see the SQL for the authoritative version).
//
// ✅ Pure, testbare reward-logica voor de Mystery Box shop-item. Los van
// ArenaPage.tsx gehouden (2200+ regels kern-gameplay) zodat dit apart en
// met exacte kansen getest kan worden — geen giswerk over de randomness.

export type MysteryPrize =
  | { type: "coins"; amount: number }
  | { type: "shield" };

/**
 * Bepaalt de prijs voor 1 Mystery Box-opening.
 *
 * Kansverdeling (moet optellen tot 1.0):
 *   40% → 5 coins        (klein, vaak)
 *   25% → 12 coins       (ongeveer quitte met de kostprijs)
 *   20% → 25 coins       (goede winst)
 *   10% → gratis Shield  (of 15 coins als er al een Shield actief is)
 *    5% → 50 coins       (jackpot)
 *
 * `roll` is optioneel injecteerbaar (0..1) zodat dit exact getest kan
 * worden zonder afhankelijk te zijn van echte randomness.
 */
export function rollMysteryPrize(hasShieldAlready: boolean, roll: number = Math.random()): MysteryPrize {
  if (roll < 0.40) return { type: "coins", amount: 5 };
  if (roll < 0.65) return { type: "coins", amount: 12 };
  if (roll < 0.85) return { type: "coins", amount: 25 };
  if (roll < 0.95) {
    // Een tweede Shield heeft geen zin (het is een aan/uit-vlag, geen
    // stapelbaar aantal) — geef dan coins van vergelijkbare waarde i.p.v.
    // een "gewonnen" prijs die feitelijk niets doet.
    return hasShieldAlready ? { type: "coins", amount: 15 } : { type: "shield" };
  }
  return { type: "coins", amount: 50 };
}
