'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { products } from '@/lib/data/products';
import { categories } from '@/lib/data/categories';

export default function ComparePage() {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'agf-220',
    'master-h-175',
  ]);

  const selectedProducts = selectedIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as typeof products;

  const addProduct = (id: string) => {
    if (selectedIds.length < 4 && !selectedIds.includes(id)) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const removeProduct = (id: string) => {
    setSelectedIds(selectedIds.filter((i) => i !== id));
  };

  const specRows = [
    { label: 'Category', key: 'category', format: (v: string) => categories.find((c) => c.id === v)?.name || v },
    { label: 'Working Width', key: 'workingWidth' },
    { label: 'Machine Weight', key: 'weight' },
    { label: 'Required Power', key: 'requiredPower' },
    { label: 'PTO Speed', key: 'pto' },
    { label: 'Dimensions', key: 'dimensions' },
    { label: 'Hydraulic Needs', key: 'hydraulicRequirements' },
    { label: 'Drive Type', key: 'driveType' },
    { label: 'Hitch Type', key: 'attachmentType' },
    { label: 'Blades / Flails', key: 'numberOfBlades' },
    { label: 'Availability', key: 'availability', format: (v: string) => (v === 'in-stock' ? 'In Stock' : 'On Order') },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10">
      <div className="container-site">
        {/* Header */}
        <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#EAE1D5] mb-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="badge-green mb-3">
                SIDE-BY-SIDE SPECIFICATION TOOL
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-semibold text-[#111827]">
                Compare Machinery Specs
              </h1>
              <p className="text-sm md:text-base text-[#4B5563] mt-2">
                Select up to 4 models to compare working width, power ratings, weight, and hydraulic requirements.
              </p>
            </div>

            {selectedIds.length < 4 && (
              <div className="w-full md:w-80">
                <label className="block text-xs font-semibold uppercase text-[#7A6242] mb-1.5">
                  + Add Machine to Compare ({selectedIds.length}/4):
                </label>
                <select
                  onChange={(e) => {
                    if (e.target.value) addProduct(e.target.value);
                    e.target.value = '';
                  }}
                  className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-[#FAF7F2] border border-[#EAE1D5] focus:outline-hidden focus:border-[#15803D] text-[#111827] font-medium"
                >
                  <option value="">Select a machine...</option>
                  {products
                    .filter((p) => !selectedIds.includes(p.id))
                    .map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.workingWidth} • {p.requiredPower})
                      </option>
                    ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Comparison Table */}
        {selectedProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#EAE1D5]">
            <h3 className="font-display text-xl font-semibold text-[#111827] mb-2">
              No machines selected for comparison
            </h3>
            <p className="text-xs text-[#6B7280] mb-6">
              Use the dropdown above to choose machines you want to evaluate side-by-side.
            </p>
            <button
              onClick={() => setSelectedIds(['agf-220', 'master-h-175'])}
              className="btn-primary text-xs font-medium"
            >
              Load Example Comparison
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-[#EAE1D5] shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#EAE1D5] bg-[#FAF7F2]">
                    <th className="p-6 w-56 text-xs font-semibold uppercase tracking-wider text-[#7A6242]">
                      Feature / Spec
                    </th>
                    {selectedProducts.map((p) => (
                      <th key={p.id} className="p-6 min-w-[240px] text-center align-top bg-white border-l border-[#EAE1D5]">
                        <div className="relative h-36 w-full mb-3 bg-[#FAF7F2] rounded-lg overflow-hidden border border-[#EFE6D8]">
                          <Image
                            src={p.images[0]?.src || '/images/AGF220-1.png'}
                            alt={p.name}
                            fill
                            className="object-contain p-2"
                            sizes="200px"
                          />
                        </div>
                        <h3 className="font-display text-base font-semibold text-[#111827]">
                          {p.name}
                        </h3>
                        <p className="text-xs text-[#6B7280] mb-3">{p.workingWidth}</p>

                        <div className="flex flex-col gap-2">
                          <Link
                            href={`/machines/${p.category}/${p.slug}`}
                            className="btn-primary py-2 text-xs text-center font-medium"
                          >
                            View Specs
                          </Link>
                          <button
                            onClick={() => removeProduct(p.id)}
                            className="text-[11px] font-medium text-[#DC2626] hover:underline inline-flex items-center justify-center gap-1"
                          >
                            <X className="w-3 h-3" />
                            <span>Remove</span>
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE1D5] text-xs sm:text-sm">
                  {specRows.map((row, idx) => (
                    <tr key={row.label} className={idx % 2 === 0 ? 'bg-[#FAF7F2]/60' : 'bg-white'}>
                      <td className="py-4 px-6 font-semibold text-[#7A6242]">
                        {row.label}
                      </td>
                      {selectedProducts.map((p) => {
                        const raw = (p as unknown as Record<string, unknown>)[row.key];
                        const val = row.format ? row.format(raw as string) : (raw as string) || '—';
                        return (
                          <td
                            key={p.id}
                            className="py-4 px-6 text-center font-medium text-[#111827] border-l border-[#EAE1D5]"
                          >
                            {val}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

