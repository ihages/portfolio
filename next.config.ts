import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  basePath: "/portfolio",
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  webpack(config) {
    // Ensure Webpack respects the tsconfig.json paths
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    config.resolve.modules = [path.resolve(__dirname, "src"), "node_modules"];
    return config;
  },
  // Ensure TypeScript paths are respected
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
};

export default nextConfig;