import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MapPin, Zap, Wallet, ArrowRight } from 'lucide-react';

export default function ZeneeEVPage() {
  return (
    <div className="min-h-screen bg-[#07080c] text-white">
      <Navbar />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold uppercase tracking-wider">
            PRODUCT / FUTURE MOBILITY
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            ZeneeEV
          </h1>
          <p className="text-2xl font-semibold text-[#FF8533]">
            Powering the future of mobility.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            A unified EV charging experience designed to connect drivers with charging networks, real-time availability, tariffs and seamless payments.
          </p>
        </div>

        {/* Visual Flow Steps: Find -> Charge -> Pay */}
        <div className="my-16 space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">
            Seamless EV Charging Flow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1: Find */}
            <div className="glass-panel p-8 rounded-2xl border border-white/10 text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-[#FF6B00]/15 text-[#FF6B00] flex items-center justify-center mx-auto">
                <MapPin className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono text-[#FF8533]">STEP 01</span>
              <h3 className="text-xl font-bold text-white">Find</h3>
              <p className="text-sm text-slate-400">Locate live charging stations with real-time slot availability and transparent tariffs.</p>
            </div>

            {/* Step 2: Charge */}
            <div className="glass-panel p-8 rounded-2xl border border-white/10 text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-[#FF6B00]/15 text-[#FF6B00] flex items-center justify-center mx-auto">
                <Zap className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono text-[#FF8533]">STEP 02</span>
              <h3 className="text-xl font-bold text-white">Charge</h3>
              <p className="text-sm text-slate-400">Plug in and initiate smart charging session telemetry with live battery metrics.</p>
            </div>

            {/* Step 3: Pay */}
            <div className="glass-panel p-8 rounded-2xl border border-white/10 text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-[#FF6B00]/15 text-[#FF6B00] flex items-center justify-center mx-auto">
                <Wallet className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono text-[#FF8533]">STEP 03</span>
              <h3 className="text-xl font-bold text-white">Pay</h3>
              <p className="text-sm text-slate-400">Complete seamless automatic payment settlement via unified ZeneeEV wallet infrastructure.</p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="glass-panel p-10 rounded-3xl border border-[#FF6B00]/30 text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">Are you a Charging Network Operator?</h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            Partner with ZeneeAI to integrate your CPO network into the ZeneeEV ecosystem.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF6B00] hover:bg-[#FF8533] text-white font-semibold shadow-[0_0_25px_rgba(255,107,0,0.4)]"
          >
            <span>Partner with ZeneeEV</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
