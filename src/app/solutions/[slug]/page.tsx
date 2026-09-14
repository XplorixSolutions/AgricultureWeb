import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { solutions } from '@/lib/data/categories';
import { products } from '@/lib/data/products';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sol = solutions.find((s) => s.slug === slug);
  if (!sol) return { title: 'Solution Not Found' };
  return {
    title: `${sol.name} Solutions — AgriForge Machinery`,
    description: sol.description,
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  const relatedProducts = products
    .filter((p) => solution.categories.includes(p.category))
    .slice(0, 6);

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10">
      {/* Hero */}
      <div className="container-site mb-10">
        <div className="relative bg-[#0B2917] rounded-2xl overflow-hidden p-8 md:p-14 text-white border border-[#14532D] shadow-lg">
          <div className="absolute inset-0 z-0">
            <Image
              src={solution.image}
              alt={solution.name}
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
                  <Link href="/solutions" className="hover:text-white transition-colors">SOLUTIONS</Link>
                </li>
                <li>/</li>
                <li className="text-white">{solution.name}</li>
              </ol>
            </nav>

            <span className="badge-green mb-3">
              OPERATIONAL SOLUTION
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-semibold text-white mb-3">
              {solution.name}
            </h1>
            <p className="text-lg font-medium text-[#D8C4A5] mb-4">
              {solution.tagline}
            </p>
            <p className="text-sm sm:text-base text-[#EAE1D5] leading-relaxed">
              {solution.description}
            </p>
          </div>
        </div>
      </div>

      {/* Recommended Machines Grid */}
      <div className="container-site mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#15803D] block mb-1">
              FIELD-PROVEN IMPLEMENTS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#111827]">
              Recommended Machinery for {solution.name}
            </h2>
          </div>
          <Link
            href="/machines"
            className="mt-3 sm:mt-0 text-xs font-medium text-[#14532D] hover:underline inline-flex items-center gap-1"
          >
            <span>Browse all machines</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
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
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-2 left-2 badge-green text-[10px]">
                    {product.workingWidth}
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#7A6242]">
                    {product.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-[#111827] group-hover:text-[#14532D] transition-colors mt-0.5 mb-1">
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

      {/* Bottom CTA */}
      <div className="container-site">
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#EAE1D5] shadow-xs text-center max-w-2xl mx-auto">
          <h3 className="font-display text-2xl font-semibold text-[#111827] mb-2">
            Need Expert Sizing for {solution.name}?
          </h3>
          <p className="text-xs sm:text-sm text-[#4B5563] mb-6 leading-relaxed">
            Our technical support specialists can calculate the exact implement width and PTO gearing for your tractor.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-xs font-medium py-3 px-6">
              Request Specific Quote
            </Link>
            <Link href="/machine-finder" className="btn-beige text-xs font-medium py-3 px-6 inline-flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-[#14532D]" />
              <span>Try Machine Finder</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

