# Bookkeeper funnel plan (Codie Sanchez 6 Ms)

GTM law for this package. Agents should treat this as the source of truth when pulling copy.

## Offers (ladder)

| Stage | Offer | Price | Role |
|-------|--------|-------|------|
| Magnet | **Month-End Missing-Docs Spreadsheet** | Free | Named free gift before any paid ask |
| Micro-paid | **Missing Docs Reminder Pack** | **$19** one-time | Micro-commitment (not $39/mo) |
| Later | Upsell / retainer (out of scope here) | TBD | Only after magnet → $19 works |

## Channel rules (Money)

- **Facebook / Meta ads only** for cold acquisition.
- **Do not** cold-post into Facebook groups.
- Own the list (email) + Stripe checkout; do not rent demand.
- Target margin ≥ 2–3× CAC before scaling spend.
- This package never deploys ads or spends money.

## Codie Sanchez 6 Ms checklist

1. **Magnet** — Specific named free gift (*Month-End Missing-Docs Spreadsheet*) before the big ask.
2. **Message** — Customer is the hero; paint the ideal month-end (docs in, close on time) first; mechanism (spreadsheet / scripts) second.
3. **Micro-commitment** — Free opt-in → **$19** Reminder Pack (not a high-ticket or monthly first).
4. **Make the ask** — One primary CTA: **“Grab your free Missing-Docs Spreadsheet”**. Personal “your”, strong verb, explicit trade. Repeat that CTA on ads, landing, and email.
5. **Money** — Own email + Stripe; ads-only cold traffic; protect margin.
6. **Map** — Compressed launch: weekend scaffold → Days 1–7 magnet ads ($10–20/day) → Days 8–14 retarget $19 → kill zeros / evergreen winners. Details: `plans/SPIN-UP.md`.

## Creative pattern sources (adapt, do not copy)

Long-running Meta Ad Library keepers are in `data/meta-ad-library-ingested.json` (Jev-ingested). Prefer angles:

- `chaos_to_system`
- `before_after_metrics`
- `time_life_balance`
- `tool_overwhelm`

Discard wrong-ICP keepers (career training, consumer marketplaces, etc. — already in `discarded`).

Adapted primary texts live in `src/ads/adaptedVariants.ts` with `sourceAdArchiveId` + library URL for provenance. **Never paste competitor ad text verbatim.**

## Agent import cheat sheet

```ts
import {
  OFFERS,
  SIX_MS_MAP,
  FUNNEL_CATALOG,
  PRIMARY_CTA,
  adaptedAdVariants,
  INGESTED_ADS,
  LONG_RUNNING_PATTERNS,
} from '@glitchwav/bookkeeper-funnel-assets';
```

See README for full surface.

## Spin-up runbook

The compressed calendar (Weekend 1 scaffold, Days 1–7 magnet ads at $10–20/day, Days 8–14 $19 retarget, spun-up checklist, explicit skips) is in [`plans/SPIN-UP.md`](./SPIN-UP.md). Agents launching GTM should read that file next.
