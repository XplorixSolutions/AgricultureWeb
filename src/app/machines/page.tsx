'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { Search, Zap, ArrowRight } from 'lucide-react';
import { products } from '@/lib/data/products';
import { categories } from '@/lib/data/categories';
import type { Product } from '@/lib/types';

function ProductCard({ product }: { product: Product }) {
  const category = categories.find(c => c.id === product.category);
  
  return (
    <Link
      href={`/machines/${product.category}/${product.slug}`}
      className="card-clean group flex flex-col justify-between overflow-hidden bg-white hover:border-[#14532D]/30 transition-all duration-300"
    >
      <div>
        {/* Image */}
        <div className="relative h-56 w-full bg-[#FAF7F2] overflow-hidden border-b border-[#EFE6D8]">
          <Image
            src={product.images[0]?.src || '/images/AGF220-1.png'}
            alt={product.images[0]?.alt || product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <span className="badge-green text-[10px]">
              {product.availability === 'in-stock' ? '● In Stock' : product.availability === 'on-order' ? '● On Order' : '● Special Order'}
            </span>
          </div>
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-[11px] font-semibold text-[#14532D] border border-[#EAE1D5]">
            {product.workingWidth}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="text-[11px] font-medium uppercase tracking-wider text-[#7A6242]">
            {category?.name || product.category}
          </span>
          <h3 className="font-display text-lg font-semibold text-[#111827] group-hover:text-[#14532D] transition-colors mt-0.5 mb-1.5">
            {product.name}
          </h3>
          <p className="text-xs text-[#4B5563] line-clamp-2 leading-relaxed mb-4">
            {product.shortDescription}
          </p>

          {/* Quick Specs */}
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

      {/* Footer link */}
      <div className="px-5 pb-5 pt-2 flex items-center justify-between">
        <span className="text-xs font-semibold text-[#14532D]">
          {product.priceType === 'request' ? 'REQUEST QUOTE' : `€${product.price}`}
        </span>
        <span className="w-7 h-7 rounded-full bg-[#F5EFEB] group-hover:bg-[#14532D] group-hover:text-white text-[#14532D] flex items-center justify-center text-xs transition-colors">
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  );
}

export default function MachinesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('name');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    if (activeCategory) {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q))
      );
    }
    if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === 'power') filtered.sort((a, b) => a.requiredPower.localeCompare(b.requiredPower));
    return filtered;
  }, [activeCategory, sortBy, searchQuery]);

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10">
      <div className="container-site">
        {/* Page Header */}
        <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#EAE1D5] mb-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="badge-green mb-3">
                PRODUCT CATALOGUE & SPECIFICATIONS
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-semibold text-[#111827]">
                Machinery & Tractor Implements
              </h1>
              <p className="text-sm md:text-base text-[#4B5563] mt-2">
                Explore our full line of professional flail mowers, rotary tillers, power harrows, snow ploughs, and tractor attachments.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/machine-finder" className="btn-beige text-xs font-semibold py-3 text-center inline-flex items-center justify-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#14532D]" />
                <span>Use Machine Finder</span>
              </Link>
              <Link href="/contact" className="btn-primary text-xs font-semibold py-3 text-center">
                Request Custom Quote
              </Link>
            </div>
          </div>

          {/* Search & Category Filter Buttons */}
          <div className="mt-8 pt-6 border-t border-[#EAE1D5]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                    activeCategory === null
                      ? 'bg-[#14532D] text-white shadow-xs'
                      : 'bg-[#FAF7F2] text-[#4B5563] border border-[#EAE1D5] hover:bg-[#EFE6D8]'
                  }`}
                >
                  All Machines ({products.length})
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                      activeCategory === cat.id
                        ? 'bg-[#14532D] text-white shadow-xs'
                        : 'bg-[#FAF7F2] text-[#4B5563] border border-[#EAE1D5] hover:bg-[#EFE6D8]'
                    }`}
                  >
                    {cat.name} ({products.filter(p => p.category === cat.id).length})
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative min-w-[260px]">
                <input
                  type="text"
                  placeholder="Search machine model, power..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-lg text-xs bg-[#FAF7F2] border border-[#EAE1D5] focus:outline-hidden focus:border-[#15803D] focus:bg-white text-[#111827]"
                />
                <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-2.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Product Count & Sort */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#6B7280]">
          <div>
            Showing <span className="font-semibold text-[#111827]">{filteredProducts.length}</span> machines
            {activeCategory && ` in ${categories.find(c => c.id === activeCategory)?.name}`}
          </div>
          <div className="flex items-center gap-2">
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-[#EAE1D5] rounded-md px-2 py-1 text-xs text-[#111827] focus:outline-hidden focus:border-[#15803D]"
            >
              <option value="name">Model Name (A-Z)</option>
              <option value="power">Power Rating</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-[#EAE1D5]">
            <h3 className="font-display text-xl font-semibold text-[#111827] mb-2">
              No matching machines found
            </h3>
            <p className="text-sm text-[#6B7280] mb-6">
              Try adjusting your search query or selecting a different category.
            </p>
            <button
              onClick={() => { setActiveCategory(null); setSearchQuery(''); }}
              className="btn-primary text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

