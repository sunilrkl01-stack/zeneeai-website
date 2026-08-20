'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const CompanyStatement: React.FC = () => {
  return (
    <section className="relative py-32 bg-[#07080c] overflow-hidden border-t border-white/10 flex items-center justify-center">
      {/* Subtle Grid & Backdrop */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] bg-[#FF6B00]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#FF6B00]"
        >
          OUR PURPOSE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.2]"
        >
          We don't just build software. <br />
          <span className="text-[#FF6B00] drop-shadow-[0_0_35px_rgba(255,107,0,0.4)]">
            We build technology that creates possibilities.
          </span>
        </motion.h2>
      </div>
    </section>
  );
};
