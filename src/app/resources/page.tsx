import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen, Cog, Wrench, Handshake, Phone, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technical Resources & Catalogues — AgriForge Machinery',
  description: 'Download 2025 agricultural equipment catalogues, hydraulic schematics, and tractor compatibility manuals.',
};

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: '2025 Comprehensive Product Catalogue',
      desc: 'Complete machinery catalogue with detailed specifications, dimensions, gearbox ratios, and tractor HP ratings for all 50+ implements.',
      badge: 'PDF Download (18 MB)',
      icon: BookOpen,
      action: 'Download Catalogue',
    },
    {
      title: 'Tractor Compatibility & Hydraulic Guides',
      desc: 'Detailed engineering charts covering 3-point linkage geometry (CAT I, II, III), required PTO RPM (540/1000), and double-acting valve requirements.',
      badge: 'Technical Sheets',
      icon: Cog,
      action: 'View Compatibility Guide',
    },
    {
      title: 'Operator Manuals & Maintenance Schedules',
      desc: 'Step-by-step assembly instructions, rotor knife replacement procedures, belt tensioning specifications, and daily maintenance checklists.',
      badge: 'User Manuals',
      icon: Wrench,
      action: 'Access Manuals',
    },
    {
      title: 'Dealer Portal & Wholesale Information',
      desc: 'Information for authorized European equipment distributors, warranty claim registration forms, and stocking distributor pricing.',
      badge: 'Dealer Resource',
      icon: Handshake,
      action: 'Inquire Dealer Terms',
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10">
      <div className="container-site">
        {/* Header */}
        <div className="bg-[#0B2917] rounded-2xl p-8 md:p-14 text-white border border-[#14532D] shadow-lg mb-10 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="badge-green mb-3">
              DOCUMENTATION & DOWNLOADS
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-white mb-4 leading-tight">
              Technical Resources & Catalogues
            </h1>
            <p className="text-sm md:text-base text-[#EAE1D5] leading-relaxed">
              Access digital brochures, hydraulic schematics, tractor matching charts, and equipment manuals engineered to support your operations.
            </p>
          </div>
        </div>

        {/* 4 Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {resourceCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-[#EAE1D5] shadow-xs flex flex-col justify-between hover:border-[#15803D] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#EFE6D8] flex items-center justify-center text-[#14532D]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="badge-beige text-[10px]">{cat.badge}</span>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-[#111827] mb-2">
                    {cat.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                </div>

                <div>
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-xs font-medium py-3 text-center inline-flex items-center justify-center gap-2"
                  >
                    <span>{cat.action}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Team Callout */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#EAE1D5] text-center max-w-2xl mx-auto shadow-xs">
          <h3 className="font-display text-2xl font-semibold text-[#111827] mb-2">
            Need Custom Technical Schematics or Advice?
          </h3>
          <p className="text-xs sm:text-sm text-[#4B5563] mb-6 leading-relaxed">
            Our engineering team in Belgium can provide direct CAD dimensions, hydraulic valve flow requirements, and bespoke PTO configurations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-xs font-medium py-3 px-6">
              Contact Technical Team
            </Link>
            <a
              href="tel:+3292980149"
              className="btn-beige text-xs font-medium py-3 px-6 inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#14532D]" />
              <span>+32 (0) 9 298 01 49</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

