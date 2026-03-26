import { MetadataRoute } from 'next';
import { blogs } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.joinmeta.fit';

  const staticRoutes = [
    { path: '',                      priority: 1.0, freq: 'weekly'  },
    { path: '/blog',                 priority: 0.9, freq: 'weekly'  },
    { path: '/get-started',          priority: 0.9, freq: 'monthly' },
    { path: '/pricing',              priority: 0.9, freq: 'monthly' },
    { path: '/learn-more',           priority: 0.8, freq: 'monthly' },
    { path: '/faq',                  priority: 0.8, freq: 'monthly' },
    { path: '/contact-us',           priority: 0.7, freq: 'monthly' },
    { path: '/weight-loss/ozempic',  priority: 0.8, freq: 'monthly' },
    { path: '/careers',              priority: 0.6, freq: 'monthly' },
    { path: '/press',                priority: 0.5, freq: 'monthly' },
    { path: '/founders-letter',      priority: 0.5, freq: 'yearly'  },
    { path: '/privacy-policy',       priority: 0.3, freq: 'yearly'  },
    { path: '/terms-of-use',         priority: 0.3, freq: 'yearly'  },
    { path: '/consumer-health-data', priority: 0.3, freq: 'yearly'  },
  ].map(({ path, priority, freq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: freq as 'weekly' | 'monthly' | 'yearly',
    priority,
  }));

  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
