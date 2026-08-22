// src/contexts/AuthContext.tsx
// ✅ DEFINITIEF CORRECT:
//    - Importeert UserData (camelCase) uit storage.ts
//    - Houdt memory cache bij via setCurrentUser()
//    - createXPAwarder(updateProfile) werkt hierdoor ongewijzigd in alle 5 pagina's

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { supabase } from "@/lib/supabase";
import {
  type UserData,
  rowToUser,
  userToRow,
  setCurrentUser,
  apiGetMe,
  apiLogout,
  apiUpdateUser,
} from "@/utils/storage";

interface AuthContextType {
  user: UserData | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: UserData) => void;
  logout: () => void;
  refreshUser: () => void;
  updateProfile: (updates: Partial<UserData>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Controleer sessie bij opstarten
    apiGetMe().then((u) => {
      setUser(u);
      setIsLoading(false);
    });

    // Luister naar login/logout events van Supabase
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event: string, session: any) => {
        if (session?.user) {
          // ⚠️ 2FA-GATE: als deze gebruiker TOTP heeft ingeschakeld en de
          // sessie nog geen aal2 heeft bereikt, NIET inloggen. Anders zou
          // deze listener de 2FA-check in apiLogin() volledig omzeilen —
          // elke sessie (ook meteen na een correct wachtwoord, vóór de
          // code is ingevoerd) zou anders al als "ingelogd" gelden.
          const { data: aal } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
          if (aal && aal.nextLevel === "aal2" && aal.currentLevel !== "aal2") {
            return; // Wacht tot de 2FA-code geverifieerd is (zie LoginPage)
          }

          const { data: profile } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", session.user.id)
            .single();

          if (profile) {
            const userData = rowToUser(profile);
            setCurrentUser(userData); // ✅ Update memory cache
            setUser(userData);
          }
        } else {
          setCurrentUser(null); // ✅ Clear memory cache
          setUser(null);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const login = useCallback((userData: UserData) => {
    setCurrentUser(userData); // ✅ Update memory cache
    setUser(userData);
  }, []);

  const logout = useCallback(async () => {
    await apiLogout(); // apiLogout roept ook setCurrentUser(null) aan
    setUser(null);
  }, []);

  const refreshUser = useCallback(async () => {
    const u = await apiGetMe(); // apiGetMe roept ook setCurrentUser() aan
    setUser(u);
  }, []);

  const updateProfile = useCallback(
    async (updates: Partial<UserData>) => {
      if (!user) return;

      try {
        const { data: { session } } = await supabase.auth.getSession();

        if (!session?.user) {
          // Fallback: lokaal updaten (geen sessie beschikbaar)
          const updated = { ...user, ...updates };
          setCurrentUser(updated);
          setUser(updated);
          return;
        }

        // 🔒 SECURITY FIX (audit #1 — biggest P0 in both reviews):
        // total_xp / level / streak / last_activity_date are no longer
        // directly client-writable columns (see supabase/schema.sql —
        // REVOKE on those columns forces every change through a validated,
        // SECURITY DEFINER function). Detect the two shapes THIS APP
        // actually produces for those fields and route them to the
        // matching RPC instead of a raw table UPDATE, which the database
        // would now reject outright.
        //
        // Why detect by shape instead of adding new methods everywhere:
        // every XP-earning page (ArenaPage, TestPage, GrammarPage,
        // WordOfTheDayPage, VocabularyPage) calls createXPAwarder(updateProfile)
        // and none of them needed to change — see src/utils/xp.ts.
        const touchesGameState =
          updates.totalXP !== undefined ||
          updates.level !== undefined ||
          updates.streak !== undefined ||
          updates.lastActivityDate !== undefined;

        if (touchesGameState) {
          const isReset =
            updates.totalXP === 0 && updates.level === 1 && updates.streak === 0;

          if (isReset) {
            const { data, error } = await supabase.rpc("reset_learning_progress");
            if (error) {
              console.error("reset_learning_progress RPC failed:", error);
              return;
            }
            if (data) {
              const updated = rowToUser(data);
              setCurrentUser(updated);
              setUser(updated);
            }
            return;
          }

          // Streak-only correction (useStreakReconciler.ts) — no XP delta,
          // just re-derive streak from the server's own last_activity_date.
          const isStreakOnlyReconcile =
            updates.streak !== undefined && updates.totalXP === undefined;

          if (isStreakOnlyReconcile) {
            const { data, error } = await supabase.rpc("reconcile_streak");
            if (error) {
              console.error("reconcile_streak RPC failed:", error);
              return;
            }
            if (data) {
              const updated = rowToUser(data);
              setCurrentUser(updated);
              setUser(updated);
            }
            return;
          }

          // XP award: the delta between the caller's optimistic totalXP and
          // what we currently have locally. award_xp() re-validates this
          // server-side against the app's own reward table — a client can't
          // send an arbitrary number and have it stick.
          const amount =
            updates.totalXP !== undefined ? updates.totalXP - user.totalXP : 0;

          if (amount > 0) {
            const { data, error } = await supabase.rpc("award_xp", { p_amount: amount });
            if (error) {
              console.error("award_xp RPC failed \u2014 not persisted server-side:", error);
              // Keep the optimistic local numbers so the UI doesn't jump
              // backwards mid-session; the next refreshUser() corrects them
              // if the server genuinely never recorded this award (e.g. it
              // hit the daily cap or an amount outside the reward table).
              const updated = { ...user, ...updates };
              setCurrentUser(updated);
              setUser(updated);
              return;
            }
            if (data) {
              const updated = rowToUser(data);
              setCurrentUser(updated);
              setUser(updated);
            }
          }
          return;
        }

        // Everything else (theme, interfaceLanguage, currentLanguage,
        // email) is still a normal, directly client-writable column.
        const { data, error } = await supabase
          .from("profiles")
          .update(userToRow(updates))
          .eq("id", user.id)
          .select()
          .single();

        if (!error && data) {
          const updated = rowToUser(data);
          setCurrentUser(updated);
          setUser(updated);
        }
      } catch (err) {
        console.error("updateProfile fout:", err);
        // Fallback: lokaal updaten zodat de UI niet vastloopt
        const updated = { ...user, ...updates };
        setCurrentUser(updated);
        setUser(updated);
      }
    },
    [user]
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        refreshUser,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
