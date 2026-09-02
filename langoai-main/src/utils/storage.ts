// src/utils/storage.ts
// ✅ DEFINITIEF CORRECT:
//    - UserData blijft camelCase (totalXP, currentLanguage...) → rest van app werkt ongewijzigd
//    - getCurrentUser() leest uit memory cache (niet localStorage) → werkt met Supabase
//    - rowToUser() vertaalt Supabase snake_case → camelCase
//    - userToRow() vertaalt camelCase → Supabase snake_case

import { supabase } from "@/lib/supabase";
import type { ProfileRow } from "@/lib/supabase";

// ── UserData interface (camelCase — ongewijzigd voor de rest van de app) ──
export interface UserData {
  id: string;
  email: string;
  username: string;
  currentLanguage: string | null;
  totalXP: number;
  level: number;
  streak: number;
  lastActivityDate: string | null;
  theme: "light" | "dark";
  interfaceLanguage: string;
  createdAt: string;
  // 🔒 Server-authoritative coin economy (audit #2 follow-up — see
  // supabase/schema.sql section 8). Like totalXP/level/streak, these are
  // NEVER written via userToRow()/a raw column update — only through the
  // dedicated RPCs (earn_coins, buy_heart, buy_streak_repair,
  // buy_streak_shield, open_mystery_box, redeem_gift_code), called
  // directly from the pages that need them, followed by refreshUser().
  coins: number;
  streakFreezes: number;
}

// ── Memory cache — wordt bijgehouden door AuthContext ────────────────────
// createXPAwarder() (oud: 1 parameter) leest hieruit ipv localStorage
let _userCache: UserData | null = null;

export function getCurrentUser(): UserData | null {
  return _userCache;
}

export function setCurrentUser(user: UserData | null): void {
  _userCache = user;
}

// ── Vertaling: Supabase (snake_case) → UserData (camelCase) ─────────────
export function rowToUser(row: ProfileRow): UserData {
  return {
    id:               row.id,
    email:            row.email,
    username:         row.username,
    currentLanguage:  row.current_language,
    totalXP:          row.total_xp,
    level:            row.level,
    streak:           row.streak,
    lastActivityDate: row.last_activity_date,
    theme:            row.theme,
    interfaceLanguage: row.interface_language,
    createdAt:        row.created_at,
    coins:            row.coins ?? 0,
    streakFreezes:    row.streak_freezes ?? 0,
  };
}

// ── Vertaling: UserData (camelCase) → Supabase (snake_case) ─────────────
export function userToRow(updates: Partial<UserData>): Partial<ProfileRow> {
  const row: Partial<ProfileRow> = {};
  if (updates.currentLanguage  !== undefined) row.current_language   = updates.currentLanguage;
  if (updates.theme            !== undefined) row.theme              = updates.theme;
  if (updates.interfaceLanguage !== undefined) row.interface_language = updates.interfaceLanguage;
  return row;
}

// ── REGISTRATIE ──────────────────────────────────────────────────────────
export async function apiRegister(data: {
  email: string;
  username: string;
  password: string;
  currentLanguage: string | null;
  theme: "light" | "dark";
  interfaceLanguage: string;
}): Promise<UserData> {
  // ── Stap 1: username-beschikbaarheid via veilige RPC ───────────────────
  // (rechtstreekse .select() op profiles gaf altijd "beschikbaar" terug
  // door RLS — deze check werkte dus nooit echt. Nu wel.)
  const { data: isAvailable, error: availError } = await supabase.rpc(
    "username_available",
    { check_username: data.username }
  );

  if (availError) throw new Error("register_failed");
  if (isAvailable === false) throw new Error("username_taken");

  const startResponse = await fetch("/api/verification-start", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: data.email.toLowerCase() }),
  });
  const startData = await startResponse.json().catch(() => ({}));
  if (!startResponse.ok || !startData.requestId) {
    throw new Error("register_failed");
  }

  const verificationRequestId = String(startData.requestId);
  const emailRedirectTo = `https://langoaiapp.vercel.app/auth/callback?request_id=${encodeURIComponent(verificationRequestId)}`;

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      emailRedirectTo,
      data: {
        username: data.username,
        currentLanguage: data.currentLanguage,
        theme: data.theme,
        interfaceLanguage: data.interfaceLanguage,
      },
    },
  });

  if (authError) {
    const msg = authError.message.toLowerCase();
    if (msg.includes("already") || msg.includes("registered")) {
      throw new Error("email_taken");
    }
    throw new Error("register_failed");
  }

  if (!authData.user) throw new Error("register_failed");

  // ✅ FIX (audit — "pretend to be a new user" review): als e-mailbevestiging
  // ooit aanstaat in Supabase (de standaardinstelling voor nieuwe projecten!),
  // geeft signUp() geen actieve sessie terug. Zonder deze check zou de
  // profiel-insert hieronder stilletjes falen op RLS (geen auth.uid()
  // beschikbaar) en zag de nieuwe gebruiker alleen een verwarrende generieke
  // foutmelding, zonder te weten dat ze eerst hun e-mail moeten bevestigen.
  if (!authData.session) {
    throw new Error(`email_confirmation_required:${verificationRequestId}`);
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .insert({
      id:                authData.user.id,
      username:          data.username,
      email:             data.email.toLowerCase(),
      current_language:  data.currentLanguage,
      total_xp:          0,
      level:             1,
      streak:            0,
      last_activity_date: null,
      theme:             data.theme,
      interface_language: data.interfaceLanguage,
    })
    .select()
    .single();

  if (profileError || !profile) {
    console.error("Profiel aanmaken mislukt:", profileError?.message);

    // ── Opruimen: voorkom een "spook-account" (auth-user zonder profiel) ──
    // Op dit punt is de gebruiker al ingelogd (signUp gaf een sessie),
    // dus we kunnen onze eigen delete-account API aanroepen om het
    // net aangemaakte auth-account weer te verwijderen. Lukt dat niet,
    // dan loggen we het duidelijk zodat het handmatig opgelost kan worden.
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const token = sessionData.session?.access_token;
      if (token) {
        await fetch("/api/delete-account", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
      }
      await supabase.auth.signOut();
    } catch (cleanupErr) {
      console.error("Opruimen van mislukt account is ook mislukt:", cleanupErr);
    }

    // Duidelijke foutmelding: was het een dubbele username (race condition,
    // iemand registreerde tegelijk dezelfde naam) of iets anders?
    const isDuplicateUsername =
      profileError?.message?.toLowerCase().includes("username") ||
      profileError?.code === "23505"; // Postgres unique_violation
    throw new Error(isDuplicateUsername ? "username_taken" : "profile_creation_failed");
  }

  const user = rowToUser(profile);
  setCurrentUser(user);
  return user;
}

// ── LOGIN ────────────────────────────────────────────────────────────────

// Helper: praat met de brute-force guard (api/auth-guard.js).
// Faalt de aanroep zelf (netwerk, etc.) dan blokkeren we NIET de login —
// dit is enkel een extra beveiligingslaag, geen single point of failure.
async function callAuthGuard(
  action: "check" | "fail" | "reset",
  identifier: string
): Promise<{ allowed?: boolean; retryAfterSeconds?: number }> {
  try {
    const res = await fetch("/api/auth-guard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, identifier }),
    });

    if (res.status === 429) {
      const data = await res.json().catch(() => ({}));
      return { allowed: false, retryAfterSeconds: data.retryAfterSeconds };
    }

    return { allowed: true };
  } catch {
    return { allowed: true }; // fail-open
  }
}

export type LoginResult =
  | { status: "ok"; user: UserData }
  | { status: "mfa_required"; factorId: string };

export async function apiLogin(
  identifier: string,
  password: string
): Promise<LoginResult> {
  const trimmedIdentifier = identifier.trim();

  // ── Stap 1: brute-force check (vóór elke poging) ──────────────────────
  const guard = await callAuthGuard("check", trimmedIdentifier);
  if (guard.allowed === false) {
    const err = new Error("rate_limited") as Error & { retryAfterSeconds?: number };
    err.retryAfterSeconds = guard.retryAfterSeconds;
    throw err;
  }

  let email = trimmedIdentifier;

  // ── Stap 2: username → email, via veilige RPC (niet rechtstreeks tabel) ─
  if (!email.includes("@")) {
    const { data: foundEmail, error: rpcError } = await supabase.rpc(
      "get_email_by_username",
      { lookup_username: email }
    );

    if (rpcError || !foundEmail) {
      await callAuthGuard("fail", trimmedIdentifier);
      throw new Error("invalid_credentials");
    }
    email = foundEmail as string;
  }

  // ── Stap 3: eigenlijke login ───────────────────────────────────────────
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.user) {
    await callAuthGuard("fail", trimmedIdentifier);
    throw new Error("invalid_credentials");
  }

  // ── Stap 4: 2FA-check (optioneel per gebruiker) ─────────────────────────
  // ⚠️ BELANGRIJK: signInWithPassword geeft al een sessie terug (aal1),
  // ook als de gebruiker TOTP heeft ingeschakeld. Zonder deze check zou
  // 2FA dus volledig te omzeilen zijn — wachtwoord alleen zou al genoeg
  // zijn. We controleren daarom expliciet het assurance-level en laten
  // pas na een correcte code de echte login doorgaan.
  const { data: aal } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();

  if (aal && aal.nextLevel === "aal2" && aal.currentLevel !== "aal2") {
    const { data: factors } = await supabase.auth.mfa.listFactors();
    const totpFactor = factors?.totp?.[0];
    if (!totpFactor) {
      throw new Error("mfa_error");
    }
    // Do NOT reset auth-guard yet — MFA is not complete. Wrong codes still count.
    return { status: "mfa_required", factorId: totpFactor.id };
  }

  // Succesvolle login (geen 2FA nodig) → teller resetten + audit log
  await callAuthGuard("reset", trimmedIdentifier);

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", data.user.id)
    .single();

  if (!profile) throw new Error("profile_not_found");

  const user = rowToUser(profile);
  setCurrentUser(user);
  return { status: "ok", user };
}

// ── 2FA: CODE VERIFIËREN NA "mfa_required" ────────────────────────────────
// 🔒 FIX (found while re-checking MFA end-to-end): apiLogin() above rate-
// limits the PASSWORD step via auth-guard, but this function — the actual
// 2FA code check — had NO rate limiting of its own. Someone who already
// has (or obtained elsewhere) a valid password could try codes in an
// unthrottled loop. TOTP's 30-second rotation limits how many codes are
// ever simultaneously valid, but that's not a substitute for actually
// throttling attempts — it's exactly the kind of thing 2FA is supposed to
// add protection against, and every serious TOTP implementation rate-
// limits verification separately from the time-window itself. Reuses the
// exact same auth-guard mechanism and (IP + identifier) key already used
// for the password step, so a correct password resets the counter once,
// and wrong 2FA codes count against that same fresh budget.
export async function apiVerifyMfaLogin(
  factorId: string,
  code: string,
  identifier: string
): Promise<UserData> {
  const guard = await callAuthGuard("check", identifier);
  if (guard.allowed === false) {
    const err = new Error("rate_limited") as Error & { retryAfterSeconds?: number };
    err.retryAfterSeconds = guard.retryAfterSeconds;
    throw err;
  }

  const { data: challenge, error: challengeError } =
    await supabase.auth.mfa.challenge({ factorId });

  if (challengeError || !challenge) {
    await callAuthGuard("fail", identifier);
    throw new Error("mfa_invalid_code");
  }

  const { data: verifyData, error: verifyError } = await supabase.auth.mfa.verify({
    factorId,
    challengeId: challenge.id,
    code: code.trim(),
  });

  if (verifyError || !verifyData) {
    await callAuthGuard("fail", identifier);
    throw new Error("mfa_invalid_code");
  }

  await callAuthGuard("reset", identifier);

  const { data: { user: authUser } } = await supabase.auth.getUser();
  if (!authUser) throw new Error("mfa_invalid_code");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", authUser.id)
    .single();

  if (!profile) throw new Error("profile_not_found");

  const user = rowToUser(profile);
  setCurrentUser(user);
  return user;
}

// ── UITLOGGEN ────────────────────────────────────────────────────────────
export async function apiLogout(): Promise<void> {
  setCurrentUser(null);
  await supabase.auth.signOut();
}

// ── SESSIE OPHALEN ───────────────────────────────────────────────────────
export async function apiGetMe(): Promise<UserData | null> {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user) return null;

  // ⚠️ Zelfde 2FA-gate als bij login: een sessie die nog geen aal2 heeft
  // (bv. pagina ververst vlak vóór de code werd ingevoerd) telt niet als
  // ingelogd. Gebruiker moet opnieuw via /login met de 2FA-stap.
  const { data: aal } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
  if (aal && aal.nextLevel === "aal2" && aal.currentLevel !== "aal2") {
    return null;
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", session.user.id)
    .single();

  if (!profile) return null;
  const user = rowToUser(profile);
  setCurrentUser(user);
  return user;
}


// ── PROFIEL UPDATEN ──────────────────────────────────────────────────────
export async function apiUpdateUser(
  updates: Partial<UserData>
): Promise<UserData> {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user) throw new Error("not_authenticated");

  const { data, error } = await supabase
    .from("profiles")
    .update(userToRow(updates))
    .eq("id", session.user.id)
    .select()
    .single();

  if (error || !data) throw new Error("update_failed");

  const user = rowToUser(data);
  setCurrentUser(user);
  return user;
}
