"use client";

import React, { useState } from "react";
import { Key, Calculator, Hash, Server, Wallet, Info } from "lucide-react";
import { PanelSection } from "@/src/components/PanelSection";
import { BoxSection } from "@/src/components/BoxSection";
import { SectionPage } from "@/src/components/SectionPage";
import { NutLayout } from "@/src/components/NutLayout";
import ClosingPanel from "@/src/components/ClosingPanel";

import { useTranslations } from "next-intl";
import { textClasses, layoutClasses } from "@/src/styles/commonClasses";
import { NavSection } from "@/src/types/nut";

export const Nut02: React.FC = () => {
  const t = useTranslations("nut02");

  const [activeSection, setActiveSection] = useState("overview");

  const sections: NavSection[] = [
    { id: "overview", label: t("Overview"), icon: "📖" },
    { id: "properties", label: t("Keyset Properties"), icon: "🔑" },
    { id: "fees", label: t("Fees Calculation"), icon: "🧮" },
    { id: "derivation", label: t("ID Derivation"), icon: "🆔" },
    { id: "api", label: t("API Endpoints"), icon: "🌐" },
    { id: "wallet", label: t("Wallet Logic"), icon: "👛" },
  ];

  const renderProperties = () => (
    <SectionPage title={t("Properties Title")}>

      <div className={layoutClasses.gridTwoCol}>
        <BoxSection title={t("ID Title")} className="bg-purple-50">
          <p className={`${textClasses.small} text-gray-700 mb-2`}>
            {t("ID Desc")}
          </p>
          <ul className={`${textClasses.small} text-gray-600 list-disc ml-4 space-y-1`}>
            <li>{t("ID Detail 1")}</li>
            <li>{t("ID Detail 2")}</li>
            <li>{t("ID Detail 3")}</li>
          </ul>
        </BoxSection>

        <BoxSection title={t("Active Title")} className="bg-purple-50">
          <p className={`${textClasses.small} text-gray-700 mb-2`}>
            {t("Active Desc")}
          </p>
          <ul className={`${textClasses.small} text-gray-600 list-disc ml-4 space-y-1`}>
            <li>{t("Active Detail 1")}</li>
            <li>{t("Active Detail 2")}</li>
            <li>{t("Active Detail 3")}</li>
          </ul>
        </BoxSection>

        <BoxSection title={t("Unit Title")} className="bg-purple-50">
          <p className="text-sm text-gray-700">
            {t("Unit Desc")}
          </p>
        </BoxSection>

        <BoxSection title={t("Fee Title")} className="bg-purple-50">
          <p className="text-sm text-gray-700">
            {t("Fee Desc")}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            {t("Fee Detail")}
          </p>
        </BoxSection>
      </div>
    </SectionPage>
  );

  const renderFees = () => (
    <SectionPage title={t("Fees Title")}>

      <PanelSection
        title={t("Ppk Title")}
        subtitle={t("Ppk Subtitle")}
        headerBgClass="bg-purple-600"
      >
        <div className="p-4 space-y-3">
          <p className="text-gray-700 text-sm">
            {t("Ppk Desc")}
          </p>
          <div className="bg-gray-100 text-black p-3 rounded border-l-4 border-purple-500 text-sm">
            {t("Ppk Example Note")}
          </div>
        </div>
      </PanelSection>

      <BoxSection title={t("Transaction Equation Title")}>
        <div className="flex justify-center py-4">
          <code className="text-lg bg-gray-800 text-white px-4 py-2 rounded">
            sum(inputs) - fees == sum(outputs)
          </code>
        </div>
      </BoxSection>

      <div className="space-y-2">
        <h3 className="text-white font-semibold">{t("Calculation Title")}</h3>
        <pre className="bg-gray-900 text-purple-400 p-4 rounded text-sm overflow-x-auto font-mono">
          {`def fees(inputs: List[Proof]) -> int:
  sum_fees = 0
  for proof in inputs:
    sum_fees += keysets[proof.id].input_fee_ppk
  # Integer division that rounds up
  return (sum_fees + 999) // 1000`}
        </pre>
        <p className="text-gray-300 text-xs text-right">
          {t("Calculation Note")}
        </p>
      </div>
    </SectionPage>
  );

  const renderDerivation = () => (
    <SectionPage title={t("Derivation Title")}>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="font-bold text-gray-800 mb-4">{t("Derivation Steps Title")}</h3>
        <ol className="list-decimal ml-5 space-y-2 text-gray-700 text-sm">
          <li>{t("Derivation Step 1")}</li>
          <li>{t("Derivation Step 2")}</li>
          <li>{t("Derivation Step 3")}</li>
          <li>{t("Derivation Step 4")}</li>
          <li>{t("Derivation Step 5")}</li>
        </ol>
      </div>

      <div className="space-y-2">
        <h3 className="text-white font-semibold">{t("Derivation Code Title")}</h3>
        <pre className="bg-gray-900 text-purple-300 p-4 rounded text-sm overflow-x-auto font-mono">
          {`def derive_keyset_id(keys: Dict[int, PublicKey]) -> str:
    sorted_keys = dict(sorted(keys.items()))
    pubkeys_concat = b"".join([p.serialize() for p in sorted_keys.values()])
    return "00" + hashlib.sha256(pubkeys_concat).hexdigest()[:14]`}
        </pre>
      </div>
    </SectionPage>
  );

  const renderApi = () => (
    <SectionPage title={t("API Title")}>

      <PanelSection
        title={t("API Keyset Title")}
        subtitle={t("API Keyset Subtitle")}
        headerBgClass="bg-purple-600"
      >
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-3">
            {t("API Keyset Desc")}
          </p>
          <pre className="bg-gray-50 text-black p-4 rounded text-xs overflow-x-auto border">
            {`{
  "keysets": [
    {
      "id": "009a1f293253e41e",
      "unit": "sat",
      "active": true,
      "input_fee_ppk": 100
    },
    {
      "id": "0042ade98b2a370a",
      "unit": "sat",
      "active": false,
      "input_fee_ppk": 100
    }
  ]
}`}
          </pre>
        </div>
      </PanelSection>

      <PanelSection
        title={t("API Keys Title")}
        subtitle={t("API Keys Subtitle")}
        headerBgClass="bg-purple-600"
      >
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-3">
            {t("API Keys Desc")}
          </p>
          <pre className="bg-gray-50 text-black p-4 rounded text-xs overflow-x-auto border">
            {`{
  "keysets": [{
    "id": "009a1f293253e41e",
    "unit": "sat",
    "keys": {
        "1": "02194603ffa3...",
        "2": "03b0f36d6d47...",
        "4": "0366be6e026e...",
        ...
    }
  }]
}`}
          </pre>
        </div>
      </PanelSection>
    </SectionPage>
  );

  const renderWallet = () => (
    <SectionPage title={t("Wallet Title")}>

      <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg p-6 shadow-xl border border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <Wallet className="w-6 h-6 text-purple-400" />
          <h3 className={`${textClasses.heading3} text-purple-400`}>{t("Wallet Flow Title")}</h3>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-mono">1</div>
            <div>
              <p className="font-semibold text-gray-200">{t("Wallet Step 1 Title")}</p>
              <p className={`${textClasses.small} text-gray-400`}>{t("Wallet Step 1 Desc")}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-mono">2</div>
            <div>
              <p className="font-semibold text-gray-200">{t("Wallet Step 2 Title")}</p>
              <p className={`${textClasses.small} text-gray-400`}>{t("Wallet Step 2 Desc")}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-mono">3</div>
            <div>
              <p className="font-semibold text-gray-200">{t("Wallet Step 3 Title")}</p>
              <p className={`${textClasses.small} text-gray-400`}>{t("Wallet Step 3 Desc")}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-mono">4</div>
            <div>
              <p className="font-semibold text-gray-200">{t("Wallet Step 4 Title")}</p>
              <p className={`${textClasses.small} text-gray-400`}>{t("Wallet Step 4 Desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </SectionPage>
  );

  return (
    <NutLayout
      nutNumber="02"
      sections={sections}
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      headerProps={{
        nutNumber: "02",
        title: t("title"),
        subtitle: t("subtitle"),
        badgeLabel: t("MANDATORY"),
      }}
      overviewProps={{
        nutNumber: "02",
        title: t("Protocol Definition"),
        description: t("Protocol Definition Description"),
        borderColor: "border-purple-500",
        icon: <Key className="w-5 h-5" />,
        iconLabel: t("Keyset Management"),
        iconDescription: t("Keyset Management Description"),
      }}
      renderFunctions={{
        properties: renderProperties,
        fees: renderFees,
        derivation: renderDerivation,
        api: renderApi,
        wallet: renderWallet,
      }}
    />
  );
};

export default Nut02;
