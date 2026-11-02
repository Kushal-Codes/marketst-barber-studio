import React, { useState } from 'react';
import { galleryItems, GalleryItem } from '../../data/gallery';
import { Camera, ExternalLink, Sparkles, X } from 'lucide-react';
import { businessData } from '../../data/business';

export const GallerySection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0A0A0C] relative overflow-hidden border-t border-[#26242B]">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-amber-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-950/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300 mb-4">
            <Camera className="w-3.5 h-3.5 text-amber-500" />
            <span>Real Studio Photography</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            RECENT WORK FROM{' '}
            <span className="text-amber-400 block sm:inline">
              THE STUDIO CHAIR
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-300">
            Real cuts, sharp lines, and beard tapers crafted inside our 92 Market Street studio. Sourced directly from our official Instagram showcase.
          </p>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-[#16141D] border border-[#2B2834] hover:border-amber-500/50 cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              {/* Image Container */}
              <div className="aspect-[3/4] overflow-hidden bg-stone-950">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Content Badge and Title */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold bg-[#0F0F12]/80 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-amber-500/30">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-stone-400">
                    Droylsden
                  </span>
                </div>

                <h3 className="font-serif text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-300 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Provenance Tag on Top Right */}
              <div className="absolute top-3 right-3 rounded-full bg-[#0F0F12]/80 backdrop-blur-md px-2.5 py-0.5 text-[9px] font-mono uppercase text-amber-300 border border-amber-500/30">
                Live Post
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Row */}
        <div className="mt-12 text-center">
          <a
            href={businessData.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl border-2 border-[#33303D] bg-[#16141D] px-6 py-3.5 text-sm font-bold text-stone-200 hover:border-amber-500 hover:text-white transition-all shadow-md"
          >
            <Camera className="w-4 h-4 text-amber-500" />
            <span>View More Cuts on Instagram (@marketstbarberstudio)</span>
            <ExternalLink className="w-4 h-4 text-stone-400" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-lg w-full rounded-3xl bg-[#16141D] border border-amber-500/50 p-4 sm:p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#0F0F12] border border-[#33303D] text-white hover:text-amber-400"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-2xl overflow-hidden aspect-[3/4] mb-4 bg-stone-950">
              <img
                src={activeItem.imageSrc}
                alt={activeItem.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                {activeItem.category} · {activeItem.provenance}
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                {activeItem.title}
              </h3>
              <p className="text-sm text-stone-300">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
