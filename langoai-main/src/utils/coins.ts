// src/utils/coins.ts
// ⚠️ DEPRECATED (superseded — audit #2 follow-up): coins moved server-side.
// See supabase/schema.sql section 8 (earn_coins, buy_heart,
// buy_streak_repair, buy_streak_shield, open_mystery_box, redeem_gift_code)
// — DashboardPage.tsx and ArenaPage.tsx both call those RPCs directly now
// and read the balance from useAuth()'s user.coins, not this file. Kept
// (not deleted) only because coins.test.ts still exercises it in
// isolation; nothing in the app imports from here anymore. Safe to delete
// both files once you're comfortable the RPC-based flow is solid — the old
// localStorage read/write pattern below is what let a client set its own
// balance directly, which is the exact issue that migration closed.
//
// ✅ Zelfstandige, kleine helper voor de Daily Bonus Chest op het Dashboard.
//    ArenaPage.tsx heeft al een eigen (niet-geëxporteerde) addCoins() die
//    dezelfde localStorage-key gebruikt — dit bestand doet exact hetzelfde,
//    veilige read-modify-write, zodat ArenaPage.tsx (2200+ regels, kern-
//    gameplay-logica) niet aangeraakt hoeft te worden. Zelfde key, zelfde
//    vorm, dus coins van de chest verschijnen gewoon in de Shop.

const ARENA_STORAGE_KEY = "langlearn_arena_v3";

interface ArenaProgress {
  completed?: Record<string, number[]>;
  unlocked?: Record<string, number[]>;
  hearts?: number;
  heartsUpdatedAt?: string;
  coins?: number;
}

function readArenaProgress(): ArenaProgress {
  try {
    const raw = localStorage.getItem(ARENA_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ArenaProgress) : { completed: {}, unlocked: {} };
  } catch {
    return { completed: {}, unlocked: {} };
  }
}

function writeArenaProgress(progress: ArenaProgress): void {
  try {
    localStorage.setItem(ARENA_STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // localStorage kan falen (privémodus, vol) — mag de UI niet blokkeren
  }
}

export function getCoins(): number {
  return readArenaProgress().coins ?? 0;
}

/** Telt `amount` coins op bij het bestaande, volledige Progress-object en geeft het nieuwe totaal terug. */
export function addCoins(amount: number): number {
  const progress = readArenaProgress();
  const next = (progress.coins ?? 0) + amount;
  writeArenaProgress({ ...progress, coins: next });
  return next;
}

/** Trekt `amount` coins af als er genoeg saldo is. Geeft false terug (en doet niets) als het saldo te laag is. */
export function spendCoins(amount: number): boolean {
  const progress = readArenaProgress();
  const current = progress.coins ?? 0;
  if (current < amount) return false;
  writeArenaProgress({ ...progress, coins: current - amount });
  return true;
}
