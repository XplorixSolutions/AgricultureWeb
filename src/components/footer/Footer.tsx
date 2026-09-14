'use client';

import Link from 'next/link';
import {
  Phone,
  Mail,
  Tractor,
  FileText,
  ArrowUp,
  ShieldCheck,
} from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#122215] text-white py-12 md:py-16 overflow-hidden">
      <div className="container-site">
        {/* Floating Rounded Master Card inspired by reference layout */}
        <div className="relative rounded-[32px] bg-gradient-to-b from-[#253A28] to-[#1A2C1D] border border-white/15 p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden text-left">
          
          {/* Ambient Background Glow / Silhouette */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 space-y-12">
            
            {/* ── TOP SECTION: CENTERED HEADLINE & CIRCULAR ACTION BUTTONS ── */}
            <div className="text-center max-w-2xl mx-auto space-y-8">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                Connect with AgriForge
              </h2>

              {/* 4 Circular Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-2">
                {/* 1. Phone */}
                <a
                  href="tel:+3292980149"
                  className="flex flex-col items-center gap-2.5 group"
                >
                  <div className="w-14 h-14 rounded-full border border-white/30 bg-white/5 flex items-center justify-center text-white group-hover:bg-[#E8C68A] group-hover:text-[#1B2E18] group-hover:border-[#E8C68A] transition-all duration-300 shadow-md">
                    <Phone className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-medium text-white/80 group-hover:text-white transition-colors">
                    Call Belgium
                  </span>
                </a>

                {/* 2. Email */}
                <a
                  href="mailto:info@agriforge.be"
                  className="flex flex-col items-center gap-2.5 group"
                >
                  <div className="w-14 h-14 rounded-full border border-white/30 bg-white/5 flex items-center justify-center text-white group-hover:bg-[#E8C68A] group-hover:text-[#1B2E18] group-hover:border-[#E8C68A] transition-all duration-300 shadow-md">
                    <Mail className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-medium text-white/80 group-hover:text-white transition-colors">
                    Email Support
                  </span>
                </a>

                {/* 3. Machinery */}
                <Link
                  href="/machines"
                  className="flex flex-col items-center gap-2.5 group"
                >
                  <div className="w-14 h-14 rounded-full border border-white/30 bg-white/5 flex items-center justify-center text-white group-hover:bg-[#E8C68A] group-hover:text-[#1B2E18] group-hover:border-[#E8C68A] transition-all duration-300 shadow-md">
                    <Tractor className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-medium text-white/80 group-hover:text-white transition-colors">
                    Machinery
                  </span>
                </Link>

                {/* 4. Catalogue */}
                <Link
                  href="/resources"
                  className="flex flex-col items-center gap-2.5 group"
                >
                  <div className="w-14 h-14 rounded-full border border-white/30 bg-white/5 flex items-center justify-center text-white group-hover:bg-[#E8C68A] group-hover:text-[#1B2E18] group-hover:border-[#E8C68A] transition-all duration-300 shadow-md">
                    <FileText className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-medium text-white/80 group-hover:text-white transition-colors">
                    Catalogue
                  </span>
                </Link>
              </div>
            </div>

            {/* ── MIDDLE SECTION: BRAND DETAILS, NAV LINKS & SCROLL TOP ── */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left">
              
              {/* Left Brand Badge & Belgian Address */}
              <div className="md:col-span-5 flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-[#E8C68A] flex items-center justify-center text-[#1B2E18] shrink-0 shadow-lg border-2 border-white/20">
                  <Tractor className="w-7 h-7" strokeWidth={2} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-lg font-semibold text-white tracking-tight">
                    AgriForge Machinery Belgium
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    Industriepark-Oost 14<br />
                    9800 Deinze, Belgium
                  </p>
                  <p className="text-xs text-[#E8C68A] font-medium pt-1">
                    Tel: +32 (0) 9 298 01 49 • info@agriforge.be
                  </p>
                </div>
              </div>

              {/* Right Link Columns & Back-to-Top Button */}
              <div className="md:col-span-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                
                {/* Link Column 1 */}
                <div className="space-y-2 text-xs sm:text-sm text-white/70 text-left">
                  <p><Link href="/" className="hover:text-white transition-colors">Homepage</Link></p>
                  <p><Link href="/about" className="hover:text-white transition-colors">About Engineering</Link></p>
                  <p><Link href="/machines" className="hover:text-white transition-colors">Machinery Range</Link></p>
                  <p><Link href="/solutions" className="hover:text-white transition-colors">Task Solutions</Link></p>
                  <p><Link href="/contact" className="hover:text-white transition-colors">Contact & Dealers</Link></p>
                </div>

                {/* Link Column 2 */}
                <div className="space-y-2 text-xs sm:text-sm text-white/70 text-left">
                  <p><Link href="/machine-finder" className="hover:text-white transition-colors">Machine Finder</Link></p>
                  <p><Link href="/industries" className="hover:text-white transition-colors">Industry Sectors</Link></p>
                  <p><Link href="/resources" className="hover:text-white transition-colors">Digital Catalogue</Link></p>
                  <p><Link href="/compare" className="hover:text-white transition-colors">Compare Implements</Link></p>
                  <p><Link href="/contact" className="hover:text-white transition-colors">Dealer Application</Link></p>
                </div>

                {/* Scroll To Top Button (↑) */}
                <button
                  onClick={scrollToTop}
                  className="w-12 h-12 rounded-full border border-white/30 bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#1B2E18] transition-all duration-300 shadow-md shrink-0 self-end sm:self-center"
                  aria-label="Scroll back to top"
                >
                  <ArrowUp className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>

            </div>

            {/* ── BOTTOM SECTION: COPYRIGHT & TERMS ── */}
            <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 text-left">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E8C68A]" strokeWidth={2} />
                © {new Date().getFullYear()} AgriForge B.V. Belgium. All rights reserved. CE Certified.
              </span>
              <div className="flex items-center gap-4 text-white/70">
                <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
                <span>|</span>
                <Link href="/contact" className="hover:text-white transition-colors">Terms & Conditions</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
