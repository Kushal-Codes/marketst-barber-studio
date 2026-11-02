import React from 'react';

interface MarqueeProps {
  text?: string;
  speed?: 'normal' | 'slow';
  className?: string;
  reverse?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({
  text = 'CRAFT · PRECISION · MANCHESTER · EXCELLENCE · CRAFT · PRECISION · MANCHESTER · EXCELLENCE',
  speed = 'normal',
  className = '',
  reverse = false,
}) => {
  const words = text.split('·').map((w) => w.trim()).filter(Boolean);

  return (
    <div
      className={`overflow-hidden whitespace-nowrap select-none py-3 border-y-2 border-ink ${className}`}
      aria-hidden="true"
    >
      <div
        className={`flex w-fit ${
          speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee'
        } ${reverse ? '[animation-direction:reverse]' : ''} hover:[animation-play-state:paused]`}
      >
        {/* Quadruple repeated sequence to guarantee infinite smooth seamless loop without jank */}
        {[0, 1, 2, 3].map((rep) => (
          <div key={rep} className="flex items-center gap-6 shrink-0 px-4">
            {words.map((word, idx) => (
              <span key={`${rep}-${idx}`} className="flex items-center gap-6">
                <span className="font-display font-extrabold text-lg sm:text-xl md:text-2xl tracking-widest uppercase text-white drop-shadow-sm">
                  {word}
                </span>
                <span className="text-highlight font-extrabold text-sm sm:text-base">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
