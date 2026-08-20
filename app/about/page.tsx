import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AboutSection } from '@/components/AboutSection';
import { WhyZeneeAI } from '@/components/WhyZeneeAI';
import { CTASection } from '@/components/CTASection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#07080c] text-white">
      <Navbar />
      <main className="pt-24">
        <AboutSection />
        <WhyZeneeAI />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
