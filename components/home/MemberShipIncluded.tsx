import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    text: "Access to FDA-approved GLP-1 medications",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M19.17 18.44l-.91-1.58c.35-.67.4-1.31.09-1.84L11.35 2.9s0 0 0 0c-.35-.61-1.06-.91-1.99-.85-.75.04-1.59.32-2.39.78-.79.46-1.46 1.05-1.87 1.68-.51.78-.6 1.54-.25 2.15l7 12.12c.3.53.89.82 1.64.85l.91 1.58c.28.49.84.77 1.53.77h.03c.56,0 1.18-.19 1.76-.52.57-.33 1.04-.78 1.33-1.26.36-.61.4-1.24.11-1.74ZM6.36 5.33c.28-.43.78-.87 1.37-1.2s1.22-.55 1.73-.58c.04 0 .08 0 .12 0 .31 0 .46.08.48.11h0s0 .24-.21.57c-.28.43-.78.87-1.37 1.21-.59.34-1.22.55-1.73.58-.39.02-.58-.07-.6-.11-.02-.03,0-.24.21-.57ZM7.06 7.47c.69-.08 1.45-.34 2.16-.75.72-.41 1.32-.94 1.73-1.5l6.09 10.55s0 .24-.21.57c-.28.43-.78.87-1.37 1.21-.59.34-1.22.55-1.73.58-.39.02-.58-.07-.6-.11L7.06 7.47ZM16.97 20.14c-.66.38-1.19.35-1.27.3l-.62-1.08c.38-.13.77-.3 1.14-.52.38-.22.72-.47 1.02-.73l.61 1.05c.01.13-.23.6-.88.98Z" fill="#1a1a1a"/>
      </svg>
    )
  },
  {
    text: "Dedicated insurance concierge",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M7.5 10.25c-.41 0-.75.34-.75.75s.34.75.75.75h8c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H7.5Z" fill="#1a1a1a"/>
        <path d="M10.93 15.25h-3.43c-.41 0-.75.34-.75.75s.34.75.75.75h3.43c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z" fill="#1a1a1a"/>
        <path d="M10.5 21.25h-5.5c-.69,0-1.25-.56-1.25-1.25V5.5c0-.69.56-1.25,1.25-1.25h1.89c.31.87 1.14 1.5 2.11 1.5h5c.98,0 1.8-.63 2.11-1.5h1.89c.69,0,1.25.56,1.25,1.25v7c0 .41.34.75.75.75s.75-.34.75-.75v-7c0-1.52-1.23-2.75-2.75-2.75h-1.89c-.31-.87-1.14-1.5-2.11-1.5h-5c-.98,0-1.8.63-2.11 1.5h-1.89c-1.52,0-2.75,1.23-2.75,2.75v14.5c0,1.52,1.23,2.75,2.75,2.75h5.5c.41,0,.75-.34.75-.75s-.34-.75-.75-.75ZM9 2.75h5c.41,0,.75.34.75.75s-.34.75-.75.75h-5c-.41,0-.75-.34-.75-.75s.34-.75.75-.75Z" fill="#1a1a1a"/>
        <path d="M21.48 15.42c-.32-.26-.79-.22-1.06.1l-4.47 5.37-1.92-1.92c-.29-.29-.77-.29-1.06,0s-.29.77,0,1.06l2.5 2.5c.14.14.33.22.53.22.01,0,.02,0,.03,0,.21,0,.41-.11.54-.27l5-6c.27-.32.22-.79-.1-1.06Z" fill="#1a1a1a"/>
      </svg>
    )
  },
  {
    text: "Unlimited provider messaging",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 1.25C6.07 1.25 1.25 6.07 1.25 12c0 1.58.38 3.07 1.15 4.57.18.35.23.73.13 1.07l-.71 2.37c-.19.62-.02 1.28.44 1.74.46.46 1.12.62 1.74.44l2.37-.71c.33-.1.71-.05 1.07.13 1.5.77 2.99 1.15 4.57 1.15 5.93 0 10.75-4.82 10.75-10.75S17.93,1.25,12,1.25ZM12 21.25c-1.35 0-2.58-.31-3.88-.98-.45-.23-.92-.35-1.39-.35-.27,0-.53.04-.79.12l-2.37.71c-.12.04-.21-.02-.25-.06-.04-.04-.1-.12-.06-.25l.71-2.37c.21-.71.13-1.48-.23-2.19-.67-1.3-.98-2.53-.98-3.88C2.75 6.9 6.9 2.75 12 2.75s9.25 4.15 9.25 9.25-4.15,9.25-9.25 9.25Z" fill="#1a1a1a"/>
        <path d="M15.43 10.66l-.96 1.13c-.27.31-.61.47-.96.45-.37-.03-.72-.26-.96-.64-.51-.82-1.3-1.31-2.19-1.35-.87-.05-1.69.36-2.25 1.1l-.7.91c-.25.33-.19.8.14 1.05.33.25.8.19 1.05-.14l.7-.92c.27-.35.63-.52.99-.51.38.02.74.25.99.64.49.79,1.27,1.28,2.12,1.35.06,0,.12,0,.19,0,.77,0,1.5-.35,2.03-.98l.96-1.13c.27-.32.23-.79-.09-1.06-.32-.27-.79-.23-1.06.09Z" fill="#1a1a1a"/>
      </svg>
    )
  },
  {
    text: "Weight tracking and dose logging",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M18 5.25h-.56l.14-1c.07-.5-.08-1.01-.41-1.39-.33-.38-.81-.6-1.32-.6h-7.69c-.51 0-.99.22-1.32.6-.33.38-.48.89-.41 1.39l.14 1h-.56c-1.52 0-2.75 1.23-2.75 2.75v11c0 1.52 1.23 2.75 2.75 2.75h12c1.52 0 2.75-1.23 2.75-2.75v-11c0-1.52-1.23-2.75-2.75-2.75ZM7.96 3.84s.09-.09.19-.09h7.69c.1 0 .16.05.19.09s.07.1.06.2l-.74 5.21h-2.86l.73-2.54c.11-.4-.12-.81-.52-.93-.4-.11-.81.12-.93.52l-.84 2.96h-2.28l-.74-5.21c-.01-.1.03-.17.06-.2ZM19.25 19c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25v-11c0-.69.56-1.25,1.25-1.25h.78l.42 2.93c.09.61.62 1.07 1.24 1.07h7.13c.62 0 1.15-.46 1.24-1.07l.42-2.93h.78c.69 0 1.25.56 1.25 1.25v11Z" fill="#1a1a1a"/>
        <path d="M13.5 16.25h-3c-.41 0-.75.34-.75.75s.34.75.75.75h3c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z" fill="#1a1a1a"/>
      </svg>
    )
  },
  {
    text: "1:1 health coaching",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M11.61 12.48c.32.14.66.21 1.01.21s.69-.07 1.01-.21c3.18-1.41 5.14-3.85 5.24-6.51.07-1.81-.74-3.39-2.12-4.14-1.71-.92-3.23-.4-4.13.23-.89-.64-2.42-1.16-4.13-.23-1.38.75-2.19 2.33-2.12 4.14.1 2.66 2.06 5.1 5.24 6.51ZM9.2 3.15c.43-.24.83-.32 1.19-.32.95 0 1.58.63 1.67.73.14.16.34.24.55.25.21-.02.41-.09.56-.24.12-.13 1.26-1.28 2.86-.41.86.46 1.38 1.55 1.33 2.76-.08 2.08-1.71 4.02-4.35 5.2-.25.11-.54.11-.79 0-2.64-1.17-4.27-3.12-4.35-5.2-.05-1.21.48-2.29 1.33-2.76Z" fill="#1a1a1a"/>
        <path d="M20.51 16.55c-.54-1.35-2.04-2.05-3.42-1.59l-3.66 1.22c-.54-.84-1.54-1.48-2.82-1.48h-.81l-1.88-1.03c-.4-.22-.86-.34-1.33-.34h-2.49c-.41 0-.75.34-.75.75s.34.75.75.75h2.49c.21 0 .42.05.6.15l2.05 1.13c.11.06.23.09.36.09h1c.79 0 1.36.43 1.61.88l-2.03.68c-.05.02-.11.02-.16 0l-2.68-.89c-.4-.13-.82.08-.95.47-.13.39.08.82.47.95l2.68.89c.36.12.75.12 1.11 0l2.68-.89c.29-.1.5-.36.51-.67l3.7-1.23c.63-.21 1.31.11 1.56.72.02.06,0 .13-.06.16l-7.59 3.79c-.28.14-.6.17-.9.08l-6.25-1.77c-.4-.11-.81.12-.93.52-.11.4.12.81.52.93l6.25,1.77c.25.07.5.1.75.1.42,0,.84-.1,1.23-.29l7.59-3.79c.75-.38,1.09-1.28.78-2.06Z" fill="#1a1a1a"/>
      </svg>
    )
  }
];

export default function MemberShipIncluded() {
  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Left: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] lg:aspect-square w-full rounded-3xl overflow-hidden bg-gray-100">
              <Image 
                src="https://imgctf--assets.ro.co/jj2wf7627pjc/2CCt5SbNSzp62IHG8RgQ5y/24d652d05ffd6cf37ba1378fd95f0b72/Ana_Cuba_Montanya_Ozempic.png?fm=webp&q=80&w=1280" 
                alt="MetaFit membership benefits" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Content List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.1] tracking-tight text-[#1a1a1a]">
                What's included in the MetaFit Body membership?
              </h2>
            </div>

            <ul className="space-y-6 mb-10">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-5 group">
                  <div className="bg-gray-100 p-3 rounded-full group-hover:bg-[#f4f2ed] transition-colors flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex items-center h-full pt-2">
                    <p className="font-semibold text-lg lg:text-xl text-[#1a1a1a] leading-tight">{feature.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex gap-2">
               <Link 
                 href="/weight-loss/ozempic"
                 className="inline-flex items-center justify-center bg-black text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-gray-800 transition w-full md:w-auto"
               >
                 Get started
               </Link>
               <Link 
                 href="/weight-loss/ozempic"
                 className="inline-flex items-center justify-center border border-gray-300 font-bold text-lg px-10 py-4 rounded-full hover:bg-gray-50 transition w-full md:w-auto"
               >
                 Learn more
               </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}