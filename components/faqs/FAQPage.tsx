"use client";

import { useState } from "react";
import { faqCategories } from "./FAQData";
import FAQAccordion from "./FAQAccordation";
import Link from "next/link";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("about");

  const current = faqCategories.find((c) => c.id === activeCategory)!;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-100 py-16 px-6 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
          Help Center
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Everything you need to know about MetaFit, GLP-1 medications, and
          your weight loss journey.
        </p>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 z-30 bg-white border-b border-gray-100 px-6">
        <div className="max-w-4xl mx-auto flex gap-1 overflow-x-auto scrollbar-hide py-3">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat.id
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {current.label}
          </h2>
          <FAQAccordion faqs={current.faqs} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-green-600 py-14 px-6 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Still have questions?
        </h2>
        <p className="text-green-100 mb-6 max-w-xl mx-auto">
          Our team is here to help. Reach out and we'll get back to you quickly.
        </p>
        <Link href="/contact-us" className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
          Contact Us
        </Link>
      </section>
    </main>
  );
}
