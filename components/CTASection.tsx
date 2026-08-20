'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-[#07080c] via-[#0d0f17] to-[#07080c] overflow-hidden border-t border-white/10">
      {/* Animated Glowing Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF6B00]/20 rounded-full blur-[140px] pointer-events-none animate-pulse-subtle" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-10 sm:p-16 border border-[#FF6B00]/30 shadow-[0_0_60px_rgba(255,107,0,0.15)] relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" /> GET IN TOUCH
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Let's build <span className="text-[#FF6B00]">what's next.</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            Have an idea, a business challenge or an opportunity to explore? Let's create something meaningful together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FF6B00] hover:bg-[#FF8533] text-white text-base font-semibold shadow-[0_0_30px_rgba(255,107,0,0.5)] hover:shadow-[0_0_45px_rgba(255,107,0,0.8)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Talk to Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#121624] hover:bg-[#1A2033] border border-white/15 text-white text-base font-semibold transition-all duration-300 hover:border-[#FF6B00]/40"
            >
              <span>Explore ZeneeAI</span>
              <ArrowRight className="w-5 h-5 text-slate-400" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
