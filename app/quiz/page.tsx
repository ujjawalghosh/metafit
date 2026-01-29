import Footer from '@/components/nav/Footer';
import QuizFormPage from '@/components/form/QuizForm';

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-white">
      <QuizFormPage />
      <Footer />
    </main>
  );
}