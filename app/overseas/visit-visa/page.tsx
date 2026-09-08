import React from 'react';
import type { Metadata } from 'next';
import { OverseasNavbar } from '@/components/overseas/OverseasNavbar';
import { ProfileAssessmentForm } from '@/components/overseas/ProfileAssessmentForm';
import { OverseasFooter } from '@/components/overseas/OverseasFooter';
import { Plane, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Visit & Tourist Visas | Fast-Track Filing | ZeneeAI Overseas',
  description: 'Apply for USA B1/B2, UK Visitor, Schengen 27-State, and Canada Tourist visas with ZeneeAI Overseas.',
};

export default function VisitVisaPage() {
  return (
    <div className="min-h-screen bg-[#050711] text-white selection:bg-[#FF6B00] selection:text-white">
      <OverseasNavbar />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Plane className="w-4 h-4" />
              <span>VISITOR & TOURIST VISAS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Fast-Track Visitor Visas for <span className="text-cyan-400">Global Travel.</span>
            </h1>
            <p className="text-lg text-slate-300">
              Zero-refusal documentation strategy for tourist visits, business trips, family visits, and conference attendance.
            </p>
          </div>

          <ProfileAssessmentForm />

        </div>
      </main>
      <OverseasFooter />
    </div>
  );
}
