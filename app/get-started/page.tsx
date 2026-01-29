import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';
import GetStartedFormPage from '@/components/form/GetStartedForm';

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <GetStartedFormPage />
      <Footer />
    </main>
  );
}