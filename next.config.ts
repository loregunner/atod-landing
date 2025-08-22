/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "fr"],
  },
  react: { useSuspense: false },
    env: {
    REACT_NEXT_PUBLIC_API_URL: process.env.REACT_NEXT_PUBLIC_API_URL,
  },
};
module.exports = nextConfig;
