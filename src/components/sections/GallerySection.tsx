import React, { useState } from 'react';
import { galleryItems, GalleryItem } from '../../data/gallery';
import { Camera, ExternalLink, X, Sparkles } from 'lucide-react';
import { businessData } from '../../data/business';

export const GallerySection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white relative overflow-hidden border-t-2 border-ink">
      
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-purple-soft/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-purple-soft px-4 py-1.5 text-xs font-display font-black uppercase tracking-widest text-purple-deep shadow-brutal-sm mb-4">
            <Camera className="w-3.5 h-3.5 text-purple-electric" />
            <span>Genuine Facebook Timeline Photos</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-ink tracking-tight uppercase leading-tight">
            RECENT CLIENT CUTS &{' '}
            <span className="text-purple-electric block sm:inline">
              REAL TRANSFORMATIONS
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-ink-muted font-body">
            100% authentic photography from our 92 Market Street studio chairs. Pulled directly from the official Market St. Barber Studio Facebook page.
          </p>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-purple-pale border-2 border-ink shadow-brutal hover:shadow-brutal-lg cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] overflow-hidden bg-ink">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Content Badge and Title */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1.5 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-deep font-black bg-highlight px-2.5 py-0.5 rounded-full border border-ink shadow-sm">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-purple-soft font-bold">
                    Droylsden M43
                  </span>
                </div>

                <h3 className="font-display text-base font-black text-white group-hover:text-highlight transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-body text-stone-200 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Provenance Tag on Top Right */}
              <div className="absolute top-3 right-3 rounded-full bg-white/95 border-2 border-ink px-2.5 py-0.5 text-[10px] font-display font-black uppercase text-purple-deep shadow-brutal-sm">
                Facebook Post
              </div>
            </div>
          ))}
        </div>

        {/* Facebook Page Button */}
        <div className="mt-12 text-center">
          <a
            href={businessData.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl border-2 border-ink bg-purple-soft px-7 py-4 text-sm font-display font-black uppercase tracking-wider text-purple-deep shadow-brutal hover:bg-purple-pale hover:shadow-brutal-lg transition-all"
          >
            <Camera className="w-4 h-4 text-purple-electric" />
            <span>Visit Market St. Barber Studio on Facebook</span>
            <ExternalLink className="w-4 h-4 text-purple-deep" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/85 backdrop-blur-md"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-md w-full rounded-3xl bg-white border-2 border-ink p-5 shadow-brutal-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-purple-pale border-2 border-ink text-ink hover:text-purple-electric"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-2xl overflow-hidden aspect-[4/5] mb-4 bg-ink border-2 border-ink">
              <img
                src={activeItem.imageSrc}
                alt={activeItem.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-electric font-black">
                {activeItem.category} · {activeItem.provenance}
              </span>
              <h3 className="font-display text-xl font-black text-ink">
                {activeItem.title}
              </h3>
              <p className="text-sm font-body text-ink-muted">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
