import React, { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { businessData, getShopLiveStatus } from '../../data/business';

interface StickyBookingBarProps {
  onOpenBooking: () => void;
}

export const StickyBookingBar: React.FC<StickyBookingBarProps> = ({ onOpenBooking }) => {
  const [visible, setVisible] = useState(false);
  const liveStatus = getShopLiveStatus();

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 250px
      setVisible(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      className="fixed bottom-0 left-0 right-0 z-30 lg:hidden border-t-2 border-ink bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-brutal animate-slide-up"
      aria-label="Quick appointment booking bar"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-electric leading-none">
            {liveStatus.statusText.split('·')[0]}
          </span>
          <span className="font-display text-sm font-bold text-ink leading-tight mt-0.5">
            46 George St · £20 Cuts
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={businessData.phone.telLink}
            className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-ink bg-purple-soft text-purple-deep active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Direct phone call"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-1.5 rounded-xl border-2 border-ink bg-purple-electric px-4 py-2.5 font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>BOOK CHOP</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
