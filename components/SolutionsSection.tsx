'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, DollarSign, Car, Building2, Cloud, ArrowRight } from 'lucide-react';

const SOLUTIONS = [
  {
    icon: Cpu,
    title: 'AI & Automation',
    desc: 'Intelligent systems designed to reduce complexity and improve efficiency.',
  },
  {
    icon: DollarSign,
    title: 'FinTech',
    desc: 'Digital financial experiences and payment technologies.',
  },
  {
    icon: Car,
    title: 'Mobility',
    desc: 'Technology powering connected and electric mobility.',
  },
  {
    icon: Building2,
    title: 'Enterprise Technology',
    desc: 'Scalable platforms and digital transformation solutions.',
  },
  {
    icon: Cloud,
    title: 'Cloud & API Platforms',
    desc: 'Secure and scalable technology infrastructure.',
  },
];

export const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="relative py-28 bg-[#07080c] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Category Eyebrow */}
        <div className="mb-4 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-[#FF6B00]" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
            04 / SOLUTIONS
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Technology built around <span className="text-[#FF6B00]">possibilities.</span>
          </h2>
          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            We deliver end-to-end technology architectures tailored for digital transformation, financial empowerment, and intelligent infrastructure.
          </p>
        </div>

        {/* 5 Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group glass-panel rounded-2xl p-7 border border-white/10 glass-panel-hover flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-[#121624] border border-[#FF6B00]/30 text-[#FF6B00] w-fit group-hover:scale-110 group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.2)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FF8533] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white">
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4 text-[#FF6B00] group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
