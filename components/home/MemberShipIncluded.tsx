import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const features = [
  {
    label: "Medications",
    text: "Access to FDA-approved GLP-1 medications",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M19.17 18.44l-.91-1.58c.35-.67.4-1.31.09-1.84L11.35 2.9s0 0 0 0c-.35-.61-1.06-.91-1.99-.85-.75.04-1.59.32-2.39.78-.79.46-1.46 1.05-1.87 1.68-.51.78-.6 1.54-.25 2.15l7 12.12c.3.53.89.82 1.64.85l.91 1.58c.28.49.84.77 1.53.77h.03c.56,0 1.18-.19 1.76-.52.57-.33 1.04-.78 1.33-1.26.36-.61.4-1.24.11-1.74ZM6.36 5.33c.28-.43.78-.87 1.37-1.2s1.22-.55 1.73-.58c.04 0 .08 0 .12 0 .31 0 .46.08.48.11h0s0 .24-.21.57c-.28.43-.78.87-1.37 1.21-.59.34-1.22.55-1.73.58-.39.02-.58-.07-.6-.11-.02-.03,0-.24.21-.57ZM7.06 7.47c.69-.08 1.45-.34 2.16-.75.72-.41 1.32-.94 1.73-1.5l6.09 10.55s0 .24-.21.57c-.28.43-.78.87-1.37 1.21-.59.34-1.22.55-1.73.58-.39.02-.58-.07-.6-.11L7.06 7.47ZM16.97 20.14c-.66.38-1.19.35-1.27.3l-.62-1.08c.38-.13.77-.3 1.14-.52.38-.22.72-.47 1.02-.73l.61 1.05c.01.13-.23.6-.88.98Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Support",
    text: "AI-powered app with 24/7 health coaching & guidance",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M8 2v4M16 2v4M12 2v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="9" cy="13" r="1.2" fill="currentColor" />
        <circle cx="15" cy="13" r="1.2" fill="currentColor" />
        <path d="M2 14h1M21 14h1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 17h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },

  {
    label: "Tracking",
    text: "Weight tracking and dose logging",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M18 5.25h-.56l.14-1c.07-.5-.08-1.01-.41-1.39-.33-.38-.81-.6-1.32-.6h-7.69c-.51 0-.99.22-1.32.6-.33.38-.48.89-.41 1.39l.14 1h-.56c-1.52 0-2.75 1.23-2.75 2.75v11c0 1.52 1.23 2.75 2.75 2.75h12c1.52 0 2.75-1.23 2.75-2.75v-11c0-1.52-1.23-2.75-2.75-2.75ZM7.96 3.84s.09-.09.19-.09h7.69c.1 0 .16.05.19.09s.07.1.06.2l-.74 5.21h-2.86l.73-2.54c.11-.4-.12-.81-.52-.93-.4-.11-.81.12-.93.52l-.84 2.96h-2.28l-.74-5.21c-.01-.1.03-.17.06-.2ZM19.25 19c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25v-11c0-.69.56-1.25,1.25-1.25h.78l.42 2.93c.09.61.62 1.07 1.24 1.07h7.13c.62 0 1.15-.46 1.24-1.07l.42-2.93h.78c.69 0 1.25.56 1.25 1.25v11Z" fill="currentColor" />
        <path d="M13.5 16.25h-3c-.41 0-.75.34-.75.75s.34.75.75.75h3c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Coaching",
    text: "1:1 health & diet coaching",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M11.61 12.48c.32.14.66.21 1.01.21s.69-.07 1.01-.21c3.18-1.41 5.14-3.85 5.24-6.51.07-1.81-.74-3.39-2.12-4.14-1.71-.92-3.23-.4-4.13.23-.89-.64-2.42-1.16-4.13-.23-1.38.75-2.19 2.33-2.12 4.14.1 2.66 2.06 5.1 5.24 6.51ZM9.2 3.15c.43-.24.83-.32 1.19-.32.95 0 1.58.63 1.67.73.14.16.34.24.55.25.21-.02.41-.09.56-.24.12-.13 1.26-1.28 2.86-.41.86.46 1.38 1.55 1.33 2.76-.08 2.08-1.71 4.02-4.35 5.2-.25.11-.54.11-.79 0-2.64-1.17-4.27-3.12-4.35-5.2-.05-1.21.48-2.29 1.33-2.76Z" fill="currentColor" />
        <path d="M20.51 16.55c-.54-1.35-2.04-2.05-3.42-1.59l-3.66 1.22c-.54-.84-1.54-1.48-2.82-1.48h-.81l-1.88-1.03c-.4-.22-.86-.34-1.33-.34h-2.49c-.41 0-.75.34-.75.75s.34.75.75.75h2.49c.21 0 .42.05.6.15l2.05 1.13c.11.06.23.09.36.09h1c.79 0 1.36.43 1.61.88l-2.03.68c-.05.02-.11.02-.16 0l-2.68-.89c-.4-.13-.82.08-.95.47-.13.39.08.82.47.95l2.68.89c.36.12.75.12 1.11 0l2.68-.89c.29-.1.5-.36.51-.67l3.7-1.23c.63-.21 1.31.11 1.56.72.02.06,0 .13-.06.16l-7.59 3.79c-.28.14-.6.17-.9.08l-6.25-1.77c-.4-.11-.81.12-.93.52-.11.4.12.81.52.93l6.25,1.77c.25.07.5.1.75.1.42,0,.84-.1,1.23-.29l7.59-3.79c.75-.38,1.09-1.28.78-2.06Z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function MembershipIncluded() {
  return (
    <section className="bg-white py-16 lg:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* ── Left: Image ── */}
          <div className="w-full lg:w-[48%] flex-shrink-0">
            <div className="relative w-full aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 shadow-xl">
              <Image
                src="https://imgctf--assets.ro.co/jj2wf7627pjc/2CCt5SbNSzp62IHG8RgQ5y/24d652d05ffd6cf37ba1378fd95f0b72/Ana_Cuba_Montanya_Ozempic.png?fm=webp&q=80&w=1280"
                alt="MetaFit membership benefits"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />

              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <span className="text-lg">🎯</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Average result</p>
                    <p className="text-sm font-bold text-gray-900">
                      15% body weight lost in 6 months
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="w-full lg:w-[52%] flex flex-col justify-center">

            {/* Badge */}
            <div className="mb-5">
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                All-in-one membership
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-4">
              Everything you need,{" "}
              <span className="text-green-600">in one place</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              MetaFit pairs GLP-1 medications with an AI-powered app and real clinical
              support — so your results last long after treatment.
            </p>


            {/* Feature list */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-green-50 hover:border-green-200 transition-all duration-200 group"
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm text-gray-700 group-hover:text-green-600 group-hover:border-green-200 transition-colors">
                    {feature.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {feature.label}
                    </span>
                    <p className="text-base font-semibold text-gray-900 leading-snug">
                      {feature.text}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowRightIcon className="w-4 h-4 text-gray-300 group-hover:text-green-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-bold text-base px-8 py-4 rounded-full hover:bg-gray-700 transition-colors w-full sm:w-auto"
              >
                Get started
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/weight-loss/ozempic"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-900 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-50 transition-colors w-full sm:w-auto"
              >
                Learn more
              </Link>
            </div>

            {/* Trust line */}
            <p className="mt-5 text-sm text-gray-400 flex items-center gap-1.5">
              <span>✓</span> No commitment · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
