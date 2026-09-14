import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { industries, categories } from '@/lib/data/categories';
import { products } from '@/lib/data/products';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return { title: 'Industry Not Found' };
  return {
    title: `${ind.name} Machinery Solutions — AgriForge`,
    description: ind.description,
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const featuredProds = industry.featuredProducts
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as typeof products;

  const recCategories = industry.recommendedCategories
    .map((id) => categories.find((c) => c.id === id))
    .filter(Boolean);

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10">
      {/* Hero */}
      <div className="container-site mb-10">
        <div className="relative bg-[#0B2917] rounded-2xl overflow-hidden p-8 md:p-14 text-white border border-[#14532D] shadow-lg">
          <div className="absolute inset-0 z-0">
            <Image
              src={industry.image}
              alt={industry.name}
              fill
              className="object-cover opacity-35"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B2917] via-[#0B2917]/90 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <nav className="mb-4">
              <ol className="flex items-center gap-2 text-xs font-medium text-[#D8C4A5]">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">HOME</Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/industries" className="hover:text-white transition-colors">INDUSTRIES</Link>
                </li>
                <li>/</li>
                <li className="text-white">{industry.name}</li>
              </ol>
            </nav>

            <span className="badge-green mb-3">
              SECTOR SPECIFICATION
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-white mb-3 leading-tight">
              {industry.headline}
            </h1>
            <p className="text-sm sm:text-base text-[#EAE1D5] leading-relaxed">
              {industry.description}
            </p>
          </div>
        </div>
      </div>

      {/* Challenges & Recommended Categories */}
      <div className="container-site mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Key Challenges Left */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-8 border border-[#EAE1D5] shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#15803D] block mb-2">
              SECTOR REQUIREMENTS
            </span>
            <h3 className="font-display text-2xl font-semibold text-[#111827] mb-4">
              Operational Challenges in {industry.name}
            </h3>
            <ul className="space-y-3">
              {industry.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#4B5563]">
                  <span className="w-5 h-5 rounded-full bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0] flex items-center justify-center font-medium text-xs shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended Categories Right */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-8 border border-[#EAE1D5] shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#15803D] block mb-2">
              RECOMMENDED CATEGORIES
            </span>
            <h3 className="font-display text-2xl font-semibold text-[#111827] mb-4">
              Primary Implement Groups
            </h3>
            <div className="space-y-3">
              {recCategories.map((cat) => cat && (
                <Link
                  key={cat.id}
                  href={`/machines/${cat.slug}`}
                  className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EFE6D8] hover:border-[#15803D] flex items-center justify-between transition-all group block"
                >
                  <div>
                    <h4 className="font-display text-sm font-semibold text-[#111827] group-hover:text-[#14532D]">
                      {cat.name}
                    </h4>
                    <p className="text-xs text-[#6B7280] line-clamp-1">
                      {cat.shortDescription}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-[#14532D] group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Sector Machines */}
      {featuredProds.length > 0 && (
        <div className="container-site mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#15803D] block mb-1">
                KEY MACHINERY
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#111827]">
                Featured Machines for {industry.name}
              </h2>
            </div>
            <Link
              href="/machines"
              className="mt-3 sm:mt-0 text-xs font-medium text-[#14532D] hover:underline inline-flex items-center gap-1"
            >
              <span>View complete machine line</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProds.map((product) => (
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
                      sizes="33vw"
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
      )}
    </div>
  );
}

