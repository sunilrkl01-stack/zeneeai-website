import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AIInnovationSection } from '@/components/AIInnovationSection';
import { CTASection } from '@/components/CTASection';

export default function AIPage() {
  return (
    <div className="min-h-screen bg-[#07080c] text-white">
      <Navbar />
      <main className="pt-24">
        <AIInnovationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
