/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles')],
  },
  // *This variable it's important to allow get images
  // https://nextjs.org/docs/messages/next-image-unconfigured-host
  images: { domains: ['rickandmortyapi.com'] },
};

module.exports = nextConfig;
