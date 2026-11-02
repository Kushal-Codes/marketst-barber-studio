import React, { useState } from 'react';
import { HandDrawnUnderline } from '../illustrations/BrandMotifs';
import { soundManager } from '../animations/SoundEffects';
import { ServiceItem, servicesData } from '../../data/services';
import { Sparkles, Check, Calendar, Compass, ArrowRight, UserCheck } from 'lucide-react';

interface StyleAdvisorSectionProps {
  onOpenBooking: (service?: ServiceItem) => void;
}

type FaceShape = 'square' | 'oval' | 'round' | 'diamond';
type HairType = 'straight' | 'thick' | 'curly' | 'fine';

interface Recommendation {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  serviceId: string;
  proTip: string;
}

const RECOMMENDATIONS: Record<string, Recommendation> = {
  'square-straight': {
    title: 'Low Skin Taper & Textured Crop',
    subtitle: 'Sharp angular complement for strong jawlines',
    description: 'Maintains structure on top with razor-faded temples that soften hard corner angles without sacrificing masculine definition.',
    image: '/images/real/hero_cut_real.jpg',
    price: '£20.00',
    duration: '35–45 mins',
    serviceId: 'skin-fade',
    proTip: 'Apply a pea-sized matte clay into dry roots for textured separation that holds all day.',
  },
  'square-thick': {
    title: 'Skin Fade & Sculpted Beard Contour',
    subtitle: 'High contrast de-bulking with crisp symmetry',
    description: 'Aggressively debulks heavy side volume to create a streamlined silhouette while carving razor-sharp beard cheeklines.',
    image: '/images/real/client_fade_whatsapp.webp',
    price: '£20.00',
    duration: '40–45 mins',
    serviceId: 'haircut-beard-trim',
    proTip: 'Brush downwards while damp and finish with a drop of argan beard oil to eliminate frizz.',
  },
  'square-curly': {
    title: 'Mid Drop Fade & Defined Curls',
    subtitle: 'Controlled side graduation with natural texture',
    description: 'Curves behind the ear to preserve crown fullness while celebrating natural curl bounce with zero boxy bulk.',
    image: '/images/real/booksy_fade_square.jpg',
    price: '£20.00',
    duration: '35–45 mins',
    serviceId: 'skin-fade',
    proTip: 'Never towel-scrub curls aggressively; gently pat dry and diffuse with sea salt spray.',
  },
  'square-fine': {
    title: 'Precision Scissor Crop & Soft Taper',
    subtitle: 'Density-enhancing scissor architecture',
    description: 'Blunt perimeter cuts that add visual weight and fullness, paired with a subtle clean neck taper.',
    image: '/images/real/insta_cut_1.jpg',
    price: '£20.00',
    duration: '35–45 mins',
    serviceId: 'scissor-cut',
    proTip: 'Blow-dry upside down using medium heat to build 2x root volume before applying styling dust.',
  },
  'oval-straight': {
    title: 'Classic Scissor Pompadour & Taper',
    subtitle: 'Timeless Manchester executive silhouette',
    description: 'Slightly higher top proportion with tailored side graduation that flatters naturally balanced oval proportions.',
    image: '/images/real/hero_cut_real.jpg',
    price: '£20.00',
    duration: '30–40 mins',
    serviceId: 'classic-haircut',
    proTip: 'Comb backwards with light water-based pomade for high luster or matte paste for everyday casual wear.',
  },
  'oval-thick': {
    title: 'High Razor Fade & Textured Quiff',
    subtitle: 'Clean zero-foil blend with structured height',
    description: 'Removes weight at the parietal ridge to give the quiff effortless flow and razor-clean cleanliness.',
    image: '/images/real/client_fade_whatsapp.webp',
    price: '£20.00',
    duration: '35–45 mins',
    serviceId: 'razor-fade',
    proTip: 'Use a round vent brush when blow-drying backwards to lock in lift that lasts past midnight.',
  },
  'oval-curly': {
    title: 'Low Skin Taper with Natural Curl Canopy',
    subtitle: 'Fresh modern taper framing natural curl patterns',
    description: 'Leaves the natural curl structure intact on top while cleaning up the sideburns and neckline down to skin.',
    image: '/images/real/booksy_fade_square.jpg',
    price: '£20.00',
    duration: '35–45 mins',
    serviceId: 'skin-fade',
    proTip: 'Moisturize coils daily with leave-in conditioner to prevent dry, brittle tips.',
  },
  'oval-fine': {
    title: 'Textured French Crop with Forward Fringe',
    subtitle: 'Optical density booster for finer hair fibers',
    description: 'Forward-falling blunt texture disguises thinning crowns and frames the forehead cleanly.',
    image: '/images/real/insta_cut_2.jpg',
    price: '£20.00',
    duration: '30–35 mins',
    serviceId: 'standard-haircut',
    proTip: 'Use lightweight styling powder rather than heavy waxes that weigh down fine strands.',
  },
  'round-straight': {
    title: 'High Skin Fade with Angular Textured Top',
    subtitle: 'Vertical elongation for rounded face profiles',
    description: 'Tight zero-length sides strip away lateral fullness to add vertical height and chisel jawline perception.',
    image: '/images/real/hero_cut_real.jpg',
    price: '£20.00',
    duration: '35–45 mins',
    serviceId: 'skin-fade',
    proTip: 'Ask Efi for an angular blunt fringe to introduce sharp diagonals that contrast round cheeks.',
  },
  'round-thick': {
    title: 'Skin Fade + Pointed Beard Elongation',
    subtitle: 'Chiseled optical length & sculpted angles',
    description: 'A skin-tight side taper paired with a pointed, squared-off beard contour that draws the eye downward.',
    image: '/images/real/client_fade_whatsapp.webp',
    price: '£20.00',
    duration: '40–45 mins',
    serviceId: 'haircut-beard-trim',
    proTip: 'Keep beard sides trimmed short (grades 2–3) and allow length to concentrate at the chin.',
  },
  'round-curly': {
    title: 'Mid Drop Skin Fade with Volume on Crown',
    subtitle: 'Structured curl height balancing facial width',
    description: 'Fades down to bare skin around ears and nape while concentrating natural curl volume high on top.',
    image: '/images/real/booksy_fade_square.jpg',
    price: '£20.00',
    duration: '35–45 mins',
    serviceId: 'skin-fade',
    proTip: 'Twist damp curl ends with fingertip curl cream to maintain distinct ringlets without fluff.',
  },
  'round-fine': {
    title: 'Short Textured Crew Cut with Razor Line',
    subtitle: 'Crisp masculine contours with zero side fluff',
    description: 'Short, tidy scissor length on top with high razor perimeter taper that sharpens the cheek and temple boundary.',
    image: '/images/real/insta_cut_1.jpg',
    price: '£20.00',
    duration: '30–35 mins',
    serviceId: 'standard-haircut',
    proTip: 'Maintain cuts every 2–3 weeks to keep the high skin boundary looking crisp and slimming.',
  },
  'diamond-straight': {
    title: 'Mid Taper Fade & Soft Scissor Sweep',
    subtitle: 'Harmonious cheekbone balance & soft perimeter',
    description: 'Slightly fuller scissor graduation around temples that balances prominent cheekbones and narrower foreheads.',
    image: '/images/real/hero_cut_real.jpg',
    price: '£20.00',
    duration: '35–45 mins',
    serviceId: 'scissor-cut',
    proTip: 'Sweep sides back softly behind ears with medium-hold styling paste.',
  },
  'diamond-thick': {
    title: 'Haircut & Full Beard Steamer Treatment',
    subtitle: 'Total geometric balance for sharp jawline profiles',
    description: 'De-bulks dense hair up top while softening the beard with hot steamer towels before a precision razor line-up.',
    image: '/images/real/client_fade_whatsapp.webp',
    price: '£28.00',
    duration: '50–60 mins',
    serviceId: 'haircut-beard-facial-steamer',
    proTip: 'Steam softens stubborn coarse whiskers for zero razor irritation and smooth contour lines.',
  },
  'diamond-curly': {
    title: 'Temple Taper & Freeform Curl Crown',
    subtitle: 'Artistic edge taper celebrating curl character',
    description: 'Keeps temple perimeter razor clean while letting textured coils sit naturally with organic movement.',
    image: '/images/real/booksy_fade_square.jpg',
    price: '£20.00',
    duration: '35–45 mins',
    serviceId: 'skin-fade',
    proTip: 'Sleep on a satin pillowcase or avoid dry friction to keep coil definitions intact overnight.',
  },
  'diamond-fine': {
    title: 'Textured Crop with Low Foil Taper',
    subtitle: 'Forward textured density balancing cheek width',
    description: 'Clean foil taper along the bottom edge with feathered forward texture that widens the forehead subtly.',
    image: '/images/real/insta_cut_2.jpg',
    price: '£20.00',
    duration: '30–40 mins',
    serviceId: 'classic-haircut',
    proTip: 'Use a matte volume powder tapped directly onto roots for immediate lightweight lift.',
  },
};

export const StyleAdvisorSection: React.FC<StyleAdvisorSectionProps> = ({ onOpenBooking }) => {
  const [faceShape, setFaceShape] = useState<FaceShape>('square');
  const [hairType, setHairType] = useState<HairType>('straight');

  const key = `${faceShape}-${hairType}`;
  const rec = RECOMMENDATIONS[key] || RECOMMENDATIONS['square-straight'];

  const handleSelectShape = (shape: FaceShape) => {
    soundManager.playClick();
    setFaceShape(shape);
  };

  const handleSelectHair = (hair: HairType) => {
    soundManager.playClick();
    setHairType(hair);
  };

  const handleBook = () => {
    soundManager.playSnip();
    const existing = servicesData.find((s) => s.id === rec.serviceId);
    if (existing) {
      onOpenBooking(existing);
      return;
    }
    const numPrice = parseFloat(rec.price.replace(/[^0-9.]/g, '')) || 20;
    const serviceMock: ServiceItem = {
      id: rec.serviceId,
      name: rec.title,
      duration: rec.duration,
      price: numPrice,
      priceFormatted: rec.price,
      category: 'hair',
      popular: true,
      description: rec.description,
      includes: ['Consultation', 'Precision Cut', 'Mirror Check'],
      iconType: 'scissors',
    };
    onOpenBooking(serviceMock);
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-purple-soft px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-purple-deep shadow-brutal-sm mb-4">
            <Compass className="w-3.5 h-3.5 text-purple-electric" />
            <span>Interactive Grooming Consultation</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight uppercase leading-tight">
            FIND YOUR SIGNATURE{' '}
            <span className="relative inline-block text-purple-deep">
              MANCHESTER LOOK
              <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3" color="#7C3AED" />
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-ink-muted">
            Unsure what cut best compliments your face geometry and hair texture? Select your attributes below for Efi’s tailored master recommendation.
          </p>
        </div>

        {/* Interactive Consultation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls: Left 6 Columns */}
          <div className="lg:col-span-6 space-y-8 bg-canvas p-6 sm:p-8 rounded-3xl border-2 border-ink shadow-brutal">
            {/* Step 1: Face Shape Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-deep">
                  Step 1 · Identify Your Face Shape
                </span>
                <span className="text-xs font-bold text-ink-muted">Select One</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {(
                  [
                    { id: 'square', label: 'Square', desc: 'Prominent jaw, equal width' },
                    { id: 'oval', label: 'Oval', desc: 'Balanced length & width' },
                    { id: 'round', label: 'Round', desc: 'Softer curved cheeks & chin' },
                    { id: 'diamond', label: 'Diamond', desc: 'Wide cheekbones, narrow jaw' },
                  ] as const
                ).map((shape) => {
                  const isSelected = faceShape === shape.id;
                  return (
                    <button
                      key={shape.id}
                      type="button"
                      onClick={() => handleSelectShape(shape.id)}
                      className={`text-left p-3.5 rounded-2xl border-2 border-ink transition-all duration-150 ${
                        isSelected
                          ? 'bg-purple-deep text-white shadow-brutal translate-x-0.5 translate-y-0.5'
                          : 'bg-white text-ink shadow-brutal-sm hover:bg-purple-soft/60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display font-extrabold text-sm sm:text-base">
                          {shape.label}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-highlight" />}
                      </div>
                      <span
                        className={`text-[11px] block mt-1 ${
                          isSelected ? 'text-purple-soft' : 'text-ink-muted'
                        }`}
                      >
                        {shape.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Hair Type Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-deep">
                  Step 2 · Your Hair Texture & Density
                </span>
                <span className="text-xs font-bold text-ink-muted">Select One</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {(
                  [
                    { id: 'straight', label: 'Straight / Medium', desc: 'Lays flat, easy flow' },
                    { id: 'thick', label: 'Thick & Dense', desc: 'Heavy volume, coarse' },
                    { id: 'curly', label: 'Wavy & Curly', desc: 'Natural coil or spring' },
                    { id: 'fine', label: 'Fine / Receding', desc: 'Lightweight fibers' },
                  ] as const
                ).map((type) => {
                  const isSelected = hairType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => handleSelectHair(type.id)}
                      className={`text-left p-3.5 rounded-2xl border-2 border-ink transition-all duration-150 ${
                        isSelected
                          ? 'bg-purple-electric text-white shadow-brutal translate-x-0.5 translate-y-0.5'
                          : 'bg-white text-ink shadow-brutal-sm hover:bg-purple-soft/60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display font-extrabold text-sm sm:text-base">
                          {type.label}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-highlight" />}
                      </div>
                      <span
                        className={`text-[11px] block mt-1 ${
                          isSelected ? 'text-purple-soft' : 'text-ink-muted'
                        }`}
                      >
                        {type.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Consultation Note */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-purple-soft text-xs text-ink-muted">
              <UserCheck className="w-5 h-5 text-purple-electric shrink-0" />
              <span>
                Every cut includes a 3-minute personalized chair consultation with Efi before clippers touch hair.
              </span>
            </div>
          </div>

          {/* Dynamic Result Card: Right 6 Columns */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border-2 border-ink bg-white p-6 sm:p-8 shadow-brutal-xl relative overflow-hidden">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-highlight/30 border border-ink/20 px-3 py-1 text-xs font-mono font-bold uppercase text-purple-deep">
                  <Sparkles className="w-3.5 h-3.5 text-purple-electric" />
                  <span>Efi’s Recommended Cut</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-ink-muted uppercase">
                    Duration:
                  </span>
                  <span className="text-xs font-bold font-mono text-purple-deep bg-purple-soft px-2 py-0.5 rounded-md">
                    {rec.duration}
                  </span>
                </div>
              </div>

              {/* Title & Price Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-ink leading-tight">
                    {rec.title}
                  </h3>
                  <p className="font-display text-sm font-bold text-purple-electric mt-1">
                    {rec.subtitle}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-mono text-ink-muted block uppercase">Fixed Price</span>
                  <span className="font-display text-3xl font-black text-ink">
                    {rec.price}
                  </span>
                </div>
              </div>

              {/* Real Photo Thumbnail */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-5 border-2 border-ink bg-purple-soft">
                <img
                  src={rec.image}
                  alt={rec.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs font-mono flex items-center justify-between">
                  <span>Capital Barbers Real Client Craft</span>
                  <span className="bg-ink/80 px-2 py-0.5 rounded text-[10px] font-bold">46 George St</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-ink-muted leading-relaxed mb-4">
                {rec.description}
              </p>

              {/* Master Barber Tip */}
              <div className="p-4 rounded-2xl bg-purple-pale/60 border border-purple-soft mb-6">
                <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-purple-deep mb-1">
                  Master Barber Styling Note
                </span>
                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  “{rec.proTip}”
                </p>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleBook}
                className="w-full inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-ink bg-purple-electric py-4 font-display text-base font-extrabold uppercase tracking-wider text-white shadow-brutal transition-all duration-150 hover:bg-purple-deep hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1"
              >
                <Calendar className="w-5 h-5" />
                <span>BOOK THIS RECOMMENDED CHOP ({rec.price})</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
