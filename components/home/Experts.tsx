import Image from 'next/image';

const experts = [
  {
    name: "Dr. Melynda Barnes, MD",
    role: "Chief Medical Officer",
    desc: "Triple board-certified Obesity Medicine, Facial Plastic and Reconstructive Surgeon.",
    img: "https://imgctf--assets.ro.co/jj2wf7627pjc/5LnL1dqkvVqMJypFBfvi5M/a641c863a307a9e25c4e8afbf69ef341/expert-1.jpg?fm=webp&q=80&w=1280"
  },
  {
    name: "Dr. Raoul Manalac, MD",
    role: "Senior Director, Clinical Strategy",
    desc: "Board-certified Internal Medicine Physician.",
    img: "https://imgctf--assets.ro.co/jj2wf7627pjc/6uJSDOs1dOmE20tooRrhPk/c166b22cb2d79f017b031abb99bcf3c8/raul.jpg?fm=webp&q=80&w=1280"
  },
  {
    name: "Dr. Nitin Vaswani, MD",
    role: "Director, Clinical Strategy",
    desc: "General Surgeon and Clinical Pathologist trainee.",
    img: "https://imgctf--assets.ro.co/jj2wf7627pjc/3GFgwwkJAFj4C9aPgj7uJS/d7f23b2eb518b311eef10ae50b3b2ecc/Advisor-4.png?fm=webp&q=80&w=1280"
  }
];

export default function Experts() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold mb-6">Backed by the country’s leading health experts</h2>
            <p className="text-lg text-gray-600 mb-8">
              MetaFit's world-leading experts and advisors enable us to deliver high-quality healthcare at scale. Their combined clinical expertise guides innovative treatment plans and care delivery that make it easier for millions of patients to achieve their health goals.
            </p>
            <button className="border-b-2 border-black pb-1 font-semibold hover:text-gray-600 transition">
              Meet our advisors →
            </button>
          </div>
          
          <div className="lg:w-2/3 flex overflow-x-auto gap-6 pb-6 no-scrollbar">
            {experts.map((e, i) => (
              <div key={i} className="min-w-[300px] border rounded-2xl overflow-hidden">
                <div className="relative h-64 bg-gray-100">
                  <Image src={e.img} alt={e.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg">{e.name}</h3>
                  <p className="text-sm font-semibold text-green-700 mb-2">{e.role}</p>
                  <p className="text-sm text-gray-600">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}