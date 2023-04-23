/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.pixabay.com", 'img.icons8.com', 'raw.githubusercontent.com']
  },
  images: {
    loader : "akamai",
    path : "",
  }
}

module.exports = nextConfig
