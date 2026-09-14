import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { solutions } from '@/lib/data/categories';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agricultural Solutions by Task — AgriForge',
  description: 'Find tractor implements categorized by operation: Cut, Cultivate, Clear, Maintain, or Transport.',
};

export default function SolutionsPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10">
      <div className="container-site">
        {/* Header */}
        <div className="bg-[#0B2917] rounded-2xl p-8 md:p-14 text-white border border-[#14532D] shadow-lg mb-10 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="badge-green mb-3">
              EQUIPMENT BY OPERATIONAL TASK
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-white mb-4 leading-tight">
              What Does Your Land Demand?
            </h1>
            <p className="text-sm md:text-base text-[#EAE1D5] leading-relaxed">
              Explore equipment grouped specifically by operational outcome — from high-acreage pasture cutting to seedbed cultivation, woodland clearing, and road maintenance.
            </p>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, index) => (
            <Link
              key={sol.id}
              href={`/solutions/${sol.slug}`}
              className="card-clean group flex flex-col justify-between overflow-hidden bg-white hover:border-[#14532D]/30 transition-all duration-300"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-[#FAF7F2]">
                  <Image
                    src={sol.image}
                    alt={sol.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 badge-green text-[10px]">
                    0{index + 1} • {sol.name}
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="font-display text-2xl font-semibold text-[#111827] group-hover:text-[#14532D] transition-colors mb-2">
                    {sol.name}
                  </h2>
                  <p className="text-xs font-semibold text-[#7A6242] uppercase tracking-wider mb-2">
                    {sol.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#4B5563] line-clamp-3 leading-relaxed">
                    {sol.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#FAF7F2]">
                <span className="text-xs font-semibold text-[#14532D]">
                  EXPLORE {sol.name} RANGE
                </span>
                <span className="w-8 h-8 rounded-full bg-[#F5EFEB] group-hover:bg-[#14532D] group-hover:text-white text-[#14532D] flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

