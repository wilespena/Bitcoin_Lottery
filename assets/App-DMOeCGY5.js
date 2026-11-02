var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let KS, GS, HS, YS, ob, ZS, sb, JS, $S, $1, XS, jS, qS, eb, tb, rb, nb, ab, ib, WS, DS, QS;
let __tla = (async () => {
  (function() {
    const d = document.createElement("link").relList;
    if (d && d.supports && d.supports("modulepreload")) return;
    for (const _ of document.querySelectorAll('link[rel="modulepreload"]')) f(_);
    new MutationObserver((_) => {
      for (const l of _) if (l.type === "childList") for (const u of l.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && f(u);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function c(_) {
      const l = {};
      return _.integrity && (l.integrity = _.integrity), _.referrerPolicy && (l.referrerPolicy = _.referrerPolicy), _.crossOrigin === "use-credentials" ? l.credentials = "include" : _.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l;
    }
    function f(_) {
      if (_.ep) return;
      _.ep = true;
      const l = c(_);
      fetch(_.href, l);
    }
  })();
  var sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function Jm(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
  }
  var Tl = {
    exports: {}
  }, Uo = {}, xl = {
    exports: {}
  }, $e = {};
  var Zp;
  function z1() {
    if (Zp) return $e;
    Zp = 1;
    var n = /* @__PURE__ */ Symbol.for("react.element"), d = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), _ = /* @__PURE__ */ Symbol.for("react.profiler"), l = /* @__PURE__ */ Symbol.for("react.provider"), u = /* @__PURE__ */ Symbol.for("react.context"), o = /* @__PURE__ */ Symbol.for("react.forward_ref"), s = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), a = /* @__PURE__ */ Symbol.for("react.lazy"), E = Symbol.iterator;
    function v(V) {
      return V === null || typeof V != "object" ? null : (V = E && V[E] || V["@@iterator"], typeof V == "function" ? V : null);
    }
    var w = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, S = Object.assign, p = {};
    function A(V, ce, ee) {
      this.props = V, this.context = ce, this.refs = p, this.updater = ee || w;
    }
    A.prototype.isReactComponent = {}, A.prototype.setState = function(V, ce) {
      if (typeof V != "object" && typeof V != "function" && V != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, V, ce, "setState");
    }, A.prototype.forceUpdate = function(V) {
      this.updater.enqueueForceUpdate(this, V, "forceUpdate");
    };
    function x() {
    }
    x.prototype = A.prototype;
    function k(V, ce, ee) {
      this.props = V, this.context = ce, this.refs = p, this.updater = ee || w;
    }
    var B = k.prototype = new x();
    B.constructor = k, S(B, A.prototype), B.isPureReactComponent = true;
    var O = Array.isArray, U = Object.prototype.hasOwnProperty, C = {
      current: null
    }, K = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    function X(V, ce, ee) {
      var le, me = {}, $ = null, R = null;
      if (ce != null) for (le in ce.ref !== void 0 && (R = ce.ref), ce.key !== void 0 && ($ = "" + ce.key), ce) U.call(ce, le) && !K.hasOwnProperty(le) && (me[le] = ce[le]);
      var N = arguments.length - 2;
      if (N === 1) me.children = ee;
      else if (1 < N) {
        for (var re = Array(N), se = 0; se < N; se++) re[se] = arguments[se + 2];
        me.children = re;
      }
      if (V && V.defaultProps) for (le in N = V.defaultProps, N) me[le] === void 0 && (me[le] = N[le]);
      return {
        $$typeof: n,
        type: V,
        key: $,
        ref: R,
        props: me,
        _owner: C.current
      };
    }
    function Q(V, ce) {
      return {
        $$typeof: n,
        type: V.type,
        key: ce,
        ref: V.ref,
        props: V.props,
        _owner: V._owner
      };
    }
    function ae(V) {
      return typeof V == "object" && V !== null && V.$$typeof === n;
    }
    function Ee(V) {
      var ce = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + V.replace(/[=:]/g, function(ee) {
        return ce[ee];
      });
    }
    var W = /\/+/g;
    function ye(V, ce) {
      return typeof V == "object" && V !== null && V.key != null ? Ee("" + V.key) : ce.toString(36);
    }
    function Te(V, ce, ee, le, me) {
      var $ = typeof V;
      ($ === "undefined" || $ === "boolean") && (V = null);
      var R = false;
      if (V === null) R = true;
      else switch ($) {
        case "string":
        case "number":
          R = true;
          break;
        case "object":
          switch (V.$$typeof) {
            case n:
            case d:
              R = true;
          }
      }
      if (R) return R = V, me = me(R), V = le === "" ? "." + ye(R, 0) : le, O(me) ? (ee = "", V != null && (ee = V.replace(W, "$&/") + "/"), Te(me, ce, ee, "", function(se) {
        return se;
      })) : me != null && (ae(me) && (me = Q(me, ee + (!me.key || R && R.key === me.key ? "" : ("" + me.key).replace(W, "$&/") + "/") + V)), ce.push(me)), 1;
      if (R = 0, le = le === "" ? "." : le + ":", O(V)) for (var N = 0; N < V.length; N++) {
        $ = V[N];
        var re = le + ye($, N);
        R += Te($, ce, ee, re, me);
      }
      else if (re = v(V), typeof re == "function") for (V = re.call(V), N = 0; !($ = V.next()).done; ) $ = $.value, re = le + ye($, N++), R += Te($, ce, ee, re, me);
      else if ($ === "object") throw ce = String(V), Error("Objects are not valid as a React child (found: " + (ce === "[object Object]" ? "object with keys {" + Object.keys(V).join(", ") + "}" : ce) + "). If you meant to render a collection of children, use an array instead.");
      return R;
    }
    function Ie(V, ce, ee) {
      if (V == null) return V;
      var le = [], me = 0;
      return Te(V, le, "", "", function($) {
        return ce.call(ee, $, me++);
      }), le;
    }
    function Re(V) {
      if (V._status === -1) {
        var ce = V._result;
        ce = ce(), ce.then(function(ee) {
          (V._status === 0 || V._status === -1) && (V._status = 1, V._result = ee);
        }, function(ee) {
          (V._status === 0 || V._status === -1) && (V._status = 2, V._result = ee);
        }), V._status === -1 && (V._status = 0, V._result = ce);
      }
      if (V._status === 1) return V._result.default;
      throw V._result;
    }
    var te = {
      current: null
    }, D = {
      transition: null
    }, G = {
      ReactCurrentDispatcher: te,
      ReactCurrentBatchConfig: D,
      ReactCurrentOwner: C
    };
    function Z() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    return $e.Children = {
      map: Ie,
      forEach: function(V, ce, ee) {
        Ie(V, function() {
          ce.apply(this, arguments);
        }, ee);
      },
      count: function(V) {
        var ce = 0;
        return Ie(V, function() {
          ce++;
        }), ce;
      },
      toArray: function(V) {
        return Ie(V, function(ce) {
          return ce;
        }) || [];
      },
      only: function(V) {
        if (!ae(V)) throw Error("React.Children.only expected to receive a single React element child.");
        return V;
      }
    }, $e.Component = A, $e.Fragment = c, $e.Profiler = _, $e.PureComponent = k, $e.StrictMode = f, $e.Suspense = s, $e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G, $e.act = Z, $e.cloneElement = function(V, ce, ee) {
      if (V == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + V + ".");
      var le = S({}, V.props), me = V.key, $ = V.ref, R = V._owner;
      if (ce != null) {
        if (ce.ref !== void 0 && ($ = ce.ref, R = C.current), ce.key !== void 0 && (me = "" + ce.key), V.type && V.type.defaultProps) var N = V.type.defaultProps;
        for (re in ce) U.call(ce, re) && !K.hasOwnProperty(re) && (le[re] = ce[re] === void 0 && N !== void 0 ? N[re] : ce[re]);
      }
      var re = arguments.length - 2;
      if (re === 1) le.children = ee;
      else if (1 < re) {
        N = Array(re);
        for (var se = 0; se < re; se++) N[se] = arguments[se + 2];
        le.children = N;
      }
      return {
        $$typeof: n,
        type: V.type,
        key: me,
        ref: $,
        props: le,
        _owner: R
      };
    }, $e.createContext = function(V) {
      return V = {
        $$typeof: u,
        _currentValue: V,
        _currentValue2: V,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
      }, V.Provider = {
        $$typeof: l,
        _context: V
      }, V.Consumer = V;
    }, $e.createElement = X, $e.createFactory = function(V) {
      var ce = X.bind(null, V);
      return ce.type = V, ce;
    }, $e.createRef = function() {
      return {
        current: null
      };
    }, $e.forwardRef = function(V) {
      return {
        $$typeof: o,
        render: V
      };
    }, $e.isValidElement = ae, $e.lazy = function(V) {
      return {
        $$typeof: a,
        _payload: {
          _status: -1,
          _result: V
        },
        _init: Re
      };
    }, $e.memo = function(V, ce) {
      return {
        $$typeof: g,
        type: V,
        compare: ce === void 0 ? null : ce
      };
    }, $e.startTransition = function(V) {
      var ce = D.transition;
      D.transition = {};
      try {
        V();
      } finally {
        D.transition = ce;
      }
    }, $e.unstable_act = Z, $e.useCallback = function(V, ce) {
      return te.current.useCallback(V, ce);
    }, $e.useContext = function(V) {
      return te.current.useContext(V);
    }, $e.useDebugValue = function() {
    }, $e.useDeferredValue = function(V) {
      return te.current.useDeferredValue(V);
    }, $e.useEffect = function(V, ce) {
      return te.current.useEffect(V, ce);
    }, $e.useId = function() {
      return te.current.useId();
    }, $e.useImperativeHandle = function(V, ce, ee) {
      return te.current.useImperativeHandle(V, ce, ee);
    }, $e.useInsertionEffect = function(V, ce) {
      return te.current.useInsertionEffect(V, ce);
    }, $e.useLayoutEffect = function(V, ce) {
      return te.current.useLayoutEffect(V, ce);
    }, $e.useMemo = function(V, ce) {
      return te.current.useMemo(V, ce);
    }, $e.useReducer = function(V, ce, ee) {
      return te.current.useReducer(V, ce, ee);
    }, $e.useRef = function(V) {
      return te.current.useRef(V);
    }, $e.useState = function(V) {
      return te.current.useState(V);
    }, $e.useSyncExternalStore = function(V, ce, ee) {
      return te.current.useSyncExternalStore(V, ce, ee);
    }, $e.useTransition = function() {
      return te.current.useTransition();
    }, $e.version = "18.3.1", $e;
  }
  var $p;
  function $c() {
    return $p || ($p = 1, xl.exports = z1()), xl.exports;
  }
  var e0;
  function V1() {
    if (e0) return Uo;
    e0 = 1;
    var n = $c(), d = /* @__PURE__ */ Symbol.for("react.element"), c = /* @__PURE__ */ Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, _ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    function u(o, s, g) {
      var a, E = {}, v = null, w = null;
      g !== void 0 && (v = "" + g), s.key !== void 0 && (v = "" + s.key), s.ref !== void 0 && (w = s.ref);
      for (a in s) f.call(s, a) && !l.hasOwnProperty(a) && (E[a] = s[a]);
      if (o && o.defaultProps) for (a in s = o.defaultProps, s) E[a] === void 0 && (E[a] = s[a]);
      return {
        $$typeof: d,
        type: o,
        key: v,
        ref: w,
        props: E,
        _owner: _.current
      };
    }
    return Uo.Fragment = c, Uo.jsx = u, Uo.jsxs = u, Uo;
  }
  var t0;
  function G1() {
    return t0 || (t0 = 1, Tl.exports = V1()), Tl.exports;
  }
  let ys, Pl, ar, kl, Al;
  jS = G1();
  WS = $c();
  ys = {};
  Pl = {
    exports: {}
  };
  ar = {};
  kl = {
    exports: {}
  };
  Al = {};
  var r0;
  function X1() {
    return r0 || (r0 = 1, (function(n) {
      function d(D, G) {
        var Z = D.length;
        D.push(G);
        e: for (; 0 < Z; ) {
          var V = Z - 1 >>> 1, ce = D[V];
          if (0 < _(ce, G)) D[V] = G, D[Z] = ce, Z = V;
          else break e;
        }
      }
      function c(D) {
        return D.length === 0 ? null : D[0];
      }
      function f(D) {
        if (D.length === 0) return null;
        var G = D[0], Z = D.pop();
        if (Z !== G) {
          D[0] = Z;
          e: for (var V = 0, ce = D.length, ee = ce >>> 1; V < ee; ) {
            var le = 2 * (V + 1) - 1, me = D[le], $ = le + 1, R = D[$];
            if (0 > _(me, Z)) $ < ce && 0 > _(R, me) ? (D[V] = R, D[$] = Z, V = $) : (D[V] = me, D[le] = Z, V = le);
            else if ($ < ce && 0 > _(R, Z)) D[V] = R, D[$] = Z, V = $;
            else break e;
          }
        }
        return G;
      }
      function _(D, G) {
        var Z = D.sortIndex - G.sortIndex;
        return Z !== 0 ? Z : D.id - G.id;
      }
      if (typeof performance == "object" && typeof performance.now == "function") {
        var l = performance;
        n.unstable_now = function() {
          return l.now();
        };
      } else {
        var u = Date, o = u.now();
        n.unstable_now = function() {
          return u.now() - o;
        };
      }
      var s = [], g = [], a = 1, E = null, v = 3, w = false, S = false, p = false, A = typeof setTimeout == "function" ? setTimeout : null, x = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function B(D) {
        for (var G = c(g); G !== null; ) {
          if (G.callback === null) f(g);
          else if (G.startTime <= D) f(g), G.sortIndex = G.expirationTime, d(s, G);
          else break;
          G = c(g);
        }
      }
      function O(D) {
        if (p = false, B(D), !S) if (c(s) !== null) S = true, Re(U);
        else {
          var G = c(g);
          G !== null && te(O, G.startTime - D);
        }
      }
      function U(D, G) {
        S = false, p && (p = false, x(X), X = -1), w = true;
        var Z = v;
        try {
          for (B(G), E = c(s); E !== null && (!(E.expirationTime > G) || D && !Ee()); ) {
            var V = E.callback;
            if (typeof V == "function") {
              E.callback = null, v = E.priorityLevel;
              var ce = V(E.expirationTime <= G);
              G = n.unstable_now(), typeof ce == "function" ? E.callback = ce : E === c(s) && f(s), B(G);
            } else f(s);
            E = c(s);
          }
          if (E !== null) var ee = true;
          else {
            var le = c(g);
            le !== null && te(O, le.startTime - G), ee = false;
          }
          return ee;
        } finally {
          E = null, v = Z, w = false;
        }
      }
      var C = false, K = null, X = -1, Q = 5, ae = -1;
      function Ee() {
        return !(n.unstable_now() - ae < Q);
      }
      function W() {
        if (K !== null) {
          var D = n.unstable_now();
          ae = D;
          var G = true;
          try {
            G = K(true, D);
          } finally {
            G ? ye() : (C = false, K = null);
          }
        } else C = false;
      }
      var ye;
      if (typeof k == "function") ye = function() {
        k(W);
      };
      else if (typeof MessageChannel < "u") {
        var Te = new MessageChannel(), Ie = Te.port2;
        Te.port1.onmessage = W, ye = function() {
          Ie.postMessage(null);
        };
      } else ye = function() {
        A(W, 0);
      };
      function Re(D) {
        K = D, C || (C = true, ye());
      }
      function te(D, G) {
        X = A(function() {
          D(n.unstable_now());
        }, G);
      }
      n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(D) {
        D.callback = null;
      }, n.unstable_continueExecution = function() {
        S || w || (S = true, Re(U));
      }, n.unstable_forceFrameRate = function(D) {
        0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < D ? Math.floor(1e3 / D) : 5;
      }, n.unstable_getCurrentPriorityLevel = function() {
        return v;
      }, n.unstable_getFirstCallbackNode = function() {
        return c(s);
      }, n.unstable_next = function(D) {
        switch (v) {
          case 1:
          case 2:
          case 3:
            var G = 3;
            break;
          default:
            G = v;
        }
        var Z = v;
        v = G;
        try {
          return D();
        } finally {
          v = Z;
        }
      }, n.unstable_pauseExecution = function() {
      }, n.unstable_requestPaint = function() {
      }, n.unstable_runWithPriority = function(D, G) {
        switch (D) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            D = 3;
        }
        var Z = v;
        v = D;
        try {
          return G();
        } finally {
          v = Z;
        }
      }, n.unstable_scheduleCallback = function(D, G, Z) {
        var V = n.unstable_now();
        switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? V + Z : V) : Z = V, D) {
          case 1:
            var ce = -1;
            break;
          case 2:
            ce = 250;
            break;
          case 5:
            ce = 1073741823;
            break;
          case 4:
            ce = 1e4;
            break;
          default:
            ce = 5e3;
        }
        return ce = Z + ce, D = {
          id: a++,
          callback: G,
          priorityLevel: D,
          startTime: Z,
          expirationTime: ce,
          sortIndex: -1
        }, Z > V ? (D.sortIndex = Z, d(g, D), c(s) === null && D === c(g) && (p ? (x(X), X = -1) : p = true, te(O, Z - V))) : (D.sortIndex = ce, d(s, D), S || w || (S = true, Re(U))), D;
      }, n.unstable_shouldYield = Ee, n.unstable_wrapCallback = function(D) {
        var G = v;
        return function() {
          var Z = v;
          v = G;
          try {
            return D.apply(this, arguments);
          } finally {
            v = Z;
          }
        };
      };
    })(Al)), Al;
  }
  var n0;
  function Y1() {
    return n0 || (n0 = 1, kl.exports = X1()), kl.exports;
  }
  var i0;
  function Q1() {
    if (i0) return ar;
    i0 = 1;
    var n = $c(), d = Y1();
    function c(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var f = /* @__PURE__ */ new Set(), _ = {};
    function l(e, t) {
      u(e, t), u(e + "Capture", t);
    }
    function u(e, t) {
      for (_[e] = t, e = 0; e < t.length; e++) f.add(t[e]);
    }
    var o = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), s = Object.prototype.hasOwnProperty, g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, E = {};
    function v(e) {
      return s.call(E, e) ? true : s.call(a, e) ? false : g.test(e) ? E[e] = true : (a[e] = true, false);
    }
    function w(e, t, r, i) {
      if (r !== null && r.type === 0) return false;
      switch (typeof t) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          return i ? false : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
          return false;
      }
    }
    function S(e, t, r, i) {
      if (t === null || typeof t > "u" || w(e, t, r, i)) return true;
      if (i) return false;
      if (r !== null) switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === false;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
      return false;
    }
    function p(e, t, r, i, y, T, F) {
      this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = i, this.attributeNamespace = y, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = T, this.removeEmptyString = F;
    }
    var A = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
      A[e] = new p(e, 0, false, e, null, false, false);
    }), [
      [
        "acceptCharset",
        "accept-charset"
      ],
      [
        "className",
        "class"
      ],
      [
        "htmlFor",
        "for"
      ],
      [
        "httpEquiv",
        "http-equiv"
      ]
    ].forEach(function(e) {
      var t = e[0];
      A[t] = new p(t, 1, false, e[1], null, false, false);
    }), [
      "contentEditable",
      "draggable",
      "spellCheck",
      "value"
    ].forEach(function(e) {
      A[e] = new p(e, 2, false, e.toLowerCase(), null, false, false);
    }), [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha"
    ].forEach(function(e) {
      A[e] = new p(e, 2, false, e, null, false, false);
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
      A[e] = new p(e, 3, false, e.toLowerCase(), null, false, false);
    }), [
      "checked",
      "multiple",
      "muted",
      "selected"
    ].forEach(function(e) {
      A[e] = new p(e, 3, true, e, null, false, false);
    }), [
      "capture",
      "download"
    ].forEach(function(e) {
      A[e] = new p(e, 4, false, e, null, false, false);
    }), [
      "cols",
      "rows",
      "size",
      "span"
    ].forEach(function(e) {
      A[e] = new p(e, 6, false, e, null, false, false);
    }), [
      "rowSpan",
      "start"
    ].forEach(function(e) {
      A[e] = new p(e, 5, false, e.toLowerCase(), null, false, false);
    });
    var x = /[\-:]([a-z])/g;
    function k(e) {
      return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
      var t = e.replace(x, k);
      A[t] = new p(t, 1, false, e, null, false, false);
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
      var t = e.replace(x, k);
      A[t] = new p(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
    ].forEach(function(e) {
      var t = e.replace(x, k);
      A[t] = new p(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
    }), [
      "tabIndex",
      "crossOrigin"
    ].forEach(function(e) {
      A[e] = new p(e, 1, false, e.toLowerCase(), null, false, false);
    }), A.xlinkHref = new p("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), [
      "src",
      "href",
      "action",
      "formAction"
    ].forEach(function(e) {
      A[e] = new p(e, 1, false, e.toLowerCase(), null, true, true);
    });
    function B(e, t, r, i) {
      var y = A.hasOwnProperty(t) ? A[t] : null;
      (y !== null ? y.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (S(t, r, y, i) && (r = null), i || y === null ? v(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : y.mustUseProperty ? e[y.propertyName] = r === null ? y.type === 3 ? false : "" : r : (t = y.attributeName, i = y.attributeNamespace, r === null ? e.removeAttribute(t) : (y = y.type, r = y === 3 || y === 4 && r === true ? "" : "" + r, i ? e.setAttributeNS(i, t, r) : e.setAttribute(t, r))));
    }
    var O = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, U = /* @__PURE__ */ Symbol.for("react.element"), C = /* @__PURE__ */ Symbol.for("react.portal"), K = /* @__PURE__ */ Symbol.for("react.fragment"), X = /* @__PURE__ */ Symbol.for("react.strict_mode"), Q = /* @__PURE__ */ Symbol.for("react.profiler"), ae = /* @__PURE__ */ Symbol.for("react.provider"), Ee = /* @__PURE__ */ Symbol.for("react.context"), W = /* @__PURE__ */ Symbol.for("react.forward_ref"), ye = /* @__PURE__ */ Symbol.for("react.suspense"), Te = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ie = /* @__PURE__ */ Symbol.for("react.memo"), Re = /* @__PURE__ */ Symbol.for("react.lazy"), te = /* @__PURE__ */ Symbol.for("react.offscreen"), D = Symbol.iterator;
    function G(e) {
      return e === null || typeof e != "object" ? null : (e = D && e[D] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var Z = Object.assign, V;
    function ce(e) {
      if (V === void 0) try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        V = t && t[1] || "";
      }
      return `
` + V + e;
    }
    var ee = false;
    function le(e, t) {
      if (!e || ee) return "";
      ee = true;
      var r = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t) if (t = function() {
          throw Error();
        }, Object.defineProperty(t.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(t, []);
          } catch (we) {
            var i = we;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (we) {
            i = we;
          }
          e.call(t.prototype);
        }
        else {
          try {
            throw Error();
          } catch (we) {
            i = we;
          }
          e();
        }
      } catch (we) {
        if (we && i && typeof we.stack == "string") {
          for (var y = we.stack.split(`
`), T = i.stack.split(`
`), F = y.length - 1, J = T.length - 1; 1 <= F && 0 <= J && y[F] !== T[J]; ) J--;
          for (; 1 <= F && 0 <= J; F--, J--) if (y[F] !== T[J]) {
            if (F !== 1 || J !== 1) do
              if (F--, J--, 0 > J || y[F] !== T[J]) {
                var oe = `
` + y[F].replace(" at new ", " at ");
                return e.displayName && oe.includes("<anonymous>") && (oe = oe.replace("<anonymous>", e.displayName)), oe;
              }
            while (1 <= F && 0 <= J);
            break;
          }
        }
      } finally {
        ee = false, Error.prepareStackTrace = r;
      }
      return (e = e ? e.displayName || e.name : "") ? ce(e) : "";
    }
    function me(e) {
      switch (e.tag) {
        case 5:
          return ce(e.type);
        case 16:
          return ce("Lazy");
        case 13:
          return ce("Suspense");
        case 19:
          return ce("SuspenseList");
        case 0:
        case 2:
        case 15:
          return e = le(e.type, false), e;
        case 11:
          return e = le(e.type.render, false), e;
        case 1:
          return e = le(e.type, true), e;
        default:
          return "";
      }
    }
    function $(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case K:
          return "Fragment";
        case C:
          return "Portal";
        case Q:
          return "Profiler";
        case X:
          return "StrictMode";
        case ye:
          return "Suspense";
        case Te:
          return "SuspenseList";
      }
      if (typeof e == "object") switch (e.$$typeof) {
        case Ee:
          return (e.displayName || "Context") + ".Consumer";
        case ae:
          return (e._context.displayName || "Context") + ".Provider";
        case W:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Ie:
          return t = e.displayName || null, t !== null ? t : $(e.type) || "Memo";
        case Re:
          t = e._payload, e = e._init;
          try {
            return $(e(t));
          } catch {
          }
      }
      return null;
    }
    function R(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (t.displayName || "Context") + ".Consumer";
        case 10:
          return (t._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return $(t);
        case 8:
          return t === X ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof t == "function") return t.displayName || t.name || null;
          if (typeof t == "string") return t;
      }
      return null;
    }
    function N(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function re(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function se(e) {
      var t = re(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
        var y = r.get, T = r.set;
        return Object.defineProperty(e, t, {
          configurable: true,
          get: function() {
            return y.call(this);
          },
          set: function(F) {
            i = "" + F, T.call(this, F);
          }
        }), Object.defineProperty(e, t, {
          enumerable: r.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(F) {
            i = "" + F;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function H(e) {
      e._valueTracker || (e._valueTracker = se(e));
    }
    function j(e) {
      if (!e) return false;
      var t = e._valueTracker;
      if (!t) return true;
      var r = t.getValue(), i = "";
      return e && (i = re(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== r ? (t.setValue(e), true) : false;
    }
    function pe(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Pe(e, t) {
      var r = t.checked;
      return Z({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? e._wrapperState.initialChecked
      });
    }
    function qe(e, t) {
      var r = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
      r = N(t.value != null ? t.value : r), e._wrapperState = {
        initialChecked: i,
        initialValue: r,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
      };
    }
    function Ce(e, t) {
      t = t.checked, t != null && B(e, "checked", t, false);
    }
    function Ke(e, t) {
      Ce(e, t);
      var r = N(t.value), i = t.type;
      if (r != null) i === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
      else if (i === "submit" || i === "reset") {
        e.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Se(e, t.type, r) : t.hasOwnProperty("defaultValue") && Se(e, t.type, N(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function ct(e, t, r) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var i = t.type;
        if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
      }
      r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
    }
    function Se(e, t, r) {
      (t !== "number" || pe(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
    }
    var at = Array.isArray;
    function Qe(e, t, r, i) {
      if (e = e.options, t) {
        t = {};
        for (var y = 0; y < r.length; y++) t["$" + r[y]] = true;
        for (r = 0; r < e.length; r++) y = t.hasOwnProperty("$" + e[r].value), e[r].selected !== y && (e[r].selected = y), y && i && (e[r].defaultSelected = true);
      } else {
        for (r = "" + N(r), t = null, y = 0; y < e.length; y++) {
          if (e[y].value === r) {
            e[y].selected = true, i && (e[y].defaultSelected = true);
            return;
          }
          t !== null || e[y].disabled || (t = e[y]);
        }
        t !== null && (t.selected = true);
      }
    }
    function Ve(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(c(91));
      return Z({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
      });
    }
    function Ze(e, t) {
      var r = t.value;
      if (r == null) {
        if (r = t.children, t = t.defaultValue, r != null) {
          if (t != null) throw Error(c(92));
          if (at(r)) {
            if (1 < r.length) throw Error(c(93));
            r = r[0];
          }
          t = r;
        }
        t == null && (t = ""), r = t;
      }
      e._wrapperState = {
        initialValue: N(r)
      };
    }
    function nt(e, t) {
      var r = N(t.value), i = N(t.defaultValue);
      r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), i != null && (e.defaultValue = "" + i);
    }
    function st(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function Ut(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function Pt(e, t) {
      return e == null || e === "http://www.w3.org/1999/xhtml" ? Ut(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var he, M = (function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, i, y) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, r, i, y);
        });
      } : e;
    })(function(e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
      else {
        for (he = he || document.createElement("div"), he.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = he.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
    function b(e, t) {
      if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
          r.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var h = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    }, m = [
      "Webkit",
      "ms",
      "Moz",
      "O"
    ];
    Object.keys(h).forEach(function(e) {
      m.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), h[t] = h[e];
      });
    });
    function L(e, t, r) {
      return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || h.hasOwnProperty(e) && h[e] ? ("" + t).trim() : t + "px";
    }
    function z(e, t) {
      e = e.style;
      for (var r in t) if (t.hasOwnProperty(r)) {
        var i = r.indexOf("--") === 0, y = L(r, t[r], i);
        r === "float" && (r = "cssFloat"), i ? e.setProperty(r, y) : e[r] = y;
      }
    }
    var ie = Z({
      menuitem: true
    }, {
      area: true,
      base: true,
      br: true,
      col: true,
      embed: true,
      hr: true,
      img: true,
      input: true,
      keygen: true,
      link: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true
    });
    function de(e, t) {
      if (t) {
        if (ie[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(c(137, e));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(c(60));
          if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(c(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(c(62));
      }
    }
    function Oe(e, t) {
      if (e.indexOf("-") === -1) return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var Le = null;
    function He(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var Xe = null, Ye = null, et = null;
    function kt(e) {
      if (e = _o(e)) {
        if (typeof Xe != "function") throw Error(c(280));
        var t = e.stateNode;
        t && (t = Ba(t), Xe(e.stateNode, e.type, t));
      }
    }
    function gi(e) {
      Ye ? et ? et.push(e) : et = [
        e
      ] : Ye = e;
    }
    function ua() {
      if (Ye) {
        var e = Ye, t = et;
        if (et = Ye = null, kt(e), t) for (e = 0; e < t.length; e++) kt(t[e]);
      }
    }
    function Tr(e, t) {
      return e(t);
    }
    function la() {
    }
    var q = false;
    function P(e, t, r) {
      if (q) return e(t, r);
      q = true;
      try {
        return Tr(e, t, r);
      } finally {
        q = false, (Ye !== null || et !== null) && (la(), ua());
      }
    }
    function I(e, t) {
      var r = e.stateNode;
      if (r === null) return null;
      var i = Ba(r);
      if (i === null) return null;
      r = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = false;
      }
      if (e) return null;
      if (r && typeof r != "function") throw Error(c(231, t, typeof r));
      return r;
    }
    var Y = false;
    if (o) try {
      var fe = {};
      Object.defineProperty(fe, "passive", {
        get: function() {
          Y = true;
        }
      }), window.addEventListener("test", fe, fe), window.removeEventListener("test", fe, fe);
    } catch {
      Y = false;
    }
    function _e(e, t, r, i, y, T, F, J, oe) {
      var we = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(r, we);
      } catch (ke) {
        this.onError(ke);
      }
    }
    var be = false, Je = null, ht = false, dt = null, wt = {
      onError: function(e) {
        be = true, Je = e;
      }
    };
    function lt(e, t, r, i, y, T, F, J, oe) {
      be = false, Je = null, _e.apply(wt, arguments);
    }
    function ew(e, t, r, i, y, T, F, J, oe) {
      if (lt.apply(this, arguments), be) {
        if (be) {
          var we = Je;
          be = false, Je = null;
        } else throw Error(c(198));
        ht || (ht = true, dt = we);
      }
    }
    function Wn(e) {
      var t = e, r = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (r = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? r : null;
    }
    function Ed(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Sd(e) {
      if (Wn(e) !== e) throw Error(c(188));
    }
    function tw(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Wn(e), t === null) throw Error(c(188));
        return t !== e ? null : e;
      }
      for (var r = e, i = t; ; ) {
        var y = r.return;
        if (y === null) break;
        var T = y.alternate;
        if (T === null) {
          if (i = y.return, i !== null) {
            r = i;
            continue;
          }
          break;
        }
        if (y.child === T.child) {
          for (T = y.child; T; ) {
            if (T === r) return Sd(y), e;
            if (T === i) return Sd(y), t;
            T = T.sibling;
          }
          throw Error(c(188));
        }
        if (r.return !== i.return) r = y, i = T;
        else {
          for (var F = false, J = y.child; J; ) {
            if (J === r) {
              F = true, r = y, i = T;
              break;
            }
            if (J === i) {
              F = true, i = y, r = T;
              break;
            }
            J = J.sibling;
          }
          if (!F) {
            for (J = T.child; J; ) {
              if (J === r) {
                F = true, r = T, i = y;
                break;
              }
              if (J === i) {
                F = true, i = T, r = y;
                break;
              }
              J = J.sibling;
            }
            if (!F) throw Error(c(189));
          }
        }
        if (r.alternate !== i) throw Error(c(190));
      }
      if (r.tag !== 3) throw Error(c(188));
      return r.stateNode.current === r ? e : t;
    }
    function bd(e) {
      return e = tw(e), e !== null ? Td(e) : null;
    }
    function Td(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null; ) {
        var t = Td(e);
        if (t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var xd = d.unstable_scheduleCallback, Pd = d.unstable_cancelCallback, rw = d.unstable_shouldYield, nw = d.unstable_requestPaint, At = d.unstable_now, iw = d.unstable_getCurrentPriorityLevel, Ks = d.unstable_ImmediatePriority, kd = d.unstable_UserBlockingPriority, fa = d.unstable_NormalPriority, ow = d.unstable_LowPriority, Ad = d.unstable_IdlePriority, ca = null, Cr = null;
    function aw(e) {
      if (Cr && typeof Cr.onCommitFiberRoot == "function") try {
        Cr.onCommitFiberRoot(ca, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
    }
    var xr = Math.clz32 ? Math.clz32 : lw, sw = Math.log, uw = Math.LN2;
    function lw(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (sw(e) / uw | 0) | 0;
    }
    var da = 64, ha = 4194304;
    function to(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return e & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function pa(e, t) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0, y = e.suspendedLanes, T = e.pingedLanes, F = r & 268435455;
      if (F !== 0) {
        var J = F & ~y;
        J !== 0 ? i = to(J) : (T &= F, T !== 0 && (i = to(T)));
      } else F = r & ~y, F !== 0 ? i = to(F) : T !== 0 && (i = to(T));
      if (i === 0) return 0;
      if (t !== 0 && t !== i && (t & y) === 0 && (y = i & -i, T = t & -t, y >= T || y === 16 && (T & 4194240) !== 0)) return t;
      if ((i & 4) !== 0 && (i |= r & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) r = 31 - xr(t), y = 1 << r, i |= e[r], t &= ~y;
      return i;
    }
    function fw(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function cw(e, t) {
      for (var r = e.suspendedLanes, i = e.pingedLanes, y = e.expirationTimes, T = e.pendingLanes; 0 < T; ) {
        var F = 31 - xr(T), J = 1 << F, oe = y[F];
        oe === -1 ? ((J & r) === 0 || (J & i) !== 0) && (y[F] = fw(J, t)) : oe <= t && (e.expiredLanes |= J), T &= ~J;
      }
    }
    function zs(e) {
      return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Id() {
      var e = da;
      return da <<= 1, (da & 4194240) === 0 && (da = 64), e;
    }
    function Vs(e) {
      for (var t = [], r = 0; 31 > r; r++) t.push(e);
      return t;
    }
    function ro(e, t, r) {
      e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - xr(t), e[t] = r;
    }
    function dw(e, t) {
      var r = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
      var i = e.eventTimes;
      for (e = e.expirationTimes; 0 < r; ) {
        var y = 31 - xr(r), T = 1 << y;
        t[y] = 0, i[y] = -1, e[y] = -1, r &= ~T;
      }
    }
    function Gs(e, t) {
      var r = e.entangledLanes |= t;
      for (e = e.entanglements; r; ) {
        var i = 31 - xr(r), y = 1 << i;
        y & t | e[i] & t && (e[i] |= t), r &= ~y;
      }
    }
    var ft = 0;
    function Bd(e) {
      return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
    }
    var Od, Xs, Rd, Cd, Nd, Ys = false, ya = [], un = null, ln = null, fn = null, no = /* @__PURE__ */ new Map(), io = /* @__PURE__ */ new Map(), cn = [], hw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Ud(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          un = null;
          break;
        case "dragenter":
        case "dragleave":
          ln = null;
          break;
        case "mouseover":
        case "mouseout":
          fn = null;
          break;
        case "pointerover":
        case "pointerout":
          no.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          io.delete(t.pointerId);
      }
    }
    function oo(e, t, r, i, y, T) {
      return e === null || e.nativeEvent !== T ? (e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: i,
        nativeEvent: T,
        targetContainers: [
          y
        ]
      }, t !== null && (t = _o(t), t !== null && Xs(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, y !== null && t.indexOf(y) === -1 && t.push(y), e);
    }
    function pw(e, t, r, i, y) {
      switch (t) {
        case "focusin":
          return un = oo(un, e, t, r, i, y), true;
        case "dragenter":
          return ln = oo(ln, e, t, r, i, y), true;
        case "mouseover":
          return fn = oo(fn, e, t, r, i, y), true;
        case "pointerover":
          var T = y.pointerId;
          return no.set(T, oo(no.get(T) || null, e, t, r, i, y)), true;
        case "gotpointercapture":
          return T = y.pointerId, io.set(T, oo(io.get(T) || null, e, t, r, i, y)), true;
      }
      return false;
    }
    function Fd(e) {
      var t = Kn(e.target);
      if (t !== null) {
        var r = Wn(t);
        if (r !== null) {
          if (t = r.tag, t === 13) {
            if (t = Ed(r), t !== null) {
              e.blockedOn = t, Nd(e.priority, function() {
                Rd(r);
              });
              return;
            }
          } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function ga(e) {
      if (e.blockedOn !== null) return false;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var r = Js(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
          r = e.nativeEvent;
          var i = new r.constructor(r.type, r);
          Le = i, r.target.dispatchEvent(i), Le = null;
        } else return t = _o(r), t !== null && Xs(t), e.blockedOn = r, false;
        t.shift();
      }
      return true;
    }
    function Ld(e, t, r) {
      ga(e) && r.delete(t);
    }
    function yw() {
      Ys = false, un !== null && ga(un) && (un = null), ln !== null && ga(ln) && (ln = null), fn !== null && ga(fn) && (fn = null), no.forEach(Ld), io.forEach(Ld);
    }
    function ao(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Ys || (Ys = true, d.unstable_scheduleCallback(d.unstable_NormalPriority, yw)));
    }
    function so(e) {
      function t(y) {
        return ao(y, e);
      }
      if (0 < ya.length) {
        ao(ya[0], e);
        for (var r = 1; r < ya.length; r++) {
          var i = ya[r];
          i.blockedOn === e && (i.blockedOn = null);
        }
      }
      for (un !== null && ao(un, e), ln !== null && ao(ln, e), fn !== null && ao(fn, e), no.forEach(t), io.forEach(t), r = 0; r < cn.length; r++) i = cn[r], i.blockedOn === e && (i.blockedOn = null);
      for (; 0 < cn.length && (r = cn[0], r.blockedOn === null); ) Fd(r), r.blockedOn === null && cn.shift();
    }
    var mi = O.ReactCurrentBatchConfig, ma = true;
    function gw(e, t, r, i) {
      var y = ft, T = mi.transition;
      mi.transition = null;
      try {
        ft = 1, Qs(e, t, r, i);
      } finally {
        ft = y, mi.transition = T;
      }
    }
    function mw(e, t, r, i) {
      var y = ft, T = mi.transition;
      mi.transition = null;
      try {
        ft = 4, Qs(e, t, r, i);
      } finally {
        ft = y, mi.transition = T;
      }
    }
    function Qs(e, t, r, i) {
      if (ma) {
        var y = Js(e, t, r, i);
        if (y === null) pu(e, t, i, va, r), Ud(e, i);
        else if (pw(y, e, t, r, i)) i.stopPropagation();
        else if (Ud(e, i), t & 4 && -1 < hw.indexOf(e)) {
          for (; y !== null; ) {
            var T = _o(y);
            if (T !== null && Od(T), T = Js(e, t, r, i), T === null && pu(e, t, i, va, r), T === y) break;
            y = T;
          }
          y !== null && i.stopPropagation();
        } else pu(e, t, i, null, r);
      }
    }
    var va = null;
    function Js(e, t, r, i) {
      if (va = null, e = He(i), e = Kn(e), e !== null) if (t = Wn(e), t === null) e = null;
      else if (r = t.tag, r === 13) {
        if (e = Ed(t), e !== null) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
      return va = e, null;
    }
    function Md(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (iw()) {
            case Ks:
              return 1;
            case kd:
              return 4;
            case fa:
            case ow:
              return 16;
            case Ad:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var dn = null, Zs = null, wa = null;
    function Dd() {
      if (wa) return wa;
      var e, t = Zs, r = t.length, i, y = "value" in dn ? dn.value : dn.textContent, T = y.length;
      for (e = 0; e < r && t[e] === y[e]; e++) ;
      var F = r - e;
      for (i = 1; i <= F && t[r - i] === y[T - i]; i++) ;
      return wa = y.slice(e, 1 < i ? 1 - i : void 0);
    }
    function _a(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Ea() {
      return true;
    }
    function Hd() {
      return false;
    }
    function ur(e) {
      function t(r, i, y, T, F) {
        this._reactName = r, this._targetInst = y, this.type = i, this.nativeEvent = T, this.target = F, this.currentTarget = null;
        for (var J in e) e.hasOwnProperty(J) && (r = e[J], this[J] = r ? r(T) : T[J]);
        return this.isDefaultPrevented = (T.defaultPrevented != null ? T.defaultPrevented : T.returnValue === false) ? Ea : Hd, this.isPropagationStopped = Hd, this;
      }
      return Z(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var r = this.nativeEvent;
          r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = false), this.isDefaultPrevented = Ea);
        },
        stopPropagation: function() {
          var r = this.nativeEvent;
          r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = true), this.isPropagationStopped = Ea);
        },
        persist: function() {
        },
        isPersistent: Ea
      }), t;
    }
    var vi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, $s = ur(vi), uo = Z({}, vi, {
      view: 0,
      detail: 0
    }), vw = ur(uo), eu, tu, lo, Sa = Z({}, uo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: nu,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== lo && (lo && e.type === "mousemove" ? (eu = e.screenX - lo.screenX, tu = e.screenY - lo.screenY) : tu = eu = 0, lo = e), eu);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : tu;
      }
    }), qd = ur(Sa), ww = Z({}, Sa, {
      dataTransfer: 0
    }), _w = ur(ww), Ew = Z({}, uo, {
      relatedTarget: 0
    }), ru = ur(Ew), Sw = Z({}, vi, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), bw = ur(Sw), Tw = Z({}, vi, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), xw = ur(Tw), Pw = Z({}, vi, {
      data: 0
    }), jd = ur(Pw), kw = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Aw = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, Iw = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Bw(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Iw[e]) ? !!t[e] : false;
    }
    function nu() {
      return Bw;
    }
    var Ow = Z({}, uo, {
      key: function(e) {
        if (e.key) {
          var t = kw[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = _a(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Aw[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: nu,
      charCode: function(e) {
        return e.type === "keypress" ? _a(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? _a(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Rw = ur(Ow), Cw = Z({}, Sa, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Wd = ur(Cw), Nw = Z({}, uo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: nu
    }), Uw = ur(Nw), Fw = Z({}, vi, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Lw = ur(Fw), Mw = Z({}, Sa, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Dw = ur(Mw), Hw = [
      9,
      13,
      27,
      32
    ], iu = o && "CompositionEvent" in window, fo = null;
    o && "documentMode" in document && (fo = document.documentMode);
    var qw = o && "TextEvent" in window && !fo, Kd = o && (!iu || fo && 8 < fo && 11 >= fo), zd = " ", Vd = false;
    function Gd(e, t) {
      switch (e) {
        case "keyup":
          return Hw.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function Xd(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var wi = false;
    function jw(e, t) {
      switch (e) {
        case "compositionend":
          return Xd(t);
        case "keypress":
          return t.which !== 32 ? null : (Vd = true, zd);
        case "textInput":
          return e = t.data, e === zd && Vd ? null : e;
        default:
          return null;
      }
    }
    function Ww(e, t) {
      if (wi) return e === "compositionend" || !iu && Gd(e, t) ? (e = Dd(), wa = Zs = dn = null, wi = false, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Kd && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var Kw = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function Yd(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Kw[e.type] : t === "textarea";
    }
    function Qd(e, t, r, i) {
      gi(i), t = ka(t, "onChange"), 0 < t.length && (r = new $s("onChange", "change", null, r, i), e.push({
        event: r,
        listeners: t
      }));
    }
    var co = null, ho = null;
    function zw(e) {
      ph(e, 0);
    }
    function ba(e) {
      var t = Ti(e);
      if (j(t)) return e;
    }
    function Vw(e, t) {
      if (e === "change") return t;
    }
    var Jd = false;
    if (o) {
      var ou;
      if (o) {
        var au = "oninput" in document;
        if (!au) {
          var Zd = document.createElement("div");
          Zd.setAttribute("oninput", "return;"), au = typeof Zd.oninput == "function";
        }
        ou = au;
      } else ou = false;
      Jd = ou && (!document.documentMode || 9 < document.documentMode);
    }
    function $d() {
      co && (co.detachEvent("onpropertychange", eh), ho = co = null);
    }
    function eh(e) {
      if (e.propertyName === "value" && ba(ho)) {
        var t = [];
        Qd(t, ho, e, He(e)), P(zw, t);
      }
    }
    function Gw(e, t, r) {
      e === "focusin" ? ($d(), co = t, ho = r, co.attachEvent("onpropertychange", eh)) : e === "focusout" && $d();
    }
    function Xw(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown") return ba(ho);
    }
    function Yw(e, t) {
      if (e === "click") return ba(t);
    }
    function Qw(e, t) {
      if (e === "input" || e === "change") return ba(t);
    }
    function Jw(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Pr = typeof Object.is == "function" ? Object.is : Jw;
    function po(e, t) {
      if (Pr(e, t)) return true;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
      var r = Object.keys(e), i = Object.keys(t);
      if (r.length !== i.length) return false;
      for (i = 0; i < r.length; i++) {
        var y = r[i];
        if (!s.call(t, y) || !Pr(e[y], t[y])) return false;
      }
      return true;
    }
    function th(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function rh(e, t) {
      var r = th(e);
      e = 0;
      for (var i; r; ) {
        if (r.nodeType === 3) {
          if (i = e + r.textContent.length, e <= t && i >= t) return {
            node: r,
            offset: t - e
          };
          e = i;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = th(r);
      }
    }
    function nh(e, t) {
      return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? nh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
    }
    function ih() {
      for (var e = window, t = pe(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var r = typeof t.contentWindow.location.href == "string";
        } catch {
          r = false;
        }
        if (r) e = t.contentWindow;
        else break;
        t = pe(e.document);
      }
      return t;
    }
    function su(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Zw(e) {
      var t = ih(), r = e.focusedElem, i = e.selectionRange;
      if (t !== r && r && r.ownerDocument && nh(r.ownerDocument.documentElement, r)) {
        if (i !== null && su(r)) {
          if (t = i.start, e = i.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
          else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var y = r.textContent.length, T = Math.min(i.start, y);
            i = i.end === void 0 ? T : Math.min(i.end, y), !e.extend && T > i && (y = i, i = T, T = y), y = rh(r, T);
            var F = rh(r, i);
            y && F && (e.rangeCount !== 1 || e.anchorNode !== y.node || e.anchorOffset !== y.offset || e.focusNode !== F.node || e.focusOffset !== F.offset) && (t = t.createRange(), t.setStart(y.node, y.offset), e.removeAllRanges(), T > i ? (e.addRange(t), e.extend(F.node, F.offset)) : (t.setEnd(F.node, F.offset), e.addRange(t)));
          }
        }
        for (t = [], e = r; e = e.parentNode; ) e.nodeType === 1 && t.push({
          element: e,
          left: e.scrollLeft,
          top: e.scrollTop
        });
        for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
      }
    }
    var $w = o && "documentMode" in document && 11 >= document.documentMode, _i = null, uu = null, yo = null, lu = false;
    function oh(e, t, r) {
      var i = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
      lu || _i == null || _i !== pe(i) || (i = _i, "selectionStart" in i && su(i) ? i = {
        start: i.selectionStart,
        end: i.selectionEnd
      } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), yo && po(yo, i) || (yo = i, i = ka(uu, "onSelect"), 0 < i.length && (t = new $s("onSelect", "select", null, t, r), e.push({
        event: t,
        listeners: i
      }), t.target = _i)));
    }
    function Ta(e, t) {
      var r = {};
      return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
    }
    var Ei = {
      animationend: Ta("Animation", "AnimationEnd"),
      animationiteration: Ta("Animation", "AnimationIteration"),
      animationstart: Ta("Animation", "AnimationStart"),
      transitionend: Ta("Transition", "TransitionEnd")
    }, fu = {}, ah = {};
    o && (ah = document.createElement("div").style, "AnimationEvent" in window || (delete Ei.animationend.animation, delete Ei.animationiteration.animation, delete Ei.animationstart.animation), "TransitionEvent" in window || delete Ei.transitionend.transition);
    function xa(e) {
      if (fu[e]) return fu[e];
      if (!Ei[e]) return e;
      var t = Ei[e], r;
      for (r in t) if (t.hasOwnProperty(r) && r in ah) return fu[e] = t[r];
      return e;
    }
    var sh = xa("animationend"), uh = xa("animationiteration"), lh = xa("animationstart"), fh = xa("transitionend"), ch = /* @__PURE__ */ new Map(), dh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function hn(e, t) {
      ch.set(e, t), l(t, [
        e
      ]);
    }
    for (var cu = 0; cu < dh.length; cu++) {
      var du = dh[cu], e1 = du.toLowerCase(), t1 = du[0].toUpperCase() + du.slice(1);
      hn(e1, "on" + t1);
    }
    hn(sh, "onAnimationEnd"), hn(uh, "onAnimationIteration"), hn(lh, "onAnimationStart"), hn("dblclick", "onDoubleClick"), hn("focusin", "onFocus"), hn("focusout", "onBlur"), hn(fh, "onTransitionEnd"), u("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), u("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), u("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), u("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var go = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), r1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(go));
    function hh(e, t, r) {
      var i = e.type || "unknown-event";
      e.currentTarget = r, ew(i, t, void 0, e), e.currentTarget = null;
    }
    function ph(e, t) {
      t = (t & 4) !== 0;
      for (var r = 0; r < e.length; r++) {
        var i = e[r], y = i.event;
        i = i.listeners;
        e: {
          var T = void 0;
          if (t) for (var F = i.length - 1; 0 <= F; F--) {
            var J = i[F], oe = J.instance, we = J.currentTarget;
            if (J = J.listener, oe !== T && y.isPropagationStopped()) break e;
            hh(y, J, we), T = oe;
          }
          else for (F = 0; F < i.length; F++) {
            if (J = i[F], oe = J.instance, we = J.currentTarget, J = J.listener, oe !== T && y.isPropagationStopped()) break e;
            hh(y, J, we), T = oe;
          }
        }
      }
      if (ht) throw e = dt, ht = false, dt = null, e;
    }
    function gt(e, t) {
      var r = t[_u];
      r === void 0 && (r = t[_u] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      r.has(i) || (yh(t, e, 2, false), r.add(i));
    }
    function hu(e, t, r) {
      var i = 0;
      t && (i |= 4), yh(r, e, i, t);
    }
    var Pa = "_reactListening" + Math.random().toString(36).slice(2);
    function mo(e) {
      if (!e[Pa]) {
        e[Pa] = true, f.forEach(function(r) {
          r !== "selectionchange" && (r1.has(r) || hu(r, false, e), hu(r, true, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Pa] || (t[Pa] = true, hu("selectionchange", false, t));
      }
    }
    function yh(e, t, r, i) {
      switch (Md(t)) {
        case 1:
          var y = gw;
          break;
        case 4:
          y = mw;
          break;
        default:
          y = Qs;
      }
      r = y.bind(null, t, r, e), y = void 0, !Y || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (y = true), i ? y !== void 0 ? e.addEventListener(t, r, {
        capture: true,
        passive: y
      }) : e.addEventListener(t, r, true) : y !== void 0 ? e.addEventListener(t, r, {
        passive: y
      }) : e.addEventListener(t, r, false);
    }
    function pu(e, t, r, i, y) {
      var T = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null) e: for (; ; ) {
        if (i === null) return;
        var F = i.tag;
        if (F === 3 || F === 4) {
          var J = i.stateNode.containerInfo;
          if (J === y || J.nodeType === 8 && J.parentNode === y) break;
          if (F === 4) for (F = i.return; F !== null; ) {
            var oe = F.tag;
            if ((oe === 3 || oe === 4) && (oe = F.stateNode.containerInfo, oe === y || oe.nodeType === 8 && oe.parentNode === y)) return;
            F = F.return;
          }
          for (; J !== null; ) {
            if (F = Kn(J), F === null) return;
            if (oe = F.tag, oe === 5 || oe === 6) {
              i = T = F;
              continue e;
            }
            J = J.parentNode;
          }
        }
        i = i.return;
      }
      P(function() {
        var we = T, ke = He(r), Ae = [];
        e: {
          var xe = ch.get(e);
          if (xe !== void 0) {
            var Ne = $s, Fe = e;
            switch (e) {
              case "keypress":
                if (_a(r) === 0) break e;
              case "keydown":
              case "keyup":
                Ne = Rw;
                break;
              case "focusin":
                Fe = "focus", Ne = ru;
                break;
              case "focusout":
                Fe = "blur", Ne = ru;
                break;
              case "beforeblur":
              case "afterblur":
                Ne = ru;
                break;
              case "click":
                if (r.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                Ne = qd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                Ne = _w;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                Ne = Uw;
                break;
              case sh:
              case uh:
              case lh:
                Ne = bw;
                break;
              case fh:
                Ne = Lw;
                break;
              case "scroll":
                Ne = vw;
                break;
              case "wheel":
                Ne = Dw;
                break;
              case "copy":
              case "cut":
              case "paste":
                Ne = xw;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                Ne = Wd;
            }
            var Me = (t & 4) !== 0, It = !Me && e === "scroll", ge = Me ? xe !== null ? xe + "Capture" : null : xe;
            Me = [];
            for (var ue = we, ve; ue !== null; ) {
              ve = ue;
              var Be = ve.stateNode;
              if (ve.tag === 5 && Be !== null && (ve = Be, ge !== null && (Be = I(ue, ge), Be != null && Me.push(vo(ue, Be, ve)))), It) break;
              ue = ue.return;
            }
            0 < Me.length && (xe = new Ne(xe, Fe, null, r, ke), Ae.push({
              event: xe,
              listeners: Me
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (xe = e === "mouseover" || e === "pointerover", Ne = e === "mouseout" || e === "pointerout", xe && r !== Le && (Fe = r.relatedTarget || r.fromElement) && (Kn(Fe) || Fe[Wr])) break e;
            if ((Ne || xe) && (xe = ke.window === ke ? ke : (xe = ke.ownerDocument) ? xe.defaultView || xe.parentWindow : window, Ne ? (Fe = r.relatedTarget || r.toElement, Ne = we, Fe = Fe ? Kn(Fe) : null, Fe !== null && (It = Wn(Fe), Fe !== It || Fe.tag !== 5 && Fe.tag !== 6) && (Fe = null)) : (Ne = null, Fe = we), Ne !== Fe)) {
              if (Me = qd, Be = "onMouseLeave", ge = "onMouseEnter", ue = "mouse", (e === "pointerout" || e === "pointerover") && (Me = Wd, Be = "onPointerLeave", ge = "onPointerEnter", ue = "pointer"), It = Ne == null ? xe : Ti(Ne), ve = Fe == null ? xe : Ti(Fe), xe = new Me(Be, ue + "leave", Ne, r, ke), xe.target = It, xe.relatedTarget = ve, Be = null, Kn(ke) === we && (Me = new Me(ge, ue + "enter", Fe, r, ke), Me.target = ve, Me.relatedTarget = It, Be = Me), It = Be, Ne && Fe) t: {
                for (Me = Ne, ge = Fe, ue = 0, ve = Me; ve; ve = Si(ve)) ue++;
                for (ve = 0, Be = ge; Be; Be = Si(Be)) ve++;
                for (; 0 < ue - ve; ) Me = Si(Me), ue--;
                for (; 0 < ve - ue; ) ge = Si(ge), ve--;
                for (; ue--; ) {
                  if (Me === ge || ge !== null && Me === ge.alternate) break t;
                  Me = Si(Me), ge = Si(ge);
                }
                Me = null;
              }
              else Me = null;
              Ne !== null && gh(Ae, xe, Ne, Me, false), Fe !== null && It !== null && gh(Ae, It, Fe, Me, true);
            }
          }
          e: {
            if (xe = we ? Ti(we) : window, Ne = xe.nodeName && xe.nodeName.toLowerCase(), Ne === "select" || Ne === "input" && xe.type === "file") var De = Vw;
            else if (Yd(xe)) if (Jd) De = Qw;
            else {
              De = Xw;
              var je = Gw;
            }
            else (Ne = xe.nodeName) && Ne.toLowerCase() === "input" && (xe.type === "checkbox" || xe.type === "radio") && (De = Yw);
            if (De && (De = De(e, we))) {
              Qd(Ae, De, r, ke);
              break e;
            }
            je && je(e, xe, we), e === "focusout" && (je = xe._wrapperState) && je.controlled && xe.type === "number" && Se(xe, "number", xe.value);
          }
          switch (je = we ? Ti(we) : window, e) {
            case "focusin":
              (Yd(je) || je.contentEditable === "true") && (_i = je, uu = we, yo = null);
              break;
            case "focusout":
              yo = uu = _i = null;
              break;
            case "mousedown":
              lu = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              lu = false, oh(Ae, r, ke);
              break;
            case "selectionchange":
              if ($w) break;
            case "keydown":
            case "keyup":
              oh(Ae, r, ke);
          }
          var We;
          if (iu) e: {
            switch (e) {
              case "compositionstart":
                var Ge = "onCompositionStart";
                break e;
              case "compositionend":
                Ge = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ge = "onCompositionUpdate";
                break e;
            }
            Ge = void 0;
          }
          else wi ? Gd(e, r) && (Ge = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (Ge = "onCompositionStart");
          Ge && (Kd && r.locale !== "ko" && (wi || Ge !== "onCompositionStart" ? Ge === "onCompositionEnd" && wi && (We = Dd()) : (dn = ke, Zs = "value" in dn ? dn.value : dn.textContent, wi = true)), je = ka(we, Ge), 0 < je.length && (Ge = new jd(Ge, e, null, r, ke), Ae.push({
            event: Ge,
            listeners: je
          }), We ? Ge.data = We : (We = Xd(r), We !== null && (Ge.data = We)))), (We = qw ? jw(e, r) : Ww(e, r)) && (we = ka(we, "onBeforeInput"), 0 < we.length && (ke = new jd("onBeforeInput", "beforeinput", null, r, ke), Ae.push({
            event: ke,
            listeners: we
          }), ke.data = We));
        }
        ph(Ae, t);
      });
    }
    function vo(e, t, r) {
      return {
        instance: e,
        listener: t,
        currentTarget: r
      };
    }
    function ka(e, t) {
      for (var r = t + "Capture", i = []; e !== null; ) {
        var y = e, T = y.stateNode;
        y.tag === 5 && T !== null && (y = T, T = I(e, r), T != null && i.unshift(vo(e, T, y)), T = I(e, t), T != null && i.push(vo(e, T, y))), e = e.return;
      }
      return i;
    }
    function Si(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function gh(e, t, r, i, y) {
      for (var T = t._reactName, F = []; r !== null && r !== i; ) {
        var J = r, oe = J.alternate, we = J.stateNode;
        if (oe !== null && oe === i) break;
        J.tag === 5 && we !== null && (J = we, y ? (oe = I(r, T), oe != null && F.unshift(vo(r, oe, J))) : y || (oe = I(r, T), oe != null && F.push(vo(r, oe, J)))), r = r.return;
      }
      F.length !== 0 && e.push({
        event: t,
        listeners: F
      });
    }
    var n1 = /\r\n?/g, i1 = /\u0000|\uFFFD/g;
    function mh(e) {
      return (typeof e == "string" ? e : "" + e).replace(n1, `
`).replace(i1, "");
    }
    function Aa(e, t, r) {
      if (t = mh(t), mh(e) !== t && r) throw Error(c(425));
    }
    function Ia() {
    }
    var yu = null, gu = null;
    function mu(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var vu = typeof setTimeout == "function" ? setTimeout : void 0, o1 = typeof clearTimeout == "function" ? clearTimeout : void 0, vh = typeof Promise == "function" ? Promise : void 0, a1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof vh < "u" ? function(e) {
      return vh.resolve(null).then(e).catch(s1);
    } : vu;
    function s1(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function wu(e, t) {
      var r = t, i = 0;
      do {
        var y = r.nextSibling;
        if (e.removeChild(r), y && y.nodeType === 8) if (r = y.data, r === "/$") {
          if (i === 0) {
            e.removeChild(y), so(t);
            return;
          }
          i--;
        } else r !== "$" && r !== "$?" && r !== "$!" || i++;
        r = y;
      } while (r);
      so(t);
    }
    function pn(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
          if (t === "/$") return null;
        }
      }
      return e;
    }
    function wh(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "$" || r === "$!" || r === "$?") {
            if (t === 0) return e;
            t--;
          } else r === "/$" && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var bi = Math.random().toString(36).slice(2), Nr = "__reactFiber$" + bi, wo = "__reactProps$" + bi, Wr = "__reactContainer$" + bi, _u = "__reactEvents$" + bi, u1 = "__reactListeners$" + bi, l1 = "__reactHandles$" + bi;
    function Kn(e) {
      var t = e[Nr];
      if (t) return t;
      for (var r = e.parentNode; r; ) {
        if (t = r[Wr] || r[Nr]) {
          if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = wh(e); e !== null; ) {
            if (r = e[Nr]) return r;
            e = wh(e);
          }
          return t;
        }
        e = r, r = e.parentNode;
      }
      return null;
    }
    function _o(e) {
      return e = e[Nr] || e[Wr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function Ti(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(c(33));
    }
    function Ba(e) {
      return e[wo] || null;
    }
    var Eu = [], xi = -1;
    function yn(e) {
      return {
        current: e
      };
    }
    function mt(e) {
      0 > xi || (e.current = Eu[xi], Eu[xi] = null, xi--);
    }
    function yt(e, t) {
      xi++, Eu[xi] = e.current, e.current = t;
    }
    var gn = {}, Vt = yn(gn), tr = yn(false), zn = gn;
    function Pi(e, t) {
      var r = e.type.contextTypes;
      if (!r) return gn;
      var i = e.stateNode;
      if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
      var y = {}, T;
      for (T in r) y[T] = t[T];
      return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = y), y;
    }
    function rr(e) {
      return e = e.childContextTypes, e != null;
    }
    function Oa() {
      mt(tr), mt(Vt);
    }
    function _h(e, t, r) {
      if (Vt.current !== gn) throw Error(c(168));
      yt(Vt, t), yt(tr, r);
    }
    function Eh(e, t, r) {
      var i = e.stateNode;
      if (t = t.childContextTypes, typeof i.getChildContext != "function") return r;
      i = i.getChildContext();
      for (var y in i) if (!(y in t)) throw Error(c(108, R(e) || "Unknown", y));
      return Z({}, r, i);
    }
    function Ra(e) {
      return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || gn, zn = Vt.current, yt(Vt, e), yt(tr, tr.current), true;
    }
    function Sh(e, t, r) {
      var i = e.stateNode;
      if (!i) throw Error(c(169));
      r ? (e = Eh(e, t, zn), i.__reactInternalMemoizedMergedChildContext = e, mt(tr), mt(Vt), yt(Vt, e)) : mt(tr), yt(tr, r);
    }
    var Kr = null, Ca = false, Su = false;
    function bh(e) {
      Kr === null ? Kr = [
        e
      ] : Kr.push(e);
    }
    function f1(e) {
      Ca = true, bh(e);
    }
    function mn() {
      if (!Su && Kr !== null) {
        Su = true;
        var e = 0, t = ft;
        try {
          var r = Kr;
          for (ft = 1; e < r.length; e++) {
            var i = r[e];
            do
              i = i(true);
            while (i !== null);
          }
          Kr = null, Ca = false;
        } catch (y) {
          throw Kr !== null && (Kr = Kr.slice(e + 1)), xd(Ks, mn), y;
        } finally {
          ft = t, Su = false;
        }
      }
      return null;
    }
    var ki = [], Ai = 0, Na = null, Ua = 0, hr = [], pr = 0, Vn = null, zr = 1, Vr = "";
    function Gn(e, t) {
      ki[Ai++] = Ua, ki[Ai++] = Na, Na = e, Ua = t;
    }
    function Th(e, t, r) {
      hr[pr++] = zr, hr[pr++] = Vr, hr[pr++] = Vn, Vn = e;
      var i = zr;
      e = Vr;
      var y = 32 - xr(i) - 1;
      i &= ~(1 << y), r += 1;
      var T = 32 - xr(t) + y;
      if (30 < T) {
        var F = y - y % 5;
        T = (i & (1 << F) - 1).toString(32), i >>= F, y -= F, zr = 1 << 32 - xr(t) + y | r << y | i, Vr = T + e;
      } else zr = 1 << T | r << y | i, Vr = e;
    }
    function bu(e) {
      e.return !== null && (Gn(e, 1), Th(e, 1, 0));
    }
    function Tu(e) {
      for (; e === Na; ) Na = ki[--Ai], ki[Ai] = null, Ua = ki[--Ai], ki[Ai] = null;
      for (; e === Vn; ) Vn = hr[--pr], hr[pr] = null, Vr = hr[--pr], hr[pr] = null, zr = hr[--pr], hr[pr] = null;
    }
    var lr = null, fr = null, _t = false, kr = null;
    function xh(e, t) {
      var r = vr(5, null, null, 0);
      r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [
        r
      ], e.flags |= 16) : t.push(r);
    }
    function Ph(e, t) {
      switch (e.tag) {
        case 5:
          var r = e.type;
          return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, lr = e, fr = pn(t.firstChild), true) : false;
        case 6:
          return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, lr = e, fr = null, true) : false;
        case 13:
          return t = t.nodeType !== 8 ? null : t, t !== null ? (r = Vn !== null ? {
            id: zr,
            overflow: Vr
          } : null, e.memoizedState = {
            dehydrated: t,
            treeContext: r,
            retryLane: 1073741824
          }, r = vr(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, lr = e, fr = null, true) : false;
        default:
          return false;
      }
    }
    function xu(e) {
      return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function Pu(e) {
      if (_t) {
        var t = fr;
        if (t) {
          var r = t;
          if (!Ph(e, t)) {
            if (xu(e)) throw Error(c(418));
            t = pn(r.nextSibling);
            var i = lr;
            t && Ph(e, t) ? xh(i, r) : (e.flags = e.flags & -4097 | 2, _t = false, lr = e);
          }
        } else {
          if (xu(e)) throw Error(c(418));
          e.flags = e.flags & -4097 | 2, _t = false, lr = e;
        }
      }
    }
    function kh(e) {
      for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
      lr = e;
    }
    function Fa(e) {
      if (e !== lr) return false;
      if (!_t) return kh(e), _t = true, false;
      var t;
      if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !mu(e.type, e.memoizedProps)), t && (t = fr)) {
        if (xu(e)) throw Ah(), Error(c(418));
        for (; t; ) xh(e, t), t = pn(t.nextSibling);
      }
      if (kh(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
              var r = e.data;
              if (r === "/$") {
                if (t === 0) {
                  fr = pn(e.nextSibling);
                  break e;
                }
                t--;
              } else r !== "$" && r !== "$!" && r !== "$?" || t++;
            }
            e = e.nextSibling;
          }
          fr = null;
        }
      } else fr = lr ? pn(e.stateNode.nextSibling) : null;
      return true;
    }
    function Ah() {
      for (var e = fr; e; ) e = pn(e.nextSibling);
    }
    function Ii() {
      fr = lr = null, _t = false;
    }
    function ku(e) {
      kr === null ? kr = [
        e
      ] : kr.push(e);
    }
    var c1 = O.ReactCurrentBatchConfig;
    function Eo(e, t, r) {
      if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (r._owner) {
          if (r = r._owner, r) {
            if (r.tag !== 1) throw Error(c(309));
            var i = r.stateNode;
          }
          if (!i) throw Error(c(147, e));
          var y = i, T = "" + e;
          return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === T ? t.ref : (t = function(F) {
            var J = y.refs;
            F === null ? delete J[T] : J[T] = F;
          }, t._stringRef = T, t);
        }
        if (typeof e != "string") throw Error(c(284));
        if (!r._owner) throw Error(c(290, e));
      }
      return e;
    }
    function La(e, t) {
      throw e = Object.prototype.toString.call(t), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function Ih(e) {
      var t = e._init;
      return t(e._payload);
    }
    function Bh(e) {
      function t(ge, ue) {
        if (e) {
          var ve = ge.deletions;
          ve === null ? (ge.deletions = [
            ue
          ], ge.flags |= 16) : ve.push(ue);
        }
      }
      function r(ge, ue) {
        if (!e) return null;
        for (; ue !== null; ) t(ge, ue), ue = ue.sibling;
        return null;
      }
      function i(ge, ue) {
        for (ge = /* @__PURE__ */ new Map(); ue !== null; ) ue.key !== null ? ge.set(ue.key, ue) : ge.set(ue.index, ue), ue = ue.sibling;
        return ge;
      }
      function y(ge, ue) {
        return ge = xn(ge, ue), ge.index = 0, ge.sibling = null, ge;
      }
      function T(ge, ue, ve) {
        return ge.index = ve, e ? (ve = ge.alternate, ve !== null ? (ve = ve.index, ve < ue ? (ge.flags |= 2, ue) : ve) : (ge.flags |= 2, ue)) : (ge.flags |= 1048576, ue);
      }
      function F(ge) {
        return e && ge.alternate === null && (ge.flags |= 2), ge;
      }
      function J(ge, ue, ve, Be) {
        return ue === null || ue.tag !== 6 ? (ue = vl(ve, ge.mode, Be), ue.return = ge, ue) : (ue = y(ue, ve), ue.return = ge, ue);
      }
      function oe(ge, ue, ve, Be) {
        var De = ve.type;
        return De === K ? ke(ge, ue, ve.props.children, Be, ve.key) : ue !== null && (ue.elementType === De || typeof De == "object" && De !== null && De.$$typeof === Re && Ih(De) === ue.type) ? (Be = y(ue, ve.props), Be.ref = Eo(ge, ue, ve), Be.return = ge, Be) : (Be = ss(ve.type, ve.key, ve.props, null, ge.mode, Be), Be.ref = Eo(ge, ue, ve), Be.return = ge, Be);
      }
      function we(ge, ue, ve, Be) {
        return ue === null || ue.tag !== 4 || ue.stateNode.containerInfo !== ve.containerInfo || ue.stateNode.implementation !== ve.implementation ? (ue = wl(ve, ge.mode, Be), ue.return = ge, ue) : (ue = y(ue, ve.children || []), ue.return = ge, ue);
      }
      function ke(ge, ue, ve, Be, De) {
        return ue === null || ue.tag !== 7 ? (ue = ti(ve, ge.mode, Be, De), ue.return = ge, ue) : (ue = y(ue, ve), ue.return = ge, ue);
      }
      function Ae(ge, ue, ve) {
        if (typeof ue == "string" && ue !== "" || typeof ue == "number") return ue = vl("" + ue, ge.mode, ve), ue.return = ge, ue;
        if (typeof ue == "object" && ue !== null) {
          switch (ue.$$typeof) {
            case U:
              return ve = ss(ue.type, ue.key, ue.props, null, ge.mode, ve), ve.ref = Eo(ge, null, ue), ve.return = ge, ve;
            case C:
              return ue = wl(ue, ge.mode, ve), ue.return = ge, ue;
            case Re:
              var Be = ue._init;
              return Ae(ge, Be(ue._payload), ve);
          }
          if (at(ue) || G(ue)) return ue = ti(ue, ge.mode, ve, null), ue.return = ge, ue;
          La(ge, ue);
        }
        return null;
      }
      function xe(ge, ue, ve, Be) {
        var De = ue !== null ? ue.key : null;
        if (typeof ve == "string" && ve !== "" || typeof ve == "number") return De !== null ? null : J(ge, ue, "" + ve, Be);
        if (typeof ve == "object" && ve !== null) {
          switch (ve.$$typeof) {
            case U:
              return ve.key === De ? oe(ge, ue, ve, Be) : null;
            case C:
              return ve.key === De ? we(ge, ue, ve, Be) : null;
            case Re:
              return De = ve._init, xe(ge, ue, De(ve._payload), Be);
          }
          if (at(ve) || G(ve)) return De !== null ? null : ke(ge, ue, ve, Be, null);
          La(ge, ve);
        }
        return null;
      }
      function Ne(ge, ue, ve, Be, De) {
        if (typeof Be == "string" && Be !== "" || typeof Be == "number") return ge = ge.get(ve) || null, J(ue, ge, "" + Be, De);
        if (typeof Be == "object" && Be !== null) {
          switch (Be.$$typeof) {
            case U:
              return ge = ge.get(Be.key === null ? ve : Be.key) || null, oe(ue, ge, Be, De);
            case C:
              return ge = ge.get(Be.key === null ? ve : Be.key) || null, we(ue, ge, Be, De);
            case Re:
              var je = Be._init;
              return Ne(ge, ue, ve, je(Be._payload), De);
          }
          if (at(Be) || G(Be)) return ge = ge.get(ve) || null, ke(ue, ge, Be, De, null);
          La(ue, Be);
        }
        return null;
      }
      function Fe(ge, ue, ve, Be) {
        for (var De = null, je = null, We = ue, Ge = ue = 0, Mt = null; We !== null && Ge < ve.length; Ge++) {
          We.index > Ge ? (Mt = We, We = null) : Mt = We.sibling;
          var ot = xe(ge, We, ve[Ge], Be);
          if (ot === null) {
            We === null && (We = Mt);
            break;
          }
          e && We && ot.alternate === null && t(ge, We), ue = T(ot, ue, Ge), je === null ? De = ot : je.sibling = ot, je = ot, We = Mt;
        }
        if (Ge === ve.length) return r(ge, We), _t && Gn(ge, Ge), De;
        if (We === null) {
          for (; Ge < ve.length; Ge++) We = Ae(ge, ve[Ge], Be), We !== null && (ue = T(We, ue, Ge), je === null ? De = We : je.sibling = We, je = We);
          return _t && Gn(ge, Ge), De;
        }
        for (We = i(ge, We); Ge < ve.length; Ge++) Mt = Ne(We, ge, Ge, ve[Ge], Be), Mt !== null && (e && Mt.alternate !== null && We.delete(Mt.key === null ? Ge : Mt.key), ue = T(Mt, ue, Ge), je === null ? De = Mt : je.sibling = Mt, je = Mt);
        return e && We.forEach(function(Pn) {
          return t(ge, Pn);
        }), _t && Gn(ge, Ge), De;
      }
      function Me(ge, ue, ve, Be) {
        var De = G(ve);
        if (typeof De != "function") throw Error(c(150));
        if (ve = De.call(ve), ve == null) throw Error(c(151));
        for (var je = De = null, We = ue, Ge = ue = 0, Mt = null, ot = ve.next(); We !== null && !ot.done; Ge++, ot = ve.next()) {
          We.index > Ge ? (Mt = We, We = null) : Mt = We.sibling;
          var Pn = xe(ge, We, ot.value, Be);
          if (Pn === null) {
            We === null && (We = Mt);
            break;
          }
          e && We && Pn.alternate === null && t(ge, We), ue = T(Pn, ue, Ge), je === null ? De = Pn : je.sibling = Pn, je = Pn, We = Mt;
        }
        if (ot.done) return r(ge, We), _t && Gn(ge, Ge), De;
        if (We === null) {
          for (; !ot.done; Ge++, ot = ve.next()) ot = Ae(ge, ot.value, Be), ot !== null && (ue = T(ot, ue, Ge), je === null ? De = ot : je.sibling = ot, je = ot);
          return _t && Gn(ge, Ge), De;
        }
        for (We = i(ge, We); !ot.done; Ge++, ot = ve.next()) ot = Ne(We, ge, Ge, ot.value, Be), ot !== null && (e && ot.alternate !== null && We.delete(ot.key === null ? Ge : ot.key), ue = T(ot, ue, Ge), je === null ? De = ot : je.sibling = ot, je = ot);
        return e && We.forEach(function(K1) {
          return t(ge, K1);
        }), _t && Gn(ge, Ge), De;
      }
      function It(ge, ue, ve, Be) {
        if (typeof ve == "object" && ve !== null && ve.type === K && ve.key === null && (ve = ve.props.children), typeof ve == "object" && ve !== null) {
          switch (ve.$$typeof) {
            case U:
              e: {
                for (var De = ve.key, je = ue; je !== null; ) {
                  if (je.key === De) {
                    if (De = ve.type, De === K) {
                      if (je.tag === 7) {
                        r(ge, je.sibling), ue = y(je, ve.props.children), ue.return = ge, ge = ue;
                        break e;
                      }
                    } else if (je.elementType === De || typeof De == "object" && De !== null && De.$$typeof === Re && Ih(De) === je.type) {
                      r(ge, je.sibling), ue = y(je, ve.props), ue.ref = Eo(ge, je, ve), ue.return = ge, ge = ue;
                      break e;
                    }
                    r(ge, je);
                    break;
                  } else t(ge, je);
                  je = je.sibling;
                }
                ve.type === K ? (ue = ti(ve.props.children, ge.mode, Be, ve.key), ue.return = ge, ge = ue) : (Be = ss(ve.type, ve.key, ve.props, null, ge.mode, Be), Be.ref = Eo(ge, ue, ve), Be.return = ge, ge = Be);
              }
              return F(ge);
            case C:
              e: {
                for (je = ve.key; ue !== null; ) {
                  if (ue.key === je) if (ue.tag === 4 && ue.stateNode.containerInfo === ve.containerInfo && ue.stateNode.implementation === ve.implementation) {
                    r(ge, ue.sibling), ue = y(ue, ve.children || []), ue.return = ge, ge = ue;
                    break e;
                  } else {
                    r(ge, ue);
                    break;
                  }
                  else t(ge, ue);
                  ue = ue.sibling;
                }
                ue = wl(ve, ge.mode, Be), ue.return = ge, ge = ue;
              }
              return F(ge);
            case Re:
              return je = ve._init, It(ge, ue, je(ve._payload), Be);
          }
          if (at(ve)) return Fe(ge, ue, ve, Be);
          if (G(ve)) return Me(ge, ue, ve, Be);
          La(ge, ve);
        }
        return typeof ve == "string" && ve !== "" || typeof ve == "number" ? (ve = "" + ve, ue !== null && ue.tag === 6 ? (r(ge, ue.sibling), ue = y(ue, ve), ue.return = ge, ge = ue) : (r(ge, ue), ue = vl(ve, ge.mode, Be), ue.return = ge, ge = ue), F(ge)) : r(ge, ue);
      }
      return It;
    }
    var Bi = Bh(true), Oh = Bh(false), Ma = yn(null), Da = null, Oi = null, Au = null;
    function Iu() {
      Au = Oi = Da = null;
    }
    function Bu(e) {
      var t = Ma.current;
      mt(Ma), e._currentValue = t;
    }
    function Ou(e, t, r) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === r) break;
        e = e.return;
      }
    }
    function Ri(e, t) {
      Da = e, Au = Oi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (nr = true), e.firstContext = null);
    }
    function yr(e) {
      var t = e._currentValue;
      if (Au !== e) if (e = {
        context: e,
        memoizedValue: t,
        next: null
      }, Oi === null) {
        if (Da === null) throw Error(c(308));
        Oi = e, Da.dependencies = {
          lanes: 0,
          firstContext: e
        };
      } else Oi = Oi.next = e;
      return t;
    }
    var Xn = null;
    function Ru(e) {
      Xn === null ? Xn = [
        e
      ] : Xn.push(e);
    }
    function Rh(e, t, r, i) {
      var y = t.interleaved;
      return y === null ? (r.next = r, Ru(t)) : (r.next = y.next, y.next = r), t.interleaved = r, Gr(e, i);
    }
    function Gr(e, t) {
      e.lanes |= t;
      var r = e.alternate;
      for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
      return r.tag === 3 ? r.stateNode : null;
    }
    var vn = false;
    function Cu(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: 0
        },
        effects: null
      };
    }
    function Ch(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
      });
    }
    function Xr(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function wn(e, t, r) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, (it & 2) !== 0) {
        var y = i.pending;
        return y === null ? t.next = t : (t.next = y.next, y.next = t), i.pending = t, Gr(e, r);
      }
      return y = i.interleaved, y === null ? (t.next = t, Ru(i)) : (t.next = y.next, y.next = t), i.interleaved = t, Gr(e, r);
    }
    function Ha(e, t, r) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, r |= i, t.lanes = r, Gs(e, r);
      }
    }
    function Nh(e, t) {
      var r = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, r === i)) {
        var y = null, T = null;
        if (r = r.firstBaseUpdate, r !== null) {
          do {
            var F = {
              eventTime: r.eventTime,
              lane: r.lane,
              tag: r.tag,
              payload: r.payload,
              callback: r.callback,
              next: null
            };
            T === null ? y = T = F : T = T.next = F, r = r.next;
          } while (r !== null);
          T === null ? y = T = t : T = T.next = t;
        } else y = T = t;
        r = {
          baseState: i.baseState,
          firstBaseUpdate: y,
          lastBaseUpdate: T,
          shared: i.shared,
          effects: i.effects
        }, e.updateQueue = r;
        return;
      }
      e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
    }
    function qa(e, t, r, i) {
      var y = e.updateQueue;
      vn = false;
      var T = y.firstBaseUpdate, F = y.lastBaseUpdate, J = y.shared.pending;
      if (J !== null) {
        y.shared.pending = null;
        var oe = J, we = oe.next;
        oe.next = null, F === null ? T = we : F.next = we, F = oe;
        var ke = e.alternate;
        ke !== null && (ke = ke.updateQueue, J = ke.lastBaseUpdate, J !== F && (J === null ? ke.firstBaseUpdate = we : J.next = we, ke.lastBaseUpdate = oe));
      }
      if (T !== null) {
        var Ae = y.baseState;
        F = 0, ke = we = oe = null, J = T;
        do {
          var xe = J.lane, Ne = J.eventTime;
          if ((i & xe) === xe) {
            ke !== null && (ke = ke.next = {
              eventTime: Ne,
              lane: 0,
              tag: J.tag,
              payload: J.payload,
              callback: J.callback,
              next: null
            });
            e: {
              var Fe = e, Me = J;
              switch (xe = t, Ne = r, Me.tag) {
                case 1:
                  if (Fe = Me.payload, typeof Fe == "function") {
                    Ae = Fe.call(Ne, Ae, xe);
                    break e;
                  }
                  Ae = Fe;
                  break e;
                case 3:
                  Fe.flags = Fe.flags & -65537 | 128;
                case 0:
                  if (Fe = Me.payload, xe = typeof Fe == "function" ? Fe.call(Ne, Ae, xe) : Fe, xe == null) break e;
                  Ae = Z({}, Ae, xe);
                  break e;
                case 2:
                  vn = true;
              }
            }
            J.callback !== null && J.lane !== 0 && (e.flags |= 64, xe = y.effects, xe === null ? y.effects = [
              J
            ] : xe.push(J));
          } else Ne = {
            eventTime: Ne,
            lane: xe,
            tag: J.tag,
            payload: J.payload,
            callback: J.callback,
            next: null
          }, ke === null ? (we = ke = Ne, oe = Ae) : ke = ke.next = Ne, F |= xe;
          if (J = J.next, J === null) {
            if (J = y.shared.pending, J === null) break;
            xe = J, J = xe.next, xe.next = null, y.lastBaseUpdate = xe, y.shared.pending = null;
          }
        } while (true);
        if (ke === null && (oe = Ae), y.baseState = oe, y.firstBaseUpdate = we, y.lastBaseUpdate = ke, t = y.shared.interleaved, t !== null) {
          y = t;
          do
            F |= y.lane, y = y.next;
          while (y !== t);
        } else T === null && (y.shared.lanes = 0);
        Jn |= F, e.lanes = F, e.memoizedState = Ae;
      }
    }
    function Uh(e, t, r) {
      if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
        var i = e[t], y = i.callback;
        if (y !== null) {
          if (i.callback = null, i = r, typeof y != "function") throw Error(c(191, y));
          y.call(i);
        }
      }
    }
    var So = {}, Ur = yn(So), bo = yn(So), To = yn(So);
    function Yn(e) {
      if (e === So) throw Error(c(174));
      return e;
    }
    function Nu(e, t) {
      switch (yt(To, t), yt(bo, e), yt(Ur, So), e = t.nodeType, e) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Pt(null, "");
          break;
        default:
          e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Pt(t, e);
      }
      mt(Ur), yt(Ur, t);
    }
    function Ci() {
      mt(Ur), mt(bo), mt(To);
    }
    function Fh(e) {
      Yn(To.current);
      var t = Yn(Ur.current), r = Pt(t, e.type);
      t !== r && (yt(bo, e), yt(Ur, r));
    }
    function Uu(e) {
      bo.current === e && (mt(Ur), mt(bo));
    }
    var Et = yn(0);
    function ja(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var r = t.memoizedState;
          if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Fu = [];
    function Lu() {
      for (var e = 0; e < Fu.length; e++) Fu[e]._workInProgressVersionPrimary = null;
      Fu.length = 0;
    }
    var Wa = O.ReactCurrentDispatcher, Mu = O.ReactCurrentBatchConfig, Qn = 0, St = null, Rt = null, Ft = null, Ka = false, xo = false, Po = 0, d1 = 0;
    function Gt() {
      throw Error(c(321));
    }
    function Du(e, t) {
      if (t === null) return false;
      for (var r = 0; r < t.length && r < e.length; r++) if (!Pr(e[r], t[r])) return false;
      return true;
    }
    function Hu(e, t, r, i, y, T) {
      if (Qn = T, St = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Wa.current = e === null || e.memoizedState === null ? g1 : m1, e = r(i, y), xo) {
        T = 0;
        do {
          if (xo = false, Po = 0, 25 <= T) throw Error(c(301));
          T += 1, Ft = Rt = null, t.updateQueue = null, Wa.current = v1, e = r(i, y);
        } while (xo);
      }
      if (Wa.current = Ga, t = Rt !== null && Rt.next !== null, Qn = 0, Ft = Rt = St = null, Ka = false, t) throw Error(c(300));
      return e;
    }
    function qu() {
      var e = Po !== 0;
      return Po = 0, e;
    }
    function Fr() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Ft === null ? St.memoizedState = Ft = e : Ft = Ft.next = e, Ft;
    }
    function gr() {
      if (Rt === null) {
        var e = St.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Rt.next;
      var t = Ft === null ? St.memoizedState : Ft.next;
      if (t !== null) Ft = t, Rt = e;
      else {
        if (e === null) throw Error(c(310));
        Rt = e, e = {
          memoizedState: Rt.memoizedState,
          baseState: Rt.baseState,
          baseQueue: Rt.baseQueue,
          queue: Rt.queue,
          next: null
        }, Ft === null ? St.memoizedState = Ft = e : Ft = Ft.next = e;
      }
      return Ft;
    }
    function ko(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function ju(e) {
      var t = gr(), r = t.queue;
      if (r === null) throw Error(c(311));
      r.lastRenderedReducer = e;
      var i = Rt, y = i.baseQueue, T = r.pending;
      if (T !== null) {
        if (y !== null) {
          var F = y.next;
          y.next = T.next, T.next = F;
        }
        i.baseQueue = y = T, r.pending = null;
      }
      if (y !== null) {
        T = y.next, i = i.baseState;
        var J = F = null, oe = null, we = T;
        do {
          var ke = we.lane;
          if ((Qn & ke) === ke) oe !== null && (oe = oe.next = {
            lane: 0,
            action: we.action,
            hasEagerState: we.hasEagerState,
            eagerState: we.eagerState,
            next: null
          }), i = we.hasEagerState ? we.eagerState : e(i, we.action);
          else {
            var Ae = {
              lane: ke,
              action: we.action,
              hasEagerState: we.hasEagerState,
              eagerState: we.eagerState,
              next: null
            };
            oe === null ? (J = oe = Ae, F = i) : oe = oe.next = Ae, St.lanes |= ke, Jn |= ke;
          }
          we = we.next;
        } while (we !== null && we !== T);
        oe === null ? F = i : oe.next = J, Pr(i, t.memoizedState) || (nr = true), t.memoizedState = i, t.baseState = F, t.baseQueue = oe, r.lastRenderedState = i;
      }
      if (e = r.interleaved, e !== null) {
        y = e;
        do
          T = y.lane, St.lanes |= T, Jn |= T, y = y.next;
        while (y !== e);
      } else y === null && (r.lanes = 0);
      return [
        t.memoizedState,
        r.dispatch
      ];
    }
    function Wu(e) {
      var t = gr(), r = t.queue;
      if (r === null) throw Error(c(311));
      r.lastRenderedReducer = e;
      var i = r.dispatch, y = r.pending, T = t.memoizedState;
      if (y !== null) {
        r.pending = null;
        var F = y = y.next;
        do
          T = e(T, F.action), F = F.next;
        while (F !== y);
        Pr(T, t.memoizedState) || (nr = true), t.memoizedState = T, t.baseQueue === null && (t.baseState = T), r.lastRenderedState = T;
      }
      return [
        T,
        i
      ];
    }
    function Lh() {
    }
    function Mh(e, t) {
      var r = St, i = gr(), y = t(), T = !Pr(i.memoizedState, y);
      if (T && (i.memoizedState = y, nr = true), i = i.queue, Ku(qh.bind(null, r, i, e), [
        e
      ]), i.getSnapshot !== t || T || Ft !== null && Ft.memoizedState.tag & 1) {
        if (r.flags |= 2048, Ao(9, Hh.bind(null, r, i, y, t), void 0, null), Lt === null) throw Error(c(349));
        (Qn & 30) !== 0 || Dh(r, t, y);
      }
      return y;
    }
    function Dh(e, t, r) {
      e.flags |= 16384, e = {
        getSnapshot: t,
        value: r
      }, t = St.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
      }, St.updateQueue = t, t.stores = [
        e
      ]) : (r = t.stores, r === null ? t.stores = [
        e
      ] : r.push(e));
    }
    function Hh(e, t, r, i) {
      t.value = r, t.getSnapshot = i, jh(t) && Wh(e);
    }
    function qh(e, t, r) {
      return r(function() {
        jh(t) && Wh(e);
      });
    }
    function jh(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var r = t();
        return !Pr(e, r);
      } catch {
        return true;
      }
    }
    function Wh(e) {
      var t = Gr(e, 1);
      t !== null && Or(t, e, 1, -1);
    }
    function Kh(e) {
      var t = Fr();
      return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ko,
        lastRenderedState: e
      }, t.queue = e, e = e.dispatch = y1.bind(null, St, e), [
        t.memoizedState,
        e
      ];
    }
    function Ao(e, t, r, i) {
      return e = {
        tag: e,
        create: t,
        destroy: r,
        deps: i,
        next: null
      }, t = St.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
      }, St.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (i = r.next, r.next = e, e.next = i, t.lastEffect = e)), e;
    }
    function zh() {
      return gr().memoizedState;
    }
    function za(e, t, r, i) {
      var y = Fr();
      St.flags |= e, y.memoizedState = Ao(1 | t, r, void 0, i === void 0 ? null : i);
    }
    function Va(e, t, r, i) {
      var y = gr();
      i = i === void 0 ? null : i;
      var T = void 0;
      if (Rt !== null) {
        var F = Rt.memoizedState;
        if (T = F.destroy, i !== null && Du(i, F.deps)) {
          y.memoizedState = Ao(t, r, T, i);
          return;
        }
      }
      St.flags |= e, y.memoizedState = Ao(1 | t, r, T, i);
    }
    function Vh(e, t) {
      return za(8390656, 8, e, t);
    }
    function Ku(e, t) {
      return Va(2048, 8, e, t);
    }
    function Gh(e, t) {
      return Va(4, 2, e, t);
    }
    function Xh(e, t) {
      return Va(4, 4, e, t);
    }
    function Yh(e, t) {
      if (typeof t == "function") return e = e(), t(e), function() {
        t(null);
      };
      if (t != null) return e = e(), t.current = e, function() {
        t.current = null;
      };
    }
    function Qh(e, t, r) {
      return r = r != null ? r.concat([
        e
      ]) : null, Va(4, 4, Yh.bind(null, t, e), r);
    }
    function zu() {
    }
    function Jh(e, t) {
      var r = gr();
      t = t === void 0 ? null : t;
      var i = r.memoizedState;
      return i !== null && t !== null && Du(t, i[1]) ? i[0] : (r.memoizedState = [
        e,
        t
      ], e);
    }
    function Zh(e, t) {
      var r = gr();
      t = t === void 0 ? null : t;
      var i = r.memoizedState;
      return i !== null && t !== null && Du(t, i[1]) ? i[0] : (e = e(), r.memoizedState = [
        e,
        t
      ], e);
    }
    function $h(e, t, r) {
      return (Qn & 21) === 0 ? (e.baseState && (e.baseState = false, nr = true), e.memoizedState = r) : (Pr(r, t) || (r = Id(), St.lanes |= r, Jn |= r, e.baseState = true), t);
    }
    function h1(e, t) {
      var r = ft;
      ft = r !== 0 && 4 > r ? r : 4, e(true);
      var i = Mu.transition;
      Mu.transition = {};
      try {
        e(false), t();
      } finally {
        ft = r, Mu.transition = i;
      }
    }
    function ep() {
      return gr().memoizedState;
    }
    function p1(e, t, r) {
      var i = bn(e);
      if (r = {
        lane: i,
        action: r,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, tp(e)) rp(t, r);
      else if (r = Rh(e, t, r, i), r !== null) {
        var y = Zt();
        Or(r, e, i, y), np(r, t, i);
      }
    }
    function y1(e, t, r) {
      var i = bn(e), y = {
        lane: i,
        action: r,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (tp(e)) rp(t, y);
      else {
        var T = e.alternate;
        if (e.lanes === 0 && (T === null || T.lanes === 0) && (T = t.lastRenderedReducer, T !== null)) try {
          var F = t.lastRenderedState, J = T(F, r);
          if (y.hasEagerState = true, y.eagerState = J, Pr(J, F)) {
            var oe = t.interleaved;
            oe === null ? (y.next = y, Ru(t)) : (y.next = oe.next, oe.next = y), t.interleaved = y;
            return;
          }
        } catch {
        }
        r = Rh(e, t, y, i), r !== null && (y = Zt(), Or(r, e, i, y), np(r, t, i));
      }
    }
    function tp(e) {
      var t = e.alternate;
      return e === St || t !== null && t === St;
    }
    function rp(e, t) {
      xo = Ka = true;
      var r = e.pending;
      r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
    }
    function np(e, t, r) {
      if ((r & 4194240) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, r |= i, t.lanes = r, Gs(e, r);
      }
    }
    var Ga = {
      readContext: yr,
      useCallback: Gt,
      useContext: Gt,
      useEffect: Gt,
      useImperativeHandle: Gt,
      useInsertionEffect: Gt,
      useLayoutEffect: Gt,
      useMemo: Gt,
      useReducer: Gt,
      useRef: Gt,
      useState: Gt,
      useDebugValue: Gt,
      useDeferredValue: Gt,
      useTransition: Gt,
      useMutableSource: Gt,
      useSyncExternalStore: Gt,
      useId: Gt,
      unstable_isNewReconciler: false
    }, g1 = {
      readContext: yr,
      useCallback: function(e, t) {
        return Fr().memoizedState = [
          e,
          t === void 0 ? null : t
        ], e;
      },
      useContext: yr,
      useEffect: Vh,
      useImperativeHandle: function(e, t, r) {
        return r = r != null ? r.concat([
          e
        ]) : null, za(4194308, 4, Yh.bind(null, t, e), r);
      },
      useLayoutEffect: function(e, t) {
        return za(4194308, 4, e, t);
      },
      useInsertionEffect: function(e, t) {
        return za(4, 2, e, t);
      },
      useMemo: function(e, t) {
        var r = Fr();
        return t = t === void 0 ? null : t, e = e(), r.memoizedState = [
          e,
          t
        ], e;
      },
      useReducer: function(e, t, r) {
        var i = Fr();
        return t = r !== void 0 ? r(t) : t, i.memoizedState = i.baseState = t, e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }, i.queue = e, e = e.dispatch = p1.bind(null, St, e), [
          i.memoizedState,
          e
        ];
      },
      useRef: function(e) {
        var t = Fr();
        return e = {
          current: e
        }, t.memoizedState = e;
      },
      useState: Kh,
      useDebugValue: zu,
      useDeferredValue: function(e) {
        return Fr().memoizedState = e;
      },
      useTransition: function() {
        var e = Kh(false), t = e[0];
        return e = h1.bind(null, e[1]), Fr().memoizedState = e, [
          t,
          e
        ];
      },
      useMutableSource: function() {
      },
      useSyncExternalStore: function(e, t, r) {
        var i = St, y = Fr();
        if (_t) {
          if (r === void 0) throw Error(c(407));
          r = r();
        } else {
          if (r = t(), Lt === null) throw Error(c(349));
          (Qn & 30) !== 0 || Dh(i, t, r);
        }
        y.memoizedState = r;
        var T = {
          value: r,
          getSnapshot: t
        };
        return y.queue = T, Vh(qh.bind(null, i, T, e), [
          e
        ]), i.flags |= 2048, Ao(9, Hh.bind(null, i, T, r, t), void 0, null), r;
      },
      useId: function() {
        var e = Fr(), t = Lt.identifierPrefix;
        if (_t) {
          var r = Vr, i = zr;
          r = (i & ~(1 << 32 - xr(i) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Po++, 0 < r && (t += "H" + r.toString(32)), t += ":";
        } else r = d1++, t = ":" + t + "r" + r.toString(32) + ":";
        return e.memoizedState = t;
      },
      unstable_isNewReconciler: false
    }, m1 = {
      readContext: yr,
      useCallback: Jh,
      useContext: yr,
      useEffect: Ku,
      useImperativeHandle: Qh,
      useInsertionEffect: Gh,
      useLayoutEffect: Xh,
      useMemo: Zh,
      useReducer: ju,
      useRef: zh,
      useState: function() {
        return ju(ko);
      },
      useDebugValue: zu,
      useDeferredValue: function(e) {
        var t = gr();
        return $h(t, Rt.memoizedState, e);
      },
      useTransition: function() {
        var e = ju(ko)[0], t = gr().memoizedState;
        return [
          e,
          t
        ];
      },
      useMutableSource: Lh,
      useSyncExternalStore: Mh,
      useId: ep,
      unstable_isNewReconciler: false
    }, v1 = {
      readContext: yr,
      useCallback: Jh,
      useContext: yr,
      useEffect: Ku,
      useImperativeHandle: Qh,
      useInsertionEffect: Gh,
      useLayoutEffect: Xh,
      useMemo: Zh,
      useReducer: Wu,
      useRef: zh,
      useState: function() {
        return Wu(ko);
      },
      useDebugValue: zu,
      useDeferredValue: function(e) {
        var t = gr();
        return Rt === null ? t.memoizedState = e : $h(t, Rt.memoizedState, e);
      },
      useTransition: function() {
        var e = Wu(ko)[0], t = gr().memoizedState;
        return [
          e,
          t
        ];
      },
      useMutableSource: Lh,
      useSyncExternalStore: Mh,
      useId: ep,
      unstable_isNewReconciler: false
    };
    function Ar(e, t) {
      if (e && e.defaultProps) {
        t = Z({}, t), e = e.defaultProps;
        for (var r in e) t[r] === void 0 && (t[r] = e[r]);
        return t;
      }
      return t;
    }
    function Vu(e, t, r, i) {
      t = e.memoizedState, r = r(i, t), r = r == null ? t : Z({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
    }
    var Xa = {
      isMounted: function(e) {
        return (e = e._reactInternals) ? Wn(e) === e : false;
      },
      enqueueSetState: function(e, t, r) {
        e = e._reactInternals;
        var i = Zt(), y = bn(e), T = Xr(i, y);
        T.payload = t, r != null && (T.callback = r), t = wn(e, T, y), t !== null && (Or(t, e, y, i), Ha(t, e, y));
      },
      enqueueReplaceState: function(e, t, r) {
        e = e._reactInternals;
        var i = Zt(), y = bn(e), T = Xr(i, y);
        T.tag = 1, T.payload = t, r != null && (T.callback = r), t = wn(e, T, y), t !== null && (Or(t, e, y, i), Ha(t, e, y));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var r = Zt(), i = bn(e), y = Xr(r, i);
        y.tag = 2, t != null && (y.callback = t), t = wn(e, y, i), t !== null && (Or(t, e, i, r), Ha(t, e, i));
      }
    };
    function ip(e, t, r, i, y, T, F) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, T, F) : t.prototype && t.prototype.isPureReactComponent ? !po(r, i) || !po(y, T) : true;
    }
    function op(e, t, r) {
      var i = false, y = gn, T = t.contextType;
      return typeof T == "object" && T !== null ? T = yr(T) : (y = rr(t) ? zn : Vt.current, i = t.contextTypes, T = (i = i != null) ? Pi(e, y) : gn), t = new t(r, T), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Xa, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = y, e.__reactInternalMemoizedMaskedChildContext = T), t;
    }
    function ap(e, t, r, i) {
      e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, i), t.state !== e && Xa.enqueueReplaceState(t, t.state, null);
    }
    function Gu(e, t, r, i) {
      var y = e.stateNode;
      y.props = r, y.state = e.memoizedState, y.refs = {}, Cu(e);
      var T = t.contextType;
      typeof T == "object" && T !== null ? y.context = yr(T) : (T = rr(t) ? zn : Vt.current, y.context = Pi(e, T)), y.state = e.memoizedState, T = t.getDerivedStateFromProps, typeof T == "function" && (Vu(e, t, T, r), y.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function" || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (t = y.state, typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount(), t !== y.state && Xa.enqueueReplaceState(y, y.state, null), qa(e, r, y, i), y.state = e.memoizedState), typeof y.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function Ni(e, t) {
      try {
        var r = "", i = t;
        do
          r += me(i), i = i.return;
        while (i);
        var y = r;
      } catch (T) {
        y = `
Error generating stack: ` + T.message + `
` + T.stack;
      }
      return {
        value: e,
        source: t,
        stack: y,
        digest: null
      };
    }
    function Xu(e, t, r) {
      return {
        value: e,
        source: null,
        stack: r ?? null,
        digest: t ?? null
      };
    }
    function Yu(e, t) {
      try {
        console.error(t.value);
      } catch (r) {
        setTimeout(function() {
          throw r;
        });
      }
    }
    var w1 = typeof WeakMap == "function" ? WeakMap : Map;
    function sp(e, t, r) {
      r = Xr(-1, r), r.tag = 3, r.payload = {
        element: null
      };
      var i = t.value;
      return r.callback = function() {
        ts || (ts = true, fl = i), Yu(e, t);
      }, r;
    }
    function up(e, t, r) {
      r = Xr(-1, r), r.tag = 3;
      var i = e.type.getDerivedStateFromError;
      if (typeof i == "function") {
        var y = t.value;
        r.payload = function() {
          return i(y);
        }, r.callback = function() {
          Yu(e, t);
        };
      }
      var T = e.stateNode;
      return T !== null && typeof T.componentDidCatch == "function" && (r.callback = function() {
        Yu(e, t), typeof i != "function" && (En === null ? En = /* @__PURE__ */ new Set([
          this
        ]) : En.add(this));
        var F = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: F !== null ? F : ""
        });
      }), r;
    }
    function lp(e, t, r) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new w1();
        var y = /* @__PURE__ */ new Set();
        i.set(t, y);
      } else y = i.get(t), y === void 0 && (y = /* @__PURE__ */ new Set(), i.set(t, y));
      y.has(r) || (y.add(r), e = C1.bind(null, e, t, r), t.then(e, e));
    }
    function fp(e) {
      do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function cp(e, t, r, i, y) {
      return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Xr(-1, 1), t.tag = 2, wn(r, t, 1))), r.lanes |= 1), e) : (e.flags |= 65536, e.lanes = y, e);
    }
    var _1 = O.ReactCurrentOwner, nr = false;
    function Jt(e, t, r, i) {
      t.child = e === null ? Oh(t, null, r, i) : Bi(t, e.child, r, i);
    }
    function dp(e, t, r, i, y) {
      r = r.render;
      var T = t.ref;
      return Ri(t, y), i = Hu(e, t, r, i, T, y), r = qu(), e !== null && !nr ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~y, Yr(e, t, y)) : (_t && r && bu(t), t.flags |= 1, Jt(e, t, i, y), t.child);
    }
    function hp(e, t, r, i, y) {
      if (e === null) {
        var T = r.type;
        return typeof T == "function" && !ml(T) && T.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = T, pp(e, t, T, i, y)) : (e = ss(r.type, null, i, t, t.mode, y), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (T = e.child, (e.lanes & y) === 0) {
        var F = T.memoizedProps;
        if (r = r.compare, r = r !== null ? r : po, r(F, i) && e.ref === t.ref) return Yr(e, t, y);
      }
      return t.flags |= 1, e = xn(T, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function pp(e, t, r, i, y) {
      if (e !== null) {
        var T = e.memoizedProps;
        if (po(T, i) && e.ref === t.ref) if (nr = false, t.pendingProps = i = T, (e.lanes & y) !== 0) (e.flags & 131072) !== 0 && (nr = true);
        else return t.lanes = e.lanes, Yr(e, t, y);
      }
      return Qu(e, t, r, i, y);
    }
    function yp(e, t, r) {
      var i = t.pendingProps, y = i.children, T = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, yt(Fi, cr), cr |= r;
      else {
        if ((r & 1073741824) === 0) return e = T !== null ? T.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
          baseLanes: e,
          cachePool: null,
          transitions: null
        }, t.updateQueue = null, yt(Fi, cr), cr |= e, null;
        t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, i = T !== null ? T.baseLanes : r, yt(Fi, cr), cr |= i;
      }
      else T !== null ? (i = T.baseLanes | r, t.memoizedState = null) : i = r, yt(Fi, cr), cr |= i;
      return Jt(e, t, y, r), t.child;
    }
    function gp(e, t) {
      var r = t.ref;
      (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
    }
    function Qu(e, t, r, i, y) {
      var T = rr(r) ? zn : Vt.current;
      return T = Pi(t, T), Ri(t, y), r = Hu(e, t, r, i, T, y), i = qu(), e !== null && !nr ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~y, Yr(e, t, y)) : (_t && i && bu(t), t.flags |= 1, Jt(e, t, r, y), t.child);
    }
    function mp(e, t, r, i, y) {
      if (rr(r)) {
        var T = true;
        Ra(t);
      } else T = false;
      if (Ri(t, y), t.stateNode === null) Qa(e, t), op(t, r, i), Gu(t, r, i, y), i = true;
      else if (e === null) {
        var F = t.stateNode, J = t.memoizedProps;
        F.props = J;
        var oe = F.context, we = r.contextType;
        typeof we == "object" && we !== null ? we = yr(we) : (we = rr(r) ? zn : Vt.current, we = Pi(t, we));
        var ke = r.getDerivedStateFromProps, Ae = typeof ke == "function" || typeof F.getSnapshotBeforeUpdate == "function";
        Ae || typeof F.UNSAFE_componentWillReceiveProps != "function" && typeof F.componentWillReceiveProps != "function" || (J !== i || oe !== we) && ap(t, F, i, we), vn = false;
        var xe = t.memoizedState;
        F.state = xe, qa(t, i, F, y), oe = t.memoizedState, J !== i || xe !== oe || tr.current || vn ? (typeof ke == "function" && (Vu(t, r, ke, i), oe = t.memoizedState), (J = vn || ip(t, r, J, i, xe, oe, we)) ? (Ae || typeof F.UNSAFE_componentWillMount != "function" && typeof F.componentWillMount != "function" || (typeof F.componentWillMount == "function" && F.componentWillMount(), typeof F.UNSAFE_componentWillMount == "function" && F.UNSAFE_componentWillMount()), typeof F.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof F.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = oe), F.props = i, F.state = oe, F.context = we, i = J) : (typeof F.componentDidMount == "function" && (t.flags |= 4194308), i = false);
      } else {
        F = t.stateNode, Ch(e, t), J = t.memoizedProps, we = t.type === t.elementType ? J : Ar(t.type, J), F.props = we, Ae = t.pendingProps, xe = F.context, oe = r.contextType, typeof oe == "object" && oe !== null ? oe = yr(oe) : (oe = rr(r) ? zn : Vt.current, oe = Pi(t, oe));
        var Ne = r.getDerivedStateFromProps;
        (ke = typeof Ne == "function" || typeof F.getSnapshotBeforeUpdate == "function") || typeof F.UNSAFE_componentWillReceiveProps != "function" && typeof F.componentWillReceiveProps != "function" || (J !== Ae || xe !== oe) && ap(t, F, i, oe), vn = false, xe = t.memoizedState, F.state = xe, qa(t, i, F, y);
        var Fe = t.memoizedState;
        J !== Ae || xe !== Fe || tr.current || vn ? (typeof Ne == "function" && (Vu(t, r, Ne, i), Fe = t.memoizedState), (we = vn || ip(t, r, we, i, xe, Fe, oe) || false) ? (ke || typeof F.UNSAFE_componentWillUpdate != "function" && typeof F.componentWillUpdate != "function" || (typeof F.componentWillUpdate == "function" && F.componentWillUpdate(i, Fe, oe), typeof F.UNSAFE_componentWillUpdate == "function" && F.UNSAFE_componentWillUpdate(i, Fe, oe)), typeof F.componentDidUpdate == "function" && (t.flags |= 4), typeof F.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof F.componentDidUpdate != "function" || J === e.memoizedProps && xe === e.memoizedState || (t.flags |= 4), typeof F.getSnapshotBeforeUpdate != "function" || J === e.memoizedProps && xe === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = Fe), F.props = i, F.state = Fe, F.context = oe, i = we) : (typeof F.componentDidUpdate != "function" || J === e.memoizedProps && xe === e.memoizedState || (t.flags |= 4), typeof F.getSnapshotBeforeUpdate != "function" || J === e.memoizedProps && xe === e.memoizedState || (t.flags |= 1024), i = false);
      }
      return Ju(e, t, r, i, T, y);
    }
    function Ju(e, t, r, i, y, T) {
      gp(e, t);
      var F = (t.flags & 128) !== 0;
      if (!i && !F) return y && Sh(t, r, false), Yr(e, t, T);
      i = t.stateNode, _1.current = t;
      var J = F && typeof r.getDerivedStateFromError != "function" ? null : i.render();
      return t.flags |= 1, e !== null && F ? (t.child = Bi(t, e.child, null, T), t.child = Bi(t, null, J, T)) : Jt(e, t, J, T), t.memoizedState = i.state, y && Sh(t, r, true), t.child;
    }
    function vp(e) {
      var t = e.stateNode;
      t.pendingContext ? _h(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _h(e, t.context, false), Nu(e, t.containerInfo);
    }
    function wp(e, t, r, i, y) {
      return Ii(), ku(y), t.flags |= 256, Jt(e, t, r, i), t.child;
    }
    var Zu = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0
    };
    function $u(e) {
      return {
        baseLanes: e,
        cachePool: null,
        transitions: null
      };
    }
    function _p(e, t, r) {
      var i = t.pendingProps, y = Et.current, T = false, F = (t.flags & 128) !== 0, J;
      if ((J = F) || (J = e !== null && e.memoizedState === null ? false : (y & 2) !== 0), J ? (T = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (y |= 1), yt(Et, y & 1), e === null) return Pu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (F = i.children, e = i.fallback, T ? (i = t.mode, T = t.child, F = {
        mode: "hidden",
        children: F
      }, (i & 1) === 0 && T !== null ? (T.childLanes = 0, T.pendingProps = F) : T = us(F, i, 0, null), e = ti(e, i, r, null), T.return = t, e.return = t, T.sibling = e, t.child = T, t.child.memoizedState = $u(r), t.memoizedState = Zu, e) : el(t, F));
      if (y = e.memoizedState, y !== null && (J = y.dehydrated, J !== null)) return E1(e, t, F, i, J, y, r);
      if (T) {
        T = i.fallback, F = t.mode, y = e.child, J = y.sibling;
        var oe = {
          mode: "hidden",
          children: i.children
        };
        return (F & 1) === 0 && t.child !== y ? (i = t.child, i.childLanes = 0, i.pendingProps = oe, t.deletions = null) : (i = xn(y, oe), i.subtreeFlags = y.subtreeFlags & 14680064), J !== null ? T = xn(J, T) : (T = ti(T, F, r, null), T.flags |= 2), T.return = t, i.return = t, i.sibling = T, t.child = i, i = T, T = t.child, F = e.child.memoizedState, F = F === null ? $u(r) : {
          baseLanes: F.baseLanes | r,
          cachePool: null,
          transitions: F.transitions
        }, T.memoizedState = F, T.childLanes = e.childLanes & ~r, t.memoizedState = Zu, i;
      }
      return T = e.child, e = T.sibling, i = xn(T, {
        mode: "visible",
        children: i.children
      }), (t.mode & 1) === 0 && (i.lanes = r), i.return = t, i.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [
        e
      ], t.flags |= 16) : r.push(e)), t.child = i, t.memoizedState = null, i;
    }
    function el(e, t) {
      return t = us({
        mode: "visible",
        children: t
      }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function Ya(e, t, r, i) {
      return i !== null && ku(i), Bi(t, e.child, null, r), e = el(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function E1(e, t, r, i, y, T, F) {
      if (r) return t.flags & 256 ? (t.flags &= -257, i = Xu(Error(c(422))), Ya(e, t, F, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (T = i.fallback, y = t.mode, i = us({
        mode: "visible",
        children: i.children
      }, y, 0, null), T = ti(T, y, F, null), T.flags |= 2, i.return = t, T.return = t, i.sibling = T, t.child = i, (t.mode & 1) !== 0 && Bi(t, e.child, null, F), t.child.memoizedState = $u(F), t.memoizedState = Zu, T);
      if ((t.mode & 1) === 0) return Ya(e, t, F, null);
      if (y.data === "$!") {
        if (i = y.nextSibling && y.nextSibling.dataset, i) var J = i.dgst;
        return i = J, T = Error(c(419)), i = Xu(T, i, void 0), Ya(e, t, F, i);
      }
      if (J = (F & e.childLanes) !== 0, nr || J) {
        if (i = Lt, i !== null) {
          switch (F & -F) {
            case 4:
              y = 2;
              break;
            case 16:
              y = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              y = 32;
              break;
            case 536870912:
              y = 268435456;
              break;
            default:
              y = 0;
          }
          y = (y & (i.suspendedLanes | F)) !== 0 ? 0 : y, y !== 0 && y !== T.retryLane && (T.retryLane = y, Gr(e, y), Or(i, e, y, -1));
        }
        return gl(), i = Xu(Error(c(421))), Ya(e, t, F, i);
      }
      return y.data === "$?" ? (t.flags |= 128, t.child = e.child, t = N1.bind(null, e), y._reactRetry = t, null) : (e = T.treeContext, fr = pn(y.nextSibling), lr = t, _t = true, kr = null, e !== null && (hr[pr++] = zr, hr[pr++] = Vr, hr[pr++] = Vn, zr = e.id, Vr = e.overflow, Vn = t), t = el(t, i.children), t.flags |= 4096, t);
    }
    function Ep(e, t, r) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Ou(e.return, t, r);
    }
    function tl(e, t, r, i, y) {
      var T = e.memoizedState;
      T === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: r,
        tailMode: y
      } : (T.isBackwards = t, T.rendering = null, T.renderingStartTime = 0, T.last = i, T.tail = r, T.tailMode = y);
    }
    function Sp(e, t, r) {
      var i = t.pendingProps, y = i.revealOrder, T = i.tail;
      if (Jt(e, t, i.children, r), i = Et.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ep(e, r, t);
          else if (e.tag === 19) Ep(e, r, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
        i &= 1;
      }
      if (yt(Et, i), (t.mode & 1) === 0) t.memoizedState = null;
      else switch (y) {
        case "forwards":
          for (r = t.child, y = null; r !== null; ) e = r.alternate, e !== null && ja(e) === null && (y = r), r = r.sibling;
          r = y, r === null ? (y = t.child, t.child = null) : (y = r.sibling, r.sibling = null), tl(t, false, y, r, T);
          break;
        case "backwards":
          for (r = null, y = t.child, t.child = null; y !== null; ) {
            if (e = y.alternate, e !== null && ja(e) === null) {
              t.child = y;
              break;
            }
            e = y.sibling, y.sibling = r, r = y, y = e;
          }
          tl(t, true, r, null, T);
          break;
        case "together":
          tl(t, false, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Qa(e, t) {
      (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function Yr(e, t, r) {
      if (e !== null && (t.dependencies = e.dependencies), Jn |= t.lanes, (r & t.childLanes) === 0) return null;
      if (e !== null && t.child !== e.child) throw Error(c(153));
      if (t.child !== null) {
        for (e = t.child, r = xn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = xn(e, e.pendingProps), r.return = t;
        r.sibling = null;
      }
      return t.child;
    }
    function S1(e, t, r) {
      switch (t.tag) {
        case 3:
          vp(t), Ii();
          break;
        case 5:
          Fh(t);
          break;
        case 1:
          rr(t.type) && Ra(t);
          break;
        case 4:
          Nu(t, t.stateNode.containerInfo);
          break;
        case 10:
          var i = t.type._context, y = t.memoizedProps.value;
          yt(Ma, i._currentValue), i._currentValue = y;
          break;
        case 13:
          if (i = t.memoizedState, i !== null) return i.dehydrated !== null ? (yt(Et, Et.current & 1), t.flags |= 128, null) : (r & t.child.childLanes) !== 0 ? _p(e, t, r) : (yt(Et, Et.current & 1), e = Yr(e, t, r), e !== null ? e.sibling : null);
          yt(Et, Et.current & 1);
          break;
        case 19:
          if (i = (r & t.childLanes) !== 0, (e.flags & 128) !== 0) {
            if (i) return Sp(e, t, r);
            t.flags |= 128;
          }
          if (y = t.memoizedState, y !== null && (y.rendering = null, y.tail = null, y.lastEffect = null), yt(Et, Et.current), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, yp(e, t, r);
      }
      return Yr(e, t, r);
    }
    var bp, rl, Tp, xp;
    bp = function(e, t) {
      for (var r = t.child; r !== null; ) {
        if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
          r.child.return = r, r = r.child;
          continue;
        }
        if (r === t) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === t) return;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }, rl = function() {
    }, Tp = function(e, t, r, i) {
      var y = e.memoizedProps;
      if (y !== i) {
        e = t.stateNode, Yn(Ur.current);
        var T = null;
        switch (r) {
          case "input":
            y = Pe(e, y), i = Pe(e, i), T = [];
            break;
          case "select":
            y = Z({}, y, {
              value: void 0
            }), i = Z({}, i, {
              value: void 0
            }), T = [];
            break;
          case "textarea":
            y = Ve(e, y), i = Ve(e, i), T = [];
            break;
          default:
            typeof y.onClick != "function" && typeof i.onClick == "function" && (e.onclick = Ia);
        }
        de(r, i);
        var F;
        r = null;
        for (we in y) if (!i.hasOwnProperty(we) && y.hasOwnProperty(we) && y[we] != null) if (we === "style") {
          var J = y[we];
          for (F in J) J.hasOwnProperty(F) && (r || (r = {}), r[F] = "");
        } else we !== "dangerouslySetInnerHTML" && we !== "children" && we !== "suppressContentEditableWarning" && we !== "suppressHydrationWarning" && we !== "autoFocus" && (_.hasOwnProperty(we) ? T || (T = []) : (T = T || []).push(we, null));
        for (we in i) {
          var oe = i[we];
          if (J = y == null ? void 0 : y[we], i.hasOwnProperty(we) && oe !== J && (oe != null || J != null)) if (we === "style") if (J) {
            for (F in J) !J.hasOwnProperty(F) || oe && oe.hasOwnProperty(F) || (r || (r = {}), r[F] = "");
            for (F in oe) oe.hasOwnProperty(F) && J[F] !== oe[F] && (r || (r = {}), r[F] = oe[F]);
          } else r || (T || (T = []), T.push(we, r)), r = oe;
          else we === "dangerouslySetInnerHTML" ? (oe = oe ? oe.__html : void 0, J = J ? J.__html : void 0, oe != null && J !== oe && (T = T || []).push(we, oe)) : we === "children" ? typeof oe != "string" && typeof oe != "number" || (T = T || []).push(we, "" + oe) : we !== "suppressContentEditableWarning" && we !== "suppressHydrationWarning" && (_.hasOwnProperty(we) ? (oe != null && we === "onScroll" && gt("scroll", e), T || J === oe || (T = [])) : (T = T || []).push(we, oe));
        }
        r && (T = T || []).push("style", r);
        var we = T;
        (t.updateQueue = we) && (t.flags |= 4);
      }
    }, xp = function(e, t, r, i) {
      r !== i && (t.flags |= 4);
    };
    function Io(e, t) {
      if (!_t) switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
          r === null ? e.tail = null : r.sibling = null;
          break;
        case "collapsed":
          r = e.tail;
          for (var i = null; r !== null; ) r.alternate !== null && (i = r), r = r.sibling;
          i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
      }
    }
    function Xt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, r = 0, i = 0;
      if (t) for (var y = e.child; y !== null; ) r |= y.lanes | y.childLanes, i |= y.subtreeFlags & 14680064, i |= y.flags & 14680064, y.return = e, y = y.sibling;
      else for (y = e.child; y !== null; ) r |= y.lanes | y.childLanes, i |= y.subtreeFlags, i |= y.flags, y.return = e, y = y.sibling;
      return e.subtreeFlags |= i, e.childLanes = r, t;
    }
    function b1(e, t, r) {
      var i = t.pendingProps;
      switch (Tu(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Xt(t), null;
        case 1:
          return rr(t.type) && Oa(), Xt(t), null;
        case 3:
          return i = t.stateNode, Ci(), mt(tr), mt(Vt), Lu(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Fa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, kr !== null && (hl(kr), kr = null))), rl(e, t), Xt(t), null;
        case 5:
          Uu(t);
          var y = Yn(To.current);
          if (r = t.type, e !== null && t.stateNode != null) Tp(e, t, r, i, y), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
          else {
            if (!i) {
              if (t.stateNode === null) throw Error(c(166));
              return Xt(t), null;
            }
            if (e = Yn(Ur.current), Fa(t)) {
              i = t.stateNode, r = t.type;
              var T = t.memoizedProps;
              switch (i[Nr] = t, i[wo] = T, e = (t.mode & 1) !== 0, r) {
                case "dialog":
                  gt("cancel", i), gt("close", i);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  gt("load", i);
                  break;
                case "video":
                case "audio":
                  for (y = 0; y < go.length; y++) gt(go[y], i);
                  break;
                case "source":
                  gt("error", i);
                  break;
                case "img":
                case "image":
                case "link":
                  gt("error", i), gt("load", i);
                  break;
                case "details":
                  gt("toggle", i);
                  break;
                case "input":
                  qe(i, T), gt("invalid", i);
                  break;
                case "select":
                  i._wrapperState = {
                    wasMultiple: !!T.multiple
                  }, gt("invalid", i);
                  break;
                case "textarea":
                  Ze(i, T), gt("invalid", i);
              }
              de(r, T), y = null;
              for (var F in T) if (T.hasOwnProperty(F)) {
                var J = T[F];
                F === "children" ? typeof J == "string" ? i.textContent !== J && (T.suppressHydrationWarning !== true && Aa(i.textContent, J, e), y = [
                  "children",
                  J
                ]) : typeof J == "number" && i.textContent !== "" + J && (T.suppressHydrationWarning !== true && Aa(i.textContent, J, e), y = [
                  "children",
                  "" + J
                ]) : _.hasOwnProperty(F) && J != null && F === "onScroll" && gt("scroll", i);
              }
              switch (r) {
                case "input":
                  H(i), ct(i, T, true);
                  break;
                case "textarea":
                  H(i), st(i);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof T.onClick == "function" && (i.onclick = Ia);
              }
              i = y, t.updateQueue = i, i !== null && (t.flags |= 4);
            } else {
              F = y.nodeType === 9 ? y : y.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ut(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = F.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = F.createElement(r, {
                is: i.is
              }) : (e = F.createElement(r), r === "select" && (F = e, i.multiple ? F.multiple = true : i.size && (F.size = i.size))) : e = F.createElementNS(e, r), e[Nr] = t, e[wo] = i, bp(e, t, false, false), t.stateNode = e;
              e: {
                switch (F = Oe(r, i), r) {
                  case "dialog":
                    gt("cancel", e), gt("close", e), y = i;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    gt("load", e), y = i;
                    break;
                  case "video":
                  case "audio":
                    for (y = 0; y < go.length; y++) gt(go[y], e);
                    y = i;
                    break;
                  case "source":
                    gt("error", e), y = i;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    gt("error", e), gt("load", e), y = i;
                    break;
                  case "details":
                    gt("toggle", e), y = i;
                    break;
                  case "input":
                    qe(e, i), y = Pe(e, i), gt("invalid", e);
                    break;
                  case "option":
                    y = i;
                    break;
                  case "select":
                    e._wrapperState = {
                      wasMultiple: !!i.multiple
                    }, y = Z({}, i, {
                      value: void 0
                    }), gt("invalid", e);
                    break;
                  case "textarea":
                    Ze(e, i), y = Ve(e, i), gt("invalid", e);
                    break;
                  default:
                    y = i;
                }
                de(r, y), J = y;
                for (T in J) if (J.hasOwnProperty(T)) {
                  var oe = J[T];
                  T === "style" ? z(e, oe) : T === "dangerouslySetInnerHTML" ? (oe = oe ? oe.__html : void 0, oe != null && M(e, oe)) : T === "children" ? typeof oe == "string" ? (r !== "textarea" || oe !== "") && b(e, oe) : typeof oe == "number" && b(e, "" + oe) : T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && T !== "autoFocus" && (_.hasOwnProperty(T) ? oe != null && T === "onScroll" && gt("scroll", e) : oe != null && B(e, T, oe, F));
                }
                switch (r) {
                  case "input":
                    H(e), ct(e, i, false);
                    break;
                  case "textarea":
                    H(e), st(e);
                    break;
                  case "option":
                    i.value != null && e.setAttribute("value", "" + N(i.value));
                    break;
                  case "select":
                    e.multiple = !!i.multiple, T = i.value, T != null ? Qe(e, !!i.multiple, T, false) : i.defaultValue != null && Qe(e, !!i.multiple, i.defaultValue, true);
                    break;
                  default:
                    typeof y.onClick == "function" && (e.onclick = Ia);
                }
                switch (r) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    i = !!i.autoFocus;
                    break e;
                  case "img":
                    i = true;
                    break e;
                  default:
                    i = false;
                }
              }
              i && (t.flags |= 4);
            }
            t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
          }
          return Xt(t), null;
        case 6:
          if (e && t.stateNode != null) xp(e, t, e.memoizedProps, i);
          else {
            if (typeof i != "string" && t.stateNode === null) throw Error(c(166));
            if (r = Yn(To.current), Yn(Ur.current), Fa(t)) {
              if (i = t.stateNode, r = t.memoizedProps, i[Nr] = t, (T = i.nodeValue !== r) && (e = lr, e !== null)) switch (e.tag) {
                case 3:
                  Aa(i.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== true && Aa(i.nodeValue, r, (e.mode & 1) !== 0);
              }
              T && (t.flags |= 4);
            } else i = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(i), i[Nr] = t, t.stateNode = i;
          }
          return Xt(t), null;
        case 13:
          if (mt(Et), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (_t && fr !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Ah(), Ii(), t.flags |= 98560, T = false;
            else if (T = Fa(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!T) throw Error(c(318));
                if (T = t.memoizedState, T = T !== null ? T.dehydrated : null, !T) throw Error(c(317));
                T[Nr] = t;
              } else Ii(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              Xt(t), T = false;
            } else kr !== null && (hl(kr), kr = null), T = true;
            if (!T) return t.flags & 65536 ? t : null;
          }
          return (t.flags & 128) !== 0 ? (t.lanes = r, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Et.current & 1) !== 0 ? Ct === 0 && (Ct = 3) : gl())), t.updateQueue !== null && (t.flags |= 4), Xt(t), null);
        case 4:
          return Ci(), rl(e, t), e === null && mo(t.stateNode.containerInfo), Xt(t), null;
        case 10:
          return Bu(t.type._context), Xt(t), null;
        case 17:
          return rr(t.type) && Oa(), Xt(t), null;
        case 19:
          if (mt(Et), T = t.memoizedState, T === null) return Xt(t), null;
          if (i = (t.flags & 128) !== 0, F = T.rendering, F === null) if (i) Io(T, false);
          else {
            if (Ct !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
              if (F = ja(e), F !== null) {
                for (t.flags |= 128, Io(T, false), i = F.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = r, r = t.child; r !== null; ) T = r, e = i, T.flags &= 14680066, F = T.alternate, F === null ? (T.childLanes = 0, T.lanes = e, T.child = null, T.subtreeFlags = 0, T.memoizedProps = null, T.memoizedState = null, T.updateQueue = null, T.dependencies = null, T.stateNode = null) : (T.childLanes = F.childLanes, T.lanes = F.lanes, T.child = F.child, T.subtreeFlags = 0, T.deletions = null, T.memoizedProps = F.memoizedProps, T.memoizedState = F.memoizedState, T.updateQueue = F.updateQueue, T.type = F.type, e = F.dependencies, T.dependencies = e === null ? null : {
                  lanes: e.lanes,
                  firstContext: e.firstContext
                }), r = r.sibling;
                return yt(Et, Et.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
            T.tail !== null && At() > Li && (t.flags |= 128, i = true, Io(T, false), t.lanes = 4194304);
          }
          else {
            if (!i) if (e = ja(F), e !== null) {
              if (t.flags |= 128, i = true, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), Io(T, true), T.tail === null && T.tailMode === "hidden" && !F.alternate && !_t) return Xt(t), null;
            } else 2 * At() - T.renderingStartTime > Li && r !== 1073741824 && (t.flags |= 128, i = true, Io(T, false), t.lanes = 4194304);
            T.isBackwards ? (F.sibling = t.child, t.child = F) : (r = T.last, r !== null ? r.sibling = F : t.child = F, T.last = F);
          }
          return T.tail !== null ? (t = T.tail, T.rendering = t, T.tail = t.sibling, T.renderingStartTime = At(), t.sibling = null, r = Et.current, yt(Et, i ? r & 1 | 2 : r & 1), t) : (Xt(t), null);
        case 22:
        case 23:
          return yl(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && (t.mode & 1) !== 0 ? (cr & 1073741824) !== 0 && (Xt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Xt(t), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(c(156, t.tag));
    }
    function T1(e, t) {
      switch (Tu(t), t.tag) {
        case 1:
          return rr(t.type) && Oa(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
          return Ci(), mt(tr), mt(Vt), Lu(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
          return Uu(t), null;
        case 13:
          if (mt(Et), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null) throw Error(c(340));
            Ii();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
          return mt(Et), null;
        case 4:
          return Ci(), null;
        case 10:
          return Bu(t.type._context), null;
        case 22:
        case 23:
          return yl(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Ja = false, Yt = false, x1 = typeof WeakSet == "function" ? WeakSet : Set, Ue = null;
    function Ui(e, t) {
      var r = e.ref;
      if (r !== null) if (typeof r == "function") try {
        r(null);
      } catch (i) {
        Tt(e, t, i);
      }
      else r.current = null;
    }
    function nl(e, t, r) {
      try {
        r();
      } catch (i) {
        Tt(e, t, i);
      }
    }
    var Pp = false;
    function P1(e, t) {
      if (yu = ma, e = ih(), su(e)) {
        if ("selectionStart" in e) var r = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
        else e: {
          r = (r = e.ownerDocument) && r.defaultView || window;
          var i = r.getSelection && r.getSelection();
          if (i && i.rangeCount !== 0) {
            r = i.anchorNode;
            var y = i.anchorOffset, T = i.focusNode;
            i = i.focusOffset;
            try {
              r.nodeType, T.nodeType;
            } catch {
              r = null;
              break e;
            }
            var F = 0, J = -1, oe = -1, we = 0, ke = 0, Ae = e, xe = null;
            t: for (; ; ) {
              for (var Ne; Ae !== r || y !== 0 && Ae.nodeType !== 3 || (J = F + y), Ae !== T || i !== 0 && Ae.nodeType !== 3 || (oe = F + i), Ae.nodeType === 3 && (F += Ae.nodeValue.length), (Ne = Ae.firstChild) !== null; ) xe = Ae, Ae = Ne;
              for (; ; ) {
                if (Ae === e) break t;
                if (xe === r && ++we === y && (J = F), xe === T && ++ke === i && (oe = F), (Ne = Ae.nextSibling) !== null) break;
                Ae = xe, xe = Ae.parentNode;
              }
              Ae = Ne;
            }
            r = J === -1 || oe === -1 ? null : {
              start: J,
              end: oe
            };
          } else r = null;
        }
        r = r || {
          start: 0,
          end: 0
        };
      } else r = null;
      for (gu = {
        focusedElem: e,
        selectionRange: r
      }, ma = false, Ue = t; Ue !== null; ) if (t = Ue, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Ue = e;
      else for (; Ue !== null; ) {
        t = Ue;
        try {
          var Fe = t.alternate;
          if ((t.flags & 1024) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (Fe !== null) {
                var Me = Fe.memoizedProps, It = Fe.memoizedState, ge = t.stateNode, ue = ge.getSnapshotBeforeUpdate(t.elementType === t.type ? Me : Ar(t.type, Me), It);
                ge.__reactInternalSnapshotBeforeUpdate = ue;
              }
              break;
            case 3:
              var ve = t.stateNode.containerInfo;
              ve.nodeType === 1 ? ve.textContent = "" : ve.nodeType === 9 && ve.documentElement && ve.removeChild(ve.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(c(163));
          }
        } catch (Be) {
          Tt(t, t.return, Be);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, Ue = e;
          break;
        }
        Ue = t.return;
      }
      return Fe = Pp, Pp = false, Fe;
    }
    function Bo(e, t, r) {
      var i = t.updateQueue;
      if (i = i !== null ? i.lastEffect : null, i !== null) {
        var y = i = i.next;
        do {
          if ((y.tag & e) === e) {
            var T = y.destroy;
            y.destroy = void 0, T !== void 0 && nl(t, r, T);
          }
          y = y.next;
        } while (y !== i);
      }
    }
    function Za(e, t) {
      if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var r = t = t.next;
        do {
          if ((r.tag & e) === e) {
            var i = r.create;
            r.destroy = i();
          }
          r = r.next;
        } while (r !== t);
      }
    }
    function il(e) {
      var t = e.ref;
      if (t !== null) {
        var r = e.stateNode;
        e.tag, e = r, typeof t == "function" ? t(e) : t.current = e;
      }
    }
    function kp(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, kp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Nr], delete t[wo], delete t[_u], delete t[u1], delete t[l1])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Ap(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Ip(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Ap(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function ol(e, t, r) {
      var i = e.tag;
      if (i === 5 || i === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Ia));
      else if (i !== 4 && (e = e.child, e !== null)) for (ol(e, t, r), e = e.sibling; e !== null; ) ol(e, t, r), e = e.sibling;
    }
    function al(e, t, r) {
      var i = e.tag;
      if (i === 5 || i === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
      else if (i !== 4 && (e = e.child, e !== null)) for (al(e, t, r), e = e.sibling; e !== null; ) al(e, t, r), e = e.sibling;
    }
    var Ht = null, Ir = false;
    function _n(e, t, r) {
      for (r = r.child; r !== null; ) Bp(e, t, r), r = r.sibling;
    }
    function Bp(e, t, r) {
      if (Cr && typeof Cr.onCommitFiberUnmount == "function") try {
        Cr.onCommitFiberUnmount(ca, r);
      } catch {
      }
      switch (r.tag) {
        case 5:
          Yt || Ui(r, t);
        case 6:
          var i = Ht, y = Ir;
          Ht = null, _n(e, t, r), Ht = i, Ir = y, Ht !== null && (Ir ? (e = Ht, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Ht.removeChild(r.stateNode));
          break;
        case 18:
          Ht !== null && (Ir ? (e = Ht, r = r.stateNode, e.nodeType === 8 ? wu(e.parentNode, r) : e.nodeType === 1 && wu(e, r), so(e)) : wu(Ht, r.stateNode));
          break;
        case 4:
          i = Ht, y = Ir, Ht = r.stateNode.containerInfo, Ir = true, _n(e, t, r), Ht = i, Ir = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!Yt && (i = r.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
            y = i = i.next;
            do {
              var T = y, F = T.destroy;
              T = T.tag, F !== void 0 && ((T & 2) !== 0 || (T & 4) !== 0) && nl(r, t, F), y = y.next;
            } while (y !== i);
          }
          _n(e, t, r);
          break;
        case 1:
          if (!Yt && (Ui(r, t), i = r.stateNode, typeof i.componentWillUnmount == "function")) try {
            i.props = r.memoizedProps, i.state = r.memoizedState, i.componentWillUnmount();
          } catch (J) {
            Tt(r, t, J);
          }
          _n(e, t, r);
          break;
        case 21:
          _n(e, t, r);
          break;
        case 22:
          r.mode & 1 ? (Yt = (i = Yt) || r.memoizedState !== null, _n(e, t, r), Yt = i) : _n(e, t, r);
          break;
        default:
          _n(e, t, r);
      }
    }
    function Op(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new x1()), t.forEach(function(i) {
          var y = U1.bind(null, e, i);
          r.has(i) || (r.add(i), i.then(y, y));
        });
      }
    }
    function Br(e, t) {
      var r = t.deletions;
      if (r !== null) for (var i = 0; i < r.length; i++) {
        var y = r[i];
        try {
          var T = e, F = t, J = F;
          e: for (; J !== null; ) {
            switch (J.tag) {
              case 5:
                Ht = J.stateNode, Ir = false;
                break e;
              case 3:
                Ht = J.stateNode.containerInfo, Ir = true;
                break e;
              case 4:
                Ht = J.stateNode.containerInfo, Ir = true;
                break e;
            }
            J = J.return;
          }
          if (Ht === null) throw Error(c(160));
          Bp(T, F, y), Ht = null, Ir = false;
          var oe = y.alternate;
          oe !== null && (oe.return = null), y.return = null;
        } catch (we) {
          Tt(y, t, we);
        }
      }
      if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Rp(t, e), t = t.sibling;
    }
    function Rp(e, t) {
      var r = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (Br(t, e), Lr(e), i & 4) {
            try {
              Bo(3, e, e.return), Za(3, e);
            } catch (Me) {
              Tt(e, e.return, Me);
            }
            try {
              Bo(5, e, e.return);
            } catch (Me) {
              Tt(e, e.return, Me);
            }
          }
          break;
        case 1:
          Br(t, e), Lr(e), i & 512 && r !== null && Ui(r, r.return);
          break;
        case 5:
          if (Br(t, e), Lr(e), i & 512 && r !== null && Ui(r, r.return), e.flags & 32) {
            var y = e.stateNode;
            try {
              b(y, "");
            } catch (Me) {
              Tt(e, e.return, Me);
            }
          }
          if (i & 4 && (y = e.stateNode, y != null)) {
            var T = e.memoizedProps, F = r !== null ? r.memoizedProps : T, J = e.type, oe = e.updateQueue;
            if (e.updateQueue = null, oe !== null) try {
              J === "input" && T.type === "radio" && T.name != null && Ce(y, T), Oe(J, F);
              var we = Oe(J, T);
              for (F = 0; F < oe.length; F += 2) {
                var ke = oe[F], Ae = oe[F + 1];
                ke === "style" ? z(y, Ae) : ke === "dangerouslySetInnerHTML" ? M(y, Ae) : ke === "children" ? b(y, Ae) : B(y, ke, Ae, we);
              }
              switch (J) {
                case "input":
                  Ke(y, T);
                  break;
                case "textarea":
                  nt(y, T);
                  break;
                case "select":
                  var xe = y._wrapperState.wasMultiple;
                  y._wrapperState.wasMultiple = !!T.multiple;
                  var Ne = T.value;
                  Ne != null ? Qe(y, !!T.multiple, Ne, false) : xe !== !!T.multiple && (T.defaultValue != null ? Qe(y, !!T.multiple, T.defaultValue, true) : Qe(y, !!T.multiple, T.multiple ? [] : "", false));
              }
              y[wo] = T;
            } catch (Me) {
              Tt(e, e.return, Me);
            }
          }
          break;
        case 6:
          if (Br(t, e), Lr(e), i & 4) {
            if (e.stateNode === null) throw Error(c(162));
            y = e.stateNode, T = e.memoizedProps;
            try {
              y.nodeValue = T;
            } catch (Me) {
              Tt(e, e.return, Me);
            }
          }
          break;
        case 3:
          if (Br(t, e), Lr(e), i & 4 && r !== null && r.memoizedState.isDehydrated) try {
            so(t.containerInfo);
          } catch (Me) {
            Tt(e, e.return, Me);
          }
          break;
        case 4:
          Br(t, e), Lr(e);
          break;
        case 13:
          Br(t, e), Lr(e), y = e.child, y.flags & 8192 && (T = y.memoizedState !== null, y.stateNode.isHidden = T, !T || y.alternate !== null && y.alternate.memoizedState !== null || (ll = At())), i & 4 && Op(e);
          break;
        case 22:
          if (ke = r !== null && r.memoizedState !== null, e.mode & 1 ? (Yt = (we = Yt) || ke, Br(t, e), Yt = we) : Br(t, e), Lr(e), i & 8192) {
            if (we = e.memoizedState !== null, (e.stateNode.isHidden = we) && !ke && (e.mode & 1) !== 0) for (Ue = e, ke = e.child; ke !== null; ) {
              for (Ae = Ue = ke; Ue !== null; ) {
                switch (xe = Ue, Ne = xe.child, xe.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Bo(4, xe, xe.return);
                    break;
                  case 1:
                    Ui(xe, xe.return);
                    var Fe = xe.stateNode;
                    if (typeof Fe.componentWillUnmount == "function") {
                      i = xe, r = xe.return;
                      try {
                        t = i, Fe.props = t.memoizedProps, Fe.state = t.memoizedState, Fe.componentWillUnmount();
                      } catch (Me) {
                        Tt(i, r, Me);
                      }
                    }
                    break;
                  case 5:
                    Ui(xe, xe.return);
                    break;
                  case 22:
                    if (xe.memoizedState !== null) {
                      Up(Ae);
                      continue;
                    }
                }
                Ne !== null ? (Ne.return = xe, Ue = Ne) : Up(Ae);
              }
              ke = ke.sibling;
            }
            e: for (ke = null, Ae = e; ; ) {
              if (Ae.tag === 5) {
                if (ke === null) {
                  ke = Ae;
                  try {
                    y = Ae.stateNode, we ? (T = y.style, typeof T.setProperty == "function" ? T.setProperty("display", "none", "important") : T.display = "none") : (J = Ae.stateNode, oe = Ae.memoizedProps.style, F = oe != null && oe.hasOwnProperty("display") ? oe.display : null, J.style.display = L("display", F));
                  } catch (Me) {
                    Tt(e, e.return, Me);
                  }
                }
              } else if (Ae.tag === 6) {
                if (ke === null) try {
                  Ae.stateNode.nodeValue = we ? "" : Ae.memoizedProps;
                } catch (Me) {
                  Tt(e, e.return, Me);
                }
              } else if ((Ae.tag !== 22 && Ae.tag !== 23 || Ae.memoizedState === null || Ae === e) && Ae.child !== null) {
                Ae.child.return = Ae, Ae = Ae.child;
                continue;
              }
              if (Ae === e) break e;
              for (; Ae.sibling === null; ) {
                if (Ae.return === null || Ae.return === e) break e;
                ke === Ae && (ke = null), Ae = Ae.return;
              }
              ke === Ae && (ke = null), Ae.sibling.return = Ae.return, Ae = Ae.sibling;
            }
          }
          break;
        case 19:
          Br(t, e), Lr(e), i & 4 && Op(e);
          break;
        case 21:
          break;
        default:
          Br(t, e), Lr(e);
      }
    }
    function Lr(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          e: {
            for (var r = e.return; r !== null; ) {
              if (Ap(r)) {
                var i = r;
                break e;
              }
              r = r.return;
            }
            throw Error(c(160));
          }
          switch (i.tag) {
            case 5:
              var y = i.stateNode;
              i.flags & 32 && (b(y, ""), i.flags &= -33);
              var T = Ip(e);
              al(e, T, y);
              break;
            case 3:
            case 4:
              var F = i.stateNode.containerInfo, J = Ip(e);
              ol(e, J, F);
              break;
            default:
              throw Error(c(161));
          }
        } catch (oe) {
          Tt(e, e.return, oe);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function k1(e, t, r) {
      Ue = e, Cp(e);
    }
    function Cp(e, t, r) {
      for (var i = (e.mode & 1) !== 0; Ue !== null; ) {
        var y = Ue, T = y.child;
        if (y.tag === 22 && i) {
          var F = y.memoizedState !== null || Ja;
          if (!F) {
            var J = y.alternate, oe = J !== null && J.memoizedState !== null || Yt;
            J = Ja;
            var we = Yt;
            if (Ja = F, (Yt = oe) && !we) for (Ue = y; Ue !== null; ) F = Ue, oe = F.child, F.tag === 22 && F.memoizedState !== null ? Fp(y) : oe !== null ? (oe.return = F, Ue = oe) : Fp(y);
            for (; T !== null; ) Ue = T, Cp(T), T = T.sibling;
            Ue = y, Ja = J, Yt = we;
          }
          Np(e);
        } else (y.subtreeFlags & 8772) !== 0 && T !== null ? (T.return = y, Ue = T) : Np(e);
      }
    }
    function Np(e) {
      for (; Ue !== null; ) {
        var t = Ue;
        if ((t.flags & 8772) !== 0) {
          var r = t.alternate;
          try {
            if ((t.flags & 8772) !== 0) switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Yt || Za(5, t);
                break;
              case 1:
                var i = t.stateNode;
                if (t.flags & 4 && !Yt) if (r === null) i.componentDidMount();
                else {
                  var y = t.elementType === t.type ? r.memoizedProps : Ar(t.type, r.memoizedProps);
                  i.componentDidUpdate(y, r.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
                }
                var T = t.updateQueue;
                T !== null && Uh(t, T, i);
                break;
              case 3:
                var F = t.updateQueue;
                if (F !== null) {
                  if (r = null, t.child !== null) switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                  Uh(t, F, r);
                }
                break;
              case 5:
                var J = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = J;
                  var oe = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      oe.autoFocus && r.focus();
                      break;
                    case "img":
                      oe.src && (r.src = oe.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var we = t.alternate;
                  if (we !== null) {
                    var ke = we.memoizedState;
                    if (ke !== null) {
                      var Ae = ke.dehydrated;
                      Ae !== null && so(Ae);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(c(163));
            }
            Yt || t.flags & 512 && il(t);
          } catch (xe) {
            Tt(t, t.return, xe);
          }
        }
        if (t === e) {
          Ue = null;
          break;
        }
        if (r = t.sibling, r !== null) {
          r.return = t.return, Ue = r;
          break;
        }
        Ue = t.return;
      }
    }
    function Up(e) {
      for (; Ue !== null; ) {
        var t = Ue;
        if (t === e) {
          Ue = null;
          break;
        }
        var r = t.sibling;
        if (r !== null) {
          r.return = t.return, Ue = r;
          break;
        }
        Ue = t.return;
      }
    }
    function Fp(e) {
      for (; Ue !== null; ) {
        var t = Ue;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var r = t.return;
              try {
                Za(4, t);
              } catch (oe) {
                Tt(t, r, oe);
              }
              break;
            case 1:
              var i = t.stateNode;
              if (typeof i.componentDidMount == "function") {
                var y = t.return;
                try {
                  i.componentDidMount();
                } catch (oe) {
                  Tt(t, y, oe);
                }
              }
              var T = t.return;
              try {
                il(t);
              } catch (oe) {
                Tt(t, T, oe);
              }
              break;
            case 5:
              var F = t.return;
              try {
                il(t);
              } catch (oe) {
                Tt(t, F, oe);
              }
          }
        } catch (oe) {
          Tt(t, t.return, oe);
        }
        if (t === e) {
          Ue = null;
          break;
        }
        var J = t.sibling;
        if (J !== null) {
          J.return = t.return, Ue = J;
          break;
        }
        Ue = t.return;
      }
    }
    var A1 = Math.ceil, $a = O.ReactCurrentDispatcher, sl = O.ReactCurrentOwner, mr = O.ReactCurrentBatchConfig, it = 0, Lt = null, Ot = null, qt = 0, cr = 0, Fi = yn(0), Ct = 0, Oo = null, Jn = 0, es = 0, ul = 0, Ro = null, ir = null, ll = 0, Li = 1 / 0, Qr = null, ts = false, fl = null, En = null, rs = false, Sn = null, ns = 0, Co = 0, cl = null, is = -1, os = 0;
    function Zt() {
      return (it & 6) !== 0 ? At() : is !== -1 ? is : is = At();
    }
    function bn(e) {
      return (e.mode & 1) === 0 ? 1 : (it & 2) !== 0 && qt !== 0 ? qt & -qt : c1.transition !== null ? (os === 0 && (os = Id()), os) : (e = ft, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Md(e.type)), e);
    }
    function Or(e, t, r, i) {
      if (50 < Co) throw Co = 0, cl = null, Error(c(185));
      ro(e, r, i), ((it & 2) === 0 || e !== Lt) && (e === Lt && ((it & 2) === 0 && (es |= r), Ct === 4 && Tn(e, qt)), or(e, i), r === 1 && it === 0 && (t.mode & 1) === 0 && (Li = At() + 500, Ca && mn()));
    }
    function or(e, t) {
      var r = e.callbackNode;
      cw(e, t);
      var i = pa(e, e === Lt ? qt : 0);
      if (i === 0) r !== null && Pd(r), e.callbackNode = null, e.callbackPriority = 0;
      else if (t = i & -i, e.callbackPriority !== t) {
        if (r != null && Pd(r), t === 1) e.tag === 0 ? f1(Mp.bind(null, e)) : bh(Mp.bind(null, e)), a1(function() {
          (it & 6) === 0 && mn();
        }), r = null;
        else {
          switch (Bd(i)) {
            case 1:
              r = Ks;
              break;
            case 4:
              r = kd;
              break;
            case 16:
              r = fa;
              break;
            case 536870912:
              r = Ad;
              break;
            default:
              r = fa;
          }
          r = Vp(r, Lp.bind(null, e));
        }
        e.callbackPriority = t, e.callbackNode = r;
      }
    }
    function Lp(e, t) {
      if (is = -1, os = 0, (it & 6) !== 0) throw Error(c(327));
      var r = e.callbackNode;
      if (Mi() && e.callbackNode !== r) return null;
      var i = pa(e, e === Lt ? qt : 0);
      if (i === 0) return null;
      if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = as(e, i);
      else {
        t = i;
        var y = it;
        it |= 2;
        var T = Hp();
        (Lt !== e || qt !== t) && (Qr = null, Li = At() + 500, $n(e, t));
        do
          try {
            O1();
            break;
          } catch (J) {
            Dp(e, J);
          }
        while (true);
        Iu(), $a.current = T, it = y, Ot !== null ? t = 0 : (Lt = null, qt = 0, t = Ct);
      }
      if (t !== 0) {
        if (t === 2 && (y = zs(e), y !== 0 && (i = y, t = dl(e, y))), t === 1) throw r = Oo, $n(e, 0), Tn(e, i), or(e, At()), r;
        if (t === 6) Tn(e, i);
        else {
          if (y = e.current.alternate, (i & 30) === 0 && !I1(y) && (t = as(e, i), t === 2 && (T = zs(e), T !== 0 && (i = T, t = dl(e, T))), t === 1)) throw r = Oo, $n(e, 0), Tn(e, i), or(e, At()), r;
          switch (e.finishedWork = y, e.finishedLanes = i, t) {
            case 0:
            case 1:
              throw Error(c(345));
            case 2:
              ei(e, ir, Qr);
              break;
            case 3:
              if (Tn(e, i), (i & 130023424) === i && (t = ll + 500 - At(), 10 < t)) {
                if (pa(e, 0) !== 0) break;
                if (y = e.suspendedLanes, (y & i) !== i) {
                  Zt(), e.pingedLanes |= e.suspendedLanes & y;
                  break;
                }
                e.timeoutHandle = vu(ei.bind(null, e, ir, Qr), t);
                break;
              }
              ei(e, ir, Qr);
              break;
            case 4:
              if (Tn(e, i), (i & 4194240) === i) break;
              for (t = e.eventTimes, y = -1; 0 < i; ) {
                var F = 31 - xr(i);
                T = 1 << F, F = t[F], F > y && (y = F), i &= ~T;
              }
              if (i = y, i = At() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * A1(i / 1960)) - i, 10 < i) {
                e.timeoutHandle = vu(ei.bind(null, e, ir, Qr), i);
                break;
              }
              ei(e, ir, Qr);
              break;
            case 5:
              ei(e, ir, Qr);
              break;
            default:
              throw Error(c(329));
          }
        }
      }
      return or(e, At()), e.callbackNode === r ? Lp.bind(null, e) : null;
    }
    function dl(e, t) {
      var r = Ro;
      return e.current.memoizedState.isDehydrated && ($n(e, t).flags |= 256), e = as(e, t), e !== 2 && (t = ir, ir = r, t !== null && hl(t)), e;
    }
    function hl(e) {
      ir === null ? ir = e : ir.push.apply(ir, e);
    }
    function I1(e) {
      for (var t = e; ; ) {
        if (t.flags & 16384) {
          var r = t.updateQueue;
          if (r !== null && (r = r.stores, r !== null)) for (var i = 0; i < r.length; i++) {
            var y = r[i], T = y.getSnapshot;
            y = y.value;
            try {
              if (!Pr(T(), y)) return false;
            } catch {
              return false;
            }
          }
        }
        if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return true;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return true;
    }
    function Tn(e, t) {
      for (t &= ~ul, t &= ~es, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var r = 31 - xr(t), i = 1 << r;
        e[r] = -1, t &= ~i;
      }
    }
    function Mp(e) {
      if ((it & 6) !== 0) throw Error(c(327));
      Mi();
      var t = pa(e, 0);
      if ((t & 1) === 0) return or(e, At()), null;
      var r = as(e, t);
      if (e.tag !== 0 && r === 2) {
        var i = zs(e);
        i !== 0 && (t = i, r = dl(e, i));
      }
      if (r === 1) throw r = Oo, $n(e, 0), Tn(e, t), or(e, At()), r;
      if (r === 6) throw Error(c(345));
      return e.finishedWork = e.current.alternate, e.finishedLanes = t, ei(e, ir, Qr), or(e, At()), null;
    }
    function pl(e, t) {
      var r = it;
      it |= 1;
      try {
        return e(t);
      } finally {
        it = r, it === 0 && (Li = At() + 500, Ca && mn());
      }
    }
    function Zn(e) {
      Sn !== null && Sn.tag === 0 && (it & 6) === 0 && Mi();
      var t = it;
      it |= 1;
      var r = mr.transition, i = ft;
      try {
        if (mr.transition = null, ft = 1, e) return e();
      } finally {
        ft = i, mr.transition = r, it = t, (it & 6) === 0 && mn();
      }
    }
    function yl() {
      cr = Fi.current, mt(Fi);
    }
    function $n(e, t) {
      e.finishedWork = null, e.finishedLanes = 0;
      var r = e.timeoutHandle;
      if (r !== -1 && (e.timeoutHandle = -1, o1(r)), Ot !== null) for (r = Ot.return; r !== null; ) {
        var i = r;
        switch (Tu(i), i.tag) {
          case 1:
            i = i.type.childContextTypes, i != null && Oa();
            break;
          case 3:
            Ci(), mt(tr), mt(Vt), Lu();
            break;
          case 5:
            Uu(i);
            break;
          case 4:
            Ci();
            break;
          case 13:
            mt(Et);
            break;
          case 19:
            mt(Et);
            break;
          case 10:
            Bu(i.type._context);
            break;
          case 22:
          case 23:
            yl();
        }
        r = r.return;
      }
      if (Lt = e, Ot = e = xn(e.current, null), qt = cr = t, Ct = 0, Oo = null, ul = es = Jn = 0, ir = Ro = null, Xn !== null) {
        for (t = 0; t < Xn.length; t++) if (r = Xn[t], i = r.interleaved, i !== null) {
          r.interleaved = null;
          var y = i.next, T = r.pending;
          if (T !== null) {
            var F = T.next;
            T.next = y, i.next = F;
          }
          r.pending = i;
        }
        Xn = null;
      }
      return e;
    }
    function Dp(e, t) {
      do {
        var r = Ot;
        try {
          if (Iu(), Wa.current = Ga, Ka) {
            for (var i = St.memoizedState; i !== null; ) {
              var y = i.queue;
              y !== null && (y.pending = null), i = i.next;
            }
            Ka = false;
          }
          if (Qn = 0, Ft = Rt = St = null, xo = false, Po = 0, sl.current = null, r === null || r.return === null) {
            Ct = 1, Oo = t, Ot = null;
            break;
          }
          e: {
            var T = e, F = r.return, J = r, oe = t;
            if (t = qt, J.flags |= 32768, oe !== null && typeof oe == "object" && typeof oe.then == "function") {
              var we = oe, ke = J, Ae = ke.tag;
              if ((ke.mode & 1) === 0 && (Ae === 0 || Ae === 11 || Ae === 15)) {
                var xe = ke.alternate;
                xe ? (ke.updateQueue = xe.updateQueue, ke.memoizedState = xe.memoizedState, ke.lanes = xe.lanes) : (ke.updateQueue = null, ke.memoizedState = null);
              }
              var Ne = fp(F);
              if (Ne !== null) {
                Ne.flags &= -257, cp(Ne, F, J, T, t), Ne.mode & 1 && lp(T, we, t), t = Ne, oe = we;
                var Fe = t.updateQueue;
                if (Fe === null) {
                  var Me = /* @__PURE__ */ new Set();
                  Me.add(oe), t.updateQueue = Me;
                } else Fe.add(oe);
                break e;
              } else {
                if ((t & 1) === 0) {
                  lp(T, we, t), gl();
                  break e;
                }
                oe = Error(c(426));
              }
            } else if (_t && J.mode & 1) {
              var It = fp(F);
              if (It !== null) {
                (It.flags & 65536) === 0 && (It.flags |= 256), cp(It, F, J, T, t), ku(Ni(oe, J));
                break e;
              }
            }
            T = oe = Ni(oe, J), Ct !== 4 && (Ct = 2), Ro === null ? Ro = [
              T
            ] : Ro.push(T), T = F;
            do {
              switch (T.tag) {
                case 3:
                  T.flags |= 65536, t &= -t, T.lanes |= t;
                  var ge = sp(T, oe, t);
                  Nh(T, ge);
                  break e;
                case 1:
                  J = oe;
                  var ue = T.type, ve = T.stateNode;
                  if ((T.flags & 128) === 0 && (typeof ue.getDerivedStateFromError == "function" || ve !== null && typeof ve.componentDidCatch == "function" && (En === null || !En.has(ve)))) {
                    T.flags |= 65536, t &= -t, T.lanes |= t;
                    var Be = up(T, J, t);
                    Nh(T, Be);
                    break e;
                  }
              }
              T = T.return;
            } while (T !== null);
          }
          jp(r);
        } catch (De) {
          t = De, Ot === r && r !== null && (Ot = r = r.return);
          continue;
        }
        break;
      } while (true);
    }
    function Hp() {
      var e = $a.current;
      return $a.current = Ga, e === null ? Ga : e;
    }
    function gl() {
      (Ct === 0 || Ct === 3 || Ct === 2) && (Ct = 4), Lt === null || (Jn & 268435455) === 0 && (es & 268435455) === 0 || Tn(Lt, qt);
    }
    function as(e, t) {
      var r = it;
      it |= 2;
      var i = Hp();
      (Lt !== e || qt !== t) && (Qr = null, $n(e, t));
      do
        try {
          B1();
          break;
        } catch (y) {
          Dp(e, y);
        }
      while (true);
      if (Iu(), it = r, $a.current = i, Ot !== null) throw Error(c(261));
      return Lt = null, qt = 0, Ct;
    }
    function B1() {
      for (; Ot !== null; ) qp(Ot);
    }
    function O1() {
      for (; Ot !== null && !rw(); ) qp(Ot);
    }
    function qp(e) {
      var t = zp(e.alternate, e, cr);
      e.memoizedProps = e.pendingProps, t === null ? jp(e) : Ot = t, sl.current = null;
    }
    function jp(e) {
      var t = e;
      do {
        var r = t.alternate;
        if (e = t.return, (t.flags & 32768) === 0) {
          if (r = b1(r, t, cr), r !== null) {
            Ot = r;
            return;
          }
        } else {
          if (r = T1(r, t), r !== null) {
            r.flags &= 32767, Ot = r;
            return;
          }
          if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
          else {
            Ct = 6, Ot = null;
            return;
          }
        }
        if (t = t.sibling, t !== null) {
          Ot = t;
          return;
        }
        Ot = t = e;
      } while (t !== null);
      Ct === 0 && (Ct = 5);
    }
    function ei(e, t, r) {
      var i = ft, y = mr.transition;
      try {
        mr.transition = null, ft = 1, R1(e, t, r, i);
      } finally {
        mr.transition = y, ft = i;
      }
      return null;
    }
    function R1(e, t, r, i) {
      do
        Mi();
      while (Sn !== null);
      if ((it & 6) !== 0) throw Error(c(327));
      r = e.finishedWork;
      var y = e.finishedLanes;
      if (r === null) return null;
      if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(c(177));
      e.callbackNode = null, e.callbackPriority = 0;
      var T = r.lanes | r.childLanes;
      if (dw(e, T), e === Lt && (Ot = Lt = null, qt = 0), (r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0 || rs || (rs = true, Vp(fa, function() {
        return Mi(), null;
      })), T = (r.flags & 15990) !== 0, (r.subtreeFlags & 15990) !== 0 || T) {
        T = mr.transition, mr.transition = null;
        var F = ft;
        ft = 1;
        var J = it;
        it |= 4, sl.current = null, P1(e, r), Rp(r, e), Zw(gu), ma = !!yu, gu = yu = null, e.current = r, k1(r), nw(), it = J, ft = F, mr.transition = T;
      } else e.current = r;
      if (rs && (rs = false, Sn = e, ns = y), T = e.pendingLanes, T === 0 && (En = null), aw(r.stateNode), or(e, At()), t !== null) for (i = e.onRecoverableError, r = 0; r < t.length; r++) y = t[r], i(y.value, {
        componentStack: y.stack,
        digest: y.digest
      });
      if (ts) throw ts = false, e = fl, fl = null, e;
      return (ns & 1) !== 0 && e.tag !== 0 && Mi(), T = e.pendingLanes, (T & 1) !== 0 ? e === cl ? Co++ : (Co = 0, cl = e) : Co = 0, mn(), null;
    }
    function Mi() {
      if (Sn !== null) {
        var e = Bd(ns), t = mr.transition, r = ft;
        try {
          if (mr.transition = null, ft = 16 > e ? 16 : e, Sn === null) var i = false;
          else {
            if (e = Sn, Sn = null, ns = 0, (it & 6) !== 0) throw Error(c(331));
            var y = it;
            for (it |= 4, Ue = e.current; Ue !== null; ) {
              var T = Ue, F = T.child;
              if ((Ue.flags & 16) !== 0) {
                var J = T.deletions;
                if (J !== null) {
                  for (var oe = 0; oe < J.length; oe++) {
                    var we = J[oe];
                    for (Ue = we; Ue !== null; ) {
                      var ke = Ue;
                      switch (ke.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Bo(8, ke, T);
                      }
                      var Ae = ke.child;
                      if (Ae !== null) Ae.return = ke, Ue = Ae;
                      else for (; Ue !== null; ) {
                        ke = Ue;
                        var xe = ke.sibling, Ne = ke.return;
                        if (kp(ke), ke === we) {
                          Ue = null;
                          break;
                        }
                        if (xe !== null) {
                          xe.return = Ne, Ue = xe;
                          break;
                        }
                        Ue = Ne;
                      }
                    }
                  }
                  var Fe = T.alternate;
                  if (Fe !== null) {
                    var Me = Fe.child;
                    if (Me !== null) {
                      Fe.child = null;
                      do {
                        var It = Me.sibling;
                        Me.sibling = null, Me = It;
                      } while (Me !== null);
                    }
                  }
                  Ue = T;
                }
              }
              if ((T.subtreeFlags & 2064) !== 0 && F !== null) F.return = T, Ue = F;
              else e: for (; Ue !== null; ) {
                if (T = Ue, (T.flags & 2048) !== 0) switch (T.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Bo(9, T, T.return);
                }
                var ge = T.sibling;
                if (ge !== null) {
                  ge.return = T.return, Ue = ge;
                  break e;
                }
                Ue = T.return;
              }
            }
            var ue = e.current;
            for (Ue = ue; Ue !== null; ) {
              F = Ue;
              var ve = F.child;
              if ((F.subtreeFlags & 2064) !== 0 && ve !== null) ve.return = F, Ue = ve;
              else e: for (F = ue; Ue !== null; ) {
                if (J = Ue, (J.flags & 2048) !== 0) try {
                  switch (J.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Za(9, J);
                  }
                } catch (De) {
                  Tt(J, J.return, De);
                }
                if (J === F) {
                  Ue = null;
                  break e;
                }
                var Be = J.sibling;
                if (Be !== null) {
                  Be.return = J.return, Ue = Be;
                  break e;
                }
                Ue = J.return;
              }
            }
            if (it = y, mn(), Cr && typeof Cr.onPostCommitFiberRoot == "function") try {
              Cr.onPostCommitFiberRoot(ca, e);
            } catch {
            }
            i = true;
          }
          return i;
        } finally {
          ft = r, mr.transition = t;
        }
      }
      return false;
    }
    function Wp(e, t, r) {
      t = Ni(r, t), t = sp(e, t, 1), e = wn(e, t, 1), t = Zt(), e !== null && (ro(e, 1, t), or(e, t));
    }
    function Tt(e, t, r) {
      if (e.tag === 3) Wp(e, e, r);
      else for (; t !== null; ) {
        if (t.tag === 3) {
          Wp(t, e, r);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (En === null || !En.has(i))) {
            e = Ni(r, e), e = up(t, e, 1), t = wn(t, e, 1), e = Zt(), t !== null && (ro(t, 1, e), or(t, e));
            break;
          }
        }
        t = t.return;
      }
    }
    function C1(e, t, r) {
      var i = e.pingCache;
      i !== null && i.delete(t), t = Zt(), e.pingedLanes |= e.suspendedLanes & r, Lt === e && (qt & r) === r && (Ct === 4 || Ct === 3 && (qt & 130023424) === qt && 500 > At() - ll ? $n(e, 0) : ul |= r), or(e, t);
    }
    function Kp(e, t) {
      t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ha, ha <<= 1, (ha & 130023424) === 0 && (ha = 4194304)));
      var r = Zt();
      e = Gr(e, t), e !== null && (ro(e, t, r), or(e, r));
    }
    function N1(e) {
      var t = e.memoizedState, r = 0;
      t !== null && (r = t.retryLane), Kp(e, r);
    }
    function U1(e, t) {
      var r = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, y = e.memoizedState;
          y !== null && (r = y.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        default:
          throw Error(c(314));
      }
      i !== null && i.delete(t), Kp(e, r);
    }
    var zp;
    zp = function(e, t, r) {
      if (e !== null) if (e.memoizedProps !== t.pendingProps || tr.current) nr = true;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return nr = false, S1(e, t, r);
        nr = (e.flags & 131072) !== 0;
      }
      else nr = false, _t && (t.flags & 1048576) !== 0 && Th(t, Ua, t.index);
      switch (t.lanes = 0, t.tag) {
        case 2:
          var i = t.type;
          Qa(e, t), e = t.pendingProps;
          var y = Pi(t, Vt.current);
          Ri(t, r), y = Hu(null, t, i, e, y, r);
          var T = qu();
          return t.flags |= 1, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, rr(i) ? (T = true, Ra(t)) : T = false, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, Cu(t), y.updater = Xa, t.stateNode = y, y._reactInternals = t, Gu(t, i, e, r), t = Ju(null, t, i, true, T, r)) : (t.tag = 0, _t && T && bu(t), Jt(null, t, y, r), t = t.child), t;
        case 16:
          i = t.elementType;
          e: {
            switch (Qa(e, t), e = t.pendingProps, y = i._init, i = y(i._payload), t.type = i, y = t.tag = L1(i), e = Ar(i, e), y) {
              case 0:
                t = Qu(null, t, i, e, r);
                break e;
              case 1:
                t = mp(null, t, i, e, r);
                break e;
              case 11:
                t = dp(null, t, i, e, r);
                break e;
              case 14:
                t = hp(null, t, i, Ar(i.type, e), r);
                break e;
            }
            throw Error(c(306, i, ""));
          }
          return t;
        case 0:
          return i = t.type, y = t.pendingProps, y = t.elementType === i ? y : Ar(i, y), Qu(e, t, i, y, r);
        case 1:
          return i = t.type, y = t.pendingProps, y = t.elementType === i ? y : Ar(i, y), mp(e, t, i, y, r);
        case 3:
          e: {
            if (vp(t), e === null) throw Error(c(387));
            i = t.pendingProps, T = t.memoizedState, y = T.element, Ch(e, t), qa(t, i, null, r);
            var F = t.memoizedState;
            if (i = F.element, T.isDehydrated) if (T = {
              element: i,
              isDehydrated: false,
              cache: F.cache,
              pendingSuspenseBoundaries: F.pendingSuspenseBoundaries,
              transitions: F.transitions
            }, t.updateQueue.baseState = T, t.memoizedState = T, t.flags & 256) {
              y = Ni(Error(c(423)), t), t = wp(e, t, i, r, y);
              break e;
            } else if (i !== y) {
              y = Ni(Error(c(424)), t), t = wp(e, t, i, r, y);
              break e;
            } else for (fr = pn(t.stateNode.containerInfo.firstChild), lr = t, _t = true, kr = null, r = Oh(t, null, i, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
            else {
              if (Ii(), i === y) {
                t = Yr(e, t, r);
                break e;
              }
              Jt(e, t, i, r);
            }
            t = t.child;
          }
          return t;
        case 5:
          return Fh(t), e === null && Pu(t), i = t.type, y = t.pendingProps, T = e !== null ? e.memoizedProps : null, F = y.children, mu(i, y) ? F = null : T !== null && mu(i, T) && (t.flags |= 32), gp(e, t), Jt(e, t, F, r), t.child;
        case 6:
          return e === null && Pu(t), null;
        case 13:
          return _p(e, t, r);
        case 4:
          return Nu(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Bi(t, null, i, r) : Jt(e, t, i, r), t.child;
        case 11:
          return i = t.type, y = t.pendingProps, y = t.elementType === i ? y : Ar(i, y), dp(e, t, i, y, r);
        case 7:
          return Jt(e, t, t.pendingProps, r), t.child;
        case 8:
          return Jt(e, t, t.pendingProps.children, r), t.child;
        case 12:
          return Jt(e, t, t.pendingProps.children, r), t.child;
        case 10:
          e: {
            if (i = t.type._context, y = t.pendingProps, T = t.memoizedProps, F = y.value, yt(Ma, i._currentValue), i._currentValue = F, T !== null) if (Pr(T.value, F)) {
              if (T.children === y.children && !tr.current) {
                t = Yr(e, t, r);
                break e;
              }
            } else for (T = t.child, T !== null && (T.return = t); T !== null; ) {
              var J = T.dependencies;
              if (J !== null) {
                F = T.child;
                for (var oe = J.firstContext; oe !== null; ) {
                  if (oe.context === i) {
                    if (T.tag === 1) {
                      oe = Xr(-1, r & -r), oe.tag = 2;
                      var we = T.updateQueue;
                      if (we !== null) {
                        we = we.shared;
                        var ke = we.pending;
                        ke === null ? oe.next = oe : (oe.next = ke.next, ke.next = oe), we.pending = oe;
                      }
                    }
                    T.lanes |= r, oe = T.alternate, oe !== null && (oe.lanes |= r), Ou(T.return, r, t), J.lanes |= r;
                    break;
                  }
                  oe = oe.next;
                }
              } else if (T.tag === 10) F = T.type === t.type ? null : T.child;
              else if (T.tag === 18) {
                if (F = T.return, F === null) throw Error(c(341));
                F.lanes |= r, J = F.alternate, J !== null && (J.lanes |= r), Ou(F, r, t), F = T.sibling;
              } else F = T.child;
              if (F !== null) F.return = T;
              else for (F = T; F !== null; ) {
                if (F === t) {
                  F = null;
                  break;
                }
                if (T = F.sibling, T !== null) {
                  T.return = F.return, F = T;
                  break;
                }
                F = F.return;
              }
              T = F;
            }
            Jt(e, t, y.children, r), t = t.child;
          }
          return t;
        case 9:
          return y = t.type, i = t.pendingProps.children, Ri(t, r), y = yr(y), i = i(y), t.flags |= 1, Jt(e, t, i, r), t.child;
        case 14:
          return i = t.type, y = Ar(i, t.pendingProps), y = Ar(i.type, y), hp(e, t, i, y, r);
        case 15:
          return pp(e, t, t.type, t.pendingProps, r);
        case 17:
          return i = t.type, y = t.pendingProps, y = t.elementType === i ? y : Ar(i, y), Qa(e, t), t.tag = 1, rr(i) ? (e = true, Ra(t)) : e = false, Ri(t, r), op(t, i, y), Gu(t, i, y, r), Ju(null, t, i, true, e, r);
        case 19:
          return Sp(e, t, r);
        case 22:
          return yp(e, t, r);
      }
      throw Error(c(156, t.tag));
    };
    function Vp(e, t) {
      return xd(e, t);
    }
    function F1(e, t, r, i) {
      this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function vr(e, t, r, i) {
      return new F1(e, t, r, i);
    }
    function ml(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function L1(e) {
      if (typeof e == "function") return ml(e) ? 1 : 0;
      if (e != null) {
        if (e = e.$$typeof, e === W) return 11;
        if (e === Ie) return 14;
      }
      return 2;
    }
    function xn(e, t) {
      var r = e.alternate;
      return r === null ? (r = vr(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
    }
    function ss(e, t, r, i, y, T) {
      var F = 2;
      if (i = e, typeof e == "function") ml(e) && (F = 1);
      else if (typeof e == "string") F = 5;
      else e: switch (e) {
        case K:
          return ti(r.children, y, T, t);
        case X:
          F = 8, y |= 8;
          break;
        case Q:
          return e = vr(12, r, t, y | 2), e.elementType = Q, e.lanes = T, e;
        case ye:
          return e = vr(13, r, t, y), e.elementType = ye, e.lanes = T, e;
        case Te:
          return e = vr(19, r, t, y), e.elementType = Te, e.lanes = T, e;
        case te:
          return us(r, y, T, t);
        default:
          if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case ae:
              F = 10;
              break e;
            case Ee:
              F = 9;
              break e;
            case W:
              F = 11;
              break e;
            case Ie:
              F = 14;
              break e;
            case Re:
              F = 16, i = null;
              break e;
          }
          throw Error(c(130, e == null ? e : typeof e, ""));
      }
      return t = vr(F, r, t, y), t.elementType = e, t.type = i, t.lanes = T, t;
    }
    function ti(e, t, r, i) {
      return e = vr(7, e, i, t), e.lanes = r, e;
    }
    function us(e, t, r, i) {
      return e = vr(22, e, i, t), e.elementType = te, e.lanes = r, e.stateNode = {
        isHidden: false
      }, e;
    }
    function vl(e, t, r) {
      return e = vr(6, e, null, t), e.lanes = r, e;
    }
    function wl(e, t, r) {
      return t = vr(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function M1(e, t, r, i, y) {
      this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vs(0), this.expirationTimes = Vs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vs(0), this.identifierPrefix = i, this.onRecoverableError = y, this.mutableSourceEagerHydrationData = null;
    }
    function _l(e, t, r, i, y, T, F, J, oe) {
      return e = new M1(e, t, r, J, oe), t === 1 ? (t = 1, T === true && (t |= 8)) : t = 0, T = vr(3, null, null, t), e.current = T, T.stateNode = e, T.memoizedState = {
        element: i,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
      }, Cu(T), e;
    }
    function D1(e, t, r) {
      var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: C,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: r
      };
    }
    function Gp(e) {
      if (!e) return gn;
      e = e._reactInternals;
      e: {
        if (Wn(e) !== e || e.tag !== 1) throw Error(c(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (rr(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          t = t.return;
        } while (t !== null);
        throw Error(c(171));
      }
      if (e.tag === 1) {
        var r = e.type;
        if (rr(r)) return Eh(e, r, t);
      }
      return t;
    }
    function Xp(e, t, r, i, y, T, F, J, oe) {
      return e = _l(r, i, true, e, y, T, F, J, oe), e.context = Gp(null), r = e.current, i = Zt(), y = bn(r), T = Xr(i, y), T.callback = t ?? null, wn(r, T, y), e.current.lanes = y, ro(e, y, i), or(e, i), e;
    }
    function ls(e, t, r, i) {
      var y = t.current, T = Zt(), F = bn(y);
      return r = Gp(r), t.context === null ? t.context = r : t.pendingContext = r, t = Xr(T, F), t.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = wn(y, t, F), e !== null && (Or(e, y, F, T), Ha(e, y, F)), F;
    }
    function fs(e) {
      return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
    }
    function Yp(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t;
      }
    }
    function El(e, t) {
      Yp(e, t), (e = e.alternate) && Yp(e, t);
    }
    function H1() {
      return null;
    }
    var Qp = typeof reportError == "function" ? reportError : function(e) {
      console.error(e);
    };
    function Sl(e) {
      this._internalRoot = e;
    }
    cs.prototype.render = Sl.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      ls(e, t, null, null);
    }, cs.prototype.unmount = Sl.prototype.unmount = function() {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Zn(function() {
          ls(null, e, null, null);
        }), t[Wr] = null;
      }
    };
    function cs(e) {
      this._internalRoot = e;
    }
    cs.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Cd();
        e = {
          blockedOn: null,
          target: e,
          priority: t
        };
        for (var r = 0; r < cn.length && t !== 0 && t < cn[r].priority; r++) ;
        cn.splice(r, 0, e), r === 0 && Fd(e);
      }
    };
    function bl(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function ds(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Jp() {
    }
    function q1(e, t, r, i, y) {
      if (y) {
        if (typeof i == "function") {
          var T = i;
          i = function() {
            var we = fs(F);
            T.call(we);
          };
        }
        var F = Xp(t, i, e, 0, null, false, false, "", Jp);
        return e._reactRootContainer = F, e[Wr] = F.current, mo(e.nodeType === 8 ? e.parentNode : e), Zn(), F;
      }
      for (; y = e.lastChild; ) e.removeChild(y);
      if (typeof i == "function") {
        var J = i;
        i = function() {
          var we = fs(oe);
          J.call(we);
        };
      }
      var oe = _l(e, 0, false, null, null, false, false, "", Jp);
      return e._reactRootContainer = oe, e[Wr] = oe.current, mo(e.nodeType === 8 ? e.parentNode : e), Zn(function() {
        ls(t, oe, r, i);
      }), oe;
    }
    function hs(e, t, r, i, y) {
      var T = r._reactRootContainer;
      if (T) {
        var F = T;
        if (typeof y == "function") {
          var J = y;
          y = function() {
            var oe = fs(F);
            J.call(oe);
          };
        }
        ls(t, F, e, y);
      } else F = q1(r, t, e, y, i);
      return fs(F);
    }
    Od = function(e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var r = to(t.pendingLanes);
            r !== 0 && (Gs(t, r | 1), or(t, At()), (it & 6) === 0 && (Li = At() + 500, mn()));
          }
          break;
        case 13:
          Zn(function() {
            var i = Gr(e, 1);
            if (i !== null) {
              var y = Zt();
              Or(i, e, 1, y);
            }
          }), El(e, 1);
      }
    }, Xs = function(e) {
      if (e.tag === 13) {
        var t = Gr(e, 134217728);
        if (t !== null) {
          var r = Zt();
          Or(t, e, 134217728, r);
        }
        El(e, 134217728);
      }
    }, Rd = function(e) {
      if (e.tag === 13) {
        var t = bn(e), r = Gr(e, t);
        if (r !== null) {
          var i = Zt();
          Or(r, e, t, i);
        }
        El(e, t);
      }
    }, Cd = function() {
      return ft;
    }, Nd = function(e, t) {
      var r = ft;
      try {
        return ft = e, t();
      } finally {
        ft = r;
      }
    }, Xe = function(e, t, r) {
      switch (t) {
        case "input":
          if (Ke(e, r), t = r.name, r.type === "radio" && t != null) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
              var i = r[t];
              if (i !== e && i.form === e.form) {
                var y = Ba(i);
                if (!y) throw Error(c(90));
                j(i), Ke(i, y);
              }
            }
          }
          break;
        case "textarea":
          nt(e, r);
          break;
        case "select":
          t = r.value, t != null && Qe(e, !!r.multiple, t, false);
      }
    }, Tr = pl, la = Zn;
    var j1 = {
      usingClientEntryPoint: false,
      Events: [
        _o,
        Ti,
        Ba,
        gi,
        ua,
        pl
      ]
    }, No = {
      findFiberByHostInstance: Kn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom"
    }, W1 = {
      bundleType: No.bundleType,
      version: No.version,
      rendererPackageName: No.rendererPackageName,
      rendererConfig: No.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: O.ReactCurrentDispatcher,
      findHostInstanceByFiber: function(e) {
        return e = bd(e), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: No.findFiberByHostInstance || H1,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!ps.isDisabled && ps.supportsFiber) try {
        ca = ps.inject(W1), Cr = ps;
      } catch {
      }
    }
    return ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j1, ar.createPortal = function(e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!bl(t)) throw Error(c(200));
      return D1(e, t, null, r);
    }, ar.createRoot = function(e, t) {
      if (!bl(e)) throw Error(c(299));
      var r = false, i = "", y = Qp;
      return t != null && (t.unstable_strictMode === true && (r = true), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (y = t.onRecoverableError)), t = _l(e, 1, false, null, null, r, false, i, y), e[Wr] = t.current, mo(e.nodeType === 8 ? e.parentNode : e), new Sl(t);
    }, ar.findDOMNode = function(e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0) throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
      return e = bd(t), e = e === null ? null : e.stateNode, e;
    }, ar.flushSync = function(e) {
      return Zn(e);
    }, ar.hydrate = function(e, t, r) {
      if (!ds(t)) throw Error(c(200));
      return hs(null, e, t, true, r);
    }, ar.hydrateRoot = function(e, t, r) {
      if (!bl(e)) throw Error(c(405));
      var i = r != null && r.hydratedSources || null, y = false, T = "", F = Qp;
      if (r != null && (r.unstable_strictMode === true && (y = true), r.identifierPrefix !== void 0 && (T = r.identifierPrefix), r.onRecoverableError !== void 0 && (F = r.onRecoverableError)), t = Xp(t, null, e, 1, r ?? null, y, false, T, F), e[Wr] = t.current, mo(e), i) for (e = 0; e < i.length; e++) r = i[e], y = r._getVersion, y = y(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
        r,
        y
      ] : t.mutableSourceEagerHydrationData.push(r, y);
      return new cs(t);
    }, ar.render = function(e, t, r) {
      if (!ds(t)) throw Error(c(200));
      return hs(null, e, t, false, r);
    }, ar.unmountComponentAtNode = function(e) {
      if (!ds(e)) throw Error(c(40));
      return e._reactRootContainer ? (Zn(function() {
        hs(null, null, e, false, function() {
          e._reactRootContainer = null, e[Wr] = null;
        });
      }), true) : false;
    }, ar.unstable_batchedUpdates = pl, ar.unstable_renderSubtreeIntoContainer = function(e, t, r, i) {
      if (!ds(r)) throw Error(c(200));
      if (e == null || e._reactInternals === void 0) throw Error(c(38));
      return hs(e, t, r, false, i);
    }, ar.version = "18.3.1-next-f1338f8080-20240426", ar;
  }
  var o0;
  function J1() {
    if (o0) return Pl.exports;
    o0 = 1;
    function n() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (d) {
        console.error(d);
      }
    }
    return n(), Pl.exports = Q1(), Pl.exports;
  }
  var a0;
  function Z1() {
    if (a0) return ys;
    a0 = 1;
    var n = J1();
    return ys.createRoot = n.createRoot, ys.hydrateRoot = n.hydrateRoot, ys;
  }
  $1 = Z1();
  KS = Jm($1);
  var Zm = {}, Us = {};
  Us.byteLength = r_;
  Us.toByteArray = i_;
  Us.fromByteArray = s_;
  var Hr = [], wr = [], e_ = typeof Uint8Array < "u" ? Uint8Array : Array, Il = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var Di = 0, t_ = Il.length; Di < t_; ++Di) Hr[Di] = Il[Di], wr[Il.charCodeAt(Di)] = Di;
  wr[45] = 62;
  wr[95] = 63;
  function $m(n) {
    var d = n.length;
    if (d % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var c = n.indexOf("=");
    c === -1 && (c = d);
    var f = c === d ? 0 : 4 - c % 4;
    return [
      c,
      f
    ];
  }
  function r_(n) {
    var d = $m(n), c = d[0], f = d[1];
    return (c + f) * 3 / 4 - f;
  }
  function n_(n, d, c) {
    return (d + c) * 3 / 4 - c;
  }
  function i_(n) {
    var d, c = $m(n), f = c[0], _ = c[1], l = new e_(n_(n, f, _)), u = 0, o = _ > 0 ? f - 4 : f, s;
    for (s = 0; s < o; s += 4) d = wr[n.charCodeAt(s)] << 18 | wr[n.charCodeAt(s + 1)] << 12 | wr[n.charCodeAt(s + 2)] << 6 | wr[n.charCodeAt(s + 3)], l[u++] = d >> 16 & 255, l[u++] = d >> 8 & 255, l[u++] = d & 255;
    return _ === 2 && (d = wr[n.charCodeAt(s)] << 2 | wr[n.charCodeAt(s + 1)] >> 4, l[u++] = d & 255), _ === 1 && (d = wr[n.charCodeAt(s)] << 10 | wr[n.charCodeAt(s + 1)] << 4 | wr[n.charCodeAt(s + 2)] >> 2, l[u++] = d >> 8 & 255, l[u++] = d & 255), l;
  }
  function o_(n) {
    return Hr[n >> 18 & 63] + Hr[n >> 12 & 63] + Hr[n >> 6 & 63] + Hr[n & 63];
  }
  function a_(n, d, c) {
    for (var f, _ = [], l = d; l < c; l += 3) f = (n[l] << 16 & 16711680) + (n[l + 1] << 8 & 65280) + (n[l + 2] & 255), _.push(o_(f));
    return _.join("");
  }
  function s_(n) {
    for (var d, c = n.length, f = c % 3, _ = [], l = 16383, u = 0, o = c - f; u < o; u += l) _.push(a_(n, u, u + l > o ? o : u + l));
    return f === 1 ? (d = n[c - 1], _.push(Hr[d >> 2] + Hr[d << 4 & 63] + "==")) : f === 2 && (d = (n[c - 2] << 8) + n[c - 1], _.push(Hr[d >> 10] + Hr[d >> 4 & 63] + Hr[d << 2 & 63] + "=")), _.join("");
  }
  var ed = {};
  ed.read = function(n, d, c, f, _) {
    var l, u, o = _ * 8 - f - 1, s = (1 << o) - 1, g = s >> 1, a = -7, E = c ? _ - 1 : 0, v = c ? -1 : 1, w = n[d + E];
    for (E += v, l = w & (1 << -a) - 1, w >>= -a, a += o; a > 0; l = l * 256 + n[d + E], E += v, a -= 8) ;
    for (u = l & (1 << -a) - 1, l >>= -a, a += f; a > 0; u = u * 256 + n[d + E], E += v, a -= 8) ;
    if (l === 0) l = 1 - g;
    else {
      if (l === s) return u ? NaN : (w ? -1 : 1) * (1 / 0);
      u = u + Math.pow(2, f), l = l - g;
    }
    return (w ? -1 : 1) * u * Math.pow(2, l - f);
  };
  ed.write = function(n, d, c, f, _, l) {
    var u, o, s, g = l * 8 - _ - 1, a = (1 << g) - 1, E = a >> 1, v = _ === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, w = f ? 0 : l - 1, S = f ? 1 : -1, p = d < 0 || d === 0 && 1 / d < 0 ? 1 : 0;
    for (d = Math.abs(d), isNaN(d) || d === 1 / 0 ? (o = isNaN(d) ? 1 : 0, u = a) : (u = Math.floor(Math.log(d) / Math.LN2), d * (s = Math.pow(2, -u)) < 1 && (u--, s *= 2), u + E >= 1 ? d += v / s : d += v * Math.pow(2, 1 - E), d * s >= 2 && (u++, s /= 2), u + E >= a ? (o = 0, u = a) : u + E >= 1 ? (o = (d * s - 1) * Math.pow(2, _), u = u + E) : (o = d * Math.pow(2, E - 1) * Math.pow(2, _), u = 0)); _ >= 8; n[c + w] = o & 255, w += S, o /= 256, _ -= 8) ;
    for (u = u << _ | o, g += _; g > 0; n[c + w] = u & 255, w += S, u /= 256, g -= 8) ;
    n[c + w - S] |= p * 128;
  };
  (function(n) {
    const d = Us, c = ed, f = typeof Symbol == "function" && typeof Symbol.for == "function" ? /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom") : null;
    n.Buffer = a, n.SlowBuffer = U, n.INSPECT_MAX_BYTES = 50;
    const _ = 2147483647;
    n.kMaxLength = _;
    const { Uint8Array: l, ArrayBuffer: u, SharedArrayBuffer: o } = globalThis;
    a.TYPED_ARRAY_SUPPORT = s(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function s() {
      try {
        const b = new l(1), h = {
          foo: function() {
            return 42;
          }
        };
        return Object.setPrototypeOf(h, l.prototype), Object.setPrototypeOf(b, h), b.foo() === 42;
      } catch {
        return false;
      }
    }
    Object.defineProperty(a.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (a.isBuffer(this)) return this.buffer;
      }
    }), Object.defineProperty(a.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (a.isBuffer(this)) return this.byteOffset;
      }
    });
    function g(b) {
      if (b > _) throw new RangeError('The value "' + b + '" is invalid for option "size"');
      const h = new l(b);
      return Object.setPrototypeOf(h, a.prototype), h;
    }
    function a(b, h, m) {
      if (typeof b == "number") {
        if (typeof h == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return S(b);
      }
      return E(b, h, m);
    }
    a.poolSize = 8192;
    function E(b, h, m) {
      if (typeof b == "string") return p(b, h);
      if (u.isView(b)) return x(b);
      if (b == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof b);
      if (st(b, u) || b && st(b.buffer, u) || typeof o < "u" && (st(b, o) || b && st(b.buffer, o))) return k(b, h, m);
      if (typeof b == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
      const L = b.valueOf && b.valueOf();
      if (L != null && L !== b) return a.from(L, h, m);
      const z = B(b);
      if (z) return z;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof b[Symbol.toPrimitive] == "function") return a.from(b[Symbol.toPrimitive]("string"), h, m);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof b);
    }
    a.from = function(b, h, m) {
      return E(b, h, m);
    }, Object.setPrototypeOf(a.prototype, l.prototype), Object.setPrototypeOf(a, l);
    function v(b) {
      if (typeof b != "number") throw new TypeError('"size" argument must be of type number');
      if (b < 0) throw new RangeError('The value "' + b + '" is invalid for option "size"');
    }
    function w(b, h, m) {
      return v(b), b <= 0 ? g(b) : h !== void 0 ? typeof m == "string" ? g(b).fill(h, m) : g(b).fill(h) : g(b);
    }
    a.alloc = function(b, h, m) {
      return w(b, h, m);
    };
    function S(b) {
      return v(b), g(b < 0 ? 0 : O(b) | 0);
    }
    a.allocUnsafe = function(b) {
      return S(b);
    }, a.allocUnsafeSlow = function(b) {
      return S(b);
    };
    function p(b, h) {
      if ((typeof h != "string" || h === "") && (h = "utf8"), !a.isEncoding(h)) throw new TypeError("Unknown encoding: " + h);
      const m = C(b, h) | 0;
      let L = g(m);
      const z = L.write(b, h);
      return z !== m && (L = L.slice(0, z)), L;
    }
    function A(b) {
      const h = b.length < 0 ? 0 : O(b.length) | 0, m = g(h);
      for (let L = 0; L < h; L += 1) m[L] = b[L] & 255;
      return m;
    }
    function x(b) {
      if (st(b, l)) {
        const h = new l(b);
        return k(h.buffer, h.byteOffset, h.byteLength);
      }
      return A(b);
    }
    function k(b, h, m) {
      if (h < 0 || b.byteLength < h) throw new RangeError('"offset" is outside of buffer bounds');
      if (b.byteLength < h + (m || 0)) throw new RangeError('"length" is outside of buffer bounds');
      let L;
      return h === void 0 && m === void 0 ? L = new l(b) : m === void 0 ? L = new l(b, h) : L = new l(b, h, m), Object.setPrototypeOf(L, a.prototype), L;
    }
    function B(b) {
      if (a.isBuffer(b)) {
        const h = O(b.length) | 0, m = g(h);
        return m.length === 0 || b.copy(m, 0, 0, h), m;
      }
      if (b.length !== void 0) return typeof b.length != "number" || Ut(b.length) ? g(0) : A(b);
      if (b.type === "Buffer" && Array.isArray(b.data)) return A(b.data);
    }
    function O(b) {
      if (b >= _) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + _.toString(16) + " bytes");
      return b | 0;
    }
    function U(b) {
      return +b != b && (b = 0), a.alloc(+b);
    }
    a.isBuffer = function(h) {
      return h != null && h._isBuffer === true && h !== a.prototype;
    }, a.compare = function(h, m) {
      if (st(h, l) && (h = a.from(h, h.offset, h.byteLength)), st(m, l) && (m = a.from(m, m.offset, m.byteLength)), !a.isBuffer(h) || !a.isBuffer(m)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (h === m) return 0;
      let L = h.length, z = m.length;
      for (let ie = 0, de = Math.min(L, z); ie < de; ++ie) if (h[ie] !== m[ie]) {
        L = h[ie], z = m[ie];
        break;
      }
      return L < z ? -1 : z < L ? 1 : 0;
    }, a.isEncoding = function(h) {
      switch (String(h).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, a.concat = function(h, m) {
      if (!Array.isArray(h)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (h.length === 0) return a.alloc(0);
      let L;
      if (m === void 0) for (m = 0, L = 0; L < h.length; ++L) m += h[L].length;
      const z = a.allocUnsafe(m);
      let ie = 0;
      for (L = 0; L < h.length; ++L) {
        let de = h[L];
        if (st(de, l)) ie + de.length > z.length ? (a.isBuffer(de) || (de = a.from(de)), de.copy(z, ie)) : l.prototype.set.call(z, de, ie);
        else if (a.isBuffer(de)) de.copy(z, ie);
        else throw new TypeError('"list" argument must be an Array of Buffers');
        ie += de.length;
      }
      return z;
    };
    function C(b, h) {
      if (a.isBuffer(b)) return b.length;
      if (u.isView(b) || st(b, u)) return b.byteLength;
      if (typeof b != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof b);
      const m = b.length, L = arguments.length > 2 && arguments[2] === true;
      if (!L && m === 0) return 0;
      let z = false;
      for (; ; ) switch (h) {
        case "ascii":
        case "latin1":
        case "binary":
          return m;
        case "utf8":
        case "utf-8":
          return at(b).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return m * 2;
        case "hex":
          return m >>> 1;
        case "base64":
          return Ze(b).length;
        default:
          if (z) return L ? -1 : at(b).length;
          h = ("" + h).toLowerCase(), z = true;
      }
    }
    a.byteLength = C;
    function K(b, h, m) {
      let L = false;
      if ((h === void 0 || h < 0) && (h = 0), h > this.length || ((m === void 0 || m > this.length) && (m = this.length), m <= 0) || (m >>>= 0, h >>>= 0, m <= h)) return "";
      for (b || (b = "utf8"); ; ) switch (b) {
        case "hex":
          return ce(this, h, m);
        case "utf8":
        case "utf-8":
          return te(this, h, m);
        case "ascii":
          return Z(this, h, m);
        case "latin1":
        case "binary":
          return V(this, h, m);
        case "base64":
          return Re(this, h, m);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ee(this, h, m);
        default:
          if (L) throw new TypeError("Unknown encoding: " + b);
          b = (b + "").toLowerCase(), L = true;
      }
    }
    a.prototype._isBuffer = true;
    function X(b, h, m) {
      const L = b[h];
      b[h] = b[m], b[m] = L;
    }
    a.prototype.swap16 = function() {
      const h = this.length;
      if (h % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let m = 0; m < h; m += 2) X(this, m, m + 1);
      return this;
    }, a.prototype.swap32 = function() {
      const h = this.length;
      if (h % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let m = 0; m < h; m += 4) X(this, m, m + 3), X(this, m + 1, m + 2);
      return this;
    }, a.prototype.swap64 = function() {
      const h = this.length;
      if (h % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let m = 0; m < h; m += 8) X(this, m, m + 7), X(this, m + 1, m + 6), X(this, m + 2, m + 5), X(this, m + 3, m + 4);
      return this;
    }, a.prototype.toString = function() {
      const h = this.length;
      return h === 0 ? "" : arguments.length === 0 ? te(this, 0, h) : K.apply(this, arguments);
    }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(h) {
      if (!a.isBuffer(h)) throw new TypeError("Argument must be a Buffer");
      return this === h ? true : a.compare(this, h) === 0;
    }, a.prototype.inspect = function() {
      let h = "";
      const m = n.INSPECT_MAX_BYTES;
      return h = this.toString("hex", 0, m).replace(/(.{2})/g, "$1 ").trim(), this.length > m && (h += " ... "), "<Buffer " + h + ">";
    }, f && (a.prototype[f] = a.prototype.inspect), a.prototype.compare = function(h, m, L, z, ie) {
      if (st(h, l) && (h = a.from(h, h.offset, h.byteLength)), !a.isBuffer(h)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof h);
      if (m === void 0 && (m = 0), L === void 0 && (L = h ? h.length : 0), z === void 0 && (z = 0), ie === void 0 && (ie = this.length), m < 0 || L > h.length || z < 0 || ie > this.length) throw new RangeError("out of range index");
      if (z >= ie && m >= L) return 0;
      if (z >= ie) return -1;
      if (m >= L) return 1;
      if (m >>>= 0, L >>>= 0, z >>>= 0, ie >>>= 0, this === h) return 0;
      let de = ie - z, Oe = L - m;
      const Le = Math.min(de, Oe), He = this.slice(z, ie), Xe = h.slice(m, L);
      for (let Ye = 0; Ye < Le; ++Ye) if (He[Ye] !== Xe[Ye]) {
        de = He[Ye], Oe = Xe[Ye];
        break;
      }
      return de < Oe ? -1 : Oe < de ? 1 : 0;
    };
    function Q(b, h, m, L, z) {
      if (b.length === 0) return -1;
      if (typeof m == "string" ? (L = m, m = 0) : m > 2147483647 ? m = 2147483647 : m < -2147483648 && (m = -2147483648), m = +m, Ut(m) && (m = z ? 0 : b.length - 1), m < 0 && (m = b.length + m), m >= b.length) {
        if (z) return -1;
        m = b.length - 1;
      } else if (m < 0) if (z) m = 0;
      else return -1;
      if (typeof h == "string" && (h = a.from(h, L)), a.isBuffer(h)) return h.length === 0 ? -1 : ae(b, h, m, L, z);
      if (typeof h == "number") return h = h & 255, typeof l.prototype.indexOf == "function" ? z ? l.prototype.indexOf.call(b, h, m) : l.prototype.lastIndexOf.call(b, h, m) : ae(b, [
        h
      ], m, L, z);
      throw new TypeError("val must be string, number or Buffer");
    }
    function ae(b, h, m, L, z) {
      let ie = 1, de = b.length, Oe = h.length;
      if (L !== void 0 && (L = String(L).toLowerCase(), L === "ucs2" || L === "ucs-2" || L === "utf16le" || L === "utf-16le")) {
        if (b.length < 2 || h.length < 2) return -1;
        ie = 2, de /= 2, Oe /= 2, m /= 2;
      }
      function Le(Xe, Ye) {
        return ie === 1 ? Xe[Ye] : Xe.readUInt16BE(Ye * ie);
      }
      let He;
      if (z) {
        let Xe = -1;
        for (He = m; He < de; He++) if (Le(b, He) === Le(h, Xe === -1 ? 0 : He - Xe)) {
          if (Xe === -1 && (Xe = He), He - Xe + 1 === Oe) return Xe * ie;
        } else Xe !== -1 && (He -= He - Xe), Xe = -1;
      } else for (m + Oe > de && (m = de - Oe), He = m; He >= 0; He--) {
        let Xe = true;
        for (let Ye = 0; Ye < Oe; Ye++) if (Le(b, He + Ye) !== Le(h, Ye)) {
          Xe = false;
          break;
        }
        if (Xe) return He;
      }
      return -1;
    }
    a.prototype.includes = function(h, m, L) {
      return this.indexOf(h, m, L) !== -1;
    }, a.prototype.indexOf = function(h, m, L) {
      return Q(this, h, m, L, true);
    }, a.prototype.lastIndexOf = function(h, m, L) {
      return Q(this, h, m, L, false);
    };
    function Ee(b, h, m, L) {
      m = Number(m) || 0;
      const z = b.length - m;
      L ? (L = Number(L), L > z && (L = z)) : L = z;
      const ie = h.length;
      L > ie / 2 && (L = ie / 2);
      let de;
      for (de = 0; de < L; ++de) {
        const Oe = parseInt(h.substr(de * 2, 2), 16);
        if (Ut(Oe)) return de;
        b[m + de] = Oe;
      }
      return de;
    }
    function W(b, h, m, L) {
      return nt(at(h, b.length - m), b, m, L);
    }
    function ye(b, h, m, L) {
      return nt(Qe(h), b, m, L);
    }
    function Te(b, h, m, L) {
      return nt(Ze(h), b, m, L);
    }
    function Ie(b, h, m, L) {
      return nt(Ve(h, b.length - m), b, m, L);
    }
    a.prototype.write = function(h, m, L, z) {
      if (m === void 0) z = "utf8", L = this.length, m = 0;
      else if (L === void 0 && typeof m == "string") z = m, L = this.length, m = 0;
      else if (isFinite(m)) m = m >>> 0, isFinite(L) ? (L = L >>> 0, z === void 0 && (z = "utf8")) : (z = L, L = void 0);
      else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      const ie = this.length - m;
      if ((L === void 0 || L > ie) && (L = ie), h.length > 0 && (L < 0 || m < 0) || m > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      z || (z = "utf8");
      let de = false;
      for (; ; ) switch (z) {
        case "hex":
          return Ee(this, h, m, L);
        case "utf8":
        case "utf-8":
          return W(this, h, m, L);
        case "ascii":
        case "latin1":
        case "binary":
          return ye(this, h, m, L);
        case "base64":
          return Te(this, h, m, L);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Ie(this, h, m, L);
        default:
          if (de) throw new TypeError("Unknown encoding: " + z);
          z = ("" + z).toLowerCase(), de = true;
      }
    }, a.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function Re(b, h, m) {
      return h === 0 && m === b.length ? d.fromByteArray(b) : d.fromByteArray(b.slice(h, m));
    }
    function te(b, h, m) {
      m = Math.min(b.length, m);
      const L = [];
      let z = h;
      for (; z < m; ) {
        const ie = b[z];
        let de = null, Oe = ie > 239 ? 4 : ie > 223 ? 3 : ie > 191 ? 2 : 1;
        if (z + Oe <= m) {
          let Le, He, Xe, Ye;
          switch (Oe) {
            case 1:
              ie < 128 && (de = ie);
              break;
            case 2:
              Le = b[z + 1], (Le & 192) === 128 && (Ye = (ie & 31) << 6 | Le & 63, Ye > 127 && (de = Ye));
              break;
            case 3:
              Le = b[z + 1], He = b[z + 2], (Le & 192) === 128 && (He & 192) === 128 && (Ye = (ie & 15) << 12 | (Le & 63) << 6 | He & 63, Ye > 2047 && (Ye < 55296 || Ye > 57343) && (de = Ye));
              break;
            case 4:
              Le = b[z + 1], He = b[z + 2], Xe = b[z + 3], (Le & 192) === 128 && (He & 192) === 128 && (Xe & 192) === 128 && (Ye = (ie & 15) << 18 | (Le & 63) << 12 | (He & 63) << 6 | Xe & 63, Ye > 65535 && Ye < 1114112 && (de = Ye));
          }
        }
        de === null ? (de = 65533, Oe = 1) : de > 65535 && (de -= 65536, L.push(de >>> 10 & 1023 | 55296), de = 56320 | de & 1023), L.push(de), z += Oe;
      }
      return G(L);
    }
    const D = 4096;
    function G(b) {
      const h = b.length;
      if (h <= D) return String.fromCharCode.apply(String, b);
      let m = "", L = 0;
      for (; L < h; ) m += String.fromCharCode.apply(String, b.slice(L, L += D));
      return m;
    }
    function Z(b, h, m) {
      let L = "";
      m = Math.min(b.length, m);
      for (let z = h; z < m; ++z) L += String.fromCharCode(b[z] & 127);
      return L;
    }
    function V(b, h, m) {
      let L = "";
      m = Math.min(b.length, m);
      for (let z = h; z < m; ++z) L += String.fromCharCode(b[z]);
      return L;
    }
    function ce(b, h, m) {
      const L = b.length;
      (!h || h < 0) && (h = 0), (!m || m < 0 || m > L) && (m = L);
      let z = "";
      for (let ie = h; ie < m; ++ie) z += Pt[b[ie]];
      return z;
    }
    function ee(b, h, m) {
      const L = b.slice(h, m);
      let z = "";
      for (let ie = 0; ie < L.length - 1; ie += 2) z += String.fromCharCode(L[ie] + L[ie + 1] * 256);
      return z;
    }
    a.prototype.slice = function(h, m) {
      const L = this.length;
      h = ~~h, m = m === void 0 ? L : ~~m, h < 0 ? (h += L, h < 0 && (h = 0)) : h > L && (h = L), m < 0 ? (m += L, m < 0 && (m = 0)) : m > L && (m = L), m < h && (m = h);
      const z = this.subarray(h, m);
      return Object.setPrototypeOf(z, a.prototype), z;
    };
    function le(b, h, m) {
      if (b % 1 !== 0 || b < 0) throw new RangeError("offset is not uint");
      if (b + h > m) throw new RangeError("Trying to access beyond buffer length");
    }
    a.prototype.readUintLE = a.prototype.readUIntLE = function(h, m, L) {
      h = h >>> 0, m = m >>> 0, L || le(h, m, this.length);
      let z = this[h], ie = 1, de = 0;
      for (; ++de < m && (ie *= 256); ) z += this[h + de] * ie;
      return z;
    }, a.prototype.readUintBE = a.prototype.readUIntBE = function(h, m, L) {
      h = h >>> 0, m = m >>> 0, L || le(h, m, this.length);
      let z = this[h + --m], ie = 1;
      for (; m > 0 && (ie *= 256); ) z += this[h + --m] * ie;
      return z;
    }, a.prototype.readUint8 = a.prototype.readUInt8 = function(h, m) {
      return h = h >>> 0, m || le(h, 1, this.length), this[h];
    }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(h, m) {
      return h = h >>> 0, m || le(h, 2, this.length), this[h] | this[h + 1] << 8;
    }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(h, m) {
      return h = h >>> 0, m || le(h, 2, this.length), this[h] << 8 | this[h + 1];
    }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(h, m) {
      return h = h >>> 0, m || le(h, 4, this.length), (this[h] | this[h + 1] << 8 | this[h + 2] << 16) + this[h + 3] * 16777216;
    }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(h, m) {
      return h = h >>> 0, m || le(h, 4, this.length), this[h] * 16777216 + (this[h + 1] << 16 | this[h + 2] << 8 | this[h + 3]);
    }, a.prototype.readBigUInt64LE = he(function(h) {
      h = h >>> 0, Ce(h, "offset");
      const m = this[h], L = this[h + 7];
      (m === void 0 || L === void 0) && Ke(h, this.length - 8);
      const z = m + this[++h] * 2 ** 8 + this[++h] * 2 ** 16 + this[++h] * 2 ** 24, ie = this[++h] + this[++h] * 2 ** 8 + this[++h] * 2 ** 16 + L * 2 ** 24;
      return BigInt(z) + (BigInt(ie) << BigInt(32));
    }), a.prototype.readBigUInt64BE = he(function(h) {
      h = h >>> 0, Ce(h, "offset");
      const m = this[h], L = this[h + 7];
      (m === void 0 || L === void 0) && Ke(h, this.length - 8);
      const z = m * 2 ** 24 + this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + this[++h], ie = this[++h] * 2 ** 24 + this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + L;
      return (BigInt(z) << BigInt(32)) + BigInt(ie);
    }), a.prototype.readIntLE = function(h, m, L) {
      h = h >>> 0, m = m >>> 0, L || le(h, m, this.length);
      let z = this[h], ie = 1, de = 0;
      for (; ++de < m && (ie *= 256); ) z += this[h + de] * ie;
      return ie *= 128, z >= ie && (z -= Math.pow(2, 8 * m)), z;
    }, a.prototype.readIntBE = function(h, m, L) {
      h = h >>> 0, m = m >>> 0, L || le(h, m, this.length);
      let z = m, ie = 1, de = this[h + --z];
      for (; z > 0 && (ie *= 256); ) de += this[h + --z] * ie;
      return ie *= 128, de >= ie && (de -= Math.pow(2, 8 * m)), de;
    }, a.prototype.readInt8 = function(h, m) {
      return h = h >>> 0, m || le(h, 1, this.length), this[h] & 128 ? (255 - this[h] + 1) * -1 : this[h];
    }, a.prototype.readInt16LE = function(h, m) {
      h = h >>> 0, m || le(h, 2, this.length);
      const L = this[h] | this[h + 1] << 8;
      return L & 32768 ? L | 4294901760 : L;
    }, a.prototype.readInt16BE = function(h, m) {
      h = h >>> 0, m || le(h, 2, this.length);
      const L = this[h + 1] | this[h] << 8;
      return L & 32768 ? L | 4294901760 : L;
    }, a.prototype.readInt32LE = function(h, m) {
      return h = h >>> 0, m || le(h, 4, this.length), this[h] | this[h + 1] << 8 | this[h + 2] << 16 | this[h + 3] << 24;
    }, a.prototype.readInt32BE = function(h, m) {
      return h = h >>> 0, m || le(h, 4, this.length), this[h] << 24 | this[h + 1] << 16 | this[h + 2] << 8 | this[h + 3];
    }, a.prototype.readBigInt64LE = he(function(h) {
      h = h >>> 0, Ce(h, "offset");
      const m = this[h], L = this[h + 7];
      (m === void 0 || L === void 0) && Ke(h, this.length - 8);
      const z = this[h + 4] + this[h + 5] * 2 ** 8 + this[h + 6] * 2 ** 16 + (L << 24);
      return (BigInt(z) << BigInt(32)) + BigInt(m + this[++h] * 2 ** 8 + this[++h] * 2 ** 16 + this[++h] * 2 ** 24);
    }), a.prototype.readBigInt64BE = he(function(h) {
      h = h >>> 0, Ce(h, "offset");
      const m = this[h], L = this[h + 7];
      (m === void 0 || L === void 0) && Ke(h, this.length - 8);
      const z = (m << 24) + this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + this[++h];
      return (BigInt(z) << BigInt(32)) + BigInt(this[++h] * 2 ** 24 + this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + L);
    }), a.prototype.readFloatLE = function(h, m) {
      return h = h >>> 0, m || le(h, 4, this.length), c.read(this, h, true, 23, 4);
    }, a.prototype.readFloatBE = function(h, m) {
      return h = h >>> 0, m || le(h, 4, this.length), c.read(this, h, false, 23, 4);
    }, a.prototype.readDoubleLE = function(h, m) {
      return h = h >>> 0, m || le(h, 8, this.length), c.read(this, h, true, 52, 8);
    }, a.prototype.readDoubleBE = function(h, m) {
      return h = h >>> 0, m || le(h, 8, this.length), c.read(this, h, false, 52, 8);
    };
    function me(b, h, m, L, z, ie) {
      if (!a.isBuffer(b)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (h > z || h < ie) throw new RangeError('"value" argument is out of bounds');
      if (m + L > b.length) throw new RangeError("Index out of range");
    }
    a.prototype.writeUintLE = a.prototype.writeUIntLE = function(h, m, L, z) {
      if (h = +h, m = m >>> 0, L = L >>> 0, !z) {
        const Oe = Math.pow(2, 8 * L) - 1;
        me(this, h, m, L, Oe, 0);
      }
      let ie = 1, de = 0;
      for (this[m] = h & 255; ++de < L && (ie *= 256); ) this[m + de] = h / ie & 255;
      return m + L;
    }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(h, m, L, z) {
      if (h = +h, m = m >>> 0, L = L >>> 0, !z) {
        const Oe = Math.pow(2, 8 * L) - 1;
        me(this, h, m, L, Oe, 0);
      }
      let ie = L - 1, de = 1;
      for (this[m + ie] = h & 255; --ie >= 0 && (de *= 256); ) this[m + ie] = h / de & 255;
      return m + L;
    }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(h, m, L) {
      return h = +h, m = m >>> 0, L || me(this, h, m, 1, 255, 0), this[m] = h & 255, m + 1;
    }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(h, m, L) {
      return h = +h, m = m >>> 0, L || me(this, h, m, 2, 65535, 0), this[m] = h & 255, this[m + 1] = h >>> 8, m + 2;
    }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(h, m, L) {
      return h = +h, m = m >>> 0, L || me(this, h, m, 2, 65535, 0), this[m] = h >>> 8, this[m + 1] = h & 255, m + 2;
    }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(h, m, L) {
      return h = +h, m = m >>> 0, L || me(this, h, m, 4, 4294967295, 0), this[m + 3] = h >>> 24, this[m + 2] = h >>> 16, this[m + 1] = h >>> 8, this[m] = h & 255, m + 4;
    }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(h, m, L) {
      return h = +h, m = m >>> 0, L || me(this, h, m, 4, 4294967295, 0), this[m] = h >>> 24, this[m + 1] = h >>> 16, this[m + 2] = h >>> 8, this[m + 3] = h & 255, m + 4;
    };
    function $(b, h, m, L, z) {
      qe(h, L, z, b, m, 7);
      let ie = Number(h & BigInt(4294967295));
      b[m++] = ie, ie = ie >> 8, b[m++] = ie, ie = ie >> 8, b[m++] = ie, ie = ie >> 8, b[m++] = ie;
      let de = Number(h >> BigInt(32) & BigInt(4294967295));
      return b[m++] = de, de = de >> 8, b[m++] = de, de = de >> 8, b[m++] = de, de = de >> 8, b[m++] = de, m;
    }
    function R(b, h, m, L, z) {
      qe(h, L, z, b, m, 7);
      let ie = Number(h & BigInt(4294967295));
      b[m + 7] = ie, ie = ie >> 8, b[m + 6] = ie, ie = ie >> 8, b[m + 5] = ie, ie = ie >> 8, b[m + 4] = ie;
      let de = Number(h >> BigInt(32) & BigInt(4294967295));
      return b[m + 3] = de, de = de >> 8, b[m + 2] = de, de = de >> 8, b[m + 1] = de, de = de >> 8, b[m] = de, m + 8;
    }
    a.prototype.writeBigUInt64LE = he(function(h, m = 0) {
      return $(this, h, m, BigInt(0), BigInt("0xffffffffffffffff"));
    }), a.prototype.writeBigUInt64BE = he(function(h, m = 0) {
      return R(this, h, m, BigInt(0), BigInt("0xffffffffffffffff"));
    }), a.prototype.writeIntLE = function(h, m, L, z) {
      if (h = +h, m = m >>> 0, !z) {
        const Le = Math.pow(2, 8 * L - 1);
        me(this, h, m, L, Le - 1, -Le);
      }
      let ie = 0, de = 1, Oe = 0;
      for (this[m] = h & 255; ++ie < L && (de *= 256); ) h < 0 && Oe === 0 && this[m + ie - 1] !== 0 && (Oe = 1), this[m + ie] = (h / de >> 0) - Oe & 255;
      return m + L;
    }, a.prototype.writeIntBE = function(h, m, L, z) {
      if (h = +h, m = m >>> 0, !z) {
        const Le = Math.pow(2, 8 * L - 1);
        me(this, h, m, L, Le - 1, -Le);
      }
      let ie = L - 1, de = 1, Oe = 0;
      for (this[m + ie] = h & 255; --ie >= 0 && (de *= 256); ) h < 0 && Oe === 0 && this[m + ie + 1] !== 0 && (Oe = 1), this[m + ie] = (h / de >> 0) - Oe & 255;
      return m + L;
    }, a.prototype.writeInt8 = function(h, m, L) {
      return h = +h, m = m >>> 0, L || me(this, h, m, 1, 127, -128), h < 0 && (h = 255 + h + 1), this[m] = h & 255, m + 1;
    }, a.prototype.writeInt16LE = function(h, m, L) {
      return h = +h, m = m >>> 0, L || me(this, h, m, 2, 32767, -32768), this[m] = h & 255, this[m + 1] = h >>> 8, m + 2;
    }, a.prototype.writeInt16BE = function(h, m, L) {
      return h = +h, m = m >>> 0, L || me(this, h, m, 2, 32767, -32768), this[m] = h >>> 8, this[m + 1] = h & 255, m + 2;
    }, a.prototype.writeInt32LE = function(h, m, L) {
      return h = +h, m = m >>> 0, L || me(this, h, m, 4, 2147483647, -2147483648), this[m] = h & 255, this[m + 1] = h >>> 8, this[m + 2] = h >>> 16, this[m + 3] = h >>> 24, m + 4;
    }, a.prototype.writeInt32BE = function(h, m, L) {
      return h = +h, m = m >>> 0, L || me(this, h, m, 4, 2147483647, -2147483648), h < 0 && (h = 4294967295 + h + 1), this[m] = h >>> 24, this[m + 1] = h >>> 16, this[m + 2] = h >>> 8, this[m + 3] = h & 255, m + 4;
    }, a.prototype.writeBigInt64LE = he(function(h, m = 0) {
      return $(this, h, m, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), a.prototype.writeBigInt64BE = he(function(h, m = 0) {
      return R(this, h, m, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function N(b, h, m, L, z, ie) {
      if (m + L > b.length) throw new RangeError("Index out of range");
      if (m < 0) throw new RangeError("Index out of range");
    }
    function re(b, h, m, L, z) {
      return h = +h, m = m >>> 0, z || N(b, h, m, 4), c.write(b, h, m, L, 23, 4), m + 4;
    }
    a.prototype.writeFloatLE = function(h, m, L) {
      return re(this, h, m, true, L);
    }, a.prototype.writeFloatBE = function(h, m, L) {
      return re(this, h, m, false, L);
    };
    function se(b, h, m, L, z) {
      return h = +h, m = m >>> 0, z || N(b, h, m, 8), c.write(b, h, m, L, 52, 8), m + 8;
    }
    a.prototype.writeDoubleLE = function(h, m, L) {
      return se(this, h, m, true, L);
    }, a.prototype.writeDoubleBE = function(h, m, L) {
      return se(this, h, m, false, L);
    }, a.prototype.copy = function(h, m, L, z) {
      if (!a.isBuffer(h)) throw new TypeError("argument should be a Buffer");
      if (L || (L = 0), !z && z !== 0 && (z = this.length), m >= h.length && (m = h.length), m || (m = 0), z > 0 && z < L && (z = L), z === L || h.length === 0 || this.length === 0) return 0;
      if (m < 0) throw new RangeError("targetStart out of bounds");
      if (L < 0 || L >= this.length) throw new RangeError("Index out of range");
      if (z < 0) throw new RangeError("sourceEnd out of bounds");
      z > this.length && (z = this.length), h.length - m < z - L && (z = h.length - m + L);
      const ie = z - L;
      return this === h && typeof l.prototype.copyWithin == "function" ? this.copyWithin(m, L, z) : l.prototype.set.call(h, this.subarray(L, z), m), ie;
    }, a.prototype.fill = function(h, m, L, z) {
      if (typeof h == "string") {
        if (typeof m == "string" ? (z = m, m = 0, L = this.length) : typeof L == "string" && (z = L, L = this.length), z !== void 0 && typeof z != "string") throw new TypeError("encoding must be a string");
        if (typeof z == "string" && !a.isEncoding(z)) throw new TypeError("Unknown encoding: " + z);
        if (h.length === 1) {
          const de = h.charCodeAt(0);
          (z === "utf8" && de < 128 || z === "latin1") && (h = de);
        }
      } else typeof h == "number" ? h = h & 255 : typeof h == "boolean" && (h = Number(h));
      if (m < 0 || this.length < m || this.length < L) throw new RangeError("Out of range index");
      if (L <= m) return this;
      m = m >>> 0, L = L === void 0 ? this.length : L >>> 0, h || (h = 0);
      let ie;
      if (typeof h == "number") for (ie = m; ie < L; ++ie) this[ie] = h;
      else {
        const de = a.isBuffer(h) ? h : a.from(h, z), Oe = de.length;
        if (Oe === 0) throw new TypeError('The value "' + h + '" is invalid for argument "value"');
        for (ie = 0; ie < L - m; ++ie) this[ie + m] = de[ie % Oe];
      }
      return this;
    };
    const H = {};
    function j(b, h, m) {
      H[b] = class extends m {
        constructor() {
          super(), Object.defineProperty(this, "message", {
            value: h.apply(this, arguments),
            writable: true,
            configurable: true
          }), this.name = `${this.name} [${b}]`, this.stack, delete this.name;
        }
        get code() {
          return b;
        }
        set code(z) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value: z,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${b}]: ${this.message}`;
        }
      };
    }
    j("ERR_BUFFER_OUT_OF_BOUNDS", function(b) {
      return b ? `${b} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError), j("ERR_INVALID_ARG_TYPE", function(b, h) {
      return `The "${b}" argument must be of type number. Received type ${typeof h}`;
    }, TypeError), j("ERR_OUT_OF_RANGE", function(b, h, m) {
      let L = `The value of "${b}" is out of range.`, z = m;
      return Number.isInteger(m) && Math.abs(m) > 2 ** 32 ? z = pe(String(m)) : typeof m == "bigint" && (z = String(m), (m > BigInt(2) ** BigInt(32) || m < -(BigInt(2) ** BigInt(32))) && (z = pe(z)), z += "n"), L += ` It must be ${h}. Received ${z}`, L;
    }, RangeError);
    function pe(b) {
      let h = "", m = b.length;
      const L = b[0] === "-" ? 1 : 0;
      for (; m >= L + 4; m -= 3) h = `_${b.slice(m - 3, m)}${h}`;
      return `${b.slice(0, m)}${h}`;
    }
    function Pe(b, h, m) {
      Ce(h, "offset"), (b[h] === void 0 || b[h + m] === void 0) && Ke(h, b.length - (m + 1));
    }
    function qe(b, h, m, L, z, ie) {
      if (b > m || b < h) {
        const de = typeof h == "bigint" ? "n" : "";
        let Oe;
        throw h === 0 || h === BigInt(0) ? Oe = `>= 0${de} and < 2${de} ** ${(ie + 1) * 8}${de}` : Oe = `>= -(2${de} ** ${(ie + 1) * 8 - 1}${de}) and < 2 ** ${(ie + 1) * 8 - 1}${de}`, new H.ERR_OUT_OF_RANGE("value", Oe, b);
      }
      Pe(L, z, ie);
    }
    function Ce(b, h) {
      if (typeof b != "number") throw new H.ERR_INVALID_ARG_TYPE(h, "number", b);
    }
    function Ke(b, h, m) {
      throw Math.floor(b) !== b ? (Ce(b, m), new H.ERR_OUT_OF_RANGE("offset", "an integer", b)) : h < 0 ? new H.ERR_BUFFER_OUT_OF_BOUNDS() : new H.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${h}`, b);
    }
    const ct = /[^+/0-9A-Za-z-_]/g;
    function Se(b) {
      if (b = b.split("=")[0], b = b.trim().replace(ct, ""), b.length < 2) return "";
      for (; b.length % 4 !== 0; ) b = b + "=";
      return b;
    }
    function at(b, h) {
      h = h || 1 / 0;
      let m;
      const L = b.length;
      let z = null;
      const ie = [];
      for (let de = 0; de < L; ++de) {
        if (m = b.charCodeAt(de), m > 55295 && m < 57344) {
          if (!z) {
            if (m > 56319) {
              (h -= 3) > -1 && ie.push(239, 191, 189);
              continue;
            } else if (de + 1 === L) {
              (h -= 3) > -1 && ie.push(239, 191, 189);
              continue;
            }
            z = m;
            continue;
          }
          if (m < 56320) {
            (h -= 3) > -1 && ie.push(239, 191, 189), z = m;
            continue;
          }
          m = (z - 55296 << 10 | m - 56320) + 65536;
        } else z && (h -= 3) > -1 && ie.push(239, 191, 189);
        if (z = null, m < 128) {
          if ((h -= 1) < 0) break;
          ie.push(m);
        } else if (m < 2048) {
          if ((h -= 2) < 0) break;
          ie.push(m >> 6 | 192, m & 63 | 128);
        } else if (m < 65536) {
          if ((h -= 3) < 0) break;
          ie.push(m >> 12 | 224, m >> 6 & 63 | 128, m & 63 | 128);
        } else if (m < 1114112) {
          if ((h -= 4) < 0) break;
          ie.push(m >> 18 | 240, m >> 12 & 63 | 128, m >> 6 & 63 | 128, m & 63 | 128);
        } else throw new Error("Invalid code point");
      }
      return ie;
    }
    function Qe(b) {
      const h = [];
      for (let m = 0; m < b.length; ++m) h.push(b.charCodeAt(m) & 255);
      return h;
    }
    function Ve(b, h) {
      let m, L, z;
      const ie = [];
      for (let de = 0; de < b.length && !((h -= 2) < 0); ++de) m = b.charCodeAt(de), L = m >> 8, z = m % 256, ie.push(z), ie.push(L);
      return ie;
    }
    function Ze(b) {
      return d.toByteArray(Se(b));
    }
    function nt(b, h, m, L) {
      let z;
      for (z = 0; z < L && !(z + m >= h.length || z >= b.length); ++z) h[z + m] = b[z];
      return z;
    }
    function st(b, h) {
      return b instanceof h || b != null && b.constructor != null && b.constructor.name != null && b.constructor.name === h.name;
    }
    function Ut(b) {
      return b !== b;
    }
    const Pt = (function() {
      const b = "0123456789abcdef", h = new Array(256);
      for (let m = 0; m < 16; ++m) {
        const L = m * 16;
        for (let z = 0; z < 16; ++z) h[L + z] = b[m] + b[z];
      }
      return h;
    })();
    function he(b) {
      return typeof BigInt > "u" ? M : b;
    }
    function M() {
      throw new Error("BigInt not supported");
    }
  })(Zm);
  const ne = Zm.Buffer;
  var Bl = {}, ri = {}, ni = {}, s0;
  function u_() {
    return s0 || (s0 = 1, Object.defineProperty(ni, "__esModule", {
      value: true
    }), ni.testnet = ni.bitcoin = void 0, ni.bitcoin = {
      messagePrefix: `Bitcoin Signed Message:
`,
      bech32: "bc",
      bip32: {
        public: 76067358,
        private: 76066276
      },
      pubKeyHash: 0,
      scriptHash: 5,
      wif: 128
    }, ni.testnet = {
      messagePrefix: `Bitcoin Signed Message:
`,
      bech32: "tb",
      bip32: {
        public: 70617039,
        private: 70615956
      },
      pubKeyHash: 111,
      scriptHash: 196,
      wif: 239
    }), ni;
  }
  var Ol = {}, Rl, u0;
  function td() {
    if (u0) return Rl;
    u0 = 1;
    var n = {
      Array: function(c) {
        return c != null && c.constructor === Array;
      },
      Boolean: function(c) {
        return typeof c == "boolean";
      },
      Function: function(c) {
        return typeof c == "function";
      },
      Nil: function(c) {
        return c == null;
      },
      Number: function(c) {
        return typeof c == "number";
      },
      Object: function(c) {
        return typeof c == "object";
      },
      String: function(c) {
        return typeof c == "string";
      },
      "": function() {
        return true;
      }
    };
    n.Null = n.Nil;
    for (var d in n) n[d].toJSON = (function(c) {
      return c;
    }).bind(null, d);
    return Rl = n, Rl;
  }
  var Cl, l0;
  function ev() {
    if (l0) return Cl;
    l0 = 1;
    var n = td();
    function d(v) {
      return v.name || v.toString().match(/function (.*?)\s*\(/)[1];
    }
    function c(v) {
      return n.Nil(v) ? "" : d(v.constructor);
    }
    function f(v) {
      return n.Function(v) ? "" : n.String(v) ? JSON.stringify(v) : v && n.Object(v) ? "" : v;
    }
    function _(v, w) {
      Error.captureStackTrace && Error.captureStackTrace(v, w);
    }
    function l(v) {
      return n.Function(v) ? v.toJSON ? v.toJSON() : d(v) : n.Array(v) ? "Array" : v && n.Object(v) ? "Object" : v !== void 0 ? v : "";
    }
    function u(v, w, S) {
      var p = f(w);
      return "Expected " + l(v) + ", got" + (S !== "" ? " " + S : "") + (p !== "" ? " " + p : "");
    }
    function o(v, w, S) {
      S = S || c(w), this.message = u(v, w, S), _(this, o), this.__type = v, this.__value = w, this.__valueTypeName = S;
    }
    o.prototype = Object.create(Error.prototype), o.prototype.constructor = o;
    function s(v, w, S, p, A) {
      var x = '" of type ';
      return w === "key" && (x = '" with key type '), u('property "' + l(S) + x + l(v), p, A);
    }
    function g(v, w, S, p, A) {
      v ? (A = A || c(p), this.message = s(v, S, w, p, A)) : this.message = 'Unexpected property "' + w + '"', _(this, o), this.__label = S, this.__property = w, this.__type = v, this.__value = p, this.__valueTypeName = A;
    }
    g.prototype = Object.create(Error.prototype), g.prototype.constructor = o;
    function a(v, w) {
      return new o(v, {}, w);
    }
    function E(v, w, S) {
      return v instanceof g ? (w = w + "." + v.__property, v = new g(v.__type, w, v.__label, v.__value, v.__valueTypeName)) : v instanceof o && (v = new g(v.__type, w, S, v.__value, v.__valueTypeName)), _(v), v;
    }
    return Cl = {
      TfTypeError: o,
      TfPropertyTypeError: g,
      tfCustomError: a,
      tfSubError: E,
      tfJSON: l,
      getValueTypeName: c
    }, Cl;
  }
  var Nl, f0;
  function l_() {
    if (f0) return Nl;
    f0 = 1;
    var n = td(), d = ev();
    function c(C) {
      return ne.isBuffer(C);
    }
    function f(C) {
      return typeof C == "string" && /^([0-9a-f]{2})+$/i.test(C);
    }
    function _(C, K) {
      var X = C.toJSON();
      function Q(ae) {
        if (!C(ae)) return false;
        if (ae.length === K) return true;
        throw d.tfCustomError(X + "(Length: " + K + ")", X + "(Length: " + ae.length + ")");
      }
      return Q.toJSON = function() {
        return X;
      }, Q;
    }
    var l = _.bind(null, n.Array), u = _.bind(null, c), o = _.bind(null, f), s = _.bind(null, n.String);
    function g(C, K, X) {
      X = X || n.Number;
      function Q(ae, Ee) {
        return X(ae, Ee) && ae > C && ae < K;
      }
      return Q.toJSON = function() {
        return `${X.toJSON()} between [${C}, ${K}]`;
      }, Q;
    }
    var a = Math.pow(2, 53) - 1;
    function E(C) {
      return typeof C == "number" && isFinite(C);
    }
    function v(C) {
      return C << 24 >> 24 === C;
    }
    function w(C) {
      return C << 16 >> 16 === C;
    }
    function S(C) {
      return (C | 0) === C;
    }
    function p(C) {
      return typeof C == "number" && C >= -a && C <= a && Math.floor(C) === C;
    }
    function A(C) {
      return (C & 255) === C;
    }
    function x(C) {
      return (C & 65535) === C;
    }
    function k(C) {
      return C >>> 0 === C;
    }
    function B(C) {
      return typeof C == "number" && C >= 0 && C <= a && Math.floor(C) === C;
    }
    var O = {
      ArrayN: l,
      Buffer: c,
      BufferN: u,
      Finite: E,
      Hex: f,
      HexN: o,
      Int8: v,
      Int16: w,
      Int32: S,
      Int53: p,
      Range: g,
      StringN: s,
      UInt8: A,
      UInt16: x,
      UInt32: k,
      UInt53: B
    };
    for (var U in O) O[U].toJSON = (function(C) {
      return C;
    }).bind(null, U);
    return Nl = O, Nl;
  }
  var Ul, c0;
  function tv() {
    if (c0) return Ul;
    c0 = 1;
    var n = ev(), d = td(), c = n.tfJSON, f = n.TfTypeError, _ = n.TfPropertyTypeError, l = n.tfSubError, u = n.getValueTypeName, o = {
      arrayOf: function(w, S) {
        w = s(w), S = S || {};
        function p(A, x) {
          return !d.Array(A) || d.Nil(A) || S.minLength !== void 0 && A.length < S.minLength || S.maxLength !== void 0 && A.length > S.maxLength || S.length !== void 0 && A.length !== S.length ? false : A.every(function(k, B) {
            try {
              return g(w, k, x);
            } catch (O) {
              throw l(O, B);
            }
          });
        }
        return p.toJSON = function() {
          var A = "[" + c(w) + "]";
          return S.length !== void 0 ? A += "{" + S.length + "}" : (S.minLength !== void 0 || S.maxLength !== void 0) && (A += "{" + (S.minLength === void 0 ? 0 : S.minLength) + "," + (S.maxLength === void 0 ? 1 / 0 : S.maxLength) + "}"), A;
        }, p;
      },
      maybe: function v(w) {
        w = s(w);
        function S(p, A) {
          return d.Nil(p) || w(p, A, v);
        }
        return S.toJSON = function() {
          return "?" + c(w);
        }, S;
      },
      map: function(w, S) {
        w = s(w), S && (S = s(S));
        function p(A, x) {
          if (!d.Object(A) || d.Nil(A)) return false;
          for (var k in A) {
            try {
              S && g(S, k, x);
            } catch (O) {
              throw l(O, k, "key");
            }
            try {
              var B = A[k];
              g(w, B, x);
            } catch (O) {
              throw l(O, k);
            }
          }
          return true;
        }
        return S ? p.toJSON = function() {
          return "{" + c(S) + ": " + c(w) + "}";
        } : p.toJSON = function() {
          return "{" + c(w) + "}";
        }, p;
      },
      object: function(w) {
        var S = {};
        for (var p in w) S[p] = s(w[p]);
        function A(x, k) {
          if (!d.Object(x) || d.Nil(x)) return false;
          var B;
          try {
            for (B in S) {
              var O = S[B], U = x[B];
              g(O, U, k);
            }
          } catch (C) {
            throw l(C, B);
          }
          if (k) {
            for (B in x) if (!S[B]) throw new _(void 0, B);
          }
          return true;
        }
        return A.toJSON = function() {
          return c(S);
        }, A;
      },
      anyOf: function() {
        var w = [].slice.call(arguments).map(s);
        function S(p, A) {
          return w.some(function(x) {
            try {
              return g(x, p, A);
            } catch {
              return false;
            }
          });
        }
        return S.toJSON = function() {
          return w.map(c).join("|");
        }, S;
      },
      allOf: function() {
        var w = [].slice.call(arguments).map(s);
        function S(p, A) {
          return w.every(function(x) {
            try {
              return g(x, p, A);
            } catch {
              return false;
            }
          });
        }
        return S.toJSON = function() {
          return w.map(c).join(" & ");
        }, S;
      },
      quacksLike: function(w) {
        function S(p) {
          return w === u(p);
        }
        return S.toJSON = function() {
          return w;
        }, S;
      },
      tuple: function() {
        var w = [].slice.call(arguments).map(s);
        function S(p, A) {
          return d.Nil(p) || d.Nil(p.length) || A && p.length !== w.length ? false : w.every(function(x, k) {
            try {
              return g(x, p[k], A);
            } catch (B) {
              throw l(B, k);
            }
          });
        }
        return S.toJSON = function() {
          return "(" + w.map(c).join(", ") + ")";
        }, S;
      },
      value: function(w) {
        function S(p) {
          return p === w;
        }
        return S.toJSON = function() {
          return w;
        }, S;
      }
    };
    o.oneOf = o.anyOf;
    function s(v) {
      if (d.String(v)) return v[0] === "?" ? o.maybe(v.slice(1)) : d[v] || o.quacksLike(v);
      if (v && d.Object(v)) {
        if (d.Array(v)) {
          if (v.length !== 1) throw new TypeError("Expected compile() parameter of type Array of length 1");
          return o.arrayOf(v[0]);
        }
        return o.object(v);
      } else if (d.Function(v)) return v;
      return o.value(v);
    }
    function g(v, w, S, p) {
      if (d.Function(v)) {
        if (v(w, S)) return true;
        throw new f(p || v, w);
      }
      return g(s(v), w, S);
    }
    for (var a in d) g[a] = d[a];
    for (a in o) g[a] = o[a];
    var E = l_();
    for (a in E) g[a] = E[a];
    return g.compile = s, g.TfTypeError = f, g.TfPropertyTypeError = _, Ul = g, Ul;
  }
  var d0;
  function f_() {
    return d0 || (d0 = 1, (function(n) {
      Object.defineProperty(n, "__esModule", {
        value: true
      }), n.maybe = n.Boolean = n.Array = n.Buffer256bit = n.Network = n.typeforce = void 0, n.typeforce = tv(), n.Network = n.typeforce.compile({
        messagePrefix: n.typeforce.oneOf(n.typeforce.Buffer, n.typeforce.String),
        bip32: {
          public: n.typeforce.UInt32,
          private: n.typeforce.UInt32
        },
        pubKeyHash: n.typeforce.UInt8,
        scriptHash: n.typeforce.UInt8,
        wif: n.typeforce.UInt8
      }), n.Buffer256bit = n.typeforce.BufferN(32), n.Array = n.typeforce.Array, n.Boolean = n.typeforce.Boolean, n.maybe = n.typeforce.maybe;
    })(Ol)), Ol;
  }
  function c_(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
  }
  var rv = {
    exports: {}
  }, Bt = rv.exports = {}, Mr, Dr;
  function Xc() {
    throw new Error("setTimeout has not been defined");
  }
  function Yc() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      typeof setTimeout == "function" ? Mr = setTimeout : Mr = Xc;
    } catch {
      Mr = Xc;
    }
    try {
      typeof clearTimeout == "function" ? Dr = clearTimeout : Dr = Yc;
    } catch {
      Dr = Yc;
    }
  })();
  function nv(n) {
    if (Mr === setTimeout) return setTimeout(n, 0);
    if ((Mr === Xc || !Mr) && setTimeout) return Mr = setTimeout, setTimeout(n, 0);
    try {
      return Mr(n, 0);
    } catch {
      try {
        return Mr.call(null, n, 0);
      } catch {
        return Mr.call(this, n, 0);
      }
    }
  }
  function d_(n) {
    if (Dr === clearTimeout) return clearTimeout(n);
    if ((Dr === Yc || !Dr) && clearTimeout) return Dr = clearTimeout, clearTimeout(n);
    try {
      return Dr(n);
    } catch {
      try {
        return Dr.call(null, n);
      } catch {
        return Dr.call(this, n);
      }
    }
  }
  var rn = [], Wi = false, di, Rs = -1;
  function h_() {
    !Wi || !di || (Wi = false, di.length ? rn = di.concat(rn) : Rs = -1, rn.length && iv());
  }
  function iv() {
    if (!Wi) {
      var n = nv(h_);
      Wi = true;
      for (var d = rn.length; d; ) {
        for (di = rn, rn = []; ++Rs < d; ) di && di[Rs].run();
        Rs = -1, d = rn.length;
      }
      di = null, Wi = false, d_(n);
    }
  }
  Bt.nextTick = function(n) {
    var d = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var c = 1; c < arguments.length; c++) d[c - 1] = arguments[c];
    rn.push(new ov(n, d)), rn.length === 1 && !Wi && nv(iv);
  };
  function ov(n, d) {
    this.fun = n, this.array = d;
  }
  ov.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  Bt.title = "browser";
  Bt.browser = true;
  Bt.env = {};
  Bt.argv = [];
  Bt.version = "";
  Bt.versions = {};
  function on() {
  }
  Bt.on = on;
  Bt.addListener = on;
  Bt.once = on;
  Bt.off = on;
  Bt.removeListener = on;
  Bt.removeAllListeners = on;
  Bt.emit = on;
  Bt.prependListener = on;
  Bt.prependOnceListener = on;
  Bt.listeners = function(n) {
    return [];
  };
  Bt.binding = function(n) {
    throw new Error("process.binding is not supported");
  };
  Bt.cwd = function() {
    return "/";
  };
  Bt.chdir = function(n) {
    throw new Error("process.chdir is not supported");
  };
  Bt.umask = function() {
    return 0;
  };
  var p_ = rv.exports;
  const ze = c_(p_);
  var gs = {
    exports: {}
  }, ms = {
    exports: {}
  }, Fl = {}, h0;
  function qr() {
    return h0 || (h0 = 1, (function(n) {
      Object.defineProperties(n, {
        __esModule: {
          value: true
        },
        [Symbol.toStringTag]: {
          value: "Module"
        }
      });
      var d = {}, c = {};
      c.byteLength = a, c.toByteArray = v, c.fromByteArray = p;
      for (var f = [], _ = [], l = typeof Uint8Array < "u" ? Uint8Array : Array, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, s = u.length; o < s; ++o) f[o] = u[o], _[u.charCodeAt(o)] = o;
      _[45] = 62, _[95] = 63;
      function g(k) {
        var B = k.length;
        if (B % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var O = k.indexOf("=");
        O === -1 && (O = B);
        var U = O === B ? 0 : 4 - O % 4;
        return [
          O,
          U
        ];
      }
      function a(k) {
        var B = g(k), O = B[0], U = B[1];
        return (O + U) * 3 / 4 - U;
      }
      function E(k, B, O) {
        return (B + O) * 3 / 4 - O;
      }
      function v(k) {
        var B, O = g(k), U = O[0], C = O[1], K = new l(E(k, U, C)), X = 0, Q = C > 0 ? U - 4 : U, ae;
        for (ae = 0; ae < Q; ae += 4) B = _[k.charCodeAt(ae)] << 18 | _[k.charCodeAt(ae + 1)] << 12 | _[k.charCodeAt(ae + 2)] << 6 | _[k.charCodeAt(ae + 3)], K[X++] = B >> 16 & 255, K[X++] = B >> 8 & 255, K[X++] = B & 255;
        return C === 2 && (B = _[k.charCodeAt(ae)] << 2 | _[k.charCodeAt(ae + 1)] >> 4, K[X++] = B & 255), C === 1 && (B = _[k.charCodeAt(ae)] << 10 | _[k.charCodeAt(ae + 1)] << 4 | _[k.charCodeAt(ae + 2)] >> 2, K[X++] = B >> 8 & 255, K[X++] = B & 255), K;
      }
      function w(k) {
        return f[k >> 18 & 63] + f[k >> 12 & 63] + f[k >> 6 & 63] + f[k & 63];
      }
      function S(k, B, O) {
        for (var U, C = [], K = B; K < O; K += 3) U = (k[K] << 16 & 16711680) + (k[K + 1] << 8 & 65280) + (k[K + 2] & 255), C.push(w(U));
        return C.join("");
      }
      function p(k) {
        for (var B, O = k.length, U = O % 3, C = [], K = 16383, X = 0, Q = O - U; X < Q; X += K) C.push(S(k, X, X + K > Q ? Q : X + K));
        return U === 1 ? (B = k[O - 1], C.push(f[B >> 2] + f[B << 4 & 63] + "==")) : U === 2 && (B = (k[O - 2] << 8) + k[O - 1], C.push(f[B >> 10] + f[B >> 4 & 63] + f[B << 2 & 63] + "=")), C.join("");
      }
      var A = {};
      A.read = function(k, B, O, U, C) {
        var K, X, Q = C * 8 - U - 1, ae = (1 << Q) - 1, Ee = ae >> 1, W = -7, ye = O ? C - 1 : 0, Te = O ? -1 : 1, Ie = k[B + ye];
        for (ye += Te, K = Ie & (1 << -W) - 1, Ie >>= -W, W += Q; W > 0; K = K * 256 + k[B + ye], ye += Te, W -= 8) ;
        for (X = K & (1 << -W) - 1, K >>= -W, W += U; W > 0; X = X * 256 + k[B + ye], ye += Te, W -= 8) ;
        if (K === 0) K = 1 - Ee;
        else {
          if (K === ae) return X ? NaN : (Ie ? -1 : 1) * (1 / 0);
          X = X + Math.pow(2, U), K = K - Ee;
        }
        return (Ie ? -1 : 1) * X * Math.pow(2, K - U);
      }, A.write = function(k, B, O, U, C, K) {
        var X, Q, ae, Ee = K * 8 - C - 1, W = (1 << Ee) - 1, ye = W >> 1, Te = C === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, Ie = U ? 0 : K - 1, Re = U ? 1 : -1, te = B < 0 || B === 0 && 1 / B < 0 ? 1 : 0;
        for (B = Math.abs(B), isNaN(B) || B === 1 / 0 ? (Q = isNaN(B) ? 1 : 0, X = W) : (X = Math.floor(Math.log(B) / Math.LN2), B * (ae = Math.pow(2, -X)) < 1 && (X--, ae *= 2), X + ye >= 1 ? B += Te / ae : B += Te * Math.pow(2, 1 - ye), B * ae >= 2 && (X++, ae /= 2), X + ye >= W ? (Q = 0, X = W) : X + ye >= 1 ? (Q = (B * ae - 1) * Math.pow(2, C), X = X + ye) : (Q = B * Math.pow(2, ye - 1) * Math.pow(2, C), X = 0)); C >= 8; k[O + Ie] = Q & 255, Ie += Re, Q /= 256, C -= 8) ;
        for (X = X << C | Q, Ee += C; Ee > 0; k[O + Ie] = X & 255, Ie += Re, X /= 256, Ee -= 8) ;
        k[O + Ie - Re] |= te * 128;
      };
      (function(k) {
        const B = c, O = A, U = typeof Symbol == "function" && typeof Symbol.for == "function" ? /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom") : null;
        k.Buffer = W, k.SlowBuffer = ee, k.INSPECT_MAX_BYTES = 50;
        const C = 2147483647;
        k.kMaxLength = C;
        const { Uint8Array: K, ArrayBuffer: X, SharedArrayBuffer: Q } = globalThis;
        W.TYPED_ARRAY_SUPPORT = ae(), !W.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
        function ae() {
          try {
            const q = new K(1), P = {
              foo: function() {
                return 42;
              }
            };
            return Object.setPrototypeOf(P, K.prototype), Object.setPrototypeOf(q, P), q.foo() === 42;
          } catch {
            return false;
          }
        }
        Object.defineProperty(W.prototype, "parent", {
          enumerable: true,
          get: function() {
            if (W.isBuffer(this)) return this.buffer;
          }
        }), Object.defineProperty(W.prototype, "offset", {
          enumerable: true,
          get: function() {
            if (W.isBuffer(this)) return this.byteOffset;
          }
        });
        function Ee(q) {
          if (q > C) throw new RangeError('The value "' + q + '" is invalid for option "size"');
          const P = new K(q);
          return Object.setPrototypeOf(P, W.prototype), P;
        }
        function W(q, P, I) {
          if (typeof q == "number") {
            if (typeof P == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
            return Re(q);
          }
          return ye(q, P, I);
        }
        W.poolSize = 8192;
        function ye(q, P, I) {
          if (typeof q == "string") return te(q, P);
          if (X.isView(q)) return G(q);
          if (q == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof q);
          if (kt(q, X) || q && kt(q.buffer, X) || typeof Q < "u" && (kt(q, Q) || q && kt(q.buffer, Q))) return Z(q, P, I);
          if (typeof q == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
          const Y = q.valueOf && q.valueOf();
          if (Y != null && Y !== q) return W.from(Y, P, I);
          const fe = V(q);
          if (fe) return fe;
          if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof q[Symbol.toPrimitive] == "function") return W.from(q[Symbol.toPrimitive]("string"), P, I);
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof q);
        }
        W.from = function(q, P, I) {
          return ye(q, P, I);
        }, Object.setPrototypeOf(W.prototype, K.prototype), Object.setPrototypeOf(W, K);
        function Te(q) {
          if (typeof q != "number") throw new TypeError('"size" argument must be of type number');
          if (q < 0) throw new RangeError('The value "' + q + '" is invalid for option "size"');
        }
        function Ie(q, P, I) {
          return Te(q), q <= 0 ? Ee(q) : P !== void 0 ? typeof I == "string" ? Ee(q).fill(P, I) : Ee(q).fill(P) : Ee(q);
        }
        W.alloc = function(q, P, I) {
          return Ie(q, P, I);
        };
        function Re(q) {
          return Te(q), Ee(q < 0 ? 0 : ce(q) | 0);
        }
        W.allocUnsafe = function(q) {
          return Re(q);
        }, W.allocUnsafeSlow = function(q) {
          return Re(q);
        };
        function te(q, P) {
          if ((typeof P != "string" || P === "") && (P = "utf8"), !W.isEncoding(P)) throw new TypeError("Unknown encoding: " + P);
          const I = le(q, P) | 0;
          let Y = Ee(I);
          const fe = Y.write(q, P);
          return fe !== I && (Y = Y.slice(0, fe)), Y;
        }
        function D(q) {
          const P = q.length < 0 ? 0 : ce(q.length) | 0, I = Ee(P);
          for (let Y = 0; Y < P; Y += 1) I[Y] = q[Y] & 255;
          return I;
        }
        function G(q) {
          if (kt(q, K)) {
            const P = new K(q);
            return Z(P.buffer, P.byteOffset, P.byteLength);
          }
          return D(q);
        }
        function Z(q, P, I) {
          if (P < 0 || q.byteLength < P) throw new RangeError('"offset" is outside of buffer bounds');
          if (q.byteLength < P + (I || 0)) throw new RangeError('"length" is outside of buffer bounds');
          let Y;
          return P === void 0 && I === void 0 ? Y = new K(q) : I === void 0 ? Y = new K(q, P) : Y = new K(q, P, I), Object.setPrototypeOf(Y, W.prototype), Y;
        }
        function V(q) {
          if (W.isBuffer(q)) {
            const P = ce(q.length) | 0, I = Ee(P);
            return I.length === 0 || q.copy(I, 0, 0, P), I;
          }
          if (q.length !== void 0) return typeof q.length != "number" || gi(q.length) ? Ee(0) : D(q);
          if (q.type === "Buffer" && Array.isArray(q.data)) return D(q.data);
        }
        function ce(q) {
          if (q >= C) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + C.toString(16) + " bytes");
          return q | 0;
        }
        function ee(q) {
          return +q != q && (q = 0), W.alloc(+q);
        }
        W.isBuffer = function(P) {
          return P != null && P._isBuffer === true && P !== W.prototype;
        }, W.compare = function(P, I) {
          if (kt(P, K) && (P = W.from(P, P.offset, P.byteLength)), kt(I, K) && (I = W.from(I, I.offset, I.byteLength)), !W.isBuffer(P) || !W.isBuffer(I)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
          if (P === I) return 0;
          let Y = P.length, fe = I.length;
          for (let _e = 0, be = Math.min(Y, fe); _e < be; ++_e) if (P[_e] !== I[_e]) {
            Y = P[_e], fe = I[_e];
            break;
          }
          return Y < fe ? -1 : fe < Y ? 1 : 0;
        }, W.isEncoding = function(P) {
          switch (String(P).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return true;
            default:
              return false;
          }
        }, W.concat = function(P, I) {
          if (!Array.isArray(P)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (P.length === 0) return W.alloc(0);
          let Y;
          if (I === void 0) for (I = 0, Y = 0; Y < P.length; ++Y) I += P[Y].length;
          const fe = W.allocUnsafe(I);
          let _e = 0;
          for (Y = 0; Y < P.length; ++Y) {
            let be = P[Y];
            if (kt(be, K)) _e + be.length > fe.length ? (W.isBuffer(be) || (be = W.from(be)), be.copy(fe, _e)) : K.prototype.set.call(fe, be, _e);
            else if (W.isBuffer(be)) be.copy(fe, _e);
            else throw new TypeError('"list" argument must be an Array of Buffers');
            _e += be.length;
          }
          return fe;
        };
        function le(q, P) {
          if (W.isBuffer(q)) return q.length;
          if (X.isView(q) || kt(q, X)) return q.byteLength;
          if (typeof q != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof q);
          const I = q.length, Y = arguments.length > 2 && arguments[2] === true;
          if (!Y && I === 0) return 0;
          let fe = false;
          for (; ; ) switch (P) {
            case "ascii":
            case "latin1":
            case "binary":
              return I;
            case "utf8":
            case "utf-8":
              return Le(q).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return I * 2;
            case "hex":
              return I >>> 1;
            case "base64":
              return Ye(q).length;
            default:
              if (fe) return Y ? -1 : Le(q).length;
              P = ("" + P).toLowerCase(), fe = true;
          }
        }
        W.byteLength = le;
        function me(q, P, I) {
          let Y = false;
          if ((P === void 0 || P < 0) && (P = 0), P > this.length || ((I === void 0 || I > this.length) && (I = this.length), I <= 0) || (I >>>= 0, P >>>= 0, I <= P)) return "";
          for (q || (q = "utf8"); ; ) switch (q) {
            case "hex":
              return at(this, P, I);
            case "utf8":
            case "utf-8":
              return qe(this, P, I);
            case "ascii":
              return ct(this, P, I);
            case "latin1":
            case "binary":
              return Se(this, P, I);
            case "base64":
              return Pe(this, P, I);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return Qe(this, P, I);
            default:
              if (Y) throw new TypeError("Unknown encoding: " + q);
              q = (q + "").toLowerCase(), Y = true;
          }
        }
        W.prototype._isBuffer = true;
        function $(q, P, I) {
          const Y = q[P];
          q[P] = q[I], q[I] = Y;
        }
        W.prototype.swap16 = function() {
          const P = this.length;
          if (P % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (let I = 0; I < P; I += 2) $(this, I, I + 1);
          return this;
        }, W.prototype.swap32 = function() {
          const P = this.length;
          if (P % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (let I = 0; I < P; I += 4) $(this, I, I + 3), $(this, I + 1, I + 2);
          return this;
        }, W.prototype.swap64 = function() {
          const P = this.length;
          if (P % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (let I = 0; I < P; I += 8) $(this, I, I + 7), $(this, I + 1, I + 6), $(this, I + 2, I + 5), $(this, I + 3, I + 4);
          return this;
        }, W.prototype.toString = function() {
          const P = this.length;
          return P === 0 ? "" : arguments.length === 0 ? qe(this, 0, P) : me.apply(this, arguments);
        }, W.prototype.toLocaleString = W.prototype.toString, W.prototype.equals = function(P) {
          if (!W.isBuffer(P)) throw new TypeError("Argument must be a Buffer");
          return this === P ? true : W.compare(this, P) === 0;
        }, W.prototype.inspect = function() {
          let P = "";
          const I = k.INSPECT_MAX_BYTES;
          return P = this.toString("hex", 0, I).replace(/(.{2})/g, "$1 ").trim(), this.length > I && (P += " ... "), "<Buffer " + P + ">";
        }, U && (W.prototype[U] = W.prototype.inspect), W.prototype.compare = function(P, I, Y, fe, _e) {
          if (kt(P, K) && (P = W.from(P, P.offset, P.byteLength)), !W.isBuffer(P)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof P);
          if (I === void 0 && (I = 0), Y === void 0 && (Y = P ? P.length : 0), fe === void 0 && (fe = 0), _e === void 0 && (_e = this.length), I < 0 || Y > P.length || fe < 0 || _e > this.length) throw new RangeError("out of range index");
          if (fe >= _e && I >= Y) return 0;
          if (fe >= _e) return -1;
          if (I >= Y) return 1;
          if (I >>>= 0, Y >>>= 0, fe >>>= 0, _e >>>= 0, this === P) return 0;
          let be = _e - fe, Je = Y - I;
          const ht = Math.min(be, Je), dt = this.slice(fe, _e), wt = P.slice(I, Y);
          for (let lt = 0; lt < ht; ++lt) if (dt[lt] !== wt[lt]) {
            be = dt[lt], Je = wt[lt];
            break;
          }
          return be < Je ? -1 : Je < be ? 1 : 0;
        };
        function R(q, P, I, Y, fe) {
          if (q.length === 0) return -1;
          if (typeof I == "string" ? (Y = I, I = 0) : I > 2147483647 ? I = 2147483647 : I < -2147483648 && (I = -2147483648), I = +I, gi(I) && (I = fe ? 0 : q.length - 1), I < 0 && (I = q.length + I), I >= q.length) {
            if (fe) return -1;
            I = q.length - 1;
          } else if (I < 0) if (fe) I = 0;
          else return -1;
          if (typeof P == "string" && (P = W.from(P, Y)), W.isBuffer(P)) return P.length === 0 ? -1 : N(q, P, I, Y, fe);
          if (typeof P == "number") return P = P & 255, typeof K.prototype.indexOf == "function" ? fe ? K.prototype.indexOf.call(q, P, I) : K.prototype.lastIndexOf.call(q, P, I) : N(q, [
            P
          ], I, Y, fe);
          throw new TypeError("val must be string, number or Buffer");
        }
        function N(q, P, I, Y, fe) {
          let _e = 1, be = q.length, Je = P.length;
          if (Y !== void 0 && (Y = String(Y).toLowerCase(), Y === "ucs2" || Y === "ucs-2" || Y === "utf16le" || Y === "utf-16le")) {
            if (q.length < 2 || P.length < 2) return -1;
            _e = 2, be /= 2, Je /= 2, I /= 2;
          }
          function ht(wt, lt) {
            return _e === 1 ? wt[lt] : wt.readUInt16BE(lt * _e);
          }
          let dt;
          if (fe) {
            let wt = -1;
            for (dt = I; dt < be; dt++) if (ht(q, dt) === ht(P, wt === -1 ? 0 : dt - wt)) {
              if (wt === -1 && (wt = dt), dt - wt + 1 === Je) return wt * _e;
            } else wt !== -1 && (dt -= dt - wt), wt = -1;
          } else for (I + Je > be && (I = be - Je), dt = I; dt >= 0; dt--) {
            let wt = true;
            for (let lt = 0; lt < Je; lt++) if (ht(q, dt + lt) !== ht(P, lt)) {
              wt = false;
              break;
            }
            if (wt) return dt;
          }
          return -1;
        }
        W.prototype.includes = function(P, I, Y) {
          return this.indexOf(P, I, Y) !== -1;
        }, W.prototype.indexOf = function(P, I, Y) {
          return R(this, P, I, Y, true);
        }, W.prototype.lastIndexOf = function(P, I, Y) {
          return R(this, P, I, Y, false);
        };
        function re(q, P, I, Y) {
          I = Number(I) || 0;
          const fe = q.length - I;
          Y ? (Y = Number(Y), Y > fe && (Y = fe)) : Y = fe;
          const _e = P.length;
          Y > _e / 2 && (Y = _e / 2);
          let be;
          for (be = 0; be < Y; ++be) {
            const Je = parseInt(P.substr(be * 2, 2), 16);
            if (gi(Je)) return be;
            q[I + be] = Je;
          }
          return be;
        }
        function se(q, P, I, Y) {
          return et(Le(P, q.length - I), q, I, Y);
        }
        function H(q, P, I, Y) {
          return et(He(P), q, I, Y);
        }
        function j(q, P, I, Y) {
          return et(Ye(P), q, I, Y);
        }
        function pe(q, P, I, Y) {
          return et(Xe(P, q.length - I), q, I, Y);
        }
        W.prototype.write = function(P, I, Y, fe) {
          if (I === void 0) fe = "utf8", Y = this.length, I = 0;
          else if (Y === void 0 && typeof I == "string") fe = I, Y = this.length, I = 0;
          else if (isFinite(I)) I = I >>> 0, isFinite(Y) ? (Y = Y >>> 0, fe === void 0 && (fe = "utf8")) : (fe = Y, Y = void 0);
          else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          const _e = this.length - I;
          if ((Y === void 0 || Y > _e) && (Y = _e), P.length > 0 && (Y < 0 || I < 0) || I > this.length) throw new RangeError("Attempt to write outside buffer bounds");
          fe || (fe = "utf8");
          let be = false;
          for (; ; ) switch (fe) {
            case "hex":
              return re(this, P, I, Y);
            case "utf8":
            case "utf-8":
              return se(this, P, I, Y);
            case "ascii":
            case "latin1":
            case "binary":
              return H(this, P, I, Y);
            case "base64":
              return j(this, P, I, Y);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return pe(this, P, I, Y);
            default:
              if (be) throw new TypeError("Unknown encoding: " + fe);
              fe = ("" + fe).toLowerCase(), be = true;
          }
        }, W.prototype.toJSON = function() {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
          };
        };
        function Pe(q, P, I) {
          return P === 0 && I === q.length ? B.fromByteArray(q) : B.fromByteArray(q.slice(P, I));
        }
        function qe(q, P, I) {
          I = Math.min(q.length, I);
          const Y = [];
          let fe = P;
          for (; fe < I; ) {
            const _e = q[fe];
            let be = null, Je = _e > 239 ? 4 : _e > 223 ? 3 : _e > 191 ? 2 : 1;
            if (fe + Je <= I) {
              let ht, dt, wt, lt;
              switch (Je) {
                case 1:
                  _e < 128 && (be = _e);
                  break;
                case 2:
                  ht = q[fe + 1], (ht & 192) === 128 && (lt = (_e & 31) << 6 | ht & 63, lt > 127 && (be = lt));
                  break;
                case 3:
                  ht = q[fe + 1], dt = q[fe + 2], (ht & 192) === 128 && (dt & 192) === 128 && (lt = (_e & 15) << 12 | (ht & 63) << 6 | dt & 63, lt > 2047 && (lt < 55296 || lt > 57343) && (be = lt));
                  break;
                case 4:
                  ht = q[fe + 1], dt = q[fe + 2], wt = q[fe + 3], (ht & 192) === 128 && (dt & 192) === 128 && (wt & 192) === 128 && (lt = (_e & 15) << 18 | (ht & 63) << 12 | (dt & 63) << 6 | wt & 63, lt > 65535 && lt < 1114112 && (be = lt));
              }
            }
            be === null ? (be = 65533, Je = 1) : be > 65535 && (be -= 65536, Y.push(be >>> 10 & 1023 | 55296), be = 56320 | be & 1023), Y.push(be), fe += Je;
          }
          return Ke(Y);
        }
        const Ce = 4096;
        function Ke(q) {
          const P = q.length;
          if (P <= Ce) return String.fromCharCode.apply(String, q);
          let I = "", Y = 0;
          for (; Y < P; ) I += String.fromCharCode.apply(String, q.slice(Y, Y += Ce));
          return I;
        }
        function ct(q, P, I) {
          let Y = "";
          I = Math.min(q.length, I);
          for (let fe = P; fe < I; ++fe) Y += String.fromCharCode(q[fe] & 127);
          return Y;
        }
        function Se(q, P, I) {
          let Y = "";
          I = Math.min(q.length, I);
          for (let fe = P; fe < I; ++fe) Y += String.fromCharCode(q[fe]);
          return Y;
        }
        function at(q, P, I) {
          const Y = q.length;
          (!P || P < 0) && (P = 0), (!I || I < 0 || I > Y) && (I = Y);
          let fe = "";
          for (let _e = P; _e < I; ++_e) fe += ua[q[_e]];
          return fe;
        }
        function Qe(q, P, I) {
          const Y = q.slice(P, I);
          let fe = "";
          for (let _e = 0; _e < Y.length - 1; _e += 2) fe += String.fromCharCode(Y[_e] + Y[_e + 1] * 256);
          return fe;
        }
        W.prototype.slice = function(P, I) {
          const Y = this.length;
          P = ~~P, I = I === void 0 ? Y : ~~I, P < 0 ? (P += Y, P < 0 && (P = 0)) : P > Y && (P = Y), I < 0 ? (I += Y, I < 0 && (I = 0)) : I > Y && (I = Y), I < P && (I = P);
          const fe = this.subarray(P, I);
          return Object.setPrototypeOf(fe, W.prototype), fe;
        };
        function Ve(q, P, I) {
          if (q % 1 !== 0 || q < 0) throw new RangeError("offset is not uint");
          if (q + P > I) throw new RangeError("Trying to access beyond buffer length");
        }
        W.prototype.readUintLE = W.prototype.readUIntLE = function(P, I, Y) {
          P = P >>> 0, I = I >>> 0, Y || Ve(P, I, this.length);
          let fe = this[P], _e = 1, be = 0;
          for (; ++be < I && (_e *= 256); ) fe += this[P + be] * _e;
          return fe;
        }, W.prototype.readUintBE = W.prototype.readUIntBE = function(P, I, Y) {
          P = P >>> 0, I = I >>> 0, Y || Ve(P, I, this.length);
          let fe = this[P + --I], _e = 1;
          for (; I > 0 && (_e *= 256); ) fe += this[P + --I] * _e;
          return fe;
        }, W.prototype.readUint8 = W.prototype.readUInt8 = function(P, I) {
          return P = P >>> 0, I || Ve(P, 1, this.length), this[P];
        }, W.prototype.readUint16LE = W.prototype.readUInt16LE = function(P, I) {
          return P = P >>> 0, I || Ve(P, 2, this.length), this[P] | this[P + 1] << 8;
        }, W.prototype.readUint16BE = W.prototype.readUInt16BE = function(P, I) {
          return P = P >>> 0, I || Ve(P, 2, this.length), this[P] << 8 | this[P + 1];
        }, W.prototype.readUint32LE = W.prototype.readUInt32LE = function(P, I) {
          return P = P >>> 0, I || Ve(P, 4, this.length), (this[P] | this[P + 1] << 8 | this[P + 2] << 16) + this[P + 3] * 16777216;
        }, W.prototype.readUint32BE = W.prototype.readUInt32BE = function(P, I) {
          return P = P >>> 0, I || Ve(P, 4, this.length), this[P] * 16777216 + (this[P + 1] << 16 | this[P + 2] << 8 | this[P + 3]);
        }, W.prototype.readBigUInt64LE = Tr(function(P) {
          P = P >>> 0, z(P, "offset");
          const I = this[P], Y = this[P + 7];
          (I === void 0 || Y === void 0) && ie(P, this.length - 8);
          const fe = I + this[++P] * 2 ** 8 + this[++P] * 2 ** 16 + this[++P] * 2 ** 24, _e = this[++P] + this[++P] * 2 ** 8 + this[++P] * 2 ** 16 + Y * 2 ** 24;
          return BigInt(fe) + (BigInt(_e) << BigInt(32));
        }), W.prototype.readBigUInt64BE = Tr(function(P) {
          P = P >>> 0, z(P, "offset");
          const I = this[P], Y = this[P + 7];
          (I === void 0 || Y === void 0) && ie(P, this.length - 8);
          const fe = I * 2 ** 24 + this[++P] * 2 ** 16 + this[++P] * 2 ** 8 + this[++P], _e = this[++P] * 2 ** 24 + this[++P] * 2 ** 16 + this[++P] * 2 ** 8 + Y;
          return (BigInt(fe) << BigInt(32)) + BigInt(_e);
        }), W.prototype.readIntLE = function(P, I, Y) {
          P = P >>> 0, I = I >>> 0, Y || Ve(P, I, this.length);
          let fe = this[P], _e = 1, be = 0;
          for (; ++be < I && (_e *= 256); ) fe += this[P + be] * _e;
          return _e *= 128, fe >= _e && (fe -= Math.pow(2, 8 * I)), fe;
        }, W.prototype.readIntBE = function(P, I, Y) {
          P = P >>> 0, I = I >>> 0, Y || Ve(P, I, this.length);
          let fe = I, _e = 1, be = this[P + --fe];
          for (; fe > 0 && (_e *= 256); ) be += this[P + --fe] * _e;
          return _e *= 128, be >= _e && (be -= Math.pow(2, 8 * I)), be;
        }, W.prototype.readInt8 = function(P, I) {
          return P = P >>> 0, I || Ve(P, 1, this.length), this[P] & 128 ? (255 - this[P] + 1) * -1 : this[P];
        }, W.prototype.readInt16LE = function(P, I) {
          P = P >>> 0, I || Ve(P, 2, this.length);
          const Y = this[P] | this[P + 1] << 8;
          return Y & 32768 ? Y | 4294901760 : Y;
        }, W.prototype.readInt16BE = function(P, I) {
          P = P >>> 0, I || Ve(P, 2, this.length);
          const Y = this[P + 1] | this[P] << 8;
          return Y & 32768 ? Y | 4294901760 : Y;
        }, W.prototype.readInt32LE = function(P, I) {
          return P = P >>> 0, I || Ve(P, 4, this.length), this[P] | this[P + 1] << 8 | this[P + 2] << 16 | this[P + 3] << 24;
        }, W.prototype.readInt32BE = function(P, I) {
          return P = P >>> 0, I || Ve(P, 4, this.length), this[P] << 24 | this[P + 1] << 16 | this[P + 2] << 8 | this[P + 3];
        }, W.prototype.readBigInt64LE = Tr(function(P) {
          P = P >>> 0, z(P, "offset");
          const I = this[P], Y = this[P + 7];
          (I === void 0 || Y === void 0) && ie(P, this.length - 8);
          const fe = this[P + 4] + this[P + 5] * 2 ** 8 + this[P + 6] * 2 ** 16 + (Y << 24);
          return (BigInt(fe) << BigInt(32)) + BigInt(I + this[++P] * 2 ** 8 + this[++P] * 2 ** 16 + this[++P] * 2 ** 24);
        }), W.prototype.readBigInt64BE = Tr(function(P) {
          P = P >>> 0, z(P, "offset");
          const I = this[P], Y = this[P + 7];
          (I === void 0 || Y === void 0) && ie(P, this.length - 8);
          const fe = (I << 24) + this[++P] * 2 ** 16 + this[++P] * 2 ** 8 + this[++P];
          return (BigInt(fe) << BigInt(32)) + BigInt(this[++P] * 2 ** 24 + this[++P] * 2 ** 16 + this[++P] * 2 ** 8 + Y);
        }), W.prototype.readFloatLE = function(P, I) {
          return P = P >>> 0, I || Ve(P, 4, this.length), O.read(this, P, true, 23, 4);
        }, W.prototype.readFloatBE = function(P, I) {
          return P = P >>> 0, I || Ve(P, 4, this.length), O.read(this, P, false, 23, 4);
        }, W.prototype.readDoubleLE = function(P, I) {
          return P = P >>> 0, I || Ve(P, 8, this.length), O.read(this, P, true, 52, 8);
        }, W.prototype.readDoubleBE = function(P, I) {
          return P = P >>> 0, I || Ve(P, 8, this.length), O.read(this, P, false, 52, 8);
        };
        function Ze(q, P, I, Y, fe, _e) {
          if (!W.isBuffer(q)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (P > fe || P < _e) throw new RangeError('"value" argument is out of bounds');
          if (I + Y > q.length) throw new RangeError("Index out of range");
        }
        W.prototype.writeUintLE = W.prototype.writeUIntLE = function(P, I, Y, fe) {
          if (P = +P, I = I >>> 0, Y = Y >>> 0, !fe) {
            const Je = Math.pow(2, 8 * Y) - 1;
            Ze(this, P, I, Y, Je, 0);
          }
          let _e = 1, be = 0;
          for (this[I] = P & 255; ++be < Y && (_e *= 256); ) this[I + be] = P / _e & 255;
          return I + Y;
        }, W.prototype.writeUintBE = W.prototype.writeUIntBE = function(P, I, Y, fe) {
          if (P = +P, I = I >>> 0, Y = Y >>> 0, !fe) {
            const Je = Math.pow(2, 8 * Y) - 1;
            Ze(this, P, I, Y, Je, 0);
          }
          let _e = Y - 1, be = 1;
          for (this[I + _e] = P & 255; --_e >= 0 && (be *= 256); ) this[I + _e] = P / be & 255;
          return I + Y;
        }, W.prototype.writeUint8 = W.prototype.writeUInt8 = function(P, I, Y) {
          return P = +P, I = I >>> 0, Y || Ze(this, P, I, 1, 255, 0), this[I] = P & 255, I + 1;
        }, W.prototype.writeUint16LE = W.prototype.writeUInt16LE = function(P, I, Y) {
          return P = +P, I = I >>> 0, Y || Ze(this, P, I, 2, 65535, 0), this[I] = P & 255, this[I + 1] = P >>> 8, I + 2;
        }, W.prototype.writeUint16BE = W.prototype.writeUInt16BE = function(P, I, Y) {
          return P = +P, I = I >>> 0, Y || Ze(this, P, I, 2, 65535, 0), this[I] = P >>> 8, this[I + 1] = P & 255, I + 2;
        }, W.prototype.writeUint32LE = W.prototype.writeUInt32LE = function(P, I, Y) {
          return P = +P, I = I >>> 0, Y || Ze(this, P, I, 4, 4294967295, 0), this[I + 3] = P >>> 24, this[I + 2] = P >>> 16, this[I + 1] = P >>> 8, this[I] = P & 255, I + 4;
        }, W.prototype.writeUint32BE = W.prototype.writeUInt32BE = function(P, I, Y) {
          return P = +P, I = I >>> 0, Y || Ze(this, P, I, 4, 4294967295, 0), this[I] = P >>> 24, this[I + 1] = P >>> 16, this[I + 2] = P >>> 8, this[I + 3] = P & 255, I + 4;
        };
        function nt(q, P, I, Y, fe) {
          L(P, Y, fe, q, I, 7);
          let _e = Number(P & BigInt(4294967295));
          q[I++] = _e, _e = _e >> 8, q[I++] = _e, _e = _e >> 8, q[I++] = _e, _e = _e >> 8, q[I++] = _e;
          let be = Number(P >> BigInt(32) & BigInt(4294967295));
          return q[I++] = be, be = be >> 8, q[I++] = be, be = be >> 8, q[I++] = be, be = be >> 8, q[I++] = be, I;
        }
        function st(q, P, I, Y, fe) {
          L(P, Y, fe, q, I, 7);
          let _e = Number(P & BigInt(4294967295));
          q[I + 7] = _e, _e = _e >> 8, q[I + 6] = _e, _e = _e >> 8, q[I + 5] = _e, _e = _e >> 8, q[I + 4] = _e;
          let be = Number(P >> BigInt(32) & BigInt(4294967295));
          return q[I + 3] = be, be = be >> 8, q[I + 2] = be, be = be >> 8, q[I + 1] = be, be = be >> 8, q[I] = be, I + 8;
        }
        W.prototype.writeBigUInt64LE = Tr(function(P, I = 0) {
          return nt(this, P, I, BigInt(0), BigInt("0xffffffffffffffff"));
        }), W.prototype.writeBigUInt64BE = Tr(function(P, I = 0) {
          return st(this, P, I, BigInt(0), BigInt("0xffffffffffffffff"));
        }), W.prototype.writeIntLE = function(P, I, Y, fe) {
          if (P = +P, I = I >>> 0, !fe) {
            const ht = Math.pow(2, 8 * Y - 1);
            Ze(this, P, I, Y, ht - 1, -ht);
          }
          let _e = 0, be = 1, Je = 0;
          for (this[I] = P & 255; ++_e < Y && (be *= 256); ) P < 0 && Je === 0 && this[I + _e - 1] !== 0 && (Je = 1), this[I + _e] = (P / be >> 0) - Je & 255;
          return I + Y;
        }, W.prototype.writeIntBE = function(P, I, Y, fe) {
          if (P = +P, I = I >>> 0, !fe) {
            const ht = Math.pow(2, 8 * Y - 1);
            Ze(this, P, I, Y, ht - 1, -ht);
          }
          let _e = Y - 1, be = 1, Je = 0;
          for (this[I + _e] = P & 255; --_e >= 0 && (be *= 256); ) P < 0 && Je === 0 && this[I + _e + 1] !== 0 && (Je = 1), this[I + _e] = (P / be >> 0) - Je & 255;
          return I + Y;
        }, W.prototype.writeInt8 = function(P, I, Y) {
          return P = +P, I = I >>> 0, Y || Ze(this, P, I, 1, 127, -128), P < 0 && (P = 255 + P + 1), this[I] = P & 255, I + 1;
        }, W.prototype.writeInt16LE = function(P, I, Y) {
          return P = +P, I = I >>> 0, Y || Ze(this, P, I, 2, 32767, -32768), this[I] = P & 255, this[I + 1] = P >>> 8, I + 2;
        }, W.prototype.writeInt16BE = function(P, I, Y) {
          return P = +P, I = I >>> 0, Y || Ze(this, P, I, 2, 32767, -32768), this[I] = P >>> 8, this[I + 1] = P & 255, I + 2;
        }, W.prototype.writeInt32LE = function(P, I, Y) {
          return P = +P, I = I >>> 0, Y || Ze(this, P, I, 4, 2147483647, -2147483648), this[I] = P & 255, this[I + 1] = P >>> 8, this[I + 2] = P >>> 16, this[I + 3] = P >>> 24, I + 4;
        }, W.prototype.writeInt32BE = function(P, I, Y) {
          return P = +P, I = I >>> 0, Y || Ze(this, P, I, 4, 2147483647, -2147483648), P < 0 && (P = 4294967295 + P + 1), this[I] = P >>> 24, this[I + 1] = P >>> 16, this[I + 2] = P >>> 8, this[I + 3] = P & 255, I + 4;
        }, W.prototype.writeBigInt64LE = Tr(function(P, I = 0) {
          return nt(this, P, I, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
        }), W.prototype.writeBigInt64BE = Tr(function(P, I = 0) {
          return st(this, P, I, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
        });
        function Ut(q, P, I, Y, fe, _e) {
          if (I + Y > q.length) throw new RangeError("Index out of range");
          if (I < 0) throw new RangeError("Index out of range");
        }
        function Pt(q, P, I, Y, fe) {
          return P = +P, I = I >>> 0, fe || Ut(q, P, I, 4), O.write(q, P, I, Y, 23, 4), I + 4;
        }
        W.prototype.writeFloatLE = function(P, I, Y) {
          return Pt(this, P, I, true, Y);
        }, W.prototype.writeFloatBE = function(P, I, Y) {
          return Pt(this, P, I, false, Y);
        };
        function he(q, P, I, Y, fe) {
          return P = +P, I = I >>> 0, fe || Ut(q, P, I, 8), O.write(q, P, I, Y, 52, 8), I + 8;
        }
        W.prototype.writeDoubleLE = function(P, I, Y) {
          return he(this, P, I, true, Y);
        }, W.prototype.writeDoubleBE = function(P, I, Y) {
          return he(this, P, I, false, Y);
        }, W.prototype.copy = function(P, I, Y, fe) {
          if (!W.isBuffer(P)) throw new TypeError("argument should be a Buffer");
          if (Y || (Y = 0), !fe && fe !== 0 && (fe = this.length), I >= P.length && (I = P.length), I || (I = 0), fe > 0 && fe < Y && (fe = Y), fe === Y || P.length === 0 || this.length === 0) return 0;
          if (I < 0) throw new RangeError("targetStart out of bounds");
          if (Y < 0 || Y >= this.length) throw new RangeError("Index out of range");
          if (fe < 0) throw new RangeError("sourceEnd out of bounds");
          fe > this.length && (fe = this.length), P.length - I < fe - Y && (fe = P.length - I + Y);
          const _e = fe - Y;
          return this === P && typeof K.prototype.copyWithin == "function" ? this.copyWithin(I, Y, fe) : K.prototype.set.call(P, this.subarray(Y, fe), I), _e;
        }, W.prototype.fill = function(P, I, Y, fe) {
          if (typeof P == "string") {
            if (typeof I == "string" ? (fe = I, I = 0, Y = this.length) : typeof Y == "string" && (fe = Y, Y = this.length), fe !== void 0 && typeof fe != "string") throw new TypeError("encoding must be a string");
            if (typeof fe == "string" && !W.isEncoding(fe)) throw new TypeError("Unknown encoding: " + fe);
            if (P.length === 1) {
              const be = P.charCodeAt(0);
              (fe === "utf8" && be < 128 || fe === "latin1") && (P = be);
            }
          } else typeof P == "number" ? P = P & 255 : typeof P == "boolean" && (P = Number(P));
          if (I < 0 || this.length < I || this.length < Y) throw new RangeError("Out of range index");
          if (Y <= I) return this;
          I = I >>> 0, Y = Y === void 0 ? this.length : Y >>> 0, P || (P = 0);
          let _e;
          if (typeof P == "number") for (_e = I; _e < Y; ++_e) this[_e] = P;
          else {
            const be = W.isBuffer(P) ? P : W.from(P, fe), Je = be.length;
            if (Je === 0) throw new TypeError('The value "' + P + '" is invalid for argument "value"');
            for (_e = 0; _e < Y - I; ++_e) this[_e + I] = be[_e % Je];
          }
          return this;
        };
        const M = {};
        function b(q, P, I) {
          M[q] = class extends I {
            constructor() {
              super(), Object.defineProperty(this, "message", {
                value: P.apply(this, arguments),
                writable: true,
                configurable: true
              }), this.name = `${this.name} [${q}]`, this.stack, delete this.name;
            }
            get code() {
              return q;
            }
            set code(fe) {
              Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value: fe,
                writable: true
              });
            }
            toString() {
              return `${this.name} [${q}]: ${this.message}`;
            }
          };
        }
        b("ERR_BUFFER_OUT_OF_BOUNDS", function(q) {
          return q ? `${q} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
        }, RangeError), b("ERR_INVALID_ARG_TYPE", function(q, P) {
          return `The "${q}" argument must be of type number. Received type ${typeof P}`;
        }, TypeError), b("ERR_OUT_OF_RANGE", function(q, P, I) {
          let Y = `The value of "${q}" is out of range.`, fe = I;
          return Number.isInteger(I) && Math.abs(I) > 2 ** 32 ? fe = h(String(I)) : typeof I == "bigint" && (fe = String(I), (I > BigInt(2) ** BigInt(32) || I < -(BigInt(2) ** BigInt(32))) && (fe = h(fe)), fe += "n"), Y += ` It must be ${P}. Received ${fe}`, Y;
        }, RangeError);
        function h(q) {
          let P = "", I = q.length;
          const Y = q[0] === "-" ? 1 : 0;
          for (; I >= Y + 4; I -= 3) P = `_${q.slice(I - 3, I)}${P}`;
          return `${q.slice(0, I)}${P}`;
        }
        function m(q, P, I) {
          z(P, "offset"), (q[P] === void 0 || q[P + I] === void 0) && ie(P, q.length - (I + 1));
        }
        function L(q, P, I, Y, fe, _e) {
          if (q > I || q < P) {
            const be = typeof P == "bigint" ? "n" : "";
            let Je;
            throw P === 0 || P === BigInt(0) ? Je = `>= 0${be} and < 2${be} ** ${(_e + 1) * 8}${be}` : Je = `>= -(2${be} ** ${(_e + 1) * 8 - 1}${be}) and < 2 ** ${(_e + 1) * 8 - 1}${be}`, new M.ERR_OUT_OF_RANGE("value", Je, q);
          }
          m(Y, fe, _e);
        }
        function z(q, P) {
          if (typeof q != "number") throw new M.ERR_INVALID_ARG_TYPE(P, "number", q);
        }
        function ie(q, P, I) {
          throw Math.floor(q) !== q ? (z(q, I), new M.ERR_OUT_OF_RANGE("offset", "an integer", q)) : P < 0 ? new M.ERR_BUFFER_OUT_OF_BOUNDS() : new M.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${P}`, q);
        }
        const de = /[^+/0-9A-Za-z-_]/g;
        function Oe(q) {
          if (q = q.split("=")[0], q = q.trim().replace(de, ""), q.length < 2) return "";
          for (; q.length % 4 !== 0; ) q = q + "=";
          return q;
        }
        function Le(q, P) {
          P = P || 1 / 0;
          let I;
          const Y = q.length;
          let fe = null;
          const _e = [];
          for (let be = 0; be < Y; ++be) {
            if (I = q.charCodeAt(be), I > 55295 && I < 57344) {
              if (!fe) {
                if (I > 56319) {
                  (P -= 3) > -1 && _e.push(239, 191, 189);
                  continue;
                } else if (be + 1 === Y) {
                  (P -= 3) > -1 && _e.push(239, 191, 189);
                  continue;
                }
                fe = I;
                continue;
              }
              if (I < 56320) {
                (P -= 3) > -1 && _e.push(239, 191, 189), fe = I;
                continue;
              }
              I = (fe - 55296 << 10 | I - 56320) + 65536;
            } else fe && (P -= 3) > -1 && _e.push(239, 191, 189);
            if (fe = null, I < 128) {
              if ((P -= 1) < 0) break;
              _e.push(I);
            } else if (I < 2048) {
              if ((P -= 2) < 0) break;
              _e.push(I >> 6 | 192, I & 63 | 128);
            } else if (I < 65536) {
              if ((P -= 3) < 0) break;
              _e.push(I >> 12 | 224, I >> 6 & 63 | 128, I & 63 | 128);
            } else if (I < 1114112) {
              if ((P -= 4) < 0) break;
              _e.push(I >> 18 | 240, I >> 12 & 63 | 128, I >> 6 & 63 | 128, I & 63 | 128);
            } else throw new Error("Invalid code point");
          }
          return _e;
        }
        function He(q) {
          const P = [];
          for (let I = 0; I < q.length; ++I) P.push(q.charCodeAt(I) & 255);
          return P;
        }
        function Xe(q, P) {
          let I, Y, fe;
          const _e = [];
          for (let be = 0; be < q.length && !((P -= 2) < 0); ++be) I = q.charCodeAt(be), Y = I >> 8, fe = I % 256, _e.push(fe), _e.push(Y);
          return _e;
        }
        function Ye(q) {
          return B.toByteArray(Oe(q));
        }
        function et(q, P, I, Y) {
          let fe;
          for (fe = 0; fe < Y && !(fe + I >= P.length || fe >= q.length); ++fe) P[fe + I] = q[fe];
          return fe;
        }
        function kt(q, P) {
          return q instanceof P || q != null && q.constructor != null && q.constructor.name != null && q.constructor.name === P.name;
        }
        function gi(q) {
          return q !== q;
        }
        const ua = (function() {
          const q = "0123456789abcdef", P = new Array(256);
          for (let I = 0; I < 16; ++I) {
            const Y = I * 16;
            for (let fe = 0; fe < 16; ++fe) P[Y + fe] = q[I] + q[fe];
          }
          return P;
        })();
        function Tr(q) {
          return typeof BigInt > "u" ? la : q;
        }
        function la() {
          throw new Error("BigInt not supported");
        }
      })(d);
      const x = d.Buffer;
      n.Blob = d.Blob, n.BlobOptions = d.BlobOptions, n.Buffer = d.Buffer, n.File = d.File, n.FileOptions = d.FileOptions, n.INSPECT_MAX_BYTES = d.INSPECT_MAX_BYTES, n.SlowBuffer = d.SlowBuffer, n.TranscodeEncoding = d.TranscodeEncoding, n.atob = d.atob, n.btoa = d.btoa, n.constants = d.constants, n.default = x, n.isAscii = d.isAscii, n.isUtf8 = d.isUtf8, n.kMaxLength = d.kMaxLength, n.kStringMaxLength = d.kStringMaxLength, n.resolveObjectURL = d.resolveObjectURL, n.transcode = d.transcode;
    })(Fl)), Fl;
  }
  var p0;
  function Kt() {
    return p0 || (p0 = 1, (function(n, d) {
      var c = qr(), f = c.Buffer;
      function _(u, o) {
        for (var s in u) o[s] = u[s];
      }
      f.from && f.alloc && f.allocUnsafe && f.allocUnsafeSlow ? n.exports = c : (_(c, d), d.Buffer = l);
      function l(u, o, s) {
        return f(u, o, s);
      }
      l.prototype = Object.create(f.prototype), _(f, l), l.from = function(u, o, s) {
        if (typeof u == "number") throw new TypeError("Argument must not be a number");
        return f(u, o, s);
      }, l.alloc = function(u, o, s) {
        if (typeof u != "number") throw new TypeError("Argument must be a number");
        var g = f(u);
        return o !== void 0 ? typeof s == "string" ? g.fill(o, s) : g.fill(o) : g.fill(0), g;
      }, l.allocUnsafe = function(u) {
        if (typeof u != "number") throw new TypeError("Argument must be a number");
        return f(u);
      }, l.allocUnsafeSlow = function(u) {
        if (typeof u != "number") throw new TypeError("Argument must be a number");
        return c.SlowBuffer(u);
      };
    })(ms, ms.exports)), ms.exports;
  }
  var y0;
  function y_() {
    if (y0) return gs.exports;
    y0 = 1;
    var n = 65536, d = 4294967295;
    function c() {
      throw new Error(`Secure random number generation is not supported by this browser.
Use Chrome, Firefox or Internet Explorer 11`);
    }
    var f = Kt().Buffer, _ = sr.crypto || sr.msCrypto;
    _ && _.getRandomValues ? gs.exports = l : gs.exports = c;
    function l(u, o) {
      if (u > d) throw new RangeError("requested too many random bytes");
      var s = f.allocUnsafe(u);
      if (u > 0) if (u > n) for (var g = 0; g < u; g += n) _.getRandomValues(s.slice(g, g + n));
      else _.getRandomValues(s);
      return typeof o == "function" ? ze.nextTick(function() {
        o(null, s);
      }) : s;
    }
    return gs.exports;
  }
  var vs = {
    exports: {}
  }, g0;
  function bt() {
    return g0 || (g0 = 1, typeof Object.create == "function" ? vs.exports = function(d, c) {
      c && (d.super_ = c, d.prototype = Object.create(c.prototype, {
        constructor: {
          value: d,
          enumerable: false,
          writable: true,
          configurable: true
        }
      }));
    } : vs.exports = function(d, c) {
      if (c) {
        d.super_ = c;
        var f = function() {
        };
        f.prototype = c.prototype, d.prototype = new f(), d.prototype.constructor = d;
      }
    }), vs.exports;
  }
  var Ll, m0;
  function g_() {
    if (m0) return Ll;
    m0 = 1;
    var n = {}.toString;
    return Ll = Array.isArray || function(d) {
      return n.call(d) == "[object Array]";
    }, Ll;
  }
  var Ml, v0;
  function Gi() {
    return v0 || (v0 = 1, Ml = TypeError), Ml;
  }
  var Dl, w0;
  function av() {
    return w0 || (w0 = 1, Dl = Object), Dl;
  }
  var Hl, _0;
  function m_() {
    return _0 || (_0 = 1, Hl = Error), Hl;
  }
  var ql, E0;
  function v_() {
    return E0 || (E0 = 1, ql = EvalError), ql;
  }
  var jl, S0;
  function w_() {
    return S0 || (S0 = 1, jl = RangeError), jl;
  }
  var Wl, b0;
  function __() {
    return b0 || (b0 = 1, Wl = ReferenceError), Wl;
  }
  var Kl, T0;
  function sv() {
    return T0 || (T0 = 1, Kl = SyntaxError), Kl;
  }
  var zl, x0;
  function E_() {
    return x0 || (x0 = 1, zl = URIError), zl;
  }
  var Vl, P0;
  function S_() {
    return P0 || (P0 = 1, Vl = Math.abs), Vl;
  }
  var Gl, k0;
  function b_() {
    return k0 || (k0 = 1, Gl = Math.floor), Gl;
  }
  var Xl, A0;
  function T_() {
    return A0 || (A0 = 1, Xl = Math.max), Xl;
  }
  var Yl, I0;
  function x_() {
    return I0 || (I0 = 1, Yl = Math.min), Yl;
  }
  var Ql, B0;
  function P_() {
    return B0 || (B0 = 1, Ql = Math.pow), Ql;
  }
  var Jl, O0;
  function k_() {
    return O0 || (O0 = 1, Jl = Math.round), Jl;
  }
  var Zl, R0;
  function A_() {
    return R0 || (R0 = 1, Zl = Number.isNaN || function(d) {
      return d !== d;
    }), Zl;
  }
  var $l, C0;
  function I_() {
    if (C0) return $l;
    C0 = 1;
    var n = A_();
    return $l = function(c) {
      return n(c) || c === 0 ? c : c < 0 ? -1 : 1;
    }, $l;
  }
  var ef, N0;
  function B_() {
    return N0 || (N0 = 1, ef = Object.getOwnPropertyDescriptor), ef;
  }
  var tf, U0;
  function Xi() {
    if (U0) return tf;
    U0 = 1;
    var n = B_();
    if (n) try {
      n([], "length");
    } catch {
      n = null;
    }
    return tf = n, tf;
  }
  var rf, F0;
  function Fs() {
    if (F0) return rf;
    F0 = 1;
    var n = Object.defineProperty || false;
    if (n) try {
      n({}, "a", {
        value: 1
      });
    } catch {
      n = false;
    }
    return rf = n, rf;
  }
  var nf, L0;
  function uv() {
    return L0 || (L0 = 1, nf = function() {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return false;
      if (typeof Symbol.iterator == "symbol") return true;
      var d = {}, c = /* @__PURE__ */ Symbol("test"), f = Object(c);
      if (typeof c == "string" || Object.prototype.toString.call(c) !== "[object Symbol]" || Object.prototype.toString.call(f) !== "[object Symbol]") return false;
      var _ = 42;
      d[c] = _;
      for (var l in d) return false;
      if (typeof Object.keys == "function" && Object.keys(d).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(d).length !== 0) return false;
      var u = Object.getOwnPropertySymbols(d);
      if (u.length !== 1 || u[0] !== c || !Object.prototype.propertyIsEnumerable.call(d, c)) return false;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var o = Object.getOwnPropertyDescriptor(d, c);
        if (o.value !== _ || o.enumerable !== true) return false;
      }
      return true;
    }), nf;
  }
  var of, M0;
  function O_() {
    if (M0) return of;
    M0 = 1;
    var n = typeof Symbol < "u" && Symbol, d = uv();
    return of = function() {
      return typeof n != "function" || typeof Symbol != "function" || typeof n("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? false : d();
    }, of;
  }
  var af, D0;
  function lv() {
    return D0 || (D0 = 1, af = typeof Reflect < "u" && Reflect.getPrototypeOf || null), af;
  }
  var sf, H0;
  function fv() {
    if (H0) return sf;
    H0 = 1;
    var n = av();
    return sf = n.getPrototypeOf || null, sf;
  }
  var uf, q0;
  function R_() {
    if (q0) return uf;
    q0 = 1;
    var n = "Function.prototype.bind called on incompatible ", d = Object.prototype.toString, c = Math.max, f = "[object Function]", _ = function(s, g) {
      for (var a = [], E = 0; E < s.length; E += 1) a[E] = s[E];
      for (var v = 0; v < g.length; v += 1) a[v + s.length] = g[v];
      return a;
    }, l = function(s, g) {
      for (var a = [], E = g, v = 0; E < s.length; E += 1, v += 1) a[v] = s[E];
      return a;
    }, u = function(o, s) {
      for (var g = "", a = 0; a < o.length; a += 1) g += o[a], a + 1 < o.length && (g += s);
      return g;
    };
    return uf = function(s) {
      var g = this;
      if (typeof g != "function" || d.apply(g) !== f) throw new TypeError(n + g);
      for (var a = l(arguments, 1), E, v = function() {
        if (this instanceof E) {
          var x = g.apply(this, _(a, arguments));
          return Object(x) === x ? x : this;
        }
        return g.apply(s, _(a, arguments));
      }, w = c(0, g.length - a.length), S = [], p = 0; p < w; p++) S[p] = "$" + p;
      if (E = Function("binder", "return function (" + u(S, ",") + "){ return binder.apply(this,arguments); }")(v), g.prototype) {
        var A = function() {
        };
        A.prototype = g.prototype, E.prototype = new A(), A.prototype = null;
      }
      return E;
    }, uf;
  }
  var lf, j0;
  function ta() {
    if (j0) return lf;
    j0 = 1;
    var n = R_();
    return lf = Function.prototype.bind || n, lf;
  }
  var ff, W0;
  function rd() {
    return W0 || (W0 = 1, ff = Function.prototype.call), ff;
  }
  var cf, K0;
  function nd() {
    return K0 || (K0 = 1, cf = Function.prototype.apply), cf;
  }
  var df, z0;
  function C_() {
    return z0 || (z0 = 1, df = typeof Reflect < "u" && Reflect && Reflect.apply), df;
  }
  var hf, V0;
  function cv() {
    if (V0) return hf;
    V0 = 1;
    var n = ta(), d = nd(), c = rd(), f = C_();
    return hf = f || n.call(c, d), hf;
  }
  var pf, G0;
  function id() {
    if (G0) return pf;
    G0 = 1;
    var n = ta(), d = Gi(), c = rd(), f = cv();
    return pf = function(l) {
      if (l.length < 1 || typeof l[0] != "function") throw new d("a function is required");
      return f(n, c, l);
    }, pf;
  }
  var yf, X0;
  function N_() {
    if (X0) return yf;
    X0 = 1;
    var n = id(), d = Xi(), c;
    try {
      c = [].__proto__ === Array.prototype;
    } catch (u) {
      if (!u || typeof u != "object" || !("code" in u) || u.code !== "ERR_PROTO_ACCESS") throw u;
    }
    var f = !!c && d && d(Object.prototype, "__proto__"), _ = Object, l = _.getPrototypeOf;
    return yf = f && typeof f.get == "function" ? n([
      f.get
    ]) : typeof l == "function" ? function(o) {
      return l(o == null ? o : _(o));
    } : false, yf;
  }
  var gf, Y0;
  function od() {
    if (Y0) return gf;
    Y0 = 1;
    var n = lv(), d = fv(), c = N_();
    return gf = n ? function(_) {
      return n(_);
    } : d ? function(_) {
      if (!_ || typeof _ != "object" && typeof _ != "function") throw new TypeError("getProto: not an object");
      return d(_);
    } : c ? function(_) {
      return c(_);
    } : null, gf;
  }
  var mf, Q0;
  function dv() {
    if (Q0) return mf;
    Q0 = 1;
    var n = Function.prototype.call, d = Object.prototype.hasOwnProperty, c = ta();
    return mf = c.call(n, d), mf;
  }
  var vf, J0;
  function hv() {
    if (J0) return vf;
    J0 = 1;
    var n, d = av(), c = m_(), f = v_(), _ = w_(), l = __(), u = sv(), o = Gi(), s = E_(), g = S_(), a = b_(), E = T_(), v = x_(), w = P_(), S = k_(), p = I_(), A = Function, x = function(re) {
      try {
        return A('"use strict"; return (' + re + ").constructor;")();
      } catch {
      }
    }, k = Xi(), B = Fs(), O = function() {
      throw new o();
    }, U = k ? (function() {
      try {
        return arguments.callee, O;
      } catch {
        try {
          return k(arguments, "callee").get;
        } catch {
          return O;
        }
      }
    })() : O, C = O_()(), K = od(), X = fv(), Q = lv(), ae = nd(), Ee = rd(), W = {}, ye = typeof Uint8Array > "u" || !K ? n : K(Uint8Array), Te = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError > "u" ? n : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer > "u" ? n : ArrayBuffer,
      "%ArrayIteratorPrototype%": C && K ? K([][Symbol.iterator]()) : n,
      "%AsyncFromSyncIteratorPrototype%": n,
      "%AsyncFunction%": W,
      "%AsyncGenerator%": W,
      "%AsyncGeneratorFunction%": W,
      "%AsyncIteratorPrototype%": W,
      "%Atomics%": typeof Atomics > "u" ? n : Atomics,
      "%BigInt%": typeof BigInt > "u" ? n : BigInt,
      "%BigInt64Array%": typeof BigInt64Array > "u" ? n : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array > "u" ? n : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView > "u" ? n : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": c,
      "%eval%": eval,
      "%EvalError%": f,
      "%Float16Array%": typeof Float16Array > "u" ? n : Float16Array,
      "%Float32Array%": typeof Float32Array > "u" ? n : Float32Array,
      "%Float64Array%": typeof Float64Array > "u" ? n : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? n : FinalizationRegistry,
      "%Function%": A,
      "%GeneratorFunction%": W,
      "%Int8Array%": typeof Int8Array > "u" ? n : Int8Array,
      "%Int16Array%": typeof Int16Array > "u" ? n : Int16Array,
      "%Int32Array%": typeof Int32Array > "u" ? n : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": C && K ? K(K([][Symbol.iterator]())) : n,
      "%JSON%": typeof JSON == "object" ? JSON : n,
      "%Map%": typeof Map > "u" ? n : Map,
      "%MapIteratorPrototype%": typeof Map > "u" || !C || !K ? n : K((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": d,
      "%Object.getOwnPropertyDescriptor%": k,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise > "u" ? n : Promise,
      "%Proxy%": typeof Proxy > "u" ? n : Proxy,
      "%RangeError%": _,
      "%ReferenceError%": l,
      "%Reflect%": typeof Reflect > "u" ? n : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set > "u" ? n : Set,
      "%SetIteratorPrototype%": typeof Set > "u" || !C || !K ? n : K((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? n : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": C && K ? K(""[Symbol.iterator]()) : n,
      "%Symbol%": C ? Symbol : n,
      "%SyntaxError%": u,
      "%ThrowTypeError%": U,
      "%TypedArray%": ye,
      "%TypeError%": o,
      "%Uint8Array%": typeof Uint8Array > "u" ? n : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? n : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array > "u" ? n : Uint16Array,
      "%Uint32Array%": typeof Uint32Array > "u" ? n : Uint32Array,
      "%URIError%": s,
      "%WeakMap%": typeof WeakMap > "u" ? n : WeakMap,
      "%WeakRef%": typeof WeakRef > "u" ? n : WeakRef,
      "%WeakSet%": typeof WeakSet > "u" ? n : WeakSet,
      "%Function.prototype.call%": Ee,
      "%Function.prototype.apply%": ae,
      "%Object.defineProperty%": B,
      "%Object.getPrototypeOf%": X,
      "%Math.abs%": g,
      "%Math.floor%": a,
      "%Math.max%": E,
      "%Math.min%": v,
      "%Math.pow%": w,
      "%Math.round%": S,
      "%Math.sign%": p,
      "%Reflect.getPrototypeOf%": Q
    };
    if (K) try {
      null.error;
    } catch (re) {
      var Ie = K(K(re));
      Te["%Error.prototype%"] = Ie;
    }
    var Re = function re(se) {
      var H;
      if (se === "%AsyncFunction%") H = x("async function () {}");
      else if (se === "%GeneratorFunction%") H = x("function* () {}");
      else if (se === "%AsyncGeneratorFunction%") H = x("async function* () {}");
      else if (se === "%AsyncGenerator%") {
        var j = re("%AsyncGeneratorFunction%");
        j && (H = j.prototype);
      } else if (se === "%AsyncIteratorPrototype%") {
        var pe = re("%AsyncGenerator%");
        pe && K && (H = K(pe.prototype));
      }
      return Te[se] = H, H;
    }, te = {
      __proto__: null,
      "%ArrayBufferPrototype%": [
        "ArrayBuffer",
        "prototype"
      ],
      "%ArrayPrototype%": [
        "Array",
        "prototype"
      ],
      "%ArrayProto_entries%": [
        "Array",
        "prototype",
        "entries"
      ],
      "%ArrayProto_forEach%": [
        "Array",
        "prototype",
        "forEach"
      ],
      "%ArrayProto_keys%": [
        "Array",
        "prototype",
        "keys"
      ],
      "%ArrayProto_values%": [
        "Array",
        "prototype",
        "values"
      ],
      "%AsyncFunctionPrototype%": [
        "AsyncFunction",
        "prototype"
      ],
      "%AsyncGenerator%": [
        "AsyncGeneratorFunction",
        "prototype"
      ],
      "%AsyncGeneratorPrototype%": [
        "AsyncGeneratorFunction",
        "prototype",
        "prototype"
      ],
      "%BooleanPrototype%": [
        "Boolean",
        "prototype"
      ],
      "%DataViewPrototype%": [
        "DataView",
        "prototype"
      ],
      "%DatePrototype%": [
        "Date",
        "prototype"
      ],
      "%ErrorPrototype%": [
        "Error",
        "prototype"
      ],
      "%EvalErrorPrototype%": [
        "EvalError",
        "prototype"
      ],
      "%Float32ArrayPrototype%": [
        "Float32Array",
        "prototype"
      ],
      "%Float64ArrayPrototype%": [
        "Float64Array",
        "prototype"
      ],
      "%FunctionPrototype%": [
        "Function",
        "prototype"
      ],
      "%Generator%": [
        "GeneratorFunction",
        "prototype"
      ],
      "%GeneratorPrototype%": [
        "GeneratorFunction",
        "prototype",
        "prototype"
      ],
      "%Int8ArrayPrototype%": [
        "Int8Array",
        "prototype"
      ],
      "%Int16ArrayPrototype%": [
        "Int16Array",
        "prototype"
      ],
      "%Int32ArrayPrototype%": [
        "Int32Array",
        "prototype"
      ],
      "%JSONParse%": [
        "JSON",
        "parse"
      ],
      "%JSONStringify%": [
        "JSON",
        "stringify"
      ],
      "%MapPrototype%": [
        "Map",
        "prototype"
      ],
      "%NumberPrototype%": [
        "Number",
        "prototype"
      ],
      "%ObjectPrototype%": [
        "Object",
        "prototype"
      ],
      "%ObjProto_toString%": [
        "Object",
        "prototype",
        "toString"
      ],
      "%ObjProto_valueOf%": [
        "Object",
        "prototype",
        "valueOf"
      ],
      "%PromisePrototype%": [
        "Promise",
        "prototype"
      ],
      "%PromiseProto_then%": [
        "Promise",
        "prototype",
        "then"
      ],
      "%Promise_all%": [
        "Promise",
        "all"
      ],
      "%Promise_reject%": [
        "Promise",
        "reject"
      ],
      "%Promise_resolve%": [
        "Promise",
        "resolve"
      ],
      "%RangeErrorPrototype%": [
        "RangeError",
        "prototype"
      ],
      "%ReferenceErrorPrototype%": [
        "ReferenceError",
        "prototype"
      ],
      "%RegExpPrototype%": [
        "RegExp",
        "prototype"
      ],
      "%SetPrototype%": [
        "Set",
        "prototype"
      ],
      "%SharedArrayBufferPrototype%": [
        "SharedArrayBuffer",
        "prototype"
      ],
      "%StringPrototype%": [
        "String",
        "prototype"
      ],
      "%SymbolPrototype%": [
        "Symbol",
        "prototype"
      ],
      "%SyntaxErrorPrototype%": [
        "SyntaxError",
        "prototype"
      ],
      "%TypedArrayPrototype%": [
        "TypedArray",
        "prototype"
      ],
      "%TypeErrorPrototype%": [
        "TypeError",
        "prototype"
      ],
      "%Uint8ArrayPrototype%": [
        "Uint8Array",
        "prototype"
      ],
      "%Uint8ClampedArrayPrototype%": [
        "Uint8ClampedArray",
        "prototype"
      ],
      "%Uint16ArrayPrototype%": [
        "Uint16Array",
        "prototype"
      ],
      "%Uint32ArrayPrototype%": [
        "Uint32Array",
        "prototype"
      ],
      "%URIErrorPrototype%": [
        "URIError",
        "prototype"
      ],
      "%WeakMapPrototype%": [
        "WeakMap",
        "prototype"
      ],
      "%WeakSetPrototype%": [
        "WeakSet",
        "prototype"
      ]
    }, D = ta(), G = dv(), Z = D.call(Ee, Array.prototype.concat), V = D.call(ae, Array.prototype.splice), ce = D.call(Ee, String.prototype.replace), ee = D.call(Ee, String.prototype.slice), le = D.call(Ee, RegExp.prototype.exec), me = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, $ = /\\(\\)?/g, R = function(se) {
      var H = ee(se, 0, 1), j = ee(se, -1);
      if (H === "%" && j !== "%") throw new u("invalid intrinsic syntax, expected closing `%`");
      if (j === "%" && H !== "%") throw new u("invalid intrinsic syntax, expected opening `%`");
      var pe = [];
      return ce(se, me, function(Pe, qe, Ce, Ke) {
        pe[pe.length] = Ce ? ce(Ke, $, "$1") : qe || Pe;
      }), pe;
    }, N = function(se, H) {
      var j = se, pe;
      if (G(te, j) && (pe = te[j], j = "%" + pe[0] + "%"), G(Te, j)) {
        var Pe = Te[j];
        if (Pe === W && (Pe = Re(j)), typeof Pe > "u" && !H) throw new o("intrinsic " + se + " exists, but is not available. Please file an issue!");
        return {
          alias: pe,
          name: j,
          value: Pe
        };
      }
      throw new u("intrinsic " + se + " does not exist!");
    };
    return vf = function(se, H) {
      if (typeof se != "string" || se.length === 0) throw new o("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof H != "boolean") throw new o('"allowMissing" argument must be a boolean');
      if (le(/^%?[^%]*%?$/, se) === null) throw new u("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var j = R(se), pe = j.length > 0 ? j[0] : "", Pe = N("%" + pe + "%", H), qe = Pe.name, Ce = Pe.value, Ke = false, ct = Pe.alias;
      ct && (pe = ct[0], V(j, Z([
        0,
        1
      ], ct)));
      for (var Se = 1, at = true; Se < j.length; Se += 1) {
        var Qe = j[Se], Ve = ee(Qe, 0, 1), Ze = ee(Qe, -1);
        if ((Ve === '"' || Ve === "'" || Ve === "`" || Ze === '"' || Ze === "'" || Ze === "`") && Ve !== Ze) throw new u("property names with quotes must have matching quotes");
        if ((Qe === "constructor" || !at) && (Ke = true), pe += "." + Qe, qe = "%" + pe + "%", G(Te, qe)) Ce = Te[qe];
        else if (Ce != null) {
          if (!(Qe in Ce)) {
            if (!H) throw new o("base intrinsic for " + se + " exists, but the property is not available.");
            return;
          }
          if (k && Se + 1 >= j.length) {
            var nt = k(Ce, Qe);
            at = !!nt, at && "get" in nt && !("originalValue" in nt.get) ? Ce = nt.get : Ce = Ce[Qe];
          } else at = G(Ce, Qe), Ce = Ce[Qe];
          at && !Ke && (Te[qe] = Ce);
        }
      }
      return Ce;
    }, vf;
  }
  var wf, Z0;
  function Yi() {
    if (Z0) return wf;
    Z0 = 1;
    var n = hv(), d = id(), c = d([
      n("%String.prototype.indexOf%")
    ]);
    return wf = function(_, l) {
      var u = n(_, !!l);
      return typeof u == "function" && c(_, ".prototype.") > -1 ? d([
        u
      ]) : u;
    }, wf;
  }
  var _f, $0;
  function U_() {
    if ($0) return _f;
    $0 = 1;
    var n = Function.prototype.toString, d = typeof Reflect == "object" && Reflect !== null && Reflect.apply, c, f;
    if (typeof d == "function" && typeof Object.defineProperty == "function") try {
      c = Object.defineProperty({}, "length", {
        get: function() {
          throw f;
        }
      }), f = {}, d(function() {
        throw 42;
      }, null, c);
    } catch (k) {
      k !== f && (d = null);
    }
    else d = null;
    var _ = /^\s*class\b/, l = function(B) {
      try {
        var O = n.call(B);
        return _.test(O);
      } catch {
        return false;
      }
    }, u = function(B) {
      try {
        return l(B) ? false : (n.call(B), true);
      } catch {
        return false;
      }
    }, o = Object.prototype.toString, s = "[object Object]", g = "[object Function]", a = "[object GeneratorFunction]", E = "[object HTMLAllCollection]", v = "[object HTML document.all class]", w = "[object HTMLCollection]", S = typeof Symbol == "function" && !!Symbol.toStringTag, p = !(0 in [
      ,
    ]), A = function() {
      return false;
    };
    if (typeof document == "object") {
      var x = document.all;
      o.call(x) === o.call(document.all) && (A = function(B) {
        if ((p || !B) && (typeof B > "u" || typeof B == "object")) try {
          var O = o.call(B);
          return (O === E || O === v || O === w || O === s) && B("") == null;
        } catch {
        }
        return false;
      });
    }
    return _f = d ? function(B) {
      if (A(B)) return true;
      if (!B || typeof B != "function" && typeof B != "object") return false;
      try {
        d(B, null, c);
      } catch (O) {
        if (O !== f) return false;
      }
      return !l(B) && u(B);
    } : function(B) {
      if (A(B)) return true;
      if (!B || typeof B != "function" && typeof B != "object") return false;
      if (S) return u(B);
      if (l(B)) return false;
      var O = o.call(B);
      return O !== g && O !== a && !/^\[object HTML/.test(O) ? false : u(B);
    }, _f;
  }
  var Ef, ey;
  function F_() {
    if (ey) return Ef;
    ey = 1;
    var n = U_(), d = Object.prototype.toString, c = Object.prototype.hasOwnProperty, f = function(s, g, a) {
      for (var E = 0, v = s.length; E < v; E++) c.call(s, E) && (a == null ? g(s[E], E, s) : g.call(a, s[E], E, s));
    }, _ = function(s, g, a) {
      for (var E = 0, v = s.length; E < v; E++) a == null ? g(s.charAt(E), E, s) : g.call(a, s.charAt(E), E, s);
    }, l = function(s, g, a) {
      for (var E in s) c.call(s, E) && (a == null ? g(s[E], E, s) : g.call(a, s[E], E, s));
    };
    function u(o) {
      return d.call(o) === "[object Array]";
    }
    return Ef = function(s, g, a) {
      if (!n(g)) throw new TypeError("iterator must be a function");
      var E;
      arguments.length >= 3 && (E = a), u(s) ? f(s, g, E) : typeof s == "string" ? _(s, g, E) : l(s, g, E);
    }, Ef;
  }
  var Sf, ty;
  function L_() {
    return ty || (ty = 1, Sf = [
      "Float16Array",
      "Float32Array",
      "Float64Array",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "BigInt64Array",
      "BigUint64Array"
    ]), Sf;
  }
  var bf, ry;
  function M_() {
    if (ry) return bf;
    ry = 1;
    var n = L_(), d = typeof globalThis > "u" ? sr : globalThis;
    return bf = function() {
      for (var f = [], _ = 0; _ < n.length; _++) typeof d[n[_]] == "function" && (f[f.length] = n[_]);
      return f;
    }, bf;
  }
  var Tf = {
    exports: {}
  }, xf, ny;
  function D_() {
    if (ny) return xf;
    ny = 1;
    var n = Fs(), d = sv(), c = Gi(), f = Xi();
    return xf = function(l, u, o) {
      if (!l || typeof l != "object" && typeof l != "function") throw new c("`obj` must be an object or a function`");
      if (typeof u != "string" && typeof u != "symbol") throw new c("`property` must be a string or a symbol`");
      if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null) throw new c("`nonEnumerable`, if provided, must be a boolean or null");
      if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null) throw new c("`nonWritable`, if provided, must be a boolean or null");
      if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null) throw new c("`nonConfigurable`, if provided, must be a boolean or null");
      if (arguments.length > 6 && typeof arguments[6] != "boolean") throw new c("`loose`, if provided, must be a boolean");
      var s = arguments.length > 3 ? arguments[3] : null, g = arguments.length > 4 ? arguments[4] : null, a = arguments.length > 5 ? arguments[5] : null, E = arguments.length > 6 ? arguments[6] : false, v = !!f && f(l, u);
      if (n) n(l, u, {
        configurable: a === null && v ? v.configurable : !a,
        enumerable: s === null && v ? v.enumerable : !s,
        value: o,
        writable: g === null && v ? v.writable : !g
      });
      else if (E || !s && !g && !a) l[u] = o;
      else throw new d("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
    }, xf;
  }
  var Pf, iy;
  function H_() {
    if (iy) return Pf;
    iy = 1;
    var n = Fs(), d = function() {
      return !!n;
    };
    return d.hasArrayLengthDefineBug = function() {
      if (!n) return null;
      try {
        return n([], "length", {
          value: 1
        }).length !== 1;
      } catch {
        return true;
      }
    }, Pf = d, Pf;
  }
  var kf, oy;
  function q_() {
    if (oy) return kf;
    oy = 1;
    var n = hv(), d = D_(), c = H_()(), f = Xi(), _ = Gi(), l = n("%Math.floor%");
    return kf = function(o, s) {
      if (typeof o != "function") throw new _("`fn` is not a function");
      if (typeof s != "number" || s < 0 || s > 4294967295 || l(s) !== s) throw new _("`length` must be a positive 32-bit integer");
      var g = arguments.length > 2 && !!arguments[2], a = true, E = true;
      if ("length" in o && f) {
        var v = f(o, "length");
        v && !v.configurable && (a = false), v && !v.writable && (E = false);
      }
      return (a || E || !g) && (c ? d(o, "length", s, true, true) : d(o, "length", s)), o;
    }, kf;
  }
  var Af, ay;
  function j_() {
    if (ay) return Af;
    ay = 1;
    var n = ta(), d = nd(), c = cv();
    return Af = function() {
      return c(n, d, arguments);
    }, Af;
  }
  var sy;
  function W_() {
    return sy || (sy = 1, (function(n) {
      var d = q_(), c = Fs(), f = id(), _ = j_();
      n.exports = function(u) {
        var o = f(arguments), s = u.length - (arguments.length - 1);
        return d(o, 1 + (s > 0 ? s : 0), true);
      }, c ? c(n.exports, "apply", {
        value: _
      }) : n.exports.apply = _;
    })(Tf)), Tf.exports;
  }
  var If, uy;
  function Ls() {
    if (uy) return If;
    uy = 1;
    var n = uv();
    return If = function() {
      return n() && !!Symbol.toStringTag;
    }, If;
  }
  var Bf, ly;
  function pv() {
    if (ly) return Bf;
    ly = 1;
    var n = F_(), d = M_(), c = W_(), f = Yi(), _ = Xi(), l = od(), u = f("Object.prototype.toString"), o = Ls()(), s = typeof globalThis > "u" ? sr : globalThis, g = d(), a = f("String.prototype.slice"), E = f("Array.prototype.indexOf", true) || function(A, x) {
      for (var k = 0; k < A.length; k += 1) if (A[k] === x) return k;
      return -1;
    }, v = {
      __proto__: null
    };
    o && _ && l ? n(g, function(p) {
      var A = new s[p]();
      if (Symbol.toStringTag in A && l) {
        var x = l(A), k = _(x, Symbol.toStringTag);
        if (!k && x) {
          var B = l(x);
          k = _(B, Symbol.toStringTag);
        }
        if (k && k.get) {
          var O = c(k.get);
          v["$" + p] = O;
        }
      }
    }) : n(g, function(p) {
      var A = new s[p](), x = A.slice || A.set;
      if (x) {
        var k = c(x);
        v["$" + p] = k;
      }
    });
    var w = function(A) {
      var x = false;
      return n(v, function(k, B) {
        if (!x) try {
          "$" + k(A) === B && (x = a(B, 1));
        } catch {
        }
      }), x;
    }, S = function(A) {
      var x = false;
      return n(v, function(k, B) {
        if (!x) try {
          k(A), x = a(B, 1);
        } catch {
        }
      }), x;
    };
    return Bf = function(A) {
      if (!A || typeof A != "object") return false;
      if (!o) {
        var x = a(u(A), 8, -1);
        return E(g, x) > -1 ? x : x !== "Object" ? false : S(A);
      }
      return _ ? w(A) : null;
    }, Bf;
  }
  var Of, fy;
  function yv() {
    if (fy) return Of;
    fy = 1;
    var n = pv();
    return Of = function(c) {
      return !!n(c);
    }, Of;
  }
  var Rf, cy;
  function K_() {
    if (cy) return Rf;
    cy = 1;
    var n = Gi(), d = Yi(), c = d("TypedArray.prototype.buffer", true), f = yv();
    return Rf = c || function(l) {
      if (!f(l)) throw new n("Not a Typed Array");
      return l.buffer;
    }, Rf;
  }
  var Cf, dy;
  function ad() {
    if (dy) return Cf;
    dy = 1;
    var n = Kt().Buffer, d = g_(), c = K_(), f = ArrayBuffer.isView || function(s) {
      try {
        return c(s), true;
      } catch {
        return false;
      }
    }, _ = typeof Uint8Array < "u", l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", u = l && (n.prototype instanceof Uint8Array || n.TYPED_ARRAY_SUPPORT);
    return Cf = function(s, g) {
      if (n.isBuffer(s)) return s.constructor && !("isBuffer" in s) ? n.from(s) : s;
      if (typeof s == "string") return n.from(s, g);
      if (l && f(s)) {
        if (s.byteLength === 0) return n.alloc(0);
        if (u) {
          var a = n.from(s.buffer, s.byteOffset, s.byteLength);
          if (a.byteLength === s.byteLength) return a;
        }
        var E = s instanceof Uint8Array ? s : new Uint8Array(s.buffer, s.byteOffset, s.byteLength), v = n.from(E);
        if (v.length === s.byteLength) return v;
      }
      if (_ && s instanceof Uint8Array) return n.from(s);
      var w = d(s);
      if (w) for (var S = 0; S < s.length; S += 1) {
        var p = s[S];
        if (typeof p != "number" || p < 0 || p > 255 || ~~p !== p) throw new RangeError("Array items must be numbers in the range 0-255.");
      }
      if (w || n.isBuffer(s) && s.constructor && typeof s.constructor.isBuffer == "function" && s.constructor.isBuffer(s)) return n.from(s);
      throw new TypeError('The "data" argument must be a string, an Array, a Buffer, a Uint8Array, or a DataView.');
    }, Cf;
  }
  var Nf, hy;
  function z_() {
    if (hy) return Nf;
    hy = 1;
    var n = Kt().Buffer, d = ad(), c = typeof Uint8Array < "u", f = c && typeof ArrayBuffer < "u", _ = f && ArrayBuffer.isView;
    return Nf = function(l, u) {
      if (typeof l == "string" || n.isBuffer(l) || c && l instanceof Uint8Array || _ && _(l)) return d(l, u);
      throw new TypeError('The "data" argument must be a string, a Buffer, a Uint8Array, or a DataView');
    }, Nf;
  }
  var ws = {
    exports: {}
  }, _s = {
    exports: {}
  }, py;
  function Ms() {
    if (py) return _s.exports;
    py = 1, typeof ze > "u" || !ze.version || ze.version.indexOf("v0.") === 0 || ze.version.indexOf("v1.") === 0 && ze.version.indexOf("v1.8.") !== 0 ? _s.exports = {
      nextTick: n
    } : _s.exports = ze;
    function n(d, c, f, _) {
      if (typeof d != "function") throw new TypeError('"callback" argument must be a function');
      var l = arguments.length, u, o;
      switch (l) {
        case 0:
        case 1:
          return ze.nextTick(d);
        case 2:
          return ze.nextTick(function() {
            d.call(null, c);
          });
        case 3:
          return ze.nextTick(function() {
            d.call(null, c, f);
          });
        case 4:
          return ze.nextTick(function() {
            d.call(null, c, f, _);
          });
        default:
          for (u = new Array(l - 1), o = 0; o < u.length; ) u[o++] = arguments[o];
          return ze.nextTick(function() {
            d.apply(null, u);
          });
      }
    }
    return _s.exports;
  }
  var Uf, yy;
  function V_() {
    if (yy) return Uf;
    yy = 1;
    var n = {}.toString;
    return Uf = Array.isArray || function(d) {
      return n.call(d) == "[object Array]";
    }, Uf;
  }
  var Es = {
    exports: {}
  }, gy;
  function ra() {
    if (gy) return Es.exports;
    gy = 1;
    var n = typeof Reflect == "object" ? Reflect : null, d = n && typeof n.apply == "function" ? n.apply : function(U, C, K) {
      return Function.prototype.apply.call(U, C, K);
    }, c;
    n && typeof n.ownKeys == "function" ? c = n.ownKeys : Object.getOwnPropertySymbols ? c = function(U) {
      return Object.getOwnPropertyNames(U).concat(Object.getOwnPropertySymbols(U));
    } : c = function(U) {
      return Object.getOwnPropertyNames(U);
    };
    function f(O) {
      console && console.warn && console.warn(O);
    }
    var _ = Number.isNaN || function(U) {
      return U !== U;
    };
    function l() {
      l.init.call(this);
    }
    Es.exports = l, Es.exports.once = x, l.EventEmitter = l, l.prototype._events = void 0, l.prototype._eventsCount = 0, l.prototype._maxListeners = void 0;
    var u = 10;
    function o(O) {
      if (typeof O != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof O);
    }
    Object.defineProperty(l, "defaultMaxListeners", {
      enumerable: true,
      get: function() {
        return u;
      },
      set: function(O) {
        if (typeof O != "number" || O < 0 || _(O)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + O + ".");
        u = O;
      }
    }), l.init = function() {
      (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, l.prototype.setMaxListeners = function(U) {
      if (typeof U != "number" || U < 0 || _(U)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + U + ".");
      return this._maxListeners = U, this;
    };
    function s(O) {
      return O._maxListeners === void 0 ? l.defaultMaxListeners : O._maxListeners;
    }
    l.prototype.getMaxListeners = function() {
      return s(this);
    }, l.prototype.emit = function(U) {
      for (var C = [], K = 1; K < arguments.length; K++) C.push(arguments[K]);
      var X = U === "error", Q = this._events;
      if (Q !== void 0) X = X && Q.error === void 0;
      else if (!X) return false;
      if (X) {
        var ae;
        if (C.length > 0 && (ae = C[0]), ae instanceof Error) throw ae;
        var Ee = new Error("Unhandled error." + (ae ? " (" + ae.message + ")" : ""));
        throw Ee.context = ae, Ee;
      }
      var W = Q[U];
      if (W === void 0) return false;
      if (typeof W == "function") d(W, this, C);
      else for (var ye = W.length, Te = S(W, ye), K = 0; K < ye; ++K) d(Te[K], this, C);
      return true;
    };
    function g(O, U, C, K) {
      var X, Q, ae;
      if (o(C), Q = O._events, Q === void 0 ? (Q = O._events = /* @__PURE__ */ Object.create(null), O._eventsCount = 0) : (Q.newListener !== void 0 && (O.emit("newListener", U, C.listener ? C.listener : C), Q = O._events), ae = Q[U]), ae === void 0) ae = Q[U] = C, ++O._eventsCount;
      else if (typeof ae == "function" ? ae = Q[U] = K ? [
        C,
        ae
      ] : [
        ae,
        C
      ] : K ? ae.unshift(C) : ae.push(C), X = s(O), X > 0 && ae.length > X && !ae.warned) {
        ae.warned = true;
        var Ee = new Error("Possible EventEmitter memory leak detected. " + ae.length + " " + String(U) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        Ee.name = "MaxListenersExceededWarning", Ee.emitter = O, Ee.type = U, Ee.count = ae.length, f(Ee);
      }
      return O;
    }
    l.prototype.addListener = function(U, C) {
      return g(this, U, C, false);
    }, l.prototype.on = l.prototype.addListener, l.prototype.prependListener = function(U, C) {
      return g(this, U, C, true);
    };
    function a() {
      if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function E(O, U, C) {
      var K = {
        fired: false,
        wrapFn: void 0,
        target: O,
        type: U,
        listener: C
      }, X = a.bind(K);
      return X.listener = C, K.wrapFn = X, X;
    }
    l.prototype.once = function(U, C) {
      return o(C), this.on(U, E(this, U, C)), this;
    }, l.prototype.prependOnceListener = function(U, C) {
      return o(C), this.prependListener(U, E(this, U, C)), this;
    }, l.prototype.removeListener = function(U, C) {
      var K, X, Q, ae, Ee;
      if (o(C), X = this._events, X === void 0) return this;
      if (K = X[U], K === void 0) return this;
      if (K === C || K.listener === C) --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete X[U], X.removeListener && this.emit("removeListener", U, K.listener || C));
      else if (typeof K != "function") {
        for (Q = -1, ae = K.length - 1; ae >= 0; ae--) if (K[ae] === C || K[ae].listener === C) {
          Ee = K[ae].listener, Q = ae;
          break;
        }
        if (Q < 0) return this;
        Q === 0 ? K.shift() : p(K, Q), K.length === 1 && (X[U] = K[0]), X.removeListener !== void 0 && this.emit("removeListener", U, Ee || C);
      }
      return this;
    }, l.prototype.off = l.prototype.removeListener, l.prototype.removeAllListeners = function(U) {
      var C, K, X;
      if (K = this._events, K === void 0) return this;
      if (K.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : K[U] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete K[U]), this;
      if (arguments.length === 0) {
        var Q = Object.keys(K), ae;
        for (X = 0; X < Q.length; ++X) ae = Q[X], ae !== "removeListener" && this.removeAllListeners(ae);
        return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
      }
      if (C = K[U], typeof C == "function") this.removeListener(U, C);
      else if (C !== void 0) for (X = C.length - 1; X >= 0; X--) this.removeListener(U, C[X]);
      return this;
    };
    function v(O, U, C) {
      var K = O._events;
      if (K === void 0) return [];
      var X = K[U];
      return X === void 0 ? [] : typeof X == "function" ? C ? [
        X.listener || X
      ] : [
        X
      ] : C ? A(X) : S(X, X.length);
    }
    l.prototype.listeners = function(U) {
      return v(this, U, true);
    }, l.prototype.rawListeners = function(U) {
      return v(this, U, false);
    }, l.listenerCount = function(O, U) {
      return typeof O.listenerCount == "function" ? O.listenerCount(U) : w.call(O, U);
    }, l.prototype.listenerCount = w;
    function w(O) {
      var U = this._events;
      if (U !== void 0) {
        var C = U[O];
        if (typeof C == "function") return 1;
        if (C !== void 0) return C.length;
      }
      return 0;
    }
    l.prototype.eventNames = function() {
      return this._eventsCount > 0 ? c(this._events) : [];
    };
    function S(O, U) {
      for (var C = new Array(U), K = 0; K < U; ++K) C[K] = O[K];
      return C;
    }
    function p(O, U) {
      for (; U + 1 < O.length; U++) O[U] = O[U + 1];
      O.pop();
    }
    function A(O) {
      for (var U = new Array(O.length), C = 0; C < U.length; ++C) U[C] = O[C].listener || O[C];
      return U;
    }
    function x(O, U) {
      return new Promise(function(C, K) {
        function X(ae) {
          O.removeListener(U, Q), K(ae);
        }
        function Q() {
          typeof O.removeListener == "function" && O.removeListener("error", X), C([].slice.call(arguments));
        }
        B(O, U, Q, {
          once: true
        }), U !== "error" && k(O, X, {
          once: true
        });
      });
    }
    function k(O, U, C) {
      typeof O.on == "function" && B(O, "error", U, C);
    }
    function B(O, U, C, K) {
      if (typeof O.on == "function") K.once ? O.once(U, C) : O.on(U, C);
      else if (typeof O.addEventListener == "function") O.addEventListener(U, function X(Q) {
        K.once && O.removeEventListener(U, X), C(Q);
      });
      else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof O);
    }
    return Es.exports;
  }
  var Ff, my;
  function gv() {
    return my || (my = 1, Ff = ra().EventEmitter), Ff;
  }
  var Ss = {
    exports: {}
  }, vy;
  function sd() {
    return vy || (vy = 1, (function(n, d) {
      var c = qr(), f = c.Buffer;
      function _(u, o) {
        for (var s in u) o[s] = u[s];
      }
      f.from && f.alloc && f.allocUnsafe && f.allocUnsafeSlow ? n.exports = c : (_(c, d), d.Buffer = l);
      function l(u, o, s) {
        return f(u, o, s);
      }
      _(f, l), l.from = function(u, o, s) {
        if (typeof u == "number") throw new TypeError("Argument must not be a number");
        return f(u, o, s);
      }, l.alloc = function(u, o, s) {
        if (typeof u != "number") throw new TypeError("Argument must be a number");
        var g = f(u);
        return o !== void 0 ? typeof s == "string" ? g.fill(o, s) : g.fill(o) : g.fill(0), g;
      }, l.allocUnsafe = function(u) {
        if (typeof u != "number") throw new TypeError("Argument must be a number");
        return f(u);
      }, l.allocUnsafeSlow = function(u) {
        if (typeof u != "number") throw new TypeError("Argument must be a number");
        return c.SlowBuffer(u);
      };
    })(Ss, Ss.exports)), Ss.exports;
  }
  var jt = {}, wy;
  function na() {
    if (wy) return jt;
    wy = 1;
    function n(p) {
      return Array.isArray ? Array.isArray(p) : S(p) === "[object Array]";
    }
    jt.isArray = n;
    function d(p) {
      return typeof p == "boolean";
    }
    jt.isBoolean = d;
    function c(p) {
      return p === null;
    }
    jt.isNull = c;
    function f(p) {
      return p == null;
    }
    jt.isNullOrUndefined = f;
    function _(p) {
      return typeof p == "number";
    }
    jt.isNumber = _;
    function l(p) {
      return typeof p == "string";
    }
    jt.isString = l;
    function u(p) {
      return typeof p == "symbol";
    }
    jt.isSymbol = u;
    function o(p) {
      return p === void 0;
    }
    jt.isUndefined = o;
    function s(p) {
      return S(p) === "[object RegExp]";
    }
    jt.isRegExp = s;
    function g(p) {
      return typeof p == "object" && p !== null;
    }
    jt.isObject = g;
    function a(p) {
      return S(p) === "[object Date]";
    }
    jt.isDate = a;
    function E(p) {
      return S(p) === "[object Error]" || p instanceof Error;
    }
    jt.isError = E;
    function v(p) {
      return typeof p == "function";
    }
    jt.isFunction = v;
    function w(p) {
      return p === null || typeof p == "boolean" || typeof p == "number" || typeof p == "string" || typeof p == "symbol" || typeof p > "u";
    }
    jt.isPrimitive = w, jt.isBuffer = qr().Buffer.isBuffer;
    function S(p) {
      return Object.prototype.toString.call(p);
    }
    return jt;
  }
  var Lf = {}, Mf = {}, Df, _y;
  function G_() {
    if (_y) return Df;
    _y = 1;
    var n = Ls()(), d = Yi(), c = d("Object.prototype.toString"), f = function(o) {
      return n && o && typeof o == "object" && Symbol.toStringTag in o ? false : c(o) === "[object Arguments]";
    }, _ = function(o) {
      return f(o) ? true : o !== null && typeof o == "object" && "length" in o && typeof o.length == "number" && o.length >= 0 && c(o) !== "[object Array]" && "callee" in o && c(o.callee) === "[object Function]";
    }, l = (function() {
      return f(arguments);
    })();
    return f.isLegacyArguments = _, Df = l ? f : _, Df;
  }
  var Hf, Ey;
  function X_() {
    if (Ey) return Hf;
    Ey = 1;
    var n = Yi(), d = Ls()(), c = dv(), f = Xi(), _;
    if (d) {
      var l = n("RegExp.prototype.exec"), u = {}, o = function() {
        throw u;
      }, s = {
        toString: o,
        valueOf: o
      };
      typeof Symbol.toPrimitive == "symbol" && (s[Symbol.toPrimitive] = o), _ = function(v) {
        if (!v || typeof v != "object") return false;
        var w = f(v, "lastIndex"), S = w && c(w, "value");
        if (!S) return false;
        try {
          l(v, s);
        } catch (p) {
          return p === u;
        }
      };
    } else {
      var g = n("Object.prototype.toString"), a = "[object RegExp]";
      _ = function(v) {
        return !v || typeof v != "object" && typeof v != "function" ? false : g(v) === a;
      };
    }
    return Hf = _, Hf;
  }
  var qf, Sy;
  function Y_() {
    if (Sy) return qf;
    Sy = 1;
    var n = Yi(), d = X_(), c = n("RegExp.prototype.exec"), f = Gi();
    return qf = function(l) {
      if (!d(l)) throw new f("`regex` must be a RegExp");
      return function(o) {
        return c(l, o) !== null;
      };
    }, qf;
  }
  var jf, by;
  function Q_() {
    if (by) return jf;
    by = 1;
    const n = (function* () {
    }).constructor;
    return jf = () => n, jf;
  }
  var Wf, Ty;
  function J_() {
    if (Ty) return Wf;
    Ty = 1;
    var n = Yi(), d = Y_(), c = d(/^\s*(?:function)?\*/), f = Ls()(), _ = od(), l = n("Object.prototype.toString"), u = n("Function.prototype.toString"), o = Q_();
    return Wf = function(g) {
      if (typeof g != "function") return false;
      if (c(u(g))) return true;
      if (!f) {
        var a = l(g);
        return a === "[object GeneratorFunction]";
      }
      if (!_) return false;
      var E = o();
      return E && _(g) === E.prototype;
    }, Wf;
  }
  var xy;
  function Z_() {
    return xy || (xy = 1, (function(n) {
      var d = G_(), c = J_(), f = pv(), _ = yv();
      function l(Se) {
        return Se.call.bind(Se);
      }
      var u = typeof BigInt < "u", o = typeof Symbol < "u", s = l(Object.prototype.toString), g = l(Number.prototype.valueOf), a = l(String.prototype.valueOf), E = l(Boolean.prototype.valueOf);
      if (u) var v = l(BigInt.prototype.valueOf);
      if (o) var w = l(Symbol.prototype.valueOf);
      function S(Se, at) {
        if (typeof Se != "object") return false;
        try {
          return at(Se), true;
        } catch {
          return false;
        }
      }
      n.isArgumentsObject = d, n.isGeneratorFunction = c, n.isTypedArray = _;
      function p(Se) {
        return typeof Promise < "u" && Se instanceof Promise || Se !== null && typeof Se == "object" && typeof Se.then == "function" && typeof Se.catch == "function";
      }
      n.isPromise = p;
      function A(Se) {
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(Se) : _(Se) || ee(Se);
      }
      n.isArrayBufferView = A;
      function x(Se) {
        return f(Se) === "Uint8Array";
      }
      n.isUint8Array = x;
      function k(Se) {
        return f(Se) === "Uint8ClampedArray";
      }
      n.isUint8ClampedArray = k;
      function B(Se) {
        return f(Se) === "Uint16Array";
      }
      n.isUint16Array = B;
      function O(Se) {
        return f(Se) === "Uint32Array";
      }
      n.isUint32Array = O;
      function U(Se) {
        return f(Se) === "Int8Array";
      }
      n.isInt8Array = U;
      function C(Se) {
        return f(Se) === "Int16Array";
      }
      n.isInt16Array = C;
      function K(Se) {
        return f(Se) === "Int32Array";
      }
      n.isInt32Array = K;
      function X(Se) {
        return f(Se) === "Float32Array";
      }
      n.isFloat32Array = X;
      function Q(Se) {
        return f(Se) === "Float64Array";
      }
      n.isFloat64Array = Q;
      function ae(Se) {
        return f(Se) === "BigInt64Array";
      }
      n.isBigInt64Array = ae;
      function Ee(Se) {
        return f(Se) === "BigUint64Array";
      }
      n.isBigUint64Array = Ee;
      function W(Se) {
        return s(Se) === "[object Map]";
      }
      W.working = typeof Map < "u" && W(/* @__PURE__ */ new Map());
      function ye(Se) {
        return typeof Map > "u" ? false : W.working ? W(Se) : Se instanceof Map;
      }
      n.isMap = ye;
      function Te(Se) {
        return s(Se) === "[object Set]";
      }
      Te.working = typeof Set < "u" && Te(/* @__PURE__ */ new Set());
      function Ie(Se) {
        return typeof Set > "u" ? false : Te.working ? Te(Se) : Se instanceof Set;
      }
      n.isSet = Ie;
      function Re(Se) {
        return s(Se) === "[object WeakMap]";
      }
      Re.working = typeof WeakMap < "u" && Re(/* @__PURE__ */ new WeakMap());
      function te(Se) {
        return typeof WeakMap > "u" ? false : Re.working ? Re(Se) : Se instanceof WeakMap;
      }
      n.isWeakMap = te;
      function D(Se) {
        return s(Se) === "[object WeakSet]";
      }
      D.working = typeof WeakSet < "u" && D(/* @__PURE__ */ new WeakSet());
      function G(Se) {
        return D(Se);
      }
      n.isWeakSet = G;
      function Z(Se) {
        return s(Se) === "[object ArrayBuffer]";
      }
      Z.working = typeof ArrayBuffer < "u" && Z(new ArrayBuffer());
      function V(Se) {
        return typeof ArrayBuffer > "u" ? false : Z.working ? Z(Se) : Se instanceof ArrayBuffer;
      }
      n.isArrayBuffer = V;
      function ce(Se) {
        return s(Se) === "[object DataView]";
      }
      ce.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && ce(new DataView(new ArrayBuffer(1), 0, 1));
      function ee(Se) {
        return typeof DataView > "u" ? false : ce.working ? ce(Se) : Se instanceof DataView;
      }
      n.isDataView = ee;
      var le = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
      function me(Se) {
        return s(Se) === "[object SharedArrayBuffer]";
      }
      function $(Se) {
        return typeof le > "u" ? false : (typeof me.working > "u" && (me.working = me(new le())), me.working ? me(Se) : Se instanceof le);
      }
      n.isSharedArrayBuffer = $;
      function R(Se) {
        return s(Se) === "[object AsyncFunction]";
      }
      n.isAsyncFunction = R;
      function N(Se) {
        return s(Se) === "[object Map Iterator]";
      }
      n.isMapIterator = N;
      function re(Se) {
        return s(Se) === "[object Set Iterator]";
      }
      n.isSetIterator = re;
      function se(Se) {
        return s(Se) === "[object Generator]";
      }
      n.isGeneratorObject = se;
      function H(Se) {
        return s(Se) === "[object WebAssembly.Module]";
      }
      n.isWebAssemblyCompiledModule = H;
      function j(Se) {
        return S(Se, g);
      }
      n.isNumberObject = j;
      function pe(Se) {
        return S(Se, a);
      }
      n.isStringObject = pe;
      function Pe(Se) {
        return S(Se, E);
      }
      n.isBooleanObject = Pe;
      function qe(Se) {
        return u && S(Se, v);
      }
      n.isBigIntObject = qe;
      function Ce(Se) {
        return o && S(Se, w);
      }
      n.isSymbolObject = Ce;
      function Ke(Se) {
        return j(Se) || pe(Se) || Pe(Se) || qe(Se) || Ce(Se);
      }
      n.isBoxedPrimitive = Ke;
      function ct(Se) {
        return typeof Uint8Array < "u" && (V(Se) || $(Se));
      }
      n.isAnyArrayBuffer = ct, [
        "isProxy",
        "isExternal",
        "isModuleNamespaceObject"
      ].forEach(function(Se) {
        Object.defineProperty(n, Se, {
          enumerable: false,
          value: function() {
            throw new Error(Se + " is not supported in userland");
          }
        });
      });
    })(Mf)), Mf;
  }
  var Kf, Py;
  function $_() {
    return Py || (Py = 1, Kf = function(d) {
      return d && typeof d == "object" && typeof d.copy == "function" && typeof d.fill == "function" && typeof d.readUInt8 == "function";
    }), Kf;
  }
  var ky;
  function Ds() {
    return ky || (ky = 1, (function(n) {
      var d = {}, c = Object.getOwnPropertyDescriptors || function(le) {
        for (var me = Object.keys(le), $ = {}, R = 0; R < me.length; R++) $[me[R]] = Object.getOwnPropertyDescriptor(le, me[R]);
        return $;
      }, f = /%[sdj%]/g;
      n.format = function(ee) {
        if (!C(ee)) {
          for (var le = [], me = 0; me < arguments.length; me++) le.push(o(arguments[me]));
          return le.join(" ");
        }
        for (var me = 1, $ = arguments, R = $.length, N = String(ee).replace(f, function(se) {
          if (se === "%%") return "%";
          if (me >= R) return se;
          switch (se) {
            case "%s":
              return String($[me++]);
            case "%d":
              return Number($[me++]);
            case "%j":
              try {
                return JSON.stringify($[me++]);
              } catch {
                return "[Circular]";
              }
            default:
              return se;
          }
        }), re = $[me]; me < R; re = $[++me]) B(re) || !ae(re) ? N += " " + re : N += " " + o(re);
        return N;
      }, n.deprecate = function(ee, le) {
        if (typeof ze < "u" && ze.noDeprecation === true) return ee;
        if (typeof ze > "u") return function() {
          return n.deprecate(ee, le).apply(this, arguments);
        };
        var me = false;
        function $() {
          if (!me) {
            if (ze.throwDeprecation) throw new Error(le);
            ze.traceDeprecation ? console.trace(le) : console.error(le), me = true;
          }
          return ee.apply(this, arguments);
        }
        return $;
      };
      var _ = {}, l = /^$/;
      if (d.NODE_DEBUG) {
        var u = d.NODE_DEBUG;
        u = u.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), l = new RegExp("^" + u + "$", "i");
      }
      n.debuglog = function(ee) {
        if (ee = ee.toUpperCase(), !_[ee]) if (l.test(ee)) {
          var le = ze.pid;
          _[ee] = function() {
            var me = n.format.apply(n, arguments);
            console.error("%s %d: %s", ee, le, me);
          };
        } else _[ee] = function() {
        };
        return _[ee];
      };
      function o(ee, le) {
        var me = {
          seen: [],
          stylize: g
        };
        return arguments.length >= 3 && (me.depth = arguments[2]), arguments.length >= 4 && (me.colors = arguments[3]), k(le) ? me.showHidden = le : le && n._extend(me, le), X(me.showHidden) && (me.showHidden = false), X(me.depth) && (me.depth = 2), X(me.colors) && (me.colors = false), X(me.customInspect) && (me.customInspect = true), me.colors && (me.stylize = s), E(me, ee, me.depth);
      }
      n.inspect = o, o.colors = {
        bold: [
          1,
          22
        ],
        italic: [
          3,
          23
        ],
        underline: [
          4,
          24
        ],
        inverse: [
          7,
          27
        ],
        white: [
          37,
          39
        ],
        grey: [
          90,
          39
        ],
        black: [
          30,
          39
        ],
        blue: [
          34,
          39
        ],
        cyan: [
          36,
          39
        ],
        green: [
          32,
          39
        ],
        magenta: [
          35,
          39
        ],
        red: [
          31,
          39
        ],
        yellow: [
          33,
          39
        ]
      }, o.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        regexp: "red"
      };
      function s(ee, le) {
        var me = o.styles[le];
        return me ? "\x1B[" + o.colors[me][0] + "m" + ee + "\x1B[" + o.colors[me][1] + "m" : ee;
      }
      function g(ee, le) {
        return ee;
      }
      function a(ee) {
        var le = {};
        return ee.forEach(function(me, $) {
          le[me] = true;
        }), le;
      }
      function E(ee, le, me) {
        if (ee.customInspect && le && ye(le.inspect) && le.inspect !== n.inspect && !(le.constructor && le.constructor.prototype === le)) {
          var $ = le.inspect(me, ee);
          return C($) || ($ = E(ee, $, me)), $;
        }
        var R = v(ee, le);
        if (R) return R;
        var N = Object.keys(le), re = a(N);
        if (ee.showHidden && (N = Object.getOwnPropertyNames(le)), W(le) && (N.indexOf("message") >= 0 || N.indexOf("description") >= 0)) return w(le);
        if (N.length === 0) {
          if (ye(le)) {
            var se = le.name ? ": " + le.name : "";
            return ee.stylize("[Function" + se + "]", "special");
          }
          if (Q(le)) return ee.stylize(RegExp.prototype.toString.call(le), "regexp");
          if (Ee(le)) return ee.stylize(Date.prototype.toString.call(le), "date");
          if (W(le)) return w(le);
        }
        var H = "", j = false, pe = [
          "{",
          "}"
        ];
        if (x(le) && (j = true, pe = [
          "[",
          "]"
        ]), ye(le)) {
          var Pe = le.name ? ": " + le.name : "";
          H = " [Function" + Pe + "]";
        }
        if (Q(le) && (H = " " + RegExp.prototype.toString.call(le)), Ee(le) && (H = " " + Date.prototype.toUTCString.call(le)), W(le) && (H = " " + w(le)), N.length === 0 && (!j || le.length == 0)) return pe[0] + H + pe[1];
        if (me < 0) return Q(le) ? ee.stylize(RegExp.prototype.toString.call(le), "regexp") : ee.stylize("[Object]", "special");
        ee.seen.push(le);
        var qe;
        return j ? qe = S(ee, le, me, re, N) : qe = N.map(function(Ce) {
          return p(ee, le, me, re, Ce, j);
        }), ee.seen.pop(), A(qe, H, pe);
      }
      function v(ee, le) {
        if (X(le)) return ee.stylize("undefined", "undefined");
        if (C(le)) {
          var me = "'" + JSON.stringify(le).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
          return ee.stylize(me, "string");
        }
        if (U(le)) return ee.stylize("" + le, "number");
        if (k(le)) return ee.stylize("" + le, "boolean");
        if (B(le)) return ee.stylize("null", "null");
      }
      function w(ee) {
        return "[" + Error.prototype.toString.call(ee) + "]";
      }
      function S(ee, le, me, $, R) {
        for (var N = [], re = 0, se = le.length; re < se; ++re) G(le, String(re)) ? N.push(p(ee, le, me, $, String(re), true)) : N.push("");
        return R.forEach(function(H) {
          H.match(/^\d+$/) || N.push(p(ee, le, me, $, H, true));
        }), N;
      }
      function p(ee, le, me, $, R, N) {
        var re, se, H;
        if (H = Object.getOwnPropertyDescriptor(le, R) || {
          value: le[R]
        }, H.get ? H.set ? se = ee.stylize("[Getter/Setter]", "special") : se = ee.stylize("[Getter]", "special") : H.set && (se = ee.stylize("[Setter]", "special")), G($, R) || (re = "[" + R + "]"), se || (ee.seen.indexOf(H.value) < 0 ? (B(me) ? se = E(ee, H.value, null) : se = E(ee, H.value, me - 1), se.indexOf(`
`) > -1 && (N ? se = se.split(`
`).map(function(j) {
          return "  " + j;
        }).join(`
`).slice(2) : se = `
` + se.split(`
`).map(function(j) {
          return "   " + j;
        }).join(`
`))) : se = ee.stylize("[Circular]", "special")), X(re)) {
          if (N && R.match(/^\d+$/)) return se;
          re = JSON.stringify("" + R), re.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (re = re.slice(1, -1), re = ee.stylize(re, "name")) : (re = re.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), re = ee.stylize(re, "string"));
        }
        return re + ": " + se;
      }
      function A(ee, le, me) {
        var $ = ee.reduce(function(R, N) {
          return N.indexOf(`
`) >= 0, R + N.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0);
        return $ > 60 ? me[0] + (le === "" ? "" : le + `
 `) + " " + ee.join(`,
  `) + " " + me[1] : me[0] + le + " " + ee.join(", ") + " " + me[1];
      }
      n.types = Z_();
      function x(ee) {
        return Array.isArray(ee);
      }
      n.isArray = x;
      function k(ee) {
        return typeof ee == "boolean";
      }
      n.isBoolean = k;
      function B(ee) {
        return ee === null;
      }
      n.isNull = B;
      function O(ee) {
        return ee == null;
      }
      n.isNullOrUndefined = O;
      function U(ee) {
        return typeof ee == "number";
      }
      n.isNumber = U;
      function C(ee) {
        return typeof ee == "string";
      }
      n.isString = C;
      function K(ee) {
        return typeof ee == "symbol";
      }
      n.isSymbol = K;
      function X(ee) {
        return ee === void 0;
      }
      n.isUndefined = X;
      function Q(ee) {
        return ae(ee) && Ie(ee) === "[object RegExp]";
      }
      n.isRegExp = Q, n.types.isRegExp = Q;
      function ae(ee) {
        return typeof ee == "object" && ee !== null;
      }
      n.isObject = ae;
      function Ee(ee) {
        return ae(ee) && Ie(ee) === "[object Date]";
      }
      n.isDate = Ee, n.types.isDate = Ee;
      function W(ee) {
        return ae(ee) && (Ie(ee) === "[object Error]" || ee instanceof Error);
      }
      n.isError = W, n.types.isNativeError = W;
      function ye(ee) {
        return typeof ee == "function";
      }
      n.isFunction = ye;
      function Te(ee) {
        return ee === null || typeof ee == "boolean" || typeof ee == "number" || typeof ee == "string" || typeof ee == "symbol" || typeof ee > "u";
      }
      n.isPrimitive = Te, n.isBuffer = $_();
      function Ie(ee) {
        return Object.prototype.toString.call(ee);
      }
      function Re(ee) {
        return ee < 10 ? "0" + ee.toString(10) : ee.toString(10);
      }
      var te = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      function D() {
        var ee = /* @__PURE__ */ new Date(), le = [
          Re(ee.getHours()),
          Re(ee.getMinutes()),
          Re(ee.getSeconds())
        ].join(":");
        return [
          ee.getDate(),
          te[ee.getMonth()],
          le
        ].join(" ");
      }
      n.log = function() {
        console.log("%s - %s", D(), n.format.apply(n, arguments));
      }, n.inherits = bt(), n._extend = function(ee, le) {
        if (!le || !ae(le)) return ee;
        for (var me = Object.keys(le), $ = me.length; $--; ) ee[me[$]] = le[me[$]];
        return ee;
      };
      function G(ee, le) {
        return Object.prototype.hasOwnProperty.call(ee, le);
      }
      var Z = typeof Symbol < "u" ? /* @__PURE__ */ Symbol("util.promisify.custom") : void 0;
      n.promisify = function(le) {
        if (typeof le != "function") throw new TypeError('The "original" argument must be of type Function');
        if (Z && le[Z]) {
          var me = le[Z];
          if (typeof me != "function") throw new TypeError('The "util.promisify.custom" argument must be of type Function');
          return Object.defineProperty(me, Z, {
            value: me,
            enumerable: false,
            writable: false,
            configurable: true
          }), me;
        }
        function me() {
          for (var $, R, N = new Promise(function(H, j) {
            $ = H, R = j;
          }), re = [], se = 0; se < arguments.length; se++) re.push(arguments[se]);
          re.push(function(H, j) {
            H ? R(H) : $(j);
          });
          try {
            le.apply(this, re);
          } catch (H) {
            R(H);
          }
          return N;
        }
        return Object.setPrototypeOf(me, Object.getPrototypeOf(le)), Z && Object.defineProperty(me, Z, {
          value: me,
          enumerable: false,
          writable: false,
          configurable: true
        }), Object.defineProperties(me, c(le));
      }, n.promisify.custom = Z;
      function V(ee, le) {
        if (!ee) {
          var me = new Error("Promise was rejected with a falsy value");
          me.reason = ee, ee = me;
        }
        return le(ee);
      }
      function ce(ee) {
        if (typeof ee != "function") throw new TypeError('The "original" argument must be of type Function');
        function le() {
          for (var me = [], $ = 0; $ < arguments.length; $++) me.push(arguments[$]);
          var R = me.pop();
          if (typeof R != "function") throw new TypeError("The last argument must be of type Function");
          var N = this, re = function() {
            return R.apply(N, arguments);
          };
          ee.apply(this, me).then(function(se) {
            ze.nextTick(re.bind(null, null, se));
          }, function(se) {
            ze.nextTick(V.bind(null, se, re));
          });
        }
        return Object.setPrototypeOf(le, Object.getPrototypeOf(ee)), Object.defineProperties(le, c(ee)), le;
      }
      n.callbackify = ce;
    })(Lf)), Lf;
  }
  var zf = {
    exports: {}
  }, Ay;
  function e2() {
    return Ay || (Ay = 1, (function(n) {
      function d(l, u) {
        if (!(l instanceof u)) throw new TypeError("Cannot call a class as a function");
      }
      var c = sd().Buffer, f = Ds();
      function _(l, u, o) {
        l.copy(u, o);
      }
      n.exports = (function() {
        function l() {
          d(this, l), this.head = null, this.tail = null, this.length = 0;
        }
        return l.prototype.push = function(o) {
          var s = {
            data: o,
            next: null
          };
          this.length > 0 ? this.tail.next = s : this.head = s, this.tail = s, ++this.length;
        }, l.prototype.unshift = function(o) {
          var s = {
            data: o,
            next: this.head
          };
          this.length === 0 && (this.tail = s), this.head = s, ++this.length;
        }, l.prototype.shift = function() {
          if (this.length !== 0) {
            var o = this.head.data;
            return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, o;
          }
        }, l.prototype.clear = function() {
          this.head = this.tail = null, this.length = 0;
        }, l.prototype.join = function(o) {
          if (this.length === 0) return "";
          for (var s = this.head, g = "" + s.data; s = s.next; ) g += o + s.data;
          return g;
        }, l.prototype.concat = function(o) {
          if (this.length === 0) return c.alloc(0);
          for (var s = c.allocUnsafe(o >>> 0), g = this.head, a = 0; g; ) _(g.data, s, a), a += g.data.length, g = g.next;
          return s;
        }, l;
      })(), f && f.inspect && f.inspect.custom && (n.exports.prototype[f.inspect.custom] = function() {
        var l = f.inspect({
          length: this.length
        });
        return this.constructor.name + " " + l;
      });
    })(zf)), zf.exports;
  }
  var Vf, Iy;
  function mv() {
    if (Iy) return Vf;
    Iy = 1;
    var n = Ms();
    function d(_, l) {
      var u = this, o = this._readableState && this._readableState.destroyed, s = this._writableState && this._writableState.destroyed;
      return o || s ? (l ? l(_) : _ && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = true, n.nextTick(f, this, _)) : n.nextTick(f, this, _)), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(_ || null, function(g) {
        !l && g ? u._writableState ? u._writableState.errorEmitted || (u._writableState.errorEmitted = true, n.nextTick(f, u, g)) : n.nextTick(f, u, g) : l && l(g);
      }), this);
    }
    function c() {
      this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finalCalled = false, this._writableState.prefinished = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
    }
    function f(_, l) {
      _.emit("error", l);
    }
    return Vf = {
      destroy: d,
      undestroy: c
    }, Vf;
  }
  var Gf, By;
  function vv() {
    if (By) return Gf;
    By = 1, Gf = n;
    function n(c, f) {
      if (d("noDeprecation")) return c;
      var _ = false;
      function l() {
        if (!_) {
          if (d("throwDeprecation")) throw new Error(f);
          d("traceDeprecation") ? console.trace(f) : console.warn(f), _ = true;
        }
        return c.apply(this, arguments);
      }
      return l;
    }
    function d(c) {
      try {
        if (!sr.localStorage) return false;
      } catch {
        return false;
      }
      var f = sr.localStorage[c];
      return f == null ? false : String(f).toLowerCase() === "true";
    }
    return Gf;
  }
  var Xf, Oy;
  function wv() {
    if (Oy) return Xf;
    Oy = 1;
    var n = Ms();
    Xf = p;
    function d(te) {
      var D = this;
      this.next = null, this.entry = null, this.finish = function() {
        Re(D, te);
      };
    }
    var c = !ze.browser && [
      "v0.10",
      "v0.9."
    ].indexOf(ze.version.slice(0, 5)) > -1 ? setImmediate : n.nextTick, f;
    p.WritableState = w;
    var _ = Object.create(na());
    _.inherits = bt();
    var l = {
      deprecate: vv()
    }, u = gv(), o = sd().Buffer, s = (typeof sr < "u" ? sr : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
    };
    function g(te) {
      return o.from(te);
    }
    function a(te) {
      return o.isBuffer(te) || te instanceof s;
    }
    var E = mv();
    _.inherits(p, u);
    function v() {
    }
    function w(te, D) {
      f = f || Ki(), te = te || {};
      var G = D instanceof f;
      this.objectMode = !!te.objectMode, G && (this.objectMode = this.objectMode || !!te.writableObjectMode);
      var Z = te.highWaterMark, V = te.writableHighWaterMark, ce = this.objectMode ? 16 : 16 * 1024;
      Z || Z === 0 ? this.highWaterMark = Z : G && (V || V === 0) ? this.highWaterMark = V : this.highWaterMark = ce, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
      var ee = te.decodeStrings === false;
      this.decodeStrings = !ee, this.defaultEncoding = te.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(le) {
        K(D, le);
      }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.bufferedRequestCount = 0, this.corkedRequestsFree = new d(this);
    }
    w.prototype.getBuffer = function() {
      for (var D = this.bufferedRequest, G = []; D; ) G.push(D), D = D.next;
      return G;
    }, (function() {
      try {
        Object.defineProperty(w.prototype, "buffer", {
          get: l.deprecate(function() {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch {
      }
    })();
    var S;
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (S = Function.prototype[Symbol.hasInstance], Object.defineProperty(p, Symbol.hasInstance, {
      value: function(te) {
        return S.call(this, te) ? true : this !== p ? false : te && te._writableState instanceof w;
      }
    })) : S = function(te) {
      return te instanceof this;
    };
    function p(te) {
      if (f = f || Ki(), !S.call(p, this) && !(this instanceof f)) return new p(te);
      this._writableState = new w(te, this), this.writable = true, te && (typeof te.write == "function" && (this._write = te.write), typeof te.writev == "function" && (this._writev = te.writev), typeof te.destroy == "function" && (this._destroy = te.destroy), typeof te.final == "function" && (this._final = te.final)), u.call(this);
    }
    p.prototype.pipe = function() {
      this.emit("error", new Error("Cannot pipe, not readable"));
    };
    function A(te, D) {
      var G = new Error("write after end");
      te.emit("error", G), n.nextTick(D, G);
    }
    function x(te, D, G, Z) {
      var V = true, ce = false;
      return G === null ? ce = new TypeError("May not write null values to stream") : typeof G != "string" && G !== void 0 && !D.objectMode && (ce = new TypeError("Invalid non-string/buffer chunk")), ce && (te.emit("error", ce), n.nextTick(Z, ce), V = false), V;
    }
    p.prototype.write = function(te, D, G) {
      var Z = this._writableState, V = false, ce = !Z.objectMode && a(te);
      return ce && !o.isBuffer(te) && (te = g(te)), typeof D == "function" && (G = D, D = null), ce ? D = "buffer" : D || (D = Z.defaultEncoding), typeof G != "function" && (G = v), Z.ended ? A(this, G) : (ce || x(this, Z, te, G)) && (Z.pendingcb++, V = B(this, Z, ce, te, D, G)), V;
    }, p.prototype.cork = function() {
      var te = this._writableState;
      te.corked++;
    }, p.prototype.uncork = function() {
      var te = this._writableState;
      te.corked && (te.corked--, !te.writing && !te.corked && !te.bufferProcessing && te.bufferedRequest && ae(this, te));
    }, p.prototype.setDefaultEncoding = function(D) {
      if (typeof D == "string" && (D = D.toLowerCase()), !([
        "hex",
        "utf8",
        "utf-8",
        "ascii",
        "binary",
        "base64",
        "ucs2",
        "ucs-2",
        "utf16le",
        "utf-16le",
        "raw"
      ].indexOf((D + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + D);
      return this._writableState.defaultEncoding = D, this;
    };
    function k(te, D, G) {
      return !te.objectMode && te.decodeStrings !== false && typeof D == "string" && (D = o.from(D, G)), D;
    }
    Object.defineProperty(p.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    });
    function B(te, D, G, Z, V, ce) {
      if (!G) {
        var ee = k(D, Z, V);
        Z !== ee && (G = true, V = "buffer", Z = ee);
      }
      var le = D.objectMode ? 1 : Z.length;
      D.length += le;
      var me = D.length < D.highWaterMark;
      if (me || (D.needDrain = true), D.writing || D.corked) {
        var $ = D.lastBufferedRequest;
        D.lastBufferedRequest = {
          chunk: Z,
          encoding: V,
          isBuf: G,
          callback: ce,
          next: null
        }, $ ? $.next = D.lastBufferedRequest : D.bufferedRequest = D.lastBufferedRequest, D.bufferedRequestCount += 1;
      } else O(te, D, false, le, Z, V, ce);
      return me;
    }
    function O(te, D, G, Z, V, ce, ee) {
      D.writelen = Z, D.writecb = ee, D.writing = true, D.sync = true, G ? te._writev(V, D.onwrite) : te._write(V, ce, D.onwrite), D.sync = false;
    }
    function U(te, D, G, Z, V) {
      --D.pendingcb, G ? (n.nextTick(V, Z), n.nextTick(Te, te, D), te._writableState.errorEmitted = true, te.emit("error", Z)) : (V(Z), te._writableState.errorEmitted = true, te.emit("error", Z), Te(te, D));
    }
    function C(te) {
      te.writing = false, te.writecb = null, te.length -= te.writelen, te.writelen = 0;
    }
    function K(te, D) {
      var G = te._writableState, Z = G.sync, V = G.writecb;
      if (C(G), D) U(te, G, Z, D, V);
      else {
        var ce = Ee(G);
        !ce && !G.corked && !G.bufferProcessing && G.bufferedRequest && ae(te, G), Z ? c(X, te, G, ce, V) : X(te, G, ce, V);
      }
    }
    function X(te, D, G, Z) {
      G || Q(te, D), D.pendingcb--, Z(), Te(te, D);
    }
    function Q(te, D) {
      D.length === 0 && D.needDrain && (D.needDrain = false, te.emit("drain"));
    }
    function ae(te, D) {
      D.bufferProcessing = true;
      var G = D.bufferedRequest;
      if (te._writev && G && G.next) {
        var Z = D.bufferedRequestCount, V = new Array(Z), ce = D.corkedRequestsFree;
        ce.entry = G;
        for (var ee = 0, le = true; G; ) V[ee] = G, G.isBuf || (le = false), G = G.next, ee += 1;
        V.allBuffers = le, O(te, D, true, D.length, V, "", ce.finish), D.pendingcb++, D.lastBufferedRequest = null, ce.next ? (D.corkedRequestsFree = ce.next, ce.next = null) : D.corkedRequestsFree = new d(D), D.bufferedRequestCount = 0;
      } else {
        for (; G; ) {
          var me = G.chunk, $ = G.encoding, R = G.callback, N = D.objectMode ? 1 : me.length;
          if (O(te, D, false, N, me, $, R), G = G.next, D.bufferedRequestCount--, D.writing) break;
        }
        G === null && (D.lastBufferedRequest = null);
      }
      D.bufferedRequest = G, D.bufferProcessing = false;
    }
    p.prototype._write = function(te, D, G) {
      G(new Error("_write() is not implemented"));
    }, p.prototype._writev = null, p.prototype.end = function(te, D, G) {
      var Z = this._writableState;
      typeof te == "function" ? (G = te, te = null, D = null) : typeof D == "function" && (G = D, D = null), te != null && this.write(te, D), Z.corked && (Z.corked = 1, this.uncork()), Z.ending || Ie(this, Z, G);
    };
    function Ee(te) {
      return te.ending && te.length === 0 && te.bufferedRequest === null && !te.finished && !te.writing;
    }
    function W(te, D) {
      te._final(function(G) {
        D.pendingcb--, G && te.emit("error", G), D.prefinished = true, te.emit("prefinish"), Te(te, D);
      });
    }
    function ye(te, D) {
      !D.prefinished && !D.finalCalled && (typeof te._final == "function" ? (D.pendingcb++, D.finalCalled = true, n.nextTick(W, te, D)) : (D.prefinished = true, te.emit("prefinish")));
    }
    function Te(te, D) {
      var G = Ee(D);
      return G && (ye(te, D), D.pendingcb === 0 && (D.finished = true, te.emit("finish"))), G;
    }
    function Ie(te, D, G) {
      D.ending = true, Te(te, D), G && (D.finished ? n.nextTick(G) : te.once("finish", G)), D.ended = true, te.writable = false;
    }
    function Re(te, D, G) {
      var Z = te.entry;
      for (te.entry = null; Z; ) {
        var V = Z.callback;
        D.pendingcb--, V(G), Z = Z.next;
      }
      D.corkedRequestsFree.next = te;
    }
    return Object.defineProperty(p.prototype, "destroyed", {
      get: function() {
        return this._writableState === void 0 ? false : this._writableState.destroyed;
      },
      set: function(te) {
        this._writableState && (this._writableState.destroyed = te);
      }
    }), p.prototype.destroy = E.destroy, p.prototype._undestroy = E.undestroy, p.prototype._destroy = function(te, D) {
      this.end(), D(te);
    }, Xf;
  }
  var Yf, Ry;
  function Ki() {
    if (Ry) return Yf;
    Ry = 1;
    var n = Ms(), d = Object.keys || function(E) {
      var v = [];
      for (var w in E) v.push(w);
      return v;
    };
    Yf = s;
    var c = Object.create(na());
    c.inherits = bt();
    var f = _v(), _ = wv();
    c.inherits(s, f);
    for (var l = d(_.prototype), u = 0; u < l.length; u++) {
      var o = l[u];
      s.prototype[o] || (s.prototype[o] = _.prototype[o]);
    }
    function s(E) {
      if (!(this instanceof s)) return new s(E);
      f.call(this, E), _.call(this, E), E && E.readable === false && (this.readable = false), E && E.writable === false && (this.writable = false), this.allowHalfOpen = true, E && E.allowHalfOpen === false && (this.allowHalfOpen = false), this.once("end", g);
    }
    Object.defineProperty(s.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    });
    function g() {
      this.allowHalfOpen || this._writableState.ended || n.nextTick(a, this);
    }
    function a(E) {
      E.end();
    }
    return Object.defineProperty(s.prototype, "destroyed", {
      get: function() {
        return this._readableState === void 0 || this._writableState === void 0 ? false : this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function(E) {
        this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = E, this._writableState.destroyed = E);
      }
    }), s.prototype._destroy = function(E, v) {
      this.push(null), this.end(), n.nextTick(v, E);
    }, Yf;
  }
  var Qf = {}, Cy;
  function Zo() {
    if (Cy) return Qf;
    Cy = 1;
    var n = Kt().Buffer, d = n.isEncoding || function(x) {
      switch (x = "" + x, x && x.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function c(x) {
      if (!x) return "utf8";
      for (var k; ; ) switch (x) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return x;
        default:
          if (k) return;
          x = ("" + x).toLowerCase(), k = true;
      }
    }
    function f(x) {
      var k = c(x);
      if (typeof k != "string" && (n.isEncoding === d || !d(x))) throw new Error("Unknown encoding: " + x);
      return k || x;
    }
    Qf.StringDecoder = _;
    function _(x) {
      this.encoding = f(x);
      var k;
      switch (this.encoding) {
        case "utf16le":
          this.text = E, this.end = v, k = 4;
          break;
        case "utf8":
          this.fillLast = s, k = 4;
          break;
        case "base64":
          this.text = w, this.end = S, k = 3;
          break;
        default:
          this.write = p, this.end = A;
          return;
      }
      this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(k);
    }
    _.prototype.write = function(x) {
      if (x.length === 0) return "";
      var k, B;
      if (this.lastNeed) {
        if (k = this.fillLast(x), k === void 0) return "";
        B = this.lastNeed, this.lastNeed = 0;
      } else B = 0;
      return B < x.length ? k ? k + this.text(x, B) : this.text(x, B) : k || "";
    }, _.prototype.end = a, _.prototype.text = g, _.prototype.fillLast = function(x) {
      if (this.lastNeed <= x.length) return x.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      x.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, x.length), this.lastNeed -= x.length;
    };
    function l(x) {
      return x <= 127 ? 0 : x >> 5 === 6 ? 2 : x >> 4 === 14 ? 3 : x >> 3 === 30 ? 4 : x >> 6 === 2 ? -1 : -2;
    }
    function u(x, k, B) {
      var O = k.length - 1;
      if (O < B) return 0;
      var U = l(k[O]);
      return U >= 0 ? (U > 0 && (x.lastNeed = U - 1), U) : --O < B || U === -2 ? 0 : (U = l(k[O]), U >= 0 ? (U > 0 && (x.lastNeed = U - 2), U) : --O < B || U === -2 ? 0 : (U = l(k[O]), U >= 0 ? (U > 0 && (U === 2 ? U = 0 : x.lastNeed = U - 3), U) : 0));
    }
    function o(x, k, B) {
      if ((k[0] & 192) !== 128) return x.lastNeed = 0, "\uFFFD";
      if (x.lastNeed > 1 && k.length > 1) {
        if ((k[1] & 192) !== 128) return x.lastNeed = 1, "\uFFFD";
        if (x.lastNeed > 2 && k.length > 2 && (k[2] & 192) !== 128) return x.lastNeed = 2, "\uFFFD";
      }
    }
    function s(x) {
      var k = this.lastTotal - this.lastNeed, B = o(this, x);
      if (B !== void 0) return B;
      if (this.lastNeed <= x.length) return x.copy(this.lastChar, k, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      x.copy(this.lastChar, k, 0, x.length), this.lastNeed -= x.length;
    }
    function g(x, k) {
      var B = u(this, x, k);
      if (!this.lastNeed) return x.toString("utf8", k);
      this.lastTotal = B;
      var O = x.length - (B - this.lastNeed);
      return x.copy(this.lastChar, 0, O), x.toString("utf8", k, O);
    }
    function a(x) {
      var k = x && x.length ? this.write(x) : "";
      return this.lastNeed ? k + "\uFFFD" : k;
    }
    function E(x, k) {
      if ((x.length - k) % 2 === 0) {
        var B = x.toString("utf16le", k);
        if (B) {
          var O = B.charCodeAt(B.length - 1);
          if (O >= 55296 && O <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = x[x.length - 2], this.lastChar[1] = x[x.length - 1], B.slice(0, -1);
        }
        return B;
      }
      return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = x[x.length - 1], x.toString("utf16le", k, x.length - 1);
    }
    function v(x) {
      var k = x && x.length ? this.write(x) : "";
      if (this.lastNeed) {
        var B = this.lastTotal - this.lastNeed;
        return k + this.lastChar.toString("utf16le", 0, B);
      }
      return k;
    }
    function w(x, k) {
      var B = (x.length - k) % 3;
      return B === 0 ? x.toString("base64", k) : (this.lastNeed = 3 - B, this.lastTotal = 3, B === 1 ? this.lastChar[0] = x[x.length - 1] : (this.lastChar[0] = x[x.length - 2], this.lastChar[1] = x[x.length - 1]), x.toString("base64", k, x.length - B));
    }
    function S(x) {
      var k = x && x.length ? this.write(x) : "";
      return this.lastNeed ? k + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : k;
    }
    function p(x) {
      return x.toString(this.encoding);
    }
    function A(x) {
      return x && x.length ? this.write(x) : "";
    }
    return Qf;
  }
  var Jf, Ny;
  function _v() {
    if (Ny) return Jf;
    Ny = 1;
    var n = Ms();
    Jf = k;
    var d = V_(), c;
    k.ReadableState = x, ra().EventEmitter;
    var f = function(R, N) {
      return R.listeners(N).length;
    }, _ = gv(), l = sd().Buffer, u = (typeof sr < "u" ? sr : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
    };
    function o(R) {
      return l.from(R);
    }
    function s(R) {
      return l.isBuffer(R) || R instanceof u;
    }
    var g = Object.create(na());
    g.inherits = bt();
    var a = Ds(), E = void 0;
    a && a.debuglog ? E = a.debuglog("stream") : E = function() {
    };
    var v = e2(), w = mv(), S;
    g.inherits(k, _);
    var p = [
      "error",
      "close",
      "destroy",
      "pause",
      "resume"
    ];
    function A(R, N, re) {
      if (typeof R.prependListener == "function") return R.prependListener(N, re);
      !R._events || !R._events[N] ? R.on(N, re) : d(R._events[N]) ? R._events[N].unshift(re) : R._events[N] = [
        re,
        R._events[N]
      ];
    }
    function x(R, N) {
      c = c || Ki(), R = R || {};
      var re = N instanceof c;
      this.objectMode = !!R.objectMode, re && (this.objectMode = this.objectMode || !!R.readableObjectMode);
      var se = R.highWaterMark, H = R.readableHighWaterMark, j = this.objectMode ? 16 : 16 * 1024;
      se || se === 0 ? this.highWaterMark = se : re && (H || H === 0) ? this.highWaterMark = H : this.highWaterMark = j, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new v(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.destroyed = false, this.defaultEncoding = R.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, R.encoding && (S || (S = Zo().StringDecoder), this.decoder = new S(R.encoding), this.encoding = R.encoding);
    }
    function k(R) {
      if (c = c || Ki(), !(this instanceof k)) return new k(R);
      this._readableState = new x(R, this), this.readable = true, R && (typeof R.read == "function" && (this._read = R.read), typeof R.destroy == "function" && (this._destroy = R.destroy)), _.call(this);
    }
    Object.defineProperty(k.prototype, "destroyed", {
      get: function() {
        return this._readableState === void 0 ? false : this._readableState.destroyed;
      },
      set: function(R) {
        this._readableState && (this._readableState.destroyed = R);
      }
    }), k.prototype.destroy = w.destroy, k.prototype._undestroy = w.undestroy, k.prototype._destroy = function(R, N) {
      this.push(null), N(R);
    }, k.prototype.push = function(R, N) {
      var re = this._readableState, se;
      return re.objectMode ? se = true : typeof R == "string" && (N = N || re.defaultEncoding, N !== re.encoding && (R = l.from(R, N), N = ""), se = true), B(this, R, N, false, se);
    }, k.prototype.unshift = function(R) {
      return B(this, R, null, true, false);
    };
    function B(R, N, re, se, H) {
      var j = R._readableState;
      if (N === null) j.reading = false, ae(R, j);
      else {
        var pe;
        H || (pe = U(j, N)), pe ? R.emit("error", pe) : j.objectMode || N && N.length > 0 ? (typeof N != "string" && !j.objectMode && Object.getPrototypeOf(N) !== l.prototype && (N = o(N)), se ? j.endEmitted ? R.emit("error", new Error("stream.unshift() after end event")) : O(R, j, N, true) : j.ended ? R.emit("error", new Error("stream.push() after EOF")) : (j.reading = false, j.decoder && !re ? (N = j.decoder.write(N), j.objectMode || N.length !== 0 ? O(R, j, N, false) : ye(R, j)) : O(R, j, N, false))) : se || (j.reading = false);
      }
      return C(j);
    }
    function O(R, N, re, se) {
      N.flowing && N.length === 0 && !N.sync ? (R.emit("data", re), R.read(0)) : (N.length += N.objectMode ? 1 : re.length, se ? N.buffer.unshift(re) : N.buffer.push(re), N.needReadable && Ee(R)), ye(R, N);
    }
    function U(R, N) {
      var re;
      return !s(N) && typeof N != "string" && N !== void 0 && !R.objectMode && (re = new TypeError("Invalid non-string/buffer chunk")), re;
    }
    function C(R) {
      return !R.ended && (R.needReadable || R.length < R.highWaterMark || R.length === 0);
    }
    k.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    }, k.prototype.setEncoding = function(R) {
      return S || (S = Zo().StringDecoder), this._readableState.decoder = new S(R), this._readableState.encoding = R, this;
    };
    var K = 8388608;
    function X(R) {
      return R >= K ? R = K : (R--, R |= R >>> 1, R |= R >>> 2, R |= R >>> 4, R |= R >>> 8, R |= R >>> 16, R++), R;
    }
    function Q(R, N) {
      return R <= 0 || N.length === 0 && N.ended ? 0 : N.objectMode ? 1 : R !== R ? N.flowing && N.length ? N.buffer.head.data.length : N.length : (R > N.highWaterMark && (N.highWaterMark = X(R)), R <= N.length ? R : N.ended ? N.length : (N.needReadable = true, 0));
    }
    k.prototype.read = function(R) {
      E("read", R), R = parseInt(R, 10);
      var N = this._readableState, re = R;
      if (R !== 0 && (N.emittedReadable = false), R === 0 && N.needReadable && (N.length >= N.highWaterMark || N.ended)) return E("read: emitReadable", N.length, N.ended), N.length === 0 && N.ended ? le(this) : Ee(this), null;
      if (R = Q(R, N), R === 0 && N.ended) return N.length === 0 && le(this), null;
      var se = N.needReadable;
      E("need readable", se), (N.length === 0 || N.length - R < N.highWaterMark) && (se = true, E("length less than watermark", se)), N.ended || N.reading ? (se = false, E("reading or ended", se)) : se && (E("do read"), N.reading = true, N.sync = true, N.length === 0 && (N.needReadable = true), this._read(N.highWaterMark), N.sync = false, N.reading || (R = Q(re, N)));
      var H;
      return R > 0 ? H = Z(R, N) : H = null, H === null ? (N.needReadable = true, R = 0) : N.length -= R, N.length === 0 && (N.ended || (N.needReadable = true), re !== R && N.ended && le(this)), H !== null && this.emit("data", H), H;
    };
    function ae(R, N) {
      if (!N.ended) {
        if (N.decoder) {
          var re = N.decoder.end();
          re && re.length && (N.buffer.push(re), N.length += N.objectMode ? 1 : re.length);
        }
        N.ended = true, Ee(R);
      }
    }
    function Ee(R) {
      var N = R._readableState;
      N.needReadable = false, N.emittedReadable || (E("emitReadable", N.flowing), N.emittedReadable = true, N.sync ? n.nextTick(W, R) : W(R));
    }
    function W(R) {
      E("emit readable"), R.emit("readable"), G(R);
    }
    function ye(R, N) {
      N.readingMore || (N.readingMore = true, n.nextTick(Te, R, N));
    }
    function Te(R, N) {
      for (var re = N.length; !N.reading && !N.flowing && !N.ended && N.length < N.highWaterMark && (E("maybeReadMore read 0"), R.read(0), re !== N.length); ) re = N.length;
      N.readingMore = false;
    }
    k.prototype._read = function(R) {
      this.emit("error", new Error("_read() is not implemented"));
    }, k.prototype.pipe = function(R, N) {
      var re = this, se = this._readableState;
      switch (se.pipesCount) {
        case 0:
          se.pipes = R;
          break;
        case 1:
          se.pipes = [
            se.pipes,
            R
          ];
          break;
        default:
          se.pipes.push(R);
          break;
      }
      se.pipesCount += 1, E("pipe count=%d opts=%j", se.pipesCount, N);
      var H = (!N || N.end !== false) && R !== ze.stdout && R !== ze.stderr, j = H ? Pe : Ze;
      se.endEmitted ? n.nextTick(j) : re.once("end", j), R.on("unpipe", pe);
      function pe(nt, st) {
        E("onunpipe"), nt === re && st && st.hasUnpiped === false && (st.hasUnpiped = true, Ke());
      }
      function Pe() {
        E("onend"), R.end();
      }
      var qe = Ie(re);
      R.on("drain", qe);
      var Ce = false;
      function Ke() {
        E("cleanup"), R.removeListener("close", Qe), R.removeListener("finish", Ve), R.removeListener("drain", qe), R.removeListener("error", at), R.removeListener("unpipe", pe), re.removeListener("end", Pe), re.removeListener("end", Ze), re.removeListener("data", Se), Ce = true, se.awaitDrain && (!R._writableState || R._writableState.needDrain) && qe();
      }
      var ct = false;
      re.on("data", Se);
      function Se(nt) {
        E("ondata"), ct = false;
        var st = R.write(nt);
        st === false && !ct && ((se.pipesCount === 1 && se.pipes === R || se.pipesCount > 1 && $(se.pipes, R) !== -1) && !Ce && (E("false write response, pause", se.awaitDrain), se.awaitDrain++, ct = true), re.pause());
      }
      function at(nt) {
        E("onerror", nt), Ze(), R.removeListener("error", at), f(R, "error") === 0 && R.emit("error", nt);
      }
      A(R, "error", at);
      function Qe() {
        R.removeListener("finish", Ve), Ze();
      }
      R.once("close", Qe);
      function Ve() {
        E("onfinish"), R.removeListener("close", Qe), Ze();
      }
      R.once("finish", Ve);
      function Ze() {
        E("unpipe"), re.unpipe(R);
      }
      return R.emit("pipe", re), se.flowing || (E("pipe resume"), re.resume()), R;
    };
    function Ie(R) {
      return function() {
        var N = R._readableState;
        E("pipeOnDrain", N.awaitDrain), N.awaitDrain && N.awaitDrain--, N.awaitDrain === 0 && f(R, "data") && (N.flowing = true, G(R));
      };
    }
    k.prototype.unpipe = function(R) {
      var N = this._readableState, re = {
        hasUnpiped: false
      };
      if (N.pipesCount === 0) return this;
      if (N.pipesCount === 1) return R && R !== N.pipes ? this : (R || (R = N.pipes), N.pipes = null, N.pipesCount = 0, N.flowing = false, R && R.emit("unpipe", this, re), this);
      if (!R) {
        var se = N.pipes, H = N.pipesCount;
        N.pipes = null, N.pipesCount = 0, N.flowing = false;
        for (var j = 0; j < H; j++) se[j].emit("unpipe", this, {
          hasUnpiped: false
        });
        return this;
      }
      var pe = $(N.pipes, R);
      return pe === -1 ? this : (N.pipes.splice(pe, 1), N.pipesCount -= 1, N.pipesCount === 1 && (N.pipes = N.pipes[0]), R.emit("unpipe", this, re), this);
    }, k.prototype.on = function(R, N) {
      var re = _.prototype.on.call(this, R, N);
      if (R === "data") this._readableState.flowing !== false && this.resume();
      else if (R === "readable") {
        var se = this._readableState;
        !se.endEmitted && !se.readableListening && (se.readableListening = se.needReadable = true, se.emittedReadable = false, se.reading ? se.length && Ee(this) : n.nextTick(Re, this));
      }
      return re;
    }, k.prototype.addListener = k.prototype.on;
    function Re(R) {
      E("readable nexttick read 0"), R.read(0);
    }
    k.prototype.resume = function() {
      var R = this._readableState;
      return R.flowing || (E("resume"), R.flowing = true, te(this, R)), this;
    };
    function te(R, N) {
      N.resumeScheduled || (N.resumeScheduled = true, n.nextTick(D, R, N));
    }
    function D(R, N) {
      N.reading || (E("resume read 0"), R.read(0)), N.resumeScheduled = false, N.awaitDrain = 0, R.emit("resume"), G(R), N.flowing && !N.reading && R.read(0);
    }
    k.prototype.pause = function() {
      return E("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== false && (E("pause"), this._readableState.flowing = false, this.emit("pause")), this;
    };
    function G(R) {
      var N = R._readableState;
      for (E("flow", N.flowing); N.flowing && R.read() !== null; ) ;
    }
    k.prototype.wrap = function(R) {
      var N = this, re = this._readableState, se = false;
      R.on("end", function() {
        if (E("wrapped end"), re.decoder && !re.ended) {
          var pe = re.decoder.end();
          pe && pe.length && N.push(pe);
        }
        N.push(null);
      }), R.on("data", function(pe) {
        if (E("wrapped data"), re.decoder && (pe = re.decoder.write(pe)), !(re.objectMode && pe == null) && !(!re.objectMode && (!pe || !pe.length))) {
          var Pe = N.push(pe);
          Pe || (se = true, R.pause());
        }
      });
      for (var H in R) this[H] === void 0 && typeof R[H] == "function" && (this[H] = /* @__PURE__ */ (function(pe) {
        return function() {
          return R[pe].apply(R, arguments);
        };
      })(H));
      for (var j = 0; j < p.length; j++) R.on(p[j], this.emit.bind(this, p[j]));
      return this._read = function(pe) {
        E("wrapped _read", pe), se && (se = false, R.resume());
      }, this;
    }, Object.defineProperty(k.prototype, "readableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._readableState.highWaterMark;
      }
    }), k._fromList = Z;
    function Z(R, N) {
      if (N.length === 0) return null;
      var re;
      return N.objectMode ? re = N.buffer.shift() : !R || R >= N.length ? (N.decoder ? re = N.buffer.join("") : N.buffer.length === 1 ? re = N.buffer.head.data : re = N.buffer.concat(N.length), N.buffer.clear()) : re = V(R, N.buffer, N.decoder), re;
    }
    function V(R, N, re) {
      var se;
      return R < N.head.data.length ? (se = N.head.data.slice(0, R), N.head.data = N.head.data.slice(R)) : R === N.head.data.length ? se = N.shift() : se = re ? ce(R, N) : ee(R, N), se;
    }
    function ce(R, N) {
      var re = N.head, se = 1, H = re.data;
      for (R -= H.length; re = re.next; ) {
        var j = re.data, pe = R > j.length ? j.length : R;
        if (pe === j.length ? H += j : H += j.slice(0, R), R -= pe, R === 0) {
          pe === j.length ? (++se, re.next ? N.head = re.next : N.head = N.tail = null) : (N.head = re, re.data = j.slice(pe));
          break;
        }
        ++se;
      }
      return N.length -= se, H;
    }
    function ee(R, N) {
      var re = l.allocUnsafe(R), se = N.head, H = 1;
      for (se.data.copy(re), R -= se.data.length; se = se.next; ) {
        var j = se.data, pe = R > j.length ? j.length : R;
        if (j.copy(re, re.length - R, 0, pe), R -= pe, R === 0) {
          pe === j.length ? (++H, se.next ? N.head = se.next : N.head = N.tail = null) : (N.head = se, se.data = j.slice(pe));
          break;
        }
        ++H;
      }
      return N.length -= H, re;
    }
    function le(R) {
      var N = R._readableState;
      if (N.length > 0) throw new Error('"endReadable()" called on non-empty stream');
      N.endEmitted || (N.ended = true, n.nextTick(me, N, R));
    }
    function me(R, N) {
      !R.endEmitted && R.length === 0 && (R.endEmitted = true, N.readable = false, N.emit("end"));
    }
    function $(R, N) {
      for (var re = 0, se = R.length; re < se; re++) if (R[re] === N) return re;
      return -1;
    }
    return Jf;
  }
  var Zf, Uy;
  function Ev() {
    if (Uy) return Zf;
    Uy = 1, Zf = f;
    var n = Ki(), d = Object.create(na());
    d.inherits = bt(), d.inherits(f, n);
    function c(u, o) {
      var s = this._transformState;
      s.transforming = false;
      var g = s.writecb;
      if (!g) return this.emit("error", new Error("write callback called multiple times"));
      s.writechunk = null, s.writecb = null, o != null && this.push(o), g(u);
      var a = this._readableState;
      a.reading = false, (a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark);
    }
    function f(u) {
      if (!(this instanceof f)) return new f(u);
      n.call(this, u), this._transformState = {
        afterTransform: c.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      }, this._readableState.needReadable = true, this._readableState.sync = false, u && (typeof u.transform == "function" && (this._transform = u.transform), typeof u.flush == "function" && (this._flush = u.flush)), this.on("prefinish", _);
    }
    function _() {
      var u = this;
      typeof this._flush == "function" ? this._flush(function(o, s) {
        l(u, o, s);
      }) : l(this, null, null);
    }
    f.prototype.push = function(u, o) {
      return this._transformState.needTransform = false, n.prototype.push.call(this, u, o);
    }, f.prototype._transform = function(u, o, s) {
      throw new Error("_transform() is not implemented");
    }, f.prototype._write = function(u, o, s) {
      var g = this._transformState;
      if (g.writecb = s, g.writechunk = u, g.writeencoding = o, !g.transforming) {
        var a = this._readableState;
        (g.needTransform || a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark);
      }
    }, f.prototype._read = function(u) {
      var o = this._transformState;
      o.writechunk !== null && o.writecb && !o.transforming ? (o.transforming = true, this._transform(o.writechunk, o.writeencoding, o.afterTransform)) : o.needTransform = true;
    }, f.prototype._destroy = function(u, o) {
      var s = this;
      n.prototype._destroy.call(this, u, function(g) {
        o(g), s.emit("close");
      });
    };
    function l(u, o, s) {
      if (o) return u.emit("error", o);
      if (s != null && u.push(s), u._writableState.length) throw new Error("Calling transform done when ws.length != 0");
      if (u._transformState.transforming) throw new Error("Calling transform done when still transforming");
      return u.push(null);
    }
    return Zf;
  }
  var $f, Fy;
  function t2() {
    if (Fy) return $f;
    Fy = 1, $f = c;
    var n = Ev(), d = Object.create(na());
    d.inherits = bt(), d.inherits(c, n);
    function c(f) {
      if (!(this instanceof c)) return new c(f);
      n.call(this, f);
    }
    return c.prototype._transform = function(f, _, l) {
      l(null, f);
    }, $f;
  }
  var Ly;
  function r2() {
    return Ly || (Ly = 1, (function(n, d) {
      d = n.exports = _v(), d.Stream = d, d.Readable = d, d.Writable = wv(), d.Duplex = Ki(), d.Transform = Ev(), d.PassThrough = t2();
    })(ws, ws.exports)), ws.exports;
  }
  var ec, My;
  function Sv() {
    if (My) return ec;
    My = 1;
    var n = Kt().Buffer, d = z_(), c = r2().Transform, f = bt();
    function _(l) {
      c.call(this), this._block = n.allocUnsafe(l), this._blockSize = l, this._blockOffset = 0, this._length = [
        0,
        0,
        0,
        0
      ], this._finalized = false;
    }
    return f(_, c), _.prototype._transform = function(l, u, o) {
      var s = null;
      try {
        this.update(l, u);
      } catch (g) {
        s = g;
      }
      o(s);
    }, _.prototype._flush = function(l) {
      var u = null;
      try {
        this.push(this.digest());
      } catch (o) {
        u = o;
      }
      l(u);
    }, _.prototype.update = function(l, u) {
      if (this._finalized) throw new Error("Digest already called");
      for (var o = d(l, u), s = this._block, g = 0; this._blockOffset + o.length - g >= this._blockSize; ) {
        for (var a = this._blockOffset; a < this._blockSize; ) s[a] = o[g], a += 1, g += 1;
        this._update(), this._blockOffset = 0;
      }
      for (; g < o.length; ) s[this._blockOffset] = o[g], this._blockOffset += 1, g += 1;
      for (var E = 0, v = o.length * 8; v > 0; ++E) this._length[E] += v, v = this._length[E] / 4294967296 | 0, v > 0 && (this._length[E] -= 4294967296 * v);
      return this;
    }, _.prototype._update = function() {
      throw new Error("_update is not implemented");
    }, _.prototype.digest = function(l) {
      if (this._finalized) throw new Error("Digest already called");
      this._finalized = true;
      var u = this._digest();
      l !== void 0 && (u = u.toString(l)), this._block.fill(0), this._blockOffset = 0;
      for (var o = 0; o < 4; ++o) this._length[o] = 0;
      return u;
    }, _.prototype._digest = function() {
      throw new Error("_digest is not implemented");
    }, ec = _, ec;
  }
  var tc, Dy;
  function n2() {
    if (Dy) return tc;
    Dy = 1;
    var n = bt(), d = Sv(), c = Kt().Buffer, f = new Array(16);
    function _() {
      d.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878;
    }
    n(_, d), _.prototype._update = function() {
      for (var a = f, E = 0; E < 16; ++E) a[E] = this._block.readInt32LE(E * 4);
      var v = this._a, w = this._b, S = this._c, p = this._d;
      v = u(v, w, S, p, a[0], 3614090360, 7), p = u(p, v, w, S, a[1], 3905402710, 12), S = u(S, p, v, w, a[2], 606105819, 17), w = u(w, S, p, v, a[3], 3250441966, 22), v = u(v, w, S, p, a[4], 4118548399, 7), p = u(p, v, w, S, a[5], 1200080426, 12), S = u(S, p, v, w, a[6], 2821735955, 17), w = u(w, S, p, v, a[7], 4249261313, 22), v = u(v, w, S, p, a[8], 1770035416, 7), p = u(p, v, w, S, a[9], 2336552879, 12), S = u(S, p, v, w, a[10], 4294925233, 17), w = u(w, S, p, v, a[11], 2304563134, 22), v = u(v, w, S, p, a[12], 1804603682, 7), p = u(p, v, w, S, a[13], 4254626195, 12), S = u(S, p, v, w, a[14], 2792965006, 17), w = u(w, S, p, v, a[15], 1236535329, 22), v = o(v, w, S, p, a[1], 4129170786, 5), p = o(p, v, w, S, a[6], 3225465664, 9), S = o(S, p, v, w, a[11], 643717713, 14), w = o(w, S, p, v, a[0], 3921069994, 20), v = o(v, w, S, p, a[5], 3593408605, 5), p = o(p, v, w, S, a[10], 38016083, 9), S = o(S, p, v, w, a[15], 3634488961, 14), w = o(w, S, p, v, a[4], 3889429448, 20), v = o(v, w, S, p, a[9], 568446438, 5), p = o(p, v, w, S, a[14], 3275163606, 9), S = o(S, p, v, w, a[3], 4107603335, 14), w = o(w, S, p, v, a[8], 1163531501, 20), v = o(v, w, S, p, a[13], 2850285829, 5), p = o(p, v, w, S, a[2], 4243563512, 9), S = o(S, p, v, w, a[7], 1735328473, 14), w = o(w, S, p, v, a[12], 2368359562, 20), v = s(v, w, S, p, a[5], 4294588738, 4), p = s(p, v, w, S, a[8], 2272392833, 11), S = s(S, p, v, w, a[11], 1839030562, 16), w = s(w, S, p, v, a[14], 4259657740, 23), v = s(v, w, S, p, a[1], 2763975236, 4), p = s(p, v, w, S, a[4], 1272893353, 11), S = s(S, p, v, w, a[7], 4139469664, 16), w = s(w, S, p, v, a[10], 3200236656, 23), v = s(v, w, S, p, a[13], 681279174, 4), p = s(p, v, w, S, a[0], 3936430074, 11), S = s(S, p, v, w, a[3], 3572445317, 16), w = s(w, S, p, v, a[6], 76029189, 23), v = s(v, w, S, p, a[9], 3654602809, 4), p = s(p, v, w, S, a[12], 3873151461, 11), S = s(S, p, v, w, a[15], 530742520, 16), w = s(w, S, p, v, a[2], 3299628645, 23), v = g(v, w, S, p, a[0], 4096336452, 6), p = g(p, v, w, S, a[7], 1126891415, 10), S = g(S, p, v, w, a[14], 2878612391, 15), w = g(w, S, p, v, a[5], 4237533241, 21), v = g(v, w, S, p, a[12], 1700485571, 6), p = g(p, v, w, S, a[3], 2399980690, 10), S = g(S, p, v, w, a[10], 4293915773, 15), w = g(w, S, p, v, a[1], 2240044497, 21), v = g(v, w, S, p, a[8], 1873313359, 6), p = g(p, v, w, S, a[15], 4264355552, 10), S = g(S, p, v, w, a[6], 2734768916, 15), w = g(w, S, p, v, a[13], 1309151649, 21), v = g(v, w, S, p, a[4], 4149444226, 6), p = g(p, v, w, S, a[11], 3174756917, 10), S = g(S, p, v, w, a[2], 718787259, 15), w = g(w, S, p, v, a[9], 3951481745, 21), this._a = this._a + v | 0, this._b = this._b + w | 0, this._c = this._c + S | 0, this._d = this._d + p | 0;
    }, _.prototype._digest = function() {
      this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
      var a = c.allocUnsafe(16);
      return a.writeInt32LE(this._a, 0), a.writeInt32LE(this._b, 4), a.writeInt32LE(this._c, 8), a.writeInt32LE(this._d, 12), a;
    };
    function l(a, E) {
      return a << E | a >>> 32 - E;
    }
    function u(a, E, v, w, S, p, A) {
      return l(a + (E & v | ~E & w) + S + p | 0, A) + E | 0;
    }
    function o(a, E, v, w, S, p, A) {
      return l(a + (E & w | v & ~w) + S + p | 0, A) + E | 0;
    }
    function s(a, E, v, w, S, p, A) {
      return l(a + (E ^ v ^ w) + S + p | 0, A) + E | 0;
    }
    function g(a, E, v, w, S, p, A) {
      return l(a + (v ^ (E | ~w)) + S + p | 0, A) + E | 0;
    }
    return tc = _, tc;
  }
  var rc, Hy;
  function i2() {
    if (Hy) return rc;
    Hy = 1;
    var n = qr().Buffer, d = bt(), c = Sv(), f = new Array(16), _ = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      7,
      4,
      13,
      1,
      10,
      6,
      15,
      3,
      12,
      0,
      9,
      5,
      2,
      14,
      11,
      8,
      3,
      10,
      14,
      4,
      9,
      15,
      8,
      1,
      2,
      7,
      0,
      6,
      13,
      11,
      5,
      12,
      1,
      9,
      11,
      10,
      0,
      8,
      12,
      4,
      13,
      3,
      7,
      15,
      14,
      5,
      6,
      2,
      4,
      0,
      5,
      9,
      7,
      12,
      2,
      10,
      14,
      1,
      3,
      8,
      11,
      6,
      15,
      13
    ], l = [
      5,
      14,
      7,
      0,
      9,
      2,
      11,
      4,
      13,
      6,
      15,
      8,
      1,
      10,
      3,
      12,
      6,
      11,
      3,
      7,
      0,
      13,
      5,
      10,
      14,
      15,
      8,
      12,
      4,
      9,
      1,
      2,
      15,
      5,
      1,
      3,
      7,
      14,
      6,
      9,
      11,
      8,
      12,
      2,
      10,
      0,
      4,
      13,
      8,
      6,
      4,
      1,
      3,
      11,
      15,
      0,
      5,
      12,
      2,
      13,
      9,
      7,
      10,
      14,
      12,
      15,
      10,
      4,
      1,
      5,
      8,
      7,
      6,
      2,
      13,
      14,
      0,
      3,
      9,
      11
    ], u = [
      11,
      14,
      15,
      12,
      5,
      8,
      7,
      9,
      11,
      13,
      14,
      15,
      6,
      7,
      9,
      8,
      7,
      6,
      8,
      13,
      11,
      9,
      7,
      15,
      7,
      12,
      15,
      9,
      11,
      7,
      13,
      12,
      11,
      13,
      6,
      7,
      14,
      9,
      13,
      15,
      14,
      8,
      13,
      6,
      5,
      12,
      7,
      5,
      11,
      12,
      14,
      15,
      14,
      15,
      9,
      8,
      9,
      14,
      5,
      6,
      8,
      6,
      5,
      12,
      9,
      15,
      5,
      11,
      6,
      8,
      13,
      12,
      5,
      12,
      13,
      14,
      11,
      8,
      5,
      6
    ], o = [
      8,
      9,
      9,
      11,
      13,
      15,
      15,
      5,
      7,
      7,
      8,
      11,
      14,
      14,
      12,
      6,
      9,
      13,
      15,
      7,
      12,
      8,
      9,
      11,
      7,
      7,
      12,
      7,
      6,
      15,
      13,
      11,
      9,
      7,
      15,
      11,
      8,
      6,
      6,
      14,
      12,
      13,
      5,
      14,
      13,
      13,
      7,
      5,
      15,
      5,
      8,
      11,
      14,
      14,
      6,
      14,
      6,
      9,
      12,
      9,
      12,
      5,
      15,
      8,
      8,
      5,
      12,
      9,
      12,
      5,
      14,
      6,
      8,
      13,
      6,
      5,
      15,
      13,
      11,
      11
    ], s = [
      0,
      1518500249,
      1859775393,
      2400959708,
      2840853838
    ], g = [
      1352829926,
      1548603684,
      1836072691,
      2053994217,
      0
    ];
    function a(x, k) {
      return x << k | x >>> 32 - k;
    }
    function E(x, k, B, O, U, C, K, X) {
      return a(x + (k ^ B ^ O) + C + K | 0, X) + U | 0;
    }
    function v(x, k, B, O, U, C, K, X) {
      return a(x + (k & B | ~k & O) + C + K | 0, X) + U | 0;
    }
    function w(x, k, B, O, U, C, K, X) {
      return a(x + ((k | ~B) ^ O) + C + K | 0, X) + U | 0;
    }
    function S(x, k, B, O, U, C, K, X) {
      return a(x + (k & O | B & ~O) + C + K | 0, X) + U | 0;
    }
    function p(x, k, B, O, U, C, K, X) {
      return a(x + (k ^ (B | ~O)) + C + K | 0, X) + U | 0;
    }
    function A() {
      c.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520;
    }
    return d(A, c), A.prototype._update = function() {
      for (var x = f, k = 0; k < 16; ++k) x[k] = this._block.readInt32LE(k * 4);
      for (var B = this._a | 0, O = this._b | 0, U = this._c | 0, C = this._d | 0, K = this._e | 0, X = this._a | 0, Q = this._b | 0, ae = this._c | 0, Ee = this._d | 0, W = this._e | 0, ye = 0; ye < 80; ye += 1) {
        var Te, Ie;
        ye < 16 ? (Te = E(B, O, U, C, K, x[_[ye]], s[0], u[ye]), Ie = p(X, Q, ae, Ee, W, x[l[ye]], g[0], o[ye])) : ye < 32 ? (Te = v(B, O, U, C, K, x[_[ye]], s[1], u[ye]), Ie = S(X, Q, ae, Ee, W, x[l[ye]], g[1], o[ye])) : ye < 48 ? (Te = w(B, O, U, C, K, x[_[ye]], s[2], u[ye]), Ie = w(X, Q, ae, Ee, W, x[l[ye]], g[2], o[ye])) : ye < 64 ? (Te = S(B, O, U, C, K, x[_[ye]], s[3], u[ye]), Ie = v(X, Q, ae, Ee, W, x[l[ye]], g[3], o[ye])) : (Te = p(B, O, U, C, K, x[_[ye]], s[4], u[ye]), Ie = E(X, Q, ae, Ee, W, x[l[ye]], g[4], o[ye])), B = K, K = C, C = a(U, 10), U = O, O = Te, X = W, W = Ee, Ee = a(ae, 10), ae = Q, Q = Ie;
      }
      var Re = this._b + U + Ee | 0;
      this._b = this._c + C + W | 0, this._c = this._d + K + X | 0, this._d = this._e + B + Q | 0, this._e = this._a + O + ae | 0, this._a = Re;
    }, A.prototype._digest = function() {
      this._block[this._blockOffset] = 128, this._blockOffset += 1, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
      var x = n.alloc ? n.alloc(20) : new n(20);
      return x.writeInt32LE(this._a, 0), x.writeInt32LE(this._b, 4), x.writeInt32LE(this._c, 8), x.writeInt32LE(this._d, 12), x.writeInt32LE(this._e, 16), x;
    }, rc = A, rc;
  }
  var nc = {
    exports: {}
  }, ic, qy;
  function Qi() {
    if (qy) return ic;
    qy = 1;
    var n = Kt().Buffer, d = ad();
    function c(f, _) {
      this._block = n.alloc(f), this._finalSize = _, this._blockSize = f, this._len = 0;
    }
    return c.prototype.update = function(f, _) {
      f = d(f, _ || "utf8");
      for (var l = this._block, u = this._blockSize, o = f.length, s = this._len, g = 0; g < o; ) {
        for (var a = s % u, E = Math.min(o - g, u - a), v = 0; v < E; v++) l[a + v] = f[g + v];
        s += E, g += E, s % u === 0 && this._update(l);
      }
      return this._len += o, this;
    }, c.prototype.digest = function(f) {
      var _ = this._len % this._blockSize;
      this._block[_] = 128, this._block.fill(0, _ + 1), _ >= this._finalSize && (this._update(this._block), this._block.fill(0));
      var l = this._len * 8;
      if (l <= 4294967295) this._block.writeUInt32BE(l, this._blockSize - 4);
      else {
        var u = (l & 4294967295) >>> 0, o = (l - u) / 4294967296;
        this._block.writeUInt32BE(o, this._blockSize - 8), this._block.writeUInt32BE(u, this._blockSize - 4);
      }
      this._update(this._block);
      var s = this._hash();
      return f ? s.toString(f) : s;
    }, c.prototype._update = function() {
      throw new Error("_update must be implemented by subclass");
    }, ic = c, ic;
  }
  var oc, jy;
  function o2() {
    if (jy) return oc;
    jy = 1;
    var n = bt(), d = Qi(), c = Kt().Buffer, f = [
      1518500249,
      1859775393,
      -1894007588,
      -899497514
    ], _ = new Array(80);
    function l() {
      this.init(), this._w = _, d.call(this, 64, 56);
    }
    n(l, d), l.prototype.init = function() {
      return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
    };
    function u(g) {
      return g << 5 | g >>> 27;
    }
    function o(g) {
      return g << 30 | g >>> 2;
    }
    function s(g, a, E, v) {
      return g === 0 ? a & E | ~a & v : g === 2 ? a & E | a & v | E & v : a ^ E ^ v;
    }
    return l.prototype._update = function(g) {
      for (var a = this._w, E = this._a | 0, v = this._b | 0, w = this._c | 0, S = this._d | 0, p = this._e | 0, A = 0; A < 16; ++A) a[A] = g.readInt32BE(A * 4);
      for (; A < 80; ++A) a[A] = a[A - 3] ^ a[A - 8] ^ a[A - 14] ^ a[A - 16];
      for (var x = 0; x < 80; ++x) {
        var k = ~~(x / 20), B = u(E) + s(k, v, w, S) + p + a[x] + f[k] | 0;
        p = S, S = w, w = o(v), v = E, E = B;
      }
      this._a = E + this._a | 0, this._b = v + this._b | 0, this._c = w + this._c | 0, this._d = S + this._d | 0, this._e = p + this._e | 0;
    }, l.prototype._hash = function() {
      var g = c.allocUnsafe(20);
      return g.writeInt32BE(this._a | 0, 0), g.writeInt32BE(this._b | 0, 4), g.writeInt32BE(this._c | 0, 8), g.writeInt32BE(this._d | 0, 12), g.writeInt32BE(this._e | 0, 16), g;
    }, oc = l, oc;
  }
  var ac, Wy;
  function a2() {
    if (Wy) return ac;
    Wy = 1;
    var n = bt(), d = Qi(), c = Kt().Buffer, f = [
      1518500249,
      1859775393,
      -1894007588,
      -899497514
    ], _ = new Array(80);
    function l() {
      this.init(), this._w = _, d.call(this, 64, 56);
    }
    n(l, d), l.prototype.init = function() {
      return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
    };
    function u(a) {
      return a << 1 | a >>> 31;
    }
    function o(a) {
      return a << 5 | a >>> 27;
    }
    function s(a) {
      return a << 30 | a >>> 2;
    }
    function g(a, E, v, w) {
      return a === 0 ? E & v | ~E & w : a === 2 ? E & v | E & w | v & w : E ^ v ^ w;
    }
    return l.prototype._update = function(a) {
      for (var E = this._w, v = this._a | 0, w = this._b | 0, S = this._c | 0, p = this._d | 0, A = this._e | 0, x = 0; x < 16; ++x) E[x] = a.readInt32BE(x * 4);
      for (; x < 80; ++x) E[x] = u(E[x - 3] ^ E[x - 8] ^ E[x - 14] ^ E[x - 16]);
      for (var k = 0; k < 80; ++k) {
        var B = ~~(k / 20), O = o(v) + g(B, w, S, p) + A + E[k] + f[B] | 0;
        A = p, p = S, S = s(w), w = v, v = O;
      }
      this._a = v + this._a | 0, this._b = w + this._b | 0, this._c = S + this._c | 0, this._d = p + this._d | 0, this._e = A + this._e | 0;
    }, l.prototype._hash = function() {
      var a = c.allocUnsafe(20);
      return a.writeInt32BE(this._a | 0, 0), a.writeInt32BE(this._b | 0, 4), a.writeInt32BE(this._c | 0, 8), a.writeInt32BE(this._d | 0, 12), a.writeInt32BE(this._e | 0, 16), a;
    }, ac = l, ac;
  }
  var sc, Ky;
  function bv() {
    if (Ky) return sc;
    Ky = 1;
    var n = bt(), d = Qi(), c = Kt().Buffer, f = [
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ], _ = new Array(64);
    function l() {
      this.init(), this._w = _, d.call(this, 64, 56);
    }
    n(l, d), l.prototype.init = function() {
      return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this;
    };
    function u(v, w, S) {
      return S ^ v & (w ^ S);
    }
    function o(v, w, S) {
      return v & w | S & (v | w);
    }
    function s(v) {
      return (v >>> 2 | v << 30) ^ (v >>> 13 | v << 19) ^ (v >>> 22 | v << 10);
    }
    function g(v) {
      return (v >>> 6 | v << 26) ^ (v >>> 11 | v << 21) ^ (v >>> 25 | v << 7);
    }
    function a(v) {
      return (v >>> 7 | v << 25) ^ (v >>> 18 | v << 14) ^ v >>> 3;
    }
    function E(v) {
      return (v >>> 17 | v << 15) ^ (v >>> 19 | v << 13) ^ v >>> 10;
    }
    return l.prototype._update = function(v) {
      for (var w = this._w, S = this._a | 0, p = this._b | 0, A = this._c | 0, x = this._d | 0, k = this._e | 0, B = this._f | 0, O = this._g | 0, U = this._h | 0, C = 0; C < 16; ++C) w[C] = v.readInt32BE(C * 4);
      for (; C < 64; ++C) w[C] = E(w[C - 2]) + w[C - 7] + a(w[C - 15]) + w[C - 16] | 0;
      for (var K = 0; K < 64; ++K) {
        var X = U + g(k) + u(k, B, O) + f[K] + w[K] | 0, Q = s(S) + o(S, p, A) | 0;
        U = O, O = B, B = k, k = x + X | 0, x = A, A = p, p = S, S = X + Q | 0;
      }
      this._a = S + this._a | 0, this._b = p + this._b | 0, this._c = A + this._c | 0, this._d = x + this._d | 0, this._e = k + this._e | 0, this._f = B + this._f | 0, this._g = O + this._g | 0, this._h = U + this._h | 0;
    }, l.prototype._hash = function() {
      var v = c.allocUnsafe(32);
      return v.writeInt32BE(this._a, 0), v.writeInt32BE(this._b, 4), v.writeInt32BE(this._c, 8), v.writeInt32BE(this._d, 12), v.writeInt32BE(this._e, 16), v.writeInt32BE(this._f, 20), v.writeInt32BE(this._g, 24), v.writeInt32BE(this._h, 28), v;
    }, sc = l, sc;
  }
  var uc, zy;
  function s2() {
    if (zy) return uc;
    zy = 1;
    var n = bt(), d = bv(), c = Qi(), f = Kt().Buffer, _ = new Array(64);
    function l() {
      this.init(), this._w = _, c.call(this, 64, 56);
    }
    return n(l, d), l.prototype.init = function() {
      return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this;
    }, l.prototype._hash = function() {
      var u = f.allocUnsafe(28);
      return u.writeInt32BE(this._a, 0), u.writeInt32BE(this._b, 4), u.writeInt32BE(this._c, 8), u.writeInt32BE(this._d, 12), u.writeInt32BE(this._e, 16), u.writeInt32BE(this._f, 20), u.writeInt32BE(this._g, 24), u;
    }, uc = l, uc;
  }
  var lc, Vy;
  function Tv() {
    if (Vy) return lc;
    Vy = 1;
    var n = bt(), d = Qi(), c = Kt().Buffer, f = [
      1116352408,
      3609767458,
      1899447441,
      602891725,
      3049323471,
      3964484399,
      3921009573,
      2173295548,
      961987163,
      4081628472,
      1508970993,
      3053834265,
      2453635748,
      2937671579,
      2870763221,
      3664609560,
      3624381080,
      2734883394,
      310598401,
      1164996542,
      607225278,
      1323610764,
      1426881987,
      3590304994,
      1925078388,
      4068182383,
      2162078206,
      991336113,
      2614888103,
      633803317,
      3248222580,
      3479774868,
      3835390401,
      2666613458,
      4022224774,
      944711139,
      264347078,
      2341262773,
      604807628,
      2007800933,
      770255983,
      1495990901,
      1249150122,
      1856431235,
      1555081692,
      3175218132,
      1996064986,
      2198950837,
      2554220882,
      3999719339,
      2821834349,
      766784016,
      2952996808,
      2566594879,
      3210313671,
      3203337956,
      3336571891,
      1034457026,
      3584528711,
      2466948901,
      113926993,
      3758326383,
      338241895,
      168717936,
      666307205,
      1188179964,
      773529912,
      1546045734,
      1294757372,
      1522805485,
      1396182291,
      2643833823,
      1695183700,
      2343527390,
      1986661051,
      1014477480,
      2177026350,
      1206759142,
      2456956037,
      344077627,
      2730485921,
      1290863460,
      2820302411,
      3158454273,
      3259730800,
      3505952657,
      3345764771,
      106217008,
      3516065817,
      3606008344,
      3600352804,
      1432725776,
      4094571909,
      1467031594,
      275423344,
      851169720,
      430227734,
      3100823752,
      506948616,
      1363258195,
      659060556,
      3750685593,
      883997877,
      3785050280,
      958139571,
      3318307427,
      1322822218,
      3812723403,
      1537002063,
      2003034995,
      1747873779,
      3602036899,
      1955562222,
      1575990012,
      2024104815,
      1125592928,
      2227730452,
      2716904306,
      2361852424,
      442776044,
      2428436474,
      593698344,
      2756734187,
      3733110249,
      3204031479,
      2999351573,
      3329325298,
      3815920427,
      3391569614,
      3928383900,
      3515267271,
      566280711,
      3940187606,
      3454069534,
      4118630271,
      4000239992,
      116418474,
      1914138554,
      174292421,
      2731055270,
      289380356,
      3203993006,
      460393269,
      320620315,
      685471733,
      587496836,
      852142971,
      1086792851,
      1017036298,
      365543100,
      1126000580,
      2618297676,
      1288033470,
      3409855158,
      1501505948,
      4234509866,
      1607167915,
      987167468,
      1816402316,
      1246189591
    ], _ = new Array(160);
    function l() {
      this.init(), this._w = _, d.call(this, 128, 112);
    }
    n(l, d), l.prototype.init = function() {
      return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this;
    };
    function u(p, A, x) {
      return x ^ p & (A ^ x);
    }
    function o(p, A, x) {
      return p & A | x & (p | A);
    }
    function s(p, A) {
      return (p >>> 28 | A << 4) ^ (A >>> 2 | p << 30) ^ (A >>> 7 | p << 25);
    }
    function g(p, A) {
      return (p >>> 14 | A << 18) ^ (p >>> 18 | A << 14) ^ (A >>> 9 | p << 23);
    }
    function a(p, A) {
      return (p >>> 1 | A << 31) ^ (p >>> 8 | A << 24) ^ p >>> 7;
    }
    function E(p, A) {
      return (p >>> 1 | A << 31) ^ (p >>> 8 | A << 24) ^ (p >>> 7 | A << 25);
    }
    function v(p, A) {
      return (p >>> 19 | A << 13) ^ (A >>> 29 | p << 3) ^ p >>> 6;
    }
    function w(p, A) {
      return (p >>> 19 | A << 13) ^ (A >>> 29 | p << 3) ^ (p >>> 6 | A << 26);
    }
    function S(p, A) {
      return p >>> 0 < A >>> 0 ? 1 : 0;
    }
    return l.prototype._update = function(p) {
      for (var A = this._w, x = this._ah | 0, k = this._bh | 0, B = this._ch | 0, O = this._dh | 0, U = this._eh | 0, C = this._fh | 0, K = this._gh | 0, X = this._hh | 0, Q = this._al | 0, ae = this._bl | 0, Ee = this._cl | 0, W = this._dl | 0, ye = this._el | 0, Te = this._fl | 0, Ie = this._gl | 0, Re = this._hl | 0, te = 0; te < 32; te += 2) A[te] = p.readInt32BE(te * 4), A[te + 1] = p.readInt32BE(te * 4 + 4);
      for (; te < 160; te += 2) {
        var D = A[te - 30], G = A[te - 30 + 1], Z = a(D, G), V = E(G, D);
        D = A[te - 4], G = A[te - 4 + 1];
        var ce = v(D, G), ee = w(G, D), le = A[te - 14], me = A[te - 14 + 1], $ = A[te - 32], R = A[te - 32 + 1], N = V + me | 0, re = Z + le + S(N, V) | 0;
        N = N + ee | 0, re = re + ce + S(N, ee) | 0, N = N + R | 0, re = re + $ + S(N, R) | 0, A[te] = re, A[te + 1] = N;
      }
      for (var se = 0; se < 160; se += 2) {
        re = A[se], N = A[se + 1];
        var H = o(x, k, B), j = o(Q, ae, Ee), pe = s(x, Q), Pe = s(Q, x), qe = g(U, ye), Ce = g(ye, U), Ke = f[se], ct = f[se + 1], Se = u(U, C, K), at = u(ye, Te, Ie), Qe = Re + Ce | 0, Ve = X + qe + S(Qe, Re) | 0;
        Qe = Qe + at | 0, Ve = Ve + Se + S(Qe, at) | 0, Qe = Qe + ct | 0, Ve = Ve + Ke + S(Qe, ct) | 0, Qe = Qe + N | 0, Ve = Ve + re + S(Qe, N) | 0;
        var Ze = Pe + j | 0, nt = pe + H + S(Ze, Pe) | 0;
        X = K, Re = Ie, K = C, Ie = Te, C = U, Te = ye, ye = W + Qe | 0, U = O + Ve + S(ye, W) | 0, O = B, W = Ee, B = k, Ee = ae, k = x, ae = Q, Q = Qe + Ze | 0, x = Ve + nt + S(Q, Qe) | 0;
      }
      this._al = this._al + Q | 0, this._bl = this._bl + ae | 0, this._cl = this._cl + Ee | 0, this._dl = this._dl + W | 0, this._el = this._el + ye | 0, this._fl = this._fl + Te | 0, this._gl = this._gl + Ie | 0, this._hl = this._hl + Re | 0, this._ah = this._ah + x + S(this._al, Q) | 0, this._bh = this._bh + k + S(this._bl, ae) | 0, this._ch = this._ch + B + S(this._cl, Ee) | 0, this._dh = this._dh + O + S(this._dl, W) | 0, this._eh = this._eh + U + S(this._el, ye) | 0, this._fh = this._fh + C + S(this._fl, Te) | 0, this._gh = this._gh + K + S(this._gl, Ie) | 0, this._hh = this._hh + X + S(this._hl, Re) | 0;
    }, l.prototype._hash = function() {
      var p = c.allocUnsafe(64);
      function A(x, k, B) {
        p.writeInt32BE(x, B), p.writeInt32BE(k, B + 4);
      }
      return A(this._ah, this._al, 0), A(this._bh, this._bl, 8), A(this._ch, this._cl, 16), A(this._dh, this._dl, 24), A(this._eh, this._el, 32), A(this._fh, this._fl, 40), A(this._gh, this._gl, 48), A(this._hh, this._hl, 56), p;
    }, lc = l, lc;
  }
  var fc, Gy;
  function u2() {
    if (Gy) return fc;
    Gy = 1;
    var n = bt(), d = Tv(), c = Qi(), f = Kt().Buffer, _ = new Array(160);
    function l() {
      this.init(), this._w = _, c.call(this, 128, 112);
    }
    return n(l, d), l.prototype.init = function() {
      return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this;
    }, l.prototype._hash = function() {
      var u = f.allocUnsafe(48);
      function o(s, g, a) {
        u.writeInt32BE(s, a), u.writeInt32BE(g, a + 4);
      }
      return o(this._ah, this._al, 0), o(this._bh, this._bl, 8), o(this._ch, this._cl, 16), o(this._dh, this._dl, 24), o(this._eh, this._el, 32), o(this._fh, this._fl, 40), u;
    }, fc = l, fc;
  }
  var Xy;
  function l2() {
    return Xy || (Xy = 1, (function(n) {
      n.exports = function(c) {
        var f = c.toLowerCase(), _ = n.exports[f];
        if (!_) throw new Error(f + " is not supported (we accept pull requests)");
        return new _();
      }, n.exports.sha = o2(), n.exports.sha1 = a2(), n.exports.sha224 = s2(), n.exports.sha256 = bv(), n.exports.sha384 = u2(), n.exports.sha512 = Tv();
    })(nc)), nc.exports;
  }
  var cc, Yy;
  function xv() {
    return Yy || (Yy = 1, cc = ra().EventEmitter), cc;
  }
  var dc, Qy;
  function f2() {
    if (Qy) return dc;
    Qy = 1;
    function n(S, p) {
      var A = Object.keys(S);
      if (Object.getOwnPropertySymbols) {
        var x = Object.getOwnPropertySymbols(S);
        p && (x = x.filter(function(k) {
          return Object.getOwnPropertyDescriptor(S, k).enumerable;
        })), A.push.apply(A, x);
      }
      return A;
    }
    function d(S) {
      for (var p = 1; p < arguments.length; p++) {
        var A = arguments[p] != null ? arguments[p] : {};
        p % 2 ? n(Object(A), true).forEach(function(x) {
          c(S, x, A[x]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(A)) : n(Object(A)).forEach(function(x) {
          Object.defineProperty(S, x, Object.getOwnPropertyDescriptor(A, x));
        });
      }
      return S;
    }
    function c(S, p, A) {
      return p = u(p), p in S ? Object.defineProperty(S, p, {
        value: A,
        enumerable: true,
        configurable: true,
        writable: true
      }) : S[p] = A, S;
    }
    function f(S, p) {
      if (!(S instanceof p)) throw new TypeError("Cannot call a class as a function");
    }
    function _(S, p) {
      for (var A = 0; A < p.length; A++) {
        var x = p[A];
        x.enumerable = x.enumerable || false, x.configurable = true, "value" in x && (x.writable = true), Object.defineProperty(S, u(x.key), x);
      }
    }
    function l(S, p, A) {
      return p && _(S.prototype, p), Object.defineProperty(S, "prototype", {
        writable: false
      }), S;
    }
    function u(S) {
      var p = o(S, "string");
      return typeof p == "symbol" ? p : String(p);
    }
    function o(S, p) {
      if (typeof S != "object" || S === null) return S;
      var A = S[Symbol.toPrimitive];
      if (A !== void 0) {
        var x = A.call(S, p);
        if (typeof x != "object") return x;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(S);
    }
    var s = qr(), g = s.Buffer, a = Ds(), E = a.inspect, v = E && E.custom || "inspect";
    function w(S, p, A) {
      g.prototype.copy.call(S, p, A);
    }
    return dc = (function() {
      function S() {
        f(this, S), this.head = null, this.tail = null, this.length = 0;
      }
      return l(S, [
        {
          key: "push",
          value: function(A) {
            var x = {
              data: A,
              next: null
            };
            this.length > 0 ? this.tail.next = x : this.head = x, this.tail = x, ++this.length;
          }
        },
        {
          key: "unshift",
          value: function(A) {
            var x = {
              data: A,
              next: this.head
            };
            this.length === 0 && (this.tail = x), this.head = x, ++this.length;
          }
        },
        {
          key: "shift",
          value: function() {
            if (this.length !== 0) {
              var A = this.head.data;
              return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, A;
            }
          }
        },
        {
          key: "clear",
          value: function() {
            this.head = this.tail = null, this.length = 0;
          }
        },
        {
          key: "join",
          value: function(A) {
            if (this.length === 0) return "";
            for (var x = this.head, k = "" + x.data; x = x.next; ) k += A + x.data;
            return k;
          }
        },
        {
          key: "concat",
          value: function(A) {
            if (this.length === 0) return g.alloc(0);
            for (var x = g.allocUnsafe(A >>> 0), k = this.head, B = 0; k; ) w(k.data, x, B), B += k.data.length, k = k.next;
            return x;
          }
        },
        {
          key: "consume",
          value: function(A, x) {
            var k;
            return A < this.head.data.length ? (k = this.head.data.slice(0, A), this.head.data = this.head.data.slice(A)) : A === this.head.data.length ? k = this.shift() : k = x ? this._getString(A) : this._getBuffer(A), k;
          }
        },
        {
          key: "first",
          value: function() {
            return this.head.data;
          }
        },
        {
          key: "_getString",
          value: function(A) {
            var x = this.head, k = 1, B = x.data;
            for (A -= B.length; x = x.next; ) {
              var O = x.data, U = A > O.length ? O.length : A;
              if (U === O.length ? B += O : B += O.slice(0, A), A -= U, A === 0) {
                U === O.length ? (++k, x.next ? this.head = x.next : this.head = this.tail = null) : (this.head = x, x.data = O.slice(U));
                break;
              }
              ++k;
            }
            return this.length -= k, B;
          }
        },
        {
          key: "_getBuffer",
          value: function(A) {
            var x = g.allocUnsafe(A), k = this.head, B = 1;
            for (k.data.copy(x), A -= k.data.length; k = k.next; ) {
              var O = k.data, U = A > O.length ? O.length : A;
              if (O.copy(x, x.length - A, 0, U), A -= U, A === 0) {
                U === O.length ? (++B, k.next ? this.head = k.next : this.head = this.tail = null) : (this.head = k, k.data = O.slice(U));
                break;
              }
              ++B;
            }
            return this.length -= B, x;
          }
        },
        {
          key: v,
          value: function(A, x) {
            return E(this, d(d({}, x), {}, {
              depth: 0,
              customInspect: false
            }));
          }
        }
      ]), S;
    })(), dc;
  }
  var hc, Jy;
  function Pv() {
    if (Jy) return hc;
    Jy = 1;
    function n(u, o) {
      var s = this, g = this._readableState && this._readableState.destroyed, a = this._writableState && this._writableState.destroyed;
      return g || a ? (o ? o(u) : u && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = true, ze.nextTick(_, this, u)) : ze.nextTick(_, this, u)), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(u || null, function(E) {
        !o && E ? s._writableState ? s._writableState.errorEmitted ? ze.nextTick(c, s) : (s._writableState.errorEmitted = true, ze.nextTick(d, s, E)) : ze.nextTick(d, s, E) : o ? (ze.nextTick(c, s), o(E)) : ze.nextTick(c, s);
      }), this);
    }
    function d(u, o) {
      _(u, o), c(u);
    }
    function c(u) {
      u._writableState && !u._writableState.emitClose || u._readableState && !u._readableState.emitClose || u.emit("close");
    }
    function f() {
      this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finalCalled = false, this._writableState.prefinished = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
    }
    function _(u, o) {
      u.emit("error", o);
    }
    function l(u, o) {
      var s = u._readableState, g = u._writableState;
      s && s.autoDestroy || g && g.autoDestroy ? u.destroy(o) : u.emit("error", o);
    }
    return hc = {
      destroy: n,
      undestroy: f,
      errorOrDestroy: l
    }, hc;
  }
  var pc = {}, Zy;
  function Ji() {
    if (Zy) return pc;
    Zy = 1;
    function n(o, s) {
      o.prototype = Object.create(s.prototype), o.prototype.constructor = o, o.__proto__ = s;
    }
    var d = {};
    function c(o, s, g) {
      g || (g = Error);
      function a(v, w, S) {
        return typeof s == "string" ? s : s(v, w, S);
      }
      var E = (function(v) {
        n(w, v);
        function w(S, p, A) {
          return v.call(this, a(S, p, A)) || this;
        }
        return w;
      })(g);
      E.prototype.name = g.name, E.prototype.code = o, d[o] = E;
    }
    function f(o, s) {
      if (Array.isArray(o)) {
        var g = o.length;
        return o = o.map(function(a) {
          return String(a);
        }), g > 2 ? "one of ".concat(s, " ").concat(o.slice(0, g - 1).join(", "), ", or ") + o[g - 1] : g === 2 ? "one of ".concat(s, " ").concat(o[0], " or ").concat(o[1]) : "of ".concat(s, " ").concat(o[0]);
      } else return "of ".concat(s, " ").concat(String(o));
    }
    function _(o, s, g) {
      return o.substr(0, s.length) === s;
    }
    function l(o, s, g) {
      return (g === void 0 || g > o.length) && (g = o.length), o.substring(g - s.length, g) === s;
    }
    function u(o, s, g) {
      return typeof g != "number" && (g = 0), g + s.length > o.length ? false : o.indexOf(s, g) !== -1;
    }
    return c("ERR_INVALID_OPT_VALUE", function(o, s) {
      return 'The value "' + s + '" is invalid for option "' + o + '"';
    }, TypeError), c("ERR_INVALID_ARG_TYPE", function(o, s, g) {
      var a;
      typeof s == "string" && _(s, "not ") ? (a = "must not be", s = s.replace(/^not /, "")) : a = "must be";
      var E;
      if (l(o, " argument")) E = "The ".concat(o, " ").concat(a, " ").concat(f(s, "type"));
      else {
        var v = u(o, ".") ? "property" : "argument";
        E = 'The "'.concat(o, '" ').concat(v, " ").concat(a, " ").concat(f(s, "type"));
      }
      return E += ". Received type ".concat(typeof g), E;
    }, TypeError), c("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), c("ERR_METHOD_NOT_IMPLEMENTED", function(o) {
      return "The " + o + " method is not implemented";
    }), c("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), c("ERR_STREAM_DESTROYED", function(o) {
      return "Cannot call " + o + " after a stream was destroyed";
    }), c("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), c("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), c("ERR_STREAM_WRITE_AFTER_END", "write after end"), c("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), c("ERR_UNKNOWN_ENCODING", function(o) {
      return "Unknown encoding: " + o;
    }, TypeError), c("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), pc.codes = d, pc;
  }
  var yc, $y;
  function kv() {
    if ($y) return yc;
    $y = 1;
    var n = Ji().codes.ERR_INVALID_OPT_VALUE;
    function d(f, _, l) {
      return f.highWaterMark != null ? f.highWaterMark : _ ? f[l] : null;
    }
    function c(f, _, l, u) {
      var o = d(_, u, l);
      if (o != null) {
        if (!(isFinite(o) && Math.floor(o) === o) || o < 0) {
          var s = u ? l : "highWaterMark";
          throw new n(s, o);
        }
        return Math.floor(o);
      }
      return f.objectMode ? 16 : 16 * 1024;
    }
    return yc = {
      getHighWaterMark: c
    }, yc;
  }
  var gc, eg;
  function Av() {
    if (eg) return gc;
    eg = 1, gc = X;
    function n($) {
      var R = this;
      this.next = null, this.entry = null, this.finish = function() {
        me(R, $);
      };
    }
    var d;
    X.WritableState = C;
    var c = {
      deprecate: vv()
    }, f = xv(), _ = qr().Buffer, l = (typeof sr < "u" ? sr : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
    };
    function u($) {
      return _.from($);
    }
    function o($) {
      return _.isBuffer($) || $ instanceof l;
    }
    var s = Pv(), g = kv(), a = g.getHighWaterMark, E = Ji().codes, v = E.ERR_INVALID_ARG_TYPE, w = E.ERR_METHOD_NOT_IMPLEMENTED, S = E.ERR_MULTIPLE_CALLBACK, p = E.ERR_STREAM_CANNOT_PIPE, A = E.ERR_STREAM_DESTROYED, x = E.ERR_STREAM_NULL_VALUES, k = E.ERR_STREAM_WRITE_AFTER_END, B = E.ERR_UNKNOWN_ENCODING, O = s.errorOrDestroy;
    bt()(X, f);
    function U() {
    }
    function C($, R, N) {
      d = d || zi(), $ = $ || {}, typeof N != "boolean" && (N = R instanceof d), this.objectMode = !!$.objectMode, N && (this.objectMode = this.objectMode || !!$.writableObjectMode), this.highWaterMark = a(this, $, "writableHighWaterMark", N), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
      var re = $.decodeStrings === false;
      this.decodeStrings = !re, this.defaultEncoding = $.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(se) {
        Re(R, se);
      }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.emitClose = $.emitClose !== false, this.autoDestroy = !!$.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new n(this);
    }
    C.prototype.getBuffer = function() {
      for (var R = this.bufferedRequest, N = []; R; ) N.push(R), R = R.next;
      return N;
    }, (function() {
      try {
        Object.defineProperty(C.prototype, "buffer", {
          get: c.deprecate(function() {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch {
      }
    })();
    var K;
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (K = Function.prototype[Symbol.hasInstance], Object.defineProperty(X, Symbol.hasInstance, {
      value: function(R) {
        return K.call(this, R) ? true : this !== X ? false : R && R._writableState instanceof C;
      }
    })) : K = function(R) {
      return R instanceof this;
    };
    function X($) {
      d = d || zi();
      var R = this instanceof d;
      if (!R && !K.call(X, this)) return new X($);
      this._writableState = new C($, this, R), this.writable = true, $ && (typeof $.write == "function" && (this._write = $.write), typeof $.writev == "function" && (this._writev = $.writev), typeof $.destroy == "function" && (this._destroy = $.destroy), typeof $.final == "function" && (this._final = $.final)), f.call(this);
    }
    X.prototype.pipe = function() {
      O(this, new p());
    };
    function Q($, R) {
      var N = new k();
      O($, N), ze.nextTick(R, N);
    }
    function ae($, R, N, re) {
      var se;
      return N === null ? se = new x() : typeof N != "string" && !R.objectMode && (se = new v("chunk", [
        "string",
        "Buffer"
      ], N)), se ? (O($, se), ze.nextTick(re, se), false) : true;
    }
    X.prototype.write = function($, R, N) {
      var re = this._writableState, se = false, H = !re.objectMode && o($);
      return H && !_.isBuffer($) && ($ = u($)), typeof R == "function" && (N = R, R = null), H ? R = "buffer" : R || (R = re.defaultEncoding), typeof N != "function" && (N = U), re.ending ? Q(this, N) : (H || ae(this, re, $, N)) && (re.pendingcb++, se = W(this, re, H, $, R, N)), se;
    }, X.prototype.cork = function() {
      this._writableState.corked++;
    }, X.prototype.uncork = function() {
      var $ = this._writableState;
      $.corked && ($.corked--, !$.writing && !$.corked && !$.bufferProcessing && $.bufferedRequest && G(this, $));
    }, X.prototype.setDefaultEncoding = function(R) {
      if (typeof R == "string" && (R = R.toLowerCase()), !([
        "hex",
        "utf8",
        "utf-8",
        "ascii",
        "binary",
        "base64",
        "ucs2",
        "ucs-2",
        "utf16le",
        "utf-16le",
        "raw"
      ].indexOf((R + "").toLowerCase()) > -1)) throw new B(R);
      return this._writableState.defaultEncoding = R, this;
    }, Object.defineProperty(X.prototype, "writableBuffer", {
      enumerable: false,
      get: function() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    function Ee($, R, N) {
      return !$.objectMode && $.decodeStrings !== false && typeof R == "string" && (R = _.from(R, N)), R;
    }
    Object.defineProperty(X.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    });
    function W($, R, N, re, se, H) {
      if (!N) {
        var j = Ee(R, re, se);
        re !== j && (N = true, se = "buffer", re = j);
      }
      var pe = R.objectMode ? 1 : re.length;
      R.length += pe;
      var Pe = R.length < R.highWaterMark;
      if (Pe || (R.needDrain = true), R.writing || R.corked) {
        var qe = R.lastBufferedRequest;
        R.lastBufferedRequest = {
          chunk: re,
          encoding: se,
          isBuf: N,
          callback: H,
          next: null
        }, qe ? qe.next = R.lastBufferedRequest : R.bufferedRequest = R.lastBufferedRequest, R.bufferedRequestCount += 1;
      } else ye($, R, false, pe, re, se, H);
      return Pe;
    }
    function ye($, R, N, re, se, H, j) {
      R.writelen = re, R.writecb = j, R.writing = true, R.sync = true, R.destroyed ? R.onwrite(new A("write")) : N ? $._writev(se, R.onwrite) : $._write(se, H, R.onwrite), R.sync = false;
    }
    function Te($, R, N, re, se) {
      --R.pendingcb, N ? (ze.nextTick(se, re), ze.nextTick(ee, $, R), $._writableState.errorEmitted = true, O($, re)) : (se(re), $._writableState.errorEmitted = true, O($, re), ee($, R));
    }
    function Ie($) {
      $.writing = false, $.writecb = null, $.length -= $.writelen, $.writelen = 0;
    }
    function Re($, R) {
      var N = $._writableState, re = N.sync, se = N.writecb;
      if (typeof se != "function") throw new S();
      if (Ie(N), R) Te($, N, re, R, se);
      else {
        var H = Z(N) || $.destroyed;
        !H && !N.corked && !N.bufferProcessing && N.bufferedRequest && G($, N), re ? ze.nextTick(te, $, N, H, se) : te($, N, H, se);
      }
    }
    function te($, R, N, re) {
      N || D($, R), R.pendingcb--, re(), ee($, R);
    }
    function D($, R) {
      R.length === 0 && R.needDrain && (R.needDrain = false, $.emit("drain"));
    }
    function G($, R) {
      R.bufferProcessing = true;
      var N = R.bufferedRequest;
      if ($._writev && N && N.next) {
        var re = R.bufferedRequestCount, se = new Array(re), H = R.corkedRequestsFree;
        H.entry = N;
        for (var j = 0, pe = true; N; ) se[j] = N, N.isBuf || (pe = false), N = N.next, j += 1;
        se.allBuffers = pe, ye($, R, true, R.length, se, "", H.finish), R.pendingcb++, R.lastBufferedRequest = null, H.next ? (R.corkedRequestsFree = H.next, H.next = null) : R.corkedRequestsFree = new n(R), R.bufferedRequestCount = 0;
      } else {
        for (; N; ) {
          var Pe = N.chunk, qe = N.encoding, Ce = N.callback, Ke = R.objectMode ? 1 : Pe.length;
          if (ye($, R, false, Ke, Pe, qe, Ce), N = N.next, R.bufferedRequestCount--, R.writing) break;
        }
        N === null && (R.lastBufferedRequest = null);
      }
      R.bufferedRequest = N, R.bufferProcessing = false;
    }
    X.prototype._write = function($, R, N) {
      N(new w("_write()"));
    }, X.prototype._writev = null, X.prototype.end = function($, R, N) {
      var re = this._writableState;
      return typeof $ == "function" ? (N = $, $ = null, R = null) : typeof R == "function" && (N = R, R = null), $ != null && this.write($, R), re.corked && (re.corked = 1, this.uncork()), re.ending || le(this, re, N), this;
    }, Object.defineProperty(X.prototype, "writableLength", {
      enumerable: false,
      get: function() {
        return this._writableState.length;
      }
    });
    function Z($) {
      return $.ending && $.length === 0 && $.bufferedRequest === null && !$.finished && !$.writing;
    }
    function V($, R) {
      $._final(function(N) {
        R.pendingcb--, N && O($, N), R.prefinished = true, $.emit("prefinish"), ee($, R);
      });
    }
    function ce($, R) {
      !R.prefinished && !R.finalCalled && (typeof $._final == "function" && !R.destroyed ? (R.pendingcb++, R.finalCalled = true, ze.nextTick(V, $, R)) : (R.prefinished = true, $.emit("prefinish")));
    }
    function ee($, R) {
      var N = Z(R);
      if (N && (ce($, R), R.pendingcb === 0 && (R.finished = true, $.emit("finish"), R.autoDestroy))) {
        var re = $._readableState;
        (!re || re.autoDestroy && re.endEmitted) && $.destroy();
      }
      return N;
    }
    function le($, R, N) {
      R.ending = true, ee($, R), N && (R.finished ? ze.nextTick(N) : $.once("finish", N)), R.ended = true, $.writable = false;
    }
    function me($, R, N) {
      var re = $.entry;
      for ($.entry = null; re; ) {
        var se = re.callback;
        R.pendingcb--, se(N), re = re.next;
      }
      R.corkedRequestsFree.next = $;
    }
    return Object.defineProperty(X.prototype, "destroyed", {
      enumerable: false,
      get: function() {
        return this._writableState === void 0 ? false : this._writableState.destroyed;
      },
      set: function(R) {
        this._writableState && (this._writableState.destroyed = R);
      }
    }), X.prototype.destroy = s.destroy, X.prototype._undestroy = s.undestroy, X.prototype._destroy = function($, R) {
      R($);
    }, gc;
  }
  var mc, tg;
  function zi() {
    if (tg) return mc;
    tg = 1;
    var n = Object.keys || function(g) {
      var a = [];
      for (var E in g) a.push(E);
      return a;
    };
    mc = u;
    var d = Iv(), c = Av();
    bt()(u, d);
    for (var f = n(c.prototype), _ = 0; _ < f.length; _++) {
      var l = f[_];
      u.prototype[l] || (u.prototype[l] = c.prototype[l]);
    }
    function u(g) {
      if (!(this instanceof u)) return new u(g);
      d.call(this, g), c.call(this, g), this.allowHalfOpen = true, g && (g.readable === false && (this.readable = false), g.writable === false && (this.writable = false), g.allowHalfOpen === false && (this.allowHalfOpen = false, this.once("end", o)));
    }
    Object.defineProperty(u.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    }), Object.defineProperty(u.prototype, "writableBuffer", {
      enumerable: false,
      get: function() {
        return this._writableState && this._writableState.getBuffer();
      }
    }), Object.defineProperty(u.prototype, "writableLength", {
      enumerable: false,
      get: function() {
        return this._writableState.length;
      }
    });
    function o() {
      this._writableState.ended || ze.nextTick(s, this);
    }
    function s(g) {
      g.end();
    }
    return Object.defineProperty(u.prototype, "destroyed", {
      enumerable: false,
      get: function() {
        return this._readableState === void 0 || this._writableState === void 0 ? false : this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function(a) {
        this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = a, this._writableState.destroyed = a);
      }
    }), mc;
  }
  var vc, rg;
  function ud() {
    if (rg) return vc;
    rg = 1;
    var n = Ji().codes.ERR_STREAM_PREMATURE_CLOSE;
    function d(l) {
      var u = false;
      return function() {
        if (!u) {
          u = true;
          for (var o = arguments.length, s = new Array(o), g = 0; g < o; g++) s[g] = arguments[g];
          l.apply(this, s);
        }
      };
    }
    function c() {
    }
    function f(l) {
      return l.setHeader && typeof l.abort == "function";
    }
    function _(l, u, o) {
      if (typeof u == "function") return _(l, null, u);
      u || (u = {}), o = d(o || c);
      var s = u.readable || u.readable !== false && l.readable, g = u.writable || u.writable !== false && l.writable, a = function() {
        l.writable || v();
      }, E = l._writableState && l._writableState.finished, v = function() {
        g = false, E = true, s || o.call(l);
      }, w = l._readableState && l._readableState.endEmitted, S = function() {
        s = false, w = true, g || o.call(l);
      }, p = function(B) {
        o.call(l, B);
      }, A = function() {
        var B;
        if (s && !w) return (!l._readableState || !l._readableState.ended) && (B = new n()), o.call(l, B);
        if (g && !E) return (!l._writableState || !l._writableState.ended) && (B = new n()), o.call(l, B);
      }, x = function() {
        l.req.on("finish", v);
      };
      return f(l) ? (l.on("complete", v), l.on("abort", A), l.req ? x() : l.on("request", x)) : g && !l._writableState && (l.on("end", a), l.on("close", a)), l.on("end", S), l.on("finish", v), u.error !== false && l.on("error", p), l.on("close", A), function() {
        l.removeListener("complete", v), l.removeListener("abort", A), l.removeListener("request", x), l.req && l.req.removeListener("finish", v), l.removeListener("end", a), l.removeListener("close", a), l.removeListener("finish", v), l.removeListener("end", S), l.removeListener("error", p), l.removeListener("close", A);
      };
    }
    return vc = _, vc;
  }
  var wc, ng;
  function c2() {
    if (ng) return wc;
    ng = 1;
    var n;
    function d(B, O, U) {
      return O = c(O), O in B ? Object.defineProperty(B, O, {
        value: U,
        enumerable: true,
        configurable: true,
        writable: true
      }) : B[O] = U, B;
    }
    function c(B) {
      var O = f(B, "string");
      return typeof O == "symbol" ? O : String(O);
    }
    function f(B, O) {
      if (typeof B != "object" || B === null) return B;
      var U = B[Symbol.toPrimitive];
      if (U !== void 0) {
        var C = U.call(B, O);
        if (typeof C != "object") return C;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (O === "string" ? String : Number)(B);
    }
    var _ = ud(), l = /* @__PURE__ */ Symbol("lastResolve"), u = /* @__PURE__ */ Symbol("lastReject"), o = /* @__PURE__ */ Symbol("error"), s = /* @__PURE__ */ Symbol("ended"), g = /* @__PURE__ */ Symbol("lastPromise"), a = /* @__PURE__ */ Symbol("handlePromise"), E = /* @__PURE__ */ Symbol("stream");
    function v(B, O) {
      return {
        value: B,
        done: O
      };
    }
    function w(B) {
      var O = B[l];
      if (O !== null) {
        var U = B[E].read();
        U !== null && (B[g] = null, B[l] = null, B[u] = null, O(v(U, false)));
      }
    }
    function S(B) {
      ze.nextTick(w, B);
    }
    function p(B, O) {
      return function(U, C) {
        B.then(function() {
          if (O[s]) {
            U(v(void 0, true));
            return;
          }
          O[a](U, C);
        }, C);
      };
    }
    var A = Object.getPrototypeOf(function() {
    }), x = Object.setPrototypeOf((n = {
      get stream() {
        return this[E];
      },
      next: function() {
        var O = this, U = this[o];
        if (U !== null) return Promise.reject(U);
        if (this[s]) return Promise.resolve(v(void 0, true));
        if (this[E].destroyed) return new Promise(function(Q, ae) {
          ze.nextTick(function() {
            O[o] ? ae(O[o]) : Q(v(void 0, true));
          });
        });
        var C = this[g], K;
        if (C) K = new Promise(p(C, this));
        else {
          var X = this[E].read();
          if (X !== null) return Promise.resolve(v(X, false));
          K = new Promise(this[a]);
        }
        return this[g] = K, K;
      }
    }, d(n, Symbol.asyncIterator, function() {
      return this;
    }), d(n, "return", function() {
      var O = this;
      return new Promise(function(U, C) {
        O[E].destroy(null, function(K) {
          if (K) {
            C(K);
            return;
          }
          U(v(void 0, true));
        });
      });
    }), n), A), k = function(O) {
      var U, C = Object.create(x, (U = {}, d(U, E, {
        value: O,
        writable: true
      }), d(U, l, {
        value: null,
        writable: true
      }), d(U, u, {
        value: null,
        writable: true
      }), d(U, o, {
        value: null,
        writable: true
      }), d(U, s, {
        value: O._readableState.endEmitted,
        writable: true
      }), d(U, a, {
        value: function(X, Q) {
          var ae = C[E].read();
          ae ? (C[g] = null, C[l] = null, C[u] = null, X(v(ae, false))) : (C[l] = X, C[u] = Q);
        },
        writable: true
      }), U));
      return C[g] = null, _(O, function(K) {
        if (K && K.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          var X = C[u];
          X !== null && (C[g] = null, C[l] = null, C[u] = null, X(K)), C[o] = K;
          return;
        }
        var Q = C[l];
        Q !== null && (C[g] = null, C[l] = null, C[u] = null, Q(v(void 0, true))), C[s] = true;
      }), O.on("readable", S.bind(null, C)), C;
    };
    return wc = k, wc;
  }
  var _c, ig;
  function d2() {
    return ig || (ig = 1, _c = function() {
      throw new Error("Readable.from is not available in the browser");
    }), _c;
  }
  var Ec, og;
  function Iv() {
    if (og) return Ec;
    og = 1, Ec = Q;
    var n;
    Q.ReadableState = X, ra().EventEmitter;
    var d = function(j, pe) {
      return j.listeners(pe).length;
    }, c = xv(), f = qr().Buffer, _ = (typeof sr < "u" ? sr : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
    };
    function l(H) {
      return f.from(H);
    }
    function u(H) {
      return f.isBuffer(H) || H instanceof _;
    }
    var o = Ds(), s;
    o && o.debuglog ? s = o.debuglog("stream") : s = function() {
    };
    var g = f2(), a = Pv(), E = kv(), v = E.getHighWaterMark, w = Ji().codes, S = w.ERR_INVALID_ARG_TYPE, p = w.ERR_STREAM_PUSH_AFTER_EOF, A = w.ERR_METHOD_NOT_IMPLEMENTED, x = w.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, k, B, O;
    bt()(Q, c);
    var U = a.errorOrDestroy, C = [
      "error",
      "close",
      "destroy",
      "pause",
      "resume"
    ];
    function K(H, j, pe) {
      if (typeof H.prependListener == "function") return H.prependListener(j, pe);
      !H._events || !H._events[j] ? H.on(j, pe) : Array.isArray(H._events[j]) ? H._events[j].unshift(pe) : H._events[j] = [
        pe,
        H._events[j]
      ];
    }
    function X(H, j, pe) {
      n = n || zi(), H = H || {}, typeof pe != "boolean" && (pe = j instanceof n), this.objectMode = !!H.objectMode, pe && (this.objectMode = this.objectMode || !!H.readableObjectMode), this.highWaterMark = v(this, H, "readableHighWaterMark", pe), this.buffer = new g(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.paused = true, this.emitClose = H.emitClose !== false, this.autoDestroy = !!H.autoDestroy, this.destroyed = false, this.defaultEncoding = H.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, H.encoding && (k || (k = Zo().StringDecoder), this.decoder = new k(H.encoding), this.encoding = H.encoding);
    }
    function Q(H) {
      if (n = n || zi(), !(this instanceof Q)) return new Q(H);
      var j = this instanceof n;
      this._readableState = new X(H, this, j), this.readable = true, H && (typeof H.read == "function" && (this._read = H.read), typeof H.destroy == "function" && (this._destroy = H.destroy)), c.call(this);
    }
    Object.defineProperty(Q.prototype, "destroyed", {
      enumerable: false,
      get: function() {
        return this._readableState === void 0 ? false : this._readableState.destroyed;
      },
      set: function(j) {
        this._readableState && (this._readableState.destroyed = j);
      }
    }), Q.prototype.destroy = a.destroy, Q.prototype._undestroy = a.undestroy, Q.prototype._destroy = function(H, j) {
      j(H);
    }, Q.prototype.push = function(H, j) {
      var pe = this._readableState, Pe;
      return pe.objectMode ? Pe = true : typeof H == "string" && (j = j || pe.defaultEncoding, j !== pe.encoding && (H = f.from(H, j), j = ""), Pe = true), ae(this, H, j, false, Pe);
    }, Q.prototype.unshift = function(H) {
      return ae(this, H, null, true, false);
    };
    function ae(H, j, pe, Pe, qe) {
      s("readableAddChunk", j);
      var Ce = H._readableState;
      if (j === null) Ce.reading = false, Re(H, Ce);
      else {
        var Ke;
        if (qe || (Ke = W(Ce, j)), Ke) U(H, Ke);
        else if (Ce.objectMode || j && j.length > 0) if (typeof j != "string" && !Ce.objectMode && Object.getPrototypeOf(j) !== f.prototype && (j = l(j)), Pe) Ce.endEmitted ? U(H, new x()) : Ee(H, Ce, j, true);
        else if (Ce.ended) U(H, new p());
        else {
          if (Ce.destroyed) return false;
          Ce.reading = false, Ce.decoder && !pe ? (j = Ce.decoder.write(j), Ce.objectMode || j.length !== 0 ? Ee(H, Ce, j, false) : G(H, Ce)) : Ee(H, Ce, j, false);
        }
        else Pe || (Ce.reading = false, G(H, Ce));
      }
      return !Ce.ended && (Ce.length < Ce.highWaterMark || Ce.length === 0);
    }
    function Ee(H, j, pe, Pe) {
      j.flowing && j.length === 0 && !j.sync ? (j.awaitDrain = 0, H.emit("data", pe)) : (j.length += j.objectMode ? 1 : pe.length, Pe ? j.buffer.unshift(pe) : j.buffer.push(pe), j.needReadable && te(H)), G(H, j);
    }
    function W(H, j) {
      var pe;
      return !u(j) && typeof j != "string" && j !== void 0 && !H.objectMode && (pe = new S("chunk", [
        "string",
        "Buffer",
        "Uint8Array"
      ], j)), pe;
    }
    Q.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    }, Q.prototype.setEncoding = function(H) {
      k || (k = Zo().StringDecoder);
      var j = new k(H);
      this._readableState.decoder = j, this._readableState.encoding = this._readableState.decoder.encoding;
      for (var pe = this._readableState.buffer.head, Pe = ""; pe !== null; ) Pe += j.write(pe.data), pe = pe.next;
      return this._readableState.buffer.clear(), Pe !== "" && this._readableState.buffer.push(Pe), this._readableState.length = Pe.length, this;
    };
    var ye = 1073741824;
    function Te(H) {
      return H >= ye ? H = ye : (H--, H |= H >>> 1, H |= H >>> 2, H |= H >>> 4, H |= H >>> 8, H |= H >>> 16, H++), H;
    }
    function Ie(H, j) {
      return H <= 0 || j.length === 0 && j.ended ? 0 : j.objectMode ? 1 : H !== H ? j.flowing && j.length ? j.buffer.head.data.length : j.length : (H > j.highWaterMark && (j.highWaterMark = Te(H)), H <= j.length ? H : j.ended ? j.length : (j.needReadable = true, 0));
    }
    Q.prototype.read = function(H) {
      s("read", H), H = parseInt(H, 10);
      var j = this._readableState, pe = H;
      if (H !== 0 && (j.emittedReadable = false), H === 0 && j.needReadable && ((j.highWaterMark !== 0 ? j.length >= j.highWaterMark : j.length > 0) || j.ended)) return s("read: emitReadable", j.length, j.ended), j.length === 0 && j.ended ? N(this) : te(this), null;
      if (H = Ie(H, j), H === 0 && j.ended) return j.length === 0 && N(this), null;
      var Pe = j.needReadable;
      s("need readable", Pe), (j.length === 0 || j.length - H < j.highWaterMark) && (Pe = true, s("length less than watermark", Pe)), j.ended || j.reading ? (Pe = false, s("reading or ended", Pe)) : Pe && (s("do read"), j.reading = true, j.sync = true, j.length === 0 && (j.needReadable = true), this._read(j.highWaterMark), j.sync = false, j.reading || (H = Ie(pe, j)));
      var qe;
      return H > 0 ? qe = R(H, j) : qe = null, qe === null ? (j.needReadable = j.length <= j.highWaterMark, H = 0) : (j.length -= H, j.awaitDrain = 0), j.length === 0 && (j.ended || (j.needReadable = true), pe !== H && j.ended && N(this)), qe !== null && this.emit("data", qe), qe;
    };
    function Re(H, j) {
      if (s("onEofChunk"), !j.ended) {
        if (j.decoder) {
          var pe = j.decoder.end();
          pe && pe.length && (j.buffer.push(pe), j.length += j.objectMode ? 1 : pe.length);
        }
        j.ended = true, j.sync ? te(H) : (j.needReadable = false, j.emittedReadable || (j.emittedReadable = true, D(H)));
      }
    }
    function te(H) {
      var j = H._readableState;
      s("emitReadable", j.needReadable, j.emittedReadable), j.needReadable = false, j.emittedReadable || (s("emitReadable", j.flowing), j.emittedReadable = true, ze.nextTick(D, H));
    }
    function D(H) {
      var j = H._readableState;
      s("emitReadable_", j.destroyed, j.length, j.ended), !j.destroyed && (j.length || j.ended) && (H.emit("readable"), j.emittedReadable = false), j.needReadable = !j.flowing && !j.ended && j.length <= j.highWaterMark, $(H);
    }
    function G(H, j) {
      j.readingMore || (j.readingMore = true, ze.nextTick(Z, H, j));
    }
    function Z(H, j) {
      for (; !j.reading && !j.ended && (j.length < j.highWaterMark || j.flowing && j.length === 0); ) {
        var pe = j.length;
        if (s("maybeReadMore read 0"), H.read(0), pe === j.length) break;
      }
      j.readingMore = false;
    }
    Q.prototype._read = function(H) {
      U(this, new A("_read()"));
    }, Q.prototype.pipe = function(H, j) {
      var pe = this, Pe = this._readableState;
      switch (Pe.pipesCount) {
        case 0:
          Pe.pipes = H;
          break;
        case 1:
          Pe.pipes = [
            Pe.pipes,
            H
          ];
          break;
        default:
          Pe.pipes.push(H);
          break;
      }
      Pe.pipesCount += 1, s("pipe count=%d opts=%j", Pe.pipesCount, j);
      var qe = (!j || j.end !== false) && H !== ze.stdout && H !== ze.stderr, Ce = qe ? ct : Ut;
      Pe.endEmitted ? ze.nextTick(Ce) : pe.once("end", Ce), H.on("unpipe", Ke);
      function Ke(Pt, he) {
        s("onunpipe"), Pt === pe && he && he.hasUnpiped === false && (he.hasUnpiped = true, Qe());
      }
      function ct() {
        s("onend"), H.end();
      }
      var Se = V(pe);
      H.on("drain", Se);
      var at = false;
      function Qe() {
        s("cleanup"), H.removeListener("close", nt), H.removeListener("finish", st), H.removeListener("drain", Se), H.removeListener("error", Ze), H.removeListener("unpipe", Ke), pe.removeListener("end", ct), pe.removeListener("end", Ut), pe.removeListener("data", Ve), at = true, Pe.awaitDrain && (!H._writableState || H._writableState.needDrain) && Se();
      }
      pe.on("data", Ve);
      function Ve(Pt) {
        s("ondata");
        var he = H.write(Pt);
        s("dest.write", he), he === false && ((Pe.pipesCount === 1 && Pe.pipes === H || Pe.pipesCount > 1 && se(Pe.pipes, H) !== -1) && !at && (s("false write response, pause", Pe.awaitDrain), Pe.awaitDrain++), pe.pause());
      }
      function Ze(Pt) {
        s("onerror", Pt), Ut(), H.removeListener("error", Ze), d(H, "error") === 0 && U(H, Pt);
      }
      K(H, "error", Ze);
      function nt() {
        H.removeListener("finish", st), Ut();
      }
      H.once("close", nt);
      function st() {
        s("onfinish"), H.removeListener("close", nt), Ut();
      }
      H.once("finish", st);
      function Ut() {
        s("unpipe"), pe.unpipe(H);
      }
      return H.emit("pipe", pe), Pe.flowing || (s("pipe resume"), pe.resume()), H;
    };
    function V(H) {
      return function() {
        var pe = H._readableState;
        s("pipeOnDrain", pe.awaitDrain), pe.awaitDrain && pe.awaitDrain--, pe.awaitDrain === 0 && d(H, "data") && (pe.flowing = true, $(H));
      };
    }
    Q.prototype.unpipe = function(H) {
      var j = this._readableState, pe = {
        hasUnpiped: false
      };
      if (j.pipesCount === 0) return this;
      if (j.pipesCount === 1) return H && H !== j.pipes ? this : (H || (H = j.pipes), j.pipes = null, j.pipesCount = 0, j.flowing = false, H && H.emit("unpipe", this, pe), this);
      if (!H) {
        var Pe = j.pipes, qe = j.pipesCount;
        j.pipes = null, j.pipesCount = 0, j.flowing = false;
        for (var Ce = 0; Ce < qe; Ce++) Pe[Ce].emit("unpipe", this, {
          hasUnpiped: false
        });
        return this;
      }
      var Ke = se(j.pipes, H);
      return Ke === -1 ? this : (j.pipes.splice(Ke, 1), j.pipesCount -= 1, j.pipesCount === 1 && (j.pipes = j.pipes[0]), H.emit("unpipe", this, pe), this);
    }, Q.prototype.on = function(H, j) {
      var pe = c.prototype.on.call(this, H, j), Pe = this._readableState;
      return H === "data" ? (Pe.readableListening = this.listenerCount("readable") > 0, Pe.flowing !== false && this.resume()) : H === "readable" && !Pe.endEmitted && !Pe.readableListening && (Pe.readableListening = Pe.needReadable = true, Pe.flowing = false, Pe.emittedReadable = false, s("on readable", Pe.length, Pe.reading), Pe.length ? te(this) : Pe.reading || ze.nextTick(ee, this)), pe;
    }, Q.prototype.addListener = Q.prototype.on, Q.prototype.removeListener = function(H, j) {
      var pe = c.prototype.removeListener.call(this, H, j);
      return H === "readable" && ze.nextTick(ce, this), pe;
    }, Q.prototype.removeAllListeners = function(H) {
      var j = c.prototype.removeAllListeners.apply(this, arguments);
      return (H === "readable" || H === void 0) && ze.nextTick(ce, this), j;
    };
    function ce(H) {
      var j = H._readableState;
      j.readableListening = H.listenerCount("readable") > 0, j.resumeScheduled && !j.paused ? j.flowing = true : H.listenerCount("data") > 0 && H.resume();
    }
    function ee(H) {
      s("readable nexttick read 0"), H.read(0);
    }
    Q.prototype.resume = function() {
      var H = this._readableState;
      return H.flowing || (s("resume"), H.flowing = !H.readableListening, le(this, H)), H.paused = false, this;
    };
    function le(H, j) {
      j.resumeScheduled || (j.resumeScheduled = true, ze.nextTick(me, H, j));
    }
    function me(H, j) {
      s("resume", j.reading), j.reading || H.read(0), j.resumeScheduled = false, H.emit("resume"), $(H), j.flowing && !j.reading && H.read(0);
    }
    Q.prototype.pause = function() {
      return s("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== false && (s("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState.paused = true, this;
    };
    function $(H) {
      var j = H._readableState;
      for (s("flow", j.flowing); j.flowing && H.read() !== null; ) ;
    }
    Q.prototype.wrap = function(H) {
      var j = this, pe = this._readableState, Pe = false;
      H.on("end", function() {
        if (s("wrapped end"), pe.decoder && !pe.ended) {
          var Ke = pe.decoder.end();
          Ke && Ke.length && j.push(Ke);
        }
        j.push(null);
      }), H.on("data", function(Ke) {
        if (s("wrapped data"), pe.decoder && (Ke = pe.decoder.write(Ke)), !(pe.objectMode && Ke == null) && !(!pe.objectMode && (!Ke || !Ke.length))) {
          var ct = j.push(Ke);
          ct || (Pe = true, H.pause());
        }
      });
      for (var qe in H) this[qe] === void 0 && typeof H[qe] == "function" && (this[qe] = /* @__PURE__ */ (function(ct) {
        return function() {
          return H[ct].apply(H, arguments);
        };
      })(qe));
      for (var Ce = 0; Ce < C.length; Ce++) H.on(C[Ce], this.emit.bind(this, C[Ce]));
      return this._read = function(Ke) {
        s("wrapped _read", Ke), Pe && (Pe = false, H.resume());
      }, this;
    }, typeof Symbol == "function" && (Q.prototype[Symbol.asyncIterator] = function() {
      return B === void 0 && (B = c2()), B(this);
    }), Object.defineProperty(Q.prototype, "readableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._readableState.highWaterMark;
      }
    }), Object.defineProperty(Q.prototype, "readableBuffer", {
      enumerable: false,
      get: function() {
        return this._readableState && this._readableState.buffer;
      }
    }), Object.defineProperty(Q.prototype, "readableFlowing", {
      enumerable: false,
      get: function() {
        return this._readableState.flowing;
      },
      set: function(j) {
        this._readableState && (this._readableState.flowing = j);
      }
    }), Q._fromList = R, Object.defineProperty(Q.prototype, "readableLength", {
      enumerable: false,
      get: function() {
        return this._readableState.length;
      }
    });
    function R(H, j) {
      if (j.length === 0) return null;
      var pe;
      return j.objectMode ? pe = j.buffer.shift() : !H || H >= j.length ? (j.decoder ? pe = j.buffer.join("") : j.buffer.length === 1 ? pe = j.buffer.first() : pe = j.buffer.concat(j.length), j.buffer.clear()) : pe = j.buffer.consume(H, j.decoder), pe;
    }
    function N(H) {
      var j = H._readableState;
      s("endReadable", j.endEmitted), j.endEmitted || (j.ended = true, ze.nextTick(re, j, H));
    }
    function re(H, j) {
      if (s("endReadableNT", H.endEmitted, H.length), !H.endEmitted && H.length === 0 && (H.endEmitted = true, j.readable = false, j.emit("end"), H.autoDestroy)) {
        var pe = j._writableState;
        (!pe || pe.autoDestroy && pe.finished) && j.destroy();
      }
    }
    typeof Symbol == "function" && (Q.from = function(H, j) {
      return O === void 0 && (O = d2()), O(Q, H, j);
    });
    function se(H, j) {
      for (var pe = 0, Pe = H.length; pe < Pe; pe++) if (H[pe] === j) return pe;
      return -1;
    }
    return Ec;
  }
  var Sc, ag;
  function Bv() {
    if (ag) return Sc;
    ag = 1, Sc = o;
    var n = Ji().codes, d = n.ERR_METHOD_NOT_IMPLEMENTED, c = n.ERR_MULTIPLE_CALLBACK, f = n.ERR_TRANSFORM_ALREADY_TRANSFORMING, _ = n.ERR_TRANSFORM_WITH_LENGTH_0, l = zi();
    bt()(o, l);
    function u(a, E) {
      var v = this._transformState;
      v.transforming = false;
      var w = v.writecb;
      if (w === null) return this.emit("error", new c());
      v.writechunk = null, v.writecb = null, E != null && this.push(E), w(a);
      var S = this._readableState;
      S.reading = false, (S.needReadable || S.length < S.highWaterMark) && this._read(S.highWaterMark);
    }
    function o(a) {
      if (!(this instanceof o)) return new o(a);
      l.call(this, a), this._transformState = {
        afterTransform: u.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      }, this._readableState.needReadable = true, this._readableState.sync = false, a && (typeof a.transform == "function" && (this._transform = a.transform), typeof a.flush == "function" && (this._flush = a.flush)), this.on("prefinish", s);
    }
    function s() {
      var a = this;
      typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(E, v) {
        g(a, E, v);
      }) : g(this, null, null);
    }
    o.prototype.push = function(a, E) {
      return this._transformState.needTransform = false, l.prototype.push.call(this, a, E);
    }, o.prototype._transform = function(a, E, v) {
      v(new d("_transform()"));
    }, o.prototype._write = function(a, E, v) {
      var w = this._transformState;
      if (w.writecb = v, w.writechunk = a, w.writeencoding = E, !w.transforming) {
        var S = this._readableState;
        (w.needTransform || S.needReadable || S.length < S.highWaterMark) && this._read(S.highWaterMark);
      }
    }, o.prototype._read = function(a) {
      var E = this._transformState;
      E.writechunk !== null && !E.transforming ? (E.transforming = true, this._transform(E.writechunk, E.writeencoding, E.afterTransform)) : E.needTransform = true;
    }, o.prototype._destroy = function(a, E) {
      l.prototype._destroy.call(this, a, function(v) {
        E(v);
      });
    };
    function g(a, E, v) {
      if (E) return a.emit("error", E);
      if (v != null && a.push(v), a._writableState.length) throw new _();
      if (a._transformState.transforming) throw new f();
      return a.push(null);
    }
    return Sc;
  }
  var bc, sg;
  function h2() {
    if (sg) return bc;
    sg = 1, bc = d;
    var n = Bv();
    bt()(d, n);
    function d(c) {
      if (!(this instanceof d)) return new d(c);
      n.call(this, c);
    }
    return d.prototype._transform = function(c, f, _) {
      _(null, c);
    }, bc;
  }
  var Tc, ug;
  function p2() {
    if (ug) return Tc;
    ug = 1;
    var n;
    function d(v) {
      var w = false;
      return function() {
        w || (w = true, v.apply(void 0, arguments));
      };
    }
    var c = Ji().codes, f = c.ERR_MISSING_ARGS, _ = c.ERR_STREAM_DESTROYED;
    function l(v) {
      if (v) throw v;
    }
    function u(v) {
      return v.setHeader && typeof v.abort == "function";
    }
    function o(v, w, S, p) {
      p = d(p);
      var A = false;
      v.on("close", function() {
        A = true;
      }), n === void 0 && (n = ud()), n(v, {
        readable: w,
        writable: S
      }, function(k) {
        if (k) return p(k);
        A = true, p();
      });
      var x = false;
      return function(k) {
        if (!A && !x) {
          if (x = true, u(v)) return v.abort();
          if (typeof v.destroy == "function") return v.destroy();
          p(k || new _("pipe"));
        }
      };
    }
    function s(v) {
      v();
    }
    function g(v, w) {
      return v.pipe(w);
    }
    function a(v) {
      return !v.length || typeof v[v.length - 1] != "function" ? l : v.pop();
    }
    function E() {
      for (var v = arguments.length, w = new Array(v), S = 0; S < v; S++) w[S] = arguments[S];
      var p = a(w);
      if (Array.isArray(w[0]) && (w = w[0]), w.length < 2) throw new f("streams");
      var A, x = w.map(function(k, B) {
        var O = B < w.length - 1, U = B > 0;
        return o(k, O, U, function(C) {
          A || (A = C), C && x.forEach(s), !O && (x.forEach(s), p(A));
        });
      });
      return w.reduce(g);
    }
    return Tc = E, Tc;
  }
  var xc, lg;
  function y2() {
    if (lg) return xc;
    lg = 1, xc = c;
    var n = ra().EventEmitter, d = bt();
    d(c, n), c.Readable = Iv(), c.Writable = Av(), c.Duplex = zi(), c.Transform = Bv(), c.PassThrough = h2(), c.finished = ud(), c.pipeline = p2(), c.Stream = c;
    function c() {
      n.call(this);
    }
    return c.prototype.pipe = function(f, _) {
      var l = this;
      function u(w) {
        f.writable && f.write(w) === false && l.pause && l.pause();
      }
      l.on("data", u);
      function o() {
        l.readable && l.resume && l.resume();
      }
      f.on("drain", o), !f._isStdio && (!_ || _.end !== false) && (l.on("end", g), l.on("close", a));
      var s = false;
      function g() {
        s || (s = true, f.end());
      }
      function a() {
        s || (s = true, typeof f.destroy == "function" && f.destroy());
      }
      function E(w) {
        if (v(), n.listenerCount(this, "error") === 0) throw w;
      }
      l.on("error", E), f.on("error", E);
      function v() {
        l.removeListener("data", u), f.removeListener("drain", o), l.removeListener("end", g), l.removeListener("close", a), l.removeListener("error", E), f.removeListener("error", E), l.removeListener("end", v), l.removeListener("close", v), f.removeListener("close", v);
      }
      return l.on("end", v), l.on("close", v), f.on("close", v), f.emit("pipe", l), f;
    }, xc;
  }
  var Pc, fg;
  function g2() {
    if (fg) return Pc;
    fg = 1;
    var n = Kt().Buffer, d = y2().Transform, c = Zo().StringDecoder, f = bt(), _ = ad();
    function l(u) {
      d.call(this), this.hashMode = typeof u == "string", this.hashMode ? this[u] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null;
    }
    return f(l, d), l.prototype.update = function(u, o, s) {
      var g = _(u, o), a = this._update(g);
      return this.hashMode ? this : (s && (a = this._toString(a, s)), a);
    }, l.prototype.setAutoPadding = function() {
    }, l.prototype.getAuthTag = function() {
      throw new Error("trying to get auth tag in unsupported state");
    }, l.prototype.setAuthTag = function() {
      throw new Error("trying to set auth tag in unsupported state");
    }, l.prototype.setAAD = function() {
      throw new Error("trying to set aad in unsupported state");
    }, l.prototype._transform = function(u, o, s) {
      var g;
      try {
        this.hashMode ? this._update(u) : this.push(this._update(u));
      } catch (a) {
        g = a;
      } finally {
        s(g);
      }
    }, l.prototype._flush = function(u) {
      var o;
      try {
        this.push(this.__final());
      } catch (s) {
        o = s;
      }
      u(o);
    }, l.prototype._finalOrDigest = function(u) {
      var o = this.__final() || n.alloc(0);
      return u && (o = this._toString(o, u, true)), o;
    }, l.prototype._toString = function(u, o, s) {
      if (this._decoder || (this._decoder = new c(o), this._encoding = o), this._encoding !== o) throw new Error("can\u2019t switch encodings");
      var g = this._decoder.write(u);
      return s && (g += this._decoder.end()), g;
    }, Pc = l, Pc;
  }
  var kc, cg;
  function m2() {
    if (cg) return kc;
    cg = 1;
    var n = bt(), d = n2(), c = i2(), f = l2(), _ = g2();
    function l(u) {
      _.call(this, "digest"), this._hash = u;
    }
    return n(l, _), l.prototype._update = function(u) {
      this._hash.update(u);
    }, l.prototype._final = function() {
      return this._hash.digest();
    }, kc = function(o) {
      return o = o.toLowerCase(), o === "md5" ? new d() : o === "rmd160" || o === "ripemd160" ? new c() : new l(f(o));
    }, kc;
  }
  var Ac, dg;
  function v2() {
    if (dg) return Ac;
    dg = 1;
    var n = Kt().Buffer;
    function d(c) {
      if (c.length >= 255) throw new TypeError("Alphabet too long");
      for (var f = new Uint8Array(256), _ = 0; _ < f.length; _++) f[_] = 255;
      for (var l = 0; l < c.length; l++) {
        var u = c.charAt(l), o = u.charCodeAt(0);
        if (f[o] !== 255) throw new TypeError(u + " is ambiguous");
        f[o] = l;
      }
      var s = c.length, g = c.charAt(0), a = Math.log(s) / Math.log(256), E = Math.log(256) / Math.log(s);
      function v(p) {
        if ((Array.isArray(p) || p instanceof Uint8Array) && (p = n.from(p)), !n.isBuffer(p)) throw new TypeError("Expected Buffer");
        if (p.length === 0) return "";
        for (var A = 0, x = 0, k = 0, B = p.length; k !== B && p[k] === 0; ) k++, A++;
        for (var O = (B - k) * E + 1 >>> 0, U = new Uint8Array(O); k !== B; ) {
          for (var C = p[k], K = 0, X = O - 1; (C !== 0 || K < x) && X !== -1; X--, K++) C += 256 * U[X] >>> 0, U[X] = C % s >>> 0, C = C / s >>> 0;
          if (C !== 0) throw new Error("Non-zero carry");
          x = K, k++;
        }
        for (var Q = O - x; Q !== O && U[Q] === 0; ) Q++;
        for (var ae = g.repeat(A); Q < O; ++Q) ae += c.charAt(U[Q]);
        return ae;
      }
      function w(p) {
        if (typeof p != "string") throw new TypeError("Expected String");
        if (p.length === 0) return n.alloc(0);
        for (var A = 0, x = 0, k = 0; p[A] === g; ) x++, A++;
        for (var B = (p.length - A) * a + 1 >>> 0, O = new Uint8Array(B); A < p.length; ) {
          var U = p.charCodeAt(A);
          if (U > 255) return;
          var C = f[U];
          if (C === 255) return;
          for (var K = 0, X = B - 1; (C !== 0 || K < k) && X !== -1; X--, K++) C += s * O[X] >>> 0, O[X] = C % 256 >>> 0, C = C / 256 >>> 0;
          if (C !== 0) throw new Error("Non-zero carry");
          k = K, A++;
        }
        for (var Q = B - k; Q !== B && O[Q] === 0; ) Q++;
        var ae = n.allocUnsafe(x + (B - Q));
        ae.fill(0, 0, x);
        for (var Ee = x; Q !== B; ) ae[Ee++] = O[Q++];
        return ae;
      }
      function S(p) {
        var A = w(p);
        if (A) return A;
        throw new Error("Non-base" + s + " character");
      }
      return {
        encode: v,
        decodeUnsafe: w,
        decode: S
      };
    }
    return Ac = d, Ac;
  }
  var Ic, hg;
  function w2() {
    if (hg) return Ic;
    hg = 1;
    var n = v2(), d = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    return Ic = n(d), Ic;
  }
  var Bc, pg;
  function _2() {
    if (pg) return Bc;
    pg = 1;
    var n = w2(), d = Kt().Buffer;
    return Bc = function(c) {
      function f(o) {
        var s = c(o);
        return n.encode(d.concat([
          o,
          s
        ], o.length + 4));
      }
      function _(o) {
        var s = o.slice(0, -4), g = o.slice(-4), a = c(s);
        if (!(g[0] ^ a[0] | g[1] ^ a[1] | g[2] ^ a[2] | g[3] ^ a[3])) return s;
      }
      function l(o) {
        var s = n.decodeUnsafe(o);
        if (s) return _(s);
      }
      function u(o) {
        var s = n.decode(o), g = _(s);
        if (!g) throw new Error("Invalid checksum");
        return g;
      }
      return {
        encode: f,
        decode: u,
        decodeUnsafe: l
      };
    }, Bc;
  }
  var Oc, yg;
  function E2() {
    if (yg) return Oc;
    yg = 1;
    var n = m2(), d = _2();
    function c(f) {
      var _ = n("sha256").update(f).digest();
      return n("sha256").update(_).digest();
    }
    return Oc = d(c), Oc;
  }
  var Rc, gg;
  function S2() {
    if (gg) return Rc;
    gg = 1;
    var n = E2();
    function d(l, u) {
      if (u !== void 0 && l[0] !== u) throw new Error("Invalid network version");
      if (l.length === 33) return {
        version: l[0],
        privateKey: l.slice(1, 33),
        compressed: false
      };
      if (l.length !== 34) throw new Error("Invalid WIF length");
      if (l[33] !== 1) throw new Error("Invalid compression flag");
      return {
        version: l[0],
        privateKey: l.slice(1, 33),
        compressed: true
      };
    }
    function c(l, u, o) {
      var s = new ne(o ? 34 : 33);
      return s.writeUInt8(l, 0), u.copy(s, 1), o && (s[33] = 1), s;
    }
    function f(l, u) {
      return d(n.decode(l), u);
    }
    function _(l, u, o) {
      return typeof l == "number" ? n.encode(c(l, u, o)) : n.encode(c(l.version, l.privateKey, l.compressed));
    }
    return Rc = {
      decode: f,
      decodeRaw: d,
      encode: _,
      encodeRaw: c
    }, Rc;
  }
  var Fo = {}, mg;
  function b2() {
    if (mg) return Fo;
    mg = 1, Object.defineProperty(Fo, "__esModule", {
      value: true
    }), Fo.testEcc = void 0;
    const n = (f) => ne.from(f, "hex");
    function d(f) {
      c(f.isPoint(n("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))), c(!f.isPoint(n("030000000000000000000000000000000000000000000000000000000000000005"))), c(f.isPrivate(n("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))), c(f.isPrivate(n("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"))), c(!f.isPrivate(n("0000000000000000000000000000000000000000000000000000000000000000"))), c(!f.isPrivate(n("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"))), c(!f.isPrivate(n("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364142"))), c(ne.from(f.privateAdd(n("0000000000000000000000000000000000000000000000000000000000000001"), n("0000000000000000000000000000000000000000000000000000000000000000"))).equals(n("0000000000000000000000000000000000000000000000000000000000000001"))), c(f.privateAdd(n("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036413e"), n("0000000000000000000000000000000000000000000000000000000000000003")) === null), c(ne.from(f.privateAdd(n("e211078564db65c3ce7704f08262b1f38f1ef412ad15b5ac2d76657a63b2c500"), n("b51fbb69051255d1becbd683de5848242a89c229348dd72896a87ada94ae8665"))).equals(n("9730c2ee69edbb958d42db7460bafa18fef9d955325aec99044c81c8282b0a24"))), c(ne.from(f.privateNegate(n("0000000000000000000000000000000000000000000000000000000000000001"))).equals(n("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"))), c(ne.from(f.privateNegate(n("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036413e"))).equals(n("0000000000000000000000000000000000000000000000000000000000000003"))), c(ne.from(f.privateNegate(n("b1121e4088a66a28f5b6b0f5844943ecd9f610196d7bb83b25214b60452c09af"))).equals(n("4eede1bf775995d70a494f0a7bb6bc11e0b8cccd41cce8009ab1132c8b0a3792"))), c(ne.from(f.pointCompress(n("0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"), true)).equals(n("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))), c(ne.from(f.pointCompress(n("0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"), false)).equals(n("0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"))), c(ne.from(f.pointCompress(n("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), true)).equals(n("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))), c(ne.from(f.pointCompress(n("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), false)).equals(n("0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"))), c(ne.from(f.pointFromScalar(n("b1121e4088a66a28f5b6b0f5844943ecd9f610196d7bb83b25214b60452c09af"))).equals(n("02b07ba9dca9523b7ef4bd97703d43d20399eb698e194704791a25ce77a400df99"))), c(f.xOnlyPointAddTweak(n("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), n("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140")) === null);
      let _ = f.xOnlyPointAddTweak(n("1617d38ed8d8657da4d4761e8057bc396ea9e4b9d29776d4be096016dbd2509b"), n("a8397a935f0dfceba6ba9618f6451ef4d80637abf4e6af2669fbc9de6a8fd2ac"));
      c(ne.from(_.xOnlyPubkey).equals(n("e478f99dab91052ab39a33ea35fd5e6e4933f4d28023cd597c9a1f6760346adf")) && _.parity === 1), _ = f.xOnlyPointAddTweak(n("2c0b7cf95324a07d05398b240174dc0c2be444d96b159aa6c7f7b1e668680991"), n("823c3cd2142744b075a87eade7e1b8678ba308d566226a0056ca2b7a76f86b47")), c(ne.from(_.xOnlyPubkey).equals(n("9534f8dc8c6deda2dc007655981c78b49c5d96c778fbf363462a11ec9dfd948c")) && _.parity === 0), c(ne.from(f.sign(n("5e9f0a0d593efdcf78ac923bc3313e4e7d408d574354ee2b3288c0da9fbba6ed"), n("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"))).equals(n("54c4a33c6423d689378f160a7ff8b61330444abb58fb470f96ea16d99d4a2fed07082304410efa6b2943111b6a4e0aaa7b7db55a07e9861d1fb3cb1f421044a5"))), c(f.verify(n("5e9f0a0d593efdcf78ac923bc3313e4e7d408d574354ee2b3288c0da9fbba6ed"), n("0379be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), n("54c4a33c6423d689378f160a7ff8b61330444abb58fb470f96ea16d99d4a2fed07082304410efa6b2943111b6a4e0aaa7b7db55a07e9861d1fb3cb1f421044a5"))), f.signSchnorr && c(ne.from(f.signSchnorr(n("7e2d58d8b3bcdf1abadec7829054f90dda9805aab56c77333024b9d0a508b75c"), n("c90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b14e5c9"), n("c87aa53824b4d7ae2eb035a2b5bbbccc080e76cdc6d1692c4b0b62d798e6d906"))).equals(n("5831aaeed7b44bb74e5eab94ba9d4294c49bcf2a60728d8b4c200f50dd313c1bab745879a5ad954a72c45a91c3a51d3c7adea98d82f8481e0e1e03674a6f3fb7"))), f.verifySchnorr && c(f.verifySchnorr(n("7e2d58d8b3bcdf1abadec7829054f90dda9805aab56c77333024b9d0a508b75c"), n("dd308afec5777e13121fa72b9cc1b7cc0139715309b086c960e18fd969774eb8"), n("5831aaeed7b44bb74e5eab94ba9d4294c49bcf2a60728d8b4c200f50dd313c1bab745879a5ad954a72c45a91c3a51d3c7adea98d82f8481e0e1e03674a6f3fb7")));
    }
    Fo.testEcc = d;
    function c(f) {
      if (!f) throw new Error("ecc library invalid");
    }
    return Fo;
  }
  var vg;
  function T2() {
    if (vg) return ri;
    vg = 1, Object.defineProperty(ri, "__esModule", {
      value: true
    }), ri.ECPairFactory = ri.networks = void 0;
    const n = u_();
    ri.networks = n;
    const d = f_(), c = y_(), f = S2(), _ = b2(), l = d.typeforce.maybe(d.typeforce.compile({
      compressed: d.maybe(d.Boolean),
      network: d.maybe(d.Network)
    })), u = (s) => s.length === 32 ? s : s.slice(1, 33);
    function o(s) {
      (0, _.testEcc)(s);
      function g(p) {
        return s.isPoint(p);
      }
      function a(p, A) {
        if (d.typeforce(d.Buffer256bit, p), !s.isPrivate(p)) throw new TypeError("Private key not in range [1, n)");
        return d.typeforce(l, A), new S(p, void 0, A);
      }
      function E(p, A) {
        return d.typeforce(s.isPoint, p), d.typeforce(l, A), new S(void 0, p, A);
      }
      function v(p, A) {
        const x = f.decode(p), k = x.version;
        if (d.Array(A)) {
          if (A = A.filter((B) => k === B.wif).pop(), !A) throw new Error("Unknown network version");
        } else if (A = A || n.bitcoin, k !== A.wif) throw new Error("Invalid network version");
        return a(x.privateKey, {
          compressed: x.compressed,
          network: A
        });
      }
      function w(p) {
        d.typeforce(l, p), p === void 0 && (p = {});
        const A = p.rng || c;
        let x;
        do
          x = A(32), d.typeforce(d.Buffer256bit, x);
        while (!s.isPrivate(x));
        return a(x, p);
      }
      class S {
        constructor(A, x, k) {
          __publicField(this, "__D");
          __publicField(this, "__Q");
          __publicField(this, "compressed");
          __publicField(this, "network");
          __publicField(this, "lowR");
          this.__D = A, this.__Q = x, this.lowR = false, k === void 0 && (k = {}), this.compressed = k.compressed === void 0 ? true : k.compressed, this.network = k.network || n.bitcoin, x !== void 0 && (this.__Q = ne.from(s.pointCompress(x, this.compressed)));
        }
        get privateKey() {
          return this.__D;
        }
        get publicKey() {
          if (!this.__Q) {
            const A = s.pointFromScalar(this.__D, this.compressed);
            this.__Q = ne.from(A);
          }
          return this.__Q;
        }
        toWIF() {
          if (!this.__D) throw new Error("Missing private key");
          return f.encode(this.network.wif, this.__D, this.compressed);
        }
        tweak(A) {
          return this.privateKey ? this.tweakFromPrivateKey(A) : this.tweakFromPublicKey(A);
        }
        sign(A, x) {
          if (!this.__D) throw new Error("Missing private key");
          if (x === void 0 && (x = this.lowR), x === false) return ne.from(s.sign(A, this.__D));
          {
            let k = s.sign(A, this.__D);
            const B = ne.alloc(32, 0);
            let O = 0;
            for (; k[0] > 127; ) O++, B.writeUIntLE(O, 0, 6), k = s.sign(A, this.__D, B);
            return ne.from(k);
          }
        }
        signSchnorr(A) {
          if (!this.privateKey) throw new Error("Missing private key");
          if (!s.signSchnorr) throw new Error("signSchnorr not supported by ecc library");
          return ne.from(s.signSchnorr(A, this.privateKey));
        }
        verify(A, x) {
          return s.verify(A, this.publicKey, x);
        }
        verifySchnorr(A, x) {
          if (!s.verifySchnorr) throw new Error("verifySchnorr not supported by ecc library");
          return s.verifySchnorr(A, this.publicKey.subarray(1, 33), x);
        }
        tweakFromPublicKey(A) {
          const x = u(this.publicKey), k = s.xOnlyPointAddTweak(x, A);
          if (!k || k.xOnlyPubkey === null) throw new Error("Cannot tweak public key!");
          const B = ne.from([
            k.parity === 0 ? 2 : 3
          ]);
          return E(ne.concat([
            B,
            k.xOnlyPubkey
          ]), {
            network: this.network,
            compressed: this.compressed
          });
        }
        tweakFromPrivateKey(A) {
          const k = this.publicKey[0] === 3 || this.publicKey[0] === 4 && (this.publicKey[64] & 1) === 1 ? s.privateNegate(this.privateKey) : this.privateKey, B = s.privateAdd(k, A);
          if (!B) throw new Error("Invalid tweaked private key!");
          return a(ne.from(B), {
            network: this.network,
            compressed: this.compressed
          });
        }
      }
      return {
        isPoint: g,
        fromPrivateKey: a,
        fromPublicKey: E,
        fromWIF: v,
        makeRandom: w
      };
    }
    return ri.ECPairFactory = o, ri;
  }
  var wg;
  function x2() {
    return wg || (wg = 1, (function(n) {
      Object.defineProperty(n, "__esModule", {
        value: true
      }), n.networks = n.ECPairFactory = n.default = void 0;
      var d = T2();
      Object.defineProperty(n, "default", {
        enumerable: true,
        get: function() {
          return d.ECPairFactory;
        }
      }), Object.defineProperty(n, "ECPairFactory", {
        enumerable: true,
        get: function() {
          return d.ECPairFactory;
        }
      }), Object.defineProperty(n, "networks", {
        enumerable: true,
        get: function() {
          return d.networks;
        }
      });
    })(Bl)), Bl;
  }
  var P2 = x2();
  const k2 = Jm(P2);
  var Cc = {}, $t = {}, Jr = {}, _g;
  function Rr() {
    return _g || (_g = 1, Object.defineProperty(Jr, "__esModule", {
      value: true
    }), Jr.testnet = Jr.regtest = Jr.bitcoin = void 0, Jr.bitcoin = {
      messagePrefix: `Bitcoin Signed Message:
`,
      bech32: "bc",
      bip32: {
        public: 76067358,
        private: 76066276
      },
      pubKeyHash: 0,
      scriptHash: 5,
      wif: 128
    }, Jr.regtest = {
      messagePrefix: `Bitcoin Signed Message:
`,
      bech32: "bcrt",
      bip32: {
        public: 70617039,
        private: 70615956
      },
      pubKeyHash: 111,
      scriptHash: 196,
      wif: 239
    }, Jr.testnet = {
      messagePrefix: `Bitcoin Signed Message:
`,
      bech32: "tb",
      bip32: {
        public: 70617039,
        private: 70615956
      },
      pubKeyHash: 111,
      scriptHash: 196,
      wif: 239
    }), Jr;
  }
  var Nc = {}, Lo = {}, Uc = {}, Zr = {}, Eg;
  function Ov() {
    if (Eg) return Zr;
    Eg = 1, Object.defineProperty(Zr, "__esModule", {
      value: true
    }), Zr.encode = Zr.decode = Zr.check = void 0;
    function n(f) {
      if (f.length < 8 || f.length > 72 || f[0] !== 48 || f[1] !== f.length - 2 || f[2] !== 2) return false;
      const _ = f[3];
      if (_ === 0 || 5 + _ >= f.length || f[4 + _] !== 2) return false;
      const l = f[5 + _];
      return !(l === 0 || 6 + _ + l !== f.length || f[4] & 128 || _ > 1 && f[4] === 0 && !(f[5] & 128) || f[_ + 6] & 128 || l > 1 && f[_ + 6] === 0 && !(f[_ + 7] & 128));
    }
    Zr.check = n;
    function d(f) {
      if (f.length < 8) throw new Error("DER sequence length is too short");
      if (f.length > 72) throw new Error("DER sequence length is too long");
      if (f[0] !== 48) throw new Error("Expected DER sequence");
      if (f[1] !== f.length - 2) throw new Error("DER sequence length is invalid");
      if (f[2] !== 2) throw new Error("Expected DER integer");
      const _ = f[3];
      if (_ === 0) throw new Error("R length is zero");
      if (5 + _ >= f.length) throw new Error("R length is too long");
      if (f[4 + _] !== 2) throw new Error("Expected DER integer (2)");
      const l = f[5 + _];
      if (l === 0) throw new Error("S length is zero");
      if (6 + _ + l !== f.length) throw new Error("S length is invalid");
      if (f[4] & 128) throw new Error("R value is negative");
      if (_ > 1 && f[4] === 0 && !(f[5] & 128)) throw new Error("R value excessively padded");
      if (f[_ + 6] & 128) throw new Error("S value is negative");
      if (l > 1 && f[_ + 6] === 0 && !(f[_ + 7] & 128)) throw new Error("S value excessively padded");
      return {
        r: f.slice(4, 4 + _),
        s: f.slice(6 + _)
      };
    }
    Zr.decode = d;
    function c(f, _) {
      const l = f.length, u = _.length;
      if (l === 0) throw new Error("R length is zero");
      if (u === 0) throw new Error("S length is zero");
      if (l > 33) throw new Error("R length is too long");
      if (u > 33) throw new Error("S length is too long");
      if (f[0] & 128) throw new Error("R value is negative");
      if (_[0] & 128) throw new Error("S value is negative");
      if (l > 1 && f[0] === 0 && !(f[1] & 128)) throw new Error("R value excessively padded");
      if (u > 1 && _[0] === 0 && !(_[1] & 128)) throw new Error("S value excessively padded");
      const o = ne.allocUnsafe(6 + l + u);
      return o[0] = 48, o[1] = o.length - 2, o[2] = 2, o[3] = f.length, f.copy(o, 4), o[4 + l] = 2, o[5 + l] = _.length, _.copy(o, 6 + l), o;
    }
    return Zr.encode = c, Zr;
  }
  var ii = {}, Sg;
  function ld() {
    if (Sg) return ii;
    Sg = 1, Object.defineProperty(ii, "__esModule", {
      value: true
    }), ii.REVERSE_OPS = ii.OPS = void 0;
    const n = {
      OP_FALSE: 0,
      OP_0: 0,
      OP_PUSHDATA1: 76,
      OP_PUSHDATA2: 77,
      OP_PUSHDATA4: 78,
      OP_1NEGATE: 79,
      OP_RESERVED: 80,
      OP_TRUE: 81,
      OP_1: 81,
      OP_2: 82,
      OP_3: 83,
      OP_4: 84,
      OP_5: 85,
      OP_6: 86,
      OP_7: 87,
      OP_8: 88,
      OP_9: 89,
      OP_10: 90,
      OP_11: 91,
      OP_12: 92,
      OP_13: 93,
      OP_14: 94,
      OP_15: 95,
      OP_16: 96,
      OP_NOP: 97,
      OP_VER: 98,
      OP_IF: 99,
      OP_NOTIF: 100,
      OP_VERIF: 101,
      OP_VERNOTIF: 102,
      OP_ELSE: 103,
      OP_ENDIF: 104,
      OP_VERIFY: 105,
      OP_RETURN: 106,
      OP_TOALTSTACK: 107,
      OP_FROMALTSTACK: 108,
      OP_2DROP: 109,
      OP_2DUP: 110,
      OP_3DUP: 111,
      OP_2OVER: 112,
      OP_2ROT: 113,
      OP_2SWAP: 114,
      OP_IFDUP: 115,
      OP_DEPTH: 116,
      OP_DROP: 117,
      OP_DUP: 118,
      OP_NIP: 119,
      OP_OVER: 120,
      OP_PICK: 121,
      OP_ROLL: 122,
      OP_ROT: 123,
      OP_SWAP: 124,
      OP_TUCK: 125,
      OP_CAT: 126,
      OP_SUBSTR: 127,
      OP_LEFT: 128,
      OP_RIGHT: 129,
      OP_SIZE: 130,
      OP_INVERT: 131,
      OP_AND: 132,
      OP_OR: 133,
      OP_XOR: 134,
      OP_EQUAL: 135,
      OP_EQUALVERIFY: 136,
      OP_RESERVED1: 137,
      OP_RESERVED2: 138,
      OP_1ADD: 139,
      OP_1SUB: 140,
      OP_2MUL: 141,
      OP_2DIV: 142,
      OP_NEGATE: 143,
      OP_ABS: 144,
      OP_NOT: 145,
      OP_0NOTEQUAL: 146,
      OP_ADD: 147,
      OP_SUB: 148,
      OP_MUL: 149,
      OP_DIV: 150,
      OP_MOD: 151,
      OP_LSHIFT: 152,
      OP_RSHIFT: 153,
      OP_BOOLAND: 154,
      OP_BOOLOR: 155,
      OP_NUMEQUAL: 156,
      OP_NUMEQUALVERIFY: 157,
      OP_NUMNOTEQUAL: 158,
      OP_LESSTHAN: 159,
      OP_GREATERTHAN: 160,
      OP_LESSTHANOREQUAL: 161,
      OP_GREATERTHANOREQUAL: 162,
      OP_MIN: 163,
      OP_MAX: 164,
      OP_WITHIN: 165,
      OP_RIPEMD160: 166,
      OP_SHA1: 167,
      OP_SHA256: 168,
      OP_HASH160: 169,
      OP_HASH256: 170,
      OP_CODESEPARATOR: 171,
      OP_CHECKSIG: 172,
      OP_CHECKSIGVERIFY: 173,
      OP_CHECKMULTISIG: 174,
      OP_CHECKMULTISIGVERIFY: 175,
      OP_NOP1: 176,
      OP_NOP2: 177,
      OP_CHECKLOCKTIMEVERIFY: 177,
      OP_NOP3: 178,
      OP_CHECKSEQUENCEVERIFY: 178,
      OP_NOP4: 179,
      OP_NOP5: 180,
      OP_NOP6: 181,
      OP_NOP7: 182,
      OP_NOP8: 183,
      OP_NOP9: 184,
      OP_NOP10: 185,
      OP_CHECKSIGADD: 186,
      OP_PUBKEYHASH: 253,
      OP_PUBKEY: 254,
      OP_INVALIDOPCODE: 255
    };
    ii.OPS = n;
    const d = {};
    ii.REVERSE_OPS = d;
    for (const c of Object.keys(n)) {
      const f = n[c];
      d[f] = c;
    }
    return ii;
  }
  var $r = {}, bg;
  function A2() {
    if (bg) return $r;
    bg = 1, Object.defineProperty($r, "__esModule", {
      value: true
    }), $r.decode = $r.encode = $r.encodingLength = void 0;
    const n = ld();
    function d(_) {
      return _ < n.OPS.OP_PUSHDATA1 ? 1 : _ <= 255 ? 2 : _ <= 65535 ? 3 : 5;
    }
    $r.encodingLength = d;
    function c(_, l, u) {
      const o = d(l);
      return o === 1 ? _.writeUInt8(l, u) : o === 2 ? (_.writeUInt8(n.OPS.OP_PUSHDATA1, u), _.writeUInt8(l, u + 1)) : o === 3 ? (_.writeUInt8(n.OPS.OP_PUSHDATA2, u), _.writeUInt16LE(l, u + 1)) : (_.writeUInt8(n.OPS.OP_PUSHDATA4, u), _.writeUInt32LE(l, u + 1)), o;
    }
    $r.encode = c;
    function f(_, l) {
      const u = _.readUInt8(l);
      let o, s;
      if (u < n.OPS.OP_PUSHDATA1) o = u, s = 1;
      else if (u === n.OPS.OP_PUSHDATA1) {
        if (l + 2 > _.length) return null;
        o = _.readUInt8(l + 1), s = 2;
      } else if (u === n.OPS.OP_PUSHDATA2) {
        if (l + 3 > _.length) return null;
        o = _.readUInt16LE(l + 1), s = 3;
      } else {
        if (l + 5 > _.length) return null;
        if (u !== n.OPS.OP_PUSHDATA4) throw new Error("Unexpected opcode");
        o = _.readUInt32LE(l + 1), s = 5;
      }
      return {
        opcode: u,
        number: o,
        size: s
      };
    }
    return $r.decode = f, $r;
  }
  var oi = {}, Tg;
  function I2() {
    if (Tg) return oi;
    Tg = 1, Object.defineProperty(oi, "__esModule", {
      value: true
    }), oi.encode = oi.decode = void 0;
    function n(f, _, l) {
      _ = _ || 4, l = l === void 0 ? true : l;
      const u = f.length;
      if (u === 0) return 0;
      if (u > _) throw new TypeError("Script number overflow");
      if (l && (f[u - 1] & 127) === 0 && (u <= 1 || (f[u - 2] & 128) === 0)) throw new Error("Non-minimally encoded script number");
      if (u === 5) {
        const s = f.readUInt32LE(0), g = f.readUInt8(4);
        return g & 128 ? -((g & -129) * 4294967296 + s) : g * 4294967296 + s;
      }
      let o = 0;
      for (let s = 0; s < u; ++s) o |= f[s] << 8 * s;
      return f[u - 1] & 128 ? -(o & ~(128 << 8 * (u - 1))) : o;
    }
    oi.decode = n;
    function d(f) {
      return f > 2147483647 ? 5 : f > 8388607 ? 4 : f > 32767 ? 3 : f > 127 ? 2 : f > 0 ? 1 : 0;
    }
    function c(f) {
      let _ = Math.abs(f);
      const l = d(_), u = ne.allocUnsafe(l), o = f < 0;
      for (let s = 0; s < l; ++s) u.writeUInt8(_ & 255, s), _ >>= 8;
      return u[l - 1] & 128 ? u.writeUInt8(o ? 128 : 0, l - 1) : o && (u[l - 1] |= 128), u;
    }
    return oi.encode = c, oi;
  }
  var ai = {}, Fc = {}, xg;
  function Qt() {
    return xg || (xg = 1, (function(n) {
      Object.defineProperty(n, "__esModule", {
        value: true
      }), n.oneOf = n.Null = n.BufferN = n.Function = n.UInt32 = n.UInt8 = n.tuple = n.maybe = n.Hex = n.Buffer = n.String = n.Boolean = n.Array = n.Number = n.Hash256bit = n.Hash160bit = n.Buffer256bit = n.isTaptree = n.isTapleaf = n.TAPLEAF_VERSION_MASK = n.Satoshi = n.isPoint = n.stacksEqual = n.typeforce = void 0;
      const d = qr();
      n.typeforce = tv();
      const c = d.Buffer.alloc(32, 0), f = d.Buffer.from("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f", "hex");
      function _(a, E) {
        return a.length !== E.length ? false : a.every((v, w) => v.equals(E[w]));
      }
      n.stacksEqual = _;
      function l(a) {
        if (!d.Buffer.isBuffer(a) || a.length < 33) return false;
        const E = a[0], v = a.slice(1, 33);
        if (v.compare(c) === 0 || v.compare(f) >= 0) return false;
        if ((E === 2 || E === 3) && a.length === 33) return true;
        const w = a.slice(33);
        return w.compare(c) === 0 || w.compare(f) >= 0 ? false : E === 4 && a.length === 65;
      }
      n.isPoint = l;
      const u = 21 * 1e14;
      function o(a) {
        return n.typeforce.UInt53(a) && a <= u;
      }
      n.Satoshi = o, n.TAPLEAF_VERSION_MASK = 254;
      function s(a) {
        return !a || !("output" in a) || !d.Buffer.isBuffer(a.output) ? false : a.version !== void 0 ? (a.version & n.TAPLEAF_VERSION_MASK) === a.version : true;
      }
      n.isTapleaf = s;
      function g(a) {
        return (0, n.Array)(a) ? a.length !== 2 ? false : a.every((E) => g(E)) : s(a);
      }
      n.isTaptree = g, n.Buffer256bit = n.typeforce.BufferN(32), n.Hash160bit = n.typeforce.BufferN(20), n.Hash256bit = n.typeforce.BufferN(32), n.Number = n.typeforce.Number, n.Array = n.typeforce.Array, n.Boolean = n.typeforce.Boolean, n.String = n.typeforce.String, n.Buffer = n.typeforce.Buffer, n.Hex = n.typeforce.Hex, n.maybe = n.typeforce.maybe, n.tuple = n.typeforce.tuple, n.UInt8 = n.typeforce.UInt8, n.UInt32 = n.typeforce.UInt32, n.Function = n.typeforce.Function, n.BufferN = n.typeforce.BufferN, n.Null = n.typeforce.Null, n.oneOf = n.typeforce.oneOf;
    })(Fc)), Fc;
  }
  var Pg;
  function B2() {
    if (Pg) return ai;
    Pg = 1, Object.defineProperty(ai, "__esModule", {
      value: true
    }), ai.encode = ai.decode = void 0;
    const n = Ov(), d = er(), c = Qt(), { typeforce: f } = c, _ = ne.alloc(1, 0);
    function l(g) {
      let a = 0;
      for (; g[a] === 0; ) ++a;
      return a === g.length ? _ : (g = g.slice(a), g[0] & 128 ? ne.concat([
        _,
        g
      ], 1 + g.length) : g);
    }
    function u(g) {
      g[0] === 0 && (g = g.slice(1));
      const a = ne.alloc(32, 0), E = Math.max(0, 32 - g.length);
      return g.copy(a, E), a;
    }
    function o(g) {
      const a = g.readUInt8(g.length - 1);
      if (!(0, d.isDefinedHashType)(a)) throw new Error("Invalid hashType " + a);
      const E = n.decode(g.slice(0, -1)), v = u(E.r), w = u(E.s);
      return {
        signature: ne.concat([
          v,
          w
        ], 64),
        hashType: a
      };
    }
    ai.decode = o;
    function s(g, a) {
      if (f({
        signature: c.BufferN(64),
        hashType: c.UInt8
      }, {
        signature: g,
        hashType: a
      }), !(0, d.isDefinedHashType)(a)) throw new Error("Invalid hashType " + a);
      const E = ne.allocUnsafe(1);
      E.writeUInt8(a, 0);
      const v = l(g.slice(0, 32)), w = l(g.slice(32, 64));
      return ne.concat([
        n.encode(v, w),
        E
      ]);
    }
    return ai.encode = s, ai;
  }
  var kg;
  function er() {
    return kg || (kg = 1, (function(n) {
      Object.defineProperty(n, "__esModule", {
        value: true
      }), n.signature = n.number = n.isCanonicalScriptSignature = n.isDefinedHashType = n.isCanonicalPubKey = n.toStack = n.fromASM = n.toASM = n.decompile = n.compile = n.countNonPushOnlyOPs = n.isPushOnly = n.OPS = void 0;
      const d = Ov(), c = ld();
      Object.defineProperty(n, "OPS", {
        enumerable: true,
        get: function() {
          return c.OPS;
        }
      });
      const f = A2(), _ = I2(), l = B2(), u = Qt(), { typeforce: o } = u, s = c.OPS.OP_RESERVED;
      function g(Q) {
        return u.Number(Q) && (Q === c.OPS.OP_0 || Q >= c.OPS.OP_1 && Q <= c.OPS.OP_16 || Q === c.OPS.OP_1NEGATE);
      }
      function a(Q) {
        return u.Buffer(Q) || g(Q);
      }
      function E(Q) {
        return u.Array(Q) && Q.every(a);
      }
      n.isPushOnly = E;
      function v(Q) {
        return Q.length - Q.filter(a).length;
      }
      n.countNonPushOnlyOPs = v;
      function w(Q) {
        if (Q.length === 0) return c.OPS.OP_0;
        if (Q.length === 1) {
          if (Q[0] >= 1 && Q[0] <= 16) return s + Q[0];
          if (Q[0] === 129) return c.OPS.OP_1NEGATE;
        }
      }
      function S(Q) {
        return ne.isBuffer(Q);
      }
      function p(Q) {
        return u.Array(Q);
      }
      function A(Q) {
        return ne.isBuffer(Q);
      }
      function x(Q) {
        if (S(Q)) return Q;
        o(u.Array, Q);
        const ae = Q.reduce((ye, Te) => A(Te) ? Te.length === 1 && w(Te) !== void 0 ? ye + 1 : ye + f.encodingLength(Te.length) + Te.length : ye + 1, 0), Ee = ne.allocUnsafe(ae);
        let W = 0;
        if (Q.forEach((ye) => {
          if (A(ye)) {
            const Te = w(ye);
            if (Te !== void 0) {
              Ee.writeUInt8(Te, W), W += 1;
              return;
            }
            W += f.encode(Ee, ye.length, W), ye.copy(Ee, W), W += ye.length;
          } else Ee.writeUInt8(ye, W), W += 1;
        }), W !== Ee.length) throw new Error("Could not decode chunks");
        return Ee;
      }
      n.compile = x;
      function k(Q) {
        if (p(Q)) return Q;
        o(u.Buffer, Q);
        const ae = [];
        let Ee = 0;
        for (; Ee < Q.length; ) {
          const W = Q[Ee];
          if (W > c.OPS.OP_0 && W <= c.OPS.OP_PUSHDATA4) {
            const ye = f.decode(Q, Ee);
            if (ye === null || (Ee += ye.size, Ee + ye.number > Q.length)) return null;
            const Te = Q.slice(Ee, Ee + ye.number);
            Ee += ye.number;
            const Ie = w(Te);
            Ie !== void 0 ? ae.push(Ie) : ae.push(Te);
          } else ae.push(W), Ee += 1;
        }
        return ae;
      }
      n.decompile = k;
      function B(Q) {
        if (S(Q) && (Q = k(Q)), !Q) throw new Error("Could not convert invalid chunks to ASM");
        return Q.map((ae) => {
          if (A(ae)) {
            const Ee = w(ae);
            if (Ee === void 0) return ae.toString("hex");
            ae = Ee;
          }
          return c.REVERSE_OPS[ae];
        }).join(" ");
      }
      n.toASM = B;
      function O(Q) {
        return o(u.String, Q), x(Q.split(" ").map((ae) => c.OPS[ae] !== void 0 ? c.OPS[ae] : (o(u.Hex, ae), ne.from(ae, "hex"))));
      }
      n.fromASM = O;
      function U(Q) {
        return Q = k(Q), o(E, Q), Q.map((ae) => A(ae) ? ae : ae === c.OPS.OP_0 ? ne.allocUnsafe(0) : _.encode(ae - s));
      }
      n.toStack = U;
      function C(Q) {
        return u.isPoint(Q);
      }
      n.isCanonicalPubKey = C;
      function K(Q) {
        const ae = Q & -129;
        return ae > 0 && ae < 4;
      }
      n.isDefinedHashType = K;
      function X(Q) {
        return !ne.isBuffer(Q) || !K(Q[Q.length - 1]) ? false : d.check(Q.slice(0, -1));
      }
      n.isCanonicalScriptSignature = X, n.number = _, n.signature = l;
    })(Uc)), Uc;
  }
  var si = {}, Ag;
  function Hn() {
    if (Ag) return si;
    Ag = 1, Object.defineProperty(si, "__esModule", {
      value: true
    }), si.value = si.prop = void 0;
    function n(c, f, _) {
      Object.defineProperty(c, f, {
        configurable: true,
        enumerable: true,
        get() {
          const l = _.call(this);
          return this[f] = l, l;
        },
        set(l) {
          Object.defineProperty(this, f, {
            configurable: true,
            enumerable: true,
            value: l,
            writable: true
          });
        }
      });
    }
    si.prop = n;
    function d(c) {
      let f;
      return () => (f !== void 0 || (f = c()), f);
    }
    return si.value = d, si;
  }
  var Ig;
  function O2() {
    if (Ig) return Lo;
    Ig = 1, Object.defineProperty(Lo, "__esModule", {
      value: true
    }), Lo.p2data = void 0;
    const n = Rr(), d = er(), c = Qt(), f = Hn(), _ = d.OPS;
    function l(u, o) {
      if (!u.data && !u.output) throw new TypeError("Not enough data");
      o = Object.assign({
        validate: true
      }, o || {}), (0, c.typeforce)({
        network: c.typeforce.maybe(c.typeforce.Object),
        output: c.typeforce.maybe(c.typeforce.Buffer),
        data: c.typeforce.maybe(c.typeforce.arrayOf(c.typeforce.Buffer))
      }, u);
      const g = {
        name: "embed",
        network: u.network || n.bitcoin
      };
      if (f.prop(g, "output", () => {
        if (u.data) return d.compile([
          _.OP_RETURN
        ].concat(u.data));
      }), f.prop(g, "data", () => {
        if (u.output) return d.decompile(u.output).slice(1);
      }), o.validate && u.output) {
        const a = d.decompile(u.output);
        if (a[0] !== _.OP_RETURN) throw new TypeError("Output is invalid");
        if (!a.slice(1).every(c.typeforce.Buffer)) throw new TypeError("Output is invalid");
        if (u.data && !(0, c.stacksEqual)(u.data, g.data)) throw new TypeError("Data mismatch");
      }
      return Object.assign(g, u);
    }
    return Lo.p2data = l, Lo;
  }
  var Mo = {}, Bg;
  function R2() {
    if (Bg) return Mo;
    Bg = 1, Object.defineProperty(Mo, "__esModule", {
      value: true
    }), Mo.p2ms = void 0;
    const n = Rr(), d = er(), c = Qt(), f = Hn(), _ = d.OPS, l = _.OP_RESERVED;
    function u(o, s) {
      if (!o.input && !o.output && !(o.pubkeys && o.m !== void 0) && !o.signatures) throw new TypeError("Not enough data");
      s = Object.assign({
        validate: true
      }, s || {});
      function g(p) {
        return d.isCanonicalScriptSignature(p) || (s.allowIncomplete && p === _.OP_0) !== void 0;
      }
      (0, c.typeforce)({
        network: c.typeforce.maybe(c.typeforce.Object),
        m: c.typeforce.maybe(c.typeforce.Number),
        n: c.typeforce.maybe(c.typeforce.Number),
        output: c.typeforce.maybe(c.typeforce.Buffer),
        pubkeys: c.typeforce.maybe(c.typeforce.arrayOf(c.isPoint)),
        signatures: c.typeforce.maybe(c.typeforce.arrayOf(g)),
        input: c.typeforce.maybe(c.typeforce.Buffer)
      }, o);
      const E = {
        network: o.network || n.bitcoin
      };
      let v = [], w = false;
      function S(p) {
        w || (w = true, v = d.decompile(p), E.m = v[0] - l, E.n = v[v.length - 2] - l, E.pubkeys = v.slice(1, -2));
      }
      if (f.prop(E, "output", () => {
        if (o.m && E.n && o.pubkeys) return d.compile([].concat(l + o.m, o.pubkeys, l + E.n, _.OP_CHECKMULTISIG));
      }), f.prop(E, "m", () => {
        if (E.output) return S(E.output), E.m;
      }), f.prop(E, "n", () => {
        if (E.pubkeys) return E.pubkeys.length;
      }), f.prop(E, "pubkeys", () => {
        if (o.output) return S(o.output), E.pubkeys;
      }), f.prop(E, "signatures", () => {
        if (o.input) return d.decompile(o.input).slice(1);
      }), f.prop(E, "input", () => {
        if (o.signatures) return d.compile([
          _.OP_0
        ].concat(o.signatures));
      }), f.prop(E, "witness", () => {
        if (E.input) return [];
      }), f.prop(E, "name", () => {
        if (!(!E.m || !E.n)) return `p2ms(${E.m} of ${E.n})`;
      }), s.validate) {
        if (o.output) {
          if (S(o.output), !c.typeforce.Number(v[0])) throw new TypeError("Output is invalid");
          if (!c.typeforce.Number(v[v.length - 2])) throw new TypeError("Output is invalid");
          if (v[v.length - 1] !== _.OP_CHECKMULTISIG) throw new TypeError("Output is invalid");
          if (E.m <= 0 || E.n > 16 || E.m > E.n || E.n !== v.length - 3) throw new TypeError("Output is invalid");
          if (!E.pubkeys.every((p) => (0, c.isPoint)(p))) throw new TypeError("Output is invalid");
          if (o.m !== void 0 && o.m !== E.m) throw new TypeError("m mismatch");
          if (o.n !== void 0 && o.n !== E.n) throw new TypeError("n mismatch");
          if (o.pubkeys && !(0, c.stacksEqual)(o.pubkeys, E.pubkeys)) throw new TypeError("Pubkeys mismatch");
        }
        if (o.pubkeys) {
          if (o.n !== void 0 && o.n !== o.pubkeys.length) throw new TypeError("Pubkey count mismatch");
          if (E.n = o.pubkeys.length, E.n < E.m) throw new TypeError("Pubkey count cannot be less than m");
        }
        if (o.signatures) {
          if (o.signatures.length < E.m) throw new TypeError("Not enough signatures provided");
          if (o.signatures.length > E.m) throw new TypeError("Too many signatures provided");
        }
        if (o.input) {
          if (o.input[0] !== _.OP_0) throw new TypeError("Input is invalid");
          if (E.signatures.length === 0 || !E.signatures.every(g)) throw new TypeError("Input has invalid signature(s)");
          if (o.signatures && !(0, c.stacksEqual)(o.signatures, E.signatures)) throw new TypeError("Signature mismatch");
          if (o.m !== void 0 && o.m !== o.signatures.length) throw new TypeError("Signature count mismatch");
        }
      }
      return Object.assign(E, o);
    }
    return Mo.p2ms = u, Mo;
  }
  var Do = {}, Og;
  function C2() {
    if (Og) return Do;
    Og = 1, Object.defineProperty(Do, "__esModule", {
      value: true
    }), Do.p2pk = void 0;
    const n = Rr(), d = er(), c = Qt(), f = Hn(), _ = d.OPS;
    function l(u, o) {
      if (!u.input && !u.output && !u.pubkey && !u.input && !u.signature) throw new TypeError("Not enough data");
      o = Object.assign({
        validate: true
      }, o || {}), (0, c.typeforce)({
        network: c.typeforce.maybe(c.typeforce.Object),
        output: c.typeforce.maybe(c.typeforce.Buffer),
        pubkey: c.typeforce.maybe(c.isPoint),
        signature: c.typeforce.maybe(d.isCanonicalScriptSignature),
        input: c.typeforce.maybe(c.typeforce.Buffer)
      }, u);
      const s = f.value(() => d.decompile(u.input)), a = {
        name: "p2pk",
        network: u.network || n.bitcoin
      };
      if (f.prop(a, "output", () => {
        if (u.pubkey) return d.compile([
          u.pubkey,
          _.OP_CHECKSIG
        ]);
      }), f.prop(a, "pubkey", () => {
        if (u.output) return u.output.slice(1, -1);
      }), f.prop(a, "signature", () => {
        if (u.input) return s()[0];
      }), f.prop(a, "input", () => {
        if (u.signature) return d.compile([
          u.signature
        ]);
      }), f.prop(a, "witness", () => {
        if (a.input) return [];
      }), o.validate) {
        if (u.output) {
          if (u.output[u.output.length - 1] !== _.OP_CHECKSIG) throw new TypeError("Output is invalid");
          if (!(0, c.isPoint)(a.pubkey)) throw new TypeError("Output pubkey is invalid");
          if (u.pubkey && !u.pubkey.equals(a.pubkey)) throw new TypeError("Pubkey mismatch");
        }
        if (u.signature && u.input && !u.input.equals(a.input)) throw new TypeError("Signature mismatch");
        if (u.input) {
          if (s().length !== 1) throw new TypeError("Input is invalid");
          if (!d.isCanonicalScriptSignature(a.signature)) throw new TypeError("Input has invalid signature");
        }
      }
      return Object.assign(a, u);
    }
    return Do.p2pk = l, Do;
  }
  var Ho = {}, Lc = {}, ui = {}, en = {}, Dt = {}, Rg;
  function Rv() {
    if (Rg) return Dt;
    Rg = 1, Object.defineProperty(Dt, "__esModule", {
      value: true
    }), Dt.output = Dt.exists = Dt.hash = Dt.bytes = Dt.bool = Dt.number = Dt.isBytes = void 0;
    function n(s) {
      if (!Number.isSafeInteger(s) || s < 0) throw new Error(`positive integer expected, not ${s}`);
    }
    Dt.number = n;
    function d(s) {
      if (typeof s != "boolean") throw new Error(`boolean expected, not ${s}`);
    }
    Dt.bool = d;
    function c(s) {
      return s instanceof Uint8Array || s != null && typeof s == "object" && s.constructor.name === "Uint8Array";
    }
    Dt.isBytes = c;
    function f(s, ...g) {
      if (!c(s)) throw new Error("Uint8Array expected");
      if (g.length > 0 && !g.includes(s.length)) throw new Error(`Uint8Array expected of length ${g}, not of length=${s.length}`);
    }
    Dt.bytes = f;
    function _(s) {
      if (typeof s != "function" || typeof s.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
      n(s.outputLen), n(s.blockLen);
    }
    Dt.hash = _;
    function l(s, g = true) {
      if (s.destroyed) throw new Error("Hash instance has been destroyed");
      if (g && s.finished) throw new Error("Hash#digest() has already been called");
    }
    Dt.exists = l;
    function u(s, g) {
      f(s);
      const a = g.outputLen;
      if (s.length < a) throw new Error(`digestInto() expects output buffer of length at least ${a}`);
    }
    Dt.output = u;
    const o = {
      number: n,
      bool: d,
      bytes: f,
      hash: _,
      exists: l,
      output: u
    };
    return Dt.default = o, Dt;
  }
  var Mc = {}, qo = {}, Cg;
  function N2() {
    return Cg || (Cg = 1, Object.defineProperty(qo, "__esModule", {
      value: true
    }), qo.crypto = void 0, qo.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0), qo;
  }
  var Ng;
  function Hs() {
    return Ng || (Ng = 1, (function(n) {
      Object.defineProperty(n, "__esModule", {
        value: true
      }), n.randomBytes = n.wrapXOFConstructorWithOpts = n.wrapConstructorWithOpts = n.wrapConstructor = n.checkOpts = n.Hash = n.concatBytes = n.toBytes = n.utf8ToBytes = n.asyncLoop = n.nextTick = n.hexToBytes = n.bytesToHex = n.byteSwap32 = n.byteSwapIfBE = n.byteSwap = n.isLE = n.rotl = n.rotr = n.createView = n.u32 = n.u8 = n.isBytes = void 0;
      const d = N2(), c = Rv();
      function f(W) {
        return W instanceof Uint8Array || W != null && typeof W == "object" && W.constructor.name === "Uint8Array";
      }
      n.isBytes = f;
      const _ = (W) => new Uint8Array(W.buffer, W.byteOffset, W.byteLength);
      n.u8 = _;
      const l = (W) => new Uint32Array(W.buffer, W.byteOffset, Math.floor(W.byteLength / 4));
      n.u32 = l;
      const u = (W) => new DataView(W.buffer, W.byteOffset, W.byteLength);
      n.createView = u;
      const o = (W, ye) => W << 32 - ye | W >>> ye;
      n.rotr = o;
      const s = (W, ye) => W << ye | W >>> 32 - ye >>> 0;
      n.rotl = s, n.isLE = new Uint8Array(new Uint32Array([
        287454020
      ]).buffer)[0] === 68;
      const g = (W) => W << 24 & 4278190080 | W << 8 & 16711680 | W >>> 8 & 65280 | W >>> 24 & 255;
      n.byteSwap = g, n.byteSwapIfBE = n.isLE ? (W) => W : (W) => (0, n.byteSwap)(W);
      function a(W) {
        for (let ye = 0; ye < W.length; ye++) W[ye] = (0, n.byteSwap)(W[ye]);
      }
      n.byteSwap32 = a;
      const E = Array.from({
        length: 256
      }, (W, ye) => ye.toString(16).padStart(2, "0"));
      function v(W) {
        (0, c.bytes)(W);
        let ye = "";
        for (let Te = 0; Te < W.length; Te++) ye += E[W[Te]];
        return ye;
      }
      n.bytesToHex = v;
      const w = {
        _0: 48,
        _9: 57,
        _A: 65,
        _F: 70,
        _a: 97,
        _f: 102
      };
      function S(W) {
        if (W >= w._0 && W <= w._9) return W - w._0;
        if (W >= w._A && W <= w._F) return W - (w._A - 10);
        if (W >= w._a && W <= w._f) return W - (w._a - 10);
      }
      function p(W) {
        if (typeof W != "string") throw new Error("hex string expected, got " + typeof W);
        const ye = W.length, Te = ye / 2;
        if (ye % 2) throw new Error("padded hex string expected, got unpadded hex of length " + ye);
        const Ie = new Uint8Array(Te);
        for (let Re = 0, te = 0; Re < Te; Re++, te += 2) {
          const D = S(W.charCodeAt(te)), G = S(W.charCodeAt(te + 1));
          if (D === void 0 || G === void 0) {
            const Z = W[te] + W[te + 1];
            throw new Error('hex string expected, got non-hex character "' + Z + '" at index ' + te);
          }
          Ie[Re] = D * 16 + G;
        }
        return Ie;
      }
      n.hexToBytes = p;
      const A = async () => {
      };
      n.nextTick = A;
      async function x(W, ye, Te) {
        let Ie = Date.now();
        for (let Re = 0; Re < W; Re++) {
          Te(Re);
          const te = Date.now() - Ie;
          te >= 0 && te < ye || (await (0, n.nextTick)(), Ie += te);
        }
      }
      n.asyncLoop = x;
      function k(W) {
        if (typeof W != "string") throw new Error(`utf8ToBytes expected string, got ${typeof W}`);
        return new Uint8Array(new TextEncoder().encode(W));
      }
      n.utf8ToBytes = k;
      function B(W) {
        return typeof W == "string" && (W = k(W)), (0, c.bytes)(W), W;
      }
      n.toBytes = B;
      function O(...W) {
        let ye = 0;
        for (let Ie = 0; Ie < W.length; Ie++) {
          const Re = W[Ie];
          (0, c.bytes)(Re), ye += Re.length;
        }
        const Te = new Uint8Array(ye);
        for (let Ie = 0, Re = 0; Ie < W.length; Ie++) {
          const te = W[Ie];
          Te.set(te, Re), Re += te.length;
        }
        return Te;
      }
      n.concatBytes = O;
      class U {
        clone() {
          return this._cloneInto();
        }
      }
      n.Hash = U;
      const C = {}.toString;
      function K(W, ye) {
        if (ye !== void 0 && C.call(ye) !== "[object Object]") throw new Error("Options should be object or undefined");
        return Object.assign(W, ye);
      }
      n.checkOpts = K;
      function X(W) {
        const ye = (Ie) => W().update(B(Ie)).digest(), Te = W();
        return ye.outputLen = Te.outputLen, ye.blockLen = Te.blockLen, ye.create = () => W(), ye;
      }
      n.wrapConstructor = X;
      function Q(W) {
        const ye = (Ie, Re) => W(Re).update(B(Ie)).digest(), Te = W({});
        return ye.outputLen = Te.outputLen, ye.blockLen = Te.blockLen, ye.create = (Ie) => W(Ie), ye;
      }
      n.wrapConstructorWithOpts = Q;
      function ae(W) {
        const ye = (Ie, Re) => W(Re).update(B(Ie)).digest(), Te = W({});
        return ye.outputLen = Te.outputLen, ye.blockLen = Te.blockLen, ye.create = (Ie) => W(Ie), ye;
      }
      n.wrapXOFConstructorWithOpts = ae;
      function Ee(W = 32) {
        if (d.crypto && typeof d.crypto.getRandomValues == "function") return d.crypto.getRandomValues(new Uint8Array(W));
        throw new Error("crypto.getRandomValues must be defined");
      }
      n.randomBytes = Ee;
    })(Mc)), Mc;
  }
  var Ug;
  function fd() {
    if (Ug) return en;
    Ug = 1, Object.defineProperty(en, "__esModule", {
      value: true
    }), en.HashMD = en.Maj = en.Chi = void 0;
    const n = Rv(), d = Hs();
    function c(u, o, s, g) {
      if (typeof u.setBigUint64 == "function") return u.setBigUint64(o, s, g);
      const a = BigInt(32), E = BigInt(4294967295), v = Number(s >> a & E), w = Number(s & E), S = g ? 4 : 0, p = g ? 0 : 4;
      u.setUint32(o + S, v, g), u.setUint32(o + p, w, g);
    }
    const f = (u, o, s) => u & o ^ ~u & s;
    en.Chi = f;
    const _ = (u, o, s) => u & o ^ u & s ^ o & s;
    en.Maj = _;
    class l extends d.Hash {
      constructor(o, s, g, a) {
        super(), this.blockLen = o, this.outputLen = s, this.padOffset = g, this.isLE = a, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(o), this.view = (0, d.createView)(this.buffer);
      }
      update(o) {
        (0, n.exists)(this);
        const { view: s, buffer: g, blockLen: a } = this;
        o = (0, d.toBytes)(o);
        const E = o.length;
        for (let v = 0; v < E; ) {
          const w = Math.min(a - this.pos, E - v);
          if (w === a) {
            const S = (0, d.createView)(o);
            for (; a <= E - v; v += a) this.process(S, v);
            continue;
          }
          g.set(o.subarray(v, v + w), this.pos), this.pos += w, v += w, this.pos === a && (this.process(s, 0), this.pos = 0);
        }
        return this.length += o.length, this.roundClean(), this;
      }
      digestInto(o) {
        (0, n.exists)(this), (0, n.output)(o, this), this.finished = true;
        const { buffer: s, view: g, blockLen: a, isLE: E } = this;
        let { pos: v } = this;
        s[v++] = 128, this.buffer.subarray(v).fill(0), this.padOffset > a - v && (this.process(g, 0), v = 0);
        for (let x = v; x < a; x++) s[x] = 0;
        c(g, a - 8, BigInt(this.length * 8), E), this.process(g, 0);
        const w = (0, d.createView)(o), S = this.outputLen;
        if (S % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const p = S / 4, A = this.get();
        if (p > A.length) throw new Error("_sha2: outputLen bigger than state");
        for (let x = 0; x < p; x++) w.setUint32(4 * x, A[x], E);
      }
      digest() {
        const { buffer: o, outputLen: s } = this;
        this.digestInto(o);
        const g = o.slice(0, s);
        return this.destroy(), g;
      }
      _cloneInto(o) {
        o || (o = new this.constructor()), o.set(...this.get());
        const { blockLen: s, buffer: g, length: a, finished: E, destroyed: v, pos: w } = this;
        return o.length = a, o.pos = w, o.finished = E, o.destroyed = v, a % s && o.buffer.set(g), o;
      }
    }
    return en.HashMD = l, en;
  }
  var Fg;
  function U2() {
    if (Fg) return ui;
    Fg = 1, Object.defineProperty(ui, "__esModule", {
      value: true
    }), ui.ripemd160 = ui.RIPEMD160 = void 0;
    const n = fd(), d = Hs(), c = new Uint8Array([
      7,
      4,
      13,
      1,
      10,
      6,
      15,
      3,
      12,
      0,
      9,
      5,
      2,
      14,
      11,
      8
    ]), f = new Uint8Array(new Array(16).fill(0).map((p, A) => A)), _ = f.map((p) => (9 * p + 5) % 16);
    let l = [
      f
    ], u = [
      _
    ];
    for (let p = 0; p < 4; p++) for (let A of [
      l,
      u
    ]) A.push(A[p].map((x) => c[x]));
    const o = [
      [
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8
      ],
      [
        12,
        13,
        11,
        15,
        6,
        9,
        9,
        7,
        12,
        15,
        11,
        13,
        7,
        8,
        7,
        7
      ],
      [
        13,
        15,
        14,
        11,
        7,
        7,
        6,
        8,
        13,
        14,
        13,
        12,
        5,
        5,
        6,
        9
      ],
      [
        14,
        11,
        12,
        14,
        8,
        6,
        5,
        5,
        15,
        12,
        15,
        14,
        9,
        9,
        8,
        6
      ],
      [
        15,
        12,
        13,
        13,
        9,
        5,
        8,
        6,
        14,
        11,
        12,
        11,
        8,
        6,
        5,
        5
      ]
    ].map((p) => new Uint8Array(p)), s = l.map((p, A) => p.map((x) => o[A][x])), g = u.map((p, A) => p.map((x) => o[A][x])), a = new Uint32Array([
      0,
      1518500249,
      1859775393,
      2400959708,
      2840853838
    ]), E = new Uint32Array([
      1352829926,
      1548603684,
      1836072691,
      2053994217,
      0
    ]);
    function v(p, A, x, k) {
      return p === 0 ? A ^ x ^ k : p === 1 ? A & x | ~A & k : p === 2 ? (A | ~x) ^ k : p === 3 ? A & k | x & ~k : A ^ (x | ~k);
    }
    const w = new Uint32Array(16);
    class S extends n.HashMD {
      constructor() {
        super(64, 20, 8, true), this.h0 = 1732584193, this.h1 = -271733879, this.h2 = -1732584194, this.h3 = 271733878, this.h4 = -1009589776;
      }
      get() {
        const { h0: A, h1: x, h2: k, h3: B, h4: O } = this;
        return [
          A,
          x,
          k,
          B,
          O
        ];
      }
      set(A, x, k, B, O) {
        this.h0 = A | 0, this.h1 = x | 0, this.h2 = k | 0, this.h3 = B | 0, this.h4 = O | 0;
      }
      process(A, x) {
        for (let W = 0; W < 16; W++, x += 4) w[W] = A.getUint32(x, true);
        let k = this.h0 | 0, B = k, O = this.h1 | 0, U = O, C = this.h2 | 0, K = C, X = this.h3 | 0, Q = X, ae = this.h4 | 0, Ee = ae;
        for (let W = 0; W < 5; W++) {
          const ye = 4 - W, Te = a[W], Ie = E[W], Re = l[W], te = u[W], D = s[W], G = g[W];
          for (let Z = 0; Z < 16; Z++) {
            const V = (0, d.rotl)(k + v(W, O, C, X) + w[Re[Z]] + Te, D[Z]) + ae | 0;
            k = ae, ae = X, X = (0, d.rotl)(C, 10) | 0, C = O, O = V;
          }
          for (let Z = 0; Z < 16; Z++) {
            const V = (0, d.rotl)(B + v(ye, U, K, Q) + w[te[Z]] + Ie, G[Z]) + Ee | 0;
            B = Ee, Ee = Q, Q = (0, d.rotl)(K, 10) | 0, K = U, U = V;
          }
        }
        this.set(this.h1 + C + Q | 0, this.h2 + X + Ee | 0, this.h3 + ae + B | 0, this.h4 + k + U | 0, this.h0 + O + K | 0);
      }
      roundClean() {
        w.fill(0);
      }
      destroy() {
        this.destroyed = true, this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
      }
    }
    return ui.RIPEMD160 = S, ui.ripemd160 = (0, d.wrapConstructor)(() => new S()), ui;
  }
  var jo = {}, Lg;
  function F2() {
    if (Lg) return jo;
    Lg = 1, Object.defineProperty(jo, "__esModule", {
      value: true
    }), jo.sha1 = void 0;
    const n = fd(), d = Hs(), c = new Uint32Array([
      1732584193,
      4023233417,
      2562383102,
      271733878,
      3285377520
    ]), f = new Uint32Array(80);
    class _ extends n.HashMD {
      constructor() {
        super(64, 20, 8, false), this.A = c[0] | 0, this.B = c[1] | 0, this.C = c[2] | 0, this.D = c[3] | 0, this.E = c[4] | 0;
      }
      get() {
        const { A: u, B: o, C: s, D: g, E: a } = this;
        return [
          u,
          o,
          s,
          g,
          a
        ];
      }
      set(u, o, s, g, a) {
        this.A = u | 0, this.B = o | 0, this.C = s | 0, this.D = g | 0, this.E = a | 0;
      }
      process(u, o) {
        for (let w = 0; w < 16; w++, o += 4) f[w] = u.getUint32(o, false);
        for (let w = 16; w < 80; w++) f[w] = (0, d.rotl)(f[w - 3] ^ f[w - 8] ^ f[w - 14] ^ f[w - 16], 1);
        let { A: s, B: g, C: a, D: E, E: v } = this;
        for (let w = 0; w < 80; w++) {
          let S, p;
          w < 20 ? (S = (0, n.Chi)(g, a, E), p = 1518500249) : w < 40 ? (S = g ^ a ^ E, p = 1859775393) : w < 60 ? (S = (0, n.Maj)(g, a, E), p = 2400959708) : (S = g ^ a ^ E, p = 3395469782);
          const A = (0, d.rotl)(s, 5) + S + v + p + f[w] | 0;
          v = E, E = a, a = (0, d.rotl)(g, 30), g = s, s = A;
        }
        s = s + this.A | 0, g = g + this.B | 0, a = a + this.C | 0, E = E + this.D | 0, v = v + this.E | 0, this.set(s, g, a, E, v);
      }
      roundClean() {
        f.fill(0);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0), this.buffer.fill(0);
      }
    }
    return jo.sha1 = (0, d.wrapConstructor)(() => new _()), jo;
  }
  var li = {}, Mg;
  function Cv() {
    if (Mg) return li;
    Mg = 1, Object.defineProperty(li, "__esModule", {
      value: true
    }), li.sha224 = li.sha256 = void 0;
    const n = fd(), d = Hs(), c = new Uint32Array([
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ]), f = new Uint32Array([
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ]), _ = new Uint32Array(64);
    class l extends n.HashMD {
      constructor() {
        super(64, 32, 8, false), this.A = f[0] | 0, this.B = f[1] | 0, this.C = f[2] | 0, this.D = f[3] | 0, this.E = f[4] | 0, this.F = f[5] | 0, this.G = f[6] | 0, this.H = f[7] | 0;
      }
      get() {
        const { A: s, B: g, C: a, D: E, E: v, F: w, G: S, H: p } = this;
        return [
          s,
          g,
          a,
          E,
          v,
          w,
          S,
          p
        ];
      }
      set(s, g, a, E, v, w, S, p) {
        this.A = s | 0, this.B = g | 0, this.C = a | 0, this.D = E | 0, this.E = v | 0, this.F = w | 0, this.G = S | 0, this.H = p | 0;
      }
      process(s, g) {
        for (let k = 0; k < 16; k++, g += 4) _[k] = s.getUint32(g, false);
        for (let k = 16; k < 64; k++) {
          const B = _[k - 15], O = _[k - 2], U = (0, d.rotr)(B, 7) ^ (0, d.rotr)(B, 18) ^ B >>> 3, C = (0, d.rotr)(O, 17) ^ (0, d.rotr)(O, 19) ^ O >>> 10;
          _[k] = C + _[k - 7] + U + _[k - 16] | 0;
        }
        let { A: a, B: E, C: v, D: w, E: S, F: p, G: A, H: x } = this;
        for (let k = 0; k < 64; k++) {
          const B = (0, d.rotr)(S, 6) ^ (0, d.rotr)(S, 11) ^ (0, d.rotr)(S, 25), O = x + B + (0, n.Chi)(S, p, A) + c[k] + _[k] | 0, C = ((0, d.rotr)(a, 2) ^ (0, d.rotr)(a, 13) ^ (0, d.rotr)(a, 22)) + (0, n.Maj)(a, E, v) | 0;
          x = A, A = p, p = S, S = w + O | 0, w = v, v = E, E = a, a = O + C | 0;
        }
        a = a + this.A | 0, E = E + this.B | 0, v = v + this.C | 0, w = w + this.D | 0, S = S + this.E | 0, p = p + this.F | 0, A = A + this.G | 0, x = x + this.H | 0, this.set(a, E, v, w, S, p, A, x);
      }
      roundClean() {
        _.fill(0);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
      }
    }
    class u extends l {
      constructor() {
        super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28;
      }
    }
    return li.sha256 = (0, d.wrapConstructor)(() => new l()), li.sha224 = (0, d.wrapConstructor)(() => new u()), li;
  }
  var Dg;
  function an() {
    return Dg || (Dg = 1, (function(n) {
      Object.defineProperty(n, "__esModule", {
        value: true
      }), n.taggedHash = n.TAGGED_HASH_PREFIXES = n.TAGS = n.hash256 = n.hash160 = n.sha256 = n.sha1 = n.ripemd160 = void 0;
      const d = U2(), c = F2(), f = Cv();
      function _(a) {
        return ne.from((0, d.ripemd160)(Uint8Array.from(a)));
      }
      n.ripemd160 = _;
      function l(a) {
        return ne.from((0, c.sha1)(Uint8Array.from(a)));
      }
      n.sha1 = l;
      function u(a) {
        return ne.from((0, f.sha256)(Uint8Array.from(a)));
      }
      n.sha256 = u;
      function o(a) {
        return ne.from((0, d.ripemd160)((0, f.sha256)(Uint8Array.from(a))));
      }
      n.hash160 = o;
      function s(a) {
        return ne.from((0, f.sha256)((0, f.sha256)(Uint8Array.from(a))));
      }
      n.hash256 = s, n.TAGS = [
        "BIP0340/challenge",
        "BIP0340/aux",
        "BIP0340/nonce",
        "TapLeaf",
        "TapBranch",
        "TapSighash",
        "TapTweak",
        "KeyAgg list",
        "KeyAgg coefficient"
      ], n.TAGGED_HASH_PREFIXES = {
        "BIP0340/challenge": ne.from([
          123,
          181,
          45,
          122,
          159,
          239,
          88,
          50,
          62,
          177,
          191,
          122,
          64,
          125,
          179,
          130,
          210,
          243,
          242,
          216,
          27,
          177,
          34,
          79,
          73,
          254,
          81,
          143,
          109,
          72,
          211,
          124,
          123,
          181,
          45,
          122,
          159,
          239,
          88,
          50,
          62,
          177,
          191,
          122,
          64,
          125,
          179,
          130,
          210,
          243,
          242,
          216,
          27,
          177,
          34,
          79,
          73,
          254,
          81,
          143,
          109,
          72,
          211,
          124
        ]),
        "BIP0340/aux": ne.from([
          241,
          239,
          78,
          94,
          192,
          99,
          202,
          218,
          109,
          148,
          202,
          250,
          157,
          152,
          126,
          160,
          105,
          38,
          88,
          57,
          236,
          193,
          31,
          151,
          45,
          119,
          165,
          46,
          216,
          193,
          204,
          144,
          241,
          239,
          78,
          94,
          192,
          99,
          202,
          218,
          109,
          148,
          202,
          250,
          157,
          152,
          126,
          160,
          105,
          38,
          88,
          57,
          236,
          193,
          31,
          151,
          45,
          119,
          165,
          46,
          216,
          193,
          204,
          144
        ]),
        "BIP0340/nonce": ne.from([
          7,
          73,
          119,
          52,
          167,
          155,
          203,
          53,
          91,
          155,
          140,
          125,
          3,
          79,
          18,
          28,
          244,
          52,
          215,
          62,
          247,
          45,
          218,
          25,
          135,
          0,
          97,
          251,
          82,
          191,
          235,
          47,
          7,
          73,
          119,
          52,
          167,
          155,
          203,
          53,
          91,
          155,
          140,
          125,
          3,
          79,
          18,
          28,
          244,
          52,
          215,
          62,
          247,
          45,
          218,
          25,
          135,
          0,
          97,
          251,
          82,
          191,
          235,
          47
        ]),
        TapLeaf: ne.from([
          174,
          234,
          143,
          220,
          66,
          8,
          152,
          49,
          5,
          115,
          75,
          88,
          8,
          29,
          30,
          38,
          56,
          211,
          95,
          28,
          181,
          64,
          8,
          212,
          211,
          87,
          202,
          3,
          190,
          120,
          233,
          238,
          174,
          234,
          143,
          220,
          66,
          8,
          152,
          49,
          5,
          115,
          75,
          88,
          8,
          29,
          30,
          38,
          56,
          211,
          95,
          28,
          181,
          64,
          8,
          212,
          211,
          87,
          202,
          3,
          190,
          120,
          233,
          238
        ]),
        TapBranch: ne.from([
          25,
          65,
          161,
          242,
          229,
          110,
          185,
          95,
          162,
          169,
          241,
          148,
          190,
          92,
          1,
          247,
          33,
          111,
          51,
          237,
          130,
          176,
          145,
          70,
          52,
          144,
          208,
          91,
          245,
          22,
          160,
          21,
          25,
          65,
          161,
          242,
          229,
          110,
          185,
          95,
          162,
          169,
          241,
          148,
          190,
          92,
          1,
          247,
          33,
          111,
          51,
          237,
          130,
          176,
          145,
          70,
          52,
          144,
          208,
          91,
          245,
          22,
          160,
          21
        ]),
        TapSighash: ne.from([
          244,
          10,
          72,
          223,
          75,
          42,
          112,
          200,
          180,
          146,
          75,
          242,
          101,
          70,
          97,
          237,
          61,
          149,
          253,
          102,
          163,
          19,
          235,
          135,
          35,
          117,
          151,
          198,
          40,
          228,
          160,
          49,
          244,
          10,
          72,
          223,
          75,
          42,
          112,
          200,
          180,
          146,
          75,
          242,
          101,
          70,
          97,
          237,
          61,
          149,
          253,
          102,
          163,
          19,
          235,
          135,
          35,
          117,
          151,
          198,
          40,
          228,
          160,
          49
        ]),
        TapTweak: ne.from([
          232,
          15,
          225,
          99,
          156,
          156,
          160,
          80,
          227,
          175,
          27,
          57,
          193,
          67,
          198,
          62,
          66,
          156,
          188,
          235,
          21,
          217,
          64,
          251,
          181,
          197,
          161,
          244,
          175,
          87,
          197,
          233,
          232,
          15,
          225,
          99,
          156,
          156,
          160,
          80,
          227,
          175,
          27,
          57,
          193,
          67,
          198,
          62,
          66,
          156,
          188,
          235,
          21,
          217,
          64,
          251,
          181,
          197,
          161,
          244,
          175,
          87,
          197,
          233
        ]),
        "KeyAgg list": ne.from([
          72,
          28,
          151,
          28,
          60,
          11,
          70,
          215,
          240,
          178,
          117,
          174,
          89,
          141,
          78,
          44,
          126,
          215,
          49,
          156,
          89,
          74,
          92,
          110,
          199,
          158,
          160,
          212,
          153,
          2,
          148,
          240,
          72,
          28,
          151,
          28,
          60,
          11,
          70,
          215,
          240,
          178,
          117,
          174,
          89,
          141,
          78,
          44,
          126,
          215,
          49,
          156,
          89,
          74,
          92,
          110,
          199,
          158,
          160,
          212,
          153,
          2,
          148,
          240
        ]),
        "KeyAgg coefficient": ne.from([
          191,
          201,
          4,
          3,
          77,
          28,
          136,
          232,
          200,
          14,
          34,
          229,
          61,
          36,
          86,
          109,
          100,
          130,
          78,
          214,
          66,
          114,
          129,
          192,
          145,
          0,
          249,
          77,
          205,
          82,
          201,
          129,
          191,
          201,
          4,
          3,
          77,
          28,
          136,
          232,
          200,
          14,
          34,
          229,
          61,
          36,
          86,
          109,
          100,
          130,
          78,
          214,
          66,
          114,
          129,
          192,
          145,
          0,
          249,
          77,
          205,
          82,
          201,
          129
        ])
      };
      function g(a, E) {
        return u(ne.concat([
          n.TAGGED_HASH_PREFIXES[a],
          E
        ]));
      }
      n.taggedHash = g;
    })(Lc)), Lc;
  }
  var Dc, Hg;
  function L2() {
    if (Hg) return Dc;
    Hg = 1;
    function n(d) {
      if (d.length >= 255) throw new TypeError("Alphabet too long");
      for (var c = new Uint8Array(256), f = 0; f < c.length; f++) c[f] = 255;
      for (var _ = 0; _ < d.length; _++) {
        var l = d.charAt(_), u = l.charCodeAt(0);
        if (c[u] !== 255) throw new TypeError(l + " is ambiguous");
        c[u] = _;
      }
      var o = d.length, s = d.charAt(0), g = Math.log(o) / Math.log(256), a = Math.log(256) / Math.log(o);
      function E(S) {
        if (S instanceof Uint8Array || (ArrayBuffer.isView(S) ? S = new Uint8Array(S.buffer, S.byteOffset, S.byteLength) : Array.isArray(S) && (S = Uint8Array.from(S))), !(S instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (S.length === 0) return "";
        for (var p = 0, A = 0, x = 0, k = S.length; x !== k && S[x] === 0; ) x++, p++;
        for (var B = (k - x) * a + 1 >>> 0, O = new Uint8Array(B); x !== k; ) {
          for (var U = S[x], C = 0, K = B - 1; (U !== 0 || C < A) && K !== -1; K--, C++) U += 256 * O[K] >>> 0, O[K] = U % o >>> 0, U = U / o >>> 0;
          if (U !== 0) throw new Error("Non-zero carry");
          A = C, x++;
        }
        for (var X = B - A; X !== B && O[X] === 0; ) X++;
        for (var Q = s.repeat(p); X < B; ++X) Q += d.charAt(O[X]);
        return Q;
      }
      function v(S) {
        if (typeof S != "string") throw new TypeError("Expected String");
        if (S.length === 0) return new Uint8Array();
        for (var p = 0, A = 0, x = 0; S[p] === s; ) A++, p++;
        for (var k = (S.length - p) * g + 1 >>> 0, B = new Uint8Array(k); S[p]; ) {
          var O = S.charCodeAt(p);
          if (O > 255) return;
          var U = c[O];
          if (U === 255) return;
          for (var C = 0, K = k - 1; (U !== 0 || C < x) && K !== -1; K--, C++) U += o * B[K] >>> 0, B[K] = U % 256 >>> 0, U = U / 256 >>> 0;
          if (U !== 0) throw new Error("Non-zero carry");
          x = C, p++;
        }
        for (var X = k - x; X !== k && B[X] === 0; ) X++;
        for (var Q = new Uint8Array(A + (k - X)), ae = A; X !== k; ) Q[ae++] = B[X++];
        return Q;
      }
      function w(S) {
        var p = v(S);
        if (p) return p;
        throw new Error("Non-base" + o + " character");
      }
      return {
        encode: E,
        decodeUnsafe: v,
        decode: w
      };
    }
    return Dc = n, Dc;
  }
  var Hc, qg;
  function M2() {
    return qg || (qg = 1, Hc = L2()("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")), Hc;
  }
  var qc, jg;
  function D2() {
    if (jg) return qc;
    jg = 1;
    var n = M2();
    return qc = function(d) {
      function c(u) {
        var o = Uint8Array.from(u), s = d(o), g = o.length + 4, a = new Uint8Array(g);
        return a.set(o, 0), a.set(s.subarray(0, 4), o.length), n.encode(a, g);
      }
      function f(u) {
        var o = u.slice(0, -4), s = u.slice(-4), g = d(o);
        if (!(s[0] ^ g[0] | s[1] ^ g[1] | s[2] ^ g[2] | s[3] ^ g[3])) return o;
      }
      function _(u) {
        var o = n.decodeUnsafe(u);
        if (o) return f(o);
      }
      function l(u) {
        var o = n.decode(u), s = f(o);
        if (!s) throw new Error("Invalid checksum");
        return s;
      }
      return {
        encode: c,
        decode: l,
        decodeUnsafe: _
      };
    }, qc;
  }
  var jc, Wg;
  function cd() {
    if (Wg) return jc;
    Wg = 1;
    var { sha256: n } = Cv(), d = D2();
    function c(f) {
      return n(n(f));
    }
    return jc = d(c), jc;
  }
  var Kg;
  function H2() {
    if (Kg) return Ho;
    Kg = 1, Object.defineProperty(Ho, "__esModule", {
      value: true
    }), Ho.p2pkh = void 0;
    const n = an(), d = Rr(), c = er(), f = Qt(), _ = Hn(), l = cd(), u = c.OPS;
    function o(s, g) {
      if (!s.address && !s.hash && !s.output && !s.pubkey && !s.input) throw new TypeError("Not enough data");
      g = Object.assign({
        validate: true
      }, g || {}), (0, f.typeforce)({
        network: f.typeforce.maybe(f.typeforce.Object),
        address: f.typeforce.maybe(f.typeforce.String),
        hash: f.typeforce.maybe(f.typeforce.BufferN(20)),
        output: f.typeforce.maybe(f.typeforce.BufferN(25)),
        pubkey: f.typeforce.maybe(f.isPoint),
        signature: f.typeforce.maybe(c.isCanonicalScriptSignature),
        input: f.typeforce.maybe(f.typeforce.Buffer)
      }, s);
      const a = _.value(() => {
        const S = ne.from(l.decode(s.address)), p = S.readUInt8(0), A = S.slice(1);
        return {
          version: p,
          hash: A
        };
      }), E = _.value(() => c.decompile(s.input)), v = s.network || d.bitcoin, w = {
        name: "p2pkh",
        network: v
      };
      if (_.prop(w, "address", () => {
        if (!w.hash) return;
        const S = ne.allocUnsafe(21);
        return S.writeUInt8(v.pubKeyHash, 0), w.hash.copy(S, 1), l.encode(S);
      }), _.prop(w, "hash", () => {
        if (s.output) return s.output.slice(3, 23);
        if (s.address) return a().hash;
        if (s.pubkey || w.pubkey) return n.hash160(s.pubkey || w.pubkey);
      }), _.prop(w, "output", () => {
        if (w.hash) return c.compile([
          u.OP_DUP,
          u.OP_HASH160,
          w.hash,
          u.OP_EQUALVERIFY,
          u.OP_CHECKSIG
        ]);
      }), _.prop(w, "pubkey", () => {
        if (s.input) return E()[1];
      }), _.prop(w, "signature", () => {
        if (s.input) return E()[0];
      }), _.prop(w, "input", () => {
        if (s.pubkey && s.signature) return c.compile([
          s.signature,
          s.pubkey
        ]);
      }), _.prop(w, "witness", () => {
        if (w.input) return [];
      }), g.validate) {
        let S = ne.from([]);
        if (s.address) {
          if (a().version !== v.pubKeyHash) throw new TypeError("Invalid version or Network mismatch");
          if (a().hash.length !== 20) throw new TypeError("Invalid address");
          S = a().hash;
        }
        if (s.hash) {
          if (S.length > 0 && !S.equals(s.hash)) throw new TypeError("Hash mismatch");
          S = s.hash;
        }
        if (s.output) {
          if (s.output.length !== 25 || s.output[0] !== u.OP_DUP || s.output[1] !== u.OP_HASH160 || s.output[2] !== 20 || s.output[23] !== u.OP_EQUALVERIFY || s.output[24] !== u.OP_CHECKSIG) throw new TypeError("Output is invalid");
          const p = s.output.slice(3, 23);
          if (S.length > 0 && !S.equals(p)) throw new TypeError("Hash mismatch");
          S = p;
        }
        if (s.pubkey) {
          const p = n.hash160(s.pubkey);
          if (S.length > 0 && !S.equals(p)) throw new TypeError("Hash mismatch");
          S = p;
        }
        if (s.input) {
          const p = E();
          if (p.length !== 2) throw new TypeError("Input is invalid");
          if (!c.isCanonicalScriptSignature(p[0])) throw new TypeError("Input has invalid signature");
          if (!(0, f.isPoint)(p[1])) throw new TypeError("Input has invalid pubkey");
          if (s.signature && !s.signature.equals(p[0])) throw new TypeError("Signature mismatch");
          if (s.pubkey && !s.pubkey.equals(p[1])) throw new TypeError("Pubkey mismatch");
          const A = n.hash160(p[1]);
          if (S.length > 0 && !S.equals(A)) throw new TypeError("Hash mismatch");
        }
      }
      return Object.assign(w, s);
    }
    return Ho.p2pkh = o, Ho;
  }
  var Wo = {}, zg;
  function q2() {
    if (zg) return Wo;
    zg = 1, Object.defineProperty(Wo, "__esModule", {
      value: true
    }), Wo.p2sh = void 0;
    const n = an(), d = Rr(), c = er(), f = Qt(), _ = Hn(), l = cd(), u = c.OPS;
    function o(s, g) {
      if (!s.address && !s.hash && !s.output && !s.redeem && !s.input) throw new TypeError("Not enough data");
      g = Object.assign({
        validate: true
      }, g || {}), (0, f.typeforce)({
        network: f.typeforce.maybe(f.typeforce.Object),
        address: f.typeforce.maybe(f.typeforce.String),
        hash: f.typeforce.maybe(f.typeforce.BufferN(20)),
        output: f.typeforce.maybe(f.typeforce.BufferN(23)),
        redeem: f.typeforce.maybe({
          network: f.typeforce.maybe(f.typeforce.Object),
          output: f.typeforce.maybe(f.typeforce.Buffer),
          input: f.typeforce.maybe(f.typeforce.Buffer),
          witness: f.typeforce.maybe(f.typeforce.arrayOf(f.typeforce.Buffer))
        }),
        input: f.typeforce.maybe(f.typeforce.Buffer),
        witness: f.typeforce.maybe(f.typeforce.arrayOf(f.typeforce.Buffer))
      }, s);
      let a = s.network;
      a || (a = s.redeem && s.redeem.network || d.bitcoin);
      const E = {
        network: a
      }, v = _.value(() => {
        const p = ne.from(l.decode(s.address)), A = p.readUInt8(0), x = p.slice(1);
        return {
          version: A,
          hash: x
        };
      }), w = _.value(() => c.decompile(s.input)), S = _.value(() => {
        const p = w(), A = p[p.length - 1];
        return {
          network: a,
          output: A === u.OP_FALSE ? ne.from([]) : A,
          input: c.compile(p.slice(0, -1)),
          witness: s.witness || []
        };
      });
      if (_.prop(E, "address", () => {
        if (!E.hash) return;
        const p = ne.allocUnsafe(21);
        return p.writeUInt8(E.network.scriptHash, 0), E.hash.copy(p, 1), l.encode(p);
      }), _.prop(E, "hash", () => {
        if (s.output) return s.output.slice(2, 22);
        if (s.address) return v().hash;
        if (E.redeem && E.redeem.output) return n.hash160(E.redeem.output);
      }), _.prop(E, "output", () => {
        if (E.hash) return c.compile([
          u.OP_HASH160,
          E.hash,
          u.OP_EQUAL
        ]);
      }), _.prop(E, "redeem", () => {
        if (s.input) return S();
      }), _.prop(E, "input", () => {
        if (!(!s.redeem || !s.redeem.input || !s.redeem.output)) return c.compile([].concat(c.decompile(s.redeem.input), s.redeem.output));
      }), _.prop(E, "witness", () => {
        if (E.redeem && E.redeem.witness) return E.redeem.witness;
        if (E.input) return [];
      }), _.prop(E, "name", () => {
        const p = [
          "p2sh"
        ];
        return E.redeem !== void 0 && E.redeem.name !== void 0 && p.push(E.redeem.name), p.join("-");
      }), g.validate) {
        let p = ne.from([]);
        if (s.address) {
          if (v().version !== a.scriptHash) throw new TypeError("Invalid version or Network mismatch");
          if (v().hash.length !== 20) throw new TypeError("Invalid address");
          p = v().hash;
        }
        if (s.hash) {
          if (p.length > 0 && !p.equals(s.hash)) throw new TypeError("Hash mismatch");
          p = s.hash;
        }
        if (s.output) {
          if (s.output.length !== 23 || s.output[0] !== u.OP_HASH160 || s.output[1] !== 20 || s.output[22] !== u.OP_EQUAL) throw new TypeError("Output is invalid");
          const x = s.output.slice(2, 22);
          if (p.length > 0 && !p.equals(x)) throw new TypeError("Hash mismatch");
          p = x;
        }
        const A = (x) => {
          if (x.output) {
            const k = c.decompile(x.output);
            if (!k || k.length < 1) throw new TypeError("Redeem.output too short");
            if (x.output.byteLength > 520) throw new TypeError("Redeem.output unspendable if larger than 520 bytes");
            if (c.countNonPushOnlyOPs(k) > 201) throw new TypeError("Redeem.output unspendable with more than 201 non-push ops");
            const B = n.hash160(x.output);
            if (p.length > 0 && !p.equals(B)) throw new TypeError("Hash mismatch");
            p = B;
          }
          if (x.input) {
            const k = x.input.length > 0, B = x.witness && x.witness.length > 0;
            if (!k && !B) throw new TypeError("Empty input");
            if (k && B) throw new TypeError("Input and witness provided");
            if (k) {
              const O = c.decompile(x.input);
              if (!c.isPushOnly(O)) throw new TypeError("Non push-only scriptSig");
            }
          }
        };
        if (s.input) {
          const x = w();
          if (!x || x.length < 1) throw new TypeError("Input too short");
          if (!ne.isBuffer(S().output)) throw new TypeError("Input is invalid");
          A(S());
        }
        if (s.redeem) {
          if (s.redeem.network && s.redeem.network !== a) throw new TypeError("Network mismatch");
          if (s.input) {
            const x = S();
            if (s.redeem.output && !s.redeem.output.equals(x.output)) throw new TypeError("Redeem.output mismatch");
            if (s.redeem.input && !s.redeem.input.equals(x.input)) throw new TypeError("Redeem.input mismatch");
          }
          A(s.redeem);
        }
        if (s.witness && s.redeem && s.redeem.witness && !(0, f.stacksEqual)(s.redeem.witness, s.witness)) throw new TypeError("Witness and redeem.witness mismatch");
      }
      return Object.assign(E, s);
    }
    return Wo.p2sh = o, Wo;
  }
  var Ko = {}, fi = {}, Vg;
  function qs() {
    if (Vg) return fi;
    Vg = 1, Object.defineProperty(fi, "__esModule", {
      value: true
    }), fi.bech32m = fi.bech32 = void 0;
    const n = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", d = {};
    for (let g = 0; g < n.length; g++) {
      const a = n.charAt(g);
      d[a] = g;
    }
    function c(g) {
      const a = g >> 25;
      return (g & 33554431) << 5 ^ -(a >> 0 & 1) & 996825010 ^ -(a >> 1 & 1) & 642813549 ^ -(a >> 2 & 1) & 513874426 ^ -(a >> 3 & 1) & 1027748829 ^ -(a >> 4 & 1) & 705979059;
    }
    function f(g) {
      let a = 1;
      for (let E = 0; E < g.length; ++E) {
        const v = g.charCodeAt(E);
        if (v < 33 || v > 126) return "Invalid prefix (" + g + ")";
        a = c(a) ^ v >> 5;
      }
      a = c(a);
      for (let E = 0; E < g.length; ++E) {
        const v = g.charCodeAt(E);
        a = c(a) ^ v & 31;
      }
      return a;
    }
    function _(g, a, E, v) {
      let w = 0, S = 0;
      const p = (1 << E) - 1, A = [];
      for (let x = 0; x < g.length; ++x) for (w = w << a | g[x], S += a; S >= E; ) S -= E, A.push(w >> S & p);
      if (v) S > 0 && A.push(w << E - S & p);
      else {
        if (S >= a) return "Excess padding";
        if (w << E - S & p) return "Non-zero padding";
      }
      return A;
    }
    function l(g) {
      return _(g, 8, 5, true);
    }
    function u(g) {
      const a = _(g, 5, 8, false);
      if (Array.isArray(a)) return a;
    }
    function o(g) {
      const a = _(g, 5, 8, false);
      if (Array.isArray(a)) return a;
      throw new Error(a);
    }
    function s(g) {
      let a;
      g === "bech32" ? a = 1 : a = 734539939;
      function E(p, A, x) {
        if (x = x || 90, p.length + 7 + A.length > x) throw new TypeError("Exceeds length limit");
        p = p.toLowerCase();
        let k = f(p);
        if (typeof k == "string") throw new Error(k);
        let B = p + "1";
        for (let O = 0; O < A.length; ++O) {
          const U = A[O];
          if (U >> 5 !== 0) throw new Error("Non 5-bit word");
          k = c(k) ^ U, B += n.charAt(U);
        }
        for (let O = 0; O < 6; ++O) k = c(k);
        k ^= a;
        for (let O = 0; O < 6; ++O) {
          const U = k >> (5 - O) * 5 & 31;
          B += n.charAt(U);
        }
        return B;
      }
      function v(p, A) {
        if (A = A || 90, p.length < 8) return p + " too short";
        if (p.length > A) return "Exceeds length limit";
        const x = p.toLowerCase(), k = p.toUpperCase();
        if (p !== x && p !== k) return "Mixed-case string " + p;
        p = x;
        const B = p.lastIndexOf("1");
        if (B === -1) return "No separator character for " + p;
        if (B === 0) return "Missing prefix for " + p;
        const O = p.slice(0, B), U = p.slice(B + 1);
        if (U.length < 6) return "Data too short";
        let C = f(O);
        if (typeof C == "string") return C;
        const K = [];
        for (let X = 0; X < U.length; ++X) {
          const Q = U.charAt(X), ae = d[Q];
          if (ae === void 0) return "Unknown character " + Q;
          C = c(C) ^ ae, !(X + 6 >= U.length) && K.push(ae);
        }
        return C !== a ? "Invalid checksum for " + p : {
          prefix: O,
          words: K
        };
      }
      function w(p, A) {
        const x = v(p, A);
        if (typeof x == "object") return x;
      }
      function S(p, A) {
        const x = v(p, A);
        if (typeof x == "object") return x;
        throw new Error(x);
      }
      return {
        decodeUnsafe: w,
        decode: S,
        encode: E,
        toWords: l,
        fromWordsUnsafe: u,
        fromWords: o
      };
    }
    return fi.bech32 = s("bech32"), fi.bech32m = s("bech32m"), fi;
  }
  var Gg;
  function j2() {
    if (Gg) return Ko;
    Gg = 1, Object.defineProperty(Ko, "__esModule", {
      value: true
    }), Ko.p2wpkh = void 0;
    const n = an(), d = Rr(), c = er(), f = Qt(), _ = Hn(), l = qs(), u = c.OPS, o = ne.alloc(0);
    function s(g, a) {
      if (!g.address && !g.hash && !g.output && !g.pubkey && !g.witness) throw new TypeError("Not enough data");
      a = Object.assign({
        validate: true
      }, a || {}), (0, f.typeforce)({
        address: f.typeforce.maybe(f.typeforce.String),
        hash: f.typeforce.maybe(f.typeforce.BufferN(20)),
        input: f.typeforce.maybe(f.typeforce.BufferN(0)),
        network: f.typeforce.maybe(f.typeforce.Object),
        output: f.typeforce.maybe(f.typeforce.BufferN(22)),
        pubkey: f.typeforce.maybe(f.isPoint),
        signature: f.typeforce.maybe(c.isCanonicalScriptSignature),
        witness: f.typeforce.maybe(f.typeforce.arrayOf(f.typeforce.Buffer))
      }, g);
      const E = _.value(() => {
        const S = l.bech32.decode(g.address), p = S.words.shift(), A = l.bech32.fromWords(S.words);
        return {
          version: p,
          prefix: S.prefix,
          data: ne.from(A)
        };
      }), v = g.network || d.bitcoin, w = {
        name: "p2wpkh",
        network: v
      };
      if (_.prop(w, "address", () => {
        if (!w.hash) return;
        const S = l.bech32.toWords(w.hash);
        return S.unshift(0), l.bech32.encode(v.bech32, S);
      }), _.prop(w, "hash", () => {
        if (g.output) return g.output.slice(2, 22);
        if (g.address) return E().data;
        if (g.pubkey || w.pubkey) return n.hash160(g.pubkey || w.pubkey);
      }), _.prop(w, "output", () => {
        if (w.hash) return c.compile([
          u.OP_0,
          w.hash
        ]);
      }), _.prop(w, "pubkey", () => {
        if (g.pubkey) return g.pubkey;
        if (g.witness) return g.witness[1];
      }), _.prop(w, "signature", () => {
        if (g.witness) return g.witness[0];
      }), _.prop(w, "input", () => {
        if (w.witness) return o;
      }), _.prop(w, "witness", () => {
        if (g.pubkey && g.signature) return [
          g.signature,
          g.pubkey
        ];
      }), a.validate) {
        let S = ne.from([]);
        if (g.address) {
          if (v && v.bech32 !== E().prefix) throw new TypeError("Invalid prefix or Network mismatch");
          if (E().version !== 0) throw new TypeError("Invalid address version");
          if (E().data.length !== 20) throw new TypeError("Invalid address data");
          S = E().data;
        }
        if (g.hash) {
          if (S.length > 0 && !S.equals(g.hash)) throw new TypeError("Hash mismatch");
          S = g.hash;
        }
        if (g.output) {
          if (g.output.length !== 22 || g.output[0] !== u.OP_0 || g.output[1] !== 20) throw new TypeError("Output is invalid");
          if (S.length > 0 && !S.equals(g.output.slice(2))) throw new TypeError("Hash mismatch");
          S = g.output.slice(2);
        }
        if (g.pubkey) {
          const p = n.hash160(g.pubkey);
          if (S.length > 0 && !S.equals(p)) throw new TypeError("Hash mismatch");
          if (S = p, !(0, f.isPoint)(g.pubkey) || g.pubkey.length !== 33) throw new TypeError("Invalid pubkey for p2wpkh");
        }
        if (g.witness) {
          if (g.witness.length !== 2) throw new TypeError("Witness is invalid");
          if (!c.isCanonicalScriptSignature(g.witness[0])) throw new TypeError("Witness has invalid signature");
          if (!(0, f.isPoint)(g.witness[1]) || g.witness[1].length !== 33) throw new TypeError("Witness has invalid pubkey");
          if (g.signature && !g.signature.equals(g.witness[0])) throw new TypeError("Signature mismatch");
          if (g.pubkey && !g.pubkey.equals(g.witness[1])) throw new TypeError("Pubkey mismatch");
          const p = n.hash160(g.witness[1]);
          if (S.length > 0 && !S.equals(p)) throw new TypeError("Hash mismatch");
        }
      }
      return Object.assign(w, g);
    }
    return Ko.p2wpkh = s, Ko;
  }
  var zo = {}, Xg;
  function W2() {
    if (Xg) return zo;
    Xg = 1, Object.defineProperty(zo, "__esModule", {
      value: true
    }), zo.p2wsh = void 0;
    const n = an(), d = Rr(), c = er(), f = Qt(), _ = Hn(), l = qs(), u = c.OPS, o = ne.alloc(0);
    function s(a) {
      return !!(ne.isBuffer(a) && a.length === 65 && a[0] === 4 && (0, f.isPoint)(a));
    }
    function g(a, E) {
      if (!a.address && !a.hash && !a.output && !a.redeem && !a.witness) throw new TypeError("Not enough data");
      E = Object.assign({
        validate: true
      }, E || {}), (0, f.typeforce)({
        network: f.typeforce.maybe(f.typeforce.Object),
        address: f.typeforce.maybe(f.typeforce.String),
        hash: f.typeforce.maybe(f.typeforce.BufferN(32)),
        output: f.typeforce.maybe(f.typeforce.BufferN(34)),
        redeem: f.typeforce.maybe({
          input: f.typeforce.maybe(f.typeforce.Buffer),
          network: f.typeforce.maybe(f.typeforce.Object),
          output: f.typeforce.maybe(f.typeforce.Buffer),
          witness: f.typeforce.maybe(f.typeforce.arrayOf(f.typeforce.Buffer))
        }),
        input: f.typeforce.maybe(f.typeforce.BufferN(0)),
        witness: f.typeforce.maybe(f.typeforce.arrayOf(f.typeforce.Buffer))
      }, a);
      const v = _.value(() => {
        const A = l.bech32.decode(a.address), x = A.words.shift(), k = l.bech32.fromWords(A.words);
        return {
          version: x,
          prefix: A.prefix,
          data: ne.from(k)
        };
      }), w = _.value(() => c.decompile(a.redeem.input));
      let S = a.network;
      S || (S = a.redeem && a.redeem.network || d.bitcoin);
      const p = {
        network: S
      };
      if (_.prop(p, "address", () => {
        if (!p.hash) return;
        const A = l.bech32.toWords(p.hash);
        return A.unshift(0), l.bech32.encode(S.bech32, A);
      }), _.prop(p, "hash", () => {
        if (a.output) return a.output.slice(2);
        if (a.address) return v().data;
        if (p.redeem && p.redeem.output) return n.sha256(p.redeem.output);
      }), _.prop(p, "output", () => {
        if (p.hash) return c.compile([
          u.OP_0,
          p.hash
        ]);
      }), _.prop(p, "redeem", () => {
        if (a.witness) return {
          output: a.witness[a.witness.length - 1],
          input: o,
          witness: a.witness.slice(0, -1)
        };
      }), _.prop(p, "input", () => {
        if (p.witness) return o;
      }), _.prop(p, "witness", () => {
        if (a.redeem && a.redeem.input && a.redeem.input.length > 0 && a.redeem.output && a.redeem.output.length > 0) {
          const A = c.toStack(w());
          return p.redeem = Object.assign({
            witness: A
          }, a.redeem), p.redeem.input = o, [].concat(A, a.redeem.output);
        }
        if (a.redeem && a.redeem.output && a.redeem.witness) return [].concat(a.redeem.witness, a.redeem.output);
      }), _.prop(p, "name", () => {
        const A = [
          "p2wsh"
        ];
        return p.redeem !== void 0 && p.redeem.name !== void 0 && A.push(p.redeem.name), A.join("-");
      }), E.validate) {
        let A = ne.from([]);
        if (a.address) {
          if (v().prefix !== S.bech32) throw new TypeError("Invalid prefix or Network mismatch");
          if (v().version !== 0) throw new TypeError("Invalid address version");
          if (v().data.length !== 32) throw new TypeError("Invalid address data");
          A = v().data;
        }
        if (a.hash) {
          if (A.length > 0 && !A.equals(a.hash)) throw new TypeError("Hash mismatch");
          A = a.hash;
        }
        if (a.output) {
          if (a.output.length !== 34 || a.output[0] !== u.OP_0 || a.output[1] !== 32) throw new TypeError("Output is invalid");
          const x = a.output.slice(2);
          if (A.length > 0 && !A.equals(x)) throw new TypeError("Hash mismatch");
          A = x;
        }
        if (a.redeem) {
          if (a.redeem.network && a.redeem.network !== S) throw new TypeError("Network mismatch");
          if (a.redeem.input && a.redeem.input.length > 0 && a.redeem.witness && a.redeem.witness.length > 0) throw new TypeError("Ambiguous witness source");
          if (a.redeem.output) {
            const x = c.decompile(a.redeem.output);
            if (!x || x.length < 1) throw new TypeError("Redeem.output is invalid");
            if (a.redeem.output.byteLength > 3600) throw new TypeError("Redeem.output unspendable if larger than 3600 bytes");
            if (c.countNonPushOnlyOPs(x) > 201) throw new TypeError("Redeem.output unspendable with more than 201 non-push ops");
            const k = n.sha256(a.redeem.output);
            if (A.length > 0 && !A.equals(k)) throw new TypeError("Hash mismatch");
            A = k;
          }
          if (a.redeem.input && !c.isPushOnly(w())) throw new TypeError("Non push-only scriptSig");
          if (a.witness && a.redeem.witness && !(0, f.stacksEqual)(a.witness, a.redeem.witness)) throw new TypeError("Witness and redeem.witness mismatch");
          if (a.redeem.input && w().some(s) || a.redeem.output && (c.decompile(a.redeem.output) || []).some(s)) throw new TypeError("redeem.input or redeem.output contains uncompressed pubkey");
        }
        if (a.witness && a.witness.length > 0) {
          const x = a.witness[a.witness.length - 1];
          if (a.redeem && a.redeem.output && !a.redeem.output.equals(x)) throw new TypeError("Witness and redeem.output mismatch");
          if (a.witness.some(s) || (c.decompile(x) || []).some(s)) throw new TypeError("Witness contains uncompressed pubkey");
        }
      }
      return Object.assign(p, a);
    }
    return zo.p2wsh = g, zo;
  }
  var Vo = {}, ci = {}, Yg;
  function dd() {
    if (Yg) return ci;
    Yg = 1, Object.defineProperty(ci, "__esModule", {
      value: true
    }), ci.getEccLib = ci.initEccLib = void 0;
    const n = {};
    function d(o) {
      o ? o !== n.eccLib && (_(o), n.eccLib = o) : n.eccLib = o;
    }
    ci.initEccLib = d;
    function c() {
      if (!n.eccLib) throw new Error("No ECC Library provided. You must call initEccLib() with a valid TinySecp256k1Interface instance");
      return n.eccLib;
    }
    ci.getEccLib = c;
    const f = (o) => ne.from(o, "hex");
    function _(o) {
      l(typeof o.isXOnlyPoint == "function"), l(o.isXOnlyPoint(f("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))), l(o.isXOnlyPoint(f("fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffc2e"))), l(o.isXOnlyPoint(f("f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9"))), l(o.isXOnlyPoint(f("0000000000000000000000000000000000000000000000000000000000000001"))), l(!o.isXOnlyPoint(f("0000000000000000000000000000000000000000000000000000000000000000"))), l(!o.isXOnlyPoint(f("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"))), l(typeof o.xOnlyPointAddTweak == "function"), u.forEach((s) => {
        const g = o.xOnlyPointAddTweak(f(s.pubkey), f(s.tweak));
        s.result === null ? l(g === null) : (l(g !== null), l(g.parity === s.parity), l(ne.from(g.xOnlyPubkey).equals(f(s.result))));
      });
    }
    function l(o) {
      if (!o) throw new Error("ecc library invalid");
    }
    const u = [
      {
        pubkey: "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
        tweak: "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140",
        parity: -1,
        result: null
      },
      {
        pubkey: "1617d38ed8d8657da4d4761e8057bc396ea9e4b9d29776d4be096016dbd2509b",
        tweak: "a8397a935f0dfceba6ba9618f6451ef4d80637abf4e6af2669fbc9de6a8fd2ac",
        parity: 1,
        result: "e478f99dab91052ab39a33ea35fd5e6e4933f4d28023cd597c9a1f6760346adf"
      },
      {
        pubkey: "2c0b7cf95324a07d05398b240174dc0c2be444d96b159aa6c7f7b1e668680991",
        tweak: "823c3cd2142744b075a87eade7e1b8678ba308d566226a0056ca2b7a76f86b47",
        parity: 0,
        result: "9534f8dc8c6deda2dc007655981c78b49c5d96c778fbf363462a11ec9dfd948c"
      }
    ];
    return ci;
  }
  var Wc = {}, Wt = {}, Kc, Qg;
  function K2() {
    if (Qg) return Kc;
    Qg = 1;
    var n = Kt().Buffer, d = 9007199254740991;
    function c(u) {
      if (u < 0 || u > d || u % 1 !== 0) throw new RangeError("value out of range");
    }
    function f(u, o, s) {
      if (c(u), o || (o = n.allocUnsafe(l(u))), !n.isBuffer(o)) throw new TypeError("buffer must be a Buffer instance");
      return s || (s = 0), u < 253 ? (o.writeUInt8(u, s), f.bytes = 1) : u <= 65535 ? (o.writeUInt8(253, s), o.writeUInt16LE(u, s + 1), f.bytes = 3) : u <= 4294967295 ? (o.writeUInt8(254, s), o.writeUInt32LE(u, s + 1), f.bytes = 5) : (o.writeUInt8(255, s), o.writeUInt32LE(u >>> 0, s + 1), o.writeUInt32LE(u / 4294967296 | 0, s + 5), f.bytes = 9), o;
    }
    function _(u, o) {
      if (!n.isBuffer(u)) throw new TypeError("buffer must be a Buffer instance");
      o || (o = 0);
      var s = u.readUInt8(o);
      if (s < 253) return _.bytes = 1, s;
      if (s === 253) return _.bytes = 3, u.readUInt16LE(o + 1);
      if (s === 254) return _.bytes = 5, u.readUInt32LE(o + 1);
      _.bytes = 9;
      var g = u.readUInt32LE(o + 1), a = u.readUInt32LE(o + 5), E = a * 4294967296 + g;
      return c(E), E;
    }
    function l(u) {
      return c(u), u < 253 ? 1 : u <= 65535 ? 3 : u <= 4294967295 ? 5 : 9;
    }
    return Kc = {
      encode: f,
      decode: _,
      encodingLength: l
    }, Kc;
  }
  var Jg;
  function js() {
    if (Jg) return Wt;
    Jg = 1, Object.defineProperty(Wt, "__esModule", {
      value: true
    }), Wt.BufferReader = Wt.BufferWriter = Wt.cloneBuffer = Wt.reverseBuffer = Wt.writeUInt64LE = Wt.readUInt64LE = Wt.varuint = void 0;
    const n = Qt(), { typeforce: d } = n, c = K2();
    Wt.varuint = c;
    function f(a, E) {
      if (typeof a != "number") throw new Error("cannot write a non-number as a number");
      if (a < 0) throw new Error("specified a negative value for writing an unsigned value");
      if (a > E) throw new Error("RangeError: value out of range");
      if (Math.floor(a) !== a) throw new Error("value has a fractional component");
    }
    function _(a, E) {
      const v = a.readUInt32LE(E);
      let w = a.readUInt32LE(E + 4);
      return w *= 4294967296, f(w + v, 9007199254740991), w + v;
    }
    Wt.readUInt64LE = _;
    function l(a, E, v) {
      return f(E, 9007199254740991), a.writeInt32LE(E & -1, v), a.writeUInt32LE(Math.floor(E / 4294967296), v + 4), v + 8;
    }
    Wt.writeUInt64LE = l;
    function u(a) {
      if (a.length < 1) return a;
      let E = a.length - 1, v = 0;
      for (let w = 0; w < a.length / 2; w++) v = a[w], a[w] = a[E], a[E] = v, E--;
      return a;
    }
    Wt.reverseBuffer = u;
    function o(a) {
      const E = ne.allocUnsafe(a.length);
      return a.copy(E), E;
    }
    Wt.cloneBuffer = o;
    class s {
      static withCapacity(E) {
        return new s(ne.alloc(E));
      }
      constructor(E, v = 0) {
        this.buffer = E, this.offset = v, d(n.tuple(n.Buffer, n.UInt32), [
          E,
          v
        ]);
      }
      writeUInt8(E) {
        this.offset = this.buffer.writeUInt8(E, this.offset);
      }
      writeInt32(E) {
        this.offset = this.buffer.writeInt32LE(E, this.offset);
      }
      writeUInt32(E) {
        this.offset = this.buffer.writeUInt32LE(E, this.offset);
      }
      writeUInt64(E) {
        this.offset = l(this.buffer, E, this.offset);
      }
      writeVarInt(E) {
        c.encode(E, this.buffer, this.offset), this.offset += c.encode.bytes;
      }
      writeSlice(E) {
        if (this.buffer.length < this.offset + E.length) throw new Error("Cannot write slice out of bounds");
        this.offset += E.copy(this.buffer, this.offset);
      }
      writeVarSlice(E) {
        this.writeVarInt(E.length), this.writeSlice(E);
      }
      writeVector(E) {
        this.writeVarInt(E.length), E.forEach((v) => this.writeVarSlice(v));
      }
      end() {
        if (this.buffer.length === this.offset) return this.buffer;
        throw new Error(`buffer size ${this.buffer.length}, offset ${this.offset}`);
      }
    }
    Wt.BufferWriter = s;
    class g {
      constructor(E, v = 0) {
        this.buffer = E, this.offset = v, d(n.tuple(n.Buffer, n.UInt32), [
          E,
          v
        ]);
      }
      readUInt8() {
        const E = this.buffer.readUInt8(this.offset);
        return this.offset++, E;
      }
      readInt32() {
        const E = this.buffer.readInt32LE(this.offset);
        return this.offset += 4, E;
      }
      readUInt32() {
        const E = this.buffer.readUInt32LE(this.offset);
        return this.offset += 4, E;
      }
      readUInt64() {
        const E = _(this.buffer, this.offset);
        return this.offset += 8, E;
      }
      readVarInt() {
        const E = c.decode(this.buffer, this.offset);
        return this.offset += c.decode.bytes, E;
      }
      readSlice(E) {
        if (this.buffer.length < this.offset + E) throw new Error("Cannot read slice out of bounds");
        const v = this.buffer.slice(this.offset, this.offset + E);
        return this.offset += E, v;
      }
      readVarSlice() {
        return this.readSlice(this.readVarInt());
      }
      readVector() {
        const E = this.readVarInt(), v = [];
        for (let w = 0; w < E; w++) v.push(this.readVarSlice());
        return v;
      }
    }
    return Wt.BufferReader = g, Wt;
  }
  var Zg;
  function hd() {
    return Zg || (Zg = 1, (function(n) {
      Object.defineProperty(n, "__esModule", {
        value: true
      }), n.tweakKey = n.tapTweakHash = n.tapleafHash = n.findScriptPath = n.toHashTree = n.rootHashFromPath = n.MAX_TAPTREE_DEPTH = n.LEAF_VERSION_TAPSCRIPT = void 0;
      const d = qr(), c = dd(), f = an(), _ = js(), l = Qt();
      n.LEAF_VERSION_TAPSCRIPT = 192, n.MAX_TAPTREE_DEPTH = 128;
      const u = (p) => "left" in p && "right" in p;
      function o(p, A) {
        if (p.length < 33) throw new TypeError(`The control-block length is too small. Got ${p.length}, expected min 33.`);
        const x = (p.length - 33) / 32;
        let k = A;
        for (let B = 0; B < x; B++) {
          const O = p.slice(33 + 32 * B, 65 + 32 * B);
          k.compare(O) < 0 ? k = w(k, O) : k = w(O, k);
        }
        return k;
      }
      n.rootHashFromPath = o;
      function s(p) {
        if ((0, l.isTapleaf)(p)) return {
          hash: a(p)
        };
        const A = [
          s(p[0]),
          s(p[1])
        ];
        A.sort((B, O) => B.hash.compare(O.hash));
        const [x, k] = A;
        return {
          hash: w(x.hash, k.hash),
          left: x,
          right: k
        };
      }
      n.toHashTree = s;
      function g(p, A) {
        if (u(p)) {
          const x = g(p.left, A);
          if (x !== void 0) return [
            ...x,
            p.right.hash
          ];
          const k = g(p.right, A);
          if (k !== void 0) return [
            ...k,
            p.left.hash
          ];
        } else if (p.hash.equals(A)) return [];
      }
      n.findScriptPath = g;
      function a(p) {
        const A = p.version || n.LEAF_VERSION_TAPSCRIPT;
        return f.taggedHash("TapLeaf", d.Buffer.concat([
          d.Buffer.from([
            A
          ]),
          S(p.output)
        ]));
      }
      n.tapleafHash = a;
      function E(p, A) {
        return f.taggedHash("TapTweak", d.Buffer.concat(A ? [
          p,
          A
        ] : [
          p
        ]));
      }
      n.tapTweakHash = E;
      function v(p, A) {
        if (!d.Buffer.isBuffer(p) || p.length !== 32 || A && A.length !== 32) return null;
        const x = E(p, A), k = (0, c.getEccLib)().xOnlyPointAddTweak(p, x);
        return !k || k.xOnlyPubkey === null ? null : {
          parity: k.parity,
          x: d.Buffer.from(k.xOnlyPubkey)
        };
      }
      n.tweakKey = v;
      function w(p, A) {
        return f.taggedHash("TapBranch", d.Buffer.concat([
          p,
          A
        ]));
      }
      function S(p) {
        const A = _.varuint.encodingLength(p.length), x = d.Buffer.allocUnsafe(A);
        return _.varuint.encode(p.length, x), d.Buffer.concat([
          x,
          p
        ]);
      }
    })(Wc)), Wc;
  }
  var $g;
  function z2() {
    if ($g) return Vo;
    $g = 1, Object.defineProperty(Vo, "__esModule", {
      value: true
    }), Vo.p2tr = void 0;
    const n = qr(), d = Rr(), c = er(), f = Qt(), _ = dd(), l = hd(), u = Hn(), o = qs(), s = pd(), g = c.OPS, a = 1, E = 80;
    function v(w, S) {
      if (!w.address && !w.output && !w.pubkey && !w.internalPubkey && !(w.witness && w.witness.length > 1)) throw new TypeError("Not enough data");
      S = Object.assign({
        validate: true
      }, S || {}), (0, f.typeforce)({
        address: f.typeforce.maybe(f.typeforce.String),
        input: f.typeforce.maybe(f.typeforce.BufferN(0)),
        network: f.typeforce.maybe(f.typeforce.Object),
        output: f.typeforce.maybe(f.typeforce.BufferN(34)),
        internalPubkey: f.typeforce.maybe(f.typeforce.BufferN(32)),
        hash: f.typeforce.maybe(f.typeforce.BufferN(32)),
        pubkey: f.typeforce.maybe(f.typeforce.BufferN(32)),
        signature: f.typeforce.maybe(f.typeforce.anyOf(f.typeforce.BufferN(64), f.typeforce.BufferN(65))),
        witness: f.typeforce.maybe(f.typeforce.arrayOf(f.typeforce.Buffer)),
        scriptTree: f.typeforce.maybe(f.isTaptree),
        redeem: f.typeforce.maybe({
          output: f.typeforce.maybe(f.typeforce.Buffer),
          redeemVersion: f.typeforce.maybe(f.typeforce.Number),
          witness: f.typeforce.maybe(f.typeforce.arrayOf(f.typeforce.Buffer))
        }),
        redeemVersion: f.typeforce.maybe(f.typeforce.Number)
      }, w);
      const p = u.value(() => (0, s.fromBech32)(w.address)), A = u.value(() => {
        if (!(!w.witness || !w.witness.length)) return w.witness.length >= 2 && w.witness[w.witness.length - 1][0] === E ? w.witness.slice(0, -1) : w.witness.slice();
      }), x = u.value(() => {
        if (w.scriptTree) return (0, l.toHashTree)(w.scriptTree);
        if (w.hash) return {
          hash: w.hash
        };
      }), k = w.network || d.bitcoin, B = {
        name: "p2tr",
        network: k
      };
      if (u.prop(B, "address", () => {
        if (!B.pubkey) return;
        const O = o.bech32m.toWords(B.pubkey);
        return O.unshift(a), o.bech32m.encode(k.bech32, O);
      }), u.prop(B, "hash", () => {
        const O = x();
        if (O) return O.hash;
        const U = A();
        if (U && U.length > 1) {
          const C = U[U.length - 1], K = C[0] & f.TAPLEAF_VERSION_MASK, X = U[U.length - 2], Q = (0, l.tapleafHash)({
            output: X,
            version: K
          });
          return (0, l.rootHashFromPath)(C, Q);
        }
        return null;
      }), u.prop(B, "output", () => {
        if (B.pubkey) return c.compile([
          g.OP_1,
          B.pubkey
        ]);
      }), u.prop(B, "redeemVersion", () => w.redeemVersion ? w.redeemVersion : w.redeem && w.redeem.redeemVersion !== void 0 && w.redeem.redeemVersion !== null ? w.redeem.redeemVersion : l.LEAF_VERSION_TAPSCRIPT), u.prop(B, "redeem", () => {
        const O = A();
        if (!(!O || O.length < 2)) return {
          output: O[O.length - 2],
          witness: O.slice(0, -2),
          redeemVersion: O[O.length - 1][0] & f.TAPLEAF_VERSION_MASK
        };
      }), u.prop(B, "pubkey", () => {
        if (w.pubkey) return w.pubkey;
        if (w.output) return w.output.slice(2);
        if (w.address) return p().data;
        if (B.internalPubkey) {
          const O = (0, l.tweakKey)(B.internalPubkey, B.hash);
          if (O) return O.x;
        }
      }), u.prop(B, "internalPubkey", () => {
        if (w.internalPubkey) return w.internalPubkey;
        const O = A();
        if (O && O.length > 1) return O[O.length - 1].slice(1, 33);
      }), u.prop(B, "signature", () => {
        if (w.signature) return w.signature;
        const O = A();
        if (!(!O || O.length !== 1)) return O[0];
      }), u.prop(B, "witness", () => {
        if (w.witness) return w.witness;
        const O = x();
        if (O && w.redeem && w.redeem.output && w.internalPubkey) {
          const U = (0, l.tapleafHash)({
            output: w.redeem.output,
            version: B.redeemVersion
          }), C = (0, l.findScriptPath)(O, U);
          if (!C) return;
          const K = (0, l.tweakKey)(w.internalPubkey, O.hash);
          if (!K) return;
          const X = n.Buffer.concat([
            n.Buffer.from([
              B.redeemVersion | K.parity
            ]),
            w.internalPubkey
          ].concat(C));
          return [
            w.redeem.output,
            X
          ];
        }
        if (w.signature) return [
          w.signature
        ];
      }), S.validate) {
        let O = n.Buffer.from([]);
        if (w.address) {
          if (k && k.bech32 !== p().prefix) throw new TypeError("Invalid prefix or Network mismatch");
          if (p().version !== a) throw new TypeError("Invalid address version");
          if (p().data.length !== 32) throw new TypeError("Invalid address data");
          O = p().data;
        }
        if (w.pubkey) {
          if (O.length > 0 && !O.equals(w.pubkey)) throw new TypeError("Pubkey mismatch");
          O = w.pubkey;
        }
        if (w.output) {
          if (w.output.length !== 34 || w.output[0] !== g.OP_1 || w.output[1] !== 32) throw new TypeError("Output is invalid");
          if (O.length > 0 && !O.equals(w.output.slice(2))) throw new TypeError("Pubkey mismatch");
          O = w.output.slice(2);
        }
        if (w.internalPubkey) {
          const K = (0, l.tweakKey)(w.internalPubkey, B.hash);
          if (O.length > 0 && !O.equals(K.x)) throw new TypeError("Pubkey mismatch");
          O = K.x;
        }
        if (O && O.length && !(0, _.getEccLib)().isXOnlyPoint(O)) throw new TypeError("Invalid pubkey for p2tr");
        const U = x();
        if (w.hash && U && !w.hash.equals(U.hash)) throw new TypeError("Hash mismatch");
        if (w.redeem && w.redeem.output && U) {
          const K = (0, l.tapleafHash)({
            output: w.redeem.output,
            version: B.redeemVersion
          });
          if (!(0, l.findScriptPath)(U, K)) throw new TypeError("Redeem script not in tree");
        }
        const C = A();
        if (w.redeem && B.redeem) {
          if (w.redeem.redeemVersion && w.redeem.redeemVersion !== B.redeem.redeemVersion) throw new TypeError("Redeem.redeemVersion and witness mismatch");
          if (w.redeem.output) {
            if (c.decompile(w.redeem.output).length === 0) throw new TypeError("Redeem.output is invalid");
            if (B.redeem.output && !w.redeem.output.equals(B.redeem.output)) throw new TypeError("Redeem.output and witness mismatch");
          }
          if (w.redeem.witness && B.redeem.witness && !(0, f.stacksEqual)(w.redeem.witness, B.redeem.witness)) throw new TypeError("Redeem.witness and witness mismatch");
        }
        if (C && C.length) if (C.length === 1) {
          if (w.signature && !w.signature.equals(C[0])) throw new TypeError("Signature mismatch");
        } else {
          const K = C[C.length - 1];
          if (K.length < 33) throw new TypeError(`The control-block length is too small. Got ${K.length}, expected min 33.`);
          if ((K.length - 33) % 32 !== 0) throw new TypeError(`The control-block length of ${K.length} is incorrect!`);
          const X = (K.length - 33) / 32;
          if (X > 128) throw new TypeError(`The script path is too long. Got ${X}, expected max 128.`);
          const Q = K.slice(1, 33);
          if (w.internalPubkey && !w.internalPubkey.equals(Q)) throw new TypeError("Internal pubkey mismatch");
          if (!(0, _.getEccLib)().isXOnlyPoint(Q)) throw new TypeError("Invalid internalPubkey for p2tr witness");
          const ae = K[0] & f.TAPLEAF_VERSION_MASK, Ee = C[C.length - 2], W = (0, l.tapleafHash)({
            output: Ee,
            version: ae
          }), ye = (0, l.rootHashFromPath)(K, W), Te = (0, l.tweakKey)(Q, ye);
          if (!Te) throw new TypeError("Invalid outputKey for p2tr witness");
          if (O.length && !O.equals(Te.x)) throw new TypeError("Pubkey mismatch for p2tr witness");
          if (Te.parity !== (K[0] & 1)) throw new Error("Incorrect parity");
        }
      }
      return Object.assign(B, w);
    }
    return Vo.p2tr = v, Vo;
  }
  var em;
  function ia() {
    return em || (em = 1, (function(n) {
      Object.defineProperty(n, "__esModule", {
        value: true
      }), n.p2tr = n.p2wsh = n.p2wpkh = n.p2sh = n.p2pkh = n.p2pk = n.p2ms = n.embed = void 0;
      const d = O2();
      Object.defineProperty(n, "embed", {
        enumerable: true,
        get: function() {
          return d.p2data;
        }
      });
      const c = R2();
      Object.defineProperty(n, "p2ms", {
        enumerable: true,
        get: function() {
          return c.p2ms;
        }
      });
      const f = C2();
      Object.defineProperty(n, "p2pk", {
        enumerable: true,
        get: function() {
          return f.p2pk;
        }
      });
      const _ = H2();
      Object.defineProperty(n, "p2pkh", {
        enumerable: true,
        get: function() {
          return _.p2pkh;
        }
      });
      const l = q2();
      Object.defineProperty(n, "p2sh", {
        enumerable: true,
        get: function() {
          return l.p2sh;
        }
      });
      const u = j2();
      Object.defineProperty(n, "p2wpkh", {
        enumerable: true,
        get: function() {
          return u.p2wpkh;
        }
      });
      const o = W2();
      Object.defineProperty(n, "p2wsh", {
        enumerable: true,
        get: function() {
          return o.p2wsh;
        }
      });
      const s = z2();
      Object.defineProperty(n, "p2tr", {
        enumerable: true,
        get: function() {
          return s.p2tr;
        }
      });
    })(Nc)), Nc;
  }
  var tm;
  function pd() {
    if (tm) return $t;
    tm = 1, Object.defineProperty($t, "__esModule", {
      value: true
    }), $t.toOutputScript = $t.fromOutputScript = $t.toBech32 = $t.toBase58Check = $t.fromBech32 = $t.fromBase58Check = void 0;
    const n = Rr(), d = ia(), c = er(), f = Qt(), _ = qs(), l = cd(), u = 40, o = 2, s = 16, g = 2, a = 80, E = "WARNING: Sending to a future segwit version address can lead to loss of funds. End users MUST be warned carefully in the GUI and asked if they wish to proceed with caution. Wallets should verify the segwit version from the output of fromBech32, then decide when it is safe to use which version of segwit.";
    function v(B, O) {
      const U = B.slice(2);
      if (U.length < o || U.length > u) throw new TypeError("Invalid program length for segwit address");
      const C = B[0] - a;
      if (C < g || C > s) throw new TypeError("Invalid version for segwit address");
      if (B[1] !== U.length) throw new TypeError("Invalid script for segwit address");
      return console.warn(E), A(U, C, O.bech32);
    }
    function w(B) {
      const O = ne.from(l.decode(B));
      if (O.length < 21) throw new TypeError(B + " is too short");
      if (O.length > 21) throw new TypeError(B + " is too long");
      const U = O.readUInt8(0), C = O.slice(1);
      return {
        version: U,
        hash: C
      };
    }
    $t.fromBase58Check = w;
    function S(B) {
      let O, U;
      try {
        O = _.bech32.decode(B);
      } catch {
      }
      if (O) {
        if (U = O.words[0], U !== 0) throw new TypeError(B + " uses wrong encoding");
      } else if (O = _.bech32m.decode(B), U = O.words[0], U === 0) throw new TypeError(B + " uses wrong encoding");
      const C = _.bech32.fromWords(O.words.slice(1));
      return {
        version: U,
        prefix: O.prefix,
        data: ne.from(C)
      };
    }
    $t.fromBech32 = S;
    function p(B, O) {
      (0, f.typeforce)((0, f.tuple)(f.Hash160bit, f.UInt8), arguments);
      const U = ne.allocUnsafe(21);
      return U.writeUInt8(O, 0), B.copy(U, 1), l.encode(U);
    }
    $t.toBase58Check = p;
    function A(B, O, U) {
      const C = _.bech32.toWords(B);
      return C.unshift(O), O === 0 ? _.bech32.encode(U, C) : _.bech32m.encode(U, C);
    }
    $t.toBech32 = A;
    function x(B, O) {
      O = O || n.bitcoin;
      try {
        return d.p2pkh({
          output: B,
          network: O
        }).address;
      } catch {
      }
      try {
        return d.p2sh({
          output: B,
          network: O
        }).address;
      } catch {
      }
      try {
        return d.p2wpkh({
          output: B,
          network: O
        }).address;
      } catch {
      }
      try {
        return d.p2wsh({
          output: B,
          network: O
        }).address;
      } catch {
      }
      try {
        return d.p2tr({
          output: B,
          network: O
        }).address;
      } catch {
      }
      try {
        return v(B, O);
      } catch {
      }
      throw new Error(c.toASM(B) + " has no matching Address");
    }
    $t.fromOutputScript = x;
    function k(B, O) {
      O = O || n.bitcoin;
      let U, C;
      try {
        U = w(B);
      } catch {
      }
      if (U) {
        if (U.version === O.pubKeyHash) return d.p2pkh({
          hash: U.hash
        }).output;
        if (U.version === O.scriptHash) return d.p2sh({
          hash: U.hash
        }).output;
      } else {
        try {
          C = S(B);
        } catch {
        }
        if (C) {
          if (C.prefix !== O.bech32) throw new Error(B + " has an invalid prefix");
          if (C.version === 0) {
            if (C.data.length === 20) return d.p2wpkh({
              hash: C.data
            }).output;
            if (C.data.length === 32) return d.p2wsh({
              hash: C.data
            }).output;
          } else if (C.version === 1) {
            if (C.data.length === 32) return d.p2tr({
              pubkey: C.data
            }).output;
          } else if (C.version >= g && C.version <= s && C.data.length >= o && C.data.length <= u) return console.warn(E), c.compile([
            C.version + a,
            C.data
          ]);
        }
      }
      throw new Error(B + " has no matching Script");
    }
    return $t.toOutputScript = k, $t;
  }
  var Go = {}, Xo = {}, rm;
  function V2() {
    if (rm) return Xo;
    rm = 1, Object.defineProperty(Xo, "__esModule", {
      value: true
    }), Xo.fastMerkleRoot = void 0;
    function n(d, c) {
      if (!Array.isArray(d)) throw TypeError("Expected values Array");
      if (typeof c != "function") throw TypeError("Expected digest Function");
      let f = d.length;
      const _ = d.concat();
      for (; f > 1; ) {
        let l = 0;
        for (let u = 0; u < f; u += 2, ++l) {
          const o = _[u], s = u + 1 === f ? o : _[u + 1], g = ne.concat([
            o,
            s
          ]);
          _[l] = c(g);
        }
        f = l;
      }
      return _[0];
    }
    return Xo.fastMerkleRoot = n, Xo;
  }
  var Yo = {}, nm;
  function oa() {
    if (nm) return Yo;
    nm = 1, Object.defineProperty(Yo, "__esModule", {
      value: true
    }), Yo.Transaction = void 0;
    const n = js(), d = an(), c = er(), f = er(), _ = Qt(), { typeforce: l } = _;
    function u(A) {
      const x = A.length;
      return n.varuint.encodingLength(x) + x;
    }
    function o(A) {
      const x = A.length;
      return n.varuint.encodingLength(x) + A.reduce((k, B) => k + u(B), 0);
    }
    const s = ne.allocUnsafe(0), g = [], a = ne.from("0000000000000000000000000000000000000000000000000000000000000000", "hex"), E = ne.from("0000000000000000000000000000000000000000000000000000000000000001", "hex"), v = ne.from("ffffffffffffffff", "hex"), w = {
      script: s,
      valueBuffer: v
    };
    function S(A) {
      return A.value !== void 0;
    }
    class p {
      constructor() {
        this.version = 1, this.locktime = 0, this.ins = [], this.outs = [];
      }
      static fromBuffer(x, k) {
        const B = new n.BufferReader(x), O = new p();
        O.version = B.readInt32();
        const U = B.readUInt8(), C = B.readUInt8();
        let K = false;
        U === p.ADVANCED_TRANSACTION_MARKER && C === p.ADVANCED_TRANSACTION_FLAG ? K = true : B.offset -= 2;
        const X = B.readVarInt();
        for (let ae = 0; ae < X; ++ae) O.ins.push({
          hash: B.readSlice(32),
          index: B.readUInt32(),
          script: B.readVarSlice(),
          sequence: B.readUInt32(),
          witness: g
        });
        const Q = B.readVarInt();
        for (let ae = 0; ae < Q; ++ae) O.outs.push({
          value: B.readUInt64(),
          script: B.readVarSlice()
        });
        if (K) {
          for (let ae = 0; ae < X; ++ae) O.ins[ae].witness = B.readVector();
          if (!O.hasWitnesses()) throw new Error("Transaction has superfluous witness data");
        }
        if (O.locktime = B.readUInt32(), k) return O;
        if (B.offset !== x.length) throw new Error("Transaction has unexpected data");
        return O;
      }
      static fromHex(x) {
        return p.fromBuffer(ne.from(x, "hex"), false);
      }
      static isCoinbaseHash(x) {
        l(_.Hash256bit, x);
        for (let k = 0; k < 32; ++k) if (x[k] !== 0) return false;
        return true;
      }
      isCoinbase() {
        return this.ins.length === 1 && p.isCoinbaseHash(this.ins[0].hash);
      }
      addInput(x, k, B, O) {
        return l(_.tuple(_.Hash256bit, _.UInt32, _.maybe(_.UInt32), _.maybe(_.Buffer)), arguments), _.Null(B) && (B = p.DEFAULT_SEQUENCE), this.ins.push({
          hash: x,
          index: k,
          script: O || s,
          sequence: B,
          witness: g
        }) - 1;
      }
      addOutput(x, k) {
        return l(_.tuple(_.Buffer, _.Satoshi), arguments), this.outs.push({
          script: x,
          value: k
        }) - 1;
      }
      hasWitnesses() {
        return this.ins.some((x) => x.witness.length !== 0);
      }
      weight() {
        const x = this.byteLength(false), k = this.byteLength(true);
        return x * 3 + k;
      }
      virtualSize() {
        return Math.ceil(this.weight() / 4);
      }
      byteLength(x = true) {
        const k = x && this.hasWitnesses();
        return (k ? 10 : 8) + n.varuint.encodingLength(this.ins.length) + n.varuint.encodingLength(this.outs.length) + this.ins.reduce((B, O) => B + 40 + u(O.script), 0) + this.outs.reduce((B, O) => B + 8 + u(O.script), 0) + (k ? this.ins.reduce((B, O) => B + o(O.witness), 0) : 0);
      }
      clone() {
        const x = new p();
        return x.version = this.version, x.locktime = this.locktime, x.ins = this.ins.map((k) => ({
          hash: k.hash,
          index: k.index,
          script: k.script,
          sequence: k.sequence,
          witness: k.witness
        })), x.outs = this.outs.map((k) => ({
          script: k.script,
          value: k.value
        })), x;
      }
      hashForSignature(x, k, B) {
        if (l(_.tuple(_.UInt32, _.Buffer, _.Number), arguments), x >= this.ins.length) return E;
        const O = c.compile(c.decompile(k).filter((K) => K !== f.OPS.OP_CODESEPARATOR)), U = this.clone();
        if ((B & 31) === p.SIGHASH_NONE) U.outs = [], U.ins.forEach((K, X) => {
          X !== x && (K.sequence = 0);
        });
        else if ((B & 31) === p.SIGHASH_SINGLE) {
          if (x >= this.outs.length) return E;
          U.outs.length = x + 1;
          for (let K = 0; K < x; K++) U.outs[K] = w;
          U.ins.forEach((K, X) => {
            X !== x && (K.sequence = 0);
          });
        }
        B & p.SIGHASH_ANYONECANPAY ? (U.ins = [
          U.ins[x]
        ], U.ins[0].script = O) : (U.ins.forEach((K) => {
          K.script = s;
        }), U.ins[x].script = O);
        const C = ne.allocUnsafe(U.byteLength(false) + 4);
        return C.writeInt32LE(B, C.length - 4), U.__toBuffer(C, 0, false), d.hash256(C);
      }
      hashForWitnessV1(x, k, B, O, U, C) {
        if (l(_.tuple(_.UInt32, l.arrayOf(_.Buffer), l.arrayOf(_.Satoshi), _.UInt32), arguments), B.length !== this.ins.length || k.length !== this.ins.length) throw new Error("Must supply prevout script and value for all inputs");
        const K = O === p.SIGHASH_DEFAULT ? p.SIGHASH_ALL : O & p.SIGHASH_OUTPUT_MASK, Q = (O & p.SIGHASH_INPUT_MASK) === p.SIGHASH_ANYONECANPAY, ae = K === p.SIGHASH_NONE, Ee = K === p.SIGHASH_SINGLE;
        let W = s, ye = s, Te = s, Ie = s, Re = s;
        if (!Q) {
          let Z = n.BufferWriter.withCapacity(36 * this.ins.length);
          this.ins.forEach((V) => {
            Z.writeSlice(V.hash), Z.writeUInt32(V.index);
          }), W = d.sha256(Z.end()), Z = n.BufferWriter.withCapacity(8 * this.ins.length), B.forEach((V) => Z.writeUInt64(V)), ye = d.sha256(Z.end()), Z = n.BufferWriter.withCapacity(k.map(u).reduce((V, ce) => V + ce)), k.forEach((V) => Z.writeVarSlice(V)), Te = d.sha256(Z.end()), Z = n.BufferWriter.withCapacity(4 * this.ins.length), this.ins.forEach((V) => Z.writeUInt32(V.sequence)), Ie = d.sha256(Z.end());
        }
        if (ae || Ee) {
          if (Ee && x < this.outs.length) {
            const Z = this.outs[x], V = n.BufferWriter.withCapacity(8 + u(Z.script));
            V.writeUInt64(Z.value), V.writeVarSlice(Z.script), Re = d.sha256(V.end());
          }
        } else {
          const Z = this.outs.map((ce) => 8 + u(ce.script)).reduce((ce, ee) => ce + ee), V = n.BufferWriter.withCapacity(Z);
          this.outs.forEach((ce) => {
            V.writeUInt64(ce.value), V.writeVarSlice(ce.script);
          }), Re = d.sha256(V.end());
        }
        const te = (U ? 2 : 0) + (C ? 1 : 0), D = 174 - (Q ? 49 : 0) - (ae ? 32 : 0) + (C ? 32 : 0) + (U ? 37 : 0), G = n.BufferWriter.withCapacity(D);
        if (G.writeUInt8(O), G.writeInt32(this.version), G.writeUInt32(this.locktime), G.writeSlice(W), G.writeSlice(ye), G.writeSlice(Te), G.writeSlice(Ie), ae || Ee || G.writeSlice(Re), G.writeUInt8(te), Q) {
          const Z = this.ins[x];
          G.writeSlice(Z.hash), G.writeUInt32(Z.index), G.writeUInt64(B[x]), G.writeVarSlice(k[x]), G.writeUInt32(Z.sequence);
        } else G.writeUInt32(x);
        if (C) {
          const Z = n.BufferWriter.withCapacity(u(C));
          Z.writeVarSlice(C), G.writeSlice(d.sha256(Z.end()));
        }
        return Ee && G.writeSlice(Re), U && (G.writeSlice(U), G.writeUInt8(0), G.writeUInt32(4294967295)), d.taggedHash("TapSighash", ne.concat([
          ne.from([
            0
          ]),
          G.end()
        ]));
      }
      hashForWitnessV0(x, k, B, O) {
        l(_.tuple(_.UInt32, _.Buffer, _.Satoshi, _.UInt32), arguments);
        let U = ne.from([]), C, K = a, X = a, Q = a;
        if (O & p.SIGHASH_ANYONECANPAY || (U = ne.allocUnsafe(36 * this.ins.length), C = new n.BufferWriter(U, 0), this.ins.forEach((Ee) => {
          C.writeSlice(Ee.hash), C.writeUInt32(Ee.index);
        }), X = d.hash256(U)), !(O & p.SIGHASH_ANYONECANPAY) && (O & 31) !== p.SIGHASH_SINGLE && (O & 31) !== p.SIGHASH_NONE && (U = ne.allocUnsafe(4 * this.ins.length), C = new n.BufferWriter(U, 0), this.ins.forEach((Ee) => {
          C.writeUInt32(Ee.sequence);
        }), Q = d.hash256(U)), (O & 31) !== p.SIGHASH_SINGLE && (O & 31) !== p.SIGHASH_NONE) {
          const Ee = this.outs.reduce((W, ye) => W + 8 + u(ye.script), 0);
          U = ne.allocUnsafe(Ee), C = new n.BufferWriter(U, 0), this.outs.forEach((W) => {
            C.writeUInt64(W.value), C.writeVarSlice(W.script);
          }), K = d.hash256(U);
        } else if ((O & 31) === p.SIGHASH_SINGLE && x < this.outs.length) {
          const Ee = this.outs[x];
          U = ne.allocUnsafe(8 + u(Ee.script)), C = new n.BufferWriter(U, 0), C.writeUInt64(Ee.value), C.writeVarSlice(Ee.script), K = d.hash256(U);
        }
        U = ne.allocUnsafe(156 + u(k)), C = new n.BufferWriter(U, 0);
        const ae = this.ins[x];
        return C.writeInt32(this.version), C.writeSlice(X), C.writeSlice(Q), C.writeSlice(ae.hash), C.writeUInt32(ae.index), C.writeVarSlice(k), C.writeUInt64(B), C.writeUInt32(ae.sequence), C.writeSlice(K), C.writeUInt32(this.locktime), C.writeUInt32(O), d.hash256(U);
      }
      getHash(x) {
        return x && this.isCoinbase() ? ne.alloc(32, 0) : d.hash256(this.__toBuffer(void 0, void 0, x));
      }
      getId() {
        return (0, n.reverseBuffer)(this.getHash(false)).toString("hex");
      }
      toBuffer(x, k) {
        return this.__toBuffer(x, k, true);
      }
      toHex() {
        return this.toBuffer(void 0, void 0).toString("hex");
      }
      setInputScript(x, k) {
        l(_.tuple(_.Number, _.Buffer), arguments), this.ins[x].script = k;
      }
      setWitness(x, k) {
        l(_.tuple(_.Number, [
          _.Buffer
        ]), arguments), this.ins[x].witness = k;
      }
      __toBuffer(x, k, B = false) {
        x || (x = ne.allocUnsafe(this.byteLength(B)));
        const O = new n.BufferWriter(x, k || 0);
        O.writeInt32(this.version);
        const U = B && this.hasWitnesses();
        return U && (O.writeUInt8(p.ADVANCED_TRANSACTION_MARKER), O.writeUInt8(p.ADVANCED_TRANSACTION_FLAG)), O.writeVarInt(this.ins.length), this.ins.forEach((C) => {
          O.writeSlice(C.hash), O.writeUInt32(C.index), O.writeVarSlice(C.script), O.writeUInt32(C.sequence);
        }), O.writeVarInt(this.outs.length), this.outs.forEach((C) => {
          S(C) ? O.writeUInt64(C.value) : O.writeSlice(C.valueBuffer), O.writeVarSlice(C.script);
        }), U && this.ins.forEach((C) => {
          O.writeVector(C.witness);
        }), O.writeUInt32(this.locktime), k !== void 0 ? x.slice(k, O.offset) : x;
      }
    }
    return Yo.Transaction = p, p.DEFAULT_SEQUENCE = 4294967295, p.SIGHASH_DEFAULT = 0, p.SIGHASH_ALL = 1, p.SIGHASH_NONE = 2, p.SIGHASH_SINGLE = 3, p.SIGHASH_ANYONECANPAY = 128, p.SIGHASH_OUTPUT_MASK = 3, p.SIGHASH_INPUT_MASK = 128, p.ADVANCED_TRANSACTION_MARKER = 0, p.ADVANCED_TRANSACTION_FLAG = 1, Yo;
  }
  var im;
  function G2() {
    if (im) return Go;
    im = 1, Object.defineProperty(Go, "__esModule", {
      value: true
    }), Go.Block = void 0;
    const n = js(), d = an(), c = V2(), f = oa(), _ = Qt(), { typeforce: l } = _, u = new TypeError("Cannot compute merkle root for zero transactions"), o = new TypeError("Cannot compute witness commit for non-segwit block");
    class s {
      constructor() {
        this.version = 1, this.prevHash = void 0, this.merkleRoot = void 0, this.timestamp = 0, this.witnessCommit = void 0, this.bits = 0, this.nonce = 0, this.transactions = void 0;
      }
      static fromBuffer(v) {
        if (v.length < 80) throw new Error("Buffer too small (< 80 bytes)");
        const w = new n.BufferReader(v), S = new s();
        if (S.version = w.readInt32(), S.prevHash = w.readSlice(32), S.merkleRoot = w.readSlice(32), S.timestamp = w.readUInt32(), S.bits = w.readUInt32(), S.nonce = w.readUInt32(), v.length === 80) return S;
        const p = () => {
          const k = f.Transaction.fromBuffer(w.buffer.slice(w.offset), true);
          return w.offset += k.byteLength(), k;
        }, A = w.readVarInt();
        S.transactions = [];
        for (let k = 0; k < A; ++k) {
          const B = p();
          S.transactions.push(B);
        }
        const x = S.getWitnessCommit();
        return x && (S.witnessCommit = x), S;
      }
      static fromHex(v) {
        return s.fromBuffer(ne.from(v, "hex"));
      }
      static calculateTarget(v) {
        const w = ((v & 4278190080) >> 24) - 3, S = v & 8388607, p = ne.alloc(32, 0);
        return p.writeUIntBE(S, 29 - w, 3), p;
      }
      static calculateMerkleRoot(v, w) {
        if (l([
          {
            getHash: _.Function
          }
        ], v), v.length === 0) throw u;
        if (w && !g(v)) throw o;
        const S = v.map((A) => A.getHash(w)), p = (0, c.fastMerkleRoot)(S, d.hash256);
        return w ? d.hash256(ne.concat([
          p,
          v[0].ins[0].witness[0]
        ])) : p;
      }
      getWitnessCommit() {
        if (!g(this.transactions)) return null;
        const v = this.transactions[0].outs.filter((S) => S.script.slice(0, 6).equals(ne.from("6a24aa21a9ed", "hex"))).map((S) => S.script.slice(6, 38));
        if (v.length === 0) return null;
        const w = v[v.length - 1];
        return w instanceof ne && w.length === 32 ? w : null;
      }
      hasWitnessCommit() {
        return this.witnessCommit instanceof ne && this.witnessCommit.length === 32 || this.getWitnessCommit() !== null;
      }
      hasWitness() {
        return a(this.transactions);
      }
      weight() {
        const v = this.byteLength(false, false), w = this.byteLength(false, true);
        return v * 3 + w;
      }
      byteLength(v, w = true) {
        return v || !this.transactions ? 80 : 80 + n.varuint.encodingLength(this.transactions.length) + this.transactions.reduce((S, p) => S + p.byteLength(w), 0);
      }
      getHash() {
        return d.hash256(this.toBuffer(true));
      }
      getId() {
        return (0, n.reverseBuffer)(this.getHash()).toString("hex");
      }
      getUTCDate() {
        const v = /* @__PURE__ */ new Date(0);
        return v.setUTCSeconds(this.timestamp), v;
      }
      toBuffer(v) {
        const w = ne.allocUnsafe(this.byteLength(v)), S = new n.BufferWriter(w);
        return S.writeInt32(this.version), S.writeSlice(this.prevHash), S.writeSlice(this.merkleRoot), S.writeUInt32(this.timestamp), S.writeUInt32(this.bits), S.writeUInt32(this.nonce), v || !this.transactions || (n.varuint.encode(this.transactions.length, w, S.offset), S.offset += n.varuint.encode.bytes, this.transactions.forEach((p) => {
          const A = p.byteLength();
          p.toBuffer(w, S.offset), S.offset += A;
        })), w;
      }
      toHex(v) {
        return this.toBuffer(v).toString("hex");
      }
      checkTxRoots() {
        const v = this.hasWitnessCommit();
        return !v && this.hasWitness() ? false : this.__checkMerkleRoot() && (v ? this.__checkWitnessCommit() : true);
      }
      checkProofOfWork() {
        const v = (0, n.reverseBuffer)(this.getHash()), w = s.calculateTarget(this.bits);
        return v.compare(w) <= 0;
      }
      __checkMerkleRoot() {
        if (!this.transactions) throw u;
        const v = s.calculateMerkleRoot(this.transactions);
        return this.merkleRoot.compare(v) === 0;
      }
      __checkWitnessCommit() {
        if (!this.transactions) throw u;
        if (!this.hasWitnessCommit()) throw o;
        const v = s.calculateMerkleRoot(this.transactions, true);
        return this.witnessCommit.compare(v) === 0;
      }
    }
    Go.Block = s;
    function g(E) {
      return E instanceof Array && E[0] && E[0].ins && E[0].ins instanceof Array && E[0].ins[0] && E[0].ins[0].witness && E[0].ins[0].witness instanceof Array && E[0].ins[0].witness.length > 0;
    }
    function a(E) {
      return E instanceof Array && E.some((v) => typeof v == "object" && v.ins instanceof Array && v.ins.some((w) => typeof w == "object" && w.witness instanceof Array && w.witness.length > 0));
    }
    return Go;
  }
  var Qo = {}, bs = {}, Ts = {}, zc = {}, Hi = {}, qi = {}, Vc = {}, om;
  function zt() {
    return om || (om = 1, (function(n) {
      Object.defineProperty(n, "__esModule", {
        value: true
      }), (function(d) {
        d[d.UNSIGNED_TX = 0] = "UNSIGNED_TX", d[d.GLOBAL_XPUB = 1] = "GLOBAL_XPUB";
      })(n.GlobalTypes || (n.GlobalTypes = {})), n.GLOBAL_TYPE_NAMES = [
        "unsignedTx",
        "globalXpub"
      ], (function(d) {
        d[d.NON_WITNESS_UTXO = 0] = "NON_WITNESS_UTXO", d[d.WITNESS_UTXO = 1] = "WITNESS_UTXO", d[d.PARTIAL_SIG = 2] = "PARTIAL_SIG", d[d.SIGHASH_TYPE = 3] = "SIGHASH_TYPE", d[d.REDEEM_SCRIPT = 4] = "REDEEM_SCRIPT", d[d.WITNESS_SCRIPT = 5] = "WITNESS_SCRIPT", d[d.BIP32_DERIVATION = 6] = "BIP32_DERIVATION", d[d.FINAL_SCRIPTSIG = 7] = "FINAL_SCRIPTSIG", d[d.FINAL_SCRIPTWITNESS = 8] = "FINAL_SCRIPTWITNESS", d[d.POR_COMMITMENT = 9] = "POR_COMMITMENT", d[d.TAP_KEY_SIG = 19] = "TAP_KEY_SIG", d[d.TAP_SCRIPT_SIG = 20] = "TAP_SCRIPT_SIG", d[d.TAP_LEAF_SCRIPT = 21] = "TAP_LEAF_SCRIPT", d[d.TAP_BIP32_DERIVATION = 22] = "TAP_BIP32_DERIVATION", d[d.TAP_INTERNAL_KEY = 23] = "TAP_INTERNAL_KEY", d[d.TAP_MERKLE_ROOT = 24] = "TAP_MERKLE_ROOT";
      })(n.InputTypes || (n.InputTypes = {})), n.INPUT_TYPE_NAMES = [
        "nonWitnessUtxo",
        "witnessUtxo",
        "partialSig",
        "sighashType",
        "redeemScript",
        "witnessScript",
        "bip32Derivation",
        "finalScriptSig",
        "finalScriptWitness",
        "porCommitment",
        "tapKeySig",
        "tapScriptSig",
        "tapLeafScript",
        "tapBip32Derivation",
        "tapInternalKey",
        "tapMerkleRoot"
      ], (function(d) {
        d[d.REDEEM_SCRIPT = 0] = "REDEEM_SCRIPT", d[d.WITNESS_SCRIPT = 1] = "WITNESS_SCRIPT", d[d.BIP32_DERIVATION = 2] = "BIP32_DERIVATION", d[d.TAP_INTERNAL_KEY = 5] = "TAP_INTERNAL_KEY", d[d.TAP_TREE = 6] = "TAP_TREE", d[d.TAP_BIP32_DERIVATION = 7] = "TAP_BIP32_DERIVATION";
      })(n.OutputTypes || (n.OutputTypes = {})), n.OUTPUT_TYPE_NAMES = [
        "redeemScript",
        "witnessScript",
        "bip32Derivation",
        "tapInternalKey",
        "tapTree",
        "tapBip32Derivation"
      ];
    })(Vc)), Vc;
  }
  var kn = {}, am;
  function X2() {
    if (am) return kn;
    am = 1, Object.defineProperty(kn, "__esModule", {
      value: true
    });
    const n = zt(), d = (u) => [
      ...Array(u).keys()
    ];
    function c(u) {
      if (u.key[0] !== n.GlobalTypes.GLOBAL_XPUB) throw new Error("Decode Error: could not decode globalXpub with key 0x" + u.key.toString("hex"));
      if (u.key.length !== 79 || ![
        2,
        3
      ].includes(u.key[46])) throw new Error("Decode Error: globalXpub has invalid extended pubkey in key 0x" + u.key.toString("hex"));
      if (u.value.length / 4 % 1 !== 0) throw new Error("Decode Error: Global GLOBAL_XPUB value length should be multiple of 4");
      const o = u.key.slice(1), s = {
        masterFingerprint: u.value.slice(0, 4),
        extendedPubkey: o,
        path: "m"
      };
      for (const g of d(u.value.length / 4 - 1)) {
        const a = u.value.readUInt32LE(g * 4 + 4), E = !!(a & 2147483648), v = a & 2147483647;
        s.path += "/" + v.toString(10) + (E ? "'" : "");
      }
      return s;
    }
    kn.decode = c;
    function f(u) {
      const o = ne.from([
        n.GlobalTypes.GLOBAL_XPUB
      ]), s = ne.concat([
        o,
        u.extendedPubkey
      ]), g = u.path.split("/"), a = ne.allocUnsafe(g.length * 4);
      u.masterFingerprint.copy(a, 0);
      let E = 4;
      return g.slice(1).forEach((v) => {
        const w = v.slice(-1) === "'";
        let S = 2147483647 & parseInt(w ? v.slice(0, -1) : v, 10);
        w && (S += 2147483648), a.writeUInt32LE(S, E), E += 4;
      }), {
        key: s,
        value: a
      };
    }
    kn.encode = f, kn.expected = "{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }";
    function _(u) {
      const o = u.extendedPubkey, s = u.masterFingerprint, g = u.path;
      return ne.isBuffer(o) && o.length === 78 && [
        2,
        3
      ].indexOf(o[45]) > -1 && ne.isBuffer(s) && s.length === 4 && typeof g == "string" && !!g.match(/^m(\/\d+'?)*$/);
    }
    kn.check = _;
    function l(u, o, s) {
      const g = o.extendedPubkey.toString("hex");
      return s.has(g) ? false : (s.add(g), u.filter((a) => a.extendedPubkey.equals(o.extendedPubkey)).length === 0);
    }
    return kn.canAddToArray = l, kn;
  }
  var xs = {}, sm;
  function Y2() {
    if (sm) return xs;
    sm = 1, Object.defineProperty(xs, "__esModule", {
      value: true
    });
    const n = zt();
    function d(c) {
      return {
        key: ne.from([
          n.GlobalTypes.UNSIGNED_TX
        ]),
        value: c.toBuffer()
      };
    }
    return xs.encode = d, xs;
  }
  var An = {}, um;
  function Q2() {
    if (um) return An;
    um = 1, Object.defineProperty(An, "__esModule", {
      value: true
    });
    const n = zt();
    function d(l) {
      if (l.key[0] !== n.InputTypes.FINAL_SCRIPTSIG) throw new Error("Decode Error: could not decode finalScriptSig with key 0x" + l.key.toString("hex"));
      return l.value;
    }
    An.decode = d;
    function c(l) {
      return {
        key: ne.from([
          n.InputTypes.FINAL_SCRIPTSIG
        ]),
        value: l
      };
    }
    An.encode = c, An.expected = "Buffer";
    function f(l) {
      return ne.isBuffer(l);
    }
    An.check = f;
    function _(l, u) {
      return !!l && !!u && l.finalScriptSig === void 0;
    }
    return An.canAdd = _, An;
  }
  var In = {}, lm;
  function J2() {
    if (lm) return In;
    lm = 1, Object.defineProperty(In, "__esModule", {
      value: true
    });
    const n = zt();
    function d(l) {
      if (l.key[0] !== n.InputTypes.FINAL_SCRIPTWITNESS) throw new Error("Decode Error: could not decode finalScriptWitness with key 0x" + l.key.toString("hex"));
      return l.value;
    }
    In.decode = d;
    function c(l) {
      return {
        key: ne.from([
          n.InputTypes.FINAL_SCRIPTWITNESS
        ]),
        value: l
      };
    }
    In.encode = c, In.expected = "Buffer";
    function f(l) {
      return ne.isBuffer(l);
    }
    In.check = f;
    function _(l, u) {
      return !!l && !!u && l.finalScriptWitness === void 0;
    }
    return In.canAdd = _, In;
  }
  var Bn = {}, fm;
  function Z2() {
    if (fm) return Bn;
    fm = 1, Object.defineProperty(Bn, "__esModule", {
      value: true
    });
    const n = zt();
    function d(l) {
      if (l.key[0] !== n.InputTypes.NON_WITNESS_UTXO) throw new Error("Decode Error: could not decode nonWitnessUtxo with key 0x" + l.key.toString("hex"));
      return l.value;
    }
    Bn.decode = d;
    function c(l) {
      return {
        key: ne.from([
          n.InputTypes.NON_WITNESS_UTXO
        ]),
        value: l
      };
    }
    Bn.encode = c, Bn.expected = "Buffer";
    function f(l) {
      return ne.isBuffer(l);
    }
    Bn.check = f;
    function _(l, u) {
      return !!l && !!u && l.nonWitnessUtxo === void 0;
    }
    return Bn.canAdd = _, Bn;
  }
  var On = {}, cm;
  function $2() {
    if (cm) return On;
    cm = 1, Object.defineProperty(On, "__esModule", {
      value: true
    });
    const n = zt();
    function d(u) {
      if (u.key[0] !== n.InputTypes.PARTIAL_SIG) throw new Error("Decode Error: could not decode partialSig with key 0x" + u.key.toString("hex"));
      if (!(u.key.length === 34 || u.key.length === 66) || ![
        2,
        3,
        4
      ].includes(u.key[1])) throw new Error("Decode Error: partialSig has invalid pubkey in key 0x" + u.key.toString("hex"));
      return {
        pubkey: u.key.slice(1),
        signature: u.value
      };
    }
    On.decode = d;
    function c(u) {
      const o = ne.from([
        n.InputTypes.PARTIAL_SIG
      ]);
      return {
        key: ne.concat([
          o,
          u.pubkey
        ]),
        value: u.signature
      };
    }
    On.encode = c, On.expected = "{ pubkey: Buffer; signature: Buffer; }";
    function f(u) {
      return ne.isBuffer(u.pubkey) && ne.isBuffer(u.signature) && [
        33,
        65
      ].includes(u.pubkey.length) && [
        2,
        3,
        4
      ].includes(u.pubkey[0]) && _(u.signature);
    }
    On.check = f;
    function _(u) {
      if (!ne.isBuffer(u) || u.length < 9 || u[0] !== 48 || u.length !== u[1] + 3 || u[2] !== 2) return false;
      const o = u[3];
      if (o > 33 || o < 1 || u[3 + o + 1] !== 2) return false;
      const s = u[3 + o + 2];
      return !(s > 33 || s < 1 || u.length !== 3 + o + 2 + s + 2);
    }
    function l(u, o, s) {
      const g = o.pubkey.toString("hex");
      return s.has(g) ? false : (s.add(g), u.filter((a) => a.pubkey.equals(o.pubkey)).length === 0);
    }
    return On.canAddToArray = l, On;
  }
  var Rn = {}, dm;
  function eE() {
    if (dm) return Rn;
    dm = 1, Object.defineProperty(Rn, "__esModule", {
      value: true
    });
    const n = zt();
    function d(l) {
      if (l.key[0] !== n.InputTypes.POR_COMMITMENT) throw new Error("Decode Error: could not decode porCommitment with key 0x" + l.key.toString("hex"));
      return l.value.toString("utf8");
    }
    Rn.decode = d;
    function c(l) {
      return {
        key: ne.from([
          n.InputTypes.POR_COMMITMENT
        ]),
        value: ne.from(l, "utf8")
      };
    }
    Rn.encode = c, Rn.expected = "string";
    function f(l) {
      return typeof l == "string";
    }
    Rn.check = f;
    function _(l, u) {
      return !!l && !!u && l.porCommitment === void 0;
    }
    return Rn.canAdd = _, Rn;
  }
  var Cn = {}, hm;
  function tE() {
    if (hm) return Cn;
    hm = 1, Object.defineProperty(Cn, "__esModule", {
      value: true
    });
    const n = zt();
    function d(l) {
      if (l.key[0] !== n.InputTypes.SIGHASH_TYPE) throw new Error("Decode Error: could not decode sighashType with key 0x" + l.key.toString("hex"));
      return l.value.readUInt32LE(0);
    }
    Cn.decode = d;
    function c(l) {
      const u = ne.from([
        n.InputTypes.SIGHASH_TYPE
      ]), o = ne.allocUnsafe(4);
      return o.writeUInt32LE(l, 0), {
        key: u,
        value: o
      };
    }
    Cn.encode = c, Cn.expected = "number";
    function f(l) {
      return typeof l == "number";
    }
    Cn.check = f;
    function _(l, u) {
      return !!l && !!u && l.sighashType === void 0;
    }
    return Cn.canAdd = _, Cn;
  }
  var Nn = {}, pm;
  function rE() {
    if (pm) return Nn;
    pm = 1, Object.defineProperty(Nn, "__esModule", {
      value: true
    });
    const n = zt();
    function d(l) {
      if (l.key[0] !== n.InputTypes.TAP_KEY_SIG || l.key.length !== 1) throw new Error("Decode Error: could not decode tapKeySig with key 0x" + l.key.toString("hex"));
      if (!f(l.value)) throw new Error("Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature");
      return l.value;
    }
    Nn.decode = d;
    function c(l) {
      return {
        key: ne.from([
          n.InputTypes.TAP_KEY_SIG
        ]),
        value: l
      };
    }
    Nn.encode = c, Nn.expected = "Buffer";
    function f(l) {
      return ne.isBuffer(l) && (l.length === 64 || l.length === 65);
    }
    Nn.check = f;
    function _(l, u) {
      return !!l && !!u && l.tapKeySig === void 0;
    }
    return Nn.canAdd = _, Nn;
  }
  var Un = {}, ym;
  function nE() {
    if (ym) return Un;
    ym = 1, Object.defineProperty(Un, "__esModule", {
      value: true
    });
    const n = zt();
    function d(l) {
      if (l.key[0] !== n.InputTypes.TAP_LEAF_SCRIPT) throw new Error("Decode Error: could not decode tapLeafScript with key 0x" + l.key.toString("hex"));
      if ((l.key.length - 2) % 32 !== 0) throw new Error("Decode Error: tapLeafScript has invalid control block in key 0x" + l.key.toString("hex"));
      const u = l.value[l.value.length - 1];
      if ((l.key[1] & 254) !== u) throw new Error("Decode Error: tapLeafScript bad leaf version in key 0x" + l.key.toString("hex"));
      const o = l.value.slice(0, -1);
      return {
        controlBlock: l.key.slice(1),
        script: o,
        leafVersion: u
      };
    }
    Un.decode = d;
    function c(l) {
      const u = ne.from([
        n.InputTypes.TAP_LEAF_SCRIPT
      ]), o = ne.from([
        l.leafVersion
      ]);
      return {
        key: ne.concat([
          u,
          l.controlBlock
        ]),
        value: ne.concat([
          l.script,
          o
        ])
      };
    }
    Un.encode = c, Un.expected = "{ controlBlock: Buffer; leafVersion: number, script: Buffer; }";
    function f(l) {
      return ne.isBuffer(l.controlBlock) && (l.controlBlock.length - 1) % 32 === 0 && (l.controlBlock[0] & 254) === l.leafVersion && ne.isBuffer(l.script);
    }
    Un.check = f;
    function _(l, u, o) {
      const s = u.controlBlock.toString("hex");
      return o.has(s) ? false : (o.add(s), l.filter((g) => g.controlBlock.equals(u.controlBlock)).length === 0);
    }
    return Un.canAddToArray = _, Un;
  }
  var Fn = {}, gm;
  function iE() {
    if (gm) return Fn;
    gm = 1, Object.defineProperty(Fn, "__esModule", {
      value: true
    });
    const n = zt();
    function d(l) {
      if (l.key[0] !== n.InputTypes.TAP_MERKLE_ROOT || l.key.length !== 1) throw new Error("Decode Error: could not decode tapMerkleRoot with key 0x" + l.key.toString("hex"));
      if (!f(l.value)) throw new Error("Decode Error: tapMerkleRoot not a 32-byte hash");
      return l.value;
    }
    Fn.decode = d;
    function c(l) {
      return {
        key: ne.from([
          n.InputTypes.TAP_MERKLE_ROOT
        ]),
        value: l
      };
    }
    Fn.encode = c, Fn.expected = "Buffer";
    function f(l) {
      return ne.isBuffer(l) && l.length === 32;
    }
    Fn.check = f;
    function _(l, u) {
      return !!l && !!u && l.tapMerkleRoot === void 0;
    }
    return Fn.canAdd = _, Fn;
  }
  var Ln = {}, mm;
  function oE() {
    if (mm) return Ln;
    mm = 1, Object.defineProperty(Ln, "__esModule", {
      value: true
    });
    const n = zt();
    function d(l) {
      if (l.key[0] !== n.InputTypes.TAP_SCRIPT_SIG) throw new Error("Decode Error: could not decode tapScriptSig with key 0x" + l.key.toString("hex"));
      if (l.key.length !== 65) throw new Error("Decode Error: tapScriptSig has invalid key 0x" + l.key.toString("hex"));
      if (l.value.length !== 64 && l.value.length !== 65) throw new Error("Decode Error: tapScriptSig has invalid signature in key 0x" + l.key.toString("hex"));
      const u = l.key.slice(1, 33), o = l.key.slice(33);
      return {
        pubkey: u,
        leafHash: o,
        signature: l.value
      };
    }
    Ln.decode = d;
    function c(l) {
      const u = ne.from([
        n.InputTypes.TAP_SCRIPT_SIG
      ]);
      return {
        key: ne.concat([
          u,
          l.pubkey,
          l.leafHash
        ]),
        value: l.signature
      };
    }
    Ln.encode = c, Ln.expected = "{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }";
    function f(l) {
      return ne.isBuffer(l.pubkey) && ne.isBuffer(l.leafHash) && ne.isBuffer(l.signature) && l.pubkey.length === 32 && l.leafHash.length === 32 && (l.signature.length === 64 || l.signature.length === 65);
    }
    Ln.check = f;
    function _(l, u, o) {
      const s = u.pubkey.toString("hex") + u.leafHash.toString("hex");
      return o.has(s) ? false : (o.add(s), l.filter((g) => g.pubkey.equals(u.pubkey) && g.leafHash.equals(u.leafHash)).length === 0);
    }
    return Ln.canAddToArray = _, Ln;
  }
  var Mn = {}, tn = {}, ji = {}, vm;
  function yi() {
    if (vm) return ji;
    vm = 1, Object.defineProperty(ji, "__esModule", {
      value: true
    });
    const n = 9007199254740991;
    function d(l) {
      if (l < 0 || l > n || l % 1 !== 0) throw new RangeError("value out of range");
    }
    function c(l, u, o) {
      if (d(l), u || (u = ne.allocUnsafe(_(l))), !ne.isBuffer(u)) throw new TypeError("buffer must be a Buffer instance");
      return o || (o = 0), l < 253 ? (u.writeUInt8(l, o), Object.assign(c, {
        bytes: 1
      })) : l <= 65535 ? (u.writeUInt8(253, o), u.writeUInt16LE(l, o + 1), Object.assign(c, {
        bytes: 3
      })) : l <= 4294967295 ? (u.writeUInt8(254, o), u.writeUInt32LE(l, o + 1), Object.assign(c, {
        bytes: 5
      })) : (u.writeUInt8(255, o), u.writeUInt32LE(l >>> 0, o + 1), u.writeUInt32LE(l / 4294967296 | 0, o + 5), Object.assign(c, {
        bytes: 9
      })), u;
    }
    ji.encode = c;
    function f(l, u) {
      if (!ne.isBuffer(l)) throw new TypeError("buffer must be a Buffer instance");
      u || (u = 0);
      const o = l.readUInt8(u);
      if (o < 253) return Object.assign(f, {
        bytes: 1
      }), o;
      if (o === 253) return Object.assign(f, {
        bytes: 3
      }), l.readUInt16LE(u + 1);
      if (o === 254) return Object.assign(f, {
        bytes: 5
      }), l.readUInt32LE(u + 1);
      {
        Object.assign(f, {
          bytes: 9
        });
        const s = l.readUInt32LE(u + 1), a = l.readUInt32LE(u + 5) * 4294967296 + s;
        return d(a), a;
      }
    }
    ji.decode = f;
    function _(l) {
      return d(l), l < 253 ? 1 : l <= 65535 ? 3 : l <= 4294967295 ? 5 : 9;
    }
    return ji.encodingLength = _, ji;
  }
  var wm;
  function yd() {
    if (wm) return tn;
    wm = 1, Object.defineProperty(tn, "__esModule", {
      value: true
    });
    const n = yi();
    tn.range = (o) => [
      ...Array(o).keys()
    ];
    function d(o) {
      if (o.length < 1) return o;
      let s = o.length - 1, g = 0;
      for (let a = 0; a < o.length / 2; a++) g = o[a], o[a] = o[s], o[s] = g, s--;
      return o;
    }
    tn.reverseBuffer = d;
    function c(o) {
      const s = o.map(f);
      return s.push(ne.from([
        0
      ])), ne.concat(s);
    }
    tn.keyValsToBuffer = c;
    function f(o) {
      const s = o.key.length, g = o.value.length, a = n.encodingLength(s), E = n.encodingLength(g), v = ne.allocUnsafe(a + s + E + g);
      return n.encode(s, v, 0), o.key.copy(v, a), n.encode(g, v, a + s), o.value.copy(v, a + s + E), v;
    }
    tn.keyValToBuffer = f;
    function _(o, s) {
      if (typeof o != "number") throw new Error("cannot write a non-number as a number");
      if (o < 0) throw new Error("specified a negative value for writing an unsigned value");
      if (o > s) throw new Error("RangeError: value out of range");
      if (Math.floor(o) !== o) throw new Error("value has a fractional component");
    }
    function l(o, s) {
      const g = o.readUInt32LE(s);
      let a = o.readUInt32LE(s + 4);
      return a *= 4294967296, _(a + g, 9007199254740991), a + g;
    }
    tn.readUInt64LE = l;
    function u(o, s, g) {
      return _(s, 9007199254740991), o.writeInt32LE(s & -1, g), o.writeUInt32LE(Math.floor(s / 4294967296), g + 4), g + 8;
    }
    return tn.writeUInt64LE = u, tn;
  }
  var _m;
  function aE() {
    if (_m) return Mn;
    _m = 1, Object.defineProperty(Mn, "__esModule", {
      value: true
    });
    const n = zt(), d = yd(), c = yi();
    function f(o) {
      if (o.key[0] !== n.InputTypes.WITNESS_UTXO) throw new Error("Decode Error: could not decode witnessUtxo with key 0x" + o.key.toString("hex"));
      const s = d.readUInt64LE(o.value, 0);
      let g = 8;
      const a = c.decode(o.value, g);
      g += c.encodingLength(a);
      const E = o.value.slice(g);
      if (E.length !== a) throw new Error("Decode Error: WITNESS_UTXO script is not proper length");
      return {
        script: E,
        value: s
      };
    }
    Mn.decode = f;
    function _(o) {
      const { script: s, value: g } = o, a = c.encodingLength(s.length), E = ne.allocUnsafe(8 + a + s.length);
      return d.writeUInt64LE(E, g, 0), c.encode(s.length, E, 8), s.copy(E, 8 + a), {
        key: ne.from([
          n.InputTypes.WITNESS_UTXO
        ]),
        value: E
      };
    }
    Mn.encode = _, Mn.expected = "{ script: Buffer; value: number; }";
    function l(o) {
      return ne.isBuffer(o.script) && typeof o.value == "number";
    }
    Mn.check = l;
    function u(o, s) {
      return !!o && !!s && o.witnessUtxo === void 0;
    }
    return Mn.canAdd = u, Mn;
  }
  var Dn = {}, Em;
  function sE() {
    if (Em) return Dn;
    Em = 1, Object.defineProperty(Dn, "__esModule", {
      value: true
    });
    const n = zt(), d = yi();
    function c(u) {
      if (u.key[0] !== n.OutputTypes.TAP_TREE || u.key.length !== 1) throw new Error("Decode Error: could not decode tapTree with key 0x" + u.key.toString("hex"));
      let o = 0;
      const s = [];
      for (; o < u.value.length; ) {
        const g = u.value[o++], a = u.value[o++], E = d.decode(u.value, o);
        o += d.encodingLength(E), s.push({
          depth: g,
          leafVersion: a,
          script: u.value.slice(o, o + E)
        }), o += E;
      }
      return {
        leaves: s
      };
    }
    Dn.decode = c;
    function f(u) {
      const o = ne.from([
        n.OutputTypes.TAP_TREE
      ]), s = [].concat(...u.leaves.map((g) => [
        ne.of(g.depth, g.leafVersion),
        d.encode(g.script.length),
        g.script
      ]));
      return {
        key: o,
        value: ne.concat(s)
      };
    }
    Dn.encode = f, Dn.expected = "{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }";
    function _(u) {
      return Array.isArray(u.leaves) && u.leaves.every((o) => o.depth >= 0 && o.depth <= 128 && (o.leafVersion & 254) === o.leafVersion && ne.isBuffer(o.script));
    }
    Dn.check = _;
    function l(u, o) {
      return !!u && !!o && u.tapTree === void 0;
    }
    return Dn.canAdd = l, Dn;
  }
  var Ps = {}, Sm;
  function Nv() {
    if (Sm) return Ps;
    Sm = 1, Object.defineProperty(Ps, "__esModule", {
      value: true
    });
    const n = (f) => [
      ...Array(f).keys()
    ], d = (f) => f.length === 33 && [
      2,
      3
    ].includes(f[0]) || f.length === 65 && f[0] === 4;
    function c(f, _ = d) {
      function l(a) {
        if (a.key[0] !== f) throw new Error("Decode Error: could not decode bip32Derivation with key 0x" + a.key.toString("hex"));
        const E = a.key.slice(1);
        if (!_(E)) throw new Error("Decode Error: bip32Derivation has invalid pubkey in key 0x" + a.key.toString("hex"));
        if (a.value.length / 4 % 1 !== 0) throw new Error("Decode Error: Input BIP32_DERIVATION value length should be multiple of 4");
        const v = {
          masterFingerprint: a.value.slice(0, 4),
          pubkey: E,
          path: "m"
        };
        for (const w of n(a.value.length / 4 - 1)) {
          const S = a.value.readUInt32LE(w * 4 + 4), p = !!(S & 2147483648), A = S & 2147483647;
          v.path += "/" + A.toString(10) + (p ? "'" : "");
        }
        return v;
      }
      function u(a) {
        const E = ne.from([
          f
        ]), v = ne.concat([
          E,
          a.pubkey
        ]), w = a.path.split("/"), S = ne.allocUnsafe(w.length * 4);
        a.masterFingerprint.copy(S, 0);
        let p = 4;
        return w.slice(1).forEach((A) => {
          const x = A.slice(-1) === "'";
          let k = 2147483647 & parseInt(x ? A.slice(0, -1) : A, 10);
          x && (k += 2147483648), S.writeUInt32LE(k, p), p += 4;
        }), {
          key: v,
          value: S
        };
      }
      const o = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }";
      function s(a) {
        return ne.isBuffer(a.pubkey) && ne.isBuffer(a.masterFingerprint) && typeof a.path == "string" && _(a.pubkey) && a.masterFingerprint.length === 4;
      }
      function g(a, E, v) {
        const w = E.pubkey.toString("hex");
        return v.has(w) ? false : (v.add(w), a.filter((S) => S.pubkey.equals(E.pubkey)).length === 0);
      }
      return {
        decode: l,
        encode: u,
        check: s,
        expected: o,
        canAddToArray: g
      };
    }
    return Ps.makeConverter = c, Ps;
  }
  var ks = {}, bm;
  function uE() {
    if (bm) return ks;
    bm = 1, Object.defineProperty(ks, "__esModule", {
      value: true
    });
    function n(d) {
      return c;
      function c(f) {
        let _;
        if (d.includes(f.key[0]) && (_ = f.key.slice(1), !(_.length === 33 || _.length === 65) || ![
          2,
          3,
          4
        ].includes(_[0]))) throw new Error("Format Error: invalid pubkey in key 0x" + f.key.toString("hex"));
        return _;
      }
    }
    return ks.makeChecker = n, ks;
  }
  var As = {}, Tm;
  function lE() {
    if (Tm) return As;
    Tm = 1, Object.defineProperty(As, "__esModule", {
      value: true
    });
    function n(d) {
      function c(o) {
        if (o.key[0] !== d) throw new Error("Decode Error: could not decode redeemScript with key 0x" + o.key.toString("hex"));
        return o.value;
      }
      function f(o) {
        return {
          key: ne.from([
            d
          ]),
          value: o
        };
      }
      const _ = "Buffer";
      function l(o) {
        return ne.isBuffer(o);
      }
      function u(o, s) {
        return !!o && !!s && o.redeemScript === void 0;
      }
      return {
        decode: c,
        encode: f,
        check: l,
        expected: _,
        canAdd: u
      };
    }
    return As.makeConverter = n, As;
  }
  var Is = {}, xm;
  function fE() {
    if (xm) return Is;
    xm = 1, Object.defineProperty(Is, "__esModule", {
      value: true
    });
    const n = yi(), d = Nv(), c = (_) => _.length === 32;
    function f(_) {
      const l = d.makeConverter(_, c);
      function u(a) {
        const E = n.decode(a.value), v = n.encodingLength(E), w = l.decode({
          key: a.key,
          value: a.value.slice(v + E * 32)
        }), S = new Array(E);
        for (let p = 0, A = v; p < E; p++, A += 32) S[p] = a.value.slice(A, A + 32);
        return Object.assign({}, w, {
          leafHashes: S
        });
      }
      function o(a) {
        const E = l.encode(a), v = n.encodingLength(a.leafHashes.length), w = ne.allocUnsafe(v);
        n.encode(a.leafHashes.length, w);
        const S = ne.concat([
          w,
          ...a.leafHashes,
          E.value
        ]);
        return Object.assign({}, E, {
          value: S
        });
      }
      const s = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; leafHashes: Buffer[]; }";
      function g(a) {
        return Array.isArray(a.leafHashes) && a.leafHashes.every((E) => ne.isBuffer(E) && E.length === 32) && l.check(a);
      }
      return {
        decode: u,
        encode: o,
        check: g,
        expected: s,
        canAddToArray: l.canAddToArray
      };
    }
    return Is.makeConverter = f, Is;
  }
  var Bs = {}, Pm;
  function cE() {
    if (Pm) return Bs;
    Pm = 1, Object.defineProperty(Bs, "__esModule", {
      value: true
    });
    function n(d) {
      function c(o) {
        if (o.key[0] !== d || o.key.length !== 1) throw new Error("Decode Error: could not decode tapInternalKey with key 0x" + o.key.toString("hex"));
        if (o.value.length !== 32) throw new Error("Decode Error: tapInternalKey not a 32-byte x-only pubkey");
        return o.value;
      }
      function f(o) {
        return {
          key: ne.from([
            d
          ]),
          value: o
        };
      }
      const _ = "Buffer";
      function l(o) {
        return ne.isBuffer(o) && o.length === 32;
      }
      function u(o, s) {
        return !!o && !!s && o.tapInternalKey === void 0;
      }
      return {
        decode: c,
        encode: f,
        check: l,
        expected: _,
        canAdd: u
      };
    }
    return Bs.makeConverter = n, Bs;
  }
  var Os = {}, km;
  function dE() {
    if (km) return Os;
    km = 1, Object.defineProperty(Os, "__esModule", {
      value: true
    });
    function n(d) {
      function c(o) {
        if (o.key[0] !== d) throw new Error("Decode Error: could not decode witnessScript with key 0x" + o.key.toString("hex"));
        return o.value;
      }
      function f(o) {
        return {
          key: ne.from([
            d
          ]),
          value: o
        };
      }
      const _ = "Buffer";
      function l(o) {
        return ne.isBuffer(o);
      }
      function u(o, s) {
        return !!o && !!s && o.witnessScript === void 0;
      }
      return {
        decode: c,
        encode: f,
        check: l,
        expected: _,
        canAdd: u
      };
    }
    return Os.makeConverter = n, Os;
  }
  var Am;
  function gd() {
    if (Am) return qi;
    Am = 1, Object.defineProperty(qi, "__esModule", {
      value: true
    });
    const n = zt(), d = X2(), c = Y2(), f = Q2(), _ = J2(), l = Z2(), u = $2(), o = eE(), s = tE(), g = rE(), a = nE(), E = iE(), v = oE(), w = aE(), S = sE(), p = Nv(), A = uE(), x = lE(), k = fE(), B = cE(), O = dE(), U = {
      unsignedTx: c,
      globalXpub: d,
      checkPubkey: A.makeChecker([])
    };
    qi.globals = U;
    const C = {
      nonWitnessUtxo: l,
      partialSig: u,
      sighashType: s,
      finalScriptSig: f,
      finalScriptWitness: _,
      porCommitment: o,
      witnessUtxo: w,
      bip32Derivation: p.makeConverter(n.InputTypes.BIP32_DERIVATION),
      redeemScript: x.makeConverter(n.InputTypes.REDEEM_SCRIPT),
      witnessScript: O.makeConverter(n.InputTypes.WITNESS_SCRIPT),
      checkPubkey: A.makeChecker([
        n.InputTypes.PARTIAL_SIG,
        n.InputTypes.BIP32_DERIVATION
      ]),
      tapKeySig: g,
      tapScriptSig: v,
      tapLeafScript: a,
      tapBip32Derivation: k.makeConverter(n.InputTypes.TAP_BIP32_DERIVATION),
      tapInternalKey: B.makeConverter(n.InputTypes.TAP_INTERNAL_KEY),
      tapMerkleRoot: E
    };
    qi.inputs = C;
    const K = {
      bip32Derivation: p.makeConverter(n.OutputTypes.BIP32_DERIVATION),
      redeemScript: x.makeConverter(n.OutputTypes.REDEEM_SCRIPT),
      witnessScript: O.makeConverter(n.OutputTypes.WITNESS_SCRIPT),
      checkPubkey: A.makeChecker([
        n.OutputTypes.BIP32_DERIVATION
      ]),
      tapBip32Derivation: k.makeConverter(n.OutputTypes.TAP_BIP32_DERIVATION),
      tapTree: S,
      tapInternalKey: B.makeConverter(n.OutputTypes.TAP_INTERNAL_KEY)
    };
    return qi.outputs = K, qi;
  }
  var Im;
  function hE() {
    if (Im) return Hi;
    Im = 1, Object.defineProperty(Hi, "__esModule", {
      value: true
    });
    const n = gd(), d = yd(), c = yi(), f = zt();
    function _(o, s) {
      let g = 0;
      function a() {
        const K = c.decode(o, g);
        g += c.encodingLength(K);
        const X = o.slice(g, g + K);
        return g += K, X;
      }
      function E() {
        const K = o.readUInt32BE(g);
        return g += 4, K;
      }
      function v() {
        const K = o.readUInt8(g);
        return g += 1, K;
      }
      function w() {
        const K = a(), X = a();
        return {
          key: K,
          value: X
        };
      }
      function S() {
        if (g >= o.length) throw new Error("Format Error: Unexpected End of PSBT");
        const K = o.readUInt8(g) === 0;
        return K && g++, K;
      }
      if (E() !== 1886610036) throw new Error("Format Error: Invalid Magic Number");
      if (v() !== 255) throw new Error("Format Error: Magic Number must be followed by 0xff separator");
      const p = [], A = {};
      for (; !S(); ) {
        const K = w(), X = K.key.toString("hex");
        if (A[X]) throw new Error("Format Error: Keys must be unique for global keymap: key " + X);
        A[X] = 1, p.push(K);
      }
      const x = p.filter((K) => K.key[0] === f.GlobalTypes.UNSIGNED_TX);
      if (x.length !== 1) throw new Error("Format Error: Only one UNSIGNED_TX allowed");
      const k = s(x[0].value), { inputCount: B, outputCount: O } = k.getInputOutputCounts(), U = [], C = [];
      for (const K of d.range(B)) {
        const X = {}, Q = [];
        for (; !S(); ) {
          const ae = w(), Ee = ae.key.toString("hex");
          if (X[Ee]) throw new Error("Format Error: Keys must be unique for each input: input index " + K + " key " + Ee);
          X[Ee] = 1, Q.push(ae);
        }
        U.push(Q);
      }
      for (const K of d.range(O)) {
        const X = {}, Q = [];
        for (; !S(); ) {
          const ae = w(), Ee = ae.key.toString("hex");
          if (X[Ee]) throw new Error("Format Error: Keys must be unique for each output: output index " + K + " key " + Ee);
          X[Ee] = 1, Q.push(ae);
        }
        C.push(Q);
      }
      return u(k, {
        globalMapKeyVals: p,
        inputKeyVals: U,
        outputKeyVals: C
      });
    }
    Hi.psbtFromBuffer = _;
    function l(o, s, g) {
      if (!s.equals(ne.from([
        g
      ]))) throw new Error(`Format Error: Invalid ${o} key: ${s.toString("hex")}`);
    }
    Hi.checkKeyBuffer = l;
    function u(o, { globalMapKeyVals: s, inputKeyVals: g, outputKeyVals: a }) {
      const E = {
        unsignedTx: o
      };
      let v = 0;
      for (const x of s) switch (x.key[0]) {
        case f.GlobalTypes.UNSIGNED_TX:
          if (l("global", x.key, f.GlobalTypes.UNSIGNED_TX), v > 0) throw new Error("Format Error: GlobalMap has multiple UNSIGNED_TX");
          v++;
          break;
        case f.GlobalTypes.GLOBAL_XPUB:
          E.globalXpub === void 0 && (E.globalXpub = []), E.globalXpub.push(n.globals.globalXpub.decode(x));
          break;
        default:
          E.unknownKeyVals || (E.unknownKeyVals = []), E.unknownKeyVals.push(x);
      }
      const w = g.length, S = a.length, p = [], A = [];
      for (const x of d.range(w)) {
        const k = {};
        for (const B of g[x]) switch (n.inputs.checkPubkey(B), B.key[0]) {
          case f.InputTypes.NON_WITNESS_UTXO:
            if (l("input", B.key, f.InputTypes.NON_WITNESS_UTXO), k.nonWitnessUtxo !== void 0) throw new Error("Format Error: Input has multiple NON_WITNESS_UTXO");
            k.nonWitnessUtxo = n.inputs.nonWitnessUtxo.decode(B);
            break;
          case f.InputTypes.WITNESS_UTXO:
            if (l("input", B.key, f.InputTypes.WITNESS_UTXO), k.witnessUtxo !== void 0) throw new Error("Format Error: Input has multiple WITNESS_UTXO");
            k.witnessUtxo = n.inputs.witnessUtxo.decode(B);
            break;
          case f.InputTypes.PARTIAL_SIG:
            k.partialSig === void 0 && (k.partialSig = []), k.partialSig.push(n.inputs.partialSig.decode(B));
            break;
          case f.InputTypes.SIGHASH_TYPE:
            if (l("input", B.key, f.InputTypes.SIGHASH_TYPE), k.sighashType !== void 0) throw new Error("Format Error: Input has multiple SIGHASH_TYPE");
            k.sighashType = n.inputs.sighashType.decode(B);
            break;
          case f.InputTypes.REDEEM_SCRIPT:
            if (l("input", B.key, f.InputTypes.REDEEM_SCRIPT), k.redeemScript !== void 0) throw new Error("Format Error: Input has multiple REDEEM_SCRIPT");
            k.redeemScript = n.inputs.redeemScript.decode(B);
            break;
          case f.InputTypes.WITNESS_SCRIPT:
            if (l("input", B.key, f.InputTypes.WITNESS_SCRIPT), k.witnessScript !== void 0) throw new Error("Format Error: Input has multiple WITNESS_SCRIPT");
            k.witnessScript = n.inputs.witnessScript.decode(B);
            break;
          case f.InputTypes.BIP32_DERIVATION:
            k.bip32Derivation === void 0 && (k.bip32Derivation = []), k.bip32Derivation.push(n.inputs.bip32Derivation.decode(B));
            break;
          case f.InputTypes.FINAL_SCRIPTSIG:
            l("input", B.key, f.InputTypes.FINAL_SCRIPTSIG), k.finalScriptSig = n.inputs.finalScriptSig.decode(B);
            break;
          case f.InputTypes.FINAL_SCRIPTWITNESS:
            l("input", B.key, f.InputTypes.FINAL_SCRIPTWITNESS), k.finalScriptWitness = n.inputs.finalScriptWitness.decode(B);
            break;
          case f.InputTypes.POR_COMMITMENT:
            l("input", B.key, f.InputTypes.POR_COMMITMENT), k.porCommitment = n.inputs.porCommitment.decode(B);
            break;
          case f.InputTypes.TAP_KEY_SIG:
            l("input", B.key, f.InputTypes.TAP_KEY_SIG), k.tapKeySig = n.inputs.tapKeySig.decode(B);
            break;
          case f.InputTypes.TAP_SCRIPT_SIG:
            k.tapScriptSig === void 0 && (k.tapScriptSig = []), k.tapScriptSig.push(n.inputs.tapScriptSig.decode(B));
            break;
          case f.InputTypes.TAP_LEAF_SCRIPT:
            k.tapLeafScript === void 0 && (k.tapLeafScript = []), k.tapLeafScript.push(n.inputs.tapLeafScript.decode(B));
            break;
          case f.InputTypes.TAP_BIP32_DERIVATION:
            k.tapBip32Derivation === void 0 && (k.tapBip32Derivation = []), k.tapBip32Derivation.push(n.inputs.tapBip32Derivation.decode(B));
            break;
          case f.InputTypes.TAP_INTERNAL_KEY:
            l("input", B.key, f.InputTypes.TAP_INTERNAL_KEY), k.tapInternalKey = n.inputs.tapInternalKey.decode(B);
            break;
          case f.InputTypes.TAP_MERKLE_ROOT:
            l("input", B.key, f.InputTypes.TAP_MERKLE_ROOT), k.tapMerkleRoot = n.inputs.tapMerkleRoot.decode(B);
            break;
          default:
            k.unknownKeyVals || (k.unknownKeyVals = []), k.unknownKeyVals.push(B);
        }
        p.push(k);
      }
      for (const x of d.range(S)) {
        const k = {};
        for (const B of a[x]) switch (n.outputs.checkPubkey(B), B.key[0]) {
          case f.OutputTypes.REDEEM_SCRIPT:
            if (l("output", B.key, f.OutputTypes.REDEEM_SCRIPT), k.redeemScript !== void 0) throw new Error("Format Error: Output has multiple REDEEM_SCRIPT");
            k.redeemScript = n.outputs.redeemScript.decode(B);
            break;
          case f.OutputTypes.WITNESS_SCRIPT:
            if (l("output", B.key, f.OutputTypes.WITNESS_SCRIPT), k.witnessScript !== void 0) throw new Error("Format Error: Output has multiple WITNESS_SCRIPT");
            k.witnessScript = n.outputs.witnessScript.decode(B);
            break;
          case f.OutputTypes.BIP32_DERIVATION:
            k.bip32Derivation === void 0 && (k.bip32Derivation = []), k.bip32Derivation.push(n.outputs.bip32Derivation.decode(B));
            break;
          case f.OutputTypes.TAP_INTERNAL_KEY:
            l("output", B.key, f.OutputTypes.TAP_INTERNAL_KEY), k.tapInternalKey = n.outputs.tapInternalKey.decode(B);
            break;
          case f.OutputTypes.TAP_TREE:
            l("output", B.key, f.OutputTypes.TAP_TREE), k.tapTree = n.outputs.tapTree.decode(B);
            break;
          case f.OutputTypes.TAP_BIP32_DERIVATION:
            k.tapBip32Derivation === void 0 && (k.tapBip32Derivation = []), k.tapBip32Derivation.push(n.outputs.tapBip32Derivation.decode(B));
            break;
          default:
            k.unknownKeyVals || (k.unknownKeyVals = []), k.unknownKeyVals.push(B);
        }
        A.push(k);
      }
      return {
        globalMap: E,
        inputs: p,
        outputs: A
      };
    }
    return Hi.psbtFromKeyVals = u, Hi;
  }
  var Jo = {}, Bm;
  function pE() {
    if (Bm) return Jo;
    Bm = 1, Object.defineProperty(Jo, "__esModule", {
      value: true
    });
    const n = gd(), d = yd();
    function c({ globalMap: u, inputs: o, outputs: s }) {
      const { globalKeyVals: g, inputKeyVals: a, outputKeyVals: E } = l({
        globalMap: u,
        inputs: o,
        outputs: s
      }), v = d.keyValsToBuffer(g), w = (x) => x.length === 0 ? [
        ne.from([
          0
        ])
      ] : x.map(d.keyValsToBuffer), S = w(a), p = w(E), A = ne.allocUnsafe(5);
      return A.writeUIntBE(482972169471, 0, 5), ne.concat([
        A,
        v
      ].concat(S, p));
    }
    Jo.psbtToBuffer = c;
    const f = (u, o) => u.key.compare(o.key);
    function _(u, o) {
      const s = /* @__PURE__ */ new Set(), g = Object.entries(u).reduce((E, [v, w]) => {
        if (v === "unknownKeyVals") return E;
        const S = o[v];
        if (S === void 0) return E;
        const p = (Array.isArray(w) ? w : [
          w
        ]).map(S.encode);
        return p.map((x) => x.key.toString("hex")).forEach((x) => {
          if (s.has(x)) throw new Error("Serialize Error: Duplicate key: " + x);
          s.add(x);
        }), E.concat(p);
      }, []), a = u.unknownKeyVals ? u.unknownKeyVals.filter((E) => !s.has(E.key.toString("hex"))) : [];
      return g.concat(a).sort(f);
    }
    function l({ globalMap: u, inputs: o, outputs: s }) {
      return {
        globalKeyVals: _(u, n.globals),
        inputKeyVals: o.map((g) => _(g, n.inputs)),
        outputKeyVals: s.map((g) => _(g, n.outputs))
      };
    }
    return Jo.psbtToKeyVals = l, Jo;
  }
  var Om;
  function Uv() {
    return Om || (Om = 1, (function(n) {
      function d(c) {
        for (var f in c) n.hasOwnProperty(f) || (n[f] = c[f]);
      }
      Object.defineProperty(n, "__esModule", {
        value: true
      }), d(hE()), d(pE());
    })(zc)), zc;
  }
  var Rm;
  function yE() {
    if (Rm) return Ts;
    Rm = 1, Object.defineProperty(Ts, "__esModule", {
      value: true
    });
    const n = Uv();
    function d(l) {
      const u = l[0], o = n.psbtToKeyVals(u), s = l.slice(1);
      if (s.length === 0) throw new Error("Combine: Nothing to combine");
      const g = f(u);
      if (g === void 0) throw new Error("Combine: Self missing transaction");
      const a = _(o.globalKeyVals), E = o.inputKeyVals.map(_), v = o.outputKeyVals.map(_);
      for (const w of s) {
        const S = f(w);
        if (S === void 0 || !S.toBuffer().equals(g.toBuffer())) throw new Error("Combine: One of the Psbts does not have the same transaction.");
        const p = n.psbtToKeyVals(w);
        _(p.globalKeyVals).forEach(c(a, o.globalKeyVals, p.globalKeyVals)), p.inputKeyVals.map(_).forEach((B, O) => B.forEach(c(E[O], o.inputKeyVals[O], p.inputKeyVals[O]))), p.outputKeyVals.map(_).forEach((B, O) => B.forEach(c(v[O], o.outputKeyVals[O], p.outputKeyVals[O])));
      }
      return n.psbtFromKeyVals(g, {
        globalMapKeyVals: o.globalKeyVals,
        inputKeyVals: o.inputKeyVals,
        outputKeyVals: o.outputKeyVals
      });
    }
    Ts.combine = d;
    function c(l, u, o) {
      return (s) => {
        if (l.has(s)) return;
        const g = o.filter((a) => a.key.toString("hex") === s)[0];
        u.push(g), l.add(s);
      };
    }
    function f(l) {
      return l.globalMap.unsignedTx;
    }
    function _(l) {
      const u = /* @__PURE__ */ new Set();
      return l.forEach((o) => {
        const s = o.key.toString("hex");
        if (u.has(s)) throw new Error("Combine: KeyValue Map keys should be unique");
        u.add(s);
      }), u;
    }
    return Ts;
  }
  var Gc = {}, Cm;
  function Fv() {
    return Cm || (Cm = 1, (function(n) {
      Object.defineProperty(n, "__esModule", {
        value: true
      });
      const d = gd();
      function c(w, S) {
        const p = w[S];
        if (p === void 0) throw new Error(`No input #${S}`);
        return p;
      }
      n.checkForInput = c;
      function f(w, S) {
        const p = w[S];
        if (p === void 0) throw new Error(`No output #${S}`);
        return p;
      }
      n.checkForOutput = f;
      function _(w, S, p) {
        if (w.key[0] < p) throw new Error("Use the method for your specific key instead of addUnknownKeyVal*");
        if (S && S.filter((A) => A.key.equals(w.key)).length !== 0) throw new Error(`Duplicate Key: ${w.key.toString("hex")}`);
      }
      n.checkHasKey = _;
      function l(w) {
        let S = 0;
        return Object.keys(w).forEach((p) => {
          Number(isNaN(Number(p))) && S++;
        }), S;
      }
      n.getEnumLength = l;
      function u(w, S) {
        let p = false;
        if (S.nonWitnessUtxo || S.witnessUtxo) {
          const A = !!S.redeemScript, x = !!S.witnessScript, k = !A || !!S.finalScriptSig, B = !x || !!S.finalScriptWitness, O = !!S.finalScriptSig || !!S.finalScriptWitness;
          p = k && B && O;
        }
        if (p === false) throw new Error(`Input #${w} has too much or too little data to clean`);
      }
      n.inputCheckUncleanFinalized = u;
      function o(w, S, p, A) {
        throw new Error(`Data for ${w} key ${S} is incorrect: Expected ${p} and got ${JSON.stringify(A)}`);
      }
      function s(w) {
        return (S, p) => {
          for (const A of Object.keys(S)) {
            const x = S[A], { canAdd: k, canAddToArray: B, check: O, expected: U } = d[w + "s"][A] || {}, C = !!B;
            if (O) if (C) {
              if (!Array.isArray(x) || p[A] && !Array.isArray(p[A])) throw new Error(`Key type ${A} must be an array`);
              x.every(O) || o(w, A, U, x);
              const K = p[A] || [], X = /* @__PURE__ */ new Set();
              if (!x.every((Q) => B(K, Q, X))) throw new Error("Can not add duplicate data to array");
              p[A] = K.concat(x);
            } else {
              if (O(x) || o(w, A, U, x), !k(p, x)) throw new Error(`Can not add duplicate data to ${w}`);
              p[A] = x;
            }
          }
        };
      }
      n.updateGlobal = s("global"), n.updateInput = s("input"), n.updateOutput = s("output");
      function g(w, S) {
        const p = w.length - 1, A = c(w, p);
        n.updateInput(S, A);
      }
      n.addInputAttributes = g;
      function a(w, S) {
        const p = w.length - 1, A = f(w, p);
        n.updateOutput(S, A);
      }
      n.addOutputAttributes = a;
      function E(w, S) {
        if (!ne.isBuffer(S) || S.length < 4) throw new Error("Set Version: Invalid Transaction");
        return S.writeUInt32LE(w, 0), S;
      }
      n.defaultVersionSetter = E;
      function v(w, S) {
        if (!ne.isBuffer(S) || S.length < 4) throw new Error("Set Locktime: Invalid Transaction");
        return S.writeUInt32LE(w, S.length - 4), S;
      }
      n.defaultLocktimeSetter = v;
    })(Gc)), Gc;
  }
  var Nm;
  function gE() {
    if (Nm) return bs;
    Nm = 1, Object.defineProperty(bs, "__esModule", {
      value: true
    });
    const n = yE(), d = Uv(), c = zt(), f = Fv();
    class _ {
      constructor(u) {
        this.inputs = [], this.outputs = [], this.globalMap = {
          unsignedTx: u
        };
      }
      static fromBase64(u, o) {
        const s = ne.from(u, "base64");
        return this.fromBuffer(s, o);
      }
      static fromHex(u, o) {
        const s = ne.from(u, "hex");
        return this.fromBuffer(s, o);
      }
      static fromBuffer(u, o) {
        const s = d.psbtFromBuffer(u, o), g = new this(s.globalMap.unsignedTx);
        return Object.assign(g, s), g;
      }
      toBase64() {
        return this.toBuffer().toString("base64");
      }
      toHex() {
        return this.toBuffer().toString("hex");
      }
      toBuffer() {
        return d.psbtToBuffer(this);
      }
      updateGlobal(u) {
        return f.updateGlobal(u, this.globalMap), this;
      }
      updateInput(u, o) {
        const s = f.checkForInput(this.inputs, u);
        return f.updateInput(o, s), this;
      }
      updateOutput(u, o) {
        const s = f.checkForOutput(this.outputs, u);
        return f.updateOutput(o, s), this;
      }
      addUnknownKeyValToGlobal(u) {
        return f.checkHasKey(u, this.globalMap.unknownKeyVals, f.getEnumLength(c.GlobalTypes)), this.globalMap.unknownKeyVals || (this.globalMap.unknownKeyVals = []), this.globalMap.unknownKeyVals.push(u), this;
      }
      addUnknownKeyValToInput(u, o) {
        const s = f.checkForInput(this.inputs, u);
        return f.checkHasKey(o, s.unknownKeyVals, f.getEnumLength(c.InputTypes)), s.unknownKeyVals || (s.unknownKeyVals = []), s.unknownKeyVals.push(o), this;
      }
      addUnknownKeyValToOutput(u, o) {
        const s = f.checkForOutput(this.outputs, u);
        return f.checkHasKey(o, s.unknownKeyVals, f.getEnumLength(c.OutputTypes)), s.unknownKeyVals || (s.unknownKeyVals = []), s.unknownKeyVals.push(o), this;
      }
      addInput(u) {
        this.globalMap.unsignedTx.addInput(u), this.inputs.push({
          unknownKeyVals: []
        });
        const o = u.unknownKeyVals || [], s = this.inputs.length - 1;
        if (!Array.isArray(o)) throw new Error("unknownKeyVals must be an Array");
        return o.forEach((g) => this.addUnknownKeyValToInput(s, g)), f.addInputAttributes(this.inputs, u), this;
      }
      addOutput(u) {
        this.globalMap.unsignedTx.addOutput(u), this.outputs.push({
          unknownKeyVals: []
        });
        const o = u.unknownKeyVals || [], s = this.outputs.length - 1;
        if (!Array.isArray(o)) throw new Error("unknownKeyVals must be an Array");
        return o.forEach((g) => this.addUnknownKeyValToOutput(s, g)), f.addOutputAttributes(this.outputs, u), this;
      }
      clearFinalizedInput(u) {
        const o = f.checkForInput(this.inputs, u);
        f.inputCheckUncleanFinalized(u, o);
        for (const s of Object.keys(o)) [
          "witnessUtxo",
          "nonWitnessUtxo",
          "finalScriptSig",
          "finalScriptWitness",
          "unknownKeyVals"
        ].includes(s) || delete o[s];
        return this;
      }
      combine(...u) {
        const o = n.combine([
          this
        ].concat(u));
        return Object.assign(this, o), this;
      }
      getTransaction() {
        return this.globalMap.unsignedTx.toBuffer();
      }
    }
    return bs.Psbt = _, bs;
  }
  var vt = {}, pt = {}, Um;
  function Qc() {
    if (Um) return pt;
    Um = 1, Object.defineProperty(pt, "__esModule", {
      value: true
    }), pt.signatureBlocksAction = pt.checkInputForSig = pt.pubkeyInScript = pt.pubkeyPositionInScript = pt.witnessStackToScriptWitness = pt.isP2TR = pt.isP2SHScript = pt.isP2WSHScript = pt.isP2WPKH = pt.isP2PKH = pt.isP2PK = pt.isP2MS = void 0;
    const n = yi(), d = er(), c = oa(), f = an(), _ = ia();
    function l(w) {
      return (S) => {
        try {
          return w({
            output: S
          }), true;
        } catch {
          return false;
        }
      };
    }
    pt.isP2MS = l(_.p2ms), pt.isP2PK = l(_.p2pk), pt.isP2PKH = l(_.p2pkh), pt.isP2WPKH = l(_.p2wpkh), pt.isP2WSHScript = l(_.p2wsh), pt.isP2SHScript = l(_.p2sh), pt.isP2TR = l(_.p2tr);
    function u(w) {
      let S = ne.allocUnsafe(0);
      function p(B) {
        S = ne.concat([
          S,
          ne.from(B)
        ]);
      }
      function A(B) {
        const O = S.length, U = n.encodingLength(B);
        S = ne.concat([
          S,
          ne.allocUnsafe(U)
        ]), n.encode(B, S, O);
      }
      function x(B) {
        A(B.length), p(B);
      }
      function k(B) {
        A(B.length), B.forEach(x);
      }
      return k(w), S;
    }
    pt.witnessStackToScriptWitness = u;
    function o(w, S) {
      const p = (0, f.hash160)(w), A = w.slice(1, 33), x = d.decompile(S);
      if (x === null) throw new Error("Unknown script error");
      return x.findIndex((k) => typeof k == "number" ? false : k.equals(w) || k.equals(p) || k.equals(A));
    }
    pt.pubkeyPositionInScript = o;
    function s(w, S) {
      return o(w, S) !== -1;
    }
    pt.pubkeyInScript = s;
    function g(w, S) {
      return E(w).some((A) => a(A, d.signature.decode, S));
    }
    pt.checkInputForSig = g;
    function a(w, S, p) {
      const { hashType: A } = S(w), x = [];
      switch (A & c.Transaction.SIGHASH_ANYONECANPAY && x.push("addInput"), A & 31) {
        case c.Transaction.SIGHASH_ALL:
          break;
        case c.Transaction.SIGHASH_SINGLE:
        case c.Transaction.SIGHASH_NONE:
          x.push("addOutput"), x.push("setInputSequence");
          break;
      }
      return x.indexOf(p) === -1;
    }
    pt.signatureBlocksAction = a;
    function E(w) {
      let S = [];
      if ((w.partialSig || []).length === 0) {
        if (!w.finalScriptSig && !w.finalScriptWitness) return [];
        S = v(w);
      } else S = w.partialSig;
      return S.map((p) => p.signature);
    }
    function v(w) {
      const S = w.finalScriptSig ? d.decompile(w.finalScriptSig) || [] : [], p = w.finalScriptWitness ? d.decompile(w.finalScriptWitness) || [] : [];
      return S.concat(p).filter((A) => ne.isBuffer(A) && d.isCanonicalScriptSignature(A)).map((A) => ({
        signature: A
      }));
    }
    return pt;
  }
  var Fm;
  function mE() {
    if (Fm) return vt;
    Fm = 1, Object.defineProperty(vt, "__esModule", {
      value: true
    }), vt.checkTaprootInputForSigs = vt.tapTreeFromList = vt.tapTreeToList = vt.tweakInternalPubKey = vt.checkTaprootOutputFields = vt.checkTaprootInputFields = vt.isTaprootOutput = vt.isTaprootInput = vt.serializeTaprootSignature = vt.tapScriptFinalizer = vt.toXOnly = void 0;
    const n = Qt(), d = oa(), c = Qc(), f = hd(), _ = ia(), l = Qc(), u = (D) => D.length === 32 ? D : D.slice(1, 33);
    vt.toXOnly = u;
    function o(D, G, Z) {
      const V = Ie(G, D, Z);
      try {
        const ee = ye(G, V).concat(V.script).concat(V.controlBlock);
        return {
          finalScriptWitness: (0, c.witnessStackToScriptWitness)(ee)
        };
      } catch (ce) {
        throw new Error(`Can not finalize taproot input #${D}: ${ce}`);
      }
    }
    vt.tapScriptFinalizer = o;
    function s(D, G) {
      const Z = G ? ne.from([
        G
      ]) : ne.from([]);
      return ne.concat([
        D,
        Z
      ]);
    }
    vt.serializeTaprootSignature = s;
    function g(D) {
      return D && !!(D.tapInternalKey || D.tapMerkleRoot || D.tapLeafScript && D.tapLeafScript.length || D.tapBip32Derivation && D.tapBip32Derivation.length || D.witnessUtxo && (0, c.isP2TR)(D.witnessUtxo.script));
    }
    vt.isTaprootInput = g;
    function a(D, G) {
      return D && !!(D.tapInternalKey || D.tapTree || D.tapBip32Derivation && D.tapBip32Derivation.length || G && (0, c.isP2TR)(G));
    }
    vt.isTaprootOutput = a;
    function E(D, G, Z) {
      Q(D, G, Z), Ee(D, G, Z);
    }
    vt.checkTaprootInputFields = E;
    function v(D, G, Z) {
      ae(D, G, Z), w(D, G);
    }
    vt.checkTaprootOutputFields = v;
    function w(D, G) {
      if (!G.tapTree && !G.tapInternalKey) return;
      const Z = G.tapInternalKey || D.tapInternalKey, V = G.tapTree || D.tapTree;
      if (Z) {
        const { script: ce } = D, ee = S(Z, V);
        if (ce && !ce.equals(ee)) throw new Error("Error adding output. Script or address missmatch.");
      }
    }
    function S(D, G) {
      const Z = G && x(G.leaves), { output: V } = (0, _.p2tr)({
        internalPubkey: D,
        scriptTree: Z
      });
      return V;
    }
    function p(D, G) {
      const Z = G.tapInternalKey, V = Z && (0, f.tweakKey)(Z, G.tapMerkleRoot);
      if (!V) throw new Error(`Cannot tweak tap internal key for input #${D}. Public key: ${Z && Z.toString("hex")}`);
      return V.x;
    }
    vt.tweakInternalPubKey = p;
    function A(D) {
      if (!(0, n.isTaptree)(D)) throw new Error("Cannot convert taptree to tapleaf list. Expecting a tapree structure.");
      return C(D);
    }
    vt.tapTreeToList = A;
    function x(D = []) {
      return D.length === 1 && D[0].depth === 0 ? {
        output: D[0].script,
        version: D[0].leafVersion
      } : K(D);
    }
    vt.tapTreeFromList = x;
    function k(D, G) {
      return O(D).some((V) => (0, l.signatureBlocksAction)(V, B, G));
    }
    vt.checkTaprootInputForSigs = k;
    function B(D) {
      return {
        signature: D.slice(0, 64),
        hashType: D.slice(64)[0] || d.Transaction.SIGHASH_DEFAULT
      };
    }
    function O(D) {
      const G = [];
      if (D.tapKeySig && G.push(D.tapKeySig), D.tapScriptSig && G.push(...D.tapScriptSig.map((Z) => Z.signature)), !G.length) {
        const Z = U(D.finalScriptWitness);
        Z && G.push(Z);
      }
      return G;
    }
    function U(D) {
      if (!D) return;
      const G = D.slice(2);
      if (G.length === 64 || G.length === 65) return G;
    }
    function C(D, G = [], Z = 0) {
      if (Z > f.MAX_TAPTREE_DEPTH) throw new Error("Max taptree depth exceeded.");
      return D ? (0, n.isTapleaf)(D) ? (G.push({
        depth: Z,
        leafVersion: D.version || f.LEAF_VERSION_TAPSCRIPT,
        script: D.output
      }), G) : (D[0] && C(D[0], G, Z + 1), D[1] && C(D[1], G, Z + 1), G) : [];
    }
    function K(D) {
      let G;
      for (const Z of D) if (G = X(Z, G), !G) throw new Error("No room left to insert tapleaf in tree");
      return G;
    }
    function X(D, G, Z = 0) {
      if (Z > f.MAX_TAPTREE_DEPTH) throw new Error("Max taptree depth exceeded.");
      if (D.depth === Z) return G ? void 0 : {
        output: D.script,
        version: D.leafVersion
      };
      if ((0, n.isTapleaf)(G)) return;
      const V = X(D, G && G[0], Z + 1);
      if (V) return [
        V,
        G && G[1]
      ];
      const ce = X(D, G && G[1], Z + 1);
      if (ce) return [
        G && G[0],
        ce
      ];
    }
    function Q(D, G, Z) {
      const V = g(D) && te(G), ce = te(D) && g(G), ee = D === G && g(G) && te(G);
      if (V || ce || ee) throw new Error(`Invalid arguments for Psbt.${Z}. Cannot use both taproot and non-taproot fields.`);
    }
    function ae(D, G, Z) {
      const V = a(D) && te(G), ce = te(D) && a(G), ee = D === G && a(G) && te(G);
      if (V || ce || ee) throw new Error(`Invalid arguments for Psbt.${Z}. Cannot use both taproot and non-taproot fields.`);
    }
    function Ee(D, G, Z) {
      if (G.tapMerkleRoot) {
        const V = (G.tapLeafScript || []).every((ee) => W(ee, G.tapMerkleRoot)), ce = (D.tapLeafScript || []).every((ee) => W(ee, G.tapMerkleRoot));
        if (!V || !ce) throw new Error(`Invalid arguments for Psbt.${Z}. Tapleaf not part of taptree.`);
      } else if (D.tapMerkleRoot && !(G.tapLeafScript || []).every((ce) => W(ce, D.tapMerkleRoot))) throw new Error(`Invalid arguments for Psbt.${Z}. Tapleaf not part of taptree.`);
    }
    function W(D, G) {
      if (!G) return true;
      const Z = (0, f.tapleafHash)({
        output: D.script,
        version: D.leafVersion
      });
      return (0, f.rootHashFromPath)(D.controlBlock, Z).equals(G);
    }
    function ye(D, G) {
      const Z = (0, f.tapleafHash)({
        output: G.script,
        version: G.leafVersion
      });
      return (D.tapScriptSig || []).filter((V) => V.leafHash.equals(Z)).map((V) => Te(G.script, V)).sort((V, ce) => ce.positionInScript - V.positionInScript).map((V) => V.signature);
    }
    function Te(D, G) {
      return Object.assign({
        positionInScript: (0, c.pubkeyPositionInScript)(G.pubkey, D)
      }, G);
    }
    function Ie(D, G, Z) {
      if (!D.tapScriptSig || !D.tapScriptSig.length) throw new Error(`Can not finalize taproot input #${G}. No tapleaf script signature provided.`);
      const V = (D.tapLeafScript || []).sort((ce, ee) => ce.controlBlock.length - ee.controlBlock.length).find((ce) => Re(ce, D.tapScriptSig, Z));
      if (!V) throw new Error(`Can not finalize taproot input #${G}. Signature for tapleaf script not found.`);
      return V;
    }
    function Re(D, G, Z) {
      const V = (0, f.tapleafHash)({
        output: D.script,
        version: D.leafVersion
      });
      return (!Z || Z.equals(V)) && G.find((ee) => ee.leafHash.equals(V)) !== void 0;
    }
    function te(D) {
      return D && !!(D.redeemScript || D.witnessScript || D.bip32Derivation && D.bip32Derivation.length);
    }
    return vt;
  }
  var Lm;
  function vE() {
    if (Lm) return Qo;
    Lm = 1, Object.defineProperty(Qo, "__esModule", {
      value: true
    }), Qo.Psbt = void 0;
    const n = gE(), d = yi(), c = Fv(), f = pd(), _ = js(), l = Rr(), u = ia(), o = hd(), s = er(), g = oa(), a = mE(), E = Qc(), v = {
      network: l.bitcoin,
      maximumFeeRate: 5e3
    };
    class w {
      static fromBase64(M, b = {}) {
        const h = ne.from(M, "base64");
        return this.fromBuffer(h, b);
      }
      static fromHex(M, b = {}) {
        const h = ne.from(M, "hex");
        return this.fromBuffer(h, b);
      }
      static fromBuffer(M, b = {}) {
        const h = n.Psbt.fromBuffer(M, S), m = new w(b, h);
        return Ee(m.__CACHE.__TX, m.__CACHE), m;
      }
      constructor(M = {}, b = new n.Psbt(new p())) {
        this.data = b, this.opts = Object.assign({}, v, M), this.__CACHE = {
          __NON_WITNESS_UTXO_TX_CACHE: [],
          __NON_WITNESS_UTXO_BUF_CACHE: [],
          __TX_IN_CACHE: {},
          __TX: this.data.globalMap.unsignedTx.tx,
          __UNSAFE_SIGN_NONSEGWIT: false
        }, this.data.inputs.length === 0 && this.setVersion(2);
        const h = (m, L, z, ie) => Object.defineProperty(m, L, {
          enumerable: z,
          writable: ie
        });
        h(this, "__CACHE", false, true), h(this, "opts", false, true);
      }
      get inputCount() {
        return this.data.inputs.length;
      }
      get version() {
        return this.__CACHE.__TX.version;
      }
      set version(M) {
        this.setVersion(M);
      }
      get locktime() {
        return this.__CACHE.__TX.locktime;
      }
      set locktime(M) {
        this.setLocktime(M);
      }
      get txInputs() {
        return this.__CACHE.__TX.ins.map((M) => ({
          hash: (0, _.cloneBuffer)(M.hash),
          index: M.index,
          sequence: M.sequence
        }));
      }
      get txOutputs() {
        return this.__CACHE.__TX.outs.map((M) => {
          let b;
          try {
            b = (0, f.fromOutputScript)(M.script, this.opts.network);
          } catch {
          }
          return {
            script: (0, _.cloneBuffer)(M.script),
            value: M.value,
            address: b
          };
        });
      }
      combine(...M) {
        return this.data.combine(...M.map((b) => b.data)), this;
      }
      clone() {
        const M = w.fromBuffer(this.data.toBuffer());
        return M.opts = JSON.parse(JSON.stringify(this.opts)), M;
      }
      setMaximumFeeRate(M) {
        U(M), this.opts.maximumFeeRate = M;
      }
      setVersion(M) {
        U(M), K(this.data.inputs, "setVersion");
        const b = this.__CACHE;
        return b.__TX.version = M, b.__EXTRACTED_TX = void 0, this;
      }
      setLocktime(M) {
        U(M), K(this.data.inputs, "setLocktime");
        const b = this.__CACHE;
        return b.__TX.locktime = M, b.__EXTRACTED_TX = void 0, this;
      }
      setInputSequence(M, b) {
        U(b), K(this.data.inputs, "setInputSequence");
        const h = this.__CACHE;
        if (h.__TX.ins.length <= M) throw new Error("Input index too high");
        return h.__TX.ins[M].sequence = b, h.__EXTRACTED_TX = void 0, this;
      }
      addInputs(M) {
        return M.forEach((b) => this.addInput(b)), this;
      }
      addInput(M) {
        if (arguments.length > 1 || !M || M.hash === void 0 || M.index === void 0) throw new Error("Invalid arguments for Psbt.addInput. Requires single object with at least [hash] and [index]");
        (0, a.checkTaprootInputFields)(M, M, "addInput"), K(this.data.inputs, "addInput"), M.witnessScript && st(M.witnessScript);
        const b = this.__CACHE;
        this.data.addInput(M);
        const h = b.__TX.ins[b.__TX.ins.length - 1];
        W(b, h);
        const m = this.data.inputs.length - 1, L = this.data.inputs[m];
        return L.nonWitnessUtxo && j(this.__CACHE, L, m), b.__FEE = void 0, b.__FEE_RATE = void 0, b.__EXTRACTED_TX = void 0, this;
      }
      addOutputs(M) {
        return M.forEach((b) => this.addOutput(b)), this;
      }
      addOutput(M) {
        if (arguments.length > 1 || !M || M.value === void 0 || M.address === void 0 && M.script === void 0) throw new Error("Invalid arguments for Psbt.addOutput. Requires single object with at least [script or address] and [value]");
        K(this.data.inputs, "addOutput");
        const { address: b } = M;
        if (typeof b == "string") {
          const { network: m } = this.opts, L = (0, f.toOutputScript)(b, m);
          M = Object.assign({}, M, {
            script: L
          });
        }
        (0, a.checkTaprootOutputFields)(M, M, "addOutput");
        const h = this.__CACHE;
        return this.data.addOutput(M), h.__FEE = void 0, h.__FEE_RATE = void 0, h.__EXTRACTED_TX = void 0, this;
      }
      extractTransaction(M) {
        if (!this.data.inputs.every(B)) throw new Error("Not finalized");
        const b = this.__CACHE;
        if (M || C(this, b, this.opts), b.__EXTRACTED_TX) return b.__EXTRACTED_TX;
        const h = b.__TX.clone();
        return pe(this.data.inputs, h, b, true), h;
      }
      getFeeRate() {
        return Re("__FEE_RATE", "fee rate", this.data.inputs, this.__CACHE);
      }
      getFee() {
        return Re("__FEE", "fee", this.data.inputs, this.__CACHE);
      }
      finalizeAllInputs() {
        return (0, c.checkForInput)(this.data.inputs, 0), Pt(this.data.inputs.length).forEach((M) => this.finalizeInput(M)), this;
      }
      finalizeInput(M, b) {
        const h = (0, c.checkForInput)(this.data.inputs, M);
        return (0, a.isTaprootInput)(h) ? this._finalizeTaprootInput(M, h, void 0, b) : this._finalizeInput(M, h, b);
      }
      finalizeTaprootInput(M, b, h = a.tapScriptFinalizer) {
        const m = (0, c.checkForInput)(this.data.inputs, M);
        if ((0, a.isTaprootInput)(m)) return this._finalizeTaprootInput(M, m, b, h);
        throw new Error(`Cannot finalize input #${M}. Not Taproot.`);
      }
      _finalizeInput(M, b, h = te) {
        const { script: m, isP2SH: L, isP2WSH: z, isSegwit: ie } = R(M, b, this.__CACHE);
        if (!m) throw new Error(`No script found for input #${M}`);
        X(b);
        const { finalScriptSig: de, finalScriptWitness: Oe } = h(M, b, m, ie, L, z);
        if (de && this.data.updateInput(M, {
          finalScriptSig: de
        }), Oe && this.data.updateInput(M, {
          finalScriptWitness: Oe
        }), !de && !Oe) throw new Error(`Unknown error finalizing input #${M}`);
        return this.data.clearFinalizedInput(M), this;
      }
      _finalizeTaprootInput(M, b, h, m = a.tapScriptFinalizer) {
        if (!b.witnessUtxo) throw new Error(`Cannot finalize input #${M}. Missing withness utxo.`);
        if (b.tapKeySig) {
          const L = u.p2tr({
            output: b.witnessUtxo.script,
            signature: b.tapKeySig
          }), z = (0, E.witnessStackToScriptWitness)(L.witness);
          this.data.updateInput(M, {
            finalScriptWitness: z
          });
        } else {
          const { finalScriptWitness: L } = m(M, b, h);
          this.data.updateInput(M, {
            finalScriptWitness: L
          });
        }
        return this.data.clearFinalizedInput(M), this;
      }
      getInputType(M) {
        const b = (0, c.checkForInput)(this.data.inputs, M), h = qe(M, b, this.__CACHE), m = nt(h, M, "input", b.redeemScript || Se(b.finalScriptSig), b.witnessScript || at(b.finalScriptWitness)), L = m.type === "raw" ? "" : m.type + "-", z = Ut(m.meaningfulScript);
        return L + z;
      }
      inputHasPubkey(M, b) {
        const h = (0, c.checkForInput)(this.data.inputs, M);
        return Ke(b, h, M, this.__CACHE);
      }
      inputHasHDKey(M, b) {
        const h = (0, c.checkForInput)(this.data.inputs, M), m = O(b);
        return !!h.bip32Derivation && h.bip32Derivation.some(m);
      }
      outputHasPubkey(M, b) {
        const h = (0, c.checkForOutput)(this.data.outputs, M);
        return ct(b, h, M, this.__CACHE);
      }
      outputHasHDKey(M, b) {
        const h = (0, c.checkForOutput)(this.data.outputs, M), m = O(b);
        return !!h.bip32Derivation && h.bip32Derivation.some(m);
      }
      validateSignaturesOfAllInputs(M) {
        return (0, c.checkForInput)(this.data.inputs, 0), Pt(this.data.inputs.length).map((h) => this.validateSignaturesOfInput(h, M)).reduce((h, m) => m === true && h, true);
      }
      validateSignaturesOfInput(M, b, h) {
        const m = this.data.inputs[M];
        return (0, a.isTaprootInput)(m) ? this.validateSignaturesOfTaprootInput(M, b, h) : this._validateSignaturesOfInput(M, b, h);
      }
      _validateSignaturesOfInput(M, b, h) {
        const m = this.data.inputs[M], L = (m || {}).partialSig;
        if (!m || !L || L.length < 1) throw new Error("No signatures to validate");
        if (typeof b != "function") throw new Error("Need validator function to validate signatures");
        const z = h ? L.filter((He) => He.pubkey.equals(h)) : L;
        if (z.length < 1) throw new Error("No signatures for this pubkey");
        const ie = [];
        let de, Oe, Le;
        for (const He of z) {
          const Xe = s.signature.decode(He.signature), { hash: Ye, script: et } = Le !== Xe.hashType ? Z(M, Object.assign({}, m, {
            sighashType: Xe.hashType
          }), this.__CACHE, true) : {
            hash: de,
            script: Oe
          };
          Le = Xe.hashType, de = Ye, Oe = et, Q(He.pubkey, et, "verify"), ie.push(b(He.pubkey, Ye, Xe.signature));
        }
        return ie.every((He) => He === true);
      }
      validateSignaturesOfTaprootInput(M, b, h) {
        const m = this.data.inputs[M], L = (m || {}).tapKeySig, z = (m || {}).tapScriptSig;
        if (!m && !L && !(z && !z.length)) throw new Error("No signatures to validate");
        if (typeof b != "function") throw new Error("Need validator function to validate signatures");
        h = h && (0, a.toXOnly)(h);
        const ie = h ? le(M, m, this.data.inputs, h, this.__CACHE) : V(M, m, this.data.inputs, this.__CACHE);
        if (!ie.length) throw new Error("No signatures for this pubkey");
        const de = ie.find((Le) => !Le.leafHash);
        let Oe = 0;
        if (L && de) {
          if (!b(de.pubkey, de.hash, ee(L))) return false;
          Oe++;
        }
        if (z) for (const Le of z) {
          const He = ie.find((Xe) => Le.pubkey.equals(Xe.pubkey));
          if (He) {
            if (!b(Le.pubkey, He.hash, ee(Le.signature))) return false;
            Oe++;
          }
        }
        return Oe > 0;
      }
      signAllInputsHD(M, b = [
        g.Transaction.SIGHASH_ALL
      ]) {
        if (!M || !M.publicKey || !M.fingerprint) throw new Error("Need HDSigner to sign input");
        const h = [];
        for (const m of Pt(this.data.inputs.length)) try {
          this.signInputHD(m, M, b), h.push(true);
        } catch {
          h.push(false);
        }
        if (h.every((m) => m === false)) throw new Error("No inputs were signed");
        return this;
      }
      signAllInputsHDAsync(M, b = [
        g.Transaction.SIGHASH_ALL
      ]) {
        return new Promise((h, m) => {
          if (!M || !M.publicKey || !M.fingerprint) return m(new Error("Need HDSigner to sign input"));
          const L = [], z = [];
          for (const ie of Pt(this.data.inputs.length)) z.push(this.signInputHDAsync(ie, M, b).then(() => {
            L.push(true);
          }, () => {
            L.push(false);
          }));
          return Promise.all(z).then(() => {
            if (L.every((ie) => ie === false)) return m(new Error("No inputs were signed"));
            h();
          });
        });
      }
      signInputHD(M, b, h = [
        g.Transaction.SIGHASH_ALL
      ]) {
        if (!b || !b.publicKey || !b.fingerprint) throw new Error("Need HDSigner to sign input");
        return N(M, this.data.inputs, b).forEach((L) => this.signInput(M, L, h)), this;
      }
      signInputHDAsync(M, b, h = [
        g.Transaction.SIGHASH_ALL
      ]) {
        return new Promise((m, L) => {
          if (!b || !b.publicKey || !b.fingerprint) return L(new Error("Need HDSigner to sign input"));
          const ie = N(M, this.data.inputs, b).map((de) => this.signInputAsync(M, de, h));
          return Promise.all(ie).then(() => {
            m();
          }).catch(L);
        });
      }
      signAllInputs(M, b) {
        if (!M || !M.publicKey) throw new Error("Need Signer to sign input");
        const h = [];
        for (const m of Pt(this.data.inputs.length)) try {
          this.signInput(m, M, b), h.push(true);
        } catch {
          h.push(false);
        }
        if (h.every((m) => m === false)) throw new Error("No inputs were signed");
        return this;
      }
      signAllInputsAsync(M, b) {
        return new Promise((h, m) => {
          if (!M || !M.publicKey) return m(new Error("Need Signer to sign input"));
          const L = [], z = [];
          for (const [ie] of this.data.inputs.entries()) z.push(this.signInputAsync(ie, M, b).then(() => {
            L.push(true);
          }, () => {
            L.push(false);
          }));
          return Promise.all(z).then(() => {
            if (L.every((ie) => ie === false)) return m(new Error("No inputs were signed"));
            h();
          });
        });
      }
      signInput(M, b, h) {
        if (!b || !b.publicKey) throw new Error("Need Signer to sign input");
        const m = (0, c.checkForInput)(this.data.inputs, M);
        return (0, a.isTaprootInput)(m) ? this._signTaprootInput(M, m, b, void 0, h) : this._signInput(M, b, h);
      }
      signTaprootInput(M, b, h, m) {
        if (!b || !b.publicKey) throw new Error("Need Signer to sign input");
        const L = (0, c.checkForInput)(this.data.inputs, M);
        if ((0, a.isTaprootInput)(L)) return this._signTaprootInput(M, L, b, h, m);
        throw new Error(`Input #${M} is not of type Taproot.`);
      }
      _signInput(M, b, h = [
        g.Transaction.SIGHASH_ALL
      ]) {
        const { hash: m, sighashType: L } = G(this.data.inputs, M, b.publicKey, this.__CACHE, h), z = [
          {
            pubkey: b.publicKey,
            signature: s.signature.encode(b.sign(m), L)
          }
        ];
        return this.data.updateInput(M, {
          partialSig: z
        }), this;
      }
      _signTaprootInput(M, b, h, m, L = [
        g.Transaction.SIGHASH_DEFAULT
      ]) {
        const z = this.checkTaprootHashesForSig(M, b, h, m, L), ie = z.filter((Oe) => !Oe.leafHash).map((Oe) => (0, a.serializeTaprootSignature)(h.signSchnorr(Oe.hash), b.sighashType))[0], de = z.filter((Oe) => !!Oe.leafHash).map((Oe) => ({
          pubkey: (0, a.toXOnly)(h.publicKey),
          signature: (0, a.serializeTaprootSignature)(h.signSchnorr(Oe.hash), b.sighashType),
          leafHash: Oe.leafHash
        }));
        return ie && this.data.updateInput(M, {
          tapKeySig: ie
        }), de.length && this.data.updateInput(M, {
          tapScriptSig: de
        }), this;
      }
      signInputAsync(M, b, h) {
        return Promise.resolve().then(() => {
          if (!b || !b.publicKey) throw new Error("Need Signer to sign input");
          const m = (0, c.checkForInput)(this.data.inputs, M);
          return (0, a.isTaprootInput)(m) ? this._signTaprootInputAsync(M, m, b, void 0, h) : this._signInputAsync(M, b, h);
        });
      }
      signTaprootInputAsync(M, b, h, m) {
        return Promise.resolve().then(() => {
          if (!b || !b.publicKey) throw new Error("Need Signer to sign input");
          const L = (0, c.checkForInput)(this.data.inputs, M);
          if ((0, a.isTaprootInput)(L)) return this._signTaprootInputAsync(M, L, b, h, m);
          throw new Error(`Input #${M} is not of type Taproot.`);
        });
      }
      _signInputAsync(M, b, h = [
        g.Transaction.SIGHASH_ALL
      ]) {
        const { hash: m, sighashType: L } = G(this.data.inputs, M, b.publicKey, this.__CACHE, h);
        return Promise.resolve(b.sign(m)).then((z) => {
          const ie = [
            {
              pubkey: b.publicKey,
              signature: s.signature.encode(z, L)
            }
          ];
          this.data.updateInput(M, {
            partialSig: ie
          });
        });
      }
      async _signTaprootInputAsync(M, b, h, m, L = [
        g.Transaction.SIGHASH_DEFAULT
      ]) {
        const z = this.checkTaprootHashesForSig(M, b, h, m, L), ie = [], de = z.filter((Le) => !Le.leafHash)[0];
        if (de) {
          const Le = Promise.resolve(h.signSchnorr(de.hash)).then((He) => ({
            tapKeySig: (0, a.serializeTaprootSignature)(He, b.sighashType)
          }));
          ie.push(Le);
        }
        const Oe = z.filter((Le) => !!Le.leafHash);
        if (Oe.length) {
          const Le = Oe.map((He) => Promise.resolve(h.signSchnorr(He.hash)).then((Xe) => ({
            tapScriptSig: [
              {
                pubkey: (0, a.toXOnly)(h.publicKey),
                signature: (0, a.serializeTaprootSignature)(Xe, b.sighashType),
                leafHash: He.leafHash
              }
            ]
          })));
          ie.push(...Le);
        }
        return Promise.all(ie).then((Le) => {
          Le.forEach((He) => this.data.updateInput(M, He));
        });
      }
      checkTaprootHashesForSig(M, b, h, m, L) {
        if (typeof h.signSchnorr != "function") throw new Error(`Need Schnorr Signer to sign taproot input #${M}.`);
        const z = le(M, b, this.data.inputs, h.publicKey, this.__CACHE, m, L);
        if (!z || !z.length) throw new Error(`Can not sign for input #${M} with the key ${h.publicKey.toString("hex")}`);
        return z;
      }
      toBuffer() {
        return x(this.__CACHE), this.data.toBuffer();
      }
      toHex() {
        return x(this.__CACHE), this.data.toHex();
      }
      toBase64() {
        return x(this.__CACHE), this.data.toBase64();
      }
      updateGlobal(M) {
        return this.data.updateGlobal(M), this;
      }
      updateInput(M, b) {
        return b.witnessScript && st(b.witnessScript), (0, a.checkTaprootInputFields)(this.data.inputs[M], b, "updateInput"), this.data.updateInput(M, b), b.nonWitnessUtxo && j(this.__CACHE, this.data.inputs[M], M), this;
      }
      updateOutput(M, b) {
        const h = this.data.outputs[M];
        return (0, a.checkTaprootOutputFields)(h, b, "updateOutput"), this.data.updateOutput(M, b), this;
      }
      addUnknownKeyValToGlobal(M) {
        return this.data.addUnknownKeyValToGlobal(M), this;
      }
      addUnknownKeyValToInput(M, b) {
        return this.data.addUnknownKeyValToInput(M, b), this;
      }
      addUnknownKeyValToOutput(M, b) {
        return this.data.addUnknownKeyValToOutput(M, b), this;
      }
      clearFinalizedInput(M) {
        return this.data.clearFinalizedInput(M), this;
      }
    }
    Qo.Psbt = w;
    const S = (he) => new p(he);
    class p {
      constructor(M = ne.from([
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ])) {
        this.tx = g.Transaction.fromBuffer(M), ae(this.tx), Object.defineProperty(this, "tx", {
          enumerable: false,
          writable: true
        });
      }
      getInputOutputCounts() {
        return {
          inputCount: this.tx.ins.length,
          outputCount: this.tx.outs.length
        };
      }
      addInput(M) {
        if (M.hash === void 0 || M.index === void 0 || !ne.isBuffer(M.hash) && typeof M.hash != "string" || typeof M.index != "number") throw new Error("Error adding input.");
        const b = typeof M.hash == "string" ? (0, _.reverseBuffer)(ne.from(M.hash, "hex")) : M.hash;
        this.tx.addInput(b, M.index, M.sequence);
      }
      addOutput(M) {
        if (M.script === void 0 || M.value === void 0 || !ne.isBuffer(M.script) || typeof M.value != "number") throw new Error("Error adding output.");
        this.tx.addOutput(M.script, M.value);
      }
      toBuffer() {
        return this.tx.toBuffer();
      }
    }
    function A(he, M, b) {
      switch (b) {
        case "pubkey":
        case "pubkeyhash":
        case "witnesspubkeyhash":
          return k(1, he.partialSig);
        case "multisig":
          const h = u.p2ms({
            output: M
          });
          return k(h.m, he.partialSig, h.pubkeys);
        default:
          return false;
      }
    }
    function x(he) {
      if (he.__UNSAFE_SIGN_NONSEGWIT !== false) throw new Error("Not BIP174 compliant, can not export");
    }
    function k(he, M, b) {
      if (!M) return false;
      let h;
      if (b ? h = b.map((m) => {
        const L = Qe(m);
        return M.find((z) => z.pubkey.equals(L));
      }).filter((m) => !!m) : h = M, h.length > he) throw new Error("Too many signatures");
      return h.length === he;
    }
    function B(he) {
      return !!he.finalScriptSig || !!he.finalScriptWitness;
    }
    function O(he) {
      return (M) => !(!M.masterFingerprint.equals(he.fingerprint) || !he.derivePath(M.path).publicKey.equals(M.pubkey));
    }
    function U(he) {
      if (typeof he != "number" || he !== Math.floor(he) || he > 4294967295 || he < 0) throw new Error("Invalid 32 bit integer");
    }
    function C(he, M, b) {
      const h = M.__FEE_RATE || he.getFeeRate(), m = M.__EXTRACTED_TX.virtualSize(), L = h * m;
      if (h >= b.maximumFeeRate) throw new Error(`Warning: You are paying around ${(L / 1e8).toFixed(8)} in fees, which is ${h} satoshi per byte for a transaction with a VSize of ${m} bytes (segwit counted as 0.25 byte per byte). Use setMaximumFeeRate method to raise your threshold, or pass true to the first arg of extractTransaction.`);
    }
    function K(he, M) {
      he.forEach((b) => {
        if ((0, a.isTaprootInput)(b) ? (0, a.checkTaprootInputForSigs)(b, M) : (0, E.checkInputForSig)(b, M)) throw new Error("Can not modify transaction, signatures exist.");
      });
    }
    function X(he) {
      if (!he.sighashType || !he.partialSig) return;
      const { partialSig: M, sighashType: b } = he;
      M.forEach((h) => {
        const { hashType: m } = s.signature.decode(h.signature);
        if (b !== m) throw new Error("Signature sighash does not match input sighash type");
      });
    }
    function Q(he, M, b) {
      if (!(0, E.pubkeyInScript)(he, M)) throw new Error(`Can not ${b} for this input with the key ${he.toString("hex")}`);
    }
    function ae(he) {
      if (!he.ins.every((b) => b.script && b.script.length === 0 && b.witness && b.witness.length === 0)) throw new Error("Format Error: Transaction ScriptSigs are not empty");
    }
    function Ee(he, M) {
      he.ins.forEach((b) => {
        W(M, b);
      });
    }
    function W(he, M) {
      const b = (0, _.reverseBuffer)(ne.from(M.hash)).toString("hex") + ":" + M.index;
      if (he.__TX_IN_CACHE[b]) throw new Error("Duplicate input detected.");
      he.__TX_IN_CACHE[b] = 1;
    }
    function ye(he, M) {
      return (b, h, m, L) => {
        const z = he({
          redeem: {
            output: m
          }
        }).output;
        if (!h.equals(z)) throw new Error(`${M} for ${L} #${b} doesn't match the scriptPubKey in the prevout`);
      };
    }
    const Te = ye(u.p2sh, "Redeem script"), Ie = ye(u.p2wsh, "Witness script");
    function Re(he, M, b, h) {
      if (!b.every(B)) throw new Error(`PSBT must be finalized to calculate ${M}`);
      if (he === "__FEE_RATE" && h.__FEE_RATE) return h.__FEE_RATE;
      if (he === "__FEE" && h.__FEE) return h.__FEE;
      let m, L = true;
      if (h.__EXTRACTED_TX ? (m = h.__EXTRACTED_TX, L = false) : m = h.__TX.clone(), pe(b, m, h, L), he === "__FEE_RATE") return h.__FEE_RATE;
      if (he === "__FEE") return h.__FEE;
    }
    function te(he, M, b, h, m, L) {
      const z = Ut(b);
      if (!A(M, b, z)) throw new Error(`Can not finalize input #${he}`);
      return D(b, z, M.partialSig, h, m, L);
    }
    function D(he, M, b, h, m, L) {
      let z, ie;
      const de = $(he, M, b), Oe = L ? u.p2wsh({
        redeem: de
      }) : null, Le = m ? u.p2sh({
        redeem: Oe || de
      }) : null;
      return h ? (Oe ? ie = (0, E.witnessStackToScriptWitness)(Oe.witness) : ie = (0, E.witnessStackToScriptWitness)(de.witness), Le && (z = Le.input)) : Le ? z = Le.input : z = de.input, {
        finalScriptSig: z,
        finalScriptWitness: ie
      };
    }
    function G(he, M, b, h, m) {
      const L = (0, c.checkForInput)(he, M), { hash: z, sighashType: ie, script: de } = Z(M, L, h, false, m);
      return Q(b, de, "sign"), {
        hash: z,
        sighashType: ie
      };
    }
    function Z(he, M, b, h, m) {
      const L = b.__TX, z = M.sighashType || g.Transaction.SIGHASH_ALL;
      me(z, m);
      let ie, de;
      if (M.nonWitnessUtxo) {
        const He = Pe(b, M, he), Xe = L.ins[he].hash, Ye = He.getHash();
        if (!Xe.equals(Ye)) throw new Error(`Non-witness UTXO hash for input #${he} doesn't match the hash specified in the prevout`);
        const et = L.ins[he].index;
        de = He.outs[et];
      } else if (M.witnessUtxo) de = M.witnessUtxo;
      else throw new Error("Need a Utxo input item for signing");
      const { meaningfulScript: Oe, type: Le } = nt(de.script, he, "input", M.redeemScript, M.witnessScript);
      if ([
        "p2sh-p2wsh",
        "p2wsh"
      ].indexOf(Le) >= 0) ie = L.hashForWitnessV0(he, Oe, de.value, z);
      else if ((0, E.isP2WPKH)(Oe)) {
        const He = u.p2pkh({
          hash: Oe.slice(2)
        }).output;
        ie = L.hashForWitnessV0(he, He, de.value, z);
      } else {
        if (M.nonWitnessUtxo === void 0 && b.__UNSAFE_SIGN_NONSEGWIT === false) throw new Error(`Input #${he} has witnessUtxo but non-segwit script: ${Oe.toString("hex")}`);
        !h && b.__UNSAFE_SIGN_NONSEGWIT !== false && console.warn(`Warning: Signing non-segwit inputs without the full parent transaction means there is a chance that a miner could feed you incorrect information to trick you into paying large fees. This behavior is the same as Psbt's predecessor (TransactionBuilder - now removed) when signing non-segwit scripts. You are not able to export this Psbt with toBuffer|toBase64|toHex since it is not BIP174 compliant.
*********************
PROCEED WITH CAUTION!
*********************`), ie = L.hashForSignature(he, Oe, z);
      }
      return {
        script: Oe,
        sighashType: z,
        hash: ie
      };
    }
    function V(he, M, b, h) {
      const m = [];
      if (M.tapInternalKey) {
        const z = ce(he, M, h);
        z && m.push(z);
      }
      if (M.tapScriptSig) {
        const z = M.tapScriptSig.map((ie) => ie.pubkey);
        m.push(...z);
      }
      return m.map((z) => le(he, M, b, z, h)).flat();
    }
    function ce(he, M, b) {
      const { script: h } = Ce(he, M, b);
      return (0, E.isP2TR)(h) ? h.subarray(2, 34) : null;
    }
    function ee(he) {
      return he.length === 64 ? he : he.subarray(0, 64);
    }
    function le(he, M, b, h, m, L, z) {
      const ie = m.__TX, de = M.sighashType || g.Transaction.SIGHASH_DEFAULT;
      me(de, z);
      const Oe = b.map((et, kt) => Ce(kt, et, m)), Le = Oe.map((et) => et.script), He = Oe.map((et) => et.value), Xe = [];
      if (M.tapInternalKey && !L) {
        const et = ce(he, M, m) || ne.from([]);
        if ((0, a.toXOnly)(h).equals(et)) {
          const kt = ie.hashForWitnessV1(he, Le, He, de);
          Xe.push({
            pubkey: h,
            hash: kt
          });
        }
      }
      const Ye = (M.tapLeafScript || []).filter((et) => (0, E.pubkeyInScript)(h, et.script)).map((et) => {
        const kt = (0, o.tapleafHash)({
          output: et.script,
          version: et.leafVersion
        });
        return Object.assign({
          hash: kt
        }, et);
      }).filter((et) => !L || L.equals(et.hash)).map((et) => {
        const kt = ie.hashForWitnessV1(he, Le, He, de, et.hash);
        return {
          pubkey: h,
          hash: kt,
          leafHash: et.hash
        };
      });
      return Xe.concat(Ye);
    }
    function me(he, M) {
      if (M && M.indexOf(he) < 0) {
        const b = H(he);
        throw new Error(`Sighash type is not allowed. Retry the sign method passing the sighashTypes array of whitelisted types. Sighash type: ${b}`);
      }
    }
    function $(he, M, b) {
      let h;
      switch (M) {
        case "multisig":
          const m = re(he, b);
          h = u.p2ms({
            output: he,
            signatures: m
          });
          break;
        case "pubkey":
          h = u.p2pk({
            output: he,
            signature: b[0].signature
          });
          break;
        case "pubkeyhash":
          h = u.p2pkh({
            output: he,
            pubkey: b[0].pubkey,
            signature: b[0].signature
          });
          break;
        case "witnesspubkeyhash":
          h = u.p2wpkh({
            output: he,
            pubkey: b[0].pubkey,
            signature: b[0].signature
          });
          break;
      }
      return h;
    }
    function R(he, M, b) {
      const h = b.__TX, m = {
        script: null,
        isSegwit: false,
        isP2SH: false,
        isP2WSH: false
      };
      if (m.isP2SH = !!M.redeemScript, m.isP2WSH = !!M.witnessScript, M.witnessScript) m.script = M.witnessScript;
      else if (M.redeemScript) m.script = M.redeemScript;
      else if (M.nonWitnessUtxo) {
        const L = Pe(b, M, he), z = h.ins[he].index;
        m.script = L.outs[z].script;
      } else M.witnessUtxo && (m.script = M.witnessUtxo.script);
      return (M.witnessScript || (0, E.isP2WPKH)(m.script)) && (m.isSegwit = true), m;
    }
    function N(he, M, b) {
      const h = (0, c.checkForInput)(M, he);
      if (!h.bip32Derivation || h.bip32Derivation.length === 0) throw new Error("Need bip32Derivation to sign with HD");
      const m = h.bip32Derivation.map((z) => {
        if (z.masterFingerprint.equals(b.fingerprint)) return z;
      }).filter((z) => !!z);
      if (m.length === 0) throw new Error("Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint");
      return m.map((z) => {
        const ie = b.derivePath(z.path);
        if (!z.pubkey.equals(ie.publicKey)) throw new Error("pubkey did not match bip32Derivation");
        return ie;
      });
    }
    function re(he, M) {
      return u.p2ms({
        output: he
      }).pubkeys.map((h) => (M.filter((m) => m.pubkey.equals(h))[0] || {}).signature).filter((h) => !!h);
    }
    function se(he) {
      let M = 0;
      function b(z) {
        return M += z, he.slice(M - z, M);
      }
      function h() {
        const z = d.decode(he, M);
        return M += d.decode.bytes, z;
      }
      function m() {
        return b(h());
      }
      function L() {
        const z = h(), ie = [];
        for (let de = 0; de < z; de++) ie.push(m());
        return ie;
      }
      return L();
    }
    function H(he) {
      let M = he & g.Transaction.SIGHASH_ANYONECANPAY ? "SIGHASH_ANYONECANPAY | " : "";
      switch (he & 31) {
        case g.Transaction.SIGHASH_ALL:
          M += "SIGHASH_ALL";
          break;
        case g.Transaction.SIGHASH_SINGLE:
          M += "SIGHASH_SINGLE";
          break;
        case g.Transaction.SIGHASH_NONE:
          M += "SIGHASH_NONE";
          break;
      }
      return M;
    }
    function j(he, M, b) {
      he.__NON_WITNESS_UTXO_BUF_CACHE[b] = M.nonWitnessUtxo;
      const h = g.Transaction.fromBuffer(M.nonWitnessUtxo);
      he.__NON_WITNESS_UTXO_TX_CACHE[b] = h;
      const m = he, L = b;
      delete M.nonWitnessUtxo, Object.defineProperty(M, "nonWitnessUtxo", {
        enumerable: true,
        get() {
          const z = m.__NON_WITNESS_UTXO_BUF_CACHE[L], ie = m.__NON_WITNESS_UTXO_TX_CACHE[L];
          if (z !== void 0) return z;
          {
            const de = ie.toBuffer();
            return m.__NON_WITNESS_UTXO_BUF_CACHE[L] = de, de;
          }
        },
        set(z) {
          m.__NON_WITNESS_UTXO_BUF_CACHE[L] = z;
        }
      });
    }
    function pe(he, M, b, h) {
      let m = 0;
      he.forEach((de, Oe) => {
        if (h && de.finalScriptSig && (M.ins[Oe].script = de.finalScriptSig), h && de.finalScriptWitness && (M.ins[Oe].witness = se(de.finalScriptWitness)), de.witnessUtxo) m += de.witnessUtxo.value;
        else if (de.nonWitnessUtxo) {
          const Le = Pe(b, de, Oe), He = M.ins[Oe].index, Xe = Le.outs[He];
          m += Xe.value;
        }
      });
      const L = M.outs.reduce((de, Oe) => de + Oe.value, 0), z = m - L;
      if (z < 0) throw new Error("Outputs are spending more than Inputs");
      const ie = M.virtualSize();
      b.__FEE = z, b.__EXTRACTED_TX = M, b.__FEE_RATE = Math.floor(z / ie);
    }
    function Pe(he, M, b) {
      const h = he.__NON_WITNESS_UTXO_TX_CACHE;
      return h[b] || j(he, M, b), h[b];
    }
    function qe(he, M, b) {
      const { script: h } = Ce(he, M, b);
      return h;
    }
    function Ce(he, M, b) {
      if (M.witnessUtxo !== void 0) return {
        script: M.witnessUtxo.script,
        value: M.witnessUtxo.value
      };
      if (M.nonWitnessUtxo !== void 0) {
        const m = Pe(b, M, he).outs[b.__TX.ins[he].index];
        return {
          script: m.script,
          value: m.value
        };
      } else throw new Error("Can't find pubkey in input without Utxo data");
    }
    function Ke(he, M, b, h) {
      const m = qe(b, M, h), { meaningfulScript: L } = nt(m, b, "input", M.redeemScript, M.witnessScript);
      return (0, E.pubkeyInScript)(he, L);
    }
    function ct(he, M, b, h) {
      const m = h.__TX.outs[b].script, { meaningfulScript: L } = nt(m, b, "output", M.redeemScript, M.witnessScript);
      return (0, E.pubkeyInScript)(he, L);
    }
    function Se(he) {
      if (!he) return;
      const M = s.decompile(he);
      if (!M) return;
      const b = M[M.length - 1];
      if (!(!ne.isBuffer(b) || Ve(b) || Ze(b) || !s.decompile(b))) return b;
    }
    function at(he) {
      if (!he) return;
      const M = se(he), b = M[M.length - 1];
      if (!(Ve(b) || !s.decompile(b))) return b;
    }
    function Qe(he) {
      if (he.length === 65) {
        const M = he[64] & 1, b = he.slice(0, 33);
        return b[0] = 2 | M, b;
      }
      return he.slice();
    }
    function Ve(he) {
      return he.length === 33 && s.isCanonicalPubKey(he);
    }
    function Ze(he) {
      return s.isCanonicalScriptSignature(he);
    }
    function nt(he, M, b, h, m) {
      const L = (0, E.isP2SHScript)(he), z = L && h && (0, E.isP2WSHScript)(h), ie = (0, E.isP2WSHScript)(he);
      if (L && h === void 0) throw new Error("scriptPubkey is P2SH but redeemScript missing");
      if ((ie || z) && m === void 0) throw new Error("scriptPubkey or redeemScript is P2WSH but witnessScript missing");
      let de;
      return z ? (de = m, Te(M, he, h, b), Ie(M, h, m, b), st(de)) : ie ? (de = m, Ie(M, he, m, b), st(de)) : L ? (de = h, Te(M, he, h, b)) : de = he, {
        meaningfulScript: de,
        type: z ? "p2sh-p2wsh" : L ? "p2sh" : ie ? "p2wsh" : "raw"
      };
    }
    function st(he) {
      if ((0, E.isP2WPKH)(he) || (0, E.isP2SHScript)(he)) throw new Error("P2WPKH or P2SH can not be contained within P2WSH");
    }
    function Ut(he) {
      return (0, E.isP2WPKH)(he) ? "witnesspubkeyhash" : (0, E.isP2PKH)(he) ? "pubkeyhash" : (0, E.isP2MS)(he) ? "multisig" : (0, E.isP2PK)(he) ? "pubkey" : "nonstandard";
    }
    function Pt(he) {
      return [
        ...Array(he).keys()
      ];
    }
    return Qo;
  }
  var Mm;
  function wE() {
    return Mm || (Mm = 1, (function(n) {
      Object.defineProperty(n, "__esModule", {
        value: true
      }), n.initEccLib = n.Transaction = n.opcodes = n.Psbt = n.Block = n.script = n.payments = n.networks = n.crypto = n.address = void 0;
      const d = pd();
      n.address = d;
      const c = an();
      n.crypto = c;
      const f = Rr();
      n.networks = f;
      const _ = ia();
      n.payments = _;
      const l = er();
      n.script = l;
      var u = G2();
      Object.defineProperty(n, "Block", {
        enumerable: true,
        get: function() {
          return u.Block;
        }
      });
      var o = vE();
      Object.defineProperty(n, "Psbt", {
        enumerable: true,
        get: function() {
          return o.Psbt;
        }
      });
      var s = ld();
      Object.defineProperty(n, "opcodes", {
        enumerable: true,
        get: function() {
          return s.OPS;
        }
      });
      var g = oa();
      Object.defineProperty(n, "Transaction", {
        enumerable: true,
        get: function() {
          return g.Transaction;
        }
      });
      var a = dd();
      Object.defineProperty(n, "initEccLib", {
        enumerable: true,
        get: function() {
          return a.initEccLib;
        }
      });
    })(Cc)), Cc;
  }
  var tt = wE();
  const Lv = "0123456789abcdefABCDEF";
  Lv.split("").map((n) => n.codePointAt(0));
  Array(256).fill(true).map((n, d) => {
    const c = String.fromCodePoint(d), f = Lv.indexOf(c);
    return f < 0 ? void 0 : f < 16 ? f : f - 6;
  });
  new TextEncoder();
  new TextDecoder("ascii");
  function _E(n, d) {
    const c = Math.min(n.length, d.length);
    for (let f = 0; f < c; ++f) if (n[f] !== d[f]) return n[f] < d[f] ? -1 : 1;
    return n.length === d.length ? 0 : n.length > d.length ? 1 : -1;
  }
  const Mv = 0, md = 1, Dv = 2, Hv = 3, $o = 4, qv = 5, jv = 6, Wv = 7, EE = {
    [Mv.toString()]: "Expected Private",
    [md.toString()]: "Expected Point",
    [Dv.toString()]: "Expected Tweak",
    [Hv.toString()]: "Expected Hash",
    [$o.toString()]: "Expected Signature",
    [qv.toString()]: "Expected Extra Data (32 bytes)",
    [jv.toString()]: "Expected Parity (1 | 0)",
    [Wv.toString()]: "Bad Recovery Id"
  };
  function dr(n) {
    const d = EE[n.toString()] || `Unknow error code: ${n}`;
    throw new TypeError(d);
  }
  const aa = 32, ea = 33, sa = 65, qn = 32, Kv = 32, zv = 32, Vv = 32, Ws = 64, Gv = new Uint8Array(32), Cs = new Uint8Array([
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    254,
    186,
    174,
    220,
    230,
    175,
    72,
    160,
    59,
    191,
    210,
    94,
    140,
    208,
    54,
    65,
    65
  ]), SE = new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    69,
    81,
    35,
    25,
    80,
    183,
    95,
    196,
    64,
    45,
    161,
    114,
    47,
    201,
    186,
    238
  ]);
  function jr(n) {
    return n instanceof Uint8Array;
  }
  function hi(n, d) {
    for (let c = 0; c < 32; ++c) if (n[c] !== d[c]) return n[c] < d[c] ? -1 : 1;
    return 0;
  }
  function Jc(n) {
    return hi(n, Gv) === 0;
  }
  function Xv(n) {
    return jr(n) && n.length === aa && hi(n, Gv) > 0 && hi(n, Cs) < 0;
  }
  function bE(n) {
    return jr(n) && (n.length === ea || n.length === sa || n.length === qn);
  }
  function Yv(n) {
    return jr(n) && n.length === qn;
  }
  function TE(n) {
    return jr(n) && (n.length === ea || n.length === sa);
  }
  function xE(n) {
    return jr(n) && n.length === ea;
  }
  function PE(n) {
    return jr(n) && n.length === Kv && hi(n, Cs) < 0;
  }
  function kE(n) {
    return jr(n) && n.length === zv;
  }
  function AE(n) {
    return n === void 0 || jr(n) && n.length === Vv;
  }
  function IE(n) {
    return jr(n) && n.length === 64 && hi(n.subarray(0, 32), Cs) < 0 && hi(n.subarray(32, 64), Cs) < 0;
  }
  function BE(n) {
    return jr(n) && n.length === 64 && hi(n.subarray(0, 32), SE) < 0;
  }
  function OE(n) {
    n !== 0 && n !== 1 && dr(jv);
  }
  function jn(n) {
    Xv(n) || dr(Mv);
  }
  function pi(n) {
    bE(n) || dr(md);
  }
  function Ns(n) {
    Yv(n) || dr(md);
  }
  function Zi(n) {
    PE(n) || dr(Dv);
  }
  function $i(n) {
    kE(n) || dr(Hv);
  }
  function vd(n) {
    AE(n) || dr(qv);
  }
  function wd(n) {
    IE(n) || dr($o);
  }
  function RE(n) {
    n() || dr($o);
  }
  function CE(n) {
    Jc(n.subarray(0, 32)) && dr($o), Jc(n.subarray(32, 64)) && dr($o);
  }
  function NE(n) {
    BE(n) || dr(Wv);
  }
  const UE = "/Bitcoin_Lottery/assets/secp256k1-Cao5Swmf.wasm", FE = async (n = {}, d) => {
    let c;
    if (d.startsWith("data:")) {
      const f = d.replace(/^data:.*?base64,/, "");
      let _;
      if (typeof ne == "function" && typeof ne.from == "function") _ = ne.from(f, "base64");
      else if (typeof atob == "function") {
        const l = atob(f);
        _ = new Uint8Array(l.length);
        for (let u = 0; u < l.length; u++) _[u] = l.charCodeAt(u);
      } else throw new Error("Cannot decode base64-encoded data URL");
      c = await WebAssembly.instantiate(_, n);
    } else {
      const f = await fetch(d), _ = f.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && _.startsWith("application/wasm")) c = await WebAssembly.instantiateStreaming(f, n);
      else {
        const l = await f.arrayBuffer();
        c = await WebAssembly.instantiate(l, n);
      }
    }
    return c.instance.exports;
  };
  function LE() {
    const n = new Uint8Array(4);
    if (typeof crypto > "u") throw new Error("The crypto object is unavailable. This may occur if your environment does not support the Web Cryptography API.");
    return crypto.getRandomValues(n), n;
  }
  function ME() {
    const n = LE();
    return (n[0] << 24) + (n[1] << 16) + (n[2] << 8) + n[3];
  }
  URL = globalThis.URL;
  const rt = await FE({
    "./rand.js": {
      generateInt32: ME
    },
    "./validate_error.js": {
      throwError: dr
    }
  }, UE), DE = rt.memory, HE = rt.initializeContext, qE = rt.isPoint, jE = rt.PUBLIC_KEY_INPUT, WE = rt.pointAdd, KE = rt.PUBLIC_KEY_INPUT2, zE = rt.pointAddScalar, VE = rt.TWEAK_INPUT, GE = rt.xOnlyPointAddTweak, XE = rt.X_ONLY_PUBLIC_KEY_INPUT, YE = rt.xOnlyPointAddTweakCheck, QE = rt.X_ONLY_PUBLIC_KEY_INPUT2, JE = rt.pointCompress, ZE = rt.pointFromScalar, $E = rt.PRIVATE_INPUT, eS = rt.xOnlyPointFromScalar, tS = rt.xOnlyPointFromPoint, rS = rt.pointMultiply, nS = rt.privateAdd, iS = rt.privateSub, oS = rt.privateNegate, aS = rt.sign, sS = rt.HASH_INPUT, uS = rt.EXTRA_DATA_INPUT, lS = rt.SIGNATURE_INPUT, fS = rt.signRecoverable, cS = rt.signSchnorr, dS = rt.verify, hS = rt.recover, pS = rt.verifySchnorr, yS = rt.rustsecp256k1_v0_8_1_default_error_callback_fn, gS = rt.rustsecp256k1_v0_8_1_default_illegal_callback_fn, mS = rt.__data_end, vS = rt.__heap_base, ut = Object.freeze(Object.defineProperty({
    __proto__: null,
    EXTRA_DATA_INPUT: uS,
    HASH_INPUT: sS,
    PRIVATE_INPUT: $E,
    PUBLIC_KEY_INPUT: jE,
    PUBLIC_KEY_INPUT2: KE,
    SIGNATURE_INPUT: lS,
    TWEAK_INPUT: VE,
    X_ONLY_PUBLIC_KEY_INPUT: XE,
    X_ONLY_PUBLIC_KEY_INPUT2: QE,
    __data_end: mS,
    __heap_base: vS,
    initializeContext: HE,
    isPoint: qE,
    memory: DE,
    pointAdd: WE,
    pointAddScalar: zE,
    pointCompress: JE,
    pointFromScalar: ZE,
    pointMultiply: rS,
    privateAdd: nS,
    privateNegate: oS,
    privateSub: iS,
    recover: hS,
    rustsecp256k1_v0_8_1_default_error_callback_fn: yS,
    rustsecp256k1_v0_8_1_default_illegal_callback_fn: gS,
    sign: aS,
    signRecoverable: fS,
    signSchnorr: cS,
    verify: dS,
    verifySchnorr: pS,
    xOnlyPointAddTweak: GE,
    xOnlyPointAddTweakCheck: YE,
    xOnlyPointFromPoint: tS,
    xOnlyPointFromScalar: eS
  }, Symbol.toStringTag, {
    value: "Module"
  })), sn = new Uint8Array(ut.memory.buffer), Dm = ut.PRIVATE_INPUT.value, Hm = ut.PUBLIC_KEY_INPUT.value, qm = ut.PUBLIC_KEY_INPUT2.value, jm = ut.X_ONLY_PUBLIC_KEY_INPUT.value, Wm = ut.X_ONLY_PUBLIC_KEY_INPUT2.value, Km = ut.TWEAK_INPUT.value, zm = ut.HASH_INPUT.value, Vm = ut.EXTRA_DATA_INPUT.value, Gm = ut.SIGNATURE_INPUT.value, Nt = sn.subarray(Dm, Dm + aa), xt = sn.subarray(Hm, Hm + sa), Xm = sn.subarray(qm, qm + sa), _r = sn.subarray(jm, jm + qn), Ym = sn.subarray(Wm, Wm + qn), Er = sn.subarray(Km, Km + Kv), Sr = sn.subarray(zm, zm + zv), Vi = sn.subarray(Vm, Vm + Vv), br = sn.subarray(Gm, Gm + Ws);
  function eo(n, d) {
    return n === void 0 ? d !== void 0 ? d.length : ea : n ? ea : sa;
  }
  function _d(n) {
    try {
      return xt.set(n), ut.isPoint(n.length) === 1;
    } finally {
      xt.fill(0);
    }
  }
  function wS() {
    ut.initializeContext();
  }
  function Qv(n) {
    return TE(n) && _d(n);
  }
  function _S(n) {
    return xE(n) && _d(n);
  }
  function Jv(n) {
    return Yv(n) && _d(n);
  }
  function Zv(n) {
    return Xv(n);
  }
  function ES(n, d, c) {
    pi(n), pi(d);
    const f = eo(c, n);
    try {
      return xt.set(n), Xm.set(d), ut.pointAdd(n.length, d.length, f) === 1 ? xt.slice(0, f) : null;
    } finally {
      xt.fill(0), Xm.fill(0);
    }
  }
  function SS(n, d, c) {
    pi(n), Zi(d);
    const f = eo(c, n);
    try {
      return xt.set(n), Er.set(d), ut.pointAddScalar(n.length, f) === 1 ? xt.slice(0, f) : null;
    } finally {
      xt.fill(0), Er.fill(0);
    }
  }
  function Zc(n, d) {
    pi(n);
    const c = eo(d, n);
    try {
      return xt.set(n), ut.pointCompress(n.length, c), xt.slice(0, c);
    } finally {
      xt.fill(0);
    }
  }
  function bS(n, d) {
    jn(n);
    const c = eo(d);
    try {
      return Nt.set(n), ut.pointFromScalar(c) === 1 ? xt.slice(0, c) : null;
    } finally {
      Nt.fill(0), xt.fill(0);
    }
  }
  function TS(n) {
    jn(n);
    try {
      return Nt.set(n), ut.xOnlyPointFromScalar(), _r.slice(0, qn);
    } finally {
      Nt.fill(0), _r.fill(0);
    }
  }
  function xS(n) {
    pi(n);
    try {
      return xt.set(n), ut.xOnlyPointFromPoint(n.length), _r.slice(0, qn);
    } finally {
      xt.fill(0), _r.fill(0);
    }
  }
  function PS(n, d, c) {
    pi(n), Zi(d);
    const f = eo(c, n);
    try {
      return xt.set(n), Er.set(d), ut.pointMultiply(n.length, f) === 1 ? xt.slice(0, f) : null;
    } finally {
      xt.fill(0), Er.fill(0);
    }
  }
  function kS(n, d) {
    jn(n), Zi(d);
    try {
      return Nt.set(n), Er.set(d), ut.privateAdd() === 1 ? Nt.slice(0, aa) : null;
    } finally {
      Nt.fill(0), Er.fill(0);
    }
  }
  function AS(n, d) {
    if (jn(n), Zi(d), Jc(d)) return new Uint8Array(n);
    try {
      return Nt.set(n), Er.set(d), ut.privateSub() === 1 ? Nt.slice(0, aa) : null;
    } finally {
      Nt.fill(0), Er.fill(0);
    }
  }
  function IS(n) {
    jn(n);
    try {
      return Nt.set(n), ut.privateNegate(), Nt.slice(0, aa);
    } finally {
      Nt.fill(0);
    }
  }
  function BS(n, d) {
    Ns(n), Zi(d);
    try {
      _r.set(n), Er.set(d);
      const c = ut.xOnlyPointAddTweak();
      return c !== -1 ? {
        parity: c,
        xOnlyPubkey: _r.slice(0, qn)
      } : null;
    } finally {
      _r.fill(0), Er.fill(0);
    }
  }
  function OS(n, d, c, f) {
    Ns(n), Ns(c), Zi(d);
    const _ = f !== void 0;
    _ && OE(f);
    try {
      if (_r.set(n), Ym.set(c), Er.set(d), _) return ut.xOnlyPointAddTweakCheck(f) === 1;
      {
        ut.xOnlyPointAddTweak();
        const l = _r.slice(0, qn);
        return _E(l, c) === 0;
      }
    } finally {
      _r.fill(0), Ym.fill(0), Er.fill(0);
    }
  }
  function RS(n, d, c) {
    $i(n), jn(d), vd(c);
    try {
      return Sr.set(n), Nt.set(d), c !== void 0 && Vi.set(c), ut.sign(c === void 0 ? 0 : 1), br.slice(0, Ws);
    } finally {
      Sr.fill(0), Nt.fill(0), c !== void 0 && Vi.fill(0), br.fill(0);
    }
  }
  function CS(n, d, c) {
    $i(n), jn(d), vd(c);
    try {
      Sr.set(n), Nt.set(d), c !== void 0 && Vi.set(c);
      const f = ut.signRecoverable(c === void 0 ? 0 : 1);
      return {
        signature: br.slice(0, Ws),
        recoveryId: f
      };
    } finally {
      Sr.fill(0), Nt.fill(0), c !== void 0 && Vi.fill(0), br.fill(0);
    }
  }
  function NS(n, d, c) {
    $i(n), jn(d), vd(c);
    try {
      return Sr.set(n), Nt.set(d), c !== void 0 && Vi.set(c), ut.signSchnorr(c === void 0 ? 0 : 1), br.slice(0, Ws);
    } finally {
      Sr.fill(0), Nt.fill(0), c !== void 0 && Vi.fill(0), br.fill(0);
    }
  }
  function US(n, d, c, f = false) {
    $i(n), pi(d), wd(c);
    try {
      return Sr.set(n), xt.set(d), br.set(c), ut.verify(d.length, f === true ? 1 : 0) === 1;
    } finally {
      Sr.fill(0), xt.fill(0), br.fill(0);
    }
  }
  function FS(n, d, c, f = false) {
    $i(n), wd(d), CE(d), c & 2 && NE(d), RE(() => Jv(d.subarray(0, 32)));
    const _ = eo(f);
    try {
      return Sr.set(n), br.set(d), ut.recover(_, c) === 1 ? xt.slice(0, _) : null;
    } finally {
      Sr.fill(0), br.fill(0), xt.fill(0);
    }
  }
  function LS(n, d, c) {
    $i(n), Ns(d), wd(c);
    try {
      return Sr.set(n), _r.set(d), br.set(c), ut.verifySchnorr() === 1;
    } finally {
      Sr.fill(0), _r.fill(0), br.fill(0);
    }
  }
  let MS, nn, Qm, $v;
  MS = Object.freeze(Object.defineProperty({
    __proto__: null,
    __initializeContext: wS,
    isPoint: Qv,
    isPointCompressed: _S,
    isPrivate: Zv,
    isXOnlyPoint: Jv,
    pointAdd: ES,
    pointAddScalar: SS,
    pointCompress: Zc,
    pointFromScalar: bS,
    pointMultiply: PS,
    privateAdd: kS,
    privateNegate: IS,
    privateSub: AS,
    recover: FS,
    sign: RS,
    signRecoverable: CS,
    signSchnorr: NS,
    verify: US,
    verifySchnorr: LS,
    xOnlyPointAddTweak: BS,
    xOnlyPointAddTweakCheck: OS,
    xOnlyPointFromPoint: xS,
    xOnlyPointFromScalar: TS
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  nn = k2(MS);
  GS = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
  Qm = 5e5;
  XS = (n) => {
    const d = n.trim();
    if (!d || d.length < 25 || d.length > 90) return false;
    try {
      return tt.address.toOutputScript(d, tt.networks.bitcoin), true;
    } catch {
      return false;
    }
  };
  $v = (n) => {
    const d = n.padStart(64, "0"), c = ne.from(d, "hex"), f = nn.fromPrivateKey(c, {
      compressed: true
    }), { address: _ } = tt.payments.p2pkh({
      pubkey: ne.from(f.publicKey),
      network: tt.networks.bitcoin
    });
    return _;
  };
  DS = () => {
    var _a;
    if (typeof window == "object" && ((_a = window.crypto) == null ? void 0 : _a.getRandomValues)) {
      const n = new Uint8Array(32);
      window.crypto.getRandomValues(n);
      let d = "";
      for (let c = 0; c < n.length; c++) d += n[c].toString(16).padStart(2, "0");
      return d;
    }
    throw new Error("Secure Web Crypto API is required");
  };
  HS = (n, d) => {
    const c = BigInt("0x" + n), _ = BigInt("0x" + d) - c + 1n;
    if (_ <= 0n) return c.toString(16);
    const l = DS(), u = BigInt("0x" + l);
    return (c + u % _).toString(16);
  };
  YS = async (n, d, c = 5e4, f) => {
    let _ = BigInt("0x" + n);
    const l = f ? BigInt("0x" + f) : null;
    for (let u = 0; u < c && !(l !== null && _ > l); u++) {
      if ($v(_.toString(16)) === d) return {
        success: true,
        privateKey: _
      };
      _++;
    }
    return {
      success: false,
      address: ""
    };
  };
  QS = (n) => nn.fromPrivateKey(ne.from(n.padStart(64, "0"), "hex")).toWIF();
  JS = (n, d, c, f = 1e3) => {
    let _ = "";
    for (let l = 0; l < f; l++) {
      const u = HS(d, c);
      if (_ = u, $v(u) === n) return {
        success: true,
        privateKey: BigInt("0x" + u),
        triedKey: u
      };
    }
    return {
      success: false,
      triedKey: _
    };
  };
  ZS = (n) => {
    const d = n.trim();
    let c;
    if (/^[5KL][1-9A-HJ-NP-Za-km-z]{50,51}$/.test(d)) c = nn.fromWIF(d, tt.networks.bitcoin);
    else if (/^[0-9a-fA-F]{1,64}$/.test(d)) c = nn.fromPrivateKey(ne.from(d.padStart(64, "0"), "hex"), {
      compressed: true
    });
    else throw new Error("Invalid WIF or HEX private key format");
    const { address: f } = tt.payments.p2pkh({
      pubkey: ne.from(c.publicKey),
      network: tt.networks.bitcoin
    });
    return {
      address: f,
      pubkeyHex: ne.from(c.publicKey).toString("hex")
    };
  };
  $S = (n) => {
    const { txid: d, vout: c, amountSatoshis: f, spendSatoshis: _, destAddress: l, feeSatoshis: u, privateKey: o, changeAddress: s } = n, g = tt.networks.bitcoin, a = o.trim();
    let E;
    if (/^[5KL][1-9A-HJ-NP-Za-km-z]{50,51}$/.test(a)) E = nn.fromWIF(a, g);
    else if (/^[0-9a-fA-F]{1,64}$/.test(a)) E = nn.fromPrivateKey(ne.from(a.padStart(64, "0"), "hex"), {
      compressed: true
    });
    else throw new Error("Invalid private key format");
    if (!Number.isInteger(f) || !Number.isInteger(_) || !Number.isInteger(u) || f <= 0 || _ <= 0 || u <= 0) throw new Error("Amounts must be positive integer satoshi values");
    if (u > Qm) throw new Error(`Fee ${u} sats exceeds the safety ceiling of ${Qm} sats`);
    const v = f - _ - u;
    if (v < 0) throw new Error("Insufficient UTXO amount for spend + fee");
    if (_ < 546) throw new Error("Destination amount is dust (below 546 satoshis)");
    const w = new tt.Transaction();
    w.version = 2;
    const S = ne.from(d, "hex").reverse();
    w.addInput(S, c, 4294967294);
    const p = tt.address.toOutputScript(l, g);
    if (w.addOutput(p, _), v >= 546 && s) {
      const U = tt.address.toOutputScript(s, g);
      w.addOutput(U, v);
    }
    const A = tt.payments.p2pkh({
      pubkey: ne.from(E.publicKey),
      network: g
    }), x = w.hashForSignature(0, A.output, tt.Transaction.SIGHASH_ALL), k = E.sign(x), B = tt.script.signature.encode(ne.from(k), tt.Transaction.SIGHASH_ALL), O = tt.payments.p2pkh({
      pubkey: ne.from(E.publicKey),
      signature: B,
      network: g
    }).input;
    return w.setInputScript(0, O), w.toHex();
  };
  qS = function(n) {
    try {
      const d = n.trim().replace(/^0x/i, "");
      if (!d || !/^[0-9a-fA-F]{1,64}$/.test(d)) return null;
      const c = d.padStart(64, "0").toLowerCase(), f = ne.from(c, "hex");
      if (!Zv(f)) return null;
      const _ = nn.fromPrivateKey(f, {
        compressed: true,
        network: tt.networks.bitcoin
      }), l = nn.fromPrivateKey(f, {
        compressed: false,
        network: tt.networks.bitcoin
      }), u = _.toWIF(), o = ne.from(_.publicKey), s = tt.crypto.sha256(o), g = tt.crypto.ripemd160(s), { address: a } = tt.payments.p2pkh({
        pubkey: o,
        network: tt.networks.bitcoin
      });
      return {
        privateKeyHex: c,
        wif: u,
        publicKeyHexUncompressed: ne.from(l.publicKey).toString("hex"),
        publicKeyHexCompressed: o.toString("hex"),
        sha256Pubkey: ne.from(s).toString("hex"),
        hash160: ne.from(g).toString("hex"),
        addressLegacy: a || ""
      };
    } catch {
      return null;
    }
  };
  eb = function(n) {
    try {
      const d = n.trim();
      if (!/^[5KL][1-9A-HJ-NP-Za-km-z]{50,51}$/.test(d)) return null;
      const c = nn.fromWIF(d, tt.networks.bitcoin);
      return c.privateKey ? qS(ne.from(c.privateKey).toString("hex")) : null;
    } catch {
      return null;
    }
  };
  tb = function(n) {
    try {
      const d = n.trim().replace(/^0x/i, "").toLowerCase();
      if (!/^(02|03)[0-9a-f]{64}$/.test(d) && !/^04[0-9a-f]{128}$/.test(d)) return null;
      const c = ne.from(d, "hex");
      if (!Qv(c)) return null;
      const f = ne.from(Zc(c, true)), _ = ne.from(Zc(c, false)), l = tt.crypto.sha256(f), u = tt.crypto.ripemd160(l), { address: o } = tt.payments.p2pkh({
        pubkey: f,
        network: tt.networks.bitcoin
      });
      return {
        privateKeyHex: "?",
        wif: "?",
        publicKeyHexUncompressed: _.toString("hex"),
        publicKeyHexCompressed: f.toString("hex"),
        sha256Pubkey: ne.from(l).toString("hex"),
        hash160: ne.from(u).toString("hex"),
        addressLegacy: o || ""
      };
    } catch {
      return null;
    }
  };
  rb = function(n) {
    try {
      const d = n.trim().replace(/^0x/i, "").toLowerCase();
      if (!/^[0-9a-f]{64}$/.test(d)) return null;
      const c = ne.from(d, "hex"), f = tt.crypto.ripemd160(c), { address: _ } = tt.payments.p2pkh({
        hash: f,
        network: tt.networks.bitcoin
      });
      return {
        privateKeyHex: "?",
        wif: "?",
        publicKeyHexUncompressed: "?",
        publicKeyHexCompressed: "?",
        sha256Pubkey: d,
        hash160: ne.from(f).toString("hex"),
        addressLegacy: _ || ""
      };
    } catch {
      return null;
    }
  };
  nb = function(n) {
    try {
      const d = n.trim().replace(/^0x/i, "").toLowerCase();
      if (!/^[0-9a-f]{40}$/.test(d)) return null;
      const c = ne.from(d, "hex"), { address: f } = tt.payments.p2pkh({
        hash: c,
        network: tt.networks.bitcoin
      });
      return {
        privateKeyHex: "?",
        wif: "?",
        publicKeyHexUncompressed: "?",
        publicKeyHexCompressed: "?",
        sha256Pubkey: "?",
        hash160: d,
        addressLegacy: f || ""
      };
    } catch {
      return null;
    }
  };
  ib = function(n) {
    try {
      const d = n.trim(), c = tt.address.fromBase58Check(d);
      return c.version !== tt.networks.bitcoin.pubKeyHash ? null : {
        privateKeyHex: "?",
        wif: "?",
        publicKeyHexUncompressed: "?",
        publicKeyHexCompressed: "?",
        sha256Pubkey: "?",
        hash160: ne.from(c.hash).toString("hex"),
        addressLegacy: d
      };
    } catch {
      return null;
    }
  };
  ob = {
    title: "Bitcoin Lottery",
    "roll-btn": "Roll a ticket",
    "puzzle-state-success-title": "YOU FOUND THE KEEY!!!!",
    puzzleInfoParts: {
      before71: "The difficulty grows with the puzzle number \u2014 ",
      bold71: "#71 starts with ~2.3 quintillion possible keys",
      middle: " and reaches ",
      bold74: "~18.4 quintillion on #74",
      after: ". Pure luck, but someone will find it."
    },
    "btn-education": "\u{1F4D6} What is the puzzle and precautions \u2192",
    "btn-anatomy": "\u{1F9EC} Bitcoin Key Anatomy (Interactive) \u2192",
    "btn-txb": "\u26A1 Build Tx for MARA Slipstream \u2192",
    footer: "Bitcoin Lottery \xB7 Open-source \xB7 100% browser-based \xB7 No servers \xB7 No tracking",
    txb: {
      back: "\u2190 Back",
      title: "Transaction Builder",
      subtitle: "Build a signed raw transaction to broadcast privately via MARA Slipstream \u2014 without exposing your key to the public mempool.",
      step1: "Private Key",
      step1Hint: "Paste the WIF or HEX private key you found in the lottery.",
      step1Input: "WIF (5... / K... / L...) or HEX (64 chars)",
      step2: "Destination & Amount",
      autoFetch: "Auto-fetching UTXOs for",
      loadingUtxos: "Loading UTXOs...",
      txidLabel: "Transaction ID (TxID)",
      txidPlaceholder: "64-character hex txid",
      amountBtcLabel: "Send Amount (BTC)",
      amountBtcPlaceholder: "Amount to send",
      amountBtcTitle: "The exact amount you want the destination address to receive",
      sendToLabel: "Send to",
      sendToPlaceholder: "bc1q... or 1... or 3...",
      step3: "Transaction Fee",
      step3HintPrefix: "MARA Slipstream minimum = ",
      step3HintBold: "2\xD7 current priority fee or 2 sat/vB",
      step3HintSuffix: ", whichever is higher.",
      customFeeLabel: "Custom fee rate (sat/vB)",
      maraMinReq: "Min: {0} sat/vB (MARA Slipstream requirement)",
      feeMin: "Normal \u26CF",
      fee2x: "2X \u26A1",
      fee3x: "3X \u{1F680}",
      subMaraMin: "MARA min",
      sub2xMaraMin: "2\xD7 MARA min",
      sub3xMaraMin: "3\xD7 MARA min",
      summaryTotalIn: "Total UTXO Input",
      summaryFee: "Estimated Miner Fee",
      summarySent: "Sent to Destination",
      summaryChange: "Change (Back to you)",
      generateBtn: "\u{1F511} Generate Signed Raw Transaction",
      errPrivKey: "Enter a private key.",
      errTxid: "Enter a valid 64-character TXID.",
      errVout: "Enter a valid VOUT (\u2265 0).",
      errAmount: "Enter a valid UTXO amount in sats (\u2265 0).",
      errSendAmount: "Enter a valid amount to send (BTC).",
      errDest: "Enter a valid destination Bitcoin address.",
      errAmountTooLow: "Send amount is too low.",
      errAmountMismatch: "UTXO total was changed and no longer matches the value fetched from mempool.space. Re-select the UTXO.",
      errFeeTooHigh: "Fee of {0} sats looks wrong (above {1} sat/vB or more than 10% of the input). Lower the fee rate to avoid losing funds to miners.",
      utxoTotalLockedTitle: "Locked to the value fetched from mempool.space. Any other value would be paid to miners as fee.",
      errInsufficient: "Insufficient funds. UTXO amount ({0} sats) cannot cover send amount ({1} sats) + fee ({2} sats). Change would be {3} sats.",
      outputTitle: "\u2705 Signed Raw Transaction (Hex)",
      copy: "Copy",
      copied: "\u2713 Copied!",
      nextStepsTitle: "Next Steps:",
      stepCopyPrefix: "Click ",
      stepCopyBold: "Copy",
      stepCopySuffix: " to save your Raw Transaction HEX.",
      stepOpenPrefix: "Click the button below to open ",
      stepOpenBold: "MARA Slipstream",
      stepOpenSuffix: ".",
      stepPastePrefix: "Paste your hex into their form and click ",
      stepPasteBold: "Submit",
      stepPasteSuffix: "!",
      openMaraBtn: "\u26CF Open Website to submit manually \u2192",
      deriveErrorInvalid: "Invalid private key: ",
      deriveLabelAddr: "Derived address",
      deriveLabelPub: "Public key",
      deriveNote: "\u2705 Confirm this matches the puzzle address you found the key for.",
      utxoHintEnterKey: "Enter your private key above to auto-load the UTXO.",
      utxoErrNoBalance: "No UTXOs found \u2014 this address has no unspent balance. Double-check the private key.",
      utxoErrNetwork: "Could not fetch UTXOs from mempool.space \u2014 check your internet connection.",
      checkMempool: "Check on mempool.space",
      utxoListSelect: "Select which UTXO to spend",
      utxoConfirmed: "\u2705 Confirmed (block {0})",
      utxoUnconfirmed: "\u23F3 Unconfirmed",
      utxoAutoFilled: "\u2705 UTXO auto-filled: ",
      utxoAutoWait: "\u23F3 Unconfirmed \u2014 wait for confirmation before spending",
      utxoTotalBtcLabel: "UTXO Total (BTC)",
      utxoTotalBtcTitle: "The total value of the unspent output you are claiming",
      destHint: "A fresh wallet address you control. Use a cold wallet \u2014 NOT an exchange address.",
      feeNote: "A P2PKH tx is ~{0} bytes.",
      errUnknown: "Unknown error building transaction.",
      satoshis: "satoshis"
    },
    anatomy: {
      back: "\u2190 Back to Bitcoin Lottery",
      title: "Bitcoin Key Anatomy",
      subtitle: "Discover the mathematical journey from a random 256-bit number to a public Bitcoin address. Edit any stage below and watch how one-way cryptography and reversible encodings behave in real time.",
      presetsLabel: "Didactic Examples:",
      presetKey1: "Key #1 (Genesis Test)",
      presetKey2: "Key #2",
      presetPuzzle20: "Puzzle #20 (Solved)",
      presetPuzzle71Addr: "Puzzle #71 (Address Only)",
      presetRandom: "\u{1F3B2} Random 256-bit Key",
      privTitle: "1. Private Key (Hexadecimal \u2014 256 bits)",
      privDesc: "Your fundamental secret: a 256-bit integer between 1 and n \u2212 1 on the SECP256k1 curve. Reversible with WIF.",
      privPlaceholder: "Enter 1 to 64 hex characters...",
      wifTitle: "2. Wallet Import Format (WIF)",
      wifDesc: "Base58Check encoding of the private key (prefix 0x80 + 32-byte key + 0x01 compressed flag + 4-byte checksum). Reversible: editing WIF recovers the exact hex private key.",
      wifPlaceholder: "Enter WIF key (K..., L..., or 5...)...",
      curveTitle: "SECP256k1 Elliptic Curve",
      curveFormula: "y\xB2 = x\xB3 + 7 (mod p)",
      curveCalculating: "calculating P = k \xD7 G...",
      curvePointLabel: "P = k \xD7 G (Public Key)",
      curveGeneratorLabel: "G (Generator)",
      pubTitle: "3. Public Key (Compressed \u2014 33 bytes)",
      pubDesc: "Derived via Elliptic Curve scalar multiplication (P = k \xD7 G). This is a cryptographic trapdoor: easy to compute from k, but mathematically infeasible to reverse (ECDLP).",
      pubPlaceholder: "66 hex chars starting with 02 or 03...",
      shaTitle: "4. SHA-256 Hash (32 bytes)",
      shaDesc: "First one-way hash applied to the compressed public key bytes. Protects the public key from being exposed on-chain until funds are spent.",
      shaPlaceholder: "64 hex characters...",
      hash160Title: "5. RIPEMD-160 / Hash160 (20 bytes)",
      hash160Desc: "The SHA-256 digest is hashed with RIPEMD-160 to produce a compact 160-bit fingerprint. Reversible with the final Legacy address via Base58Check!",
      hash160Placeholder: "40 hex characters...",
      addrTitle: "6. Final Bitcoin Address (Legacy P2PKH)",
      addrDesc: "Base58Check encoding of version byte 0x00 + Hash160 + 4-byte Double-SHA256 checksum. Decoding an address reveals its Hash160, but NEVER its Public Key or Private Key!",
      addrPlaceholder: "Enter Legacy Bitcoin address (1...)...",
      irreversibleMath: "? (Irreversible: protected by SECP256k1 discrete logarithm)",
      irreversibleHash: "? (Irreversible: protected by one-way cryptographic hash)",
      invalidInput: "Invalid format for the selected stage. Check the length and characters.",
      mempoolBalance: "Mempool On-Chain Balance:",
      fetchingBalance: "Fetching...",
      balanceError: "Offline / Unable to fetch balance",
      balanceCheckBtn: "Check balance",
      balanceNotice: "Checking sends this ADDRESS (never the key) to mempool.space. Do not check real wallets you want to keep private.",
      securityCalloutTitle: "\u{1F6E1}\uFE0F Why does this matter for the Bitcoin Puzzles?",
      securityCalloutBody: "Notice that when you paste Puzzle #71's address (1PWo3JeB...), you can immediately decode its Hash160 (Step 5), but Step 3 (Public Key) remains hidden behind RIPEMD-160 and SHA-256! The moment you broadcast a transaction to the public mempool, your signature reveals Step 3 (Public Key), allowing Pollard's Kangaroo bots to attack the reduced range. That is why you must use MARA Slipstream to claim puzzle rewards privately.",
      footer: "Bitcoin Lottery \xB7 Key Anatomy Lab \xB7 100% browser-based \xB7 No servers \xB7 No tracking"
    }
  };
  ab = {
    title: "Loteria do Bitcoin",
    "roll-btn": "Tentar a sorte",
    "puzzle-state-success-title": "ACHOU A CHAAVE!!!!",
    puzzleInfoParts: {
      before71: "A dificuldade cresce com o n\xFAmero do puzzle \u2014 ",
      bold71: "o #71 come\xE7a com ~2,3 quintilh\xF5es de chaves poss\xEDveis",
      middle: " e chega a ",
      bold74: "~18,4 quintilh\xF5es no #74",
      after: ". Pura sorte, mas algu\xE9m vai encontrar."
    },
    "btn-education": "\u{1F4D6} O que \xE9 o puzzle e precau\xE7\xF5es \u2192",
    "btn-anatomy": "\u{1F9EC} Anatomia da Chave Bitcoin (Interativo) \u2192",
    "btn-txb": "\u26A1 Construir Tx para MARA Slipstream \u2192",
    footer: "Loteria Bitcoin \xB7 C\xF3digo Aberto \xB7 100% no navegador \xB7 Sem servidores \xB7 Sem rastreamento",
    txb: {
      back: "\u2190 Voltar",
      title: "Construtor de Transa\xE7\xE3o Bruta",
      subtitle: "Crie uma transa\xE7\xE3o crua assinada para transmitir de forma privada via MARA Slipstream, sem expor sua chave \xE0 mempool p\xFAblica.",
      step1: "Chave Privada",
      step1Hint: "Cole a chave privada (WIF ou HEX) que voc\xEA encontrou na loteria.",
      step1Input: "WIF (5... / K... / L...) ou HEX (64 caracteres)",
      step2: "Destino e Quantidade",
      autoFetch: "Buscando UTXOs automaticamente para",
      loadingUtxos: "Carregando UTXOs...",
      txidLabel: "ID da Transa\xE7\xE3o (TxID)",
      txidPlaceholder: "Txid hexadecimal de 64 caracteres",
      amountBtcLabel: "Enviar (BTC)",
      amountBtcPlaceholder: "Quantidade para enviar",
      amountBtcTitle: "A quantidade exata que voc\xEA deseja que o endere\xE7o de destino receba",
      sendToLabel: "Enviar para",
      sendToPlaceholder: "bc1q... ou 1... ou 3...",
      step3: "Taxa de Transa\xE7\xE3o",
      step3HintPrefix: "M\xEDnimo do MARA Slipstream = ",
      step3HintBold: "2\xD7 taxa de prioridade atual ou 2 sat/vB",
      step3HintSuffix: ", o que for maior.",
      customFeeLabel: "Taxa personalizada (sat/vB)",
      maraMinReq: "Min: {0} sat/vB (Requisito MARA Slipstream)",
      feeMin: "Normal \u26CF",
      fee2x: "2X \u26A1",
      fee3x: "3X \u{1F680}",
      subMaraMin: "MARA m\xEDn",
      sub2xMaraMin: "2\xD7 MARA m\xEDn",
      sub3xMaraMin: "3\xD7 MARA m\xEDn",
      summaryTotalIn: "Entrada Total (UTXO)",
      summaryFee: "Taxa Estimada do Minerador",
      summarySent: "Enviado para o Destino",
      summaryChange: "Troco (De volta para voc\xEA)",
      generateBtn: "\u{1F511} Gerar Transa\xE7\xE3o Crua Assinada",
      errPrivKey: "Insira uma chave privada.",
      errTxid: "Insira um TXID v\xE1lido de 64 caracteres.",
      errVout: "Insira um VOUT v\xE1lido (\u2265 0).",
      errAmount: "Insira um valor de UTXO v\xE1lido em sats (\u2265 0).",
      errSendAmount: "Insira uma quantidade v\xE1lida para enviar (BTC).",
      errDest: "Insira um endere\xE7o Bitcoin de destino v\xE1lido.",
      errAmountTooLow: "A quantidade a enviar \xE9 muito baixa.",
      errAmountMismatch: "O total do UTXO foi alterado e n\xE3o bate mais com o valor consultado no mempool.space. Selecione o UTXO novamente.",
      errFeeTooHigh: "A taxa de {0} sats parece errada (acima de {1} sat/vB ou mais de 10% do valor de entrada). Reduza a taxa para n\xE3o perder fundos para os mineradores.",
      utxoTotalLockedTitle: "Travado no valor consultado no mempool.space. Qualquer outro valor seria pago aos mineradores como taxa.",
      errInsufficient: "Fundos insuficientes. O valor do UTXO ({0} sats) n\xE3o cobre a quantia a enviar ({1} sats) + taxa ({2} sats). Faltam {3} sats.",
      outputTitle: "\u2705 Transa\xE7\xE3o Crua Assinada (Hex)",
      copy: "Copiar",
      copied: "\u2713 Copiado!",
      nextStepsTitle: "Pr\xF3ximos Passos:",
      stepCopyPrefix: "Clique em ",
      stepCopyBold: "Copiar",
      stepCopySuffix: " para salvar sua transa\xE7\xE3o hexadecimal.",
      stepOpenPrefix: "Clique no bot\xE3o abaixo para abrir o ",
      stepOpenBold: "MARA Slipstream",
      stepOpenSuffix: ".",
      stepPastePrefix: "Cole seu hex no formul\xE1rio deles e clique em ",
      stepPasteBold: "Submit",
      stepPasteSuffix: "!",
      openMaraBtn: "\u26CF Abrir Site para enviar manualmente \u2192",
      deriveErrorInvalid: "Chave privada inv\xE1lida: ",
      deriveLabelAddr: "Endere\xE7o derivado",
      deriveLabelPub: "Chave p\xFAblica",
      deriveNote: "\u2705 Confirme que isso corresponde ao endere\xE7o do puzzle para o qual voc\xEA encontrou a chave.",
      utxoHintEnterKey: "Insira sua chave privada acima para carregar automaticamente o UTXO.",
      utxoErrNoBalance: "Nenhum UTXO encontrado \u2014 este endere\xE7o n\xE3o tem saldo sem gastar. Verifique a chave privada.",
      utxoErrNetwork: "N\xE3o foi poss\xEDvel obter UTXOs do mempool.space \u2014 verifique sua conex\xE3o com a internet.",
      checkMempool: "Verificar no mempool.space",
      utxoListSelect: "Selecione qual UTXO gastar",
      utxoConfirmed: "\u2705 Confirmado (bloco {0})",
      utxoUnconfirmed: "\u23F3 N\xE3o confirmado",
      utxoAutoFilled: "\u2705 UTXO preenchido: ",
      utxoAutoWait: "\u23F3 N\xE3o confirmado \u2014 aguarde a confirma\xE7\xE3o antes de gastar",
      utxoTotalBtcLabel: "UTXO Total (BTC)",
      utxoTotalBtcTitle: "O valor total da sa\xEDda n\xE3o gasta que voc\xEA est\xE1 reivindicando",
      destHint: "Um endere\xE7o de carteira novo que voc\xEA controla. Use uma carteira fria \u2014 N\xC3O um endere\xE7o de corretora.",
      feeNote: "Uma tx P2PKH tem ~{0} bytes.",
      errUnknown: "Erro desconhecido ao construir a transa\xE7\xE3o.",
      satoshis: "satoshis"
    },
    anatomy: {
      back: "\u2190 Voltar para a Loteria Bitcoin",
      title: "Anatomia da Chave Bitcoin",
      subtitle: "Descubra a jornada matem\xE1tica desde um n\xFAmero aleat\xF3rio de 256 bits at\xE9 um endere\xE7o p\xFAblico de Bitcoin. Edite qualquer etapa abaixo para ver na pr\xE1tica o que \xE9 revers\xEDvel e o que \xE9 protegido por criptografia unidirecional.",
      presetsLabel: "Exemplos Did\xE1ticos:",
      presetKey1: "Chave #1 (Teste G\xEAnesis)",
      presetKey2: "Chave #2",
      presetPuzzle20: "Puzzle #20 (Resolvido)",
      presetPuzzle71Addr: "Puzzle #71 (Apenas Endere\xE7o)",
      presetRandom: "\u{1F3B2} Chave Aleat\xF3ria (256 bits)",
      privTitle: "1. Chave Privada (Hexadecimal \u2014 256 bits)",
      privDesc: "O seu segredo fundamental: um n\xFAmero inteiro de 256 bits entre 1 e n \u2212 1 na curva SECP256k1. Totalmente revers\xEDvel com o formato WIF.",
      privPlaceholder: "Digite de 1 a 64 caracteres hexadecimais...",
      wifTitle: "2. Wallet Import Format (WIF)",
      wifDesc: "Codifica\xE7\xE3o Base58Check da chave privada (prefixo 0x80 + 32 bytes + sufixo 0x01 comprimido + checksum de 4 bytes). Revers\xEDvel: editar o WIF recupera a chave privada em hex.",
      wifPlaceholder: "Cole uma chave WIF (K..., L... ou 5...)...",
      curveTitle: "Curva El\xEDptica SECP256k1",
      curveFormula: "y\xB2 = x\xB3 + 7 (mod p)",
      curveCalculating: "calculando P = k \xD7 G...",
      curvePointLabel: "P = k \xD7 G (Chave P\xFAblica)",
      curveGeneratorLabel: "G (Gerador)",
      pubTitle: "3. Chave P\xFAblica (Comprimida \u2014 33 bytes)",
      pubDesc: "Gerada pela multiplica\xE7\xE3o escalar na Curva El\xEDptica (P = k \xD7 G). \xC9 uma fun\xE7\xE3o al\xE7ap\xE3o: f\xE1cil de calcular a partir de k, mas matematicamente imposs\xEDvel de reverter (ECDLP).",
      pubPlaceholder: "66 caracteres hex come\xE7ando com 02 ou 03...",
      shaTitle: "4. Hash SHA-256 (32 bytes)",
      shaDesc: "Primeiro hash unidirecional aplicado sobre a chave p\xFAblica comprimida. Protege a chave p\xFAblica de ficar exposta na blockchain enquanto o saldo n\xE3o \xE9 movimentado.",
      shaPlaceholder: "64 caracteres hexadecimais...",
      hash160Title: "5. RIPEMD-160 / Hash160 (20 bytes)",
      hash160Desc: "O resultado do SHA-256 passa pelo RIPEMD-160 gerando uma impress\xE3o digital curta de 160 bits. Revers\xEDvel com o endere\xE7o Legacy final via Base58Check!",
      hash160Placeholder: "40 caracteres hexadecimais...",
      addrTitle: "6. Endere\xE7o Bitcoin Final (Legacy P2PKH)",
      addrDesc: "Codifica\xE7\xE3o Base58Check do byte de rede 0x00 + Hash160 + checksum (Duplo SHA-256 de 4 bytes). Decodificar um endere\xE7o revela seu Hash160, mas NUNCA sua Chave P\xFAblica ou Privada!",
      addrPlaceholder: "Digite um endere\xE7o Bitcoin Legacy (1...)...",
      irreversibleMath: "? (Irrevers\xEDvel: protegido pelo logaritmo discreto SECP256k1)",
      irreversibleHash: "? (Irrevers\xEDvel: protegido por hash criptogr\xE1fico unidirecional)",
      invalidInput: "Formato inv\xE1lido para esta etapa. Verifique o tamanho e os caracteres.",
      mempoolBalance: "Saldo On-Chain (Mempool):",
      fetchingBalance: "Consultando...",
      balanceError: "Offline / Erro ao consultar saldo",
      balanceCheckBtn: "Consultar saldo",
      balanceNotice: "A consulta envia este ENDERE\xC7O (nunca a chave) ao mempool.space. N\xE3o consulte carteiras reais que voc\xEA queira manter privadas.",
      securityCalloutTitle: "\u{1F6E1}\uFE0F Por que isso \xE9 vital nos Bitcoin Puzzles?",
      securityCalloutBody: "Repare que ao clicar no exemplo 'Puzzle #71 (Apenas Endere\xE7o)', \xE9 poss\xEDvel extrair imediatamente o Hash160 (Etapa 5) a partir do endere\xE7o p\xFAblico, mas a Etapa 3 (Chave P\xFAblica) continua oculta pelos hashes RIPEMD-160 e SHA-256! No instante em que voc\xEA transmite uma transa\xE7\xE3o na mempool aberta, sua assinatura revela a Etapa 3 (Chave P\xFAblica), permitindo que bots usem o algoritmo Canguru de Pollard no intervalo conhecido. \xC9 por isso que o resgate deve ser feito de forma privada via MARA Slipstream.",
      footer: "Loteria Bitcoin \xB7 Laborat\xF3rio de Anatomia da Chave \xB7 100% no navegador \xB7 Sem servidores \xB7 Sem rastreamento"
    }
  };
  sb = {
    title: "Loter\xEDa Bitcoin",
    "roll-btn": "Probar suerte",
    "puzzle-state-success-title": "\xA1ENCONTRASTE LA CLAVE!!!!",
    puzzleInfoParts: {
      before71: "La dificultad crece con el n\xFAmero del puzzle \u2014 ",
      bold71: "el #71 comienza con ~2,3 quintillones de claves posibles",
      middle: " y llega a ",
      bold74: "~18,4 quintillones en el #74",
      after: ". Pura suerte, pero alguien lo va a encontrar."
    },
    "btn-education": "\u{1F4D6} Qu\xE9 es el puzzle y precauciones \u2192",
    "btn-anatomy": "\u{1F9EC} Anatom\xEDa de la Clave Bitcoin (Interactivo) \u2192",
    "btn-txb": "\u26A1 Construir Tx para MARA Slipstream \u2192",
    footer: "Loter\xEDa Bitcoin \xB7 C\xF3digo Abierto \xB7 100% en el navegador \xB7 Sin servidores \xB7 Sin rastreo",
    txb: {
      back: "\u2190 Volver",
      title: "Constructor de Transacciones Brutas",
      subtitle: "Crea una transacci\xF3n cruda firmada para transmitir de forma privada por MARA Slipstream, sin exponer tu clave a la mempool p\xFAblica.",
      step1: "Clave Privada",
      step1Hint: "Pega la clave privada (WIF o HEX) que encontraste en la loter\xEDa.",
      step1Input: "WIF (5... / K... / L...) o HEX (64 caracteres)",
      step2: "Destino y Monto",
      autoFetch: "Buscando UTXOs autom\xE1ticamente para",
      loadingUtxos: "Cargando UTXOs...",
      txidLabel: "ID de Transacci\xF3n (TxID)",
      txidPlaceholder: "Txid hexadecimal de 64 caracteres",
      amountBtcLabel: "Monto a Enviar (BTC)",
      amountBtcPlaceholder: "Cantidad a enviar",
      amountBtcTitle: "La cantidad exacta que deseas que reciba la direcci\xF3n de destino",
      sendToLabel: "Enviar a",
      sendToPlaceholder: "bc1q... o 1... o 3...",
      step3: "Tarifa de Transacci\xF3n",
      step3HintPrefix: "MARA Slipstream m\xEDnimo = ",
      step3HintBold: "2\xD7 la tasa de prioridad actual o 2 sat/vB",
      step3HintSuffix: ", lo que sea mayor.",
      customFeeLabel: "Tasa personalizada (sat/vB)",
      maraMinReq: "M\xEDnimo: {0} sat/vB (Requisito de MARA Slipstream)",
      feeMin: "Normal \u26CF",
      fee2x: "2X \u26A1",
      fee3x: "3X \u{1F680}",
      subMaraMin: "MARA m\xEDn",
      sub2xMaraMin: "2\xD7 MARA m\xEDn",
      sub3xMaraMin: "3\xD7 MARA m\xEDn",
      summaryTotalIn: "Entrada Total (UTXO)",
      summaryFee: "Tarifa Estimada de Minero",
      summarySent: "Enviado al Destino",
      summaryChange: "Cambio (De vuelta a ti)",
      generateBtn: "\u{1F511} Generar Transacci\xF3n Cruda Firmada",
      errPrivKey: "Ingresa una clave privada.",
      errTxid: "Ingresa un TXID v\xE1lido de 64 caracteres.",
      errVout: "Ingresa un VOUT v\xE1lido (\u2265 0).",
      errAmount: "Ingresa un monto de UTXO v\xE1lido en sats (\u2265 0).",
      errSendAmount: "Ingresa una cantidad v\xE1lida para enviar (BTC).",
      errDest: "Ingresa una direcci\xF3n Bitcoin de destino v\xE1lida.",
      errAmountTooLow: "El monto a enviar es demasiado bajo.",
      errAmountMismatch: "El total del UTXO fue modificado y ya no coincide con el valor consultado en mempool.space. Vuelve a seleccionar el UTXO.",
      errFeeTooHigh: "La tarifa de {0} sats parece incorrecta (m\xE1s de {1} sat/vB o m\xE1s del 10% del monto de entrada). Reduce la tarifa para no perder fondos con los mineros.",
      utxoTotalLockedTitle: "Bloqueado en el valor consultado en mempool.space. Cualquier otro valor se pagar\xEDa a los mineros como tarifa.",
      errInsufficient: "Fondos insuficientes. El monto UTXO ({0} sats) no puede cubrir la cantidad a enviar ({1} sats) + tarifa ({2} sats). Faltan {3} sats.",
      outputTitle: "\u2705 Transacci\xF3n Cruda Firmada (Hex)",
      copy: "Copiar",
      copied: "\u2713 \xA1Copiado!",
      nextStepsTitle: "Pr\xF3ximos Pasos:",
      stepCopyPrefix: "Haz clic en ",
      stepCopyBold: "Copiar",
      stepCopySuffix: " para guardar tu transacci\xF3n hexadecimal.",
      stepOpenPrefix: "Haz clic en el bot\xF3n de abajo para abrir ",
      stepOpenBold: "MARA Slipstream",
      stepOpenSuffix: ".",
      stepPastePrefix: "Pega tu hex en su p\xE1gina y haz clic en ",
      stepPasteBold: "Submit",
      stepPasteSuffix: "!",
      openMaraBtn: "\u26CF Abrir Sitio Web para enviar manualmente \u2192",
      deriveErrorInvalid: "Clave privada inv\xE1lida: ",
      deriveLabelAddr: "Direcci\xF3n derivada",
      deriveLabelPub: "Clave p\xFAblica",
      deriveNote: "\u2705 Confirma que esto coincide con la direcci\xF3n del puzzle para la que encontraste la clave.",
      utxoHintEnterKey: "Ingresa tu clave privada arriba para auto-cargar el UTXO.",
      utxoErrNoBalance: "No se encontraron UTXOs \u2014 esta direcci\xF3n no tiene saldo sin gastar. Revisa la clave privada.",
      utxoErrNetwork: "No se pudieron obtener UTXOs de mempool.space \u2014 revisa tu conexi\xF3n a internet.",
      checkMempool: "Verificar en mempool.space",
      utxoListSelect: "Selecciona qu\xE9 UTXO gastar",
      utxoConfirmed: "\u2705 Confirmado (bloque {0})",
      utxoUnconfirmed: "\u23F3 Sin confirmar",
      utxoAutoFilled: "\u2705 UTXO auto-completado: ",
      utxoAutoWait: "\u23F3 Sin confirmar \u2014 espera confirmaci\xF3n antes de gastar",
      utxoTotalBtcLabel: "Total UTXO (BTC)",
      utxoTotalBtcTitle: "El valor total de la salida no gastada que est\xE1s reclamando",
      destHint: "Una direcci\xF3n de billetera nueva que controles. Usa una billetera fr\xEDa \u2014 NO una direcci\xF3n de intercambio.",
      feeNote: "Una tx P2PKH es de ~{0} bytes.",
      errUnknown: "Error desconocido al construir la transacci\xF3n.",
      satoshis: "satoshis"
    },
    anatomy: {
      back: "\u2190 Volver a la Loter\xEDa Bitcoin",
      title: "Anatom\xEDa de la Clave Bitcoin",
      subtitle: "Descubre el viaje matem\xE1tico desde un n\xFAmero aleatorio de 256 bits hasta una direcci\xF3n p\xFAblica de Bitcoin. Edita cualquier etapa abajo para ver en tiempo real qu\xE9 es reversible y qu\xE9 est\xE1 protegido por criptograf\xEDa unidireccional.",
      presetsLabel: "Ejemplos Did\xE1cticos:",
      presetKey1: "Clave #1 (Prueba G\xE9nesis)",
      presetKey2: "Clave #2",
      presetPuzzle20: "Puzzle #20 (Resuelto)",
      presetPuzzle71Addr: "Puzzle #71 (Solo Direcci\xF3n)",
      presetRandom: "\u{1F3B2} Clave Aleatoria (256 bits)",
      privTitle: "1. Clave Privada (Hexadecimal \u2014 256 bits)",
      privDesc: "Tu secreto fundamental: un entero de 256 bits entre 1 y n \u2212 1 en la curva SECP256k1. Totalmente reversible con el formato WIF.",
      privPlaceholder: "Ingresa de 1 a 64 caracteres hexadecimales...",
      wifTitle: "2. Wallet Import Format (WIF)",
      wifDesc: "Codificaci\xF3n Base58Check de la clave privada (prefijo 0x80 + 32 bytes + sufijo 0x01 comprimido + checksum de 4 bytes). Reversible: editar el WIF recupera la clave privada en hex.",
      wifPlaceholder: "Pega una clave WIF (K..., L... o 5...)...",
      curveTitle: "Curva El\xEDptica SECP256k1",
      curveFormula: "y\xB2 = x\xB3 + 7 (mod p)",
      curveCalculating: "calculando P = k \xD7 G...",
      curvePointLabel: "P = k \xD7 G (Clave P\xFAblica)",
      curveGeneratorLabel: "G (Generador)",
      pubTitle: "3. Clave P\xFAblica (Comprimida \u2014 33 bytes)",
      pubDesc: "Generada mediante multiplicaci\xF3n escalar en la Curva El\xEDptica (P = k \xD7 G). Es una funci\xF3n trampa: f\xE1cil de calcular desde k, pero matem\xE1ticamente imposible de revertir (ECDLP).",
      pubPlaceholder: "66 caracteres hex comenzando con 02 o 03...",
      shaTitle: "4. Hash SHA-256 (32 bytes)",
      shaDesc: "Primer hash unidireccional aplicado a la clave p\xFAblica comprimida. Protege la clave p\xFAblica de quedar expuesta en la blockchain mientras no se gasten los fondos.",
      shaPlaceholder: "64 caracteres hexadecimales...",
      hash160Title: "5. RIPEMD-160 / Hash160 (20 bytes)",
      hash160Desc: "El resultado de SHA-256 pasa por RIPEMD-160 generando una huella compacta de 160 bits. \xA1Reversible con la direcci\xF3n Legacy final v\xEDa Base58Check!",
      hash160Placeholder: "40 caracteres hexadecimales...",
      addrTitle: "6. Direcci\xF3n Bitcoin Final (Legacy P2PKH)",
      addrDesc: "Codificaci\xF3n Base58Check del byte de red 0x00 + Hash160 + checksum (Doble SHA-256 de 4 bytes). Decodificar una direcci\xF3n revela su Hash160, \xA1pero NUNCA su Clave P\xFAblica ni Privada!",
      addrPlaceholder: "Ingresa una direcci\xF3n Bitcoin Legacy (1...)...",
      irreversibleMath: "? (Irreversible: protegido por el logaritmo discreto SECP256k1)",
      irreversibleHash: "? (Irreversible: protegido por hash criptogr\xE1fico unidireccional)",
      invalidInput: "Formato inv\xE1lido para esta etapa. Revisa la longitud y los caracteres.",
      mempoolBalance: "Saldo On-Chain (Mempool):",
      fetchingBalance: "Consultando...",
      balanceError: "Offline / Error al consultar saldo",
      balanceCheckBtn: "Consultar saldo",
      balanceNotice: "La consulta env\xEDa esta DIRECCI\xD3N (nunca la clave) a mempool.space. No consultes billeteras reales que quieras mantener privadas.",
      securityCalloutTitle: "\u{1F6E1}\uFE0F \xBFPor qu\xE9 es vital esto en los Bitcoin Puzzles?",
      securityCalloutBody: "Observa que al elegir el ejemplo 'Puzzle #71 (Solo Direcci\xF3n)', puedes extraer inmediatamente el Hash160 (Etapa 5) de la direcci\xF3n p\xFAblica, \xA1pero la Etapa 3 (Clave P\xFAblica) sigue oculta tras RIPEMD-160 y SHA-256! En el instante en que transmites una transacci\xF3n a la mempool p\xFAblica, tu firma revela la Etapa 3 (Clave P\xFAblica), permitiendo que los bots usen el Canguro de Pollard en el rango conocido. Por eso debes reclamar los premios de forma privada v\xEDa MARA Slipstream.",
      footer: "Loter\xEDa Bitcoin \xB7 Laboratorio de Anatom\xEDa de la Clave \xB7 100% en el navegador \xB7 Sin servidores \xB7 Sin rastreo"
    }
  };
})();
export {
  KS as R,
  GS as S,
  __tla,
  HS as a,
  YS as b,
  ob as c,
  ZS as d,
  sb as e,
  JS as f,
  $S as g,
  $1 as h,
  XS as i,
  jS as j,
  qS as k,
  eb as l,
  tb as m,
  rb as n,
  nb as o,
  ab as p,
  ib as q,
  WS as r,
  DS as s,
  QS as t
};
