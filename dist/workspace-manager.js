var u_ = Object.defineProperty;
var c_ = (e, t, n) => t in e ? u_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Sf = (e, t, n) => (c_(e, typeof t != "symbol" ? t + "" : t, n), n);
import { app as pn } from "/scripts/app.js";
function d_(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Kr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ll(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zS = { exports: {} }, od = {}, NS = { exports: {} }, ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ul = Symbol.for("react.element"), f_ = Symbol.for("react.portal"), p_ = Symbol.for("react.fragment"), h_ = Symbol.for("react.strict_mode"), m_ = Symbol.for("react.profiler"), v_ = Symbol.for("react.provider"), g_ = Symbol.for("react.context"), y_ = Symbol.for("react.forward_ref"), b_ = Symbol.for("react.suspense"), S_ = Symbol.for("react.memo"), x_ = Symbol.for("react.lazy"), h0 = Symbol.iterator;
function w_(e) {
  return e === null || typeof e != "object" ? null : (e = h0 && e[h0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var VS = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, BS = Object.assign, WS = {};
function wa(e, t, n) {
  this.props = e, this.context = t, this.refs = WS, this.updater = n || VS;
}
wa.prototype.isReactComponent = {};
wa.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
wa.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function HS() {
}
HS.prototype = wa.prototype;
function Rm(e, t, n) {
  this.props = e, this.context = t, this.refs = WS, this.updater = n || VS;
}
var $m = Rm.prototype = new HS();
$m.constructor = Rm;
BS($m, wa.prototype);
$m.isPureReactComponent = !0;
var m0 = Array.isArray, US = Object.prototype.hasOwnProperty, Am = { current: null }, GS = { key: !0, ref: !0, __self: !0, __source: !0 };
function KS(e, t, n) {
  var r, o = {}, i = null, a = null;
  if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      US.call(t, r) && !GS.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1)
    o.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++)
      l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in s = e.defaultProps, s)
      o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: ul, type: e, key: i, ref: a, props: o, _owner: Am.current };
}
function C_(e, t) {
  return { $$typeof: ul, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Dm(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ul;
}
function k_(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var v0 = /\/+/g;
function xf(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? k_("" + e.key) : t.toString(36);
}
function Cu(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null)
    a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ul:
          case f_:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = r === "" ? "." + xf(a, 0) : r, m0(o) ? (n = "", e != null && (n = e.replace(v0, "$&/") + "/"), Cu(o, t, n, "", function(u) {
      return u;
    })) : o != null && (Dm(o) && (o = C_(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(v0, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", m0(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + xf(i, s);
      a += Cu(i, t, n, l, o);
    }
  else if (l = w_(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = r + xf(i, s++), a += Cu(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Fl(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Cu(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function P_(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var Ot = { current: null }, ku = { transition: null }, E_ = { ReactCurrentDispatcher: Ot, ReactCurrentBatchConfig: ku, ReactCurrentOwner: Am };
ue.Children = { map: Fl, forEach: function(e, t, n) {
  Fl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Fl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Fl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Dm(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ue.Component = wa;
ue.Fragment = p_;
ue.Profiler = m_;
ue.PureComponent = Rm;
ue.StrictMode = h_;
ue.Suspense = b_;
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = E_;
ue.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = BS({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = Am.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      US.call(t, l) && !GS.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1)
    r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++)
      s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: ul, type: e.type, key: o, ref: i, props: r, _owner: a };
};
ue.createContext = function(e) {
  return e = { $$typeof: g_, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: v_, _context: e }, e.Consumer = e;
};
ue.createElement = KS;
ue.createFactory = function(e) {
  var t = KS.bind(null, e);
  return t.type = e, t;
};
ue.createRef = function() {
  return { current: null };
};
ue.forwardRef = function(e) {
  return { $$typeof: y_, render: e };
};
ue.isValidElement = Dm;
ue.lazy = function(e) {
  return { $$typeof: x_, _payload: { _status: -1, _result: e }, _init: P_ };
};
ue.memo = function(e, t) {
  return { $$typeof: S_, type: e, compare: t === void 0 ? null : t };
};
ue.startTransition = function(e) {
  var t = ku.transition;
  ku.transition = {};
  try {
    e();
  } finally {
    ku.transition = t;
  }
};
ue.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
ue.useCallback = function(e, t) {
  return Ot.current.useCallback(e, t);
};
ue.useContext = function(e) {
  return Ot.current.useContext(e);
};
ue.useDebugValue = function() {
};
ue.useDeferredValue = function(e) {
  return Ot.current.useDeferredValue(e);
};
ue.useEffect = function(e, t) {
  return Ot.current.useEffect(e, t);
};
ue.useId = function() {
  return Ot.current.useId();
};
ue.useImperativeHandle = function(e, t, n) {
  return Ot.current.useImperativeHandle(e, t, n);
};
ue.useInsertionEffect = function(e, t) {
  return Ot.current.useInsertionEffect(e, t);
};
ue.useLayoutEffect = function(e, t) {
  return Ot.current.useLayoutEffect(e, t);
};
ue.useMemo = function(e, t) {
  return Ot.current.useMemo(e, t);
};
ue.useReducer = function(e, t, n) {
  return Ot.current.useReducer(e, t, n);
};
ue.useRef = function(e) {
  return Ot.current.useRef(e);
};
ue.useState = function(e) {
  return Ot.current.useState(e);
};
ue.useSyncExternalStore = function(e, t, n) {
  return Ot.current.useSyncExternalStore(e, t, n);
};
ue.useTransition = function() {
  return Ot.current.useTransition();
};
ue.version = "18.2.0";
NS.exports = ue;
var v = NS.exports;
const re = /* @__PURE__ */ ll(v), g0 = /* @__PURE__ */ d_({
  __proto__: null,
  default: re
}, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var T_ = v, __ = Symbol.for("react.element"), O_ = Symbol.for("react.fragment"), M_ = Object.prototype.hasOwnProperty, I_ = T_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R_ = { key: !0, ref: !0, __self: !0, __source: !0 };
function YS(e, t, n) {
  var r, o = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    M_.call(t, r) && !R_.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: __, type: e, key: i, ref: a, props: o, _owner: I_.current };
}
od.Fragment = O_;
od.jsx = YS;
od.jsxs = YS;
zS.exports = od;
var w = zS.exports, Hp = {}, qS = { exports: {} }, tn = {}, XS = { exports: {} }, QS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(A, j) {
    var U = A.length;
    A.push(j);
    e:
      for (; 0 < U; ) {
        var V = U - 1 >>> 1, Y = A[V];
        if (0 < o(Y, j))
          A[V] = j, A[U] = Y, U = V;
        else
          break e;
      }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0)
      return null;
    var j = A[0], U = A.pop();
    if (U !== j) {
      A[0] = U;
      e:
        for (var V = 0, Y = A.length, z = Y >>> 1; V < z; ) {
          var te = 2 * (V + 1) - 1, le = A[te], ae = te + 1, se = A[ae];
          if (0 > o(le, U))
            ae < Y && 0 > o(se, le) ? (A[V] = se, A[ae] = U, V = ae) : (A[V] = le, A[te] = U, V = te);
          else if (ae < Y && 0 > o(se, U))
            A[V] = se, A[ae] = U, V = ae;
          else
            break e;
        }
    }
    return j;
  }
  function o(A, j) {
    var U = A.sortIndex - j.sortIndex;
    return U !== 0 ? U : A.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var a = Date, s = a.now();
    e.unstable_now = function() {
      return a.now() - s;
    };
  }
  var l = [], u = [], c = 1, d = null, f = 3, p = !1, g = !1, y = !1, S = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function b(A) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null)
        r(u);
      else if (j.startTime <= A)
        r(u), j.sortIndex = j.expirationTime, t(l, j);
      else
        break;
      j = n(u);
    }
  }
  function x(A) {
    if (y = !1, b(A), !g)
      if (n(l) !== null)
        g = !0, K(k);
      else {
        var j = n(u);
        j !== null && $(x, j.startTime - A);
      }
  }
  function k(A, j) {
    g = !1, y && (y = !1, h(T), T = -1), p = !0;
    var U = f;
    try {
      for (b(j), d = n(l); d !== null && (!(d.expirationTime > j) || A && !D()); ) {
        var V = d.callback;
        if (typeof V == "function") {
          d.callback = null, f = d.priorityLevel;
          var Y = V(d.expirationTime <= j);
          j = e.unstable_now(), typeof Y == "function" ? d.callback = Y : d === n(l) && r(l), b(j);
        } else
          r(l);
        d = n(l);
      }
      if (d !== null)
        var z = !0;
      else {
        var te = n(u);
        te !== null && $(x, te.startTime - j), z = !1;
      }
      return z;
    } finally {
      d = null, f = U, p = !1;
    }
  }
  var P = !1, E = null, T = -1, M = 5, I = -1;
  function D() {
    return !(e.unstable_now() - I < M);
  }
  function G() {
    if (E !== null) {
      var A = e.unstable_now();
      I = A;
      var j = !0;
      try {
        j = E(!0, A);
      } finally {
        j ? H() : (P = !1, E = null);
      }
    } else
      P = !1;
  }
  var H;
  if (typeof m == "function")
    H = function() {
      m(G);
    };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(), W = L.port2;
    L.port1.onmessage = G, H = function() {
      W.postMessage(null);
    };
  } else
    H = function() {
      S(G, 0);
    };
  function K(A) {
    E = A, P || (P = !0, H());
  }
  function $(A, j) {
    T = S(function() {
      A(e.unstable_now());
    }, j);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(A) {
    A.callback = null;
  }, e.unstable_continueExecution = function() {
    g || p || (g = !0, K(k));
  }, e.unstable_forceFrameRate = function(A) {
    0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < A ? Math.floor(1e3 / A) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(A) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var j = 3;
        break;
      default:
        j = f;
    }
    var U = f;
    f = j;
    try {
      return A();
    } finally {
      f = U;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(A, j) {
    switch (A) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        A = 3;
    }
    var U = f;
    f = A;
    try {
      return j();
    } finally {
      f = U;
    }
  }, e.unstable_scheduleCallback = function(A, j, U) {
    var V = e.unstable_now();
    switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? V + U : V) : U = V, A) {
      case 1:
        var Y = -1;
        break;
      case 2:
        Y = 250;
        break;
      case 5:
        Y = 1073741823;
        break;
      case 4:
        Y = 1e4;
        break;
      default:
        Y = 5e3;
    }
    return Y = U + Y, A = { id: c++, callback: j, priorityLevel: A, startTime: U, expirationTime: Y, sortIndex: -1 }, U > V ? (A.sortIndex = U, t(u, A), n(l) === null && A === n(u) && (y ? (h(T), T = -1) : y = !0, $(x, U - V))) : (A.sortIndex = Y, t(l, A), g || p || (g = !0, K(k))), A;
  }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function(A) {
    var j = f;
    return function() {
      var U = f;
      f = j;
      try {
        return A.apply(this, arguments);
      } finally {
        f = U;
      }
    };
  };
})(QS);
XS.exports = QS;
var $_ = XS.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZS = v, Zt = $_;
function F(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var JS = /* @__PURE__ */ new Set(), Ms = {};
function Qo(e, t) {
  ta(e, t), ta(e + "Capture", t);
}
function ta(e, t) {
  for (Ms[e] = t, e = 0; e < t.length; e++)
    JS.add(t[e]);
}
var wr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Up = Object.prototype.hasOwnProperty, A_ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y0 = {}, b0 = {};
function D_(e) {
  return Up.call(b0, e) ? !0 : Up.call(y0, e) ? !1 : A_.test(e) ? b0[e] = !0 : (y0[e] = !0, !1);
}
function F_(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function L_(e, t, n, r) {
  if (t === null || typeof t > "u" || F_(e, t, n, r))
    return !0;
  if (r)
    return !1;
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
function Mt(e, t, n, r, o, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var ht = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ht[e] = new Mt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ht[t] = new Mt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ht[e] = new Mt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ht[e] = new Mt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ht[e] = new Mt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ht[e] = new Mt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ht[e] = new Mt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ht[e] = new Mt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ht[e] = new Mt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Fm = /[\-:]([a-z])/g;
function Lm(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Fm,
    Lm
  );
  ht[t] = new Mt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Fm, Lm);
  ht[t] = new Mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Fm, Lm);
  ht[t] = new Mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ht[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ht.xlinkHref = new Mt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ht[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function jm(e, t, n, r) {
  var o = ht.hasOwnProperty(t) ? ht[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (L_(t, n, o, r) && (n = null), r || o === null ? D_(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Or = ZS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ll = Symbol.for("react.element"), mi = Symbol.for("react.portal"), vi = Symbol.for("react.fragment"), zm = Symbol.for("react.strict_mode"), Gp = Symbol.for("react.profiler"), ex = Symbol.for("react.provider"), tx = Symbol.for("react.context"), Nm = Symbol.for("react.forward_ref"), Kp = Symbol.for("react.suspense"), Yp = Symbol.for("react.suspense_list"), Vm = Symbol.for("react.memo"), Nr = Symbol.for("react.lazy"), nx = Symbol.for("react.offscreen"), S0 = Symbol.iterator;
function $a(e) {
  return e === null || typeof e != "object" ? null : (e = S0 && e[S0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ve = Object.assign, wf;
function qa(e) {
  if (wf === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      wf = t && t[1] || "";
    }
  return `
` + wf + e;
}
var Cf = !1;
function kf(e, t) {
  if (!e || Cf)
    return "";
  Cf = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
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
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), a = o.length - 1, s = i.length - 1; 1 <= a && 0 <= s && o[a] !== i[s]; )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if (a--, s--, 0 > s || o[a] !== i[s]) {
                var l = `
` + o[a].replace(" at new ", " at ");
                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    Cf = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? qa(e) : "";
}
function j_(e) {
  switch (e.tag) {
    case 5:
      return qa(e.type);
    case 16:
      return qa("Lazy");
    case 13:
      return qa("Suspense");
    case 19:
      return qa("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = kf(e.type, !1), e;
    case 11:
      return e = kf(e.type.render, !1), e;
    case 1:
      return e = kf(e.type, !0), e;
    default:
      return "";
  }
}
function qp(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case vi:
      return "Fragment";
    case mi:
      return "Portal";
    case Gp:
      return "Profiler";
    case zm:
      return "StrictMode";
    case Kp:
      return "Suspense";
    case Yp:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case tx:
        return (e.displayName || "Context") + ".Consumer";
      case ex:
        return (e._context.displayName || "Context") + ".Provider";
      case Nm:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Vm:
        return t = e.displayName || null, t !== null ? t : qp(e.type) || "Memo";
      case Nr:
        t = e._payload, e = e._init;
        try {
          return qp(e(t));
        } catch {
        }
    }
  return null;
}
function z_(e) {
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
      return qp(t);
    case 8:
      return t === zm ? "StrictMode" : "Mode";
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
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function so(e) {
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
function rx(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function N_(e) {
  var t = rx(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(a) {
      r = "" + a, i.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(a) {
      r = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function jl(e) {
  e._valueTracker || (e._valueTracker = N_(e));
}
function ox(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = rx(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function nc(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xp(e, t) {
  var n = t.checked;
  return Ve({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function x0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = so(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ix(e, t) {
  t = t.checked, t != null && jm(e, "checked", t, !1);
}
function Qp(e, t) {
  ix(e, t);
  var n = so(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Zp(e, t.type, n) : t.hasOwnProperty("defaultValue") && Zp(e, t.type, so(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function w0(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Zp(e, t, n) {
  (t !== "number" || nc(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xa = Array.isArray;
function Vi(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + so(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Jp(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(F(91));
  return Ve({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function C0(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(F(92));
      if (Xa(n)) {
        if (1 < n.length)
          throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: so(n) };
}
function ax(e, t) {
  var n = so(t.value), r = so(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function k0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function sx(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function eh(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? sx(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var zl, lx = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (zl = zl || document.createElement("div"), zl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = zl.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Is(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ss = {
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
  strokeWidth: !0
}, V_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(ss).forEach(function(e) {
  V_.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ss[t] = ss[e];
  });
});
function ux(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ss.hasOwnProperty(e) && ss[e] ? ("" + t).trim() : t + "px";
}
function cx(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = ux(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var B_ = Ve({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function th(e, t) {
  if (t) {
    if (B_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(F(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(F(62));
  }
}
function nh(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
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
var rh = null;
function Bm(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var oh = null, Bi = null, Wi = null;
function P0(e) {
  if (e = fl(e)) {
    if (typeof oh != "function")
      throw Error(F(280));
    var t = e.stateNode;
    t && (t = ud(t), oh(e.stateNode, e.type, t));
  }
}
function dx(e) {
  Bi ? Wi ? Wi.push(e) : Wi = [e] : Bi = e;
}
function fx() {
  if (Bi) {
    var e = Bi, t = Wi;
    if (Wi = Bi = null, P0(e), t)
      for (e = 0; e < t.length; e++)
        P0(t[e]);
  }
}
function px(e, t) {
  return e(t);
}
function hx() {
}
var Pf = !1;
function mx(e, t, n) {
  if (Pf)
    return e(t, n);
  Pf = !0;
  try {
    return px(e, t, n);
  } finally {
    Pf = !1, (Bi !== null || Wi !== null) && (hx(), fx());
  }
}
function Rs(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = ud(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
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
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(F(231, t, typeof n));
  return n;
}
var ih = !1;
if (wr)
  try {
    var Aa = {};
    Object.defineProperty(Aa, "passive", { get: function() {
      ih = !0;
    } }), window.addEventListener("test", Aa, Aa), window.removeEventListener("test", Aa, Aa);
  } catch {
    ih = !1;
  }
function W_(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ls = !1, rc = null, oc = !1, ah = null, H_ = { onError: function(e) {
  ls = !0, rc = e;
} };
function U_(e, t, n, r, o, i, a, s, l) {
  ls = !1, rc = null, W_.apply(H_, arguments);
}
function G_(e, t, n, r, o, i, a, s, l) {
  if (U_.apply(this, arguments), ls) {
    if (ls) {
      var u = rc;
      ls = !1, rc = null;
    } else
      throw Error(F(198));
    oc || (oc = !0, ah = u);
  }
}
function Zo(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function vx(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function E0(e) {
  if (Zo(e) !== e)
    throw Error(F(188));
}
function K_(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Zo(e), t === null)
      throw Error(F(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null)
      break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n)
          return E0(o), e;
        if (i === r)
          return E0(o), t;
        i = i.sibling;
      }
      throw Error(F(188));
    }
    if (n.return !== r.return)
      n = o, r = i;
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          a = !0, n = o, r = i;
          break;
        }
        if (s === r) {
          a = !0, r = o, n = i;
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            a = !0, n = i, r = o;
            break;
          }
          if (s === r) {
            a = !0, r = i, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!a)
          throw Error(F(189));
      }
    }
    if (n.alternate !== r)
      throw Error(F(190));
  }
  if (n.tag !== 3)
    throw Error(F(188));
  return n.stateNode.current === n ? e : t;
}
function gx(e) {
  return e = K_(e), e !== null ? yx(e) : null;
}
function yx(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = yx(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var bx = Zt.unstable_scheduleCallback, T0 = Zt.unstable_cancelCallback, Y_ = Zt.unstable_shouldYield, q_ = Zt.unstable_requestPaint, Ke = Zt.unstable_now, X_ = Zt.unstable_getCurrentPriorityLevel, Wm = Zt.unstable_ImmediatePriority, Sx = Zt.unstable_UserBlockingPriority, ic = Zt.unstable_NormalPriority, Q_ = Zt.unstable_LowPriority, xx = Zt.unstable_IdlePriority, id = null, Qn = null;
function Z_(e) {
  if (Qn && typeof Qn.onCommitFiberRoot == "function")
    try {
      Qn.onCommitFiberRoot(id, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var An = Math.clz32 ? Math.clz32 : tO, J_ = Math.log, eO = Math.LN2;
function tO(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (J_(e) / eO | 0) | 0;
}
var Nl = 64, Vl = 4194304;
function Qa(e) {
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
function ac(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? r = Qa(s) : (i &= a, i !== 0 && (r = Qa(i)));
  } else
    a = n & ~o, a !== 0 ? r = Qa(a) : i !== 0 && (r = Qa(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - An(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function nO(e, t) {
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
function rO(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - An(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & n) || s & r) && (o[a] = nO(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function sh(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function wx() {
  var e = Nl;
  return Nl <<= 1, !(Nl & 4194240) && (Nl = 64), e;
}
function Ef(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function cl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - An(t), e[t] = n;
}
function oO(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - An(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Hm(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - An(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var we = 0;
function Cx(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var kx, Um, Px, Ex, Tx, lh = !1, Bl = [], Xr = null, Qr = null, Zr = null, $s = /* @__PURE__ */ new Map(), As = /* @__PURE__ */ new Map(), Wr = [], iO = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function _0(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xr = null;
      break;
    case "dragenter":
    case "dragleave":
      Qr = null;
      break;
    case "mouseover":
    case "mouseout":
      Zr = null;
      break;
    case "pointerover":
    case "pointerout":
      $s.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      As.delete(t.pointerId);
  }
}
function Da(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = fl(t), t !== null && Um(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function aO(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Xr = Da(Xr, e, t, n, r, o), !0;
    case "dragenter":
      return Qr = Da(Qr, e, t, n, r, o), !0;
    case "mouseover":
      return Zr = Da(Zr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return $s.set(i, Da($s.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, As.set(i, Da(As.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function _x(e) {
  var t = Io(e.target);
  if (t !== null) {
    var n = Zo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = vx(n), t !== null) {
          e.blockedOn = t, Tx(e.priority, function() {
            Px(n);
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
function Pu(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = uh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      rh = r, n.target.dispatchEvent(r), rh = null;
    } else
      return t = fl(n), t !== null && Um(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function O0(e, t, n) {
  Pu(e) && n.delete(t);
}
function sO() {
  lh = !1, Xr !== null && Pu(Xr) && (Xr = null), Qr !== null && Pu(Qr) && (Qr = null), Zr !== null && Pu(Zr) && (Zr = null), $s.forEach(O0), As.forEach(O0);
}
function Fa(e, t) {
  e.blockedOn === t && (e.blockedOn = null, lh || (lh = !0, Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority, sO)));
}
function Ds(e) {
  function t(o) {
    return Fa(o, e);
  }
  if (0 < Bl.length) {
    Fa(Bl[0], e);
    for (var n = 1; n < Bl.length; n++) {
      var r = Bl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Xr !== null && Fa(Xr, e), Qr !== null && Fa(Qr, e), Zr !== null && Fa(Zr, e), $s.forEach(t), As.forEach(t), n = 0; n < Wr.length; n++)
    r = Wr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Wr.length && (n = Wr[0], n.blockedOn === null); )
    _x(n), n.blockedOn === null && Wr.shift();
}
var Hi = Or.ReactCurrentBatchConfig, sc = !0;
function lO(e, t, n, r) {
  var o = we, i = Hi.transition;
  Hi.transition = null;
  try {
    we = 1, Gm(e, t, n, r);
  } finally {
    we = o, Hi.transition = i;
  }
}
function uO(e, t, n, r) {
  var o = we, i = Hi.transition;
  Hi.transition = null;
  try {
    we = 4, Gm(e, t, n, r);
  } finally {
    we = o, Hi.transition = i;
  }
}
function Gm(e, t, n, r) {
  if (sc) {
    var o = uh(e, t, n, r);
    if (o === null)
      Ff(e, t, r, lc, n), _0(e, r);
    else if (aO(o, e, t, n, r))
      r.stopPropagation();
    else if (_0(e, r), t & 4 && -1 < iO.indexOf(e)) {
      for (; o !== null; ) {
        var i = fl(o);
        if (i !== null && kx(i), i = uh(e, t, n, r), i === null && Ff(e, t, r, lc, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Ff(e, t, r, null, n);
  }
}
var lc = null;
function uh(e, t, n, r) {
  if (lc = null, e = Bm(r), e = Io(e), e !== null)
    if (t = Zo(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = vx(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return lc = e, null;
}
function Ox(e) {
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
      switch (X_()) {
        case Wm:
          return 1;
        case Sx:
          return 4;
        case ic:
        case Q_:
          return 16;
        case xx:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yr = null, Km = null, Eu = null;
function Mx() {
  if (Eu)
    return Eu;
  var e, t = Km, n = t.length, r, o = "value" in Yr ? Yr.value : Yr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++)
    ;
  return Eu = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Tu(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Wl() {
  return !0;
}
function M0() {
  return !1;
}
function nn(e) {
  function t(n, r, o, i, a) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Wl : M0, this.isPropagationStopped = M0, this;
  }
  return Ve(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Wl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Wl);
  }, persist: function() {
  }, isPersistent: Wl }), t;
}
var Ca = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ym = nn(Ca), dl = Ve({}, Ca, { view: 0, detail: 0 }), cO = nn(dl), Tf, _f, La, ad = Ve({}, dl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: qm, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== La && (La && e.type === "mousemove" ? (Tf = e.screenX - La.screenX, _f = e.screenY - La.screenY) : _f = Tf = 0, La = e), Tf);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : _f;
} }), I0 = nn(ad), dO = Ve({}, ad, { dataTransfer: 0 }), fO = nn(dO), pO = Ve({}, dl, { relatedTarget: 0 }), Of = nn(pO), hO = Ve({}, Ca, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), mO = nn(hO), vO = Ve({}, Ca, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), gO = nn(vO), yO = Ve({}, Ca, { data: 0 }), R0 = nn(yO), bO = {
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
}, SO = {
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
}, xO = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function wO(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = xO[e]) ? !!t[e] : !1;
}
function qm() {
  return wO;
}
var CO = Ve({}, dl, { key: function(e) {
  if (e.key) {
    var t = bO[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Tu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? SO[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: qm, charCode: function(e) {
  return e.type === "keypress" ? Tu(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Tu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), kO = nn(CO), PO = Ve({}, ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), $0 = nn(PO), EO = Ve({}, dl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: qm }), TO = nn(EO), _O = Ve({}, Ca, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), OO = nn(_O), MO = Ve({}, ad, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), IO = nn(MO), RO = [9, 13, 27, 32], Xm = wr && "CompositionEvent" in window, us = null;
wr && "documentMode" in document && (us = document.documentMode);
var $O = wr && "TextEvent" in window && !us, Ix = wr && (!Xm || us && 8 < us && 11 >= us), A0 = " ", D0 = !1;
function Rx(e, t) {
  switch (e) {
    case "keyup":
      return RO.indexOf(t.keyCode) !== -1;
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
function $x(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var gi = !1;
function AO(e, t) {
  switch (e) {
    case "compositionend":
      return $x(t);
    case "keypress":
      return t.which !== 32 ? null : (D0 = !0, A0);
    case "textInput":
      return e = t.data, e === A0 && D0 ? null : e;
    default:
      return null;
  }
}
function DO(e, t) {
  if (gi)
    return e === "compositionend" || !Xm && Rx(e, t) ? (e = Mx(), Eu = Km = Yr = null, gi = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ix && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var FO = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function F0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!FO[e.type] : t === "textarea";
}
function Ax(e, t, n, r) {
  dx(r), t = uc(t, "onChange"), 0 < t.length && (n = new Ym("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var cs = null, Fs = null;
function LO(e) {
  Ux(e, 0);
}
function sd(e) {
  var t = Si(e);
  if (ox(t))
    return e;
}
function jO(e, t) {
  if (e === "change")
    return t;
}
var Dx = !1;
if (wr) {
  var Mf;
  if (wr) {
    var If = "oninput" in document;
    if (!If) {
      var L0 = document.createElement("div");
      L0.setAttribute("oninput", "return;"), If = typeof L0.oninput == "function";
    }
    Mf = If;
  } else
    Mf = !1;
  Dx = Mf && (!document.documentMode || 9 < document.documentMode);
}
function j0() {
  cs && (cs.detachEvent("onpropertychange", Fx), Fs = cs = null);
}
function Fx(e) {
  if (e.propertyName === "value" && sd(Fs)) {
    var t = [];
    Ax(t, Fs, e, Bm(e)), mx(LO, t);
  }
}
function zO(e, t, n) {
  e === "focusin" ? (j0(), cs = t, Fs = n, cs.attachEvent("onpropertychange", Fx)) : e === "focusout" && j0();
}
function NO(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return sd(Fs);
}
function VO(e, t) {
  if (e === "click")
    return sd(t);
}
function BO(e, t) {
  if (e === "input" || e === "change")
    return sd(t);
}
function WO(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ln = typeof Object.is == "function" ? Object.is : WO;
function Ls(e, t) {
  if (Ln(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Up.call(t, o) || !Ln(e[o], t[o]))
      return !1;
  }
  return !0;
}
function z0(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function N0(e, t) {
  var n = z0(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
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
    n = z0(n);
  }
}
function Lx(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Lx(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function jx() {
  for (var e = window, t = nc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = nc(e.document);
  }
  return t;
}
function Qm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function HO(e) {
  var t = jx(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Lx(n.ownerDocument.documentElement, n)) {
    if (r !== null && Qm(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = N0(n, i);
        var a = N0(
          n,
          r
        );
        o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var UO = wr && "documentMode" in document && 11 >= document.documentMode, yi = null, ch = null, ds = null, dh = !1;
function V0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  dh || yi == null || yi !== nc(r) || (r = yi, "selectionStart" in r && Qm(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ds && Ls(ds, r) || (ds = r, r = uc(ch, "onSelect"), 0 < r.length && (t = new Ym("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = yi)));
}
function Hl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var bi = { animationend: Hl("Animation", "AnimationEnd"), animationiteration: Hl("Animation", "AnimationIteration"), animationstart: Hl("Animation", "AnimationStart"), transitionend: Hl("Transition", "TransitionEnd") }, Rf = {}, zx = {};
wr && (zx = document.createElement("div").style, "AnimationEvent" in window || (delete bi.animationend.animation, delete bi.animationiteration.animation, delete bi.animationstart.animation), "TransitionEvent" in window || delete bi.transitionend.transition);
function ld(e) {
  if (Rf[e])
    return Rf[e];
  if (!bi[e])
    return e;
  var t = bi[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in zx)
      return Rf[e] = t[n];
  return e;
}
var Nx = ld("animationend"), Vx = ld("animationiteration"), Bx = ld("animationstart"), Wx = ld("transitionend"), Hx = /* @__PURE__ */ new Map(), B0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function fo(e, t) {
  Hx.set(e, t), Qo(t, [e]);
}
for (var $f = 0; $f < B0.length; $f++) {
  var Af = B0[$f], GO = Af.toLowerCase(), KO = Af[0].toUpperCase() + Af.slice(1);
  fo(GO, "on" + KO);
}
fo(Nx, "onAnimationEnd");
fo(Vx, "onAnimationIteration");
fo(Bx, "onAnimationStart");
fo("dblclick", "onDoubleClick");
fo("focusin", "onFocus");
fo("focusout", "onBlur");
fo(Wx, "onTransitionEnd");
ta("onMouseEnter", ["mouseout", "mouseover"]);
ta("onMouseLeave", ["mouseout", "mouseover"]);
ta("onPointerEnter", ["pointerout", "pointerover"]);
ta("onPointerLeave", ["pointerout", "pointerover"]);
Qo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Qo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Qo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Qo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Qo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Za = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), YO = new Set("cancel close invalid load scroll toggle".split(" ").concat(Za));
function W0(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, G_(r, t, void 0, e), e.currentTarget = null;
}
function Ux(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a], l = s.instance, u = s.currentTarget;
          if (s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          W0(o, s, u), i = l;
        }
      else
        for (a = 0; a < r.length; a++) {
          if (s = r[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          W0(o, s, u), i = l;
        }
    }
  }
  if (oc)
    throw e = ah, oc = !1, ah = null, e;
}
function Ie(e, t) {
  var n = t[vh];
  n === void 0 && (n = t[vh] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Gx(t, e, 2, !1), n.add(r));
}
function Df(e, t, n) {
  var r = 0;
  t && (r |= 4), Gx(n, e, r, t);
}
var Ul = "_reactListening" + Math.random().toString(36).slice(2);
function js(e) {
  if (!e[Ul]) {
    e[Ul] = !0, JS.forEach(function(n) {
      n !== "selectionchange" && (YO.has(n) || Df(n, !1, e), Df(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ul] || (t[Ul] = !0, Df("selectionchange", !1, t));
  }
}
function Gx(e, t, n, r) {
  switch (Ox(t)) {
    case 1:
      var o = lO;
      break;
    case 4:
      o = uO;
      break;
    default:
      o = Gm;
  }
  n = o.bind(null, t, n, e), o = void 0, !ih || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Ff(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var a = r.tag;
        if (a === 3 || a === 4) {
          var s = r.stateNode.containerInfo;
          if (s === o || s.nodeType === 8 && s.parentNode === o)
            break;
          if (a === 4)
            for (a = r.return; a !== null; ) {
              var l = a.tag;
              if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o))
                return;
              a = a.return;
            }
          for (; s !== null; ) {
            if (a = Io(s), a === null)
              return;
            if (l = a.tag, l === 5 || l === 6) {
              r = i = a;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
  mx(function() {
    var u = i, c = Bm(n), d = [];
    e: {
      var f = Hx.get(e);
      if (f !== void 0) {
        var p = Ym, g = e;
        switch (e) {
          case "keypress":
            if (Tu(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = kO;
            break;
          case "focusin":
            g = "focus", p = Of;
            break;
          case "focusout":
            g = "blur", p = Of;
            break;
          case "beforeblur":
          case "afterblur":
            p = Of;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = I0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = fO;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = TO;
            break;
          case Nx:
          case Vx:
          case Bx:
            p = mO;
            break;
          case Wx:
            p = OO;
            break;
          case "scroll":
            p = cO;
            break;
          case "wheel":
            p = IO;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = gO;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = $0;
        }
        var y = (t & 4) !== 0, S = !y && e === "scroll", h = y ? f !== null ? f + "Capture" : null : f;
        y = [];
        for (var m = u, b; m !== null; ) {
          b = m;
          var x = b.stateNode;
          if (b.tag === 5 && x !== null && (b = x, h !== null && (x = Rs(m, h), x != null && y.push(zs(m, x, b)))), S)
            break;
          m = m.return;
        }
        0 < y.length && (f = new p(f, g, null, n, c), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && n !== rh && (g = n.relatedTarget || n.fromElement) && (Io(g) || g[Cr]))
          break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (g = n.relatedTarget || n.toElement, p = u, g = g ? Io(g) : null, g !== null && (S = Zo(g), g !== S || g.tag !== 5 && g.tag !== 6) && (g = null)) : (p = null, g = u), p !== g)) {
          if (y = I0, x = "onMouseLeave", h = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (y = $0, x = "onPointerLeave", h = "onPointerEnter", m = "pointer"), S = p == null ? f : Si(p), b = g == null ? f : Si(g), f = new y(x, m + "leave", p, n, c), f.target = S, f.relatedTarget = b, x = null, Io(c) === u && (y = new y(h, m + "enter", g, n, c), y.target = b, y.relatedTarget = S, x = y), S = x, p && g)
            t: {
              for (y = p, h = g, m = 0, b = y; b; b = si(b))
                m++;
              for (b = 0, x = h; x; x = si(x))
                b++;
              for (; 0 < m - b; )
                y = si(y), m--;
              for (; 0 < b - m; )
                h = si(h), b--;
              for (; m--; ) {
                if (y === h || h !== null && y === h.alternate)
                  break t;
                y = si(y), h = si(h);
              }
              y = null;
            }
          else
            y = null;
          p !== null && H0(d, f, p, y, !1), g !== null && S !== null && H0(d, S, g, y, !0);
        }
      }
      e: {
        if (f = u ? Si(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var k = jO;
        else if (F0(f))
          if (Dx)
            k = BO;
          else {
            k = NO;
            var P = zO;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = VO);
        if (k && (k = k(e, u))) {
          Ax(d, k, n, c);
          break e;
        }
        P && P(e, f, u), e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && Zp(f, "number", f.value);
      }
      switch (P = u ? Si(u) : window, e) {
        case "focusin":
          (F0(P) || P.contentEditable === "true") && (yi = P, ch = u, ds = null);
          break;
        case "focusout":
          ds = ch = yi = null;
          break;
        case "mousedown":
          dh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          dh = !1, V0(d, n, c);
          break;
        case "selectionchange":
          if (UO)
            break;
        case "keydown":
        case "keyup":
          V0(d, n, c);
      }
      var E;
      if (Xm)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        gi ? Rx(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Ix && n.locale !== "ko" && (gi || T !== "onCompositionStart" ? T === "onCompositionEnd" && gi && (E = Mx()) : (Yr = c, Km = "value" in Yr ? Yr.value : Yr.textContent, gi = !0)), P = uc(u, T), 0 < P.length && (T = new R0(T, e, null, n, c), d.push({ event: T, listeners: P }), E ? T.data = E : (E = $x(n), E !== null && (T.data = E)))), (E = $O ? AO(e, n) : DO(e, n)) && (u = uc(u, "onBeforeInput"), 0 < u.length && (c = new R0("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = E));
    }
    Ux(d, t);
  });
}
function zs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function uc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Rs(e, n), i != null && r.unshift(zs(e, i, o)), i = Rs(e, t), i != null && r.push(zs(e, i, o))), e = e.return;
  }
  return r;
}
function si(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function H0(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n, l = s.alternate, u = s.stateNode;
    if (l !== null && l === r)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = Rs(n, i), l != null && a.unshift(zs(n, l, s))) : o || (l = Rs(n, i), l != null && a.push(zs(n, l, s)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var qO = /\r\n?/g, XO = /\u0000|\uFFFD/g;
function U0(e) {
  return (typeof e == "string" ? e : "" + e).replace(qO, `
`).replace(XO, "");
}
function Gl(e, t, n) {
  if (t = U0(t), U0(e) !== t && n)
    throw Error(F(425));
}
function cc() {
}
var fh = null, ph = null;
function hh(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var mh = typeof setTimeout == "function" ? setTimeout : void 0, QO = typeof clearTimeout == "function" ? clearTimeout : void 0, G0 = typeof Promise == "function" ? Promise : void 0, ZO = typeof queueMicrotask == "function" ? queueMicrotask : typeof G0 < "u" ? function(e) {
  return G0.resolve(null).then(e).catch(JO);
} : mh;
function JO(e) {
  setTimeout(function() {
    throw e;
  });
}
function Lf(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Ds(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Ds(t);
}
function Jr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function K0(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ka = Math.random().toString(36).slice(2), Yn = "__reactFiber$" + ka, Ns = "__reactProps$" + ka, Cr = "__reactContainer$" + ka, vh = "__reactEvents$" + ka, eM = "__reactListeners$" + ka, tM = "__reactHandles$" + ka;
function Io(e) {
  var t = e[Yn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Cr] || n[Yn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = K0(e); e !== null; ) {
          if (n = e[Yn])
            return n;
          e = K0(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function fl(e) {
  return e = e[Yn] || e[Cr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Si(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(F(33));
}
function ud(e) {
  return e[Ns] || null;
}
var gh = [], xi = -1;
function po(e) {
  return { current: e };
}
function $e(e) {
  0 > xi || (e.current = gh[xi], gh[xi] = null, xi--);
}
function Te(e, t) {
  xi++, gh[xi] = e.current, e.current = t;
}
var lo = {}, Ct = po(lo), Dt = po(!1), Wo = lo;
function na(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return lo;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ft(e) {
  return e = e.childContextTypes, e != null;
}
function dc() {
  $e(Dt), $e(Ct);
}
function Y0(e, t, n) {
  if (Ct.current !== lo)
    throw Error(F(168));
  Te(Ct, t), Te(Dt, n);
}
function Kx(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(F(108, z_(e) || "Unknown", o));
  return Ve({}, n, r);
}
function fc(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || lo, Wo = Ct.current, Te(Ct, e), Te(Dt, Dt.current), !0;
}
function q0(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(F(169));
  n ? (e = Kx(e, t, Wo), r.__reactInternalMemoizedMergedChildContext = e, $e(Dt), $e(Ct), Te(Ct, e)) : $e(Dt), Te(Dt, n);
}
var ur = null, cd = !1, jf = !1;
function Yx(e) {
  ur === null ? ur = [e] : ur.push(e);
}
function nM(e) {
  cd = !0, Yx(e);
}
function ho() {
  if (!jf && ur !== null) {
    jf = !0;
    var e = 0, t = we;
    try {
      var n = ur;
      for (we = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ur = null, cd = !1;
    } catch (o) {
      throw ur !== null && (ur = ur.slice(e + 1)), bx(Wm, ho), o;
    } finally {
      we = t, jf = !1;
    }
  }
  return null;
}
var wi = [], Ci = 0, pc = null, hc = 0, hn = [], mn = 0, Ho = null, fr = 1, pr = "";
function Co(e, t) {
  wi[Ci++] = hc, wi[Ci++] = pc, pc = e, hc = t;
}
function qx(e, t, n) {
  hn[mn++] = fr, hn[mn++] = pr, hn[mn++] = Ho, Ho = e;
  var r = fr;
  e = pr;
  var o = 32 - An(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - An(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, fr = 1 << 32 - An(t) + o | n << o | r, pr = i + e;
  } else
    fr = 1 << i | n << o | r, pr = e;
}
function Zm(e) {
  e.return !== null && (Co(e, 1), qx(e, 1, 0));
}
function Jm(e) {
  for (; e === pc; )
    pc = wi[--Ci], wi[Ci] = null, hc = wi[--Ci], wi[Ci] = null;
  for (; e === Ho; )
    Ho = hn[--mn], hn[mn] = null, pr = hn[--mn], hn[mn] = null, fr = hn[--mn], hn[mn] = null;
}
var qt = null, Yt = null, Fe = !1, In = null;
function Xx(e, t) {
  var n = vn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function X0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qt = e, Yt = Jr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qt = e, Yt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ho !== null ? { id: fr, overflow: pr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = vn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qt = e, Yt = null, !0) : !1;
    default:
      return !1;
  }
}
function yh(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function bh(e) {
  if (Fe) {
    var t = Yt;
    if (t) {
      var n = t;
      if (!X0(e, t)) {
        if (yh(e))
          throw Error(F(418));
        t = Jr(n.nextSibling);
        var r = qt;
        t && X0(e, t) ? Xx(r, n) : (e.flags = e.flags & -4097 | 2, Fe = !1, qt = e);
      }
    } else {
      if (yh(e))
        throw Error(F(418));
      e.flags = e.flags & -4097 | 2, Fe = !1, qt = e;
    }
  }
}
function Q0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qt = e;
}
function Kl(e) {
  if (e !== qt)
    return !1;
  if (!Fe)
    return Q0(e), Fe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !hh(e.type, e.memoizedProps)), t && (t = Yt)) {
    if (yh(e))
      throw Qx(), Error(F(418));
    for (; t; )
      Xx(e, t), t = Jr(t.nextSibling);
  }
  if (Q0(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Yt = Jr(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Yt = null;
    }
  } else
    Yt = qt ? Jr(e.stateNode.nextSibling) : null;
  return !0;
}
function Qx() {
  for (var e = Yt; e; )
    e = Jr(e.nextSibling);
}
function ra() {
  Yt = qt = null, Fe = !1;
}
function ev(e) {
  In === null ? In = [e] : In.push(e);
}
var rM = Or.ReactCurrentBatchConfig;
function On(e, t) {
  if (e && e.defaultProps) {
    t = Ve({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var mc = po(null), vc = null, ki = null, tv = null;
function nv() {
  tv = ki = vc = null;
}
function rv(e) {
  var t = mc.current;
  $e(mc), e._currentValue = t;
}
function Sh(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Ui(e, t) {
  vc = e, tv = ki = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (At = !0), e.firstContext = null);
}
function Sn(e) {
  var t = e._currentValue;
  if (tv !== e)
    if (e = { context: e, memoizedValue: t, next: null }, ki === null) {
      if (vc === null)
        throw Error(F(308));
      ki = e, vc.dependencies = { lanes: 0, firstContext: e };
    } else
      ki = ki.next = e;
  return t;
}
var Ro = null;
function ov(e) {
  Ro === null ? Ro = [e] : Ro.push(e);
}
function Zx(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, ov(t)) : (n.next = o.next, o.next = n), t.interleaved = n, kr(e, r);
}
function kr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Vr = !1;
function iv(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Jx(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function vr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function eo(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, he & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, kr(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, ov(r)) : (t.next = o.next, o.next = t), r.interleaved = t, kr(e, n);
}
function _u(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Hm(e, n);
  }
}
function Z0(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = a : i = i.next = a, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else
      o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function gc(e, t, n, r) {
  var o = e.updateQueue;
  Vr = !1;
  var i = o.firstBaseUpdate, a = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s, u = l.next;
    l.next = null, a === null ? i = u : a.next = u, a = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== a && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l));
  }
  if (i !== null) {
    var d = o.baseState;
    a = 0, c = u = l = null, s = i;
    do {
      var f = s.lane, p = s.eventTime;
      if ((r & f) === f) {
        c !== null && (c = c.next = {
          eventTime: p,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var g = e, y = s;
          switch (f = t, p = n, y.tag) {
            case 1:
              if (g = y.payload, typeof g == "function") {
                d = g.call(p, d, f);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = y.payload, f = typeof g == "function" ? g.call(p, d, f) : g, f == null)
                break e;
              d = Ve({}, d, f);
              break e;
            case 2:
              Vr = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [s] : f.push(s));
      } else
        p = { eventTime: p, lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = p, l = d) : c = c.next = p, a |= f;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null)
          break;
        f = s, s = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = d), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        a |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    Go |= a, e.lanes = a, e.memoizedState = d;
  }
}
function J0(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(F(191, o));
        o.call(r);
      }
    }
}
var ew = new ZS.Component().refs;
function xh(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ve({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var dd = { isMounted: function(e) {
  return (e = e._reactInternals) ? Zo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Tt(), o = no(e), i = vr(r, o);
  i.payload = t, n != null && (i.callback = n), t = eo(e, i, o), t !== null && (Dn(t, e, o, r), _u(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Tt(), o = no(e), i = vr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = eo(e, i, o), t !== null && (Dn(t, e, o, r), _u(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Tt(), r = no(e), o = vr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = eo(e, o, r), t !== null && (Dn(t, e, r, n), _u(t, e, r));
} };
function ey(e, t, n, r, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Ls(n, r) || !Ls(o, i) : !0;
}
function tw(e, t, n) {
  var r = !1, o = lo, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Sn(i) : (o = Ft(t) ? Wo : Ct.current, r = t.contextTypes, i = (r = r != null) ? na(e, o) : lo), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = dd, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function ty(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && dd.enqueueReplaceState(t, t.state, null);
}
function wh(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = ew, iv(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Sn(i) : (i = Ft(t) ? Wo : Ct.current, o.context = na(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (xh(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && dd.enqueueReplaceState(o, o.state, null), gc(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ja(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(F(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(F(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var s = o.refs;
        s === ew && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(F(284));
    if (!n._owner)
      throw Error(F(290, e));
  }
  return e;
}
function Yl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(F(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ny(e) {
  var t = e._init;
  return t(e._payload);
}
function nw(e) {
  function t(h, m) {
    if (e) {
      var b = h.deletions;
      b === null ? (h.deletions = [m], h.flags |= 16) : b.push(m);
    }
  }
  function n(h, m) {
    if (!e)
      return null;
    for (; m !== null; )
      t(h, m), m = m.sibling;
    return null;
  }
  function r(h, m) {
    for (h = /* @__PURE__ */ new Map(); m !== null; )
      m.key !== null ? h.set(m.key, m) : h.set(m.index, m), m = m.sibling;
    return h;
  }
  function o(h, m) {
    return h = ro(h, m), h.index = 0, h.sibling = null, h;
  }
  function i(h, m, b) {
    return h.index = b, e ? (b = h.alternate, b !== null ? (b = b.index, b < m ? (h.flags |= 2, m) : b) : (h.flags |= 2, m)) : (h.flags |= 1048576, m);
  }
  function a(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, m, b, x) {
    return m === null || m.tag !== 6 ? (m = Uf(b, h.mode, x), m.return = h, m) : (m = o(m, b), m.return = h, m);
  }
  function l(h, m, b, x) {
    var k = b.type;
    return k === vi ? c(h, m, b.props.children, x, b.key) : m !== null && (m.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Nr && ny(k) === m.type) ? (x = o(m, b.props), x.ref = ja(h, m, b), x.return = h, x) : (x = Au(b.type, b.key, b.props, null, h.mode, x), x.ref = ja(h, m, b), x.return = h, x);
  }
  function u(h, m, b, x) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== b.containerInfo || m.stateNode.implementation !== b.implementation ? (m = Gf(b, h.mode, x), m.return = h, m) : (m = o(m, b.children || []), m.return = h, m);
  }
  function c(h, m, b, x, k) {
    return m === null || m.tag !== 7 ? (m = Lo(b, h.mode, x, k), m.return = h, m) : (m = o(m, b), m.return = h, m);
  }
  function d(h, m, b) {
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return m = Uf("" + m, h.mode, b), m.return = h, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ll:
          return b = Au(m.type, m.key, m.props, null, h.mode, b), b.ref = ja(h, null, m), b.return = h, b;
        case mi:
          return m = Gf(m, h.mode, b), m.return = h, m;
        case Nr:
          var x = m._init;
          return d(h, x(m._payload), b);
      }
      if (Xa(m) || $a(m))
        return m = Lo(m, h.mode, b, null), m.return = h, m;
      Yl(h, m);
    }
    return null;
  }
  function f(h, m, b, x) {
    var k = m !== null ? m.key : null;
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return k !== null ? null : s(h, m, "" + b, x);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ll:
          return b.key === k ? l(h, m, b, x) : null;
        case mi:
          return b.key === k ? u(h, m, b, x) : null;
        case Nr:
          return k = b._init, f(
            h,
            m,
            k(b._payload),
            x
          );
      }
      if (Xa(b) || $a(b))
        return k !== null ? null : c(h, m, b, x, null);
      Yl(h, b);
    }
    return null;
  }
  function p(h, m, b, x, k) {
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return h = h.get(b) || null, s(m, h, "" + x, k);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ll:
          return h = h.get(x.key === null ? b : x.key) || null, l(m, h, x, k);
        case mi:
          return h = h.get(x.key === null ? b : x.key) || null, u(m, h, x, k);
        case Nr:
          var P = x._init;
          return p(h, m, b, P(x._payload), k);
      }
      if (Xa(x) || $a(x))
        return h = h.get(b) || null, c(m, h, x, k, null);
      Yl(m, x);
    }
    return null;
  }
  function g(h, m, b, x) {
    for (var k = null, P = null, E = m, T = m = 0, M = null; E !== null && T < b.length; T++) {
      E.index > T ? (M = E, E = null) : M = E.sibling;
      var I = f(h, E, b[T], x);
      if (I === null) {
        E === null && (E = M);
        break;
      }
      e && E && I.alternate === null && t(h, E), m = i(I, m, T), P === null ? k = I : P.sibling = I, P = I, E = M;
    }
    if (T === b.length)
      return n(h, E), Fe && Co(h, T), k;
    if (E === null) {
      for (; T < b.length; T++)
        E = d(h, b[T], x), E !== null && (m = i(E, m, T), P === null ? k = E : P.sibling = E, P = E);
      return Fe && Co(h, T), k;
    }
    for (E = r(h, E); T < b.length; T++)
      M = p(E, h, T, b[T], x), M !== null && (e && M.alternate !== null && E.delete(M.key === null ? T : M.key), m = i(M, m, T), P === null ? k = M : P.sibling = M, P = M);
    return e && E.forEach(function(D) {
      return t(h, D);
    }), Fe && Co(h, T), k;
  }
  function y(h, m, b, x) {
    var k = $a(b);
    if (typeof k != "function")
      throw Error(F(150));
    if (b = k.call(b), b == null)
      throw Error(F(151));
    for (var P = k = null, E = m, T = m = 0, M = null, I = b.next(); E !== null && !I.done; T++, I = b.next()) {
      E.index > T ? (M = E, E = null) : M = E.sibling;
      var D = f(h, E, I.value, x);
      if (D === null) {
        E === null && (E = M);
        break;
      }
      e && E && D.alternate === null && t(h, E), m = i(D, m, T), P === null ? k = D : P.sibling = D, P = D, E = M;
    }
    if (I.done)
      return n(
        h,
        E
      ), Fe && Co(h, T), k;
    if (E === null) {
      for (; !I.done; T++, I = b.next())
        I = d(h, I.value, x), I !== null && (m = i(I, m, T), P === null ? k = I : P.sibling = I, P = I);
      return Fe && Co(h, T), k;
    }
    for (E = r(h, E); !I.done; T++, I = b.next())
      I = p(E, h, T, I.value, x), I !== null && (e && I.alternate !== null && E.delete(I.key === null ? T : I.key), m = i(I, m, T), P === null ? k = I : P.sibling = I, P = I);
    return e && E.forEach(function(G) {
      return t(h, G);
    }), Fe && Co(h, T), k;
  }
  function S(h, m, b, x) {
    if (typeof b == "object" && b !== null && b.type === vi && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ll:
          e: {
            for (var k = b.key, P = m; P !== null; ) {
              if (P.key === k) {
                if (k = b.type, k === vi) {
                  if (P.tag === 7) {
                    n(h, P.sibling), m = o(P, b.props.children), m.return = h, h = m;
                    break e;
                  }
                } else if (P.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Nr && ny(k) === P.type) {
                  n(h, P.sibling), m = o(P, b.props), m.ref = ja(h, P, b), m.return = h, h = m;
                  break e;
                }
                n(h, P);
                break;
              } else
                t(h, P);
              P = P.sibling;
            }
            b.type === vi ? (m = Lo(b.props.children, h.mode, x, b.key), m.return = h, h = m) : (x = Au(b.type, b.key, b.props, null, h.mode, x), x.ref = ja(h, m, b), x.return = h, h = x);
          }
          return a(h);
        case mi:
          e: {
            for (P = b.key; m !== null; ) {
              if (m.key === P)
                if (m.tag === 4 && m.stateNode.containerInfo === b.containerInfo && m.stateNode.implementation === b.implementation) {
                  n(h, m.sibling), m = o(m, b.children || []), m.return = h, h = m;
                  break e;
                } else {
                  n(h, m);
                  break;
                }
              else
                t(h, m);
              m = m.sibling;
            }
            m = Gf(b, h.mode, x), m.return = h, h = m;
          }
          return a(h);
        case Nr:
          return P = b._init, S(h, m, P(b._payload), x);
      }
      if (Xa(b))
        return g(h, m, b, x);
      if ($a(b))
        return y(h, m, b, x);
      Yl(h, b);
    }
    return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, m !== null && m.tag === 6 ? (n(h, m.sibling), m = o(m, b), m.return = h, h = m) : (n(h, m), m = Uf(b, h.mode, x), m.return = h, h = m), a(h)) : n(h, m);
  }
  return S;
}
var oa = nw(!0), rw = nw(!1), pl = {}, Zn = po(pl), Vs = po(pl), Bs = po(pl);
function $o(e) {
  if (e === pl)
    throw Error(F(174));
  return e;
}
function av(e, t) {
  switch (Te(Bs, t), Te(Vs, e), Te(Zn, pl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : eh(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = eh(t, e);
  }
  $e(Zn), Te(Zn, t);
}
function ia() {
  $e(Zn), $e(Vs), $e(Bs);
}
function ow(e) {
  $o(Bs.current);
  var t = $o(Zn.current), n = eh(t, e.type);
  t !== n && (Te(Vs, e), Te(Zn, n));
}
function sv(e) {
  Vs.current === e && ($e(Zn), $e(Vs));
}
var je = po(0);
function yc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var zf = [];
function lv() {
  for (var e = 0; e < zf.length; e++)
    zf[e]._workInProgressVersionPrimary = null;
  zf.length = 0;
}
var Ou = Or.ReactCurrentDispatcher, Nf = Or.ReactCurrentBatchConfig, Uo = 0, Ne = null, et = null, it = null, bc = !1, fs = !1, Ws = 0, oM = 0;
function yt() {
  throw Error(F(321));
}
function uv(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ln(e[n], t[n]))
      return !1;
  return !0;
}
function cv(e, t, n, r, o, i) {
  if (Uo = i, Ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ou.current = e === null || e.memoizedState === null ? lM : uM, e = n(r, o), fs) {
    i = 0;
    do {
      if (fs = !1, Ws = 0, 25 <= i)
        throw Error(F(301));
      i += 1, it = et = null, t.updateQueue = null, Ou.current = cM, e = n(r, o);
    } while (fs);
  }
  if (Ou.current = Sc, t = et !== null && et.next !== null, Uo = 0, it = et = Ne = null, bc = !1, t)
    throw Error(F(300));
  return e;
}
function dv() {
  var e = Ws !== 0;
  return Ws = 0, e;
}
function Wn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return it === null ? Ne.memoizedState = it = e : it = it.next = e, it;
}
function xn() {
  if (et === null) {
    var e = Ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = et.next;
  var t = it === null ? Ne.memoizedState : it.next;
  if (t !== null)
    it = t, et = e;
  else {
    if (e === null)
      throw Error(F(310));
    et = e, e = { memoizedState: et.memoizedState, baseState: et.baseState, baseQueue: et.baseQueue, queue: et.queue, next: null }, it === null ? Ne.memoizedState = it = e : it = it.next = e;
  }
  return it;
}
function Hs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Vf(e) {
  var t = xn(), n = t.queue;
  if (n === null)
    throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = et, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      o.next = i.next, i.next = a;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var s = a = null, l = null, u = i;
    do {
      var c = u.lane;
      if ((Uo & c) === c)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = d, a = r) : l = l.next = d, Ne.lanes |= c, Go |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = r : l.next = s, Ln(r, t.memoizedState) || (At = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ne.lanes |= i, Go |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bf(e) {
  var t = xn(), n = t.queue;
  if (n === null)
    throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = o = o.next;
    do
      i = e(i, a.action), a = a.next;
    while (a !== o);
    Ln(i, t.memoizedState) || (At = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function iw() {
}
function aw(e, t) {
  var n = Ne, r = xn(), o = t(), i = !Ln(r.memoizedState, o);
  if (i && (r.memoizedState = o, At = !0), r = r.queue, fv(uw.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || it !== null && it.memoizedState.tag & 1) {
    if (n.flags |= 2048, Us(9, lw.bind(null, n, r, o, t), void 0, null), st === null)
      throw Error(F(349));
    Uo & 30 || sw(n, t, o);
  }
  return o;
}
function sw(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function lw(e, t, n, r) {
  t.value = n, t.getSnapshot = r, cw(t) && dw(e);
}
function uw(e, t, n) {
  return n(function() {
    cw(t) && dw(e);
  });
}
function cw(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ln(e, n);
  } catch {
    return !0;
  }
}
function dw(e) {
  var t = kr(e, 1);
  t !== null && Dn(t, e, 1, -1);
}
function ry(e) {
  var t = Wn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Hs, lastRenderedState: e }, t.queue = e, e = e.dispatch = sM.bind(null, Ne, e), [t.memoizedState, e];
}
function Us(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function fw() {
  return xn().memoizedState;
}
function Mu(e, t, n, r) {
  var o = Wn();
  Ne.flags |= e, o.memoizedState = Us(1 | t, n, void 0, r === void 0 ? null : r);
}
function fd(e, t, n, r) {
  var o = xn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (et !== null) {
    var a = et.memoizedState;
    if (i = a.destroy, r !== null && uv(r, a.deps)) {
      o.memoizedState = Us(t, n, i, r);
      return;
    }
  }
  Ne.flags |= e, o.memoizedState = Us(1 | t, n, i, r);
}
function oy(e, t) {
  return Mu(8390656, 8, e, t);
}
function fv(e, t) {
  return fd(2048, 8, e, t);
}
function pw(e, t) {
  return fd(4, 2, e, t);
}
function hw(e, t) {
  return fd(4, 4, e, t);
}
function mw(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function vw(e, t, n) {
  return n = n != null ? n.concat([e]) : null, fd(4, 4, mw.bind(null, t, e), n);
}
function pv() {
}
function gw(e, t) {
  var n = xn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && uv(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function yw(e, t) {
  var n = xn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && uv(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function bw(e, t, n) {
  return Uo & 21 ? (Ln(n, t) || (n = wx(), Ne.lanes |= n, Go |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, At = !0), e.memoizedState = n);
}
function iM(e, t) {
  var n = we;
  we = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Nf.transition;
  Nf.transition = {};
  try {
    e(!1), t();
  } finally {
    we = n, Nf.transition = r;
  }
}
function Sw() {
  return xn().memoizedState;
}
function aM(e, t, n) {
  var r = no(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, xw(e))
    ww(t, n);
  else if (n = Zx(e, t, n, r), n !== null) {
    var o = Tt();
    Dn(n, e, r, o), Cw(n, t, r);
  }
}
function sM(e, t, n) {
  var r = no(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (xw(e))
    ww(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, n);
        if (o.hasEagerState = !0, o.eagerState = s, Ln(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, ov(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = Zx(e, t, o, r), n !== null && (o = Tt(), Dn(n, e, r, o), Cw(n, t, r));
  }
}
function xw(e) {
  var t = e.alternate;
  return e === Ne || t !== null && t === Ne;
}
function ww(e, t) {
  fs = bc = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Cw(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Hm(e, n);
  }
}
var Sc = { readContext: Sn, useCallback: yt, useContext: yt, useEffect: yt, useImperativeHandle: yt, useInsertionEffect: yt, useLayoutEffect: yt, useMemo: yt, useReducer: yt, useRef: yt, useState: yt, useDebugValue: yt, useDeferredValue: yt, useTransition: yt, useMutableSource: yt, useSyncExternalStore: yt, useId: yt, unstable_isNewReconciler: !1 }, lM = { readContext: Sn, useCallback: function(e, t) {
  return Wn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Sn, useEffect: oy, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Mu(
    4194308,
    4,
    mw.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Mu(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Mu(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Wn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Wn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = aM.bind(null, Ne, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Wn();
  return e = { current: e }, t.memoizedState = e;
}, useState: ry, useDebugValue: pv, useDeferredValue: function(e) {
  return Wn().memoizedState = e;
}, useTransition: function() {
  var e = ry(!1), t = e[0];
  return e = iM.bind(null, e[1]), Wn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ne, o = Wn();
  if (Fe) {
    if (n === void 0)
      throw Error(F(407));
    n = n();
  } else {
    if (n = t(), st === null)
      throw Error(F(349));
    Uo & 30 || sw(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, oy(uw.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Us(9, lw.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Wn(), t = st.identifierPrefix;
  if (Fe) {
    var n = pr, r = fr;
    n = (r & ~(1 << 32 - An(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ws++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = oM++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, uM = {
  readContext: Sn,
  useCallback: gw,
  useContext: Sn,
  useEffect: fv,
  useImperativeHandle: vw,
  useInsertionEffect: pw,
  useLayoutEffect: hw,
  useMemo: yw,
  useReducer: Vf,
  useRef: fw,
  useState: function() {
    return Vf(Hs);
  },
  useDebugValue: pv,
  useDeferredValue: function(e) {
    var t = xn();
    return bw(t, et.memoizedState, e);
  },
  useTransition: function() {
    var e = Vf(Hs)[0], t = xn().memoizedState;
    return [e, t];
  },
  useMutableSource: iw,
  useSyncExternalStore: aw,
  useId: Sw,
  unstable_isNewReconciler: !1
}, cM = { readContext: Sn, useCallback: gw, useContext: Sn, useEffect: fv, useImperativeHandle: vw, useInsertionEffect: pw, useLayoutEffect: hw, useMemo: yw, useReducer: Bf, useRef: fw, useState: function() {
  return Bf(Hs);
}, useDebugValue: pv, useDeferredValue: function(e) {
  var t = xn();
  return et === null ? t.memoizedState = e : bw(t, et.memoizedState, e);
}, useTransition: function() {
  var e = Bf(Hs)[0], t = xn().memoizedState;
  return [e, t];
}, useMutableSource: iw, useSyncExternalStore: aw, useId: Sw, unstable_isNewReconciler: !1 };
function aa(e, t) {
  try {
    var n = "", r = t;
    do
      n += j_(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Wf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ch(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var dM = typeof WeakMap == "function" ? WeakMap : Map;
function kw(e, t, n) {
  n = vr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    wc || (wc = !0, $h = r), Ch(e, t);
  }, n;
}
function Pw(e, t, n) {
  n = vr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Ch(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Ch(e, t), typeof r != "function" && (to === null ? to = /* @__PURE__ */ new Set([this]) : to.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function iy(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new dM();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = PM.bind(null, e, t, n), t.then(e, e));
}
function ay(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function sy(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vr(-1, 1), t.tag = 2, eo(n, t, 1))), n.lanes |= 1), e);
}
var fM = Or.ReactCurrentOwner, At = !1;
function Pt(e, t, n, r) {
  t.child = e === null ? rw(t, null, n, r) : oa(t, e.child, n, r);
}
function ly(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Ui(t, o), r = cv(e, t, n, r, i, o), n = dv(), e !== null && !At ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Pr(e, t, o)) : (Fe && n && Zm(t), t.flags |= 1, Pt(e, t, r, o), t.child);
}
function uy(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !xv(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ew(e, t, i, r, o)) : (e = Au(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ls, n(a, r) && e.ref === t.ref)
      return Pr(e, t, o);
  }
  return t.flags |= 1, e = ro(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ew(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ls(i, r) && e.ref === t.ref)
      if (At = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (At = !0);
      else
        return t.lanes = e.lanes, Pr(e, t, o);
  }
  return kh(e, t, n, r, o);
}
function Tw(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Te(Ei, Kt), Kt |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Te(Ei, Kt), Kt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Te(Ei, Kt), Kt |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Te(Ei, Kt), Kt |= r;
  return Pt(e, t, o, n), t.child;
}
function _w(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function kh(e, t, n, r, o) {
  var i = Ft(n) ? Wo : Ct.current;
  return i = na(t, i), Ui(t, o), n = cv(e, t, n, r, i, o), r = dv(), e !== null && !At ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Pr(e, t, o)) : (Fe && r && Zm(t), t.flags |= 1, Pt(e, t, n, o), t.child);
}
function cy(e, t, n, r, o) {
  if (Ft(n)) {
    var i = !0;
    fc(t);
  } else
    i = !1;
  if (Ui(t, o), t.stateNode === null)
    Iu(e, t), tw(t, n, r), wh(t, n, r, o), r = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Sn(u) : (u = Ft(n) ? Wo : Ct.current, u = na(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== u) && ty(t, a, r, u), Vr = !1;
    var f = t.memoizedState;
    a.state = f, gc(t, r, a, o), l = t.memoizedState, s !== r || f !== l || Dt.current || Vr ? (typeof c == "function" && (xh(t, n, c, r), l = t.memoizedState), (s = Vr || ey(t, n, s, r, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, Jx(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : On(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, typeof l == "object" && l !== null ? l = Sn(l) : (l = Ft(n) ? Wo : Ct.current, l = na(t, l));
    var p = n.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && ty(t, a, r, l), Vr = !1, f = t.memoizedState, a.state = f, gc(t, r, a, o);
    var g = t.memoizedState;
    s !== d || f !== g || Dt.current || Vr ? (typeof p == "function" && (xh(t, n, p, r), g = t.memoizedState), (u = Vr || ey(t, n, u, r, f, g, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, g, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, g, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), a.props = r, a.state = g, a.context = l, r = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ph(e, t, n, r, i, o);
}
function Ph(e, t, n, r, o, i) {
  _w(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a)
    return o && q0(t, n, !1), Pr(e, t, i);
  r = t.stateNode, fM.current = t;
  var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = oa(t, e.child, null, i), t.child = oa(t, null, s, i)) : Pt(e, t, s, i), t.memoizedState = r.state, o && q0(t, n, !0), t.child;
}
function Ow(e) {
  var t = e.stateNode;
  t.pendingContext ? Y0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Y0(e, t.context, !1), av(e, t.containerInfo);
}
function dy(e, t, n, r, o) {
  return ra(), ev(o), t.flags |= 256, Pt(e, t, n, r), t.child;
}
var Eh = { dehydrated: null, treeContext: null, retryLane: 0 };
function Th(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Mw(e, t, n) {
  var r = t.pendingProps, o = je.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Te(je, o & 1), e === null)
    return bh(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = md(a, r, 0, null), e = Lo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Th(n), t.memoizedState = Eh, e) : hv(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return pM(e, t, a, r, s, o, n);
  if (i) {
    i = r.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = ro(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = ro(s, i) : (i = Lo(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? Th(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = Eh, r;
  }
  return i = e.child, e = i.sibling, r = ro(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function hv(e, t) {
  return t = md({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ql(e, t, n, r) {
  return r !== null && ev(r), oa(t, e.child, null, n), e = hv(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function pM(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Wf(Error(F(422))), ql(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = md({ mode: "visible", children: r.children }, o, 0, null), i = Lo(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && oa(t, e.child, null, a), t.child.memoizedState = Th(a), t.memoizedState = Eh, i);
  if (!(t.mode & 1))
    return ql(e, t, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, i = Error(F(419)), r = Wf(i, r, void 0), ql(e, t, a, r);
  }
  if (s = (a & e.childLanes) !== 0, At || s) {
    if (r = st, r !== null) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, kr(e, o), Dn(r, e, o, -1));
    }
    return Sv(), r = Wf(Error(F(421))), ql(e, t, a, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = EM.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Yt = Jr(o.nextSibling), qt = t, Fe = !0, In = null, e !== null && (hn[mn++] = fr, hn[mn++] = pr, hn[mn++] = Ho, fr = e.id, pr = e.overflow, Ho = t), t = hv(t, r.children), t.flags |= 4096, t);
}
function fy(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Sh(e.return, t, n);
}
function Hf(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Iw(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Pt(e, t, r.children, n), r = je.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && fy(e, n, t);
          else if (e.tag === 19)
            fy(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (Te(je, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && yc(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Hf(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && yc(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Hf(t, !0, n, null, i);
        break;
      case "together":
        Hf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Iu(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Pr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Go |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(F(153));
  if (t.child !== null) {
    for (e = t.child, n = ro(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = ro(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function hM(e, t, n) {
  switch (t.tag) {
    case 3:
      Ow(t), ra();
      break;
    case 5:
      ow(t);
      break;
    case 1:
      Ft(t.type) && fc(t);
      break;
    case 4:
      av(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Te(mc, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Te(je, je.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Mw(e, t, n) : (Te(je, je.current & 1), e = Pr(e, t, n), e !== null ? e.sibling : null);
      Te(je, je.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Iw(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Te(je, je.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Tw(e, t, n);
  }
  return Pr(e, t, n);
}
var Rw, _h, $w, Aw;
Rw = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
_h = function() {
};
$w = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, $o(Zn.current);
    var i = null;
    switch (n) {
      case "input":
        o = Xp(e, o), r = Xp(e, r), i = [];
        break;
      case "select":
        o = Ve({}, o, { value: void 0 }), r = Ve({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Jp(e, o), r = Jp(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = cc);
    }
    th(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s)
            s.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ms.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== s && (l != null || s != null))
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
            for (a in l)
              l.hasOwnProperty(a) && s[a] !== l[a] && (n || (n = {}), n[a] = l[a]);
          } else
            n || (i || (i = []), i.push(
              u,
              n
            )), n = l;
        else
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ms.hasOwnProperty(u) ? (l != null && u === "onScroll" && Ie("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Aw = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function za(e, t) {
  if (!Fe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function bt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function mM(e, t, n) {
  var r = t.pendingProps;
  switch (Jm(t), t.tag) {
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
      return bt(t), null;
    case 1:
      return Ft(t.type) && dc(), bt(t), null;
    case 3:
      return r = t.stateNode, ia(), $e(Dt), $e(Ct), lv(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Kl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, In !== null && (Fh(In), In = null))), _h(e, t), bt(t), null;
    case 5:
      sv(t);
      var o = $o(Bs.current);
      if (n = t.type, e !== null && t.stateNode != null)
        $w(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(F(166));
          return bt(t), null;
        }
        if (e = $o(Zn.current), Kl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Yn] = t, r[Ns] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Ie("cancel", r), Ie("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ie("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Za.length; o++)
                Ie(Za[o], r);
              break;
            case "source":
              Ie("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ie(
                "error",
                r
              ), Ie("load", r);
              break;
            case "details":
              Ie("toggle", r);
              break;
            case "input":
              x0(r, i), Ie("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Ie("invalid", r);
              break;
            case "textarea":
              C0(r, i), Ie("invalid", r);
          }
          th(n, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Gl(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Gl(
                r.textContent,
                s,
                e
              ), o = ["children", "" + s]) : Ms.hasOwnProperty(a) && s != null && a === "onScroll" && Ie("scroll", r);
            }
          switch (n) {
            case "input":
              jl(r), w0(r, i, !0);
              break;
            case "textarea":
              jl(r), k0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = cc);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = sx(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Yn] = t, e[Ns] = r, Rw(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = nh(n, r), n) {
              case "dialog":
                Ie("cancel", e), Ie("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ie("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Za.length; o++)
                  Ie(Za[o], e);
                o = r;
                break;
              case "source":
                Ie("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Ie(
                  "error",
                  e
                ), Ie("load", e), o = r;
                break;
              case "details":
                Ie("toggle", e), o = r;
                break;
              case "input":
                x0(e, r), o = Xp(e, r), Ie("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Ve({}, r, { value: void 0 }), Ie("invalid", e);
                break;
              case "textarea":
                C0(e, r), o = Jp(e, r), Ie("invalid", e);
                break;
              default:
                o = r;
            }
            th(n, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? cx(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && lx(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Is(e, l) : typeof l == "number" && Is(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ms.hasOwnProperty(i) ? l != null && i === "onScroll" && Ie("scroll", e) : l != null && jm(e, i, l, a));
              }
            switch (n) {
              case "input":
                jl(e), w0(e, r, !1);
                break;
              case "textarea":
                jl(e), k0(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + so(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Vi(e, !!r.multiple, i, !1) : r.defaultValue != null && Vi(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = cc);
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
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return bt(t), null;
    case 6:
      if (e && t.stateNode != null)
        Aw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(F(166));
        if (n = $o(Bs.current), $o(Zn.current), Kl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Yn] = t, (i = r.nodeValue !== n) && (e = qt, e !== null))
            switch (e.tag) {
              case 3:
                Gl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Gl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Yn] = t, t.stateNode = r;
      }
      return bt(t), null;
    case 13:
      if ($e(je), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Fe && Yt !== null && t.mode & 1 && !(t.flags & 128))
          Qx(), ra(), t.flags |= 98560, i = !1;
        else if (i = Kl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(F(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(F(317));
            i[Yn] = t;
          } else
            ra(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          bt(t), i = !1;
        } else
          In !== null && (Fh(In), In = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || je.current & 1 ? tt === 0 && (tt = 3) : Sv())), t.updateQueue !== null && (t.flags |= 4), bt(t), null);
    case 4:
      return ia(), _h(e, t), e === null && js(t.stateNode.containerInfo), bt(t), null;
    case 10:
      return rv(t.type._context), bt(t), null;
    case 17:
      return Ft(t.type) && dc(), bt(t), null;
    case 19:
      if ($e(je), i = t.memoizedState, i === null)
        return bt(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (r)
          za(i, !1);
        else {
          if (tt !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = yc(e), a !== null) {
                for (t.flags |= 128, za(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return Te(je, je.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Ke() > sa && (t.flags |= 128, r = !0, za(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = yc(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), za(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !Fe)
              return bt(t), null;
          } else
            2 * Ke() - i.renderingStartTime > sa && n !== 1073741824 && (t.flags |= 128, r = !0, za(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ke(), t.sibling = null, n = je.current, Te(je, r ? n & 1 | 2 : n & 1), t) : (bt(t), null);
    case 22:
    case 23:
      return bv(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Kt & 1073741824 && (bt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : bt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function vM(e, t) {
  switch (Jm(t), t.tag) {
    case 1:
      return Ft(t.type) && dc(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ia(), $e(Dt), $e(Ct), lv(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return sv(t), null;
    case 13:
      if ($e(je), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(F(340));
        ra();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return $e(je), null;
    case 4:
      return ia(), null;
    case 10:
      return rv(t.type._context), null;
    case 22:
    case 23:
      return bv(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Xl = !1, xt = !1, gM = typeof WeakSet == "function" ? WeakSet : Set, B = null;
function Pi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        We(e, t, r);
      }
    else
      n.current = null;
}
function Oh(e, t, n) {
  try {
    n();
  } catch (r) {
    We(e, t, r);
  }
}
var py = !1;
function yM(e, t) {
  if (fh = sc, e = jx(), Qm(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0, s = -1, l = -1, u = 0, c = 0, d = e, f = null;
          t:
            for (; ; ) {
              for (var p; d !== n || o !== 0 && d.nodeType !== 3 || (s = a + o), d !== i || r !== 0 && d.nodeType !== 3 || (l = a + r), d.nodeType === 3 && (a += d.nodeValue.length), (p = d.firstChild) !== null; )
                f = d, d = p;
              for (; ; ) {
                if (d === e)
                  break t;
                if (f === n && ++u === o && (s = a), f === i && ++c === r && (l = a), (p = d.nextSibling) !== null)
                  break;
                d = f, f = d.parentNode;
              }
              d = p;
            }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (ph = { focusedElem: e, selectionRange: n }, sc = !1, B = t; B !== null; )
    if (t = B, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, B = e;
    else
      for (; B !== null; ) {
        t = B;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var y = g.memoizedProps, S = g.memoizedState, h = t.stateNode, m = h.getSnapshotBeforeUpdate(t.elementType === t.type ? y : On(t.type, y), S);
                  h.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var b = t.stateNode.containerInfo;
                b.nodeType === 1 ? b.textContent = "" : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163));
            }
        } catch (x) {
          We(t, t.return, x);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, B = e;
          break;
        }
        B = t.return;
      }
  return g = py, py = !1, g;
}
function ps(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Oh(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function pd(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Mh(e) {
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
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Dw(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Dw(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yn], delete t[Ns], delete t[vh], delete t[eM], delete t[tM])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Fw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function hy(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Fw(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function Ih(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = cc));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ih(e, t, n), e = e.sibling; e !== null; )
      Ih(e, t, n), e = e.sibling;
}
function Rh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Rh(e, t, n), e = e.sibling; e !== null; )
      Rh(e, t, n), e = e.sibling;
}
var dt = null, Mn = !1;
function Dr(e, t, n) {
  for (n = n.child; n !== null; )
    Lw(e, t, n), n = n.sibling;
}
function Lw(e, t, n) {
  if (Qn && typeof Qn.onCommitFiberUnmount == "function")
    try {
      Qn.onCommitFiberUnmount(id, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      xt || Pi(n, t);
    case 6:
      var r = dt, o = Mn;
      dt = null, Dr(e, t, n), dt = r, Mn = o, dt !== null && (Mn ? (e = dt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : dt.removeChild(n.stateNode));
      break;
    case 18:
      dt !== null && (Mn ? (e = dt, n = n.stateNode, e.nodeType === 8 ? Lf(e.parentNode, n) : e.nodeType === 1 && Lf(e, n), Ds(e)) : Lf(dt, n.stateNode));
      break;
    case 4:
      r = dt, o = Mn, dt = n.stateNode.containerInfo, Mn = !0, Dr(e, t, n), dt = r, Mn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!xt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && Oh(n, t, a), o = o.next;
        } while (o !== r);
      }
      Dr(e, t, n);
      break;
    case 1:
      if (!xt && (Pi(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          We(n, t, s);
        }
      Dr(e, t, n);
      break;
    case 21:
      Dr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (xt = (r = xt) || n.memoizedState !== null, Dr(e, t, n), xt = r) : Dr(e, t, n);
      break;
    default:
      Dr(e, t, n);
  }
}
function my(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new gM()), t.forEach(function(r) {
      var o = TM.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Tn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e, a = t, s = a;
        e:
          for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                dt = s.stateNode, Mn = !1;
                break e;
              case 3:
                dt = s.stateNode.containerInfo, Mn = !0;
                break e;
              case 4:
                dt = s.stateNode.containerInfo, Mn = !0;
                break e;
            }
            s = s.return;
          }
        if (dt === null)
          throw Error(F(160));
        Lw(i, a, o), dt = null, Mn = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        We(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      jw(t, e), t = t.sibling;
}
function jw(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Tn(t, e), Vn(e), r & 4) {
        try {
          ps(3, e, e.return), pd(3, e);
        } catch (y) {
          We(e, e.return, y);
        }
        try {
          ps(5, e, e.return);
        } catch (y) {
          We(e, e.return, y);
        }
      }
      break;
    case 1:
      Tn(t, e), Vn(e), r & 512 && n !== null && Pi(n, n.return);
      break;
    case 5:
      if (Tn(t, e), Vn(e), r & 512 && n !== null && Pi(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Is(o, "");
        } catch (y) {
          We(e, e.return, y);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && ix(o, i), nh(s, a);
            var u = nh(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? cx(o, d) : c === "dangerouslySetInnerHTML" ? lx(o, d) : c === "children" ? Is(o, d) : jm(o, c, d, u);
            }
            switch (s) {
              case "input":
                Qp(o, i);
                break;
              case "textarea":
                ax(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null ? Vi(o, !!i.multiple, p, !1) : f !== !!i.multiple && (i.defaultValue != null ? Vi(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : Vi(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Ns] = i;
          } catch (y) {
            We(e, e.return, y);
          }
      }
      break;
    case 6:
      if (Tn(t, e), Vn(e), r & 4) {
        if (e.stateNode === null)
          throw Error(F(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (y) {
          We(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Tn(t, e), Vn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Ds(t.containerInfo);
        } catch (y) {
          We(e, e.return, y);
        }
      break;
    case 4:
      Tn(t, e), Vn(e);
      break;
    case 13:
      Tn(t, e), Vn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (gv = Ke())), r & 4 && my(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (xt = (u = xt) || c, Tn(t, e), xt = u) : Tn(t, e), Vn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (B = e, c = e.child; c !== null; ) {
            for (d = B = c; B !== null; ) {
              switch (f = B, p = f.child, f.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ps(4, f, f.return);
                  break;
                case 1:
                  Pi(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    r = f, n = f.return;
                    try {
                      t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (y) {
                      We(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Pi(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    gy(d);
                    continue;
                  }
              }
              p !== null ? (p.return = f, B = p) : gy(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = ux("display", a));
                } catch (y) {
                  We(e, e.return, y);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (y) {
                  We(e, e.return, y);
                }
            } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
              d.child.return = d, d = d.child;
              continue;
            }
            if (d === e)
              break e;
            for (; d.sibling === null; ) {
              if (d.return === null || d.return === e)
                break e;
              c === d && (c = null), d = d.return;
            }
            c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
          }
      }
      break;
    case 19:
      Tn(t, e), Vn(e), r & 4 && my(e);
      break;
    case 21:
      break;
    default:
      Tn(
        t,
        e
      ), Vn(e);
  }
}
function Vn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Fw(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Is(o, ""), r.flags &= -33);
          var i = hy(e);
          Rh(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, s = hy(e);
          Ih(e, s, a);
          break;
        default:
          throw Error(F(161));
      }
    } catch (l) {
      We(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function bM(e, t, n) {
  B = e, zw(e);
}
function zw(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B, i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Xl;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || xt;
        s = Xl;
        var u = xt;
        if (Xl = a, (xt = l) && !u)
          for (B = o; B !== null; )
            a = B, l = a.child, a.tag === 22 && a.memoizedState !== null ? yy(o) : l !== null ? (l.return = a, B = l) : yy(o);
        for (; i !== null; )
          B = i, zw(i), i = i.sibling;
        B = o, Xl = s, xt = u;
      }
      vy(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, B = i) : vy(e);
  }
}
function vy(e) {
  for (; B !== null; ) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              xt || pd(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !xt)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : On(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && J0(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                J0(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Ds(d);
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
              throw Error(F(163));
          }
        xt || t.flags & 512 && Mh(t);
      } catch (f) {
        We(t, t.return, f);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, B = n;
      break;
    }
    B = t.return;
  }
}
function gy(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, B = n;
      break;
    }
    B = t.return;
  }
}
function yy(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            pd(4, t);
          } catch (l) {
            We(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              We(t, o, l);
            }
          }
          var i = t.return;
          try {
            Mh(t);
          } catch (l) {
            We(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Mh(t);
          } catch (l) {
            We(t, a, l);
          }
      }
    } catch (l) {
      We(t, t.return, l);
    }
    if (t === e) {
      B = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, B = s;
      break;
    }
    B = t.return;
  }
}
var SM = Math.ceil, xc = Or.ReactCurrentDispatcher, mv = Or.ReactCurrentOwner, yn = Or.ReactCurrentBatchConfig, he = 0, st = null, Ze = null, pt = 0, Kt = 0, Ei = po(0), tt = 0, Gs = null, Go = 0, hd = 0, vv = 0, hs = null, It = null, gv = 0, sa = 1 / 0, lr = null, wc = !1, $h = null, to = null, Ql = !1, qr = null, Cc = 0, ms = 0, Ah = null, Ru = -1, $u = 0;
function Tt() {
  return he & 6 ? Ke() : Ru !== -1 ? Ru : Ru = Ke();
}
function no(e) {
  return e.mode & 1 ? he & 2 && pt !== 0 ? pt & -pt : rM.transition !== null ? ($u === 0 && ($u = wx()), $u) : (e = we, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ox(e.type)), e) : 1;
}
function Dn(e, t, n, r) {
  if (50 < ms)
    throw ms = 0, Ah = null, Error(F(185));
  cl(e, n, r), (!(he & 2) || e !== st) && (e === st && (!(he & 2) && (hd |= n), tt === 4 && Hr(e, pt)), Lt(e, r), n === 1 && he === 0 && !(t.mode & 1) && (sa = Ke() + 500, cd && ho()));
}
function Lt(e, t) {
  var n = e.callbackNode;
  rO(e, t);
  var r = ac(e, e === st ? pt : 0);
  if (r === 0)
    n !== null && T0(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && T0(n), t === 1)
      e.tag === 0 ? nM(by.bind(null, e)) : Yx(by.bind(null, e)), ZO(function() {
        !(he & 6) && ho();
      }), n = null;
    else {
      switch (Cx(r)) {
        case 1:
          n = Wm;
          break;
        case 4:
          n = Sx;
          break;
        case 16:
          n = ic;
          break;
        case 536870912:
          n = xx;
          break;
        default:
          n = ic;
      }
      n = Kw(n, Nw.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Nw(e, t) {
  if (Ru = -1, $u = 0, he & 6)
    throw Error(F(327));
  var n = e.callbackNode;
  if (Gi() && e.callbackNode !== n)
    return null;
  var r = ac(e, e === st ? pt : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = kc(e, r);
  else {
    t = r;
    var o = he;
    he |= 2;
    var i = Bw();
    (st !== e || pt !== t) && (lr = null, sa = Ke() + 500, Fo(e, t));
    do
      try {
        CM();
        break;
      } catch (s) {
        Vw(e, s);
      }
    while (!0);
    nv(), xc.current = i, he = o, Ze !== null ? t = 0 : (st = null, pt = 0, t = tt);
  }
  if (t !== 0) {
    if (t === 2 && (o = sh(e), o !== 0 && (r = o, t = Dh(e, o))), t === 1)
      throw n = Gs, Fo(e, 0), Hr(e, r), Lt(e, Ke()), n;
    if (t === 6)
      Hr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !xM(o) && (t = kc(e, r), t === 2 && (i = sh(e), i !== 0 && (r = i, t = Dh(e, i))), t === 1))
        throw n = Gs, Fo(e, 0), Hr(e, r), Lt(e, Ke()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          ko(e, It, lr);
          break;
        case 3:
          if (Hr(e, r), (r & 130023424) === r && (t = gv + 500 - Ke(), 10 < t)) {
            if (ac(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Tt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = mh(ko.bind(null, e, It, lr), t);
            break;
          }
          ko(e, It, lr);
          break;
        case 4:
          if (Hr(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - An(r);
            i = 1 << a, a = t[a], a > o && (o = a), r &= ~i;
          }
          if (r = o, r = Ke() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * SM(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = mh(ko.bind(null, e, It, lr), r);
            break;
          }
          ko(e, It, lr);
          break;
        case 5:
          ko(e, It, lr);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return Lt(e, Ke()), e.callbackNode === n ? Nw.bind(null, e) : null;
}
function Dh(e, t) {
  var n = hs;
  return e.current.memoizedState.isDehydrated && (Fo(e, t).flags |= 256), e = kc(e, t), e !== 2 && (t = It, It = n, t !== null && Fh(t)), e;
}
function Fh(e) {
  It === null ? It = e : It.push.apply(It, e);
}
function xM(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!Ln(i(), o))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Hr(e, t) {
  for (t &= ~vv, t &= ~hd, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - An(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function by(e) {
  if (he & 6)
    throw Error(F(327));
  Gi();
  var t = ac(e, 0);
  if (!(t & 1))
    return Lt(e, Ke()), null;
  var n = kc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = sh(e);
    r !== 0 && (t = r, n = Dh(e, r));
  }
  if (n === 1)
    throw n = Gs, Fo(e, 0), Hr(e, t), Lt(e, Ke()), n;
  if (n === 6)
    throw Error(F(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, ko(e, It, lr), Lt(e, Ke()), null;
}
function yv(e, t) {
  var n = he;
  he |= 1;
  try {
    return e(t);
  } finally {
    he = n, he === 0 && (sa = Ke() + 500, cd && ho());
  }
}
function Ko(e) {
  qr !== null && qr.tag === 0 && !(he & 6) && Gi();
  var t = he;
  he |= 1;
  var n = yn.transition, r = we;
  try {
    if (yn.transition = null, we = 1, e)
      return e();
  } finally {
    we = r, yn.transition = n, he = t, !(he & 6) && ho();
  }
}
function bv() {
  Kt = Ei.current, $e(Ei);
}
function Fo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, QO(n)), Ze !== null)
    for (n = Ze.return; n !== null; ) {
      var r = n;
      switch (Jm(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && dc();
          break;
        case 3:
          ia(), $e(Dt), $e(Ct), lv();
          break;
        case 5:
          sv(r);
          break;
        case 4:
          ia();
          break;
        case 13:
          $e(je);
          break;
        case 19:
          $e(je);
          break;
        case 10:
          rv(r.type._context);
          break;
        case 22:
        case 23:
          bv();
      }
      n = n.return;
    }
  if (st = e, Ze = e = ro(e.current, null), pt = Kt = t, tt = 0, Gs = null, vv = hd = Go = 0, It = hs = null, Ro !== null) {
    for (t = 0; t < Ro.length; t++)
      if (n = Ro[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var a = i.next;
          i.next = o, r.next = a;
        }
        n.pending = r;
      }
    Ro = null;
  }
  return e;
}
function Vw(e, t) {
  do {
    var n = Ze;
    try {
      if (nv(), Ou.current = Sc, bc) {
        for (var r = Ne.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        bc = !1;
      }
      if (Uo = 0, it = et = Ne = null, fs = !1, Ws = 0, mv.current = null, n === null || n.return === null) {
        tt = 1, Gs = t, Ze = null;
        break;
      }
      e: {
        var i = e, a = n.return, s = n, l = t;
        if (t = pt, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var p = ay(a);
          if (p !== null) {
            p.flags &= -257, sy(p, a, s, i, t), p.mode & 1 && iy(i, u, t), t = p, l = u;
            var g = t.updateQueue;
            if (g === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else
              g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              iy(i, u, t), Sv();
              break e;
            }
            l = Error(F(426));
          }
        } else if (Fe && s.mode & 1) {
          var S = ay(a);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), sy(S, a, s, i, t), ev(aa(l, s));
            break e;
          }
        }
        i = l = aa(l, s), tt !== 4 && (tt = 2), hs === null ? hs = [i] : hs.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var h = kw(i, l, t);
              Z0(i, h);
              break e;
            case 1:
              s = l;
              var m = i.type, b = i.stateNode;
              if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (to === null || !to.has(b)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var x = Pw(i, s, t);
                Z0(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Hw(n);
    } catch (k) {
      t = k, Ze === n && n !== null && (Ze = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Bw() {
  var e = xc.current;
  return xc.current = Sc, e === null ? Sc : e;
}
function Sv() {
  (tt === 0 || tt === 3 || tt === 2) && (tt = 4), st === null || !(Go & 268435455) && !(hd & 268435455) || Hr(st, pt);
}
function kc(e, t) {
  var n = he;
  he |= 2;
  var r = Bw();
  (st !== e || pt !== t) && (lr = null, Fo(e, t));
  do
    try {
      wM();
      break;
    } catch (o) {
      Vw(e, o);
    }
  while (!0);
  if (nv(), he = n, xc.current = r, Ze !== null)
    throw Error(F(261));
  return st = null, pt = 0, tt;
}
function wM() {
  for (; Ze !== null; )
    Ww(Ze);
}
function CM() {
  for (; Ze !== null && !Y_(); )
    Ww(Ze);
}
function Ww(e) {
  var t = Gw(e.alternate, e, Kt);
  e.memoizedProps = e.pendingProps, t === null ? Hw(e) : Ze = t, mv.current = null;
}
function Hw(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = vM(n, t), n !== null) {
        n.flags &= 32767, Ze = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        tt = 6, Ze = null;
        return;
      }
    } else if (n = mM(n, t, Kt), n !== null) {
      Ze = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ze = t;
      return;
    }
    Ze = t = e;
  } while (t !== null);
  tt === 0 && (tt = 5);
}
function ko(e, t, n) {
  var r = we, o = yn.transition;
  try {
    yn.transition = null, we = 1, kM(e, t, n, r);
  } finally {
    yn.transition = o, we = r;
  }
  return null;
}
function kM(e, t, n, r) {
  do
    Gi();
  while (qr !== null);
  if (he & 6)
    throw Error(F(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(F(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (oO(e, i), e === st && (Ze = st = null, pt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ql || (Ql = !0, Kw(ic, function() {
    return Gi(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = yn.transition, yn.transition = null;
    var a = we;
    we = 1;
    var s = he;
    he |= 4, mv.current = null, yM(e, n), jw(n, e), HO(ph), sc = !!fh, ph = fh = null, e.current = n, bM(n), q_(), he = s, we = a, yn.transition = i;
  } else
    e.current = n;
  if (Ql && (Ql = !1, qr = e, Cc = o), i = e.pendingLanes, i === 0 && (to = null), Z_(n.stateNode), Lt(e, Ke()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (wc)
    throw wc = !1, e = $h, $h = null, e;
  return Cc & 1 && e.tag !== 0 && Gi(), i = e.pendingLanes, i & 1 ? e === Ah ? ms++ : (ms = 0, Ah = e) : ms = 0, ho(), null;
}
function Gi() {
  if (qr !== null) {
    var e = Cx(Cc), t = yn.transition, n = we;
    try {
      if (yn.transition = null, we = 16 > e ? 16 : e, qr === null)
        var r = !1;
      else {
        if (e = qr, qr = null, Cc = 0, he & 6)
          throw Error(F(331));
        var o = he;
        for (he |= 4, B = e.current; B !== null; ) {
          var i = B, a = i.child;
          if (B.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (B = u; B !== null; ) {
                  var c = B;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ps(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, B = d;
                  else
                    for (; B !== null; ) {
                      c = B;
                      var f = c.sibling, p = c.return;
                      if (Dw(c), c === u) {
                        B = null;
                        break;
                      }
                      if (f !== null) {
                        f.return = p, B = f;
                        break;
                      }
                      B = p;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var S = y.sibling;
                    y.sibling = null, y = S;
                  } while (y !== null);
                }
              }
              B = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null)
            a.return = i, B = a;
          else
            e:
              for (; B !== null; ) {
                if (i = B, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ps(9, i, i.return);
                  }
                var h = i.sibling;
                if (h !== null) {
                  h.return = i.return, B = h;
                  break e;
                }
                B = i.return;
              }
        }
        var m = e.current;
        for (B = m; B !== null; ) {
          a = B;
          var b = a.child;
          if (a.subtreeFlags & 2064 && b !== null)
            b.return = a, B = b;
          else
            e:
              for (a = m; B !== null; ) {
                if (s = B, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pd(9, s);
                    }
                  } catch (k) {
                    We(s, s.return, k);
                  }
                if (s === a) {
                  B = null;
                  break e;
                }
                var x = s.sibling;
                if (x !== null) {
                  x.return = s.return, B = x;
                  break e;
                }
                B = s.return;
              }
        }
        if (he = o, ho(), Qn && typeof Qn.onPostCommitFiberRoot == "function")
          try {
            Qn.onPostCommitFiberRoot(id, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      we = n, yn.transition = t;
    }
  }
  return !1;
}
function Sy(e, t, n) {
  t = aa(n, t), t = kw(e, t, 1), e = eo(e, t, 1), t = Tt(), e !== null && (cl(e, 1, t), Lt(e, t));
}
function We(e, t, n) {
  if (e.tag === 3)
    Sy(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Sy(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (to === null || !to.has(r))) {
          e = aa(n, e), e = Pw(t, e, 1), t = eo(t, e, 1), e = Tt(), t !== null && (cl(t, 1, e), Lt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function PM(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Tt(), e.pingedLanes |= e.suspendedLanes & n, st === e && (pt & n) === n && (tt === 4 || tt === 3 && (pt & 130023424) === pt && 500 > Ke() - gv ? Fo(e, 0) : vv |= n), Lt(e, t);
}
function Uw(e, t) {
  t === 0 && (e.mode & 1 ? (t = Vl, Vl <<= 1, !(Vl & 130023424) && (Vl = 4194304)) : t = 1);
  var n = Tt();
  e = kr(e, t), e !== null && (cl(e, t, n), Lt(e, n));
}
function EM(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Uw(e, n);
}
function TM(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  r !== null && r.delete(t), Uw(e, n);
}
var Gw;
Gw = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Dt.current)
      At = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return At = !1, hM(e, t, n);
      At = !!(e.flags & 131072);
    }
  else
    At = !1, Fe && t.flags & 1048576 && qx(t, hc, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Iu(e, t), e = t.pendingProps;
      var o = na(t, Ct.current);
      Ui(t, n), o = cv(null, t, r, e, o, n);
      var i = dv();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ft(r) ? (i = !0, fc(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, iv(t), o.updater = dd, t.stateNode = o, o._reactInternals = t, wh(t, r, e, n), t = Ph(null, t, r, !0, i, n)) : (t.tag = 0, Fe && i && Zm(t), Pt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Iu(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = OM(r), e = On(r, e), o) {
          case 0:
            t = kh(null, t, r, e, n);
            break e;
          case 1:
            t = cy(null, t, r, e, n);
            break e;
          case 11:
            t = ly(null, t, r, e, n);
            break e;
          case 14:
            t = uy(null, t, r, On(r.type, e), n);
            break e;
        }
        throw Error(F(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : On(r, o), kh(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : On(r, o), cy(e, t, r, o, n);
    case 3:
      e: {
        if (Ow(t), e === null)
          throw Error(F(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Jx(e, t), gc(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = aa(Error(F(423)), t), t = dy(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = aa(Error(F(424)), t), t = dy(e, t, r, n, o);
            break e;
          } else
            for (Yt = Jr(t.stateNode.containerInfo.firstChild), qt = t, Fe = !0, In = null, n = rw(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ra(), r === o) {
            t = Pr(e, t, n);
            break e;
          }
          Pt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ow(t), e === null && bh(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, hh(r, o) ? a = null : i !== null && hh(r, i) && (t.flags |= 32), _w(e, t), Pt(e, t, a, n), t.child;
    case 6:
      return e === null && bh(t), null;
    case 13:
      return Mw(e, t, n);
    case 4:
      return av(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = oa(t, null, r, n) : Pt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : On(r, o), ly(e, t, r, o, n);
    case 7:
      return Pt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, Te(mc, r._currentValue), r._currentValue = a, i !== null)
          if (Ln(i.value, a)) {
            if (i.children === o.children && !Dt.current) {
              t = Pr(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      l = vr(-1, n & -n), l.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                      }
                    }
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Sh(
                      i.return,
                      n,
                      t
                    ), s.lanes |= n;
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10)
                a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (a = i.return, a === null)
                  throw Error(F(341));
                a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), Sh(a, n, t), a = i.sibling;
              } else
                a = i.child;
              if (a !== null)
                a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (i = a.sibling, i !== null) {
                    i.return = a.return, a = i;
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        Pt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Ui(t, n), o = Sn(o), r = r(o), t.flags |= 1, Pt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = On(r, t.pendingProps), o = On(r.type, o), uy(e, t, r, o, n);
    case 15:
      return Ew(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : On(r, o), Iu(e, t), t.tag = 1, Ft(r) ? (e = !0, fc(t)) : e = !1, Ui(t, n), tw(t, r, o), wh(t, r, o, n), Ph(null, t, r, !0, e, n);
    case 19:
      return Iw(e, t, n);
    case 22:
      return Tw(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function Kw(e, t) {
  return bx(e, t);
}
function _M(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function vn(e, t, n, r) {
  return new _M(e, t, n, r);
}
function xv(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function OM(e) {
  if (typeof e == "function")
    return xv(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Nm)
      return 11;
    if (e === Vm)
      return 14;
  }
  return 2;
}
function ro(e, t) {
  var n = e.alternate;
  return n === null ? (n = vn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Au(e, t, n, r, o, i) {
  var a = 2;
  if (r = e, typeof e == "function")
    xv(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case vi:
          return Lo(n.children, o, i, t);
        case zm:
          a = 8, o |= 8;
          break;
        case Gp:
          return e = vn(12, n, t, o | 2), e.elementType = Gp, e.lanes = i, e;
        case Kp:
          return e = vn(13, n, t, o), e.elementType = Kp, e.lanes = i, e;
        case Yp:
          return e = vn(19, n, t, o), e.elementType = Yp, e.lanes = i, e;
        case nx:
          return md(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ex:
                a = 10;
                break e;
              case tx:
                a = 9;
                break e;
              case Nm:
                a = 11;
                break e;
              case Vm:
                a = 14;
                break e;
              case Nr:
                a = 16, r = null;
                break e;
            }
          throw Error(F(130, e == null ? e : typeof e, ""));
      }
  return t = vn(a, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Lo(e, t, n, r) {
  return e = vn(7, e, r, t), e.lanes = n, e;
}
function md(e, t, n, r) {
  return e = vn(22, e, r, t), e.elementType = nx, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Uf(e, t, n) {
  return e = vn(6, e, null, t), e.lanes = n, e;
}
function Gf(e, t, n) {
  return t = vn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function MM(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ef(0), this.expirationTimes = Ef(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ef(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function wv(e, t, n, r, o, i, a, s, l) {
  return e = new MM(e, t, n, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = vn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, iv(i), e;
}
function IM(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: mi, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Yw(e) {
  if (!e)
    return lo;
  e = e._reactInternals;
  e: {
    if (Zo(e) !== e || e.tag !== 1)
      throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ft(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(F(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ft(n))
      return Kx(e, n, t);
  }
  return t;
}
function qw(e, t, n, r, o, i, a, s, l) {
  return e = wv(n, r, !0, e, o, i, a, s, l), e.context = Yw(null), n = e.current, r = Tt(), o = no(n), i = vr(r, o), i.callback = t ?? null, eo(n, i, o), e.current.lanes = o, cl(e, o, r), Lt(e, r), e;
}
function vd(e, t, n, r) {
  var o = t.current, i = Tt(), a = no(o);
  return n = Yw(n), t.context === null ? t.context = n : t.pendingContext = n, t = vr(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = eo(o, t, a), e !== null && (Dn(e, o, a, i), _u(e, o, a)), a;
}
function Pc(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xy(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Cv(e, t) {
  xy(e, t), (e = e.alternate) && xy(e, t);
}
function RM() {
  return null;
}
var Xw = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function kv(e) {
  this._internalRoot = e;
}
gd.prototype.render = kv.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(F(409));
  vd(e, t, null, null);
};
gd.prototype.unmount = kv.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ko(function() {
      vd(null, e, null, null);
    }), t[Cr] = null;
  }
};
function gd(e) {
  this._internalRoot = e;
}
gd.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ex();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wr.length && t !== 0 && t < Wr[n].priority; n++)
      ;
    Wr.splice(n, 0, e), n === 0 && _x(e);
  }
};
function Pv(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function yd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function wy() {
}
function $M(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Pc(a);
        i.call(u);
      };
    }
    var a = qw(t, r, e, 0, null, !1, !1, "", wy);
    return e._reactRootContainer = a, e[Cr] = a.current, js(e.nodeType === 8 ? e.parentNode : e), Ko(), a;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Pc(l);
      s.call(u);
    };
  }
  var l = wv(e, 0, !1, null, null, !1, !1, "", wy);
  return e._reactRootContainer = l, e[Cr] = l.current, js(e.nodeType === 8 ? e.parentNode : e), Ko(function() {
    vd(t, l, n, r);
  }), l;
}
function bd(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var l = Pc(a);
        s.call(l);
      };
    }
    vd(t, a, e, o);
  } else
    a = $M(n, t, e, o, r);
  return Pc(a);
}
kx = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qa(t.pendingLanes);
        n !== 0 && (Hm(t, n | 1), Lt(t, Ke()), !(he & 6) && (sa = Ke() + 500, ho()));
      }
      break;
    case 13:
      Ko(function() {
        var r = kr(e, 1);
        if (r !== null) {
          var o = Tt();
          Dn(r, e, 1, o);
        }
      }), Cv(e, 1);
  }
};
Um = function(e) {
  if (e.tag === 13) {
    var t = kr(e, 134217728);
    if (t !== null) {
      var n = Tt();
      Dn(t, e, 134217728, n);
    }
    Cv(e, 134217728);
  }
};
Px = function(e) {
  if (e.tag === 13) {
    var t = no(e), n = kr(e, t);
    if (n !== null) {
      var r = Tt();
      Dn(n, e, t, r);
    }
    Cv(e, t);
  }
};
Ex = function() {
  return we;
};
Tx = function(e, t) {
  var n = we;
  try {
    return we = e, t();
  } finally {
    we = n;
  }
};
oh = function(e, t, n) {
  switch (t) {
    case "input":
      if (Qp(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ud(r);
            if (!o)
              throw Error(F(90));
            ox(r), Qp(r, o);
          }
        }
      }
      break;
    case "textarea":
      ax(e, n);
      break;
    case "select":
      t = n.value, t != null && Vi(e, !!n.multiple, t, !1);
  }
};
px = yv;
hx = Ko;
var AM = { usingClientEntryPoint: !1, Events: [fl, Si, ud, dx, fx, yv] }, Na = { findFiberByHostInstance: Io, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, DM = { bundleType: Na.bundleType, version: Na.version, rendererPackageName: Na.rendererPackageName, rendererConfig: Na.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Or.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = gx(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Na.findFiberByHostInstance || RM, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Zl.isDisabled && Zl.supportsFiber)
    try {
      id = Zl.inject(DM), Qn = Zl;
    } catch {
    }
}
tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = AM;
tn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Pv(t))
    throw Error(F(200));
  return IM(e, t, null, n);
};
tn.createRoot = function(e, t) {
  if (!Pv(e))
    throw Error(F(299));
  var n = !1, r = "", o = Xw;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = wv(e, 1, !1, null, null, n, !1, r, o), e[Cr] = t.current, js(e.nodeType === 8 ? e.parentNode : e), new kv(t);
};
tn.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(F(188)) : (e = Object.keys(e).join(","), Error(F(268, e)));
  return e = gx(t), e = e === null ? null : e.stateNode, e;
};
tn.flushSync = function(e) {
  return Ko(e);
};
tn.hydrate = function(e, t, n) {
  if (!yd(t))
    throw Error(F(200));
  return bd(null, e, t, !0, n);
};
tn.hydrateRoot = function(e, t, n) {
  if (!Pv(e))
    throw Error(F(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", a = Xw;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = qw(t, null, e, 1, n ?? null, o, !1, i, a), e[Cr] = t.current, js(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new gd(t);
};
tn.render = function(e, t, n) {
  if (!yd(t))
    throw Error(F(200));
  return bd(null, e, t, !1, n);
};
tn.unmountComponentAtNode = function(e) {
  if (!yd(e))
    throw Error(F(40));
  return e._reactRootContainer ? (Ko(function() {
    bd(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Cr] = null;
    });
  }), !0) : !1;
};
tn.unstable_batchedUpdates = yv;
tn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!yd(n))
    throw Error(F(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(F(38));
  return bd(e, t, n, !1, r);
};
tn.version = "18.2.0-next-9e3b772b8-20220608";
function Qw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qw);
    } catch (e) {
      console.error(e);
    }
}
Qw(), qS.exports = tn;
var Sd = qS.exports, Cy = Sd;
Hp.createRoot = Cy.createRoot, Hp.hydrateRoot = Cy.hydrateRoot;
var Zw = "Expected a function", ky = NaN, FM = "[object Symbol]", LM = /^\s+|\s+$/g, jM = /^[-+]0x[0-9a-f]+$/i, zM = /^0b[01]+$/i, NM = /^0o[0-7]+$/i, VM = parseInt, BM = typeof Kr == "object" && Kr && Kr.Object === Object && Kr, WM = typeof self == "object" && self && self.Object === Object && self, HM = BM || WM || Function("return this")(), UM = Object.prototype, GM = UM.toString, KM = Math.max, YM = Math.min, Kf = function() {
  return HM.Date.now();
};
function qM(e, t, n) {
  var r, o, i, a, s, l, u = 0, c = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Zw);
  t = Py(t) || 0, Ec(n) && (c = !!n.leading, d = "maxWait" in n, i = d ? KM(Py(n.maxWait) || 0, t) : i, f = "trailing" in n ? !!n.trailing : f);
  function p(P) {
    var E = r, T = o;
    return r = o = void 0, u = P, a = e.apply(T, E), a;
  }
  function g(P) {
    return u = P, s = setTimeout(h, t), c ? p(P) : a;
  }
  function y(P) {
    var E = P - l, T = P - u, M = t - E;
    return d ? YM(M, i - T) : M;
  }
  function S(P) {
    var E = P - l, T = P - u;
    return l === void 0 || E >= t || E < 0 || d && T >= i;
  }
  function h() {
    var P = Kf();
    if (S(P))
      return m(P);
    s = setTimeout(h, y(P));
  }
  function m(P) {
    return s = void 0, f && r ? p(P) : (r = o = void 0, a);
  }
  function b() {
    s !== void 0 && clearTimeout(s), u = 0, r = l = o = s = void 0;
  }
  function x() {
    return s === void 0 ? a : m(Kf());
  }
  function k() {
    var P = Kf(), E = S(P);
    if (r = arguments, o = this, l = P, E) {
      if (s === void 0)
        return g(l);
      if (d)
        return s = setTimeout(h, t), p(l);
    }
    return s === void 0 && (s = setTimeout(h, t)), a;
  }
  return k.cancel = b, k.flush = x, k;
}
function XM(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Zw);
  return Ec(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), qM(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
function Ec(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function QM(e) {
  return !!e && typeof e == "object";
}
function ZM(e) {
  return typeof e == "symbol" || QM(e) && GM.call(e) == FM;
}
function Py(e) {
  if (typeof e == "number")
    return e;
  if (ZM(e))
    return ky;
  if (Ec(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ec(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(LM, "");
  var n = zM.test(e);
  return n || NM.test(e) ? VM(e.slice(2), n ? 2 : 8) : jM.test(e) ? ky : +e;
}
var JM = XM;
const eI = /* @__PURE__ */ ll(JM);
function tI(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function nI(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var rI = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(nI(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = tI(o);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), St = "-ms-", Tc = "-moz-", ge = "-webkit-", Jw = "comm", Ev = "rule", Tv = "decl", oI = "@import", eC = "@keyframes", iI = "@layer", aI = Math.abs, xd = String.fromCharCode, sI = Object.assign;
function lI(e, t) {
  return ft(e, 0) ^ 45 ? (((t << 2 ^ ft(e, 0)) << 2 ^ ft(e, 1)) << 2 ^ ft(e, 2)) << 2 ^ ft(e, 3) : 0;
}
function tC(e) {
  return e.trim();
}
function uI(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ye(e, t, n) {
  return e.replace(t, n);
}
function Lh(e, t) {
  return e.indexOf(t);
}
function ft(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ks(e, t, n) {
  return e.slice(t, n);
}
function Gn(e) {
  return e.length;
}
function _v(e) {
  return e.length;
}
function Jl(e, t) {
  return t.push(e), e;
}
function cI(e, t) {
  return e.map(t).join("");
}
var wd = 1, la = 1, nC = 0, Vt = 0, Qe = 0, Pa = "";
function Cd(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: wd, column: la, length: a, return: "" };
}
function Va(e, t) {
  return sI(Cd("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function dI() {
  return Qe;
}
function fI() {
  return Qe = Vt > 0 ? ft(Pa, --Vt) : 0, la--, Qe === 10 && (la = 1, wd--), Qe;
}
function Xt() {
  return Qe = Vt < nC ? ft(Pa, Vt++) : 0, la++, Qe === 10 && (la = 1, wd++), Qe;
}
function Jn() {
  return ft(Pa, Vt);
}
function Du() {
  return Vt;
}
function hl(e, t) {
  return Ks(Pa, e, t);
}
function Ys(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function rC(e) {
  return wd = la = 1, nC = Gn(Pa = e), Vt = 0, [];
}
function oC(e) {
  return Pa = "", e;
}
function Fu(e) {
  return tC(hl(Vt - 1, jh(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function pI(e) {
  for (; (Qe = Jn()) && Qe < 33; )
    Xt();
  return Ys(e) > 2 || Ys(Qe) > 3 ? "" : " ";
}
function hI(e, t) {
  for (; --t && Xt() && !(Qe < 48 || Qe > 102 || Qe > 57 && Qe < 65 || Qe > 70 && Qe < 97); )
    ;
  return hl(e, Du() + (t < 6 && Jn() == 32 && Xt() == 32));
}
function jh(e) {
  for (; Xt(); )
    switch (Qe) {
      case e:
        return Vt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && jh(Qe);
        break;
      case 40:
        e === 41 && jh(e);
        break;
      case 92:
        Xt();
        break;
    }
  return Vt;
}
function mI(e, t) {
  for (; Xt() && e + Qe !== 57; )
    if (e + Qe === 84 && Jn() === 47)
      break;
  return "/*" + hl(t, Vt - 1) + "*" + xd(e === 47 ? e : Xt());
}
function vI(e) {
  for (; !Ys(Jn()); )
    Xt();
  return hl(e, Vt);
}
function gI(e) {
  return oC(Lu("", null, null, null, [""], e = rC(e), 0, [0], e));
}
function Lu(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, p = 0, g = 0, y = 1, S = 1, h = 1, m = 0, b = "", x = o, k = i, P = r, E = b; S; )
    switch (g = m, m = Xt()) {
      case 40:
        if (g != 108 && ft(E, d - 1) == 58) {
          Lh(E += ye(Fu(m), "&", "&\f"), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Fu(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += pI(g);
        break;
      case 92:
        E += hI(Du() - 1, 7);
        continue;
      case 47:
        switch (Jn()) {
          case 42:
          case 47:
            Jl(yI(mI(Xt(), Du()), t, n), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * y:
        s[u++] = Gn(E) * h;
      case 125 * y:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            h == -1 && (E = ye(E, /\f/g, "")), p > 0 && Gn(E) - d && Jl(p > 32 ? Ty(E + ";", r, n, d - 1) : Ty(ye(E, " ", "") + ";", r, n, d - 2), l);
            break;
          case 59:
            E += ";";
          default:
            if (Jl(P = Ey(E, t, n, u, c, o, s, b, x = [], k = [], d), i), m === 123)
              if (c === 0)
                Lu(E, t, P, P, x, i, d, s, k);
              else
                switch (f === 99 && ft(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Lu(e, P, P, r && Jl(Ey(e, P, P, 0, 0, o, s, b, o, x = [], d), k), o, k, d, s, r ? x : k);
                    break;
                  default:
                    Lu(E, P, P, P, [""], k, 0, s, k);
                }
        }
        u = c = p = 0, y = h = 1, b = E = "", d = a;
        break;
      case 58:
        d = 1 + Gn(E), p = g;
      default:
        if (y < 1) {
          if (m == 123)
            --y;
          else if (m == 125 && y++ == 0 && fI() == 125)
            continue;
        }
        switch (E += xd(m), m * y) {
          case 38:
            h = c > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            s[u++] = (Gn(E) - 1) * h, h = 1;
            break;
          case 64:
            Jn() === 45 && (E += Fu(Xt())), f = Jn(), c = d = Gn(b = E += vI(Du())), m++;
            break;
          case 45:
            g === 45 && Gn(E) == 2 && (y = 0);
        }
    }
  return i;
}
function Ey(e, t, n, r, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = _v(f), g = 0, y = 0, S = 0; g < r; ++g)
    for (var h = 0, m = Ks(e, d + 1, d = aI(y = a[g])), b = e; h < p; ++h)
      (b = tC(y > 0 ? f[h] + " " + m : ye(m, /&\f/g, f[h]))) && (l[S++] = b);
  return Cd(e, t, n, o === 0 ? Ev : s, l, u, c);
}
function yI(e, t, n) {
  return Cd(e, t, n, Jw, xd(dI()), Ks(e, 2, -2), 0);
}
function Ty(e, t, n, r) {
  return Cd(e, t, n, Tv, Ks(e, 0, r), Ks(e, r + 1, -1), r);
}
function Ki(e, t) {
  for (var n = "", r = _v(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function bI(e, t, n, r) {
  switch (e.type) {
    case iI:
      if (e.children.length)
        break;
    case oI:
    case Tv:
      return e.return = e.return || e.value;
    case Jw:
      return "";
    case eC:
      return e.return = e.value + "{" + Ki(e.children, r) + "}";
    case Ev:
      e.value = e.props.join(",");
  }
  return Gn(n = Ki(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function SI(e) {
  var t = _v(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function xI(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var _y = function(t) {
  var n = /* @__PURE__ */ new WeakMap();
  return function(r) {
    if (n.has(r))
      return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function iC(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var wI = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Jn(), o === 38 && i === 12 && (n[r] = 1), !Ys(i); )
    Xt();
  return hl(t, Vt);
}, CI = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Ys(o)) {
      case 0:
        o === 38 && Jn() === 12 && (n[r] = 1), t[r] += wI(Vt - 1, n, r);
        break;
      case 2:
        t[r] += Fu(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Jn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += xd(o);
    }
  while (o = Xt());
  return t;
}, kI = function(t, n) {
  return oC(CI(rC(t), n));
}, Oy = /* @__PURE__ */ new WeakMap(), PI = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Oy.get(r)) && !o) {
      Oy.set(t, !0);
      for (var i = [], a = kI(n, i), s = r.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, EI = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function aC(e, t) {
  switch (lI(e, t)) {
    case 5103:
      return ge + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ge + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ge + e + Tc + e + St + e + e;
    case 6828:
    case 4268:
      return ge + e + St + e + e;
    case 6165:
      return ge + e + St + "flex-" + e + e;
    case 5187:
      return ge + e + ye(e, /(\w+).+(:[^]+)/, ge + "box-$1$2" + St + "flex-$1$2") + e;
    case 5443:
      return ge + e + St + "flex-item-" + ye(e, /flex-|-self/, "") + e;
    case 4675:
      return ge + e + St + "flex-line-pack" + ye(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ge + e + St + ye(e, "shrink", "negative") + e;
    case 5292:
      return ge + e + St + ye(e, "basis", "preferred-size") + e;
    case 6060:
      return ge + "box-" + ye(e, "-grow", "") + ge + e + St + ye(e, "grow", "positive") + e;
    case 4554:
      return ge + ye(e, /([^-])(transform)/g, "$1" + ge + "$2") + e;
    case 6187:
      return ye(ye(ye(e, /(zoom-|grab)/, ge + "$1"), /(image-set)/, ge + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ye(e, /(image-set\([^]*)/, ge + "$1$`$1");
    case 4968:
      return ye(ye(e, /(.+:)(flex-)?(.*)/, ge + "box-pack:$3" + St + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ge + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ye(e, /(.+)-inline(.+)/, ge + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Gn(e) - 1 - t > 6)
        switch (ft(e, t + 1)) {
          case 109:
            if (ft(e, t + 4) !== 45)
              break;
          case 102:
            return ye(e, /(.+:)(.+)-([^]+)/, "$1" + ge + "$2-$3$1" + Tc + (ft(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Lh(e, "stretch") ? aC(ye(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ft(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ft(e, Gn(e) - 3 - (~Lh(e, "!important") && 10))) {
        case 107:
          return ye(e, ":", ":" + ge) + e;
        case 101:
          return ye(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ge + (ft(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ge + "$2$3$1" + St + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ft(e, t + 11)) {
        case 114:
          return ge + e + St + ye(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ge + e + St + ye(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ge + e + St + ye(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ge + e + St + e + e;
  }
  return e;
}
var TI = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Tv:
        t.return = aC(t.value, t.length);
        break;
      case eC:
        return Ki([Va(t, {
          value: ye(t.value, "@", "@" + ge)
        })], o);
      case Ev:
        if (t.length)
          return cI(t.props, function(i) {
            switch (uI(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Ki([Va(t, {
                  props: [ye(i, /:(read-\w+)/, ":" + Tc + "$1")]
                })], o);
              case "::placeholder":
                return Ki([Va(t, {
                  props: [ye(i, /:(plac\w+)/, ":" + ge + "input-$1")]
                }), Va(t, {
                  props: [ye(i, /:(plac\w+)/, ":" + Tc + "$1")]
                }), Va(t, {
                  props: [ye(i, /:(plac\w+)/, St + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, _I = [TI], OI = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var S = y.getAttribute("data-emotion");
      S.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || _I, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(y) {
      for (var S = y.getAttribute("data-emotion").split(" "), h = 1; h < S.length; h++)
        i[S[h]] = !0;
      s.push(y);
    }
  );
  var l, u = [PI, EI];
  {
    var c, d = [bI, xI(function(y) {
      c.insert(y);
    })], f = SI(u.concat(o, d)), p = function(S) {
      return Ki(gI(S), f);
    };
    l = function(S, h, m, b) {
      c = m, p(S ? S + "{" + h.styles + "}" : h.styles), b && (g.inserted[h.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new rI({
      key: n,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return g.sheet.hydrate(s), g;
};
function q() {
  return q = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, q.apply(this, arguments);
}
var sC = { exports: {} }, Ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt = typeof Symbol == "function" && Symbol.for, Ov = lt ? Symbol.for("react.element") : 60103, Mv = lt ? Symbol.for("react.portal") : 60106, kd = lt ? Symbol.for("react.fragment") : 60107, Pd = lt ? Symbol.for("react.strict_mode") : 60108, Ed = lt ? Symbol.for("react.profiler") : 60114, Td = lt ? Symbol.for("react.provider") : 60109, _d = lt ? Symbol.for("react.context") : 60110, Iv = lt ? Symbol.for("react.async_mode") : 60111, Od = lt ? Symbol.for("react.concurrent_mode") : 60111, Md = lt ? Symbol.for("react.forward_ref") : 60112, Id = lt ? Symbol.for("react.suspense") : 60113, MI = lt ? Symbol.for("react.suspense_list") : 60120, Rd = lt ? Symbol.for("react.memo") : 60115, $d = lt ? Symbol.for("react.lazy") : 60116, II = lt ? Symbol.for("react.block") : 60121, RI = lt ? Symbol.for("react.fundamental") : 60117, $I = lt ? Symbol.for("react.responder") : 60118, AI = lt ? Symbol.for("react.scope") : 60119;
function rn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ov:
        switch (e = e.type, e) {
          case Iv:
          case Od:
          case kd:
          case Ed:
          case Pd:
          case Id:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case _d:
              case Md:
              case $d:
              case Rd:
              case Td:
                return e;
              default:
                return t;
            }
        }
      case Mv:
        return t;
    }
  }
}
function lC(e) {
  return rn(e) === Od;
}
Ce.AsyncMode = Iv;
Ce.ConcurrentMode = Od;
Ce.ContextConsumer = _d;
Ce.ContextProvider = Td;
Ce.Element = Ov;
Ce.ForwardRef = Md;
Ce.Fragment = kd;
Ce.Lazy = $d;
Ce.Memo = Rd;
Ce.Portal = Mv;
Ce.Profiler = Ed;
Ce.StrictMode = Pd;
Ce.Suspense = Id;
Ce.isAsyncMode = function(e) {
  return lC(e) || rn(e) === Iv;
};
Ce.isConcurrentMode = lC;
Ce.isContextConsumer = function(e) {
  return rn(e) === _d;
};
Ce.isContextProvider = function(e) {
  return rn(e) === Td;
};
Ce.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ov;
};
Ce.isForwardRef = function(e) {
  return rn(e) === Md;
};
Ce.isFragment = function(e) {
  return rn(e) === kd;
};
Ce.isLazy = function(e) {
  return rn(e) === $d;
};
Ce.isMemo = function(e) {
  return rn(e) === Rd;
};
Ce.isPortal = function(e) {
  return rn(e) === Mv;
};
Ce.isProfiler = function(e) {
  return rn(e) === Ed;
};
Ce.isStrictMode = function(e) {
  return rn(e) === Pd;
};
Ce.isSuspense = function(e) {
  return rn(e) === Id;
};
Ce.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === kd || e === Od || e === Ed || e === Pd || e === Id || e === MI || typeof e == "object" && e !== null && (e.$$typeof === $d || e.$$typeof === Rd || e.$$typeof === Td || e.$$typeof === _d || e.$$typeof === Md || e.$$typeof === RI || e.$$typeof === $I || e.$$typeof === AI || e.$$typeof === II);
};
Ce.typeOf = rn;
sC.exports = Ce;
var DI = sC.exports, uC = DI, FI = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, LI = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, cC = {};
cC[uC.ForwardRef] = FI;
cC[uC.Memo] = LI;
var jI = !0;
function dC(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var Rv = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  jI === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, $v = function(t, n, r) {
  Rv(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function zI(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var NI = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, VI = /[A-Z]|^ms/g, BI = /_EMO_([^_]+?)_([^]*?)_EMO_/g, fC = function(t) {
  return t.charCodeAt(1) === 45;
}, My = function(t) {
  return t != null && typeof t != "boolean";
}, Yf = /* @__PURE__ */ iC(function(e) {
  return fC(e) ? e : e.replace(VI, "-$&").toLowerCase();
}), Iy = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(BI, function(r, o, i) {
          return Kn = {
            name: o,
            styles: i,
            next: Kn
          }, o;
        });
  }
  return NI[t] !== 1 && !fC(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function qs(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return Kn = {
          name: n.name,
          styles: n.styles,
          next: Kn
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            Kn = {
              name: r.name,
              styles: r.styles,
              next: Kn
            }, r = r.next;
        var o = n.styles + ";";
        return o;
      }
      return WI(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Kn, a = n(e);
        return Kn = i, qs(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function WI(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += qs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : My(a) && (r += Yf(i) + ":" + Iy(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          My(a[s]) && (r += Yf(i) + ":" + Iy(i, a[s]) + ";");
      else {
        var l = qs(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Yf(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var Ry = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Kn, Ad = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Kn = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += qs(r, n, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += qs(r, n, t[s]), o && (i += a[s]);
  Ry.lastIndex = 0;
  for (var l = "", u; (u = Ry.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = zI(i) + l;
  return {
    name: c,
    styles: i,
    next: Kn
  };
}, HI = function(t) {
  return t();
}, pC = g0.useInsertionEffect ? g0.useInsertionEffect : !1, hC = pC || HI, $y = pC || v.useLayoutEffect, Av = {}.hasOwnProperty, mC = /* @__PURE__ */ v.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ OI({
    key: "css"
  }) : null
);
mC.Provider;
var Dv = function(t) {
  return /* @__PURE__ */ v.forwardRef(function(n, r) {
    var o = v.useContext(mC);
    return t(n, o, r);
  });
}, ua = /* @__PURE__ */ v.createContext({}), UI = function(t, n) {
  if (typeof n == "function") {
    var r = n(t);
    return r;
  }
  return q({}, t, n);
}, GI = /* @__PURE__ */ _y(function(e) {
  return _y(function(t) {
    return UI(e, t);
  });
}), KI = function(t) {
  var n = v.useContext(ua);
  return t.theme !== n && (n = GI(n)(t.theme)), /* @__PURE__ */ v.createElement(ua.Provider, {
    value: n
  }, t.children);
}, zh = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", YI = function(t, n) {
  var r = {};
  for (var o in n)
    Av.call(n, o) && (r[o] = n[o]);
  return r[zh] = t, r;
}, qI = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Rv(n, r, o), hC(function() {
    return $v(n, r, o);
  }), null;
}, XI = /* @__PURE__ */ Dv(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[zh], i = [r], a = "";
  typeof e.className == "string" ? a = dC(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = Ad(i, void 0, v.useContext(ua));
  a += t.key + "-" + s.name;
  var l = {};
  for (var u in e)
    Av.call(e, u) && u !== "css" && u !== zh && (l[u] = e[u]);
  return l.ref = n, l.className = a, /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(qI, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ v.createElement(o, l));
}), QI = XI, ee = function(t, n) {
  var r = arguments;
  if (n == null || !Av.call(n, "css"))
    return v.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = QI, i[1] = YI(t, n);
  for (var a = 2; a < o; a++)
    i[a] = r[a];
  return v.createElement.apply(null, i);
}, Dd = /* @__PURE__ */ Dv(function(e, t) {
  var n = e.styles, r = Ad([n], void 0, v.useContext(ua)), o = v.useRef();
  return $y(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), $y(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && $v(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function Fv() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Ad(t);
}
var vC = function() {
  var t = Fv.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, gC = String.raw, yC = gC`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`, ZI = () => /* @__PURE__ */ w.jsx(Dd, { styles: yC }), JI = ({ scope: e = "" }) => /* @__PURE__ */ w.jsx(
  Dd,
  {
    styles: gC`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${yC}
    `
  }
);
function eR(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function nt(e = {}) {
  const {
    name: t,
    strict: n = !0,
    hookName: r = "useContext",
    providerName: o = "Provider",
    errorMessage: i,
    defaultValue: a
  } = e, s = v.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = v.useContext(s);
    if (!c && n) {
      const d = new Error(
        i ?? eR(r, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [tR, nR] = nt({
  strict: !1,
  name: "PortalManagerContext"
});
function bC(e) {
  const { children: t, zIndex: n } = e;
  return /* @__PURE__ */ w.jsx(tR, { value: { zIndex: n }, children: t });
}
bC.displayName = "PortalManager";
var ca = globalThis != null && globalThis.document ? v.useLayoutEffect : v.useEffect, [SC, rR] = nt({
  strict: !1,
  name: "PortalContext"
}), Lv = "chakra-portal", oR = ".chakra-portal", iR = (e) => /* @__PURE__ */ w.jsx(
  "div",
  {
    className: "chakra-portal-zIndex",
    style: {
      position: "absolute",
      zIndex: e.zIndex,
      top: 0,
      left: 0,
      right: 0
      // NB: Don't add `bottom: 0`, it makes the entire app unusable
      // @see https://github.com/chakra-ui/chakra-ui/issues/3201
    },
    children: e.children
  }
), aR = (e) => {
  const { appendToParentPortal: t, children: n } = e, [r, o] = v.useState(null), i = v.useRef(null), [, a] = v.useState({});
  v.useEffect(() => a({}), []);
  const s = rR(), l = nR();
  ca(() => {
    if (!r)
      return;
    const c = r.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = Lv, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [r]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ w.jsx(iR, { zIndex: l == null ? void 0 : l.zIndex, children: n }) : n;
  return i.current ? Sd.createPortal(
    /* @__PURE__ */ w.jsx(SC, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ w.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, sR = (e) => {
  const { children: t, containerRef: n, appendToParentPortal: r } = e, o = n.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = v.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = Lv), l;
  }, [o]), [, s] = v.useState({});
  return ca(() => s({}), []), ca(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? Sd.createPortal(
    /* @__PURE__ */ w.jsx(SC, { value: r ? a : null, children: t }),
    a
  ) : null;
};
function ml(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: n, ...r } = t;
  return n ? /* @__PURE__ */ w.jsx(sR, { containerRef: n, ...r }) : /* @__PURE__ */ w.jsx(aR, { ...r });
}
ml.className = Lv;
ml.selector = oR;
ml.displayName = "Portal";
function Jo() {
  const e = v.useContext(
    ua
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var jv = v.createContext({});
jv.displayName = "ColorModeContext";
function Ea() {
  const e = v.useContext(jv);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function Ay(e, t) {
  const { colorMode: n } = Ea();
  return n === "dark" ? t : e;
}
var eu = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function lR(e = {}) {
  const { preventTransition: t = !0 } = e, n = {
    setDataset: (r) => {
      const o = t ? n.preventTransition() : void 0;
      document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, o == null || o();
    },
    setClassName(r) {
      document.body.classList.add(r ? eu.dark : eu.light), document.body.classList.remove(r ? eu.light : eu.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(r) {
      var o;
      return ((o = n.query().matches) != null ? o : r === "dark") ? "dark" : "light";
    },
    addListener(r) {
      const o = n.query(), i = (a) => {
        r(a.matches ? "dark" : "light");
      };
      return typeof o.addListener == "function" ? o.addListener(i) : o.addEventListener("change", i), () => {
        typeof o.removeListener == "function" ? o.removeListener(i) : o.removeEventListener("change", i);
      };
    },
    preventTransition() {
      const r = document.createElement("style");
      return r.appendChild(
        document.createTextNode(
          "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
        )
      ), document.head.appendChild(r), () => {
        window.getComputedStyle(document.body), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.head.removeChild(r);
          });
        });
      };
    }
  };
  return n;
}
var uR = "chakra-ui-color-mode";
function cR(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document))
        return t;
      let n;
      try {
        n = localStorage.getItem(e) || t;
      } catch {
      }
      return n || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {
      }
    }
  };
}
var dR = cR(uR), Dy = () => {
};
function Fy(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function xC(e) {
  const {
    value: t,
    children: n,
    options: {
      useSystemColorMode: r,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = dR
  } = e, s = o === "dark" ? "dark" : "light", [l, u] = v.useState(
    () => Fy(a, s)
  ), [c, d] = v.useState(
    () => Fy(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: g, addListener: y } = v.useMemo(
    () => lR({ preventTransition: i }),
    [i]
  ), S = o === "system" && !l ? c : l, h = v.useCallback(
    (x) => {
      const k = x === "system" ? f() : x;
      u(k), p(k === "dark"), g(k), a.set(k);
    },
    [a, f, p, g]
  );
  ca(() => {
    o === "system" && d(f());
  }, []), v.useEffect(() => {
    const x = a.get();
    if (x) {
      h(x);
      return;
    }
    if (o === "system") {
      h("system");
      return;
    }
    h(s);
  }, [a, s, o, h]);
  const m = v.useCallback(() => {
    h(S === "dark" ? "light" : "dark");
  }, [S, h]);
  v.useEffect(() => {
    if (r)
      return y(h);
  }, [r, y, h]);
  const b = v.useMemo(
    () => ({
      colorMode: t ?? S,
      toggleColorMode: t ? Dy : m,
      setColorMode: t ? Dy : h,
      forced: t !== void 0
    }),
    [S, m, h, t]
  );
  return /* @__PURE__ */ w.jsx(jv.Provider, { value: b, children: n });
}
xC.displayName = "ColorModeProvider";
var fR = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function pR(e) {
  let t = e;
  return fR.has(t) || (t = "light"), t;
}
function hR(e = {}) {
  const {
    initialColorMode: t = "light",
    type: n = "localStorage",
    storageKey: r = "chakra-ui-color-mode"
  } = e, o = pR(t), i = n === "cookie", a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${r}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${r}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function mR(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ w.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: hR(e) }
    }
  );
}
function vR() {
  const e = Ea(), t = Jo();
  return { ...e, theme: t };
}
var ie = (...e) => e.filter(Boolean).join(" ");
function gR() {
  return !1;
}
function jt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
var vl = (e) => {
  const { condition: t, message: n } = e;
  t && gR() && console.warn(n);
};
function Xn(e, ...t) {
  return yR(e) ? e(...t) : e;
}
var yR = (e) => typeof e == "function", fn = (e) => e ? "" : void 0, qf = (e) => e ? !0 : void 0;
function Le(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
function wC(...e) {
  return function(n) {
    e.forEach((r) => {
      r == null || r(n);
    });
  };
}
var _c = { exports: {} };
_c.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", g = "[object GeneratorFunction]", y = "[object Map]", S = "[object Number]", h = "[object Null]", m = "[object Object]", b = "[object Proxy]", x = "[object RegExp]", k = "[object Set]", P = "[object String]", E = "[object Undefined]", T = "[object WeakMap]", M = "[object ArrayBuffer]", I = "[object DataView]", D = "[object Float32Array]", G = "[object Float64Array]", H = "[object Int8Array]", L = "[object Int16Array]", W = "[object Int32Array]", K = "[object Uint8Array]", $ = "[object Uint8ClampedArray]", A = "[object Uint16Array]", j = "[object Uint32Array]", U = /[\\^$.*+?()[\]{}|]/g, V = /^\[object .+?Constructor\]$/, Y = /^(?:0|[1-9]\d*)$/, z = {};
  z[D] = z[G] = z[H] = z[L] = z[W] = z[K] = z[$] = z[A] = z[j] = !0, z[s] = z[l] = z[M] = z[c] = z[I] = z[d] = z[f] = z[p] = z[y] = z[S] = z[m] = z[x] = z[k] = z[P] = z[T] = !1;
  var te = typeof Kr == "object" && Kr && Kr.Object === Object && Kr, le = typeof self == "object" && self && self.Object === Object && self, ae = te || le || Function("return this")(), se = t && !t.nodeType && t, me = se && !0 && e && !e.nodeType && e, Pe = me && me.exports === se, Je = Pe && te.process, qe = function() {
    try {
      var C = me && me.require && me.require("util").types;
      return C || Je && Je.binding && Je.binding("util");
    } catch {
    }
  }(), an = qe && qe.isTypedArray;
  function En(C, _, R) {
    switch (R.length) {
      case 0:
        return C.call(_);
      case 1:
        return C.call(_, R[0]);
      case 2:
        return C.call(_, R[0], R[1]);
      case 3:
        return C.call(_, R[0], R[1], R[2]);
    }
    return C.apply(_, R);
  }
  function Rr(C, _) {
    for (var R = -1, N = Array(C); ++R < C; )
      N[R] = _(R);
    return N;
  }
  function fe(C) {
    return function(_) {
      return C(_);
    };
  }
  function vt(C, _) {
    return C == null ? void 0 : C[_];
  }
  function Ge(C, _) {
    return function(R) {
      return C(_(R));
    };
  }
  var Ut = Array.prototype, $r = Function.prototype, gt = Object.prototype, Nn = ae["__core-js_shared__"], Ar = $r.toString, sn = gt.hasOwnProperty, oi = function() {
    var C = /[^.]+$/.exec(Nn && Nn.keys && Nn.keys.IE_PROTO || "");
    return C ? "Symbol(src)_1." + C : "";
  }(), Oa = gt.toString, Ol = Ar.call(Object), Ml = RegExp(
    "^" + Ar.call(sn).replace(U, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), go = Pe ? ae.Buffer : void 0, Qg = ae.Symbol, Zg = ae.Uint8Array, Jg = go ? go.allocUnsafe : void 0, e0 = Ge(Object.getPrototypeOf, Object), t0 = Object.create, iT = gt.propertyIsEnumerable, aT = Ut.splice, yo = Qg ? Qg.toStringTag : void 0, Il = function() {
    try {
      var C = ff(Object, "defineProperty");
      return C({}, "", {}), C;
    } catch {
    }
  }(), sT = go ? go.isBuffer : void 0, n0 = Math.max, lT = Date.now, r0 = ff(ae, "Map"), Ma = ff(Object, "create"), uT = /* @__PURE__ */ function() {
    function C() {
    }
    return function(_) {
      if (!So(_))
        return {};
      if (t0)
        return t0(_);
      C.prototype = _;
      var R = new C();
      return C.prototype = void 0, R;
    };
  }();
  function bo(C) {
    var _ = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++_ < R; ) {
      var N = C[_];
      this.set(N[0], N[1]);
    }
  }
  function cT() {
    this.__data__ = Ma ? Ma(null) : {}, this.size = 0;
  }
  function dT(C) {
    var _ = this.has(C) && delete this.__data__[C];
    return this.size -= _ ? 1 : 0, _;
  }
  function fT(C) {
    var _ = this.__data__;
    if (Ma) {
      var R = _[C];
      return R === r ? void 0 : R;
    }
    return sn.call(_, C) ? _[C] : void 0;
  }
  function pT(C) {
    var _ = this.__data__;
    return Ma ? _[C] !== void 0 : sn.call(_, C);
  }
  function hT(C, _) {
    var R = this.__data__;
    return this.size += this.has(C) ? 0 : 1, R[C] = Ma && _ === void 0 ? r : _, this;
  }
  bo.prototype.clear = cT, bo.prototype.delete = dT, bo.prototype.get = fT, bo.prototype.has = pT, bo.prototype.set = hT;
  function ar(C) {
    var _ = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++_ < R; ) {
      var N = C[_];
      this.set(N[0], N[1]);
    }
  }
  function mT() {
    this.__data__ = [], this.size = 0;
  }
  function vT(C) {
    var _ = this.__data__, R = Rl(_, C);
    if (R < 0)
      return !1;
    var N = _.length - 1;
    return R == N ? _.pop() : aT.call(_, R, 1), --this.size, !0;
  }
  function gT(C) {
    var _ = this.__data__, R = Rl(_, C);
    return R < 0 ? void 0 : _[R][1];
  }
  function yT(C) {
    return Rl(this.__data__, C) > -1;
  }
  function bT(C, _) {
    var R = this.__data__, N = Rl(R, C);
    return N < 0 ? (++this.size, R.push([C, _])) : R[N][1] = _, this;
  }
  ar.prototype.clear = mT, ar.prototype.delete = vT, ar.prototype.get = gT, ar.prototype.has = yT, ar.prototype.set = bT;
  function ii(C) {
    var _ = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++_ < R; ) {
      var N = C[_];
      this.set(N[0], N[1]);
    }
  }
  function ST() {
    this.size = 0, this.__data__ = {
      hash: new bo(),
      map: new (r0 || ar)(),
      string: new bo()
    };
  }
  function xT(C) {
    var _ = Al(this, C).delete(C);
    return this.size -= _ ? 1 : 0, _;
  }
  function wT(C) {
    return Al(this, C).get(C);
  }
  function CT(C) {
    return Al(this, C).has(C);
  }
  function kT(C, _) {
    var R = Al(this, C), N = R.size;
    return R.set(C, _), this.size += R.size == N ? 0 : 1, this;
  }
  ii.prototype.clear = ST, ii.prototype.delete = xT, ii.prototype.get = wT, ii.prototype.has = CT, ii.prototype.set = kT;
  function ai(C) {
    var _ = this.__data__ = new ar(C);
    this.size = _.size;
  }
  function PT() {
    this.__data__ = new ar(), this.size = 0;
  }
  function ET(C) {
    var _ = this.__data__, R = _.delete(C);
    return this.size = _.size, R;
  }
  function TT(C) {
    return this.__data__.get(C);
  }
  function _T(C) {
    return this.__data__.has(C);
  }
  function OT(C, _) {
    var R = this.__data__;
    if (R instanceof ar) {
      var N = R.__data__;
      if (!r0 || N.length < n - 1)
        return N.push([C, _]), this.size = ++R.size, this;
      R = this.__data__ = new ii(N);
    }
    return R.set(C, _), this.size = R.size, this;
  }
  ai.prototype.clear = PT, ai.prototype.delete = ET, ai.prototype.get = TT, ai.prototype.has = _T, ai.prototype.set = OT;
  function MT(C, _) {
    var R = mf(C), N = !R && hf(C), pe = !R && !N && l0(C), Ee = !R && !N && !pe && c0(C), Ae = R || N || pe || Ee, ce = Ae ? Rr(C.length, String) : [], De = ce.length;
    for (var ln in C)
      (_ || sn.call(C, ln)) && !(Ae && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ln == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      pe && (ln == "offset" || ln == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Ee && (ln == "buffer" || ln == "byteLength" || ln == "byteOffset") || // Skip index properties.
      a0(ln, De))) && ce.push(ln);
    return ce;
  }
  function cf(C, _, R) {
    (R !== void 0 && !Dl(C[_], R) || R === void 0 && !(_ in C)) && df(C, _, R);
  }
  function IT(C, _, R) {
    var N = C[_];
    (!(sn.call(C, _) && Dl(N, R)) || R === void 0 && !(_ in C)) && df(C, _, R);
  }
  function Rl(C, _) {
    for (var R = C.length; R--; )
      if (Dl(C[R][0], _))
        return R;
    return -1;
  }
  function df(C, _, R) {
    _ == "__proto__" && Il ? Il(C, _, {
      configurable: !0,
      enumerable: !0,
      value: R,
      writable: !0
    }) : C[_] = R;
  }
  var RT = UT();
  function $l(C) {
    return C == null ? C === void 0 ? E : h : yo && yo in Object(C) ? GT(C) : ZT(C);
  }
  function o0(C) {
    return Ia(C) && $l(C) == s;
  }
  function $T(C) {
    if (!So(C) || XT(C))
      return !1;
    var _ = gf(C) ? Ml : V;
    return _.test(n_(C));
  }
  function AT(C) {
    return Ia(C) && u0(C.length) && !!z[$l(C)];
  }
  function DT(C) {
    if (!So(C))
      return QT(C);
    var _ = s0(C), R = [];
    for (var N in C)
      N == "constructor" && (_ || !sn.call(C, N)) || R.push(N);
    return R;
  }
  function i0(C, _, R, N, pe) {
    C !== _ && RT(_, function(Ee, Ae) {
      if (pe || (pe = new ai()), So(Ee))
        FT(C, _, Ae, R, i0, N, pe);
      else {
        var ce = N ? N(pf(C, Ae), Ee, Ae + "", C, _, pe) : void 0;
        ce === void 0 && (ce = Ee), cf(C, Ae, ce);
      }
    }, d0);
  }
  function FT(C, _, R, N, pe, Ee, Ae) {
    var ce = pf(C, R), De = pf(_, R), ln = Ae.get(De);
    if (ln) {
      cf(C, R, ln);
      return;
    }
    var Gt = Ee ? Ee(ce, De, R + "", C, _, Ae) : void 0, Ra = Gt === void 0;
    if (Ra) {
      var yf = mf(De), bf = !yf && l0(De), p0 = !yf && !bf && c0(De);
      Gt = De, yf || bf || p0 ? mf(ce) ? Gt = ce : r_(ce) ? Gt = BT(ce) : bf ? (Ra = !1, Gt = zT(De, !0)) : p0 ? (Ra = !1, Gt = VT(De, !0)) : Gt = [] : o_(De) || hf(De) ? (Gt = ce, hf(ce) ? Gt = i_(ce) : (!So(ce) || gf(ce)) && (Gt = KT(De))) : Ra = !1;
    }
    Ra && (Ae.set(De, Gt), pe(Gt, De, N, Ee, Ae), Ae.delete(De)), cf(C, R, Gt);
  }
  function LT(C, _) {
    return e_(JT(C, _, f0), C + "");
  }
  var jT = Il ? function(C, _) {
    return Il(C, "toString", {
      configurable: !0,
      enumerable: !1,
      value: s_(_),
      writable: !0
    });
  } : f0;
  function zT(C, _) {
    if (_)
      return C.slice();
    var R = C.length, N = Jg ? Jg(R) : new C.constructor(R);
    return C.copy(N), N;
  }
  function NT(C) {
    var _ = new C.constructor(C.byteLength);
    return new Zg(_).set(new Zg(C)), _;
  }
  function VT(C, _) {
    var R = _ ? NT(C.buffer) : C.buffer;
    return new C.constructor(R, C.byteOffset, C.length);
  }
  function BT(C, _) {
    var R = -1, N = C.length;
    for (_ || (_ = Array(N)); ++R < N; )
      _[R] = C[R];
    return _;
  }
  function WT(C, _, R, N) {
    var pe = !R;
    R || (R = {});
    for (var Ee = -1, Ae = _.length; ++Ee < Ae; ) {
      var ce = _[Ee], De = N ? N(R[ce], C[ce], ce, R, C) : void 0;
      De === void 0 && (De = C[ce]), pe ? df(R, ce, De) : IT(R, ce, De);
    }
    return R;
  }
  function HT(C) {
    return LT(function(_, R) {
      var N = -1, pe = R.length, Ee = pe > 1 ? R[pe - 1] : void 0, Ae = pe > 2 ? R[2] : void 0;
      for (Ee = C.length > 3 && typeof Ee == "function" ? (pe--, Ee) : void 0, Ae && YT(R[0], R[1], Ae) && (Ee = pe < 3 ? void 0 : Ee, pe = 1), _ = Object(_); ++N < pe; ) {
        var ce = R[N];
        ce && C(_, ce, N, Ee);
      }
      return _;
    });
  }
  function UT(C) {
    return function(_, R, N) {
      for (var pe = -1, Ee = Object(_), Ae = N(_), ce = Ae.length; ce--; ) {
        var De = Ae[C ? ce : ++pe];
        if (R(Ee[De], De, Ee) === !1)
          break;
      }
      return _;
    };
  }
  function Al(C, _) {
    var R = C.__data__;
    return qT(_) ? R[typeof _ == "string" ? "string" : "hash"] : R.map;
  }
  function ff(C, _) {
    var R = vt(C, _);
    return $T(R) ? R : void 0;
  }
  function GT(C) {
    var _ = sn.call(C, yo), R = C[yo];
    try {
      C[yo] = void 0;
      var N = !0;
    } catch {
    }
    var pe = Oa.call(C);
    return N && (_ ? C[yo] = R : delete C[yo]), pe;
  }
  function KT(C) {
    return typeof C.constructor == "function" && !s0(C) ? uT(e0(C)) : {};
  }
  function a0(C, _) {
    var R = typeof C;
    return _ = _ ?? a, !!_ && (R == "number" || R != "symbol" && Y.test(C)) && C > -1 && C % 1 == 0 && C < _;
  }
  function YT(C, _, R) {
    if (!So(R))
      return !1;
    var N = typeof _;
    return (N == "number" ? vf(R) && a0(_, R.length) : N == "string" && _ in R) ? Dl(R[_], C) : !1;
  }
  function qT(C) {
    var _ = typeof C;
    return _ == "string" || _ == "number" || _ == "symbol" || _ == "boolean" ? C !== "__proto__" : C === null;
  }
  function XT(C) {
    return !!oi && oi in C;
  }
  function s0(C) {
    var _ = C && C.constructor, R = typeof _ == "function" && _.prototype || gt;
    return C === R;
  }
  function QT(C) {
    var _ = [];
    if (C != null)
      for (var R in Object(C))
        _.push(R);
    return _;
  }
  function ZT(C) {
    return Oa.call(C);
  }
  function JT(C, _, R) {
    return _ = n0(_ === void 0 ? C.length - 1 : _, 0), function() {
      for (var N = arguments, pe = -1, Ee = n0(N.length - _, 0), Ae = Array(Ee); ++pe < Ee; )
        Ae[pe] = N[_ + pe];
      pe = -1;
      for (var ce = Array(_ + 1); ++pe < _; )
        ce[pe] = N[pe];
      return ce[_] = R(Ae), En(C, this, ce);
    };
  }
  function pf(C, _) {
    if (!(_ === "constructor" && typeof C[_] == "function") && _ != "__proto__")
      return C[_];
  }
  var e_ = t_(jT);
  function t_(C) {
    var _ = 0, R = 0;
    return function() {
      var N = lT(), pe = i - (N - R);
      if (R = N, pe > 0) {
        if (++_ >= o)
          return arguments[0];
      } else
        _ = 0;
      return C.apply(void 0, arguments);
    };
  }
  function n_(C) {
    if (C != null) {
      try {
        return Ar.call(C);
      } catch {
      }
      try {
        return C + "";
      } catch {
      }
    }
    return "";
  }
  function Dl(C, _) {
    return C === _ || C !== C && _ !== _;
  }
  var hf = o0(/* @__PURE__ */ function() {
    return arguments;
  }()) ? o0 : function(C) {
    return Ia(C) && sn.call(C, "callee") && !iT.call(C, "callee");
  }, mf = Array.isArray;
  function vf(C) {
    return C != null && u0(C.length) && !gf(C);
  }
  function r_(C) {
    return Ia(C) && vf(C);
  }
  var l0 = sT || l_;
  function gf(C) {
    if (!So(C))
      return !1;
    var _ = $l(C);
    return _ == p || _ == g || _ == u || _ == b;
  }
  function u0(C) {
    return typeof C == "number" && C > -1 && C % 1 == 0 && C <= a;
  }
  function So(C) {
    var _ = typeof C;
    return C != null && (_ == "object" || _ == "function");
  }
  function Ia(C) {
    return C != null && typeof C == "object";
  }
  function o_(C) {
    if (!Ia(C) || $l(C) != m)
      return !1;
    var _ = e0(C);
    if (_ === null)
      return !0;
    var R = sn.call(_, "constructor") && _.constructor;
    return typeof R == "function" && R instanceof R && Ar.call(R) == Ol;
  }
  var c0 = an ? fe(an) : AT;
  function i_(C) {
    return WT(C, d0(C));
  }
  function d0(C) {
    return vf(C) ? MT(C, !0) : DT(C);
  }
  var a_ = HT(function(C, _, R, N) {
    i0(C, _, R, N);
  });
  function s_(C) {
    return function() {
      return C;
    };
  }
  function f0(C) {
    return C;
  }
  function l_() {
    return !1;
  }
  e.exports = a_;
})(_c, _c.exports);
var bR = _c.exports;
const gn = /* @__PURE__ */ ll(bR);
var SR = (e) => /!(important)?$/.test(e), Ly = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, xR = (e, t) => (n) => {
  const r = String(t), o = SR(r), i = Ly(r), a = e ? `${e}.${i}` : i;
  let s = jt(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
  return s = Ly(s), o ? `${s} !important` : s;
};
function zv(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, a) => {
    var s;
    const l = xR(t, i)(a);
    let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l;
    return r && (u = r(u, a)), u;
  };
}
var tu = (...e) => (t) => e.reduce((n, r) => r(n), t);
function un(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return r.transform = zv({
      scale: e,
      transform: t
    }), r;
  };
}
var wR = ({ rtl: e, ltr: t }) => (n) => n.direction === "rtl" ? e : t;
function CR(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: wR(t),
    transform: n ? zv({
      scale: n,
      compose: r
    }) : r
  };
}
var CC = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function kR() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...CC
  ].join(" ");
}
function PR() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...CC
  ].join(" ");
}
var ER = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
}, TR = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function _R(e) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)"
    ].join(", ")
  };
}
var OR = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Nh = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, MR = new Set(Object.values(Nh)), Vh = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), IR = (e) => e.trim();
function RR(e, t) {
  if (e == null || Vh.has(e))
    return e;
  if (!(Bh(e) || Vh.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map(IR).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in Nh ? Nh[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (MR.has(f))
      return f;
    const p = f.indexOf(" "), [g, y] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], S = Bh(y) ? y : y && y.split(" "), h = `colors.${g}`, m = h in t.__cssMap ? t.__cssMap[h].varRef : g;
    return S ? [
      m,
      ...Array.isArray(S) ? S : [S]
    ].join(" ") : m;
  });
  return `${s}(${d.join(", ")})`;
}
var Bh = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), $R = (e, t) => RR(e, t ?? {});
function AR(e) {
  return /^var\(--.+\)$/.test(e);
}
var DR = (e) => {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}, Bn = (e) => (t) => `${e}(${t})`, de = {
  filter(e) {
    return e !== "auto" ? e : ER;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : TR;
  },
  ring(e) {
    return _R(de.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? kR() : e === "auto-gpu" ? PR() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = DR(e);
    return t || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, t) {
    const n = { left: "right", right: "left" };
    return t.direction === "rtl" ? n[e] : e;
  },
  degree(e) {
    if (AR(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: $R,
  blur: Bn("blur"),
  opacity: Bn("opacity"),
  brightness: Bn("brightness"),
  contrast: Bn("contrast"),
  dropShadow: Bn("drop-shadow"),
  grayscale: Bn("grayscale"),
  hueRotate: (e) => Bn("hue-rotate")(de.degree(e)),
  invert: Bn("invert"),
  saturate: Bn("saturate"),
  sepia: Bn("sepia"),
  bgImage(e) {
    return e == null || Bh(e) || Vh.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: n, divide: r } = (t = OR[e]) != null ? t : {}, o = { flexDirection: e };
    return n && (o[n] = 1), r && (o[r] = 1), o;
  }
}, O = {
  borderWidths: un("borderWidths"),
  borderStyles: un("borderStyles"),
  colors: un("colors"),
  borders: un("borders"),
  gradients: un("gradients", de.gradient),
  radii: un("radii", de.px),
  space: un("space", tu(de.vh, de.px)),
  spaceT: un("space", tu(de.vh, de.px)),
  degreeT(e) {
    return { property: e, transform: de.degree };
  },
  prop(e, t, n) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: zv({ scale: t, transform: n })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: un("sizes", tu(de.vh, de.px)),
  sizesT: un("sizes", tu(de.vh, de.fraction)),
  shadows: un("shadows"),
  logical: CR,
  blur: un("blur", de.blur)
}, ju = {
  background: O.colors("background"),
  backgroundColor: O.colors("backgroundColor"),
  backgroundImage: O.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: de.bgClip },
  bgSize: O.prop("backgroundSize"),
  bgPosition: O.prop("backgroundPosition"),
  bg: O.colors("background"),
  bgColor: O.colors("backgroundColor"),
  bgPos: O.prop("backgroundPosition"),
  bgRepeat: O.prop("backgroundRepeat"),
  bgAttachment: O.prop("backgroundAttachment"),
  bgGradient: O.gradients("backgroundImage"),
  bgClip: { transform: de.bgClip }
};
Object.assign(ju, {
  bgImage: ju.backgroundImage,
  bgImg: ju.backgroundImage
});
var ve = {
  border: O.borders("border"),
  borderWidth: O.borderWidths("borderWidth"),
  borderStyle: O.borderStyles("borderStyle"),
  borderColor: O.colors("borderColor"),
  borderRadius: O.radii("borderRadius"),
  borderTop: O.borders("borderTop"),
  borderBlockStart: O.borders("borderBlockStart"),
  borderTopLeftRadius: O.radii("borderTopLeftRadius"),
  borderStartStartRadius: O.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: O.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: O.radii("borderTopRightRadius"),
  borderStartEndRadius: O.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: O.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: O.borders("borderRight"),
  borderInlineEnd: O.borders("borderInlineEnd"),
  borderBottom: O.borders("borderBottom"),
  borderBlockEnd: O.borders("borderBlockEnd"),
  borderBottomLeftRadius: O.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: O.radii("borderBottomRightRadius"),
  borderLeft: O.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: O.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: O.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: O.borders(["borderLeft", "borderRight"]),
  borderInline: O.borders("borderInline"),
  borderY: O.borders(["borderTop", "borderBottom"]),
  borderBlock: O.borders("borderBlock"),
  borderTopWidth: O.borderWidths("borderTopWidth"),
  borderBlockStartWidth: O.borderWidths("borderBlockStartWidth"),
  borderTopColor: O.colors("borderTopColor"),
  borderBlockStartColor: O.colors("borderBlockStartColor"),
  borderTopStyle: O.borderStyles("borderTopStyle"),
  borderBlockStartStyle: O.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: O.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: O.borderWidths("borderBlockEndWidth"),
  borderBottomColor: O.colors("borderBottomColor"),
  borderBlockEndColor: O.colors("borderBlockEndColor"),
  borderBottomStyle: O.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: O.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: O.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: O.borderWidths("borderInlineStartWidth"),
  borderLeftColor: O.colors("borderLeftColor"),
  borderInlineStartColor: O.colors("borderInlineStartColor"),
  borderLeftStyle: O.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: O.borderStyles("borderInlineStartStyle"),
  borderRightWidth: O.borderWidths("borderRightWidth"),
  borderInlineEndWidth: O.borderWidths("borderInlineEndWidth"),
  borderRightColor: O.colors("borderRightColor"),
  borderInlineEndColor: O.colors("borderInlineEndColor"),
  borderRightStyle: O.borderStyles("borderRightStyle"),
  borderInlineEndStyle: O.borderStyles("borderInlineEndStyle"),
  borderTopRadius: O.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: O.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: O.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: O.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(ve, {
  rounded: ve.borderRadius,
  roundedTop: ve.borderTopRadius,
  roundedTopLeft: ve.borderTopLeftRadius,
  roundedTopRight: ve.borderTopRightRadius,
  roundedTopStart: ve.borderStartStartRadius,
  roundedTopEnd: ve.borderStartEndRadius,
  roundedBottom: ve.borderBottomRadius,
  roundedBottomLeft: ve.borderBottomLeftRadius,
  roundedBottomRight: ve.borderBottomRightRadius,
  roundedBottomStart: ve.borderEndStartRadius,
  roundedBottomEnd: ve.borderEndEndRadius,
  roundedLeft: ve.borderLeftRadius,
  roundedRight: ve.borderRightRadius,
  roundedStart: ve.borderInlineStartRadius,
  roundedEnd: ve.borderInlineEndRadius,
  borderStart: ve.borderInlineStart,
  borderEnd: ve.borderInlineEnd,
  borderTopStartRadius: ve.borderStartStartRadius,
  borderTopEndRadius: ve.borderStartEndRadius,
  borderBottomStartRadius: ve.borderEndStartRadius,
  borderBottomEndRadius: ve.borderEndEndRadius,
  borderStartRadius: ve.borderInlineStartRadius,
  borderEndRadius: ve.borderInlineEndRadius,
  borderStartWidth: ve.borderInlineStartWidth,
  borderEndWidth: ve.borderInlineEndWidth,
  borderStartColor: ve.borderInlineStartColor,
  borderEndColor: ve.borderInlineEndColor,
  borderStartStyle: ve.borderInlineStartStyle,
  borderEndStyle: ve.borderInlineEndStyle
});
var FR = {
  color: O.colors("color"),
  textColor: O.colors("color"),
  fill: O.colors("fill"),
  stroke: O.colors("stroke")
}, Wh = {
  boxShadow: O.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: O.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: O.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Wh, {
  shadow: Wh.boxShadow
});
var LR = {
  filter: { transform: de.filter },
  blur: O.blur("--chakra-blur"),
  brightness: O.propT("--chakra-brightness", de.brightness),
  contrast: O.propT("--chakra-contrast", de.contrast),
  hueRotate: O.propT("--chakra-hue-rotate", de.hueRotate),
  invert: O.propT("--chakra-invert", de.invert),
  saturate: O.propT("--chakra-saturate", de.saturate),
  dropShadow: O.propT("--chakra-drop-shadow", de.dropShadow),
  backdropFilter: { transform: de.backdropFilter },
  backdropBlur: O.blur("--chakra-backdrop-blur"),
  backdropBrightness: O.propT(
    "--chakra-backdrop-brightness",
    de.brightness
  ),
  backdropContrast: O.propT("--chakra-backdrop-contrast", de.contrast),
  backdropHueRotate: O.propT(
    "--chakra-backdrop-hue-rotate",
    de.hueRotate
  ),
  backdropInvert: O.propT("--chakra-backdrop-invert", de.invert),
  backdropSaturate: O.propT("--chakra-backdrop-saturate", de.saturate)
}, Oc = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: de.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: O.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: O.space("gap"),
  rowGap: O.space("rowGap"),
  columnGap: O.space("columnGap")
};
Object.assign(Oc, {
  flexDir: Oc.flexDirection
});
var kC = {
  gridGap: O.space("gridGap"),
  gridColumnGap: O.space("gridColumnGap"),
  gridRowGap: O.space("gridRowGap"),
  gridColumn: !0,
  gridRow: !0,
  gridAutoFlow: !0,
  gridAutoColumns: !0,
  gridColumnStart: !0,
  gridColumnEnd: !0,
  gridRowStart: !0,
  gridRowEnd: !0,
  gridAutoRows: !0,
  gridTemplate: !0,
  gridTemplateColumns: !0,
  gridTemplateRows: !0,
  gridTemplateAreas: !0,
  gridArea: !0
}, jR = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: de.outline },
  outlineOffset: !0,
  outlineColor: O.colors("outlineColor")
}, dn = {
  width: O.sizesT("width"),
  inlineSize: O.sizesT("inlineSize"),
  height: O.sizes("height"),
  blockSize: O.sizes("blockSize"),
  boxSize: O.sizes(["width", "height"]),
  minWidth: O.sizes("minWidth"),
  minInlineSize: O.sizes("minInlineSize"),
  minHeight: O.sizes("minHeight"),
  minBlockSize: O.sizes("minBlockSize"),
  maxWidth: O.sizes("maxWidth"),
  maxInlineSize: O.sizes("maxInlineSize"),
  maxHeight: O.sizes("maxHeight"),
  maxBlockSize: O.sizes("maxBlockSize"),
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  overscrollBehavior: !0,
  overscrollBehaviorX: !0,
  overscrollBehaviorY: !0,
  display: !0,
  aspectRatio: !0,
  hideFrom: {
    scale: "breakpoints",
    transform: (e, t) => {
      var n, r, o;
      return { [`@media screen and (min-width: ${(o = (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null ? void 0 : r.minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, t) => {
      var n, r, o;
      return { [`@media screen and (max-width: ${(o = (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null ? void 0 : r._minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: O.propT("float", de.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(dn, {
  w: dn.width,
  h: dn.height,
  minW: dn.minWidth,
  maxW: dn.maxWidth,
  minH: dn.minHeight,
  maxH: dn.maxHeight,
  overscroll: dn.overscrollBehavior,
  overscrollX: dn.overscrollBehaviorX,
  overscrollY: dn.overscrollBehaviorY
});
var zR = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: O.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: O.prop("listStyleImage")
};
function NR(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var VR = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (r, o, i, a) => {
    if (typeof r > "u")
      return e(r, o, i);
    t.has(r) || t.set(r, /* @__PURE__ */ new Map());
    const s = t.get(r);
    if (s.has(o))
      return s.get(o);
    const l = e(r, o, i, a);
    return s.set(o, l), l;
  };
}, BR = VR(NR), WR = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, HR = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Xf = (e, t, n) => {
  const r = {}, o = BR(e, t, {});
  for (const i in o)
    i in n && n[i] != null || (r[i] = o[i]);
  return r;
}, UR = {
  srOnly: {
    transform(e) {
      return e === !0 ? WR : e === "focusable" ? HR : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, n) => Xf(t, `layerStyles.${e}`, n)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, n) => Xf(t, `textStyles.${e}`, n)
  },
  apply: {
    processResult: !0,
    transform: (e, t, n) => Xf(t, e, n)
  }
}, vs = {
  position: !0,
  pos: O.prop("position"),
  zIndex: O.prop("zIndex", "zIndices"),
  inset: O.spaceT("inset"),
  insetX: O.spaceT(["left", "right"]),
  insetInline: O.spaceT("insetInline"),
  insetY: O.spaceT(["top", "bottom"]),
  insetBlock: O.spaceT("insetBlock"),
  top: O.spaceT("top"),
  insetBlockStart: O.spaceT("insetBlockStart"),
  bottom: O.spaceT("bottom"),
  insetBlockEnd: O.spaceT("insetBlockEnd"),
  left: O.spaceT("left"),
  insetInlineStart: O.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: O.spaceT("right"),
  insetInlineEnd: O.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(vs, {
  insetStart: vs.insetInlineStart,
  insetEnd: vs.insetInlineEnd
});
var GR = {
  ring: { transform: de.ring },
  ringColor: O.colors("--chakra-ring-color"),
  ringOffset: O.prop("--chakra-ring-offset-width"),
  ringOffsetColor: O.colors("--chakra-ring-offset-color"),
  ringInset: O.prop("--chakra-ring-inset")
}, Re = {
  margin: O.spaceT("margin"),
  marginTop: O.spaceT("marginTop"),
  marginBlockStart: O.spaceT("marginBlockStart"),
  marginRight: O.spaceT("marginRight"),
  marginInlineEnd: O.spaceT("marginInlineEnd"),
  marginBottom: O.spaceT("marginBottom"),
  marginBlockEnd: O.spaceT("marginBlockEnd"),
  marginLeft: O.spaceT("marginLeft"),
  marginInlineStart: O.spaceT("marginInlineStart"),
  marginX: O.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: O.spaceT("marginInline"),
  marginY: O.spaceT(["marginTop", "marginBottom"]),
  marginBlock: O.spaceT("marginBlock"),
  padding: O.space("padding"),
  paddingTop: O.space("paddingTop"),
  paddingBlockStart: O.space("paddingBlockStart"),
  paddingRight: O.space("paddingRight"),
  paddingBottom: O.space("paddingBottom"),
  paddingBlockEnd: O.space("paddingBlockEnd"),
  paddingLeft: O.space("paddingLeft"),
  paddingInlineStart: O.space("paddingInlineStart"),
  paddingInlineEnd: O.space("paddingInlineEnd"),
  paddingX: O.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: O.space("paddingInline"),
  paddingY: O.space(["paddingTop", "paddingBottom"]),
  paddingBlock: O.space("paddingBlock")
};
Object.assign(Re, {
  m: Re.margin,
  mt: Re.marginTop,
  mr: Re.marginRight,
  me: Re.marginInlineEnd,
  marginEnd: Re.marginInlineEnd,
  mb: Re.marginBottom,
  ml: Re.marginLeft,
  ms: Re.marginInlineStart,
  marginStart: Re.marginInlineStart,
  mx: Re.marginX,
  my: Re.marginY,
  p: Re.padding,
  pt: Re.paddingTop,
  py: Re.paddingY,
  px: Re.paddingX,
  pb: Re.paddingBottom,
  pl: Re.paddingLeft,
  ps: Re.paddingInlineStart,
  paddingStart: Re.paddingInlineStart,
  pr: Re.paddingRight,
  pe: Re.paddingInlineEnd,
  paddingEnd: Re.paddingInlineEnd
});
var KR = {
  textDecorationColor: O.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: O.shadows("textShadow")
}, YR = {
  clipPath: !0,
  transform: O.propT("transform", de.transform),
  transformOrigin: !0,
  translateX: O.spaceT("--chakra-translate-x"),
  translateY: O.spaceT("--chakra-translate-y"),
  skewX: O.degreeT("--chakra-skew-x"),
  skewY: O.degreeT("--chakra-skew-y"),
  scaleX: O.prop("--chakra-scale-x"),
  scaleY: O.prop("--chakra-scale-y"),
  scale: O.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: O.degreeT("--chakra-rotate")
}, qR = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: O.prop("transitionDuration", "transition.duration"),
  transitionProperty: O.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: O.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, XR = {
  fontFamily: O.prop("fontFamily", "fonts"),
  fontSize: O.prop("fontSize", "fontSizes", de.px),
  fontWeight: O.prop("fontWeight", "fontWeights"),
  lineHeight: O.prop("lineHeight", "lineHeights"),
  letterSpacing: O.prop("letterSpacing", "letterSpacings"),
  textAlign: !0,
  fontStyle: !0,
  textIndent: !0,
  wordBreak: !0,
  overflowWrap: !0,
  textOverflow: !0,
  textTransform: !0,
  whiteSpace: !0,
  isTruncated: {
    transform(e) {
      if (e === !0)
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
    }
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
}, QR = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: O.spaceT("scrollMargin"),
  scrollMarginTop: O.spaceT("scrollMarginTop"),
  scrollMarginBottom: O.spaceT("scrollMarginBottom"),
  scrollMarginLeft: O.spaceT("scrollMarginLeft"),
  scrollMarginRight: O.spaceT("scrollMarginRight"),
  scrollMarginX: O.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: O.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: O.spaceT("scrollPadding"),
  scrollPaddingTop: O.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: O.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: O.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: O.spaceT("scrollPaddingRight"),
  scrollPaddingX: O.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: O.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function PC(e) {
  return jt(e) && e.reference ? e.reference : String(e);
}
var Fd = (e, ...t) => t.map(PC).join(` ${e} `).replace(/calc/g, ""), jy = (...e) => `calc(${Fd("+", ...e)})`, zy = (...e) => `calc(${Fd("-", ...e)})`, Hh = (...e) => `calc(${Fd("*", ...e)})`, Ny = (...e) => `calc(${Fd("/", ...e)})`, Vy = (e) => {
  const t = PC(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Hh(t, -1);
}, _o = Object.assign(
  (e) => ({
    add: (...t) => _o(jy(e, ...t)),
    subtract: (...t) => _o(zy(e, ...t)),
    multiply: (...t) => _o(Hh(e, ...t)),
    divide: (...t) => _o(Ny(e, ...t)),
    negate: () => _o(Vy(e)),
    toString: () => e.toString()
  }),
  {
    add: jy,
    subtract: zy,
    multiply: Hh,
    divide: Ny,
    negate: Vy
  }
);
function ZR(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function JR(e) {
  const t = ZR(e.toString());
  return t$(e$(t));
}
function e$(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function t$(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function n$(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function r$(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function o$(e, t = "") {
  return JR(`--${n$(e, t)}`);
}
function J(e, t, n) {
  const r = o$(e, n);
  return {
    variable: r,
    reference: r$(r, t)
  };
}
function i$(e, t) {
  const n = {};
  for (const r of t) {
    if (Array.isArray(r)) {
      const [o, i] = r;
      n[o] = J(`${e}-${o}`, i);
      continue;
    }
    n[r] = J(`${e}-${r}`);
  }
  return n;
}
function a$(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function s$(e) {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function Uh(e) {
  if (e == null)
    return e;
  const { unitless: t } = s$(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var EC = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Nv = (e) => Object.fromEntries(Object.entries(e).sort(EC));
function By(e) {
  const t = Nv(e);
  return Object.assign(Object.values(t), t);
}
function l$(e) {
  const t = Object.keys(Nv(e));
  return new Set(t);
}
function Wy(e) {
  var t;
  if (!e)
    return e;
  e = (t = Uh(e)) != null ? t : e;
  const n = -0.02;
  return typeof e == "number" ? `${e + n}` : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + n}`);
}
function Ja(e, t) {
  const n = ["@media screen"];
  return e && n.push("and", `(min-width: ${Uh(e)})`), t && n.push("and", `(max-width: ${Uh(t)})`), n.join(" ");
}
function u$(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const n = By(e), r = Object.entries(e).sort(EC).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? Wy(d) : void 0, {
      _minW: Wy(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: Ja(null, d),
      minWQuery: Ja(s),
      minMaxQuery: Ja(s, d)
    };
  }), o = l$(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: n,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: Nv(e),
    asArray: By(e),
    details: r,
    get(a) {
      return r.find((s) => s.breakpoint === a);
    },
    media: [
      null,
      ...n.map((a) => Ja(a)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(a) {
      if (!jt(a))
        throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; a$(s) === null; )
        s.pop();
      return s;
    },
    /**
     * Converts the array responsive syntax to object syntax
     *
     * @example
     * toObjectValue([1, 2, 3]) // => { base: 1, sm: 2, md: 3 }
     */
    toObjectValue(a) {
      if (!Array.isArray(a))
        throw new Error("toObjectValue: value must be an array");
      return a.reduce((s, l, u) => {
        const c = i[u];
        return c != null && l != null && (s[c] = l), s;
      }, {});
    }
  };
}
var ut = {
  hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
  focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
  focusVisible: (e, t) => `${e}:focus-visible ${t}`,
  focusWithin: (e, t) => `${e}:focus-within ${t}`,
  active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
  disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
  invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
  checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
  indeterminate: (e, t) => `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
  readOnly: (e, t) => `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
  expanded: (e, t) => `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
  placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`
}, Fr = (e) => TC((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), sr = (e) => TC((t) => e(t, "~ &"), "[data-peer]", ".peer"), TC = (e, ...t) => t.map(e).join(", "), Ld = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: "&:hover, &[data-hover]",
  /**
   * Styles for CSS Selector `&:active`
   */
  _active: "&:active, &[data-active]",
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus: "&:focus, &[data-focus]",
  /**
   * Styles for the highlighted state.
   */
  _highlighted: "&[data-highlighted]",
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: "&:focus-within",
  /**
   * Styles to apply when this element has received focus via tabbing
   * - CSS Selector `&:focus-visible`
   */
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   * - `&[disabled]`
   */
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: "&::before",
  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: "&::after",
  /**
   * Styles for CSS selector `&:empty`
   */
  _empty: "&:empty",
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: "&[aria-checked=true], &[data-checked]",
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: "&[data-valid], &[data-state=valid]",
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: "&[data-loading], &[aria-busy=true]",
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: "&[aria-selected=true], &[data-selected]",
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: "&[hidden], &[data-hidden]",
  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  _autofill: "&:-webkit-autofill",
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: "&:nth-of-type(even)",
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: "&:nth-of-type(odd)",
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: "&:first-of-type",
  /**
   * Styles for CSS selector `&::first-letter`
   *
   * NOTE: This selector is only applied for block-level elements and not preceded by an image or table.
   * @example
   * ```jsx
   * <Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>
   * ```
   */
  _firstLetter: "&::first-letter",
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: "&:last-of-type",
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: "&:not(:first-of-type)",
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: "&:not(:last-of-type)",
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: "&:visited",
  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: "&[aria-current=page]",
  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: "&[aria-current=step]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
   */
  _groupHover: Fr(ut.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: sr(ut.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: Fr(ut.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: sr(ut.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: Fr(ut.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: sr(ut.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: Fr(ut.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: sr(ut.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: Fr(ut.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: sr(ut.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: Fr(ut.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: sr(ut.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: Fr(ut.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: sr(ut.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: Fr(ut.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: sr(ut.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: sr(ut.placeholderShown),
  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  _placeholder: "&::placeholder",
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  _placeholderShown: "&:placeholder-shown",
  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: "&:fullscreen",
  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: "&::selection",
  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when a parent element or this element has `dir="rtl"`
   */
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  /**
   * Styles for CSS Selector `[dir=ltr] &`
   * It is applied when a parent element or this element has `dir="ltr"`
   */
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * It is used when the user has requested the system use a light or dark color theme.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",
  /**
   * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
   * It is used when the user has requested the system to reduce the amount of animations.
   */
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  /**
   * Styles for the CSS Selector `&[data-orientation=horizontal]`
   */
  _horizontal: "&[data-orientation=horizontal]",
  /**
   * Styles for the CSS Selector `&[data-orientation=vertical]`
   */
  _vertical: "&[data-orientation=vertical]"
}, _C = Object.keys(
  Ld
);
function Hy(e, t) {
  return J(String(e).replace(/\./g, "-"), void 0, t);
}
function c$(e, t) {
  let n = {};
  const r = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = Hy(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...g] = f, y = `${p}.-${g.join(".")}`, S = _o.negate(s), h = _o.negate(u);
        r[y] = {
          value: S,
          var: l,
          varRef: h
        };
      }
      n[l] = s, r[o] = {
        value: s,
        var: l,
        varRef: u
      };
      continue;
    }
    const c = (f) => {
      const g = [String(o).split(".")[0], f].join(".");
      if (!e[g])
        return f;
      const { reference: S } = Hy(g, t == null ? void 0 : t.cssVarPrefix);
      return S;
    }, d = jt(s) ? s : { default: s };
    n = gn(
      n,
      Object.entries(d).reduce(
        (f, [p, g]) => {
          var y, S;
          if (!g)
            return f;
          const h = c(`${g}`);
          if (p === "default")
            return f[l] = h, f;
          const m = (S = (y = Ld) == null ? void 0 : y[p]) != null ? S : p;
          return f[m] = { [l]: h }, f;
        },
        {}
      )
    ), r[o] = {
      value: u,
      var: l,
      varRef: u
    };
  }
  return {
    cssVars: n,
    cssMap: r
  };
}
function d$(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t)
    r in n && delete n[r];
  return n;
}
function f$(e, t) {
  const n = {};
  for (const r of t)
    r in e && (n[r] = e[r]);
  return n;
}
function p$(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function Uy(e, t, n = {}) {
  const { stop: r, getKey: o } = n;
  function i(a, s = []) {
    var l;
    if (p$(a) || Array.isArray(a)) {
      const u = {};
      for (const [c, d] of Object.entries(a)) {
        const f = (l = o == null ? void 0 : o(c)) != null ? l : c, p = [...s, f];
        if (r != null && r(a, p))
          return t(a, s);
        u[f] = i(d, p);
      }
      return u;
    }
    return t(a, s);
  }
  return i(e);
}
var h$ = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints"
];
function m$(e) {
  return f$(e, h$);
}
function v$(e) {
  return e.semanticTokens;
}
function g$(e) {
  const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e;
  return o;
}
var y$ = (e) => _C.includes(e) || e === "default";
function b$({
  tokens: e,
  semanticTokens: t
}) {
  const n = {};
  return Uy(e, (r, o) => {
    r != null && (n[o.join(".")] = { isSemantic: !1, value: r });
  }), Uy(
    t,
    (r, o) => {
      r != null && (n[o.join(".")] = { isSemantic: !0, value: r });
    },
    {
      stop: (r) => Object.keys(r).every(y$)
    }
  ), n;
}
function S$(e) {
  var t;
  const n = g$(e), r = m$(n), o = v$(n), i = b$({ tokens: r, semanticTokens: o }), a = (t = n.config) == null ? void 0 : t.cssVarPrefix, {
    /**
     * This is more like a dictionary of tokens users will type `green.500`,
     * and their equivalent css variable.
     */
    cssMap: s,
    /**
     * The extracted css variables will be stored here, and used in
     * the emotion's <Global/> component to attach variables to `:root`
     */
    cssVars: l
  } = c$(i, { cssVarPrefix: a });
  return Object.assign(n, {
    __cssVars: { ...{
      "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-ring-offset-width": "0px",
      "--chakra-ring-offset-color": "#fff",
      "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
      "--chakra-ring-offset-shadow": "0 0 #0000",
      "--chakra-ring-shadow": "0 0 #0000",
      "--chakra-space-x-reverse": "0",
      "--chakra-space-y-reverse": "0"
    }, ...l },
    __cssMap: s,
    __breakpoints: u$(n.breakpoints)
  }), n;
}
var Vv = gn(
  {},
  ju,
  ve,
  FR,
  Oc,
  dn,
  LR,
  GR,
  jR,
  kC,
  UR,
  vs,
  Wh,
  Re,
  QR,
  XR,
  KR,
  YR,
  zR,
  qR
);
Object.assign({}, Re, dn, Oc, kC, vs);
var x$ = [...Object.keys(Vv), ..._C], w$ = { ...Vv, ...Ld }, C$ = (e) => e in w$, k$ = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = Xn(e[a], t);
    if (s == null)
      continue;
    if (s = jt(s) && n(s) ? r(s) : s, !Array.isArray(s)) {
      i[a] = s;
      continue;
    }
    const l = s.slice(0, o.length).length;
    for (let u = 0; u < l; u += 1) {
      const c = o == null ? void 0 : o[u];
      if (!c) {
        i[a] = s[u];
        continue;
      }
      i[c] = i[c] || {}, s[u] != null && (i[c][a] = s[u]);
    }
  }
  return i;
};
function P$(e) {
  const t = [];
  let n = "", r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (r = !0, n += i) : i === ")" ? (r = !1, n += i) : i === "," && !r ? (t.push(n), n = "") : n += i;
  }
  return n = n.trim(), n && t.push(n), t;
}
function E$(e) {
  return /^var\(--.+\)$/.test(e);
}
var T$ = (e, t) => e.startsWith("--") && typeof t == "string" && !E$(t), _$ = (e, t) => {
  var n, r;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, i = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [a, s] = P$(t);
  return t = (r = (n = o(a)) != null ? n : i(s)) != null ? r : i(t), t;
};
function O$(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e, o = (i, a = !1) => {
    var s, l, u;
    const c = Xn(i, r), d = k$(c)(r);
    let f = {};
    for (let p in d) {
      const g = d[p];
      let y = Xn(g, r);
      p in n && (p = n[p]), T$(p, y) && (y = _$(r, y));
      let S = t[p];
      if (S === !0 && (S = { property: p }), jt(y)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = gn(
          {},
          f[p],
          o(y, !0)
        );
        continue;
      }
      let h = (u = (l = S == null ? void 0 : S.transform) == null ? void 0 : l.call(S, y, r, c)) != null ? u : y;
      h = S != null && S.processResult ? o(h, !0) : h;
      const m = Xn(S == null ? void 0 : S.property, r);
      if (!a && (S != null && S.static)) {
        const b = Xn(S.static, r);
        f = gn({}, f, b);
      }
      if (m && Array.isArray(m)) {
        for (const b of m)
          f[b] = h;
        continue;
      }
      if (m) {
        m === "&" && jt(h) ? f = gn({}, f, h) : f[m] = h;
        continue;
      }
      if (jt(h)) {
        f = gn({}, f, h);
        continue;
      }
      f[p] = h;
    }
    return f;
  };
  return o;
}
var OC = (e) => (t) => O$({
  theme: t,
  pseudos: Ld,
  configs: Vv
})(e);
function Me(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function M$(e, t) {
  if (Array.isArray(e))
    return e;
  if (jt(e))
    return t(e);
  if (e != null)
    return [e];
}
function I$(e, t) {
  for (let n = t + 1; n < e.length; n++)
    if (e[n] != null)
      return n;
  return -1;
}
function R$(e) {
  const t = e.__breakpoints;
  return function(r, o, i, a) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = M$(i, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, p = !!r.parts;
    for (let g = 0; g < d; g++) {
      const y = t.details[g], S = t.details[I$(c, g)], h = Ja(y.minW, S == null ? void 0 : S._minW), m = Xn((s = r[o]) == null ? void 0 : s[c[g]], a);
      if (m) {
        if (p) {
          (l = r.parts) == null || l.forEach((b) => {
            gn(u, {
              [b]: f ? m[b] : { [h]: m[b] }
            });
          });
          continue;
        }
        if (!p) {
          f ? gn(u, m) : u[h] = m;
          continue;
        }
        u[h] = m;
      }
    }
    return u;
  };
}
function $$(e) {
  return (t) => {
    var n;
    const { variant: r, size: o, theme: i } = t, a = R$(i);
    return gn(
      {},
      Xn((n = e.baseStyle) != null ? n : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", r, t)
    );
  };
}
function on(e) {
  return d$(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var A$ = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices"
];
function D$(e) {
  return jt(e) ? A$.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var F$ = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, L$ = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, j$ = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, z$ = {
  property: F$,
  easing: L$,
  duration: j$
}, N$ = z$, V$ = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
}, B$ = V$, W$ = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, H$ = W$, U$ = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, G$ = U$, K$ = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
}, Y$ = K$, q$ = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, X$ = q$, Q$ = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
}, Z$ = Q$, J$ = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, eA = J$, tA = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
}, MC = tA, IC = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
}, nA = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
}, rA = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, oA = {
  ...IC,
  ...nA,
  container: rA
}, RC = oA, iA = {
  breakpoints: G$,
  zIndices: B$,
  radii: X$,
  blur: eA,
  colors: Y$,
  ...MC,
  sizes: RC,
  shadows: Z$,
  space: IC,
  borders: H$,
  transition: N$
}, { defineMultiStyleConfig: aA, definePartsStyle: es } = Me([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), cr = J("stepper-indicator-size"), Ti = J("stepper-icon-size"), _i = J("stepper-title-font-size"), ts = J("stepper-description-font-size"), Ba = J("stepper-accent-color"), sA = es(({ colorScheme: e }) => ({
  stepper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "4",
    "&[data-orientation=vertical]": {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    "&[data-orientation=horizontal]": {
      flexDirection: "row",
      alignItems: "center"
    },
    [Ba.variable]: `colors.${e}.500`,
    _dark: {
      [Ba.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: _i.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: ts.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: _i.reference
  },
  step: {
    flexShrink: 0,
    position: "relative",
    display: "flex",
    gap: "2",
    "&[data-orientation=horizontal]": {
      alignItems: "center"
    },
    flex: "1",
    "&:last-of-type:not([data-stretch])": {
      flex: "initial"
    }
  },
  icon: {
    flexShrink: 0,
    width: Ti.reference,
    height: Ti.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: cr.reference,
    height: cr.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: Ba.reference
    },
    "&[data-status=complete]": {
      bg: Ba.reference,
      color: "chakra-inverse-text"
    },
    "&[data-status=incomplete]": {
      borderWidth: "2px"
    }
  },
  separator: {
    bg: "chakra-border-color",
    flex: "1",
    "&[data-status=complete]": {
      bg: Ba.reference
    },
    "&[data-orientation=horizontal]": {
      width: "100%",
      height: "2px",
      marginStart: "2"
    },
    "&[data-orientation=vertical]": {
      width: "2px",
      position: "absolute",
      height: "100%",
      maxHeight: `calc(100% - ${cr.reference} - 8px)`,
      top: `calc(${cr.reference} + 4px)`,
      insetStart: `calc(${cr.reference} / 2 - 1px)`
    }
  }
})), lA = aA({
  baseStyle: sA,
  sizes: {
    xs: es({
      stepper: {
        [cr.variable]: "sizes.4",
        [Ti.variable]: "sizes.3",
        [_i.variable]: "fontSizes.xs",
        [ts.variable]: "fontSizes.xs"
      }
    }),
    sm: es({
      stepper: {
        [cr.variable]: "sizes.6",
        [Ti.variable]: "sizes.4",
        [_i.variable]: "fontSizes.sm",
        [ts.variable]: "fontSizes.xs"
      }
    }),
    md: es({
      stepper: {
        [cr.variable]: "sizes.8",
        [Ti.variable]: "sizes.5",
        [_i.variable]: "fontSizes.md",
        [ts.variable]: "fontSizes.sm"
      }
    }),
    lg: es({
      stepper: {
        [cr.variable]: "sizes.10",
        [Ti.variable]: "sizes.6",
        [_i.variable]: "fontSizes.lg",
        [ts.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function xe(e, t = {}) {
  let n = !1;
  function r() {
    if (!n) {
      n = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...c) {
    r();
    for (const d of c)
      t[d] = l(d);
    return xe(e, t);
  }
  function i(...c) {
    for (const d of c)
      d in t || (t[d] = l(d));
    return xe(e, t);
  }
  function a() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.selector])
    );
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.className])
    );
  }
  function l(c) {
    const p = `chakra-${(["container", "root"].includes(c ?? "") ? [e] : [e, c]).filter(Boolean).join("__")}`;
    return {
      className: p,
      selector: `.${p}`,
      toString: () => c
    };
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: a,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {}
  };
}
var uA = xe("accordion").parts("root", "container", "button", "panel").extend("icon"), cA = xe("alert").parts("title", "description", "container").extend("icon", "spinner"), dA = xe("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), fA = xe("breadcrumb").parts("link", "item", "container").extend("separator");
xe("button").parts();
var pA = xe("checkbox").parts("control", "icon", "container").extend("label");
xe("progress").parts("track", "filledTrack").extend("label");
var hA = xe("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), mA = xe("editable").parts(
  "preview",
  "input",
  "textarea"
), vA = xe("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), gA = xe("formError").parts("text", "icon"), yA = xe("input").parts(
  "addon",
  "field",
  "element",
  "group"
), bA = xe("list").parts("container", "item", "icon"), SA = xe("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), xA = xe("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), wA = xe("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
xe("pininput").parts("field");
var CA = xe("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), kA = xe("progress").parts(
  "label",
  "filledTrack",
  "track"
), PA = xe("radio").parts(
  "container",
  "control",
  "label"
), EA = xe("select").parts("field", "icon"), TA = xe("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), _A = xe("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), OA = xe("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), MA = xe("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), IA = xe("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), RA = xe("tag").parts(
  "container",
  "label",
  "closeButton"
), $A = xe("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
xe("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function Ao(e, t, n) {
  return Math.min(Math.max(e, n), t);
}
class AA extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var ns = AA;
function Bv(e) {
  if (typeof e != "string")
    throw new ns(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = BA.test(e) ? LA(e) : e;
  const n = jA.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(Xs(s, 2), 16)), parseInt(Xs(a[3] || "f", 2), 16) / 255];
  }
  const r = zA.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = NA.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = VA.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (Ao(0, 100, s) !== s)
      throw new ns(e);
    if (Ao(0, 100, l) !== l)
      throw new ns(e);
    return [...WA(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new ns(e);
}
function DA(e) {
  let t = 5381, n = e.length;
  for (; n; )
    t = t * 33 ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const Gy = (e) => parseInt(e.replace(/_/g, ""), 36), FA = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const n = Gy(t.substring(0, 3)), r = Gy(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - r.length; i++)
    o += "0";
  return e[n] = `${o}${r}`, e;
}, {});
function LA(e) {
  const t = e.toLowerCase().trim(), n = FA[DA(t)];
  if (!n)
    throw new ns(e);
  return `#${n}`;
}
const Xs = (e, t) => Array.from(Array(t)).map(() => e).join(""), jA = new RegExp(`^#${Xs("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), zA = new RegExp(`^#${Xs("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), NA = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Xs(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), VA = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, BA = /^[a-z]+$/i, Ky = (e) => Math.round(e * 255), WA = (e, t, n) => {
  let r = n / 100;
  if (t === 0)
    return [r, r, r].map(Ky);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * r - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = r - i / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(Ky);
};
function HA(e, t, n, r) {
  return `rgba(${Ao(0, 255, e).toFixed()}, ${Ao(0, 255, t).toFixed()}, ${Ao(0, 255, n).toFixed()}, ${parseFloat(Ao(0, 1, r).toFixed(3))})`;
}
function UA(e, t) {
  const [n, r, o, i] = Bv(e);
  return HA(n, r, o, i - t);
}
function GA(e) {
  const [t, n, r, o] = Bv(e);
  let i = (a) => {
    const s = Ao(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(n)}${i(r)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function KA(e, t, n, r, o) {
  for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++)
    e = e ? e[t[r]] : o;
  return e === o ? n : e;
}
var YA = (e) => Object.keys(e).length === 0, Et = (e, t, n) => {
  const r = KA(e, `colors.${t}`, t);
  try {
    return GA(r), r;
  } catch {
    return n ?? "#000000";
  }
}, qA = (e) => {
  const [t, n, r] = Bv(e);
  return (t * 299 + n * 587 + r * 114) / 1e3;
}, XA = (e) => (t) => {
  const n = Et(t, e);
  return qA(n) < 128 ? "dark" : "light";
}, QA = (e) => (t) => XA(e)(t) === "dark", da = (e, t) => (n) => {
  const r = Et(n, e);
  return UA(r, 1 - t);
};
function Yy(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`
  };
}
var ZA = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function JA(e) {
  const t = ZA();
  return !e || YA(e) ? t : e.string && e.colors ? t5(e.string, e.colors) : e.string && !e.colors ? e5(e.string) : e.colors && !e.string ? n5(e.colors) : t;
}
function e5(e) {
  let t = 0;
  if (e.length === 0)
    return t.toString();
  for (let r = 0; r < e.length; r += 1)
    t = e.charCodeAt(r) + ((t << 5) - t), t = t & t;
  let n = "#";
  for (let r = 0; r < 3; r += 1) {
    const o = t >> r * 8 & 255;
    n += `00${o.toString(16)}`.substr(-2);
  }
  return n;
}
function t5(e, t) {
  let n = 0;
  if (e.length === 0)
    return t[0];
  for (let r = 0; r < e.length; r += 1)
    n = e.charCodeAt(r) + ((n << 5) - n), n = n & n;
  return n = (n % t.length + t.length) % t.length, t[n];
}
function n5(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function Q(e, t) {
  return (n) => n.colorMode === "dark" ? t : e;
}
function Wv(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? t === "vertical" ? n : r : {};
}
function $C(e) {
  return jt(e) && e.reference ? e.reference : String(e);
}
var jd = (e, ...t) => t.map($C).join(` ${e} `).replace(/calc/g, ""), qy = (...e) => `calc(${jd("+", ...e)})`, Xy = (...e) => `calc(${jd("-", ...e)})`, Gh = (...e) => `calc(${jd("*", ...e)})`, Qy = (...e) => `calc(${jd("/", ...e)})`, Zy = (e) => {
  const t = $C(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Gh(t, -1);
}, dr = Object.assign(
  (e) => ({
    add: (...t) => dr(qy(e, ...t)),
    subtract: (...t) => dr(Xy(e, ...t)),
    multiply: (...t) => dr(Gh(e, ...t)),
    divide: (...t) => dr(Qy(e, ...t)),
    negate: () => dr(Zy(e)),
    toString: () => e.toString()
  }),
  {
    add: qy,
    subtract: Xy,
    multiply: Gh,
    divide: Qy,
    negate: Zy
  }
);
function r5(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function o5(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function AC(e) {
  const t = o5(e.toString());
  return t.includes("\\.") ? e : r5(e) ? t.replace(".", "\\.") : e;
}
function i5(e, t = "") {
  return [t, AC(e)].filter(Boolean).join("-");
}
function a5(e, t) {
  return `var(${AC(e)}${t ? `, ${t}` : ""})`;
}
function s5(e, t = "") {
  return `--${i5(e, t)}`;
}
function rt(e, t) {
  const n = s5(e, t == null ? void 0 : t.prefix);
  return {
    variable: n,
    reference: a5(n, l5(t == null ? void 0 : t.fallback))
  };
}
function l5(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: u5, definePartsStyle: zu } = Me(OA.keys), gs = rt("switch-track-width"), jo = rt("switch-track-height"), Qf = rt("switch-track-diff"), c5 = dr.subtract(gs, jo), Kh = rt("switch-thumb-x"), Wa = rt("switch-bg"), d5 = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [gs.reference],
    height: [jo.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [Wa.variable]: "colors.gray.300",
    _dark: {
      [Wa.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [Wa.variable]: `colors.${t}.500`,
      _dark: {
        [Wa.variable]: `colors.${t}.200`
      }
    },
    bg: Wa.reference
  };
}, f5 = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [jo.reference],
  height: [jo.reference],
  _checked: {
    transform: `translateX(${Kh.reference})`
  }
}, p5 = zu((e) => ({
  container: {
    [Qf.variable]: c5,
    [Kh.variable]: Qf.reference,
    _rtl: {
      [Kh.variable]: dr(Qf).negate().toString()
    }
  },
  track: d5(e),
  thumb: f5
})), h5 = {
  sm: zu({
    container: {
      [gs.variable]: "1.375rem",
      [jo.variable]: "sizes.3"
    }
  }),
  md: zu({
    container: {
      [gs.variable]: "1.875rem",
      [jo.variable]: "sizes.4"
    }
  }),
  lg: zu({
    container: {
      [gs.variable]: "2.875rem",
      [jo.variable]: "sizes.6"
    }
  })
}, m5 = u5({
  baseStyle: p5,
  sizes: h5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: v5, definePartsStyle: Yi } = Me(MA.keys), g5 = Yi({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
}), Mc = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, y5 = Yi((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: Q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Mc
    },
    td: {
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Mc
    },
    caption: {
      color: Q("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), b5 = Yi((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: Q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Mc
    },
    td: {
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Mc
    },
    caption: {
      color: Q("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: Q(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: Q(`${t}.100`, `${t}.700`)(e)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), S5 = {
  simple: y5,
  striped: b5,
  unstyled: {}
}, x5 = {
  sm: Yi({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: Yi({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: Yi({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
}, w5 = v5({
  baseStyle: g5,
  variants: S5,
  sizes: x5,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Rt = J("tabs-color"), Rn = J("tabs-bg"), nu = J("tabs-border-color"), { defineMultiStyleConfig: C5, definePartsStyle: er } = Me(IA.keys), k5 = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, P5 = (e) => {
  const { isFitted: t } = e;
  return {
    flex: t ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
}, E5 = (e) => {
  const { align: t = "start", orientation: n } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: n === "vertical" ? "column" : "row"
  };
}, T5 = {
  p: 4
}, _5 = er((e) => ({
  root: k5(e),
  tab: P5(e),
  tablist: E5(e),
  tabpanel: T5
})), O5 = {
  sm: er({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: er({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: er({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, M5 = er((e) => {
  const { colorScheme: t, orientation: n } = e, r = n === "vertical", o = r ? "borderStart" : "borderBottom", i = r ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [o]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [o]: "2px solid",
      borderColor: "transparent",
      [i]: "-2px",
      _selected: {
        [Rt.variable]: `colors.${t}.600`,
        _dark: {
          [Rt.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [Rn.variable]: "colors.gray.200",
        _dark: {
          [Rn.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: Rt.reference,
      bg: Rn.reference
    }
  };
}), I5 = er((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [nu.variable]: "transparent",
      _selected: {
        [Rt.variable]: `colors.${t}.600`,
        [nu.variable]: "colors.white",
        _dark: {
          [Rt.variable]: `colors.${t}.300`,
          [nu.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: nu.reference
      },
      color: Rt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), R5 = er((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [Rn.variable]: "colors.gray.50",
      _dark: {
        [Rn.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [Rn.variable]: "colors.white",
        [Rt.variable]: `colors.${t}.600`,
        _dark: {
          [Rn.variable]: "colors.gray.800",
          [Rt.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: Rt.reference,
      bg: Rn.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), $5 = er((e) => {
  const { colorScheme: t, theme: n } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: Et(n, `${t}.700`),
        bg: Et(n, `${t}.100`)
      }
    }
  };
}), A5 = er((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [Rt.variable]: "colors.gray.600",
      _dark: {
        [Rt.variable]: "inherit"
      },
      _selected: {
        [Rt.variable]: "colors.white",
        [Rn.variable]: `colors.${t}.600`,
        _dark: {
          [Rt.variable]: "colors.gray.800",
          [Rn.variable]: `colors.${t}.300`
        }
      },
      color: Rt.reference,
      bg: Rn.reference
    }
  };
}), D5 = er({}), F5 = {
  line: M5,
  enclosed: I5,
  "enclosed-colored": R5,
  "soft-rounded": $5,
  "solid-rounded": A5,
  unstyled: D5
}, L5 = C5({
  baseStyle: _5,
  sizes: O5,
  variants: F5,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), Ye = i$("badge", ["bg", "color", "shadow"]), j5 = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: Ye.bg.reference,
  color: Ye.color.reference,
  boxShadow: Ye.shadow.reference
}, z5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = da(`${t}.500`, 0.6)(n);
  return {
    [Ye.bg.variable]: `colors.${t}.500`,
    [Ye.color.variable]: "colors.white",
    _dark: {
      [Ye.bg.variable]: r,
      [Ye.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, N5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = da(`${t}.200`, 0.16)(n);
  return {
    [Ye.bg.variable]: `colors.${t}.100`,
    [Ye.color.variable]: `colors.${t}.800`,
    _dark: {
      [Ye.bg.variable]: r,
      [Ye.color.variable]: `colors.${t}.200`
    }
  };
}, V5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = da(`${t}.200`, 0.8)(n);
  return {
    [Ye.color.variable]: `colors.${t}.500`,
    _dark: {
      [Ye.color.variable]: r
    },
    [Ye.shadow.variable]: `inset 0 0 0px 1px ${Ye.color.reference}`
  };
}, B5 = {
  solid: z5,
  subtle: N5,
  outline: V5
}, ys = {
  baseStyle: j5,
  variants: B5,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: W5, definePartsStyle: zo } = Me(RA.keys), Jy = J("tag-bg"), eb = J("tag-color"), Zf = J("tag-shadow"), Nu = J("tag-min-height"), Vu = J("tag-min-width"), Bu = J("tag-font-size"), Wu = J("tag-padding-inline"), H5 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [eb.variable]: Ye.color.reference,
  [Jy.variable]: Ye.bg.reference,
  [Zf.variable]: Ye.shadow.reference,
  color: eb.reference,
  bg: Jy.reference,
  boxShadow: Zf.reference,
  borderRadius: "md",
  minH: Nu.reference,
  minW: Vu.reference,
  fontSize: Bu.reference,
  px: Wu.reference,
  _focusVisible: {
    [Zf.variable]: "shadows.outline"
  }
}, U5 = {
  lineHeight: 1.2,
  overflow: "visible"
}, G5 = {
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
}, K5 = zo({
  container: H5,
  label: U5,
  closeButton: G5
}), Y5 = {
  sm: zo({
    container: {
      [Nu.variable]: "sizes.5",
      [Vu.variable]: "sizes.5",
      [Bu.variable]: "fontSizes.xs",
      [Wu.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: zo({
    container: {
      [Nu.variable]: "sizes.6",
      [Vu.variable]: "sizes.6",
      [Bu.variable]: "fontSizes.sm",
      [Wu.variable]: "space.2"
    }
  }),
  lg: zo({
    container: {
      [Nu.variable]: "sizes.8",
      [Vu.variable]: "sizes.8",
      [Bu.variable]: "fontSizes.md",
      [Wu.variable]: "space.3"
    }
  })
}, q5 = {
  subtle: zo((e) => {
    var t;
    return {
      container: (t = ys.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: zo((e) => {
    var t;
    return {
      container: (t = ys.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: zo((e) => {
    var t;
    return {
      container: (t = ys.variants) == null ? void 0 : t.outline(e)
    };
  })
}, X5 = W5({
  variants: q5,
  baseStyle: K5,
  sizes: Y5,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: hr, defineMultiStyleConfig: Q5 } = Me(yA.keys), Oi = J("input-height"), Mi = J("input-font-size"), Ii = J("input-padding"), Ri = J("input-border-radius"), Z5 = hr({
  addon: {
    height: Oi.reference,
    fontSize: Mi.reference,
    px: Ii.reference,
    borderRadius: Ri.reference
  },
  field: {
    width: "100%",
    height: Oi.reference,
    fontSize: Mi.reference,
    px: Ii.reference,
    borderRadius: Ri.reference,
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
}), Lr = {
  lg: {
    [Mi.variable]: "fontSizes.lg",
    [Ii.variable]: "space.4",
    [Ri.variable]: "radii.md",
    [Oi.variable]: "sizes.12"
  },
  md: {
    [Mi.variable]: "fontSizes.md",
    [Ii.variable]: "space.4",
    [Ri.variable]: "radii.md",
    [Oi.variable]: "sizes.10"
  },
  sm: {
    [Mi.variable]: "fontSizes.sm",
    [Ii.variable]: "space.3",
    [Ri.variable]: "radii.sm",
    [Oi.variable]: "sizes.8"
  },
  xs: {
    [Mi.variable]: "fontSizes.xs",
    [Ii.variable]: "space.2",
    [Ri.variable]: "radii.sm",
    [Oi.variable]: "sizes.6"
  }
}, J5 = {
  lg: hr({
    field: Lr.lg,
    group: Lr.lg
  }),
  md: hr({
    field: Lr.md,
    group: Lr.md
  }),
  sm: hr({
    field: Lr.sm,
    group: Lr.sm
  }),
  xs: hr({
    field: Lr.xs,
    group: Lr.xs
  })
};
function Hv(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || Q("blue.500", "blue.300")(e),
    errorBorderColor: n || Q("red.500", "red.300")(e)
  };
}
var eD = hr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Hv(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: Q("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Et(t, r),
        boxShadow: `0 0 0 1px ${Et(t, r)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: Et(t, n),
        boxShadow: `0 0 0 1px ${Et(t, n)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: Q("inherit", "whiteAlpha.50")(e),
      bg: Q("gray.100", "whiteAlpha.300")(e)
    }
  };
}), tD = hr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Hv(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: Q("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: Q("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Et(t, r)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: Et(t, n)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: Q("gray.100", "whiteAlpha.50")(e)
    }
  };
}), nD = hr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Hv(e);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Et(t, r),
        boxShadow: `0px 1px 0px 0px ${Et(t, r)}`
      },
      _focusVisible: {
        borderColor: Et(t, n),
        boxShadow: `0px 1px 0px 0px ${Et(t, n)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
}), rD = hr({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
}), oD = {
  outline: eD,
  filled: tD,
  flushed: nD,
  unstyled: rD
}, be = Q5({
  baseStyle: Z5,
  sizes: J5,
  variants: oD,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), tb, iD = {
  ...(tb = be.baseStyle) == null ? void 0 : tb.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, nb, rb, aD = {
  outline: (e) => {
    var t, n;
    return (n = (t = be.variants) == null ? void 0 : t.outline(e).field) != null ? n : {};
  },
  flushed: (e) => {
    var t, n;
    return (n = (t = be.variants) == null ? void 0 : t.flushed(e).field) != null ? n : {};
  },
  filled: (e) => {
    var t, n;
    return (n = (t = be.variants) == null ? void 0 : t.filled(e).field) != null ? n : {};
  },
  unstyled: (rb = (nb = be.variants) == null ? void 0 : nb.unstyled.field) != null ? rb : {}
}, ob, ib, ab, sb, lb, ub, cb, db, sD = {
  xs: (ib = (ob = be.sizes) == null ? void 0 : ob.xs.field) != null ? ib : {},
  sm: (sb = (ab = be.sizes) == null ? void 0 : ab.sm.field) != null ? sb : {},
  md: (ub = (lb = be.sizes) == null ? void 0 : lb.md.field) != null ? ub : {},
  lg: (db = (cb = be.sizes) == null ? void 0 : cb.lg.field) != null ? db : {}
}, lD = {
  baseStyle: iD,
  sizes: sD,
  variants: aD,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, ru = rt("tooltip-bg"), Jf = rt("tooltip-fg"), uD = rt("popper-arrow-bg"), cD = {
  bg: ru.reference,
  color: Jf.reference,
  [ru.variable]: "colors.gray.700",
  [Jf.variable]: "colors.whiteAlpha.900",
  _dark: {
    [ru.variable]: "colors.gray.300",
    [Jf.variable]: "colors.gray.900"
  },
  [uD.variable]: ru.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, dD = {
  baseStyle: cD
}, { defineMultiStyleConfig: fD, definePartsStyle: rs } = Me(kA.keys), pD = (e) => {
  const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e, i = Q(
    Yy(),
    Yy("1rem", "rgba(0,0,0,0.1)")
  )(e), a = Q(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${Et(n, a)} 50%,
    transparent 100%
  )`;
  return {
    ...!r && o && i,
    ...r ? { bgImage: s } : { bgColor: a }
  };
}, hD = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, mD = (e) => ({
  bg: Q("gray.100", "whiteAlpha.300")(e)
}), vD = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...pD(e)
}), gD = rs((e) => ({
  label: hD,
  filledTrack: vD(e),
  track: mD(e)
})), yD = {
  xs: rs({
    track: { h: "1" }
  }),
  sm: rs({
    track: { h: "2" }
  }),
  md: rs({
    track: { h: "3" }
  }),
  lg: rs({
    track: { h: "4" }
  })
}, bD = fD({
  sizes: yD,
  baseStyle: gD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), SD = (e) => typeof e == "function";
function _t(e, ...t) {
  return SD(e) ? e(...t) : e;
}
var { definePartsStyle: Hu, defineMultiStyleConfig: xD } = Me(pA.keys), bs = J("checkbox-size"), wD = (e) => {
  const { colorScheme: t } = e;
  return {
    w: bs.reference,
    h: bs.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: Q(`${t}.500`, `${t}.200`)(e),
      borderColor: Q(`${t}.500`, `${t}.200`)(e),
      color: Q("white", "gray.900")(e),
      _hover: {
        bg: Q(`${t}.600`, `${t}.300`)(e),
        borderColor: Q(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: Q("gray.200", "transparent")(e),
        bg: Q("gray.200", "whiteAlpha.300")(e),
        color: Q("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: Q(`${t}.500`, `${t}.200`)(e),
      borderColor: Q(`${t}.500`, `${t}.200`)(e),
      color: Q("white", "gray.900")(e)
    },
    _disabled: {
      bg: Q("gray.100", "whiteAlpha.100")(e),
      borderColor: Q("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: Q("red.500", "red.300")(e)
    }
  };
}, CD = {
  _disabled: { cursor: "not-allowed" }
}, kD = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, PD = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, ED = Hu((e) => ({
  icon: PD,
  container: CD,
  control: _t(wD, e),
  label: kD
})), TD = {
  sm: Hu({
    control: { [bs.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: Hu({
    control: { [bs.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: Hu({
    control: { [bs.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Ic = xD({
  baseStyle: ED,
  sizes: TD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: _D, definePartsStyle: Uu } = Me(PA.keys), OD = (e) => {
  var t;
  const n = (t = _t(Ic.baseStyle, e)) == null ? void 0 : t.control;
  return {
    ...n,
    borderRadius: "full",
    _checked: {
      ...n == null ? void 0 : n._checked,
      _before: {
        content: '""',
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
}, MD = Uu((e) => {
  var t, n, r, o;
  return {
    label: (n = (t = Ic).baseStyle) == null ? void 0 : n.call(t, e).label,
    container: (o = (r = Ic).baseStyle) == null ? void 0 : o.call(r, e).container,
    control: OD(e)
  };
}), ID = {
  md: Uu({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: Uu({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: Uu({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, RD = _D({
  baseStyle: MD,
  sizes: ID,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: $D, definePartsStyle: AD } = Me(EA.keys), ou = J("select-bg"), fb, DD = {
  ...(fb = be.baseStyle) == null ? void 0 : fb.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: ou.reference,
  [ou.variable]: "colors.white",
  _dark: {
    [ou.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: ou.reference
  }
}, FD = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, LD = AD({
  field: DD,
  icon: FD
}), iu = {
  paddingInlineEnd: "8"
}, pb, hb, mb, vb, gb, yb, bb, Sb, jD = {
  lg: {
    ...(pb = be.sizes) == null ? void 0 : pb.lg,
    field: {
      ...(hb = be.sizes) == null ? void 0 : hb.lg.field,
      ...iu
    }
  },
  md: {
    ...(mb = be.sizes) == null ? void 0 : mb.md,
    field: {
      ...(vb = be.sizes) == null ? void 0 : vb.md.field,
      ...iu
    }
  },
  sm: {
    ...(gb = be.sizes) == null ? void 0 : gb.sm,
    field: {
      ...(yb = be.sizes) == null ? void 0 : yb.sm.field,
      ...iu
    }
  },
  xs: {
    ...(bb = be.sizes) == null ? void 0 : bb.xs,
    field: {
      ...(Sb = be.sizes) == null ? void 0 : Sb.xs.field,
      ...iu
    },
    icon: {
      insetEnd: "1"
    }
  }
}, zD = $D({
  baseStyle: LD,
  sizes: jD,
  variants: be.variants,
  defaultProps: be.defaultProps
}), ep = J("skeleton-start-color"), tp = J("skeleton-end-color"), ND = {
  [ep.variable]: "colors.gray.100",
  [tp.variable]: "colors.gray.400",
  _dark: {
    [ep.variable]: "colors.gray.800",
    [tp.variable]: "colors.gray.600"
  },
  background: ep.reference,
  borderColor: tp.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, VD = {
  baseStyle: ND
}, np = J("skip-link-bg"), BD = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [np.variable]: "colors.white",
    _dark: {
      [np.variable]: "colors.gray.700"
    },
    bg: np.reference
  }
}, WD = {
  baseStyle: BD
}, { defineMultiStyleConfig: HD, definePartsStyle: zd } = Me(TA.keys), Qs = J("slider-thumb-size"), Zs = J("slider-track-size"), Ur = J("slider-bg"), UD = (e) => {
  const { orientation: t } = e;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...Wv({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, GD = (e) => ({
  ...Wv({
    orientation: e.orientation,
    horizontal: { h: Zs.reference },
    vertical: { w: Zs.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [Ur.variable]: "colors.gray.200",
  _dark: {
    [Ur.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [Ur.variable]: "colors.gray.300",
    _dark: {
      [Ur.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: Ur.reference
}), KD = (e) => {
  const { orientation: t } = e;
  return {
    ...Wv({
      orientation: t,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        _active: {
          transform: "translateX(-50%) scale(1.15)"
        }
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        _active: {
          transform: "translateY(-50%) scale(1.15)"
        }
      }
    }),
    w: Qs.reference,
    h: Qs.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
}, YD = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [Ur.variable]: `colors.${t}.500`,
    _dark: {
      [Ur.variable]: `colors.${t}.200`
    },
    bg: Ur.reference
  };
}, qD = zd((e) => ({
  container: UD(e),
  track: GD(e),
  thumb: KD(e),
  filledTrack: YD(e)
})), XD = zd({
  container: {
    [Qs.variable]: "sizes.4",
    [Zs.variable]: "sizes.1"
  }
}), QD = zd({
  container: {
    [Qs.variable]: "sizes.3.5",
    [Zs.variable]: "sizes.1"
  }
}), ZD = zd({
  container: {
    [Qs.variable]: "sizes.2.5",
    [Zs.variable]: "sizes.0.5"
  }
}), JD = {
  lg: XD,
  md: QD,
  sm: ZD
}, eF = HD({
  baseStyle: qD,
  sizes: JD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Oo = rt("spinner-size"), tF = {
  width: [Oo.reference],
  height: [Oo.reference]
}, nF = {
  xs: {
    [Oo.variable]: "sizes.3"
  },
  sm: {
    [Oo.variable]: "sizes.4"
  },
  md: {
    [Oo.variable]: "sizes.6"
  },
  lg: {
    [Oo.variable]: "sizes.8"
  },
  xl: {
    [Oo.variable]: "sizes.12"
  }
}, rF = {
  baseStyle: tF,
  sizes: nF,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: oF, definePartsStyle: DC } = Me(_A.keys), iF = {
  fontWeight: "medium"
}, aF = {
  opacity: 0.8,
  marginBottom: "2"
}, sF = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, lF = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, uF = DC({
  container: {},
  label: iF,
  helpText: aF,
  number: sF,
  icon: lF
}), cF = {
  md: DC({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, dF = oF({
  baseStyle: uF,
  sizes: cF,
  defaultProps: {
    size: "md"
  }
}), rp = J("kbd-bg"), fF = {
  [rp.variable]: "colors.gray.100",
  _dark: {
    [rp.variable]: "colors.whiteAlpha.100"
  },
  bg: rp.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, pF = {
  baseStyle: fF
}, hF = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
}, mF = {
  baseStyle: hF
}, { defineMultiStyleConfig: vF, definePartsStyle: gF } = Me(bA.keys), yF = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, bF = gF({
  icon: yF
}), SF = vF({
  baseStyle: bF
}), { defineMultiStyleConfig: xF, definePartsStyle: wF } = Me(SA.keys), Un = J("menu-bg"), op = J("menu-shadow"), CF = {
  [Un.variable]: "#fff",
  [op.variable]: "shadows.sm",
  _dark: {
    [Un.variable]: "colors.gray.700",
    [op.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Un.reference,
  boxShadow: op.reference
}, kF = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Un.variable]: "colors.gray.100",
    _dark: {
      [Un.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Un.variable]: "colors.gray.200",
    _dark: {
      [Un.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Un.variable]: "colors.gray.100",
    _dark: {
      [Un.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Un.reference
}, PF = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, EF = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, TF = {
  opacity: 0.6
}, _F = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, OF = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, MF = wF({
  button: OF,
  list: CF,
  item: kF,
  groupTitle: PF,
  icon: EF,
  command: TF,
  divider: _F
}), IF = xF({
  baseStyle: MF
}), { defineMultiStyleConfig: RF, definePartsStyle: Yh } = Me(xA.keys), ip = J("modal-bg"), ap = J("modal-shadow"), $F = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, AF = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: n === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, DF = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: n === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [ip.variable]: "colors.white",
    [ap.variable]: "shadows.lg",
    _dark: {
      [ip.variable]: "colors.gray.700",
      [ap.variable]: "shadows.dark-lg"
    },
    bg: ip.reference,
    boxShadow: ap.reference
  };
}, FF = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, LF = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, jF = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, zF = {
  px: "6",
  py: "4"
}, NF = Yh((e) => ({
  overlay: $F,
  dialogContainer: _t(AF, e),
  dialog: _t(DF, e),
  header: FF,
  closeButton: LF,
  body: _t(jF, e),
  footer: zF
}));
function _n(e) {
  return Yh(e === "full" ? {
    dialog: {
      maxW: "100vw",
      minH: "$100vh",
      my: "0",
      borderRadius: "0"
    }
  } : {
    dialog: { maxW: e }
  });
}
var VF = {
  xs: _n("xs"),
  sm: _n("sm"),
  md: _n("md"),
  lg: _n("lg"),
  xl: _n("xl"),
  "2xl": _n("2xl"),
  "3xl": _n("3xl"),
  "4xl": _n("4xl"),
  "5xl": _n("5xl"),
  "6xl": _n("6xl"),
  full: _n("full")
}, BF = RF({
  baseStyle: NF,
  sizes: VF,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: WF, definePartsStyle: FC } = Me(wA.keys), Uv = rt("number-input-stepper-width"), LC = rt("number-input-input-padding"), HF = dr(Uv).add("0.5rem").toString(), sp = rt("number-input-bg"), lp = rt("number-input-color"), up = rt("number-input-border-color"), UF = {
  [Uv.variable]: "sizes.6",
  [LC.variable]: HF
}, GF = (e) => {
  var t, n;
  return (n = (t = _t(be.baseStyle, e)) == null ? void 0 : t.field) != null ? n : {};
}, KF = {
  width: Uv.reference
}, YF = {
  borderStart: "1px solid",
  borderStartColor: up.reference,
  color: lp.reference,
  bg: sp.reference,
  [lp.variable]: "colors.chakra-body-text",
  [up.variable]: "colors.chakra-border-color",
  _dark: {
    [lp.variable]: "colors.whiteAlpha.800",
    [up.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [sp.variable]: "colors.gray.200",
    _dark: {
      [sp.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, qF = FC((e) => {
  var t;
  return {
    root: UF,
    field: (t = _t(GF, e)) != null ? t : {},
    stepperGroup: KF,
    stepper: YF
  };
});
function au(e) {
  var t, n, r;
  const o = (t = be.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (r = (n = o.field) == null ? void 0 : n.fontSize) != null ? r : "md", s = MC.fontSizes[a];
  return FC({
    field: {
      ...o.field,
      paddingInlineEnd: LC.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: dr(s).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: i[e]
      },
      _last: {
        borderBottomEndRadius: i[e],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var XF = {
  xs: au("xs"),
  sm: au("sm"),
  md: au("md"),
  lg: au("lg")
}, QF = WF({
  baseStyle: qF,
  sizes: XF,
  variants: be.variants,
  defaultProps: be.defaultProps
}), xb, ZF = {
  ...(xb = be.baseStyle) == null ? void 0 : xb.field,
  textAlign: "center"
}, JF = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
}, wb, Cb, e4 = {
  outline: (e) => {
    var t, n, r;
    return (r = (n = _t((t = be.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  flushed: (e) => {
    var t, n, r;
    return (r = (n = _t((t = be.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  filled: (e) => {
    var t, n, r;
    return (r = (n = _t((t = be.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  unstyled: (Cb = (wb = be.variants) == null ? void 0 : wb.unstyled.field) != null ? Cb : {}
}, t4 = {
  baseStyle: ZF,
  sizes: JF,
  variants: e4,
  defaultProps: be.defaultProps
}, { defineMultiStyleConfig: n4, definePartsStyle: r4 } = Me(CA.keys), su = rt("popper-bg"), o4 = rt("popper-arrow-bg"), kb = rt("popper-arrow-shadow-color"), i4 = { zIndex: 10 }, a4 = {
  [su.variable]: "colors.white",
  bg: su.reference,
  [o4.variable]: su.reference,
  [kb.variable]: "colors.gray.200",
  _dark: {
    [su.variable]: "colors.gray.700",
    [kb.variable]: "colors.whiteAlpha.300"
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
}, s4 = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, l4 = {
  px: 3,
  py: 2
}, u4 = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, c4 = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, d4 = r4({
  popper: i4,
  content: a4,
  header: s4,
  body: l4,
  footer: u4,
  closeButton: c4
}), f4 = n4({
  baseStyle: d4
}), { definePartsStyle: qh, defineMultiStyleConfig: p4 } = Me(hA.keys), cp = J("drawer-bg"), dp = J("drawer-box-shadow");
function li(e) {
  return qh(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var h4 = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, m4 = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, v4 = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [cp.variable]: "colors.white",
    [dp.variable]: "shadows.lg",
    _dark: {
      [cp.variable]: "colors.gray.700",
      [dp.variable]: "shadows.dark-lg"
    },
    bg: cp.reference,
    boxShadow: dp.reference
  };
}, g4 = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, y4 = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, b4 = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, S4 = {
  px: "6",
  py: "4"
}, x4 = qh((e) => ({
  overlay: h4,
  dialogContainer: m4,
  dialog: _t(v4, e),
  header: g4,
  closeButton: y4,
  body: b4,
  footer: S4
})), w4 = {
  xs: li("xs"),
  sm: li("md"),
  md: li("lg"),
  lg: li("2xl"),
  xl: li("4xl"),
  full: li("full")
}, C4 = p4({
  baseStyle: x4,
  sizes: w4,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: k4, defineMultiStyleConfig: P4 } = Me(mA.keys), E4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, T4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, _4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, O4 = k4({
  preview: E4,
  input: T4,
  textarea: _4
}), M4 = P4({
  baseStyle: O4
}), { definePartsStyle: I4, defineMultiStyleConfig: R4 } = Me(vA.keys), qi = J("form-control-color"), $4 = {
  marginStart: "1",
  [qi.variable]: "colors.red.500",
  _dark: {
    [qi.variable]: "colors.red.300"
  },
  color: qi.reference
}, A4 = {
  mt: "2",
  [qi.variable]: "colors.gray.600",
  _dark: {
    [qi.variable]: "colors.whiteAlpha.600"
  },
  color: qi.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, D4 = I4({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: $4,
  helperText: A4
}), F4 = R4({
  baseStyle: D4
}), { definePartsStyle: L4, defineMultiStyleConfig: j4 } = Me(gA.keys), Xi = J("form-error-color"), z4 = {
  [Xi.variable]: "colors.red.500",
  _dark: {
    [Xi.variable]: "colors.red.300"
  },
  color: Xi.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, N4 = {
  marginEnd: "0.5em",
  [Xi.variable]: "colors.red.500",
  _dark: {
    [Xi.variable]: "colors.red.300"
  },
  color: Xi.reference
}, V4 = L4({
  text: z4,
  icon: N4
}), B4 = j4({
  baseStyle: V4
}), W4 = {
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
}, H4 = {
  baseStyle: W4
}, U4 = {
  fontFamily: "heading",
  fontWeight: "bold"
}, G4 = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
}, K4 = {
  baseStyle: U4,
  sizes: G4,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: Y4, definePartsStyle: q4 } = Me(fA.keys), fp = J("breadcrumb-link-decor"), X4 = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: fp.reference,
  [fp.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [fp.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, Q4 = q4({
  link: X4
}), Z4 = Y4({
  baseStyle: Q4
}), J4 = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
}, jC = (e) => {
  const { colorScheme: t, theme: n } = e;
  if (t === "gray")
    return {
      color: Q("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: Q("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: Q("gray.200", "whiteAlpha.300")(e) }
    };
  const r = da(`${t}.200`, 0.12)(n), o = da(`${t}.200`, 0.24)(n);
  return {
    color: Q(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: Q(`${t}.50`, r)(e)
    },
    _active: {
      bg: Q(`${t}.100`, o)(e)
    }
  };
}, eL = (e) => {
  const { colorScheme: t } = e, n = Q("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? n : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ..._t(jC, e)
  };
}, tL = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
}, nL = (e) => {
  var t;
  const { colorScheme: n } = e;
  if (n === "gray") {
    const l = Q("gray.100", "whiteAlpha.200")(e);
    return {
      bg: l,
      color: Q("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: Q("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: l
        }
      },
      _active: { bg: Q("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: r = `${n}.500`,
    color: o = "white",
    hoverBg: i = `${n}.600`,
    activeBg: a = `${n}.700`
  } = (t = tL[n]) != null ? t : {}, s = Q(r, `${n}.200`)(e);
  return {
    bg: s,
    color: Q(o, "gray.800")(e),
    _hover: {
      bg: Q(i, `${n}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: Q(a, `${n}.400`)(e) }
  };
}, rL = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: Q(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: Q(`${t}.700`, `${t}.500`)(e)
    }
  };
}, oL = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, iL = {
  ghost: jC,
  outline: eL,
  solid: nL,
  link: rL,
  unstyled: oL
}, aL = {
  lg: {
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  },
  md: {
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  },
  sm: {
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  },
  xs: {
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  }
}, sL = {
  baseStyle: J4,
  variants: iL,
  sizes: aL,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: No, defineMultiStyleConfig: lL } = Me($A.keys), Rc = J("card-bg"), gr = J("card-padding"), zC = J("card-shadow"), Gu = J("card-radius"), NC = J("card-border-width", "0"), VC = J("card-border-color"), uL = No({
  container: {
    [Rc.variable]: "colors.chakra-body-bg",
    backgroundColor: Rc.reference,
    boxShadow: zC.reference,
    borderRadius: Gu.reference,
    color: "chakra-body-text",
    borderWidth: NC.reference,
    borderColor: VC.reference
  },
  body: {
    padding: gr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: gr.reference
  },
  footer: {
    padding: gr.reference
  }
}), cL = {
  sm: No({
    container: {
      [Gu.variable]: "radii.base",
      [gr.variable]: "space.3"
    }
  }),
  md: No({
    container: {
      [Gu.variable]: "radii.md",
      [gr.variable]: "space.5"
    }
  }),
  lg: No({
    container: {
      [Gu.variable]: "radii.xl",
      [gr.variable]: "space.7"
    }
  })
}, dL = {
  elevated: No({
    container: {
      [zC.variable]: "shadows.base",
      _dark: {
        [Rc.variable]: "colors.gray.700"
      }
    }
  }),
  outline: No({
    container: {
      [NC.variable]: "1px",
      [VC.variable]: "colors.chakra-border-color"
    }
  }),
  filled: No({
    container: {
      [Rc.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [gr.variable]: 0
    },
    header: {
      [gr.variable]: 0
    },
    footer: {
      [gr.variable]: 0
    }
  }
}, fL = lL({
  baseStyle: uL,
  variants: dL,
  sizes: cL,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), Ss = rt("close-button-size"), Ha = rt("close-button-bg"), pL = {
  w: [Ss.reference],
  h: [Ss.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [Ha.variable]: "colors.blackAlpha.100",
    _dark: {
      [Ha.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Ha.variable]: "colors.blackAlpha.200",
    _dark: {
      [Ha.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: Ha.reference
}, hL = {
  lg: {
    [Ss.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [Ss.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [Ss.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, mL = {
  baseStyle: pL,
  sizes: hL,
  defaultProps: {
    size: "md"
  }
}, { variants: vL, defaultProps: gL } = ys, yL = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: Ye.bg.reference,
  color: Ye.color.reference,
  boxShadow: Ye.shadow.reference
}, bL = {
  baseStyle: yL,
  variants: vL,
  defaultProps: gL
}, SL = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, xL = {
  baseStyle: SL
}, wL = {
  opacity: 0.6,
  borderColor: "inherit"
}, CL = {
  borderStyle: "solid"
}, kL = {
  borderStyle: "dashed"
}, PL = {
  solid: CL,
  dashed: kL
}, EL = {
  baseStyle: wL,
  variants: PL,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: TL, defineMultiStyleConfig: _L } = Me(uA.keys), OL = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, ML = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
}, IL = {
  pt: "2",
  px: "4",
  pb: "5"
}, RL = {
  fontSize: "1.25em"
}, $L = TL({
  container: OL,
  button: ML,
  panel: IL,
  icon: RL
}), AL = _L({ baseStyle: $L }), { definePartsStyle: gl, defineMultiStyleConfig: DL } = Me(cA.keys), Qt = J("alert-fg"), Er = J("alert-bg"), FL = gl({
  container: {
    bg: Er.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: Qt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: Qt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function Gv(e) {
  const { theme: t, colorScheme: n } = e, r = da(`${n}.200`, 0.16)(t);
  return {
    light: `colors.${n}.100`,
    dark: r
  };
}
var LL = gl((e) => {
  const { colorScheme: t } = e, n = Gv(e);
  return {
    container: {
      [Qt.variable]: `colors.${t}.600`,
      [Er.variable]: n.light,
      _dark: {
        [Qt.variable]: `colors.${t}.200`,
        [Er.variable]: n.dark
      }
    }
  };
}), jL = gl((e) => {
  const { colorScheme: t } = e, n = Gv(e);
  return {
    container: {
      [Qt.variable]: `colors.${t}.600`,
      [Er.variable]: n.light,
      _dark: {
        [Qt.variable]: `colors.${t}.200`,
        [Er.variable]: n.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: Qt.reference
    }
  };
}), zL = gl((e) => {
  const { colorScheme: t } = e, n = Gv(e);
  return {
    container: {
      [Qt.variable]: `colors.${t}.600`,
      [Er.variable]: n.light,
      _dark: {
        [Qt.variable]: `colors.${t}.200`,
        [Er.variable]: n.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: Qt.reference
    }
  };
}), NL = gl((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [Qt.variable]: "colors.white",
      [Er.variable]: `colors.${t}.600`,
      _dark: {
        [Qt.variable]: "colors.gray.900",
        [Er.variable]: `colors.${t}.200`
      },
      color: Qt.reference
    }
  };
}), VL = {
  subtle: LL,
  "left-accent": jL,
  "top-accent": zL,
  solid: NL
}, BL = DL({
  baseStyle: FL,
  variants: VL,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: BC, defineMultiStyleConfig: WL } = Me(dA.keys), Qi = J("avatar-border-color"), xs = J("avatar-bg"), Js = J("avatar-font-size"), fa = J("avatar-size"), HL = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: Qi.reference,
  [Qi.variable]: "white",
  _dark: {
    [Qi.variable]: "colors.gray.800"
  }
}, UL = {
  bg: xs.reference,
  fontSize: Js.reference,
  width: fa.reference,
  height: fa.reference,
  lineHeight: "1",
  [xs.variable]: "colors.gray.200",
  _dark: {
    [xs.variable]: "colors.whiteAlpha.400"
  }
}, GL = (e) => {
  const { name: t, theme: n } = e, r = t ? JA({ string: t }) : "colors.gray.400", o = QA(r)(n);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: xs.reference,
    fontSize: Js.reference,
    color: i,
    borderColor: Qi.reference,
    verticalAlign: "top",
    width: fa.reference,
    height: fa.reference,
    "&:not([data-loaded])": {
      [xs.variable]: r
    },
    [Qi.variable]: "colors.white",
    _dark: {
      [Qi.variable]: "colors.gray.800"
    }
  };
}, KL = {
  fontSize: Js.reference,
  lineHeight: "1"
}, YL = BC((e) => ({
  badge: _t(HL, e),
  excessLabel: _t(UL, e),
  container: _t(GL, e),
  label: KL
}));
function jr(e) {
  const t = e !== "100%" ? RC[e] : void 0;
  return BC({
    container: {
      [fa.variable]: t ?? e,
      [Js.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [fa.variable]: t ?? e,
      [Js.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var qL = {
  "2xs": jr(4),
  xs: jr(6),
  sm: jr(8),
  md: jr(12),
  lg: jr(16),
  xl: jr(24),
  "2xl": jr(32),
  full: jr("100%")
}, XL = WL({
  baseStyle: YL,
  sizes: qL,
  defaultProps: {
    size: "md"
  }
}), QL = {
  Accordion: AL,
  Alert: BL,
  Avatar: XL,
  Badge: ys,
  Breadcrumb: Z4,
  Button: sL,
  Checkbox: Ic,
  CloseButton: mL,
  Code: bL,
  Container: xL,
  Divider: EL,
  Drawer: C4,
  Editable: M4,
  Form: F4,
  FormError: B4,
  FormLabel: H4,
  Heading: K4,
  Input: be,
  Kbd: pF,
  Link: mF,
  List: SF,
  Menu: IF,
  Modal: BF,
  NumberInput: QF,
  PinInput: t4,
  Popover: f4,
  Progress: bD,
  Radio: RD,
  Select: zD,
  Skeleton: VD,
  SkipLink: WD,
  Slider: eF,
  Spinner: rF,
  Stat: dF,
  Switch: m5,
  Table: w5,
  Tabs: L5,
  Tag: X5,
  Textarea: lD,
  Tooltip: dD,
  Card: fL,
  Stepper: lA
}, ZL = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, JL = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color"
    }
  }
}, ej = "ltr", tj = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, WC = {
  semanticTokens: ZL,
  direction: ej,
  ...iA,
  components: QL,
  styles: JL,
  config: tj
};
function os(e) {
  return typeof e == "function";
}
function nj(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
var rj = (e) => function(...n) {
  let r = [...n], o = n[n.length - 1];
  return D$(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  r.length > 1 ? r = r.slice(0, r.length - 1) : o = e, nj(
    ...r.map(
      (i) => (a) => os(i) ? i(a) : ij(a, i)
    )
  )(o);
}, oj = rj(WC);
function ij(...e) {
  return gn({}, ...e, HC);
}
function HC(e, t, n, r) {
  if ((os(e) || os(t)) && Object.prototype.hasOwnProperty.call(r, n))
    return (...o) => {
      const i = os(e) ? e(...o) : e, a = os(t) ? t(...o) : t;
      return gn({}, i, a, HC);
    };
}
function aj() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var sj = /* @__PURE__ */ aj();
function lj(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    t.includes(r) || (n[r] = e[r]);
  }), n;
}
function uj(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var cj = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (r, o, i, a) => {
    if (typeof r > "u")
      return e(r, o, i);
    t.has(r) || t.set(r, /* @__PURE__ */ new Map());
    const s = t.get(r);
    if (s.has(o))
      return s.get(o);
    const l = e(r, o, i, a);
    return s.set(o, l), l;
  };
}, UC = cj(uj);
function GC(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    const o = e[r];
    t(o, r, e) && (n[r] = o);
  }), n;
}
var KC = (e) => GC(e, (t) => t != null);
function dj(e) {
  return typeof e == "function";
}
function YC(e, ...t) {
  return dj(e) ? e(...t) : e;
}
function fj(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
var pj = typeof Element < "u", hj = typeof Map == "function", mj = typeof Set == "function", vj = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ku(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!Ku(e[r], t[r]))
          return !1;
      return !0;
    }
    var i;
    if (hj && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!Ku(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (mj && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (vj && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (e[r] !== t[r])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r]))
        return !1;
    if (pj && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Ku(e[o[r]], t[o[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var gj = function(t, n) {
  try {
    return Ku(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const yj = /* @__PURE__ */ ll(gj);
function qC(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t, { theme: i, colorMode: a } = vR(), s = e ? UC(i, `components.${e}`) : void 0, l = r || s, u = gn(
    { theme: i, colorMode: a },
    (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
    KC(lj(o, ["children"]))
  ), c = v.useRef({});
  if (l) {
    const f = $$(l)(u);
    yj(c.current, f) || (c.current = f);
  }
  return c.current;
}
function ei(e, t = {}) {
  return qC(e, t);
}
function mt(e, t = {}) {
  return qC(e, t);
}
var bj = /* @__PURE__ */ new Set([
  ...x$,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]), Sj = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function xj(e) {
  return Sj.has(e) || !bj.has(e);
}
function wj(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (o in n && delete n[o], n[o] = r[o]);
  return n;
}
function Cj(e) {
  const t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
var kj = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Pj = /* @__PURE__ */ iC(
  function(e) {
    return kj.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ej = Pj, Tj = function(t) {
  return t !== "theme";
}, Pb = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Ej : Tj;
}, Eb = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, _j = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Rv(n, r, o), hC(function() {
    return $v(n, r, o);
  }), null;
}, Oj = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, a;
  n !== void 0 && (i = n.label, a = n.target);
  var s = Eb(t, n, r), l = s || Pb(o), u = !l("as");
  return function() {
    var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, p = 1; p < f; p++)
        d.push(c[p], c[0][p]);
    }
    var g = Dv(function(y, S, h) {
      var m = u && y.as || o, b = "", x = [], k = y;
      if (y.theme == null) {
        k = {};
        for (var P in y)
          k[P] = y[P];
        k.theme = v.useContext(ua);
      }
      typeof y.className == "string" ? b = dC(S.registered, x, y.className) : y.className != null && (b = y.className + " ");
      var E = Ad(d.concat(x), S.registered, k);
      b += S.key + "-" + E.name, a !== void 0 && (b += " " + a);
      var T = u && s === void 0 ? Pb(m) : l, M = {};
      for (var I in y)
        u && I === "as" || // $FlowFixMe
        T(I) && (M[I] = y[I]);
      return M.className = b, M.ref = h, /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(_j, {
        cache: S,
        serialized: E,
        isStringTag: typeof m == "string"
      }), /* @__PURE__ */ v.createElement(m, M));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = d, g.__emotion_forwardProp = s, Object.defineProperty(g, "toString", {
      value: function() {
        return "." + a;
      }
    }), g.withComponent = function(y, S) {
      return e(y, q({}, n, S, {
        shouldForwardProp: Eb(g, S, !0)
      })).apply(void 0, d);
    }, g;
  };
}, Mj = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], $c = Oj.bind();
Mj.forEach(function(e) {
  $c[e] = $c(e);
});
var Tb, Ij = (Tb = $c.default) != null ? Tb : $c, Rj = ({ baseStyle: e }) => (t) => {
  const { theme: n, css: r, __css: o, sx: i, ...a } = t, s = GC(a, (d, f) => C$(f)), l = YC(e, t), u = wj(
    {},
    o,
    l,
    KC(s),
    i
  ), c = OC(u)(t.theme);
  return r ? [c, r] : c;
};
function pp(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = xj);
  const o = Rj({ baseStyle: n }), i = Ij(
    e,
    r
  )(o);
  return re.forwardRef(function(l, u) {
    const { colorMode: c, forced: d } = Ea();
    return re.createElement(i, {
      ref: u,
      "data-theme": d ? c : void 0,
      ...l
    });
  });
}
function $j() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(pp, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, n, r) {
      return pp(...r);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, n) {
      return e.has(n) || e.set(n, pp(n)), e.get(n);
    }
  });
}
var X = $j();
function oe(e) {
  return v.forwardRef(e);
}
function XC(e = {}) {
  const {
    strict: t = !0,
    errorMessage: n = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: r
  } = e, o = v.createContext(void 0);
  o.displayName = r;
  function i() {
    var a;
    const s = v.useContext(o);
    if (!s && t) {
      const l = new Error(n);
      throw l.name = "ContextError", (a = Error.captureStackTrace) == null || a.call(Error, l, i), l;
    }
    return s;
  }
  return [
    o.Provider,
    i,
    o
  ];
}
function Aj(e) {
  const { cssVarsRoot: t, theme: n, children: r } = e, o = v.useMemo(() => S$(n), [n]);
  return /* @__PURE__ */ w.jsxs(KI, { theme: o, children: [
    /* @__PURE__ */ w.jsx(Dj, { root: t }),
    r
  ] });
}
function Dj({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ w.jsx(Dd, { styles: (n) => ({ [t]: n.__cssVars }) });
}
XC({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function Fj(e) {
  return XC({
    name: `${e}StylesContext`,
    errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${e} />" `
  });
}
function Lj() {
  const { colorMode: e } = Ea();
  return /* @__PURE__ */ w.jsx(
    Dd,
    {
      styles: (t) => {
        const n = UC(t, "styles.global"), r = YC(n, { theme: t, colorMode: e });
        return r ? OC(r)(t) : void 0;
      }
    }
  );
}
var Kv = v.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
Kv.displayName = "EnvironmentContext";
function jj({ defer: e } = {}) {
  const [, t] = v.useReducer((n) => n + 1, 0);
  return ca(() => {
    e && t();
  }, [e]), v.useContext(Kv);
}
function QC(e) {
  const { children: t, environment: n, disabled: r } = e, o = v.useRef(null), i = v.useMemo(() => n || {
    getDocument: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument) != null ? l : document;
    },
    getWindow: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) != null ? l : window;
    }
  }, [n]), a = !r || !n;
  return /* @__PURE__ */ w.jsxs(Kv.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ w.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
QC.displayName = "EnvironmentProvider";
var zj = (e) => {
  const {
    children: t,
    colorModeManager: n,
    portalZIndex: r,
    resetScope: o,
    resetCSS: i = !0,
    theme: a = {},
    environment: s,
    cssVarsRoot: l,
    disableEnvironment: u,
    disableGlobalStyle: c
  } = e, d = /* @__PURE__ */ w.jsx(
    QC,
    {
      environment: s,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ w.jsx(Aj, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ w.jsxs(
    xC,
    {
      colorModeManager: n,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ w.jsx(JI, { scope: o }) : /* @__PURE__ */ w.jsx(ZI, {}),
        !c && /* @__PURE__ */ w.jsx(Lj, {}),
        r ? /* @__PURE__ */ w.jsx(bC, { zIndex: r, children: d }) : d
      ]
    }
  ) });
}, Nj = (e, t) => e.find((n) => n.id === t);
function _b(e, t) {
  const n = ZC(e, t), r = n ? e[n].findIndex((o) => o.id === t) : -1;
  return {
    position: n,
    index: r
  };
}
function ZC(e, t) {
  for (const [n, r] of Object.entries(e))
    if (Nj(r, t))
      return n;
}
function Vj(e) {
  const t = e.includes("right"), n = e.includes("left");
  let r = "center";
  return t && (r = "flex-end"), n && (r = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: r
  };
}
function Bj(e) {
  const n = e === "top" || e === "bottom" ? "0 auto" : void 0, r = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0, o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0, i = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)", a = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: n,
    top: r,
    bottom: o,
    right: i,
    left: a
  };
}
function oo(e, t = []) {
  const n = v.useRef(e);
  return v.useEffect(() => {
    n.current = e;
  }), v.useCallback((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function Wj(e, t) {
  const n = oo(e);
  v.useEffect(() => {
    if (t == null)
      return;
    let r = null;
    return r = window.setTimeout(() => {
      n();
    }, t), () => {
      r && window.clearTimeout(r);
    };
  }, [t, n]);
}
function pa(e, t) {
  const n = v.useRef(!1), r = v.useRef(!1);
  v.useEffect(() => {
    if (n.current && r.current)
      return e();
    r.current = !0;
  }, t), v.useEffect(() => (n.current = !0, () => {
    n.current = !1;
  }), []);
}
const JC = v.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Nd = v.createContext({}), yl = v.createContext(null), Vd = typeof document < "u", Yv = Vd ? v.useLayoutEffect : v.useEffect, ek = v.createContext({ strict: !1 }), qv = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), Hj = "framerAppearId", tk = "data-" + qv(Hj);
function Uj(e, t, n, r) {
  const { visualElement: o } = v.useContext(Nd), i = v.useContext(ek), a = v.useContext(yl), s = v.useContext(JC).reducedMotion, l = v.useRef();
  r = r || i.renderer, !l.current && r && (l.current = r(e, {
    visualState: t,
    parent: o,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const u = l.current;
  v.useInsertionEffect(() => {
    u && u.update(n, a);
  });
  const c = v.useRef(!!n[tk]);
  return Yv(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), v.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (window.HandoffAppearAnimations = !1, c.current = !1));
  }), u;
}
function $i(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Gj(e, t, n) {
  return v.useCallback(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : $i(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function el(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Bd(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Xv = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Qv = ["initial", ...Xv];
function Wd(e) {
  return Bd(e.animate) || Qv.some((t) => el(e[t]));
}
function nk(e) {
  return !!(Wd(e) || e.variants);
}
function Kj(e, t) {
  if (Wd(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || el(n) ? n : void 0,
      animate: el(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Yj(e) {
  const { initial: t, animate: n } = Kj(e, v.useContext(Nd));
  return v.useMemo(() => ({ initial: t, animate: n }), [Ob(t), Ob(n)]);
}
function Ob(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Mb = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, tl = {};
for (const e in Mb)
  tl[e] = {
    isEnabled: (t) => Mb[e].some((n) => !!t[n])
  };
function qj(e) {
  for (const t in e)
    tl[t] = {
      ...tl[t],
      ...e[t]
    };
}
const Zv = v.createContext({}), rk = v.createContext({}), Xj = Symbol.for("motionComponentSymbol");
function Qj({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && qj(e);
  function i(s, l) {
    let u;
    const c = {
      ...v.useContext(JC),
      ...s,
      layoutId: Zj(s)
    }, { isStatic: d } = c, f = Yj(s), p = r(s, d);
    if (!d && Vd) {
      f.visualElement = Uj(o, p, c, t);
      const g = v.useContext(rk), y = v.useContext(ek).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        y,
        e,
        g
      ));
    }
    return v.createElement(
      Nd.Provider,
      { value: f },
      u && f.visualElement ? v.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      n(o, s, Gj(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = v.forwardRef(i);
  return a[Xj] = o, a;
}
function Zj({ layoutId: e }) {
  const t = v.useContext(Zv).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Jj(e) {
  function t(r, o = {}) {
    return Qj(e(r, o));
  }
  if (typeof Proxy > "u")
    return t;
  const n = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o))
  });
}
const e3 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Jv(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(e3.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const Ac = {};
function t3(e) {
  Object.assign(Ac, e);
}
const bl = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], ti = new Set(bl);
function ok(e, { layout: t, layoutId: n }) {
  return ti.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Ac[e] || e === "opacity");
}
const Bt = (e) => !!(e && e.getVelocity), n3 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, r3 = bl.length;
function o3(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, o) {
  let i = "";
  for (let a = 0; a < r3; a++) {
    const s = bl[a];
    if (e[s] !== void 0) {
      const l = n3[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, r ? "" : i) : n && r && (i = "none"), i;
}
const ik = (e) => (t) => typeof t == "string" && t.startsWith(e), ak = ik("--"), Xh = ik("var(--"), i3 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, a3 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, uo = (e, t, n) => Math.min(Math.max(n, e), t), ni = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, ws = {
  ...ni,
  transform: (e) => uo(0, 1, e)
}, lu = {
  ...ni,
  default: 1
}, Cs = (e) => Math.round(e * 1e5) / 1e5, Hd = /(-)?([\d]*\.?[\d])+/g, sk = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, s3 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Sl(e) {
  return typeof e == "string";
}
const xl = (e) => ({
  test: (t) => Sl(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), zr = xl("deg"), tr = xl("%"), ne = xl("px"), l3 = xl("vh"), u3 = xl("vw"), Ib = {
  ...tr,
  parse: (e) => tr.parse(e) / 100,
  transform: (e) => tr.transform(e * 100)
}, Rb = {
  ...ni,
  transform: Math.round
}, lk = {
  // Border props
  borderWidth: ne,
  borderTopWidth: ne,
  borderRightWidth: ne,
  borderBottomWidth: ne,
  borderLeftWidth: ne,
  borderRadius: ne,
  radius: ne,
  borderTopLeftRadius: ne,
  borderTopRightRadius: ne,
  borderBottomRightRadius: ne,
  borderBottomLeftRadius: ne,
  // Positioning props
  width: ne,
  maxWidth: ne,
  height: ne,
  maxHeight: ne,
  size: ne,
  top: ne,
  right: ne,
  bottom: ne,
  left: ne,
  // Spacing props
  padding: ne,
  paddingTop: ne,
  paddingRight: ne,
  paddingBottom: ne,
  paddingLeft: ne,
  margin: ne,
  marginTop: ne,
  marginRight: ne,
  marginBottom: ne,
  marginLeft: ne,
  // Transform props
  rotate: zr,
  rotateX: zr,
  rotateY: zr,
  rotateZ: zr,
  scale: lu,
  scaleX: lu,
  scaleY: lu,
  scaleZ: lu,
  skew: zr,
  skewX: zr,
  skewY: zr,
  distance: ne,
  translateX: ne,
  translateY: ne,
  translateZ: ne,
  x: ne,
  y: ne,
  z: ne,
  perspective: ne,
  transformPerspective: ne,
  opacity: ws,
  originX: Ib,
  originY: Ib,
  originZ: ne,
  // Misc
  zIndex: Rb,
  // SVG
  fillOpacity: ws,
  strokeOpacity: ws,
  numOctaves: Rb
};
function eg(e, t, n, r) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (ak(d)) {
      i[d] = f;
      continue;
    }
    const p = lk[d], g = a3(f, p);
    if (ti.has(d)) {
      if (l = !0, a[d] = g, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = g) : o[d] = g;
  }
  if (t.transform || (l || r ? o.transform = o3(e.transform, n, c, r) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const tg = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function uk(e, t, n) {
  for (const r in t)
    !Bt(t[r]) && !ok(r, n) && (e[r] = t[r]);
}
function c3({ transformTemplate: e }, t, n) {
  return v.useMemo(() => {
    const r = tg();
    return eg(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function d3(e, t, n) {
  const r = e.style || {}, o = {};
  return uk(o, r, e), Object.assign(o, c3(e, t, n)), e.transformValues ? e.transformValues(o) : o;
}
function f3(e, t, n) {
  const r = {}, o = d3(e, t, n);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = o, r;
}
const p3 = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport"
]);
function Dc(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || p3.has(e);
}
let ck = (e) => !Dc(e);
function h3(e) {
  e && (ck = (t) => t.startsWith("on") ? !Dc(t) : e(t));
}
try {
  h3(require("@emotion/is-prop-valid").default);
} catch {
}
function m3(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (ck(o) || n === !0 && Dc(o) || !t && !Dc(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function $b(e, t, n) {
  return typeof e == "string" ? e : ne.transform(t + n * e);
}
function v3(e, t, n) {
  const r = $b(t, e.x, e.width), o = $b(n, e.y, e.height);
  return `${r} ${o}`;
}
const g3 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, y3 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function b3(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? g3 : y3;
  e[i.offset] = ne.transform(-r);
  const a = ne.transform(t), s = ne.transform(n);
  e[i.array] = `${a} ${s}`;
}
function ng(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: o,
  originY: i,
  pathLength: a,
  pathSpacing: s = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, d, f) {
  if (eg(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: g, dimensions: y } = e;
  p.transform && (y && (g.transform = p.transform), delete p.transform), y && (o !== void 0 || i !== void 0 || g.transform) && (g.transformOrigin = v3(y, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), a !== void 0 && b3(p, a, s, l, !1);
}
const dk = () => ({
  ...tg(),
  attrs: {}
}), rg = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function S3(e, t, n, r) {
  const o = v.useMemo(() => {
    const i = dk();
    return ng(i, t, { enableHardwareAcceleration: !1 }, rg(r), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    uk(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function x3(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (Jv(n) ? S3 : f3)(r, i, a, n), c = {
      ...m3(r, typeof n == "string", e),
      ...l,
      ref: o
    }, { children: d } = r, f = v.useMemo(() => Bt(d) ? d.get() : d, [d]);
    return v.createElement(n, {
      ...c,
      children: f
    });
  };
}
function fk(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n)
    e.style.setProperty(i, n[i]);
}
const pk = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function hk(e, t, n, r) {
  fk(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(pk.has(o) ? o : qv(o), t.attrs[o]);
}
function og(e, t) {
  const { style: n } = e, r = {};
  for (const o in n)
    (Bt(n[o]) || t.style && Bt(t.style[o]) || ok(o, e)) && (r[o] = n[o]);
  return r;
}
function mk(e, t) {
  const n = og(e, t);
  for (const r in e)
    if (Bt(e[r]) || Bt(t[r])) {
      const o = bl.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      n[o] = e[r];
    }
  return n;
}
function ig(e, t, n, r = {}, o = {}) {
  return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), t;
}
function vk(e) {
  const t = v.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Fc = (e) => Array.isArray(e), w3 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), C3 = (e) => Fc(e) ? e[e.length - 1] || 0 : e;
function Yu(e) {
  const t = Bt(e) ? e.get() : e;
  return w3(t) ? t.toValue() : t;
}
function k3({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, i) {
  const a = {
    latestValues: P3(r, o, i, e),
    renderState: t()
  };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
const gk = (e) => (t, n) => {
  const r = v.useContext(Nd), o = v.useContext(yl), i = () => k3(e, t, r, o);
  return n ? i() : vk(i);
};
function P3(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const f in i)
    o[f] = Yu(i[f]);
  let { initial: a, animate: s } = e;
  const l = Wd(e), u = nk(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !Bd(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const g = ig(e, p);
    if (!g)
      return;
    const { transitionEnd: y, transition: S, ...h } = g;
    for (const m in h) {
      let b = h[m];
      if (Array.isArray(b)) {
        const x = c ? b.length - 1 : 0;
        b = b[x];
      }
      b !== null && (o[m] = b);
    }
    for (const m in y)
      o[m] = y[m];
  }), o;
}
const He = (e) => e;
class Ab {
  constructor() {
    this.order = [], this.scheduled = /* @__PURE__ */ new Set();
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    this.order.length = 0, this.scheduled.clear();
  }
}
function E3(e) {
  let t = new Ab(), n = new Ab(), r = 0, o = !1, i = !1;
  const a = /* @__PURE__ */ new WeakSet(), s = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, u = !1, c = !1) => {
      const d = c && o, f = d ? t : n;
      return u && a.add(l), f.add(l) && d && o && (r = t.order.length), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      n.remove(l), a.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (o) {
        i = !0;
        return;
      }
      if (o = !0, [t, n] = [n, t], n.clear(), r = t.order.length, r)
        for (let u = 0; u < r; u++) {
          const c = t.order[u];
          c(l), a.has(c) && (s.schedule(c), e());
        }
      o = !1, i && (i = !1, s.process(l));
    }
  };
  return s;
}
const uu = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], T3 = 40;
function _3(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = uu.reduce((d, f) => (d[f] = E3(() => n = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, T3), 1), o.timestamp = d, o.isProcessing = !0, uu.forEach(a), o.isProcessing = !1, n && t && (r = !1, e(s));
  }, l = () => {
    n = !0, r = !0, o.isProcessing || e(s);
  };
  return { schedule: uu.reduce((d, f) => {
    const p = i[f];
    return d[f] = (g, y = !1, S = !1) => (n || l(), p.schedule(g, y, S)), d;
  }, {}), cancel: (d) => uu.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: _e, cancel: Tr, state: ot, steps: hp } = _3(typeof requestAnimationFrame < "u" ? requestAnimationFrame : He, !0), O3 = {
  useVisualState: gk({
    scrapeMotionValuesFromProps: mk,
    createRenderState: dk,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      _e.read(() => {
        try {
          n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), _e.render(() => {
        ng(n, r, { enableHardwareAcceleration: !1 }, rg(t.tagName), e.transformTemplate), hk(t, n);
      });
    }
  })
}, M3 = {
  useVisualState: gk({
    scrapeMotionValuesFromProps: og,
    createRenderState: tg
  })
};
function I3(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...Jv(e) ? O3 : M3,
    preloadedFeatures: n,
    useRender: x3(t),
    createVisualElement: r,
    Component: e
  };
}
function mr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const yk = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Ud(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const R3 = (e) => (t) => yk(t) && e(t, Ud(t));
function yr(e, t, n, r) {
  return mr(e, t, R3(n), r);
}
const $3 = (e, t) => (n) => t(e(n)), io = (...e) => e.reduce($3);
function bk(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Db = bk("dragHorizontal"), Fb = bk("dragVertical");
function Sk(e) {
  let t = !1;
  if (e === "y")
    t = Fb();
  else if (e === "x")
    t = Db();
  else {
    const n = Db(), r = Fb();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function xk() {
  const e = Sk(!0);
  return e ? (e(), !1) : !0;
}
class mo {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function Lb(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"), r = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || xk())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[r] && _e.update(() => s[r](i, a));
  };
  return yr(e.current, n, o, {
    passive: !e.getProps()[r]
  });
}
class A3 extends mo {
  mount() {
    this.unmount = io(Lb(this.node, !0), Lb(this.node, !1));
  }
  unmount() {
  }
}
class D3 extends mo {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = io(mr(this.node.current, "focus", () => this.onFocus()), mr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const wk = (e, t) => t ? e === t ? !0 : wk(e, t.parentElement) : !1;
function mp(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, Ud(n));
}
class F3 extends mo {
  constructor() {
    super(...arguments), this.removeStartListeners = He, this.removeEndListeners = He, this.removeAccessibleListeners = He, this.startPointerPress = (t, n) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const r = this.node.getProps(), i = yr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        _e.update(() => {
          wk(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(r.onTap || r.onPointerUp) }), a = yr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
      this.removeEndListeners = io(i, a), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || mp("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && _e.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = mr(this.node.current, "keyup", a), mp("down", (s, l) => {
          this.startPress(s, l);
        });
      }, n = mr(this.node.current, "keydown", t), r = () => {
        this.isPressing && mp("cancel", (i, a) => this.cancelPress(i, a));
      }, o = mr(this.node.current, "blur", r);
      this.removeAccessibleListeners = io(n, o);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && _e.update(() => r(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !xk();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && _e.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = yr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), r = mr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = io(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Qh = /* @__PURE__ */ new WeakMap(), vp = /* @__PURE__ */ new WeakMap(), L3 = (e) => {
  const t = Qh.get(e.target);
  t && t(e);
}, j3 = (e) => {
  e.forEach(L3);
};
function z3({ root: e, ...t }) {
  const n = e || document;
  vp.has(n) || vp.set(n, {});
  const r = vp.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(j3, { root: e, ...t })), r[o];
}
function N3(e, t, n) {
  const r = z3(t);
  return Qh.set(e, n), r.observe(e), () => {
    Qh.delete(e), r.unobserve(e);
  };
}
const V3 = {
  some: 0,
  all: 1
};
class B3 extends mo {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : V3[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return N3(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(W3(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function W3({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const H3 = {
  inView: {
    Feature: B3
  },
  tap: {
    Feature: F3
  },
  focus: {
    Feature: D3
  },
  hover: {
    Feature: A3
  }
};
function Ck(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function U3(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.get()), t;
}
function G3(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
}
function Gd(e, t, n) {
  const r = e.getProps();
  return ig(r, t, n !== void 0 ? n : r.custom, U3(e), G3(e));
}
let K3 = He, ag = He;
const ao = (e) => e * 1e3, br = (e) => e / 1e3, Y3 = {
  current: !1
}, kk = (e) => Array.isArray(e) && typeof e[0] == "number";
function Pk(e) {
  return !!(!e || typeof e == "string" && Ek[e] || kk(e) || Array.isArray(e) && e.every(Pk));
}
const is = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Ek = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: is([0, 0.65, 0.55, 1]),
  circOut: is([0.55, 0, 1, 0.45]),
  backIn: is([0.31, 0.01, 0.66, -0.59]),
  backOut: is([0.33, 1.53, 0.69, 0.99])
};
function Tk(e) {
  if (e)
    return kk(e) ? is(e) : Array.isArray(e) ? e.map(Tk) : Ek[e];
}
function q3(e, t, n, { delay: r = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = Tk(s);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
function X3(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const _k = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Q3 = 1e-7, Z3 = 12;
function J3(e, t, n, r, o) {
  let i, a, s = 0;
  do
    a = t + (n - t) / 2, i = _k(a, r, o) - e, i > 0 ? n = a : t = a;
  while (Math.abs(i) > Q3 && ++s < Z3);
  return a;
}
function wl(e, t, n, r) {
  if (e === t && n === r)
    return He;
  const o = (i) => J3(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : _k(o(i), t, r);
}
const ez = wl(0.42, 0, 1, 1), tz = wl(0, 0, 0.58, 1), Ok = wl(0.42, 0, 0.58, 1), nz = (e) => Array.isArray(e) && typeof e[0] != "number", Mk = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Ik = (e) => (t) => 1 - e(1 - t), Rk = (e) => 1 - Math.sin(Math.acos(e)), sg = Ik(Rk), rz = Mk(sg), $k = wl(0.33, 1.53, 0.69, 0.99), lg = Ik($k), oz = Mk(lg), iz = (e) => (e *= 2) < 1 ? 0.5 * lg(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), az = {
  linear: He,
  easeIn: ez,
  easeInOut: Ok,
  easeOut: tz,
  circIn: Rk,
  circInOut: rz,
  circOut: sg,
  backIn: lg,
  backInOut: oz,
  backOut: $k,
  anticipate: iz
}, jb = (e) => {
  if (Array.isArray(e)) {
    ag(e.length === 4);
    const [t, n, r, o] = e;
    return wl(t, n, r, o);
  } else if (typeof e == "string")
    return az[e];
  return e;
}, ug = (e, t) => (n) => !!(Sl(n) && s3.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), Ak = (e, t, n) => (r) => {
  if (!Sl(r))
    return r;
  const [o, i, a, s] = r.match(Hd);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, sz = (e) => uo(0, 255, e), gp = {
  ...ni,
  transform: (e) => Math.round(sz(e))
}, Do = {
  test: ug("rgb", "red"),
  parse: Ak("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + gp.transform(e) + ", " + gp.transform(t) + ", " + gp.transform(n) + ", " + Cs(ws.transform(r)) + ")"
};
function lz(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Zh = {
  test: ug("#"),
  parse: lz,
  transform: Do.transform
}, Ai = {
  test: ug("hsl", "hue"),
  parse: Ak("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + tr.transform(Cs(t)) + ", " + tr.transform(Cs(n)) + ", " + Cs(ws.transform(r)) + ")"
}, kt = {
  test: (e) => Do.test(e) || Zh.test(e) || Ai.test(e),
  parse: (e) => Do.test(e) ? Do.parse(e) : Ai.test(e) ? Ai.parse(e) : Zh.parse(e),
  transform: (e) => Sl(e) ? e : e.hasOwnProperty("red") ? Do.transform(e) : Ai.transform(e)
}, ze = (e, t, n) => -n * e + n * t + e;
function yp(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function uz({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - s;
    o = yp(l, s, e + 1 / 3), i = yp(l, s, e), a = yp(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r
  };
}
const bp = (e, t, n) => {
  const r = e * e;
  return Math.sqrt(Math.max(0, n * (t * t - r) + r));
}, cz = [Zh, Do, Ai], dz = (e) => cz.find((t) => t.test(e));
function zb(e) {
  const t = dz(e);
  let n = t.parse(e);
  return t === Ai && (n = uz(n)), n;
}
const Dk = (e, t) => {
  const n = zb(e), r = zb(t), o = { ...n };
  return (i) => (o.red = bp(n.red, r.red, i), o.green = bp(n.green, r.green, i), o.blue = bp(n.blue, r.blue, i), o.alpha = ze(n.alpha, r.alpha, i), Do.transform(o));
};
function fz(e) {
  var t, n;
  return isNaN(e) && Sl(e) && (((t = e.match(Hd)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(sk)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Fk = {
  regex: i3,
  countKey: "Vars",
  token: "${v}",
  parse: He
}, Lk = {
  regex: sk,
  countKey: "Colors",
  token: "${c}",
  parse: kt.parse
}, jk = {
  regex: Hd,
  countKey: "Numbers",
  token: "${n}",
  parse: ni.parse
};
function Sp(e, { regex: t, countKey: n, token: r, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + n] = i.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...i.map(o)));
}
function Lc(e) {
  const t = e.toString(), n = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return n.value.includes("var(--") && Sp(n, Fk), Sp(n, Lk), Sp(n, jk), n;
}
function zk(e) {
  return Lc(e).values;
}
function Nk(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = Lc(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < r ? s = s.replace(Fk.token, a[l]) : l < r + n ? s = s.replace(Lk.token, kt.transform(a[l])) : s = s.replace(jk.token, Cs(a[l]));
    return s;
  };
}
const pz = (e) => typeof e == "number" ? 0 : e;
function hz(e) {
  const t = zk(e);
  return Nk(e)(t.map(pz));
}
const co = {
  test: fz,
  parse: zk,
  createTransformer: Nk,
  getAnimatableNone: hz
}, Vk = (e, t) => (n) => `${n > 0 ? t : e}`;
function Bk(e, t) {
  return typeof e == "number" ? (n) => ze(e, t, n) : kt.test(e) ? Dk(e, t) : e.startsWith("var(") ? Vk(e, t) : Hk(e, t);
}
const Wk = (e, t) => {
  const n = [...e], r = n.length, o = e.map((i, a) => Bk(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++)
      n[a] = o[a](i);
    return n;
  };
}, mz = (e, t) => {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Bk(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}, Hk = (e, t) => {
  const n = co.createTransformer(t), r = Lc(e), o = Lc(t);
  return r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? io(Wk(r.values, o.values), n) : Vk(e, t);
}, nl = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Nb = (e, t) => (n) => ze(e, t, n);
function vz(e) {
  return typeof e == "number" ? Nb : typeof e == "string" ? kt.test(e) ? Dk : Hk : Array.isArray(e) ? Wk : typeof e == "object" ? mz : Nb;
}
function gz(e, t, n) {
  const r = [], o = n || vz(e[0]), i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || He : t;
      s = io(l, s);
    }
    r.push(s);
  }
  return r;
}
function Uk(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (ag(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = gz(t, r, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = nl(e[c], e[c + 1], u);
    return a[c](d);
  };
  return n ? (u) => l(uo(e[0], e[i - 1], u)) : l;
}
function yz(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = nl(0, t, r);
    e.push(ze(n, 1, o));
  }
}
function bz(e) {
  const t = [0];
  return yz(t, e.length - 1), t;
}
function Sz(e, t) {
  return e.map((n) => n * t);
}
function xz(e, t) {
  return e.map(() => t || Ok).splice(0, e.length - 1);
}
function jc({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = nz(r) ? r.map(jb) : jb(r), i = {
    done: !1,
    value: t[0]
  }, a = Sz(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : bz(t),
    e
  ), s = Uk(a, t, {
    ease: Array.isArray(o) ? o : xz(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function Gk(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const wz = 5;
function Kk(e, t, n) {
  const r = Math.max(t - wz, 0);
  return Gk(n - e(r), t - r);
}
const xp = 1e-3, Cz = 0.01, Vb = 10, kz = 0.05, Pz = 1;
function Ez({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, i;
  K3(e <= ao(Vb));
  let a = 1 - t;
  a = uo(kz, Pz, a), e = uo(Cz, Vb, br(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - n, p = Jh(u, a), g = Math.exp(-d);
    return xp - f / p * g;
  }, i = (u) => {
    const d = u * a * e, f = d * n + n, p = Math.pow(a, 2) * Math.pow(u, 2) * e, g = Math.exp(-d), y = Jh(Math.pow(u, 2), a);
    return (-o(u) + xp > 0 ? -1 : 1) * ((f - p) * g) / y;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -xp + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (n - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = _z(o, i, s);
  if (e = ao(e), isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const u = Math.pow(l, 2) * r;
    return {
      stiffness: u,
      damping: a * 2 * Math.sqrt(r * u),
      duration: e
    };
  }
}
const Tz = 12;
function _z(e, t, n) {
  let r = n;
  for (let o = 1; o < Tz; o++)
    r = r - e(r) / t(r);
  return r;
}
function Jh(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Oz = ["duration", "bounce"], Mz = ["stiffness", "damping", "mass"];
function Bb(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Iz(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Bb(e, Mz) && Bb(e, Oz)) {
    const n = Ez(e);
    t = {
      ...t,
      ...n,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Yk({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = Iz(r), p = c ? -br(c) : 0, g = l / (2 * Math.sqrt(s * u)), y = i - o, S = br(Math.sqrt(s / u)), h = Math.abs(y) < 5;
  n || (n = h ? 0.01 : 2), t || (t = h ? 5e-3 : 0.5);
  let m;
  if (g < 1) {
    const b = Jh(S, g);
    m = (x) => {
      const k = Math.exp(-g * S * x);
      return i - k * ((p + g * S * y) / b * Math.sin(b * x) + y * Math.cos(b * x));
    };
  } else if (g === 1)
    m = (b) => i - Math.exp(-S * b) * (y + (p + S * y) * b);
  else {
    const b = S * Math.sqrt(g * g - 1);
    m = (x) => {
      const k = Math.exp(-g * S * x), P = Math.min(b * x, 300);
      return i - k * ((p + g * S * y) * Math.sinh(P) + b * y * Math.cosh(P)) / b;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (b) => {
      const x = m(b);
      if (f)
        a.done = b >= d;
      else {
        let k = p;
        b !== 0 && (g < 1 ? k = Kk(m, b, x) : k = 0);
        const P = Math.abs(k) <= n, E = Math.abs(i - x) <= t;
        a.done = P && E;
      }
      return a.value = a.done ? i : x, a;
    }
  };
}
function Wb({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (T) => s !== void 0 && T < s || l !== void 0 && T > l, g = (T) => s === void 0 ? l : l === void 0 || Math.abs(s - T) < Math.abs(l - T) ? s : l;
  let y = n * t;
  const S = d + y, h = a === void 0 ? S : a(S);
  h !== S && (y = h - d);
  const m = (T) => -y * Math.exp(-T / r), b = (T) => h + m(T), x = (T) => {
    const M = m(T), I = b(T);
    f.done = Math.abs(M) <= u, f.value = f.done ? h : I;
  };
  let k, P;
  const E = (T) => {
    p(f.value) && (k = T, P = Yk({
      keyframes: [f.value, g(f.value)],
      velocity: Kk(b, T, f.value),
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: c
    }));
  };
  return E(0), {
    calculatedDuration: null,
    next: (T) => {
      let M = !1;
      return !P && k === void 0 && (M = !0, x(T), E(T)), k !== void 0 && T > k ? P.next(T - k) : (!M && x(T), f);
    }
  };
}
const Rz = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => _e.update(t, !0),
    stop: () => Tr(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ot.isProcessing ? ot.timestamp : performance.now()
  };
}, Hb = 2e4;
function Ub(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Hb; )
    t += n, r = e.next(t);
  return t >= Hb ? 1 / 0 : t;
}
const $z = {
  decay: Wb,
  inertia: Wb,
  tween: jc,
  keyframes: jc,
  spring: Yk
};
function zc({ autoplay: e = !0, delay: t = 0, driver: n = Rz, keyframes: r, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, g = !1, y, S;
  const h = () => {
    S = new Promise((V) => {
      y = V;
    });
  };
  h();
  let m;
  const b = $z[o] || jc;
  let x;
  b !== jc && typeof r[0] != "number" && (x = Uk([0, 100], r, {
    clamp: !1
  }), r = [0, 100]);
  const k = b({ ...f, keyframes: r });
  let P;
  s === "mirror" && (P = b({
    ...f,
    keyframes: [...r].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let E = "idle", T = null, M = null, I = null;
  k.calculatedDuration === null && i && (k.calculatedDuration = Ub(k));
  const { calculatedDuration: D } = k;
  let G = 1 / 0, H = 1 / 0;
  D !== null && (G = D + a, H = G * (i + 1) - a);
  let L = 0;
  const W = (V) => {
    if (M === null)
      return;
    p > 0 && (M = Math.min(M, V)), p < 0 && (M = Math.min(V - H / p, M)), T !== null ? L = T : L = Math.round(V - M) * p;
    const Y = L - t * (p >= 0 ? 1 : -1), z = p >= 0 ? Y < 0 : Y > H;
    L = Math.max(Y, 0), E === "finished" && T === null && (L = H);
    let te = L, le = k;
    if (i) {
      const Pe = L / G;
      let Je = Math.floor(Pe), qe = Pe % 1;
      !qe && Pe >= 1 && (qe = 1), qe === 1 && Je--, Je = Math.min(Je, i + 1);
      const an = !!(Je % 2);
      an && (s === "reverse" ? (qe = 1 - qe, a && (qe -= a / G)) : s === "mirror" && (le = P));
      let En = uo(0, 1, qe);
      L > H && (En = s === "reverse" && an ? 1 : 0), te = En * G;
    }
    const ae = z ? { done: !1, value: r[0] } : le.next(te);
    x && (ae.value = x(ae.value));
    let { done: se } = ae;
    !z && D !== null && (se = p >= 0 ? L >= H : L <= 0);
    const me = T === null && (E === "finished" || E === "running" && se);
    return d && d(ae.value), me && A(), ae;
  }, K = () => {
    m && m.stop(), m = void 0;
  }, $ = () => {
    E = "idle", K(), y(), h(), M = I = null;
  }, A = () => {
    E = "finished", c && c(), K(), y();
  }, j = () => {
    if (g)
      return;
    m || (m = n(W));
    const V = m.now();
    l && l(), T !== null ? M = V - T : (!M || E === "finished") && (M = V), E === "finished" && h(), I = M, T = null, E = "running", m.start();
  };
  e && j();
  const U = {
    then(V, Y) {
      return S.then(V, Y);
    },
    get time() {
      return br(L);
    },
    set time(V) {
      V = ao(V), L = V, T !== null || !m || p === 0 ? T = V : M = m.now() - V / p;
    },
    get duration() {
      const V = k.calculatedDuration === null ? Ub(k) : k.calculatedDuration;
      return br(V);
    },
    get speed() {
      return p;
    },
    set speed(V) {
      V === p || !m || (p = V, U.time = br(L));
    },
    get state() {
      return E;
    },
    play: j,
    pause: () => {
      E = "paused", T = L;
    },
    stop: () => {
      g = !0, E !== "idle" && (E = "idle", u && u(), $());
    },
    cancel: () => {
      I !== null && W(I), $();
    },
    complete: () => {
      E = "finished";
    },
    sample: (V) => (M = 0, W(V))
  };
  return U;
}
function Az(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Dz = Az(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Fz = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), cu = 10, Lz = 2e4, jz = (e, t) => t.type === "spring" || e === "backgroundColor" || !Pk(t.ease);
function zz(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (!(Dz() && Fz.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((m) => {
      s = m;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (jz(t, o)) {
    const m = zc({
      ...o,
      repeat: 0,
      delay: 0
    });
    let b = { done: !1, value: c[0] };
    const x = [];
    let k = 0;
    for (; !b.done && k < Lz; )
      b = m.sample(k), x.push(b.value), k += cu;
    p = void 0, c = x, d = k - cu, f = "linear";
  }
  const g = q3(e.owner.current, t, c, {
    ...o,
    duration: d,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: f,
    times: p
  });
  o.syncStart && (g.startTime = ot.isProcessing ? ot.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
  const y = () => g.cancel(), S = () => {
    _e.update(y), s(), u();
  };
  return g.onfinish = () => {
    e.set(X3(c, o)), r && r(), S();
  }, {
    then(m, b) {
      return l.then(m, b);
    },
    attachTimeline(m) {
      return g.timeline = m, g.onfinish = null, He;
    },
    get time() {
      return br(g.currentTime || 0);
    },
    set time(m) {
      g.currentTime = ao(m);
    },
    get speed() {
      return g.playbackRate;
    },
    set speed(m) {
      g.playbackRate = m;
    },
    get duration() {
      return br(d);
    },
    play: () => {
      a || (g.play(), Tr(y));
    },
    pause: () => g.pause(),
    stop: () => {
      if (a = !0, g.playState === "idle")
        return;
      const { currentTime: m } = g;
      if (m) {
        const b = zc({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(b.sample(m - cu).value, b.sample(m).value, cu);
      }
      S();
    },
    complete: () => g.finish(),
    cancel: S
  };
}
function Nz({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const o = () => (n && n(e[e.length - 1]), r && r(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: He,
    pause: He,
    stop: He,
    then: (i) => (i(), Promise.resolve()),
    cancel: He,
    complete: He
  });
  return t ? zc({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const Vz = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Bz = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Wz = {
  type: "keyframes",
  duration: 0.8
}, Hz = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Uz = (e, { keyframes: t }) => t.length > 2 ? Wz : ti.has(e) ? e.startsWith("scale") ? Bz(t[1]) : Vz : Hz, em = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(co.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), Gz = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Kz(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Hd) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = Gz.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const Yz = /([a-z-]*)\(.*?\)/g, tm = {
  ...co,
  getAnimatableNone: (e) => {
    const t = e.match(Yz);
    return t ? t.map(Kz).join(" ") : e;
  }
}, qz = {
  ...lk,
  // Color props
  color: kt,
  backgroundColor: kt,
  outlineColor: kt,
  fill: kt,
  stroke: kt,
  // Border props
  borderColor: kt,
  borderTopColor: kt,
  borderRightColor: kt,
  borderBottomColor: kt,
  borderLeftColor: kt,
  filter: tm,
  WebkitFilter: tm
}, cg = (e) => qz[e];
function qk(e, t) {
  let n = cg(e);
  return n !== tm && (n = co), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Xk = (e) => /^0[^.\s]+$/.test(e);
function Xz(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || Xk(e);
}
function Qz(e, t, n, r) {
  const o = em(t, n);
  let i;
  Array.isArray(n) ? i = [...n] : i = [null, n];
  const a = r.from !== void 0 ? r.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]), Xz(i[u]) && l.push(u), typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = qk(t, s);
    }
  return i;
}
function Zz({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function dg(e, t) {
  return e[t] || e.default || e;
}
const fg = (e, t, n, r = {}) => (o) => {
  const i = dg(r, e) || {}, a = i.delay || r.delay || 0;
  let { elapsed: s = 0 } = r;
  s = s - ao(a);
  const l = Qz(t, e, n, i), u = l[0], c = l[l.length - 1], d = em(e, u), f = em(e, c);
  let p = {
    keyframes: l,
    velocity: t.getVelocity(),
    ease: "easeOut",
    ...i,
    delay: -s,
    onUpdate: (g) => {
      t.set(g), i.onUpdate && i.onUpdate(g);
    },
    onComplete: () => {
      o(), i.onComplete && i.onComplete();
    }
  };
  if (Zz(i) || (p = {
    ...p,
    ...Uz(e, p)
  }), p.duration && (p.duration = ao(p.duration)), p.repeatDelay && (p.repeatDelay = ao(p.repeatDelay)), !d || !f || Y3.current || i.type === !1)
    return Nz(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const g = zz(t, e, p);
    if (g)
      return g;
  }
  return zc(p);
};
function Nc(e) {
  return !!(Bt(e) && e.add);
}
const Qk = (e) => /^\-?\d*\.?\d+$/.test(e);
function pg(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function hg(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class mg {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return pg(this.subscriptions, t), () => hg(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Jz = (e) => !isNaN(parseFloat(e));
class eN {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "10.16.12", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, o = !0) => {
      this.prev = this.current, this.current = r;
      const { delta: i, timestamp: a } = ot;
      this.lastUpdated !== a && (this.timeDelta = i, this.lastUpdated = a, _e.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => _e.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
      r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = Jz(this.current), this.owner = n.owner;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new mg());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), _e.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = t, this.timeDelta = r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t) {
    this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    return this.canTrackVelocity ? (
      // These casts could be avoided if parseFloat would be typed better
      Gk(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
    ) : 0;
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ha(e, t) {
  return new eN(e, t);
}
const Zk = (e) => (t) => t.test(e), tN = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Jk = [ni, ne, tr, zr, u3, l3, tN], Ua = (e) => Jk.find(Zk(e)), nN = [...Jk, kt, co], rN = (e) => nN.find(Zk(e));
function oN(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ha(n));
}
function iN(e, t) {
  const n = Gd(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = C3(i[a]);
    oN(e, a, s);
  }
}
function aN(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (Qk(c) || Xk(c)) ? c = parseFloat(c) : !rN(c) && co.test(u) && (c = qk(l, u)), e.addValue(l, ha(c, { owner: e })), n[l] === void 0 && (n[l] = c), c !== null && e.setBaseTarget(l, c));
    }
}
function sN(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function lN(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = sN(o, t);
    if (i !== void 0)
      r[o] = i;
    else {
      const a = n.getValue(o);
      a && (r[o] = a.get());
    }
  }
  return r;
}
function uN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function eP(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || c && uN(c, d))
      continue;
    const g = {
      delay: n,
      elapsed: 0,
      ...dg(i || {}, d)
    };
    let y = !0;
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const m = e.getProps()[tk];
      m && (y = !1, g.elapsed = window.HandoffAppearAnimations(m, d, f, _e), g.syncStart = !0);
    }
    let S = y && p === f.get();
    if (g.type === "spring" && (f.getVelocity() || g.velocity) && (S = !1), f.animation && (S = !1), S)
      continue;
    f.start(fg(d, f, p, e.shouldReduceMotion && ti.has(d) ? { type: !1 } : g));
    const h = f.animation;
    Nc(l) && (l.add(d), h.then(() => l.remove(d))), u.push(h);
  }
  return a && Promise.all(u).then(() => {
    a && iN(e, a);
  }), u;
}
function nm(e, t, n = {}) {
  const r = Gd(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(eP(e, r, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
    return cN(e, t, u + l, c, d, n);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function cN(e, t, n = 0, r = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * r, l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return Array.from(e.variantChildren).sort(dN).forEach((u, c) => {
    u.notify("AnimationStart", t), a.push(nm(u, t, {
      ...i,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function dN(e, t) {
  return e.sortNodePosition(t);
}
function fN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => nm(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = nm(e, t, n);
  else {
    const o = typeof t == "function" ? Gd(e, t, n.custom) : t;
    r = Promise.all(eP(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const pN = [...Xv].reverse(), hN = Xv.length;
function mN(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => fN(e, n, r)));
}
function vN(e) {
  let t = mN(e);
  const n = yN();
  let r = !0;
  const o = (l, u) => {
    const c = Gd(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...p } = c;
      l = { ...l, ...p, ...f };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function a(l, u) {
    const c = e.getProps(), d = e.getVariantContext(!0) || {}, f = [], p = /* @__PURE__ */ new Set();
    let g = {}, y = 1 / 0;
    for (let h = 0; h < hN; h++) {
      const m = pN[h], b = n[m], x = c[m] !== void 0 ? c[m] : d[m], k = el(x), P = m === u ? b.isActive : null;
      P === !1 && (y = h);
      let E = x === d[m] && x !== c[m] && k;
      if (E && r && e.manuallyAnimateOnMount && (E = !1), b.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !x && !b.prevProp || // Or if the prop doesn't define an animation
      Bd(x) || typeof x == "boolean")
        continue;
      const T = gN(b.prevProp, x);
      let M = T || // If we're making this variant active, we want to always make it active
      m === u && b.isActive && !E && k || // If we removed a higher-priority variant (i is in reverse order)
      h > y && k;
      const I = Array.isArray(x) ? x : [x];
      let D = I.reduce(o, {});
      P === !1 && (D = {});
      const { prevResolvedValues: G = {} } = b, H = {
        ...G,
        ...D
      }, L = (W) => {
        M = !0, p.delete(W), b.needsAnimating[W] = !0;
      };
      for (const W in H) {
        const K = D[W], $ = G[W];
        g.hasOwnProperty(W) || (K !== $ ? Fc(K) && Fc($) ? !Ck(K, $) || T ? L(W) : b.protectedKeys[W] = !0 : K !== void 0 ? L(W) : p.add(W) : K !== void 0 && p.has(W) ? L(W) : b.protectedKeys[W] = !0);
      }
      b.prevProp = x, b.prevResolvedValues = D, b.isActive && (g = { ...g, ...D }), r && e.blockInitialAnimation && (M = !1), M && !E && f.push(...I.map((W) => ({
        animation: W,
        options: { type: m, ...l }
      })));
    }
    if (p.size) {
      const h = {};
      p.forEach((m) => {
        const b = e.getBaseTarget(m);
        b !== void 0 && (h[m] = b);
      }), f.push({ animation: h });
    }
    let S = !!f.length;
    return r && c.initial === !1 && !e.manuallyAnimateOnMount && (S = !1), r = !1, S ? t(f) : Promise.resolve();
  }
  function s(l, u, c) {
    var d;
    if (n[l].isActive === u)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((p) => {
      var g;
      return (g = p.animationState) === null || g === void 0 ? void 0 : g.setActive(l, u);
    }), n[l].isActive = u;
    const f = a(c, l);
    for (const p in n)
      n[p].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => n
  };
}
function gN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ck(t, e) : !1;
}
function xo(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function yN() {
  return {
    animate: xo(!0),
    whileInView: xo(),
    whileHover: xo(),
    whileTap: xo(),
    whileDrag: xo(),
    whileFocus: xo(),
    exit: xo()
  };
}
class bN extends mo {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = vN(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Bd(t) && (this.unmount = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
}
let SN = 0;
class xN extends mo {
  constructor() {
    super(...arguments), this.id = SN++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n, custom: r } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o)
      return;
    const i = this.node.animationState.setActive("exit", !t, { custom: r ?? this.node.getProps().custom });
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const wN = {
  animation: {
    Feature: bN
  },
  exit: {
    Feature: xN
  }
}, Gb = (e, t) => Math.abs(e - t);
function CN(e, t) {
  const n = Gb(e.x, t.x), r = Gb(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class tP {
  constructor(t, n, { transformPagePoint: r, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = Cp(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = CN(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = c, { timestamp: g } = ot;
      this.history.push({ ...p, timestamp: g });
      const { onStart: y, onMove: S } = this.handlers;
      d || (y && y(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), S && S(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = wp(d, this.transformPagePoint), _e.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: p } = this.handlers, g = Cp(c.type === "pointercancel" ? this.lastMoveEventInfo : wp(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, g), p && p(c, g);
    }, !yk(t))
      return;
    this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Ud(t), a = wp(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = ot;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(t, Cp(a, this.history)), this.removeListeners = io(yr(this.contextWindow, "pointermove", this.handlePointerMove), yr(this.contextWindow, "pointerup", this.handlePointerUp), yr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Tr(this.updatePoint);
  }
}
function wp(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Kb(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Cp({ point: e }, t) {
  return {
    point: e,
    delta: Kb(e, nP(t)),
    offset: Kb(e, kN(t)),
    velocity: PN(t, 0.1)
  };
}
function kN(e) {
  return e[0];
}
function nP(e) {
  return e[e.length - 1];
}
function PN(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = nP(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > ao(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = br(o.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - r.x) / i,
    y: (o.y - r.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Jt(e) {
  return e.max - e.min;
}
function rm(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Yb(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ze(t.min, t.max, e.origin), e.scale = Jt(n) / Jt(t), (rm(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = ze(n.min, n.max, e.origin) - e.originPoint, (rm(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ks(e, t, n, r) {
  Yb(e.x, t.x, n.x, r ? r.originX : void 0), Yb(e.y, t.y, n.y, r ? r.originY : void 0);
}
function qb(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Jt(t);
}
function EN(e, t, n) {
  qb(e.x, t.x, n.x), qb(e.y, t.y, n.y);
}
function Xb(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Jt(t);
}
function Ps(e, t, n) {
  Xb(e.x, t.x, n.x), Xb(e.y, t.y, n.y);
}
function TN(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ze(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ze(n, e, r.max) : Math.min(e, n)), e;
}
function Qb(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function _N(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Qb(e.x, n, o),
    y: Qb(e.y, t, r)
  };
}
function Zb(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function ON(e, t) {
  return {
    x: Zb(e.x, t.x),
    y: Zb(e.y, t.y)
  };
}
function MN(e, t) {
  let n = 0.5;
  const r = Jt(e), o = Jt(t);
  return o > r ? n = nl(t.min, t.max - r, e.min) : r > o && (n = nl(e.min, e.max - o, t.min)), uo(0, 1, n);
}
function IN(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const om = 0.35;
function RN(e = om) {
  return e === !1 ? e = 0 : e === !0 && (e = om), {
    x: Jb(e, "left", "right"),
    y: Jb(e, "top", "bottom")
  };
}
function Jb(e, t, n) {
  return {
    min: e1(e, t),
    max: e1(e, n)
  };
}
function e1(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const t1 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Di = () => ({
  x: t1(),
  y: t1()
}), n1 = () => ({ min: 0, max: 0 }), Xe = () => ({
  x: n1(),
  y: n1()
});
function Hn(e) {
  return [e("x"), e("y")];
}
function rP({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function $N({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function AN(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function kp(e) {
  return e === void 0 || e === 1;
}
function im({ scale: e, scaleX: t, scaleY: n }) {
  return !kp(e) || !kp(t) || !kp(n);
}
function Po(e) {
  return im(e) || oP(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function oP(e) {
  return r1(e.x) || r1(e.y);
}
function r1(e) {
  return e && e !== "0%";
}
function Vc(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function o1(e, t, n, r, o) {
  return o !== void 0 && (e = Vc(e, o, r)), Vc(e, n, r) + t;
}
function am(e, t = 0, n = 1, r, o) {
  e.min = o1(e.min, t, n, r, o), e.max = o1(e.max, t, n, r, o);
}
function iP(e, { x: t, y: n }) {
  am(e.x, t.translate, t.scale, t.originPoint), am(e.y, n.translate, n.scale, n.originPoint);
}
function DN(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = n[s], a = i.projectionDelta;
    const l = i.instance;
    l && l.style && l.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Fi(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, iP(e, a)), r && Po(i.latestValues) && Fi(e, i.latestValues));
  }
  t.x = i1(t.x), t.y = i1(t.y);
}
function i1(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Br(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function a1(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = ze(e.min, e.max, i);
  am(e, t[n], t[r], a, t.scale);
}
const FN = ["x", "scaleX", "originX"], LN = ["y", "scaleY", "originY"];
function Fi(e, t) {
  a1(e.x, t, FN), a1(e.y, t, LN);
}
function aP(e, t) {
  return rP(AN(e.getBoundingClientRect(), t));
}
function jN(e, t, n) {
  const r = aP(e, n), { scroll: o } = t;
  return o && (Br(r.x, o.offset.x), Br(r.y, o.offset.y)), r;
}
const sP = ({ current: e }) => e ? e.ownerDocument.defaultView : null, zN = /* @__PURE__ */ new WeakMap();
class NN {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Xe(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), n && this.snapToCursor(Ud(l, "page").point);
    }, i = (l, u) => {
      const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Sk(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Hn((g) => {
        let y = this.getAxisMotionValue(g).get() || 0;
        if (tr.test(y)) {
          const { projection: S } = this.visualElement;
          if (S && S.layout) {
            const h = S.layout.layoutBox[g];
            h && (y = Jt(h) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[g] = y;
      }), f && _e.update(() => f(l, u), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: g } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = VN(g), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, g), this.updateAxis("y", u.point, g), this.visualElement.render(), p && p(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new tP(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: sP(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && _e.update(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !du(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (a = TN(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    n && $i(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = _N(o.layoutBox, n) : this.constraints = !1, this.elastic = RN(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Hn((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = IN(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !$i(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = jN(r, o.root, this.visualElement.getTransformPagePoint());
    let a = ON(o.layout.layoutBox, i);
    if (n) {
      const s = n($N(a));
      this.hasMutatedConstraints = !!s, s && (a = rP(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = Hn((c) => {
      if (!du(c, n, this.currentDirection))
        return;
      let d = l && l[c] || {};
      a && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, p = o ? 40 : 1e7, g = {
        type: "inertia",
        velocity: r ? t[c] : 0,
        bounceStiffness: f,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...d
      };
      return this.startAxisValueAnimation(c, g);
    });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(fg(t, r, 0, n));
  }
  stopAnimation() {
    Hn((t) => this.getAxisMotionValue(t).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(), r = this.visualElement.getProps(), o = r[n];
    return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Hn((n) => {
      const { drag: r } = this.getProps();
      if (!du(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[n];
        i.set(t[n] - ze(a, s, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!$i(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Hn((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = MN({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Hn((a) => {
      if (!du(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set(ze(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    zN.set(this.visualElement, this);
    const t = this.visualElement.current, n = yr(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      $i(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const a = mr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (Hn((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), n(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = om, dragMomentum: s = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s
    };
  }
}
function du(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function VN(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class BN extends mo {
  constructor(t) {
    super(t), this.removeGroupControls = He, this.removeListeners = He, this.controls = new NN(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || He;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const s1 = (e) => (t, n) => {
  e && _e.update(() => e(t, n));
};
class WN extends mo {
  constructor() {
    super(...arguments), this.removePointerDownListener = He;
  }
  onPointerDown(t) {
    this.session = new tP(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: sP(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: s1(t),
      onStart: s1(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && _e.update(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = yr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function lP() {
  const e = v.useContext(yl);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = v.useId();
  return v.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function HN() {
  return UN(v.useContext(yl));
}
function UN(e) {
  return e === null ? !0 : e.isPresent;
}
const qu = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function l1(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Ga = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (ne.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = l1(e, t.target.x), r = l1(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, GN = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = co.parse(e);
    if (o.length > 5)
      return r;
    const i = co.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= l;
    const u = ze(s, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
};
class KN extends re.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    t3(YN), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), qu.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, a = r.projection;
    return a && (a.isPresent = i, o || t.layoutDependency !== n || n === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || _e.postRender(() => {
      const s = a.getStack();
      (!s || !s.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), queueMicrotask(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function uP(e) {
  const [t, n] = lP(), r = v.useContext(Zv);
  return re.createElement(KN, { ...e, layoutGroup: r, switchLayoutGroup: v.useContext(rk), isPresent: t, safeToRemove: n });
}
const YN = {
  borderRadius: {
    ...Ga,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Ga,
  borderTopRightRadius: Ga,
  borderBottomLeftRadius: Ga,
  borderBottomRightRadius: Ga,
  boxShadow: GN
}, cP = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], qN = cP.length, u1 = (e) => typeof e == "string" ? parseFloat(e) : e, c1 = (e) => typeof e == "number" || ne.test(e);
function XN(e, t, n, r, o, i) {
  o ? (e.opacity = ze(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    QN(r)
  ), e.opacityExit = ze(t.opacity !== void 0 ? t.opacity : 1, 0, ZN(r))) : i && (e.opacity = ze(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let a = 0; a < qN; a++) {
    const s = `border${cP[a]}Radius`;
    let l = d1(t, s), u = d1(n, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || c1(l) === c1(u) ? (e[s] = Math.max(ze(u1(l), u1(u), r), 0), (tr.test(u) || tr.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = ze(t.rotate || 0, n.rotate || 0, r));
}
function d1(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const QN = dP(0, 0.5, sg), ZN = dP(0.5, 0.95, He);
function dP(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(nl(e, t, r));
}
function f1(e, t) {
  e.min = t.min, e.max = t.max;
}
function cn(e, t) {
  f1(e.x, t.x), f1(e.y, t.y);
}
function p1(e, t, n, r, o) {
  return e -= t, e = Vc(e, 1 / n, r), o !== void 0 && (e = Vc(e, 1 / o, r)), e;
}
function JN(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (tr.test(t) && (t = parseFloat(t), t = ze(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = ze(i.min, i.max, r);
  e === i && (s -= t), e.min = p1(e.min, t, n, s, o), e.max = p1(e.max, t, n, s, o);
}
function h1(e, t, [n, r, o], i, a) {
  JN(e, t[n], t[r], t[o], t.scale, i, a);
}
const eV = ["x", "scaleX", "originX"], tV = ["y", "scaleY", "originY"];
function m1(e, t, n, r) {
  h1(e.x, t, eV, n ? n.x : void 0, r ? r.x : void 0), h1(e.y, t, tV, n ? n.y : void 0, r ? r.y : void 0);
}
function v1(e) {
  return e.translate === 0 && e.scale === 1;
}
function fP(e) {
  return v1(e.x) && v1(e.y);
}
function nV(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function pP(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function g1(e) {
  return Jt(e.x) / Jt(e.y);
}
class rV {
  constructor() {
    this.members = [];
  }
  add(t) {
    pg(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (hg(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0)
      return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function y1(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || "none";
}
const oV = (e, t) => e.depth - t.depth;
class iV {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    pg(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    hg(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(oV), this.isDirty = !1, this.children.forEach(t);
  }
}
function aV(e, t) {
  const n = performance.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (Tr(r), e(i - t));
  };
  return _e.read(r, !0), () => Tr(r);
}
function sV(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function lV(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function uV(e, t, n) {
  const r = Bt(e) ? e : ha(e);
  return r.start(fg("", r, t, n)), r.animation;
}
const b1 = ["", "X", "Y", "Z"], cV = { visibility: "hidden" }, S1 = 1e3;
let dV = 0;
const Eo = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function hP({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = dV++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Eo.totalNodes = Eo.resolvedTargetDeltas = Eo.recalculatedProjection = 0, this.nodes.forEach(hV), this.nodes.forEach(bV), this.nodes.forEach(SV), this.nodes.forEach(mV), sV(Eo);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new iV());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new mg()), this.eventHandlers.get(a).add(s);
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    /**
     * Lifecycles
     */
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = lV(a), this.instance = a;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = aV(f, 250), qu.hasAnimatedSinceResize && (qu.hasAnimatedSinceResize = !1, this.nodes.forEach(w1));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: g }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || c.getDefaultTransition() || PV, { onLayoutAnimationStart: S, onLayoutAnimationComplete: h } = c.getProps(), m = !this.targetLayout || !pP(this.targetLayout, g) || p, b = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || b || f && (m || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, b);
          const x = {
            ...dg(y, "layout"),
            onPlay: S,
            onComplete: h
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x);
        } else
          f || w1(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = g;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Tr(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(xV), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), a && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(x1);
        return;
      }
      this.isUpdating || this.nodes.forEach(gV), this.isUpdating = !1, this.nodes.forEach(yV), this.nodes.forEach(fV), this.nodes.forEach(pV), this.clearAllSnapshots();
      const s = performance.now();
      ot.delta = uo(0, 1e3 / 60, s - ot.timestamp), ot.timestamp = s, ot.isProcessing = !0, hp.update.process(ot), hp.preRender.process(ot), hp.render.process(ot), ot.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(vV), this.sharedNodes.forEach(wV);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, _e.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      _e.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Xe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s && s.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0);
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (s = !1), s && (this.scroll = {
        animationId: this.root.animationId,
        phase: a,
        isRoot: r(this.instance),
        offset: n(this.instance)
      });
    }
    resetTransform() {
      if (!o)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !fP(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      a && (s || Po(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), EV(l), {
        animationId: this.root.animationId,
        measuredBox: s,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a)
        return Xe();
      const s = a.measureViewportBox(), { scroll: l } = this.root;
      return l && (Br(s.x, l.offset.x), Br(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = Xe();
      cn(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            cn(s, a);
            const { scroll: f } = this.root;
            f && (Br(s.x, -f.offset.x), Br(s.y, -f.offset.y));
          }
          Br(s.x, c.offset.x), Br(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Xe();
      cn(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s && c.options.layoutScroll && c.scroll && c !== c.root && Fi(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Po(c.latestValues) && Fi(l, c.latestValues);
      }
      return Po(this.latestValues) && Fi(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Xe();
      cn(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Po(u.latestValues))
          continue;
        im(u.latestValues) && u.updateSnapshot();
        const c = Xe(), d = u.measurePageBox();
        cn(c, d), m1(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Po(this.latestValues) && m1(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      this.targetDelta = a, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ot.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (!(a || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (this.resolvedRelativeTargetAt = ot.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), Ps(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), cn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Xe(), this.targetWithTransforms = Xe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), EN(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : cn(this.target, this.layout.layoutBox), iP(this.target, this.targetDelta)) : cn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), Ps(this.relativeTargetOrigin, this.target, p.target), cn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Eo.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || im(this.parent.latestValues) || oP(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var a;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let u = !0;
      if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === ot.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      cn(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      DN(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: g } = s;
      if (!g) {
        this.projectionTransform && (this.projectionDelta = Di(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Di(), this.projectionDeltaWithTransform = Di());
      const y = this.projectionTransform;
      ks(this.projectionDelta, this.layoutCorrected, g, this.latestValues), this.projectionTransform = y1(this.projectionDelta, this.treeScale), (this.projectionTransform !== y || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), Eo.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), a) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = Di();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = Xe(), p = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, y = p !== g, S = this.getStack(), h = !S || S.members.length <= 1, m = !!(y && !h && this.options.crossfade === !0 && !this.path.some(kV));
      this.animationProgress = 0;
      let b;
      this.mixTargetDelta = (x) => {
        const k = x / 1e3;
        C1(d.x, a.x, k), C1(d.y, a.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ps(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), CV(this.relativeTarget, this.relativeTargetOrigin, f, k), b && nV(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = Xe()), cn(b, this.relativeTarget)), y && (this.animationValues = c, XN(c, u, this.latestValues, k, m, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Tr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = _e.update(() => {
        qu.hasAnimatedSinceResize = !0, this.currentAnimation = uV(0, S1, {
          ...a,
          onUpdate: (s) => {
            this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
          },
          onComplete: () => {
            a.onComplete && a.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const a = this.getStack();
      a && a.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(S1), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a;
      if (!(!s || !l || !u)) {
        if (this !== a && this.layout && u && mP(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Xe();
          const d = Jt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = Jt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        cn(s, l), Fi(s, c), ks(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new rV()), this.sharedNodes.get(a).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(s) : void 0
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? (a = this.getStack()) === null || a === void 0 ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a)
        return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), a && (this.projectionDelta = void 0, this.needsReset = !0), s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a)
        return;
      let s = !1;
      const { latestValues: l } = a;
      if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s)
        return;
      const u = {};
      for (let c = 0; c < b1.length; c++) {
        const d = "rotate" + b1[c];
        l[d] && (u[d] = l[d], a.setStaticValue(d, 0));
      }
      a.render();
      for (const c in u)
        a.setStaticValue(c, u[c]);
      a.scheduleRender();
    }
    getProjectionStyles(a) {
      var s, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return cV;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Yu(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = Yu(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !Po(this.latestValues) && (y.transform = c ? c({}, "") : "none", this.hasProjected = !1), y;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = y1(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y: g } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const y in Ac) {
        if (f[y] === void 0)
          continue;
        const { correct: S, applyTo: h } = Ac[y], m = u.transform === "none" ? f[y] : S(f[y], d);
        if (h) {
          const b = h.length;
          for (let x = 0; x < b; x++)
            u[h[x]] = m;
        } else
          u[y] = m;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? Yu(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(x1), this.root.sharedNodes.clear();
    }
  };
}
function fV(e) {
  e.updateLayout();
}
function pV(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, a = n.source !== e.layout.source;
    i === "size" ? Hn((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Jt(f);
      f.min = r[d].min, f.max = f.min + p;
    }) : mP(i, n.layoutBox, r) && Hn((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Jt(r[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = Di();
    ks(s, r, n.layoutBox);
    const l = Di();
    a ? ks(l, e.applyTransform(o, !0), n.measuredBox) : ks(l, r, n.layoutBox);
    const u = !fP(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const g = Xe();
          Ps(g, n.layoutBox, f.layoutBox);
          const y = Xe();
          Ps(y, r, p.layoutBox), pP(g, y) || (c = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = g, e.relativeParent = d);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function hV(e) {
  Eo.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function mV(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function vV(e) {
  e.clearSnapshot();
}
function x1(e) {
  e.clearMeasurements();
}
function gV(e) {
  e.isLayoutDirty = !1;
}
function yV(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function w1(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function bV(e) {
  e.resolveTargetDelta();
}
function SV(e) {
  e.calcProjection();
}
function xV(e) {
  e.resetRotation();
}
function wV(e) {
  e.removeLeadSnapshot();
}
function C1(e, t, n) {
  e.translate = ze(t.translate, 0, n), e.scale = ze(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function k1(e, t, n, r) {
  e.min = ze(t.min, n.min, r), e.max = ze(t.max, n.max, r);
}
function CV(e, t, n, r) {
  k1(e.x, t.x, n.x, r), k1(e.y, t.y, n.y, r);
}
function kV(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const PV = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, P1 = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), E1 = P1("applewebkit/") && !P1("chrome/") ? Math.round : He;
function T1(e) {
  e.min = E1(e.min), e.max = E1(e.max);
}
function EV(e) {
  T1(e.x), T1(e.y);
}
function mP(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !rm(g1(t), g1(n), 0.2);
}
const TV = hP({
  attachResizeListener: (e, t) => mr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Pp = {
  current: void 0
}, vP = hP({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Pp.current) {
      const e = new TV({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Pp.current = e;
    }
    return Pp.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), _V = {
  pan: {
    Feature: WN
  },
  drag: {
    Feature: BN,
    ProjectionNode: vP,
    MeasureLayout: uP
  }
}, OV = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function MV(e) {
  const t = OV.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
}
function sm(e, t, n = 1) {
  const [r, o] = MV(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return Qk(a) ? parseFloat(a) : a;
  } else
    return Xh(o) ? sm(o, t, n + 1) : o;
}
function IV(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element))
    return { target: t, transitionEnd: n };
  n && (n = { ...n }), e.values.forEach((o) => {
    const i = o.get();
    if (!Xh(i))
      return;
    const a = sm(i, r);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!Xh(i))
      continue;
    const a = sm(i, r);
    a && (t[o] = a, n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const RV = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), gP = (e) => RV.has(e), $V = (e) => Object.keys(e).some(gP), _1 = (e) => e === ni || e === ne, O1 = (e, t) => parseFloat(e.split(", ")[t]), M1 = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/);
  if (o)
    return O1(o[1], t);
  {
    const i = r.match(/^matrix\((.+)\)$/);
    return i ? O1(i[1], e) : 0;
  }
}, AV = /* @__PURE__ */ new Set(["x", "y", "z"]), DV = bl.filter((e) => !AV.has(e));
function FV(e) {
  const t = [];
  return DV.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const ma = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: M1(4, 13),
  y: M1(5, 14)
};
ma.translateX = ma.x;
ma.translateY = ma.y;
const LV = (e, t, n) => {
  const r = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((u) => {
    s[u] = ma[u](r, i);
  }), t.render();
  const l = t.measureViewportBox();
  return n.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = ma[u](l, i);
  }), e;
}, jV = (e, t, n = {}, r = {}) => {
  t = { ...t }, r = { ...r };
  const o = Object.keys(t).filter(gP);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = n[l], d = Ua(c);
    const f = t[l];
    let p;
    if (Fc(f)) {
      const g = f.length, y = f[0] === null ? 1 : 0;
      c = f[y], d = Ua(c);
      for (let S = y; S < g && f[S] !== null; S++)
        p ? ag(Ua(f[S]) === p) : p = Ua(f[S]);
    } else
      p = Ua(f);
    if (d !== p)
      if (_1(d) && _1(p)) {
        const g = u.get();
        typeof g == "string" && u.set(parseFloat(g)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === ne && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = FV(e), a = !0), s.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = LV(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), Vd && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: r };
  } else
    return { target: t, transitionEnd: r };
};
function zV(e, t, n, r) {
  return $V(t) ? jV(e, t, n, r) : { target: t, transitionEnd: r };
}
const NV = (e, t, n, r) => {
  const o = IV(e, t, r);
  return t = o.target, r = o.transitionEnd, zV(e, t, n, r);
}, lm = { current: null }, yP = { current: !1 };
function VV() {
  if (yP.current = !0, !!Vd)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => lm.current = e.matches;
      e.addListener(t), t();
    } else
      lm.current = !1;
}
function BV(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o], a = n[o];
    if (Bt(i))
      e.addValue(o, i), Nc(r) && r.add(o);
    else if (Bt(a))
      e.addValue(o, ha(i, { owner: e })), Nc(r) && r.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, ha(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in n)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const I1 = /* @__PURE__ */ new WeakMap(), bP = Object.keys(tl), WV = bP.length, R1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], HV = Qv.length;
class UV {
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => _e.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = n.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = Wd(n), this.isVariantNode = nk(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && Bt(f) && (f.set(s[d], !1), Nc(u) && u.add(d));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    this.current = t, I1.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), yP.current || VV(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : lm.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    I1.delete(this.current), this.projection && this.projection.unmount(), Tr(this.notifyUpdate), Tr(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = ti.has(t), o = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && _e.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
    }), i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, o, i) {
    let a, s;
    for (let l = 0; l < WV; l++) {
      const u = bP[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = tl[u];
      f && (a = f), c(n) && (!this.features[u] && d && (this.features[u] = new d(this)), p && (s = p));
    }
    if (!this.projection && a) {
      this.projection = new a(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: p } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || d && $i(d),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: f,
        layoutRoot: p
      });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), n.isMounted = !0);
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Xe();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < R1.length; r++) {
      const o = R1[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = BV(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = !1) {
    if (t)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
    }
    const n = {};
    for (let r = 0; r < HV; r++) {
      const o = Qv[r], i = this.props[o];
      (el(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)), this.values.set(t, n), this.latestValues[t] = n.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = ha(n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = ig(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
    if (r && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Bt(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new mg()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class SP extends UV {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance({ transition: t, transitionEnd: n, ...r }, { transformValues: o }, i) {
    let a = lN(r, t || {}, this);
    if (o && (n && (n = o(n)), r && (r = o(r)), a && (a = o(a))), i) {
      aN(this, r, a);
      const s = NV(this, r, a, n);
      n = s.transitionEnd, r = s.target;
    }
    return {
      transition: t,
      transitionEnd: n,
      ...r
    };
  }
}
function GV(e) {
  return window.getComputedStyle(e);
}
class KV extends SP {
  readValueFromInstance(t, n) {
    if (ti.has(n)) {
      const r = cg(n);
      return r && r.default || 0;
    } else {
      const r = GV(t), o = (ak(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return aP(t, n);
  }
  build(t, n, r, o) {
    eg(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return og(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Bt(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
  renderInstance(t, n, r, o) {
    fk(t, n, r, o);
  }
}
class YV extends SP {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (ti.has(n)) {
      const r = cg(n);
      return r && r.default || 0;
    }
    return n = pk.has(n) ? n : qv(n), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Xe();
  }
  scrapeMotionValuesFromProps(t, n) {
    return mk(t, n);
  }
  build(t, n, r, o) {
    ng(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    hk(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = rg(t.tagName), super.mount(t);
  }
}
const qV = (e, t) => Jv(e) ? new YV(t, { enableHardwareAcceleration: !1 }) : new KV(t, { enableHardwareAcceleration: !0 }), XV = {
  layout: {
    ProjectionNode: vP,
    MeasureLayout: uP
  }
}, QV = {
  ...wN,
  ...H3,
  ..._V,
  ...XV
}, Mr = /* @__PURE__ */ Jj((e, t) => I3(e, t, QV, qV));
function xP() {
  const e = v.useRef(!1);
  return Yv(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function ZV() {
  const e = xP(), [t, n] = v.useState(0), r = v.useCallback(() => {
    e.current && n(t + 1);
  }, [t]);
  return [v.useCallback(() => _e.postRender(r), [r]), t];
}
class JV extends v.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function eB({ children: e, isPresent: t }) {
  const n = v.useId(), r = v.useRef(null), o = v.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return v.useInsertionEffect(() => {
    const { width: i, height: a, top: s, left: l } = o.current;
    if (t || !r.current || !i || !a)
      return;
    r.current.dataset.motionPopId = n;
    const u = document.createElement("style");
    return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(u);
    };
  }, [t]), v.createElement(JV, { isPresent: t, childRef: r, sizeRef: o }, v.cloneElement(e, { ref: r }));
}
const Ep = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = vk(tB), l = v.useId(), u = v.useMemo(
    () => ({
      id: l,
      initial: t,
      isPresent: n,
      custom: o,
      onExitComplete: (c) => {
        s.set(c, !0);
        for (const d of s.values())
          if (!d)
            return;
        r && r();
      },
      register: (c) => (s.set(c, !1), () => s.delete(c))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    i ? void 0 : [n]
  );
  return v.useMemo(() => {
    s.forEach((c, d) => s.set(d, !1));
  }, [n]), v.useEffect(() => {
    !n && !s.size && r && r();
  }, [n]), a === "popLayout" && (e = v.createElement(eB, { isPresent: n }, e)), v.createElement(yl.Provider, { value: u }, e);
};
function tB() {
  return /* @__PURE__ */ new Map();
}
function nB(e) {
  return v.useEffect(() => () => e(), []);
}
const To = (e) => e.key || "";
function rB(e, t) {
  e.forEach((n) => {
    const r = To(n);
    t.set(r, n);
  });
}
function oB(e) {
  const t = [];
  return v.Children.forEach(e, (n) => {
    v.isValidElement(n) && t.push(n);
  }), t;
}
const Ta = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  const s = v.useContext(Zv).forceRender || ZV()[0], l = xP(), u = oB(e);
  let c = u;
  const d = v.useRef(/* @__PURE__ */ new Map()).current, f = v.useRef(c), p = v.useRef(/* @__PURE__ */ new Map()).current, g = v.useRef(!0);
  if (Yv(() => {
    g.current = !1, rB(u, p), f.current = c;
  }), nB(() => {
    g.current = !0, p.clear(), d.clear();
  }), g.current)
    return v.createElement(v.Fragment, null, c.map((m) => v.createElement(Ep, { key: To(m), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: i, mode: a }, m)));
  c = [...c];
  const y = f.current.map(To), S = u.map(To), h = y.length;
  for (let m = 0; m < h; m++) {
    const b = y[m];
    S.indexOf(b) === -1 && !d.has(b) && d.set(b, void 0);
  }
  return a === "wait" && d.size && (c = []), d.forEach((m, b) => {
    if (S.indexOf(b) !== -1)
      return;
    const x = p.get(b);
    if (!x)
      return;
    const k = y.indexOf(b);
    let P = m;
    if (!P) {
      const E = () => {
        d.delete(b);
        const T = Array.from(p.keys()).filter((M) => !S.includes(M));
        if (T.forEach((M) => p.delete(M)), f.current = u.filter((M) => {
          const I = To(M);
          return (
            // filter out the node exiting
            I === b || // filter out the leftover children
            T.includes(I)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          s(), r && r();
        }
      };
      P = v.createElement(Ep, { key: To(x), isPresent: !1, onExitComplete: E, custom: t, presenceAffectsLayout: i, mode: a }, x), d.set(b, P);
    }
    c.splice(k, 0, P);
  }), c = c.map((m) => {
    const b = m.key;
    return d.has(b) ? m : v.createElement(Ep, { key: To(m), isPresent: !0, presenceAffectsLayout: i, mode: a }, m);
  }), v.createElement(v.Fragment, null, d.size ? c : c.map((m) => v.cloneElement(m)));
};
var iB = {
  initial: (e) => {
    const { position: t } = e, n = ["top", "bottom"].includes(t) ? "y" : "x";
    let r = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
    return t === "bottom" && (r = 1), {
      opacity: 0,
      [n]: r * 24
    };
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
}, wP = v.memo((e) => {
  const {
    id: t,
    message: n,
    onCloseComplete: r,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: u = iB,
    toastSpacing: c = "0.5rem"
  } = e, [d, f] = v.useState(s), p = HN();
  pa(() => {
    p || r == null || r();
  }, [p]), pa(() => {
    f(s);
  }, [s]);
  const g = () => f(null), y = () => f(s), S = () => {
    p && o();
  };
  v.useEffect(() => {
    p && i && o();
  }, [p, i, o]), Wj(S, d);
  const h = v.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), m = v.useMemo(() => Vj(a), [a]);
  return /* @__PURE__ */ w.jsx(
    Mr.div,
    {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: g,
      onHoverEnd: y,
      custom: { position: a },
      style: m,
      children: /* @__PURE__ */ w.jsx(
        X.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: h,
          children: Xn(n, { id: t, onClose: S })
        }
      )
    }
  );
});
wP.displayName = "ToastComponent";
var $1 = {
  path: /* @__PURE__ */ w.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ w.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ w.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ w.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, Pn = oe((e, t) => {
  const {
    as: n,
    viewBox: r,
    color: o = "currentColor",
    focusable: i = !1,
    children: a,
    className: s,
    __css: l,
    ...u
  } = e, c = ie("chakra-icon", s), d = ei("Icon", e), f = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: o,
    ...l,
    ...d
  }, p = {
    ref: t,
    focusable: i,
    className: c,
    __css: f
  }, g = r ?? $1.viewBox;
  if (n && typeof n != "string")
    return /* @__PURE__ */ w.jsx(X.svg, { as: n, ...p, ...u });
  const y = a ?? $1.path;
  return /* @__PURE__ */ w.jsx(X.svg, { verticalAlign: "middle", viewBox: g, ...p, ...u, children: y });
});
Pn.displayName = "Icon";
function aB(e) {
  return /* @__PURE__ */ w.jsx(Pn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function sB(e) {
  return /* @__PURE__ */ w.jsx(Pn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function A1(e) {
  return /* @__PURE__ */ w.jsx(Pn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var lB = vC({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Kd = oe((e, t) => {
  const n = ei("Spinner", e), {
    label: r = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = on(e), u = ie("chakra-spinner", s), c = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${lB} ${i} linear infinite`,
    ...n
  };
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: r && /* @__PURE__ */ w.jsx(X.span, { srOnly: !0, children: r })
    }
  );
});
Kd.displayName = "Spinner";
var [uB, vg] = nt({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [cB, gg] = nt({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), CP = {
  info: { icon: sB, colorScheme: "blue" },
  warning: { icon: A1, colorScheme: "orange" },
  success: { icon: aB, colorScheme: "green" },
  error: { icon: A1, colorScheme: "red" },
  loading: { icon: Kd, colorScheme: "blue" }
};
function dB(e) {
  return CP[e].colorScheme;
}
function fB(e) {
  return CP[e].icon;
}
var kP = oe(
  function(t, n) {
    const r = gg(), { status: o } = vg(), i = {
      display: "inline",
      ...r.description
    };
    return /* @__PURE__ */ w.jsx(
      X.div,
      {
        ref: n,
        "data-status": o,
        ...t,
        className: ie("chakra-alert__desc", t.className),
        __css: i
      }
    );
  }
);
kP.displayName = "AlertDescription";
function PP(e) {
  const { status: t } = vg(), n = fB(t), r = gg(), o = t === "loading" ? r.spinner : r.icon;
  return /* @__PURE__ */ w.jsx(
    X.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: ie("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ w.jsx(n, { h: "100%", w: "100%" })
    }
  );
}
PP.displayName = "AlertIcon";
var EP = oe(
  function(t, n) {
    const r = gg(), { status: o } = vg();
    return /* @__PURE__ */ w.jsx(
      X.div,
      {
        ref: n,
        "data-status": o,
        ...t,
        className: ie("chakra-alert__title", t.className),
        __css: r.title
      }
    );
  }
);
EP.displayName = "AlertTitle";
var TP = oe(function(t, n) {
  var r;
  const { status: o = "info", addRole: i = !0, ...a } = on(t), s = (r = t.colorScheme) != null ? r : dB(o), l = mt("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ w.jsx(uB, { value: { status: o }, children: /* @__PURE__ */ w.jsx(cB, { value: l, children: /* @__PURE__ */ w.jsx(
    X.div,
    {
      "data-status": o,
      role: i ? "alert" : void 0,
      ref: n,
      ...a,
      className: ie("chakra-alert", t.className),
      __css: u
    }
  ) }) });
});
TP.displayName = "Alert";
function pB(e) {
  return /* @__PURE__ */ w.jsx(Pn, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var Yd = oe(
  function(t, n) {
    const r = ei("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = on(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ w.jsx(
      X.button,
      {
        type: "button",
        "aria-label": "Close",
        ref: n,
        disabled: i,
        __css: {
          ...l,
          ...r,
          ...a
        },
        ...s,
        children: o || /* @__PURE__ */ w.jsx(pB, { width: "1em", height: "1em" })
      }
    );
  }
);
Yd.displayName = "CloseButton";
var hB = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, Es = mB(hB);
function mB(e) {
  let t = e;
  const n = /* @__PURE__ */ new Set(), r = (o) => {
    t = o(t), n.forEach((i) => i());
  };
  return {
    getState: () => t,
    subscribe: (o) => (n.add(o), () => {
      r(() => e), n.delete(o);
    }),
    /**
     * Delete a toast record at its position
     */
    removeToast: (o, i) => {
      r((a) => ({
        ...a,
        // id may be string or number
        // eslint-disable-next-line eqeqeq
        [i]: a[i].filter((s) => s.id != o)
      }));
    },
    notify: (o, i) => {
      const a = vB(o, i), { position: s, id: l } = a;
      return r((u) => {
        var c, d;
        const p = s.includes("top") ? [a, ...(c = u[s]) != null ? c : []] : [...(d = u[s]) != null ? d : [], a];
        return {
          ...u,
          [s]: p
        };
      }), l;
    },
    update: (o, i) => {
      o && r((a) => {
        const s = { ...a }, { position: l, index: u } = _b(s, o);
        return l && u !== -1 && (s[l][u] = {
          ...s[l][u],
          ...i,
          message: yB(i)
        }), s;
      });
    },
    closeAll: ({ positions: o } = {}) => {
      r((i) => (o ?? [
        "bottom",
        "bottom-right",
        "bottom-left",
        "top",
        "top-left",
        "top-right"
      ]).reduce(
        (l, u) => (l[u] = i[u].map((c) => ({
          ...c,
          requestClose: !0
        })), l),
        { ...i }
      ));
    },
    close: (o) => {
      r((i) => {
        const a = ZC(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!_b(Es.getState(), o).position
  };
}
var D1 = 0;
function vB(e, t = {}) {
  var n, r;
  D1 += 1;
  const o = (n = t.id) != null ? n : D1, i = (r = t.position) != null ? r : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Es.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var gB = (e) => {
  const {
    status: t,
    variant: n = "solid",
    id: r,
    title: o,
    isClosable: i,
    onClose: a,
    description: s,
    colorScheme: l,
    icon: u
  } = e, c = r ? {
    root: `toast-${r}`,
    title: `toast-${r}-title`,
    description: `toast-${r}-description`
  } : void 0;
  return /* @__PURE__ */ w.jsxs(
    TP,
    {
      addRole: !1,
      status: t,
      variant: n,
      id: c == null ? void 0 : c.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
      colorScheme: l,
      children: [
        /* @__PURE__ */ w.jsx(PP, { children: u }),
        /* @__PURE__ */ w.jsxs(X.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ w.jsx(EP, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ w.jsx(kP, { id: c == null ? void 0 : c.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ w.jsx(
          Yd,
          {
            size: "sm",
            onClick: a,
            position: "absolute",
            insetEnd: 1,
            top: 1
          }
        )
      ]
    }
  );
};
function yB(e = {}) {
  const { render: t, toastComponent: n = gB } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ w.jsx(n, { ...o, ...e });
}
var [bB, TY] = nt({
  name: "ToastOptionsContext",
  strict: !1
}), SB = (e) => {
  const t = v.useSyncExternalStore(
    Es.subscribe,
    Es.getState,
    Es.getState
  ), {
    motionVariants: n,
    component: r = wP,
    portalProps: o
  } = e, a = Object.keys(t).map((s) => {
    const l = t[s];
    return /* @__PURE__ */ w.jsx(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${s}`,
        id: `chakra-toast-manager-${s}`,
        style: Bj(s),
        children: /* @__PURE__ */ w.jsx(Ta, { initial: !1, children: l.map((u) => /* @__PURE__ */ w.jsx(
          r,
          {
            motionVariants: n,
            ...u
          },
          u.id
        )) })
      },
      s
    );
  });
  return /* @__PURE__ */ w.jsx(ml, { ...o, children: a });
}, xB = (e) => function({
  children: n,
  theme: r = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ w.jsxs(zj, { theme: r, ...i, children: [
    /* @__PURE__ */ w.jsx(bB, { value: o == null ? void 0 : o.defaultOptions, children: n }),
    /* @__PURE__ */ w.jsx(SB, { ...o })
  ] });
}, wB = xB(WC), CB = Object.defineProperty, kB = (e, t, n) => t in e ? CB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Be = (e, t, n) => (kB(e, typeof t != "symbol" ? t + "" : t, n), n);
function F1(e) {
  return e.sort((t, n) => {
    const r = t.compareDocumentPosition(n);
    if (r & Node.DOCUMENT_POSITION_FOLLOWING || r & Node.DOCUMENT_POSITION_CONTAINED_BY)
      return -1;
    if (r & Node.DOCUMENT_POSITION_PRECEDING || r & Node.DOCUMENT_POSITION_CONTAINS)
      return 1;
    if (r & Node.DOCUMENT_POSITION_DISCONNECTED || r & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
      throw Error("Cannot sort the given nodes.");
    return 0;
  });
}
var PB = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function L1(e, t, n) {
  let r = e + 1;
  return n && r >= t && (r = 0), r;
}
function j1(e, t, n) {
  let r = e - 1;
  return n && r < 0 && (r = t), r;
}
var um = typeof window < "u" ? v.useLayoutEffect : v.useEffect, Bc = (e) => e, EB = class {
  constructor() {
    Be(this, "descendants", /* @__PURE__ */ new Map()), Be(this, "register", (e) => {
      if (e != null)
        return PB(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), Be(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = F1(Array.from(this.descendants.keys()));
      this.assignIndex(t);
    }), Be(this, "destroy", () => {
      this.descendants.clear();
    }), Be(this, "assignIndex", (e) => {
      this.descendants.forEach((t) => {
        const n = e.indexOf(t.node);
        t.index = n, t.node.dataset.index = t.index.toString();
      });
    }), Be(this, "count", () => this.descendants.size), Be(this, "enabledCount", () => this.enabledValues().length), Be(this, "values", () => Array.from(this.descendants.values()).sort((t, n) => t.index - n.index)), Be(this, "enabledValues", () => this.values().filter((e) => !e.disabled)), Be(this, "item", (e) => {
      if (this.count() !== 0)
        return this.values()[e];
    }), Be(this, "enabledItem", (e) => {
      if (this.enabledCount() !== 0)
        return this.enabledValues()[e];
    }), Be(this, "first", () => this.item(0)), Be(this, "firstEnabled", () => this.enabledItem(0)), Be(this, "last", () => this.item(this.descendants.size - 1)), Be(this, "lastEnabled", () => {
      const e = this.enabledValues().length - 1;
      return this.enabledItem(e);
    }), Be(this, "indexOf", (e) => {
      var t, n;
      return e && (n = (t = this.descendants.get(e)) == null ? void 0 : t.index) != null ? n : -1;
    }), Be(this, "enabledIndexOf", (e) => e == null ? -1 : this.enabledValues().findIndex((t) => t.node.isSameNode(e))), Be(this, "next", (e, t = !0) => {
      const n = L1(e, this.count(), t);
      return this.item(n);
    }), Be(this, "nextEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = L1(
        r,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), Be(this, "prev", (e, t = !0) => {
      const n = j1(e, this.count() - 1, t);
      return this.item(n);
    }), Be(this, "prevEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = j1(
        r,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), Be(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const n = Array.from(this.descendants.keys()).concat(e), r = F1(n);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(r);
    });
  }
};
function TB(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function at(...e) {
  return (t) => {
    e.forEach((n) => {
      TB(n, t);
    });
  };
}
function _B(...e) {
  return v.useMemo(() => at(...e), e);
}
function OB() {
  const e = v.useRef(new EB());
  return um(() => () => e.current.destroy()), e.current;
}
var [MB, _P] = nt({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function IB(e) {
  const t = _P(), [n, r] = v.useState(-1), o = v.useRef(null);
  um(() => () => {
    o.current && t.unregister(o.current);
  }, []), um(() => {
    if (!o.current)
      return;
    const a = Number(o.current.dataset.index);
    n != a && !Number.isNaN(a) && r(a);
  });
  const i = Bc(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: n,
    enabledIndex: t.enabledIndexOf(o.current),
    register: at(i, o)
  };
}
function OP() {
  return [
    Bc(MB),
    () => Bc(_P()),
    () => OB(),
    (o) => IB(o)
  ];
}
var [RB, qd] = nt({
  name: "AccordionStylesContext",
  hookName: "useAccordionStyles",
  providerName: "<Accordion />"
}), [$B, yg] = nt({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItem />"
}), [
  AB,
  _Y,
  DB,
  FB
] = OP(), MP = oe(
  function(t, n) {
    const { getButtonProps: r } = yg(), o = r(t, n), a = {
      display: "flex",
      alignItems: "center",
      width: "100%",
      outline: 0,
      ...qd().button
    };
    return /* @__PURE__ */ w.jsx(
      X.button,
      {
        ...o,
        className: ie("chakra-accordion__button", t.className),
        __css: a
      }
    );
  }
);
MP.displayName = "AccordionButton";
function IP(e) {
  const {
    value: t,
    defaultValue: n,
    onChange: r,
    shouldUpdate: o = (f, p) => f !== p
  } = e, i = oo(r), a = oo(o), [s, l] = v.useState(n), u = t !== void 0, c = u ? t : s, d = oo(
    (f) => {
      const g = typeof f == "function" ? f(c) : f;
      a(c, g) && (u || l(g), i(g));
    },
    [u, i, c, a]
  );
  return [c, d];
}
function LB(e) {
  const {
    onChange: t,
    defaultIndex: n,
    index: r,
    allowMultiple: o,
    allowToggle: i,
    ...a
  } = e;
  NB(e), VB(e);
  const s = DB(), [l, u] = v.useState(-1);
  v.useEffect(() => () => {
    u(-1);
  }, []);
  const [c, d] = IP({
    value: r,
    defaultValue() {
      return o ? n ?? [] : n ?? -1;
    },
    onChange: t
  });
  return {
    index: c,
    setIndex: d,
    htmlProps: a,
    getAccordionItemProps: (p) => {
      let g = !1;
      return p !== null && (g = Array.isArray(c) ? c.includes(p) : c === p), { isOpen: g, onChange: (S) => {
        if (p !== null)
          if (o && Array.isArray(c)) {
            const h = S ? c.concat(p) : c.filter((m) => m !== p);
            d(h);
          } else
            S ? d(p) : i && d(-1);
      } };
    },
    focusedIndex: l,
    setFocusedIndex: u,
    descendants: s
  };
}
var [jB, bg] = nt({
  name: "AccordionContext",
  hookName: "useAccordionContext",
  providerName: "Accordion"
});
function zB(e) {
  const { isDisabled: t, isFocusable: n, id: r, ...o } = e, { getAccordionItemProps: i, setFocusedIndex: a } = bg(), s = v.useRef(null), l = v.useId(), u = r ?? l, c = `accordion-button-${u}`, d = `accordion-panel-${u}`;
  BB(e);
  const { register: f, index: p, descendants: g } = FB({
    disabled: t && !n
  }), { isOpen: y, onChange: S } = i(
    p === -1 ? null : p
  );
  WB({ isOpen: y, isDisabled: t });
  const h = () => {
    S == null || S(!0);
  }, m = () => {
    S == null || S(!1);
  }, b = v.useCallback(() => {
    S == null || S(!y), a(p);
  }, [p, a, y, S]), x = v.useCallback(
    (T) => {
      const I = {
        ArrowDown: () => {
          const D = g.nextEnabled(p);
          D == null || D.node.focus();
        },
        ArrowUp: () => {
          const D = g.prevEnabled(p);
          D == null || D.node.focus();
        },
        Home: () => {
          const D = g.firstEnabled();
          D == null || D.node.focus();
        },
        End: () => {
          const D = g.lastEnabled();
          D == null || D.node.focus();
        }
      }[T.key];
      I && (T.preventDefault(), I(T));
    },
    [g, p]
  ), k = v.useCallback(() => {
    a(p);
  }, [a, p]), P = v.useCallback(
    function(M = {}, I = null) {
      return {
        ...M,
        type: "button",
        ref: at(f, s, I),
        id: c,
        disabled: !!t,
        "aria-expanded": !!y,
        "aria-controls": d,
        onClick: Le(M.onClick, b),
        onFocus: Le(M.onFocus, k),
        onKeyDown: Le(M.onKeyDown, x)
      };
    },
    [
      c,
      t,
      y,
      b,
      k,
      x,
      d,
      f
    ]
  ), E = v.useCallback(
    function(M = {}, I = null) {
      return {
        ...M,
        ref: I,
        role: "region",
        id: d,
        "aria-labelledby": c,
        hidden: !y
      };
    },
    [c, y, d]
  );
  return {
    isOpen: y,
    isDisabled: t,
    isFocusable: n,
    onOpen: h,
    onClose: m,
    getButtonProps: P,
    getPanelProps: E,
    htmlProps: o
  };
}
function NB(e) {
  const t = e.index || e.defaultIndex, n = t != null && !Array.isArray(t) && e.allowMultiple;
  vl({
    condition: !!n,
    message: `If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`
  });
}
function VB(e) {
  vl({
    condition: !!(e.allowMultiple && e.allowToggle),
    message: "If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"
  });
}
function BB(e) {
  vl({
    condition: !!(e.isFocusable && !e.isDisabled),
    message: `Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `
  });
}
function WB(e) {
  vl({
    condition: e.isOpen && !!e.isDisabled,
    message: "Cannot open a disabled accordion item"
  });
}
function RP(e) {
  const { isOpen: t, isDisabled: n } = yg(), { reduceMotion: r } = bg(), o = ie("chakra-accordion__icon", e.className), i = qd(), a = {
    opacity: n ? 0.4 : 1,
    transform: t ? "rotate(-180deg)" : void 0,
    transition: r ? void 0 : "transform 0.2s",
    transformOrigin: "center",
    ...i.icon
  };
  return /* @__PURE__ */ w.jsx(
    Pn,
    {
      viewBox: "0 0 24 24",
      "aria-hidden": !0,
      className: o,
      __css: a,
      ...e,
      children: /* @__PURE__ */ w.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
        }
      )
    }
  );
}
RP.displayName = "AccordionIcon";
var $P = oe(
  function(t, n) {
    const { children: r, className: o } = t, { htmlProps: i, ...a } = zB(t), l = {
      ...qd().container,
      overflowAnchor: "none"
    }, u = v.useMemo(() => a, [a]);
    return /* @__PURE__ */ w.jsx($B, { value: u, children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ref: n,
        ...i,
        className: ie("chakra-accordion__item", o),
        __css: l,
        children: typeof r == "function" ? r({
          isExpanded: !!a.isOpen,
          isDisabled: !!a.isDisabled
        }) : r
      }
    ) });
  }
);
$P.displayName = "AccordionItem";
var Li = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, Vo = {
  enter: {
    duration: 0.2,
    ease: Li.easeOut
  },
  exit: {
    duration: 0.1,
    ease: Li.easeIn
  }
}, Sr = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, HB = (e) => e != null && parseInt(e.toString(), 10) > 0, z1 = {
  exit: {
    height: { duration: 0.2, ease: Li.ease },
    opacity: { duration: 0.3, ease: Li.ease }
  },
  enter: {
    height: { duration: 0.3, ease: Li.ease },
    opacity: { duration: 0.4, ease: Li.ease }
  }
}, UB = {
  exit: ({
    animateOpacity: e,
    startingHeight: t,
    transition: n,
    transitionEnd: r,
    delay: o
  }) => {
    var i;
    return {
      ...e && { opacity: HB(t) ? 1 : 0 },
      height: t,
      transitionEnd: r == null ? void 0 : r.exit,
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Sr.exit(z1.exit, o)
    };
  },
  enter: ({
    animateOpacity: e,
    endingHeight: t,
    transition: n,
    transitionEnd: r,
    delay: o
  }) => {
    var i;
    return {
      ...e && { opacity: 1 },
      height: t,
      transitionEnd: r == null ? void 0 : r.enter,
      transition: (i = n == null ? void 0 : n.enter) != null ? i : Sr.enter(z1.enter, o)
    };
  }
}, AP = v.forwardRef(
  (e, t) => {
    const {
      in: n,
      unmountOnExit: r,
      animateOpacity: o = !0,
      startingHeight: i = 0,
      endingHeight: a = "auto",
      style: s,
      className: l,
      transition: u,
      transitionEnd: c,
      ...d
    } = e, [f, p] = v.useState(!1);
    v.useEffect(() => {
      const m = setTimeout(() => {
        p(!0);
      });
      return () => clearTimeout(m);
    }, []), vl({
      condition: Number(i) > 0 && !!r,
      message: "startingHeight and unmountOnExit are mutually exclusive. You can't use them together"
    });
    const g = parseFloat(i.toString()) > 0, y = {
      startingHeight: i,
      endingHeight: a,
      animateOpacity: o,
      transition: f ? u : { enter: { duration: 0 } },
      transitionEnd: {
        enter: c == null ? void 0 : c.enter,
        exit: r ? c == null ? void 0 : c.exit : {
          ...c == null ? void 0 : c.exit,
          display: g ? "block" : "none"
        }
      }
    }, S = r ? n : !0, h = n || r ? "enter" : "exit";
    return /* @__PURE__ */ w.jsx(Ta, { initial: !1, custom: y, children: S && /* @__PURE__ */ w.jsx(
      Mr.div,
      {
        ref: t,
        ...d,
        className: ie("chakra-collapse", l),
        style: {
          overflow: "hidden",
          display: "block",
          ...s
        },
        custom: y,
        variants: UB,
        initial: r ? "exit" : !1,
        animate: h,
        exit: "exit"
      }
    ) });
  }
);
AP.displayName = "Collapse";
var GB = {
  enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 1,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : Sr.enter(Vo.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 0,
      transition: (r = e == null ? void 0 : e.exit) != null ? r : Sr.exit(Vo.exit, n),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, DP = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: GB
}, KB = v.forwardRef(function(t, n) {
  const {
    unmountOnExit: r,
    in: o,
    className: i,
    transition: a,
    transitionEnd: s,
    delay: l,
    ...u
  } = t, c = o || r ? "enter" : "exit", d = r ? o && r : !0, f = { transition: a, transitionEnd: s, delay: l };
  return /* @__PURE__ */ w.jsx(Ta, { custom: f, children: d && /* @__PURE__ */ w.jsx(
    Mr.div,
    {
      ref: n,
      className: ie("chakra-fade", i),
      custom: f,
      ...DP,
      animate: c,
      ...u
    }
  ) });
});
KB.displayName = "Fade";
var YB = {
  exit: ({ reverse: e, initialScale: t, transition: n, transitionEnd: r, delay: o }) => {
    var i;
    return {
      opacity: 0,
      ...e ? { scale: t, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { scale: t, ...r == null ? void 0 : r.exit } },
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Sr.exit(Vo.exit, o)
    };
  },
  enter: ({ transitionEnd: e, transition: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      scale: 1,
      transition: (r = t == null ? void 0 : t.enter) != null ? r : Sr.enter(Vo.enter, n),
      transitionEnd: e == null ? void 0 : e.enter
    };
  }
}, FP = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: YB
}, qB = v.forwardRef(
  function(t, n) {
    const {
      unmountOnExit: r,
      in: o,
      reverse: i = !0,
      initialScale: a = 0.95,
      className: s,
      transition: l,
      transitionEnd: u,
      delay: c,
      ...d
    } = t, f = r ? o && r : !0, p = o || r ? "enter" : "exit", g = { initialScale: a, reverse: i, transition: l, transitionEnd: u, delay: c };
    return /* @__PURE__ */ w.jsx(Ta, { custom: g, children: f && /* @__PURE__ */ w.jsx(
      Mr.div,
      {
        ref: n,
        className: ie("chakra-offset-slide", s),
        ...FP,
        animate: p,
        custom: g,
        ...d
      }
    ) });
  }
);
qB.displayName = "ScaleFade";
var XB = {
  initial: ({ offsetX: e, offsetY: t, transition: n, transitionEnd: r, delay: o }) => {
    var i;
    return {
      opacity: 0,
      x: e,
      y: t,
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Sr.exit(Vo.exit, o),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ transition: e, transitionEnd: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : Sr.enter(Vo.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ offsetY: e, offsetX: t, transition: n, transitionEnd: r, reverse: o, delay: i }) => {
    var a;
    const s = { x: t, y: e };
    return {
      opacity: 0,
      transition: (a = n == null ? void 0 : n.exit) != null ? a : Sr.exit(Vo.exit, i),
      ...o ? { ...s, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { ...s, ...r == null ? void 0 : r.exit } }
    };
  }
}, as = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: XB
}, QB = v.forwardRef(
  function(t, n) {
    const {
      unmountOnExit: r,
      in: o,
      reverse: i = !0,
      className: a,
      offsetX: s = 0,
      offsetY: l = 8,
      transition: u,
      transitionEnd: c,
      delay: d,
      ...f
    } = t, p = r ? o && r : !0, g = o || r ? "enter" : "exit", y = {
      offsetX: s,
      offsetY: l,
      reverse: i,
      transition: u,
      transitionEnd: c,
      delay: d
    };
    return /* @__PURE__ */ w.jsx(Ta, { custom: y, children: p && /* @__PURE__ */ w.jsx(
      Mr.div,
      {
        ref: n,
        className: ie("chakra-offset-slide", a),
        custom: y,
        ...as,
        animate: g,
        ...f
      }
    ) });
  }
);
QB.displayName = "SlideFade";
var LP = oe(
  function(t, n) {
    const { className: r, motionProps: o, ...i } = t, { reduceMotion: a } = bg(), { getPanelProps: s, isOpen: l } = yg(), u = s(i, n), c = ie("chakra-accordion__panel", r), d = qd();
    a || delete u.hidden;
    const f = /* @__PURE__ */ w.jsx(X.div, { ...u, __css: d.panel, className: c });
    return a ? f : /* @__PURE__ */ w.jsx(AP, { in: l, ...o, children: f });
  }
);
LP.displayName = "AccordionPanel";
var jP = oe(function({ children: t, reduceMotion: n, ...r }, o) {
  const i = mt("Accordion", r), a = on(r), { htmlProps: s, descendants: l, ...u } = LB(a), c = v.useMemo(
    () => ({ ...u, reduceMotion: !!n }),
    [u, n]
  );
  return /* @__PURE__ */ w.jsx(AB, { value: l, children: /* @__PURE__ */ w.jsx(jB, { value: c, children: /* @__PURE__ */ w.jsx(RB, { value: i, children: /* @__PURE__ */ w.jsx(
    X.div,
    {
      ref: o,
      ...s,
      className: ie("chakra-accordion", r.className),
      __css: i.root,
      children: t
    }
  ) }) }) });
});
jP.displayName = "Accordion";
function zP(e) {
  return v.Children.toArray(e).filter(
    (t) => v.isValidElement(t)
  );
}
var [OY, ZB] = nt({
  strict: !1,
  name: "ButtonGroupContext"
});
function JB(e) {
  const [t, n] = v.useState(!e);
  return { ref: v.useCallback((i) => {
    i && n(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function cm(e) {
  const { children: t, className: n, ...r } = e, o = v.isValidElement(t) ? v.cloneElement(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, i = ie("chakra-button__icon", n);
  return /* @__PURE__ */ w.jsx(
    X.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...r,
      className: i,
      children: o
    }
  );
}
cm.displayName = "ButtonIcon";
function dm(e) {
  const {
    label: t,
    placement: n,
    spacing: r = "0.5rem",
    children: o = /* @__PURE__ */ w.jsx(Kd, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: a,
    ...s
  } = e, l = ie("chakra-button__spinner", i), u = n === "start" ? "marginEnd" : "marginStart", c = v.useMemo(
    () => ({
      display: "flex",
      alignItems: "center",
      position: t ? "relative" : "absolute",
      [u]: t ? r : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...a
    }),
    [a, t, u, r]
  );
  return /* @__PURE__ */ w.jsx(X.div, { className: l, ...s, __css: c, children: o });
}
dm.displayName = "ButtonSpinner";
var jn = oe((e, t) => {
  const n = ZB(), r = ei("Button", { ...n, ...e }), {
    isDisabled: o = n == null ? void 0 : n.isDisabled,
    isLoading: i,
    isActive: a,
    children: s,
    leftIcon: l,
    rightIcon: u,
    loadingText: c,
    iconSpacing: d = "0.5rem",
    type: f,
    spinner: p,
    spinnerPlacement: g = "start",
    className: y,
    as: S,
    ...h
  } = on(e), m = v.useMemo(() => {
    const P = { ...r == null ? void 0 : r._focus, zIndex: 1 };
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      ...r,
      ...!!n && { _focus: P }
    };
  }, [r, n]), { ref: b, type: x } = JB(S), k = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ w.jsxs(
    X.button,
    {
      ref: _B(t, b),
      as: S,
      type: f ?? x,
      "data-active": fn(a),
      "data-loading": fn(i),
      __css: m,
      className: ie("chakra-button", y),
      ...h,
      disabled: o || i,
      children: [
        i && g === "start" && /* @__PURE__ */ w.jsx(
          dm,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? c || /* @__PURE__ */ w.jsx(X.span, { opacity: 0, children: /* @__PURE__ */ w.jsx(N1, { ...k }) }) : /* @__PURE__ */ w.jsx(N1, { ...k }),
        i && g === "end" && /* @__PURE__ */ w.jsx(
          dm,
          {
            className: "chakra-button__spinner--end",
            label: c,
            placement: "end",
            spacing: d,
            children: p
          }
        )
      ]
    }
  );
});
jn.displayName = "Button";
function N1(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e;
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    t && /* @__PURE__ */ w.jsx(cm, { marginEnd: o, children: t }),
    r,
    n && /* @__PURE__ */ w.jsx(cm, { marginStart: o, children: n })
  ] });
}
var rl = oe(
  (e, t) => {
    const { icon: n, children: r, isRound: o, "aria-label": i, ...a } = e, s = n || r, l = v.isValidElement(s) ? v.cloneElement(s, {
      "aria-hidden": !0,
      focusable: !1
    }) : null;
    return /* @__PURE__ */ w.jsx(
      jn,
      {
        padding: "0",
        borderRadius: o ? "full" : void 0,
        ref: t,
        "aria-label": i,
        ...a,
        children: l
      }
    );
  }
);
rl.displayName = "IconButton";
var [e6, MY] = Fj("Card"), t6 = oe(function(t, n) {
  const {
    className: r,
    children: o,
    direction: i = "column",
    justify: a,
    align: s,
    ...l
  } = on(t), u = mt("Card", t);
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ref: n,
      className: ie("chakra-card", r),
      __css: {
        display: "flex",
        flexDirection: i,
        justifyContent: a,
        alignItems: s,
        position: "relative",
        minWidth: 0,
        wordWrap: "break-word",
        ...u.container
      },
      ...l,
      children: /* @__PURE__ */ w.jsx(e6, { value: u, children: o })
    }
  );
}), [n6, r6] = nt({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [o6, NP] = nt({
  strict: !1,
  name: "FormControlContext"
});
function i6(e) {
  const {
    id: t,
    isRequired: n,
    isInvalid: r,
    isDisabled: o,
    isReadOnly: i,
    ...a
  } = e, s = v.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, p] = v.useState(!1), [g, y] = v.useState(!1), [S, h] = v.useState(!1), m = v.useCallback(
    (E = {}, T = null) => ({
      id: d,
      ...E,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: at(T, (M) => {
        M && y(!0);
      })
    }),
    [d]
  ), b = v.useCallback(
    (E = {}, T = null) => ({
      ...E,
      ref: T,
      "data-focus": fn(S),
      "data-disabled": fn(o),
      "data-invalid": fn(r),
      "data-readonly": fn(i),
      id: E.id !== void 0 ? E.id : u,
      htmlFor: E.htmlFor !== void 0 ? E.htmlFor : l
    }),
    [l, o, S, r, i, u]
  ), x = v.useCallback(
    (E = {}, T = null) => ({
      id: c,
      ...E,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: at(T, (M) => {
        M && p(!0);
      }),
      "aria-live": "polite"
    }),
    [c]
  ), k = v.useCallback(
    (E = {}, T = null) => ({
      ...E,
      ...a,
      ref: T,
      role: "group",
      "data-focus": fn(S),
      "data-disabled": fn(o),
      "data-invalid": fn(r),
      "data-readonly": fn(i)
    }),
    [a, o, S, r, i]
  ), P = v.useCallback(
    (E = {}, T = null) => ({
      ...E,
      ref: T,
      role: "presentation",
      "aria-hidden": !0,
      children: E.children || "*"
    }),
    []
  );
  return {
    isRequired: !!n,
    isInvalid: !!r,
    isReadOnly: !!i,
    isDisabled: !!o,
    isFocused: !!S,
    onFocus: () => h(!0),
    onBlur: () => h(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: g,
    setHasHelpText: y,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: m,
    getErrorMessageProps: x,
    getRootProps: k,
    getLabelProps: b,
    getRequiredIndicatorProps: P
  };
}
var a6 = oe(
  function(t, n) {
    const r = mt("Form", t), o = on(t), {
      getRootProps: i,
      htmlProps: a,
      ...s
    } = i6(o), l = ie("chakra-form-control", t.className);
    return /* @__PURE__ */ w.jsx(o6, { value: s, children: /* @__PURE__ */ w.jsx(n6, { value: r, children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...i({}, n),
        className: l,
        __css: r.container
      }
    ) }) });
  }
);
a6.displayName = "FormControl";
var s6 = oe(
  function(t, n) {
    const r = NP(), o = r6(), i = ie("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...r == null ? void 0 : r.getHelpTextProps(t, n),
        __css: o.helperText,
        className: i
      }
    );
  }
);
s6.displayName = "FormHelperText";
function VP(e) {
  const { isDisabled: t, isInvalid: n, isReadOnly: r, isRequired: o, ...i } = l6(e);
  return {
    ...i,
    disabled: t,
    readOnly: r,
    required: o,
    "aria-invalid": qf(n),
    "aria-required": qf(o),
    "aria-readonly": qf(r)
  };
}
function l6(e) {
  var t, n, r;
  const o = NP(), {
    id: i,
    disabled: a,
    readOnly: s,
    required: l,
    isRequired: u,
    isInvalid: c,
    isReadOnly: d,
    isDisabled: f,
    onFocus: p,
    onBlur: g,
    ...y
  } = e, S = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && S.push(o.feedbackId), o != null && o.hasHelpText && S.push(o.helpTextId), {
    ...y,
    "aria-describedby": S.join(" ") || void 0,
    id: i ?? (o == null ? void 0 : o.id),
    isDisabled: (t = a ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
    isReadOnly: (n = s ?? d) != null ? n : o == null ? void 0 : o.isReadOnly,
    isRequired: (r = l ?? u) != null ? r : o == null ? void 0 : o.isRequired,
    isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
    onFocus: Le(o == null ? void 0 : o.onFocus, p),
    onBlur: Le(o == null ? void 0 : o.onBlur, g)
  };
}
function Sg(e, t, n, r) {
  const o = oo(n);
  return v.useEffect(() => {
    const i = typeof e == "function" ? e() : e ?? document;
    if (!(!n || !i))
      return i.addEventListener(t, o, r), () => {
        i.removeEventListener(t, o, r);
      };
  }, [t, e, r, o, n]), () => {
    const i = typeof e == "function" ? e() : e ?? document;
    i == null || i.removeEventListener(t, o, r);
  };
}
function u6(e) {
  return "current" in e;
}
var BP = () => typeof window < "u";
function c6() {
  var e;
  const t = navigator.userAgentData;
  return (e = t == null ? void 0 : t.platform) != null ? e : navigator.platform;
}
var d6 = (e) => BP() && e.test(navigator.vendor), f6 = (e) => BP() && e.test(c6()), p6 = () => f6(/mac|iphone|ipad|ipod/i), h6 = () => p6() && d6(/apple/i);
function m6(e) {
  const { ref: t, elements: n, enabled: r } = e, o = () => {
    var i, a;
    return (a = (i = t.current) == null ? void 0 : i.ownerDocument) != null ? a : document;
  };
  Sg(o, "pointerdown", (i) => {
    if (!h6() || !r)
      return;
    const a = i.target, l = (n ?? [t]).some((u) => {
      const c = u6(u) ? u.current : u;
      return (c == null ? void 0 : c.contains(a)) || c === a;
    });
    o().activeElement !== a && l && (i.preventDefault(), a.focus());
  });
}
function WP(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var HP = { exports: {} }, v6 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", g6 = v6, y6 = g6;
function UP() {
}
function GP() {
}
GP.resetWarningCache = UP;
var b6 = function() {
  function e(r, o, i, a, s, l) {
    if (l !== y6) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw u.name = "Invariant Violation", u;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: GP,
    resetWarningCache: UP
  };
  return n.PropTypes = n, n;
};
HP.exports = b6();
var S6 = HP.exports;
const wo = /* @__PURE__ */ ll(S6);
var fm = "data-focus-lock", KP = "data-focus-lock-disabled", x6 = "data-no-focus-lock", w6 = "data-autofocus-inside", C6 = "data-no-autofocus";
function k6(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function P6(e, t) {
  var n = v.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function YP(e, t) {
  return P6(t || null, function(n) {
    return e.forEach(function(r) {
      return k6(r, n);
    });
  });
}
var Tp = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, qn = function() {
  return qn = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, qn.apply(this, arguments);
};
function qP(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function E6(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function XP(e) {
  return e;
}
function QP(e, t) {
  t === void 0 && (t = XP);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var a = t(i, r);
      return n.push(a), function() {
        n = n.filter(function(s) {
          return s !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(i);
      }
      n = {
        push: function(s) {
          return i(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var a = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(i), a = n;
      }
      var l = function() {
        var c = a;
        a = [], c.forEach(i);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(c) {
          a.push(c), u();
        },
        filter: function(c) {
          return a = a.filter(c), n;
        }
      };
    }
  };
  return o;
}
function xg(e, t) {
  return t === void 0 && (t = XP), QP(e, t);
}
function ZP(e) {
  e === void 0 && (e = {});
  var t = QP(null);
  return t.options = qn({ async: !0, ssr: !1 }, e), t;
}
var JP = function(e) {
  var t = e.sideCar, n = qP(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return v.createElement(r, qn({}, n));
};
JP.isSideCarExport = !0;
function T6(e, t) {
  return e.useMedium(t), JP;
}
var e2 = xg({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), t2 = xg(), _6 = xg(), O6 = ZP({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), M6 = [], wg = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, o = v.useState(), i = o[0], a = o[1], s = v.useRef(), l = v.useRef(!1), u = v.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, g = t.crossFrame, y = t.autoFocus;
  t.allowTextSelection;
  var S = t.group, h = t.className, m = t.whiteList, b = t.hasPositiveIndices, x = t.shards, k = x === void 0 ? M6 : x, P = t.as, E = P === void 0 ? "div" : P, T = t.lockProps, M = T === void 0 ? {} : T, I = t.sideCar, D = t.returnFocus, G = t.focusOptions, H = t.onActivation, L = t.onDeactivation, W = v.useState({}), K = W[0], $ = v.useCallback(function() {
    u.current = u.current || document && document.activeElement, s.current && H && H(s.current), l.current = !0;
  }, [H]), A = v.useCallback(function() {
    l.current = !1, L && L(s.current);
  }, [L]);
  v.useEffect(function() {
    d || (u.current = null);
  }, []);
  var j = v.useCallback(function(se) {
    var me = u.current;
    if (me && me.focus) {
      var Pe = typeof D == "function" ? D(me) : D;
      if (Pe) {
        var Je = typeof Pe == "object" ? Pe : void 0;
        u.current = null, se ? Promise.resolve().then(function() {
          return me.focus(Je);
        }) : me.focus(Je);
      }
    }
  }, [D]), U = v.useCallback(function(se) {
    l.current && e2.useMedium(se);
  }, []), V = t2.useMedium, Y = v.useCallback(function(se) {
    s.current !== se && (s.current = se, a(se));
  }, []), z = q((r = {}, r[KP] = d && "disabled", r[fm] = S, r), M), te = f !== !0, le = te && f !== "tail", ae = YP([n, Y]);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, te && [
    // nearest focus guard
    /* @__PURE__ */ v.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: Tp
    }),
    // first tabbed element guard
    b ? /* @__PURE__ */ v.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: Tp
    }) : null
  ], !d && /* @__PURE__ */ v.createElement(I, {
    id: K,
    sideCar: O6,
    observed: i,
    disabled: d,
    persistentFocus: p,
    crossFrame: g,
    autoFocus: y,
    whiteList: m,
    shards: k,
    onActivation: $,
    onDeactivation: A,
    returnFocus: j,
    focusOptions: G
  }), /* @__PURE__ */ v.createElement(E, q({
    ref: ae
  }, z, {
    className: h,
    onBlur: V,
    onFocus: U
  }), c), le && /* @__PURE__ */ v.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: Tp
  }));
});
wg.propTypes = {};
wg.defaultProps = {
  children: void 0,
  disabled: !1,
  returnFocus: !1,
  focusOptions: void 0,
  noFocusGuards: !1,
  autoFocus: !0,
  persistentFocus: !1,
  crossFrame: !0,
  hasPositiveIndices: void 0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: "div",
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0
};
const n2 = wg;
function Wc(e, t) {
  return Wc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Wc(e, t);
}
function I6(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Wc(e, t);
}
function Yo(e) {
  "@babel/helpers - typeof";
  return Yo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yo(e);
}
function R6(e, t) {
  if (Yo(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Yo(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function r2(e) {
  var t = R6(e, "string");
  return Yo(t) === "symbol" ? t : String(t);
}
function ji(e, t, n) {
  return t = r2(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function $6(e, t) {
  function n(r) {
    return r.displayName || r.name || "Component";
  }
  return function(o) {
    var i = [], a;
    function s() {
      a = e(i.map(function(u) {
        return u.props;
      })), t(a);
    }
    var l = /* @__PURE__ */ function(u) {
      I6(c, u);
      function c() {
        return u.apply(this, arguments) || this;
      }
      c.peek = function() {
        return a;
      };
      var d = c.prototype;
      return d.componentDidMount = function() {
        i.push(this), s();
      }, d.componentDidUpdate = function() {
        s();
      }, d.componentWillUnmount = function() {
        var p = i.indexOf(this);
        i.splice(p, 1), s();
      }, d.render = function() {
        return /* @__PURE__ */ re.createElement(o, this.props);
      }, c;
    }(v.PureComponent);
    return ji(l, "displayName", "SideEffect(" + n(o) + ")"), l;
  };
}
var ir = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, Hc = function(e) {
  return Array.isArray(e) ? e : [e];
}, o2 = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, A6 = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, i2 = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, a2 = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, D6 = function(e, t) {
  return !e || a2(e) || !A6(e) && t(i2(e));
}, s2 = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = D6(t, s2.bind(void 0, e));
  return e.set(t, r), r;
}, F6 = function(e, t) {
  return e && !a2(e) ? z6(e) ? t(i2(e)) : !1 : !0;
}, l2 = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = F6(t, l2.bind(void 0, e));
  return e.set(t, r), r;
}, u2 = function(e) {
  return e.dataset;
}, L6 = function(e) {
  return e.tagName === "BUTTON";
}, c2 = function(e) {
  return e.tagName === "INPUT";
}, d2 = function(e) {
  return c2(e) && e.type === "radio";
}, j6 = function(e) {
  return !((c2(e) || L6(e)) && (e.type === "hidden" || e.disabled));
}, z6 = function(e) {
  var t = e.getAttribute(C6);
  return ![!0, "true", ""].includes(t);
}, Cg = function(e) {
  var t;
  return !!(e && (!((t = u2(e)) === null || t === void 0) && t.focusGuard));
}, Uc = function(e) {
  return !Cg(e);
}, N6 = function(e) {
  return !!e;
}, V6 = function(e, t) {
  var n = e.tabIndex - t.tabIndex, r = e.index - t.index;
  if (n) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return n || r;
}, f2 = function(e, t, n) {
  return ir(e).map(function(r, o) {
    return {
      node: r,
      index: o,
      tabIndex: n && r.tabIndex === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : r.tabIndex
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(V6);
}, B6 = [
  "button:enabled",
  "select:enabled",
  "textarea:enabled",
  "input:enabled",
  // elements with explicit roles will also use explicit tabindex
  // '[role="button"]',
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[tabindex]",
  "[contenteditable]",
  "[autofocus]"
], kg = B6.join(","), W6 = "".concat(kg, ", [data-focus-guard]"), p2 = function(e, t) {
  return ir((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? W6 : kg) ? [r] : [], p2(r));
  }, []);
}, H6 = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? Xd([e.contentDocument.body], t) : [e];
}, Xd = function(e, t) {
  return e.reduce(function(n, r) {
    var o, i = p2(r, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return H6(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      r.parentNode ? ir(r.parentNode.querySelectorAll(kg)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, U6 = function(e) {
  var t = e.querySelectorAll("[".concat(w6, "]"));
  return ir(t).map(function(n) {
    return Xd([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, Pg = function(e, t) {
  return ir(e).filter(function(n) {
    return s2(t, n);
  }).filter(function(n) {
    return j6(n);
  });
}, V1 = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), ir(e).filter(function(n) {
    return l2(t, n);
  });
}, pm = function(e, t, n) {
  return f2(Pg(Xd(e, n), t), !0, n);
}, B1 = function(e, t) {
  return f2(Pg(Xd(e), t), !1);
}, G6 = function(e, t) {
  return Pg(U6(e), t);
}, Zi = function(e, t) {
  return e.shadowRoot ? Zi(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : ir(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var o = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return o ? Zi(o, t) : !1;
    }
    return Zi(n, t);
  });
}, K6 = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var o = r + 1; o < n; o += 1) {
      var i = e[r].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(a, s) {
    return !t.has(s);
  });
}, h2 = function(e) {
  return e.parentNode ? h2(e.parentNode) : e;
}, Eg = function(e) {
  var t = Hc(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var o = r.getAttribute(fm);
    return n.push.apply(n, o ? K6(ir(h2(r).querySelectorAll("[".concat(fm, '="').concat(o, '"]:not([').concat(KP, '="disabled"])')))) : [r]), n;
  }, []);
}, Y6 = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, ol = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? ol(t.shadowRoot) : t instanceof HTMLIFrameElement && Y6(function() {
      return t.contentWindow.document;
    }) ? ol(t.contentWindow.document) : t;
  }
}, q6 = function(e, t) {
  return e === t;
}, X6 = function(e, t) {
  return !!ir(e.querySelectorAll("iframe")).some(function(n) {
    return q6(n, t);
  });
}, m2 = function(e, t) {
  return t === void 0 && (t = ol(o2(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Eg(e).some(function(n) {
    return Zi(n, t) || X6(n, t);
  });
}, Q6 = function(e) {
  e === void 0 && (e = document);
  var t = ol(e);
  return t ? ir(e.querySelectorAll("[".concat(x6, "]"))).some(function(n) {
    return Zi(n, t);
  }) : !1;
}, Z6 = function(e, t) {
  return t.filter(d2).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, Tg = function(e, t) {
  return d2(e) && e.name ? Z6(e, t) : e;
}, J6 = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(Tg(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, W1 = function(e) {
  return e[0] && e.length > 1 ? Tg(e[0], e) : e[0];
}, H1 = function(e, t) {
  return e.length > 1 ? e.indexOf(Tg(e[t], e)) : t;
}, v2 = "NEW_FOCUS", e9 = function(e, t, n, r) {
  var o = e.length, i = e[0], a = e[o - 1], s = Cg(n);
  if (!(n && e.indexOf(n) >= 0)) {
    var l = n !== void 0 ? t.indexOf(n) : -1, u = r ? t.indexOf(r) : l, c = r ? e.indexOf(r) : -1, d = l - u, f = t.indexOf(i), p = t.indexOf(a), g = J6(t), y = n !== void 0 ? g.indexOf(n) : -1, S = y - (r ? g.indexOf(r) : l), h = H1(e, 0), m = H1(e, o - 1);
    if (l === -1 || c === -1)
      return v2;
    if (!d && c >= 0)
      return c;
    if (l <= f && s && Math.abs(d) > 1)
      return m;
    if (l >= p && s && Math.abs(d) > 1)
      return h;
    if (d && Math.abs(S) > 1)
      return c;
    if (l <= f)
      return m;
    if (l > p)
      return h;
    if (d)
      return Math.abs(d) > 1 ? c : (o + c + d) % o;
  }
}, t9 = function(e) {
  return function(t) {
    var n, r = (n = u2(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, n9 = function(e, t, n) {
  var r = e.map(function(i) {
    var a = i.node;
    return a;
  }), o = V1(r.filter(t9(n)));
  return o && o.length ? W1(o) : W1(V1(t));
}, hm = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && hm(e.parentNode.host || e.parentNode, t), t;
}, _p = function(e, t) {
  for (var n = hm(e), r = hm(t), o = 0; o < n.length; o += 1) {
    var i = n[o];
    if (r.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, g2 = function(e, t, n) {
  var r = Hc(e), o = Hc(t), i = r[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = _p(a || s, s) || a, n.filter(Boolean).forEach(function(l) {
      var u = _p(i, l);
      u && (!a || Zi(u, a) ? a = u : a = _p(u, a));
    });
  }), a;
}, r9 = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(G6(r, t));
  }, []);
}, o9 = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(N6);
}, i9 = function(e, t) {
  var n = ol(Hc(e).length > 0 ? document : o2(e).ownerDocument), r = Eg(e).filter(Uc), o = g2(n || e, e, r), i = /* @__PURE__ */ new Map(), a = B1(r, i), s = pm(r, i).filter(function(p) {
    var g = p.node;
    return Uc(g);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = B1([o], i).map(function(p) {
      var g = p.node;
      return g;
    }), u = o9(l, s), c = u.map(function(p) {
      var g = p.node;
      return g;
    }), d = e9(c, l, n, t);
    if (d === v2) {
      var f = n9(a, c, r9(r, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, a9 = function(e) {
  var t = Eg(e).filter(Uc), n = g2(e, e, t), r = /* @__PURE__ */ new Map(), o = pm([n], r, !0), i = pm(t, r).filter(function(a) {
    var s = a.node;
    return Uc(s);
  }).map(function(a) {
    var s = a.node;
    return s;
  });
  return o.map(function(a) {
    var s = a.node, l = a.index;
    return {
      node: s,
      index: l,
      lockItem: i.indexOf(s) >= 0,
      guard: Cg(s)
    };
  });
}, s9 = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, Op = 0, Mp = !1, y2 = function(e, t, n) {
  n === void 0 && (n = {});
  var r = i9(e, t);
  if (!Mp && r) {
    if (Op > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Mp = !0, setTimeout(function() {
        Mp = !1;
      }, 1);
      return;
    }
    Op++, s9(r.node, n.focusOptions), Op--;
  }
};
function _g(e) {
  setTimeout(e, 1);
}
var l9 = function() {
  return document && document.activeElement === document.body;
}, u9 = function() {
  return l9() || Q6();
}, Ji = null, zi = null, ea = null, il = !1, c9 = function() {
  return !0;
}, d9 = function(t) {
  return (Ji.whiteList || c9)(t);
}, f9 = function(t, n) {
  ea = {
    observerNode: t,
    portaledElement: n
  };
}, p9 = function(t) {
  return ea && ea.portaledElement === t;
};
function U1(e, t, n, r) {
  var o = null, i = e;
  do {
    var a = r[i];
    if (a.guard)
      a.node.dataset.focusAutoGuard && (o = a);
    else if (a.lockItem) {
      if (i !== e)
        return;
      o = null;
    } else
      break;
  } while ((i += n) !== t);
  o && (o.node.tabIndex = 0);
}
var h9 = function(t) {
  return t && "current" in t ? t.current : t;
}, m9 = function(t) {
  return t ? !!il : il === "meanwhile";
}, v9 = function e(t, n, r) {
  return n && // find host equal to active element and check nested active element
  (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, g9 = function(t, n) {
  return n.some(function(r) {
    return v9(t, r, r);
  });
}, Gc = function() {
  var t = !1;
  if (Ji) {
    var n = Ji, r = n.observed, o = n.persistentFocus, i = n.autoFocus, a = n.shards, s = n.crossFrame, l = n.focusOptions, u = r || ea && ea.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(h9).filter(Boolean));
      if ((!c || d9(c)) && (o || m9(s) || !u9() || !zi && i) && (u && !// active element is "inside" working area
      (m2(d) || // check for shadow-dom contained elements
      c && g9(c, d) || p9(c)) && (document && !zi && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = y2(d, zi, {
        focusOptions: l
      }), ea = {})), il = !1, zi = document && document.activeElement), document) {
        var f = document && document.activeElement, p = a9(d), g = p.map(function(y) {
          var S = y.node;
          return S;
        }).indexOf(f);
        g > -1 && (p.filter(function(y) {
          var S = y.guard, h = y.node;
          return S && h.dataset.focusAutoGuard;
        }).forEach(function(y) {
          var S = y.node;
          return S.removeAttribute("tabIndex");
        }), U1(g, p.length, 1, p), U1(g, -1, -1, p));
      }
    }
  }
  return t;
}, b2 = function(t) {
  Gc() && t && (t.stopPropagation(), t.preventDefault());
}, Og = function() {
  return _g(Gc);
}, y9 = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || f9(r, n);
}, b9 = function() {
  return null;
}, S2 = function() {
  il = "just", _g(function() {
    il = "meanwhile";
  });
}, S9 = function() {
  document.addEventListener("focusin", b2), document.addEventListener("focusout", Og), window.addEventListener("blur", S2);
}, x9 = function() {
  document.removeEventListener("focusin", b2), document.removeEventListener("focusout", Og), window.removeEventListener("blur", S2);
};
function w9(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
function C9(e) {
  var t = e.slice(-1)[0];
  t && !Ji && S9();
  var n = Ji, r = n && t && t.id === n.id;
  Ji = t, n && !r && (n.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === n.id;
  }).length || n.returnFocus(!t)), t ? (zi = null, (!r || n.observed !== t.observed) && t.onActivation(), Gc(), _g(Gc)) : (x9(), zi = null);
}
e2.assignSyncMedium(y9);
t2.assignMedium(Og);
_6.assignMedium(function(e) {
  return e({
    moveFocusInside: y2,
    focusInside: m2
  });
});
const k9 = $6(w9, C9)(b9);
var x2 = /* @__PURE__ */ v.forwardRef(function(t, n) {
  return /* @__PURE__ */ v.createElement(n2, q({
    sideCar: k9,
    ref: n
  }, t));
}), w2 = n2.propTypes || {};
w2.sideCar;
WP(w2, ["sideCar"]);
x2.propTypes = {};
const G1 = x2;
function C2(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function k2(e) {
  var t;
  if (!C2(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function P9(e) {
  var t, n;
  return (n = (t = P2(e)) == null ? void 0 : t.defaultView) != null ? n : window;
}
function P2(e) {
  return C2(e) ? e.ownerDocument : document;
}
function E9(e) {
  return P2(e).activeElement;
}
var E2 = (e) => e.hasAttribute("tabindex"), T9 = (e) => E2(e) && e.tabIndex === -1;
function _9(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function T2(e) {
  return e.parentElement && T2(e.parentElement) ? !0 : e.hidden;
}
function O9(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function _2(e) {
  if (!k2(e) || T2(e) || _9(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in r ? r[t]() : O9(e) ? !0 : E2(e);
}
function M9(e) {
  return e ? k2(e) && _2(e) && !T9(e) : !1;
}
var I9 = [
  "input:not(:disabled):not([disabled])",
  "select:not(:disabled):not([disabled])",
  "textarea:not(:disabled):not([disabled])",
  "embed",
  "iframe",
  "object",
  "a[href]",
  "area[href]",
  "button:not(:disabled):not([disabled])",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]"
], R9 = I9.join(), $9 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function O2(e) {
  const t = Array.from(
    e.querySelectorAll(R9)
  );
  return t.unshift(e), t.filter((n) => _2(n) && $9(n));
}
var K1, A9 = (K1 = G1.default) != null ? K1 : G1, M2 = (e) => {
  const {
    initialFocusRef: t,
    finalFocusRef: n,
    contentRef: r,
    restoreFocus: o,
    children: i,
    isDisabled: a,
    autoFocus: s,
    persistentFocus: l,
    lockFocusAcrossFrames: u
  } = e, c = v.useCallback(() => {
    t != null && t.current ? t.current.focus() : r != null && r.current && O2(r.current).length === 0 && requestAnimationFrame(() => {
      var g;
      (g = r.current) == null || g.focus();
    });
  }, [t, r]), d = v.useCallback(() => {
    var p;
    (p = n == null ? void 0 : n.current) == null || p.focus();
  }, [n]), f = o && !n;
  return /* @__PURE__ */ w.jsx(
    A9,
    {
      crossFrame: u,
      persistentFocus: l,
      autoFocus: s,
      disabled: a,
      onActivation: c,
      onDeactivation: d,
      returnFocus: f,
      children: i
    }
  );
};
M2.displayName = "FocusLock";
var D9 = sj ? v.useLayoutEffect : v.useEffect;
function Y1(e, t = []) {
  const n = v.useRef(e);
  return D9(() => {
    n.current = e;
  }), v.useCallback((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function F9(e, t) {
  const n = v.useId();
  return v.useMemo(
    () => e || [t, n].filter(Boolean).join("-"),
    [e, t, n]
  );
}
function L9(e, t) {
  const n = e !== void 0;
  return [n, n && typeof e < "u" ? e : t];
}
function j9(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = Y1(n), a = Y1(t), [s, l] = v.useState(e.defaultIsOpen || !1), [u, c] = L9(r, s), d = F9(o, "disclosure"), f = v.useCallback(() => {
    u || l(!1), a == null || a();
  }, [u, a]), p = v.useCallback(() => {
    u || l(!0), i == null || i();
  }, [u, i]), g = v.useCallback(() => {
    (c ? f : p)();
  }, [c, p, f]);
  return {
    isOpen: !!c,
    onOpen: p,
    onClose: f,
    onToggle: g,
    isControlled: u,
    getButtonProps: (y = {}) => ({
      ...y,
      "aria-expanded": c,
      "aria-controls": d,
      onClick: fj(y.onClick, g)
    }),
    getDisclosureProps: (y = {}) => ({
      ...y,
      hidden: !c,
      id: d
    })
  };
}
var Qd = oe(function(t, n) {
  const { htmlSize: r, ...o } = t, i = mt("Input", o), a = on(o), s = VP(a), l = ie("chakra-input", t.className);
  return /* @__PURE__ */ w.jsx(
    X.input,
    {
      size: r,
      ...s,
      __css: i.field,
      ref: n,
      className: l
    }
  );
});
Qd.displayName = "Input";
Qd.id = "Input";
var I2 = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function z9(e, t) {
  return Array.isArray(e) ? e.map((n) => n === null ? null : t(n)) : jt(e) ? Object.keys(e).reduce((n, r) => (n[r] = t(e[r]), n), {}) : e != null ? t(e) : null;
}
function N9(e, t = I2) {
  const n = {};
  return e.forEach((r, o) => {
    const i = t[o];
    r != null && (n[i] = r);
  }), n;
}
var nr = oe(function(t, n) {
  const r = ei("Text", t), { className: o, align: i, decoration: a, casing: s, ...l } = on(t), u = Cj({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ w.jsx(
    X.p,
    {
      ref: n,
      className: ie("chakra-text", t.className),
      ...u,
      ...l,
      __css: r
    }
  );
});
nr.displayName = "Text";
var R2 = (e) => /* @__PURE__ */ w.jsx(
  X.div,
  {
    className: "chakra-stack__item",
    ...e,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...e.__css
    }
  }
);
R2.displayName = "StackItem";
function V9(e) {
  const { spacing: t, direction: n } = e, r = {
    column: {
      my: t,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    "column-reverse": {
      my: t,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    row: {
      mx: t,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    },
    "row-reverse": {
      mx: t,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    }
  };
  return {
    "&": z9(
      n,
      (o) => r[o]
    )
  };
}
var $2 = oe((e, t) => {
  const {
    isInline: n,
    direction: r,
    align: o,
    justify: i,
    spacing: a = "0.5rem",
    wrap: s,
    children: l,
    divider: u,
    className: c,
    shouldWrapChildren: d,
    ...f
  } = e, p = n ? "row" : r ?? "column", g = v.useMemo(
    () => V9({ spacing: a, direction: p }),
    [a, p]
  ), y = !!u, S = !d && !y, h = v.useMemo(() => {
    const b = zP(l);
    return S ? b : b.map((x, k) => {
      const P = typeof x.key < "u" ? x.key : k, E = k + 1 === b.length, M = d ? /* @__PURE__ */ w.jsx(R2, { children: x }, P) : x;
      if (!y)
        return M;
      const I = v.cloneElement(
        u,
        {
          __css: g
        }
      ), D = E ? null : I;
      return /* @__PURE__ */ w.jsxs(v.Fragment, { children: [
        M,
        D
      ] }, P);
    });
  }, [
    u,
    g,
    y,
    S,
    d,
    l
  ]), m = ie("chakra-stack", c);
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ref: t,
      display: "flex",
      alignItems: o,
      justifyContent: i,
      flexDirection: p,
      flexWrap: s,
      gap: y ? void 0 : a,
      className: m,
      ...f,
      children: h
    }
  );
});
$2.displayName = "Stack";
var $t = oe((e, t) => /* @__PURE__ */ w.jsx($2, { align: "center", ...e, direction: "row", ref: t }));
$t.displayName = "HStack";
var Oe = X("div");
Oe.displayName = "Box";
var A2 = oe(function(t, n) {
  const { size: r, centerContent: o = !0, ...i } = t, a = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ w.jsx(
    Oe,
    {
      ref: n,
      boxSize: r,
      __css: {
        ...a,
        flexShrink: 0,
        flexGrow: 0
      },
      ...i
    }
  );
});
A2.displayName = "Square";
var B9 = oe(function(t, n) {
  const { size: r, ...o } = t;
  return /* @__PURE__ */ w.jsx(A2, { size: r, ref: n, borderRadius: "9999px", ...o });
});
B9.displayName = "Circle";
var D2 = oe(function(t, n) {
  const {
    borderLeftWidth: r,
    borderBottomWidth: o,
    borderTopWidth: i,
    borderRightWidth: a,
    borderWidth: s,
    borderStyle: l,
    borderColor: u,
    ...c
  } = ei("Divider", t), {
    className: d,
    orientation: f = "horizontal",
    __css: p,
    ...g
  } = on(t), y = {
    vertical: {
      borderLeftWidth: r || a || s || "1px",
      height: "100%"
    },
    horizontal: {
      borderBottomWidth: o || i || s || "1px",
      width: "100%"
    }
  };
  return /* @__PURE__ */ w.jsx(
    X.hr,
    {
      ref: n,
      "aria-orientation": f,
      ...g,
      __css: {
        ...c,
        border: "0",
        borderColor: u,
        borderStyle: l,
        ...y[f],
        ...p
      },
      className: ie("chakra-divider", d)
    }
  );
});
D2.displayName = "Divider";
var mm = oe(function(t, n) {
  const { direction: r, align: o, justify: i, wrap: a, basis: s, grow: l, shrink: u, ...c } = t, d = {
    display: "flex",
    flexDirection: r,
    alignItems: o,
    justifyContent: i,
    flexWrap: a,
    flexBasis: s,
    flexGrow: l,
    flexShrink: u
  };
  return /* @__PURE__ */ w.jsx(X.div, { ref: n, __css: d, ...c });
});
mm.displayName = "Flex";
function W9(e, t = {}) {
  const { ssr: n = !0, fallback: r } = t, { getWindow: o } = jj(), i = Array.isArray(e) ? e : [e];
  let a = Array.isArray(r) ? r : [r];
  a = a.filter((u) => u != null);
  const [s, l] = v.useState(() => i.map((u, c) => ({
    media: u,
    matches: n ? !!a[c] : o().matchMedia(u).matches
  })));
  return v.useEffect(() => {
    const u = o();
    l(
      i.map((f) => ({
        media: f,
        matches: u.matchMedia(f).matches
      }))
    );
    const c = i.map((f) => u.matchMedia(f)), d = (f) => {
      l((p) => p.slice().map((g) => g.media === f.media ? { ...g, matches: f.matches } : g));
    };
    return c.forEach((f) => {
      typeof f.addListener == "function" ? f.addListener(d) : f.addEventListener("change", d);
    }), () => {
      c.forEach((f) => {
        typeof f.removeListener == "function" ? f.removeListener(d) : f.removeEventListener("change", d);
      });
    };
  }, [o]), s.map((u) => u.matches);
}
function H9(e, t, n = I2) {
  let r = Object.keys(e).indexOf(t);
  if (r !== -1)
    return e[t];
  let o = n.indexOf(t);
  for (; o >= 0; ) {
    const i = n[o];
    if (e.hasOwnProperty(i)) {
      r = o;
      break;
    }
    o -= 1;
  }
  if (r !== -1) {
    const i = n[r];
    return e[i];
  }
}
function U9(e) {
  var t, n;
  const r = jt(e) ? e : { fallback: e ?? "base" }, i = Jo().__breakpoints.details.map(
    ({ minMaxQuery: u, breakpoint: c }) => ({
      breakpoint: c,
      query: u.replace("@media screen and ", "")
    })
  ), a = i.map((u) => u.breakpoint === r.fallback), l = W9(
    i.map((u) => u.query),
    { fallback: a, ssr: r.ssr }
  ).findIndex((u) => u == !0);
  return (n = (t = i[l]) == null ? void 0 : t.breakpoint) != null ? n : r.fallback;
}
function G9(e, t) {
  var n;
  const r = jt(t) ? t : { fallback: t ?? "base" }, o = U9(r), i = Jo();
  if (!o)
    return;
  const a = Array.from(((n = i.__breakpoints) == null ? void 0 : n.keys) || []), s = Array.isArray(e) ? Object.fromEntries(
    Object.entries(N9(e, a)).map(
      ([l, u]) => [l, u]
    )
  ) : e;
  return H9(s, o, a);
}
function K9(e) {
  const { key: t } = e;
  return t.length === 1 || t.length > 1 && /[^a-zA-Z0-9]/.test(t);
}
function Y9(e = {}) {
  const { timeout: t = 300, preventDefault: n = () => !0 } = e, [r, o] = v.useState([]), i = v.useRef(), a = () => {
    i.current && (clearTimeout(i.current), i.current = null);
  }, s = () => {
    a(), i.current = setTimeout(() => {
      o([]), i.current = null;
    }, t);
  };
  v.useEffect(() => a, []);
  function l(u) {
    return (c) => {
      if (c.key === "Backspace") {
        const d = [...r];
        d.pop(), o(d);
        return;
      }
      if (K9(c)) {
        const d = r.concat(c.key);
        n(c) && (c.preventDefault(), c.stopPropagation()), o(d), u(d.join("")), s();
      }
    };
  }
  return l;
}
function q9(e, t, n, r) {
  if (t == null)
    return r;
  if (!r)
    return e.find(
      (a) => n(a).toLowerCase().startsWith(t.toLowerCase())
    );
  const o = e.filter(
    (i) => n(i).toLowerCase().startsWith(t.toLowerCase())
  );
  if (o.length > 0) {
    let i;
    return o.includes(r) ? (i = o.indexOf(r) + 1, i === o.length && (i = 0), o[i]) : (i = e.indexOf(o[0]), e[i]);
  }
  return r;
}
function X9() {
  const e = v.useRef(/* @__PURE__ */ new Map()), t = e.current, n = v.useCallback((o, i, a, s) => {
    e.current.set(a, { type: i, el: o, options: s }), o.addEventListener(i, a, s);
  }, []), r = v.useCallback(
    (o, i, a, s) => {
      o.removeEventListener(i, a, s), e.current.delete(a);
    },
    []
  );
  return v.useEffect(
    () => () => {
      t.forEach((o, i) => {
        r(o.el, o.type, i, o.options);
      });
    },
    [r, t]
  ), { add: n, remove: r };
}
function Ip(e) {
  const t = e.target, { tagName: n, isContentEditable: r } = t;
  return n !== "INPUT" && n !== "TEXTAREA" && r !== !0;
}
function Q9(e = {}) {
  const {
    ref: t,
    isDisabled: n,
    isFocusable: r,
    clickOnEnter: o = !0,
    clickOnSpace: i = !0,
    onMouseDown: a,
    onMouseUp: s,
    onClick: l,
    onKeyDown: u,
    onKeyUp: c,
    tabIndex: d,
    onMouseOver: f,
    onMouseLeave: p,
    ...g
  } = e, [y, S] = v.useState(!0), [h, m] = v.useState(!1), b = X9(), x = ($) => {
    $ && $.tagName !== "BUTTON" && S(!1);
  }, k = y ? d : d || 0, P = n && !r, E = v.useCallback(
    ($) => {
      if (n) {
        $.stopPropagation(), $.preventDefault();
        return;
      }
      $.currentTarget.focus(), l == null || l($);
    },
    [n, l]
  ), T = v.useCallback(
    ($) => {
      h && Ip($) && ($.preventDefault(), $.stopPropagation(), m(!1), b.remove(document, "keyup", T, !1));
    },
    [h, b]
  ), M = v.useCallback(
    ($) => {
      if (u == null || u($), n || $.defaultPrevented || $.metaKey || !Ip($.nativeEvent) || y)
        return;
      const A = o && $.key === "Enter";
      i && $.key === " " && ($.preventDefault(), m(!0)), A && ($.preventDefault(), $.currentTarget.click()), b.add(document, "keyup", T, !1);
    },
    [
      n,
      y,
      u,
      o,
      i,
      b,
      T
    ]
  ), I = v.useCallback(
    ($) => {
      if (c == null || c($), n || $.defaultPrevented || $.metaKey || !Ip($.nativeEvent) || y)
        return;
      i && $.key === " " && ($.preventDefault(), m(!1), $.currentTarget.click());
    },
    [i, y, n, c]
  ), D = v.useCallback(
    ($) => {
      $.button === 0 && (m(!1), b.remove(document, "mouseup", D, !1));
    },
    [b]
  ), G = v.useCallback(
    ($) => {
      if ($.button !== 0)
        return;
      if (n) {
        $.stopPropagation(), $.preventDefault();
        return;
      }
      y || m(!0), $.currentTarget.focus({ preventScroll: !0 }), b.add(document, "mouseup", D, !1), a == null || a($);
    },
    [n, y, a, b, D]
  ), H = v.useCallback(
    ($) => {
      $.button === 0 && (y || m(!1), s == null || s($));
    },
    [s, y]
  ), L = v.useCallback(
    ($) => {
      if (n) {
        $.preventDefault();
        return;
      }
      f == null || f($);
    },
    [n, f]
  ), W = v.useCallback(
    ($) => {
      h && ($.preventDefault(), m(!1)), p == null || p($);
    },
    [h, p]
  ), K = at(t, x);
  return y ? {
    ...g,
    ref: K,
    type: "button",
    "aria-disabled": P ? void 0 : n,
    disabled: P,
    onClick: E,
    onMouseDown: a,
    onMouseUp: s,
    onKeyUp: c,
    onKeyDown: u,
    onMouseOver: f,
    onMouseLeave: p
  } : {
    ...g,
    ref: K,
    role: "button",
    "data-active": fn(h),
    "aria-disabled": n ? "true" : void 0,
    tabIndex: P ? void 0 : k,
    onClick: E,
    onMouseDown: G,
    onMouseUp: H,
    onKeyUp: I,
    onKeyDown: M,
    onMouseOver: L,
    onMouseLeave: W
  };
}
function Z9(e) {
  const t = e.current;
  if (!t)
    return !1;
  const n = E9(t);
  return !n || t.contains(n) ? !1 : !!M9(n);
}
function F2(e, t) {
  const { shouldFocus: n, visible: r, focusRef: o } = t, i = n && !r;
  pa(() => {
    if (!i || Z9(e))
      return;
    const a = (o == null ? void 0 : o.current) || e.current;
    let s;
    if (a)
      return s = requestAnimationFrame(() => {
        a.focus({ preventScroll: !0 });
      }), () => {
        cancelAnimationFrame(s);
      };
  }, [i, e, o]);
}
var J9 = {
  preventScroll: !0,
  shouldFocus: !1
};
function e8(e, t = J9) {
  const { focusRef: n, preventScroll: r, shouldFocus: o, visible: i } = t, a = t8(e) ? e.current : e, s = o && i, l = v.useRef(s), u = v.useRef(i);
  ca(() => {
    !u.current && i && (l.current = s), u.current = i;
  }, [i, s]);
  const c = v.useCallback(() => {
    if (!(!i || !a || !l.current) && (l.current = !1, !a.contains(document.activeElement)))
      if (n != null && n.current)
        requestAnimationFrame(() => {
          var d;
          (d = n.current) == null || d.focus({ preventScroll: r });
        });
      else {
        const d = O2(a);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: r });
        });
      }
  }, [i, r, a, n]);
  pa(() => {
    c();
  }, [c]), Sg(a, "transitionend", c);
}
function t8(e) {
  return "current" in e;
}
var ui = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), wt = {
  arrowShadowColor: ui("--popper-arrow-shadow-color"),
  arrowSize: ui("--popper-arrow-size", "8px"),
  arrowSizeHalf: ui("--popper-arrow-size-half"),
  arrowBg: ui("--popper-arrow-bg"),
  transformOrigin: ui("--popper-transform-origin"),
  arrowOffset: ui("--popper-arrow-offset")
};
function n8(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var r8 = {
  top: "bottom center",
  "top-start": "bottom left",
  "top-end": "bottom right",
  bottom: "top center",
  "bottom-start": "top left",
  "bottom-end": "top right",
  left: "right center",
  "left-start": "right top",
  "left-end": "right bottom",
  right: "left center",
  "right-start": "left top",
  "right-end": "left bottom"
}, o8 = (e) => r8[e], q1 = {
  scroll: !0,
  resize: !0
};
function i8(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...q1, ...e }
  } : t = {
    enabled: e,
    options: q1
  }, t;
}
var a8 = {
  name: "matchWidth",
  enabled: !0,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: ({ state: e }) => {
    e.styles.popper.width = `${e.rects.reference.width}px`;
  },
  effect: ({ state: e }) => () => {
    const t = e.elements.reference;
    e.elements.popper.style.width = `${t.offsetWidth}px`;
  }
}, s8 = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    X1(e);
  },
  effect: ({ state: e }) => () => {
    X1(e);
  }
}, X1 = (e) => {
  e.elements.popper.style.setProperty(
    wt.transformOrigin.var,
    o8(e.placement)
  );
}, l8 = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    u8(e);
  }
}, u8 = (e) => {
  var t;
  if (!e.placement)
    return;
  const n = c8(e.placement);
  if ((t = e.elements) != null && t.arrow && n) {
    Object.assign(e.elements.arrow.style, {
      [n.property]: n.value,
      width: wt.arrowSize.varRef,
      height: wt.arrowSize.varRef,
      zIndex: -1
    });
    const r = {
      [wt.arrowSizeHalf.var]: `calc(${wt.arrowSize.varRef} / 2 - 1px)`,
      [wt.arrowOffset.var]: `calc(${wt.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in r)
      e.elements.arrow.style.setProperty(o, r[o]);
  }
}, c8 = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: wt.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: wt.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: wt.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: wt.arrowOffset.varRef };
}, d8 = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    Q1(e);
  },
  effect: ({ state: e }) => () => {
    Q1(e);
  }
}, Q1 = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const n = n8(e.placement);
  n && t.style.setProperty("--popper-arrow-default-shadow", n), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: wt.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, f8 = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, p8 = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function h8(e, t = "ltr") {
  var n, r;
  const o = ((n = f8[e]) == null ? void 0 : n[t]) || e;
  return t === "ltr" ? o : (r = p8[e]) != null ? r : o;
}
var zt = "top", wn = "bottom", Cn = "right", Nt = "left", Mg = "auto", Cl = [zt, wn, Cn, Nt], va = "start", al = "end", m8 = "clippingParents", L2 = "viewport", Ka = "popper", v8 = "reference", Z1 = /* @__PURE__ */ Cl.reduce(function(e, t) {
  return e.concat([t + "-" + va, t + "-" + al]);
}, []), j2 = /* @__PURE__ */ [].concat(Cl, [Mg]).reduce(function(e, t) {
  return e.concat([t, t + "-" + va, t + "-" + al]);
}, []), g8 = "beforeRead", y8 = "read", b8 = "afterRead", S8 = "beforeMain", x8 = "main", w8 = "afterMain", C8 = "beforeWrite", k8 = "write", P8 = "afterWrite", E8 = [g8, y8, b8, S8, x8, w8, C8, k8, P8];
function or(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function en(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function qo(e) {
  var t = en(e).Element;
  return e instanceof t || e instanceof Element;
}
function bn(e) {
  var t = en(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ig(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = en(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function T8(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !bn(i) || !or(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function _8(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], i = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), s = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !bn(o) || !or(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const O8 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: T8,
  effect: _8,
  requires: ["computeStyles"]
};
function rr(e) {
  return e.split("-")[0];
}
var Bo = Math.max, Kc = Math.min, ga = Math.round;
function vm() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function z2() {
  return !/^((?!chrome|android).)*safari/i.test(vm());
}
function ya(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && bn(e) && (o = e.offsetWidth > 0 && ga(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && ga(r.height) / e.offsetHeight || 1);
  var a = qo(e) ? en(e) : window, s = a.visualViewport, l = !z2() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / o, c = (r.top + (l && s ? s.offsetTop : 0)) / i, d = r.width / o, f = r.height / i;
  return {
    width: d,
    height: f,
    top: c,
    right: u + d,
    bottom: c + f,
    left: u,
    x: u,
    y: c
  };
}
function Rg(e) {
  var t = ya(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function N2(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ig(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function _r(e) {
  return en(e).getComputedStyle(e);
}
function M8(e) {
  return ["table", "td", "th"].indexOf(or(e)) >= 0;
}
function vo(e) {
  return ((qo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Zd(e) {
  return or(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ig(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    vo(e)
  );
}
function J1(e) {
  return !bn(e) || // https://github.com/popperjs/popper-core/issues/837
  _r(e).position === "fixed" ? null : e.offsetParent;
}
function I8(e) {
  var t = /firefox/i.test(vm()), n = /Trident/i.test(vm());
  if (n && bn(e)) {
    var r = _r(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Zd(e);
  for (Ig(o) && (o = o.host); bn(o) && ["html", "body"].indexOf(or(o)) < 0; ) {
    var i = _r(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function kl(e) {
  for (var t = en(e), n = J1(e); n && M8(n) && _r(n).position === "static"; )
    n = J1(n);
  return n && (or(n) === "html" || or(n) === "body" && _r(n).position === "static") ? t : n || I8(e) || t;
}
function $g(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ts(e, t, n) {
  return Bo(e, Kc(t, n));
}
function R8(e, t, n) {
  var r = Ts(e, t, n);
  return r > n ? n : r;
}
function V2() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function B2(e) {
  return Object.assign({}, V2(), e);
}
function W2(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var $8 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, B2(typeof t != "number" ? t : W2(t, Cl));
};
function A8(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = rr(n.placement), l = $g(s), u = [Nt, Cn].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = $8(o.padding, n), f = Rg(i), p = l === "y" ? zt : Nt, g = l === "y" ? wn : Cn, y = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c], S = a[l] - n.rects.reference[l], h = kl(i), m = h ? l === "y" ? h.clientHeight || 0 : h.clientWidth || 0 : 0, b = y / 2 - S / 2, x = d[p], k = m - f[c] - d[g], P = m / 2 - f[c] / 2 + b, E = Ts(x, P, k), T = l;
    n.modifiersData[r] = (t = {}, t[T] = E, t.centerOffset = E - P, t);
  }
}
function D8(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || N2(t.elements.popper, o) && (t.elements.arrow = o));
}
const F8 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: A8,
  effect: D8,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ba(e) {
  return e.split("-")[1];
}
var L8 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function j8(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: ga(n * o) / o || 0,
    y: ga(r * o) / o || 0
  };
}
function eS(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = a.x, p = f === void 0 ? 0 : f, g = a.y, y = g === void 0 ? 0 : g, S = typeof c == "function" ? c({
    x: p,
    y
  }) : {
    x: p,
    y
  };
  p = S.x, y = S.y;
  var h = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), b = Nt, x = zt, k = window;
  if (u) {
    var P = kl(n), E = "clientHeight", T = "clientWidth";
    if (P === en(n) && (P = vo(n), _r(P).position !== "static" && s === "absolute" && (E = "scrollHeight", T = "scrollWidth")), P = P, o === zt || (o === Nt || o === Cn) && i === al) {
      x = wn;
      var M = d && P === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[E]
      );
      y -= M - r.height, y *= l ? 1 : -1;
    }
    if (o === Nt || (o === zt || o === wn) && i === al) {
      b = Cn;
      var I = d && P === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[T]
      );
      p -= I - r.width, p *= l ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: s
  }, u && L8), G = c === !0 ? j8({
    x: p,
    y
  }, en(n)) : {
    x: p,
    y
  };
  if (p = G.x, y = G.y, l) {
    var H;
    return Object.assign({}, D, (H = {}, H[x] = m ? "0" : "", H[b] = h ? "0" : "", H.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + y + "px)" : "translate3d(" + p + "px, " + y + "px, 0)", H));
  }
  return Object.assign({}, D, (t = {}, t[x] = m ? y + "px" : "", t[b] = h ? p + "px" : "", t.transform = "", t));
}
function z8(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: rr(t.placement),
    variation: ba(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, eS(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, eS(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const N8 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: z8,
  data: {}
};
var fu = {
  passive: !0
};
function V8(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, a = r.resize, s = a === void 0 ? !0 : a, l = en(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, fu);
  }), s && l.addEventListener("resize", n.update, fu), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, fu);
    }), s && l.removeEventListener("resize", n.update, fu);
  };
}
const B8 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: V8,
  data: {}
};
var W8 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Xu(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return W8[t];
  });
}
var H8 = {
  start: "end",
  end: "start"
};
function tS(e) {
  return e.replace(/start|end/g, function(t) {
    return H8[t];
  });
}
function Ag(e) {
  var t = en(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Dg(e) {
  return ya(vo(e)).left + Ag(e).scrollLeft;
}
function U8(e, t) {
  var n = en(e), r = vo(e), o = n.visualViewport, i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = z2();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + Dg(e),
    y: l
  };
}
function G8(e) {
  var t, n = vo(e), r = Ag(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Bo(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Bo(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Dg(e), l = -r.scrollTop;
  return _r(o || n).direction === "rtl" && (s += Bo(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function Fg(e) {
  var t = _r(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function H2(e) {
  return ["html", "body", "#document"].indexOf(or(e)) >= 0 ? e.ownerDocument.body : bn(e) && Fg(e) ? e : H2(Zd(e));
}
function _s(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = H2(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = en(r), a = o ? [i].concat(i.visualViewport || [], Fg(r) ? r : []) : r, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(_s(Zd(a)))
  );
}
function gm(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function K8(e, t) {
  var n = ya(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function nS(e, t, n) {
  return t === L2 ? gm(U8(e, n)) : qo(t) ? K8(t, n) : gm(G8(vo(e)));
}
function Y8(e) {
  var t = _s(Zd(e)), n = ["absolute", "fixed"].indexOf(_r(e).position) >= 0, r = n && bn(e) ? kl(e) : e;
  return qo(r) ? t.filter(function(o) {
    return qo(o) && N2(o, r) && or(o) !== "body";
  }) : [];
}
function q8(e, t, n, r) {
  var o = t === "clippingParents" ? Y8(e) : [].concat(t), i = [].concat(o, [n]), a = i[0], s = i.reduce(function(l, u) {
    var c = nS(e, u, r);
    return l.top = Bo(c.top, l.top), l.right = Kc(c.right, l.right), l.bottom = Kc(c.bottom, l.bottom), l.left = Bo(c.left, l.left), l;
  }, nS(e, a, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function U2(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? rr(r) : null, i = r ? ba(r) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case zt:
      l = {
        x: a,
        y: t.y - n.height
      };
      break;
    case wn:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Cn:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Nt:
      l = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? $g(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case va:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case al:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function sl(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, s = n.boundary, l = s === void 0 ? m8 : s, u = n.rootBoundary, c = u === void 0 ? L2 : u, d = n.elementContext, f = d === void 0 ? Ka : d, p = n.altBoundary, g = p === void 0 ? !1 : p, y = n.padding, S = y === void 0 ? 0 : y, h = B2(typeof S != "number" ? S : W2(S, Cl)), m = f === Ka ? v8 : Ka, b = e.rects.popper, x = e.elements[g ? m : f], k = q8(qo(x) ? x : x.contextElement || vo(e.elements.popper), l, c, a), P = ya(e.elements.reference), E = U2({
    reference: P,
    element: b,
    strategy: "absolute",
    placement: o
  }), T = gm(Object.assign({}, b, E)), M = f === Ka ? T : P, I = {
    top: k.top - M.top + h.top,
    bottom: M.bottom - k.bottom + h.bottom,
    left: k.left - M.left + h.left,
    right: M.right - k.right + h.right
  }, D = e.modifiersData.offset;
  if (f === Ka && D) {
    var G = D[o];
    Object.keys(I).forEach(function(H) {
      var L = [Cn, wn].indexOf(H) >= 0 ? 1 : -1, W = [zt, wn].indexOf(H) >= 0 ? "y" : "x";
      I[H] += G[W] * L;
    });
  }
  return I;
}
function X8(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? j2 : l, c = ba(r), d = c ? s ? Z1 : Z1.filter(function(g) {
    return ba(g) === c;
  }) : Cl, f = d.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(g, y) {
    return g[y] = sl(e, {
      placement: y,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[rr(y)], g;
  }, {});
  return Object.keys(p).sort(function(g, y) {
    return p[g] - p[y];
  });
}
function Q8(e) {
  if (rr(e) === Mg)
    return [];
  var t = Xu(e);
  return [tS(e), t, tS(t)];
}
function Z8(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, g = p === void 0 ? !0 : p, y = n.allowedAutoPlacements, S = t.options.placement, h = rr(S), m = h === S, b = l || (m || !g ? [Xu(S)] : Q8(S)), x = [S].concat(b).reduce(function(te, le) {
      return te.concat(rr(le) === Mg ? X8(t, {
        placement: le,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: y
      }) : le);
    }, []), k = t.rects.reference, P = t.rects.popper, E = /* @__PURE__ */ new Map(), T = !0, M = x[0], I = 0; I < x.length; I++) {
      var D = x[I], G = rr(D), H = ba(D) === va, L = [zt, wn].indexOf(G) >= 0, W = L ? "width" : "height", K = sl(t, {
        placement: D,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), $ = L ? H ? Cn : Nt : H ? wn : zt;
      k[W] > P[W] && ($ = Xu($));
      var A = Xu($), j = [];
      if (i && j.push(K[G] <= 0), s && j.push(K[$] <= 0, K[A] <= 0), j.every(function(te) {
        return te;
      })) {
        M = D, T = !1;
        break;
      }
      E.set(D, j);
    }
    if (T)
      for (var U = g ? 3 : 1, V = function(le) {
        var ae = x.find(function(se) {
          var me = E.get(se);
          if (me)
            return me.slice(0, le).every(function(Pe) {
              return Pe;
            });
        });
        if (ae)
          return M = ae, "break";
      }, Y = U; Y > 0; Y--) {
        var z = V(Y);
        if (z === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const J8 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Z8,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function rS(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function oS(e) {
  return [zt, Cn, wn, Nt].some(function(t) {
    return e[t] >= 0;
  });
}
function e7(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = sl(t, {
    elementContext: "reference"
  }), s = sl(t, {
    altBoundary: !0
  }), l = rS(a, r), u = rS(s, o, i), c = oS(l), d = oS(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": d
  });
}
const t7 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: e7
};
function n7(e, t, n) {
  var r = rr(e), o = [Nt, zt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [Nt, Cn].indexOf(r) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function r7(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = j2.reduce(function(c, d) {
    return c[d] = n7(d, t.rects, i), c;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const o7 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: r7
};
function i7(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = U2({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const a7 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: i7,
  data: {}
};
function s7(e) {
  return e === "x" ? "y" : "x";
}
function l7(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, g = n.tetherOffset, y = g === void 0 ? 0 : g, S = sl(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), h = rr(t.placement), m = ba(t.placement), b = !m, x = $g(h), k = s7(x), P = t.modifiersData.popperOffsets, E = t.rects.reference, T = t.rects.popper, M = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, I = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, G = {
    x: 0,
    y: 0
  };
  if (P) {
    if (i) {
      var H, L = x === "y" ? zt : Nt, W = x === "y" ? wn : Cn, K = x === "y" ? "height" : "width", $ = P[x], A = $ + S[L], j = $ - S[W], U = p ? -T[K] / 2 : 0, V = m === va ? E[K] : T[K], Y = m === va ? -T[K] : -E[K], z = t.elements.arrow, te = p && z ? Rg(z) : {
        width: 0,
        height: 0
      }, le = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : V2(), ae = le[L], se = le[W], me = Ts(0, E[K], te[K]), Pe = b ? E[K] / 2 - U - me - ae - I.mainAxis : V - me - ae - I.mainAxis, Je = b ? -E[K] / 2 + U + me + se + I.mainAxis : Y + me + se + I.mainAxis, qe = t.elements.arrow && kl(t.elements.arrow), an = qe ? x === "y" ? qe.clientTop || 0 : qe.clientLeft || 0 : 0, En = (H = D == null ? void 0 : D[x]) != null ? H : 0, Rr = $ + Pe - En - an, fe = $ + Je - En, vt = Ts(p ? Kc(A, Rr) : A, $, p ? Bo(j, fe) : j);
      P[x] = vt, G[x] = vt - $;
    }
    if (s) {
      var Ge, Ut = x === "x" ? zt : Nt, $r = x === "x" ? wn : Cn, gt = P[k], Nn = k === "y" ? "height" : "width", Ar = gt + S[Ut], sn = gt - S[$r], oi = [zt, Nt].indexOf(h) !== -1, Oa = (Ge = D == null ? void 0 : D[k]) != null ? Ge : 0, Ol = oi ? Ar : gt - E[Nn] - T[Nn] - Oa + I.altAxis, Ml = oi ? gt + E[Nn] + T[Nn] - Oa - I.altAxis : sn, go = p && oi ? R8(Ol, gt, Ml) : Ts(p ? Ol : Ar, gt, p ? Ml : sn);
      P[k] = go, G[k] = go - gt;
    }
    t.modifiersData[r] = G;
  }
}
const u7 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: l7,
  requiresIfExists: ["offset"]
};
function c7(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function d7(e) {
  return e === en(e) || !bn(e) ? Ag(e) : c7(e);
}
function f7(e) {
  var t = e.getBoundingClientRect(), n = ga(t.width) / e.offsetWidth || 1, r = ga(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function p7(e, t, n) {
  n === void 0 && (n = !1);
  var r = bn(t), o = bn(t) && f7(t), i = vo(t), a = ya(e, o, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((or(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Fg(i)) && (s = d7(t)), bn(t) ? (l = ya(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Dg(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function h7(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
function m7(e) {
  var t = h7(e);
  return E8.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function v7(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function g7(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var iS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function aS() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function y7(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? iS : o;
  return function(s, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, iS, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, p = {
      state: c,
      setOptions: function(h) {
        var m = typeof h == "function" ? h(c.options) : h;
        y(), c.options = Object.assign({}, i, c.options, m), c.scrollParents = {
          reference: qo(s) ? _s(s) : s.contextElement ? _s(s.contextElement) : [],
          popper: _s(l)
        };
        var b = m7(g7([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = b.filter(function(x) {
          return x.enabled;
        }), g(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var h = c.elements, m = h.reference, b = h.popper;
          if (aS(m, b)) {
            c.rects = {
              reference: p7(m, kl(b), c.options.strategy === "fixed"),
              popper: Rg(b)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(I) {
              return c.modifiersData[I.name] = Object.assign({}, I.data);
            });
            for (var x = 0; x < c.orderedModifiers.length; x++) {
              if (c.reset === !0) {
                c.reset = !1, x = -1;
                continue;
              }
              var k = c.orderedModifiers[x], P = k.fn, E = k.options, T = E === void 0 ? {} : E, M = k.name;
              typeof P == "function" && (c = P({
                state: c,
                options: T,
                name: M,
                instance: p
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: v7(function() {
        return new Promise(function(S) {
          p.forceUpdate(), S(c);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!aS(s, l))
      return p;
    p.setOptions(u).then(function(S) {
      !f && u.onFirstUpdate && u.onFirstUpdate(S);
    });
    function g() {
      c.orderedModifiers.forEach(function(S) {
        var h = S.name, m = S.options, b = m === void 0 ? {} : m, x = S.effect;
        if (typeof x == "function") {
          var k = x({
            state: c,
            name: h,
            instance: p,
            options: b
          }), P = function() {
          };
          d.push(k || P);
        }
      });
    }
    function y() {
      d.forEach(function(S) {
        return S();
      }), d = [];
    }
    return p;
  };
}
var b7 = [B8, a7, N8, O8, o7, J8, u7, F8, t7], S7 = /* @__PURE__ */ y7({
  defaultModifiers: b7
});
function G2(e = {}) {
  const {
    enabled: t = !0,
    modifiers: n,
    placement: r = "bottom",
    strategy: o = "absolute",
    arrowPadding: i = 8,
    eventListeners: a = !0,
    offset: s,
    gutter: l = 8,
    flip: u = !0,
    boundary: c = "clippingParents",
    preventOverflow: d = !0,
    matchWidth: f,
    direction: p = "ltr"
  } = e, g = v.useRef(null), y = v.useRef(null), S = v.useRef(null), h = h8(r, p), m = v.useRef(() => {
  }), b = v.useCallback(() => {
    var I;
    !t || !g.current || !y.current || ((I = m.current) == null || I.call(m), S.current = S7(g.current, y.current, {
      placement: h,
      modifiers: [
        d8,
        l8,
        s8,
        {
          ...a8,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...i8(a)
        },
        {
          name: "arrow",
          options: { padding: i }
        },
        {
          name: "offset",
          options: {
            offset: s ?? [0, l]
          }
        },
        {
          name: "flip",
          enabled: !!u,
          options: { padding: 8 }
        },
        {
          name: "preventOverflow",
          enabled: !!d,
          options: { boundary: c }
        },
        // allow users override internal modifiers
        ...n ?? []
      ],
      strategy: o
    }), S.current.forceUpdate(), m.current = S.current.destroy);
  }, [
    h,
    t,
    n,
    f,
    a,
    i,
    s,
    l,
    u,
    d,
    c,
    o
  ]);
  v.useEffect(() => () => {
    var I;
    !g.current && !y.current && ((I = S.current) == null || I.destroy(), S.current = null);
  }, []);
  const x = v.useCallback(
    (I) => {
      g.current = I, b();
    },
    [b]
  ), k = v.useCallback(
    (I = {}, D = null) => ({
      ...I,
      ref: at(x, D)
    }),
    [x]
  ), P = v.useCallback(
    (I) => {
      y.current = I, b();
    },
    [b]
  ), E = v.useCallback(
    (I = {}, D = null) => ({
      ...I,
      ref: at(P, D),
      style: {
        ...I.style,
        position: o,
        minWidth: f ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, P, f]
  ), T = v.useCallback((I = {}, D = null) => {
    const { size: G, shadowColor: H, bg: L, style: W, ...K } = I;
    return {
      ...K,
      ref: D,
      "data-popper-arrow": "",
      style: x7(I)
    };
  }, []), M = v.useCallback(
    (I = {}, D = null) => ({
      ...I,
      ref: D,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var I;
      (I = S.current) == null || I.update();
    },
    forceUpdate() {
      var I;
      (I = S.current) == null || I.forceUpdate();
    },
    transformOrigin: wt.transformOrigin.varRef,
    referenceRef: x,
    popperRef: P,
    getPopperProps: E,
    getArrowProps: T,
    getArrowInnerProps: M,
    getReferenceProps: k
  };
}
function x7(e) {
  const { size: t, shadowColor: n, bg: r, style: o } = e, i = { ...o, position: "absolute" };
  return t && (i["--popper-arrow-size"] = t), n && (i["--popper-arrow-shadow-color"] = n), r && (i["--popper-arrow-bg"] = r), i;
}
function K2(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = oo(n), a = oo(t), [s, l] = v.useState(e.defaultIsOpen || !1), u = r !== void 0 ? r : s, c = r !== void 0, d = v.useId(), f = o ?? `disclosure-${d}`, p = v.useCallback(() => {
    c || l(!1), a == null || a();
  }, [c, a]), g = v.useCallback(() => {
    c || l(!0), i == null || i();
  }, [c, i]), y = v.useCallback(() => {
    u ? p() : g();
  }, [u, g, p]);
  function S(m = {}) {
    return {
      ...m,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(b) {
        var x;
        (x = m.onClick) == null || x.call(m, b), y();
      }
    };
  }
  function h(m = {}) {
    return {
      ...m,
      hidden: !u,
      id: f
    };
  }
  return {
    isOpen: u,
    onOpen: g,
    onClose: p,
    onToggle: y,
    isControlled: c,
    getButtonProps: S,
    getDisclosureProps: h
  };
}
function w7(e) {
  const { ref: t, handler: n, enabled: r = !0 } = e, o = oo(n), a = v.useRef({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  v.useEffect(() => {
    if (!r)
      return;
    const s = (d) => {
      Rp(d, t) && (a.isPointerDown = !0);
    }, l = (d) => {
      if (a.ignoreEmulatedMouseEvents) {
        a.ignoreEmulatedMouseEvents = !1;
        return;
      }
      a.isPointerDown && n && Rp(d, t) && (a.isPointerDown = !1, o(d));
    }, u = (d) => {
      a.ignoreEmulatedMouseEvents = !0, n && a.isPointerDown && Rp(d, t) && (a.isPointerDown = !1, o(d));
    }, c = Y2(t.current);
    return c.addEventListener("mousedown", s, !0), c.addEventListener("mouseup", l, !0), c.addEventListener("touchstart", s, !0), c.addEventListener("touchend", u, !0), () => {
      c.removeEventListener("mousedown", s, !0), c.removeEventListener("mouseup", l, !0), c.removeEventListener("touchstart", s, !0), c.removeEventListener("touchend", u, !0);
    };
  }, [n, t, o, a, r]);
}
function Rp(e, t) {
  var n;
  const r = e.target;
  return r && !Y2(r).contains(r) ? !1 : !((n = t.current) != null && n.contains(r));
}
function Y2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function q2(e) {
  const { isOpen: t, ref: n } = e, [r, o] = v.useState(t), [i, a] = v.useState(!1);
  return v.useEffect(() => {
    i || (o(t), a(!0));
  }, [t, i, r]), Sg(
    () => n.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !r),
    onComplete() {
      var l;
      const u = P9(n.current), c = new u.CustomEvent("animationend", { bubbles: !0 });
      (l = n.current) == null || l.dispatchEvent(c);
    }
  };
}
function X2(e) {
  const { wasSelected: t, enabled: n, isSelected: r, mode: o = "unmount" } = e;
  return !!(!n || r || o === "keepMounted" && t);
}
var [
  C7,
  k7,
  P7,
  E7
] = OP(), [T7, Pl] = nt({
  strict: !1,
  name: "MenuContext"
});
function _7(e, ...t) {
  const n = v.useId(), r = e || n;
  return v.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
function Q2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function sS(e) {
  return Q2(e).activeElement === e;
}
function O7(e = {}) {
  const {
    id: t,
    closeOnSelect: n = !0,
    closeOnBlur: r = !0,
    initialFocusRef: o,
    autoSelect: i = !0,
    isLazy: a,
    isOpen: s,
    defaultIsOpen: l,
    onClose: u,
    onOpen: c,
    placement: d = "bottom-start",
    lazyBehavior: f = "unmount",
    direction: p,
    computePositionOnMount: g = !1,
    ...y
  } = e, S = v.useRef(null), h = v.useRef(null), m = P7(), b = v.useCallback(() => {
    requestAnimationFrame(() => {
      var z;
      (z = S.current) == null || z.focus({ preventScroll: !1 });
    });
  }, []), x = v.useCallback(() => {
    const z = setTimeout(() => {
      var te;
      if (o)
        (te = o.current) == null || te.focus();
      else {
        const le = m.firstEnabled();
        le && H(le.index);
      }
    });
    A.current.add(z);
  }, [m, o]), k = v.useCallback(() => {
    const z = setTimeout(() => {
      const te = m.lastEnabled();
      te && H(te.index);
    });
    A.current.add(z);
  }, [m]), P = v.useCallback(() => {
    c == null || c(), i ? x() : b();
  }, [i, x, b, c]), { isOpen: E, onOpen: T, onClose: M, onToggle: I } = K2({
    isOpen: s,
    defaultIsOpen: l,
    onClose: u,
    onOpen: P
  });
  w7({
    enabled: E && r,
    ref: S,
    handler: (z) => {
      var te;
      (te = h.current) != null && te.contains(z.target) || M();
    }
  });
  const D = G2({
    ...y,
    enabled: E || g,
    placement: d,
    direction: p
  }), [G, H] = v.useState(-1);
  pa(() => {
    E || H(-1);
  }, [E]), F2(S, {
    focusRef: h,
    visible: E,
    shouldFocus: !0
  });
  const L = q2({ isOpen: E, ref: S }), [W, K] = _7(t, "menu-button", "menu-list"), $ = v.useCallback(() => {
    T(), b();
  }, [T, b]), A = v.useRef(/* @__PURE__ */ new Set([]));
  v.useEffect(() => {
    const z = A.current;
    return () => {
      z.forEach((te) => clearTimeout(te)), z.clear();
    };
  }, []);
  const j = v.useCallback(() => {
    T(), x();
  }, [x, T]), U = v.useCallback(() => {
    T(), k();
  }, [T, k]), V = v.useCallback(() => {
    var z, te;
    const le = Q2(S.current), ae = (z = S.current) == null ? void 0 : z.contains(le.activeElement);
    if (!(E && !ae))
      return;
    const me = (te = m.item(G)) == null ? void 0 : te.node;
    me == null || me.focus({ preventScroll: !0 });
  }, [E, G, m]), Y = v.useRef(null);
  return {
    openAndFocusMenu: $,
    openAndFocusFirstItem: j,
    openAndFocusLastItem: U,
    onTransitionEnd: V,
    unstable__animationState: L,
    descendants: m,
    popper: D,
    buttonId: W,
    menuId: K,
    forceUpdate: D.forceUpdate,
    orientation: "vertical",
    isOpen: E,
    onToggle: I,
    onOpen: T,
    onClose: M,
    menuRef: S,
    buttonRef: h,
    focusedIndex: G,
    closeOnSelect: n,
    closeOnBlur: r,
    autoSelect: i,
    setFocusedIndex: H,
    isLazy: a,
    lazyBehavior: f,
    initialFocusRef: o,
    rafId: Y
  };
}
function M7(e = {}, t = null) {
  const n = Pl(), { onToggle: r, popper: o, openAndFocusFirstItem: i, openAndFocusLastItem: a } = n, s = v.useCallback(
    (l) => {
      const u = l.key, d = {
        Enter: i,
        ArrowDown: i,
        ArrowUp: a
      }[u];
      d && (l.preventDefault(), l.stopPropagation(), d(l));
    },
    [i, a]
  );
  return {
    ...e,
    ref: at(n.buttonRef, t, o.referenceRef),
    id: n.buttonId,
    "data-active": fn(n.isOpen),
    "aria-expanded": n.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": n.menuId,
    onClick: Le(e.onClick, r),
    onKeyDown: Le(e.onKeyDown, s)
  };
}
function ym(e) {
  var t;
  return D7(e) && !!((t = e == null ? void 0 : e.getAttribute("role")) != null && t.startsWith("menuitem"));
}
function I7(e = {}, t = null) {
  const n = Pl();
  if (!n)
    throw new Error(
      "useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>"
    );
  const {
    focusedIndex: r,
    setFocusedIndex: o,
    menuRef: i,
    isOpen: a,
    onClose: s,
    menuId: l,
    isLazy: u,
    lazyBehavior: c,
    unstable__animationState: d
  } = n, f = k7(), p = Y9({
    preventDefault: (h) => h.key !== " " && ym(h.target)
  }), g = v.useCallback(
    (h) => {
      if (!h.currentTarget.contains(h.target))
        return;
      const m = h.key, x = {
        Tab: (P) => P.preventDefault(),
        Escape: s,
        ArrowDown: () => {
          const P = f.nextEnabled(r);
          P && o(P.index);
        },
        ArrowUp: () => {
          const P = f.prevEnabled(r);
          P && o(P.index);
        }
      }[m];
      if (x) {
        h.preventDefault(), x(h);
        return;
      }
      const k = p((P) => {
        const E = q9(
          f.values(),
          P,
          (T) => {
            var M, I;
            return (I = (M = T == null ? void 0 : T.node) == null ? void 0 : M.textContent) != null ? I : "";
          },
          f.item(r)
        );
        if (E) {
          const T = f.indexOf(E.node);
          o(T);
        }
      });
      ym(h.target) && k(h);
    },
    [
      f,
      r,
      p,
      s,
      o
    ]
  ), y = v.useRef(!1);
  a && (y.current = !0);
  const S = X2({
    wasSelected: y.current,
    enabled: u,
    mode: c,
    isSelected: d.present
  });
  return {
    ...e,
    ref: at(i, t),
    children: S ? e.children : null,
    tabIndex: -1,
    role: "menu",
    id: l,
    style: {
      ...e.style,
      transformOrigin: "var(--popper-transform-origin)"
    },
    "aria-orientation": "vertical",
    onKeyDown: Le(e.onKeyDown, g)
  };
}
function R7(e = {}) {
  const { popper: t, isOpen: n } = Pl();
  return t.getPopperProps({
    ...e,
    style: {
      visibility: n ? "visible" : "hidden",
      ...e.style
    }
  });
}
function Z2(e = {}, t = null) {
  const {
    onMouseEnter: n,
    onMouseMove: r,
    onMouseLeave: o,
    onClick: i,
    onFocus: a,
    isDisabled: s,
    isFocusable: l,
    closeOnSelect: u,
    type: c,
    ...d
  } = e, f = Pl(), {
    setFocusedIndex: p,
    focusedIndex: g,
    closeOnSelect: y,
    onClose: S,
    menuRef: h,
    isOpen: m,
    menuId: b,
    rafId: x
  } = f, k = v.useRef(null), P = `${b}-menuitem-${v.useId()}`, { index: E, register: T } = E7({
    disabled: s && !l
  }), M = v.useCallback(
    ($) => {
      n == null || n($), !s && p(E);
    },
    [p, E, s, n]
  ), I = v.useCallback(
    ($) => {
      r == null || r($), k.current && !sS(k.current) && M($);
    },
    [M, r]
  ), D = v.useCallback(
    ($) => {
      o == null || o($), !s && p(-1);
    },
    [p, s, o]
  ), G = v.useCallback(
    ($) => {
      i == null || i($), ym($.currentTarget) && (u ?? y) && S();
    },
    [S, i, y, u]
  ), H = v.useCallback(
    ($) => {
      a == null || a($), p(E);
    },
    [p, a, E]
  ), L = E === g, W = s && !l;
  pa(() => {
    if (m)
      return L && !W && k.current ? (x.current && cancelAnimationFrame(x.current), x.current = requestAnimationFrame(() => {
        var $;
        ($ = k.current) == null || $.focus({ preventScroll: !0 }), x.current = null;
      })) : h.current && !sS(h.current) && h.current.focus({ preventScroll: !0 }), () => {
        x.current && cancelAnimationFrame(x.current);
      };
  }, [L, W, h, m]);
  const K = Q9({
    onClick: G,
    onFocus: H,
    onMouseEnter: M,
    onMouseMove: I,
    onMouseLeave: D,
    ref: at(T, k, t),
    isDisabled: s,
    isFocusable: l
  });
  return {
    ...d,
    ...K,
    type: c ?? K.type,
    id: P,
    role: "menuitem",
    tabIndex: L ? 0 : -1
  };
}
function $7(e = {}, t = null) {
  const { type: n = "radio", isChecked: r, ...o } = e;
  return {
    ...Z2(o, t),
    role: `menuitem${n}`,
    "aria-checked": r
  };
}
function A7(e = {}) {
  const {
    children: t,
    type: n = "radio",
    value: r,
    defaultValue: o,
    onChange: i,
    ...a
  } = e, l = n === "radio" ? "" : [], [u, c] = IP({
    defaultValue: o ?? l,
    value: r,
    onChange: i
  }), d = v.useCallback(
    (g) => {
      if (n === "radio" && typeof u == "string" && c(g), n === "checkbox" && Array.isArray(u)) {
        const y = u.includes(g) ? u.filter((S) => S !== g) : u.concat(g);
        c(y);
      }
    },
    [u, c, n]
  ), p = zP(t).map((g) => {
    if (g.type.id !== "MenuItemOption")
      return g;
    const y = (h) => {
      var m, b;
      d(g.props.value), (b = (m = g.props).onClick) == null || b.call(m, h);
    }, S = n === "radio" ? g.props.value === u : u.includes(g.props.value);
    return v.cloneElement(g, {
      type: n,
      onClick: y,
      isChecked: S
    });
  });
  return {
    ...a,
    children: p
  };
}
function D7(e) {
  var t;
  if (!F7(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function F7(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
var [L7, _a] = nt({
  name: "MenuStylesContext",
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), El = (e) => {
  const { children: t } = e, n = mt("Menu", e), r = on(e), { direction: o } = Jo(), { descendants: i, ...a } = O7({ ...r, direction: o }), s = v.useMemo(() => a, [a]), { isOpen: l, onClose: u, forceUpdate: c } = s;
  return /* @__PURE__ */ w.jsx(C7, { value: i, children: /* @__PURE__ */ w.jsx(T7, { value: s, children: /* @__PURE__ */ w.jsx(L7, { value: n, children: Xn(t, { isOpen: l, onClose: u, forceUpdate: c }) }) }) });
};
El.displayName = "Menu";
var J2 = oe(
  (e, t) => {
    const n = _a();
    return /* @__PURE__ */ w.jsx(
      X.span,
      {
        ref: t,
        ...e,
        __css: n.command,
        className: "chakra-menu__command"
      }
    );
  }
);
J2.displayName = "MenuCommand";
var eE = oe(
  (e, t) => {
    const { type: n, ...r } = e, o = _a(), i = r.as || n ? n ?? void 0 : "button", a = v.useMemo(
      () => ({
        textDecoration: "none",
        color: "inherit",
        userSelect: "none",
        display: "flex",
        width: "100%",
        alignItems: "center",
        textAlign: "start",
        flex: "0 0 auto",
        outline: 0,
        ...o.item
      }),
      [o.item]
    );
    return /* @__PURE__ */ w.jsx(X.button, { ref: t, type: i, ...r, __css: a });
  }
), Jd = (e) => {
  const { className: t, children: n, ...r } = e, o = _a(), i = v.Children.only(n), a = v.isValidElement(i) ? v.cloneElement(i, {
    focusable: "false",
    "aria-hidden": !0,
    className: ie("chakra-menu__icon", i.props.className)
  }) : null, s = ie("chakra-menu__icon-wrapper", t);
  return /* @__PURE__ */ w.jsx(X.span, { className: s, ...r, __css: o.icon, children: a });
};
Jd.displayName = "MenuIcon";
var Ni = oe((e, t) => {
  const {
    icon: n,
    iconSpacing: r = "0.75rem",
    command: o,
    commandSpacing: i = "0.75rem",
    children: a,
    ...s
  } = e, l = Z2(s, t), c = n || o ? /* @__PURE__ */ w.jsx("span", { style: { pointerEvents: "none", flex: 1 }, children: a }) : a;
  return /* @__PURE__ */ w.jsxs(
    eE,
    {
      ...l,
      className: ie("chakra-menu__menuitem", l.className),
      children: [
        n && /* @__PURE__ */ w.jsx(Jd, { fontSize: "0.8em", marginEnd: r, children: n }),
        c,
        o && /* @__PURE__ */ w.jsx(J2, { marginStart: i, children: o })
      ]
    }
  );
});
Ni.displayName = "MenuItem";
var j7 = {
  enter: {
    visibility: "visible",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    transitionEnd: {
      visibility: "hidden"
    },
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.1,
      easings: "easeOut"
    }
  }
}, z7 = X(Mr.div), ef = oe(function(t, n) {
  var r, o;
  const { rootProps: i, motionProps: a, ...s } = t, {
    isOpen: l,
    onTransitionEnd: u,
    unstable__animationState: c
  } = Pl(), d = I7(s, n), f = R7(i), p = _a();
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ...f,
      __css: { zIndex: (o = t.zIndex) != null ? o : (r = p.list) == null ? void 0 : r.zIndex },
      children: /* @__PURE__ */ w.jsx(
        z7,
        {
          variants: j7,
          initial: !1,
          animate: l ? "enter" : "exit",
          __css: { outline: 0, ...p.list },
          ...a,
          className: ie("chakra-menu__menu-list", d.className),
          ...d,
          onUpdate: u,
          onAnimationComplete: wC(
            c.onComplete,
            d.onAnimationComplete
          )
        }
      )
    }
  );
});
ef.displayName = "MenuList";
var tE = oe((e, t) => {
  const { title: n, children: r, className: o, ...i } = e, a = ie("chakra-menu__group__title", o), s = _a();
  return /* @__PURE__ */ w.jsxs("div", { ref: t, className: "chakra-menu__group", role: "group", children: [
    n && /* @__PURE__ */ w.jsx(X.p, { className: a, ...i, __css: s.groupTitle, children: n }),
    r
  ] });
});
tE.displayName = "MenuGroup";
var nE = (e) => {
  const { className: t, title: n, ...r } = e, o = A7(r);
  return /* @__PURE__ */ w.jsx(
    tE,
    {
      title: n,
      className: ie("chakra-menu__option-group", t),
      ...o
    }
  );
};
nE.displayName = "MenuOptionGroup";
var N7 = oe((e, t) => {
  const n = _a();
  return /* @__PURE__ */ w.jsx(
    X.button,
    {
      ref: t,
      ...e,
      __css: {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        outline: 0,
        ...n.button
      }
    }
  );
}), Lg = oe(
  (e, t) => {
    const { children: n, as: r, ...o } = e, i = M7(o, t), a = r || N7;
    return /* @__PURE__ */ w.jsx(
      a,
      {
        ...i,
        className: ie("chakra-menu__menu-button", e.className),
        children: /* @__PURE__ */ w.jsx(
          X.span,
          {
            __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
            children: e.children
          }
        )
      }
    );
  }
);
Lg.displayName = "MenuButton";
var V7 = (e) => /* @__PURE__ */ w.jsx("svg", { viewBox: "0 0 14 14", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ w.jsx(
  "polygon",
  {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }
) }), jg = oe(
  (e, t) => {
    const { icon: n, iconSpacing: r = "0.75rem", ...o } = e, i = $7(o, t);
    return /* @__PURE__ */ w.jsxs(
      eE,
      {
        ...i,
        className: ie("chakra-menu__menuitem-option", o.className),
        children: [
          n !== null && /* @__PURE__ */ w.jsx(
            Jd,
            {
              fontSize: "0.8em",
              marginEnd: r,
              opacity: e.isChecked ? 1 : 0,
              children: n || /* @__PURE__ */ w.jsx(V7, {})
            }
          ),
          /* @__PURE__ */ w.jsx("span", { style: { flex: 1 }, children: i.children })
        ]
      }
    );
  }
);
jg.id = "MenuItemOption";
jg.displayName = "MenuItemOption";
var B7 = {
  slideInBottom: {
    ...as,
    custom: { offsetY: 16, reverse: !0 }
  },
  slideInRight: {
    ...as,
    custom: { offsetX: 16, reverse: !0 }
  },
  slideInTop: {
    ...as,
    custom: { offsetY: -16, reverse: !0 }
  },
  slideInLeft: {
    ...as,
    custom: { offsetX: -16, reverse: !0 }
  },
  scale: {
    ...FP,
    custom: { initialScale: 0.95, reverse: !0 }
  },
  none: {}
}, W7 = X(Mr.section), H7 = (e) => B7[e || "none"], rE = v.forwardRef(
  (e, t) => {
    const { preset: n, motionProps: r = H7(n), ...o } = e;
    return /* @__PURE__ */ w.jsx(W7, { ref: t, ...r, ...o });
  }
);
rE.displayName = "ModalTransition";
var U7 = Object.defineProperty, G7 = (e, t, n) => t in e ? U7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, K7 = (e, t, n) => (G7(e, typeof t != "symbol" ? t + "" : t, n), n), Y7 = class {
  constructor() {
    K7(this, "modals"), this.modals = /* @__PURE__ */ new Map();
  }
  add(e) {
    return this.modals.set(e, this.modals.size + 1), this.modals.size;
  }
  remove(e) {
    this.modals.delete(e);
  }
  isTopModal(e) {
    return e ? this.modals.get(e) === this.modals.size : !1;
  }
}, bm = new Y7();
function oE(e, t) {
  const [n, r] = v.useState(0);
  return v.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const i = bm.add(o);
        r(i);
      }
      return () => {
        bm.remove(o), r(0);
      };
    }
  }, [t, e]), n;
}
var q7 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ci = /* @__PURE__ */ new WeakMap(), pu = /* @__PURE__ */ new WeakMap(), hu = {}, $p = 0, iE = function(e) {
  return e && (e.host || iE(e.parentNode));
}, X7 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = iE(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Q7 = function(e, t, n, r) {
  var o = X7(t, Array.isArray(e) ? e : [e]);
  hu[n] || (hu[n] = /* @__PURE__ */ new WeakMap());
  var i = hu[n], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else {
        var p = f.getAttribute(r), g = p !== null && p !== "false", y = (ci.get(f) || 0) + 1, S = (i.get(f) || 0) + 1;
        ci.set(f, y), i.set(f, S), a.push(f), y === 1 && g && pu.set(f, !0), S === 1 && f.setAttribute(n, "true"), g || f.setAttribute(r, "true");
      }
    });
  };
  return c(t), s.clear(), $p++, function() {
    a.forEach(function(d) {
      var f = ci.get(d) - 1, p = i.get(d) - 1;
      ci.set(d, f), i.set(d, p), f || (pu.has(d) || d.removeAttribute(r), pu.delete(d)), p || d.removeAttribute(n);
    }), $p--, $p || (ci = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), pu = /* @__PURE__ */ new WeakMap(), hu = {});
  };
}, Z7 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || q7(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Q7(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function J7(e) {
  const {
    isOpen: t,
    onClose: n,
    id: r,
    closeOnOverlayClick: o = !0,
    closeOnEsc: i = !0,
    useInert: a = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = v.useRef(null), c = v.useRef(null), [d, f, p] = tW(
    r,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  eW(u, t && a);
  const g = oE(u, t), y = v.useRef(null), S = v.useCallback((M) => {
    y.current = M.target;
  }, []), h = v.useCallback(
    (M) => {
      M.key === "Escape" && (M.stopPropagation(), i && (n == null || n()), l == null || l());
    },
    [i, n, l]
  ), [m, b] = v.useState(!1), [x, k] = v.useState(!1), P = v.useCallback(
    (M = {}, I = null) => ({
      role: "dialog",
      ...M,
      ref: at(I, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": m ? f : void 0,
      "aria-describedby": x ? p : void 0,
      onClick: Le(
        M.onClick,
        (D) => D.stopPropagation()
      )
    }),
    [p, x, d, f, m]
  ), E = v.useCallback(
    (M) => {
      M.stopPropagation(), y.current === M.target && bm.isTopModal(u.current) && (o && (n == null || n()), s == null || s());
    },
    [n, o, s]
  ), T = v.useCallback(
    (M = {}, I = null) => ({
      ...M,
      ref: at(I, c),
      onClick: Le(M.onClick, E),
      onKeyDown: Le(M.onKeyDown, h),
      onMouseDown: Le(M.onMouseDown, S)
    }),
    [h, S, E]
  );
  return {
    isOpen: t,
    onClose: n,
    headerId: f,
    bodyId: p,
    setBodyMounted: k,
    setHeaderMounted: b,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: P,
    getDialogContainerProps: T,
    index: g
  };
}
function eW(e, t) {
  const n = e.current;
  v.useEffect(() => {
    if (!(!e.current || !t))
      return Z7(e.current);
  }, [t, e, n]);
}
function tW(e, ...t) {
  const n = v.useId(), r = e || n;
  return v.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
var [nW, Tl] = nt({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [rW, Xo] = nt({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), tf = (e) => {
  const t = {
    scrollBehavior: "outside",
    autoFocus: !0,
    trapFocus: !0,
    returnFocusOnClose: !0,
    blockScrollOnMount: !0,
    allowPinchZoom: !1,
    motionPreset: "scale",
    lockFocusAcrossFrames: !0,
    ...e
  }, {
    portalProps: n,
    children: r,
    autoFocus: o,
    trapFocus: i,
    initialFocusRef: a,
    finalFocusRef: s,
    returnFocusOnClose: l,
    blockScrollOnMount: u,
    allowPinchZoom: c,
    preserveScrollBarGap: d,
    motionPreset: f,
    lockFocusAcrossFrames: p,
    onCloseComplete: g
  } = t, y = mt("Modal", t), h = {
    ...J7(t),
    autoFocus: o,
    trapFocus: i,
    initialFocusRef: a,
    finalFocusRef: s,
    returnFocusOnClose: l,
    blockScrollOnMount: u,
    allowPinchZoom: c,
    preserveScrollBarGap: d,
    motionPreset: f,
    lockFocusAcrossFrames: p
  };
  return /* @__PURE__ */ w.jsx(rW, { value: h, children: /* @__PURE__ */ w.jsx(nW, { value: y, children: /* @__PURE__ */ w.jsx(Ta, { onExitComplete: g, children: h.isOpen && /* @__PURE__ */ w.jsx(ml, { ...n, children: r }) }) }) });
};
tf.displayName = "Modal";
var Qu = "right-scroll-bar-position", Zu = "width-before-scroll-bar", oW = "with-scroll-bars-hidden", iW = "--removed-body-scroll-bar-size", aE = ZP(), Ap = function() {
}, nf = v.forwardRef(function(e, t) {
  var n = v.useRef(null), r = v.useState({
    onScrollCapture: Ap,
    onWheelCapture: Ap,
    onTouchMoveCapture: Ap
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, g = e.inert, y = e.allowPinchZoom, S = e.as, h = S === void 0 ? "div" : S, m = e.gapMode, b = qP(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = f, k = YP([n, t]), P = qn(qn({}, b), o);
  return v.createElement(
    v.Fragment,
    null,
    c && v.createElement(x, { sideCar: aE, removeScrollBar: u, shards: d, noIsolation: p, inert: g, setCallbacks: i, allowPinchZoom: !!y, lockRef: n, gapMode: m }),
    a ? v.cloneElement(v.Children.only(s), qn(qn({}, P), { ref: k })) : v.createElement(h, qn({}, P, { className: l, ref: k }), s)
  );
});
nf.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
nf.classNames = {
  fullWidth: Zu,
  zeroRight: Qu
};
var lS, aW = function() {
  if (lS)
    return lS;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function sW() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = aW();
  return t && e.setAttribute("nonce", t), e;
}
function lW(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function uW(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var cW = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = sW()) && (lW(t, n), uW(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, dW = function() {
  var e = cW();
  return function(t, n) {
    v.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, sE = function() {
  var e = dW(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, fW = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Dp = function(e) {
  return parseInt(e || "", 10) || 0;
}, pW = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Dp(n), Dp(r), Dp(o)];
}, hW = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return fW;
  var t = pW(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, mW = sE(), vW = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(oW, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Qu, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Zu, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Qu, " .").concat(Qu, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Zu, " .").concat(Zu, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(iW, ": ").concat(s, `px;
  }
`);
}, gW = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = v.useMemo(function() {
    return hW(o);
  }, [o]);
  return v.createElement(mW, { styles: vW(i, !t, o, n ? "" : "!important") });
}, Sm = !1;
if (typeof window < "u")
  try {
    var mu = Object.defineProperty({}, "passive", {
      get: function() {
        return Sm = !0, !0;
      }
    });
    window.addEventListener("test", mu, mu), window.removeEventListener("test", mu, mu);
  } catch {
    Sm = !1;
  }
var di = Sm ? { passive: !1 } : !1, yW = function(e) {
  return e.tagName === "TEXTAREA";
}, lE = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !yW(e) && n[t] === "visible")
  );
}, bW = function(e) {
  return lE(e, "overflowY");
}, SW = function(e) {
  return lE(e, "overflowX");
}, uS = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = uE(e, r);
    if (o) {
      var i = cE(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, xW = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, wW = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, uE = function(e, t) {
  return e === "v" ? bW(t) : SW(t);
}, cE = function(e, t) {
  return e === "v" ? xW(t) : wW(t);
}, CW = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, kW = function(e, t, n, r, o) {
  var i = CW(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var p = cE(e, s), g = p[0], y = p[1], S = p[2], h = y - S - i * g;
    (g || h) && uE(e, s) && (d += h, f += g), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, vu = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, cS = function(e) {
  return [e.deltaX, e.deltaY];
}, dS = function(e) {
  return e && "current" in e ? e.current : e;
}, PW = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, EW = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, TW = 0, fi = [];
function _W(e) {
  var t = v.useRef([]), n = v.useRef([0, 0]), r = v.useRef(), o = v.useState(TW++)[0], i = v.useState(sE)[0], a = v.useRef(e);
  v.useEffect(function() {
    a.current = e;
  }, [e]), v.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = E6([e.lockRef.current], (e.shards || []).map(dS), !0).filter(Boolean);
      return y.forEach(function(S) {
        return S.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), y.forEach(function(S) {
          return S.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = v.useCallback(function(y, S) {
    if ("touches" in y && y.touches.length === 2)
      return !a.current.allowPinchZoom;
    var h = vu(y), m = n.current, b = "deltaX" in y ? y.deltaX : m[0] - h[0], x = "deltaY" in y ? y.deltaY : m[1] - h[1], k, P = y.target, E = Math.abs(b) > Math.abs(x) ? "h" : "v";
    if ("touches" in y && E === "h" && P.type === "range")
      return !1;
    var T = uS(E, P);
    if (!T)
      return !0;
    if (T ? k = E : (k = E === "v" ? "h" : "v", T = uS(E, P)), !T)
      return !1;
    if (!r.current && "changedTouches" in y && (b || x) && (r.current = k), !k)
      return !0;
    var M = r.current || k;
    return kW(M, S, y, M === "h" ? b : x, !0);
  }, []), l = v.useCallback(function(y) {
    var S = y;
    if (!(!fi.length || fi[fi.length - 1] !== i)) {
      var h = "deltaY" in S ? cS(S) : vu(S), m = t.current.filter(function(k) {
        return k.name === S.type && (k.target === S.target || S.target === k.shadowParent) && PW(k.delta, h);
      })[0];
      if (m && m.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!m) {
        var b = (a.current.shards || []).map(dS).filter(Boolean).filter(function(k) {
          return k.contains(S.target);
        }), x = b.length > 0 ? s(S, b[0]) : !a.current.noIsolation;
        x && S.cancelable && S.preventDefault();
      }
    }
  }, []), u = v.useCallback(function(y, S, h, m) {
    var b = { name: y, delta: S, target: h, should: m, shadowParent: OW(h) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== b;
      });
    }, 1);
  }, []), c = v.useCallback(function(y) {
    n.current = vu(y), r.current = void 0;
  }, []), d = v.useCallback(function(y) {
    u(y.type, cS(y), y.target, s(y, e.lockRef.current));
  }, []), f = v.useCallback(function(y) {
    u(y.type, vu(y), y.target, s(y, e.lockRef.current));
  }, []);
  v.useEffect(function() {
    return fi.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, di), document.addEventListener("touchmove", l, di), document.addEventListener("touchstart", c, di), function() {
      fi = fi.filter(function(y) {
        return y !== i;
      }), document.removeEventListener("wheel", l, di), document.removeEventListener("touchmove", l, di), document.removeEventListener("touchstart", c, di);
    };
  }, []);
  var p = e.removeScrollBar, g = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    g ? v.createElement(i, { styles: EW(o) }) : null,
    p ? v.createElement(gW, { gapMode: e.gapMode }) : null
  );
}
function OW(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const MW = T6(aE, _W);
var dE = v.forwardRef(function(e, t) {
  return v.createElement(nf, qn({}, e, { ref: t, sideCar: MW }));
});
dE.classNames = nf.classNames;
const IW = dE;
function RW(e) {
  const {
    autoFocus: t,
    trapFocus: n,
    dialogRef: r,
    initialFocusRef: o,
    blockScrollOnMount: i,
    allowPinchZoom: a,
    finalFocusRef: s,
    returnFocusOnClose: l,
    preserveScrollBarGap: u,
    lockFocusAcrossFrames: c,
    isOpen: d
  } = Xo(), [f, p] = lP();
  v.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const g = oE(r, d);
  return /* @__PURE__ */ w.jsx(
    M2,
    {
      autoFocus: t,
      isDisabled: !n,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: r,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ w.jsx(
        IW,
        {
          removeScrollBar: !u,
          allowPinchZoom: a,
          enabled: g === 1 && i,
          forwardProps: !0,
          children: e.children
        }
      )
    }
  );
}
var rf = oe(
  (e, t) => {
    const {
      className: n,
      children: r,
      containerProps: o,
      motionProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l } = Xo(), u = s(a, t), c = l(o), d = ie("chakra-modal__content", n), f = Tl(), p = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...f.dialog
    }, g = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...f.dialogContainer
    }, { motionPreset: y } = Xo();
    return /* @__PURE__ */ w.jsx(RW, { children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...c,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: g,
        children: /* @__PURE__ */ w.jsx(
          rE,
          {
            preset: y,
            motionProps: i,
            className: d,
            ...u,
            __css: p,
            children: r
          }
        )
      }
    ) });
  }
);
rf.displayName = "ModalContent";
var of = oe(
  (e, t) => {
    const { className: n, ...r } = e, { headerId: o, setHeaderMounted: i } = Xo();
    v.useEffect(() => (i(!0), () => i(!1)), [i]);
    const a = ie("chakra-modal__header", n), l = {
      flex: 0,
      ...Tl().header
    };
    return /* @__PURE__ */ w.jsx(
      X.header,
      {
        ref: t,
        className: a,
        id: o,
        ...r,
        __css: l
      }
    );
  }
);
of.displayName = "ModalHeader";
var $W = X(Mr.div), af = oe(
  (e, t) => {
    const { className: n, transition: r, motionProps: o, ...i } = e, a = ie("chakra-modal__overlay", n), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Tl().overlay
    }, { motionPreset: u } = Xo(), d = o || (u === "none" ? {} : DP);
    return /* @__PURE__ */ w.jsx(
      $W,
      {
        ...d,
        __css: l,
        ref: t,
        className: a,
        ...i
      }
    );
  }
);
af.displayName = "ModalOverlay";
var sf = oe((e, t) => {
  const { className: n, ...r } = e, { bodyId: o, setBodyMounted: i } = Xo();
  v.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = ie("chakra-modal__body", n), s = Tl();
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ref: t,
      className: a,
      id: o,
      ...r,
      __css: s.body
    }
  );
});
sf.displayName = "ModalBody";
var lf = oe(
  (e, t) => {
    const { onClick: n, className: r, ...o } = e, { onClose: i } = Xo(), a = ie("chakra-modal__close-btn", r), s = Tl();
    return /* @__PURE__ */ w.jsx(
      Yd,
      {
        ref: t,
        __css: s.closeButton,
        className: a,
        onClick: Le(n, (l) => {
          l.stopPropagation(), i();
        }),
        ...o
      }
    );
  }
);
lf.displayName = "ModalCloseButton";
var [AW, ri] = nt({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [DW, _l] = nt({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
}), fE = oe(
  function(t, n) {
    const { getHeaderProps: r } = ri(), o = _l();
    return /* @__PURE__ */ w.jsx(
      X.header,
      {
        ...r(t, n),
        className: ie("chakra-popover__header", t.className),
        __css: o.header
      }
    );
  }
);
fE.displayName = "PopoverHeader";
function zg(e) {
  const t = v.Children.only(e.children), { getTriggerProps: n } = ri();
  return v.cloneElement(t, n(t.props, t.ref));
}
zg.displayName = "PopoverTrigger";
var pi = {
  click: "click",
  hover: "hover"
};
function FW(e = {}) {
  const {
    closeOnBlur: t = !0,
    closeOnEsc: n = !0,
    initialFocusRef: r,
    id: o,
    returnFocusOnClose: i = !0,
    autoFocus: a = !0,
    arrowSize: s,
    arrowShadowColor: l,
    trigger: u = pi.click,
    openDelay: c = 200,
    closeDelay: d = 200,
    isLazy: f,
    lazyBehavior: p = "unmount",
    computePositionOnMount: g,
    ...y
  } = e, { isOpen: S, onClose: h, onOpen: m, onToggle: b } = K2(e), x = v.useRef(null), k = v.useRef(null), P = v.useRef(null), E = v.useRef(!1), T = v.useRef(!1);
  S && (T.current = !0);
  const [M, I] = v.useState(!1), [D, G] = v.useState(!1), H = v.useId(), L = o ?? H, [W, K, $, A] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((fe) => `${fe}-${L}`), {
    referenceRef: j,
    getArrowProps: U,
    getPopperProps: V,
    getArrowInnerProps: Y,
    forceUpdate: z
  } = G2({
    ...y,
    enabled: S || !!g
  }), te = q2({ isOpen: S, ref: P });
  m6({
    enabled: S,
    ref: k
  }), F2(P, {
    focusRef: k,
    visible: S,
    shouldFocus: i && u === pi.click
  }), e8(P, {
    focusRef: r,
    visible: S,
    shouldFocus: a && u === pi.click
  });
  const le = X2({
    wasSelected: T.current,
    enabled: f,
    mode: p,
    isSelected: te.present
  }), ae = v.useCallback(
    (fe = {}, vt = null) => {
      const Ge = {
        ...fe,
        style: {
          ...fe.style,
          transformOrigin: wt.transformOrigin.varRef,
          [wt.arrowSize.var]: s ? `${s}px` : void 0,
          [wt.arrowShadowColor.var]: l
        },
        ref: at(P, vt),
        children: le ? fe.children : null,
        id: K,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: Le(fe.onKeyDown, (Ut) => {
          n && Ut.key === "Escape" && h();
        }),
        onBlur: Le(fe.onBlur, (Ut) => {
          const $r = fS(Ut), gt = Fp(P.current, $r), Nn = Fp(k.current, $r);
          S && t && (!gt && !Nn) && h();
        }),
        "aria-labelledby": M ? $ : void 0,
        "aria-describedby": D ? A : void 0
      };
      return u === pi.hover && (Ge.role = "tooltip", Ge.onMouseEnter = Le(fe.onMouseEnter, () => {
        E.current = !0;
      }), Ge.onMouseLeave = Le(
        fe.onMouseLeave,
        (Ut) => {
          Ut.nativeEvent.relatedTarget !== null && (E.current = !1, setTimeout(() => h(), d));
        }
      )), Ge;
    },
    [
      le,
      K,
      M,
      $,
      D,
      A,
      u,
      n,
      h,
      S,
      t,
      d,
      l,
      s
    ]
  ), se = v.useCallback(
    (fe = {}, vt = null) => V(
      {
        ...fe,
        style: {
          visibility: S ? "visible" : "hidden",
          ...fe.style
        }
      },
      vt
    ),
    [S, V]
  ), me = v.useCallback(
    (fe, vt = null) => ({
      ...fe,
      // If anchor is rendered, it is used as reference.
      ref: at(vt, x, j)
    }),
    [x, j]
  ), Pe = v.useRef(), Je = v.useRef(), qe = v.useCallback(
    (fe) => {
      x.current == null && j(fe);
    },
    [j]
  ), an = v.useCallback(
    (fe = {}, vt = null) => {
      const Ge = {
        ...fe,
        ref: at(k, vt, qe),
        id: W,
        "aria-haspopup": "dialog",
        "aria-expanded": S,
        "aria-controls": K
      };
      return u === pi.click && (Ge.onClick = Le(fe.onClick, b)), u === pi.hover && (Ge.onFocus = Le(fe.onFocus, () => {
        Pe.current === void 0 && m();
      }), Ge.onBlur = Le(fe.onBlur, (Ut) => {
        const $r = fS(Ut), gt = !Fp(P.current, $r);
        S && t && gt && h();
      }), Ge.onKeyDown = Le(fe.onKeyDown, (Ut) => {
        Ut.key === "Escape" && h();
      }), Ge.onMouseEnter = Le(fe.onMouseEnter, () => {
        E.current = !0, Pe.current = window.setTimeout(() => m(), c);
      }), Ge.onMouseLeave = Le(fe.onMouseLeave, () => {
        E.current = !1, Pe.current && (clearTimeout(Pe.current), Pe.current = void 0), Je.current = window.setTimeout(() => {
          E.current === !1 && h();
        }, d);
      })), Ge;
    },
    [
      W,
      S,
      K,
      u,
      qe,
      b,
      m,
      t,
      h,
      c,
      d
    ]
  );
  v.useEffect(() => () => {
    Pe.current && clearTimeout(Pe.current), Je.current && clearTimeout(Je.current);
  }, []);
  const En = v.useCallback(
    (fe = {}, vt = null) => ({
      ...fe,
      id: $,
      ref: at(vt, (Ge) => {
        I(!!Ge);
      })
    }),
    [$]
  ), Rr = v.useCallback(
    (fe = {}, vt = null) => ({
      ...fe,
      id: A,
      ref: at(vt, (Ge) => {
        G(!!Ge);
      })
    }),
    [A]
  );
  return {
    forceUpdate: z,
    isOpen: S,
    onAnimationComplete: te.onComplete,
    onClose: h,
    getAnchorProps: me,
    getArrowProps: U,
    getArrowInnerProps: Y,
    getPopoverPositionerProps: se,
    getPopoverProps: ae,
    getTriggerProps: an,
    getHeaderProps: En,
    getBodyProps: Rr
  };
}
function Fp(e, t) {
  return e === t || (e == null ? void 0 : e.contains(t));
}
function fS(e) {
  var t;
  const n = e.currentTarget.ownerDocument.activeElement;
  return (t = e.relatedTarget) != null ? t : n;
}
function Ng(e) {
  const t = mt("Popover", e), { children: n, ...r } = on(e), o = Jo(), i = FW({ ...r, direction: o.direction });
  return /* @__PURE__ */ w.jsx(AW, { value: i, children: /* @__PURE__ */ w.jsx(DW, { value: t, children: Xn(n, {
    isOpen: i.isOpen,
    onClose: i.onClose,
    forceUpdate: i.forceUpdate
  }) }) });
}
Ng.displayName = "Popover";
var Lp = (e, t) => t ? `${e}.${t}, ${t}` : void 0;
function Vg(e) {
  var t;
  const { bg: n, bgColor: r, backgroundColor: o, shadow: i, boxShadow: a, shadowColor: s } = e, { getArrowProps: l, getArrowInnerProps: u } = ri(), c = _l(), d = (t = n ?? r) != null ? t : o, f = i ?? a;
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ...l(),
      className: "chakra-popover__arrow-positioner",
      children: /* @__PURE__ */ w.jsx(
        X.div,
        {
          className: ie("chakra-popover__arrow", e.className),
          ...u(e),
          __css: {
            "--popper-arrow-shadow-color": Lp("colors", s),
            "--popper-arrow-bg": Lp("colors", d),
            "--popper-arrow-shadow": Lp("shadows", f),
            ...c.arrow
          }
        }
      )
    }
  );
}
Vg.displayName = "PopoverArrow";
var Bg = oe(
  function(t, n) {
    const { getBodyProps: r } = ri(), o = _l();
    return /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...r(t, n),
        className: ie("chakra-popover__body", t.className),
        __css: o.body
      }
    );
  }
);
Bg.displayName = "PopoverBody";
var Wg = oe(
  function(t, n) {
    const { onClose: r } = ri(), o = _l();
    return /* @__PURE__ */ w.jsx(
      Yd,
      {
        size: "sm",
        onClick: r,
        className: ie("chakra-popover__close-btn", t.className),
        __css: o.closeButton,
        ref: n,
        ...t
      }
    );
  }
);
Wg.displayName = "PopoverCloseButton";
function LW(e) {
  if (e)
    return {
      enter: {
        ...e.enter,
        visibility: "visible"
      },
      exit: {
        ...e.exit,
        transitionEnd: {
          visibility: "hidden"
        }
      }
    };
}
var jW = {
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 1, 1]
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: [0, 0, 0.2, 1]
    }
  }
}, zW = X(Mr.section), pE = oe(function(t, n) {
  const { variants: r = jW, ...o } = t, { isOpen: i } = ri();
  return /* @__PURE__ */ w.jsx(
    zW,
    {
      ref: n,
      variants: LW(r),
      initial: !1,
      animate: i ? "enter" : "exit",
      ...o
    }
  );
});
pE.displayName = "PopoverTransition";
var Hg = oe(
  function(t, n) {
    const { rootProps: r, motionProps: o, ...i } = t, { getPopoverProps: a, getPopoverPositionerProps: s, onAnimationComplete: l } = ri(), u = _l(), c = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...u.content
    };
    return /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...s(r),
        __css: u.popper,
        className: "chakra-popover__popper",
        children: /* @__PURE__ */ w.jsx(
          pE,
          {
            ...o,
            ...a(i, n),
            onAnimationComplete: wC(
              l,
              i.onAnimationComplete
            ),
            className: ie("chakra-popover__content", t.className),
            __css: c
          }
        )
      }
    );
  }
);
Hg.displayName = "PopoverContent";
var [NW, hE] = nt({
  name: "TagStylesContext",
  errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
}), mE = oe((e, t) => {
  const n = mt("Tag", e), r = on(e), o = {
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    ...n.container
  };
  return /* @__PURE__ */ w.jsx(NW, { value: n, children: /* @__PURE__ */ w.jsx(X.span, { ref: t, ...r, __css: o }) });
});
mE.displayName = "Tag";
var VW = oe((e, t) => {
  const n = hE();
  return /* @__PURE__ */ w.jsx(X.span, { ref: t, noOfLines: 1, ...e, __css: n.label });
});
VW.displayName = "TagLabel";
var BW = oe((e, t) => /* @__PURE__ */ w.jsx(Pn, { ref: t, verticalAlign: "top", marginEnd: "0.5rem", ...e }));
BW.displayName = "TagLeftIcon";
var WW = oe((e, t) => /* @__PURE__ */ w.jsx(Pn, { ref: t, verticalAlign: "top", marginStart: "0.5rem", ...e }));
WW.displayName = "TagRightIcon";
var vE = (e) => /* @__PURE__ */ w.jsx(Pn, { verticalAlign: "inherit", viewBox: "0 0 512 512", ...e, children: /* @__PURE__ */ w.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }
) });
vE.displayName = "TagCloseIcon";
var HW = oe(
  (e, t) => {
    const { isDisabled: n, children: r, ...o } = e, a = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...hE().closeButton
    };
    return /* @__PURE__ */ w.jsx(
      X.button,
      {
        ref: t,
        "aria-label": "close",
        ...o,
        type: "button",
        disabled: n,
        __css: a,
        children: r || /* @__PURE__ */ w.jsx(vE, {})
      }
    );
  }
);
HW.displayName = "TagCloseButton";
var UW = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, GW = Object.defineProperty, KW = Object.defineProperties, YW = Object.getOwnPropertyDescriptors, Yc = Object.getOwnPropertySymbols, gE = Object.prototype.hasOwnProperty, yE = Object.prototype.propertyIsEnumerable, pS = (e, t, n) => t in e ? GW(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, hS = (e, t) => {
  for (var n in t || (t = {}))
    gE.call(t, n) && pS(e, n, t[n]);
  if (Yc)
    for (var n of Yc(t))
      yE.call(t, n) && pS(e, n, t[n]);
  return e;
}, qW = (e, t) => KW(e, YW(t)), XW = (e, t) => {
  var n = {};
  for (var r in e)
    gE.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Yc)
    for (var r of Yc(e))
      t.indexOf(r) < 0 && yE.call(e, r) && (n[r] = e[r]);
  return n;
}, Ht = (e, t, n) => {
  const r = v.forwardRef(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: l = 24, stroke: u = 2, children: c } = a, d = XW(a, ["color", "size", "stroke", "children"]);
      return v.createElement(
        "svg",
        hS(qW(hS({
          ref: i
        }, UW), {
          width: l,
          height: l,
          stroke: s,
          strokeWidth: u,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([f, p]) => v.createElement(f, p)), ...c || []]
      );
    }
  );
  return r.propTypes = {
    color: wo.string,
    size: wo.oneOfType([wo.string, wo.number]),
    stroke: wo.oneOfType([wo.string, wo.number])
  }, r.displayName = `${t}`, r;
}, mS = Ht("chevron-down", "IconChevronDown", [
  ["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]
]), QW = Ht("chevron-up", "IconChevronUp", [
  ["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]
]), ZW = Ht("file-import", "IconFileImport", [
  ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }],
  [
    "path",
    {
      d: "M5 13v-8a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5.5m-9.5 -2h7m-3 -3l3 3l-3 3",
      key: "svg-1"
    }
  ]
]), bE = Ht("folder", "IconFolder", [
  [
    "path",
    {
      d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ]
]), JW = Ht("history", "IconHistory", [
  ["path", { d: "M12 8l0 4l2 2", key: "svg-0" }],
  ["path", { d: "M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5", key: "svg-1" }]
]), eH = Ht("menu-2", "IconMenu2", [
  ["path", { d: "M4 6l16 0", key: "svg-0" }],
  ["path", { d: "M4 12l16 0", key: "svg-1" }],
  ["path", { d: "M4 18l16 0", key: "svg-2" }]
]), tH = Ht("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), SE = Ht("plus", "IconPlus", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M5 12l14 0", key: "svg-1" }]
]), nH = Ht("settings", "IconSettings", [
  [
    "path",
    {
      d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-1" }]
]), rH = Ht("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]), xE = Ht("tag", "IconTag", [
  ["path", { d: "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",
      key: "svg-1"
    }
  ]
]), wE = Ht("trash", "IconTrash", [
  ["path", { d: "M4 7l16 0", key: "svg-0" }],
  ["path", { d: "M10 11l0 6", key: "svg-1" }],
  ["path", { d: "M14 11l0 6", key: "svg-2" }],
  [
    "path",
    { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }
  ],
  ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]
]), oH = Ht(
  "triangle-inverted-filled",
  "IconTriangleInvertedFilled",
  [
    [
      "path",
      {
        d: "M20.118 3h-16.225a2.914 2.914 0 0 0 -2.503 4.371l8.116 13.549a2.917 2.917 0 0 0 4.987 .005l8.11 -13.539a2.914 2.914 0 0 0 -2.486 -4.386z",
        fill: "currentColor",
        key: "svg-0",
        strokeWidth: "0"
      }
    ]
  ]
), iH = Ht("x", "IconX", [
  ["path", { d: "M18 6l-12 12", key: "svg-0" }],
  ["path", { d: "M6 6l12 12", key: "svg-1" }]
]);
let gu;
const aH = new Uint8Array(16);
function sH() {
  if (!gu && (gu = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !gu))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return gu(aH);
}
const ct = [];
for (let e = 0; e < 256; ++e)
  ct.push((e + 256).toString(16).slice(1));
function lH(e, t = 0) {
  return ct[e[t + 0]] + ct[e[t + 1]] + ct[e[t + 2]] + ct[e[t + 3]] + "-" + ct[e[t + 4]] + ct[e[t + 5]] + "-" + ct[e[t + 6]] + ct[e[t + 7]] + "-" + ct[e[t + 8]] + ct[e[t + 9]] + "-" + ct[e[t + 10]] + ct[e[t + 11]] + ct[e[t + 12]] + ct[e[t + 13]] + ct[e[t + 14]] + ct[e[t + 15]];
}
const uH = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), vS = {
  randomUUID: uH
};
function cH(e, t, n) {
  if (vS.randomUUID && !t && !e)
    return vS.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || sH)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      t[n + o] = r[o];
    return t;
  }
  return lH(r);
}
async function Ug(e) {
  try {
    const t = await fetch(`/workspace/get_db?table=${e}`);
    return t.ok ? await t.json() : void 0;
  } catch (t) {
    console.error("Error fetching workspace:", t);
    return;
  }
}
async function Sa(e, t) {
  const n = e + "/" + Date.now() + ".json";
  fH(n, t);
  try {
    return await (await fetch("/workspace/save_db", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ table: e, json: t })
    })).text();
  } catch (r) {
    console.error("Error saving workspace:", r);
  }
}
async function dH(e, t) {
  try {
    return await (await fetch("/workspace/update_file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        file_path: e,
        json_str: t
      })
    })).text();
  } catch (n) {
    alert("Error saving workflow .json file: " + n), console.error("Error saving workspace:", n);
  }
}
async function CE(e) {
  try {
    return await (await fetch("/workspace/delete_file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        file_path: e
      })
    })).text();
  } catch (t) {
    console.error("Error deleting file:", t);
  }
}
async function fH(e, t) {
  try {
    return await (await fetch("/workspace/save_backup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        file_path: e,
        json_str: t
      })
    })).text();
  } catch (n) {
    console.error("Error saving workspace backup:", n);
  }
}
async function pH(e) {
  try {
    return await (await fetch("/workspace/list_backup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        dir: e
      })
    })).text();
  } catch (t) {
    console.error("Error saving workspace:", t);
  }
}
async function hH() {
  try {
    return await (await fetch("/workspace/get_my_workflows_dir")).text();
  } catch (e) {
    console.error("Error getting workflows dir:", e);
  }
}
async function mH(e) {
  try {
    const n = await (await fetch("/workspace/get_system_dir", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        absolute_dir: e
      })
    })).json();
    return console.log("getSystemDir", n), n;
  } catch (t) {
    console.error("Error getting workflows dir:", t);
  }
}
const gS = "CWM_WORKFLOWS_SORT_TYPE";
var Gr = /* @__PURE__ */ ((e) => (e.RECENTLY_MODIFIED = "newest", e.OLDEST_MODIFIED = "oldest", e.AZ = "name A-Z", e.ZA = "name Z-A", e))(Gr || {});
function vH(e) {
  return e = e.replace(/[\\/:*?"<>|]/g, "_"), e.trim();
}
function kE(e) {
  const t = new Date(e), n = String(t.getDate()).padStart(2, "0"), r = String(t.getMonth() + 1).padStart(2, "0"), o = t.getFullYear(), i = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0");
  return `${r}-${n}-${o} ${i}:${a}`;
}
function PE(e = [], t = Gr.RECENTLY_MODIFIED) {
  const n = [...e];
  if (n.length)
    switch (t) {
      case Gr.AZ:
        n.sort((r, o) => r.name.localeCompare(o.name));
        break;
      case Gr.ZA:
        n.sort((r, o) => o.name.localeCompare(r.name));
        break;
      case Gr.RECENTLY_MODIFIED:
        n.sort((r, o) => o.updateTime - r.updateTime);
        break;
      case Gr.OLDEST_MODIFIED:
        n.sort((r, o) => r.updateTime - o.updateTime);
        break;
    }
  return n;
}
function gH(e) {
  let t = JSON.parse(e);
  typeof structuredClone > "u" ? t = JSON.parse(JSON.stringify(t)) : t = structuredClone(t);
  var n = new LGraph();
  n.configure(t);
  const r = localStorage.getItem("litegrapheditor_clipboard"), o = document.createElement("canvas");
  let i = new LGraphCanvas(o, n);
  i.selectNodes(n._nodes), i.copyToClipboard(n._nodes), pn.canvas.pasteFromClipboard(), r && localStorage.setItem("litegrapheditor_clipboard", r), n = null, i = null;
}
let Se, ke = null, Ju = null;
async function yH() {
  const e = async () => {
    let r = await Ug("workflows");
    r == null && (r = localStorage.getItem("workspace") ?? "{}"), Se = JSON.parse(r ?? "{}");
  }, t = async () => {
    ke = await SH();
  }, n = async () => {
    Ju = await qc.load();
  };
  await Promise.all([e(), t(), n()]);
}
function xm(e, t) {
  if (Se == null)
    return;
  const n = Se[e];
  if (n == null)
    return;
  const r = {
    ...n,
    ...t,
    id: e
  }, o = JSON.stringify(n), i = JSON.stringify(r);
  if (o !== i) {
    if (Se[e] = {
      ...Se[e],
      ...t,
      updateTime: Date.now()
    }, localStorage.setItem("workspace", JSON.stringify(Se)), Sa("workflows", JSON.stringify(Se)), t.name != null) {
      n.filePath && CE(n.filePath), wm(e);
      return;
    }
    t.json != null && wm(e);
  }
}
function wm(e) {
  if (Se == null)
    return;
  const t = Se[e];
  if (t == null) {
    console.error("saveToMyWorkflowsUpdateJson: workflow not found", e);
    return;
  }
  const n = vH(t.name) + ".json";
  Se[e].filePath = n, dH(n, t.json);
}
function ec({
  json: e,
  name: t
}) {
  if (Se == null)
    throw new Error("workspace is not loaded");
  const n = cH();
  return Se[n] = {
    id: n,
    name: t ?? "Untitled Flow",
    json: e,
    updateTime: Date.now(),
    tags: []
  }, localStorage.setItem("workspace", JSON.stringify(Se)), Sa("workflows", JSON.stringify(Se)), wm(n), Se[n];
}
function tc(e) {
  if (Se == null)
    throw new Error("workspace is not loaded");
  const t = Object.values(Se);
  return e ? PE(t, e) : t.sort((n, r) => r.updateTime - n.updateTime);
}
function bH(e) {
  var n;
  if (Se == null)
    throw new Error("workspace is not loaded");
  const t = (n = Se[e]) == null ? void 0 : n.filePath;
  delete Se[e], localStorage.setItem("workspace", JSON.stringify(Se)), Sa("workflows", JSON.stringify(Se)), t != null && CE(t);
}
async function SH() {
  let e = await Ug("tags"), t = JSON.parse(e ?? "{}") ?? {};
  return {
    tags: t,
    // Expose the tags array publicly
    listAll() {
      return Object.values(t).sort((n, r) => r.updateTime - n.updateTime);
    },
    upsert(n) {
      return t[n] == null && (t[n] = {
        name: n,
        workflowIDs: [],
        updateTime: Date.now()
      }), t[n].updateTime = Date.now(), Sa("tags", JSON.stringify(t)), t[n];
    },
    delete(n) {
      delete t[n], Sa("tags", JSON.stringify(t));
    }
  };
}
function xH() {
  return JSON.stringify({
    [qc.TABLE_NAME]: Ju == null ? void 0 : Ju.records,
    tags: ke == null ? void 0 : ke.tags,
    workflows: Se
  });
}
const Mo = class Mo {
  constructor() {
    Sf(this, "records");
    this.records = {};
  }
  upsert(t) {
    this.records = {
      ...this.records,
      ...t
    }, Sa(Mo.TABLE_NAME, JSON.stringify(this.records)), localStorage.setItem("comfyspace", xH());
  }
  static async load() {
    const t = new Mo();
    let n = await Ug(Mo.TABLE_NAME), r = n != null ? JSON.parse(n) : null;
    if (r == null) {
      const o = localStorage.getItem("comfyspace") ?? "{}", i = JSON.parse(o);
      r = i[Mo.TABLE_NAME], console.log("userSettings", i.userSettings);
    }
    return r != null && (t.records = r), t;
  }
};
Sf(Mo, "TABLE_NAME", "userSettings");
let qc = Mo;
const Gg = v.createContext({
  curFlowID: null
}), EE = v.createContext({});
function wH({ onclose: e }) {
  const [t, n] = v.useState([]), r = async () => {
    const o = await pH("workflows");
    if (o == null)
      return;
    const i = JSON.parse(o);
    n(i);
  };
  return v.useEffect(() => {
    r();
  }, []), /* @__PURE__ */ w.jsxs(tf, { onClose: e, size: "xl", isOpen: !0, children: [
    /* @__PURE__ */ w.jsx(af, {}),
    /* @__PURE__ */ w.jsxs(rf, { children: [
      /* @__PURE__ */ w.jsx(of, { children: "Backups" }),
      /* @__PURE__ */ w.jsx(lf, {}),
      /* @__PURE__ */ w.jsx(sf, { children: /* @__PURE__ */ w.jsx(jP, { allowToggle: !0, children: t.map((o) => {
        const i = parseInt(o.fileName.split(".")[0]);
        return /* @__PURE__ */ w.jsxs($P, { children: [
          /* @__PURE__ */ w.jsx("h2", { children: /* @__PURE__ */ w.jsxs(MP, { children: [
            /* @__PURE__ */ w.jsxs(Oe, { as: "span", flex: "1", textAlign: "left", children: [
              "Saved on ",
              kE(i)
            ] }),
            /* @__PURE__ */ w.jsx(RP, {})
          ] }) }),
          /* @__PURE__ */ w.jsx(LP, { pb: 4, children: Object.values(o.jsonStr).map((a) => /* @__PURE__ */ w.jsx(Oe, { children: a.name })) })
        ] });
      }) }) })
    ] })
  ] });
}
function CH({ onclose: e }) {
  const [t, n] = v.useState((ke == null ? void 0 : ke.listAll()) ?? []);
  return /* @__PURE__ */ w.jsxs(tf, { isOpen: !0, onClose: e, children: [
    /* @__PURE__ */ w.jsx(af, {}),
    /* @__PURE__ */ w.jsxs(rf, { children: [
      /* @__PURE__ */ w.jsx(of, { children: "My Tags" }),
      /* @__PURE__ */ w.jsx(lf, {}),
      /* @__PURE__ */ w.jsx(sf, { children: t.map((r) => /* @__PURE__ */ w.jsxs($t, { children: [
        /* @__PURE__ */ w.jsx(mE, { children: r.name }),
        /* @__PURE__ */ w.jsx(
          rl,
          {
            onClick: () => {
              ke == null || ke.delete(r.name), n((ke == null ? void 0 : ke.listAll()) ?? []);
            },
            "aria-label": "delete-tag",
            colorScheme: "red",
            variant: "ghost",
            icon: /* @__PURE__ */ w.jsx(wE, {})
          }
        )
      ] })) })
    ] })
  ] });
}
function kH({
  onclose: e
}) {
  const [t, n] = v.useState(null), r = async (o) => {
    const i = await hH();
    n(i ?? null);
  };
  return v.useEffect(() => {
    r();
  }), /* @__PURE__ */ w.jsxs(tf, { isOpen: !0, onClose: e, size: "2xl", children: [
    /* @__PURE__ */ w.jsx(af, {}),
    /* @__PURE__ */ w.jsxs(rf, { children: [
      /* @__PURE__ */ w.jsx(of, { children: "Settings" }),
      /* @__PURE__ */ w.jsx(lf, {}),
      /* @__PURE__ */ w.jsxs(sf, { children: [
        /* @__PURE__ */ w.jsx(nr, { fontWeight: 600, mb: 3, children: "Workspace Save Directory (🚧 Under development, not working)" }),
        /* @__PURE__ */ w.jsxs($t, { children: [
          /* @__PURE__ */ w.jsx(nr, { mr: 5, children: t }),
          /* @__PURE__ */ w.jsx(
            jn,
            {
              onClick: () => {
                mH();
              },
              paddingLeft: 10,
              paddingRight: 10,
              size: "sm",
              leftIcon: /* @__PURE__ */ w.jsx(bE, {}),
              colorScheme: "teal",
              children: "Choose Folder"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const yu = 16;
function PH({}) {
  const { isOpen: e, onOpen: t, onClose: n } = j9(), [r, o] = v.useState(!1), [i, a] = v.useState(!1), { colorMode: s, toggleColorMode: l } = Ea();
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxs(El, { isLazy: !0, children: [
      /* @__PURE__ */ w.jsx(
        Lg,
        {
          as: rl,
          "aria-label": "Options",
          icon: /* @__PURE__ */ w.jsx(eH, {}),
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ w.jsxs(ef, { children: [
        /* @__PURE__ */ w.jsx(
          Ni,
          {
            onClick: () => a(!0),
            icon: /* @__PURE__ */ w.jsx(nH, { size: 16 }),
            fontSize: 16,
            children: "Settings"
          }
        ),
        /* @__PURE__ */ w.jsx(
          Ni,
          {
            onClick: () => o(!0),
            icon: /* @__PURE__ */ w.jsx(xE, { size: yu }),
            fontSize: 16,
            children: "Manage Tags"
          }
        ),
        /* @__PURE__ */ w.jsxs(
          Ni,
          {
            onClick: l,
            icon: s === "light" ? /* @__PURE__ */ w.jsx(tH, { size: yu }) : /* @__PURE__ */ w.jsx(rH, { size: yu }),
            fontSize: 16,
            children: [
              s === "light" ? "Dark" : "Light",
              " Mode"
            ]
          }
        ),
        /* @__PURE__ */ w.jsx(
          Ni,
          {
            onClick: t,
            icon: /* @__PURE__ */ w.jsx(JW, { size: yu }),
            fontSize: 16,
            children: "Backups (Experimental)"
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ w.jsx(CH, { onclose: () => o(!1) }),
    i && /* @__PURE__ */ w.jsx(kH, { onclose: () => a(!1) }),
    e && /* @__PURE__ */ w.jsx(wH, { onclose: n })
  ] });
}
function yS(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yS(Object(n), !0).forEach(function(r) {
      ji(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yS(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function EH(e) {
  if (Array.isArray(e))
    return e;
}
function TH(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, a, s = [], l = !0, u = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        l = !1;
      } else
        for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0)
          ;
    } catch (c) {
      u = !0, o = c;
    } finally {
      try {
        if (!l && n.return != null && (a = n.return(), Object(a) !== a))
          return;
      } finally {
        if (u)
          throw o;
      }
    }
    return s;
  }
}
function Cm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function TE(e, t) {
  if (e) {
    if (typeof e == "string")
      return Cm(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Cm(e, t);
  }
}
function _H() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xr(e, t) {
  return EH(e) || TH(e, t) || TE(e, t) || _H();
}
function Ir(e, t) {
  if (e == null)
    return {};
  var n = WP(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var OH = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function MH(e) {
  var t = e.defaultInputValue, n = t === void 0 ? "" : t, r = e.defaultMenuIsOpen, o = r === void 0 ? !1 : r, i = e.defaultValue, a = i === void 0 ? null : i, s = e.inputValue, l = e.menuIsOpen, u = e.onChange, c = e.onInputChange, d = e.onMenuClose, f = e.onMenuOpen, p = e.value, g = Ir(e, OH), y = v.useState(s !== void 0 ? s : n), S = xr(y, 2), h = S[0], m = S[1], b = v.useState(l !== void 0 ? l : o), x = xr(b, 2), k = x[0], P = x[1], E = v.useState(p !== void 0 ? p : a), T = xr(E, 2), M = T[0], I = T[1], D = v.useCallback(function(A, j) {
    typeof u == "function" && u(A, j), I(A);
  }, [u]), G = v.useCallback(function(A, j) {
    var U;
    typeof c == "function" && (U = c(A, j)), m(U !== void 0 ? U : A);
  }, [c]), H = v.useCallback(function() {
    typeof f == "function" && f(), P(!0);
  }, [f]), L = v.useCallback(function() {
    typeof d == "function" && d(), P(!1);
  }, [d]), W = s !== void 0 ? s : h, K = l !== void 0 ? l : k, $ = p !== void 0 ? p : M;
  return Z(Z({}, g), {}, {
    inputValue: W,
    menuIsOpen: K,
    onChange: D,
    onInputChange: G,
    onMenuClose: L,
    onMenuOpen: H,
    value: $
  });
}
function IH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bS(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r2(r.key), r);
  }
}
function RH(e, t, n) {
  return t && bS(e.prototype, t), n && bS(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function $H(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Wc(e, t);
}
function Xc(e) {
  return Xc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Xc(e);
}
function AH() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function DH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function FH(e, t) {
  if (t && (Yo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return DH(e);
}
function LH(e) {
  var t = AH();
  return function() {
    var r = Xc(e), o;
    if (t) {
      var i = Xc(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return FH(this, o);
  };
}
function jH(e) {
  if (Array.isArray(e))
    return Cm(e);
}
function zH(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function NH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _E(e) {
  return jH(e) || zH(e) || TE(e) || NH();
}
function VH(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const BH = Math.min, WH = Math.max, Qc = Math.round, bu = Math.floor, Zc = (e) => ({
  x: e,
  y: e
});
function HH(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function OE(e) {
  return IE(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Fn(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ME(e) {
  var t;
  return (t = (IE(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function IE(e) {
  return e instanceof Node || e instanceof Fn(e).Node;
}
function km(e) {
  return e instanceof Element || e instanceof Fn(e).Element;
}
function Kg(e) {
  return e instanceof HTMLElement || e instanceof Fn(e).HTMLElement;
}
function SS(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Fn(e).ShadowRoot;
}
function RE(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Yg(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function UH() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function GH(e) {
  return ["html", "body", "#document"].includes(OE(e));
}
function Yg(e) {
  return Fn(e).getComputedStyle(e);
}
function KH(e) {
  if (OE(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    SS(e) && e.host || // Fallback.
    ME(e)
  );
  return SS(t) ? t.host : t;
}
function $E(e) {
  const t = KH(e);
  return GH(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Kg(t) && RE(t) ? t : $E(t);
}
function Jc(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = $E(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Fn(o);
  return i ? t.concat(a, a.visualViewport || [], RE(o) ? o : [], a.frameElement && n ? Jc(a.frameElement) : []) : t.concat(o, Jc(o, [], n));
}
function YH(e) {
  const t = Yg(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Kg(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Qc(n) !== i || Qc(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function qg(e) {
  return km(e) ? e : e.contextElement;
}
function jp(e) {
  const t = qg(e);
  if (!Kg(t))
    return Zc(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = YH(t);
  let a = (i ? Qc(n.width) : n.width) / r, s = (i ? Qc(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const qH = /* @__PURE__ */ Zc(0);
function XH(e) {
  const t = Fn(e);
  return !UH() || !t.visualViewport ? qH : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function QH(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Fn(e) ? !1 : t;
}
function xS(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = qg(e);
  let a = Zc(1);
  t && (r ? km(r) && (a = jp(r)) : a = jp(e));
  const s = QH(i, n, r) ? XH(i) : Zc(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = Fn(i), p = r && km(r) ? Fn(r) : r;
    let g = f.frameElement;
    for (; g && r && p !== f; ) {
      const y = jp(g), S = g.getBoundingClientRect(), h = Yg(g), m = S.left + (g.clientLeft + parseFloat(h.paddingLeft)) * y.x, b = S.top + (g.clientTop + parseFloat(h.paddingTop)) * y.y;
      l *= y.x, u *= y.y, c *= y.x, d *= y.y, l += m, u += b, g = Fn(g).frameElement;
    }
  }
  return HH({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function ZH(e, t) {
  let n = null, r;
  const o = ME(e);
  function i() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function a(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), i();
    const {
      left: u,
      top: c,
      width: d,
      height: f
    } = e.getBoundingClientRect();
    if (s || t(), !d || !f)
      return;
    const p = bu(c), g = bu(o.clientWidth - (u + d)), y = bu(o.clientHeight - (c + f)), S = bu(u), m = {
      rootMargin: -p + "px " + -g + "px " + -y + "px " + -S + "px",
      threshold: WH(0, BH(1, l)) || 1
    };
    let b = !0;
    function x(k) {
      const P = k[0].intersectionRatio;
      if (P !== l) {
        if (!b)
          return a();
        P ? a(!1, P) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 100);
      }
      b = !1;
    }
    try {
      n = new IntersectionObserver(x, {
        ...m,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(x, m);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function JH(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = qg(e), c = o || i ? [...u ? Jc(u) : [], ...Jc(t)] : [];
  c.forEach((h) => {
    o && h.addEventListener("scroll", n, {
      passive: !0
    }), i && h.addEventListener("resize", n);
  });
  const d = u && s ? ZH(u, n) : null;
  let f = -1, p = null;
  a && (p = new ResizeObserver((h) => {
    let [m] = h;
    m && m.target === u && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), u && !l && p.observe(u), p.observe(t));
  let g, y = l ? xS(e) : null;
  l && S();
  function S() {
    const h = xS(e);
    y && (h.x !== y.x || h.y !== y.y || h.width !== y.width || h.height !== y.height) && n(), y = h, g = requestAnimationFrame(S);
  }
  return n(), () => {
    c.forEach((h) => {
      o && h.removeEventListener("scroll", n), i && h.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, l && cancelAnimationFrame(g);
  };
}
var Pm = v.useLayoutEffect, eU = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], ed = function() {
};
function tU(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function nU(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  var i = [].concat(r);
  if (t && e)
    for (var a in t)
      t.hasOwnProperty(a) && t[a] && i.push("".concat(tU(e, a)));
  return i.filter(function(s) {
    return s;
  }).map(function(s) {
    return String(s).trim();
  }).join(" ");
}
var wS = function(t) {
  return dU(t) ? t.filter(Boolean) : Yo(t) === "object" && t !== null ? [t] : [];
}, AE = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = Ir(t, eU);
  return Z({}, n);
}, Ue = function(t, n, r) {
  var o = t.cx, i = t.getStyles, a = t.getClassNames, s = t.className;
  return {
    css: i(n, t),
    className: o(r ?? {}, a(n, t), s)
  };
};
function uf(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function rU(e) {
  return uf(e) ? window.innerHeight : e.clientHeight;
}
function DE(e) {
  return uf(e) ? window.pageYOffset : e.scrollTop;
}
function td(e, t) {
  if (uf(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function oU(e) {
  var t = getComputedStyle(e), n = t.position === "absolute", r = /(auto|scroll)/;
  if (t.position === "fixed")
    return document.documentElement;
  for (var o = e; o = o.parentElement; )
    if (t = getComputedStyle(o), !(n && t.position === "static") && r.test(t.overflow + t.overflowY + t.overflowX))
      return o;
  return document.documentElement;
}
function iU(e, t, n, r) {
  return n * ((e = e / r - 1) * e * e + 1) + t;
}
function Su(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ed, o = DE(e), i = t - o, a = 10, s = 0;
  function l() {
    s += a;
    var u = iU(s, o, i, n);
    td(e, u), s < n ? window.requestAnimationFrame(l) : r(e);
  }
  l();
}
function CS(e, t) {
  var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), o = t.offsetHeight / 3;
  r.bottom + o > n.bottom ? td(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + o, e.scrollHeight)) : r.top - o < n.top && td(e, Math.max(t.offsetTop - o, 0));
}
function aU(e) {
  var t = e.getBoundingClientRect();
  return {
    bottom: t.bottom,
    height: t.height,
    left: t.left,
    right: t.right,
    top: t.top,
    width: t.width
  };
}
function kS() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function sU() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var FE = !1, lU = {
  get passive() {
    return FE = !0;
  }
}, xu = typeof window < "u" ? window : {};
xu.addEventListener && xu.removeEventListener && (xu.addEventListener("p", ed, lU), xu.removeEventListener("p", ed, !1));
var uU = FE;
function cU(e) {
  return e != null;
}
function dU(e) {
  return Array.isArray(e);
}
function wu(e, t, n) {
  return e ? t : n;
}
var fU = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  var i = Object.entries(t).filter(function(a) {
    var s = xr(a, 1), l = s[0];
    return !r.includes(l);
  });
  return i.reduce(function(a, s) {
    var l = xr(s, 2), u = l[0], c = l[1];
    return a[u] = c, a;
  }, {});
}, pU = ["children", "innerProps"], hU = ["children", "innerProps"];
function mU(e) {
  var t = e.maxHeight, n = e.menuEl, r = e.minHeight, o = e.placement, i = e.shouldScroll, a = e.isFixedPosition, s = e.controlHeight, l = oU(n), u = {
    placement: "bottom",
    maxHeight: t
  };
  if (!n || !n.offsetParent)
    return u;
  var c = l.getBoundingClientRect(), d = c.height, f = n.getBoundingClientRect(), p = f.bottom, g = f.height, y = f.top, S = n.offsetParent.getBoundingClientRect(), h = S.top, m = a ? window.innerHeight : rU(l), b = DE(l), x = parseInt(getComputedStyle(n).marginBottom, 10), k = parseInt(getComputedStyle(n).marginTop, 10), P = h - k, E = m - y, T = P + b, M = d - b - y, I = p - m + b + x, D = b + y - k, G = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (E >= g)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (M >= g && !a)
        return i && Su(l, I, G), {
          placement: "bottom",
          maxHeight: t
        };
      if (!a && M >= r || a && E >= r) {
        i && Su(l, I, G);
        var H = a ? E - x : M - x;
        return {
          placement: "bottom",
          maxHeight: H
        };
      }
      if (o === "auto" || a) {
        var L = t, W = a ? P : T;
        return W >= r && (L = Math.min(W - x - s, t)), {
          placement: "top",
          maxHeight: L
        };
      }
      if (o === "bottom")
        return i && td(l, I), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (P >= g)
        return {
          placement: "top",
          maxHeight: t
        };
      if (T >= g && !a)
        return i && Su(l, D, G), {
          placement: "top",
          maxHeight: t
        };
      if (!a && T >= r || a && P >= r) {
        var K = t;
        return (!a && T >= r || a && P >= r) && (K = a ? P - k : T - k), i && Su(l, D, G), {
          placement: "top",
          maxHeight: K
        };
      }
      return {
        placement: "bottom",
        maxHeight: t
      };
    default:
      throw new Error('Invalid placement provided "'.concat(o, '".'));
  }
  return u;
}
function vU(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var LE = function(t) {
  return t === "auto" ? "bottom" : t;
}, gU = function(t, n) {
  var r, o = t.placement, i = t.theme, a = i.borderRadius, s = i.spacing, l = i.colors;
  return Z((r = {
    label: "menu"
  }, ji(r, vU(o), "100%"), ji(r, "position", "absolute"), ji(r, "width", "100%"), ji(r, "zIndex", 1), r), n ? {} : {
    backgroundColor: l.neutral0,
    borderRadius: a,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: s.menuGutter,
    marginTop: s.menuGutter
  });
}, jE = /* @__PURE__ */ v.createContext(null), yU = function(t) {
  var n = t.children, r = t.minMenuHeight, o = t.maxMenuHeight, i = t.menuPlacement, a = t.menuPosition, s = t.menuShouldScrollIntoView, l = t.theme, u = v.useContext(jE) || {}, c = u.setPortalPlacement, d = v.useRef(null), f = v.useState(o), p = xr(f, 2), g = p[0], y = p[1], S = v.useState(null), h = xr(S, 2), m = h[0], b = h[1], x = l.spacing.controlHeight;
  return Pm(function() {
    var k = d.current;
    if (k) {
      var P = a === "fixed", E = s && !P, T = mU({
        maxHeight: o,
        menuEl: k,
        minHeight: r,
        placement: i,
        shouldScroll: E,
        isFixedPosition: P,
        controlHeight: x
      });
      y(T.maxHeight), b(T.placement), c == null || c(T.placement);
    }
  }, [o, i, a, s, r, c, x]), n({
    ref: d,
    placerProps: Z(Z({}, t), {}, {
      placement: m || LE(i),
      maxHeight: g
    })
  });
}, bU = function(t) {
  var n = t.children, r = t.innerRef, o = t.innerProps;
  return ee("div", q({}, Ue(t, "menu", {
    menu: !0
  }), {
    ref: r
  }, o), n);
}, SU = bU, xU = function(t, n) {
  var r = t.maxHeight, o = t.theme.spacing.baseUnit;
  return Z({
    maxHeight: r,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, n ? {} : {
    paddingBottom: o,
    paddingTop: o
  });
}, wU = function(t) {
  var n = t.children, r = t.innerProps, o = t.innerRef, i = t.isMulti;
  return ee("div", q({}, Ue(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": i
  }), {
    ref: o
  }, r), n);
}, zE = function(t, n) {
  var r = t.theme, o = r.spacing.baseUnit, i = r.colors;
  return Z({
    textAlign: "center"
  }, n ? {} : {
    color: i.neutral40,
    padding: "".concat(o * 2, "px ").concat(o * 3, "px")
  });
}, CU = zE, kU = zE, PU = function(t) {
  var n = t.children, r = n === void 0 ? "No options" : n, o = t.innerProps, i = Ir(t, pU);
  return ee("div", q({}, Ue(Z(Z({}, i), {}, {
    children: r,
    innerProps: o
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), o), r);
}, EU = function(t) {
  var n = t.children, r = n === void 0 ? "Loading..." : n, o = t.innerProps, i = Ir(t, hU);
  return ee("div", q({}, Ue(Z(Z({}, i), {}, {
    children: r,
    innerProps: o
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), o), r);
}, TU = function(t) {
  var n = t.rect, r = t.offset, o = t.position;
  return {
    left: n.left,
    position: o,
    top: r,
    width: n.width,
    zIndex: 1
  };
}, _U = function(t) {
  var n = t.appendTo, r = t.children, o = t.controlElement, i = t.innerProps, a = t.menuPlacement, s = t.menuPosition, l = v.useRef(null), u = v.useRef(null), c = v.useState(LE(a)), d = xr(c, 2), f = d[0], p = d[1], g = v.useMemo(function() {
    return {
      setPortalPlacement: p
    };
  }, []), y = v.useState(null), S = xr(y, 2), h = S[0], m = S[1], b = v.useCallback(function() {
    if (o) {
      var E = aU(o), T = s === "fixed" ? 0 : window.pageYOffset, M = E[f] + T;
      (M !== (h == null ? void 0 : h.offset) || E.left !== (h == null ? void 0 : h.rect.left) || E.width !== (h == null ? void 0 : h.rect.width)) && m({
        offset: M,
        rect: E
      });
    }
  }, [o, s, f, h == null ? void 0 : h.offset, h == null ? void 0 : h.rect.left, h == null ? void 0 : h.rect.width]);
  Pm(function() {
    b();
  }, [b]);
  var x = v.useCallback(function() {
    typeof u.current == "function" && (u.current(), u.current = null), o && l.current && (u.current = JH(o, l.current, b, {
      elementResize: "ResizeObserver" in window
    }));
  }, [o, b]);
  Pm(function() {
    x();
  }, [x]);
  var k = v.useCallback(function(E) {
    l.current = E, x();
  }, [x]);
  if (!n && s !== "fixed" || !h)
    return null;
  var P = ee("div", q({
    ref: k
  }, Ue(Z(Z({}, t), {}, {
    offset: h.offset,
    position: s,
    rect: h.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), i), r);
  return ee(jE.Provider, {
    value: g
  }, n ? /* @__PURE__ */ Sd.createPortal(P, n) : P);
}, OU = function(t) {
  var n = t.isDisabled, r = t.isRtl;
  return {
    label: "container",
    direction: r ? "rtl" : void 0,
    pointerEvents: n ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, MU = function(t) {
  var n = t.children, r = t.innerProps, o = t.isDisabled, i = t.isRtl;
  return ee("div", q({}, Ue(t, "container", {
    "--is-disabled": o,
    "--is-rtl": i
  }), r), n);
}, IU = function(t, n) {
  var r = t.theme.spacing, o = t.isMulti, i = t.hasValue, a = t.selectProps.controlShouldRenderValue;
  return Z({
    alignItems: "center",
    display: o && i && a ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, n ? {} : {
    padding: "".concat(r.baseUnit / 2, "px ").concat(r.baseUnit * 2, "px")
  });
}, RU = function(t) {
  var n = t.children, r = t.innerProps, o = t.isMulti, i = t.hasValue;
  return ee("div", q({}, Ue(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": o,
    "value-container--has-value": i
  }), r), n);
}, $U = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, AU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "indicatorsContainer", {
    indicators: !0
  }), r), n);
}, PS, DU = ["size"], FU = ["innerProps", "isRtl", "size"], LU = {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
}, NE = function(t) {
  var n = t.size, r = Ir(t, DU);
  return ee("svg", q({
    height: n,
    width: n,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: LU
  }, r));
}, Xg = function(t) {
  return ee(NE, q({
    size: 20
  }, t), ee("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, VE = function(t) {
  return ee(NE, q({
    size: 20
  }, t), ee("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, BE = function(t, n) {
  var r = t.isFocused, o = t.theme, i = o.spacing.baseUnit, a = o.colors;
  return Z({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, n ? {} : {
    color: r ? a.neutral60 : a.neutral20,
    padding: i * 2,
    ":hover": {
      color: r ? a.neutral80 : a.neutral40
    }
  });
}, jU = BE, zU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), r), n || ee(VE, null));
}, NU = BE, VU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), r), n || ee(Xg, null));
}, BU = function(t, n) {
  var r = t.isDisabled, o = t.theme, i = o.spacing.baseUnit, a = o.colors;
  return Z({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, n ? {} : {
    backgroundColor: r ? a.neutral10 : a.neutral20,
    marginBottom: i * 2,
    marginTop: i * 2
  });
}, WU = function(t) {
  var n = t.innerProps;
  return ee("span", q({}, n, Ue(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, HU = vC(PS || (PS = VH([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), UU = function(t, n) {
  var r = t.isFocused, o = t.size, i = t.theme, a = i.colors, s = i.spacing.baseUnit;
  return Z({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: o,
    lineHeight: 1,
    marginRight: o,
    textAlign: "center",
    verticalAlign: "middle"
  }, n ? {} : {
    color: r ? a.neutral60 : a.neutral20,
    padding: s * 2
  });
}, zp = function(t) {
  var n = t.delay, r = t.offset;
  return ee("span", {
    css: /* @__PURE__ */ Fv({
      animation: "".concat(HU, " 1s ease-in-out ").concat(n, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: r ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, "", "")
  });
}, GU = function(t) {
  var n = t.innerProps, r = t.isRtl, o = t.size, i = o === void 0 ? 4 : o, a = Ir(t, FU);
  return ee("div", q({}, Ue(Z(Z({}, a), {}, {
    innerProps: n,
    isRtl: r,
    size: i
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), n), ee(zp, {
    delay: 0,
    offset: r
  }), ee(zp, {
    delay: 160,
    offset: !0
  }), ee(zp, {
    delay: 320,
    offset: !r
  }));
}, KU = function(t, n) {
  var r = t.isDisabled, o = t.isFocused, i = t.theme, a = i.colors, s = i.borderRadius, l = i.spacing;
  return Z({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: l.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, n ? {} : {
    backgroundColor: r ? a.neutral5 : a.neutral0,
    borderColor: r ? a.neutral10 : o ? a.primary : a.neutral20,
    borderRadius: s,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: o ? "0 0 0 1px ".concat(a.primary) : void 0,
    "&:hover": {
      borderColor: o ? a.primary : a.neutral30
    }
  });
}, YU = function(t) {
  var n = t.children, r = t.isDisabled, o = t.isFocused, i = t.innerRef, a = t.innerProps, s = t.menuIsOpen;
  return ee("div", q({
    ref: i
  }, Ue(t, "control", {
    control: !0,
    "control--is-disabled": r,
    "control--is-focused": o,
    "control--menu-is-open": s
  }), a, {
    "aria-disabled": r || void 0
  }), n);
}, qU = YU, XU = ["data"], QU = function(t, n) {
  var r = t.theme.spacing;
  return n ? {} : {
    paddingBottom: r.baseUnit * 2,
    paddingTop: r.baseUnit * 2
  };
}, ZU = function(t) {
  var n = t.children, r = t.cx, o = t.getStyles, i = t.getClassNames, a = t.Heading, s = t.headingProps, l = t.innerProps, u = t.label, c = t.theme, d = t.selectProps;
  return ee("div", q({}, Ue(t, "group", {
    group: !0
  }), l), ee(a, q({}, s, {
    selectProps: d,
    theme: c,
    getStyles: o,
    getClassNames: i,
    cx: r
  }), u), ee("div", null, n));
}, JU = function(t, n) {
  var r = t.theme, o = r.colors, i = r.spacing;
  return Z({
    label: "group",
    cursor: "default",
    display: "block"
  }, n ? {} : {
    color: o.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: i.baseUnit * 3,
    paddingRight: i.baseUnit * 3,
    textTransform: "uppercase"
  });
}, eG = function(t) {
  var n = AE(t);
  n.data;
  var r = Ir(n, XU);
  return ee("div", q({}, Ue(t, "groupHeading", {
    "group-heading": !0
  }), r));
}, tG = ZU, nG = ["innerRef", "isDisabled", "isHidden", "inputClassName"], rG = function(t, n) {
  var r = t.isDisabled, o = t.value, i = t.theme, a = i.spacing, s = i.colors;
  return Z(Z({
    visibility: r ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : ""
  }, oG), n ? {} : {
    margin: a.baseUnit / 2,
    paddingBottom: a.baseUnit / 2,
    paddingTop: a.baseUnit / 2,
    color: s.neutral80
  });
}, WE = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, oG = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": Z({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, WE)
}, iG = function(t) {
  return Z({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, WE);
}, aG = function(t) {
  var n = t.cx, r = t.value, o = AE(t), i = o.innerRef, a = o.isDisabled, s = o.isHidden, l = o.inputClassName, u = Ir(o, nG);
  return ee("div", q({}, Ue(t, "input", {
    "input-container": !0
  }), {
    "data-value": r || ""
  }), ee("input", q({
    className: n({
      input: !0
    }, l),
    ref: i,
    style: iG(s),
    disabled: a
  }, u)));
}, sG = aG, lG = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.borderRadius, a = r.colors;
  return Z({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, n ? {} : {
    backgroundColor: a.neutral10,
    borderRadius: i / 2,
    margin: o.baseUnit / 2
  });
}, uG = function(t, n) {
  var r = t.theme, o = r.borderRadius, i = r.colors, a = t.cropWithEllipsis;
  return Z({
    overflow: "hidden",
    textOverflow: a || a === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, n ? {} : {
    borderRadius: o / 2,
    color: i.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, cG = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.borderRadius, a = r.colors, s = t.isFocused;
  return Z({
    alignItems: "center",
    display: "flex"
  }, n ? {} : {
    borderRadius: i / 2,
    backgroundColor: s ? a.dangerLight : void 0,
    paddingLeft: o.baseUnit,
    paddingRight: o.baseUnit,
    ":hover": {
      backgroundColor: a.dangerLight,
      color: a.danger
    }
  });
}, HE = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", r, n);
}, dG = HE, fG = HE;
function pG(e) {
  var t = e.children, n = e.innerProps;
  return ee("div", q({
    role: "button"
  }, n), t || ee(Xg, {
    size: 14
  }));
}
var hG = function(t) {
  var n = t.children, r = t.components, o = t.data, i = t.innerProps, a = t.isDisabled, s = t.removeProps, l = t.selectProps, u = r.Container, c = r.Label, d = r.Remove;
  return ee(u, {
    data: o,
    innerProps: Z(Z({}, Ue(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": a
    })), i),
    selectProps: l
  }, ee(c, {
    data: o,
    innerProps: Z({}, Ue(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: l
  }, n), ee(d, {
    data: o,
    innerProps: Z(Z({}, Ue(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(n || "option")
    }, s),
    selectProps: l
  }));
}, mG = hG, vG = function(t, n) {
  var r = t.isDisabled, o = t.isFocused, i = t.isSelected, a = t.theme, s = a.spacing, l = a.colors;
  return Z({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, n ? {} : {
    backgroundColor: i ? l.primary : o ? l.primary25 : "transparent",
    color: r ? l.neutral20 : i ? l.neutral0 : "inherit",
    padding: "".concat(s.baseUnit * 2, "px ").concat(s.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: r ? void 0 : i ? l.primary : l.primary50
    }
  });
}, gG = function(t) {
  var n = t.children, r = t.isDisabled, o = t.isFocused, i = t.isSelected, a = t.innerRef, s = t.innerProps;
  return ee("div", q({}, Ue(t, "option", {
    option: !0,
    "option--is-disabled": r,
    "option--is-focused": o,
    "option--is-selected": i
  }), {
    ref: a,
    "aria-disabled": r
  }, s), n);
}, yG = gG, bG = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.colors;
  return Z({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, n ? {} : {
    color: i.neutral50,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, SG = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "placeholder", {
    placeholder: !0
  }), r), n);
}, xG = SG, wG = function(t, n) {
  var r = t.isDisabled, o = t.theme, i = o.spacing, a = o.colors;
  return Z({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, n ? {} : {
    color: r ? a.neutral40 : a.neutral80,
    marginLeft: i.baseUnit / 2,
    marginRight: i.baseUnit / 2
  });
}, CG = function(t) {
  var n = t.children, r = t.isDisabled, o = t.innerProps;
  return ee("div", q({}, Ue(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": r
  }), o), n);
}, kG = CG, PG = {
  ClearIndicator: VU,
  Control: qU,
  DropdownIndicator: zU,
  DownChevron: VE,
  CrossIcon: Xg,
  Group: tG,
  GroupHeading: eG,
  IndicatorsContainer: AU,
  IndicatorSeparator: WU,
  Input: sG,
  LoadingIndicator: GU,
  Menu: SU,
  MenuList: wU,
  MenuPortal: _U,
  LoadingMessage: EU,
  NoOptionsMessage: PU,
  MultiValue: mG,
  MultiValueContainer: dG,
  MultiValueLabel: fG,
  MultiValueRemove: pG,
  Option: yG,
  Placeholder: xG,
  SelectContainer: MU,
  SingleValue: kG,
  ValueContainer: RU
}, EG = function(t) {
  return Z(Z({}, PG), t.components);
}, ES = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function TG(e, t) {
  return !!(e === t || ES(e) && ES(t));
}
function _G(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!TG(e[n], t[n]))
      return !1;
  return !0;
}
function OG(e, t) {
  t === void 0 && (t = _G);
  var n = null;
  function r() {
    for (var o = [], i = 0; i < arguments.length; i++)
      o[i] = arguments[i];
    if (n && n.lastThis === this && t(o, n.lastArgs))
      return n.lastResult;
    var a = e.apply(this, o);
    return n = {
      lastResult: a,
      lastArgs: o,
      lastThis: this
    }, a;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
var MG = {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
}, IG = function(t) {
  return ee("span", q({
    css: MG
  }, t));
}, TS = IG, RG = {
  guidance: function(t) {
    var n = t.isSearchable, r = t.isMulti, o = t.isDisabled, i = t.tabSelectsValue, a = t.context;
    switch (a) {
      case "menu":
        return "Use Up and Down to choose options".concat(o ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(i ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return "".concat(t["aria-label"] || "Select", " is focused ").concat(n ? ",type to refine list" : "", ", press Down to open the menu, ").concat(r ? " press left to focus selected values" : "");
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(t) {
    var n = t.action, r = t.label, o = r === void 0 ? "" : r, i = t.labels, a = t.isDisabled;
    switch (n) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(o, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(i.length > 1 ? "s" : "", " ").concat(i.join(","), ", selected.");
      case "select-option":
        return a ? "option ".concat(o, " is disabled. Select another option.") : "option ".concat(o, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(t) {
    var n = t.context, r = t.focused, o = t.options, i = t.label, a = i === void 0 ? "" : i, s = t.selectValue, l = t.isDisabled, u = t.isSelected, c = function(g, y) {
      return g && g.length ? "".concat(g.indexOf(y) + 1, " of ").concat(g.length) : "";
    };
    if (n === "value" && s)
      return "value ".concat(a, " focused, ").concat(c(s, r), ".");
    if (n === "menu") {
      var d = l ? " disabled" : "", f = "".concat(u ? "selected" : "focused").concat(d);
      return "option ".concat(a, " ").concat(f, ", ").concat(c(o, r), ".");
    }
    return "";
  },
  onFilter: function(t) {
    var n = t.inputValue, r = t.resultsMessage;
    return "".concat(r).concat(n ? " for search term " + n : "", ".");
  }
}, $G = function(t) {
  var n = t.ariaSelection, r = t.focusedOption, o = t.focusedValue, i = t.focusableOptions, a = t.isFocused, s = t.selectValue, l = t.selectProps, u = t.id, c = l.ariaLiveMessages, d = l.getOptionLabel, f = l.inputValue, p = l.isMulti, g = l.isOptionDisabled, y = l.isSearchable, S = l.menuIsOpen, h = l.options, m = l.screenReaderStatus, b = l.tabSelectsValue, x = l["aria-label"], k = l["aria-live"], P = v.useMemo(function() {
    return Z(Z({}, RG), c || {});
  }, [c]), E = v.useMemo(function() {
    var L = "";
    if (n && P.onChange) {
      var W = n.option, K = n.options, $ = n.removedValue, A = n.removedValues, j = n.value, U = function(se) {
        return Array.isArray(se) ? null : se;
      }, V = $ || W || U(j), Y = V ? d(V) : "", z = K || A || void 0, te = z ? z.map(d) : [], le = Z({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: V && g(V, s),
        label: Y,
        labels: te
      }, n);
      L = P.onChange(le);
    }
    return L;
  }, [n, P, g, s, d]), T = v.useMemo(function() {
    var L = "", W = r || o, K = !!(r && s && s.includes(r));
    if (W && P.onFocus) {
      var $ = {
        focused: W,
        label: d(W),
        isDisabled: g(W, s),
        isSelected: K,
        options: i,
        context: W === r ? "menu" : "value",
        selectValue: s
      };
      L = P.onFocus($);
    }
    return L;
  }, [r, o, d, g, P, i, s]), M = v.useMemo(function() {
    var L = "";
    if (S && h.length && P.onFilter) {
      var W = m({
        count: i.length
      });
      L = P.onFilter({
        inputValue: f,
        resultsMessage: W
      });
    }
    return L;
  }, [i, f, S, P, h, m]), I = v.useMemo(function() {
    var L = "";
    if (P.guidance) {
      var W = o ? "value" : S ? "menu" : "input";
      L = P.guidance({
        "aria-label": x,
        context: W,
        isDisabled: r && g(r, s),
        isMulti: p,
        isSearchable: y,
        tabSelectsValue: b
      });
    }
    return L;
  }, [x, r, o, p, g, y, S, P, s, b]), D = "".concat(T, " ").concat(M, " ").concat(I), G = ee(v.Fragment, null, ee("span", {
    id: "aria-selection"
  }, E), ee("span", {
    id: "aria-context"
  }, D)), H = (n == null ? void 0 : n.action) === "initial-input-focus";
  return ee(v.Fragment, null, ee(TS, {
    id: u
  }, H && G), ee(TS, {
    "aria-live": k,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, a && !H && G));
}, AG = $G, Em = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}], DG = new RegExp("[" + Em.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), UE = {};
for (var Np = 0; Np < Em.length; Np++)
  for (var Vp = Em[Np], Bp = 0; Bp < Vp.letters.length; Bp++)
    UE[Vp.letters[Bp]] = Vp.base;
var GE = function(t) {
  return t.replace(DG, function(n) {
    return UE[n];
  });
}, FG = OG(GE), _S = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, LG = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, jG = function(t) {
  return function(n, r) {
    if (n.data.__isNew__)
      return !0;
    var o = Z({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: LG,
      trim: !0,
      matchFrom: "any"
    }, t), i = o.ignoreCase, a = o.ignoreAccents, s = o.stringify, l = o.trim, u = o.matchFrom, c = l ? _S(r) : r, d = l ? _S(s(n)) : s(n);
    return i && (c = c.toLowerCase(), d = d.toLowerCase()), a && (c = FG(c), d = GE(d)), u === "start" ? d.substr(0, c.length) === c : d.indexOf(c) > -1;
  };
}, zG = ["innerRef"];
function NG(e) {
  var t = e.innerRef, n = Ir(e, zG), r = fU(n, "onExited", "in", "enter", "exit", "appear");
  return ee("input", q({
    ref: t
  }, r, {
    css: /* @__PURE__ */ Fv({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, "", "")
  }));
}
var VG = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function BG(e) {
  var t = e.isEnabled, n = e.onBottomArrive, r = e.onBottomLeave, o = e.onTopArrive, i = e.onTopLeave, a = v.useRef(!1), s = v.useRef(!1), l = v.useRef(0), u = v.useRef(null), c = v.useCallback(function(S, h) {
    if (u.current !== null) {
      var m = u.current, b = m.scrollTop, x = m.scrollHeight, k = m.clientHeight, P = u.current, E = h > 0, T = x - k - b, M = !1;
      T > h && a.current && (r && r(S), a.current = !1), E && s.current && (i && i(S), s.current = !1), E && h > T ? (n && !a.current && n(S), P.scrollTop = x, M = !0, a.current = !0) : !E && -h > b && (o && !s.current && o(S), P.scrollTop = 0, M = !0, s.current = !0), M && VG(S);
    }
  }, [n, r, o, i]), d = v.useCallback(function(S) {
    c(S, S.deltaY);
  }, [c]), f = v.useCallback(function(S) {
    l.current = S.changedTouches[0].clientY;
  }, []), p = v.useCallback(function(S) {
    var h = l.current - S.changedTouches[0].clientY;
    c(S, h);
  }, [c]), g = v.useCallback(function(S) {
    if (S) {
      var h = uU ? {
        passive: !1
      } : !1;
      S.addEventListener("wheel", d, h), S.addEventListener("touchstart", f, h), S.addEventListener("touchmove", p, h);
    }
  }, [p, f, d]), y = v.useCallback(function(S) {
    S && (S.removeEventListener("wheel", d, !1), S.removeEventListener("touchstart", f, !1), S.removeEventListener("touchmove", p, !1));
  }, [p, f, d]);
  return v.useEffect(function() {
    if (t) {
      var S = u.current;
      return g(S), function() {
        y(S);
      };
    }
  }, [t, g, y]), function(S) {
    u.current = S;
  };
}
var OS = ["boxSizing", "height", "overflow", "paddingRight", "position"], MS = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function IS(e) {
  e.preventDefault();
}
function RS(e) {
  e.stopPropagation();
}
function $S() {
  var e = this.scrollTop, t = this.scrollHeight, n = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1);
}
function AS() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var DS = !!(typeof window < "u" && window.document && window.document.createElement), Ya = 0, hi = {
  capture: !1,
  passive: !1
};
function WG(e) {
  var t = e.isEnabled, n = e.accountForScrollbars, r = n === void 0 ? !0 : n, o = v.useRef({}), i = v.useRef(null), a = v.useCallback(function(l) {
    if (DS) {
      var u = document.body, c = u && u.style;
      if (r && OS.forEach(function(g) {
        var y = c && c[g];
        o.current[g] = y;
      }), r && Ya < 1) {
        var d = parseInt(o.current.paddingRight, 10) || 0, f = document.body ? document.body.clientWidth : 0, p = window.innerWidth - f + d || 0;
        Object.keys(MS).forEach(function(g) {
          var y = MS[g];
          c && (c[g] = y);
        }), c && (c.paddingRight = "".concat(p, "px"));
      }
      u && AS() && (u.addEventListener("touchmove", IS, hi), l && (l.addEventListener("touchstart", $S, hi), l.addEventListener("touchmove", RS, hi))), Ya += 1;
    }
  }, [r]), s = v.useCallback(function(l) {
    if (DS) {
      var u = document.body, c = u && u.style;
      Ya = Math.max(Ya - 1, 0), r && Ya < 1 && OS.forEach(function(d) {
        var f = o.current[d];
        c && (c[d] = f);
      }), u && AS() && (u.removeEventListener("touchmove", IS, hi), l && (l.removeEventListener("touchstart", $S, hi), l.removeEventListener("touchmove", RS, hi)));
    }
  }, [r]);
  return v.useEffect(function() {
    if (t) {
      var l = i.current;
      return a(l), function() {
        s(l);
      };
    }
  }, [t, a, s]), function(l) {
    i.current = l;
  };
}
var HG = function(t) {
  var n = t.target;
  return n.ownerDocument.activeElement && n.ownerDocument.activeElement.blur();
}, UG = {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
};
function GG(e) {
  var t = e.children, n = e.lockEnabled, r = e.captureEnabled, o = r === void 0 ? !0 : r, i = e.onBottomArrive, a = e.onBottomLeave, s = e.onTopArrive, l = e.onTopLeave, u = BG({
    isEnabled: o,
    onBottomArrive: i,
    onBottomLeave: a,
    onTopArrive: s,
    onTopLeave: l
  }), c = WG({
    isEnabled: n
  }), d = function(p) {
    u(p), c(p);
  };
  return ee(v.Fragment, null, n && ee("div", {
    onClick: HG,
    css: UG
  }), t(d));
}
var KG = {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
}, YG = function(t) {
  var n = t.name, r = t.onFocus;
  return ee("input", {
    required: !0,
    name: n,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: r,
    css: KG,
    value: "",
    onChange: function() {
    }
  });
}, qG = YG, XG = function(t) {
  return t.label;
}, QG = function(t) {
  return t.label;
}, ZG = function(t) {
  return t.value;
}, JG = function(t) {
  return !!t.isDisabled;
}, eK = {
  clearIndicator: NU,
  container: OU,
  control: KU,
  dropdownIndicator: jU,
  group: QU,
  groupHeading: JU,
  indicatorsContainer: $U,
  indicatorSeparator: BU,
  input: rG,
  loadingIndicator: UU,
  loadingMessage: kU,
  menu: gU,
  menuList: xU,
  menuPortal: TU,
  multiValue: lG,
  multiValueLabel: uG,
  multiValueRemove: cG,
  noOptionsMessage: CU,
  option: vG,
  placeholder: bG,
  singleValue: wG,
  valueContainer: IU
}, tK = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
}, nK = 4, KE = 4, rK = 38, oK = KE * 2, iK = {
  baseUnit: KE,
  controlHeight: rK,
  menuGutter: oK
}, Wp = {
  borderRadius: nK,
  colors: tK,
  spacing: iK
}, aK = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: kS(),
  captureMenuScroll: !kS(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: jG(),
  formatGroupLabel: XG,
  getOptionLabel: QG,
  getOptionValue: ZG,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: JG,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !sU(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(t) {
    var n = t.count;
    return "".concat(n, " result").concat(n !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function FS(e, t, n, r) {
  var o = QE(e, t, n), i = ZE(e, t, n), a = XE(e, t), s = nd(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: o,
    isSelected: i,
    label: a,
    value: s,
    index: r
  };
}
function YE(e, t) {
  return e.options.map(function(n, r) {
    if ("options" in n) {
      var o = n.options.map(function(a, s) {
        return FS(e, a, t, s);
      }).filter(function(a) {
        return LS(e, a);
      });
      return o.length > 0 ? {
        type: "group",
        data: n,
        options: o,
        index: r
      } : void 0;
    }
    var i = FS(e, n, t, r);
    return LS(e, i) ? i : void 0;
  }).filter(cU);
}
function qE(e) {
  return e.reduce(function(t, n) {
    return n.type === "group" ? t.push.apply(t, _E(n.options.map(function(r) {
      return r.data;
    }))) : t.push(n.data), t;
  }, []);
}
function sK(e, t) {
  return qE(YE(e, t));
}
function LS(e, t) {
  var n = e.inputValue, r = n === void 0 ? "" : n, o = t.data, i = t.isSelected, a = t.label, s = t.value;
  return (!eT(e) || !i) && JE(e, {
    label: a,
    value: s,
    data: o
  }, r);
}
function lK(e, t) {
  var n = e.focusedValue, r = e.selectValue, o = r.indexOf(n);
  if (o > -1) {
    var i = t.indexOf(n);
    if (i > -1)
      return n;
    if (o < t.length)
      return t[o];
  }
  return null;
}
function uK(e, t) {
  var n = e.focusedOption;
  return n && t.indexOf(n) > -1 ? n : t[0];
}
var XE = function(t, n) {
  return t.getOptionLabel(n);
}, nd = function(t, n) {
  return t.getOptionValue(n);
};
function QE(e, t, n) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, n) : !1;
}
function ZE(e, t, n) {
  if (n.indexOf(t) > -1)
    return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, n);
  var r = nd(e, t);
  return n.some(function(o) {
    return nd(e, o) === r;
  });
}
function JE(e, t, n) {
  return e.filterOption ? e.filterOption(t, n) : !0;
}
var eT = function(t) {
  var n = t.hideSelectedOptions, r = t.isMulti;
  return n === void 0 ? r : n;
}, cK = 1, tT = /* @__PURE__ */ function(e) {
  $H(n, e);
  var t = LH(n);
  function n(r) {
    var o;
    if (IH(this, n), o = t.call(this, r), o.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: !1,
      isFocused: !1,
      selectValue: [],
      clearFocusValueOnUpdate: !1,
      prevWasFocused: !1,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0
    }, o.blockOptionHover = !1, o.isComposing = !1, o.commonProps = void 0, o.initialTouchX = 0, o.initialTouchY = 0, o.instancePrefix = "", o.openAfterFocus = !1, o.scrollToFocusedOptionOnUpdate = !1, o.userIsDragging = void 0, o.controlRef = null, o.getControlRef = function(s) {
      o.controlRef = s;
    }, o.focusedOptionRef = null, o.getFocusedOptionRef = function(s) {
      o.focusedOptionRef = s;
    }, o.menuListRef = null, o.getMenuListRef = function(s) {
      o.menuListRef = s;
    }, o.inputRef = null, o.getInputRef = function(s) {
      o.inputRef = s;
    }, o.focus = o.focusInput, o.blur = o.blurInput, o.onChange = function(s, l) {
      var u = o.props, c = u.onChange, d = u.name;
      l.name = d, o.ariaOnChange(s, l), c(s, l);
    }, o.setValue = function(s, l, u) {
      var c = o.props, d = c.closeMenuOnSelect, f = c.isMulti, p = c.inputValue;
      o.onInputChange("", {
        action: "set-value",
        prevInputValue: p
      }), d && (o.setState({
        inputIsHiddenAfterUpdate: !f
      }), o.onMenuClose()), o.setState({
        clearFocusValueOnUpdate: !0
      }), o.onChange(s, {
        action: l,
        option: u
      });
    }, o.selectOption = function(s) {
      var l = o.props, u = l.blurInputOnSelect, c = l.isMulti, d = l.name, f = o.state.selectValue, p = c && o.isOptionSelected(s, f), g = o.isOptionDisabled(s, f);
      if (p) {
        var y = o.getOptionValue(s);
        o.setValue(f.filter(function(S) {
          return o.getOptionValue(S) !== y;
        }), "deselect-option", s);
      } else if (!g)
        c ? o.setValue([].concat(_E(f), [s]), "select-option", s) : o.setValue(s, "select-option");
      else {
        o.ariaOnChange(s, {
          action: "select-option",
          option: s,
          name: d
        });
        return;
      }
      u && o.blurInput();
    }, o.removeValue = function(s) {
      var l = o.props.isMulti, u = o.state.selectValue, c = o.getOptionValue(s), d = u.filter(function(p) {
        return o.getOptionValue(p) !== c;
      }), f = wu(l, d, d[0] || null);
      o.onChange(f, {
        action: "remove-value",
        removedValue: s
      }), o.focusInput();
    }, o.clearValue = function() {
      var s = o.state.selectValue;
      o.onChange(wu(o.props.isMulti, [], null), {
        action: "clear",
        removedValues: s
      });
    }, o.popValue = function() {
      var s = o.props.isMulti, l = o.state.selectValue, u = l[l.length - 1], c = l.slice(0, l.length - 1), d = wu(s, c, c[0] || null);
      o.onChange(d, {
        action: "pop-value",
        removedValue: u
      });
    }, o.getValue = function() {
      return o.state.selectValue;
    }, o.cx = function() {
      for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
        l[u] = arguments[u];
      return nU.apply(void 0, [o.props.classNamePrefix].concat(l));
    }, o.getOptionLabel = function(s) {
      return XE(o.props, s);
    }, o.getOptionValue = function(s) {
      return nd(o.props, s);
    }, o.getStyles = function(s, l) {
      var u = o.props.unstyled, c = eK[s](l, u);
      c.boxSizing = "border-box";
      var d = o.props.styles[s];
      return d ? d(c, l) : c;
    }, o.getClassNames = function(s, l) {
      var u, c;
      return (u = (c = o.props.classNames)[s]) === null || u === void 0 ? void 0 : u.call(c, l);
    }, o.getElementId = function(s) {
      return "".concat(o.instancePrefix, "-").concat(s);
    }, o.getComponents = function() {
      return EG(o.props);
    }, o.buildCategorizedOptions = function() {
      return YE(o.props, o.state.selectValue);
    }, o.getCategorizedOptions = function() {
      return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
    }, o.buildFocusableOptions = function() {
      return qE(o.buildCategorizedOptions());
    }, o.getFocusableOptions = function() {
      return o.props.menuIsOpen ? o.buildFocusableOptions() : [];
    }, o.ariaOnChange = function(s, l) {
      o.setState({
        ariaSelection: Z({
          value: s
        }, l)
      });
    }, o.onMenuMouseDown = function(s) {
      s.button === 0 && (s.stopPropagation(), s.preventDefault(), o.focusInput());
    }, o.onMenuMouseMove = function(s) {
      o.blockOptionHover = !1;
    }, o.onControlMouseDown = function(s) {
      if (!s.defaultPrevented) {
        var l = o.props.openMenuOnClick;
        o.state.isFocused ? o.props.menuIsOpen ? s.target.tagName !== "INPUT" && s.target.tagName !== "TEXTAREA" && o.onMenuClose() : l && o.openMenu("first") : (l && (o.openAfterFocus = !0), o.focusInput()), s.target.tagName !== "INPUT" && s.target.tagName !== "TEXTAREA" && s.preventDefault();
      }
    }, o.onDropdownIndicatorMouseDown = function(s) {
      if (!(s && s.type === "mousedown" && s.button !== 0) && !o.props.isDisabled) {
        var l = o.props, u = l.isMulti, c = l.menuIsOpen;
        o.focusInput(), c ? (o.setState({
          inputIsHiddenAfterUpdate: !u
        }), o.onMenuClose()) : o.openMenu("first"), s.preventDefault();
      }
    }, o.onClearIndicatorMouseDown = function(s) {
      s && s.type === "mousedown" && s.button !== 0 || (o.clearValue(), s.preventDefault(), o.openAfterFocus = !1, s.type === "touchend" ? o.focusInput() : setTimeout(function() {
        return o.focusInput();
      }));
    }, o.onScroll = function(s) {
      typeof o.props.closeMenuOnScroll == "boolean" ? s.target instanceof HTMLElement && uf(s.target) && o.props.onMenuClose() : typeof o.props.closeMenuOnScroll == "function" && o.props.closeMenuOnScroll(s) && o.props.onMenuClose();
    }, o.onCompositionStart = function() {
      o.isComposing = !0;
    }, o.onCompositionEnd = function() {
      o.isComposing = !1;
    }, o.onTouchStart = function(s) {
      var l = s.touches, u = l && l.item(0);
      u && (o.initialTouchX = u.clientX, o.initialTouchY = u.clientY, o.userIsDragging = !1);
    }, o.onTouchMove = function(s) {
      var l = s.touches, u = l && l.item(0);
      if (u) {
        var c = Math.abs(u.clientX - o.initialTouchX), d = Math.abs(u.clientY - o.initialTouchY), f = 5;
        o.userIsDragging = c > f || d > f;
      }
    }, o.onTouchEnd = function(s) {
      o.userIsDragging || (o.controlRef && !o.controlRef.contains(s.target) && o.menuListRef && !o.menuListRef.contains(s.target) && o.blurInput(), o.initialTouchX = 0, o.initialTouchY = 0);
    }, o.onControlTouchEnd = function(s) {
      o.userIsDragging || o.onControlMouseDown(s);
    }, o.onClearIndicatorTouchEnd = function(s) {
      o.userIsDragging || o.onClearIndicatorMouseDown(s);
    }, o.onDropdownIndicatorTouchEnd = function(s) {
      o.userIsDragging || o.onDropdownIndicatorMouseDown(s);
    }, o.handleInputChange = function(s) {
      var l = o.props.inputValue, u = s.currentTarget.value;
      o.setState({
        inputIsHiddenAfterUpdate: !1
      }), o.onInputChange(u, {
        action: "input-change",
        prevInputValue: l
      }), o.props.menuIsOpen || o.onMenuOpen();
    }, o.onInputFocus = function(s) {
      o.props.onFocus && o.props.onFocus(s), o.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (o.openAfterFocus || o.props.openMenuOnFocus) && o.openMenu("first"), o.openAfterFocus = !1;
    }, o.onInputBlur = function(s) {
      var l = o.props.inputValue;
      if (o.menuListRef && o.menuListRef.contains(document.activeElement)) {
        o.inputRef.focus();
        return;
      }
      o.props.onBlur && o.props.onBlur(s), o.onInputChange("", {
        action: "input-blur",
        prevInputValue: l
      }), o.onMenuClose(), o.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, o.onOptionHover = function(s) {
      o.blockOptionHover || o.state.focusedOption === s || o.setState({
        focusedOption: s
      });
    }, o.shouldHideSelectedOptions = function() {
      return eT(o.props);
    }, o.onValueInputFocus = function(s) {
      s.preventDefault(), s.stopPropagation(), o.focus();
    }, o.onKeyDown = function(s) {
      var l = o.props, u = l.isMulti, c = l.backspaceRemovesValue, d = l.escapeClearsValue, f = l.inputValue, p = l.isClearable, g = l.isDisabled, y = l.menuIsOpen, S = l.onKeyDown, h = l.tabSelectsValue, m = l.openMenuOnFocus, b = o.state, x = b.focusedOption, k = b.focusedValue, P = b.selectValue;
      if (!g && !(typeof S == "function" && (S(s), s.defaultPrevented))) {
        switch (o.blockOptionHover = !0, s.key) {
          case "ArrowLeft":
            if (!u || f)
              return;
            o.focusValue("previous");
            break;
          case "ArrowRight":
            if (!u || f)
              return;
            o.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (f)
              return;
            if (k)
              o.removeValue(k);
            else {
              if (!c)
                return;
              u ? o.popValue() : p && o.clearValue();
            }
            break;
          case "Tab":
            if (o.isComposing || s.shiftKey || !y || !h || !x || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            m && o.isOptionSelected(x, P))
              return;
            o.selectOption(x);
            break;
          case "Enter":
            if (s.keyCode === 229)
              break;
            if (y) {
              if (!x || o.isComposing)
                return;
              o.selectOption(x);
              break;
            }
            return;
          case "Escape":
            y ? (o.setState({
              inputIsHiddenAfterUpdate: !1
            }), o.onInputChange("", {
              action: "menu-close",
              prevInputValue: f
            }), o.onMenuClose()) : p && d && o.clearValue();
            break;
          case " ":
            if (f)
              return;
            if (!y) {
              o.openMenu("first");
              break;
            }
            if (!x)
              return;
            o.selectOption(x);
            break;
          case "ArrowUp":
            y ? o.focusOption("up") : o.openMenu("last");
            break;
          case "ArrowDown":
            y ? o.focusOption("down") : o.openMenu("first");
            break;
          case "PageUp":
            if (!y)
              return;
            o.focusOption("pageup");
            break;
          case "PageDown":
            if (!y)
              return;
            o.focusOption("pagedown");
            break;
          case "Home":
            if (!y)
              return;
            o.focusOption("first");
            break;
          case "End":
            if (!y)
              return;
            o.focusOption("last");
            break;
          default:
            return;
        }
        s.preventDefault();
      }
    }, o.instancePrefix = "react-select-" + (o.props.instanceId || ++cK), o.state.selectValue = wS(r.value), r.menuIsOpen && o.state.selectValue.length) {
      var i = o.buildFocusableOptions(), a = i.indexOf(o.state.selectValue[0]);
      o.state.focusedOption = i[a];
    }
    return o;
  }
  return RH(n, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && CS(this.menuListRef, this.focusedOptionRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function(o) {
      var i = this.props, a = i.isDisabled, s = i.menuIsOpen, l = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (l && !a && o.isDisabled || // ensure focus is on the Input when the menu opens
      l && s && !o.menuIsOpen) && this.focusInput(), l && a && !o.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !l && !a && o.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (CS(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      }), this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function(o, i) {
      this.props.onInputChange(o, i);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function() {
      this.inputRef && this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function() {
      this.inputRef && this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function(o) {
      var i = this, a = this.state, s = a.selectValue, l = a.isFocused, u = this.buildFocusableOptions(), c = o === "first" ? 0 : u.length - 1;
      if (!this.props.isMulti) {
        var d = u.indexOf(s[0]);
        d > -1 && (c = d);
      }
      this.scrollToFocusedOptionOnUpdate = !(l && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: u[c]
      }, function() {
        return i.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(o) {
      var i = this.state, a = i.selectValue, s = i.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var l = a.indexOf(s);
        s || (l = -1);
        var u = a.length - 1, c = -1;
        if (a.length) {
          switch (o) {
            case "previous":
              l === 0 ? c = 0 : l === -1 ? c = u : c = l - 1;
              break;
            case "next":
              l > -1 && l < u && (c = l + 1);
              break;
          }
          this.setState({
            inputIsHidden: c !== -1,
            focusedValue: a[c]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", i = this.props.pageSize, a = this.state.focusedOption, s = this.getFocusableOptions();
      if (s.length) {
        var l = 0, u = s.indexOf(a);
        a || (u = -1), o === "up" ? l = u > 0 ? u - 1 : s.length - 1 : o === "down" ? l = (u + 1) % s.length : o === "pageup" ? (l = u - i, l < 0 && (l = 0)) : o === "pagedown" ? (l = u + i, l > s.length - 1 && (l = s.length - 1)) : o === "last" && (l = s.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: s[l],
          focusedValue: null
        });
      }
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function() {
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(Wp) : Z(Z({}, Wp), this.props.theme) : Wp;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var o = this.clearValue, i = this.cx, a = this.getStyles, s = this.getClassNames, l = this.getValue, u = this.selectOption, c = this.setValue, d = this.props, f = d.isMulti, p = d.isRtl, g = d.options, y = this.hasValue();
      return {
        clearValue: o,
        cx: i,
        getStyles: a,
        getClassNames: s,
        getValue: l,
        hasValue: y,
        isMulti: f,
        isRtl: p,
        options: g,
        selectOption: u,
        selectProps: d,
        setValue: c,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var o = this.state.selectValue;
      return o.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var o = this.props, i = o.isClearable, a = o.isMulti;
      return i === void 0 ? a : i;
    }
  }, {
    key: "isOptionDisabled",
    value: function(o, i) {
      return QE(this.props, o, i);
    }
  }, {
    key: "isOptionSelected",
    value: function(o, i) {
      return ZE(this.props, o, i);
    }
  }, {
    key: "filterOption",
    value: function(o, i) {
      return JE(this.props, o, i);
    }
  }, {
    key: "formatOptionLabel",
    value: function(o, i) {
      if (typeof this.props.formatOptionLabel == "function") {
        var a = this.props.inputValue, s = this.state.selectValue;
        return this.props.formatOptionLabel(o, {
          context: i,
          inputValue: a,
          selectValue: s
        });
      } else
        return this.getOptionLabel(o);
    }
  }, {
    key: "formatGroupLabel",
    value: function(o) {
      return this.props.formatGroupLabel(o);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function() {
        var o = this.props, i = o.isDisabled, a = o.isSearchable, s = o.inputId, l = o.inputValue, u = o.tabIndex, c = o.form, d = o.menuIsOpen, f = o.required, p = this.getComponents(), g = p.Input, y = this.state, S = y.inputIsHidden, h = y.ariaSelection, m = this.commonProps, b = s || this.getElementId("input"), x = Z(Z(Z({
          "aria-autocomplete": "list",
          "aria-expanded": d,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": f,
          role: "combobox"
        }, d && {
          "aria-controls": this.getElementId("listbox"),
          "aria-owns": this.getElementId("listbox")
        }), !a && {
          "aria-readonly": !0
        }), this.hasValue() ? (h == null ? void 0 : h.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return a ? /* @__PURE__ */ v.createElement(g, q({}, m, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: b,
          innerRef: this.getInputRef,
          isDisabled: i,
          isHidden: S,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: u,
          form: c,
          type: "text",
          value: l
        }, x)) : /* @__PURE__ */ v.createElement(NG, q({
          id: b,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: ed,
          onFocus: this.onInputFocus,
          disabled: i,
          tabIndex: u,
          inputMode: "none",
          form: c,
          value: ""
        }, x));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var o = this, i = this.getComponents(), a = i.MultiValue, s = i.MultiValueContainer, l = i.MultiValueLabel, u = i.MultiValueRemove, c = i.SingleValue, d = i.Placeholder, f = this.commonProps, p = this.props, g = p.controlShouldRenderValue, y = p.isDisabled, S = p.isMulti, h = p.inputValue, m = p.placeholder, b = this.state, x = b.selectValue, k = b.focusedValue, P = b.isFocused;
      if (!this.hasValue() || !g)
        return h ? null : /* @__PURE__ */ v.createElement(d, q({}, f, {
          key: "placeholder",
          isDisabled: y,
          isFocused: P,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), m);
      if (S)
        return x.map(function(T, M) {
          var I = T === k, D = "".concat(o.getOptionLabel(T), "-").concat(o.getOptionValue(T));
          return /* @__PURE__ */ v.createElement(a, q({}, f, {
            components: {
              Container: s,
              Label: l,
              Remove: u
            },
            isFocused: I,
            isDisabled: y,
            key: D,
            index: M,
            removeProps: {
              onClick: function() {
                return o.removeValue(T);
              },
              onTouchEnd: function() {
                return o.removeValue(T);
              },
              onMouseDown: function(H) {
                H.preventDefault();
              }
            },
            data: T
          }), o.formatOptionLabel(T, "value"));
        });
      if (h)
        return null;
      var E = x[0];
      return /* @__PURE__ */ v.createElement(c, q({}, f, {
        data: E,
        isDisabled: y
      }), this.formatOptionLabel(E, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var o = this.getComponents(), i = o.ClearIndicator, a = this.commonProps, s = this.props, l = s.isDisabled, u = s.isLoading, c = this.state.isFocused;
      if (!this.isClearable() || !i || l || !this.hasValue() || u)
        return null;
      var d = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ v.createElement(i, q({}, a, {
        innerProps: d,
        isFocused: c
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var o = this.getComponents(), i = o.LoadingIndicator, a = this.commonProps, s = this.props, l = s.isDisabled, u = s.isLoading, c = this.state.isFocused;
      if (!i || !u)
        return null;
      var d = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ v.createElement(i, q({}, a, {
        innerProps: d,
        isDisabled: l,
        isFocused: c
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var o = this.getComponents(), i = o.DropdownIndicator, a = o.IndicatorSeparator;
      if (!i || !a)
        return null;
      var s = this.commonProps, l = this.props.isDisabled, u = this.state.isFocused;
      return /* @__PURE__ */ v.createElement(a, q({}, s, {
        isDisabled: l,
        isFocused: u
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var o = this.getComponents(), i = o.DropdownIndicator;
      if (!i)
        return null;
      var a = this.commonProps, s = this.props.isDisabled, l = this.state.isFocused, u = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ v.createElement(i, q({}, a, {
        innerProps: u,
        isDisabled: s,
        isFocused: l
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var o = this, i = this.getComponents(), a = i.Group, s = i.GroupHeading, l = i.Menu, u = i.MenuList, c = i.MenuPortal, d = i.LoadingMessage, f = i.NoOptionsMessage, p = i.Option, g = this.commonProps, y = this.state.focusedOption, S = this.props, h = S.captureMenuScroll, m = S.inputValue, b = S.isLoading, x = S.loadingMessage, k = S.minMenuHeight, P = S.maxMenuHeight, E = S.menuIsOpen, T = S.menuPlacement, M = S.menuPosition, I = S.menuPortalTarget, D = S.menuShouldBlockScroll, G = S.menuShouldScrollIntoView, H = S.noOptionsMessage, L = S.onMenuScrollToTop, W = S.onMenuScrollToBottom;
      if (!E)
        return null;
      var K = function(z, te) {
        var le = z.type, ae = z.data, se = z.isDisabled, me = z.isSelected, Pe = z.label, Je = z.value, qe = y === ae, an = se ? void 0 : function() {
          return o.onOptionHover(ae);
        }, En = se ? void 0 : function() {
          return o.selectOption(ae);
        }, Rr = "".concat(o.getElementId("option"), "-").concat(te), fe = {
          id: Rr,
          onClick: En,
          onMouseMove: an,
          onMouseOver: an,
          tabIndex: -1
        };
        return /* @__PURE__ */ v.createElement(p, q({}, g, {
          innerProps: fe,
          data: ae,
          isDisabled: se,
          isSelected: me,
          key: Rr,
          label: Pe,
          type: le,
          value: Je,
          isFocused: qe,
          innerRef: qe ? o.getFocusedOptionRef : void 0
        }), o.formatOptionLabel(z.data, "menu"));
      }, $;
      if (this.hasOptions())
        $ = this.getCategorizedOptions().map(function(Y) {
          if (Y.type === "group") {
            var z = Y.data, te = Y.options, le = Y.index, ae = "".concat(o.getElementId("group"), "-").concat(le), se = "".concat(ae, "-heading");
            return /* @__PURE__ */ v.createElement(a, q({}, g, {
              key: ae,
              data: z,
              options: te,
              Heading: s,
              headingProps: {
                id: se,
                data: Y.data
              },
              label: o.formatGroupLabel(Y.data)
            }), Y.options.map(function(me) {
              return K(me, "".concat(le, "-").concat(me.index));
            }));
          } else if (Y.type === "option")
            return K(Y, "".concat(Y.index));
        });
      else if (b) {
        var A = x({
          inputValue: m
        });
        if (A === null)
          return null;
        $ = /* @__PURE__ */ v.createElement(d, g, A);
      } else {
        var j = H({
          inputValue: m
        });
        if (j === null)
          return null;
        $ = /* @__PURE__ */ v.createElement(f, g, j);
      }
      var U = {
        minMenuHeight: k,
        maxMenuHeight: P,
        menuPlacement: T,
        menuPosition: M,
        menuShouldScrollIntoView: G
      }, V = /* @__PURE__ */ v.createElement(yU, q({}, g, U), function(Y) {
        var z = Y.ref, te = Y.placerProps, le = te.placement, ae = te.maxHeight;
        return /* @__PURE__ */ v.createElement(l, q({}, g, U, {
          innerRef: z,
          innerProps: {
            onMouseDown: o.onMenuMouseDown,
            onMouseMove: o.onMenuMouseMove,
            id: o.getElementId("listbox")
          },
          isLoading: b,
          placement: le
        }), /* @__PURE__ */ v.createElement(GG, {
          captureEnabled: h,
          onTopArrive: L,
          onBottomArrive: W,
          lockEnabled: D
        }, function(se) {
          return /* @__PURE__ */ v.createElement(u, q({}, g, {
            innerRef: function(Pe) {
              o.getMenuListRef(Pe), se(Pe);
            },
            isLoading: b,
            maxHeight: ae,
            focusedOption: y
          }), $);
        }));
      });
      return I || M === "fixed" ? /* @__PURE__ */ v.createElement(c, q({}, g, {
        appendTo: I,
        controlElement: this.controlRef,
        menuPlacement: T,
        menuPosition: M
      }), V) : V;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var o = this, i = this.props, a = i.delimiter, s = i.isDisabled, l = i.isMulti, u = i.name, c = i.required, d = this.state.selectValue;
      if (c && !this.hasValue() && !s)
        return /* @__PURE__ */ v.createElement(qG, {
          name: u,
          onFocus: this.onValueInputFocus
        });
      if (!(!u || s))
        if (l)
          if (a) {
            var f = d.map(function(y) {
              return o.getOptionValue(y);
            }).join(a);
            return /* @__PURE__ */ v.createElement("input", {
              name: u,
              type: "hidden",
              value: f
            });
          } else {
            var p = d.length > 0 ? d.map(function(y, S) {
              return /* @__PURE__ */ v.createElement("input", {
                key: "i-".concat(S),
                name: u,
                type: "hidden",
                value: o.getOptionValue(y)
              });
            }) : /* @__PURE__ */ v.createElement("input", {
              name: u,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ v.createElement("div", null, p);
          }
        else {
          var g = d[0] ? this.getOptionValue(d[0]) : "";
          return /* @__PURE__ */ v.createElement("input", {
            name: u,
            type: "hidden",
            value: g
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var o = this.commonProps, i = this.state, a = i.ariaSelection, s = i.focusedOption, l = i.focusedValue, u = i.isFocused, c = i.selectValue, d = this.getFocusableOptions();
      return /* @__PURE__ */ v.createElement(AG, q({}, o, {
        id: this.getElementId("live-region"),
        ariaSelection: a,
        focusedOption: s,
        focusedValue: l,
        isFocused: u,
        selectValue: c,
        focusableOptions: d
      }));
    }
  }, {
    key: "render",
    value: function() {
      var o = this.getComponents(), i = o.Control, a = o.IndicatorsContainer, s = o.SelectContainer, l = o.ValueContainer, u = this.props, c = u.className, d = u.id, f = u.isDisabled, p = u.menuIsOpen, g = this.state.isFocused, y = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ v.createElement(s, q({}, y, {
        className: c,
        innerProps: {
          id: d,
          onKeyDown: this.onKeyDown
        },
        isDisabled: f,
        isFocused: g
      }), this.renderLiveRegion(), /* @__PURE__ */ v.createElement(i, q({}, y, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: f,
        isFocused: g,
        menuIsOpen: p
      }), /* @__PURE__ */ v.createElement(l, q({}, y, {
        isDisabled: f
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ v.createElement(a, q({}, y, {
        isDisabled: f
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o, i) {
      var a = i.prevProps, s = i.clearFocusValueOnUpdate, l = i.inputIsHiddenAfterUpdate, u = i.ariaSelection, c = i.isFocused, d = i.prevWasFocused, f = o.options, p = o.value, g = o.menuIsOpen, y = o.inputValue, S = o.isMulti, h = wS(p), m = {};
      if (a && (p !== a.value || f !== a.options || g !== a.menuIsOpen || y !== a.inputValue)) {
        var b = g ? sK(o, h) : [], x = s ? lK(i, h) : null, k = uK(i, b);
        m = {
          selectValue: h,
          focusedOption: k,
          focusedValue: x,
          clearFocusValueOnUpdate: !1
        };
      }
      var P = l != null && o !== a ? {
        inputIsHidden: l,
        inputIsHiddenAfterUpdate: void 0
      } : {}, E = u, T = c && d;
      return c && !T && (E = {
        value: wu(S, h, h[0] || null),
        options: h,
        action: "initial-input-focus"
      }, T = !d), (u == null ? void 0 : u.action) === "initial-input-focus" && (E = null), Z(Z(Z({}, m), P), {}, {
        prevProps: o,
        ariaSelection: E,
        prevWasFocused: T
      });
    }
  }]), n;
}(v.Component);
tT.defaultProps = aK;
var dK = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = MH(e);
  return /* @__PURE__ */ v.createElement(tT, q({
    ref: t
  }, n));
}), fK = dK, pK = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
function Tm() {
  return Tm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Tm.apply(this, arguments);
}
function hK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var nT = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = hK(t, pK);
  return Tm({}, n);
}, mK = function(t) {
  var n = typeof t == "string";
  return n && ["sm", "md", "lg"].includes(t);
}, vK = function(t) {
  return mK(t) ? t : t === "xs" ? "sm" : t === "xl" ? "lg" : "md";
}, zn = function(t) {
  var n = Jo(), r = vK(n.components.Input.defaultProps.size), o = t ?? r, i = G9(typeof o == "string" ? [o] : o, {
    fallback: "md"
  }) || r;
  return i;
};
function xa() {
  return xa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xa.apply(this, arguments);
}
var gK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.isDisabled, s = t.isRtl, l = t.hasValue, u = t.selectProps.chakraStyles, c = xa({
    position: "relative",
    direction: s ? "rtl" : void 0
  }, a ? {
    cursor: "not-allowed"
  } : {}), d = u != null && u.container ? u.container(c, t) : c;
  return /* @__PURE__ */ re.createElement(Oe, xa({}, i, {
    className: o({
      "--is-disabled": a,
      "--is-rtl": s,
      "--has-value": l
    }, r),
    sx: d
  }), n);
}, yK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isMulti, a = t.hasValue, s = t.innerProps, l = t.selectProps, u = l.chakraStyles, c = l.size, d = l.variant, f = l.focusBorderColor, p = l.errorBorderColor, g = l.controlShouldRenderValue, y = zn(c), S = mt("Input", {
    size: y,
    variant: d,
    focusBorderColor: f,
    errorBorderColor: p
  }), h = {
    display: i && a && g ? "flex" : "grid",
    alignItems: "center",
    flex: 1,
    paddingY: "2px",
    paddingX: S.field.px,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, m = u != null && u.valueContainer ? u.valueContainer(h, t) : h;
  return /* @__PURE__ */ re.createElement(Oe, xa({}, s, {
    className: o({
      "value-container": !0,
      "value-container--is-multi": i,
      "value-container--has-value": a
    }, r),
    sx: m
  }), n);
}, bK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps.chakraStyles, s = {
    display: "flex",
    alignItems: "center",
    alignSelf: "stretch",
    flexShrink: 0
  }, l = a != null && a.indicatorsContainer ? a.indicatorsContainer(s, t) : s;
  return /* @__PURE__ */ re.createElement(Oe, xa({}, i, {
    className: o({
      indicators: !0
    }, r),
    sx: l
  }), n);
}, SK = ["height", "h"];
function kn() {
  return kn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, kn.apply(this, arguments);
}
function xK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var wK = function(t) {
  var n = t.className, r = t.cx, o = t.children, i = t.innerRef, a = t.innerProps, s = t.isDisabled, l = t.isFocused, u = t.menuIsOpen, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, g = c.focusBorderColor, y = c.errorBorderColor, S = c.isInvalid, h = c.isReadOnly, m = zn(f), b = mt("Input", {
    size: m,
    variant: p,
    focusBorderColor: g,
    errorBorderColor: y
  }), x = b.field, k = x.height, P = x.h, E = xK(x, SK), T = k || P, M = kn({}, E, {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 0,
    overflow: "hidden",
    height: "auto",
    minH: T
  }, s ? {
    pointerEvents: "none"
  } : {}), I = d != null && d.control ? d.control(M, t) : M;
  return /* @__PURE__ */ re.createElement(Oe, kn({
    ref: i,
    className: r({
      control: !0,
      "control--is-disabled": s,
      "control--is-focused": l,
      "control--menu-is-open": u
    }, n),
    sx: I
  }, a, {
    "data-focus": l ? !0 : void 0,
    "data-focus-visible": l ? !0 : void 0,
    "data-invalid": S ? !0 : void 0,
    "data-disabled": s ? !0 : void 0,
    "data-readonly": h ? !0 : void 0
  }), o);
}, CK = function(t) {
  var n = t.className, r = t.cx, o = t.selectProps, i = o.chakraStyles, a = o.useBasicStyles, s = o.variant, l = kn({
    opacity: 1
  }, a || s !== "outline" ? {
    display: "none"
  } : {}), u = i != null && i.indicatorSeparator ? i.indicatorSeparator(l, t) : l;
  return /* @__PURE__ */ re.createElement(D2, {
    className: r({
      "indicator-separator": !0
    }, n),
    sx: u,
    orientation: "vertical"
  });
}, kK = function(t) {
  return /* @__PURE__ */ re.createElement(Pn, kn({
    role: "presentation",
    focusable: "false",
    "aria-hidden": "true"
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }));
}, PK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.useBasicStyles, u = a.size, c = a.focusBorderColor, d = a.errorBorderColor, f = a.variant, p = zn(u), g = mt("Input", {
    size: p,
    variant: f,
    focusBorderColor: c,
    errorBorderColor: d
  }), y = {
    sm: "16px",
    md: "20px",
    lg: "24px"
  }, S = y[p], h = kn({}, g.addon, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: 0,
    borderWidth: 0,
    fontSize: S
  }, l && {
    background: "transparent",
    padding: 0,
    width: 6,
    marginRight: 2,
    marginLeft: 1,
    cursor: "inherit"
  }), m = s != null && s.dropdownIndicator ? s.dropdownIndicator(h, t) : h, b = {
    height: "1em",
    width: "1em"
  }, x = s != null && s.downChevron ? s.downChevron(b, t) : b;
  return /* @__PURE__ */ re.createElement(Oe, kn({}, i, {
    className: o({
      indicator: !0,
      "dropdown-indicator": !0
    }, r),
    sx: m
  }), n || /* @__PURE__ */ re.createElement(kK, {
    sx: x
  }));
}, EK = function(t) {
  return /* @__PURE__ */ re.createElement(Pn, kn({
    focusable: "false",
    "aria-hidden": !0
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
  }));
}, TK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = zn(l), c = ei("CloseButton", {
    size: u
  }), d = kn({}, c, {
    marginX: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    cursor: "pointer"
  }), f = s != null && s.clearIndicator ? s.clearIndicator(d, t) : d, p = {
    width: "1em",
    height: "1em"
  }, g = s != null && s.crossIcon ? s.crossIcon(p, t) : p;
  return /* @__PURE__ */ re.createElement(Oe, kn({
    role: "button",
    className: o({
      indicator: !0,
      "clear-indicator": !0
    }, r),
    sx: f,
    "aria-label": "Clear selected options"
  }, i), n || /* @__PURE__ */ re.createElement(EK, {
    sx: g
  }));
}, _K = function(t) {
  var n = t.className, r = t.cx, o = t.innerProps, i = t.selectProps, a = i.chakraStyles, s = i.size, l = t.color, u = t.emptyColor, c = t.speed, d = t.thickness, f = t.spinnerSize, p = zn(s), g = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }, y = g[p], S = {
    marginRight: 3
  }, h = a != null && a.loadingIndicator ? a.loadingIndicator(S, t) : S;
  return /* @__PURE__ */ re.createElement(Kd, kn({
    className: r({
      indicator: !0,
      "loading-indicator": !0
    }, n),
    sx: h
  }, o, {
    size: f || y,
    color: l,
    emptyColor: u,
    speed: c,
    thickness: d
  }));
};
const OK = wK;
var MK = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
function Os() {
  return Os = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Os.apply(this, arguments);
}
function IK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var RK = function(t) {
  var n = t.className, r = t.cx, o = t.value, i = t.selectProps, a = i.chakraStyles, s = i.isReadOnly, l = nT(t), u = l.innerRef, c = l.isDisabled, d = l.isHidden, f = l.inputClassName, p = IK(l, MK), g = {
    gridArea: "1 / 2",
    minW: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0
  }, y = {
    flex: "1 1 auto",
    display: "inline-grid",
    gridArea: "1 / 1 / 2 / 3",
    gridTemplateColumns: "0 min-content",
    color: "inherit",
    marginX: "0.125rem",
    paddingY: "0.125rem",
    visibility: c ? "hidden" : "visible",
    // Force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : "",
    _after: Os({
      content: 'attr(data-value) " "',
      visibility: "hidden",
      whiteSpace: "pre",
      padding: 0
    }, g)
  }, S = a != null && a.inputContainer ? a.inputContainer(y, t) : y, h = Os({
    background: 0,
    opacity: d ? 0 : 1,
    width: "100%"
  }, g), m = a != null && a.input ? a.input(h, t) : h;
  return /* @__PURE__ */ re.createElement(Oe, {
    className: r({
      "input-container": !0
    }, n),
    "data-value": o || "",
    sx: S
  }, /* @__PURE__ */ re.createElement(X.input, Os({
    className: r({
      input: !0
    }, f),
    ref: u,
    sx: m,
    disabled: c,
    readOnly: s ? !0 : void 0
  }, p)));
};
const $K = RK;
var AK = ["data"];
function DK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Wt() {
  return Wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Wt.apply(this, arguments);
}
var FK = function(t) {
  var n = {
    bottom: "top",
    top: "bottom"
  };
  return t ? n[t] : "top";
}, LK = function(t) {
  var n, r = t.className, o = t.cx, i = t.children, a = t.innerProps, s = t.innerRef, l = t.placement, u = t.selectProps.chakraStyles, c = (n = {
    position: "absolute"
  }, n[FK(l)] = "100%", n.marginY = "8px", n.width = "100%", n.zIndex = 1, n), d = u != null && u.menu ? u.menu(c, t) : c;
  return /* @__PURE__ */ re.createElement(El, null, /* @__PURE__ */ re.createElement(Oe, Wt({}, a, {
    ref: s,
    className: o({
      menu: !0
    }, r),
    sx: d
  }), i));
};
const jK = LK;
var zK = function(t) {
  var n, r = t.className, o = t.cx, i = t.innerRef, a = t.children, s = t.maxHeight, l = t.isMulti, u = t.innerProps, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, g = c.focusBorderColor, y = c.errorBorderColor, S = mt("Menu"), h = zn(f), m = mt("Input", {
    size: h,
    variant: p,
    focusBorderColor: g,
    errorBorderColor: y
  }), b = m.field, x = Wt({}, S.list, {
    minW: "100%",
    maxHeight: s + "px",
    overflowY: "auto",
    // This is hacky, but it works. May be removed in the future
    "--input-border-radius": b == null ? void 0 : b["--input-border-radius"],
    borderRadius: (b == null ? void 0 : b.borderRadius) || ((n = S.list) == null ? void 0 : n.borderRadius),
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }), k = d != null && d.menuList ? d.menuList(x, t) : x;
  return /* @__PURE__ */ re.createElement(Oe, Wt({
    role: "listbox"
  }, u, {
    className: o({
      "menu-list": !0,
      "menu-list--is-multi": l
    }, r),
    sx: k,
    ref: i
  }), a);
}, NK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = zn(l), c = {
    sm: "6px",
    md: "8px",
    lg: "10px"
  }, d = {
    color: "chakra-subtle-text",
    textAlign: "center",
    paddingY: c[u],
    fontSize: u
  }, f = s != null && s.loadingMessage ? s.loadingMessage(d, t) : d;
  return /* @__PURE__ */ re.createElement(Oe, Wt({}, i, {
    className: o({
      "menu-notice": !0,
      "menu-notice--loading": !0
    }, r),
    sx: f
  }), n);
}, VK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = zn(l), c = {
    sm: "6px",
    md: "8px",
    lg: "10px"
  }, d = {
    color: "chakra-subtle-text",
    textAlign: "center",
    paddingY: c[u],
    fontSize: u
  }, f = s != null && s.noOptionsMessage ? s.noOptionsMessage(d, t) : d;
  return /* @__PURE__ */ re.createElement(Oe, Wt({}, i, {
    className: o({
      "menu-notice": !0,
      "menu-notice--no-options": !0
    }, r),
    sx: f
  }), n);
}, BK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.theme, a = t.getStyles, s = t.Heading, l = t.headingProps, u = t.label, c = t.selectProps, d = t.innerProps, f = t.getClassNames, p = c.chakraStyles, g = {}, y = p != null && p.group ? p.group(g, t) : g;
  return /* @__PURE__ */ re.createElement(Oe, Wt({}, d, {
    className: o({
      group: !0
    }, r),
    sx: y
  }), /* @__PURE__ */ re.createElement(s, Wt({}, l, {
    selectProps: c,
    cx: o,
    theme: i,
    getStyles: a,
    getClassNames: f
  }), u), /* @__PURE__ */ re.createElement(Oe, null, n));
}, WK = function(t) {
  var n = t.cx, r = t.className, o = t.selectProps, i = o.chakraStyles, a = o.size, s = o.hasStickyGroupHeaders, l = nT(t);
  l.data;
  var u = DK(l, AK), c = mt("Menu"), d = zn(a), f = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }, p = {
    sm: "0.4rem 0.8rem",
    md: "0.5rem 1rem",
    lg: "0.6rem 1.2rem"
  }, g = Wt({}, c.groupTitle, {
    fontSize: f[d],
    padding: p[d],
    margin: 0,
    borderBottomWidth: s ? "1px" : 0,
    position: s ? "sticky" : "static",
    top: -2,
    bg: c.list.bg,
    zIndex: 1
  }), y = i != null && i.groupHeading ? i.groupHeading(g, t) : g;
  return /* @__PURE__ */ re.createElement(Oe, Wt({}, u, {
    className: n({
      "group-heading": !0
    }, r),
    sx: y
  }));
}, HK = function(t) {
  return /* @__PURE__ */ re.createElement("svg", Wt({
    viewBox: "0 0 14 14",
    width: "1em",
    height: "1em"
  }, t), /* @__PURE__ */ re.createElement("polygon", {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }));
}, UK = function(t) {
  var n = t.className, r = t.cx, o = t.innerRef, i = t.innerProps, a = t.children, s = t.isFocused, l = t.isDisabled, u = t.isSelected, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.isMulti, g = c.hideSelectedOptions, y = c.selectedOptionStyle, S = c.selectedOptionColorScheme, h = mt("Menu").item, m = zn(f), b = {
    sm: "0.6rem",
    md: "0.8rem",
    lg: "1rem"
  }, x = {
    sm: "0.3rem",
    md: "0.4rem",
    lg: "0.5rem"
  }, k = Ay(S + ".500", S + ".300"), P = Ay("white", "black"), E = y === "check" && (!p || g === !1), T = y === "color", M = Wt({}, h, {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    width: "100%",
    textAlign: "start",
    fontSize: m,
    paddingX: b[m],
    paddingY: x[m]
  }, T && {
    _selected: {
      bg: k,
      color: P,
      _active: {
        bg: k
      }
    }
  }), I = d != null && d.option ? d.option(M, t) : M;
  return /* @__PURE__ */ re.createElement(Oe, Wt({
    role: "option"
  }, i, {
    className: r({
      option: !0,
      "option--is-disabled": l,
      "option--is-focused": s,
      "option--is-selected": u
    }, n),
    sx: I,
    ref: o,
    "data-focus": s ? !0 : void 0,
    "aria-disabled": l ? !0 : void 0,
    "aria-selected": u
  }), E && /* @__PURE__ */ re.createElement(Jd, {
    fontSize: "0.8em",
    marginEnd: "0.75rem",
    opacity: u ? 1 : 0
  }, /* @__PURE__ */ re.createElement(HK, null)), a);
};
function $n() {
  return $n = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $n.apply(this, arguments);
}
var GK = function(t) {
  return typeof t == "object" && t !== null && "colorScheme" in t && typeof t.colorScheme == "string";
}, KK = function(t) {
  return typeof t == "object" && t !== null && "variant" in t && typeof t.variant == "string";
}, rT = function(t) {
  return typeof t == "object" && t !== null && "isFixed" in t && typeof t.isFixed == "boolean";
}, YK = function(t) {
  var n = t.children, r = t.className, o = t.components, i = t.cx, a = t.data, s = t.innerProps, l = t.isDisabled, u = t.isFocused, c = t.removeProps, d = t.selectProps, f = t.cropWithEllipsis, p = o.Container, g = o.Label, y = o.Remove, S = d.chakraStyles, h = d.colorScheme, m = d.tagVariant, b = d.size, x = zn(b), k = "", P = "", E = !1;
  GK(a) && (k = a.colorScheme), KK(a) && (P = a.variant), rT(a) && (E = a.isFixed);
  var T = mt("Tag", {
    size: x,
    colorScheme: k || h,
    variant: P || m || (E ? "solid" : "subtle")
  }), M = $n({}, T.container, {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    // resolves flex/text-overflow bug
    margin: "0.125rem"
  }), I = S != null && S.multiValue ? S.multiValue(M, t) : M, D = $n({}, T.label, {
    overflow: "hidden",
    textOverflow: f || f === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }), G = S != null && S.multiValueLabel ? S.multiValueLabel(D, t) : D, H = $n({}, T.closeButton, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }), L = S != null && S.multiValueRemove ? S.multiValueRemove(H, t) : H;
  return /* @__PURE__ */ re.createElement(p, {
    data: a,
    innerProps: $n({
      className: i({
        "multi-value": !0,
        "multi-value--is-disabled": l
      }, r)
    }, s),
    sx: I,
    selectProps: d
  }, /* @__PURE__ */ re.createElement(g, {
    data: a,
    innerProps: {
      className: i({
        "multi-value__label": !0
      }, r)
    },
    sx: G,
    selectProps: d
  }, n), /* @__PURE__ */ re.createElement(y, {
    data: a,
    innerProps: $n({
      className: i({
        "multi-value__remove": !0
      }, r),
      "aria-label": "Remove " + (n || "option")
    }, c),
    sx: L,
    selectProps: d,
    isFocused: u
  }));
}, qK = function(t) {
  var n = t.children, r = t.innerProps, o = t.sx;
  return /* @__PURE__ */ re.createElement(X.span, $n({}, r, {
    sx: o
  }), n);
}, XK = function(t) {
  var n = t.children, r = t.innerProps, o = t.sx;
  return /* @__PURE__ */ re.createElement(X.span, $n({}, r, {
    sx: o
  }), n);
}, QK = function(t) {
  return /* @__PURE__ */ re.createElement(Pn, $n({
    verticalAlign: "inherit",
    viewBox: "0 0 512 512"
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }));
}, ZK = function(t) {
  var n = t.children, r = t.innerProps, o = t.isFocused, i = t.data, a = t.sx;
  return rT(i) && i.isFixed ? null : /* @__PURE__ */ re.createElement(Oe, $n({}, r, {
    role: "button",
    sx: a,
    "data-focus": o ? !0 : void 0,
    "data-focus-visible": o ? !0 : void 0
  }), n || /* @__PURE__ */ re.createElement(QK, null));
};
const JK = YK;
function _m() {
  return _m = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _m.apply(this, arguments);
}
var eY = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps.chakraStyles, s = {
    gridArea: "1 / 1 / 2 / 3",
    color: "chakra-placeholder-color",
    mx: "0.125rem",
    userSelect: "none"
  }, l = a != null && a.placeholder ? a.placeholder(s, t) : s;
  return /* @__PURE__ */ re.createElement(Oe, _m({}, i, {
    className: o({
      placeholder: !0
    }, r),
    sx: l
  }), n);
};
const tY = eY;
function Om() {
  return Om = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Om.apply(this, arguments);
}
var nY = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isDisabled, a = t.innerProps, s = t.selectProps.chakraStyles, l = {
    gridArea: "1 / 1 / 2 / 3",
    mx: "0.125rem",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, u = s != null && s.singleValue ? s.singleValue(l, t) : l;
  return /* @__PURE__ */ re.createElement(Oe, Om({
    className: o({
      "single-value": !0,
      "single-value--is-disabled": i
    }, r),
    sx: u
  }, a), n);
};
const rY = nY;
var oY = {
  ClearIndicator: TK,
  Control: OK,
  DropdownIndicator: PK,
  Group: BK,
  GroupHeading: WK,
  IndicatorSeparator: CK,
  IndicatorsContainer: bK,
  Input: $K,
  LoadingIndicator: _K,
  LoadingMessage: NK,
  Menu: jK,
  MenuList: zK,
  MultiValue: JK,
  MultiValueContainer: qK,
  MultiValueLabel: XK,
  MultiValueRemove: ZK,
  NoOptionsMessage: VK,
  Option: UK,
  Placeholder: tY,
  SelectContainer: gK,
  SingleValue: rY,
  ValueContainer: yK
};
const iY = oY;
var aY = ["components", "theme", "size", "colorScheme", "isDisabled", "isInvalid", "isReadOnly", "required", "isRequired", "inputId", "tagVariant", "selectedOptionStyle", "selectedOptionColorScheme", "selectedOptionColor", "variant", "focusBorderColor", "errorBorderColor", "chakraStyles", "onFocus", "onBlur", "menuIsOpen"];
function rd() {
  return rd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, rd.apply(this, arguments);
}
function sY(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var lY = function(t) {
  var n, r = t.components, o = r === void 0 ? {} : r;
  t.theme;
  var i = t.size, a = t.colorScheme, s = a === void 0 ? "gray" : a, l = t.isDisabled, u = t.isInvalid, c = t.isReadOnly, d = t.required, f = t.isRequired, p = t.inputId, g = t.tagVariant, y = t.selectedOptionStyle, S = y === void 0 ? "color" : y, h = t.selectedOptionColorScheme, m = t.selectedOptionColor, b = t.variant, x = t.focusBorderColor, k = t.errorBorderColor, P = t.chakraStyles, E = P === void 0 ? {} : P, T = t.onFocus, M = t.onBlur, I = t.menuIsOpen, D = sY(t, aY), G = Jo(), H = G.components.Input.defaultProps.variant, L = VP({
    id: p,
    isDisabled: l,
    isInvalid: u,
    isRequired: f,
    isReadOnly: c,
    onFocus: T,
    onBlur: M
  }), W = I ?? (L.readOnly ? !1 : void 0), K = S, $ = ["color", "check"];
  $.includes(S) || (K = "color");
  var A = h || m || "blue";
  typeof A != "string" && (A = "blue");
  var j = rd({
    // Allow overriding of custom components
    components: rd({}, iY, o),
    // Custom select props
    colorScheme: s,
    size: i,
    tagVariant: g,
    selectedOptionStyle: K,
    selectedOptionColorScheme: A,
    variant: b ?? H,
    chakraStyles: E,
    focusBorderColor: x,
    errorBorderColor: k,
    // Extract custom props from form control
    onFocus: L.onFocus,
    onBlur: L.onBlur,
    isDisabled: L.disabled,
    isInvalid: !!L["aria-invalid"],
    inputId: L.id,
    isReadOnly: L.readOnly,
    required: d ?? L.required,
    menuIsOpen: W
  }, D, {
    // aria-invalid can be passed to react-select, so we allow that to
    // override the `isInvalid` prop
    "aria-invalid": (n = D["aria-invalid"]) != null ? n : L["aria-invalid"]
  });
  return j;
};
const uY = lY;
function Mm() {
  return Mm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Mm.apply(this, arguments);
}
var cY = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = uY(e);
  return /* @__PURE__ */ re.createElement(fK, Mm({
    ref: t
  }, n));
});
const dY = cY;
function fY({ workflow: e }) {
  var c;
  const [t, n] = v.useState([]), [r, o] = v.useState(""), i = ((c = e.tags) == null ? void 0 : c.map((d) => ({
    value: d,
    label: d
  }))) ?? [], [a, s] = v.useState(i);
  if (v.useEffect(() => {
    ke && n(ke.listAll() ?? []);
  }, []), v.useEffect(() => {
    var d;
    s(
      ((d = e.tags) == null ? void 0 : d.map((f) => ({
        value: f,
        label: f
      }))) ?? []
    );
  }, [e.tags]), ke == null)
    return alert("Error: TagsTable is not loaded"), null;
  const l = t.map((d) => ({
    value: d.name,
    label: d.name
  })), u = 37 * 5;
  return /* @__PURE__ */ w.jsxs(Ng, { isLazy: !0, children: [
    /* @__PURE__ */ w.jsx(zg, { children: /* @__PURE__ */ w.jsx(jn, { variant: "ghost", size: "sm", colorScheme: "teal", children: /* @__PURE__ */ w.jsx(xE, { color: "#718096" }) }) }),
    /* @__PURE__ */ w.jsxs(Hg, { children: [
      /* @__PURE__ */ w.jsx(Vg, {}),
      /* @__PURE__ */ w.jsx(Wg, {}),
      /* @__PURE__ */ w.jsx(fE, { children: /* @__PURE__ */ w.jsx("b", { children: e.name }) }),
      /* @__PURE__ */ w.jsxs(Bg, { children: [
        /* @__PURE__ */ w.jsx(
          dY,
          {
            isMulti: !0,
            name: "tags",
            options: l,
            menuIsOpen: !0,
            value: a,
            onChange: (d) => {
              s(d), xm(e.id, {
                tags: d.map((f) => f.value)
              });
            },
            chakraStyles: {
              dropdownIndicator: (d, f) => ({
                ...d,
                p: 0,
                w: "30px"
              }),
              menuList: (d, f) => ({
                ...d,
                shadow: "none",
                pt: 0
              })
            },
            placeholder: "Select tags",
            closeMenuOnSelect: !1,
            maxMenuHeight: u
          }
        ),
        /* @__PURE__ */ w.jsxs(
          $t,
          {
            gap: 4,
            mt: Math.min(u, Math.max(t.length, 3) * 37),
            children: [
              /* @__PURE__ */ w.jsx(
                Qd,
                {
                  placeholder: "New tag name",
                  size: "sm",
                  mt: 6,
                  mb: 6,
                  variant: "flushed",
                  value: r,
                  onChange: (d) => {
                    o(d.target.value);
                  }
                }
              ),
              /* @__PURE__ */ w.jsx(
                jn,
                {
                  iconSpacing: 1,
                  leftIcon: /* @__PURE__ */ w.jsx(SE, { size: 16 }),
                  colorScheme: "teal",
                  variant: "solid",
                  size: "xs",
                  px: 5,
                  isDisabled: r.length === 0,
                  onClick: () => {
                    ke == null || ke.upsert(r), n((ke == null ? void 0 : ke.listAll()) ?? []), o("");
                  },
                  children: "New Tag"
                }
              )
            ]
          }
        )
      ] })
    ] })
  ] });
}
function pY({
  menuPosition: e,
  workflowID: t,
  onClose: n
}) {
  const { onDuplicateWorkflow: r } = v.useContext(Gg);
  return /* @__PURE__ */ w.jsx(w.Fragment, { children: /* @__PURE__ */ w.jsx(Oe, { position: "absolute", top: e.y, left: e.x, children: /* @__PURE__ */ w.jsx(El, { isOpen: !0, onClose: n, children: /* @__PURE__ */ w.jsx(ef, { children: /* @__PURE__ */ w.jsx(
    Ni,
    {
      onClick: () => r && r(t),
      children: "Duplicate"
    }
  ) }) }) }) });
}
function hY({
  isSelected: e,
  workflow: t,
  loadWorkflowID: n,
  onDelete: r,
  onDraggingWorkflowID: o
}) {
  const { colorMode: i } = Ea(), [a, s] = v.useState({ x: 0, y: 0 }), [l, u] = v.useState(!1), c = (f) => {
    f.preventDefault(), s({ x: f.clientX, y: f.clientY }), u(!0);
  }, d = () => {
    u(!1);
  };
  return /* @__PURE__ */ w.jsxs(
    $t,
    {
      w: "100%",
      justify: "space-between",
      onContextMenu: c,
      children: [
        /* @__PURE__ */ w.jsxs(
          Oe,
          {
            as: "button",
            textAlign: "left",
            backgroundColor: e ? "teal.200" : void 0,
            color: e ? "#333" : void 0,
            w: "90%",
            draggable: !0,
            onDragStart: (f) => {
              t.id && o(t.id);
            },
            borderRadius: 6,
            p: 2,
            mb: 2,
            onClick: () => {
              n(t.id);
            },
            _hover: {
              bg: i === "light" ? "gray.200" : "#4A5568"
            },
            _active: {
              transform: "scale(0.98)",
              borderColor: "#bec3c9"
            },
            children: [
              /* @__PURE__ */ w.jsx(nr, { fontWeight: "500", children: t.name ?? "untitled" }),
              /* @__PURE__ */ w.jsxs(nr, { color: "GrayText", ml: 2, fontSize: "sm", children: [
                "Updated: ",
                kE(t.updateTime)
              ] })
            ]
          }
        ),
        l && /* @__PURE__ */ w.jsx(
          pY,
          {
            menuPosition: a,
            onClose: d,
            workflowID: t.id
          }
        ),
        /* @__PURE__ */ w.jsx(fY, { workflow: t }),
        /* @__PURE__ */ w.jsx(Ng, { isLazy: !0, children: ({ isOpen: f, onClose: p }) => /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
          /* @__PURE__ */ w.jsx(zg, { children: /* @__PURE__ */ w.jsx(wE, { color: "#F56565", cursor: "pointer" }) }),
          /* @__PURE__ */ w.jsxs(Hg, { children: [
            /* @__PURE__ */ w.jsx(Vg, {}),
            /* @__PURE__ */ w.jsx(Wg, {}),
            /* @__PURE__ */ w.jsxs(Bg, { children: [
              /* @__PURE__ */ w.jsx(nr, { mb: 4, fontWeight: 600, children: "Are you sure you want to delete this workflow?" }),
              /* @__PURE__ */ w.jsx(
                jn,
                {
                  colorScheme: "red",
                  size: "sm",
                  onClick: () => {
                    r(t.id), p();
                  },
                  children: "Yes, delete"
                }
              )
            ] })
          ] })
        ] }) })
      ]
    }
  );
}
function mY() {
  const e = v.useRef(null), { setRecentFiles: t } = v.useContext(EE), n = async (o) => {
    const i = o.target.files;
    if (!i)
      return;
    const a = Array.from(i);
    console.log("filearr", a), await Promise.all(
      a.map((s) => r(s))
    ), t && t(tc());
  }, r = async (o) => new Promise((i, a) => {
    const s = new FileReader();
    s.onload = (l) => {
      var u;
      try {
        const c = (u = l.target) == null ? void 0 : u.result;
        typeof c == "string" ? i(
          ec({
            json: c,
            name: o.name.replace(".json", "")
          })
        ) : a(new Error("File content is not a string"));
      } catch (c) {
        a(c);
      }
    }, s.onerror = a, s.readAsText(o);
  });
  return /* @__PURE__ */ w.jsxs(
    jn,
    {
      leftIcon: /* @__PURE__ */ w.jsx(ZW, { size: 18 }),
      variant: "outline",
      iconSpacing: 1,
      size: "sm",
      colorScheme: "teal",
      onClick: () => {
        var o;
        console.log(
          "import butotn clicked, fileinputref",
          e.current
        ), (o = e.current) == null || o.click();
      },
      children: [
        "Import",
        /* @__PURE__ */ w.jsx(
          "input",
          {
            style: { display: "none" },
            ref: e,
            type: "file",
            accept: ".json",
            multiple: !0,
            onChange: n
          }
        )
      ]
    }
  );
}
const jS = 6;
function vY({ onclose: e, loadWorkflowID: t }) {
  const [n, r] = v.useState([]), { curFlowID: o } = v.useContext(Gg), [i, a] = v.useState(), [s, l] = v.useState(!1), u = v.useRef(null), c = v.useRef(
    window.localStorage.getItem(gS) ?? Gr.RECENTLY_MODIFIED
  ), d = (b) => {
    a(b), r(tc().filter((x) => {
      var k;
      return (k = x.tags) == null ? void 0 : k.includes(b);
    }));
  }, f = () => {
    const b = tc(c.current);
    r(b);
  }, p = (b) => {
    r(PE(n, b)), c.current = b, window.localStorage.setItem(gS, b);
  }, g = (b) => {
    bH(b), f();
  }, y = (b) => {
  }, S = (b) => {
    Se && u.current && gH(Se[u.current].json);
  }, h = (b) => {
    e();
  };
  v.useEffect(() => (f(), pn.canvasEl.addEventListener("dragover", y), pn.canvasEl.addEventListener("drop", S), pn.canvasEl.addEventListener("click", h), () => {
    pn.canvasEl.removeEventListener("dragover", y), pn.canvasEl.removeEventListener("drop", S), pn.canvasEl.removeEventListener("click", h);
  }), [o]);
  const m = 440;
  return /* @__PURE__ */ w.jsx(EE.Provider, { value: { setRecentFiles: r }, children: /* @__PURE__ */ w.jsx(Oe, { style: { width: m }, children: /* @__PURE__ */ w.jsxs(
    t6,
    {
      width: m,
      height: "100vh",
      pl: 4,
      pr: 5,
      pt: 4,
      gap: 4,
      position: "absolute",
      top: 0,
      left: 0,
      shadow: "xl",
      zIndex: 10,
      children: [
        /* @__PURE__ */ w.jsxs(mm, { alignItems: "center", justifyContent: "space-between", children: [
          /* @__PURE__ */ w.jsxs($t, { gap: 4, children: [
            /* @__PURE__ */ w.jsx(nr, { fontSize: 20, fontWeight: 600, mr: 4, children: "Workflows" }),
            /* @__PURE__ */ w.jsx(mY, {})
          ] }),
          /* @__PURE__ */ w.jsx($t, { alignItems: "center", children: /* @__PURE__ */ w.jsx(PH, {}) })
        ] }),
        /* @__PURE__ */ w.jsxs(mm, { direction: "column", overflowY: "auto", overflowX: "hidden", children: [
          /* @__PURE__ */ w.jsxs($t, { spacing: 2, wrap: "wrap", mb: 0, children: [
            i != null && /* @__PURE__ */ w.jsx(
              rl,
              {
                "aria-label": "Close",
                size: "sm",
                icon: /* @__PURE__ */ w.jsx(iH, {}),
                onClick: () => {
                  a(void 0), r(tc());
                }
              }
            ),
            ke == null ? void 0 : ke.listAll().slice(0, s ? void 0 : jS).map((b) => /* @__PURE__ */ w.jsx(
              jn,
              {
                variant: "solid",
                width: "auto",
                flexShrink: 0,
                size: "sm",
                py: 4,
                onClick: () => d(b.name),
                isActive: i === b.name,
                children: b.name
              }
            )),
            ((ke == null ? void 0 : ke.listAll().length) ?? 0) > jS && /* @__PURE__ */ w.jsx(
              rl,
              {
                "aria-label": "Show-all-tags",
                size: "sm",
                icon: s ? /* @__PURE__ */ w.jsx(QW, {}) : /* @__PURE__ */ w.jsx(mS, {}),
                onClick: () => l(!s)
              }
            )
          ] }),
          /* @__PURE__ */ w.jsx($t, { mb: 2, p: 0, justifyContent: "end", children: /* @__PURE__ */ w.jsxs(El, { closeOnSelect: !0, children: [
            /* @__PURE__ */ w.jsx(
              Lg,
              {
                as: jn,
                variant: "ghost",
                size: "xs",
                pr: 0,
                rightIcon: /* @__PURE__ */ w.jsx(mS, { size: "16" }),
                children: /* @__PURE__ */ w.jsxs($t, { children: [
                  /* @__PURE__ */ w.jsx(nr, { children: "Sort by:" }),
                  /* @__PURE__ */ w.jsx(nr, { display: "inline-block", children: c.current })
                ] })
              }
            ),
            /* @__PURE__ */ w.jsx(ef, { children: /* @__PURE__ */ w.jsx(
              nE,
              {
                value: c.current,
                type: "radio",
                onChange: (b) => p(b),
                children: Object.values(Gr).map((b, x) => /* @__PURE__ */ w.jsx(jg, { value: b, children: b }, x))
              }
            ) })
          ] }) }),
          n.map((b) => /* @__PURE__ */ w.jsx(
            hY,
            {
              isSelected: b.id === o,
              workflow: b,
              loadWorkflowID: t,
              onDelete: g,
              onDraggingWorkflowID: (x) => {
                u.current = x;
              }
            }
          ))
        ] })
      ]
    }
  ) }) });
}
const gY = {
  last_node_id: 9,
  last_link_id: 9,
  nodes: [
    {
      id: 7,
      type: "CLIPTextEncode",
      pos: [413, 389],
      size: { 0: 425.27801513671875, 1: 180.6060791015625 },
      flags: {},
      order: 3,
      mode: 0,
      inputs: [{ name: "clip", type: "CLIP", link: 5 }],
      outputs: [{ name: "CONDITIONING", type: "CONDITIONING", links: [6], slot_index: 0 }],
      properties: {},
      widgets_values: ["text, watermark"]
    },
    {
      id: 6,
      type: "CLIPTextEncode",
      pos: [415, 186],
      size: { 0: 422.84503173828125, 1: 164.31304931640625 },
      flags: {},
      order: 2,
      mode: 0,
      inputs: [{ name: "clip", type: "CLIP", link: 3 }],
      outputs: [{ name: "CONDITIONING", type: "CONDITIONING", links: [4], slot_index: 0 }],
      properties: {},
      widgets_values: ["beautiful scenery nature glass bottle landscape, , purple galaxy bottle,"]
    },
    {
      id: 5,
      type: "EmptyLatentImage",
      pos: [473, 609],
      size: { 0: 315, 1: 106 },
      flags: {},
      order: 1,
      mode: 0,
      outputs: [{ name: "LATENT", type: "LATENT", links: [2], slot_index: 0 }],
      properties: {},
      widgets_values: [512, 512, 1]
    },
    {
      id: 3,
      type: "KSampler",
      pos: [863, 186],
      size: { 0: 315, 1: 262 },
      flags: {},
      order: 4,
      mode: 0,
      inputs: [
        { name: "model", type: "MODEL", link: 1 },
        { name: "positive", type: "CONDITIONING", link: 4 },
        { name: "negative", type: "CONDITIONING", link: 6 },
        { name: "latent_image", type: "LATENT", link: 2 }
      ],
      outputs: [{ name: "LATENT", type: "LATENT", links: [7], slot_index: 0 }],
      properties: {},
      widgets_values: [156680208700286, !0, 20, 8, "euler", "normal", 1]
    },
    {
      id: 8,
      type: "VAEDecode",
      pos: [1209, 188],
      size: { 0: 210, 1: 46 },
      flags: {},
      order: 5,
      mode: 0,
      inputs: [
        { name: "samples", type: "LATENT", link: 7 },
        { name: "vae", type: "VAE", link: 8 }
      ],
      outputs: [{ name: "IMAGE", type: "IMAGE", links: [9], slot_index: 0 }],
      properties: {}
    },
    {
      id: 9,
      type: "SaveImage",
      pos: [1451, 189],
      size: { 0: 210, 1: 26 },
      flags: {},
      order: 6,
      mode: 0,
      inputs: [{ name: "images", type: "IMAGE", link: 9 }],
      properties: {}
    },
    {
      id: 4,
      type: "CheckpointLoaderSimple",
      pos: [26, 474],
      size: { 0: 315, 1: 98 },
      flags: {},
      order: 0,
      mode: 0,
      outputs: [
        { name: "MODEL", type: "MODEL", links: [1], slot_index: 0 },
        { name: "CLIP", type: "CLIP", links: [3, 5], slot_index: 1 },
        { name: "VAE", type: "VAE", links: [8], slot_index: 2 }
      ],
      properties: {},
      widgets_values: ["v1-5-pruned-emaonly.ckpt"]
    }
  ],
  links: [
    [1, 4, 0, 3, 0, "MODEL"],
    [2, 5, 0, 3, 3, "LATENT"],
    [3, 4, 1, 6, 0, "CLIP"],
    [4, 6, 0, 3, 1, "CONDITIONING"],
    [5, 4, 1, 7, 0, "CLIP"],
    [6, 7, 0, 3, 2, "CONDITIONING"],
    [7, 3, 0, 8, 0, "LATENT"],
    [8, 4, 2, 8, 1, "VAE"],
    [9, 8, 0, 9, 0, "IMAGE"]
  ],
  groups: [],
  config: {},
  extra: {},
  version: 0.4
};
function yY() {
  const e = v.useRef({}), [t, n] = v.useState(null), [r, o] = v.useState("root"), [i, a] = v.useState(!0), [s, l] = v.useState(null), u = v.useRef(null), c = (h) => {
    u.current = h, l(h);
  }, d = async () => {
    var b;
    const h = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(x) {
      },
      async addCustomNodeDefs(x) {
        e.current = x;
      }
    };
    pn.registerExtension(h);
    try {
      await yH();
    } catch (x) {
      console.error("error loading db", x);
    }
    a(!1);
    const m = localStorage.getItem("curFlowID");
    if (m)
      c(m), Se && n(((b = Se[m]) == null ? void 0 : b.name) ?? "");
    else {
      const x = localStorage.getItem("workflow"), k = ec({ json: x ?? "" });
      c(k.id), n(k.name ?? "");
    }
  };
  v.useEffect(() => {
    d(), setInterval(() => {
      if (u.current != null) {
        const h = JSON.stringify(pn.graph.serialize());
        localStorage.setItem("curFlowID", u.current), h != null && xm(u.current, {
          json: h
        });
      }
    }, 1e3);
  }, []);
  const f = (h) => {
    u.current != null && xm(u.current, {
      name: h
    });
  }, p = v.useCallback(
    eI(f, 700),
    []
  ), g = (h) => {
    if (Se == null) {
      alert("Error: Workspace not loaded!");
      return;
    }
    c(h);
    const m = Se[h];
    if (m == null) {
      alert("Error: Workflow not found! id: " + h);
      return;
    }
    pn.loadGraphData(JSON.parse(m.json)), n(m.name), o("root");
  }, y = () => {
    const h = gY, m = ec({ json: JSON.stringify(h) });
    c(m.id), n(m.name), pn.loadGraphData(h);
  }, S = (h) => {
    if (Se == null)
      return;
    const m = Se[h];
    if (m == null)
      return;
    const b = ec({
      json: m.json,
      name: m.name + " 1"
    });
    c(b.id), n(b.name), pn.loadGraphData(JSON.parse(b.json));
  };
  return i ? null : /* @__PURE__ */ w.jsx(
    Gg.Provider,
    {
      value: { curFlowID: s, onDuplicateWorkflow: S },
      children: /* @__PURE__ */ w.jsxs(
        Oe,
        {
          style: {
            width: "100vh",
            position: "absolute",
            top: 0,
            left: 0
          },
          children: [
            /* @__PURE__ */ w.jsx(
              $t,
              {
                style: {
                  padding: 8,
                  position: "fixed",
                  top: 0,
                  left: 0
                },
                justifyContent: "space-between",
                alignItems: "center",
                gap: 4,
                children: /* @__PURE__ */ w.jsxs($t, { children: [
                  /* @__PURE__ */ w.jsx(
                    jn,
                    {
                      size: "sm",
                      "aria-label": "workspace folder",
                      onClick: () => o("recentFlows"),
                      children: /* @__PURE__ */ w.jsxs($t, { gap: 1, children: [
                        /* @__PURE__ */ w.jsx(bE, { size: 21 }),
                        /* @__PURE__ */ w.jsx(oH, { size: 8 })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ w.jsx(
                    jn,
                    {
                      size: "sm",
                      variant: "outline",
                      colorScheme: "teal",
                      "aria-label": "workspace folder",
                      onClick: () => y(),
                      px: 2.5,
                      children: /* @__PURE__ */ w.jsxs($t, { gap: 1, children: [
                        /* @__PURE__ */ w.jsx(SE, { size: 16, color: "white" }),
                        /* @__PURE__ */ w.jsx(nr, { color: "white", fontSize: "sm", children: "New" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ w.jsx(
                    Qd,
                    {
                      variant: "unstyled",
                      placeholder: "Workflow name",
                      color: "white",
                      value: t ?? "",
                      maxWidth: 470,
                      onChange: (h) => {
                        n(h.target.value), p(h.target.value);
                      },
                      style: { width: `${(t == null ? void 0 : t.length) ?? 20}ch` }
                    }
                  )
                ] })
              }
            ),
            r === "recentFlows" && /* @__PURE__ */ w.jsx(
              vY,
              {
                onclose: () => o("root"),
                loadWorkflowID: g,
                onClickNewFlow: () => {
                  y(), o("root");
                }
              }
            )
          ]
        }
      )
    }
  );
}
const oT = document.createElement("div");
document.body.append(oT);
const bY = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, SY = oj({ config: bY });
Hp.createRoot(oT).render(
  /* @__PURE__ */ w.jsx(re.StrictMode, { children: /* @__PURE__ */ w.jsxs(wB, { children: [
    /* @__PURE__ */ w.jsx(mR, { initialColorMode: SY.config.initialColorMode }),
    /* @__PURE__ */ w.jsx(yY, {})
  ] }) })
);
const Im = document.body, xY = { attributes: !0, attributeFilter: ["class"] }, wY = function(e, t) {
  for (const n of e)
    if (n.type === "attributes" && n.attributeName === "class")
      for (const r of Im.classList)
        r.includes("chakra") && Im.classList.remove(r);
}, CY = new MutationObserver(wY);
CY.observe(Im, xY);
