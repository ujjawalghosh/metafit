import Image from "next/image";

const screens = [
  { src: "/assets/screen-food-track.png", label: "Food Tracking", rotate: "-rotate-6" },
  { src: "/assets/screen-food-insights.png", label: "Food Insights", rotate: "-rotate-3" },
  { src: "/assets/screen-home.png", label: "Dashboard", rotate: "rotate-0" },
  { src: "/assets/screen-steps.png", label: "Step Tracker", rotate: "rotate-3" },
  { src: "/assets/screen-my-care.png", label: "My Care", rotate: "rotate-6" },
];

export default function IntroducingSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
            Introducing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            MetaFit: The Operating System for GLP-1 Weight Loss
          </h2>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
            MetaFit helps patients maximize the results of GLP-1 medications
            with a complete AI-powered support system — from nutrition and
            exercise to doctor access and progress tracking.
          </p>
        </div>

        {/* Phone screens fan */}
        <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
          {screens.map(({ src, label, rotate }, i) => (
            <div
              key={label}
              className={`relative flex-shrink-0 w-36 sm:w-44 md:w-52 lg:w-56 transition-transform duration-500 hover:scale-105 hover:z-40 ${rotate}`}
              style={{ zIndex: i === 2 ? 30 : i === 1 || i === 3 ? 20 : 10 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-50">
                <Image
                  src={src}
                  alt={`MetaFit ${label} screen`}
                  width={224}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-xs md:text-sm text-gray-500 mt-3 font-medium">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
