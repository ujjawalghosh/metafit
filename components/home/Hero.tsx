"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const marqueeItems = [
  {
    text: "Trusted by thousands on MetaFit for GLP-1s",
    icon: (
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="w-5 h-5 text-black">
        <path d="M14.81 7.16l-1.16-1.39v-2.1c0-.73-.59-1.32-1.32-1.32h-2.1l-1.39-1.16c-.49-.41-1.2-.41-1.69 0l-1.39 1.16h-2.1c-.73 0-1.32.59-1.32 1.32v2.1l-1.16 1.39c-.41.49-.41 1.2 0 1.69l1.16 1.39v2.1c0 .73.59 1.32 1.32 1.32h2.1l1.39 1.16c.24.2.54.31.84.31s.6-.1.84-.31l1.39-1.16h2.1c.73 0 1.32-.59 1.32-1.32v-2.1l1.16-1.39c.41-.49.41-1.2,0-1.69ZM12.5 9.58c-.1.12-.15.26-.15.42l-.02 2.35h-2.33c-.15,0-.3.05-.42.15l-1.59 1.31-1.57-1.31c-.12-.1-.26-.15-.42-.15l-2.35-.02v-2.33c0-.15-.05-.3-.15-.42l-1.31-1.59 1.31-1.57c.1-.12.15-.26.15-.42l.02-2.35h2.33c.15 0 .3-.05.42-.15l1.57-1.31h0s.02 0 .02 0l1.57 1.31c.12.1.26.15.42.15l2.35.02v2.33c0 .15.05.3.15.42l1.31 1.59-1.31 1.57Z" fill="currentColor" />
        <path d="M9.83 5.92l-2.54 3.11-.83-.83c-.25-.25-.67-.25-.92 0-.25.25-.25.67 0 .92l1.33 1.33c.12.12.29.19.46.19.01 0 .02 0 .03 0 .18 0 .35-.1.47-.24l3-3.67c.23-.28.19-.69-.09-.91-.28-.23-.69-.19-.91.09Z" fill="currentColor" />
      </svg>
    )
  },
  {
    text: "Real providers, FDA-approved options",
    icon: (
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="w-5 h-5 text-black">
        <path d="M13.51 13.92l-3.53-4.22 3.33-3.99c.23-.28.19-.69-.08-.92-.28-.23-.69-.19-.92.08l-3.18 3.81-2.01-2.41c1.4-.06 2.52-1.21 2.52-2.62s-1.18-2.63-2.63-2.63H2.99c-.36 0-.65.29-.65.65v8c0 .36.29.65.65.65s.65-.29.65-.65v-3.39h1.8l2.85 3.41-3.53 4.22c-.23.28-.19.69.08.92.12.1.27.15.42.15.19 0 .37-.08.5-.23l3.38-4.04 3.38 4.04c.13.15.31.23.5.23.15 0 .29-.05.42-.15.28-.23.31-.64.08-.92ZM3.64 2.32h3.37c.73 0 1.33.6 1.33 1.33s-.6 1.33-1.33 1.33h-3.37v-2.66Z" fill="currentColor" />
      </svg>
    )
  },
  {
    text: "Affordable GLP-1s with or without insurance",
    icon: (
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="w-5 h-5 text-black">
        <path d="M7.68 8.46c.23.1.48.16.73.16s.5-.05.73-.16c2.17-.96 3.51-2.64 3.58-4.47.05-1.26-.52-2.37-1.49-2.89-1.15-.62-2.18-.31-2.82.11-.64-.42-1.68-.73-2.82-.11-.97.52-1.54 1.63-1.49 2.89.07 1.83 1.41 3.5 3.58 4.47ZM6.21 2.23c.26-.14.5-.19.72-.19.57 0 .95.38 1 .43.12.14.3.21.48.21.15-.02.36-.08.48-.21.08-.08.76-.77 1.73-.24.52.28.84.95.81 1.7-.05 1.33-1.1 2.57-2.81 3.33-.13.06-.28.06-.41 0-1.71-.76-2.76-2-2.81-3.33-.03-.75.29-1.42.81-1.7Z" fill="currentColor" />
        <path d="M13.82 10.98c-.39-.97-1.47-1.48-2.47-1.14l-2.33.78c-.4-.55-1.08-.96-1.94-.96h-.5l-1.22-.67c-.29-.16-.62-.25-.96-.25h-1.66c-.36 0-.65.29-.65.65s.29.65.65.65h1.66c.12 0 .23.03.33.08l1.37.75c.1.05.2.08.31.08h.67c.39 0 .66.17.83.36l-1.17.39-1.79-.6c-.34-.11-.71.07-.82.41s.07.71.41.82l1.79.59c.27.09.57.09.83 0l1.79-.6c.22-.07.38-.26.43-.48l2.38-.79c.34-.12.72.06.88.31l-5.06 2.53c-.15.08-.33.09-.49.05l-4.17-1.18c-.35-.1-.7.1-.8.45s.1.7.45.8l4.17 1.18c.18.05.36.07.54.07.31,0,.61-.07.89-.21l5.06-2.53c.57-.29.83-.97.59-1.56Z" fill="currentColor" />
      </svg>
    )
  },
  {
    text: "Get started 100% online",
    icon: (
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="w-5 h-5 text-black">
        <path d="M8 .68C3.97.68.68 3.97.68 8s3.28 7.32 7.32 7.32 7.32-3.28 7.32-7.32S12.03.68 8 .68ZM8 14.02c-3.32 0-6.02-2.7-6.02-6.02S4.68 1.98 8 1.98s6.02 2.7 6.02 6.02-2.7 6.02-6.02 6.02Z" fill="currentColor" />
        <path d="M10.17 5.58l-2.88 3.45-1.5-1.5c-.25-.25-.67-.25-.92 0s-.25.67 0 .92l2 2c.12.12.29.19.46.19.01 0 .02 0 .03 0 .18 0 .35-.09.47-.23l3.33-4c.23-.28.19-.69-.08-.92-.27-.23-.69-.19-.92.08Z" fill="currentColor" />
      </svg>
    )
  }
];

export default function Hero() {
  return (
    <>
      {/* 1. Text & Features Section */}
      <section className="bg-[#f4f2ed] pt-4 pb-4 lg:pt-8 lg:pb-8 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">

            {/* Left Side: Main Text Content */}
            <div className="flex-1 lg:max-w-3xl">
              <h1 className="text-5xl md:text-7xl lg:text-[90px] leading-[0.95] tracking-[-0.02em] font-light text-[#1a1a1a]">
                it's not a shortcut.
                <br />
                <span className="font-serif italic">it's healthcare.</span>
              </h1>
            </div>

            {/* Right Side: Features Column */}
            <div className="flex-1 lg:max-w-md w-full lg:mt-4">
              <div className="flex flex-col gap-4">
                {marqueeItems.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 mr-4 rounded-full mt-0.5">
                      {item.icon}
                    </div>
                    <p className="text-sm md:text-base font-medium text-[#1a1a1a] leading-tight">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Full Width Image Banner Section */}
      <section className="bg-white pb-4">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative h-[300px] md:h-[520px] overflow-hidden group cursor-pointer w-full">
            <Image
              src="/assets/lady_taking_shot.png"
              alt="Serena Williams"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 md:p-12">
              <h2 className="text-white text-3xl md:text-5xl font-light leading-tight mb-6">
                India's most trusted <br /> weight loss partner.<br />
              </h2>
              <Link href="/get-started">
                <button className="bg-white cursor-pointer text-black px-8 py-3 rounded-full font-semibold text-lg w-max hover:bg-gray-100 transition flex items-center gap-2">
                  Start Plan <span>→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}