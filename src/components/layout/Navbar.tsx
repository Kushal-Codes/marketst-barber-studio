import React, { useState } from 'react';
import { businessData, getStudioStatus } from '../../data/business';
import { Phone, Calendar, Menu, X, MessageSquare, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const status = getStudioStatus();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Brand with Real Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-ink shadow-brutal-sm group-hover:scale-105 transition-transform bg-purple-pale shrink-0">
              <img
                src={businessData.logoUrl}
                alt="Market St. Barber Studio Official Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg sm:text-xl tracking-tight text-ink uppercase group-hover:text-purple-electric transition-colors">
                Market St. Barber Studio
              </span>
              <span className="text-[11px] font-mono tracking-widest text-purple-electric uppercase font-bold flex items-center gap-1.5">
                <span>Droylsden · Manchester</span>
                <span className="text-[9px] bg-purple-soft text-purple-deep px-1.5 py-0.2 rounded font-bold">M43</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 font-display text-sm font-bold uppercase tracking-wide">
            <a href="#services" className="text-ink hover:text-purple-electric transition-colors">
              Prices & Services
            </a>
            <a href="#gallery" className="text-ink hover:text-purple-electric transition-colors">
              Our Work
            </a>
            <a href="#location" className="text-ink hover:text-purple-electric transition-colors">
              Location & Hours
            </a>
            <a href="#walk-ins" className="text-purple-deep hover:text-purple-electric transition-colors flex items-center gap-1">
              <span>Walk-ins Welcome</span>
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={businessData.booking.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-purple-pale border-2 border-ink text-xs font-display font-black uppercase text-purple-deep hover:bg-purple-soft transition-all shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Direct</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-electric text-white font-display font-black text-xs uppercase tracking-wider border-2 border-ink shadow-brutal hover:bg-purple-deep transition-all active:translate-x-0.5 active:translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-purple-pale border-2 border-ink text-ink shadow-brutal-sm"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b-2 border-ink px-4 pt-3 pb-6 space-y-4">
          <div className="flex items-center justify-between p-3 rounded-xl bg-purple-pale border-2 border-ink text-xs">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-purple-deep'}`} />
              <span className="font-display font-bold text-ink">{status.statusText}</span>
            </div>
            <span className="font-mono text-purple-deep font-bold">92 Market St</span>
          </div>

          <div className="grid grid-cols-1 gap-1 font-display font-bold text-sm">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-ink hover:bg-purple-soft"
            >
              ✂️ Services & Pricing (£13 - £40)
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-ink hover:bg-purple-soft"
            >
              📸 Our Work & Studio Chair Cuts
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-ink hover:bg-purple-soft"
            >
              📍 Droylsden Studio & Opening Times
            </a>
          </div>

          <div className="pt-2 border-t-2 border-ink flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-xl bg-purple-electric text-white font-display font-black text-sm uppercase tracking-wider text-center border-2 border-ink shadow-brutal"
            >
              Book Appointment
            </button>
            <a
              href={businessData.booking.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-50 border-2 border-ink text-emerald-800 text-xs font-display font-black uppercase flex items-center justify-center gap-2 shadow-brutal-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp (07591 287327)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
