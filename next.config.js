/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // 👈 enable App Router inside src/app
  },
  images: {
    domains: ['upload.wikimedia.org'],
  },
};

module.exports = nextConfig;
