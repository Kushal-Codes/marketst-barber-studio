import React from 'react';
import { businessData, getStudioStatus } from '../../data/business';
import { MapPin, Navigation, Clock, Phone, Mail, Calendar, MessageSquare } from 'lucide-react';

export const LocationSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const status = getStudioStatus();

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#0F0F12] relative overflow-hidden border-t border-[#26242B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-950/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300 mb-4">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Studio Location & Opening Hours</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            FIND MARKET ST.{' '}
            <span className="text-amber-400 block sm:inline">
              BARBER STUDIO
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-300">
            Conveniently situated on Market Street in the heart of Droylsden with easy street parking and direct Metrolink transit access.
          </p>
        </div>

        {/* Studio Info & Hours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 7 Columns Address & Interactive Maps Card */}
          <div className="lg:col-span-7 rounded-3xl bg-[#16141D] border border-[#2B2834] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                  Street Address
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  92 Market Street
                </h3>
                <p className="text-stone-300 text-sm mt-0.5">
                  Droylsden, Manchester, M43 6DE
                </p>
              </div>

              <a
                href={businessData.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold uppercase tracking-wider shrink-0 transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>
            </div>

            {/* Embedded Interactive Google Map Preview Frame */}
            <div className="rounded-2xl overflow-hidden border border-[#2B2834] h-72 bg-stone-900 relative">
              <iframe
                title="Market St Barber Studio Droylsden Google Map"
                src="https://maps.google.com/maps?q=92+Market+Street,+Droylsden,+Manchester+M43+6DE&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-[#0F0F12]/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-amber-500/40 text-xs font-mono text-amber-300">
                📍 92 Market St · Droylsden
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href={businessData.phone.telLink}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#1C1A22] border border-[#2B2834] hover:border-amber-500 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase text-stone-400">
                    Phone Inquiries
                  </span>
                  <span className="font-sans text-sm font-bold text-white">
                    07591 287327
                  </span>
                </div>
              </a>

              <a
                href={businessData.booking.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#1C1A22] border border-[#2B2834] hover:border-emerald-500 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase text-stone-400">
                    WhatsApp Direct
                  </span>
                  <span className="font-sans text-sm font-bold text-emerald-400">
                    +44 7591 287327
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: 5 Columns Verified Hours Card */}
          <div className="lg:col-span-5 rounded-3xl bg-[#16141D] border border-[#2B2834] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#26242B] pb-4">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-amber-500" />
                <h3 className="font-serif text-xl font-bold text-white">
                  Studio Opening Times
                </h3>
              </div>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${status.isOpen ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40' : 'bg-amber-950 text-amber-400 border border-amber-500/40'}`}>
                {status.isOpen ? 'Open Now' : 'Closed'}
              </span>
            </div>

            <div className="space-y-3.5">
              {businessData.hours.map((schedule, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-3 rounded-2xl border transition-colors ${
                    schedule.isOpenToday
                      ? 'bg-[#1C1A22] border-[#33303D]'
                      : 'bg-[#121117] border-[#22202A] opacity-70'
                  }`}
                >
                  <span className="font-sans text-sm font-semibold text-stone-200">
                    {schedule.days}
                  </span>
                  <span className={`font-mono text-xs font-bold ${
                    schedule.isOpenToday ? 'text-amber-400' : 'text-stone-400'
                  }`}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#26242B]">
              <button
                onClick={onOpenBooking}
                className="w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
              >
                Book Your Chair Time
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
