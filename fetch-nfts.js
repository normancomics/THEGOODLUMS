#!/usr/bin/env node
/**
 * fetch-nfts.js
 * Fetches The GoodLums NFT collection data from the OpenSea API and writes
 * a local `nfts.json` snapshot that is read by index.html and
 * traits-explorer.html at runtime.
 *
 * Usage:
 *   npm run fetch-nfts        (alias: npm run update)
 *
 * Required env vars (see .env.example):
 *   OPENSEA_API_KEY           – your OpenSea API key
 *
 * Optional env vars:
 *   OPENSEA_COLLECTION_SLUG   – defaults to "thegoodlums"
 *   OPENSEA_FETCH_LIMIT       – max NFTs to fetch (default: 200)
 */

"use strict";

const fs   = require("fs");
const path = require("path");
const https = require("https");

// ---------------------------------------------------------------------------
// Config (resolved from environment variables with sensible defaults)
// ---------------------------------------------------------------------------
const COLLECTION_SLUG = process.env.OPENSEA_COLLECTION_SLUG || "thegoodlums";
const FETCH_LIMIT     = parseInt(process.env.OPENSEA_FETCH_LIMIT || "200", 10);
const API_KEY         = process.env.OPENSEA_API_KEY || "";
const OUTPUT_PATH     = path.join(__dirname, "nfts.json");

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Perform a simple HTTPS GET and return parsed JSON. */
function httpsGet(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const reqHeaders = { "Accept": "application/json", ...headers };
    const req = https.get(url, { headers: reqHeaders }, (res) => {
      let raw = "";
      res.on("data", (chunk) => (raw += chunk));
      res.on("end", () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(JSON.parse(raw));
          } catch (e) {
            reject(new Error(`JSON parse error: ${e.message}\nBody: ${raw.slice(0, 200)}`));
          }
        } else {
          reject(new Error(`HTTP ${res.statusCode} for ${url}: ${raw.slice(0, 200)}`));
        }
      });
    });
    req.on("error", reject);
  });
}

/** Map a raw OpenSea NFT object to the shape used by the dApp pages. */
function mapNft(raw) {
  const traits = {};
  if (Array.isArray(raw.traits)) {
    for (const t of raw.traits) {
      traits[t.trait_type] = t.value;
    }
  }
  return {
    id:          raw.identifier || raw.token_id,
    name:        raw.name || `GoodLum #${raw.identifier || raw.token_id}`,
    image:       raw.image_url || raw.image_preview_url || "",
    description: raw.description || "",
    permalink:   raw.opensea_url || `https://opensea.io/assets/base/${COLLECTION_SLUG}/${raw.identifier}`,
    traits,
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  if (!API_KEY) {
    console.warn(
      "[fetch-nfts] OPENSEA_API_KEY is not set.\n" +
      "  Set it in your .env file (see .env.example) or export it:\n" +
      "    export OPENSEA_API_KEY=<your-key>\n" +
      "  Falling back to a placeholder nfts.json so the site can still load."
    );
    const placeholder = { collection: COLLECTION_SLUG, nfts: [], fetchedAt: new Date().toISOString(), total: 0 };
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(placeholder, null, 2));
    process.exit(0);
  }

  console.log(`[fetch-nfts] Fetching up to ${FETCH_LIMIT} NFTs for collection "${COLLECTION_SLUG}" …`);

  const allNfts = [];
  let next = null;
  const pageSize = Math.min(50, FETCH_LIMIT);

  do {
    const url = next
      ? `https://api.opensea.io/api/v2/collection/${COLLECTION_SLUG}/nfts?limit=${pageSize}&next=${encodeURIComponent(next)}`
      : `https://api.opensea.io/api/v2/collection/${COLLECTION_SLUG}/nfts?limit=${pageSize}`;

    const data = await httpsGet(url, { "x-api-key": API_KEY });
    const page = (data.nfts || []).map(mapNft);
    allNfts.push(...page);
    next = data.next || null;
    console.log(`[fetch-nfts]   … fetched ${allNfts.length} NFTs so far`);
  } while (next && allNfts.length < FETCH_LIMIT);

  const output = {
    collection: COLLECTION_SLUG,
    nfts:       allNfts.slice(0, FETCH_LIMIT),
    fetchedAt:  new Date().toISOString(),
    total:      allNfts.length,
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));
  console.log(`[fetch-nfts] Done. Wrote ${output.nfts.length} NFTs to ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error("[fetch-nfts] Error:", err.message);
  process.exit(1);
});
