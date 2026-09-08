'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Brain,
  Award,
  Lock,
  Globe2,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const REASONS = [
  {
    icon: Brain,
    title: 'AI-Powered Profile Evaluation',
    description: 'Algorithmic matching of your academic profile, work history, and finances to identify the highest visa probability programs.',
    color: 'text-[#FF6B00]',
    border: 'hover:border-[#FF6B00]/40',
  },
  {
    icon: Award,
    title: '99.2% Visa Grant Record',
    description: 'Rigorous 3-tier document vetting and SOP auditing eliminates common refusal reasons before embassy submission.',
    color: 'text-emerald-400',
    border: 'hover:border-emerald-500/40',
  },
  {
    icon: Lock,
    title: '100% Zero Hidden Charges',
    description: 'Complete transparency with clear fee breakdowns for embassy fees, WES/credential evaluation, and service costs.',
    color: 'text-amber-400',
    border: 'hover:border-amber-500/40',
  },
  {
    icon: ShieldCheck,
    title: 'Certified Global Counselors',
    description: 'Expert guidance by MARA, RCIC, and British Council trained immigration specialists with multi-decade experience.',
    color: 'text-cyan-300',
    border: 'hover:border-cyan-500/40',
  },
  {
    icon: Globe2,
    title: '500+ University Alliances',
    description: 'Direct tie-ups with QS Top-Ranked institutions across USA, UK, Canada, Australia, Germany, Ireland, and Europe.',
    color: 'text-purple-400',
    border: 'hover:border-purple-500/40',
  },
  {
    icon: HeartHandshake,
    title: 'Post-Landing Arrival Assistance',
    description: 'Beyond visa approval: We assist with airport pick-up, initial accommodation, student housing, and Forex transfers.',
    color: 'text-rose-400',
    border: 'hover:border-rose-500/40',
  },
];

export const WhyOverseasSection: React.FC = () => {
  return (
    <section id="why-us" className="relative py-24 bg-[#050711] overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE ZENEEAI OVERSEAS ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Applicants Trust <span className="text-[#FF6B00]">ZeneeAI Overseas</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            We bridge the gap between complex immigration laws and your global ambitions with technology, institutional rigor, and complete transparency.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 rounded-3xl bg-[#090D1F]/80 border border-white/10 ${item.border} transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 w-fit">
                    <Icon className={`w-7 h-7 ${item.color}`} />
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-slate-400 mt-6">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Institutional Quality Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
