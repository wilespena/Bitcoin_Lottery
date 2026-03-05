import { useEffect, useState, useRef, useCallback } from "react";
import bitcoinLogo from "./assets/bitcoin.png";
import { random32ByteRange, findPrivateKey, findOneRandomBatch, toWIF } from "./bitcoin";

import englishContent from "./languages/english";
import ptContent from "./languages/portuguese";

enum LotteryState {
  Normal = "normal",
  Loading = "loading",
  Running = "running",   // infinite mode active
  Success = "success",
}

interface Puzzle {
  number: number;
  address: string;
  rangeStart: string;
  rangeEnd: string;
  reward: string;
  solved?: boolean;
}

const PUZZLES: Puzzle[] = [
  {
    number: 20,
    address: "1HsMJxNiV7TLxmoF6uJNkydxPFDog4NQum",
    rangeStart: "80000",
    rangeEnd: "fffff",
    reward: "Test only",
    solved: true,
  },
  {
    number: 71,
    address: "1PWo3JeB9jrGwfHDNpdGK54CRas7fsVzXU",
    rangeStart: "400000000000000000",
    rangeEnd: "7fffffffffffffffff",
    reward: "7.1 BTC",
  },
  {
    number: 72,
    address: "1JTK7s9YVYywfm5XUH7RNhHJH1LshCaRFR",
    rangeStart: "800000000000000000",
    rangeEnd: "ffffffffffffffffff",
    reward: "7.2 BTC",
  },
  {
    number: 73,
    address: "12VVRNPi4SJqUTsp6FmqDqY5sGosDtysn4",
    rangeStart: "1000000000000000000",
    rangeEnd: "1ffffffffffffffffff",
    reward: "7.3 BTC",
  },
  {
    number: 74,
    address: "1FWGcVDK3JGzCC3WtkYetULPszMaK2Jksv",
    rangeStart: "2000000000000000000",
    rangeEnd: "3ffffffffffffffffff",
    reward: "7.4 BTC",
  },
];

function App() {
  const [state, setState] = useState(LotteryState.Normal);
  const [lang, setLang] = useState<"en" | "pt">("en");
  const content = lang === "pt" ? ptContent : englishContent;
  const [selectedPuzzle, setSelectedPuzzle] = useState<Puzzle>(PUZZLES[1]);
  const [infiniteMode, setInfiniteMode] = useState(false);
  const [resultMsg, setResultMsg] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [keysChecked, setKeysChecked] = useState(0);
  const [foundKey, setFoundKey] = useState<{ hex: string; wif: string } | null>(null);

  // Ref to control stopping the infinite loop from outside
  const stopRef = useRef(false);

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

  const resetState = () => {
    setState(LotteryState.Normal);
    setResultMsg(null);
    setAttempts(0);
    setKeysChecked(0);
    setFoundKey(null);
  };

  const handleSelectPuzzle = (puzzle: Puzzle) => {
    stopRef.current = true; // stop any running infinite loop
    setSelectedPuzzle(puzzle);
    resetState();
  };

  const handleSuccess = (privateKey: bigint) => {
    setState(LotteryState.Success);
    stopRef.current = true;
    const hex = privateKey.toString(16).padStart(64, "0");
    const wif = toWIF(hex);
    setFoundKey({ hex, wif });
    setResultMsg(null);
  };

  // ── Normal mode: random start + 50k sequential ────────────────
  const playNormal = async () => {
    const start = random32ByteRange(selectedPuzzle.rangeStart, selectedPuzzle.rangeEnd);
    setAttempts((n) => n + 1);
    setKeysChecked((n) => n + 50000);

    const result = await findPrivateKey(start, selectedPuzzle.address);

    if (result.success && result.privateKey) {
      handleSuccess(result.privateKey);
    } else {
      setState(LotteryState.Normal);
      setResultMsg(start);
    }
  };

  // ── Infinite mode: 100% random batches via recursive setTimeout ──
  const runInfiniteLoop = useCallback(() => {
    if (stopRef.current) {
      setState(LotteryState.Normal);
      return;
    }

    const result = findOneRandomBatch(
      selectedPuzzle.address,
      selectedPuzzle.rangeStart,
      selectedPuzzle.rangeEnd,
      1000
    );

    setAttempts((n) => n + 1);
    setKeysChecked((n) => n + 1000);

    if (result.success && result.privateKey) {
      handleSuccess(result.privateKey);
      return;
    }

    // Yield to browser event loop so clicks (Stop) are processed
    setTimeout(runInfiniteLoop, 0);
  }, [selectedPuzzle]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleRoll = () => {
    if (infiniteMode) {
      stopRef.current = false;
      setState(LotteryState.Running);
      setResultMsg(null);
      setAttempts(0);
      setKeysChecked(0);
      setTimeout(runInfiniteLoop, 10);
    } else {
      setState(LotteryState.Loading);
      setResultMsg(null);
      setTimeout(() => {
        playNormal();
      }, 10);
    }
  };

  const handleStop = () => {
    stopRef.current = true;
    setState(LotteryState.Normal);
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

      {/* ── Puzzle selector (hidden on success to preserve result) ── */}
      {state !== LotteryState.Success && (
        <div className="puzzle-selector-wrap">
          <p className="puzzle-selector-label">
            {lang === "pt" ? "Selecione o puzzle:" : "Select puzzle:"}
          </p>
          <div className="puzzle-selector">
            {PUZZLES.map((puzzle) => (
              <button
                key={puzzle.number}
                className={`puzzle-btn${selectedPuzzle.number === puzzle.number ? " active" : ""}${puzzle.solved ? " solved" : ""}`}
                onClick={() => handleSelectPuzzle(puzzle)}
                title={puzzle.address}
              >
                <span className="puzzle-btn-number">#{puzzle.number}</span>
                <span className="puzzle-btn-reward">
                  {puzzle.solved
                    ? (lang === "pt" ? "Resolvido" : "Solved")
                    : puzzle.reward}
                </span>
              </button>
            ))}
          </div>

          {/* Selected puzzle info */}
          <div className="target-badge">
            <div className="target-badge-main">
              <span className="reward">
                {selectedPuzzle.solved
                  ? "🧪 " + (lang === "pt" ? "Modo Teste" : "Test Mode")
                  : `₿ ${selectedPuzzle.reward}`}
              </span>
              <span className="dot" />
              <span className="address">{selectedPuzzle.address}</span>
            </div>
            <div className="target-badge-range">
              <span className="range-label">
                {lang === "pt" ? "intervalo:" : "range:"}
              </span>
              <span className="range-value">
                {selectedPuzzle.rangeStart} → {selectedPuzzle.rangeEnd}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ── Main card ──────────────────────── */}
      <div className="glass-card">

        {/* Roll / Stop buttons + Infinite toggle (idle or not-found state) */}
        {(state === LotteryState.Normal) && (
          <div className="action-row">
            <button
              id="roll-btn"
              className={`roll-button${resultMsg !== null ? " roll-again" : ""}`}
              onClick={handleRoll}
            >
              {resultMsg !== null
                ? (lang === "pt" ? "🎲 Tentar novamente" : "🎲 Try again")
                : content["roll-btn"]}
            </button>

            {/* Infinite toggle */}
            <div className="infinite-toggle-wrap" title={lang === "pt" ? "Busca infinita 100% aleatória" : "Infinite 100% random search"}>
              <label className="infinite-toggle">
                <input
                  type="checkbox"
                  checked={infiniteMode}
                  onChange={(e) => setInfiniteMode(e.target.checked)}
                />
                <span className="toggle-track">
                  <span className="toggle-thumb" />
                </span>
              </label>
              <span className="infinite-label">
                {lang === "pt" ? "Infinito" : "Infinite"}
              </span>
            </div>
          </div>
        )}

        {/* Loading (single roll) */}
        {state === LotteryState.Loading && (
          <div className="loading-wrap">
            <div className="spinner" />
            <span className="loading-text">
              {lang === "pt" ? "Buscando chaves..." : "Searching keys..."}
            </span>
          </div>
        )}

        {/* Running (infinite mode) */}
        {state === LotteryState.Running && (
          <div className="infinite-running-wrap">
            <div className="infinite-pulse-ring" />
            <div className="infinite-running-info">
              <span className="infinite-running-label">
                {lang === "pt" ? "🔄 Busca infinita ativa" : "🔄 Infinite search active"}
              </span>
              <span className="infinite-running-sub">
                {lang === "pt"
                  ? "Testando chaves aleatórias continuamente..."
                  : "Testing random keys continuously..."}
              </span>
            </div>
            <button className="stop-button" onClick={handleStop}>
              ⏹ {lang === "pt" ? "Parar" : "Stop"}
            </button>
          </div>
        )}

        {/* ── NOT FOUND result (normal mode only) ─── */}
        {state === LotteryState.Normal && resultMsg !== null && (
          <div className="result-box" style={{ marginTop: "0.5rem" }}>
            <span className="label">
              {lang === "pt" ? "Ponto de partida testado" : "Starting key tested"}
            </span>
            <span className="value">{resultMsg}</span>
          </div>
        )}

        {/* ── SUCCESS state ──────────────────── */}
        {state === LotteryState.Success && foundKey && (
          <div className="success-banner">
            <div className="success-header">
              <span className="success-icon">🏆</span>
              <h2>{content["puzzle-state-success-title"]}</h2>
            </div>
            <div className="result-box" style={{ marginTop: "1rem" }}>
              <span className="label">Private Key (hex)</span>
              <span className="value">{foundKey.hex}</span>
            </div>
            <div className="result-box" style={{ marginTop: "0.75rem" }}>
              <span className="label">WIF — Import into your wallet</span>
              <span className="value">{foundKey.wif}</span>
            </div>
            <div className="success-warning">
              ⚠️{" "}
              {lang === "pt"
                ? "NÃO faça uma transação direta! Leia sobre Kangaroos antes de mover os BTC."
                : "DO NOT make a direct transaction! Read about Kangaroos before moving the BTC."}
              {" "}
              <a href="./education.html" target="_blank" rel="noreferrer">
                {lang === "pt" ? "Saiba mais →" : "Learn more →"}
              </a>
            </div>
          </div>
        )}

        {/* Attempt / keys counter */}
        {(attempts > 0) && state !== LotteryState.Success && (
          <div className="attempt-counter">
            <span>{lang === "pt" ? "Lotes:" : "Batches:"}</span>
            <strong>{attempts.toLocaleString()}</strong>
            <span className="counter-dot" />
            <span>{lang === "pt" ? "Chaves testadas:" : "Keys tested:"}</span>
            <strong>{keysChecked.toLocaleString()}</strong>
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
