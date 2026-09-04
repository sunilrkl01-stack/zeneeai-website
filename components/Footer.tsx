'use client';

import React from 'react';
import Link from 'next/link';
import { ZeneeLogo } from './ZeneeLogo';
import { Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050609] border-t border-white/10 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (Left Column) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <ZeneeLogo size="lg" />
            </Link>
            <p className="text-sm font-semibold text-[#FF8533] uppercase tracking-wider">
              Technology. Intelligence. Innovation.
            </p>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Building intelligent digital products for a connected world across AI, FinTech, mobility and enterprise technology.
            </p>

            {/* Direct Contact Links */}
            <div className="pt-3 space-y-2 text-sm">
              <a
                href="mailto:founder@zeneeai.com"
                className="flex items-center gap-2.5 text-slate-300 hover:text-[#FF6B00] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FF6B00]" />
                <span>founder@zeneeai.com</span>
              </a>
              <a
                href="tel:+919392616336"
                className="flex items-center gap-2.5 text-slate-300 hover:text-[#FF6B00] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF6B00]" />
                <span>+91 93926 16336</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Column 1: Products */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Products
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/products/zeneepay" className="hover:text-white transition-colors">
                    ZeneePay
                  </Link>
                </li>
                <li>
                  <Link href="/products/zeneeev" className="hover:text-white transition-colors">
                    ZeneeEV
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Solutions */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Solutions
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/solutions#ai" className="hover:text-white transition-colors">
                    AI & Automation
                  </Link>
                </li>
                <li>
                  <Link href="/solutions#fintech" className="hover:text-white transition-colors">
                    FinTech
                  </Link>
                </li>
                <li>
                  <Link href="/solutions#mobility" className="hover:text-white transition-colors">
                    Mobility
                  </Link>
                </li>
                <li>
                  <Link href="/solutions#enterprise" className="hover:text-white transition-colors">
                    Enterprise Technology
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Legal & Compliance
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/zeneeaipay/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/zeneeaipay/delete-account" className="hover:text-white transition-colors">
                    Account Deletion
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 ZeneeAI Overseas and Technologies Private Limited. All Rights Reserved.</p>
          <p className="font-mono text-slate-500">zeneeai.com</p>
        </div>

      </div>
    </footer>
  );
};
