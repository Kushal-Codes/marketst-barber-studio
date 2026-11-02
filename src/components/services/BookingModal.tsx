import React, { useEffect, useState } from 'react';
import { ServiceItem, servicesData } from '../../data/services';
import { businessData, getShopLiveStatus } from '../../data/business';
import { Phone, MessageSquare, ExternalLink, X, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { BrandEmblem } from '../illustrations/BrandMotifs';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedService,
}) => {
  const [currentServiceId, setCurrentServiceId] = useState<string>(
    selectedService?.id || servicesData[0].id
  );

  useEffect(() => {
    if (selectedService) {
      setCurrentServiceId(selectedService.id);
    }
  }, [selectedService]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activeService = servicesData.find((s) => s.id === currentServiceId) || servicesData[0];
  const liveStatus = getShopLiveStatus();

  // WhatsApp pre-filled booking message URL
  const whatsappMessage = encodeURIComponent(
    `Hello Efi, I'd like to book an appointment for "${activeService.name}" (${activeService.priceFormatted}) at Capital Barbers, 46 George Street.`
  );
  const whatsappUrl = `https://wa.me/447539635060?text=${whatsappMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl border-2 border-ink bg-white p-6 sm:p-8 shadow-brutal-xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full border-2 border-ink bg-purple-soft p-2 text-ink hover:bg-highlight transition-colors focus:outline-none focus:ring-2 focus:ring-purple-electric"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-6">
          <BrandEmblem className="w-12 h-12 shrink-0 drop-shadow-sm" />
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-electric">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              {liveStatus.statusText}
            </span>
            <h2 id="booking-modal-title" className="font-display text-2xl sm:text-3xl font-extrabold text-ink leading-tight">
              BOOK YOUR CHOP
            </h2>
          </div>
        </div>

        {/* Selected Service Ticket Card */}
        <div className="mb-6 rounded-2xl border-2 border-ink bg-purple-pale/70 p-4 sm:p-5 relative">
          <label className="block text-xs font-bold uppercase tracking-wider text-purple-deep mb-2">
            Selected Service / Offering
          </label>
          <select
            value={currentServiceId}
            onChange={(e) => setCurrentServiceId(e.target.value)}
            className="w-full rounded-xl border-2 border-ink bg-white px-3.5 py-2.5 font-display text-base font-bold text-ink focus:border-purple-electric focus:outline-none focus:ring-2 focus:ring-purple-soft"
          >
            {servicesData.map((svc) => (
              <option key={svc.id} value={svc.id}>
                {svc.name} — {svc.priceFormatted} ({svc.duration})
              </option>
            ))}
          </select>

          <div className="mt-3 flex items-center justify-between text-xs sm:text-sm text-ink-muted">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-purple-electric" />
              Duration: {activeService.duration}
            </span>
            <span className="font-display font-extrabold text-lg text-purple-deep">
              {activeService.priceFormatted}
            </span>
          </div>
        </div>

        {/* Verified Booking Notice */}
        <p className="text-sm text-ink-muted leading-relaxed mb-6">
          To ensure real appointment availability without double-booking, Capital Barbers By Efi manages appointments directly. Choose your preferred booking method:
        </p>

        {/* Action 1: Direct Telephone Call (Authoritative) */}
        <div className="space-y-3 mb-6">
          <a
            href={businessData.phone.telLink}
            className="group flex items-center justify-between w-full rounded-2xl border-2 border-ink bg-purple-electric p-4 text-white shadow-brutal transition-all hover:bg-purple-deep hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/40 bg-white/10 text-white">
                <Phone className="w-5 h-5 animate-bounce-subtle" />
              </div>
              <div className="text-left">
                <span className="block text-[11px] font-extrabold uppercase tracking-widest text-highlight">
                  Instant Confirmation (Recommended)
                </span>
                <span className="font-display text-lg sm:text-xl font-bold">
                  Call {businessData.phone.display}
                </span>
              </div>
            </div>
            <span className="rounded-lg bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
              Dial Now
            </span>
          </a>

          {/* Action 2: WhatsApp / Text Message Direct */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full rounded-2xl border-2 border-ink bg-white p-4 text-ink shadow-brutal-sm transition-all hover:bg-purple-soft/60 hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink bg-emerald-100 text-emerald-700">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-ink-light">
                  Message Efi Directly
                </span>
                <span className="font-display text-base font-bold text-ink">
                  WhatsApp / SMS Booking
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-ink-light group-hover:text-purple-electric transition-colors" />
          </a>

          {/* Action 3: Booksy Online Booking */}
          <a
            href={businessData.booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full rounded-2xl border-2 border-ink bg-white p-4 text-ink shadow-brutal-sm transition-all hover:bg-purple-soft/60 hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink bg-purple-soft text-purple-deep">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-ink-light">
                  Self-Service Portal
                </span>
                <span className="font-display text-base font-bold text-ink">
                  Book on Booksy Platform
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-ink-light group-hover:text-purple-electric transition-colors" />
          </a>
        </div>

        {/* Walk-in & Location footer note */}
        <div className="rounded-xl border border-purple-soft bg-purple-soft/30 p-3.5 text-xs text-ink-muted flex items-start gap-2.5">
          <MapPin className="w-4 h-4 text-purple-electric shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-ink">Walk-ins always welcome: </span>
            {businessData.address.fullFormatted}. Open 7 days a week from 9:00 AM until 11:00 PM.
          </div>
        </div>
      </div>
    </div>
  );
};
