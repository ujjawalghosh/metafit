import Image from "next/image";

export default function EcosystemSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            The MetaFit Ecosystem
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Every component works together to deliver results that medication
            alone cannot achieve.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/assets/ecosystem-diagram.png"
            alt="MetaFit ecosystem diagram connecting medication, AI coach, nutrition, exercise, doctor support, and progress tracking"
            width={576}
            height={400}
            className="w-full max-w-xl rounded-2xl"
          />
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-green-100 rounded-full px-8 py-4">
            <span className="text-lg font-semibold text-green-700">
              Medication + Lifestyle + AI Guidance = Sustainable Results
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
