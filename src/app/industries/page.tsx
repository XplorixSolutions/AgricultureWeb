import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { industries } from '@/lib/data/categories';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agricultural Machinery by Industry & Sector — AgriForge',
  description: 'Specialized implement solutions for agriculture, landscaping, forestry, municipal services, and commercial contractors.',
};

export default function IndustriesPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10">
      <div className="container-site">
        {/* Header */}
        <div className="bg-[#0B2917] rounded-2xl p-8 md:p-14 text-white border border-[#14532D] shadow-lg mb-10 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="badge-green mb-3">
              EQUIPMENT FOR PROFESSIONAL SECTORS
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-white mb-4 leading-tight">
              Machinery Engineered for Your Industry
            </h1>
            <p className="text-sm md:text-base text-[#EAE1D5] leading-relaxed">
              Tailored equipment solutions and tractor implement configurations engineered specifically for the demands of your operating environment.
            </p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <Link
              key={ind.id}
              href={`/industries/${ind.slug}`}
              className="card-clean group flex flex-col justify-between overflow-hidden bg-white hover:border-[#14532D]/30 transition-all duration-300"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-[#FAF7F2]">
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 badge-green text-[10px]">
                    0{idx + 1} • {ind.name}
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="font-display text-2xl font-semibold text-[#111827] group-hover:text-[#14532D] transition-colors mb-2">
                    {ind.name}
                  </h2>
                  <p className="text-xs font-semibold text-[#7A6242] uppercase tracking-wider mb-2">
                    {ind.headline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#4B5563] line-clamp-3 leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#FAF7F2]">
                <span className="text-xs font-semibold text-[#14532D]">
                  EXPLORE {ind.name.toUpperCase()}
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

