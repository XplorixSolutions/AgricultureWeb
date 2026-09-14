'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/lib/data/categories';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: 'grassland',
    message: '',
    inquiryType: 'quote',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF8F3] min-h-screen py-12 md:py-16 text-left">
      <div className="container-site max-w-6xl mx-auto">
        {/* Minimal Header */}
        <div className="mb-10 text-left">
          <span className="eyebrow-pill mb-3">GET IN TOUCH</span>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#111827] tracking-tight mb-3">
            Contact AgriForge Belgium
          </h1>
          <p className="text-sm sm:text-base text-[#4B5563] max-w-2xl leading-relaxed">
            Have a question about tractor HP compatibility, machinery specs, or pricing? Send us a message below or call our Belgium headquarters directly.
          </p>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Form Card (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E5DD] shadow-sm text-left">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#E6EFE1] text-[#3E5634] flex items-center justify-center mx-auto border border-[#CADBC3]">
                  <CheckCircle className="w-8 h-8" strokeWidth={2} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#111827]">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] max-w-md mx-auto leading-relaxed">
                  Your inquiry has been sent to our technical engineering team in Belgium. We will reply to <strong>{formData.email}</strong> shortly.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-beige text-xs font-medium py-2.5 px-5"
                  >
                    Send Another Message
                  </button>
                  <Link href="/machines" className="btn-primary text-xs font-medium py-2.5 px-5">
                    Browse Machinery
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {/* Inquiry Type Pills */}
                <div>
                  <label className="block text-xs font-semibold text-[#6D786E] uppercase tracking-wider mb-2">
                    Inquiry Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'quote', label: 'Price Quote' },
                      { id: 'parts', label: 'Spare Parts' },
                      { id: 'general', label: 'General' },
                    ].map((type) => (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() => setFormData({ ...formData, inquiryType: type.id })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-medium transition-all cursor-pointer border text-center ${
                          formData.inquiryType === type.id
                            ? 'bg-[#14532D] text-white border-[#14532D] shadow-xs'
                            : 'bg-[#FAF8F3] text-[#4B5563] border-[#E8E5DD] hover:bg-[#F4F8F1]'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#111827] mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Marc Peeters"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#FAF8F3] border border-[#E8E5DD] focus:outline-hidden focus:bg-white focus:border-[#14532D] text-[#111827]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#111827] mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="marc@peeters-landbouw.be"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#FAF8F3] border border-[#E8E5DD] focus:outline-hidden focus:bg-white focus:border-[#14532D] text-[#111827]"
                    />
                  </div>
                </div>

                {/* Phone & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#111827] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+32 9 298 01 49"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#FAF8F3] border border-[#E8E5DD] focus:outline-hidden focus:bg-white focus:border-[#14532D] text-[#111827]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#111827] mb-1">
                      Interested Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#FAF8F3] border border-[#E8E5DD] focus:outline-hidden focus:bg-white focus:border-[#14532D] text-[#111827] font-medium"
                    >
                      {categories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-[#111827] mb-1">
                    Your Message or Tractor Model Specs
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details on your tractor HP, implement requirement, or delivery location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#FAF8F3] border border-[#E8E5DD] focus:outline-hidden focus:bg-white focus:border-[#14532D] text-[#111827]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full btn-primary py-3 px-6 text-xs font-semibold rounded-full shadow-md cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                </button>
              </form>
            )}
          </div>

          {/* Right Info Sidebar (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E5DD] shadow-sm space-y-6">
              <h3 className="font-display text-xl font-semibold text-[#111827]">
                Belgium Direct Contacts
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#4B5563]">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#E6EFE1] text-[#3E5634] flex items-center justify-center shrink-0 border border-[#CADBC3]">
                    <Phone className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111827]">Phone Support</h4>
                    <a href="tel:+3292980149" className="text-sm font-semibold text-[#14532D] hover:underline block mt-0.5">
                      +32 (0) 9 298 01 49
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#E6EFE1] text-[#3E5634] flex items-center justify-center shrink-0 border border-[#CADBC3]">
                    <Mail className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111827]">Email Inquiries</h4>
                    <a href="mailto:info@agriforge.be" className="text-sm font-semibold text-[#14532D] hover:underline block mt-0.5">
                      info@agriforge.be
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#E6EFE1] text-[#3E5634] flex items-center justify-center shrink-0 border border-[#CADBC3]">
                    <MapPin className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111827]">Belgium Logistics Hub</h4>
                    <p className="text-xs text-[#6B7280] leading-relaxed mt-0.5">
                      AgriForge Machinery B.V.<br />
                      Industriepark-Oost 14<br />
                      9800 Deinze, Belgium
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#E6EFE1] text-[#3E5634] flex items-center justify-center shrink-0 border border-[#CADBC3]">
                    <Clock className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111827]">Working Hours</h4>
                    <p className="text-xs text-[#6B7280] leading-relaxed mt-0.5">
                      Monday – Friday: 08:00 – 17:00 CET
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
