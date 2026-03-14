import { notFound } from 'next/navigation';
import { blogs } from '@/lib/blog-data';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';
import { Metadata } from 'next';
import Link from 'next/link';

// Generate static parameters for all known blog slugs
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: 'Post Not Found | MetaFit',
    };
  }

  return {
    title: `${blog.title} | MetaFit Blog`,
    description: blog.excerpt,
    alternates: {
      canonical: `https://www.joinmeta.fit/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.author],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />

      <article className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-semibold transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 text-gray-500 font-medium">
            <div className="flex items-center">
               <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">{blog.author}</span>
            </div>
            <span className="hidden md:inline-block w-1 h-1 bg-gray-300 rounded-full"></span>
            <time dateTime={blog.date}>
              {new Date(blog.date).toLocaleDateString('en-IN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </header>

        {/* Content */}
        {/* Note: Using dangerouslySetInnerHTML because we are trusting our own static HTML string in blog-data.ts */}
        <div
          className="prose prose-lg prose-blue max-w-none
                     prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900
                     prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:pb-2 prose-h2:border-gray-100
                     prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                     prose-li:text-gray-700 prose-ul:mb-6 prose-ol:mb-6
                     prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* CTA Section */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to start your weight loss journey?</h3>
          <p className="text-gray-600 mb-6">Join thousands of Indians achieving their goals with MetaFit's medical approach.</p>
          <Link href="/get-started" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
             Get Started Today
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
