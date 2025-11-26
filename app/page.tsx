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
  ArrowRight,
  ArrowDown,
  MessageSquare,
  Zap,
} from "lucide-react";

const Home = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);

  const phases = [
    {
      title: "Minting",
      fullTitle: "Phase 1: Minting",
      subtitle: "Alice & Bob",
      description:
        "Alice creates a secret message and gets Bob (the mint operator) to blindly sign it",
      steps: [
        "Alice creates a secret message",
        "Alice blinds the secret",
        "Bob signs the blinded message (without seeing it)",
        "Alice unblinds to get a valid token",
      ],
    },
    {
      title: "Transfer",
      fullTitle: "Phase 2: Transfer",
      subtitle: "Alice → Carol",
      description: "Alice sends the token privately to Carol, off-chain",
      steps: [
        "Alice sends the valid token to Carol",
        "Transfer happens privately (e.g., via chat)",
        "No blockchain needed - instant and private",
      ],
    },
    {
      title: "Redemption",
      fullTitle: "Phase 3: Redemption",
      subtitle: "Carol & Bob",
      description: "Carol redeems the token with Bob and receives funds",
      steps: [
        "Carol sends the token back to Bob",
        "Bob verifies the token hasn't been spent",
        "Bob checks the spent secrets database",
        "Carol receives funds, token is marked as spent",
        "Bob doesn't know the token came from Alice (PRIVACY!)",
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
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="w-full max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-violet-400 to-pink-400">
            classu.cash
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Cashu is privacy-preserving digital cash using blind signatures
          </p>
        </header>

        {/* Characters Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
            Meet the Characters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-purple-400/50 hover:scale-105 transition-transform">
              <div className="w-24 h-24 mx-auto mb-4 bg-linear-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-6xl shadow-xl">
                👩
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Alice</h3>
              <p className="text-gray-300 text-center">
                Wants to send money privately
              </p>
              <div className="mt-4 flex justify-center gap-3">
                <Lock className="w-5 h-5 text-purple-300" />
                <Key className="w-5 h-5 text-purple-300" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-blue-400/50 hover:scale-105 transition-transform">
              <div className="w-24 h-24 mx-auto mb-4 bg-linear-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-6xl shadow-xl">
                👨‍💼
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Bob</h3>
              <p className="text-gray-300 text-center">The Mint Operator</p>
              <div className="mt-4 flex justify-center gap-3">
                <Database className="w-5 h-5 text-blue-300" />
                <CheckCircle className="w-5 h-5 text-blue-300" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-pink-400/50 hover:scale-105 transition-transform">
              <div className="w-24 h-24 mx-auto mb-4 bg-linear-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-6xl shadow-xl">
                👩‍🦱
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Carol</h3>
              <p className="text-gray-300 text-center">Receives the payment</p>
              <div className="mt-4 flex justify-center gap-3">
                <Coins className="w-5 h-5 text-pink-300" />
                <Zap className="w-5 h-5 text-pink-300" />
              </div>
            </div>
          </div>
        </section>

        {/* Key Concept */}
        <section className="bg-linear-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl p-6 md:p-8 border border-yellow-500/50 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            🔑 Key Concept: Blind Signatures
          </h3>
          <p className="text-lg md:text-xl text-center text-gray-200 leading-relaxed">
            Bob signs tokens without seeing their content, ensuring privacy. The
            token is a combination of Alice's secret + Bob's signature. When
            Carol redeems it, Bob can verify it's valid but can't link it back
            to Alice.
          </p>
        </section>

        {/* Phase Selection */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Select a Phase
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
                <div className="text-2xl font-bold mb-2">Phase {idx + 1}</div>
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
                <div className="flex md:flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-4xl">
                  <div
                    className={`transition-all duration-500 ${
                      animationStep >= 0
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-50"
                    }`}
                  >
                    <div className="bg-purple-500 rounded-full w-24 h-24 flex items-center justify-center text-5xl shadow-2xl mx-auto">
                      👩
                    </div>
                    <div className="text-center mt-2 text-lg font-semibold">
                      Alice
                    </div>
                  </div>

                  {animationStep >= 1 && (
                    <>
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="animate-pulse text-center">
                          <Lock className="w-16 h-16 text-yellow-400 mx-auto" />
                          <div className="text-sm mt-2">Secret</div>
                        </div>
                        <ArrowRight className="hidden md:block w-10 h-10 text-white animate-bounce" />
                        <ArrowDown className="md:hidden w-10 h-10 text-white animate-bounce" />
                      </div>
                    </>
                  )}

                  {animationStep >= 2 && (
                    <>
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="animate-pulse text-center">
                          <EyeOff className="w-16 h-16 text-gray-400 mx-auto" />
                          <div className="text-sm mt-2">Blinded</div>
                        </div>
                        <ArrowRight className="hidden md:block w-10 h-10 text-white animate-bounce" />
                        <ArrowDown className="md:hidden w-10 h-10 text-white animate-bounce" />
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
                      <div className="bg-blue-500 rounded-full w-24 h-24 flex items-center justify-center text-5xl shadow-2xl mx-auto">
                        👨‍💼
                      </div>
                      <div className="text-center mt-2 text-lg font-semibold">
                        Bob
                      </div>
                    </div>
                  )}

                  {animationStep >= 3 && (
                    <>
                      <ArrowRight className="hidden md:block w-10 h-10 text-white animate-bounce" />
                      <ArrowDown className="md:hidden w-10 h-10 text-white animate-bounce" />
                      <div className="animate-bounce text-center">
                        <Coins className="w-16 h-16 text-green-400 mx-auto" />
                        <div className="mt-2 text-xl font-bold text-green-400">
                          Token!
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Phase 2: Transfer */}
              {activePhase === 1 && (
                <div className="flex md:flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-4xl">
                  <div
                    className={`transition-all duration-500 ${
                      animationStep >= 0
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-50"
                    }`}
                  >
                    <div className="bg-purple-500 rounded-full w-24 h-24 flex items-center justify-center text-5xl shadow-2xl mx-auto">
                      👩
                    </div>
                    <div className="text-center mt-2 text-lg font-semibold">
                      Alice
                    </div>
                  </div>

                  {animationStep >= 1 && (
                    <>
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="animate-pulse text-center">
                          <Coins className="w-16 h-16 text-green-400 mx-auto" />
                          <div className="text-sm mt-2">Token</div>
                        </div>
                        <ArrowRight className="hidden md:block w-10 h-10 text-white animate-bounce" />
                        <ArrowDown className="md:hidden w-10 h-10 text-white animate-bounce" />
                        <div className="animate-pulse text-center">
                          <MessageSquare className="w-16 h-16 text-cyan-400 mx-auto" />
                          <div className="text-sm mt-2">Private</div>
                        </div>
                        <ArrowRight className="hidden md:block w-10 h-10 text-white animate-bounce" />
                        <ArrowDown className="md:hidden w-10 h-10 text-white animate-bounce" />
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
                      <div className="bg-pink-500 rounded-full w-24 h-24 flex items-center justify-center text-5xl shadow-2xl mx-auto">
                        👩‍🦱
                      </div>
                      <div className="text-center mt-2 text-lg font-semibold">
                        Carol
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Phase 3: Redemption */}
              {activePhase === 2 && (
                <div className="flex md:flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-5xl">
                  <div
                    className={`transition-all duration-500 ${
                      animationStep >= 0
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-50"
                    }`}
                  >
                    <div className="bg-pink-500 rounded-full w-24 h-24 flex items-center justify-center text-5xl shadow-2xl mx-auto">
                      👩‍🦱
                    </div>
                    <div className="text-center mt-2 text-lg font-semibold">
                      Carol
                    </div>
                  </div>

                  {animationStep >= 1 && (
                    <>
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="animate-pulse">
                          <Coins className="w-14 h-14 text-green-400 mx-auto" />
                        </div>
                        <ArrowRight className="hidden md:block w-8 h-8 text-white animate-bounce" />
                        <ArrowDown className="md:hidden w-8 h-8 text-white animate-bounce" />
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
                      <div className="bg-blue-500 rounded-full w-24 h-24 flex items-center justify-center text-5xl shadow-2xl mx-auto">
                        👨‍💼
                      </div>
                      <div className="text-center mt-2 text-lg font-semibold">
                        Bob
                      </div>
                    </div>
                  )}

                  {animationStep >= 2 && (
                    <>
                      <ArrowRight className="hidden md:block w-8 h-8 text-white animate-bounce" />
                      <ArrowDown className="md:hidden w-8 h-8 text-white animate-bounce" />
                      <div className="animate-pulse text-center">
                        <Database className="w-14 h-14 text-purple-400 mx-auto" />
                        <div className="text-sm mt-2">Check DB</div>
                      </div>
                    </>
                  )}

                  {animationStep >= 3 && (
                    <>
                      <ArrowRight className="hidden md:block w-8 h-8 text-white animate-bounce" />
                      <ArrowDown className="md:hidden w-8 h-8 text-white animate-bounce" />
                      <div className="animate-bounce text-center">
                        <CheckCircle className="w-14 h-14 text-green-400 mx-auto" />
                        <div className="mt-2 text-xl font-bold text-green-400">
                          Paid!
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Privacy Notice */}
            {activePhase === 2 && animationStep >= 4 && (
              <div className="p-6 bg-linear-to-r from-purple-600/40 to-pink-600/40 rounded-xl border-2 border-purple-400 animate-pulse">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <Eye className="w-10 h-10 text-purple-300" />
                  <div className="text-xl md:text-2xl font-bold text-center">
                    🔒 PRIVACY: Bob doesn't know Carol's token came from Alice!
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

        {/* Phase Selection */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => window.open("https://cashu.space", "_blank")}
              className={
                "cursor-pointer p-6 rounded-xl border-2 transition-all transform hover:scale-105 bg-white/10 border-white/30 hover:bg-white/20"
              }
            >
              <div className="text-2xl font-bold mb-2">Website</div>
              <div className="text-lg font-semibold">cashu.space</div>
            </button>
            <button
              onClick={() => window.open("https://docs.cashu.space", "_blank")}
              className={
                "cursor-pointer p-6 rounded-xl border-2 transition-all transform hover:scale-105 bg-white/10 border-white/30 hover:bg-white/20"
              }
            >
              <div className="text-2xl font-bold mb-2">Docs</div>
              <div className="text-lg font-semibold">docs.cashu.space</div>
            </button>
            <button
              onClick={() => window.open("https://cashu.me", "_blank")}
              className={
                "cursor-pointer p-6 rounded-xl border-2 transition-all transform hover:scale-105 bg-white/10 border-white/30 hover:bg-white/20"
              }
            >
              <div className="text-2xl font-bold mb-2">Wallet</div>
              <div className="text-lg font-semibold">cashu.me</div>
            </button>
          </div>
        </section>

        {/* Aggiungi una section "powered with love by"*/}
        <div className="text-center text-sm text-gray-400 mt-12">
          Powered with ❤️ by{" "}
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
      </div>
    </div>
  );
};

export default Home;
