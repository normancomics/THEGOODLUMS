# OpenMythos Integration

This directory contains **optional** integration hooks that connect The GoodLums
dApp to [OpenMythos](https://github.com/kyegomez/OpenMythos) — an AI-powered
narrative and lore generation framework.

> **Attribution & Credit**  
> OpenMythos is created and maintained by [@kyegomez](https://github.com/kyegomez).  
> GitHub: <https://github.com/kyegomez/OpenMythos>  
> These integration hooks are optional; the dApp runs perfectly without them.

---

## What OpenMythos provides

| Script | Purpose |
|---|---|
| `generate-lore.js` | Generate gang lore / member backstories from collection traits |
| `generate-readme.js` | Draft or refresh marketing copy / README sections |

---

## Setup

1. Install OpenMythos (when a public package is available):
   ```bash
   npm install openmythos   # or: pip install openmythos
   ```
2. Add your API key to `.env`:
   ```
   OPENMYTHOS_API_KEY=your_key_here
   OPENMYTHOS_COLLECTION_CONTEXT=thegoodlums_gang
   ```
3. Run a script:
   ```bash
   npm run openmythos:lore    # → generates lore-output.md
   npm run openmythos:readme  # → prints updated README section
   ```

---

## Notes

- These scripts are **additive** – they never overwrite live files without
  explicit confirmation.
- All generated content is placed in `openmythos/output/` and is gitignored by
  default.
- Credit line `Generated with OpenMythos by @kyegomez` is injected into every
  output file automatically.
