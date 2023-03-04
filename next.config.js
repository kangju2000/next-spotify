/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['styles.ts', 'ts', 'tsx', 'js', 'jsx'],
  images: {
    domains: ['i.scdn.co'],
  },
};

module.exports = nextConfig;
