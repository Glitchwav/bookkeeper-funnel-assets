import {
  createGithubAgent,
  type CreateGithubAgentOptions,
} from '@github-tools/sdk';
import { DEFAULT_ACCOUNTS, requireGithubToken } from './client.js';

export type AssetDiscoveryAgentOptions = Omit<
  CreateGithubAgentOptions,
  'preset' | 'token'
> & {
  token?: string;
  /** Language model passed through to createGithubAgent (required by SDK). */
  model: CreateGithubAgentOptions['model'];
};

/**
 * Thin wrapper around createGithubAgent with repo-explorer preset
 * and Glitchwav / JHulsinger discovery instructions.
 */
export function createAssetDiscoveryAgent(options: AssetDiscoveryAgentOptions) {
  const token = requireGithubToken(options.token);
  const accounts = DEFAULT_ACCOUNTS.join(' and ');

  return createGithubAgent({
    ...options,
    token,
    preset: 'repo-explorer',
    additionalInstructions: [
      options.additionalInstructions,
      `Prefer public repos and stars belonging to GitHub users ${accounts}.`,
      'When discovering funnel or landing assets, summarize paths and reuse pointers — do not print secrets or .env files.',
      'This package ships bookkeeper FB-ads GTM assets only; do not deploy ads or spend money.',
    ]
      .filter(Boolean)
      .join('\n'),
  });
}
