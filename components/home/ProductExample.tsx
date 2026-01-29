import Link from 'next/link';

export default function ProductExample() {
  return (
    <section className="relative w-full h-[400px] lg:h-[500px] overflow-hidden bg-black">
      {/* BACKGROUND MEDIA 
        We render two videos: one for mobile, one for desktop.
        Tailwind's 'md:hidden' and 'md:block' handle the switching.
      */}
      
      {/* Mobile Video */}
      <div className="absolute inset-0 w-full h-full md:hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://imgctf--assets.ro.co/jj2wf7627pjc/6876TP6cfHw5qaAknpBy5S/0a438d631c6d00adddfbf77cf0856ce7/Hero_module_Ana_Cuba_Macro_Zepbound_Mobile_Fallback.png?fm=webp&q=80&w=1920"
          className="w-full h-full object-cover"
        >
          <source
            src="https://vidctf--assets.ro.co/jj2wf7627pjc/jdABjjKdtHsWlWzJ38M95/92e48ca010e09b70951d6f446795a630/Hero_module_Ana_Cuba_Macro_Zepbound_Mobile_Update_V2.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Desktop Video */}
      <div className="absolute inset-0 w-full h-full hidden md:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://imgctf--assets.ro.co/jj2wf7627pjc/3rCfmdJqCzRnPMZrKMDvhO/8f98f864f13dc27313677404d761144a/Hero_module_Ana_Cuba_Macro_Zepbound_Desktop_Fallback.png?fm=webp&q=80&w=3840"
          className="w-full h-full object-cover"
        >
          <source
            src="https://vidctf--assets.ro.co/jj2wf7627pjc/6JSp9VIELqDRP52QZY7X8h/e888722c5f247e8bb0aaaed768312acd/Hero_module_Ana_Cuba_Macro_Zepbound_Desktop_Update_V2.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Dark Overlay gradient to ensure text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CONTENT OVERLAY 
        Aligned to the bottom-left on mobile, center-left on desktop
      */}
      <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-end md:justify-center pb-12 md:pb-0">
        <div className="max-w-xl">
          <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
            Drop 20% of your weight and keep it off
          </h2>
          
          <div className="inline-block">
            <Link
              href="/get-started"
              className="bg-white text-[#1a1a1a] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2 group"
            >
              Start losing weight
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.9384 7.99908L8.46875 3.52941L9.52941 2.46875L15.0597 7.99908L9.52941 13.5294L8.46875 12.4688L12.9384 7.99908Z"
                  fill="#1A1A1A"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 8.75H2V7.25H14V8.75Z"
                  fill="#1A1A1A"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}