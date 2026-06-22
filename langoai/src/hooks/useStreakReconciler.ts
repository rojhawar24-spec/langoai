import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { reconcileStreak, bootstrapStreakData } from "@/utils/streak";

/**
 * On mount (dashboard load), bootstraps streak data from existing
 * profile if needed, then reconciles the user's streak field against
 * the source-of-truth active-date registry.
 */
export function useStreakReconciler() {
  const { user, updateProfile } = useAuth();

  useEffect(() => {
    if (!user) return;

    // One-time backfill for users who existed before the streak engine
    bootstrapStreakData(user.lastActivityDate ?? null);

    // Reconcile: compute streak from raw data, update profile if stale
    const { streak, changed } = reconcileStreak(user.streak);

    if (changed) {
      updateProfile({ streak });
    }
  }, [user?.id]); // only run when user identity changes
}