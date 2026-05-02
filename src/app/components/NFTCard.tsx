'use client';

import { useState } from 'react';
import { ChunkyButton } from './ChunkyButton';

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
  Common: '#888888',
};

const WIFI_BARS: Record<string, number> = {
  Legendary: 5,
  Epic: 4,
  Rare: 3,
  Common: 2,
};

const WANTED_LABELS = ['WANTED', 'MISSING', 'WANTED', 'MISSING', 'WANTED', 'DANGEROUS'];
const STAMP_LABELS = ['ARMED', 'DANGEROUS', 'ARMED', 'AT LARGE', 'FUGITIVE', 'ARMED'];

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
  const rarityColor = RARITY_COLORS[nft.rarity_label] || '#888';
  const wifiBars = WIFI_BARS[nft.rarity_label] || 2;

  // Deterministic labels from token_id
  const idx = parseInt(nft.token_id, 10) || 0;
  const wantedLabel = WANTED_LABELS[idx % WANTED_LABELS.length];
  const stampLabel = STAMP_LABELS[idx % STAMP_LABELS.length];

  return (
    <div
      className="card-3d-container cursor-pointer"
      style={{ height: 500, width: '100%' }}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className={`card-3d-inner ${flipped ? 'flipped' : ''}`}>

        {/* ===== FRONT: WANTED POSTER ===== */}
        <div
          className="card-face"
          style={{
            background: '#070700',
            border: `4px solid ${rarityColor}`,
            boxShadow: `0 0 20px ${rarityColor}44, 4px 4px 0 #000`,
          }}
        >
          {/* WANTED / MISSING header */}
          <div
            className="text-center py-2 border-b-4"
            style={{
              background: rarityColor,
              borderColor: '#000',
              fontFamily: 'VT323, monospace',
              fontSize: '1.8rem',
              color: '#000',
              letterSpacing: '0.35em',
              lineHeight: 1.2,
            }}
          >
            {wantedLabel}
          </div>

          {/* NFT Image */}
          <div className="relative w-full" style={{ height: 250, background: '#111' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={nft.image_url}
              alt={nft.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  `https://via.placeholder.com/300x250/000000/00ff00?text=${encodeURIComponent(nft.name)}`;
              }}
            />

            {/* Scanlines */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)',
              }}
            />

            {/* Wifi signal top-right */}
            <div className="absolute top-2 right-2">
              <WifiSignal bars={wifiBars} color={rarityColor} />
            </div>

            {/* Rarity badge top-left */}
            <div
              className="absolute top-2 left-2 px-2 py-0.5"
              style={{
                background: rarityColor,
                color: '#000',
                fontFamily: 'VT323, monospace',
                fontSize: '0.9rem',
                letterSpacing: '0.1em',
              }}
            >
              {nft.rarity_label.toUpperCase()}
            </div>

            {/* ARMED / DANGEROUS stamp bottom-right */}
            <div
              className="absolute bottom-2 right-2 px-2 py-0.5 rotate-[-10deg]"
              style={{
                border: '3px solid #cc0000',
                color: '#cc0000',
                fontFamily: 'VT323, monospace',
                fontSize: '1rem',
                letterSpacing: '0.15em',
                background: 'rgba(0,0,0,0.6)',
              }}
            >
              {stampLabel}
            </div>
          </div>

          {/* Name */}
          <div
            className="px-3 pt-2 pb-1"
            style={{
              fontFamily: 'VT323, monospace',
              fontSize: '1.4rem',
              color: rarityColor,
              letterSpacing: '0.05em',
            }}
          >
            {nft.name}
          </div>

          {/* Quick traits row */}
          <div className="px-3 pb-2 space-y-0.5">
            {nft.traits.slice(0, 2).map((t) => (
              <div
                key={t.trait_type}
                className="flex justify-between text-xs"
                style={{ fontFamily: 'Courier Prime, monospace' }}
              >
                <span style={{ color: '#555' }}>{t.trait_type}:</span>
                <span className="text-yellow-400 text-right">{t.value}</span>
              </div>
            ))}
          </div>

          {/* Bounty */}
          <div
            className="mx-3 mb-3 py-1.5 text-center border-2"
            style={{
              borderColor: rarityColor,
              fontFamily: 'VT323, monospace',
              fontSize: '1.1rem',
              color: rarityColor,
              letterSpacing: '0.15em',
            }}
          >
            BOUNTY: {nft.last_sale_price} ETH
          </div>

          {/* Flip hint */}
          <div
            className="text-center pb-2 text-xs"
            style={{ fontFamily: 'Courier Prime, monospace', color: '#333' }}
          >
            [FLIP FOR INTEL]
          </div>
        </div>

        {/* ===== BACK: Full intel ===== */}
        <div
          className="card-face card-back flex flex-col justify-between p-4"
          style={{
            background: '#070700',
            border: `4px solid ${rarityColor}`,
            boxShadow: `0 0 20px ${rarityColor}44, 4px 4px 0 #000`,
          }}
        >
          <div>
            {/* Header */}
            <div
              className="text-center py-1.5 mb-3 border-b-2"
              style={{
                borderColor: rarityColor,
                fontFamily: 'VT323, monospace',
                fontSize: '1rem',
                color: rarityColor,
                letterSpacing: '0.25em',
              }}
            >
              SUSPECT FILE #{nft.token_id}
            </div>

            <h3
              className="mb-3"
              style={{ fontFamily: 'VT323, monospace', fontSize: '1.5rem', color: rarityColor }}
            >
              {nft.name}
            </h3>

            {/* All Traits */}
            <div className="space-y-1 mb-3" style={{ maxHeight: 200, overflowY: 'auto' }}>
              {nft.traits.map((t) => (
                <div
                  key={t.trait_type}
                  className="flex justify-between text-xs py-0.5 border-b"
                  style={{
                    fontFamily: 'Courier Prime, monospace',
                    borderColor: `${rarityColor}22`,
                  }}
                >
                  <span style={{ color: '#666' }}>{t.trait_type}:</span>
                  <span className="text-yellow-400">{t.value}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div
              className="text-xs space-y-1 p-2 border"
              style={{
                fontFamily: 'Courier Prime, monospace',
                borderColor: `${rarityColor}33`,
                background: '#0a0a00',
              }}
            >
              <div className="flex justify-between">
                <span style={{ color: '#555' }}>RARITY SCORE</span>
                <span style={{ color: rarityColor }}>{nft.rarity_score}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: '#555' }}>LAST BOUNTY</span>
                <span className="text-yellow-400">{nft.last_sale_price} ETH</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: '#555' }}>CHAIN</span>
                <span className="text-green-400">BASE</span>
              </div>
            </div>
          </div>

          {/* Capture button */}
          <div className="mt-3" onClick={(e) => e.stopPropagation()}>
            <ChunkyButton
              variant="primary"
              href={nft.opensea_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center"
            >
              CAPTURE NOW
            </ChunkyButton>
          </div>
        </div>

      </div>
    </div>
  );
}
