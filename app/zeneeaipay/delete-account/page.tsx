import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Trash2, ShieldAlert, Smartphone, Mail, AlertTriangle, CheckCircle2, Clock, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Account Deletion & Data Removal | ZeneePay - ZeneeAI',
  description:
    'Request account deletion and personal data removal for ZeneePay. Learn about the step-by-step in-app deletion process, web request options, and data retention policies.',
  alternates: {
    canonical: 'https://zeneeai.com/zeneeaipay/delete-account',
  },
  openGraph: {
    title: 'ZeneePay Account Deletion & Data Removal | ZeneeAI',
    description:
      'Official page to request ZeneePay account and personal data deletion under Google Play policies.',
    url: 'https://zeneeai.com/zeneeaipay/delete-account',
    siteName: 'ZeneeAI',
    type: 'website',
  },
};

export default function ZeneePayDeleteAccountPage() {
  return (
    <div className="min-h-screen bg-[#07080c] text-white">
      <Navbar />

      <main className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="space-y-4 pb-10 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold uppercase tracking-wider">
            <Trash2 className="w-4 h-4" />
            User Data & Account Management
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            ZeneePay Account Deletion & Data Removal
          </h1>
          <p className="text-slate-300 text-base leading-relaxed max-w-3xl pt-2">
            In accordance with Google Play Developer Policies and applicable privacy regulations, <strong className="text-white">ZeneeAI Overseas and Technologies Private Limited</strong> provides ZeneePay users with full control to delete their account and associated personal data.
          </p>
        </div>

        {/* Action Cards: Option 1 (In-App) vs Option 2 (Web/Email) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          
          {/* Method 1: In-App Deletion */}
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-[#FF6B00]/20 text-[#FF6B00] w-fit">
                <Smartphone className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold text-white">Option 1: Delete via ZeneePay App</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                If you currently have the ZeneePay app installed on your smartphone, you can trigger an instant account deletion request directly from your profile settings.
              </p>
              
              <div className="space-y-3 pt-2 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] text-xs font-bold shrink-0">1</span>
                  <span>Open the <strong className="text-white">ZeneePay</strong> app on your device.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] text-xs font-bold shrink-0">2</span>
                  <span>Tap on your <strong className="text-white">Profile / Account</strong> icon in the top header.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] text-xs font-bold shrink-0">3</span>
                  <span>Select <strong className="text-white">Settings &amp; Security</strong> &gt; <strong className="text-white">Delete Account</strong>.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] text-xs font-bold shrink-0">4</span>
                  <span>Authenticate via OTP and confirm account deletion.</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Recommended method for active ZeneePay app users.</span>
            </div>
          </div>

          {/* Method 2: Web / Email Request */}
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-[#FF6B00]/20 text-[#FF6B00] w-fit">
                <Mail className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold text-white">Option 2: Submit Web / Email Request</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                If you have uninstalled the app, lost access to your device, or prefer submitting an online request, you can send an account deletion request via email.
              </p>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 text-xs text-slate-300">
                <p className="font-bold text-white">Required Details for Verification:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  <li>Registered Mobile Number (linked to ZeneePay)</li>
                  <li>Registered Email Address</li>
                  <li>Subject line: <strong className="text-white">&quot;ZeneePay Account Deletion Request&quot;</strong></li>
                </ul>
              </div>
            </div>

            <div>
              <a
                href="mailto:founder@zeneeai.com?subject=ZeneePay%20Account%20Deletion%20Request&body=Hello%20ZeneeAI%20Support%20Team%2C%0A%0AI%20would%20like%20to%20request%20the%20permanent%20deletion%20of%20my%20ZeneePay%20account%20and%20associated%20personal%20data.%0A%0ARegistered%20Mobile%20Number%3A%20%0ARegistered%20Email%20Address%3A%20%0AReason%20(Optional)%3A%20%0A%0AThank%20you."
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#FF8533] text-white font-semibold text-sm transition-colors shadow-[0_0_20px_rgba(255,107,0,0.3)]"
              >
                <Mail className="w-4 h-4" />
                <span>Submit Deletion Request via Email</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Detailed Breakdown Section: What Data is Deleted vs Retained */}
        <div className="space-y-10 text-slate-300 leading-relaxed pt-6">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-[#FF6B00]" />
              Data Processing & Retention Policy
            </h2>
            <p className="text-sm">
              Upon receiving a valid account deletion request, ZeneeAI processes the request systematically to erase personal identifiers while satisfying statutory financial recordkeeping mandates:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* What gets deleted */}
              <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-3">
                <h3 className="font-bold text-rose-400 text-base flex items-center gap-2">
                  <Trash2 className="w-5 h-5" /> Data Permanently Erased
                </h3>
                <ul className="text-xs text-slate-300 list-disc list-inside space-y-2">
                  <li>Personal profile identifiers (Name, Email, Address, Profile photos).</li>
                  <li>Linked device tokens, push notification keys, and biometric security hashes.</li>
                  <li>Saved app preferences, saved biller templates, and custom category tags.</li>
                  <li>Account authentication credentials and active login session tokens.</li>
                </ul>
              </div>

              {/* What is retained */}
              <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-3">
                <h3 className="font-bold text-amber-400 text-base flex items-center gap-2">
                  <FileText className="w-5 h-5" /> Data Retained for Legal Compliance
                </h3>
                <ul className="text-xs text-slate-300 list-disc list-inside space-y-2">
                  <li>Financial transaction history, payment invoices, and wallet settlement logs (retained as mandated under applicable financial and tax laws).</li>
                  <li>KYC verification audit records (retained for statutory periods prescribed under Anti-Money Laundering regulatory rules).</li>
                  <li>Fraud investigation logs and law enforcement request audit histories.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Deletion Timeline */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <h3 className="font-bold text-white text-lg flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-[#FF6B00]" /> Request Processing Timeline
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-[#FF8533] font-bold font-mono">Step 1: Submission</span>
                <p className="text-slate-400">Request received in-app or via email acknowledgement within 24-48 hours.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-[#FF8533] font-bold font-mono">Step 2: Verification</span>
                <p className="text-slate-400">Ownership identity checked to prevent unauthorized malicious account deletion.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-[#FF8533] font-bold font-mono">Step 3: Execution</span>
                <p className="text-slate-400">Full data wipe completed within 30 calendar days with written confirmation.</p>
              </div>
            </div>
          </div>

          {/* Need help banner */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold">Have questions or need assistance with your data?</p>
              <p>You can read our full <Link href="/zeneeaipay/privacy-policy" className="text-[#FF8533] hover:underline">Privacy Policy</Link> or contact support.</p>
            </div>
            <a
              href="mailto:founder@zeneeai.com"
              className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium whitespace-nowrap transition-colors"
            >
              Contact Support
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
