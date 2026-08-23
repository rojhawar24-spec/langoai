// src/components/AdSlot.tsx
// ✅ Google AdSense slot
// ⚠️ Vervang JOUW_SLOT_ID door jouw echte slot ID van Google AdSense

import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

// ⚠️ VERVANG DIT door jouw echte AdSense slot ID
// Te vinden in: Google AdSense → Advertenties → Per advertentie
const AD_SLOT_ID = "JOUW_SLOT_ID";
const AD_CLIENT  = "ca-pub-2793563271769362";

export default function AdSlot() {
  const { user } = useAuth();

  // Geen advertentie voor premium gebruikers
  if (user?.premium) return null;

  // Geen advertentie als slot ID niet ingesteld is
  if (!AD_SLOT_ID || AD_SLOT_ID === "JOUW_SLOT_ID") return null;

  return (
    // ✅ CLS-FIX (audit 5.2): vaste minimumhoogte zodat de pagina niet
    // springt zodra de advertentie laadt (of terwijl AdSense nog bezig is).
    <div className="my-2 flex justify-center" style={{ minHeight: "100px" }}>
      <AdUnit />
    </div>
  );
}

function AdUnit() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // ignore
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={AD_CLIENT}
      data-ad-slot={AD_SLOT_ID}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
