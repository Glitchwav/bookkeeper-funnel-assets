/**
 * Wire Jev-ingested Meta Ad Library keepers into the package.
 * Source JSON lives at data/meta-ad-library-ingested.json (also mirrored under Documents).
 * Prefer Workflows For Tax Pros–style angles; discard wrong-ICP rows already marked discarded.
 */

import ingestedJson from '../../data/meta-ad-library-ingested.json' with { type: 'json' };

export type JevAngle =
  | 'chaos_to_system'
  | 'before_after_metrics'
  | 'time_life_balance'
  | 'tool_overwhelm'
  | 'other_or_na';

export type JevIngestLabel =
  | 'keep_adapt'
  | 'keep_hook_only'
  | 'discard_wrong_icp'
  | 'discard_unusable';

export interface IngestedAd {
  ad_archive_id: string;
  page: string;
  days_running: number;
  start: string;
  title: string;
  body: string;
  cta: string | null;
  link: string | null;
  ad_library_url: string;
  platforms: string[];
  display_format: string;
  jev_ingest: string;
  jev_ingest_confidence: number;
  jev_ingest_probs?: Record<string, number>;
  jev_angle: string;
  jev_angle_confidence: number;
}

export interface IngestedBundle {
  source: string;
  proxy: string;
  ingested_at: string;
  kept: IngestedAd[];
  discarded: IngestedAd[];
  jev_model: string;
}

/** Full ingested bundle (kept + discarded + metadata). */
export const INGESTED_ADS = ingestedJson as IngestedBundle;

/** Preferred creative angles for bookkeeper ICP adaptations. */
export const PREFERRED_ANGLES: readonly JevAngle[] = [
  'chaos_to_system',
  'before_after_metrics',
  'time_life_balance',
  'tool_overwhelm',
] as const;

export interface LongRunningPattern {
  angle: JevAngle;
  label: string;
  howWeAdapt: string;
  sourceAdArchiveIds: string[];
  sourceLibraryUrls: string[];
}

function urlsFor(angle: string): { ids: string[]; urls: string[] } {
  const rows = INGESTED_ADS.kept.filter((a) => a.jev_angle === angle);
  return {
    ids: rows.map((r) => r.ad_archive_id),
    urls: rows.map((r) => r.ad_library_url),
  };
}

/** Agent-readable pattern cards derived from kept long-runners (no verbatim body copy). */
export const LONG_RUNNING_PATTERNS: LongRunningPattern[] = [
  {
    angle: 'chaos_to_system',
    label: 'Chaos → system',
    howWeAdapt:
      'Open on reactive month-end (inbox chase, “where’s my docs?”) then show the named spreadsheet as the calm system — customer is the hero who gets ahead.',
    ...(() => {
      const u = urlsFor('chaos_to_system');
      return { sourceAdArchiveIds: u.ids, sourceLibraryUrls: u.urls };
    })(),
  },
  {
    angle: 'before_after_metrics',
    label: 'Before / after metrics',
    howWeAdapt:
      'Paint a concrete before (hours lost chasing statements) vs after (status column green, fewer follow-ups). Use our outcomes, never competitor numbers.',
    ...(() => {
      const u = urlsFor('before_after_metrics');
      return { sourceAdArchiveIds: u.ids, sourceLibraryUrls: u.urls };
    })(),
  },
  {
    angle: 'time_life_balance',
    label: 'Time / life balance',
    howWeAdapt:
      'Ideal life first: leave on time at close week. Mechanism second: free Missing-Docs Spreadsheet so the chase isn’t your evening.',
    ...(() => {
      const u = urlsFor('time_life_balance');
      return { sourceAdArchiveIds: u.ids, sourceLibraryUrls: u.urls };
    })(),
  },
  {
    angle: 'tool_overwhelm',
    label: 'Tool overwhelm',
    howWeAdapt:
      'Acknowledge half-built trackers and too many apps. Offer one named free sheet — not another platform to configure.',
    ...(() => {
      const u = urlsFor('tool_overwhelm');
      return { sourceAdArchiveIds: u.ids, sourceLibraryUrls: u.urls };
    })(),
  },
];

export function keptByPreferredAngle(): IngestedAd[] {
  return INGESTED_ADS.kept.filter((a) =>
    (PREFERRED_ANGLES as readonly string[]).includes(a.jev_angle),
  );
}
