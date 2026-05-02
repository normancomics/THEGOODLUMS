#!/usr/bin/env node
/**
 * fetch-nfts.js
 * Fetches the full GOODLUMS collection from the OpenSea API and writes nfts.json.
 *
 * Usage:
 *   1. Copy .env.example → .env and fill in OPENSEA_API_KEY
 *   2. npm install
 *   3. node fetch-nfts.js
 *
 * The generated nfts.json is loaded by index.html at runtime (no API key exposed).
 */

require('dotenv').config();

const fs = require('fs');

const API_KEY        = process.env.OPENSEA_API_KEY;
const COLLECTION     = process.env.OPENSEA_COLLECTION_SLUG || 'thegoodlums';
const CHAIN          = process.env.OPENSEA_CHAIN           || 'base';
const OPENSEA_BASE   = 'https://api.opensea.io/api/v2';
const PAGE_LIMIT     = 50;   // max allowed by OpenSea
const RATE_DELAY_MS  = 300;  // polite delay between pages

if (!API_KEY) {
  console.error('❌  OPENSEA_API_KEY is not set. Copy .env.example → .env and add your key.');
  process.exit(1);
}

// Basic sanity-check — OpenSea API keys are long alphanumeric strings
if (API_KEY.length < 16 || /[^a-zA-Z0-9\-_]/.test(API_KEY)) {
  console.error('❌  OPENSEA_API_KEY looks malformed. Please check your .env file.');
  process.exit(1);
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function apiGet(url) {
  const res = await fetch(url, {
    headers: {
      'x-api-key': API_KEY,
      'accept': 'application/json'
    }
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`OpenSea API ${res.status}: ${body.slice(0, 200)}`);
  }
  return res.json();
}

/**
 * Fetch every NFT in the collection, handling pagination.
 */
async function fetchAllNFTs() {
  const nfts = [];
  let next = null;
  let page = 1;

  do {
    const url = new URL(`${OPENSEA_BASE}/collection/${COLLECTION}/nfts`);
    url.searchParams.set('limit', PAGE_LIMIT);
    if (next) url.searchParams.set('next', next);

    console.log(`  Page ${page} — fetched ${nfts.length} so far…`);
    const data = await apiGet(url.toString());

    if (!Array.isArray(data.nfts)) {
      throw new Error(`Unexpected response shape: ${JSON.stringify(data).slice(0, 200)}`);
    }

    nfts.push(...data.nfts);
    next = data.next || null;
    page++;

    if (next) await sleep(RATE_DELAY_MS);
  } while (next);

  return nfts;
}

/**
 * Fetch collection-level stats (floor price, total supply, etc.)
 */
async function fetchCollectionStats() {
  try {
    const data = await apiGet(`${OPENSEA_BASE}/collections/${COLLECTION}/stats`);
    return {
      floor_price: data.total?.floor_price ?? null,
      total_supply: data.total?.count ?? null,
      total_volume: data.total?.volume ?? null,
      num_owners: data.total?.num_owners ?? null
    };
  } catch (err) {
    console.warn('⚠  Could not fetch collection stats:', err.message);
    return {};
  }
}

/**
 * Derive a simple rarity tier from the number of traits an NFT has.
 * Replace with your own logic if you have rarity scores.
 */
function deriveRarity(traits) {
  const count = traits.length;
  if (count >= 12) return 'legendary';
  if (count >= 9)  return 'epic';
  if (count >= 6)  return 'rare';
  return 'common';
}

/**
 * Normalise a raw OpenSea NFT object into the shape expected by index.html.
 */
function normalise(raw) {
  const traits = (raw.traits || []).map(t => ({
    type:  t.trait_type  || t.display_type || 'TRAIT',
    value: String(t.value ?? '')
  }));

  return {
    id:                String(raw.identifier),
    name:              raw.name            || `GOODLUM #${raw.identifier}`,
    image_url:         raw.display_image_url || raw.image_url || null,
    opensea_url:       raw.opensea_url     || `https://opensea.io/assets/${CHAIN}/${raw.contract}/${raw.identifier}`,
    contract:          raw.contract        || null,
    rarity:            deriveRarity(traits),
    price_eth:         '0.1',
    traits
  };
}

async function main() {
  console.log(`\n🔫  Fetching THE GOODLUMS collection (slug: ${COLLECTION}, chain: ${CHAIN})\n`);

  const [rawNFTs, stats] = await Promise.all([
    fetchAllNFTs(),
    fetchCollectionStats()
  ]);

  console.log(`\n✅  Retrieved ${rawNFTs.length} NFTs`);

  const nfts = rawNFTs.map(normalise);

  const output = {
    collection:  COLLECTION,
    chain:       CHAIN,
    updated_at:  new Date().toISOString(),
    total:       nfts.length,
    stats,
    nfts
  };

  fs.writeFileSync('nfts.json', JSON.stringify(output, null, 2), 'utf8');
  console.log(`💾  Saved → nfts.json  (${nfts.length} NFTs)\n`);
}

main().catch(err => {
  console.error('❌ ', err.message);
  process.exit(1);
});
