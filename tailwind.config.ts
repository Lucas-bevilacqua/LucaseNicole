import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          950: '#2d3814',
          900: '#3d4d1f',
          dark: '#556B2F',
          medium: '#6B8E23',
          light: '#9ACD32',
          200: '#b8d96a',
          100: '#d4e9a8',
          50: '#eef6dc',
        },
        gold: {
          premium: '#D4AF37',
          light: '#F5E6D3',
          200: '#e8c968',
          100: '#f0dea0',
        },
        cream: '#FAF8F3',
        beige: '#E8DCC4',
        'gray-warm': '#8B7E74',
        'gray-dark': '#2C2C2C',
        'white-off': '#FFFFF8',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-montserrat)', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem,10vw,6rem)', { lineHeight: '1.05', letterSpacing: '0.02em' }],
        'display-sm': ['clamp(2.25rem,6vw,4rem)', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'body': ['18px', { lineHeight: '1.75' }],
        'body-lg': ['20px', { lineHeight: '1.65' }],
      },
      spacing: {
        'section': '140px',
        'section-mobile': '90px',
      },
      boxShadow: {
        'premium': '0 4px 24px rgba(45, 56, 20, 0.08)',
        'premium-lg': '0 12px 40px rgba(45, 56, 20, 0.12)',
        'luxe': '0 20px 60px -15px rgba(45, 56, 20, 0.15)',
        'gold-glow': '0 0 40px rgba(212, 175, 55, 0.2)',
        'inner-gold': 'inset 0 1px 0 0 rgba(212, 175, 55, 0.3)',
      },
      backgroundImage: {
        'gradient-olive': 'linear-gradient(135deg, rgba(45, 56, 20, 0.85) 0%, rgba(85, 107, 47, 0.6) 50%, rgba(45, 56, 20, 0.4) 100%)',
        'gradient-olive-hero': 'linear-gradient(180deg, rgba(45, 56, 20, 0.75) 0%, rgba(85, 107, 47, 0.5) 40%, transparent 70%, rgba(45, 56, 20, 0.3) 100%)',
        'gradient-gold-subtle': 'linear-gradient(180deg, transparent 0%, rgba(212, 175, 55, 0.06) 100%)',
      },
      animation: {
        'pulse-soft': 'pulse-soft 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.97', transform: 'scale(1.02)' },
        },
        'shimmer': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
      letterSpacing: {
        'display': '0.04em',
        'wide': '0.08em',
      },
    },
  },
  plugins: [],
};

export default config;
