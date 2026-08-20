import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { AboutSection } from '@/components/AboutSection';
import { ProductsSection } from '@/components/ProductsSection';
import { AIInnovationSection } from '@/components/AIInnovationSection';
import { SolutionsSection } from '@/components/SolutionsSection';
import { WhyZeneeAI } from '@/components/WhyZeneeAI';
import { TechFlowSection } from '@/components/TechFlowSection';
import { CompanyStatement } from '@/components/CompanyStatement';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#07080c] text-white selection:bg-[#FF6B00] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <AboutSection />
        <ProductsSection />
        <AIInnovationSection />
        <SolutionsSection />
        <WhyZeneeAI />
        <TechFlowSection />
        <CompanyStatement />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
