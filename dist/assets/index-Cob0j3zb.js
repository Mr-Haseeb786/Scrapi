function Zd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Xd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var mu = { exports: {} },
  Oi = {},
  vu = { exports: {} },
  R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sr = Symbol.for("react.element"),
  Gd = Symbol.for("react.portal"),
  Yd = Symbol.for("react.fragment"),
  Qd = Symbol.for("react.strict_mode"),
  Jd = Symbol.for("react.profiler"),
  bd = Symbol.for("react.provider"),
  qd = Symbol.for("react.context"),
  ef = Symbol.for("react.forward_ref"),
  tf = Symbol.for("react.suspense"),
  nf = Symbol.for("react.memo"),
  rf = Symbol.for("react.lazy"),
  $s = Symbol.iterator;
function of(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($s && e[$s]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var gu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  yu = Object.assign,
  wu = {};
function Pn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = wu),
    (this.updater = n || gu);
}
Pn.prototype.isReactComponent = {};
Pn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Pn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ku() {}
ku.prototype = Pn.prototype;
function Ol(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = wu),
    (this.updater = n || gu);
}
var Rl = (Ol.prototype = new ku());
Rl.constructor = Ol;
yu(Rl, Pn.prototype);
Rl.isPureReactComponent = !0;
var Ws = Array.isArray,
  xu = Object.prototype.hasOwnProperty,
  Ul = { current: null },
  Su = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cu(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      xu.call(t, r) && !Su.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: Sr,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Ul.current,
  };
}
function lf(e, t) {
  return {
    $$typeof: Sr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ml(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Sr;
}
function sf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Vs = /\/+/g;
function to(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? sf("" + e.key)
    : t.toString(36);
}
function Gr(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Sr:
          case Gd:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + to(l, 0) : r),
      Ws(i)
        ? ((n = ""),
          e != null && (n = e.replace(Vs, "$&/") + "/"),
          Gr(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Ml(i) &&
            (i = lf(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Vs, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Ws(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var a = r + to(o, s);
      l += Gr(o, t, n, a, i);
    }
  else if (((a = of(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + to(o, s++)), (l += Gr(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Tr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Gr(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function af(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var fe = { current: null },
  Yr = { transition: null },
  uf = {
    ReactCurrentDispatcher: fe,
    ReactCurrentBatchConfig: Yr,
    ReactCurrentOwner: Ul,
  };
function _u() {
  throw Error("act(...) is not supported in production builds of React.");
}
R.Children = {
  map: Tr,
  forEach: function (e, t, n) {
    Tr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Tr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Tr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ml(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
R.Component = Pn;
R.Fragment = Yd;
R.Profiler = Jd;
R.PureComponent = Ol;
R.StrictMode = Qd;
R.Suspense = tf;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uf;
R.act = _u;
R.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = yu({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = Ul.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      xu.call(t, a) &&
        !Su.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Sr, type: e.type, key: i, ref: o, props: r, _owner: l };
};
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: qd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: bd, _context: e }),
    (e.Consumer = e)
  );
};
R.createElement = Cu;
R.createFactory = function (e) {
  var t = Cu.bind(null, e);
  return (t.type = e), t;
};
R.createRef = function () {
  return { current: null };
};
R.forwardRef = function (e) {
  return { $$typeof: ef, render: e };
};
R.isValidElement = Ml;
R.lazy = function (e) {
  return { $$typeof: rf, _payload: { _status: -1, _result: e }, _init: af };
};
R.memo = function (e, t) {
  return { $$typeof: nf, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function (e) {
  var t = Yr.transition;
  Yr.transition = {};
  try {
    e();
  } finally {
    Yr.transition = t;
  }
};
R.unstable_act = _u;
R.useCallback = function (e, t) {
  return fe.current.useCallback(e, t);
};
R.useContext = function (e) {
  return fe.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
  return fe.current.useDeferredValue(e);
};
R.useEffect = function (e, t) {
  return fe.current.useEffect(e, t);
};
R.useId = function () {
  return fe.current.useId();
};
R.useImperativeHandle = function (e, t, n) {
  return fe.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function (e, t) {
  return fe.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function (e, t) {
  return fe.current.useLayoutEffect(e, t);
};
R.useMemo = function (e, t) {
  return fe.current.useMemo(e, t);
};
R.useReducer = function (e, t, n) {
  return fe.current.useReducer(e, t, n);
};
R.useRef = function (e) {
  return fe.current.useRef(e);
};
R.useState = function (e) {
  return fe.current.useState(e);
};
R.useSyncExternalStore = function (e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function () {
  return fe.current.useTransition();
};
R.version = "18.3.1";
vu.exports = R;
var x = vu.exports;
const Dl = Xd(x),
  cf = Zd({ __proto__: null, default: Dl }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var df = x,
  ff = Symbol.for("react.element"),
  pf = Symbol.for("react.fragment"),
  hf = Object.prototype.hasOwnProperty,
  mf = df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  vf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Eu(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) hf.call(t, r) && !vf.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: ff,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: mf.current,
  };
}
Oi.Fragment = pf;
Oi.jsx = Eu;
Oi.jsxs = Eu;
mu.exports = Oi;
var v = mu.exports,
  Uo = {},
  Pu = { exports: {} },
  Ce = {},
  ju = { exports: {} },
  Nu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, z) {
    var O = T.length;
    T.push(z);
    e: for (; 0 < O; ) {
      var Z = (O - 1) >>> 1,
        b = T[Z];
      if (0 < i(b, z)) (T[Z] = z), (T[O] = b), (O = Z);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var z = T[0],
      O = T.pop();
    if (O !== z) {
      T[0] = O;
      e: for (var Z = 0, b = T.length, Nr = b >>> 1; Z < Nr; ) {
        var Tt = 2 * (Z + 1) - 1,
          eo = T[Tt],
          Lt = Tt + 1,
          Ir = T[Lt];
        if (0 > i(eo, O))
          Lt < b && 0 > i(Ir, eo)
            ? ((T[Z] = Ir), (T[Lt] = O), (Z = Lt))
            : ((T[Z] = eo), (T[Tt] = O), (Z = Tt));
        else if (Lt < b && 0 > i(Ir, O)) (T[Z] = Ir), (T[Lt] = O), (Z = Lt);
        else break e;
      }
    }
    return z;
  }
  function i(T, z) {
    var O = T.sortIndex - z.sortIndex;
    return O !== 0 ? O : T.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    d = 1,
    c = null,
    p = 3,
    g = !1,
    y = !1,
    k = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(T) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= T)
        r(u), (z.sortIndex = z.expirationTime), t(a, z);
      else break;
      z = n(u);
    }
  }
  function w(T) {
    if (((k = !1), m(T), !y))
      if (n(a) !== null) (y = !0), bi(C);
      else {
        var z = n(u);
        z !== null && qi(w, z.startTime - T);
      }
  }
  function C(T, z) {
    (y = !1), k && ((k = !1), h(E), (E = -1)), (g = !0);
    var O = p;
    try {
      for (
        m(z), c = n(a);
        c !== null && (!(c.expirationTime > z) || (T && !K()));

      ) {
        var Z = c.callback;
        if (typeof Z == "function") {
          (c.callback = null), (p = c.priorityLevel);
          var b = Z(c.expirationTime <= z);
          (z = e.unstable_now()),
            typeof b == "function" ? (c.callback = b) : c === n(a) && r(a),
            m(z);
        } else r(a);
        c = n(a);
      }
      if (c !== null) var Nr = !0;
      else {
        var Tt = n(u);
        Tt !== null && qi(w, Tt.startTime - z), (Nr = !1);
      }
      return Nr;
    } finally {
      (c = null), (p = O), (g = !1);
    }
  }
  var j = !1,
    P = null,
    E = -1,
    I = 5,
    L = -1;
  function K() {
    return !(e.unstable_now() - L < I);
  }
  function Ze() {
    if (P !== null) {
      var T = e.unstable_now();
      L = T;
      var z = !0;
      try {
        z = P(!0, T);
      } finally {
        z ? It() : ((j = !1), (P = null));
      }
    } else j = !1;
  }
  var It;
  if (typeof f == "function")
    It = function () {
      f(Ze);
    };
  else if (typeof MessageChannel < "u") {
    var Le = new MessageChannel(),
      Ji = Le.port2;
    (Le.port1.onmessage = Ze),
      (It = function () {
        Ji.postMessage(null);
      });
  } else
    It = function () {
      S(Ze, 0);
    };
  function bi(T) {
    (P = T), j || ((j = !0), It());
  }
  function qi(T, z) {
    E = S(function () {
      T(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), bi(C));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (I = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (T) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = p;
      }
      var O = p;
      p = z;
      try {
        return T();
      } finally {
        p = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, z) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var O = p;
      p = T;
      try {
        return z();
      } finally {
        p = O;
      }
    }),
    (e.unstable_scheduleCallback = function (T, z, O) {
      var Z = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? Z + O : Z))
          : (O = Z),
        T)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = O + b),
        (T = {
          id: d++,
          callback: z,
          priorityLevel: T,
          startTime: O,
          expirationTime: b,
          sortIndex: -1,
        }),
        O > Z
          ? ((T.sortIndex = O),
            t(u, T),
            n(a) === null &&
              T === n(u) &&
              (k ? (h(E), (E = -1)) : (k = !0), qi(w, O - Z)))
          : ((T.sortIndex = b), t(a, T), y || g || ((y = !0), bi(C))),
        T
      );
    }),
    (e.unstable_shouldYield = K),
    (e.unstable_wrapCallback = function (T) {
      var z = p;
      return function () {
        var O = p;
        p = z;
        try {
          return T.apply(this, arguments);
        } finally {
          p = O;
        }
      };
    });
})(Nu);
ju.exports = Nu;
var gf = ju.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yf = x,
  Se = gf;
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
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
var Iu = new Set(),
  nr = {};
function Gt(e, t) {
  wn(e, t), wn(e + "Capture", t);
}
function wn(e, t) {
  for (nr[e] = t, e = 0; e < t.length; e++) Iu.add(t[e]);
}
var qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Mo = Object.prototype.hasOwnProperty,
  wf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Bs = {},
  Hs = {};
function kf(e) {
  return Mo.call(Hs, e)
    ? !0
    : Mo.call(Bs, e)
    ? !1
    : wf.test(e)
    ? (Hs[e] = !0)
    : ((Bs[e] = !0), !1);
}
function xf(e, t, n, r) {
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
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Sf(e, t, n, r) {
  if (t === null || typeof t > "u" || xf(e, t, n, r)) return !0;
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
function pe(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ie[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ie[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ie[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ie[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ie[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ie[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Fl = /[\-:]([a-z])/g;
function Al(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Fl, Al);
    ie[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Fl, Al);
    ie[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Fl, Al);
  ie[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ie[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ie[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $l(e, t, n, r) {
  var i = ie.hasOwnProperty(t) ? ie[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Sf(t, n, i, r) && (n = null),
    r || i === null
      ? kf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rt = yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Lr = Symbol.for("react.element"),
  en = Symbol.for("react.portal"),
  tn = Symbol.for("react.fragment"),
  Wl = Symbol.for("react.strict_mode"),
  Do = Symbol.for("react.profiler"),
  Tu = Symbol.for("react.provider"),
  Lu = Symbol.for("react.context"),
  Vl = Symbol.for("react.forward_ref"),
  Fo = Symbol.for("react.suspense"),
  Ao = Symbol.for("react.suspense_list"),
  Bl = Symbol.for("react.memo"),
  st = Symbol.for("react.lazy"),
  zu = Symbol.for("react.offscreen"),
  Ks = Symbol.iterator;
function zn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ks && e[Ks]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var B = Object.assign,
  no;
function Vn(e) {
  if (no === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      no = (t && t[1]) || "";
    }
  return (
    `
` +
    no +
    e
  );
}
var ro = !1;
function io(e, t) {
  if (!e || ro) return "";
  ro = !0;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          s = o.length - 1;
        1 <= l && 0 <= s && i[l] !== o[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (i[l] !== o[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || i[l] !== o[s])) {
                var a =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (ro = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Vn(e) : "";
}
function Cf(e) {
  switch (e.tag) {
    case 5:
      return Vn(e.type);
    case 16:
      return Vn("Lazy");
    case 13:
      return Vn("Suspense");
    case 19:
      return Vn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = io(e.type, !1)), e;
    case 11:
      return (e = io(e.type.render, !1)), e;
    case 1:
      return (e = io(e.type, !0)), e;
    default:
      return "";
  }
}
function $o(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case tn:
      return "Fragment";
    case en:
      return "Portal";
    case Do:
      return "Profiler";
    case Wl:
      return "StrictMode";
    case Fo:
      return "Suspense";
    case Ao:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Lu:
        return (e.displayName || "Context") + ".Consumer";
      case Tu:
        return (e._context.displayName || "Context") + ".Provider";
      case Vl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Bl:
        return (
          (t = e.displayName || null), t !== null ? t : $o(e.type) || "Memo"
        );
      case st:
        (t = e._payload), (e = e._init);
        try {
          return $o(e(t));
        } catch {}
    }
  return null;
}
function _f(e) {
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
      return $o(t);
    case 8:
      return t === Wl ? "StrictMode" : "Mode";
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
function Ct(e) {
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
function Ou(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ef(e) {
  var t = Ou(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function zr(e) {
  e._valueTracker || (e._valueTracker = Ef(e));
}
function Ru(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ou(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function si(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Wo(e, t) {
  var n = t.checked;
  return B({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Zs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ct(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Uu(e, t) {
  (t = t.checked), t != null && $l(e, "checked", t, !1);
}
function Vo(e, t) {
  Uu(e, t);
  var n = Ct(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Bo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Bo(e, t.type, Ct(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Xs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Bo(e, t, n) {
  (t !== "number" || si(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Bn = Array.isArray;
function pn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ct(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ho(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return B({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Gs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (Bn(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ct(n) };
}
function Mu(e, t) {
  var n = Ct(t.value),
    r = Ct(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ys(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Du(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ko(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Du(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Or,
  Fu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Or = Or || document.createElement("div"),
          Or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Or.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function rr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Zn = {
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
  Pf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zn).forEach(function (e) {
  Pf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zn[t] = Zn[e]);
  });
});
function Au(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Zn.hasOwnProperty(e) && Zn[e])
    ? ("" + t).trim()
    : t + "px";
}
function $u(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Au(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var jf = B(
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
  }
);
function Zo(e, t) {
  if (t) {
    if (jf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function Xo(e, t) {
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
var Go = null;
function Hl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Yo = null,
  hn = null,
  mn = null;
function Qs(e) {
  if ((e = Er(e))) {
    if (typeof Yo != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = Fi(t)), Yo(e.stateNode, e.type, t));
  }
}
function Wu(e) {
  hn ? (mn ? mn.push(e) : (mn = [e])) : (hn = e);
}
function Vu() {
  if (hn) {
    var e = hn,
      t = mn;
    if (((mn = hn = null), Qs(e), t)) for (e = 0; e < t.length; e++) Qs(t[e]);
  }
}
function Bu(e, t) {
  return e(t);
}
function Hu() {}
var oo = !1;
function Ku(e, t, n) {
  if (oo) return e(t, n);
  oo = !0;
  try {
    return Bu(e, t, n);
  } finally {
    (oo = !1), (hn !== null || mn !== null) && (Hu(), Vu());
  }
}
function ir(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fi(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var Qo = !1;
if (qe)
  try {
    var On = {};
    Object.defineProperty(On, "passive", {
      get: function () {
        Qo = !0;
      },
    }),
      window.addEventListener("test", On, On),
      window.removeEventListener("test", On, On);
  } catch {
    Qo = !1;
  }
function Nf(e, t, n, r, i, o, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Xn = !1,
  ai = null,
  ui = !1,
  Jo = null,
  If = {
    onError: function (e) {
      (Xn = !0), (ai = e);
    },
  };
function Tf(e, t, n, r, i, o, l, s, a) {
  (Xn = !1), (ai = null), Nf.apply(If, arguments);
}
function Lf(e, t, n, r, i, o, l, s, a) {
  if ((Tf.apply(this, arguments), Xn)) {
    if (Xn) {
      var u = ai;
      (Xn = !1), (ai = null);
    } else throw Error(_(198));
    ui || ((ui = !0), (Jo = u));
  }
}
function Yt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Zu(e) {
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
function Js(e) {
  if (Yt(e) !== e) throw Error(_(188));
}
function zf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Yt(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Js(i), e;
        if (o === r) return Js(i), t;
        o = o.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (s === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function Xu(e) {
  return (e = zf(e)), e !== null ? Gu(e) : null;
}
function Gu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Gu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Yu = Se.unstable_scheduleCallback,
  bs = Se.unstable_cancelCallback,
  Of = Se.unstable_shouldYield,
  Rf = Se.unstable_requestPaint,
  X = Se.unstable_now,
  Uf = Se.unstable_getCurrentPriorityLevel,
  Kl = Se.unstable_ImmediatePriority,
  Qu = Se.unstable_UserBlockingPriority,
  ci = Se.unstable_NormalPriority,
  Mf = Se.unstable_LowPriority,
  Ju = Se.unstable_IdlePriority,
  Ri = null,
  He = null;
function Df(e) {
  if (He && typeof He.onCommitFiberRoot == "function")
    try {
      He.onCommitFiberRoot(Ri, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Me = Math.clz32 ? Math.clz32 : $f,
  Ff = Math.log,
  Af = Math.LN2;
function $f(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ff(e) / Af) | 0)) | 0;
}
var Rr = 64,
  Ur = 4194304;
function Hn(e) {
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
function di(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? (r = Hn(s)) : ((o &= l), o !== 0 && (r = Hn(o)));
  } else (l = n & ~i), l !== 0 ? (r = Hn(l)) : o !== 0 && (r = Hn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Me(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Wf(e, t) {
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
function Vf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - Me(o),
      s = 1 << l,
      a = i[l];
    a === -1
      ? (!(s & n) || s & r) && (i[l] = Wf(s, t))
      : a <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function bo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function bu() {
  var e = Rr;
  return (Rr <<= 1), !(Rr & 4194240) && (Rr = 64), e;
}
function lo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Cr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Me(t)),
    (e[t] = n);
}
function Bf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Me(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Zl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var M = 0;
function qu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ec,
  Xl,
  tc,
  nc,
  rc,
  qo = !1,
  Mr = [],
  ht = null,
  mt = null,
  vt = null,
  or = new Map(),
  lr = new Map(),
  ut = [],
  Hf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function qs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ht = null;
      break;
    case "dragenter":
    case "dragleave":
      mt = null;
      break;
    case "mouseover":
    case "mouseout":
      vt = null;
      break;
    case "pointerover":
    case "pointerout":
      or.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      lr.delete(t.pointerId);
  }
}
function Rn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Er(t)), t !== null && Xl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Kf(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (ht = Rn(ht, e, t, n, r, i)), !0;
    case "dragenter":
      return (mt = Rn(mt, e, t, n, r, i)), !0;
    case "mouseover":
      return (vt = Rn(vt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return or.set(o, Rn(or.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), lr.set(o, Rn(lr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function ic(e) {
  var t = Dt(e.target);
  if (t !== null) {
    var n = Yt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zu(n)), t !== null)) {
          (e.blockedOn = t),
            rc(e.priority, function () {
              tc(n);
            });
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
function Qr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = el(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Go = r), n.target.dispatchEvent(r), (Go = null);
    } else return (t = Er(n)), t !== null && Xl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ea(e, t, n) {
  Qr(e) && n.delete(t);
}
function Zf() {
  (qo = !1),
    ht !== null && Qr(ht) && (ht = null),
    mt !== null && Qr(mt) && (mt = null),
    vt !== null && Qr(vt) && (vt = null),
    or.forEach(ea),
    lr.forEach(ea);
}
function Un(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    qo ||
      ((qo = !0),
      Se.unstable_scheduleCallback(Se.unstable_NormalPriority, Zf)));
}
function sr(e) {
  function t(i) {
    return Un(i, e);
  }
  if (0 < Mr.length) {
    Un(Mr[0], e);
    for (var n = 1; n < Mr.length; n++) {
      var r = Mr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ht !== null && Un(ht, e),
      mt !== null && Un(mt, e),
      vt !== null && Un(vt, e),
      or.forEach(t),
      lr.forEach(t),
      n = 0;
    n < ut.length;
    n++
  )
    (r = ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ut.length && ((n = ut[0]), n.blockedOn === null); )
    ic(n), n.blockedOn === null && ut.shift();
}
var vn = rt.ReactCurrentBatchConfig,
  fi = !0;
function Xf(e, t, n, r) {
  var i = M,
    o = vn.transition;
  vn.transition = null;
  try {
    (M = 1), Gl(e, t, n, r);
  } finally {
    (M = i), (vn.transition = o);
  }
}
function Gf(e, t, n, r) {
  var i = M,
    o = vn.transition;
  vn.transition = null;
  try {
    (M = 4), Gl(e, t, n, r);
  } finally {
    (M = i), (vn.transition = o);
  }
}
function Gl(e, t, n, r) {
  if (fi) {
    var i = el(e, t, n, r);
    if (i === null) go(e, t, r, pi, n), qs(e, r);
    else if (Kf(i, e, t, n, r)) r.stopPropagation();
    else if ((qs(e, r), t & 4 && -1 < Hf.indexOf(e))) {
      for (; i !== null; ) {
        var o = Er(i);
        if (
          (o !== null && ec(o),
          (o = el(e, t, n, r)),
          o === null && go(e, t, r, pi, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else go(e, t, r, null, n);
  }
}
var pi = null;
function el(e, t, n, r) {
  if (((pi = null), (e = Hl(r)), (e = Dt(e)), e !== null))
    if (((t = Yt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Zu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (pi = e), null;
}
function oc(e) {
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
      switch (Uf()) {
        case Kl:
          return 1;
        case Qu:
          return 4;
        case ci:
        case Mf:
          return 16;
        case Ju:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dt = null,
  Yl = null,
  Jr = null;
function lc() {
  if (Jr) return Jr;
  var e,
    t = Yl,
    n = t.length,
    r,
    i = "value" in dt ? dt.value : dt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (Jr = i.slice(e, 1 < r ? 1 - r : void 0));
}
function br(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Dr() {
  return !0;
}
function ta() {
  return !1;
}
function _e(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Dr
        : ta),
      (this.isPropagationStopped = ta),
      this
    );
  }
  return (
    B(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Dr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Dr));
      },
      persist: function () {},
      isPersistent: Dr,
    }),
    t
  );
}
var jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ql = _e(jn),
  _r = B({}, jn, { view: 0, detail: 0 }),
  Yf = _e(_r),
  so,
  ao,
  Mn,
  Ui = B({}, _r, {
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
    getModifierState: Jl,
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
        : (e !== Mn &&
            (Mn && e.type === "mousemove"
              ? ((so = e.screenX - Mn.screenX), (ao = e.screenY - Mn.screenY))
              : (ao = so = 0),
            (Mn = e)),
          so);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ao;
    },
  }),
  na = _e(Ui),
  Qf = B({}, Ui, { dataTransfer: 0 }),
  Jf = _e(Qf),
  bf = B({}, _r, { relatedTarget: 0 }),
  uo = _e(bf),
  qf = B({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ep = _e(qf),
  tp = B({}, jn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  np = _e(tp),
  rp = B({}, jn, { data: 0 }),
  ra = _e(rp),
  ip = {
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
  op = {
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
  lp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function sp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = lp[e]) ? !!t[e] : !1;
}
function Jl() {
  return sp;
}
var ap = B({}, _r, {
    key: function (e) {
      if (e.key) {
        var t = ip[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = br(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? op[e.keyCode] || "Unidentified"
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
    getModifierState: Jl,
    charCode: function (e) {
      return e.type === "keypress" ? br(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? br(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  up = _e(ap),
  cp = B({}, Ui, {
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
  ia = _e(cp),
  dp = B({}, _r, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Jl,
  }),
  fp = _e(dp),
  pp = B({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hp = _e(pp),
  mp = B({}, Ui, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  vp = _e(mp),
  gp = [9, 13, 27, 32],
  bl = qe && "CompositionEvent" in window,
  Gn = null;
qe && "documentMode" in document && (Gn = document.documentMode);
var yp = qe && "TextEvent" in window && !Gn,
  sc = qe && (!bl || (Gn && 8 < Gn && 11 >= Gn)),
  oa = " ",
  la = !1;
function ac(e, t) {
  switch (e) {
    case "keyup":
      return gp.indexOf(t.keyCode) !== -1;
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
function uc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var nn = !1;
function wp(e, t) {
  switch (e) {
    case "compositionend":
      return uc(t);
    case "keypress":
      return t.which !== 32 ? null : ((la = !0), oa);
    case "textInput":
      return (e = t.data), e === oa && la ? null : e;
    default:
      return null;
  }
}
function kp(e, t) {
  if (nn)
    return e === "compositionend" || (!bl && ac(e, t))
      ? ((e = lc()), (Jr = Yl = dt = null), (nn = !1), e)
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
      return sc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var xp = {
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
function sa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!xp[e.type] : t === "textarea";
}
function cc(e, t, n, r) {
  Wu(r),
    (t = hi(t, "onChange")),
    0 < t.length &&
      ((n = new Ql("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Yn = null,
  ar = null;
function Sp(e) {
  xc(e, 0);
}
function Mi(e) {
  var t = ln(e);
  if (Ru(t)) return e;
}
function Cp(e, t) {
  if (e === "change") return t;
}
var dc = !1;
if (qe) {
  var co;
  if (qe) {
    var fo = "oninput" in document;
    if (!fo) {
      var aa = document.createElement("div");
      aa.setAttribute("oninput", "return;"),
        (fo = typeof aa.oninput == "function");
    }
    co = fo;
  } else co = !1;
  dc = co && (!document.documentMode || 9 < document.documentMode);
}
function ua() {
  Yn && (Yn.detachEvent("onpropertychange", fc), (ar = Yn = null));
}
function fc(e) {
  if (e.propertyName === "value" && Mi(ar)) {
    var t = [];
    cc(t, ar, e, Hl(e)), Ku(Sp, t);
  }
}
function _p(e, t, n) {
  e === "focusin"
    ? (ua(), (Yn = t), (ar = n), Yn.attachEvent("onpropertychange", fc))
    : e === "focusout" && ua();
}
function Ep(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Mi(ar);
}
function Pp(e, t) {
  if (e === "click") return Mi(t);
}
function jp(e, t) {
  if (e === "input" || e === "change") return Mi(t);
}
function Np(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fe = typeof Object.is == "function" ? Object.is : Np;
function ur(e, t) {
  if (Fe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Mo.call(t, i) || !Fe(e[i], t[i])) return !1;
  }
  return !0;
}
function ca(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function da(e, t) {
  var n = ca(e);
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
    n = ca(n);
  }
}
function pc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? pc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function hc() {
  for (var e = window, t = si(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = si(e.document);
  }
  return t;
}
function ql(e) {
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
function Ip(e) {
  var t = hc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    pc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ql(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = da(n, o));
        var l = da(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Tp = qe && "documentMode" in document && 11 >= document.documentMode,
  rn = null,
  tl = null,
  Qn = null,
  nl = !1;
function fa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  nl ||
    rn == null ||
    rn !== si(r) ||
    ((r = rn),
    "selectionStart" in r && ql(r)
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
    (Qn && ur(Qn, r)) ||
      ((Qn = r),
      (r = hi(tl, "onSelect")),
      0 < r.length &&
        ((t = new Ql("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = rn))));
}
function Fr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var on = {
    animationend: Fr("Animation", "AnimationEnd"),
    animationiteration: Fr("Animation", "AnimationIteration"),
    animationstart: Fr("Animation", "AnimationStart"),
    transitionend: Fr("Transition", "TransitionEnd"),
  },
  po = {},
  mc = {};
qe &&
  ((mc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete on.animationend.animation,
    delete on.animationiteration.animation,
    delete on.animationstart.animation),
  "TransitionEvent" in window || delete on.transitionend.transition);
function Di(e) {
  if (po[e]) return po[e];
  if (!on[e]) return e;
  var t = on[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in mc) return (po[e] = t[n]);
  return e;
}
var vc = Di("animationend"),
  gc = Di("animationiteration"),
  yc = Di("animationstart"),
  wc = Di("transitionend"),
  kc = new Map(),
  pa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Et(e, t) {
  kc.set(e, t), Gt(t, [e]);
}
for (var ho = 0; ho < pa.length; ho++) {
  var mo = pa[ho],
    Lp = mo.toLowerCase(),
    zp = mo[0].toUpperCase() + mo.slice(1);
  Et(Lp, "on" + zp);
}
Et(vc, "onAnimationEnd");
Et(gc, "onAnimationIteration");
Et(yc, "onAnimationStart");
Et("dblclick", "onDoubleClick");
Et("focusin", "onFocus");
Et("focusout", "onBlur");
Et(wc, "onTransitionEnd");
wn("onMouseEnter", ["mouseout", "mouseover"]);
wn("onMouseLeave", ["mouseout", "mouseover"]);
wn("onPointerEnter", ["pointerout", "pointerover"]);
wn("onPointerLeave", ["pointerout", "pointerover"]);
Gt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Gt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Gt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Gt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Gt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Gt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Kn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Op = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kn));
function ha(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Lf(r, t, void 0, e), (e.currentTarget = null);
}
function xc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== o && i.isPropagationStopped())) break e;
          ha(i, s, u), (o = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          ha(i, s, u), (o = a);
        }
    }
  }
  if (ui) throw ((e = Jo), (ui = !1), (Jo = null), e);
}
function F(e, t) {
  var n = t[sl];
  n === void 0 && (n = t[sl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Sc(t, e, 2, !1), n.add(r));
}
function vo(e, t, n) {
  var r = 0;
  t && (r |= 4), Sc(n, e, r, t);
}
var Ar = "_reactListening" + Math.random().toString(36).slice(2);
function cr(e) {
  if (!e[Ar]) {
    (e[Ar] = !0),
      Iu.forEach(function (n) {
        n !== "selectionchange" && (Op.has(n) || vo(n, !1, e), vo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ar] || ((t[Ar] = !0), vo("selectionchange", !1, t));
  }
}
function Sc(e, t, n, r) {
  switch (oc(t)) {
    case 1:
      var i = Xf;
      break;
    case 4:
      i = Gf;
      break;
    default:
      i = Gl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Qo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function go(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = Dt(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = o = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Ku(function () {
    var u = o,
      d = Hl(n),
      c = [];
    e: {
      var p = kc.get(e);
      if (p !== void 0) {
        var g = Ql,
          y = e;
        switch (e) {
          case "keypress":
            if (br(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = up;
            break;
          case "focusin":
            (y = "focus"), (g = uo);
            break;
          case "focusout":
            (y = "blur"), (g = uo);
            break;
          case "beforeblur":
          case "afterblur":
            g = uo;
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
            g = na;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Jf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = fp;
            break;
          case vc:
          case gc:
          case yc:
            g = ep;
            break;
          case wc:
            g = hp;
            break;
          case "scroll":
            g = Yf;
            break;
          case "wheel":
            g = vp;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = np;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = ia;
        }
        var k = (t & 4) !== 0,
          S = !k && e === "scroll",
          h = k ? (p !== null ? p + "Capture" : null) : p;
        k = [];
        for (var f = u, m; f !== null; ) {
          m = f;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              h !== null && ((w = ir(f, h)), w != null && k.push(dr(f, w, m)))),
            S)
          )
            break;
          f = f.return;
        }
        0 < k.length &&
          ((p = new g(p, y, null, n, d)), c.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Go &&
            (y = n.relatedTarget || n.fromElement) &&
            (Dt(y) || y[et]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? Dt(y) : null),
              y !== null &&
                ((S = Yt(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((k = na),
            (w = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = ia),
              (w = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (S = g == null ? p : ln(g)),
            (m = y == null ? p : ln(y)),
            (p = new k(w, f + "leave", g, n, d)),
            (p.target = S),
            (p.relatedTarget = m),
            (w = null),
            Dt(d) === u &&
              ((k = new k(h, f + "enter", y, n, d)),
              (k.target = m),
              (k.relatedTarget = S),
              (w = k)),
            (S = w),
            g && y)
          )
            t: {
              for (k = g, h = y, f = 0, m = k; m; m = Qt(m)) f++;
              for (m = 0, w = h; w; w = Qt(w)) m++;
              for (; 0 < f - m; ) (k = Qt(k)), f--;
              for (; 0 < m - f; ) (h = Qt(h)), m--;
              for (; f--; ) {
                if (k === h || (h !== null && k === h.alternate)) break t;
                (k = Qt(k)), (h = Qt(h));
              }
              k = null;
            }
          else k = null;
          g !== null && ma(c, p, g, k, !1),
            y !== null && S !== null && ma(c, S, y, k, !0);
        }
      }
      e: {
        if (
          ((p = u ? ln(u) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var C = Cp;
        else if (sa(p))
          if (dc) C = jp;
          else {
            C = Ep;
            var j = _p;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (C = Pp);
        if (C && (C = C(e, u))) {
          cc(c, C, n, d);
          break e;
        }
        j && j(e, p, u),
          e === "focusout" &&
            (j = p._wrapperState) &&
            j.controlled &&
            p.type === "number" &&
            Bo(p, "number", p.value);
      }
      switch (((j = u ? ln(u) : window), e)) {
        case "focusin":
          (sa(j) || j.contentEditable === "true") &&
            ((rn = j), (tl = u), (Qn = null));
          break;
        case "focusout":
          Qn = tl = rn = null;
          break;
        case "mousedown":
          nl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (nl = !1), fa(c, n, d);
          break;
        case "selectionchange":
          if (Tp) break;
        case "keydown":
        case "keyup":
          fa(c, n, d);
      }
      var P;
      if (bl)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        nn
          ? ac(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (sc &&
          n.locale !== "ko" &&
          (nn || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && nn && (P = lc())
            : ((dt = d),
              (Yl = "value" in dt ? dt.value : dt.textContent),
              (nn = !0))),
        (j = hi(u, E)),
        0 < j.length &&
          ((E = new ra(E, e, null, n, d)),
          c.push({ event: E, listeners: j }),
          P ? (E.data = P) : ((P = uc(n)), P !== null && (E.data = P)))),
        (P = yp ? wp(e, n) : kp(e, n)) &&
          ((u = hi(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new ra("onBeforeInput", "beforeinput", null, n, d)),
            c.push({ event: d, listeners: u }),
            (d.data = P)));
    }
    xc(c, t);
  });
}
function dr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function hi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = ir(e, n)),
      o != null && r.unshift(dr(e, o, i)),
      (o = ir(e, t)),
      o != null && r.push(dr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Qt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ma(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((a = ir(n, o)), a != null && l.unshift(dr(n, a, s)))
        : i || ((a = ir(n, o)), a != null && l.push(dr(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Rp = /\r\n?/g,
  Up = /\u0000|\uFFFD/g;
function va(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Rp,
      `
`
    )
    .replace(Up, "");
}
function $r(e, t, n) {
  if (((t = va(t)), va(e) !== t && n)) throw Error(_(425));
}
function mi() {}
var rl = null,
  il = null;
function ol(e, t) {
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
var ll = typeof setTimeout == "function" ? setTimeout : void 0,
  Mp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ga = typeof Promise == "function" ? Promise : void 0,
  Dp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ga < "u"
      ? function (e) {
          return ga.resolve(null).then(e).catch(Fp);
        }
      : ll;
function Fp(e) {
  setTimeout(function () {
    throw e;
  });
}
function yo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), sr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  sr(t);
}
function gt(e) {
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
function ya(e) {
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
var Nn = Math.random().toString(36).slice(2),
  Ve = "__reactFiber$" + Nn,
  fr = "__reactProps$" + Nn,
  et = "__reactContainer$" + Nn,
  sl = "__reactEvents$" + Nn,
  Ap = "__reactListeners$" + Nn,
  $p = "__reactHandles$" + Nn;
function Dt(e) {
  var t = e[Ve];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[et] || n[Ve])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ya(e); e !== null; ) {
          if ((n = e[Ve])) return n;
          e = ya(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Er(e) {
  return (
    (e = e[Ve] || e[et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ln(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Fi(e) {
  return e[fr] || null;
}
var al = [],
  sn = -1;
function Pt(e) {
  return { current: e };
}
function A(e) {
  0 > sn || ((e.current = al[sn]), (al[sn] = null), sn--);
}
function D(e, t) {
  sn++, (al[sn] = e.current), (e.current = t);
}
var _t = {},
  ue = Pt(_t),
  ve = Pt(!1),
  Bt = _t;
function kn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _t;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function vi() {
  A(ve), A(ue);
}
function wa(e, t, n) {
  if (ue.current !== _t) throw Error(_(168));
  D(ue, t), D(ve, n);
}
function Cc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(_(108, _f(e) || "Unknown", i));
  return B({}, n, r);
}
function gi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || _t),
    (Bt = ue.current),
    D(ue, e),
    D(ve, ve.current),
    !0
  );
}
function ka(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = Cc(e, t, Bt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      A(ve),
      A(ue),
      D(ue, e))
    : A(ve),
    D(ve, n);
}
var Ye = null,
  Ai = !1,
  wo = !1;
function _c(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
function Wp(e) {
  (Ai = !0), _c(e);
}
function jt() {
  if (!wo && Ye !== null) {
    wo = !0;
    var e = 0,
      t = M;
    try {
      var n = Ye;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ye = null), (Ai = !1);
    } catch (i) {
      throw (Ye !== null && (Ye = Ye.slice(e + 1)), Yu(Kl, jt), i);
    } finally {
      (M = t), (wo = !1);
    }
  }
  return null;
}
var an = [],
  un = 0,
  yi = null,
  wi = 0,
  Ee = [],
  Pe = 0,
  Ht = null,
  Qe = 1,
  Je = "";
function zt(e, t) {
  (an[un++] = wi), (an[un++] = yi), (yi = e), (wi = t);
}
function Ec(e, t, n) {
  (Ee[Pe++] = Qe), (Ee[Pe++] = Je), (Ee[Pe++] = Ht), (Ht = e);
  var r = Qe;
  e = Je;
  var i = 32 - Me(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Me(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (Qe = (1 << (32 - Me(t) + i)) | (n << i) | r),
      (Je = o + e);
  } else (Qe = (1 << o) | (n << i) | r), (Je = e);
}
function es(e) {
  e.return !== null && (zt(e, 1), Ec(e, 1, 0));
}
function ts(e) {
  for (; e === yi; )
    (yi = an[--un]), (an[un] = null), (wi = an[--un]), (an[un] = null);
  for (; e === Ht; )
    (Ht = Ee[--Pe]),
      (Ee[Pe] = null),
      (Je = Ee[--Pe]),
      (Ee[Pe] = null),
      (Qe = Ee[--Pe]),
      (Ee[Pe] = null);
}
var xe = null,
  ke = null,
  $ = !1,
  Ue = null;
function Pc(e, t) {
  var n = je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function xa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (xe = e), (ke = gt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (xe = e), (ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ht !== null ? { id: Qe, overflow: Je } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (xe = e),
            (ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ul(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function cl(e) {
  if ($) {
    var t = ke;
    if (t) {
      var n = t;
      if (!xa(e, t)) {
        if (ul(e)) throw Error(_(418));
        t = gt(n.nextSibling);
        var r = xe;
        t && xa(e, t)
          ? Pc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (xe = e));
      }
    } else {
      if (ul(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (xe = e);
    }
  }
}
function Sa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xe = e;
}
function Wr(e) {
  if (e !== xe) return !1;
  if (!$) return Sa(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ol(e.type, e.memoizedProps))),
    t && (t = ke))
  ) {
    if (ul(e)) throw (jc(), Error(_(418)));
    for (; t; ) Pc(e, t), (t = gt(t.nextSibling));
  }
  if ((Sa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ke = gt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = xe ? gt(e.stateNode.nextSibling) : null;
  return !0;
}
function jc() {
  for (var e = ke; e; ) e = gt(e.nextSibling);
}
function xn() {
  (ke = xe = null), ($ = !1);
}
function ns(e) {
  Ue === null ? (Ue = [e]) : Ue.push(e);
}
var Vp = rt.ReactCurrentBatchConfig;
function Dn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var s = i.refs;
            l === null ? delete s[o] : (s[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Vr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ca(e) {
  var t = e._init;
  return t(e._payload);
}
function Nc(e) {
  function t(h, f) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [f]), (h.flags |= 16)) : m.push(f);
    }
  }
  function n(h, f) {
    if (!e) return null;
    for (; f !== null; ) t(h, f), (f = f.sibling);
    return null;
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
    return h;
  }
  function i(h, f) {
    return (h = xt(h, f)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, f, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((h.flags |= 2), f) : m)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, f, m, w) {
    return f === null || f.tag !== 6
      ? ((f = Po(m, h.mode, w)), (f.return = h), f)
      : ((f = i(f, m)), (f.return = h), f);
  }
  function a(h, f, m, w) {
    var C = m.type;
    return C === tn
      ? d(h, f, m.props.children, w, m.key)
      : f !== null &&
        (f.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === st &&
            Ca(C) === f.type))
      ? ((w = i(f, m.props)), (w.ref = Dn(h, f, m)), (w.return = h), w)
      : ((w = oi(m.type, m.key, m.props, null, h.mode, w)),
        (w.ref = Dn(h, f, m)),
        (w.return = h),
        w);
  }
  function u(h, f, m, w) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = jo(m, h.mode, w)), (f.return = h), f)
      : ((f = i(f, m.children || [])), (f.return = h), f);
  }
  function d(h, f, m, w, C) {
    return f === null || f.tag !== 7
      ? ((f = Vt(m, h.mode, w, C)), (f.return = h), f)
      : ((f = i(f, m)), (f.return = h), f);
  }
  function c(h, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Po("" + f, h.mode, m)), (f.return = h), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Lr:
          return (
            (m = oi(f.type, f.key, f.props, null, h.mode, m)),
            (m.ref = Dn(h, null, f)),
            (m.return = h),
            m
          );
        case en:
          return (f = jo(f, h.mode, m)), (f.return = h), f;
        case st:
          var w = f._init;
          return c(h, w(f._payload), m);
      }
      if (Bn(f) || zn(f))
        return (f = Vt(f, h.mode, m, null)), (f.return = h), f;
      Vr(h, f);
    }
    return null;
  }
  function p(h, f, m, w) {
    var C = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return C !== null ? null : s(h, f, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Lr:
          return m.key === C ? a(h, f, m, w) : null;
        case en:
          return m.key === C ? u(h, f, m, w) : null;
        case st:
          return (C = m._init), p(h, f, C(m._payload), w);
      }
      if (Bn(m) || zn(m)) return C !== null ? null : d(h, f, m, w, null);
      Vr(h, m);
    }
    return null;
  }
  function g(h, f, m, w, C) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (h = h.get(m) || null), s(f, h, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Lr:
          return (h = h.get(w.key === null ? m : w.key) || null), a(f, h, w, C);
        case en:
          return (h = h.get(w.key === null ? m : w.key) || null), u(f, h, w, C);
        case st:
          var j = w._init;
          return g(h, f, m, j(w._payload), C);
      }
      if (Bn(w) || zn(w)) return (h = h.get(m) || null), d(f, h, w, C, null);
      Vr(f, w);
    }
    return null;
  }
  function y(h, f, m, w) {
    for (
      var C = null, j = null, P = f, E = (f = 0), I = null;
      P !== null && E < m.length;
      E++
    ) {
      P.index > E ? ((I = P), (P = null)) : (I = P.sibling);
      var L = p(h, P, m[E], w);
      if (L === null) {
        P === null && (P = I);
        break;
      }
      e && P && L.alternate === null && t(h, P),
        (f = o(L, f, E)),
        j === null ? (C = L) : (j.sibling = L),
        (j = L),
        (P = I);
    }
    if (E === m.length) return n(h, P), $ && zt(h, E), C;
    if (P === null) {
      for (; E < m.length; E++)
        (P = c(h, m[E], w)),
          P !== null &&
            ((f = o(P, f, E)), j === null ? (C = P) : (j.sibling = P), (j = P));
      return $ && zt(h, E), C;
    }
    for (P = r(h, P); E < m.length; E++)
      (I = g(P, h, E, m[E], w)),
        I !== null &&
          (e && I.alternate !== null && P.delete(I.key === null ? E : I.key),
          (f = o(I, f, E)),
          j === null ? (C = I) : (j.sibling = I),
          (j = I));
    return (
      e &&
        P.forEach(function (K) {
          return t(h, K);
        }),
      $ && zt(h, E),
      C
    );
  }
  function k(h, f, m, w) {
    var C = zn(m);
    if (typeof C != "function") throw Error(_(150));
    if (((m = C.call(m)), m == null)) throw Error(_(151));
    for (
      var j = (C = null), P = f, E = (f = 0), I = null, L = m.next();
      P !== null && !L.done;
      E++, L = m.next()
    ) {
      P.index > E ? ((I = P), (P = null)) : (I = P.sibling);
      var K = p(h, P, L.value, w);
      if (K === null) {
        P === null && (P = I);
        break;
      }
      e && P && K.alternate === null && t(h, P),
        (f = o(K, f, E)),
        j === null ? (C = K) : (j.sibling = K),
        (j = K),
        (P = I);
    }
    if (L.done) return n(h, P), $ && zt(h, E), C;
    if (P === null) {
      for (; !L.done; E++, L = m.next())
        (L = c(h, L.value, w)),
          L !== null &&
            ((f = o(L, f, E)), j === null ? (C = L) : (j.sibling = L), (j = L));
      return $ && zt(h, E), C;
    }
    for (P = r(h, P); !L.done; E++, L = m.next())
      (L = g(P, h, E, L.value, w)),
        L !== null &&
          (e && L.alternate !== null && P.delete(L.key === null ? E : L.key),
          (f = o(L, f, E)),
          j === null ? (C = L) : (j.sibling = L),
          (j = L));
    return (
      e &&
        P.forEach(function (Ze) {
          return t(h, Ze);
        }),
      $ && zt(h, E),
      C
    );
  }
  function S(h, f, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === tn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Lr:
          e: {
            for (var C = m.key, j = f; j !== null; ) {
              if (j.key === C) {
                if (((C = m.type), C === tn)) {
                  if (j.tag === 7) {
                    n(h, j.sibling),
                      (f = i(j, m.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  j.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === st &&
                    Ca(C) === j.type)
                ) {
                  n(h, j.sibling),
                    (f = i(j, m.props)),
                    (f.ref = Dn(h, j, m)),
                    (f.return = h),
                    (h = f);
                  break e;
                }
                n(h, j);
                break;
              } else t(h, j);
              j = j.sibling;
            }
            m.type === tn
              ? ((f = Vt(m.props.children, h.mode, w, m.key)),
                (f.return = h),
                (h = f))
              : ((w = oi(m.type, m.key, m.props, null, h.mode, w)),
                (w.ref = Dn(h, f, m)),
                (w.return = h),
                (h = w));
          }
          return l(h);
        case en:
          e: {
            for (j = m.key; f !== null; ) {
              if (f.key === j)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(h, f.sibling),
                    (f = i(f, m.children || [])),
                    (f.return = h),
                    (h = f);
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else t(h, f);
              f = f.sibling;
            }
            (f = jo(m, h.mode, w)), (f.return = h), (h = f);
          }
          return l(h);
        case st:
          return (j = m._init), S(h, f, j(m._payload), w);
      }
      if (Bn(m)) return y(h, f, m, w);
      if (zn(m)) return k(h, f, m, w);
      Vr(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = i(f, m)), (f.return = h), (h = f))
          : (n(h, f), (f = Po(m, h.mode, w)), (f.return = h), (h = f)),
        l(h))
      : n(h, f);
  }
  return S;
}
var Sn = Nc(!0),
  Ic = Nc(!1),
  ki = Pt(null),
  xi = null,
  cn = null,
  rs = null;
function is() {
  rs = cn = xi = null;
}
function os(e) {
  var t = ki.current;
  A(ki), (e._currentValue = t);
}
function dl(e, t, n) {
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
function gn(e, t) {
  (xi = e),
    (rs = cn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (me = !0), (e.firstContext = null));
}
function Ie(e) {
  var t = e._currentValue;
  if (rs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), cn === null)) {
      if (xi === null) throw Error(_(308));
      (cn = e), (xi.dependencies = { lanes: 0, firstContext: e });
    } else cn = cn.next = e;
  return t;
}
var Ft = null;
function ls(e) {
  Ft === null ? (Ft = [e]) : Ft.push(e);
}
function Tc(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), ls(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    tt(e, r)
  );
}
function tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var at = !1;
function ss(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Lc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function be(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), U & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      tt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), ls(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    tt(e, n)
  );
}
function qr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zl(e, n);
  }
}
function _a(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Si(e, t, n, r) {
  var i = e.updateQueue;
  at = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), l === null ? (o = u) : (l.next = u), (l = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== l &&
        (s === null ? (d.firstBaseUpdate = u) : (s.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var c = i.baseState;
    (l = 0), (d = u = a = null), (s = o);
    do {
      var p = s.lane,
        g = s.eventTime;
      if ((r & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: g,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            k = s;
          switch (((p = t), (g = n), k.tag)) {
            case 1:
              if (((y = k.payload), typeof y == "function")) {
                c = y.call(g, c, p);
                break e;
              }
              c = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = k.payload),
                (p = typeof y == "function" ? y.call(g, c, p) : y),
                p == null)
              )
                break e;
              c = B({}, c, p);
              break e;
            case 2:
              at = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [s]) : p.push(s));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((u = d = g), (a = c)) : (d = d.next = g),
          (l |= p);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (p = s),
          (s = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = c),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Zt |= l), (e.lanes = l), (e.memoizedState = c);
  }
}
function Ea(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(_(191, i));
        i.call(r);
      }
    }
}
var Pr = {},
  Ke = Pt(Pr),
  pr = Pt(Pr),
  hr = Pt(Pr);
function At(e) {
  if (e === Pr) throw Error(_(174));
  return e;
}
function as(e, t) {
  switch ((D(hr, t), D(pr, e), D(Ke, Pr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ko(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ko(t, e));
  }
  A(Ke), D(Ke, t);
}
function Cn() {
  A(Ke), A(pr), A(hr);
}
function zc(e) {
  At(hr.current);
  var t = At(Ke.current),
    n = Ko(t, e.type);
  t !== n && (D(pr, e), D(Ke, n));
}
function us(e) {
  pr.current === e && (A(Ke), A(pr));
}
var W = Pt(0);
function Ci(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ko = [];
function cs() {
  for (var e = 0; e < ko.length; e++)
    ko[e]._workInProgressVersionPrimary = null;
  ko.length = 0;
}
var ei = rt.ReactCurrentDispatcher,
  xo = rt.ReactCurrentBatchConfig,
  Kt = 0,
  V = null,
  Q = null,
  ee = null,
  _i = !1,
  Jn = !1,
  mr = 0,
  Bp = 0;
function oe() {
  throw Error(_(321));
}
function ds(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function fs(e, t, n, r, i, o) {
  if (
    ((Kt = o),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ei.current = e === null || e.memoizedState === null ? Xp : Gp),
    (e = n(r, i)),
    Jn)
  ) {
    o = 0;
    do {
      if (((Jn = !1), (mr = 0), 25 <= o)) throw Error(_(301));
      (o += 1),
        (ee = Q = null),
        (t.updateQueue = null),
        (ei.current = Yp),
        (e = n(r, i));
    } while (Jn);
  }
  if (
    ((ei.current = Ei),
    (t = Q !== null && Q.next !== null),
    (Kt = 0),
    (ee = Q = V = null),
    (_i = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function ps() {
  var e = mr !== 0;
  return (mr = 0), e;
}
function $e() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ee === null ? (V.memoizedState = ee = e) : (ee = ee.next = e), ee;
}
function Te() {
  if (Q === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Q.next;
  var t = ee === null ? V.memoizedState : ee.next;
  if (t !== null) (ee = t), (Q = e);
  else {
    if (e === null) throw Error(_(310));
    (Q = e),
      (e = {
        memoizedState: Q.memoizedState,
        baseState: Q.baseState,
        baseQueue: Q.baseQueue,
        queue: Q.queue,
        next: null,
      }),
      ee === null ? (V.memoizedState = ee = e) : (ee = ee.next = e);
  }
  return ee;
}
function vr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function So(e) {
  var t = Te(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = Q,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      u = o;
    do {
      var d = u.lane;
      if ((Kt & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var c = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = c), (l = r)) : (a = a.next = c),
          (V.lanes |= d),
          (Zt |= d);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (l = r) : (a.next = s),
      Fe(r, t.memoizedState) || (me = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (V.lanes |= o), (Zt |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Co(e) {
  var t = Te(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    Fe(o, t.memoizedState) || (me = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Oc() {}
function Rc(e, t) {
  var n = V,
    r = Te(),
    i = t(),
    o = !Fe(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (me = !0)),
    (r = r.queue),
    hs(Dc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      gr(9, Mc.bind(null, n, r, i, t), void 0, null),
      te === null)
    )
      throw Error(_(349));
    Kt & 30 || Uc(n, t, i);
  }
  return i;
}
function Uc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Mc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Fc(t) && Ac(e);
}
function Dc(e, t, n) {
  return n(function () {
    Fc(t) && Ac(e);
  });
}
function Fc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function Ac(e) {
  var t = tt(e, 1);
  t !== null && De(t, e, 1, -1);
}
function Pa(e) {
  var t = $e();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Zp.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function gr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function $c() {
  return Te().memoizedState;
}
function ti(e, t, n, r) {
  var i = $e();
  (V.flags |= e),
    (i.memoizedState = gr(1 | t, n, void 0, r === void 0 ? null : r));
}
function $i(e, t, n, r) {
  var i = Te();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Q !== null) {
    var l = Q.memoizedState;
    if (((o = l.destroy), r !== null && ds(r, l.deps))) {
      i.memoizedState = gr(t, n, o, r);
      return;
    }
  }
  (V.flags |= e), (i.memoizedState = gr(1 | t, n, o, r));
}
function ja(e, t) {
  return ti(8390656, 8, e, t);
}
function hs(e, t) {
  return $i(2048, 8, e, t);
}
function Wc(e, t) {
  return $i(4, 2, e, t);
}
function Vc(e, t) {
  return $i(4, 4, e, t);
}
function Bc(e, t) {
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
function Hc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), $i(4, 4, Bc.bind(null, t, e), n)
  );
}
function ms() {}
function Kc(e, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ds(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Zc(e, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ds(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Xc(e, t, n) {
  return Kt & 21
    ? (Fe(n, t) || ((n = bu()), (V.lanes |= n), (Zt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n));
}
function Hp(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = xo.transition;
  xo.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (xo.transition = r);
  }
}
function Gc() {
  return Te().memoizedState;
}
function Kp(e, t, n) {
  var r = kt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Yc(e))
  )
    Qc(t, n);
  else if (((n = Tc(e, t, n, r)), n !== null)) {
    var i = de();
    De(n, e, r, i), Jc(n, t, r);
  }
}
function Zp(e, t, n) {
  var r = kt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Yc(e)) Qc(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), Fe(s, l))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), ls(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Tc(e, t, i, r)),
      n !== null && ((i = de()), De(n, e, r, i), Jc(n, t, r));
  }
}
function Yc(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function Qc(e, t) {
  Jn = _i = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Jc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zl(e, n);
  }
}
var Ei = {
    readContext: Ie,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  Xp = {
    readContext: Ie,
    useCallback: function (e, t) {
      return ($e().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ie,
    useEffect: ja,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ti(4194308, 4, Bc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ti(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ti(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = $e();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = $e();
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
        (e = e.dispatch = Kp.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = $e();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Pa,
    useDebugValue: ms,
    useDeferredValue: function (e) {
      return ($e().memoizedState = e);
    },
    useTransition: function () {
      var e = Pa(!1),
        t = e[0];
      return (e = Hp.bind(null, e[1])), ($e().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        i = $e();
      if ($) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), te === null)) throw Error(_(349));
        Kt & 30 || Uc(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        ja(Dc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        gr(9, Mc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = $e(),
        t = te.identifierPrefix;
      if ($) {
        var n = Je,
          r = Qe;
        (n = (r & ~(1 << (32 - Me(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = mr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Bp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Gp = {
    readContext: Ie,
    useCallback: Kc,
    useContext: Ie,
    useEffect: hs,
    useImperativeHandle: Hc,
    useInsertionEffect: Wc,
    useLayoutEffect: Vc,
    useMemo: Zc,
    useReducer: So,
    useRef: $c,
    useState: function () {
      return So(vr);
    },
    useDebugValue: ms,
    useDeferredValue: function (e) {
      var t = Te();
      return Xc(t, Q.memoizedState, e);
    },
    useTransition: function () {
      var e = So(vr)[0],
        t = Te().memoizedState;
      return [e, t];
    },
    useMutableSource: Oc,
    useSyncExternalStore: Rc,
    useId: Gc,
    unstable_isNewReconciler: !1,
  },
  Yp = {
    readContext: Ie,
    useCallback: Kc,
    useContext: Ie,
    useEffect: hs,
    useImperativeHandle: Hc,
    useInsertionEffect: Wc,
    useLayoutEffect: Vc,
    useMemo: Zc,
    useReducer: Co,
    useRef: $c,
    useState: function () {
      return Co(vr);
    },
    useDebugValue: ms,
    useDeferredValue: function (e) {
      var t = Te();
      return Q === null ? (t.memoizedState = e) : Xc(t, Q.memoizedState, e);
    },
    useTransition: function () {
      var e = Co(vr)[0],
        t = Te().memoizedState;
      return [e, t];
    },
    useMutableSource: Oc,
    useSyncExternalStore: Rc,
    useId: Gc,
    unstable_isNewReconciler: !1,
  };
function Oe(e, t) {
  if (e && e.defaultProps) {
    (t = B({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function fl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : B({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Wi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Yt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      i = kt(e),
      o = be(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = yt(e, o, i)),
      t !== null && (De(t, e, i, r), qr(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      i = kt(e),
      o = be(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = yt(e, o, i)),
      t !== null && (De(t, e, i, r), qr(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = kt(e),
      i = be(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = yt(e, i, r)),
      t !== null && (De(t, e, r, n), qr(t, e, r));
  },
};
function Na(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ur(n, r) || !ur(i, o)
      : !0
  );
}
function bc(e, t, n) {
  var r = !1,
    i = _t,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ie(o))
      : ((i = ge(t) ? Bt : ue.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? kn(e, i) : _t)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Wi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ia(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Wi.enqueueReplaceState(t, t.state, null);
}
function pl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), ss(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Ie(o))
    : ((o = ge(t) ? Bt : ue.current), (i.context = kn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (fl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Wi.enqueueReplaceState(i, i.state, null),
      Si(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function _n(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Cf(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function _o(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function hl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Qp = typeof WeakMap == "function" ? WeakMap : Map;
function qc(e, t, n) {
  (n = be(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ji || ((ji = !0), (_l = r)), hl(e, t);
    }),
    n
  );
}
function ed(e, t, n) {
  (n = be(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        hl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        hl(e, t),
          typeof r != "function" &&
            (wt === null ? (wt = new Set([this])) : wt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Ta(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Qp();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = ch.bind(null, e, t, n)), t.then(e, e));
}
function La(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function za(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = be(-1, 1)), (t.tag = 2), yt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Jp = rt.ReactCurrentOwner,
  me = !1;
function ce(e, t, n, r) {
  t.child = e === null ? Ic(t, null, n, r) : Sn(t, e.child, n, r);
}
function Oa(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    gn(t, i),
    (r = fs(e, t, n, r, o, i)),
    (n = ps()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        nt(e, t, i))
      : ($ && n && es(t), (t.flags |= 1), ce(e, t, r, i), t.child)
  );
}
function Ra(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Cs(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), td(e, t, o, r, i))
      : ((e = oi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ur), n(l, r) && e.ref === t.ref)
    )
      return nt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = xt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function td(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ur(o, r) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (me = !0);
      else return (t.lanes = e.lanes), nt(e, t, i);
  }
  return ml(e, t, n, r, i);
}
function nd(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(fn, we),
        (we |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(fn, we),
          (we |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        D(fn, we),
        (we |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(fn, we),
      (we |= r);
  return ce(e, t, i, n), t.child;
}
function rd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ml(e, t, n, r, i) {
  var o = ge(n) ? Bt : ue.current;
  return (
    (o = kn(t, o)),
    gn(t, i),
    (n = fs(e, t, n, r, o, i)),
    (r = ps()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        nt(e, t, i))
      : ($ && r && es(t), (t.flags |= 1), ce(e, t, n, i), t.child)
  );
}
function Ua(e, t, n, r, i) {
  if (ge(n)) {
    var o = !0;
    gi(t);
  } else o = !1;
  if ((gn(t, i), t.stateNode === null))
    ni(e, t), bc(t, n, r), pl(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ie(u))
      : ((u = ge(n) ? Bt : ue.current), (u = kn(t, u)));
    var d = n.getDerivedStateFromProps,
      c =
        typeof d == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Ia(t, l, r, u)),
      (at = !1);
    var p = t.memoizedState;
    (l.state = p),
      Si(t, r, l, i),
      (a = t.memoizedState),
      s !== r || p !== a || ve.current || at
        ? (typeof d == "function" && (fl(t, n, d, r), (a = t.memoizedState)),
          (s = at || Na(t, n, s, r, p, a, u))
            ? (c ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Lc(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Oe(t.type, s)),
      (l.props = u),
      (c = t.pendingProps),
      (p = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ie(a))
        : ((a = ge(n) ? Bt : ue.current), (a = kn(t, a)));
    var g = n.getDerivedStateFromProps;
    (d =
      typeof g == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== c || p !== a) && Ia(t, l, r, a)),
      (at = !1),
      (p = t.memoizedState),
      (l.state = p),
      Si(t, r, l, i);
    var y = t.memoizedState;
    s !== c || p !== y || ve.current || at
      ? (typeof g == "function" && (fl(t, n, g, r), (y = t.memoizedState)),
        (u = at || Na(t, n, u, r, p, y, a) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, y, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, y, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (l.props = r),
        (l.state = y),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return vl(e, t, n, r, o, i);
}
function vl(e, t, n, r, i, o) {
  rd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && ka(t, n, !1), nt(e, t, o);
  (r = t.stateNode), (Jp.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Sn(t, e.child, null, o)), (t.child = Sn(t, null, s, o)))
      : ce(e, t, s, o),
    (t.memoizedState = r.state),
    i && ka(t, n, !0),
    t.child
  );
}
function id(e) {
  var t = e.stateNode;
  t.pendingContext
    ? wa(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && wa(e, t.context, !1),
    as(e, t.containerInfo);
}
function Ma(e, t, n, r, i) {
  return xn(), ns(i), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var gl = { dehydrated: null, treeContext: null, retryLane: 0 };
function yl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function od(e, t, n) {
  var r = t.pendingProps,
    i = W.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    D(W, i & 1),
    e === null)
  )
    return (
      cl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = Hi(l, r, 0, null)),
              (e = Vt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = yl(n)),
              (t.memoizedState = gl),
              e)
            : vs(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return bp(e, t, l, r, s, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (s = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = xt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = xt(s, o)) : ((o = Vt(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? yl(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = gl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = xt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
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
function vs(e, t) {
  return (
    (t = Hi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Br(e, t, n, r) {
  return (
    r !== null && ns(r),
    Sn(t, e.child, null, n),
    (e = vs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function bp(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = _o(Error(_(422)))), Br(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Hi({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Vt(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Sn(t, e.child, null, l),
        (t.child.memoizedState = yl(l)),
        (t.memoizedState = gl),
        o);
  if (!(t.mode & 1)) return Br(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(_(419))), (r = _o(o, r, void 0)), Br(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), me || s)) {
    if (((r = te), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), tt(e, i), De(r, e, i, -1));
    }
    return Ss(), (r = _o(Error(_(421)))), Br(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = dh.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ke = gt(i.nextSibling)),
      (xe = t),
      ($ = !0),
      (Ue = null),
      e !== null &&
        ((Ee[Pe++] = Qe),
        (Ee[Pe++] = Je),
        (Ee[Pe++] = Ht),
        (Qe = e.id),
        (Je = e.overflow),
        (Ht = t)),
      (t = vs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Da(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), dl(e.return, t, n);
}
function Eo(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function ld(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ce(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Da(e, n, t);
        else if (e.tag === 19) Da(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Ci(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Eo(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ci(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Eo(t, !0, n, null, o);
        break;
      case "together":
        Eo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ni(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Zt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = xt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function qp(e, t, n) {
  switch (t.tag) {
    case 3:
      id(t), xn();
      break;
    case 5:
      zc(t);
      break;
    case 1:
      ge(t.type) && gi(t);
      break;
    case 4:
      as(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      D(ki, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? od(e, t, n)
          : (D(W, W.current & 1),
            (e = nt(e, t, n)),
            e !== null ? e.sibling : null);
      D(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ld(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        D(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), nd(e, t, n);
  }
  return nt(e, t, n);
}
var sd, wl, ad, ud;
sd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
wl = function () {};
ad = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), At(Ke.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Wo(e, i)), (r = Wo(e, r)), (o = []);
        break;
      case "select":
        (i = B({}, i, { value: void 0 })),
          (r = B({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Ho(e, i)), (r = Ho(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = mi);
    }
    Zo(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (nr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (nr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && F("scroll", e),
                  o || s === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ud = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Fn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function eh(e, t, n) {
  var r = t.pendingProps;
  switch ((ts(t), t.tag)) {
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
      return le(t), null;
    case 1:
      return ge(t.type) && vi(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Cn(),
        A(ve),
        A(ue),
        cs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Wr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ue !== null && (jl(Ue), (Ue = null)))),
        wl(e, t),
        le(t),
        null
      );
    case 5:
      us(t);
      var i = At(hr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ad(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return le(t), null;
        }
        if (((e = At(Ke.current)), Wr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ve] = t), (r[fr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Kn.length; i++) F(Kn[i], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              Zs(r, o), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              Gs(r, o), F("invalid", r);
          }
          Zo(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      $r(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      $r(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : nr.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              zr(r), Xs(r, o, !0);
              break;
            case "textarea":
              zr(r), Ys(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = mi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Du(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Ve] = t),
            (e[fr] = r),
            sd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Xo(n, r)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Kn.length; i++) F(Kn[i], e);
                i = r;
                break;
              case "source":
                F("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (i = r);
                break;
              case "details":
                F("toggle", e), (i = r);
                break;
              case "input":
                Zs(e, r), (i = Wo(e, r)), F("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = B({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                Gs(e, r), (i = Ho(e, r)), F("invalid", e);
                break;
              default:
                i = r;
            }
            Zo(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style"
                  ? $u(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Fu(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && rr(e, a)
                    : typeof a == "number" && rr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (nr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && F("scroll", e)
                      : a != null && $l(e, o, a, l));
              }
            switch (n) {
              case "input":
                zr(e), Xs(e, r, !1);
                break;
              case "textarea":
                zr(e), Ys(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ct(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? pn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      pn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = mi);
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
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) ud(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = At(hr.current)), At(Ke.current), Wr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ve] = t),
            (o = r.nodeValue !== n) && ((e = xe), e !== null))
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
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ve] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (A(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ke !== null && t.mode & 1 && !(t.flags & 128))
          jc(), xn(), (t.flags |= 98560), (o = !1);
        else if (((o = Wr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(_(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(_(317));
            o[Ve] = t;
          } else
            xn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (o = !1);
        } else Ue !== null && (jl(Ue), (Ue = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? J === 0 && (J = 3) : Ss())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        Cn(), wl(e, t), e === null && cr(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return os(t.type._context), le(t), null;
    case 17:
      return ge(t.type) && vi(), le(t), null;
    case 19:
      if ((A(W), (o = t.memoizedState), o === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) Fn(o, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Ci(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Fn(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(W, (W.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            X() > En &&
            ((t.flags |= 128), (r = !0), Fn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ci(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Fn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !$)
            )
              return le(t), null;
          } else
            2 * X() - o.renderingStartTime > En &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Fn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = X()),
          (t.sibling = null),
          (n = W.current),
          D(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        xs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? we & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function th(e, t) {
  switch ((ts(t), t.tag)) {
    case 1:
      return (
        ge(t.type) && vi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Cn(),
        A(ve),
        A(ue),
        cs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return us(t), null;
    case 13:
      if ((A(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(_(340));
        xn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return A(W), null;
    case 4:
      return Cn(), null;
    case 10:
      return os(t.type._context), null;
    case 22:
    case 23:
      return xs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hr = !1,
  ae = !1,
  nh = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function dn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        H(e, t, r);
      }
    else n.current = null;
}
function kl(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var Fa = !1;
function rh(e, t) {
  if (((rl = fi), (e = hc()), ql(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            d = 0,
            c = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              c !== n || (i !== 0 && c.nodeType !== 3) || (s = l + i),
                c !== o || (r !== 0 && c.nodeType !== 3) || (a = l + r),
                c.nodeType === 3 && (l += c.nodeValue.length),
                (g = c.firstChild) !== null;

            )
              (p = c), (c = g);
            for (;;) {
              if (c === e) break t;
              if (
                (p === n && ++u === i && (s = l),
                p === o && ++d === r && (a = l),
                (g = c.nextSibling) !== null)
              )
                break;
              (c = p), (p = c.parentNode);
            }
            c = g;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (il = { focusedElem: e, selectionRange: n }, fi = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var k = y.memoizedProps,
                    S = y.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Oe(t.type, k),
                      S
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (w) {
          H(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (y = Fa), (Fa = !1), y;
}
function bn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && kl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Vi(e, t) {
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
function xl(e) {
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
function cd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), cd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ve], delete t[fr], delete t[sl], delete t[Ap], delete t[$p])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function dd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Aa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || dd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Sl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = mi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Sl(e, t, n), e = e.sibling; e !== null; ) Sl(e, t, n), (e = e.sibling);
}
function Cl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Cl(e, t, n), e = e.sibling; e !== null; ) Cl(e, t, n), (e = e.sibling);
}
var ne = null,
  Re = !1;
function ot(e, t, n) {
  for (n = n.child; n !== null; ) fd(e, t, n), (n = n.sibling);
}
function fd(e, t, n) {
  if (He && typeof He.onCommitFiberUnmount == "function")
    try {
      He.onCommitFiberUnmount(Ri, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ae || dn(n, t);
    case 6:
      var r = ne,
        i = Re;
      (ne = null),
        ot(e, t, n),
        (ne = r),
        (Re = i),
        ne !== null &&
          (Re
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode));
      break;
    case 18:
      ne !== null &&
        (Re
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? yo(e.parentNode, n)
              : e.nodeType === 1 && yo(e, n),
            sr(e))
          : yo(ne, n.stateNode));
      break;
    case 4:
      (r = ne),
        (i = Re),
        (ne = n.stateNode.containerInfo),
        (Re = !0),
        ot(e, t, n),
        (ne = r),
        (Re = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && kl(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      ot(e, t, n);
      break;
    case 1:
      if (
        !ae &&
        (dn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          H(n, t, s);
        }
      ot(e, t, n);
      break;
    case 21:
      ot(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ae = (r = ae) || n.memoizedState !== null), ot(e, t, n), (ae = r))
        : ot(e, t, n);
      break;
    default:
      ot(e, t, n);
  }
}
function $a(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new nh()),
      t.forEach(function (r) {
        var i = fh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ne = s.stateNode), (Re = !1);
              break e;
            case 3:
              (ne = s.stateNode.containerInfo), (Re = !0);
              break e;
            case 4:
              (ne = s.stateNode.containerInfo), (Re = !0);
              break e;
          }
          s = s.return;
        }
        if (ne === null) throw Error(_(160));
        fd(o, l, i), (ne = null), (Re = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        H(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) pd(t, e), (t = t.sibling);
}
function pd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), Ae(e), r & 4)) {
        try {
          bn(3, e, e.return), Vi(3, e);
        } catch (k) {
          H(e, e.return, k);
        }
        try {
          bn(5, e, e.return);
        } catch (k) {
          H(e, e.return, k);
        }
      }
      break;
    case 1:
      ze(t, e), Ae(e), r & 512 && n !== null && dn(n, n.return);
      break;
    case 5:
      if (
        (ze(t, e),
        Ae(e),
        r & 512 && n !== null && dn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          rr(i, "");
        } catch (k) {
          H(e, e.return, k);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && Uu(i, o),
              Xo(s, l);
            var u = Xo(s, o);
            for (l = 0; l < a.length; l += 2) {
              var d = a[l],
                c = a[l + 1];
              d === "style"
                ? $u(i, c)
                : d === "dangerouslySetInnerHTML"
                ? Fu(i, c)
                : d === "children"
                ? rr(i, c)
                : $l(i, d, c, u);
            }
            switch (s) {
              case "input":
                Vo(i, o);
                break;
              case "textarea":
                Mu(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? pn(i, !!o.multiple, g, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? pn(i, !!o.multiple, o.defaultValue, !0)
                      : pn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[fr] = o;
          } catch (k) {
            H(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((ze(t, e), Ae(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (k) {
          H(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), Ae(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          sr(t.containerInfo);
        } catch (k) {
          H(e, e.return, k);
        }
      break;
    case 4:
      ze(t, e), Ae(e);
      break;
    case 13:
      ze(t, e),
        Ae(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ws = X())),
        r & 4 && $a(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ae = (u = ae) || d), ze(t, e), (ae = u)) : ze(t, e),
        Ae(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (N = e, d = e.child; d !== null; ) {
            for (c = N = d; N !== null; ) {
              switch (((p = N), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  bn(4, p, p.return);
                  break;
                case 1:
                  dn(p, p.return);
                  var y = p.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (k) {
                      H(r, n, k);
                    }
                  }
                  break;
                case 5:
                  dn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Va(c);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (N = g)) : Va(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                (i = c.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = c.stateNode),
                      (a = c.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Au("display", l)));
              } catch (k) {
                H(e, e.return, k);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (k) {
                H(e, e.return, k);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            d === c && (d = null), (c = c.return);
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      ze(t, e), Ae(e), r & 4 && $a(e);
      break;
    case 21:
      break;
    default:
      ze(t, e), Ae(e);
  }
}
function Ae(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (dd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (rr(i, ""), (r.flags &= -33));
          var o = Aa(e);
          Cl(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Aa(e);
          Sl(e, s, l);
          break;
        default:
          throw Error(_(161));
      }
    } catch (a) {
      H(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ih(e, t, n) {
  (N = e), hd(e);
}
function hd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var i = N,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Hr;
      if (!l) {
        var s = i.alternate,
          a = (s !== null && s.memoizedState !== null) || ae;
        s = Hr;
        var u = ae;
        if (((Hr = l), (ae = a) && !u))
          for (N = i; N !== null; )
            (l = N),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Ba(i)
                : a !== null
                ? ((a.return = l), (N = a))
                : Ba(i);
        for (; o !== null; ) (N = o), hd(o), (o = o.sibling);
        (N = i), (Hr = s), (ae = u);
      }
      Wa(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (N = o)) : Wa(e);
  }
}
function Wa(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ae || Vi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ae)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Oe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ea(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ea(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && sr(c);
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
              throw Error(_(163));
          }
        ae || (t.flags & 512 && xl(t));
      } catch (p) {
        H(t, t.return, p);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Va(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Ba(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Vi(4, t);
          } catch (a) {
            H(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              H(t, i, a);
            }
          }
          var o = t.return;
          try {
            xl(t);
          } catch (a) {
            H(t, o, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            xl(t);
          } catch (a) {
            H(t, l, a);
          }
      }
    } catch (a) {
      H(t, t.return, a);
    }
    if (t === e) {
      N = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (N = s);
      break;
    }
    N = t.return;
  }
}
var oh = Math.ceil,
  Pi = rt.ReactCurrentDispatcher,
  gs = rt.ReactCurrentOwner,
  Ne = rt.ReactCurrentBatchConfig,
  U = 0,
  te = null,
  Y = null,
  re = 0,
  we = 0,
  fn = Pt(0),
  J = 0,
  yr = null,
  Zt = 0,
  Bi = 0,
  ys = 0,
  qn = null,
  he = null,
  ws = 0,
  En = 1 / 0,
  Ge = null,
  ji = !1,
  _l = null,
  wt = null,
  Kr = !1,
  ft = null,
  Ni = 0,
  er = 0,
  El = null,
  ri = -1,
  ii = 0;
function de() {
  return U & 6 ? X() : ri !== -1 ? ri : (ri = X());
}
function kt(e) {
  return e.mode & 1
    ? U & 2 && re !== 0
      ? re & -re
      : Vp.transition !== null
      ? (ii === 0 && (ii = bu()), ii)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : oc(e.type))),
        e)
    : 1;
}
function De(e, t, n, r) {
  if (50 < er) throw ((er = 0), (El = null), Error(_(185)));
  Cr(e, n, r),
    (!(U & 2) || e !== te) &&
      (e === te && (!(U & 2) && (Bi |= n), J === 4 && ct(e, re)),
      ye(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((En = X() + 500), Ai && jt()));
}
function ye(e, t) {
  var n = e.callbackNode;
  Vf(e, t);
  var r = di(e, e === te ? re : 0);
  if (r === 0)
    n !== null && bs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bs(n), t === 1))
      e.tag === 0 ? Wp(Ha.bind(null, e)) : _c(Ha.bind(null, e)),
        Dp(function () {
          !(U & 6) && jt();
        }),
        (n = null);
    else {
      switch (qu(r)) {
        case 1:
          n = Kl;
          break;
        case 4:
          n = Qu;
          break;
        case 16:
          n = ci;
          break;
        case 536870912:
          n = Ju;
          break;
        default:
          n = ci;
      }
      n = Sd(n, md.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function md(e, t) {
  if (((ri = -1), (ii = 0), U & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (yn() && e.callbackNode !== n) return null;
  var r = di(e, e === te ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ii(e, r);
  else {
    t = r;
    var i = U;
    U |= 2;
    var o = gd();
    (te !== e || re !== t) && ((Ge = null), (En = X() + 500), Wt(e, t));
    do
      try {
        ah();
        break;
      } catch (s) {
        vd(e, s);
      }
    while (!0);
    is(),
      (Pi.current = o),
      (U = i),
      Y !== null ? (t = 0) : ((te = null), (re = 0), (t = J));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = bo(e)), i !== 0 && ((r = i), (t = Pl(e, i)))), t === 1)
    )
      throw ((n = yr), Wt(e, 0), ct(e, r), ye(e, X()), n);
    if (t === 6) ct(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !lh(i) &&
          ((t = Ii(e, r)),
          t === 2 && ((o = bo(e)), o !== 0 && ((r = o), (t = Pl(e, o)))),
          t === 1))
      )
        throw ((n = yr), Wt(e, 0), ct(e, r), ye(e, X()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          Ot(e, he, Ge);
          break;
        case 3:
          if (
            (ct(e, r), (r & 130023424) === r && ((t = ws + 500 - X()), 10 < t))
          ) {
            if (di(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ll(Ot.bind(null, e, he, Ge), t);
            break;
          }
          Ot(e, he, Ge);
          break;
        case 4:
          if ((ct(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Me(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = X() - r),
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
                : 1960 * oh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ll(Ot.bind(null, e, he, Ge), r);
            break;
          }
          Ot(e, he, Ge);
          break;
        case 5:
          Ot(e, he, Ge);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return ye(e, X()), e.callbackNode === n ? md.bind(null, e) : null;
}
function Pl(e, t) {
  var n = qn;
  return (
    e.current.memoizedState.isDehydrated && (Wt(e, t).flags |= 256),
    (e = Ii(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && jl(t)),
    e
  );
}
function jl(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function lh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Fe(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ct(e, t) {
  for (
    t &= ~ys,
      t &= ~Bi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Me(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ha(e) {
  if (U & 6) throw Error(_(327));
  yn();
  var t = di(e, 0);
  if (!(t & 1)) return ye(e, X()), null;
  var n = Ii(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = bo(e);
    r !== 0 && ((t = r), (n = Pl(e, r)));
  }
  if (n === 1) throw ((n = yr), Wt(e, 0), ct(e, t), ye(e, X()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ot(e, he, Ge),
    ye(e, X()),
    null
  );
}
function ks(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    (U = n), U === 0 && ((En = X() + 500), Ai && jt());
  }
}
function Xt(e) {
  ft !== null && ft.tag === 0 && !(U & 6) && yn();
  var t = U;
  U |= 1;
  var n = Ne.transition,
    r = M;
  try {
    if (((Ne.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (Ne.transition = n), (U = t), !(U & 6) && jt();
  }
}
function xs() {
  (we = fn.current), A(fn);
}
function Wt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Mp(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((ts(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && vi();
          break;
        case 3:
          Cn(), A(ve), A(ue), cs();
          break;
        case 5:
          us(r);
          break;
        case 4:
          Cn();
          break;
        case 13:
          A(W);
          break;
        case 19:
          A(W);
          break;
        case 10:
          os(r.type._context);
          break;
        case 22:
        case 23:
          xs();
      }
      n = n.return;
    }
  if (
    ((te = e),
    (Y = e = xt(e.current, null)),
    (re = we = t),
    (J = 0),
    (yr = null),
    (ys = Bi = Zt = 0),
    (he = qn = null),
    Ft !== null)
  ) {
    for (t = 0; t < Ft.length; t++)
      if (((n = Ft[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    Ft = null;
  }
  return e;
}
function vd(e, t) {
  do {
    var n = Y;
    try {
      if ((is(), (ei.current = Ei), _i)) {
        for (var r = V.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        _i = !1;
      }
      if (
        ((Kt = 0),
        (ee = Q = V = null),
        (Jn = !1),
        (mr = 0),
        (gs.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (yr = t), (Y = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = re),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = s,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var p = d.alternate;
            p
              ? ((d.updateQueue = p.updateQueue),
                (d.memoizedState = p.memoizedState),
                (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var g = La(l);
          if (g !== null) {
            (g.flags &= -257),
              za(g, l, s, o, t),
              g.mode & 1 && Ta(o, u, t),
              (t = g),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var k = new Set();
              k.add(a), (t.updateQueue = k);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ta(o, u, t), Ss();
              break e;
            }
            a = Error(_(426));
          }
        } else if ($ && s.mode & 1) {
          var S = La(l);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              za(S, l, s, o, t),
              ns(_n(a, s));
            break e;
          }
        }
        (o = a = _n(a, s)),
          J !== 4 && (J = 2),
          qn === null ? (qn = [o]) : qn.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = qc(o, a, t);
              _a(o, h);
              break e;
            case 1:
              s = a;
              var f = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (wt === null || !wt.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = ed(o, s, t);
                _a(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      wd(n);
    } catch (C) {
      (t = C), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function gd() {
  var e = Pi.current;
  return (Pi.current = Ei), e === null ? Ei : e;
}
function Ss() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    te === null || (!(Zt & 268435455) && !(Bi & 268435455)) || ct(te, re);
}
function Ii(e, t) {
  var n = U;
  U |= 2;
  var r = gd();
  (te !== e || re !== t) && ((Ge = null), Wt(e, t));
  do
    try {
      sh();
      break;
    } catch (i) {
      vd(e, i);
    }
  while (!0);
  if ((is(), (U = n), (Pi.current = r), Y !== null)) throw Error(_(261));
  return (te = null), (re = 0), J;
}
function sh() {
  for (; Y !== null; ) yd(Y);
}
function ah() {
  for (; Y !== null && !Of(); ) yd(Y);
}
function yd(e) {
  var t = xd(e.alternate, e, we);
  (e.memoizedProps = e.pendingProps),
    t === null ? wd(e) : (Y = t),
    (gs.current = null);
}
function wd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = th(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (Y = null);
        return;
      }
    } else if (((n = eh(n, t, we)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function Ot(e, t, n) {
  var r = M,
    i = Ne.transition;
  try {
    (Ne.transition = null), (M = 1), uh(e, t, n, r);
  } finally {
    (Ne.transition = i), (M = r);
  }
  return null;
}
function uh(e, t, n, r) {
  do yn();
  while (ft !== null);
  if (U & 6) throw Error(_(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Bf(e, o),
    e === te && ((Y = te = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Kr ||
      ((Kr = !0),
      Sd(ci, function () {
        return yn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ne.transition), (Ne.transition = null);
    var l = M;
    M = 1;
    var s = U;
    (U |= 4),
      (gs.current = null),
      rh(e, n),
      pd(n, e),
      Ip(il),
      (fi = !!rl),
      (il = rl = null),
      (e.current = n),
      ih(n),
      Rf(),
      (U = s),
      (M = l),
      (Ne.transition = o);
  } else e.current = n;
  if (
    (Kr && ((Kr = !1), (ft = e), (Ni = i)),
    (o = e.pendingLanes),
    o === 0 && (wt = null),
    Df(n.stateNode),
    ye(e, X()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ji) throw ((ji = !1), (e = _l), (_l = null), e);
  return (
    Ni & 1 && e.tag !== 0 && yn(),
    (o = e.pendingLanes),
    o & 1 ? (e === El ? er++ : ((er = 0), (El = e))) : (er = 0),
    jt(),
    null
  );
}
function yn() {
  if (ft !== null) {
    var e = qu(Ni),
      t = Ne.transition,
      n = M;
    try {
      if (((Ne.transition = null), (M = 16 > e ? 16 : e), ft === null))
        var r = !1;
      else {
        if (((e = ft), (ft = null), (Ni = 0), U & 6)) throw Error(_(331));
        var i = U;
        for (U |= 4, N = e.current; N !== null; ) {
          var o = N,
            l = o.child;
          if (N.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (N = u; N !== null; ) {
                  var d = N;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      bn(8, d, o);
                  }
                  var c = d.child;
                  if (c !== null) (c.return = d), (N = c);
                  else
                    for (; N !== null; ) {
                      d = N;
                      var p = d.sibling,
                        g = d.return;
                      if ((cd(d), d === u)) {
                        N = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (N = p);
                        break;
                      }
                      N = g;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var k = y.child;
                if (k !== null) {
                  y.child = null;
                  do {
                    var S = k.sibling;
                    (k.sibling = null), (k = S);
                  } while (k !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (N = l);
          else
            e: for (; N !== null; ) {
              if (((o = N), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    bn(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (N = h);
                break e;
              }
              N = o.return;
            }
        }
        var f = e.current;
        for (N = f; N !== null; ) {
          l = N;
          var m = l.child;
          if (l.subtreeFlags & 2064 && m !== null) (m.return = l), (N = m);
          else
            e: for (l = f; N !== null; ) {
              if (((s = N), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vi(9, s);
                  }
                } catch (C) {
                  H(s, s.return, C);
                }
              if (s === l) {
                N = null;
                break e;
              }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), (N = w);
                break e;
              }
              N = s.return;
            }
        }
        if (
          ((U = i), jt(), He && typeof He.onPostCommitFiberRoot == "function")
        )
          try {
            He.onPostCommitFiberRoot(Ri, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (Ne.transition = t);
    }
  }
  return !1;
}
function Ka(e, t, n) {
  (t = _n(n, t)),
    (t = qc(e, t, 1)),
    (e = yt(e, t, 1)),
    (t = de()),
    e !== null && (Cr(e, 1, t), ye(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) Ka(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ka(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (wt === null || !wt.has(r)))
        ) {
          (e = _n(n, e)),
            (e = ed(t, e, 1)),
            (t = yt(t, e, 1)),
            (e = de()),
            t !== null && (Cr(t, 1, e), ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ch(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (re & n) === n &&
      (J === 4 || (J === 3 && (re & 130023424) === re && 500 > X() - ws)
        ? Wt(e, 0)
        : (ys |= n)),
    ye(e, t);
}
function kd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ur), (Ur <<= 1), !(Ur & 130023424) && (Ur = 4194304))
      : (t = 1));
  var n = de();
  (e = tt(e, t)), e !== null && (Cr(e, t, n), ye(e, n));
}
function dh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), kd(e, n);
}
function fh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), kd(e, n);
}
var xd;
xd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (me = !1), qp(e, t, n);
      me = !!(e.flags & 131072);
    }
  else (me = !1), $ && t.flags & 1048576 && Ec(t, wi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ni(e, t), (e = t.pendingProps);
      var i = kn(t, ue.current);
      gn(t, n), (i = fs(null, t, r, e, i, n));
      var o = ps();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ge(r) ? ((o = !0), gi(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ss(t),
            (i.updater = Wi),
            (t.stateNode = i),
            (i._reactInternals = t),
            pl(t, r, e, n),
            (t = vl(null, t, r, !0, o, n)))
          : ((t.tag = 0), $ && o && es(t), ce(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ni(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = hh(r)),
          (e = Oe(r, e)),
          i)
        ) {
          case 0:
            t = ml(null, t, r, e, n);
            break e;
          case 1:
            t = Ua(null, t, r, e, n);
            break e;
          case 11:
            t = Oa(null, t, r, e, n);
            break e;
          case 14:
            t = Ra(null, t, r, Oe(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Oe(r, i)),
        ml(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Oe(r, i)),
        Ua(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((id(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Lc(e, t),
          Si(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = _n(Error(_(423)), t)), (t = Ma(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = _n(Error(_(424)), t)), (t = Ma(e, t, r, n, i));
            break e;
          } else
            for (
              ke = gt(t.stateNode.containerInfo.firstChild),
                xe = t,
                $ = !0,
                Ue = null,
                n = Ic(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((xn(), r === i)) {
            t = nt(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        zc(t),
        e === null && cl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        ol(r, i) ? (l = null) : o !== null && ol(r, o) && (t.flags |= 32),
        rd(e, t),
        ce(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && cl(t), null;
    case 13:
      return od(e, t, n);
    case 4:
      return (
        as(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Sn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Oe(r, i)),
        Oa(e, t, r, i, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          D(ki, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (Fe(o.value, l)) {
            if (o.children === i.children && !ve.current) {
              t = nt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                l = o.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = be(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      dl(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(_(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  dl(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        ce(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        gn(t, n),
        (i = Ie(i)),
        (r = r(i)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Oe(r, t.pendingProps)),
        (i = Oe(r.type, i)),
        Ra(e, t, r, i, n)
      );
    case 15:
      return td(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Oe(r, i)),
        ni(e, t),
        (t.tag = 1),
        ge(r) ? ((e = !0), gi(t)) : (e = !1),
        gn(t, n),
        bc(t, r, i),
        pl(t, r, i, n),
        vl(null, t, r, !0, e, n)
      );
    case 19:
      return ld(e, t, n);
    case 22:
      return nd(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function Sd(e, t) {
  return Yu(e, t);
}
function ph(e, t, n, r) {
  (this.tag = e),
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
    (this.alternate = null);
}
function je(e, t, n, r) {
  return new ph(e, t, n, r);
}
function Cs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function hh(e) {
  if (typeof e == "function") return Cs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Vl)) return 11;
    if (e === Bl) return 14;
  }
  return 2;
}
function xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = je(e.tag, t, e.key, e.mode)),
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
function oi(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) Cs(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case tn:
        return Vt(n.children, i, o, t);
      case Wl:
        (l = 8), (i |= 8);
        break;
      case Do:
        return (
          (e = je(12, n, t, i | 2)), (e.elementType = Do), (e.lanes = o), e
        );
      case Fo:
        return (e = je(13, n, t, i)), (e.elementType = Fo), (e.lanes = o), e;
      case Ao:
        return (e = je(19, n, t, i)), (e.elementType = Ao), (e.lanes = o), e;
      case zu:
        return Hi(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Tu:
              l = 10;
              break e;
            case Lu:
              l = 9;
              break e;
            case Vl:
              l = 11;
              break e;
            case Bl:
              l = 14;
              break e;
            case st:
              (l = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = je(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Vt(e, t, n, r) {
  return (e = je(7, e, r, t)), (e.lanes = n), e;
}
function Hi(e, t, n, r) {
  return (
    (e = je(22, e, r, t)),
    (e.elementType = zu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Po(e, t, n) {
  return (e = je(6, e, null, t)), (e.lanes = n), e;
}
function jo(e, t, n) {
  return (
    (t = je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function mh(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = lo(0)),
    (this.expirationTimes = lo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = lo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function _s(e, t, n, r, i, o, l, s, a) {
  return (
    (e = new mh(e, t, n, s, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = je(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ss(o),
    e
  );
}
function vh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: en,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Cd(e) {
  if (!e) return _t;
  e = e._reactInternals;
  e: {
    if (Yt(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return Cc(e, n, t);
  }
  return t;
}
function _d(e, t, n, r, i, o, l, s, a) {
  return (
    (e = _s(n, r, !0, e, i, o, l, s, a)),
    (e.context = Cd(null)),
    (n = e.current),
    (r = de()),
    (i = kt(n)),
    (o = be(r, i)),
    (o.callback = t ?? null),
    yt(n, o, i),
    (e.current.lanes = i),
    Cr(e, i, r),
    ye(e, r),
    e
  );
}
function Ki(e, t, n, r) {
  var i = t.current,
    o = de(),
    l = kt(i);
  return (
    (n = Cd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = be(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = yt(i, t, l)),
    e !== null && (De(e, i, l, o), qr(e, i, l)),
    l
  );
}
function Ti(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Za(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Es(e, t) {
  Za(e, t), (e = e.alternate) && Za(e, t);
}
function gh() {
  return null;
}
var Ed =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ps(e) {
  this._internalRoot = e;
}
Zi.prototype.render = Ps.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Ki(e, t, null, null);
};
Zi.prototype.unmount = Ps.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Xt(function () {
      Ki(null, e, null, null);
    }),
      (t[et] = null);
  }
};
function Zi(e) {
  this._internalRoot = e;
}
Zi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = nc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++);
    ut.splice(n, 0, e), n === 0 && ic(e);
  }
};
function js(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Xi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Xa() {}
function yh(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Ti(l);
        o.call(u);
      };
    }
    var l = _d(t, r, e, 0, null, !1, !1, "", Xa);
    return (
      (e._reactRootContainer = l),
      (e[et] = l.current),
      cr(e.nodeType === 8 ? e.parentNode : e),
      Xt(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Ti(a);
      s.call(u);
    };
  }
  var a = _s(e, 0, !1, null, null, !1, !1, "", Xa);
  return (
    (e._reactRootContainer = a),
    (e[et] = a.current),
    cr(e.nodeType === 8 ? e.parentNode : e),
    Xt(function () {
      Ki(t, a, n, r);
    }),
    a
  );
}
function Gi(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var a = Ti(l);
        s.call(a);
      };
    }
    Ki(t, l, e, i);
  } else l = yh(n, t, e, i, r);
  return Ti(l);
}
ec = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hn(t.pendingLanes);
        n !== 0 &&
          (Zl(t, n | 1), ye(t, X()), !(U & 6) && ((En = X() + 500), jt()));
      }
      break;
    case 13:
      Xt(function () {
        var r = tt(e, 1);
        if (r !== null) {
          var i = de();
          De(r, e, 1, i);
        }
      }),
        Es(e, 1);
  }
};
Xl = function (e) {
  if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
      var n = de();
      De(t, e, 134217728, n);
    }
    Es(e, 134217728);
  }
};
tc = function (e) {
  if (e.tag === 13) {
    var t = kt(e),
      n = tt(e, t);
    if (n !== null) {
      var r = de();
      De(n, e, t, r);
    }
    Es(e, t);
  }
};
nc = function () {
  return M;
};
rc = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
Yo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Vo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Fi(r);
            if (!i) throw Error(_(90));
            Ru(r), Vo(r, i);
          }
        }
      }
      break;
    case "textarea":
      Mu(e, n);
      break;
    case "select":
      (t = n.value), t != null && pn(e, !!n.multiple, t, !1);
  }
};
Bu = ks;
Hu = Xt;
var wh = { usingClientEntryPoint: !1, Events: [Er, ln, Fi, Wu, Vu, ks] },
  An = {
    findFiberByHostInstance: Dt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  kh = {
    bundleType: An.bundleType,
    version: An.version,
    rendererPackageName: An.rendererPackageName,
    rendererConfig: An.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Xu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: An.findFiberByHostInstance || gh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Zr.isDisabled && Zr.supportsFiber)
    try {
      (Ri = Zr.inject(kh)), (He = Zr);
    } catch {}
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wh;
Ce.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!js(t)) throw Error(_(200));
  return vh(e, t, null, n);
};
Ce.createRoot = function (e, t) {
  if (!js(e)) throw Error(_(299));
  var n = !1,
    r = "",
    i = Ed;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = _s(e, 1, !1, null, null, n, !1, r, i)),
    (e[et] = t.current),
    cr(e.nodeType === 8 ? e.parentNode : e),
    new Ps(t)
  );
};
Ce.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = Xu(t)), (e = e === null ? null : e.stateNode), e;
};
Ce.flushSync = function (e) {
  return Xt(e);
};
Ce.hydrate = function (e, t, n) {
  if (!Xi(t)) throw Error(_(200));
  return Gi(null, e, t, !0, n);
};
Ce.hydrateRoot = function (e, t, n) {
  if (!js(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = Ed;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = _d(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[et] = t.current),
    cr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Zi(t);
};
Ce.render = function (e, t, n) {
  if (!Xi(t)) throw Error(_(200));
  return Gi(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function (e) {
  if (!Xi(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (Xt(function () {
        Gi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[et] = null);
        });
      }),
      !0)
    : !1;
};
Ce.unstable_batchedUpdates = ks;
Ce.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Xi(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Gi(e, t, n, !1, r);
};
Ce.version = "18.3.1-next-f1338f8080-20240426";
function Pd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pd);
    } catch (e) {
      console.error(e);
    }
}
Pd(), (Pu.exports = Ce);
var xh = Pu.exports,
  Ga = xh;
(Uo.createRoot = Ga.createRoot), (Uo.hydrateRoot = Ga.hydrateRoot);
/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function wr() {
  return (
    (wr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    wr.apply(this, arguments)
  );
}
var pt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(pt || (pt = {}));
const Ya = "popstate";
function Sh(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: l, hash: s } = r.location;
    return Nl(
      "",
      { pathname: o, search: l, hash: s },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Li(i);
  }
  return _h(t, n, null, e);
}
function G(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function jd(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Ch() {
  return Math.random().toString(36).substr(2, 8);
}
function Qa(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Nl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    wr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? In(t) : t,
      { state: n, key: (t && t.key) || r || Ch() }
    )
  );
}
function Li(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function In(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function _h(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    s = pt.Pop,
    a = null,
    u = d();
  u == null && ((u = 0), l.replaceState(wr({}, l.state, { idx: u }), ""));
  function d() {
    return (l.state || { idx: null }).idx;
  }
  function c() {
    s = pt.Pop;
    let S = d(),
      h = S == null ? null : S - u;
    (u = S), a && a({ action: s, location: k.location, delta: h });
  }
  function p(S, h) {
    s = pt.Push;
    let f = Nl(k.location, S, h);
    u = d() + 1;
    let m = Qa(f, u),
      w = k.createHref(f);
    try {
      l.pushState(m, "", w);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      i.location.assign(w);
    }
    o && a && a({ action: s, location: k.location, delta: 1 });
  }
  function g(S, h) {
    s = pt.Replace;
    let f = Nl(k.location, S, h);
    u = d();
    let m = Qa(f, u),
      w = k.createHref(f);
    l.replaceState(m, "", w),
      o && a && a({ action: s, location: k.location, delta: 0 });
  }
  function y(S) {
    let h = i.location.origin !== "null" ? i.location.origin : i.location.href,
      f = typeof S == "string" ? S : Li(S);
    return (
      (f = f.replace(/ $/, "%20")),
      G(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, h)
    );
  }
  let k = {
    get action() {
      return s;
    },
    get location() {
      return e(i, l);
    },
    listen(S) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Ya, c),
        (a = S),
        () => {
          i.removeEventListener(Ya, c), (a = null);
        }
      );
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: y,
    encodeLocation(S) {
      let h = y(S);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: p,
    replace: g,
    go(S) {
      return l.go(S);
    },
  };
  return k;
}
var Ja;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ja || (Ja = {}));
function Eh(e, t, n) {
  return n === void 0 && (n = "/"), Ph(e, t, n, !1);
}
function Ph(e, t, n, r) {
  let i = typeof t == "string" ? In(t) : t,
    o = Ns(i.pathname || "/", n);
  if (o == null) return null;
  let l = Nd(e);
  jh(l);
  let s = null;
  for (let a = 0; s == null && a < l.length; ++a) {
    let u = Fh(o);
    s = Mh(l[a], u, r);
  }
  return s;
}
function Nd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, l, s) => {
    let a = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (G(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = St([r, a.relativePath]),
      d = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (G(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Nd(o.children, t, d, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: Rh(u, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, l) => {
      var s;
      if (o.path === "" || !((s = o.path) != null && s.includes("?"))) i(o, l);
      else for (let a of Id(o.path)) i(o, l, a);
    }),
    t
  );
}
function Id(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let l = Id(r.join("/")),
    s = [];
  return (
    s.push(...l.map((a) => (a === "" ? o : [o, a].join("/")))),
    i && s.push(...l),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function jh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Uh(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Nh = /^:[\w-]+$/,
  Ih = 3,
  Th = 2,
  Lh = 1,
  zh = 10,
  Oh = -2,
  ba = (e) => e === "*";
function Rh(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ba) && (r += Oh),
    t && (r += Th),
    n
      .filter((i) => !ba(i))
      .reduce((i, o) => i + (Nh.test(o) ? Ih : o === "" ? Lh : zh), r)
  );
}
function Uh(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Mh(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    l = [];
  for (let s = 0; s < r.length; ++s) {
    let a = r[s],
      u = s === r.length - 1,
      d = o === "/" ? t : t.slice(o.length) || "/",
      c = qa(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        d
      ),
      p = a.route;
    if (
      (!c &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (c = qa(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          d
        )),
      !c)
    )
      return null;
    Object.assign(i, c.params),
      l.push({
        params: i,
        pathname: St([o, c.pathname]),
        pathnameBase: Vh(St([o, c.pathnameBase])),
        route: p,
      }),
      c.pathnameBase !== "/" && (o = St([o, c.pathnameBase]));
  }
  return l;
}
function qa(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Dh(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    l = o.replace(/(.)\/+$/, "$1"),
    s = i.slice(1);
  return {
    params: r.reduce((u, d, c) => {
      let { paramName: p, isOptional: g } = d;
      if (p === "*") {
        let k = s[c] || "";
        l = o.slice(0, o.length - k.length).replace(/(.)\/+$/, "$1");
      }
      const y = s[c];
      return (
        g && !y ? (u[p] = void 0) : (u[p] = (y || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function Dh(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    jd(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, s, a) => (
            r.push({ paramName: s, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Fh(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      jd(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Ns(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Ah(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? In(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : $h(n, t)) : t,
    search: Bh(r),
    hash: Hh(i),
  };
}
function $h(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function No(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Wh(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Is(e, t) {
  let n = Wh(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Ts(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = In(e))
    : ((i = wr({}, e)),
      G(
        !i.pathname || !i.pathname.includes("?"),
        No("?", "pathname", "search", i)
      ),
      G(
        !i.pathname || !i.pathname.includes("#"),
        No("#", "pathname", "hash", i)
      ),
      G(!i.search || !i.search.includes("#"), No("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    l = o ? "/" : i.pathname,
    s;
  if (l == null) s = n;
  else {
    let c = t.length - 1;
    if (!r && l.startsWith("..")) {
      let p = l.split("/");
      for (; p[0] === ".."; ) p.shift(), (c -= 1);
      i.pathname = p.join("/");
    }
    s = c >= 0 ? t[c] : "/";
  }
  let a = Ah(i, s),
    u = l && l !== "/" && l.endsWith("/"),
    d = (o || l === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || d) && (a.pathname += "/"), a;
}
const St = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Vh = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Bh = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Hh = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Kh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Td = ["post", "put", "patch", "delete"];
new Set(Td);
const Zh = ["get", ...Td];
new Set(Zh);
/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function kr() {
  return (
    (kr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    kr.apply(this, arguments)
  );
}
const Ls = x.createContext(null),
  Xh = x.createContext(null),
  Nt = x.createContext(null),
  Yi = x.createContext(null),
  it = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ld = x.createContext(null);
function Gh(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Tn() || G(!1);
  let { basename: r, navigator: i } = x.useContext(Nt),
    { hash: o, pathname: l, search: s } = Od(e, { relative: n }),
    a = l;
  return (
    r !== "/" && (a = l === "/" ? r : St([r, l])),
    i.createHref({ pathname: a, search: s, hash: o })
  );
}
function Tn() {
  return x.useContext(Yi) != null;
}
function Ln() {
  return Tn() || G(!1), x.useContext(Yi).location;
}
function zd(e) {
  x.useContext(Nt).static || x.useLayoutEffect(e);
}
function zs() {
  let { isDataRoute: e } = x.useContext(it);
  return e ? um() : Yh();
}
function Yh() {
  Tn() || G(!1);
  let e = x.useContext(Ls),
    { basename: t, future: n, navigator: r } = x.useContext(Nt),
    { matches: i } = x.useContext(it),
    { pathname: o } = Ln(),
    l = JSON.stringify(Is(i, n.v7_relativeSplatPath)),
    s = x.useRef(!1);
  return (
    zd(() => {
      s.current = !0;
    }),
    x.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !s.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let c = Ts(u, JSON.parse(l), o, d.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : St([t, c.pathname])),
          (d.replace ? r.replace : r.push)(c, d.state, d);
      },
      [t, r, l, o, e]
    )
  );
}
const Qh = x.createContext(null);
function Jh(e) {
  let t = x.useContext(it).outlet;
  return t && x.createElement(Qh.Provider, { value: e }, t);
}
function Od(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = x.useContext(Nt),
    { matches: i } = x.useContext(it),
    { pathname: o } = Ln(),
    l = JSON.stringify(Is(i, r.v7_relativeSplatPath));
  return x.useMemo(() => Ts(e, JSON.parse(l), o, n === "path"), [e, l, o, n]);
}
function bh(e, t) {
  return qh(e, t);
}
function qh(e, t, n, r) {
  Tn() || G(!1);
  let { navigator: i } = x.useContext(Nt),
    { matches: o } = x.useContext(it),
    l = o[o.length - 1],
    s = l ? l.params : {};
  l && l.pathname;
  let a = l ? l.pathnameBase : "/";
  l && l.route;
  let u = Ln(),
    d;
  if (t) {
    var c;
    let S = typeof t == "string" ? In(t) : t;
    a === "/" || ((c = S.pathname) != null && c.startsWith(a)) || G(!1),
      (d = S);
  } else d = u;
  let p = d.pathname || "/",
    g = p;
  if (a !== "/") {
    let S = a.replace(/^\//, "").split("/");
    g = "/" + p.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let y = Eh(e, { pathname: g }),
    k = im(
      y &&
        y.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, s, S.params),
            pathname: St([
              a,
              i.encodeLocation
                ? i.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? a
                : St([
                    a,
                    i.encodeLocation
                      ? i.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && k
    ? x.createElement(
        Yi.Provider,
        {
          value: {
            location: kr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: pt.Pop,
          },
        },
        k
      )
    : k;
}
function em() {
  let e = am(),
    t = Kh(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: i }, n) : null,
    null
  );
}
const tm = x.createElement(em, null);
class nm extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          it.Provider,
          { value: this.props.routeContext },
          x.createElement(Ld.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function rm(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = x.useContext(Ls);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(it.Provider, { value: t }, r)
  );
}
function im(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let l = e,
    s = (i = n) == null ? void 0 : i.errors;
  if (s != null) {
    let d = l.findIndex(
      (c) => c.route.id && (s == null ? void 0 : s[c.route.id]) !== void 0
    );
    d >= 0 || G(!1), (l = l.slice(0, Math.min(l.length, d + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < l.length; d++) {
      let c = l[d];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = d),
        c.route.id)
      ) {
        let { loaderData: p, errors: g } = n,
          y =
            c.route.loader &&
            p[c.route.id] === void 0 &&
            (!g || g[c.route.id] === void 0);
        if (c.route.lazy || y) {
          (a = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((d, c, p) => {
    let g,
      y = !1,
      k = null,
      S = null;
    n &&
      ((g = s && c.route.id ? s[c.route.id] : void 0),
      (k = c.route.errorElement || tm),
      a &&
        (u < 0 && p === 0
          ? ((y = !0), (S = null))
          : u === p &&
            ((y = !0), (S = c.route.hydrateFallbackElement || null))));
    let h = t.concat(l.slice(0, p + 1)),
      f = () => {
        let m;
        return (
          g
            ? (m = k)
            : y
            ? (m = S)
            : c.route.Component
            ? (m = x.createElement(c.route.Component, null))
            : c.route.element
            ? (m = c.route.element)
            : (m = d),
          x.createElement(rm, {
            match: c,
            routeContext: { outlet: d, matches: h, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || p === 0)
      ? x.createElement(nm, {
          location: n.location,
          revalidation: n.revalidation,
          component: k,
          error: g,
          children: f(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Rd = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Rd || {}),
  zi = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(zi || {});
function om(e) {
  let t = x.useContext(Ls);
  return t || G(!1), t;
}
function lm(e) {
  let t = x.useContext(Xh);
  return t || G(!1), t;
}
function sm(e) {
  let t = x.useContext(it);
  return t || G(!1), t;
}
function Ud(e) {
  let t = sm(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || G(!1), n.route.id;
}
function am() {
  var e;
  let t = x.useContext(Ld),
    n = lm(zi.UseRouteError),
    r = Ud(zi.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function um() {
  let { router: e } = om(Rd.UseNavigateStable),
    t = Ud(zi.UseNavigateStable),
    n = x.useRef(!1);
  return (
    zd(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, kr({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function cm(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  Tn() || G(!1);
  let { future: o, static: l } = x.useContext(Nt),
    { matches: s } = x.useContext(it),
    { pathname: a } = Ln(),
    u = zs(),
    d = Ts(t, Is(s, o.v7_relativeSplatPath), a, i === "path"),
    c = JSON.stringify(d);
  return (
    x.useEffect(
      () => u(JSON.parse(c), { replace: n, state: r, relative: i }),
      [u, c, i, n, r]
    ),
    null
  );
}
function dm(e) {
  return Jh(e.context);
}
function lt(e) {
  G(!1);
}
function fm(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = pt.Pop,
    navigator: o,
    static: l = !1,
    future: s,
  } = e;
  Tn() && G(!1);
  let a = t.replace(/^\/*/, "/"),
    u = x.useMemo(
      () => ({
        basename: a,
        navigator: o,
        static: l,
        future: kr({ v7_relativeSplatPath: !1 }, s),
      }),
      [a, s, o, l]
    );
  typeof r == "string" && (r = In(r));
  let {
      pathname: d = "/",
      search: c = "",
      hash: p = "",
      state: g = null,
      key: y = "default",
    } = r,
    k = x.useMemo(() => {
      let S = Ns(d, a);
      return S == null
        ? null
        : {
            location: { pathname: S, search: c, hash: p, state: g, key: y },
            navigationType: i,
          };
    }, [a, d, c, p, g, y, i]);
  return k == null
    ? null
    : x.createElement(
        Nt.Provider,
        { value: u },
        x.createElement(Yi.Provider, { children: n, value: k })
      );
}
function pm(e) {
  let { children: t, location: n } = e;
  return bh(Il(t), n);
}
new Promise(() => {});
function Il(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, i) => {
      if (!x.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === x.Fragment) {
        n.push.apply(n, Il(r.props.children, o));
        return;
      }
      r.type !== lt && G(!1), !r.props.index || !r.props.children || G(!1);
      let l = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = Il(r.props.children, o)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Tl() {
  return (
    (Tl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Tl.apply(this, arguments)
  );
}
function hm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function mm(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function vm(e, t) {
  return e.button === 0 && (!t || t === "_self") && !mm(e);
}
const gm = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  ym = "6";
try {
  window.__reactRouterVersion = ym;
} catch {}
const wm = "startTransition",
  eu = cf[wm];
function km(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = x.useRef();
  o.current == null && (o.current = Sh({ window: i, v5Compat: !0 }));
  let l = o.current,
    [s, a] = x.useState({ action: l.action, location: l.location }),
    { v7_startTransition: u } = r || {},
    d = x.useCallback(
      (c) => {
        u && eu ? eu(() => a(c)) : a(c);
      },
      [a, u]
    );
  return (
    x.useLayoutEffect(() => l.listen(d), [l, d]),
    x.createElement(fm, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: l,
      future: r,
    })
  );
}
const xm =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Sm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ut = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: l,
        state: s,
        target: a,
        to: u,
        preventScrollReset: d,
        unstable_viewTransition: c,
      } = t,
      p = hm(t, gm),
      { basename: g } = x.useContext(Nt),
      y,
      k = !1;
    if (typeof u == "string" && Sm.test(u) && ((y = u), xm))
      try {
        let m = new URL(window.location.href),
          w = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u),
          C = Ns(w.pathname, g);
        w.origin === m.origin && C != null
          ? (u = C + w.search + w.hash)
          : (k = !0);
      } catch {}
    let S = Gh(u, { relative: i }),
      h = Cm(u, {
        replace: l,
        state: s,
        target: a,
        preventScrollReset: d,
        relative: i,
        unstable_viewTransition: c,
      });
    function f(m) {
      r && r(m), m.defaultPrevented || h(m);
    }
    return x.createElement(
      "a",
      Tl({}, p, { href: y || S, onClick: k || o ? r : f, ref: n, target: a })
    );
  });
var tu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(tu || (tu = {}));
var nu;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(nu || (nu = {}));
function Cm(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: l,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    a = zs(),
    u = Ln(),
    d = Od(e, { relative: l });
  return x.useCallback(
    (c) => {
      if (vm(c, n)) {
        c.preventDefault();
        let p = r !== void 0 ? r : Li(u) === Li(d);
        a(e, {
          replace: p,
          state: i,
          preventScrollReset: o,
          relative: l,
          unstable_viewTransition: s,
        });
      }
    },
    [u, a, d, r, i, n, e, o, l, s]
  );
}
var Ll = function (e, t) {
  return (
    (Ll =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (n, r) {
          n.__proto__ = r;
        }) ||
      function (n, r) {
        for (var i in r)
          Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
      }),
    Ll(e, t)
  );
};
function _m(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Class extends value " + String(t) + " is not a constructor or null"
    );
  Ll(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var q = function () {
  return (
    (q =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    q.apply(this, arguments)
  );
};
function Em(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function Jt(e, t, n, r) {
  function i(o) {
    return o instanceof n
      ? o
      : new n(function (l) {
          l(o);
        });
  }
  return new (n || (n = Promise))(function (o, l) {
    function s(d) {
      try {
        u(r.next(d));
      } catch (c) {
        l(c);
      }
    }
    function a(d) {
      try {
        u(r.throw(d));
      } catch (c) {
        l(c);
      }
    }
    function u(d) {
      d.done ? o(d.value) : i(d.value).then(s, a);
    }
    u((r = r.apply(e, [])).next());
  });
}
function bt(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    r,
    i,
    o,
    l;
  return (
    (l = { next: s(0), throw: s(1), return: s(2) }),
    typeof Symbol == "function" &&
      (l[Symbol.iterator] = function () {
        return this;
      }),
    l
  );
  function s(u) {
    return function (d) {
      return a([u, d]);
    };
  }
  function a(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; l && ((l = 0), u[0] && (n = 0)), n; )
      try {
        if (
          ((r = 1),
          i &&
            (o =
              u[0] & 2
                ? i.return
                : u[0]
                ? i.throw || ((o = i.return) && o.call(i), 0)
                : i.next) &&
            !(o = o.call(i, u[1])).done)
        )
          return o;
        switch (((i = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, (i = u[1]), (u = [0]);
            continue;
          case 7:
            (u = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (
              ((o = n.trys),
              !(o = o.length > 0 && o[o.length - 1]) &&
                (u[0] === 6 || u[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < o[1]) {
              (n.label = o[1]), (o = u);
              break;
            }
            if (o && n.label < o[2]) {
              (n.label = o[2]), n.ops.push(u);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (d) {
        (u = [6, d]), (i = 0);
      } finally {
        r = o = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function We(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
var Mt =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Os(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Rs(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var Rt = Rs(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = (function () {
    function r() {
      var i = this;
      (this.locked = new Map()),
        (this.addToLocked = function (o, l) {
          var s = i.locked.get(o);
          s === void 0
            ? l === void 0
              ? i.locked.set(o, [])
              : i.locked.set(o, [l])
            : l !== void 0 && (s.unshift(l), i.locked.set(o, s));
        }),
        (this.isLocked = function (o) {
          return i.locked.has(o);
        }),
        (this.lock = function (o) {
          return new Promise(function (l, s) {
            i.isLocked(o) ? i.addToLocked(o, l) : (i.addToLocked(o), l());
          });
        }),
        (this.unlock = function (o) {
          var l = i.locked.get(o);
          if (l !== void 0 && l.length !== 0) {
            var s = l.pop();
            i.locked.set(o, l), s !== void 0 && setTimeout(s, 0);
          } else i.locked.delete(o);
        });
    }
    return (
      (r.getInstance = function () {
        return r.instance === void 0 && (r.instance = new r()), r.instance;
      }),
      r
    );
  })();
  t.default = function () {
    return n.getInstance();
  };
});
Os(Rt);
var Pm = Os(
  Rs(function (e, t) {
    var n =
        (Mt && Mt.__awaiter) ||
        function (d, c, p, g) {
          return new (p || (p = Promise))(function (y, k) {
            function S(m) {
              try {
                f(g.next(m));
              } catch (w) {
                k(w);
              }
            }
            function h(m) {
              try {
                f(g.throw(m));
              } catch (w) {
                k(w);
              }
            }
            function f(m) {
              m.done
                ? y(m.value)
                : new p(function (w) {
                    w(m.value);
                  }).then(S, h);
            }
            f((g = g.apply(d, c || [])).next());
          });
        },
      r =
        (Mt && Mt.__generator) ||
        function (d, c) {
          var p,
            g,
            y,
            k,
            S = {
              label: 0,
              sent: function () {
                if (1 & y[0]) throw y[1];
                return y[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (k = { next: h(0), throw: h(1), return: h(2) }),
            typeof Symbol == "function" &&
              (k[Symbol.iterator] = function () {
                return this;
              }),
            k
          );
          function h(f) {
            return function (m) {
              return (function (w) {
                if (p) throw new TypeError("Generator is already executing.");
                for (; S; )
                  try {
                    if (
                      ((p = 1),
                      g &&
                        (y =
                          2 & w[0]
                            ? g.return
                            : w[0]
                            ? g.throw || ((y = g.return) && y.call(g), 0)
                            : g.next) &&
                        !(y = y.call(g, w[1])).done)
                    )
                      return y;
                    switch (((g = 0), y && (w = [2 & w[0], y.value]), w[0])) {
                      case 0:
                      case 1:
                        y = w;
                        break;
                      case 4:
                        return S.label++, { value: w[1], done: !1 };
                      case 5:
                        S.label++, (g = w[1]), (w = [0]);
                        continue;
                      case 7:
                        (w = S.ops.pop()), S.trys.pop();
                        continue;
                      default:
                        if (
                          ((y = S.trys),
                          !(
                            (y = y.length > 0 && y[y.length - 1]) ||
                            (w[0] !== 6 && w[0] !== 2)
                          ))
                        ) {
                          S = 0;
                          continue;
                        }
                        if (
                          w[0] === 3 &&
                          (!y || (w[1] > y[0] && w[1] < y[3]))
                        ) {
                          S.label = w[1];
                          break;
                        }
                        if (w[0] === 6 && S.label < y[1]) {
                          (S.label = y[1]), (y = w);
                          break;
                        }
                        if (y && S.label < y[2]) {
                          (S.label = y[2]), S.ops.push(w);
                          break;
                        }
                        y[2] && S.ops.pop(), S.trys.pop();
                        continue;
                    }
                    w = c.call(d, S);
                  } catch (C) {
                    (w = [6, C]), (g = 0);
                  } finally {
                    p = y = 0;
                  }
                if (5 & w[0]) throw w[1];
                return { value: w[0] ? w[1] : void 0, done: !0 };
              })([f, m]);
            };
          }
        },
      i = Mt;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = "browser-tabs-lock-key",
      l = {
        key: function (d) {
          return n(i, void 0, void 0, function () {
            return r(this, function (c) {
              throw new Error("Unsupported");
            });
          });
        },
        getItem: function (d) {
          return n(i, void 0, void 0, function () {
            return r(this, function (c) {
              throw new Error("Unsupported");
            });
          });
        },
        clear: function () {
          return n(i, void 0, void 0, function () {
            return r(this, function (d) {
              return [2, window.localStorage.clear()];
            });
          });
        },
        removeItem: function (d) {
          return n(i, void 0, void 0, function () {
            return r(this, function (c) {
              throw new Error("Unsupported");
            });
          });
        },
        setItem: function (d, c) {
          return n(i, void 0, void 0, function () {
            return r(this, function (p) {
              throw new Error("Unsupported");
            });
          });
        },
        keySync: function (d) {
          return window.localStorage.key(d);
        },
        getItemSync: function (d) {
          return window.localStorage.getItem(d);
        },
        clearSync: function () {
          return window.localStorage.clear();
        },
        removeItemSync: function (d) {
          return window.localStorage.removeItem(d);
        },
        setItemSync: function (d, c) {
          return window.localStorage.setItem(d, c);
        },
      };
    function s(d) {
      return new Promise(function (c) {
        return setTimeout(c, d);
      });
    }
    function a(d) {
      for (
        var c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",
          p = "",
          g = 0;
        g < d;
        g++
      )
        p += c[Math.floor(Math.random() * c.length)];
      return p;
    }
    var u = (function () {
      function d(c) {
        (this.acquiredIatSet = new Set()),
          (this.storageHandler = void 0),
          (this.id = Date.now().toString() + a(15)),
          (this.acquireLock = this.acquireLock.bind(this)),
          (this.releaseLock = this.releaseLock.bind(this)),
          (this.releaseLock__private__ =
            this.releaseLock__private__.bind(this)),
          (this.waitForSomethingToChange =
            this.waitForSomethingToChange.bind(this)),
          (this.refreshLockWhileAcquired =
            this.refreshLockWhileAcquired.bind(this)),
          (this.storageHandler = c),
          d.waiters === void 0 && (d.waiters = []);
      }
      return (
        (d.prototype.acquireLock = function (c, p) {
          return (
            p === void 0 && (p = 5e3),
            n(this, void 0, void 0, function () {
              var g, y, k, S, h, f, m;
              return r(this, function (w) {
                switch (w.label) {
                  case 0:
                    (g = Date.now() + a(4)),
                      (y = Date.now() + p),
                      (k = o + "-" + c),
                      (S =
                        this.storageHandler === void 0
                          ? l
                          : this.storageHandler),
                      (w.label = 1);
                  case 1:
                    return Date.now() < y ? [4, s(30)] : [3, 8];
                  case 2:
                    return (
                      w.sent(),
                      S.getItemSync(k) !== null
                        ? [3, 5]
                        : ((h = this.id + "-" + c + "-" + g),
                          [4, s(Math.floor(25 * Math.random()))])
                    );
                  case 3:
                    return (
                      w.sent(),
                      S.setItemSync(
                        k,
                        JSON.stringify({
                          id: this.id,
                          iat: g,
                          timeoutKey: h,
                          timeAcquired: Date.now(),
                          timeRefreshed: Date.now(),
                        })
                      ),
                      [4, s(30)]
                    );
                  case 4:
                    return (
                      w.sent(),
                      (f = S.getItemSync(k)) !== null &&
                      (m = JSON.parse(f)).id === this.id &&
                      m.iat === g
                        ? (this.acquiredIatSet.add(g),
                          this.refreshLockWhileAcquired(k, g),
                          [2, !0])
                        : [3, 7]
                    );
                  case 5:
                    return (
                      d.lockCorrector(
                        this.storageHandler === void 0 ? l : this.storageHandler
                      ),
                      [4, this.waitForSomethingToChange(y)]
                    );
                  case 6:
                    w.sent(), (w.label = 7);
                  case 7:
                    return (g = Date.now() + a(4)), [3, 1];
                  case 8:
                    return [2, !1];
                }
              });
            })
          );
        }),
        (d.prototype.refreshLockWhileAcquired = function (c, p) {
          return n(this, void 0, void 0, function () {
            var g = this;
            return r(this, function (y) {
              return (
                setTimeout(function () {
                  return n(g, void 0, void 0, function () {
                    var k, S, h;
                    return r(this, function (f) {
                      switch (f.label) {
                        case 0:
                          return [4, Rt.default().lock(p)];
                        case 1:
                          return (
                            f.sent(),
                            this.acquiredIatSet.has(p)
                              ? ((k =
                                  this.storageHandler === void 0
                                    ? l
                                    : this.storageHandler),
                                (S = k.getItemSync(c)) === null
                                  ? (Rt.default().unlock(p), [2])
                                  : (((h = JSON.parse(S)).timeRefreshed =
                                      Date.now()),
                                    k.setItemSync(c, JSON.stringify(h)),
                                    Rt.default().unlock(p),
                                    this.refreshLockWhileAcquired(c, p),
                                    [2]))
                              : (Rt.default().unlock(p), [2])
                          );
                      }
                    });
                  });
                }, 1e3),
                [2]
              );
            });
          });
        }),
        (d.prototype.waitForSomethingToChange = function (c) {
          return n(this, void 0, void 0, function () {
            return r(this, function (p) {
              switch (p.label) {
                case 0:
                  return [
                    4,
                    new Promise(function (g) {
                      var y = !1,
                        k = Date.now(),
                        S = !1;
                      function h() {
                        if (
                          (S ||
                            (window.removeEventListener("storage", h),
                            d.removeFromWaiting(h),
                            clearTimeout(f),
                            (S = !0)),
                          !y)
                        ) {
                          y = !0;
                          var m = 50 - (Date.now() - k);
                          m > 0 ? setTimeout(g, m) : g(null);
                        }
                      }
                      window.addEventListener("storage", h), d.addToWaiting(h);
                      var f = setTimeout(h, Math.max(0, c - Date.now()));
                    }),
                  ];
                case 1:
                  return p.sent(), [2];
              }
            });
          });
        }),
        (d.addToWaiting = function (c) {
          this.removeFromWaiting(c), d.waiters !== void 0 && d.waiters.push(c);
        }),
        (d.removeFromWaiting = function (c) {
          d.waiters !== void 0 &&
            (d.waiters = d.waiters.filter(function (p) {
              return p !== c;
            }));
        }),
        (d.notifyWaiters = function () {
          d.waiters !== void 0 &&
            d.waiters.slice().forEach(function (c) {
              return c();
            });
        }),
        (d.prototype.releaseLock = function (c) {
          return n(this, void 0, void 0, function () {
            return r(this, function (p) {
              switch (p.label) {
                case 0:
                  return [4, this.releaseLock__private__(c)];
                case 1:
                  return [2, p.sent()];
              }
            });
          });
        }),
        (d.prototype.releaseLock__private__ = function (c) {
          return n(this, void 0, void 0, function () {
            var p, g, y, k;
            return r(this, function (S) {
              switch (S.label) {
                case 0:
                  return (
                    (p =
                      this.storageHandler === void 0 ? l : this.storageHandler),
                    (g = o + "-" + c),
                    (y = p.getItemSync(g)) === null
                      ? [2]
                      : (k = JSON.parse(y)).id !== this.id
                      ? [3, 2]
                      : [4, Rt.default().lock(k.iat)]
                  );
                case 1:
                  S.sent(),
                    this.acquiredIatSet.delete(k.iat),
                    p.removeItemSync(g),
                    Rt.default().unlock(k.iat),
                    d.notifyWaiters(),
                    (S.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (d.lockCorrector = function (c) {
          for (var p = Date.now() - 5e3, g = c, y = [], k = 0; ; ) {
            var S = g.keySync(k);
            if (S === null) break;
            y.push(S), k++;
          }
          for (var h = !1, f = 0; f < y.length; f++) {
            var m = y[f];
            if (m.includes(o)) {
              var w = g.getItemSync(m);
              if (w !== null) {
                var C = JSON.parse(w);
                ((C.timeRefreshed === void 0 && C.timeAcquired < p) ||
                  (C.timeRefreshed !== void 0 && C.timeRefreshed < p)) &&
                  (g.removeItemSync(m), (h = !0));
              }
            }
          }
          h && d.notifyWaiters();
        }),
        (d.waiters = void 0),
        d
      );
    })();
    t.default = u;
  })
);
const jm = { timeoutInSeconds: 60 },
  Md = { name: "auth0-spa-js", version: "2.1.3" },
  Dd = () => Date.now();
class se extends Error {
  constructor(t, n) {
    super(n),
      (this.error = t),
      (this.error_description = n),
      Object.setPrototypeOf(this, se.prototype);
  }
  static fromPayload({ error: t, error_description: n }) {
    return new se(t, n);
  }
}
class Us extends se {
  constructor(t, n, r, i = null) {
    super(t, n),
      (this.state = r),
      (this.appState = i),
      Object.setPrototypeOf(this, Us.prototype);
  }
}
class xr extends se {
  constructor() {
    super("timeout", "Timeout"), Object.setPrototypeOf(this, xr.prototype);
  }
}
class Ms extends xr {
  constructor(t) {
    super(), (this.popup = t), Object.setPrototypeOf(this, Ms.prototype);
  }
}
class Ds extends se {
  constructor(t) {
    super("cancelled", "Popup closed"),
      (this.popup = t),
      Object.setPrototypeOf(this, Ds.prototype);
  }
}
class Fs extends se {
  constructor(t, n, r) {
    super(t, n),
      (this.mfa_token = r),
      Object.setPrototypeOf(this, Fs.prototype);
  }
}
class Qi extends se {
  constructor(t, n) {
    super(
      "missing_refresh_token",
      `Missing Refresh Token (audience: '${ru(t, ["default"])}', scope: '${ru(
        n
      )}')`
    ),
      (this.audience = t),
      (this.scope = n),
      Object.setPrototypeOf(this, Qi.prototype);
  }
}
function ru(e, t = []) {
  return e && !t.includes(e) ? e : "";
}
const li = () => window.crypto,
  Io = () => {
    const e =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";
    let t = "";
    return (
      Array.from(li().getRandomValues(new Uint8Array(43))).forEach(
        (n) => (t += e[n % e.length])
      ),
      t
    );
  },
  iu = (e) => btoa(e),
  zl = (e) => {
    var { clientId: t } = e,
      n = We(e, ["clientId"]);
    return new URLSearchParams(
      ((r) =>
        Object.keys(r)
          .filter((i) => r[i] !== void 0)
          .reduce(
            (i, o) => Object.assign(Object.assign({}, i), { [o]: r[o] }),
            {}
          ))(Object.assign({ client_id: t }, n))
    ).toString();
  },
  ou = (e) =>
    ((t) =>
      decodeURIComponent(
        atob(t)
          .split("")
          .map((n) => "%" + ("00" + n.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      ))(e.replace(/_/g, "/").replace(/-/g, "+")),
  Nm = async (e, t) => {
    const n = await fetch(e, t);
    return { ok: n.ok, json: await n.json() };
  },
  Im = async (e, t, n) => {
    const r = new AbortController();
    let i;
    return (
      (t.signal = r.signal),
      Promise.race([
        Nm(e, t),
        new Promise((o, l) => {
          i = setTimeout(() => {
            r.abort(), l(new Error("Timeout when executing 'fetch'"));
          }, n);
        }),
      ]).finally(() => {
        clearTimeout(i);
      })
    );
  },
  Tm = async (e, t, n, r, i, o, l) => {
    return (
      (s = {
        auth: { audience: t, scope: n },
        timeout: i,
        fetchUrl: e,
        fetchOptions: r,
        useFormData: l,
      }),
      (a = o),
      new Promise(function (u, d) {
        const c = new MessageChannel();
        (c.port1.onmessage = function (p) {
          p.data.error ? d(new Error(p.data.error)) : u(p.data),
            c.port1.close();
        }),
          a.postMessage(s, [c.port2]);
      })
    );
    var s, a;
  },
  Lm = async (e, t, n, r, i, o, l = 1e4) =>
    i ? Tm(e, t, n, r, l, i, o) : Im(e, r, l);
async function zm(e, t) {
  var {
      baseUrl: n,
      timeout: r,
      audience: i,
      scope: o,
      auth0Client: l,
      useFormData: s,
    } = e,
    a = We(e, [
      "baseUrl",
      "timeout",
      "audience",
      "scope",
      "auth0Client",
      "useFormData",
    ]);
  const u = s ? zl(a) : JSON.stringify(a);
  return await (async function (d, c, p, g, y, k, S) {
    let h,
      f = null;
    for (let E = 0; E < 3; E++)
      try {
        (h = await Lm(d, p, g, y, k, S, c)), (f = null);
        break;
      } catch (I) {
        f = I;
      }
    if (f) throw f;
    const m = h.json,
      { error: w, error_description: C } = m,
      j = We(m, ["error", "error_description"]),
      { ok: P } = h;
    if (!P) {
      const E = C || `HTTP error. Unable to fetch ${d}`;
      throw w === "mfa_required"
        ? new Fs(w, E, j.mfa_token)
        : w === "missing_refresh_token"
        ? new Qi(p, g)
        : new se(w || "request_error", E);
    }
    return j;
  })(
    `${n}/oauth/token`,
    r,
    i || "default",
    o,
    {
      method: "POST",
      body: u,
      headers: {
        "Content-Type": s
          ? "application/x-www-form-urlencoded"
          : "application/json",
        "Auth0-Client": btoa(JSON.stringify(l || Md)),
      },
    },
    t,
    s
  );
}
const Xr = (...e) => {
  return ((t = e.filter(Boolean).join(" ").trim().split(/\s+/)),
  Array.from(new Set(t))).join(" ");
  var t;
};
class Be {
  constructor(t, n = "@@auth0spajs@@", r) {
    (this.prefix = n),
      (this.suffix = r),
      (this.clientId = t.clientId),
      (this.scope = t.scope),
      (this.audience = t.audience);
  }
  toKey() {
    return [this.prefix, this.clientId, this.audience, this.scope, this.suffix]
      .filter(Boolean)
      .join("::");
  }
  static fromKey(t) {
    const [n, r, i, o] = t.split("::");
    return new Be({ clientId: r, scope: o, audience: i }, n);
  }
  static fromCacheEntry(t) {
    const { scope: n, audience: r, client_id: i } = t;
    return new Be({ scope: n, audience: r, clientId: i });
  }
}
class Om {
  set(t, n) {
    localStorage.setItem(t, JSON.stringify(n));
  }
  get(t) {
    const n = window.localStorage.getItem(t);
    if (n)
      try {
        return JSON.parse(n);
      } catch {
        return;
      }
  }
  remove(t) {
    localStorage.removeItem(t);
  }
  allKeys() {
    return Object.keys(window.localStorage).filter((t) =>
      t.startsWith("@@auth0spajs@@")
    );
  }
}
class Fd {
  constructor() {
    this.enclosedCache = (function () {
      let t = {};
      return {
        set(n, r) {
          t[n] = r;
        },
        get(n) {
          const r = t[n];
          if (r) return r;
        },
        remove(n) {
          delete t[n];
        },
        allKeys: () => Object.keys(t),
      };
    })();
  }
}
class Rm {
  constructor(t, n, r) {
    (this.cache = t), (this.keyManifest = n), (this.nowProvider = r || Dd);
  }
  async setIdToken(t, n, r) {
    var i;
    const o = this.getIdTokenCacheKey(t);
    await this.cache.set(o, { id_token: n, decodedToken: r }),
      await ((i = this.keyManifest) === null || i === void 0
        ? void 0
        : i.add(o));
  }
  async getIdToken(t) {
    const n = await this.cache.get(this.getIdTokenCacheKey(t.clientId));
    if (!n && t.scope && t.audience) {
      const r = await this.get(t);
      return !r || !r.id_token || !r.decodedToken
        ? void 0
        : { id_token: r.id_token, decodedToken: r.decodedToken };
    }
    if (n) return { id_token: n.id_token, decodedToken: n.decodedToken };
  }
  async get(t, n = 0) {
    var r;
    let i = await this.cache.get(t.toKey());
    if (!i) {
      const s = await this.getCacheKeys();
      if (!s) return;
      const a = this.matchExistingCacheKey(t, s);
      a && (i = await this.cache.get(a));
    }
    if (!i) return;
    const o = await this.nowProvider(),
      l = Math.floor(o / 1e3);
    return i.expiresAt - n < l
      ? i.body.refresh_token
        ? ((i.body = { refresh_token: i.body.refresh_token }),
          await this.cache.set(t.toKey(), i),
          i.body)
        : (await this.cache.remove(t.toKey()),
          void (await ((r = this.keyManifest) === null || r === void 0
            ? void 0
            : r.remove(t.toKey()))))
      : i.body;
  }
  async set(t) {
    var n;
    const r = new Be({
        clientId: t.client_id,
        scope: t.scope,
        audience: t.audience,
      }),
      i = await this.wrapCacheEntry(t);
    await this.cache.set(r.toKey(), i),
      await ((n = this.keyManifest) === null || n === void 0
        ? void 0
        : n.add(r.toKey()));
  }
  async clear(t) {
    var n;
    const r = await this.getCacheKeys();
    r &&
      (await r
        .filter((i) => !t || i.includes(t))
        .reduce(async (i, o) => {
          await i, await this.cache.remove(o);
        }, Promise.resolve()),
      await ((n = this.keyManifest) === null || n === void 0
        ? void 0
        : n.clear()));
  }
  async wrapCacheEntry(t) {
    const n = await this.nowProvider();
    return { body: t, expiresAt: Math.floor(n / 1e3) + t.expires_in };
  }
  async getCacheKeys() {
    var t;
    return this.keyManifest
      ? (t = await this.keyManifest.get()) === null || t === void 0
        ? void 0
        : t.keys
      : this.cache.allKeys
      ? this.cache.allKeys()
      : void 0;
  }
  getIdTokenCacheKey(t) {
    return new Be({ clientId: t }, "@@auth0spajs@@", "@@user@@").toKey();
  }
  matchExistingCacheKey(t, n) {
    return n.filter((r) => {
      var i;
      const o = Be.fromKey(r),
        l = new Set(o.scope && o.scope.split(" ")),
        s =
          ((i = t.scope) === null || i === void 0 ? void 0 : i.split(" ")) ||
          [],
        a = o.scope && s.reduce((u, d) => u && l.has(d), !0);
      return (
        o.prefix === "@@auth0spajs@@" &&
        o.clientId === t.clientId &&
        o.audience === t.audience &&
        a
      );
    })[0];
  }
}
class Um {
  constructor(t, n, r) {
    (this.storage = t),
      (this.clientId = n),
      (this.cookieDomain = r),
      (this.storageKey = `a0.spajs.txs.${this.clientId}`);
  }
  create(t) {
    this.storage.save(this.storageKey, t, {
      daysUntilExpire: 1,
      cookieDomain: this.cookieDomain,
    });
  }
  get() {
    return this.storage.get(this.storageKey);
  }
  remove() {
    this.storage.remove(this.storageKey, { cookieDomain: this.cookieDomain });
  }
}
const $n = (e) => typeof e == "number",
  Mm = [
    "iss",
    "aud",
    "exp",
    "nbf",
    "iat",
    "jti",
    "azp",
    "nonce",
    "auth_time",
    "at_hash",
    "c_hash",
    "acr",
    "amr",
    "sub_jwk",
    "cnf",
    "sip_from_tag",
    "sip_date",
    "sip_callid",
    "sip_cseq_num",
    "sip_via_branch",
    "orig",
    "dest",
    "mky",
    "events",
    "toe",
    "txn",
    "rph",
    "sid",
    "vot",
    "vtm",
  ],
  Dm = (e) => {
    if (!e.id_token) throw new Error("ID token is required but missing");
    const t = ((o) => {
      const l = o.split("."),
        [s, a, u] = l;
      if (l.length !== 3 || !s || !a || !u)
        throw new Error("ID token could not be decoded");
      const d = JSON.parse(ou(a)),
        c = { __raw: o },
        p = {};
      return (
        Object.keys(d).forEach((g) => {
          (c[g] = d[g]), Mm.includes(g) || (p[g] = d[g]);
        }),
        {
          encoded: { header: s, payload: a, signature: u },
          header: JSON.parse(ou(s)),
          claims: c,
          user: p,
        }
      );
    })(e.id_token);
    if (!t.claims.iss)
      throw new Error(
        "Issuer (iss) claim must be a string present in the ID token"
      );
    if (t.claims.iss !== e.iss)
      throw new Error(
        `Issuer (iss) claim mismatch in the ID token; expected "${e.iss}", found "${t.claims.iss}"`
      );
    if (!t.user.sub)
      throw new Error(
        "Subject (sub) claim must be a string present in the ID token"
      );
    if (t.header.alg !== "RS256")
      throw new Error(
        `Signature algorithm of "${t.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`
      );
    if (
      !t.claims.aud ||
      (typeof t.claims.aud != "string" && !Array.isArray(t.claims.aud))
    )
      throw new Error(
        "Audience (aud) claim must be a string or array of strings present in the ID token"
      );
    if (Array.isArray(t.claims.aud)) {
      if (!t.claims.aud.includes(e.aud))
        throw new Error(
          `Audience (aud) claim mismatch in the ID token; expected "${
            e.aud
          }" but was not one of "${t.claims.aud.join(", ")}"`
        );
      if (t.claims.aud.length > 1) {
        if (!t.claims.azp)
          throw new Error(
            "Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values"
          );
        if (t.claims.azp !== e.aud)
          throw new Error(
            `Authorized Party (azp) claim mismatch in the ID token; expected "${e.aud}", found "${t.claims.azp}"`
          );
      }
    } else if (t.claims.aud !== e.aud)
      throw new Error(
        `Audience (aud) claim mismatch in the ID token; expected "${e.aud}" but found "${t.claims.aud}"`
      );
    if (e.nonce) {
      if (!t.claims.nonce)
        throw new Error(
          "Nonce (nonce) claim must be a string present in the ID token"
        );
      if (t.claims.nonce !== e.nonce)
        throw new Error(
          `Nonce (nonce) claim mismatch in the ID token; expected "${e.nonce}", found "${t.claims.nonce}"`
        );
    }
    if (e.max_age && !$n(t.claims.auth_time))
      throw new Error(
        "Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified"
      );
    if (t.claims.exp == null || !$n(t.claims.exp))
      throw new Error(
        "Expiration Time (exp) claim must be a number present in the ID token"
      );
    if (!$n(t.claims.iat))
      throw new Error(
        "Issued At (iat) claim must be a number present in the ID token"
      );
    const n = e.leeway || 60,
      r = new Date(e.now || Date.now()),
      i = new Date(0);
    if ((i.setUTCSeconds(t.claims.exp + n), r > i))
      throw new Error(
        `Expiration Time (exp) claim error in the ID token; current time (${r}) is after expiration time (${i})`
      );
    if (t.claims.nbf != null && $n(t.claims.nbf)) {
      const o = new Date(0);
      if ((o.setUTCSeconds(t.claims.nbf - n), r < o))
        throw new Error(
          `Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${r}) is before ${o}`
        );
    }
    if (t.claims.auth_time != null && $n(t.claims.auth_time)) {
      const o = new Date(0);
      if (
        (o.setUTCSeconds(parseInt(t.claims.auth_time) + e.max_age + n), r > o)
      )
        throw new Error(
          `Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${r}) is after last auth at ${o}`
        );
    }
    if (e.organization) {
      const o = e.organization.trim();
      if (o.startsWith("org_")) {
        const l = o;
        if (!t.claims.org_id)
          throw new Error(
            "Organization ID (org_id) claim must be a string present in the ID token"
          );
        if (l !== t.claims.org_id)
          throw new Error(
            `Organization ID (org_id) claim mismatch in the ID token; expected "${l}", found "${t.claims.org_id}"`
          );
      } else {
        const l = o.toLowerCase();
        if (!t.claims.org_name)
          throw new Error(
            "Organization Name (org_name) claim must be a string present in the ID token"
          );
        if (l !== t.claims.org_name)
          throw new Error(
            `Organization Name (org_name) claim mismatch in the ID token; expected "${l}", found "${t.claims.org_name}"`
          );
      }
    }
    return t;
  };
var $t = Rs(function (e, t) {
  var n =
    (Mt && Mt.__assign) ||
    function () {
      return (
        (n =
          Object.assign ||
          function (a) {
            for (var u, d = 1, c = arguments.length; d < c; d++)
              for (var p in (u = arguments[d]))
                Object.prototype.hasOwnProperty.call(u, p) && (a[p] = u[p]);
            return a;
          }),
        n.apply(this, arguments)
      );
    };
  function r(a, u) {
    if (!u) return "";
    var d = "; " + a;
    return u === !0 ? d : d + "=" + u;
  }
  function i(a, u, d) {
    return (
      encodeURIComponent(a)
        .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29") +
      "=" +
      encodeURIComponent(u).replace(
        /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
        decodeURIComponent
      ) +
      (function (c) {
        if (typeof c.expires == "number") {
          var p = new Date();
          p.setMilliseconds(p.getMilliseconds() + 864e5 * c.expires),
            (c.expires = p);
        }
        return (
          r("Expires", c.expires ? c.expires.toUTCString() : "") +
          r("Domain", c.domain) +
          r("Path", c.path) +
          r("Secure", c.secure) +
          r("SameSite", c.sameSite)
        );
      })(d)
    );
  }
  function o(a) {
    for (
      var u = {}, d = a ? a.split("; ") : [], c = /(%[\dA-F]{2})+/gi, p = 0;
      p < d.length;
      p++
    ) {
      var g = d[p].split("="),
        y = g.slice(1).join("=");
      y.charAt(0) === '"' && (y = y.slice(1, -1));
      try {
        u[g[0].replace(c, decodeURIComponent)] = y.replace(
          c,
          decodeURIComponent
        );
      } catch {}
    }
    return u;
  }
  function l() {
    return o(document.cookie);
  }
  function s(a, u, d) {
    document.cookie = i(a, u, n({ path: "/" }, d));
  }
  (t.__esModule = !0),
    (t.encode = i),
    (t.parse = o),
    (t.getAll = l),
    (t.get = function (a) {
      return l()[a];
    }),
    (t.set = s),
    (t.remove = function (a, u) {
      s(a, "", n(n({}, u), { expires: -1 }));
    });
});
Os($t), $t.encode, $t.parse, $t.getAll;
var Fm = $t.get,
  Ad = $t.set,
  $d = $t.remove;
const qt = {
    get(e) {
      const t = Fm(e);
      if (t !== void 0) return JSON.parse(t);
    },
    save(e, t, n) {
      let r = {};
      window.location.protocol === "https:" &&
        (r = { secure: !0, sameSite: "none" }),
        n != null && n.daysUntilExpire && (r.expires = n.daysUntilExpire),
        n != null && n.cookieDomain && (r.domain = n.cookieDomain),
        Ad(e, JSON.stringify(t), r);
    },
    remove(e, t) {
      let n = {};
      t != null && t.cookieDomain && (n.domain = t.cookieDomain), $d(e, n);
    },
  },
  Am = {
    get(e) {
      return qt.get(e) || qt.get(`_legacy_${e}`);
    },
    save(e, t, n) {
      let r = {};
      window.location.protocol === "https:" && (r = { secure: !0 }),
        n != null && n.daysUntilExpire && (r.expires = n.daysUntilExpire),
        n != null && n.cookieDomain && (r.domain = n.cookieDomain),
        Ad(`_legacy_${e}`, JSON.stringify(t), r),
        qt.save(e, t, n);
    },
    remove(e, t) {
      let n = {};
      t != null && t.cookieDomain && (n.domain = t.cookieDomain),
        $d(e, n),
        qt.remove(e, t),
        qt.remove(`_legacy_${e}`, t);
    },
  },
  $m = {
    get(e) {
      if (typeof sessionStorage > "u") return;
      const t = sessionStorage.getItem(e);
      return t != null ? JSON.parse(t) : void 0;
    },
    save(e, t) {
      sessionStorage.setItem(e, JSON.stringify(t));
    },
    remove(e) {
      sessionStorage.removeItem(e);
    },
  };
function Wm(e, t, n) {
  var r = t === void 0 ? null : t,
    i = (function (a, u) {
      var d = atob(a);
      if (u) {
        for (var c = new Uint8Array(d.length), p = 0, g = d.length; p < g; ++p)
          c[p] = d.charCodeAt(p);
        return String.fromCharCode.apply(null, new Uint16Array(c.buffer));
      }
      return d;
    })(e, n !== void 0 && n),
    o =
      i.indexOf(
        `
`,
        10
      ) + 1,
    l = i.substring(o) + (r ? "//# sourceMappingURL=" + r : ""),
    s = new Blob([l], { type: "application/javascript" });
  return URL.createObjectURL(s);
}
var lu,
  su,
  au,
  To,
  Vm =
    ((lu =
      "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9ImZ1bmN0aW9uIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2NvbnN0IHM9ZT0+e3ZhcntjbGllbnRJZDp0fT1lLHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj17fTtmb3IodmFyIHMgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKSYmdC5pbmRleE9mKHMpPDAmJihyW3NdPWVbc10pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxzLmxlbmd0aDtvKyspdC5pbmRleE9mKHNbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHNbb10pJiYocltzW29dXT1lW3Nbb11dKX1yZXR1cm4gcn0oZSxbImNsaWVudElkIl0pO3JldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKChlPT5PYmplY3Qua2V5cyhlKS5maWx0ZXIoKHQ9PnZvaWQgMCE9PWVbdF0pKS5yZWR1Y2UoKCh0LHIpPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse1tyXTplW3JdfSkpLHt9KSkoT2JqZWN0LmFzc2lnbih7Y2xpZW50X2lkOnR9LHIpKSkudG9TdHJpbmcoKX07bGV0IG89e307Y29uc3Qgbj0oZSx0KT0+YCR7ZX18JHt0fWA7YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGFzeW5jKHtkYXRhOnt0aW1lb3V0OmUsYXV0aDpyLGZldGNoVXJsOmksZmV0Y2hPcHRpb25zOmMsdXNlRm9ybURhdGE6YX0scG9ydHM6W3BdfSk9PntsZXQgZjtjb25zdHthdWRpZW5jZTp1LHNjb3BlOmx9PXJ8fHt9O3RyeXtjb25zdCByPWE/KGU9Pntjb25zdCB0PW5ldyBVUkxTZWFyY2hQYXJhbXMoZSkscj17fTtyZXR1cm4gdC5mb3JFYWNoKCgoZSx0KT0+e3JbdF09ZX0pKSxyfSkoYy5ib2R5KTpKU09OLnBhcnNlKGMuYm9keSk7aWYoIXIucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09ci5ncmFudF90eXBlKXtjb25zdCBlPSgoZSx0KT0+b1tuKGUsdCldKSh1LGwpO2lmKCFlKXRocm93IG5ldyB0KHUsbCk7Yy5ib2R5PWE/cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKTpKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKX1sZXQgaCxnOyJmdW5jdGlvbiI9PXR5cGVvZiBBYm9ydENvbnRyb2xsZXImJihoPW5ldyBBYm9ydENvbnRyb2xsZXIsYy5zaWduYWw9aC5zaWduYWwpO3RyeXtnPWF3YWl0IFByb21pc2UucmFjZShbKGQ9ZSxuZXcgUHJvbWlzZSgoZT0+c2V0VGltZW91dChlLGQpKSkpLGZldGNoKGksT2JqZWN0LmFzc2lnbih7fSxjKSldKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBwLnBvc3RNZXNzYWdlKHtlcnJvcjplLm1lc3NhZ2V9KX1pZighZylyZXR1cm4gaCYmaC5hYm9ydCgpLHZvaWQgcC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KTtmPWF3YWl0IGcuanNvbigpLGYucmVmcmVzaF90b2tlbj8oKChlLHQscik9PntvW24odCxyKV09ZX0pKGYucmVmcmVzaF90b2tlbix1LGwpLGRlbGV0ZSBmLnJlZnJlc2hfdG9rZW4pOigoZSx0KT0+e2RlbGV0ZSBvW24oZSx0KV19KSh1LGwpLHAucG9zdE1lc3NhZ2Uoe29rOmcub2ssanNvbjpmfSl9Y2F0Y2goZSl7cC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3I6ZS5lcnJvcixlcnJvcl9kZXNjcmlwdGlvbjplLm1lc3NhZ2V9fSl9dmFyIGR9KSl9KCk7Cgo="),
    (su = null),
    (au = !1),
    function (e) {
      return (To = To || Wm(lu, su, au)), new Worker(To, e);
    });
const Lo = {};
class Bm {
  constructor(t, n) {
    (this.cache = t),
      (this.clientId = n),
      (this.manifestKey = this.createManifestKeyFrom(this.clientId));
  }
  async add(t) {
    var n;
    const r = new Set(
      ((n = await this.cache.get(this.manifestKey)) === null || n === void 0
        ? void 0
        : n.keys) || []
    );
    r.add(t), await this.cache.set(this.manifestKey, { keys: [...r] });
  }
  async remove(t) {
    const n = await this.cache.get(this.manifestKey);
    if (n) {
      const r = new Set(n.keys);
      return (
        r.delete(t),
        r.size > 0
          ? await this.cache.set(this.manifestKey, { keys: [...r] })
          : await this.cache.remove(this.manifestKey)
      );
    }
  }
  get() {
    return this.cache.get(this.manifestKey);
  }
  clear() {
    return this.cache.remove(this.manifestKey);
  }
  createManifestKeyFrom(t) {
    return `@@auth0spajs@@::${t}`;
  }
}
const Hm = {
    memory: () => new Fd().enclosedCache,
    localstorage: () => new Om(),
  },
  uu = (e) => Hm[e],
  cu = (e) => {
    const { openUrl: t, onRedirect: n } = e,
      r = We(e, ["openUrl", "onRedirect"]);
    return Object.assign(Object.assign({}, r), {
      openUrl: t === !1 || t ? t : n,
    });
  },
  zo = new Pm();
class Km {
  constructor(t) {
    let n, r;
    if (
      ((this.userCache = new Fd().enclosedCache),
      (this.defaultOptions = {
        authorizationParams: { scope: "openid profile email" },
        useRefreshTokensFallback: !1,
        useFormData: !0,
      }),
      (this._releaseLockOnPageHide = async () => {
        await zo.releaseLock("auth0.lock.getTokenSilently"),
          window.removeEventListener("pagehide", this._releaseLockOnPageHide);
      }),
      (this.options = Object.assign(
        Object.assign(Object.assign({}, this.defaultOptions), t),
        {
          authorizationParams: Object.assign(
            Object.assign({}, this.defaultOptions.authorizationParams),
            t.authorizationParams
          ),
        }
      )),
      typeof window < "u" &&
        (() => {
          if (!li())
            throw new Error(
              "For security reasons, `window.crypto` is required to run `auth0-spa-js`."
            );
          if (li().subtle === void 0)
            throw new Error(`
      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.
    `);
        })(),
      t.cache &&
        t.cacheLocation &&
        console.warn(
          "Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."
        ),
      t.cache)
    )
      r = t.cache;
    else {
      if (((n = t.cacheLocation || "memory"), !uu(n)))
        throw new Error(`Invalid cache location "${n}"`);
      r = uu(n)();
    }
    (this.httpTimeoutMs = t.httpTimeoutInSeconds
      ? 1e3 * t.httpTimeoutInSeconds
      : 1e4),
      (this.cookieStorage = t.legacySameSiteCookie === !1 ? qt : Am),
      (this.orgHintCookieName = `auth0.${this.options.clientId}.organization_hint`),
      (this.isAuthenticatedCookieName = ((l) => `auth0.${l}.is.authenticated`)(
        this.options.clientId
      )),
      (this.sessionCheckExpiryDays = t.sessionCheckExpiryDays || 1);
    const i = t.useCookiesForTransactions ? this.cookieStorage : $m;
    var o;
    (this.scope = Xr(
      "openid",
      this.options.authorizationParams.scope,
      this.options.useRefreshTokens ? "offline_access" : ""
    )),
      (this.transactionManager = new Um(
        i,
        this.options.clientId,
        this.options.cookieDomain
      )),
      (this.nowProvider = this.options.nowProvider || Dd),
      (this.cacheManager = new Rm(
        r,
        r.allKeys ? void 0 : new Bm(r, this.options.clientId),
        this.nowProvider
      )),
      (this.domainUrl =
        ((o = this.options.domain),
        /^https?:\/\//.test(o) ? o : `https://${o}`)),
      (this.tokenIssuer = ((l, s) =>
        l ? (l.startsWith("https://") ? l : `https://${l}/`) : `${s}/`)(
        this.options.issuer,
        this.domainUrl
      )),
      typeof window < "u" &&
        window.Worker &&
        this.options.useRefreshTokens &&
        n === "memory" &&
        (this.options.workerUrl
          ? (this.worker = new Worker(this.options.workerUrl))
          : (this.worker = new Vm()));
  }
  _url(t) {
    const n = encodeURIComponent(
      btoa(JSON.stringify(this.options.auth0Client || Md))
    );
    return `${this.domainUrl}${t}&auth0Client=${n}`;
  }
  _authorizeUrl(t) {
    return this._url(`/authorize?${zl(t)}`);
  }
  async _verifyIdToken(t, n, r) {
    const i = await this.nowProvider();
    return Dm({
      iss: this.tokenIssuer,
      aud: this.options.clientId,
      id_token: t,
      nonce: n,
      organization: r,
      leeway: this.options.leeway,
      max_age:
        ((o = this.options.authorizationParams.max_age),
        typeof o != "string" ? o : parseInt(o, 10) || void 0),
      now: i,
    });
    var o;
  }
  _processOrgHint(t) {
    t
      ? this.cookieStorage.save(this.orgHintCookieName, t, {
          daysUntilExpire: this.sessionCheckExpiryDays,
          cookieDomain: this.options.cookieDomain,
        })
      : this.cookieStorage.remove(this.orgHintCookieName, {
          cookieDomain: this.options.cookieDomain,
        });
  }
  async _prepareAuthorizeUrl(t, n, r) {
    const i = iu(Io()),
      o = iu(Io()),
      l = Io(),
      s = ((d) => {
        const c = new Uint8Array(d);
        return ((p) => {
          const g = { "+": "-", "/": "_", "=": "" };
          return p.replace(/[+/=]/g, (y) => g[y]);
        })(window.btoa(String.fromCharCode(...Array.from(c))));
      })(
        await (async (d) =>
          await li().subtle.digest(
            { name: "SHA-256" },
            new TextEncoder().encode(d)
          ))(l)
      ),
      a = ((d, c, p, g, y, k, S, h) =>
        Object.assign(
          Object.assign(
            Object.assign({ client_id: d.clientId }, d.authorizationParams),
            p
          ),
          {
            scope: Xr(c, p.scope),
            response_type: "code",
            response_mode: h || "query",
            state: g,
            nonce: y,
            redirect_uri: S || d.authorizationParams.redirect_uri,
            code_challenge: k,
            code_challenge_method: "S256",
          }
        ))(
        this.options,
        this.scope,
        t,
        i,
        o,
        s,
        t.redirect_uri || this.options.authorizationParams.redirect_uri || r,
        n == null ? void 0 : n.response_mode
      ),
      u = this._authorizeUrl(a);
    return {
      nonce: o,
      code_verifier: l,
      scope: a.scope,
      audience: a.audience || "default",
      redirect_uri: a.redirect_uri,
      state: i,
      url: u,
    };
  }
  async loginWithPopup(t, n) {
    var r;
    if (
      ((t = t || {}),
      !(n = n || {}).popup &&
        ((n.popup = ((s) => {
          const a = window.screenX + (window.innerWidth - 400) / 2,
            u = window.screenY + (window.innerHeight - 600) / 2;
          return window.open(
            s,
            "auth0:authorize:popup",
            `left=${a},top=${u},width=400,height=600,resizable,scrollbars=yes,status=1`
          );
        })("")),
        !n.popup))
    )
      throw new Error(
        "Unable to open a popup for loginWithPopup - window.open returned `null`"
      );
    const i = await this._prepareAuthorizeUrl(
      t.authorizationParams || {},
      { response_mode: "web_message" },
      window.location.origin
    );
    n.popup.location.href = i.url;
    const o = await ((s) =>
      new Promise((a, u) => {
        let d;
        const c = setInterval(() => {
            s.popup &&
              s.popup.closed &&
              (clearInterval(c),
              clearTimeout(p),
              window.removeEventListener("message", d, !1),
              u(new Ds(s.popup)));
          }, 1e3),
          p = setTimeout(() => {
            clearInterval(c),
              u(new Ms(s.popup)),
              window.removeEventListener("message", d, !1);
          }, 1e3 * (s.timeoutInSeconds || 60));
        (d = function (g) {
          if (g.data && g.data.type === "authorization_response") {
            if (
              (clearTimeout(p),
              clearInterval(c),
              window.removeEventListener("message", d, !1),
              s.popup.close(),
              g.data.response.error)
            )
              return u(se.fromPayload(g.data.response));
            a(g.data.response);
          }
        }),
          window.addEventListener("message", d);
      }))(
      Object.assign(Object.assign({}, n), {
        timeoutInSeconds:
          n.timeoutInSeconds || this.options.authorizeTimeoutInSeconds || 60,
      })
    );
    if (i.state !== o.state) throw new se("state_mismatch", "Invalid state");
    const l =
      ((r = t.authorizationParams) === null || r === void 0
        ? void 0
        : r.organization) || this.options.authorizationParams.organization;
    await this._requestToken(
      {
        audience: i.audience,
        scope: i.scope,
        code_verifier: i.code_verifier,
        grant_type: "authorization_code",
        code: o.code,
        redirect_uri: i.redirect_uri,
      },
      { nonceIn: i.nonce, organization: l }
    );
  }
  async getUser() {
    var t;
    const n = await this._getIdTokenFromCache();
    return (t = n == null ? void 0 : n.decodedToken) === null || t === void 0
      ? void 0
      : t.user;
  }
  async getIdTokenClaims() {
    var t;
    const n = await this._getIdTokenFromCache();
    return (t = n == null ? void 0 : n.decodedToken) === null || t === void 0
      ? void 0
      : t.claims;
  }
  async loginWithRedirect(t = {}) {
    var n;
    const r = cu(t),
      { openUrl: i, fragment: o, appState: l } = r,
      s = We(r, ["openUrl", "fragment", "appState"]),
      a =
        ((n = s.authorizationParams) === null || n === void 0
          ? void 0
          : n.organization) || this.options.authorizationParams.organization,
      u = await this._prepareAuthorizeUrl(s.authorizationParams || {}),
      { url: d } = u,
      c = We(u, ["url"]);
    this.transactionManager.create(
      Object.assign(
        Object.assign(Object.assign({}, c), { appState: l }),
        a && { organization: a }
      )
    );
    const p = o ? `${d}#${o}` : d;
    i ? await i(p) : window.location.assign(p);
  }
  async handleRedirectCallback(t = window.location.href) {
    const n = t.split("?").slice(1);
    if (n.length === 0)
      throw new Error("There are no query params available for parsing.");
    const {
        state: r,
        code: i,
        error: o,
        error_description: l,
      } = ((c) => {
        c.indexOf("#") > -1 && (c = c.substring(0, c.indexOf("#")));
        const p = new URLSearchParams(c);
        return {
          state: p.get("state"),
          code: p.get("code") || void 0,
          error: p.get("error") || void 0,
          error_description: p.get("error_description") || void 0,
        };
      })(n.join("")),
      s = this.transactionManager.get();
    if (!s) throw new se("missing_transaction", "Invalid state");
    if ((this.transactionManager.remove(), o))
      throw new Us(o, l || o, r, s.appState);
    if (!s.code_verifier || (s.state && s.state !== r))
      throw new se("state_mismatch", "Invalid state");
    const a = s.organization,
      u = s.nonce,
      d = s.redirect_uri;
    return (
      await this._requestToken(
        Object.assign(
          {
            audience: s.audience,
            scope: s.scope,
            code_verifier: s.code_verifier,
            grant_type: "authorization_code",
            code: i,
          },
          d ? { redirect_uri: d } : {}
        ),
        { nonceIn: u, organization: a }
      ),
      { appState: s.appState }
    );
  }
  async checkSession(t) {
    if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
      if (!this.cookieStorage.get("auth0.is.authenticated")) return;
      this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
        daysUntilExpire: this.sessionCheckExpiryDays,
        cookieDomain: this.options.cookieDomain,
      }),
        this.cookieStorage.remove("auth0.is.authenticated");
    }
    try {
      await this.getTokenSilently(t);
    } catch {}
  }
  async getTokenSilently(t = {}) {
    var n;
    const r = Object.assign(Object.assign({ cacheMode: "on" }, t), {
        authorizationParams: Object.assign(
          Object.assign(
            Object.assign({}, this.options.authorizationParams),
            t.authorizationParams
          ),
          {
            scope: Xr(
              this.scope,
              (n = t.authorizationParams) === null || n === void 0
                ? void 0
                : n.scope
            ),
          }
        ),
      }),
      i = await ((o, l) => {
        let s = Lo[l];
        return (
          s ||
            ((s = o().finally(() => {
              delete Lo[l], (s = null);
            })),
            (Lo[l] = s)),
          s
        );
      })(
        () => this._getTokenSilently(r),
        `${this.options.clientId}::${r.authorizationParams.audience}::${r.authorizationParams.scope}`
      );
    return t.detailedResponse ? i : i == null ? void 0 : i.access_token;
  }
  async _getTokenSilently(t) {
    const { cacheMode: n } = t,
      r = We(t, ["cacheMode"]);
    if (n !== "off") {
      const i = await this._getEntryFromCache({
        scope: r.authorizationParams.scope,
        audience: r.authorizationParams.audience || "default",
        clientId: this.options.clientId,
      });
      if (i) return i;
    }
    if (n !== "cache-only") {
      if (
        !(await (async (i, o = 3) => {
          for (let l = 0; l < o; l++) if (await i()) return !0;
          return !1;
        })(() => zo.acquireLock("auth0.lock.getTokenSilently", 5e3), 10))
      )
        throw new xr();
      try {
        if (
          (window.addEventListener("pagehide", this._releaseLockOnPageHide),
          n !== "off")
        ) {
          const u = await this._getEntryFromCache({
            scope: r.authorizationParams.scope,
            audience: r.authorizationParams.audience || "default",
            clientId: this.options.clientId,
          });
          if (u) return u;
        }
        const i = this.options.useRefreshTokens
            ? await this._getTokenUsingRefreshToken(r)
            : await this._getTokenFromIFrame(r),
          {
            id_token: o,
            access_token: l,
            oauthTokenScope: s,
            expires_in: a,
          } = i;
        return Object.assign(
          Object.assign(
            { id_token: o, access_token: l },
            s ? { scope: s } : null
          ),
          { expires_in: a }
        );
      } finally {
        await zo.releaseLock("auth0.lock.getTokenSilently"),
          window.removeEventListener("pagehide", this._releaseLockOnPageHide);
      }
    }
  }
  async getTokenWithPopup(t = {}, n = {}) {
    var r;
    const i = Object.assign(Object.assign({}, t), {
      authorizationParams: Object.assign(
        Object.assign(
          Object.assign({}, this.options.authorizationParams),
          t.authorizationParams
        ),
        {
          scope: Xr(
            this.scope,
            (r = t.authorizationParams) === null || r === void 0
              ? void 0
              : r.scope
          ),
        }
      ),
    });
    return (
      (n = Object.assign(Object.assign({}, jm), n)),
      await this.loginWithPopup(i, n),
      (
        await this.cacheManager.get(
          new Be({
            scope: i.authorizationParams.scope,
            audience: i.authorizationParams.audience || "default",
            clientId: this.options.clientId,
          })
        )
      ).access_token
    );
  }
  async isAuthenticated() {
    return !!(await this.getUser());
  }
  _buildLogoutUrl(t) {
    t.clientId !== null
      ? (t.clientId = t.clientId || this.options.clientId)
      : delete t.clientId;
    const n = t.logoutParams || {},
      { federated: r } = n,
      i = We(n, ["federated"]),
      o = r ? "&federated" : "";
    return (
      this._url(
        `/v2/logout?${zl(Object.assign({ clientId: t.clientId }, i))}`
      ) + o
    );
  }
  async logout(t = {}) {
    const n = cu(t),
      { openUrl: r } = n,
      i = We(n, ["openUrl"]);
    t.clientId === null
      ? await this.cacheManager.clear()
      : await this.cacheManager.clear(t.clientId || this.options.clientId),
      this.cookieStorage.remove(this.orgHintCookieName, {
        cookieDomain: this.options.cookieDomain,
      }),
      this.cookieStorage.remove(this.isAuthenticatedCookieName, {
        cookieDomain: this.options.cookieDomain,
      }),
      this.userCache.remove("@@user@@");
    const o = this._buildLogoutUrl(i);
    r ? await r(o) : r !== !1 && window.location.assign(o);
  }
  async _getTokenFromIFrame(t) {
    const n = Object.assign(Object.assign({}, t.authorizationParams), {
        prompt: "none",
      }),
      r = this.cookieStorage.get(this.orgHintCookieName);
    r && !n.organization && (n.organization = r);
    const {
      url: i,
      state: o,
      nonce: l,
      code_verifier: s,
      redirect_uri: a,
      scope: u,
      audience: d,
    } = await this._prepareAuthorizeUrl(
      n,
      { response_mode: "web_message" },
      window.location.origin
    );
    try {
      if (window.crossOriginIsolated)
        throw new se(
          "login_required",
          "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible."
        );
      const c = t.timeoutInSeconds || this.options.authorizeTimeoutInSeconds,
        p = await ((y, k, S = 60) =>
          new Promise((h, f) => {
            const m = window.document.createElement("iframe");
            m.setAttribute("width", "0"),
              m.setAttribute("height", "0"),
              (m.style.display = "none");
            const w = () => {
              window.document.body.contains(m) &&
                (window.document.body.removeChild(m),
                window.removeEventListener("message", C, !1));
            };
            let C;
            const j = setTimeout(() => {
              f(new xr()), w();
            }, 1e3 * S);
            (C = function (P) {
              if (
                P.origin != k ||
                !P.data ||
                P.data.type !== "authorization_response"
              )
                return;
              const E = P.source;
              E && E.close(),
                P.data.response.error
                  ? f(se.fromPayload(P.data.response))
                  : h(P.data.response),
                clearTimeout(j),
                window.removeEventListener("message", C, !1),
                setTimeout(w, 2e3);
            }),
              window.addEventListener("message", C, !1),
              window.document.body.appendChild(m),
              m.setAttribute("src", y);
          }))(i, this.domainUrl, c);
      if (o !== p.state) throw new se("state_mismatch", "Invalid state");
      const g = await this._requestToken(
        Object.assign(Object.assign({}, t.authorizationParams), {
          code_verifier: s,
          code: p.code,
          grant_type: "authorization_code",
          redirect_uri: a,
          timeout: t.authorizationParams.timeout || this.httpTimeoutMs,
        }),
        { nonceIn: l, organization: n.organization }
      );
      return Object.assign(Object.assign({}, g), {
        scope: u,
        oauthTokenScope: g.scope,
        audience: d,
      });
    } catch (c) {
      throw (c.error === "login_required" && this.logout({ openUrl: !1 }), c);
    }
  }
  async _getTokenUsingRefreshToken(t) {
    const n = await this.cacheManager.get(
      new Be({
        scope: t.authorizationParams.scope,
        audience: t.authorizationParams.audience || "default",
        clientId: this.options.clientId,
      })
    );
    if (!((n && n.refresh_token) || this.worker)) {
      if (this.options.useRefreshTokensFallback)
        return await this._getTokenFromIFrame(t);
      throw new Qi(
        t.authorizationParams.audience || "default",
        t.authorizationParams.scope
      );
    }
    const r =
        t.authorizationParams.redirect_uri ||
        this.options.authorizationParams.redirect_uri ||
        window.location.origin,
      i =
        typeof t.timeoutInSeconds == "number" ? 1e3 * t.timeoutInSeconds : null;
    try {
      const o = await this._requestToken(
        Object.assign(
          Object.assign(Object.assign({}, t.authorizationParams), {
            grant_type: "refresh_token",
            refresh_token: n && n.refresh_token,
            redirect_uri: r,
          }),
          i && { timeout: i }
        )
      );
      return Object.assign(Object.assign({}, o), {
        scope: t.authorizationParams.scope,
        oauthTokenScope: o.scope,
        audience: t.authorizationParams.audience || "default",
      });
    } catch (o) {
      if (
        (o.message.indexOf("Missing Refresh Token") > -1 ||
          (o.message && o.message.indexOf("invalid refresh token") > -1)) &&
        this.options.useRefreshTokensFallback
      )
        return await this._getTokenFromIFrame(t);
      throw o;
    }
  }
  async _saveEntryInCache(t) {
    const { id_token: n, decodedToken: r } = t,
      i = We(t, ["id_token", "decodedToken"]);
    this.userCache.set("@@user@@", { id_token: n, decodedToken: r }),
      await this.cacheManager.setIdToken(
        this.options.clientId,
        t.id_token,
        t.decodedToken
      ),
      await this.cacheManager.set(i);
  }
  async _getIdTokenFromCache() {
    const t = this.options.authorizationParams.audience || "default",
      n = await this.cacheManager.getIdToken(
        new Be({
          clientId: this.options.clientId,
          audience: t,
          scope: this.scope,
        })
      ),
      r = this.userCache.get("@@user@@");
    return n && n.id_token === (r == null ? void 0 : r.id_token)
      ? r
      : (this.userCache.set("@@user@@", n), n);
  }
  async _getEntryFromCache({ scope: t, audience: n, clientId: r }) {
    const i = await this.cacheManager.get(
      new Be({ scope: t, audience: n, clientId: r }),
      60
    );
    if (i && i.access_token) {
      const { access_token: o, oauthTokenScope: l, expires_in: s } = i,
        a = await this._getIdTokenFromCache();
      return (
        a &&
        Object.assign(
          Object.assign(
            { id_token: a.id_token, access_token: o },
            l ? { scope: l } : null
          ),
          { expires_in: s }
        )
      );
    }
  }
  async _requestToken(t, n) {
    const { nonceIn: r, organization: i } = n || {},
      o = await zm(
        Object.assign(
          {
            baseUrl: this.domainUrl,
            client_id: this.options.clientId,
            auth0Client: this.options.auth0Client,
            useFormData: this.options.useFormData,
            timeout: this.httpTimeoutMs,
          },
          t
        ),
        this.worker
      ),
      l = await this._verifyIdToken(o.id_token, r, i);
    return (
      await this._saveEntryInCache(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, o), {
              decodedToken: l,
              scope: t.scope,
              audience: t.audience || "default",
            }),
            o.scope ? { oauthTokenScope: o.scope } : null
          ),
          { client_id: this.options.clientId }
        )
      ),
      this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
        daysUntilExpire: this.sessionCheckExpiryDays,
        cookieDomain: this.options.cookieDomain,
      }),
      this._processOrgHint(i || l.claims.org_id),
      Object.assign(Object.assign({}, o), { decodedToken: l })
    );
  }
}
var Wd = { isAuthenticated: !1, isLoading: !0 },
  Xe = function () {
    throw new Error("You forgot to wrap your component in <Auth0Provider>.");
  },
  Zm = q(q({}, Wd), {
    buildAuthorizeUrl: Xe,
    buildLogoutUrl: Xe,
    getAccessTokenSilently: Xe,
    getAccessTokenWithPopup: Xe,
    getIdTokenClaims: Xe,
    loginWithRedirect: Xe,
    loginWithPopup: Xe,
    logout: Xe,
    handleRedirectCallback: Xe,
  }),
  Vd = x.createContext(Zm),
  du = (function (e) {
    _m(t, e);
    function t(n, r) {
      var i = e.call(this, r || n) || this;
      return (
        (i.error = n),
        (i.error_description = r),
        Object.setPrototypeOf(i, t.prototype),
        i
      );
    }
    return t;
  })(Error),
  Xm = /[?&]code=[^&]+/,
  Gm = /[?&]state=[^&]+/,
  Ym = /[?&]error=[^&]+/,
  Qm = function (e) {
    return (
      e === void 0 && (e = window.location.search),
      (Xm.test(e) || Ym.test(e)) && Gm.test(e)
    );
  },
  Bd = function (e) {
    return function (t) {
      return t instanceof Error
        ? t
        : t !== null &&
          typeof t == "object" &&
          "error" in t &&
          typeof t.error == "string"
        ? "error_description" in t && typeof t.error_description == "string"
          ? new du(t.error, t.error_description)
          : new du(t.error)
        : new Error(e);
    };
  },
  fu = Bd("Login failed"),
  Oo = Bd("Get access token failed"),
  Hd = function (e) {
    var t;
    e != null &&
      e.redirectUri &&
      (console.warn(
        "Using `redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `redirectUri` will be no longer supported in a future version"
      ),
      (e.authorizationParams = e.authorizationParams || {}),
      (e.authorizationParams.redirect_uri = e.redirectUri),
      delete e.redirectUri),
      !(
        (t = e == null ? void 0 : e.authorizationParams) === null ||
        t === void 0
      ) &&
        t.redirectUri &&
        (console.warn(
          "Using `authorizationParams.redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `authorizationParams.redirectUri` will be removed in a future version"
        ),
        (e.authorizationParams.redirect_uri =
          e.authorizationParams.redirectUri),
        delete e.authorizationParams.redirectUri);
  },
  Jm = function (e, t) {
    switch (t.type) {
      case "LOGIN_POPUP_STARTED":
        return q(q({}, e), { isLoading: !0 });
      case "LOGIN_POPUP_COMPLETE":
      case "INITIALISED":
        return q(q({}, e), {
          isAuthenticated: !!t.user,
          user: t.user,
          isLoading: !1,
          error: void 0,
        });
      case "HANDLE_REDIRECT_COMPLETE":
      case "GET_ACCESS_TOKEN_COMPLETE":
        return e.user === t.user
          ? e
          : q(q({}, e), { isAuthenticated: !!t.user, user: t.user });
      case "LOGOUT":
        return q(q({}, e), { isAuthenticated: !1, user: void 0 });
      case "ERROR":
        return q(q({}, e), { isLoading: !1, error: t.error });
    }
  },
  bm = function (e) {
    return (
      Hd(e),
      q(q({}, e), { auth0Client: { name: "auth0-react", version: "2.2.4" } })
    );
  },
  qm = function (e) {
    window.history.replaceState(
      {},
      document.title,
      (e == null ? void 0 : e.returnTo) || window.location.pathname
    );
  },
  e0 = function (e) {
    var t = e.children,
      n = e.skipRedirectCallback,
      r = e.onRedirectCallback,
      i = r === void 0 ? qm : r,
      o = e.context,
      l = o === void 0 ? Vd : o,
      s = Em(e, [
        "children",
        "skipRedirectCallback",
        "onRedirectCallback",
        "context",
      ]),
      a = x.useState(function () {
        return new Km(bm(s));
      })[0],
      u = x.useReducer(Jm, Wd),
      d = u[0],
      c = u[1],
      p = x.useRef(!1);
    x.useEffect(
      function () {
        p.current ||
          ((p.current = !0),
          (function () {
            return Jt(void 0, void 0, void 0, function () {
              var C, j, P;
              return bt(this, function (E) {
                switch (E.label) {
                  case 0:
                    return (
                      E.trys.push([0, 7, , 8]),
                      (C = void 0),
                      Qm() && !n ? [4, a.handleRedirectCallback()] : [3, 3]
                    );
                  case 1:
                    return (j = E.sent().appState), [4, a.getUser()];
                  case 2:
                    return (C = E.sent()), i(j, C), [3, 6];
                  case 3:
                    return [4, a.checkSession()];
                  case 4:
                    return E.sent(), [4, a.getUser()];
                  case 5:
                    (C = E.sent()), (E.label = 6);
                  case 6:
                    return c({ type: "INITIALISED", user: C }), [3, 8];
                  case 7:
                    return (
                      (P = E.sent()), c({ type: "ERROR", error: fu(P) }), [3, 8]
                    );
                  case 8:
                    return [2];
                }
              });
            });
          })());
      },
      [a, i, n]
    );
    var g = x.useCallback(
        function (C) {
          return Hd(C), a.loginWithRedirect(C);
        },
        [a]
      ),
      y = x.useCallback(
        function (C, j) {
          return Jt(void 0, void 0, void 0, function () {
            var P, E;
            return bt(this, function (I) {
              switch (I.label) {
                case 0:
                  c({ type: "LOGIN_POPUP_STARTED" }), (I.label = 1);
                case 1:
                  return I.trys.push([1, 3, , 4]), [4, a.loginWithPopup(C, j)];
                case 2:
                  return I.sent(), [3, 4];
                case 3:
                  return (
                    (P = I.sent()), c({ type: "ERROR", error: fu(P) }), [2]
                  );
                case 4:
                  return [4, a.getUser()];
                case 5:
                  return (
                    (E = I.sent()),
                    c({ type: "LOGIN_POPUP_COMPLETE", user: E }),
                    [2]
                  );
              }
            });
          });
        },
        [a]
      ),
      k = x.useCallback(
        function (C) {
          return (
            C === void 0 && (C = {}),
            Jt(void 0, void 0, void 0, function () {
              return bt(this, function (j) {
                switch (j.label) {
                  case 0:
                    return [4, a.logout(C)];
                  case 1:
                    return (
                      j.sent(),
                      (C.openUrl || C.openUrl === !1) && c({ type: "LOGOUT" }),
                      [2]
                    );
                }
              });
            })
          );
        },
        [a]
      ),
      S = x.useCallback(
        function (C) {
          return Jt(void 0, void 0, void 0, function () {
            var j, P, E, I;
            return bt(this, function (L) {
              switch (L.label) {
                case 0:
                  return L.trys.push([0, 2, 3, 5]), [4, a.getTokenSilently(C)];
                case 1:
                  return (j = L.sent()), [3, 5];
                case 2:
                  throw ((P = L.sent()), Oo(P));
                case 3:
                  return (
                    (E = c),
                    (I = { type: "GET_ACCESS_TOKEN_COMPLETE" }),
                    [4, a.getUser()]
                  );
                case 4:
                  return E.apply(void 0, [((I.user = L.sent()), I)]), [7];
                case 5:
                  return [2, j];
              }
            });
          });
        },
        [a]
      ),
      h = x.useCallback(
        function (C, j) {
          return Jt(void 0, void 0, void 0, function () {
            var P, E, I, L;
            return bt(this, function (K) {
              switch (K.label) {
                case 0:
                  return (
                    K.trys.push([0, 2, 3, 5]), [4, a.getTokenWithPopup(C, j)]
                  );
                case 1:
                  return (P = K.sent()), [3, 5];
                case 2:
                  throw ((E = K.sent()), Oo(E));
                case 3:
                  return (
                    (I = c),
                    (L = { type: "GET_ACCESS_TOKEN_COMPLETE" }),
                    [4, a.getUser()]
                  );
                case 4:
                  return I.apply(void 0, [((L.user = K.sent()), L)]), [7];
                case 5:
                  return [2, P];
              }
            });
          });
        },
        [a]
      ),
      f = x.useCallback(
        function () {
          return a.getIdTokenClaims();
        },
        [a]
      ),
      m = x.useCallback(
        function (C) {
          return Jt(void 0, void 0, void 0, function () {
            var j, P, E;
            return bt(this, function (I) {
              switch (I.label) {
                case 0:
                  return (
                    I.trys.push([0, 2, 3, 5]), [4, a.handleRedirectCallback(C)]
                  );
                case 1:
                  return [2, I.sent()];
                case 2:
                  throw ((j = I.sent()), Oo(j));
                case 3:
                  return (
                    (P = c),
                    (E = { type: "HANDLE_REDIRECT_COMPLETE" }),
                    [4, a.getUser()]
                  );
                case 4:
                  return P.apply(void 0, [((E.user = I.sent()), E)]), [7];
                case 5:
                  return [2];
              }
            });
          });
        },
        [a]
      ),
      w = x.useMemo(
        function () {
          return q(q({}, d), {
            getAccessTokenSilently: S,
            getAccessTokenWithPopup: h,
            getIdTokenClaims: f,
            loginWithRedirect: g,
            loginWithPopup: y,
            logout: k,
            handleRedirectCallback: m,
          });
        },
        [d, S, h, f, g, y, k, m]
      );
    return Dl.createElement(l.Provider, { value: w }, t);
  },
  As = function (e) {
    return e === void 0 && (e = Vd), x.useContext(e);
  };
const jr = x.createContext({}),
  t0 = ({ children: e }) => {
    const t = {
        userId: null,
        username: null,
        signedInWithGoogle: !1,
        isAuthentic: !1,
      },
      [n, r] = x.useState(t);
    return (
      x.useEffect(() => {
        const i = async () => {
          if (!n.isAuthentic)
            try {
              const o = await fetch("/api/v1/user/validation", {
                  method: "get",
                }),
                { user: l } = await o.json();
              if (!l) return console.log("User not logged in");
              const { userId: s, username: a } = l;
              r({
                userId: s,
                username: a,
                isAuthentic: !0,
                signedInWithGoogle: !1,
              });
            } catch (o) {
              console.log(o);
            }
        };
        console.log("UserContext useEffect"), i();
      }, []),
      v.jsx(jr.Provider, { value: { user: n, setUser: r }, children: e })
    );
  },
  n0 = () => {
    const { isAuthenticated: e, user: t, logout: n } = As(),
      { user: r, setUser: i } = x.useContext(jr),
      { username: o, isAuthentic: l } = r,
      s = async () => {
        try {
          const a = await fetch("/api/v1/user/signout", { method: "get" });
          if (
            (r.signedInWithGoogle && n(),
            i({
              userId: null,
              username: null,
              isAuthentic: !1,
              signedInWithGoogle: !1,
            }),
            !a.ok)
          )
            return console.log("Error Logging out");
        } catch (a) {
          console.log(a);
        }
      };
    return v.jsxs("nav", {
      className: "navbar bg-neutral text-zinc-300",
      children: [
        v.jsx("div", {
          className: "navbar-start",
          children: v.jsx(Ut, {
            to: "/",
            className: "btn btn-ghost text-xl ",
            children: "Scrapi",
          }),
        }),
        v.jsx("div", {
          className: "navbar-center hidden lg:flex",
          children: v.jsxs("ul", {
            className: "menu menu-horizontal px-1 text-lg",
            children: [
              v.jsx("li", {
                children: v.jsx(Ut, { to: "/", children: "Search Products" }),
              }),
              l &&
                v.jsx("li", {
                  children: v.jsx(Ut, {
                    to: "/user/favourites",
                    children: "Favourites Page",
                  }),
                }),
            ],
          }),
        }),
        v.jsx("div", {
          className: "navbar-end",
          children: l
            ? v.jsxs("div", {
                className: "dropdown dropdown-end",
                children: [
                  v.jsxs("div", {
                    tabIndex: 0,
                    role: "button",
                    className: "btn m-1",
                    children: [
                      v.jsxs("span", {
                        children: [
                          "Hey, ",
                          r == null ? void 0 : r.username,
                          " ",
                        ],
                      }),
                      v.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        height: "18",
                        width: "16",
                        viewBox: "0 0 448 512",
                        children: v.jsx("path", {
                          d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z",
                        }),
                      }),
                    ],
                  }),
                  v.jsxs("ul", {
                    tabIndex: 0,
                    className:
                      "dropdown-content menu bg-neutral border-2 border-slate-400 rounded-box z-[1] w-52 p-2 shadow",
                    children: [
                      v.jsx("li", {
                        children: v.jsx(Ut, {
                          to: "/user/favourites",
                          className: "link-accent",
                          children: "Favourites",
                        }),
                      }),
                      v.jsx("li", {
                        className: "link-accent",
                        children: v.jsx("a", {
                          onClick: s,
                          children: "Logout",
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : v.jsx(Ut, { to: "/signin", className: "btn", children: "Login" }),
        }),
      ],
    });
  },
  Ro = ({ title: e, bgClr: t = "bg-accent" }) =>
    v.jsx("div", {
      className: `${t} px-4`,
      style: {
        clipPath:
          "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 10% 50%, 0% 0%)",
      },
      children: v.jsx("h2", { className: "", children: e }),
    }),
  Kd = ({ products: e, childOfFavPage: t }) => {
    const [n, r] = x.useState("");
    let i = null,
      o = 0,
      l = null,
      s = 99999,
      a = null,
      u = 0;
    const d = async (c) => {
      const p = await fetch("/api/v1/user/favourites", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(c),
      });
      if (!p.ok) return alert("An error Occured");
      await p.json(), r(c.prodId);
    };
    return (
      e.forEach((c) => {
        c.prodRatings &&
          o < c.prodRatings &&
          ((o = c.prodRatings), (i = c.prodId)),
          s > c.prodPrice && ((s = c.prodPrice), (l = c.prodId)),
          u < c.prodReviews && ((u = c.prodReviews), (a = c.prodId));
      }),
      e.length === 0
        ? v.jsx("article", {
            className:
              "grid place-items-center my-16 w-[400px] mx-auto min-h-60 bg-gray-200 rounded-md py-4 px-3",
            children: v.jsx("h2", {
              className: "text-zinc-500 italic",
              children: "Search for Products",
            }),
          })
        : v.jsx("article", {
            className:
              "grid grid-cols-3 place-items-center gap-4 my-16 max-w-5xl mx-auto min-h-60 bg-gray-200 rounded-md py-4 px-3 relative",
            children: e.map((c, p) => {
              let {
                  prodId: g,
                  prodRatings: y,
                  prodReviews: k,
                  prodPrice: S,
                  productImgLink: h,
                  productTitle: f,
                  prodLink: m,
                  originSite: w,
                } = c,
                C = !1,
                j = !1,
                P = !1,
                E = S * 278;
              (E = parseFloat(E.toFixed(2))),
                i === g && (C = !0),
                l === g && (j = !0),
                a === g && (P = !0);
              let I = "";
              switch (w) {
                case "AMAZON":
                  I = "/amazon-logo.png";
                  break;
                case "ALIEXPRESS":
                  I = "/aliexpress-logo.png";
                  break;
                case "DARAZ":
                  I = "/daraz-logo.png";
                  break;
              }
              return v.jsxs(
                "div",
                {
                  className:
                    "card card-compact bg-base-100 w-80 shadow-xl relative",
                  "data-produid": `${g}`,
                  children: [
                    !t &&
                      v.jsx("div", {
                        children:
                          n === g
                            ? v.jsx("span", {
                                className:
                                  "bg-slate-300 max-w-max p-3 absolute top-0 left-0 cursor-pointer",
                                children: v.jsx("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  height: "20",
                                  width: "20",
                                  viewBox: "0 0 512 512",
                                  children: v.jsx("path", {
                                    fill: "#ff8787",
                                    d: "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z",
                                  }),
                                }),
                              })
                            : v.jsx("span", {
                                className:
                                  "bg-slate-300 max-w-max p-3 absolute top-0 left-0 cursor-pointer",
                                onClick: (L) => d(c),
                                children: v.jsx("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  height: "20",
                                  width: "20",
                                  viewBox: "0 0 512 512",
                                  children: v.jsx("path", {
                                    d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z",
                                  }),
                                }),
                              }),
                      }),
                    v.jsx("figure", {
                      children: v.jsx("img", {
                        src: h,
                        alt: f,
                        className: "px-2 py-3",
                      }),
                    }),
                    v.jsxs("div", {
                      className: "card-body",
                      children: [
                        v.jsx("p", {
                          className:
                            "card-title max-w-64 truncate inline-block",
                          children: f,
                        }),
                        v.jsxs("p", {
                          children: [
                            "Rs. ",
                            v.jsx("span", {
                              className: "font-bold",
                              children: E,
                            }),
                          ],
                        }),
                        v.jsxs("div", {
                          className: "flex justify-between",
                          children: [
                            v.jsxs("p", {
                              children: [
                                "Ratings:",
                                v.jsxs("span", {
                                  className: "font-bold",
                                  children: [" ", y || "N/A"],
                                }),
                              ],
                            }),
                            v.jsxs("p", {
                              className: "text-right",
                              children: [
                                "Reviews/Sold:",
                                " ",
                                v.jsx("span", {
                                  className: "font-bold",
                                  children: k || "N/A",
                                }),
                              ],
                            }),
                          ],
                        }),
                        v.jsxs("div", {
                          className:
                            "card-actions mt-4 flex justify-between items-center",
                          children: [
                            v.jsx("div", {
                              className: "h-16 w-16 flex items-center",
                              children: v.jsx("img", { src: I, alt: I }),
                            }),
                            v.jsx("a", {
                              target: "_blank",
                              href: m,
                              className: "btn btn-primary ",
                              children: "Visit Product",
                            }),
                          ],
                        }),
                      ],
                    }),
                    !t &&
                      C &&
                      v.jsx("div", {
                        className: "absolute top-4 right-0",
                        children: v.jsx(Ro, {
                          title: "Most Rated",
                          bgClr: "bg-yellow-500",
                        }),
                      }),
                    !t &&
                      j &&
                      v.jsx("div", {
                        className: "absolute top-4 right-0",
                        children: v.jsx(Ro, {
                          title: "Lowest Price",
                          bgClr: "bg-green-500",
                        }),
                      }),
                    !t &&
                      P &&
                      v.jsx("div", {
                        className: "absolute top-4 right-0",
                        children: v.jsx(Ro, {
                          title: "Most Reviewed",
                          bgClr: "bg-accent",
                        }),
                      }),
                  ],
                },
                g
              );
            }),
          })
    );
  },
  r0 = "_getInfoSection_9dqmv_1",
  i0 = "_searchInputField_9dqmv_21",
  o0 = "_priceLimits_9dqmv_29",
  l0 = "_siteChoiceHeading_9dqmv_39",
  s0 = "_sitesToScrap_9dqmv_47",
  Wn = {
    getInfoSection: r0,
    searchInputField: i0,
    priceLimits: o0,
    siteChoiceHeading: l0,
    sitesToScrap: s0,
  },
  a0 = "_toastAnimationStart_annof_1",
  u0 = "_startAnim_annof_1",
  c0 = "_toastEndAnimation_annof_15",
  d0 = "_endAnim_annof_1",
  pu = {
    toastAnimationStart: a0,
    startAnim: u0,
    toastEndAnimation: c0,
    endAnim: d0,
  },
  tr = ({ msg: e, category: t, resetFunc: n }) => {
    const [r, i] = x.useState(!0),
      [o, l] = x.useState(!1);
    if (
      (x.useEffect(() => {
        setTimeout(() => {
          l(!0);
        }, 2700),
          setTimeout(() => n(""), 3e3);
      }, []),
      !r)
    )
      return null;
    let s = null;
    switch (t) {
      case "error":
        s = "bg-red-500";
        break;
      case "success":
        s = "bg-green-500";
        break;
      default:
        s = "bg-blue-500";
        break;
    }
    return v.jsx("aside", {
      className: `absolute top-24 left-1/2 translate-x-1/2 ${s} max-w-max font-semibold px-4 py-5 z-10 rounded-md text-lg ${
        pu.toastAnimationStart
      } ${o && pu.toastEndAnimation} `,
      children: v.jsx("div", { children: e }),
    });
  },
  f0 = "_loader_sfhjz_3",
  p0 = "_before8_sfhjz_1",
  h0 = "_after6_sfhjz_1",
  m0 = { loader: f0, before8: p0, after6: h0 },
  v0 = () =>
    v.jsxs("div", {
      className: "relative",
      children: [
        v.jsx("div", { class: `loader ${m0.loader}` }),
        v.jsx("p", {
          className: "translate-y-10 text-center font-semibold",
          children: "Searching",
        }),
      ],
    }),
  g0 = () => {
    const [e, t] = x.useState(1e4),
      [n, r] = x.useState(1e3),
      [i, o] = x.useState("DOLLAR"),
      [l, s] = x.useState(""),
      [a, u] = x.useState(!1),
      [d, c] = x.useState(!1),
      [p, g] = x.useState(!1),
      [y, k] = x.useState(!1),
      [S, h] = x.useState([]),
      [f, m] = x.useState(!1),
      [w, C] = x.useState(!1),
      [j, P] = x.useState(!1),
      E = async (I) => {
        if ((I.preventDefault(), !e || !n || !i || !l)) return m(!0);
        if (l.length < 2) return C(!0);
        if (!d && !p && !y) return P(!0);
        let L = [];
        d && L.push("AMAZON"), p && L.push("ALIEXPRESS"), y && L.push("DARAZ");
        let K = e / 278;
        K = parseInt(K.toFixed(0));
        let Ze = n / 278;
        Ze = parseInt(Ze.toFixed(0));
        const It = {
          priceLimits: { highPrice: K, lowPrice: Ze },
          currency: i,
          itemToSearch: l,
          sitesToSearch: L,
        };
        u(!0);
        let Le = null;
        try {
          (Le = await fetch("api/v1/products/search-products", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(It),
          })),
            (Le = await Le.json());
        } catch (Ji) {
          (Le = null), console.log("Error " + Ji);
        }
        console.log(Le), u(!1), Le && Le.products && h(Le.products);
      };
    return (
      console.log(S),
      v.jsxs("section", {
        className: "",
        children: [
          f &&
            v.jsx(tr, {
              msg: "Please fill in all fields",
              category: "error",
              resetFunc: m,
            }),
          j &&
            v.jsx(tr, {
              msg: "Select Atleast One Website to Search from",
              category: "error",
              resetFunc: P,
            }),
          w &&
            v.jsx(tr, {
              msg: "Enter Atleast two Characters in the Search Field",
              category: "error",
              resetFunc: C,
            }),
          v.jsxs("section", {
            className: "mt-8 section-center",
            children: [
              v.jsxs("form", {
                onSubmit: E,
                className: `${Wn.getInfoSection}`,
                children: [
                  v.jsxs("label", {
                    className: `input input-bordered flex items-center gap-2 pr-0 justify-center grow max-w-2xl min-w-[36rem] ${Wn.searchInputField}`,
                    children: [
                      v.jsx("input", {
                        type: "text",
                        className: "grow",
                        placeholder: "Search",
                        value: l,
                        onChange: (I) => s(I.target.value),
                      }),
                      v.jsx("button", {
                        className: "bg-orange-300 h-full w-11 text-center",
                        type: "submit",
                        children: v.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 16 16",
                          fill: "currentColor",
                          className: "h-full w-6 opacity-70 mx-auto",
                          children: v.jsx("path", {
                            fillRule: "evenodd",
                            d: "M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
                            clipRule: "evenodd",
                          }),
                        }),
                      }),
                    ],
                  }),
                  v.jsxs("div", {
                    className: `flex items-center gap-4 ${Wn.priceLimits}`,
                    children: [
                      v.jsxs("div", {
                        className:
                          "input input-bordered flex items-center pl-0",
                        children: [
                          v.jsxs("select", {
                            className:
                              "bg-transparent h-full rounded-l-sm px-1 text-lg cursor-pointer",
                            onChange: (I) => console.log(I.target.value),
                            children: [
                              v.jsx("option", {
                                value: "RUPPEE",
                                children: "Rs",
                              }),
                              v.jsx("option", {
                                value: "DOLLAR",
                                children: "$",
                              }),
                              v.jsx("option", {
                                value: "POUND",
                                children: "£",
                              }),
                            ],
                          }),
                          v.jsx("input", {
                            type: "number",
                            placeholder: "Min",
                            className: " w-full max-w-24 text-center",
                            value: n,
                            onChange: (I) => r(I.target.value),
                          }),
                        ],
                      }),
                      v.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        height: 14,
                        width: 12.5,
                        viewBox: "0 0 448 512",
                        children: v.jsx("path", {
                          d: "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z",
                        }),
                      }),
                      v.jsx("input", {
                        type: "number",
                        placeholder: "Max",
                        className:
                          "input input-bordered w-full max-w-36 text-center",
                        value: e,
                        onChange: (I) => t(I.target.value),
                      }),
                    ],
                  }),
                  v.jsx("h2", {
                    className: `${Wn.siteChoiceHeading} mt-6 text-2xl font-bold`,
                    children: "Select websites to search from",
                  }),
                  v.jsxs("div", {
                    className: `form-control ${Wn.sitesToScrap} flex flex-row justify-evenly gap-4`,
                    children: [
                      v.jsxs("label", {
                        className: "cursor-pointer label",
                        children: [
                          v.jsxs("div", {
                            children: [
                              v.jsx("img", { src: "", alt: "" }),
                              v.jsx("span", {
                                className: "label-text mr-2",
                                children: "Amazon",
                              }),
                            ],
                          }),
                          v.jsx("input", {
                            type: "checkbox",
                            checked: d,
                            onChange: (I) => c(I.target.checked),
                            className: "checkbox checkbox-accent",
                          }),
                        ],
                      }),
                      v.jsxs("label", {
                        className: "cursor-pointer label",
                        children: [
                          v.jsxs("div", {
                            children: [
                              v.jsx("img", { src: "", alt: "" }),
                              v.jsx("span", {
                                className: "label-text mr-2",
                                children: "Aliexpress",
                              }),
                            ],
                          }),
                          v.jsx("input", {
                            type: "checkbox",
                            checked: p,
                            onChange: (I) => g(I.target.checked),
                            className: "checkbox checkbox-accent",
                          }),
                        ],
                      }),
                      v.jsxs("label", {
                        className: "cursor-pointer label",
                        children: [
                          v.jsxs("div", {
                            children: [
                              v.jsx("img", { src: "", alt: "" }),
                              v.jsx("span", {
                                className: "label-text mr-2",
                                children: "Daraz",
                              }),
                            ],
                          }),
                          v.jsx("input", {
                            type: "checkbox",
                            className: "checkbox checkbox-accent",
                            checked: y,
                            onChange: (I) => k(I.target.checked),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              a
                ? v.jsx("div", {
                    className: "relative mt-20",
                    children: v.jsx(v0, {}),
                  })
                : v.jsx(Kd, { products: S, childOfFavPage: !1 }),
            ],
          }),
        ],
      })
    );
  },
  y0 = () => {
    const [e, t] = x.useState(!1),
      { user: n, setUser: r } = x.useContext(jr),
      i = async () => {
        t(!0);
        try {
          const o = await fetch("/api/v1/user/validation", { method: "get" });
          if (!o.ok) {
            r({
              userId: null,
              username: null,
              signedInWithGoogle: !1,
              isAuthentic: !1,
            }),
              console.log("User not signed in");
            return;
          }
          const { user: l } = await o.json(),
            { userId: s, username: a } = l;
          r({
            userId: s,
            username: a,
            isAuthentic: !0,
            signedInWithGoogle: !1,
          });
        } catch (o) {
          console.log("There was an error, ", o);
        }
        t(!1);
      };
    return (
      x.useEffect(() => {
        i();
      }, []),
      { user: n, isLoading: e }
    );
  },
  w0 = () => {
    const [e, t] = x.useState([]);
    return (
      x.useEffect(() => {
        (async () => {
          const r = await fetch("/api/v1/user/favourites", { method: "get" });
          if (!r.ok) {
            const o = await r.json();
            alert(o == null ? void 0 : o.error);
          }
          const { favProducts: i } = await r.json();
          console.log(i), t(i);
        })();
      }, []),
      v.jsx("section", {
        className: "section-center relative",
        children: v.jsxs("article", {
          children: [
            v.jsx("h2", {
              className: "text-center text-2xl mt-4 font-bold",
              children: "Your Favourites",
            }),
            e.length !== 0
              ? v.jsx(Kd, { products: e, childOfFavPage: !0 })
              : v.jsx("div", {
                  className:
                    "mt-28 bg-gray-200 rounded-md py-8 px-3 mx-auto max-w-lg ",
                  children: v.jsx("h3", {
                    className: " text-center italic",
                    children: "No Products added to favourites",
                  }),
                }),
          ],
        }),
      })
    );
  },
  k0 = () => {
    const [e, t] = x.useState(!1),
      [n, r] = x.useState(!1),
      i = x.useRef(),
      o = x.useRef(),
      l = x.useRef(),
      s = x.useRef(),
      [a, u] = x.useState(""),
      [d, c] = x.useState(""),
      [p, g] = x.useState(""),
      [y, k] = x.useState(""),
      [S, h] = x.useState(""),
      f = async (m) => {
        if (
          (m.preventDefault(), console.log("submitted"), !a || !d || !p || !y)
        ) {
          h("Please fill in all fields"),
            a
              ? i.current.classList.remove("input-error")
              : i.current.classList.add("input-error"),
            d
              ? o.current.classList.remove("input-error")
              : o.current.classList.add("input-error"),
            p
              ? l.current.classList.remove("input-error")
              : l.current.classList.add("input-error"),
            y
              ? s.current.classList.remove("input-error")
              : s.current.classList.add("input-error");
          return;
        }
        if (a.length < 5)
          return h("UserName should contain minimum 5 characters");
        if (p.length < 8)
          return h("Password should contain minimum 8 characters");
        if (p != y)
          return (
            l.current.classList.add("input-error"),
            s.current.classList.add("input-error"),
            h("Passwords do not match")
          );
        try {
          const w = await fetch("api/v1/user", {
              method: "post",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ username: a, password: p, email: d }),
            }),
            C = await w.json();
          w.ok || h(C.error), console.log(C);
        } catch (w) {
          console.log("There was an error ", w);
        }
      };
    return v.jsxs("section", {
      className: "section-center",
      children: [
        S && v.jsx(tr, { category: "error", msg: S, resetFunc: h }),
        v.jsxs("article", {
          className: "mb-12 mt-8",
          children: [
            v.jsx("h2", {
              className: "text-2xl font-bold text-center mb-8",
              children: "Create An Account",
            }),
            v.jsxs("form", {
              onSubmit: f,
              className:
                "max-w-xs flex flex-col gap-4 bg-neutral py-12 px-6 rounded-md mx-auto",
              children: [
                v.jsxs("label", {
                  className: "input input-bordered flex items-center gap-2",
                  ref: i,
                  children: [
                    v.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 16 16",
                      fill: "currentColor",
                      className: "h-4 w-4 opacity-70",
                      children: v.jsx("path", {
                        d: "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z",
                      }),
                    }),
                    v.jsx("input", {
                      type: "text",
                      className: "grow",
                      placeholder: "Username",
                      value: a,
                      onChange: (m) => u(m.target.value),
                    }),
                  ],
                }),
                v.jsxs("label", {
                  className: "input input-bordered flex items-center gap-2",
                  ref: o,
                  children: [
                    v.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 16 16",
                      fill: "currentColor",
                      className: "h-4 w-4 opacity-70",
                      children: [
                        v.jsx("path", {
                          d: "M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z",
                        }),
                        v.jsx("path", {
                          d: "M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z",
                        }),
                      ],
                    }),
                    v.jsx("input", {
                      type: "email",
                      className: "grow",
                      placeholder: "Email",
                      value: d,
                      onChange: (m) => c(m.target.value),
                    }),
                  ],
                }),
                v.jsxs("label", {
                  className: "input input-bordered flex items-center gap-2",
                  ref: l,
                  children: [
                    v.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 16 16",
                      fill: "currentColor",
                      className: "h-4 w-4 opacity-70",
                      children: v.jsx("path", {
                        fillRule: "evenodd",
                        d: "M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z",
                        clipRule: "evenodd",
                      }),
                    }),
                    v.jsx("input", {
                      type: e ? "text" : "password",
                      className: "grow",
                      placeholder: "Password",
                      value: p,
                      onChange: (m) => g(m.target.value),
                    }),
                    v.jsx("span", {
                      className: "cursor-pointer",
                      onClick: () => t(!e),
                      children: e
                        ? v.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "14",
                            width: "15.75",
                            viewBox: "0 0 576 512",
                            children: v.jsx("path", {
                              d: "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z",
                            }),
                          })
                        : v.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "14",
                            width: "17.5",
                            viewBox: "0 0 640 512",
                            children: v.jsx("path", {
                              d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z",
                            }),
                          }),
                    }),
                  ],
                }),
                v.jsxs("label", {
                  className: "input input-bordered flex items-center gap-2",
                  ref: s,
                  children: [
                    v.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 16 16",
                      fill: "currentColor",
                      className: "h-4 w-4 opacity-70",
                      children: v.jsx("path", {
                        fillRule: "evenodd",
                        d: "M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z",
                        clipRule: "evenodd",
                      }),
                    }),
                    v.jsx("input", {
                      type: n ? "text" : "password",
                      placeholder: "Confirm Password",
                      className: "grow",
                      value: y,
                      onChange: (m) => k(m.target.value),
                    }),
                    v.jsx("span", {
                      onClick: () => r(!n),
                      className: "cursor-pointer",
                      children: n
                        ? v.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "14",
                            width: "15.75",
                            viewBox: "0 0 576 512",
                            children: v.jsx("path", {
                              d: "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z",
                            }),
                          })
                        : v.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "14",
                            width: "17.5",
                            viewBox: "0 0 640 512",
                            children: v.jsx("path", {
                              d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z",
                            }),
                          }),
                    }),
                  ],
                }),
                v.jsx("button", {
                  className: "btn max-w-sm",
                  type: "submit",
                  children: "Sign Up",
                }),
                v.jsx("p", {
                  className: "text-white text-center",
                  children: "Or",
                }),
                v.jsx(Ut, {
                  to: "/signin",
                  className: "btn text-black",
                  children: "Login",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  x0 = async (e, t, n, r, i, o) => {
    try {
      console.log("Trying to register user");
      const l = await fetch("/api/v1/user", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: e, email: t, password: n }),
      });
      if (!l.ok) {
        const { error: s } = await l.json();
        console.log(s), o(s), r && i();
        return;
      }
    } catch (l) {
      console.log(l);
    }
  },
  hu = async (e, t, n) => {
    try {
      const r = await fetch("/api/v1/user/signin", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: e, password: t, signedInWithGoogle: !0 }),
      });
      if (r.status === 401) {
        const { error: s } = await r.json();
        return console.log(s), r.status;
      }
      const { userInfo: i } = await r.json(),
        { userId: o, username: l } = i;
      return (
        n({ userId: o, username: l, isAuthentic: !0, signedInWithGoogle: !0 }),
        200
      );
    } catch (r) {
      console.log(r);
    }
  },
  S0 = () => {
    const [e, t] = x.useState(""),
      [n, r] = x.useState(""),
      [i, o] = x.useState(!1),
      [l, s] = x.useState(""),
      { loginWithPopup: a, isAuthenticated: u, user: d, logout: c } = As(),
      { user: p, setUser: g } = x.useContext(jr);
    let y = zs();
    x.useEffect(() => {
      (async () => {
        if (d && u) {
          const { given_name: f, email: m, sub: w } = d,
            C = w.split("|")[1];
          console.log(C);
          const j = await hu(m, C, g);
          if ((console.log(j), j === 401)) {
            if ((x0(f, m, C, !0, c, s), (await hu(m, C, g)) != 200))
              return console.log("Mehrbani ustad");
            y("/");
          }
          y("/");
        }
      })();
    }, [d, u]);
    const k = async () => {
        try {
          await a();
        } catch {}
      },
      S = async (h) => {
        if ((h.preventDefault(), !e || !n)) {
          s("Please fill all fields");
          return;
        }
        try {
          const f = await fetch("api/v1/user/signin", {
              method: "post",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: e,
                password: n,
                signedInWithGoogle: !1,
              }),
            }),
            m = await f.json();
          if (!f.ok) {
            s(m.error);
            return;
          }
          const { userInfo: w } = m;
          g({ ...p, userId: w.userId, username: w.username, isAuthentic: !0 }),
            y("/");
        } catch (f) {
          console.log("There Was an error ", f);
        }
      };
    return v.jsxs("section", {
      className: "section-center",
      children: [
        l && v.jsx(tr, { msg: l, category: "error", resetFunc: s }),
        v.jsxs("article", {
          className: "mt-8 mb-12 mx-auto",
          children: [
            v.jsx("h2", {
              className: "text-2xl font-bold text-center mb-8",
              children: "Login",
            }),
            v.jsxs("form", {
              onSubmit: S,
              className:
                "max-w-xs flex flex-col gap-4 bg-neutral py-12 px-6 rounded-md mx-auto",
              children: [
                v.jsxs("label", {
                  className: "input input-bordered flex items-center gap-2",
                  children: [
                    v.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 16 16",
                      fill: "currentColor",
                      className: "h-4 w-4 opacity-70",
                      children: [
                        v.jsx("path", {
                          d: "M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z",
                        }),
                        v.jsx("path", {
                          d: "M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z",
                        }),
                      ],
                    }),
                    v.jsx("input", {
                      type: "email",
                      className: "grow",
                      placeholder: "Email",
                      value: e,
                      onChange: (h) => t(h.currentTarget.value),
                    }),
                  ],
                }),
                v.jsxs("label", {
                  className: "input input-bordered flex items-center gap-2",
                  children: [
                    v.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 16 16",
                      fill: "currentColor",
                      className: "h-4 w-4 opacity-70",
                      children: v.jsx("path", {
                        fillRule: "evenodd",
                        d: "M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z",
                        clipRule: "evenodd",
                      }),
                    }),
                    v.jsx("input", {
                      type: i ? "text" : "password",
                      className: "grow",
                      value: n,
                      placeholder: "Password",
                      onChange: (h) => r(h.currentTarget.value),
                    }),
                    v.jsx("span", {
                      className: "cursor-pointer",
                      onClick: () => o(!i),
                      children: i
                        ? v.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "14",
                            width: "15.75",
                            viewBox: "0 0 576 512",
                            children: v.jsx("path", {
                              d: "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z",
                            }),
                          })
                        : v.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "14",
                            width: "17.5",
                            viewBox: "0 0 640 512",
                            children: v.jsx("path", {
                              d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z",
                            }),
                          }),
                    }),
                  ],
                }),
                v.jsx("button", {
                  type: "submit",
                  className: "btn",
                  children: "Login",
                }),
                v.jsx("p", {
                  className: "text-white text-center",
                  children: "Or",
                }),
                v.jsx(Ut, {
                  to: "/signup",
                  className: "btn",
                  children: "Create an Account",
                }),
                v.jsx("button", {
                  type: "button",
                  className: "btn",
                  onClick: k,
                  children: "Continue With Google",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  C0 = () => {
    Ln();
    const { user: e, setUser: t } = x.useContext(jr),
      [n, r] = x.useState(!1);
    return (
      x.useEffect(() => {
        (async () => {
          try {
            r(!0);
            const o = await fetch("/api/v1/user/validation", { method: "get" }),
              { user: l } = await o.json();
            if (!l) return console.log("User not Signed in from Prot Routes");
            const { userId: s, username: a } = l;
            t({
              userId: s,
              username: a,
              isAuthentic: !0,
              signedInWithGoogle: !1,
            }),
              r(!1);
          } catch (o) {
            console.log(o);
          }
        })();
      }, []),
      n
        ? v.jsx("h2", { children: "Loading..." })
        : e.isAuthentic
        ? v.jsx(dm, {})
        : v.jsx(cm, { to: "/signin" })
    );
  };
function _0() {
  As();
  const { isLoading: e } = y0();
  return (
    console.log(e),
    v.jsxs("main", {
      children: [
        v.jsx(n0, {}),
        v.jsx("div", {
          className: "",
          children: v.jsxs(pm, {
            children: [
              v.jsx(lt, { path: "/", element: v.jsx(g0, {}) }),
              v.jsx(lt, { path: "/signup", element: v.jsx(k0, {}) }),
              v.jsx(lt, { path: "/signin", element: v.jsx(S0, {}) }),
              v.jsx(lt, {
                path: "/testing",
                element: v.jsx("h2", { children: "Hey" }),
              }),
              v.jsx(lt, {
                element: v.jsx(C0, {}),
                children: v.jsx(lt, {
                  path: "/user/favourites",
                  element: v.jsx(w0, {}),
                }),
              }),
              v.jsx(lt, {
                path: "*",
                element: v.jsx("h2", { children: "Seriously?..." }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const E0 = { AUTH0_CLIENT_ID: "UIUSpN3idUWgZd5Qu1SLgBjz8XtGndxN" };
Uo.createRoot(document.getElementById("root")).render(
  v.jsx(Dl.StrictMode, {
    children: v.jsx(t0, {
      children: v.jsx(e0, {
        domain: "dev-dsjnlrq8ats8x8jw.us.auth0.com",
        clientId: E0.AUTH0_CLIENT_ID,
        authorizationParams: {
          redirect_uri: window.location.origin,
          connection: "google-oauth2",
        },
        children: v.jsx(km, { children: v.jsx(_0, {}) }),
      }),
    }),
  })
);
