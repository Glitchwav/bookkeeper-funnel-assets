# @glitchwav/bookkeeper-funnel-assets

TypeScript library of **bookkeeper FB-ads GTM** assets for Grok Bot / Coder / agents:

- Funnel **copy** (magnet, $19 pack, ad headlines, CTAs)
- Plain **React** landing sections (hero, offer, proof stubs, CTA)
- Ad **creative** templates (JS objects + optional React frame)
- **Email** stubs (welcome, nurture, purchase)
- Thin **GitHub** helpers on top of [`@github-tools/sdk`](https://github.com/vercel-labs/github-tools) (`createGithubTools` / `createGithubAgent`, `repo-explorer` preset) for Glitchwav + JHulsinger stars/repos

**Product seed**

| Role | Offer |
|------|--------|
| Free magnet | Month-End Missing-Docs Spreadsheet |
| Paid | $19 self-serve Missing Docs Reminder Pack |

Framed with **Codie Sanchez 6 Ms**: Magnet, Message, Micro-commitment, Make the ask, Money, Map (`SIX_MS_MAP` in `src/catalog.ts`).

> Do **not** deploy ads, spend money, or cold-post into Facebook groups from this package.

## Install

```bash
# from git (until published)
npm install github:Glitchwav/bookkeeper-funnel-assets

# or clone
git clone https://github.com/Glitchwav/bookkeeper-funnel-assets.git
cd bookkeeper-funnel-assets && npm install
```

Peer/runtime deps (also listed in `package.json`): `react`, `@github-tools/sdk`, `ai`, `zod`.

## Import (agents)

```ts
import {
  FUNNEL_CATALOG,
  OFFERS,
  SIX_MS_MAP,
  magnetCopy,
  packCopy,
  adVariants,
  Hero,
  Offer,
  Proof,
  CtaBand,
  fbAdTemplates,
  welcomeEmail,
  nurtureSequence,
  createExplorerTools,
  createAssetDiscoveryAgent,
  listStars,
  exploreTrackedAccounts,
  fetchRepoFile,
} from '@glitchwav/bookkeeper-funnel-assets';

console.log(OFFERS.magnet.name, OFFERS.pack.priceCents);
console.log(FUNNEL_CATALOG.map((a) => a.id));
```

Subpath-style imports also work against source:

```ts
import { magnetCopy } from '@glitchwav/bookkeeper-funnel-assets/copy/magnet';
import { Hero } from '@glitchwav/bookkeeper-funnel-assets/landing/Hero';
```

## GitHub helpers

Set **`GITHUB_TOKEN`** in the environment (never commit it). See `.env.example`.

```ts
import {
  createExplorerTools,
  createAssetDiscoveryAgent,
  listStars,
  exploreTrackedAccounts,
} from '@glitchwav/bookkeeper-funnel-assets';

const tools = createExplorerTools({ token: process.env.GITHUB_TOKEN! });
// preset: 'repo-explorer' — read-only tools from @github-tools/sdk

const stars = await listStars({ username: 'Glitchwav', query: 'react' });
const both = await exploreTrackedAccounts({ query: 'book' });
```

Reused OSS: **`@github-tools/sdk`** from [vercel-labs/github-tools](https://github.com/vercel-labs/github-tools) (`createGithubTools`, `createGithubAgent`, `createOctokit`, `getFileContent`). Source is **not** vendored.

## Scripts

```bash
npm run typecheck
npm run example:import
GITHUB_TOKEN=… npm run example:stars
```

## Layout

```
src/
  catalog.ts      # funnel catalog + 6 Ms map
  copy/           # magnet, pack, ads, cta
  landing/        # React sections
  creatives/      # FB ad templates
  email/          # sequence stubs
  github/         # sdk wrappers + stars/pull helpers
examples/
```

## License

MIT
