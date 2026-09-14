'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Scale, Phone, Zap, Clock, Shield, ArrowRight, X, Check } from 'lucide-react';
import type { Product } from '@/lib/types';

interface Props {
  product: Product;
  categoryName: string;
  relatedProducts: Product[];
}

export function ProductDetailClient({ product, categoryName, relatedProducts }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'variants'>('overview');
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8">
      {/* Breadcrumb */}
      <div className="container-site mb-6">
        <nav>
          <ol className="flex items-center gap-2 text-xs font-medium text-[#7A6242]">
            <li>
              <Link href="/" className="hover:text-[#14532D] transition-colors">HOME</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/machines" className="hover:text-[#14532D] transition-colors">MACHINES</Link>
            </li>
            <li>/</li>
            <li>
              <Link href={`/machines/${product.category}`} className="hover:text-[#14532D] transition-colors">{categoryName.toUpperCase()}</Link>
            </li>
            <li>/</li>
            <li className="text-[#111827]">{product.name.toUpperCase()}</li>
          </ol>
        </nav>
      </div>

      {/* Main Product Card (Gallery + Info) */}
      <div className="container-site mb-12">
        <div className="bg-white rounded-2xl p-6 md:p-10 border border-[#EAE1D5] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Gallery Left (7 Cols) */}
            <div className="lg:col-span-7">
              {/* Main Image View */}
              <div className="relative h-80 sm:h-96 md:h-[420px] w-full bg-[#FAF7F2] rounded-xl overflow-hidden border border-[#EFE6D8] mb-4">
                <Image
                  src={product.images[activeImage]?.src || '/images/AGF220-1.png'}
                  alt={product.images[activeImage]?.alt || product.name}
                  fill
                  className="object-contain p-6"
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute top-4 left-4 badge-green">
                  {product.availability === 'in-stock' ? '● In Stock' : '● Special Order'}
                </div>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`relative w-20 h-16 rounded-lg overflow-hidden bg-[#FAF7F2] shrink-0 border-2 transition-all ${
                        idx === activeImage
                          ? 'border-[#15803D] ring-2 ring-[#15803D]/20'
                          : 'border-[#EFE6D8] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-contain p-1"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Meta Right (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#15803D]">
                  {categoryName}
                </span>
                <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#111827] mt-1 mb-3">
                  {product.name}
                </h1>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                  {product.shortDescription}
                </p>

                {/* Key Spec Badges Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="spec-pill">
                    <span className="text-[10px] uppercase font-medium text-[#7A6242]">Working Width</span>
                    <span className="text-base font-semibold text-[#111827]">{product.workingWidth}</span>
                  </div>
                  <div className="spec-pill">
                    <span className="text-[10px] uppercase font-medium text-[#7A6242]">Power Required</span>
                    <span className="text-base font-semibold text-[#111827]">{product.requiredPower}</span>
                  </div>
                  <div className="spec-pill">
                    <span className="text-[10px] uppercase font-medium text-[#7A6242]">Total Weight</span>
                    <span className="text-base font-semibold text-[#111827]">{product.weight}</span>
                  </div>
                  <div className="spec-pill">
                    <span className="text-[10px] uppercase font-medium text-[#7A6242]">PTO Speed</span>
                    <span className="text-base font-semibold text-[#111827]">{product.pto}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-[#EAE1D5]">
                <button
                  onClick={() => setShowQuoteModal(true)}
                  className="w-full btn-primary py-3.5 text-center font-semibold shadow-xs cursor-pointer"
                >
                  REQUEST IMMEDIATE PRICING & QUOTE
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href={`/compare?add=${product.id}`}
                    className="btn-beige text-xs font-semibold py-2.5 text-center inline-flex items-center justify-center gap-1.5"
                  >
                    <Scale className="w-3.5 h-3.5 text-[#14532D]" />
                    <span>Add to Comparison</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-white text-xs font-semibold py-2.5 text-center inline-flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#14532D]" />
                    <span>Talk to Expert</span>
                  </Link>
                </div>

                <div className="bg-[#FAF7F2] p-3 rounded-lg border border-[#EFE6D8] text-[11px] text-[#4B5563] flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#14532D]" />
                    24–48h Dispatch in Europe
                  </span>
                  <span className="font-semibold text-[#14532D] inline-flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5" />
                    2-Year Warranty
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs (Overview / Technical Specs / Variants) */}
      <div className="container-site mb-16">
        <div className="bg-white rounded-2xl border border-[#EAE1D5] shadow-xs overflow-hidden">
          {/* Tabs header */}
          <div className="flex border-b border-[#EAE1D5] bg-[#FAF7F2] px-6">
            {[
              { id: 'overview', label: 'Overview & Features' },
              { id: 'specs', label: 'Technical Specifications' },
              { id: 'variants', label: `Available Models (${product.variants.length})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`py-4 px-6 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-[#14532D] text-[#14532D] bg-white'
                    : 'border-transparent text-[#6B7280] hover:text-[#111827]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-10">
            {activeTab === 'overview' && (
              <div className="max-w-3xl space-y-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#111827] mb-3">
                    Machine Description & Field Application
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EAE1D5]">
                  <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EFE6D8]">
                    <h4 className="text-xs font-semibold uppercase text-[#14532D] mb-1">
                      Hitch & Mounting
                    </h4>
                    <p className="text-xs text-[#4B5563]">
                      {product.attachmentType} with heavy-duty top pin and lower link pins.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EFE6D8]">
                    <h4 className="text-xs font-semibold uppercase text-[#14532D] mb-1">
                      Hydraulic Configuration
                    </h4>
                    <p className="text-xs text-[#4B5563]">
                      {product.hydraulicRequirements || 'Standard mechanical linkage / PTO only.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="max-w-3xl">
                <table className="w-full text-xs sm:text-sm text-left border border-[#EAE1D5] rounded-lg overflow-hidden">
                  <tbody className="divide-y divide-[#EAE1D5]">
                    <tr className="bg-[#FAF7F2]">
                      <td className="py-3 px-4 font-semibold text-[#7A6242] w-1/3">Working Width</td>
                      <td className="py-3 px-4 font-semibold text-[#111827]">{product.workingWidth}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#7A6242]">Required Power</td>
                      <td className="py-3 px-4 font-semibold text-[#111827]">{product.requiredPower}</td>
                    </tr>
                    <tr className="bg-[#FAF7F2]">
                      <td className="py-3 px-4 font-semibold text-[#7A6242]">Machine Weight</td>
                      <td className="py-3 px-4 font-semibold text-[#111827]">{product.weight}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#7A6242]">PTO Speed</td>
                      <td className="py-3 px-4 font-semibold text-[#111827]">{product.pto}</td>
                    </tr>
                    <tr className="bg-[#FAF7F2]">
                      <td className="py-3 px-4 font-semibold text-[#7A6242]">Attachment Type</td>
                      <td className="py-3 px-4 font-semibold text-[#111827]">{product.attachmentType}</td>
                    </tr>
                    {product.numberOfBlades && (
                      <tr>
                        <td className="py-3 px-4 font-semibold text-[#7A6242]">Number of Blades / Flails</td>
                        <td className="py-3 px-4 font-semibold text-[#111827]">{product.numberOfBlades}</td>
                      </tr>
                    )}
                    {product.dimensions && (
                      <tr className="bg-[#FAF7F2]">
                        <td className="py-3 px-4 font-semibold text-[#7A6242]">Overall Dimensions</td>
                        <td className="py-3 px-4 font-semibold text-[#111827]">{product.dimensions}</td>
                      </tr>
                    )}
                    {product.workingDepth && (
                      <tr>
                        <td className="py-3 px-4 font-semibold text-[#7A6242]">Working Depth / Height</td>
                        <td className="py-3 px-4 font-semibold text-[#111827]">{product.workingDepth}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'variants' && (
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm text-left border border-[#EAE1D5] rounded-lg">
                  <thead className="bg-[#FAF7F2] text-[#7A6242] uppercase text-[11px] font-semibold">
                    <tr>
                      <th className="py-3 px-4">Model</th>
                      <th className="py-3 px-4">Working Width</th>
                      <th className="py-3 px-4">Weight</th>
                      <th className="py-3 px-4">Required HP</th>
                      <th className="py-3 px-4">Availability</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EAE1D5]">
                    {product.variants.map((v) => (
                      <tr key={v.model} className="hover:bg-[#FAF7F2]">
                        <td className="py-3.5 px-4 font-semibold text-[#111827]">{v.model}</td>
                        <td className="py-3.5 px-4 font-medium text-[#4B5563]">{v.workingWidth}</td>
                        <td className="py-3.5 px-4 font-medium text-[#4B5563]">{v.weight}</td>
                        <td className="py-3.5 px-4 font-medium text-[#4B5563]">{v.requiredPower}</td>
                        <td className="py-3.5 px-4">
                          <span className="badge-green text-[10px]">
                            {v.availability === 'in-stock' ? 'In Stock' : 'On Order'}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => setShowQuoteModal(true)}
                            className="text-xs font-semibold text-[#14532D] hover:underline inline-flex items-center gap-1"
                          >
                            <span>Quote Model</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <div className="container-site mb-12">
          <div className="mb-6">
            <h3 className="font-display text-2xl font-semibold text-[#111827]">
              Related & Compatible Implements
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                href={`/machines/${rel.category}/${rel.slug}`}
                className="card-clean p-5 flex flex-col justify-between bg-white hover:border-[#14532D]/30 transition-all duration-300"
              >
                <div>
                  <div className="relative h-44 w-full bg-[#FAF7F2] rounded-lg overflow-hidden border border-[#EFE6D8] mb-3">
                    <Image
                      src={rel.images[0]?.src || '/images/AGF220-1.png'}
                      alt={rel.name}
                      fill
                      className="object-contain p-3"
                      sizes="280px"
                    />
                  </div>
                  <h4 className="font-display text-base font-semibold text-[#111827]">{rel.name}</h4>
                  <p className="text-xs text-[#4B5563] line-clamp-2 mt-1">{rel.shortDescription}</p>
                </div>
                <div className="pt-3 border-t border-[#EFE6D8] flex items-center justify-between text-xs font-semibold text-[#14532D]">
                  <span>{rel.workingWidth}</span>
                  <span className="inline-flex items-center gap-1">
                    <span>View Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Quick Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 border border-[#EAE1D5] shadow-2xl relative">
            <button
              onClick={() => { setShowQuoteModal(false); setQuoteSubmitted(false); }}
              className="absolute top-4 right-4 text-[#9CA3AF] hover:text-[#111827] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {quoteSubmitted ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-[#F0FDF4] text-[#15803D] flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#111827] mb-2">
                  Quote Request Received!
                </h3>
                <p className="text-sm text-[#4B5563] mb-6">
                  Thank you for your interest in the <strong>{product.name}</strong>. Our machinery specialist will email you the official pricing and delivery estimate within 4 business hours.
                </p>
                <button
                  onClick={() => { setShowQuoteModal(false); setQuoteSubmitted(false); }}
                  className="btn-primary"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <span className="badge-green mb-2">INSTANT INQUIRY</span>
                <h3 className="font-display text-2xl font-semibold text-[#111827] mb-1">
                  Request Quote for {product.name}
                </h3>
                <p className="text-xs text-[#6B7280] mb-6">
                  Fill in your contact info to receive competitive dealer or direct pricing.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setQuoteSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-[#7A6242] uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Jan de Vries"
                      className="w-full px-3 py-2 rounded-lg text-sm bg-[#FAF7F2] border border-[#EAE1D5] focus:bg-white focus:border-[#15803D] focus:outline-hidden text-[#111827]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#7A6242] uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="jan@agri.nl"
                        className="w-full px-3 py-2 rounded-lg text-sm bg-[#FAF7F2] border border-[#EAE1D5] focus:bg-white focus:border-[#15803D] focus:outline-hidden text-[#111827]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#7A6242] uppercase mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+32 470 12 34 56"
                        className="w-full px-3 py-2 rounded-lg text-sm bg-[#FAF7F2] border border-[#EAE1D5] focus:bg-white focus:border-[#15803D] focus:outline-hidden text-[#111827]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#7A6242] uppercase mb-1">
                      Tractor Model / Horsepower
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Deere 5075E (75 HP)"
                      className="w-full px-3 py-2 rounded-lg text-sm bg-[#FAF7F2] border border-[#EAE1D5] focus:bg-white focus:border-[#15803D] focus:outline-hidden text-[#111827]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#7A6242] uppercase mb-1">
                      Comments / Delivery Country
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Special requirements or delivery address..."
                      className="w-full px-3 py-2 rounded-lg text-sm bg-[#FAF7F2] border border-[#EAE1D5] focus:bg-white focus:border-[#15803D] focus:outline-hidden text-[#111827]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-3 font-semibold mt-2 inline-flex items-center justify-center gap-2"
                  >
                    <span>SUBMIT QUOTE INQUIRY</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

