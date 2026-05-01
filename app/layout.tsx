import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GOODLUMS DATABASE // CLASSIFIED',
  description: 'THE GOODLUMS - Post-Apocalyptic NFT Collection on Base Chain. 500 unique Goodlums with traits, rarities, and Hood Pass privileges.',
  openGraph: {
    title: 'GOODLUMS DATABASE // CLASSIFIED',
    description: 'THE GOODLUMS - 500 unique NFTs on Base Chain. Join the gang.',
    url: 'https://normancomics.github.io/THEGOODLUMS/',
    siteName: 'THE GOODLUMS',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GOODLUMS DATABASE // CLASSIFIED',
    description: 'THE GOODLUMS - 500 unique NFTs on Base Chain.',
    creator: '@thegoodlums',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=VT323&family=Courier+Prime:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-signal-green font-vt323 overflow-x-hidden">
        <div className="tv-static" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
