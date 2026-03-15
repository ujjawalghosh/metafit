import FAQPage from "@/components/faqs/FAQPage";
import Footer from "@/components/nav/Footer";
import Navbar from "@/components/nav/Navbar";

export const metadata = {
  title: "FAQs – MetaFit",
  description:
    "Find answers to common questions about MetaFit, GLP-1 medications, weight loss programs, side effects, and how our platform works.",
};

export default function FAQ() {
  return <main className="min-h-screen bg-white">
    <Navbar />
    <FAQPage />
    <Footer />
  </main>
}
