import type { NextConfig } from "next";

const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/YSMilES' : '');

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: repoBasePath || undefined,
  assetPrefix: repoBasePath || undefined,
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
