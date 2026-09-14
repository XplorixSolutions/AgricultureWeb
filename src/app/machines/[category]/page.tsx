import { categories } from '@/lib/data/categories';
import { products } from '@/lib/data/products';
import { notFound } from 'next/navigation';
import { CategoryPageClient } from './CategoryPageClient';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return { title: 'Category Not Found' };
  return {
    title: `${cat.name} — Agricultural Machinery`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryProducts = products.filter((p) => p.category === category.id);

  return <CategoryPageClient category={category} products={categoryProducts} />;
}
