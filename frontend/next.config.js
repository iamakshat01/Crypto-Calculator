/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_API: process.env.BASE_API,
    API_KEY: process.env.API_KEY,
  },
}

module.exports = nextConfig
