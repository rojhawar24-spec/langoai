//
// Premium / monetisation utilities
// AI chat is LOCKED until €3 PayPal payment — no free messages.
//

// ── Premium feature flags ──

export const PREMIUM_PERKS = [
  { icon: "🚫", label: "Ad-free experience", free: false, premium: true },
  { icon: "🤖", label: "AI tutor access", free: "—", premium: "Unlimited" },
  { icon: "📦", label: "Exclusive word packs", free: false, premium: true },
  { icon: "❄️", label: "1 streak freeze per week", free: false, premium: true },
  { icon: "📊", label: "Detailed learning analytics", free: false, premium: true },
  { icon: "🎯", label: "Custom daily XP goal", free: false, premium: true },
  { icon: "🏅", label: "Premium badge on profile", free: false, premium: true },
  { icon: "🎨", label: "Exclusive themes", free: false, premium: true },
] as const;
