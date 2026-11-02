import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import bitcoinLogo from "./assets/bitcoin.png";
import {
  random32ByteRange,
  findPrivateKey,
  findOneRandomBatch,
  toWIF,
  isValidBitcoinAddress,
  SECP256K1_ORDER,
} from "./bitcoin";

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
  const [lang, setLang] = useState<"en" | "pt" | "es">(() => {
    const stored = localStorage.getItem("app_lang");
    if (stored === "en" || stored === "pt" || stored === "es") return stored;
    return "en";
  });
  const content =
    lang === "pt" ? ptContent : lang === "es" ? esContent : englishContent;

  // Real-time balances from mempool
  const [liveBalances, setLiveBalances] = useState<Record<string, string>>({});
  const [selectedPuzzle, setSelectedPuzzle] = useState<Puzzle>(PUZZLES[1]);

  const [searchMode, setSearchMode] = useState<SearchMode>("manual");
  const [batchSize, setBatchSize] = useState(50000);
  const [batchInput, setBatchInput] = useState("50000");
  const [resultMsg, setResultMsg] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [keysChecked, setKeysChecked] = useState(0);
  const [keysPerSec, setKeysPerSec] = useState(0);
  const [foundKey, setFoundKey] = useState<{ hex: string; wif: string } | null>(
    null
  );
  const [recentKeys, setRecentKeys] = useState<string[]>([]);

  // Custom Wallet support
  const [isCustomPuzzle, setIsCustomPuzzle] = useState(false);
  const [customAddressSaved, setCustomAddressSaved] = useState("");
  const [customAddressBalance, setCustomAddressBalance] = useState<
    string | null
  >(null);
  const [editingAddress, setEditingAddress] = useState(false);
  const [addressInput, setAddressInput] = useState("");
  const [addressError, setAddressError] = useState<string | null>(null);
  const [isFetchingBalance, setIsFetchingBalance] = useState(false);

  const [customRange, setCustomRange] = useState<{
    start: string;
    end: string;
  } | null>(null);
  const [editingRange, setEditingRange] = useState(false);
  const [rangeInputStart, setRangeInputStart] = useState("");
  const [rangeInputEnd, setRangeInputEnd] = useState("");
  const [rangeError, setRangeError] = useState<string | null>(null);

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
    const params = new URLSearchParams(window.location.search);
    const paramLang = params.get("lang");

    if (paramLang === "pt" || paramLang === "en" || paramLang === "es") {
      setLang(paramLang);
    } else if (!localStorage.getItem("app_lang")) {
      const userLang = navigator.language || "en";
      if (/^pt/i.test(userLang)) setLang("pt");
      else if (/^es/i.test(userLang)) setLang("es");
      else setLang("en");
    }

    // Fetch live balances for unsolved puzzles
    const fetchBalances = async () => {
      const balances: Record<string, string> = {};
      for (const p of PUZZLES) {
        if (p.number === 20 || p.solved) continue;
        try {
          const res = await fetch(
            `https://mempool.space/api/address/${encodeURIComponent(p.address)}`,
            { referrerPolicy: "no-referrer" }
          );
          if (res.ok) {
            const data = await res.json();
            if (
              typeof data?.chain_stats?.funded_txo_sum === "number" &&
              typeof data?.chain_stats?.spent_txo_sum === "number"
            ) {
              const totalSats =
                data.chain_stats.funded_txo_sum -
                data.chain_stats.spent_txo_sum;

              if (totalSats === 0) {
                balances[p.address] = "0 BTC (Solved)";
              } else {
                balances[p.address] = satsToDisplay(totalSats);
              }
            }
          }
        } catch {
          // Keep static fallback reward if offline
        }
      }
      setLiveBalances(balances);
    };

    fetchBalances();
  }, []);

  const resetState = () => {
    setState(LotteryState.Normal);
    setResultMsg(null);
    setAttempts(0);
    setKeysChecked(0);
    setKeysPerSec(0);
    setRecentKeys([]);
    keysCheckedRef.current = 0;
  };

  // Active range: custom if set, else puzzle default
  const activeRange = useMemo(
    () =>
      customRange
        ? { rangeStart: customRange.start, rangeEnd: customRange.end }
        : isCustomPuzzle
          ? { rangeStart: "", rangeEnd: "" }
          : {
              rangeStart: selectedPuzzle.rangeStart,
              rangeEnd: selectedPuzzle.rangeEnd,
            },
    [
      customRange,
      isCustomPuzzle,
      selectedPuzzle.rangeStart,
      selectedPuzzle.rangeEnd,
    ]
  );

  const openRangeEditor = () => {
    setRangeInputStart(activeRange.rangeStart);
    setRangeInputEnd(activeRange.rangeEnd);
    setRangeError(null);
    setEditingRange(true);
  };

  const openAddressEditor = () => {
    setAddressInput(customAddressSaved);
    setAddressError(null);
    setEditingAddress(true);
  };

  const applyCustomAddress = async () => {
    const addr = addressInput.trim();
    if (!addr || !isValidBitcoinAddress(addr)) {
      setAddressError(
        lang === "pt"
          ? "Insira um endereço Bitcoin válido."
          : lang === "es"
            ? "Ingresa una dirección Bitcoin válida."
            : "Enter a valid Bitcoin address."
      );
      return;
    }

    setIsFetchingBalance(true);
    setAddressError(null);
    try {
      const res = await fetch(
        `https://mempool.space/api/address/${encodeURIComponent(addr)}`,
        { referrerPolicy: "no-referrer" }
      );
      if (!res.ok) {
        throw new Error("Invalid address or network error");
      }
      const data = await res.json();
      if (
        typeof data?.chain_stats?.funded_txo_sum !== "number" ||
        typeof data?.chain_stats?.spent_txo_sum !== "number"
      ) {
        throw new Error("Unexpected response format");
      }
      const totalSats =
        data.chain_stats.funded_txo_sum - data.chain_stats.spent_txo_sum;
      setCustomAddressBalance(satsToDisplay(totalSats));
      setCustomAddressSaved(addr);
      setEditingAddress(false);
      resetState();
    } catch {
      setAddressError(
        lang === "pt"
          ? "Endereço inválido ou erro de rede."
          : lang === "es"
            ? "Dirección inválida o error de red."
            : "Invalid address or network error."
      );
    } finally {
      setIsFetchingBalance(false);
    }
  };

  const applyCustomRange = () => {
    const s = rangeInputStart.trim().toLowerCase().replace(/^0x/, "");
    const e = rangeInputEnd.trim().toLowerCase().replace(/^0x/, "");
    if (
      !s ||
      !e ||
      s.length > 64 ||
      e.length > 64 ||
      !/^[0-9a-f]+$/.test(s) ||
      !/^[0-9a-f]+$/.test(e)
    ) {
      setRangeError(
        lang === "pt"
          ? "Valores hexadecimais inválidos (1 a 64 caracteres)."
          : lang === "es"
            ? "Valores hexadecimales inválidos (1 a 64 caracteres)."
            : "Invalid hex values (1 to 64 chars)."
      );
      return;
    }
    const bs = BigInt("0x" + s);
    const be = BigInt("0x" + e);
    if (bs >= be) {
      setRangeError(
        lang === "pt"
          ? "O início deve ser menor que o fim."
          : lang === "es"
            ? "El inicio debe ser menor que el fin."
            : "Start must be less than end."
      );
      return;
    }
    if (bs < 1n || be >= SECP256K1_ORDER) {
      setRangeError(
        lang === "pt"
          ? "O intervalo deve ficar entre 1 e n − 1 (ordem da curva secp256k1)."
          : lang === "es"
            ? "El rango debe estar entre 1 y n − 1 (orden de la curva secp256k1)."
            : "Range must stay between 1 and n − 1 (secp256k1 curve order)."
      );
      return;
    }
    setCustomRange({ start: s, end: e });
    setEditingRange(false);
    setRangeError(null);
    resetState();
  };

  const resetRange = () => {
    setCustomRange(null);
    setEditingRange(false);
    setRangeError(null);
    resetState();
  };

  const handleSelectPuzzle = (val: string | Puzzle) => {
    stopRef.current = true;
    if (val === "custom") {
      setIsCustomPuzzle(true);
      setCustomAddressSaved("");
      setCustomAddressBalance(null);
      setCustomRange(null);
      setEditingRange(false);
      setRangeError(null);
      setEditingAddress(false);
      setAddressError(null);
    } else {
      setIsCustomPuzzle(false);
      setSelectedPuzzle(val as Puzzle);
      setCustomRange(null);
      setEditingRange(false);
      setRangeError(null);
      setEditingAddress(false);
      setAddressError(null);
    }
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

  const BTC_TO_SAT = 100_000_000;
  function satsToDisplay(sats: number): string {
    return (sats / BTC_TO_SAT).toFixed(8).replace(/\.?0+$/, "") + " BTC";
  }

  const updateSpeed = (totalKeys: number) => {
    const elapsed = (Date.now() - startTimeRef.current) / 1000;
    if (elapsed > 0) setKeysPerSec(Math.round(totalKeys / elapsed));
  };

  const activeAddress = isCustomPuzzle
    ? customAddressSaved
    : selectedPuzzle.address;

  // ── Manual: random start + 50k sequential ────────────────────
  const playNormal = async () => {
    const start = random32ByteRange(
      activeRange.rangeStart,
      activeRange.rangeEnd
    );
    setAttempts((n) => n + 1);
    setKeysChecked((n) => n + 50000);
    const result = await findPrivateKey(
      start,
      activeAddress,
      50000,
      activeRange.rangeEnd
    );
    if (result.success && result.privateKey) {
      handleSuccess(result.privateKey);
    } else {
      setState(LotteryState.Normal);
      setResultMsg(start);
    }
  };

  // ── Infinite random: 100% random per key ──────────────────────
  const runInfiniteRandom = useCallback(() => {
    if (stopRef.current) {
      setState(LotteryState.Normal);
      return;
    }

    const result = findOneRandomBatch(
      activeAddress,
      activeRange.rangeStart,
      activeRange.rangeEnd,
      1000
    );

    if (result.triedKey) {
      setRecentKeys((prev) => [result.triedKey!, ...prev].slice(0, 5));
    }

    keysCheckedRef.current += 1000;
    setAttempts((n) => n + 1);
    setKeysChecked(keysCheckedRef.current);
    updateSpeed(keysCheckedRef.current);

    if (result.success && result.privateKey) {
      handleSuccess(result.privateKey);
      return;
    }
    setTimeout(runInfiniteRandom, 0);
  }, [activeAddress, activeRange]);

  // ── Infinite sequential: random start + N sequential per batch ─
  const runInfiniteSequential = useCallback(async () => {
    if (stopRef.current) {
      setState(LotteryState.Normal);
      return;
    }

    const start = random32ByteRange(
      activeRange.rangeStart,
      activeRange.rangeEnd
    );
    setRecentKeys((prev) => [start, ...prev].slice(0, 5));
    const result = await findPrivateKey(
      start,
      activeAddress,
      batchSize,
      activeRange.rangeEnd
    );

    keysCheckedRef.current += batchSize;
    setAttempts((n) => n + 1);
    setKeysChecked(keysCheckedRef.current);
    updateSpeed(keysCheckedRef.current);

    if (result.success && result.privateKey) {
      handleSuccess(result.privateKey);
      return;
    }

    setTimeout(() => {
      runInfiniteSequential();
    }, 0);
  }, [activeAddress, activeRange, batchSize]);

  const startInfiniteLoop = () => {
    stopRef.current = false;
    startTimeRef.current = Date.now();
    keysCheckedRef.current = 0;
    setState(LotteryState.Running);
    setResultMsg(null);
    setAttempts(0);
    setKeysChecked(0);
    setRecentKeys([]);
    setKeysPerSec(0);
    if (searchMode === "inf-random") {
      setTimeout(runInfiniteRandom, 10);
    } else {
      setTimeout(() => {
        runInfiniteSequential();
      }, 10);
    }
  };

  const handleRoll = () => {
    if (isCustomPuzzle && (!customRange || !customAddressSaved.trim())) {
      setResultMsg(
        lang === "pt"
          ? "Configure o endereço e os limites customizados primeiro."
          : lang === "es"
            ? "Configura la dirección y los límites primero."
            : "Set custom address and range first."
      );
      return;
    }

    if (searchMode === "manual") {
      setState(LotteryState.Loading);
      setResultMsg(null);
      setTimeout(() => {
        playNormal();
      }, 10);
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

  const openRelativePage = (page: string) => {
    const base = window.location.href
      .split("?")[0]
      .replace(/\/?(index\.html)?$/, "");
    window.open(`${base}/${page}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* ── Flying coins background ─────────── */}
      {coins.current.map((coin, i) => (
        <img
          key={i}
          src={bitcoinLogo}
          className="flyingbitcoin"
          alt=""
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
          onClick={() => {
            setLang("en");
            localStorage.setItem("app_lang", "en");
          }}
        >
          🇺🇸 EN
        </button>
        <button
          className={`lang-btn ${lang === "pt" ? "active" : ""}`}
          onClick={() => {
            setLang("pt");
            localStorage.setItem("app_lang", "pt");
          }}
        >
          🇧🇷 PT
        </button>
        <button
          className={`lang-btn ${lang === "es" ? "active" : ""}`}
          onClick={() => {
            setLang("es");
            localStorage.setItem("app_lang", "es");
          }}
        >
          🇪🇸 ES
        </button>
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
            {lang === "pt"
              ? "Selecione o puzzle:"
              : lang === "es"
                ? "Selecciona el puzzle:"
                : "Select puzzle:"}
          </p>
          <div className="puzzle-selector">
            {PUZZLES.map((p) => {
              const isActive =
                !isCustomPuzzle && selectedPuzzle.number === p.number;
              return (
                <button
                  key={p.number}
                  className={`puzzle-btn${isActive ? " active" : ""}`}
                  onClick={() => handleSelectPuzzle(p)}
                >
                  <span className="puzzle-btn-number">#{p.number}</span>
                </button>
              );
            })}
            <button
              className={`puzzle-btn custom-btn${
                isCustomPuzzle ? " active" : ""
              }`}
              onClick={() => handleSelectPuzzle("custom")}
            >
              <span className="puzzle-btn-number">🔨 Custom</span>
            </button>
          </div>

          <div className="target-badge">
            <div className="target-badge-main">
              {isCustomPuzzle ? (
                customAddressSaved ? (
                  <>
                    <span className="reward">
                      {`\u20bf ${customAddressBalance}`}
                    </span>
                    <span className="dot" />
                    <span className="address">{customAddressSaved}</span>
                    {!editingAddress && (
                      <button
                        className="range-edit-btn"
                        onClick={openAddressEditor}
                        title={
                          lang === "pt"
                            ? "Editar endereço"
                            : lang === "es"
                              ? "Editar dirección"
                              : "Edit address"
                        }
                      >
                        ⚙️
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    <span className="reward" style={{ color: "#ff4444" }}>
                      ADDRESS:
                    </span>
                    <span className="range-value range-custom">
                      <span style={{ color: "#ff4444" }}>
                        {lang === "pt"
                          ? "[Obrigatório]"
                          : lang === "es"
                            ? "[Requerido]"
                            : "[Required]"}
                      </span>
                    </span>
                    {!editingAddress && (
                      <button
                        className="range-edit-btn"
                        onClick={openAddressEditor}
                        title={
                          lang === "pt"
                            ? "Adicionar endereço"
                            : lang === "es"
                              ? "Añadir dirección"
                              : "Add address"
                        }
                      >
                        ⚙️
                      </button>
                    )}
                  </>
                )
              ) : (
                <>
                  <span className="reward">
                    {selectedPuzzle.solved
                      ? "🧪 " +
                        (lang === "pt"
                          ? "Modo Teste"
                          : lang === "es"
                            ? "Modo Prueba"
                            : "Test Mode")
                      : `\u20bf ${
                          liveBalances[selectedPuzzle.address] ||
                          selectedPuzzle.reward
                        }`}
                  </span>
                  <span className="dot" />
                  <span className="address">{selectedPuzzle.address}</span>
                </>
              )}
            </div>
            <div className="target-badge-range">
              <span className="range-label">
                {lang === "pt"
                  ? "intervalo:"
                  : lang === "es"
                    ? "rango:"
                    : "range:"}
              </span>
              <span
                className={`range-value${customRange ? " range-custom" : ""}`}
              >
                {isCustomPuzzle && !customRange ? (
                  <span style={{ color: "#ff4444" }}>
                    {lang === "pt"
                      ? "[Obrigatório]"
                      : lang === "es"
                        ? "[Requerido]"
                        : "[Required]"}
                  </span>
                ) : (
                  `${activeRange.rangeStart} → ${activeRange.rangeEnd}`
                )}
              </span>
              {!editingRange && (
                <button
                  className="range-edit-btn"
                  onClick={openRangeEditor}
                  title={
                    lang === "pt"
                      ? "Editar intervalo"
                      : lang === "es"
                        ? "Editar rango"
                        : "Edit range"
                  }
                >
                  ⚙️
                </button>
              )}
              {customRange && !editingRange && (
                <button
                  className="range-reset-btn"
                  onClick={resetRange}
                  title={
                    lang === "pt"
                      ? "Restaurar padrão"
                      : lang === "es"
                        ? "Restaurar por defecto"
                        : "Reset to default"
                  }
                >
                  ↺
                </button>
              )}
            </div>
          </div>

          {isCustomPuzzle && editingAddress && (
            <div className="range-editor">
              <div className="range-editor-row">
                <label className="range-editor-label">Address</label>
                <input
                  className="range-editor-input"
                  style={{ width: "100%" }}
                  value={addressInput}
                  onChange={(e) => {
                    setAddressInput(e.target.value);
                    setAddressError(null);
                  }}
                  spellCheck={false}
                  placeholder={
                    lang === "pt"
                      ? "Cole o endereço..."
                      : lang === "es"
                        ? "Pega la dirección..."
                        : "Paste address..."
                  }
                />
              </div>
              {addressError && <p className="range-error">{addressError}</p>}
              <div className="range-editor-actions">
                <button
                  className="range-apply-btn"
                  onClick={applyCustomAddress}
                  disabled={isFetchingBalance}
                >
                  {isFetchingBalance
                    ? lang === "pt" || lang === "es"
                      ? "Buscando..."
                      : "Fetching..."
                    : lang === "pt" || lang === "es"
                      ? "Aplicar"
                      : "Apply"}
                </button>
                <button
                  className="range-cancel-btn"
                  onClick={() => {
                    setEditingAddress(false);
                    setAddressError(null);
                  }}
                  disabled={isFetchingBalance}
                >
                  {lang === "pt" || lang === "es" ? "Cancelar" : "Cancel"}
                </button>
              </div>
            </div>
          )}

          {editingRange && (
            <div className="range-editor">
              <div className="range-editor-row">
                <label className="range-editor-label">Start (hex)</label>
                <input
                  className="range-editor-input"
                  value={rangeInputStart}
                  onChange={(e) => {
                    setRangeInputStart(e.target.value);
                    setRangeError(null);
                  }}
                  spellCheck={false}
                  placeholder={selectedPuzzle.rangeStart}
                />
              </div>
              <div className="range-editor-row">
                <label className="range-editor-label">End (hex)</label>
                <input
                  className="range-editor-input"
                  value={rangeInputEnd}
                  onChange={(e) => {
                    setRangeInputEnd(e.target.value);
                    setRangeError(null);
                  }}
                  spellCheck={false}
                  placeholder={selectedPuzzle.rangeEnd}
                />
              </div>
              {rangeError && <p className="range-error">{rangeError}</p>}
              <div className="range-editor-actions">
                <button className="range-apply-btn" onClick={applyCustomRange}>
                  {lang === "pt" || lang === "es" ? "Aplicar" : "Apply"}
                </button>
                <button
                  className="range-cancel-btn"
                  onClick={() => {
                    setEditingRange(false);
                    setRangeError(null);
                  }}
                >
                  {lang === "pt" || lang === "es" ? "Cancelar" : "Cancel"}
                </button>
                {customRange && (
                  <button className="range-reset-btn-sm" onClick={resetRange}>
                    {lang === "pt"
                      ? "Restaurar padrão"
                      : lang === "es"
                        ? "Restaurar"
                        : "Reset to default"}
                  </button>
                )}
              </div>
            </div>
          )}
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
              <span className="mode-label">Manual</span>
              <span className="mode-desc">
                {lang === "pt"
                  ? "50k por roll"
                  : lang === "es"
                    ? "50k por intento"
                    : "50k per roll"}
              </span>
            </button>
            <button
              className={`mode-btn${
                searchMode === "inf-random" ? " active" : ""
              }`}
              onClick={() => setSearchMode("inf-random")}
            >
              <span className="mode-icon">🎰</span>
              <span className="mode-label">
                {lang === "pt"
                  ? "∞ Aleatório"
                  : lang === "es"
                    ? "∞ Aleatorio"
                    : "∞ Random"}
              </span>
              <span className="mode-desc">
                {lang === "pt"
                  ? "100% aleatório"
                  : lang === "es"
                    ? "100% aleatorio"
                    : "100% random keys"}
              </span>
            </button>
            <button
              className={`mode-btn${
                searchMode === "inf-sequential" ? " active" : ""
              }`}
              onClick={() => setSearchMode("inf-sequential")}
            >
              <span className="mode-icon">🔁</span>
              <span className="mode-label">
                {lang === "pt"
                  ? "∞ Sequencial"
                  : lang === "es"
                    ? "∞ Secuencial"
                    : "∞ Sequential"}
              </span>
              <span className="mode-desc">
                {lang === "pt"
                  ? "random + sequencial"
                  : lang === "es"
                    ? "random + secuencial"
                    : "random + sequential"}
              </span>
            </button>
          </div>
        )}

        {/* ── Batch size input (only sequential mode) ── */}
        {searchMode === "inf-sequential" &&
          state !== LotteryState.Running &&
          state !== LotteryState.Success && (
            <div className="batch-size-wrap">
              <label className="batch-size-label" htmlFor="batch-size-input">
                {lang === "pt"
                  ? "Chaves por lote:"
                  : lang === "es"
                    ? "Claves por lote:"
                    : "Keys per batch:"}
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
                  const clamped = Math.max(
                    MIN_BATCH,
                    Math.min(MAX_BATCH, batchSize)
                  );
                  setBatchSize(clamped);
                  setBatchInput(String(clamped));
                }}
              />
              <span className="batch-size-note">
                {lang === "pt" || lang === "es"
                  ? `mín. ${MIN_BATCH.toLocaleString()}`
                  : `min ${MIN_BATCH.toLocaleString()}`}
              </span>
            </div>
          )}

        {/* ── Roll button ── */}
        {state === LotteryState.Normal &&
          (!isCustomPuzzle || customAddressSaved) && (
            <div className="action-row">
              <button
                id="roll-btn"
                className={`roll-button${
                  resultMsg !== null ? " roll-again" : ""
                }${isInfinite ? " infinite-roll" : ""}`}
                onClick={handleRoll}
              >
                {resultMsg !== null && !isInfinite
                  ? lang === "pt"
                    ? "🎲 Tentar novamente"
                    : lang === "es"
                      ? "🎲 Intentar de nuevo"
                      : "🎲 Try again"
                  : isInfinite
                    ? lang === "pt"
                      ? "▶ Iniciar busca infinita"
                      : lang === "es"
                        ? "▶ Iniciar búsqueda infinita"
                        : "▶ Start infinite search"
                    : content["roll-btn"]}
              </button>
            </div>
          )}

        {/* ── Loading (manual single roll) ── */}
        {state === LotteryState.Loading && (
          <div className="loading-wrap">
            <div className="spinner" />
            <span className="loading-text">
              {lang === "pt"
                ? "Buscando chaves..."
                : lang === "es"
                  ? "Buscando claves..."
                  : "Searching keys..."}
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
                  ? lang === "pt"
                    ? "🎰 Busca aleatória infinita"
                    : lang === "es"
                      ? "🎰 Búsqueda aleatoria infinita"
                      : "🎰 Infinite random search"
                  : lang === "pt"
                    ? "🔁 Busca sequencial infinita"
                    : lang === "es"
                      ? "🔁 Búsqueda secuencial infinita"
                      : "🔁 Infinite sequential search"}
              </span>
              <span className="infinite-running-sub">
                {searchMode === "inf-sequential"
                  ? lang === "pt"
                    ? `Gerando início aleatório + ${batchSize.toLocaleString()} sequenciais por lote...`
                    : lang === "es"
                      ? `Inicio aleatorio + ${batchSize.toLocaleString()} secuenciales por lote...`
                      : `Random start + ${batchSize.toLocaleString()} sequential keys per batch...`
                  : lang === "pt"
                    ? "Testando chaves aleatórias continuamente..."
                    : lang === "es"
                      ? "Probando claves aleatorias continuamente..."
                      : "Testing random keys continuously..."}
              </span>
            </div>

            {/* ── Recent Keys for Infinite Modes ── */}
            {(searchMode === "inf-sequential" || searchMode === "inf-random") &&
              recentKeys.length > 0 && (
                <div className="recent-keys-wrap">
                  <p className="recent-keys-title">
                    {searchMode === "inf-sequential"
                      ? lang === "pt"
                        ? "Últimas chaves de início (Start) geradas:"
                        : lang === "es"
                          ? "Últimas claves de inicio (Start) generadas:"
                          : "Latest starting keys generated:"
                      : lang === "pt"
                        ? "Últimas chaves aleatórias testadas:"
                        : lang === "es"
                          ? "Últimas claves aleatorias probadas:"
                          : "Latest random keys tested:"}
                  </p>
                  <div className="recent-keys-list">
                    {recentKeys.map((k, i) => (
                      <div
                        key={i}
                        className="recent-key-item"
                        style={{ opacity: 1 - i * 0.15 }}
                      >
                        {k}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            <button className="stop-button" onClick={handleStop}>
              ⏹ {lang === "pt" ? "Parar" : lang === "es" ? "Detener" : "Stop"}
            </button>
          </div>
        )}

        {/* ── NOT FOUND result ── */}
        {state === LotteryState.Normal && resultMsg !== null && (
          <div className="result-box" style={{ marginTop: "0.5rem" }}>
            <span className="label">
              {lang === "pt"
                ? "Ponto de partida testado"
                : lang === "es"
                  ? "Punto de inicio probado"
                  : "Starting key tested"}
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
                  : "DO NOT make a direct transaction! Read about Kangaroos before moving the BTC."}{" "}
              <a
                href={
                  lang === "pt"
                    ? "./education-pt.html"
                    : lang === "es"
                      ? "./education-es.html"
                      : "./education.html"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang === "pt"
                  ? "Saiba mais →"
                  : lang === "es"
                    ? "Saber más →"
                    : "Learn more →"}
              </a>
            </div>
            <a
              className="tx-builder-link"
              href="tx-builder.html"
              onClick={(e) => {
                e.preventDefault();
                // Hand the key over through sessionStorage and navigate in the
                // SAME tab: a new tab opened with "noopener" gets a fresh
                // sessionStorage (so the key would never arrive) and the key
                // would linger in this tab. The TxBuilder wipes it on load.
                // The key is never placed in the URL.
                try {
                  sessionStorage.setItem("lottery_found_wif", foundKey.wif);
                  window.location.assign("tx-builder.html");
                } catch {
                  // Storage blocked: user can still copy the WIF shown above
                }
              }}
            >
              ⚡{" "}
              {lang === "pt"
                ? "Gerar transação para MARA Slipstream"
                : lang === "es"
                  ? "Generar transacción para MARA Slipstream"
                  : "Build Transaction for MARA Slipstream"}
            </a>
          </div>
        )}

        {/* ── Counter ── */}
        {attempts > 0 && state !== LotteryState.Success && (
          <div className="attempt-counter">
            {state === LotteryState.Running && keysPerSec > 0 ? (
              <>
                <span>
                  {lang === "pt"
                    ? "Velocidade:"
                    : lang === "es"
                      ? "Velocidad:"
                      : "Speed:"}
                </span>
                <strong>{keysPerSec.toLocaleString()} keys/s</strong>
                <span className="counter-dot" />
              </>
            ) : null}
            <span>
              {lang === "pt"
                ? "Chaves testadas:"
                : lang === "es"
                  ? "Claves probadas:"
                  : "Keys tested:"}
            </span>
            <strong>{keysChecked.toLocaleString()}</strong>
          </div>
        )}
      </div>

      {/* ── Info footer ── */}
      <p className="puzzle-info">
        {content.puzzleInfoParts.before71}
        <strong>{content.puzzleInfoParts.bold71}</strong>
        {content.puzzleInfoParts.middle}
        <strong>{content.puzzleInfoParts.bold74}</strong>
        {content.puzzleInfoParts.after}
      </p>

      {/* ── Action Links ── */}
      <div className="action-links">
        <a
          href={
            lang === "pt"
              ? "./education-pt.html"
              : lang === "es"
                ? "./education-es.html"
                : "./education.html"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="action-link-btn"
        >
          {content["btn-education"]}
        </a>
        <a
          href="key-anatomy.html"
          onClick={(e) => {
            e.preventDefault();
            openRelativePage("key-anatomy.html");
          }}
          className="action-link-btn"
        >
          {content["btn-anatomy"]}
        </a>
        <a
          href="tx-builder.html"
          onClick={(e) => {
            e.preventDefault();
            openRelativePage("tx-builder.html");
          }}
          className="action-link-btn"
        >
          {content["btn-txb"]}
        </a>
      </div>

      {/* ── Global Footer ── */}
      <div
        className="footer"
        style={{
          marginTop: "3rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          fontSize: "13px",
          color: "rgba(255, 255, 255, 0.45)",
          textAlign: "center",
        }}
      >
        {content.footer}
      </div>
    </>
  );
}

export default App;
