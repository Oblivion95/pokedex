/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false,
      },
    ]
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  }
}

module.exports = nextConfig
