import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import I18nProvider from '@/components/providers/I18nProvider';
import ServiceWorkerRegister from '@/components/workers/ServiceWorkerRegister';
import { themeInitScript } from '@/lib/initial-preferences-scripts';
import { siteConfig } from '@/lib/site';
import { Providers } from './providers';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'latin-ext'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Julie — Middle Frontend Engineer | React · Next.js',
    template: '%s | Julie',
  },
  description:
    'Middle Frontend Engineer — fintech interfaces by day, open-source side projects by night. React, TypeScript, Module Federation, EcoTrackr, VisaGuide, Lockbox.',
  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Fintech',
    'Module Federation',
    'EcoTrackr',
    'Julie',
  ],
  authors: [{ name: 'Julie', url: siteConfig.url }],
  creator: 'Julie',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ru_RU',
    url: siteConfig.url,
    title: 'Julie — Middle Frontend Engineer',
    description:
      'Fintech interfaces by day, open-source side projects by night. EcoTrackr, VisaGuide, Lockbox, and co2-calculator npm package.',
    siteName: 'Julie Portfolio',
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: 'Julie Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julie — Middle Frontend Engineer',
    description: 'Fintech & Open Source · React · Next.js · TypeScript',
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'JT Portfolio',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="JT Portfolio" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <I18nProvider>
          <Providers>
            <Header />
            <main>{children}</main>
            <Footer />
            <ServiceWorkerRegister />
          </Providers>
        </I18nProvider>
      </body>
    </html>
  );
}
