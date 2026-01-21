import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';
import PricingSection from '@/components/pricing/PricingSection';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PricingSection />
      <Footer />
    </main>
  );
}