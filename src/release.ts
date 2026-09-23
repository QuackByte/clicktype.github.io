import { app } from './config';

export interface Release {
  version: string;
  /** Direct link to the macOS zip, or the latest-release page if it couldn't be resolved. */
  url: string;
  checksumUrl?: string;
  size?: number;
}

export const repoUrl = `https://github.com/${app.repo}`;
export const releasesUrl = `${repoUrl}/releases/latest`;

/**
 * Looks up the latest GitHub release at build time. If the API is unreachable
 * the button falls back to the latest-release page, and the script in
 * DownloadButton refreshes the link in the browser either way.
 */
export async function latestRelease(): Promise<Release | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${app.repo}/releases/latest`, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      tag_name: string;
      assets: { name: string; browser_download_url: string; size: number }[];
    };
    const zip = data.assets.find((a) => /-macOS\.zip$/.test(a.name));
    const sum = data.assets.find((a) => /-macOS\.zip\.sha256$/.test(a.name));
    return {
      version: data.tag_name.replace(/^v/, ''),
      url: zip?.browser_download_url ?? releasesUrl,
      checksumUrl: sum?.browser_download_url,
      size: zip?.size,
    };
  } catch {
    return null;
  }
}
