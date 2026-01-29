"use client";

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    question: "What can I expect after I sign up?",
    answer: "After you complete your online visit, a MetaFit-affiliated healthcare provider will review your answers and determine whether treatment may be right for you. Depending on your health review, your provider may ask you to take a metabolic lab test. If appropriate, your provider will discuss GLP-1 medication options and recommend a personalized treatment plan."
  },
  {
    question: "When is a metabolic lab test needed?",
    answer: "Depending on your health review, your provider may ask you to take a metabolic lab test. The test looks at your hormones and metabolism to understand how your body works right now. Your provider will also consider whether a lab test may help with insurance coverage for the medication. Some plans may require one as part of the prior authorization process to determine medication cost coverage. A metabolic lab test at Quest is included in your membership fee. You can take your test in person at any Quest location. If you'd prefer to take your test from the comfort and privacy of your home, you can purchase an at-home blood collection kit through MetaFit for an additional cost. If you live in a state where Quest is unavailable, we'll automatically send you a collection kit at no extra charge."
  },
  {
    question: "What are the side effects of GLP-1s?",
    answer: (
      <>
        MetaFit-affiliated providers may prescribe a GLP-1 medication called semaglutide (Ozempic, Wegovy) or tirzepatide (Zepbound). The most common side effects of all the medications typically resolve within the first few weeks of treatment.
        <br/><br/>
        <strong>Common side effects include:</strong> Nausea, vomiting, upset stomach, stomach pains, constipation, diarrhea, heartburn, acid reflux, belching and gas, dizziness, headaches, and fatigue.
        <br/><br/>
        <strong>Serious side effects include:</strong> Thyroid cancer (BOXED WARNING), pancreatitis, gallbladder disease, low blood sugar, kidney disease, severe allergy, vision problems, rapid heartbeat, suicidal thoughts, and pulmonary aspiration during anesthesia.
        <br/><br/>
        Please see the full Prescribing Information (<a href="https://www.novo-pi.com/wegovy.pdf" target="_blank" className="underline">Wegovy</a>, <a href="https://www.novo-pi.com/ozempic.pdf" target="_blank" className="underline">Ozempic</a>, <a href="https://uspl.lilly.com/zepbound/zepbound.html" target="_blank" className="underline">Zepbound</a>) for complete safety information.
      </>
    )
  },
  {
    question: "How do I schedule a video call with my provider?",
    answer: "It's simple — just send a message in your provider chat requesting a video call, and your provider will send you a link to schedule a video visit."
  },
  {
    question: "What is MetaFit's refund policy?",
    answer: (
      <>
        You may cancel your membership at any time. You can cancel before any future billing periods to avoid additional charges. Your previously incurred monthly fees are nonrefundable.
        <br/><br/>
        We’re in this with you and want to make sure you feel supported with any questions you may have, so please feel free to <Link href="/contact-us/" className="underline">reach out to us</Link>.
      </>
    )
  },
  {
    question: "What is a medical weight loss program?",
    answer: (
      <>
        A medical weight loss program takes a scientific approach to weight loss and helps you shed pounds under the supervision of a healthcare professional. Medical weight loss programs also often include prescription medications such as <Link href="/weight-loss/ozempic/" className="underline">Ozempic</Link> or <Link href="/weight-loss/wegovy/" className="underline">Wegovy</Link>.
        <br/><br/>
        Our program combines GLP-1 medication with 1:1 personal coaching and ongoing support—all to help you lose weight and keep it off.
      </>
    )
  },
  {
    question: "How do weight loss injections work?",
    answer: "You can get a prescription for weight loss injections through MetaFit, if appropriate for you. All of the weight loss injections you can get through MetaFit belong to a revolutionary class of medications called GLP-1s. GLP-1 drugs mimic the natural hormone GLP-1, which your body uses to regulate blood sugar and appetite. GLP-1s talk directly to the part of your brain in charge of feeling full and satisfied, and they also slow down how quickly food leaves your stomach."
  },
  {
    question: "How fast can you lose weight through medical weight loss?",
    answer: (
      <>
        Medical weight loss programs are highly effective and you can start losing weight within a few months. In a clinical trial, people who combined Wegovy with a healthy diet and exercise lost an average of over 4% of their body weight after just eight weeks. Those who took the highest dose of Wegovy lost an average of <Link href="/weight-loss/how-much-weight-can-you-lose-on-wegovy/" className="underline">10% of their body weight</Link> in the first 20 weeks.
      </>
    )
  },
  {
    question: "How can I get a weight loss medication prescription online?",
    answer: "MetaFit can help you lose weight by pairing highly effective weight-loss medications with healthy lifestyle changes for long-lasting and sustainable weight loss. After you complete a health consult, MetaFit-affiliated healthcare providers can prescribe medications like Wegovy, Ozempic, or Zepbound, as appropriate."
  },
  {
    question: "What type of weight loss medications does MetaFit offer?",
    answer: "You can get a prescription for several different GLP-1 drugs through MetaFit, if medically appropriate. Some GLP-1s, like Ozempic, are approved for type 2 diabetes but may be prescribed off-label for weight loss."
  }
];

export default function WeightLossFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1a1a1a]">Weight loss FAQs</h2>

        <div className="border-t border-gray-200">
          {displayedFaqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full py-6 flex justify-between items-center text-left group hover:text-gray-600 transition"
              >
                <h3 className="text-lg md:text-xl font-bold text-[#1a1a1a] pr-8 group-hover:text-gray-600">
                  {faq.question}
                </h3>
                <span className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12.46 5.54c-.25-.25-.67-.25-.92 0l-3.54 3.54-3.54-3.54c-.25-.25-.67-.25-.92 0s-.25.67 0 .92l4 4c.13.13.29.19.46.19s.33-.06.46-.19l4-4c.25-.25.25-.67 0-.92Z" fill="currentColor"/>
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[1000px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Less Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center justify-center border border-gray-300 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-50 transition"
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </div>

      </div>
    </section>
  );
}