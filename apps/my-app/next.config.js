/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["store-api-controller"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'img.ltwebstatic.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'nextui.org',
      }
    ],
  },
};

module.exports = nextConfig;
