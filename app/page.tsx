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
  title: 'MetaFit | Medical Weight Loss in India',
  description:
    'MetaFit offers doctor-prescribed GLP-1 weight loss programs — personalized, affordable, and backed by clinical science. Start your journey today.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MetaFit | Medical Weight Loss in India',
    description:
      'Doctor-prescribed GLP-1 programs personalized for the Indian body. Affordable, science-backed weight loss without insurance hassles.',
    url: '/',
    type: 'website',
    images: [
      {
        url: '/assets/og-default.png',
        width: 1200,
        height: 630,
        alt: 'MetaFit — Medical Weight Loss in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetaFit | Medical Weight Loss in India',
    description:
      'Doctor-prescribed GLP-1 programs personalized for the Indian body. Affordable, science-backed weight loss without insurance hassles.',
    images: ['/assets/og-default.png'],
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