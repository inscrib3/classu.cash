"use client";

import React, { useState } from "react";
import { Info, Code, Layout, Settings } from "lucide-react";
import { PanelSection } from "@/src/components/PanelSection";
import { BoxSection } from "@/src/components/BoxSection";
import { NutHeader } from "@/src/components/NutHeader";
import { NutNavigation } from "@/src/components/NutNavigation";
import { OverviewSection } from "@/src/components/OverviewSection";
import ClosingPanel from "@/src/components/ClosingPanel";
import { useTranslations } from "next-intl";

export const Nut06: React.FC = () => {
  const t = useTranslations("nut06");
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: t("Overview"), icon: "📚" },
    { id: "endpoint", label: t("Endpoint"), icon: "💻" },
    { id: "response", label: t("Response"), icon: "📦" },
  ];

  const responseFields = [
    { field: t("field_name"), optional: true, desc: t("field_name_desc") },
    { field: t("field_pubkey"), optional: true, desc: t("field_pubkey_desc") },
    { field: t("field_version"), optional: true, desc: t("field_version_desc") },
    { field: t("field_description"), optional: true, desc: t("field_description_desc") },
    { field: t("field_description_long"), optional: true, desc: t("field_description_long_desc") },
    { field: t("field_contact"), optional: true, desc: t("field_contact_desc") },
    { field: t("field_motd"), optional: true, desc: t("field_motd_desc") },
    { field: t("field_icon_url"), optional: true, desc: t("field_icon_url_desc") },
    { field: t("field_urls"), optional: true, desc: t("field_urls_desc") },
    { field: t("field_time"), optional: true, desc: t("field_time_desc") },
    { field: t("field_tos_url"), optional: true, desc: t("field_tos_url_desc") },
    { field: t("field_nuts"), optional: true, desc: t("field_nuts_desc") },
  ];

  const GetInfoResponseExample = `{
  "name": "Bob's Cashu mint",
  "pubkey": "0283bf290884eed3a7ca2663fc0260de2e2064d6b355ea13f98dec004b7a7ead99",
  "version": "Nutshell/0.15.0",
  "description": "The short mint description",
  "description_long": "A description that can be a long piece of text.",
  "contact": [
    {
      "method": "email",
      "info": "contact@me.com"
    },
    {
      "method": "twitter",
      "info": "@me"
    },
    {
      "method": "nostr",
      "info": "npub..."
    }
  ],
  "motd": "Message to display to users.",
  "icon_url": "https://mint.host/icon.jpg",
  "urls": [
    "https://mint.host",
    "http://mint8gv0sq5ul602uxt2fe0t80e3c2bi9fy0cxedp69v1vat6ruj81wv.onion"
  ],
  "time": 1725304480,
  "tos_url": "https://mint.host/tos",
  "nuts": {
    "4": {
      "methods": [
        {
          "method": "bolt11",
          "unit": "sat",
          "min_amount": 0,
          "max_amount": 10000
        }
      ],
      "disabled": false
    },
    "5": {
      "methods": [
        {
          "method": "bolt11",
          "unit": "sat",
          "min_amount": 100,
          "max_amount": 10000
        }
      ],
      "disabled": false
    },
    "7": {
      "supported": true
    },
    "8": {
      "supported": true
    },
    "9": {
      "supported": true
    },
    "10": {
      "supported": true
    },
    "12": {
      "supported": true
    }
  }
}`;

  const renderEndpoint = () => (
    <div className="space-y-6">
      <PanelSection
        title={`GET /v1/info`}
        subtitle={t("Endpoint")}
        headerBgClass="bg-green-600"
      >
        <div className="p-4 space-y-4">
          <h4 className="font-semibold text-gray-700">{t("Example Request")}</h4>
          <code className="block bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
            GET https://mint.host:3338/v1/info
          </code>
          <h4 className="font-semibold text-gray-700">cURL Example</h4>
          <pre className="bg-gray-50 text-black p-4 rounded text-xs overflow-x-auto border">
            {`curl -X GET https://mint.host:3338/v1/info`}
          </pre>
        </div>
      </PanelSection>
    </div>
  );

  const renderResponse = () => (
    <div className="space-y-6">
      <PanelSection
        title={`GetInfoResponse`}
        subtitle={t("Response")}
        headerBgClass="bg-blue-600"
      >
        <div className="p-4 space-y-4">
          <h4 className="text-md font-semibold text-gray-700">{t("Example Response")}</h4>
          <pre className="bg-gray-50 text-black p-4 rounded text-xs overflow-x-auto border">
            {GetInfoResponseExample}
          </pre>

          <h4 className="font-semibold text-white pt-4">
            {t("Field Description")}
          </h4>
          <div className="space-y-2">
            {responseFields.map((field) => (
              <div key={field.field} className="bg-gray-100/50 p-3 rounded-lg border-l-4 border-blue-400">
                <p className="font-mono text-sm text-blue-700">
                  {field.field}
                  {field.optional && <span className="text-gray-500 ml-2 text-xs">(optional)</span>}
                </p>
                <p className="text-gray-800 text-sm mt-1">{field.desc}</p>
                {field.field === t("field_contact") && (
                  <ul className="list-disc list-inside ml-4 text-xs text-gray-400 mt-2">
                    <li>{t("Contact Method")} (`method`)</li>
                    <li>{t("Contact Info")} (`info`)</li>
                  </ul>
                )}
                {field.field === t("field_nuts") && (
                  <div className="mt-2 p-2 bg-gray-200/70 rounded">
                    <p className="text-yellow-400 font-bold text-xs">{t("Supported NUTs")}</p>
                    <p className="text-xs text-gray-400">
                       * `4`, `5`: Settings for minting/melting methods (vedi NUT-04, NUT-05).
                    </p>
                    <p className="text-xs text-gray-400">
                       * `7`, `8`, `9`, `10`, `12`: Flag booleano `supported`.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </PanelSection>
    </div>
  );


  return (
    <>
      <NutHeader
        nutNumber="06"
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
            nutNumber="06"
            title={t("Protocol Definition")}
            description={t("Protocol Definition Desc")}
            borderColor="border-yellow-500"
            icon={<Info className="w-5 h-5" />}
            iconLabel="Mint Information Endpoint"
            iconDescription="Standard endpoint for wallet configuration and user information."
          />
        )}
        {activeSection === "endpoint" && renderEndpoint()}
        {activeSection === "response" && renderResponse()}
      </div>
    </>
  );
};

export default Nut06;
