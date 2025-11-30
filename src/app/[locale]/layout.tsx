import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {setRequestLocale, getMessages} from 'next-intl/server';
import {NextIntlClientProvider} from 'next-intl';
import {routing} from '@/src/i18n/routing';
import Navigation from '@/src/components/Navigation'
import "@/src/app/globals.css";

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
  description: "Cashu is privacy-preserving digital cash using blind signatures",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function LocaleLayout({children, params}: Props)
{
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;

  // Set the request locale for static export
  setRequestLocale(locale);

  // Get messages using next-intl's getMessages with explicit locale (works in both dev and build)
  const messages = await getMessages({locale});

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

