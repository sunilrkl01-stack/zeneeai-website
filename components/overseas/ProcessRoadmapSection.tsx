'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FileText,
  Compass,
  FileCheck,
  Video,
  PlaneTakeoff,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Free Profile Assessment',
    description: 'Submit your academic, professional, and preferred country details to trigger our AI eligibility engine.',
    icon: FileText,
    badge: 'Step 1',
  },
  {
    step: '02',
    title: 'Custom Strategy & University Selection',
    description: 'Receive a personalized shortlist of top universities, PR pathways, financial estimates, and intake deadlines.',
    icon: Compass,
    badge: 'Step 2',
  },
  {
    step: '03',
    title: 'Documentation, Financials & SOP',
    description: 'Our senior editorial team drafts compelling SOPs, LORs, resume enhancements, and organizes financial proofing.',
    icon: FileCheck,
    badge: 'Step 3',
  },
  {
    step: '04',
    title: 'Visa Submission & Embassy Mock Interviews',
    description: 'Undergo rigorous 1-on-1 embassy interview preparation and fast-track file submission with zero errors.',
    icon: Video,
    badge: 'Step 4',
  },
  {
    step: '05',
    title: 'Visa Approval & Pre-Departure Landing',
    description: 'Receive your visa grant notification! We handle student housing, Forex exchange, flights, and airport pickup.',
    icon: PlaneTakeoff,
    badge: 'Step 5',
  },
];

export const ProcessRoadmapSection: React.FC = () => {
  return (
    <section id="how-it-works" className="relative py-24 bg-[#060813] border-t border-white/10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold uppercase tracking-widest text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            A Seamless 5-Step Path to Your <span className="text-[#FF6B00]">Visa Approval.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            From your initial consultation to landing in your destination country, every step is structured for speed, accuracy, and peace of mind.
          </p>
        </div>

        {/* 5 Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-[#090E24]/90 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step Counter Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                    {item.badge}
                  </span>
                  <span className="text-3xl font-extrabold font-mono text-slate-400 group-hover:text-[#FF6B00] transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 w-fit group-hover:bg-[#FF6B00]/10 transition-colors">
                    <Icon className="w-6 h-6 text-[#FF6B00]" />
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Flow Connector Arrow for desktop */}
                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <div className="w-6 h-6 rounded-full bg-[#0E162B] border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs">
                      →
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="#assessment"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B00] via-[#FF8533] to-[#F59E0B] text-white font-bold text-sm shadow-[0_0_30px_rgba(255,107,0,0.4)] hover:shadow-[0_0_45px_rgba(255,107,0,0.7)] transition-all transform hover:-translate-y-0.5"
          >
            <span>Start Step 1: Free Profile Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
