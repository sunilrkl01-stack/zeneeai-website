'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { OverseasLogo } from './OverseasLogo';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';

const OVERSEAS_NAV_LINKS = [
  { name: 'Home', href: '/overseas' },
  { name: 'Visa Services', href: '/overseas#services' },
  { name: 'Countries', href: '/overseas#countries' },
  { name: 'Why Us', href: '/overseas#why-us' },
  { name: 'Success Stories', href: '/overseas#success-stories' },
];

export const OverseasNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hi ZeneeAI Overseas! I would like to inquire about visa processing services."
  );
  const whatsappUrl = `https://wa.me/919392616336?text=${whatsappMessage}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#060812]/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.8)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo — Prominent & Large */}
          <Link href="/overseas" className="flex items-center shrink-0 py-1">
            <OverseasLogo size="lg" />
          </Link>

          {/* Desktop Navigation — All links highlighted as glowing pills */}
          <nav className="hidden lg:flex items-center space-x-1.5 bg-[#0A0E1F]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/30 shadow-inner">
            {OVERSEAS_NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/25 border border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                      : 'text-slate-200 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/25 hover:text-cyan-300 hover:border-cyan-400/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons (WhatsApp & Assessment) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* WhatsApp Link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs font-bold whitespace-nowrap hover:bg-emerald-500/20 hover:border-emerald-400 transition-all duration-200 shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>WhatsApp Counselor</span>
            </a>

            {/* Free Assessment Button */}
            <Link
              href="/overseas#assessment"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#FF6B00] via-[#FF8533] to-[#F59E0B] text-white text-xs font-extrabold whitespace-nowrap shadow-[0_0_20px_rgba(255,107,0,0.4)] hover:shadow-[0_0_30px_rgba(255,107,0,0.7)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Free Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 md:hidden"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF6B00]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#060812]/98 backdrop-blur-2xl border-b border-cyan-500/20 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2.5">
              {OVERSEAS_NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-full text-sm font-bold text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 whitespace-nowrap hover:bg-cyan-500/30 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <Link
                  href="/overseas#assessment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white text-sm font-extrabold whitespace-nowrap shadow-[0_0_20px_rgba(255,107,0,0.5)]"
                >
                  <span>Free Profile Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-bold whitespace-nowrap"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>WhatsApp Senior Advisor</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
