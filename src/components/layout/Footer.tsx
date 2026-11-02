import React from 'react';
import { businessData } from '../../data/business';
import { MapPin, Phone, MessageSquare, ArrowUp, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink text-white pt-16 pb-24 sm:pb-16 border-t-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-deep/40">
          
          {/* Col 1: Brand Info & Real Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-highlight bg-white shrink-0">
                <img
                  src={businessData.logoUrl}
                  alt="Market St. Barber Studio Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl text-white tracking-wider uppercase">
                  Market St. Barber Studio
                </span>
                <span className="text-xs font-mono text-highlight tracking-widest uppercase">
                  Droylsden · Manchester M43
                </span>
              </div>
            </div>

            <p className="text-sm font-body text-purple-soft/80 max-w-sm leading-relaxed">
              Droylsden's premier modern barber studio. Precision skin fades, beard shaping, and traditional steamed hot towel grooming.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-purple-deep border border-highlight/40 text-xs font-display font-bold text-white hover:bg-purple-electric transition-colors"
              >
                Official Facebook Page
              </a>
              <a
                href={businessData.booking.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-emerald-600/30 border border-emerald-500/40 text-xs font-display font-bold text-emerald-300 hover:bg-emerald-600/50 transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Studio Location */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display text-sm font-black uppercase tracking-wider text-highlight">
              Studio Address
            </h4>
            <div className="space-y-2 text-sm font-body">
              <p className="flex items-start gap-2.5 text-stone-300">
                <MapPin className="w-4 h-4 text-highlight shrink-0 mt-0.5" />
                <span>92 Market Street, Droylsden, Manchester M43 6DE</span>
              </p>
              <p className="flex items-center gap-2.5 text-stone-300">
                <Phone className="w-4 h-4 text-highlight shrink-0" />
                <a href={businessData.phone.telLink} className="hover:text-white">
                  07591 287327
                </a>
              </p>
            </div>
          </div>

          {/* Col 3: Direct Guarantee */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-black uppercase tracking-wider text-highlight">
              Free Hosting Guarantee
            </h4>
            <p className="text-xs font-body text-purple-soft/80 leading-relaxed">
              100% Free Hosting forever. Zero monthly subscription costs or third-party client booking commissions.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-display font-black uppercase text-highlight hover:text-white pt-2"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-purple-soft/60">
          <p>© {new Date().getFullYear()} Market St. Barber Studio. All rights reserved.</p>
          <p className="text-highlight/80">92 Market Street · Droylsden · Manchester M43</p>
        </div>

      </div>
    </footer>
  );
};
