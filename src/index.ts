/** @glitchwav/bookkeeper-funnel-assets — public surface for agents. */

export {
  FUNNEL_CATALOG,
  OFFERS,
  SIX_MS_MAP,
  getAssetsBySixM,
  getAssetById,
} from './catalog.js';
export type {
  SixM,
  FunnelAssetKind,
  FunnelAssetRef,
  OfferSpec,
} from './catalog.js';

export { magnetCopy } from './copy/magnet.js';
export { packCopy } from './copy/pack.js';
export { adVariants, adAudienceNotes } from './copy/ads.js';
export type { AdVariant } from './copy/ads.js';
export { ctaCopy } from './copy/cta.js';

export {
  Hero,
  Offer,
  Proof,
  CtaBand,
} from './landing/index.js';
export type {
  HeroProps,
  OfferProps,
  ProofProps,
  ProofItem,
  CtaBandProps,
} from './landing/index.js';

export { fbAdTemplates, AdCreativeFrame } from './creatives/index.js';
export type { AdCreativeTemplate, AdFrameProps } from './creatives/index.js';

export {
  welcomeEmail,
  nurtureSequence,
  purchaseEmails,
} from './email/index.js';
export type { EmailStub } from './email/index.js';

export {
  createExplorerTools,
  createAssetDiscoveryAgent,
  requireGithubToken,
  DEFAULT_ACCOUNTS,
  listStars,
  listAccountRepos,
  exploreTrackedAccounts,
  fetchRepoFile,
  reusePointers,
  listRepoRootPaths,
} from './github/index.js';
export type {
  ExplorerToolsOptions,
  TrackedGithubAccount,
  AssetDiscoveryAgentOptions,
  StarredRepo,
  ListedRepo,
  ListStarsOptions,
  FilePointer,
  FetchedFile,
} from './github/index.js';
