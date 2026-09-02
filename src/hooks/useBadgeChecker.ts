// src/hooks/useBadgeChecker.ts
// ✅ CORRECT: gebruikt camelCase velden (user.totalXP, user.currentLanguage)
// ✅ BUG-05 FIXED: geen infinite loop meer — userRef patroon
// ✅ Badge-lijst + opslag nu gedeeld via @/utils/badges.ts (zie dat bestand
// voor waarom) — de hook zelf werkt exact hetzelfde als voorheen.

import { useState, useCallback, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import type { BadgeInfo } from "@/components/BadgeNotification";
import { ALL_BADGES, getEarnedBadges, markBadgeEarned } from "@/utils/badges";

export function useBadgeChecker() {
  const { user } = useAuth();
  const [newBadge, setNewBadge] = useState<BadgeInfo | null>(null);

  // ✅ BUG-05 FIX: user in ref → checkBadges heeft [] dependencies → geen loop
  const userRef = useRef(user);
  userRef.current = user;

  const checkBadges = useCallback(
    (data: {
      totalXP?: number;
      streak?: number;
      grammarCompleted?: number;
      wordsLearned?: number;
      testsPassed?: number;
    }) => {
      const currentUser = userRef.current;
      if (!currentUser) return;

      const earned = getEarnedBadges();
      const d = {
        totalXP:          data.totalXP          ?? currentUser.totalXP        ?? 0, // ✅ camelCase
        streak:           data.streak           ?? currentUser.streak          ?? 0,
        grammarCompleted: data.grammarCompleted ?? 0,
        wordsLearned:     data.wordsLearned     ?? 0,
        testsPassed:      data.testsPassed      ?? 0,
        languages:        currentUser.currentLanguage ? 1 : 0,                       // ✅ camelCase
      };

      for (const badge of ALL_BADGES) {
        if (!earned.has(badge.id) && badge.check(d)) {
          markBadgeEarned(badge.id);
          setNewBadge({ id: badge.id, icon: badge.icon, labelKey: badge.labelKey });
          break; // één tegelijk tonen
        }
      }
    },
    [] // ✅ stabiel — verandert nooit → geen loop
  );

  const clearNewBadge = useCallback(() => setNewBadge(null), []);

  return { newBadge, checkBadges, clearNewBadge };
}
