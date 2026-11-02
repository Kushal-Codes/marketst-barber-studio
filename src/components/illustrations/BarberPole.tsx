import React from 'react';

export const BarberPole: React.FC<{ className?: string }> = ({ className = 'w-14 h-48' }) => {
  return (
    <div className={`relative flex flex-col items-center select-none ${className}`} aria-label="Animated Barber Pole">
      {/* Top Finial / Chrome Cap */}
      <div className="w-12 h-5 rounded-t-full bg-gradient-to-r from-gray-200 via-white to-gray-400 border-2 border-ink shadow-brutal-sm relative z-10">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-3 rounded-full bg-gradient-to-t from-purple-deep to-highlight border border-ink" />
      </div>

      {/* Main Glass Cylinder with Animated Barber Stripes */}
      <div className="relative w-10 h-full border-x-2 border-ink bg-white overflow-hidden shadow-inner">
        {/* Repeating Diagonal Stripes Pattern animating down */}
        <div
          className="absolute inset-0 w-full h-[200%] animate-barber-pole"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              #4C1D95,
              #4C1D95 12px,
              #FFFFFF 12px,
              #FFFFFF 24px,
              #7C3AED 24px,
              #7C3AED 36px,
              #F0ABFC 36px,
              #F0ABFC 48px
            )`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Glass Specular Reflection Highlight */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-black/20 pointer-events-none" />
        <div className="absolute top-0 left-1.5 w-1 h-full bg-white/70 blur-[0.5px] pointer-events-none" />
      </div>

      {/* Bottom Finial / Chrome Cap */}
      <div className="w-12 h-5 rounded-b-full bg-gradient-to-r from-gray-200 via-white to-gray-400 border-2 border-ink shadow-brutal-sm relative z-10">
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-2 rounded-b-full bg-ink" />
      </div>
    </div>
  );
};
