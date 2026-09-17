import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
