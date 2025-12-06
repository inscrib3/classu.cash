"use client";

import React from "react";

import { useRouter } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";

export const Footer: React.FC = () => {
  const router = useRouter();
  const t = useTranslations("HomePage");

  return (
    <>
      {/* Nuts Selection */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {t("Nuts to Explore")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => router.push("/")}
            className={
              "cursor-pointer bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-pink-400/50 hover:scale-105 transition-transform"
            }
          >
            <div className="text-2xl font-bold mb-2">{t("Overview")}</div>
            <div className="text-lg font-semibold">
              {t("Overview of Cashu and its Concepts")}
            </div>
          </button>
          <button
            onClick={() => router.push("/nut00")}
            className={
              "cursor-pointer bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-pink-400/50 hover:scale-105 transition-transform"
            }
          >
            <div className="text-2xl font-bold mb-2">{t("NUT 00")}</div>
            <div className="text-lg font-semibold">
              {t("Notation, Utilization, and Terminology")}
            </div>
          </button>
        </div>
      </section>

      {/* Useful Links */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {t("Useful Links")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => window.open("https://cashu.space", "_blank")}
            className={
              "cursor-pointer p-6 rounded-xl border-2 transition-all transform hover:scale-105 bg-white/10 border-white/30 hover:bg-white/20"
            }
          >
            <div className="text-2xl font-bold mb-2">{t("Website")}</div>
            <div className="text-lg font-semibold">cashu.space</div>
          </button>
          <button
            onClick={() => window.open("https://docs.cashu.space", "_blank")}
            className={
              "cursor-pointer p-6 rounded-xl border-2 transition-all transform hover:scale-105 bg-white/10 border-white/30 hover:bg-white/20"
            }
          >
            <div className="text-2xl font-bold mb-2">{t("Docs")}</div>
            <div className="text-lg font-semibold">docs.cashu.space</div>
          </button>
          <button
            onClick={() => window.open("https://cashu.me", "_blank")}
            className={
              "cursor-pointer p-6 rounded-xl border-2 transition-all transform hover:scale-105 bg-white/10 border-white/30 hover:bg-white/20"
            }
          >
            <div className="text-2xl font-bold mb-2">{t("Wallet")}</div>
            <div className="text-lg font-semibold">cashu.me</div>
          </button>
        </div>
      </section>

      {/* Section Powered by */}
      <div className="text-center text-sm text-gray-400 mt-12">
        {t("Powered")}{" "}
        <a
          href="https://x.com/warlockbtc"
          target="_blank"
          className="underline hover:text-white"
        >
          @warlockbtc
        </a>{" "}
        <a
          href="https://x.com/chefpino_"
          target="_blank"
          className="underline hover:text-white"
        >
          @chefpino_
        </a>{" "}
        <a
          href="https://x.com/mauropili"
          target="_blank"
          className="underline hover:text-white"
        >
          @mauropili
        </a>
      </div>
    </>
  );
};
