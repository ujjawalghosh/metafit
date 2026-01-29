"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  "https://imgctf--assets.ro.co/jj2wf7627pjc/1OuohJPYUzgXHT7ZQ7EyKP/7745ac6c0dffcecb52820374a90bb603/mobile-ozempic-max.jpg?fm=webp&q=80&w=1280",
  "https://imgctf--assets.ro.co/jj2wf7627pjc/3sQt8dYUOoGMkfuYB0MUOh/e8e43065148f0dd71a96e4102748fb84/Body_Ozempic-02M.jpg?fm=webp&q=80&w=1280",
  "https://imgctf--assets.ro.co/jj2wf7627pjc/1fa9REEewvvDnY5mswKNx1/85482e6870508d89fc2fa3e12181fdd8/Ana_Cuba_Montanya_Ozempic_Mobile.jpg?fm=webp&q=80&w=1280"
];

const faqs = [
  {
    question: "What is Ozempic?",
    answer: "Ozempic is a brand-name version of the generic medication semaglutide, which is a type of medication called a glucagon-like peptide 1 receptor agonist. Instead of that tongue-twister of a name, we call these medications “GLP-1s” for short. Ozempic is FDA-approved for the management of certain symptoms and risks of type 2 diabetes."
  },
  {
    question: "How does Ozempic work?",
    answer: "Ozempic works by slowing the digestion process, which can help you to feel full for longer. Ozempic, like other GLP-1 receptor agonists, acts like a hormone your body naturally makes to regulate blood sugar and may help support weight loss."
  },
];

export default function OzempicSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: Product Image Carousel */}
          <div className="lg:w-1/2 relative">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-gray-100">
              <Image 
                src={images[activeSlide]} 
                alt="Ozempic product shot" 
                fill 
                className="object-cover transition-opacity duration-500"
              />
              
              {/* Carousel Controls (Overlay) */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                 {images.map((_, i) => (
                   <button 
                     key={i}
                     onClick={() => setActiveSlide(i)}
                     className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${activeSlide === i ? 'bg-black w-8' : 'bg-black/30'}`}
                     aria-label={`Go to slide ${i + 1}`}
                   />
                 ))}
              </div>
            </div>
          </div>

          {/* Right: Content & FAQ */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight text-[#1a1a1a] mb-3">
                Ozempic® Prescription Online for Weight Loss
              </h1>
              <p className="text-xl text-gray-500 font-medium">(semaglutide) injection</p>
            </div>

            {/* Value Props List */}
            <ul className="space-y-6 mb-10">
              <li className="flex items-start gap-4">
                <div className="bg-gray-100 p-2 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21.71 12.43l-3-9.1c-.05-.16-.16-.29-.29-.39-2.68-1.81-5.39-.58-8.01.61-2.42 1.1-4.7 2.13-7.13 1.16-.27-.11-.57-.05-.78.14-.21.19-.3.49-.22.76l5 17.37c.09.33.39.54.72.54.07 0 .14 0 .21-.03.4-.11.63-.53.51-.93l-1.96-6.82c1.69.15 3.32-.74 4.91-1.62 2.61-1.44 5.32-2.92 8.96-.82.27.16.61.13.85-.07.24-.2.34-.52.24-.82ZM10.94 12.81c-1.8.99-3.24 1.78-4.65 1.31l-2.2-7.64c2.5.43 4.84-.62 6.93-1.58 2.36-1.07 4.42-2 6.34-.86l2.37 7.2c-3.59-1.3-6.45.27-8.8 1.57Z" fill="#1a1a1a"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">A weekly shot to lose weight</h4>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-gray-100 p-2 rounded-full">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M14.5 6.75c.41 0 .75-.34.75-.75 0-2.52.53-3.32.71-3.58.23-.34.14-.81-.21-1.04-.35-.23-.81-.14-1.04.21-.41.62-.96 1.75-.96 4.42 0 .41.34.75.75.75Z" fill="#1a1a1a"/>
                    <path d="M22.53 8.14c-.29-.29-.77-.29-1.06 0-.48.48-1.03 1.03-5.94-.19h-.03c-5.08-1.27-6.6-.57-7.36.19-.7.7-1.35 2.04-.47 6.19-4.32-.96-5.28-.43-6.19.48-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0 .48-.48 1.03-1.03 5.94.19h.03c2.02.51 3.48.7 4.55.7 1.62 0 2.36-.44 2.82-.9.7-.7 1.35-2.04.47-6.19 4.33.97 5.28.43 6.19-.48.29-.29.29-.77 0-1.06ZM14.8 14.8c-.83.83-3.64.35-5.51-.09-.44-1.87-.92-4.68-.09-5.52.83-.83 3.64-.35 5.52.09.44 1.87.92 4.68.09 5.51Z" fill="#1a1a1a"/>
                    <path d="M9.5 17.25c-.41 0-.75.34-.75.75 0 1.78-.26 2.95-.78 3.47-.29.29-.29.77 0 1.06.15.15 3.4.22 5.3.22s.38-.07.53-.22c.83-.83 1.22-2.27 1.22-4.53 0-.41-.34-.75-.75-.75Z" fill="#1a1a1a"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">FDA-approved GLP-1 medication</h4>
                  <p className="text-gray-500 text-sm mt-1">Ozempic is not FDA-approved for weight loss, but may be prescribed off-label if a provider deems it appropriate</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-gray-100 p-2 rounded-full">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6.5 20.25h-1.5c-.69 0-1.25-.56-1.25-1.25v-1.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5c0 1.52 1.23 2.75 2.75 2.75h1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z" fill="#1a1a1a"/>
                    <path d="M3 7.25c.41 0 .75-.34.75-.75v-1.5c0-.69.56-1.25 1.25-1.25h1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.5c-1.52 0-2.75 1.23-2.75 2.75v1.5c0 .41.34.75.75.75Z" fill="#1a1a1a"/>
                    <path d="M19 2.25h-1.5c-.41 0-.75.34-.75.75s.34.75.75.75h1.5c.69 0 1.25.56 1.25 1.25v1.5c0 .41.34.75.75.75s.75-.34.75-.75v-1.5c0-1.52-1.23-2.75-2.75-2.75Z" fill="#1a1a1a"/>
                    <path d="M21 16.75c-.41 0-.75.34-.75.75v1.5c0 .69-.56 1.25-1.25 1.25h-1.5c-.41 0-.75.34-.75.75s.34.75.75.75h1.5c1.52 0 2.75-1.23 2.75-2.75v-1.5c0-.41-.34-.75-.75-.75Z" fill="#1a1a1a"/>
                    <path d="M18.75 12c0-3.72-3.03-6.75-6.75-6.75s-6.75 3.03-6.75 6.75 3.03 6.75 6.75 6.75 6.75 3.03 6.75 6.75ZM12 17.25c-2.9 0-5.25-2.36-5.25-5.25s2.35-5.25 5.25-5.25 5.25 2.35 5.25 5.25-2.35 5.25-5.25 5.25Z" fill="#1a1a1a"/>
                    <path d="M13.82 9.72l-2.47 2.97-1.22-1.22c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l1.8 1.8c.14.14.33.22.53.22.01 0 .02 0 .03 0 .21 0 .41-.11.54-.27l3-3.6c.27-.32.22-.79-.1-1.06-.32-.26-.79-.22-1.06.1Z" fill="#1a1a1a"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Improves the way your body responds to sugars</h4>
                </div>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="mb-12">
               <Link 
                 href="/get-started"
                 className="inline-flex items-center justify-center bg-black text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-gray-800 transition w-full md:w-auto"
               >
                 Get started
               </Link>
            </div>

            {/* FAQ Accordion */}
            <div className="border-t border-gray-200">
               {faqs.map((faq, index) => (
                 <div key={index} className="border-b border-gray-200">
                   <button 
                     onClick={() => toggleFaq(index)}
                     className="w-full py-6 flex justify-between items-center text-left hover:text-gray-600 transition"
                   >
                     <h3 className="text-xl font-bold">{faq.question}</h3>
                     <span className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                       <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                         <path d="M12.46 5.54c-.25-.25-.67-.25-.92 0l-3.54 3.54-3.54-3.54c-.25-.25-.67-.25-.92 0s-.25.67 0 .92l4 4c.13.13.29.19.46.19s.33-.06.46-.19l4-4c.25-.25.25-.67 0-.92Z" fill="currentColor"/>
                       </svg>
                     </span>
                   </button>
                   
                   <div 
                     className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                   >
                     <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                       {faq.answer}
                     </p>
                   </div>
                 </div>
               ))}
            </div>

            {/* Disclaimer */}
            <div className="mt-8 text-xs text-gray-500 leading-normal">
              <p>
                <strong>Important Safety Information:</strong> Ozempic treats type 2 diabetes but may be prescribed off-label for weight loss, if appropriate. <strong>Ozempic may have serious side effects, including possible thyroid tumors. Do not use if you or your family have a history of a type of thyroid cancer called MTC or MEN 2.</strong> <Link href="/safety-info/ozempic/" className="underline">Read more</Link> about serious warnings and safety info.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}