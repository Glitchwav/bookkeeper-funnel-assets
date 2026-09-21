# @glitchwav/bookkeeper-funnel-assets

TypeScript library of **bookkeeper FB-ads GTM** assets for Grok Bot / Coder / agents.

**Ladder:** free **Month-End Missing-Docs Spreadsheet** → **$19 Missing Docs Reminder Pack** → later upsell (out of v1).

**Channel:** Meta / Facebook **ads only**. Do **not** cold-post Facebook groups. Do **not** deploy or spend from this package.

Framed with **Codie Sanchez 6 Ms** (`SIX_MS_MAP`, `plans/FUNNEL.md`):

| M | How we use it |
|---|---------------|
| Magnet | Named free gift: Month-End Missing-Docs Spreadsheet |
| Message | Customer is the hero; ideal close first, sheet second. Adapt long-running keeper *angles* — never plagiarize |
| Micro-commitment | Free opt-in → **$19** pack (not $39/mo first) |
| Make the ask | ONE primary CTA: **Grab your free Missing-Docs Spreadsheet**. Repeat. Explicit trade: email ↔ named sheet |
| Money | Own email + Stripe. Ads only. Margin ≥ 2–3× CAC before scaling |
| Map | Weekend scaffold → ads on magnet → retarget $19 |

## Install

```bash
npm install github:Glitchwav/bookkeeper-funnel-assets

# or clone
git clone https://github.com/Glitchwav/bookkeeper-funnel-assets.git
cd bookkeeper-funnel-assets && npm install
```

Peer/runtime deps: `react`, `@github-tools/sdk`, `ai`, `zod`.

## Import (agents)

```ts
import {
  FUNNEL_CATALOG,
  OFFERS,
  SIX_MS_MAP,
  PRIMARY_CTA,
  magnetCopy,
  packCopy,
  adaptedAdVariants,
  INGESTED_ADS,
  LONG_RUNNING_PATTERNS,
  Hero,
  Offer,
  Proof,
  CtaBand,
  fbAdTemplates,
  welcomeEmail,
  nurtureSequence,
  createExplorerTools,
  listStars,
  exploreTrackedAccounts,
} from '@glitchwav/bookkeeper-funnel-assets';

console.log(PRIMARY_CTA);
console.log(OFFERS.magnet.name, OFFERS.pack.priceCents);
console.log(adaptedAdVariants.map((a) => a.angle));
```

Subpaths:

```ts
import { magnetCopy } from '@glitchwav/bookkeeper-funnel-assets/copy/magnet';
import { Hero } from '@glitchwav/bookkeeper-funnel-assets/landing/Hero';
import { adaptedAdVariants, INGESTED_ADS } from '@glitchwav/bookkeeper-funnel-assets/ads';
```

## Adapted FB ads (from long-running keepers)

Five original primary texts + headlines in `src/ads/adaptedVariants.ts`, mapped to Jev angles from `data/meta-ad-library-ingested.json`. Each row cites `sourceAdArchiveId` + Ad Library URL as **pattern provenance**. Bodies are rewritten — do not paste competitor copy.

Preferred angles: `chaos_to_system`, `before_after_metrics`, `time_life_balance`, `tool_overwhelm`. Wrong-ICP rows (career training, Bark, etc.) stay in `INGESTED_ADS.discarded`.

```ts
import { adaptedAdVariants } from '@glitchwav/bookkeeper-funnel-assets';

for (const ad of adaptedAdVariants) {
  // ad.cta === 'Grab your free Missing-Docs Spreadsheet'
  // ad.primaryText — original wording
  // ad.sourceLibraryUrl — pattern source only
}
```

## Plans

See [`plans/FUNNEL.md`](plans/FUNNEL.md) for the full 6 Ms checklist and compressed launch map.

## GitHub helpers

Set **`GITHUB_TOKEN`** in the environment (never commit it). See `.env.example`.

Thin wrappers around [`@github-tools/sdk`](https://github.com/vercel-labs/github-tools) (`createGithubTools` / `createGithubAgent`, `repo-explorer` preset) for **Glitchwav** + **JHulsinger**.

```ts
import {
  createExplorerTools,
  createAssetDiscoveryAgent,
  listStars,
  exploreTrackedAccounts,
} from '@glitchwav/bookkeeper-funnel-assets';
```

> Do **not** deploy ads, spend money, or cold-post into Facebook groups from this package.
