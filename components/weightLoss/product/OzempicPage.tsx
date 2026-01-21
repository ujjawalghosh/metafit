import Navbar from '@/components/nav/Navbar';
import Hero from '@/components/home/Hero';
import CategoryTiles from '@/components/home/CategoryTiles';
import ProductCarousel from '@/components/home/ProductCarousel';
import Experts from '@/components/home/Experts';
import Footer from '@/components/nav/Footer';
import ProductExample from '@/components/home/ProductExample';
import ValueProps from '@/components/home/ValueProps';
import Testimonials from '@/components/home/Testimonials';
import OzempicSection from '@/components/weightLoss/product/OzempicSection';
import HowItWorks from '@/components/weightLoss/product/HowItWorks';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />
      <Hero />
      <CategoryTiles />
      <ProductExample />
      {/* Weight Loss Carousel */}
      <ProductCarousel />
      <ValueProps />

      <Experts />
      
      <Testimonials />
      <OzempicSection />
      <HowItWorks />

      <Footer />
    </main>
  );
}