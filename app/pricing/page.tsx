import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';
import PricingSection from '@/components/pricing/PricingSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | MetaFit',
  description: 'MetaFit Pricing Plans',
  alternates: {
    canonical: '/pricing',
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