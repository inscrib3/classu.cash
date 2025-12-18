"use client";

import React, { useState } from "react";
import { Zap, ListOrdered, Code, Settings, Unlock, Info } from "lucide-react";
import { PanelSection } from "@/src/components/PanelSection";
import { BoxSection } from "@/src/components/BoxSection";
import { NutLayout } from "@/src/components/NutLayout";
import { SectionPage } from "@/src/components/SectionPage";
import ClosingPanel from "@/src/components/ClosingPanel";

import { useTranslations } from "next-intl";
import { textClasses, layoutClasses } from "@/src/styles/commonClasses";
import { NavSection } from "@/src/types/nut";

export const Nut04: React.FC = () => {
  const t = useTranslations("nut04");
  const t00 = useTranslations("nut00");

  const [activeSection, setActiveSection] = useState("overview");

  const sections: NavSection[] = [
    { id: "overview", label: t("Overview"), icon: "📚" },
    { id: "flow", label: t("Flow"), icon: "🔄" },
    { id: "api", label: t("API"), icon: "🌐" },
    { id: "settings", label: t("Settings"), icon: "⚙️" },
    { id: "unblinding", label: t("Unblinding"), icon: "🔓" },
  ];

  const renderMethods = () => (
    <SectionPage title={t("Supported Methods Title")}>

      <p className="text-gray-300 mb-4">{t("Supported Methods Desc")}</p>

      <div className={layoutClasses.gridTwoCol}>
        <BoxSection title="Bolt11" className="bg-yellow-50">
          <p className={textClasses.small + " text-gray-700"}>{t("Method Bolt11")}</p>
        </BoxSection>
        <BoxSection title="Bolt12" className="bg-yellow-50">
          <p className={textClasses.small + " text-gray-700"}>{t("Method Bolt12")}</p>
        </BoxSection>
      </div>
    </SectionPage>
  );

  const renderFlow = () => (
    <SectionPage title={t("General Flow Title")}>

      <div className="space-y-4">
        <BoxSection title={`1. ${t("Flow Step 1 Title")}`} className="bg-yellow-50">
          <p className={textClasses.small + " text-gray-700"}>{t("Flow Step 1 Desc")}</p>
          <code className={`${textClasses.muted} font-mono block bg-gray-100 p-2 mt-2 rounded`}>
            POST /v1/mint/quote/{"{method}"}
          </code>
        </BoxSection>

        <BoxSection title={`2. ${t("Flow Step 2 Title")}`} className="bg-yellow-50">
          <p className="text-sm text-gray-700">{t("Flow Step 2 Desc")}</p>
          <p className="text-xs text-gray-600 mt-2">
            Returns `quote` id and payment `request`.
          </p>
        </BoxSection>

        <BoxSection title={`3. ${t("Flow Step 3 Title")}`} className="bg-yellow-50">
          <p className="text-sm text-gray-700">{t("Flow Step 3 Desc")}</p>
        </BoxSection>

        <BoxSection title={`4. ${t("Flow Step 4 Title")}`} className="bg-yellow-50">
          <p className="text-sm text-gray-700">{t("Flow Step 4 Desc")}</p>
          <code className="text-xs font-mono block bg-gray-100 p-2 mt-2 rounded">
            POST /v1/mint/{"{method}"}
          </code>
        </BoxSection>

        <BoxSection title={`5. ${t("Flow Step 5 Title")}`} className="bg-yellow-50">
          <p className="text-sm text-gray-700">{t("Flow Step 5 Desc")}</p>
        </BoxSection>
      </div>

    </SectionPage>
  );

  const renderApi = () => (
    <SectionPage title={t("API")}>

      {/* Mint Quote API */}
      <PanelSection
        title={t("API Quote Title")}
        subtitle={t("API Quote Desc")}
        headerBgClass="bg-yellow-600"
      >
        <div className="p-4 space-y-4">
          <code className="block bg-gray-800 text-white p-3 rounded text-sm">
            POST https://mint.host:3338/v1/mint/quote/&#123;method&#125;
          </code>

          <h4 className="text-md font-semibold text-gray-700">{t("API Quote Request Format Title")}</h4>
          <pre className="bg-gray-50 text-black p-4 rounded text-xs overflow-x-auto border">
            {`{
  "unit": <str_enum>,
  // Method-specific fields (e.g., amount, hash)
  // ...
}`}
          </pre>

          <h4 className="text-md font-semibold text-gray-700 pt-4">{t("API Quote Response Format Title")}</h4>
          <pre className="bg-gray-50 text-black p-4 rounded text-xs overflow-x-auto border">
            {`{
  "quote": <str>, // ID of the quote
  "request": <str>, // Payment request (e.g., bolt11 invoice)
  "paid": <bool>,
  "expiry": <int> // Unix timestamp
}`}
          </pre>
        </div>
      </PanelSection>

      {/* Mint Execution API */}
      <PanelSection
        title={t("API Mint Title")}
        subtitle="POST https://mint.host:3338/v1/mint/{method}"
        headerBgClass="bg-yellow-600"
      >
        <div className="p-4 space-y-4">
          <p className={`${textClasses.small} text-gray-600 mb-3`}>{t("API Mint Desc")}</p>

          <h4 className="text-md font-semibold text-gray-700">{t("API Mint Request Format Title")}</h4>
          <pre className="bg-gray-50 text-black p-4 rounded text-xs overflow-x-auto border">
            {`{
  "quote": <str>,
  "outputs": <Array[BlindedMessage]>,
  // Method-specific fields (e.g., witness)
  // ...
}`}
          </pre>

          <h4 className="text-md font-semibold text-gray-700 pt-4">{t("API Mint Response Format Title")}</h4>
          <pre className="bg-gray-50 text-black p-4 rounded text-xs overflow-x-auto border">
            {`{
  "signatures": <Array[BlindSignature]>
}`}
          </pre>
        </div>
      </PanelSection>
    </SectionPage>
  );

  const renderSettings = () => (
    <SectionPage title={t("Settings")}>

      <p className="text-gray-300 mb-4">{t("Settings Desc")}</p>

      <PanelSection
        title="NUT-06 Info Structure"
        subtitle="Key 4 for Minting"
        headerBgClass="bg-yellow-700"
      >
        <div className="p-4">
          <pre className="bg-gray-50 text-black p-4 rounded text-xs overflow-x-auto border">
            {`{
  "4": {
    "methods": [
      <MintMethodSetting>,
      ...
    ],
    "disabled": <bool>
  }
}`}
          </pre>

          <div className="mt-4 p-3 bg-gray-100 rounded">
            <h4 className="font-semibold text-gray-800">{t("Setting Disabled")}</h4>
            <p className={textClasses.muted}>{t("Setting Disabled Desc")}</p>
          </div>
        </div>
      </PanelSection>

      <PanelSection
        title={t("Setting MintMethodSetting Title")}
        subtitle="Defines supported method-unit pairs"
        headerBgClass="bg-yellow-600"
      >
        <div className="p-4">
          <pre className="bg-gray-50 text-black p-4 rounded text-xs overflow-x-auto border">
            {`{
  "method": <str>,
  "unit": <str>,
  "min_amount": <int|null>,
  "max_amount": <int|null>,
  "options": <Object|null>
}`}
          </pre>

          <div className="mt-4 space-y-3 text-sm text-gray-700">
            <p><code className="font-mono text-xs p-1 bg-gray-100 rounded">{t("Setting MinAmount")}</code> / <code className="font-mono text-xs p-1 bg-gray-100 rounded">{t("Setting MaxAmount")}</code>: {t("Setting MinMax Desc")}</p>
            <p><code className="font-mono text-xs p-1 bg-gray-100 rounded">{t("Setting Options")}</code>: {t("Setting Options Desc")}</p>
          </div>
        </div>
      </PanelSection>

    </SectionPage>
  );

  const renderUnblinding = () => (
    <SectionPage title={t("Unblinding Title")}>

      <BoxSection title={t("Unblinding Process")} className="bg-yellow-100 border-yellow-400">
        <p className={textClasses.small + " text-gray-700"}>
          {t("Unblinding Desc")}
        </p>
        <div className="mt-4 p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
          <p className={`font-semibold ${textClasses.small} text-yellow-800`}>Process:</p>
          <ol className={`list-decimal ml-4 ${textClasses.muted} text-gray-700`}>
            <li>Wallet receives `{t00("BlindSignature")}`.</li>
            <li>Wallet uses blinding factor `r` and mint public key `K`.</li>
            <li>Wallet calculates the final signature `C`. (See BDHKE {t00("NUT 00")}).</li>
            <li>Wallet creates and stores the final `{t00("Proof (Input)")}`.</li>
          </ol>
        </div>
      </BoxSection>

    </SectionPage>
  );

  return (
    <NutLayout
      nutNumber="04"
      sections={sections}
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      headerProps={{
        nutNumber: "04",
        title: t("title"),
        subtitle: t("subtitle"),
        badgeLabel: t("MANDATORY"),
      }}
      overviewProps={{
        nutNumber: "04",
        title: t("Protocol Definition"),
        description: t("Protocol Definition Desc"),
        borderColor: "border-yellow-500",
        icon: <Zap className="w-5 h-5" />,
        iconLabel: t("Minting Process"),
        iconDescription: t("Minting Process Desc"),
      }}
      renderFunctions={{
        flow: renderFlow,
        api: renderApi,
        settings: renderSettings,
        unblinding: renderUnblinding,
      }}
    />
  );
};

export default Nut04;