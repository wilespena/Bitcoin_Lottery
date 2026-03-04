import { useEffect, useState, useRef } from "react";
import bitcoinLogo from "./assets/bitcoin.png";
import { random32ByteRange, findPrivateKey, toWIF } from "./bitcoin";

import englishContent from "./languages/english";
import ptContent from "./languages/portuguese";

enum LotteryState {
  Normal = "normal",
  Loading = "loading",
  Success = "success",
}

const TARGET_ADDRESS = "1PWo3JeB9jrGwfHDNpdGK54CRas7fsVzXU";
const REWARD = "7.1 BTC";

function App() {
  const [state, setState] = useState(LotteryState.Normal);
  const [lang, setLang] = useState<"en" | "pt">("en");
  const content = lang === "pt" ? ptContent : englishContent;
  const [resultMsg, setResultMsg] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [foundKey, setFoundKey] = useState<{ hex: string; wif: string } | null>(null);

  // Coin positions computed once on mount
  const coinCount = window.innerWidth < 800 ? 5 : 12;
  const coins = useRef(
    Array.from({ length: coinCount }, (_, i) => ({
      left: Math.round((i / coinCount) * 100) + Math.round(Math.random() * 7),
      duration: 2 + Math.random() * 4,
      delay: Math.random() * 5,
      size: 14 + Math.round(Math.random() * 10),
    }))
  );

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const paramLang = queryParams.get("lang");
    if (paramLang === "pt" || paramLang === "pt-br") {
      setLang("pt");
    } else if (paramLang === "en") {
      setLang("en");
    } else {
      const userLang = navigator.language || "en";
      setLang(/^pt/i.test(userLang) ? "pt" : "en");
    }
  }, []);

  const playLottery = async () => {
    const rangeStart = "400000000000000000";
    const rangeEnd = "7fffffffffffffffff";
    const start = random32ByteRange(rangeStart, rangeEnd);
    setAttempts((n) => n + 1);

    const result = await findPrivateKey(start, TARGET_ADDRESS);

    if (result.success && result.privateKey) {
      setState(LotteryState.Success);
      const hex = result.privateKey.toString(16).padStart(64, "0");
      const wif = toWIF(hex);
      setFoundKey({ hex, wif });
      setResultMsg(null);
    } else {
      setState(LotteryState.Normal);
      setResultMsg(start);
    }
  };

  const handleRoll = () => {
    setState(LotteryState.Loading);
    setResultMsg(null);
    setTimeout(() => {
      playLottery();
    }, 10);
  };

  return (
    <>
      {/* ── Flying coins background ─────────── */}
      {coins.current.map((coin, i) => (
        <img
          key={i}
          src={bitcoinLogo}
          className="flyingbitcoin"
          style={{
            left: `${coin.left}%`,
            width: coin.size,
            height: coin.size,
            animationDuration: `${coin.duration}s`,
            animationDelay: `${coin.delay}s`,
          }}
        />
      ))}

      {/* ── Language switcher ───────────────── */}
      <div className="lang-switcher">
        <button
          className={`lang-btn${lang === "en" ? " active" : ""}`}
          onClick={() => setLang("en")}
        >
          🇺🇸 EN
        </button>
        <button
          className={`lang-btn${lang === "pt" ? " active" : ""}`}
          onClick={() => setLang("pt")}
        >
          🇧🇷 PT
        </button>
      </div>

      {/* ── Title with typewriter ───────────── */}
      <div className="typewriter">
        <h1>{content.title}</h1>
        <img src={bitcoinLogo} width={72} alt="Bitcoin" />
      </div>

      {/* ── Target address badge ────────────── */}
      <div className="target-badge">
        <span className="reward">₿ {REWARD}</span>
        <span className="dot" />
        <span className="address">{TARGET_ADDRESS}</span>
      </div>

      {/* ── Main card ──────────────────────── */}
      <div className="glass-card">

        {state === LotteryState.Normal && (
          <button id="roll-btn" className="roll-button" onClick={handleRoll}>
            {content["roll-btn"]}
          </button>
        )}

        {state === LotteryState.Loading && (
          <div className="loading-wrap">
            <div className="spinner" />
            <span className="loading-text">
              {lang === "pt" ? "Buscando chaves..." : "Searching keys..."}
            </span>
          </div>
        )}

        {state === LotteryState.Success && foundKey && (
          <div className="success-banner">
            <h2>🎉 {content["puzzle-state-success-title"]}</h2>
            <div className="result-box" style={{ marginTop: "1rem" }}>
              <span className="label">Private Key (hex)</span>
              <span className="value">{foundKey.hex}</span>
            </div>
            <div className="result-box" style={{ marginTop: "0.75rem" }}>
              <span className="label">WIF</span>
              <span className="value">{foundKey.wif}</span>
            </div>
          </div>
        )}

        {resultMsg !== null && state === LotteryState.Normal && (
          <div className="result-box">
            <span className="label">
              {lang === "pt" ? "Última tentativa — chave inicial" : "Last attempt — start key"}
            </span>
            <span className="value">{resultMsg}</span>
          </div>
        )}

        {attempts > 0 && state !== LotteryState.Success && (
          <div className="attempt-counter">
            <span>{lang === "pt" ? "Tentativas:" : "Attempts:"}</span>
            <strong>{attempts.toLocaleString()}</strong>
            <span>×</span>
            <span>50,000 keys</span>
            <span className="dot" style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />
            <strong>{(attempts * 50000).toLocaleString()}</strong>
            <span>{lang === "pt" ? "testadas" : "tested"}</span>
          </div>
        )}
      </div>

      {/* ── Info footer ───────────────────── */}
      <p
        className="puzzle-info"
        dangerouslySetInnerHTML={{ __html: content["puzzle-info"] }}
      />
    </>
  );
}

export default App;
