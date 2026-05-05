#!/usr/bin/env bash
# scripts/dev.sh
# Start a local development server for The GoodLums dApp.
# Usage: bash scripts/dev.sh [port]
set -euo pipefail

PORT="${1:-${DEV_PORT:-8080}}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Load .env if present (without export to avoid leaking secrets to child procs)
if [[ -f "$ROOT/.env" ]]; then
  set -o allexport
  # shellcheck source=/dev/null
  source "$ROOT/.env"
  set +o allexport
  echo "[dev] Loaded .env"
fi

# Ensure nfts.json exists so the pages can load without errors
if [[ ! -f "$ROOT/nfts.json" ]]; then
  echo "[dev] nfts.json not found – running fetch-nfts first …"
  node "$ROOT/fetch-nfts.js"
fi

echo "[dev] Serving The GoodLums dApp at http://localhost:$PORT"
echo "[dev] Press Ctrl-C to stop."
npx --yes serve "$ROOT" --listen "$PORT"
