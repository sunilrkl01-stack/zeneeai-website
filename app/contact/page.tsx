'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Mail, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    enquiryType: 'General Enquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#07080c] text-white flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold uppercase tracking-wider">
            CONTACT ZENEEAI
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Let's start a <span className="text-[#FF6B00]">conversation.</span>
          </h1>
          <p className="text-lg text-slate-300">
            Have a project, partnership, or product enquiry? Reach out to the ZeneeAI team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Legal Entity Info */}
          <div className="lg:col-span-5 space-y-8 glass-panel p-8 rounded-3xl border border-white/10">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">
                ZeneeAI Overseas and Technologies Private Limited
              </h2>
              <p className="text-sm text-slate-400">
                Official Corporate Entity & Technology Hub
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10 text-slate-300">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email Us</div>
                  <a href="mailto:founder@zeneeai.com" className="font-semibold text-white hover:text-[#FF6B00]">
                    founder@zeneeai.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Call / WhatsApp</div>
                  <a href="tel:+919392616336" className="font-semibold text-white hover:text-[#FF6B00]">
                    +91 93926 16336
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-400 leading-relaxed">
              We respond to technical and business partnership inquiries within 24 business hours.
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00] text-[#FF6B00] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Thank You for Reaching Out!</h3>
                <p className="text-slate-300 max-w-md mx-auto">
                  Your message has been logged successfully. The ZeneeAI team will respond to {formData.email} shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#FF6B00] text-white font-semibold text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Enquiry Type
                  </label>
                  <select
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/15 text-white focus:outline-none focus:border-[#FF6B00]"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="ZeneePay Integration">ZeneePay Product Partnership</option>
                    <option value="ZeneeEV Network">ZeneeEV Network Integration</option>
                    <option value="Enterprise AI Solution">Enterprise AI & Technology</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#FF6B00] hover:bg-[#FF8533] text-white font-semibold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,107,0,0.4)] transition-all"
                >
                  <span>Submit Message</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
