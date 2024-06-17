/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],

    remotePatterns: [
      {
        hostname: "s.gravatar.com",
      },
    ],
  },
};

module.exports = nextConfig;
