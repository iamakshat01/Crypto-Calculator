/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
    },
  env: {
    BASE_API: process.env.BASE_API,
  }
}

module.exports = nextConfig
