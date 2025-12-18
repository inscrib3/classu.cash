"use client";

import React, { useState } from "react";
import { Info, Code, Layout, Settings } from "lucide-react";
import { PanelSection } from "@/src/components/PanelSection";
import { BoxSection } from "@/src/components/BoxSection";
import { NutLayout } from "@/src/components/NutLayout";
import { SectionPage } from "@/src/components/SectionPage";
import ClosingPanel from "@/src/components/ClosingPanel";
import { useTranslations } from "next-intl";
import { textClasses } from "@/src/styles/commonClasses";
import { NavSection, APIField } from "@/src/types/nut";

import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

export const Nut06: React.FC = () => {
  const t = useTranslations("nut06");
  const [activeSection, setActiveSection] = useState("overview");

  const sections: NavSection[] = [
    { id: "overview", label: t("Overview"), icon: "📚" },
    { id: "endpoint", label: t("Endpoint"), icon: "💻" },
    { id: "response", label: t("Response"), icon: "📦" },
  ];

  const responseFields: APIField[] = [
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
    <SectionPage title={t("Endpoint")}>
      <PanelSection
        title={`GET /v1/info`}
        subtitle={t("Endpoint")}
        headerBgClass="bg-indigo-600"
      >
        <div className="p-4 space-y-4">
          <h4 className={`font-semibold text-gray-700`}>{t("Example Request")}</h4>
          <code className={`block bg-gray-800 text-white p-3 rounded ${textClasses.small} overflow-x-auto`}>
            GET https://mint.host:3338/v1/info
          </code>
          <h4 className={`font-semibold text-gray-700`}>cURL Example</h4>
          <pre className={`bg-gray-50 text-black p-4 rounded ${textClasses.muted} overflow-x-auto border`}>
            {`curl -X GET https://mint.host:3338/v1/info`}
          </pre>
        </div>
      </PanelSection>
    </SectionPage>
  );

  const renderResponse = () => (
    <SectionPage title={t("Response")}>
      <PanelSection
        title={`GetInfoResponse`}
        subtitle={t("Response")}
        headerBgClass="bg-indigo-600"
      >
        <div className="p-4 space-y-4">
          <h4 className={`text-md font-semibold text-gray-700`}>{t("Example Response")}</h4>
          <pre className={`bg-gray-50 text-black p-4 rounded ${textClasses.muted} overflow-x-auto border`}>
            {GetInfoResponseExample}
          </pre>

          <h4 className={`font-semibold text-white pt-4`}>
            {t("Field Description")}
          </h4>
          <div className="space-y-2 text-gray-800">
            {responseFields.map((field) => (
              <Item key={field.field} variant="outline">
                <ItemHeader>
                  {field.field}
                  {field.optional && <Badge variant="secondary">optional</Badge>}
                </ItemHeader>
                <ItemDescription className="h-auto">{field.desc}</ItemDescription>
                {field.field === t("field_contact") && (
                  <ul className={`list-disc list-inside ml-4 ${textClasses.muted} text-gray-400 mt-2`}>
                    <li>{t("Contact Method")} (`method`)</li>
                    <li>{t("Contact Info")} (`info`)</li>
                  </ul>
                )}
                {field.field === t("field_nuts") && (
                  <div className="mt-2 p-2 bg-gray-200/70 rounded">
                    <p className="text-indigo-600 font-bold text-xs">{t("Supported NUTs")}</p>
                    <p className={`${textClasses.muted} text-gray-400`}>
                      * `4`, `5`: Settings for minting/melting methods (vedi NUT-04, NUT-05).
                    </p>
                    <p className={`${textClasses.muted} text-gray-400`}>
                      * `7`, `8`, `9`, `10`, `12`: Flag booleano `supported`.
                    </p>
                  </div>
                )}
              </Item>
            ))}
          </div>
        </div>
      </PanelSection>
    </SectionPage>
  );


  return (
    <NutLayout
      nutNumber="06"
      sections={sections}
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      headerProps={{
        nutNumber: "06",
        title: t("title"),
        subtitle: t("subtitle"),
        badgeLabel: t("MANDATORY"),
      }}
      overviewProps={{
        nutNumber: "06",
        title: t("Protocol Definition"),
        description: t("Protocol Definition Desc"),
        borderColor: "border-indigo-500",
        icon: <Info className="w-5 h-5" />,
        iconLabel: "Mint Information Endpoint",
        iconDescription: "Standard endpoint for wallet configuration and user information.",
      }}
      renderFunctions={{
        endpoint: renderEndpoint,
        response: renderResponse,
      }}
    />
  );
};

export default Nut06;
