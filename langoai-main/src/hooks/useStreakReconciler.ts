// src/hooks/useStreakReconciler.ts
// ✅ CORRECT: gebruikt user.lastActivityDate (camelCase) — werkt in de hele app
//
// 🔒 FIX (audit #1, streak half of it): this used to compute the "you
// missed a day" correction LOCALLY (from the localStorage active-dates
// ledger) and push the resulting number straight to the profile via
// updateProfile({ streak }) — which, before this fix, was a direct,
// client-trusted column write. Now it just asks the server to reconcile
// itself (see reconcile_streak() in supabase/schema.sql, and the
// "isStreakOnlyReconcile" branch in AuthContext.tsx's updateProfile). The
// server recomputes purely from last_activity_date — a value it already
// owns — so there's no client-supplied number to validate or trust in the
// first place.

import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { bootstrapStreakData } from "@/utils/streak";

export function useStreakReconciler() {
  const { user, updateProfile } = useAuth();

  useEffect(() => {
    if (!user) return;

    // Local active-dates ledger stays purely for the Profile page's
    // calendar/last-7-days UI — presentation only, not the persisted
    // streak count.
    bootstrapStreakData(user.lastActivityDate ?? null);

    // Cheap, idempotent, server-authoritative — safe to call once per
    // login without a local "did anything change" pre-check. The value
    // passed here is intentionally unused; AuthContext routes any
    // streak-only update to reconcile_streak(), which takes no input at
    // all and recomputes from last_activity_date server-side.
    updateProfile({ streak: user.streak ?? 0 });
  }, [user?.id]); // alleen opnieuw draaien als gebruiker wisselt
}
