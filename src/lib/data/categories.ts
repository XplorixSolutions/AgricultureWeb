import { Category, Solution, Industry, Application } from '@/lib/types';

// ─── CATEGORIES ──────────────────────────────────────────

export const categories: Category[] = [
  {
    id: 'grassland',
    name: 'Grassland Equipment',
    slug: 'grassland',
    description: 'Professional mowing, mulching and grassland maintenance machinery engineered for demanding conditions. From precision flail mowers to heavy-duty rotary cutters, every machine is built to deliver consistent results across any terrain.',
    shortDescription: 'Mowing, mulching & grassland maintenance',
    image: '/images/711-AGF-YTO-NMF704-01.webp',
    subcategories: [
      { id: 'flail-mowers', name: 'Flail Mowers', slug: 'flail-mowers', description: 'Heavy-duty flail mowers for professional grass and vegetation management' },
      { id: 'rotary-mowers', name: 'Rotary Mowers', slug: 'rotary-mowers', description: 'High-performance rotary mowers for efficient large-area cutting' },
      { id: 'mulchers', name: 'Mulchers', slug: 'mulchers', description: 'Professional mulching equipment for vegetation processing' },
      { id: 'arm-mowers', name: 'Arm Mowers', slug: 'arm-mowers', description: 'Hydraulic arm mowers for roadside and ditch maintenance' },
      { id: 'disc-mowers', name: 'Disc Mowers', slug: 'disc-mowers', description: 'Precision disc mowers for clean, fast cutting' },
    ],
    productCount: 12,
  },
  {
    id: 'soil-cultivation',
    name: 'Soil Cultivation',
    slug: 'soil-cultivation',
    description: 'Precision soil-working equipment designed to prepare ground with accuracy and efficiency. From rotary tillers to seed drills, these machines transform raw earth into productive land.',
    shortDescription: 'Tillers, harrows & soil preparation',
    image: '/images/1200-boxer-rotereggen.webp',
    subcategories: [
      { id: 'rotary-tillers', name: 'Rotary Tillers', slug: 'rotary-tillers', description: 'Heavy-duty rotary tillers for deep soil cultivation' },
      { id: 'rotary-harrows', name: 'Rotary Harrows', slug: 'rotary-harrows', description: 'Precision harrows for seedbed preparation' },
      { id: 'spading-machines', name: 'Spading Machines', slug: 'spading-machines', description: 'Professional spading machines for organic soil preparation' },
      { id: 'stone-buriers', name: 'Stone Buriers', slug: 'stone-buriers', description: 'Stone buriers for clean, stone-free seedbeds' },
    ],
    productCount: 8,
  },
  {
    id: 'road-terrain',
    name: 'Road & Terrain',
    slug: 'road-terrain',
    description: 'Specialized equipment for road maintenance, terrain management and public space upkeep. Sweepers, snow ploughs, weed brushes and spreading equipment built for year-round operation.',
    shortDescription: 'Sweepers, ploughs & terrain maintenance',
    image: '/images/2175-SS-Sneeuwschuif-11.webp',
    subcategories: [
      { id: 'sweepers', name: 'Sweepers', slug: 'sweepers', description: 'Professional sweepers for road and yard cleaning' },
      { id: 'snow-ploughs', name: 'Snow Ploughs', slug: 'snow-ploughs', description: 'Heavy-duty snow ploughs for winter maintenance' },
      { id: 'weed-brushes', name: 'Weed Brushes', slug: 'weed-brushes', description: 'Chemical-free weed removal equipment' },
      { id: 'spreaders', name: 'Spreaders', slug: 'spreaders', description: 'Salt and sand spreaders for winter road safety' },
    ],
    productCount: 6,
  },
  {
    id: 'forestry',
    name: 'Forestry',
    slug: 'forestry',
    description: 'Robust forestry machinery for professional timber and land-clearing operations. Wood chippers, log splitters and forestry attachments designed for the demands of heavy forestry work.',
    shortDescription: 'Chippers, splitters & forestry equipment',
    image: '/images/2173-Tafe-Piste-170-53.webp',
    subcategories: [
      { id: 'wood-chippers', name: 'Wood Chippers', slug: 'wood-chippers', description: 'Professional wood chippers for timber processing' },
      { id: 'log-splitters', name: 'Log Splitters', slug: 'log-splitters', description: 'Hydraulic log splitters for firewood production' },
      { id: 'forestry-mulchers', name: 'Forestry Mulchers', slug: 'forestry-mulchers', description: 'Heavy-duty forestry mulchers for land clearing' },
    ],
    productCount: 5,
  },
  {
    id: 'attachments',
    name: 'Attachments',
    slug: 'attachments',
    description: 'Versatile tractor attachments and implements for specialized tasks. From buckets and forks to clamps and hydraulic tools, extend the capability of any tractor.',
    shortDescription: 'Buckets, forks, clamps & hydraulic tools',
    image: '/images/640-KDK-3-.webp',
    subcategories: [
      { id: 'buckets', name: 'Buckets', slug: 'buckets', description: 'Front loader buckets for material handling' },
      { id: 'forks', name: 'Forks & Clamps', slug: 'forks', description: 'Bale forks, manure forks and clamps' },
      { id: 'hydraulic-tools', name: 'Hydraulic Tools', slug: 'hydraulic-tools', description: 'Hydraulic breakers, drills and specialty tools' },
    ],
    productCount: 7,
  },
  {
    id: 'transport',
    name: 'Transport',
    slug: 'transport',
    description: 'Agricultural transport solutions for moving material efficiently. Tipping trailers, transport boxes and agricultural trailers built for heavy loads and rough terrain.',
    shortDescription: 'Trailers, tippers & transport equipment',
    image: '/images/2164-SB-Z.webp',
    subcategories: [
      { id: 'tipping-trailers', name: 'Tipping Trailers', slug: 'tipping-trailers', description: 'Hydraulic tipping trailers for bulk material transport' },
      { id: 'transport-boxes', name: 'Transport Boxes', slug: 'transport-boxes', description: 'Compact transport boxes for tractors' },
    ],
    productCount: 4,
  },
];

// ─── SOLUTIONS ───────────────────────────────────────────

export const solutions: Solution[] = [
  {
    id: 'cut',
    name: 'CUT',
    slug: 'cut',
    tagline: 'Grass and vegetation management.',
    description: 'Professional mowing and vegetation management for agriculture, landscaping and municipal maintenance. Our cutting equipment delivers consistent results from manicured lawns to heavy roadside vegetation.',
    image: '/images/711-AGF-YTO-NMF704-01.webp',
    categories: ['grassland'],
    featuredProducts: ['agf-220', 'master-h-175', 'efm-175'],
  },
  {
    id: 'cultivate',
    name: 'CULTIVATE',
    slug: 'cultivate',
    tagline: 'Soil preparation and seedbed creation.',
    description: 'Precision soil cultivation equipment that transforms raw ground into productive seedbeds. From deep rotary tilling to fine harrow finishing, every pass counts.',
    image: '/images/1200-boxer-rotereggen.webp',
    categories: ['soil-cultivation'],
    featuredProducts: ['rt-150', 'rh-180'],
  },
  {
    id: 'clear',
    name: 'CLEAR',
    slug: 'clear',
    tagline: 'Forestry and land clearing.',
    description: 'Heavy-duty forestry and land-clearing machinery for professional timber operations, overgrown land reclamation and vegetation processing.',
    image: '/images/2173-Tafe-Piste-170-53.webp',
    categories: ['forestry'],
    featuredProducts: ['wc-150', 'fm-200'],
  },
  {
    id: 'maintain',
    name: 'MAINTAIN',
    slug: 'maintain',
    tagline: 'Roads, yards and public spaces.',
    description: 'Year-round terrain and infrastructure maintenance equipment. Sweeping, snow clearing, weed removal and surface treatment for roads, paths, yards and public spaces.',
    image: '/images/2175-SS-Sneeuwschuif-11.webp',
    categories: ['road-terrain'],
    featuredProducts: ['ss-180', 'wb-150'],
  },
  {
    id: 'transport',
    name: 'TRANSPORT',
    slug: 'transport',
    tagline: 'Agricultural and material handling.',
    description: 'Robust transport solutions for agricultural material handling. Tipping trailers and transport boxes designed for heavy loads across rough terrain.',
    image: '/images/2164-SB-Z.webp',
    categories: ['transport'],
    featuredProducts: ['tt-1500', 'tb-180'],
  },
];

// ─── INDUSTRIES ──────────────────────────────────────────

export const industries: Industry[] = [
  {
    id: 'agriculture',
    name: 'Agriculture',
    slug: 'agriculture',
    headline: 'MACHINES THAT EARN THEIR KEEP.',
    description: 'Professional agricultural machinery for farms of every scale. Whether you manage 5 hectares or 500, our equipment is built to handle the daily demands of modern agriculture — from grassland management to soil cultivation and transport.',
    challenges: [
      'Managing diverse terrain and crop types efficiently',
      'Maintaining productivity during tight seasonal windows',
      'Reducing downtime with reliable, serviceable equipment',
      'Balancing performance with tractor compatibility',
    ],
    image: '/images/711-AGF-YTO-NMF704-01.webp',
    recommendedCategories: ['grassland', 'soil-cultivation', 'transport'],
    featuredProducts: ['agf-220', 'rt-150', 'tt-1500'],
  },
  {
    id: 'landscaping',
    name: 'Landscaping',
    slug: 'landscaping',
    headline: 'PRECISION WHERE IT MATTERS.',
    description: 'Equipment for professional landscapers who demand precision and reliability. From fine-finish mowing to complete ground preparation, build your toolkit for projects of any scale.',
    challenges: [
      'Achieving consistent finish quality across varied conditions',
      'Managing equipment across multiple job sites',
      'Working efficiently within residential and commercial environments',
      'Adapting to different soil types and terrain conditions',
    ],
    image: '/images/2109-GF220-in-actie.webp',
    recommendedCategories: ['grassland', 'soil-cultivation', 'attachments'],
    featuredProducts: ['agf-220', 'master-m-125', 'rh-180'],
  },
  {
    id: 'forestry',
    name: 'Forestry',
    slug: 'forestry',
    headline: 'BUILT FOR THE HARDEST GROUND.',
    description: 'Heavy-duty forestry machinery for professional timber operations, land clearing and vegetation management in demanding environments.',
    challenges: [
      'Processing large volumes of timber and vegetation',
      'Operating safely in difficult terrain',
      'Managing environmental requirements and site restoration',
      'Maintaining equipment under extreme working conditions',
    ],
    image: '/images/2173-Tafe-Piste-170-53.webp',
    recommendedCategories: ['forestry', 'grassland'],
    featuredProducts: ['wc-150', 'fm-200'],
  },
  {
    id: 'municipal',
    name: 'Municipal Services',
    slug: 'municipal',
    headline: 'INFRASTRUCTURE THAT WORKS.',
    description: 'Reliable equipment for municipal and public space maintenance. Year-round solutions for road cleaning, snow clearing, vegetation management and surface treatment.',
    challenges: [
      'Maintaining large areas efficiently within budget',
      'Operating year-round across changing seasons',
      'Meeting environmental and noise regulations',
      'Ensuring public safety during operations',
    ],
    image: '/images/2175-SS-Sneeuwschuif-11.webp',
    recommendedCategories: ['road-terrain', 'grassland'],
    featuredProducts: ['ss-180', 'wb-150', 'master-h-175'],
  },
  {
    id: 'contractors',
    name: 'Contractors',
    slug: 'contractors',
    headline: 'MORE WORK. LESS DOWNTIME.',
    description: 'Professional-grade machinery for agricultural and land-management contractors. Equipment that performs day after day, job after job — because your reputation depends on it.',
    challenges: [
      'Maximizing machine uptime across intensive schedules',
      'Managing a diverse fleet for different contract types',
      'Delivering consistent results under time pressure',
      'Controlling operating costs while maintaining quality',
    ],
    image: '/images/693-AGF-YTO-NMF704-21.webp',
    recommendedCategories: ['grassland', 'soil-cultivation', 'forestry', 'transport'],
    featuredProducts: ['agf-220', 'master-h-175', 'rt-150'],
  },
  {
    id: 'ground-maintenance',
    name: 'Ground Maintenance',
    slug: 'ground-maintenance',
    headline: 'EVERY SURFACE. EVERY SEASON.',
    description: 'Complete equipment solutions for professional ground maintenance — from sports fields and parks to industrial yards and estate grounds.',
    challenges: [
      'Maintaining varied surface types to high standards',
      'Scheduling maintenance around public access and use',
      'Adapting to seasonal changes in vegetation and conditions',
      'Operating within noise and environmental constraints',
    ],
    image: '/images/2118-W12-CMS-fotodag-05.webp',
    recommendedCategories: ['grassland', 'road-terrain', 'attachments'],
    featuredProducts: ['agf-220', 'wb-150', 'master-m-125'],
  },
];

// ─── APPLICATIONS ────────────────────────────────────────

export const applications: Application[] = [
  { id: 'agriculture', name: 'Agriculture', slug: 'agriculture', description: 'Farming and crop production', image: '/images/711-AGF-YTO-NMF704-01.webp' },
  { id: 'landscaping', name: 'Landscaping', slug: 'landscaping', description: 'Professional landscape management', image: '/images/2109-GF220-in-actie.webp' },
  { id: 'forestry', name: 'Forestry', slug: 'forestry', description: 'Timber and forestry operations', image: '/images/2173-Tafe-Piste-170-53.webp' },
  { id: 'municipal', name: 'Municipal', slug: 'municipal', description: 'Public space and road maintenance', image: '/images/2175-SS-Sneeuwschuif-11.webp' },
  { id: 'road-maintenance', name: 'Road Maintenance', slug: 'road-maintenance', description: 'Road and infrastructure upkeep', image: '/images/352-WB-XL-01389.webp' },
  { id: 'contractors', name: 'Contractors', slug: 'contractors', description: 'Professional contracting services', image: '/images/693-AGF-YTO-NMF704-21.webp' },
  { id: 'estate-management', name: 'Estate Management', slug: 'estate-management', description: 'Large property and estate care', image: '/images/2118-W12-CMS-fotodag-05.webp' },
  { id: 'ground-maintenance', name: 'Ground Maintenance', slug: 'ground-maintenance', description: 'Sports fields, parks and grounds', image: '/images/2110-DSC_0016.webp' },
];

// ─── HELPER FUNCTIONS ────────────────────────────────────

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find(s => s.slug === slug);
}

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find(i => i.slug === slug);
}
