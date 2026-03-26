import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';
import GetStartedFormPage from '@/components/form/GetStartedForm';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started with MetaFit | Book a Free Weight Loss Consultation",
  description:
    "Begin your medically supervised GLP-1 weight loss journey with MetaFit. Fill out a quick form and get matched with an Indian doctor today.",
  alternates: {
    canonical: "/get-started",
  },
  openGraph: {
    title: "Get Started with MetaFit | Book a Free Weight Loss Consultation",
    description:
      "Begin your medically supervised GLP-1 weight loss journey with MetaFit. Fill out a quick form and get matched with an Indian doctor today.",
    url: "/get-started",
    type: "website",
    images: [
      {
        url: "/assets/og-default.png",
        width: 1200,
        height: 630,
        alt: "Get Started with MetaFit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Started with MetaFit | Book a Free Weight Loss Consultation",
    description:
      "Begin your medically supervised GLP-1 weight loss journey with MetaFit. Fill out a quick form and get matched with an Indian doctor today.",
    images: ["/assets/og-default.png"],
  },
};

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <GetStartedFormPage />
      <Footer />
    </main>
  );
}