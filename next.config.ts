import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.151', 'localhost'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ghchart.rshah.org',
      },
    ],
  },
};

export default nextConfig;
