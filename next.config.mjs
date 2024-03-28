/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.shareicon.net",
      },
    ],
  },
};

export default nextConfig;
