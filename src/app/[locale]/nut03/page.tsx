"use client";

import React, { useState } from "react";
// Correzione: ArrowLeftRight è stata usata al posto di Exchange
import { ArrowLeftRight, Info } from "lucide-react";
import { PanelSection } from "@/src/components/PanelSection";
import { BoxSection } from "@/src/components/BoxSection";
import { NutLayout } from "@/src/components/NutLayout";
import ClosingPanel from "@/src/components/ClosingPanel";
import { SectionPage } from "@/src/components/SectionPage";

import { useTranslations } from "next-intl";
import { textClasses } from "@/src/styles/commonClasses";
import { NavSection } from "@/src/types/nut";

export const Nut03: React.FC = () => {
  const t = useTranslations("nut03");

  const [activeSection, setActiveSection] = useState("overview");

  const sections: NavSection[] = [
    { id: "overview", label: t("Overview"), icon: "📚" },
    { id: "send", label: t("Swap to Send"), icon: "📤" },
    { id: "receive", label: t("Swap to Receive"), icon: "📥" },
    { id: "api", label: t("API Endpoints"), icon: "🌐" },
  ];

  const renderSwapToSend = () => (
    <SectionPage title={t("Swap to Send Title")}>
      <BoxSection title={t("Alice Example Title")} className="bg-blue-50">
        <p className={`${textClasses.small} text-gray-700 mb-2`}>
          {t("Swap to Send Desc")}
        </p>
        <div className="mt-4 p-3 bg-blue-100 rounded">
          <p className={`font-semibold ${textClasses.small} text-blue-800`}>{t("Alice Example Desc")}</p>
          <p className={`${textClasses.muted} text-blue-700 mt-1`}>
            {t("Alice Swap Detail")}
          </p>
        </div>
      </BoxSection>

      <ClosingPanel
        title={t("Privacy Note Title")}
        description={t("Privacy Note Desc")}
      />
    </SectionPage>
  );

  const renderSwapToReceive = () => (
    <SectionPage title={t("Swap to Receive Title")}>
      <BoxSection title={t("Carol Example Title")} className="bg-blue-50">
        <p className={`${textClasses.small} text-gray-700 mb-2`}>
          {t("Swap to Receive Desc")}
        </p>
        <div className="mt-4 p-3 bg-blue-100 rounded">
          <p className={`${textClasses.small} text-blue-800 mt-1`}>
            {t("Carol Swap Detail")}
          </p>
        </div>
      </BoxSection>
    </SectionPage>
  );

  const renderApi = () => (
    <SectionPage title={t("API Endpoints")}>
      <PanelSection
        title={t("API Endpoint Title")}
        subtitle="POST https://mint.host:3338/v1/swap"
        headerBgClass="bg-blue-600"
      >
        <div className="p-4 space-y-4">
          <h3 className={`font-semibold text-gray-800`}>{t("API Request Title")}</h3>
          <p className={`${textClasses.small} text-gray-600 font-mono`}>curl -X POST https://mint.host:3338/v1/swap -d ...</p>

          <h4 className={`text-md font-semibold text-gray-700`}>{t("Request Format Title")}</h4>
          <pre className="bg-gray-50 text-black p-4 rounded text-xs overflow-x-auto border">
            {`{
  "inputs": <Array[Proof]>,
  "outputs": <Array[BlindedMessage]>,
}`}
          </pre>

          <h4 className={`text-md font-semibold text-gray-700 pt-4`}>{t("API Response Title")}</h4>
          <h4 className={`text-md font-semibold text-gray-700`}>{t("Response Format Title")}</h4>
          <pre className="bg-gray-50 text-black p-4 rounded text-xs overflow-x-auto border">
            {`{
  "signatures": <Array[BlindSignature]>
}`}
          </pre>
        </div>
      </PanelSection>

      <BoxSection title="cURL Example" className="bg-gray-50">
        <pre className="bg-gray-800 text-blue-400 p-4 rounded text-xs overflow-x-auto font-mono">
          {`curl -X POST https://mint.host:3338/v1/swap -d \\
{
  "inputs":
    [
      {
        "amount": 2,
        "id": "009a1f293253e41e",
        "secret": "407915bc212be61a77e3e6d2aeb4c727980bda51cd06a6afc29e2861768a7837",
        "C": "02bc9097997d81afb2cc7346b5e4345a9346bd2a506eb7958598a72f0cf85163ea"
      },
      {
      ...
      }
    ],
  "outputs":
    [
      {
        "amount": 2,
        "id": "009a1f293253e41e",
        "B_": "02634a2c2b34bec9e8a4aba4361f6bf202d7fa2365379b0840afe249a7a9d71239"
      },
      {
      ...
      }
    ],
}`}
        </pre>
      </BoxSection>
    </SectionPage>
  );

  return (
    <NutLayout
      nutNumber="03"
      sections={sections}
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      headerProps={{
        nutNumber: "03",
        title: t("title"),
        subtitle: t("subtitle"),
        badgeLabel: t("MANDATORY"),
      }}
      overviewProps={{
        nutNumber: "03",
        title: t("Protocol Definition"),
        description: t("Protocol Definition Desc"),
        borderColor: "border-blue-500",
        icon: <ArrowLeftRight className="w-5 h-5" />,
        iconLabel: t("Swap Functionality"),
        iconDescription: t("Swap Functionality Desc"),
      }}
      renderFunctions={{
        send: renderSwapToSend,
        receive: renderSwapToReceive,
        api: renderApi,
      }}
    />
  );
};

export default Nut03;