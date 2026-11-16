import type { NextConfig } from "next";

// Set by the GitHub Pages workflow (e.g. "/derek-helman"); empty for local dev.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Static HTML export so the site can be hosted on GitHub Pages.
  output: "export",
  basePath,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
