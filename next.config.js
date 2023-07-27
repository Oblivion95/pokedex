/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/",
      destination: "/home",
      permanent: false,
    },
  ],
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
