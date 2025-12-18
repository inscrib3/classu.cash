"use client";

import React, { useState } from "react";
import { Key, DollarSign, Repeat, Server, Code, Lock } from "lucide-react";
import { PanelSection } from "@/src/components/PanelSection";
import { BoxSection } from "@/src/components/BoxSection";
import { SectionPage } from "@/src/components/SectionPage";
import { NutLayout } from "@/src/components/NutLayout";

import { CharactersSection } from "@/src/components/CharactersSection";
import { SectionHeader } from "@/src/components/SectionHeader";
import { ClosingPanel } from "@/src/components/ClosingPanel";

import { useTranslations } from "next-intl";
import { textClasses, layoutClasses } from "@/src/styles/commonClasses";
import { NavSection } from "@/src/types/nut";

export const Nut01: React.FC = () => {
  const t = useTranslations("nut01");
  const tHome = useTranslations("HomePage");

  const [activeSection, setActiveSection] = useState("overview");

  const sections: NavSection[] = [
    { id: "overview", label: t("Overview"), icon: "📚" },
    { id: "endpoint", label: t("Endpoint"), icon: "💻" },
    { id: "units", label: t("Supported Units"), icon: "💰" },
    { id: "keyset", label: t("Keyset Structure"), icon: "🔑" },
    { id: "example", label: t("Example"), icon: "📖" },
  ];

  const renderEndpoint = () => (
    <SectionPage title={
      <>
        <Server className="w-6 h-6 inline" />
        {t("Endpoint")}
      </>
    }>

      <PanelSection
        title={t("endpoint_title")}
        subtitle={t("endpoint_detail")}
        headerBgClass="bg-green-600"
      >

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

      </PanelSection>

    </SectionPage>
  );

  const renderUnits = () => (
    <SectionPage title={
      <>
        <DollarSign className="w-6 h-6 inline" />
        {t("Supported Units")}
      </>
    }>

      <BoxSection
        title={t("currency_units_title")}
        className="bg-green-50"
      >
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 ml-4">
          <li>
            <strong className="text-green-600">btc</strong>: Bitcoin (Minor Unit:
            8) - <code className="bg-gray-200 px-1 rounded">sat</code> preferred
          </li>
          <li>
            <strong className="text-green-600">sat</strong>: Bitcoin's Minor Unit
            (1/100,000,000 BTC)
          </li>
          <li>
            <strong className="text-green-600">msat</strong>: 1/1000th of a{" "}
            <code className="bg-gray-200 px-1 rounded">sat</code>
          </li>
          <li>
            <strong className="text-green-600">auth</strong>: Reserved for Blind
            Authentication (NUT-22)
          </li>
          <li>
            <strong className="text-green-600">ISO 4217 Codes</strong>: e.g.,{" "}
            <code className="bg-gray-200 px-1 rounded">usd</code>,{" "}
            <code className="bg-gray-200 px-1 rounded">eur</code>
          </li>
          <li>
            <strong className="text-green-600">Stablecoins</strong>: e.g.,{" "}
            <code className="bg-gray-200 px-1 rounded">usdt</code>,{" "}
            <code className="bg-gray-200 px-1 rounded">gyen</code>
          </li>
        </ul>
      </BoxSection>

      <ClosingPanel
        title={t("minor_unit_rule_title")}
        description={t("minor_unit_rule_detail") + ":"}
        // codeSnippet={`Y = PublicKey('02' || SHA256(msg_hash || counter))`}
        note={
          <>
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
          </>
        }
      />


    </SectionPage>
  );

  const renderKeyset = () => (
    <SectionPage title={
      <>
        <Key className="w-6 h-6 inline" />
        {t("Keyset Structure")}
      </>
    }>

      <BoxSection
        title={t("keyset_generation_title")}
      >
        {t("keyset_generation_detail")}
      </BoxSection>


      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
        <h3 className={`${textClasses.heading3} mb-2 text-green-900`}>
          {t("keys_map_title")}
        </h3>
        <p className="text-gray-700 mb-3">{t("keys_map_detail")}</p>
        <code className="block bg-gray-100 p-3 rounded text-sm overflow-x-auto text-black">
          {`{<amount_1> : <mint_pubkey_1>, <amount_2> : <mint_pubkey_2>, ...}`}
        </code>
        <p className={`${textClasses.muted} mt-3`}>
          *Public keys must use the{" "}
          <strong className="text-green-600">compressed Secp256k1 format</strong>.
        </p>
      </div>
    </SectionPage>
  );

  const renderExample = () => (
    <SectionPage title={
      <>
        <Code className="w-6 h-6 inline" />
        {t("Example")}
      </>
    }>

      <div className="bg-white rounded-lg p-6">
        <h3 className={`${textClasses.heading2} mb-3 text-black`}>
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
        <h3 className={`${textClasses.heading2} mb-3 text-black`}>
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
        <p className={`${textClasses.muted} mt-3`}>
          *I valori si riferiscono alla Minor Unit del dollaro (cent).
        </p>
      </div>
    </SectionPage>
  );

  return (
    <NutLayout
      nutNumber="01"
      sections={sections}
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      headerProps={{
        nutNumber: "01",
        title: t("title"),
        subtitle: t("subtitle"),
        badgeLabel: t("MANDATORY"),
      }}
      overviewProps={{
        nutNumber: "01",
        title: t("description_title"),
        description: t("description_detail"),
        borderColor: "border-green-500",
        icon: <Repeat className="w-5 h-5" />,
        iconLabel: t("active_keysets"),
        iconDescription: t("active_keysets_detail"),
        gradientClass: "from-teal-500 to-green-500",
      }}
      renderFunctions={{
        endpoint: renderEndpoint,
        units: renderUnits,
        keyset: renderKeyset,
        example: renderExample,
      }}
    />
  );
};

export default Nut01;