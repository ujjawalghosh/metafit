import Image from 'next/image';

const products = [
  {
    title: "Wegovy® pill",
    sub: "semaglutide",
    tag: "Supply available",
    img: "https://imgctf--assets.ro.co/jj2wf7627pjc/45M55aFmoecgh8IVsXClT8/759e42874006013a232f71a7ddf1827e/Wegovy_pill_homepage.jpg?fm=webp&q=80&w=1280"
  },
  {
    title: "Zepbound® vials",
    sub: "tirzepatide",
    tag: "In stock via LillyDirect",
    img: "https://imgctf--assets.ro.co/jj2wf7627pjc/711gYKl1OuLF02T23Pff80/b6c48da53895ae20b07357575e47ebe3/Zepbound_vial_homepage.jpg?fm=webp&q=80&w=1280"
  },
  {
    title: "Ozempic®",
    sub: "semaglutide",
    tag: "Supply available",
    img: "https://imgctf--assets.ro.co/jj2wf7627pjc/2CCt5SbNSzp62IHG8RgQ5y/24d652d05ffd6cf37ba1378fd95f0b72/Ana_Cuba_Montanya_Ozempic.png?fm=webp&q=80&w=1280"
  },
  {
    title: "Wegovy® pen",
    sub: "semaglutide",
    tag: "Supply available",
    img: "https://imgctf--assets.ro.co/jj2wf7627pjc/66w7FC8LSlIXxq76jeJCAY/41e0599a1caf6a4632818e41893719e7/Wegovy_pen_homepage.jpg?fm=webp&q=80&w=1280"
  },
  {
    title: "Zepbound®",
    sub: "tirzepatide",
    tag: "Supply available",
    img: "https://imgctf--assets.ro.co/jj2wf7627pjc/54kXKqVdTzTE6pxbhEk9Dr/6dee51b4fb43745029999d89d3f49477/Ana_Cuba_Kassi_Zepbound.png?fm=webp&q=80&w=1280"
  }
];

export default function ProductCarousel() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
           <div className="h-10 w-1 rounded-full bg-black"></div>
           <h2 className="text-3xl font-bold">Drop 20% of your weight and keep it off</h2>
        </div>

        {/* Scroll Container */}
        <div className="flex overflow-x-auto gap-4 pb-8 no-scrollbar snap-x">
          {products.map((p, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[360px] snap-start border border-gray-200 rounded-2xl p-4 flex flex-col hover:shadow-lg transition cursor-pointer">
              <div className="relative h-64 w-full bg-gray-100 rounded-xl mb-4 overflow-hidden">
                <Image src={p.img} alt={p.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
                  <span className="h-2 w-2 bg-green-600 rounded-full"></span>
                  {p.tag}
                </div>
              </div>
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-gray-500 mb-6">{p.sub}</p>
              <div className="mt-auto flex gap-2">
                <button className="bg-black text-white px-6 py-3 rounded-full font-semibold text-sm flex-1 hover:bg-gray-800 transition">
                  Get started
                </button>
                <button className="border border-gray-300 px-6 py-3 rounded-full font-semibold text-sm flex-1 hover:bg-gray-50 transition">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-xs text-gray-500 mt-4 max-w-3xl">
          Ozempic treats type 2 diabetes but may be prescribed off-label for weight loss, if appropriate.
          <br/><strong>Safety info:</strong> GLP-1 medications may have serious side effects, including possible thyroid tumors.
        </p>
      </div>
    </section>
  );
}