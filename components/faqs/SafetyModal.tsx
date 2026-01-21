"use client";

import { useEffect } from 'react';

interface SafetyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SafetyModal({ isOpen, onClose }: SafetyModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white z-10">
          <h2 className="text-xl font-bold text-[#1a1a1a]">Important safety information</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8.92 8l4.21-4.21c.25-.25.25-.67 0-.92s-.67-.25-.92 0l-4.21 4.21L3.79 2.87c-.25-.25-.67-.25-.92 0s-.25.67 0 .92l4.21 4.21-4.21 4.21c-.25.25-.25.67 0 .92.13.13.29.19.46.19s.33-.06.46-.19l4.21-4.21 4.21 4.21c.13.13.29.19.46.19s.33-.06.46-.19c.25-.25.25-.67 0-.92l-4.21-4.21Z" fill="#1a1a1a"/>
            </svg>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 md:p-8 text-sm text-gray-600 leading-relaxed space-y-8">
          
          {/* General Intro */}
          <div>
            <p className="font-bold text-base text-black mb-4">Important Safety Info for GLP-1s (Ozempic)</p>
          </div>

          <hr className="border-gray-100" />

          {/* OZEMPIC SECTION */}
          <section className="space-y-4">
            <h3 className="font-bold text-lg text-black underline decoration-2 underline-offset-4">Important Safety Information for Ozempic (semaglutide) injection</h3>
            
            <div className="bg-red-50 p-5 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-900 mb-2">Warning: Risk of Thyroid C-Cell Tumors</h4>
              <p className="mb-2 text-red-800">In studies with mice and rats, semaglutide caused thyroid tumors, including thyroid cancer. It is not known if Ozempic will cause thyroid tumors or a type of thyroid cancer called medullary thyroid carcinoma (MTC) in people.</p>
              <p className="text-red-800">Do not use Ozempic if you or any of your family have ever had a type of thyroid cancer called medullary thyroid carcinoma (MTC) or if you have an endocrine system condition called Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).</p>
            </div>

            <h4 className="font-bold text-black text-base mt-6">What is the FDA-approved use of Ozempic?</h4>
            <p>Ozempic is a glucagon-like peptide-1 (GLP-1) receptor agonist that is used:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>with diet and exercise to improve glycemic control in patients with type 2 diabetes mellitus.</li>
              <li>to reduce the risk of major adverse cardiovascular events in patients with type 2 diabetes mellitus and established cardiovascular disease.</li>
            </ul>

             <p className="mt-4 italic text-xs">For complete safety information, please see the full Prescribing Information for <a href="#" className="underline text-blue-600">Ozempic</a>.</p>
          </section>

        </div>
      </div>
    </div>
  );
}