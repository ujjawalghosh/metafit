import Navbar from '@/components/nav/Navbar';
import Hero from '@/components/home/Hero';
import Experts from '@/components/home/Experts';
import Footer from '@/components/nav/Footer';
import ProductExample from '@/components/home/ProductExample';
import ValueProps from '@/components/home/ValueProps';
import Testimonials from '@/components/home/Testimonials';
import MemberShipIncluded from '@/components/home/MemberShipIncluded';
import { Metadata } from 'next';
import FeaturesSection from '@/components/about/MetaFitInfoSection';

export const metadata: Metadata = {
  title: 'MetaFit | Weight loss',
  description: 'MetaFit is a direct-to-patient healthcare company providing high-quality, affordable healthcare without the need for insurance.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />
      <Hero />
      {/* 1. How It Works Target */}
      <section id="how-it-works">
        <FeaturesSection />
      </section>
      <ProductExample />

      <MemberShipIncluded />
      
      <ValueProps />

      {/* 2. Doctors Target */}
      <section id="doctors">
        <Experts />
      </section>
      
      {/* 3. Testimonials Target */}
      <section id="testimonials">
        <Testimonials />
      </section>

      <Footer />
    </main>
  );
}