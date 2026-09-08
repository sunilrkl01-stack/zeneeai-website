'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Send,
  User,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Globe,
  FileCheck2,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';

interface FormData {
  name: string;
  mobile: string;
  email: string;
  currentCity: string;
  serviceRequired: string;
  preferredCountry: string;
  highestEducation: string;
  workExperience: string;
  consent: boolean;
}

export const ProfileAssessmentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    currentCity: '',
    serviceRequired: 'Student Study Visa',
    preferredCountry: 'USA',
    highestEducation: 'Bachelor\'s Degree',
    workExperience: '1-3 Years',
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your Full Name');
      return;
    }
    if (!formData.mobile.trim() || formData.mobile.length < 8) {
      setErrorMsg('Please enter a valid Mobile / WhatsApp Number');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid Email Address');
      return;
    }
    if (!formData.currentCity.trim()) {
      setErrorMsg('Please enter your Current City');
      return;
    }
    if (!formData.consent) {
      setErrorMsg('Please accept the consent checkbox to receive your assessment');
      return;
    }

    setIsSubmitting(true);

    // Simulate instant AI profile evaluation response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  // Generate customized WhatsApp query link with prefilled form details
  const whatsappQueryText = encodeURIComponent(
    `Hi ZeneeAI Overseas! I have submitted my Free Profile Assessment:\n` +
      `• Name: ${formData.name}\n` +
      `• Service: ${formData.serviceRequired}\n` +
      `• Destination: ${formData.preferredCountry}\n` +
      `• City: ${formData.currentCity}\n` +
      `• Education: ${formData.highestEducation}\n` +
      `• Work Exp: ${formData.workExperience}\n` +
      `Please provide my detailed visa consultation & roadmap.`
  );
  const whatsappUrl = `https://wa.me/918309765978?text=${whatsappQueryText}`;

  return (
    <section id="assessment" className="relative py-24 bg-[#050711] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#FF6B00]/15 via-[#3B82F6]/15 to-emerald-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FF6B00]/20 to-amber-500/20 border border-[#FF6B00]/40 text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-POWERED EVALUATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Free Profile Assessment & <span className="text-[#FF6B00]">Visa Score.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Fill out your background details below for an instant preliminary visa eligibility calculation and 1-on-1 advisor strategy call.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {errorMsg && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold">
                    ⚠️ {errorMsg}
                  </div>
                )}

                {/* 2-Column Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#FF6B00]" /> Full Name <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#090E22] border border-white/10 text-white text-sm focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] focus:outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>

                  {/* Mobile */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-400" /> Mobile / WhatsApp No. <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#090E22] border border-white/10 text-white text-sm focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] focus:outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" /> Email Address <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#090E22] border border-white/10 text-white text-sm focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] focus:outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>

                  {/* Current City */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" /> Current City <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="text"
                      name="currentCity"
                      value={formData.currentCity}
                      onChange={handleChange}
                      placeholder="e.g. Hyderabad, Mumbai, Bangalore"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#090E22] border border-white/10 text-white text-sm focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] focus:outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>

                  {/* Service Required */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                      <FileCheck2 className="w-3.5 h-3.5 text-[#FF6B00]" /> Service Required <span className="text-[#FF6B00]">*</span>
                    </label>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#090E22] border border-white/10 text-white text-sm focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] focus:outline-none transition-all"
                    >
                      <option value="Student Study Visa">Student Study Visa (Bachelors/Masters)</option>
                      <option value="Visit & Tourist Visa">Visit & Tourist Visa (Family/B1/B2/Schengen)</option>
                      <option value="Permanent Residency (PR)">Permanent Residency (Express Entry / PNP / PR)</option>
                      <option value="Work & Business Visa">Work & Business Visa (Intra-Company / Job Permit)</option>
                    </select>
                  </div>

                  {/* Preferred Country */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-cyan-400" /> Preferred Country <span className="text-[#FF6B00]">*</span>
                    </label>
                    <select
                      name="preferredCountry"
                      value={formData.preferredCountry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#090E22] border border-white/10 text-white text-sm focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] focus:outline-none transition-all"
                    >
                      <option value="USA">🇺🇸 United States</option>
                      <option value="UK">🇬🇧 United Kingdom</option>
                      <option value="Canada">🇨🇦 Canada</option>
                      <option value="Australia">🇦🇺 Australia</option>
                      <option value="Germany / Europe">🇩🇪 Germany & Europe</option>
                      <option value="Ireland">🇮🇪 Ireland</option>
                      <option value="UAE / Dubai">🇦🇪 UAE / Dubai</option>
                      <option value="Other">🌍 Other Destination</option>
                    </select>
                  </div>

                  {/* Highest Education */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-emerald-400" /> Highest Education Level <span className="text-[#FF6B00]">*</span>
                    </label>
                    <select
                      name="highestEducation"
                      value={formData.highestEducation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#090E22] border border-white/10 text-white text-sm focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] focus:outline-none transition-all"
                    >
                      <option value="High School / 12th">High School / 12th Standard</option>
                      <option value="Diploma / Vocational">Diploma / Polytechnic</option>
                      <option value="Bachelor's Degree">Bachelor's Degree (B.Tech / B.E / B.Sc / B.Com)</option>
                      <option value="Master's Degree">Master's Degree (M.Tech / MBA / M.Sc)</option>
                      <option value="Doctorate / Ph.D.">Doctorate / Ph.D.</option>
                    </select>
                  </div>

                  {/* Work Experience */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-amber-400" /> Work Experience <span className="text-[#FF6B00]">*</span>
                    </label>
                    <select
                      name="workExperience"
                      value={formData.workExperience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#090E22] border border-white/10 text-white text-sm focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] focus:outline-none transition-all"
                    >
                      <option value="Fresh Graduate / Student">Fresh Graduate / Student (0 Years)</option>
                      <option value="1-3 Years">1 to 3 Years</option>
                      <option value="3-5 Years">3 to 5 Years</option>
                      <option value="5+ Years">5+ Years Professional Experience</option>
                    </select>
                  </div>

                </div>

                {/* Mandatory Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mt-1 w-4 h-4 rounded border-white/20 bg-[#090E22] text-[#FF6B00] focus:ring-[#FF6B00] cursor-pointer"
                    />
                    <span className="text-xs text-slate-300 group-hover:text-white transition-colors leading-relaxed">
                      I agree to receive personalized visa eligibility reports, counselor calls, and updates from ZeneeAI Overseas advisors. (Zero spam policy).
                    </span>
                  </label>
                </div>

                {/* Submit Action Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF6B00] via-[#FF8533] to-[#F59E0B] text-white font-extrabold text-base shadow-[0_0_30px_rgba(255,107,0,0.5)] hover:shadow-[0_0_50px_rgba(255,107,0,0.8)] transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        <span>Evaluating Profile Eligibility...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Get Free AI Profile Assessment</span>
                      </>
                    )}
                  </button>
                </div>

              </motion.form>
            ) : (
              /* Success State Display Card */
              <motion.div
                key="submitted"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8 animate-bounce" />
                </div>

                <div>
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                    PRELIMINARY ELIGIBILITY GENERATED
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-lg mx-auto mt-2">
                    Your profile for <strong className="text-cyan-300">{formData.serviceRequired}</strong> ({formData.preferredCountry}) has been evaluated.
                  </p>
                </div>

                {/* Profile Match Score Breakdown Card */}
                <div className="p-6 rounded-2xl bg-[#090E24] border border-cyan-500/30 max-w-md mx-auto space-y-4 text-left">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs font-bold uppercase text-slate-400">Estimated Profile Match Score</span>
                    <span className="text-xl font-extrabold text-emerald-400 font-mono">94% HIGH</span>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Target Country:</span>
                      <span className="font-bold text-white">{formData.preferredCountry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Service Category:</span>
                      <span className="font-bold text-white">{formData.serviceRequired}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Contact Number:</span>
                      <span className="font-bold text-white">{formData.mobile}</span>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Action CTA */}
                <div className="pt-2 max-w-md mx-auto space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all"
                  >
                    <PhoneCall className="w-5 h-5" />
                    <span>Connect Live on WhatsApp Now</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-400 hover:text-white underline block mx-auto"
                  >
                    Submit Another Profile Assessment
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
