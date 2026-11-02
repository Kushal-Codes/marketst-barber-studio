import React from 'react';
import { businessData } from '../../data/business';
import { Phone, Calendar, MessageSquare } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F0F12]/95 backdrop-blur-lg border-t border-[#26242B] p-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={businessData.booking.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#1C1A22] border border-emerald-500/40 text-emerald-400 font-bold text-xs uppercase tracking-wider"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-stone-950 font-black text-xs uppercase tracking-wider shadow-md"
        >
          <Calendar className="w-4 h-4 text-stone-950" />
          <span>Book (£13+)</span>
        </button>
      </div>
    </div>
  );
};
