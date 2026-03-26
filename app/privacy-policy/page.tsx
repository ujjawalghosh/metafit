import type { Metadata } from 'next';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | MetaFit',
  description: 'Read the MetaFit Privacy Policy to understand how we collect, use, and protect your personal and health data.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | MetaFit',
    description: 'Read the MetaFit Privacy Policy to understand how we collect, use, and protect your personal and health data.',
    url: '/privacy-policy',
    type: 'website',
    images: [
      {
        url: '/assets/og-default.png',
        width: 1200,
        height: 630,
        alt: 'MetaFit Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | MetaFit',
    description: 'Read the MetaFit Privacy Policy to understand how we collect, use, and protect your personal and health data.',
    images: ['/assets/og-default.png'],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />

      <div className="max-w-[800px] mx-auto px-4 py-12 md:py-20">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">
            Last updated: March 2026
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p>
            MetaFit ("we", "our", "us") values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application and website.
          </p>
        </section>

        {/* Data We Collect */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>

          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Personal Info:</strong> Name, phone number</li>
            <li><strong>Profile Data:</strong> Age, weight, fitness goals</li>
          </ul>
        </section>

        {/* Usage */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">How We Use Your Data</h2>

          <ul className="list-disc pl-5 space-y-2">
            <li>Provide and improve our services</li>
            <li>Personalize your experience</li>
            <li>Communicate with you</li>
            <li>Ensure security and prevent fraud</li>
          </ul>
        </section>

        {/* Sharing */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Data Sharing</h2>

          <p>We do NOT sell your data.</p>

          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>With service providers (hosting, analytics)</li>
            <li>If required by law</li>
          </ul>
        </section>

        {/* Data Retention (IMPORTANT) */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Data Retention</h2>

          <p>
            We retain your data only as long as necessary:
          </p>

          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Account data: Until account deletion + 30 days</li>
            <li>Usage data: Up to 12 months</li>
          </ul>

          <p className="mt-3">
            After this, data is deleted or anonymized.
          </p>
        </section>

        {/* Security */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Security</h2>

          <p>
            We use standard security measures to protect your data. However, no system is 100% secure.
          </p>
        </section>

        {/* User Rights */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Your Rights</h2>

          <ul className="list-disc pl-5 space-y-2">
            <li>Access your data</li>
            <li>Request deletion</li>
            <li>Update your information</li>
          </ul>
        </section>

        {/* Children's Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>

          <p>
            Our app is not intended for users under 13. We do not knowingly collect data from children.
          </p>
        </section>

        {/* Changes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Changes</h2>

          <p>
            We may update this policy. Changes will be posted here.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

          <p>Email: care@joinmeta.fit</p>
        </section>

      </div>

      <Footer />
    </main>
  );
}