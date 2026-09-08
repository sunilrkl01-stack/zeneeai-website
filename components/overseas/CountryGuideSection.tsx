'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe2,
  Clock,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building2,
  DollarSign,
  TrendingUp,
} from 'lucide-react';

interface CountryDetail {
  id: string;
  flag: string;
  name: string;
  tagline: string;
  approvalRate: string;
  avgProcessing: string;
  postStudyWork: string;
  topIntakes: string;
  popularPrograms: string[];
  visaTypes: string[];
  keyHighlights: string[];
  universitiesSample: string[];
}

const COUNTRIES: CountryDetail[] = [
  {
    id: 'usa',
    flag: '🇺🇸',
    name: 'United States',
    tagline: 'World Leader in Higher Education & Innovation Tech Hubs.',
    approvalRate: '98.6%',
    avgProcessing: '2-4 Weeks',
    postStudyWork: 'Up to 3 Years (STEM OPT)',
    topIntakes: 'Fall (Aug/Sep) & Spring (Jan)',
    popularPrograms: ['Computer Science & AI', 'Data Science', 'MBA & Finance', 'Engineering', 'Healthcare'],
    visaTypes: ['F-1 Student Visa', 'B1/B2 Visit Visa', 'H-1B Work Permit', 'O-1 Extraordinary Ability'],
    keyHighlights: [
      '3-Year STEM OPT extension allowing full-time employment',
      'Flexible credit waiver & Assistantship (TA/RA) stipends',
      'Direct interview prep for US Embassy slots',
    ],
    universitiesSample: ['Northeastern', 'NYU', 'University of Texas', 'USC', 'Arizona State'],
  },
  {
    id: 'uk',
    flag: '🇬🇧',
    name: 'United Kingdom',
    tagline: 'Short 1-Year Masters & Guaranteed Graduate Route Visas.',
    approvalRate: '99.4%',
    avgProcessing: '1-3 Weeks',
    postStudyWork: '2-3 Years Graduate Route',
    topIntakes: 'September & January',
    popularPrograms: ['Business Analytics', 'FinTech & Banking', 'Biotechnology', 'Law', 'Project Management'],
    visaTypes: ['Student Visa (CAS)', 'Standard Visitor Visa', 'Skilled Worker Visa'],
    keyHighlights: [
      '1-Year Master’s degrees reduce tuition & living expenses by half',
      'No mandatory GRE/GMAT for majority of Top UK Universities',
      'Direct conversion to Skilled Worker sponsorship',
    ],
    universitiesSample: ['University of Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Coventry'],
  },
  {
    id: 'canada',
    flag: '🇨🇦',
    name: 'Canada',
    tagline: 'Streamlined Study to PR Migration via Express Entry & PNP.',
    approvalRate: '98.9%',
    avgProcessing: '3-6 Weeks',
    postStudyWork: 'Up to 3 Years (PGWP)',
    topIntakes: 'Fall (Sep), Winter (Jan), Summer (May)',
    popularPrograms: ['Software Engineering', 'Supply Chain Management', 'Nursing & Care', 'Business Admin'],
    visaTypes: ['Study Permit (SDS/Non-SDS)', 'Tourist Visitor Visa', 'Express Entry PR', 'PNP Migration'],
    keyHighlights: [
      'Clear pathway from PGWP to Permanent Residency (PR)',
      'Spousal Open Work Permit for full-time work rights during studies',
      'SDS Fast-Track processing within 20 days',
    ],
    universitiesSample: ['University of Toronto', 'UBC', 'Waterloo', 'McGill', 'Conestoga'],
  },
  {
    id: 'australia',
    flag: '🇦🇺',
    name: 'Australia',
    tagline: 'High Quality of Life, Subclass 485 Work Permits & PR Pathways.',
    approvalRate: '98.4%',
    avgProcessing: '2-5 Weeks',
    postStudyWork: '2 to 4 Years Subclass 485',
    topIntakes: 'February & July',
    popularPrograms: ['Cyber Security', 'Civil Engineering', 'Accounting & Finance', 'Hospitality Management'],
    visaTypes: ['Subclass 500 Student Visa', 'Subclass 600 Tourist', 'Subclass 189/190 PR'],
    keyHighlights: [
      'Extended post-study work rights for regional study hubs',
      'Subclass 189 & 190 PR point system with high IT/Engineering demand',
      'High minimum hourly wage for part-time student employment',
    ],
    universitiesSample: ['University of Melbourne', 'USYD', 'UNSW', 'Monash', 'Queensland'],
  },
  {
    id: 'germany',
    flag: '🇩🇪',
    name: 'Germany & Europe',
    tagline: 'Tuition-Free Public Universities & Opportunity Card Visas.',
    approvalRate: '97.9%',
    avgProcessing: '3-6 Weeks',
    postStudyWork: '18 Months Job Seeker',
    topIntakes: 'Winter (Oct) & Summer (April)',
    popularPrograms: ['Automotive & Mechanical', 'Embedded Systems', 'Data Science', 'Clean Energy'],
    visaTypes: ['National Student Visa', 'Schengen 90-Day Tourist', 'Chancenkarte (Opportunity Card)'],
    keyHighlights: [
      'Zero tuition fee public universities for international students',
      'Opportunity Card (Chancenkarte) point-based job seeker visa',
      'Schengen visa unlocks hassle-free travel across 27 EU nations',
    ],
    universitiesSample: ['TU Munich', 'RWTH Aachen', 'TU Berlin', 'Heidelberg', 'FAU Erlangen'],
  },
  {
    id: 'ireland',
    flag: '🇮🇪',
    name: 'Ireland',
    tagline: 'Europe’s Silicon Valley & 2-Year Third Level Graduate Visa.',
    approvalRate: '99.1%',
    avgProcessing: '2-4 Weeks',
    postStudyWork: '2 Years Graduate Scheme',
    topIntakes: 'September & January',
    popularPrograms: ['Cloud Computing', 'Pharmaceuticals', 'FinTech', 'Digital Marketing'],
    visaTypes: ['Stamp 2 Student Visa', 'Short Stay C Visit Visa', 'Critical Skills Employment Permit'],
    keyHighlights: [
      'European Headquarters of Google, Meta, Apple, Pfizer & Stripe',
      'English-speaking EU economy with rapid job growth',
      'Critical Skills Employment Permit leads to Stamp 4 PR',
    ],
    universitiesSample: ['Trinity College Dublin', 'UCD', 'University of Galway', 'DCU', 'TUD'],
  },
];

export const CountryGuideSection: React.FC = () => {
  const [activeCountry, setActiveCountry] = useState<CountryDetail>(COUNTRIES[0]);

  return (
    <section id="countries" className="relative py-24 bg-[#060813] border-t border-white/10 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Visual Image Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold uppercase tracking-widest text-cyan-300">
              <Globe2 className="w-3.5 h-3.5" />
              <span>GLOBAL DESTINATION MAP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Choose Your <span className="text-[#FF6B00]">Destination.</span>
            </h2>
            <p className="text-slate-300 text-base max-w-xl leading-relaxed">
              Compare visa processing speeds, stay-back work permits, tuition costs, and top university pathways across leading global destinations.
            </p>
            <div className="pt-2">
              <Link
                href="#assessment"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-[#FF6B00] text-white text-xs font-bold transition-all shadow-md"
              >
                <span>Get Personalized Country Recommendation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-xl group">
            <img
              src="/images/overseas/destinations.jpg"
              alt="ZeneeAI Overseas Global Destinations"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060813] via-transparent to-transparent opacity-60" />
            <span className="absolute bottom-3 left-4 text-xs font-mono font-bold text-cyan-300 bg-[#060813]/80 px-2.5 py-1 rounded border border-cyan-500/30">
              50+ Countries Covered
            </span>
          </div>
        </div>

        {/* Country Selector Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 scrollbar-none mb-10">
          {COUNTRIES.map((country) => {
            const isSelected = activeCountry.id === country.id;
            return (
              <button
                key={country.id}
                onClick={() => setActiveCountry(country)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-300 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-900/60 to-slate-900 border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-105'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="text-lg">{country.flag}</span>
                <span>{country.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Country Detail Showcase Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCountry.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#090E24]/90 rounded-3xl border border-cyan-500/20 p-8 sm:p-10 backdrop-blur-xl shadow-2xl"
          >
            {/* Left Box: Flag, Tagline & Metrics */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{activeCountry.flag}</span>
                  <div>
                    <h3 className="text-3xl font-extrabold text-white tracking-tight">
                      {activeCountry.name}
                    </h3>
                    <span className="text-xs font-mono text-cyan-300 bg-cyan-500/20 px-2.5 py-0.5 rounded-md border border-cyan-500/40 mt-1 inline-block">
                      Approval Rate: {activeCountry.approvalRate}
                    </span>
                  </div>
                </div>

                <p className="text-base text-slate-300 font-medium mt-4 leading-relaxed">
                  {activeCountry.tagline}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Avg Processing</span>
                  </div>
                  <div className="text-base font-bold text-white">{activeCountry.avgProcessing}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Post-Study Work</span>
                  </div>
                  <div className="text-base font-bold text-white">{activeCountry.postStudyWork}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 col-span-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Main Intakes</span>
                  </div>
                  <div className="text-base font-bold text-white">{activeCountry.topIntakes}</div>
                </div>
              </div>

              {/* Direct CTA */}
              <Link
                href="#assessment"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white font-bold text-sm shadow-[0_0_20px_rgba(255,107,0,0.4)]"
              >
                <span>Assess Eligibility for {activeCountry.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Box: Key Highlights & Popular Programs */}
            <div className="lg:col-span-7 space-y-6 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8 pt-6 lg:pt-0">
              
              {/* Key Highlights */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FF6B00]" />
                  Why Applicants Choose {activeCountry.name}
                </h4>
                <div className="space-y-2.5">
                  {activeCountry.keyHighlights.map((hl) => (
                    <div key={hl} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supported Visa Categories */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Supported Visa Categories
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCountry.visaTypes.map((v) => (
                    <span
                      key={v}
                      className="px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-xs font-semibold text-cyan-200"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sample Universities / Institutions */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Sample Partner Universities / Institutions
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCountry.universitiesSample.map((uni) => (
                    <span
                      key={uni}
                      className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
                    >
                      🏛️ {uni}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
