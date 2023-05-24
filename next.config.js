/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      },
    ],
  },
 env: {
    BASE_URL: process.env.BASE_URL,
    GIPHY_API_KEY: process.env.GIPHY_API_KEY,
  },
}

module.exports = nextConfig
