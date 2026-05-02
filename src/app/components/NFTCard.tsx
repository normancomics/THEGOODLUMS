'use client';

import { useState } from 'react';
import { ChunkyButton } from './ChunkyButton';
import Image from 'next/image';

interface Trait {
  trait_type: string;
  value: string;
}

export interface NFT {
  token_id: string;
  name: string;
  image_url: string;
  contract: string;
  rarity_score: number;
  rarity_label: 'Legendary' | 'Epic' | 'Rare' | 'Common';
  last_sale_price: string;
  traits: Trait[];
  opensea_url: string;
}

const RARITY_COLORS: Record<string, string> = {
  Legendary: '#ffe600',
  Epic: '#cc00ff',
  Rare: '#0099ff',
  Common: '#666666',
};

const WIFI_BARS: Record<string, number> = {
  Legendary: 5,
  Epic: 4,
  Rare: 3,
  Common: 2,
};

function WifiSignal({ bars, color }: { bars: number; color: string }) {
  return (
    <div className="flex items-end gap-0.5">
      {[1, 2, 3, 4, 5].map((b) => (
        <div
          key={b}
          style={{
            width: 4,
            height: b * 4,
            background: b <= bars ? color : '#333',
            borderRadius: 1,
          }}
        />
      ))}
    </div>
  );
}

export function NFTCard({ nft }: { nft: NFT }) {
  const [flipped, setFlipped] = useState(false);
  const rarityColor = RARITY_COLORS[nft.rarity_label] || '#666';
  const wifiBars = WIFI_BARS[nft.rarity_label] || 2;

  return (
    <div
      className="card-3d-container cursor-pointer"
      style={{ height: 460, width: '100%' }}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className={`card-3d-inner ${flipped ? 'flipped' : ''}`}>
        {/* === FRONT === */}
        <div
          className="card-face bg-black"
          style={{ border: `3px solid ${rarityColor}` }}
        >
          {/* NFT Image */}
          <div className="relative w-full" style={{ height: 300 }}>
            <Image
              src={nft.image_url}
              alt={nft.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
            />

            {/* Scanlines overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
              }}
            />

            {/* Wifi signal */}
            <div className="absolute top-3 right-3">
              <WifiSignal bars={wifiBars} color={rarityColor} />
            </div>

            {/* Rarity badge */}
            <div
              className="absolute top-3 left-3 px-2 py-0.5 text-xs font-black"
              style={{
                background: rarityColor,
                color: '#000',
                fontFamily: 'VT323, monospace',
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
              }}
            >
              {nft.rarity_label.toUpperCase()}
            </div>
          </div>

          {/* Info */}
          <div className="p-4">
            <h3
              className="truncate mb-1"
              style={{ fontFamily: 'VT323, monospace', fontSize: '1.4rem', color: rarityColor }}
            >
              {nft.name}
            </h3>
            <div
              className="flex justify-between text-xs"
              style={{ fontFamily: 'Courier Prime, monospace', color: '#666' }}
            >
              <span>#{nft.token_id}</span>
              <span className="text-green-400">Click to flip</span>
            </div>
          </div>
        </div>

        {/* === BACK === */}
        <div
          className="card-face card-back bg-black p-5 flex flex-col justify-between"
          style={{ border: `3px solid ${rarityColor}` }}
        >
          <div>
            <h3
              className="mb-4"
              style={{ fontFamily: 'VT323, monospace', fontSize: '1.5rem', color: rarityColor }}
            >
              {nft.name}
            </h3>

            {/* Traits */}
            <div className="space-y-1 mb-4" style={{ maxHeight: 220, overflowY: 'auto' }}>
              {nft.traits.map((t) => (
                <div
                  key={t.trait_type}
                  className="flex justify-between text-xs py-1 border-b"
                  style={{
                    fontFamily: 'Courier Prime, monospace',
                    borderColor: `${rarityColor}33`,
                  }}
                >
                  <span style={{ color: '#888' }}>{t.trait_type}</span>
                  <span className="text-yellow-400">{t.value}</span>
                </div>
              ))}
            </div>

            {/* Rarity & price */}
            <div
              className="text-xs space-y-1"
              style={{ fontFamily: 'Courier Prime, monospace' }}
            >
              <div className="flex justify-between">
                <span className="text-gray-500">RARITY SCORE</span>
                <span style={{ color: rarityColor }}>{nft.rarity_score}</span>
              </div>
              {nft.last_sale_price !== '—' && (
                <div className="flex justify-between">
                  <span className="text-gray-500">LAST SALE</span>
                  <span className="text-yellow-400">{nft.last_sale_price} ETH</span>
                </div>
              )}
            </div>
          </div>

          {/* Buy button */}
          <div onClick={(e) => e.stopPropagation()}>
            <ChunkyButton
              variant="primary"
              href={nft.opensea_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center mt-4"
            >
              BUY NOW
            </ChunkyButton>
          </div>
        </div>
      </div>
    </div>
  );
}
