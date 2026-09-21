# Codie Sanchez spin-up — this product, this week

Operational sequence for **Glitchwav/bookkeeper-funnel-assets**. Agents: treat this as the launch runbook. Copy and CTAs live in package exports; this file is the map.

**Product:** solo / small-firm bookkeepers drowning in month-end W-9, bank statement, receipt, and payroll chases.

**Not this spin:** finishing a full SaaS, $39/mo, managed desk, partner sales calls, Facebook group cold posts, or spending Meta budget from this repo.

Pull the law + assets:

```ts
import {
  PRIMARY_CTA,        // 'Grab your free Missing-Docs Spreadsheet'
  SIX_MS_MAP,
  OFFERS,
  adaptedAdVariants,
  LONG_RUNNING_PATTERNS,
  INGESTED_ADS,
  magnetCopy,
  packCopy,
  welcomeEmail,
  nurtureSequence,
} from '@glitchwav/bookkeeper-funnel-assets';
```

Law: [`plans/FUNNEL.md`](./FUNNEL.md). Variants: `src/ads/adaptedVariants.ts`. Keepers: `data/meta-ad-library-ingested.json`.

---

## 1. Magnet

**Named gift:** Month-End Missing-Docs Spreadsheet (`OFFERS.magnet`, `magnetCopy.productName`).

- Specific name. Not “a free guide.” Not “book a call.”
- Hook is **self-reference**: the bookkeeper already lives this pain (chasing W-9s / bank feeds / receipts at month-end). The ad names the pain they already have; the gift is the tracker they wish they had opened Tuesday.
- Delivery: unique URL (Google Sheet template or file download) after email opt-in. Owned list.
- Export: `magnetCopy.headlines` / `optInLabel` (must equal `PRIMARY_CTA`).

**Do not** lead with the $19 pack, a demo, or a SaaS signup on cold traffic.

---

## 2. Message

**Customer = hero.** They leave on time at close week with a complete file. The spreadsheet is the mechanism, mentioned second.

| First | Second |
|-------|--------|
| Ideal life / outcome (evenings back, docs in, no 9pm chase) | Sheet / scripts / statuses |

- No stack-first copy (“TaxDome + this + that”). `SIX_MS_MAP.message.checklist`.
- Hero/landing: `magnetCopy.subheads[0]` already states hero then mechanism. `Hero` defaults to that + `PRIMARY_CTA`.
- Adapt keeper *angles* from `LONG_RUNNING_PATTERNS`. Never paste competitor bodies (`INGESTED_ADS.kept[].body` is provenance, not copy).

---

## 3. Micro-commitment ladder

| Step | Offer | Price | When |
|------|--------|-------|------|
| 1 | Month-End Missing-Docs Spreadsheet | Free | Cold ads + landing. Only CTA. |
| 2 | Missing Docs Reminder Pack | **$19** one-time Stripe | After opt-in (email) and/or Days 8–14 retarget |
| 3 | Later upsell (retainer / desk / software) | TBD | **Only after** magnet → $19 is cash-positive |

**Explicitly not this spin:** managed desk, **$39/mo SaaS**, high-ticket on the first paid yes.

`OFFERS.pack.priceCents === 1900`. `packCopy.checkoutCta` is the **secondary** ask.

---

## 4. Make the ask

**Single primary CTA** (must match export):

```
Grab your free Missing-Docs Spreadsheet
```

`PRIMARY_CTA` / `ctaCopy.primary` / `magnetCopy.optInLabel` / every `adaptedAdVariants[].cta`.

- Personal “your”. Strong verb (“Grab”). Explicit trade: work email ↔ named sheet (`ctaCopy.trade`).
- Repeat on: Meta primary text, headline, landing hero, CTA band, thank-you line.
- **Post-opt-in only:** secondary ask for $19 (`ctaCopy.makeTheAsk[0]` — “Unlock your Reminder Pack — $19”). Cold ads do not sell the pack.

---

## 5. Money

Path: **Meta ads → owned landing → email capture → Stripe $19**.

- Own the customer (list + checkout). Do not rent demand (marketplaces, group admins, affiliate that keeps the email).
- **Margin ≥ 2–3× CAC** before raising daily spend. Example: if blended CAC to a $19 buyer is $8, you are not at 2×; stay at $10–20/day and fix conversion before scaling.
- **NO** Facebook group cold posts.
- **NO** competitor CTR as a go/no-go. We do not need their click-through to ship. We use their *longevity + angle* (`days_running`, `jev_angle`) as pattern only.
- This package **does not** deploy ads or charge a card. Humans / ads operators run spend outside the repo.

---

## 6. Map (compressed)

### Weekend 1 — scaffold (no spend)

Deliverables before Monday ads:

1. Live **free spreadsheet** URL (template anyone can copy).
2. Landing with **one** CTA = `PRIMARY_CTA` (`Hero` + `CtaBand` `mode="magnet"`).
3. Email: welcome delivers the sheet (`welcomeEmail`); nurture exists (`nurtureSequence`) with **soft** $19 on touches 2–3.
4. Stripe Checkout for **$19** Reminder Pack (`OFFERS.pack`). Test mode then live. Receipt uses `purchaseEmails`.
5. Meta pixel on landing + thank-you / opt-in event. **Do not** turn ads on until 1–4 exist.
6. Three magnet ads from the creative spin below, **same CTA**.

### Days 1–7 — magnet-only ads

- Cold traffic to landing. **Magnet CTA only.**
- Daily cap guidance: **$10–20/day** total. Do not “test bigger.”
- Kill: zero link-clicks after ~$15, or CTR/hold that is a dead creative vs the set (replace from remaining `adaptedAdVariants`).
- Keep: cheapest email opt-ins. Optimize to **complete registration / lead**, not landing-page views.

### Days 8–14 — retarget $19

- Audience: viewed landing, engaged, or opted in; **exclude** purchasers.
- Creative/offer: Reminder Pack (`packCopy`, `Offer` section). Secondary CTA only here.
- Same daily cap unless CAC to $19 is already ≤ ~half of $19 **and** you can see a path to 2–3× margin (include refunds + ad spend).
- Kill zeros / keep winners. Then **evergreen** the winning magnet ad + winning retarget ad at the same cap.

No group posting anywhere on this map. No sales calls.

---

## 7. Creative spin (3–5 angles)

Import and use as **primary text + headlines**. Wording in repo is already original.

```ts
import { adaptedAdVariants, LONG_RUNNING_PATTERNS } from '@glitchwav/bookkeeper-funnel-assets';
```

Ship **three** live ads this week (Days 1–7). Hold the fourth/fifth as replacements when something dies.

| Use | `adaptedAdVariants` id | Angle | Pattern cite (not copy) |
|-----|------------------------|-------|-------------------------|
| Ad A | `adapt.chaos-to-system.laura-pattern` | `chaos_to_system` | [796087482831403](https://www.facebook.com/ads/library/?id=796087482831403) |
| Ad B | `adapt.tool-overwhelm.half-built-pattern` | `tool_overwhelm` | [675637575166635](https://www.facebook.com/ads/library/?id=675637575166635) |
| Ad C | `adapt.before-after.metrics-pattern` | `before_after_metrics` | [1918627868698430](https://www.facebook.com/ads/library/?id=1918627868698430) |
| Hold | `adapt.time-life.balance-pattern` | `time_life_balance` | [1614645492842464](https://www.facebook.com/ads/library/?id=1614645492842464) |
| Hold | `adapt.chaos-growth.systems-broke-pattern` | `chaos_to_system` | [1019731983575752](https://www.facebook.com/ads/library/?id=1019731983575752) |

Each `cta` is `PRIMARY_CTA`. Overlay from `fbAdTemplates` (`creative.matrix`) if you need a static.

`LONG_RUNNING_PATTERNS` explains how we adapt each angle. `INGESTED_ADS.discarded` (Booming career training, Bark, Performance Financial) stays discarded.

---

## 8. Definition of spun up this week

All of these, or it is **not** spun up:

- [ ] Live free spreadsheet URL (copy-link or download) delivered by email.
- [ ] Stripe **$19** Checkout live for Missing Docs Reminder Pack.
- [ ] Meta pixel firing on owned landing + lead event.
- [ ] **3 ads**, one CTA (`PRIMARY_CTA`), magnet-only, live at **$10–20/day** cap.
- [ ] Email: deliver sheet immediately + soft $19 in nurture (not the cold ad).
- [ ] Daily cap set; no open-ended budget.

Optional (not required to call it spun): first $19 sale, retarget stack (that is Days 8–14).

---

## 9. Explicit skips (this spin)

- Facebook **group** cold posts (any group, any “value post”).
- Partner / accountant **sales calls** as the acquisition path.
- Finishing **full SaaS** (or $39/mo) before first cash from magnet → $19.
- Scaling past $10–20/day before 2–3× CAC margin is visible.
- Copying competitor ad text from `INGESTED_ADS.kept` bodies.
- Deploying or spending from this GitHub package / agents.

When in doubt, ship the named spreadsheet and the one CTA.
