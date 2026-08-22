// src/utils/resetProgress.ts
//
// 🔒 FIX (audit #24 — "Reset All Progress doesn't reset all progress"):
// the Settings page button only ever reset totalXP/level/streak on the
// profile. Everything else — completed lessons, mistakes, badges, arena
// state, XP history, word-of-the-day progress, saved lesson position — is
// tracked in localStorage and was left completely untouched, so "Reset All
// Progress" quietly reset almost nothing. This clears every key that holds
// LEARNING PROGRESS.
//
// Deliberately NOT cleared (these aren't "progress", resetting them would
// be a surprising side effect of a progress-reset button):
//   - langlearn_theme, langlearn_ui_language   → UI preferences
//   - langlearn_high_contrast, langlearn_dyslexia_font → accessibility prefs
//   - langlearn_cookie_consent                  → legal consent record
//   - langlearn_payment_expires_at, langlearn_access_token → premium/payment
//   - langlearn_onboarding_done, langlearn_onboarding_why  → don't force
//     onboarding again just because someone reset their XP
//   - langlearn_used_gift_codes                 → anti-replay record; a
//     progress reset must not make a gift code redeemable a second time
//   - langlearn_daily_goal                       → a goal setting, not
//     earned progress

const PROGRESS_KEYS = [
  "langlearn_completed_grammar",
  "langlearn_daily_chest_date",
  "langlearn_daily_xp",
  "langlearn_earned_badges",
  "langlearn_language_xp",
  "langlearn_last_activity",
  "langlearn_learned_words",
  "langlearn_mistakes",
  "langlearn_saved_position",
  "langlearn_streak_bootstrapped",
  "langlearn_streak_dates",
  "langlearn_streak_freeze",
  "langlearn_streak_freeze_used_for",
  "langlearn_wotd_progress",
  "langlearn_xp_history",
  "langlearn_arena_v3",
];

/**
 * Clears every localStorage key that represents learning progress.
 * Does NOT touch the server (profiles.total_xp/level/streak) — call
 * updateProfile({ totalXP: 0, level: 1, streak: 0, lastActivityDate: null })
 * for that; AuthContext routes it through the reset_learning_progress RPC.
 */
export function resetAllLocalProgress(): void {
  for (const key of PROGRESS_KEYS) {
    try {
      localStorage.removeItem(key);
    } catch {
      // localStorage unavailable (private mode edge cases) — nothing to do
    }
  }
}
