import React from 'react';
import { businessData } from '../../data/business';
import { BarberLogo } from '../illustrations/BarberMotifs';
import { MapPin, Phone, MessageSquare, Instagram, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0C] border-t border-[#26242B] pt-16 pb-24 sm:pb-16 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#26242B]">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BarberLogo className="w-8 h-8 text-amber-500" />
              <span className="font-serif font-black text-xl text-white tracking-wider uppercase">
                Market St. Barber Studio
              </span>
            </div>
            <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
              Droylsden's premier independent barber studio. Precision skin fades, beard shaping, and traditional hot towel grooming.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#16141D] border border-[#2B2834] text-amber-400 hover:text-white hover:border-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={businessData.booking.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#16141D] border border-[#2B2834] text-emerald-400 hover:text-white hover:border-emerald-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Studio Location */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Studio Address
            </h4>
            <div className="space-y-2 text-sm">
              <p className="flex items-start gap-2.5 text-stone-300">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>92 Market Street, Droylsden, Manchester M43 6DE</span>
              </p>
              <p className="flex items-center gap-2.5 text-stone-300">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={businessData.phone.telLink} className="hover:text-amber-400">
                  07591 287327
                </a>
              </p>
            </div>
          </div>

          {/* Col 3: Hours & Guarantee */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Direct Guarantee
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              100% Free Hosting forever. Zero monthly subscription costs or third-party client booking commissions.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 pt-2"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Market St. Barber Studio. All rights reserved.</p>
          <p className="font-mono text-amber-500/80">92 Market Street · Droylsden · Manchester</p>
        </div>

      </div>
    </footer>
  );
};
