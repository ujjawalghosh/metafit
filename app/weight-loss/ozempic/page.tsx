import Navbar from '@/components/nav/Navbar';;
import Footer from '@/components/nav/Footer';
import OzempicSection from '@/components/weightLoss/product/OzempicSection';
import HowItWorks from '@/components/weightLoss/product/HowItWorks';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ozempic for Weight Loss in India | MetaFit',
  description:
    'Learn how Ozempic (semaglutide) works for weight loss in India, eligibility criteria, expected results, and how MetaFit doctors prescribe and monitor it.',
  alternates: {
    canonical: '/weight-loss/ozempic',
  },
  openGraph: {
    title: 'Ozempic for Weight Loss in India | MetaFit',
    description:
      'Learn how Ozempic (semaglutide) works for weight loss in India, eligibility criteria, expected results, and how MetaFit doctors prescribe and monitor it.',
    url: '/weight-loss/ozempic',
    type: 'website',
    images: [
      {
        url: '/assets/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Ozempic Weight Loss India – MetaFit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ozempic for Weight Loss in India | MetaFit',
    description:
      'Learn how Ozempic (semaglutide) works for weight loss in India, eligibility criteria, expected results, and how MetaFit doctors prescribe and monitor it.',
    images: ['/assets/og-default.png'],
  },
};

export default function OzempicPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />
      <OzempicSection />
      <HowItWorks />

      <Footer />
    </main>
  );
}