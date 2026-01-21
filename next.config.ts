import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: 'export',
  basePath: '/bellohirewebsite-new',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
