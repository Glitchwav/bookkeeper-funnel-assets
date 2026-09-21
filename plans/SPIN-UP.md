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
  adaptedAdVariants,  // IMAGE/static defaults
  IMAGE_AD_PATTERNS,
  NORMAL_AD_EXAMPLES,
  deprecatedVideoTestimonialVariants, // not for default spin-up
  magnetCopy,
  packCopy,
  welcomeEmail,
  nurtureSequence,
} from '@glitchwav/bookkeeper-funnel-assets';
```

Law: [`plans/FUNNEL.md`](./FUNNEL.md). IMAGE variants: `src/ads/adaptedVariants.ts`. Normal IMAGE sources: `data/meta-ad-library-normal-selected.json`.

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
- Adapt **IMAGE** patterns from `IMAGE_AD_PATTERNS` / `NORMAL_AD_EXAMPLES` (Financial Cents primary). Never paste competitor bodies. Do not default to video testimonials.

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

## 7. Creative spin (IMAGE / static — default)

**Format rule:** ship **IMAGE/static** ads. Do **not** default to Workflows-For-Tax-Pros–style UGC / named video testimonials (Laura/Rebecca/Samantha chaos stories). Those live only in `deprecatedVideoTestimonialVariants` and are marked `deprecated: true`.

Pattern sources (provenance only — rewrite, never paste):

| Role | Page | Archive ID | Library |
|------|------|------------|---------|
| **PRIMARY template** | Financial Cents | `914432501713212` | [Ad Library](https://www.facebook.com/ads/library/?id=914432501713212) — “one place / every client document,” short pain about texts/email chains |
| Named magnet | TaxDome | `1094014579789282` | [Ad Library](https://www.facebook.com/ads/library/?id=1094014579789282) — named free guide frame |
| Insight headline | TaxDome | `3765554656920393` | [Ad Library](https://www.facebook.com/ads/library/?id=3765554656920393) — early-move insight |
| Free-gift magnet | Social Accountant | `1649956189164177` | [Ad Library](https://www.facebook.com/ads/library/?id=1649956189164177) — FREE named asset (magnet pattern only) |

```ts
import {
  adaptedAdVariants,          // default IMAGE set
  IMAGE_AD_PATTERNS,          // pattern cards
  NORMAL_AD_EXAMPLES,         // wired JSON
  deprecatedVideoTestimonialVariants, // do not use for spin-up
  PRIMARY_CTA,
} from '@glitchwav/bookkeeper-funnel-assets';
```

Ship **three** live IMAGE ads this week (Days 1–7). Hold the rest as replacements.

| Use | `adaptedAdVariants` id | Pattern | Cite |
|-----|------------------------|---------|------|
| Ad A (primary) | `adapt.image.one-place.every-doc` | `one_place_every_doc` | #914432501713212 |
| Ad B | `adapt.image.named-magnet.month-end-guide` | `named_lead_magnet` | #1094014579789282 |
| Ad C | `adapt.image.insight.early-close-move` | `insight_hook` | #3765554656920393 |
| Hold | `adapt.image.magnet.free-named-gift` | `free_gift_magnet` | #1649956189164177 |
| Hold | `adapt.image.one-place.stop-threads` | `one_place_every_doc` | #914432501713212 |

Each `cta` is `PRIMARY_CTA` (`Grab your free Missing-Docs Spreadsheet`). Overlay briefs: `fbAdTemplates` (`creative.image.one-place`, `creative.image.named-magnet`, `creative.image.insight`).

`IMAGE_AD_PATTERNS` explains how we adapt each IMAGE template. Legacy `LONG_RUNNING_PATTERNS` (Workflows video angles) remain for research only — **not** the default creative brief.


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
