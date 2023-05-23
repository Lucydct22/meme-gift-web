/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'giphy.com',
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'media0.giphy.com'
      },
      {
        protocol: 'https',
        hostname: '**'
      },
    ],
  },
}

module.exports = nextConfig
