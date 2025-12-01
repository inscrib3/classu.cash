import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// const nextConfig: NextConfig = {
//   output: "export",
//   images: { unoptimized: true },
// };
const nextConfig: NextConfig = {
    output: "export",
    turbopack: {},
};

const withNextIntl = createNextIntlPlugin('./i18n.ts');
export default withNextIntl(nextConfig);
