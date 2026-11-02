import React from 'react';
import { ServiceItem } from '../../data/services';
import { ServiceIcon } from '../illustrations/BrandMotifs';
import { Clock, Check, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onBook: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onBook }) => {
  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl border-2 border-ink bg-white p-6 md:p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal-purple ${
        service.featured
          ? 'bg-gradient-to-b from-purple-pale/80 via-white to-white ring-2 ring-purple-electric/40 shadow-brutal'
          : 'shadow-brutal'
      }`}
    >
      {/* Top Header Badge & Tag */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl border-2 border-ink bg-purple-soft/80 p-2.5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-purple-deep group-hover:text-white">
            <ServiceIcon type={service.iconType} className="w-8 h-8 transition-colors group-hover:text-highlight" />
          </div>
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-purple-electric">
              <Clock className="w-3.5 h-3.5" />
              {service.duration}
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-ink leading-tight">
              {service.name}
            </h3>
          </div>
        </div>

        {/* Popular / Signature Stamp */}
        {service.popular && (
          <span className="shrink-0 rounded-full border border-ink bg-highlight px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-ink shadow-brutal-sm">
            Top Choice
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-ink-muted leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Bespoke Ticket Inclusions / What's Included */}
      <div className="mb-6 rounded-xl border border-purple-soft bg-purple-pale/50 p-3.5">
        <div className="text-[11px] font-bold uppercase tracking-wider text-purple-deep mb-2 flex items-center gap-1.5">
          <span>Craft Details</span>
        </div>
        <ul className="space-y-1.5">
          {service.includes.slice(0, 3).map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-ink/80 font-medium">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-purple-electric text-white">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Pricing & Call-to-action Row */}
      <div className="pt-4 border-t-2 border-dashed border-purple-soft flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="block text-[11px] uppercase font-bold tracking-wider text-ink-light">
            Verified Price
          </span>
          <span className="font-display text-3xl font-extrabold text-purple-deep tracking-tight">
            {service.priceFormatted}
          </span>
        </div>

        <button
          onClick={() => onBook(service)}
          className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink bg-purple-electric px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-white shadow-brutal-sm transition-all duration-150 hover:bg-purple-deep hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-electric"
          aria-label={`Book ${service.name} for ${service.priceFormatted}`}
        >
          <span>Book This Service</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </article>
  );
};
