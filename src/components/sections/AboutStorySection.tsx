import React from 'react';
import { BrandEmblem, ManchesterBeeMotif, HandDrawnUnderline } from '../illustrations/BrandMotifs';
import { businessData } from '../../data/business';
import { Calendar, Instagram, CheckCircle } from 'lucide-react';

interface AboutStorySectionProps {
  onOpenBooking: () => void;
}

export const AboutStorySection: React.FC<AboutStorySectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Atmosphere & Premises Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Interior Photograph */}
              <div className="relative rounded-3xl border-2 border-ink bg-white p-3 shadow-brutal-xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-purple-soft">
                  <img
                    src="/images/real/shop_interior_real.jpg"
                    alt="Barber chair and workstation at Capital Barbers By Efi 46 George Street Manchester"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/70 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-ink/80 backdrop-blur-md p-3 text-white">
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-highlight">
                      Manchester City Centre
                    </span>
                    <span className="font-display text-sm font-bold">
                      46 George Street (M1 4HF)
                    </span>
                  </div>
                </div>
              </div>

              {/* Overlapping Badge: Master Barber Efi */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 rounded-2xl border-2 border-ink bg-purple-deep p-4 text-white shadow-brutal max-w-xs z-20">
                <div className="flex items-center gap-3">
                  <BrandEmblem className="w-10 h-10 shrink-0" />
                  <div>
                    <span className="block font-display text-base font-extrabold text-white">
                      Crafted by Efi
                    </span>
                    <span className="text-xs text-purple-soft/90">
                      Master Barber & Founder
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Craft Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-purple-soft px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-purple-deep shadow-brutal-sm">
              <ManchesterBeeMotif className="w-4 h-4 text-purple-electric" />
              <span>The Philosophy Behind The Chair</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink leading-tight tracking-tight uppercase">
              NOT JUST A HAIRCUT.{' '}
              <span className="block text-purple-deep">
                A MANCHESTER{' '}
                <span className="relative inline-block text-purple-electric">
                  STANDARD.
                  <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3" color="#F0ABFC" />
                </span>
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
              <p>
                Located in the heart of Manchester on George Street (just moments from Chinatown and Portland Street), <strong className="text-ink font-bold">Capital Barbers By Efi</strong> was built to bring uncompromised precision back into men’s grooming.
              </p>
              <p>
                Founded by master barber <strong className="text-ink font-bold">Efi</strong>, our shop rejects the rushed, 15-minute conveyor-belt approach. Every appointment begins with an honest consultation assessing hair density, head shape, and natural growth patterns before picking up clippers or shears.
              </p>
              <p>
                Whether you need a skin fade blended to microscopic perfection, a razor-sharp sculpted beard, or a relaxing hot towel wet shave to decompress after work, we treat every chop as a signature of our reputation.
              </p>
            </div>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-purple-electric shrink-0" />
                <span className="font-display text-sm font-bold text-ink">
                  Personalised Style Consultation
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-purple-electric shrink-0" />
                <span className="font-display text-sm font-bold text-ink">
                  Traditional Turkish Hot Towel Rituals
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-purple-electric shrink-0" />
                <span className="font-display text-sm font-bold text-ink">
                  Open Late: 7 Days Till 11:00 PM
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-purple-electric shrink-0" />
                <span className="font-display text-sm font-bold text-ink">
                  Sanitised Equipment & Premium Oils
                </span>
              </div>
            </div>

            {/* Actions: High Contrast Booking & Instagram Link */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-purple-soft">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl border-2 border-ink bg-purple-electric px-7 py-4 font-display text-base font-extrabold uppercase tracking-wider text-white shadow-brutal transition-all hover:bg-purple-deep hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-highlight" />
                <span>BOOK YOUR CHOP</span>
              </button>

              <a
                href={businessData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl border-2 border-ink bg-purple-soft px-6 py-4 font-display text-base font-bold uppercase tracking-wider text-purple-deep shadow-brutal-sm hover:bg-highlight hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <Instagram className="w-4 h-4 text-purple-deep" />
                <span>Follow {businessData.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
