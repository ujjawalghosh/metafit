import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const BASE_URL = 'https://www.joinmeta.fit';
const DEFAULT_OG_IMAGE = `${BASE_URL}/assets/og-default.png`;

export const metadata: Metadata = {
  title: {
    template: '%s | MetaFit',
    default: 'MetaFit | Medical Weight Loss in India',
  },
  description:
    'MetaFit is a direct-to-patient healthcare company providing GLP-1 based medical weight loss programs — affordable, science-backed, and tailored for the Indian lifestyle.',
  metadataBase: new URL(BASE_URL),
  keywords: [
    'medical weight loss India',
    'GLP-1 India',
    'Ozempic India',
    'MetaFit',
    'weight loss program India',
    'semaglutide India',
  ],
  openGraph: {
    title: 'MetaFit | Medical Weight Loss in India',
    description:
      'Direct-to-patient GLP-1 weight loss programs — affordable, science-backed, and tailored for the Indian lifestyle.',
    url: BASE_URL,
    siteName: 'MetaFit',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'MetaFit — Medical Weight Loss in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetaFit | Medical Weight Loss in India',
    description:
      'Direct-to-patient GLP-1 weight loss programs — affordable, science-backed, and tailored for the Indian lifestyle.',
    images: [DEFAULT_OG_IMAGE],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></script>
        {/* JSON-LD: Organization + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'MetaFit',
                url: BASE_URL,
                logo: `${BASE_URL}/logo.png`,
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: 'care@joinmeta.fit',
                  contactType: 'customer support',
                  areaServed: 'IN',
                  availableLanguage: ['English', 'Hindi'],
                },
                sameAs: [],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'MetaFit',
                url: BASE_URL,
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
                  },
                  'query-input': 'required name=search_term_string',
                },
              },
            ]),
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
