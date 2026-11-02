import { r as a, d as ce, p as oe, e as xe, c as de, i as $, j as e, g as ue, h as me, __tla as __tla_0 } from "./App-DMOeCGY5.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const S = 1e8, U = 226, J = 2e3, pe = 0.1;
  function Q(o) {
    return Math.round(parseFloat(o) * S);
  }
  function Z(o) {
    return /^[0-9a-fA-F]{64}$/.test(o.trim());
  }
  function he() {
    const [o, A] = a.useState(() => {
      const s = localStorage.getItem("app_lang");
      return s === "en" || s === "pt" || s === "es" ? s : "en";
    }), t = o === "pt" ? oe : o === "es" ? xe : de, [p, R] = a.useState(""), [l, H] = a.useState(null), [ee, O] = a.useState(null), [y, D] = a.useState(null), [h, M] = a.useState([]), [j, K] = a.useState(false), [X, T] = a.useState(null), [C, V] = a.useState(""), [E, te] = a.useState("0"), [N, _] = a.useState(null), [k, W] = a.useState(""), [w, q] = a.useState(""), [F, se] = a.useState(""), [x, g] = a.useState("2"), [I, ae] = a.useState(null), [re, G] = a.useState(false), c = I ? Math.max(Math.ceil(I.fastestFee * 2), 2) : 2, Y = a.useRef(x);
    a.useEffect(() => {
      Y.current = x;
    }, [
      x
    ]);
    const [B, z] = a.useState(null), [i, n] = a.useState(null), [ne, P] = a.useState(false);
    a.useEffect(() => {
      try {
        const s = sessionStorage.getItem("lottery_found_wif");
        s && (sessionStorage.removeItem("lottery_found_wif"), R(s));
      } catch {
      }
    }, []), a.useEffect(() => {
      G(true), fetch("https://mempool.space/api/v1/fees/recommended", {
        referrerPolicy: "no-referrer"
      }).then((s) => {
        if (!s.ok) throw new Error(`HTTP ${s.status}`);
        return s.json();
      }).then((s) => {
        if (typeof (s == null ? void 0 : s.fastestFee) == "number") {
          ae(s);
          const r = Math.max(Math.ceil(s.fastestFee * 2), 2);
          g(String(r));
        }
      }).catch(() => {
      }).finally(() => G(false));
    }, []), a.useEffect(() => {
      if (H(null), O(null), D(null), M([]), T(null), _(null), !!p.trim()) try {
        const { address: s, pubkeyHex: r } = ce(p.trim());
        H(s), O(r);
      } catch (s) {
        D(t.txb.deriveErrorInvalid + (s instanceof Error ? s.message : String(s)));
      }
    }, [
      p,
      t.txb.deriveErrorInvalid
    ]);
    const L = a.useCallback((s) => {
      V(s.txid), te(String(s.vout)), _(s.value), W((s.value / S).toFixed(8));
      const r = Math.round(parseFloat(Y.current || "0") * U), f = Math.max(s.value - r, 0);
      q((f / S).toFixed(8));
    }, []);
    a.useEffect(() => {
      if (!l || !$(l)) return;
      const s = new AbortController();
      return K(true), T(null), M([]), fetch(`https://mempool.space/api/address/${encodeURIComponent(l)}/utxo`, {
        signal: s.signal,
        referrerPolicy: "no-referrer"
      }).then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      }).then((r) => {
        if (!Array.isArray(r)) throw new Error("Invalid UTXO response");
        const f = r.filter((v) => {
          var _a;
          return typeof (v == null ? void 0 : v.txid) == "string" && Z(v.txid) && typeof (v == null ? void 0 : v.vout) == "number" && typeof (v == null ? void 0 : v.value) == "number" && typeof ((_a = v == null ? void 0 : v.status) == null ? void 0 : _a.confirmed) == "boolean";
        });
        M(f), f.length === 1 ? L(f[0]) : f.length === 0 && T(t.txb.utxoErrNoBalance);
      }).catch((r) => {
        (r == null ? void 0 : r.name) !== "AbortError" && T(t.txb.utxoErrNetwork + " (" + (r instanceof Error ? r.message : "network error") + ")");
      }).finally(() => {
        s.signal.aborted || K(false);
      }), () => s.abort();
    }, [
      l,
      L,
      t.txb.utxoErrNoBalance,
      t.txb.utxoErrNetwork
    ]);
    const u = k ? Q(k) : 0, d = w ? Q(w) : 0, m = Math.round(parseFloat(x || "0") * U), b = u - d - m, le = async () => {
      if (z(null), n(null), P(false), !p.trim()) return n(t.txb.errPrivKey);
      if (y) return n(y);
      if (!Z(C)) return n(t.txb.errTxid);
      if (isNaN(parseInt(E)) || parseInt(E) < 0) return n(t.txb.errVout);
      if (!k || u <= 0) return n(t.txb.errAmount);
      if (!w || d <= 0) return n(t.txb.errSendAmount);
      if (!F.trim() || !$(F.trim())) return n(t.txb.errDest);
      if (m <= 0) return n("Fee rate must be > 0.");
      if (N !== null && u !== N) return n(t.txb.errAmountMismatch);
      if (parseFloat(x) > J || m > u * pe) return n(t.txb.errFeeTooHigh.replace("{0}", m.toLocaleString()).replace("{1}", String(J)));
      if (d < 546) return n(t.txb.errAmountTooLow);
      if (b < 0) {
        const s = t.txb.errInsufficient.replace("{0}", u.toString()).replace("{1}", d.toString()).replace("{2}", m.toString()).replace("{3}", Math.abs(b).toString());
        return n(s);
      }
      try {
        const s = ue({
          txid: C.trim(),
          vout: parseInt(E, 10),
          amountSatoshis: u,
          spendSatoshis: d,
          destAddress: F.trim(),
          feeSatoshis: m,
          privateKey: p.trim(),
          changeAddress: l || ""
        });
        z(s);
      } catch (s) {
        s instanceof Error ? n(s.message || t.txb.errUnknown) : n(t.txb.errUnknown);
      }
    }, ie = () => {
      B && navigator.clipboard.writeText(B).then(() => {
        P(true), setTimeout(() => P(false), 2500);
      });
    };
    return e.jsx("div", {
      className: "tx-builder-root",
      children: e.jsxs("div", {
        className: "tx-builder-container",
        children: [
          e.jsxs("div", {
            className: "lang-switcher",
            style: {
              marginTop: "0",
              top: "10px"
            },
            children: [
              e.jsx("button", {
                className: `lang-btn${o === "en" ? " active" : ""}`,
                onClick: () => {
                  A("en"), localStorage.setItem("app_lang", "en");
                },
                children: "\u{1F1FA}\u{1F1F8} EN"
              }),
              e.jsx("button", {
                className: `lang-btn ${o === "pt" ? "active" : ""}`,
                onClick: () => {
                  A("pt"), localStorage.setItem("app_lang", "pt");
                },
                children: "\u{1F1E7}\u{1F1F7} PT"
              }),
              e.jsx("button", {
                className: `lang-btn ${o === "es" ? "active" : ""}`,
                onClick: () => {
                  A("es"), localStorage.setItem("app_lang", "es");
                },
                children: "\u{1F1EA}\u{1F1F8} ES"
              })
            ]
          }),
          e.jsx("a", {
            className: "back-link",
            href: "./",
            children: t.txb.back
          }),
          e.jsxs("h1", {
            className: "tx-builder-title",
            children: [
              "\u26A1 ",
              t.txb.title
            ]
          }),
          e.jsx("p", {
            className: "tx-builder-subtitle",
            children: t.txb.subtitle
          }),
          e.jsxs("div", {
            className: "tx-card",
            children: [
              e.jsxs("div", {
                className: "tx-card-header",
                children: [
                  e.jsx("span", {
                    className: "tx-step-num",
                    children: "1"
                  }),
                  e.jsx("span", {
                    className: "tx-card-title",
                    children: t.txb.step1
                  })
                ]
              }),
              e.jsx("p", {
                className: "tx-card-hint",
                children: t.txb.step1Hint
              }),
              e.jsx("input", {
                className: `tx-input tx-mono ${(i == null ? void 0 : i.includes("private key")) || i === t.txb.errPrivKey ? "tx-input-error" : ""}`,
                placeholder: t.txb.step1Input,
                value: p,
                onChange: (s) => R(s.target.value),
                spellCheck: false
              }),
              l && e.jsxs("div", {
                className: "tx-derived-box",
                children: [
                  e.jsxs("div", {
                    className: "tx-derived-row",
                    children: [
                      e.jsx("span", {
                        className: "tx-derived-label",
                        children: t.txb.deriveLabelAddr
                      }),
                      e.jsx("span", {
                        className: "tx-derived-value tx-mono",
                        children: l
                      })
                    ]
                  }),
                  e.jsxs("div", {
                    className: "tx-derived-row",
                    children: [
                      e.jsx("span", {
                        className: "tx-derived-label",
                        children: t.txb.deriveLabelPub
                      }),
                      e.jsx("span", {
                        className: "tx-derived-value tx-mono small",
                        children: ee
                      })
                    ]
                  }),
                  e.jsx("p", {
                    className: "tx-derived-note",
                    children: t.txb.deriveNote
                  })
                ]
              }),
              y && e.jsx("p", {
                className: "tx-error",
                children: y
              })
            ]
          }),
          e.jsxs("div", {
            className: "tx-card",
            children: [
              e.jsxs("div", {
                className: "tx-card-header",
                children: [
                  e.jsx("span", {
                    className: "tx-step-num",
                    children: "2"
                  }),
                  e.jsx("span", {
                    className: "tx-card-title",
                    children: "UTXO \u2014 Source of Funds"
                  }),
                  j && e.jsxs("span", {
                    className: "tx-utxo-spinner",
                    children: [
                      "\u23F3 ",
                      t.txb.loadingUtxos
                    ]
                  })
                ]
              }),
              !l && e.jsx("p", {
                className: "tx-card-hint",
                children: t.txb.utxoHintEnterKey
              }),
              l && j && e.jsxs("p", {
                className: "tx-card-hint",
                children: [
                  "\u{1F50D} ",
                  t.txb.autoFetch,
                  " ",
                  e.jsx("code", {
                    className: "tx-addr-code",
                    children: l
                  }),
                  "..."
                ]
              }),
              X && !j && e.jsxs("div", {
                className: "tx-utxo-error",
                children: [
                  "\u26A0\uFE0F ",
                  X,
                  " ",
                  l && $(l) && e.jsx("a", {
                    href: `https://mempool.space/address/${encodeURIComponent(l)}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: t.txb.checkMempool
                  })
                ]
              }),
              h.length > 1 && !j && e.jsxs("div", {
                className: "tx-utxo-list",
                children: [
                  e.jsx("p", {
                    className: "tx-label",
                    style: {
                      marginTop: 0
                    },
                    children: t.txb.utxoListSelect
                  }),
                  h.map((s) => e.jsxs("button", {
                    className: `tx-utxo-item${C === s.txid && E === String(s.vout) ? " selected" : ""}`,
                    onClick: () => L(s),
                    children: [
                      e.jsxs("span", {
                        className: "tx-utxo-val",
                        children: [
                          (s.value / S).toFixed(8),
                          " BTC"
                        ]
                      }),
                      e.jsx("span", {
                        className: "tx-utxo-meta",
                        children: s.status.confirmed ? t.txb.utxoConfirmed.replace("{0}", String(s.status.block_height)) : t.txb.utxoUnconfirmed
                      }),
                      e.jsxs("span", {
                        className: "tx-utxo-txid",
                        children: [
                          s.txid.slice(0, 20),
                          "\u2026:",
                          s.vout
                        ]
                      })
                    ]
                  }, `${s.txid}-${s.vout}`))
                ]
              }),
              h.length === 1 && !j && e.jsxs("div", {
                className: "tx-utxo-auto",
                children: [
                  t.txb.utxoAutoFilled,
                  e.jsxs("strong", {
                    children: [
                      (h[0].value / S).toFixed(8),
                      " BTC"
                    ]
                  }),
                  " \xB7 ",
                  h[0].status.confirmed ? t.txb.utxoConfirmed.replace("{0}", String(h[0].status.block_height)) : t.txb.utxoAutoWait
                ]
              }),
              l && e.jsxs(e.Fragment, {
                children: [
                  e.jsx("label", {
                    className: "tx-label",
                    children: t.txb.txidLabel
                  }),
                  e.jsx("input", {
                    className: `tx-input tx-mono ${(i == null ? void 0 : i.includes("TXID")) || i === t.txb.errTxid ? "tx-input-error" : ""}`,
                    placeholder: t.txb.txidPlaceholder,
                    value: C,
                    onChange: (s) => {
                      V(s.target.value), _(null);
                    },
                    spellCheck: false
                  }),
                  e.jsxs("div", {
                    className: "tx-row-2col",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("label", {
                            className: "tx-label",
                            children: t.txb.utxoTotalBtcLabel
                          }),
                          e.jsx("input", {
                            className: "tx-input tx-mono",
                            type: "number",
                            min: "0",
                            step: "0.00000001",
                            placeholder: "UTXO total",
                            value: k,
                            readOnly: N !== null,
                            onChange: (s) => {
                              N === null && W(s.target.value);
                            },
                            title: N !== null ? t.txb.utxoTotalLockedTitle : t.txb.utxoTotalBtcTitle
                          })
                        ]
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("label", {
                            className: "tx-label",
                            children: t.txb.amountBtcLabel
                          }),
                          e.jsx("input", {
                            className: `tx-input tx-mono highlight-input ${(i == null ? void 0 : i.includes("amount to send")) || (i == null ? void 0 : i.includes("amount too low")) || (i == null ? void 0 : i.includes("Insufficient")) || i === t.txb.errSendAmount || i === t.txb.errAmountTooLow ? "tx-input-error" : ""}`,
                            type: "number",
                            min: "0",
                            step: "0.00000001",
                            placeholder: t.txb.amountBtcPlaceholder,
                            value: w,
                            onChange: (s) => q(s.target.value),
                            title: t.txb.amountBtcTitle
                          }),
                          d > 0 && e.jsxs("span", {
                            className: "tx-note",
                            children: [
                              d.toLocaleString(),
                              " ",
                              t.txb.satoshis
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          e.jsxs("div", {
            className: "tx-card",
            children: [
              e.jsxs("div", {
                className: "tx-card-header",
                children: [
                  e.jsx("span", {
                    className: "tx-step-num",
                    children: "3"
                  }),
                  e.jsx("span", {
                    className: "tx-card-title",
                    children: t.txb.step2
                  })
                ]
              }),
              e.jsx("p", {
                className: "tx-card-hint",
                children: t.txb.destHint
              }),
              e.jsx("label", {
                className: "tx-label",
                children: t.txb.sendToLabel
              }),
              e.jsx("input", {
                className: `tx-input tx-mono ${(i == null ? void 0 : i.includes("destination")) || i === t.txb.errDest ? "tx-input-error" : ""}`,
                placeholder: t.txb.sendToPlaceholder,
                value: F,
                onChange: (s) => se(s.target.value),
                spellCheck: false
              })
            ]
          }),
          e.jsxs("div", {
            className: "tx-card",
            children: [
              e.jsxs("div", {
                className: "tx-card-header",
                children: [
                  e.jsx("span", {
                    className: "tx-step-num",
                    children: "4"
                  }),
                  e.jsx("span", {
                    className: "tx-card-title",
                    children: t.txb.step3
                  }),
                  re && e.jsxs("span", {
                    className: "tx-utxo-spinner",
                    children: [
                      "\u23F3 ",
                      t.txb.loadingUtxos
                    ]
                  })
                ]
              }),
              e.jsxs("p", {
                className: "tx-card-hint",
                children: [
                  t.txb.step3HintPrefix,
                  e.jsx("strong", {
                    children: t.txb.step3HintBold
                  }),
                  t.txb.step3HintSuffix
                ]
              }),
              e.jsx("p", {
                className: "tx-card-hint",
                style: {
                  marginTop: "-4px"
                },
                children: t.txb.feeNote.replace("{0}", String(U))
              }),
              I && e.jsxs("div", {
                className: "tx-fee-presets",
                children: [
                  e.jsxs("button", {
                    className: `tx-fee-preset mara-min ${x === String(c) ? "selected" : ""}`,
                    onClick: () => g(String(c)),
                    children: [
                      e.jsx("span", {
                        className: "preset-label",
                        children: t.txb.feeMin
                      }),
                      e.jsxs("span", {
                        className: "preset-rate",
                        children: [
                          c,
                          " sat/vB"
                        ]
                      }),
                      e.jsx("span", {
                        className: "preset-sub",
                        children: t.txb.subMaraMin
                      })
                    ]
                  }),
                  e.jsxs("button", {
                    className: `tx-fee-preset ${x === String(c * 2) ? "selected" : ""}`,
                    onClick: () => g(String(c * 2)),
                    children: [
                      e.jsx("span", {
                        className: "preset-label",
                        children: t.txb.fee2x
                      }),
                      e.jsxs("span", {
                        className: "preset-rate",
                        children: [
                          c * 2,
                          " sat/vB"
                        ]
                      }),
                      e.jsx("span", {
                        className: "preset-sub",
                        children: t.txb.sub2xMaraMin
                      })
                    ]
                  }),
                  e.jsxs("button", {
                    className: `tx-fee-preset ${x === String(c * 3) ? "selected" : ""}`,
                    onClick: () => g(String(c * 3)),
                    children: [
                      e.jsx("span", {
                        className: "preset-label",
                        children: t.txb.fee3x
                      }),
                      e.jsxs("span", {
                        className: "preset-rate",
                        children: [
                          c * 3,
                          " sat/vB"
                        ]
                      }),
                      e.jsx("span", {
                        className: "preset-sub",
                        children: t.txb.sub3xMaraMin
                      })
                    ]
                  })
                ]
              }),
              e.jsxs("div", {
                className: "tx-row-2col",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("label", {
                        className: "tx-label",
                        children: t.txb.customFeeLabel
                      }),
                      e.jsx("input", {
                        className: "tx-input tx-mono",
                        type: "number",
                        min: c,
                        placeholder: String(c),
                        value: x,
                        onChange: (s) => g(s.target.value)
                      }),
                      e.jsx("span", {
                        className: "tx-note",
                        children: t.txb.maraMinReq.replace("{0}", String(c))
                      })
                    ]
                  }),
                  e.jsxs("div", {
                    className: "tx-fee-summary",
                    children: [
                      e.jsxs("div", {
                        className: "tx-fee-row",
                        children: [
                          e.jsx("span", {
                            children: t.txb.summaryTotalIn
                          }),
                          e.jsxs("strong", {
                            children: [
                              u.toLocaleString(),
                              " sats"
                            ]
                          })
                        ]
                      }),
                      e.jsxs("div", {
                        className: "tx-fee-row",
                        children: [
                          e.jsx("span", {
                            children: t.txb.summaryFee
                          }),
                          e.jsxs("strong", {
                            className: "tx-minus",
                            children: [
                              "- ",
                              m.toLocaleString(),
                              " sats"
                            ]
                          })
                        ]
                      }),
                      e.jsxs("div", {
                        className: "tx-fee-row",
                        children: [
                          e.jsx("span", {
                            children: t.txb.summarySent
                          }),
                          e.jsxs("strong", {
                            className: "tx-minus",
                            children: [
                              "- ",
                              d > 0 ? `${d.toLocaleString()} sats` : "0 sats"
                            ]
                          })
                        ]
                      }),
                      e.jsxs("div", {
                        className: "tx-fee-row",
                        style: {
                          marginTop: "4px",
                          paddingTop: "4px",
                          borderTop: "1px solid rgba(255,255,255,0.1)"
                        },
                        children: [
                          e.jsx("span", {
                            children: t.txb.summaryChange
                          }),
                          e.jsx("strong", {
                            className: b >= 0 ? "tx-plus" : "tx-error",
                            children: b > 0 ? `+ ${b.toLocaleString()} sats` : `${b.toLocaleString()} sats`
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              e.jsx("button", {
                className: "tx-submit-btn",
                onClick: le,
                children: t.txb.generateBtn
              }),
              i && e.jsxs("div", {
                className: "tx-error-box",
                children: [
                  "\u26A0\uFE0F ",
                  i
                ]
              }),
              B && e.jsxs("div", {
                className: "tx-output-card",
                children: [
                  e.jsxs("div", {
                    className: "tx-output-header",
                    children: [
                      e.jsx("span", {
                        className: "tx-output-title",
                        children: t.txb.outputTitle
                      }),
                      e.jsx("button", {
                        className: "tx-copy-btn",
                        onClick: ie,
                        children: ne ? t.txb.copied : t.txb.copy
                      })
                    ]
                  }),
                  e.jsx("textarea", {
                    className: "tx-hex-area tx-mono",
                    readOnly: true,
                    value: B,
                    rows: 3,
                    onClick: (s) => s.target.select()
                  }),
                  e.jsxs("div", {
                    className: "tx-instructions",
                    children: [
                      e.jsx("h4", {
                        className: "tx-instructions-title",
                        children: t.txb.nextStepsTitle
                      }),
                      e.jsxs("ol", {
                        className: "tx-instructions-list",
                        children: [
                          e.jsxs("li", {
                            children: [
                              t.txb.stepCopyPrefix,
                              e.jsx("strong", {
                                children: t.txb.stepCopyBold
                              }),
                              t.txb.stepCopySuffix
                            ]
                          }),
                          e.jsxs("li", {
                            children: [
                              t.txb.stepOpenPrefix,
                              e.jsx("strong", {
                                children: t.txb.stepOpenBold
                              }),
                              t.txb.stepOpenSuffix
                            ]
                          }),
                          e.jsxs("li", {
                            children: [
                              t.txb.stepPastePrefix,
                              e.jsx("strong", {
                                children: t.txb.stepPasteBold
                              }),
                              t.txb.stepPasteSuffix
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  e.jsx("div", {
                    className: "tx-mara-auto-panel",
                    children: e.jsx("div", {
                      className: "tx-output-actions",
                      style: {
                        justifyContent: "center"
                      },
                      children: e.jsx("a", {
                        className: "tx-mara-btn manual",
                        href: "https://slipstream.mara.com/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: t.txb.openMaraBtn
                      })
                    })
                  })
                ]
              })
            ]
          }),
          e.jsx("div", {
            className: "tx-footer",
            children: "Bitcoin Lottery \xB7 Transaction Builder \xB7 100% browser-based \xB7 No server \xB7 No tracking"
          })
        ]
      })
    });
  }
  me.createRoot(document.getElementById("tx-root")).render(e.jsx(a.StrictMode, {
    children: e.jsx(he, {})
  }));
});
