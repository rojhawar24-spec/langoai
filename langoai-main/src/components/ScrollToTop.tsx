import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Scroll to top on every navigation
    window.scrollTo({ top: 0, behavior: "instant" });

    // Also scroll after a tiny delay for dynamic content
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
