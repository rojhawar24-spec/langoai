// src/utils/storage.ts
// ✅ DEFINITIEF CORRECT:
//    - UserData blijft camelCase (totalXP, currentLanguage...) → rest van app werkt ongewijzigd
//    - getCurrentUser() leest uit memory cache (niet localStorage) → werkt met Supabase
//    - rowToUser() vertaalt Supabase snake_case → camelCase
//    - userToRow() vertaalt camelCase → Supabase snake_case
//    - Registratie: upsert + fallback select (geen 409 als trigger al een profiel maakte)

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
  coins: number;
  streakFreezes: number;
}

// ── Memory cache — wordt bijgehouden door AuthContext ────────────────────
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
    id: row.id,
    email: row.email,
    username: row.username,
    currentLanguage: row.current_language,
    totalXP: row.total_xp,
    level: row.level,
    streak: row.streak,
    lastActivityDate: row.last_activity_date,
    theme: row.theme,
    interfaceLanguage: row.interface_language,
    createdAt: row.created_at,
    coins: row.coins ?? 0,
    streakFreezes: row.streak_freezes ?? 0,
  };
}

// ── Vertaling: UserData (camelCase) → Supabase (snake_case) ─────────────
export function userToRow(updates: Partial<UserData>): Partial<ProfileRow> {
  const row: Partial<ProfileRow> = {};
  if (updates.currentLanguage !== undefined) row.current_language = updates.currentLanguage;
  if (updates.theme !== undefined) row.theme = updates.theme;
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
  const { data: isAvailable, error: availError } = await (supabase as any).rpc(
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
  const appOrigin =
    (typeof window !== "undefined" && window.location?.origin) ||
    (import.meta as any).env?.VITE_APP_ORIGIN ||
    "https://langoaiapp.vercel.app";
  const emailRedirectTo = `${appOrigin}/auth/callback?request_id=${encodeURIComponent(verificationRequestId)}`;

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

  // Geen sessie = e-mailbevestiging verplicht
  if (!authData.session) {
    throw new Error(`email_confirmation_required:${verificationRequestId}`);
  }

  // FIX 409: trigger handle_new_user kan het profiel al hebben aangemaakt
  let { data: profile, error: profileError } = await (supabase as any)
    .from("profiles")
    .upsert(
      {
        id: authData.user.id,
        username: data.username,
        email: data.email.toLowerCase(),
        current_language: data.currentLanguage,
        total_xp: 0,
        level: 1,
        streak: 0,
        last_activity_date: null,
        theme: data.theme,
        interface_language: data.interfaceLanguage,
      },
      { onConflict: "id" }
    )
    .select()
    .single();

  // Fallback: als upsert toch faalt, bestaand profiel laden
  if (profileError || !profile) {
    const existing = await (supabase as any)
      .from("profiles")
      .select("*")
      .eq("id", authData.user.id)
      .single();

    if (existing.data) {
      profile = existing.data;
      profileError = null;
    }
  }

  if (profileError || !profile) {
    console.error("Profiel aanmaken mislukt:", profileError?.message);

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

    const isDuplicateUsername =
      profileError?.message?.toLowerCase().includes("username") ||
      profileError?.code === "23505";
    throw new Error(isDuplicateUsername ? "username_taken" : "profile_creation_failed");
  }

  const user = rowToUser(profile);
  setCurrentUser(user);
  return user;
}

// ── LOGIN ────────────────────────────────────────────────────────────────

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
    return { allowed: true };
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

  const guard = await callAuthGuard("check", trimmedIdentifier);
  if (guard.allowed === false) {
    const err = new Error("rate_limited") as Error & { retryAfterSeconds?: number };
    err.retryAfterSeconds = guard.retryAfterSeconds;
    throw err;
  }

  let email = trimmedIdentifier;

  if (!email.includes("@")) {
    const { data: foundEmail, error: rpcError } = await (supabase as any).rpc(
      "get_email_by_username",
      { lookup_username: email }
    );

    if (rpcError || !foundEmail) {
      await callAuthGuard("fail", trimmedIdentifier);
      throw new Error("invalid_credentials");
    }
    email = foundEmail as string;
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.user) {
    await callAuthGuard("fail", trimmedIdentifier);
    throw new Error("invalid_credentials");
  }

  const { data: aal } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();

  if (aal && aal.nextLevel === "aal2" && aal.currentLevel !== "aal2") {
    const { data: factors } = await supabase.auth.mfa.listFactors();
    const totpFactor = factors?.totp?.[0];
    if (!totpFactor) {
      throw new Error("mfa_error");
    }
    return { status: "mfa_required", factorId: totpFactor.id };
  }

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

// ── 2FA ──────────────────────────────────────────────────────────────────
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

  const {
    data: { user: authUser },
  } = await supabase.auth.getUser();
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
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session?.user) return null;

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
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session?.user) throw new Error("not_authenticated");

  const { data, error } = await (supabase as any)
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