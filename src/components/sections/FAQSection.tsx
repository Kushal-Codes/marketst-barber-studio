import React, { useState } from 'react';
import { HandDrawnUnderline } from '../illustrations/BrandMotifs';
import { soundManager } from '../animations/SoundEffects';
import { HelpCircle, ChevronDown, Phone, Calendar, Sparkles } from 'lucide-react';
import { businessData } from '../../data/business';

interface FAQItem {
  question: string;
  answer: string;
  tag: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Do I need to book in advance or are walk-ins welcome?',
    answer: 'Both! Walk-ins are always warmly welcomed at 46 George Street. However, to guarantee your chair with master barber Efi with zero waiting time—especially during peak evening hours—we recommend booking online or calling ahead.',
    tag: 'Walk-ins & Bookings',
  },
  {
    question: 'Are you genuinely open until 11:00 PM every single night?',
    answer: 'Yes! Capital Barbers By Efi is proudly open Monday through Sunday from 9:00 AM until 11:00 PM (7 days a week). Perfect for after-work appointments, pre-event grooming, and late-night Manchester city centre visits.',
    tag: 'Late Hours',
  },
  {
    question: 'Where is the shop located and where can I park?',
    answer: 'We are situated in central Manchester Chinatown at 46 George Street (M1 4HF), just minutes from Piccadilly and St Peter’s Square. Pay-and-display street parking is available outside, plus Q-Park Piazza and Faulkner Street car parks are a 2-minute stroll away.',
    tag: 'Location & Parking',
  },
  {
    question: 'What payment methods are accepted in the shop?',
    answer: 'We accept all major contactless credit/debit cards, Apple Pay, Google Pay, and cash. All prices are completely fixed and transparent with zero surprise fees.',
    tag: 'Payments',
  },
  {
    question: 'Can I get a consultation if I want to switch my hairstyle?',
    answer: 'Every appointment begins with a tailored 1-on-1 consultation. Master barber Efi assesses your face geometry, hair density, cowlicks, and routine to craft a bespoke cut that looks sharp on day 1 and grows out cleanly.',
    tag: 'Craft & Styling',
  },
  {
    question: 'Do you offer hot towel wet shaves and beard sculpting?',
    answer: 'Yes! Our signature traditional hot towel straight razor shaves, facial steamer treatments, and foil-sharp beard line-ups are customer favourites. Organic beard conditioning and aftershave tonic are included with every beard service.',
    tag: 'Beard Services',
  },
];

export const FAQSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    soundManager.playClick();
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 sm:py-28 bg-canvas relative overflow-hidden border-b-2 border-ink">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-purple-soft px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-purple-deep shadow-brutal-sm mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-purple-electric" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight uppercase leading-tight">
            FREQUENTLY ASKED{' '}
            <span className="relative inline-block text-purple-deep">
              QUESTIONS
              <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3" color="#F0ABFC" />
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-ink-muted">
            Everything you need to know before stepping into Manchester’s favourite late-night chair.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border-2 border-ink bg-white transition-all duration-200 overflow-hidden ${
                  isOpen ? 'shadow-brutal bg-purple-pale/20' : 'shadow-brutal-sm hover:shadow-brutal'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                  data-cursor="CLICK"
                >
                  <div className="flex-1">
                    <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-purple-electric mb-1">
                      {faq.tag}
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-9 h-9 rounded-xl border-2 border-ink flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-purple-deep text-white rotate-180' : 'bg-purple-soft text-purple-deep'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 border-t border-purple-pale text-ink-muted leading-relaxed text-sm sm:text-base animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Help Banner */}
        <div className="mt-12 p-6 rounded-3xl border-2 border-ink bg-white shadow-brutal flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-purple-soft border-2 border-ink flex items-center justify-center text-purple-electric shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-extrabold text-ink text-base sm:text-lg">
                Have a specific question or custom cut request?
              </h4>
              <p className="text-xs sm:text-sm text-ink-muted">
                Ring Efi directly anytime between 9:00 AM and 11:00 PM.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={businessData.phone.telLink}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink bg-purple-soft px-5 py-3 font-display text-xs sm:text-sm font-bold text-purple-deep shadow-brutal-sm hover:bg-purple-deep hover:text-white transition-colors"
              data-cursor="CALL"
            >
              <Phone className="w-4 h-4" />
              <span>{businessData.phone.display}</span>
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink bg-purple-electric px-5 py-3 font-display text-xs sm:text-sm font-extrabold uppercase text-white shadow-brutal-sm hover:bg-purple-deep transition-all"
              data-cursor="BOOK"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK NOW</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
