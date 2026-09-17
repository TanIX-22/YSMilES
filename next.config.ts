import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/YSMilES',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'y-smiles.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
