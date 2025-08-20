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
};
module.exports = nextConfig;
