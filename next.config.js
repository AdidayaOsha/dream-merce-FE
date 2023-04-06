/** @type {import('next').NextConfig} */
const nextConfig = {
   // removing any unecessary console log etc.
   compiler: {
      removeConsole: true,
   },
   reactStrictMode: true,
};

module.exports = nextConfig;
