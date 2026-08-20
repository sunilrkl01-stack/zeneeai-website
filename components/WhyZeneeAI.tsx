'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PILLARS = [
  {
    num: '01',
    title: 'Innovation',
    desc: 'Turning emerging technologies into practical, high-impact products.',
  },
  {
    num: '02',
    title: 'Scalability',
    desc: 'Building platforms designed to seamlessly grow with users and enterprise demands.',
  },
  {
    num: '03',
    title: 'Intelligence',
    desc: 'Using AI and automation to make systems smarter, faster, and more intuitive.',
  },
  {
    num: '04',
    title: 'Trust',
    desc: 'Building secure, reliable, transparent digital experiences for consumers and businesses.',
  },
];

export const WhyZeneeAI: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#090B12] overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Category Eyebrow */}
        <div className="mb-4 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-[#FF6B00]" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
            05 / WHY ZENEEAI
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Why <span className="text-[#FF6B00]">ZeneeAI</span>
          </h2>
          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            Our engineering principles are designed to deliver digital infrastructure that stands up to complex global challenges.
          </p>
        </div>

        {/* 4 Pillars Grid with Large Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative glass-panel rounded-3xl p-8 border border-white/10 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                {/* Large Oversized Number */}
                <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#FF6B00] to-white/20 mb-6 group-hover:scale-105 transition-transform duration-300">
                  {pillar.num}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FF8533] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-base text-slate-300 font-normal leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400">
                  PILLAR {pillar.num}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
