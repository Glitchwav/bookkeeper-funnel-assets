import { createOctokit } from '@github-tools/sdk';
import { requireGithubToken } from './client.js';

export interface FilePointer {
  owner: string;
  repo: string;
  path: string;
  ref?: string;
  /** Non-secret reuse hint for agents. */
  hint?: string;
}

export interface FetchedFile {
  pointer: FilePointer;
  content: string;
  url: string;
}

/**
 * Fetch file text via Octokit from @github-tools/sdk (no secrets).
 * For agent tool-loop use, prefer createExplorerTools → getFileContent tool.
 */
export async function fetchRepoFile(
  pointer: FilePointer,
  options: { token?: string } = {},
): Promise<FetchedFile> {
  const token = requireGithubToken(options.token);
  const octokit = createOctokit(token);
  const { data } = await octokit.rest.repos.getContent({
    owner: pointer.owner,
    repo: pointer.repo,
    path: pointer.path,
    ref: pointer.ref,
  });

  if (Array.isArray(data) || data.type !== 'file' || !('content' in data)) {
    throw new Error(
      `Expected a file at ${pointer.owner}/${pointer.repo}/${pointer.path}`,
    );
  }

  const text = Buffer.from(data.content, data.encoding === 'base64' ? 'base64' : 'utf8').toString(
    'utf8',
  );

  return {
    pointer,
    content: text,
    url:
      data.html_url ??
      `https://github.com/${pointer.owner}/${pointer.repo}/blob/${pointer.ref ?? 'HEAD'}/${pointer.path}`,
  };
}

/**
 * Clone-ish reuse pointers — metadata only, never clones a full git repo.
 * Agents can fetch individual files with fetchRepoFile.
 */
export function reusePointers(
  owner: string,
  repo: string,
  paths: string[],
): FilePointer[] {
  return paths.map((path) => ({
    owner,
    repo,
    path,
    hint: `Import or fetch ${owner}/${repo}/${path} — do not vendor secrets.`,
  }));
}

/** List root tree paths (shallow) using Octokit from the SDK. */
export async function listRepoRootPaths(options: {
  token?: string;
  owner: string;
  repo: string;
  ref?: string;
}): Promise<string[]> {
  const token = requireGithubToken(options.token);
  const octokit = createOctokit(token);
  const { data } = await octokit.rest.repos.getContent({
    owner: options.owner,
    repo: options.repo,
    path: '',
    ref: options.ref,
  });
  if (!Array.isArray(data)) return [];
  return data.map((entry) => entry.path);
}
