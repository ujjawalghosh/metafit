import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';
import PricingSection from '@/components/pricing/PricingSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MetaFit Pricing | Affordable GLP-1 Weight Loss Plans in India',
  description:
    'Transparent, affordable pricing for MetaFit\'s doctor-led GLP-1 weight loss programs. No hidden fees, no insurance required.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'MetaFit Pricing | Affordable GLP-1 Weight Loss Plans in India',
    description:
      'Transparent, affordable pricing for MetaFit\'s doctor-led GLP-1 weight loss programs. No hidden fees, no insurance required.',
    url: '/pricing',
    type: 'website',
    images: [
      {
        url: '/assets/og-default.png',
        width: 1200,
        height: 630,
        alt: 'MetaFit Pricing Plans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetaFit Pricing | Affordable GLP-1 Weight Loss Plans in India',
    description:
      'Transparent, affordable pricing for MetaFit\'s doctor-led GLP-1 weight loss programs. No hidden fees, no insurance required.',
    images: ['/assets/og-default.png'],
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PricingSection />
      <Footer />
    </main>
  );
}