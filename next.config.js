/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.mdx?$/i,
      use: 'raw-loader',
    })
    return config
  },
}

module.exports = nextConfig
