import React, { useState } from 'react';
import { HandDrawnUnderline } from '../illustrations/BrandMotifs';
import { soundManager } from '../animations/SoundEffects';
import { MapPin, Navigation, Car, Clock, Copy, Check, ExternalLink, Calendar } from 'lucide-react';
import { businessData } from '../../data/business';

interface ChinatownVisitPlannerProps {
  onOpenBooking: () => void;
}

const TRANSIT_HUBS = [
  { name: 'St Peter’s Square Metrolink', time: '4 mins walk', distance: '0.2 miles', line: 'All Tram Lines' },
  { name: 'Manchester Piccadilly Station', time: '6 mins walk', distance: '0.3 miles', line: 'Mainline Rail & Metro' },
  { name: 'Market Street / Arndale', time: '5 mins walk', distance: '0.3 miles', line: 'Shopping Quarter' },
  { name: 'Oxford Road Station', time: '8 mins walk', distance: '0.4 miles', line: 'Rail Connections' },
];

const PARKING_OPTIONS = [
  { name: 'George Street Pay & Display', type: 'On-street bays', distance: 'Directly outside', tip: 'Free after 8:00 PM' },
  { name: 'Faulkner Street Car Park', type: 'Surface parking', distance: '2 mins walk', tip: 'M1 4EE · 24/7' },
  { name: 'Q-Park Piazza', type: 'Covered secure multi-storey', distance: '2 mins walk', tip: '75 St James St · CCTV' },
];

const TIME_WINDOWS = [
  { time: '09:00 – 11:30', label: 'Morning Freshness', status: 'Near-zero wait', color: 'bg-emerald-500' },
  { time: '12:00 – 14:00', label: 'City Lunch Rush', status: 'Moderate', color: 'bg-amber-500' },
  { time: '14:30 – 17:00', label: 'Afternoon Flow', status: 'Smooth walk-ins', color: 'bg-emerald-500' },
  { time: '17:30 – 19:30', label: 'Post-Work Peak', status: 'Book ahead advised', color: 'bg-purple-electric' },
  { time: '20:00 – 23:00', label: 'Late Chinatown Vibe', status: 'Relaxed & open', color: 'bg-emerald-500' },
];

export const ChinatownVisitPlanner: React.FC<ChinatownVisitPlannerProps> = ({ onOpenBooking }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    soundManager.playClick();
    navigator.clipboard.writeText('46 George Street, Manchester, M1 4HF');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-purple-soft px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-purple-deep shadow-brutal-sm mb-4">
            <Navigation className="w-3.5 h-3.5 text-purple-electric" />
            <span>Central Manchester City Centre Hub</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight uppercase leading-tight">
            VISIT 46 GEORGE STREET{' '}
            <span className="relative inline-block text-purple-deep">
              CHINATOWN
              <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3" color="#7C3AED" />
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-ink-muted">
            Easy walking distance from all major Manchester stations. Drop in during your commute or plan your late-night visit.
          </p>
        </div>

        {/* 3-Column Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Column 1: Walking Times */}
          <div className="rounded-3xl border-2 border-ink bg-canvas p-6 sm:p-7 shadow-brutal flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-purple-soft border-2 border-ink flex items-center justify-center text-purple-electric">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-ink text-lg uppercase">
                    Walking Distance
                  </h3>
                  <span className="text-xs text-ink-muted">From Central Stations</span>
                </div>
              </div>

              <div className="space-y-3.5">
                {TRANSIT_HUBS.map((hub) => (
                  <div
                    key={hub.name}
                    className="p-3.5 rounded-2xl bg-white border-2 border-ink shadow-brutal-sm flex items-center justify-between gap-3"
                  >
                    <div>
                      <span className="font-display font-bold text-sm text-ink block">
                        {hub.name}
                      </span>
                      <span className="text-[11px] text-ink-muted">{hub.line}</span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-mono text-xs font-black text-purple-deep bg-purple-soft px-2.5 py-1 rounded-lg block">
                        {hub.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-ink-muted pt-4 mt-4 border-t border-purple-pale">
              Steps away from Manchester Art Gallery and Chinatown Arch.
            </p>
          </div>

          {/* Column 2: Parking Guide */}
          <div className="rounded-3xl border-2 border-ink bg-canvas p-6 sm:p-7 shadow-brutal flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-purple-soft border-2 border-ink flex items-center justify-center text-purple-electric">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-ink text-lg uppercase">
                    Nearby Parking
                  </h3>
                  <span className="text-xs text-ink-muted">Chinatown Car Parks</span>
                </div>
              </div>

              <div className="space-y-3.5">
                {PARKING_OPTIONS.map((pkg) => (
                  <div
                    key={pkg.name}
                    className="p-3.5 rounded-2xl bg-white border-2 border-ink shadow-brutal-sm space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-sm text-ink">
                        {pkg.name}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-purple-deep">
                        {pkg.distance}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-ink-muted">
                      <span>{pkg.type}</span>
                      <span className="text-[11px] font-medium text-purple-electric">
                        {pkg.tip}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-ink-muted pt-4 mt-4 border-t border-purple-pale">
              Evening parking on George St is free after 8:00 PM.
            </p>
          </div>

          {/* Column 3: Daily Wait Time & Busyness Guide */}
          <div className="rounded-3xl border-2 border-ink bg-canvas p-6 sm:p-7 shadow-brutal flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-purple-soft border-2 border-ink flex items-center justify-center text-purple-electric">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-ink text-lg uppercase">
                    When To Visit
                  </h3>
                  <span className="text-xs text-ink-muted">Chair Busyness Guide</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {TIME_WINDOWS.map((win) => (
                  <div
                    key={win.time}
                    className="p-3 rounded-2xl bg-white border border-ink/80 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${win.color} shrink-0`} />
                      <span className="font-mono font-bold text-ink">{win.time}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-purple-deep">{win.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-ink-muted pt-4 mt-4 border-t border-purple-pale">
              Open until 11:00 PM every night — no need to rush after work!
            </p>
          </div>
        </div>

        {/* Action Bar */}
        <div className="p-6 rounded-3xl border-2 border-ink bg-purple-pale/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <MapPin className="w-6 h-6 text-purple-deep shrink-0" />
            <div>
              <span className="font-display font-bold text-sm text-ink block">
                Capital Barbers By Efi · 46 George Street, Manchester, M1 4HF
              </span>
              <span className="text-xs text-ink-muted">
                Centrally located in Chinatown between Princess St and Nicholas St
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleCopyAddress}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border-2 border-ink bg-white text-xs font-bold font-mono text-ink shadow-brutal-sm hover:bg-purple-soft transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED!' : 'COPY ADDRESS'}</span>
            </button>

            <a
              href={businessData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border-2 border-ink bg-white text-xs font-bold font-mono text-ink shadow-brutal-sm hover:bg-purple-soft transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>MAPS ROUTE</span>
            </a>

            <button
              type="button"
              onClick={() => {
                soundManager.playSnip();
                onOpenBooking();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl border-2 border-ink bg-purple-electric text-xs font-extrabold uppercase text-white shadow-brutal-sm hover:bg-purple-deep transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK VISIT</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
