/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.dummyjson.com", 'www.samundra.com.np']
  }
}

module.exports = nextConfig
