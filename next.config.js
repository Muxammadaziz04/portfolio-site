/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.ctfassets.net']
  },
  env:{
    space: 'az4gnloa35ra',
    contentful_token: 'fqqYOJYrKwMBQvL2kO5gG619yNcIL9N6nX7H3ebsR1E'
  }
}

module.exports = nextConfig
