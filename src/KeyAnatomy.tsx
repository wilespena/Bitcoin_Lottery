import { useState, useEffect } from "react";
import {
  generateKeyInfo,
  generateKeyInfoFromPublicKey,
  generateKeyInfoFromWIF,
  generateKeyInfoFromSHA256,
  generateKeyInfoFromHash160,
  generateKeyInfoFromAddress,
  isValidBitcoinAddress,
  random32Byte,
} from "./bitcoin";
import type { KeyInfo } from "./bitcoin";
import { EllipticCurveCanvas } from "./EllipticCurveCanvas";
import englishContent from "./languages/english";
import ptContent from "./languages/portuguese";
import esContent from "./languages/spanish";

type InputMode = "private" | "wif" | "public" | "sha256" | "hash160" | "address";
type Lang = "en" | "pt" | "es";

const BTC_TO_SAT = 100_000_000;

function getInitialLang(): Lang {
  const params = new URLSearchParams(window.location.search);
  const paramLang = params.get("lang");
  if (paramLang === "en" || paramLang === "pt" || paramLang === "es") {
    return paramLang;
  }
  const stored = localStorage.getItem("app_lang");
  if (stored === "en" || stored === "pt" || stored === "es") {
    return stored;
  }
  const userLang = navigator.language || "en";
  if (/^pt/i.test(userLang)) return "pt";
  if (/^es/i.test(userLang)) return "es";
  return "en";
}

export default function KeyAnatomy() {
  const [lang, setLang] = useState<Lang>(getInitialLang);
  const content =
    lang === "pt" ? ptContent : lang === "es" ? esContent : englishContent;
  const t = content.anatomy;

  const [inputMode, setInputMode] = useState<InputMode>("private");
  const [hexInput, setHexInput] = useState<string>(
    "0000000000000000000000000000000000000000000000000000000000000002"
  );
  const [wifInput, setWifInput] = useState<string>("");
  const [pubKeyInput, setPubKeyInput] = useState<string>("");
  const [sha256Input, setSha256Input] = useState<string>("");
  const [hash160Input, setHash160Input] = useState<string>("");
  const [addressInput, setAddressInput] = useState<string>("");

  const [keyInfo, setKeyInfo] = useState<KeyInfo | null>(() =>
    generateKeyInfo(
      "0000000000000000000000000000000000000000000000000000000000000002"
    )
  );
  const [balance, setBalance] = useState<string | null>(null);
  const [isFetchingBalance, setIsFetchingBalance] = useState(false);

  // Synchronize cryptographic pipeline whenever any stage input changes
  useEffect(() => {
    let info: KeyInfo | null = null;
    if (inputMode === "private") {
      info = generateKeyInfo(hexInput);
    } else if (inputMode === "wif") {
      info = generateKeyInfoFromWIF(wifInput);
    } else if (inputMode === "public") {
      info = generateKeyInfoFromPublicKey(pubKeyInput);
    } else if (inputMode === "sha256") {
      info = generateKeyInfoFromSHA256(sha256Input);
    } else if (inputMode === "hash160") {
      info = generateKeyInfoFromHash160(hash160Input);
    } else if (inputMode === "address") {
      info = generateKeyInfoFromAddress(addressInput);
    }
    setKeyInfo(info);
  }, [
    inputMode,
    hexInput,
    wifInput,
    pubKeyInput,
    sha256Input,
    hash160Input,
    addressInput,
  ]);

  // Balance lookup is MANUAL: it sends the derived address to mempool.space,
  // so it must never fire automatically while someone types a key.
  const addrForBalance = keyInfo?.addressLegacy;
  useEffect(() => {
    // Any change of address invalidates the previous result
    setBalance(null);
    setIsFetchingBalance(false);
  }, [addrForBalance]);

  const checkBalance = () => {
    const addr = addrForBalance;
    if (!addr || !isValidBitcoinAddress(addr) || isFetchingBalance) return;
    setIsFetchingBalance(true);
    fetch(`https://mempool.space/api/address/${encodeURIComponent(addr)}`, {
      referrerPolicy: "no-referrer",
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (
          typeof data?.chain_stats?.funded_txo_sum === "number" &&
          typeof data?.chain_stats?.spent_txo_sum === "number"
        ) {
          const totalSats =
            data.chain_stats.funded_txo_sum - data.chain_stats.spent_txo_sum;
          const btc =
            (totalSats / BTC_TO_SAT).toFixed(8).replace(/\.?0+$/, "") +
            " BTC";
          setBalance(totalSats === 0 ? "0 BTC" : btc);
        } else {
          setBalance(t.balanceError);
        }
      })
      .catch(() => setBalance(t.balanceError))
      .finally(() => setIsFetchingBalance(false));
  };

  const applyPresetPrivateKey = (hex: string) => {
    setInputMode("private");
    setHexInput(hex.padStart(64, "0"));
  };

  const applyPresetAddress = (addr: string) => {
    setInputMode("address");
    setAddressInput(addr);
  };

  const privDisplayValue =
    inputMode === "private"
      ? hexInput
      : inputMode === "wif"
        ? keyInfo?.privateKeyHex || ""
        : t.irreversibleMath;

  const wifDisplayValue =
    inputMode === "wif"
      ? wifInput
      : inputMode === "private"
        ? keyInfo?.wif || ""
        : t.irreversibleMath;

  const pubDisplayValue =
    inputMode === "public"
      ? pubKeyInput
      : inputMode === "private" || inputMode === "wif"
        ? keyInfo?.publicKeyHexCompressed || ""
        : t.irreversibleHash;

  const shaDisplayValue =
    inputMode === "sha256"
      ? sha256Input
      : inputMode === "private" || inputMode === "wif" || inputMode === "public"
        ? keyInfo?.sha256Pubkey || ""
        : t.irreversibleHash;

  const hash160DisplayValue =
    inputMode === "hash160"
      ? hash160Input
      : keyInfo?.hash160 && keyInfo.hash160 !== "?"
        ? keyInfo.hash160
        : "";

  const addressDisplayValue =
    inputMode === "address" ? addressInput : keyInfo?.addressLegacy || "";

  return (
    <div className="tx-builder-root">
      <div className="tx-builder-container">
        {/* Language switcher */}
        <div className="lang-switcher" style={{ marginTop: "0", top: "10px" }}>
          <button
            className={`lang-btn${lang === "en" ? " active" : ""}`}
            onClick={() => {
              setLang("en");
              localStorage.setItem("app_lang", "en");
            }}
          >
            🇺🇸 EN
          </button>
          <button
            className={`lang-btn${lang === "pt" ? " active" : ""}`}
            onClick={() => {
              setLang("pt");
              localStorage.setItem("app_lang", "pt");
            }}
          >
            🇧🇷 PT
          </button>
          <button
            className={`lang-btn${lang === "es" ? " active" : ""}`}
            onClick={() => {
              setLang("es");
              localStorage.setItem("app_lang", "es");
            }}
          >
            🇪🇸 ES
          </button>
        </div>

        {/* Header */}
        <div style={{ textAlign: "left" }}>
          <a className="back-link" href="./">
            {t.back}
          </a>
          <h1 className="tx-builder-title">🧬 {t.title}</h1>
          <p className="tx-builder-subtitle">{t.subtitle}</p>
        </div>

        {/* Didactic Presets */}
        <div className="anatomy-presets-bar">
          <span className="anatomy-presets-label">{t.presetsLabel}</span>
          <div className="anatomy-presets-buttons">
            <button
              type="button"
              className="anatomy-preset-btn"
              onClick={() => applyPresetPrivateKey("1")}
            >
              {t.presetKey1}
            </button>
            <button
              type="button"
              className="anatomy-preset-btn"
              onClick={() => applyPresetPrivateKey("2")}
            >
              {t.presetKey2}
            </button>
            <button
              type="button"
              className="anatomy-preset-btn"
              onClick={() => applyPresetPrivateKey("d2c55")}
            >
              {t.presetPuzzle20}
            </button>
            <button
              type="button"
              className="anatomy-preset-btn highlight"
              onClick={() =>
                applyPresetAddress("1PWo3JeB9jrGwfHDNpdGK54CRas7fsVzXU")
              }
            >
              {t.presetPuzzle71Addr}
            </button>
            <button
              type="button"
              className="anatomy-preset-btn"
              onClick={() => applyPresetPrivateKey(random32Byte())}
            >
              {t.presetRandom}
            </button>
          </div>
        </div>

        {!keyInfo && (
          <div className="tx-error-box" style={{ textAlign: "left" }}>
            ⚠️ {t.invalidInput}
          </div>
        )}

        <div className="anatomy-pipeline">
          {/* STEP 1: Private Key (Hex) */}
          <div
            className={`anatomy-step-card${
              inputMode === "private" ? " active" : ""
            }`}
          >
            <div className="anatomy-step-header">
              <span className="anatomy-step-title">🔑 {t.privTitle}</span>
            </div>
            <p className="anatomy-step-desc">{t.privDesc}</p>
            <input
              type="text"
              className={`anatomy-hex-input${
                inputMode !== "private" && inputMode !== "wif"
                  ? " irreversible"
                  : ""
              }`}
              value={privDisplayValue}
              onFocus={() => {
                if (inputMode !== "private" && inputMode !== "wif") {
                  setInputMode("private");
                }
              }}
              onChange={(e) => {
                setInputMode("private");
                setHexInput(e.target.value.replace(/[^0-9a-fA-F]/g, ""));
              }}
              placeholder={t.privPlaceholder}
              maxLength={64}
              spellCheck={false}
            />
          </div>

          <div className="anatomy-calc-box">
            <span>↕</span>
            <code>
              WIF = Base58Check( 0x80 + Private_Key_32B + 0x01 )
            </code>
            <span>↕</span>
          </div>

          {/* STEP 2: WIF */}
          <div
            className={`anatomy-step-card${
              inputMode === "wif" ? " active" : ""
            }`}
          >
            <div className="anatomy-step-header">
              <span className="anatomy-step-title">🛡️ {t.wifTitle}</span>
            </div>
            <p className="anatomy-step-desc">{t.wifDesc}</p>
            <input
              type="text"
              className={`anatomy-hex-input${
                inputMode !== "private" && inputMode !== "wif"
                  ? " irreversible"
                  : ""
              }`}
              value={wifDisplayValue}
              onFocus={() => {
                if (inputMode !== "wif") {
                  if (keyInfo?.wif && keyInfo.wif !== "?") {
                    setWifInput(keyInfo.wif);
                  }
                  setInputMode("wif");
                }
              }}
              onChange={(e) => {
                setInputMode("wif");
                setWifInput(e.target.value.trim());
              }}
              placeholder={t.wifPlaceholder}
              maxLength={52}
              spellCheck={false}
            />
          </div>

          <div className="anatomy-calc-box">
            <span>↓</span>
            <code>P = k × G (SECP256k1 Scalar Multiplication)</code>
            <span>↓</span>
          </div>

          {/* Elliptic Curve Visual Canvas */}
          {keyInfo &&
            keyInfo.publicKeyHexCompressed &&
            keyInfo.publicKeyHexCompressed !== "?" && (
              <EllipticCurveCanvas
                publicKeyHex={keyInfo.publicKeyHexCompressed}
                title={t.curveTitle}
                formula={t.curveFormula}
                calculatingLabel={t.curveCalculating}
                pointLabel={t.curvePointLabel}
                generatorLabel={t.curveGeneratorLabel}
              />
            )}

          {/* STEP 3: Public Key (Compressed) */}
          <div
            className={`anatomy-step-card${
              inputMode === "public" ? " active" : ""
            }`}
          >
            <div className="anatomy-step-header">
              <span className="anatomy-step-title">🔗 {t.pubTitle}</span>
            </div>
            <p className="anatomy-step-desc">{t.pubDesc}</p>
            <input
              type="text"
              className={`anatomy-hex-input${
                !["private", "wif", "public"].includes(inputMode)
                  ? " irreversible"
                  : ""
              }`}
              value={pubDisplayValue}
              onFocus={() => {
                if (inputMode !== "public") {
                  if (
                    keyInfo?.publicKeyHexCompressed &&
                    keyInfo.publicKeyHexCompressed !== "?"
                  ) {
                    setPubKeyInput(keyInfo.publicKeyHexCompressed);
                  }
                  setInputMode("public");
                }
              }}
              onChange={(e) => {
                setInputMode("public");
                setPubKeyInput(e.target.value.replace(/[^0-9a-fA-F]/g, ""));
              }}
              placeholder={t.pubPlaceholder}
              maxLength={130}
              spellCheck={false}
            />
          </div>

          <div className="anatomy-calc-box">
            <span>↓</span>
            <code>f(x) = SHA256( Compressed_Public_Key )</code>
            <span>↓</span>
          </div>

          {/* STEP 4: SHA-256 */}
          <div
            className={`anatomy-step-card${
              inputMode === "sha256" ? " active" : ""
            }`}
          >
            <div className="anatomy-step-header">
              <span className="anatomy-step-title">#️⃣ {t.shaTitle}</span>
            </div>
            <p className="anatomy-step-desc">{t.shaDesc}</p>
            <input
              type="text"
              className={`anatomy-hex-input${
                ["hash160", "address"].includes(inputMode)
                  ? " irreversible"
                  : ""
              }`}
              value={shaDisplayValue}
              onFocus={() => {
                if (inputMode !== "sha256") {
                  if (keyInfo?.sha256Pubkey && keyInfo.sha256Pubkey !== "?") {
                    setSha256Input(keyInfo.sha256Pubkey);
                  }
                  setInputMode("sha256");
                }
              }}
              onChange={(e) => {
                setInputMode("sha256");
                setSha256Input(e.target.value.replace(/[^0-9a-fA-F]/g, ""));
              }}
              placeholder={t.shaPlaceholder}
              maxLength={64}
              spellCheck={false}
            />
          </div>

          <div className="anatomy-calc-box">
            <span>↓</span>
            <code>f(x) = RIPEMD160( SHA256_Digest )</code>
            <span>↓</span>
          </div>

          {/* STEP 5: RIPEMD-160 (Hash160) */}
          <div
            className={`anatomy-step-card${
              inputMode === "hash160" ? " active" : ""
            }`}
          >
            <div className="anatomy-step-header">
              <span className="anatomy-step-title">🧬 {t.hash160Title}</span>
            </div>
            <p className="anatomy-step-desc">{t.hash160Desc}</p>
            <input
              type="text"
              className="anatomy-hex-input"
              value={hash160DisplayValue}
              onFocus={() => {
                if (inputMode !== "hash160") {
                  if (keyInfo?.hash160 && keyInfo.hash160 !== "?") {
                    setHash160Input(keyInfo.hash160);
                  }
                  setInputMode("hash160");
                }
              }}
              onChange={(e) => {
                setInputMode("hash160");
                setHash160Input(e.target.value.replace(/[^0-9a-fA-F]/g, ""));
              }}
              placeholder={t.hash160Placeholder}
              maxLength={40}
              spellCheck={false}
            />
          </div>

          <div className="anatomy-calc-box">
            <span>↕</span>
            <div className="anatomy-math-lines">
              <code>payload = 0x00 + Hash160</code>
              <code>checksum = SHA256( SHA256( payload ) ).slice(0, 4_bytes)</code>
              <code>Address = Base58Encode( payload + checksum )</code>
            </div>
            <span>↕</span>
          </div>

          {/* STEP 6: Final Legacy Bitcoin Address */}
          <div
            className={`anatomy-step-card final-address${
              inputMode === "address" ? " active" : ""
            }`}
          >
            <div className="anatomy-step-header">
              <span
                className="anatomy-step-title"
                style={{ color: "#ffd43b", fontSize: "15px" }}
              >
                ✅ {t.addrTitle}
              </span>
            </div>
            <p className="anatomy-step-desc">{t.addrDesc}</p>
            <input
              type="text"
              className="anatomy-hex-input address-highlight"
              value={addressDisplayValue}
              onFocus={() => {
                if (inputMode !== "address") {
                  if (keyInfo?.addressLegacy) {
                    setAddressInput(keyInfo.addressLegacy);
                  }
                  setInputMode("address");
                }
              }}
              onChange={(e) => {
                setInputMode("address");
                setAddressInput(e.target.value.trim());
              }}
              placeholder={t.addrPlaceholder}
              maxLength={35}
              spellCheck={false}
            />

            <div className="anatomy-balance-bar">
              <span className="anatomy-balance-label">{t.mempoolBalance}</span>
              {isFetchingBalance ? (
                <span className="anatomy-balance-fetching">
                  {t.fetchingBalance}
                </span>
              ) : balance ? (
                <span
                  className={`anatomy-balance-value${
                    balance !== "0 BTC" && balance !== t.balanceError
                      ? " has-funds"
                      : ""
                  }`}
                >
                  {balance}
                </span>
              ) : (
                <button
                  type="button"
                  className="anatomy-balance-btn"
                  onClick={checkBalance}
                  disabled={
                    !addrForBalance || !isValidBitcoinAddress(addrForBalance)
                  }
                >
                  {t.balanceCheckBtn}
                </button>
              )}
            </div>
            <p className="anatomy-balance-notice">{t.balanceNotice}</p>
          </div>
        </div>

        {/* Educational Security Callout linking Anatomy to Kangaroo & MARA Slipstream */}
        <div className="anatomy-security-callout">
          <h3 className="anatomy-security-title">{t.securityCalloutTitle}</h3>
          <p className="anatomy-security-body">{t.securityCalloutBody}</p>
          <div className="action-links" style={{ marginBottom: 0 }}>
            <a
              href={
                lang === "pt"
                  ? "./education-pt.html"
                  : lang === "es"
                    ? "./education-es.html"
                    : "./education.html"
              }
              className="action-link-btn"
            >
              {content["btn-education"]}
            </a>
            <a href="./tx-builder.html" className="action-link-btn">
              {content["btn-txb"]}
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="tx-footer">{t.footer}</div>
      </div>
    </div>
  );
}

