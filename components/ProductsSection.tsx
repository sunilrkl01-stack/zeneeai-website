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
            02 / OUR PRODUCTS
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Products built for the <span className="text-[#FF6B00]">real world.</span>
          </h2>
          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            From digital payments to intelligent mobility, ZeneeAI is building technology that connects people, businesses and opportunities.
          </p>
        </div>

        {/* Two Large Editorial Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* PRODUCT 1 — ZeneePay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between overflow-hidden glass-panel-hover"
          >
            {/* Ambient Background Gradient Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FF6B00]/15 to-transparent rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

            <div className="space-y-8 relative z-10">
              
              {/* Product Badge & Name */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold tracking-wider uppercase">
                  FINTECH PLATFORM
                </div>
                <span className="text-xs text-slate-400 font-mono">01 / FINTECH</span>
              </div>

              <div>
                <h3 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
                  ZeneePay
                </h3>
                <p className="text-lg font-semibold text-[#FF8533] mt-1">
                  Digital payments, simplified.
                </p>
                <p className="text-slate-300 text-base mt-3 leading-relaxed">
                  A next-generation digital payments platform designed to bring everyday financial services, recharges, bill payments and rewards into one seamless experience.
                </p>
              </div>

              {/* FinTech Ecosystem Visual Mockup */}
              <div className="p-6 rounded-2xl bg-[#090B12]/80 border border-white/10 space-y-4 shadow-inner">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                    ZeneePay Wallet Ecosystem
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Active
                  </span>
                </div>

                {/* Grid of 4 Feature Icons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center flex flex-col items-center gap-1.5 hover:border-[#FF6B00]/40 transition-colors">
                    <CreditCard className="w-5 h-5 text-[#FF6B00]" />
                    <span className="text-xs font-medium text-slate-200">Payments</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center flex flex-col items-center gap-1.5 hover:border-[#FF6B00]/40 transition-colors">
                    <Smartphone className="w-5 h-5 text-[#FF6B00]" />
                    <span className="text-xs font-medium text-slate-200">Recharge</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center flex flex-col items-center gap-1.5 hover:border-[#FF6B00]/40 transition-colors">
                    <Receipt className="w-5 h-5 text-[#FF6B00]" />
                    <span className="text-xs font-medium text-slate-200">Bills</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center flex flex-col items-center gap-1.5 hover:border-[#FF6B00]/40 transition-colors">
                    <Gift className="w-5 h-5 text-[#FF6B00]" />
                    <span className="text-xs font-medium text-slate-200">Rewards</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Product Card Footer CTA */}
            <div className="pt-8 relative z-10">
              <Link
                href="/products/zeneepay"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#FF6B00] hover:bg-[#FF8533] text-white font-semibold text-sm shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,107,0,0.7)]"
              >
                <span>Explore ZeneePay</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>

          {/* PRODUCT 2 — ZeneeEV */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group relative glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between overflow-hidden glass-panel-hover"
          >
            {/* Ambient Background Gradient Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FF6B00]/15 to-transparent rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

            <div className="space-y-8 relative z-10">
              
              {/* Product Badge & Name */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold tracking-wider uppercase">
                  MOBILITY ECOSYSTEM
                </div>
                <span className="text-xs text-slate-400 font-mono">02 / MOBILITY</span>
              </div>

              <div>
                <h3 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
                  ZeneeEV
                </h3>
                <p className="text-lg font-semibold text-[#FF8533] mt-1">
                  Powering the future of mobility.
                </p>
                <p className="text-slate-300 text-base mt-3 leading-relaxed">
                  A unified EV charging experience designed to connect drivers with charging networks, real-time availability, tariffs and seamless payments.
                </p>
              </div>

              {/* EV Charging Visual Flow: Find ↓ Charge ↓ Pay */}
              <div className="p-6 rounded-2xl bg-[#090B12]/80 border border-white/10 space-y-4 shadow-inner">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                    Charging Flow & Telemetry
                  </span>
                  <span className="text-xs text-[#FF6B00] font-semibold">Real-Time Network</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center gap-1 group-hover:border-[#FF6B00]/40 transition-colors">
                    <MapPin className="w-5 h-5 text-[#FF6B00]" />
                    <span className="text-xs font-bold text-white">Find</span>
                    <span className="text-[10px] text-slate-400">Live Station Map</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center gap-1 group-hover:border-[#FF6B00]/40 transition-colors">
                    <Zap className="w-5 h-5 text-[#FF6B00]" />
                    <span className="text-xs font-bold text-white">Charge</span>
                    <span className="text-[10px] text-slate-400">Smart Charger</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center gap-1 group-hover:border-[#FF6B00]/40 transition-colors">
                    <Wallet className="w-5 h-5 text-[#FF6B00]" />
                    <span className="text-xs font-bold text-white">Pay</span>
                    <span className="text-[10px] text-slate-400">Unified Wallet</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Product Card Footer CTA */}
            <div className="pt-8 relative z-10">
              <Link
                href="/products/zeneeev"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#FF6B00] hover:bg-[#FF8533] text-white font-semibold text-sm shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,107,0,0.7)]"
              >
                <span>Explore ZeneeEV</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
