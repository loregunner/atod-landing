/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    REACT_NEXT_PUBLIC_API_URL: process.env.REACT_NEXT_PUBLIC_API_URL,
  },
};

module.exports = nextConfig;
