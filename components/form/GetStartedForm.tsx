"use client";

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function GetStartedFormPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    weightGoal: '',
    gender: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle selection of cards (Step 1 & 2)
  const handleSelect = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Auto-advance to next step for smoother UX
    setStep(step + 1);
  };

  // Handle text inputs (Step 3)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 1. Remove non-numeric characters
    const value = e.target.value.replace(/\D/g, ''); 
    
    // 2. Update state only if 10 digits or less
    if (value.length <= 10) {
      setFormData({ ...formData, phone: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // Success!
      console.log("Lead Saved:", data);
      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your details. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-[#1a1a1a]">

      <div className="max-w-[600px] mx-auto px-4 py-12 md:py-20 min-h-[80vh]">

        {/* Progress Bar */}
        {!isSuccess && (
          <div className="mb-8">
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-black transition-all duration-500 ease-out"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2 font-medium">Step {step} of 3</p>
          </div>
        )}

        {/* STEP 1: WEIGHT LOSS SPECIFIC GOAL */}
        {step === 1 && (
          <div className="animate-fade-in-up">
            <h1 className="text-3xl font-bold mb-2">How much weight are you looking to lose?</h1>
            <p className="text-gray-600 mb-8">We use this to determine the right dosage plan for you.</p>

            <div className="space-y-4">
              {['Less than 10 KG', '10 - 20 KG', '20 - 30 KG', '30+ KG'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect('weightGoal', option)}
                  className="w-full text-left p-5 border border-gray-200 rounded-xl hover:border-black hover:bg-gray-50 transition-all group flex justify-between items-center"
                >
                  <span className="font-medium text-lg">{option}</span>
                  <ArrowRightIcon className="h-5 w-5 text-gray-300 group-hover:text-black" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: GENDER SELECTION (Critical for biological factors in weight loss) */}
        {step === 2 && (
          <div className="animate-fade-in-up">
            <button
              onClick={() => setStep(1)}
              className="text-sm text-gray-500 hover:text-black mb-6 flex items-center gap-1"
            >
              ← Back
            </button>
            <h1 className="text-3xl font-bold mb-2">Biological Sex</h1>
            <p className="text-gray-600 mb-8">Metabolic rates differ by sex. This helps us tailor your plan.</p>

            <div className="grid grid-cols-1 gap-4">
              {['Male', 'Female'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect('gender', option)}
                  className="w-full text-left p-5 border border-gray-200 rounded-xl hover:border-black hover:bg-gray-50 transition-all group flex justify-between items-center"
                >
                  <span className="font-medium text-lg">{option}</span>
                  <ArrowRightIcon className="h-5 w-5 text-gray-300 group-hover:text-black" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: CONTACT FORM */}
        {step === 3 && !isSuccess && (
          <form onSubmit={handleSubmit} className="animate-fade-in-up">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-sm text-gray-500 hover:text-black mb-6 flex items-center gap-1"
            >
              ← Back
            </button>

            <h1 className="text-3xl font-bold mb-2">See if you qualify for GLP-1s</h1>
            <p className="text-gray-600 mb-8">Enter your details to view your personalized weight loss options.</p>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">First Name</label>
                  <input
                    required
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Last Name</label>
                  <input
                    required
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Email Address</label>
                <input
                  required
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Phone Number</label>
                <input
                  required
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handlePhoneChange} // Uses the restricted handler
                  maxLength={10} // Prevents typing more than 10 chars
                  minLength={10} // HTML validation for minimum length
                  pattern="[0-9]{10}" // HTML validation pattern
                  inputMode="numeric" // Opens number pad on mobile
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="9876543210"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white font-bold py-4 rounded-full text-lg hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {isSubmitting ? 'Processing...' : 'View Treatment Plans'}
                  {!isSubmitting && <ArrowRightIcon className="h-5 w-5" />}
                </button>
                <p className="text-xs text-gray-500 text-center mt-4 px-4">
                  By clicking continue, you agree to our <Link href="/terms" className="underline">Terms</Link> and <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          </form>
        )}

        {/* SUCCESS STATE */}
        {/* SUCCESS STATE */}
        {isSuccess && (
          <div className="text-center animate-fade-in-up py-10">
            <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Good news, you may qualify!</h2>
            <div className="text-gray-600 mb-8 max-w-md mx-auto">
              <p className="mb-4">
                Based on your goal to lose <strong>{formData.weightGoal}</strong>, we have identified a metabolic plan that fits your needs.
              </p>
              <p className="font-semibold text-lg text-black">
                We will contact you soon.
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left max-w-sm mx-auto mb-8">
              <h3 className="font-bold mb-2 text-sm uppercase text-gray-500 tracking-wider">Your Summary</h3>
              <div className="space-y-2">
                <p className="flex justify-between text-sm"><span>Weight Goal:</span> <span className="font-semibold">{formData.weightGoal}</span></p>
                <p className="flex justify-between text-sm"><span>Recommended:</span> <span className="font-semibold">GLP-1 Program</span></p>
              </div>
            </div>
            <Link href="/">
              <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition">
                Back to Home
              </button>
            </Link>
          </div>
        )}

      </div>
    </main>
  );
}