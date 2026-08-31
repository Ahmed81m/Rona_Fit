// Every static asset in /public must be resolved through this helper so
// links keep working once the site is deployed under a GitHub Pages
// repository sub-path (e.g. /Rona_Fit/), instead of assuming root "/".
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}
