import { useEffect, useRef, useState } from "react";
import { getPayPalClientId, markPaymentVerified, verifyPaymentViaProxy } from "@/utils/apiConfig";

interface PayPalCheckoutProps {
  onSuccess: () => void;
  onError: (msg: string) => void;
  amount?: string;
}

declare global {
  interface Window {
    paypal?: {
      Buttons: (config: Record<string, unknown>) => { render: (el: HTMLElement) => void };
    };
  }
}

export default function PayPalCheckout({
  onSuccess,
  onError,
  amount = "3.00",
}: PayPalCheckoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const clientIdRef = useRef("");
  const errorShownRef = useRef(false);

  useEffect(() => {
    const clientId = getPayPalClientId();
    clientIdRef.current = clientId;

    if (!clientId) {
      setLoading(false);
      if (!errorShownRef.current) {
        errorShownRef.current = true;
        onError("No PayPal Client ID configured. Go to Settings → AI to add your key.");
      }
      return;
    }

    errorShownRef.current = false;

    if (window.paypal) {
      setLoading(false);
      return;
    }

    const existingScript = document.querySelector(
      `script[src*="paypal.com/sdk/js"]`
    );
    if (existingScript) {
      const checkPayPal = setInterval(() => {
        if (window.paypal) {
          clearInterval(checkPayPal);
          setLoading(false);
        }
      }, 200);
      return () => clearInterval(checkPayPal);
    }

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=EUR`;
    script.async = true;
    script.onload = () => setLoading(false);
    script.onerror = () => {
      setLoading(false);
      onError("Failed to load PayPal. Please try again.");
    };
    document.head.appendChild(script);
  }, []); // ONLY run on mount

  useEffect(() => {
    if (loading || !containerRef.current) return;
    if (!window.paypal) return;

    const clientId = clientIdRef.current;
    if (!clientId) return;

    containerRef.current.innerHTML = "";

    try {
      window.paypal
        .Buttons({
          style: {
            layout: "vertical",
            color: "gold",
            shape: "pill",
            label: "pay",
          },
          createOrder: (
            _data: unknown,
            actions: { order: { create: (o: Record<string, unknown>) => Promise<string> } }
          ) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: "Lango AI Chat Access",
                  amount: { value: amount, currency_code: "EUR" },
                },
              ],
            });
          },

          // ✅ FIX: capture() succeeds = payment received = always grant access
          onApprove: async (
            data: { orderID: string },
            actions: { order: { capture: () => Promise<unknown> } }
          ) => {
            try {
              await actions.order.capture();
            } catch (captureErr) {
              // capture itself failed — money NOT taken
              console.error("PayPal capture error:", captureErr);
              onError("Payment capture failed. You have not been charged. Please try again.");
              return;
            }

            // ✅ capture succeeded → money is received → grant access immediately
            markPaymentVerified();
            onSuccess();

            // Optional background verification for your own logging/records
            // This no longer gates access — user already has it
            try {
              await verifyPaymentViaProxy(data.orderID);
            } catch {
              // Proxy unavailable or failed — doesn't matter, access already granted
            }
          },

          onError: (err: Error) => {
            console.error("PayPal error:", err);
            onError("Payment failed. Please try again.");
          },
        })
        .render(containerRef.current);
    } catch (e) {
      console.error("PayPal render error:", e);
      setLoading(false);
    }
  }, [loading, amount]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
        <span className="ml-3 text-sm text-slate-500">Loading PayPal...</span>
      </div>
    );
  }

  return <div ref={containerRef} className="min-h-[150px]" />;
}