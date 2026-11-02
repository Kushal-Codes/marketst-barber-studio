import React, { useState, useRef, useCallback } from 'react';
import { HandDrawnUnderline } from '../illustrations/BrandMotifs';
import { soundManager } from '../animations/SoundEffects';
import { Scissors, Sparkles, MoveHorizontal } from 'lucide-react';

export const BeforeAfterSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(clamped);
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
    soundManager.playSnip();
  };

  const handleTouchStart = () => {
    setIsDragging(true);
    soundManager.playSnip();
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-purple-soft px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-purple-deep shadow-brutal-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-electric" />
            <span>Interactive Craft Inspection</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight uppercase leading-tight">
            THE MANCHESTER{' '}
            <span className="relative inline-block text-purple-deep">
              CHOP TRANSFORMATION
              <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3" color="#7C3AED" />
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-ink-muted">
            Drag the slider to inspect the razor foil blend, crisp temple line-up, and sculpted jawline beard contour.
          </p>
        </div>

        {/* Interactive Before/After Card */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseMove={(e) => isDragging && handleMove(e.clientX)}
            onTouchMove={(e) => isDragging && handleMove(e.touches[0].clientX)}
            onMouseUp={handleMouseUp}
            onTouchEnd={handleMouseUp}
            onMouseLeave={handleMouseUp}
            data-cursor="DRAG"
            className="relative select-none overflow-hidden rounded-3xl border-2 border-ink bg-purple-deep shadow-brutal-xl aspect-[4/3] sm:aspect-[16/10] cursor-ew-resize"
          >
            {/* Background Image: AFTER (Finished Master Cut) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/images/real/hero_cut_real.jpg"
                alt="After: Master Skin Fade and Beard Sculpt by Efi"
                className="w-full h-full object-cover object-center"
                draggable={false}
              />
              <div className="absolute top-4 right-4 z-10 rounded-full border-2 border-ink bg-purple-electric px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-white shadow-brutal-sm">
                After: Master Chop
              </div>
            </div>

            {/* Foreground Clipped Image: BEFORE / Workstation in progress */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative w-full h-full" style={{ width: containerRef.current?.offsetWidth || '100%' }}>
                <img
                  src="/images/real/client_fade_whatsapp.webp"
                  alt="Before Consultation and Shape-Up"
                  className="w-full h-full object-cover object-center filter contrast-105"
                  draggable={false}
                />
                <div className="absolute top-4 left-4 z-10 rounded-full border-2 border-ink bg-white px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-ink shadow-brutal-sm">
                  Before: Initial Growth
                </div>
              </div>
            </div>

            {/* Drag Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize"
              style={{ left: `${sliderPos}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              {/* Central Draggable Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-ink bg-highlight text-ink flex items-center justify-center shadow-brutal-sm hover:scale-110 active:scale-95 transition-transform">
                <Scissors className="w-5 h-5 text-purple-deep" />
              </div>

              {/* Arrow Indicator Badges */}
              <div className="absolute bottom-6 -translate-x-1/2 flex items-center gap-1 rounded-full border border-ink bg-ink/90 px-3 py-1 text-[10px] font-mono font-bold text-white uppercase whitespace-nowrap shadow-sm">
                <MoveHorizontal className="w-3 h-3 text-highlight" />
                <span>Drag</span>
              </div>
            </div>
          </div>

          {/* Bottom Card Controls & Booking Action */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border-2 border-ink bg-purple-pale/60 p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
              <div className="text-left">
                <span className="block font-display text-sm font-bold text-ink">
                  Real Consultation Results
                </span>
                <span className="text-xs text-ink-muted">
                  Executed by Master Barber Efi at 46 George Street, Manchester
                </span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-purple-electric px-5 py-2.5 font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-brutal-sm hover:bg-purple-deep hover:shadow-none transition-all"
            >
              <Scissors className="w-4 h-4 text-highlight" />
              <span>Book Your Transformation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
