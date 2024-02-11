/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
const removeImports = require("next-remove-imports")();
module.exports = removeImports({});
module.exports = nextConfig;
