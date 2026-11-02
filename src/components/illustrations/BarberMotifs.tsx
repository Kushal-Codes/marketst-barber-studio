import React from 'react';

export const BarberLogo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" opacity="0.3" />
    <path d="M16 12L32 36M32 12L16 36" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="24" cy="24" r="6" fill="#1C1917" stroke="#D97706" strokeWidth="2" />
    <path d="M24 6V10M24 38V42M6 24H10M38 24H42" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const BarberPoleMotif: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="22" y="8" width="16" height="44" rx="8" fill="#1C1917" stroke="#D97706" strokeWidth="2" />
    <path d="M22 18L38 26M22 28L38 36M22 38L38 46" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="30" cy="8" r="6" fill="#D97706" />
    <circle cx="30" cy="52" r="6" fill="#D97706" />
  </svg>
);

export const ScissorsMotif: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="6" stroke="#D97706" strokeWidth="2" />
    <circle cx="28" cy="12" r="6" stroke="#D97706" strokeWidth="2" />
    <path d="M16 16L30 34M24 16L10 34" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);
