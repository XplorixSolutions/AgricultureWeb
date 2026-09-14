'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import type { Product, Category } from '@/lib/types';

interface Props {
  category: Category;
  products: Product[];
}

export function CategoryPageClient({ category, products }: Props) {
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    if (activeSub) filtered = filtered.filter(p => p.subcategory === activeSub);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q)
      );
    }
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }, [products, activeSub, searchQuery]);

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Category Hero */}
      <section className="relative w-full bg-[#0B2917] overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2917]/95 via-[#0B2917]/85 to-[#0B2917]/60" />
        </div>

        <div className="container-site relative z-10">
          <nav className="mb-4">
            <ol className="flex items-center gap-2 text-xs font-medium text-[#D8C4A5]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/machines" className="hover:text-white transition-colors">MACHINES</Link>
              </li>
              <li>/</li>
              <li className="text-white">{category.name.toUpperCase()}</li>
            </ol>
          </nav>

          <span className="badge-green mb-3">
            {category.productCount} MACHINE MODELS AVAILABLE
          </span>

          <h1 className="font-display text-3xl md:text-5xl font-semibold text-white max-w-3xl mb-4">
            {category.name}
          </h1>

          <p className="text-sm md:text-base text-[#EAE1D5] max-w-2xl leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      {/* Filter & Content Section */}
      <div className="container-site py-10">
        {/* Sticky Filter Navigation */}
        <div className="bg-white rounded-xl p-4 shadow-xs border border-[#EAE1D5] mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <button
              onClick={() => setActiveSub(null)}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium shrink-0 transition-all ${
                !activeSub
                  ? 'bg-[#14532D] text-white shadow-xs'
                  : 'bg-[#FAF7F2] text-[#4B5563] border border-[#EAE1D5] hover:bg-[#EFE6D8]'
              }`}
            >
              All Models ({products.length})
            </button>
            {category.subcategories.map((sub) => {
              const count = products.filter(p => p.subcategory === sub.id).length;
              if (count === 0) return null;
              return (
                <button
                  key={sub.id}
                  onClick={() => setActiveSub(sub.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium shrink-0 transition-all ${
                    activeSub === sub.id
                      ? 'bg-[#14532D] text-white shadow-xs'
                      : 'bg-[#FAF7F2] text-[#4B5563] border border-[#EAE1D5] hover:bg-[#EFE6D8]'
                  }`}
                >
                  {sub.name} ({count})
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search in this category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg text-xs bg-[#FAF7F2] border border-[#EAE1D5] focus:outline-hidden focus:border-[#15803D] focus:bg-white text-[#111827]"
            />
            <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/machines/${product.category}/${product.slug}`}
              className="card-clean group flex flex-col justify-between overflow-hidden bg-white hover:border-[#14532D]/30 transition-all duration-300"
            >
              <div>
                <div className="relative h-52 w-full bg-[#FAF7F2] overflow-hidden border-b border-[#EFE6D8]">
                  <Image
                    src={product.images[0]?.src || '/images/AGF220-1.png'}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="280px"
                  />
                  <div className="absolute top-2 left-2 badge-green text-[10px]">
                    {product.workingWidth}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-[#111827] group-hover:text-[#14532D] transition-colors mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#4B5563] line-clamp-2 leading-relaxed mb-4">
                    {product.shortDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#EAE1D5] text-xs">
                    <div className="spec-pill">
                      <span className="text-[10px] text-[#6B7280]">Power</span>
                      <span className="font-semibold text-[#111827]">{product.requiredPower}</span>
                    </div>
                    <div className="spec-pill">
                      <span className="text-[10px] text-[#6B7280]">Weight</span>
                      <span className="font-semibold text-[#111827]">{product.weight}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 flex items-center justify-between">
                <span className="text-xs font-medium text-[#14532D]">
                  REQUEST QUOTE
                </span>
                <span className="w-7 h-7 rounded-full bg-[#F5EFEB] group-hover:bg-[#14532D] group-hover:text-white text-[#14532D] flex items-center justify-center text-xs transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

