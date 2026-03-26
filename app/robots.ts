import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/dashboard/', '/login', '/quiz', '/create-profile'],
    },
    sitemap: 'https://www.joinmeta.fit/sitemap.xml',
  };
}
