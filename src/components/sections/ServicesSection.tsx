import React, { useState } from 'react';
import { servicesData, BarberService } from '../../data/services';
import { businessData } from '../../data/business';
import { Scissors, Clock, Sparkles, Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: BarberService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Cuts & Fades', 'Beard & Shave', 'Combos & VIP'];

  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0F0F12] relative overflow-hidden border-t border-[#26242B]">
      
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#2B2834_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-950/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300 mb-4">
            <Scissors className="w-3.5 h-3.5 text-amber-500" />
            <span>Verified Official Service Menu</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            CRAFT SERVICE MENU &{' '}
            <span className="text-amber-400 block sm:inline">
              CLEAR PRICING
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-300">
            Transparent GBP rates verified directly from our Droylsden studio booking calendar. Zero hidden add-ons or subscription fees.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                    : 'bg-[#1C1A22] text-stone-300 hover:text-white border border-[#33303D]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border ${
                service.popular
                  ? 'bg-gradient-to-b from-[#1E1B26] to-[#14121A] border-amber-500/60 shadow-xl shadow-amber-950/30 ring-1 ring-amber-500/40'
                  : 'bg-[#16141D] border-[#2B2834] hover:border-amber-500/40'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3.5 right-6 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-stone-950 shadow-md">
                  Most Booked
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                    {service.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-stone-400">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>{service.durationLabel}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                  {service.name}
                </h3>

                <p className="text-sm text-stone-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Inclusions */}
                <div className="space-y-2 mb-6 pt-4 border-t border-[#26242B]">
                  {service.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-stone-300">
                      <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Price & Book Button */}
              <div className="pt-4 border-t border-[#26242B] flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase font-mono text-stone-400">
                    Studio Rate
                  </span>
                  <span className="font-serif text-2xl font-black text-amber-400">
                    £{service.priceGBP.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold uppercase tracking-wider shadow-md transition-all active:scale-95"
                >
                  <span>Select</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Free Hosting vs Square Platform Notice Banner */}
        <div className="mt-12 rounded-3xl border border-amber-500/40 bg-gradient-to-r from-amber-950/40 via-[#1C1A22] to-amber-950/40 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-block rounded-md bg-amber-500/20 text-amber-400 px-2.5 py-0.5 text-xs font-mono font-bold uppercase">
                Direct Studio Advantage
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Zero Monthly Subscription Fees for Market St.
              </h4>
              <p className="text-sm text-stone-300 max-w-2xl">
                Unlike Square or Squarespace websites that charge £15–£35 every single month, this dedicated custom web deployment comes with free ultra-fast global hosting included forever.
              </p>
            </div>

            <a
              href={businessData.booking.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm uppercase tracking-wider shadow-lg shrink-0 transition-all"
            >
              <span>Confirm on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
