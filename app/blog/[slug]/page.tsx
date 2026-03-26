// app/blog/[slug]/page.tsx

import { blogs } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogCard from "@/components/blog/BlogCard";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/nav/Footer";
import { Metadata } from "next";
import Image from "next/image";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `/blog/${post.slug}`,
      images: [
        {
          url: post.imageUrl,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ await params first

  const post = blogs.find((b) => b.slug === slug);
  if (!post) notFound();

  const related = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            image: post.imageUrl,
            datePublished: post.date,
            author: {
              '@type': 'Person',
              name: post.author,
            },
            publisher: {
              '@type': 'Organization',
              name: 'MetaFit',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.joinmeta.fit/logo.png',
              },
            },
            url: `https://www.joinmeta.fit/blog/${post.slug}`,
          }),
        }}
      />
      {/* Hero */}
      <div className="relative h-80 md:h-[480px] overflow-hidden">
        <Image src={post.imageUrl} alt={post.title} fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14 max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-4 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Meta bar */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs">
              {post.author.charAt(0)}
            </div>
            <span className="font-medium text-gray-700">{post.author}</span>
            <span className="text-gray-300">•</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric", month: "long", year: "numeric",
              })}
            </span>
          </div>
          <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 py-14">
        <div className="border-l-4 border-emerald-500 bg-emerald-50 rounded-r-xl px-6 py-4 mb-10 text-emerald-800 text-lg font-medium italic">
          {post.excerpt}
        </div>

        <div
          className="
            prose prose-lg max-w-none
            prose-headings:font-extrabold prose-headings:text-gray-900 prose-headings:mt-10 prose-headings:mb-4
            prose-h2:text-2xl prose-h2:border-b prose-h2:border-gray-100 prose-h2:pb-3
            prose-p:text-gray-600 prose-p:leading-relaxed
            prose-li:text-gray-600 prose-li:leading-relaxed
            prose-strong:text-gray-800
            prose-blockquote:border-l-4 prose-blockquote:border-emerald-400 prose-blockquote:bg-gray-50 prose-blockquote:rounded-r-lg prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:text-gray-700 prose-blockquote:not-italic
            prose-ol:space-y-2 prose-ul:space-y-2
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
            Ready to Start Your Weight Loss Journey?
          </h3>
          <p className="text-emerald-100 mb-6 max-w-md mx-auto">
            Get a personalized medical assessment from MetaFit's expert doctors — tailored for the Indian lifestyle.
          </p>
          <a
            href="/get-started"
            className="inline-block bg-white text-emerald-700 font-bold px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Book a Free Consultation
          </a>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-xs font-bold tracking-widest uppercase text-emerald-600 mb-6">
            More Articles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
}
