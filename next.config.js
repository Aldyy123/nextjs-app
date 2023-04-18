/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    domains: ["cdn.pixabay.com", 'img.icons8.com', 'raw.githubusercontent.com', 'storage.googleapis.com']
  },
  images: {
    loader : "akamai",
    path : "",
  }
}

module.exports = nextConfig
