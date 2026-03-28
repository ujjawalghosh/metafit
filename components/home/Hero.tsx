"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();
  return (
    <>

      <section className="relative group overflow-hidden min-h-[300px] flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-4 lg:p-6 border border-white/10 shadow-[0_20px_60px_rgba(184,133,56,0.3)] bg-gradient-to-br from-[#D3B28D] via-[#EBB15C] to-[#D3B28D]">

        {/* 1. Animations & Particles Overlay */}
        <style dangerouslySetInnerHTML={{
          __html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 1; }
        }
        .animate-shimmer { animation: shimmer 6s infinite; }
        .animate-float { animation: float-particle 8s infinite ease-in-out; }
      `}} />

        {/* Shimmer Effect Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 w-[300%] h-100% bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {[0, 2, 4, 1, 3].map((delay, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white/40 rounded-full animate-float"
              style={{
                top: `${20 + (i * 15)}%`,
                left: `${10 + (i * 18)}%`,
                animationDelay: `${delay}s`
              }}
            />
          ))}
        </div>

        {/* 2. Banner Left (Image) */}
        <div className="relative z-20 flex-shrink-0 w-full  lg:mx-8 lg:w-[200px] flex justify-center">
          <Image
            src="/assets/app_screenshot.png"
            alt="MetaFit App Screenshot"
            width={400}
            height={800}
            className="w-[250px] lg:w-full h-auto rounded-[20px] object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:rotate-2 group-hover:-translate-y-2 drop-shadow-2xl"
          />
        </div>

        {/* 3. Banner Right (Content) */}
        <div className="relative z-20 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-sm">
              Doctor-Prescribed GLP-1 <br/> Medical Weight Loss in India
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[#1a1a1a] font-normal max-w-[1000px] leading-relaxed">
              AI-powered weight loss with personalized insights, real-time progress tracking, and support from doctors, nutritionists, and fitness coaches.
            </p>
          </div>

          {/* Action Button (Optional) */}
          <button onClick={() => { router.push('/learn-more') }} className="mt-4 px-8 py-3.5 cursor-pointer bg-white/25 hover:bg-white/40 text-black font-bold uppercase tracking-widest text-sm rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl active:scale-95 border border-white/20">
            Learn More
          </button>
        </div>
      </section>

      {/* Grid UI Section */}
      <section className="w-full max-w-[1440px] mx-auto px-4 py-8 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

          {/* Top Left: Athlete/Hero Image */}
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto md:h-[500px] bg-[#d1d5db]">
            <Image
              src="/assets/lady-taking-shot.png" // Replace with your image path
              alt="Lose weight on GLP-1s"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
              <h2 className="text-3xl md:text-4xl text-white font-medium">India’s most trusted weight loss partner.</h2>
              <Link href="/get-started" className="pointer-events-auto self-end">
                <button className="bg-black/80 hover:bg-black text-white px-6 py-2.5 rounded-full flex items-center gap-2 transition-all">
                  Start now <span className="text-xl">→</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Top Right: GLP-1 Pill */}
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto md:h-[500px] bg-[#e5e7eb]">
            <Image
              src="/assets/Pill_Homepage_Desktop.webp" // Replace with your image path
              alt="GLP-1 Pill"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
              <h2 className="text-3xl md:text-4xl text-white font-medium">The new GLP-1 pill on MetaFit</h2>
              <Link href="/get-started" className="pointer-events-auto self-end">
                <button className="bg-black/80 hover:bg-black text-white px-6 py-2.5 rounded-full flex items-center gap-2 transition-all">
                  Start now <span className="text-xl">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Three-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* AI & Health Tracker Integration */}
          <div className="bg-[#efede8] p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-[#e8e5df] transition-colors">
            <div className="flex items-center gap-4">
              {/* Icon representing tracking/AI */}
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M12 2v20M2 12h20M12 12l4-4M12 12l-4 4" /></svg>
              </div>
              <div>
                <p className="text-xl font-medium text-[#1a1a1a] leading-tight">AI Agent &<br />Smart Tracker</p>
                <p className="text-xs text-gray-500 mt-1">Steps • Weight • Macro Insights</p>
              </div>
            </div>
            <div onClick={() => { router.push('/get-started') }} className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
              →
            </div>
          </div>

          {/* Expert Team Support */}
          <div className="bg-[#e2e4e6] p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-[#dadcdf] transition-colors">
            <div className="flex items-center gap-4">
              {/* Overlapping Avatars for Doctors/Trainers */}
              <div className="flex -space-x-3 flex-shrink-0">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative bg-gray-200">
                  <Image src="/assets/doctor-avatar.png" alt="Doctor" fill className="object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative bg-gray-200">
                  <Image src="/assets/trainer-avatar.png" alt="Fitness Trainer" fill className="object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative bg-gray-200">
                  <Image src="/assets/nutritionist-avatar.png" alt="Nutritionist" fill className="object-cover" />
                </div>
              </div>
              <div>
                <p className="text-xl font-medium text-[#1a1a1a] leading-tight">Consult with<br />MetaFit Experts</p>
                <p className="text-xs text-gray-500 mt-1">Doctors • Trainers • Nutritionists</p>
              </div>
            </div>
            <div onClick={() => { router.push('/get-started') }} className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
              →
            </div>
          </div>

          {/* Pricing (Kept as requested) */}
          <div className="bg-[#c3cad3] p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-[#b8c0ca] transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-16 h-10 relative flex-shrink-0">
                <Image src="/assets/vials-icon.webp" alt="Pricing" fill className="object-contain" />
              </div>
              <p className="text-xl font-medium text-[#1a1a1a] leading-tight">Get GLP-1s with<br />MetaFitSure pricing</p>
            </div>
            <div onClick={() => { router.push('/get-started') }} className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
              →
            </div>
          </div>

        </div>
      </section>

    </>
  );
}