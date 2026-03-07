import { useState, useEffect } from "react";
import { buildRawTransaction, deriveFromKey } from "./bitcoin";
import "./App.css";

import englishContent from "./languages/english";
import ptContent from "./languages/portuguese";
import esContent from "./languages/spanish";

const BTC_TO_SAT = 100_000_000;
const ESTIMATED_TX_BYTES = 226; // typical P2PKH 1-in 1-out

function btcToSats(btc: string): number {
    return Math.round(parseFloat(btc) * BTC_TO_SAT);
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
    const [lang, setLang] = useState<"en" | "pt" | "es">(() => {
        return (localStorage.getItem("app_lang") as "en" | "pt" | "es") || "en";
    });
    const content = lang === "pt" ? ptContent : lang === "es" ? esContent : englishContent;

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
    const [spendBtc, setSpendBtc] = useState("");
    const [destAddress, setDestAddress] = useState("");
    const [feeRate, setFeeRate] = useState("2"); // default MARA min

    interface FeeRates { fastestFee: number; halfHourFee: number; hourFee: number; economyFee: number; minimumFee: number; }
    const [feeRates, setFeeRates] = useState<FeeRates | null>(null);
    const [fetchingFees, setFetchingFees] = useState(false);
    // MARA Slipstream minimum: max(2 × priority fee, 2 sat/vB)
    const maraMin = feeRates ? Math.max(Math.ceil(feeRates.fastestFee * 2), 2) : 2;

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
                // Pre-fill with MARA minimum (2x highest priority)
                const min = Math.max(Math.ceil(data.fastestFee * 2), 2);
                setFeeRate(String(min));
            })
            .catch(() => { /* keep default 2 */ })
            .finally(() => setFetchingFees(false));

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
            setDeriveError(content.txb.deriveErrorInvalid + (e instanceof Error ? e.message : String(e)));
        }
    }, [privateKey, content.txb.deriveErrorInvalid]);

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
                    setUtxoError(content.txb.utxoErrNoBalance);
                }
            })
            .catch((e: unknown) => setUtxoError(content.txb.utxoErrNetwork + " (" + (e instanceof Error ? e.message : "network error") + ")"))
            .finally(() => setFetchingUtxos(false));
    }, [derivedAddress, content.txb.utxoErrNoBalance, content.txb.utxoErrNetwork]);

    const selectUtxo = (u: MempoolUTXO) => {
        setTxid(u.txid);
        setVout(String(u.vout));
        const totalInput = (u.value / BTC_TO_SAT).toFixed(8);
        setAmountBtc(totalInput);
        setSpendBtc(totalInput); // por default, tenta gastar tudo
    };

    const amountSats = amountBtc ? btcToSats(amountBtc) : 0;
    const spendSats = spendBtc ? btcToSats(spendBtc) : 0;
    const feeSats = Math.round(parseFloat(feeRate || "0") * ESTIMATED_TX_BYTES);

    // Troco = Input Total - Valor a Enviar - Taxa
    const changeSats = amountSats - spendSats - feeSats;

    const handleGenerate = async () => {
        setRawHex(null);
        setBuildError(null);
        setCopied(false);

        if (!privateKey.trim()) return setBuildError(content.txb.errPrivKey);
        if (deriveError) return setBuildError(deriveError);
        if (!isValidTxid(txid)) return setBuildError(content.txb.errTxid);
        if (isNaN(parseInt(vout)) || parseInt(vout) < 0) return setBuildError(content.txb.errVout);
        if (!amountBtc || amountSats <= 0) return setBuildError(content.txb.errAmount);
        if (!spendBtc || spendSats <= 0) return setBuildError(content.txb.errSendAmount);
        if (!destAddress.trim()) return setBuildError(content.txb.errDest);
        if (feeSats <= 0) return setBuildError("Fee rate must be > 0.");
        if (spendSats < 546) return setBuildError(content.txb.errAmountTooLow);
        if (changeSats < 0) {
            let msg = content.txb.errInsufficient;
            msg = msg.replace("{0}", amountSats.toString())
                .replace("{1}", spendSats.toString())
                .replace("{2}", feeSats.toString())
                .replace("{3}", Math.abs(changeSats).toString());
            return setBuildError(msg);
        }

        try {
            const hex = buildRawTransaction({
                txid: txid.trim(),
                vout: parseInt(vout),
                amountSatoshis: amountSats,       // total UTXO
                spendSatoshis: spendSats,         // valor a enviar
                destAddress: destAddress.trim(),  // alvo
                feeSatoshis: feeSats,
                privateKey: privateKey.trim(),
                changeAddress: derivedAddress || "", // fallback de troco pra chave geradora
            });
            setRawHex(hex);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setBuildError(err.message || content.txb.errUnknown);
            } else {
                setBuildError(content.txb.errUnknown);
            }
        }
    };

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

                {/* ── Language switcher ───────────────── */}
                <div className="lang-switcher" style={{ marginTop: '0', top: '10px' }}>
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

                {/* Header */}
                <a className="back-link" href="./">{content.txb.back}</a>
                <h1 className="tx-builder-title">⚡ {content.txb.title}</h1>
                <p className="tx-builder-subtitle" dangerouslySetInnerHTML={{ __html: content.txb.subtitle }}></p>

                {/* Step 1: Private Key */}
                <div className="tx-card">
                    <div className="tx-card-header">
                        <span className="tx-step-num">1</span>
                        <span className="tx-card-title">{content.txb.step1}</span>
                    </div>
                    <p className="tx-card-hint">{content.txb.step1Hint}</p>
                    <input
                        className={`tx-input tx-mono ${buildError?.includes("private key") || buildError === content.txb.errPrivKey ? "tx-input-error" : ""}`}
                        placeholder={content.txb.step1Input}
                        value={privateKey}
                        onChange={(e) => setPrivateKey(e.target.value)}
                        spellCheck={false}
                    />
                    {derivedAddress && (
                        <div className="tx-derived-box">
                            <div className="tx-derived-row">
                                <span className="tx-derived-label">{content.txb.deriveLabelAddr}</span>
                                <span className="tx-derived-value tx-mono">{derivedAddress}</span>
                            </div>
                            <div className="tx-derived-row">
                                <span className="tx-derived-label">{content.txb.deriveLabelPub}</span>
                                <span className="tx-derived-value tx-mono small">{derivedPubkey}</span>
                            </div>
                            <p className="tx-derived-note">
                                {content.txb.deriveNote}
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
                        {fetchingUtxos && <span className="tx-utxo-spinner">⏳ {content.txb.loadingUtxos}</span>}
                    </div>

                    {/* Auto-fetch status */}
                    {!derivedAddress && (
                        <p className="tx-card-hint">{content.txb.utxoHintEnterKey}</p>
                    )}
                    {derivedAddress && fetchingUtxos && (
                        <p className="tx-card-hint">🔍 {content.txb.autoFetch} <code className="tx-addr-code">{derivedAddress}</code>...</p>
                    )}
                    {utxoError && !fetchingUtxos && (
                        <div className="tx-utxo-error">
                            ⚠️ {utxoError}{" "}
                            <a href={`https://mempool.space/address/${derivedAddress || ""}`} target="_blank" rel="noreferrer">
                                {content.txb.checkMempool}
                            </a>
                        </div>
                    )}

                    {/* Multiple UTXOs — show selector */}
                    {utxos.length > 1 && !fetchingUtxos && (
                        <div className="tx-utxo-list">
                            <p className="tx-label" style={{ marginTop: 0 }}>{content.txb.utxoListSelect}</p>
                            {utxos.map((u) => (
                                <button
                                    key={`${u.txid}-${u.vout}`}
                                    className={`tx-utxo-item${txid === u.txid && vout === String(u.vout) ? " selected" : ""}`}
                                    onClick={() => selectUtxo(u)}
                                >
                                    <span className="tx-utxo-val">{(u.value / BTC_TO_SAT).toFixed(8)} BTC</span>
                                    <span className="tx-utxo-meta">
                                        {u.status.confirmed ? content.txb.utxoConfirmed.replace("{0}", String(u.status.block_height)) : content.txb.utxoUnconfirmed}
                                    </span>
                                    <span className="tx-utxo-txid">{u.txid.slice(0, 20)}…:{u.vout}</span>
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Single UTXO confirmed — show confirmation pill */}
                    {utxos.length === 1 && !fetchingUtxos && (
                        <div className="tx-utxo-auto">
                            {content.txb.utxoAutoFilled}
                            <strong>{(utxos[0].value / BTC_TO_SAT).toFixed(8)} BTC</strong>
                            {" · "}
                            {utxos[0].status.confirmed
                                ? content.txb.utxoConfirmed.replace("{0}", String(utxos[0].status.block_height))
                                : content.txb.utxoAutoWait}
                        </div>
                    )}

                    {/* Editable fields (always visible for manual override) */}
                    {derivedAddress && (
                        <>
                            <label className="tx-label">{content.txb.txidLabel}</label>
                            <input
                                className={`tx-input tx-mono ${buildError?.includes("TXID") || buildError === content.txb.errTxid ? "tx-input-error" : ""}`}
                                placeholder={content.txb.txidPlaceholder}
                                value={txid}
                                onChange={(e) => setTxid(e.target.value)}
                                spellCheck={false}
                            />
                            <div className="tx-row-2col">
                                <div>
                                    <label className="tx-label">{content.txb.utxoTotalBtcLabel}</label>
                                    <input
                                        className="tx-input tx-mono"
                                        type="number"
                                        min="0"
                                        step="0.00000001"
                                        placeholder="UTXO total"
                                        value={amountBtc}
                                        onChange={(e) => setAmountBtc(e.target.value)}
                                        title={content.txb.utxoTotalBtcTitle}
                                    />
                                </div>
                                <div>
                                    <label className="tx-label">{content.txb.amountBtcLabel}</label>
                                    <input
                                        className={`tx-input tx-mono highlight-input ${buildError?.includes("amount to send") || buildError?.includes("amount too low") || buildError?.includes("Insufficient") || buildError === content.txb.errSendAmount || buildError === content.txb.errAmountTooLow ? "tx-input-error" : ""}`}
                                        type="number"
                                        min="0"
                                        step="0.00000001"
                                        placeholder={content.txb.amountBtcPlaceholder}
                                        value={spendBtc}
                                        onChange={(e) => setSpendBtc(e.target.value)}
                                        title={content.txb.amountBtcTitle}
                                    />
                                    {spendSats > 0 && (
                                        <span className="tx-note">{spendSats.toLocaleString()} {content.txb.satoshis}</span>
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
                        <span className="tx-card-title">{content.txb.step2}</span>
                    </div>
                    <p className="tx-card-hint">
                        {content.txb.destHint}
                    </p>
                    <label className="tx-label">{content.txb.sendToLabel}</label>
                    <input
                        className={`tx-input tx-mono ${buildError?.includes("destination address") || buildError === content.txb.errDest ? "tx-input-error" : ""}`}
                        placeholder={content.txb.sendToPlaceholder}
                        value={destAddress}
                        onChange={(e) => setDestAddress(e.target.value)}
                        spellCheck={false}
                    />
                </div>

                {/* Step 4: Fee */}
                <div className="tx-card">
                    <div className="tx-card-header">
                        <span className="tx-step-num">4</span>
                        <span className="tx-card-title">{content.txb.step3}</span>
                        {fetchingFees && <span className="tx-utxo-spinner">⏳ {content.txb.loadingUtxos}</span>}
                    </div>
                    <p className="tx-card-hint" dangerouslySetInnerHTML={{ __html: content.txb.step3Hint }}></p>
                    <p className="tx-card-hint" style={{ marginTop: '-4px' }}>
                        {content.txb.feeNote.replace('{0}', String(ESTIMATED_TX_BYTES))}
                    </p>

                    {/* Fee presets */}
                    {feeRates && (
                        <div className="tx-fee-presets">
                            <button
                                className={`tx-fee-preset mara-min ${feeRate === String(maraMin) ? "selected" : ""}`}
                                onClick={() => setFeeRate(String(maraMin))}
                            >
                                <span className="preset-label">{content.txb.feeMin}</span>
                                <span className="preset-rate">{maraMin} sat/vB</span>
                                <span className="preset-sub">{content.txb.subMaraMin}</span>
                            </button>
                            <button
                                className={`tx-fee-preset ${feeRate === String(maraMin * 2) ? "selected" : ""}`}
                                onClick={() => setFeeRate(String(maraMin * 2))}
                            >
                                <span className="preset-label">{content.txb.fee2x}</span>
                                <span className="preset-rate">{maraMin * 2} sat/vB</span>
                                <span className="preset-sub">{content.txb.sub2xMaraMin}</span>
                            </button>
                            <button
                                className={`tx-fee-preset ${feeRate === String(maraMin * 3) ? "selected" : ""}`}
                                onClick={() => setFeeRate(String(maraMin * 3))}
                            >
                                <span className="preset-label">{content.txb.fee3x}</span>
                                <span className="preset-rate">{maraMin * 3} sat/vB</span>
                                <span className="preset-sub">{content.txb.sub3xMaraMin}</span>
                            </button>
                        </div>
                    )}

                    <div className="tx-row-2col">
                        <div>
                            <label className="tx-label">{content.txb.customFeeLabel}</label>
                            <input
                                className="tx-input tx-mono"
                                type="number"
                                min={maraMin}
                                placeholder={String(maraMin)}
                                value={feeRate}
                                onChange={(e) => setFeeRate(e.target.value)}
                            />
                            <span className="tx-note">{content.txb.maraMinReq.replace('{0}', String(maraMin))}</span>
                        </div>
                        <div className="tx-fee-summary">
                            <div className="tx-fee-row">
                                <span>{content.txb.summaryTotalIn}</span>
                                <strong>{amountSats.toLocaleString()} sats</strong>
                            </div>
                            <div className="tx-fee-row">
                                <span>{content.txb.summaryFee}</span>
                                <strong className="tx-minus">- {feeSats.toLocaleString()} sats</strong>
                            </div>
                            <div className="tx-fee-row">
                                <span>{content.txb.summarySent}</span>
                                <strong className="tx-minus">- {spendSats > 0 ? `${spendSats.toLocaleString()} sats` : "0 sats"}</strong>
                            </div>
                            <div className="tx-fee-row" style={{ marginTop: '4px', paddingTop: '4px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                <span>{content.txb.summaryChange}</span>
                                <strong className={changeSats >= 0 ? "tx-plus" : "tx-error"}>
                                    {changeSats > 0 ? `+ ${changeSats.toLocaleString()} sats` : `${changeSats.toLocaleString()} sats`}
                                </strong>
                            </div>
                        </div>
                    </div>

                    <button className="tx-submit-btn" onClick={handleGenerate}>
                        {content.txb.generateBtn}
                    </button>

                    {buildError && (
                        <div className="tx-error-box">⚠️ {buildError}</div>
                    )}

                    {/* Output */}
                    {rawHex && (
                        <div className="tx-output-card">
                            <div className="tx-output-header">
                                <span className="tx-output-title">{content.txb.outputTitle}</span>
                                <button className="tx-copy-btn" onClick={handleCopy}>
                                    {copied ? content.txb.copied : content.txb.copy}
                                </button>
                            </div>
                            <textarea
                                className="tx-hex-area tx-mono"
                                readOnly
                                value={rawHex}
                                rows={3}
                                onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                            />

                            <div className="tx-instructions">
                                <h4 className="tx-instructions-title">{content.txb.nextStepsTitle}</h4>
                                <ol className="tx-instructions-list">
                                    <li dangerouslySetInnerHTML={{ __html: content.txb.stepCopy }}></li>
                                    <li dangerouslySetInnerHTML={{ __html: content.txb.stepOpen }}></li>
                                    <li dangerouslySetInnerHTML={{ __html: content.txb.stepPaste }}></li>
                                </ol>
                            </div>

                            {/* Manual Submission Fallback */}
                            <div className="tx-mara-auto-panel">
                                <div className="tx-output-actions" style={{ justifyContent: 'center' }}>
                                    <a
                                        className="tx-mara-btn manual"
                                        href="https://slipstream.mara.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {content.txb.openMaraBtn}
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="tx-footer">
                    Bitcoin Lottery · Transaction Builder · 100% browser-based · No server · No tracking
                </div>
            </div>
        </div>
    );
}
