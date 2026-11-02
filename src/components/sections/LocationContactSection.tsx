import React from 'react';
import { businessData, getShopLiveStatus } from '../../data/business';
import { HandDrawnUnderline } from '../illustrations/BrandMotifs';
import { MapPin, Phone, Mail, Clock, Navigation, Calendar, Instagram, ExternalLink } from 'lucide-react';

interface LocationContactSectionProps {
  onOpenBooking: () => void;
}

export const LocationContactSection: React.FC<LocationContactSectionProps> = ({ onOpenBooking }) => {
  const liveStatus = getShopLiveStatus();

  // Get current day of week to highlight in table
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = days[new Date().getDay()];

  return (
    <section id="location" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-purple-soft px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-purple-deep shadow-brutal-sm mb-4">
            <MapPin className="w-3.5 h-3.5 text-purple-electric" />
            <span>Chinatown / Central Manchester</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight uppercase leading-tight">
            FIND YOUR WAY TO{' '}
            <span className="relative inline-block text-purple-deep">
              CAPITAL BARBERS BY EFI.
              <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3" color="#F0ABFC" />
            </span>
          </h2>

          <p className="mt-4 text-lg text-ink-muted">
            Conveniently situated at 46 George Street, between Portland Street and Princess Street. Moments from St Peter’s Square and Piccadilly.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Schedule Table (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Live Status Card */}
            <div className="rounded-3xl border-2 border-ink bg-purple-soft/50 p-6 shadow-brutal">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-display text-sm font-extrabold uppercase tracking-wider text-purple-deep">
                    {liveStatus.statusText}
                  </span>
                </div>
                <span className="rounded-full bg-white border border-ink px-3 py-1 text-xs font-bold text-ink">
                  UK Local Time
                </span>
              </div>
              <p className="text-sm text-ink-muted">
                {liveStatus.timeDetail}. Walk-ins are always welcomed or secure your appointment in advance.
              </p>
            </div>

            {/* Verified Hours Table */}
            <div className="rounded-3xl border-2 border-ink bg-white p-6 shadow-brutal">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b-2 border-purple-pale">
                <Clock className="w-5 h-5 text-purple-electric" />
                <h3 className="font-display text-lg font-bold text-ink uppercase tracking-wider">
                  Weekly Opening Hours
                </h3>
              </div>

              <div className="space-y-2">
                {businessData.hours.map((item) => {
                  const isToday = item.day.toLowerCase() === todayName.toLowerCase();
                  return (
                    <div
                      key={item.day}
                      className={`flex justify-between items-center px-3 py-2 rounded-xl text-sm transition-colors ${
                        isToday
                          ? 'bg-purple-deep text-white font-bold shadow-brutal-sm'
                          : 'text-ink-muted hover:bg-purple-pale'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.day}</span>
                        {isToday && (
                          <span className="rounded-full bg-highlight px-2 py-0.5 text-[10px] font-extrabold uppercase text-ink">
                            Today
                          </span>
                        )}
                      </div>
                      <span className={isToday ? 'text-highlight font-mono' : 'font-mono text-ink font-semibold'}>
                        {item.formatted}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={businessData.phone.telLink}
                className="group flex items-center gap-3.5 rounded-2xl border-2 border-ink bg-white p-4 shadow-brutal-sm hover:shadow-brutal-purple hover:-translate-y-0.5 transition-all"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-ink bg-purple-soft text-purple-deep group-hover:bg-purple-electric group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-ink-light">
                    Direct Telephone
                  </span>
                  <span className="font-display text-sm font-bold text-ink">
                    {businessData.phone.display}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${businessData.email}`}
                className="group flex items-center gap-3.5 rounded-2xl border-2 border-ink bg-white p-4 shadow-brutal-sm hover:shadow-brutal-purple hover:-translate-y-0.5 transition-all"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-ink bg-purple-soft text-purple-deep group-hover:bg-purple-electric group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-ink-light">
                    Direct Email
                  </span>
                  <span className="font-display text-xs font-bold text-ink truncate">
                    {businessData.email}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Visual & Action Buttons (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Visual Map Card */}
            <div className="rounded-3xl border-2 border-ink bg-white p-4 shadow-brutal-lg overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-purple-pale border border-purple-soft">
                {/* Stylized Map Canvas / Embed */}
                <iframe
                  title="Capital Barbers By Efi Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.320492801452!2d-2.242813523318998!3d53.47914217232822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1b5a9190589%3A0xdfedc5d3ddd62ae3!2sCapital%20_Barbers%20_By%20Efi!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Overlaid Location Badge */}
                <div className="absolute bottom-3 left-3 right-3 rounded-xl border-2 border-ink bg-white/95 backdrop-blur-md p-3 shadow-brutal-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block font-display text-sm font-bold text-ink">
                        Capital Barbers By Efi
                      </span>
                      <span className="text-xs text-ink-muted">
                        46 George Street, Manchester, M1 4HF
                      </span>
                    </div>
                    <a
                      href={businessData.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-purple-electric px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-purple-deep transition-colors"
                    >
                      Directions ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs: Get Directions + Book Now */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={businessData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-white px-6 py-4 font-display text-base font-bold uppercase tracking-wider text-ink shadow-brutal hover:bg-purple-soft hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-center"
              >
                <Navigation className="w-4 h-4 text-purple-electric" />
                <span>GET DIRECTIONS</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-purple-electric px-6 py-4 font-display text-base font-extrabold uppercase tracking-wider text-white shadow-brutal hover:bg-purple-deep hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-center"
              >
                <Calendar className="w-4 h-4 text-highlight" />
                <span>BOOK YOUR CHOP</span>
              </button>
            </div>

            {/* Social Profile Row */}
            <div className="flex items-center justify-between rounded-2xl border border-purple-soft bg-purple-pale/40 p-4">
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-purple-electric" />
                <span className="text-sm font-bold text-ink">
                  Instagram: {businessData.instagramHandle}
                </span>
              </div>
              <a
                href={businessData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-wider text-purple-electric hover:underline flex items-center gap-1"
              >
                <span>View Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
