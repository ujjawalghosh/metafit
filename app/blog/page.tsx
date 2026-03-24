import { blogs } from "@/lib/blog-data";
import BlogCard from "@/components/blog/BlogCard";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/nav/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | MetaFit",
  description: "Science-Backed Insights for Your Weight Loss Journey",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = blogs;

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white px-6 py-20 text-center">
        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
          MetaFit Health Blog
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold max-w-2xl mx-auto leading-tight">
          Science-Backed Insights for Your Weight Loss Journey
        </h1>
        <p className="mt-4 text-emerald-100 text-lg max-w-xl mx-auto">
          Expert advice tailored for the Indian body, lifestyle, and mindset.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-14 space-y-14">

        {/* Featured Post */}
        <section>
          <h2 className="text-xs font-bold tracking-widest uppercase text-emerald-600 mb-6">
            Featured Article
          </h2>
          <a href={`/blog/${featured.slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white hover:shadow-2xl transition-shadow duration-300">
              <div className="relative overflow-hidden h-72 md:h-auto">
                <img
                  src={featured.imageUrl}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center gap-4">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>{new Date(featured.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight group-hover:text-emerald-600 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-500 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-1 text-emerald-600 font-semibold group-hover:gap-2 transition-all">
                  Read article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </section>

        {/* All Posts Grid */}
        <section>
          <h2 className="text-xs font-bold tracking-widest uppercase text-emerald-600 mb-6">
            All Articles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
