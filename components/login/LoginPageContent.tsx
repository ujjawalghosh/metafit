"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';
import { ChatBubbleLeftRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function LoginPageContent() {
  const router = useRouter();
  const [step, setStep] = useState<'PHONE' | 'OTP'>('PHONE');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock function to send OTP
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (phoneNumber.length < 10) {
      setError('Please enter a valid phone number.');
      setIsLoading(false);
      return;
    }

    // Move to OTP step
    setIsLoading(false);
    setStep('OTP');
  };

  // Mock function to verify OTP
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    // MOCK VALIDATION: Accept '123456' as the correct OTP
    if (otp !== '123456') {
      setError('Invalid OTP. Try 123456 for testing.');
      setIsLoading(false);
      return;
    }

    // MOCK ROUTING LOGIC:
    // If phone is '5555555555', assume they are registered -> Go to Home
    // Any other number -> Go to Profile Creation
    if (phoneNumber.includes('5555555555')) {
      console.log('User registered, redirecting home...');
      router.push('/');
    } else {
      console.log('New user, redirecting to onboarding...');
      router.push('/create-profile');
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />

      <div className="max-w-[480px] mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome to MetaFit</h1>
          <p className="text-gray-500">Log in or sign up to manage your health journey.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          {step === 'PHONE' ? (
            <form onSubmit={handleSendOtp} className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Phone Number</label>
                <div className="relative">
                  <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-black text-white font-bold py-3.5 rounded-full hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {isLoading ? 'Sending...' : 'Send Login Code'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-6 animate-fade-in-up">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">Enter the code sent to {phoneNumber}</p>
                <button 
                  type="button" 
                  onClick={() => setStep('PHONE')} 
                  className="text-xs text-blue-600 font-semibold mt-1 hover:underline"
                >
                  Change Number
                </button>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Verification Code</label>
                <input
                  type="text"
                  placeholder="123456"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-4 py-3 text-center text-2xl tracking-widest border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  maxLength={6}
                  required
                />
              </div>

              {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-black text-white font-bold py-3.5 rounded-full hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {isLoading ? 'Verifying...' : 'Verify & Login'}
                {!isLoading && <ArrowRightIcon className="h-4 w-4" />}
              </button>
              
              <p className="text-xs text-gray-400 text-center">
                For testing: Use code <strong>123456</strong>
              </p>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}