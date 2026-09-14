'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Check,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Leaf,
  Tractor,
  Trees,
  Sparkles,
  Package,
  Building2,
} from 'lucide-react';
import { products } from '@/lib/data/products';
import { categories } from '@/lib/data/categories';
import type { Product, SolutionId, ApplicationId } from '@/lib/types';

type Step = 1 | 2 | 3 | 4 | 'results';

interface Criteria {
  workType: SolutionId | '';
  hpRange: string;
  widthRange: string;
  terrain: ApplicationId | '';
}

function getRecommendations(criteria: Criteria): { product: Product; score: number; reasons: string[] }[] {
  const categoryMap: Record<string, string[]> = {
    cut: ['grassland'],
    cultivate: ['soil-cultivation'],
    clear: ['forestry'],
    maintain: ['road-terrain'],
    transport: ['transport', 'attachments'],
  };

  const hpRanges: Record<string, [number, number]> = {
    '10-30': [10, 30],
    '30-60': [30, 60],
    '60-100': [60, 100],
    '100+': [100, 999],
  };

  const cats = criteria.workType ? categoryMap[criteria.workType] || [] : [];
  const hpRange = criteria.hpRange ? hpRanges[criteria.hpRange] : null;

  return products
    .map((p) => {
      let score = 0;
      const reasons: string[] = [];

      if (cats.length && cats.includes(p.category)) {
        score += 40;
        reasons.push('Direct match for your primary work task');
      }
      if (criteria.terrain && p.applications.includes(criteria.terrain)) {
        score += 25;
        reasons.push('Designed for your specific operational terrain');
      }

      if (hpRange) {
        const match = p.requiredPower.match(/(\d+)/);
        if (match) {
          const minPower = parseInt(match[1]);
          if (minPower >= hpRange[0] && minPower <= hpRange[1]) {
            score += 25;
            reasons.push('Optimal horsepower match for your tractor');
          } else if (minPower <= hpRange[1]) {
            score += 10;
            reasons.push('Compatible with your tractor class');
          }
        }
      }

      if (p.availability === 'in-stock') {
        score += 10;
        reasons.push('In stock for rapid delivery');
      }

      return { product: p, score, reasons };
    })
    .filter((r) => r.score > 20)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);
}

export default function MachineFinderPage() {
  const [step, setStep] = useState<Step>(1);
  const [criteria, setCriteria] = useState<Criteria>({
    workType: '',
    hpRange: '',
    widthRange: '',
    terrain: '',
  });
  const [results, setResults] = useState<ReturnType<typeof getRecommendations>>([]);

  const handleFinish = () => {
    const recs = getRecommendations(criteria);
    setResults(recs);
    setStep('results');
  };

  const resetFinder = () => {
    setCriteria({ workType: '', hpRange: '', widthRange: '', terrain: '' });
    setStep(1);
    setResults([]);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10">
      <div className="container-site max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-[#0B2917] rounded-2xl p-8 md:p-12 text-white mb-8 border border-[#14532D] shadow-lg text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="badge-green mb-3">
              INTELLIGENT EQUIPMENT ADVISOR
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-semibold text-white mb-3">
              Find Your Ideal Machine
            </h1>
            <p className="text-sm md:text-base text-[#EAE1D5]">
              Answer 4 simple questions regarding your tractor specifications and operational needs to get tailored implement recommendations.
            </p>
          </div>
        </div>

        {/* Wizard Box */}
        <div className="bg-white rounded-2xl p-6 md:p-10 border border-[#EAE1D5] shadow-xs">
          {/* Progress Indicator */}
          {step !== 'results' && (
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#EAE1D5]">
              {[
                { num: 1, label: 'Work Type' },
                { num: 2, label: 'Tractor HP' },
                { num: 3, label: 'Width' },
                { num: 4, label: 'Sector' },
              ].map((s) => (
                <div key={s.num} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-xs ${
                      step === s.num
                        ? 'bg-[#14532D] text-white'
                        : (step as number) > s.num
                        ? 'bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]'
                        : 'bg-[#FAF7F2] text-[#9CA3AF] border border-[#EAE1D5]'
                    }`}
                  >
                    {(step as number) > s.num ? <Check className="w-4 h-4" /> : `0${s.num}`}
                  </div>
                  <span
                    className={`hidden sm:inline text-xs font-medium ${
                      step === s.num ? 'text-[#111827]' : 'text-[#6B7280]'
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* STEP 1: Work Type */}
          {step === 1 && (
            <div>
              <h3 className="font-display text-2xl font-semibold text-[#111827] mb-2">
                What is your primary task?
              </h3>
              <p className="text-xs text-[#6B7280] mb-6">
                Choose the main operation you need this implement for.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'cut', label: 'CUT — Grass & Vegetation', desc: 'Flail mowers, rotary cutters, roadside mowing', icon: Leaf },
                  { id: 'cultivate', label: 'CULTIVATE — Soil & Seedbed', desc: 'Rotary tillers, power harrows, ground prep', icon: Tractor },
                  { id: 'clear', label: 'CLEAR — Forestry & Logs', desc: 'Wood chippers, log splitters, heavy scrub', icon: Trees },
                  { id: 'maintain', label: 'MAINTAIN — Roads & Yards', desc: 'Sweepers, snow ploughs, weed brushes', icon: Sparkles },
                  { id: 'transport', label: 'TRANSPORT — Bulk Material', desc: 'Tipping trailers, transport boxes, attachments', icon: Package },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCriteria({ ...criteria, workType: item.id as SolutionId });
                        setStep(2);
                      }}
                      className={`p-5 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-4 ${
                        criteria.workType === item.id
                          ? 'border-[#15803D] bg-[#F0FDF4] ring-2 ring-[#15803D]/20'
                          : 'border-[#EAE1D5] bg-[#FAF7F2] hover:bg-[#F5EFEB] hover:border-[#D8C4A5]'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-white border border-[#EAE1D5] flex items-center justify-center text-[#14532D] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display text-sm font-semibold text-[#111827]">
                          {item.label}
                        </h4>
                        <p className="text-xs text-[#4B5563] mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Tractor HP */}
          {step === 2 && (
            <div>
              <h3 className="font-display text-2xl font-semibold text-[#111827] mb-2">
                What is your tractor&apos;s horsepower?
              </h3>
              <p className="text-xs text-[#6B7280] mb-6">
                We will filter machines that match your tractor&apos;s lift and PTO power.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: '10-30', label: '10 – 30 HP (Sub-Compact / Compact)', desc: 'Kubota, Iseki, Solis, Yanmar small tractors' },
                  { id: '30-60', label: '30 – 60 HP (Medium Utility)', desc: 'Tafe, John Deere 3/4 series, New Holland Boomer' },
                  { id: '60-100', label: '60 – 100 HP (Standard Farm)', desc: 'YTO, Massey Ferguson, Deutz-Fahr standard series' },
                  { id: '100+', label: '100+ HP (Heavy Agriculture)', desc: 'High-torque tractors for wide commercial implements' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCriteria({ ...criteria, hpRange: item.id });
                      setStep(3);
                    }}
                    className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                      criteria.hpRange === item.id
                        ? 'border-[#15803D] bg-[#F0FDF4] ring-2 ring-[#15803D]/20'
                        : 'border-[#EAE1D5] bg-[#FAF7F2] hover:bg-[#F5EFEB] hover:border-[#D8C4A5]'
                    }`}
                  >
                    <h4 className="font-display text-sm font-semibold text-[#111827]">
                      {item.label}
                    </h4>
                    <p className="text-xs text-[#4B5563] mt-1">
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="btn-white text-xs py-2 px-4 inline-flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Working Width */}
          {step === 3 && (
            <div>
              <h3 className="font-display text-2xl font-semibold text-[#111827] mb-2">
                Preferred Working Width
              </h3>
              <p className="text-xs text-[#6B7280] mb-6">
                Choose the implement width that fits your field or gate access.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'narrow', label: 'Under 140 cm', desc: 'Compact width for orchards, vineyards & narrow paths' },
                  { id: 'medium', label: '140 – 200 cm', desc: 'Versatile standard width for pasture & paddocks' },
                  { id: 'wide', label: '200 cm and above', desc: 'High output for large open fields and commercial jobs' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCriteria({ ...criteria, widthRange: item.id });
                      setStep(4);
                    }}
                    className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                      criteria.widthRange === item.id
                        ? 'border-[#15803D] bg-[#F0FDF4] ring-2 ring-[#15803D]/20'
                        : 'border-[#EAE1D5] bg-[#FAF7F2] hover:bg-[#F5EFEB] hover:border-[#D8C4A5]'
                    }`}
                  >
                    <h4 className="font-display text-sm font-semibold text-[#111827]">
                      {item.label}
                    </h4>
                    <p className="text-xs text-[#4B5563] mt-1">
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="btn-white text-xs py-2 px-4 inline-flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Sector / Application */}
          {step === 4 && (
            <div>
              <h3 className="font-display text-2xl font-semibold text-[#111827] mb-2">
                What sector are you operating in?
              </h3>
              <p className="text-xs text-[#6B7280] mb-6">
                Helps us tune recommendations for duty cycle and specific ground challenges.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { id: 'agriculture', label: 'Agriculture' },
                  { id: 'landscaping', label: 'Landscaping' },
                  { id: 'forestry', label: 'Forestry' },
                  { id: 'municipal', label: 'Municipal' },
                  { id: 'contractors', label: 'Contractor' },
                  { id: 'ground-maintenance', label: 'Grounds Care' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCriteria({ ...criteria, terrain: item.id as ApplicationId });
                    }}
                    className={`p-4 rounded-xl border text-center font-semibold text-sm transition-all cursor-pointer ${
                      criteria.terrain === item.id
                        ? 'border-[#15803D] bg-[#F0FDF4] text-[#14532D] ring-2 ring-[#15803D]/20'
                        : 'border-[#EAE1D5] bg-[#FAF7F2] text-[#111827] hover:bg-[#F5EFEB]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-between items-center pt-4 border-t border-[#EAE1D5]">
                <button
                  onClick={() => setStep(3)}
                  className="btn-white text-xs py-2.5 px-4 inline-flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  onClick={handleFinish}
                  className="btn-primary py-3 px-8 font-medium inline-flex items-center gap-2"
                >
                  <span>SHOW MATCHED MACHINES</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* RESULTS STEP */}
          {step === 'results' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#EAE1D5]">
                <div>
                  <span className="badge-green mb-2">
                    {results.length} MATCHING IMPLEMENTS FOUND
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-[#111827]">
                    Recommended Implements for Your Setup
                  </h3>
                </div>
                <button
                  onClick={resetFinder}
                  className="btn-beige text-xs py-2 px-4 self-start inline-flex items-center gap-1.5 font-medium"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#14532D]" />
                  <span>Reset & Search Again</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map(({ product, score, reasons }) => (
                  <div
                    key={product.id}
                    className="card-clean p-5 flex flex-col justify-between bg-white border border-[#EAE1D5] hover:border-[#14532D]/30 transition-all duration-300"
                  >
                    <div>
                      <div className="relative h-48 w-full bg-[#FAF7F2] rounded-lg overflow-hidden border border-[#EFE6D8] mb-3">
                        <Image
                          src={product.images[0]?.src || '/images/AGF220-1.png'}
                          alt={product.name}
                          fill
                          className="object-contain p-3"
                          sizes="280px"
                        />
                        <div className="absolute top-2 right-2 bg-[#15803D] text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                          {score}% Match
                        </div>
                      </div>

                      <span className="text-[10px] font-medium uppercase text-[#7A6242]">
                        {product.category}
                      </span>
                      <h4 className="font-display text-lg font-semibold text-[#111827] mt-0.5">
                        {product.name}
                      </h4>
                      <p className="text-xs text-[#4B5563] line-clamp-2 mt-1">
                        {product.shortDescription}
                      </p>

                      {/* Matching reasons */}
                      <div className="my-3 p-2.5 rounded bg-[#F0FDF4] border border-[#BBF7D0] space-y-1">
                        {reasons.map((r, i) => (
                          <div key={i} className="text-[11px] text-[#14532D] font-medium flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#15803D] shrink-0" />
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>

                      {/* Quick specs */}
                      <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                        <div className="spec-pill">
                          <span className="text-[10px] text-[#6B7280]">Width</span>
                          <span className="font-semibold text-[#111827]">{product.workingWidth}</span>
                        </div>
                        <div className="spec-pill">
                          <span className="text-[10px] text-[#6B7280]">Power</span>
                          <span className="font-semibold text-[#111827]">{product.requiredPower}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#EAE1D5]">
                      <Link
                        href={`/machines/${product.category}/${product.slug}`}
                        className="w-full btn-primary py-2.5 text-xs text-center font-medium inline-flex items-center justify-center gap-1.5"
                      >
                        <span>View Specifications & Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

