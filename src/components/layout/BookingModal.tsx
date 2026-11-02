import React, { useState } from 'react';
import { servicesData, BarberService } from '../../data/services';
import { businessData } from '../../data/business';
import { X, Calendar, Clock, Check, MessageSquare, ExternalLink } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: BarberService | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedService: initialService
}) => {
  const [selectedService, setSelectedService] = useState<BarberService>(
    initialService || servicesData[0]
  );
  const [preferredDate, setPreferredDate] = useState<string>('Today / Next Available');
  const [preferredTime, setPreferredTime] = useState<string>('Afternoon (12:00 - 15:00)');
  const [clientName, setClientName] = useState<string>('');

  if (!isOpen) return null;

  const generateWhatsAppUrl = () => {
    const text = `Hi Market St. Barber Studio! I would like to book an appointment:%0A%0A✂️ Service: ${selectedService.name} (£${selectedService.priceGBP.toFixed(2)})%0A⏱️ Duration: ${selectedService.durationLabel}%0A📅 Preferred Day: ${preferredDate}%0A⏰ Preferred Time: ${preferredTime}${clientName ? `%0A👤 Name: ${clientName}` : ''}%0A%0APlease let me know your available slots today. Thank you!`;
    return `https://wa.me/447591287327?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#16141D] border-2 border-amber-500/60 p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1C1A22] border border-[#33303D] text-stone-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
            Studio Appointment Request
          </span>
          <h3 className="font-serif text-2xl font-black">
            Book at Market St. Barber Studio
          </h3>
          <p className="text-xs text-stone-300">
            Select your haircut or beard service below to generate an instant WhatsApp booking or open the Square portal.
          </p>
        </div>

        {/* Service Picker */}
        <div className="space-y-4 mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-300">
            Choose Service
          </label>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                onClick={() => setSelectedService(svc)}
                className={`p-3 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                  selectedService.id === svc.id
                    ? 'bg-amber-950/60 border-amber-500 text-white'
                    : 'bg-[#1C1A22] border-[#2B2834] text-stone-300 hover:border-amber-500/40'
                }`}
              >
                <div>
                  <span className="block font-serif text-sm font-bold">
                    {svc.name}
                  </span>
                  <span className="text-[11px] text-stone-400">
                    {svc.durationLabel} · {svc.category}
                  </span>
                </div>
                <span className="font-serif text-base font-bold text-amber-400">
                  £{svc.priceGBP.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Name input */}
        <div className="mb-4">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
            Your Name (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. Liam, Callum, John"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-[#1C1A22] border border-[#33303D] text-sm text-white focus:outline-none focus:border-amber-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          {/* WhatsApp Direct */}
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-emerald-900/30 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Booking on WhatsApp (07591 287327)</span>
          </a>

          {/* Square Appointments Platform Fallback */}
          <a
            href={businessData.booking.squareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#1C1A22] border border-[#33303D] text-stone-200 hover:border-amber-500 text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>Or Book via Square Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Value Proposition Note */}
        <div className="mt-5 p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-center">
          <p className="text-[11px] text-amber-300 font-mono">
            ⚡ Hosted 100% Free for Market St. Barber Studio · Zero Monthly Subscription Fees
          </p>
        </div>

      </div>
    </div>
  );
};
