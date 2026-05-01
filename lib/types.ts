export interface NFTTrait {
  trait_type: string;
  value: string;
  rarity_percentage?: number;
}

export interface NFTData {
  id: number;
  tokenId: string;
  name: string;
  image: string;
  rarity: 'legendary' | 'epic' | 'rare' | 'common';
  rarityRank: number;
  rarityScore: number;
  traits: NFTTrait[];
  lastSalePrice?: string;
  currentPrice?: string;
  openseaUrl: string;
}

export interface AudioTrack {
  id: string;
  title: string;
  artist: string;
  duration?: number;
}
