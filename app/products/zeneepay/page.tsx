import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CreditCard, Smartphone, Receipt, Gift, ArrowRight } from 'lucide-react';

export default function ZeneePayPage() {
  return (
    <div className="min-h-screen bg-[#07080c] text-white">
      <Navbar />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold uppercase tracking-wider">
            PRODUCT / FINTECH
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            ZeneePay
          </h1>
          <p className="text-2xl font-semibold text-[#FF8533]">
            Digital payments, simplified.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            A next-generation digital payments platform designed to bring everyday financial services, recharges, bill payments and rewards into one seamless experience.
          </p>
        </div>

        {/* 4 Feature Ecosystem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="p-3 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00] w-fit">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Digital Payments</h3>
            <p className="text-sm text-slate-400">Fast, secure peer-to-peer and merchant payment transactions.</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="p-3 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00] w-fit">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Instant Recharges</h3>
            <p className="text-sm text-slate-400">Instant mobile, data, and utility connectivity top-ups.</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="p-3 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00] w-fit">
              <Receipt className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Bill Payments</h3>
            <p className="text-sm text-slate-400">Automated utility, electricity, water, and subscription payments.</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="p-3 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00] w-fit">
              <Gift className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Smart Rewards</h3>
            <p className="text-sm text-slate-400">Cashback and loyalty rewards on every digital payment transaction.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="glass-panel p-10 rounded-3xl border border-[#FF6B00]/30 text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">Ready to integrate ZeneePay into your business?</h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            Connect with our FinTech solutions team to explore enterprise payment processing and API integrations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF6B00] hover:bg-[#FF8533] text-white font-semibold shadow-[0_0_25px_rgba(255,107,0,0.4)]"
          >
            <span>Talk to FinTech Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
