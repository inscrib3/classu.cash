"use client";
import { useEffect, useState } from "react";
import {
  Lock,
  Eye,
  EyeOff,
  Key,
  CheckCircle,
  Database,
  Coins,
  MessageSquare,
  Zap,
} from "lucide-react";
import { ArrowStep } from "./icons/ArrowStep";
import { Header } from "./Header";
import { CharactersSection } from "./CharactersSection";
import { SecretStep } from "./steps/SecretStep";
import { BlindedStep } from "./steps/BlindedStep";
import { TokenStep } from "./steps/TokenStep";
import { PrivateStep } from "./steps/PrivateStep";
import { CheckDBStep } from "./steps/CheckDBStep";
import { PaidStep } from "./steps/PaidStep";

import { Alice } from "./Alice";
import { Bob } from "./Bob";
import { Carol } from "./Carol";

import { useTranslations } from "next-intl";
import { useRouter } from "@/src/i18n/navigation";

const Home = () => {
  const router = useRouter();
  const t = useTranslations("HomePage");
  const [activePhase, setActivePhase] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);

  const phases = [
    {
      title: t("ph1 title"),
      fullTitle: t("ph1 fullTitle"),
      subtitle: t("ph1 subtitle"),
      description: t("ph1 description"),
      steps: [t("ph1 st1"), t("ph1 st2"), t("ph1 st3"), t("ph1 st4")],
    },
    {
      title: t("ph2 title"),
      fullTitle: t("ph2 fullTitle"),
      subtitle: t("ph2 subtitle"),
      description: t("ph2 description"),
      steps: [t("ph2 st1"), t("ph2 st2"), t("ph2 st3")],
    },
    {
      title: t("ph3 title"),
      fullTitle: t("ph3 fullTitle"),
      subtitle: t("ph3 subtitle"),
      description: t("ph3 description"),
      steps: [
        t("ph3 st1"),
        t("ph3 st2"),
        t("ph3 st3"),
        t("ph3 st4"),
        t("ph3 st5"),
      ],
    },
  ];

  const startAnimation = (phase: number) => {
    setActivePhase(phase);
    setAnimationStep(0);
    const interval = setInterval(() => {
      setAnimationStep((prev) => {
        if (prev >= phases[phase].steps.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1800);
  };

  useEffect(() => {
    startAnimation(0);
  }, []);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Characters Section */}
      <CharactersSection />

      {/* Key Concept */}
      <section className="bg-linear-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl p-6 md:p-8 border border-yellow-500/50 mb-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          🔑 {t("Key Concept: Blind Signatures")}
        </h3>
        <p className="text-lg md:text-xl text-center text-gray-200 leading-relaxed">
          {t("Bob signs tokens")}
        </p>
      </section>

      {/* Phase Selection */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {t("Select a Phase")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {phases.map((phase, idx) => (
            <button
              key={idx}
              onClick={() => startAnimation(idx)}
              className={`cursor-pointer p-6 rounded-xl border-2 transition-all transform hover:scale-105 ${
                activePhase === idx
                  ? "bg-linear-to-r from-yellow-500 to-orange-500 border-yellow-300 shadow-2xl"
                  : "bg-white/10 border-white/30 hover:bg-white/20"
              }`}
            >
              <div className="text-2xl font-bold mb-2">
                {t("Phase")} {idx + 1}
              </div>
              <div className="text-lg font-semibold">{phase.title}</div>
              <div className="text-sm opacity-80 mt-1">{phase.subtitle}</div>
            </button>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Main Visualization Area */}
        <section className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-10 border border-white/20 shadow-2xl mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-400">
            {phases[activePhase].fullTitle}
          </h2>
          <p className="text-lg md:text-xl text-center mb-8 text-gray-300">
            {phases[activePhase].description}
          </p>

          {/* Animation Container */}
          <div className="min-h-[400px] md:min-h-[300px] flex items-center justify-center mb-8 px-4">
            {/* Phase 1: Minting */}
            {activePhase === 0 && (
              <div className="flex flex-col sm:flex-row! items-center justify-center gap-6 md:gap-8 w-full max-w-4xl">
                <div
                  className={`transition-all duration-500 ${
                    animationStep >= 0
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50"
                  }`}
                >
                  <Alice size="small" compact />
                </div>

                {animationStep >= 1 && (
                  <>
                    <div className="flex flex-col md:flex-row! items-center gap-4">
                      <SecretStep size="small" />
                      <ArrowStep />
                    </div>
                  </>
                )}

                {animationStep >= 2 && (
                  <>
                    <div className="flex flex-col md:flex-row! items-center gap-4">
                      <BlindedStep size="small" />
                      <ArrowStep />
                    </div>
                  </>
                )}

                {animationStep >= 2 && (
                  <div
                    className={`transition-all duration-500 ${
                      animationStep >= 2
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-50"
                    }`}
                  >
                    <Bob size="small" compact />
                  </div>
                )}

                {animationStep >= 3 && (
                  <div className="flex flex-col md:flex-row! items-center gap-4">
                    <ArrowStep />
                    <TokenStep size="small" />
                  </div>
                )}
              </div>
            )}

            {/* Phase 2: Transfer */}
            {activePhase === 1 && (
              <div className="flex sm:flex-row! flex-col items-center justify-center gap-6 md:gap-8 w-full max-w-4xl">
                <div
                  className={`transition-all duration-500 ${
                    animationStep >= 0
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50"
                  }`}
                >
                  <Alice size="small" compact />
                </div>

                {animationStep >= 1 && (
                  <>
                    <div className="flex flex-col md:flex-row! items-center gap-4">
                      <TokenStep size="small" />
                      <ArrowStep />
                      <PrivateStep size="small" />
                      <ArrowStep />
                    </div>
                  </>
                )}

                {animationStep >= 1 && (
                  <div
                    className={`transition-all duration-500 ${
                      animationStep >= 1
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-50"
                    }`}
                  >
                    <Carol size="small" compact />
                  </div>
                )}
              </div>
            )}

            {/* Phase 3: Redemption */}
            {activePhase === 2 && (
              <div className="flex sm:flex-row! flex-col items-center justify-center gap-6 md:gap-8 w-full max-w-5xl">
                <div
                  className={`transition-all duration-500 ${
                    animationStep >= 0
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50"
                  }`}
                >
                  <Carol size="small" compact />
                </div>

                {animationStep >= 1 && (
                  <>
                    <div className="flex flex-col md:flex-row! items-center gap-4">
                      <TokenStep size="small" />
                      <ArrowStep />
                    </div>
                  </>
                )}

                {animationStep >= 1 && (
                  <div
                    className={`transition-all duration-500 ${
                      animationStep >= 1
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-50"
                    }`}
                  >
                    <Bob size="small" compact />
                  </div>
                )}

                {animationStep >= 2 && (
                  <div className="flex flex-col md:flex-row! items-center gap-4">
                    <ArrowStep />
                    <CheckDBStep size="small" />
                  </div>
                )}

                {animationStep >= 3 && (
                  <div className="flex flex-col md:flex-row! items-center gap-4">
                    <ArrowStep />
                    <PaidStep size="small" />
                  </div>
                )}
              </div>
            )}
          </div>
          {/* Privacy Notice */}
          {activePhase === 2 && animationStep >= 4 && (
            <div className="p-6 bg-linear-to-r from-purple-600/40 to-pink-600/40 rounded-xl border-2 border-purple-400 animate-pulse">
              <div className="flex flex-col md:flex-row! items-center justify-center gap-4">
                <Eye className="w-10 h-10 text-purple-300" />
                <div className="text-xl md:text-2xl font-bold text-center">
                  🔒 {t("PRIVACY: Bob")}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Steps Section */}
        <section className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl mb-8">
          <h3 className="text-2xl font-bold mb-6">Steps</h3>
          <div className="space-y-3">
            {phases[activePhase].steps.map((step, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg transition-all duration-500 ${
                  idx <= animationStep
                    ? "bg-linear-to-r from-cyan-500/20 to-blue-500/20 border-l-4 border-cyan-400"
                    : "bg-white/5 opacity-50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      idx <= animationStep
                        ? "bg-cyan-400 text-black font-bold"
                        : "bg-gray-600"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div className="flex-1 text-base">{step}</div>
                  {idx <= animationStep && (
                    <CheckCircle className="w-6 h-6 text-green-400 animate-pulse shrink-0" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Nuts Selection */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {t("Nuts to Explore")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

      {/* Phase Selection */}
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

      {/* section "powered with love by"*/}
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

export default Home;
