'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Quote,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  Plane,
  FileCheck2,
  Clock,
  Star,
  Award,
} from 'lucide-react';

interface Story {
  id: string;
  category: 'study' | 'visit' | 'pr';
  name: string;
  city: string;
  flag: string;
  destination: string;
  visaType: string;
  turnaround: string;
  institutionOrDetails: string;
  quote: string;
  rating: number;
}

const STORIES: Story[] = [
  {
    id: '1',
    category: 'study',
    name: 'Aarav Sharma',
    city: 'Hyderabad, India',
    flag: '🇺🇸',
    destination: 'United States',
    visaType: 'F-1 Student Visa',
    turnaround: 'Approved in 9 Days',
    institutionOrDetails: 'Northeastern University (MS Computer Science - $24k Scholarship)',
    quote:
      'ZeneeAI Overseas made my US F-1 visa journey completely stress-free. Their 1-on-1 embassy mock interviews gave me absolute confidence in front of the visa officer!',
    rating: 5,
  },
  {
    id: '2',
    category: 'pr',
    name: 'Ananya & Rahul Deshmukh',
    city: 'Pune, India',
    flag: '🇨🇦',
    destination: 'Canada',
    visaType: 'Express Entry PR Grant',
    turnaround: 'PR Granted in 4 Months',
    institutionOrDetails: 'Ontario PNP Provincial Nomination + CRS 492 Maximization',
    quote:
      'We had an initial CRS score of 440. ZeneeAI Overseas analyzed our credentials, helped with WES & PNP nomination, and secured our Canadian PR faster than we ever expected.',
    rating: 5,
  },
  {
    id: '3',
    category: 'visit',
    name: 'Vikramaditya Rao',
    city: 'Bangalore, India',
    flag: '🇬🇧',
    destination: 'United Kingdom',
    visaType: 'UK Standard Visitor Visa',
    turnaround: 'Approved in 7 Days',
    institutionOrDetails: '10-Year Multi-Entry Tourist & Business Visitor Visa',
    quote:
      'I had a prior refusal from another local consultant. ZeneeAI Overseas re-structured my entire financial cover letter and secured my UK visit visa within 7 days!',
    rating: 5,
  },
  {
    id: '4',
    category: 'study',
    name: 'Pooja Reddy',
    city: 'Telangana, India',
    flag: '🇦🇺',
    destination: 'Australia',
    visaType: 'Subclass 500 Student Visa',
    turnaround: 'Approved in 14 Days',
    institutionOrDetails: 'University of Melbourne (Master of Data Science)',
    quote:
      'Their team guided me through GTE/GSR documentation and financial proofing seamlessly. I received my Australian visa grant letter without any delays.',
    rating: 5,
  },
  {
    id: '5',
    category: 'pr',
    name: 'Rohit Verma',
    city: 'Delhi NCR, India',
    flag: '🇩🇪',
    destination: 'Germany',
    visaType: 'Opportunity Card (Chancenkarte)',
    turnaround: 'Approved in 18 Days',
    institutionOrDetails: 'Point-Based German Work & Job Seeker Migration',
    quote:
      'The Opportunity Card point calculation can be tricky. ZeneeAI Overseas resolved my degree verification (Anabin) and blocked account setup flawlessly.',
    rating: 5,
  },
  {
    id: '6',
    category: 'study',
    name: 'Sneha Kulkarni',
    city: 'Mumbai, India',
    flag: '🇮🇪',
    destination: 'Ireland',
    visaType: 'Stamp 2 Student Visa',
    turnaround: 'Approved in 10 Days',
    institutionOrDetails: 'Trinity College Dublin (MSc FinTech)',
    quote:
      'Ireland’s tech ecosystem is booming! ZeneeAI Overseas handled my tuition transfer, visa filing, and even helped me book my TCD campus accommodation.',
    rating: 5,
  },
];

export const SuccessStoriesSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'study' | 'visit' | 'pr'>('all');

  const filteredStories = STORIES.filter(
    (story) => filter === 'all' || story.category === filter
  );

  return (
    <section id="success-stories" className="relative py-24 bg-[#050711] border-t border-white/10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold uppercase tracking-widest text-emerald-300">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED SUCCESS STORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Real Clients. Real Visa Grants.{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Zero Refusals.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Read inspiring journeys of students, families, and professionals who achieved their global dreams with ZeneeAI Overseas.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {[
            { id: 'all', label: 'All Stories', icon: Sparkles },
            { id: 'study', label: 'Student Visas', icon: GraduationCap },
            { id: 'visit', label: 'Visit & Tourist Visas', icon: Plane },
            { id: 'pr', label: 'PR & Immigration', icon: FileCheck2 },
          ].map((item) => {
            const Icon = item.icon;
            const isSelected = filter === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setFilter(item.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border ${
                  isSelected
                    ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredStories.map((story) => (
              <motion.div
                key={story.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-3xl bg-[#090E24]/90 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar: Flag & Visa Grant Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{story.flag}</span>
                      <div>
                        <span className="text-xs font-bold text-white block">{story.destination}</span>
                        <span className="text-[10px] text-slate-400 font-mono">{story.visaType}</span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-bold font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{story.turnaround}</span>
                    </span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-slate-200 italic leading-relaxed relative">
                    <Quote className="w-6 h-6 text-slate-600/30 absolute -top-2 -left-2 pointer-events-none" />
                    "{story.quote}"
                  </p>

                  {/* Institution Details */}
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-cyan-300 font-medium">
                    🏛️ {story.institutionOrDetails}
                  </div>

                </div>

                {/* Footer: Name & Location */}
                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-extrabold text-white block">{story.name}</span>
                    <span className="text-xs text-slate-400">{story.city}</span>
                  </div>

                  <span className="text-[10px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                    VERIFIED GRANT
                  </span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
