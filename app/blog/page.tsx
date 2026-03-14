import Link from 'next/link';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';
import { blogs } from '@/lib/blog-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | MetaFit Weight Loss & GLP-1 Resources for India',
  description: 'Read the latest insights on weight loss, GLP-1 treatments, and holistic health tailored for Indian customers. Discover how MetaFit can help you achieve your goals.',
  alternates: {
    canonical: 'https://www.joinmeta.fit/blog',
  },
};

export default function BlogListingPage() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans text-[#1a1a1a]">
      <Navbar />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">The MetaFit Blog</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted resource for medical weight loss, GLP-1 insights, and healthy living in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              {blog.imageUrl && (
                <div className="w-full h-48 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-gray-500 mb-3 flex items-center justify-between">
                  <span>{new Date(blog.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">{blog.author}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center text-blue-600 font-semibold text-sm group">
                    Read More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{blog.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
