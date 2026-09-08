import React from 'react';
import type { Metadata } from 'next';
import { OverseasNavbar } from '@/components/overseas/OverseasNavbar';
import { ProfileAssessmentForm } from '@/components/overseas/ProfileAssessmentForm';
import { OverseasFooter } from '@/components/overseas/OverseasFooter';

export const metadata: Metadata = {
  title: 'Free Profile Assessment | ZeneeAI Overseas',
  description: 'Evaluate your global study visa, visit visa, or PR eligibility with ZeneeAI Overseas AI profile engine.',
};

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-[#050711] text-white selection:bg-[#FF6B00] selection:text-white">
      <OverseasNavbar />
      <main className="pt-28 pb-12">
        <ProfileAssessmentForm />
      </main>
      <OverseasFooter />
    </div>
  );
}
