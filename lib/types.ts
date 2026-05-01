export interface NFTTrait {
  trait_type: string;
  value: string;
  trait_count?: number;
}

export interface NFT {
  identifier: string;
  name: string;
  description: string;
  image_url: string;
  display_image_url: string;
  opensea_url: string;
  traits: NFTTrait[];
  rarity_score: number;
  rarity_rank: number;
  last_sale_price?: string;
  last_sale_currency?: string;
}

export interface OpenSeaAPIResponse {
  nfts: OpenSeaNFT[];
  next?: string;
}

export interface OpenSeaNFT {
  identifier: string;
  collection: string;
  contract: string;
  token_standard: string;
  name: string;
  description: string;
  image_url: string;
  display_image_url: string;
  metadata_url: string;
  opensea_url: string;
  updated_at: string;
  is_disabled: boolean;
  is_nsfw: boolean;
  traits?: NFTTrait[];
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  url: string;
  duration: number;
  coverUrl?: string;
}

export interface GangAffiliate {
  name: string;
  logo: string;
  url: string;
  description: string;
}

export type RarityTier = 'legendary' | 'epic' | 'rare' | 'uncommon' | 'common';
export type WifiStrength = 1 | 2 | 3 | 4 | 5;
