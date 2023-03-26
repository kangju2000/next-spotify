/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  pageExtensions: ['styles.ts', 'ts', 'tsx', 'js', 'jsx'],
  images: {
    domains: ['i.scdn.co', 't.scdn.co', 'charts-images.scdn.co'],
  },
};

module.exports = nextConfig;
