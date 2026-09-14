'use client';

import Link from 'next/link';
import { X, Zap, Scale, Tractor } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const mobileLinks = [
  {
    title: 'Machines & Implements',
    items: [
      { label: 'Grassland Equipment', href: '/machines/grassland' },
      { label: 'Soil Cultivation', href: '/machines/soil-cultivation' },
      { label: 'Road & Terrain', href: '/machines/road-terrain' },
      { label: 'Forestry Equipment', href: '/machines/forestry' },
      { label: 'Tractor Attachments', href: '/machines/attachments' },
      { label: 'Transport & Trailers', href: '/machines/transport' },
      { label: 'All 50+ Models', href: '/machines' },
    ],
  },
  {
    title: 'Solutions by Task',
    items: [
      { label: 'CUT — Grass & Vegetation', href: '/solutions/cut' },
      { label: 'CULTIVATE — Soil Preparation', href: '/solutions/cultivate' },
      { label: 'CLEAR — Forestry & Clearing', href: '/solutions/clear' },
      { label: 'MAINTAIN — Roads & Spaces', href: '/solutions/maintain' },
      { label: 'TRANSPORT — Bulk Handling', href: '/solutions/transport' },
    ],
  },
  {
    title: 'Industries',
    items: [
      { label: 'Agriculture', href: '/industries/agriculture' },
      { label: 'Landscaping', href: '/industries/landscaping' },
      { label: 'Forestry', href: '/industries/forestry' },
      { label: 'Municipal Services', href: '/industries/municipal' },
      { label: 'Contractors', href: '/industries/contractors' },
    ],
  },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl p-6 overflow-y-auto flex flex-col justify-between border-l border-[#EAE1D5]">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#EAE1D5]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#14532D] text-[#E8C68A] flex items-center justify-center font-medium shadow-sm">
                <Tractor className="w-4 h-4 text-[#E8C68A]" strokeWidth={2} />
              </div>
              <span className="font-display font-medium text-lg text-[#111827]">
                AGRI<span className="text-[#3E5634]">FORGE</span>
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#6B7280] hover:text-[#111827] rounded-lg hover:bg-[#F5EFEB]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" strokeWidth={2} />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-2 my-4">
            <Link
              href="/machine-finder"
              onClick={onClose}
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] text-[#14532D] font-medium text-xs"
            >
              <Zap className="w-3.5 h-3.5" strokeWidth={2} />
              Machine Finder
            </Link>
            <Link
              href="/compare"
              onClick={onClose}
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-[#F5EFEB] border border-[#E6D8C4] text-[#7A6242] font-medium text-xs"
            >
              <Scale className="w-3.5 h-3.5" strokeWidth={2} />
              Compare Tool
            </Link>
          </div>

          {/* Nav Categories */}
          <div className="space-y-6 pt-2">
            {mobileLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-medium uppercase tracking-wider text-[#7A6242] mb-2">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block py-1.5 px-2 rounded-md text-sm font-medium text-[#1F2937] hover:bg-[#F5EFEB] hover:text-[#14532D] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* General Pages */}
            <div className="pt-2 border-t border-[#EAE1D5]">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/about"
                    onClick={onClose}
                    className="block py-1.5 px-2 text-sm font-medium text-[#111827] hover:text-[#14532D]"
                  >
                    About Agriforge
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    onClick={onClose}
                    className="block py-1.5 px-2 text-sm font-medium text-[#111827] hover:text-[#14532D]"
                  >
                    2025 Catalogues & Docs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="block py-1.5 px-2 text-sm font-medium text-[#111827] hover:text-[#14532D]"
                  >
                    Contact & Dealer Inquiries
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="pt-6 mt-6 border-t border-[#EAE1D5]">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full btn-primary text-center mb-3"
          >
            REQUEST A QUOTE
          </Link>
          <p className="text-xs text-center text-[#6B7280]">
            BE: +32 (0) 9 298 01 49 • info@agriforge.be
          </p>
        </div>
      </div>
    </div>
  );
}
