'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CreditCard,
  Smartphone,
  Receipt,
  Gift,
  Wallet,
  Zap,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Plane,
  FileCheck2,
  Sparkles,
} from 'lucide-react';

export const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="relative py-28 bg-[#07080c] overflow-hidden">
      {/* Background Grid & Ambient Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Category Eyebrow */}
        <div className="mb-4 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-[#FF6B00]" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
            02 / OUR BUSINESSES & PRODUCTS
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Products built for the <span className="text-[#FF6B00]">real world.</span>
          </h2>
          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            From digital payments to intelligent mobility and global visa processing, ZeneeAI is building technology that connects people, businesses and international opportunities.
          </p>
        </div>

        {/* 3 Editorial Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* PRODUCT 1 — ZeneePay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative glass-panel rounded-3xl p-8 border border-white/10 flex flex-col justify-between overflow-hidden glass-panel-hover"
          >
            {/* Ambient Background Gradient Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FF6B00]/15 to-transparent rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              
              {/* Product Badge & Name */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/40 text-[#FF6B00] text-[11px] font-bold tracking-wider uppercase">
                  FINTECH PLATFORM
                </div>
                <span className="text-xs text-slate-400 font-mono">01 / FINTECH</span>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                  ZeneePay
                </h3>
                <p className="text-sm font-semibold text-[#FF8533] mt-1">
                  Digital payments, simplified.
                </p>
                <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                  A next-generation digital payments platform bringing everyday financial services, recharges, bill payments and rewards into one seamless experience.
                </p>
              </div>

              {/* FinTech Ecosystem Visual Mockup */}
              <div className="p-5 rounded-2xl bg-[#090B12]/80 border border-white/10 space-y-3 shadow-inner">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[11px] font-semibold uppercase text-slate-400 tracking-wider">
                    ZeneePay Wallet Ecosystem
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Active
                  </span>
                </div>

                {/* Grid of 4 Feature Icons */}
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center gap-1">
                    <CreditCard className="w-4 h-4 text-[#FF6B00]" />
                    <span className="text-xs font-medium text-slate-200">Payments</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center gap-1">
                    <Smartphone className="w-4 h-4 text-[#FF6B00]" />
                    <span className="text-xs font-medium text-slate-200">Recharge</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Product Card Footer CTA */}
            <div className="pt-6 relative z-10 border-t border-white/10 mt-6">
              <Link
                href="/products/zeneepay"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF6B00] hover:bg-[#FF8533] text-white font-semibold text-xs shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all duration-300"
              >
                <span>Explore ZeneePay</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* PRODUCT 2 — ZeneeEV */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative glass-panel rounded-3xl p-8 border border-white/10 flex flex-col justify-between overflow-hidden glass-panel-hover"
          >
            {/* Ambient Background Gradient Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FF6B00]/15 to-transparent rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              
              {/* Product Badge & Name */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/40 text-[#FF6B00] text-[11px] font-bold tracking-wider uppercase">
                  MOBILITY ECOSYSTEM
                </div>
                <span className="text-xs text-slate-400 font-mono">02 / MOBILITY</span>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                  ZeneeEV
                </h3>
                <p className="text-sm font-semibold text-[#FF8533] mt-1">
                  Powering the future of mobility.
                </p>
                <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                  A unified EV charging experience connecting drivers with charging networks, real-time availability, tariffs and seamless payments.
                </p>
              </div>

              {/* EV Charging Visual Flow */}
              <div className="p-5 rounded-2xl bg-[#090B12]/80 border border-white/10 space-y-3 shadow-inner">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[11px] font-semibold uppercase text-slate-400 tracking-wider">
                    Charging Network
                  </span>
                  <span className="text-[10px] text-[#FF6B00] font-semibold">Real-Time</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center gap-1">
                    <Zap className="w-4 h-4 text-[#FF6B00]" />
                    <span className="text-xs font-medium text-slate-200">Smart Charge</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center gap-1">
                    <Wallet className="w-4 h-4 text-[#FF6B00]" />
                    <span className="text-xs font-medium text-slate-200">Auto Pay</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Product Card Footer CTA */}
            <div className="pt-6 relative z-10 border-t border-white/10 mt-6">
              <Link
                href="/products/zeneeev"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF6B00] hover:bg-[#FF8533] text-white font-semibold text-xs shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all duration-300"
              >
                <span>Explore ZeneeEV</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* PRODUCT 3 — ZeneeAI Overseas (NEW) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group relative glass-panel rounded-3xl p-8 border border-cyan-500/30 flex flex-col justify-between overflow-hidden glass-panel-hover bg-[#090D24]/80 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          >
            {/* Ambient Background Gradient Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-500/20 via-[#FF6B00]/15 to-transparent rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              
              {/* Product Badge & Name */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[11px] font-bold tracking-wider uppercase">
                  <Globe2 className="w-3 h-3 text-cyan-400" />
                  GLOBAL MOBILITY & VISAS
                </div>
                <span className="text-xs text-cyan-300 font-mono font-bold">03 / OVERSEAS</span>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
                  Zenee<span className="text-[#FF6B00]">AI</span> Overseas
                </h3>
                <p className="text-sm font-semibold text-cyan-300 mt-1">
                  Study Visas, Visit Visas & PR Processing.
                </p>
                <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                  Tech-driven international immigration & university admissions portal delivering 99.2% visa approval accuracy for USA, UK, Canada, Australia & Europe.
                </p>
              </div>

              {/* Visual Asset Thumbnail */}
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 shadow-lg group-hover:border-cyan-500/40 transition-colors">
                <img
                  src="/images/overseas/hero_banner.jpg"
                  alt="ZeneeAI Overseas"
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D24] via-transparent to-transparent opacity-70" />
                <span className="absolute bottom-2 left-3 text-[10px] font-mono font-bold text-emerald-400 bg-[#090D24]/90 px-2 py-0.5 rounded border border-emerald-500/30">
                  99.2% VISA GRANT RATE
                </span>
              </div>

            </div>

            {/* Product Card Footer CTA — Redirect to Overseas Website */}
            <div className="pt-6 relative z-10 border-t border-white/10 mt-6">
              <Link
                href="https://overseas.zeneeai.com"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF6B00] via-[#FF8533] to-cyan-500 text-white font-bold text-xs shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
              >
                <span>Visit ZeneeAI Overseas Site</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
