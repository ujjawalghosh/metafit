import LoginPageContent from '@/components/login/LoginPageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | MetaFit',
  description: 'Log in to your MetaFit account',
  alternates: {
    canonical: '/login',
  },
};

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-white">
      <LoginPageContent />
    </main>
  );
}