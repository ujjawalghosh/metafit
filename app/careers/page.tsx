import type { Metadata } from 'next';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';

export const metadata: Metadata = {
  title: "Careers | MetaFit",
  description: "Join MetaFit and help us make effective weight loss accessible to every Indian. View open positions and learn about our mission.",
  alternates: {
    canonical: '/careers',
  },
  openGraph: {
    title: "Careers | MetaFit",
    description: "Join MetaFit and help us make effective weight loss accessible to every Indian. View open positions and learn about our mission.",
    url: "/careers",
    type: "website",
    images: [
      {
        url: "/assets/og-default.png",
        width: 1200,
        height: 630,
        alt: "Careers at MetaFit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | MetaFit",
    description: "Join MetaFit and help us make effective weight loss accessible to every Indian. View open positions and learn about our mission.",
    images: ["/assets/og-default.png"],
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Careers at MetaFit</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Help us change the future of healthcare and weight management.
          </p>
        </div>

        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Our Mission</h2>
          <p>
            At MetaFit, we are dedicated to making high-quality, evidence-based weight loss treatments accessible to everyone who needs them. We believe in providing transparent, direct-to-patient care that empowers individuals to take control of their metabolic health.
          </p>
          <p>
            Our team is comprised of passionate individuals who share this vision. From our expert healthcare providers to our dedicated support staff and innovative technologists, everyone at MetaFit plays a crucial role in improving lives.
          </p>
        </section>

        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Why Join Us?</h2>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong className="text-black">Impactful Work:</strong> Contribute directly to improving people's health and well-being.</li>
            <li><strong className="text-black">Innovative Culture:</strong> Work in a fast-paced environment that embraces new ideas and approaches to healthcare.</li>
            <li><strong className="text-black">Collaborative Team:</strong> Join a group of supportive professionals who value teamwork and shared success.</li>
            <li><strong className="text-black">Growth Opportunities:</strong> Develop your skills and advance your career as we grow our platform.</li>
            <li><strong className="text-black">Competitive Benefits:</strong> We offer comprehensive benefits packages designed to support our team members.</li>
          </ul>
        </section>

        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Current Openings</h2>
          <p>
            We are always looking for talented individuals to join our team. Even if you don't see a specific role listed below, we encourage you to reach out if you're passionate about our mission.
          </p>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6">
            <h3 className="text-xl font-bold text-black mb-2">How to Apply</h3>
            <p className="mb-4">
              To apply for a position or express interest in joining our team, please send your resume and a cover letter explaining why you'd be a great fit to:
            </p>
            <p className="font-semibold text-lg text-black">
              <a href="mailto:careers@joinmeta.fit" className="text-blue-600 hover:underline">careers@joinmeta.fit</a>
            </p>
            <p className="text-sm text-gray-500 mt-4">
              We look forward to hearing from you!
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
