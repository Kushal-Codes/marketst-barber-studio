import React from 'react';

// --- MAIN BRAND EMBLEM / CREST ---
export const BrandEmblem: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Capital Barbers By Efi Emblem"
  >
    {/* Outer Hexagonal Shield */}
    <path
      d="M50 4L90 26V74L50 96L10 74V26L50 4Z"
      fill="#4C1D95"
      stroke="#7C3AED"
      strokeWidth="3"
    />
    {/* Inner Geometric Border */}
    <path
      d="M50 12L82 30V70L50 88L18 70V30L50 12Z"
      stroke="#EDE9FE"
      strokeWidth="1.5"
      strokeDasharray="4 2"
      fill="none"
    />
    {/* Master Barber Crown Motif */}
    <path
      d="M38 28L43 36L50 24L57 36L62 28L60 40H40L38 28Z"
      fill="#F0ABFC"
      stroke="#191622"
      strokeWidth="1.5"
    />
    {/* Crossed Precision Barber Shears */}
    <circle cx="34" cy="74" r="7" stroke="#FFFFFF" strokeWidth="2.5" />
    <circle cx="66" cy="74" r="7" stroke="#FFFFFF" strokeWidth="2.5" />
    <path
      d="M38 68L64 42M62 68L36 42"
      stroke="#FFFFFF"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    {/* Pivot screw */}
    <circle cx="50" cy="55" r="3.5" fill="#7C3AED" stroke="#FFFFFF" strokeWidth="1.5" />
    {/* Lettering C & E */}
    <text
      x="50"
      y="50"
      fill="#FFFFFF"
      fontSize="7"
      fontWeight="bold"
      fontFamily="Space Grotesk, sans-serif"
      textAnchor="middle"
      letterSpacing="1.5"
    >
      EFI
    </text>
  </svg>
);

// --- ROTATING INDUSTRY MOTIF (Gently spinning shears & starburst) ---
export const RotatingIndustryMotif: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`animate-spin-slow ${className}`}
    aria-hidden="true"
  >
    <circle cx="60" cy="60" r="54" stroke="#7C3AED" strokeWidth="2" strokeDasharray="6 4" />
    <circle cx="60" cy="60" r="46" stroke="#EDE9FE" strokeWidth="1.5" />
    {/* 8-Point Geometric Craft Star */}
    <path
      d="M60 14L63 45L94 48L68 66L77 96L52 78L27 96L36 66L10 48L41 45L60 14Z"
      fill="#4C1D95"
      stroke="#F0ABFC"
      strokeWidth="1.5"
    />
    <circle cx="60" cy="60" r="8" fill="#7C3AED" stroke="#FFFFFF" strokeWidth="2" />
  </svg>
);

// --- HAND-DRAWN UNDERLINE ACCENT ---
export const HandDrawnUnderline: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-full h-3',
  color = '#F0ABFC'
}) => (
  <svg
    viewBox="0 0 240 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
  >
    <path
      d="M3 11C45 4 105 13 155 7C188 3 218 8 237 9"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 14C70 8 135 15 185 10C205 8 222 11 233 13"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.8"
    />
  </svg>
);

// --- HAND-DRAWN CIRCLE STROKE ---
export const HandDrawnCircle: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 160 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`absolute inset-0 pointer-events-none ${className}`}
    preserveAspectRatio="none"
  >
    <path
      d="M18 40C15 20 40 8 82 8C130 8 150 24 148 46C145 68 115 74 72 74C32 74 8 60 12 36C14 22 34 14 65 12"
      stroke="#F0ABFC"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// --- MANCHESTER BEE ACCENT MOTIF ---
export const ManchesterBeeMotif: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Manchester Bee"
  >
    {/* Bee Wings */}
    <path
      d="M12 18C12 11 18 8 24 12C18 16 16 20 16 24C12 24 12 21 12 18Z"
      fill="#EDE9FE"
      stroke="#7C3AED"
      strokeWidth="1.5"
    />
    <path
      d="M36 18C36 11 30 8 24 12C30 16 32 20 32 24C36 24 36 21 36 18Z"
      fill="#EDE9FE"
      stroke="#7C3AED"
      strokeWidth="1.5"
    />
    {/* Bee Body */}
    <ellipse cx="24" cy="27" rx="7" ry="11" fill="#4C1D95" stroke="#191622" strokeWidth="1.5" />
    {/* Body Stripes */}
    <path d="M18 24H30M17 28H31M19 32H29" stroke="#F0ABFC" strokeWidth="2" strokeLinecap="round" />
    {/* Head */}
    <circle cx="24" cy="14" r="4.5" fill="#191622" />
    {/* Antennae */}
    <path d="M22 10L19 6M26 10L29 6" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// --- BESPOKE SERVICE ICONS (ORIGINAL CONSISTENT INLINE SVGS) ---

export const ServiceIcon: React.FC<{ type: string; className?: string }> = ({
  type,
  className = 'w-7 h-7 text-purple-electric'
}) => {
  switch (type) {
    case 'fade':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          {/* Clipper Body */}
          <rect x="10" y="10" width="16" height="20" rx="3" fill="#4C1D95" stroke="#191622" strokeWidth="2" />
          {/* Clipper Comb Blades */}
          <path d="M11 6V10M14 6V10M17 6V10M20 6V10M23 6V10M25 6V10" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
          {/* Fade graduation lines */}
          <path d="M14 16H22M14 20H19M14 24H17" stroke="#F0ABFC" strokeWidth="2" strokeLinecap="round" />
          {/* Indicator Light */}
          <circle cx="18" cy="27" r="1.5" fill="#F0ABFC" />
        </svg>
      );

    case 'scissors':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          <circle cx="11" cy="27" r="4" stroke="#4C1D95" strokeWidth="2" />
          <circle cx="25" cy="27" r="4" stroke="#4C1D95" strokeWidth="2" />
          <path d="M14 24L26 8M22 24L10 8" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="18" cy="18" r="2" fill="#F0ABFC" />
        </svg>
      );

    case 'beard':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          {/* Sculpted Beard Profile */}
          <path
            d="M8 12C8 12 11 26 18 30C25 26 28 12 28 12C28 12 24 16 18 16C12 16 8 12 8 12Z"
            fill="#4C1D95"
            stroke="#191622"
            strokeWidth="2"
          />
          {/* Mustache */}
          <path
            d="M11 11C15 9 17 13 18 13C19 13 21 9 25 11C23 15 19 14 18 14C17 14 13 15 11 11Z"
            fill="#7C3AED"
            stroke="#191622"
            strokeWidth="1.5"
          />
          {/* Razor Guide Line */}
          <path d="M12 20L18 24L24 20" stroke="#F0ABFC" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'shave':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          {/* Cut Throat Straight Razor */}
          {/* Wooden / Resin Handle */}
          <path d="M6 24L18 30L30 18" stroke="#4C1D95" strokeWidth="3" strokeLinecap="round" />
          {/* Razor Blade extending outward */}
          <path
            d="M18 18L30 6L32 8L20 20Z"
            fill="#EDE9FE"
            stroke="#7C3AED"
            strokeWidth="2"
          />
          {/* Blade gleam / shine */}
          <line x1="22" y1="12" x2="27" y2="7" stroke="#F0ABFC" strokeWidth="1.5" strokeLinecap="round" />
          {/* Pivot rivet */}
          <circle cx="18" cy="19" r="2" fill="#F0ABFC" stroke="#191622" strokeWidth="1" />
        </svg>
      );

    case 'wash':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          {/* Wash basin */}
          <path d="M6 18C6 26 12 30 18 30C24 30 30 26 30 18H6Z" fill="#4C1D95" stroke="#191622" strokeWidth="2" />
          {/* Shampoo bubbles & water drops */}
          <circle cx="13" cy="14" r="3" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" />
          <circle cx="19" cy="11" r="3.5" fill="#F0ABFC" stroke="#4C1D95" strokeWidth="1.5" />
          <circle cx="24" cy="15" r="2.5" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" />
          <path d="M18 5V7M12 7V8M24 7V8" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'wax':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          {/* Waxing Spatula & Droplet */}
          <path d="M8 28L26 10L29 13L11 31Z" fill="#4C1D95" stroke="#191622" strokeWidth="2" />
          {/* Honey droplet */}
          <path
            d="M26 10C26 6 30 4 30 4C30 4 34 6 34 10C34 12.5 32 14 30 14C28 14 26 12.5 26 10Z"
            fill="#F0ABFC"
            stroke="#7C3AED"
            strokeWidth="1.5"
          />
          {/* Sparkle */}
          <path d="M14 10L16 6L18 10L22 12L18 14L16 18L14 14L10 12L14 10Z" fill="#7C3AED" />
        </svg>
      );

    case 'buzz':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          <rect x="9" y="12" width="18" height="18" rx="4" fill="#4C1D95" stroke="#191622" strokeWidth="2" />
          <path d="M10 6L12 12M15 6L16 12M18 6L18 12M21 6L20 12M24 6L22 12" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
          {/* Power button */}
          <circle cx="18" cy="21" r="3" fill="#F0ABFC" />
        </svg>
      );

    case 'steam':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          {/* Facial steamer nozzle */}
          <rect x="12" y="20" width="12" height="12" rx="2" fill="#4C1D95" stroke="#191622" strokeWidth="2" />
          {/* Steaming vapor plumes */}
          <path
            d="M14 16C13 14 15 12 14 10C13 8 15 6 14 4"
            stroke="#7C3AED"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18 17C17 15 19 12 18 10C17 7 19 5 18 3"
            stroke="#F0ABFC"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M22 16C21 14 23 12 22 10C21 8 23 6 22 4"
            stroke="#7C3AED"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          <circle cx="18" cy="18" r="12" stroke="#4C1D95" strokeWidth="2" />
          <path d="M18 12V24M12 18H24" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
};
