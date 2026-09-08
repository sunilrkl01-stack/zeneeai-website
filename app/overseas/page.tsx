import React from 'react';
import type { Metadata } from 'next';
import { OverseasNavbar } from '@/components/overseas/OverseasNavbar';
import { OverseasHero } from '@/components/overseas/OverseasHero';
import { ServicesSection } from '@/components/overseas/ServicesSection';
import { CountryGuideSection } from '@/components/overseas/CountryGuideSection';
import { TestPrepSection } from '@/components/overseas/TestPrepSection';
import { FinancialsSection } from '@/components/overseas/FinancialsSection';
import { WhyOverseasSection } from '@/components/overseas/WhyOverseasSection';
import { ProcessRoadmapSection } from '@/components/overseas/ProcessRoadmapSection';
import { SuccessStoriesSection } from '@/components/overseas/SuccessStoriesSection';
import { ProfileAssessmentForm } from '@/components/overseas/ProfileAssessmentForm';
import { WhatsAppCTA } from '@/components/overseas/WhatsAppCTA';
import { OverseasFooter } from '@/components/overseas/OverseasFooter';

export const metadata: Metadata = {
  title: 'ZeneeAI Overseas | Global Mobility, Study Visas, Visit Visas, Test Prep & PR',
  description:
    'ZeneeAI Overseas is a premier global visa & study abroad portal offering AI-driven university admissions, IELTS/PTE/GRE coaching, education loan assistance, visit visas, and permanent residency (PR) for USA, UK, Canada, Australia, Germany & Europe.',
  keywords: [
    'ZeneeAI Overseas',
    'Study Visa',
    'Student Visa',
    'Visit Visa',
    'IELTS Coaching',
    'PTE Academic Coaching',
    'GRE Coaching',
    'Education Loans',
    'Permanent Residency',
    'PR Visa',
    'Express Entry Canada',
    'Australia Subclass 500',
    'US F1 Visa',
    'Immigration Consultants',
  ],
  openGraph: {
    title: 'ZeneeAI Overseas — Premium Global Mobility & Visa Processing',
    description:
      'AI-Powered profile assessment, 99.2% visa approval rate, IELTS/PTE/GRE exam coaching, education loan support, and institutional tie-ups worldwide.',
    url: 'https://overseas.zeneeai.com',
    siteName: 'ZeneeAI Overseas',
    type: 'website',
  },
};

export default function OverseasPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'ZeneeAI Overseas',
    url: 'https://overseas.zeneeai.com',
    logo: 'https://overseas.zeneeai.com/images/overseas/zeneeai_overseas_logo.png',
    description: 'International study visa admissions, exam coaching (IELTS/PTE/GRE), education loan support, visitor visa filing, and permanent residency processing.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8309765978',
      contactType: 'customer service',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
    sameAs: ['https://zeneeai.com'],
  };

  return (
    <div className="min-h-screen bg-[#050711] text-white selection:bg-[#FF6B00] selection:text-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OverseasNavbar />
      <main>
        <OverseasHero />
        <ServicesSection />
        <CountryGuideSection />
        <TestPrepSection />
        <FinancialsSection />
        <WhyOverseasSection />
        <ProcessRoadmapSection />
        <SuccessStoriesSection />
        <ProfileAssessmentForm />
        <WhatsAppCTA />
      </main>
      <OverseasFooter />
    </div>
  );
}
