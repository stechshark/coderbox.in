import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weights: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weights: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Alex Chen | Full Stack Developer',
  description: 'Professional Developer Portfolio - Full Stack Developer specializing in React, Node.js, and cloud infrastructure.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'TypeScript', 'Portfolio', 'Software Engineer'],
  authors: [{ name: 'Alex Chen' }],
  creator: 'Alex Chen',
  publisher: 'Alex Chen',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexchen.dev',
    title: 'Alex Chen | Full Stack Developer',
    description: 'Professional Developer Portfolio - Full Stack Developer',
    siteName: 'Alex Chen Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Chen | Full Stack Developer',
    description: 'Professional Developer Portfolio',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#0a0f1a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}