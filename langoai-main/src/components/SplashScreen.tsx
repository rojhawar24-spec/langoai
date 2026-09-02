// src/components/SplashScreen.tsx
// ✅ Professioneel laadscherm bij opstarten
// Toont kort het logo — verdwijnt zodra app geladen is

import { useEffect, useState } from "react";

interface SplashScreenProps {
  onDone: () => void;
}

export default function SplashScreen({ onDone }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Na 1.2 seconden beginnen met fade out
    const fadeTimer = setTimeout(() => setFadeOut(true), 1200);
    // Na 1.6 seconden volledig weg
    const doneTimer = setTimeout(() => onDone(), 1600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-400 dark:bg-slate-950 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <div className="relative flex flex-col items-center">
        {/* Gloed cirkel */}
        <div className="absolute h-32 w-32 rounded-full bg-indigo-500/20 blur-2xl" />

        {/* Logo icon */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl shadow-indigo-500/30">
          <svg
            className="h-10 w-10 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>

        {/* Naam */}
        <p className="mt-5 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Lango <span className="text-indigo-600">AI</span>
        </p>
        <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">
          Language Learning Platform
        </p>

        {/* Laadballetjes */}
        <div className="mt-8 flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full bg-indigo-500"
              style={{
                animation: `bounce 0.8s ease-in-out ${i * 0.15}s infinite alternate`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          from { transform: translateY(0px); opacity: 0.4; }
          to   { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
