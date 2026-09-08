'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeroNetworkVisual } from './HeroNetworkVisual';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#07080c] via-[#0b0d14] to-[#07080c]">
      {/* Subtle Background Grid & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF6B00]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Eyebrow Badge & Overseas Redirect Link */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              <Link
                href="https://overseas.zeneeai.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6B00]/20 via-[#1E3A8A]/40 to-cyan-500/20 border border-cyan-500/40 text-cyan-200 text-xs font-bold shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all group"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                <span>Introducing <strong className="text-white">ZeneeAI Overseas</strong> — Global Visas, Study Abroad & PR</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Technology that{' '}
              <span className="relative inline-block">
                <span className="text-[#FF6B00] drop-shadow-[0_0_20px_rgba(255,107,0,0.4)]">
                  moves businesses forward.
                </span>
                <span className="absolute bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF6B00] to-transparent" />
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              ZeneeAI builds intelligent digital products and scalable technology solutions across AI, FinTech, mobility, global immigration, and enterprise technology.
            </p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <Link
                href="/#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-[#FF6B00] hover:bg-[#FF8533] text-white text-sm font-semibold shadow-[0_0_30px_rgba(255,107,0,0.45)] hover:shadow-[0_0_40px_rgba(255,107,0,0.7)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="https://overseas.zeneeai.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-950 to-slate-900 border border-cyan-500/40 text-cyan-300 text-sm font-bold shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all duration-300 hover:border-cyan-400"
              >
                <span>ZeneeAI Overseas</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#121624]/80 hover:bg-[#1A2033] border border-white/15 text-slate-300 text-sm font-semibold transition-all duration-300 hover:border-[#FF6B00]/40"
              >
                <span>Talk to Us</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Hero Network Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            <div className="w-full relative glass-panel rounded-3xl p-2 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
              <HeroNetworkVisual />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer">
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#FF6B00]" />
      </div>
    </section>
  );
};
