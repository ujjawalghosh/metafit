import type { Metadata } from 'next';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';

export const metadata: Metadata = {
  title: 'Terms of Use | MetaFit',
  description: 'Read the MetaFit Terms of Use governing your access to and use of our medical weight loss platform and services.',
  alternates: {
    canonical: '/terms-of-use',
  },
  openGraph: {
    title: 'Terms of Use | MetaFit',
    description: 'Read the MetaFit Terms of Use governing your access to and use of our medical weight loss platform and services.',
    url: '/terms-of-use',
    type: 'website',
    images: [
      {
        url: '/assets/og-default.png',
        width: 1200,
        height: 630,
        alt: 'MetaFit Terms of Use',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use | MetaFit',
    description: 'Read the MetaFit Terms of Use governing your access to and use of our medical weight loss platform and services.',
    images: ['/assets/og-default.png'],
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a]">
      <Navbar />

      <div className="max-w-[800px] mx-auto px-4 py-12">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Terms of Use</h1>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: March 2026
          </p>
        </div>

        {/* Intro */}
        <section className="mb-8">
          <p>
            Welcome to MetaFit. By using our app or website, you agree to these Terms of Use.
            If you do not agree, please do not use our services.
          </p>
        </section>

        {/* Services */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">1. Services</h2>
          <p>
            MetaFit provides fitness-related content such as workout plans, tracking tools,
            and general wellness guidance. The app is intended for informational and
            personal use only.
          </p>
        </section>

        {/* Not medical */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">2. Not Medical Advice</h2>
          <p>
            MetaFit does not provide medical advice. Always consult a qualified
            healthcare professional before starting any fitness program.
          </p>
        </section>

        {/* Eligibility */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">3. Eligibility</h2>
          <p>
            You must be at least 13 years old to use this app. If you are under 18,
            you should use the app with parental guidance.
          </p>
        </section>

        {/* Account */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">4. Account</h2>
          <ul className="list-disc pl-5">
            <li>You are responsible for your account and credentials</li>
            <li>Provide accurate information</li>
            <li>Do not share your account</li>
          </ul>
        </section>

        {/* User behavior */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">5. Acceptable Use</h2>
          <ul className="list-disc pl-5">
            <li>No illegal or harmful use</li>
            <li>No hacking or misuse</li>
            <li>No copying content without permission</li>
          </ul>
        </section>

        {/* Payments */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">6. Payments</h2>
          <p>
            Currently, MetaFit does not offer in-app purchases on iOS. Any references to paid services or subscriptions may not apply to iOS users.
          </p>
          <p className="mt-2">
            If payments are introduced in the future, they will be processed in compliance with applicable platform policies and laws.
          </p>
        </section>

        {/* Termination */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">7. Termination</h2>
          <p>
            We may suspend or terminate your account if you violate these terms.
          </p>
        </section>

        {/* Liability */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">8. Limitation of Liability</h2>
          <p>
            MetaFit is not responsible for any injuries, damages, or losses resulting
            from use of the app. You use the app at your own risk.
          </p>
        </section>

        {/* Changes */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">9. Changes</h2>
          <p>
            We may update these Terms at any time. Continued use means you accept the changes.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">10. Contact</h2>
          <p>Email: care@joinmeta.fit</p>
        </section>

      </div>

      <Footer />
    </main>
  );
}