#!/usr/bin/env bash
# scripts/ci.sh
# Lightweight CI checks for The GoodLums dApp.
# Validates that required files exist, HTML is well-formed (if html-validate
# is available), and that fetch-nfts.js can run without crashing in stub mode.
# Usage: bash scripts/ci.sh
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PASS=0
FAIL=0

check() {
  local label="$1"; shift
  if "$@" &>/dev/null; then
    echo "  ✓ $label"
    (( PASS++ )) || true
  else
    echo "  ✗ $label"
    (( FAIL++ )) || true
  fi
}

echo ""
echo "=== The GoodLums dApp – CI checks ==="
echo ""

# --- File existence checks ---
echo "[ Required files ]"
check "index.html exists"            test -f "$ROOT/index.html"
check "traits-explorer.html exists"  test -f "$ROOT/traits-explorer.html"
check "package.json exists"          test -f "$ROOT/package.json"
check "fetch-nfts.js exists"         test -f "$ROOT/fetch-nfts.js"
check ".env.example exists"          test -f "$ROOT/.env.example"
check "README.md exists"             test -f "$ROOT/README.md"
echo ""

# --- Node.js script smoke-test (no API key = stub mode) ---
echo "[ fetch-nfts.js smoke test (stub mode) ]"
check "fetch-nfts runs without crashing" \
  bash -c "OPENSEA_COLLECTION_SLUG=thegoodlums node '$ROOT/fetch-nfts.js' && true"
# Verify nfts.json was written (stub output)
check "nfts.json produced by stub run" test -f "$ROOT/nfts.json"
echo ""

# --- Optional: HTML validation ---
if command -v html-validate &>/dev/null; then
  echo "[ HTML validation ]"
  check "index.html validates"            html-validate "$ROOT/index.html"
  check "traits-explorer.html validates"  html-validate "$ROOT/traits-explorer.html"
  echo ""
fi

# --- Summary ---
TOTAL=$(( PASS + FAIL ))
echo "=== Results: $PASS/$TOTAL passed ==="
echo ""
if (( FAIL > 0 )); then
  exit 1
fi
