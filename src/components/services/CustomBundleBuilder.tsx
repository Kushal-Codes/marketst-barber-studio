import React, { useState } from 'react';
import { soundManager } from '../animations/SoundEffects';
import { ServiceItem } from '../../data/services';
import { Sparkles, Clock, Check, Calendar } from 'lucide-react';

interface CustomBundleBuilderProps {
  onBookCustom: (customItem: ServiceItem) => void;
}

interface OptionItem {
  id: string;
  name: string;
  durationMins: number;
  price: number;
}

const HAIRCUT_OPTIONS: OptionItem[] = [
  { id: 'h-fade', name: 'Skin Fade', durationMins: 40, price: 20 },
  { id: 'h-scissor', name: 'Scissor Cut', durationMins: 40, price: 20 },
  { id: 'h-wash', name: 'Haircut, Wash & Finish', durationMins: 45, price: 25 },
  { id: 'h-buzz', name: 'Zero-Length Buzz', durationMins: 25, price: 15 },
];

const BEARD_OPTIONS: OptionItem[] = [
  { id: 'b-none', name: 'No Beard Service', durationMins: 0, price: 0 },
  { id: 'b-trim', name: 'Beard Trim & Oil', durationMins: 15, price: 10 },
  { id: 'b-shape', name: 'Shape-Up & Razor Line', durationMins: 20, price: 13 },
  { id: 'b-shave', name: 'Hot Towel Wet Shave', durationMins: 30, price: 20 },
  { id: 'b-steam', name: 'Facial Steamer & Beard Sculpt', durationMins: 35, price: 25 },
];

const WAXING_OPTIONS: OptionItem[] = [
  { id: 'w-none', name: 'No Waxing', durationMins: 0, price: 0 },
  { id: 'w-nose', name: 'Nose Waxing', durationMins: 10, price: 5 },
  { id: 'w-ear', name: 'Ear Waxing', durationMins: 10, price: 5 },
  { id: 'w-brow', name: 'Eyebrow Shaping', durationMins: 10, price: 5 },
  { id: 'w-full', name: 'Full Face & Ear Wax Bundle', durationMins: 20, price: 12 },
];

export const CustomBundleBuilder: React.FC<CustomBundleBuilderProps> = ({ onBookCustom }) => {
  const [selectedHair, setSelectedHair] = useState<OptionItem>(HAIRCUT_OPTIONS[0]);
  const [selectedBeard, setSelectedBeard] = useState<OptionItem>(BEARD_OPTIONS[1]);
  const [selectedWax, setSelectedWax] = useState<OptionItem>(WAXING_OPTIONS[0]);

  const totalPrice = selectedHair.price + selectedBeard.price + selectedWax.price;
  const totalDuration = selectedHair.durationMins + selectedBeard.durationMins + selectedWax.durationMins;

  const handleSelectHair = (opt: OptionItem) => {
    soundManager.playSnip();
    setSelectedHair(opt);
  };

  const handleSelectBeard = (opt: OptionItem) => {
    soundManager.playSnip();
    setSelectedBeard(opt);
  };

  const handleSelectWax = (opt: OptionItem) => {
    soundManager.playSnip();
    setSelectedWax(opt);
  };

  const handleConfirm = () => {
    soundManager.playClick();
    const parts = [selectedHair.name];
    if (selectedBeard.price > 0) parts.push(selectedBeard.name);
    if (selectedWax.price > 0) parts.push(selectedWax.name);

    const customService: ServiceItem = {
      id: 'custom-bundle',
      name: `Bespoke Chop: ${parts.join(' + ')}`,
      duration: `Approx. ${totalDuration} mins`,
      price: totalPrice,
      priceFormatted: `£${totalPrice.toFixed(2)}`,
      category: 'hair',
      description: `Custom configured appointment including: ${parts.join(', ')}.`,
      includes: parts,
      iconType: 'fade',
    };

    onBookCustom(customService);
  };

  return (
    <div className="rounded-3xl border-2 border-ink bg-white p-6 sm:p-8 shadow-brutal-xl mb-16 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-purple-soft/30 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b-2 border-purple-pale">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-ink bg-highlight px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-ink mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-deep" />
            <span>Interactive Customizer</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-ink uppercase">
            BUILD YOUR BESPOKE CHOP
          </h3>
          <p className="text-sm text-ink-muted mt-1">
            Mix and match your haircut, beard sculpting, and grooming details with real-time price & duration tally.
          </p>
        </div>

        {/* Live Calculation Pill */}
        <div className="rounded-2xl border-2 border-ink bg-purple-deep p-4 text-white text-right shrink-0 shadow-brutal-sm">
          <span className="block text-[11px] font-mono uppercase tracking-wider text-highlight">
            Estimated Duration: {totalDuration} mins
          </span>
          <span className="font-display text-3xl font-black text-white">
            £{totalPrice.toFixed(2)}
          </span>
        </div>
      </div>

      {/* 3 Step Interactive Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Step 1: Haircut */}
        <div className="space-y-3">
          <label className="block text-xs font-bold font-mono uppercase tracking-wider text-purple-deep">
            1. Select Haircut
          </label>
          <div className="space-y-2">
            {HAIRCUT_OPTIONS.map((opt) => {
              const isSelected = selectedHair.id === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectHair(opt)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all text-left text-sm ${
                    isSelected
                      ? 'border-ink bg-purple-soft font-bold text-purple-deep shadow-brutal-sm'
                      : 'border-purple-soft/60 bg-white text-ink hover:bg-purple-pale'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center border ${isSelected ? 'border-purple-deep bg-purple-electric text-white' : 'border-ink/30'}`}>
                      {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </span>
                    <span>{opt.name}</span>
                  </div>
                  <span className="font-mono font-bold text-xs">£{opt.price}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Beard Work */}
        <div className="space-y-3">
          <label className="block text-xs font-bold font-mono uppercase tracking-wider text-purple-deep">
            2. Add Beard & Shave
          </label>
          <div className="space-y-2">
            {BEARD_OPTIONS.map((opt) => {
              const isSelected = selectedBeard.id === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectBeard(opt)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all text-left text-sm ${
                    isSelected
                      ? 'border-ink bg-purple-soft font-bold text-purple-deep shadow-brutal-sm'
                      : 'border-purple-soft/60 bg-white text-ink hover:bg-purple-pale'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center border ${isSelected ? 'border-purple-deep bg-purple-electric text-white' : 'border-ink/30'}`}>
                      {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </span>
                    <span>{opt.name}</span>
                  </div>
                  <span className="font-mono font-bold text-xs">
                    {opt.price === 0 ? '—' : `+£${opt.price}`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Waxing Details */}
        <div className="space-y-3">
          <label className="block text-xs font-bold font-mono uppercase tracking-wider text-purple-deep">
            3. Grooming & Waxing Details
          </label>
          <div className="space-y-2">
            {WAXING_OPTIONS.map((opt) => {
              const isSelected = selectedWax.id === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectWax(opt)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all text-left text-sm ${
                    isSelected
                      ? 'border-ink bg-purple-soft font-bold text-purple-deep shadow-brutal-sm'
                      : 'border-purple-soft/60 bg-white text-ink hover:bg-purple-pale'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center border ${isSelected ? 'border-purple-deep bg-purple-electric text-white' : 'border-ink/30'}`}>
                      {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </span>
                    <span>{opt.name}</span>
                  </div>
                  <span className="font-mono font-bold text-xs">
                    {opt.price === 0 ? '—' : `+£${opt.price}`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Confirm & Book Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t-2 border-dashed border-purple-pale">
        <div className="flex items-center gap-2 text-xs text-ink-muted">
          <Clock className="w-4 h-4 text-purple-electric" />
          <span>
            Configured Package: <strong className="text-ink">{selectedHair.name}</strong>
            {selectedBeard.price > 0 && ` + ${selectedBeard.name}`}
            {selectedWax.price > 0 && ` + ${selectedWax.name}`}
          </span>
        </div>

        <button
          onClick={handleConfirm}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-purple-electric px-8 py-3.5 font-display text-sm font-extrabold uppercase tracking-wider text-white shadow-brutal hover:bg-purple-deep hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
        >
          <Calendar className="w-4 h-4 text-highlight" />
          <span>Book This Bespoke Chop (£{totalPrice.toFixed(2)})</span>
        </button>
      </div>
    </div>
  );
};
