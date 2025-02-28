/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    // next/fontをBabelと一緒に使用できるようにする
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
