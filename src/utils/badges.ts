// src/utils/badges.ts
// ✅ NIEUW — hierheen verplaatst vanuit useBadgeChecker.ts, met 1 correctie:
// labels stonden hardcoded in het Engels (zichtbaar in de "Nieuwe badge!"-
// popup, voor alle 5 talen tegelijk) — nu via vertaalsleutel.
// Ook: ProfilePage.tsx had zijn EIGEN, andere lijst van 6 badges
// (First Lesson/Goal Crusher/Scholar/...) die nergens overlapte met deze
// 9 — je kon dus een "Nieuwe badge!"-melding op het Dashboard krijgen voor
// bv. "Polyglot" die daarna nooit op je Profiel te zien was, en andersom.
// Nu is er 1 lijst, gebruikt op beide plekken.

import type { TranslationKey } from "@/i18n/translations";

export interface BadgeDef {
  id: string;
  icon: string;
  labelKey: TranslationKey;
  check: (data: {
    totalXP: number;
    streak: number;
    grammarCompleted: number;
    wordsLearned: number;
    testsPassed: number;
    languages: number;
  }) => boolean;
}

export const EARNED_BADGES_KEY = "langlearn_earned_badges";

export const ALL_BADGES: BadgeDef[] = [
  { id: "first_steps",    icon: "👣", labelKey: "badge.firstSteps",    check: (d) => d.grammarCompleted >= 1  },
  { id: "word_collector", icon: "📦", labelKey: "badge.wordCollector", check: (d) => d.wordsLearned >= 10    },
  { id: "perfect_score",  icon: "💯", labelKey: "badge.perfectScore",  check: (d) => d.testsPassed >= 1      },
  { id: "streak_7",       icon: "🔥", labelKey: "badge.streak7",       check: (d) => d.streak >= 7           },
  { id: "streak_30",      icon: "🏆", labelKey: "badge.streak30",      check: (d) => d.streak >= 30          },
  { id: "polyglot",       icon: "🌍", labelKey: "badge.polyglot",      check: (d) => d.languages >= 2        },
  { id: "xp_100",         icon: "⚡", labelKey: "badge.xp100",         check: (d) => d.totalXP >= 100        },
  { id: "xp_500",         icon: "💪", labelKey: "badge.xp500",         check: (d) => d.totalXP >= 500        },
  { id: "xp_1000",        icon: "🌟", labelKey: "badge.xp1000",        check: (d) => d.totalXP >= 1000       },
];

export function getEarnedBadges(): Set<string> {
  try {
    return new Set(JSON.parse(localStorage.getItem(EARNED_BADGES_KEY) ?? "[]"));
  } catch {
    return new Set();
  }
}

export function markBadgeEarned(id: string): void {
  const s = getEarnedBadges();
  s.add(id);
  localStorage.setItem(EARNED_BADGES_KEY, JSON.stringify([...s]));
}
