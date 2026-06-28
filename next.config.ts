import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/ISKCONMiami" : "";
const assetPrefix = isGithubPages ? "/ISKCONMiami" : "";

const nextConfig: NextConfig = {
  basePath,
  assetPrefix,
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" }
    ]
  }
};

export default nextConfig;
