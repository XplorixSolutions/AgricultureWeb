/**
 * Design Tokens — Agricultural Machinery Website
 * 
 * Deep Iron + Terra palette. Clash Display + Inter typography.
 * All motion tokens follow the Xplorix motion-system specification.
 */

// ─── COLORS ──────────────────────────────────────────────
export const colors = {
  // Core neutrals
  deepIron:     '#1A1A1E',
  forgeBlack:   '#0D0D0F',
  steelGray:    '#2A2A30',
  smoke:        '#6B6B73',
  ash:          '#9A9AA0',
  chalk:        '#E8E6E2',
  warmWhite:    '#F5F3EF',
  pureWhite:    '#FFFFFF',

  // Brand accent
  terra:        '#C45D2C',
  terraDark:    '#9E4A22',
  terraLight:   '#E8845A',

  // Semantic
  success:      '#2E7D4F',
  warning:      '#D4A843',
  error:        '#C23B3B',

  // Opacity variants
  deepIron90:   'rgba(26, 26, 30, 0.90)',
  deepIron70:   'rgba(26, 26, 30, 0.70)',
  deepIron40:   'rgba(26, 26, 30, 0.40)',
  warmWhite80:  'rgba(245, 243, 239, 0.80)',
  warmWhite40:  'rgba(245, 243, 239, 0.40)',
  warmWhite12:  'rgba(245, 243, 239, 0.12)',
} as const;

// ─── TYPOGRAPHY ──────────────────────────────────────────
export const typography = {
  fonts: {
    display: '"Clash Display", "Arial Black", sans-serif',
    body: '"Inter", "Helvetica Neue", Arial, sans-serif',
  },
  scale: {
    displayXl: 'clamp(3.5rem, 9vw, 10rem)',      // 56px → 160px
    display:   'clamp(3rem, 7vw, 7.5rem)',         // 48px → 120px
    section:   'clamp(2.25rem, 5vw, 5rem)',        // 36px → 80px
    heading:   'clamp(1.5rem, 3vw, 2.5rem)',       // 24px → 40px
    bodyLg:    'clamp(1.125rem, 1.5vw, 1.5rem)',   // 18px → 24px
    body:      'clamp(0.9375rem, 1vw, 1.125rem)',  // 15px → 18px
    meta:      'clamp(0.6875rem, 0.8vw, 0.8125rem)', // 11px → 13px
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.04em',
    meta: '0.08em',
  },
  lineHeight: {
    tight: 1.05,
    heading: 1.15,
    body: 1.6,
    relaxed: 1.8,
  },
} as const;

// ─── SPACING ─────────────────────────────────────────────
export const spacing = {
  px: '1px',
  0.5: '0.125rem',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  64: '16rem',
  
  // Layout
  containerPadding: {
    mobile: '1.25rem',   // 20px
    tablet: '2rem',      // 32px
    desktop: '3rem',     // 48px
    wide: '4rem',        // 64px
  },
  sectionGap: {
    sm: 'clamp(4rem, 8vw, 6rem)',
    md: 'clamp(6rem, 12vw, 10rem)',
    lg: 'clamp(8rem, 16vw, 14rem)',
  },
} as const;

// ─── BREAKPOINTS ─────────────────────────────────────────
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '1920px',
} as const;

// ─── BORDERS ─────────────────────────────────────────────
export const borders = {
  radius: {
    none: '0',
    sm: '2px',
    md: '4px',
    lg: '8px',
    pill: '999px',
  },
  width: {
    thin: '1px',
    medium: '2px',
  },
} as const;

// ─── MOTION ──────────────────────────────────────────────
export const motion = {
  easing: {
    reveal: 'power4.out',
    subtle: 'power2.out',
    cinematic: 'M0,0 C0.16,1 0.3,1 1,1',
    transform: 'M0,0 C0.65,0 0.35,1 1,1',
  },
  duration: {
    micro: 0.22,        // 220ms — button hover, cursor
    uiState: 0.35,      // 350ms — filter, toggle, dropdown
    textReveal: 0.9,    // 900ms — heading appear
    transform: 1.4,     // 1400ms — scene transition
    page: 1.0,          // 1000ms — page transition
  },
  // CSS transition strings for non-GSAP usage
  css: {
    fast: '220ms cubic-bezier(0.16, 1, 0.3, 1)',
    medium: '350ms cubic-bezier(0.16, 1, 0.3, 1)',
    slow: '700ms cubic-bezier(0.16, 1, 0.3, 1)',
  },
} as const;

// ─── Z-INDEX ─────────────────────────────────────────────
export const zIndex = {
  behind: -1,
  base: 0,
  content: 10,
  sticky: 20,
  header: 50,
  overlay: 60,
  modal: 70,
  toast: 80,
  cursor: 90,
  max: 100,
} as const;
