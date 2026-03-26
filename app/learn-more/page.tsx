import Navbar from "@/components/nav/Navbar";
import ProblemSection from "@/components/learn-more/ProblemSection";
import HalfBattleSection from "@/components/learn-more/HalfBattleSection";
import IntroducingSection from "@/components/learn-more/IntroducingSection";
import HowItSolvesSection from "@/components/learn-more/HowItSolvesSection";
import EcosystemSection from "@/components/learn-more/EcosystemSection";
import OutcomesSection from "@/components/learn-more/OutcomesSection";
import CTASection from "@/components/learn-more/CTASection";
import Footer from "@/components/nav/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MetaFit – The OS for GLP-1 Weight Loss",
  description:
    "MetaFit helps GLP-1 medication users maximize results with AI-powered nutrition, exercise, and doctor support.",
  alternates: {
    canonical: '/learn-more',
  },
  openGraph: {
    title: "MetaFit – The OS for GLP-1 Weight Loss",
    description:
      "MetaFit helps GLP-1 medication users maximize results with AI-powered nutrition, exercise, and doctor support.",
    url: "/learn-more",
    type: "website",
    images: [
      {
        url: "/assets/og-default.png",
        width: 1200,
        height: 630,
        alt: "MetaFit – How It Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MetaFit – The OS for GLP-1 Weight Loss",
    description:
      "MetaFit helps GLP-1 medication users maximize results with AI-powered nutrition, exercise, and doctor support.",
    images: ["/assets/og-default.png"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ProblemSection />
      <HalfBattleSection />
      <IntroducingSection />
      <HowItSolvesSection />
      <EcosystemSection />
      <OutcomesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
