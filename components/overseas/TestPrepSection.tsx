'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Award,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MonitorPlay,
  Users,
  Target,
  GraduationCap,
} from 'lucide-react';

interface TestItem {
  id: string;
  name: string;
  fullTitle: string;
  targetScore: string;
  duration: string;
  mode: string;
  tagline: string;
  highlights: string[];
  badgeColor: string;
}

const TESTS: TestItem[] = [
  {
    id: 'ielts',
    name: 'IELTS',
    fullTitle: 'International English Language Testing System',
    targetScore: '7.5+ Band Target',
    duration: '4-6 Weeks Batch',
    mode: 'Live Online & Offline',
    tagline: 'Accepted by 11,500+ universities in UK, Australia, Canada, USA & NZ.',
    highlights: [
      'Comprehensive Listening, Reading, Writing & Speaking Modules',
      'Daily 1-on-1 Speaking Evaluation with Certified Trainers',
      'Unlimited Full-Length AI Mock Tests with Band Score Breakdown',
    ],
    badgeColor: 'bg-[#FF6B00]/15 text-[#FF6B00] border-[#FF6B00]/40',
  },
  {
    id: 'pte',
    name: 'PTE Academic',
    fullTitle: 'Pearson Test of English Academic',
    targetScore: '79+ Score Target',
    duration: '3-4 Weeks Batch',
    mode: 'AI Computer Lab + Online',
    tagline: '100% Computerized exam accepted for Australia, UK & Canada Study & PR.',
    highlights: [
      'Proven AI Template Strategies for Describe Image & Retell Lecture',
      'Real Exam Question Bank & Repeated Prediction Materials',
      'Scoring Algorithm Practice software mirroring official Pearson scoring',
    ],
    badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40',
  },
  {
    id: 'toefl',
    name: 'TOEFL iBT',
    fullTitle: 'Test of English as a Foreign Language',
    targetScore: '100+ Score Target',
    duration: '4 Weeks Batch',
    mode: 'Interactive Online',
    tagline: 'Preferred English proficiency exam for US & top global universities.',
    highlights: [
      'Integrated Writing & Speaking section breakdown',
      'Timed section drills with instant instructor feedback',
      'Vocabulary enrichment & academic passage analysis',
    ],
    badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
  },
  {
    id: 'gre',
    name: 'GRE General',
    fullTitle: 'Graduate Record Examination',
    targetScore: '325+ Score Target',
    duration: '6-8 Weeks Batch',
    mode: 'Live Masterclasses',
    tagline: 'Crucial for Master’s & Ph.D. scholarships in STEM, Business & CS.',
    highlights: [
      'Quant Shortcut Formulas & Advanced Problem Solving',
      'Verbal Reasoning Contextual Vocabulary (1,500+ words masterlist)',
      'Analytical Writing Essay (AWA) scoring rubrics & feedback',
    ],
    badgeColor: 'bg-purple-500/15 text-purple-300 border-purple-500/40',
  },
  {
    id: 'duolingo',
    name: 'Duolingo (DET)',
    fullTitle: 'Duolingo English Test',
    targetScore: '125+ Score Target',
    duration: '2 Weeks Fast-Track',
    mode: 'Self-Paced + Live Support',
    tagline: 'Fast, affordable at-home test accepted by 4,500+ global universities.',
    highlights: [
      'Fast-track 14-day intensive preparation module',
      'Interactive Question types (Read & Select, Listen & Type, C-test)',
      '1-on-1 Speaking & Writing response correction',
    ],
    badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
  },
  {
    id: 'sat',
    name: 'Digital SAT',
    fullTitle: 'Scholastic Assessment Test',
    targetScore: '1450+ Score Target',
    duration: '8-10 Weeks Batch',
    mode: 'Classroom & Hybrid',
    tagline: 'Undergraduate admissions & merit scholarship key for US & Canada.',
    highlights: [
      'Adaptive Digital SAT practice software matching official Bluebook',
      'Math Module 1 & 2 problem solving strategies',
      'Reading & Writing evidence-based grammar and comprehension',
    ],
    badgeColor: 'bg-rose-500/15 text-rose-300 border-rose-500/40',
  },
];

export const TestPrepSection: React.FC = () => {
  return (
    <section id="coaching" className="relative py-24 bg-[#060813] border-t border-white/10 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-bold uppercase tracking-widest text-purple-300">
            <BookOpen className="w-3.5 h-3.5" />
            <span>EXAM COACHING & TEST PREP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Master Your Standardized Exams with <span className="text-[#FF6B00]">Proven Masterclasses.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Certified trainers, AI mock diagnostic tests, and customized study plans to hit your target band scores on your first attempt.
          </p>
        </div>

        {/* 6 Exam Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-[#090E24]/90 border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-extrabold font-mono border ${test.badgeColor}`}>
                    {test.name}
                  </span>
                  <span className="text-xs font-bold font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-md">
                    {test.targetScore}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    {test.name} Coaching
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">{test.fullTitle}</p>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed font-medium">
                    {test.tagline}
                  </p>
                </div>

                {/* Duration & Mode */}
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 py-2">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>{test.duration}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-1.5">
                    <MonitorPlay className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{test.mode}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  {test.highlights.map((hl) => (
                    <div key={hl} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Action CTA */}
              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">
                  Free Diagnostic Mock Test Included
                </span>
                <Link
                  href="#assessment"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-purple-500/20 hover:bg-purple-500 text-purple-300 hover:text-white font-bold text-xs border border-purple-500/40 transition-all"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
