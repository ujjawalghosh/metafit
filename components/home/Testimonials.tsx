"use client";

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Rahul",
    quote: "Works wonders and their service is amazing",
    img: "/assets/rahul.jpeg",
  },
  {
    name: "Anshu",
    quote: "Since losing 51 pounds through Ro, my day-to-day life has changed dramatically.",
    img: "/assets/Anshu.jpeg",
  },
  {
    name: "Mukesh",
    quote: "Someone is always there to walk you through the program—super easy and fast!",
    img: "/assets/Mukesh.jpeg",
  },
  {
    name: "Sudhir",
    quote: "My experience with MetaFit has been life changing. They were very easy to work with.",
    img: "/assets/sudheer.jpeg",
  },
  {
    name: "Amit",
    quote: "I can do the things that I want without feeling like I’m getting in my own way.",
    img: "/assets/amit.jpeg",
  },
  {
    name: "Aakash",
    quote: "The convenience and online support made this journey sustainable for me.",
    img: "/assets/Aakash.jpeg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[rgb(237,233,229)] py-20 lg:py-24 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

          {/* Left Column: Video Grid (6 Images) */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {testimonials.map((item, index) => (
                <button
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gray-100 transition-all duration-300 ${activeIndex === index
                    ? 'ring-4 ring-black ring-offset-2 scale-[1.02] z-10'
                    : 'opacity-80 hover:opacity-100 hover:scale-[1.02]'
                    }`}
                >
                  <Image
                    src={item.img}
                    alt={`Testimonial from ${item.name}`}
                    fill
                    className="object-cover"
                  />
                  {/* Play Button Icon */}
                  <div className="absolute top-2 right-2 h-6 w-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="ml-0.5">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.35156 1.82812L14.228 8.00089L4.35156 14.1736V1.82812ZM5.65156 4.17365V11.8281L11.7751 8.00089L5.65156 4.17365Z" fill="#1A1A1A" />
                    </svg>
                  </div>

                  {/* Name Badge */}
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-white text-[10px] font-medium flex flex-col text-left">
                    <span>{item.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Text Reviews */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center pl-0 lg:pl-12">

            {/* --- STATIC CONTENT (Fixed Position) --- */}
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">
                95% of MetaFit members love their experience
              </p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-[#1a1a1a] mb-2">
                1000+
              </h3>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.1] text-[#1a1a1a]">
                Members and counting
              </h3>
            </div>

            {/* --- DYNAMIC CONTENT (Review updates here) --- */}
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">
                Hear from MetaFit members
              </p>

              {/* min-h added to prevent layout shift when quotes vary in length */}
              <div className="min-h-[240px] flex flex-col justify-between transition-all duration-500 ease-in-out">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-[#1a1a1a] mb-8">
                  &ldquo;{testimonials[activeIndex].quote}&rdquo;
                </h3>

                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full overflow-hidden relative border border-gray-200 flex-shrink-0">
                    <Image
                      src={testimonials[activeIndex].img}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-[#1a1a1a]">
                      {testimonials[activeIndex].name}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      Verified MetaFit Member
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}