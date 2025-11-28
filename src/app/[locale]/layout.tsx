import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {setRequestLocale} from 'next-intl/server';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';
import Navigation from '../../components/Navigation'
import "../globals.css";

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

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
//   params: Promise<{locale: string}>;
// }>)
export default async function LocaleLayout({children, params}: Props)
{
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <Navigation />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
