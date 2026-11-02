/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FFFFFF',
        purple: {
          deep: '#4C1D95',     // Deep royal purple for heavy headlines, borders, and emblems
          electric: '#7C3AED', // Electric energetic purple for main CTAs and highlights
          soft: '#EDE9FE',     // Soft tint for ticket backgrounds and badges
          pale: '#F5F0FF',     // Pale background wash for high visual polish
          glow: '#A855F7',
          neon: '#C084FC',
        },
        ink: {
          DEFAULT: '#191622',  // Ink black
          black: '#191622',
          muted: '#4B4658',
          light: '#766F8A',
        },
        highlight: {
          DEFAULT: '#F0ABFC', // Highlight accent
          accent: '#F0ABFC',
          light: '#FDF4FF',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px 0px #191622',
        'brutal': '4px 4px 0px 0px #191622',
        'brutal-lg': '6px 6px 0px 0px #191622',
        'brutal-xl': '8px 8px 0px 0px #191622',
        'brutal-purple': '4px 4px 0px 0px #7C3AED',
        'brutal-deep': '4px 4px 0px 0px #4C1D95',
        'brutal-highlight': '4px 4px 0px 0px #F0ABFC',
        'neon-purple': '0 0 25px rgba(124, 58, 237, 0.45)',
        'neon-highlight': '0 0 25px rgba(240, 171, 252, 0.6)',
      },
      animation: {
        'marquee': 'marquee 22s linear infinite',
        'marquee-slow': 'marquee 36s linear infinite',
        'spin-slow': 'spin 14s linear infinite',
        'bounce-subtle': 'bounceSubtle 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'stamp-spin': 'stampSpin 20s linear infinite',
        'barber-pole': 'barberPole 2.5s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'wiggle': 'wiggle 0.3s ease-in-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.9', filter: 'drop-shadow(0 0 8px rgba(124, 58, 237, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 16px rgba(240, 171, 252, 0.8))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        stampSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        barberPole: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 40px' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-4deg)' },
          '75%': { transform: 'rotate(4deg)' },
        }
      }
    },
  },
  plugins: [],
};
