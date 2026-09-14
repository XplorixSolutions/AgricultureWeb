import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About AgriForge — Agricultural Machinery & Engineering',
  description: 'Professional agricultural machinery expertise — we understand the work because we live it.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10">
      {/* Hero */}
      <div className="container-site mb-12">
        <div className="bg-[#0B2917] rounded-2xl p-8 md:p-14 text-white border border-[#14532D] shadow-lg relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="badge-green mb-3">
              ABOUT OUR COMPANY & ENGINEERING
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold mb-4 leading-tight text-white">
              We Don&apos;t Just Supply Machines.{' '}
              <span className="text-[#D8C4A5]">We Understand The Ground.</span>
            </h1>
            <p className="text-sm md:text-base text-[#EAE1D5] leading-relaxed">
              Founded on deep agricultural experience, AgriForge provides farmers, contractors, municipal services, and landscapers across Europe with robust, reliable tractor implements that earn their keep season after season.
            </p>
          </div>
        </div>
      </div>

      {/* Story & Facility Section */}
      <div className="container-site mb-16">
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#EAE1D5] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden bg-[#FAF7F2] border border-[#EFE6D8]">
                <Image
                  src="/images/4367-Pand-2025-1.webp"
                  alt="AgriForge modern warehouse and distribution facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <p className="text-xs text-[#6B7280] text-center mt-2">
                AgriForge European Distribution & Logistics Center
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#15803D]">
                OUR ORIGIN & VALUES
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#111827]">
                Built From Real Hands-on Field Experience
              </h2>
              <div className="space-y-3 text-sm text-[#4B5563] leading-relaxed">
                <p>
                  AgriForge was established to solve a common challenge in European agriculture: professional operators deserve implements engineered with heavy-gauge steel and precision balance without inflated dealer margins.
                </p>
                <p>
                  Every flail mower, rotary tiller, and log splitter in our line is vetted under rigorous working conditions. We check frame thickness, gearbox oil tolerances, bearing housings, and rotor balance before any series goes into our active catalogue.
                </p>
                <p>
                  With central European parts warehousing and rapid dispatch capabilities, we ensure our clients and dealer network enjoy uninterrupted operation during crucial seasonal windows.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#EAE1D5]">
                <div className="spec-pill">
                  <span className="text-[10px] text-[#6B7280]">Machinery Range</span>
                  <span className="text-base font-semibold text-[#14532D]">50+ Models</span>
                </div>
                <div className="spec-pill">
                  <span className="text-[10px] text-[#6B7280]">Parts Dispatch</span>
                  <span className="text-base font-semibold text-[#14532D]">24–48 Hours</span>
                </div>
                <div className="spec-pill">
                  <span className="text-[10px] text-[#6B7280]">Dealer Network</span>
                  <span className="text-base font-semibold text-[#14532D]">15+ Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Commitments */}
      <div className="container-site mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="badge-green mb-2">QUALITY GUARANTEE</span>
          <h2 className="font-display text-3xl font-semibold text-[#111827]">
            What We Stand For
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              num: '01',
              title: 'Field-Proven Machinery',
              desc: 'Every machine is tested in tough grassland and stony soil conditions to ensure durability and minimal vibration.',
            },
            {
              num: '02',
              title: 'Honest Tractor Matching',
              desc: 'We advise on exact HP, PTO RPM, and hydraulic requirements to prevent tractor overloading or under-performance.',
            },
            {
              num: '03',
              title: 'Fast Parts Logistics',
              desc: 'Our stocked warehouse provides immediate dispatch on belts, flails, bearings, and hydraulic rams.',
            },
            {
              num: '04',
              title: 'Transparent Pricing',
              desc: 'Direct factory-competitive rates with full specification breakdowns and no hidden extras.',
            },
            {
              num: '05',
              title: 'Dedicated Dealer Support',
              desc: 'We support machinery dealers and agricultural distributors with wholesale pricing and warranty parts.',
            },
            {
              num: '06',
              title: 'Technical Consultation',
              desc: 'Direct telephone and email support from specialists who know implement geometry and tractor linkages.',
            },
          ].map((item) => (
            <div
              key={item.num}
              className="bg-white p-6 rounded-xl border border-[#EAE1D5] shadow-xs hover:border-[#15803D] transition-colors"
            >
              <span className="text-xs font-medium text-[#15803D] bg-[#F0FDF4] px-2 py-0.5 rounded border border-[#BBF7D0]">
                {item.num}
              </span>
              <h3 className="font-display text-base font-semibold text-[#111827] mt-3 mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="container-site">
        <div className="bg-[#0B2917] rounded-2xl p-8 md:p-12 text-center text-white border border-[#14532D]">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-3">
            Want to Discuss Machine Requirements?
          </h3>
          <p className="text-sm text-[#EAE1D5] max-w-xl mx-auto mb-6">
            Get in touch with our technical sales team for recommendations, dealer pricing, or delivery schedules.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-beige py-3 px-6 font-medium text-xs inline-flex items-center gap-2">
              <span>CONTACT OUR TEAM</span>
              <ArrowRight className="w-4 h-4 text-[#14532D]" />
            </Link>
            <Link href="/machines" className="btn-primary py-3 px-6 font-medium text-xs">
              VIEW MACHINE RANGE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

