"use client";

import { useState } from 'react';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: "1. Start your online visit",
    description: "Answer a few questions about your health and goals, all online—no in-person doctor’s office visit necessary. You’ll find out if you’re eligible within 2 days.",
    image: "https://imgctf--assets.ro.co/jj2wf7627pjc/5XiGUwUIMX8oOEvI2gW1BK/89473c353c8121e9867c41048d59d9b2/HIW_Step_1_Module.jpg?fm=webp&q=80&w=1280"
  },
  {
    id: 2,
    title: "2. Provider writes an Rx (if appropriate)",
    description: "A provider will review your info and prescribe the right GLP-1 treatment for you, if eligible. Get ready for your first dose in two weeks.",
    image: "https://imgctf--assets.ro.co/jj2wf7627pjc/7qNcEIX3ASTRUGir1eRVGY/7c6f8e833e41e83647e6b83d19a67027/HIW_Step_2_Module.jpg?fm=webp&q=80&w=1280"
  },
  {
    id: 3,
    title: "3. Start your treatment",
    description: "Your medication ships right to your door and you can take your first dose in less than a week. If using insurance, your medication can be picked up at your pharmacy.",
    image: "https://imgctf--assets.ro.co/jj2wf7627pjc/3PxrPzLHeospaq3mvvd1zR/15c877323f724343a4084c7d617471b3/HIW_Step_4_Module.jpg?fm=webp&q=80&w=1280"
  },
  {
    id: 4,
    title: "4. Get support to stay on track",
    description: "Keep making progress with regular check-ins, expert guidance, and access to your care team 24/7. Ongoing care and support is there for you when you need it—whether it’s a quick chat with your provider or routine check-ins, we’re with you every step of the way.",
    image: "https://imgctf--assets.ro.co/jj2wf7627pjc/4yxM5eDlR4IOlKz8A9Jviu/0a60e30f3f6c87aa3f170526ce6b6bf0/HIW_Step_5_Module.jpg?fm=webp&q=80&w=1280"
  }
];

export default function HowItWorks() {
  const [openStep, setOpenStep] = useState<number>(1);

  const toggleStep = (id: number) => {
    // If clicking the open step, don't close it (always keep one open), otherwise switch
    if (openStep !== id) {
      setOpenStep(id);
    }
  };

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://vidctf--assets.ro.co/jj2wf7627pjc/a7p8D1yeTcrUyuc5emE1s/2bd32a480645b30b0f39603c43dbccde/Banner_video_for_website_V01_wider_SMALLER.mp4" type="video/mp4" />
        </video>
        {/* White Overlay to make text readable and blend with next section */}
        <div className="absolute inset-0 bg-white/90 lg:bg-white/80" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Column: Headlines */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1a1a1a] mb-6">
              Your timeline to treatment
            </h2>
            <p className="text-xl text-gray-600 max-w-lg">
              From personalized treatment to insurance support, we help you get—and stay—on track.
            </p>
          </div>

          {/* Right Column: Timeline Accordion */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 lg:p-10 border border-white/50 shadow-sm">

            {/* Timeline Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-black text-white p-1 rounded-full flex items-center justify-center"/>
              <h3 className="text-lg font-bold uppercase tracking-wider text-gray-500">
                Start losing weight in 4 simple steps
              </h3>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.id} className="border-b border-gray-200 last:border-0 pb-4">
                  <button
                    onClick={() => toggleStep(step.id)}
                    className="w-full flex justify-between items-center py-4 text-left group"
                  >
                    <h3 className={`text-xl md:text-2xl font-bold transition-colors ${openStep === step.id ? 'text-[#1a1a1a]' : 'text-gray-400 group-hover:text-gray-600'}`}>
                      {step.title}
                    </h3>
                    <div className={`transform transition-transform duration-300 ${openStep === step.id ? 'rotate-180' : ''}`}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12.46 5.54c-.25-.25-.67-.25-.92 0l-3.54 3.54-3.54-3.54c-.25-.25-.67-.25-.92 0s-.25.67 0 .92l4 4c.13.13.29.19.46.19s.33-.06.46-.19l4-4c.25-.25.25-.67 0-.92Z" fill="#1a1a1a" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out overflow-hidden ${openStep === step.id
                        ? 'grid-rows-[1fr] opacity-100 mb-6'
                        : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    <div className="min-h-0">
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {step.description}
                      </p>
                      <div className="relative aspect-video w-full rounded-2xl overflow-hidden">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                        {/* Progress Bar Animation (Optional visual flair from original) */}
                        {openStep === step.id && (
                          <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/30 rounded-full overflow-hidden">
                            <div className="h-full bg-white animate-[width_5s_linear_forwards] w-0" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}