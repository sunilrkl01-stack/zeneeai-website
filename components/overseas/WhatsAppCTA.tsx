'use client';

import React from 'react';
import { PhoneCall, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

export const WhatsAppCTA: React.FC = () => {
  const whatsappMessage = encodeURIComponent(
    "Hi ZeneeAI Overseas! I would like an instant profile evaluation for visa processing (Study / Visit / PR)."
  );
  const whatsappUrl = `https://wa.me/919392616336?text=${whatsappMessage}`;

  return (
    <>
      {/* Floating Bottom Right WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:shadow-[0_0_45px_rgba(16,185,129,0.9)] transition-all duration-300 transform hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative">
            <PhoneCall className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping" />
          </div>
          <span className="hidden sm:inline-block">Talk to Visa Advisor</span>
        </a>
      </div>

      {/* Full-width Section CTA Banner */}
      <section className="relative py-20 bg-gradient-to-r from-[#080D21] via-[#0D1533] to-[#080D21] border-t border-cyan-500/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#090F29]/80 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl shadow-2xl">
            
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>INSTANT 1-ON-1 COUNSELING</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Have Urgent Visa Questions? <br className="hidden sm:inline" />
                <span className="text-[#FF6B00]">Chat Live with Senior Counselor</span>
              </h2>

              <p className="text-sm text-slate-300 max-w-xl">
                Get immediate guidance on intake deadlines, university shortlists, document checklists, and embassy appointment availability directly on WhatsApp.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Start WhatsApp Chat</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
