'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Palette, Code2, Cpu, Server, Rocket } from 'lucide-react';

const STAGES = [
  { icon: Lightbulb, label: 'IDEA', desc: 'Conceptualization' },
  { icon: Palette, label: 'DESIGN', desc: 'User Experience' },
  { icon: Code2, label: 'ENGINEERING', desc: 'Core Systems' },
  { icon: Cpu, label: 'INTELLIGENCE', desc: 'AI Models' },
  { icon: Server, label: 'PLATFORM', desc: 'Cloud & APIs' },
  { icon: Rocket, label: 'IMPACT', desc: 'Real-World Reach' },
];

export const TechFlowSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#07080c] overflow-hidden border-t border-white/10">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#FF6B00]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Category Eyebrow */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="w-8 h-[2px] bg-[#FF6B00]" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
            06 / END-TO-END METHODOLOGY
          </span>
          <span className="w-8 h-[2px] bg-[#FF6B00]" />
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            From idea to <span className="text-[#FF6B00]">intelligent product.</span>
          </h2>
          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            ZeneeAI architects digital products end-to-end — transforming raw concept into scalable, AI-powered production systems.
          </p>
        </div>

        {/* Animated Flow Pipeline */}
        <div className="relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-white/10 via-[#FF6B00]/60 to-white/10 z-0">
            {/* Animated Pulses */}
            <motion.div
              animate={{ x: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-full bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent shadow-[0_0_12px_#FF6B00]"
            />
          </div>

          {/* 6 Stage Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group flex flex-col items-center text-center p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#FF6B00]/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,107,0,0.2)]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#090B12] border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.2)] mb-4">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-xs font-mono text-[#FF8533] mb-1">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white tracking-wider mb-1">
                    {stage.label}
                  </h3>
                  <p className="text-xs text-slate-400 font-normal">
                    {stage.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
