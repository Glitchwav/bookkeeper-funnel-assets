import {
  createGithubTools,
  type GithubToolsOptions,
} from '@github-tools/sdk';

export const DEFAULT_ACCOUNTS = ['Glitchwav', 'JHulsinger'] as const;
export type TrackedGithubAccount = (typeof DEFAULT_ACCOUNTS)[number];

export type ExplorerToolsOptions = Omit<GithubToolsOptions, 'preset'> & {
  token: string;
};

/**
 * Thin helper: read-only repo-explorer tools from @github-tools/sdk
 * (vercel-labs/github-tools). Does not vendor SDK source.
 */
export function createExplorerTools(options: ExplorerToolsOptions) {
  return createGithubTools({
    ...options,
    token: options.token,
    preset: 'repo-explorer',
  });
}

export function requireGithubToken(
  token = process.env.GITHUB_TOKEN,
): string {
  if (!token) {
    throw new Error(
      'GITHUB_TOKEN is required for github helpers. Set it in the environment (see .env.example). Never commit tokens.',
    );
  }
  return token;
}
