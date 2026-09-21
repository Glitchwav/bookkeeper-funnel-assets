/**
 * Needs GITHUB_TOKEN in the environment.
 * Run: GITHUB_TOKEN=... npm run example:stars
 */
import {
  createExplorerTools,
  exploreTrackedAccounts,
  listStars,
} from '../src/index.js';

async function main() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.error('Set GITHUB_TOKEN (see .env.example). Exiting.');
    process.exit(1);
  }

  const tools = createExplorerTools({ token });
  console.log('repo-explorer tools:', Object.keys(tools).sort().join(', '));

  const glitchStars = await listStars({ token, username: 'Glitchwav', perPage: 10 });
  console.log('\nGlitchwav stars (up to 10):');
  for (const s of glitchStars) {
    console.log(`- ${s.fullName}${s.description ? ` — ${s.description}` : ''}`);
  }

  const explored = await exploreTrackedAccounts({
    token,
    query: 'react',
    perPage: 5,
  });
  for (const block of explored) {
    console.log(`\n${block.username}: ${block.stars.length} matching stars, ${block.repos.length} matching repos`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
