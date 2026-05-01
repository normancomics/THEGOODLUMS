'use client';

import { useState } from 'react';
import Image from 'next/image';
import { NFTData } from '@/lib/types';
import WifiSignal from './WifiSignal';
import { rarityToWifiSignal } from '@/lib/opensea';

interface NFTCardProps {
  nft: NFTData;
}

const RARITY_COLORS = {
  legendary: '#ffd700',
  epic: '#9400d3',
  rare: '#4169e1',
  common: '#0f0',
};

export default function NFTCard({ nft }: NFTCardProps) {
  const [flipped, setFlipped] = useState(false);
  const signalStrength = rarityToWifiSignal(nft.rarityRank, 500);
  const rarityColor = RARITY_COLORS[nft.rarity];

  return (
    <div
      className="flip-card"
      style={{ height: '380px', cursor: 'pointer' }}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
        {/* FRONT */}
        <div
          className="flip-card-front"
          style={{
            backgroundColor: '#0a0a0a',
            border: `2px solid ${rarityColor}`,
            boxShadow: `0 0 10px ${rarityColor}40`,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* WANTED header */}
          <div style={{ backgroundColor: rarityColor, color: '#0a0a0a', textAlign: 'center', padding: '4px', fontFamily: 'VT323, monospace', fontSize: '20px', fontWeight: 'bold', letterSpacing: '4px' }}>
            ⚠️ WANTED ⚠️
          </div>

          {/* Image */}
          <div style={{ position: 'relative', flex: 1, minHeight: 0 }}>
            <Image
              src={nft.image}
              alt={nft.name}
              fill
              style={{ objectFit: 'cover' }}
              unoptimized
            />
            {/* Signal overlay */}
            <div style={{ position: 'absolute', top: '8px', right: '8px', backgroundColor: 'rgba(10,10,10,0.8)', padding: '4px', border: '1px solid #0f0' }}>
              <WifiSignal strength={signalStrength} />
            </div>
          </div>

          {/* Name */}
          <div style={{ padding: '8px', borderTop: `1px solid ${rarityColor}`, textAlign: 'center' }}>
            <div style={{ fontFamily: 'VT323, monospace', fontSize: '20px', color: rarityColor, letterSpacing: '2px' }}>{nft.name}</div>
            <div style={{ fontFamily: 'VT323, monospace', fontSize: '12px', color: '#666' }}>CLICK TO REVEAL INTEL</div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="flip-card-back"
          style={{
            backgroundColor: '#0a0a0a',
            border: `2px solid ${rarityColor}`,
            boxShadow: `0 0 10px ${rarityColor}40`,
            display: 'flex',
            flexDirection: 'column',
            padding: '12px',
            overflow: 'hidden',
          }}
        >
          <div style={{ fontFamily: 'VT323, monospace', color: rarityColor, fontSize: '18px', textAlign: 'center', marginBottom: '8px', letterSpacing: '2px', borderBottom: `1px solid ${rarityColor}`, paddingBottom: '4px' }}>
            CLASSIFIED INTEL
          </div>

          <div style={{ fontFamily: 'VT323, monospace', fontSize: '12px', color: '#888', marginBottom: '8px' }}>
            RANK: <span style={{ color: rarityColor }}>#{nft.rarityRank}</span> / 500 &nbsp;|&nbsp; SCORE: <span style={{ color: '#0f0' }}>{nft.rarityScore.toFixed(1)}</span>
          </div>

          <div style={{ flex: 1, overflowY: 'auto' }}>
            {nft.traits.map((trait) => (
              <div key={trait.trait_type} style={{ marginBottom: '4px', borderBottom: '1px solid #1a1a1a', paddingBottom: '4px' }}>
                <div style={{ fontFamily: 'VT323, monospace', fontSize: '11px', color: '#666', letterSpacing: '1px' }}>{trait.trait_type}</div>
                <div style={{ fontFamily: 'VT323, monospace', fontSize: '14px', color: '#0f0' }}>
                  {trait.value}
                  {trait.rarity_percentage && (
                    <span style={{ color: '#666', fontSize: '11px' }}> ({trait.rarity_percentage}%)</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {nft.lastSalePrice && (
            <div style={{ fontFamily: 'VT323, monospace', fontSize: '14px', color: '#ffd700', marginTop: '4px' }}>
              LAST SALE: {nft.lastSalePrice}
            </div>
          )}

          <a
            href={nft.openseaUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'block',
              marginTop: '8px',
              backgroundColor: rarityColor,
              color: '#0a0a0a',
              textAlign: 'center',
              padding: '6px',
              fontFamily: 'VT323, monospace',
              fontSize: '18px',
              fontWeight: 'bold',
              letterSpacing: '2px',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            🔫 BUY NOW
          </a>
        </div>
      </div>
    </div>
  );
}
