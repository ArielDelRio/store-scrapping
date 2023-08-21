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
    ],
  },
};

module.exports = nextConfig;
