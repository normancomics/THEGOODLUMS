import type { Metadata } from 'next';
import './globals.css';
import MatrixRain from './components/MatrixRain';

export const metadata: Metadata = {
  title: '⚠️ GOODLUMS DATABASE ⚠️ CLASSIFIED',
  description: 'GOODLUMS — 500 suspects on Base Chain. Post-apocalyptic internet gang NFT collection. Hood Pass required for VIP access.',
  keywords: ['NFT', 'Base', 'GOODLUMS', 'blockchain', 'collection'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0a0a0a', overflowX: 'hidden' }}>
        <MatrixRain />
        <div className="tv-static" />
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
