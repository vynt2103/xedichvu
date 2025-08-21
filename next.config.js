/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "res.cloudinary.com", "cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
