import type { NFT, OpenSeaAPIResponse, OpenSeaNFT, RarityTier, WifiStrength } from './types';

const OPENSEA_API = 'https://api.opensea.io/api/v2';
const COLLECTION_SLUG = 'thegoodlums';

export async function fetchNFTsPage(cursor?: string): Promise<OpenSeaAPIResponse> {
  const url = new URL(`${OPENSEA_API}/collection/${COLLECTION_SLUG}/nfts`);
  url.searchParams.set('limit', '200');
  if (cursor) {
    url.searchParams.set('next', cursor);
  }

  const apiKey = process.env.NEXT_PUBLIC_OPENSEA_API_KEY || '';
  const headers: Record<string, string> = {
    'Accept': 'application/json',
  };
  if (apiKey) {
    headers['X-API-KEY'] = apiKey;
  }

  const response = await fetch(url.toString(), { headers });
  if (!response.ok) {
    throw new Error(`OpenSea API error: ${response.status}`);
  }
  return response.json();
}

export async function fetchAllNFTs(): Promise<OpenSeaNFT[]> {
  const allNfts: OpenSeaNFT[] = [];
  let cursor: string | undefined;

  do {
    const data = await fetchNFTsPage(cursor);
    allNfts.push(...data.nfts);
    cursor = data.next;
    if (allNfts.length >= 500) break;
    if (cursor) {
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  } while (cursor);

  return allNfts;
}

export async function fetchNFTTraits(tokenId: string): Promise<NFT | null> {
  try {
    const apiKey = process.env.NEXT_PUBLIC_OPENSEA_API_KEY || '';
    const headers: Record<string, string> = {
      'Accept': 'application/json',
    };
    if (apiKey) {
      headers['X-API-KEY'] = apiKey;
    }

    const response = await fetch(
      `${OPENSEA_API}/chain/base/contract/0x8Cd8155e1af6AD31dd9Eec2cEd37e04145aCFcb3/nfts/${tokenId}`,
      { headers }
    );
    if (!response.ok) return null;
    const data = await response.json();
    return data.nft;
  } catch {
    return null;
  }
}

export function getRarityTier(rank: number, total: number = 500): RarityTier {
  const percentile = rank / total;
  if (percentile <= 0.02) return 'legendary';
  if (percentile <= 0.1) return 'epic';
  if (percentile <= 0.25) return 'rare';
  if (percentile <= 0.5) return 'uncommon';
  return 'common';
}

export function getWifiStrength(rank: number, total: number = 500): WifiStrength {
  const percentile = rank / total;
  if (percentile <= 0.05) return 5;
  if (percentile <= 0.15) return 4;
  if (percentile <= 0.35) return 3;
  if (percentile <= 0.6) return 2;
  return 1;
}

export function getRarityColor(tier: RarityTier): string {
  switch (tier) {
    case 'legendary': return '#ffd700';
    case 'epic': return '#a855f7';
    case 'rare': return '#3b82f6';
    case 'uncommon': return '#10b981';
    case 'common': return '#6b7280';
  }
}

export function normalizeTraitType(traitType: string): string {
  return traitType.trim().toUpperCase();
}
