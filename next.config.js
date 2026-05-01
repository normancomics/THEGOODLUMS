/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/THEGOODLUMS',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
