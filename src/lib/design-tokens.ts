/**
 * Design Tokens — Agricultural Machinery Website
 * Theme: Crisp White & Deep Forest Green with Warm Sand/Beige
 */

export const colors = {
  // Forest & Hunter Green Primary
  green950: '#0B2917',
  green900: '#103E22',
  green800: '#14532D',
  green700: '#15803D',
  green600: '#16A34A',
  green500: '#22C55E',
  green100: '#DCFCE7',
  green50:  '#F0FDF4',

  // Warm Sand & Beige Accents
  sand900: '#5C472E',
  sand800: '#7A6242',
  sand700: '#9B7E58',
  sand600: '#B89970',
  sand500: '#CBB089',
  sand400: '#D8C4A5',
  sand300: '#E6D8C4',
  sand200: '#EFE6D8',
  sand100: '#F5EFEB',
  sand50:  '#FAF7F2',

  // Whites & Neutrals
  pureWhite: '#FFFFFF',
  surfaceLight: '#F8FAF7',
  charcoal900: '#111827',
  charcoal800: '#1F2937',
  charcoal700: '#374151',
  charcoal600: '#4B5563',
  charcoal500: '#6B7280',
  charcoal400: '#9CA3AF',
  borderLight: '#E5E7EB',
  borderBeige: '#E6DFD5',

  // Semantic
  success: '#15803D',
  warning: '#D97706',
  error:   '#DC2626',
} as const;

export const typography = {
  fonts: {
    display: 'var(--font-display, "Space Grotesk"), -apple-system, BlinkMacSystemFont, sans-serif',
    body: 'var(--font-inter, "Inter"), -apple-system, BlinkMacSystemFont, sans-serif',
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

export const spacing = {
  containerMax: '1320px',
  sectionPadding: 'clamp(4rem, 8vw, 6.5rem)',
} as const;
