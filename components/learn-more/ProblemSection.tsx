import Image from "next/image";
import {
  TrendingDown,
  Utensils,
  UserX,
  TriangleAlert,
  HeartPulse,
} from "lucide-react";

const problems = [
  { icon: TrendingDown, label: "Patients lose muscle mass during weight loss" },
  { icon: Utensils, label: "Appetite suppression leads to poor nutrition" },
  { icon: UserX, label: "Users receive no personalized guidance" },
  { icon: TriangleAlert, label: "Most people regain weight after stopping medication" },
  { icon: HeartPulse, label: "No lifestyle coaching or long-term support" },
];

export default function ProblemSection() {
  return (
    <section className="py-8 md:py-12 px-6 md:px-8 pt-4 md:pt-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium tracking-wide">
              The Real Problem
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              Weight Loss Medication Alone Isn't the Full Solution
            </h2>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl">
              Millions of people are now using GLP-1 medications for weight
              loss. But medication alone doesn't create sustainable results.
            </p>

            {/* Problem cards */}
            <div className="space-y-3">
              {problems.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-amber-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{label}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 italic border-l-2 border-amber-400 pl-4">
              Most telehealth companies only prescribe the medication — they
              don't help patients optimize results.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/assets/hero-problem.png"
              alt="Patient confused about diet, fitness, and guidance while holding medication"
              width={448}
              height={448}
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
