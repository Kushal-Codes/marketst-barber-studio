import React from 'react';
import { businessData, getStudioStatus } from '../../data/business';
import { VerifiedStamp } from '../animations/VerifiedStamp';
import { MapPin, Phone, MessageSquare, Calendar, Sparkles, CheckCircle2, ShieldCheck, Clock, Scissors } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const status = getStudioStatus();

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-white">
      {/* Electric Purple Ambient Background Radiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[560px] bg-gradient-to-b from-purple-soft/60 via-purple-pale/40 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-10 w-96 h-96 rounded-full bg-highlight/30 blur-3xl pointer-events-none" />

      {/* Subtle Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#EDE9FE_1px,transparent_1px),linear-gradient(to_bottom,#EDE9FE_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
          
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-purple-soft px-3.5 py-1.5 text-xs font-display font-black uppercase tracking-wider text-purple-deep shadow-brutal-sm">
            <span className={`w-2.5 h-2.5 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-ping' : 'bg-purple-deep'}`} />
            <span>{status.statusText}</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-3.5 py-1.5 text-xs font-display font-bold uppercase tracking-wider text-ink shadow-brutal-sm">
            <MapPin className="w-3.5 h-3.5 text-purple-electric shrink-0" />
            <span>92 Market St · Droylsden</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-highlight/40 px-3.5 py-1.5 text-xs font-display font-black text-purple-deep shadow-brutal-sm">
            <Scissors className="w-3.5 h-3.5 text-purple-electric" />
            <span>Skin Fades from £15 · Hot Towel Shaves</span>
          </div>

        </div>

        {/* Main Grid: Left Typography, Right Real Studio Photo in Brutalist Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left: 7 Columns */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Real Logo + Sub-brand pill */}
            <div className="flex items-center gap-3.5 p-2 pr-4 rounded-2xl bg-purple-pale border-2 border-ink shadow-brutal-sm w-fit">
              <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-ink bg-white shrink-0">
                <img
                  src={businessData.logoUrl}
                  alt="Market St. Barber Studio Official Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xs font-black tracking-widest uppercase text-purple-electric">
                  Market St. Barber Studio
                </span>
                <span className="font-body text-xs font-bold text-ink">
                  Droylsden's Modern Barber Studio
                </span>
              </div>
            </div>

            {/* High-Impact Purple Editorial Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-ink uppercase tracking-tight leading-[0.98]">
              PRECISION CRAFT.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-deep via-purple-electric to-highlight-accent drop-shadow-sm">
                MODERN GROOMING.
              </span>
            </h1>

            {/* Subcopy */}
            <p className="font-body text-base sm:text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl">
              From millimeter-precise skin fades (£15) to luxury steamed hot towel shaves (£13) and full grooming combos (£28 - £40), Market St. Barber Studio delivers sharp, confident haircuts right on 92 Market Street in Droylsden.
            </p>

            {/* Hand-written Callout */}
            <div className="flex items-center gap-3 pt-1">
              <span className="font-hand text-2xl text-purple-deep font-bold -rotate-2 bg-highlight/30 px-3 py-1 rounded-lg border border-purple-deep/30">
                ✂️ Walk-ins & appointments welcome 6 days a week!
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-purple-electric px-8 py-4 font-display text-base sm:text-lg font-black uppercase tracking-wider text-white border-2 border-ink shadow-brutal hover:bg-purple-deep hover:shadow-brutal-lg active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>BOOK APPOINTMENT</span>
              </button>

              <a
                href={businessData.booking.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-white px-7 py-4 font-display text-base font-bold uppercase tracking-wider text-ink shadow-brutal hover:bg-purple-pale hover:border-purple-deep transition-all active:translate-x-0.5 active:translate-y-0.5"
              >
                <MessageSquare className="w-5 h-4 text-emerald-600" />
                <span>WhatsApp (07591 287327)</span>
              </a>
            </div>

            {/* Value Pillars */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t-2 border-purple-soft max-w-xl text-xs font-display font-black uppercase text-purple-deep tracking-wider">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-electric shrink-0" />
                <span>£15 Skin Fades</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-electric shrink-0" />
                <span>Hot Towel Steaming</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-electric shrink-0" />
                <span>Walk-ins Welcome</span>
              </div>
            </div>

          </div>

          {/* Right: 5 Columns Brutalist Card with Real Studio Image & Logo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Rotating Stamp badge in corner */}
              <div className="absolute -top-10 -right-6 z-20 hidden sm:block">
                <VerifiedStamp className="w-32 h-32" />
              </div>

              {/* Main Photo Card */}
              <div className="relative rounded-3xl border-2 border-ink bg-purple-pale p-3.5 shadow-brutal-xl overflow-hidden group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-ink border-2 border-ink">
                  
                  {/* REAL STUDIO WORK PHOTO */}
                  <img
                    src="/images/real/real_cut_hero.jpg"
                    alt="Market St. Barber Studio haircut Droylsden Manchester"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

                  {/* Overlaid Badge */}
                  <div className="absolute top-3 left-3 rounded-full border-2 border-ink bg-white/95 backdrop-blur-md px-3.5 py-1 text-[11px] font-display font-black uppercase text-purple-deep shadow-brutal-sm">
                    Signature Fade & Texture
                  </div>

                  {/* Bottom Studio Info Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl border-2 border-ink bg-white/95 backdrop-blur-md p-3.5 text-ink shadow-brutal-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={businessData.logoUrl}
                          alt="Logo thumbnail"
                          className="w-9 h-9 rounded-lg border border-ink object-cover shrink-0"
                        />
                        <div>
                          <span className="block text-[10px] font-mono uppercase text-purple-electric font-black">
                            Studio Chair · Droylsden
                          </span>
                          <span className="font-display text-sm font-bold text-ink">
                            Clean Skin Fade & Texture Top
                          </span>
                        </div>
                      </div>
                      <span className="font-display text-sm font-black text-purple-deep bg-purple-soft px-3 py-1 rounded-lg border border-purple-deep">
                        £15.00
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Small Floating Studio Badge */}
              <div className="absolute -bottom-6 -left-4 rounded-2xl border-2 border-ink bg-white p-3.5 shadow-brutal hidden sm:flex items-center gap-3 z-20">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-electric text-white font-black font-display text-sm">
                  M43
                </div>
                <div>
                  <span className="block font-display text-xs font-black text-ink uppercase">
                    92 Market Street
                  </span>
                  <span className="text-[11px] font-body text-ink-muted">
                    Droylsden, Manchester M43 6DE
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
