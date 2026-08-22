import { useEffect, useState } from "react";

interface CelebrationProps {
  newLevel: number;
  onDone: () => void;
}

const EMOJIS = ["🎉", "🎊", "✨", "🌟", "⭐", "🏆", "💪", "🔥"];

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

interface Particle {
  id: number;
  emoji: string;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

export default function Celebration({ newLevel, onDone }: CelebrationProps) {
  const [visible, setVisible] = useState(true);
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      x: randomBetween(5, 95),
      delay: randomBetween(0, 1.2),
      duration: randomBetween(1.8, 3.2),
      size: randomBetween(20, 40),
    }))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 400);
    }, 3500);
    return () => clearTimeout(timer);
  }, [onDone]);

  if (!visible) {
    return (
      <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300">
        <div className="rounded-3xl bg-white px-10 py-8 text-center shadow-2xl dark:bg-slate-800" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 animate-in fade-in" />

      {/* Particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="pointer-events-none absolute top-0 animate-bounce"
          style={{
            left: `${p.x}%`,
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            animationFillMode: "forwards",
          }}
        >
          {p.emoji}
        </span>
      ))}

      {/* Central card */}
      <div className="relative z-10 mx-4 animate-bounce-in rounded-3xl bg-white px-10 py-8 text-center shadow-2xl dark:bg-slate-800 sm:px-14 sm:py-10">
        <div className="mb-3 text-5xl">🎉</div>
        <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
          Level Up!
        </h2>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
          You reached{" "}
          <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Level {newLevel}
          </span>
        </p>
        <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">
          Keep going! You&apos;re doing amazing.
        </p>
      </div>

      <style>{`
        @keyframes bounce-in {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.08); }
          70% { transform: scale(0.95); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-bounce {
          animation-name: fall;
          animation-timing-function: ease-in;
          animation-iteration-count: 1;
        }
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
