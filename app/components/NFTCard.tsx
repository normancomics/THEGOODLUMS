'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { WifiSignal } from './WifiSignal';
import { getWifiStrength, getRarityTier, getRarityColor } from '@/lib/opensea';
import type { OpenSeaNFT, NFTTrait } from '@/lib/types';

interface NFTCardProps {
  nft: OpenSeaNFT;
  rank: number;
  total?: number;
}

function TraitBadge({ trait }: { trait: NFTTrait }) {
  return (
    <div className="border border-signal-green px-2 py-1 flex justify-between gap-2">
      <span className="font-vt323 text-decay-gray text-xs uppercase truncate">
        {trait.trait_type}
      </span>
      <span className="font-vt323 text-signal-green text-xs truncate font-bold">
        {trait.value}
      </span>
    </div>
  );
}

export function NFTCard({ nft, rank, total = 500 }: NFTCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const rarityTier = getRarityTier(rank, total);
  const wifiStrength = getWifiStrength(rank, total);
  const rarityColor = getRarityColor(rarityTier);

  const tokenId = nft.identifier;
  const openseaUrl = nft.opensea_url || `https://opensea.io/assets/base/0x8Cd8155e1af6AD31dd9Eec2cEd37e04145aCFcb3/${tokenId}`;
  const imageUrl = nft.display_image_url || nft.image_url || '';

  // Determine ID display number
  const displayId = tokenId.padStart(3, '0');

  return (
    <div
      className="relative h-[420px] cursor-pointer perspective-1000 group"
      onClick={() => setIsFlipped(!isFlipped)}
      title={`${nft.name} -- Click to flip`}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        {/* FRONT - NFT Image */}
        <div className="absolute inset-0 backface-hidden bg-black border-2 overflow-hidden"
          style={{ borderColor: rarityColor, boxShadow: `0 0 15px ${rarityColor}50` }}
        >
          {/* Wanted header */}
          <div
            className="px-2 py-1 text-white font-vt323 text-center text-lg tracking-widest"
            style={{
              background: 'repeating-linear-gradient(45deg, #000, #000 8px, #ff0000 8px, #ff0000 16px)',
            }}
          >
            GOODLUM #{displayId}
          </div>

          {/* NFT Image */}
          <div className="relative w-full bg-gray-900" style={{ height: '280px' }}>
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={nft.name || `Goodlum #${displayId}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 280px"
                unoptimized
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-vt323 text-signal-green text-2xl animate-blink">
                  LOADING...
                </span>
              </div>
            )}

            {/* WiFi signal overlay */}
            <div className="absolute top-2 right-2">
              <WifiSignal strength={wifiStrength} />
            </div>

            {/* Rarity badge */}
            <div
              className="absolute top-2 left-2 px-2 py-0 font-vt323 text-black text-sm"
              style={{ background: rarityColor, boxShadow: `0 0 8px ${rarityColor}` }}
            >
              {rarityTier.toUpperCase()}
            </div>

            {/* Scan overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'repeating-linear-gradient(0deg, rgba(0,255,0,0.02) 0px, transparent 1px, transparent 3px)',
              }}
            />
          </div>

          {/* Bottom info */}
          <div className="px-3 py-2 bg-black">
            <div className="flex items-center justify-between">
              <span className="font-vt323 text-signal-green text-sm">
                RANK #{rank}/{total}
              </span>
              <span className="font-vt323 text-analog-yellow text-xs">
                TAP TO FLIP
              </span>
            </div>
          </div>
        </div>

        {/* BACK - Stats */}
        <div
          className="absolute inset-0 backface-hidden rotate-y-180 bg-black border-2 flex flex-col overflow-hidden"
          style={{ borderColor: rarityColor, boxShadow: `0 0 15px ${rarityColor}50` }}
        >
          {/* Header */}
          <div
            className="px-3 py-2 font-vt323 text-center"
            style={{ background: '#000', borderBottom: `2px solid ${rarityColor}` }}
          >
            <div className="text-analog-yellow text-xl">{nft.name || `GOODLUM #${displayId}`}</div>
            <div style={{ color: rarityColor }} className="text-sm">
              {rarityTier.toUpperCase()} -- RANK #{rank}
            </div>
          </div>

          {/* Traits */}
          <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-1">
            {nft.traits && nft.traits.length > 0 ? (
              nft.traits.slice(0, 8).map((trait, i) => (
                <TraitBadge key={i} trait={trait} />
              ))
            ) : (
              <div className="font-vt323 text-decay-gray text-center text-sm py-4">
                TRAIT DATA LOADING...
              </div>
            )}
          </div>

          {/* Buy button */}
          <div className="p-3 border-t" style={{ borderColor: rarityColor }}>
            <a
              href={openseaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="block w-full text-center font-vt323 text-xl py-2 transition-all hover:scale-105"
              style={{
                background: '#ff0000',
                color: '#fff',
                boxShadow: '0 0 15px #ff000080',
              }}
            >
              BUY NOW -- OPENSEA
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
