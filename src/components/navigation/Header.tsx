'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MobileMenu } from './MobileMenu';
import { ChevronDown, ArrowRight, Menu, X, Scale, Zap, Tractor } from 'lucide-react';

const machineCategories = [
  {
    name: 'Grassland Equipment',
    href: '/machines/grassland',
    desc: 'Flail mowers, rotary cutters & mulchers',
    count: '12 Models',
    image: '/images/2109-GF220-in-actie.webp',
  },
  {
    name: 'Soil Cultivation',
    href: '/machines/soil-cultivation',
    desc: 'Rotary tillers, power harrows & seedbed prep',
    count: '8 Models',
    image: '/images/1200-boxer-rotereggen.webp',
  },
  {
    name: 'Road & Terrain',
    href: '/machines/road-terrain',
    desc: 'Sweepers, snow ploughs & weed brushes',
    count: '6 Models',
    image: '/images/2175-SS-Sneeuwschuif-11.webp',
  },
  {
    name: 'Forestry Equipment',
    href: '/machines/forestry',
    desc: 'Wood chippers, log splitters & mulchers',
    count: '5 Models',
    image: '/images/2173-Tafe-Piste-170-53.webp',
  },
  {
    name: 'Tractor Attachments',
    href: '/machines/attachments',
    desc: 'Buckets, bale forks & hydraulic tools',
    count: '7 Models',
    image: '/images/640-KDK-3-.webp',
  },
  {
    name: 'Transport & Tippers',
    href: '/machines/transport',
    desc: 'Hydraulic tipping trailers & transport boxes',
    count: '4 Models',
    image: '/images/2164-SB-Z.webp',
  },
];

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E8E5DD] shadow-xs">
        <div className="container-site">
          <div className="flex items-center justify-between h-20">
            {/* Logo Left */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-full bg-[#14532D] flex items-center justify-center text-[#E8C68A] shadow-md group-hover:bg-[#0B2917] transition-all border border-[#E8C68A]/30">
                <Tractor className="w-5 h-5 text-[#E8C68A]" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-medium tracking-tight text-[#1A1A1A]">
                  Agri<span className="text-[#3E5634]">Forge</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#785822] font-medium -mt-1">
                  Machinery & Implements
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Center */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className="px-3.5 py-2 rounded-full text-xs font-medium text-[#1A1A1A] hover:text-[#3E5634] hover:bg-[#F4F8F1] transition-colors"
              >
                Home
              </Link>

              {/* Machines Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('machines')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href="/machines"
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-full text-xs font-medium transition-colors ${
                    openDropdown === 'machines'
                      ? 'text-[#3E5634] bg-[#E6EFE1]'
                      : 'text-[#1A1A1A] hover:text-[#3E5634] hover:bg-[#F4F8F1]'
                  }`}
                >
                  Machines
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'machines' ? 'rotate-180 text-[#3E5634]' : 'text-[#6D786E]'}`}
                    strokeWidth={2}
                  />
                </Link>

                {openDropdown === 'machines' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] bg-white rounded-2xl shadow-2xl border border-[#E8E5DD] p-5 grid grid-cols-2 gap-3.5 animate-in fade-in slide-in-from-top-2 duration-150">
                    {machineCategories.map((cat) => (
                      <Link
                        key={cat.name}
                        href={cat.href}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#FAF8F3] transition-all group border border-transparent hover:border-[#E8E5DD]"
                      >
                        <div className="relative w-14 h-12 rounded-lg overflow-hidden bg-[#F5EFE6] shrink-0 border border-[#E8E5DD]">
                          <Image
                            src={cat.image}
                            alt={cat.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                            sizes="56px"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-xs font-medium text-[#1A1A1A] group-hover:text-[#3E5634]">
                              {cat.name}
                            </h4>
                            <span className="text-[9px] font-medium text-[#3E5634] bg-[#E6EFE1] px-1.5 py-0.5 rounded-full">
                              {cat.count}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#6D786E] line-clamp-1 mt-0.5">
                            {cat.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                    <div className="col-span-2 pt-3 border-t border-[#E8E5DD] flex items-center justify-between">
                      <Link
                        href="/machine-finder"
                        className="text-xs font-medium text-[#3E5634] hover:underline flex items-center gap-1"
                      >
                        <Zap className="w-3.5 h-3.5" strokeWidth={2} />
                        Launch Interactive Machine Finder
                        <ArrowRight className="w-3 h-3" strokeWidth={2} />
                      </Link>
                      <Link
                        href="/machines"
                        className="text-xs font-medium text-[#785822] hover:text-[#3E5634]"
                      >
                        All 50+ Models →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/solutions"
                className="px-3.5 py-2 rounded-full text-xs font-medium text-[#1A1A1A] hover:text-[#3E5634] hover:bg-[#F4F8F1] transition-colors"
              >
                Solutions
              </Link>

              <Link
                href="/industries"
                className="px-3.5 py-2 rounded-full text-xs font-medium text-[#1A1A1A] hover:text-[#3E5634] hover:bg-[#F4F8F1] transition-colors"
              >
                Industries
              </Link>

              <Link
                href="/about"
                className="px-3.5 py-2 rounded-full text-xs font-medium text-[#1A1A1A] hover:text-[#3E5634] hover:bg-[#F4F8F1] transition-colors"
              >
                About
              </Link>

              <Link
                href="/resources"
                className="px-3.5 py-2 rounded-full text-xs font-medium text-[#1A1A1A] hover:text-[#3E5634] hover:bg-[#F4F8F1] transition-colors"
              >
                Resources
              </Link>

              <Link
                href="/contact"
                className="px-3.5 py-2 rounded-full text-xs font-medium text-[#1A1A1A] hover:text-[#3E5634] hover:bg-[#F4F8F1] transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right Action CTAs */}
            <div className="flex items-center gap-3">
              <Link
                href="/compare"
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium text-[#4A544B] bg-[#FAF8F3] border border-[#E8E5DD] hover:border-[#3E5634] transition-all"
                title="Compare Selected Machines"
              >
                <Scale className="w-3.5 h-3.5" strokeWidth={2} />
                <span>Compare</span>
              </Link>

              {/* Yellow / Golden Wheat Pill Button as in reference */}
              <Link
                href="/contact"
                className="btn-wheat text-xs"
              >
                <span>REQUEST QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full text-[#1A1A1A] hover:bg-[#F5EFEB] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" strokeWidth={2} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={2} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
