import Image from "next/image";
import { Bot, Salad, Dumbbell, Stethoscope } from "lucide-react";
import { MessageCircle, BarChart2, Activity, Heart, Beef, ClipboardCheck, Pill, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets: { icon: LucideIcon; label: string }[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

const features: Feature[] = [
  {
    icon: Bot,
    title: "AI Health Coach",
    desc: "24/7 AI assistant that guides users through their weight loss journey with personalized, evidence-based support.",
    bullets: [
      { icon: MessageCircle, label: "Answers health and lifestyle questions" },
      { icon: BarChart2, label: "Tracks progress in real-time" },
      { icon: Activity, label: "Provides personalized insights" },
    ],
    image: "/assets/feature-ai-coach.jpg",
    imageAlt: "AI Health Coach",
  },
  {
    icon: Salad,
    title: "Personalized Nutrition",
    desc: "Smart meal recommendations specifically designed for GLP-1 users to maintain energy and preserve muscle.",
    bullets: [
      { icon: Heart, label: "Balanced nutrient intake" },
      { icon: Beef, label: "Protein optimization for muscle preservation" },
      { icon: Salad, label: "Meal suggestions based on preferences" },
    ],
    image: "/assets/feature-nutrition.jpg",
    imageAlt: "Personalized Nutrition",
    reverse: true,
  },
  {
    icon: Dumbbell,
    title: "Exercise & Muscle Preservation",
    desc: "Custom workout guidance designed to prevent muscle loss — the #1 side effect of rapid weight loss.",
    bullets: [
      { icon: Dumbbell, label: "Strength-focused routines" },
      { icon: Activity, label: "Adaptive fitness plans" },
      { icon: BarChart2, label: "Progress tracking" },
    ],
    image: "/assets/feature-exercise.jpg",
    imageAlt: "Exercise & Muscle Preservation",
  },
  {
    icon: Stethoscope,
    title: "Doctor & Expert Support",
    desc: "Access to qualified healthcare professionals who specialize in GLP-1 medication management.",
    bullets: [
      { icon: ClipboardCheck, label: "Doctor consultations" },
      { icon: Pill, label: "Treatment guidance" },
      { icon: Settings, label: "Medication optimization" },
    ],
    image: "/assets/feature-doctor.jpg",
    imageAlt: "Doctor & Expert Support",
    reverse: true,
  },
];

export default function HowItSolvesSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            How MetaFit Solves the Problem
          </h2>
        </div>

        <div className="space-y-24">
          {features.map(({ icon: Icon, title, desc, bullets, image, imageAlt, reverse }) => (
            <div key={title}>
              <div
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div className={`space-y-5 ${reverse ? "lg:order-2" : ""}`}>
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                    {title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{desc}</p>
                  <div className="space-y-3 pt-2">
                    {bullets.map(({ icon: BIcon, label }) => (
                      <div key={label} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                          <BIcon className="w-4 h-4 text-amber-500" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`rounded-2xl overflow-hidden min-h-[280px] ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={image}
                    alt={imageAlt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
