import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Menu_cafeteria',
  assetPrefix: '/Menu_cafeteria',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
