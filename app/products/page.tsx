import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductsSection } from '@/components/ProductsSection';
import { CTASection } from '@/components/CTASection';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#07080c] text-white">
      <Navbar />
      <main className="pt-24">
        <ProductsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
