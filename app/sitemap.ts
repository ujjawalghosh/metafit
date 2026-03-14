import { MetadataRoute } from 'next';
import { blogs } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.joinmeta.fit';

  const staticRoutes = [
    '',
    '/blog',
    '/get-started',
    '/faq',
    '/pricing',
    '/login',
    '/privacy-policy',
    '/terms-of-use',
    '/consumer-health-data'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
