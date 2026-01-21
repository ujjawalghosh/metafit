"use client";

import { useState } from 'react';
import Link from 'next/link';
import WeightLossFaq from './WeightLossFaq';
import SafetyModal from './SafetyModal';

const commonQuestions = [
  {
    question: "Who is MetaFit for?",
    answer: "MetaFit is for adults who are experiencing health issues or want to improve or support their health and prefer to do so from the comfort of their home."
  },
  {
    question: "Is my information safe?",
    answer: (
      <>
        We take your privacy and the security of your information very seriously. We’ve designed the MetaFit platform to comply with all relevant privacy laws and have implemented strict security protocols to protect your information.
        <br /><br />
        Please read our <Link href="/privacy-policy/" className="underline hover:text-gray-600">Privacy Policy</Link> for more details.
      </>
    )
  },
  {
    question: "What is MetaFit?",
    answer: (
      <>
        MetaFit is the healthcare company that powers Roman. We are a direct-to-consumer telehealth company that handles everything from diagnosis to the convenient delivery of medication. <Link href="http://joinmeta.fit/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Learn more about MetaFit</Link>.
      </>
    )
  }
];

export default function FaqPageContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">

      {/* Header Section */}
      <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-100">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-4">
            FAQ
          </h1>
          <p className="text-lg text-gray-600">
            For any additional questions, please reach out to <a href="mailto:care@joinmeta.fit" className="underline hover:text-gray-900">care@joinmeta.fit</a>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

          {/* Common Questions Accordion */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#1a1a1a]">Common questions</h2>
            <div className="border-t border-gray-200">
              {commonQuestions.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-6 flex justify-between items-center text-left hover:text-gray-600 transition-colors group"
                  >
                    <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-gray-600">
                      {item.question}
                    </h3>
                    <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.46 5.54c-.25-.25-.67-.25-.92 0l-3.54 3.54-3.54-3.54c-.25-.25-.67-.25-.92 0s-.25.67 0 .92l4 4c.13.13.29.19.46.19s.33-.06.46-.19l4-4c.25-.25.25-.67 0-.92Z" fill="currentColor" className="text-[#1a1a1a]" />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="text-gray-600 text-base leading-relaxed max-w-3xl">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <WeightLossFaq />

          <section id="safety" className="bg-[#f4f2ed] py-12 lg:py-16">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                {/* Text Content */}
                <div className="max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2">
                    Important safety information
                  </h3>
                  <p className="text-lg text-gray-600 font-medium">
                    What you should know before taking GLP-1s.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex-shrink-0">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center bg-white text-[#1a1a1a] font-bold text-base px-8 py-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    Read more
                  </button>
                </div>

              </div>
            </div>
          </section>

          {/* The Modal Component */}
          <SafetyModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

        </div>
      </section>
    </div>
  );
}