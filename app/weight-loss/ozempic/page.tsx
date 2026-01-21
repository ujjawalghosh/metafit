import Navbar from '@/components/nav/Navbar';;
import Footer from '@/components/nav/Footer';
import OzempicSection from '@/components/weightLoss/product/OzempicSection';
import HowItWorks from '@/components/weightLoss/product/HowItWorks';

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