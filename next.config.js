/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // để build không fail vì ESLint
  },
}

module.exports = nextConfig
