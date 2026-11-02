import React from 'react';
import { businessData } from '../../data/business';
import { Calendar, MessageSquare } from 'lucide-react';

interface CoverInterludeProps {
  onOpenBooking: () => void;
}

export const CoverInterlude: React.FC<CoverInterludeProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-purple-deep overflow-hidden border-y-2 border-ink text-white">
      {/* Background Official Facebook Cover Photo with Dark Purple Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={businessData.coverUrl}
          alt="Market St. Barber Studio Droylsden Interior Cover"
          className="w-full h-full object-cover object-center opacity-25 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-deep via-purple-deep/90 to-purple-electric/80" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Floating Brand Badge with Real Logo */}
        <div className="inline-flex items-center gap-3 p-2 pr-5 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 text-white shadow-brutal-sm mx-auto">
          <img
            src={businessData.logoUrl}
            alt="Market St. Barber Studio Logo"
            className="w-10 h-10 rounded-full border border-white object-cover"
          />
          <span className="font-display text-xs font-black uppercase tracking-widest text-highlight">
            92 Market Street · Droylsden Manchester
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05]">
          LOOK SHARP. FEEL CONFIDENT.{' '}
          <span className="block text-highlight">
            WALK-INS & DIRECT BOOKINGS.
          </span>
        </h2>

        <p className="max-w-2xl mx-auto font-body text-base sm:text-lg text-purple-soft/90 leading-relaxed">
          Open 6 days a week in Droylsden. Whether you need a 20-minute skin fade refresh or the full £40 VIP overhaul with hot towels and beard sculpting, our chairs are ready.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-ink font-display font-black text-sm uppercase tracking-wider border-2 border-ink shadow-brutal hover:bg-purple-pale transition-all active:translate-x-0.5 active:translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-purple-electric" />
            <span>Book Your Chair</span>
          </button>

          <a
            href={businessData.booking.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-display font-black text-sm uppercase tracking-wider border-2 border-ink shadow-brutal transition-all active:translate-x-0.5 active:translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp (07591 287327)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
