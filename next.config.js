/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "boxingoctopus-assets.nyc3.digitaloceanspaces.com",
      "cdn.sanity.io",
    ],
  },
}

module.exports = nextConfig
