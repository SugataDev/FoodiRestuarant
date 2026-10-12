(function () {
  const j = document.createElement("link").relList;
  if (j && j.supports && j.supports("modulepreload")) return;
  for (const z of document.querySelectorAll('link[rel="modulepreload"]')) V(z);
  new MutationObserver((z) => {
    for (const T of z)
      if (T.type === "childList")
        for (const H of T.addedNodes)
          H.tagName === "LINK" && H.rel === "modulepreload" && V(H);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(z) {
    const T = {};
    return (
      z.integrity && (T.integrity = z.integrity),
      z.referrerPolicy && (T.referrerPolicy = z.referrerPolicy),
      z.crossOrigin === "use-credentials"
        ? (T.credentials = "include")
        : z.crossOrigin === "anonymous"
          ? (T.credentials = "omit")
          : (T.credentials = "same-origin"),
      T
    );
  }
  function V(z) {
    if (z.ep) return;
    z.ep = !0;
    const T = m(z);
    fetch(z.href, T);
  }
})();
function Fu(w) {
  return w && w.__esModule && Object.prototype.hasOwnProperty.call(w, "default")
    ? w.default
    : w;
}
var Ci = { exports: {} },
  xr = {},
  Ei = { exports: {} },
  W = {};
/**
 * @license React
 */ var Cu;
function Ld() {
  if (Cu) return W;
  Cu = 1;
  var w = Symbol.for("react.element"),
    j = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    V = Symbol.for("react.strict_mode"),
    z = Symbol.for("react.profiler"),
    T = Symbol.for("react.provider"),
    H = Symbol.for("react.context"),
    U = Symbol.for("react.forward_ref"),
    M = Symbol.for("react.suspense"),
    I = Symbol.for("react.memo"),
    q = Symbol.for("react.lazy"),
    B = Symbol.iterator;
  function $(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (B && c[B]) || c["@@iterator"]),
        typeof c == "function" ? c : null);
  }
  var X = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Q = Object.assign,
    K = {};
  function ee(c, v, L) {
    ((this.props = c),
      (this.context = v),
      (this.refs = K),
      (this.updater = L || X));
  }
  ((ee.prototype.isReactComponent = {}),
    (ee.prototype.setState = function (c, v) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, c, v, "setState");
    }),
    (ee.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    }));
  function Ve() {}
  Ve.prototype = ee.prototype;
  function Ze(c, v, L) {
    ((this.props = c),
      (this.context = v),
      (this.refs = K),
      (this.updater = L || X));
  }
  var He = (Ze.prototype = new Ve());
  ((He.constructor = Ze), Q(He, ee.prototype), (He.isPureReactComponent = !0));
  var we = Array.isArray,
    Fe = Object.prototype.hasOwnProperty,
    pe = { current: null },
    Ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Me(c, v, L) {
    var A,
      Y = {},
      Z = null,
      re = null;
    if (v != null)
      for (A in (v.ref !== void 0 && (re = v.ref),
      v.key !== void 0 && (Z = "" + v.key),
      v))
        Fe.call(v, A) && !Ee.hasOwnProperty(A) && (Y[A] = v[A]);
    var te = arguments.length - 2;
    if (te === 1) Y.children = L;
    else if (1 < te) {
      for (var ae = Array(te), Qe = 0; Qe < te; Qe++)
        ae[Qe] = arguments[Qe + 2];
      Y.children = ae;
    }
    if (c && c.defaultProps)
      for (A in ((te = c.defaultProps), te)) Y[A] === void 0 && (Y[A] = te[A]);
    return {
      $$typeof: w,
      type: c,
      key: Z,
      ref: re,
      props: Y,
      _owner: pe.current,
    };
  }
  function mt(c, v) {
    return {
      $$typeof: w,
      type: c.type,
      key: v,
      ref: c.ref,
      props: c.props,
      _owner: c._owner,
    };
  }
  function it(c) {
    return typeof c == "object" && c !== null && c.$$typeof === w;
  }
  function wt(c) {
    var v = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (L) {
        return v[L];
      })
    );
  }
  var Je = /\/+/g;
  function Le(c, v) {
    return typeof c == "object" && c !== null && c.key != null
      ? wt("" + c.key)
      : v.toString(36);
  }
  function We(c, v, L, A, Y) {
    var Z = typeof c;
    (Z === "undefined" || Z === "boolean") && (c = null);
    var re = !1;
    if (c === null) re = !0;
    else
      switch (Z) {
        case "string":
        case "number":
          re = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case w:
            case j:
              re = !0;
          }
      }
    if (re)
      return (
        (re = c),
        (Y = Y(re)),
        (c = A === "" ? "." + Le(re, 0) : A),
        we(Y)
          ? ((L = ""),
            c != null && (L = c.replace(Je, "$&/") + "/"),
            We(Y, v, L, "", function (Qe) {
              return Qe;
            }))
          : Y != null &&
            (it(Y) &&
              (Y = mt(
                Y,
                L +
                  (!Y.key || (re && re.key === Y.key)
                    ? ""
                    : ("" + Y.key).replace(Je, "$&/") + "/") +
                  c,
              )),
            v.push(Y)),
        1
      );
    if (((re = 0), (A = A === "" ? "." : A + ":"), we(c)))
      for (var te = 0; te < c.length; te++) {
        Z = c[te];
        var ae = A + Le(Z, te);
        re += We(Z, v, L, ae, Y);
      }
    else if (((ae = $(c)), typeof ae == "function"))
      for (c = ae.call(c), te = 0; !(Z = c.next()).done; )
        ((Z = Z.value), (ae = A + Le(Z, te++)), (re += We(Z, v, L, ae, Y)));
    else if (Z === "object")
      throw (
        (v = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (v === "[object Object]"
              ? "object with keys {" + Object.keys(c).join(", ") + "}"
              : v) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return re;
  }
  function be(c, v, L) {
    if (c == null) return c;
    var A = [],
      Y = 0;
    return (
      We(c, A, "", "", function (Z) {
        return v.call(L, Z, Y++);
      }),
      A
    );
  }
  function _e(c) {
    if (c._status === -1) {
      var v = c._result;
      ((v = v()),
        v.then(
          function (L) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 1), (c._result = L));
          },
          function (L) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 2), (c._result = L));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = v)));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var se = { current: null },
    N = { transition: null },
    F = {
      ReactCurrentDispatcher: se,
      ReactCurrentBatchConfig: N,
      ReactCurrentOwner: pe,
    };
  function x() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (W.Children = {
      map: be,
      forEach: function (c, v, L) {
        be(
          c,
          function () {
            v.apply(this, arguments);
          },
          L,
        );
      },
      count: function (c) {
        var v = 0;
        return (
          be(c, function () {
            v++;
          }),
          v
        );
      },
      toArray: function (c) {
        return (
          be(c, function (v) {
            return v;
          }) || []
        );
      },
      only: function (c) {
        if (!it(c))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return c;
      },
    }),
    (W.Component = ee),
    (W.Fragment = m),
    (W.Profiler = z),
    (W.PureComponent = Ze),
    (W.StrictMode = V),
    (W.Suspense = M),
    (W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
    (W.act = x),
    (W.cloneElement = function (c, v, L) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var A = Q({}, c.props),
        Y = c.key,
        Z = c.ref,
        re = c._owner;
      if (v != null) {
        if (
          (v.ref !== void 0 && ((Z = v.ref), (re = pe.current)),
          v.key !== void 0 && (Y = "" + v.key),
          c.type && c.type.defaultProps)
        )
          var te = c.type.defaultProps;
        for (ae in v)
          Fe.call(v, ae) &&
            !Ee.hasOwnProperty(ae) &&
            (A[ae] = v[ae] === void 0 && te !== void 0 ? te[ae] : v[ae]);
      }
      var ae = arguments.length - 2;
      if (ae === 1) A.children = L;
      else if (1 < ae) {
        te = Array(ae);
        for (var Qe = 0; Qe < ae; Qe++) te[Qe] = arguments[Qe + 2];
        A.children = te;
      }
      return {
        $$typeof: w,
        type: c.type,
        key: Y,
        ref: Z,
        props: A,
        _owner: re,
      };
    }),
    (W.createContext = function (c) {
      return (
        (c = {
          $$typeof: H,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: T, _context: c }),
        (c.Consumer = c)
      );
    }),
    (W.createElement = Me),
    (W.createFactory = function (c) {
      var v = Me.bind(null, c);
      return ((v.type = c), v);
    }),
    (W.createRef = function () {
      return { current: null };
    }),
    (W.forwardRef = function (c) {
      return { $$typeof: U, render: c };
    }),
    (W.isValidElement = it),
    (W.lazy = function (c) {
      return { $$typeof: q, _payload: { _status: -1, _result: c }, _init: _e };
    }),
    (W.memo = function (c, v) {
      return { $$typeof: I, type: c, compare: v === void 0 ? null : v };
    }),
    (W.startTransition = function (c) {
      var v = N.transition;
      N.transition = {};
      try {
        c();
      } finally {
        N.transition = v;
      }
    }),
    (W.unstable_act = x),
    (W.useCallback = function (c, v) {
      return se.current.useCallback(c, v);
    }),
    (W.useContext = function (c) {
      return se.current.useContext(c);
    }),
    (W.useDebugValue = function () {}),
    (W.useDeferredValue = function (c) {
      return se.current.useDeferredValue(c);
    }),
    (W.useEffect = function (c, v) {
      return se.current.useEffect(c, v);
    }),
    (W.useId = function () {
      return se.current.useId();
    }),
    (W.useImperativeHandle = function (c, v, L) {
      return se.current.useImperativeHandle(c, v, L);
    }),
    (W.useInsertionEffect = function (c, v) {
      return se.current.useInsertionEffect(c, v);
    }),
    (W.useLayoutEffect = function (c, v) {
      return se.current.useLayoutEffect(c, v);
    }),
    (W.useMemo = function (c, v) {
      return se.current.useMemo(c, v);
    }),
    (W.useReducer = function (c, v, L) {
      return se.current.useReducer(c, v, L);
    }),
    (W.useRef = function (c) {
      return se.current.useRef(c);
    }),
    (W.useState = function (c) {
      return se.current.useState(c);
    }),
    (W.useSyncExternalStore = function (c, v, L) {
      return se.current.useSyncExternalStore(c, v, L);
    }),
    (W.useTransition = function () {
      return se.current.useTransition();
    }),
    (W.version = "18.3.1"),
    W
  );
}
var Eu;
function Ti() {
  return (Eu || ((Eu = 1), (Ei.exports = Ld())), Ei.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _u;
function Dd() {
  if (_u) return xr;
  _u = 1;
  var w = Ti(),
    j = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    V = Object.prototype.hasOwnProperty,
    z = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function H(U, M, I) {
    var q,
      B = {},
      $ = null,
      X = null;
    (I !== void 0 && ($ = "" + I),
      M.key !== void 0 && ($ = "" + M.key),
      M.ref !== void 0 && (X = M.ref));
    for (q in M) V.call(M, q) && !T.hasOwnProperty(q) && (B[q] = M[q]);
    if (U && U.defaultProps)
      for (q in ((M = U.defaultProps), M)) B[q] === void 0 && (B[q] = M[q]);
    return {
      $$typeof: j,
      type: U,
      key: $,
      ref: X,
      props: B,
      _owner: z.current,
    };
  }
  return ((xr.Fragment = m), (xr.jsx = H), (xr.jsxs = H), xr);
}
var Pu;
function Od() {
  return (Pu || ((Pu = 1), (Ci.exports = Dd())), Ci.exports);
}
var s = Od(),
  ce = Ti();
const Fd = Fu(ce);
var zl = {},
  _i = { exports: {} },
  $e = {},
  Pi = { exports: {} },
  zi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zu;
function Md() {
  return (
    zu ||
      ((zu = 1),
      (function (w) {
        function j(N, F) {
          var x = N.length;
          N.push(F);
          e: for (; 0 < x; ) {
            var c = (x - 1) >>> 1,
              v = N[c];
            if (0 < z(v, F)) ((N[c] = F), (N[x] = v), (x = c));
            else break e;
          }
        }
        function m(N) {
          return N.length === 0 ? null : N[0];
        }
        function V(N) {
          if (N.length === 0) return null;
          var F = N[0],
            x = N.pop();
          if (x !== F) {
            N[0] = x;
            e: for (var c = 0, v = N.length, L = v >>> 1; c < L; ) {
              var A = 2 * (c + 1) - 1,
                Y = N[A],
                Z = A + 1,
                re = N[Z];
              if (0 > z(Y, x))
                Z < v && 0 > z(re, Y)
                  ? ((N[c] = re), (N[Z] = x), (c = Z))
                  : ((N[c] = Y), (N[A] = x), (c = A));
              else if (Z < v && 0 > z(re, x))
                ((N[c] = re), (N[Z] = x), (c = Z));
              else break e;
            }
          }
          return F;
        }
        function z(N, F) {
          var x = N.sortIndex - F.sortIndex;
          return x !== 0 ? x : N.id - F.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var T = performance;
          w.unstable_now = function () {
            return T.now();
          };
        } else {
          var H = Date,
            U = H.now();
          w.unstable_now = function () {
            return H.now() - U;
          };
        }
        var M = [],
          I = [],
          q = 1,
          B = null,
          $ = 3,
          X = !1,
          Q = !1,
          K = !1,
          ee = typeof setTimeout == "function" ? setTimeout : null,
          Ve = typeof clearTimeout == "function" ? clearTimeout : null,
          Ze = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function He(N) {
          for (var F = m(I); F !== null; ) {
            if (F.callback === null) V(I);
            else if (F.startTime <= N)
              (V(I), (F.sortIndex = F.expirationTime), j(M, F));
            else break;
            F = m(I);
          }
        }
        function we(N) {
          if (((K = !1), He(N), !Q))
            if (m(M) !== null) ((Q = !0), _e(Fe));
            else {
              var F = m(I);
              F !== null && se(we, F.startTime - N);
            }
        }
        function Fe(N, F) {
          ((Q = !1), K && ((K = !1), Ve(Me), (Me = -1)), (X = !0));
          var x = $;
          try {
            for (
              He(F), B = m(M);
              B !== null && (!(B.expirationTime > F) || (N && !wt()));
            ) {
              var c = B.callback;
              if (typeof c == "function") {
                ((B.callback = null), ($ = B.priorityLevel));
                var v = c(B.expirationTime <= F);
                ((F = w.unstable_now()),
                  typeof v == "function"
                    ? (B.callback = v)
                    : B === m(M) && V(M),
                  He(F));
              } else V(M);
              B = m(M);
            }
            if (B !== null) var L = !0;
            else {
              var A = m(I);
              (A !== null && se(we, A.startTime - F), (L = !1));
            }
            return L;
          } finally {
            ((B = null), ($ = x), (X = !1));
          }
        }
        var pe = !1,
          Ee = null,
          Me = -1,
          mt = 5,
          it = -1;
        function wt() {
          return !(w.unstable_now() - it < mt);
        }
        function Je() {
          if (Ee !== null) {
            var N = w.unstable_now();
            it = N;
            var F = !0;
            try {
              F = Ee(!0, N);
            } finally {
              F ? Le() : ((pe = !1), (Ee = null));
            }
          } else pe = !1;
        }
        var Le;
        if (typeof Ze == "function")
          Le = function () {
            Ze(Je);
          };
        else if (typeof MessageChannel < "u") {
          var We = new MessageChannel(),
            be = We.port2;
          ((We.port1.onmessage = Je),
            (Le = function () {
              be.postMessage(null);
            }));
        } else
          Le = function () {
            ee(Je, 0);
          };
        function _e(N) {
          ((Ee = N), pe || ((pe = !0), Le()));
        }
        function se(N, F) {
          Me = ee(function () {
            N(w.unstable_now());
          }, F);
        }
        ((w.unstable_IdlePriority = 5),
          (w.unstable_ImmediatePriority = 1),
          (w.unstable_LowPriority = 4),
          (w.unstable_NormalPriority = 3),
          (w.unstable_Profiling = null),
          (w.unstable_UserBlockingPriority = 2),
          (w.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (w.unstable_continueExecution = function () {
            Q || X || ((Q = !0), _e(Fe));
          }),
          (w.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (mt = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (w.unstable_getCurrentPriorityLevel = function () {
            return $;
          }),
          (w.unstable_getFirstCallbackNode = function () {
            return m(M);
          }),
          (w.unstable_next = function (N) {
            switch ($) {
              case 1:
              case 2:
              case 3:
                var F = 3;
                break;
              default:
                F = $;
            }
            var x = $;
            $ = F;
            try {
              return N();
            } finally {
              $ = x;
            }
          }),
          (w.unstable_pauseExecution = function () {}),
          (w.unstable_requestPaint = function () {}),
          (w.unstable_runWithPriority = function (N, F) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var x = $;
            $ = N;
            try {
              return F();
            } finally {
              $ = x;
            }
          }),
          (w.unstable_scheduleCallback = function (N, F, x) {
            var c = w.unstable_now();
            switch (
              (typeof x == "object" && x !== null
                ? ((x = x.delay),
                  (x = typeof x == "number" && 0 < x ? c + x : c))
                : (x = c),
              N)
            ) {
              case 1:
                var v = -1;
                break;
              case 2:
                v = 250;
                break;
              case 5:
                v = 1073741823;
                break;
              case 4:
                v = 1e4;
                break;
              default:
                v = 5e3;
            }
            return (
              (v = x + v),
              (N = {
                id: q++,
                callback: F,
                priorityLevel: N,
                startTime: x,
                expirationTime: v,
                sortIndex: -1,
              }),
              x > c
                ? ((N.sortIndex = x),
                  j(I, N),
                  m(M) === null &&
                    N === m(I) &&
                    (K ? (Ve(Me), (Me = -1)) : (K = !0), se(we, x - c)))
                : ((N.sortIndex = v), j(M, N), Q || X || ((Q = !0), _e(Fe))),
              N
            );
          }),
          (w.unstable_shouldYield = wt),
          (w.unstable_wrapCallback = function (N) {
            var F = $;
            return function () {
              var x = $;
              $ = F;
              try {
                return N.apply(this, arguments);
              } finally {
                $ = x;
              }
            };
          }));
      })(zi)),
    zi
  );
}
var Tu;
function Id() {
  return (Tu || ((Tu = 1), (Pi.exports = Md())), Pi.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ru;
function Bd() {
  if (Ru) return $e;
  Ru = 1;
  var w = Ti(),
    j = Id();
  function m(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var V = new Set(),
    z = {};
  function T(e, t) {
    (H(e, t), H(e + "Capture", t));
  }
  function H(e, t) {
    for (z[e] = t, e = 0; e < t.length; e++) V.add(t[e]);
  }
  var U = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    M = Object.prototype.hasOwnProperty,
    I =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    q = {},
    B = {};
  function $(e) {
    return M.call(B, e)
      ? !0
      : M.call(q, e)
        ? !1
        : I.test(e)
          ? (B[e] = !0)
          : ((q[e] = !0), !1);
  }
  function X(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Q(e, t, n, r) {
    if (t === null || typeof t > "u" || X(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function K(e, t, n, r, l, o, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i));
  }
  var ee = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      ee[e] = new K(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      ee[t] = new K(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        ee[e] = new K(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      ee[e] = new K(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        ee[e] = new K(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      ee[e] = new K(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      ee[e] = new K(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      ee[e] = new K(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      ee[e] = new K(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var Ve = /[\-:]([a-z])/g;
  function Ze(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Ve, Ze);
      ee[t] = new K(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Ve, Ze);
        ee[t] = new K(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(Ve, Ze);
      ee[t] = new K(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1,
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      ee[e] = new K(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (ee.xlinkHref = new K(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      ee[e] = new K(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function He(e, t, n, r) {
    var l = ee.hasOwnProperty(t) ? ee[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Q(t, n, l, r) && (n = null),
      r || l === null
        ? $(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var we = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Fe = Symbol.for("react.element"),
    pe = Symbol.for("react.portal"),
    Ee = Symbol.for("react.fragment"),
    Me = Symbol.for("react.strict_mode"),
    mt = Symbol.for("react.profiler"),
    it = Symbol.for("react.provider"),
    wt = Symbol.for("react.context"),
    Je = Symbol.for("react.forward_ref"),
    Le = Symbol.for("react.suspense"),
    We = Symbol.for("react.suspense_list"),
    be = Symbol.for("react.memo"),
    _e = Symbol.for("react.lazy"),
    se = Symbol.for("react.offscreen"),
    N = Symbol.iterator;
  function F(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (N && e[N]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var x = Object.assign,
    c;
  function v(e) {
    if (c === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        c = (t && t[1]) || "";
      }
    return (
      `
` +
      c +
      e
    );
  }
  var L = !1;
  function A(e, t) {
    if (!e || L) return "";
    L = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (h) {
            var r = h;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (h) {
            r = h;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (h) {
          r = h;
        }
        e();
      }
    } catch (h) {
      if (h && r && typeof h.stack == "string") {
        for (
          var l = h.stack.split(`
`),
            o = r.stack.split(`
`),
            i = l.length - 1,
            a = o.length - 1;
          1 <= i && 0 <= a && l[i] !== o[a];
        )
          a--;
        for (; 1 <= i && 0 <= a; i--, a--)
          if (l[i] !== o[a]) {
            if (i !== 1 || a !== 1)
              do
                if ((i--, a--, 0 > a || l[i] !== o[a])) {
                  var u =
                    `
` + l[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      u.includes("<anonymous>") &&
                      (u = u.replace("<anonymous>", e.displayName)),
                    u
                  );
                }
              while (1 <= i && 0 <= a);
            break;
          }
      }
    } finally {
      ((L = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function Y(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = A(e.type, !1)), e);
      case 11:
        return ((e = A(e.type.render, !1)), e);
      case 1:
        return ((e = A(e.type, !0)), e);
      default:
        return "";
    }
  }
  function Z(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Ee:
        return "Fragment";
      case pe:
        return "Portal";
      case mt:
        return "Profiler";
      case Me:
        return "StrictMode";
      case Le:
        return "Suspense";
      case We:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case wt:
          return (e.displayName || "Context") + ".Consumer";
        case it:
          return (e._context.displayName || "Context") + ".Provider";
        case Je:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case be:
          return (
            (t = e.displayName || null),
            t !== null ? t : Z(e.type) || "Memo"
          );
        case _e:
          ((t = e._payload), (e = e._init));
          try {
            return Z(e(t));
          } catch {}
      }
    return null;
  }
  function re(e) {
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
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
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
        return Z(t);
      case 8:
        return t === Me ? "StrictMode" : "Mode";
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
  function te(e) {
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
  function ae(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Qe(e) {
    var t = ae(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (i) {
            ((r = "" + i), o.call(this, i));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = "" + i;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function yr(e) {
    e._valueTracker || (e._valueTracker = Qe(e));
  }
  function Ri(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ae(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function wr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Rl(e, t) {
    var n = t.checked;
    return x({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Li(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = te(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function Di(e, t) {
    ((t = t.checked), t != null && He(e, "checked", t, !1));
  }
  function Ll(e, t) {
    Di(e, t);
    var n = te(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Dl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Dl(e, t.type, te(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function Oi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function Dl(e, t, n) {
    (t !== "number" || wr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Dn = Array.isArray;
  function an(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + te(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ol(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return x({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Fi(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(m(92));
        if (Dn(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: te(n) };
  }
  function Mi(e, t) {
    var n = te(t.value),
      r = te(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Ii(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Bi(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Fl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Bi(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var kr,
    Gi = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          kr = kr || document.createElement("div"),
            kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = kr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function On(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Fn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Mu = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Fn).forEach(function (e) {
    Mu.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fn[t] = Fn[e]));
    });
  });
  function Ui(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Fn.hasOwnProperty(e) && Fn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Ai(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Ui(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Iu = x(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Ml(e, t) {
    if (t) {
      if (Iu[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(m(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(m(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(m(62));
    }
  }
  function Il(e, t) {
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
        return !1;
      default:
        return !0;
    }
  }
  var Bl = null;
  function Gl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ul = null,
    un = null,
    cn = null;
  function $i(e) {
    if ((e = rr(e))) {
      if (typeof Ul != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Hr(t)), Ul(e.stateNode, e.type, t));
    }
  }
  function Vi(e) {
    un ? (cn ? cn.push(e) : (cn = [e])) : (un = e);
  }
  function Hi() {
    if (un) {
      var e = un,
        t = cn;
      if (((cn = un = null), $i(e), t)) for (e = 0; e < t.length; e++) $i(t[e]);
    }
  }
  function Wi(e, t) {
    return e(t);
  }
  function Qi() {}
  var Al = !1;
  function Ki(e, t, n) {
    if (Al) return e(t, n);
    Al = !0;
    try {
      return Wi(e, t, n);
    } finally {
      ((Al = !1), (un !== null || cn !== null) && (Qi(), Hi()));
    }
  }
  function Mn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Hr(n);
    if (r === null) return null;
    n = r[t];
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
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(m(231, t, typeof n));
    return n;
  }
  var $l = !1;
  if (U)
    try {
      var In = {};
      (Object.defineProperty(In, "passive", {
        get: function () {
          $l = !0;
        },
      }),
        window.addEventListener("test", In, In),
        window.removeEventListener("test", In, In));
    } catch {
      $l = !1;
    }
  function Bu(e, t, n, r, l, o, i, a, u) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (y) {
      this.onError(y);
    }
  }
  var Bn = !1,
    Sr = null,
    Nr = !1,
    Vl = null,
    Gu = {
      onError: function (e) {
        ((Bn = !0), (Sr = e));
      },
    };
  function Uu(e, t, n, r, l, o, i, a, u) {
    ((Bn = !1), (Sr = null), Bu.apply(Gu, arguments));
  }
  function Au(e, t, n, r, l, o, i, a, u) {
    if ((Uu.apply(this, arguments), Bn)) {
      if (Bn) {
        var h = Sr;
        ((Bn = !1), (Sr = null));
      } else throw Error(m(198));
      Nr || ((Nr = !0), (Vl = h));
    }
  }
  function Yt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Yi(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function qi(e) {
    if (Yt(e) !== e) throw Error(m(188));
  }
  function $u(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Yt(e)), t === null)) throw Error(m(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return (qi(l), e);
          if (o === r) return (qi(l), t);
          o = o.sibling;
        }
        throw Error(m(188));
      }
      if (n.return !== r.return) ((n = l), (r = o));
      else {
        for (var i = !1, a = l.child; a; ) {
          if (a === n) {
            ((i = !0), (n = l), (r = o));
            break;
          }
          if (a === r) {
            ((i = !0), (r = l), (n = o));
            break;
          }
          a = a.sibling;
        }
        if (!i) {
          for (a = o.child; a; ) {
            if (a === n) {
              ((i = !0), (n = o), (r = l));
              break;
            }
            if (a === r) {
              ((i = !0), (r = o), (n = l));
              break;
            }
            a = a.sibling;
          }
          if (!i) throw Error(m(189));
        }
      }
      if (n.alternate !== r) throw Error(m(190));
    }
    if (n.tag !== 3) throw Error(m(188));
    return n.stateNode.current === n ? e : t;
  }
  function Xi(e) {
    return ((e = $u(e)), e !== null ? Zi(e) : null);
  }
  function Zi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Zi(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ji = j.unstable_scheduleCallback,
    bi = j.unstable_cancelCallback,
    Vu = j.unstable_shouldYield,
    Hu = j.unstable_requestPaint,
    he = j.unstable_now,
    Wu = j.unstable_getCurrentPriorityLevel,
    Hl = j.unstable_ImmediatePriority,
    es = j.unstable_UserBlockingPriority,
    jr = j.unstable_NormalPriority,
    Qu = j.unstable_LowPriority,
    ts = j.unstable_IdlePriority,
    Cr = null,
    ht = null;
  function Ku(e) {
    if (ht && typeof ht.onCommitFiberRoot == "function")
      try {
        ht.onCommitFiberRoot(Cr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var st = Math.clz32 ? Math.clz32 : Xu,
    Yu = Math.log,
    qu = Math.LN2;
  function Xu(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Yu(e) / qu) | 0)) | 0);
  }
  var Er = 64,
    _r = 4194304;
  function Gn(e) {
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
  function Pr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var a = i & ~l;
      a !== 0 ? (r = Gn(a)) : ((o &= i), o !== 0 && (r = Gn(o)));
    } else ((i = n & ~l), i !== 0 ? (r = Gn(i)) : o !== 0 && (r = Gn(o)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - st(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function Zu(e, t) {
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
  function Ju(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;
    ) {
      var i = 31 - st(o),
        a = 1 << i,
        u = l[i];
      (u === -1
        ? ((a & n) === 0 || (a & r) !== 0) && (l[i] = Zu(a, t))
        : u <= t && (e.expiredLanes |= a),
        (o &= ~a));
    }
  }
  function Wl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ns() {
    var e = Er;
    return ((Er <<= 1), (Er & 4194240) === 0 && (Er = 64), e);
  }
  function Ql(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Un(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - st(t)),
      (e[t] = n));
  }
  function bu(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - st(n),
        o = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o));
    }
  }
  function Kl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - st(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var ne = 0;
  function rs(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var ls,
    Yl,
    os,
    is,
    ss,
    ql = !1,
    zr = [],
    zt = null,
    Tt = null,
    Rt = null,
    An = new Map(),
    $n = new Map(),
    Lt = [],
    ec =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function as(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        zt = null;
        break;
      case "dragenter":
      case "dragleave":
        Tt = null;
        break;
      case "mouseover":
      case "mouseout":
        Rt = null;
        break;
      case "pointerover":
      case "pointerout":
        An.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $n.delete(t.pointerId);
    }
  }
  function Vn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = rr(t)), t !== null && Yl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function tc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((zt = Vn(zt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Tt = Vn(Tt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Rt = Vn(Rt, e, t, n, r, l)), !0);
      case "pointerover":
        var o = l.pointerId;
        return (An.set(o, Vn(An.get(o) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return (
          (o = l.pointerId),
          $n.set(o, Vn($n.get(o) || null, e, t, n, r, l)),
          !0
        );
    }
    return !1;
  }
  function us(e) {
    var t = qt(e.target);
    if (t !== null) {
      var n = Yt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Yi(n)), t !== null)) {
            ((e.blockedOn = t),
              ss(e.priority, function () {
                os(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Tr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Zl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Bl = r), n.target.dispatchEvent(r), (Bl = null));
      } else return ((t = rr(n)), t !== null && Yl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function cs(e, t, n) {
    Tr(e) && n.delete(t);
  }
  function nc() {
    ((ql = !1),
      zt !== null && Tr(zt) && (zt = null),
      Tt !== null && Tr(Tt) && (Tt = null),
      Rt !== null && Tr(Rt) && (Rt = null),
      An.forEach(cs),
      $n.forEach(cs));
  }
  function Hn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ql ||
        ((ql = !0),
        j.unstable_scheduleCallback(j.unstable_NormalPriority, nc)));
  }
  function Wn(e) {
    function t(l) {
      return Hn(l, e);
    }
    if (0 < zr.length) {
      Hn(zr[0], e);
      for (var n = 1; n < zr.length; n++) {
        var r = zr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      zt !== null && Hn(zt, e),
        Tt !== null && Hn(Tt, e),
        Rt !== null && Hn(Rt, e),
        An.forEach(t),
        $n.forEach(t),
        n = 0;
      n < Lt.length;
      n++
    )
      ((r = Lt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Lt.length && ((n = Lt[0]), n.blockedOn === null); )
      (us(n), n.blockedOn === null && Lt.shift());
  }
  var dn = we.ReactCurrentBatchConfig,
    Rr = !0;
  function rc(e, t, n, r) {
    var l = ne,
      o = dn.transition;
    dn.transition = null;
    try {
      ((ne = 1), Xl(e, t, n, r));
    } finally {
      ((ne = l), (dn.transition = o));
    }
  }
  function lc(e, t, n, r) {
    var l = ne,
      o = dn.transition;
    dn.transition = null;
    try {
      ((ne = 4), Xl(e, t, n, r));
    } finally {
      ((ne = l), (dn.transition = o));
    }
  }
  function Xl(e, t, n, r) {
    if (Rr) {
      var l = Zl(e, t, n, r);
      if (l === null) (ho(e, t, r, Lr, n), as(e, r));
      else if (tc(l, e, t, n, r)) r.stopPropagation();
      else if ((as(e, r), t & 4 && -1 < ec.indexOf(e))) {
        for (; l !== null; ) {
          var o = rr(l);
          if (
            (o !== null && ls(o),
            (o = Zl(e, t, n, r)),
            o === null && ho(e, t, r, Lr, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else ho(e, t, r, null, n);
    }
  }
  var Lr = null;
  function Zl(e, t, n, r) {
    if (((Lr = null), (e = Gl(r)), (e = qt(e)), e !== null))
      if (((t = Yt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Yi(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Lr = e), null);
  }
  function ds(e) {
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
        switch (Wu()) {
          case Hl:
            return 1;
          case es:
            return 4;
          case jr:
          case Qu:
            return 16;
          case ts:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Dt = null,
    Jl = null,
    Dr = null;
  function fs() {
    if (Dr) return Dr;
    var e,
      t = Jl,
      n = t.length,
      r,
      l = "value" in Dt ? Dt.value : Dt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (Dr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Or(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Fr() {
    return !0;
  }
  function ps() {
    return !1;
  }
  function Ke(e) {
    function t(n, r, l, o, i) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = i),
        (this.currentTarget = null));
      for (var a in e)
        e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Fr
          : ps),
        (this.isPropagationStopped = ps),
        this
      );
    }
    return (
      x(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Fr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Fr));
        },
        persist: function () {},
        isPersistent: Fr,
      }),
      t
    );
  }
  var fn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    bl = Ke(fn),
    Qn = x({}, fn, { view: 0, detail: 0 }),
    oc = Ke(Qn),
    eo,
    to,
    Kn,
    Mr = x({}, Qn, {
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
      getModifierState: ro,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Kn &&
              (Kn && e.type === "mousemove"
                ? ((eo = e.screenX - Kn.screenX), (to = e.screenY - Kn.screenY))
                : (to = eo = 0),
              (Kn = e)),
            eo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : to;
      },
    }),
    ms = Ke(Mr),
    ic = x({}, Mr, { dataTransfer: 0 }),
    sc = Ke(ic),
    ac = x({}, Qn, { relatedTarget: 0 }),
    no = Ke(ac),
    uc = x({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    cc = Ke(uc),
    dc = x({}, fn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    fc = Ke(dc),
    pc = x({}, fn, { data: 0 }),
    hs = Ke(pc),
    mc = {
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
      MozPrintableKey: "Unidentified",
    },
    hc = {
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
      224: "Meta",
    },
    vc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function gc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = vc[e])
        ? !!t[e]
        : !1;
  }
  function ro() {
    return gc;
  }
  var xc = x({}, Qn, {
      key: function (e) {
        if (e.key) {
          var t = mc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Or(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? hc[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ro,
      charCode: function (e) {
        return e.type === "keypress" ? Or(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Or(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    yc = Ke(xc),
    wc = x({}, Mr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    vs = Ke(wc),
    kc = x({}, Qn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ro,
    }),
    Sc = Ke(kc),
    Nc = x({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    jc = Ke(Nc),
    Cc = x({}, Mr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ec = Ke(Cc),
    _c = [9, 13, 27, 32],
    lo = U && "CompositionEvent" in window,
    Yn = null;
  U && "documentMode" in document && (Yn = document.documentMode);
  var Pc = U && "TextEvent" in window && !Yn,
    gs = U && (!lo || (Yn && 8 < Yn && 11 >= Yn)),
    xs = " ",
    ys = !1;
  function ws(e, t) {
    switch (e) {
      case "keyup":
        return _c.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ks(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var pn = !1;
  function zc(e, t) {
    switch (e) {
      case "compositionend":
        return ks(t);
      case "keypress":
        return t.which !== 32 ? null : ((ys = !0), xs);
      case "textInput":
        return ((e = t.data), e === xs && ys ? null : e);
      default:
        return null;
    }
  }
  function Tc(e, t) {
    if (pn)
      return e === "compositionend" || (!lo && ws(e, t))
        ? ((e = fs()), (Dr = Jl = Dt = null), (pn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return gs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Rc = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ss(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Rc[e.type] : t === "textarea";
  }
  function Ns(e, t, n, r) {
    (Vi(r),
      (t = Ar(t, "onChange")),
      0 < t.length &&
        ((n = new bl("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var qn = null,
    Xn = null;
  function Lc(e) {
    As(e, 0);
  }
  function Ir(e) {
    var t = xn(e);
    if (Ri(t)) return e;
  }
  function Dc(e, t) {
    if (e === "change") return t;
  }
  var js = !1;
  if (U) {
    var oo;
    if (U) {
      var io = "oninput" in document;
      if (!io) {
        var Cs = document.createElement("div");
        (Cs.setAttribute("oninput", "return;"),
          (io = typeof Cs.oninput == "function"));
      }
      oo = io;
    } else oo = !1;
    js = oo && (!document.documentMode || 9 < document.documentMode);
  }
  function Es() {
    qn && (qn.detachEvent("onpropertychange", _s), (Xn = qn = null));
  }
  function _s(e) {
    if (e.propertyName === "value" && Ir(Xn)) {
      var t = [];
      (Ns(t, Xn, e, Gl(e)), Ki(Lc, t));
    }
  }
  function Oc(e, t, n) {
    e === "focusin"
      ? (Es(), (qn = t), (Xn = n), qn.attachEvent("onpropertychange", _s))
      : e === "focusout" && Es();
  }
  function Fc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ir(Xn);
  }
  function Mc(e, t) {
    if (e === "click") return Ir(t);
  }
  function Ic(e, t) {
    if (e === "input" || e === "change") return Ir(t);
  }
  function Bc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var at = typeof Object.is == "function" ? Object.is : Bc;
  function Zn(e, t) {
    if (at(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!M.call(t, l) || !at(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ps(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function zs(e, t) {
    var n = Ps(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Ps(n);
    }
  }
  function Ts(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Ts(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Rs() {
    for (var e = window, t = wr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = wr(e.document);
    }
    return t;
  }
  function so(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Gc(e) {
    var t = Rs(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Ts(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && so(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          ((r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = zs(n, o)));
          var i = zs(n, r);
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var Uc = U && "documentMode" in document && 11 >= document.documentMode,
    mn = null,
    ao = null,
    Jn = null,
    uo = !1;
  function Ls(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    uo ||
      mn == null ||
      mn !== wr(r) ||
      ((r = mn),
      "selectionStart" in r && so(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Jn && Zn(Jn, r)) ||
        ((Jn = r),
        (r = Ar(ao, "onSelect")),
        0 < r.length &&
          ((t = new bl("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = mn))));
  }
  function Br(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var hn = {
      animationend: Br("Animation", "AnimationEnd"),
      animationiteration: Br("Animation", "AnimationIteration"),
      animationstart: Br("Animation", "AnimationStart"),
      transitionend: Br("Transition", "TransitionEnd"),
    },
    co = {},
    Ds = {};
  U &&
    ((Ds = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete hn.animationend.animation,
      delete hn.animationiteration.animation,
      delete hn.animationstart.animation),
    "TransitionEvent" in window || delete hn.transitionend.transition);
  function Gr(e) {
    if (co[e]) return co[e];
    if (!hn[e]) return e;
    var t = hn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ds) return (co[e] = t[n]);
    return e;
  }
  var Os = Gr("animationend"),
    Fs = Gr("animationiteration"),
    Ms = Gr("animationstart"),
    Is = Gr("transitionend"),
    Bs = new Map(),
    Gs =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Ot(e, t) {
    (Bs.set(e, t), T(t, [e]));
  }
  for (var fo = 0; fo < Gs.length; fo++) {
    var po = Gs[fo],
      Ac = po.toLowerCase(),
      $c = po[0].toUpperCase() + po.slice(1);
    Ot(Ac, "on" + $c);
  }
  (Ot(Os, "onAnimationEnd"),
    Ot(Fs, "onAnimationIteration"),
    Ot(Ms, "onAnimationStart"),
    Ot("dblclick", "onDoubleClick"),
    Ot("focusin", "onFocus"),
    Ot("focusout", "onBlur"),
    Ot(Is, "onTransitionEnd"),
    H("onMouseEnter", ["mouseout", "mouseover"]),
    H("onMouseLeave", ["mouseout", "mouseover"]),
    H("onPointerEnter", ["pointerout", "pointerover"]),
    H("onPointerLeave", ["pointerout", "pointerover"]),
    T(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    T(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    T("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    T(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    T(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    T(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var bn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Vc = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(bn),
    );
  function Us(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), Au(r, t, void 0, e), (e.currentTarget = null));
  }
  function As(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var i = r.length - 1; 0 <= i; i--) {
            var a = r[i],
              u = a.instance,
              h = a.currentTarget;
            if (((a = a.listener), u !== o && l.isPropagationStopped()))
              break e;
            (Us(l, a, h), (o = u));
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((a = r[i]),
              (u = a.instance),
              (h = a.currentTarget),
              (a = a.listener),
              u !== o && l.isPropagationStopped())
            )
              break e;
            (Us(l, a, h), (o = u));
          }
      }
    }
    if (Nr) throw ((e = Vl), (Nr = !1), (Vl = null), e);
  }
  function oe(e, t) {
    var n = t[ko];
    n === void 0 && (n = t[ko] = new Set());
    var r = e + "__bubble";
    n.has(r) || ($s(t, e, 2, !1), n.add(r));
  }
  function mo(e, t, n) {
    var r = 0;
    (t && (r |= 4), $s(n, e, r, t));
  }
  var Ur = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Ur]) {
      ((e[Ur] = !0),
        V.forEach(function (n) {
          n !== "selectionchange" && (Vc.has(n) || mo(n, !1, e), mo(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ur] || ((t[Ur] = !0), mo("selectionchange", !1, t));
    }
  }
  function $s(e, t, n, r) {
    switch (ds(t)) {
      case 1:
        var l = rc;
        break;
      case 4:
        l = lc;
        break;
      default:
        l = Xl;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !$l ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function ho(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var a = r.stateNode.containerInfo;
          if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var u = i.tag;
              if (
                (u === 3 || u === 4) &&
                ((u = i.stateNode.containerInfo),
                u === l || (u.nodeType === 8 && u.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; a !== null; ) {
            if (((i = qt(a)), i === null)) return;
            if (((u = i.tag), u === 5 || u === 6)) {
              r = o = i;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
    Ki(function () {
      var h = o,
        y = Gl(n),
        k = [];
      e: {
        var g = Bs.get(e);
        if (g !== void 0) {
          var C = bl,
            _ = e;
          switch (e) {
            case "keypress":
              if (Or(n) === 0) break e;
            case "keydown":
            case "keyup":
              C = yc;
              break;
            case "focusin":
              ((_ = "focus"), (C = no));
              break;
            case "focusout":
              ((_ = "blur"), (C = no));
              break;
            case "beforeblur":
            case "afterblur":
              C = no;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              C = ms;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = sc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = Sc;
              break;
            case Os:
            case Fs:
            case Ms:
              C = cc;
              break;
            case Is:
              C = jc;
              break;
            case "scroll":
              C = oc;
              break;
            case "wheel":
              C = Ec;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = fc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = vs;
          }
          var P = (t & 4) !== 0,
            ve = !P && e === "scroll",
            f = P ? (g !== null ? g + "Capture" : null) : g;
          P = [];
          for (var d = h, p; d !== null; ) {
            p = d;
            var S = p.stateNode;
            if (
              (p.tag === 5 &&
                S !== null &&
                ((p = S),
                f !== null &&
                  ((S = Mn(d, f)), S != null && P.push(tr(d, S, p)))),
              ve)
            )
              break;
            d = d.return;
          }
          0 < P.length &&
            ((g = new C(g, _, null, n, y)), k.push({ event: g, listeners: P }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((g = e === "mouseover" || e === "pointerover"),
            (C = e === "mouseout" || e === "pointerout"),
            g &&
              n !== Bl &&
              (_ = n.relatedTarget || n.fromElement) &&
              (qt(_) || _[kt]))
          )
            break e;
          if (
            (C || g) &&
            ((g =
              y.window === y
                ? y
                : (g = y.ownerDocument)
                  ? g.defaultView || g.parentWindow
                  : window),
            C
              ? ((_ = n.relatedTarget || n.toElement),
                (C = h),
                (_ = _ ? qt(_) : null),
                _ !== null &&
                  ((ve = Yt(_)), _ !== ve || (_.tag !== 5 && _.tag !== 6)) &&
                  (_ = null))
              : ((C = null), (_ = h)),
            C !== _)
          ) {
            if (
              ((P = ms),
              (S = "onMouseLeave"),
              (f = "onMouseEnter"),
              (d = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((P = vs),
                (S = "onPointerLeave"),
                (f = "onPointerEnter"),
                (d = "pointer")),
              (ve = C == null ? g : xn(C)),
              (p = _ == null ? g : xn(_)),
              (g = new P(S, d + "leave", C, n, y)),
              (g.target = ve),
              (g.relatedTarget = p),
              (S = null),
              qt(y) === h &&
                ((P = new P(f, d + "enter", _, n, y)),
                (P.target = p),
                (P.relatedTarget = ve),
                (S = P)),
              (ve = S),
              C && _)
            )
              t: {
                for (P = C, f = _, d = 0, p = P; p; p = vn(p)) d++;
                for (p = 0, S = f; S; S = vn(S)) p++;
                for (; 0 < d - p; ) ((P = vn(P)), d--);
                for (; 0 < p - d; ) ((f = vn(f)), p--);
                for (; d--; ) {
                  if (P === f || (f !== null && P === f.alternate)) break t;
                  ((P = vn(P)), (f = vn(f)));
                }
                P = null;
              }
            else P = null;
            (C !== null && Vs(k, g, C, P, !1),
              _ !== null && ve !== null && Vs(k, ve, _, P, !0));
          }
        }
        e: {
          if (
            ((g = h ? xn(h) : window),
            (C = g.nodeName && g.nodeName.toLowerCase()),
            C === "select" || (C === "input" && g.type === "file"))
          )
            var R = Dc;
          else if (Ss(g))
            if (js) R = Ic;
            else {
              R = Fc;
              var D = Oc;
            }
          else
            (C = g.nodeName) &&
              C.toLowerCase() === "input" &&
              (g.type === "checkbox" || g.type === "radio") &&
              (R = Mc);
          if (R && (R = R(e, h))) {
            Ns(k, R, n, y);
            break e;
          }
          (D && D(e, g, h),
            e === "focusout" &&
              (D = g._wrapperState) &&
              D.controlled &&
              g.type === "number" &&
              Dl(g, "number", g.value));
        }
        switch (((D = h ? xn(h) : window), e)) {
          case "focusin":
            (Ss(D) || D.contentEditable === "true") &&
              ((mn = D), (ao = h), (Jn = null));
            break;
          case "focusout":
            Jn = ao = mn = null;
            break;
          case "mousedown":
            uo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((uo = !1), Ls(k, n, y));
            break;
          case "selectionchange":
            if (Uc) break;
          case "keydown":
          case "keyup":
            Ls(k, n, y);
        }
        var O;
        if (lo)
          e: {
            switch (e) {
              case "compositionstart":
                var G = "onCompositionStart";
                break e;
              case "compositionend":
                G = "onCompositionEnd";
                break e;
              case "compositionupdate":
                G = "onCompositionUpdate";
                break e;
            }
            G = void 0;
          }
        else
          pn
            ? ws(e, n) && (G = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (G = "onCompositionStart");
        (G &&
          (gs &&
            n.locale !== "ko" &&
            (pn || G !== "onCompositionStart"
              ? G === "onCompositionEnd" && pn && (O = fs())
              : ((Dt = y),
                (Jl = "value" in Dt ? Dt.value : Dt.textContent),
                (pn = !0))),
          (D = Ar(h, G)),
          0 < D.length &&
            ((G = new hs(G, e, null, n, y)),
            k.push({ event: G, listeners: D }),
            O ? (G.data = O) : ((O = ks(n)), O !== null && (G.data = O)))),
          (O = Pc ? zc(e, n) : Tc(e, n)) &&
            ((h = Ar(h, "onBeforeInput")),
            0 < h.length &&
              ((y = new hs("onBeforeInput", "beforeinput", null, n, y)),
              k.push({ event: y, listeners: h }),
              (y.data = O))));
      }
      As(k, t);
    });
  }
  function tr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ar(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      (l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Mn(e, n)),
        o != null && r.unshift(tr(e, o, l)),
        (o = Mn(e, t)),
        o != null && r.push(tr(e, o, l))),
        (e = e.return));
    }
    return r;
  }
  function vn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Vs(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var a = n,
        u = a.alternate,
        h = a.stateNode;
      if (u !== null && u === r) break;
      (a.tag === 5 &&
        h !== null &&
        ((a = h),
        l
          ? ((u = Mn(n, o)), u != null && i.unshift(tr(n, u, a)))
          : l || ((u = Mn(n, o)), u != null && i.push(tr(n, u, a)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Hc = /\r\n?/g,
    Wc = /\u0000|\uFFFD/g;
  function Hs(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Hc,
        `
`,
      )
      .replace(Wc, "");
  }
  function $r(e, t, n) {
    if (((t = Hs(t)), Hs(e) !== t && n)) throw Error(m(425));
  }
  function Vr() {}
  var vo = null,
    go = null;
  function xo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var yo = typeof setTimeout == "function" ? setTimeout : void 0,
    Qc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ws = typeof Promise == "function" ? Promise : void 0,
    Kc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ws < "u"
          ? function (e) {
              return Ws.resolve(null).then(e).catch(Yc);
            }
          : yo;
  function Yc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function wo(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), Wn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Wn(t);
  }
  function Ft(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Qs(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var gn = Math.random().toString(36).slice(2),
    vt = "__reactFiber$" + gn,
    nr = "__reactProps$" + gn,
    kt = "__reactContainer$" + gn,
    ko = "__reactEvents$" + gn,
    qc = "__reactListeners$" + gn,
    Xc = "__reactHandles$" + gn;
  function qt(e) {
    var t = e[vt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[kt] || n[vt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Qs(e); e !== null; ) {
            if ((n = e[vt])) return n;
            e = Qs(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function rr(e) {
    return (
      (e = e[vt] || e[kt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function xn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Hr(e) {
    return e[nr] || null;
  }
  var So = [],
    yn = -1;
  function Mt(e) {
    return { current: e };
  }
  function ie(e) {
    0 > yn || ((e.current = So[yn]), (So[yn] = null), yn--);
  }
  function le(e, t) {
    (yn++, (So[yn] = e.current), (e.current = t));
  }
  var It = {},
    Pe = Mt(It),
    Ie = Mt(!1),
    Xt = It;
  function wn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return It;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Be(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Wr() {
    (ie(Ie), ie(Pe));
  }
  function Ks(e, t, n) {
    if (Pe.current !== It) throw Error(m(168));
    (le(Pe, t), le(Ie, n));
  }
  function Ys(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, re(e) || "Unknown", l));
    return x({}, n, r);
  }
  function Qr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        It),
      (Xt = Pe.current),
      le(Pe, e),
      le(Ie, Ie.current),
      !0
    );
  }
  function qs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    (n
      ? ((e = Ys(e, t, Xt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ie(Ie),
        ie(Pe),
        le(Pe, e))
      : ie(Ie),
      le(Ie, n));
  }
  var St = null,
    Kr = !1,
    No = !1;
  function Xs(e) {
    St === null ? (St = [e]) : St.push(e);
  }
  function Zc(e) {
    ((Kr = !0), Xs(e));
  }
  function Bt() {
    if (!No && St !== null) {
      No = !0;
      var e = 0,
        t = ne;
      try {
        var n = St;
        for (ne = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((St = null), (Kr = !1));
      } catch (l) {
        throw (St !== null && (St = St.slice(e + 1)), Ji(Hl, Bt), l);
      } finally {
        ((ne = t), (No = !1));
      }
    }
    return null;
  }
  var kn = [],
    Sn = 0,
    Yr = null,
    qr = 0,
    et = [],
    tt = 0,
    Zt = null,
    Nt = 1,
    jt = "";
  function Jt(e, t) {
    ((kn[Sn++] = qr), (kn[Sn++] = Yr), (Yr = e), (qr = t));
  }
  function Zs(e, t, n) {
    ((et[tt++] = Nt), (et[tt++] = jt), (et[tt++] = Zt), (Zt = e));
    var r = Nt;
    e = jt;
    var l = 32 - st(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var o = 32 - st(t) + l;
    if (30 < o) {
      var i = l - (l % 5);
      ((o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (Nt = (1 << (32 - st(t) + l)) | (n << l) | r),
        (jt = o + e));
    } else ((Nt = (1 << o) | (n << l) | r), (jt = e));
  }
  function jo(e) {
    e.return !== null && (Jt(e, 1), Zs(e, 1, 0));
  }
  function Co(e) {
    for (; e === Yr; )
      ((Yr = kn[--Sn]), (kn[Sn] = null), (qr = kn[--Sn]), (kn[Sn] = null));
    for (; e === Zt; )
      ((Zt = et[--tt]),
        (et[tt] = null),
        (jt = et[--tt]),
        (et[tt] = null),
        (Nt = et[--tt]),
        (et[tt] = null));
  }
  var Ye = null,
    qe = null,
    ue = !1,
    ut = null;
  function Js(e, t) {
    var n = ot(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function bs(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ye = e), (qe = Ft(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ye = e), (qe = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Zt !== null ? { id: Nt, overflow: jt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = ot(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ye = e),
              (qe = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Eo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function _o(e) {
    if (ue) {
      var t = qe;
      if (t) {
        var n = t;
        if (!bs(e, t)) {
          if (Eo(e)) throw Error(m(418));
          t = Ft(n.nextSibling);
          var r = Ye;
          t && bs(e, t)
            ? Js(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (Ye = e));
        }
      } else {
        if (Eo(e)) throw Error(m(418));
        ((e.flags = (e.flags & -4097) | 2), (ue = !1), (Ye = e));
      }
    }
  }
  function ea(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    Ye = e;
  }
  function Xr(e) {
    if (e !== Ye) return !1;
    if (!ue) return (ea(e), (ue = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !xo(e.type, e.memoizedProps))),
      t && (t = qe))
    ) {
      if (Eo(e)) throw (ta(), Error(m(418)));
      for (; t; ) (Js(e, t), (t = Ft(t.nextSibling)));
    }
    if ((ea(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                qe = Ft(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        qe = null;
      }
    } else qe = Ye ? Ft(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ta() {
    for (var e = qe; e; ) e = Ft(e.nextSibling);
  }
  function Nn() {
    ((qe = Ye = null), (ue = !1));
  }
  function Po(e) {
    ut === null ? (ut = [e]) : ut.push(e);
  }
  var Jc = we.ReactCurrentBatchConfig;
  function lr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(m(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (i) {
              var a = l.refs;
              i === null ? delete a[o] : (a[o] = i);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!n._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Zr(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        m(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function na(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ra(e) {
    function t(f, d) {
      if (e) {
        var p = f.deletions;
        p === null ? ((f.deletions = [d]), (f.flags |= 16)) : p.push(d);
      }
    }
    function n(f, d) {
      if (!e) return null;
      for (; d !== null; ) (t(f, d), (d = d.sibling));
      return null;
    }
    function r(f, d) {
      for (f = new Map(); d !== null; )
        (d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling));
      return f;
    }
    function l(f, d) {
      return ((f = Qt(f, d)), (f.index = 0), (f.sibling = null), f);
    }
    function o(f, d, p) {
      return (
        (f.index = p),
        e
          ? ((p = f.alternate),
            p !== null
              ? ((p = p.index), p < d ? ((f.flags |= 2), d) : p)
              : ((f.flags |= 2), d))
          : ((f.flags |= 1048576), d)
      );
    }
    function i(f) {
      return (e && f.alternate === null && (f.flags |= 2), f);
    }
    function a(f, d, p, S) {
      return d === null || d.tag !== 6
        ? ((d = yi(p, f.mode, S)), (d.return = f), d)
        : ((d = l(d, p)), (d.return = f), d);
    }
    function u(f, d, p, S) {
      var R = p.type;
      return R === Ee
        ? y(f, d, p.props.children, S, p.key)
        : d !== null &&
            (d.elementType === R ||
              (typeof R == "object" &&
                R !== null &&
                R.$$typeof === _e &&
                na(R) === d.type))
          ? ((S = l(d, p.props)), (S.ref = lr(f, d, p)), (S.return = f), S)
          : ((S = kl(p.type, p.key, p.props, null, f.mode, S)),
            (S.ref = lr(f, d, p)),
            (S.return = f),
            S);
    }
    function h(f, d, p, S) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== p.containerInfo ||
        d.stateNode.implementation !== p.implementation
        ? ((d = wi(p, f.mode, S)), (d.return = f), d)
        : ((d = l(d, p.children || [])), (d.return = f), d);
    }
    function y(f, d, p, S, R) {
      return d === null || d.tag !== 7
        ? ((d = sn(p, f.mode, S, R)), (d.return = f), d)
        : ((d = l(d, p)), (d.return = f), d);
    }
    function k(f, d, p) {
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return ((d = yi("" + d, f.mode, p)), (d.return = f), d);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Fe:
            return (
              (p = kl(d.type, d.key, d.props, null, f.mode, p)),
              (p.ref = lr(f, null, d)),
              (p.return = f),
              p
            );
          case pe:
            return ((d = wi(d, f.mode, p)), (d.return = f), d);
          case _e:
            var S = d._init;
            return k(f, S(d._payload), p);
        }
        if (Dn(d) || F(d))
          return ((d = sn(d, f.mode, p, null)), (d.return = f), d);
        Zr(f, d);
      }
      return null;
    }
    function g(f, d, p, S) {
      var R = d !== null ? d.key : null;
      if ((typeof p == "string" && p !== "") || typeof p == "number")
        return R !== null ? null : a(f, d, "" + p, S);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Fe:
            return p.key === R ? u(f, d, p, S) : null;
          case pe:
            return p.key === R ? h(f, d, p, S) : null;
          case _e:
            return ((R = p._init), g(f, d, R(p._payload), S));
        }
        if (Dn(p) || F(p)) return R !== null ? null : y(f, d, p, S, null);
        Zr(f, p);
      }
      return null;
    }
    function C(f, d, p, S, R) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return ((f = f.get(p) || null), a(d, f, "" + S, R));
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Fe:
            return (
              (f = f.get(S.key === null ? p : S.key) || null),
              u(d, f, S, R)
            );
          case pe:
            return (
              (f = f.get(S.key === null ? p : S.key) || null),
              h(d, f, S, R)
            );
          case _e:
            var D = S._init;
            return C(f, d, p, D(S._payload), R);
        }
        if (Dn(S) || F(S)) return ((f = f.get(p) || null), y(d, f, S, R, null));
        Zr(d, S);
      }
      return null;
    }
    function _(f, d, p, S) {
      for (
        var R = null, D = null, O = d, G = (d = 0), Ne = null;
        O !== null && G < p.length;
        G++
      ) {
        O.index > G ? ((Ne = O), (O = null)) : (Ne = O.sibling);
        var b = g(f, O, p[G], S);
        if (b === null) {
          O === null && (O = Ne);
          break;
        }
        (e && O && b.alternate === null && t(f, O),
          (d = o(b, d, G)),
          D === null ? (R = b) : (D.sibling = b),
          (D = b),
          (O = Ne));
      }
      if (G === p.length) return (n(f, O), ue && Jt(f, G), R);
      if (O === null) {
        for (; G < p.length; G++)
          ((O = k(f, p[G], S)),
            O !== null &&
              ((d = o(O, d, G)),
              D === null ? (R = O) : (D.sibling = O),
              (D = O)));
        return (ue && Jt(f, G), R);
      }
      for (O = r(f, O); G < p.length; G++)
        ((Ne = C(O, f, G, p[G], S)),
          Ne !== null &&
            (e &&
              Ne.alternate !== null &&
              O.delete(Ne.key === null ? G : Ne.key),
            (d = o(Ne, d, G)),
            D === null ? (R = Ne) : (D.sibling = Ne),
            (D = Ne)));
      return (
        e &&
          O.forEach(function (Kt) {
            return t(f, Kt);
          }),
        ue && Jt(f, G),
        R
      );
    }
    function P(f, d, p, S) {
      var R = F(p);
      if (typeof R != "function") throw Error(m(150));
      if (((p = R.call(p)), p == null)) throw Error(m(151));
      for (
        var D = (R = null), O = d, G = (d = 0), Ne = null, b = p.next();
        O !== null && !b.done;
        G++, b = p.next()
      ) {
        O.index > G ? ((Ne = O), (O = null)) : (Ne = O.sibling);
        var Kt = g(f, O, b.value, S);
        if (Kt === null) {
          O === null && (O = Ne);
          break;
        }
        (e && O && Kt.alternate === null && t(f, O),
          (d = o(Kt, d, G)),
          D === null ? (R = Kt) : (D.sibling = Kt),
          (D = Kt),
          (O = Ne));
      }
      if (b.done) return (n(f, O), ue && Jt(f, G), R);
      if (O === null) {
        for (; !b.done; G++, b = p.next())
          ((b = k(f, b.value, S)),
            b !== null &&
              ((d = o(b, d, G)),
              D === null ? (R = b) : (D.sibling = b),
              (D = b)));
        return (ue && Jt(f, G), R);
      }
      for (O = r(f, O); !b.done; G++, b = p.next())
        ((b = C(O, f, G, b.value, S)),
          b !== null &&
            (e && b.alternate !== null && O.delete(b.key === null ? G : b.key),
            (d = o(b, d, G)),
            D === null ? (R = b) : (D.sibling = b),
            (D = b)));
      return (
        e &&
          O.forEach(function (Rd) {
            return t(f, Rd);
          }),
        ue && Jt(f, G),
        R
      );
    }
    function ve(f, d, p, S) {
      if (
        (typeof p == "object" &&
          p !== null &&
          p.type === Ee &&
          p.key === null &&
          (p = p.props.children),
        typeof p == "object" && p !== null)
      ) {
        switch (p.$$typeof) {
          case Fe:
            e: {
              for (var R = p.key, D = d; D !== null; ) {
                if (D.key === R) {
                  if (((R = p.type), R === Ee)) {
                    if (D.tag === 7) {
                      (n(f, D.sibling),
                        (d = l(D, p.props.children)),
                        (d.return = f),
                        (f = d));
                      break e;
                    }
                  } else if (
                    D.elementType === R ||
                    (typeof R == "object" &&
                      R !== null &&
                      R.$$typeof === _e &&
                      na(R) === D.type)
                  ) {
                    (n(f, D.sibling),
                      (d = l(D, p.props)),
                      (d.ref = lr(f, D, p)),
                      (d.return = f),
                      (f = d));
                    break e;
                  }
                  n(f, D);
                  break;
                } else t(f, D);
                D = D.sibling;
              }
              p.type === Ee
                ? ((d = sn(p.props.children, f.mode, S, p.key)),
                  (d.return = f),
                  (f = d))
                : ((S = kl(p.type, p.key, p.props, null, f.mode, S)),
                  (S.ref = lr(f, d, p)),
                  (S.return = f),
                  (f = S));
            }
            return i(f);
          case pe:
            e: {
              for (D = p.key; d !== null; ) {
                if (d.key === D)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === p.containerInfo &&
                    d.stateNode.implementation === p.implementation
                  ) {
                    (n(f, d.sibling),
                      (d = l(d, p.children || [])),
                      (d.return = f),
                      (f = d));
                    break e;
                  } else {
                    n(f, d);
                    break;
                  }
                else t(f, d);
                d = d.sibling;
              }
              ((d = wi(p, f.mode, S)), (d.return = f), (f = d));
            }
            return i(f);
          case _e:
            return ((D = p._init), ve(f, d, D(p._payload), S));
        }
        if (Dn(p)) return _(f, d, p, S);
        if (F(p)) return P(f, d, p, S);
        Zr(f, p);
      }
      return (typeof p == "string" && p !== "") || typeof p == "number"
        ? ((p = "" + p),
          d !== null && d.tag === 6
            ? (n(f, d.sibling), (d = l(d, p)), (d.return = f), (f = d))
            : (n(f, d), (d = yi(p, f.mode, S)), (d.return = f), (f = d)),
          i(f))
        : n(f, d);
    }
    return ve;
  }
  var jn = ra(!0),
    la = ra(!1),
    Jr = Mt(null),
    br = null,
    Cn = null,
    zo = null;
  function To() {
    zo = Cn = br = null;
  }
  function Ro(e) {
    var t = Jr.current;
    (ie(Jr), (e._currentValue = t));
  }
  function Lo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function En(e, t) {
    ((br = e),
      (zo = Cn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ge = !0), (e.firstContext = null)));
  }
  function nt(e) {
    var t = e._currentValue;
    if (zo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Cn === null)) {
        if (br === null) throw Error(m(308));
        ((Cn = e), (br.dependencies = { lanes: 0, firstContext: e }));
      } else Cn = Cn.next = e;
    return t;
  }
  var bt = null;
  function Do(e) {
    bt === null ? (bt = [e]) : bt.push(e);
  }
  function oa(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Do(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Ct(e, r)
    );
  }
  function Ct(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var Gt = !1;
  function Oo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function ia(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Et(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Ut(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (J & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Ct(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Do(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Ct(e, n)
    );
  }
  function el(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Kl(e, n));
    }
  }
  function sa(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (o === null ? (l = o = i) : (o = o.next = i), (n = n.next));
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function tl(e, t, n, r) {
    var l = e.updateQueue;
    Gt = !1;
    var o = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      a = l.shared.pending;
    if (a !== null) {
      l.shared.pending = null;
      var u = a,
        h = u.next;
      ((u.next = null), i === null ? (o = h) : (i.next = h), (i = u));
      var y = e.alternate;
      y !== null &&
        ((y = y.updateQueue),
        (a = y.lastBaseUpdate),
        a !== i &&
          (a === null ? (y.firstBaseUpdate = h) : (a.next = h),
          (y.lastBaseUpdate = u)));
    }
    if (o !== null) {
      var k = l.baseState;
      ((i = 0), (y = h = u = null), (a = o));
      do {
        var g = a.lane,
          C = a.eventTime;
        if ((r & g) === g) {
          y !== null &&
            (y = y.next =
              {
                eventTime: C,
                lane: 0,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null,
              });
          e: {
            var _ = e,
              P = a;
            switch (((g = t), (C = n), P.tag)) {
              case 1:
                if (((_ = P.payload), typeof _ == "function")) {
                  k = _.call(C, k, g);
                  break e;
                }
                k = _;
                break e;
              case 3:
                _.flags = (_.flags & -65537) | 128;
              case 0:
                if (
                  ((_ = P.payload),
                  (g = typeof _ == "function" ? _.call(C, k, g) : _),
                  g == null)
                )
                  break e;
                k = x({}, k, g);
                break e;
              case 2:
                Gt = !0;
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((e.flags |= 64),
            (g = l.effects),
            g === null ? (l.effects = [a]) : g.push(a));
        } else
          ((C = {
            eventTime: C,
            lane: g,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          }),
            y === null ? ((h = y = C), (u = k)) : (y = y.next = C),
            (i |= g));
        if (((a = a.next), a === null)) {
          if (((a = l.shared.pending), a === null)) break;
          ((g = a),
            (a = g.next),
            (g.next = null),
            (l.lastBaseUpdate = g),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (y === null && (u = k),
        (l.baseState = u),
        (l.firstBaseUpdate = h),
        (l.lastBaseUpdate = y),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((i |= l.lane), (l = l.next));
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      ((nn |= i), (e.lanes = i), (e.memoizedState = k));
    }
  }
  function aa(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var or = {},
    gt = Mt(or),
    ir = Mt(or),
    sr = Mt(or);
  function en(e) {
    if (e === or) throw Error(m(174));
    return e;
  }
  function Fo(e, t) {
    switch ((le(sr, t), le(ir, e), le(gt, or), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Fl(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Fl(t, e)));
    }
    (ie(gt), le(gt, t));
  }
  function _n() {
    (ie(gt), ie(ir), ie(sr));
  }
  function ua(e) {
    en(sr.current);
    var t = en(gt.current),
      n = Fl(t, e.type);
    t !== n && (le(ir, e), le(gt, n));
  }
  function Mo(e) {
    ir.current === e && (ie(gt), ie(ir));
  }
  var de = Mt(0);
  function nl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Io = [];
  function Bo() {
    for (var e = 0; e < Io.length; e++)
      Io[e]._workInProgressVersionPrimary = null;
    Io.length = 0;
  }
  var rl = we.ReactCurrentDispatcher,
    Go = we.ReactCurrentBatchConfig,
    tn = 0,
    fe = null,
    xe = null,
    ke = null,
    ll = !1,
    ar = !1,
    ur = 0,
    bc = 0;
  function ze() {
    throw Error(m(321));
  }
  function Uo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!at(e[n], t[n])) return !1;
    return !0;
  }
  function Ao(e, t, n, r, l, o) {
    if (
      ((tn = o),
      (fe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (rl.current = e === null || e.memoizedState === null ? rd : ld),
      (e = n(r, l)),
      ar)
    ) {
      o = 0;
      do {
        if (((ar = !1), (ur = 0), 25 <= o)) throw Error(m(301));
        ((o += 1),
          (ke = xe = null),
          (t.updateQueue = null),
          (rl.current = od),
          (e = n(r, l)));
      } while (ar);
    }
    if (
      ((rl.current = sl),
      (t = xe !== null && xe.next !== null),
      (tn = 0),
      (ke = xe = fe = null),
      (ll = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function $o() {
    var e = ur !== 0;
    return ((ur = 0), e);
  }
  function xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (ke === null ? (fe.memoizedState = ke = e) : (ke = ke.next = e), ke);
  }
  function rt() {
    if (xe === null) {
      var e = fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = xe.next;
    var t = ke === null ? fe.memoizedState : ke.next;
    if (t !== null) ((ke = t), (xe = e));
    else {
      if (e === null) throw Error(m(310));
      ((xe = e),
        (e = {
          memoizedState: xe.memoizedState,
          baseState: xe.baseState,
          baseQueue: xe.baseQueue,
          queue: xe.queue,
          next: null,
        }),
        ke === null ? (fe.memoizedState = ke = e) : (ke = ke.next = e));
    }
    return ke;
  }
  function cr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Vo(e) {
    var t = rt(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = xe,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        ((l.next = o.next), (o.next = i));
      }
      ((r.baseQueue = l = o), (n.pending = null));
    }
    if (l !== null) {
      ((o = l.next), (r = r.baseState));
      var a = (i = null),
        u = null,
        h = o;
      do {
        var y = h.lane;
        if ((tn & y) === y)
          (u !== null &&
            (u = u.next =
              {
                lane: 0,
                action: h.action,
                hasEagerState: h.hasEagerState,
                eagerState: h.eagerState,
                next: null,
              }),
            (r = h.hasEagerState ? h.eagerState : e(r, h.action)));
        else {
          var k = {
            lane: y,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          };
          (u === null ? ((a = u = k), (i = r)) : (u = u.next = k),
            (fe.lanes |= y),
            (nn |= y));
        }
        h = h.next;
      } while (h !== null && h !== o);
      (u === null ? (i = r) : (u.next = a),
        at(r, t.memoizedState) || (Ge = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = u),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((o = l.lane), (fe.lanes |= o), (nn |= o), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ho(e) {
    var t = rt(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = (l = l.next);
      do ((o = e(o, i.action)), (i = i.next));
      while (i !== l);
      (at(o, t.memoizedState) || (Ge = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, r];
  }
  function ca() {}
  function da(e, t) {
    var n = fe,
      r = rt(),
      l = t(),
      o = !at(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Ge = !0)),
      (r = r.queue),
      Wo(ma.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (ke !== null && ke.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        dr(9, pa.bind(null, n, r, l, t), void 0, null),
        Se === null)
      )
        throw Error(m(349));
      (tn & 30) !== 0 || fa(n, t, l);
    }
    return l;
  }
  function fa(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = fe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (fe.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function pa(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ha(t) && va(e));
  }
  function ma(e, t, n) {
    return n(function () {
      ha(t) && va(e);
    });
  }
  function ha(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !at(e, n);
    } catch {
      return !0;
    }
  }
  function va(e) {
    var t = Ct(e, 1);
    t !== null && pt(t, e, 1, -1);
  }
  function ga(e) {
    var t = xt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = nd.bind(null, fe, e)),
      [t.memoizedState, e]
    );
  }
  function dr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = fe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (fe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function xa() {
    return rt().memoizedState;
  }
  function ol(e, t, n, r) {
    var l = xt();
    ((fe.flags |= e),
      (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function il(e, t, n, r) {
    var l = rt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (xe !== null) {
      var i = xe.memoizedState;
      if (((o = i.destroy), r !== null && Uo(r, i.deps))) {
        l.memoizedState = dr(t, n, o, r);
        return;
      }
    }
    ((fe.flags |= e), (l.memoizedState = dr(1 | t, n, o, r)));
  }
  function ya(e, t) {
    return ol(8390656, 8, e, t);
  }
  function Wo(e, t) {
    return il(2048, 8, e, t);
  }
  function wa(e, t) {
    return il(4, 2, e, t);
  }
  function ka(e, t) {
    return il(4, 4, e, t);
  }
  function Sa(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Na(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      il(4, 4, Sa.bind(null, t, e), n)
    );
  }
  function Qo() {}
  function ja(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Uo(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Ca(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Uo(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ea(e, t, n) {
    return (tn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ge = !0)), (e.memoizedState = n))
      : (at(n, t) ||
          ((n = ns()), (fe.lanes |= n), (nn |= n), (e.baseState = !0)),
        t);
  }
  function ed(e, t) {
    var n = ne;
    ((ne = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Go.transition;
    Go.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((ne = n), (Go.transition = r));
    }
  }
  function _a() {
    return rt().memoizedState;
  }
  function td(e, t, n) {
    var r = Ht(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Pa(e))
    )
      za(t, n);
    else if (((n = oa(e, t, n, r)), n !== null)) {
      var l = Oe();
      (pt(n, e, r, l), Ta(n, t, r));
    }
  }
  function nd(e, t, n) {
    var r = Ht(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Pa(e)) za(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var i = t.lastRenderedState,
            a = o(i, n);
          if (((l.hasEagerState = !0), (l.eagerState = a), at(a, i))) {
            var u = t.interleaved;
            (u === null
              ? ((l.next = l), Do(t))
              : ((l.next = u.next), (u.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = oa(e, t, l, r)),
        n !== null && ((l = Oe()), pt(n, e, r, l), Ta(n, t, r)));
    }
  }
  function Pa(e) {
    var t = e.alternate;
    return e === fe || (t !== null && t === fe);
  }
  function za(e, t) {
    ar = ll = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Ta(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Kl(e, n));
    }
  }
  var sl = {
      readContext: nt,
      useCallback: ze,
      useContext: ze,
      useEffect: ze,
      useImperativeHandle: ze,
      useInsertionEffect: ze,
      useLayoutEffect: ze,
      useMemo: ze,
      useReducer: ze,
      useRef: ze,
      useState: ze,
      useDebugValue: ze,
      useDeferredValue: ze,
      useTransition: ze,
      useMutableSource: ze,
      useSyncExternalStore: ze,
      useId: ze,
      unstable_isNewReconciler: !1,
    },
    rd = {
      readContext: nt,
      useCallback: function (e, t) {
        return ((xt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: nt,
      useEffect: ya,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          ol(4194308, 4, Sa.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return ol(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ol(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = xt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = xt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = td.bind(null, fe, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = xt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ga,
      useDebugValue: Qo,
      useDeferredValue: function (e) {
        return (xt().memoizedState = e);
      },
      useTransition: function () {
        var e = ga(!1),
          t = e[0];
        return ((e = ed.bind(null, e[1])), (xt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = fe,
          l = xt();
        if (ue) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), Se === null)) throw Error(m(349));
          (tn & 30) !== 0 || fa(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          ya(ma.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          dr(9, pa.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = xt(),
          t = Se.identifierPrefix;
        if (ue) {
          var n = jt,
            r = Nt;
          ((n = (r & ~(1 << (32 - st(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = ur++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = bc++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    ld = {
      readContext: nt,
      useCallback: ja,
      useContext: nt,
      useEffect: Wo,
      useImperativeHandle: Na,
      useInsertionEffect: wa,
      useLayoutEffect: ka,
      useMemo: Ca,
      useReducer: Vo,
      useRef: xa,
      useState: function () {
        return Vo(cr);
      },
      useDebugValue: Qo,
      useDeferredValue: function (e) {
        var t = rt();
        return Ea(t, xe.memoizedState, e);
      },
      useTransition: function () {
        var e = Vo(cr)[0],
          t = rt().memoizedState;
        return [e, t];
      },
      useMutableSource: ca,
      useSyncExternalStore: da,
      useId: _a,
      unstable_isNewReconciler: !1,
    },
    od = {
      readContext: nt,
      useCallback: ja,
      useContext: nt,
      useEffect: Wo,
      useImperativeHandle: Na,
      useInsertionEffect: wa,
      useLayoutEffect: ka,
      useMemo: Ca,
      useReducer: Ho,
      useRef: xa,
      useState: function () {
        return Ho(cr);
      },
      useDebugValue: Qo,
      useDeferredValue: function (e) {
        var t = rt();
        return xe === null ? (t.memoizedState = e) : Ea(t, xe.memoizedState, e);
      },
      useTransition: function () {
        var e = Ho(cr)[0],
          t = rt().memoizedState;
        return [e, t];
      },
      useMutableSource: ca,
      useSyncExternalStore: da,
      useId: _a,
      unstable_isNewReconciler: !1,
    };
  function ct(e, t) {
    if (e && e.defaultProps) {
      ((t = x({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ko(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : x({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var al = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Yt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Oe(),
        l = Ht(e),
        o = Et(r, l);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = Ut(e, o, l)),
        t !== null && (pt(t, e, l, r), el(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Oe(),
        l = Ht(e),
        o = Et(r, l);
      ((o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Ut(e, o, l)),
        t !== null && (pt(t, e, l, r), el(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Oe(),
        r = Ht(e),
        l = Et(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Ut(e, l, r)),
        t !== null && (pt(t, e, r, n), el(t, e, r)));
    },
  };
  function Ra(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Zn(n, r) || !Zn(l, o)
          : !0
    );
  }
  function La(e, t, n) {
    var r = !1,
      l = It,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = nt(o))
        : ((l = Be(t) ? Xt : Pe.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? wn(e, l) : It)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = al),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Da(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && al.enqueueReplaceState(t, t.state, null));
  }
  function Yo(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Oo(e));
    var o = t.contextType;
    (typeof o == "object" && o !== null
      ? (l.context = nt(o))
      : ((o = Be(t) ? Xt : Pe.current), (l.context = wn(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (Ko(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && al.enqueueReplaceState(l, l.state, null),
        tl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Pn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += Y(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function qo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Xo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var id = typeof WeakMap == "function" ? WeakMap : Map;
  function Oa(e, t, n) {
    ((n = Et(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (hl || ((hl = !0), (di = r)), Xo(e, t));
      }),
      n
    );
  }
  function Fa(e, t, n) {
    ((n = Et(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Xo(e, t);
        }));
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          (Xo(e, t),
            typeof r != "function" &&
              ($t === null ? ($t = new Set([this])) : $t.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : "",
          });
        }),
      n
    );
  }
  function Ma(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new id();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = wd.bind(null, e, t, n)), t.then(e, e));
  }
  function Ia(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ba(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Et(-1, 1)), (t.tag = 2), Ut(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var sd = we.ReactCurrentOwner,
    Ge = !1;
  function De(e, t, n, r) {
    t.child = e === null ? la(t, null, n, r) : jn(t, e.child, n, r);
  }
  function Ga(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      En(t, l),
      (r = Ao(e, t, n, r, o, l)),
      (n = $o()),
      e !== null && !Ge
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          _t(e, t, l))
        : (ue && n && jo(t), (t.flags |= 1), De(e, t, r, l), t.child)
    );
  }
  function Ua(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !xi(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Aa(e, t, o, r, l))
        : ((e = kl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var i = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Zn), n(i, r) && e.ref === t.ref)
      )
        return _t(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Qt(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Aa(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Zn(o, r) && e.ref === t.ref)
        if (((Ge = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ge = !0);
        else return ((t.lanes = e.lanes), _t(e, t, l));
    }
    return Zo(e, t, n, r, l);
  }
  function $a(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          le(Tn, Xe),
          (Xe |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            le(Tn, Xe),
            (Xe |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          le(Tn, Xe),
          (Xe |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        le(Tn, Xe),
        (Xe |= r));
    return (De(e, t, l, n), t.child);
  }
  function Va(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Zo(e, t, n, r, l) {
    var o = Be(n) ? Xt : Pe.current;
    return (
      (o = wn(t, o)),
      En(t, l),
      (n = Ao(e, t, n, r, o, l)),
      (r = $o()),
      e !== null && !Ge
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          _t(e, t, l))
        : (ue && r && jo(t), (t.flags |= 1), De(e, t, n, l), t.child)
    );
  }
  function Ha(e, t, n, r, l) {
    if (Be(n)) {
      var o = !0;
      Qr(t);
    } else o = !1;
    if ((En(t, l), t.stateNode === null))
      (cl(e, t), La(t, n, r), Yo(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        a = t.memoizedProps;
      i.props = a;
      var u = i.context,
        h = n.contextType;
      typeof h == "object" && h !== null
        ? (h = nt(h))
        : ((h = Be(n) ? Xt : Pe.current), (h = wn(t, h)));
      var y = n.getDerivedStateFromProps,
        k =
          typeof y == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function";
      (k ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((a !== r || u !== h) && Da(t, i, r, h)),
        (Gt = !1));
      var g = t.memoizedState;
      ((i.state = g),
        tl(t, r, i, l),
        (u = t.memoizedState),
        a !== r || g !== u || Ie.current || Gt
          ? (typeof y == "function" && (Ko(t, n, y, r), (u = t.memoizedState)),
            (a = Gt || Ra(t, n, a, r, g, u, h))
              ? (k ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = u)),
            (i.props = r),
            (i.state = u),
            (i.context = h),
            (r = a))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((i = t.stateNode),
        ia(e, t),
        (a = t.memoizedProps),
        (h = t.type === t.elementType ? a : ct(t.type, a)),
        (i.props = h),
        (k = t.pendingProps),
        (g = i.context),
        (u = n.contextType),
        typeof u == "object" && u !== null
          ? (u = nt(u))
          : ((u = Be(n) ? Xt : Pe.current), (u = wn(t, u))));
      var C = n.getDerivedStateFromProps;
      ((y =
        typeof C == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((a !== k || g !== u) && Da(t, i, r, u)),
        (Gt = !1),
        (g = t.memoizedState),
        (i.state = g),
        tl(t, r, i, l));
      var _ = t.memoizedState;
      a !== k || g !== _ || Ie.current || Gt
        ? (typeof C == "function" && (Ko(t, n, C, r), (_ = t.memoizedState)),
          (h = Gt || Ra(t, n, h, r, g, _, u) || !1)
            ? (y ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(r, _, u),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, _, u)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (a === e.memoizedProps && g === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (a === e.memoizedProps && g === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = _)),
          (i.props = r),
          (i.state = _),
          (i.context = u),
          (r = h))
        : (typeof i.componentDidUpdate != "function" ||
            (a === e.memoizedProps && g === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (a === e.memoizedProps && g === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Jo(e, t, n, r, o, l);
  }
  function Jo(e, t, n, r, l, o) {
    Va(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && qs(t, n, !1), _t(e, t, o));
    ((r = t.stateNode), (sd.current = t));
    var a =
      i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = jn(t, e.child, null, o)), (t.child = jn(t, null, a, o)))
        : De(e, t, a, o),
      (t.memoizedState = r.state),
      l && qs(t, n, !0),
      t.child
    );
  }
  function Wa(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Ks(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ks(e, t.context, !1),
      Fo(e, t.containerInfo));
  }
  function Qa(e, t, n, r, l) {
    return (Nn(), Po(l), (t.flags |= 256), De(e, t, n, r), t.child);
  }
  var bo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ei(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ka(e, t, n) {
    var r = t.pendingProps,
      l = de.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      a;
    if (
      ((a = i) ||
        (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      a
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      le(de, l & 1),
      e === null)
    )
      return (
        _o(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((i = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (i = { mode: "hidden", children: i }),
                (r & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = i))
                  : (o = Sl(i, r, 0, null)),
                (e = sn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = ei(n)),
                (t.memoizedState = bo),
                e)
              : ti(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
      return ad(e, t, i, r, a, l, n);
    if (o) {
      ((o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling));
      var u = { mode: "hidden", children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = u),
            (t.deletions = null))
          : ((r = Qt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        a !== null ? (o = Qt(a, o)) : ((o = sn(o, i, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? ei(n)
            : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions,
              }),
        (o.memoizedState = i),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = bo),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = Qt(o, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function ti(e, t) {
    return (
      (t = Sl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ul(e, t, n, r) {
    return (
      r !== null && Po(r),
      jn(t, e.child, null, n),
      (e = ti(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function ad(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = qo(Error(m(422)))), ul(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = Sl({ mode: "visible", children: r.children }, l, 0, null)),
            (o = sn(o, l, i, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && jn(t, e.child, null, i),
            (t.child.memoizedState = ei(i)),
            (t.memoizedState = bo),
            o);
    if ((t.mode & 1) === 0) return ul(e, t, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
      return (
        (r = a),
        (o = Error(m(419))),
        (r = qo(o, r, void 0)),
        ul(e, t, i, r)
      );
    }
    if (((a = (i & e.childLanes) !== 0), Ge || a)) {
      if (((r = Se), r !== null)) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), Ct(e, l), pt(r, e, l, -1)));
      }
      return (gi(), (r = qo(Error(m(421)))), ul(e, t, i, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = kd.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (qe = Ft(l.nextSibling)),
        (Ye = t),
        (ue = !0),
        (ut = null),
        e !== null &&
          ((et[tt++] = Nt),
          (et[tt++] = jt),
          (et[tt++] = Zt),
          (Nt = e.id),
          (jt = e.overflow),
          (Zt = t)),
        (t = ti(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Ya(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Lo(e.return, t, n));
  }
  function ni(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function qa(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((De(e, t, r.children, n), (r = de.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ya(e, n, t);
          else if (e.tag === 19) Ya(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((le(de, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && nl(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            ni(t, !1, l, n, o));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && nl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          ni(t, !0, n, null, o);
          break;
        case "together":
          ni(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function cl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function _t(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (nn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = Qt(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function ud(e, t, n) {
    switch (t.tag) {
      case 3:
        (Wa(t), Nn());
        break;
      case 5:
        ua(t);
        break;
      case 1:
        Be(t.type) && Qr(t);
        break;
      case 4:
        Fo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (le(Jr, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (le(de, de.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Ka(e, t, n)
              : (le(de, de.current & 1),
                (e = _t(e, t, n)),
                e !== null ? e.sibling : null);
        le(de, de.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return qa(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          le(de, de.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), $a(e, t, n));
    }
    return _t(e, t, n);
  }
  var Xa, ri, Za, Ja;
  ((Xa = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (ri = function () {}),
    (Za = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), en(gt.current));
        var o = null;
        switch (n) {
          case "input":
            ((l = Rl(e, l)), (r = Rl(e, r)), (o = []));
            break;
          case "select":
            ((l = x({}, l, { value: void 0 })),
              (r = x({}, r, { value: void 0 })),
              (o = []));
            break;
          case "textarea":
            ((l = Ol(e, l)), (r = Ol(e, r)), (o = []));
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Vr);
        }
        Ml(n, r);
        var i;
        n = null;
        for (h in l)
          if (!r.hasOwnProperty(h) && l.hasOwnProperty(h) && l[h] != null)
            if (h === "style") {
              var a = l[h];
              for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
            } else
              h !== "dangerouslySetInnerHTML" &&
                h !== "children" &&
                h !== "suppressContentEditableWarning" &&
                h !== "suppressHydrationWarning" &&
                h !== "autoFocus" &&
                (z.hasOwnProperty(h)
                  ? o || (o = [])
                  : (o = o || []).push(h, null));
        for (h in r) {
          var u = r[h];
          if (
            ((a = l != null ? l[h] : void 0),
            r.hasOwnProperty(h) && u !== a && (u != null || a != null))
          )
            if (h === "style")
              if (a) {
                for (i in a)
                  !a.hasOwnProperty(i) ||
                    (u && u.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ""));
                for (i in u)
                  u.hasOwnProperty(i) &&
                    a[i] !== u[i] &&
                    (n || (n = {}), (n[i] = u[i]));
              } else (n || (o || (o = []), o.push(h, n)), (n = u));
            else
              h === "dangerouslySetInnerHTML"
                ? ((u = u ? u.__html : void 0),
                  (a = a ? a.__html : void 0),
                  u != null && a !== u && (o = o || []).push(h, u))
                : h === "children"
                  ? (typeof u != "string" && typeof u != "number") ||
                    (o = o || []).push(h, "" + u)
                  : h !== "suppressContentEditableWarning" &&
                    h !== "suppressHydrationWarning" &&
                    (z.hasOwnProperty(h)
                      ? (u != null && h === "onScroll" && oe("scroll", e),
                        o || a === u || (o = []))
                      : (o = o || []).push(h, u));
        }
        n && (o = o || []).push("style", n);
        var h = o;
        (t.updateQueue = h) && (t.flags |= 4);
      }
    }),
    (Ja = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function fr(e, t) {
    if (!ue)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function cd(e, t, n) {
    var r = t.pendingProps;
    switch ((Co(t), t.tag)) {
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
        return (Te(t), null);
      case 1:
        return (Be(t.type) && Wr(), Te(t), null);
      case 3:
        return (
          (r = t.stateNode),
          _n(),
          ie(Ie),
          ie(Pe),
          Bo(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Xr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ut !== null && (mi(ut), (ut = null)))),
          ri(e, t),
          Te(t),
          null
        );
      case 5:
        Mo(t);
        var l = en(sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Za(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return (Te(t), null);
          }
          if (((e = en(gt.current)), Xr(t))) {
            ((r = t.stateNode), (n = t.type));
            var o = t.memoizedProps;
            switch (((r[vt] = t), (r[nr] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (oe("cancel", r), oe("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bn.length; l++) oe(bn[l], r);
                break;
              case "source":
                oe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (oe("error", r), oe("load", r));
                break;
              case "details":
                oe("toggle", r);
                break;
              case "input":
                (Li(r, o), oe("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!o.multiple }),
                  oe("invalid", r));
                break;
              case "textarea":
                (Fi(r, o), oe("invalid", r));
            }
            (Ml(n, o), (l = null));
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var a = o[i];
                i === "children"
                  ? typeof a == "string"
                    ? r.textContent !== a &&
                      (o.suppressHydrationWarning !== !0 &&
                        $r(r.textContent, a, e),
                      (l = ["children", a]))
                    : typeof a == "number" &&
                      r.textContent !== "" + a &&
                      (o.suppressHydrationWarning !== !0 &&
                        $r(r.textContent, a, e),
                      (l = ["children", "" + a]))
                  : z.hasOwnProperty(i) &&
                    a != null &&
                    i === "onScroll" &&
                    oe("scroll", r);
              }
            switch (n) {
              case "input":
                (yr(r), Oi(r, o, !0));
                break;
              case "textarea":
                (yr(r), Ii(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Vr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Bi(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = i.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = i.createElement(n, { is: r.is }))
                    : ((e = i.createElement(n)),
                      n === "select" &&
                        ((i = e),
                        r.multiple
                          ? (i.multiple = !0)
                          : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, n)),
              (e[vt] = t),
              (e[nr] = r),
              Xa(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = Il(n, r)), n)) {
                case "dialog":
                  (oe("cancel", e), oe("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (oe("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bn.length; l++) oe(bn[l], e);
                  l = r;
                  break;
                case "source":
                  (oe("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (oe("error", e), oe("load", e), (l = r));
                  break;
                case "details":
                  (oe("toggle", e), (l = r));
                  break;
                case "input":
                  (Li(e, r), (l = Rl(e, r)), oe("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = x({}, r, { value: void 0 })),
                    oe("invalid", e));
                  break;
                case "textarea":
                  (Fi(e, r), (l = Ol(e, r)), oe("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Ml(n, l), (a = l));
              for (o in a)
                if (a.hasOwnProperty(o)) {
                  var u = a[o];
                  o === "style"
                    ? Ai(e, u)
                    : o === "dangerouslySetInnerHTML"
                      ? ((u = u ? u.__html : void 0), u != null && Gi(e, u))
                      : o === "children"
                        ? typeof u == "string"
                          ? (n !== "textarea" || u !== "") && On(e, u)
                          : typeof u == "number" && On(e, "" + u)
                        : o !== "suppressContentEditableWarning" &&
                          o !== "suppressHydrationWarning" &&
                          o !== "autoFocus" &&
                          (z.hasOwnProperty(o)
                            ? u != null && o === "onScroll" && oe("scroll", e)
                            : u != null && He(e, o, u, i));
                }
              switch (n) {
                case "input":
                  (yr(e), Oi(e, r, !1));
                  break;
                case "textarea":
                  (yr(e), Ii(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + te(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? an(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        an(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Vr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Te(t), null);
      case 6:
        if (e && t.stateNode != null) Ja(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = en(sr.current)), en(gt.current), Xr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[vt] = t),
              (o = r.nodeValue !== n) && ((e = Ye), e !== null))
            )
              switch (e.tag) {
                case 3:
                  $r(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    $r(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[vt] = t),
              (t.stateNode = r));
        }
        return (Te(t), null);
      case 13:
        if (
          (ie(de),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ue && qe !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (ta(), Nn(), (t.flags |= 98560), (o = !1));
          else if (((o = Xr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(m(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(m(317));
              o[vt] = t;
            } else
              (Nn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Te(t), (o = !1));
          } else (ut !== null && (mi(ut), (ut = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (de.current & 1) !== 0
                  ? ye === 0 && (ye = 3)
                  : gi())),
            t.updateQueue !== null && (t.flags |= 4),
            Te(t),
            null);
      case 4:
        return (
          _n(),
          ri(e, t),
          e === null && er(t.stateNode.containerInfo),
          Te(t),
          null
        );
      case 10:
        return (Ro(t.type._context), Te(t), null);
      case 17:
        return (Be(t.type) && Wr(), Te(t), null);
      case 19:
        if ((ie(de), (o = t.memoizedState), o === null)) return (Te(t), null);
        if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) fr(o, !1);
          else {
            if (ye !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = nl(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      fr(o, !1),
                      r = i.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (i = o.alternate),
                      i === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = i.childLanes),
                          (o.lanes = i.lanes),
                          (o.child = i.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = i.memoizedProps),
                          (o.memoizedState = i.memoizedState),
                          (o.updateQueue = i.updateQueue),
                          (o.type = i.type),
                          (e = i.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (le(de, (de.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              he() > Rn &&
              ((t.flags |= 128), (r = !0), fr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = nl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                fr(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !i.alternate &&
                  !ue)
              )
                return (Te(t), null);
            } else
              2 * he() - o.renderingStartTime > Rn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), fr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = o.last),
              n !== null ? (n.sibling = i) : (t.child = i),
              (o.last = i));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = he()),
            (t.sibling = null),
            (n = de.current),
            le(de, r ? (n & 1) | 2 : n & 1),
            t)
          : (Te(t), null);
      case 22:
      case 23:
        return (
          vi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Xe & 1073741824) !== 0 &&
              (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Te(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function dd(e, t) {
    switch ((Co(t), t.tag)) {
      case 1:
        return (
          Be(t.type) && Wr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          _n(),
          ie(Ie),
          ie(Pe),
          Bo(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (Mo(t), null);
      case 13:
        if (
          (ie(de), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(m(340));
          Nn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (ie(de), null);
      case 4:
        return (_n(), null);
      case 10:
        return (Ro(t.type._context), null);
      case 22:
      case 23:
        return (vi(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var dl = !1,
    Re = !1,
    fd = typeof WeakSet == "function" ? WeakSet : Set,
    E = null;
  function zn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          me(e, t, r);
        }
      else n.current = null;
  }
  function li(e, t, n) {
    try {
      n();
    } catch (r) {
      me(e, t, r);
    }
  }
  var ba = !1;
  function pd(e, t) {
    if (((vo = Rr), (e = Rs()), so(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, o.nodeType);
            } catch {
              n = null;
              break e;
            }
            var i = 0,
              a = -1,
              u = -1,
              h = 0,
              y = 0,
              k = e,
              g = null;
            t: for (;;) {
              for (
                var C;
                k !== n || (l !== 0 && k.nodeType !== 3) || (a = i + l),
                  k !== o || (r !== 0 && k.nodeType !== 3) || (u = i + r),
                  k.nodeType === 3 && (i += k.nodeValue.length),
                  (C = k.firstChild) !== null;
              )
                ((g = k), (k = C));
              for (;;) {
                if (k === e) break t;
                if (
                  (g === n && ++h === l && (a = i),
                  g === o && ++y === r && (u = i),
                  (C = k.nextSibling) !== null)
                )
                  break;
                ((k = g), (g = k.parentNode));
              }
              k = C;
            }
            n = a === -1 || u === -1 ? null : { start: a, end: u };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      go = { focusedElem: e, selectionRange: n }, Rr = !1, E = t;
      E !== null;
    )
      if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (E = e));
      else
        for (; E !== null; ) {
          t = E;
          try {
            var _ = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (_ !== null) {
                    var P = _.memoizedProps,
                      ve = _.memoizedState,
                      f = t.stateNode,
                      d = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? P : ct(t.type, P),
                        ve,
                      );
                    f.__reactInternalSnapshotBeforeUpdate = d;
                  }
                  break;
                case 3:
                  var p = t.stateNode.containerInfo;
                  p.nodeType === 1
                    ? (p.textContent = "")
                    : p.nodeType === 9 &&
                      p.documentElement &&
                      p.removeChild(p.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (S) {
            me(t, t.return, S);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (E = e));
            break;
          }
          E = t.return;
        }
    return ((_ = ba), (ba = !1), _);
  }
  function pr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          ((l.destroy = void 0), o !== void 0 && li(t, n, o));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function fl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function oi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function eu(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), eu(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[vt],
          delete t[nr],
          delete t[ko],
          delete t[qc],
          delete t[Xc])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function tu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function nu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || tu(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ii(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Vr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ii(e, t, n), e = e.sibling; e !== null; )
        (ii(e, t, n), (e = e.sibling));
  }
  function si(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (si(e, t, n), e = e.sibling; e !== null; )
        (si(e, t, n), (e = e.sibling));
  }
  var je = null,
    dt = !1;
  function At(e, t, n) {
    for (n = n.child; n !== null; ) (ru(e, t, n), (n = n.sibling));
  }
  function ru(e, t, n) {
    if (ht && typeof ht.onCommitFiberUnmount == "function")
      try {
        ht.onCommitFiberUnmount(Cr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Re || zn(n, t);
      case 6:
        var r = je,
          l = dt;
        ((je = null),
          At(e, t, n),
          (je = r),
          (dt = l),
          je !== null &&
            (dt
              ? ((e = je),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : je.removeChild(n.stateNode)));
        break;
      case 18:
        je !== null &&
          (dt
            ? ((e = je),
              (n = n.stateNode),
              e.nodeType === 8
                ? wo(e.parentNode, n)
                : e.nodeType === 1 && wo(e, n),
              Wn(e))
            : wo(je, n.stateNode));
        break;
      case 4:
        ((r = je),
          (l = dt),
          (je = n.stateNode.containerInfo),
          (dt = !0),
          At(e, t, n),
          (je = r),
          (dt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Re &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              i = o.destroy;
            ((o = o.tag),
              i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && li(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        At(e, t, n);
        break;
      case 1:
        if (
          !Re &&
          (zn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (a) {
            me(n, t, a);
          }
        At(e, t, n);
        break;
      case 21:
        At(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Re = (r = Re) || n.memoizedState !== null), At(e, t, n), (Re = r))
          : At(e, t, n);
        break;
      default:
        At(e, t, n);
    }
  }
  function lu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new fd()),
        t.forEach(function (r) {
          var l = Sd.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function ft(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            i = t,
            a = i;
          e: for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                ((je = a.stateNode), (dt = !1));
                break e;
              case 3:
                ((je = a.stateNode.containerInfo), (dt = !0));
                break e;
              case 4:
                ((je = a.stateNode.containerInfo), (dt = !0));
                break e;
            }
            a = a.return;
          }
          if (je === null) throw Error(m(160));
          (ru(o, i, l), (je = null), (dt = !1));
          var u = l.alternate;
          (u !== null && (u.return = null), (l.return = null));
        } catch (h) {
          me(l, t, h);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (ou(t, e), (t = t.sibling));
  }
  function ou(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ft(t, e), yt(e), r & 4)) {
          try {
            (pr(3, e, e.return), fl(3, e));
          } catch (P) {
            me(e, e.return, P);
          }
          try {
            pr(5, e, e.return);
          } catch (P) {
            me(e, e.return, P);
          }
        }
        break;
      case 1:
        (ft(t, e), yt(e), r & 512 && n !== null && zn(n, n.return));
        break;
      case 5:
        if (
          (ft(t, e),
          yt(e),
          r & 512 && n !== null && zn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            On(l, "");
          } catch (P) {
            me(e, e.return, P);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = n !== null ? n.memoizedProps : o,
            a = e.type,
            u = e.updateQueue;
          if (((e.updateQueue = null), u !== null))
            try {
              (a === "input" &&
                o.type === "radio" &&
                o.name != null &&
                Di(l, o),
                Il(a, i));
              var h = Il(a, o);
              for (i = 0; i < u.length; i += 2) {
                var y = u[i],
                  k = u[i + 1];
                y === "style"
                  ? Ai(l, k)
                  : y === "dangerouslySetInnerHTML"
                    ? Gi(l, k)
                    : y === "children"
                      ? On(l, k)
                      : He(l, y, k, h);
              }
              switch (a) {
                case "input":
                  Ll(l, o);
                  break;
                case "textarea":
                  Mi(l, o);
                  break;
                case "select":
                  var g = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var C = o.value;
                  C != null
                    ? an(l, !!o.multiple, C, !1)
                    : g !== !!o.multiple &&
                      (o.defaultValue != null
                        ? an(l, !!o.multiple, o.defaultValue, !0)
                        : an(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[nr] = o;
            } catch (P) {
              me(e, e.return, P);
            }
        }
        break;
      case 6:
        if ((ft(t, e), yt(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          ((l = e.stateNode), (o = e.memoizedProps));
          try {
            l.nodeValue = o;
          } catch (P) {
            me(e, e.return, P);
          }
        }
        break;
      case 3:
        if (
          (ft(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Wn(t.containerInfo);
          } catch (P) {
            me(e, e.return, P);
          }
        break;
      case 4:
        (ft(t, e), yt(e));
        break;
      case 13:
        (ft(t, e),
          yt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (ci = he())),
          r & 4 && lu(e));
        break;
      case 22:
        if (
          ((y = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Re = (h = Re) || y), ft(t, e), (Re = h)) : ft(t, e),
          yt(e),
          r & 8192)
        ) {
          if (
            ((h = e.memoizedState !== null),
            (e.stateNode.isHidden = h) && !y && (e.mode & 1) !== 0)
          )
            for (E = e, y = e.child; y !== null; ) {
              for (k = E = y; E !== null; ) {
                switch (((g = E), (C = g.child), g.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    pr(4, g, g.return);
                    break;
                  case 1:
                    zn(g, g.return);
                    var _ = g.stateNode;
                    if (typeof _.componentWillUnmount == "function") {
                      ((r = g), (n = g.return));
                      try {
                        ((t = r),
                          (_.props = t.memoizedProps),
                          (_.state = t.memoizedState),
                          _.componentWillUnmount());
                      } catch (P) {
                        me(r, n, P);
                      }
                    }
                    break;
                  case 5:
                    zn(g, g.return);
                    break;
                  case 22:
                    if (g.memoizedState !== null) {
                      au(k);
                      continue;
                    }
                }
                C !== null ? ((C.return = g), (E = C)) : au(k);
              }
              y = y.sibling;
            }
          e: for (y = null, k = e; ; ) {
            if (k.tag === 5) {
              if (y === null) {
                y = k;
                try {
                  ((l = k.stateNode),
                    h
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((a = k.stateNode),
                        (u = k.memoizedProps.style),
                        (i =
                          u != null && u.hasOwnProperty("display")
                            ? u.display
                            : null),
                        (a.style.display = Ui("display", i))));
                } catch (P) {
                  me(e, e.return, P);
                }
              }
            } else if (k.tag === 6) {
              if (y === null)
                try {
                  k.stateNode.nodeValue = h ? "" : k.memoizedProps;
                } catch (P) {
                  me(e, e.return, P);
                }
            } else if (
              ((k.tag !== 22 && k.tag !== 23) ||
                k.memoizedState === null ||
                k === e) &&
              k.child !== null
            ) {
              ((k.child.return = k), (k = k.child));
              continue;
            }
            if (k === e) break e;
            for (; k.sibling === null; ) {
              if (k.return === null || k.return === e) break e;
              (y === k && (y = null), (k = k.return));
            }
            (y === k && (y = null),
              (k.sibling.return = k.return),
              (k = k.sibling));
          }
        }
        break;
      case 19:
        (ft(t, e), yt(e), r & 4 && lu(e));
        break;
      case 21:
        break;
      default:
        (ft(t, e), yt(e));
    }
  }
  function yt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (tu(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (On(l, ""), (r.flags &= -33));
            var o = nu(e);
            si(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              a = nu(e);
            ii(e, a, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (u) {
        me(e, e.return, u);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function md(e, t, n) {
    ((E = e), iu(e));
  }
  function iu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || dl;
        if (!i) {
          var a = l.alternate,
            u = (a !== null && a.memoizedState !== null) || Re;
          a = dl;
          var h = Re;
          if (((dl = i), (Re = u) && !h))
            for (E = l; E !== null; )
              ((i = E),
                (u = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? uu(l)
                  : u !== null
                    ? ((u.return = i), (E = u))
                    : uu(l));
          for (; o !== null; ) ((E = o), iu(o), (o = o.sibling));
          ((E = l), (dl = a), (Re = h));
        }
        su(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && o !== null
          ? ((o.return = l), (E = o))
          : su(e);
    }
  }
  function su(e) {
    for (; E !== null; ) {
      var t = E;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Re || fl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Re)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : ct(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var o = t.updateQueue;
                o !== null && aa(t, o, r);
                break;
              case 3:
                var i = t.updateQueue;
                if (i !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  aa(t, i, n);
                }
                break;
              case 5:
                var a = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = a;
                  var u = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      u.autoFocus && n.focus();
                      break;
                    case "img":
                      u.src && (n.src = u.src);
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
                  var h = t.alternate;
                  if (h !== null) {
                    var y = h.memoizedState;
                    if (y !== null) {
                      var k = y.dehydrated;
                      k !== null && Wn(k);
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
                throw Error(m(163));
            }
          Re || (t.flags & 512 && oi(t));
        } catch (g) {
          me(t, t.return, g);
        }
      }
      if (t === e) {
        E = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (E = n));
        break;
      }
      E = t.return;
    }
  }
  function au(e) {
    for (; E !== null; ) {
      var t = E;
      if (t === e) {
        E = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (E = n));
        break;
      }
      E = t.return;
    }
  }
  function uu(e) {
    for (; E !== null; ) {
      var t = E;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              fl(4, t);
            } catch (u) {
              me(t, n, u);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (u) {
                me(t, l, u);
              }
            }
            var o = t.return;
            try {
              oi(t);
            } catch (u) {
              me(t, o, u);
            }
            break;
          case 5:
            var i = t.return;
            try {
              oi(t);
            } catch (u) {
              me(t, i, u);
            }
        }
      } catch (u) {
        me(t, t.return, u);
      }
      if (t === e) {
        E = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        ((a.return = t.return), (E = a));
        break;
      }
      E = t.return;
    }
  }
  var hd = Math.ceil,
    pl = we.ReactCurrentDispatcher,
    ai = we.ReactCurrentOwner,
    lt = we.ReactCurrentBatchConfig,
    J = 0,
    Se = null,
    ge = null,
    Ce = 0,
    Xe = 0,
    Tn = Mt(0),
    ye = 0,
    mr = null,
    nn = 0,
    ml = 0,
    ui = 0,
    hr = null,
    Ue = null,
    ci = 0,
    Rn = 1 / 0,
    Pt = null,
    hl = !1,
    di = null,
    $t = null,
    vl = !1,
    Vt = null,
    gl = 0,
    vr = 0,
    fi = null,
    xl = -1,
    yl = 0;
  function Oe() {
    return (J & 6) !== 0 ? he() : xl !== -1 ? xl : (xl = he());
  }
  function Ht(e) {
    return (e.mode & 1) === 0
      ? 1
      : (J & 2) !== 0 && Ce !== 0
        ? Ce & -Ce
        : Jc.transition !== null
          ? (yl === 0 && (yl = ns()), yl)
          : ((e = ne),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : ds(e.type))),
            e);
  }
  function pt(e, t, n, r) {
    if (50 < vr) throw ((vr = 0), (fi = null), Error(m(185)));
    (Un(e, n, r),
      ((J & 2) === 0 || e !== Se) &&
        (e === Se && ((J & 2) === 0 && (ml |= n), ye === 4 && Wt(e, Ce)),
        Ae(e, r),
        n === 1 &&
          J === 0 &&
          (t.mode & 1) === 0 &&
          ((Rn = he() + 500), Kr && Bt())));
  }
  function Ae(e, t) {
    var n = e.callbackNode;
    Ju(e, t);
    var r = Pr(e, e === Se ? Ce : 0);
    if (r === 0)
      (n !== null && bi(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && bi(n), t === 1))
        (e.tag === 0 ? Zc(du.bind(null, e)) : Xs(du.bind(null, e)),
          Kc(function () {
            (J & 6) === 0 && Bt();
          }),
          (n = null));
      else {
        switch (rs(r)) {
          case 1:
            n = Hl;
            break;
          case 4:
            n = es;
            break;
          case 16:
            n = jr;
            break;
          case 536870912:
            n = ts;
            break;
          default:
            n = jr;
        }
        n = yu(n, cu.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function cu(e, t) {
    if (((xl = -1), (yl = 0), (J & 6) !== 0)) throw Error(m(327));
    var n = e.callbackNode;
    if (Ln() && e.callbackNode !== n) return null;
    var r = Pr(e, e === Se ? Ce : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = wl(e, r);
    else {
      t = r;
      var l = J;
      J |= 2;
      var o = pu();
      (Se !== e || Ce !== t) && ((Pt = null), (Rn = he() + 500), ln(e, t));
      do
        try {
          xd();
          break;
        } catch (a) {
          fu(e, a);
        }
      while (!0);
      (To(),
        (pl.current = o),
        (J = l),
        ge !== null ? (t = 0) : ((Se = null), (Ce = 0), (t = ye)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Wl(e)), l !== 0 && ((r = l), (t = pi(e, l)))),
        t === 1)
      )
        throw ((n = mr), ln(e, 0), Wt(e, r), Ae(e, he()), n);
      if (t === 6) Wt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !vd(l) &&
            ((t = wl(e, r)),
            t === 2 && ((o = Wl(e)), o !== 0 && ((r = o), (t = pi(e, o)))),
            t === 1))
        )
          throw ((n = mr), ln(e, 0), Wt(e, r), Ae(e, he()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            on(e, Ue, Pt);
            break;
          case 3:
            if (
              (Wt(e, r),
              (r & 130023424) === r && ((t = ci + 500 - he()), 10 < t))
            ) {
              if (Pr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Oe(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = yo(on.bind(null, e, Ue, Pt), t);
              break;
            }
            on(e, Ue, Pt);
            break;
          case 4:
            if ((Wt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - st(r);
              ((o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o));
            }
            if (
              ((r = l),
              (r = he() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * hd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = yo(on.bind(null, e, Ue, Pt), r);
              break;
            }
            on(e, Ue, Pt);
            break;
          case 5:
            on(e, Ue, Pt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return (Ae(e, he()), e.callbackNode === n ? cu.bind(null, e) : null);
  }
  function pi(e, t) {
    var n = hr;
    return (
      e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
      (e = wl(e, t)),
      e !== 2 && ((t = Ue), (Ue = n), t !== null && mi(t)),
      e
    );
  }
  function mi(e) {
    Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
  }
  function vd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!at(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Wt(e, t) {
    for (
      t &= ~ui,
        t &= ~ml,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - st(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function du(e) {
    if ((J & 6) !== 0) throw Error(m(327));
    Ln();
    var t = Pr(e, 0);
    if ((t & 1) === 0) return (Ae(e, he()), null);
    var n = wl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Wl(e);
      r !== 0 && ((t = r), (n = pi(e, r)));
    }
    if (n === 1) throw ((n = mr), ln(e, 0), Wt(e, t), Ae(e, he()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      on(e, Ue, Pt),
      Ae(e, he()),
      null
    );
  }
  function hi(e, t) {
    var n = J;
    J |= 1;
    try {
      return e(t);
    } finally {
      ((J = n), J === 0 && ((Rn = he() + 500), Kr && Bt()));
    }
  }
  function rn(e) {
    Vt !== null && Vt.tag === 0 && (J & 6) === 0 && Ln();
    var t = J;
    J |= 1;
    var n = lt.transition,
      r = ne;
    try {
      if (((lt.transition = null), (ne = 1), e)) return e();
    } finally {
      ((ne = r), (lt.transition = n), (J = t), (J & 6) === 0 && Bt());
    }
  }
  function vi() {
    ((Xe = Tn.current), ie(Tn));
  }
  function ln(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Qc(n)), ge !== null))
      for (n = ge.return; n !== null; ) {
        var r = n;
        switch ((Co(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Wr());
            break;
          case 3:
            (_n(), ie(Ie), ie(Pe), Bo());
            break;
          case 5:
            Mo(r);
            break;
          case 4:
            _n();
            break;
          case 13:
            ie(de);
            break;
          case 19:
            ie(de);
            break;
          case 10:
            Ro(r.type._context);
            break;
          case 22:
          case 23:
            vi();
        }
        n = n.return;
      }
    if (
      ((Se = e),
      (ge = e = Qt(e.current, null)),
      (Ce = Xe = t),
      (ye = 0),
      (mr = null),
      (ui = ml = nn = 0),
      (Ue = hr = null),
      bt !== null)
    ) {
      for (t = 0; t < bt.length; t++)
        if (((n = bt[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var i = o.next;
            ((o.next = l), (r.next = i));
          }
          n.pending = r;
        }
      bt = null;
    }
    return e;
  }
  function fu(e, t) {
    do {
      var n = ge;
      try {
        if ((To(), (rl.current = sl), ll)) {
          for (var r = fe.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          ll = !1;
        }
        if (
          ((tn = 0),
          (ke = xe = fe = null),
          (ar = !1),
          (ur = 0),
          (ai.current = null),
          n === null || n.return === null)
        ) {
          ((ye = 1), (mr = t), (ge = null));
          break;
        }
        e: {
          var o = e,
            i = n.return,
            a = n,
            u = t;
          if (
            ((t = Ce),
            (a.flags |= 32768),
            u !== null && typeof u == "object" && typeof u.then == "function")
          ) {
            var h = u,
              y = a,
              k = y.tag;
            if ((y.mode & 1) === 0 && (k === 0 || k === 11 || k === 15)) {
              var g = y.alternate;
              g
                ? ((y.updateQueue = g.updateQueue),
                  (y.memoizedState = g.memoizedState),
                  (y.lanes = g.lanes))
                : ((y.updateQueue = null), (y.memoizedState = null));
            }
            var C = Ia(i);
            if (C !== null) {
              ((C.flags &= -257),
                Ba(C, i, a, o, t),
                C.mode & 1 && Ma(o, h, t),
                (t = C),
                (u = h));
              var _ = t.updateQueue;
              if (_ === null) {
                var P = new Set();
                (P.add(u), (t.updateQueue = P));
              } else _.add(u);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Ma(o, h, t), gi());
                break e;
              }
              u = Error(m(426));
            }
          } else if (ue && a.mode & 1) {
            var ve = Ia(i);
            if (ve !== null) {
              ((ve.flags & 65536) === 0 && (ve.flags |= 256),
                Ba(ve, i, a, o, t),
                Po(Pn(u, a)));
              break e;
            }
          }
          ((o = u = Pn(u, a)),
            ye !== 4 && (ye = 2),
            hr === null ? (hr = [o]) : hr.push(o),
            (o = i));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var f = Oa(o, u, t);
                sa(o, f);
                break e;
              case 1:
                a = u;
                var d = o.type,
                  p = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof d.getDerivedStateFromError == "function" ||
                    (p !== null &&
                      typeof p.componentDidCatch == "function" &&
                      ($t === null || !$t.has(p))))
                ) {
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var S = Fa(o, a, t);
                  sa(o, S);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        hu(n);
      } catch (R) {
        ((t = R), ge === n && n !== null && (ge = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function pu() {
    var e = pl.current;
    return ((pl.current = sl), e === null ? sl : e);
  }
  function gi() {
    ((ye === 0 || ye === 3 || ye === 2) && (ye = 4),
      Se === null ||
        ((nn & 268435455) === 0 && (ml & 268435455) === 0) ||
        Wt(Se, Ce));
  }
  function wl(e, t) {
    var n = J;
    J |= 2;
    var r = pu();
    (Se !== e || Ce !== t) && ((Pt = null), ln(e, t));
    do
      try {
        gd();
        break;
      } catch (l) {
        fu(e, l);
      }
    while (!0);
    if ((To(), (J = n), (pl.current = r), ge !== null)) throw Error(m(261));
    return ((Se = null), (Ce = 0), ye);
  }
  function gd() {
    for (; ge !== null; ) mu(ge);
  }
  function xd() {
    for (; ge !== null && !Vu(); ) mu(ge);
  }
  function mu(e) {
    var t = xu(e.alternate, e, Xe);
    ((e.memoizedProps = e.pendingProps),
      t === null ? hu(e) : (ge = t),
      (ai.current = null));
  }
  function hu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = cd(n, t, Xe)), n !== null)) {
          ge = n;
          return;
        }
      } else {
        if (((n = dd(n, t)), n !== null)) {
          ((n.flags &= 32767), (ge = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((ye = 6), (ge = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        ge = t;
        return;
      }
      ge = t = e;
    } while (t !== null);
    ye === 0 && (ye = 5);
  }
  function on(e, t, n) {
    var r = ne,
      l = lt.transition;
    try {
      ((lt.transition = null), (ne = 1), yd(e, t, n, r));
    } finally {
      ((lt.transition = l), (ne = r));
    }
    return null;
  }
  function yd(e, t, n, r) {
    do Ln();
    while (Vt !== null);
    if ((J & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(m(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = n.lanes | n.childLanes;
    if (
      (bu(e, o),
      e === Se && ((ge = Se = null), (Ce = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        vl ||
        ((vl = !0),
        yu(jr, function () {
          return (Ln(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = lt.transition), (lt.transition = null));
      var i = ne;
      ne = 1;
      var a = J;
      ((J |= 4),
        (ai.current = null),
        pd(e, n),
        ou(n, e),
        Gc(go),
        (Rr = !!vo),
        (go = vo = null),
        (e.current = n),
        md(n),
        Hu(),
        (J = a),
        (ne = i),
        (lt.transition = o));
    } else e.current = n;
    if (
      (vl && ((vl = !1), (Vt = e), (gl = l)),
      (o = e.pendingLanes),
      o === 0 && ($t = null),
      Ku(n.stateNode),
      Ae(e, he()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (hl) throw ((hl = !1), (e = di), (di = null), e);
    return (
      (gl & 1) !== 0 && e.tag !== 0 && Ln(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === fi ? vr++ : ((vr = 0), (fi = e))) : (vr = 0),
      Bt(),
      null
    );
  }
  function Ln() {
    if (Vt !== null) {
      var e = rs(gl),
        t = lt.transition,
        n = ne;
      try {
        if (((lt.transition = null), (ne = 16 > e ? 16 : e), Vt === null))
          var r = !1;
        else {
          if (((e = Vt), (Vt = null), (gl = 0), (J & 6) !== 0))
            throw Error(m(331));
          var l = J;
          for (J |= 4, E = e.current; E !== null; ) {
            var o = E,
              i = o.child;
            if ((E.flags & 16) !== 0) {
              var a = o.deletions;
              if (a !== null) {
                for (var u = 0; u < a.length; u++) {
                  var h = a[u];
                  for (E = h; E !== null; ) {
                    var y = E;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, y, o);
                    }
                    var k = y.child;
                    if (k !== null) ((k.return = y), (E = k));
                    else
                      for (; E !== null; ) {
                        y = E;
                        var g = y.sibling,
                          C = y.return;
                        if ((eu(y), y === h)) {
                          E = null;
                          break;
                        }
                        if (g !== null) {
                          ((g.return = C), (E = g));
                          break;
                        }
                        E = C;
                      }
                  }
                }
                var _ = o.alternate;
                if (_ !== null) {
                  var P = _.child;
                  if (P !== null) {
                    _.child = null;
                    do {
                      var ve = P.sibling;
                      ((P.sibling = null), (P = ve));
                    } while (P !== null);
                  }
                }
                E = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null)
              ((i.return = o), (E = i));
            else
              e: for (; E !== null; ) {
                if (((o = E), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pr(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  ((f.return = o.return), (E = f));
                  break e;
                }
                E = o.return;
              }
          }
          var d = e.current;
          for (E = d; E !== null; ) {
            i = E;
            var p = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && p !== null)
              ((p.return = i), (E = p));
            else
              e: for (i = d; E !== null; ) {
                if (((a = E), (a.flags & 2048) !== 0))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fl(9, a);
                    }
                  } catch (R) {
                    me(a, a.return, R);
                  }
                if (a === i) {
                  E = null;
                  break e;
                }
                var S = a.sibling;
                if (S !== null) {
                  ((S.return = a.return), (E = S));
                  break e;
                }
                E = a.return;
              }
          }
          if (
            ((J = l), Bt(), ht && typeof ht.onPostCommitFiberRoot == "function")
          )
            try {
              ht.onPostCommitFiberRoot(Cr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((ne = n), (lt.transition = t));
      }
    }
    return !1;
  }
  function vu(e, t, n) {
    ((t = Pn(n, t)),
      (t = Oa(e, t, 1)),
      (e = Ut(e, t, 1)),
      (t = Oe()),
      e !== null && (Un(e, 1, t), Ae(e, t)));
  }
  function me(e, t, n) {
    if (e.tag === 3) vu(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          vu(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              ($t === null || !$t.has(r)))
          ) {
            ((e = Pn(n, e)),
              (e = Fa(t, e, 1)),
              (t = Ut(t, e, 1)),
              (e = Oe()),
              t !== null && (Un(t, 1, e), Ae(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function wd(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Oe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Se === e &&
        (Ce & n) === n &&
        (ye === 4 || (ye === 3 && (Ce & 130023424) === Ce && 500 > he() - ci)
          ? ln(e, 0)
          : (ui |= n)),
      Ae(e, t));
  }
  function gu(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = _r), (_r <<= 1), (_r & 130023424) === 0 && (_r = 4194304)));
    var n = Oe();
    ((e = Ct(e, t)), e !== null && (Un(e, t, n), Ae(e, n)));
  }
  function kd(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), gu(e, n));
  }
  function Sd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    (r !== null && r.delete(t), gu(e, n));
  }
  var xu;
  xu = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ie.current) Ge = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((Ge = !1), ud(e, t, n));
        Ge = (e.flags & 131072) !== 0;
      }
    else ((Ge = !1), ue && (t.flags & 1048576) !== 0 && Zs(t, qr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (cl(e, t), (e = t.pendingProps));
        var l = wn(t, Pe.current);
        (En(t, n), (l = Ao(null, t, r, e, l, n)));
        var o = $o();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Be(r) ? ((o = !0), Qr(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Oo(t),
              (l.updater = al),
              (t.stateNode = l),
              (l._reactInternals = t),
              Yo(t, r, e, n),
              (t = Jo(null, t, r, !0, o, n)))
            : ((t.tag = 0), ue && o && jo(t), De(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (cl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = jd(r)),
            (e = ct(r, e)),
            l)
          ) {
            case 0:
              t = Zo(null, t, r, e, n);
              break e;
            case 1:
              t = Ha(null, t, r, e, n);
              break e;
            case 11:
              t = Ga(null, t, r, e, n);
              break e;
            case 14:
              t = Ua(null, t, r, ct(r.type, e), n);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          Zo(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          Ha(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Wa(t), e === null)) throw Error(m(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            ia(e, t),
            tl(t, r, null, n));
          var i = t.memoizedState;
          if (((r = i.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              ((l = Pn(Error(m(423)), t)), (t = Qa(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Pn(Error(m(424)), t)), (t = Qa(e, t, r, n, l)));
              break e;
            } else
              for (
                qe = Ft(t.stateNode.containerInfo.firstChild),
                  Ye = t,
                  ue = !0,
                  ut = null,
                  n = la(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Nn(), r === l)) {
              t = _t(e, t, n);
              break e;
            }
            De(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ua(t),
          e === null && _o(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          xo(r, l) ? (i = null) : o !== null && xo(r, o) && (t.flags |= 32),
          Va(e, t),
          De(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && _o(t), null);
      case 13:
        return Ka(e, t, n);
      case 4:
        return (
          Fo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = jn(t, null, r, n)) : De(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          Ga(e, t, r, l, n)
        );
      case 7:
        return (De(e, t, t.pendingProps, n), t.child);
      case 8:
        return (De(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (De(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (i = l.value),
            le(Jr, r._currentValue),
            (r._currentValue = i),
            o !== null)
          )
            if (at(o.value, i)) {
              if (o.children === l.children && !Ie.current) {
                t = _t(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var a = o.dependencies;
                if (a !== null) {
                  i = o.child;
                  for (var u = a.firstContext; u !== null; ) {
                    if (u.context === r) {
                      if (o.tag === 1) {
                        ((u = Et(-1, n & -n)), (u.tag = 2));
                        var h = o.updateQueue;
                        if (h !== null) {
                          h = h.shared;
                          var y = h.pending;
                          (y === null
                            ? (u.next = u)
                            : ((u.next = y.next), (y.next = u)),
                            (h.pending = u));
                        }
                      }
                      ((o.lanes |= n),
                        (u = o.alternate),
                        u !== null && (u.lanes |= n),
                        Lo(o.return, n, t),
                        (a.lanes |= n));
                      break;
                    }
                    u = u.next;
                  }
                } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((i = o.return), i === null)) throw Error(m(341));
                  ((i.lanes |= n),
                    (a = i.alternate),
                    a !== null && (a.lanes |= n),
                    Lo(i, n, t),
                    (i = o.sibling));
                } else i = o.child;
                if (i !== null) i.return = o;
                else
                  for (i = o; i !== null; ) {
                    if (i === t) {
                      i = null;
                      break;
                    }
                    if (((o = i.sibling), o !== null)) {
                      ((o.return = i.return), (i = o));
                      break;
                    }
                    i = i.return;
                  }
                o = i;
              }
          (De(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          En(t, n),
          (l = nt(l)),
          (r = r(l)),
          (t.flags |= 1),
          De(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = ct(r, t.pendingProps)),
          (l = ct(r.type, l)),
          Ua(e, t, r, l, n)
        );
      case 15:
        return Aa(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          cl(e, t),
          (t.tag = 1),
          Be(r) ? ((e = !0), Qr(t)) : (e = !1),
          En(t, n),
          La(t, r, l),
          Yo(t, r, l, n),
          Jo(null, t, r, !0, e, n)
        );
      case 19:
        return qa(e, t, n);
      case 22:
        return $a(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function yu(e, t) {
    return Ji(e, t);
  }
  function Nd(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ot(e, t, n, r) {
    return new Nd(e, t, n, r);
  }
  function xi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function jd(e) {
    if (typeof e == "function") return xi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Je)) return 11;
      if (e === be) return 14;
    }
    return 2;
  }
  function Qt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ot(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function kl(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == "function")) xi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case Ee:
          return sn(n.children, l, o, t);
        case Me:
          ((i = 8), (l |= 8));
          break;
        case mt:
          return (
            (e = ot(12, n, t, l | 2)),
            (e.elementType = mt),
            (e.lanes = o),
            e
          );
        case Le:
          return (
            (e = ot(13, n, t, l)),
            (e.elementType = Le),
            (e.lanes = o),
            e
          );
        case We:
          return (
            (e = ot(19, n, t, l)),
            (e.elementType = We),
            (e.lanes = o),
            e
          );
        case se:
          return Sl(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case it:
                i = 10;
                break e;
              case wt:
                i = 9;
                break e;
              case Je:
                i = 11;
                break e;
              case be:
                i = 14;
                break e;
              case _e:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = ot(i, n, t, l)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = o),
      t
    );
  }
  function sn(e, t, n, r) {
    return ((e = ot(7, e, r, t)), (e.lanes = n), e);
  }
  function Sl(e, t, n, r) {
    return (
      (e = ot(22, e, r, t)),
      (e.elementType = se),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function yi(e, t, n) {
    return ((e = ot(6, e, null, t)), (e.lanes = n), e);
  }
  function wi(e, t, n) {
    return (
      (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Cd(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ql(0)),
      (this.expirationTimes = Ql(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ql(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function ki(e, t, n, r, l, o, i, a, u) {
    return (
      (e = new Cd(e, t, n, a, u)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = ot(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Oo(o),
      e
    );
  }
  function Ed(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: pe,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function wu(e) {
    if (!e) return It;
    e = e._reactInternals;
    e: {
      if (Yt(e) !== e || e.tag !== 1) throw Error(m(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Be(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Be(n)) return Ys(e, n, t);
    }
    return t;
  }
  function ku(e, t, n, r, l, o, i, a, u) {
    return (
      (e = ki(n, r, !0, e, l, o, i, a, u)),
      (e.context = wu(null)),
      (n = e.current),
      (r = Oe()),
      (l = Ht(n)),
      (o = Et(r, l)),
      (o.callback = t ?? null),
      Ut(n, o, l),
      (e.current.lanes = l),
      Un(e, l, r),
      Ae(e, r),
      e
    );
  }
  function Nl(e, t, n, r) {
    var l = t.current,
      o = Oe(),
      i = Ht(l);
    return (
      (n = wu(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Et(o, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Ut(l, t, i)),
      e !== null && (pt(e, l, i, o), el(e, l, i)),
      i
    );
  }
  function jl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Su(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Si(e, t) {
    (Su(e, t), (e = e.alternate) && Su(e, t));
  }
  function _d() {
    return null;
  }
  var Nu =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ni(e) {
    this._internalRoot = e;
  }
  ((Cl.prototype.render = Ni.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      Nl(e, t, null, null);
    }),
    (Cl.prototype.unmount = Ni.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (rn(function () {
            Nl(null, e, null, null);
          }),
            (t[kt] = null));
        }
      }));
  function Cl(e) {
    this._internalRoot = e;
  }
  Cl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = is();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Lt.length && t !== 0 && t < Lt[n].priority; n++);
      (Lt.splice(n, 0, e), n === 0 && us(e));
    }
  };
  function ji(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function El(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function ju() {}
  function Pd(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var h = jl(i);
          o.call(h);
        };
      }
      var i = ku(t, r, e, 0, null, !1, !1, "", ju);
      return (
        (e._reactRootContainer = i),
        (e[kt] = i.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        rn(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var h = jl(u);
        a.call(h);
      };
    }
    var u = ki(e, 0, !1, null, null, !1, !1, "", ju);
    return (
      (e._reactRootContainer = u),
      (e[kt] = u.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      rn(function () {
        Nl(t, u, n, r);
      }),
      u
    );
  }
  function _l(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var a = l;
        l = function () {
          var u = jl(i);
          a.call(u);
        };
      }
      Nl(t, i, e, l);
    } else i = Pd(n, t, e, l, r);
    return jl(i);
  }
  ((ls = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Gn(t.pendingLanes);
          n !== 0 &&
            (Kl(t, n | 1),
            Ae(t, he()),
            (J & 6) === 0 && ((Rn = he() + 500), Bt()));
        }
        break;
      case 13:
        (rn(function () {
          var r = Ct(e, 1);
          if (r !== null) {
            var l = Oe();
            pt(r, e, 1, l);
          }
        }),
          Si(e, 1));
    }
  }),
    (Yl = function (e) {
      if (e.tag === 13) {
        var t = Ct(e, 134217728);
        if (t !== null) {
          var n = Oe();
          pt(t, e, 134217728, n);
        }
        Si(e, 134217728);
      }
    }),
    (os = function (e) {
      if (e.tag === 13) {
        var t = Ht(e),
          n = Ct(e, t);
        if (n !== null) {
          var r = Oe();
          pt(n, e, t, r);
        }
        Si(e, t);
      }
    }),
    (is = function () {
      return ne;
    }),
    (ss = function (e, t) {
      var n = ne;
      try {
        return ((ne = e), t());
      } finally {
        ne = n;
      }
    }),
    (Ul = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Ll(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Hr(r);
                if (!l) throw Error(m(90));
                (Ri(r), Ll(r, l));
              }
            }
          }
          break;
        case "textarea":
          Mi(e, n);
          break;
        case "select":
          ((t = n.value), t != null && an(e, !!n.multiple, t, !1));
      }
    }),
    (Wi = hi),
    (Qi = rn));
  var zd = { usingClientEntryPoint: !1, Events: [rr, xn, Hr, Vi, Hi, hi] },
    gr = {
      findFiberByHostInstance: qt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Td = {
      bundleType: gr.bundleType,
      version: gr.version,
      rendererPackageName: gr.rendererPackageName,
      rendererConfig: gr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: we.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Xi(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: gr.findFiberByHostInstance || _d,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pl.isDisabled && Pl.supportsFiber)
      try {
        ((Cr = Pl.inject(Td)), (ht = Pl));
      } catch {}
  }
  return (
    ($e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zd),
    ($e.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ji(t)) throw Error(m(200));
      return Ed(e, t, null, n);
    }),
    ($e.createRoot = function (e, t) {
      if (!ji(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = Nu;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = ki(e, 1, !1, null, null, n, !1, r, l)),
        (e[kt] = t.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        new Ni(t)
      );
    }),
    ($e.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return ((e = Xi(t)), (e = e === null ? null : e.stateNode), e);
    }),
    ($e.flushSync = function (e) {
      return rn(e);
    }),
    ($e.hydrate = function (e, t, n) {
      if (!El(t)) throw Error(m(200));
      return _l(null, e, t, !0, n);
    }),
    ($e.hydrateRoot = function (e, t, n) {
      if (!ji(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        i = Nu;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = ku(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[kt] = t.current),
        er(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Cl(t);
    }),
    ($e.render = function (e, t, n) {
      if (!El(t)) throw Error(m(200));
      return _l(null, e, t, !1, n);
    }),
    ($e.unmountComponentAtNode = function (e) {
      if (!El(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (rn(function () {
            _l(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[kt] = null));
            });
          }),
          !0)
        : !1;
    }),
    ($e.unstable_batchedUpdates = hi),
    ($e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!El(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return _l(e, t, n, !1, r);
    }),
    ($e.version = "18.3.1-next-f1338f8080-20240426"),
    $e
  );
}
var Lu;
function Gd() {
  if (Lu) return _i.exports;
  Lu = 1;
  function w() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w);
      } catch (j) {
        console.error(j);
      }
  }
  return (w(), (_i.exports = Bd()), _i.exports);
}
var Du;
function Ud() {
  if (Du) return zl;
  Du = 1;
  var w = Gd();
  return ((zl.createRoot = w.createRoot), (zl.hydrateRoot = w.hydrateRoot), zl);
}
var Ad = Ud();
const $d = Fu(Ad),
  Vd = ({
    cartCount: w = 0,
    onOpenCart: j,
    searchTerm: m = "",
    onSearchChange: V,
    onClearSearch: z,
    activeSection: T = "home",
  }) => {
    const [H, U] = ce.useState(!1),
      [M, I] = ce.useState(!1),
      q = ce.useRef(null),
      B = ce.useRef(null);
    (ce.useEffect(() => {
      M && q.current && q.current.focus();
    }, [M]),
      ce.useEffect(() => {
        const X = (K) => {
            B.current && !B.current.contains(K.target) && I(!1);
          },
          Q = (K) => {
            K.key === "Escape" && I(!1);
          };
        return (
          document.addEventListener("click", X),
          document.addEventListener("keydown", Q),
          () => {
            (document.removeEventListener("click", X),
              document.removeEventListener("keydown", Q));
          }
        );
      }, []));
    const $ = [
      { label: "Home", href: "#home", id: "home" },
      { label: "Categories", href: "#categories", id: "categories" },
      { label: "Menu", href: "#menu", id: "menu" },
      { label: "About", href: "#about", id: "about" },
      { label: "Services", href: "#services", id: "services" },
    ];
    return s.jsxs("header", {
      className:
        "sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300",
      children: [
        s.jsxs("div", {
          className:
            "w-[90%] max-w-[1120px] mx-auto min-h-[76px] flex items-center justify-between gap-4 sm:gap-6",
          children: [
            s.jsxs("a", {
              href: "#home",
              className:
                "text-lg sm:text-xl font-extrabold tracking-tight whitespace-nowrap text-foodiBlack flex items-center gap-2",
              children: [
                s.jsx("i", {
                  className: "fa-solid fa-utensils text-foodiGreen text-base",
                }),
                s.jsxs("span", {
                  children: [
                    "FOOD",
                    s.jsx("span", {
                      className: "text-foodiGreen",
                      children: "I",
                    }),
                  ],
                }),
              ],
            }),
            s.jsx("nav", {
              className: "hidden md:flex items-center gap-7",
              children: $.map((X) =>
                s.jsx(
                  "a",
                  {
                    href: X.href,
                    className: `text-xs font-medium transition-colors duration-200 ${T === X.id ? "text-foodiGreen-dark font-bold" : "text-gray-600 hover:text-foodiGreen-dark"}`,
                    children: X.label,
                  },
                  X.id,
                ),
              ),
            }),
            s.jsxs("div", {
              className: "flex items-center gap-3 sm:gap-4",
              children: [
                s.jsxs("div", {
                  className: "relative",
                  ref: B,
                  children: [
                    s.jsx("button", {
                      type: "button",
                      onClick: () => I(!M),
                      className:
                        "p-2 text-gray-700 hover:text-foodiGreen hover:scale-110 transition-all duration-200 text-sm sm:text-base",
                      "aria-label": "Search food",
                      children: s.jsx("i", {
                        className: "fa-solid fa-magnifying-glass",
                      }),
                    }),
                    s.jsxs("div", {
                      className: `absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-full shadow-lg px-3 py-1.5 flex items-center gap-2 transition-all duration-200 z-50 ${M ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`,
                      children: [
                        s.jsx("i", {
                          className:
                            "fa-solid fa-magnifying-glass text-gray-400 text-xs ml-1",
                        }),
                        s.jsx("input", {
                          ref: q,
                          type: "text",
                          placeholder: "Search delicious food...",
                          value: m,
                          onChange: (X) => V(X.target.value),
                          className:
                            "w-full text-xs text-foodiBlack bg-transparent outline-none py-1",
                        }),
                        m &&
                          s.jsx("button", {
                            type: "button",
                            onClick: z,
                            className:
                              "p-1 text-gray-400 hover:text-gray-700 rounded-full text-xs",
                            children: s.jsx("i", {
                              className: "fa-solid fa-xmark",
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("button", {
                  type: "button",
                  onClick: j,
                  className:
                    "relative p-2 text-foodiGreen-dark hover:scale-110 transition-all duration-200 text-base",
                  "aria-label": "View shopping cart",
                  children: [
                    s.jsx("i", { className: "fa-solid fa-bag-shopping" }),
                    s.jsx("span", {
                      className: `absolute -top-1 -right-1 bg-foodiGreen text-white text-[9px] font-bold min-w-4 h-4 px-1 rounded-full flex items-center justify-center transition-transform ${w > 0 ? "animate-cart-bump" : ""}`,
                      children: w,
                    }),
                  ],
                }),
                s.jsx("a", {
                  href: "#menu",
                  className:
                    "hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-foodiGreen hover:bg-foodiGreen-dark text-white text-xs font-semibold shadow-sm hover:-translate-y-0.5 transition-all duration-200",
                  children: "Explore Food",
                }),
                s.jsx("button", {
                  type: "button",
                  onClick: () => U(!H),
                  className:
                    "md:hidden p-2 text-xl text-foodiBlack hover:text-foodiGreen transition-colors",
                  "aria-label": "Toggle navigation",
                  children: s.jsx("i", {
                    className: `fa-solid ${H ? "fa-xmark" : "fa-bars"}`,
                  }),
                }),
              ],
            }),
          ],
        }),
        H &&
          s.jsxs("div", {
            className:
              "md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3 shadow-lg",
            children: [
              $.map((X) =>
                s.jsx(
                  "a",
                  {
                    href: X.href,
                    onClick: () => U(!1),
                    className: `text-sm py-2 border-b border-gray-50 transition-colors ${T === X.id ? "text-foodiGreen font-bold" : "text-gray-700 hover:text-foodiGreen"}`,
                    children: X.label,
                  },
                  X.id,
                ),
              ),
              s.jsx("a", {
                href: "#menu",
                onClick: () => U(!1),
                className:
                  "mt-2 text-center py-2.5 rounded-full bg-foodiGreen text-white text-xs font-semibold",
                children: "Explore Food",
              }),
            ],
          }),
      ],
    });
  },
  Hd = ({
    image: w,
    title: j,
    subtitle: m,
    rating: V,
    positionClass: z = "",
  }) =>
    s.jsxs("div", {
      className: `absolute z-10 flex items-center gap-3 p-2.5 sm:p-3 bg-white rounded-2xl shadow-foodiFloating border border-gray-100/80 transition-transform duration-300 hover:scale-105 ${z}`,
      children: [
        s.jsx("img", {
          src: w,
          alt: j,
          className: "w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover",
        }),
        s.jsxs("div", {
          children: [
            s.jsx("strong", {
              className:
                "block text-[11px] sm:text-xs font-bold text-foodiBlack",
              children: j,
            }),
            s.jsx("p", {
              className: "text-[10px] text-foodiGray font-medium leading-tight",
              children: m,
            }),
            s.jsx("span", {
              className: "text-[11px] text-amber-400 tracking-wider",
              children: V,
            }),
          ],
        }),
      ],
    }),
  Wd = [
    {
      id: "all",
      category: "All",
      title: "All Dishes",
      count: "All categories",
      icon: "🍽️",
    },
    {
      id: "main",
      category: "Main Dish",
      title: "Main Dish",
      count: "86 dishes",
      icon: "🍛",
    },
    {
      id: "breakfast",
      category: "Breakfast",
      title: "Breakfast",
      count: "12 breakfast items",
      icon: "🍳",
    },
    {
      id: "dessert",
      category: "Dessert",
      title: "Dessert",
      count: "24 desserts",
      icon: "🍰",
    },
    {
      id: "drinks",
      category: "Drink",
      title: "Drinks",
      count: "18 drinks",
      icon: "🥤",
    },
  ],
  Ou = [
    {
      id: 1,
      name: "Fattoush Salad",
      category: "Main Dish",
      price: 24,
      rating: 4.9,
      description: "Fresh garden vegetables",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=85",
    },
    {
      id: 2,
      name: "Vegetable Salad",
      category: "Main Dish",
      price: 18,
      rating: 4.8,
      description: "Healthy and delicious",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=85",
    },
    {
      id: 3,
      name: "Egg Veg Salad",
      category: "Main Dish",
      price: 22,
      rating: 4.9,
      description: "Protein-rich fresh meal",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=500&q=85",
    },
    {
      id: 4,
      name: "Classic Breakfast",
      category: "Breakfast",
      price: 15,
      rating: 4.8,
      description: "Eggs, toast and avocado",
      image:
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=85",
    },
    {
      id: 5,
      name: "Chocolate Cake",
      category: "Dessert",
      price: 12,
      rating: 4.9,
      description: "Rich chocolate dessert",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=85",
    },
    {
      id: 6,
      name: "Fresh Fruit Juice",
      category: "Drink",
      price: 8,
      rating: 4.7,
      description: "Refreshing seasonal fruits",
      image:
        "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=500&q=85",
    },
  ],
  Qd = [
    {
      id: "card-1",
      title: "Healthy Salad",
      subtitle: "Fresh & Delicious",
      rating: "★★★★★",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=120&q=80",
      positionClass: "bottom-8 left-0 sm:-left-4",
    },
    {
      id: "card-2",
      title: "Special Salad",
      subtitle: "Customer Favorite",
      rating: "★★★★★",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=120&q=80",
      positionClass: "bottom-8 right-0 sm:-right-4",
    },
  ],
  Kd = [
    {
      id: "catering",
      icon: "fa-solid fa-bowl-food",
      title: "Catering",
      description: "Perfect food for your special events and gatherings.",
    },
    {
      id: "delivery",
      icon: "fa-solid fa-headset",
      title: "Fast Delivery",
      description: "Fresh meals delivered directly to your doorstep.",
    },
    {
      id: "ordering",
      icon: "fa-solid fa-cart-shopping",
      title: "Online Ordering",
      description: "Order your favorite meals easily and quickly.",
    },
    {
      id: "gift-cards",
      icon: "fa-solid fa-gift",
      title: "Gift Cards",
      description: "Share the joy of delicious food with your loved ones.",
    },
  ],
  Tl = [
    {
      id: 1,
      name: "Sophia Bennett",
      text: "I had the pleasure of dining at Foodi last night, and I'm still talking about the exceptional experience. The attention to detail in presentation and service was truly impressive.",
      rating: "4.9",
      avatar: "https://i.pravatar.cc/60?img=12",
    },
    {
      id: 2,
      name: "David Miller",
      text: "The food was fresh, delicious, and beautifully presented. The staff were friendly, and the entire dining experience was wonderful. I will definitely visit again with family!",
      rating: "5.0",
      avatar: "https://i.pravatar.cc/60?img=47",
    },
    {
      id: 3,
      name: "Emily Watson",
      text: "Foodi has quickly become one of my favorite places to eat. The menu has something wonderful for everyone, and the quality of the ingredients is consistently top-notch.",
      rating: "4.8",
      avatar: "https://i.pravatar.cc/60?img=32",
    },
  ],
  Yd = () =>
    s.jsx("section", {
      id: "home",
      className: "pt-8 pb-14 sm:py-16 scroll-mt-24",
      children: s.jsxs("div", {
        className:
          "w-[90%] max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14",
        children: [
          s.jsxs("div", {
            className: "text-left py-4",
            children: [
              s.jsx("span", {
                className:
                  "block text-[11px] font-extrabold tracking-widest text-[#ff6666] mb-3 uppercase",
                children: "WELCOME TO FOODI",
              }),
              s.jsxs("h1", {
                className:
                  "text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.18] text-foodiBlack tracking-tight mb-5",
                children: [
                  "Dive into Delights",
                  s.jsx("br", {}),
                  "Of Delectable ",
                  s.jsx("span", {
                    className: "text-foodiGreen",
                    children: "Food",
                  }),
                ],
              }),
              s.jsx("p", {
                className:
                  "text-xs sm:text-sm text-foodiGray leading-relaxed max-w-[420px] mb-7",
                children:
                  "Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship.",
              }),
              s.jsxs("div", {
                className: "flex items-center gap-5 sm:gap-6 mb-8",
                children: [
                  s.jsx("a", {
                    href: "#menu",
                    className:
                      "inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-full bg-foodiGreen hover:bg-foodiGreen-dark text-white text-xs sm:text-sm font-semibold shadow-md hover:-translate-y-0.5 transition-all duration-200",
                    children: "Order Now",
                  }),
                  s.jsxs("a", {
                    href: "#about",
                    className:
                      "flex items-center gap-3 text-xs sm:text-sm font-semibold text-foodiBlack hover:text-foodiGreen transition-colors group",
                    children: [
                      s.jsx("span", {
                        className:
                          "w-10 h-10 rounded-full bg-white shadow-foodi flex items-center justify-center text-foodiGreen group-hover:scale-110 transition-transform",
                        children: s.jsx("i", {
                          className:
                            "fa-solid fa-play text-xs text-foodiGreen-dark",
                        }),
                      }),
                      "Watch Video",
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex items-center gap-3 pt-2",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      s.jsx("img", {
                        src: "https://i.pravatar.cc/60?img=12",
                        alt: "Customer",
                        className:
                          "w-8 h-8 rounded-full border-2 border-white object-cover",
                      }),
                      s.jsx("img", {
                        src: "https://i.pravatar.cc/60?img=47",
                        alt: "Customer",
                        className:
                          "w-8 h-8 rounded-full border-2 border-white object-cover -ml-2",
                      }),
                      s.jsx("img", {
                        src: "https://i.pravatar.cc/60?img=32",
                        alt: "Customer",
                        className:
                          "w-8 h-8 rounded-full border-2 border-white object-cover -ml-2",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("strong", {
                        className: "block text-xs font-bold text-foodiBlack",
                        children: "Our Happy Customers",
                      }),
                      s.jsxs("p", {
                        className:
                          "text-[11px] text-foodiGray flex items-center gap-1 font-medium",
                        children: [
                          s.jsx("i", {
                            className:
                              "fa-solid fa-star text-amber-400 text-xs",
                          }),
                          "4.9 (1.2k Reviews)",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className:
              "relative flex justify-center items-center min-h-[350px] sm:min-h-[420px]",
            children: [
              s.jsx("div", {
                className:
                  "absolute w-[76%] sm:w-[350px] aspect-square rounded-full bg-foodiGreen top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%]",
              }),
              s.jsx("img", {
                src: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
                alt: "Fresh and delicious food",
                className:
                  "relative z-10 w-[84%] max-h-[380px] object-contain rounded-[45%] hero-food-mask",
              }),
              Qd.map((w) =>
                s.jsx(
                  Hd,
                  {
                    title: w.title,
                    subtitle: w.subtitle,
                    rating: w.rating,
                    image: w.image,
                    positionClass: w.positionClass,
                  },
                  w.id,
                ),
              ),
            ],
          }),
        ],
      }),
    }),
  qd = ({
    category: w,
    title: j,
    count: m,
    icon: V,
    isActive: z = !1,
    onClick: T,
  }) =>
    s.jsxs("button", {
      type: "button",
      onClick: T,
      className: `p-5 sm:p-6 rounded-[22px] bg-white text-center transition-all duration-300 border text-left flex flex-col items-center justify-center focus:outline-none ${z ? "border-foodiGreen shadow-foodi -translate-y-1.5 ring-2 ring-foodiGreen/20" : "border-gray-100 shadow-foodiCard hover:-translate-y-1 hover:border-foodiGreen/40 hover:shadow-foodi"}`,
      children: [
        s.jsx("div", {
          className:
            "w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-full bg-[#e7fbe9] flex items-center justify-center text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110",
          children: V,
        }),
        s.jsx("strong", {
          className: "block text-xs sm:text-sm font-bold text-foodiBlack mb-1",
          children: j,
        }),
        s.jsx("small", {
          className: "text-[10px] sm:text-xs text-foodiGray",
          children: m,
        }),
      ],
    }),
  Xd = ({ selectedCategory: w = "All", onSelectCategory: j }) =>
    s.jsx("section", {
      id: "categories",
      className: "py-14 sm:py-20 scroll-mt-24",
      children: s.jsxs("div", {
        className: "w-[90%] max-w-[1120px] mx-auto text-center",
        children: [
          s.jsx("span", {
            className:
              "block text-[11px] font-extrabold tracking-widest text-[#ff6666] mb-2 uppercase",
            children: "CUSTOMER FAVORITES",
          }),
          s.jsx("h2", {
            className:
              "text-2xl sm:text-3xl md:text-4xl font-extrabold text-foodiBlack tracking-tight mb-8 sm:mb-10",
            children: "Popular Categories",
          }),
          s.jsx("div", {
            className:
              "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5",
            children: Wd.map((m) =>
              s.jsx(
                qd,
                {
                  category: m.category,
                  title: m.title,
                  count: m.count,
                  icon: m.icon,
                  isActive: w === m.category,
                  onClick: () => j(m.category),
                },
                m.id,
              ),
            ),
          }),
        ],
      }),
    }),
  Zd = ({
    id: w,
    name: j,
    category: m,
    price: V,
    rating: z,
    description: T,
    image: H,
    onAddToCart: U,
    isLiked: M = !1,
    onToggleLike: I,
  }) => {
    const [q, B] = ce.useState(!1),
      $ = () => {
        (U &&
          U({
            id: w,
            name: j,
            category: m,
            price: V,
            rating: z,
            description: T,
            image: H,
          }),
          B(!0),
          setTimeout(() => {
            B(!1);
          }, 1200));
      };
    return s.jsxs("article", {
      className:
        "group flex-shrink-0 w-[270px] sm:w-[280px] md:w-[310px] bg-white rounded-3xl border border-gray-100 shadow-foodiCard overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-foodi flex flex-col justify-between snap-start",
      children: [
        s.jsxs("div", {
          className: "relative h-48 sm:h-52 overflow-hidden bg-gray-50",
          children: [
            s.jsx("img", {
              src: H,
              alt: j,
              className:
                "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
              loading: "lazy",
            }),
            s.jsx("button", {
              type: "button",
              onClick: () => I && I(w),
              "aria-label": M ? "Remove from favorites" : "Add to favorites",
              className: `absolute top-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 text-white shadow-md ${M ? "bg-[#ff5a69] scale-105" : "bg-foodiGreen hover:bg-foodiGreen-dark hover:scale-110"}`,
              children: s.jsx("i", {
                className: `text-sm ${M ? "fa-solid fa-heart" : "fa-regular fa-heart"}`,
              }),
            }),
          ],
        }),
        s.jsxs("div", {
          className: "p-4 sm:p-5 flex flex-col flex-1 justify-between",
          children: [
            s.jsxs("div", {
              children: [
                s.jsx("h3", {
                  className:
                    "text-sm sm:text-base font-bold text-foodiBlack mb-1 line-clamp-1",
                  children: j,
                }),
                s.jsx("p", {
                  className: "text-xs text-foodiGray mb-3 line-clamp-1",
                  children: T,
                }),
              ],
            }),
            s.jsxs("div", {
              children: [
                s.jsxs("div", {
                  className: "flex items-center justify-between text-xs mb-3",
                  children: [
                    s.jsxs("strong", {
                      className:
                        "text-sm sm:text-base font-extrabold text-foodiBlack",
                      children: ["$", V.toFixed(2)],
                    }),
                    s.jsxs("span", {
                      className:
                        "flex items-center gap-1 font-semibold text-gray-700",
                      children: [
                        s.jsx("i", {
                          className: "fa-solid fa-star text-amber-400 text-xs",
                        }),
                        z,
                      ],
                    }),
                  ],
                }),
                s.jsx("button", {
                  type: "button",
                  onClick: $,
                  className: `w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm border transition-all duration-200 flex items-center justify-center gap-2 ${q ? "bg-foodiGreen text-white border-foodiGreen shadow-md" : "bg-white text-foodiGreen-dark border-foodiGreen hover:bg-foodiGreen hover:text-white"}`,
                  children: q
                    ? s.jsxs(s.Fragment, {
                        children: [
                          s.jsx("i", {
                            className: "fa-solid fa-check text-xs",
                          }),
                          "Added!",
                        ],
                      })
                    : "Add to Cart",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Jd = ({
    dishes: w = [],
    selectedCategory: j = "All",
    searchTerm: m = "",
    onAddToCart: V,
    favorites: z = [],
    onToggleLike: T,
  }) => {
    const H = ce.useRef(null),
      U = w.filter((I) => {
        const q = j === "All" || I.category.toLowerCase() === j.toLowerCase(),
          B = I.name.toLowerCase().includes(m.toLowerCase());
        return q && B;
      }),
      M = (I) => {
        H.current &&
          H.current.scrollBy({
            left: I === "left" ? -320 : 320,
            behavior: "smooth",
          });
      };
    return s.jsx("section", {
      id: "menu",
      className: "py-14 sm:py-20 scroll-mt-24",
      children: s.jsxs("div", {
        className: "w-[90%] max-w-[1120px] mx-auto",
        children: [
          s.jsxs("div", {
            className:
              "flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8 sm:mb-10",
            children: [
              s.jsxs("div", {
                children: [
                  s.jsx("span", {
                    className:
                      "block text-[11px] font-extrabold tracking-widest text-[#ff6666] mb-2 uppercase",
                    children: "SPECIAL DISHES",
                  }),
                  s.jsxs("h2", {
                    className:
                      "text-2xl sm:text-3xl md:text-4xl font-extrabold text-foodiBlack tracking-tight",
                    children: [
                      "Standout Dishes",
                      s.jsx("br", { className: "hidden sm:inline" }),
                      " From Our Menu",
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex items-center gap-3 self-end sm:self-auto",
                children: [
                  s.jsx("button", {
                    type: "button",
                    onClick: () => M("left"),
                    className:
                      "w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-transform hover:scale-105",
                    "aria-label": "Previous dishes",
                    children: s.jsx("i", {
                      className: "fa-solid fa-chevron-left text-xs",
                    }),
                  }),
                  s.jsx("button", {
                    type: "button",
                    onClick: () => M("right"),
                    className:
                      "w-10 h-10 rounded-full bg-foodiGreen hover:bg-foodiGreen-dark text-white flex items-center justify-center transition-transform hover:scale-105",
                    "aria-label": "Next dishes",
                    children: s.jsx("i", {
                      className: "fa-solid fa-chevron-right text-xs",
                    }),
                  }),
                ],
              }),
            ],
          }),
          U.length > 0
            ? s.jsx("div", {
                ref: H,
                className:
                  "flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-3 px-1",
                children: U.map((I) =>
                  s.jsx(
                    Zd,
                    {
                      id: I.id,
                      name: I.name,
                      category: I.category,
                      price: I.price,
                      rating: I.rating,
                      description: I.description,
                      image: I.image,
                      onAddToCart: V,
                      isLiked: z.includes(I.id),
                      onToggleLike: T,
                    },
                    I.id,
                  ),
                ),
              })
            : s.jsxs("div", {
                className:
                  "py-16 text-center bg-gray-50/70 rounded-3xl border border-dashed border-gray-200",
                children: [
                  s.jsx("i", {
                    className:
                      "fa-solid fa-utensils text-gray-300 text-3xl mb-3",
                  }),
                  s.jsx("h3", {
                    className: "text-base font-bold text-foodiBlack mb-1",
                    children: "No Dishes Found",
                  }),
                  s.jsx("p", {
                    className: "text-xs text-foodiGray",
                    children: m
                      ? `No dishes matching "${m}" in ${j}.`
                      : `No dishes available in ${j} right now.`,
                  }),
                ],
              }),
        ],
      }),
    });
  },
  bd = () => {
    const [w, j] = ce.useState(0),
      m = () => {
        j((T) => (T + 1) % Tl.length);
      },
      V = () => {
        j((T) => (T - 1 + Tl.length) % Tl.length);
      },
      z = Tl[w];
    return s.jsx("section", {
      id: "about",
      className: "py-14 sm:py-20 scroll-mt-24",
      children: s.jsxs("div", {
        className:
          "w-[90%] max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16",
        children: [
          s.jsxs("div", {
            className:
              "relative flex justify-center items-end min-h-[350px] sm:min-h-[400px]",
            children: [
              s.jsx("div", {
                className:
                  "absolute bottom-0 w-[80%] h-[72%] bg-foodiGreen rounded-t-[100px] rounded-b-3xl",
              }),
              s.jsx("img", {
                src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=650&q=85",
                alt: "Professional chef",
                className:
                  "relative z-10 w-[85%] max-h-[390px] object-cover object-top rounded-t-[100px] chef-mask",
              }),
              s.jsxs("span", {
                className:
                  "absolute z-20 right-2 sm:right-6 bottom-4 bg-white shadow-foodi rounded-full px-4 py-2.5 text-xs font-bold text-foodiBlack flex items-center gap-2 border border-gray-50",
                children: [
                  s.jsx("i", {
                    className: "fa-solid fa-utensils text-foodiGreen",
                  }),
                  "Our Great Chef",
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className: "text-left py-4",
            children: [
              s.jsx("span", {
                className:
                  "block text-[11px] font-extrabold tracking-widest text-[#ff6666] mb-2 uppercase",
                children: "TESTIMONIALS",
              }),
              s.jsxs("h2", {
                className:
                  "text-2xl sm:text-3xl md:text-4xl font-extrabold text-foodiBlack tracking-tight mb-5",
                children: [
                  "What Our Customers",
                  s.jsx("br", {}),
                  " Say About Us",
                ],
              }),
              s.jsxs("p", {
                className:
                  "text-xs sm:text-sm text-foodiGray leading-relaxed mb-7 italic min-h-[64px]",
                children: ['"', z.text, '"'],
              }),
              s.jsxs("div", {
                className: "flex items-center gap-4 mb-7",
                children: [
                  s.jsx("div", {
                    className: "flex items-center",
                    children: s.jsx("img", {
                      src: z.avatar,
                      alt: z.name,
                      className:
                        "w-11 h-11 rounded-full object-cover border-2 border-foodiGreen",
                    }),
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("strong", {
                        className:
                          "block text-xs sm:text-sm font-bold text-foodiBlack",
                        children: z.name,
                      }),
                      s.jsxs("p", {
                        className:
                          "text-[11px] text-foodiGray flex items-center gap-1.5 font-medium",
                        children: [
                          s.jsx("span", {
                            className: "text-amber-400",
                            children: "★★★★★",
                          }),
                          s.jsx("span", {
                            className: "font-bold text-foodiBlack",
                            children: z.rating,
                          }),
                          s.jsx("small", {
                            className: "text-gray-400",
                            children: "(1.2k Reviews)",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  s.jsx("button", {
                    type: "button",
                    onClick: V,
                    className:
                      "w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-transform hover:scale-105",
                    "aria-label": "Previous testimonial",
                    children: s.jsx("i", {
                      className: "fa-solid fa-chevron-left text-xs",
                    }),
                  }),
                  s.jsx("button", {
                    type: "button",
                    onClick: m,
                    className:
                      "w-9 h-9 rounded-full bg-foodiGreen hover:bg-foodiGreen-dark text-white flex items-center justify-center transition-transform hover:scale-105",
                    "aria-label": "Next testimonial",
                    children: s.jsx("i", {
                      className: "fa-solid fa-chevron-right text-xs",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  ef = ({ icon: w, title: j, description: m }) =>
    s.jsxs("article", {
      className:
        "p-6 sm:p-7 rounded-2xl bg-white border border-gray-100 shadow-foodiCard text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-foodiGreen/40 hover:shadow-foodi flex flex-col items-center",
      children: [
        s.jsx("div", {
          className:
            "w-12 h-12 rounded-full bg-foodiGreen-light/60 flex items-center justify-center text-foodiGreen text-2xl mb-3.5",
          children: s.jsx("i", { className: w }),
        }),
        s.jsx("h3", {
          className: "text-sm font-bold text-foodiGreen-dark mb-1.5",
          children: j,
        }),
        s.jsx("p", {
          className: "text-xs text-foodiGray leading-relaxed max-w-[200px]",
          children: m,
        }),
      ],
    }),
  tf = () =>
    s.jsx("section", {
      id: "services",
      className: "py-14 sm:py-20 scroll-mt-24",
      children: s.jsxs("div", {
        className:
          "w-[90%] max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16",
        children: [
          s.jsxs("div", {
            className: "text-left py-4",
            children: [
              s.jsx("span", {
                className:
                  "block text-[11px] font-extrabold tracking-widest text-[#ff6666] mb-2 uppercase",
                children: "OUR STORY & SERVICES",
              }),
              s.jsxs("h2", {
                className:
                  "text-2xl sm:text-3xl md:text-4xl font-extrabold text-foodiBlack tracking-tight mb-5",
                children: [
                  "Our Culinary Journey",
                  s.jsx("br", {}),
                  " And Services",
                ],
              }),
              s.jsx("p", {
                className:
                  "text-xs sm:text-sm text-foodiGray leading-relaxed max-w-[440px] mb-7",
                children:
                  "Rooted in passion, we blend unforgettable dining experiences and offer exceptional services, bringing culinary artistry with every memorable moment.",
              }),
              s.jsx("a", {
                href: "#menu",
                className:
                  "inline-flex items-center justify-center px-7 py-3 rounded-full bg-foodiGreen hover:bg-foodiGreen-dark text-white text-xs sm:text-sm font-semibold shadow-md hover:-translate-y-0.5 transition-all duration-200",
                children: "Explore",
              }),
            ],
          }),
          s.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5",
            children: Kd.map((w) =>
              s.jsx(
                ef,
                { icon: w.icon, title: w.title, description: w.description },
                w.id,
              ),
            ),
          }),
        ],
      }),
    }),
  nf = () =>
    s.jsx("footer", {
      className: "border-t border-gray-100 pt-16 pb-8 bg-white",
      children: s.jsxs("div", {
        className: "w-[90%] max-w-[1120px] mx-auto",
        children: [
          s.jsxs("div", {
            className:
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-gray-100",
            children: [
              s.jsxs("div", {
                children: [
                  s.jsxs("a", {
                    href: "#home",
                    className:
                      "text-xl font-extrabold tracking-tight text-foodiBlack flex items-center gap-2 mb-4",
                    children: [
                      s.jsx("i", {
                        className:
                          "fa-solid fa-utensils text-foodiGreen text-base",
                      }),
                      s.jsxs("span", {
                        children: [
                          "FOOD",
                          s.jsx("span", {
                            className: "text-foodiGreen",
                            children: "I",
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx("p", {
                    className:
                      "text-xs text-foodiGray leading-relaxed max-w-[240px] mb-5",
                    children:
                      "Savor the artistry where every dish is a culinary masterpiece.",
                  }),
                  s.jsx("div", {
                    className: "flex items-center gap-3",
                    children: [
                      { icon: "fa-facebook-f", label: "Facebook" },
                      { icon: "fa-instagram", label: "Instagram" },
                      { icon: "fa-x-twitter", label: "Twitter" },
                      { icon: "fa-youtube", label: "YouTube" },
                    ].map((w, j) =>
                      s.jsx(
                        "a",
                        {
                          href: "#",
                          "aria-label": w.label,
                          className:
                            "w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-xs text-gray-600 hover:bg-foodiGreen hover:text-white hover:border-foodiGreen transition-all duration-200",
                          children: s.jsx("i", {
                            className: `fa-brands ${w.icon}`,
                          }),
                        },
                        j,
                      ),
                    ),
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("h3", {
                    className: "text-sm font-bold text-foodiBlack mb-4",
                    children: "Useful Links",
                  }),
                  s.jsxs("ul", {
                    className: "space-y-2.5 text-xs text-foodiGray",
                    children: [
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "#about",
                          className: "hover:text-foodiGreen transition-colors",
                          children: "About Us",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "#services",
                          className: "hover:text-foodiGreen transition-colors",
                          children: "Events",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "#menu",
                          className: "hover:text-foodiGreen transition-colors",
                          children: "Blogs",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "#services",
                          className: "hover:text-foodiGreen transition-colors",
                          children: "FAQ",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("h3", {
                    className: "text-sm font-bold text-foodiBlack mb-4",
                    children: "Main Menu",
                  }),
                  s.jsxs("ul", {
                    className: "space-y-2.5 text-xs text-foodiGray",
                    children: [
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "#home",
                          className: "hover:text-foodiGreen transition-colors",
                          children: "Home",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "#menu",
                          className: "hover:text-foodiGreen transition-colors",
                          children: "Special Offers",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "#menu",
                          className: "hover:text-foodiGreen transition-colors",
                          children: "All Menus",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "#services",
                          className: "hover:text-foodiGreen transition-colors",
                          children: "Reservation",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("h3", {
                    className: "text-sm font-bold text-foodiBlack mb-4",
                    children: "Contact Us",
                  }),
                  s.jsxs("ul", {
                    className: "space-y-2.5 text-xs text-foodiGray",
                    children: [
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "mailto:hello@foodi.com",
                          className: "hover:text-foodiGreen transition-colors",
                          children: "hello@foodi.com",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "tel:+8801234567890",
                          className: "hover:text-foodiGreen transition-colors",
                          children: "+880 1234 567890",
                        }),
                      }),
                      s.jsx("li", { children: "Dhaka, Bangladesh" }),
                      s.jsx("li", {
                        children: "Mon - Sun: 9:00 AM - 11:00 PM",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className:
              "pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foodiGray",
            children: [
              s.jsxs("p", {
                children: [
                  "© ",
                  new Date().getFullYear(),
                  " Foodi. All rights reserved.",
                ],
              }),
              s.jsx("a", {
                href: "#home",
                className: "text-foodiGreen-dark hover:underline font-semibold",
                children: "Back to top ↑",
              }),
            ],
          }),
        ],
      }),
    }),
  rf = ({ item: w, onIncreaseQty: j, onDecreaseQty: m, onRemove: V }) => {
    const { id: z, name: T, price: H, image: U, quantity: M } = w;
    return s.jsxs("div", {
      className:
        "flex items-center gap-3.5 p-3.5 bg-[#fcfdfc] border border-gray-100 rounded-2xl hover:border-foodiGreen/30 hover:bg-white transition-all duration-200",
      children: [
        s.jsx("img", {
          src: U,
          alt: T,
          className:
            "w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover flex-shrink-0",
        }),
        s.jsxs("div", {
          className: "flex-1 min-w-0",
          children: [
            s.jsx("h4", {
              className:
                "text-xs sm:text-sm font-semibold text-foodiBlack truncate",
              children: T,
            }),
            s.jsxs("div", {
              className: "text-xs font-bold text-foodiGreen-dark mb-1.5",
              children: [
                "$",
                (H * M).toFixed(2),
                s.jsxs("span", {
                  className: "text-[10px] text-gray-400 font-normal ml-1",
                  children: ["($", H.toFixed(2), " each)"],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                s.jsx("button", {
                  type: "button",
                  onClick: () => m && m(z),
                  className:
                    "w-6 h-6 rounded-md border border-gray-200 bg-white flex items-center justify-center text-[10px] text-gray-600 hover:bg-foodiGreen hover:text-white hover:border-foodiGreen transition-colors",
                  "aria-label": "Decrease quantity",
                  children: s.jsx("i", { className: "fa-solid fa-minus" }),
                }),
                s.jsx("span", {
                  className:
                    "text-xs font-bold w-4 text-center text-foodiBlack",
                  children: M,
                }),
                s.jsx("button", {
                  type: "button",
                  onClick: () => j && j(z),
                  className:
                    "w-6 h-6 rounded-md border border-gray-200 bg-white flex items-center justify-center text-[10px] text-gray-600 hover:bg-foodiGreen hover:text-white hover:border-foodiGreen transition-colors",
                  "aria-label": "Increase quantity",
                  children: s.jsx("i", { className: "fa-solid fa-plus" }),
                }),
              ],
            }),
          ],
        }),
        s.jsx("button", {
          type: "button",
          onClick: () => V && V(z),
          className:
            "p-2 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors",
          "aria-label": "Remove item",
          children: s.jsx("i", { className: "fa-solid fa-trash-can text-sm" }),
        }),
      ],
    });
  },
  lf = ({
    isOpen: w = !1,
    onClose: j,
    cart: m = [],
    onIncreaseQty: V,
    onDecreaseQty: z,
    onRemove: T,
    onProceedCheckout: H,
  }) => {
    const U = m.reduce((B, $) => B + $.price * $.quantity, 0),
      M = U > 0 ? (U >= 50 ? 0 : 2) : 0,
      I = U + M,
      q = m.reduce((B, $) => B + $.quantity, 0);
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx("div", {
          onClick: j,
          className: `fixed inset-0 bg-black/45 backdrop-blur-[3px] z-50 transition-opacity duration-300 ${w ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        }),
        s.jsxs("aside", {
          className: `fixed top-0 right-0 bottom-0 w-full max-w-[420px] bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${w ? "translate-x-0" : "translate-x-full"}`,
          "aria-label": "Shopping Cart Drawer",
          children: [
            s.jsxs("div", {
              className:
                "p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between",
              children: [
                s.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    s.jsx("i", {
                      className:
                        "fa-solid fa-bag-shopping text-foodiGreen text-xl",
                    }),
                    s.jsxs("h2", {
                      className:
                        "text-base sm:text-lg font-bold text-foodiBlack",
                      children: ["Your Cart (", q, ")"],
                    }),
                  ],
                }),
                s.jsx("button", {
                  type: "button",
                  onClick: j,
                  className:
                    "w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-foodiBlack flex items-center justify-center transition-colors",
                  "aria-label": "Close cart",
                  children: s.jsx("i", {
                    className: "fa-solid fa-xmark text-sm",
                  }),
                }),
              ],
            }),
            s.jsx("div", {
              className: "flex-1 overflow-y-auto p-5 sm:p-6 space-y-3.5",
              children:
                m.length === 0
                  ? s.jsxs("div", {
                      className:
                        "h-full flex flex-col items-center justify-center text-center py-12 px-4",
                      children: [
                        s.jsx("div", {
                          className:
                            "w-20 h-20 rounded-full bg-foodiGreen-light flex items-center justify-center text-foodiGreen text-3xl mb-4",
                          children: s.jsx("i", {
                            className: "fa-solid fa-basket-shopping",
                          }),
                        }),
                        s.jsx("h3", {
                          className: "text-base font-bold text-foodiBlack mb-1",
                          children: "Your Cart is Empty",
                        }),
                        s.jsx("p", {
                          className:
                            "text-xs text-foodiGray max-w-[220px] mb-6",
                          children:
                            "Looks like you haven't added any dishes yet. Start exploring our delicious meals!",
                        }),
                        s.jsx("button", {
                          type: "button",
                          onClick: j,
                          className:
                            "px-6 py-2.5 rounded-full bg-foodiGreen hover:bg-foodiGreen-dark text-white text-xs font-semibold shadow-md transition-all",
                          children: "Explore Dishes",
                        }),
                      ],
                    })
                  : m.map((B) =>
                      s.jsx(
                        rf,
                        {
                          item: B,
                          onIncreaseQty: V,
                          onDecreaseQty: z,
                          onRemove: T,
                        },
                        B.id,
                      ),
                    ),
            }),
            m.length > 0 &&
              s.jsxs("div", {
                className: "p-5 sm:p-6 border-t border-gray-100 bg-white",
                children: [
                  s.jsxs("div", {
                    className:
                      "space-y-2 text-xs sm:text-sm text-foodiGray mb-4",
                    children: [
                      s.jsxs("div", {
                        className: "flex justify-between",
                        children: [
                          s.jsx("span", { children: "Subtotal" }),
                          s.jsxs("strong", {
                            className: "text-foodiBlack",
                            children: ["$", U.toFixed(2)],
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "flex justify-between",
                        children: [
                          s.jsx("span", { children: "Delivery Fee" }),
                          s.jsx("strong", {
                            className: "text-foodiBlack",
                            children:
                              U >= 50
                                ? s.jsx("span", {
                                    className: "text-foodiGreen-dark font-bold",
                                    children: "FREE",
                                  })
                                : `$${M.toFixed(2)}`,
                          }),
                        ],
                      }),
                      s.jsx("div", { className: "h-[1px] bg-gray-100 my-2" }),
                      s.jsxs("div", {
                        className:
                          "flex justify-between text-sm sm:text-base font-bold text-foodiBlack",
                        children: [
                          s.jsx("span", { children: "Total Amount" }),
                          s.jsxs("span", {
                            className: "text-foodiGreen-dark",
                            children: ["$", I.toFixed(2)],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("button", {
                    type: "button",
                    onClick: H,
                    className:
                      "w-full py-3.5 px-6 rounded-full bg-foodiGreen hover:bg-foodiGreen-dark text-white font-bold text-xs sm:text-sm shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2",
                    children: [
                      "Proceed to Checkout",
                      s.jsx("i", {
                        className: "fa-solid fa-arrow-right text-xs",
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  of = ({
    isOpen: w = !1,
    onClose: j,
    onBackToCart: m,
    cart: V = [],
    onConfirmOrder: z,
  }) => {
    const [T, H] = ce.useState({
        name: "",
        phone: "",
        address: "",
        notes: "",
        paymentMethod: "Cash on Delivery",
      }),
      [U, M] = ce.useState(!1);
    if (!w) return null;
    const I = V.reduce((Q, K) => Q + K.price * K.quantity, 0),
      q = I > 0 ? (I >= 50 ? 0 : 2) : 0,
      B = I + q,
      $ = (Q) => {
        const { name: K, value: ee } = Q.target;
        H((Ve) => ({ ...Ve, [K]: ee }));
      },
      X = (Q) => {
        if ((Q.preventDefault(), !T.name || !T.phone || !T.address)) {
          alert("Please fill in all required delivery details.");
          return;
        }
        (M(!0),
          setTimeout(() => {
            (M(!1),
              z({
                ...T,
                subtotal: I,
                deliveryFee: q,
                grandTotal: B,
                items: [...V],
              }));
          }, 700));
      };
    return s.jsx("div", {
      className:
        "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-[4px] animate-fadeIn",
      children: s.jsxs("div", {
        className:
          "w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-scaleUp",
        children: [
          s.jsxs("div", {
            className:
              "px-6 py-5 border-b border-gray-100 flex items-center justify-between",
            children: [
              s.jsxs("h2", {
                className:
                  "text-base sm:text-lg font-bold text-foodiBlack flex items-center gap-2.5",
                children: [
                  s.jsx("i", {
                    className: "fa-solid fa-receipt text-foodiGreen text-lg",
                  }),
                  "Order Checkout",
                ],
              }),
              s.jsx("button", {
                type: "button",
                onClick: j,
                className:
                  "w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-foodiBlack flex items-center justify-center transition-colors",
                "aria-label": "Close checkout",
                children: s.jsx("i", {
                  className: "fa-solid fa-xmark text-sm",
                }),
              }),
            ],
          }),
          s.jsxs("form", {
            onSubmit: X,
            className: "flex-1 overflow-y-auto",
            children: [
              s.jsxs("div", {
                className: "p-6 grid grid-cols-1 md:grid-cols-12 gap-6",
                children: [
                  s.jsxs("div", {
                    className: "md:col-span-7 space-y-4",
                    children: [
                      s.jsxs("h3", {
                        className:
                          "text-xs sm:text-sm font-bold text-foodiBlack flex items-center gap-2",
                        children: [
                          s.jsx("i", {
                            className:
                              "fa-solid fa-location-dot text-foodiGreen",
                          }),
                          "Delivery Details",
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-[11px] font-semibold text-gray-600 mb-1",
                            children: "Full Name *",
                          }),
                          s.jsx("input", {
                            type: "text",
                            name: "name",
                            value: T.name,
                            onChange: $,
                            placeholder: "e.g. Sarah Jenkins",
                            required: !0,
                            className:
                              "w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-foodiBlack focus:outline-none focus:border-foodiGreen focus:ring-2 focus:ring-foodiGreen/20 transition-all",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-[11px] font-semibold text-gray-600 mb-1",
                            children: "Phone Number *",
                          }),
                          s.jsx("input", {
                            type: "tel",
                            name: "phone",
                            value: T.phone,
                            onChange: $,
                            placeholder: "e.g. +880 1712 345678",
                            required: !0,
                            className:
                              "w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-foodiBlack focus:outline-none focus:border-foodiGreen focus:ring-2 focus:ring-foodiGreen/20 transition-all",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-[11px] font-semibold text-gray-600 mb-1",
                            children: "Delivery Address *",
                          }),
                          s.jsx("textarea", {
                            name: "address",
                            rows: "2",
                            value: T.address,
                            onChange: $,
                            placeholder: "House, Road, Area, City",
                            required: !0,
                            className:
                              "w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-foodiBlack focus:outline-none focus:border-foodiGreen focus:ring-2 focus:ring-foodiGreen/20 transition-all resize-none",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-[11px] font-semibold text-gray-600 mb-1",
                            children: "Delivery Notes (Optional)",
                          }),
                          s.jsx("input", {
                            type: "text",
                            name: "notes",
                            value: T.notes,
                            onChange: $,
                            placeholder:
                              "e.g. Please ring doorbell or call upon arrival",
                            className:
                              "w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-foodiBlack focus:outline-none focus:border-foodiGreen focus:ring-2 focus:ring-foodiGreen/20 transition-all",
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "md:col-span-5 space-y-4",
                    children: [
                      s.jsxs("h3", {
                        className:
                          "text-xs sm:text-sm font-bold text-foodiBlack flex items-center gap-2",
                        children: [
                          s.jsx("i", {
                            className:
                              "fa-solid fa-credit-card text-foodiGreen",
                          }),
                          "Payment Method",
                        ],
                      }),
                      s.jsx("div", {
                        className: "space-y-2",
                        children: [
                          {
                            value: "Cash on Delivery",
                            label: "Cash on Delivery",
                            desc: "Pay cash when food arrives",
                            icon: "fa-money-bill-wave",
                          },
                          {
                            value: "Credit / Debit Card",
                            label: "Credit / Debit Card",
                            desc: "Visa, MasterCard, Amex",
                            icon: "fa-credit-card",
                          },
                          {
                            value: "Mobile Banking",
                            label: "Mobile Banking",
                            desc: "bKash, Nagad, Rocket",
                            icon: "fa-mobile-screen-button",
                          },
                        ].map((Q) =>
                          s.jsxs(
                            "label",
                            {
                              className: `flex items-center gap-3 p-2.5 rounded-xl border cursor-pointer transition-all ${T.paymentMethod === Q.value ? "border-foodiGreen bg-[#f6fcf7] ring-1 ring-foodiGreen/20" : "border-gray-200 hover:border-foodiGreen/40"}`,
                              children: [
                                s.jsx("input", {
                                  type: "radio",
                                  name: "paymentMethod",
                                  value: Q.value,
                                  checked: T.paymentMethod === Q.value,
                                  onChange: $,
                                  className: "accent-foodiGreen",
                                }),
                                s.jsxs("div", {
                                  className: "flex-1 flex items-center gap-2.5",
                                  children: [
                                    s.jsx("i", {
                                      className: `fa-solid ${Q.icon} text-foodiGreen text-sm`,
                                    }),
                                    s.jsxs("div", {
                                      children: [
                                        s.jsx("strong", {
                                          className:
                                            "block text-[11px] font-bold text-foodiBlack",
                                          children: Q.label,
                                        }),
                                        s.jsx("span", {
                                          className:
                                            "text-[10px] text-foodiGray",
                                          children: Q.desc,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            Q.value,
                          ),
                        ),
                      }),
                      s.jsxs("div", {
                        className:
                          "p-4 rounded-2xl bg-gray-50 border border-gray-100",
                        children: [
                          s.jsx("h4", {
                            className:
                              "text-xs font-bold text-foodiBlack mb-2.5",
                            children: "Order Summary",
                          }),
                          s.jsx("div", {
                            className:
                              "max-h-24 overflow-y-auto space-y-1.5 mb-2.5 pr-1 text-[11px] text-gray-600",
                            children: V.map((Q) =>
                              s.jsxs(
                                "div",
                                {
                                  className:
                                    "flex justify-between items-center",
                                  children: [
                                    s.jsxs("span", {
                                      className: "truncate max-w-[130px]",
                                      children: [Q.name, " × ", Q.quantity],
                                    }),
                                    s.jsxs("strong", {
                                      className:
                                        "font-semibold text-foodiBlack",
                                      children: [
                                        "$",
                                        (Q.price * Q.quantity).toFixed(2),
                                      ],
                                    }),
                                  ],
                                },
                                Q.id,
                              ),
                            ),
                          }),
                          s.jsxs("div", {
                            className:
                              "border-t border-gray-200/60 pt-2 space-y-1 text-xs",
                            children: [
                              s.jsxs("div", {
                                className:
                                  "flex justify-between text-foodiGray",
                                children: [
                                  s.jsx("span", { children: "Subtotal:" }),
                                  s.jsxs("span", {
                                    children: ["$", I.toFixed(2)],
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className:
                                  "flex justify-between text-foodiGray",
                                children: [
                                  s.jsx("span", { children: "Delivery:" }),
                                  s.jsx("span", {
                                    children:
                                      I >= 50 ? "FREE" : `$${q.toFixed(2)}`,
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className:
                                  "flex justify-between font-bold text-foodiBlack pt-1 border-t border-gray-200/60 text-sm",
                                children: [
                                  s.jsx("span", { children: "Total to Pay:" }),
                                  s.jsxs("span", {
                                    className: "text-foodiGreen-dark",
                                    children: ["$", B.toFixed(2)],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className:
                  "px-6 py-4 bg-gray-50/70 border-t border-gray-100 flex items-center justify-end gap-3",
                children: [
                  s.jsx("button", {
                    type: "button",
                    onClick: m,
                    className:
                      "px-5 py-2.5 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 text-xs font-semibold transition-colors",
                    children: "Back to Cart",
                  }),
                  s.jsx("button", {
                    type: "submit",
                    disabled: U,
                    className:
                      "px-6 py-2.5 rounded-full bg-foodiGreen hover:bg-foodiGreen-dark text-white text-xs font-bold shadow-md hover:-translate-y-0.5 transition-all disabled:opacity-50 flex items-center gap-2",
                    children: U
                      ? s.jsxs(s.Fragment, {
                          children: [
                            s.jsx("i", {
                              className: "fa-solid fa-spinner fa-spin text-xs",
                            }),
                            "Processing...",
                          ],
                        })
                      : `Confirm & Place Order ($${B.toFixed(2)})`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  sf = ({ isOpen: w = !1, onClose: j, orderDetails: m = {} }) => {
    if (!w) return null;
    const {
      orderId: V = "#FD-82910",
      name: z = "Customer",
      paymentMethod: T = "Cash on Delivery",
      grandTotal: H = 0,
      estimatedTime: U = "25 - 35 Minutes",
    } = m;
    return s.jsx("div", {
      className:
        "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-[4px]",
      children: s.jsxs("div", {
        className:
          "w-full max-w-md bg-white rounded-3xl p-7 sm:p-8 text-center shadow-2xl animate-scaleUp",
        children: [
          s.jsx("div", {
            className:
              "w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-foodiGreen-light text-foodiGreen text-4xl sm:text-5xl flex items-center justify-center mx-auto mb-5 animate-success-pop shadow-sm",
            children: s.jsx("i", { className: "fa-solid fa-circle-check" }),
          }),
          s.jsx("h2", {
            className: "text-xl sm:text-2xl font-bold text-foodiBlack mb-2",
            children: "Order Placed Successfully!",
          }),
          s.jsxs("p", {
            className: "text-xs sm:text-sm text-foodiGray leading-relaxed mb-6",
            children: [
              "Thank you, ",
              s.jsx("strong", { className: "text-foodiBlack", children: z }),
              "! Your delicious order has been received and our chefs have started preparing it.",
            ],
          }),
          s.jsxs("div", {
            className:
              "bg-[#f9fbf9] border border-dashed border-foodiGreen/40 rounded-2xl p-4 sm:p-5 text-left mb-6 space-y-2 text-xs",
            children: [
              s.jsxs("div", {
                className: "flex justify-between items-center text-gray-600",
                children: [
                  s.jsx("span", { children: "Order Number:" }),
                  s.jsx("strong", {
                    className: "text-foodiBlack",
                    children: V,
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex justify-between items-center text-gray-600",
                children: [
                  s.jsx("span", { children: "Estimated Delivery:" }),
                  s.jsx("strong", {
                    className: "text-foodiBlack",
                    children: U,
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex justify-between items-center text-gray-600",
                children: [
                  s.jsx("span", { children: "Payment Method:" }),
                  s.jsx("strong", {
                    className: "text-foodiBlack",
                    children: T,
                  }),
                ],
              }),
              s.jsxs("div", {
                className:
                  "flex justify-between items-center border-t border-gray-200/60 pt-2 text-sm font-bold text-foodiBlack",
                children: [
                  s.jsx("span", { children: "Total Amount:" }),
                  s.jsxs("span", {
                    className: "text-foodiGreen-dark",
                    children: ["$", H.toFixed(2)],
                  }),
                ],
              }),
            ],
          }),
          s.jsx("button", {
            type: "button",
            onClick: j,
            className:
              "w-full py-3.5 rounded-full bg-foodiGreen hover:bg-foodiGreen-dark text-white font-bold text-xs sm:text-sm shadow-md hover:-translate-y-0.5 transition-all",
            children: "Done & Explore More Food",
          }),
        ],
      }),
    });
  },
  af = ({ message: w = "", visible: j = !1 }) =>
    s.jsx("div", {
      role: "status",
      "aria-live": "polite",
      className: `fixed bottom-6 right-6 z-50 bg-foodiBlack text-white px-5 py-3 rounded-full text-xs sm:text-sm font-medium shadow-2xl flex items-center gap-2.5 transition-all duration-300 pointer-events-none ${j ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
      children: w,
    }),
  uf = () => {
    const [w, j] = ce.useState([]),
      [m, V] = ce.useState([1]),
      [z, T] = ce.useState("All"),
      [H, U] = ce.useState(""),
      [M, I] = ce.useState("home"),
      [q, B] = ce.useState(!1),
      [$, X] = ce.useState(!1),
      [Q, K] = ce.useState(!1),
      [ee, Ve] = ce.useState({}),
      [Ze, He] = ce.useState(""),
      [we, Fe] = ce.useState(!1),
      pe = (x) => {
        (He(x),
          Fe(!0),
          setTimeout(() => {
            Fe(!1);
          }, 2500));
      };
    ce.useEffect(() => {
      const x = () => {
        const c = window.scrollY + 140,
          v = ["home", "categories", "menu", "about", "services"];
        for (const L of v) {
          const A = document.getElementById(L);
          if (A) {
            const Y = A.offsetTop,
              Z = A.offsetHeight;
            if (c >= Y && c < Y + Z) {
              I(L);
              break;
            }
          }
        }
      };
      return (
        window.addEventListener("scroll", x),
        () => window.removeEventListener("scroll", x)
      );
    }, []);
    const Ee = (x) => {
        (j((c) =>
          c.find((L) => L.id === x.id)
            ? c.map((L) =>
                L.id === x.id ? { ...L, quantity: L.quantity + 1 } : L,
              )
            : [
                ...c,
                {
                  id: x.id,
                  name: x.name,
                  price: x.price,
                  image: x.image,
                  quantity: 1,
                },
              ],
        ),
          pe(`🛒 ${x.name} added to cart!`));
      },
      Me = (x) => {
        j((c) =>
          c.map((v) => (v.id === x ? { ...v, quantity: v.quantity + 1 } : v)),
        );
      },
      mt = (x) => {
        j((c) =>
          c
            .map((v) => (v.id === x ? { ...v, quantity: v.quantity - 1 } : v))
            .filter((v) => v.quantity > 0),
        );
      },
      it = (x) => {
        const c = w.find((v) => v.id === x);
        (j((v) => v.filter((L) => L.id !== x)),
          c && pe(`🗑️ ${c.name} removed from cart`));
      },
      wt = (x) => {
        const c = Ou.find((L) => L.id === x),
          v = c ? c.name : "Dish";
        m.includes(x)
          ? (V((L) => L.filter((A) => A !== x)),
            pe(`Removed ${v} from favorites`))
          : (V((L) => [...L, x]), pe(`❤️ Added ${v} to favorites!`));
      },
      Je = (x) => {
        var c;
        (T(x),
          (c = document.getElementById("menu")) == null ||
            c.scrollIntoView({ behavior: "smooth" }));
      },
      Le = (x) => {
        (U(x), T("All"));
      },
      We = () => {
        U("");
      },
      be = () => {
        if (w.length === 0) {
          pe("⚠️ Your cart is empty! Add dishes to proceed.");
          return;
        }
        (B(!1), X(!0));
      },
      _e = () => {
        (X(!1), B(!0));
      },
      se = (x) => {
        const c = "#FD-" + Math.floor(1e4 + Math.random() * 9e4),
          v = { ...x, orderId: c, estimatedTime: "25 - 35 Minutes" };
        (X(!1),
          Ve(v),
          K(!0),
          j([]),
          pe(`🎉 Order ${c} confirmed successfully!`));
      },
      N = () => {
        var x;
        (K(!1),
          (x = document.getElementById("menu")) == null ||
            x.scrollIntoView({ behavior: "smooth" }));
      },
      F = w.reduce((x, c) => x + c.quantity, 0);
    return s.jsxs("div", {
      className: "min-h-screen flex flex-col bg-white text-foodiBlack",
      children: [
        s.jsx(Vd, {
          cartCount: F,
          onOpenCart: () => B(!0),
          searchTerm: H,
          onSearchChange: Le,
          onClearSearch: We,
          activeSection: M,
        }),
        s.jsxs("main", {
          className: "flex-1",
          children: [
            s.jsx(Yd, {}),
            s.jsx(Xd, { selectedCategory: z, onSelectCategory: Je }),
            s.jsx(Jd, {
              dishes: Ou,
              selectedCategory: z,
              searchTerm: H,
              onAddToCart: Ee,
              favorites: m,
              onToggleLike: wt,
            }),
            s.jsx(bd, {}),
            s.jsx(tf, {}),
          ],
        }),
        s.jsx(nf, {}),
        s.jsx(lf, {
          isOpen: q,
          onClose: () => B(!1),
          cart: w,
          onIncreaseQty: Me,
          onDecreaseQty: mt,
          onRemove: it,
          onProceedCheckout: be,
        }),
        s.jsx(of, {
          isOpen: $,
          onClose: () => X(!1),
          onBackToCart: _e,
          cart: w,
          onConfirmOrder: se,
        }),
        s.jsx(sf, { isOpen: Q, onClose: N, orderDetails: ee }),
        s.jsx(af, { message: Ze, visible: we }),
      ],
    });
  };
$d.createRoot(document.getElementById("root")).render(
  s.jsx(Fd.StrictMode, { children: s.jsx(uf, {}) }),
);
