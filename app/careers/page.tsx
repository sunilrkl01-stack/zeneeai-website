import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Sparkles, ArrowRight, Briefcase } from 'lucide-react';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#07080c] text-white">
      <Navbar />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold uppercase tracking-wider">
            CAREERS AT ZENEEAI
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Build technology that <span className="text-[#FF6B00]">matters.</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            We are looking for visionary engineers, AI researchers, product architects, and technology creators to build next-generation products in AI, FinTech, and mobility.
          </p>
        </div>

        {/* Culture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="p-3 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00] w-fit">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">High-Impact Ownership</h3>
            <p className="text-sm text-slate-400">Work directly on core products (ZeneePay, ZeneeEV) used by real users and businesses daily.</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="p-3 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00] w-fit">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Modern Tech Stack</h3>
            <p className="text-sm text-slate-400">Engineer resilient platforms with modern AI algorithms, cloud-native APIs, and high-performance frontends.</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="p-3 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00] w-fit">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Innovation Culture</h3>
            <p className="text-sm text-slate-400">Collaborate with passsionate technologists who value excellence, speed, and continuous learning.</p>
          </div>
        </div>

        {/* Application CTA */}
        <div className="glass-panel p-10 rounded-3xl border border-[#FF6B00]/30 text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">Interested in joining ZeneeAI?</h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            Send your resume and portfolio directly to our engineering leadership team at <strong className="text-white">founder@zeneeai.com</strong>.
          </p>
          <a
            href="mailto:founder@zeneeai.com?subject=Career%20Enquiry%20-%20ZeneeAI"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF6B00] hover:bg-[#FF8533] text-white font-semibold shadow-[0_0_25px_rgba(255,107,0,0.4)]"
          >
            <span>Apply via Email</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
