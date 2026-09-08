import React from 'react';
import type { Metadata } from 'next';
import { OverseasNavbar } from '@/components/overseas/OverseasNavbar';
import { ProfileAssessmentForm } from '@/components/overseas/ProfileAssessmentForm';
import { OverseasFooter } from '@/components/overseas/OverseasFooter';
import { FileCheck2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Permanent Residency (PR) & Migration | ZeneeAI Overseas',
  description: 'Canada Express Entry, Australia Subclass 189/190 PR, and Germany Opportunity Card immigration pathways with ZeneeAI Overseas.',
};

export default function PRVisaPage() {
  return (
    <div className="min-h-screen bg-[#050711] text-white selection:bg-[#FF6B00] selection:text-white">
      <OverseasNavbar />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <FileCheck2 className="w-4 h-4" />
              <span>PERMANENT RESIDENCY & IMMIGRATION</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Settle Abroad Permanently with <span className="text-emerald-400">Full Work & Family Rights.</span>
            </h1>
            <p className="text-lg text-slate-300">
              CRS score maximization, ECA credential evaluation (WES/ACS), PNP nominations, and direct Express Entry & Australia PR filing.
            </p>
          </div>

          <ProfileAssessmentForm />

        </div>
      </main>
      <OverseasFooter />
    </div>
  );
}
