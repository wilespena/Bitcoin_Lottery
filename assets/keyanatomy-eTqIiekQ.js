import { r, j as e, k as G, l as X, m as U, n as J, o as O, q as Q, p as Z, e as ee, c as ae, s as se, i as Y, h as te, __tla as __tla_0 } from "./App-DMOeCGY5.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const ne = ({ publicKeyHex: d, title: u, formula: x, calculatingLabel: s, pointLabel: t, generatorLabel: i }) => {
    const w = r.useRef(null);
    return r.useEffect(() => {
      const y = w.current;
      if (!y) return;
      const a = y.getContext("2d");
      if (!a) return;
      let F, P = 0;
      const K = () => {
        P += 0.02;
        const o = y.width, f = y.height;
        a.clearRect(0, 0, o, f), a.strokeStyle = "rgba(255, 255, 255, 0.05)", a.lineWidth = 1;
        const M = 40;
        for (let c = 0; c < o; c += M) a.beginPath(), a.moveTo(c, 0), a.lineTo(c, f), a.stroke();
        for (let c = 0; c < f; c += M) a.beginPath(), a.moveTo(0, c), a.lineTo(o, c), a.stroke();
        const p = o / 2, m = f / 2;
        a.strokeStyle = "rgba(255, 255, 255, 0.2)", a.beginPath(), a.moveTo(0, m), a.lineTo(o, m), a.stroke(), a.beginPath(), a.moveTo(p, 0), a.lineTo(p, f), a.stroke();
        const n = 20;
        a.strokeStyle = "#f59f00", a.lineWidth = 2, a.beginPath();
        let C = false;
        for (let c = 0; c < o; c++) {
          const v = (c - p) / n, A = v * v * v + 7;
          if (A >= 0) {
            const V = Math.sqrt(A), E = m - V * n;
            C ? a.lineTo(c, E) : (a.moveTo(c, E), C = true);
          }
        }
        a.stroke(), a.beginPath(), C = false;
        for (let c = 0; c < o; c++) {
          const v = (c - p) / n, A = v * v * v + 7;
          if (A >= 0) {
            const V = -Math.sqrt(A), E = m - V * n;
            C ? a.lineTo(c, E) : (a.moveTo(c, E), C = true);
          }
        }
        a.stroke();
        const S = d.startsWith("02"), I = d.substring(2, 6) || "0000", _ = parseInt(I, 16), b = -1.8 + (Number.isNaN(_) ? 0.5 : _ / 65535) * 4, R = b * b * b + 7, T = (S ? 1 : -1) * Math.sqrt(Math.max(0, R)), g = -1, W = Math.sqrt(g * g * g + 7), L = P % 6;
        let k = b, D = T, j = false;
        if (L < 2.4) {
          const c = L / 2.4;
          k = g + (b - g) * Math.pow(c, 0.5);
          const v = k * k * k + 7;
          D = Math.sqrt(Math.max(0, v)) * (Math.cos(L * 15) > 0 ? 1 : -1), j = true;
        }
        const $ = p + g * n, l = m - W * n;
        a.fillStyle = "rgba(255,255,255,0.85)", a.beginPath(), a.arc($, l, 4, 0, Math.PI * 2), a.fill(), a.font = "11px JetBrains Mono, monospace", a.fillText(i, Math.max(8, $ - 85), l - 10);
        const h = p + k * n, B = m - D * n;
        a.strokeStyle = j ? "rgba(255, 212, 59, 0.35)" : "rgba(245, 159, 0, 0.85)", a.lineWidth = j ? 1 : 2, a.setLineDash([
          4,
          4
        ]), a.beginPath(), a.moveTo(p, m), a.lineTo(h, B), a.stroke(), a.setLineDash([]), a.fillStyle = j ? "rgba(255, 212, 59, 0.65)" : "#ffd43b", a.beginPath(), a.arc(h, B, j ? 4 : 6, 0, Math.PI * 2), a.fill();
        const z = Math.min(o - 170, Math.max(10, h + 10)), q = Math.min(f - 12, Math.max(20, B - 10));
        j ? (a.fillStyle = "rgba(255,255,255,0.55)", a.fillText(s, z, q)) : (a.shadowBlur = 12, a.shadowColor = "#f59f00", a.fillStyle = "#fff", a.fillText(t, z, q), a.shadowBlur = 0), F = requestAnimationFrame(K);
      }, N = () => {
        const o = y.parentElement;
        o && (y.width = o.clientWidth, y.height = o.clientHeight);
      };
      return window.addEventListener("resize", N), N(), K(), () => {
        window.removeEventListener("resize", N), cancelAnimationFrame(F);
      };
    }, [
      d,
      s,
      t,
      i
    ]), e.jsxs("div", {
      className: "anatomy-canvas-container",
      children: [
        e.jsxs("div", {
          className: "anatomy-canvas-overlay",
          children: [
            e.jsx("h3", {
              className: "anatomy-canvas-title",
              children: u
            }),
            e.jsx("p", {
              className: "anatomy-canvas-text",
              children: x
            }),
            e.jsxs("p", {
              className: "anatomy-canvas-pk",
              children: [
                "PK: ",
                d.slice(0, 18),
                "\u2026"
              ]
            })
          ]
        }),
        e.jsx("canvas", {
          ref: w,
          style: {
            width: "100%",
            height: "100%",
            display: "block"
          }
        })
      ]
    });
  }, le = 1e8;
  function ce() {
    const u = new URLSearchParams(window.location.search).get("lang");
    if (u === "en" || u === "pt" || u === "es") return u;
    const x = localStorage.getItem("app_lang");
    if (x === "en" || x === "pt" || x === "es") return x;
    const s = navigator.language || "en";
    return /^pt/i.test(s) ? "pt" : /^es/i.test(s) ? "es" : "en";
  }
  function ie() {
    const [d, u] = r.useState(ce), x = d === "pt" ? Z : d === "es" ? ee : ae, s = x.anatomy, [t, i] = r.useState("private"), [w, y] = r.useState("0000000000000000000000000000000000000000000000000000000000000002"), [a, F] = r.useState(""), [P, K] = r.useState(""), [N, o] = r.useState(""), [f, M] = r.useState(""), [p, m] = r.useState(""), [n, C] = r.useState(() => G("0000000000000000000000000000000000000000000000000000000000000002")), [S, I] = r.useState(null), [_, H] = r.useState(false);
    r.useEffect(() => {
      let l = null;
      t === "private" ? l = G(w) : t === "wif" ? l = X(a) : t === "public" ? l = U(P) : t === "sha256" ? l = J(N) : t === "hash160" ? l = O(f) : t === "address" && (l = Q(p)), C(l);
    }, [
      t,
      w,
      a,
      P,
      N,
      f,
      p
    ]);
    const b = n == null ? void 0 : n.addressLegacy;
    r.useEffect(() => {
      I(null), H(false);
    }, [
      b
    ]);
    const R = () => {
      const l = b;
      !l || !Y(l) || _ || (H(true), fetch(`https://mempool.space/api/address/${encodeURIComponent(l)}`, {
        referrerPolicy: "no-referrer"
      }).then((h) => {
        if (!h.ok) throw new Error(`HTTP ${h.status}`);
        return h.json();
      }).then((h) => {
        var _a, _b;
        if (typeof ((_a = h == null ? void 0 : h.chain_stats) == null ? void 0 : _a.funded_txo_sum) == "number" && typeof ((_b = h == null ? void 0 : h.chain_stats) == null ? void 0 : _b.spent_txo_sum) == "number") {
          const B = h.chain_stats.funded_txo_sum - h.chain_stats.spent_txo_sum, z = (B / le).toFixed(8).replace(/\.?0+$/, "") + " BTC";
          I(B === 0 ? "0 BTC" : z);
        } else I(s.balanceError);
      }).catch(() => I(s.balanceError)).finally(() => H(false)));
    }, T = (l) => {
      i("private"), y(l.padStart(64, "0"));
    }, g = (l) => {
      i("address"), m(l);
    }, W = t === "private" ? w : t === "wif" ? (n == null ? void 0 : n.privateKeyHex) || "" : s.irreversibleMath, L = t === "wif" ? a : t === "private" ? (n == null ? void 0 : n.wif) || "" : s.irreversibleMath, k = t === "public" ? P : t === "private" || t === "wif" ? (n == null ? void 0 : n.publicKeyHexCompressed) || "" : s.irreversibleHash, D = t === "sha256" ? N : t === "private" || t === "wif" || t === "public" ? (n == null ? void 0 : n.sha256Pubkey) || "" : s.irreversibleHash, j = t === "hash160" ? f : (n == null ? void 0 : n.hash160) && n.hash160 !== "?" ? n.hash160 : "", $ = t === "address" ? p : (n == null ? void 0 : n.addressLegacy) || "";
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
                className: `lang-btn${d === "en" ? " active" : ""}`,
                onClick: () => {
                  u("en"), localStorage.setItem("app_lang", "en");
                },
                children: "\u{1F1FA}\u{1F1F8} EN"
              }),
              e.jsx("button", {
                className: `lang-btn${d === "pt" ? " active" : ""}`,
                onClick: () => {
                  u("pt"), localStorage.setItem("app_lang", "pt");
                },
                children: "\u{1F1E7}\u{1F1F7} PT"
              }),
              e.jsx("button", {
                className: `lang-btn${d === "es" ? " active" : ""}`,
                onClick: () => {
                  u("es"), localStorage.setItem("app_lang", "es");
                },
                children: "\u{1F1EA}\u{1F1F8} ES"
              })
            ]
          }),
          e.jsxs("div", {
            style: {
              textAlign: "left"
            },
            children: [
              e.jsx("a", {
                className: "back-link",
                href: "./",
                children: s.back
              }),
              e.jsxs("h1", {
                className: "tx-builder-title",
                children: [
                  "\u{1F9EC} ",
                  s.title
                ]
              }),
              e.jsx("p", {
                className: "tx-builder-subtitle",
                children: s.subtitle
              })
            ]
          }),
          e.jsxs("div", {
            className: "anatomy-presets-bar",
            children: [
              e.jsx("span", {
                className: "anatomy-presets-label",
                children: s.presetsLabel
              }),
              e.jsxs("div", {
                className: "anatomy-presets-buttons",
                children: [
                  e.jsx("button", {
                    type: "button",
                    className: "anatomy-preset-btn",
                    onClick: () => T("1"),
                    children: s.presetKey1
                  }),
                  e.jsx("button", {
                    type: "button",
                    className: "anatomy-preset-btn",
                    onClick: () => T("2"),
                    children: s.presetKey2
                  }),
                  e.jsx("button", {
                    type: "button",
                    className: "anatomy-preset-btn",
                    onClick: () => T("d2c55"),
                    children: s.presetPuzzle20
                  }),
                  e.jsx("button", {
                    type: "button",
                    className: "anatomy-preset-btn highlight",
                    onClick: () => g("1PWo3JeB9jrGwfHDNpdGK54CRas7fsVzXU"),
                    children: s.presetPuzzle71Addr
                  }),
                  e.jsx("button", {
                    type: "button",
                    className: "anatomy-preset-btn",
                    onClick: () => T(se()),
                    children: s.presetRandom
                  })
                ]
              })
            ]
          }),
          !n && e.jsxs("div", {
            className: "tx-error-box",
            style: {
              textAlign: "left"
            },
            children: [
              "\u26A0\uFE0F ",
              s.invalidInput
            ]
          }),
          e.jsxs("div", {
            className: "anatomy-pipeline",
            children: [
              e.jsxs("div", {
                className: `anatomy-step-card${t === "private" ? " active" : ""}`,
                children: [
                  e.jsx("div", {
                    className: "anatomy-step-header",
                    children: e.jsxs("span", {
                      className: "anatomy-step-title",
                      children: [
                        "\u{1F511} ",
                        s.privTitle
                      ]
                    })
                  }),
                  e.jsx("p", {
                    className: "anatomy-step-desc",
                    children: s.privDesc
                  }),
                  e.jsx("input", {
                    type: "text",
                    className: `anatomy-hex-input${t !== "private" && t !== "wif" ? " irreversible" : ""}`,
                    value: W,
                    onFocus: () => {
                      t !== "private" && t !== "wif" && i("private");
                    },
                    onChange: (l) => {
                      i("private"), y(l.target.value.replace(/[^0-9a-fA-F]/g, ""));
                    },
                    placeholder: s.privPlaceholder,
                    maxLength: 64,
                    spellCheck: false
                  })
                ]
              }),
              e.jsxs("div", {
                className: "anatomy-calc-box",
                children: [
                  e.jsx("span", {
                    children: "\u2195"
                  }),
                  e.jsx("code", {
                    children: "WIF = Base58Check( 0x80 + Private_Key_32B + 0x01 )"
                  }),
                  e.jsx("span", {
                    children: "\u2195"
                  })
                ]
              }),
              e.jsxs("div", {
                className: `anatomy-step-card${t === "wif" ? " active" : ""}`,
                children: [
                  e.jsx("div", {
                    className: "anatomy-step-header",
                    children: e.jsxs("span", {
                      className: "anatomy-step-title",
                      children: [
                        "\u{1F6E1}\uFE0F ",
                        s.wifTitle
                      ]
                    })
                  }),
                  e.jsx("p", {
                    className: "anatomy-step-desc",
                    children: s.wifDesc
                  }),
                  e.jsx("input", {
                    type: "text",
                    className: `anatomy-hex-input${t !== "private" && t !== "wif" ? " irreversible" : ""}`,
                    value: L,
                    onFocus: () => {
                      t !== "wif" && ((n == null ? void 0 : n.wif) && n.wif !== "?" && F(n.wif), i("wif"));
                    },
                    onChange: (l) => {
                      i("wif"), F(l.target.value.trim());
                    },
                    placeholder: s.wifPlaceholder,
                    maxLength: 52,
                    spellCheck: false
                  })
                ]
              }),
              e.jsxs("div", {
                className: "anatomy-calc-box",
                children: [
                  e.jsx("span", {
                    children: "\u2193"
                  }),
                  e.jsx("code", {
                    children: "P = k \xD7 G (SECP256k1 Scalar Multiplication)"
                  }),
                  e.jsx("span", {
                    children: "\u2193"
                  })
                ]
              }),
              n && n.publicKeyHexCompressed && n.publicKeyHexCompressed !== "?" && e.jsx(ne, {
                publicKeyHex: n.publicKeyHexCompressed,
                title: s.curveTitle,
                formula: s.curveFormula,
                calculatingLabel: s.curveCalculating,
                pointLabel: s.curvePointLabel,
                generatorLabel: s.curveGeneratorLabel
              }),
              e.jsxs("div", {
                className: `anatomy-step-card${t === "public" ? " active" : ""}`,
                children: [
                  e.jsx("div", {
                    className: "anatomy-step-header",
                    children: e.jsxs("span", {
                      className: "anatomy-step-title",
                      children: [
                        "\u{1F517} ",
                        s.pubTitle
                      ]
                    })
                  }),
                  e.jsx("p", {
                    className: "anatomy-step-desc",
                    children: s.pubDesc
                  }),
                  e.jsx("input", {
                    type: "text",
                    className: `anatomy-hex-input${[
                      "private",
                      "wif",
                      "public"
                    ].includes(t) ? "" : " irreversible"}`,
                    value: k,
                    onFocus: () => {
                      t !== "public" && ((n == null ? void 0 : n.publicKeyHexCompressed) && n.publicKeyHexCompressed !== "?" && K(n.publicKeyHexCompressed), i("public"));
                    },
                    onChange: (l) => {
                      i("public"), K(l.target.value.replace(/[^0-9a-fA-F]/g, ""));
                    },
                    placeholder: s.pubPlaceholder,
                    maxLength: 130,
                    spellCheck: false
                  })
                ]
              }),
              e.jsxs("div", {
                className: "anatomy-calc-box",
                children: [
                  e.jsx("span", {
                    children: "\u2193"
                  }),
                  e.jsx("code", {
                    children: "f(x) = SHA256( Compressed_Public_Key )"
                  }),
                  e.jsx("span", {
                    children: "\u2193"
                  })
                ]
              }),
              e.jsxs("div", {
                className: `anatomy-step-card${t === "sha256" ? " active" : ""}`,
                children: [
                  e.jsx("div", {
                    className: "anatomy-step-header",
                    children: e.jsxs("span", {
                      className: "anatomy-step-title",
                      children: [
                        "#\uFE0F\u20E3 ",
                        s.shaTitle
                      ]
                    })
                  }),
                  e.jsx("p", {
                    className: "anatomy-step-desc",
                    children: s.shaDesc
                  }),
                  e.jsx("input", {
                    type: "text",
                    className: `anatomy-hex-input${[
                      "hash160",
                      "address"
                    ].includes(t) ? " irreversible" : ""}`,
                    value: D,
                    onFocus: () => {
                      t !== "sha256" && ((n == null ? void 0 : n.sha256Pubkey) && n.sha256Pubkey !== "?" && o(n.sha256Pubkey), i("sha256"));
                    },
                    onChange: (l) => {
                      i("sha256"), o(l.target.value.replace(/[^0-9a-fA-F]/g, ""));
                    },
                    placeholder: s.shaPlaceholder,
                    maxLength: 64,
                    spellCheck: false
                  })
                ]
              }),
              e.jsxs("div", {
                className: "anatomy-calc-box",
                children: [
                  e.jsx("span", {
                    children: "\u2193"
                  }),
                  e.jsx("code", {
                    children: "f(x) = RIPEMD160( SHA256_Digest )"
                  }),
                  e.jsx("span", {
                    children: "\u2193"
                  })
                ]
              }),
              e.jsxs("div", {
                className: `anatomy-step-card${t === "hash160" ? " active" : ""}`,
                children: [
                  e.jsx("div", {
                    className: "anatomy-step-header",
                    children: e.jsxs("span", {
                      className: "anatomy-step-title",
                      children: [
                        "\u{1F9EC} ",
                        s.hash160Title
                      ]
                    })
                  }),
                  e.jsx("p", {
                    className: "anatomy-step-desc",
                    children: s.hash160Desc
                  }),
                  e.jsx("input", {
                    type: "text",
                    className: "anatomy-hex-input",
                    value: j,
                    onFocus: () => {
                      t !== "hash160" && ((n == null ? void 0 : n.hash160) && n.hash160 !== "?" && M(n.hash160), i("hash160"));
                    },
                    onChange: (l) => {
                      i("hash160"), M(l.target.value.replace(/[^0-9a-fA-F]/g, ""));
                    },
                    placeholder: s.hash160Placeholder,
                    maxLength: 40,
                    spellCheck: false
                  })
                ]
              }),
              e.jsxs("div", {
                className: "anatomy-calc-box",
                children: [
                  e.jsx("span", {
                    children: "\u2195"
                  }),
                  e.jsxs("div", {
                    className: "anatomy-math-lines",
                    children: [
                      e.jsx("code", {
                        children: "payload = 0x00 + Hash160"
                      }),
                      e.jsx("code", {
                        children: "checksum = SHA256( SHA256( payload ) ).slice(0, 4_bytes)"
                      }),
                      e.jsx("code", {
                        children: "Address = Base58Encode( payload + checksum )"
                      })
                    ]
                  }),
                  e.jsx("span", {
                    children: "\u2195"
                  })
                ]
              }),
              e.jsxs("div", {
                className: `anatomy-step-card final-address${t === "address" ? " active" : ""}`,
                children: [
                  e.jsx("div", {
                    className: "anatomy-step-header",
                    children: e.jsxs("span", {
                      className: "anatomy-step-title",
                      style: {
                        color: "#ffd43b",
                        fontSize: "15px"
                      },
                      children: [
                        "\u2705 ",
                        s.addrTitle
                      ]
                    })
                  }),
                  e.jsx("p", {
                    className: "anatomy-step-desc",
                    children: s.addrDesc
                  }),
                  e.jsx("input", {
                    type: "text",
                    className: "anatomy-hex-input address-highlight",
                    value: $,
                    onFocus: () => {
                      t !== "address" && ((n == null ? void 0 : n.addressLegacy) && m(n.addressLegacy), i("address"));
                    },
                    onChange: (l) => {
                      i("address"), m(l.target.value.trim());
                    },
                    placeholder: s.addrPlaceholder,
                    maxLength: 35,
                    spellCheck: false
                  }),
                  e.jsxs("div", {
                    className: "anatomy-balance-bar",
                    children: [
                      e.jsx("span", {
                        className: "anatomy-balance-label",
                        children: s.mempoolBalance
                      }),
                      _ ? e.jsx("span", {
                        className: "anatomy-balance-fetching",
                        children: s.fetchingBalance
                      }) : S ? e.jsx("span", {
                        className: `anatomy-balance-value${S !== "0 BTC" && S !== s.balanceError ? " has-funds" : ""}`,
                        children: S
                      }) : e.jsx("button", {
                        type: "button",
                        className: "anatomy-balance-btn",
                        onClick: R,
                        disabled: !b || !Y(b),
                        children: s.balanceCheckBtn
                      })
                    ]
                  }),
                  e.jsx("p", {
                    className: "anatomy-balance-notice",
                    children: s.balanceNotice
                  })
                ]
              })
            ]
          }),
          e.jsxs("div", {
            className: "anatomy-security-callout",
            children: [
              e.jsx("h3", {
                className: "anatomy-security-title",
                children: s.securityCalloutTitle
              }),
              e.jsx("p", {
                className: "anatomy-security-body",
                children: s.securityCalloutBody
              }),
              e.jsxs("div", {
                className: "action-links",
                style: {
                  marginBottom: 0
                },
                children: [
                  e.jsx("a", {
                    href: d === "pt" ? "./education-pt.html" : d === "es" ? "./education-es.html" : "./education.html",
                    className: "action-link-btn",
                    children: x["btn-education"]
                  }),
                  e.jsx("a", {
                    href: "./tx-builder.html",
                    className: "action-link-btn",
                    children: x["btn-txb"]
                  })
                ]
              })
            ]
          }),
          e.jsx("div", {
            className: "tx-footer",
            children: s.footer
          })
        ]
      })
    });
  }
  te.createRoot(document.getElementById("anatomy-root")).render(e.jsx(r.StrictMode, {
    children: e.jsx(ie, {})
  }));
});
