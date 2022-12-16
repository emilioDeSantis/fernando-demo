/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        color: {
            background: "#fff",
            theme: "#1E13FF",
        },
        dimension: {
            sideMargin: "0.8rem",
            navHeight: "3rem",
            sectionMargin: "6rem",
            borderRadius: "0.2rem",
        },
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
};

module.exports = nextConfig;
