'use client';

import { useState } from 'react';
import NFTCard from './NFTCard';
import { NFTData } from '@/lib/types';

interface NFTGridProps {
  nfts: NFTData[];
}

type FilterType = 'ALL' | 'legendary' | 'epic' | 'rare' | 'common';

const FILTERS: FilterType[] = ['ALL', 'legendary', 'epic', 'rare', 'common'];
const FILTER_COLORS: Record<FilterType, string> = {
  ALL: '#0f0',
  legendary: '#ffd700',
  epic: '#9400d3',
  rare: '#4169e1',
  common: '#888',
};

export default function NFTGrid({ nfts }: NFTGridProps) {
  const [filter, setFilter] = useState<FilterType>('ALL');

  const filtered = filter === 'ALL' ? nfts : nfts.filter((n) => n.rarity === filter);

  return (
    <div>
      {/* Filter buttons */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px', justifyContent: 'center' }}>
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              fontFamily: 'VT323, monospace',
              fontSize: '18px',
              letterSpacing: '2px',
              padding: '6px 16px',
              backgroundColor: filter === f ? FILTER_COLORS[f] : 'transparent',
              color: filter === f ? '#0a0a0a' : FILTER_COLORS[f],
              border: `2px solid ${FILTER_COLORS[f]}`,
              cursor: 'pointer',
              boxShadow: filter === f ? `0 0 10px ${FILTER_COLORS[f]}` : 'none',
              transition: 'all 0.2s',
            }}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Count */}
      <div style={{ textAlign: 'center', fontFamily: 'VT323, monospace', fontSize: '16px', color: '#666', marginBottom: '16px' }}>
        DISPLAYING {filtered.length} SUSPECTS
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '16px',
        }}
      >
        {filtered.map((nft) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
}
