import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | MetaFit',
    default: 'MetaFit | Weight loss',
  },
  description: 'MetaFit is a direct-to-patient healthcare company providing high-quality, affordable healthcare without the need for insurance.',
  metadataBase: new URL('https://www.joinmeta.fit'),
  openGraph: {
    title: 'MetaFit | Weight loss',
    description: 'MetaFit is a direct-to-patient healthcare company providing high-quality, affordable healthcare without the need for insurance.',
    url: 'https://www.joinmeta.fit',
    siteName: 'MetaFit',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetaFit | Weight loss',
    description: 'MetaFit is a direct-to-patient healthcare company providing high-quality, affordable healthcare without the need for insurance.',
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
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
