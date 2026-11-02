import React from 'react';

export const VerifiedStamp: React.FC<{ className?: string }> = ({ className = 'w-28 h-28' }) => {
  return (
    <div
      className={`relative select-none group cursor-pointer ${className}`}
      title="Verified Manchester 5-Star Craftsmanship"
    >
      <svg
        viewBox="0 0 140 140"
        className="w-full h-full animate-stamp-spin group-hover:[animation-play-state:paused]"
        aria-label="Verified Manchester Stamp"
      >
        <defs>
          <path
            id="textCircle"
            d="M 70, 70 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
          />
        </defs>

        {/* Outer dotted ring */}
        <circle
          cx="70"
          cy="70"
          r="66"
          stroke="#4C1D95"
          strokeWidth="2"
          strokeDasharray="4 4"
          fill="none"
        />

        {/* Solid inner ring */}
        <circle
          cx="70"
          cy="70"
          r="60"
          stroke="#7C3AED"
          strokeWidth="2.5"
          fill="#FFFFFF"
        />

        {/* Rotating Circular Text */}
        <text
          fontSize="11.5"
          fontWeight="800"
          fontFamily="Space Grotesk, sans-serif"
          fill="#191622"
          letterSpacing="2.2"
        >
          <textPath href="#textCircle" startOffset="0%">
            VERIFIED MANCHESTER · 4.9 ★ RATED ·
          </textPath>
        </text>

        {/* Center Badge Core */}
        <circle cx="70" cy="70" r="28" fill="#4C1D95" stroke="#F0ABFC" strokeWidth="2" />

        {/* Center Shears & 5 Stars */}
        <path
          d="M62 65L78 75M78 65L62 75"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="70" cy="70" r="2" fill="#F0ABFC" />
        <path
          d="M70 54L71.5 58.5H76L72.5 61L74 65.5L70 63L66 65.5L67.5 61L64 58.5H68.5L70 54Z"
          fill="#F0ABFC"
        />
      </svg>
    </div>
  );
};
