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

## Adapted FB ads (IMAGE / static defaults)

Default magnet creatives are **IMAGE/static** in `src/ads/adaptedVariants.ts`, patterned on Jev-selected normal examples in `data/meta-ad-library-normal-selected.json` (`NORMAL_AD_EXAMPLES`, `IMAGE_AD_PATTERNS`).

**PRIMARY template:** Financial Cents `#914432501713212` (one place / every document). Also: TaxDome named magnet + insight; Social Accountant free-gift frame.

Workflows video-testimonial story ads are **demoted** to `deprecatedVideoTestimonialVariants` — not for default spin-up.

```ts
import {
  adaptedAdVariants,
  IMAGE_AD_PATTERNS,
  NORMAL_AD_EXAMPLES,
  deprecatedVideoTestimonialVariants,
} from '@glitchwav/bookkeeper-funnel-assets';

for (const ad of adaptedAdVariants) {
  // ad.format === 'IMAGE'
  // ad.cta === 'Grab your free Missing-Docs Spreadsheet'
  // ad.sourceLibraryUrl — pattern source only
}
```

## Plans

- [`plans/FUNNEL.md`](plans/FUNNEL.md) — 6 Ms law, offer ladder, ads-only money rules.
- [`plans/SPIN-UP.md`](plans/SPIN-UP.md) — **this-week spin-up**: Weekend 1 deliverables, Days 1–7 magnet ads ($10–20/day), Days 8–14 $19 retarget, 3–5 `adaptedAdVariants` to run, definition of spun up, explicit skips.

Agents executing GTM should open **SPIN-UP** first, then pull `PRIMARY_CTA` / `adaptedAdVariants` / `SIX_MS_MAP`.

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
