import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';
import GetStartedFormPage from '@/components/form/GetStartedForm';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started | MetaFit",
  description: "Get started with your MetaFit weight loss journey",
  alternates: {
    canonical: "/get-started",
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