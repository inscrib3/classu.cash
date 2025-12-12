"use client";

import React, { useState } from "react";
import { Lock, CheckCircle, Eye, EyeOff } from "lucide-react";
import { PanelSection } from "@/src/components/PanelSection";
import { BoxSection } from "@/src/components/BoxSection";
import { NutHeader } from "@/src/components/NutHeader";
import { NutNavigation } from "@/src/components/NutNavigation";

import { CharactersSection } from "@/src/components/CharactersSection";
import { OverviewSection } from "@/src/components/OverviewSection";
import { SectionHeader } from "@/src/components/SectionHeader";
import ClosingPanel from "@/src/components/ClosingPanel";

import { useTranslations } from "next-intl";

export const Nut00: React.FC = () => {
  const t = useTranslations("nut00");

  const [activeSection, setActiveSection] = useState("overview");
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const sections = [
    { id: "overview", label: t("Overview"), icon: "📚" },
    { id: "bdhke", label: t("BDHKE Protocol"), icon: "🔐" },
    { id: "variables", label: t("Key Variables"), icon: "🔑" },
    { id: "models", label: t("Data Models"), icon: "📦" },
    { id: "tokens", label: t("Token Format"), icon: "🎫" },
  ];

  const bdhkeSteps = [
    {
      num: 1,
      actor: t("bdhkeSt_1_actor"),
      action: t("bdhkeSt_1_action"),
      detail: t("bdhkeSt_1_detail"),
      description: t("bdhkeSt_1_description"),
    },
    {
      num: 2,
      actor: t("bdhkeSt_2_actor"),
      action: t("bdhkeSt_2_action"),
      detail: "Y = hash_to_curve(x), B_ = Y + r·G",
      description: t("bdhkeSt_2_description"),
    },
    {
      num: 3,
      actor: t("bdhkeSt_3_actor"),
      action: t("bdhkeSt_3_action"),
      detail: t("bdhkeSt_3_detail"),
      description: t("bdhkeSt_3_description"),
    },
    {
      num: 4,
      actor: t("bdhkeSt_4_actor"),
      action: t("bdhkeSt_4_action"),
      detail: t("bdhkeSt_4_detail"),
      description: t("bdhkeSt_4_description"),
    },
    {
      num: 5,
      actor: t("bdhkeSt_5_actor"),
      action: t("bdhkeSt_5_action"),
      detail: t("bdhkeSt_5_detail"),
      description: t("bdhkeSt_5_description"),
    },
    {
      num: 6,
      actor: t("bdhkeSt_6_actor"),
      action: t("bdhkeSt_6_action"),
      detail: t("bdhkeSt_6_detail"),
      description: t("bdhkeSt_6_description"),
    },
    {
      num: 7,
      actor: t("bdhkeSt_7_actor"),
      action: t("bdhkeSt_7_action"),
      detail: t("bdhkeSt_7_detail"),
      description: t("bdhkeSt_7_description"),
    },
    {
      num: 8,
      actor: t("bdhkeSt_8_actor"),
      action: t("bdhkeSt_8_action"),
      detail: t("bdhkeSt_8_detail")+": k·hash_to_curve(x) == C",
      description: t("bdhkeSt_8_description"),
    },
  ];

  const variables = {
    common: [
      { symbol: "G", name: t("v_common_name"), desc: t("v_common_desc") },
    ],
    bob: [
      { symbol: "k", name: t("v_bob_k_name"), desc: t("v_bob_k_desc") },
      { symbol: "K", name: t("v_bob_K__name"), desc: t("v_bob_K__desc") },
      { symbol: "C_", name: t("v_bob_C_name"), desc: t("v_bob_C_desc") },
    ],
    alice: [
      { symbol: "x", name: t("v_alice_x_name"), desc: t("v_alice_x_desc") },
      { symbol: "Y", name: t("v_alice_Y_name"), desc: "Y = hash_to_curve(x)" },
      { symbol: "r", name: t("v_alice_r_name"), desc: t("v_alice_r_desc") },
      { symbol: "B_", name: t("v_alice_B__name"), desc: t("v_alice_B__desc") },
      { symbol: "C", name: t("v_alice_c_name"), desc: t("v_alice_c_desc") },
    ],
  };

  const renderBDHKE = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-4">
        {t("Blind Diffie-Hellmann Key Exchange Protocol")}
      </h2>

      <div className="space-y-4">
        {bdhkeSteps.map((step) => (
          <div
            key={step.num}
            className={`bg-linear-to-r from-cyan-500/20 to-blue-500/20 border-l-4 border-cyan-400 cursor-pointer ${
              selectedStep === step.num
                ? "border-blue-500 shadow-lg"
                : "border-gray-200 hover:border-blue-300"
            }`}
            onClick={() =>
              setSelectedStep(selectedStep === step.num ? null : step.num)
            }
          >
            <div className="p-4 flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                {step.num}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-white">
                    {step.actor}
                  </span>
                  <span className="text-gray-400">→</span>
                  <span className="text-white">{step.action}</span>
                </div>
                <code className="text-sm bg-gray-400 px-2 py-1 rounded">
                  {step.detail}
                </code>
              </div>
              {selectedStep === step.num ? (
                <Eye className="w-5 h-5 text-blue-500" />
              ) : (
                <EyeOff className="w-5 h-5 text-gray-400" />
              )}
            </div>
            {selectedStep === step.num && (
              <div className="px-4 pb-4 pt-2 border-t border-gray-100">
                <p className="text-white">{step.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <ClosingPanel
        title={t("Privacy Guarantee")}
        description={t("Bob signs the token")}
      />
      
    </div>
  );

  const renderVariables = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-4">
        {t("Cryptographic Variables")}
      </h2>

      <BoxSection
        title="Common"
        className="bg-gray-50"
      >
        {variables.common.map((v, i) => (
            <div key={i} className="flex items-start gap-3">
              <code className="bg-gray-400 text-white px-3 py-1 rounded font-mono text-sm border">
                {v.symbol}
              </code>
              <div>
                <div className="font-semibold text-gray-600">{v.name}</div>
                <div className="text-sm text-gray-600">{v.desc}</div>
              </div>
            </div>
          ))}
      </BoxSection>

      <BoxSection
        title="Bob (Mint)"
        className="bg-blue-50"
      >
        {variables.bob.map((v, i) => (
          <div key={i} className="flex items-start gap-3">
            <code className="bg-gray-400 text-white px-3 py-1 rounded font-mono text-sm border border-blue-200">
              {v.symbol}
            </code>
            <div>
              <div className="font-semibold text-gray-600">{v.name}</div>
              <div className="text-sm text-gray-600">{v.desc}</div>
            </div>
          </div>
        ))}        
      </BoxSection>

      <BoxSection
        title="Alice (User)"
        className="bg-purple-50"
      >
        {variables.alice.map((v, i) => (
          <div key={i} className="flex items-start gap-3">
            <code className="bg-gray-400 text-white px-3 py-1 rounded font-mono text-sm border border-purple-200">
              {v.symbol}
            </code>
            <div>
              <div className="font-semibold text-gray-600">{v.name}</div>
              <div className="text-sm text-gray-600">{v.desc}</div>
            </div>
          </div>
        ))}
      </BoxSection>

      <ClosingPanel
        title="hash_to_curve Function"
        description={t("Deterministically maps a") + ":"}
        codeSnippet={`Y = PublicKey('02' || SHA256(msg_hash || counter))`}
        note={
          <>
            {t("Uses domain separator")}: <code>b"Secp256k1_HashToCurve_Cashu_"</code>
          </>
        }
      />
    </div>
  );

  const renderModels = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-4">Data Models</h2>

      <PanelSection
          title={t("BlindedMessage")}
          subtitle={t("Sent from Alice to")}
          headerBgClass="bg-purple-500"
      >
        <div className="p-4">
          <pre className="bg-gray-50 text-black text-black p-4 rounded text-sm overflow-x-auto">
            {`{
  "amount": int,
  "id": hex_str,
  "B_": hex_str
}`}
          </pre>
          <ul className="mt-3 space-y-1 text-sm text-gray-600">
            <li>
              <strong>{t("amount")}:</strong>{" "}
              {t("Value for requested signature")}
            </li>
            <li>
              <strong>id:</strong> {t("Keyset ID from")}
            </li>
            <li>
              <strong>B_:</strong> {t("Blinded secret message")}
            </li>
          </ul>
        </div>
      </PanelSection>

      <PanelSection
          title={t("BlindSignature (Promise)")}
          subtitle={t("Sent from Bob to Alice after signing")}
          headerBgClass="bg-blue-500"
      >
        <div className="p-4">
          <pre className="bg-gray-50 text-black text-black p-4 rounded text-sm overflow-x-auto">
            {`{
  "amount": int,
  "id": hex_str,
  "C_": hex_str
}`}
          </pre>
          <ul className="mt-3 space-y-1 text-sm text-gray-600">
            <li>
              <strong>{t("amount")}:</strong> {t("Value of the blinded token")}
            </li>
            <li>
              <strong>id:</strong> {t("Keyset ID of signing keys")}
            </li>
            <li>
              <strong>C_:</strong> {t("Blind signature on secret B_")}
            </li>
          </ul>
        </div>
      </PanelSection>

      <PanelSection
        title={t("Proof (Input)")}
        subtitle={t("Used by Alice to spend tokens")}
        headerBgClass="bg-green-500"
        >
          <div className="p-4">
            <pre className="bg-gray-50 text-black text-black p-4 rounded text-sm overflow-x-auto">
            {`{
  "amount": int,
  "id": hex_str,
  "secret": str,
  "C": hex_str
}`}
          </pre>
              <ul className="mt-3 space-y-1 text-sm text-gray-600">
                <li>
                  <strong>{t("amount")}:</strong> {t("Value of the proof")}
                </li>
                <li>
                  <strong>id:</strong> {t("Keyset ID of signing keys")}
                </li>
                <li>
                  <strong>secret:</strong> {t("The secret message (UTF-8 string)")}
                </li>
                <li>
                  <strong>C:</strong> {t("Unblinded signature on secret")}
                </li>
              </ul>
            </div>
      </PanelSection>

    </div>
  );

  const renderTokens = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-4">
        {t("Token Serialization")}
      </h2>

      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-6">
        <h3 className="font-bold text-xl mb-3">{t("Token Format")}</h3>
        <code className="block bg-white/20 p-3 rounded">
          cashu[version][token]
        </code>
        <p className="mt-3 text-sm">
          {t("URI scheme for clickable tokens")}:{" "}
          <code className="bg-gray-400/20 px-2 py-1 rounded">
            cashu:cashuA...
          </code>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-500 text-white px-2 py-1 rounded font-mono text-sm">
              V3
            </span>
            <h3 className="font-bold text-black">{t("Legacy Format")}</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              • {t("Version flag")}: <code>A</code>
            </li>
            <li>• {t("Base64 encoded JSON")}</li>
            <li>• {t("Supports multiple mints")}</li>
            <li>• {t("Deprecated (use V4)")}</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg border-2 border-purple-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-purple-500 text-white px-2 py-1 rounded font-mono text-sm">
              V4
            </span>
            <h3 className="font-bold text-black">{t('Current Format')}</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              • {t("Version flag")}: <code>B</code>
            </li>
            <li>• {t("CBOR binary format")}</li>
            <li>• {t("More space-efficient")}</li>
            <li>• {t("Single mint only")}</li>
          </ul>
        </div>
      </div>

      <BoxSection
        title={t("V4 Token Structure")}
      >
        <pre className="bg-gray-50 text-black p-4 rounded text-sm overflow-x-auto">
          {`{
  "m": str,      // mint URL
  "u": str,      // unit (e.g., "sat")
  "d": str,      // memo (optional)
  "t": [         // token array
    {
      "i": bytes,  // keyset ID
      "p": [       // proofs
        {
          "a": int,    // amount
          "s": str,    // secret
          "c": bytes,  // signature
          "w": str     // witness (optional)
        }
      ]
    }
  ]
}`}
        </pre>
      </BoxSection>

      <ClosingPanel
        title={t("Binary Format (NFC)")}
        description={t("For NFC transmission") + ":"}
        codeSnippet={`utf8("craw") || utf8("B") || cbor(token_v4_object)`}
      />

    </div>
  );

  return (
    <>
      <NutHeader
        nutNumber="00"
        title={t("title")}
        subtitle={t("subtitle")}
        badgeLabel={t("MANDATORY")}
      />

      <NutNavigation
        sections={sections}
        activeSection={activeSection}
        onSectionChange={(sectionId) => {
          setActiveSection(sectionId);
          setSelectedStep(null);
        }}
      />

      {/* Content */}
      <div className="rounded-lg shadow-xl p-6 md:p-8 mb-8">
        {activeSection === "overview" && (
          <OverviewSection
            nutNumber="00"
            title={t("Protocol Foundation")}
            description={t("This specification defines")}
            borderColor="border-green-500"
            icon={<Lock className="w-5 h-5" />}
            iconLabel={t("Key Innovation: Blind Signatures")}
            iconDescription={t("The protocol uses")}
          />
        )}
        {activeSection === "bdhke" && renderBDHKE()}
        {activeSection === "variables" && renderVariables()}
        {activeSection === "models" && renderModels()}
        {activeSection === "tokens" && renderTokens()}
      </div>
    </>
  );
};

export default Nut00;
