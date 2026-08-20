import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ZeneeAI | Technology. Intelligence. Innovation.',
  description:
    'ZeneeAI Overseas and Technologies Private Limited builds intelligent digital products and scalable technology solutions across AI, FinTech, mobility and enterprise technology.',
  metadataBase: new URL('https://zeneeai.com'),
  keywords: [
    'ZeneeAI',
    'ZeneeAI Overseas and Technologies Private Limited',
    'ZeneePay',
    'ZeneeEV',
    'AI Solutions',
    'FinTech Platform',
    'EV Charging Payments',
    'Enterprise Technology',
  ],
  authors: [{ name: 'ZeneeAI' }],
  openGraph: {
    title: 'ZeneeAI | Technology. Intelligence. Innovation.',
    description:
      'ZeneeAI Overseas and Technologies Private Limited builds intelligent digital products and scalable technology solutions across AI, FinTech, mobility and enterprise technology.',
    url: 'https://zeneeai.com',
    siteName: 'ZeneeAI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZeneeAI | Technology. Intelligence. Innovation.',
    description:
      'ZeneeAI Overseas and Technologies Private Limited builds intelligent digital products across AI, FinTech, mobility and enterprise technology.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#07080c',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ZeneeAI Overseas and Technologies Private Limited',
    alternateName: 'ZeneeAI',
    url: 'https://zeneeai.com',
    logo: 'https://zeneeai.com/images/logo/zeneeai-logo.png',
    email: 'founder@zeneeai.com',
    telephone: '+91 93926 16336',
    sameAs: ['https://zeneeai.com'],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-[#07080c] text-white selection:bg-[#FF6B00] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
