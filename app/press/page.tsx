import type { Metadata } from 'next';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';

export const metadata: Metadata = {
  title: "Press | MetaFit",
  description: "Press and media resources for MetaFit. Contact us for media inquiries.",
  alternates: {
    canonical: '/press',
  },
};

export default function PressPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Press & Media</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Resources and contact information for media professionals.
          </p>
        </div>

        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">About MetaFit</h2>
          <p>
            MetaFit is a healthcare company dedicated to making effective weight loss solutions accessible and affordable. We provide direct-to-patient care, bypassing traditional insurance hurdles to offer high-quality, science-backed treatments.
          </p>
          <p>
            Our mission is to empower individuals to achieve their metabolic health goals through personalized guidance, expert medical support, and transparent pricing. We believe in fundamentally changing how weight management is approached in healthcare.
          </p>
        </section>

        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Media Inquiries</h2>
          <p>
            For all press and media inquiries, including interview requests, statements, and additional resources, please contact our communications team.
          </p>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6 text-center md:text-left">
            <h3 className="text-xl font-bold text-black mb-2">Contact Information</h3>
            <p className="mb-4">
              Please direct all media-related correspondence to:
            </p>
            <p className="font-semibold text-lg text-black mb-2">
              <a href="mailto:press@joinmeta.fit" className="text-blue-600 hover:underline">press@joinmeta.fit</a>
            </p>
            <p className="text-sm text-gray-500">
              We aim to respond to all inquiries within 24-48 hours.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
