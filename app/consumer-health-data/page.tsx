import type { Metadata } from 'next';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';

export const metadata: Metadata = {
  title: 'Consumer Health Data Privacy Policy | MetaFit',
  description: 'Learn how MetaFit collects, uses, and protects your fitness and health-related data under our Consumer Health Data Privacy Policy.',
  alternates: {
    canonical: '/consumer-health-data',
  },
  openGraph: {
    title: 'Consumer Health Data Privacy Policy | MetaFit',
    description: 'Learn how MetaFit collects, uses, and protects your fitness and health-related data under our Consumer Health Data Privacy Policy.',
    url: '/consumer-health-data',
    type: 'website',
    images: [
      {
        url: '/assets/og-default.png',
        width: 1200,
        height: 630,
        alt: 'MetaFit Consumer Health Data Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consumer Health Data Privacy Policy | MetaFit',
    description: 'Learn how MetaFit collects, uses, and protects your fitness and health-related data under our Consumer Health Data Privacy Policy.',
    images: ['/assets/og-default.png'],
  },
};

export default function ConsumerHealthPrivacyPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Consumer Health Data Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm">
            <span className="font-semibold text-gray-900">Last updated:</span> March 2026
          </p>
        </div>

        {/* Intro */}
        <section className="mb-12 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-black">Introduction</h2>
          <p>
            MetaFit (“we”, “our”, or “us”) is a fitness and wellness platform that helps users track workouts, improve health habits, and achieve fitness goals.
          </p>
          <p>
            This Consumer Health Data Privacy Policy explains how we collect, use, and protect health-related data when you use our website or mobile applications.
          </p>
          <p>
            By using MetaFit, you agree to the practices described in this policy.
          </p>
        </section>

        {/* Data Collection */}
        <section className="mb-12 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-black">Health Data We Collect</h2>

          <p>We may collect the following types of health-related data:</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Weight, height, BMI, and fitness goals</li>
            <li>Workout activity and progress tracking</li>
            <li>Dietary preferences and lifestyle inputs</li>
            <li>User-provided fitness or health information</li>
          </ul>

          <p>
            We only collect data that is necessary to provide and improve our Services.
          </p>
        </section>

        {/* Usage */}
        <section className="mb-12 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-black">How We Use Health Data</h2>

          <ul className="list-disc pl-5 space-y-2">
            <li>To provide personalized fitness recommendations</li>
            <li>To track your progress and improve user experience</li>
            <li>To improve our platform features</li>
            <li>To communicate updates and insights</li>
          </ul>

          <p className="font-semibold">
            We do NOT use your health data for advertising purposes.
          </p>
        </section>

        {/* Sharing */}
        <section className="mb-12 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-black">Data Sharing</h2>

          <p>We do not sell your health data.</p>

          <p>We may share data only in the following cases:</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>With service providers (e.g., hosting, analytics)</li>
            <li>When required by law</li>
            <li>With your explicit consent</li>
          </ul>
        </section>

        {/* Security */}
        <section className="mb-12 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-black">Data Security</h2>

          <p>
            We use industry-standard security measures to protect your data, including encryption and secure servers.
          </p>

          <p>
            However, no system is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        {/* Rights */}
        <section className="mb-12 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-black">Your Rights</h2>

          <ul className="list-disc pl-5 space-y-2">
            <li>Access your data</li>
            <li>Update or correct your data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        {/* Children */}
        <section className="mb-12 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-black">Children’s Privacy</h2>

          <p>
            MetaFit is not intended for users under 18 years of age without parental consent.
          </p>
        </section>

        {/* Changes */}
        <section className="mb-12 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-black">Policy Updates</h2>

          <p>
            We may update this policy from time to time. Continued use of the Services means you accept the updated policy.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-12 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-black">Contact Us</h2>

          <p>If you have any questions, contact us at:</p>

          <p className="font-semibold">care@joinmeta.fit</p>
        </section>

      </div>

      <Footer />
    </main>
  );
}