import React from 'react';
import { businessData } from '../../data/business';
import { Calendar, MessageSquare } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t-2 border-ink p-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={businessData.booking.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-emerald-50 border-2 border-ink text-emerald-800 font-display font-black text-xs uppercase tracking-wider shadow-brutal-sm"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-purple-electric text-white font-display font-black text-xs uppercase tracking-wider border-2 border-ink shadow-brutal-sm"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span>Book (£13+)</span>
        </button>
      </div>
    </div>
  );
};
