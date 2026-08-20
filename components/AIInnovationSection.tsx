'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Workflow, BarChart3, Network, Sparkles, Cpu } from 'lucide-react';

const AI_CAPABILITIES = [
  {
    icon: Bot,
    title: 'AI & Automation',
    desc: 'Deploying autonomous agents and machine intelligence to remove operational manual overhead.',
  },
  {
    icon: Workflow,
    title: 'Intelligent Workflows',
    desc: 'Connecting dynamic business logic with real-time decision algorithms and adaptive routing.',
  },
  {
    icon: BarChart3,
    title: 'Data & Decision Intelligence',
    desc: 'Transforming telemetry streams into actionable predictive insights for enterprise scaling.',
  },
  {
    icon: Network,
    title: 'Enterprise AI Integration',
    desc: 'Seamlessly embedding custom AI models directly into existing secure legacy software infrastructure.',
  },
];

export const AIInnovationSection: React.FC = () => {
  return (
    <section id="ai" className="relative py-28 bg-[#090B12] overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF6B00]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Category Eyebrow */}
        <div className="mb-4 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-[#FF6B00]" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
            03 / AI & INNOVATION
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and 4 Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Intelligence built into <br />
                <span className="text-[#FF6B00]">innovation.</span>
              </h2>
              <p className="text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                We explore AI and emerging technologies to create smarter products, automate complex workflows and help businesses operate more intelligently.
              </p>
            </div>

            {/* 4 Capability Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {AI_CAPABILITIES.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-[#0E111A]/80 border border-white/10 hover:border-[#FF6B00]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,107,0,0.15)] group"
                  >
                    <div className="p-3 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00] w-fit mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1.5">{cap.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{cap.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Abstract Neural Topology SVG Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-panel rounded-3xl p-8 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col items-center justify-center min-h-[420px]">
              
              {/* Neural Mesh SVG */}
              <svg viewBox="0 0 400 400" className="w-full h-full text-[#FF6B00] opacity-85">
                <defs>
                  <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FF9E43" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Connecting Web Lines */}
                <path d="M 100,100 L 200,60 L 300,100 L 340,200 L 300,300 L 200,340 L 100,300 L 60,200 Z" fill="none" stroke="rgba(255,107,0,0.2)" strokeWidth="1.5" />
                <path d="M 200,60 L 200,340 M 60,200 L 340,200 M 100,100 L 300,300 M 100,300 L 300,100" fill="none" stroke="url(#aiGrad)" strokeWidth="1" strokeDasharray="4 4" />
                
                {/* Central AI Hub Node */}
                <circle cx="200" cy="200" r="32" fill="#07080C" stroke="#FF6B00" strokeWidth="3" />
                <circle cx="200" cy="200" r="16" fill="#FF6B00" className="animate-pulse" />

                {/* Outer Orbit Nodes */}
                <circle cx="200" cy="60" r="8" fill="#FF8533" />
                <circle cx="300" cy="100" r="10" fill="#FF6B00" />
                <circle cx="340" cy="200" r="8" fill="#FF9E43" />
                <circle cx="300" cy="300" r="10" fill="#FF6B00" />
                <circle cx="200" cy="340" r="8" fill="#FF8533" />
                <circle cx="100" cy="300" r="10" fill="#FF6B00" />
                <circle cx="60" cy="200" r="8" fill="#FF9E43" />
                <circle cx="100" cy="100" r="10" fill="#FF6B00" />
              </svg>

              <div className="absolute bottom-6 text-center">
                <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                  INTELLIGENCE MATRIX ARCHITECTURE
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
