import Navbar from '@/components/nav/Navbar';
import FaqPageContent from '@/components/faqs/FaqsPageContent';
import Footer from '@/components/nav/Footer';

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <FaqPageContent />
      <Footer />
    </main>
  );
}