'use client';

import { useEffect, useState } from 'react';
import { NFTCard, NFT } from './NFTCard';
import { ChunkyButton } from './ChunkyButton';

const RARITY_LABELS = ['all', 'Legendary', 'Epic', 'Rare', 'Common'] as const;
type RarityFilter = typeof RARITY_LABELS[number];

// Placeholder NFTs until OpenSea API is connected
const PLACEHOLDER_NFTS: NFT[] = Array.from({ length: 20 }, (_, i) => ({
  token_id: String(i + 1),
  name: `Goodlum #${i + 1}`,
  image_url: `https://i.seadn.io/gae/placeholder?w=500&auto=format`,
  contract: '0x0000000000000000000000000000000000000000',
  rarity_score: Math.floor(Math.random() * 1000),
  rarity_label: (['Legendary', 'Epic', 'Rare', 'Common'] as const)[Math.floor(Math.random() * 4)],
  last_sale_price: (Math.random() * 0.5).toFixed(3),
  traits: [
    { trait_type: 'Background', value: ['Void', 'Static', 'Wasteland', 'Digital'][Math.floor(Math.random() * 4)] },
    { trait_type: 'Species', value: ['Human', 'Mutant', 'Android', 'Ghost'][Math.floor(Math.random() * 4)] },
    { trait_type: 'Affiliation', value: ['Milady', 'Remilia', 'Based Ghouls', 'Loner'][Math.floor(Math.random() * 4)] },
    { trait_type: 'Gear', value: ['None', 'Hazmat', 'Street', 'Combat'][Math.floor(Math.random() * 4)] },
  ],
  opensea_url: `https://opensea.io/assets/base/0x0/${i + 1}`,
}));

export function NFTGrid() {
  const [nfts] = useState<NFT[]>(PLACEHOLDER_NFTS);
  const [filter, setFilter] = useState<RarityFilter>('all');
  const [page, setPage] = useState(1);
  const PER_PAGE = 12;

  const filtered = filter === 'all'
    ? nfts
    : nfts.filter((n) => n.rarity_label === filter);

  const paged = filtered.slice(0, page * PER_PAGE);
  const hasMore = paged.length < filtered.length;

  return (
    <section id="nfts" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-center text-green-400 mb-4 tracking-widest"
          style={{ fontFamily: 'VT323, monospace', fontSize: '2.8rem' }}
        >
          THE SUSPECT DATABASE
        </h2>
        <p
          className="text-center text-gray-500 mb-10 text-sm tracking-widest"
          style={{ fontFamily: 'Courier Prime, monospace' }}
        >
          500 POST-APOCALYPTIC SPECIMENS — BASE CHAIN — FLIP CARD FOR INTEL
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {RARITY_LABELS.map((label) => (
            <ChunkyButton
              key={label}
              variant={filter === label ? 'primary' : 'secondary'}
              onClick={() => { setFilter(label); setPage(1); }}
              className="!text-sm !py-2 !px-5"
            >
              {label === 'all' ? 'ALL SUSPECTS' : label.toUpperCase()}
            </ChunkyButton>
          ))}
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paged.map((nft) => (
            <NFTCard key={nft.token_id} nft={nft} />
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <ChunkyButton variant="secondary" onClick={() => setPage((p) => p + 1)}>
              LOAD MORE SUSPECTS
            </ChunkyButton>
          </div>
        )}

        {/* OpenSea link */}
        <div className="flex justify-center mt-8">
          <ChunkyButton
            variant="warning"
            href="https://opensea.io/collection/thegoodlums"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW FULL COLLECTION ON OPENSEA
          </ChunkyButton>
        </div>
      </div>
    </section>
  );
}
