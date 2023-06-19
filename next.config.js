/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    loader: 'custom',
    loaderFile: './src/app/cloudinary.loader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com/edoparearyee',
      },
    ],
    deviceSizes: [320, 768, 1024, 1200],
  },
};

module.exports = nextConfig;
