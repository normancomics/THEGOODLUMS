# The GoodLums dApp

> **the world's first post-apocalyptic internet gang — on-chain.**  
> no new members. one way in. one way out.

[![Tip in Crypto](https://tip.md/badge.svg)](https://tip.md/normancomics.eth)
[![OpenSea](https://img.shields.io/badge/OpenSea-thegoodlums-blue?logo=opensea)](https://opensea.io/collection/thegoodlums)

---

## What is this?

The GoodLums is a hand-drawn NFT collection living on [Base chain](https://base.org).
This repository contains the **static dApp** that powers the collection browser
(`index.html`) and the traits explorer (`traits-explorer.html`), plus tooling
to keep the NFT snapshot in sync with OpenSea.

```
index.html              – main collection browser (wanted-poster style)
traits-explorer.html    – searchable traits & rarity explorer
fetch-nfts.js           – CLI script: fetches collection data → nfts.json
nfts.json               – generated snapshot (gitignored; regenerate with npm run fetch-nfts)
openmythos/             – optional AI content generation hooks (see below)
```

---

## Quick start

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- An [OpenSea API key](https://docs.opensea.io/reference/api-keys) (free tier is fine)

### 1 — Clone & install

```bash
git clone https://github.com/normancomics/THEGOODLUMS.git
cd THEGOODLUMS
npm install
```

### 2 — Configure environment

```bash
cp .env.example .env
# Edit .env and set OPENSEA_API_KEY
```

### 3 — Fetch NFT data

```bash
npm run fetch-nfts      # writes nfts.json
# alias: npm run update
```

### 4 — Run locally

```bash
npm run dev             # serves site at http://localhost:8080
# or: bash scripts/dev.sh [port]
```

Open your browser at <http://localhost:8080>.

---

## Available scripts

| Command | Description |
|---|---|
| `npm run fetch-nfts` | Pull latest collection data from OpenSea → `nfts.json` |
| `npm run update` | Alias for `fetch-nfts` |
| `npm run dev` | Start local dev server on port 8080 |
| `npm run build` | Copy static assets (+ refresh NFT data) into `dist/` |
| `npm test` | Run CI checks (file existence + smoke tests) |
| `npm run openmythos:lore` | *(optional)* Generate gang lore via OpenMythos |
| `npm run openmythos:readme` | *(optional)* Draft README copy via OpenMythos |

---

## Build

```bash
npm run build               # full build (fetches fresh NFT data)
npm run build -- --skip-fetch  # build without re-fetching
```

Output lands in `dist/`.

---

## CI

```bash
npm test
# or directly: bash scripts/ci.sh
```

Checks:
- All required files are present
- `fetch-nfts.js` runs without crashing (stub mode when no API key is set)
- HTML validation via `html-validate` (if installed)

---

## Environment variables

See [`.env.example`](.env.example) for the full list.  Key variables:

| Variable | Required | Default | Description |
|---|---|---|---|
| `OPENSEA_API_KEY` | Yes (for fetch) | – | OpenSea v2 API key |
| `OPENSEA_COLLECTION_SLUG` | No | `thegoodlums` | Collection slug on OpenSea |
| `OPENSEA_FETCH_LIMIT` | No | `200` | Max NFTs to fetch |
| `DEV_PORT` | No | `8080` | Local dev server port |
| `OPENMYTHOS_API_KEY` | No | – | Only for optional OpenMythos scripts |

---

## OpenMythos integration (optional)

This repo ships optional content-generation hooks powered by
[OpenMythos](https://github.com/kyegomez/OpenMythos) — an AI narrative
framework created by [@kyegomez](https://github.com/kyegomez).

> **Credit:** OpenMythos is built and maintained by **@kyegomez**.  
> Repo: <https://github.com/kyegomez/OpenMythos>

The hooks live in [`openmythos/`](openmythos/) and are **entirely optional** —
the dApp loads and runs without them.  See [`openmythos/README.md`](openmythos/README.md)
for setup instructions.

---

## Mint & collect

```
https://opensea.io/collection/thegoodlums
```

- Pick your species. Pick your race. Pick your gang affiliation.
- Holding milady / remilia / based ghouls / cigawrettes / fake-rares? → bonus yield quarterly.
- First mint → instant airdrops.
- Hood Pass v4 active — only 60 remain.

join us or perish.

---

## Credits & acknowledgements

- **normancomics.eth** — creator, artist, gang leader
- **[OpenMythos](https://github.com/kyegomez/OpenMythos) by @kyegomez** — optional AI lore/content generation
- **[OpenSea](https://opensea.io)** — collection marketplace & API
- **[Base](https://base.org)** — L2 chain

---

[![Tip in Crypto](https://tip.md/badge.svg)](https://tip.md/normancomics.eth)
