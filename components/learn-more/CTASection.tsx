"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 bg-green-600 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Start Your Optimized Weight Loss Journey
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Join the next generation of GLP-1 optimization. Medication works
            better when your whole lifestyle supports it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors">
              Start Now <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/30 transition-colors">
              <MessageCircle className="w-4 h-4" /> Talk to AI Coach
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
