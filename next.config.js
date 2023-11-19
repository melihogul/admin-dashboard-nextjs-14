/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'react.dev',
          },
        ]
}
}

module.exports = nextConfig
