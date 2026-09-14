'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Cog,
  Shield,
  Zap,
  Scale,
  Handshake,
  Phone,
  Mail,
  Tractor,
  Wheat,
  Package,
  ChevronDown,
  Leaf,
  TreePine,
  Snowflake,
} from 'lucide-react';

export default function HomePage() {
  const [activeAccordion, setActiveAccordion] = useState<number>(0);

  const marqueeItems = [
    { title: 'Flail Mowers', img: '/images/2109-GF220-in-actie.webp' },
    { title: 'Rotary Tillers', img: '/images/1200-boxer-rotereggen.webp' },
    { title: 'Power Harrows', img: '/images/2165-Overtopfrees-SB-3-.webp' },
    { title: 'Snow Ploughs', img: '/images/2175-SS-Sneeuwschuif-11.webp' },
    { title: 'Wood Chippers', img: '/images/2173-Tafe-Piste-170-53.webp' },
    { title: 'Bale Grabs', img: '/images/640-KDK-3-.webp' },
    { title: 'Tipping Trailers', img: '/images/2164-SB-Z.webp' },
    { title: 'Rotary Cutters', img: '/images/1199-cyclomaaier.webp' },
    { title: 'Backhoe Diggers', img: '/images/352-WB-XL-01389.webp' },
  ];

  return (
    <div className="bg-white min-h-screen text-[#1A1A1A]">
      {/* ═══════════════════════════════════════════════════════
          1. HERO SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#0B2917] min-h-[580px] lg:min-h-[680px] flex items-center justify-center text-center text-white py-20 lg:py-24">
        {/* Minimal Background Image with 40% Opacity */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/711-AGF-YTO-NMF704-01.webp"
            alt="Agriforge Tractor Machinery in Field"
            fill
            priority
            className="object-cover object-center opacity-40"
            sizes="100vw"
            quality={90}
          />
          {/* Lighter Green Gradient Overlay (Decreased green transparency) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B2917]/50 via-[#0B2917]/35 to-[#0B2917]/65" />
        </div>

        <div className="container-site relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto my-auto">
          {/* Main Hero Heading - Ultra High Contrast & Crisp Readability */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-5 drop-shadow-md text-center leading-[1.02]">
            AgriForge <span className="text-[#E8C68A]">Machinery</span>
          </h1>

          {/* Concise Subtitle directly below main heading */}
          <p className="text-sm sm:text-base md:text-lg text-[#EAE1D5] max-w-2xl text-center leading-relaxed mb-6 font-normal drop-shadow-xs">
            Heavy-duty agricultural machinery and tractor implements engineered for European ground conditions with robotic precision and field-tested durability.
          </p>

          {/* 2 Main Option Buttons directly below hero heading */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/machines"
              className="btn-wheat py-3.5 px-8 text-sm font-semibold inline-flex items-center gap-2 rounded-full border-2 border-[#E8C68A] hover:bg-[#E8C68A] hover:text-[#1B2E18] transition-all shadow-lg"
            >
              <span>Explore Machinery</span>
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>

            <Link
              href="/machine-finder"
              className="btn-glass py-3.5 px-8 text-sm font-semibold inline-flex items-center gap-2 rounded-full border-2 border-white/40 hover:border-white hover:bg-white/20 transition-all shadow-lg"
            >
              <Zap className="w-4 h-4 text-[#E8C68A]" strokeWidth={2} />
              <span>Use Machine Finder</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. MISSION & EDITORIAL SHOWCASE
          ═══════════════════════════════════════════════════════ */}
      <section className="section-py bg-white text-left">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 text-left">
            <div>
              <span className="eyebrow-pill mb-3">
                ABOUT COMPANY / MISSION
              </span>
              <h2 className="section-headline text-[#1A1A1A] max-w-2xl">
                Modern Solutions for Traditional Challenges
              </h2>
            </div>
            <Link
              href="/about"
              className="btn-wheat text-xs"
            >
              <span>Explore More</span>
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
            </Link>
          </div>

          {/* Wide Landscape Image */}
          <div className="relative h-72 sm:h-96 md:h-[420px] w-full rounded-3xl overflow-hidden bg-[#FAF8F3] mb-8 border border-[#E8E5DD]">
            <Image
              src="/images/2109-GF220-in-actie.webp"
              alt="Combine harvester & tractor implement in field"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* 2-Column Editorial Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <p className="text-regular text-[#4A544B] leading-relaxed">
              At AgriForge, we unite rugged European craftsmanship with modern engineering tolerances. Our machinery range delivers exceptional output whether managing large-scale crop pastures, overgrown roadside verges, or demanding seedbed preparation.
            </p>
            <p className="text-regular text-[#4A544B] leading-relaxed">
              Every implement is built with heavy-gauge reinforced steel decks, dynamically balanced rotor shafts to minimize vibration, and universal CAT I & II three-point linkages compatible with all leading tractor brands.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. INFINITE PILL MARQUEE TICKER
          ═══════════════════════════════════════════════════════ */}
      <section className="py-6 bg-[#FAF8F3] border-y border-[#E8E5DD] overflow-hidden">
        <div className="animate-marquee flex items-center gap-4">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <Link
              key={idx}
              href="/machines"
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#E8E5DD] shadow-xs hover:border-[#3E5634] transition-all shrink-0"
            >
              <div className="relative w-7 h-7 rounded-full overflow-hidden bg-[#F5EFE6]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="28px"
                />
              </div>
              <span className="font-display text-xs font-medium text-[#1A1A1A]">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. OFFERS / IMPLEMENT SERVICES
          ═══════════════════════════════════════════════════════ */}
      <section className="section-py bg-[#556B43] text-white text-left">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[#FAF0D8] text-xs font-medium uppercase tracking-widest mb-3 border border-white/20">
                OUR IMPLEMENTS
              </span>
              <h2 className="section-headline text-white">
                What Our Agricultural Machinery Offers
              </h2>
            </div>
            <Link
              href="/machines"
              className="btn-wheat text-xs"
            >
              <span>View All Machines</span>
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
            </Link>
          </div>

          {/* 4 Portrait Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 text-left">
            {[
              {
                title: 'Grassland & Mowers',
                desc: 'Flail mowers with hydraulic side shift & heavy hammer flails.',
                img: '/images/2109-GF220-in-actie.webp',
                href: '/machines/grassland',
              },
              {
                title: 'Soil Cultivation',
                desc: 'Rotary tillers & power harrows for fine seedbed preparation.',
                img: '/images/1200-boxer-rotereggen.webp',
                href: '/machines/soil-cultivation',
              },
              {
                title: 'Road & Terrain Care',
                desc: 'Heavy-duty snow ploughs, sweepers & municipal weed gear.',
                img: '/images/2175-SS-Sneeuwschuif-11.webp',
                href: '/machines/road-terrain',
              },
              {
                title: 'Forestry Implements',
                desc: 'PTO wood chippers, log splitters & land clearing mulchers.',
                img: '/images/2173-Tafe-Piste-170-53.webp',
                href: '/machines/forestry',
              },
            ].map((card, idx) => (
              <Link
                key={idx}
                href={card.href}
                className="group relative h-96 rounded-3xl overflow-hidden flex flex-col justify-end p-6 border border-white/20 transition-all hover:scale-[1.02] text-left"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                </div>

                <div className="relative z-10 text-left">
                  <h3 className="font-display text-lg font-medium text-white mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#FAF0D8] line-clamp-2 mb-4 leading-relaxed">
                    {card.desc}
                  </p>
                  <span className="btn-glass py-2 px-4 text-xs font-medium inline-flex items-center gap-1.5">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3" strokeWidth={2} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom 6 Line Icons Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 pt-10 border-t border-white/20 text-center">
            {[
              { icon: <Cog className="w-5 h-5" strokeWidth={1.5} />, label: 'Heavy Steel Chassis' },
              { icon: <Shield className="w-5 h-5" strokeWidth={1.5} />, label: 'European CE Certified' },
              { icon: <Zap className="w-5 h-5" strokeWidth={1.5} />, label: '24–48h Spare Parts' },
              { icon: <Scale className="w-5 h-5" strokeWidth={1.5} />, label: 'Dynamic Rotor Balance' },
              { icon: <Handshake className="w-5 h-5" strokeWidth={1.5} />, label: '2-Year Warranty' },
              { icon: <Phone className="w-5 h-5" strokeWidth={1.5} />, label: 'Direct Support' },
            ].map((feat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[#E8C68A]">
                  {feat.icon}
                </span>
                <span className="text-xs font-medium text-[#FAF8F3]">{feat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. FROM FIELD TO FUTURE (Split Accordion Showcase)
          ═══════════════════════════════════════════════════════ */}
      <section className="section-py bg-white text-left">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left">
            {/* Left Big Tractor Image */}
            <div className="lg:col-span-6">
              <div className="relative h-80 sm:h-96 md:h-[480px] w-full rounded-3xl overflow-hidden bg-[#FAF8F3] border border-[#E8E5DD]">
                <Image
                  src="/images/711-AGF-YTO-NMF704-01.webp"
                  alt="Modern tractor working in agricultural field"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Content & Accordions */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <span className="eyebrow-pill mb-3">
                  FUTURE TECHNOLOGY
                </span>
                <h2 className="section-headline text-[#1A1A1A] mb-4">
                  From Field to Future
                </h2>
                <p className="text-lead text-[#4A544B] leading-relaxed">
                  We integrate high-strength laser-cut components, reinforced Italian gearboxes, and precision hydraulic rams to guarantee uninterrupted performance season after season.
                </p>
              </div>

              {/* Accordions */}
              <div className="space-y-3 pt-2">
                {[
                  {
                    title: '01. Next-Gen Heavy Hydraulics & Linkages',
                    content: 'Universal CAT I & II 3-point linkages with standard double-acting hydraulic side-shift rams for seamless tractor adjustment.',
                  },
                  {
                    title: '02. Direct European Parts & Technical Support',
                    content: 'Central Belgium warehouse dispatching replacement flails, belts, PTO shafts, and seals within 24 to 48 hours.',
                  },
                ].map((acc, index) => (
                  <div
                    key={index}
                    className="border border-[#E8E5DD] rounded-2xl overflow-hidden bg-[#FAF8F3]"
                  >
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                      className="w-full flex items-center justify-between p-5 text-left font-display text-sm font-medium text-[#1A1A1A] hover:text-[#3E5634] transition-colors"
                    >
                      <span>{acc.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#785822] transition-transform duration-200 ${activeAccordion === index ? 'rotate-180' : ''}`}
                        strokeWidth={2}
                      />
                    </button>
                    {activeAccordion === index && (
                      <div className="px-5 pb-5 text-xs text-[#4A544B] leading-relaxed border-t border-[#E8E5DD] pt-3">
                        {acc.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. YOUR AGRICULTURE PARTNER (6-Grid Feature Section)
          ═══════════════════════════════════════════════════════ */}
      <section className="section-py bg-[#FAF8F3] border-t border-[#E8E5DD] text-left">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
            {/* Left Header with Circular Badge */}
            <div className="lg:col-span-4 text-left">
              <span className="eyebrow-pill mb-3">
                EQUIPMENT EXPERTISE
              </span>
              <h2 className="section-headline text-[#1A1A1A] mb-6">
                Your Agricultural Partner
              </h2>
              <p className="text-regular text-[#4A544B] mb-8 leading-relaxed">
                Trusted by commercial contractors, municipal service teams, and agricultural enterprises throughout Europe.
              </p>

              {/* Circular Action Badge */}
              <Link
                href="/machines"
                className="inline-flex flex-col items-center justify-center w-24 h-24 rounded-full bg-[#E8C68A] text-[#1B2E18] font-display text-xs font-medium hover:bg-[#DCA857] transition-transform hover:scale-105 shadow-md text-center p-2"
              >
                <span>Discover</span>
                <span className="inline-flex items-center gap-0.5">More <ArrowRight className="w-3 h-3" strokeWidth={2} /></span>
              </Link>
            </div>

            {/* Right 2x3 Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
              {[
                {
                  icon: <Cog className="w-5 h-5" strokeWidth={1.5} />,
                  title: 'Chassis Durability',
                  desc: 'Reinforced robot-welded heavy gauge steel chassis engineered to absorb intense field impacts.',
                },
                {
                  icon: <Scale className="w-5 h-5" strokeWidth={1.5} />,
                  title: 'Precision Rotor Balance',
                  desc: 'Dynamically balanced rotor shafts reduce vibration and extend gearbox bearing lifespan.',
                },
                {
                  icon: <Tractor className="w-5 h-5" strokeWidth={1.5} />,
                  title: 'Farm Mechanization',
                  desc: 'Universal hitch geometry compatible with compact tractors from 15 HP up to 120+ HP utility models.',
                },
                {
                  icon: <Wheat className="w-5 h-5" strokeWidth={1.5} />,
                  title: 'Seasonal Readiness',
                  desc: 'Tested for continuous operation during intense spring cutting and autumn soil preparation windows.',
                },
                {
                  icon: <Package className="w-5 h-5" strokeWidth={1.5} />,
                  title: 'Rapid Spares Dispatch',
                  desc: 'Guaranteed OEM replacement blades, belts, and hydraulic rams shipped direct across Europe.',
                },
                {
                  icon: <Handshake className="w-5 h-5" strokeWidth={1.5} />,
                  title: 'Agricultural Contracting',
                  desc: 'High-hour reliability designed for commercial contractors who depend on zero equipment downtime.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 text-left">
                  <div className="w-10 h-10 rounded-full bg-[#FAF0D8] border border-[#F2DDB3] text-[#785822] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-display text-sm font-medium text-[#1A1A1A] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4A544B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7. FROM SEED TO HARVEST (3-Card Solutions Banner)
          ═══════════════════════════════════════════════════════ */}
      <section className="section-py bg-[#3E5634] text-white text-left">
        <div className="container-site text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[#FAF0D8] text-xs font-medium uppercase tracking-widest mb-3 border border-white/20">
                LIFECYCLE SOLUTIONS
              </span>
              <h2 className="section-headline text-white">
                From Ground to Harvest
              </h2>
            </div>
            <Link
              href="/solutions"
              className="btn-wheat text-xs"
            >
              <span>All Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
            </Link>
          </div>

          {/* 3 Landscape Cards with Number Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
            {[
              {
                num: '01',
                title: 'Grassland & Pasture Management',
                img: '/images/2109-GF220-in-actie.webp',
                href: '/solutions/cut',
                icon: <Leaf className="w-3.5 h-3.5" strokeWidth={2} />,
              },
              {
                num: '02',
                title: 'Soil Preparation & Seedbed Cultivation',
                img: '/images/1200-boxer-rotereggen.webp',
                href: '/solutions/cultivate',
                icon: <TreePine className="w-3.5 h-3.5" strokeWidth={2} />,
              },
              {
                num: '03',
                title: 'Road, Terrain & Forestry Upkeep',
                img: '/images/2175-SS-Sneeuwschuif-11.webp',
                href: '/solutions/maintain',
                icon: <Snowflake className="w-3.5 h-3.5" strokeWidth={2} />,
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group card-clean overflow-hidden bg-white text-left block"
              >
                <div className="relative h-56 w-full overflow-hidden bg-[#FAF8F3]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="33vw"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#E8C68A] text-[#1B2E18] font-display font-medium text-xs flex items-center justify-center shadow-sm">
                    {item.num}
                  </div>
                </div>
                <div className="p-6 text-left bg-white">
                  <h3 className="font-display text-base font-semibold text-[#111827] group-hover:text-[#14532D] transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#9C7430] group-hover:underline inline-flex items-center gap-1">
                    Explore Solution
                    <ArrowRight className="w-3 h-3" strokeWidth={2} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          8. NEWS & ARTICLES
          ═══════════════════════════════════════════════════════ */}
      <section className="section-py bg-white text-left">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
            <div>
              <span className="eyebrow-pill mb-3">
                BLOG & RESOURCES
              </span>
              <h2 className="section-headline text-[#1A1A1A]">
                Explore Our Latest News & Tips
              </h2>
            </div>
            <Link
              href="/resources"
              className="btn-primary text-xs font-medium py-3 px-6"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                tag: 'GUIDE',
                title: 'Choosing the Right Flail Mower for Your Tractor HP',
                desc: 'A complete breakdown of hammer vs. Y-blade options, working widths, and PTO speed matching.',
                img: '/images/AGF220-1.png',
                time: '4 Min Read',
              },
              {
                tag: 'TECH',
                title: 'Why Dynamic Rotor Balancing Extends Implement Life',
                desc: 'How electronic factory balancing prevents bearing fatigue in heavy-duty soil tillers and mulchers.',
                img: '/images/425-Klepelmaaier-Boxer-master-h.webp',
                time: '5 Min Read',
              },
              {
                tag: 'MAINTENANCE',
                title: 'Winter Preparation: Snow Ploughs & Salt Spreaders',
                desc: 'Essential pre-season hydraulic checks, trip-spring adjustments, and anti-corrosion lubrication tips.',
                img: '/images/2175-SS-Sneeuwschuif-11.webp',
                time: '3 Min Read',
              },
            ].map((art, idx) => (
              <div
                key={idx}
                className="card-clean overflow-hidden bg-white text-left flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full bg-[#FAF8F3] overflow-hidden border-b border-[#E8E5DD]">
                    <Image
                      src={art.img}
                      alt={art.title}
                      fill
                      className="object-contain p-4"
                      sizes="33vw"
                    />
                    <div className="absolute top-3 left-3 bg-[#E8C68A] text-[#1B2E18] text-[10px] font-medium px-2.5 py-0.5 rounded-full">
                      {art.tag}
                    </div>
                  </div>

                  <div className="p-6 text-left">
                    <h3 className="font-display text-base font-medium text-[#1A1A1A] mb-2 leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-[#4A544B] leading-relaxed line-clamp-2">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs text-[#6D786E] border-t border-[#FAF8F3]">
                  <span>{art.time}</span>
                  <Link href="/resources" className="font-medium text-[#3E5634] hover:underline inline-flex items-center gap-1">
                    Read Article
                    <ArrowRight className="w-3 h-3" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
