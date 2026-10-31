import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output only for Docker builds — keeps Vercel deployments unaffected
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
  transpilePackages: ["lucide-react"],
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/services", destination: "/what-we-do#design", permanent: true },
      { source: "/custom", destination: "/what-we-do#custom", permanent: true },
      { source: "/programs/pathway", destination: "/programs#pathway", permanent: true },
      { source: "/team", destination: "/about#team", permanent: true },
    ];
  },
};

export default nextConfig;
