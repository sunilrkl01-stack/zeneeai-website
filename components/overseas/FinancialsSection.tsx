'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Coins,
  ShieldCheck,
  Building2,
  FileCheck2,
  ArrowRight,
  Sparkles,
  Landmark,
  CheckCircle2,
  CreditCard,
  HeartPulse,
} from 'lucide-react';

const FINANCIAL_SERVICES = [
  {
    icon: Landmark,
    title: 'Education Loans (Collateral & Non-Collateral)',
    description: 'Pre-sanctioned education loans up to ₹1.5 Crore ($150,000) with low interest rates from leading nationalized & international banking partners.',
    badge: '100% Loan Assistance',
    color: 'text-[#FF6B00]',
    highlights: ['Fast-track 48-Hour Approval', 'Zero Collateral Loans Available', 'Tax Benefit Under Sec 80E'],
  },
  {
    icon: Building2,
    title: 'German Blocked Account & Canada GIC',
    description: 'Hassle-free setup for German Blocked Accounts (Expatrio / Coracle / Fintiba) and Canadian GIC accounts (Scotiabank / CIBC / RBC).',
    badge: 'Fast Processing',
    color: 'text-cyan-400',
    highlights: ['Direct Bank Wire Guidance', 'Official Embassy Proofing', 'Instant Confirmation Slip'],
  },
  {
    icon: Coins,
    title: 'Forex Currency Transfer & Wire Services',
    description: 'Best guaranteed exchange rates for international tuition fee payments, living expense transfers, and multi-currency student debit cards.',
    badge: 'Zero Transfer Fee',
    color: 'text-emerald-400',
    highlights: ['Same-Day University Wire', 'Lock-In Exchange Rates', 'RBI Compliant Documentation'],
  },
  {
    icon: HeartPulse,
    title: 'Student Health Insurance (OSHC / NHS)',
    description: 'Mandatory medical insurance assistance including Australia OSHC, UK NHS Surcharge, US University Health Plans, and Schengen Travel Insurance.',
    badge: 'Embassy Approved',
    color: 'text-rose-400',
    highlights: ['Instant Digital Policy Issue', 'Complete Medical Coverage', 'Compliance Guarantee'],
  },
];

export const FinancialsSection: React.FC = () => {
  return (
    <section id="loans-forex" className="relative py-24 bg-[#050711] border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold uppercase tracking-widest text-emerald-300">
            <Coins className="w-3.5 h-3.5" />
            <span>FINANCIAL & LOAN SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Seamless Funding for Your <span className="text-emerald-400">Global Education.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            From pre-approved education loans to German blocked accounts, forex transfers, and student health insurance — we ensure total financial readiness.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FINANCIAL_SERVICES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-[#090E24]/90 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <span className="text-xs font-bold font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {item.highlights.map((hl) => (
                      <div key={hl} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Zero Hidden Brokerage</span>
                  <Link
                    href="#assessment"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-white transition-colors"
                  >
                    <span>Check Loan Eligibility</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
