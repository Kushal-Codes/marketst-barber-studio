import React, { useState } from 'react';
import { servicesData, BarberService } from '../../data/services';
import { businessData } from '../../data/business';
import { Scissors, Clock, Check, ArrowRight, Sparkles, Calendar, MessageSquare, Heart } from 'lucide-react';

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
    <section id="services" className="py-20 sm:py-28 bg-purple-pale relative overflow-hidden border-t-2 border-ink">
      
      {/* Background Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-purple-soft px-4 py-1.5 text-xs font-display font-black uppercase tracking-widest text-purple-deep shadow-brutal-sm mb-4">
            <Scissors className="w-3.5 h-3.5 text-purple-electric" />
            <span>Droylsden Service Menu</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-ink tracking-tight uppercase leading-tight">
            CRAFT SERVICE MENU &{' '}
            <span className="text-purple-electric block sm:inline">
              CLEAR RATES
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-ink-muted font-body">
            Transparent GBP rates for all haircuts, beard treatments, and full grooming packages. Cash and card payments accepted.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-display font-black uppercase tracking-wider transition-all border-2 border-ink ${
                  selectedCategory === cat
                    ? 'bg-purple-electric text-white shadow-brutal translate-x-0.5 translate-y-0.5'
                    : 'bg-white text-ink hover:bg-purple-soft shadow-brutal-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid (Appointment Ticket Styling) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border-2 border-ink shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 ${
                service.popular
                  ? 'bg-white ring-2 ring-purple-electric'
                  : 'bg-white'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3.5 right-6 rounded-full bg-purple-deep text-highlight px-3.5 py-1 text-[10px] font-display font-black uppercase tracking-wider border-2 border-ink shadow-brutal-sm">
                  ★ Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-purple-electric font-bold bg-purple-soft px-2.5 py-0.5 rounded-md">
                    {service.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-ink-muted">
                    <Clock className="w-3.5 h-3.5 text-purple-electric" />
                    <span>{service.durationLabel}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-black text-ink mb-2">
                  {service.name}
                </h3>

                <p className="text-sm font-body text-ink-muted leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Inclusions */}
                <div className="space-y-2 mb-6 pt-4 border-t-2 border-purple-pale">
                  {service.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-body font-semibold text-ink">
                      <Check className="w-3.5 h-3.5 text-purple-electric shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Price & Select Button */}
              <div className="pt-4 border-t-2 border-purple-soft flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase font-mono font-bold text-ink-light">
                    Price
                  </span>
                  <span className="font-display text-3xl font-black text-purple-deep">
                    £{service.priceGBP.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-purple-electric hover:bg-purple-deep text-white text-xs font-display font-black uppercase tracking-wider border-2 border-ink shadow-brutal-sm transition-all active:translate-x-0.5 active:translate-y-0.5"
                >
                  <span>Select & Book</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Customer-Facing Walk-in & Booking Convenience Banner */}
        <div id="walk-ins" className="mt-14 rounded-3xl border-2 border-ink bg-white p-6 sm:p-9 shadow-brutal-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-md bg-purple-soft border border-purple-deep/30 px-3 py-1 text-xs font-mono font-bold uppercase text-purple-deep">
                <Sparkles className="w-3.5 h-3.5 text-purple-electric" />
                <span>Walk-Ins Always Welcome</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-ink uppercase">
                Flexible Booking or Direct Walk-in Every Day
              </h3>
              <p className="font-body text-sm sm:text-base text-ink-muted leading-relaxed">
                Need a fresh cut on short notice? Feel free to drop by <strong>92 Market Street in Droylsden</strong>. We accept walk-ins throughout the week, or you can message us directly on WhatsApp to reserve your chair in advance.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 rounded-2xl bg-purple-pale border-2 border-ink space-y-2">
                <div className="flex items-center justify-between text-xs font-display font-bold">
                  <span className="text-ink">Mon, Wed – Sat:</span>
                  <span className="font-mono text-purple-deep font-black">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex items-center justify-between text-xs font-display font-bold">
                  <span className="text-ink">Sunday:</span>
                  <span className="font-mono text-purple-deep font-black">10:00 AM – 4:00 PM</span>
                </div>
                <div className="flex items-center justify-between text-xs font-display font-bold text-ink-muted border-t border-purple-deep/20 pt-2">
                  <span>Tuesday:</span>
                  <span className="font-mono text-purple-electric font-black">Closed (Rest Day)</span>
                </div>
              </div>

              <a
                href={businessData.booking.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-purple-electric hover:bg-purple-deep text-white font-display font-black text-xs uppercase tracking-wider border-2 border-ink shadow-brutal transition-all"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Message Us on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
