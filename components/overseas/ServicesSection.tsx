'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Plane,
  FileCheck2,
  Briefcase,
  BookOpen,
  Landmark,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  badgeColor: string;
  accentGradient: string;
  borderColor: string;
  description: string;
  features: string[];
  destinations: string[];
  ctaText: string;
  href: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'study-visa',
    category: '01 / HIGHER EDUCATION',
    title: 'Student Study Visa',
    tagline: 'Unlock Admissions & Post-Study Work Permits Worldwide.',
    icon: GraduationCap,
    badgeColor: 'bg-[#FF6B00]/15 text-[#FF6B00] border-[#FF6B00]/40',
    accentGradient: 'from-[#FF6B00]/20 to-transparent',
    borderColor: 'hover:border-[#FF6B00]/50',
    description:
      'Turn your academic ambitions into reality. We guide you through university selection, SOP/LOR optimization, scholarship filings, financial proofing, and embassy mock interviews.',
    features: [
      'Top 500 QS-Ranked Universities & Colleges',
      'Up to 3-5 Years Post-Study Work Visa (PSWV)',
      'SOP & Letter of Recommendation Writing',
      'Scholarship & Low-Interest Loan Assistance',
      '1-on-1 Embassy Visa Mock Interview Sessions',
    ],
    destinations: ['USA', 'UK', 'Canada', 'Australia', 'Germany', 'Ireland'],
    ctaText: 'Explore Study Visas',
    href: '/overseas/study-visa',
  },
  {
    id: 'visit-visa',
    category: '02 / TRAVEL & BUSINESS',
    title: 'Visit & Tourist Visa',
    tagline: 'Fast-Track Multi-Country Visitor Visas with Zero Hassle.',
    icon: Plane,
    badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40',
    accentGradient: 'from-cyan-500/20 to-transparent',
    borderColor: 'hover:border-cyan-500/50',
    description:
      'Whether visiting family, attending business conferences, or exploring international travel, our legal specialists ensure flawless file submission.',
    features: [
      'Fast-Track Embassy Appointment Scheduling',
      'Schengen Multi-Country 27-State Visas',
      'Custom Itinerary & Flight/Hotel Proofing',
      'Financial Cover Letter & Affidavit Drafting',
      'High Acceptance Guarantee Strategy',
    ],
    destinations: ['USA (B1/B2)', 'UK Tourist', 'Schengen Area', 'Canada Visitor', 'Dubai/UAE'],
    ctaText: 'Apply for Visit Visa',
    href: '/overseas/visit-visa',
  },
  {
    id: 'pr-visa',
    category: '03 / PERMANENT SETTLEMENT',
    title: 'Permanent Residency (PR)',
    tagline: 'Settle Abroad Permanently with Family & Work Rights.',
    icon: FileCheck2,
    badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
    accentGradient: 'from-emerald-500/20 to-transparent',
    borderColor: 'hover:border-emerald-500/50',
    description:
      'Direct immigration pathways for skilled professionals and families. Comprehensive CRS score boosting, ECA credential evaluation (WES/ACS), and PNP nomination strategies.',
    features: [
      'Canada Express Entry & PNP Nominations',
      'Australia Subclass 189, 190 & 491 Skilled Visas',
      'Skill Assessment Assistance (WES, ACS, VETASSESS)',
      'Points Maximization & Job Search Guidance',
      'Spouse & Dependent Migration Inclusion',
    ],
    destinations: ['Canada (Express Entry)', 'Australia PR', 'New Zealand', 'Germany Opportunity Card'],
    ctaText: 'Calculate PR Eligibility',
    href: '/overseas/pr-visa',
  },
  {
    id: 'work-visa',
    category: '04 / CAREERS & EXPANSION',
    title: 'Work & Business Visa',
    tagline: 'Global Career Opportunities & Intra-Company Relocation.',
    icon: Briefcase,
    badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
    accentGradient: 'from-amber-500/20 to-transparent',
    borderColor: 'hover:border-amber-500/50',
    description:
      'Expand your business footprint or secure employment sponsorship overseas. End-to-end guidance for LMIA, CoS, work permits, and investor visa categories.',
    features: [
      'Employer Sponsor Verification & CoS Filing',
      'Intra-Company Executive Transfers',
      'Investor & Innovator Visa Programs',
      'Work Permit Renewal & PR Transition',
      'Compliance & Legal Clearance Support',
    ],
    destinations: ['UK Skilled Worker', 'USA H-1B / L-1', 'Germany Job Seeker', 'UAE Golden Visa'],
    ctaText: 'Inquire Work Visa',
    href: '#assessment',
  },
  {
    id: 'test-prep',
    category: '05 / EXAM COACHING',
    title: 'Test Prep & Language Coaching',
    tagline: 'Target 7.5+ IELTS, 79+ PTE, GRE & Duolingo Scores.',
    icon: BookOpen,
    badgeColor: 'bg-purple-500/15 text-purple-300 border-purple-500/40',
    accentGradient: 'from-purple-500/20 to-transparent',
    borderColor: 'hover:border-purple-500/50',
    description:
      'Certified master trainers, online/offline batches, daily 1-on-1 speaking practice, and AI mock exam software mirroring official test patterns.',
    features: [
      'IELTS Academic & General Training',
      'PTE Academic Computer Lab Coaching',
      'GRE General Quant & Verbal Masterclasses',
      'Duolingo & TOEFL Fast-Track Batches',
      'Unlimited AI Diagnostic Mock Tests',
    ],
    destinations: ['IELTS 7.5+', 'PTE 79+', 'GRE 325+', 'Duolingo 125+'],
    ctaText: 'Explore Test Prep',
    href: '#coaching',
  },
  {
    id: 'financials',
    category: '06 / FUNDING & LOANS',
    title: 'Education Loans & Forex',
    tagline: 'Pre-Approved Loans up to ₹1.5 Cr & German Blocked Accounts.',
    icon: Landmark,
    badgeColor: 'bg-teal-500/15 text-teal-300 border-teal-500/40',
    accentGradient: 'from-teal-500/20 to-transparent',
    borderColor: 'hover:border-teal-500/50',
    description:
      'Collateral and non-collateral education loan assistance, German Blocked Account (Expatrio/Fintiba) setup, Canadian GIC, and university forex wire transfers.',
    features: [
      'Pre-Approved Education Loans (Nationalized/Private)',
      'German Blocked Account & Canada GIC Setup',
      'Best Exchange Rate University Forex Wire',
      'Student Health Insurance (OSHC / NHS)',
      'Tax Savings under Sec 80E Guidance',
    ],
    destinations: ['Low Interest', 'Zero Collateral', 'Fast Sanction', 'RBI Approved'],
    ctaText: 'Check Loan Eligibility',
    href: '#loans-forex',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-24 bg-[#050711] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT ARE YOU LOOKING FOR?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Comprehensive Solutions for Every <span className="bg-gradient-to-r from-[#FF6B00] via-amber-300 to-cyan-400 bg-clip-text text-transparent">Global Ambition.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            From university admissions and test preparation to visa processing, education loans, and post-landing support — ZeneeAI Overseas is your complete partner.
          </p>
        </div>

        {/* 6 Primary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-3xl p-8 bg-[#090D1F]/90 border border-white/10 ${service.borderColor} transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden`}
              >
                {/* Ambient Corner Radial Accent */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${service.accentGradient} rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none`} />

                <div className="space-y-6 relative z-10">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border ${service.badgeColor}`}>
                      <Icon className="w-3.5 h-3.5" />
                      {service.title}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{service.category}</span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-300 mt-1">
                      {service.tagline}
                    </p>
                    <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Key Highlights Checklist */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                    <span className="text-[11px] font-semibold uppercase text-slate-300 tracking-wider block mb-1">
                      Key Highlights & Services
                    </span>
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.destinations.map((dest) => (
                        <span
                          key={dest}
                          className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-cyan-200"
                        >
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Bottom CTA Link */}
                <div className="pt-6 relative z-10 flex items-center justify-between border-t border-white/10 mt-6">
                  <Link
                    href="#assessment"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] group-hover:text-white transition-colors"
                  >
                    <span>Check Eligibility</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-[#FF6B00] text-white font-semibold text-xs transition-all duration-300"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3 h-3" />
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
