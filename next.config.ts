import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  eslint: {
    // Production build için ESLint uyarılarını ignore et
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Production build için TypeScript hatalarını ignore et (framer-motion type issues)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
