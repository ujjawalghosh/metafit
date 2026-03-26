import type { Metadata } from 'next';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';

export const metadata: Metadata = {
  title: "Founder's Letter | MetaFit",
  description: "A message from the founders of MetaFit about our mission to make science-backed weight loss accessible and effective for every Indian.",
  alternates: {
    canonical: '/founders-letter',
  },
  openGraph: {
    title: "Founder's Letter | MetaFit",
    description: "A message from the founders of MetaFit about our mission to make science-backed weight loss accessible and effective for every Indian.",
    url: "/founders-letter",
    type: "article",
    images: [
      {
        url: "/assets/og-default.png",
        width: 1200,
        height: 630,
        alt: "Founder's Letter – MetaFit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder's Letter | MetaFit",
    description: "A message from the founders of MetaFit about our mission to make science-backed weight loss accessible and effective for every Indian.",
    images: ["/assets/og-default.png"],
  },
};

export default function FoundersLetterPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Founder's Letter</h1>
        </div>

        <article className="mx-auto text-gray-700 leading-relaxed space-y-4">
          <p>
            Welcome to MetaFit. We started this journey with a simple but powerful belief: everyone deserves access to effective, science-backed weight loss solutions without the complexities and barriers of traditional healthcare systems.
          </p>

          <p>
            For too long, the path to achieving a healthy weight has been fraught with misinformation, unsustainable fad diets, and a healthcare system that often treats weight management as an afterthought rather than a core component of overall well-being. We saw firsthand how difficult it was for people to access the most effective treatments available today.
          </p>

          <p>
            That's why we built MetaFit. We envisioned a platform that connects you directly with expert medical professionals who understand the complexities of metabolic health. By cutting out the middleman and bypassing the typical insurance hurdles, we're able to offer high-quality, transparently priced care that puts you first.
          </p>

          <p>
            Our approach isn't just about medication; it's about comprehensive support. We believe in empowering our members with the knowledge, tools, and personalized guidance necessary to make lasting changes. We're here to be your partner in this journey, providing a safe, judgment-free space where you can achieve your goals.
          </p>

          <p>
            We are incredibly proud of the community we are building and the lives we are helping to change. Your success is our success, and we are committed to continually innovating and improving our services to provide you with the best possible care.
          </p>

          <p>
            Thank you for trusting MetaFit with your health. We look forward to supporting you every step of the way.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="font-bold text-black text-xl">The MetaFit Founders</p>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
