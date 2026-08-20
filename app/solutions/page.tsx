import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SolutionsSection } from '@/components/SolutionsSection';
import { CTASection } from '@/components/CTASection';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#07080c] text-white">
      <Navbar />
      <main className="pt-24">
        <SolutionsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
