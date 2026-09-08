'use client';

import React from 'react';
import Link from 'next/link';
import { OverseasLogo } from './OverseasLogo';
import { Mail, Phone, Globe, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const OverseasFooter: React.FC = () => {
  return (
    <footer className="bg-[#03050B] border-t border-cyan-500/20 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/overseas" className="inline-block">
              <OverseasLogo size="xl" />
            </Link>
            
            <p className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
              A ZeneeAI Ecosystem Brand
            </p>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              ZeneeAI Overseas is a tech-driven global mobility platform delivering student university admissions, visit visas, and permanent residency solutions with 99.2% grant accuracy.
            </p>

            {/* Direct Contact Links */}
            <div className="pt-2 space-y-2 text-sm">
              <a
                href="mailto:admissions@zeneeai.com"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#FF6B00]" />
                <span className="font-bold text-[#FF8533] group-hover:text-[#FF6B00] transition-colors">admissions@zeneeai.com</span>
              </a>
              <a
                href="tel:+919392616336"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">+91 93926 16336</span>
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Column 1: Services */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Visa Services
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/overseas#services" className="hover:text-cyan-300 transition-colors">
                    Student Study Visa
                  </Link>
                </li>
                <li>
                  <Link href="/overseas#services" className="hover:text-cyan-300 transition-colors">
                    Visit & Tourist Visa
                  </Link>
                </li>
                <li>
                  <Link href="/overseas#services" className="hover:text-cyan-300 transition-colors">
                    Permanent Residency (PR)
                  </Link>
                </li>
                <li>
                  <Link href="/overseas#services" className="hover:text-cyan-300 transition-colors">
                    Work & Business Visa
                  </Link>
                </li>
                <li>
                  <Link href="/overseas#assessment" className="hover:text-cyan-300 transition-colors font-semibold text-[#FF6B00]">
                    Free Profile Assessment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Top Destinations */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Destinations
              </h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/overseas#countries" className="hover:text-cyan-300 transition-colors">🇺🇸 United States</Link></li>
                <li><Link href="/overseas#countries" className="hover:text-cyan-300 transition-colors">🇬🇧 United Kingdom</Link></li>
                <li><Link href="/overseas#countries" className="hover:text-cyan-300 transition-colors">🇨🇦 Canada (Express Entry)</Link></li>
                <li><Link href="/overseas#countries" className="hover:text-cyan-300 transition-colors">🇦🇺 Australia (Subclass 500/PR)</Link></li>
                <li><Link href="/overseas#countries" className="hover:text-cyan-300 transition-colors">🇩🇪 Germany & Europe</Link></li>
                <li><Link href="/overseas#countries" className="hover:text-cyan-300 transition-colors">🇮🇪 Ireland</Link></li>
              </ul>
            </div>

            {/* Column 3: Why Us & Roadmap */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                About & Process
              </h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/overseas#why-us" className="hover:text-cyan-300 transition-colors">Why ZeneeAI Overseas</Link></li>
                <li><Link href="/overseas#how-it-works" className="hover:text-cyan-300 transition-colors">How It Works</Link></li>
                <li><Link href="/overseas#success-stories" className="hover:text-cyan-300 transition-colors">Client Success Stories</Link></li>
                <li><Link href="/about" className="hover:text-cyan-300 transition-colors">About ZeneeAI Group</Link></li>
                <li><Link href="/contact" className="hover:text-cyan-300 transition-colors">Corporate Office</Link></li>
              </ul>
            </div>

            {/* Column 4: Ecosystem Redirect */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                ZeneeAI Network
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/" className="flex items-center gap-1 hover:text-white text-slate-300 transition-colors">
                    <span>Main ZeneeAI Platform</span>
                    <ArrowUpRight className="w-3 h-3 text-[#FF6B00]" />
                  </Link>
                </li>
                <li>
                  <Link href="/products/zeneepay" className="hover:text-white transition-colors">
                    ZeneePay FinTech
                  </Link>
                </li>
                <li>
                  <Link href="/products/zeneeev" className="hover:text-white transition-colors">
                    ZeneeEV Mobility
                  </Link>
                </li>
                <li>
                  <Link href="/zeneeaipay/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Legal & Accreditation Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 ZeneeAI Overseas and Technologies Private Limited. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified Legal Processing
            </span>
            <Link href="/" className="text-cyan-300 hover:underline">
              zeneeai.com/overseas
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
