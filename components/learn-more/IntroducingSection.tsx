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
    <section className="overflow-hidden">

      {/* TOP — white bg, girl image */}
      <div className="bg-white -mb-30 md:-mb-43 px-6 md:px-8">
        <div className="max-w-6xl mx-auto flex justify-center">
          <Image
            src="/assets/girl-introducing.png"
            alt="Introducing MetaFit"
            width={480}
            height={520}
            className="w-72 sm:w-80 md:w-96 lg:w-[440px] h-auto object-contain relative z-10 mb-[-60px] md:mb-[-80px] lg:mb-[-100px]"
            priority
          />
        </div>
        {/* Ledge line */}
        <div className="h-[2px] bg-gray-100 w-full" />
      </div>

      {/* BOTTOM — cream bg, text + phones */}
      <div className="bg-[#F5F5EF] px-6 md:px-8 pt-16 md:pt-20 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">

          <div className="text-center space-y-5 mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-medium tracking-wide">
              Introducing
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto">
              MetaFit: The Operating System for GLP-1 Weight Loss
            </h2>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
              MetaFit helps patients maximize the results of GLP-1 medications
              with a complete AI-powered support system — from nutrition and
              exercise to doctor access and progress tracking.
            </p>
          </div>

          {/* Phone screens fan */}
          <div className="flex items-end justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {screens.map(({ src, label, rotate }, i) => (
              <div
                key={label}
                className={`relative flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 transition-transform duration-500 hover:scale-105 hover:z-40 ${rotate}`}
                style={{ zIndex: i === 2 ? 30 : i === 1 || i === 3 ? 20 : 10 }}
              >
                <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-white/60 bg-gray-900">
                  <Image
                    src={src}
                    alt={`MetaFit ${label} screen`}
                    width={224}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-xs md:text-sm text-gray-400 mt-3 font-medium">
                  {label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
