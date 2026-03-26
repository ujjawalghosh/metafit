import FAQPage from "@/components/faqs/FAQPage";
import Footer from "@/components/nav/Footer";
import Navbar from "@/components/nav/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs – MetaFit | GLP-1 Weight Loss Questions Answered",
  description:
    "Find answers to common questions about MetaFit, GLP-1 medications, weight loss programs, side effects, and how our platform works.",
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: "FAQs – MetaFit | GLP-1 Weight Loss Questions Answered",
    description:
      "Find answers to common questions about MetaFit, GLP-1 medications, weight loss programs, side effects, and how our platform works.",
    url: "/faq",
    type: "website",
    images: [
      {
        url: "/assets/og-default.png",
        width: 1200,
        height: 630,
        alt: "MetaFit FAQs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs – MetaFit | GLP-1 Weight Loss Questions Answered",
    description:
      "Find answers to common questions about MetaFit, GLP-1 medications, weight loss programs, side effects, and how our platform works.",
    images: ["/assets/og-default.png"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is MetaFit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MetaFit is a direct-to-patient healthcare company providing doctor-led GLP-1 weight loss programs tailored for the Indian lifestyle.",
      },
    },
    {
      "@type": "Question",
      name: "What is GLP-1 medication?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GLP-1 (Glucagon-like peptide-1) medications like semaglutide (Ozempic/Wegovy) and tirzepatide (Mounjaro) mimic a gut hormone that signals fullness, reduce appetite, and are clinically proven to help patients lose 13–20% of body weight.",
      },
    },
    {
      "@type": "Question",
      name: "Is GLP-1 medication safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GLP-1 medications are FDA and CDSCO approved and are considered safe when prescribed and monitored by qualified doctors. MetaFit conducts a full medical evaluation before prescribing any medication.",
      },
    },
    {
      "@type": "Question",
      name: "Is MetaFit covered by insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MetaFit offers direct-to-patient pricing that is transparent and does not require insurance. This keeps costs affordable and eliminates bureaucratic hurdles.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with MetaFit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can get started by visiting joinmeta.fit/get-started and filling out a short form. A MetaFit doctor will review your information and set up a consultation.",
      },
    },
  ],
};

export default function FAQ() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <FAQPage />
      <Footer />
    </main>
  );
}

