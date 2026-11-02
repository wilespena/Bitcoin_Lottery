import { r as t, f as Le, a as je, b as Ne, j as e, p as De, e as Fe, c as Oe, t as Ve, i as Je, S as Ue, R as Ge, __tla as __tla_0 } from "./App-DMOeCGY5.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const ve = "/Bitcoin_Lottery/assets/bitcoin-Iylln6wJ.png", O = [
    {
      number: 20,
      address: "1HsMJxNiV7TLxmoF6uJNkydxPFDog4NQum",
      rangeStart: "80000",
      rangeEnd: "fffff",
      reward: "Test only",
      solved: true
    },
    {
      number: 71,
      address: "1PWo3JeB9jrGwfHDNpdGK54CRas7fsVzXU",
      rangeStart: "400000000000000000",
      rangeEnd: "7fffffffffffffffff",
      reward: "7.1 BTC"
    },
    {
      number: 72,
      address: "1JTK7s9YVYywfm5XUH7RNhHJH1LshCaRFR",
      rangeStart: "800000000000000000",
      rangeEnd: "ffffffffffffffffff",
      reward: "7.2 BTC"
    },
    {
      number: 73,
      address: "12VVRNPi4SJqUTsp6FmqDqY5sGosDtysn4",
      rangeStart: "1000000000000000000",
      rangeEnd: "1ffffffffffffffffff",
      reward: "7.3 BTC"
    },
    {
      number: 74,
      address: "1FWGcVDK3JGzCC3WtkYetULPszMaK2Jksv",
      rangeStart: "2000000000000000000",
      rangeEnd: "3ffffffffffffffffff",
      reward: "7.4 BTC"
    }
  ], E = 5e4, V = 1e7;
  function He() {
    const [i, h] = t.useState("normal"), [s, b] = t.useState(() => {
      const a = localStorage.getItem("app_lang");
      return a === "en" || a === "pt" || a === "es" ? a : "en";
    }), c = s === "pt" ? De : s === "es" ? Fe : Oe, [Se, ye] = t.useState({}), [o, Ce] = t.useState(O[1]), [d, $] = t.useState("manual"), [j, J] = t.useState(5e4), [ke, U] = t.useState("50000"), [I, N] = t.useState(null), [we, C] = t.useState(0), [ze, k] = t.useState(0), [G, M] = t.useState(0), [B, Re] = t.useState(null), [H, _] = t.useState([]), [p, W] = t.useState(false), [v, Y] = t.useState(""), [Ee, X] = t.useState(null), [q, w] = t.useState(false), [Z, Q] = t.useState(""), [ee, g] = t.useState(null), [K, se] = t.useState(false), [f, T] = t.useState(null), [L, S] = t.useState(false), [ae, ne] = t.useState(""), [te, re] = t.useState(""), [le, u] = t.useState(null), y = t.useRef(false), ie = t.useRef(0), x = t.useRef(0), ce = window.innerWidth < 800 ? 5 : 12, Ie = t.useRef(Array.from({
      length: ce
    }, (a, n) => ({
      left: Math.round(n / ce * 100) + Math.round(Math.random() * 7),
      duration: 2 + Math.random() * 4,
      delay: Math.random() * 5,
      size: 14 + Math.round(Math.random() * 10)
    })));
    t.useEffect(() => {
      const n = new URLSearchParams(window.location.search).get("lang");
      if (n === "pt" || n === "en" || n === "es") b(n);
      else if (!localStorage.getItem("app_lang")) {
        const m = navigator.language || "en";
        /^pt/i.test(m) ? b("pt") : /^es/i.test(m) ? b("es") : b("en");
      }
      (async () => {
        var _a, _b;
        const m = {};
        for (const R of O) if (!(R.number === 20 || R.solved)) try {
          const xe = await fetch(`https://mempool.space/api/address/${encodeURIComponent(R.address)}`, {
            referrerPolicy: "no-referrer"
          });
          if (xe.ok) {
            const P = await xe.json();
            if (typeof ((_a = P == null ? void 0 : P.chain_stats) == null ? void 0 : _a.funded_txo_sum) == "number" && typeof ((_b = P == null ? void 0 : P.chain_stats) == null ? void 0 : _b.spent_txo_sum) == "number") {
              const be = P.chain_stats.funded_txo_sum - P.chain_stats.spent_txo_sum;
              be === 0 ? m[R.address] = "0 BTC (Solved)" : m[R.address] = me(be);
            }
          }
        } catch {
        }
        ye(m);
      })();
    }, []);
    const A = () => {
      h("normal"), N(null), C(0), k(0), M(0), _([]), x.current = 0;
    }, l = t.useMemo(() => f ? {
      rangeStart: f.start,
      rangeEnd: f.end
    } : p ? {
      rangeStart: "",
      rangeEnd: ""
    } : {
      rangeStart: o.rangeStart,
      rangeEnd: o.rangeEnd
    }, [
      f,
      p,
      o.rangeStart,
      o.rangeEnd
    ]), Be = () => {
      ne(l.rangeStart), re(l.rangeEnd), u(null), S(true);
    }, oe = () => {
      Q(v), g(null), w(true);
    }, _e = async () => {
      var _a, _b;
      const a = Z.trim();
      if (!a || !Je(a)) {
        g(s === "pt" ? "Insira um endere\xE7o Bitcoin v\xE1lido." : s === "es" ? "Ingresa una direcci\xF3n Bitcoin v\xE1lida." : "Enter a valid Bitcoin address.");
        return;
      }
      se(true), g(null);
      try {
        const n = await fetch(`https://mempool.space/api/address/${encodeURIComponent(a)}`, {
          referrerPolicy: "no-referrer"
        });
        if (!n.ok) throw new Error("Invalid address or network error");
        const r = await n.json();
        if (typeof ((_a = r == null ? void 0 : r.chain_stats) == null ? void 0 : _a.funded_txo_sum) != "number" || typeof ((_b = r == null ? void 0 : r.chain_stats) == null ? void 0 : _b.spent_txo_sum) != "number") throw new Error("Unexpected response format");
        const m = r.chain_stats.funded_txo_sum - r.chain_stats.spent_txo_sum;
        X(me(m)), Y(a), w(false), A();
      } catch {
        g(s === "pt" ? "Endere\xE7o inv\xE1lido ou erro de rede." : s === "es" ? "Direcci\xF3n inv\xE1lida o error de red." : "Invalid address or network error.");
      } finally {
        se(false);
      }
    }, Te = () => {
      const a = ae.trim().toLowerCase().replace(/^0x/, ""), n = te.trim().toLowerCase().replace(/^0x/, "");
      if (!a || !n || a.length > 64 || n.length > 64 || !/^[0-9a-f]+$/.test(a) || !/^[0-9a-f]+$/.test(n)) {
        u(s === "pt" ? "Valores hexadecimais inv\xE1lidos (1 a 64 caracteres)." : s === "es" ? "Valores hexadecimales inv\xE1lidos (1 a 64 caracteres)." : "Invalid hex values (1 to 64 chars).");
        return;
      }
      const r = BigInt("0x" + a), m = BigInt("0x" + n);
      if (r >= m) {
        u(s === "pt" ? "O in\xEDcio deve ser menor que o fim." : s === "es" ? "El inicio debe ser menor que el fin." : "Start must be less than end.");
        return;
      }
      if (r < 1n || m >= Ue) {
        u(s === "pt" ? "O intervalo deve ficar entre 1 e n \u2212 1 (ordem da curva secp256k1)." : s === "es" ? "El rango debe estar entre 1 y n \u2212 1 (orden de la curva secp256k1)." : "Range must stay between 1 and n \u2212 1 (secp256k1 curve order).");
        return;
      }
      T({
        start: a,
        end: n
      }), S(false), u(null), A();
    }, de = () => {
      T(null), S(false), u(null), A();
    }, ue = (a) => {
      y.current = true, a === "custom" ? (W(true), Y(""), X(null), T(null), S(false), u(null), w(false), g(null)) : (W(false), Ce(a), T(null), S(false), u(null), w(false), g(null)), A();
    }, D = (a) => {
      h("success"), y.current = true;
      const n = a.toString(16).padStart(64, "0"), r = Ve(n);
      Re({
        hex: n,
        wif: r
      }), N(null);
    }, Ae = 1e8;
    function me(a) {
      return (a / Ae).toFixed(8).replace(/\.?0+$/, "") + " BTC";
    }
    const pe = (a) => {
      const n = (Date.now() - ie.current) / 1e3;
      n > 0 && M(Math.round(a / n));
    }, z = p ? v : o.address, Pe = async () => {
      const a = je(l.rangeStart, l.rangeEnd);
      C((r) => r + 1), k((r) => r + 5e4);
      const n = await Ne(a, z, 5e4, l.rangeEnd);
      n.success && n.privateKey ? D(n.privateKey) : (h("normal"), N(a));
    }, fe = t.useCallback(() => {
      if (y.current) {
        h("normal");
        return;
      }
      const a = Le(z, l.rangeStart, l.rangeEnd, 1e3);
      if (a.triedKey && _((n) => [
        a.triedKey,
        ...n
      ].slice(0, 5)), x.current += 1e3, C((n) => n + 1), k(x.current), pe(x.current), a.success && a.privateKey) {
        D(a.privateKey);
        return;
      }
      setTimeout(fe, 0);
    }, [
      z,
      l
    ]), he = t.useCallback(async () => {
      if (y.current) {
        h("normal");
        return;
      }
      const a = je(l.rangeStart, l.rangeEnd);
      _((r) => [
        a,
        ...r
      ].slice(0, 5));
      const n = await Ne(a, z, j, l.rangeEnd);
      if (x.current += j, C((r) => r + 1), k(x.current), pe(x.current), n.success && n.privateKey) {
        D(n.privateKey);
        return;
      }
      setTimeout(() => {
        he();
      }, 0);
    }, [
      z,
      l,
      j
    ]), $e = () => {
      y.current = false, ie.current = Date.now(), x.current = 0, h("running"), N(null), C(0), k(0), _([]), M(0), setTimeout(d === "inf-random" ? fe : () => {
        he();
      }, 10);
    }, Me = () => {
      if (p && (!f || !v.trim())) {
        N(s === "pt" ? "Configure o endere\xE7o e os limites customizados primeiro." : s === "es" ? "Configura la direcci\xF3n y los l\xEDmites primero." : "Set custom address and range first.");
        return;
      }
      d === "manual" ? (h("loading"), N(null), setTimeout(() => {
        Pe();
      }, 10)) : $e();
    }, qe = () => {
      y.current = true, h("normal");
    }, Ke = (a) => {
      U(a);
      const n = parseInt(a, 10);
      !isNaN(n) && n >= E && n <= V && J(n);
    }, F = d !== "manual", ge = (a) => {
      const n = window.location.href.split("?")[0].replace(/\/?(index\.html)?$/, "");
      window.open(`${n}/${a}`, "_blank", "noopener,noreferrer");
    };
    return e.jsxs(e.Fragment, {
      children: [
        Ie.current.map((a, n) => e.jsx("img", {
          src: ve,
          className: "flyingbitcoin",
          alt: "",
          style: {
            left: `${a.left}%`,
            width: a.size,
            height: a.size,
            animationDuration: `${a.duration}s`,
            animationDelay: `${a.delay}s`
          }
        }, n)),
        e.jsxs("div", {
          className: "lang-switcher",
          children: [
            e.jsx("button", {
              className: `lang-btn${s === "en" ? " active" : ""}`,
              onClick: () => {
                b("en"), localStorage.setItem("app_lang", "en");
              },
              children: "\u{1F1FA}\u{1F1F8} EN"
            }),
            e.jsx("button", {
              className: `lang-btn ${s === "pt" ? "active" : ""}`,
              onClick: () => {
                b("pt"), localStorage.setItem("app_lang", "pt");
              },
              children: "\u{1F1E7}\u{1F1F7} PT"
            }),
            e.jsx("button", {
              className: `lang-btn ${s === "es" ? "active" : ""}`,
              onClick: () => {
                b("es"), localStorage.setItem("app_lang", "es");
              },
              children: "\u{1F1EA}\u{1F1F8} ES"
            })
          ]
        }),
        e.jsxs("div", {
          className: "typewriter",
          children: [
            e.jsx("h1", {
              children: c.title
            }),
            e.jsx("img", {
              src: ve,
              width: 72,
              alt: "Bitcoin"
            })
          ]
        }),
        i !== "success" && e.jsxs("div", {
          className: "puzzle-selector-wrap",
          children: [
            e.jsx("p", {
              className: "puzzle-selector-label",
              children: s === "pt" ? "Selecione o puzzle:" : s === "es" ? "Selecciona el puzzle:" : "Select puzzle:"
            }),
            e.jsxs("div", {
              className: "puzzle-selector",
              children: [
                O.map((a) => {
                  const n = !p && o.number === a.number;
                  return e.jsx("button", {
                    className: `puzzle-btn${n ? " active" : ""}`,
                    onClick: () => ue(a),
                    children: e.jsxs("span", {
                      className: "puzzle-btn-number",
                      children: [
                        "#",
                        a.number
                      ]
                    })
                  }, a.number);
                }),
                e.jsx("button", {
                  className: `puzzle-btn custom-btn${p ? " active" : ""}`,
                  onClick: () => ue("custom"),
                  children: e.jsx("span", {
                    className: "puzzle-btn-number",
                    children: "\u{1F528} Custom"
                  })
                })
              ]
            }),
            e.jsxs("div", {
              className: "target-badge",
              children: [
                e.jsx("div", {
                  className: "target-badge-main",
                  children: p ? v ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsx("span", {
                        className: "reward",
                        children: `\u20BF ${Ee}`
                      }),
                      e.jsx("span", {
                        className: "dot"
                      }),
                      e.jsx("span", {
                        className: "address",
                        children: v
                      }),
                      !q && e.jsx("button", {
                        className: "range-edit-btn",
                        onClick: oe,
                        title: s === "pt" ? "Editar endere\xE7o" : s === "es" ? "Editar direcci\xF3n" : "Edit address",
                        children: "\u2699\uFE0F"
                      })
                    ]
                  }) : e.jsxs(e.Fragment, {
                    children: [
                      e.jsx("span", {
                        className: "reward",
                        style: {
                          color: "#ff4444"
                        },
                        children: "ADDRESS:"
                      }),
                      e.jsx("span", {
                        className: "range-value range-custom",
                        children: e.jsx("span", {
                          style: {
                            color: "#ff4444"
                          },
                          children: s === "pt" ? "[Obrigat\xF3rio]" : s === "es" ? "[Requerido]" : "[Required]"
                        })
                      }),
                      !q && e.jsx("button", {
                        className: "range-edit-btn",
                        onClick: oe,
                        title: s === "pt" ? "Adicionar endere\xE7o" : s === "es" ? "A\xF1adir direcci\xF3n" : "Add address",
                        children: "\u2699\uFE0F"
                      })
                    ]
                  }) : e.jsxs(e.Fragment, {
                    children: [
                      e.jsx("span", {
                        className: "reward",
                        children: o.solved ? "\u{1F9EA} " + (s === "pt" ? "Modo Teste" : s === "es" ? "Modo Prueba" : "Test Mode") : `\u20BF ${Se[o.address] || o.reward}`
                      }),
                      e.jsx("span", {
                        className: "dot"
                      }),
                      e.jsx("span", {
                        className: "address",
                        children: o.address
                      })
                    ]
                  })
                }),
                e.jsxs("div", {
                  className: "target-badge-range",
                  children: [
                    e.jsx("span", {
                      className: "range-label",
                      children: s === "pt" ? "intervalo:" : s === "es" ? "rango:" : "range:"
                    }),
                    e.jsx("span", {
                      className: `range-value${f ? " range-custom" : ""}`,
                      children: p && !f ? e.jsx("span", {
                        style: {
                          color: "#ff4444"
                        },
                        children: s === "pt" ? "[Obrigat\xF3rio]" : s === "es" ? "[Requerido]" : "[Required]"
                      }) : `${l.rangeStart} \u2192 ${l.rangeEnd}`
                    }),
                    !L && e.jsx("button", {
                      className: "range-edit-btn",
                      onClick: Be,
                      title: s === "pt" ? "Editar intervalo" : s === "es" ? "Editar rango" : "Edit range",
                      children: "\u2699\uFE0F"
                    }),
                    f && !L && e.jsx("button", {
                      className: "range-reset-btn",
                      onClick: de,
                      title: s === "pt" ? "Restaurar padr\xE3o" : s === "es" ? "Restaurar por defecto" : "Reset to default",
                      children: "\u21BA"
                    })
                  ]
                })
              ]
            }),
            p && q && e.jsxs("div", {
              className: "range-editor",
              children: [
                e.jsxs("div", {
                  className: "range-editor-row",
                  children: [
                    e.jsx("label", {
                      className: "range-editor-label",
                      children: "Address"
                    }),
                    e.jsx("input", {
                      className: "range-editor-input",
                      style: {
                        width: "100%"
                      },
                      value: Z,
                      onChange: (a) => {
                        Q(a.target.value), g(null);
                      },
                      spellCheck: false,
                      placeholder: s === "pt" ? "Cole o endere\xE7o..." : s === "es" ? "Pega la direcci\xF3n..." : "Paste address..."
                    })
                  ]
                }),
                ee && e.jsx("p", {
                  className: "range-error",
                  children: ee
                }),
                e.jsxs("div", {
                  className: "range-editor-actions",
                  children: [
                    e.jsx("button", {
                      className: "range-apply-btn",
                      onClick: _e,
                      disabled: K,
                      children: K ? s === "pt" || s === "es" ? "Buscando..." : "Fetching..." : s === "pt" || s === "es" ? "Aplicar" : "Apply"
                    }),
                    e.jsx("button", {
                      className: "range-cancel-btn",
                      onClick: () => {
                        w(false), g(null);
                      },
                      disabled: K,
                      children: s === "pt" || s === "es" ? "Cancelar" : "Cancel"
                    })
                  ]
                })
              ]
            }),
            L && e.jsxs("div", {
              className: "range-editor",
              children: [
                e.jsxs("div", {
                  className: "range-editor-row",
                  children: [
                    e.jsx("label", {
                      className: "range-editor-label",
                      children: "Start (hex)"
                    }),
                    e.jsx("input", {
                      className: "range-editor-input",
                      value: ae,
                      onChange: (a) => {
                        ne(a.target.value), u(null);
                      },
                      spellCheck: false,
                      placeholder: o.rangeStart
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "range-editor-row",
                  children: [
                    e.jsx("label", {
                      className: "range-editor-label",
                      children: "End (hex)"
                    }),
                    e.jsx("input", {
                      className: "range-editor-input",
                      value: te,
                      onChange: (a) => {
                        re(a.target.value), u(null);
                      },
                      spellCheck: false,
                      placeholder: o.rangeEnd
                    })
                  ]
                }),
                le && e.jsx("p", {
                  className: "range-error",
                  children: le
                }),
                e.jsxs("div", {
                  className: "range-editor-actions",
                  children: [
                    e.jsx("button", {
                      className: "range-apply-btn",
                      onClick: Te,
                      children: s === "pt" || s === "es" ? "Aplicar" : "Apply"
                    }),
                    e.jsx("button", {
                      className: "range-cancel-btn",
                      onClick: () => {
                        S(false), u(null);
                      },
                      children: s === "pt" || s === "es" ? "Cancelar" : "Cancel"
                    }),
                    f && e.jsx("button", {
                      className: "range-reset-btn-sm",
                      onClick: de,
                      children: s === "pt" ? "Restaurar padr\xE3o" : s === "es" ? "Restaurar" : "Reset to default"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          className: "glass-card",
          children: [
            i !== "success" && i !== "running" && e.jsxs("div", {
              className: "mode-selector",
              children: [
                e.jsxs("button", {
                  className: `mode-btn${d === "manual" ? " active" : ""}`,
                  onClick: () => $("manual"),
                  children: [
                    e.jsx("span", {
                      className: "mode-icon",
                      children: "\u{1F3B2}"
                    }),
                    e.jsx("span", {
                      className: "mode-label",
                      children: "Manual"
                    }),
                    e.jsx("span", {
                      className: "mode-desc",
                      children: s === "pt" ? "50k por roll" : s === "es" ? "50k por intento" : "50k per roll"
                    })
                  ]
                }),
                e.jsxs("button", {
                  className: `mode-btn${d === "inf-random" ? " active" : ""}`,
                  onClick: () => $("inf-random"),
                  children: [
                    e.jsx("span", {
                      className: "mode-icon",
                      children: "\u{1F3B0}"
                    }),
                    e.jsx("span", {
                      className: "mode-label",
                      children: s === "pt" ? "\u221E Aleat\xF3rio" : s === "es" ? "\u221E Aleatorio" : "\u221E Random"
                    }),
                    e.jsx("span", {
                      className: "mode-desc",
                      children: s === "pt" ? "100% aleat\xF3rio" : s === "es" ? "100% aleatorio" : "100% random keys"
                    })
                  ]
                }),
                e.jsxs("button", {
                  className: `mode-btn${d === "inf-sequential" ? " active" : ""}`,
                  onClick: () => $("inf-sequential"),
                  children: [
                    e.jsx("span", {
                      className: "mode-icon",
                      children: "\u{1F501}"
                    }),
                    e.jsx("span", {
                      className: "mode-label",
                      children: s === "pt" ? "\u221E Sequencial" : s === "es" ? "\u221E Secuencial" : "\u221E Sequential"
                    }),
                    e.jsx("span", {
                      className: "mode-desc",
                      children: s === "pt" ? "random + sequencial" : s === "es" ? "random + secuencial" : "random + sequential"
                    })
                  ]
                })
              ]
            }),
            d === "inf-sequential" && i !== "running" && i !== "success" && e.jsxs("div", {
              className: "batch-size-wrap",
              children: [
                e.jsx("label", {
                  className: "batch-size-label",
                  htmlFor: "batch-size-input",
                  children: s === "pt" ? "Chaves por lote:" : s === "es" ? "Claves por lote:" : "Keys per batch:"
                }),
                e.jsx("input", {
                  id: "batch-size-input",
                  className: "batch-size-input",
                  type: "number",
                  min: E,
                  max: V,
                  step: 5e4,
                  value: ke,
                  onChange: (a) => Ke(a.target.value),
                  onBlur: () => {
                    const a = Math.max(E, Math.min(V, j));
                    J(a), U(String(a));
                  }
                }),
                e.jsx("span", {
                  className: "batch-size-note",
                  children: s === "pt" || s === "es" ? `m\xEDn. ${E.toLocaleString()}` : `min ${E.toLocaleString()}`
                })
              ]
            }),
            i === "normal" && (!p || v) && e.jsx("div", {
              className: "action-row",
              children: e.jsx("button", {
                id: "roll-btn",
                className: `roll-button${I !== null ? " roll-again" : ""}${F ? " infinite-roll" : ""}`,
                onClick: Me,
                children: I !== null && !F ? s === "pt" ? "\u{1F3B2} Tentar novamente" : s === "es" ? "\u{1F3B2} Intentar de nuevo" : "\u{1F3B2} Try again" : F ? s === "pt" ? "\u25B6 Iniciar busca infinita" : s === "es" ? "\u25B6 Iniciar b\xFAsqueda infinita" : "\u25B6 Start infinite search" : c["roll-btn"]
              })
            }),
            i === "loading" && e.jsxs("div", {
              className: "loading-wrap",
              children: [
                e.jsx("div", {
                  className: "spinner"
                }),
                e.jsx("span", {
                  className: "loading-text",
                  children: s === "pt" ? "Buscando chaves..." : s === "es" ? "Buscando claves..." : "Searching keys..."
                })
              ]
            }),
            i === "running" && e.jsxs("div", {
              className: "infinite-running-wrap",
              children: [
                e.jsx("div", {
                  className: "infinite-pulse-ring"
                }),
                e.jsxs("div", {
                  className: "infinite-running-info",
                  children: [
                    e.jsx("span", {
                      className: "infinite-running-label",
                      children: d === "inf-random" ? s === "pt" ? "\u{1F3B0} Busca aleat\xF3ria infinita" : s === "es" ? "\u{1F3B0} B\xFAsqueda aleatoria infinita" : "\u{1F3B0} Infinite random search" : s === "pt" ? "\u{1F501} Busca sequencial infinita" : s === "es" ? "\u{1F501} B\xFAsqueda secuencial infinita" : "\u{1F501} Infinite sequential search"
                    }),
                    e.jsx("span", {
                      className: "infinite-running-sub",
                      children: d === "inf-sequential" ? s === "pt" ? `Gerando in\xEDcio aleat\xF3rio + ${j.toLocaleString()} sequenciais por lote...` : s === "es" ? `Inicio aleatorio + ${j.toLocaleString()} secuenciales por lote...` : `Random start + ${j.toLocaleString()} sequential keys per batch...` : s === "pt" ? "Testando chaves aleat\xF3rias continuamente..." : s === "es" ? "Probando claves aleatorias continuamente..." : "Testing random keys continuously..."
                    })
                  ]
                }),
                (d === "inf-sequential" || d === "inf-random") && H.length > 0 && e.jsxs("div", {
                  className: "recent-keys-wrap",
                  children: [
                    e.jsx("p", {
                      className: "recent-keys-title",
                      children: d === "inf-sequential" ? s === "pt" ? "\xDAltimas chaves de in\xEDcio (Start) geradas:" : s === "es" ? "\xDAltimas claves de inicio (Start) generadas:" : "Latest starting keys generated:" : s === "pt" ? "\xDAltimas chaves aleat\xF3rias testadas:" : s === "es" ? "\xDAltimas claves aleatorias probadas:" : "Latest random keys tested:"
                    }),
                    e.jsx("div", {
                      className: "recent-keys-list",
                      children: H.map((a, n) => e.jsx("div", {
                        className: "recent-key-item",
                        style: {
                          opacity: 1 - n * 0.15
                        },
                        children: a
                      }, n))
                    })
                  ]
                }),
                e.jsxs("button", {
                  className: "stop-button",
                  onClick: qe,
                  children: [
                    "\u23F9 ",
                    s === "pt" ? "Parar" : s === "es" ? "Detener" : "Stop"
                  ]
                })
              ]
            }),
            i === "normal" && I !== null && e.jsxs("div", {
              className: "result-box",
              style: {
                marginTop: "0.5rem"
              },
              children: [
                e.jsx("span", {
                  className: "label",
                  children: s === "pt" ? "Ponto de partida testado" : s === "es" ? "Punto de inicio probado" : "Starting key tested"
                }),
                e.jsx("span", {
                  className: "value",
                  children: I
                })
              ]
            }),
            i === "success" && B && e.jsxs("div", {
              className: "success-banner",
              children: [
                e.jsxs("div", {
                  className: "success-header",
                  children: [
                    e.jsx("span", {
                      className: "success-icon",
                      children: "\u{1F3C6}"
                    }),
                    e.jsx("h2", {
                      children: c["puzzle-state-success-title"]
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "result-box",
                  style: {
                    marginTop: "1rem"
                  },
                  children: [
                    e.jsx("span", {
                      className: "label",
                      children: "Private Key (hex)"
                    }),
                    e.jsx("span", {
                      className: "value",
                      children: B.hex
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "result-box",
                  style: {
                    marginTop: "0.75rem"
                  },
                  children: [
                    e.jsx("span", {
                      className: "label",
                      children: "WIF \u2014 Import into your wallet"
                    }),
                    e.jsx("span", {
                      className: "value",
                      children: B.wif
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "success-warning",
                  children: [
                    "\u26A0\uFE0F",
                    " ",
                    s === "pt" ? "N\xC3O fa\xE7a uma transa\xE7\xE3o direta! Leia sobre Kangaroos antes de mover os BTC." : s === "es" ? "\xA1NO hagas una transacci\xF3n directa! Lee sobre Kangaroos antes de mover los BTC." : "DO NOT make a direct transaction! Read about Kangaroos before moving the BTC.",
                    " ",
                    e.jsx("a", {
                      href: s === "pt" ? "./education-pt.html" : s === "es" ? "./education-es.html" : "./education.html",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: s === "pt" ? "Saiba mais \u2192" : s === "es" ? "Saber m\xE1s \u2192" : "Learn more \u2192"
                    })
                  ]
                }),
                e.jsxs("a", {
                  className: "tx-builder-link",
                  href: "tx-builder.html",
                  onClick: (a) => {
                    a.preventDefault();
                    try {
                      sessionStorage.setItem("lottery_found_wif", B.wif), window.location.assign("tx-builder.html");
                    } catch {
                    }
                  },
                  children: [
                    "\u26A1",
                    " ",
                    s === "pt" ? "Gerar transa\xE7\xE3o para MARA Slipstream" : s === "es" ? "Generar transacci\xF3n para MARA Slipstream" : "Build Transaction for MARA Slipstream"
                  ]
                })
              ]
            }),
            we > 0 && i !== "success" && e.jsxs("div", {
              className: "attempt-counter",
              children: [
                i === "running" && G > 0 ? e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("span", {
                      children: s === "pt" ? "Velocidade:" : s === "es" ? "Velocidad:" : "Speed:"
                    }),
                    e.jsxs("strong", {
                      children: [
                        G.toLocaleString(),
                        " keys/s"
                      ]
                    }),
                    e.jsx("span", {
                      className: "counter-dot"
                    })
                  ]
                }) : null,
                e.jsx("span", {
                  children: s === "pt" ? "Chaves testadas:" : s === "es" ? "Claves probadas:" : "Keys tested:"
                }),
                e.jsx("strong", {
                  children: ze.toLocaleString()
                })
              ]
            })
          ]
        }),
        e.jsxs("p", {
          className: "puzzle-info",
          children: [
            c.puzzleInfoParts.before71,
            e.jsx("strong", {
              children: c.puzzleInfoParts.bold71
            }),
            c.puzzleInfoParts.middle,
            e.jsx("strong", {
              children: c.puzzleInfoParts.bold74
            }),
            c.puzzleInfoParts.after
          ]
        }),
        e.jsxs("div", {
          className: "action-links",
          children: [
            e.jsx("a", {
              href: s === "pt" ? "./education-pt.html" : s === "es" ? "./education-es.html" : "./education.html",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "action-link-btn",
              children: c["btn-education"]
            }),
            e.jsx("a", {
              href: "key-anatomy.html",
              onClick: (a) => {
                a.preventDefault(), ge("key-anatomy.html");
              },
              className: "action-link-btn",
              children: c["btn-anatomy"]
            }),
            e.jsx("a", {
              href: "tx-builder.html",
              onClick: (a) => {
                a.preventDefault(), ge("tx-builder.html");
              },
              className: "action-link-btn",
              children: c["btn-txb"]
            })
          ]
        }),
        e.jsx("div", {
          className: "footer",
          style: {
            marginTop: "3rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            fontSize: "13px",
            color: "rgba(255, 255, 255, 0.45)",
            textAlign: "center"
          },
          children: c.footer
        })
      ]
    });
  }
  Ge.createRoot(document.getElementById("root")).render(e.jsx(t.StrictMode, {
    children: e.jsx(He, {})
  }));
});
