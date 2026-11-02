import React, { useState } from 'react';
import { servicesData, BarberService } from '../../data/services';
import { businessData } from '../../data/business';
import { X, Calendar, Clock, Check, MessageSquare, ExternalLink, MapPin } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border-2 border-ink p-6 sm:p-8 shadow-brutal-xl text-ink max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-purple-pale border-2 border-ink text-ink hover:text-purple-electric shadow-brutal-sm"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1">
          <div className="flex items-center gap-2 mb-2">
            <img
              src={businessData.logoUrl}
              alt="Logo"
              className="w-8 h-8 rounded-full border border-ink object-cover"
            />
            <span className="text-xs font-mono uppercase tracking-widest text-purple-electric font-black">
              Market St. Barber Studio
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-black text-ink">
            Book Your Chair
          </h3>
          <p className="text-xs font-body text-ink-muted">
            Select your haircut or beard grooming service to send a quick WhatsApp booking or open our online appointment portal.
          </p>
        </div>

        {/* Service Picker */}
        <div className="space-y-4 mb-6">
          <label className="block text-xs font-display font-black uppercase tracking-wider text-ink">
            Choose Service (£13 - £40)
          </label>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                onClick={() => setSelectedService(svc)}
                className={`p-3 rounded-2xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                  selectedService.id === svc.id
                    ? 'bg-purple-soft border-ink shadow-brutal-sm'
                    : 'bg-purple-pale border-ink/40 hover:border-ink'
                }`}
              >
                <div>
                  <span className="block font-display text-sm font-bold text-ink">
                    {svc.name}
                  </span>
                  <span className="text-[11px] font-mono text-ink-light font-bold">
                    {svc.durationLabel} · {svc.category}
                  </span>
                </div>
                <span className="font-display text-base font-black text-purple-deep">
                  £{svc.priceGBP.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Name input */}
        <div className="mb-5">
          <label className="block text-xs font-display font-black uppercase tracking-wider text-ink mb-1.5">
            Your Name (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. Liam, Callum, John"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-purple-pale border-2 border-ink text-sm font-body text-ink focus:outline-none focus:border-purple-electric"
          />
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-1">
          {/* WhatsApp Direct */}
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-black text-sm uppercase tracking-wider border-2 border-ink shadow-brutal transition-all active:translate-x-0.5 active:translate-y-0.5"
          >
            <MessageSquare className="w-5 h-5 text-white" />
            <span>Send Booking on WhatsApp (07591 287327)</span>
          </a>

          {/* Square Appointments Platform Fallback */}
          <a
            href={businessData.booking.squareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white border-2 border-ink text-ink hover:bg-purple-pale text-xs font-display font-bold uppercase tracking-wider shadow-brutal-sm transition-all"
          >
            <span>Or Book via Square Appointments</span>
            <ExternalLink className="w-3.5 h-3.5 text-ink-light" />
          </a>
        </div>

        {/* Studio Location Note */}
        <div className="mt-5 p-3 rounded-xl bg-purple-pale border-2 border-ink text-center">
          <p className="text-[11px] text-purple-deep font-mono font-bold flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-purple-electric" />
            <span>92 Market Street · Droylsden, Manchester M43 6DE</span>
          </p>
        </div>

      </div>
    </div>
  );
};
