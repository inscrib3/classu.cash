import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { setRequestLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/src/i18n/routing";
import "@/src/app/globals.css";
import { notFound } from "next/navigation";
import LocaleSwitcher from "@/src/components/LocaleSwitcher";
import { Footer } from "@/src/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Classu | Cashu Protocol Visualizer",
  description:
    "Cashu is privacy-preserving digital cash using blind signatures",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;

  // Set the request locale for static export
  setRequestLocale(locale);

  if (!routing.locales.includes(locale as "en" | "es" | "de" | "it" | "zh")) {
    notFound();
  }

  // Get messages using next-intl's getMessages with explicit locale (works in both dev and build)
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html lang={locale}>
        <head>
          <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="min-h-screen bg-linear-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
            <div className="w-full max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12">
              <div className="flex justify-center mb-4">
                <LocaleSwitcher />
              </div>
              {children}
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
