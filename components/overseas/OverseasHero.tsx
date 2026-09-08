'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Plane,
  FileCheck2,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  PhoneCall,
  Globe2,
  Award,
  Users,
} from 'lucide-react';

export const OverseasHero: React.FC = () => {
  const whatsappMessage = encodeURIComponent(
    "Hi ZeneeAI Overseas! I would like to check my visa eligibility (Study / Visit / PR)."
  );
  const whatsappUrl = `https://wa.me/919392616336?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center bg-[#050711] overflow-hidden">
      {/* Ambient Radial Gradients & Network Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#1E3A8A]/30 via-[#3B82F6]/20 to-[#FF6B00]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#10B981]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Parent Brand Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-900/60 via-slate-900/80 to-teal-900/60 border border-cyan-500/30 backdrop-blur-md text-xs font-bold text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>ZeneeAI Intelligence Ecosystem</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-slate-300">ZeneeAI Overseas</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>99.2% Visa Grant Record</span>
          </div>
        </motion.div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Action CTAs */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]"
            >
              Your Gateway to the World.{' '}
              <span className="block mt-2 bg-gradient-to-r from-[#FF6B00] via-amber-300 to-cyan-400 bg-clip-text text-transparent">
                Precision Visa Processing.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              ZeneeAI Overseas transforms student admissions, visit visas, exam coaching (IELTS/PTE/GRE), education loans, and permanent residency (PR) with institutional perfection.
            </motion.p>

            {/* Quick Visa Type Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1"
            >
              <Link
                href="#services"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF6B00]/60 hover:bg-white/10 text-xs font-semibold text-slate-200 transition-all"
              >
                <GraduationCap className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Study Visa</span>
              </Link>
              <Link
                href="#services"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/60 hover:bg-white/10 text-xs font-semibold text-slate-200 transition-all"
              >
                <Plane className="w-3.5 h-3.5 text-cyan-400" />
                <span>Visit Visa</span>
              </Link>
              <Link
                href="#services"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/60 hover:bg-white/10 text-xs font-semibold text-slate-200 transition-all"
              >
                <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>PR Migration</span>
              </Link>
              <Link
                href="#coaching"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/60 hover:bg-white/10 text-xs font-semibold text-slate-200 transition-all"
              >
                <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                <span>IELTS & Test Prep</span>
              </Link>
            </motion.div>

            {/* Main Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link
                href="#assessment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B00] via-[#FF8533] to-[#F59E0B] text-white font-bold text-sm shadow-[0_0_30px_rgba(255,107,0,0.5)] hover:shadow-[0_0_45px_rgba(255,107,0,0.8)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Free Profile Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#0E162B] border border-emerald-500/40 text-emerald-300 font-semibold text-sm hover:bg-emerald-950/40 hover:border-emerald-400 transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Talk to Visa Counselor</span>
              </a>
            </motion.div>

            {/* Trust Markers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-medium"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Fee Transparency
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Certified Advisors
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Fast-Track Filing
              </span>
            </motion.div>

          </div>

          {/* Right Column: High-Impact 3D Visual Asset Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.25)] bg-[#090D24]/90 group">
              
              {/* Generated 3D Visual Banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src="/images/overseas/hero_banner.jpg"
                  alt="ZeneeAI Overseas Global Mobility Passport"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D24] via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Stat Counters Overlay Bar */}
              <div className="p-6 relative z-10 -mt-12 bg-[#090D24]/95 backdrop-blur-xl border-t border-cyan-500/20 grid grid-cols-4 gap-2 text-center">
                
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 space-y-0.5">
                  <div className="text-xl font-extrabold text-[#FF6B00]">99.2%</div>
                  <p className="text-[10px] text-slate-300 font-semibold">Visa Grant Rate</p>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 space-y-0.5">
                  <div className="text-xl font-extrabold text-cyan-300">50+</div>
                  <p className="text-[10px] text-slate-300 font-semibold">Countries</p>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 space-y-0.5">
                  <div className="text-xl font-extrabold text-emerald-400">5,000+</div>
                  <p className="text-[10px] text-slate-300 font-semibold">Visas Issued</p>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 space-y-0.5">
                  <div className="text-xl font-extrabold text-amber-300">0%</div>
                  <p className="text-[10px] text-slate-300 font-semibold">Hidden Fees</p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
