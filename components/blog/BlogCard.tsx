import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden h-52">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
            {post.readTime}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1 gap-3">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{post.author}</span>
          </div>

          <h3 className="text-gray-900 font-bold text-lg leading-snug group-hover:text-emerald-600 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-1 text-emerald-600 text-sm font-semibold mt-1 group-hover:gap-2 transition-all">
            Read article
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
