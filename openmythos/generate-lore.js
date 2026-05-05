#!/usr/bin/env node
/**
 * openmythos/generate-lore.js
 *
 * OPTIONAL – generates gang lore and member backstories for The GoodLums
 * using OpenMythos by @kyegomez (https://github.com/kyegomez/OpenMythos).
 *
 * The dApp runs without this script.  Run only when you want AI-generated
 * narrative content to enrich collection documentation.
 *
 * Usage:
 *   npm run openmythos:lore
 *
 * Env vars (see .env.example):
 *   OPENMYTHOS_API_KEY            – your OpenMythos API key
 *   OPENMYTHOS_COLLECTION_CONTEXT – optional context string (default: "thegoodlums_gang")
 *
 * Output:
 *   openmythos/output/lore-<timestamp>.md
 *
 * Attribution:
 *   OpenMythos created by @kyegomez – https://github.com/kyegomez/OpenMythos
 */

"use strict";

const fs   = require("fs");
const path = require("path");

const OPENMYTHOS_API_KEY = process.env.OPENMYTHOS_API_KEY || "";
const CONTEXT            = process.env.OPENMYTHOS_COLLECTION_CONTEXT || "thegoodlums_gang";
const OUTPUT_DIR         = path.join(__dirname, "output");
const NFTS_PATH          = path.join(__dirname, "..", "nfts.json");

// ---------------------------------------------------------------------------
// Stub integration: replace this block with real OpenMythos SDK calls once
// the package is publicly available.
// ---------------------------------------------------------------------------
async function generateLore(context, traits) {
  if (!OPENMYTHOS_API_KEY) {
    console.warn(
      "[openmythos] OPENMYTHOS_API_KEY is not set – running in demo/stub mode.\n" +
      "  Set it in .env to enable real AI generation.\n" +
      "  OpenMythos by @kyegomez: https://github.com/kyegomez/OpenMythos"
    );
    return stubLore(context, traits);
  }

  // TODO: swap stub for real SDK call, e.g.:
  //   const { OpenMythos } = require("openmythos");
  //   const client = new OpenMythos({ apiKey: OPENMYTHOS_API_KEY });
  //   return await client.generateLore({ context, traits, style: "post-apocalyptic-gang" });
  console.log("[openmythos] API key found – would call OpenMythos SDK here.");
  return stubLore(context, traits);
}

function stubLore(context, traits) {
  const traitList = Object.entries(traits)
    .slice(0, 10)
    .map(([k, v]) => `- **${k}**: ${v}`)
    .join("\n");

  return `# The GoodLums – Gang Lore (demo)

> *Generated with [OpenMythos](https://github.com/kyegomez/OpenMythos) by @kyegomez*

Collection context: \`${context}\`

## Sample Member Profile

In the shattered remnants of the internet, where bandwidth costs blood and
memes are currency, the GoodLums emerged from the ash.  No manifesto.  No
Discord.  No DMs.  Just vibes, gang affiliation, and an unbroken chain of
verified on-chain loyalty.

### Known Traits
${traitList}

---
*Replace this stub output by setting OPENMYTHOS_API_KEY in your .env.*
`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Load traits from nfts.json if it exists, else use empty object
  let traits = {};
  if (fs.existsSync(NFTS_PATH)) {
    try {
      const data = JSON.parse(fs.readFileSync(NFTS_PATH, "utf8"));
      const first = (data.nfts || [])[0];
      if (first && first.traits) traits = first.traits;
    } catch (_) {
      // ignore parse errors – proceed with empty traits
    }
  }

  const lore = await generateLore(CONTEXT, traits);
  const ts   = new Date().toISOString().replace(/[:.]/g, "-");
  const out  = path.join(OUTPUT_DIR, `lore-${ts}.md`);

  fs.writeFileSync(out, lore);
  console.log(`[openmythos] Lore written to ${out}`);
}

main().catch((err) => {
  console.error("[openmythos] Error:", err.message);
  process.exit(1);
});
