import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    "PRECISION SKIN FADES £15",
    "92 MARKET STREET DROYLSDEN",
    "HOT TOWEL STEAM SHAVES",
    "ZERO MONTHLY HOSTING FEES",
    "WALK-INS & DIRECT BOOKINGS",
    "MANCHESTER CRAFT",
    "BEARD SCULPTING & SHAPE UP",
    "OPEN 6 DAYS A WEEK"
  ];

  return (
    <div className="bg-purple-deep text-white py-3 overflow-hidden border-y-2 border-ink select-none relative z-20">
      <div className="flex w-[200%] animate-marquee whitespace-nowrap">
        <div className="flex items-center gap-8 text-xs sm:text-sm font-display font-black tracking-widest uppercase">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-4">
              <span>{item}</span>
              <span className="text-highlight">✦</span>
            </span>
          ))}
        </div>
        <div className="flex items-center gap-8 text-xs sm:text-sm font-display font-black tracking-widest uppercase" aria-hidden="true">
          {items.map((item, i) => (
            <span key={`clone-${i}`} className="flex items-center gap-4">
              <span>{item}</span>
              <span className="text-highlight">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
