import { useEffect } from "react";

interface AdSlotProps {
  variant?: "inline" | "banner";
  className?: string;
}

// ── Google AdSense — Echte advertenties ──
export default function AdSlot({ variant = "inline", className = "" }: AdSlotProps) {
  const isBanner = variant === "banner";

  useEffect(() => {
    try {
      // @ts-expect-error Google AdSense
      if (window.adsbygoogle) {
        // @ts-expect-error Google AdSense
        window.adsbygoogle.push({});
      }
    } catch {
      // AdSense not loaded
    }
  }, []);

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", minHeight: isBanner ? 90 : 250 }}
        data-ad-client="ca-pub-2793563271769362"
        data-ad-slot=""
        data-ad-format={isBanner ? "horizontal" : "auto"}
        data-full-width-responsive="true"
      />
    </div>
  );
}
