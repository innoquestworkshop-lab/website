import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output only for Docker builds — keeps Vercel deployments unaffected
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
