#!/usr/bin/env bash
# scripts/build.sh
# Produce a self-contained build of The GoodLums dApp in ./dist/.
# The build copies all static assets and optionally regenerates nfts.json.
# Usage: bash scripts/build.sh [--skip-fetch]
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST="$ROOT/dist"
SKIP_FETCH="${1:-}"

# Load .env if present
if [[ -f "$ROOT/.env" ]]; then
  set -o allexport
  # shellcheck source=/dev/null
  source "$ROOT/.env"
  set +o allexport
fi

echo "[build] Cleaning $DIST …"
rm -rf "$DIST"
mkdir -p "$DIST"

# Regenerate NFT snapshot unless caller opts out
if [[ "$SKIP_FETCH" != "--skip-fetch" ]]; then
  echo "[build] Refreshing NFT snapshot …"
  node "$ROOT/fetch-nfts.js"
fi

# Copy static site assets
echo "[build] Copying static assets …"
cp "$ROOT/index.html"          "$DIST/"
cp "$ROOT/traits-explorer.html" "$DIST/"
if [[ -f "$ROOT/nfts.json" ]]; then
  cp "$ROOT/nfts.json" "$DIST/"
else
  echo "[build] WARNING: nfts.json not found. Run 'npm run fetch-nfts' to generate it." >&2
  echo "[build]          The dApp pages will load without NFT data until it is present." >&2
fi

echo "[build] Build complete → $DIST"
ls -lh "$DIST"
