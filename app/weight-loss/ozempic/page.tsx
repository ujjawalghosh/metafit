import Navbar from '@/components/nav/Navbar';;
import Footer from '@/components/nav/Footer';
import OzempicSection from '@/components/weightLoss/product/OzempicSection';
import HowItWorks from '@/components/weightLoss/product/HowItWorks';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ozempic | MetaFit',
  description: 'Learn about Ozempic at MetaFit',
  alternates: {
    canonical: '/weight-loss/ozempic',
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