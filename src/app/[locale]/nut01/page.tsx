"use client";

import React, { useState } from "react";
import { Key, DollarSign, Repeat, Server, Code } from "lucide-react";

import { CharactersSection } from "@/src/components/CharactersSection";

import { useTranslations } from "next-intl";

export const Nut01: React.FC = () => {
  const t = useTranslations("nut01");
  const tHome = useTranslations("HomePage");

  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: t("Overview"), icon: "📚" },
    { id: "endpoint", label: t("Endpoint"), icon: "💻" },
    { id: "units", label: t("Supported Units"), icon: "💰" },
    { id: "keyset", label: t("Keyset Structure"), icon: "🔑" },
    { id: "example", label: t("Example"), icon: "📖" },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-lg p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">
          NUT-01: {t("description_title")}
        </h2>
        <p className="text-lg opacity-90">{t("description_detail")}</p>
      </div>

      <CharactersSection /> {/* Assumo che questa sezione sia riutilizzabile */}

      <div className="border-l-4 border-green-500 p-6 rounded">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <Repeat className="w-5 h-5" />
          {t("active_keysets")}
        </h3>
        <p className="text-gray-400">{t("active_keysets_detail")}</p>
      </div>
    </div>
  );

  const renderEndpoint = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <Server className="w-6 h-6" />
        {t("Endpoint")}
      </h2>

      <div className="bg-white rounded-lg border-2 border-blue-200 overflow-hidden">
        <div className="bg-blue-500 text-white p-4">
          <h3 className="font-bold text-lg">{t("endpoint_title")}</h3>
          <p className="text-sm opacity-90">{t("endpoint_detail")}</p>
        </div>
        <div className="p-4">
          <h4 className="font-semibold text-gray-700 mb-2">
            {t("endpoint_request_title")}
          </h4>
          <code className="block bg-gray-100 p-3 rounded text-sm overflow-x-auto text-black mb-4">
            GET https://mint.host:3338/v1/keys
          </code>

          <h4 className="font-semibold text-gray-700 mb-2">
            {t("endpoint_response_title")} (GetKeysResponse)
          </h4>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto text-black">
            {`{
  "keysets": [
    {
      "id": "<keyset_id_hex_str>",
      "unit": "<currency_unit_str>",
      "keys": {
        "<amount_int>": "<public_key_str>",
        "..."
      }
    }
  ]
}`}
          </pre>
          <p className="mt-3 text-sm text-gray-600">{t("response_detail")}</p>
        </div>
      </div>
    </div>
  );

  const renderUnits = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <DollarSign className="w-6 h-6" />
        {t("Supported Units")}
      </h2>

      <div className="bg-white rounded-lg p-6">
        <h3 className="font-bold text-lg mb-3 text-gray-700">
          {t("currency_units_title")}
        </h3>
        <p className="text-gray-600 mb-4">{t("currency_units_detail")}</p>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 ml-4">
          <li>
            <strong className="text-blue-500">btc</strong>: Bitcoin (Minor Unit:
            8) - <code className="bg-gray-200 px-1 rounded">sat</code> preferred
          </li>
          <li>
            <strong className="text-blue-500">sat</strong>: Bitcoin's Minor Unit
            (1/100,000,000 BTC)
          </li>
          <li>
            <strong className="text-blue-500">msat</strong>: 1/1000th of a{" "}
            <code className="bg-gray-200 px-1 rounded">sat</code>
          </li>
          <li>
            <strong className="text-blue-500">auth</strong>: Reserved for Blind
            Authentication (NUT-22)
          </li>
          <li>
            <strong className="text-blue-500">ISO 4217 Codes</strong>: e.g.,{" "}
            <code className="bg-gray-200 px-1 rounded">usd</code>,{" "}
            <code className="bg-gray-200 px-1 rounded">eur</code>
          </li>
          <li>
            <strong className="text-blue-500">Stablecoins</strong>: e.g.,{" "}
            <code className="bg-gray-200 px-1 rounded">usdt</code>,{" "}
            <code className="bg-gray-200 px-1 rounded">gyen</code>
          </li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
        <h3 className="font-bold text-lg mb-2 text-yellow-900">
          {t("minor_unit_rule_title")}
        </h3>
        <p className="text-gray-700 mb-3">{t("minor_unit_rule_detail")}</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4">
          <li>
            <code className="bg-gray-200 px-1 rounded">usd</code> (Minor Unit:
            2): <code className="font-mono">amount = 1</code> means 1 cent (0.01
            USD)
          </li>
          <li>
            <code className="bg-gray-200 px-1 rounded">jpy</code> (Minor Unit:
            0): <code className="font-mono">amount = 1</code> means 1 JPY (Whole
            unit)
          </li>
          <li>
            <code className="bg-gray-200 px-1 rounded">btc</code> (Minor Unit:
            8): <code className="font-mono">amount = 1</code> means 1 sat
          </li>
        </ul>
      </div>
    </div>
  );

  const renderKeyset = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <Key className="w-6 h-6" />
        {t("Keyset Structure")}
      </h2>

      <div className="bg-white rounded-lg p-6">
        <h3 className="font-bold text-lg mb-3 text-gray-700">
          {t("keyset_generation_title")}
        </h3>
        <p className="text-gray-600">
          {t("keyset_generation_detail")}
        </p>
      </div>

      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
        <h3 className="font-bold text-lg mb-2 text-purple-900">
          {t("keys_map_title")}
        </h3>
        <p className="text-gray-700 mb-3">{t("keys_map_detail")}</p>
        <code className="block bg-gray-100 p-3 rounded text-sm overflow-x-auto text-black">
          {`{<amount_1> : <mint_pubkey_1>, <amount_2> : <mint_pubkey_2>, ...}`}
        </code>
        <p className="mt-3 text-sm text-gray-600">
          *Public keys must use the{" "}
          <strong className="text-purple-600">compressed Secp256k1 format</strong>.
        </p>
      </div>
    </div>
  );

  const renderExample = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <Code className="w-6 h-6" />
        {t("Example")}
      </h2>

      <div className="bg-white rounded-lg p-6">
        <h3 className="font-bold text-xl mb-3 text-black">
          {t("example_sat_title")}
        </h3>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto text-black">
          {`{
  "keysets": [
    {
      "id": "009a1f293253e41e",
      "unit": "sat",
      "keys": {
          "1": "02194603ffa36356f4a56b7df9371fc3192472351453ec7398b8da8117e7c3e104", // 1 sat
          "2": "03b0f36d6d47ce14df8a7be9137712c42bcdd960b19dd02f1d4a9703b1f31d7513", // 2 sat
          "4": "0366be6e026e42852498efb82014ca91e89da2e7a5bd3761bdad699fa2aec9fe09", // 4 sat
          ...
      }
    }
  ]
}`}
        </pre>
      </div>

      <div className="bg-white rounded-lg p-6">
        <h3 className="font-bold text-xl mb-3 text-black">
          {t("example_usd_title")}
        </h3>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto text-black">
          {`{
  "keysets": [
    {
      "id": "00a2f293253e41f9",
      "unit": "usd",
      "keys": {
          "1": "0229...e101", // ${t("example_usd_key_1")}
          "2": "03c0...7512", // ${t("example_usd_key_2")}
          "4": "0376...fe00", // 4 cents (0.04 USD)
          ...
      }
    }
  ]
}`}
        </pre>
        <p className="mt-3 text-sm text-gray-600">
          *I valori si riferiscono alla Minor Unit del dollaro (cent).
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-teal-400 via-green-400 to-blue-400">
          NUT-01
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          {t("subtitle")}
        </p>
        <div className="flex items-center justify-center gap-2 mt-3">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {t("MANDATORY")}
          </span>
        </div>
      </div>

      {/* Navigation */}
      <div className="rounded-lg p-2 mb-6 flex flex-wrap gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`cursor-pointer flex-1 min-w-[150px] px-4 py-3 rounded-lg font-semibold transition-all ${
              activeSection === section.id
                ? "bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-md"
                : "cursor-pointer p-6 rounded-xl border-2 transition-all transform hover:scale-105 text-white"
            }`}
          >
            <span className="mr-2">{section.icon}</span>
            {section.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="rounded-lg shadow-xl p-6 md:p-8 mb-8">
        {activeSection === "overview" && renderOverview()}
        {activeSection === "endpoint" && renderEndpoint()}
        {activeSection === "units" && renderUnits()}
        {activeSection === "keyset" && renderKeyset()}
        {activeSection === "example" && renderExample()}
      </div>
    </>
  );
};

export default Nut01;