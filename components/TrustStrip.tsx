'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CAPABILITIES = [
  'AI',
  'FINTECH',
  'DIGITAL PAYMENTS',
  'MOBILITY',
  'ENTERPRISE TECHNOLOGY',
];

export const TrustStrip: React.FC = () => {
  return (
    <section className="relative py-8 bg-[#090B12] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
          {CAPABILITIES.map((cap, idx) => (
            <React.Fragment key={cap}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-3 group"
              >
                <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-slate-300 group-hover:text-white transition-colors">
                  {cap}
                </span>
              </motion.div>

              {idx < CAPABILITIES.length - 1 && (
                <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
