import React from 'react';

interface RealismButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: React.ReactNode;
}

export const RealismButton: React.FC<RealismButtonProps> = ({ text, ...props }) => {
  return (
    <button {...props} className="group relative p-[2px] rounded-[16px] text-[1.2rem] border-none cursor-pointer bg-[radial-gradient(circle_80px_at_80%_-10%,_#eab308,_#78716c)] transition-all w-full dark:bg-[radial-gradient(circle_80px_at_80%_-10%,_#fef08a,_#525252)]">
      {/* Glow behind button - amber light, slate dark */}
      <div className="absolute top-0 right-0 w-[65%] h-[60%] rounded-[120px] shadow-[0_0_20px_#eab308] group-hover:shadow-[0_0_40px_#facc15] transition-all duration-300 ease-out -z-10 dark:shadow-[0_0_20px_#fef08a]" />

      {/* Bottom-left amber blob - matching website colors */}
      <div className="absolute bottom-0 left-0 w-[50px] h-[50%] rounded-[17px] transition-all duration-300 ease-out 
        bg-[radial-gradient(circle_60px_at_0%_100%,_#fbbf24,_#f59e0b50,_transparent)] 
        shadow-[-2px_9px_40px_#f59e0b40] 
        group-hover:w-[90px] group-hover:shadow-[-4px_1px_45px_#f59e0b60]
        dark:bg-[radial-gradient(circle_60px_at_0%_100%,_#fde68a,_#fcd34d50,_transparent)]
        dark:shadow-[-2px_9px_40px_#fcd34d40]" />

      {/* Inner content - slate background matching site */}
      <div className="relative px-[25px] py-[14px] group-hover:scale-110 rounded-[14px] text-white bg-[radial-gradient(circle_80px_at_80%_-50%,_#525252,_#1e293b)] z-10 transition-all duration-300 text-left dark:bg-[radial-gradient(circle_80px_at_80%_-50%,_#71717a,_#111827)]">
        {text}

        {/* Inner glow layer */}
        <div className="absolute inset-0 rounded-[14px] bg-[radial-gradient(circle_60px_at_0%_100%,_#ffffff1a,_#ffffff05,_transparent)] z-[-1]" />
      </div>
    </button>
  );
};