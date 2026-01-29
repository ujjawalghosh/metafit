"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, CheckIcon } from '@heroicons/react/24/outline';

// Define Question Types
type Question = {
  id: string;
  title: string;
  subtitle?: string;
  type: 'single' | 'multiple' | 'input' | 'date';
  options?: { label: string; value: string }[];
  placeholder?: string;
};

// Quiz Configuration
const questions: Question[] = [
  {
    id: 'goals',
    title: "What is your primary goal?",
    subtitle: "Select the one that matters most to you right now.",
    type: 'single',
    options: [
      { label: "Lose 10+ KG", value: "weight_loss_high" },
      { label: "Lose 5-10 KG", value: "weight_loss_low" },
      { label: "Maintain current weight", value: "maintain" },
      { label: "Build muscle mass", value: "muscle" },
    ]
  },
  {
    id: 'motivation',
    title: "What motivates you the most?",
    type: 'single',
    options: [
      { label: "Health & Longevity", value: "health" },
      { label: "Appearance & Confidence", value: "appearance" },
      { label: "Performance & Energy", value: "performance" },
      { label: "Doctor's Recommendation", value: "doctor" },
    ]
  },
  {
    id: 'history',
    title: "Have you tried GLP-1 medications before?",
    subtitle: "Examples: Ozempic.",
    type: 'single',
    options: [
      { label: "Yes, currently taking", value: "yes_current" },
      { label: "Yes, in the past", value: "yes_past" },
      { label: "No, never", value: "no" },
    ]
  },
  {
    id: 'dob',
    title: "When were you born?",
    subtitle: "We need this to ensure you are eligible for medical treatment.",
    type: 'date',
  },
  {
    id: 'email',
    title: "Where should we send your results?",
    subtitle: "We'll send a copy of your eligibility report here.",
    type: 'input',
    placeholder: "name@example.com"
  }
];

export default function QuizFormPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  // Handle Answer Selection
  const handleAnswer = (value: string | string[]) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
    
    // Auto-advance for single choice
    if (currentQuestion.type === 'single') {
      handleNext();
    }
  };

  // Handle Next Button
  const handleNext = async () => {
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 250); // Small delay for UX
    } else {
      // Submit Quiz
      setIsLoading(true);
      // Simulate API Submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
      setIsCompleted(true);
      console.log("Final Quiz Answers:", answers);
    }
  };

  // Handle Back Button
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <main className="min-h-screen bg-[#fafafa] font-sans text-[#1a1a1a]">
      {/* Simplified Navbar for Quiz Focus */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 py-4">
        <div className="max-w-[1440px] mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <svg width="100" height="30" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#1a1a1a" letterSpacing="-1">MetaFit</text>
            </svg>
          </Link>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
            {isCompleted ? "Complete" : "Assessment"}
          </div>
        </div>
      </nav>

      {/* Main Quiz Content */}
      <div className="max-w-2xl mx-auto px-6 py-12 min-h-[600px] flex flex-col">
        
        {!isCompleted ? (
          <>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 h-1.5 rounded-full mb-8">
              <div 
                className="bg-[#054742] h-1.5 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Back Button */}
            {currentStep > 0 && (
              <button 
                onClick={handleBack}
                className="text-gray-400 hover:text-black mb-6 flex items-center gap-1 text-sm font-medium w-max transition-colors"
              >
                <ChevronLeftIcon className="h-4 w-4" /> Back
              </button>
            )}

            {/* Question Text */}
            <div className="animate-fade-in-up flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{currentQuestion.title}</h1>
              {currentQuestion.subtitle && (
                <p className="text-gray-500 text-lg mb-8">{currentQuestion.subtitle}</p>
              )}

              {/* RENDER INPUTS BASED ON TYPE */}
              
              {/* Single Choice Cards */}
              {currentQuestion.type === 'single' && (
                <div className="space-y-3">
                  {currentQuestion.options?.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex justify-between items-center group
                        ${answers[currentQuestion.id] === option.value 
                          ? 'border-[#054742] bg-[#E8F3F1]' 
                          : 'border-gray-100 bg-white hover:border-gray-300 shadow-sm hover:shadow-md'
                        }`}
                    >
                      <span className="font-semibold text-lg">{option.label}</span>
                      {answers[currentQuestion.id] === option.value && (
                        <CheckIcon className="h-6 w-6 text-[#054742]" />
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Date Input */}
              {currentQuestion.type === 'date' && (
                <div className="flex flex-col gap-4">
                  <input 
                    type="date" 
                    onChange={(e) => setAnswers({ ...answers, [currentQuestion.id]: e.target.value })}
                    className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-black transition-colors bg-white"
                  />
                  <button 
                    onClick={handleNext}
                    disabled={!answers[currentQuestion.id]}
                    className="bg-black text-white py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              )}

              {/* Text Input */}
              {currentQuestion.type === 'input' && (
                <div className="flex flex-col gap-4">
                  <input 
                    type="text" 
                    placeholder={currentQuestion.placeholder}
                    value={answers[currentQuestion.id] || ''}
                    onChange={(e) => setAnswers({ ...answers, [currentQuestion.id]: e.target.value })}
                    className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-black transition-colors bg-white"
                  />
                  <button 
                    onClick={handleNext}
                    disabled={!answers[currentQuestion.id]}
                    className="bg-black text-white py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                  >
                    {isLoading ? "Processing..." : "See Results"}
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          /* COMPLETION STATE */
          <div className="flex flex-col items-center justify-center text-center animate-fade-in-up py-10">
            <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
              <CheckIcon className="h-12 w-12 text-green-700" />
            </div>
            <h2 className="text-4xl font-bold mb-4">You are eligible!</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Based on your profile, you are a great candidate for our <strong>Metabolic Weight Loss Program</strong> featuring GLP-1 medication.
            </p>
            
            <div className="w-full bg-white border border-gray-200 p-6 rounded-2xl shadow-sm mb-8 text-left">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Your Plan Includes</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 items-center">
                  <CheckIcon className="h-5 w-5 text-green-600" />
                  <span>Prescription for GLP-1 (if appropriate)</span>
                </li>
                <li className="flex gap-3 items-center">
                  <CheckIcon className="h-5 w-5 text-green-600" />
                  <span>1:1 Doctor Consultations</span>
                </li>
                <li className="flex gap-3 items-center">
                  <CheckIcon className="h-5 w-5 text-green-600" />
                  <span>Insurance Concierge Support</span>
                </li>
              </ul>
            </div>

            <Link href="/get-started" className="w-full">
              <button className="w-full bg-[#054742] text-white py-4 rounded-full font-bold text-lg hover:bg-[#03302d] transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Claim Your Treatment Plan
              </button>
            </Link>
            <p className="text-xs text-gray-400 mt-4">No commitment required. Free consultation included.</p>
          </div>
        )}
      </div>
    </main>
  );
}