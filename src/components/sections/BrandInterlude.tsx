import React from 'react';
import { Marquee } from '../animations/Marquee';

export const BrandInterlude: React.FC = () => {
  return (
    <div className="relative z-20 -my-2 sm:-my-4">
      {/* Dynamic Angled Ribbon Banner */}
      <div className="transform -rotate-1 bg-purple-deep text-white shadow-brutal border-y-2 border-ink">
        <Marquee
          text="CRAFT · PRECISION · MANCHESTER · EXCELLENCE · CRAFT · PRECISION · MANCHESTER · EXCELLENCE · 46 GEORGE STREET · 7 DAYS TILL 11 PM"
          speed="normal"
          className="bg-purple-deep"
        />
      </div>
    </div>
  );
};
