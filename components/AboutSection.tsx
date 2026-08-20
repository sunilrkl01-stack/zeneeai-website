'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Layers, ShieldCheck, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-[#07080c] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF6B00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Category Eyebrow */}
        <div className="mb-6 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-[#FF6B00]" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
            01 / ABOUT ZENEEAI
          </span>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Oversized Statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Building technology for <br />
              <span className="text-[#FF6B00] drop-shadow-[0_0_25px_rgba(255,107,0,0.3)]">
                what's next.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
              ZeneeAI is a technology company focused on creating intelligent digital products and scalable technology solutions that simplify complex problems and unlock new possibilities.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#121624] border border-[#FF6B00]/40 text-white font-semibold hover:border-[#FF6B00] hover:bg-[#1A2033] shadow-[0_0_20px_rgba(255,107,0,0.2)] transition-all duration-300"
              >
                <span>Discover ZeneeAI</span>
                <ArrowRight className="w-4 h-4 text-[#FF6B00]" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Interactive Connected Technology Nodes SVG Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative glass-panel rounded-3xl p-8 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              <div className="space-y-6">
                
                {/* Node Item 1 */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#FF6B00]/30 transition-colors">
                  <div className="p-3 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00] shrink-0">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Intelligent Architecture</h3>
                    <p className="text-sm text-slate-400 mt-0.5">
                      Designing adaptive AI pipelines and resilient digital infrastructure.
                    </p>
                  </div>
                </div>

                {/* Node Item 2 */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#FF6B00]/30 transition-colors">
                  <div className="p-3 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00] shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">FinTech & Payments</h3>
                    <p className="text-sm text-slate-400 mt-0.5">
                      Connecting consumers and platforms with frictionless financial engines.
                    </p>
                  </div>
                </div>

                {/* Node Item 3 */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#FF6B00]/30 transition-colors">
                  <div className="p-3 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00] shrink-0">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Future Mobility</h3>
                    <p className="text-sm text-slate-400 mt-0.5">
                      Powering electric mobility networks, charging availability, and smart routing.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
