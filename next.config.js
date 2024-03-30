/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/photos/**',
      },
    ],
  },
};
const removeImports = require("next-remove-imports")();
module.exports = removeImports({});
module.exports = nextConfig;
