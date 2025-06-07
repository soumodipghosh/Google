/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    API_KEY: process.env.API_KEY,
    CONTEXT_KEY: process.env.CONTEXT_KEY,
  },
};

module.exports = nextConfig;
