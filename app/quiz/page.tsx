import Footer from '@/components/nav/Footer';
import QuizFormPage from '@/components/form/QuizForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiz | MetaFit',
  description: 'Take the MetaFit Quiz',
  alternates: {
    canonical: '/quiz',
  },
};

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-white">
      <QuizFormPage />
      <Footer />
    </main>
  );
}