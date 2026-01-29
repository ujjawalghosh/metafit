"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function CreateProfileContent() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    weight: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderSelect = (value: string) => {
    setFormData({ ...formData, gender: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate Saving Profile to DB
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Profile Created:", formData);
    
    // Redirect to Home/Dashboard after successful creation
    router.push('/');
  };

  return (
    <main className="min-h-screen bg-[#fafafa] font-sans text-[#1a1a1a]">
      <Navbar />

      <div className="max-w-[600px] mx-auto px-6 py-12 md:py-20">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm">
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Complete your profile</h1>
            <p className="text-gray-500">We need a few details to personalize your MetaFit experience.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#054742] focus:border-transparent bg-gray-50 focus:bg-white transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#054742] focus:border-transparent bg-gray-50 focus:bg-white transition-all"
                  required
                />
              </div>
            </div>

            {/* Gender Selection - Cards for better UX */}
            <div>
              <label className="block text-sm font-bold mb-3 text-gray-700">Biological Sex</label>
              <div className="grid grid-cols-2 gap-4">
                {['Male', 'Female'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleGenderSelect(option)}
                    className={`p-4 rounded-xl border-2 font-semibold text-lg flex justify-center items-center gap-2 transition-all
                      ${formData.gender === option 
                        ? 'border-[#054742] bg-[#E8F3F1] text-[#054742]' 
                        : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                  >
                    {option}
                    {formData.gender === option && <CheckCircleIcon className="h-5 w-5" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Age and Weight */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Age</label>
                <input
                  name="age"
                  type="number"
                  placeholder="30"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#054742] bg-gray-50 focus:bg-white transition-all"
                  required
                  min="18"
                  max="120"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Weight (lbs)</label>
                <input
                  name="weight"
                  type="number"
                  placeholder="160"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#054742] bg-gray-50 focus:bg-white transition-all"
                  required
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#054742] text-white font-bold py-4 rounded-full text-lg hover:bg-[#03302d] transition shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Creating Profile...' : 'Complete Registration'}
              </button>
            </div>

          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}