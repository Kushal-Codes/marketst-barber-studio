import React, { useState } from 'react';
import { businessData, getStudioStatus } from '../../data/business';
import { BarberLogo } from '../illustrations/BarberMotifs';
import { Phone, Calendar, Menu, X, MessageSquare, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const status = getStudioStatus();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F12]/90 backdrop-blur-md border-b border-[#26242B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <BarberLogo className="w-9 h-9 text-amber-500 group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="font-serif font-black text-lg tracking-wider text-white uppercase group-hover:text-amber-400 transition-colors">
                Market St. Barber Studio
              </span>
              <span className="text-[11px] font-mono tracking-widest text-amber-500 uppercase">
                Droylsden · Manchester
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors">
              Service Menu & Prices
            </a>
            <a href="#gallery" className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors">
              Instagram Showcase
            </a>
            <a href="#location" className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors">
              Find Studio
            </a>
            <a href="#about" className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors">
              Zero Monthly Fees
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={businessData.booking.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1C1A22] border border-[#33303D] text-xs font-bold text-amber-400 hover:bg-[#25222E] transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-600/20 active:scale-95 transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-stone-950" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#1C1A22] border border-[#33303D] text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0F12] border-b border-[#26242B] px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#1C1A22] border border-[#33303D] text-xs">
            <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
            <span className="font-bold text-white">{status.statusText}</span>
          </div>

          <div className="grid grid-cols-1 gap-2 pt-2">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-stone-200 hover:bg-[#1C1A22]"
            >
              Service Menu & Prices
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-stone-200 hover:bg-[#1C1A22]"
            >
              Real Instagram Cuts
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-stone-200 hover:bg-[#1C1A22]"
            >
              92 Market St, Droylsden
            </a>
          </div>

          <div className="pt-3 border-t border-[#26242B] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-amber-500 text-stone-950 font-black text-sm uppercase tracking-wider text-center"
            >
              Book Appointment
            </button>
            <a
              href={businessData.phone.telLink}
              className="w-full py-2.5 rounded-xl bg-[#1C1A22] border border-[#33303D] text-white text-xs font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Call 07591 287327</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
