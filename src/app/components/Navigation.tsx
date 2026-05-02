'use client';

import { WalletConnectButton } from './WalletConnectButton';
import Link from 'next/link';

export function Navigation() {
  return (
    <nav
      className="sticky top-0 z-50 bg-black/95 border-b-4 border-green-400"
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-3">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-green-400 flex items-center justify-center">
            <GoodlumsLogoSVG />
          </div>
          <span
            className="text-green-400 text-2xl font-black tracking-widest neon-green"
            style={{ fontFamily: 'VT323, monospace' }}
          >
            GOODLUMS
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: '#nfts', label: 'NFTs' },
            { href: '#affiliates', label: 'GANG' },
            { href: '#hoodpass', label: 'HOOD PASS' },
            { href: '#stats', label: 'STATS' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-green-400 hover:text-yellow-400 transition-colors text-xl tracking-widest"
              style={{ fontFamily: 'VT323, monospace' }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Wallet Connect */}
        <WalletConnectButton />
      </div>
    </nav>
  );
}

function GoodlumsLogoSVG() {
  return (
    <svg viewBox="0 0 40 40" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" fill="none" />
      {/* Skull-like G shape */}
      <text
        x="50%"
        y="58%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#00ff00"
        fontSize="26"
        fontFamily="VT323, monospace"
        fontWeight="bold"
      >
        G
      </text>
      <rect x="1" y="1" width="38" height="38" stroke="#00ff00" strokeWidth="2" fill="none" />
    </svg>
  );
}
