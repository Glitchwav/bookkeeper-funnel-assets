import { createOctokit } from '@github-tools/sdk';
import {
  DEFAULT_ACCOUNTS,
  requireGithubToken,
  type TrackedGithubAccount,
} from './client.js';

export interface StarredRepo {
  owner: string;
  name: string;
  fullName: string;
  description: string | null;
  url: string;
  language: string | null;
  topics: string[];
  starredAt?: string;
}

export interface ListedRepo {
  owner: string;
  name: string;
  fullName: string;
  description: string | null;
  url: string;
  language: string | null;
  topics: string[];
  pushedAt: string | null;
}

export interface ListStarsOptions {
  token?: string;
  username?: TrackedGithubAccount | string;
  perPage?: number;
  /** Case-insensitive filter against name/description/topics. */
  query?: string;
}

function matchesQuery(
  query: string | undefined,
  parts: Array<string | null | undefined>,
): boolean {
  if (!query) return true;
  const q = query.toLowerCase();
  return parts.some((p) => (p ?? '').toLowerCase().includes(q));
}

/** List starred repos for Glitchwav or JHulsinger (default: Glitchwav). */
export async function listStars(
  options: ListStarsOptions = {},
): Promise<StarredRepo[]> {
  const token = requireGithubToken(options.token);
  const username = options.username ?? 'Glitchwav';
  const perPage = options.perPage ?? 30;
  const octokit = createOctokit(token);

  const { data } = await octokit.rest.activity.listReposStarredByUser({
    username,
    per_page: perPage,
    headers: { accept: 'application/vnd.github.star+json' },
  });

  const rows: StarredRepo[] = data.map((entry) => {
    // star+json returns { starred_at, repo }; plain json returns repo objects.
    const repo =
      'repo' in entry && entry.repo
        ? entry.repo
        : (entry as unknown as {
            owner: { login: string };
            name: string;
            full_name: string;
            description: string | null;
            html_url: string;
            language: string | null;
            topics?: string[];
          });
    const starredAt =
      'starred_at' in entry ? String(entry.starred_at) : undefined;
    return {
      owner: repo.owner.login,
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description,
      url: repo.html_url,
      language: repo.language ?? null,
      topics: repo.topics ?? [],
      starredAt,
    };
  });

  return rows.filter((r) =>
    matchesQuery(options.query, [
      r.fullName,
      r.description,
      r.language,
      ...r.topics,
    ]),
  );
}

/** List public repos for Glitchwav or JHulsinger. */
export async function listAccountRepos(
  options: {
    token?: string;
    username?: TrackedGithubAccount | string;
    perPage?: number;
    query?: string;
  } = {},
): Promise<ListedRepo[]> {
  const token = requireGithubToken(options.token);
  const username = options.username ?? 'Glitchwav';
  const octokit = createOctokit(token);

  const { data } = await octokit.rest.repos.listForUser({
    username,
    per_page: options.perPage ?? 30,
    sort: 'updated',
  });

  return data
    .map((repo) => ({
      owner: repo.owner.login,
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description,
      url: repo.html_url,
      language: repo.language ?? null,
      topics: repo.topics ?? [],
      pushedAt: repo.pushed_at ?? null,
    }))
    .filter((r) =>
      matchesQuery(options.query, [
        r.fullName,
        r.description,
        r.language,
        ...r.topics,
      ]),
    );
}

/** Convenience: stars + repos for both tracked accounts. */
export async function exploreTrackedAccounts(
  options: {
    token?: string;
    query?: string;
    perPage?: number;
  } = {},
) {
  const results = [];
  for (const username of DEFAULT_ACCOUNTS) {
    const [stars, repos] = await Promise.all([
      listStars({ ...options, username }),
      listAccountRepos({ ...options, username }),
    ]);
    results.push({ username, stars, repos });
  }
  return results;
}
