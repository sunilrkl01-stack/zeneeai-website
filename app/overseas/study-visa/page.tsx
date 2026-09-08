import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { OverseasNavbar } from '@/components/overseas/OverseasNavbar';
import { ProfileAssessmentForm } from '@/components/overseas/ProfileAssessmentForm';
import { OverseasFooter } from '@/components/overseas/OverseasFooter';
import { GraduationCap, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, BookOpen, Globe2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Student Study Visa Admissions & PSWV | ZeneeAI Overseas',
  description: 'Apply for top universities in USA, UK, Canada, Australia, Germany & Ireland with ZeneeAI Overseas study visa processing.',
};

export default function StudyVisaPage() {
  return (
    <div className="min-h-screen bg-[#050711] text-white selection:bg-[#FF6B00] selection:text-white">
      <OverseasNavbar />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>HIGHER EDUCATION PATHWAYS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Study at QS Top-Ranked Universities <span className="text-[#FF6B00]">Worldwide.</span>
            </h1>
            <p className="text-lg text-slate-300">
              End-to-end guidance from university admissions, SOP/LOR editing, scholarship applications, to 1-on-1 embassy visa mock interviews.
            </p>
          </div>

          {/* Key Deliverables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#090E24] border border-white/10 space-y-4">
              <div className="p-3 rounded-2xl bg-[#FF6B00]/10 text-[#FF6B00] w-fit">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">University Selection & Shortlisting</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Algorithmic profiling matching your GPA, backlogs, test scores (IELTS/TOEFL/GRE), and budget to guaranteed acceptance universities.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#090E24] border border-white/10 space-y-4">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 w-fit">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">SOP & Resume Optimization</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Professional editorial enhancement of your Statement of Purpose (SOP) and Letters of Recommendation (LOR) by certified academic writers.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#090E24] border border-white/10 space-y-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Embassy Visa Interview Prep</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                1-on-1 mock interviews simulating real embassy questions for US F-1, UK CAS, Canada SDS, and German National Student Visas.
              </p>
            </div>
          </div>

          {/* Assessment Form Container */}
          <ProfileAssessmentForm />

        </div>
      </main>
      <OverseasFooter />
    </div>
  );
}
