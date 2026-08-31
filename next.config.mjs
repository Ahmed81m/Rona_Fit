/** @type {import('next').NextConfig} */

// Repository name on GitHub — used as the base path so the site works
// correctly when served from https://<user>.github.io/<repo>/
// Change this single value if the repository is ever renamed.
const REPO_NAME = "Rona_Fit";

// Set BASE_PATH="" in the environment (e.g. for a custom domain) to
// deploy at the root instead of a repo sub-path.
const basePath = process.env.BASE_PATH ?? `/${REPO_NAME}`;

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
