import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: '⚠️ GOODLUMS — POST-APOCALYPTIC INTERNET GANG ⚠️',
  description:
    'The world\'s first post-apocalyptic internet gang. No new members. We are full. No referrals. We don\'t care. One way in. One way out.',
  keywords: ['GOODLUMS', 'NFT', 'Base', 'post-apocalyptic', 'internet gang', 'Hood Pass'],
  openGraph: {
    title: 'GOODLUMS — POST-APOCALYPTIC INTERNET GANG',
    description: 'No new members. We are full.',
    url: 'https://normancomics.github.io/THEGOODLUMS',
    siteName: 'GOODLUMS',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=VT323&family=Courier+Prime:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
