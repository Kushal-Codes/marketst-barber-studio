import React from 'react';
import { reviewsData } from '../../data/gallery';
import { businessData } from '../../data/business';
import { HandDrawnUnderline } from '../illustrations/BrandMotifs';
import { Star, ShieldCheck, ExternalLink, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-canvas border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Rating Badge */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-purple-soft px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-purple-deep shadow-brutal-sm mb-4">
            <ShieldCheck className="w-4 h-4 text-purple-electric" />
            <span>Verified Customer Feedback</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight uppercase leading-tight">
            PROVEN REPUTATION.{' '}
            <span className="block text-purple-deep">
              FIVE-STAR{' '}
              <span className="relative inline-block text-purple-electric">
                REVIEWS.
                <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3" color="#F0ABFC" />
              </span>
            </span>
          </h2>

          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-display font-extrabold text-xl text-ink">4.9 / 5.0</span>
            <span className="text-sm font-semibold text-ink-muted">on Google</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="relative rounded-3xl border-2 border-ink bg-white p-6 sm:p-8 shadow-brutal flex flex-col justify-between hover:shadow-brutal-purple transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-purple-soft font-display font-extrabold text-sm text-purple-deep">
                      {rev.author[0]}
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-ink">
                        {rev.author}
                      </h3>
                      <span className="text-xs text-ink-light">
                        {rev.relativeDate} · {rev.source}
                      </span>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Quote className="w-6 h-6 text-purple-soft absolute -top-1 -left-2 -z-0 opacity-80" />
                  <p className="text-sm sm:text-base text-ink-muted leading-relaxed pl-4 font-normal relative z-10">
                    "{rev.text}"
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-purple-pale flex items-center justify-between text-xs font-mono text-purple-electric">
                <span>Verified Google Review</span>
                <span className="font-bold text-emerald-600">✓ Verified Visit</span>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Official Google Maps Reviews */}
        <div className="text-center">
          <a
            href={businessData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-purple-soft px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-purple-deep shadow-brutal-sm hover:bg-highlight hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            <span>Read All Reviews on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
