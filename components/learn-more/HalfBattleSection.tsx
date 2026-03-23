import { Apple, Dumbbell, CalendarCheck, Brain } from "lucide-react";

const cards = [
  {
    icon: Apple,
    title: "Nutrition Balance",
    desc: "Without guidance, patients skip meals or eat poorly, losing essential nutrients.",
  },
  {
    icon: Dumbbell,
    title: "Muscle Preservation",
    desc: "Up to 40% of weight lost on GLP-1 can be muscle mass without resistance training.",
  },
  {
    icon: CalendarCheck,
    title: "Exercise Planning",
    desc: "No structured fitness plan leads to sedentary weight loss and metabolic slowdown.",
  },
  {
    icon: Brain,
    title: "Long-term Habits",
    desc: "Without behavioral coaching, most patients regain weight within 12 months.",
  },
];

export default function HalfBattleSection() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            GLP-1 Medications Reduce Cravings — But That's Only Half the Battle
          </h2>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
            Medication helps control hunger, but without proper support patients
            struggle with critical aspects of sustainable weight loss.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
