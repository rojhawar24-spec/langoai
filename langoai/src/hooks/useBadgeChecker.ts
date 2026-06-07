import { useState, useCallback } from "react";
import { useAuth } from "@/contexts/AuthContext";
import type { BadgeInfo } from "@/components/BadgeNotification";

const EARNED_BADGES_KEY = "langlearn_earned_badges";

interface BadgeDef {
  id: string;
  icon: string;
  label: string;
  check: (data: { totalXP: number; streak: number; grammarCompleted: number; wordsLearned: number; testsPassed: number; languages: number }) => boolean;
}

const ALL_BADGES: BadgeDef[] = [
  { id: "first_steps", icon: "👣", label: "First Steps", check: (d) => d.grammarCompleted >= 1 },
  { id: "word_collector", icon: "📦", label: "Word Collector", check: (d) => d.wordsLearned >= 10 },
  { id: "perfect_score", icon: "💯", label: "Perfect Score", check: (d) => d.testsPassed >= 1 },
  { id: "streak_7", icon: "🔥", label: "7-Day Streak", check: (d) => d.streak >= 7 },
  { id: "streak_30", icon: "🏆", label: "30-Day Streak", check: (d) => d.streak >= 30 },
  { id: "polyglot", icon: "🌍", label: "Polyglot", check: (d) => d.languages >= 2 },
  { id: "xp_100", icon: "⚡", label: "100 XP", check: (d) => d.totalXP >= 100 },
  { id: "xp_500", icon: "💪", label: "500 XP", check: (d) => d.totalXP >= 500 },
  { id: "xp_1000", icon: "🌟", label: "1000 XP", check: (d) => d.totalXP >= 1000 },
];

function getEarnedBadges(): Set<string> {
  try { return new Set(JSON.parse(localStorage.getItem(EARNED_BADGES_KEY) ?? "[]")); } catch { return new Set(); }
}
function markBadgeEarned(id: string): void {
  const s = getEarnedBadges();
  s.add(id);
  localStorage.setItem(EARNED_BADGES_KEY, JSON.stringify([...s]));
}

export function useBadgeChecker() {
  const { user } = useAuth();
  const [newBadge, setNewBadge] = useState<BadgeInfo | null>(null);

  const checkBadges = useCallback((data: {
    totalXP?: number; streak?: number; grammarCompleted?: number; wordsLearned?: number; testsPassed?: number;
  }) => {
    if (!user) return;
    const earned = getEarnedBadges();
    const d = {
      totalXP: data.totalXP ?? user.totalXP ?? 0,
      streak: data.streak ?? user.streak ?? 0,
      grammarCompleted: data.grammarCompleted ?? 0,
      wordsLearned: data.wordsLearned ?? 0,
      testsPassed: data.testsPassed ?? 0,
      languages: user.currentLanguage ? 1 : 0,
    };

    for (const badge of ALL_BADGES) {
      if (!earned.has(badge.id) && badge.check(d)) {
        markBadgeEarned(badge.id);
        setNewBadge({ id: badge.id, icon: badge.icon, label: badge.label });
        break; // Show one at a time
      }
    }
  }, [user]);

  const clearNewBadge = useCallback(() => setNewBadge(null), []);

  return { newBadge, checkBadges, clearNewBadge };
}
