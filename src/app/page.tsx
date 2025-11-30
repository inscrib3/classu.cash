"use client";

import { useEffect } from "react";
import { routing } from "@/src/i18n/routing";
import { Geist, Geist_Mono } from "next/font/google";

import "@/src/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootPage() {
  useEffect(() => {
    window.location.replace(`/${routing.defaultLocale}`);
  }, []);

  // Show a loading state while redirecting
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      </body>
    </html>
  );
}
