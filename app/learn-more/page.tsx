'use client';
import Link from 'next/link';
import { ArrowLeft, Activity, Utensils, User, TriangleAlert, HeartPulse } from 'lucide-react';
import Image from 'next/image';

export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center text-[15px] font-medium text-gray-500 hover:text-gray-900 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>
        <div className="absolute left-1/2 -translate-x-1/2 text-xl font-serif font-bold text-black tracking-tight">
          MetaFit
        </div>
        <div className="w-20" /> {/* Spacer for centering */}
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center pt-8 md:pt-16 pb-32 px-6">
        <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">

          {/* Left Column */}
          <div className="space-y-8 max-w-[480px]">
            <div className="space-y-6">
              <span className="inline-flex px-3 py-1 bg-[#eaf4ef] text-[#2c735d] rounded-full text-[13px] font-medium tracking-wide">
                The Real Problem
              </span>

              <h1 className="text-4xl md:text-[44px] font-serif text-[#1a1a1a] leading-[1.1] tracking-tight">
                Weight Loss Medication Alone Isn't the Full Solution
              </h1>

              <p className="text-[17px] text-gray-500 leading-relaxed max-w-[440px]">
                Millions of people are now using GLP-1 medications for weight loss. But medication alone doesn't create sustainable results.
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-center p-3.5 bg-white rounded-2xl border border-[#f0f0f0] shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#fcf0dc] mr-4">
                  <Activity className="w-4 h-4 text-[#8b6b45]" />
                </div>
                <span className="text-[#333] font-medium text-[14px]">Patients lose muscle mass during weight loss</span>
              </div>

              <div className="flex items-center p-3.5 bg-white rounded-2xl border border-[#f0f0f0] shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#fcf0dc] mr-4">
                  <Utensils className="w-4 h-4 text-[#8b6b45]" />
                </div>
                <span className="text-[#333] font-medium text-[14px]">Appetite suppression leads to poor nutrition</span>
              </div>

              <div className="flex items-center p-3.5 bg-white rounded-2xl border border-[#f0f0f0] shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#fcf0dc] mr-4">
                  <User className="w-4 h-4 text-[#8b6b45]" />
                </div>
                <span className="text-[#333] font-medium text-[14px]">Users receive no personalized guidance</span>
              </div>

              <div className="flex items-center p-3.5 bg-white rounded-2xl border border-[#f0f0f0] shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#fcf0dc] mr-4">
                  <TriangleAlert className="w-4 h-4 text-[#8b6b45]" />
                </div>
                <span className="text-[#333] font-medium text-[14px]">Most people regain weight after stopping medication</span>
              </div>

              <div className="flex items-center p-3.5 bg-white rounded-2xl border border-[#f0f0f0] shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#fcf0dc] mr-4">
                  <HeartPulse className="w-4 h-4 text-[#8b6b45]" />
                </div>
                <span className="text-[#333] font-medium text-[14px]">No lifestyle coaching or long-term support</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative w-full max-w-[480px] aspect-square mx-auto lg:ml-auto bg-[#F7EAD4] rounded-[16px] overflow-hidden shadow-sm mt-8 lg:mt-0">
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-20">
                <svg className="w-24 h-24 text-[#8b6b45]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
             </div>
          </div>

        </div>
      </main>

      {/* Footer Blocks */}
      <div className="bg-[#488468] h-[200px] w-full" />
      <div className="bg-[#FDFBF7] py-6 text-center text-[13px] text-gray-500 font-medium">
        © 2026 MetaFit. All rights reserved.
      </div>
    </div>
  );
}
