import { useState, useEffect, useCallback } from "react";
import { buildRawTransaction, deriveFromKey } from "./bitcoin";
import "./App.css";

const BTC_TO_SAT = 100_000_000;
const ESTIMATED_TX_BYTES = 226; // typical P2PKH 1-in 1-out

function btcToSats(btc: string): number {
    return Math.round(parseFloat(btc) * BTC_TO_SAT);
}

function satsToDisplay(sats: number): string {
    return (sats / BTC_TO_SAT).toFixed(8) + " BTC";
}

function isValidTxid(s: string) {
    return /^[0-9a-fA-F]{64}$/.test(s.trim());
}

interface MempoolUTXO {
    txid: string;
    vout: number;
    value: number; // satoshis
    status: { confirmed: boolean; block_height?: number };
}

export default function TxBuilder() {
    const [privateKey, setPrivateKey] = useState("");
    const [derivedAddress, setDerivedAddress] = useState<string | null>(null);
    const [derivedPubkey, setDerivedPubkey] = useState<string | null>(null);
    const [deriveError, setDeriveError] = useState<string | null>(null);

    const [utxos, setUtxos] = useState<MempoolUTXO[]>([]);
    const [fetchingUtxos, setFetchingUtxos] = useState(false);
    const [utxoError, setUtxoError] = useState<string | null>(null);

    const [txid, setTxid] = useState("");
    const [vout, setVout] = useState("0");
    const [amountBtc, setAmountBtc] = useState("");
    const [destAddress, setDestAddress] = useState("");
    const [feeRate, setFeeRate] = useState("2"); // default MARA min

    interface FeeRates { fastestFee: number; halfHourFee: number; hourFee: number; economyFee: number; minimumFee: number; }
    const [feeRates, setFeeRates] = useState<FeeRates | null>(null);
    const [fetchingFees, setFetchingFees] = useState(false);
    // MARA Slipstream minimum: max(2 × priority fee, 2 sat/vB)
    const maraMin = feeRates ? Math.max(Math.ceil(feeRates.halfHourFee * 2), 2) : 2;

    const [rawHex, setRawHex] = useState<string | null>(null);
    const [buildError, setBuildError] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    // Detect private key from URL params (passed from lottery success state)
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const wif = params.get("wif");
        const hex = params.get("hex");
        if (wif) setPrivateKey(wif);
        else if (hex) setPrivateKey(hex);
    }, []);

    // Fetch recommended fees from mempool.space on mount
    useEffect(() => {
        setFetchingFees(true);
        fetch("https://mempool.space/api/v1/fees/recommended")
            .then((r) => r.json())
            .then((data: FeeRates) => {
                setFeeRates(data);
                // Pre-fill with MARA minimum
                const min = Math.max(Math.ceil(data.halfHourFee * 2), 2);
                setFeeRate(String(min));
            })
            .catch(() => { /* keep default 2 */ })
            .finally(() => setFetchingFees(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Auto-derive address when private key changes
    useEffect(() => {
        setDerivedAddress(null);
        setDerivedPubkey(null);
        setDeriveError(null);
        setUtxos([]);
        setUtxoError(null);
        if (!privateKey.trim()) return;
        try {
            const { address, pubkeyHex } = deriveFromKey(privateKey.trim());
            setDerivedAddress(address);
            setDerivedPubkey(pubkeyHex);
        } catch (e: unknown) {
            setDeriveError("Invalid private key: " + (e instanceof Error ? e.message : String(e)));
        }
    }, [privateKey]);

    // Auto-fetch UTXOs whenever address is derived
    useEffect(() => {
        if (!derivedAddress) return;
        setFetchingUtxos(true);
        setUtxoError(null);
        setUtxos([]);
        fetch(`https://mempool.space/api/address/${derivedAddress}/utxo`)
            .then((r) => {
                if (!r.ok) throw new Error(`HTTP ${r.status}`);
                return r.json();
            })
            .then((data: MempoolUTXO[]) => {
                setUtxos(data);
                if (data.length === 1) {
                    // Auto-fill if only one UTXO
                    selectUtxo(data[0]);
                } else if (data.length === 0) {
                    setUtxoError("No UTXOs found — this address has no unspent balance. Double-check the private key.");
                }
            })
            .catch((e: unknown) => setUtxoError("Could not fetch UTXOs from mempool.space — check your internet connection. (" + (e instanceof Error ? e.message : "network error") + ")"))
            .finally(() => setFetchingUtxos(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [derivedAddress]);

    const selectUtxo = (u: MempoolUTXO) => {
        setTxid(u.txid);
        setVout(String(u.vout));
        setAmountBtc((u.value / BTC_TO_SAT).toFixed(8));
    };

    const amountSats = amountBtc ? btcToSats(amountBtc) : 0;
    const feeSats = Math.round(parseFloat(feeRate || "0") * ESTIMATED_TX_BYTES);
    const outputSats = amountSats - feeSats;

    const handleGenerate = useCallback(() => {
        setRawHex(null);
        setBuildError(null);

        if (!privateKey.trim()) return setBuildError("Enter a private key.");
        if (deriveError) return setBuildError(deriveError);
        if (!isValidTxid(txid)) return setBuildError("TXID must be 64 hex characters.");
        if (isNaN(parseInt(vout)) || parseInt(vout) < 0) return setBuildError("Invalid output index.");
        if (!amountBtc || amountSats <= 0) return setBuildError("Enter the UTXO amount in BTC.");
        if (!destAddress.trim()) return setBuildError("Enter a destination address.");
        if (feeSats <= 0) return setBuildError("Fee rate must be > 0.");
        if (outputSats < 546) return setBuildError(`Output too low — increase amount or lower fee. Output: ${outputSats} sats.`);

        try {
            const hex = buildRawTransaction({
                txid: txid.trim(),
                vout: parseInt(vout),
                amountSatoshis: amountSats,
                destAddress: destAddress.trim(),
                feeSatoshis: feeSats,
                privateKey: privateKey.trim(),
            });
            setRawHex(hex);
        } catch (e: unknown) {
            setBuildError("Error building transaction: " + (e instanceof Error ? e.message : String(e)));
        }
    }, [privateKey, deriveError, txid, vout, amountBtc, amountSats, destAddress, feeRate, feeSats, outputSats]);

    const handleCopy = () => {
        if (!rawHex) return;
        navigator.clipboard.writeText(rawHex).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        });
    };

    return (
        <div className="tx-builder-root">
            <div className="tx-builder-container">

                {/* Header */}
                <a className="back-link" href="./">← Back to Bitcoin Lottery</a>
                <h1 className="tx-builder-title">⚡ Transaction Builder</h1>
                <p className="tx-builder-subtitle">
                    Build a signed raw transaction to broadcast privately via{" "}
                    <a href="https://slipstream.mara.com/" target="_blank" rel="noreferrer">MARA Slipstream</a>
                    {" "}— without exposing your key to the public mempool.
                </p>

                {/* Step 1: Private Key */}
                <div className="tx-card">
                    <div className="tx-card-header">
                        <span className="tx-step-num">1</span>
                        <span className="tx-card-title">Private Key of the Puzzle Address</span>
                    </div>
                    <p className="tx-card-hint">Paste the WIF or HEX private key you found in the lottery.</p>
                    <input
                        className="tx-input tx-mono"
                        placeholder="WIF (5... / K... / L...) or HEX (64 chars)"
                        value={privateKey}
                        onChange={(e) => setPrivateKey(e.target.value)}
                        spellCheck={false}
                    />
                    {derivedAddress && (
                        <div className="tx-derived-box">
                            <div className="tx-derived-row">
                                <span className="tx-derived-label">Derived address</span>
                                <span className="tx-derived-value tx-mono">{derivedAddress}</span>
                            </div>
                            <div className="tx-derived-row">
                                <span className="tx-derived-label">Public key</span>
                                <span className="tx-derived-value tx-mono small">{derivedPubkey}</span>
                            </div>
                            <p className="tx-derived-note">
                                ✅ Confirm this matches the puzzle address you found the key for.
                            </p>
                        </div>
                    )}
                    {deriveError && <p className="tx-error">{deriveError}</p>}
                </div>

                {/* Step 2: UTXO */}
                <div className="tx-card">
                    <div className="tx-card-header">
                        <span className="tx-step-num">2</span>
                        <span className="tx-card-title">UTXO — Source of Funds</span>
                        {fetchingUtxos && <span className="tx-utxo-spinner">⏳ Fetching...</span>}
                    </div>

                    {/* Auto-fetch status */}
                    {!derivedAddress && (
                        <p className="tx-card-hint">Enter your private key above to auto-load the UTXO.</p>
                    )}
                    {derivedAddress && fetchingUtxos && (
                        <p className="tx-card-hint">🔍 Fetching UTXOs from mempool.space for <code className="tx-addr-code">{derivedAddress}</code>...</p>
                    )}
                    {utxoError && !fetchingUtxos && (
                        <div className="tx-utxo-error">
                            ⚠️ {utxoError}{" "}
                            <a href={`https://mempool.space/address/${derivedAddress || ""}`} target="_blank" rel="noreferrer">
                                Check on mempool.space
                            </a>
                        </div>
                    )}

                    {/* Multiple UTXOs — show selector */}
                    {utxos.length > 1 && !fetchingUtxos && (
                        <div className="tx-utxo-list">
                            <p className="tx-label" style={{ marginTop: 0 }}>Select which UTXO to spend</p>
                            {utxos.map((u) => (
                                <button
                                    key={`${u.txid}-${u.vout}`}
                                    className={`tx-utxo-item${txid === u.txid && vout === String(u.vout) ? " selected" : ""}`}
                                    onClick={() => selectUtxo(u)}
                                >
                                    <span className="tx-utxo-val">{(u.value / BTC_TO_SAT).toFixed(8)} BTC</span>
                                    <span className="tx-utxo-meta">
                                        {u.status.confirmed ? `✅ Confirmed (block ${u.status.block_height})` : "⏳ Unconfirmed"}
                                    </span>
                                    <span className="tx-utxo-txid">{u.txid.slice(0, 20)}…:{u.vout}</span>
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Single UTXO confirmed — show confirmation pill */}
                    {utxos.length === 1 && !fetchingUtxos && (
                        <div className="tx-utxo-auto">
                            ✅ UTXO auto-filled:{" "}
                            <strong>{(utxos[0].value / BTC_TO_SAT).toFixed(8)} BTC</strong>
                            {" · "}
                            {utxos[0].status.confirmed
                                ? `Confirmed (block ${utxos[0].status.block_height})`
                                : "⏳ Unconfirmed — wait for confirmation before spending"}
                        </div>
                    )}

                    {/* Editable fields (always visible for manual override) */}
                    {derivedAddress && (
                        <>
                            <label className="tx-label">Transaction ID (TxID)</label>
                            <input
                                className="tx-input tx-mono"
                                placeholder="64-character hex txid"
                                value={txid}
                                onChange={(e) => setTxid(e.target.value)}
                                spellCheck={false}
                            />
                            <div className="tx-row-2col">
                                <div>
                                    <label className="tx-label">Output Index (Vout)</label>
                                    <input
                                        className="tx-input tx-mono"
                                        type="number"
                                        min="0"
                                        placeholder="0"
                                        value={vout}
                                        onChange={(e) => setVout(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="tx-label">Amount (BTC)</label>
                                    <input
                                        className="tx-input tx-mono"
                                        type="number"
                                        min="0"
                                        step="0.00000001"
                                        placeholder="7.10000000"
                                        value={amountBtc}
                                        onChange={(e) => setAmountBtc(e.target.value)}
                                    />
                                    {amountSats > 0 && (
                                        <span className="tx-note">{amountSats.toLocaleString()} satoshis</span>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </div>


                {/* Step 3: Destination */}
                <div className="tx-card">
                    <div className="tx-card-header">
                        <span className="tx-step-num">3</span>
                        <span className="tx-card-title">Destination Address</span>
                    </div>
                    <p className="tx-card-hint">
                        A fresh wallet address you control. Use a cold wallet — NOT an exchange address.
                    </p>
                    <label className="tx-label">Send to</label>
                    <input
                        className="tx-input tx-mono"
                        placeholder="bc1q... or 1... or 3..."
                        value={destAddress}
                        onChange={(e) => setDestAddress(e.target.value)}
                        spellCheck={false}
                    />
                </div>

                {/* Step 4: Fee */}
                <div className="tx-card">
                    <div className="tx-card-header">
                        <span className="tx-step-num">4</span>
                        <span className="tx-card-title">Transaction Fee</span>
                        {fetchingFees && <span className="tx-utxo-spinner">⏳ Fetching...</span>}
                    </div>
                    <p className="tx-card-hint">
                        MARA Slipstream minimum = <strong>2× current priority fee or 2 sat/vB</strong>, whichever is higher.
                        A P2PKH 1-in 1-out tx is ~{ESTIMATED_TX_BYTES} bytes.
                    </p>

                    {/* Fee presets */}
                    {feeRates && (
                        <div className="tx-fee-presets">
                            <button
                                className={`tx-fee-preset mara-min ${feeRate === String(maraMin) ? "selected" : ""}`}
                                onClick={() => setFeeRate(String(maraMin))}
                            >
                                <span className="preset-label">Normal ⛏</span>
                                <span className="preset-rate">{maraMin} sat/vB</span>
                                <span className="preset-sub">MARA min</span>
                            </button>
                            <button
                                className={`tx-fee-preset ${feeRate === String(maraMin * 2) ? "selected" : ""}`}
                                onClick={() => setFeeRate(String(maraMin * 2))}
                            >
                                <span className="preset-label">Priority ⚡</span>
                                <span className="preset-rate">{maraMin * 2} sat/vB</span>
                                <span className="preset-sub">2× MARA min</span>
                            </button>
                            <button
                                className={`tx-fee-preset ${feeRate === String(maraMin * 3) ? "selected" : ""}`}
                                onClick={() => setFeeRate(String(maraMin * 3))}
                            >
                                <span className="preset-label">Fast 🚀</span>
                                <span className="preset-rate">{maraMin * 3} sat/vB</span>
                                <span className="preset-sub">3× MARA min</span>
                            </button>
                        </div>
                    )}

                    <div className="tx-row-2col">
                        <div>
                            <label className="tx-label">Custom fee rate (sat/vB)</label>
                            <input
                                className="tx-input tx-mono"
                                type="number"
                                min={maraMin}
                                placeholder={String(maraMin)}
                                value={feeRate}
                                onChange={(e) => setFeeRate(e.target.value)}
                            />
                            <span className="tx-note">Min: {maraMin} sat/vB (MARA Slipstream requirement)</span>
                        </div>
                        <div className="tx-fee-summary">
                            <div className="tx-fee-row">
                                <span>Estimated fee</span>
                                <strong>{feeSats.toLocaleString()} sats ({satsToDisplay(feeSats)})</strong>
                            </div>
                            <div className="tx-fee-row">
                                <span>You will receive</span>
                                <strong className={outputSats < 546 ? "tx-bad" : "tx-good"}>
                                    {outputSats > 0 ? `${outputSats.toLocaleString()} sats (${satsToDisplay(outputSats)})` : "—"}
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Generate Button */}
                <button className="tx-generate-btn" onClick={handleGenerate}>
                    🔑 Generate Signed Raw Transaction
                </button>

                {buildError && (
                    <div className="tx-error-box">⚠️ {buildError}</div>
                )}

                {/* Output */}
                {rawHex && (
                    <div className="tx-output-card">
                        <div className="tx-output-header">
                            <span className="tx-output-title">✅ Signed Raw Transaction (Hex)</span>
                            <button className="tx-copy-btn" onClick={handleCopy}>
                                {copied ? "✓ Copied!" : "Copy"}
                            </button>
                        </div>
                        <textarea
                            className="tx-hex-area tx-mono"
                            readOnly
                            value={rawHex}
                            rows={5}
                            onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                        />
                        <div className="tx-output-actions">
                            <a
                                className="tx-mara-btn"
                                href="https://slipstream.mara.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                ⛏ Open MARA Slipstream →
                            </a>
                            <p className="tx-mara-note">
                                Paste the hex above into MARA Slipstream's form. Your transaction will be
                                mined silently — the public key is only revealed after confirmation.
                            </p>
                        </div>
                    </div>
                )}

                {/* Footer */}
                <div className="tx-footer">
                    Bitcoin Lottery · Transaction Builder · 100% browser-based · No server · No tracking
                </div>
            </div>
        </div>
    );
}
