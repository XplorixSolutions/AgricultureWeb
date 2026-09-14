import { products } from '@/lib/data/products';
import { categories } from '@/lib/data/categories';
import { notFound } from 'next/navigation';
import { ProductDetailClient } from './ProductDetailClient';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: 'Product Not Found' };

  const category = categories.find((c) => c.id === product.category);
  return {
    title: `${product.name} — ${category?.name || 'Machines'}`,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: product.images[0] ? [{ url: product.images[0].src }] : [],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const category = categories.find((c) => c.id === product.category);
  const relatedProducts = product.relatedProducts
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <ProductDetailClient
      product={product}
      categoryName={category?.name || ''}
      relatedProducts={relatedProducts as typeof products}
    />
  );
}
