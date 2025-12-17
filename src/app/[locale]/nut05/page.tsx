"use client";

import React, { useState } from "react";
import { CheckCircle, Zap, CornerDownRight, TrendingUp, DollarSign } from "lucide-react";
import { PanelSection } from "@/src/components/PanelSection";
import { BoxSection } from "@/src/components/BoxSection";
import { NutHeader } from "@/src/components/NutHeader";
import { NutNavigation } from "@/src/components/NutNavigation";
import { SectionPage } from "@/src/components/SectionPage";
import { OverviewSection } from "@/src/components/OverviewSection";
import ClosingPanel from "@/src/components/ClosingPanel";

import { useTranslations } from "next-intl";

export const Nut05: React.FC = () => {
  const t = useTranslations("nut05");

  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: t("Overview"), icon: "📚" },
    { id: "flow", label: t("General Flow"), icon: "➡️" },
    { id: "api", label: t("API Endpoints"), icon: "💻" },
    { id: "settings", label: t("Settings"), icon: "⚙️" },
  ];

  const meltFlowSteps = [
    { num: 1, title: t("Flow Step 1 Title"), desc: t("Flow Step 1 Desc"), icon: "💸" },
    { num: 2, title: t("Flow Step 2 Title"), desc: t("Flow Step 2 Desc"), icon: "📝" },
    { num: 3, title: t("Flow Step 3 Title"), desc: t("Flow Step 3 Desc"), icon: "📤" },
    { num: 4, title: t("Flow Step 4 Title"), desc: t("Flow Step 4 Desc"), icon: "✅" },
  ];

  const renderFlow = () => (
    <SectionPage title={t("General Flow")}>

      <div className="space-y-4">
        {meltFlowSteps.map((step) => (
          <BoxSection key={step.num} title={`${step.num}. ${step.title}`} >
            {step.desc}
          </BoxSection>
        ))}
        {/* Supported Methods */}
        <PanelSection
          title={t("Supported Methods")}
          subtitle="Method-specific NUTs describe how to handle different payment methods."
          headerBgClass="bg-purple-600"
        >
          <div className="p-4 space-y-2 text-black">
            <p>
              <CornerDownRight className="w-4 h-4 inline-block mr-2" />
              {t("Method Bolt11")}
            </p>
            <p>
              <CornerDownRight className="w-4 h-4 inline-block mr-2" />
              {t("Method Bolt12")}
            </p>
          </div>
        </PanelSection>
      </div>


      {/* Synchronous vs Asynchronous Processing */}
      <h3 className="text-xl font-bold text-white mt-8 mb-4">
        {t("Processing Title")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg border-2 border-green-400 p-4 shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <h4 className="font-bold text-black">{t("Synchronous Title")}</h4>
          </div>
          <p className="text-sm text-gray-600">{t("Synchronous Desc")}</p>
        </div>

        <div className="bg-white rounded-lg border-2 border-yellow-400 p-4 shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            <h4 className="font-bold text-black">{t("Asynchronous Title")}</h4>
          </div>
          <p className="text-sm text-gray-600">{t("Asynchronous Desc")}</p>
        </div>
      </div>
    </SectionPage>
  );

  const renderAPI = () => (
    <SectionPage title={t("API Endpoints")}>

      {/* Quote Request */}
      <PanelSection
        title={`POST /v1/melt/quote/{method}`}
        subtitle={t("Quote Request Title")}
        headerBgClass="bg-blue-500"
      >
        <div className="p-4 space-y-4">
          <code className="block bg-gray-800 text-white p-3 rounded text-sm">
            POST https://mint.host:3338/v1/melt/quote/&#123;method&#125;
          </code>

          <h4 className="text-md font-semibold text-gray-700">Request (Wallet)</h4>
          <pre className="bg-gray-50 text-black p-4 rounded text-xs overflow-x-auto border">
            {`{
  "request": <str>,
  "unit": <str_enum[UNIT]>
  // Additional method-specific fields
}`}
          </pre>

          <h4 className="text-md font-semibold text-gray-700">Response (Mint)</h4>
          <pre className="bg-gray-50 text-black p-4 rounded text-xs overflow-x-auto border">
            {`{
  "quote": <str>,
  "amount": <int>,
  "unit": <str_enum[UNIT]>,
  "state": <str_enum[STATE]>,
  "expiry": <int>
  // Additional method-specific fields
}`}
          </pre>
          <ul className="mt-3 space-y-1 text-sm text-black">
            <li><strong>quote:</strong> {t("Quote Response Quote")}</li>
            <li><strong>amount:</strong> {t("Quote Response Amount")}</li>
            <li><strong>unit:</strong> {t("Quote Response Unit")}</li>
            <li><strong>expiry:</strong> {t("Quote Response Expiry")}</li>
            <li><strong>state:</strong> {t("Quote Response State")}</li>
            <ul className="ml-4 list-disc list-inside">
              <li>"UNPAID": {t("State Unpaid")}</li>
              <li>"PENDING": {t("State Pending")}</li>
              <li>"PAID": {t("State Paid")}</li>
            </ul>
          </ul>
        </div>
      </PanelSection>

      {/* Check Quote State */}
      <PanelSection
        title={`GET /v1/melt/quote/{method}/{quote_id}`}
        subtitle={t("Check Quote Title")}
        headerBgClass="bg-yellow-600"
      >
        <div className="p-4">
          <code className="block bg-gray-800 text-white p-3 rounded text-sm">
            GET https://mint.host:3338/v1/melt/quote/&#123;method&#125;/&#123;quote_id&#125;
          </code>
          <p className="mt-3 text-sm text-black">
            {t("Check Quote Desc")}
          </p>
        </div>
      </PanelSection>

      {/* Execute Melt */}
      <PanelSection
        title={`POST /v1/melt/{method}`}
        subtitle={t("Execute Melt Title")}
        headerBgClass="bg-green-600"
      >
        <div className="p-4 space-y-4">
          <code className="block bg-gray-800 text-white p-3 rounded text-sm">
            POST https://mint.host:3338/v1/melt/&#123;method&#125;
          </code>

          <h4 className="text-md font-semibold text-gray-700">Request (Wallet)</h4>
          <pre className="bg-gray-50 text-black p-4 rounded text-xs overflow-x-auto border">
            {`{
  "quote": <str>,
  "inputs": <Array[Proof]>
  // Additional method-specific fields
}`}
          </pre>
          <ul className="mt-3 space-y-1 text-sm text-black">
            <li><strong>quote:</strong> {t("Quote ID")}</li>
            <li><strong>inputs:</strong> {t("Melt Request Inputs")}</li>
          </ul>

          <h4 className="text-md font-semibold text-gray-700">Asynchronous Flow</h4>
          <p className="text-sm text-black mb-2">
            {t("Async Header Desc")}
          </p>

          <div className="bg-yellow-900/90 border border-yellow-700 p-3 rounded">
            <h5 className="font-bold text-yellow-300">{t("Async Supported Flow")}</h5>
            <ol className="list-decimal list-inside text-sm text-yellow-100 space-y-1 mt-1">
              <li>{t("Async Step 1")}</li>
              <li>{t("Async Step 2")}</li>
              <li>{t("Async Step 3")}</li>
              <li>{t("Async Step 4")}</li>
            </ol>
          </div>

          <div className="text-sm text-black pt-2">
            {t("Async Poll Desc")}
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>{t("Async Poll 1")}</li>
              <li>{t("Async Poll 2")}</li>
            </ul>
          </div>
        </div>
      </PanelSection>

      {/* Important Note for Sync */}
      <ClosingPanel
        title="Synchronous Processing Note"
        description={t("Sync Important")}
        // icon={<TrendingUp className="w-5 h-5 text-red-500" />}
        className="bg-red-900/70 border-red-700"
      />
    </SectionPage>
  );

  const renderSettings = () => (
    <SectionPage title={t("Settings")}>

      <p className="text-gray-300 mb-4">{t("Settings Desc")}</p>

      {/* Settings JSON Structure */}
      <PanelSection
        title="NUT-06 Info Response Snippet"
        subtitle="Key 4 for Minting"
        headerBgClass="bg-gray-700"
      >


        <pre className="bg-gray-50 text-black p-4 rounded text-xs overflow-x-auto border">
          {`{
  "5": {
    "methods": [
      <MeltMethodSetting>,
      ...
    ],
    "disabled": <bool>
  }
}`}
        </pre>

        <ul className="mt-3 space-y-1 text-sm text-black">
          <li><strong>disabled:</strong> {t("Setting Disabled Desc")}</li>
        </ul>

      </PanelSection>

      {/* MeltMethodSetting Format */}
      <PanelSection
        title={t("Setting MeltMethodSetting Title")}
        headerBgClass="bg-orange-500"
      >
        <div className="p-4">
          <pre className="bg-gray-50 text-black p-4 rounded text-sm overflow-x-auto">
            {`{
  "method": <str>,
  "unit": <str>,
  "min_amount": <int|null>,
  "max_amount": <int|null>,
  "options": <Object|null>
}`}
          </pre>
          <ul className="mt-3 space-y-1 text-sm text-gray-600">
            <li><strong>method:</strong> {t("Setting Method")}</li>
            <li><strong>unit:</strong> {t("Setting Unit")}</li>
            <li><strong>min_amount/max_amount:</strong> {t("Setting MinMax Desc")}</li>
            <li><strong>options:</strong> {t("Setting Options Desc")}</li>
          </ul>
        </div>
      </PanelSection>

      {/* Adding New Methods */}
      <ClosingPanel
        title={t("Adding New Methods Title")}
        description={t("Adding New Methods Desc")}
        // icon={<Zap className="w-5 h-5 text-cyan-500" />}
        className="bg-cyan-900/70 border-cyan-700"
      >
        <ol className="list-decimal list-inside text-sm text-black space-y-1 mt-2">
          <li>{t("Method Step 1")}</li>
          <li>{t("Method Step 2")}</li>
          <li>{t("Method Step 3")}</li>
          <li>{t("Method Step 4")}</li>
        </ol>
      </ClosingPanel>
    </SectionPage>
  );

  return (
    <>
      <NutHeader
        nutNumber="05"
        title={t("title")}
        subtitle={t("subtitle")}
        badgeLabel={t("MANDATORY")}
      />

      <NutNavigation
        sections={sections}
        activeSection={activeSection}
        onSectionChange={(sectionId) => {
          setActiveSection(sectionId);
        }}
      />

      {/* Content */}
      <div className="rounded-lg shadow-xl p-6 md:p-8 mb-8">
        {activeSection === "overview" && (
          <OverviewSection
            nutNumber="05"
            title={t("Protocol Definition")}
            description={t("Protocol Definition Desc")}
            borderColor="border-red-500"
            icon={<DollarSign className="w-5 h-5" />}
            iconLabel={t("Overview")}
            iconDescription="Opposite of minting, a two-step process: quote and melt."
          />
        )}
        {activeSection === "flow" && renderFlow()}
        {activeSection === "api" && renderAPI()}
        {activeSection === "settings" && renderSettings()}
      </div>
    </>
  );
};

export default Nut05;