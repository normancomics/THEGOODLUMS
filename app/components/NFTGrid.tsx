'use client';

import { useState, useEffect, useCallback } from 'react';
import { NFTCard } from './NFTCard';
import { fetchNFTsPage } from '@/lib/opensea';
import type { OpenSeaNFT, RarityTier } from '@/lib/types';

type FilterType = 'all' | RarityTier;

const RARITY_PERCENTILES: Record<string, RarityTier> = {};

function getRarityForRank(rank: number, total: number): RarityTier {
  const pct = rank / total;
  if (pct <= 0.02) return 'legendary';
  if (pct <= 0.1) return 'epic';
  if (pct <= 0.25) return 'rare';
  if (pct <= 0.5) return 'uncommon';
  return 'common';
}

export function NFTGrid() {
  const [nfts, setNfts] = useState<OpenSeaNFT[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cursor, setCursor] = useState<string | undefined>();
  const [hasMore, setHasMore] = useState(true);
  const [filter, setFilter] = useState<FilterType>('all');
  const [sortBy, setSortBy] = useState<'rank' | 'id'>('rank');
  const [searchTerm, setSearchTerm] = useState('');

  const loadNFTs = useCallback(async (reset = false) => {
    try {
      if (reset) {
        setLoading(true);
        setNfts([]);
        setCursor(undefined);
      } else {
        setLoadingMore(true);
      }
      setError(null);

      const currentCursor = reset ? undefined : cursor;
      const data = await fetchNFTsPage(currentCursor);

      setNfts((prev) => {
        const newList = reset ? data.nfts : [...prev, ...data.nfts];
        return newList;
      });

      if (data.next) {
        setCursor(data.next);
      } else {
        setHasMore(false);
        setCursor(undefined);
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? `SIGNAL LOST: ${err.message}`
          : 'SIGNAL LOST: Failed to fetch NFT data from OpenSea'
      );
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [cursor]);

  useEffect(() => {
    loadNFTs(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filteredNFTs = nfts
    .filter((nft) => {
      if (searchTerm) {
        const search = searchTerm.toLowerCase();
        const name = (nft.name || '').toLowerCase();
        const id = nft.identifier;
        const traitMatch = nft.traits?.some(
          (t) =>
            t.trait_type.toLowerCase().includes(search) ||
            t.value.toLowerCase().includes(search)
        );
        if (!name.includes(search) && !id.includes(search) && !traitMatch) {
          return false;
        }
      }
      if (filter === 'all') return true;
      const rank = parseInt(nft.identifier) || 0;
      const rarityTier = getRarityForRank(rank, nfts.length || 500);
      return rarityTier === filter;
    })
    .sort((a, b) => {
      if (sortBy === 'id') {
        return parseInt(a.identifier) - parseInt(b.identifier);
      }
      // Sort by rank (lower token ID = higher rank for this collection, adjust as needed)
      return parseInt(a.identifier) - parseInt(b.identifier);
    });

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="font-vt323 text-signal-green text-4xl" style={{ animation: 'glitch 0.5s infinite' }}>
          ACCESSING DATABASE...
        </div>
        <div className="font-vt323 text-analog-yellow text-xl animate-blink">
          FETCHING GOODLUMS DATA FROM OPENSEA...
        </div>
        {/* Loading bars */}
        <div className="flex gap-1 mt-4">
          {Array(20).fill(0).map((_, i) => (
            <div
              key={i}
              className="w-2 bg-signal-green"
              style={{
                height: `${Math.random() * 40 + 10}px`,
                animation: `blink ${0.1 + i * 0.05}s infinite`,
                opacity: 0.7,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 px-4">
        <div className="font-vt323 text-warning-red text-4xl mb-4" style={{ animation: 'glitch 0.5s infinite' }}>
          SIGNAL LOST
        </div>
        <div className="font-vt323 text-analog-yellow text-xl mb-4">{error}</div>
        <p className="font-courier text-signal-green text-sm mb-4 max-w-lg mx-auto">
          Unable to connect to OpenSea API. This may be due to rate limiting or missing API key.
          The GOODLUMS collection contains 500 unique NFTs available at:
        </p>
        <a
          href="https://opensea.io/collection/thegoodlums"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-vt323 text-xl px-6 py-3 bg-signal-green text-black hover:bg-analog-yellow transition-colors"
          style={{ boxShadow: '0 0 20px #00ff00' }}
        >
          VIEW ON OPENSEA
        </a>
        <button
          onClick={() => loadNFTs(true)}
          className="ml-4 font-vt323 text-xl px-6 py-3 border-2 border-signal-green text-signal-green hover:bg-signal-green hover:text-black transition-colors"
        >
          RETRY
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-3 mb-6 px-4">
        {/* Search */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="SEARCH GOODLUMS..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-black border-2 border-signal-green text-signal-green font-vt323 text-lg px-3 py-2 placeholder-gray-600 outline-none focus:border-analog-yellow"
            style={{ boxShadow: '0 0 10px rgba(0,255,0,0.2)' }}
          />
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'rank' | 'id')}
          className="bg-black border-2 border-signal-green text-signal-green font-vt323 text-lg px-3 py-2 outline-none"
        >
          <option value="rank">SORT: BY RANK</option>
          <option value="id">SORT: BY ID</option>
        </select>
      </div>

      {/* Rarity filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-8 px-4">
        {(['all', 'legendary', 'epic', 'rare', 'uncommon', 'common'] as FilterType[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`font-vt323 text-lg px-4 py-1 border-2 transition-all hover:scale-105 ${
              filter === f
                ? 'bg-signal-green text-black border-signal-green'
                : 'bg-black text-signal-green border-signal-green hover:bg-signal-green hover:text-black'
            }`}
            style={{
              transform: `rotate(${Math.random() * 2 - 1}deg)`,
            }}
          >
            {f === 'all' ? 'ALL SUSPECTS' : f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Count display */}
      <div className="text-center mb-6">
        <span className="font-vt323 text-analog-yellow text-xl">
          {filteredNFTs.length} GOODLUMS FOUND
          {nfts.length > 0 && ` (${nfts.length} LOADED)`}
        </span>
      </div>

      {/* Grid */}
      {filteredNFTs.length === 0 ? (
        <div className="text-center py-12 font-vt323 text-decay-gray text-2xl">
          NO SUSPECTS MATCH CRITERIA
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
          {filteredNFTs.map((nft, index) => (
            <NFTCard
              key={nft.identifier}
              nft={nft}
              rank={index + 1}
              total={nfts.length || 500}
            />
          ))}
        </div>
      )}

      {/* Load more */}
      {hasMore && !loading && (
        <div className="text-center mt-8 pb-4">
          <button
            onClick={() => loadNFTs(false)}
            disabled={loadingMore}
            className="font-vt323 text-xl px-8 py-3 border-2 border-signal-green text-signal-green hover:bg-signal-green hover:text-black transition-all disabled:opacity-50"
            style={{ boxShadow: '0 0 15px rgba(0,255,0,0.3)' }}
          >
            {loadingMore ? 'LOADING...' : 'LOAD MORE SUSPECTS'}
          </button>
        </div>
      )}
    </div>
  );
}
