import Image from 'next/image';

const features = [
  {
    title: "Chat with a provider 24/7",
    image: "https://imgctf--assets.ro.co/jj2wf7627pjc/7iPIuS36H0Y4laUarcz5rm/00e5ada54660c31b0b92747a7507e33c/Ana_Cuba_Kassi_portrait_message.png?fm=webp&q=80&w=1280",
    alt: "Patient chatting on phone"
  },
  {
    title: "Manage goals in one place",
    image: "https://imgctf--assets.ro.co/jj2wf7627pjc/1m18L1b4ofp7qfSJqO3IOH/0df959d84e19a0d7878c0bef797f9409/Jenna-UI-stock-weight-loss.png?fm=webp&q=80&w=1280",
    alt: "MetaFit app interface showing weight loss goals"
  },
  {
    title: "Clinically-proven, FDA-approved treatments",
    image: "https://imgctf--assets.ro.co/jj2wf7627pjc/2VvoQn4aalvbZhrWgqrjfM/46e68956ea30c49d080188a9d800c1fa/Zepbound_Ozempic_Wegovy_pen_bouquet.png?fm=webp&q=80&w=1280",
    alt: "Bouquet of GLP-1 medications"
  },
  {
    title: "Fast, discreet shipping",
    image: "https://imgctf--assets.ro.co/jj2wf7627pjc/3Wh2bqVooQ1LrGxUgU8yxy/d62738370cd10a4d43b30d121d000f5c/fast.jpg?fm=webp&q=80&w=1280",
    alt: "Person holding shipping box"
  }
];

export default function ValueProps() {
  return (
    <section className="bg-gray-50 py-6 lg:py-8 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left: Sticky Header */}

          <div className="lg:sticky lg:top-32">
            <h2 className="text-xl pb-4 md:text-2xl lg:text-4xl font-bold leading-[1.1] tracking-tight text-[#1a1a1a]">
              100% online,<br />
              100% convenient
            </h2>

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="snap-center flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] relative h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden group"
                >
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Text Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="text-white text-3xl font-bold leading-tight tracking-tight">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}