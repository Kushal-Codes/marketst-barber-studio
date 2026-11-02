import React from 'react';
import { businessData, getStudioStatus } from '../../data/business';
import { BarberPoleMotif, ScissorsMotif } from '../illustrations/BarberMotifs';
import { MapPin, Phone, MessageSquare, Calendar, Star, Clock, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const status = getStudioStatus();

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-[#0A0A0C]">
      {/* Warm Amber & Espresso Ambient Backlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[520px] bg-gradient-to-b from-amber-600/15 via-amber-700/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Live Studio Status Pill */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-950/40 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-300">
            <span className={`w-2.5 h-2.5 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`} />
            <span>{status.statusText}</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#2B2834] bg-[#16141D] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-stone-300">
            <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>92 Market St, Droylsden (M43 6DE)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/30 px-3 py-1 text-xs font-bold text-emerald-400">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero Monthly Hosting Fees</span>
          </div>
        </div>

        {/* Main Content Grid: Left Copy & Pricing Spotlight, Right Real Instagram Cuts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: 7 Cols */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3">
              <ScissorsMotif className="w-10 h-10 text-amber-500" />
              <div className="flex flex-col">
                <span className="font-mono text-xs font-black tracking-widest uppercase text-amber-400">
                  Droylsden's Modern Barber Studio
                </span>
                <span className="text-xs font-medium text-stone-400">
                  Precision Skin Fades · Hot Towels · Beard Sculpting
                </span>
              </div>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase leading-[1.05]">
              SHARP CRAFT.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                ZERO MONTHLY LOCK-IN.
              </span>
            </h1>

            {/* Subcopy */}
            <p className="font-sans text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              Step into Market St. Barber Studio on 92 Market Street in Droylsden. From crisp skin fades (£15) to luxury steamed hot towel shaves (£13) and complete full-service grooming packages (£40), we combine time-honoured barbering with modern styling.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-7 py-4 font-sans text-base sm:text-lg font-black uppercase tracking-wider text-stone-950 shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Calendar className="w-5 h-5 text-stone-950" />
                <span>BOOK APPOINTMENT</span>
              </button>

              <a
                href={businessData.booking.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#33303D] bg-[#16141D] px-6 py-4 font-sans text-base font-bold uppercase tracking-wider text-white hover:border-amber-500 hover:bg-[#201D28] transition-all"
              >
                <MessageSquare className="w-5 h-5 text-amber-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Value Pillars */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-[#26242B] max-w-xl text-xs font-bold uppercase text-stone-400 tracking-wider">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>£15 Skin Fades</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Hot Towel Steaming</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free Hosting Forever</span>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Cols Real Photo Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Barber pole graphic accent in corner */}
              <div className="hidden sm:block absolute -top-8 -right-8 z-20 opacity-80">
                <BarberPoleMotif className="w-20 h-20" />
              </div>

              {/* Main Photo Card */}
              <div className="relative rounded-3xl border-2 border-amber-500/50 bg-[#16141D] p-3 shadow-2xl shadow-amber-950/40 overflow-hidden group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-950 border border-[#2B2834]">
                  
                  {/* REAL INSTAGRAM HERO CUT IMAGE */}
                  <img
                    src="/images/real/marketst_hero.jpg"
                    alt="Market St. Barber Studio real haircut showcase Droylsden Manchester"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-transparent to-transparent opacity-85" />

                  {/* Overlaid Provenance Badge */}
                  <div className="absolute top-3 left-3 rounded-full border border-amber-500/60 bg-[#0F0F12]/90 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-bold uppercase text-amber-300">
                    Live Instagram Cut Showcase
                  </div>

                  {/* Bottom Studio Info Card */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-[#33303D] bg-[#16141D]/95 backdrop-blur-md p-3.5 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block text-[11px] font-mono uppercase text-amber-400 font-bold">
                          Droylsden Studio Chair
                        </span>
                        <span className="font-serif text-sm font-bold">
                          Surgical Skin Fade & Texture Top
                        </span>
                      </div>
                      <span className="font-mono text-xs font-bold text-amber-400 bg-amber-950/70 px-2.5 py-1 rounded-lg border border-amber-500/40">
                        £15.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Floating Proof Card */}
              <div className="absolute -bottom-5 -left-4 rounded-2xl border border-amber-500/40 bg-[#16141D] p-3 shadow-xl hidden sm:flex items-center gap-3 z-20">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-black font-serif text-sm">
                  M43
                </div>
                <div>
                  <span className="block font-serif text-xs font-bold text-white uppercase">
                    92 Market Street
                  </span>
                  <span className="text-[11px] text-stone-400">
                    Droylsden, Manchester
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
