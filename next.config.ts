import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// const nextConfig: NextConfig = {
//   output: "export",
//   images: { unoptimized: true },
// };
const nextConfig: NextConfig = {
    output: "export",
};

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
export default withNextIntl(nextConfig);
