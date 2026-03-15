import { Sparkles, Shield, TrendingUp } from "lucide-react";

const outcomes = [
  {
    icon: Sparkles,
    title: "Sustainable Habits",
    desc: "Build routines that last beyond medication.",
  },
  {
    icon: Shield,
    title: "Muscle Health",
    desc: "Protect lean mass throughout your journey.",
  },
  {
    icon: TrendingUp,
    title: "Metabolic Health",
    desc: "Achieve lasting metabolic optimization.",
  },
];

export default function OutcomesSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            From Prescription to Lifelong Health Optimization
          </h2>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
            MetaFit isn't just about weight loss. It's about building
            sustainable habits, protecting muscle health, and helping patients
            achieve lasting metabolic health.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {outcomes.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="text-center p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-5">
                <Icon className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
