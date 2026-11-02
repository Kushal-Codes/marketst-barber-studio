import React from 'react';
import { businessData, getStudioStatus } from '../../data/business';
import { MapPin, Navigation, Clock, Phone, Mail, Calendar, MessageSquare } from 'lucide-react';

export const LocationSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const status = getStudioStatus();

  return (
    <section id="location" className="py-20 sm:py-28 bg-purple-pale relative overflow-hidden border-t-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-purple-soft px-4 py-1.5 text-xs font-display font-black uppercase tracking-widest text-purple-deep shadow-brutal-sm mb-4">
            <MapPin className="w-3.5 h-3.5 text-purple-electric" />
            <span>Studio Location & Opening Times</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-ink tracking-tight uppercase leading-tight">
            FIND MARKET ST.{' '}
            <span className="text-purple-electric block sm:inline">
              BARBER STUDIO
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-ink-muted font-body">
            Located right on Market Street in the heart of Droylsden. Ample roadside parking and easily reachable via Manchester Metrolink.
          </p>
        </div>

        {/* Location & Hours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 7 Columns Address & Interactive Map */}
          <div className="lg:col-span-7 rounded-3xl bg-white border-2 border-ink p-6 sm:p-8 space-y-6 shadow-brutal-lg">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-purple-electric font-black">
                  Droylsden Address
                </span>
                <h3 className="font-display text-2xl font-black text-ink mt-1">
                  92 Market Street
                </h3>
                <p className="text-ink-muted text-sm font-body">
                  Droylsden, Manchester, M43 6DE, United Kingdom
                </p>
              </div>

              <a
                href={businessData.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-electric hover:bg-purple-deep text-white text-xs font-display font-black uppercase tracking-wider border-2 border-ink shadow-brutal-sm shrink-0 transition-all active:translate-x-0.5 active:translate-y-0.5"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>
            </div>

            {/* Embedded Google Map Preview Frame */}
            <div className="rounded-2xl overflow-hidden border-2 border-ink h-72 bg-purple-pale relative">
              <iframe
                title="Market St Barber Studio Droylsden Map"
                src="https://maps.google.com/maps?q=92+Market+Street,+Droylsden,+Manchester+M43+6DE&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 border-2 border-ink px-3 py-1.5 rounded-xl shadow-brutal-sm text-xs font-mono font-bold text-purple-deep">
                📍 92 Market St · Droylsden M43
              </div>
            </div>

            {/* Quick Action Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href={businessData.phone.telLink}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-purple-pale border-2 border-ink hover:bg-purple-soft transition-colors shadow-brutal-sm"
              >
                <div className="p-2.5 rounded-xl bg-white border border-ink text-purple-electric">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase text-ink-light font-bold">
                    Direct Phone Line
                  </span>
                  <span className="font-display text-sm font-bold text-ink">
                    07591 287327
                  </span>
                </div>
              </a>

              <a
                href={businessData.booking.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-50 border-2 border-ink hover:bg-emerald-100 transition-colors shadow-brutal-sm"
              >
                <div className="p-2.5 rounded-xl bg-white border border-ink text-emerald-600">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase text-emerald-700 font-bold">
                    WhatsApp Direct
                  </span>
                  <span className="font-display text-sm font-bold text-emerald-800">
                    +44 7591 287327
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: 5 Columns Verified Hours Card */}
          <div className="lg:col-span-5 rounded-3xl bg-white border-2 border-ink p-6 sm:p-8 space-y-6 shadow-brutal-lg">
            <div className="flex items-center justify-between border-b-2 border-purple-pale pb-4">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-purple-electric" />
                <h3 className="font-display text-xl font-black text-ink">
                  Studio Opening Times
                </h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-display font-black border-2 border-ink ${status.isOpen ? 'bg-emerald-100 text-emerald-800 shadow-brutal-sm' : 'bg-purple-soft text-purple-deep'}`}>
                {status.isOpen ? 'Open Now' : 'Closed'}
              </span>
            </div>

            <div className="space-y-3">
              {businessData.hours.map((schedule, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-3 rounded-2xl border-2 border-ink transition-colors ${
                    schedule.isOpenToday
                      ? 'bg-purple-pale shadow-brutal-sm'
                      : 'bg-stone-50 opacity-60'
                  }`}
                >
                  <span className="font-display text-sm font-bold text-ink">
                    {schedule.days}
                  </span>
                  <span className={`font-mono text-xs font-black ${
                    schedule.isOpenToday ? 'text-purple-deep' : 'text-ink-light'
                  }`}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t-2 border-purple-pale">
              <button
                onClick={onOpenBooking}
                className="w-full py-4 rounded-2xl bg-purple-electric hover:bg-purple-deep text-white font-display font-black text-sm uppercase tracking-wider border-2 border-ink shadow-brutal active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                Book Chair in Droylsden
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
