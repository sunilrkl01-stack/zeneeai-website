import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ShieldCheck, Lock, Eye, FileText, UserCheck, RefreshCw, Mail, Smartphone, Database, Server } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | ZeneePay - ZeneeAI',
  description:
    'Official Privacy Policy for ZeneePay by ZeneeAI Overseas and Technologies Private Limited. Learn how we collect, use, protect, and manage your data.',
  alternates: {
    canonical: 'https://zeneeai.com/zeneeaipay/privacy-policy',
  },
  openGraph: {
    title: 'ZeneePay Privacy Policy | ZeneeAI',
    description:
      'Official Privacy Policy for ZeneePay. Transparent data collection, security practices, and user privacy rights.',
    url: 'https://zeneeai.com/zeneeaipay/privacy-policy',
    siteName: 'ZeneeAI',
    type: 'website',
  },
};

export default function ZeneePayPrivacyPolicyPage() {
  const lastUpdated = 'September 4, 2026';

  return (
    <div className="min-h-screen bg-[#07080c] text-white">
      <Navbar />

      <main className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="space-y-4 pb-10 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Legal & Privacy Compliance
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            ZeneePay Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm font-mono">
            Effective Date & Last Updated: <span className="text-[#FF8533]">{lastUpdated}</span>
          </p>
          <p className="text-slate-300 text-base leading-relaxed max-w-3xl pt-2">
            This Privacy Policy outlines how <strong className="text-white">ZeneeAI Overseas and Technologies Private Limited</strong> (&quot;ZeneeAI&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, protects, and discloses personal information when you use our digital payment, mobile recharge, bill payment, and EV charging application <strong className="text-white">ZeneePay</strong> (&quot;Application&quot; or &quot;Services&quot;).
          </p>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <Lock className="w-6 h-6 text-[#FF6B00]" />
            <h3 className="font-bold text-white text-base">Bank-Grade Encryption</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              All transactions and sensitive payload data are transmitted over TLS 1.3 encryption and stored using AES-256 standards.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <Eye className="w-6 h-6 text-[#FF6B00]" />
            <h3 className="font-bold text-white text-base">Zero Data Selling</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We never sell your personal identification, contact information, or financial activity to third-party data brokers or advertisers.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <UserCheck className="w-6 h-6 text-[#FF6B00]" />
            <h3 className="font-bold text-white text-base">Full Data Control</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              You maintain the right to review, update, or request permanent deletion of your account and personal data at any time.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12 text-slate-300 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] text-sm font-mono font-bold">1</span>
              Information We Collect
            </h2>
            <p>
              To provide secure digital payment services, mobile top-ups, utility bill payments, and EV charging transactions, we collect the following categories of information:
            </p>
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#FF6B00]" /> Personal & Contact Identification
                </h4>
                <p className="text-xs text-slate-400">
                  Full name, mobile phone number, email address, date of birth, and identity documentation required for regulatory Know-Your-Customer (KYC) verification where applicable.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#FF6B00]" /> Financial & Transaction Data
                </h4>
                <p className="text-xs text-slate-400">
                  Transaction details, payment references, wallet balance logs, bill consumer account IDs, mobile operator details, recharge amounts, and payment method tokens (processed via PCI-DSS compliant banking partners).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#FF6B00]" /> Device & Network Telemetry
                </h4>
                <p className="text-xs text-slate-400">
                  Unique device identifiers (IMEI, Android ID), operating system version, IP address, device brand/model, network operator, app crash logs, and security diagnostics to prevent unauthorized access and fraud.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#FF6B00]" /> Device Permissions
                </h4>
                <ul className="text-xs text-slate-400 list-disc list-inside space-y-1 pl-1">
                  <li><strong>Camera:</strong> Optional permission requested solely to scan merchant QR codes or scan bills.</li>
                  <li><strong>Location:</strong> Optional permission requested to discover nearby EV charging stations and localized merchant offers.</li>
                  <li><strong>SMS / Contacts:</strong> Used strictly for secure One-Time Password (OTP) verification and facilitating peer-to-peer recharges/transfers upon user consent.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] text-sm font-mono font-bold">2</span>
              How We Use Your Information
            </h2>
            <p>We process your data strictly for legitimate operational, security, and compliance purposes:</p>
            <ul className="list-disc list-inside text-sm space-y-2 text-slate-400 pl-2">
              <li>Processing digital payments, bill settlements, mobile recharges, and EV charging transactions.</li>
              <li>Verifying user identity, maintaining account security, and sending operational notifications or transaction receipts.</li>
              <li>Detecting, preventing, and investigating fraudulent, suspicious, or illegal financial activities.</li>
              <li>Complying with applicable statutory guidelines, banking standards, Reserve Bank of India (RBI) regulations, and tax requirements.</li>
              <li>Providing dedicated customer support and resolving transaction disputes.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] text-sm font-mono font-bold">3</span>
              Data Sharing & Third Parties
            </h2>
            <p>
              We do not sell, rent, or trade your personal data. We share relevant data only with authorized entity partners essential for fulfilling Services:
            </p>
            <ul className="list-disc list-inside text-sm space-y-2 text-slate-400 pl-2">
              <li><strong className="text-white">Banking & Payment Partners:</strong> Regulated payment gateways, NPCI/UPI partners, and settlement banks required to execute transactions securely.</li>
              <li><strong className="text-white">Biller & Operator Networks:</strong> Telecom operators, electricity boards, water boards, and EV charging infrastructure partners to process requested utility billings.</li>
              <li><strong className="text-white">Legal & Regulatory Authorities:</strong> Government agencies or law enforcement entities when mandated under legal obligations, court orders, or statutory compliance.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] text-sm font-mono font-bold">4</span>
              Data Security & Retention
            </h2>
            <p className="text-sm">
              We implement industry-standard physical, technical, and administrative safeguards to protect your personal information against loss, unauthorized access, disclosure, or alteration.
            </p>
            <p className="text-sm text-slate-400">
              <strong className="text-white">Retention Period:</strong> We retain personal data as long as your ZeneePay account remains active. Upon account closure or deletion, personal profile identifiers are removed or anonymized within 30 days, except where transaction logs must be retained for statutory audit or legal compliance periods mandated by financial regulations.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] text-sm font-mono font-bold">5</span>
              Account Deletion & Data Rights
            </h2>
            <p className="text-sm">
              You have the right to access, correct, or request the complete deletion of your ZeneePay account and associated personal data.
            </p>
            <div className="p-5 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 space-y-3">
              <h4 className="font-bold text-white text-base flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-[#FF6B00]" /> Request Account & Data Deletion
              </h4>
              <p className="text-xs text-slate-300">
                You can delete your account directly through the ZeneePay app under <strong className="text-white">Settings &gt; Account Security &gt; Delete Account</strong>, or submit an online request through our dedicated deletion page:
              </p>
              <div className="pt-1">
                <Link
                  href="/zeneeaipay/delete-account"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF6B00] hover:bg-[#FF8533] text-white font-semibold text-xs transition-colors"
                >
                  Visit ZeneePay Account Deletion Page &rarr;
                </Link>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] text-sm font-mono font-bold">6</span>
              Changes to This Policy
            </h2>
            <p className="text-sm text-slate-400">
              We may update this Privacy Policy periodically to reflect service enhancements or statutory regulatory updates. Any changes will be published directly on this page with an updated effective date. We encourage users to review this policy periodically.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 pt-4 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] text-sm font-mono font-bold">7</span>
              Contact Us & Data Grievance
            </h2>
            <p className="text-sm text-slate-400">
              If you have any questions, concerns, or grievances regarding this Privacy Policy or our data practices, please contact our Data Protection Officer:
            </p>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-sm space-y-2">
              <p className="font-bold text-white">ZeneeAI Overseas and Technologies Private Limited</p>
              <p className="text-slate-400 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF6B00]" /> Email:{' '}
                <a href="mailto:founder@zeneeai.com" className="text-[#FF8533] hover:underline">
                  founder@zeneeai.com
                </a>
              </p>
              <p className="text-slate-400 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#FF6B00]" /> Phone: +91 93926 16336
              </p>
              <p className="text-slate-400 pt-2 text-xs">
                Official Website: <a href="https://zeneeai.com" className="text-white hover:underline">https://zeneeai.com</a>
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
