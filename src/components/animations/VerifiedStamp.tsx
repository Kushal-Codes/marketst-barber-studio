import React from 'react';

export const VerifiedStamp: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => (
  <div className={`relative flex items-center justify-center select-none ${className}`}>
    {/* Rotating SVG Circular Text */}
    <svg viewBox="0 0 100 100" className="w-full h-full animate-stamp-spin">
      <defs>
        <path
          id="circlePath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
        />
      </defs>
      <text fill="#4C1D95" className="text-[9.5px] font-display font-black uppercase tracking-[0.22em]">
        <textPath xlinkHref="#circlePath" startOffset="0%">
          ✦ MARKET ST. STUDIO ✦ DROYLSDEN CRAFT ✦
        </textPath>
      </text>
    </svg>
    {/* Center icon / scissors */}
    <div className="absolute w-12 h-12 rounded-full bg-purple-electric border-2 border-ink shadow-brutal-sm flex items-center justify-center text-white font-display font-black text-xs">
      M43
    </div>
  </div>
);
