/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'OSINT Technologies',
    description: 'The official Kasm workspace for osint.pw',
    icon: '/img/logo.svg',
    listUrl: 'https://osintpw.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
