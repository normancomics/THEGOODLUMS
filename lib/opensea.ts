import { NFTData } from './types';

const OPENSEA_API_BASE = 'https://api.opensea.io/api/v2';
export const COLLECTION_SLUG = 'thegoodlums';

export async function fetchNFTsFromOpenSea(limit = 50, next?: string): Promise<{ nfts: NFTData[]; next?: string }> {
  try {
    const params = new URLSearchParams({ limit: limit.toString() });
    if (next) params.append('next', next);

    const response = await fetch(
      `${OPENSEA_API_BASE}/collection/${COLLECTION_SLUG}/nfts?${params}`,
      {
        headers: {
          'X-API-KEY': process.env.OPENSEA_API_KEY || '',
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`OpenSea API error: ${response.status}`);
    }

    const data = await response.json();
    
    const nfts: NFTData[] = data.nfts?.map((nft: Record<string, unknown>, idx: number) => ({
      id: idx + 1,
      tokenId: String(nft.identifier || idx + 1),
      name: String(nft.name || `GOODLUM #${idx + 1}`),
      image: String(nft.image_url || `https://via.placeholder.com/400x400/0a0a0a/0f0?text=GOODLUM+%23${idx + 1}`),
      rarity: rarityFromRank(idx + 1, 500),
      rarityRank: idx + 1,
      rarityScore: 0,
      traits: Array.isArray(nft.traits) ? (nft.traits as Array<{trait_type: string; value: string}>).map((t) => ({
        trait_type: t.trait_type,
        value: t.value,
      })) : [],
      openseaUrl: nft.contract
        ? `https://opensea.io/assets/base/${nft.contract}/${nft.identifier}`
        : `https://opensea.io/collection/${COLLECTION_SLUG}`,
    })) || [];

    return { nfts, next: data.next };
  } catch (error) {
    console.error('Failed to fetch from OpenSea:', error);
    return { nfts: [] };
  }
}

function rarityFromRank(rank: number, totalSupply: number): NFTData['rarity'] {
  const pct = rank / totalSupply;
  if (pct <= 0.02) return 'legendary';
  if (pct <= 0.10) return 'epic';
  if (pct <= 0.30) return 'rare';
  return 'common';
}

export function rarityToWifiSignal(rarityRank: number, totalSupply: number): number {
  const percentage = rarityRank / totalSupply;
  if (percentage <= 0.02) return 5;
  if (percentage <= 0.10) return 4;
  if (percentage <= 0.30) return 3;
  if (percentage <= 0.60) return 2;
  return 1;
}
