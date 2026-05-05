#!/usr/bin/env node
/**
 * openmythos/generate-readme.js
 *
 * OPTIONAL – drafts or refreshes marketing copy and README sections for
 * The GoodLums using OpenMythos by @kyegomez.
 * (https://github.com/kyegomez/OpenMythos)
 *
 * The dApp runs without this script.  Run only when you want AI-generated
 * copy to supplement the project's documentation.
 *
 * Usage:
 *   npm run openmythos:readme
 *
 * Output:
 *   openmythos/output/readme-section-<timestamp>.md
 *
 * Attribution:
 *   OpenMythos created by @kyegomez – https://github.com/kyegomez/OpenMythos
 */

"use strict";

const fs   = require("fs");
const path = require("path");

const OPENMYTHOS_API_KEY = process.env.OPENMYTHOS_API_KEY || "";
const OUTPUT_DIR         = path.join(__dirname, "output");

async function generateReadmeSection() {
  if (!OPENMYTHOS_API_KEY) {
    console.warn(
      "[openmythos] OPENMYTHOS_API_KEY is not set – running in demo/stub mode.\n" +
      "  OpenMythos by @kyegomez: https://github.com/kyegomez/OpenMythos"
    );
  }

  // TODO: replace with real SDK call when package is published:
  //   const { OpenMythos } = require("openmythos");
  //   const client = new OpenMythos({ apiKey: OPENMYTHOS_API_KEY });
  //   return await client.generateCopy({ project: "thegoodlums", tone: "street-gang-web3" });

  return `## About The GoodLums *(OpenMythos-generated draft)*

> *Generated with [OpenMythos](https://github.com/kyegomez/OpenMythos) by @kyegomez*

The GoodLums is the world's first post-apocalyptic internet gang living
on-chain.  Hand-drawn on Base, verified by transaction, authenticated by vibes.

### Why Hold?
- Quarterly bonus yield for affiliated collection holders
- Instant airdrops on first mint
- Access to limited GoodLums Hood Passes (v4 active – only 60 remain)
- Gang-verified ENS domain recognition

---
*Edit or regenerate this section by running \`npm run openmythos:readme\`.*
`;
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const content = await generateReadmeSection();
  const ts      = new Date().toISOString().replace(/[:.]/g, "-");
  const out     = path.join(OUTPUT_DIR, `readme-section-${ts}.md`);

  fs.writeFileSync(out, content);
  console.log(`[openmythos] README section written to ${out}`);
  console.log("\n--- Preview ---\n");
  console.log(content);
}

main().catch((err) => {
  console.error("[openmythos] Error:", err.message);
  process.exit(1);
});
