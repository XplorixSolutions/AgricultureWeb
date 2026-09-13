/**
 * TypeScript Types — Agricultural Machinery Website
 * 
 * Structured product data model designed for CMS-readiness.
 * All product fields support future migration to Sanity/Strapi/etc.
 */

// ─── PRODUCT ─────────────────────────────────────────────

export interface ProductImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  type: 'cutout' | 'field' | 'detail' | 'gallery';
}

export interface ProductDocument {
  title: string;
  type: 'spec-sheet' | 'brochure' | 'manual' | 'catalogue';
  url: string;
  fileSize?: string;
}

export interface ProductVariant {
  model: string;
  workingWidth: string;
  weight: string;
  requiredPower: string;
  price: number | null;
  priceType: 'fixed' | 'request';
  availability: 'in-stock' | 'on-order' | 'limited';
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategoryId;
  subcategory: string;
  description: string;
  shortDescription: string;
  images: ProductImage[];
  price: number | null;
  priceType: 'fixed' | 'request';
  availability: 'in-stock' | 'on-order' | 'limited';
  featured: boolean;

  // Technical specifications
  workingWidth: string;
  weight: string;
  requiredPower: string;
  pto: string;
  dimensions: string;
  hydraulicRequirements: string;
  numberOfBlades?: string;
  workingDepth?: string;
  driveType?: string;
  attachmentType?: string;

  // Relations
  applications: ApplicationId[];
  variants: ProductVariant[];
  documents: ProductDocument[];
  relatedProducts: string[]; // product IDs
  tags: string[];
}

// ─── CATEGORIES ──────────────────────────────────────────

export type CategoryId =
  | 'grassland'
  | 'soil-cultivation'
  | 'road-terrain'
  | 'forestry'
  | 'attachments'
  | 'transport';

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface Category {
  id: CategoryId;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
  icon?: string;
  subcategories: Subcategory[];
  productCount: number;
}

// ─── APPLICATIONS / INDUSTRIES ───────────────────────────

export type ApplicationId =
  | 'agriculture'
  | 'landscaping'
  | 'forestry'
  | 'municipal'
  | 'road-maintenance'
  | 'contractors'
  | 'estate-management'
  | 'ground-maintenance';

export interface Application {
  id: ApplicationId;
  name: string;
  slug: string;
  description: string;
  image: string;
}

// ─── SOLUTIONS ───────────────────────────────────────────

export type SolutionId = 'cut' | 'cultivate' | 'clear' | 'maintain' | 'transport';

export interface Solution {
  id: SolutionId;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  categories: CategoryId[];
  featuredProducts: string[];
}

// ─── INDUSTRY ────────────────────────────────────────────

export interface Industry {
  id: ApplicationId;
  name: string;
  slug: string;
  headline: string;
  description: string;
  challenges: string[];
  image: string;
  recommendedCategories: CategoryId[];
  featuredProducts: string[];
}

// ─── NEWS / ARTICLES ─────────────────────────────────────

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  author?: string;
}

// ─── RESOURCES ───────────────────────────────────────────

export interface Resource {
  id: string;
  title: string;
  type: 'catalogue' | 'technical-doc' | 'manual' | 'brochure' | 'video';
  category?: CategoryId;
  url: string;
  thumbnail?: string;
  fileSize?: string;
  date?: string;
}

// ─── QUOTE / LEAD ────────────────────────────────────────

export interface QuoteRequest {
  productId?: string;
  variantModel?: string;
  quantity: number;
  application: string;
  location: string;
  additionalRequirements: string;
  name: string;
  company: string;
  email: string;
  phone: string;
}

// ─── MACHINE FINDER ──────────────────────────────────────

export interface MachineFinderCriteria {
  workType: SolutionId;
  tractorHpRange: string;
  workingWidthMin: number;
  workingWidthMax: number;
  terrain: ApplicationId;
}

export interface MachineRecommendation {
  product: Product;
  matchScore: number;
  matchReasons: string[];
}

// ─── COMPARISON ──────────────────────────────────────────

export interface ComparisonSpec {
  label: string;
  key: keyof Product;
  unit?: string;
}

// ─── NAVIGATION ──────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  featured?: boolean;
}
