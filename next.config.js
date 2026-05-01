/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/THEGOODLUMS',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.seadn.io',
      },
      {
        protocol: 'https',
        hostname: 'openseauserdata.com',
      },
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
