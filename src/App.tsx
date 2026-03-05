import { useEffect, useState, useRef, useCallback } from "react";
import bitcoinLogo from "./assets/bitcoin.png";
import { random32ByteRange, findPrivateKey, findOneRandomBatch, toWIF } from "./bitcoin";

import englishContent from "./languages/english";
import ptContent from "./languages/portuguese";
import esContent from "./languages/spanish";

enum LotteryState {
  Normal = "normal",
  Loading = "loading",
  Running = "running",
  Success = "success",
}

type SearchMode = "manual" | "inf-random" | "inf-sequential";

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

const MIN_BATCH = 50000;
const MAX_BATCH = 10000000;

function App() {
  const [state, setState] = useState(LotteryState.Normal);
  const [lang, setLang] = useState<"en" | "pt" | "es">("en");
  const content = lang === "pt" ? ptContent : lang === "es" ? esContent : englishContent;
  const [selectedPuzzle, setSelectedPuzzle] = useState<Puzzle>(PUZZLES[1]);
  const [searchMode, setSearchMode] = useState<SearchMode>("manual");
  const [batchSize, setBatchSize] = useState(50000);
  const [batchInput, setBatchInput] = useState("50000");
  const [resultMsg, setResultMsg] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [keysChecked, setKeysChecked] = useState(0);
  const [keysPerSec, setKeysPerSec] = useState(0);
  const [foundKey, setFoundKey] = useState<{ hex: string; wif: string } | null>(null);

  const stopRef = useRef(false);
  const startTimeRef = useRef<number>(0);
  const keysCheckedRef = useRef<number>(0);

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
    } else if (paramLang === "es") {
      setLang("es");
    } else {
      const userLang = navigator.language || "en";
      if (/^pt/i.test(userLang)) setLang("pt");
      else if (/^es/i.test(userLang)) setLang("es");
      else setLang("en");
    }
  }, []);

  const resetState = () => {
    setState(LotteryState.Normal);
    setResultMsg(null);
    setAttempts(0);
    setKeysChecked(0);
    setKeysPerSec(0);
    keysCheckedRef.current = 0;
  };

  const handleSelectPuzzle = (puzzle: Puzzle) => {
    stopRef.current = true;
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

  const updateSpeed = (totalKeys: number) => {
    const elapsed = (Date.now() - startTimeRef.current) / 1000;
    if (elapsed > 0) setKeysPerSec(Math.round(totalKeys / elapsed));
  };

  // ── Manual: random start + 50k sequential ────────────────────
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

  // ── Infinite random: 100% random per key ──────────────────────
  const runInfiniteRandom = useCallback(() => {
    if (stopRef.current) { setState(LotteryState.Normal); return; }

    const result = findOneRandomBatch(
      selectedPuzzle.address,
      selectedPuzzle.rangeStart,
      selectedPuzzle.rangeEnd,
      1000
    );

    keysCheckedRef.current += 1000;
    setAttempts((n) => n + 1);
    setKeysChecked(keysCheckedRef.current);
    updateSpeed(keysCheckedRef.current);

    if (result.success && result.privateKey) { handleSuccess(result.privateKey); return; }
    setTimeout(runInfiniteRandom, 0);
  }, [selectedPuzzle]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Infinite sequential: random start + N sequential per batch ─
  const runInfiniteSequential = useCallback(async () => {
    if (stopRef.current) { setState(LotteryState.Normal); return; }

    const start = random32ByteRange(selectedPuzzle.rangeStart, selectedPuzzle.rangeEnd);
    const result = await findPrivateKey(start, selectedPuzzle.address, batchSize);

    keysCheckedRef.current += batchSize;
    setAttempts((n) => n + 1);
    setKeysChecked(keysCheckedRef.current);
    updateSpeed(keysCheckedRef.current);

    if (result.success && result.privateKey) { handleSuccess(result.privateKey); return; }

    // Use setTimeout to yield to browser between batches
    setTimeout(() => { runInfiniteSequential(); }, 0);
  }, [selectedPuzzle, batchSize]); // eslint-disable-line react-hooks/exhaustive-deps

  const startInfiniteLoop = () => {
    stopRef.current = false;
    startTimeRef.current = Date.now();
    keysCheckedRef.current = 0;
    setState(LotteryState.Running);
    setResultMsg(null);
    setAttempts(0);
    setKeysChecked(0);
    setKeysPerSec(0);
    if (searchMode === "inf-random") {
      setTimeout(runInfiniteRandom, 10);
    } else {
      setTimeout(() => { runInfiniteSequential(); }, 10);
    }
  };

  const handleRoll = () => {
    if (searchMode === "manual") {
      setState(LotteryState.Loading);
      setResultMsg(null);
      setTimeout(() => { playNormal(); }, 10);
    } else {
      startInfiniteLoop();
    }
  };

  const handleStop = () => {
    stopRef.current = true;
    setState(LotteryState.Normal);
  };

  const handleBatchInput = (val: string) => {
    setBatchInput(val);
    const n = parseInt(val, 10);
    if (!isNaN(n) && n >= MIN_BATCH && n <= MAX_BATCH) {
      setBatchSize(n);
    }
  };

  const isInfinite = searchMode !== "manual";

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
        <button className={`lang-btn${lang === "en" ? " active" : ""}`} onClick={() => setLang("en")}>🇺🇸 EN</button>
        <button className={`lang-btn${lang === "pt" ? " active" : ""}`} onClick={() => setLang("pt")}>🇧🇷 PT</button>
        <button className={`lang-btn${lang === "es" ? " active" : ""}`} onClick={() => setLang("es")}>🇪🇸 ES</button>
      </div>

      {/* ── Title ───────────────────────────── */}
      <div className="typewriter">
        <h1>{content.title}</h1>
        <img src={bitcoinLogo} width={72} alt="Bitcoin" />
      </div>

      {/* ── Puzzle selector (hidden on success) ── */}
      {state !== LotteryState.Success && (
        <div className="puzzle-selector-wrap">
          <p className="puzzle-selector-label">
            {lang === "pt" ? "Selecione o puzzle:" : lang === "es" ? "Selecciona el puzzle:" : "Select puzzle:"}
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
                    ? (lang === "pt" ? "Resolvido" : lang === "es" ? "Resuelto" : "Solved")
                    : puzzle.reward}
                </span>
              </button>
            ))}
          </div>

          <div className="target-badge">
            <div className="target-badge-main">
              <span className="reward">
                {selectedPuzzle.solved
                  ? "🧪 " + (lang === "pt" ? "Modo Teste" : lang === "es" ? "Modo Prueba" : "Test Mode")
                  : `₿ ${selectedPuzzle.reward}`}
              </span>
              <span className="dot" />
              <span className="address">{selectedPuzzle.address}</span>
            </div>
            <div className="target-badge-range">
              <span className="range-label">{lang === "pt" ? "intervalo:" : lang === "es" ? "rango:" : "range:"}</span>
              <span className="range-value">
                {selectedPuzzle.rangeStart} → {selectedPuzzle.rangeEnd}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ── Main card ──────────────────────── */}
      <div className="glass-card">

        {/* ── Mode selector (always visible unless success/running) ── */}
        {state !== LotteryState.Success && state !== LotteryState.Running && (
          <div className="mode-selector">
            <button
              className={`mode-btn${searchMode === "manual" ? " active" : ""}`}
              onClick={() => setSearchMode("manual")}
            >
              <span className="mode-icon">🎲</span>
              <span className="mode-label">{lang === "pt" ? "Manual" : "Manual"}</span>
              <span className="mode-desc">{lang === "pt" ? "50k por roll" : "50k per roll"}</span>
            </button>
            <button
              className={`mode-btn${searchMode === "inf-random" ? " active" : ""}`}
              onClick={() => setSearchMode("inf-random")}
            >
              <span className="mode-icon">🎰</span>
              <span className="mode-label">{lang === "pt" ? "∞ Aleatório" : "∞ Random"}</span>
              <span className="mode-desc">{lang === "pt" ? "100% aleatório" : "100% random keys"}</span>
            </button>
            <button
              className={`mode-btn${searchMode === "inf-sequential" ? " active" : ""}`}
              onClick={() => setSearchMode("inf-sequential")}
            >
              <span className="mode-icon">🔁</span>
              <span className="mode-label">{lang === "pt" ? "∞ Sequencial" : "∞ Sequential"}</span>
              <span className="mode-desc">{lang === "pt" ? "random + sequencial" : "random + sequential"}</span>
            </button>
          </div>
        )}

        {/* ── Batch size input (only sequential mode) ── */}
        {searchMode === "inf-sequential" && state !== LotteryState.Running && state !== LotteryState.Success && (
          <div className="batch-size-wrap">
            <label className="batch-size-label" htmlFor="batch-size-input">
              {lang === "pt" ? "Chaves por lote:" : lang === "es" ? "Claves por lote:" : "Keys per batch:"}
            </label>
            <input
              id="batch-size-input"
              className="batch-size-input"
              type="number"
              min={MIN_BATCH}
              max={MAX_BATCH}
              step={50000}
              value={batchInput}
              onChange={(e) => handleBatchInput(e.target.value)}
              onBlur={() => {
                const clamped = Math.max(MIN_BATCH, Math.min(MAX_BATCH, batchSize));
                setBatchSize(clamped);
                setBatchInput(String(clamped));
              }}
            />
            <span className="batch-size-note">
              {lang === "pt" ? `mín. ${MIN_BATCH.toLocaleString()}` : lang === "es" ? `mín. ${MIN_BATCH.toLocaleString()}` : `min ${MIN_BATCH.toLocaleString()}`}
            </span>
          </div>
        )}

        {/* ── Roll button ── */}
        {state === LotteryState.Normal && (
          <div className="action-row">
            <button
              id="roll-btn"
              className={`roll-button${resultMsg !== null ? " roll-again" : ""}${isInfinite ? " infinite-roll" : ""}`}
              onClick={handleRoll}
            >
              {resultMsg !== null && !isInfinite
                ? (lang === "pt" ? "🎲 Tentar novamente" : lang === "es" ? "🎲 Intentar de nuevo" : "🎲 Try again")
                : isInfinite
                  ? (lang === "pt" ? "▶ Iniciar busca infinita" : lang === "es" ? "▶ Iniciar búsqueda infinita" : "▶ Start infinite search")
                  : content["roll-btn"]}
            </button>
          </div>
        )}

        {/* ── Loading (manual single roll) ── */}
        {state === LotteryState.Loading && (
          <div className="loading-wrap">
            <div className="spinner" />
            <span className="loading-text">
              {lang === "pt" ? "Buscando chaves..." : lang === "es" ? "Buscando claves..." : "Searching keys..."}
            </span>
          </div>
        )}

        {/* ── Running (infinite mode) ── */}
        {state === LotteryState.Running && (
          <div className="infinite-running-wrap">
            <div className="infinite-pulse-ring" />
            <div className="infinite-running-info">
              <span className="infinite-running-label">
                {searchMode === "inf-random"
                  ? (lang === "pt" ? "🎰 Busca aleatória infinita" : lang === "es" ? "🎰 Búsqueda aleatoria infinita" : "🎰 Infinite random search")
                  : (lang === "pt" ? "🔁 Busca sequencial infinita" : lang === "es" ? "🔁 Búsqueda secuencial infinita" : "🔁 Infinite sequential search")}
              </span>
              <span className="infinite-running-sub">
                {searchMode === "inf-sequential"
                  ? (lang === "pt"
                    ? `Gerando início aleatório + ${batchSize.toLocaleString()} sequenciais por lote...`
                    : lang === "es"
                      ? `Inicio aleatorio + ${batchSize.toLocaleString()} secuenciales por lote...`
                      : `Random start + ${batchSize.toLocaleString()} sequential keys per batch...`)
                  : (lang === "pt"
                    ? "Testando chaves aleatórias continuamente..."
                    : lang === "es"
                      ? "Probando claves aleatorias continuamente..."
                      : "Testing random keys continuously...")}
              </span>
            </div>
            <button className="stop-button" onClick={handleStop}>
              ⏹ {lang === "pt" ? "Parar" : lang === "es" ? "Detener" : "Stop"}
            </button>
          </div>
        )}

        {/* ── NOT FOUND result ── */}
        {state === LotteryState.Normal && resultMsg !== null && (
          <div className="result-box" style={{ marginTop: "0.5rem" }}>
            <span className="label">
              {lang === "pt" ? "Ponto de partida testado" : lang === "es" ? "Punto de inicio probado" : "Starting key tested"}
            </span>
            <span className="value">{resultMsg}</span>
          </div>
        )}

        {/* ── SUCCESS ── */}
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
                : lang === "es"
                  ? "¡NO hagas una transacción directa! Lee sobre Kangaroos antes de mover los BTC."
                  : "DO NOT make a direct transaction! Read about Kangaroos before moving the BTC."}
              {" "}
              <a href="./education.html" target="_blank" rel="noreferrer">
                {lang === "pt" ? "Saiba mais →" : lang === "es" ? "Saber más →" : "Learn more →"}
              </a>
            </div>
          </div>
        )}

        {/* ── Counter ── */}
        {attempts > 0 && state !== LotteryState.Success && (
          <div className="attempt-counter">
            {state === LotteryState.Running && keysPerSec > 0 ? (
              <>
                <span>{lang === "pt" ? "Velocidade:" : lang === "es" ? "Velocidad:" : "Speed:"}</span>
                <strong>{keysPerSec.toLocaleString()} keys/s</strong>
                <span className="counter-dot" />
              </>
            ) : null}
            <span>{lang === "pt" ? "Chaves testadas:" : lang === "es" ? "Claves probadas:" : "Keys tested:"}</span>
            <strong>{keysChecked.toLocaleString()}</strong>
          </div>
        )}
      </div>

      {/* ── Info footer ── */}
      <p
        className="puzzle-info"
        dangerouslySetInnerHTML={{ __html: content["puzzle-info"] }}
      />
    </>
  );
}

export default App;
