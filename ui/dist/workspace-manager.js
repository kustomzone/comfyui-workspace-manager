import { app as lu } from "/scripts/app.js";
function YO(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const o in n)
        if (o !== "default" && !(o in e)) {
          const a = Object.getOwnPropertyDescriptor(n, o);
          a && Object.defineProperty(e, o, a.get ? a : {
            enumerable: !0,
            get: () => n[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Or = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Sn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var VS = { exports: {} }, Ld = {}, BS = { exports: {} }, fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dl = Symbol.for("react.element"), qO = Symbol.for("react.portal"), KO = Symbol.for("react.fragment"), XO = Symbol.for("react.strict_mode"), QO = Symbol.for("react.profiler"), ZO = Symbol.for("react.provider"), JO = Symbol.for("react.context"), eM = Symbol.for("react.forward_ref"), tM = Symbol.for("react.suspense"), rM = Symbol.for("react.memo"), nM = Symbol.for("react.lazy"), yy = Symbol.iterator;
function oM(e) {
  return e === null || typeof e != "object" ? null : (e = yy && e[yy] || e["@@iterator"], typeof e == "function" ? e : null);
}
var WS = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, US = Object.assign, HS = {};
function Li(e, t, r) {
  this.props = e, this.context = t, this.refs = HS, this.updater = r || WS;
}
Li.prototype.isReactComponent = {};
Li.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Li.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function GS() {
}
GS.prototype = Li.prototype;
function vm(e, t, r) {
  this.props = e, this.context = t, this.refs = HS, this.updater = r || WS;
}
var mm = vm.prototype = new GS();
mm.constructor = vm;
US(mm, Li.prototype);
mm.isPureReactComponent = !0;
var by = Array.isArray, YS = Object.prototype.hasOwnProperty, gm = { current: null }, qS = { key: !0, ref: !0, __self: !0, __source: !0 };
function KS(e, t, r) {
  var n, o = {}, a = null, i = null;
  if (t != null)
    for (n in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (a = "" + t.key), t)
      YS.call(t, n) && !qS.hasOwnProperty(n) && (o[n] = t[n]);
  var s = arguments.length - 2;
  if (s === 1)
    o.children = r;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++)
      l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (n in s = e.defaultProps, s)
      o[n] === void 0 && (o[n] = s[n]);
  return { $$typeof: Dl, type: e, key: a, ref: i, props: o, _owner: gm.current };
}
function aM(e, t) {
  return { $$typeof: Dl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ym(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Dl;
}
function iM(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var wy = /\/+/g;
function Kf(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? iM("" + e.key) : t.toString(36);
}
function qu(e, t, r, n, o) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var i = !1;
  if (e === null)
    i = !0;
  else
    switch (a) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Dl:
          case qO:
            i = !0;
        }
    }
  if (i)
    return i = e, o = o(i), e = n === "" ? "." + Kf(i, 0) : n, by(o) ? (r = "", e != null && (r = e.replace(wy, "$&/") + "/"), qu(o, t, r, "", function(u) {
      return u;
    })) : o != null && (ym(o) && (o = aM(o, r + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(wy, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, n = n === "" ? "." : n + ":", by(e))
    for (var s = 0; s < e.length; s++) {
      a = e[s];
      var l = n + Kf(a, s);
      i += qu(a, t, r, l, o);
    }
  else if (l = oM(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(a = e.next()).done; )
      a = a.value, l = n + Kf(a, s++), i += qu(a, t, r, l, o);
  else if (a === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function uu(e, t, r) {
  if (e == null)
    return e;
  var n = [], o = 0;
  return qu(e, n, "", "", function(a) {
    return t.call(r, a, o++);
  }), n;
}
function sM(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
    }, function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var Ut = { current: null }, Ku = { transition: null }, lM = { ReactCurrentDispatcher: Ut, ReactCurrentBatchConfig: Ku, ReactCurrentOwner: gm };
fe.Children = { map: uu, forEach: function(e, t, r) {
  uu(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return uu(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return uu(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ym(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
fe.Component = Li;
fe.Fragment = KO;
fe.Profiler = QO;
fe.PureComponent = vm;
fe.StrictMode = XO;
fe.Suspense = tM;
fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lM;
fe.cloneElement = function(e, t, r) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = US({}, e.props), o = e.key, a = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, i = gm.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      YS.call(t, l) && !qS.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1)
    n.children = r;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++)
      s[u] = arguments[u + 2];
    n.children = s;
  }
  return { $$typeof: Dl, type: e.type, key: o, ref: a, props: n, _owner: i };
};
fe.createContext = function(e) {
  return e = { $$typeof: JO, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: ZO, _context: e }, e.Consumer = e;
};
fe.createElement = KS;
fe.createFactory = function(e) {
  var t = KS.bind(null, e);
  return t.type = e, t;
};
fe.createRef = function() {
  return { current: null };
};
fe.forwardRef = function(e) {
  return { $$typeof: eM, render: e };
};
fe.isValidElement = ym;
fe.lazy = function(e) {
  return { $$typeof: nM, _payload: { _status: -1, _result: e }, _init: sM };
};
fe.memo = function(e, t) {
  return { $$typeof: rM, type: e, compare: t === void 0 ? null : t };
};
fe.startTransition = function(e) {
  var t = Ku.transition;
  Ku.transition = {};
  try {
    e();
  } finally {
    Ku.transition = t;
  }
};
fe.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
fe.useCallback = function(e, t) {
  return Ut.current.useCallback(e, t);
};
fe.useContext = function(e) {
  return Ut.current.useContext(e);
};
fe.useDebugValue = function() {
};
fe.useDeferredValue = function(e) {
  return Ut.current.useDeferredValue(e);
};
fe.useEffect = function(e, t) {
  return Ut.current.useEffect(e, t);
};
fe.useId = function() {
  return Ut.current.useId();
};
fe.useImperativeHandle = function(e, t, r) {
  return Ut.current.useImperativeHandle(e, t, r);
};
fe.useInsertionEffect = function(e, t) {
  return Ut.current.useInsertionEffect(e, t);
};
fe.useLayoutEffect = function(e, t) {
  return Ut.current.useLayoutEffect(e, t);
};
fe.useMemo = function(e, t) {
  return Ut.current.useMemo(e, t);
};
fe.useReducer = function(e, t, r) {
  return Ut.current.useReducer(e, t, r);
};
fe.useRef = function(e) {
  return Ut.current.useRef(e);
};
fe.useState = function(e) {
  return Ut.current.useState(e);
};
fe.useSyncExternalStore = function(e, t, r) {
  return Ut.current.useSyncExternalStore(e, t, r);
};
fe.useTransition = function() {
  return Ut.current.useTransition();
};
fe.version = "18.2.0";
BS.exports = fe;
var w = BS.exports;
const U = /* @__PURE__ */ Sn(w), xy = /* @__PURE__ */ YO({
  __proto__: null,
  default: U
}, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uM = w, cM = Symbol.for("react.element"), dM = Symbol.for("react.fragment"), fM = Object.prototype.hasOwnProperty, pM = uM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, hM = { key: !0, ref: !0, __self: !0, __source: !0 };
function XS(e, t, r) {
  var n, o = {}, a = null, i = null;
  r !== void 0 && (a = "" + r), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (n in t)
    fM.call(t, n) && !hM.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in t = e.defaultProps, t)
      o[n] === void 0 && (o[n] = t[n]);
  return { $$typeof: cM, type: e, key: a, ref: i, props: o, _owner: pM.current };
}
Ld.Fragment = dM;
Ld.jsx = XS;
Ld.jsxs = XS;
VS.exports = Ld;
var I = VS.exports, Ph = {}, QS = { exports: {} }, yr = {}, ZS = { exports: {} }, JS = {};
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
  function t(R, N) {
    var K = R.length;
    R.push(N);
    e:
      for (; 0 < K; ) {
        var W = K - 1 >>> 1, Q = R[W];
        if (0 < o(Q, N))
          R[W] = N, R[K] = Q, K = W;
        else
          break e;
      }
  }
  function r(R) {
    return R.length === 0 ? null : R[0];
  }
  function n(R) {
    if (R.length === 0)
      return null;
    var N = R[0], K = R.pop();
    if (K !== N) {
      R[0] = K;
      e:
        for (var W = 0, Q = R.length, j = Q >>> 1; W < j; ) {
          var J = 2 * (W + 1) - 1, ce = R[J], se = J + 1, ue = R[se];
          if (0 > o(ce, K))
            se < Q && 0 > o(ue, ce) ? (R[W] = ue, R[se] = K, W = se) : (R[W] = ce, R[J] = K, W = J);
          else if (se < Q && 0 > o(ue, K))
            R[W] = ue, R[se] = K, W = se;
          else
            break e;
        }
    }
    return N;
  }
  function o(R, N) {
    var K = R.sortIndex - N.sortIndex;
    return K !== 0 ? K : R.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function() {
      return a.now();
    };
  } else {
    var i = Date, s = i.now();
    e.unstable_now = function() {
      return i.now() - s;
    };
  }
  var l = [], u = [], c = 1, d = null, f = 3, p = !1, m = !1, g = !1, y = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function b(R) {
    for (var N = r(u); N !== null; ) {
      if (N.callback === null)
        n(u);
      else if (N.startTime <= R)
        n(u), N.sortIndex = N.expirationTime, t(l, N);
      else
        break;
      N = r(u);
    }
  }
  function x(R) {
    if (g = !1, b(R), !m)
      if (r(l) !== null)
        m = !0, B(k);
      else {
        var N = r(u);
        N !== null && Z(x, N.startTime - R);
      }
  }
  function k(R, N) {
    m = !1, g && (g = !1, h(_), _ = -1), p = !0;
    var K = f;
    try {
      for (b(N), d = r(l); d !== null && (!(d.expirationTime > N) || R && !D()); ) {
        var W = d.callback;
        if (typeof W == "function") {
          d.callback = null, f = d.priorityLevel;
          var Q = W(d.expirationTime <= N);
          N = e.unstable_now(), typeof Q == "function" ? d.callback = Q : d === r(l) && n(l), b(N);
        } else
          n(l);
        d = r(l);
      }
      if (d !== null)
        var j = !0;
      else {
        var J = r(u);
        J !== null && Z(x, J.startTime - N), j = !1;
      }
      return j;
    } finally {
      d = null, f = K, p = !1;
    }
  }
  var P = !1, C = null, _ = -1, $ = 5, O = -1;
  function D() {
    return !(e.unstable_now() - O < $);
  }
  function H() {
    if (C !== null) {
      var R = e.unstable_now();
      O = R;
      var N = !0;
      try {
        N = C(!0, R);
      } finally {
        N ? V() : (P = !1, C = null);
      }
    } else
      P = !1;
  }
  var V;
  if (typeof v == "function")
    V = function() {
      v(H);
    };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(), F = L.port2;
    L.port1.onmessage = H, V = function() {
      F.postMessage(null);
    };
  } else
    V = function() {
      y(H, 0);
    };
  function B(R) {
    C = R, P || (P = !0, V());
  }
  function Z(R, N) {
    _ = y(function() {
      R(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, e.unstable_continueExecution = function() {
    m || p || (m = !0, B(k));
  }, e.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < R ? Math.floor(1e3 / R) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return r(l);
  }, e.unstable_next = function(R) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = f;
    }
    var K = f;
    f = N;
    try {
      return R();
    } finally {
      f = K;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(R, N) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var K = f;
    f = R;
    try {
      return N();
    } finally {
      f = K;
    }
  }, e.unstable_scheduleCallback = function(R, N, K) {
    var W = e.unstable_now();
    switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? W + K : W) : K = W, R) {
      case 1:
        var Q = -1;
        break;
      case 2:
        Q = 250;
        break;
      case 5:
        Q = 1073741823;
        break;
      case 4:
        Q = 1e4;
        break;
      default:
        Q = 5e3;
    }
    return Q = K + Q, R = { id: c++, callback: N, priorityLevel: R, startTime: K, expirationTime: Q, sortIndex: -1 }, K > W ? (R.sortIndex = K, t(u, R), r(l) === null && R === r(u) && (g ? (h(_), _ = -1) : g = !0, Z(x, K - W))) : (R.sortIndex = Q, t(l, R), m || p || (m = !0, B(k))), R;
  }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function(R) {
    var N = f;
    return function() {
      var K = f;
      f = N;
      try {
        return R.apply(this, arguments);
      } finally {
        f = K;
      }
    };
  };
})(JS);
ZS.exports = JS;
var vM = ZS.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eC = w, hr = vM;
function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var tC = /* @__PURE__ */ new Set(), el = {};
function ha(e, t) {
  bi(e, t), bi(e + "Capture", t);
}
function bi(e, t) {
  for (el[e] = t, e = 0; e < t.length; e++)
    tC.add(t[e]);
}
var jn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), kh = Object.prototype.hasOwnProperty, mM = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Sy = {}, Cy = {};
function gM(e) {
  return kh.call(Cy, e) ? !0 : kh.call(Sy, e) ? !1 : mM.test(e) ? Cy[e] = !0 : (Sy[e] = !0, !1);
}
function yM(e, t, r, n) {
  if (r !== null && r.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function bM(e, t, r, n) {
  if (t === null || typeof t > "u" || yM(e, t, r, n))
    return !0;
  if (n)
    return !1;
  if (r !== null)
    switch (r.type) {
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
function Ht(e, t, r, n, o, a, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = i;
}
var Et = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Et[e] = new Ht(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Et[t] = new Ht(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Et[e] = new Ht(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Et[e] = new Ht(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Et[e] = new Ht(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Et[e] = new Ht(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Et[e] = new Ht(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Et[e] = new Ht(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Et[e] = new Ht(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bm = /[\-:]([a-z])/g;
function wm(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    bm,
    wm
  );
  Et[t] = new Ht(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(bm, wm);
  Et[t] = new Ht(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(bm, wm);
  Et[t] = new Ht(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Et[e] = new Ht(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Et.xlinkHref = new Ht("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Et[e] = new Ht(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xm(e, t, r, n) {
  var o = Et.hasOwnProperty(t) ? Et[t] : null;
  (o !== null ? o.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (bM(t, r, o, n) && (r = null), n || o === null ? gM(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName, n = o.attributeNamespace, r === null ? e.removeAttribute(t) : (o = o.type, r = o === 3 || o === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var Yn = eC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, cu = Symbol.for("react.element"), Da = Symbol.for("react.portal"), Aa = Symbol.for("react.fragment"), Sm = Symbol.for("react.strict_mode"), _h = Symbol.for("react.profiler"), rC = Symbol.for("react.provider"), nC = Symbol.for("react.context"), Cm = Symbol.for("react.forward_ref"), Th = Symbol.for("react.suspense"), Eh = Symbol.for("react.suspense_list"), Pm = Symbol.for("react.memo"), oo = Symbol.for("react.lazy"), oC = Symbol.for("react.offscreen"), Py = Symbol.iterator;
function Ji(e) {
  return e === null || typeof e != "object" ? null : (e = Py && e[Py] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Qe = Object.assign, Xf;
function xs(e) {
  if (Xf === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Xf = t && t[1] || "";
    }
  return `
` + Xf + e;
}
var Qf = !1;
function Zf(e, t) {
  if (!e || Qf)
    return "";
  Qf = !0;
  var r = Error.prepareStackTrace;
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
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), a = n.stack.split(`
`), i = o.length - 1, s = a.length - 1; 1 <= i && 0 <= s && o[i] !== a[s]; )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (o[i] !== a[s]) {
          if (i !== 1 || s !== 1)
            do
              if (i--, s--, 0 > s || o[i] !== a[s]) {
                var l = `
` + o[i].replace(" at new ", " at ");
                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    Qf = !1, Error.prepareStackTrace = r;
  }
  return (e = e ? e.displayName || e.name : "") ? xs(e) : "";
}
function wM(e) {
  switch (e.tag) {
    case 5:
      return xs(e.type);
    case 16:
      return xs("Lazy");
    case 13:
      return xs("Suspense");
    case 19:
      return xs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Zf(e.type, !1), e;
    case 11:
      return e = Zf(e.type.render, !1), e;
    case 1:
      return e = Zf(e.type, !0), e;
    default:
      return "";
  }
}
function $h(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Aa:
      return "Fragment";
    case Da:
      return "Portal";
    case _h:
      return "Profiler";
    case Sm:
      return "StrictMode";
    case Th:
      return "Suspense";
    case Eh:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case nC:
        return (e.displayName || "Context") + ".Consumer";
      case rC:
        return (e._context.displayName || "Context") + ".Provider";
      case Cm:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Pm:
        return t = e.displayName || null, t !== null ? t : $h(e.type) || "Memo";
      case oo:
        t = e._payload, e = e._init;
        try {
          return $h(e(t));
        } catch {
        }
    }
  return null;
}
function xM(e) {
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
      return $h(t);
    case 8:
      return t === Sm ? "StrictMode" : "Mode";
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
function Po(e) {
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
function aC(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function SM(e) {
  var t = aC(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
    var o = r.get, a = r.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(i) {
      n = "" + i, a.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function() {
      return n;
    }, setValue: function(i) {
      n = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function du(e) {
  e._valueTracker || (e._valueTracker = SM(e));
}
function iC(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var r = t.getValue(), n = "";
  return e && (n = aC(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1;
}
function _c(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Oh(e, t) {
  var r = t.checked;
  return Qe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function ky(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = Po(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function sC(e, t) {
  t = t.checked, t != null && xm(e, "checked", t, !1);
}
function Mh(e, t) {
  sC(e, t);
  var r = Po(t.value), n = t.type;
  if (r != null)
    n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ih(e, t.type, r) : t.hasOwnProperty("defaultValue") && Ih(e, t.type, Po(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function _y(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function Ih(e, t, r) {
  (t !== "number" || _c(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Ss = Array.isArray;
function ni(e, t, r, n) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < r.length; o++)
      t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      o = t.hasOwnProperty("$" + e[r].value), e[r].selected !== o && (e[r].selected = o), o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Po(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        e[o].selected = !0, n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Rh(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(A(91));
  return Qe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ty(e, t) {
  var r = t.value;
  if (r == null) {
    if (r = t.children, t = t.defaultValue, r != null) {
      if (t != null)
        throw Error(A(92));
      if (Ss(r)) {
        if (1 < r.length)
          throw Error(A(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), r = t;
  }
  e._wrapperState = { initialValue: Po(r) };
}
function lC(e, t) {
  var r = Po(t.value), n = Po(t.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function Ey(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function uC(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Dh(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? uC(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var fu, cC = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, r, n, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (fu = fu || document.createElement("div"), fu.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = fu.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function tl(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Is = {
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
}, CM = ["Webkit", "ms", "Moz", "O"];
Object.keys(Is).forEach(function(e) {
  CM.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Is[t] = Is[e];
  });
});
function dC(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Is.hasOwnProperty(e) && Is[e] ? ("" + t).trim() : t + "px";
}
function fC(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0, o = dC(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : e[r] = o;
    }
}
var PM = Qe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ah(e, t) {
  if (t) {
    if (PM[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(A(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(A(62));
  }
}
function Fh(e, t) {
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
var Lh = null;
function km(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Nh = null, oi = null, ai = null;
function $y(e) {
  if (e = Ll(e)) {
    if (typeof Nh != "function")
      throw Error(A(280));
    var t = e.stateNode;
    t && (t = Bd(t), Nh(e.stateNode, e.type, t));
  }
}
function pC(e) {
  oi ? ai ? ai.push(e) : ai = [e] : oi = e;
}
function hC() {
  if (oi) {
    var e = oi, t = ai;
    if (ai = oi = null, $y(e), t)
      for (e = 0; e < t.length; e++)
        $y(t[e]);
  }
}
function vC(e, t) {
  return e(t);
}
function mC() {
}
var Jf = !1;
function gC(e, t, r) {
  if (Jf)
    return e(t, r);
  Jf = !0;
  try {
    return vC(e, t, r);
  } finally {
    Jf = !1, (oi !== null || ai !== null) && (mC(), hC());
  }
}
function rl(e, t) {
  var r = e.stateNode;
  if (r === null)
    return null;
  var n = Bd(r);
  if (n === null)
    return null;
  r = n[t];
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
        (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (r && typeof r != "function")
    throw Error(A(231, t, typeof r));
  return r;
}
var zh = !1;
if (jn)
  try {
    var es = {};
    Object.defineProperty(es, "passive", { get: function() {
      zh = !0;
    } }), window.addEventListener("test", es, es), window.removeEventListener("test", es, es);
  } catch {
    zh = !1;
  }
function kM(e, t, r, n, o, a, i, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var Rs = !1, Tc = null, Ec = !1, jh = null, _M = { onError: function(e) {
  Rs = !0, Tc = e;
} };
function TM(e, t, r, n, o, a, i, s, l) {
  Rs = !1, Tc = null, kM.apply(_M, arguments);
}
function EM(e, t, r, n, o, a, i, s, l) {
  if (TM.apply(this, arguments), Rs) {
    if (Rs) {
      var u = Tc;
      Rs = !1, Tc = null;
    } else
      throw Error(A(198));
    Ec || (Ec = !0, jh = u);
  }
}
function va(e) {
  var t = e, r = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (r = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function yC(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Oy(e) {
  if (va(e) !== e)
    throw Error(A(188));
}
function $M(e) {
  var t = e.alternate;
  if (!t) {
    if (t = va(e), t === null)
      throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var o = r.return;
    if (o === null)
      break;
    var a = o.alternate;
    if (a === null) {
      if (n = o.return, n !== null) {
        r = n;
        continue;
      }
      break;
    }
    if (o.child === a.child) {
      for (a = o.child; a; ) {
        if (a === r)
          return Oy(o), e;
        if (a === n)
          return Oy(o), t;
        a = a.sibling;
      }
      throw Error(A(188));
    }
    if (r.return !== n.return)
      r = o, n = a;
    else {
      for (var i = !1, s = o.child; s; ) {
        if (s === r) {
          i = !0, r = o, n = a;
          break;
        }
        if (s === n) {
          i = !0, n = o, r = a;
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = a.child; s; ) {
          if (s === r) {
            i = !0, r = a, n = o;
            break;
          }
          if (s === n) {
            i = !0, n = a, r = o;
            break;
          }
          s = s.sibling;
        }
        if (!i)
          throw Error(A(189));
      }
    }
    if (r.alternate !== n)
      throw Error(A(190));
  }
  if (r.tag !== 3)
    throw Error(A(188));
  return r.stateNode.current === r ? e : t;
}
function bC(e) {
  return e = $M(e), e !== null ? wC(e) : null;
}
function wC(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = wC(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var xC = hr.unstable_scheduleCallback, My = hr.unstable_cancelCallback, OM = hr.unstable_shouldYield, MM = hr.unstable_requestPaint, st = hr.unstable_now, IM = hr.unstable_getCurrentPriorityLevel, _m = hr.unstable_ImmediatePriority, SC = hr.unstable_UserBlockingPriority, $c = hr.unstable_NormalPriority, RM = hr.unstable_LowPriority, CC = hr.unstable_IdlePriority, Nd = null, hn = null;
function DM(e) {
  if (hn && typeof hn.onCommitFiberRoot == "function")
    try {
      hn.onCommitFiberRoot(Nd, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var qr = Math.clz32 ? Math.clz32 : LM, AM = Math.log, FM = Math.LN2;
function LM(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (AM(e) / FM | 0) | 0;
}
var pu = 64, hu = 4194304;
function Cs(e) {
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
function Oc(e, t) {
  var r = e.pendingLanes;
  if (r === 0)
    return 0;
  var n = 0, o = e.suspendedLanes, a = e.pingedLanes, i = r & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? n = Cs(s) : (a &= i, a !== 0 && (n = Cs(a)));
  } else
    i = r & ~o, i !== 0 ? n = Cs(i) : a !== 0 && (n = Cs(a));
  if (n === 0)
    return 0;
  if (t !== 0 && t !== n && !(t & o) && (o = n & -n, a = t & -t, o >= a || o === 16 && (a & 4194240) !== 0))
    return t;
  if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= n; 0 < t; )
      r = 31 - qr(t), o = 1 << r, n |= e[r], t &= ~o;
  return n;
}
function NM(e, t) {
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
function zM(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var i = 31 - qr(a), s = 1 << i, l = o[i];
    l === -1 ? (!(s & r) || s & n) && (o[i] = NM(s, t)) : l <= t && (e.expiredLanes |= s), a &= ~s;
  }
}
function Vh(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function PC() {
  var e = pu;
  return pu <<= 1, !(pu & 4194240) && (pu = 64), e;
}
function ep(e) {
  for (var t = [], r = 0; 31 > r; r++)
    t.push(e);
  return t;
}
function Al(e, t, r) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - qr(t), e[t] = r;
}
function jM(e, t) {
  var r = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - qr(r), a = 1 << o;
    t[o] = 0, n[o] = -1, e[o] = -1, r &= ~a;
  }
}
function Tm(e, t) {
  var r = e.entangledLanes |= t;
  for (e = e.entanglements; r; ) {
    var n = 31 - qr(r), o = 1 << n;
    o & t | e[n] & t && (e[n] |= t), r &= ~o;
  }
}
var Oe = 0;
function kC(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var _C, Em, TC, EC, $C, Bh = !1, vu = [], ho = null, vo = null, mo = null, nl = /* @__PURE__ */ new Map(), ol = /* @__PURE__ */ new Map(), so = [], VM = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Iy(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ho = null;
      break;
    case "dragenter":
    case "dragleave":
      vo = null;
      break;
    case "mouseover":
    case "mouseout":
      mo = null;
      break;
    case "pointerover":
    case "pointerout":
      nl.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ol.delete(t.pointerId);
  }
}
function ts(e, t, r, n, o, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: a, targetContainers: [o] }, t !== null && (t = Ll(t), t !== null && Em(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function BM(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return ho = ts(ho, e, t, r, n, o), !0;
    case "dragenter":
      return vo = ts(vo, e, t, r, n, o), !0;
    case "mouseover":
      return mo = ts(mo, e, t, r, n, o), !0;
    case "pointerover":
      var a = o.pointerId;
      return nl.set(a, ts(nl.get(a) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return a = o.pointerId, ol.set(a, ts(ol.get(a) || null, e, t, r, n, o)), !0;
  }
  return !1;
}
function OC(e) {
  var t = Ko(e.target);
  if (t !== null) {
    var r = va(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = yC(r), t !== null) {
          e.blockedOn = t, $C(e.priority, function() {
            TC(r);
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
function Xu(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Wh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      Lh = n, r.target.dispatchEvent(n), Lh = null;
    } else
      return t = Ll(r), t !== null && Em(t), e.blockedOn = r, !1;
    t.shift();
  }
  return !0;
}
function Ry(e, t, r) {
  Xu(e) && r.delete(t);
}
function WM() {
  Bh = !1, ho !== null && Xu(ho) && (ho = null), vo !== null && Xu(vo) && (vo = null), mo !== null && Xu(mo) && (mo = null), nl.forEach(Ry), ol.forEach(Ry);
}
function rs(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Bh || (Bh = !0, hr.unstable_scheduleCallback(hr.unstable_NormalPriority, WM)));
}
function al(e) {
  function t(o) {
    return rs(o, e);
  }
  if (0 < vu.length) {
    rs(vu[0], e);
    for (var r = 1; r < vu.length; r++) {
      var n = vu[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (ho !== null && rs(ho, e), vo !== null && rs(vo, e), mo !== null && rs(mo, e), nl.forEach(t), ol.forEach(t), r = 0; r < so.length; r++)
    n = so[r], n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < so.length && (r = so[0], r.blockedOn === null); )
    OC(r), r.blockedOn === null && so.shift();
}
var ii = Yn.ReactCurrentBatchConfig, Mc = !0;
function UM(e, t, r, n) {
  var o = Oe, a = ii.transition;
  ii.transition = null;
  try {
    Oe = 1, $m(e, t, r, n);
  } finally {
    Oe = o, ii.transition = a;
  }
}
function HM(e, t, r, n) {
  var o = Oe, a = ii.transition;
  ii.transition = null;
  try {
    Oe = 4, $m(e, t, r, n);
  } finally {
    Oe = o, ii.transition = a;
  }
}
function $m(e, t, r, n) {
  if (Mc) {
    var o = Wh(e, t, r, n);
    if (o === null)
      cp(e, t, n, Ic, r), Iy(e, n);
    else if (BM(o, e, t, r, n))
      n.stopPropagation();
    else if (Iy(e, n), t & 4 && -1 < VM.indexOf(e)) {
      for (; o !== null; ) {
        var a = Ll(o);
        if (a !== null && _C(a), a = Wh(e, t, r, n), a === null && cp(e, t, n, Ic, r), a === o)
          break;
        o = a;
      }
      o !== null && n.stopPropagation();
    } else
      cp(e, t, n, null, r);
  }
}
var Ic = null;
function Wh(e, t, r, n) {
  if (Ic = null, e = km(n), e = Ko(e), e !== null)
    if (t = va(e), t === null)
      e = null;
    else if (r = t.tag, r === 13) {
      if (e = yC(t), e !== null)
        return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Ic = e, null;
}
function MC(e) {
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
      switch (IM()) {
        case _m:
          return 1;
        case SC:
          return 4;
        case $c:
        case RM:
          return 16;
        case CC:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var co = null, Om = null, Qu = null;
function IC() {
  if (Qu)
    return Qu;
  var e, t = Om, r = t.length, n, o = "value" in co ? co.value : co.textContent, a = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++)
    ;
  var i = r - e;
  for (n = 1; n <= i && t[r - n] === o[a - n]; n++)
    ;
  return Qu = o.slice(e, 1 < n ? 1 - n : void 0);
}
function Zu(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function mu() {
  return !0;
}
function Dy() {
  return !1;
}
function br(e) {
  function t(r, n, o, a, i) {
    this._reactName = r, this._targetInst = o, this.type = n, this.nativeEvent = a, this.target = i, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (r = e[s], this[s] = r ? r(a) : a[s]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? mu : Dy, this.isPropagationStopped = Dy, this;
  }
  return Qe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = mu);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = mu);
  }, persist: function() {
  }, isPersistent: mu }), t;
}
var Ni = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Mm = br(Ni), Fl = Qe({}, Ni, { view: 0, detail: 0 }), GM = br(Fl), tp, rp, ns, zd = Qe({}, Fl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Im, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ns && (ns && e.type === "mousemove" ? (tp = e.screenX - ns.screenX, rp = e.screenY - ns.screenY) : rp = tp = 0, ns = e), tp);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : rp;
} }), Ay = br(zd), YM = Qe({}, zd, { dataTransfer: 0 }), qM = br(YM), KM = Qe({}, Fl, { relatedTarget: 0 }), np = br(KM), XM = Qe({}, Ni, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), QM = br(XM), ZM = Qe({}, Ni, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), JM = br(ZM), eI = Qe({}, Ni, { data: 0 }), Fy = br(eI), tI = {
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
}, rI = {
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
}, nI = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function oI(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = nI[e]) ? !!t[e] : !1;
}
function Im() {
  return oI;
}
var aI = Qe({}, Fl, { key: function(e) {
  if (e.key) {
    var t = tI[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Zu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? rI[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Im, charCode: function(e) {
  return e.type === "keypress" ? Zu(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Zu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), iI = br(aI), sI = Qe({}, zd, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ly = br(sI), lI = Qe({}, Fl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Im }), uI = br(lI), cI = Qe({}, Ni, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), dI = br(cI), fI = Qe({}, zd, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), pI = br(fI), hI = [9, 13, 27, 32], Rm = jn && "CompositionEvent" in window, Ds = null;
jn && "documentMode" in document && (Ds = document.documentMode);
var vI = jn && "TextEvent" in window && !Ds, RC = jn && (!Rm || Ds && 8 < Ds && 11 >= Ds), Ny = " ", zy = !1;
function DC(e, t) {
  switch (e) {
    case "keyup":
      return hI.indexOf(t.keyCode) !== -1;
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
function AC(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Fa = !1;
function mI(e, t) {
  switch (e) {
    case "compositionend":
      return AC(t);
    case "keypress":
      return t.which !== 32 ? null : (zy = !0, Ny);
    case "textInput":
      return e = t.data, e === Ny && zy ? null : e;
    default:
      return null;
  }
}
function gI(e, t) {
  if (Fa)
    return e === "compositionend" || !Rm && DC(e, t) ? (e = IC(), Qu = Om = co = null, Fa = !1, e) : null;
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
      return RC && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var yI = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function jy(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!yI[e.type] : t === "textarea";
}
function FC(e, t, r, n) {
  pC(n), t = Rc(t, "onChange"), 0 < t.length && (r = new Mm("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
}
var As = null, il = null;
function bI(e) {
  YC(e, 0);
}
function jd(e) {
  var t = za(e);
  if (iC(t))
    return e;
}
function wI(e, t) {
  if (e === "change")
    return t;
}
var LC = !1;
if (jn) {
  var op;
  if (jn) {
    var ap = "oninput" in document;
    if (!ap) {
      var Vy = document.createElement("div");
      Vy.setAttribute("oninput", "return;"), ap = typeof Vy.oninput == "function";
    }
    op = ap;
  } else
    op = !1;
  LC = op && (!document.documentMode || 9 < document.documentMode);
}
function By() {
  As && (As.detachEvent("onpropertychange", NC), il = As = null);
}
function NC(e) {
  if (e.propertyName === "value" && jd(il)) {
    var t = [];
    FC(t, il, e, km(e)), gC(bI, t);
  }
}
function xI(e, t, r) {
  e === "focusin" ? (By(), As = t, il = r, As.attachEvent("onpropertychange", NC)) : e === "focusout" && By();
}
function SI(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return jd(il);
}
function CI(e, t) {
  if (e === "click")
    return jd(t);
}
function PI(e, t) {
  if (e === "input" || e === "change")
    return jd(t);
}
function kI(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Qr = typeof Object.is == "function" ? Object.is : kI;
function sl(e, t) {
  if (Qr(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!kh.call(t, o) || !Qr(e[o], t[o]))
      return !1;
  }
  return !0;
}
function Wy(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Uy(e, t) {
  var r = Wy(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (n = e + r.textContent.length, e <= t && n >= t)
        return { node: r, offset: t - e };
      e = n;
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
    r = Wy(r);
  }
}
function zC(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zC(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function jC() {
  for (var e = window, t = _c(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r)
      e = t.contentWindow;
    else
      break;
    t = _c(e.document);
  }
  return t;
}
function Dm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function _I(e) {
  var t = jC(), r = e.focusedElem, n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && zC(r.ownerDocument.documentElement, r)) {
    if (n !== null && Dm(r)) {
      if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r)
        r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = r.textContent.length, a = Math.min(n.start, o);
        n = n.end === void 0 ? a : Math.min(n.end, o), !e.extend && a > n && (o = n, n = a, a = o), o = Uy(r, a);
        var i = Uy(
          r,
          n
        );
        o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), a > n ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var TI = jn && "documentMode" in document && 11 >= document.documentMode, La = null, Uh = null, Fs = null, Hh = !1;
function Hy(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Hh || La == null || La !== _c(n) || (n = La, "selectionStart" in n && Dm(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Fs && sl(Fs, n) || (Fs = n, n = Rc(Uh, "onSelect"), 0 < n.length && (t = new Mm("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = La)));
}
function gu(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
}
var Na = { animationend: gu("Animation", "AnimationEnd"), animationiteration: gu("Animation", "AnimationIteration"), animationstart: gu("Animation", "AnimationStart"), transitionend: gu("Transition", "TransitionEnd") }, ip = {}, VC = {};
jn && (VC = document.createElement("div").style, "AnimationEvent" in window || (delete Na.animationend.animation, delete Na.animationiteration.animation, delete Na.animationstart.animation), "TransitionEvent" in window || delete Na.transitionend.transition);
function Vd(e) {
  if (ip[e])
    return ip[e];
  if (!Na[e])
    return e;
  var t = Na[e], r;
  for (r in t)
    if (t.hasOwnProperty(r) && r in VC)
      return ip[e] = t[r];
  return e;
}
var BC = Vd("animationend"), WC = Vd("animationiteration"), UC = Vd("animationstart"), HC = Vd("transitionend"), GC = /* @__PURE__ */ new Map(), Gy = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Eo(e, t) {
  GC.set(e, t), ha(t, [e]);
}
for (var sp = 0; sp < Gy.length; sp++) {
  var lp = Gy[sp], EI = lp.toLowerCase(), $I = lp[0].toUpperCase() + lp.slice(1);
  Eo(EI, "on" + $I);
}
Eo(BC, "onAnimationEnd");
Eo(WC, "onAnimationIteration");
Eo(UC, "onAnimationStart");
Eo("dblclick", "onDoubleClick");
Eo("focusin", "onFocus");
Eo("focusout", "onBlur");
Eo(HC, "onTransitionEnd");
bi("onMouseEnter", ["mouseout", "mouseover"]);
bi("onMouseLeave", ["mouseout", "mouseover"]);
bi("onPointerEnter", ["pointerout", "pointerover"]);
bi("onPointerLeave", ["pointerout", "pointerover"]);
ha("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ha("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ha("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ha("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ha("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ha("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ps = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), OI = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ps));
function Yy(e, t, r) {
  var n = e.type || "unknown-event";
  e.currentTarget = r, EM(n, t, void 0, e), e.currentTarget = null;
}
function YC(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], o = n.event;
    n = n.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var i = n.length - 1; 0 <= i; i--) {
          var s = n[i], l = s.instance, u = s.currentTarget;
          if (s = s.listener, l !== a && o.isPropagationStopped())
            break e;
          Yy(o, s, u), a = l;
        }
      else
        for (i = 0; i < n.length; i++) {
          if (s = n[i], l = s.instance, u = s.currentTarget, s = s.listener, l !== a && o.isPropagationStopped())
            break e;
          Yy(o, s, u), a = l;
        }
    }
  }
  if (Ec)
    throw e = jh, Ec = !1, jh = null, e;
}
function Ne(e, t) {
  var r = t[Xh];
  r === void 0 && (r = t[Xh] = /* @__PURE__ */ new Set());
  var n = e + "__bubble";
  r.has(n) || (qC(t, e, 2, !1), r.add(n));
}
function up(e, t, r) {
  var n = 0;
  t && (n |= 4), qC(r, e, n, t);
}
var yu = "_reactListening" + Math.random().toString(36).slice(2);
function ll(e) {
  if (!e[yu]) {
    e[yu] = !0, tC.forEach(function(r) {
      r !== "selectionchange" && (OI.has(r) || up(r, !1, e), up(r, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yu] || (t[yu] = !0, up("selectionchange", !1, t));
  }
}
function qC(e, t, r, n) {
  switch (MC(t)) {
    case 1:
      var o = UM;
      break;
    case 4:
      o = HM;
      break;
    default:
      o = $m;
  }
  r = o.bind(null, t, r, e), o = void 0, !zh || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), n ? o !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: o }) : e.addEventListener(t, r, !0) : o !== void 0 ? e.addEventListener(t, r, { passive: o }) : e.addEventListener(t, r, !1);
}
function cp(e, t, r, n, o) {
  var a = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e:
      for (; ; ) {
        if (n === null)
          return;
        var i = n.tag;
        if (i === 3 || i === 4) {
          var s = n.stateNode.containerInfo;
          if (s === o || s.nodeType === 8 && s.parentNode === o)
            break;
          if (i === 4)
            for (i = n.return; i !== null; ) {
              var l = i.tag;
              if ((l === 3 || l === 4) && (l = i.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o))
                return;
              i = i.return;
            }
          for (; s !== null; ) {
            if (i = Ko(s), i === null)
              return;
            if (l = i.tag, l === 5 || l === 6) {
              n = a = i;
              continue e;
            }
            s = s.parentNode;
          }
        }
        n = n.return;
      }
  gC(function() {
    var u = a, c = km(r), d = [];
    e: {
      var f = GC.get(e);
      if (f !== void 0) {
        var p = Mm, m = e;
        switch (e) {
          case "keypress":
            if (Zu(r) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = iI;
            break;
          case "focusin":
            m = "focus", p = np;
            break;
          case "focusout":
            m = "blur", p = np;
            break;
          case "beforeblur":
          case "afterblur":
            p = np;
            break;
          case "click":
            if (r.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = Ay;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = qM;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = uI;
            break;
          case BC:
          case WC:
          case UC:
            p = QM;
            break;
          case HC:
            p = dI;
            break;
          case "scroll":
            p = GM;
            break;
          case "wheel":
            p = pI;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = JM;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Ly;
        }
        var g = (t & 4) !== 0, y = !g && e === "scroll", h = g ? f !== null ? f + "Capture" : null : f;
        g = [];
        for (var v = u, b; v !== null; ) {
          b = v;
          var x = b.stateNode;
          if (b.tag === 5 && x !== null && (b = x, h !== null && (x = rl(v, h), x != null && g.push(ul(v, x, b)))), y)
            break;
          v = v.return;
        }
        0 < g.length && (f = new p(f, m, null, r, c), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && r !== Lh && (m = r.relatedTarget || r.fromElement) && (Ko(m) || m[Vn]))
          break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (m = r.relatedTarget || r.toElement, p = u, m = m ? Ko(m) : null, m !== null && (y = va(m), m !== y || m.tag !== 5 && m.tag !== 6) && (m = null)) : (p = null, m = u), p !== m)) {
          if (g = Ay, x = "onMouseLeave", h = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (g = Ly, x = "onPointerLeave", h = "onPointerEnter", v = "pointer"), y = p == null ? f : za(p), b = m == null ? f : za(m), f = new g(x, v + "leave", p, r, c), f.target = y, f.relatedTarget = b, x = null, Ko(c) === u && (g = new g(h, v + "enter", m, r, c), g.target = b, g.relatedTarget = y, x = g), y = x, p && m)
            t: {
              for (g = p, h = m, v = 0, b = g; b; b = ka(b))
                v++;
              for (b = 0, x = h; x; x = ka(x))
                b++;
              for (; 0 < v - b; )
                g = ka(g), v--;
              for (; 0 < b - v; )
                h = ka(h), b--;
              for (; v--; ) {
                if (g === h || h !== null && g === h.alternate)
                  break t;
                g = ka(g), h = ka(h);
              }
              g = null;
            }
          else
            g = null;
          p !== null && qy(d, f, p, g, !1), m !== null && y !== null && qy(d, y, m, g, !0);
        }
      }
      e: {
        if (f = u ? za(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var k = wI;
        else if (jy(f))
          if (LC)
            k = PI;
          else {
            k = SI;
            var P = xI;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = CI);
        if (k && (k = k(e, u))) {
          FC(d, k, r, c);
          break e;
        }
        P && P(e, f, u), e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && Ih(f, "number", f.value);
      }
      switch (P = u ? za(u) : window, e) {
        case "focusin":
          (jy(P) || P.contentEditable === "true") && (La = P, Uh = u, Fs = null);
          break;
        case "focusout":
          Fs = Uh = La = null;
          break;
        case "mousedown":
          Hh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Hh = !1, Hy(d, r, c);
          break;
        case "selectionchange":
          if (TI)
            break;
        case "keydown":
        case "keyup":
          Hy(d, r, c);
      }
      var C;
      if (Rm)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Fa ? DC(e, r) && (_ = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (_ = "onCompositionStart");
      _ && (RC && r.locale !== "ko" && (Fa || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Fa && (C = IC()) : (co = c, Om = "value" in co ? co.value : co.textContent, Fa = !0)), P = Rc(u, _), 0 < P.length && (_ = new Fy(_, e, null, r, c), d.push({ event: _, listeners: P }), C ? _.data = C : (C = AC(r), C !== null && (_.data = C)))), (C = vI ? mI(e, r) : gI(e, r)) && (u = Rc(u, "onBeforeInput"), 0 < u.length && (c = new Fy("onBeforeInput", "beforeinput", null, r, c), d.push({ event: c, listeners: u }), c.data = C));
    }
    YC(d, t);
  });
}
function ul(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Rc(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e, a = o.stateNode;
    o.tag === 5 && a !== null && (o = a, a = rl(e, r), a != null && n.unshift(ul(e, a, o)), a = rl(e, t), a != null && n.push(ul(e, a, o))), e = e.return;
  }
  return n;
}
function ka(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qy(e, t, r, n, o) {
  for (var a = t._reactName, i = []; r !== null && r !== n; ) {
    var s = r, l = s.alternate, u = s.stateNode;
    if (l !== null && l === n)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = rl(r, a), l != null && i.unshift(ul(r, l, s))) : o || (l = rl(r, a), l != null && i.push(ul(r, l, s)))), r = r.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var MI = /\r\n?/g, II = /\u0000|\uFFFD/g;
function Ky(e) {
  return (typeof e == "string" ? e : "" + e).replace(MI, `
`).replace(II, "");
}
function bu(e, t, r) {
  if (t = Ky(t), Ky(e) !== t && r)
    throw Error(A(425));
}
function Dc() {
}
var Gh = null, Yh = null;
function qh(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Kh = typeof setTimeout == "function" ? setTimeout : void 0, RI = typeof clearTimeout == "function" ? clearTimeout : void 0, Xy = typeof Promise == "function" ? Promise : void 0, DI = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xy < "u" ? function(e) {
  return Xy.resolve(null).then(e).catch(AI);
} : Kh;
function AI(e) {
  setTimeout(function() {
    throw e;
  });
}
function dp(e, t) {
  var r = t, n = 0;
  do {
    var o = r.nextSibling;
    if (e.removeChild(r), o && o.nodeType === 8)
      if (r = o.data, r === "/$") {
        if (n === 0) {
          e.removeChild(o), al(t);
          return;
        }
        n--;
      } else
        r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = o;
  } while (r);
  al(t);
}
function go(e) {
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
function Qy(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var zi = Math.random().toString(36).slice(2), cn = "__reactFiber$" + zi, cl = "__reactProps$" + zi, Vn = "__reactContainer$" + zi, Xh = "__reactEvents$" + zi, FI = "__reactListeners$" + zi, LI = "__reactHandles$" + zi;
function Ko(e) {
  var t = e[cn];
  if (t)
    return t;
  for (var r = e.parentNode; r; ) {
    if (t = r[Vn] || r[cn]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
        for (e = Qy(e); e !== null; ) {
          if (r = e[cn])
            return r;
          e = Qy(e);
        }
      return t;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function Ll(e) {
  return e = e[cn] || e[Vn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function za(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(A(33));
}
function Bd(e) {
  return e[cl] || null;
}
var Qh = [], ja = -1;
function $o(e) {
  return { current: e };
}
function Ve(e) {
  0 > ja || (e.current = Qh[ja], Qh[ja] = null, ja--);
}
function De(e, t) {
  ja++, Qh[ja] = e.current, e.current = t;
}
var ko = {}, Ft = $o(ko), Xt = $o(!1), ia = ko;
function wi(e, t) {
  var r = e.type.contextTypes;
  if (!r)
    return ko;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {}, a;
  for (a in r)
    o[a] = t[a];
  return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Qt(e) {
  return e = e.childContextTypes, e != null;
}
function Ac() {
  Ve(Xt), Ve(Ft);
}
function Zy(e, t, r) {
  if (Ft.current !== ko)
    throw Error(A(168));
  De(Ft, t), De(Xt, r);
}
function KC(e, t, r) {
  var n = e.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function")
    return r;
  n = n.getChildContext();
  for (var o in n)
    if (!(o in t))
      throw Error(A(108, xM(e) || "Unknown", o));
  return Qe({}, r, n);
}
function Fc(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ko, ia = Ft.current, De(Ft, e), De(Xt, Xt.current), !0;
}
function Jy(e, t, r) {
  var n = e.stateNode;
  if (!n)
    throw Error(A(169));
  r ? (e = KC(e, t, ia), n.__reactInternalMemoizedMergedChildContext = e, Ve(Xt), Ve(Ft), De(Ft, e)) : Ve(Xt), De(Xt, r);
}
var Tn = null, Wd = !1, fp = !1;
function XC(e) {
  Tn === null ? Tn = [e] : Tn.push(e);
}
function NI(e) {
  Wd = !0, XC(e);
}
function Oo() {
  if (!fp && Tn !== null) {
    fp = !0;
    var e = 0, t = Oe;
    try {
      var r = Tn;
      for (Oe = 1; e < r.length; e++) {
        var n = r[e];
        do
          n = n(!0);
        while (n !== null);
      }
      Tn = null, Wd = !1;
    } catch (o) {
      throw Tn !== null && (Tn = Tn.slice(e + 1)), xC(_m, Oo), o;
    } finally {
      Oe = t, fp = !1;
    }
  }
  return null;
}
var Va = [], Ba = 0, Lc = null, Nc = 0, Er = [], $r = 0, sa = null, On = 1, Mn = "";
function Vo(e, t) {
  Va[Ba++] = Nc, Va[Ba++] = Lc, Lc = e, Nc = t;
}
function QC(e, t, r) {
  Er[$r++] = On, Er[$r++] = Mn, Er[$r++] = sa, sa = e;
  var n = On;
  e = Mn;
  var o = 32 - qr(n) - 1;
  n &= ~(1 << o), r += 1;
  var a = 32 - qr(t) + o;
  if (30 < a) {
    var i = o - o % 5;
    a = (n & (1 << i) - 1).toString(32), n >>= i, o -= i, On = 1 << 32 - qr(t) + o | r << o | n, Mn = a + e;
  } else
    On = 1 << a | r << o | n, Mn = e;
}
function Am(e) {
  e.return !== null && (Vo(e, 1), QC(e, 1, 0));
}
function Fm(e) {
  for (; e === Lc; )
    Lc = Va[--Ba], Va[Ba] = null, Nc = Va[--Ba], Va[Ba] = null;
  for (; e === sa; )
    sa = Er[--$r], Er[$r] = null, Mn = Er[--$r], Er[$r] = null, On = Er[--$r], Er[$r] = null;
}
var dr = null, cr = null, He = !1, Ur = null;
function ZC(e, t) {
  var r = Mr(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
}
function eb(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, dr = e, cr = go(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, dr = e, cr = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = sa !== null ? { id: On, overflow: Mn } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Mr(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, dr = e, cr = null, !0) : !1;
    default:
      return !1;
  }
}
function Zh(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Jh(e) {
  if (He) {
    var t = cr;
    if (t) {
      var r = t;
      if (!eb(e, t)) {
        if (Zh(e))
          throw Error(A(418));
        t = go(r.nextSibling);
        var n = dr;
        t && eb(e, t) ? ZC(n, r) : (e.flags = e.flags & -4097 | 2, He = !1, dr = e);
      }
    } else {
      if (Zh(e))
        throw Error(A(418));
      e.flags = e.flags & -4097 | 2, He = !1, dr = e;
    }
  }
}
function tb(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  dr = e;
}
function wu(e) {
  if (e !== dr)
    return !1;
  if (!He)
    return tb(e), He = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !qh(e.type, e.memoizedProps)), t && (t = cr)) {
    if (Zh(e))
      throw JC(), Error(A(418));
    for (; t; )
      ZC(e, t), t = go(t.nextSibling);
  }
  if (tb(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              cr = go(e.nextSibling);
              break e;
            }
            t--;
          } else
            r !== "$" && r !== "$!" && r !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      cr = null;
    }
  } else
    cr = dr ? go(e.stateNode.nextSibling) : null;
  return !0;
}
function JC() {
  for (var e = cr; e; )
    e = go(e.nextSibling);
}
function xi() {
  cr = dr = null, He = !1;
}
function Lm(e) {
  Ur === null ? Ur = [e] : Ur.push(e);
}
var zI = Yn.ReactCurrentBatchConfig;
function Br(e, t) {
  if (e && e.defaultProps) {
    t = Qe({}, t), e = e.defaultProps;
    for (var r in e)
      t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var zc = $o(null), jc = null, Wa = null, Nm = null;
function zm() {
  Nm = Wa = jc = null;
}
function jm(e) {
  var t = zc.current;
  Ve(zc), e._currentValue = t;
}
function ev(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r)
      break;
    e = e.return;
  }
}
function si(e, t) {
  jc = e, Nm = Wa = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Kt = !0), e.firstContext = null);
}
function Ar(e) {
  var t = e._currentValue;
  if (Nm !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Wa === null) {
      if (jc === null)
        throw Error(A(308));
      Wa = e, jc.dependencies = { lanes: 0, firstContext: e };
    } else
      Wa = Wa.next = e;
  return t;
}
var Xo = null;
function Vm(e) {
  Xo === null ? Xo = [e] : Xo.push(e);
}
function eP(e, t, r, n) {
  var o = t.interleaved;
  return o === null ? (r.next = r, Vm(t)) : (r.next = o.next, o.next = r), t.interleaved = r, Bn(e, n);
}
function Bn(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var ao = !1;
function Bm(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function tP(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function An(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function yo(e, t, r) {
  var n = e.updateQueue;
  if (n === null)
    return null;
  if (n = n.shared, we & 2) {
    var o = n.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), n.pending = t, Bn(e, r);
  }
  return o = n.interleaved, o === null ? (t.next = t, Vm(n)) : (t.next = o.next, o.next = t), n.interleaved = t, Bn(e, r);
}
function Ju(e, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, Tm(e, r);
  }
}
function rb(e, t) {
  var r = e.updateQueue, n = e.alternate;
  if (n !== null && (n = n.updateQueue, r === n)) {
    var o = null, a = null;
    if (r = r.firstBaseUpdate, r !== null) {
      do {
        var i = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
        a === null ? o = a = i : a = a.next = i, r = r.next;
      } while (r !== null);
      a === null ? o = a = t : a = a.next = t;
    } else
      o = a = t;
    r = { baseState: n.baseState, firstBaseUpdate: o, lastBaseUpdate: a, shared: n.shared, effects: n.effects }, e.updateQueue = r;
    return;
  }
  e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
}
function Vc(e, t, r, n) {
  var o = e.updateQueue;
  ao = !1;
  var a = o.firstBaseUpdate, i = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s, u = l.next;
    l.next = null, i === null ? a = u : i.next = u, i = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== i && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l));
  }
  if (a !== null) {
    var d = o.baseState;
    i = 0, c = u = l = null, s = a;
    do {
      var f = s.lane, p = s.eventTime;
      if ((n & f) === f) {
        c !== null && (c = c.next = {
          eventTime: p,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var m = e, g = s;
          switch (f = t, p = r, g.tag) {
            case 1:
              if (m = g.payload, typeof m == "function") {
                d = m.call(p, d, f);
                break e;
              }
              d = m;
              break e;
            case 3:
              m.flags = m.flags & -65537 | 128;
            case 0:
              if (m = g.payload, f = typeof m == "function" ? m.call(p, d, f) : m, f == null)
                break e;
              d = Qe({}, d, f);
              break e;
            case 2:
              ao = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [s] : f.push(s));
      } else
        p = { eventTime: p, lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = p, l = d) : c = c.next = p, i |= f;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null)
          break;
        f = s, s = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = d), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        i |= o.lane, o = o.next;
      while (o !== t);
    } else
      a === null && (o.shared.lanes = 0);
    ua |= i, e.lanes = i, e.memoizedState = d;
  }
}
function nb(e, t, r) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var n = e[t], o = n.callback;
      if (o !== null) {
        if (n.callback = null, n = r, typeof o != "function")
          throw Error(A(191, o));
        o.call(n);
      }
    }
}
var rP = new eC.Component().refs;
function tv(e, t, r, n) {
  t = e.memoizedState, r = r(n, t), r = r == null ? t : Qe({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Ud = { isMounted: function(e) {
  return (e = e._reactInternals) ? va(e) === e : !1;
}, enqueueSetState: function(e, t, r) {
  e = e._reactInternals;
  var n = Bt(), o = wo(e), a = An(n, o);
  a.payload = t, r != null && (a.callback = r), t = yo(e, a, o), t !== null && (Kr(t, e, o, n), Ju(t, e, o));
}, enqueueReplaceState: function(e, t, r) {
  e = e._reactInternals;
  var n = Bt(), o = wo(e), a = An(n, o);
  a.tag = 1, a.payload = t, r != null && (a.callback = r), t = yo(e, a, o), t !== null && (Kr(t, e, o, n), Ju(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var r = Bt(), n = wo(e), o = An(r, n);
  o.tag = 2, t != null && (o.callback = t), t = yo(e, o, n), t !== null && (Kr(t, e, n, r), Ju(t, e, n));
} };
function ob(e, t, r, n, o, a, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, a, i) : t.prototype && t.prototype.isPureReactComponent ? !sl(r, n) || !sl(o, a) : !0;
}
function nP(e, t, r) {
  var n = !1, o = ko, a = t.contextType;
  return typeof a == "object" && a !== null ? a = Ar(a) : (o = Qt(t) ? ia : Ft.current, n = t.contextTypes, a = (n = n != null) ? wi(e, o) : ko), t = new t(r, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ud, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function ab(e, t, r, n) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && Ud.enqueueReplaceState(t, t.state, null);
}
function rv(e, t, r, n) {
  var o = e.stateNode;
  o.props = r, o.state = e.memoizedState, o.refs = rP, Bm(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? o.context = Ar(a) : (a = Qt(t) ? ia : Ft.current, o.context = wi(e, a)), o.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (tv(e, t, a, r), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ud.enqueueReplaceState(o, o.state, null), Vc(e, r, o, n), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function os(e, t, r) {
  if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (r._owner) {
      if (r = r._owner, r) {
        if (r.tag !== 1)
          throw Error(A(309));
        var n = r.stateNode;
      }
      if (!n)
        throw Error(A(147, e));
      var o = n, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(i) {
        var s = o.refs;
        s === rP && (s = o.refs = {}), i === null ? delete s[a] : s[a] = i;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string")
      throw Error(A(284));
    if (!r._owner)
      throw Error(A(290, e));
  }
  return e;
}
function xu(e, t) {
  throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ib(e) {
  var t = e._init;
  return t(e._payload);
}
function oP(e) {
  function t(h, v) {
    if (e) {
      var b = h.deletions;
      b === null ? (h.deletions = [v], h.flags |= 16) : b.push(v);
    }
  }
  function r(h, v) {
    if (!e)
      return null;
    for (; v !== null; )
      t(h, v), v = v.sibling;
    return null;
  }
  function n(h, v) {
    for (h = /* @__PURE__ */ new Map(); v !== null; )
      v.key !== null ? h.set(v.key, v) : h.set(v.index, v), v = v.sibling;
    return h;
  }
  function o(h, v) {
    return h = xo(h, v), h.index = 0, h.sibling = null, h;
  }
  function a(h, v, b) {
    return h.index = b, e ? (b = h.alternate, b !== null ? (b = b.index, b < v ? (h.flags |= 2, v) : b) : (h.flags |= 2, v)) : (h.flags |= 1048576, v);
  }
  function i(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, v, b, x) {
    return v === null || v.tag !== 6 ? (v = bp(b, h.mode, x), v.return = h, v) : (v = o(v, b), v.return = h, v);
  }
  function l(h, v, b, x) {
    var k = b.type;
    return k === Aa ? c(h, v, b.props.children, x, b.key) : v !== null && (v.elementType === k || typeof k == "object" && k !== null && k.$$typeof === oo && ib(k) === v.type) ? (x = o(v, b.props), x.ref = os(h, v, b), x.return = h, x) : (x = ac(b.type, b.key, b.props, null, h.mode, x), x.ref = os(h, v, b), x.return = h, x);
  }
  function u(h, v, b, x) {
    return v === null || v.tag !== 4 || v.stateNode.containerInfo !== b.containerInfo || v.stateNode.implementation !== b.implementation ? (v = wp(b, h.mode, x), v.return = h, v) : (v = o(v, b.children || []), v.return = h, v);
  }
  function c(h, v, b, x, k) {
    return v === null || v.tag !== 7 ? (v = ta(b, h.mode, x, k), v.return = h, v) : (v = o(v, b), v.return = h, v);
  }
  function d(h, v, b) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return v = bp("" + v, h.mode, b), v.return = h, v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case cu:
          return b = ac(v.type, v.key, v.props, null, h.mode, b), b.ref = os(h, null, v), b.return = h, b;
        case Da:
          return v = wp(v, h.mode, b), v.return = h, v;
        case oo:
          var x = v._init;
          return d(h, x(v._payload), b);
      }
      if (Ss(v) || Ji(v))
        return v = ta(v, h.mode, b, null), v.return = h, v;
      xu(h, v);
    }
    return null;
  }
  function f(h, v, b, x) {
    var k = v !== null ? v.key : null;
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return k !== null ? null : s(h, v, "" + b, x);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case cu:
          return b.key === k ? l(h, v, b, x) : null;
        case Da:
          return b.key === k ? u(h, v, b, x) : null;
        case oo:
          return k = b._init, f(
            h,
            v,
            k(b._payload),
            x
          );
      }
      if (Ss(b) || Ji(b))
        return k !== null ? null : c(h, v, b, x, null);
      xu(h, b);
    }
    return null;
  }
  function p(h, v, b, x, k) {
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return h = h.get(b) || null, s(v, h, "" + x, k);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case cu:
          return h = h.get(x.key === null ? b : x.key) || null, l(v, h, x, k);
        case Da:
          return h = h.get(x.key === null ? b : x.key) || null, u(v, h, x, k);
        case oo:
          var P = x._init;
          return p(h, v, b, P(x._payload), k);
      }
      if (Ss(x) || Ji(x))
        return h = h.get(b) || null, c(v, h, x, k, null);
      xu(v, x);
    }
    return null;
  }
  function m(h, v, b, x) {
    for (var k = null, P = null, C = v, _ = v = 0, $ = null; C !== null && _ < b.length; _++) {
      C.index > _ ? ($ = C, C = null) : $ = C.sibling;
      var O = f(h, C, b[_], x);
      if (O === null) {
        C === null && (C = $);
        break;
      }
      e && C && O.alternate === null && t(h, C), v = a(O, v, _), P === null ? k = O : P.sibling = O, P = O, C = $;
    }
    if (_ === b.length)
      return r(h, C), He && Vo(h, _), k;
    if (C === null) {
      for (; _ < b.length; _++)
        C = d(h, b[_], x), C !== null && (v = a(C, v, _), P === null ? k = C : P.sibling = C, P = C);
      return He && Vo(h, _), k;
    }
    for (C = n(h, C); _ < b.length; _++)
      $ = p(C, h, _, b[_], x), $ !== null && (e && $.alternate !== null && C.delete($.key === null ? _ : $.key), v = a($, v, _), P === null ? k = $ : P.sibling = $, P = $);
    return e && C.forEach(function(D) {
      return t(h, D);
    }), He && Vo(h, _), k;
  }
  function g(h, v, b, x) {
    var k = Ji(b);
    if (typeof k != "function")
      throw Error(A(150));
    if (b = k.call(b), b == null)
      throw Error(A(151));
    for (var P = k = null, C = v, _ = v = 0, $ = null, O = b.next(); C !== null && !O.done; _++, O = b.next()) {
      C.index > _ ? ($ = C, C = null) : $ = C.sibling;
      var D = f(h, C, O.value, x);
      if (D === null) {
        C === null && (C = $);
        break;
      }
      e && C && D.alternate === null && t(h, C), v = a(D, v, _), P === null ? k = D : P.sibling = D, P = D, C = $;
    }
    if (O.done)
      return r(
        h,
        C
      ), He && Vo(h, _), k;
    if (C === null) {
      for (; !O.done; _++, O = b.next())
        O = d(h, O.value, x), O !== null && (v = a(O, v, _), P === null ? k = O : P.sibling = O, P = O);
      return He && Vo(h, _), k;
    }
    for (C = n(h, C); !O.done; _++, O = b.next())
      O = p(C, h, _, O.value, x), O !== null && (e && O.alternate !== null && C.delete(O.key === null ? _ : O.key), v = a(O, v, _), P === null ? k = O : P.sibling = O, P = O);
    return e && C.forEach(function(H) {
      return t(h, H);
    }), He && Vo(h, _), k;
  }
  function y(h, v, b, x) {
    if (typeof b == "object" && b !== null && b.type === Aa && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case cu:
          e: {
            for (var k = b.key, P = v; P !== null; ) {
              if (P.key === k) {
                if (k = b.type, k === Aa) {
                  if (P.tag === 7) {
                    r(h, P.sibling), v = o(P, b.props.children), v.return = h, h = v;
                    break e;
                  }
                } else if (P.elementType === k || typeof k == "object" && k !== null && k.$$typeof === oo && ib(k) === P.type) {
                  r(h, P.sibling), v = o(P, b.props), v.ref = os(h, P, b), v.return = h, h = v;
                  break e;
                }
                r(h, P);
                break;
              } else
                t(h, P);
              P = P.sibling;
            }
            b.type === Aa ? (v = ta(b.props.children, h.mode, x, b.key), v.return = h, h = v) : (x = ac(b.type, b.key, b.props, null, h.mode, x), x.ref = os(h, v, b), x.return = h, h = x);
          }
          return i(h);
        case Da:
          e: {
            for (P = b.key; v !== null; ) {
              if (v.key === P)
                if (v.tag === 4 && v.stateNode.containerInfo === b.containerInfo && v.stateNode.implementation === b.implementation) {
                  r(h, v.sibling), v = o(v, b.children || []), v.return = h, h = v;
                  break e;
                } else {
                  r(h, v);
                  break;
                }
              else
                t(h, v);
              v = v.sibling;
            }
            v = wp(b, h.mode, x), v.return = h, h = v;
          }
          return i(h);
        case oo:
          return P = b._init, y(h, v, P(b._payload), x);
      }
      if (Ss(b))
        return m(h, v, b, x);
      if (Ji(b))
        return g(h, v, b, x);
      xu(h, b);
    }
    return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, v !== null && v.tag === 6 ? (r(h, v.sibling), v = o(v, b), v.return = h, h = v) : (r(h, v), v = bp(b, h.mode, x), v.return = h, h = v), i(h)) : r(h, v);
  }
  return y;
}
var Si = oP(!0), aP = oP(!1), Nl = {}, vn = $o(Nl), dl = $o(Nl), fl = $o(Nl);
function Qo(e) {
  if (e === Nl)
    throw Error(A(174));
  return e;
}
function Wm(e, t) {
  switch (De(fl, t), De(dl, e), De(vn, Nl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Dh(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Dh(t, e);
  }
  Ve(vn), De(vn, t);
}
function Ci() {
  Ve(vn), Ve(dl), Ve(fl);
}
function iP(e) {
  Qo(fl.current);
  var t = Qo(vn.current), r = Dh(t, e.type);
  t !== r && (De(dl, e), De(vn, r));
}
function Um(e) {
  dl.current === e && (Ve(vn), Ve(dl));
}
var Ye = $o(0);
function Bc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!"))
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
var pp = [];
function Hm() {
  for (var e = 0; e < pp.length; e++)
    pp[e]._workInProgressVersionPrimary = null;
  pp.length = 0;
}
var ec = Yn.ReactCurrentDispatcher, hp = Yn.ReactCurrentBatchConfig, la = 0, Xe = null, vt = null, bt = null, Wc = !1, Ls = !1, pl = 0, jI = 0;
function Mt() {
  throw Error(A(321));
}
function Gm(e, t) {
  if (t === null)
    return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Qr(e[r], t[r]))
      return !1;
  return !0;
}
function Ym(e, t, r, n, o, a) {
  if (la = a, Xe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ec.current = e === null || e.memoizedState === null ? UI : HI, e = r(n, o), Ls) {
    a = 0;
    do {
      if (Ls = !1, pl = 0, 25 <= a)
        throw Error(A(301));
      a += 1, bt = vt = null, t.updateQueue = null, ec.current = GI, e = r(n, o);
    } while (Ls);
  }
  if (ec.current = Uc, t = vt !== null && vt.next !== null, la = 0, bt = vt = Xe = null, Wc = !1, t)
    throw Error(A(300));
  return e;
}
function qm() {
  var e = pl !== 0;
  return pl = 0, e;
}
function nn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return bt === null ? Xe.memoizedState = bt = e : bt = bt.next = e, bt;
}
function Fr() {
  if (vt === null) {
    var e = Xe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = vt.next;
  var t = bt === null ? Xe.memoizedState : bt.next;
  if (t !== null)
    bt = t, vt = e;
  else {
    if (e === null)
      throw Error(A(310));
    vt = e, e = { memoizedState: vt.memoizedState, baseState: vt.baseState, baseQueue: vt.baseQueue, queue: vt.queue, next: null }, bt === null ? Xe.memoizedState = bt = e : bt = bt.next = e;
  }
  return bt;
}
function hl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function vp(e) {
  var t = Fr(), r = t.queue;
  if (r === null)
    throw Error(A(311));
  r.lastRenderedReducer = e;
  var n = vt, o = n.baseQueue, a = r.pending;
  if (a !== null) {
    if (o !== null) {
      var i = o.next;
      o.next = a.next, a.next = i;
    }
    n.baseQueue = o = a, r.pending = null;
  }
  if (o !== null) {
    a = o.next, n = n.baseState;
    var s = i = null, l = null, u = a;
    do {
      var c = u.lane;
      if ((la & c) === c)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = d, i = n) : l = l.next = d, Xe.lanes |= c, ua |= c;
      }
      u = u.next;
    } while (u !== null && u !== a);
    l === null ? i = n : l.next = s, Qr(n, t.memoizedState) || (Kt = !0), t.memoizedState = n, t.baseState = i, t.baseQueue = l, r.lastRenderedState = n;
  }
  if (e = r.interleaved, e !== null) {
    o = e;
    do
      a = o.lane, Xe.lanes |= a, ua |= a, o = o.next;
    while (o !== e);
  } else
    o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function mp(e) {
  var t = Fr(), r = t.queue;
  if (r === null)
    throw Error(A(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch, o = r.pending, a = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var i = o = o.next;
    do
      a = e(a, i.action), i = i.next;
    while (i !== o);
    Qr(a, t.memoizedState) || (Kt = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), r.lastRenderedState = a;
  }
  return [a, n];
}
function sP() {
}
function lP(e, t) {
  var r = Xe, n = Fr(), o = t(), a = !Qr(n.memoizedState, o);
  if (a && (n.memoizedState = o, Kt = !0), n = n.queue, Km(dP.bind(null, r, n, e), [e]), n.getSnapshot !== t || a || bt !== null && bt.memoizedState.tag & 1) {
    if (r.flags |= 2048, vl(9, cP.bind(null, r, n, o, t), void 0, null), wt === null)
      throw Error(A(349));
    la & 30 || uP(r, t, o);
  }
  return o;
}
function uP(e, t, r) {
  e.flags |= 16384, e = { getSnapshot: t, value: r }, t = Xe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Xe.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
}
function cP(e, t, r, n) {
  t.value = r, t.getSnapshot = n, fP(t) && pP(e);
}
function dP(e, t, r) {
  return r(function() {
    fP(t) && pP(e);
  });
}
function fP(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Qr(e, r);
  } catch {
    return !0;
  }
}
function pP(e) {
  var t = Bn(e, 1);
  t !== null && Kr(t, e, 1, -1);
}
function sb(e) {
  var t = nn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: hl, lastRenderedState: e }, t.queue = e, e = e.dispatch = WI.bind(null, Xe, e), [t.memoizedState, e];
}
function vl(e, t, r, n) {
  return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = Xe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Xe.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
}
function hP() {
  return Fr().memoizedState;
}
function tc(e, t, r, n) {
  var o = nn();
  Xe.flags |= e, o.memoizedState = vl(1 | t, r, void 0, n === void 0 ? null : n);
}
function Hd(e, t, r, n) {
  var o = Fr();
  n = n === void 0 ? null : n;
  var a = void 0;
  if (vt !== null) {
    var i = vt.memoizedState;
    if (a = i.destroy, n !== null && Gm(n, i.deps)) {
      o.memoizedState = vl(t, r, a, n);
      return;
    }
  }
  Xe.flags |= e, o.memoizedState = vl(1 | t, r, a, n);
}
function lb(e, t) {
  return tc(8390656, 8, e, t);
}
function Km(e, t) {
  return Hd(2048, 8, e, t);
}
function vP(e, t) {
  return Hd(4, 2, e, t);
}
function mP(e, t) {
  return Hd(4, 4, e, t);
}
function gP(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function yP(e, t, r) {
  return r = r != null ? r.concat([e]) : null, Hd(4, 4, gP.bind(null, t, e), r);
}
function Xm() {
}
function bP(e, t) {
  var r = Fr();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Gm(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
}
function wP(e, t) {
  var r = Fr();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Gm(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
}
function xP(e, t, r) {
  return la & 21 ? (Qr(r, t) || (r = PC(), Xe.lanes |= r, ua |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Kt = !0), e.memoizedState = r);
}
function VI(e, t) {
  var r = Oe;
  Oe = r !== 0 && 4 > r ? r : 4, e(!0);
  var n = hp.transition;
  hp.transition = {};
  try {
    e(!1), t();
  } finally {
    Oe = r, hp.transition = n;
  }
}
function SP() {
  return Fr().memoizedState;
}
function BI(e, t, r) {
  var n = wo(e);
  if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, CP(e))
    PP(t, r);
  else if (r = eP(e, t, r, n), r !== null) {
    var o = Bt();
    Kr(r, e, n, o), kP(r, t, n);
  }
}
function WI(e, t, r) {
  var n = wo(e), o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (CP(e))
    PP(t, o);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null))
      try {
        var i = t.lastRenderedState, s = a(i, r);
        if (o.hasEagerState = !0, o.eagerState = s, Qr(s, i)) {
          var l = t.interleaved;
          l === null ? (o.next = o, Vm(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    r = eP(e, t, o, n), r !== null && (o = Bt(), Kr(r, e, n, o), kP(r, t, n));
  }
}
function CP(e) {
  var t = e.alternate;
  return e === Xe || t !== null && t === Xe;
}
function PP(e, t) {
  Ls = Wc = !0;
  var r = e.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
}
function kP(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, Tm(e, r);
  }
}
var Uc = { readContext: Ar, useCallback: Mt, useContext: Mt, useEffect: Mt, useImperativeHandle: Mt, useInsertionEffect: Mt, useLayoutEffect: Mt, useMemo: Mt, useReducer: Mt, useRef: Mt, useState: Mt, useDebugValue: Mt, useDeferredValue: Mt, useTransition: Mt, useMutableSource: Mt, useSyncExternalStore: Mt, useId: Mt, unstable_isNewReconciler: !1 }, UI = { readContext: Ar, useCallback: function(e, t) {
  return nn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ar, useEffect: lb, useImperativeHandle: function(e, t, r) {
  return r = r != null ? r.concat([e]) : null, tc(
    4194308,
    4,
    gP.bind(null, t, e),
    r
  );
}, useLayoutEffect: function(e, t) {
  return tc(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return tc(4, 2, e, t);
}, useMemo: function(e, t) {
  var r = nn();
  return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
}, useReducer: function(e, t, r) {
  var n = nn();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = BI.bind(null, Xe, e), [n.memoizedState, e];
}, useRef: function(e) {
  var t = nn();
  return e = { current: e }, t.memoizedState = e;
}, useState: sb, useDebugValue: Xm, useDeferredValue: function(e) {
  return nn().memoizedState = e;
}, useTransition: function() {
  var e = sb(!1), t = e[0];
  return e = VI.bind(null, e[1]), nn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, r) {
  var n = Xe, o = nn();
  if (He) {
    if (r === void 0)
      throw Error(A(407));
    r = r();
  } else {
    if (r = t(), wt === null)
      throw Error(A(349));
    la & 30 || uP(n, t, r);
  }
  o.memoizedState = r;
  var a = { value: r, getSnapshot: t };
  return o.queue = a, lb(dP.bind(
    null,
    n,
    a,
    e
  ), [e]), n.flags |= 2048, vl(9, cP.bind(null, n, a, r, t), void 0, null), r;
}, useId: function() {
  var e = nn(), t = wt.identifierPrefix;
  if (He) {
    var r = Mn, n = On;
    r = (n & ~(1 << 32 - qr(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = pl++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else
    r = jI++, t = ":" + t + "r" + r.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, HI = {
  readContext: Ar,
  useCallback: bP,
  useContext: Ar,
  useEffect: Km,
  useImperativeHandle: yP,
  useInsertionEffect: vP,
  useLayoutEffect: mP,
  useMemo: wP,
  useReducer: vp,
  useRef: hP,
  useState: function() {
    return vp(hl);
  },
  useDebugValue: Xm,
  useDeferredValue: function(e) {
    var t = Fr();
    return xP(t, vt.memoizedState, e);
  },
  useTransition: function() {
    var e = vp(hl)[0], t = Fr().memoizedState;
    return [e, t];
  },
  useMutableSource: sP,
  useSyncExternalStore: lP,
  useId: SP,
  unstable_isNewReconciler: !1
}, GI = { readContext: Ar, useCallback: bP, useContext: Ar, useEffect: Km, useImperativeHandle: yP, useInsertionEffect: vP, useLayoutEffect: mP, useMemo: wP, useReducer: mp, useRef: hP, useState: function() {
  return mp(hl);
}, useDebugValue: Xm, useDeferredValue: function(e) {
  var t = Fr();
  return vt === null ? t.memoizedState = e : xP(t, vt.memoizedState, e);
}, useTransition: function() {
  var e = mp(hl)[0], t = Fr().memoizedState;
  return [e, t];
}, useMutableSource: sP, useSyncExternalStore: lP, useId: SP, unstable_isNewReconciler: !1 };
function Pi(e, t) {
  try {
    var r = "", n = t;
    do
      r += wM(n), n = n.return;
    while (n);
    var o = r;
  } catch (a) {
    o = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function gp(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function nv(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var YI = typeof WeakMap == "function" ? WeakMap : Map;
function _P(e, t, r) {
  r = An(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    Gc || (Gc = !0, pv = n), nv(e, t);
  }, r;
}
function TP(e, t, r) {
  r = An(-1, r), r.tag = 3;
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    r.payload = function() {
      return n(o);
    }, r.callback = function() {
      nv(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (r.callback = function() {
    nv(e, t), typeof n != "function" && (bo === null ? bo = /* @__PURE__ */ new Set([this]) : bo.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), r;
}
function ub(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new YI();
    var o = /* @__PURE__ */ new Set();
    n.set(t, o);
  } else
    o = n.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), n.set(t, o));
  o.has(r) || (o.add(r), e = sR.bind(null, e, t, r), t.then(e, e));
}
function cb(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function db(e, t, r, n, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = An(-1, 1), t.tag = 2, yo(r, t, 1))), r.lanes |= 1), e);
}
var qI = Yn.ReactCurrentOwner, Kt = !1;
function jt(e, t, r, n) {
  t.child = e === null ? aP(t, null, r, n) : Si(t, e.child, r, n);
}
function fb(e, t, r, n, o) {
  r = r.render;
  var a = t.ref;
  return si(t, o), n = Ym(e, t, r, n, a, o), r = qm(), e !== null && !Kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Wn(e, t, o)) : (He && r && Am(t), t.flags |= 1, jt(e, t, n, o), t.child);
}
function pb(e, t, r, n, o) {
  if (e === null) {
    var a = r.type;
    return typeof a == "function" && !og(a) && a.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = a, EP(e, t, a, n, o)) : (e = ac(r.type, null, n, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & o)) {
    var i = a.memoizedProps;
    if (r = r.compare, r = r !== null ? r : sl, r(i, n) && e.ref === t.ref)
      return Wn(e, t, o);
  }
  return t.flags |= 1, e = xo(a, n), e.ref = t.ref, e.return = t, t.child = e;
}
function EP(e, t, r, n, o) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (sl(a, n) && e.ref === t.ref)
      if (Kt = !1, t.pendingProps = n = a, (e.lanes & o) !== 0)
        e.flags & 131072 && (Kt = !0);
      else
        return t.lanes = e.lanes, Wn(e, t, o);
  }
  return ov(e, t, r, n, o);
}
function $P(e, t, r) {
  var n = t.pendingProps, o = n.children, a = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, De(Ha, lr), lr |= r;
    else {
      if (!(r & 1073741824))
        return e = a !== null ? a.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, De(Ha, lr), lr |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = a !== null ? a.baseLanes : r, De(Ha, lr), lr |= n;
    }
  else
    a !== null ? (n = a.baseLanes | r, t.memoizedState = null) : n = r, De(Ha, lr), lr |= n;
  return jt(e, t, o, r), t.child;
}
function OP(e, t) {
  var r = t.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function ov(e, t, r, n, o) {
  var a = Qt(r) ? ia : Ft.current;
  return a = wi(t, a), si(t, o), r = Ym(e, t, r, n, a, o), n = qm(), e !== null && !Kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Wn(e, t, o)) : (He && n && Am(t), t.flags |= 1, jt(e, t, r, o), t.child);
}
function hb(e, t, r, n, o) {
  if (Qt(r)) {
    var a = !0;
    Fc(t);
  } else
    a = !1;
  if (si(t, o), t.stateNode === null)
    rc(e, t), nP(t, r, n), rv(t, r, n, o), n = !0;
  else if (e === null) {
    var i = t.stateNode, s = t.memoizedProps;
    i.props = s;
    var l = i.context, u = r.contextType;
    typeof u == "object" && u !== null ? u = Ar(u) : (u = Qt(r) ? ia : Ft.current, u = wi(t, u));
    var c = r.getDerivedStateFromProps, d = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== n || l !== u) && ab(t, i, n, u), ao = !1;
    var f = t.memoizedState;
    i.state = f, Vc(t, n, i, o), l = t.memoizedState, s !== n || f !== l || Xt.current || ao ? (typeof c == "function" && (tv(t, r, c, n), l = t.memoizedState), (s = ao || ob(t, r, s, n, f, l, u)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), i.props = n, i.state = l, i.context = u, n = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
  } else {
    i = t.stateNode, tP(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Br(t.type, s), i.props = u, d = t.pendingProps, f = i.context, l = r.contextType, typeof l == "object" && l !== null ? l = Ar(l) : (l = Qt(r) ? ia : Ft.current, l = wi(t, l));
    var p = r.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== d || f !== l) && ab(t, i, n, l), ao = !1, f = t.memoizedState, i.state = f, Vc(t, n, i, o);
    var m = t.memoizedState;
    s !== d || f !== m || Xt.current || ao ? (typeof p == "function" && (tv(t, r, p, n), m = t.memoizedState), (u = ao || ob(t, r, u, n, f, m, l) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, m, l), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(n, m, l)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = m), i.props = n, i.state = m, i.context = l, n = u) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), n = !1);
  }
  return av(e, t, r, n, a, o);
}
function av(e, t, r, n, o, a) {
  OP(e, t);
  var i = (t.flags & 128) !== 0;
  if (!n && !i)
    return o && Jy(t, r, !1), Wn(e, t, a);
  n = t.stateNode, qI.current = t;
  var s = i && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e !== null && i ? (t.child = Si(t, e.child, null, a), t.child = Si(t, null, s, a)) : jt(e, t, s, a), t.memoizedState = n.state, o && Jy(t, r, !0), t.child;
}
function MP(e) {
  var t = e.stateNode;
  t.pendingContext ? Zy(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zy(e, t.context, !1), Wm(e, t.containerInfo);
}
function vb(e, t, r, n, o) {
  return xi(), Lm(o), t.flags |= 256, jt(e, t, r, n), t.child;
}
var iv = { dehydrated: null, treeContext: null, retryLane: 0 };
function sv(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function IP(e, t, r) {
  var n = t.pendingProps, o = Ye.current, a = !1, i = (t.flags & 128) !== 0, s;
  if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), De(Ye, o & 1), e === null)
    return Jh(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = n.children, e = n.fallback, a ? (n = t.mode, a = t.child, i = { mode: "hidden", children: i }, !(n & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = i) : a = qd(i, n, 0, null), e = ta(e, n, r, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = sv(r), t.memoizedState = iv, e) : Qm(t, i));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return KI(e, t, i, n, s, o, r);
  if (a) {
    a = n.fallback, i = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(i & 1) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = xo(o, l), n.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? a = xo(s, a) : (a = ta(a, i, r, null), a.flags |= 2), a.return = t, n.return = t, n.sibling = a, t.child = n, n = a, a = t.child, i = e.child.memoizedState, i = i === null ? sv(r) : { baseLanes: i.baseLanes | r, cachePool: null, transitions: i.transitions }, a.memoizedState = i, a.childLanes = e.childLanes & ~r, t.memoizedState = iv, n;
  }
  return a = e.child, e = a.sibling, n = xo(a, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
}
function Qm(e, t) {
  return t = qd({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Su(e, t, r, n) {
  return n !== null && Lm(n), Si(t, e.child, null, r), e = Qm(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function KI(e, t, r, n, o, a, i) {
  if (r)
    return t.flags & 256 ? (t.flags &= -257, n = gp(Error(A(422))), Su(e, t, i, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = n.fallback, o = t.mode, n = qd({ mode: "visible", children: n.children }, o, 0, null), a = ta(a, o, i, null), a.flags |= 2, n.return = t, a.return = t, n.sibling = a, t.child = n, t.mode & 1 && Si(t, e.child, null, i), t.child.memoizedState = sv(i), t.memoizedState = iv, a);
  if (!(t.mode & 1))
    return Su(e, t, i, null);
  if (o.data === "$!") {
    if (n = o.nextSibling && o.nextSibling.dataset, n)
      var s = n.dgst;
    return n = s, a = Error(A(419)), n = gp(a, n, void 0), Su(e, t, i, n);
  }
  if (s = (i & e.childLanes) !== 0, Kt || s) {
    if (n = wt, n !== null) {
      switch (i & -i) {
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
      o = o & (n.suspendedLanes | i) ? 0 : o, o !== 0 && o !== a.retryLane && (a.retryLane = o, Bn(e, o), Kr(n, e, o, -1));
    }
    return ng(), n = gp(Error(A(421))), Su(e, t, i, n);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = lR.bind(null, e), o._reactRetry = t, null) : (e = a.treeContext, cr = go(o.nextSibling), dr = t, He = !0, Ur = null, e !== null && (Er[$r++] = On, Er[$r++] = Mn, Er[$r++] = sa, On = e.id, Mn = e.overflow, sa = t), t = Qm(t, n.children), t.flags |= 4096, t);
}
function mb(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), ev(e.return, t, r);
}
function yp(e, t, r, n, o) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: o } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = n, a.tail = r, a.tailMode = o);
}
function RP(e, t, r) {
  var n = t.pendingProps, o = n.revealOrder, a = n.tail;
  if (jt(e, t, n.children, r), n = Ye.current, n & 2)
    n = n & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && mb(e, r, t);
          else if (e.tag === 19)
            mb(e, r, t);
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
    n &= 1;
  }
  if (De(Ye, n), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          e = r.alternate, e !== null && Bc(e) === null && (o = r), r = r.sibling;
        r = o, r === null ? (o = t.child, t.child = null) : (o = r.sibling, r.sibling = null), yp(t, !1, o, r, a);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Bc(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = r, r = o, o = e;
        }
        yp(t, !0, r, null, a);
        break;
      case "together":
        yp(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function rc(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Wn(e, t, r) {
  if (e !== null && (t.dependencies = e.dependencies), ua |= t.lanes, !(r & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(A(153));
  if (t.child !== null) {
    for (e = t.child, r = xo(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
      e = e.sibling, r = r.sibling = xo(e, e.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function XI(e, t, r) {
  switch (t.tag) {
    case 3:
      MP(t), xi();
      break;
    case 5:
      iP(t);
      break;
    case 1:
      Qt(t.type) && Fc(t);
      break;
    case 4:
      Wm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, o = t.memoizedProps.value;
      De(zc, n._currentValue), n._currentValue = o;
      break;
    case 13:
      if (n = t.memoizedState, n !== null)
        return n.dehydrated !== null ? (De(Ye, Ye.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? IP(e, t, r) : (De(Ye, Ye.current & 1), e = Wn(e, t, r), e !== null ? e.sibling : null);
      De(Ye, Ye.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e.flags & 128) {
        if (n)
          return RP(e, t, r);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), De(Ye, Ye.current), n)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, $P(e, t, r);
  }
  return Wn(e, t, r);
}
var DP, lv, AP, FP;
DP = function(e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6)
      e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      r.child.return = r, r = r.child;
      continue;
    }
    if (r === t)
      break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t)
        return;
      r = r.return;
    }
    r.sibling.return = r.return, r = r.sibling;
  }
};
lv = function() {
};
AP = function(e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    e = t.stateNode, Qo(vn.current);
    var a = null;
    switch (r) {
      case "input":
        o = Oh(e, o), n = Oh(e, n), a = [];
        break;
      case "select":
        o = Qe({}, o, { value: void 0 }), n = Qe({}, n, { value: void 0 }), a = [];
        break;
      case "textarea":
        o = Rh(e, o), n = Rh(e, n), a = [];
        break;
      default:
        typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = Dc);
    }
    Ah(r, n);
    var i;
    r = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (i in s)
            s.hasOwnProperty(i) && (r || (r = {}), r[i] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (el.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (s = o != null ? o[u] : void 0, n.hasOwnProperty(u) && l !== s && (l != null || s != null))
        if (u === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (r || (r = {}), r[i] = "");
            for (i in l)
              l.hasOwnProperty(i) && s[i] !== l[i] && (r || (r = {}), r[i] = l[i]);
          } else
            r || (a || (a = []), a.push(
              u,
              r
            )), r = l;
        else
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (a = a || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (a = a || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (el.hasOwnProperty(u) ? (l != null && u === "onScroll" && Ne("scroll", e), a || s === l || (a = [])) : (a = a || []).push(u, l));
    }
    r && (a = a || []).push("style", r);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
FP = function(e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function as(e, t) {
  if (!He)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), t = t.sibling;
        r === null ? e.tail = null : r.sibling = null;
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), r = r.sibling;
        n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
    }
}
function It(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, r = 0, n = 0;
  if (t)
    for (var o = e.child; o !== null; )
      r |= o.lanes | o.childLanes, n |= o.subtreeFlags & 14680064, n |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      r |= o.lanes | o.childLanes, n |= o.subtreeFlags, n |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= n, e.childLanes = r, t;
}
function QI(e, t, r) {
  var n = t.pendingProps;
  switch (Fm(t), t.tag) {
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
      return It(t), null;
    case 1:
      return Qt(t.type) && Ac(), It(t), null;
    case 3:
      return n = t.stateNode, Ci(), Ve(Xt), Ve(Ft), Hm(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (wu(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ur !== null && (mv(Ur), Ur = null))), lv(e, t), It(t), null;
    case 5:
      Um(t);
      var o = Qo(fl.current);
      if (r = t.type, e !== null && t.stateNode != null)
        AP(e, t, r, n, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null)
            throw Error(A(166));
          return It(t), null;
        }
        if (e = Qo(vn.current), wu(t)) {
          n = t.stateNode, r = t.type;
          var a = t.memoizedProps;
          switch (n[cn] = t, n[cl] = a, e = (t.mode & 1) !== 0, r) {
            case "dialog":
              Ne("cancel", n), Ne("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ne("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ps.length; o++)
                Ne(Ps[o], n);
              break;
            case "source":
              Ne("error", n);
              break;
            case "img":
            case "image":
            case "link":
              Ne(
                "error",
                n
              ), Ne("load", n);
              break;
            case "details":
              Ne("toggle", n);
              break;
            case "input":
              ky(n, a), Ne("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!a.multiple }, Ne("invalid", n);
              break;
            case "textarea":
              Ty(n, a), Ne("invalid", n);
          }
          Ah(r, a), o = null;
          for (var i in a)
            if (a.hasOwnProperty(i)) {
              var s = a[i];
              i === "children" ? typeof s == "string" ? n.textContent !== s && (a.suppressHydrationWarning !== !0 && bu(n.textContent, s, e), o = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (a.suppressHydrationWarning !== !0 && bu(
                n.textContent,
                s,
                e
              ), o = ["children", "" + s]) : el.hasOwnProperty(i) && s != null && i === "onScroll" && Ne("scroll", n);
            }
          switch (r) {
            case "input":
              du(n), _y(n, a, !0);
              break;
            case "textarea":
              du(n), Ey(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (n.onclick = Dc);
          }
          n = o, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = uC(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = i.createElement(r, { is: n.is }) : (e = i.createElement(r), r === "select" && (i = e, n.multiple ? i.multiple = !0 : n.size && (i.size = n.size))) : e = i.createElementNS(e, r), e[cn] = t, e[cl] = n, DP(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Fh(r, n), r) {
              case "dialog":
                Ne("cancel", e), Ne("close", e), o = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ne("load", e), o = n;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ps.length; o++)
                  Ne(Ps[o], e);
                o = n;
                break;
              case "source":
                Ne("error", e), o = n;
                break;
              case "img":
              case "image":
              case "link":
                Ne(
                  "error",
                  e
                ), Ne("load", e), o = n;
                break;
              case "details":
                Ne("toggle", e), o = n;
                break;
              case "input":
                ky(e, n), o = Oh(e, n), Ne("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!n.multiple }, o = Qe({}, n, { value: void 0 }), Ne("invalid", e);
                break;
              case "textarea":
                Ty(e, n), o = Rh(e, n), Ne("invalid", e);
                break;
              default:
                o = n;
            }
            Ah(r, o), s = o;
            for (a in s)
              if (s.hasOwnProperty(a)) {
                var l = s[a];
                a === "style" ? fC(e, l) : a === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && cC(e, l)) : a === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && tl(e, l) : typeof l == "number" && tl(e, "" + l) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (el.hasOwnProperty(a) ? l != null && a === "onScroll" && Ne("scroll", e) : l != null && xm(e, a, l, i));
              }
            switch (r) {
              case "input":
                du(e), _y(e, n, !1);
                break;
              case "textarea":
                du(e), Ey(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Po(n.value));
                break;
              case "select":
                e.multiple = !!n.multiple, a = n.value, a != null ? ni(e, !!n.multiple, a, !1) : n.defaultValue != null && ni(
                  e,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Dc);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return It(t), null;
    case 6:
      if (e && t.stateNode != null)
        FP(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null)
          throw Error(A(166));
        if (r = Qo(fl.current), Qo(vn.current), wu(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[cn] = t, (a = n.nodeValue !== r) && (e = dr, e !== null))
            switch (e.tag) {
              case 3:
                bu(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && bu(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[cn] = t, t.stateNode = n;
      }
      return It(t), null;
    case 13:
      if (Ve(Ye), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (He && cr !== null && t.mode & 1 && !(t.flags & 128))
          JC(), xi(), t.flags |= 98560, a = !1;
        else if (a = wu(t), n !== null && n.dehydrated !== null) {
          if (e === null) {
            if (!a)
              throw Error(A(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a)
              throw Error(A(317));
            a[cn] = t;
          } else
            xi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          It(t), a = !1;
        } else
          Ur !== null && (mv(Ur), Ur = null), a = !0;
        if (!a)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ye.current & 1 ? mt === 0 && (mt = 3) : ng())), t.updateQueue !== null && (t.flags |= 4), It(t), null);
    case 4:
      return Ci(), lv(e, t), e === null && ll(t.stateNode.containerInfo), It(t), null;
    case 10:
      return jm(t.type._context), It(t), null;
    case 17:
      return Qt(t.type) && Ac(), It(t), null;
    case 19:
      if (Ve(Ye), a = t.memoizedState, a === null)
        return It(t), null;
      if (n = (t.flags & 128) !== 0, i = a.rendering, i === null)
        if (n)
          as(a, !1);
        else {
          if (mt !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = Bc(e), i !== null) {
                for (t.flags |= 128, as(a, !1), n = i.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; )
                  a = r, e = n, a.flags &= 14680066, i = a.alternate, i === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = i.childLanes, a.lanes = i.lanes, a.child = i.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = i.memoizedProps, a.memoizedState = i.memoizedState, a.updateQueue = i.updateQueue, a.type = i.type, e = i.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
                return De(Ye, Ye.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null && st() > ki && (t.flags |= 128, n = !0, as(a, !1), t.lanes = 4194304);
        }
      else {
        if (!n)
          if (e = Bc(i), e !== null) {
            if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), as(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !He)
              return It(t), null;
          } else
            2 * st() - a.renderingStartTime > ki && r !== 1073741824 && (t.flags |= 128, n = !0, as(a, !1), t.lanes = 4194304);
        a.isBackwards ? (i.sibling = t.child, t.child = i) : (r = a.last, r !== null ? r.sibling = i : t.child = i, a.last = i);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = st(), t.sibling = null, r = Ye.current, De(Ye, n ? r & 1 | 2 : r & 1), t) : (It(t), null);
    case 22:
    case 23:
      return rg(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? lr & 1073741824 && (It(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : It(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function ZI(e, t) {
  switch (Fm(t), t.tag) {
    case 1:
      return Qt(t.type) && Ac(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Ci(), Ve(Xt), Ve(Ft), Hm(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Um(t), null;
    case 13:
      if (Ve(Ye), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(A(340));
        xi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Ve(Ye), null;
    case 4:
      return Ci(), null;
    case 10:
      return jm(t.type._context), null;
    case 22:
    case 23:
      return rg(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Cu = !1, Dt = !1, JI = typeof WeakSet == "function" ? WeakSet : Set, q = null;
function Ua(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        et(e, t, n);
      }
    else
      r.current = null;
}
function uv(e, t, r) {
  try {
    r();
  } catch (n) {
    et(e, t, n);
  }
}
var gb = !1;
function eR(e, t) {
  if (Gh = Mc, e = jC(), Dm(e)) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = (r = e.ownerDocument) && r.defaultView || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var o = n.anchorOffset, a = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, a.nodeType;
          } catch {
            r = null;
            break e;
          }
          var i = 0, s = -1, l = -1, u = 0, c = 0, d = e, f = null;
          t:
            for (; ; ) {
              for (var p; d !== r || o !== 0 && d.nodeType !== 3 || (s = i + o), d !== a || n !== 0 && d.nodeType !== 3 || (l = i + n), d.nodeType === 3 && (i += d.nodeValue.length), (p = d.firstChild) !== null; )
                f = d, d = p;
              for (; ; ) {
                if (d === e)
                  break t;
                if (f === r && ++u === o && (s = i), f === a && ++c === n && (l = i), (p = d.nextSibling) !== null)
                  break;
                d = f, f = d.parentNode;
              }
              d = p;
            }
          r = s === -1 || l === -1 ? null : { start: s, end: l };
        } else
          r = null;
      }
    r = r || { start: 0, end: 0 };
  } else
    r = null;
  for (Yh = { focusedElem: e, selectionRange: r }, Mc = !1, q = t; q !== null; )
    if (t = q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, q = e;
    else
      for (; q !== null; ) {
        t = q;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var g = m.memoizedProps, y = m.memoizedState, h = t.stateNode, v = h.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Br(t.type, g), y);
                  h.__reactInternalSnapshotBeforeUpdate = v;
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
                throw Error(A(163));
            }
        } catch (x) {
          et(t, t.return, x);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, q = e;
          break;
        }
        q = t.return;
      }
  return m = gb, gb = !1, m;
}
function Ns(e, t, r) {
  var n = t.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var o = n = n.next;
    do {
      if ((o.tag & e) === e) {
        var a = o.destroy;
        o.destroy = void 0, a !== void 0 && uv(t, r, a);
      }
      o = o.next;
    } while (o !== n);
  }
}
function Gd(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var r = t = t.next;
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function cv(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function LP(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, LP(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[cn], delete t[cl], delete t[Xh], delete t[FI], delete t[LI])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function NP(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function yb(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || NP(e.return))
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
function dv(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Dc));
  else if (n !== 4 && (e = e.child, e !== null))
    for (dv(e, t, r), e = e.sibling; e !== null; )
      dv(e, t, r), e = e.sibling;
}
function fv(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && (e = e.child, e !== null))
    for (fv(e, t, r), e = e.sibling; e !== null; )
      fv(e, t, r), e = e.sibling;
}
var Pt = null, Wr = !1;
function Zn(e, t, r) {
  for (r = r.child; r !== null; )
    zP(e, t, r), r = r.sibling;
}
function zP(e, t, r) {
  if (hn && typeof hn.onCommitFiberUnmount == "function")
    try {
      hn.onCommitFiberUnmount(Nd, r);
    } catch {
    }
  switch (r.tag) {
    case 5:
      Dt || Ua(r, t);
    case 6:
      var n = Pt, o = Wr;
      Pt = null, Zn(e, t, r), Pt = n, Wr = o, Pt !== null && (Wr ? (e = Pt, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Pt.removeChild(r.stateNode));
      break;
    case 18:
      Pt !== null && (Wr ? (e = Pt, r = r.stateNode, e.nodeType === 8 ? dp(e.parentNode, r) : e.nodeType === 1 && dp(e, r), al(e)) : dp(Pt, r.stateNode));
      break;
    case 4:
      n = Pt, o = Wr, Pt = r.stateNode.containerInfo, Wr = !0, Zn(e, t, r), Pt = n, Wr = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Dt && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        o = n = n.next;
        do {
          var a = o, i = a.destroy;
          a = a.tag, i !== void 0 && (a & 2 || a & 4) && uv(r, t, i), o = o.next;
        } while (o !== n);
      }
      Zn(e, t, r);
      break;
    case 1:
      if (!Dt && (Ua(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function"))
        try {
          n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
        } catch (s) {
          et(r, t, s);
        }
      Zn(e, t, r);
      break;
    case 21:
      Zn(e, t, r);
      break;
    case 22:
      r.mode & 1 ? (Dt = (n = Dt) || r.memoizedState !== null, Zn(e, t, r), Dt = n) : Zn(e, t, r);
      break;
    default:
      Zn(e, t, r);
  }
}
function bb(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new JI()), t.forEach(function(n) {
      var o = uR.bind(null, e, n);
      r.has(n) || (r.add(n), n.then(o, o));
    });
  }
}
function jr(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      try {
        var a = e, i = t, s = i;
        e:
          for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                Pt = s.stateNode, Wr = !1;
                break e;
              case 3:
                Pt = s.stateNode.containerInfo, Wr = !0;
                break e;
              case 4:
                Pt = s.stateNode.containerInfo, Wr = !0;
                break e;
            }
            s = s.return;
          }
        if (Pt === null)
          throw Error(A(160));
        zP(a, i, o), Pt = null, Wr = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        et(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      jP(t, e), t = t.sibling;
}
function jP(e, t) {
  var r = e.alternate, n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (jr(t, e), en(e), n & 4) {
        try {
          Ns(3, e, e.return), Gd(3, e);
        } catch (g) {
          et(e, e.return, g);
        }
        try {
          Ns(5, e, e.return);
        } catch (g) {
          et(e, e.return, g);
        }
      }
      break;
    case 1:
      jr(t, e), en(e), n & 512 && r !== null && Ua(r, r.return);
      break;
    case 5:
      if (jr(t, e), en(e), n & 512 && r !== null && Ua(r, r.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          tl(o, "");
        } catch (g) {
          et(e, e.return, g);
        }
      }
      if (n & 4 && (o = e.stateNode, o != null)) {
        var a = e.memoizedProps, i = r !== null ? r.memoizedProps : a, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && a.type === "radio" && a.name != null && sC(o, a), Fh(s, i);
            var u = Fh(s, a);
            for (i = 0; i < l.length; i += 2) {
              var c = l[i], d = l[i + 1];
              c === "style" ? fC(o, d) : c === "dangerouslySetInnerHTML" ? cC(o, d) : c === "children" ? tl(o, d) : xm(o, c, d, u);
            }
            switch (s) {
              case "input":
                Mh(o, a);
                break;
              case "textarea":
                lC(o, a);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!a.multiple;
                var p = a.value;
                p != null ? ni(o, !!a.multiple, p, !1) : f !== !!a.multiple && (a.defaultValue != null ? ni(
                  o,
                  !!a.multiple,
                  a.defaultValue,
                  !0
                ) : ni(o, !!a.multiple, a.multiple ? [] : "", !1));
            }
            o[cl] = a;
          } catch (g) {
            et(e, e.return, g);
          }
      }
      break;
    case 6:
      if (jr(t, e), en(e), n & 4) {
        if (e.stateNode === null)
          throw Error(A(162));
        o = e.stateNode, a = e.memoizedProps;
        try {
          o.nodeValue = a;
        } catch (g) {
          et(e, e.return, g);
        }
      }
      break;
    case 3:
      if (jr(t, e), en(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
        try {
          al(t.containerInfo);
        } catch (g) {
          et(e, e.return, g);
        }
      break;
    case 4:
      jr(t, e), en(e);
      break;
    case 13:
      jr(t, e), en(e), o = e.child, o.flags & 8192 && (a = o.memoizedState !== null, o.stateNode.isHidden = a, !a || o.alternate !== null && o.alternate.memoizedState !== null || (eg = st())), n & 4 && bb(e);
      break;
    case 22:
      if (c = r !== null && r.memoizedState !== null, e.mode & 1 ? (Dt = (u = Dt) || c, jr(t, e), Dt = u) : jr(t, e), en(e), n & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (q = e, c = e.child; c !== null; ) {
            for (d = q = c; q !== null; ) {
              switch (f = q, p = f.child, f.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ns(4, f, f.return);
                  break;
                case 1:
                  Ua(f, f.return);
                  var m = f.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    n = f, r = f.return;
                    try {
                      t = n, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount();
                    } catch (g) {
                      et(n, r, g);
                    }
                  }
                  break;
                case 5:
                  Ua(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    xb(d);
                    continue;
                  }
              }
              p !== null ? (p.return = f, q = p) : xb(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (a = o.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, i = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = dC("display", i));
                } catch (g) {
                  et(e, e.return, g);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (g) {
                  et(e, e.return, g);
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
      jr(t, e), en(e), n & 4 && bb(e);
      break;
    case 21:
      break;
    default:
      jr(
        t,
        e
      ), en(e);
  }
}
function en(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (NP(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(A(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (tl(o, ""), n.flags &= -33);
          var a = yb(e);
          fv(e, a, o);
          break;
        case 3:
        case 4:
          var i = n.stateNode.containerInfo, s = yb(e);
          dv(e, s, i);
          break;
        default:
          throw Error(A(161));
      }
    } catch (l) {
      et(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function tR(e, t, r) {
  q = e, VP(e);
}
function VP(e, t, r) {
  for (var n = (e.mode & 1) !== 0; q !== null; ) {
    var o = q, a = o.child;
    if (o.tag === 22 && n) {
      var i = o.memoizedState !== null || Cu;
      if (!i) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || Dt;
        s = Cu;
        var u = Dt;
        if (Cu = i, (Dt = l) && !u)
          for (q = o; q !== null; )
            i = q, l = i.child, i.tag === 22 && i.memoizedState !== null ? Sb(o) : l !== null ? (l.return = i, q = l) : Sb(o);
        for (; a !== null; )
          q = a, VP(a), a = a.sibling;
        q = o, Cu = s, Dt = u;
      }
      wb(e);
    } else
      o.subtreeFlags & 8772 && a !== null ? (a.return = o, q = a) : wb(e);
  }
}
function wb(e) {
  for (; q !== null; ) {
    var t = q;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Dt || Gd(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !Dt)
                if (r === null)
                  n.componentDidMount();
                else {
                  var o = t.elementType === t.type ? r.memoizedProps : Br(t.type, r.memoizedProps);
                  n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                }
              var a = t.updateQueue;
              a !== null && nb(t, a, n);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (r = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                nb(t, i, r);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (r === null && t.flags & 4) {
                r = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
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
                    d !== null && al(d);
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
              throw Error(A(163));
          }
        Dt || t.flags & 512 && cv(t);
      } catch (f) {
        et(t, t.return, f);
      }
    }
    if (t === e) {
      q = null;
      break;
    }
    if (r = t.sibling, r !== null) {
      r.return = t.return, q = r;
      break;
    }
    q = t.return;
  }
}
function xb(e) {
  for (; q !== null; ) {
    var t = q;
    if (t === e) {
      q = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      r.return = t.return, q = r;
      break;
    }
    q = t.return;
  }
}
function Sb(e) {
  for (; q !== null; ) {
    var t = q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Gd(4, t);
          } catch (l) {
            et(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              et(t, o, l);
            }
          }
          var a = t.return;
          try {
            cv(t);
          } catch (l) {
            et(t, a, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            cv(t);
          } catch (l) {
            et(t, i, l);
          }
      }
    } catch (l) {
      et(t, t.return, l);
    }
    if (t === e) {
      q = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, q = s;
      break;
    }
    q = t.return;
  }
}
var rR = Math.ceil, Hc = Yn.ReactCurrentDispatcher, Zm = Yn.ReactCurrentOwner, Ir = Yn.ReactCurrentBatchConfig, we = 0, wt = null, pt = null, Tt = 0, lr = 0, Ha = $o(0), mt = 0, ml = null, ua = 0, Yd = 0, Jm = 0, zs = null, Yt = null, eg = 0, ki = 1 / 0, _n = null, Gc = !1, pv = null, bo = null, Pu = !1, fo = null, Yc = 0, js = 0, hv = null, nc = -1, oc = 0;
function Bt() {
  return we & 6 ? st() : nc !== -1 ? nc : nc = st();
}
function wo(e) {
  return e.mode & 1 ? we & 2 && Tt !== 0 ? Tt & -Tt : zI.transition !== null ? (oc === 0 && (oc = PC()), oc) : (e = Oe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : MC(e.type)), e) : 1;
}
function Kr(e, t, r, n) {
  if (50 < js)
    throw js = 0, hv = null, Error(A(185));
  Al(e, r, n), (!(we & 2) || e !== wt) && (e === wt && (!(we & 2) && (Yd |= r), mt === 4 && lo(e, Tt)), Zt(e, n), r === 1 && we === 0 && !(t.mode & 1) && (ki = st() + 500, Wd && Oo()));
}
function Zt(e, t) {
  var r = e.callbackNode;
  zM(e, t);
  var n = Oc(e, e === wt ? Tt : 0);
  if (n === 0)
    r !== null && My(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = n & -n, e.callbackPriority !== t) {
    if (r != null && My(r), t === 1)
      e.tag === 0 ? NI(Cb.bind(null, e)) : XC(Cb.bind(null, e)), DI(function() {
        !(we & 6) && Oo();
      }), r = null;
    else {
      switch (kC(n)) {
        case 1:
          r = _m;
          break;
        case 4:
          r = SC;
          break;
        case 16:
          r = $c;
          break;
        case 536870912:
          r = CC;
          break;
        default:
          r = $c;
      }
      r = KP(r, BP.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = r;
  }
}
function BP(e, t) {
  if (nc = -1, oc = 0, we & 6)
    throw Error(A(327));
  var r = e.callbackNode;
  if (li() && e.callbackNode !== r)
    return null;
  var n = Oc(e, e === wt ? Tt : 0);
  if (n === 0)
    return null;
  if (n & 30 || n & e.expiredLanes || t)
    t = qc(e, n);
  else {
    t = n;
    var o = we;
    we |= 2;
    var a = UP();
    (wt !== e || Tt !== t) && (_n = null, ki = st() + 500, ea(e, t));
    do
      try {
        aR();
        break;
      } catch (s) {
        WP(e, s);
      }
    while (!0);
    zm(), Hc.current = a, we = o, pt !== null ? t = 0 : (wt = null, Tt = 0, t = mt);
  }
  if (t !== 0) {
    if (t === 2 && (o = Vh(e), o !== 0 && (n = o, t = vv(e, o))), t === 1)
      throw r = ml, ea(e, 0), lo(e, n), Zt(e, st()), r;
    if (t === 6)
      lo(e, n);
    else {
      if (o = e.current.alternate, !(n & 30) && !nR(o) && (t = qc(e, n), t === 2 && (a = Vh(e), a !== 0 && (n = a, t = vv(e, a))), t === 1))
        throw r = ml, ea(e, 0), lo(e, n), Zt(e, st()), r;
      switch (e.finishedWork = o, e.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          Bo(e, Yt, _n);
          break;
        case 3:
          if (lo(e, n), (n & 130023424) === n && (t = eg + 500 - st(), 10 < t)) {
            if (Oc(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & n) !== n) {
              Bt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Kh(Bo.bind(null, e, Yt, _n), t);
            break;
          }
          Bo(e, Yt, _n);
          break;
        case 4:
          if (lo(e, n), (n & 4194240) === n)
            break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var i = 31 - qr(n);
            a = 1 << i, i = t[i], i > o && (o = i), n &= ~a;
          }
          if (n = o, n = st() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * rR(n / 1960)) - n, 10 < n) {
            e.timeoutHandle = Kh(Bo.bind(null, e, Yt, _n), n);
            break;
          }
          Bo(e, Yt, _n);
          break;
        case 5:
          Bo(e, Yt, _n);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return Zt(e, st()), e.callbackNode === r ? BP.bind(null, e) : null;
}
function vv(e, t) {
  var r = zs;
  return e.current.memoizedState.isDehydrated && (ea(e, t).flags |= 256), e = qc(e, t), e !== 2 && (t = Yt, Yt = r, t !== null && mv(t)), e;
}
function mv(e) {
  Yt === null ? Yt = e : Yt.push.apply(Yt, e);
}
function nR(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && (r = r.stores, r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n], a = o.getSnapshot;
          o = o.value;
          try {
            if (!Qr(a(), o))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (r = t.child, t.subtreeFlags & 16384 && r !== null)
      r.return = t, t = r;
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
function lo(e, t) {
  for (t &= ~Jm, t &= ~Yd, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - qr(t), n = 1 << r;
    e[r] = -1, t &= ~n;
  }
}
function Cb(e) {
  if (we & 6)
    throw Error(A(327));
  li();
  var t = Oc(e, 0);
  if (!(t & 1))
    return Zt(e, st()), null;
  var r = qc(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Vh(e);
    n !== 0 && (t = n, r = vv(e, n));
  }
  if (r === 1)
    throw r = ml, ea(e, 0), lo(e, t), Zt(e, st()), r;
  if (r === 6)
    throw Error(A(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bo(e, Yt, _n), Zt(e, st()), null;
}
function tg(e, t) {
  var r = we;
  we |= 1;
  try {
    return e(t);
  } finally {
    we = r, we === 0 && (ki = st() + 500, Wd && Oo());
  }
}
function ca(e) {
  fo !== null && fo.tag === 0 && !(we & 6) && li();
  var t = we;
  we |= 1;
  var r = Ir.transition, n = Oe;
  try {
    if (Ir.transition = null, Oe = 1, e)
      return e();
  } finally {
    Oe = n, Ir.transition = r, we = t, !(we & 6) && Oo();
  }
}
function rg() {
  lr = Ha.current, Ve(Ha);
}
function ea(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, RI(r)), pt !== null)
    for (r = pt.return; r !== null; ) {
      var n = r;
      switch (Fm(n), n.tag) {
        case 1:
          n = n.type.childContextTypes, n != null && Ac();
          break;
        case 3:
          Ci(), Ve(Xt), Ve(Ft), Hm();
          break;
        case 5:
          Um(n);
          break;
        case 4:
          Ci();
          break;
        case 13:
          Ve(Ye);
          break;
        case 19:
          Ve(Ye);
          break;
        case 10:
          jm(n.type._context);
          break;
        case 22:
        case 23:
          rg();
      }
      r = r.return;
    }
  if (wt = e, pt = e = xo(e.current, null), Tt = lr = t, mt = 0, ml = null, Jm = Yd = ua = 0, Yt = zs = null, Xo !== null) {
    for (t = 0; t < Xo.length; t++)
      if (r = Xo[t], n = r.interleaved, n !== null) {
        r.interleaved = null;
        var o = n.next, a = r.pending;
        if (a !== null) {
          var i = a.next;
          a.next = o, n.next = i;
        }
        r.pending = n;
      }
    Xo = null;
  }
  return e;
}
function WP(e, t) {
  do {
    var r = pt;
    try {
      if (zm(), ec.current = Uc, Wc) {
        for (var n = Xe.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), n = n.next;
        }
        Wc = !1;
      }
      if (la = 0, bt = vt = Xe = null, Ls = !1, pl = 0, Zm.current = null, r === null || r.return === null) {
        mt = 1, ml = t, pt = null;
        break;
      }
      e: {
        var a = e, i = r.return, s = r, l = t;
        if (t = Tt, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var p = cb(i);
          if (p !== null) {
            p.flags &= -257, db(p, i, s, a, t), p.mode & 1 && ub(a, u, t), t = p, l = u;
            var m = t.updateQueue;
            if (m === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(l), t.updateQueue = g;
            } else
              m.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              ub(a, u, t), ng();
              break e;
            }
            l = Error(A(426));
          }
        } else if (He && s.mode & 1) {
          var y = cb(i);
          if (y !== null) {
            !(y.flags & 65536) && (y.flags |= 256), db(y, i, s, a, t), Lm(Pi(l, s));
            break e;
          }
        }
        a = l = Pi(l, s), mt !== 4 && (mt = 2), zs === null ? zs = [a] : zs.push(a), a = i;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var h = _P(a, l, t);
              rb(a, h);
              break e;
            case 1:
              s = l;
              var v = a.type, b = a.stateNode;
              if (!(a.flags & 128) && (typeof v.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (bo === null || !bo.has(b)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var x = TP(a, s, t);
                rb(a, x);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      GP(r);
    } catch (k) {
      t = k, pt === r && r !== null && (pt = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function UP() {
  var e = Hc.current;
  return Hc.current = Uc, e === null ? Uc : e;
}
function ng() {
  (mt === 0 || mt === 3 || mt === 2) && (mt = 4), wt === null || !(ua & 268435455) && !(Yd & 268435455) || lo(wt, Tt);
}
function qc(e, t) {
  var r = we;
  we |= 2;
  var n = UP();
  (wt !== e || Tt !== t) && (_n = null, ea(e, t));
  do
    try {
      oR();
      break;
    } catch (o) {
      WP(e, o);
    }
  while (!0);
  if (zm(), we = r, Hc.current = n, pt !== null)
    throw Error(A(261));
  return wt = null, Tt = 0, mt;
}
function oR() {
  for (; pt !== null; )
    HP(pt);
}
function aR() {
  for (; pt !== null && !OM(); )
    HP(pt);
}
function HP(e) {
  var t = qP(e.alternate, e, lr);
  e.memoizedProps = e.pendingProps, t === null ? GP(e) : pt = t, Zm.current = null;
}
function GP(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (r = ZI(r, t), r !== null) {
        r.flags &= 32767, pt = r;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        mt = 6, pt = null;
        return;
      }
    } else if (r = QI(r, t, lr), r !== null) {
      pt = r;
      return;
    }
    if (t = t.sibling, t !== null) {
      pt = t;
      return;
    }
    pt = t = e;
  } while (t !== null);
  mt === 0 && (mt = 5);
}
function Bo(e, t, r) {
  var n = Oe, o = Ir.transition;
  try {
    Ir.transition = null, Oe = 1, iR(e, t, r, n);
  } finally {
    Ir.transition = o, Oe = n;
  }
  return null;
}
function iR(e, t, r, n) {
  do
    li();
  while (fo !== null);
  if (we & 6)
    throw Error(A(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, r === e.current)
    throw Error(A(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = r.lanes | r.childLanes;
  if (jM(e, a), e === wt && (pt = wt = null, Tt = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Pu || (Pu = !0, KP($c, function() {
    return li(), null;
  })), a = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || a) {
    a = Ir.transition, Ir.transition = null;
    var i = Oe;
    Oe = 1;
    var s = we;
    we |= 4, Zm.current = null, eR(e, r), jP(r, e), _I(Yh), Mc = !!Gh, Yh = Gh = null, e.current = r, tR(r), MM(), we = s, Oe = i, Ir.transition = a;
  } else
    e.current = r;
  if (Pu && (Pu = !1, fo = e, Yc = o), a = e.pendingLanes, a === 0 && (bo = null), DM(r.stateNode), Zt(e, st()), t !== null)
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      o = t[r], n(o.value, { componentStack: o.stack, digest: o.digest });
  if (Gc)
    throw Gc = !1, e = pv, pv = null, e;
  return Yc & 1 && e.tag !== 0 && li(), a = e.pendingLanes, a & 1 ? e === hv ? js++ : (js = 0, hv = e) : js = 0, Oo(), null;
}
function li() {
  if (fo !== null) {
    var e = kC(Yc), t = Ir.transition, r = Oe;
    try {
      if (Ir.transition = null, Oe = 16 > e ? 16 : e, fo === null)
        var n = !1;
      else {
        if (e = fo, fo = null, Yc = 0, we & 6)
          throw Error(A(331));
        var o = we;
        for (we |= 4, q = e.current; q !== null; ) {
          var a = q, i = a.child;
          if (q.flags & 16) {
            var s = a.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (q = u; q !== null; ) {
                  var c = q;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ns(8, c, a);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, q = d;
                  else
                    for (; q !== null; ) {
                      c = q;
                      var f = c.sibling, p = c.return;
                      if (LP(c), c === u) {
                        q = null;
                        break;
                      }
                      if (f !== null) {
                        f.return = p, q = f;
                        break;
                      }
                      q = p;
                    }
                }
              }
              var m = a.alternate;
              if (m !== null) {
                var g = m.child;
                if (g !== null) {
                  m.child = null;
                  do {
                    var y = g.sibling;
                    g.sibling = null, g = y;
                  } while (g !== null);
                }
              }
              q = a;
            }
          }
          if (a.subtreeFlags & 2064 && i !== null)
            i.return = a, q = i;
          else
            e:
              for (; q !== null; ) {
                if (a = q, a.flags & 2048)
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ns(9, a, a.return);
                  }
                var h = a.sibling;
                if (h !== null) {
                  h.return = a.return, q = h;
                  break e;
                }
                q = a.return;
              }
        }
        var v = e.current;
        for (q = v; q !== null; ) {
          i = q;
          var b = i.child;
          if (i.subtreeFlags & 2064 && b !== null)
            b.return = i, q = b;
          else
            e:
              for (i = v; q !== null; ) {
                if (s = q, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gd(9, s);
                    }
                  } catch (k) {
                    et(s, s.return, k);
                  }
                if (s === i) {
                  q = null;
                  break e;
                }
                var x = s.sibling;
                if (x !== null) {
                  x.return = s.return, q = x;
                  break e;
                }
                q = s.return;
              }
        }
        if (we = o, Oo(), hn && typeof hn.onPostCommitFiberRoot == "function")
          try {
            hn.onPostCommitFiberRoot(Nd, e);
          } catch {
          }
        n = !0;
      }
      return n;
    } finally {
      Oe = r, Ir.transition = t;
    }
  }
  return !1;
}
function Pb(e, t, r) {
  t = Pi(r, t), t = _P(e, t, 1), e = yo(e, t, 1), t = Bt(), e !== null && (Al(e, 1, t), Zt(e, t));
}
function et(e, t, r) {
  if (e.tag === 3)
    Pb(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Pb(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (bo === null || !bo.has(n))) {
          e = Pi(r, e), e = TP(t, e, 1), t = yo(t, e, 1), e = Bt(), t !== null && (Al(t, 1, e), Zt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function sR(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), t = Bt(), e.pingedLanes |= e.suspendedLanes & r, wt === e && (Tt & r) === r && (mt === 4 || mt === 3 && (Tt & 130023424) === Tt && 500 > st() - eg ? ea(e, 0) : Jm |= r), Zt(e, t);
}
function YP(e, t) {
  t === 0 && (e.mode & 1 ? (t = hu, hu <<= 1, !(hu & 130023424) && (hu = 4194304)) : t = 1);
  var r = Bt();
  e = Bn(e, t), e !== null && (Al(e, t, r), Zt(e, r));
}
function lR(e) {
  var t = e.memoizedState, r = 0;
  t !== null && (r = t.retryLane), YP(e, r);
}
function uR(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode, o = e.memoizedState;
      o !== null && (r = o.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  n !== null && n.delete(t), YP(e, r);
}
var qP;
qP = function(e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Xt.current)
      Kt = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128))
        return Kt = !1, XI(e, t, r);
      Kt = !!(e.flags & 131072);
    }
  else
    Kt = !1, He && t.flags & 1048576 && QC(t, Nc, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      rc(e, t), e = t.pendingProps;
      var o = wi(t, Ft.current);
      si(t, r), o = Ym(null, t, n, e, o, r);
      var a = qm();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Qt(n) ? (a = !0, Fc(t)) : a = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Bm(t), o.updater = Ud, t.stateNode = o, o._reactInternals = t, rv(t, n, e, r), t = av(null, t, n, !0, a, r)) : (t.tag = 0, He && a && Am(t), jt(null, t, o, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (rc(e, t), e = t.pendingProps, o = n._init, n = o(n._payload), t.type = n, o = t.tag = dR(n), e = Br(n, e), o) {
          case 0:
            t = ov(null, t, n, e, r);
            break e;
          case 1:
            t = hb(null, t, n, e, r);
            break e;
          case 11:
            t = fb(null, t, n, e, r);
            break e;
          case 14:
            t = pb(null, t, n, Br(n.type, e), r);
            break e;
        }
        throw Error(A(
          306,
          n,
          ""
        ));
      }
      return t;
    case 0:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Br(n, o), ov(e, t, n, o, r);
    case 1:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Br(n, o), hb(e, t, n, o, r);
    case 3:
      e: {
        if (MP(t), e === null)
          throw Error(A(387));
        n = t.pendingProps, a = t.memoizedState, o = a.element, tP(e, t), Vc(t, n, null, r);
        var i = t.memoizedState;
        if (n = i.element, a.isDehydrated)
          if (a = { element: n, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
            o = Pi(Error(A(423)), t), t = vb(e, t, n, r, o);
            break e;
          } else if (n !== o) {
            o = Pi(Error(A(424)), t), t = vb(e, t, n, r, o);
            break e;
          } else
            for (cr = go(t.stateNode.containerInfo.firstChild), dr = t, He = !0, Ur = null, r = aP(t, null, n, r), t.child = r; r; )
              r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if (xi(), n === o) {
            t = Wn(e, t, r);
            break e;
          }
          jt(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return iP(t), e === null && Jh(t), n = t.type, o = t.pendingProps, a = e !== null ? e.memoizedProps : null, i = o.children, qh(n, o) ? i = null : a !== null && qh(n, a) && (t.flags |= 32), OP(e, t), jt(e, t, i, r), t.child;
    case 6:
      return e === null && Jh(t), null;
    case 13:
      return IP(e, t, r);
    case 4:
      return Wm(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Si(t, null, n, r) : jt(e, t, n, r), t.child;
    case 11:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Br(n, o), fb(e, t, n, o, r);
    case 7:
      return jt(e, t, t.pendingProps, r), t.child;
    case 8:
      return jt(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return jt(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, o = t.pendingProps, a = t.memoizedProps, i = o.value, De(zc, n._currentValue), n._currentValue = i, a !== null)
          if (Qr(a.value, i)) {
            if (a.children === o.children && !Xt.current) {
              t = Wn(e, t, r);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var s = a.dependencies;
              if (s !== null) {
                i = a.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (a.tag === 1) {
                      l = An(-1, r & -r), l.tag = 2;
                      var u = a.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                      }
                    }
                    a.lanes |= r, l = a.alternate, l !== null && (l.lanes |= r), ev(
                      a.return,
                      r,
                      t
                    ), s.lanes |= r;
                    break;
                  }
                  l = l.next;
                }
              } else if (a.tag === 10)
                i = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (i = a.return, i === null)
                  throw Error(A(341));
                i.lanes |= r, s = i.alternate, s !== null && (s.lanes |= r), ev(i, r, t), i = a.sibling;
              } else
                i = a.child;
              if (i !== null)
                i.return = a;
              else
                for (i = a; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (a = i.sibling, a !== null) {
                    a.return = i.return, i = a;
                    break;
                  }
                  i = i.return;
                }
              a = i;
            }
        jt(e, t, o.children, r), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, n = t.pendingProps.children, si(t, r), o = Ar(o), n = n(o), t.flags |= 1, jt(e, t, n, r), t.child;
    case 14:
      return n = t.type, o = Br(n, t.pendingProps), o = Br(n.type, o), pb(e, t, n, o, r);
    case 15:
      return EP(e, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Br(n, o), rc(e, t), t.tag = 1, Qt(n) ? (e = !0, Fc(t)) : e = !1, si(t, r), nP(t, n, o), rv(t, n, o, r), av(null, t, n, !0, e, r);
    case 19:
      return RP(e, t, r);
    case 22:
      return $P(e, t, r);
  }
  throw Error(A(156, t.tag));
};
function KP(e, t) {
  return xC(e, t);
}
function cR(e, t, r, n) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Mr(e, t, r, n) {
  return new cR(e, t, r, n);
}
function og(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function dR(e) {
  if (typeof e == "function")
    return og(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Cm)
      return 11;
    if (e === Pm)
      return 14;
  }
  return 2;
}
function xo(e, t) {
  var r = e.alternate;
  return r === null ? (r = Mr(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function ac(e, t, r, n, o, a) {
  var i = 2;
  if (n = e, typeof e == "function")
    og(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case Aa:
          return ta(r.children, o, a, t);
        case Sm:
          i = 8, o |= 8;
          break;
        case _h:
          return e = Mr(12, r, t, o | 2), e.elementType = _h, e.lanes = a, e;
        case Th:
          return e = Mr(13, r, t, o), e.elementType = Th, e.lanes = a, e;
        case Eh:
          return e = Mr(19, r, t, o), e.elementType = Eh, e.lanes = a, e;
        case oC:
          return qd(r, o, a, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case rC:
                i = 10;
                break e;
              case nC:
                i = 9;
                break e;
              case Cm:
                i = 11;
                break e;
              case Pm:
                i = 14;
                break e;
              case oo:
                i = 16, n = null;
                break e;
            }
          throw Error(A(130, e == null ? e : typeof e, ""));
      }
  return t = Mr(i, r, t, o), t.elementType = e, t.type = n, t.lanes = a, t;
}
function ta(e, t, r, n) {
  return e = Mr(7, e, n, t), e.lanes = r, e;
}
function qd(e, t, r, n) {
  return e = Mr(22, e, n, t), e.elementType = oC, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
}
function bp(e, t, r) {
  return e = Mr(6, e, null, t), e.lanes = r, e;
}
function wp(e, t, r) {
  return t = Mr(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function fR(e, t, r, n, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ep(0), this.expirationTimes = ep(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ep(0), this.identifierPrefix = n, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function ag(e, t, r, n, o, a, i, s, l) {
  return e = new fR(e, t, r, s, l), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = Mr(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Bm(a), e;
}
function pR(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Da, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function XP(e) {
  if (!e)
    return ko;
  e = e._reactInternals;
  e: {
    if (va(e) !== e || e.tag !== 1)
      throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Qt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Qt(r))
      return KC(e, r, t);
  }
  return t;
}
function QP(e, t, r, n, o, a, i, s, l) {
  return e = ag(r, n, !0, e, o, a, i, s, l), e.context = XP(null), r = e.current, n = Bt(), o = wo(r), a = An(n, o), a.callback = t ?? null, yo(r, a, o), e.current.lanes = o, Al(e, o, n), Zt(e, n), e;
}
function Kd(e, t, r, n) {
  var o = t.current, a = Bt(), i = wo(o);
  return r = XP(r), t.context === null ? t.context = r : t.pendingContext = r, t = An(a, i), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = yo(o, t, i), e !== null && (Kr(e, o, i, a), Ju(e, o, i)), i;
}
function Kc(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function kb(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function ig(e, t) {
  kb(e, t), (e = e.alternate) && kb(e, t);
}
function hR() {
  return null;
}
var ZP = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function sg(e) {
  this._internalRoot = e;
}
Xd.prototype.render = sg.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(A(409));
  Kd(e, t, null, null);
};
Xd.prototype.unmount = sg.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ca(function() {
      Kd(null, e, null, null);
    }), t[Vn] = null;
  }
};
function Xd(e) {
  this._internalRoot = e;
}
Xd.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = EC();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < so.length && t !== 0 && t < so[r].priority; r++)
      ;
    so.splice(r, 0, e), r === 0 && OC(e);
  }
};
function lg(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Qd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function _b() {
}
function vR(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var a = n;
      n = function() {
        var u = Kc(i);
        a.call(u);
      };
    }
    var i = QP(t, n, e, 0, null, !1, !1, "", _b);
    return e._reactRootContainer = i, e[Vn] = i.current, ll(e.nodeType === 8 ? e.parentNode : e), ca(), i;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof n == "function") {
    var s = n;
    n = function() {
      var u = Kc(l);
      s.call(u);
    };
  }
  var l = ag(e, 0, !1, null, null, !1, !1, "", _b);
  return e._reactRootContainer = l, e[Vn] = l.current, ll(e.nodeType === 8 ? e.parentNode : e), ca(function() {
    Kd(t, l, r, n);
  }), l;
}
function Zd(e, t, r, n, o) {
  var a = r._reactRootContainer;
  if (a) {
    var i = a;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var l = Kc(i);
        s.call(l);
      };
    }
    Kd(t, i, e, o);
  } else
    i = vR(r, t, e, o, n);
  return Kc(i);
}
_C = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Cs(t.pendingLanes);
        r !== 0 && (Tm(t, r | 1), Zt(t, st()), !(we & 6) && (ki = st() + 500, Oo()));
      }
      break;
    case 13:
      ca(function() {
        var n = Bn(e, 1);
        if (n !== null) {
          var o = Bt();
          Kr(n, e, 1, o);
        }
      }), ig(e, 1);
  }
};
Em = function(e) {
  if (e.tag === 13) {
    var t = Bn(e, 134217728);
    if (t !== null) {
      var r = Bt();
      Kr(t, e, 134217728, r);
    }
    ig(e, 134217728);
  }
};
TC = function(e) {
  if (e.tag === 13) {
    var t = wo(e), r = Bn(e, t);
    if (r !== null) {
      var n = Bt();
      Kr(r, e, t, n);
    }
    ig(e, t);
  }
};
EC = function() {
  return Oe;
};
$C = function(e, t) {
  var r = Oe;
  try {
    return Oe = e, t();
  } finally {
    Oe = r;
  }
};
Nh = function(e, t, r) {
  switch (t) {
    case "input":
      if (Mh(e, r), t = r.name, r.type === "radio" && t != null) {
        for (r = e; r.parentNode; )
          r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var o = Bd(n);
            if (!o)
              throw Error(A(90));
            iC(n), Mh(n, o);
          }
        }
      }
      break;
    case "textarea":
      lC(e, r);
      break;
    case "select":
      t = r.value, t != null && ni(e, !!r.multiple, t, !1);
  }
};
vC = tg;
mC = ca;
var mR = { usingClientEntryPoint: !1, Events: [Ll, za, Bd, pC, hC, tg] }, is = { findFiberByHostInstance: Ko, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, gR = { bundleType: is.bundleType, version: is.version, rendererPackageName: is.rendererPackageName, rendererConfig: is.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Yn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = bC(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: is.findFiberByHostInstance || hR, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ku = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ku.isDisabled && ku.supportsFiber)
    try {
      Nd = ku.inject(gR), hn = ku;
    } catch {
    }
}
yr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mR;
yr.createPortal = function(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!lg(t))
    throw Error(A(200));
  return pR(e, t, null, r);
};
yr.createRoot = function(e, t) {
  if (!lg(e))
    throw Error(A(299));
  var r = !1, n = "", o = ZP;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ag(e, 1, !1, null, null, r, !1, n, o), e[Vn] = t.current, ll(e.nodeType === 8 ? e.parentNode : e), new sg(t);
};
yr.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
  return e = bC(t), e = e === null ? null : e.stateNode, e;
};
yr.flushSync = function(e) {
  return ca(e);
};
yr.hydrate = function(e, t, r) {
  if (!Qd(t))
    throw Error(A(200));
  return Zd(null, e, t, !0, r);
};
yr.hydrateRoot = function(e, t, r) {
  if (!lg(e))
    throw Error(A(405));
  var n = r != null && r.hydratedSources || null, o = !1, a = "", i = ZP;
  if (r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (a = r.identifierPrefix), r.onRecoverableError !== void 0 && (i = r.onRecoverableError)), t = QP(t, null, e, 1, r ?? null, o, !1, a, i), e[Vn] = t.current, ll(e), n)
    for (e = 0; e < n.length; e++)
      r = n[e], o = r._getVersion, o = o(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, o] : t.mutableSourceEagerHydrationData.push(
        r,
        o
      );
  return new Xd(t);
};
yr.render = function(e, t, r) {
  if (!Qd(t))
    throw Error(A(200));
  return Zd(null, e, t, !1, r);
};
yr.unmountComponentAtNode = function(e) {
  if (!Qd(e))
    throw Error(A(40));
  return e._reactRootContainer ? (ca(function() {
    Zd(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Vn] = null;
    });
  }), !0) : !1;
};
yr.unstable_batchedUpdates = tg;
yr.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
  if (!Qd(r))
    throw Error(A(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(A(38));
  return Zd(e, t, r, !1, n);
};
yr.version = "18.2.0-next-9e3b772b8-20220608";
function JP() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(JP);
    } catch (e) {
      console.error(e);
    }
}
JP(), QS.exports = yr;
var zl = QS.exports;
const yR = /* @__PURE__ */ Sn(zl);
var Tb = zl;
Ph.createRoot = Tb.createRoot, Ph.hydrateRoot = Tb.hydrateRoot;
var ek = "Expected a function", Eb = NaN, bR = "[object Symbol]", wR = /^\s+|\s+$/g, xR = /^[-+]0x[0-9a-f]+$/i, SR = /^0b[01]+$/i, CR = /^0o[0-7]+$/i, PR = parseInt, kR = typeof Or == "object" && Or && Or.Object === Object && Or, _R = typeof self == "object" && self && self.Object === Object && self, TR = kR || _R || Function("return this")(), ER = Object.prototype, $R = ER.toString, OR = Math.max, MR = Math.min, xp = function() {
  return TR.Date.now();
};
function IR(e, t, r) {
  var n, o, a, i, s, l, u = 0, c = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(ek);
  t = $b(t) || 0, Xc(r) && (c = !!r.leading, d = "maxWait" in r, a = d ? OR($b(r.maxWait) || 0, t) : a, f = "trailing" in r ? !!r.trailing : f);
  function p(P) {
    var C = n, _ = o;
    return n = o = void 0, u = P, i = e.apply(_, C), i;
  }
  function m(P) {
    return u = P, s = setTimeout(h, t), c ? p(P) : i;
  }
  function g(P) {
    var C = P - l, _ = P - u, $ = t - C;
    return d ? MR($, a - _) : $;
  }
  function y(P) {
    var C = P - l, _ = P - u;
    return l === void 0 || C >= t || C < 0 || d && _ >= a;
  }
  function h() {
    var P = xp();
    if (y(P))
      return v(P);
    s = setTimeout(h, g(P));
  }
  function v(P) {
    return s = void 0, f && n ? p(P) : (n = o = void 0, i);
  }
  function b() {
    s !== void 0 && clearTimeout(s), u = 0, n = l = o = s = void 0;
  }
  function x() {
    return s === void 0 ? i : v(xp());
  }
  function k() {
    var P = xp(), C = y(P);
    if (n = arguments, o = this, l = P, C) {
      if (s === void 0)
        return m(l);
      if (d)
        return s = setTimeout(h, t), p(l);
    }
    return s === void 0 && (s = setTimeout(h, t)), i;
  }
  return k.cancel = b, k.flush = x, k;
}
function RR(e, t, r) {
  var n = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(ek);
  return Xc(r) && (n = "leading" in r ? !!r.leading : n, o = "trailing" in r ? !!r.trailing : o), IR(e, t, {
    leading: n,
    maxWait: t,
    trailing: o
  });
}
function Xc(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function DR(e) {
  return !!e && typeof e == "object";
}
function AR(e) {
  return typeof e == "symbol" || DR(e) && $R.call(e) == bR;
}
function $b(e) {
  if (typeof e == "number")
    return e;
  if (AR(e))
    return Eb;
  if (Xc(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Xc(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(wR, "");
  var r = SR.test(e);
  return r || CR.test(e) ? PR(e.slice(2), r ? 2 : 8) : xR.test(e) ? Eb : +e;
}
var FR = RR;
const LR = /* @__PURE__ */ Sn(FR);
function NR(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function zR(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var jR = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var a;
      n.tags.length === 0 ? n.insertionPoint ? a = n.insertionPoint.nextSibling : n.prepend ? a = n.container.firstChild : a = n.before : a = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, a), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(zR(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = NR(o);
      try {
        a.insertRule(n, a.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Rt = "-ms-", Qc = "-moz-", Pe = "-webkit-", tk = "comm", ug = "rule", cg = "decl", VR = "@import", rk = "@keyframes", BR = "@layer", WR = Math.abs, Jd = String.fromCharCode, UR = Object.assign;
function HR(e, t) {
  return _t(e, 0) ^ 45 ? (((t << 2 ^ _t(e, 0)) << 2 ^ _t(e, 1)) << 2 ^ _t(e, 2)) << 2 ^ _t(e, 3) : 0;
}
function nk(e) {
  return e.trim();
}
function GR(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ke(e, t, r) {
  return e.replace(t, r);
}
function gv(e, t) {
  return e.indexOf(t);
}
function _t(e, t) {
  return e.charCodeAt(t) | 0;
}
function gl(e, t, r) {
  return e.slice(t, r);
}
function ln(e) {
  return e.length;
}
function dg(e) {
  return e.length;
}
function _u(e, t) {
  return t.push(e), e;
}
function YR(e, t) {
  return e.map(t).join("");
}
var ef = 1, _i = 1, ok = 0, tr = 0, ft = 0, ji = "";
function tf(e, t, r, n, o, a, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: ef, column: _i, length: i, return: "" };
}
function ss(e, t) {
  return UR(tf("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function qR() {
  return ft;
}
function KR() {
  return ft = tr > 0 ? _t(ji, --tr) : 0, _i--, ft === 10 && (_i = 1, ef--), ft;
}
function fr() {
  return ft = tr < ok ? _t(ji, tr++) : 0, _i++, ft === 10 && (_i = 1, ef++), ft;
}
function mn() {
  return _t(ji, tr);
}
function ic() {
  return tr;
}
function jl(e, t) {
  return gl(ji, e, t);
}
function yl(e) {
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
function ak(e) {
  return ef = _i = 1, ok = ln(ji = e), tr = 0, [];
}
function ik(e) {
  return ji = "", e;
}
function sc(e) {
  return nk(jl(tr - 1, yv(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function XR(e) {
  for (; (ft = mn()) && ft < 33; )
    fr();
  return yl(e) > 2 || yl(ft) > 3 ? "" : " ";
}
function QR(e, t) {
  for (; --t && fr() && !(ft < 48 || ft > 102 || ft > 57 && ft < 65 || ft > 70 && ft < 97); )
    ;
  return jl(e, ic() + (t < 6 && mn() == 32 && fr() == 32));
}
function yv(e) {
  for (; fr(); )
    switch (ft) {
      case e:
        return tr;
      case 34:
      case 39:
        e !== 34 && e !== 39 && yv(ft);
        break;
      case 40:
        e === 41 && yv(e);
        break;
      case 92:
        fr();
        break;
    }
  return tr;
}
function ZR(e, t) {
  for (; fr() && e + ft !== 57; )
    if (e + ft === 84 && mn() === 47)
      break;
  return "/*" + jl(t, tr - 1) + "*" + Jd(e === 47 ? e : fr());
}
function JR(e) {
  for (; !yl(mn()); )
    fr();
  return jl(e, tr);
}
function eD(e) {
  return ik(lc("", null, null, null, [""], e = ak(e), 0, [0], e));
}
function lc(e, t, r, n, o, a, i, s, l) {
  for (var u = 0, c = 0, d = i, f = 0, p = 0, m = 0, g = 1, y = 1, h = 1, v = 0, b = "", x = o, k = a, P = n, C = b; y; )
    switch (m = v, v = fr()) {
      case 40:
        if (m != 108 && _t(C, d - 1) == 58) {
          gv(C += ke(sc(v), "&", "&\f"), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += sc(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += XR(m);
        break;
      case 92:
        C += QR(ic() - 1, 7);
        continue;
      case 47:
        switch (mn()) {
          case 42:
          case 47:
            _u(tD(ZR(fr(), ic()), t, r), l);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * g:
        s[u++] = ln(C) * h;
      case 125 * g:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            y = 0;
          case 59 + c:
            h == -1 && (C = ke(C, /\f/g, "")), p > 0 && ln(C) - d && _u(p > 32 ? Mb(C + ";", n, r, d - 1) : Mb(ke(C, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            C += ";";
          default:
            if (_u(P = Ob(C, t, r, u, c, o, s, b, x = [], k = [], d), a), v === 123)
              if (c === 0)
                lc(C, t, P, P, x, a, d, s, k);
              else
                switch (f === 99 && _t(C, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    lc(e, P, P, n && _u(Ob(e, P, P, 0, 0, o, s, b, o, x = [], d), k), o, k, d, s, n ? x : k);
                    break;
                  default:
                    lc(C, P, P, P, [""], k, 0, s, k);
                }
        }
        u = c = p = 0, g = h = 1, b = C = "", d = i;
        break;
      case 58:
        d = 1 + ln(C), p = m;
      default:
        if (g < 1) {
          if (v == 123)
            --g;
          else if (v == 125 && g++ == 0 && KR() == 125)
            continue;
        }
        switch (C += Jd(v), v * g) {
          case 38:
            h = c > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            s[u++] = (ln(C) - 1) * h, h = 1;
            break;
          case 64:
            mn() === 45 && (C += sc(fr())), f = mn(), c = d = ln(b = C += JR(ic())), v++;
            break;
          case 45:
            m === 45 && ln(C) == 2 && (g = 0);
        }
    }
  return a;
}
function Ob(e, t, r, n, o, a, i, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? a : [""], p = dg(f), m = 0, g = 0, y = 0; m < n; ++m)
    for (var h = 0, v = gl(e, d + 1, d = WR(g = i[m])), b = e; h < p; ++h)
      (b = nk(g > 0 ? f[h] + " " + v : ke(v, /&\f/g, f[h]))) && (l[y++] = b);
  return tf(e, t, r, o === 0 ? ug : s, l, u, c);
}
function tD(e, t, r) {
  return tf(e, t, r, tk, Jd(qR()), gl(e, 2, -2), 0);
}
function Mb(e, t, r, n) {
  return tf(e, t, r, cg, gl(e, 0, n), gl(e, n + 1, -1), n);
}
function ui(e, t) {
  for (var r = "", n = dg(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function rD(e, t, r, n) {
  switch (e.type) {
    case BR:
      if (e.children.length)
        break;
    case VR:
    case cg:
      return e.return = e.return || e.value;
    case tk:
      return "";
    case rk:
      return e.return = e.value + "{" + ui(e.children, n) + "}";
    case ug:
      e.value = e.props.join(",");
  }
  return ln(r = ui(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function nD(e) {
  var t = dg(e);
  return function(r, n, o, a) {
    for (var i = "", s = 0; s < t; s++)
      i += e[s](r, n, o, a) || "";
    return i;
  };
}
function oD(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function sk(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var aD = function(t, r, n) {
  for (var o = 0, a = 0; o = a, a = mn(), o === 38 && a === 12 && (r[n] = 1), !yl(a); )
    fr();
  return jl(t, tr);
}, iD = function(t, r) {
  var n = -1, o = 44;
  do
    switch (yl(o)) {
      case 0:
        o === 38 && mn() === 12 && (r[n] = 1), t[n] += aD(tr - 1, r, n);
        break;
      case 2:
        t[n] += sc(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = mn() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Jd(o);
    }
  while (o = fr());
  return t;
}, sD = function(t, r) {
  return ik(iD(ak(t), r));
}, Ib = /* @__PURE__ */ new WeakMap(), lD = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Ib.get(n)) && !o) {
      Ib.set(t, !0);
      for (var a = [], i = sD(r, a), s = n.props, l = 0, u = 0; l < i.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = a[l] ? i[l].replace(/&\f/g, s[c]) : s[c] + " " + i[l];
    }
  }
}, uD = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function lk(e, t) {
  switch (HR(e, t)) {
    case 5103:
      return Pe + "print-" + e + e;
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
      return Pe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Pe + e + Qc + e + Rt + e + e;
    case 6828:
    case 4268:
      return Pe + e + Rt + e + e;
    case 6165:
      return Pe + e + Rt + "flex-" + e + e;
    case 5187:
      return Pe + e + ke(e, /(\w+).+(:[^]+)/, Pe + "box-$1$2" + Rt + "flex-$1$2") + e;
    case 5443:
      return Pe + e + Rt + "flex-item-" + ke(e, /flex-|-self/, "") + e;
    case 4675:
      return Pe + e + Rt + "flex-line-pack" + ke(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Pe + e + Rt + ke(e, "shrink", "negative") + e;
    case 5292:
      return Pe + e + Rt + ke(e, "basis", "preferred-size") + e;
    case 6060:
      return Pe + "box-" + ke(e, "-grow", "") + Pe + e + Rt + ke(e, "grow", "positive") + e;
    case 4554:
      return Pe + ke(e, /([^-])(transform)/g, "$1" + Pe + "$2") + e;
    case 6187:
      return ke(ke(ke(e, /(zoom-|grab)/, Pe + "$1"), /(image-set)/, Pe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ke(e, /(image-set\([^]*)/, Pe + "$1$`$1");
    case 4968:
      return ke(ke(e, /(.+:)(flex-)?(.*)/, Pe + "box-pack:$3" + Rt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Pe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ke(e, /(.+)-inline(.+)/, Pe + "$1$2") + e;
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
      if (ln(e) - 1 - t > 6)
        switch (_t(e, t + 1)) {
          case 109:
            if (_t(e, t + 4) !== 45)
              break;
          case 102:
            return ke(e, /(.+:)(.+)-([^]+)/, "$1" + Pe + "$2-$3$1" + Qc + (_t(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~gv(e, "stretch") ? lk(ke(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (_t(e, t + 1) !== 115)
        break;
    case 6444:
      switch (_t(e, ln(e) - 3 - (~gv(e, "!important") && 10))) {
        case 107:
          return ke(e, ":", ":" + Pe) + e;
        case 101:
          return ke(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Pe + (_t(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Pe + "$2$3$1" + Rt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (_t(e, t + 11)) {
        case 114:
          return Pe + e + Rt + ke(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Pe + e + Rt + ke(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Pe + e + Rt + ke(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Pe + e + Rt + e + e;
  }
  return e;
}
var cD = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case cg:
        t.return = lk(t.value, t.length);
        break;
      case rk:
        return ui([ss(t, {
          value: ke(t.value, "@", "@" + Pe)
        })], o);
      case ug:
        if (t.length)
          return YR(t.props, function(a) {
            switch (GR(a, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ui([ss(t, {
                  props: [ke(a, /:(read-\w+)/, ":" + Qc + "$1")]
                })], o);
              case "::placeholder":
                return ui([ss(t, {
                  props: [ke(a, /:(plac\w+)/, ":" + Pe + "input-$1")]
                }), ss(t, {
                  props: [ke(a, /:(plac\w+)/, ":" + Qc + "$1")]
                }), ss(t, {
                  props: [ke(a, /:(plac\w+)/, Rt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, dD = [cD], fD = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(g) {
      var y = g.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || dD, a = {}, i, s = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(g) {
      for (var y = g.getAttribute("data-emotion").split(" "), h = 1; h < y.length; h++)
        a[y[h]] = !0;
      s.push(g);
    }
  );
  var l, u = [lD, uD];
  {
    var c, d = [rD, oD(function(g) {
      c.insert(g);
    })], f = nD(u.concat(o, d)), p = function(y) {
      return ui(eD(y), f);
    };
    l = function(y, h, v, b) {
      c = v, p(y ? y + "{" + h.styles + "}" : h.styles), b && (m.inserted[h.name] = !0);
    };
  }
  var m = {
    key: r,
    sheet: new jR({
      key: r,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: a,
    registered: {},
    insert: l
  };
  return m.sheet.hydrate(s), m;
};
function X() {
  return X = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, X.apply(this, arguments);
}
var uk = { exports: {} }, Me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xt = typeof Symbol == "function" && Symbol.for, fg = xt ? Symbol.for("react.element") : 60103, pg = xt ? Symbol.for("react.portal") : 60106, rf = xt ? Symbol.for("react.fragment") : 60107, nf = xt ? Symbol.for("react.strict_mode") : 60108, of = xt ? Symbol.for("react.profiler") : 60114, af = xt ? Symbol.for("react.provider") : 60109, sf = xt ? Symbol.for("react.context") : 60110, hg = xt ? Symbol.for("react.async_mode") : 60111, lf = xt ? Symbol.for("react.concurrent_mode") : 60111, uf = xt ? Symbol.for("react.forward_ref") : 60112, cf = xt ? Symbol.for("react.suspense") : 60113, pD = xt ? Symbol.for("react.suspense_list") : 60120, df = xt ? Symbol.for("react.memo") : 60115, ff = xt ? Symbol.for("react.lazy") : 60116, hD = xt ? Symbol.for("react.block") : 60121, vD = xt ? Symbol.for("react.fundamental") : 60117, mD = xt ? Symbol.for("react.responder") : 60118, gD = xt ? Symbol.for("react.scope") : 60119;
function wr(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case fg:
        switch (e = e.type, e) {
          case hg:
          case lf:
          case rf:
          case of:
          case nf:
          case cf:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case sf:
              case uf:
              case ff:
              case df:
              case af:
                return e;
              default:
                return t;
            }
        }
      case pg:
        return t;
    }
  }
}
function ck(e) {
  return wr(e) === lf;
}
Me.AsyncMode = hg;
Me.ConcurrentMode = lf;
Me.ContextConsumer = sf;
Me.ContextProvider = af;
Me.Element = fg;
Me.ForwardRef = uf;
Me.Fragment = rf;
Me.Lazy = ff;
Me.Memo = df;
Me.Portal = pg;
Me.Profiler = of;
Me.StrictMode = nf;
Me.Suspense = cf;
Me.isAsyncMode = function(e) {
  return ck(e) || wr(e) === hg;
};
Me.isConcurrentMode = ck;
Me.isContextConsumer = function(e) {
  return wr(e) === sf;
};
Me.isContextProvider = function(e) {
  return wr(e) === af;
};
Me.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fg;
};
Me.isForwardRef = function(e) {
  return wr(e) === uf;
};
Me.isFragment = function(e) {
  return wr(e) === rf;
};
Me.isLazy = function(e) {
  return wr(e) === ff;
};
Me.isMemo = function(e) {
  return wr(e) === df;
};
Me.isPortal = function(e) {
  return wr(e) === pg;
};
Me.isProfiler = function(e) {
  return wr(e) === of;
};
Me.isStrictMode = function(e) {
  return wr(e) === nf;
};
Me.isSuspense = function(e) {
  return wr(e) === cf;
};
Me.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === rf || e === lf || e === of || e === nf || e === cf || e === pD || typeof e == "object" && e !== null && (e.$$typeof === ff || e.$$typeof === df || e.$$typeof === af || e.$$typeof === sf || e.$$typeof === uf || e.$$typeof === vD || e.$$typeof === mD || e.$$typeof === gD || e.$$typeof === hD);
};
Me.typeOf = wr;
uk.exports = Me;
var yD = uk.exports, dk = yD, bD = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, wD = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, fk = {};
fk[dk.ForwardRef] = bD;
fk[dk.Memo] = wD;
var xD = !0;
function pk(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var vg = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  xD === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, hk = function(t, r, n) {
  vg(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var a = r;
    do
      t.insert(r === a ? "." + o : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function SD(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var CD = {
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
}, PD = /[A-Z]|^ms/g, kD = /_EMO_([^_]+?)_([^]*?)_EMO_/g, vk = function(t) {
  return t.charCodeAt(1) === 45;
}, Rb = function(t) {
  return t != null && typeof t != "boolean";
}, Sp = /* @__PURE__ */ sk(function(e) {
  return vk(e) ? e : e.replace(PD, "-$&").toLowerCase();
}), Db = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(kD, function(n, o, a) {
          return un = {
            name: o,
            styles: a,
            next: un
          }, o;
        });
  }
  return CD[t] !== 1 && !vk(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function bl(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return un = {
          name: r.name,
          styles: r.styles,
          next: un
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            un = {
              name: n.name,
              styles: n.styles,
              next: un
            }, n = n.next;
        var o = r.styles + ";";
        return o;
      }
      return _D(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var a = un, i = r(e);
        return un = a, bl(e, t, i);
      }
      break;
    }
  }
  if (t == null)
    return r;
  var s = t[r];
  return s !== void 0 ? s : r;
}
function _D(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += bl(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += a + "{" + t[i] + "}" : Rb(i) && (n += Sp(a) + ":" + Db(a, i) + ";");
      else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var s = 0; s < i.length; s++)
          Rb(i[s]) && (n += Sp(a) + ":" + Db(a, i[s]) + ";");
      else {
        var l = bl(e, t, i);
        switch (a) {
          case "animation":
          case "animationName": {
            n += Sp(a) + ":" + l + ";";
            break;
          }
          default:
            n += a + "{" + l + "}";
        }
      }
    }
  return n;
}
var Ab = /label:\s*([^\s;\n{]+)\s*(;|$)/g, un, mg = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, a = "";
  un = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (o = !1, a += bl(n, r, i)) : a += i[0];
  for (var s = 1; s < t.length; s++)
    a += bl(n, r, t[s]), o && (a += i[s]);
  Ab.lastIndex = 0;
  for (var l = "", u; (u = Ab.exec(a)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = SD(a) + l;
  return {
    name: c,
    styles: a,
    next: un
  };
}, TD = function(t) {
  return t();
}, ED = xy.useInsertionEffect ? xy.useInsertionEffect : !1, mk = ED || TD, gg = {}.hasOwnProperty, gk = /* @__PURE__ */ w.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ fD({
    key: "css"
  }) : null
);
gk.Provider;
var yk = function(t) {
  return /* @__PURE__ */ w.forwardRef(function(r, n) {
    var o = w.useContext(gk);
    return t(r, o, n);
  });
}, yg = /* @__PURE__ */ w.createContext({}), bv = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", $D = function(t, r) {
  var n = {};
  for (var o in r)
    gg.call(r, o) && (n[o] = r[o]);
  return n[bv] = t, n;
}, OD = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return vg(r, n, o), mk(function() {
    return hk(r, n, o);
  }), null;
}, MD = /* @__PURE__ */ yk(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[bv], a = [n], i = "";
  typeof e.className == "string" ? i = pk(t.registered, a, e.className) : e.className != null && (i = e.className + " ");
  var s = mg(a, void 0, w.useContext(yg));
  i += t.key + "-" + s.name;
  var l = {};
  for (var u in e)
    gg.call(e, u) && u !== "css" && u !== bv && (l[u] = e[u]);
  return l.ref = r, l.className = i, /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(OD, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ w.createElement(o, l));
}), ID = MD, oe = function(t, r) {
  var n = arguments;
  if (r == null || !gg.call(r, "css"))
    return w.createElement.apply(void 0, n);
  var o = n.length, a = new Array(o);
  a[0] = ID, a[1] = $D(t, r);
  for (var i = 2; i < o; i++)
    a[i] = n[i];
  return w.createElement.apply(null, a);
};
function bg() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return mg(t);
}
var bk = function() {
  var t = bg.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
function RD(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function xr(e = {}) {
  const {
    name: t,
    strict: r = !0,
    hookName: n = "useContext",
    providerName: o = "Provider",
    errorMessage: a,
    defaultValue: i
  } = e, s = w.createContext(i);
  s.displayName = t;
  function l() {
    var u;
    const c = w.useContext(s);
    if (!c && r) {
      const d = new Error(
        a ?? RD(n, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [_de, DD] = xr({
  strict: !1,
  name: "PortalManagerContext"
}), wl = globalThis != null && globalThis.document ? w.useLayoutEffect : w.useEffect, [wk, AD] = xr({
  strict: !1,
  name: "PortalContext"
}), wg = "chakra-portal", FD = ".chakra-portal", LD = (e) => /* @__PURE__ */ I.jsx(
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
), ND = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = w.useState(null), a = w.useRef(null), [, i] = w.useState({});
  w.useEffect(() => i({}), []);
  const s = AD(), l = DD();
  wl(() => {
    if (!n)
      return;
    const c = n.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    a.current = c.createElement("div"), a.current.className = wg, d.appendChild(a.current), i({});
    const f = a.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ I.jsx(LD, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return a.current ? zl.createPortal(
    /* @__PURE__ */ I.jsx(wk, { value: a.current, children: u }),
    a.current
  ) : /* @__PURE__ */ I.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, zD = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, a = o ?? (typeof window < "u" ? document.body : void 0), i = w.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = wg), l;
  }, [o]), [, s] = w.useState({});
  return wl(() => s({}), []), wl(() => {
    if (!(!i || !a))
      return a.appendChild(i), () => {
        a.removeChild(i);
      };
  }, [i, a]), a && i ? zl.createPortal(
    /* @__PURE__ */ I.jsx(wk, { value: n ? i : null, children: t }),
    i
  ) : null;
};
function pf(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ I.jsx(zD, { containerRef: r, ...n }) : /* @__PURE__ */ I.jsx(ND, { ...n });
}
pf.className = wg;
pf.selector = FD;
pf.displayName = "Portal";
function Mo() {
  const e = w.useContext(
    yg
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var xk = w.createContext({});
xk.displayName = "ColorModeContext";
function Vl() {
  const e = w.useContext(xk);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function Fb(e, t) {
  const { colorMode: r } = Vl();
  return r === "dark" ? t : e;
}
function jD() {
  const e = Vl(), t = Mo();
  return { ...e, theme: t };
}
var Be = (...e) => e.filter(Boolean).join(" ");
function Rr(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function In(e, ...t) {
  return VD(e) ? e(...t) : e;
}
var VD = (e) => typeof e == "function", on = (e) => e ? "" : void 0, Cp = (e) => e ? !0 : void 0;
function kt(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function BD(...e) {
  return function(r) {
    e.forEach((n) => {
      n == null || n(r);
    });
  };
}
var Zc = { exports: {} };
Zc.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, a = 16, i = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", m = "[object GeneratorFunction]", g = "[object Map]", y = "[object Number]", h = "[object Null]", v = "[object Object]", b = "[object Proxy]", x = "[object RegExp]", k = "[object Set]", P = "[object String]", C = "[object Undefined]", _ = "[object WeakMap]", $ = "[object ArrayBuffer]", O = "[object DataView]", D = "[object Float32Array]", H = "[object Float64Array]", V = "[object Int8Array]", L = "[object Int16Array]", F = "[object Int32Array]", B = "[object Uint8Array]", Z = "[object Uint8ClampedArray]", R = "[object Uint16Array]", N = "[object Uint32Array]", K = /[\\^$.*+?()[\]{}|]/g, W = /^\[object .+?Constructor\]$/, Q = /^(?:0|[1-9]\d*)$/, j = {};
  j[D] = j[H] = j[V] = j[L] = j[F] = j[B] = j[Z] = j[R] = j[N] = !0, j[s] = j[l] = j[$] = j[c] = j[O] = j[d] = j[f] = j[p] = j[g] = j[y] = j[v] = j[x] = j[k] = j[P] = j[_] = !1;
  var J = typeof Or == "object" && Or && Or.Object === Object && Or, ce = typeof self == "object" && self && self.Object === Object && self, se = J || ce || Function("return this")(), ue = t && !t.nodeType && t, ne = ue && !0 && e && !e.nodeType && e, ee = ne && ne.exports === ue, xe = ee && J.process, Le = function() {
    try {
      var S = ne && ne.require && ne.require("util").types;
      return S || xe && xe.binding && xe.binding("util");
    } catch {
    }
  }(), Nt = Le && Le.isTypedArray;
  function Gt(S, T, M) {
    switch (M.length) {
      case 0:
        return S.call(T);
      case 1:
        return S.call(T, M[0]);
      case 2:
        return S.call(T, M[0], M[1]);
      case 3:
        return S.call(T, M[0], M[1], M[2]);
    }
    return S.apply(T, M);
  }
  function Sr(S, T) {
    for (var M = -1, G = Array(S); ++M < S; )
      G[M] = T(M);
    return G;
  }
  function de(S) {
    return function(T) {
      return S(T);
    };
  }
  function $t(S, T) {
    return S == null ? void 0 : S[T];
  }
  function it(S, T) {
    return function(M) {
      return S(T(M));
    };
  }
  var ir = Array.prototype, Xn = Function.prototype, Ot = Object.prototype, Jr = se["__core-js_shared__"], Qn = Xn.toString, Cr = Ot.hasOwnProperty, Sa = function() {
    var S = /[^.]+$/.exec(Jr && Jr.keys && Jr.keys.IE_PROTO || "");
    return S ? "Symbol(src)_1." + S : "";
  }(), Ki = Ot.toString, tu = Qn.call(Object), ru = RegExp(
    "^" + Qn.call(Cr).replace(K, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Fo = ee ? se.Buffer : void 0, ty = se.Symbol, ry = se.Uint8Array, ny = Fo ? Fo.allocUnsafe : void 0, oy = it(Object.getPrototypeOf, Object), ay = Object.create, W$ = Ot.propertyIsEnumerable, U$ = ir.splice, Lo = ty ? ty.toStringTag : void 0, nu = function() {
    try {
      var S = Vf(Object, "defineProperty");
      return S({}, "", {}), S;
    } catch {
    }
  }(), H$ = Fo ? Fo.isBuffer : void 0, iy = Math.max, G$ = Date.now, sy = Vf(se, "Map"), Xi = Vf(Object, "create"), Y$ = /* @__PURE__ */ function() {
    function S() {
    }
    return function(T) {
      if (!zo(T))
        return {};
      if (ay)
        return ay(T);
      S.prototype = T;
      var M = new S();
      return S.prototype = void 0, M;
    };
  }();
  function No(S) {
    var T = -1, M = S == null ? 0 : S.length;
    for (this.clear(); ++T < M; ) {
      var G = S[T];
      this.set(G[0], G[1]);
    }
  }
  function q$() {
    this.__data__ = Xi ? Xi(null) : {}, this.size = 0;
  }
  function K$(S) {
    var T = this.has(S) && delete this.__data__[S];
    return this.size -= T ? 1 : 0, T;
  }
  function X$(S) {
    var T = this.__data__;
    if (Xi) {
      var M = T[S];
      return M === n ? void 0 : M;
    }
    return Cr.call(T, S) ? T[S] : void 0;
  }
  function Q$(S) {
    var T = this.__data__;
    return Xi ? T[S] !== void 0 : Cr.call(T, S);
  }
  function Z$(S, T) {
    var M = this.__data__;
    return this.size += this.has(S) ? 0 : 1, M[S] = Xi && T === void 0 ? n : T, this;
  }
  No.prototype.clear = q$, No.prototype.delete = K$, No.prototype.get = X$, No.prototype.has = Q$, No.prototype.set = Z$;
  function Pn(S) {
    var T = -1, M = S == null ? 0 : S.length;
    for (this.clear(); ++T < M; ) {
      var G = S[T];
      this.set(G[0], G[1]);
    }
  }
  function J$() {
    this.__data__ = [], this.size = 0;
  }
  function eO(S) {
    var T = this.__data__, M = ou(T, S);
    if (M < 0)
      return !1;
    var G = T.length - 1;
    return M == G ? T.pop() : U$.call(T, M, 1), --this.size, !0;
  }
  function tO(S) {
    var T = this.__data__, M = ou(T, S);
    return M < 0 ? void 0 : T[M][1];
  }
  function rO(S) {
    return ou(this.__data__, S) > -1;
  }
  function nO(S, T) {
    var M = this.__data__, G = ou(M, S);
    return G < 0 ? (++this.size, M.push([S, T])) : M[G][1] = T, this;
  }
  Pn.prototype.clear = J$, Pn.prototype.delete = eO, Pn.prototype.get = tO, Pn.prototype.has = rO, Pn.prototype.set = nO;
  function Ca(S) {
    var T = -1, M = S == null ? 0 : S.length;
    for (this.clear(); ++T < M; ) {
      var G = S[T];
      this.set(G[0], G[1]);
    }
  }
  function oO() {
    this.size = 0, this.__data__ = {
      hash: new No(),
      map: new (sy || Pn)(),
      string: new No()
    };
  }
  function aO(S) {
    var T = iu(this, S).delete(S);
    return this.size -= T ? 1 : 0, T;
  }
  function iO(S) {
    return iu(this, S).get(S);
  }
  function sO(S) {
    return iu(this, S).has(S);
  }
  function lO(S, T) {
    var M = iu(this, S), G = M.size;
    return M.set(S, T), this.size += M.size == G ? 0 : 1, this;
  }
  Ca.prototype.clear = oO, Ca.prototype.delete = aO, Ca.prototype.get = iO, Ca.prototype.has = sO, Ca.prototype.set = lO;
  function Pa(S) {
    var T = this.__data__ = new Pn(S);
    this.size = T.size;
  }
  function uO() {
    this.__data__ = new Pn(), this.size = 0;
  }
  function cO(S) {
    var T = this.__data__, M = T.delete(S);
    return this.size = T.size, M;
  }
  function dO(S) {
    return this.__data__.get(S);
  }
  function fO(S) {
    return this.__data__.has(S);
  }
  function pO(S, T) {
    var M = this.__data__;
    if (M instanceof Pn) {
      var G = M.__data__;
      if (!sy || G.length < r - 1)
        return G.push([S, T]), this.size = ++M.size, this;
      M = this.__data__ = new Ca(G);
    }
    return M.set(S, T), this.size = M.size, this;
  }
  Pa.prototype.clear = uO, Pa.prototype.delete = cO, Pa.prototype.get = dO, Pa.prototype.has = fO, Pa.prototype.set = pO;
  function hO(S, T) {
    var M = Uf(S), G = !M && Wf(S), ge = !M && !G && fy(S), Ie = !M && !G && !ge && hy(S), We = M || G || ge || Ie, ve = We ? Sr(S.length, String) : [], Ue = ve.length;
    for (var Pr in S)
      (T || Cr.call(S, Pr)) && !(We && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Pr == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      ge && (Pr == "offset" || Pr == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Ie && (Pr == "buffer" || Pr == "byteLength" || Pr == "byteOffset") || // Skip index properties.
      cy(Pr, Ue))) && ve.push(Pr);
    return ve;
  }
  function zf(S, T, M) {
    (M !== void 0 && !su(S[T], M) || M === void 0 && !(T in S)) && jf(S, T, M);
  }
  function vO(S, T, M) {
    var G = S[T];
    (!(Cr.call(S, T) && su(G, M)) || M === void 0 && !(T in S)) && jf(S, T, M);
  }
  function ou(S, T) {
    for (var M = S.length; M--; )
      if (su(S[M][0], T))
        return M;
    return -1;
  }
  function jf(S, T, M) {
    T == "__proto__" && nu ? nu(S, T, {
      configurable: !0,
      enumerable: !0,
      value: M,
      writable: !0
    }) : S[T] = M;
  }
  var mO = $O();
  function au(S) {
    return S == null ? S === void 0 ? C : h : Lo && Lo in Object(S) ? OO(S) : FO(S);
  }
  function ly(S) {
    return Qi(S) && au(S) == s;
  }
  function gO(S) {
    if (!zo(S) || DO(S))
      return !1;
    var T = Gf(S) ? ru : W;
    return T.test(jO(S));
  }
  function yO(S) {
    return Qi(S) && py(S.length) && !!j[au(S)];
  }
  function bO(S) {
    if (!zo(S))
      return AO(S);
    var T = dy(S), M = [];
    for (var G in S)
      G == "constructor" && (T || !Cr.call(S, G)) || M.push(G);
    return M;
  }
  function uy(S, T, M, G, ge) {
    S !== T && mO(T, function(Ie, We) {
      if (ge || (ge = new Pa()), zo(Ie))
        wO(S, T, We, M, uy, G, ge);
      else {
        var ve = G ? G(Bf(S, We), Ie, We + "", S, T, ge) : void 0;
        ve === void 0 && (ve = Ie), zf(S, We, ve);
      }
    }, vy);
  }
  function wO(S, T, M, G, ge, Ie, We) {
    var ve = Bf(S, M), Ue = Bf(T, M), Pr = We.get(Ue);
    if (Pr) {
      zf(S, M, Pr);
      return;
    }
    var sr = Ie ? Ie(ve, Ue, M + "", S, T, We) : void 0, Zi = sr === void 0;
    if (Zi) {
      var Yf = Uf(Ue), qf = !Yf && fy(Ue), gy = !Yf && !qf && hy(Ue);
      sr = Ue, Yf || qf || gy ? Uf(ve) ? sr = ve : VO(ve) ? sr = _O(ve) : qf ? (Zi = !1, sr = CO(Ue, !0)) : gy ? (Zi = !1, sr = kO(Ue, !0)) : sr = [] : BO(Ue) || Wf(Ue) ? (sr = ve, Wf(ve) ? sr = WO(ve) : (!zo(ve) || Gf(ve)) && (sr = MO(Ue))) : Zi = !1;
    }
    Zi && (We.set(Ue, sr), ge(sr, Ue, G, Ie, We), We.delete(Ue)), zf(S, M, sr);
  }
  function xO(S, T) {
    return NO(LO(S, T, my), S + "");
  }
  var SO = nu ? function(S, T) {
    return nu(S, "toString", {
      configurable: !0,
      enumerable: !1,
      value: HO(T),
      writable: !0
    });
  } : my;
  function CO(S, T) {
    if (T)
      return S.slice();
    var M = S.length, G = ny ? ny(M) : new S.constructor(M);
    return S.copy(G), G;
  }
  function PO(S) {
    var T = new S.constructor(S.byteLength);
    return new ry(T).set(new ry(S)), T;
  }
  function kO(S, T) {
    var M = T ? PO(S.buffer) : S.buffer;
    return new S.constructor(M, S.byteOffset, S.length);
  }
  function _O(S, T) {
    var M = -1, G = S.length;
    for (T || (T = Array(G)); ++M < G; )
      T[M] = S[M];
    return T;
  }
  function TO(S, T, M, G) {
    var ge = !M;
    M || (M = {});
    for (var Ie = -1, We = T.length; ++Ie < We; ) {
      var ve = T[Ie], Ue = G ? G(M[ve], S[ve], ve, M, S) : void 0;
      Ue === void 0 && (Ue = S[ve]), ge ? jf(M, ve, Ue) : vO(M, ve, Ue);
    }
    return M;
  }
  function EO(S) {
    return xO(function(T, M) {
      var G = -1, ge = M.length, Ie = ge > 1 ? M[ge - 1] : void 0, We = ge > 2 ? M[2] : void 0;
      for (Ie = S.length > 3 && typeof Ie == "function" ? (ge--, Ie) : void 0, We && IO(M[0], M[1], We) && (Ie = ge < 3 ? void 0 : Ie, ge = 1), T = Object(T); ++G < ge; ) {
        var ve = M[G];
        ve && S(T, ve, G, Ie);
      }
      return T;
    });
  }
  function $O(S) {
    return function(T, M, G) {
      for (var ge = -1, Ie = Object(T), We = G(T), ve = We.length; ve--; ) {
        var Ue = We[S ? ve : ++ge];
        if (M(Ie[Ue], Ue, Ie) === !1)
          break;
      }
      return T;
    };
  }
  function iu(S, T) {
    var M = S.__data__;
    return RO(T) ? M[typeof T == "string" ? "string" : "hash"] : M.map;
  }
  function Vf(S, T) {
    var M = $t(S, T);
    return gO(M) ? M : void 0;
  }
  function OO(S) {
    var T = Cr.call(S, Lo), M = S[Lo];
    try {
      S[Lo] = void 0;
      var G = !0;
    } catch {
    }
    var ge = Ki.call(S);
    return G && (T ? S[Lo] = M : delete S[Lo]), ge;
  }
  function MO(S) {
    return typeof S.constructor == "function" && !dy(S) ? Y$(oy(S)) : {};
  }
  function cy(S, T) {
    var M = typeof S;
    return T = T ?? i, !!T && (M == "number" || M != "symbol" && Q.test(S)) && S > -1 && S % 1 == 0 && S < T;
  }
  function IO(S, T, M) {
    if (!zo(M))
      return !1;
    var G = typeof T;
    return (G == "number" ? Hf(M) && cy(T, M.length) : G == "string" && T in M) ? su(M[T], S) : !1;
  }
  function RO(S) {
    var T = typeof S;
    return T == "string" || T == "number" || T == "symbol" || T == "boolean" ? S !== "__proto__" : S === null;
  }
  function DO(S) {
    return !!Sa && Sa in S;
  }
  function dy(S) {
    var T = S && S.constructor, M = typeof T == "function" && T.prototype || Ot;
    return S === M;
  }
  function AO(S) {
    var T = [];
    if (S != null)
      for (var M in Object(S))
        T.push(M);
    return T;
  }
  function FO(S) {
    return Ki.call(S);
  }
  function LO(S, T, M) {
    return T = iy(T === void 0 ? S.length - 1 : T, 0), function() {
      for (var G = arguments, ge = -1, Ie = iy(G.length - T, 0), We = Array(Ie); ++ge < Ie; )
        We[ge] = G[T + ge];
      ge = -1;
      for (var ve = Array(T + 1); ++ge < T; )
        ve[ge] = G[ge];
      return ve[T] = M(We), Gt(S, this, ve);
    };
  }
  function Bf(S, T) {
    if (!(T === "constructor" && typeof S[T] == "function") && T != "__proto__")
      return S[T];
  }
  var NO = zO(SO);
  function zO(S) {
    var T = 0, M = 0;
    return function() {
      var G = G$(), ge = a - (G - M);
      if (M = G, ge > 0) {
        if (++T >= o)
          return arguments[0];
      } else
        T = 0;
      return S.apply(void 0, arguments);
    };
  }
  function jO(S) {
    if (S != null) {
      try {
        return Qn.call(S);
      } catch {
      }
      try {
        return S + "";
      } catch {
      }
    }
    return "";
  }
  function su(S, T) {
    return S === T || S !== S && T !== T;
  }
  var Wf = ly(/* @__PURE__ */ function() {
    return arguments;
  }()) ? ly : function(S) {
    return Qi(S) && Cr.call(S, "callee") && !W$.call(S, "callee");
  }, Uf = Array.isArray;
  function Hf(S) {
    return S != null && py(S.length) && !Gf(S);
  }
  function VO(S) {
    return Qi(S) && Hf(S);
  }
  var fy = H$ || GO;
  function Gf(S) {
    if (!zo(S))
      return !1;
    var T = au(S);
    return T == p || T == m || T == u || T == b;
  }
  function py(S) {
    return typeof S == "number" && S > -1 && S % 1 == 0 && S <= i;
  }
  function zo(S) {
    var T = typeof S;
    return S != null && (T == "object" || T == "function");
  }
  function Qi(S) {
    return S != null && typeof S == "object";
  }
  function BO(S) {
    if (!Qi(S) || au(S) != v)
      return !1;
    var T = oy(S);
    if (T === null)
      return !0;
    var M = Cr.call(T, "constructor") && T.constructor;
    return typeof M == "function" && M instanceof M && Qn.call(M) == tu;
  }
  var hy = Nt ? de(Nt) : yO;
  function WO(S) {
    return TO(S, vy(S));
  }
  function vy(S) {
    return Hf(S) ? hO(S, !0) : bO(S);
  }
  var UO = EO(function(S, T, M, G) {
    uy(S, T, M, G);
  });
  function HO(S) {
    return function() {
      return S;
    };
  }
  function my(S) {
    return S;
  }
  function GO() {
    return !1;
  }
  e.exports = UO;
})(Zc, Zc.exports);
var WD = Zc.exports;
const Yr = /* @__PURE__ */ Sn(WD);
var UD = (e) => /!(important)?$/.test(e), Lb = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, HD = (e, t) => (r) => {
  const n = String(t), o = UD(n), a = Lb(n), i = e ? `${e}.${a}` : a;
  let s = Rr(r.__cssMap) && i in r.__cssMap ? r.__cssMap[i].varRef : t;
  return s = Lb(s), o ? `${s} !important` : s;
};
function xg(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (a, i) => {
    var s;
    const l = HD(t, a)(i);
    let u = (s = r == null ? void 0 : r(l, i)) != null ? s : l;
    return n && (u = n(u, i)), u;
  };
}
var Tu = (...e) => (t) => e.reduce((r, n) => n(r), t);
function kr(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = xg({
      scale: e,
      transform: t
    }), n;
  };
}
var GD = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function YD(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: GD(t),
    transform: r ? xg({
      scale: r,
      compose: n
    }) : n
  };
}
var Sk = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function qD() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...Sk
  ].join(" ");
}
function KD() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...Sk
  ].join(" ");
}
var XD = {
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
}, QD = {
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
function ZD(e) {
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
var JD = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, wv = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, eA = new Set(Object.values(wv)), xv = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), tA = (e) => e.trim();
function rA(e, t) {
  if (e == null || xv.has(e))
    return e;
  if (!(Sv(e) || xv.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), a = o == null ? void 0 : o[1], i = o == null ? void 0 : o[2];
  if (!a || !i)
    return e;
  const s = a.includes("-gradient") ? a : `${a}-gradient`, [l, ...u] = i.split(",").map(tA).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in wv ? wv[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (eA.has(f))
      return f;
    const p = f.indexOf(" "), [m, g] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], y = Sv(g) ? g : g && g.split(" "), h = `colors.${m}`, v = h in t.__cssMap ? t.__cssMap[h].varRef : m;
    return y ? [
      v,
      ...Array.isArray(y) ? y : [y]
    ].join(" ") : v;
  });
  return `${s}(${d.join(", ")})`;
}
var Sv = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), nA = (e, t) => rA(e, t ?? {});
function oA(e) {
  return /^var\(--.+\)$/.test(e);
}
var aA = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, tn = (e) => (t) => `${e}(${t})`, me = {
  filter(e) {
    return e !== "auto" ? e : XD;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : QD;
  },
  ring(e) {
    return ZD(me.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? qD() : e === "auto-gpu" ? KD() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = aA(e);
    return t || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, t) {
    const r = { left: "right", right: "left" };
    return t.direction === "rtl" ? r[e] : e;
  },
  degree(e) {
    if (oA(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: nA,
  blur: tn("blur"),
  opacity: tn("opacity"),
  brightness: tn("brightness"),
  contrast: tn("contrast"),
  dropShadow: tn("drop-shadow"),
  grayscale: tn("grayscale"),
  hueRotate: (e) => tn("hue-rotate")(me.degree(e)),
  invert: tn("invert"),
  saturate: tn("saturate"),
  sepia: tn("sepia"),
  bgImage(e) {
    return e == null || Sv(e) || xv.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: r, divide: n } = (t = JD[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, E = {
  borderWidths: kr("borderWidths"),
  borderStyles: kr("borderStyles"),
  colors: kr("colors"),
  borders: kr("borders"),
  gradients: kr("gradients", me.gradient),
  radii: kr("radii", me.px),
  space: kr("space", Tu(me.vh, me.px)),
  spaceT: kr("space", Tu(me.vh, me.px)),
  degreeT(e) {
    return { property: e, transform: me.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: xg({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: kr("sizes", Tu(me.vh, me.px)),
  sizesT: kr("sizes", Tu(me.vh, me.fraction)),
  shadows: kr("shadows"),
  logical: YD,
  blur: kr("blur", me.blur)
}, uc = {
  background: E.colors("background"),
  backgroundColor: E.colors("backgroundColor"),
  backgroundImage: E.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: me.bgClip },
  bgSize: E.prop("backgroundSize"),
  bgPosition: E.prop("backgroundPosition"),
  bg: E.colors("background"),
  bgColor: E.colors("backgroundColor"),
  bgPos: E.prop("backgroundPosition"),
  bgRepeat: E.prop("backgroundRepeat"),
  bgAttachment: E.prop("backgroundAttachment"),
  bgGradient: E.gradients("backgroundImage"),
  bgClip: { transform: me.bgClip }
};
Object.assign(uc, {
  bgImage: uc.backgroundImage,
  bgImg: uc.backgroundImage
});
var Ce = {
  border: E.borders("border"),
  borderWidth: E.borderWidths("borderWidth"),
  borderStyle: E.borderStyles("borderStyle"),
  borderColor: E.colors("borderColor"),
  borderRadius: E.radii("borderRadius"),
  borderTop: E.borders("borderTop"),
  borderBlockStart: E.borders("borderBlockStart"),
  borderTopLeftRadius: E.radii("borderTopLeftRadius"),
  borderStartStartRadius: E.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: E.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: E.radii("borderTopRightRadius"),
  borderStartEndRadius: E.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: E.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: E.borders("borderRight"),
  borderInlineEnd: E.borders("borderInlineEnd"),
  borderBottom: E.borders("borderBottom"),
  borderBlockEnd: E.borders("borderBlockEnd"),
  borderBottomLeftRadius: E.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: E.radii("borderBottomRightRadius"),
  borderLeft: E.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: E.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: E.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: E.borders(["borderLeft", "borderRight"]),
  borderInline: E.borders("borderInline"),
  borderY: E.borders(["borderTop", "borderBottom"]),
  borderBlock: E.borders("borderBlock"),
  borderTopWidth: E.borderWidths("borderTopWidth"),
  borderBlockStartWidth: E.borderWidths("borderBlockStartWidth"),
  borderTopColor: E.colors("borderTopColor"),
  borderBlockStartColor: E.colors("borderBlockStartColor"),
  borderTopStyle: E.borderStyles("borderTopStyle"),
  borderBlockStartStyle: E.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: E.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: E.borderWidths("borderBlockEndWidth"),
  borderBottomColor: E.colors("borderBottomColor"),
  borderBlockEndColor: E.colors("borderBlockEndColor"),
  borderBottomStyle: E.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: E.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: E.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: E.borderWidths("borderInlineStartWidth"),
  borderLeftColor: E.colors("borderLeftColor"),
  borderInlineStartColor: E.colors("borderInlineStartColor"),
  borderLeftStyle: E.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: E.borderStyles("borderInlineStartStyle"),
  borderRightWidth: E.borderWidths("borderRightWidth"),
  borderInlineEndWidth: E.borderWidths("borderInlineEndWidth"),
  borderRightColor: E.colors("borderRightColor"),
  borderInlineEndColor: E.colors("borderInlineEndColor"),
  borderRightStyle: E.borderStyles("borderRightStyle"),
  borderInlineEndStyle: E.borderStyles("borderInlineEndStyle"),
  borderTopRadius: E.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: E.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: E.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: E.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(Ce, {
  rounded: Ce.borderRadius,
  roundedTop: Ce.borderTopRadius,
  roundedTopLeft: Ce.borderTopLeftRadius,
  roundedTopRight: Ce.borderTopRightRadius,
  roundedTopStart: Ce.borderStartStartRadius,
  roundedTopEnd: Ce.borderStartEndRadius,
  roundedBottom: Ce.borderBottomRadius,
  roundedBottomLeft: Ce.borderBottomLeftRadius,
  roundedBottomRight: Ce.borderBottomRightRadius,
  roundedBottomStart: Ce.borderEndStartRadius,
  roundedBottomEnd: Ce.borderEndEndRadius,
  roundedLeft: Ce.borderLeftRadius,
  roundedRight: Ce.borderRightRadius,
  roundedStart: Ce.borderInlineStartRadius,
  roundedEnd: Ce.borderInlineEndRadius,
  borderStart: Ce.borderInlineStart,
  borderEnd: Ce.borderInlineEnd,
  borderTopStartRadius: Ce.borderStartStartRadius,
  borderTopEndRadius: Ce.borderStartEndRadius,
  borderBottomStartRadius: Ce.borderEndStartRadius,
  borderBottomEndRadius: Ce.borderEndEndRadius,
  borderStartRadius: Ce.borderInlineStartRadius,
  borderEndRadius: Ce.borderInlineEndRadius,
  borderStartWidth: Ce.borderInlineStartWidth,
  borderEndWidth: Ce.borderInlineEndWidth,
  borderStartColor: Ce.borderInlineStartColor,
  borderEndColor: Ce.borderInlineEndColor,
  borderStartStyle: Ce.borderInlineStartStyle,
  borderEndStyle: Ce.borderInlineEndStyle
});
var iA = {
  color: E.colors("color"),
  textColor: E.colors("color"),
  fill: E.colors("fill"),
  stroke: E.colors("stroke")
}, Cv = {
  boxShadow: E.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: E.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: E.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Cv, {
  shadow: Cv.boxShadow
});
var sA = {
  filter: { transform: me.filter },
  blur: E.blur("--chakra-blur"),
  brightness: E.propT("--chakra-brightness", me.brightness),
  contrast: E.propT("--chakra-contrast", me.contrast),
  hueRotate: E.propT("--chakra-hue-rotate", me.hueRotate),
  invert: E.propT("--chakra-invert", me.invert),
  saturate: E.propT("--chakra-saturate", me.saturate),
  dropShadow: E.propT("--chakra-drop-shadow", me.dropShadow),
  backdropFilter: { transform: me.backdropFilter },
  backdropBlur: E.blur("--chakra-backdrop-blur"),
  backdropBrightness: E.propT(
    "--chakra-backdrop-brightness",
    me.brightness
  ),
  backdropContrast: E.propT("--chakra-backdrop-contrast", me.contrast),
  backdropHueRotate: E.propT(
    "--chakra-backdrop-hue-rotate",
    me.hueRotate
  ),
  backdropInvert: E.propT("--chakra-backdrop-invert", me.invert),
  backdropSaturate: E.propT("--chakra-backdrop-saturate", me.saturate)
}, Jc = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: me.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: E.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: E.space("gap"),
  rowGap: E.space("rowGap"),
  columnGap: E.space("columnGap")
};
Object.assign(Jc, {
  flexDir: Jc.flexDirection
});
var Ck = {
  gridGap: E.space("gridGap"),
  gridColumnGap: E.space("gridColumnGap"),
  gridRowGap: E.space("gridRowGap"),
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
}, lA = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: me.outline },
  outlineOffset: !0,
  outlineColor: E.colors("outlineColor")
}, Tr = {
  width: E.sizesT("width"),
  inlineSize: E.sizesT("inlineSize"),
  height: E.sizes("height"),
  blockSize: E.sizes("blockSize"),
  boxSize: E.sizes(["width", "height"]),
  minWidth: E.sizes("minWidth"),
  minInlineSize: E.sizes("minInlineSize"),
  minHeight: E.sizes("minHeight"),
  minBlockSize: E.sizes("minBlockSize"),
  maxWidth: E.sizes("maxWidth"),
  maxInlineSize: E.sizes("maxInlineSize"),
  maxHeight: E.sizes("maxHeight"),
  maxBlockSize: E.sizes("maxBlockSize"),
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
      var r, n, o;
      return { [`@media screen and (min-width: ${(o = (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null ? void 0 : n.minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, t) => {
      var r, n, o;
      return { [`@media screen and (max-width: ${(o = (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null ? void 0 : n._minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: E.propT("float", me.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(Tr, {
  w: Tr.width,
  h: Tr.height,
  minW: Tr.minWidth,
  maxW: Tr.maxWidth,
  minH: Tr.minHeight,
  maxH: Tr.maxHeight,
  overscroll: Tr.overscrollBehavior,
  overscrollX: Tr.overscrollBehaviorX,
  overscrollY: Tr.overscrollBehaviorY
});
var uA = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: E.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: E.prop("listStyleImage")
};
function cA(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var dA = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, a, i) => {
    if (typeof n > "u")
      return e(n, o, a);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(o))
      return s.get(o);
    const l = e(n, o, a, i);
    return s.set(o, l), l;
  };
}, fA = dA(cA), pA = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, hA = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Pp = (e, t, r) => {
  const n = {}, o = fA(e, t, {});
  for (const a in o)
    a in r && r[a] != null || (n[a] = o[a]);
  return n;
}, vA = {
  srOnly: {
    transform(e) {
      return e === !0 ? pA : e === "focusable" ? hA : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => Pp(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => Pp(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => Pp(t, e, r)
  }
}, Vs = {
  position: !0,
  pos: E.prop("position"),
  zIndex: E.prop("zIndex", "zIndices"),
  inset: E.spaceT("inset"),
  insetX: E.spaceT(["left", "right"]),
  insetInline: E.spaceT("insetInline"),
  insetY: E.spaceT(["top", "bottom"]),
  insetBlock: E.spaceT("insetBlock"),
  top: E.spaceT("top"),
  insetBlockStart: E.spaceT("insetBlockStart"),
  bottom: E.spaceT("bottom"),
  insetBlockEnd: E.spaceT("insetBlockEnd"),
  left: E.spaceT("left"),
  insetInlineStart: E.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: E.spaceT("right"),
  insetInlineEnd: E.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(Vs, {
  insetStart: Vs.insetInlineStart,
  insetEnd: Vs.insetInlineEnd
});
var mA = {
  ring: { transform: me.ring },
  ringColor: E.colors("--chakra-ring-color"),
  ringOffset: E.prop("--chakra-ring-offset-width"),
  ringOffsetColor: E.colors("--chakra-ring-offset-color"),
  ringInset: E.prop("--chakra-ring-inset")
}, ze = {
  margin: E.spaceT("margin"),
  marginTop: E.spaceT("marginTop"),
  marginBlockStart: E.spaceT("marginBlockStart"),
  marginRight: E.spaceT("marginRight"),
  marginInlineEnd: E.spaceT("marginInlineEnd"),
  marginBottom: E.spaceT("marginBottom"),
  marginBlockEnd: E.spaceT("marginBlockEnd"),
  marginLeft: E.spaceT("marginLeft"),
  marginInlineStart: E.spaceT("marginInlineStart"),
  marginX: E.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: E.spaceT("marginInline"),
  marginY: E.spaceT(["marginTop", "marginBottom"]),
  marginBlock: E.spaceT("marginBlock"),
  padding: E.space("padding"),
  paddingTop: E.space("paddingTop"),
  paddingBlockStart: E.space("paddingBlockStart"),
  paddingRight: E.space("paddingRight"),
  paddingBottom: E.space("paddingBottom"),
  paddingBlockEnd: E.space("paddingBlockEnd"),
  paddingLeft: E.space("paddingLeft"),
  paddingInlineStart: E.space("paddingInlineStart"),
  paddingInlineEnd: E.space("paddingInlineEnd"),
  paddingX: E.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: E.space("paddingInline"),
  paddingY: E.space(["paddingTop", "paddingBottom"]),
  paddingBlock: E.space("paddingBlock")
};
Object.assign(ze, {
  m: ze.margin,
  mt: ze.marginTop,
  mr: ze.marginRight,
  me: ze.marginInlineEnd,
  marginEnd: ze.marginInlineEnd,
  mb: ze.marginBottom,
  ml: ze.marginLeft,
  ms: ze.marginInlineStart,
  marginStart: ze.marginInlineStart,
  mx: ze.marginX,
  my: ze.marginY,
  p: ze.padding,
  pt: ze.paddingTop,
  py: ze.paddingY,
  px: ze.paddingX,
  pb: ze.paddingBottom,
  pl: ze.paddingLeft,
  ps: ze.paddingInlineStart,
  paddingStart: ze.paddingInlineStart,
  pr: ze.paddingRight,
  pe: ze.paddingInlineEnd,
  paddingEnd: ze.paddingInlineEnd
});
var gA = {
  textDecorationColor: E.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: E.shadows("textShadow")
}, yA = {
  clipPath: !0,
  transform: E.propT("transform", me.transform),
  transformOrigin: !0,
  translateX: E.spaceT("--chakra-translate-x"),
  translateY: E.spaceT("--chakra-translate-y"),
  skewX: E.degreeT("--chakra-skew-x"),
  skewY: E.degreeT("--chakra-skew-y"),
  scaleX: E.prop("--chakra-scale-x"),
  scaleY: E.prop("--chakra-scale-y"),
  scale: E.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: E.degreeT("--chakra-rotate")
}, bA = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: E.prop("transitionDuration", "transition.duration"),
  transitionProperty: E.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: E.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, wA = {
  fontFamily: E.prop("fontFamily", "fonts"),
  fontSize: E.prop("fontSize", "fontSizes", me.px),
  fontWeight: E.prop("fontWeight", "fontWeights"),
  lineHeight: E.prop("lineHeight", "lineHeights"),
  letterSpacing: E.prop("letterSpacing", "letterSpacings"),
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
}, xA = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: E.spaceT("scrollMargin"),
  scrollMarginTop: E.spaceT("scrollMarginTop"),
  scrollMarginBottom: E.spaceT("scrollMarginBottom"),
  scrollMarginLeft: E.spaceT("scrollMarginLeft"),
  scrollMarginRight: E.spaceT("scrollMarginRight"),
  scrollMarginX: E.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: E.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: E.spaceT("scrollPadding"),
  scrollPaddingTop: E.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: E.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: E.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: E.spaceT("scrollPaddingRight"),
  scrollPaddingX: E.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: E.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function Pk(e) {
  return Rr(e) && e.reference ? e.reference : String(e);
}
var hf = (e, ...t) => t.map(Pk).join(` ${e} `).replace(/calc/g, ""), Nb = (...e) => `calc(${hf("+", ...e)})`, zb = (...e) => `calc(${hf("-", ...e)})`, Pv = (...e) => `calc(${hf("*", ...e)})`, jb = (...e) => `calc(${hf("/", ...e)})`, Vb = (e) => {
  const t = Pk(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Pv(t, -1);
}, ls = Object.assign(
  (e) => ({
    add: (...t) => ls(Nb(e, ...t)),
    subtract: (...t) => ls(zb(e, ...t)),
    multiply: (...t) => ls(Pv(e, ...t)),
    divide: (...t) => ls(jb(e, ...t)),
    negate: () => ls(Vb(e)),
    toString: () => e.toString()
  }),
  {
    add: Nb,
    subtract: zb,
    multiply: Pv,
    divide: jb,
    negate: Vb
  }
);
function SA(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function CA(e) {
  const t = SA(e.toString());
  return kA(PA(t));
}
function PA(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function kA(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function _A(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function TA(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function EA(e, t = "") {
  return CA(`--${_A(e, t)}`);
}
function ae(e, t, r) {
  const n = EA(e, r);
  return {
    variable: n,
    reference: TA(n, t)
  };
}
function $A(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [o, a] = n;
      r[o] = ae(`${e}-${o}`, a);
      continue;
    }
    r[n] = ae(`${e}-${n}`);
  }
  return r;
}
function OA(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Bb(e) {
  if (e == null)
    return e;
  const { unitless: t } = OA(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
function MA(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${Bb(e)})`), t && r.push("and", `(max-width: ${Bb(t)})`), r.join(" ");
}
var St = {
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
}, Jn = (e) => kk((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), kn = (e) => kk((t) => e(t, "~ &"), "[data-peer]", ".peer"), kk = (e, ...t) => t.map(e).join(", "), Sg = {
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
  _groupHover: Jn(St.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: kn(St.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: Jn(St.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: kn(St.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: Jn(St.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: kn(St.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: Jn(St.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: kn(St.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: Jn(St.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: kn(St.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: Jn(St.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: kn(St.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: Jn(St.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: kn(St.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: Jn(St.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: kn(St.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: kn(St.placeholderShown),
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
}, IA = Object.keys(
  Sg
);
function RA(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
var Cg = Yr(
  {},
  uc,
  Ce,
  iA,
  Jc,
  Tr,
  sA,
  mA,
  lA,
  Ck,
  vA,
  Vs,
  Cv,
  ze,
  xA,
  wA,
  gA,
  yA,
  uA,
  bA
);
Object.assign({}, ze, Tr, Jc, Ck, Vs);
var DA = [...Object.keys(Cg), ...IA], AA = { ...Cg, ...Sg }, FA = (e) => e in AA, LA = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, a = {};
  for (const i in e) {
    let s = In(e[i], t);
    if (s == null)
      continue;
    if (s = Rr(s) && r(s) ? n(s) : s, !Array.isArray(s)) {
      a[i] = s;
      continue;
    }
    const l = s.slice(0, o.length).length;
    for (let u = 0; u < l; u += 1) {
      const c = o == null ? void 0 : o[u];
      if (!c) {
        a[i] = s[u];
        continue;
      }
      a[c] = a[c] || {}, s[u] != null && (a[c][i] = s[u]);
    }
  }
  return a;
};
function NA(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    a === "(" ? (n = !0, r += a) : a === ")" ? (n = !1, r += a) : a === "," && !n ? (t.push(r), r = "") : r += a;
  }
  return r = r.trim(), r && t.push(r), t;
}
function zA(e) {
  return /^var\(--.+\)$/.test(e);
}
var jA = (e, t) => e.startsWith("--") && typeof t == "string" && !zA(t), VA = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, a = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [i, s] = NA(t);
  return t = (n = (r = o(i)) != null ? r : a(s)) != null ? n : a(t), t;
};
function BA(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (a, i = !1) => {
    var s, l, u;
    const c = In(a, n), d = LA(c)(n);
    let f = {};
    for (let p in d) {
      const m = d[p];
      let g = In(m, n);
      p in r && (p = r[p]), jA(p, g) && (g = VA(n, g));
      let y = t[p];
      if (y === !0 && (y = { property: p }), Rr(g)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = Yr(
          {},
          f[p],
          o(g, !0)
        );
        continue;
      }
      let h = (u = (l = y == null ? void 0 : y.transform) == null ? void 0 : l.call(y, g, n, c)) != null ? u : g;
      h = y != null && y.processResult ? o(h, !0) : h;
      const v = In(y == null ? void 0 : y.property, n);
      if (!i && (y != null && y.static)) {
        const b = In(y.static, n);
        f = Yr({}, f, b);
      }
      if (v && Array.isArray(v)) {
        for (const b of v)
          f[b] = h;
        continue;
      }
      if (v) {
        v === "&" && Rr(h) ? f = Yr({}, f, h) : f[v] = h;
        continue;
      }
      if (Rr(h)) {
        f = Yr({}, f, h);
        continue;
      }
      f[p] = h;
    }
    return f;
  };
  return o;
}
var WA = (e) => (t) => BA({
  theme: t,
  pseudos: Sg,
  configs: Cg
})(e);
function Fe(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function UA(e, t) {
  if (Array.isArray(e))
    return e;
  if (Rr(e))
    return t(e);
  if (e != null)
    return [e];
}
function HA(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function GA(e) {
  const t = e.__breakpoints;
  return function(n, o, a, i) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = UA(a, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, p = !!n.parts;
    for (let m = 0; m < d; m++) {
      const g = t.details[m], y = t.details[HA(c, m)], h = MA(g.minW, y == null ? void 0 : y._minW), v = In((s = n[o]) == null ? void 0 : s[c[m]], i);
      if (v) {
        if (p) {
          (l = n.parts) == null || l.forEach((b) => {
            Yr(u, {
              [b]: f ? v[b] : { [h]: v[b] }
            });
          });
          continue;
        }
        if (!p) {
          f ? Yr(u, v) : u[h] = v;
          continue;
        }
        u[h] = v;
      }
    }
    return u;
  };
}
function YA(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: a } = t, i = GA(a);
    return Yr(
      {},
      In((r = e.baseStyle) != null ? r : {}, t),
      i(e, "sizes", o, t),
      i(e, "variants", n, t)
    );
  };
}
function qn(e) {
  return RA(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var qA = [
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
function KA(e) {
  return Rr(e) ? qA.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var XA = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, QA = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, ZA = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, JA = {
  property: XA,
  easing: QA,
  duration: ZA
}, eF = JA, tF = {
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
}, rF = tF, nF = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, oF = nF, aF = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, iF = aF, sF = {
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
}, lF = sF, uF = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, cF = uF, dF = {
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
}, fF = dF, pF = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, hF = pF, vF = {
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
}, _k = vF, Tk = {
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
}, mF = {
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
}, gF = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, yF = {
  ...Tk,
  ...mF,
  container: gF
}, Ek = yF, bF = {
  breakpoints: iF,
  zIndices: rF,
  radii: cF,
  blur: hF,
  colors: lF,
  ..._k,
  sizes: Ek,
  shadows: fF,
  space: Tk,
  borders: oF,
  transition: eF
}, { defineMultiStyleConfig: wF, definePartsStyle: ks } = Fe([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), En = ae("stepper-indicator-size"), Ga = ae("stepper-icon-size"), Ya = ae("stepper-title-font-size"), _s = ae("stepper-description-font-size"), us = ae("stepper-accent-color"), xF = ks(({ colorScheme: e }) => ({
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
    [us.variable]: `colors.${e}.500`,
    _dark: {
      [us.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: Ya.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: _s.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: Ya.reference
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
    width: Ga.reference,
    height: Ga.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: En.reference,
    height: En.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: us.reference
    },
    "&[data-status=complete]": {
      bg: us.reference,
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
      bg: us.reference
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
      maxHeight: `calc(100% - ${En.reference} - 8px)`,
      top: `calc(${En.reference} + 4px)`,
      insetStart: `calc(${En.reference} / 2 - 1px)`
    }
  }
})), SF = wF({
  baseStyle: xF,
  sizes: {
    xs: ks({
      stepper: {
        [En.variable]: "sizes.4",
        [Ga.variable]: "sizes.3",
        [Ya.variable]: "fontSizes.xs",
        [_s.variable]: "fontSizes.xs"
      }
    }),
    sm: ks({
      stepper: {
        [En.variable]: "sizes.6",
        [Ga.variable]: "sizes.4",
        [Ya.variable]: "fontSizes.sm",
        [_s.variable]: "fontSizes.xs"
      }
    }),
    md: ks({
      stepper: {
        [En.variable]: "sizes.8",
        [Ga.variable]: "sizes.5",
        [Ya.variable]: "fontSizes.md",
        [_s.variable]: "fontSizes.sm"
      }
    }),
    lg: ks({
      stepper: {
        [En.variable]: "sizes.10",
        [Ga.variable]: "sizes.6",
        [Ya.variable]: "fontSizes.lg",
        [_s.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function Te(e, t = {}) {
  let r = !1;
  function n() {
    if (!r) {
      r = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...c) {
    n();
    for (const d of c)
      t[d] = l(d);
    return Te(e, t);
  }
  function a(...c) {
    for (const d of c)
      d in t || (t[d] = l(d));
    return Te(e, t);
  }
  function i() {
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
    extend: a,
    selectors: i,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {}
  };
}
var CF = Te("accordion").parts("root", "container", "button", "panel").extend("icon"), PF = Te("alert").parts("title", "description", "container").extend("icon", "spinner"), kF = Te("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), _F = Te("breadcrumb").parts("link", "item", "container").extend("separator");
Te("button").parts();
var TF = Te("checkbox").parts("control", "icon", "container").extend("label");
Te("progress").parts("track", "filledTrack").extend("label");
var EF = Te("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), $F = Te("editable").parts(
  "preview",
  "input",
  "textarea"
), OF = Te("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), MF = Te("formError").parts("text", "icon"), IF = Te("input").parts(
  "addon",
  "field",
  "element",
  "group"
), RF = Te("list").parts("container", "item", "icon"), DF = Te("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), AF = Te("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), FF = Te("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
Te("pininput").parts("field");
var LF = Te("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), NF = Te("progress").parts(
  "label",
  "filledTrack",
  "track"
), zF = Te("radio").parts(
  "container",
  "control",
  "label"
), jF = Te("select").parts("field", "icon"), VF = Te("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), BF = Te("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), WF = Te("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), UF = Te("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), HF = Te("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), GF = Te("tag").parts(
  "container",
  "label",
  "closeButton"
), YF = Te("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
Te("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function Zo(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class qF extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Ts = qF;
function Pg(e) {
  if (typeof e != "string")
    throw new Ts(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = rL.test(e) ? QF(e) : e;
  const r = ZF.exec(t);
  if (r) {
    const i = Array.from(r).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(xl(s, 2), 16)), parseInt(xl(i[3] || "f", 2), 16) / 255];
  }
  const n = JF.exec(t);
  if (n) {
    const i = Array.from(n).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(i[3] || "ff", 16) / 255];
  }
  const o = eL.exec(t);
  if (o) {
    const i = Array.from(o).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(i[3] || "1")];
  }
  const a = tL.exec(t);
  if (a) {
    const [i, s, l, u] = Array.from(a).slice(1).map(parseFloat);
    if (Zo(0, 100, s) !== s)
      throw new Ts(e);
    if (Zo(0, 100, l) !== l)
      throw new Ts(e);
    return [...nL(i, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new Ts(e);
}
function KF(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const Wb = (e) => parseInt(e.replace(/_/g, ""), 36), XF = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = Wb(t.substring(0, 3)), n = Wb(t.substring(3)).toString(16);
  let o = "";
  for (let a = 0; a < 6 - n.length; a++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function QF(e) {
  const t = e.toLowerCase().trim(), r = XF[KF(t)];
  if (!r)
    throw new Ts(e);
  return `#${r}`;
}
const xl = (e, t) => Array.from(Array(t)).map(() => e).join(""), ZF = new RegExp(`^#${xl("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), JF = new RegExp(`^#${xl("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), eL = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${xl(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), tL = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, rL = /^[a-z]+$/i, Ub = (e) => Math.round(e * 255), nL = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(Ub);
  const o = (e % 360 + 360) % 360 / 60, a = (1 - Math.abs(2 * n - 1)) * (t / 100), i = a * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = a, l = i) : o >= 1 && o < 2 ? (s = i, l = a) : o >= 2 && o < 3 ? (l = a, u = i) : o >= 3 && o < 4 ? (l = i, u = a) : o >= 4 && o < 5 ? (s = i, u = a) : o >= 5 && o < 6 && (s = a, u = i);
  const c = n - a / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(Ub);
};
function oL(e, t, r, n) {
  return `rgba(${Zo(0, 255, e).toFixed()}, ${Zo(0, 255, t).toFixed()}, ${Zo(0, 255, r).toFixed()}, ${parseFloat(Zo(0, 1, n).toFixed(3))})`;
}
function aL(e, t) {
  const [r, n, o, a] = Pg(e);
  return oL(r, n, o, a - t);
}
function iL(e) {
  const [t, r, n, o] = Pg(e);
  let a = (i) => {
    const s = Zo(0, 255, i).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${a(t)}${a(r)}${a(n)}${o < 1 ? a(Math.round(o * 255)) : ""}`;
}
function sL(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var lL = (e) => Object.keys(e).length === 0, Vt = (e, t, r) => {
  const n = sL(e, `colors.${t}`, t);
  try {
    return iL(n), n;
  } catch {
    return r ?? "#000000";
  }
}, uL = (e) => {
  const [t, r, n] = Pg(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, cL = (e) => (t) => {
  const r = Vt(t, e);
  return uL(r) < 128 ? "dark" : "light";
}, dL = (e) => (t) => cL(e)(t) === "dark", Ti = (e, t) => (r) => {
  const n = Vt(r, e);
  return aL(n, 1 - t);
};
function Hb(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var fL = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function pL(e) {
  const t = fL();
  return !e || lL(e) ? t : e.string && e.colors ? vL(e.string, e.colors) : e.string && !e.colors ? hL(e.string) : e.colors && !e.string ? mL(e.colors) : t;
}
function hL(e) {
  let t = 0;
  if (e.length === 0)
    return t.toString();
  for (let n = 0; n < e.length; n += 1)
    t = e.charCodeAt(n) + ((t << 5) - t), t = t & t;
  let r = "#";
  for (let n = 0; n < 3; n += 1) {
    const o = t >> n * 8 & 255;
    r += `00${o.toString(16)}`.substr(-2);
  }
  return r;
}
function vL(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function mL(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function te(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function kg(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function $k(e) {
  return Rr(e) && e.reference ? e.reference : String(e);
}
var vf = (e, ...t) => t.map($k).join(` ${e} `).replace(/calc/g, ""), Gb = (...e) => `calc(${vf("+", ...e)})`, Yb = (...e) => `calc(${vf("-", ...e)})`, kv = (...e) => `calc(${vf("*", ...e)})`, qb = (...e) => `calc(${vf("/", ...e)})`, Kb = (e) => {
  const t = $k(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : kv(t, -1);
}, $n = Object.assign(
  (e) => ({
    add: (...t) => $n(Gb(e, ...t)),
    subtract: (...t) => $n(Yb(e, ...t)),
    multiply: (...t) => $n(kv(e, ...t)),
    divide: (...t) => $n(qb(e, ...t)),
    negate: () => $n(Kb(e)),
    toString: () => e.toString()
  }),
  {
    add: Gb,
    subtract: Yb,
    multiply: kv,
    divide: qb,
    negate: Kb
  }
);
function gL(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function yL(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function Ok(e) {
  const t = yL(e.toString());
  return t.includes("\\.") ? e : gL(e) ? t.replace(".", "\\.") : e;
}
function bL(e, t = "") {
  return [t, Ok(e)].filter(Boolean).join("-");
}
function wL(e, t) {
  return `var(${Ok(e)}${t ? `, ${t}` : ""})`;
}
function xL(e, t = "") {
  return `--${bL(e, t)}`;
}
function gt(e, t) {
  const r = xL(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: wL(r, SL(t == null ? void 0 : t.fallback))
  };
}
function SL(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: CL, definePartsStyle: cc } = Fe(WF.keys), Bs = gt("switch-track-width"), ra = gt("switch-track-height"), kp = gt("switch-track-diff"), PL = $n.subtract(Bs, ra), _v = gt("switch-thumb-x"), cs = gt("switch-bg"), kL = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [Bs.reference],
    height: [ra.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [cs.variable]: "colors.gray.300",
    _dark: {
      [cs.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [cs.variable]: `colors.${t}.500`,
      _dark: {
        [cs.variable]: `colors.${t}.200`
      }
    },
    bg: cs.reference
  };
}, _L = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [ra.reference],
  height: [ra.reference],
  _checked: {
    transform: `translateX(${_v.reference})`
  }
}, TL = cc((e) => ({
  container: {
    [kp.variable]: PL,
    [_v.variable]: kp.reference,
    _rtl: {
      [_v.variable]: $n(kp).negate().toString()
    }
  },
  track: kL(e),
  thumb: _L
})), EL = {
  sm: cc({
    container: {
      [Bs.variable]: "1.375rem",
      [ra.variable]: "sizes.3"
    }
  }),
  md: cc({
    container: {
      [Bs.variable]: "1.875rem",
      [ra.variable]: "sizes.4"
    }
  }),
  lg: cc({
    container: {
      [Bs.variable]: "2.875rem",
      [ra.variable]: "sizes.6"
    }
  })
}, $L = CL({
  baseStyle: TL,
  sizes: EL,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: OL, definePartsStyle: ci } = Fe(UF.keys), ML = ci({
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
}), ed = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, IL = ci((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: te("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: te(`${t}.100`, `${t}.700`)(e),
      ...ed
    },
    td: {
      borderBottom: "1px",
      borderColor: te(`${t}.100`, `${t}.700`)(e),
      ...ed
    },
    caption: {
      color: te("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), RL = ci((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: te("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: te(`${t}.100`, `${t}.700`)(e),
      ...ed
    },
    td: {
      borderBottom: "1px",
      borderColor: te(`${t}.100`, `${t}.700`)(e),
      ...ed
    },
    caption: {
      color: te("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: te(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: te(`${t}.100`, `${t}.700`)(e)
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
}), DL = {
  simple: IL,
  striped: RL,
  unstyled: {}
}, AL = {
  sm: ci({
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
  md: ci({
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
  lg: ci({
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
}, FL = OL({
  baseStyle: ML,
  variants: DL,
  sizes: AL,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), qt = ae("tabs-color"), Hr = ae("tabs-bg"), Eu = ae("tabs-border-color"), { defineMultiStyleConfig: LL, definePartsStyle: gn } = Fe(HF.keys), NL = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, zL = (e) => {
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
}, jL = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, VL = {
  p: 4
}, BL = gn((e) => ({
  root: NL(e),
  tab: zL(e),
  tablist: jL(e),
  tabpanel: VL
})), WL = {
  sm: gn({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: gn({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: gn({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, UL = gn((e) => {
  const { colorScheme: t, orientation: r } = e, n = r === "vertical", o = n ? "borderStart" : "borderBottom", a = n ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [o]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [o]: "2px solid",
      borderColor: "transparent",
      [a]: "-2px",
      _selected: {
        [qt.variable]: `colors.${t}.600`,
        _dark: {
          [qt.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [Hr.variable]: "colors.gray.200",
        _dark: {
          [Hr.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: qt.reference,
      bg: Hr.reference
    }
  };
}), HL = gn((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [Eu.variable]: "transparent",
      _selected: {
        [qt.variable]: `colors.${t}.600`,
        [Eu.variable]: "colors.white",
        _dark: {
          [qt.variable]: `colors.${t}.300`,
          [Eu.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: Eu.reference
      },
      color: qt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), GL = gn((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [Hr.variable]: "colors.gray.50",
      _dark: {
        [Hr.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [Hr.variable]: "colors.white",
        [qt.variable]: `colors.${t}.600`,
        _dark: {
          [Hr.variable]: "colors.gray.800",
          [qt.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: qt.reference,
      bg: Hr.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), YL = gn((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: Vt(r, `${t}.700`),
        bg: Vt(r, `${t}.100`)
      }
    }
  };
}), qL = gn((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [qt.variable]: "colors.gray.600",
      _dark: {
        [qt.variable]: "inherit"
      },
      _selected: {
        [qt.variable]: "colors.white",
        [Hr.variable]: `colors.${t}.600`,
        _dark: {
          [qt.variable]: "colors.gray.800",
          [Hr.variable]: `colors.${t}.300`
        }
      },
      color: qt.reference,
      bg: Hr.reference
    }
  };
}), KL = gn({}), XL = {
  line: UL,
  enclosed: HL,
  "enclosed-colored": GL,
  "soft-rounded": YL,
  "solid-rounded": qL,
  unstyled: KL
}, QL = LL({
  baseStyle: BL,
  sizes: WL,
  variants: XL,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), lt = $A("badge", ["bg", "color", "shadow"]), ZL = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: lt.bg.reference,
  color: lt.color.reference,
  boxShadow: lt.shadow.reference
}, JL = (e) => {
  const { colorScheme: t, theme: r } = e, n = Ti(`${t}.500`, 0.6)(r);
  return {
    [lt.bg.variable]: `colors.${t}.500`,
    [lt.color.variable]: "colors.white",
    _dark: {
      [lt.bg.variable]: n,
      [lt.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, eN = (e) => {
  const { colorScheme: t, theme: r } = e, n = Ti(`${t}.200`, 0.16)(r);
  return {
    [lt.bg.variable]: `colors.${t}.100`,
    [lt.color.variable]: `colors.${t}.800`,
    _dark: {
      [lt.bg.variable]: n,
      [lt.color.variable]: `colors.${t}.200`
    }
  };
}, tN = (e) => {
  const { colorScheme: t, theme: r } = e, n = Ti(`${t}.200`, 0.8)(r);
  return {
    [lt.color.variable]: `colors.${t}.500`,
    _dark: {
      [lt.color.variable]: n
    },
    [lt.shadow.variable]: `inset 0 0 0px 1px ${lt.color.reference}`
  };
}, rN = {
  solid: JL,
  subtle: eN,
  outline: tN
}, Ws = {
  baseStyle: ZL,
  variants: rN,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: nN, definePartsStyle: na } = Fe(GF.keys), Xb = ae("tag-bg"), Qb = ae("tag-color"), _p = ae("tag-shadow"), dc = ae("tag-min-height"), fc = ae("tag-min-width"), pc = ae("tag-font-size"), hc = ae("tag-padding-inline"), oN = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [Qb.variable]: lt.color.reference,
  [Xb.variable]: lt.bg.reference,
  [_p.variable]: lt.shadow.reference,
  color: Qb.reference,
  bg: Xb.reference,
  boxShadow: _p.reference,
  borderRadius: "md",
  minH: dc.reference,
  minW: fc.reference,
  fontSize: pc.reference,
  px: hc.reference,
  _focusVisible: {
    [_p.variable]: "shadows.outline"
  }
}, aN = {
  lineHeight: 1.2,
  overflow: "visible"
}, iN = {
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
}, sN = na({
  container: oN,
  label: aN,
  closeButton: iN
}), lN = {
  sm: na({
    container: {
      [dc.variable]: "sizes.5",
      [fc.variable]: "sizes.5",
      [pc.variable]: "fontSizes.xs",
      [hc.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: na({
    container: {
      [dc.variable]: "sizes.6",
      [fc.variable]: "sizes.6",
      [pc.variable]: "fontSizes.sm",
      [hc.variable]: "space.2"
    }
  }),
  lg: na({
    container: {
      [dc.variable]: "sizes.8",
      [fc.variable]: "sizes.8",
      [pc.variable]: "fontSizes.md",
      [hc.variable]: "space.3"
    }
  })
}, uN = {
  subtle: na((e) => {
    var t;
    return {
      container: (t = Ws.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: na((e) => {
    var t;
    return {
      container: (t = Ws.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: na((e) => {
    var t;
    return {
      container: (t = Ws.variants) == null ? void 0 : t.outline(e)
    };
  })
}, cN = nN({
  variants: uN,
  baseStyle: sN,
  sizes: lN,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: Rn, defineMultiStyleConfig: dN } = Fe(IF.keys), qa = ae("input-height"), Ka = ae("input-font-size"), Xa = ae("input-padding"), Qa = ae("input-border-radius"), fN = Rn({
  addon: {
    height: qa.reference,
    fontSize: Ka.reference,
    px: Xa.reference,
    borderRadius: Qa.reference
  },
  field: {
    width: "100%",
    height: qa.reference,
    fontSize: Ka.reference,
    px: Xa.reference,
    borderRadius: Qa.reference,
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
}), eo = {
  lg: {
    [Ka.variable]: "fontSizes.lg",
    [Xa.variable]: "space.4",
    [Qa.variable]: "radii.md",
    [qa.variable]: "sizes.12"
  },
  md: {
    [Ka.variable]: "fontSizes.md",
    [Xa.variable]: "space.4",
    [Qa.variable]: "radii.md",
    [qa.variable]: "sizes.10"
  },
  sm: {
    [Ka.variable]: "fontSizes.sm",
    [Xa.variable]: "space.3",
    [Qa.variable]: "radii.sm",
    [qa.variable]: "sizes.8"
  },
  xs: {
    [Ka.variable]: "fontSizes.xs",
    [Xa.variable]: "space.2",
    [Qa.variable]: "radii.sm",
    [qa.variable]: "sizes.6"
  }
}, pN = {
  lg: Rn({
    field: eo.lg,
    group: eo.lg
  }),
  md: Rn({
    field: eo.md,
    group: eo.md
  }),
  sm: Rn({
    field: eo.sm,
    group: eo.sm
  }),
  xs: Rn({
    field: eo.xs,
    group: eo.xs
  })
};
function _g(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || te("blue.500", "blue.300")(e),
    errorBorderColor: r || te("red.500", "red.300")(e)
  };
}
var hN = Rn((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = _g(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: te("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Vt(t, n),
        boxShadow: `0 0 0 1px ${Vt(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: Vt(t, r),
        boxShadow: `0 0 0 1px ${Vt(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: te("inherit", "whiteAlpha.50")(e),
      bg: te("gray.100", "whiteAlpha.300")(e)
    }
  };
}), vN = Rn((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = _g(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: te("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: te("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Vt(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: Vt(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: te("gray.100", "whiteAlpha.50")(e)
    }
  };
}), mN = Rn((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = _g(e);
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
        borderColor: Vt(t, n),
        boxShadow: `0px 1px 0px 0px ${Vt(t, n)}`
      },
      _focusVisible: {
        borderColor: Vt(t, r),
        boxShadow: `0px 1px 0px 0px ${Vt(t, r)}`
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
}), gN = Rn({
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
}), yN = {
  outline: hN,
  filled: vN,
  flushed: mN,
  unstyled: gN
}, _e = dN({
  baseStyle: fN,
  sizes: pN,
  variants: yN,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), Zb, bN = {
  ...(Zb = _e.baseStyle) == null ? void 0 : Zb.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, Jb, e1, wN = {
  outline: (e) => {
    var t, r;
    return (r = (t = _e.variants) == null ? void 0 : t.outline(e).field) != null ? r : {};
  },
  flushed: (e) => {
    var t, r;
    return (r = (t = _e.variants) == null ? void 0 : t.flushed(e).field) != null ? r : {};
  },
  filled: (e) => {
    var t, r;
    return (r = (t = _e.variants) == null ? void 0 : t.filled(e).field) != null ? r : {};
  },
  unstyled: (e1 = (Jb = _e.variants) == null ? void 0 : Jb.unstyled.field) != null ? e1 : {}
}, t1, r1, n1, o1, a1, i1, s1, l1, xN = {
  xs: (r1 = (t1 = _e.sizes) == null ? void 0 : t1.xs.field) != null ? r1 : {},
  sm: (o1 = (n1 = _e.sizes) == null ? void 0 : n1.sm.field) != null ? o1 : {},
  md: (i1 = (a1 = _e.sizes) == null ? void 0 : a1.md.field) != null ? i1 : {},
  lg: (l1 = (s1 = _e.sizes) == null ? void 0 : s1.lg.field) != null ? l1 : {}
}, SN = {
  baseStyle: bN,
  sizes: xN,
  variants: wN,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, $u = gt("tooltip-bg"), Tp = gt("tooltip-fg"), CN = gt("popper-arrow-bg"), PN = {
  bg: $u.reference,
  color: Tp.reference,
  [$u.variable]: "colors.gray.700",
  [Tp.variable]: "colors.whiteAlpha.900",
  _dark: {
    [$u.variable]: "colors.gray.300",
    [Tp.variable]: "colors.gray.900"
  },
  [CN.variable]: $u.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, kN = {
  baseStyle: PN
}, { defineMultiStyleConfig: _N, definePartsStyle: Es } = Fe(NF.keys), TN = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, a = te(
    Hb(),
    Hb("1rem", "rgba(0,0,0,0.1)")
  )(e), i = te(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${Vt(r, i)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && a,
    ...n ? { bgImage: s } : { bgColor: i }
  };
}, EN = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, $N = (e) => ({
  bg: te("gray.100", "whiteAlpha.300")(e)
}), ON = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...TN(e)
}), MN = Es((e) => ({
  label: EN,
  filledTrack: ON(e),
  track: $N(e)
})), IN = {
  xs: Es({
    track: { h: "1" }
  }),
  sm: Es({
    track: { h: "2" }
  }),
  md: Es({
    track: { h: "3" }
  }),
  lg: Es({
    track: { h: "4" }
  })
}, RN = _N({
  sizes: IN,
  baseStyle: MN,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), DN = (e) => typeof e == "function";
function Wt(e, ...t) {
  return DN(e) ? e(...t) : e;
}
var { definePartsStyle: vc, defineMultiStyleConfig: AN } = Fe(TF.keys), Us = ae("checkbox-size"), FN = (e) => {
  const { colorScheme: t } = e;
  return {
    w: Us.reference,
    h: Us.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: te(`${t}.500`, `${t}.200`)(e),
      borderColor: te(`${t}.500`, `${t}.200`)(e),
      color: te("white", "gray.900")(e),
      _hover: {
        bg: te(`${t}.600`, `${t}.300`)(e),
        borderColor: te(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: te("gray.200", "transparent")(e),
        bg: te("gray.200", "whiteAlpha.300")(e),
        color: te("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: te(`${t}.500`, `${t}.200`)(e),
      borderColor: te(`${t}.500`, `${t}.200`)(e),
      color: te("white", "gray.900")(e)
    },
    _disabled: {
      bg: te("gray.100", "whiteAlpha.100")(e),
      borderColor: te("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: te("red.500", "red.300")(e)
    }
  };
}, LN = {
  _disabled: { cursor: "not-allowed" }
}, NN = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, zN = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, jN = vc((e) => ({
  icon: zN,
  container: LN,
  control: Wt(FN, e),
  label: NN
})), VN = {
  sm: vc({
    control: { [Us.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: vc({
    control: { [Us.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: vc({
    control: { [Us.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, td = AN({
  baseStyle: jN,
  sizes: VN,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: BN, definePartsStyle: mc } = Fe(zF.keys), WN = (e) => {
  var t;
  const r = (t = Wt(td.baseStyle, e)) == null ? void 0 : t.control;
  return {
    ...r,
    borderRadius: "full",
    _checked: {
      ...r == null ? void 0 : r._checked,
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
}, UN = mc((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = td).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = td).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: WN(e)
  };
}), HN = {
  md: mc({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: mc({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: mc({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, GN = BN({
  baseStyle: UN,
  sizes: HN,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: YN, definePartsStyle: qN } = Fe(jF.keys), Ou = ae("select-bg"), u1, KN = {
  ...(u1 = _e.baseStyle) == null ? void 0 : u1.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: Ou.reference,
  [Ou.variable]: "colors.white",
  _dark: {
    [Ou.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: Ou.reference
  }
}, XN = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, QN = qN({
  field: KN,
  icon: XN
}), Mu = {
  paddingInlineEnd: "8"
}, c1, d1, f1, p1, h1, v1, m1, g1, ZN = {
  lg: {
    ...(c1 = _e.sizes) == null ? void 0 : c1.lg,
    field: {
      ...(d1 = _e.sizes) == null ? void 0 : d1.lg.field,
      ...Mu
    }
  },
  md: {
    ...(f1 = _e.sizes) == null ? void 0 : f1.md,
    field: {
      ...(p1 = _e.sizes) == null ? void 0 : p1.md.field,
      ...Mu
    }
  },
  sm: {
    ...(h1 = _e.sizes) == null ? void 0 : h1.sm,
    field: {
      ...(v1 = _e.sizes) == null ? void 0 : v1.sm.field,
      ...Mu
    }
  },
  xs: {
    ...(m1 = _e.sizes) == null ? void 0 : m1.xs,
    field: {
      ...(g1 = _e.sizes) == null ? void 0 : g1.xs.field,
      ...Mu
    },
    icon: {
      insetEnd: "1"
    }
  }
}, JN = YN({
  baseStyle: QN,
  sizes: ZN,
  variants: _e.variants,
  defaultProps: _e.defaultProps
}), Ep = ae("skeleton-start-color"), $p = ae("skeleton-end-color"), e3 = {
  [Ep.variable]: "colors.gray.100",
  [$p.variable]: "colors.gray.400",
  _dark: {
    [Ep.variable]: "colors.gray.800",
    [$p.variable]: "colors.gray.600"
  },
  background: Ep.reference,
  borderColor: $p.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, t3 = {
  baseStyle: e3
}, Op = ae("skip-link-bg"), r3 = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [Op.variable]: "colors.white",
    _dark: {
      [Op.variable]: "colors.gray.700"
    },
    bg: Op.reference
  }
}, n3 = {
  baseStyle: r3
}, { defineMultiStyleConfig: o3, definePartsStyle: mf } = Fe(VF.keys), Sl = ae("slider-thumb-size"), Cl = ae("slider-track-size"), uo = ae("slider-bg"), a3 = (e) => {
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
    ...kg({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, i3 = (e) => ({
  ...kg({
    orientation: e.orientation,
    horizontal: { h: Cl.reference },
    vertical: { w: Cl.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [uo.variable]: "colors.gray.200",
  _dark: {
    [uo.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [uo.variable]: "colors.gray.300",
    _dark: {
      [uo.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: uo.reference
}), s3 = (e) => {
  const { orientation: t } = e;
  return {
    ...kg({
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
    w: Sl.reference,
    h: Sl.reference,
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
}, l3 = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [uo.variable]: `colors.${t}.500`,
    _dark: {
      [uo.variable]: `colors.${t}.200`
    },
    bg: uo.reference
  };
}, u3 = mf((e) => ({
  container: a3(e),
  track: i3(e),
  thumb: s3(e),
  filledTrack: l3(e)
})), c3 = mf({
  container: {
    [Sl.variable]: "sizes.4",
    [Cl.variable]: "sizes.1"
  }
}), d3 = mf({
  container: {
    [Sl.variable]: "sizes.3.5",
    [Cl.variable]: "sizes.1"
  }
}), f3 = mf({
  container: {
    [Sl.variable]: "sizes.2.5",
    [Cl.variable]: "sizes.0.5"
  }
}), p3 = {
  lg: c3,
  md: d3,
  sm: f3
}, h3 = o3({
  baseStyle: u3,
  sizes: p3,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), qo = gt("spinner-size"), v3 = {
  width: [qo.reference],
  height: [qo.reference]
}, m3 = {
  xs: {
    [qo.variable]: "sizes.3"
  },
  sm: {
    [qo.variable]: "sizes.4"
  },
  md: {
    [qo.variable]: "sizes.6"
  },
  lg: {
    [qo.variable]: "sizes.8"
  },
  xl: {
    [qo.variable]: "sizes.12"
  }
}, g3 = {
  baseStyle: v3,
  sizes: m3,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: y3, definePartsStyle: Mk } = Fe(BF.keys), b3 = {
  fontWeight: "medium"
}, w3 = {
  opacity: 0.8,
  marginBottom: "2"
}, x3 = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, S3 = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, C3 = Mk({
  container: {},
  label: b3,
  helpText: w3,
  number: x3,
  icon: S3
}), P3 = {
  md: Mk({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, k3 = y3({
  baseStyle: C3,
  sizes: P3,
  defaultProps: {
    size: "md"
  }
}), Mp = ae("kbd-bg"), _3 = {
  [Mp.variable]: "colors.gray.100",
  _dark: {
    [Mp.variable]: "colors.whiteAlpha.100"
  },
  bg: Mp.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, T3 = {
  baseStyle: _3
}, E3 = {
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
}, $3 = {
  baseStyle: E3
}, { defineMultiStyleConfig: O3, definePartsStyle: M3 } = Fe(RF.keys), I3 = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, R3 = M3({
  icon: I3
}), D3 = O3({
  baseStyle: R3
}), { defineMultiStyleConfig: A3, definePartsStyle: F3 } = Fe(DF.keys), sn = ae("menu-bg"), Ip = ae("menu-shadow"), L3 = {
  [sn.variable]: "#fff",
  [Ip.variable]: "shadows.sm",
  _dark: {
    [sn.variable]: "colors.gray.700",
    [Ip.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: sn.reference,
  boxShadow: Ip.reference
}, N3 = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [sn.variable]: "colors.gray.100",
    _dark: {
      [sn.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [sn.variable]: "colors.gray.200",
    _dark: {
      [sn.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [sn.variable]: "colors.gray.100",
    _dark: {
      [sn.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: sn.reference
}, z3 = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, j3 = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, V3 = {
  opacity: 0.6
}, B3 = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, W3 = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, U3 = F3({
  button: W3,
  list: L3,
  item: N3,
  groupTitle: z3,
  icon: j3,
  command: V3,
  divider: B3
}), H3 = A3({
  baseStyle: U3
}), { defineMultiStyleConfig: G3, definePartsStyle: Tv } = Fe(AF.keys), Rp = ae("modal-bg"), Dp = ae("modal-shadow"), Y3 = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, q3 = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, K3 = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [Rp.variable]: "colors.white",
    [Dp.variable]: "shadows.lg",
    _dark: {
      [Rp.variable]: "colors.gray.700",
      [Dp.variable]: "shadows.dark-lg"
    },
    bg: Rp.reference,
    boxShadow: Dp.reference
  };
}, X3 = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, Q3 = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, Z3 = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, J3 = {
  px: "6",
  py: "4"
}, e5 = Tv((e) => ({
  overlay: Y3,
  dialogContainer: Wt(q3, e),
  dialog: Wt(K3, e),
  header: X3,
  closeButton: Q3,
  body: Wt(Z3, e),
  footer: J3
}));
function Vr(e) {
  return Tv(e === "full" ? {
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
var t5 = {
  xs: Vr("xs"),
  sm: Vr("sm"),
  md: Vr("md"),
  lg: Vr("lg"),
  xl: Vr("xl"),
  "2xl": Vr("2xl"),
  "3xl": Vr("3xl"),
  "4xl": Vr("4xl"),
  "5xl": Vr("5xl"),
  "6xl": Vr("6xl"),
  full: Vr("full")
}, r5 = G3({
  baseStyle: e5,
  sizes: t5,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: n5, definePartsStyle: Ik } = Fe(FF.keys), Tg = gt("number-input-stepper-width"), Rk = gt("number-input-input-padding"), o5 = $n(Tg).add("0.5rem").toString(), Ap = gt("number-input-bg"), Fp = gt("number-input-color"), Lp = gt("number-input-border-color"), a5 = {
  [Tg.variable]: "sizes.6",
  [Rk.variable]: o5
}, i5 = (e) => {
  var t, r;
  return (r = (t = Wt(_e.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, s5 = {
  width: Tg.reference
}, l5 = {
  borderStart: "1px solid",
  borderStartColor: Lp.reference,
  color: Fp.reference,
  bg: Ap.reference,
  [Fp.variable]: "colors.chakra-body-text",
  [Lp.variable]: "colors.chakra-border-color",
  _dark: {
    [Fp.variable]: "colors.whiteAlpha.800",
    [Lp.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Ap.variable]: "colors.gray.200",
    _dark: {
      [Ap.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, u5 = Ik((e) => {
  var t;
  return {
    root: a5,
    field: (t = Wt(i5, e)) != null ? t : {},
    stepperGroup: s5,
    stepper: l5
  };
});
function Iu(e) {
  var t, r, n;
  const o = (t = _e.sizes) == null ? void 0 : t[e], a = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, i = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = _k.fontSizes[i];
  return Ik({
    field: {
      ...o.field,
      paddingInlineEnd: Rk.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: $n(s).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: a[e]
      },
      _last: {
        borderBottomEndRadius: a[e],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var c5 = {
  xs: Iu("xs"),
  sm: Iu("sm"),
  md: Iu("md"),
  lg: Iu("lg")
}, d5 = n5({
  baseStyle: u5,
  sizes: c5,
  variants: _e.variants,
  defaultProps: _e.defaultProps
}), y1, f5 = {
  ...(y1 = _e.baseStyle) == null ? void 0 : y1.field,
  textAlign: "center"
}, p5 = {
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
}, b1, w1, h5 = {
  outline: (e) => {
    var t, r, n;
    return (n = (r = Wt((t = _e.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  flushed: (e) => {
    var t, r, n;
    return (n = (r = Wt((t = _e.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  filled: (e) => {
    var t, r, n;
    return (n = (r = Wt((t = _e.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  unstyled: (w1 = (b1 = _e.variants) == null ? void 0 : b1.unstyled.field) != null ? w1 : {}
}, v5 = {
  baseStyle: f5,
  sizes: p5,
  variants: h5,
  defaultProps: _e.defaultProps
}, { defineMultiStyleConfig: m5, definePartsStyle: g5 } = Fe(LF.keys), Ru = gt("popper-bg"), y5 = gt("popper-arrow-bg"), x1 = gt("popper-arrow-shadow-color"), b5 = { zIndex: 10 }, w5 = {
  [Ru.variable]: "colors.white",
  bg: Ru.reference,
  [y5.variable]: Ru.reference,
  [x1.variable]: "colors.gray.200",
  _dark: {
    [Ru.variable]: "colors.gray.700",
    [x1.variable]: "colors.whiteAlpha.300"
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
}, x5 = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, S5 = {
  px: 3,
  py: 2
}, C5 = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, P5 = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, k5 = g5({
  popper: b5,
  content: w5,
  header: x5,
  body: S5,
  footer: C5,
  closeButton: P5
}), _5 = m5({
  baseStyle: k5
}), { definePartsStyle: Ev, defineMultiStyleConfig: T5 } = Fe(EF.keys), Np = ae("drawer-bg"), zp = ae("drawer-box-shadow");
function _a(e) {
  return Ev(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var E5 = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, $5 = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, O5 = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [Np.variable]: "colors.white",
    [zp.variable]: "shadows.lg",
    _dark: {
      [Np.variable]: "colors.gray.700",
      [zp.variable]: "shadows.dark-lg"
    },
    bg: Np.reference,
    boxShadow: zp.reference
  };
}, M5 = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, I5 = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, R5 = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, D5 = {
  px: "6",
  py: "4"
}, A5 = Ev((e) => ({
  overlay: E5,
  dialogContainer: $5,
  dialog: Wt(O5, e),
  header: M5,
  closeButton: I5,
  body: R5,
  footer: D5
})), F5 = {
  xs: _a("xs"),
  sm: _a("md"),
  md: _a("lg"),
  lg: _a("2xl"),
  xl: _a("4xl"),
  full: _a("full")
}, L5 = T5({
  baseStyle: A5,
  sizes: F5,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: N5, defineMultiStyleConfig: z5 } = Fe($F.keys), j5 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, V5 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, B5 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, W5 = N5({
  preview: j5,
  input: V5,
  textarea: B5
}), U5 = z5({
  baseStyle: W5
}), { definePartsStyle: H5, defineMultiStyleConfig: G5 } = Fe(OF.keys), di = ae("form-control-color"), Y5 = {
  marginStart: "1",
  [di.variable]: "colors.red.500",
  _dark: {
    [di.variable]: "colors.red.300"
  },
  color: di.reference
}, q5 = {
  mt: "2",
  [di.variable]: "colors.gray.600",
  _dark: {
    [di.variable]: "colors.whiteAlpha.600"
  },
  color: di.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, K5 = H5({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: Y5,
  helperText: q5
}), X5 = G5({
  baseStyle: K5
}), { definePartsStyle: Q5, defineMultiStyleConfig: Z5 } = Fe(MF.keys), fi = ae("form-error-color"), J5 = {
  [fi.variable]: "colors.red.500",
  _dark: {
    [fi.variable]: "colors.red.300"
  },
  color: fi.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, e4 = {
  marginEnd: "0.5em",
  [fi.variable]: "colors.red.500",
  _dark: {
    [fi.variable]: "colors.red.300"
  },
  color: fi.reference
}, t4 = Q5({
  text: J5,
  icon: e4
}), r4 = Z5({
  baseStyle: t4
}), n4 = {
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
}, o4 = {
  baseStyle: n4
}, a4 = {
  fontFamily: "heading",
  fontWeight: "bold"
}, i4 = {
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
}, s4 = {
  baseStyle: a4,
  sizes: i4,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: l4, definePartsStyle: u4 } = Fe(_F.keys), jp = ae("breadcrumb-link-decor"), c4 = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: jp.reference,
  [jp.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [jp.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, d4 = u4({
  link: c4
}), f4 = l4({
  baseStyle: d4
}), p4 = {
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
}, Dk = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: te("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: te("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: te("gray.200", "whiteAlpha.300")(e) }
    };
  const n = Ti(`${t}.200`, 0.12)(r), o = Ti(`${t}.200`, 0.24)(r);
  return {
    color: te(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: te(`${t}.50`, n)(e)
    },
    _active: {
      bg: te(`${t}.100`, o)(e)
    }
  };
}, h4 = (e) => {
  const { colorScheme: t } = e, r = te("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...Wt(Dk, e)
  };
}, v4 = {
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
}, m4 = (e) => {
  var t;
  const { colorScheme: r } = e;
  if (r === "gray") {
    const l = te("gray.100", "whiteAlpha.200")(e);
    return {
      bg: l,
      color: te("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: te("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: l
        }
      },
      _active: { bg: te("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: n = `${r}.500`,
    color: o = "white",
    hoverBg: a = `${r}.600`,
    activeBg: i = `${r}.700`
  } = (t = v4[r]) != null ? t : {}, s = te(n, `${r}.200`)(e);
  return {
    bg: s,
    color: te(o, "gray.800")(e),
    _hover: {
      bg: te(a, `${r}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: te(i, `${r}.400`)(e) }
  };
}, g4 = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: te(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: te(`${t}.700`, `${t}.500`)(e)
    }
  };
}, y4 = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, b4 = {
  ghost: Dk,
  outline: h4,
  solid: m4,
  link: g4,
  unstyled: y4
}, w4 = {
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
}, x4 = {
  baseStyle: p4,
  variants: b4,
  sizes: w4,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: oa, defineMultiStyleConfig: S4 } = Fe(YF.keys), rd = ae("card-bg"), Fn = ae("card-padding"), Ak = ae("card-shadow"), gc = ae("card-radius"), Fk = ae("card-border-width", "0"), Lk = ae("card-border-color"), C4 = oa({
  container: {
    [rd.variable]: "colors.chakra-body-bg",
    backgroundColor: rd.reference,
    boxShadow: Ak.reference,
    borderRadius: gc.reference,
    color: "chakra-body-text",
    borderWidth: Fk.reference,
    borderColor: Lk.reference
  },
  body: {
    padding: Fn.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: Fn.reference
  },
  footer: {
    padding: Fn.reference
  }
}), P4 = {
  sm: oa({
    container: {
      [gc.variable]: "radii.base",
      [Fn.variable]: "space.3"
    }
  }),
  md: oa({
    container: {
      [gc.variable]: "radii.md",
      [Fn.variable]: "space.5"
    }
  }),
  lg: oa({
    container: {
      [gc.variable]: "radii.xl",
      [Fn.variable]: "space.7"
    }
  })
}, k4 = {
  elevated: oa({
    container: {
      [Ak.variable]: "shadows.base",
      _dark: {
        [rd.variable]: "colors.gray.700"
      }
    }
  }),
  outline: oa({
    container: {
      [Fk.variable]: "1px",
      [Lk.variable]: "colors.chakra-border-color"
    }
  }),
  filled: oa({
    container: {
      [rd.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [Fn.variable]: 0
    },
    header: {
      [Fn.variable]: 0
    },
    footer: {
      [Fn.variable]: 0
    }
  }
}, _4 = S4({
  baseStyle: C4,
  variants: k4,
  sizes: P4,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), Hs = gt("close-button-size"), ds = gt("close-button-bg"), T4 = {
  w: [Hs.reference],
  h: [Hs.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [ds.variable]: "colors.blackAlpha.100",
    _dark: {
      [ds.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [ds.variable]: "colors.blackAlpha.200",
    _dark: {
      [ds.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: ds.reference
}, E4 = {
  lg: {
    [Hs.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [Hs.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [Hs.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, $4 = {
  baseStyle: T4,
  sizes: E4,
  defaultProps: {
    size: "md"
  }
}, { variants: O4, defaultProps: M4 } = Ws, I4 = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: lt.bg.reference,
  color: lt.color.reference,
  boxShadow: lt.shadow.reference
}, R4 = {
  baseStyle: I4,
  variants: O4,
  defaultProps: M4
}, D4 = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, A4 = {
  baseStyle: D4
}, F4 = {
  opacity: 0.6,
  borderColor: "inherit"
}, L4 = {
  borderStyle: "solid"
}, N4 = {
  borderStyle: "dashed"
}, z4 = {
  solid: L4,
  dashed: N4
}, j4 = {
  baseStyle: F4,
  variants: z4,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: V4, defineMultiStyleConfig: B4 } = Fe(CF.keys), W4 = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, U4 = {
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
}, H4 = {
  pt: "2",
  px: "4",
  pb: "5"
}, G4 = {
  fontSize: "1.25em"
}, Y4 = V4({
  container: W4,
  button: U4,
  panel: H4,
  icon: G4
}), q4 = B4({ baseStyle: Y4 }), { definePartsStyle: Bl, defineMultiStyleConfig: K4 } = Fe(PF.keys), pr = ae("alert-fg"), Un = ae("alert-bg"), X4 = Bl({
  container: {
    bg: Un.reference,
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
    color: pr.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: pr.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function Eg(e) {
  const { theme: t, colorScheme: r } = e, n = Ti(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var Q4 = Bl((e) => {
  const { colorScheme: t } = e, r = Eg(e);
  return {
    container: {
      [pr.variable]: `colors.${t}.600`,
      [Un.variable]: r.light,
      _dark: {
        [pr.variable]: `colors.${t}.200`,
        [Un.variable]: r.dark
      }
    }
  };
}), Z4 = Bl((e) => {
  const { colorScheme: t } = e, r = Eg(e);
  return {
    container: {
      [pr.variable]: `colors.${t}.600`,
      [Un.variable]: r.light,
      _dark: {
        [pr.variable]: `colors.${t}.200`,
        [Un.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: pr.reference
    }
  };
}), J4 = Bl((e) => {
  const { colorScheme: t } = e, r = Eg(e);
  return {
    container: {
      [pr.variable]: `colors.${t}.600`,
      [Un.variable]: r.light,
      _dark: {
        [pr.variable]: `colors.${t}.200`,
        [Un.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: pr.reference
    }
  };
}), ez = Bl((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [pr.variable]: "colors.white",
      [Un.variable]: `colors.${t}.600`,
      _dark: {
        [pr.variable]: "colors.gray.900",
        [Un.variable]: `colors.${t}.200`
      },
      color: pr.reference
    }
  };
}), tz = {
  subtle: Q4,
  "left-accent": Z4,
  "top-accent": J4,
  solid: ez
}, rz = K4({
  baseStyle: X4,
  variants: tz,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: Nk, defineMultiStyleConfig: nz } = Fe(kF.keys), pi = ae("avatar-border-color"), Gs = ae("avatar-bg"), Pl = ae("avatar-font-size"), Ei = ae("avatar-size"), oz = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: pi.reference,
  [pi.variable]: "white",
  _dark: {
    [pi.variable]: "colors.gray.800"
  }
}, az = {
  bg: Gs.reference,
  fontSize: Pl.reference,
  width: Ei.reference,
  height: Ei.reference,
  lineHeight: "1",
  [Gs.variable]: "colors.gray.200",
  _dark: {
    [Gs.variable]: "colors.whiteAlpha.400"
  }
}, iz = (e) => {
  const { name: t, theme: r } = e, n = t ? pL({ string: t }) : "colors.gray.400", o = dL(n)(r);
  let a = "white";
  return o || (a = "gray.800"), {
    bg: Gs.reference,
    fontSize: Pl.reference,
    color: a,
    borderColor: pi.reference,
    verticalAlign: "top",
    width: Ei.reference,
    height: Ei.reference,
    "&:not([data-loaded])": {
      [Gs.variable]: n
    },
    [pi.variable]: "colors.white",
    _dark: {
      [pi.variable]: "colors.gray.800"
    }
  };
}, sz = {
  fontSize: Pl.reference,
  lineHeight: "1"
}, lz = Nk((e) => ({
  badge: Wt(oz, e),
  excessLabel: Wt(az, e),
  container: Wt(iz, e),
  label: sz
}));
function to(e) {
  const t = e !== "100%" ? Ek[e] : void 0;
  return Nk({
    container: {
      [Ei.variable]: t ?? e,
      [Pl.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [Ei.variable]: t ?? e,
      [Pl.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var uz = {
  "2xs": to(4),
  xs: to(6),
  sm: to(8),
  md: to(12),
  lg: to(16),
  xl: to(24),
  "2xl": to(32),
  full: to("100%")
}, cz = nz({
  baseStyle: lz,
  sizes: uz,
  defaultProps: {
    size: "md"
  }
}), dz = {
  Accordion: q4,
  Alert: rz,
  Avatar: cz,
  Badge: Ws,
  Breadcrumb: f4,
  Button: x4,
  Checkbox: td,
  CloseButton: $4,
  Code: R4,
  Container: A4,
  Divider: j4,
  Drawer: L5,
  Editable: U5,
  Form: X5,
  FormError: r4,
  FormLabel: o4,
  Heading: s4,
  Input: _e,
  Kbd: T3,
  Link: $3,
  List: D3,
  Menu: H3,
  Modal: r5,
  NumberInput: d5,
  PinInput: v5,
  Popover: _5,
  Progress: RN,
  Radio: GN,
  Select: JN,
  Skeleton: t3,
  SkipLink: n3,
  Slider: h3,
  Spinner: g3,
  Stat: k3,
  Switch: $L,
  Table: FL,
  Tabs: QL,
  Tag: cN,
  Textarea: SN,
  Tooltip: kN,
  Card: _4,
  Stepper: SF
}, fz = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, pz = {
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
}, hz = "ltr", vz = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, mz = {
  semanticTokens: fz,
  direction: hz,
  ...bF,
  components: dz,
  styles: pz,
  config: vz
};
function $s(e) {
  return typeof e == "function";
}
function gz(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
var yz = (e) => function(...r) {
  let n = [...r], o = r[r.length - 1];
  return KA(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  n.length > 1 ? n = n.slice(0, n.length - 1) : o = e, gz(
    ...n.map(
      (a) => (i) => $s(a) ? a(i) : wz(i, a)
    )
  )(o);
}, bz = yz(mz);
function wz(...e) {
  return Yr({}, ...e, zk);
}
function zk(e, t, r, n) {
  if (($s(e) || $s(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const a = $s(e) ? e(...o) : e, i = $s(t) ? t(...o) : t;
      return Yr({}, a, i, zk);
    };
}
function xz(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function Sz(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var Cz = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, a, i) => {
    if (typeof n > "u")
      return e(n, o, a);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(o))
      return s.get(o);
    const l = e(n, o, a, i);
    return s.set(o, l), l;
  };
}, Pz = Cz(Sz);
function jk(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var Vk = (e) => jk(e, (t) => t != null);
function kz(e) {
  return typeof e == "function";
}
function _z(e, ...t) {
  return kz(e) ? e(...t) : e;
}
var Tz = typeof Element < "u", Ez = typeof Map == "function", $z = typeof Set == "function", Oz = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function yc(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!yc(e[n], t[n]))
          return !1;
      return !0;
    }
    var a;
    if (Ez && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!yc(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if ($z && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (Oz && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (e[n] !== t[n])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n]))
        return !1;
    if (Tz && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !yc(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Mz = function(t, r) {
  try {
    return yc(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const Iz = /* @__PURE__ */ Sn(Mz);
function Bk(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: a, colorMode: i } = jD(), s = e ? Pz(a, `components.${e}`) : void 0, l = n || s, u = Yr(
    { theme: a, colorMode: i },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    Vk(xz(o, ["children"]))
  ), c = w.useRef({});
  if (l) {
    const f = YA(l)(u);
    Iz(c.current, f) || (c.current = f);
  }
  return c.current;
}
function ma(e, t = {}) {
  return Bk(e, t);
}
function vr(e, t = {}) {
  return Bk(e, t);
}
var Rz = /* @__PURE__ */ new Set([
  ...DA,
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
]), Dz = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function Az(e) {
  return Dz.has(e) || !Rz.has(e);
}
function Fz(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
function Lz(e) {
  const t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
var Nz = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, zz = /* @__PURE__ */ sk(
  function(e) {
    return Nz.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), jz = zz, Vz = function(t) {
  return t !== "theme";
}, S1 = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? jz : Vz;
}, C1 = function(t, r, n) {
  var o;
  if (r) {
    var a = r.shouldForwardProp;
    o = t.__emotion_forwardProp && a ? function(i) {
      return t.__emotion_forwardProp(i) && a(i);
    } : a;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Bz = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return vg(r, n, o), mk(function() {
    return hk(r, n, o);
  }), null;
}, Wz = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, a, i;
  r !== void 0 && (a = r.label, i = r.target);
  var s = C1(t, r, n), l = s || S1(o), u = !l("as");
  return function() {
    var c = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && d.push("label:" + a + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, p = 1; p < f; p++)
        d.push(c[p], c[0][p]);
    }
    var m = yk(function(g, y, h) {
      var v = u && g.as || o, b = "", x = [], k = g;
      if (g.theme == null) {
        k = {};
        for (var P in g)
          k[P] = g[P];
        k.theme = w.useContext(yg);
      }
      typeof g.className == "string" ? b = pk(y.registered, x, g.className) : g.className != null && (b = g.className + " ");
      var C = mg(d.concat(x), y.registered, k);
      b += y.key + "-" + C.name, i !== void 0 && (b += " " + i);
      var _ = u && s === void 0 ? S1(v) : l, $ = {};
      for (var O in g)
        u && O === "as" || // $FlowFixMe
        _(O) && ($[O] = g[O]);
      return $.className = b, $.ref = h, /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(Bz, {
        cache: y,
        serialized: C,
        isStringTag: typeof v == "string"
      }), /* @__PURE__ */ w.createElement(v, $));
    });
    return m.displayName = a !== void 0 ? a : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", m.defaultProps = t.defaultProps, m.__emotion_real = m, m.__emotion_base = o, m.__emotion_styles = d, m.__emotion_forwardProp = s, Object.defineProperty(m, "toString", {
      value: function() {
        return "." + i;
      }
    }), m.withComponent = function(g, y) {
      return e(g, X({}, r, y, {
        shouldForwardProp: C1(m, y, !0)
      })).apply(void 0, d);
    }, m;
  };
}, Uz = [
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
], nd = Wz.bind();
Uz.forEach(function(e) {
  nd[e] = nd(e);
});
var P1, Hz = (P1 = nd.default) != null ? P1 : nd, Gz = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: a, ...i } = t, s = jk(i, (d, f) => FA(f)), l = _z(e, t), u = Fz(
    {},
    o,
    l,
    Vk(s),
    a
  ), c = WA(u)(t.theme);
  return n ? [c, n] : c;
};
function Vp(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = Az);
  const o = Gz({ baseStyle: r }), a = Hz(
    e,
    n
  )(o);
  return U.forwardRef(function(l, u) {
    const { colorMode: c, forced: d } = Vl();
    return U.createElement(a, {
      ref: u,
      "data-theme": d ? c : void 0,
      ...l
    });
  });
}
function Yz() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Vp, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, r, n) {
      return Vp(...n);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, r) {
      return e.has(r) || e.set(r, Vp(r)), e.get(r);
    }
  });
}
var Se = Yz();
function Ze(e) {
  return w.forwardRef(e);
}
var Wk = w.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
Wk.displayName = "EnvironmentContext";
function qz({ defer: e } = {}) {
  const [, t] = w.useReducer((r) => r + 1, 0);
  return wl(() => {
    e && t();
  }, [e]), w.useContext(Wk);
}
function od(e, t = []) {
  const r = w.useRef(e);
  return w.useEffect(() => {
    r.current = e;
  }), w.useCallback((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function $g(e, t) {
  const r = w.useRef(!1), n = w.useRef(!1);
  w.useEffect(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), w.useEffect(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
}
const Uk = w.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), gf = w.createContext({}), yf = w.createContext(null), bf = typeof document < "u", Og = bf ? w.useLayoutEffect : w.useEffect, Hk = w.createContext({ strict: !1 }), Mg = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), Kz = "framerAppearId", Gk = "data-" + Mg(Kz);
function Xz(e, t, r, n) {
  const { visualElement: o } = w.useContext(gf), a = w.useContext(Hk), i = w.useContext(yf), s = w.useContext(Uk).reducedMotion, l = w.useRef();
  n = n || a.renderer, !l.current && n && (l.current = n(e, {
    visualState: t,
    parent: o,
    props: r,
    presenceContext: i,
    blockInitialAnimation: i ? i.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const u = l.current;
  w.useInsertionEffect(() => {
    u && u.update(r, i);
  });
  const c = w.useRef(!!r[Gk]);
  return Og(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), w.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (window.HandoffAppearAnimations = !1, c.current = !1));
  }), u;
}
function Za(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Qz(e, t, r) {
  return w.useCallback(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : Za(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function kl(e) {
  return typeof e == "string" || Array.isArray(e);
}
function wf(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Ig = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Rg = ["initial", ...Ig];
function xf(e) {
  return wf(e.animate) || Rg.some((t) => kl(e[t]));
}
function Yk(e) {
  return !!(xf(e) || e.variants);
}
function Zz(e, t) {
  if (xf(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || kl(r) ? r : void 0,
      animate: kl(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Jz(e) {
  const { initial: t, animate: r } = Zz(e, w.useContext(gf));
  return w.useMemo(() => ({ initial: t, animate: r }), [k1(t), k1(r)]);
}
function k1(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const _1 = {
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
}, _l = {};
for (const e in _1)
  _l[e] = {
    isEnabled: (t) => _1[e].some((r) => !!t[r])
  };
function ej(e) {
  for (const t in e)
    _l[t] = {
      ..._l[t],
      ...e[t]
    };
}
const Dg = w.createContext({}), qk = w.createContext({}), tj = Symbol.for("motionComponentSymbol");
function rj({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && ej(e);
  function a(s, l) {
    let u;
    const c = {
      ...w.useContext(Uk),
      ...s,
      layoutId: nj(s)
    }, { isStatic: d } = c, f = Jz(s), p = n(s, d);
    if (!d && bf) {
      f.visualElement = Xz(o, p, c, t);
      const m = w.useContext(qk), g = w.useContext(Hk).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        g,
        e,
        m
      ));
    }
    return w.createElement(
      gf.Provider,
      { value: f },
      u && f.visualElement ? w.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      r(o, s, Qz(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const i = w.forwardRef(a);
  return i[tj] = o, i;
}
function nj({ layoutId: e }) {
  const t = w.useContext(Dg).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function oj(e) {
  function t(n, o = {}) {
    return rj(e(n, o));
  }
  if (typeof Proxy > "u")
    return t;
  const r = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o))
  });
}
const aj = [
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
function Ag(e) {
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
      !!(aj.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const ad = {};
function ij(e) {
  Object.assign(ad, e);
}
const Wl = [
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
], ga = new Set(Wl);
function Kk(e, { layout: t, layoutId: r }) {
  return ga.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!ad[e] || e === "opacity");
}
const rr = (e) => !!(e && e.getVelocity), sj = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, lj = Wl.length;
function uj(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let a = "";
  for (let i = 0; i < lj; i++) {
    const s = Wl[i];
    if (e[s] !== void 0) {
      const l = sj[s] || s;
      a += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (a += "translateZ(0)"), a = a.trim(), o ? a = o(e, n ? "" : a) : r && n && (a = "none"), a;
}
const Xk = (e) => (t) => typeof t == "string" && t.startsWith(e), Qk = Xk("--"), $v = Xk("var(--"), cj = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, dj = (e, t) => t && typeof e == "number" ? t.transform(e) : e, _o = (e, t, r) => Math.min(Math.max(r, e), t), ya = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Ys = {
  ...ya,
  transform: (e) => _o(0, 1, e)
}, Du = {
  ...ya,
  default: 1
}, qs = (e) => Math.round(e * 1e5) / 1e5, Sf = /(-)?([\d]*\.?[\d])+/g, Zk = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, fj = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ul(e) {
  return typeof e == "string";
}
const Hl = (e) => ({
  test: (t) => Ul(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), no = Hl("deg"), yn = Hl("%"), ie = Hl("px"), pj = Hl("vh"), hj = Hl("vw"), T1 = {
  ...yn,
  parse: (e) => yn.parse(e) / 100,
  transform: (e) => yn.transform(e * 100)
}, E1 = {
  ...ya,
  transform: Math.round
}, Jk = {
  // Border props
  borderWidth: ie,
  borderTopWidth: ie,
  borderRightWidth: ie,
  borderBottomWidth: ie,
  borderLeftWidth: ie,
  borderRadius: ie,
  radius: ie,
  borderTopLeftRadius: ie,
  borderTopRightRadius: ie,
  borderBottomRightRadius: ie,
  borderBottomLeftRadius: ie,
  // Positioning props
  width: ie,
  maxWidth: ie,
  height: ie,
  maxHeight: ie,
  size: ie,
  top: ie,
  right: ie,
  bottom: ie,
  left: ie,
  // Spacing props
  padding: ie,
  paddingTop: ie,
  paddingRight: ie,
  paddingBottom: ie,
  paddingLeft: ie,
  margin: ie,
  marginTop: ie,
  marginRight: ie,
  marginBottom: ie,
  marginLeft: ie,
  // Transform props
  rotate: no,
  rotateX: no,
  rotateY: no,
  rotateZ: no,
  scale: Du,
  scaleX: Du,
  scaleY: Du,
  scaleZ: Du,
  skew: no,
  skewX: no,
  skewY: no,
  distance: ie,
  translateX: ie,
  translateY: ie,
  translateZ: ie,
  x: ie,
  y: ie,
  z: ie,
  perspective: ie,
  transformPerspective: ie,
  opacity: Ys,
  originX: T1,
  originY: T1,
  originZ: ie,
  // Misc
  zIndex: E1,
  // SVG
  fillOpacity: Ys,
  strokeOpacity: Ys,
  numOctaves: E1
};
function Fg(e, t, r, n) {
  const { style: o, vars: a, transform: i, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (Qk(d)) {
      a[d] = f;
      continue;
    }
    const p = Jk[d], m = dj(f, p);
    if (ga.has(d)) {
      if (l = !0, i[d] = m, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = m) : o[d] = m;
  }
  if (t.transform || (l || n ? o.transform = uj(e.transform, r, c, n) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const Lg = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function e_(e, t, r) {
  for (const n in t)
    !rr(t[n]) && !Kk(n, r) && (e[n] = t[n]);
}
function vj({ transformTemplate: e }, t, r) {
  return w.useMemo(() => {
    const n = Lg();
    return Fg(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function mj(e, t, r) {
  const n = e.style || {}, o = {};
  return e_(o, n, e), Object.assign(o, vj(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function gj(e, t, r) {
  const n = {}, o = mj(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const yj = /* @__PURE__ */ new Set([
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
function id(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || yj.has(e);
}
let t_ = (e) => !id(e);
function bj(e) {
  e && (t_ = (t) => t.startsWith("on") ? !id(t) : e(t));
}
try {
  bj(require("@emotion/is-prop-valid").default);
} catch {
}
function wj(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (t_(o) || r === !0 && id(o) || !t && !id(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function $1(e, t, r) {
  return typeof e == "string" ? e : ie.transform(t + r * e);
}
function xj(e, t, r) {
  const n = $1(t, e.x, e.width), o = $1(r, e.y, e.height);
  return `${n} ${o}`;
}
const Sj = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Cj = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Pj(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const a = o ? Sj : Cj;
  e[a.offset] = ie.transform(-n);
  const i = ie.transform(t), s = ie.transform(r);
  e[a.array] = `${i} ${s}`;
}
function Ng(e, {
  attrX: t,
  attrY: r,
  attrScale: n,
  originX: o,
  originY: a,
  pathLength: i,
  pathSpacing: s = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, d, f) {
  if (Fg(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: m, dimensions: g } = e;
  p.transform && (g && (m.transform = p.transform), delete p.transform), g && (o !== void 0 || a !== void 0 || m.transform) && (m.transformOrigin = xj(g, o !== void 0 ? o : 0.5, a !== void 0 ? a : 0.5)), t !== void 0 && (p.x = t), r !== void 0 && (p.y = r), n !== void 0 && (p.scale = n), i !== void 0 && Pj(p, i, s, l, !1);
}
const r_ = () => ({
  ...Lg(),
  attrs: {}
}), zg = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function kj(e, t, r, n) {
  const o = w.useMemo(() => {
    const a = r_();
    return Ng(a, t, { enableHardwareAcceleration: !1 }, zg(n), e.transformTemplate), {
      ...a.attrs,
      style: { ...a.style }
    };
  }, [t]);
  if (e.style) {
    const a = {};
    e_(a, e.style, e), o.style = { ...a, ...o.style };
  }
  return o;
}
function _j(e = !1) {
  return (r, n, o, { latestValues: a }, i) => {
    const l = (Ag(r) ? kj : gj)(n, a, i, r), c = {
      ...wj(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, f = w.useMemo(() => rr(d) ? d.get() : d, [d]);
    return w.createElement(r, {
      ...c,
      children: f
    });
  };
}
function n_(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const a in r)
    e.style.setProperty(a, r[a]);
}
const o_ = /* @__PURE__ */ new Set([
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
function a_(e, t, r, n) {
  n_(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(o_.has(o) ? o : Mg(o), t.attrs[o]);
}
function jg(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    (rr(r[o]) || t.style && rr(t.style[o]) || Kk(o, e)) && (n[o] = r[o]);
  return n;
}
function i_(e, t) {
  const r = jg(e, t);
  for (const n in e)
    if (rr(e[n]) || rr(t[n])) {
      const o = Wl.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function Vg(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function s_(e) {
  const t = w.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const sd = (e) => Array.isArray(e), Tj = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Ej = (e) => sd(e) ? e[e.length - 1] || 0 : e;
function bc(e) {
  const t = rr(e) ? e.get() : e;
  return Tj(t) ? t.toValue() : t;
}
function $j({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, a) {
  const i = {
    latestValues: Oj(n, o, a, e),
    renderState: t()
  };
  return r && (i.mount = (s) => r(n, s, i)), i;
}
const l_ = (e) => (t, r) => {
  const n = w.useContext(gf), o = w.useContext(yf), a = () => $j(e, t, n, o);
  return r ? a() : s_(a);
};
function Oj(e, t, r, n) {
  const o = {}, a = n(e, {});
  for (const f in a)
    o[f] = bc(a[f]);
  let { initial: i, animate: s } = e;
  const l = xf(e), u = Yk(e);
  t && u && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), s === void 0 && (s = t.animate));
  let c = r ? r.initial === !1 : !1;
  c = c || i === !1;
  const d = c ? s : i;
  return d && typeof d != "boolean" && !wf(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const m = Vg(e, p);
    if (!m)
      return;
    const { transitionEnd: g, transition: y, ...h } = m;
    for (const v in h) {
      let b = h[v];
      if (Array.isArray(b)) {
        const x = c ? b.length - 1 : 0;
        b = b[x];
      }
      b !== null && (o[v] = b);
    }
    for (const v in g)
      o[v] = g[v];
  }), o;
}
const rt = (e) => e;
class O1 {
  constructor() {
    this.order = [], this.scheduled = /* @__PURE__ */ new Set();
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const r = this.order.indexOf(t);
    r !== -1 && (this.order.splice(r, 1), this.scheduled.delete(t));
  }
  clear() {
    this.order.length = 0, this.scheduled.clear();
  }
}
function Mj(e) {
  let t = new O1(), r = new O1(), n = 0, o = !1, a = !1;
  const i = /* @__PURE__ */ new WeakSet(), s = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, u = !1, c = !1) => {
      const d = c && o, f = d ? t : r;
      return u && i.add(l), f.add(l) && d && o && (n = t.order.length), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      r.remove(l), i.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (o) {
        a = !0;
        return;
      }
      if (o = !0, [t, r] = [r, t], r.clear(), n = t.order.length, n)
        for (let u = 0; u < n; u++) {
          const c = t.order[u];
          c(l), i.has(c) && (s.schedule(c), e());
        }
      o = !1, a && (a = !1, s.process(l));
    }
  };
  return s;
}
const Au = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], Ij = 40;
function Rj(e, t) {
  let r = !1, n = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, a = Au.reduce((d, f) => (d[f] = Mj(() => r = !0), d), {}), i = (d) => a[d].process(o), s = () => {
    const d = performance.now();
    r = !1, o.delta = n ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, Ij), 1), o.timestamp = d, o.isProcessing = !0, Au.forEach(i), o.isProcessing = !1, r && t && (n = !1, e(s));
  }, l = () => {
    r = !0, n = !0, o.isProcessing || e(s);
  };
  return { schedule: Au.reduce((d, f) => {
    const p = a[f];
    return d[f] = (m, g = !1, y = !1) => (r || l(), p.schedule(m, g, y)), d;
  }, {}), cancel: (d) => Au.forEach((f) => a[f].cancel(d)), state: o, steps: a };
}
const { schedule: Ae, cancel: Hn, state: yt, steps: Bp } = Rj(typeof requestAnimationFrame < "u" ? requestAnimationFrame : rt, !0), Dj = {
  useVisualState: l_({
    scrapeMotionValuesFromProps: i_,
    createRenderState: r_,
    onMount: (e, t, { renderState: r, latestValues: n }) => {
      Ae.read(() => {
        try {
          r.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          r.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), Ae.render(() => {
        Ng(r, n, { enableHardwareAcceleration: !1 }, zg(t.tagName), e.transformTemplate), a_(t, r);
      });
    }
  })
}, Aj = {
  useVisualState: l_({
    scrapeMotionValuesFromProps: jg,
    createRenderState: Lg
  })
};
function Fj(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...Ag(e) ? Dj : Aj,
    preloadedFeatures: r,
    useRender: _j(t),
    createVisualElement: n,
    Component: e
  };
}
function Dn(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const u_ = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Cf(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const Lj = (e) => (t) => u_(t) && e(t, Cf(t));
function Ln(e, t, r, n) {
  return Dn(e, t, Lj(r), n);
}
const Nj = (e, t) => (r) => t(e(r)), So = (...e) => e.reduce(Nj);
function c_(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const M1 = c_("dragHorizontal"), I1 = c_("dragVertical");
function d_(e) {
  let t = !1;
  if (e === "y")
    t = I1();
  else if (e === "x")
    t = M1();
  else {
    const r = M1(), n = I1();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function f_() {
  const e = d_(!0);
  return e ? (e(), !1) : !0;
}
class Io {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function R1(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (a, i) => {
    if (a.type === "touch" || f_())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && Ae.update(() => s[n](a, i));
  };
  return Ln(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class zj extends Io {
  mount() {
    this.unmount = So(R1(this.node, !0), R1(this.node, !1));
  }
  unmount() {
  }
}
class jj extends Io {
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
    this.unmount = So(Dn(this.node.current, "focus", () => this.onFocus()), Dn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const p_ = (e, t) => t ? e === t ? !0 : p_(e, t.parentElement) : !1;
function Wp(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, Cf(r));
}
class Vj extends Io {
  constructor() {
    super(...arguments), this.removeStartListeners = rt, this.removeEndListeners = rt, this.removeAccessibleListeners = rt, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), a = Ln(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        Ae.update(() => {
          p_(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), i = Ln(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = So(a, i), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (a) => {
        if (a.key !== "Enter" || this.isPressing)
          return;
        const i = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || Wp("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && Ae.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Dn(this.node.current, "keyup", i), Wp("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = Dn(this.node.current, "keydown", t), n = () => {
        this.isPressing && Wp("cancel", (a, i) => this.cancelPress(a, i));
      }, o = Dn(this.node.current, "blur", n);
      this.removeAccessibleListeners = So(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && Ae.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !f_();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && Ae.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = Ln(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = Dn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = So(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Ov = /* @__PURE__ */ new WeakMap(), Up = /* @__PURE__ */ new WeakMap(), Bj = (e) => {
  const t = Ov.get(e.target);
  t && t(e);
}, Wj = (e) => {
  e.forEach(Bj);
};
function Uj({ root: e, ...t }) {
  const r = e || document;
  Up.has(r) || Up.set(r, {});
  const n = Up.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(Wj, { root: e, ...t })), n[o];
}
function Hj(e, t, r) {
  const n = Uj(t);
  return Ov.set(e, r), n.observe(e), () => {
    Ov.delete(e), n.unobserve(e);
  };
}
const Gj = {
  some: 0,
  all: 1
};
class Yj extends Io {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: a } = t, i = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : Gj[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, a && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return Hj(this.node.current, i, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(qj(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function qj({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const Kj = {
  inView: {
    Feature: Yj
  },
  tap: {
    Feature: Vj
  },
  focus: {
    Feature: jj
  },
  hover: {
    Feature: zj
  }
};
function h_(e, t) {
  if (!Array.isArray(t))
    return !1;
  const r = t.length;
  if (r !== e.length)
    return !1;
  for (let n = 0; n < r; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function Xj(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function Qj(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function Pf(e, t, r) {
  const n = e.getProps();
  return Vg(n, t, r !== void 0 ? r : n.custom, Xj(e), Qj(e));
}
let Zj = rt, Bg = rt;
const Co = (e) => e * 1e3, Nn = (e) => e / 1e3, Jj = {
  current: !1
}, v_ = (e) => Array.isArray(e) && typeof e[0] == "number";
function m_(e) {
  return !!(!e || typeof e == "string" && g_[e] || v_(e) || Array.isArray(e) && e.every(m_));
}
const Os = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, g_ = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Os([0, 0.65, 0.55, 1]),
  circOut: Os([0.55, 0, 1, 0.45]),
  backIn: Os([0.31, 0.01, 0.66, -0.59]),
  backOut: Os([0.33, 1.53, 0.69, 0.99])
};
function y_(e) {
  if (e)
    return v_(e) ? Os(e) : Array.isArray(e) ? e.map(y_) : g_[e];
}
function eV(e, t, r, { delay: n = 0, duration: o, repeat: a = 0, repeatType: i = "loop", ease: s, times: l } = {}) {
  const u = { [t]: r };
  l && (u.offset = l);
  const c = y_(s);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: n,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: a + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
function tV(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const b_ = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, rV = 1e-7, nV = 12;
function oV(e, t, r, n, o) {
  let a, i, s = 0;
  do
    i = t + (r - t) / 2, a = b_(i, n, o) - e, a > 0 ? r = i : t = i;
  while (Math.abs(a) > rV && ++s < nV);
  return i;
}
function Gl(e, t, r, n) {
  if (e === t && r === n)
    return rt;
  const o = (a) => oV(a, 0, 1, e, r);
  return (a) => a === 0 || a === 1 ? a : b_(o(a), t, n);
}
const aV = Gl(0.42, 0, 1, 1), iV = Gl(0, 0, 0.58, 1), w_ = Gl(0.42, 0, 0.58, 1), sV = (e) => Array.isArray(e) && typeof e[0] != "number", x_ = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, S_ = (e) => (t) => 1 - e(1 - t), C_ = (e) => 1 - Math.sin(Math.acos(e)), Wg = S_(C_), lV = x_(Wg), P_ = Gl(0.33, 1.53, 0.69, 0.99), Ug = S_(P_), uV = x_(Ug), cV = (e) => (e *= 2) < 1 ? 0.5 * Ug(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), dV = {
  linear: rt,
  easeIn: aV,
  easeInOut: w_,
  easeOut: iV,
  circIn: C_,
  circInOut: lV,
  circOut: Wg,
  backIn: Ug,
  backInOut: uV,
  backOut: P_,
  anticipate: cV
}, D1 = (e) => {
  if (Array.isArray(e)) {
    Bg(e.length === 4);
    const [t, r, n, o] = e;
    return Gl(t, r, n, o);
  } else if (typeof e == "string")
    return dV[e];
  return e;
}, Hg = (e, t) => (r) => !!(Ul(r) && fj.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), k_ = (e, t, r) => (n) => {
  if (!Ul(n))
    return n;
  const [o, a, i, s] = n.match(Sf);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(a),
    [r]: parseFloat(i),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, fV = (e) => _o(0, 255, e), Hp = {
  ...ya,
  transform: (e) => Math.round(fV(e))
}, Jo = {
  test: Hg("rgb", "red"),
  parse: k_("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + Hp.transform(e) + ", " + Hp.transform(t) + ", " + Hp.transform(r) + ", " + qs(Ys.transform(n)) + ")"
};
function pV(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Mv = {
  test: Hg("#"),
  parse: pV,
  transform: Jo.transform
}, Ja = {
  test: Hg("hsl", "hue"),
  parse: k_("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + yn.transform(qs(t)) + ", " + yn.transform(qs(r)) + ", " + qs(Ys.transform(n)) + ")"
}, zt = {
  test: (e) => Jo.test(e) || Mv.test(e) || Ja.test(e),
  parse: (e) => Jo.test(e) ? Jo.parse(e) : Ja.test(e) ? Ja.parse(e) : Mv.parse(e),
  transform: (e) => Ul(e) ? e : e.hasOwnProperty("red") ? Jo.transform(e) : Ja.transform(e)
}, qe = (e, t, r) => -r * e + r * t + e;
function Gp(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function hV({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, a = 0, i = 0;
  if (!t)
    o = a = i = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = Gp(l, s, e + 1 / 3), a = Gp(l, s, e), i = Gp(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(a * 255),
    blue: Math.round(i * 255),
    alpha: n
  };
}
const Yp = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, vV = [Mv, Jo, Ja], mV = (e) => vV.find((t) => t.test(e));
function A1(e) {
  const t = mV(e);
  let r = t.parse(e);
  return t === Ja && (r = hV(r)), r;
}
const __ = (e, t) => {
  const r = A1(e), n = A1(t), o = { ...r };
  return (a) => (o.red = Yp(r.red, n.red, a), o.green = Yp(r.green, n.green, a), o.blue = Yp(r.blue, n.blue, a), o.alpha = qe(r.alpha, n.alpha, a), Jo.transform(o));
};
function gV(e) {
  var t, r;
  return isNaN(e) && Ul(e) && (((t = e.match(Sf)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(Zk)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const T_ = {
  regex: cj,
  countKey: "Vars",
  token: "${v}",
  parse: rt
}, E_ = {
  regex: Zk,
  countKey: "Colors",
  token: "${c}",
  parse: zt.parse
}, $_ = {
  regex: Sf,
  countKey: "Numbers",
  token: "${n}",
  parse: ya.parse
};
function qp(e, { regex: t, countKey: r, token: n, parse: o }) {
  const a = e.tokenised.match(t);
  a && (e["num" + r] = a.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...a.map(o)));
}
function ld(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && qp(r, T_), qp(r, E_), qp(r, $_), r;
}
function O_(e) {
  return ld(e).values;
}
function M_(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = ld(e), a = t.length;
  return (i) => {
    let s = o;
    for (let l = 0; l < a; l++)
      l < n ? s = s.replace(T_.token, i[l]) : l < n + r ? s = s.replace(E_.token, zt.transform(i[l])) : s = s.replace($_.token, qs(i[l]));
    return s;
  };
}
const yV = (e) => typeof e == "number" ? 0 : e;
function bV(e) {
  const t = O_(e);
  return M_(e)(t.map(yV));
}
const To = {
  test: gV,
  parse: O_,
  createTransformer: M_,
  getAnimatableNone: bV
}, I_ = (e, t) => (r) => `${r > 0 ? t : e}`;
function R_(e, t) {
  return typeof e == "number" ? (r) => qe(e, t, r) : zt.test(e) ? __(e, t) : e.startsWith("var(") ? I_(e, t) : A_(e, t);
}
const D_ = (e, t) => {
  const r = [...e], n = r.length, o = e.map((a, i) => R_(a, t[i]));
  return (a) => {
    for (let i = 0; i < n; i++)
      r[i] = o[i](a);
    return r;
  };
}, wV = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = R_(e[o], t[o]));
  return (o) => {
    for (const a in n)
      r[a] = n[a](o);
    return r;
  };
}, A_ = (e, t) => {
  const r = To.createTransformer(t), n = ld(e), o = ld(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? So(D_(n.values, o.values), r) : I_(e, t);
}, Tl = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, F1 = (e, t) => (r) => qe(e, t, r);
function xV(e) {
  return typeof e == "number" ? F1 : typeof e == "string" ? zt.test(e) ? __ : A_ : Array.isArray(e) ? D_ : typeof e == "object" ? wV : F1;
}
function SV(e, t, r) {
  const n = [], o = r || xV(e[0]), a = e.length - 1;
  for (let i = 0; i < a; i++) {
    let s = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || rt : t;
      s = So(l, s);
    }
    n.push(s);
  }
  return n;
}
function F_(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const a = e.length;
  if (Bg(a === t.length), a === 1)
    return () => t[0];
  e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const i = SV(t, n, o), s = i.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = Tl(e[c], e[c + 1], u);
    return i[c](d);
  };
  return r ? (u) => l(_o(e[0], e[a - 1], u)) : l;
}
function CV(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = Tl(0, t, n);
    e.push(qe(r, 1, o));
  }
}
function PV(e) {
  const t = [0];
  return CV(t, e.length - 1), t;
}
function kV(e, t) {
  return e.map((r) => r * t);
}
function _V(e, t) {
  return e.map(() => t || w_).splice(0, e.length - 1);
}
function ud({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = sV(n) ? n.map(D1) : D1(n), a = {
    done: !1,
    value: t[0]
  }, i = kV(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : PV(t),
    e
  ), s = F_(i, t, {
    ease: Array.isArray(o) ? o : _V(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (a.value = s(l), a.done = l >= e, a)
  };
}
function L_(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const TV = 5;
function N_(e, t, r) {
  const n = Math.max(t - TV, 0);
  return L_(r - e(n), t - n);
}
const Kp = 1e-3, EV = 0.01, L1 = 10, $V = 0.05, OV = 1;
function MV({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, a;
  Zj(e <= Co(L1));
  let i = 1 - t;
  i = _o($V, OV, i), e = _o(EV, L1, Nn(e)), i < 1 ? (o = (u) => {
    const c = u * i, d = c * e, f = c - r, p = Iv(u, i), m = Math.exp(-d);
    return Kp - f / p * m;
  }, a = (u) => {
    const d = u * i * e, f = d * r + r, p = Math.pow(i, 2) * Math.pow(u, 2) * e, m = Math.exp(-d), g = Iv(Math.pow(u, 2), i);
    return (-o(u) + Kp > 0 ? -1 : 1) * ((f - p) * m) / g;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - r) * e + 1;
    return -Kp + c * d;
  }, a = (u) => {
    const c = Math.exp(-u * e), d = (r - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = RV(o, a, s);
  if (e = Co(e), isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const u = Math.pow(l, 2) * n;
    return {
      stiffness: u,
      damping: i * 2 * Math.sqrt(n * u),
      duration: e
    };
  }
}
const IV = 12;
function RV(e, t, r) {
  let n = r;
  for (let o = 1; o < IV; o++)
    n = n - e(n) / t(n);
  return n;
}
function Iv(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const DV = ["duration", "bounce"], AV = ["stiffness", "damping", "mass"];
function N1(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function FV(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!N1(e, AV) && N1(e, DV)) {
    const r = MV(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function z_({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], a = e[e.length - 1], i = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = FV(n), p = c ? -Nn(c) : 0, m = l / (2 * Math.sqrt(s * u)), g = a - o, y = Nn(Math.sqrt(s / u)), h = Math.abs(g) < 5;
  r || (r = h ? 0.01 : 2), t || (t = h ? 5e-3 : 0.5);
  let v;
  if (m < 1) {
    const b = Iv(y, m);
    v = (x) => {
      const k = Math.exp(-m * y * x);
      return a - k * ((p + m * y * g) / b * Math.sin(b * x) + g * Math.cos(b * x));
    };
  } else if (m === 1)
    v = (b) => a - Math.exp(-y * b) * (g + (p + y * g) * b);
  else {
    const b = y * Math.sqrt(m * m - 1);
    v = (x) => {
      const k = Math.exp(-m * y * x), P = Math.min(b * x, 300);
      return a - k * ((p + m * y * g) * Math.sinh(P) + b * g * Math.cosh(P)) / b;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (b) => {
      const x = v(b);
      if (f)
        i.done = b >= d;
      else {
        let k = p;
        b !== 0 && (m < 1 ? k = N_(v, b, x) : k = 0);
        const P = Math.abs(k) <= r, C = Math.abs(a - x) <= t;
        i.done = P && C;
      }
      return i.value = i.done ? a : x, i;
    }
  };
}
function z1({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: a = 500, modifyTarget: i, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (_) => s !== void 0 && _ < s || l !== void 0 && _ > l, m = (_) => s === void 0 ? l : l === void 0 || Math.abs(s - _) < Math.abs(l - _) ? s : l;
  let g = r * t;
  const y = d + g, h = i === void 0 ? y : i(y);
  h !== y && (g = h - d);
  const v = (_) => -g * Math.exp(-_ / n), b = (_) => h + v(_), x = (_) => {
    const $ = v(_), O = b(_);
    f.done = Math.abs($) <= u, f.value = f.done ? h : O;
  };
  let k, P;
  const C = (_) => {
    p(f.value) && (k = _, P = z_({
      keyframes: [f.value, m(f.value)],
      velocity: N_(b, _, f.value),
      damping: o,
      stiffness: a,
      restDelta: u,
      restSpeed: c
    }));
  };
  return C(0), {
    calculatedDuration: null,
    next: (_) => {
      let $ = !1;
      return !P && k === void 0 && ($ = !0, x(_), C(_)), k !== void 0 && _ > k ? P.next(_ - k) : (!$ && x(_), f);
    }
  };
}
const LV = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => Ae.update(t, !0),
    stop: () => Hn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => yt.isProcessing ? yt.timestamp : performance.now()
  };
}, j1 = 2e4;
function V1(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < j1; )
    t += r, n = e.next(t);
  return t >= j1 ? 1 / 0 : t;
}
const NV = {
  decay: z1,
  inertia: z1,
  tween: ud,
  keyframes: ud,
  spring: z_
};
function cd({ autoplay: e = !0, delay: t = 0, driver: r = LV, keyframes: n, type: o = "keyframes", repeat: a = 0, repeatDelay: i = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, m = !1, g, y;
  const h = () => {
    y = new Promise((W) => {
      g = W;
    });
  };
  h();
  let v;
  const b = NV[o] || ud;
  let x;
  b !== ud && typeof n[0] != "number" && (x = F_([0, 100], n, {
    clamp: !1
  }), n = [0, 100]);
  const k = b({ ...f, keyframes: n });
  let P;
  s === "mirror" && (P = b({
    ...f,
    keyframes: [...n].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let C = "idle", _ = null, $ = null, O = null;
  k.calculatedDuration === null && a && (k.calculatedDuration = V1(k));
  const { calculatedDuration: D } = k;
  let H = 1 / 0, V = 1 / 0;
  D !== null && (H = D + i, V = H * (a + 1) - i);
  let L = 0;
  const F = (W) => {
    if ($ === null)
      return;
    p > 0 && ($ = Math.min($, W)), p < 0 && ($ = Math.min(W - V / p, $)), _ !== null ? L = _ : L = Math.round(W - $) * p;
    const Q = L - t * (p >= 0 ? 1 : -1), j = p >= 0 ? Q < 0 : Q > V;
    L = Math.max(Q, 0), C === "finished" && _ === null && (L = V);
    let J = L, ce = k;
    if (a) {
      const ee = L / H;
      let xe = Math.floor(ee), Le = ee % 1;
      !Le && ee >= 1 && (Le = 1), Le === 1 && xe--, xe = Math.min(xe, a + 1);
      const Nt = !!(xe % 2);
      Nt && (s === "reverse" ? (Le = 1 - Le, i && (Le -= i / H)) : s === "mirror" && (ce = P));
      let Gt = _o(0, 1, Le);
      L > V && (Gt = s === "reverse" && Nt ? 1 : 0), J = Gt * H;
    }
    const se = j ? { done: !1, value: n[0] } : ce.next(J);
    x && (se.value = x(se.value));
    let { done: ue } = se;
    !j && D !== null && (ue = p >= 0 ? L >= V : L <= 0);
    const ne = _ === null && (C === "finished" || C === "running" && ue);
    return d && d(se.value), ne && R(), se;
  }, B = () => {
    v && v.stop(), v = void 0;
  }, Z = () => {
    C = "idle", B(), g(), h(), $ = O = null;
  }, R = () => {
    C = "finished", c && c(), B(), g();
  }, N = () => {
    if (m)
      return;
    v || (v = r(F));
    const W = v.now();
    l && l(), _ !== null ? $ = W - _ : (!$ || C === "finished") && ($ = W), C === "finished" && h(), O = $, _ = null, C = "running", v.start();
  };
  e && N();
  const K = {
    then(W, Q) {
      return y.then(W, Q);
    },
    get time() {
      return Nn(L);
    },
    set time(W) {
      W = Co(W), L = W, _ !== null || !v || p === 0 ? _ = W : $ = v.now() - W / p;
    },
    get duration() {
      const W = k.calculatedDuration === null ? V1(k) : k.calculatedDuration;
      return Nn(W);
    },
    get speed() {
      return p;
    },
    set speed(W) {
      W === p || !v || (p = W, K.time = Nn(L));
    },
    get state() {
      return C;
    },
    play: N,
    pause: () => {
      C = "paused", _ = L;
    },
    stop: () => {
      m = !0, C !== "idle" && (C = "idle", u && u(), Z());
    },
    cancel: () => {
      O !== null && F(O), Z();
    },
    complete: () => {
      C = "finished";
    },
    sample: (W) => ($ = 0, F(W))
  };
  return K;
}
function zV(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const jV = zV(() => Object.hasOwnProperty.call(Element.prototype, "animate")), VV = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Fu = 10, BV = 2e4, WV = (e, t) => t.type === "spring" || e === "backgroundColor" || !m_(t.ease);
function UV(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(jV() && VV.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let i = !1, s, l;
  const u = () => {
    l = new Promise((v) => {
      s = v;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (WV(t, o)) {
    const v = cd({
      ...o,
      repeat: 0,
      delay: 0
    });
    let b = { done: !1, value: c[0] };
    const x = [];
    let k = 0;
    for (; !b.done && k < BV; )
      b = v.sample(k), x.push(b.value), k += Fu;
    p = void 0, c = x, d = k - Fu, f = "linear";
  }
  const m = eV(e.owner.current, t, c, {
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
  o.syncStart && (m.startTime = yt.isProcessing ? yt.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
  const g = () => m.cancel(), y = () => {
    Ae.update(g), s(), u();
  };
  return m.onfinish = () => {
    e.set(tV(c, o)), n && n(), y();
  }, {
    then(v, b) {
      return l.then(v, b);
    },
    attachTimeline(v) {
      return m.timeline = v, m.onfinish = null, rt;
    },
    get time() {
      return Nn(m.currentTime || 0);
    },
    set time(v) {
      m.currentTime = Co(v);
    },
    get speed() {
      return m.playbackRate;
    },
    set speed(v) {
      m.playbackRate = v;
    },
    get duration() {
      return Nn(d);
    },
    play: () => {
      i || (m.play(), Hn(g));
    },
    pause: () => m.pause(),
    stop: () => {
      if (i = !0, m.playState === "idle")
        return;
      const { currentTime: v } = m;
      if (v) {
        const b = cd({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(b.sample(v - Fu).value, b.sample(v).value, Fu);
      }
      y();
    },
    complete: () => m.finish(),
    cancel: y
  };
}
function HV({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (r && r(e[e.length - 1]), n && n(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: rt,
    pause: rt,
    stop: rt,
    then: (a) => (a(), Promise.resolve()),
    cancel: rt,
    complete: rt
  });
  return t ? cd({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const GV = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, YV = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), qV = {
  type: "keyframes",
  duration: 0.8
}, KV = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, XV = (e, { keyframes: t }) => t.length > 2 ? qV : ga.has(e) ? e.startsWith("scale") ? YV(t[1]) : GV : KV, Rv = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(To.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), QV = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function ZV(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(Sf) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let a = QV.has(t) ? 1 : 0;
  return n !== r && (a *= 100), t + "(" + a + o + ")";
}
const JV = /([a-z-]*)\(.*?\)/g, Dv = {
  ...To,
  getAnimatableNone: (e) => {
    const t = e.match(JV);
    return t ? t.map(ZV).join(" ") : e;
  }
}, eB = {
  ...Jk,
  // Color props
  color: zt,
  backgroundColor: zt,
  outlineColor: zt,
  fill: zt,
  stroke: zt,
  // Border props
  borderColor: zt,
  borderTopColor: zt,
  borderRightColor: zt,
  borderBottomColor: zt,
  borderLeftColor: zt,
  filter: Dv,
  WebkitFilter: Dv
}, Gg = (e) => eB[e];
function j_(e, t) {
  let r = Gg(e);
  return r !== Dv && (r = To), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const V_ = (e) => /^0[^.\s]+$/.test(e);
function tB(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || V_(e);
}
function rB(e, t, r, n) {
  const o = Rv(t, r);
  let a;
  Array.isArray(r) ? a = [...r] : a = [null, r];
  const i = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < a.length; u++)
    a[u] === null && (a[u] = u === 0 ? i : a[u - 1]), tB(a[u]) && l.push(u), typeof a[u] == "string" && a[u] !== "none" && a[u] !== "0" && (s = a[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      a[c] = j_(t, s);
    }
  return a;
}
function nB({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: a, repeatType: i, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function Yg(e, t) {
  return e[t] || e.default || e;
}
const qg = (e, t, r, n = {}) => (o) => {
  const a = Yg(n, e) || {}, i = a.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - Co(i);
  const l = rB(t, e, r, a), u = l[0], c = l[l.length - 1], d = Rv(e, u), f = Rv(e, c);
  let p = {
    keyframes: l,
    velocity: t.getVelocity(),
    ease: "easeOut",
    ...a,
    delay: -s,
    onUpdate: (m) => {
      t.set(m), a.onUpdate && a.onUpdate(m);
    },
    onComplete: () => {
      o(), a.onComplete && a.onComplete();
    }
  };
  if (nB(a) || (p = {
    ...p,
    ...XV(e, p)
  }), p.duration && (p.duration = Co(p.duration)), p.repeatDelay && (p.repeatDelay = Co(p.repeatDelay)), !d || !f || Jj.current || a.type === !1)
    return HV(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const m = UV(t, e, p);
    if (m)
      return m;
  }
  return cd(p);
};
function dd(e) {
  return !!(rr(e) && e.add);
}
const B_ = (e) => /^\-?\d*\.?\d+$/.test(e);
function Kg(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Xg(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Qg {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Kg(this.subscriptions, t), () => Xg(this.subscriptions, t);
  }
  notify(t, r, n) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, r, n);
      else
        for (let a = 0; a < o; a++) {
          const i = this.subscriptions[a];
          i && i(t, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const oB = (e) => !isNaN(parseFloat(e));
class aB {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, r = {}) {
    this.version = "10.16.12", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (n, o = !0) => {
      this.prev = this.current, this.current = n;
      const { delta: a, timestamp: i } = yt;
      this.lastUpdated !== i && (this.timeDelta = a, this.lastUpdated = i, Ae.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => Ae.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: n }) => {
      n !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = oB(this.current), this.owner = r.owner;
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
  on(t, r) {
    this.events[t] || (this.events[t] = new Qg());
    const n = this.events[t].add(r);
    return t === "change" ? () => {
      n(), Ae.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : n;
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
  attach(t, r) {
    this.passiveEffect = t, this.stopPassiveEffect = r;
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
  set(t, r = !0) {
    !r || !this.passiveEffect ? this.updateAndNotify(t, r) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, r, n) {
    this.set(r), this.prev = t, this.timeDelta = n;
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
      L_(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = t(r), this.events.animationStart && this.events.animationStart.notify();
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
function $i(e, t) {
  return new aB(e, t);
}
const W_ = (e) => (t) => t.test(e), iB = {
  test: (e) => e === "auto",
  parse: (e) => e
}, U_ = [ya, ie, yn, no, hj, pj, iB], fs = (e) => U_.find(W_(e)), sB = [...U_, zt, To], lB = (e) => sB.find(W_(e));
function uB(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, $i(r));
}
function cB(e, t) {
  const r = Pf(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...a } = r ? e.makeTargetAnimatable(r, !1) : {};
  a = { ...a, ...n };
  for (const i in a) {
    const s = Ej(a[i]);
    uB(e, i, s);
  }
}
function dB(e, t, r) {
  var n, o;
  const a = Object.keys(t).filter((s) => !e.hasValue(s)), i = a.length;
  if (i)
    for (let s = 0; s < i; s++) {
      const l = a[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (B_(c) || V_(c)) ? c = parseFloat(c) : !lB(c) && To.test(u) && (c = j_(l, u)), e.addValue(l, $i(c, { owner: e })), r[l] === void 0 && (r[l] = c), c !== null && e.setBaseTarget(l, c));
    }
}
function fB(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function pB(e, t, r) {
  const n = {};
  for (const o in e) {
    const a = fB(o, t);
    if (a !== void 0)
      n[o] = a;
    else {
      const i = r.getValue(o);
      i && (n[o] = i.get());
    }
  }
  return n;
}
function hB({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function H_(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: i, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (a = n);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || c && hB(c, d))
      continue;
    const m = {
      delay: r,
      elapsed: 0,
      ...Yg(a || {}, d)
    };
    let g = !0;
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const v = e.getProps()[Gk];
      v && (g = !1, m.elapsed = window.HandoffAppearAnimations(v, d, f, Ae), m.syncStart = !0);
    }
    let y = g && p === f.get();
    if (m.type === "spring" && (f.getVelocity() || m.velocity) && (y = !1), f.animation && (y = !1), y)
      continue;
    f.start(qg(d, f, p, e.shouldReduceMotion && ga.has(d) ? { type: !1 } : m));
    const h = f.animation;
    dd(l) && (l.add(d), h.then(() => l.remove(d))), u.push(h);
  }
  return i && Promise.all(u).then(() => {
    i && cB(e, i);
  }), u;
}
function Av(e, t, r = {}) {
  const n = Pf(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const a = n ? () => Promise.all(H_(e, n, r)) : () => Promise.resolve(), i = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
    return vB(e, t, u + l, c, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [a, i] : [i, a];
    return l().then(() => u());
  } else
    return Promise.all([a(), i(r.delay)]);
}
function vB(e, t, r = 0, n = 0, o = 1, a) {
  const i = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (u = 0) => u * n : (u = 0) => s - u * n;
  return Array.from(e.variantChildren).sort(mB).forEach((u, c) => {
    u.notify("AnimationStart", t), i.push(Av(u, t, {
      ...a,
      delay: r + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function mB(e, t) {
  return e.sortNodePosition(t);
}
function gB(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((a) => Av(e, a, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = Av(e, t, r);
  else {
    const o = typeof t == "function" ? Pf(e, t, r.custom) : t;
    n = Promise.all(H_(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const yB = [...Ig].reverse(), bB = Ig.length;
function wB(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => gB(e, r, n)));
}
function xB(e) {
  let t = wB(e);
  const r = CB();
  let n = !0;
  const o = (l, u) => {
    const c = Pf(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...p } = c;
      l = { ...l, ...p, ...f };
    }
    return l;
  };
  function a(l) {
    t = l(e);
  }
  function i(l, u) {
    const c = e.getProps(), d = e.getVariantContext(!0) || {}, f = [], p = /* @__PURE__ */ new Set();
    let m = {}, g = 1 / 0;
    for (let h = 0; h < bB; h++) {
      const v = yB[h], b = r[v], x = c[v] !== void 0 ? c[v] : d[v], k = kl(x), P = v === u ? b.isActive : null;
      P === !1 && (g = h);
      let C = x === d[v] && x !== c[v] && k;
      if (C && n && e.manuallyAnimateOnMount && (C = !1), b.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !x && !b.prevProp || // Or if the prop doesn't define an animation
      wf(x) || typeof x == "boolean")
        continue;
      const _ = SB(b.prevProp, x);
      let $ = _ || // If we're making this variant active, we want to always make it active
      v === u && b.isActive && !C && k || // If we removed a higher-priority variant (i is in reverse order)
      h > g && k;
      const O = Array.isArray(x) ? x : [x];
      let D = O.reduce(o, {});
      P === !1 && (D = {});
      const { prevResolvedValues: H = {} } = b, V = {
        ...H,
        ...D
      }, L = (F) => {
        $ = !0, p.delete(F), b.needsAnimating[F] = !0;
      };
      for (const F in V) {
        const B = D[F], Z = H[F];
        m.hasOwnProperty(F) || (B !== Z ? sd(B) && sd(Z) ? !h_(B, Z) || _ ? L(F) : b.protectedKeys[F] = !0 : B !== void 0 ? L(F) : p.add(F) : B !== void 0 && p.has(F) ? L(F) : b.protectedKeys[F] = !0);
      }
      b.prevProp = x, b.prevResolvedValues = D, b.isActive && (m = { ...m, ...D }), n && e.blockInitialAnimation && ($ = !1), $ && !C && f.push(...O.map((F) => ({
        animation: F,
        options: { type: v, ...l }
      })));
    }
    if (p.size) {
      const h = {};
      p.forEach((v) => {
        const b = e.getBaseTarget(v);
        b !== void 0 && (h[v] = b);
      }), f.push({ animation: h });
    }
    let y = !!f.length;
    return n && c.initial === !1 && !e.manuallyAnimateOnMount && (y = !1), n = !1, y ? t(f) : Promise.resolve();
  }
  function s(l, u, c) {
    var d;
    if (r[l].isActive === u)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((p) => {
      var m;
      return (m = p.animationState) === null || m === void 0 ? void 0 : m.setActive(l, u);
    }), r[l].isActive = u;
    const f = i(c, l);
    for (const p in r)
      r[p].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: i,
    setActive: s,
    setAnimateFunction: a,
    getState: () => r
  };
}
function SB(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !h_(t, e) : !1;
}
function jo(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function CB() {
  return {
    animate: jo(!0),
    whileInView: jo(),
    whileHover: jo(),
    whileTap: jo(),
    whileDrag: jo(),
    whileFocus: jo(),
    exit: jo()
  };
}
class PB extends Io {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = xB(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), wf(t) && (this.unmount = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
}
let kB = 0;
class _B extends Io {
  constructor() {
    super(...arguments), this.id = kB++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: r, custom: n } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o)
      return;
    const a = this.node.animationState.setActive("exit", !t, { custom: n ?? this.node.getProps().custom });
    r && !t && a.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const TB = {
  animation: {
    Feature: PB
  },
  exit: {
    Feature: _B
  }
}, B1 = (e, t) => Math.abs(e - t);
function EB(e, t) {
  const r = B1(e.x, t.x), n = B1(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class G_ {
  constructor(t, r, { transformPagePoint: n, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = Qp(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = EB(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = c, { timestamp: m } = yt;
      this.history.push({ ...p, timestamp: m });
      const { onStart: g, onMove: y } = this.handlers;
      d || (g && g(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), y && y(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = Xp(d, this.transformPagePoint), Ae.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: p } = this.handlers, m = Qp(c.type === "pointercancel" ? this.lastMoveEventInfo : Xp(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, m), p && p(c, m);
    }, !u_(t))
      return;
    this.handlers = r, this.transformPagePoint = n, this.contextWindow = o || window;
    const a = Cf(t), i = Xp(a, this.transformPagePoint), { point: s } = i, { timestamp: l } = yt;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = r;
    u && u(t, Qp(i, this.history)), this.removeListeners = So(Ln(this.contextWindow, "pointermove", this.handlePointerMove), Ln(this.contextWindow, "pointerup", this.handlePointerUp), Ln(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Hn(this.updatePoint);
  }
}
function Xp(e, t) {
  return t ? { point: t(e.point) } : e;
}
function W1(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Qp({ point: e }, t) {
  return {
    point: e,
    delta: W1(e, Y_(t)),
    offset: W1(e, $B(t)),
    velocity: OB(t, 0.1)
  };
}
function $B(e) {
  return e[0];
}
function Y_(e) {
  return e[e.length - 1];
}
function OB(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = Y_(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > Co(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const a = Nn(o.timestamp - n.timestamp);
  if (a === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - n.x) / a,
    y: (o.y - n.y) / a
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function mr(e) {
  return e.max - e.min;
}
function Fv(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function U1(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = qe(t.min, t.max, e.origin), e.scale = mr(r) / mr(t), (Fv(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = qe(r.min, r.max, e.origin) - e.originPoint, (Fv(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Ks(e, t, r, n) {
  U1(e.x, t.x, r.x, n ? n.originX : void 0), U1(e.y, t.y, r.y, n ? n.originY : void 0);
}
function H1(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + mr(t);
}
function MB(e, t, r) {
  H1(e.x, t.x, r.x), H1(e.y, t.y, r.y);
}
function G1(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + mr(t);
}
function Xs(e, t, r) {
  G1(e.x, t.x, r.x), G1(e.y, t.y, r.y);
}
function IB(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? qe(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? qe(r, e, n.max) : Math.min(e, r)), e;
}
function Y1(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function RB(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: Y1(e.x, r, o),
    y: Y1(e.y, t, n)
  };
}
function q1(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function DB(e, t) {
  return {
    x: q1(e.x, t.x),
    y: q1(e.y, t.y)
  };
}
function AB(e, t) {
  let r = 0.5;
  const n = mr(e), o = mr(t);
  return o > n ? r = Tl(t.min, t.max - n, e.min) : n > o && (r = Tl(e.min, e.max - o, t.min)), _o(0, 1, r);
}
function FB(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const Lv = 0.35;
function LB(e = Lv) {
  return e === !1 ? e = 0 : e === !0 && (e = Lv), {
    x: K1(e, "left", "right"),
    y: K1(e, "top", "bottom")
  };
}
function K1(e, t, r) {
  return {
    min: X1(e, t),
    max: X1(e, r)
  };
}
function X1(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Q1 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), ei = () => ({
  x: Q1(),
  y: Q1()
}), Z1 = () => ({ min: 0, max: 0 }), dt = () => ({
  x: Z1(),
  y: Z1()
});
function an(e) {
  return [e("x"), e("y")];
}
function q_({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function NB({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function zB(e, t) {
  if (!t)
    return e;
  const r = t({ x: e.left, y: e.top }), n = t({ x: e.right, y: e.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: n.y,
    right: n.x
  };
}
function Zp(e) {
  return e === void 0 || e === 1;
}
function Nv({ scale: e, scaleX: t, scaleY: r }) {
  return !Zp(e) || !Zp(t) || !Zp(r);
}
function Wo(e) {
  return Nv(e) || K_(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function K_(e) {
  return J1(e.x) || J1(e.y);
}
function J1(e) {
  return e && e !== "0%";
}
function fd(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function ew(e, t, r, n, o) {
  return o !== void 0 && (e = fd(e, o, n)), fd(e, r, n) + t;
}
function zv(e, t = 0, r = 1, n, o) {
  e.min = ew(e.min, t, r, n, o), e.max = ew(e.max, t, r, n, o);
}
function X_(e, { x: t, y: r }) {
  zv(e.x, t.translate, t.scale, t.originPoint), zv(e.y, r.translate, r.scale, r.originPoint);
}
function jB(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let a, i;
  for (let s = 0; s < o; s++) {
    a = r[s], i = a.projectionDelta;
    const l = a.instance;
    l && l.style && l.style.display === "contents" || (n && a.options.layoutScroll && a.scroll && a !== a.root && ti(e, {
      x: -a.scroll.offset.x,
      y: -a.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, X_(e, i)), n && Wo(a.latestValues) && ti(e, a.latestValues));
  }
  t.x = tw(t.x), t.y = tw(t.y);
}
function tw(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function io(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function rw(e, t, [r, n, o]) {
  const a = t[o] !== void 0 ? t[o] : 0.5, i = qe(e.min, e.max, a);
  zv(e, t[r], t[n], i, t.scale);
}
const VB = ["x", "scaleX", "originX"], BB = ["y", "scaleY", "originY"];
function ti(e, t) {
  rw(e.x, t, VB), rw(e.y, t, BB);
}
function Q_(e, t) {
  return q_(zB(e.getBoundingClientRect(), t));
}
function WB(e, t, r) {
  const n = Q_(e, r), { scroll: o } = t;
  return o && (io(n.x, o.offset.x), io(n.y, o.offset.y)), n;
}
const Z_ = ({ current: e }) => e ? e.ownerDocument.defaultView : null, UB = /* @__PURE__ */ new WeakMap();
class HB {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = dt(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(Cf(l, "page").point);
    }, a = (l, u) => {
      const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = d_(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), an((m) => {
        let g = this.getAxisMotionValue(m).get() || 0;
        if (yn.test(g)) {
          const { projection: y } = this.visualElement;
          if (y && y.layout) {
            const h = y.layout.layoutBox[m];
            h && (g = mr(h) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[m] = g;
      }), f && Ae.update(() => f(l, u), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, i = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: m } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = GB(m), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, m), this.updateAxis("y", u.point, m), this.visualElement.render(), p && p(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new G_(t, {
      onSessionStart: o,
      onStart: a,
      onMove: i,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: Z_(this.visualElement)
    });
  }
  stop(t, r) {
    const n = this.isDragging;
    if (this.cancel(), !n)
      return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && Ae.update(() => a(t, r));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: n } = this.getProps();
    !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), r && r.setActive("whileDrag", !1);
  }
  updateAxis(t, r, n) {
    const { drag: o } = this.getProps();
    if (!n || !Lu(t, o, this.currentDirection))
      return;
    const a = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (i = IB(i, this.constraints[t], this.elastic[t])), a.set(i);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: n } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, a = this.constraints;
    r && Za(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && o ? this.constraints = RB(o.layoutBox, r) : this.constraints = !1, this.elastic = LB(n), a !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && an((i) => {
      this.getAxisMotionValue(i) && (this.constraints[i] = FB(o.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !Za(t))
      return !1;
    const n = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const a = WB(n, o.root, this.visualElement.getTransformPagePoint());
    let i = DB(o.layout.layoutBox, a);
    if (r) {
      const s = r(NB(i));
      this.hasMutatedConstraints = !!s, s && (i = q_(s));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: a, dragSnapToOrigin: i, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = an((c) => {
      if (!Lu(c, r, this.currentDirection))
        return;
      let d = l && l[c] || {};
      i && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, p = o ? 40 : 1e7, m = {
        type: "inertia",
        velocity: n ? t[c] : 0,
        bounceStiffness: f,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...a,
        ...d
      };
      return this.startAxisValueAnimation(c, m);
    });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return n.start(qg(t, n, 0, r));
  }
  stopAnimation() {
    an((t) => this.getAxisMotionValue(t).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const r = "_drag" + t.toUpperCase(), n = this.visualElement.getProps(), o = n[r];
    return o || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    an((r) => {
      const { drag: n } = this.getProps();
      if (!Lu(r, n, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, a = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: i, max: s } = o.layout.layoutBox[r];
        a.set(t[r] - qe(i, s, 0.5));
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
    const { drag: t, dragConstraints: r } = this.getProps(), { projection: n } = this.visualElement;
    if (!Za(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    an((i) => {
      const s = this.getAxisMotionValue(i);
      if (s) {
        const l = s.get();
        o[i] = AB({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    this.visualElement.current.style.transform = a ? a({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), an((i) => {
      if (!Lu(i, t, null))
        return;
      const s = this.getAxisMotionValue(i), { min: l, max: u } = this.constraints[i];
      s.set(qe(l, u, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    UB.set(this.visualElement, this);
    const t = this.visualElement.current, r = Ln(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      Za(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, a = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const i = Dn(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (an((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), r(), a(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: a = !1, dragElastic: i = Lv, dragMomentum: s = !0 } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: o,
      dragConstraints: a,
      dragElastic: i,
      dragMomentum: s
    };
  }
}
function Lu(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function GB(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class YB extends Io {
  constructor(t) {
    super(t), this.removeGroupControls = rt, this.removeListeners = rt, this.controls = new HB(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || rt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const nw = (e) => (t, r) => {
  e && Ae.update(() => e(t, r));
};
class qB extends Io {
  constructor() {
    super(...arguments), this.removePointerDownListener = rt;
  }
  onPointerDown(t) {
    this.session = new G_(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Z_(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: nw(t),
      onStart: nw(r),
      onMove: n,
      onEnd: (a, i) => {
        delete this.session, o && Ae.update(() => o(a, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Ln(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function J_() {
  const e = w.useContext(yf);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = w.useId();
  return w.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
const wc = {
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
function ow(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const ps = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (ie.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = ow(e, t.target.x), n = ow(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, KB = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = To.parse(e);
    if (o.length > 5)
      return n;
    const a = To.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, s = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + i] /= s, o[1 + i] /= l;
    const u = qe(s, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= u), typeof o[3 + i] == "number" && (o[3 + i] /= u), a(o);
  }
};
class XB extends U.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: a } = t;
    ij(QB), a && (r.group && r.group.add(a), n && n.register && o && n.register(a), a.root.didUpdate(), a.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), a.setOptions({
      ...a.options,
      onExitComplete: () => this.safeToRemove()
    })), wc.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: a } = this.props, i = n.projection;
    return i && (i.isPresent = a, o || t.layoutDependency !== r || r === void 0 ? i.willUpdate() : this.safeToRemove(), t.isPresent !== a && (a ? i.promote() : i.relegate() || Ae.postRender(() => {
      const s = i.getStack();
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
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(o), n && n.deregister && n.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function eT(e) {
  const [t, r] = J_(), n = w.useContext(Dg);
  return U.createElement(XB, { ...e, layoutGroup: n, switchLayoutGroup: w.useContext(qk), isPresent: t, safeToRemove: r });
}
const QB = {
  borderRadius: {
    ...ps,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ps,
  borderTopRightRadius: ps,
  borderBottomLeftRadius: ps,
  borderBottomRightRadius: ps,
  boxShadow: KB
}, tT = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], ZB = tT.length, aw = (e) => typeof e == "string" ? parseFloat(e) : e, iw = (e) => typeof e == "number" || ie.test(e);
function JB(e, t, r, n, o, a) {
  o ? (e.opacity = qe(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    e6(n)
  ), e.opacityExit = qe(t.opacity !== void 0 ? t.opacity : 1, 0, t6(n))) : a && (e.opacity = qe(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let i = 0; i < ZB; i++) {
    const s = `border${tT[i]}Radius`;
    let l = sw(t, s), u = sw(r, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || iw(l) === iw(u) ? (e[s] = Math.max(qe(aw(l), aw(u), n), 0), (yn.test(u) || yn.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || r.rotate) && (e.rotate = qe(t.rotate || 0, r.rotate || 0, n));
}
function sw(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const e6 = rT(0, 0.5, Wg), t6 = rT(0.5, 0.95, rt);
function rT(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(Tl(e, t, n));
}
function lw(e, t) {
  e.min = t.min, e.max = t.max;
}
function _r(e, t) {
  lw(e.x, t.x), lw(e.y, t.y);
}
function uw(e, t, r, n, o) {
  return e -= t, e = fd(e, 1 / r, n), o !== void 0 && (e = fd(e, 1 / o, n)), e;
}
function r6(e, t = 0, r = 1, n = 0.5, o, a = e, i = e) {
  if (yn.test(t) && (t = parseFloat(t), t = qe(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let s = qe(a.min, a.max, n);
  e === a && (s -= t), e.min = uw(e.min, t, r, s, o), e.max = uw(e.max, t, r, s, o);
}
function cw(e, t, [r, n, o], a, i) {
  r6(e, t[r], t[n], t[o], t.scale, a, i);
}
const n6 = ["x", "scaleX", "originX"], o6 = ["y", "scaleY", "originY"];
function dw(e, t, r, n) {
  cw(e.x, t, n6, r ? r.x : void 0, n ? n.x : void 0), cw(e.y, t, o6, r ? r.y : void 0, n ? n.y : void 0);
}
function fw(e) {
  return e.translate === 0 && e.scale === 1;
}
function nT(e) {
  return fw(e.x) && fw(e.y);
}
function a6(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function oT(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function pw(e) {
  return mr(e.x) / mr(e.y);
}
class i6 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Kg(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Xg(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((o) => t === o);
    if (r === 0)
      return !1;
    let n;
    for (let o = r; o >= 0; o--) {
      const a = this.members[o];
      if (a.isPresent !== !1) {
        n = a;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(t, r) {
    const n = this.lead;
    if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
      n.instance && n.scheduleRender(), t.scheduleRender(), t.resumeFrom = n, r && (t.resumeFrom.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: n } = t;
      r.onExitComplete && r.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
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
function hw(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, a = e.y.translate / t.y;
  if ((o || a) && (n = `translate3d(${o}px, ${a}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: u, rotateY: c } = r;
    l && (n += `rotate(${l}deg) `), u && (n += `rotateX(${u}deg) `), c && (n += `rotateY(${c}deg) `);
  }
  const i = e.x.scale * t.x, s = e.y.scale * t.y;
  return (i !== 1 || s !== 1) && (n += `scale(${i}, ${s})`), n || "none";
}
const s6 = (e, t) => e.depth - t.depth;
class l6 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Kg(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Xg(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(s6), this.isDirty = !1, this.children.forEach(t);
  }
}
function u6(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const a = o - r;
    a >= t && (Hn(n), e(a - t));
  };
  return Ae.read(n, !0), () => Hn(n);
}
function c6(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function d6(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function f6(e, t, r) {
  const n = rr(e) ? e : $i(e);
  return n.start(qg("", n, t, r)), n.animation;
}
const vw = ["", "X", "Y", "Z"], p6 = { visibility: "hidden" }, mw = 1e3;
let h6 = 0;
const Uo = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function aT({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(i = {}, s = t == null ? void 0 : t()) {
      this.id = h6++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Uo.totalNodes = Uo.resolvedTargetDeltas = Uo.recalculatedProjection = 0, this.nodes.forEach(g6), this.nodes.forEach(S6), this.nodes.forEach(C6), this.nodes.forEach(y6), c6(Uo);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new l6());
    }
    addEventListener(i, s) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new Qg()), this.eventHandlers.get(i).add(s);
    }
    notifyListeners(i, ...s) {
      const l = this.eventHandlers.get(i);
      l && l.notify(...s);
    }
    hasListeners(i) {
      return this.eventHandlers.has(i);
    }
    /**
     * Lifecycles
     */
    mount(i, s = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = d6(i), this.instance = i;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = u6(f, 250), wc.hasAnimatedSinceResize && (wc.hasAnimatedSinceResize = !1, this.nodes.forEach(yw));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || c.getDefaultTransition() || E6, { onLayoutAnimationStart: y, onLayoutAnimationComplete: h } = c.getProps(), v = !this.targetLayout || !oT(this.targetLayout, m) || p, b = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || b || f && (v || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, b);
          const x = {
            ...Yg(g, "layout"),
            onPlay: y,
            onComplete: h
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x);
        } else
          f || yw(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Hn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(P6), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: i } = this.options;
      return i && i.getProps().transformTemplate;
    }
    willUpdate(i = !0) {
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
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(gw);
        return;
      }
      this.isUpdating || this.nodes.forEach(w6), this.isUpdating = !1, this.nodes.forEach(x6), this.nodes.forEach(v6), this.nodes.forEach(m6), this.clearAllSnapshots();
      const s = performance.now();
      yt.delta = _o(0, 1e3 / 60, s - yt.timestamp), yt.timestamp = s, yt.isProcessing = !0, Bp.update.process(yt), Bp.preRender.process(yt), Bp.render.process(yt), yt.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(b6), this.sharedNodes.forEach(k6);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Ae.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ae.postRender(() => {
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
      const i = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = dt(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s && s.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0);
    }
    updateScroll(i = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (s = !1), s && (this.scroll = {
        animationId: this.root.animationId,
        phase: i,
        isRoot: n(this.instance),
        offset: r(this.instance)
      });
    }
    resetTransform() {
      if (!o)
        return;
      const i = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !nT(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      i && (s || Wo(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return i && (l = this.removeTransform(l)), $6(l), {
        animationId: this.root.animationId,
        measuredBox: s,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: i } = this.options;
      if (!i)
        return dt();
      const s = i.measureViewportBox(), { scroll: l } = this.root;
      return l && (io(s.x, l.offset.x), io(s.y, l.offset.y)), s;
    }
    removeElementScroll(i) {
      const s = dt();
      _r(s, i);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            _r(s, i);
            const { scroll: f } = this.root;
            f && (io(s.x, -f.offset.x), io(s.y, -f.offset.y));
          }
          io(s.x, c.offset.x), io(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(i, s = !1) {
      const l = dt();
      _r(l, i);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s && c.options.layoutScroll && c.scroll && c !== c.root && ti(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Wo(c.latestValues) && ti(l, c.latestValues);
      }
      return Wo(this.latestValues) && ti(l, this.latestValues), l;
    }
    removeTransform(i) {
      const s = dt();
      _r(s, i);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Wo(u.latestValues))
          continue;
        Nv(u.latestValues) && u.updateSnapshot();
        const c = dt(), d = u.measurePageBox();
        _r(c, d), dw(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Wo(this.latestValues) && dw(s, this.latestValues), s;
    }
    setTargetDelta(i) {
      this.targetDelta = i, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== yt.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(i = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (!(i || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (this.resolvedRelativeTargetAt = yt.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = dt(), this.relativeTargetOrigin = dt(), Xs(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), _r(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = dt(), this.targetWithTransforms = dt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), MB(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : _r(this.target, this.layout.layoutBox), X_(this.target, this.targetDelta)) : _r(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = dt(), this.relativeTargetOrigin = dt(), Xs(this.relativeTargetOrigin, this.target, p.target), _r(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Uo.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Nv(this.parent.latestValues) || K_(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var i;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let u = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === yt.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      _r(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      jB(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: m } = s;
      if (!m) {
        this.projectionTransform && (this.projectionDelta = ei(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = ei(), this.projectionDeltaWithTransform = ei());
      const g = this.projectionTransform;
      Ks(this.projectionDelta, this.layoutCorrected, m, this.latestValues), this.projectionTransform = hw(this.projectionDelta, this.treeScale), (this.projectionTransform !== g || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m)), Uo.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), i) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(i, s = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = ei();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = dt(), p = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, g = p !== m, y = this.getStack(), h = !y || y.members.length <= 1, v = !!(g && !h && this.options.crossfade === !0 && !this.path.some(T6));
      this.animationProgress = 0;
      let b;
      this.mixTargetDelta = (x) => {
        const k = x / 1e3;
        bw(d.x, i.x, k), bw(d.y, i.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Xs(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), _6(this.relativeTarget, this.relativeTargetOrigin, f, k), b && a6(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = dt()), _r(b, this.relativeTarget)), g && (this.animationValues = c, JB(c, u, this.latestValues, k, v, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Hn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ae.update(() => {
        wc.hasAnimatedSinceResize = !0, this.currentAnimation = f6(0, mw, {
          ...i,
          onUpdate: (s) => {
            this.mixTargetDelta(s), i.onUpdate && i.onUpdate(s);
          },
          onComplete: () => {
            i.onComplete && i.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const i = this.getStack();
      i && i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(mw), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = i;
      if (!(!s || !l || !u)) {
        if (this !== i && this.layout && u && iT(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || dt();
          const d = mr(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const f = mr(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + f;
        }
        _r(s, l), ti(s, c), Ks(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(i, s) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new i6()), this.sharedNodes.get(i).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(s) : void 0
      });
    }
    isLead() {
      const i = this.getStack();
      return i ? i.lead === this : !0;
    }
    getLead() {
      var i;
      const { layoutId: s } = this.options;
      return s ? ((i = this.getStack()) === null || i === void 0 ? void 0 : i.lead) || this : this;
    }
    getPrevLead() {
      var i;
      const { layoutId: s } = this.options;
      return s ? (i = this.getStack()) === null || i === void 0 ? void 0 : i.prevLead : void 0;
    }
    getStack() {
      const { layoutId: i } = this.options;
      if (i)
        return this.root.sharedNodes.get(i);
    }
    promote({ needsReset: i, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), i && (this.projectionDelta = void 0, this.needsReset = !0), s && this.setOptions({ transition: s });
    }
    relegate() {
      const i = this.getStack();
      return i ? i.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: i } = this.options;
      if (!i)
        return;
      let s = !1;
      const { latestValues: l } = i;
      if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s)
        return;
      const u = {};
      for (let c = 0; c < vw.length; c++) {
        const d = "rotate" + vw[c];
        l[d] && (u[d] = l[d], i.setStaticValue(d, 0));
      }
      i.render();
      for (const c in u)
        i.setStaticValue(c, u[c]);
      i.scheduleRender();
    }
    getProjectionStyles(i) {
      var s, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return p6;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = bc(i == null ? void 0 : i.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const g = {};
        return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = bc(i == null ? void 0 : i.pointerEvents) || ""), this.hasProjected && !Wo(this.latestValues) && (g.transform = c ? c({}, "") : "none", this.hasProjected = !1), g;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = hw(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y: m } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${m.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const g in ad) {
        if (f[g] === void 0)
          continue;
        const { correct: y, applyTo: h } = ad[g], v = u.transform === "none" ? f[g] : y(f[g], d);
        if (h) {
          const b = h.length;
          for (let x = 0; x < b; x++)
            u[h[x]] = v;
        } else
          u[g] = v;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? bc(i == null ? void 0 : i.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var s;
        return (s = i.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(gw), this.root.sharedNodes.clear();
    }
  };
}
function v6(e) {
  e.updateLayout();
}
function m6(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: a } = e.options, i = r.source !== e.layout.source;
    a === "size" ? an((d) => {
      const f = i ? r.measuredBox[d] : r.layoutBox[d], p = mr(f);
      f.min = n[d].min, f.max = f.min + p;
    }) : iT(a, r.layoutBox, n) && an((d) => {
      const f = i ? r.measuredBox[d] : r.layoutBox[d], p = mr(n[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = ei();
    Ks(s, n, r.layoutBox);
    const l = ei();
    i ? Ks(l, e.applyTransform(o, !0), r.measuredBox) : Ks(l, n, r.layoutBox);
    const u = !nT(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const m = dt();
          Xs(m, r.layoutBox, f.layoutBox);
          const g = dt();
          Xs(g, n, p.layoutBox), oT(m, g) || (c = !0), d.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = m, e.relativeParent = d);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: r,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function g6(e) {
  Uo.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function y6(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function b6(e) {
  e.clearSnapshot();
}
function gw(e) {
  e.clearMeasurements();
}
function w6(e) {
  e.isLayoutDirty = !1;
}
function x6(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function yw(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function S6(e) {
  e.resolveTargetDelta();
}
function C6(e) {
  e.calcProjection();
}
function P6(e) {
  e.resetRotation();
}
function k6(e) {
  e.removeLeadSnapshot();
}
function bw(e, t, r) {
  e.translate = qe(t.translate, 0, r), e.scale = qe(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function ww(e, t, r, n) {
  e.min = qe(t.min, r.min, n), e.max = qe(t.max, r.max, n);
}
function _6(e, t, r, n) {
  ww(e.x, t.x, r.x, n), ww(e.y, t.y, r.y, n);
}
function T6(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const E6 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, xw = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), Sw = xw("applewebkit/") && !xw("chrome/") ? Math.round : rt;
function Cw(e) {
  e.min = Sw(e.min), e.max = Sw(e.max);
}
function $6(e) {
  Cw(e.x), Cw(e.y);
}
function iT(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !Fv(pw(t), pw(r), 0.2);
}
const O6 = aT({
  attachResizeListener: (e, t) => Dn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Jp = {
  current: void 0
}, sT = aT({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Jp.current) {
      const e = new O6({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Jp.current = e;
    }
    return Jp.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), M6 = {
  pan: {
    Feature: qB
  },
  drag: {
    Feature: YB,
    ProjectionNode: sT,
    MeasureLayout: eT
  }
}, I6 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function R6(e) {
  const t = I6.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
function jv(e, t, r = 1) {
  const [n, o] = R6(e);
  if (!n)
    return;
  const a = window.getComputedStyle(t).getPropertyValue(n);
  if (a) {
    const i = a.trim();
    return B_(i) ? parseFloat(i) : i;
  } else
    return $v(o) ? jv(o, t, r + 1) : o;
}
function D6(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((o) => {
    const a = o.get();
    if (!$v(a))
      return;
    const i = jv(a, n);
    i && o.set(i);
  });
  for (const o in t) {
    const a = t[o];
    if (!$v(a))
      continue;
    const i = jv(a, n);
    i && (t[o] = i, r || (r = {}), r[o] === void 0 && (r[o] = a));
  }
  return { target: t, transitionEnd: r };
}
const A6 = /* @__PURE__ */ new Set([
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
]), lT = (e) => A6.has(e), F6 = (e) => Object.keys(e).some(lT), Pw = (e) => e === ya || e === ie, kw = (e, t) => parseFloat(e.split(", ")[t]), _w = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return kw(o[1], t);
  {
    const a = n.match(/^matrix\((.+)\)$/);
    return a ? kw(a[1], e) : 0;
  }
}, L6 = /* @__PURE__ */ new Set(["x", "y", "z"]), N6 = Wl.filter((e) => !L6.has(e));
function z6(e) {
  const t = [];
  return N6.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const Oi = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: _w(4, 13),
  y: _w(5, 14)
};
Oi.translateX = Oi.x;
Oi.translateY = Oi.y;
const j6 = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, a = getComputedStyle(o), { display: i } = a, s = {};
  i === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((u) => {
    s[u] = Oi[u](n, a);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = Oi[u](l, a);
  }), e;
}, V6 = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(lT);
  let a = [], i = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = r[l], d = fs(c);
    const f = t[l];
    let p;
    if (sd(f)) {
      const m = f.length, g = f[0] === null ? 1 : 0;
      c = f[g], d = fs(c);
      for (let y = g; y < m && f[y] !== null; y++)
        p ? Bg(fs(f[y]) === p) : p = fs(f[y]);
    } else
      p = fs(f);
    if (d !== p)
      if (Pw(d) && Pw(p)) {
        const m = u.get();
        typeof m == "string" && u.set(parseFloat(m)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === ie && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (i || (a = z6(e), i = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = j6(t, e, s);
    return a.length && a.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), bf && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function B6(e, t, r, n) {
  return F6(t) ? V6(e, t, r, n) : { target: t, transitionEnd: n };
}
const W6 = (e, t, r, n) => {
  const o = D6(e, t, n);
  return t = o.target, n = o.transitionEnd, B6(e, t, r, n);
}, Vv = { current: null }, uT = { current: !1 };
function U6() {
  if (uT.current = !0, !!bf)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Vv.current = e.matches;
      e.addListener(t), t();
    } else
      Vv.current = !1;
}
function H6(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const a = t[o], i = r[o];
    if (rr(a))
      e.addValue(o, a), dd(n) && n.add(o);
    else if (rr(i))
      e.addValue(o, $i(a, { owner: e })), dd(n) && n.remove(o);
    else if (i !== a)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(a);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, $i(s !== void 0 ? s : a, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const Tw = /* @__PURE__ */ new WeakMap(), cT = Object.keys(_l), G6 = cT.length, Ew = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], Y6 = Rg.length;
class q6 {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: a }, i = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => Ae.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = a;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = i, this.isControllingVariants = xf(r), this.isVariantNode = Yk(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && rr(f) && (f.set(s[d], !1), dd(u) && u.add(d));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, r) {
    return {};
  }
  mount(t) {
    this.current = t, Tw.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), uT.current || U6(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Vv.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Tw.delete(this.current), this.projection && this.projection.unmount(), Hn(this.notifyUpdate), Hn(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = ga.has(t), o = r.on("change", (i) => {
      this.latestValues[t] = i, this.props.onUpdate && Ae.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0);
    }), a = r.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), a();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...r }, n, o, a) {
    let i, s;
    for (let l = 0; l < G6; l++) {
      const u = cT[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = _l[u];
      f && (i = f), c(r) && (!this.features[u] && d && (this.features[u] = new d(this)), p && (s = p));
    }
    if (!this.projection && i) {
      this.projection = new i(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: p } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || d && Za(d),
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
        initialPromotionConfig: a,
        layoutScroll: f,
        layoutRoot: p
      });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const r = this.features[t];
      r.isMounted ? r.update() : (r.mount(), r.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : dt();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(t, r = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, r);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let n = 0; n < Ew.length; n++) {
      const o = Ew[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const a = t["on" + o];
      a && (this.propEventSubscriptions[o] = this.on(o, a));
    }
    this.prevMotionValues = H6(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
      const n = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (n.initial = this.props.initial), n;
    }
    const r = {};
    for (let n = 0; n < Y6; n++) {
      const o = Rg[n], a = this.props[o];
      (kl(a) || a === !1) && (r[o] = a);
    }
    return r;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(t), () => r.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, r) {
    r !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, r)), this.values.set(t, r), this.latestValues[t] = r.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let n = this.values.get(t);
    return n === void 0 && r !== void 0 && (n = $i(r, { owner: this }), this.addValue(t, n)), n;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t) {
    var r;
    return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var r;
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = Vg(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const a = this.getBaseTargetFromProps(this.props, t);
    return a !== void 0 && !rr(a) ? a : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Qg()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class dT extends q6 {
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t];
  }
  makeTargetAnimatableFromInstance({ transition: t, transitionEnd: r, ...n }, { transformValues: o }, a) {
    let i = pB(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), i && (i = o(i))), a) {
      dB(this, n, i);
      const s = W6(this, n, i, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function K6(e) {
  return window.getComputedStyle(e);
}
class X6 extends dT {
  readValueFromInstance(t, r) {
    if (ga.has(r)) {
      const n = Gg(r);
      return n && n.default || 0;
    } else {
      const n = K6(t), o = (Qk(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return Q_(t, r);
  }
  build(t, r, n, o) {
    Fg(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return jg(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    rr(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    n_(t, r, n, o);
  }
}
class Q6 extends dT {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (ga.has(r)) {
      const n = Gg(r);
      return n && n.default || 0;
    }
    return r = o_.has(r) ? r : Mg(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return dt();
  }
  scrapeMotionValuesFromProps(t, r) {
    return i_(t, r);
  }
  build(t, r, n, o) {
    Ng(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    a_(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = zg(t.tagName), super.mount(t);
  }
}
const Z6 = (e, t) => Ag(e) ? new Q6(t, { enableHardwareAcceleration: !1 }) : new X6(t, { enableHardwareAcceleration: !0 }), J6 = {
  layout: {
    ProjectionNode: sT,
    MeasureLayout: eT
  }
}, eW = {
  ...TB,
  ...Kj,
  ...M6,
  ...J6
}, kf = /* @__PURE__ */ oj((e, t) => Fj(e, t, eW, Z6));
function fT() {
  const e = w.useRef(!1);
  return Og(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function tW() {
  const e = fT(), [t, r] = w.useState(0), n = w.useCallback(() => {
    e.current && r(t + 1);
  }, [t]);
  return [w.useCallback(() => Ae.postRender(n), [n]), t];
}
class rW extends w.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current;
      n.height = r.offsetHeight || 0, n.width = r.offsetWidth || 0, n.top = r.offsetTop, n.left = r.offsetLeft;
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
function nW({ children: e, isPresent: t }) {
  const r = w.useId(), n = w.useRef(null), o = w.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return w.useInsertionEffect(() => {
    const { width: a, height: i, top: s, left: l } = o.current;
    if (t || !n.current || !a || !i)
      return;
    n.current.dataset.motionPopId = r;
    const u = document.createElement("style");
    return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${i}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(u);
    };
  }, [t]), w.createElement(rW, { isPresent: t, childRef: n, sizeRef: o }, w.cloneElement(e, { ref: n }));
}
const eh = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: a, mode: i }) => {
  const s = s_(oW), l = w.useId(), u = w.useMemo(
    () => ({
      id: l,
      initial: t,
      isPresent: r,
      custom: o,
      onExitComplete: (c) => {
        s.set(c, !0);
        for (const d of s.values())
          if (!d)
            return;
        n && n();
      },
      register: (c) => (s.set(c, !1), () => s.delete(c))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    a ? void 0 : [r]
  );
  return w.useMemo(() => {
    s.forEach((c, d) => s.set(d, !1));
  }, [r]), w.useEffect(() => {
    !r && !s.size && n && n();
  }, [r]), i === "popLayout" && (e = w.createElement(nW, { isPresent: r }, e)), w.createElement(yf.Provider, { value: u }, e);
};
function oW() {
  return /* @__PURE__ */ new Map();
}
function aW(e) {
  return w.useEffect(() => () => e(), []);
}
const Ho = (e) => e.key || "";
function iW(e, t) {
  e.forEach((r) => {
    const n = Ho(r);
    t.set(n, r);
  });
}
function sW(e) {
  const t = [];
  return w.Children.forEach(e, (r) => {
    w.isValidElement(r) && t.push(r);
  }), t;
}
const Zg = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: a = !0, mode: i = "sync" }) => {
  const s = w.useContext(Dg).forceRender || tW()[0], l = fT(), u = sW(e);
  let c = u;
  const d = w.useRef(/* @__PURE__ */ new Map()).current, f = w.useRef(c), p = w.useRef(/* @__PURE__ */ new Map()).current, m = w.useRef(!0);
  if (Og(() => {
    m.current = !1, iW(u, p), f.current = c;
  }), aW(() => {
    m.current = !0, p.clear(), d.clear();
  }), m.current)
    return w.createElement(w.Fragment, null, c.map((v) => w.createElement(eh, { key: Ho(v), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: a, mode: i }, v)));
  c = [...c];
  const g = f.current.map(Ho), y = u.map(Ho), h = g.length;
  for (let v = 0; v < h; v++) {
    const b = g[v];
    y.indexOf(b) === -1 && !d.has(b) && d.set(b, void 0);
  }
  return i === "wait" && d.size && (c = []), d.forEach((v, b) => {
    if (y.indexOf(b) !== -1)
      return;
    const x = p.get(b);
    if (!x)
      return;
    const k = g.indexOf(b);
    let P = v;
    if (!P) {
      const C = () => {
        d.delete(b);
        const _ = Array.from(p.keys()).filter(($) => !y.includes($));
        if (_.forEach(($) => p.delete($)), f.current = u.filter(($) => {
          const O = Ho($);
          return (
            // filter out the node exiting
            O === b || // filter out the leftover children
            _.includes(O)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          s(), n && n();
        }
      };
      P = w.createElement(eh, { key: Ho(x), isPresent: !1, onExitComplete: C, custom: t, presenceAffectsLayout: a, mode: i }, x), d.set(b, P);
    }
    c.splice(k, 0, P);
  }), c = c.map((v) => {
    const b = v.key;
    return d.has(b) ? v : w.createElement(eh, { key: Ho(v), isPresent: !0, presenceAffectsLayout: a, mode: i }, v);
  }), w.createElement(w.Fragment, null, d.size ? c : c.map((v) => w.cloneElement(v)));
};
var $w = {
  path: /* @__PURE__ */ I.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ I.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ I.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ I.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, Yl = Ze((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: a = !1,
    children: i,
    className: s,
    __css: l,
    ...u
  } = e, c = Be("chakra-icon", s), d = ma("Icon", e), f = {
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
    focusable: a,
    className: c,
    __css: f
  }, m = n ?? $w.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ I.jsx(Se.svg, { as: r, ...p, ...u });
  const g = i ?? $w.path;
  return /* @__PURE__ */ I.jsx(Se.svg, { verticalAlign: "middle", viewBox: m, ...p, ...u, children: g });
});
Yl.displayName = "Icon";
var lW = bk({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Jg = Ze((e, t) => {
  const r = ma("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: a = "0.45s",
    emptyColor: i = "transparent",
    className: s,
    ...l
  } = qn(e), u = Be("chakra-spinner", s), c = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: i,
    borderLeftColor: i,
    animation: `${lW} ${a} linear infinite`,
    ...r
  };
  return /* @__PURE__ */ I.jsx(
    Se.div,
    {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: n && /* @__PURE__ */ I.jsx(Se.span, { srOnly: !0, children: n })
    }
  );
});
Jg.displayName = "Spinner";
function uW(e) {
  return /* @__PURE__ */ I.jsx(Yl, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ I.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var e0 = Ze(
  function(t, r) {
    const n = ma("CloseButton", t), { children: o, isDisabled: a, __css: i, ...s } = qn(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ I.jsx(
      Se.button,
      {
        type: "button",
        "aria-label": "Close",
        ref: r,
        disabled: a,
        __css: {
          ...l,
          ...n,
          ...i
        },
        ...s,
        children: o || /* @__PURE__ */ I.jsx(uW, { width: "1em", height: "1em" })
      }
    );
  }
);
e0.displayName = "CloseButton";
var cW = Object.defineProperty, dW = (e, t, r) => t in e ? cW(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Je = (e, t, r) => (dW(e, typeof t != "symbol" ? t + "" : t, r), r);
function Ow(e) {
  return e.sort((t, r) => {
    const n = t.compareDocumentPosition(r);
    if (n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY)
      return -1;
    if (n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS)
      return 1;
    if (n & Node.DOCUMENT_POSITION_DISCONNECTED || n & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
      throw Error("Cannot sort the given nodes.");
    return 0;
  });
}
var fW = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function Mw(e, t, r) {
  let n = e + 1;
  return r && n >= t && (n = 0), n;
}
function Iw(e, t, r) {
  let n = e - 1;
  return r && n < 0 && (n = t), n;
}
var Bv = typeof window < "u" ? w.useLayoutEffect : w.useEffect, pd = (e) => e, pW = class {
  constructor() {
    Je(this, "descendants", /* @__PURE__ */ new Map()), Je(this, "register", (e) => {
      if (e != null)
        return fW(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), Je(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = Ow(Array.from(this.descendants.keys()));
      this.assignIndex(t);
    }), Je(this, "destroy", () => {
      this.descendants.clear();
    }), Je(this, "assignIndex", (e) => {
      this.descendants.forEach((t) => {
        const r = e.indexOf(t.node);
        t.index = r, t.node.dataset.index = t.index.toString();
      });
    }), Je(this, "count", () => this.descendants.size), Je(this, "enabledCount", () => this.enabledValues().length), Je(this, "values", () => Array.from(this.descendants.values()).sort((t, r) => t.index - r.index)), Je(this, "enabledValues", () => this.values().filter((e) => !e.disabled)), Je(this, "item", (e) => {
      if (this.count() !== 0)
        return this.values()[e];
    }), Je(this, "enabledItem", (e) => {
      if (this.enabledCount() !== 0)
        return this.enabledValues()[e];
    }), Je(this, "first", () => this.item(0)), Je(this, "firstEnabled", () => this.enabledItem(0)), Je(this, "last", () => this.item(this.descendants.size - 1)), Je(this, "lastEnabled", () => {
      const e = this.enabledValues().length - 1;
      return this.enabledItem(e);
    }), Je(this, "indexOf", (e) => {
      var t, r;
      return e && (r = (t = this.descendants.get(e)) == null ? void 0 : t.index) != null ? r : -1;
    }), Je(this, "enabledIndexOf", (e) => e == null ? -1 : this.enabledValues().findIndex((t) => t.node.isSameNode(e))), Je(this, "next", (e, t = !0) => {
      const r = Mw(e, this.count(), t);
      return this.item(r);
    }), Je(this, "nextEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = Mw(
        n,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), Je(this, "prev", (e, t = !0) => {
      const r = Iw(e, this.count() - 1, t);
      return this.item(r);
    }), Je(this, "prevEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = Iw(
        n,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), Je(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const r = Array.from(this.descendants.keys()).concat(e), n = Ow(r);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(n);
    });
  }
};
function hW(e, t) {
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
function ur(...e) {
  return (t) => {
    e.forEach((r) => {
      hW(r, t);
    });
  };
}
function vW(...e) {
  return w.useMemo(() => ur(...e), e);
}
function mW() {
  const e = w.useRef(new pW());
  return Bv(() => () => e.current.destroy()), e.current;
}
var [gW, pT] = xr({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function yW(e) {
  const t = pT(), [r, n] = w.useState(-1), o = w.useRef(null);
  Bv(() => () => {
    o.current && t.unregister(o.current);
  }, []), Bv(() => {
    if (!o.current)
      return;
    const i = Number(o.current.dataset.index);
    r != i && !Number.isNaN(i) && n(i);
  });
  const a = pd(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: r,
    enabledIndex: t.enabledIndexOf(o.current),
    register: ur(a, o)
  };
}
function bW() {
  return [
    pd(gW),
    () => pd(pT()),
    () => mW(),
    (o) => yW(o)
  ];
}
var Wv = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, hs = {
  scale: {
    enter: { scale: 1 },
    exit: { scale: 0.95 }
  },
  fade: {
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  },
  pushLeft: {
    enter: { x: "100%" },
    exit: { x: "-30%" }
  },
  pushRight: {
    enter: { x: "-100%" },
    exit: { x: "30%" }
  },
  pushUp: {
    enter: { y: "100%" },
    exit: { y: "-30%" }
  },
  pushDown: {
    enter: { y: "-100%" },
    exit: { y: "30%" }
  },
  slideLeft: {
    position: { left: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "-100%", y: 0 }
  },
  slideRight: {
    position: { right: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "100%", y: 0 }
  },
  slideUp: {
    position: { top: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "-100%" }
  },
  slideDown: {
    position: { bottom: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "100%" }
  }
};
function Uv(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return hs.slideRight;
    case "left":
      return hs.slideLeft;
    case "bottom":
      return hs.slideDown;
    case "top":
      return hs.slideUp;
    default:
      return hs.slideRight;
  }
}
var Rw = {
  enter: {
    duration: 0.2,
    ease: Wv.easeOut
  },
  exit: {
    duration: 0.1,
    ease: Wv.easeIn
  }
}, hd = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, wW = {
  enter: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 1,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : hd.enter(Rw.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 0,
      transition: (n = e == null ? void 0 : e.exit) != null ? n : hd.exit(Rw.exit, r),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, hT = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: wW
}, xW = w.forwardRef(function(t, r) {
  const {
    unmountOnExit: n,
    in: o,
    className: a,
    transition: i,
    transitionEnd: s,
    delay: l,
    ...u
  } = t, c = o || n ? "enter" : "exit", d = n ? o && n : !0, f = { transition: i, transitionEnd: s, delay: l };
  return /* @__PURE__ */ I.jsx(Zg, { custom: f, children: d && /* @__PURE__ */ I.jsx(
    kf.div,
    {
      ref: r,
      className: Be("chakra-fade", a),
      custom: f,
      ...hT,
      animate: c,
      ...u
    }
  ) });
});
xW.displayName = "Fade";
var Dw = {
  exit: {
    duration: 0.15,
    ease: Wv.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, SW = {
  exit: ({ direction: e, transition: t, transitionEnd: r, delay: n }) => {
    var o;
    const { exit: a } = Uv({ direction: e });
    return {
      ...a,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : hd.exit(Dw.exit, n),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: r, delay: n }) => {
    var o;
    const { enter: a } = Uv({ direction: e });
    return {
      ...a,
      transition: (o = r == null ? void 0 : r.enter) != null ? o : hd.enter(Dw.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, vT = w.forwardRef(function(t, r) {
  const {
    direction: n = "right",
    style: o,
    unmountOnExit: a,
    in: i,
    className: s,
    transition: l,
    transitionEnd: u,
    delay: c,
    motionProps: d,
    ...f
  } = t, p = Uv({ direction: n }), m = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), g = a ? i && a : !0, y = i || a ? "enter" : "exit", h = { transitionEnd: u, transition: l, direction: n, delay: c };
  return /* @__PURE__ */ I.jsx(Zg, { custom: h, children: g && /* @__PURE__ */ I.jsx(
    kf.div,
    {
      ...f,
      ref: r,
      initial: "exit",
      className: Be("chakra-slide", s),
      animate: y,
      exit: "exit",
      custom: h,
      variants: SW,
      style: m,
      ...d
    }
  ) });
});
vT.displayName = "Slide";
function CW(e) {
  return w.Children.toArray(e).filter(
    (t) => w.isValidElement(t)
  );
}
var [Ede, PW] = xr({
  strict: !1,
  name: "ButtonGroupContext"
});
function kW(e) {
  const [t, r] = w.useState(!e);
  return { ref: w.useCallback((a) => {
    a && r(a.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function Hv(e) {
  const { children: t, className: r, ...n } = e, o = w.isValidElement(t) ? w.cloneElement(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, a = Be("chakra-button__icon", r);
  return /* @__PURE__ */ I.jsx(
    Se.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...n,
      className: a,
      children: o
    }
  );
}
Hv.displayName = "ButtonIcon";
function Gv(e) {
  const {
    label: t,
    placement: r,
    spacing: n = "0.5rem",
    children: o = /* @__PURE__ */ I.jsx(Jg, { color: "currentColor", width: "1em", height: "1em" }),
    className: a,
    __css: i,
    ...s
  } = e, l = Be("chakra-button__spinner", a), u = r === "start" ? "marginEnd" : "marginStart", c = w.useMemo(
    () => ({
      display: "flex",
      alignItems: "center",
      position: t ? "relative" : "absolute",
      [u]: t ? n : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...i
    }),
    [i, t, u, n]
  );
  return /* @__PURE__ */ I.jsx(Se.div, { className: l, ...s, __css: c, children: o });
}
Gv.displayName = "ButtonSpinner";
var El = Ze((e, t) => {
  const r = PW(), n = ma("Button", { ...r, ...e }), {
    isDisabled: o = r == null ? void 0 : r.isDisabled,
    isLoading: a,
    isActive: i,
    children: s,
    leftIcon: l,
    rightIcon: u,
    loadingText: c,
    iconSpacing: d = "0.5rem",
    type: f,
    spinner: p,
    spinnerPlacement: m = "start",
    className: g,
    as: y,
    ...h
  } = qn(e), v = w.useMemo(() => {
    const P = { ...n == null ? void 0 : n._focus, zIndex: 1 };
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
      ...n,
      ...!!r && { _focus: P }
    };
  }, [n, r]), { ref: b, type: x } = kW(y), k = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ I.jsxs(
    Se.button,
    {
      ref: vW(t, b),
      as: y,
      type: f ?? x,
      "data-active": on(i),
      "data-loading": on(a),
      __css: v,
      className: Be("chakra-button", g),
      ...h,
      disabled: o || a,
      children: [
        a && m === "start" && /* @__PURE__ */ I.jsx(
          Gv,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        a ? c || /* @__PURE__ */ I.jsx(Se.span, { opacity: 0, children: /* @__PURE__ */ I.jsx(Aw, { ...k }) }) : /* @__PURE__ */ I.jsx(Aw, { ...k }),
        a && m === "end" && /* @__PURE__ */ I.jsx(
          Gv,
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
El.displayName = "Button";
function Aw(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e;
  return /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
    t && /* @__PURE__ */ I.jsx(Hv, { marginEnd: o, children: t }),
    n,
    r && /* @__PURE__ */ I.jsx(Hv, { marginStart: o, children: r })
  ] });
}
var [_W, TW] = xr({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [EW, mT] = xr({
  strict: !1,
  name: "FormControlContext"
});
function $W(e) {
  const {
    id: t,
    isRequired: r,
    isInvalid: n,
    isDisabled: o,
    isReadOnly: a,
    ...i
  } = e, s = w.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, p] = w.useState(!1), [m, g] = w.useState(!1), [y, h] = w.useState(!1), v = w.useCallback(
    (C = {}, _ = null) => ({
      id: d,
      ...C,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: ur(_, ($) => {
        $ && g(!0);
      })
    }),
    [d]
  ), b = w.useCallback(
    (C = {}, _ = null) => ({
      ...C,
      ref: _,
      "data-focus": on(y),
      "data-disabled": on(o),
      "data-invalid": on(n),
      "data-readonly": on(a),
      id: C.id !== void 0 ? C.id : u,
      htmlFor: C.htmlFor !== void 0 ? C.htmlFor : l
    }),
    [l, o, y, n, a, u]
  ), x = w.useCallback(
    (C = {}, _ = null) => ({
      id: c,
      ...C,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: ur(_, ($) => {
        $ && p(!0);
      }),
      "aria-live": "polite"
    }),
    [c]
  ), k = w.useCallback(
    (C = {}, _ = null) => ({
      ...C,
      ...i,
      ref: _,
      role: "group",
      "data-focus": on(y),
      "data-disabled": on(o),
      "data-invalid": on(n),
      "data-readonly": on(a)
    }),
    [i, o, y, n, a]
  ), P = w.useCallback(
    (C = {}, _ = null) => ({
      ...C,
      ref: _,
      role: "presentation",
      "aria-hidden": !0,
      children: C.children || "*"
    }),
    []
  );
  return {
    isRequired: !!r,
    isInvalid: !!n,
    isReadOnly: !!a,
    isDisabled: !!o,
    isFocused: !!y,
    onFocus: () => h(!0),
    onBlur: () => h(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: m,
    setHasHelpText: g,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: i,
    getHelpTextProps: v,
    getErrorMessageProps: x,
    getRootProps: k,
    getLabelProps: b,
    getRequiredIndicatorProps: P
  };
}
var OW = Ze(
  function(t, r) {
    const n = vr("Form", t), o = qn(t), {
      getRootProps: a,
      htmlProps: i,
      ...s
    } = $W(o), l = Be("chakra-form-control", t.className);
    return /* @__PURE__ */ I.jsx(EW, { value: s, children: /* @__PURE__ */ I.jsx(_W, { value: n, children: /* @__PURE__ */ I.jsx(
      Se.div,
      {
        ...a({}, r),
        className: l,
        __css: n.container
      }
    ) }) });
  }
);
OW.displayName = "FormControl";
var MW = Ze(
  function(t, r) {
    const n = mT(), o = TW(), a = Be("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ I.jsx(
      Se.div,
      {
        ...n == null ? void 0 : n.getHelpTextProps(t, r),
        __css: o.helperText,
        className: a
      }
    );
  }
);
MW.displayName = "FormHelperText";
function gT(e) {
  const { isDisabled: t, isInvalid: r, isReadOnly: n, isRequired: o, ...a } = IW(e);
  return {
    ...a,
    disabled: t,
    readOnly: n,
    required: o,
    "aria-invalid": Cp(r),
    "aria-required": Cp(o),
    "aria-readonly": Cp(n)
  };
}
function IW(e) {
  var t, r, n;
  const o = mT(), {
    id: a,
    disabled: i,
    readOnly: s,
    required: l,
    isRequired: u,
    isInvalid: c,
    isReadOnly: d,
    isDisabled: f,
    onFocus: p,
    onBlur: m,
    ...g
  } = e, y = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && y.push(o.feedbackId), o != null && o.hasHelpText && y.push(o.helpTextId), {
    ...g,
    "aria-describedby": y.join(" ") || void 0,
    id: a ?? (o == null ? void 0 : o.id),
    isDisabled: (t = i ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
    isReadOnly: (r = s ?? d) != null ? r : o == null ? void 0 : o.isReadOnly,
    isRequired: (n = l ?? u) != null ? n : o == null ? void 0 : o.isRequired,
    isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
    onFocus: kt(o == null ? void 0 : o.onFocus, p),
    onBlur: kt(o == null ? void 0 : o.onBlur, m)
  };
}
function t0(e, t, r, n) {
  const o = od(r);
  return w.useEffect(() => {
    const a = typeof e == "function" ? e() : e ?? document;
    if (!(!r || !a))
      return a.addEventListener(t, o, n), () => {
        a.removeEventListener(t, o, n);
      };
  }, [t, e, n, o, r]), () => {
    const a = typeof e == "function" ? e() : e ?? document;
    a == null || a.removeEventListener(t, o, n);
  };
}
function RW(e) {
  return "current" in e;
}
var yT = () => typeof window < "u";
function DW() {
  var e;
  const t = navigator.userAgentData;
  return (e = t == null ? void 0 : t.platform) != null ? e : navigator.platform;
}
var AW = (e) => yT() && e.test(navigator.vendor), FW = (e) => yT() && e.test(DW()), LW = () => FW(/mac|iphone|ipad|ipod/i), NW = () => LW() && AW(/apple/i);
function zW(e) {
  const { ref: t, elements: r, enabled: n } = e, o = () => {
    var a, i;
    return (i = (a = t.current) == null ? void 0 : a.ownerDocument) != null ? i : document;
  };
  t0(o, "pointerdown", (a) => {
    if (!NW() || !n)
      return;
    const i = a.target, l = (r ?? [t]).some((u) => {
      const c = RW(u) ? u.current : u;
      return (c == null ? void 0 : c.contains(i)) || c === i;
    });
    o().activeElement !== i && l && (a.preventDefault(), i.focus());
  });
}
function da(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var bT = { exports: {} }, jW = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", VW = jW, BW = VW;
function wT() {
}
function xT() {
}
xT.resetWarningCache = wT;
var WW = function() {
  function e(n, o, a, i, s, l) {
    if (l !== BW) {
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
  var r = {
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
    checkPropTypes: xT,
    resetWarningCache: wT
  };
  return r.PropTypes = r, r;
};
bT.exports = WW();
var UW = bT.exports;
const le = /* @__PURE__ */ Sn(UW);
var Yv = "data-focus-lock", ST = "data-focus-lock-disabled", HW = "data-no-focus-lock", GW = "data-autofocus-inside", YW = "data-no-autofocus";
function qW(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function KW(e, t) {
  var r = w.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
function CT(e, t) {
  return KW(t || null, function(r) {
    return e.forEach(function(n) {
      return qW(n, r);
    });
  });
}
var th = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, dn = function() {
  return dn = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, dn.apply(this, arguments);
};
function PT(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function XW(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, a; n < o; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function kT(e) {
  return e;
}
function _T(e, t) {
  t === void 0 && (t = kT);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, n);
      return r.push(i), function() {
        r = r.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (n = !0; r.length; ) {
        var i = r;
        r = [], i.forEach(a);
      }
      r = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(a) {
      n = !0;
      var i = [];
      if (r.length) {
        var s = r;
        r = [], s.forEach(a), i = r;
      }
      var l = function() {
        var c = i;
        i = [], c.forEach(a);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), r = {
        push: function(c) {
          i.push(c), u();
        },
        filter: function(c) {
          return i = i.filter(c), r;
        }
      };
    }
  };
  return o;
}
function r0(e, t) {
  return t === void 0 && (t = kT), _T(e, t);
}
function TT(e) {
  e === void 0 && (e = {});
  var t = _T(null);
  return t.options = dn({ async: !0, ssr: !1 }, e), t;
}
var ET = function(e) {
  var t = e.sideCar, r = PT(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return w.createElement(n, dn({}, r));
};
ET.isSideCarExport = !0;
function QW(e, t) {
  return e.useMedium(t), ET;
}
var $T = r0({}, function(e) {
  var t = e.target, r = e.currentTarget;
  return {
    target: t,
    currentTarget: r
  };
}), OT = r0(), ZW = r0(), JW = TT({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), e8 = [], n0 = /* @__PURE__ */ w.forwardRef(function(t, r) {
  var n, o = w.useState(), a = o[0], i = o[1], s = w.useRef(), l = w.useRef(!1), u = w.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, m = t.crossFrame, g = t.autoFocus;
  t.allowTextSelection;
  var y = t.group, h = t.className, v = t.whiteList, b = t.hasPositiveIndices, x = t.shards, k = x === void 0 ? e8 : x, P = t.as, C = P === void 0 ? "div" : P, _ = t.lockProps, $ = _ === void 0 ? {} : _, O = t.sideCar, D = t.returnFocus, H = t.focusOptions, V = t.onActivation, L = t.onDeactivation, F = w.useState({}), B = F[0], Z = w.useCallback(function() {
    u.current = u.current || document && document.activeElement, s.current && V && V(s.current), l.current = !0;
  }, [V]), R = w.useCallback(function() {
    l.current = !1, L && L(s.current);
  }, [L]);
  w.useEffect(function() {
    d || (u.current = null);
  }, []);
  var N = w.useCallback(function(ue) {
    var ne = u.current;
    if (ne && ne.focus) {
      var ee = typeof D == "function" ? D(ne) : D;
      if (ee) {
        var xe = typeof ee == "object" ? ee : void 0;
        u.current = null, ue ? Promise.resolve().then(function() {
          return ne.focus(xe);
        }) : ne.focus(xe);
      }
    }
  }, [D]), K = w.useCallback(function(ue) {
    l.current && $T.useMedium(ue);
  }, []), W = OT.useMedium, Q = w.useCallback(function(ue) {
    s.current !== ue && (s.current = ue, i(ue));
  }, []), j = X((n = {}, n[ST] = d && "disabled", n[Yv] = y, n), $), J = f !== !0, ce = J && f !== "tail", se = CT([r, Q]);
  return /* @__PURE__ */ w.createElement(w.Fragment, null, J && [
    // nearest focus guard
    /* @__PURE__ */ w.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: th
    }),
    // first tabbed element guard
    b ? /* @__PURE__ */ w.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: th
    }) : null
  ], !d && /* @__PURE__ */ w.createElement(O, {
    id: B,
    sideCar: JW,
    observed: a,
    disabled: d,
    persistentFocus: p,
    crossFrame: m,
    autoFocus: g,
    whiteList: v,
    shards: k,
    onActivation: Z,
    onDeactivation: R,
    returnFocus: N,
    focusOptions: H
  }), /* @__PURE__ */ w.createElement(C, X({
    ref: se
  }, j, {
    className: h,
    onBlur: W,
    onFocus: K
  }), c), ce && /* @__PURE__ */ w.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: th
  }));
});
n0.propTypes = {};
n0.defaultProps = {
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
const MT = n0;
function vd(e, t) {
  return vd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, vd(e, t);
}
function IT(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, vd(e, t);
}
function wn(e) {
  "@babel/helpers - typeof";
  return wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wn(e);
}
function t8(e, t) {
  if (wn(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (wn(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function RT(e) {
  var t = t8(e, "string");
  return wn(t) === "symbol" ? t : String(t);
}
function z(e, t, r) {
  return t = RT(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function r8(e, t) {
  function r(n) {
    return n.displayName || n.name || "Component";
  }
  return function(o) {
    var a = [], i;
    function s() {
      i = e(a.map(function(u) {
        return u.props;
      })), t(i);
    }
    var l = /* @__PURE__ */ function(u) {
      IT(c, u);
      function c() {
        return u.apply(this, arguments) || this;
      }
      c.peek = function() {
        return i;
      };
      var d = c.prototype;
      return d.componentDidMount = function() {
        a.push(this), s();
      }, d.componentDidUpdate = function() {
        s();
      }, d.componentWillUnmount = function() {
        var p = a.indexOf(this);
        a.splice(p, 1), s();
      }, d.render = function() {
        return /* @__PURE__ */ U.createElement(o, this.props);
      }, c;
    }(w.PureComponent);
    return z(l, "displayName", "SideEffect(" + r(o) + ")"), l;
  };
}
var Cn = function(e) {
  for (var t = Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}, md = function(e) {
  return Array.isArray(e) ? e : [e];
}, DT = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, n8 = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, AT = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, FT = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, o8 = function(e, t) {
  return !e || FT(e) || !n8(e) && t(AT(e));
}, LT = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = o8(t, LT.bind(void 0, e));
  return e.set(t, n), n;
}, a8 = function(e, t) {
  return e && !FT(e) ? l8(e) ? t(AT(e)) : !1 : !0;
}, NT = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = a8(t, NT.bind(void 0, e));
  return e.set(t, n), n;
}, zT = function(e) {
  return e.dataset;
}, i8 = function(e) {
  return e.tagName === "BUTTON";
}, jT = function(e) {
  return e.tagName === "INPUT";
}, VT = function(e) {
  return jT(e) && e.type === "radio";
}, s8 = function(e) {
  return !((jT(e) || i8(e)) && (e.type === "hidden" || e.disabled));
}, l8 = function(e) {
  var t = e.getAttribute(YW);
  return ![!0, "true", ""].includes(t);
}, o0 = function(e) {
  var t;
  return !!(e && (!((t = zT(e)) === null || t === void 0) && t.focusGuard));
}, gd = function(e) {
  return !o0(e);
}, u8 = function(e) {
  return !!e;
}, c8 = function(e, t) {
  var r = e.tabIndex - t.tabIndex, n = e.index - t.index;
  if (r) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return r || n;
}, BT = function(e, t, r) {
  return Cn(e).map(function(n, o) {
    return {
      node: n,
      index: o,
      tabIndex: r && n.tabIndex === -1 ? (n.dataset || {}).focusGuard ? 0 : -1 : n.tabIndex
    };
  }).filter(function(n) {
    return !t || n.tabIndex >= 0;
  }).sort(c8);
}, d8 = [
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
], a0 = d8.join(","), f8 = "".concat(a0, ", [data-focus-guard]"), WT = function(e, t) {
  return Cn((e.shadowRoot || e).children).reduce(function(r, n) {
    return r.concat(n.matches(t ? f8 : a0) ? [n] : [], WT(n));
  }, []);
}, p8 = function(e, t) {
  var r;
  return e instanceof HTMLIFrameElement && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? _f([e.contentDocument.body], t) : [e];
}, _f = function(e, t) {
  return e.reduce(function(r, n) {
    var o, a = WT(n, t), i = (o = []).concat.apply(o, a.map(function(s) {
      return p8(s, t);
    }));
    return r.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      i,
      // add if node is tabbable itself
      n.parentNode ? Cn(n.parentNode.querySelectorAll(a0)).filter(function(s) {
        return s === n;
      }) : []
    );
  }, []);
}, h8 = function(e) {
  var t = e.querySelectorAll("[".concat(GW, "]"));
  return Cn(t).map(function(r) {
    return _f([r]);
  }).reduce(function(r, n) {
    return r.concat(n);
  }, []);
}, i0 = function(e, t) {
  return Cn(e).filter(function(r) {
    return LT(t, r);
  }).filter(function(r) {
    return s8(r);
  });
}, Fw = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), Cn(e).filter(function(r) {
    return NT(t, r);
  });
}, qv = function(e, t, r) {
  return BT(i0(_f(e, r), t), !0, r);
}, Lw = function(e, t) {
  return BT(i0(_f(e), t), !1);
}, v8 = function(e, t) {
  return i0(h8(e), t);
}, hi = function(e, t) {
  return e.shadowRoot ? hi(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Cn(e.children).some(function(r) {
    var n;
    if (r instanceof HTMLIFrameElement) {
      var o = (n = r.contentDocument) === null || n === void 0 ? void 0 : n.body;
      return o ? hi(o, t) : !1;
    }
    return hi(r, t);
  });
}, m8 = function(e) {
  for (var t = /* @__PURE__ */ new Set(), r = e.length, n = 0; n < r; n += 1)
    for (var o = n + 1; o < r; o += 1) {
      var a = e[n].compareDocumentPosition(e[o]);
      (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n);
    }
  return e.filter(function(i, s) {
    return !t.has(s);
  });
}, UT = function(e) {
  return e.parentNode ? UT(e.parentNode) : e;
}, s0 = function(e) {
  var t = md(e);
  return t.filter(Boolean).reduce(function(r, n) {
    var o = n.getAttribute(Yv);
    return r.push.apply(r, o ? m8(Cn(UT(n).querySelectorAll("[".concat(Yv, '="').concat(o, '"]:not([').concat(ST, '="disabled"])')))) : [n]), r;
  }, []);
}, g8 = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, $l = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? $l(t.shadowRoot) : t instanceof HTMLIFrameElement && g8(function() {
      return t.contentWindow.document;
    }) ? $l(t.contentWindow.document) : t;
  }
}, y8 = function(e, t) {
  return e === t;
}, b8 = function(e, t) {
  return !!Cn(e.querySelectorAll("iframe")).some(function(r) {
    return y8(r, t);
  });
}, HT = function(e, t) {
  return t === void 0 && (t = $l(DT(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : s0(e).some(function(r) {
    return hi(r, t) || b8(r, t);
  });
}, w8 = function(e) {
  e === void 0 && (e = document);
  var t = $l(e);
  return t ? Cn(e.querySelectorAll("[".concat(HW, "]"))).some(function(r) {
    return hi(r, t);
  }) : !1;
}, x8 = function(e, t) {
  return t.filter(VT).filter(function(r) {
    return r.name === e.name;
  }).filter(function(r) {
    return r.checked;
  })[0] || e;
}, l0 = function(e, t) {
  return VT(e) && e.name ? x8(e, t) : e;
}, S8 = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(r) {
    return t.add(l0(r, e));
  }), e.filter(function(r) {
    return t.has(r);
  });
}, Nw = function(e) {
  return e[0] && e.length > 1 ? l0(e[0], e) : e[0];
}, zw = function(e, t) {
  return e.length > 1 ? e.indexOf(l0(e[t], e)) : t;
}, GT = "NEW_FOCUS", C8 = function(e, t, r, n) {
  var o = e.length, a = e[0], i = e[o - 1], s = o0(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var l = r !== void 0 ? t.indexOf(r) : -1, u = n ? t.indexOf(n) : l, c = n ? e.indexOf(n) : -1, d = l - u, f = t.indexOf(a), p = t.indexOf(i), m = S8(t), g = r !== void 0 ? m.indexOf(r) : -1, y = g - (n ? m.indexOf(n) : l), h = zw(e, 0), v = zw(e, o - 1);
    if (l === -1 || c === -1)
      return GT;
    if (!d && c >= 0)
      return c;
    if (l <= f && s && Math.abs(d) > 1)
      return v;
    if (l >= p && s && Math.abs(d) > 1)
      return h;
    if (d && Math.abs(y) > 1)
      return c;
    if (l <= f)
      return v;
    if (l > p)
      return h;
    if (d)
      return Math.abs(d) > 1 ? c : (o + c + d) % o;
  }
}, P8 = function(e) {
  return function(t) {
    var r, n = (r = zT(t)) === null || r === void 0 ? void 0 : r.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      n !== void 0 && n !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, k8 = function(e, t, r) {
  var n = e.map(function(a) {
    var i = a.node;
    return i;
  }), o = Fw(n.filter(P8(r)));
  return o && o.length ? Nw(o) : Nw(Fw(t));
}, Kv = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && Kv(e.parentNode.host || e.parentNode, t), t;
}, rh = function(e, t) {
  for (var r = Kv(e), n = Kv(t), o = 0; o < r.length; o += 1) {
    var a = r[o];
    if (n.indexOf(a) >= 0)
      return a;
  }
  return !1;
}, YT = function(e, t, r) {
  var n = md(e), o = md(t), a = n[0], i = !1;
  return o.filter(Boolean).forEach(function(s) {
    i = rh(i || s, s) || i, r.filter(Boolean).forEach(function(l) {
      var u = rh(a, l);
      u && (!i || hi(u, i) ? i = u : i = rh(u, i));
    });
  }), i;
}, _8 = function(e, t) {
  return e.reduce(function(r, n) {
    return r.concat(v8(n, t));
  }, []);
}, T8 = function(e, t) {
  var r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    return r.set(n.node, n);
  }), e.map(function(n) {
    return r.get(n);
  }).filter(u8);
}, E8 = function(e, t) {
  var r = $l(md(e).length > 0 ? document : DT(e).ownerDocument), n = s0(e).filter(gd), o = YT(r || e, e, n), a = /* @__PURE__ */ new Map(), i = Lw(n, a), s = qv(n, a).filter(function(p) {
    var m = p.node;
    return gd(m);
  });
  if (!(!s[0] && (s = i, !s[0]))) {
    var l = Lw([o], a).map(function(p) {
      var m = p.node;
      return m;
    }), u = T8(l, s), c = u.map(function(p) {
      var m = p.node;
      return m;
    }), d = C8(c, l, r, t);
    if (d === GT) {
      var f = k8(i, c, _8(n, a));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, $8 = function(e) {
  var t = s0(e).filter(gd), r = YT(e, e, t), n = /* @__PURE__ */ new Map(), o = qv([r], n, !0), a = qv(t, n).filter(function(i) {
    var s = i.node;
    return gd(s);
  }).map(function(i) {
    var s = i.node;
    return s;
  });
  return o.map(function(i) {
    var s = i.node, l = i.index;
    return {
      node: s,
      index: l,
      lockItem: a.indexOf(s) >= 0,
      guard: o0(s)
    };
  });
}, O8 = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, nh = 0, oh = !1, qT = function(e, t, r) {
  r === void 0 && (r = {});
  var n = E8(e, t);
  if (!oh && n) {
    if (nh > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), oh = !0, setTimeout(function() {
        oh = !1;
      }, 1);
      return;
    }
    nh++, O8(n.node, r.focusOptions), nh--;
  }
};
function u0(e) {
  setTimeout(e, 1);
}
var M8 = function() {
  return document && document.activeElement === document.body;
}, I8 = function() {
  return M8() || w8();
}, vi = null, ri = null, mi = null, Ol = !1, R8 = function() {
  return !0;
}, D8 = function(t) {
  return (vi.whiteList || R8)(t);
}, A8 = function(t, r) {
  mi = {
    observerNode: t,
    portaledElement: r
  };
}, F8 = function(t) {
  return mi && mi.portaledElement === t;
};
function jw(e, t, r, n) {
  var o = null, a = e;
  do {
    var i = n[a];
    if (i.guard)
      i.node.dataset.focusAutoGuard && (o = i);
    else if (i.lockItem) {
      if (a !== e)
        return;
      o = null;
    } else
      break;
  } while ((a += r) !== t);
  o && (o.node.tabIndex = 0);
}
var L8 = function(t) {
  return t && "current" in t ? t.current : t;
}, N8 = function(t) {
  return t ? !!Ol : Ol === "meanwhile";
}, z8 = function e(t, r, n) {
  return r && // find host equal to active element and check nested active element
  (r.host === t && (!r.activeElement || n.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, n));
}, j8 = function(t, r) {
  return r.some(function(n) {
    return z8(t, n, n);
  });
}, yd = function() {
  var t = !1;
  if (vi) {
    var r = vi, n = r.observed, o = r.persistentFocus, a = r.autoFocus, i = r.shards, s = r.crossFrame, l = r.focusOptions, u = n || mi && mi.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(i.map(L8).filter(Boolean));
      if ((!c || D8(c)) && (o || N8(s) || !I8() || !ri && a) && (u && !// active element is "inside" working area
      (HT(d) || // check for shadow-dom contained elements
      c && j8(c, d) || F8(c)) && (document && !ri && c && !a ? (c.blur && c.blur(), document.body.focus()) : (t = qT(d, ri, {
        focusOptions: l
      }), mi = {})), Ol = !1, ri = document && document.activeElement), document) {
        var f = document && document.activeElement, p = $8(d), m = p.map(function(g) {
          var y = g.node;
          return y;
        }).indexOf(f);
        m > -1 && (p.filter(function(g) {
          var y = g.guard, h = g.node;
          return y && h.dataset.focusAutoGuard;
        }).forEach(function(g) {
          var y = g.node;
          return y.removeAttribute("tabIndex");
        }), jw(m, p.length, 1, p), jw(m, -1, -1, p));
      }
    }
  }
  return t;
}, KT = function(t) {
  yd() && t && (t.stopPropagation(), t.preventDefault());
}, c0 = function() {
  return u0(yd);
}, V8 = function(t) {
  var r = t.target, n = t.currentTarget;
  n.contains(r) || A8(n, r);
}, B8 = function() {
  return null;
}, XT = function() {
  Ol = "just", u0(function() {
    Ol = "meanwhile";
  });
}, W8 = function() {
  document.addEventListener("focusin", KT), document.addEventListener("focusout", c0), window.addEventListener("blur", XT);
}, U8 = function() {
  document.removeEventListener("focusin", KT), document.removeEventListener("focusout", c0), window.removeEventListener("blur", XT);
};
function H8(e) {
  return e.filter(function(t) {
    var r = t.disabled;
    return !r;
  });
}
function G8(e) {
  var t = e.slice(-1)[0];
  t && !vi && W8();
  var r = vi, n = r && t && t.id === r.id;
  vi = t, r && !n && (r.onDeactivation(), e.filter(function(o) {
    var a = o.id;
    return a === r.id;
  }).length || r.returnFocus(!t)), t ? (ri = null, (!n || r.observed !== t.observed) && t.onActivation(), yd(), u0(yd)) : (U8(), ri = null);
}
$T.assignSyncMedium(V8);
OT.assignMedium(c0);
ZW.assignMedium(function(e) {
  return e({
    moveFocusInside: qT,
    focusInside: HT
  });
});
const Y8 = r8(H8, G8)(B8);
var QT = /* @__PURE__ */ w.forwardRef(function(t, r) {
  return /* @__PURE__ */ w.createElement(MT, X({
    sideCar: Y8,
    ref: r
  }, t));
}), ZT = MT.propTypes || {};
ZT.sideCar;
da(ZT, ["sideCar"]);
QT.propTypes = {};
const Vw = QT;
function JT(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function e2(e) {
  var t;
  if (!JT(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function q8(e) {
  var t, r;
  return (r = (t = t2(e)) == null ? void 0 : t.defaultView) != null ? r : window;
}
function t2(e) {
  return JT(e) ? e.ownerDocument : document;
}
function K8(e) {
  return t2(e).activeElement;
}
var r2 = (e) => e.hasAttribute("tabindex"), X8 = (e) => r2(e) && e.tabIndex === -1;
function Q8(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function n2(e) {
  return e.parentElement && n2(e.parentElement) ? !0 : e.hidden;
}
function Z8(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function o2(e) {
  if (!e2(e) || n2(e) || Q8(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : Z8(e) ? !0 : r2(e);
}
function J8(e) {
  return e ? e2(e) && o2(e) && !X8(e) : !1;
}
var e9 = [
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
], t9 = e9.join(), r9 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function a2(e) {
  const t = Array.from(
    e.querySelectorAll(t9)
  );
  return t.unshift(e), t.filter((r) => o2(r) && r9(r));
}
var Bw, n9 = (Bw = Vw.default) != null ? Bw : Vw, i2 = (e) => {
  const {
    initialFocusRef: t,
    finalFocusRef: r,
    contentRef: n,
    restoreFocus: o,
    children: a,
    isDisabled: i,
    autoFocus: s,
    persistentFocus: l,
    lockFocusAcrossFrames: u
  } = e, c = w.useCallback(() => {
    t != null && t.current ? t.current.focus() : n != null && n.current && a2(n.current).length === 0 && requestAnimationFrame(() => {
      var m;
      (m = n.current) == null || m.focus();
    });
  }, [t, n]), d = w.useCallback(() => {
    var p;
    (p = r == null ? void 0 : r.current) == null || p.focus();
  }, [r]), f = o && !r;
  return /* @__PURE__ */ I.jsx(
    n9,
    {
      crossFrame: u,
      persistentFocus: l,
      autoFocus: s,
      disabled: i,
      onActivation: c,
      onDeactivation: d,
      returnFocus: f,
      children: a
    }
  );
};
i2.displayName = "FocusLock";
var Tf = Ze(function(t, r) {
  const { htmlSize: n, ...o } = t, a = vr("Input", o), i = qn(o), s = gT(i), l = Be("chakra-input", t.className);
  return /* @__PURE__ */ I.jsx(
    Se.input,
    {
      size: n,
      ...s,
      __css: a.field,
      ref: r,
      className: l
    }
  );
});
Tf.displayName = "Input";
Tf.id = "Input";
var s2 = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function o9(e, t) {
  return Array.isArray(e) ? e.map((r) => r === null ? null : t(r)) : Rr(e) ? Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {}) : e != null ? t(e) : null;
}
function a9(e, t = s2) {
  const r = {};
  return e.forEach((n, o) => {
    const a = t[o];
    n != null && (r[a] = n);
  }), r;
}
var Ms = Ze(function(t, r) {
  const n = ma("Text", t), { className: o, align: a, decoration: i, casing: s, ...l } = qn(t), u = Lz({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ I.jsx(
    Se.p,
    {
      ref: r,
      className: Be("chakra-text", t.className),
      ...u,
      ...l,
      __css: n
    }
  );
});
Ms.displayName = "Text";
var l2 = (e) => /* @__PURE__ */ I.jsx(
  Se.div,
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
l2.displayName = "StackItem";
function i9(e) {
  const { spacing: t, direction: r } = e, n = {
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
    "&": o9(
      r,
      (o) => n[o]
    )
  };
}
var u2 = Ze((e, t) => {
  const {
    isInline: r,
    direction: n,
    align: o,
    justify: a,
    spacing: i = "0.5rem",
    wrap: s,
    children: l,
    divider: u,
    className: c,
    shouldWrapChildren: d,
    ...f
  } = e, p = r ? "row" : n ?? "column", m = w.useMemo(
    () => i9({ spacing: i, direction: p }),
    [i, p]
  ), g = !!u, y = !d && !g, h = w.useMemo(() => {
    const b = CW(l);
    return y ? b : b.map((x, k) => {
      const P = typeof x.key < "u" ? x.key : k, C = k + 1 === b.length, $ = d ? /* @__PURE__ */ I.jsx(l2, { children: x }, P) : x;
      if (!g)
        return $;
      const O = w.cloneElement(
        u,
        {
          __css: m
        }
      ), D = C ? null : O;
      return /* @__PURE__ */ I.jsxs(w.Fragment, { children: [
        $,
        D
      ] }, P);
    });
  }, [
    u,
    m,
    g,
    y,
    d,
    l
  ]), v = Be("chakra-stack", c);
  return /* @__PURE__ */ I.jsx(
    Se.div,
    {
      ref: t,
      display: "flex",
      alignItems: o,
      justifyContent: a,
      flexDirection: p,
      flexWrap: s,
      gap: g ? void 0 : i,
      className: v,
      ...f,
      children: h
    }
  );
});
u2.displayName = "Stack";
var po = Ze((e, t) => /* @__PURE__ */ I.jsx(u2, { align: "center", ...e, direction: "row", ref: t }));
po.displayName = "HStack";
var ot = Se("div");
ot.displayName = "Box";
var c2 = Ze(function(t, r) {
  const { size: n, centerContent: o = !0, ...a } = t, i = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ I.jsx(
    ot,
    {
      ref: r,
      boxSize: n,
      __css: {
        ...i,
        flexShrink: 0,
        flexGrow: 0
      },
      ...a
    }
  );
});
c2.displayName = "Square";
var s9 = Ze(function(t, r) {
  const { size: n, ...o } = t;
  return /* @__PURE__ */ I.jsx(c2, { size: n, ref: r, borderRadius: "9999px", ...o });
});
s9.displayName = "Circle";
var d2 = Ze(function(t, r) {
  const {
    borderLeftWidth: n,
    borderBottomWidth: o,
    borderTopWidth: a,
    borderRightWidth: i,
    borderWidth: s,
    borderStyle: l,
    borderColor: u,
    ...c
  } = ma("Divider", t), {
    className: d,
    orientation: f = "horizontal",
    __css: p,
    ...m
  } = qn(t), g = {
    vertical: {
      borderLeftWidth: n || i || s || "1px",
      height: "100%"
    },
    horizontal: {
      borderBottomWidth: o || a || s || "1px",
      width: "100%"
    }
  };
  return /* @__PURE__ */ I.jsx(
    Se.hr,
    {
      ref: r,
      "aria-orientation": f,
      ...m,
      __css: {
        ...c,
        border: "0",
        borderColor: u,
        borderStyle: l,
        ...g[f],
        ...p
      },
      className: Be("chakra-divider", d)
    }
  );
});
d2.displayName = "Divider";
function l9(e, t = {}) {
  const { ssr: r = !0, fallback: n } = t, { getWindow: o } = qz(), a = Array.isArray(e) ? e : [e];
  let i = Array.isArray(n) ? n : [n];
  i = i.filter((u) => u != null);
  const [s, l] = w.useState(() => a.map((u, c) => ({
    media: u,
    matches: r ? !!i[c] : o().matchMedia(u).matches
  })));
  return w.useEffect(() => {
    const u = o();
    l(
      a.map((f) => ({
        media: f,
        matches: u.matchMedia(f).matches
      }))
    );
    const c = a.map((f) => u.matchMedia(f)), d = (f) => {
      l((p) => p.slice().map((m) => m.media === f.media ? { ...m, matches: f.matches } : m));
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
function u9(e, t, r = s2) {
  let n = Object.keys(e).indexOf(t);
  if (n !== -1)
    return e[t];
  let o = r.indexOf(t);
  for (; o >= 0; ) {
    const a = r[o];
    if (e.hasOwnProperty(a)) {
      n = o;
      break;
    }
    o -= 1;
  }
  if (n !== -1) {
    const a = r[n];
    return e[a];
  }
}
function c9(e) {
  var t, r;
  const n = Rr(e) ? e : { fallback: e ?? "base" }, a = Mo().__breakpoints.details.map(
    ({ minMaxQuery: u, breakpoint: c }) => ({
      breakpoint: c,
      query: u.replace("@media screen and ", "")
    })
  ), i = a.map((u) => u.breakpoint === n.fallback), l = l9(
    a.map((u) => u.query),
    { fallback: i, ssr: n.ssr }
  ).findIndex((u) => u == !0);
  return (r = (t = a[l]) == null ? void 0 : t.breakpoint) != null ? r : n.fallback;
}
function d9(e, t) {
  var r;
  const n = Rr(t) ? t : { fallback: t ?? "base" }, o = c9(n), a = Mo();
  if (!o)
    return;
  const i = Array.from(((r = a.__breakpoints) == null ? void 0 : r.keys) || []), s = Array.isArray(e) ? Object.fromEntries(
    Object.entries(a9(e, i)).map(
      ([l, u]) => [l, u]
    )
  ) : e;
  return u9(s, o, i);
}
function f9(e) {
  const t = e.current;
  if (!t)
    return !1;
  const r = K8(t);
  return !r || t.contains(r) ? !1 : !!J8(r);
}
function f2(e, t) {
  const { shouldFocus: r, visible: n, focusRef: o } = t, a = r && !n;
  $g(() => {
    if (!a || f9(e))
      return;
    const i = (o == null ? void 0 : o.current) || e.current;
    let s;
    if (i)
      return s = requestAnimationFrame(() => {
        i.focus({ preventScroll: !0 });
      }), () => {
        cancelAnimationFrame(s);
      };
  }, [a, e, o]);
}
var p9 = {
  preventScroll: !0,
  shouldFocus: !1
};
function h9(e, t = p9) {
  const { focusRef: r, preventScroll: n, shouldFocus: o, visible: a } = t, i = v9(e) ? e.current : e, s = o && a, l = w.useRef(s), u = w.useRef(a);
  wl(() => {
    !u.current && a && (l.current = s), u.current = a;
  }, [a, s]);
  const c = w.useCallback(() => {
    if (!(!a || !i || !l.current) && (l.current = !1, !i.contains(document.activeElement)))
      if (r != null && r.current)
        requestAnimationFrame(() => {
          var d;
          (d = r.current) == null || d.focus({ preventScroll: n });
        });
      else {
        const d = a2(i);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: n });
        });
      }
  }, [a, n, i, r]);
  $g(() => {
    c();
  }, [c]), t0(i, "transitionend", c);
}
function v9(e) {
  return "current" in e;
}
var Ta = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), At = {
  arrowShadowColor: Ta("--popper-arrow-shadow-color"),
  arrowSize: Ta("--popper-arrow-size", "8px"),
  arrowSizeHalf: Ta("--popper-arrow-size-half"),
  arrowBg: Ta("--popper-arrow-bg"),
  transformOrigin: Ta("--popper-transform-origin"),
  arrowOffset: Ta("--popper-arrow-offset")
};
function m9(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var g9 = {
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
}, y9 = (e) => g9[e], Ww = {
  scroll: !0,
  resize: !0
};
function b9(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...Ww, ...e }
  } : t = {
    enabled: e,
    options: Ww
  }, t;
}
var w9 = {
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
}, x9 = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    Uw(e);
  },
  effect: ({ state: e }) => () => {
    Uw(e);
  }
}, Uw = (e) => {
  e.elements.popper.style.setProperty(
    At.transformOrigin.var,
    y9(e.placement)
  );
}, S9 = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    C9(e);
  }
}, C9 = (e) => {
  var t;
  if (!e.placement)
    return;
  const r = P9(e.placement);
  if ((t = e.elements) != null && t.arrow && r) {
    Object.assign(e.elements.arrow.style, {
      [r.property]: r.value,
      width: At.arrowSize.varRef,
      height: At.arrowSize.varRef,
      zIndex: -1
    });
    const n = {
      [At.arrowSizeHalf.var]: `calc(${At.arrowSize.varRef} / 2 - 1px)`,
      [At.arrowOffset.var]: `calc(${At.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in n)
      e.elements.arrow.style.setProperty(o, n[o]);
  }
}, P9 = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: At.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: At.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: At.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: At.arrowOffset.varRef };
}, k9 = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    Hw(e);
  },
  effect: ({ state: e }) => () => {
    Hw(e);
  }
}, Hw = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const r = m9(e.placement);
  r && t.style.setProperty("--popper-arrow-default-shadow", r), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: At.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, _9 = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, T9 = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function E9(e, t = "ltr") {
  var r, n;
  const o = ((r = _9[e]) == null ? void 0 : r[t]) || e;
  return t === "ltr" ? o : (n = T9[e]) != null ? n : o;
}
var Jt = "top", Lr = "bottom", Nr = "right", er = "left", d0 = "auto", ql = [Jt, Lr, Nr, er], Mi = "start", Ml = "end", $9 = "clippingParents", p2 = "viewport", vs = "popper", O9 = "reference", Gw = /* @__PURE__ */ ql.reduce(function(e, t) {
  return e.concat([t + "-" + Mi, t + "-" + Ml]);
}, []), h2 = /* @__PURE__ */ [].concat(ql, [d0]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Mi, t + "-" + Ml]);
}, []), M9 = "beforeRead", I9 = "read", R9 = "afterRead", D9 = "beforeMain", A9 = "main", F9 = "afterMain", L9 = "beforeWrite", N9 = "write", z9 = "afterWrite", j9 = [M9, I9, R9, D9, A9, F9, L9, N9, z9];
function xn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function gr(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function fa(e) {
  var t = gr(e).Element;
  return e instanceof t || e instanceof Element;
}
function Dr(e) {
  var t = gr(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function f0(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = gr(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function V9(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !Dr(a) || !xn(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(i) {
      var s = o[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function B9(e) {
  var t = e.state, r = {
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
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], a = t.attributes[n] || {}, i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = i.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !Dr(o) || !xn(o) || (Object.assign(o.style, s), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const W9 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: V9,
  effect: B9,
  requires: ["computeStyles"]
};
function bn(e) {
  return e.split("-")[0];
}
var aa = Math.max, bd = Math.min, Ii = Math.round;
function Xv() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function v2() {
  return !/^((?!chrome|android).)*safari/i.test(Xv());
}
function Ri(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && Dr(e) && (o = e.offsetWidth > 0 && Ii(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ii(n.height) / e.offsetHeight || 1);
  var i = fa(e) ? gr(e) : window, s = i.visualViewport, l = !v2() && r, u = (n.left + (l && s ? s.offsetLeft : 0)) / o, c = (n.top + (l && s ? s.offsetTop : 0)) / a, d = n.width / o, f = n.height / a;
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
function p0(e) {
  var t = Ri(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function m2(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && f0(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Gn(e) {
  return gr(e).getComputedStyle(e);
}
function U9(e) {
  return ["table", "td", "th"].indexOf(xn(e)) >= 0;
}
function Ro(e) {
  return ((fa(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ef(e) {
  return xn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (f0(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ro(e)
  );
}
function Yw(e) {
  return !Dr(e) || // https://github.com/popperjs/popper-core/issues/837
  Gn(e).position === "fixed" ? null : e.offsetParent;
}
function H9(e) {
  var t = /firefox/i.test(Xv()), r = /Trident/i.test(Xv());
  if (r && Dr(e)) {
    var n = Gn(e);
    if (n.position === "fixed")
      return null;
  }
  var o = Ef(e);
  for (f0(o) && (o = o.host); Dr(o) && ["html", "body"].indexOf(xn(o)) < 0; ) {
    var a = Gn(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Kl(e) {
  for (var t = gr(e), r = Yw(e); r && U9(r) && Gn(r).position === "static"; )
    r = Yw(r);
  return r && (xn(r) === "html" || xn(r) === "body" && Gn(r).position === "static") ? t : r || H9(e) || t;
}
function h0(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Qs(e, t, r) {
  return aa(e, bd(t, r));
}
function G9(e, t, r) {
  var n = Qs(e, t, r);
  return n > r ? r : n;
}
function g2() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function y2(e) {
  return Object.assign({}, g2(), e);
}
function b2(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Y9 = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, y2(typeof t != "number" ? t : b2(t, ql));
};
function q9(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, i = r.modifiersData.popperOffsets, s = bn(r.placement), l = h0(s), u = [er, Nr].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!a || !i)) {
    var d = Y9(o.padding, r), f = p0(a), p = l === "y" ? Jt : er, m = l === "y" ? Lr : Nr, g = r.rects.reference[c] + r.rects.reference[l] - i[l] - r.rects.popper[c], y = i[l] - r.rects.reference[l], h = Kl(a), v = h ? l === "y" ? h.clientHeight || 0 : h.clientWidth || 0 : 0, b = g / 2 - y / 2, x = d[p], k = v - f[c] - d[m], P = v / 2 - f[c] / 2 + b, C = Qs(x, P, k), _ = l;
    r.modifiersData[n] = (t = {}, t[_] = C, t.centerOffset = C - P, t);
  }
}
function K9(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || m2(t.elements.popper, o) && (t.elements.arrow = o));
}
const X9 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: q9,
  effect: K9,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Di(e) {
  return e.split("-")[1];
}
var Q9 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Z9(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Ii(r * o) / o || 0,
    y: Ii(n * o) / o || 0
  };
}
function qw(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = i.x, p = f === void 0 ? 0 : f, m = i.y, g = m === void 0 ? 0 : m, y = typeof c == "function" ? c({
    x: p,
    y: g
  }) : {
    x: p,
    y: g
  };
  p = y.x, g = y.y;
  var h = i.hasOwnProperty("x"), v = i.hasOwnProperty("y"), b = er, x = Jt, k = window;
  if (u) {
    var P = Kl(r), C = "clientHeight", _ = "clientWidth";
    if (P === gr(r) && (P = Ro(r), Gn(P).position !== "static" && s === "absolute" && (C = "scrollHeight", _ = "scrollWidth")), P = P, o === Jt || (o === er || o === Nr) && a === Ml) {
      x = Lr;
      var $ = d && P === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[C]
      );
      g -= $ - n.height, g *= l ? 1 : -1;
    }
    if (o === er || (o === Jt || o === Lr) && a === Ml) {
      b = Nr;
      var O = d && P === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[_]
      );
      p -= O - n.width, p *= l ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: s
  }, u && Q9), H = c === !0 ? Z9({
    x: p,
    y: g
  }, gr(r)) : {
    x: p,
    y: g
  };
  if (p = H.x, g = H.y, l) {
    var V;
    return Object.assign({}, D, (V = {}, V[x] = v ? "0" : "", V[b] = h ? "0" : "", V.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + g + "px)" : "translate3d(" + p + "px, " + g + "px, 0)", V));
  }
  return Object.assign({}, D, (t = {}, t[x] = v ? g + "px" : "", t[b] = h ? p + "px" : "", t.transform = "", t));
}
function J9(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, i = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: bn(t.placement),
    variation: Di(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, qw(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, qw(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const eU = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: J9,
  data: {}
};
var Nu = {
  passive: !0
};
function tU(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, i = n.resize, s = i === void 0 ? !0 : i, l = gr(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Nu);
  }), s && l.addEventListener("resize", r.update, Nu), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Nu);
    }), s && l.removeEventListener("resize", r.update, Nu);
  };
}
const rU = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: tU,
  data: {}
};
var nU = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xc(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return nU[t];
  });
}
var oU = {
  start: "end",
  end: "start"
};
function Kw(e) {
  return e.replace(/start|end/g, function(t) {
    return oU[t];
  });
}
function v0(e) {
  var t = gr(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function m0(e) {
  return Ri(Ro(e)).left + v0(e).scrollLeft;
}
function aU(e, t) {
  var r = gr(e), n = Ro(e), o = r.visualViewport, a = n.clientWidth, i = n.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    var u = v2();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s + m0(e),
    y: l
  };
}
function iU(e) {
  var t, r = Ro(e), n = v0(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = aa(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = aa(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + m0(e), l = -n.scrollTop;
  return Gn(o || r).direction === "rtl" && (s += aa(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function g0(e) {
  var t = Gn(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function w2(e) {
  return ["html", "body", "#document"].indexOf(xn(e)) >= 0 ? e.ownerDocument.body : Dr(e) && g0(e) ? e : w2(Ef(e));
}
function Zs(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = w2(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = gr(n), i = o ? [a].concat(a.visualViewport || [], g0(n) ? n : []) : n, s = t.concat(i);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Zs(Ef(i)))
  );
}
function Qv(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function sU(e, t) {
  var r = Ri(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Xw(e, t, r) {
  return t === p2 ? Qv(aU(e, r)) : fa(t) ? sU(t, r) : Qv(iU(Ro(e)));
}
function lU(e) {
  var t = Zs(Ef(e)), r = ["absolute", "fixed"].indexOf(Gn(e).position) >= 0, n = r && Dr(e) ? Kl(e) : e;
  return fa(n) ? t.filter(function(o) {
    return fa(o) && m2(o, n) && xn(o) !== "body";
  }) : [];
}
function uU(e, t, r, n) {
  var o = t === "clippingParents" ? lU(e) : [].concat(t), a = [].concat(o, [r]), i = a[0], s = a.reduce(function(l, u) {
    var c = Xw(e, u, n);
    return l.top = aa(c.top, l.top), l.right = bd(c.right, l.right), l.bottom = bd(c.bottom, l.bottom), l.left = aa(c.left, l.left), l;
  }, Xw(e, i, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function x2(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? bn(n) : null, a = n ? Di(n) : null, i = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case Jt:
      l = {
        x: i,
        y: t.y - r.height
      };
      break;
    case Lr:
      l = {
        x: i,
        y: t.y + t.height
      };
      break;
    case Nr:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case er:
      l = {
        x: t.x - r.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? h0(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Mi:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case Ml:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function Il(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, i = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? $9 : s, u = r.rootBoundary, c = u === void 0 ? p2 : u, d = r.elementContext, f = d === void 0 ? vs : d, p = r.altBoundary, m = p === void 0 ? !1 : p, g = r.padding, y = g === void 0 ? 0 : g, h = y2(typeof y != "number" ? y : b2(y, ql)), v = f === vs ? O9 : vs, b = e.rects.popper, x = e.elements[m ? v : f], k = uU(fa(x) ? x : x.contextElement || Ro(e.elements.popper), l, c, i), P = Ri(e.elements.reference), C = x2({
    reference: P,
    element: b,
    strategy: "absolute",
    placement: o
  }), _ = Qv(Object.assign({}, b, C)), $ = f === vs ? _ : P, O = {
    top: k.top - $.top + h.top,
    bottom: $.bottom - k.bottom + h.bottom,
    left: k.left - $.left + h.left,
    right: $.right - k.right + h.right
  }, D = e.modifiersData.offset;
  if (f === vs && D) {
    var H = D[o];
    Object.keys(O).forEach(function(V) {
      var L = [Nr, Lr].indexOf(V) >= 0 ? 1 : -1, F = [Jt, Lr].indexOf(V) >= 0 ? "y" : "x";
      O[V] += H[F] * L;
    });
  }
  return O;
}
function cU(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, i = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? h2 : l, c = Di(n), d = c ? s ? Gw : Gw.filter(function(m) {
    return Di(m) === c;
  }) : ql, f = d.filter(function(m) {
    return u.indexOf(m) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(m, g) {
    return m[g] = Il(e, {
      placement: g,
      boundary: o,
      rootBoundary: a,
      padding: i
    })[bn(g)], m;
  }, {});
  return Object.keys(p).sort(function(m, g) {
    return p[m] - p[g];
  });
}
function dU(e) {
  if (bn(e) === d0)
    return [];
  var t = xc(e);
  return [Kw(e), t, Kw(t)];
}
function fU(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !0 : i, l = r.fallbackPlacements, u = r.padding, c = r.boundary, d = r.rootBoundary, f = r.altBoundary, p = r.flipVariations, m = p === void 0 ? !0 : p, g = r.allowedAutoPlacements, y = t.options.placement, h = bn(y), v = h === y, b = l || (v || !m ? [xc(y)] : dU(y)), x = [y].concat(b).reduce(function(J, ce) {
      return J.concat(bn(ce) === d0 ? cU(t, {
        placement: ce,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: m,
        allowedAutoPlacements: g
      }) : ce);
    }, []), k = t.rects.reference, P = t.rects.popper, C = /* @__PURE__ */ new Map(), _ = !0, $ = x[0], O = 0; O < x.length; O++) {
      var D = x[O], H = bn(D), V = Di(D) === Mi, L = [Jt, Lr].indexOf(H) >= 0, F = L ? "width" : "height", B = Il(t, {
        placement: D,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), Z = L ? V ? Nr : er : V ? Lr : Jt;
      k[F] > P[F] && (Z = xc(Z));
      var R = xc(Z), N = [];
      if (a && N.push(B[H] <= 0), s && N.push(B[Z] <= 0, B[R] <= 0), N.every(function(J) {
        return J;
      })) {
        $ = D, _ = !1;
        break;
      }
      C.set(D, N);
    }
    if (_)
      for (var K = m ? 3 : 1, W = function(ce) {
        var se = x.find(function(ue) {
          var ne = C.get(ue);
          if (ne)
            return ne.slice(0, ce).every(function(ee) {
              return ee;
            });
        });
        if (se)
          return $ = se, "break";
      }, Q = K; Q > 0; Q--) {
        var j = W(Q);
        if (j === "break")
          break;
      }
    t.placement !== $ && (t.modifiersData[n]._skip = !0, t.placement = $, t.reset = !0);
  }
}
const pU = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: fU,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Qw(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function Zw(e) {
  return [Jt, Nr, Lr, er].some(function(t) {
    return e[t] >= 0;
  });
}
function hU(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, i = Il(t, {
    elementContext: "reference"
  }), s = Il(t, {
    altBoundary: !0
  }), l = Qw(i, n), u = Qw(s, o, a), c = Zw(l), d = Zw(u);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": d
  });
}
const vU = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hU
};
function mU(e, t, r) {
  var n = bn(e), o = [er, Jt].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * o, [er, Nr].indexOf(n) >= 0 ? {
    x: s,
    y: i
  } : {
    x: i,
    y: s
  };
}
function gU(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, i = h2.reduce(function(c, d) {
    return c[d] = mU(d, t.rects, a), c;
  }, {}), s = i[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = i;
}
const yU = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: gU
};
function bU(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = x2({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const wU = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: bU,
  data: {}
};
function xU(e) {
  return e === "x" ? "y" : "x";
}
function SU(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !1 : i, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, d = r.padding, f = r.tether, p = f === void 0 ? !0 : f, m = r.tetherOffset, g = m === void 0 ? 0 : m, y = Il(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), h = bn(t.placement), v = Di(t.placement), b = !v, x = h0(h), k = xU(x), P = t.modifiersData.popperOffsets, C = t.rects.reference, _ = t.rects.popper, $ = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, O = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, H = {
    x: 0,
    y: 0
  };
  if (P) {
    if (a) {
      var V, L = x === "y" ? Jt : er, F = x === "y" ? Lr : Nr, B = x === "y" ? "height" : "width", Z = P[x], R = Z + y[L], N = Z - y[F], K = p ? -_[B] / 2 : 0, W = v === Mi ? C[B] : _[B], Q = v === Mi ? -_[B] : -C[B], j = t.elements.arrow, J = p && j ? p0(j) : {
        width: 0,
        height: 0
      }, ce = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : g2(), se = ce[L], ue = ce[F], ne = Qs(0, C[B], J[B]), ee = b ? C[B] / 2 - K - ne - se - O.mainAxis : W - ne - se - O.mainAxis, xe = b ? -C[B] / 2 + K + ne + ue + O.mainAxis : Q + ne + ue + O.mainAxis, Le = t.elements.arrow && Kl(t.elements.arrow), Nt = Le ? x === "y" ? Le.clientTop || 0 : Le.clientLeft || 0 : 0, Gt = (V = D == null ? void 0 : D[x]) != null ? V : 0, Sr = Z + ee - Gt - Nt, de = Z + xe - Gt, $t = Qs(p ? bd(R, Sr) : R, Z, p ? aa(N, de) : N);
      P[x] = $t, H[x] = $t - Z;
    }
    if (s) {
      var it, ir = x === "x" ? Jt : er, Xn = x === "x" ? Lr : Nr, Ot = P[k], Jr = k === "y" ? "height" : "width", Qn = Ot + y[ir], Cr = Ot - y[Xn], Sa = [Jt, er].indexOf(h) !== -1, Ki = (it = D == null ? void 0 : D[k]) != null ? it : 0, tu = Sa ? Qn : Ot - C[Jr] - _[Jr] - Ki + O.altAxis, ru = Sa ? Ot + C[Jr] + _[Jr] - Ki - O.altAxis : Cr, Fo = p && Sa ? G9(tu, Ot, ru) : Qs(p ? tu : Qn, Ot, p ? ru : Cr);
      P[k] = Fo, H[k] = Fo - Ot;
    }
    t.modifiersData[n] = H;
  }
}
const CU = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: SU,
  requiresIfExists: ["offset"]
};
function PU(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function kU(e) {
  return e === gr(e) || !Dr(e) ? v0(e) : PU(e);
}
function _U(e) {
  var t = e.getBoundingClientRect(), r = Ii(t.width) / e.offsetWidth || 1, n = Ii(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function TU(e, t, r) {
  r === void 0 && (r = !1);
  var n = Dr(t), o = Dr(t) && _U(t), a = Ro(t), i = Ri(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((xn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  g0(a)) && (s = kU(t)), Dr(t) ? (l = Ri(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = m0(a))), {
    x: i.left + s.scrollLeft - l.x,
    y: i.top + s.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function EU(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    r.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || o(a);
  }), n;
}
function $U(e) {
  var t = EU(e);
  return j9.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function OU(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function MU(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var Jw = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ex() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function IU(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? Jw : o;
  return function(s, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Jw, a),
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
        var v = typeof h == "function" ? h(c.options) : h;
        g(), c.options = Object.assign({}, a, c.options, v), c.scrollParents = {
          reference: fa(s) ? Zs(s) : s.contextElement ? Zs(s.contextElement) : [],
          popper: Zs(l)
        };
        var b = $U(MU([].concat(n, c.options.modifiers)));
        return c.orderedModifiers = b.filter(function(x) {
          return x.enabled;
        }), m(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var h = c.elements, v = h.reference, b = h.popper;
          if (ex(v, b)) {
            c.rects = {
              reference: TU(v, Kl(b), c.options.strategy === "fixed"),
              popper: p0(b)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(O) {
              return c.modifiersData[O.name] = Object.assign({}, O.data);
            });
            for (var x = 0; x < c.orderedModifiers.length; x++) {
              if (c.reset === !0) {
                c.reset = !1, x = -1;
                continue;
              }
              var k = c.orderedModifiers[x], P = k.fn, C = k.options, _ = C === void 0 ? {} : C, $ = k.name;
              typeof P == "function" && (c = P({
                state: c,
                options: _,
                name: $,
                instance: p
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: OU(function() {
        return new Promise(function(y) {
          p.forceUpdate(), y(c);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!ex(s, l))
      return p;
    p.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function m() {
      c.orderedModifiers.forEach(function(y) {
        var h = y.name, v = y.options, b = v === void 0 ? {} : v, x = y.effect;
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
    function g() {
      d.forEach(function(y) {
        return y();
      }), d = [];
    }
    return p;
  };
}
var RU = [rU, wU, eU, W9, yU, pU, CU, X9, vU], DU = /* @__PURE__ */ IU({
  defaultModifiers: RU
});
function S2(e = {}) {
  const {
    enabled: t = !0,
    modifiers: r,
    placement: n = "bottom",
    strategy: o = "absolute",
    arrowPadding: a = 8,
    eventListeners: i = !0,
    offset: s,
    gutter: l = 8,
    flip: u = !0,
    boundary: c = "clippingParents",
    preventOverflow: d = !0,
    matchWidth: f,
    direction: p = "ltr"
  } = e, m = w.useRef(null), g = w.useRef(null), y = w.useRef(null), h = E9(n, p), v = w.useRef(() => {
  }), b = w.useCallback(() => {
    var O;
    !t || !m.current || !g.current || ((O = v.current) == null || O.call(v), y.current = DU(m.current, g.current, {
      placement: h,
      modifiers: [
        k9,
        S9,
        x9,
        {
          ...w9,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...b9(i)
        },
        {
          name: "arrow",
          options: { padding: a }
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
        ...r ?? []
      ],
      strategy: o
    }), y.current.forceUpdate(), v.current = y.current.destroy);
  }, [
    h,
    t,
    r,
    f,
    i,
    a,
    s,
    l,
    u,
    d,
    c,
    o
  ]);
  w.useEffect(() => () => {
    var O;
    !m.current && !g.current && ((O = y.current) == null || O.destroy(), y.current = null);
  }, []);
  const x = w.useCallback(
    (O) => {
      m.current = O, b();
    },
    [b]
  ), k = w.useCallback(
    (O = {}, D = null) => ({
      ...O,
      ref: ur(x, D)
    }),
    [x]
  ), P = w.useCallback(
    (O) => {
      g.current = O, b();
    },
    [b]
  ), C = w.useCallback(
    (O = {}, D = null) => ({
      ...O,
      ref: ur(P, D),
      style: {
        ...O.style,
        position: o,
        minWidth: f ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, P, f]
  ), _ = w.useCallback((O = {}, D = null) => {
    const { size: H, shadowColor: V, bg: L, style: F, ...B } = O;
    return {
      ...B,
      ref: D,
      "data-popper-arrow": "",
      style: AU(O)
    };
  }, []), $ = w.useCallback(
    (O = {}, D = null) => ({
      ...O,
      ref: D,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var O;
      (O = y.current) == null || O.update();
    },
    forceUpdate() {
      var O;
      (O = y.current) == null || O.forceUpdate();
    },
    transformOrigin: At.transformOrigin.varRef,
    referenceRef: x,
    popperRef: P,
    getPopperProps: C,
    getArrowProps: _,
    getArrowInnerProps: $,
    getReferenceProps: k
  };
}
function AU(e) {
  const { size: t, shadowColor: r, bg: n, style: o } = e, a = { ...o, position: "absolute" };
  return t && (a["--popper-arrow-size"] = t), r && (a["--popper-arrow-shadow-color"] = r), n && (a["--popper-arrow-bg"] = n), a;
}
function C2(e = {}) {
  const {
    onClose: t,
    onOpen: r,
    isOpen: n,
    id: o
  } = e, a = od(r), i = od(t), [s, l] = w.useState(e.defaultIsOpen || !1), u = n !== void 0 ? n : s, c = n !== void 0, d = w.useId(), f = o ?? `disclosure-${d}`, p = w.useCallback(() => {
    c || l(!1), i == null || i();
  }, [c, i]), m = w.useCallback(() => {
    c || l(!0), a == null || a();
  }, [c, a]), g = w.useCallback(() => {
    u ? p() : m();
  }, [u, m, p]);
  function y(v = {}) {
    return {
      ...v,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(b) {
        var x;
        (x = v.onClick) == null || x.call(v, b), g();
      }
    };
  }
  function h(v = {}) {
    return {
      ...v,
      hidden: !u,
      id: f
    };
  }
  return {
    isOpen: u,
    onOpen: m,
    onClose: p,
    onToggle: g,
    isControlled: c,
    getButtonProps: y,
    getDisclosureProps: h
  };
}
function FU(e) {
  const { ref: t, handler: r, enabled: n = !0 } = e, o = od(r), i = w.useRef({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  w.useEffect(() => {
    if (!n)
      return;
    const s = (d) => {
      ah(d, t) && (i.isPointerDown = !0);
    }, l = (d) => {
      if (i.ignoreEmulatedMouseEvents) {
        i.ignoreEmulatedMouseEvents = !1;
        return;
      }
      i.isPointerDown && r && ah(d, t) && (i.isPointerDown = !1, o(d));
    }, u = (d) => {
      i.ignoreEmulatedMouseEvents = !0, r && i.isPointerDown && ah(d, t) && (i.isPointerDown = !1, o(d));
    }, c = P2(t.current);
    return c.addEventListener("mousedown", s, !0), c.addEventListener("mouseup", l, !0), c.addEventListener("touchstart", s, !0), c.addEventListener("touchend", u, !0), () => {
      c.removeEventListener("mousedown", s, !0), c.removeEventListener("mouseup", l, !0), c.removeEventListener("touchstart", s, !0), c.removeEventListener("touchend", u, !0);
    };
  }, [r, t, o, i, n]);
}
function ah(e, t) {
  var r;
  const n = e.target;
  return n && !P2(n).contains(n) ? !1 : !((r = t.current) != null && r.contains(n));
}
function P2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function k2(e) {
  const { isOpen: t, ref: r } = e, [n, o] = w.useState(t), [a, i] = w.useState(!1);
  return w.useEffect(() => {
    a || (o(t), i(!0));
  }, [t, a, n]), t0(
    () => r.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !n),
    onComplete() {
      var l;
      const u = q8(r.current), c = new u.CustomEvent("animationend", { bubbles: !0 });
      (l = r.current) == null || l.dispatchEvent(c);
    }
  };
}
function LU(e) {
  const { wasSelected: t, enabled: r, isSelected: n, mode: o = "unmount" } = e;
  return !!(!r || n || o === "keepMounted" && t);
}
var [
  NU,
  $de,
  zU,
  Ode
] = bW(), [jU, Mde] = xr({
  strict: !1,
  name: "MenuContext"
});
function VU(e, ...t) {
  const r = w.useId(), n = e || r;
  return w.useMemo(() => t.map((o) => `${o}-${n}`), [n, t]);
}
function BU(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function WU(e = {}) {
  const {
    id: t,
    closeOnSelect: r = !0,
    closeOnBlur: n = !0,
    initialFocusRef: o,
    autoSelect: a = !0,
    isLazy: i,
    isOpen: s,
    defaultIsOpen: l,
    onClose: u,
    onOpen: c,
    placement: d = "bottom-start",
    lazyBehavior: f = "unmount",
    direction: p,
    computePositionOnMount: m = !1,
    ...g
  } = e, y = w.useRef(null), h = w.useRef(null), v = zU(), b = w.useCallback(() => {
    requestAnimationFrame(() => {
      var j;
      (j = y.current) == null || j.focus({ preventScroll: !1 });
    });
  }, []), x = w.useCallback(() => {
    const j = setTimeout(() => {
      var J;
      if (o)
        (J = o.current) == null || J.focus();
      else {
        const ce = v.firstEnabled();
        ce && V(ce.index);
      }
    });
    R.current.add(j);
  }, [v, o]), k = w.useCallback(() => {
    const j = setTimeout(() => {
      const J = v.lastEnabled();
      J && V(J.index);
    });
    R.current.add(j);
  }, [v]), P = w.useCallback(() => {
    c == null || c(), a ? x() : b();
  }, [a, x, b, c]), { isOpen: C, onOpen: _, onClose: $, onToggle: O } = C2({
    isOpen: s,
    defaultIsOpen: l,
    onClose: u,
    onOpen: P
  });
  FU({
    enabled: C && n,
    ref: y,
    handler: (j) => {
      var J;
      (J = h.current) != null && J.contains(j.target) || $();
    }
  });
  const D = S2({
    ...g,
    enabled: C || m,
    placement: d,
    direction: p
  }), [H, V] = w.useState(-1);
  $g(() => {
    C || V(-1);
  }, [C]), f2(y, {
    focusRef: h,
    visible: C,
    shouldFocus: !0
  });
  const L = k2({ isOpen: C, ref: y }), [F, B] = VU(t, "menu-button", "menu-list"), Z = w.useCallback(() => {
    _(), b();
  }, [_, b]), R = w.useRef(/* @__PURE__ */ new Set([]));
  w.useEffect(() => {
    const j = R.current;
    return () => {
      j.forEach((J) => clearTimeout(J)), j.clear();
    };
  }, []);
  const N = w.useCallback(() => {
    _(), x();
  }, [x, _]), K = w.useCallback(() => {
    _(), k();
  }, [_, k]), W = w.useCallback(() => {
    var j, J;
    const ce = BU(y.current), se = (j = y.current) == null ? void 0 : j.contains(ce.activeElement);
    if (!(C && !se))
      return;
    const ne = (J = v.item(H)) == null ? void 0 : J.node;
    ne == null || ne.focus({ preventScroll: !0 });
  }, [C, H, v]), Q = w.useRef(null);
  return {
    openAndFocusMenu: Z,
    openAndFocusFirstItem: N,
    openAndFocusLastItem: K,
    onTransitionEnd: W,
    unstable__animationState: L,
    descendants: v,
    popper: D,
    buttonId: F,
    menuId: B,
    forceUpdate: D.forceUpdate,
    orientation: "vertical",
    isOpen: C,
    onToggle: O,
    onOpen: _,
    onClose: $,
    menuRef: y,
    buttonRef: h,
    focusedIndex: H,
    closeOnSelect: r,
    closeOnBlur: n,
    autoSelect: a,
    setFocusedIndex: V,
    isLazy: i,
    lazyBehavior: f,
    initialFocusRef: o,
    rafId: Q
  };
}
var [UU, HU] = xr({
  name: "MenuStylesContext",
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), _2 = (e) => {
  const { children: t } = e, r = vr("Menu", e), n = qn(e), { direction: o } = Mo(), { descendants: a, ...i } = WU({ ...n, direction: o }), s = w.useMemo(() => i, [i]), { isOpen: l, onClose: u, forceUpdate: c } = s;
  return /* @__PURE__ */ I.jsx(NU, { value: a, children: /* @__PURE__ */ I.jsx(jU, { value: s, children: /* @__PURE__ */ I.jsx(UU, { value: r, children: In(t, { isOpen: l, onClose: u, forceUpdate: c }) }) }) });
};
_2.displayName = "Menu";
var T2 = (e) => {
  const { className: t, children: r, ...n } = e, o = HU(), a = w.Children.only(r), i = w.isValidElement(a) ? w.cloneElement(a, {
    focusable: "false",
    "aria-hidden": !0,
    className: Be("chakra-menu__icon", a.props.className)
  }) : null, s = Be("chakra-menu__icon-wrapper", t);
  return /* @__PURE__ */ I.jsx(Se.span, { className: s, ...n, __css: o.icon, children: i });
};
T2.displayName = "MenuIcon";
var GU = Object.defineProperty, YU = (e, t, r) => t in e ? GU(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, qU = (e, t, r) => (YU(e, typeof t != "symbol" ? t + "" : t, r), r), KU = class {
  constructor() {
    qU(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, Zv = new KU();
function E2(e, t) {
  const [r, n] = w.useState(0);
  return w.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const a = Zv.add(o);
        n(a);
      }
      return () => {
        Zv.remove(o), n(0);
      };
    }
  }, [t, e]), r;
}
var XU = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ea = /* @__PURE__ */ new WeakMap(), zu = /* @__PURE__ */ new WeakMap(), ju = {}, ih = 0, $2 = function(e) {
  return e && (e.host || $2(e.parentNode));
}, QU = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = $2(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, ZU = function(e, t, r, n) {
  var o = QU(t, Array.isArray(e) ? e : [e]);
  ju[r] || (ju[r] = /* @__PURE__ */ new WeakMap());
  var a = ju[r], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else {
        var p = f.getAttribute(n), m = p !== null && p !== "false", g = (Ea.get(f) || 0) + 1, y = (a.get(f) || 0) + 1;
        Ea.set(f, g), a.set(f, y), i.push(f), g === 1 && m && zu.set(f, !0), y === 1 && f.setAttribute(r, "true"), m || f.setAttribute(n, "true");
      }
    });
  };
  return c(t), s.clear(), ih++, function() {
    i.forEach(function(d) {
      var f = Ea.get(d) - 1, p = a.get(d) - 1;
      Ea.set(d, f), a.set(d, p), f || (zu.has(d) || d.removeAttribute(n), zu.delete(d)), p || d.removeAttribute(r);
    }), ih--, ih || (Ea = /* @__PURE__ */ new WeakMap(), Ea = /* @__PURE__ */ new WeakMap(), zu = /* @__PURE__ */ new WeakMap(), ju = {});
  };
}, JU = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = t || XU(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), ZU(n, o, r, "aria-hidden")) : function() {
    return null;
  };
};
function eH(e) {
  const {
    isOpen: t,
    onClose: r,
    id: n,
    closeOnOverlayClick: o = !0,
    closeOnEsc: a = !0,
    useInert: i = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = w.useRef(null), c = w.useRef(null), [d, f, p] = rH(
    n,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  tH(u, t && i);
  const m = E2(u, t), g = w.useRef(null), y = w.useCallback(($) => {
    g.current = $.target;
  }, []), h = w.useCallback(
    ($) => {
      $.key === "Escape" && ($.stopPropagation(), a && (r == null || r()), l == null || l());
    },
    [a, r, l]
  ), [v, b] = w.useState(!1), [x, k] = w.useState(!1), P = w.useCallback(
    ($ = {}, O = null) => ({
      role: "dialog",
      ...$,
      ref: ur(O, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": v ? f : void 0,
      "aria-describedby": x ? p : void 0,
      onClick: kt(
        $.onClick,
        (D) => D.stopPropagation()
      )
    }),
    [p, x, d, f, v]
  ), C = w.useCallback(
    ($) => {
      $.stopPropagation(), g.current === $.target && Zv.isTopModal(u.current) && (o && (r == null || r()), s == null || s());
    },
    [r, o, s]
  ), _ = w.useCallback(
    ($ = {}, O = null) => ({
      ...$,
      ref: ur(O, c),
      onClick: kt($.onClick, C),
      onKeyDown: kt($.onKeyDown, h),
      onMouseDown: kt($.onMouseDown, y)
    }),
    [h, y, C]
  );
  return {
    isOpen: t,
    onClose: r,
    headerId: f,
    bodyId: p,
    setBodyMounted: k,
    setHeaderMounted: b,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: P,
    getDialogContainerProps: _,
    index: m
  };
}
function tH(e, t) {
  const r = e.current;
  w.useEffect(() => {
    if (!(!e.current || !t))
      return JU(e.current);
  }, [t, e, r]);
}
function rH(e, ...t) {
  const r = w.useId(), n = e || r;
  return w.useMemo(() => t.map((o) => `${o}-${n}`), [n, t]);
}
var [nH, Xl] = xr({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [oH, Vi] = xr({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), O2 = (e) => {
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
    portalProps: r,
    children: n,
    autoFocus: o,
    trapFocus: a,
    initialFocusRef: i,
    finalFocusRef: s,
    returnFocusOnClose: l,
    blockScrollOnMount: u,
    allowPinchZoom: c,
    preserveScrollBarGap: d,
    motionPreset: f,
    lockFocusAcrossFrames: p,
    onCloseComplete: m
  } = t, g = vr("Modal", t), h = {
    ...eH(t),
    autoFocus: o,
    trapFocus: a,
    initialFocusRef: i,
    finalFocusRef: s,
    returnFocusOnClose: l,
    blockScrollOnMount: u,
    allowPinchZoom: c,
    preserveScrollBarGap: d,
    motionPreset: f,
    lockFocusAcrossFrames: p
  };
  return /* @__PURE__ */ I.jsx(oH, { value: h, children: /* @__PURE__ */ I.jsx(nH, { value: g, children: /* @__PURE__ */ I.jsx(Zg, { onExitComplete: m, children: h.isOpen && /* @__PURE__ */ I.jsx(pf, { ...r, children: n }) }) }) });
};
O2.displayName = "Modal";
var Sc = "right-scroll-bar-position", Cc = "width-before-scroll-bar", aH = "with-scroll-bars-hidden", iH = "--removed-body-scroll-bar-size", M2 = TT(), sh = function() {
}, $f = w.forwardRef(function(e, t) {
  var r = w.useRef(null), n = w.useState({
    onScrollCapture: sh,
    onWheelCapture: sh,
    onTouchMoveCapture: sh
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, m = e.inert, g = e.allowPinchZoom, y = e.as, h = y === void 0 ? "div" : y, v = e.gapMode, b = PT(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = f, k = CT([r, t]), P = dn(dn({}, b), o);
  return w.createElement(
    w.Fragment,
    null,
    c && w.createElement(x, { sideCar: M2, removeScrollBar: u, shards: d, noIsolation: p, inert: m, setCallbacks: a, allowPinchZoom: !!g, lockRef: r, gapMode: v }),
    i ? w.cloneElement(w.Children.only(s), dn(dn({}, P), { ref: k })) : w.createElement(h, dn({}, P, { className: l, ref: k }), s)
  );
});
$f.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
$f.classNames = {
  fullWidth: Cc,
  zeroRight: Sc
};
var tx, sH = function() {
  if (tx)
    return tx;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function lH() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = sH();
  return t && e.setAttribute("nonce", t), e;
}
function uH(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function cH(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var dH = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = lH()) && (uH(t, r), cH(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, fH = function() {
  var e = dH();
  return function(t, r) {
    w.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, I2 = function() {
  var e = fH(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, pH = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, lh = function(e) {
  return parseInt(e || "", 10) || 0;
}, hH = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [lh(r), lh(n), lh(o)];
}, vH = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return pH;
  var t = hH(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, mH = I2(), gH = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(aH, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(s, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Sc, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Cc, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Sc, " .").concat(Sc, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Cc, " .").concat(Cc, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(iH, ": ").concat(s, `px;
  }
`);
}, yH = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n, a = w.useMemo(function() {
    return vH(o);
  }, [o]);
  return w.createElement(mH, { styles: gH(a, !t, o, r ? "" : "!important") });
}, Jv = !1;
if (typeof window < "u")
  try {
    var Vu = Object.defineProperty({}, "passive", {
      get: function() {
        return Jv = !0, !0;
      }
    });
    window.addEventListener("test", Vu, Vu), window.removeEventListener("test", Vu, Vu);
  } catch {
    Jv = !1;
  }
var $a = Jv ? { passive: !1 } : !1, bH = function(e) {
  return e.tagName === "TEXTAREA";
}, R2 = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !bH(e) && r[t] === "visible")
  );
}, wH = function(e) {
  return R2(e, "overflowY");
}, xH = function(e) {
  return R2(e, "overflowX");
}, rx = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = D2(e, n);
    if (o) {
      var a = A2(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, SH = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, CH = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, D2 = function(e, t) {
  return e === "v" ? wH(t) : xH(t);
}, A2 = function(e, t) {
  return e === "v" ? SH(t) : CH(t);
}, PH = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, kH = function(e, t, r, n, o) {
  var a = PH(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, l = t.contains(s), u = !1, c = i > 0, d = 0, f = 0;
  do {
    var p = A2(e, s), m = p[0], g = p[1], y = p[2], h = g - y - a * m;
    (m || h) && D2(e, s) && (d += h, f += m), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && i > d) || !c && (o && Math.abs(f) < 1 || !o && -i > f)) && (u = !0), u;
}, Bu = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, nx = function(e) {
  return [e.deltaX, e.deltaY];
}, ox = function(e) {
  return e && "current" in e ? e.current : e;
}, _H = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, TH = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, EH = 0, Oa = [];
function $H(e) {
  var t = w.useRef([]), r = w.useRef([0, 0]), n = w.useRef(), o = w.useState(EH++)[0], a = w.useState(I2)[0], i = w.useRef(e);
  w.useEffect(function() {
    i.current = e;
  }, [e]), w.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = XW([e.lockRef.current], (e.shards || []).map(ox), !0).filter(Boolean);
      return g.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = w.useCallback(function(g, y) {
    if ("touches" in g && g.touches.length === 2)
      return !i.current.allowPinchZoom;
    var h = Bu(g), v = r.current, b = "deltaX" in g ? g.deltaX : v[0] - h[0], x = "deltaY" in g ? g.deltaY : v[1] - h[1], k, P = g.target, C = Math.abs(b) > Math.abs(x) ? "h" : "v";
    if ("touches" in g && C === "h" && P.type === "range")
      return !1;
    var _ = rx(C, P);
    if (!_)
      return !0;
    if (_ ? k = C : (k = C === "v" ? "h" : "v", _ = rx(C, P)), !_)
      return !1;
    if (!n.current && "changedTouches" in g && (b || x) && (n.current = k), !k)
      return !0;
    var $ = n.current || k;
    return kH($, y, g, $ === "h" ? b : x, !0);
  }, []), l = w.useCallback(function(g) {
    var y = g;
    if (!(!Oa.length || Oa[Oa.length - 1] !== a)) {
      var h = "deltaY" in y ? nx(y) : Bu(y), v = t.current.filter(function(k) {
        return k.name === y.type && (k.target === y.target || y.target === k.shadowParent) && _H(k.delta, h);
      })[0];
      if (v && v.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!v) {
        var b = (i.current.shards || []).map(ox).filter(Boolean).filter(function(k) {
          return k.contains(y.target);
        }), x = b.length > 0 ? s(y, b[0]) : !i.current.noIsolation;
        x && y.cancelable && y.preventDefault();
      }
    }
  }, []), u = w.useCallback(function(g, y, h, v) {
    var b = { name: g, delta: y, target: h, should: v, shadowParent: OH(h) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== b;
      });
    }, 1);
  }, []), c = w.useCallback(function(g) {
    r.current = Bu(g), n.current = void 0;
  }, []), d = w.useCallback(function(g) {
    u(g.type, nx(g), g.target, s(g, e.lockRef.current));
  }, []), f = w.useCallback(function(g) {
    u(g.type, Bu(g), g.target, s(g, e.lockRef.current));
  }, []);
  w.useEffect(function() {
    return Oa.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, $a), document.addEventListener("touchmove", l, $a), document.addEventListener("touchstart", c, $a), function() {
      Oa = Oa.filter(function(g) {
        return g !== a;
      }), document.removeEventListener("wheel", l, $a), document.removeEventListener("touchmove", l, $a), document.removeEventListener("touchstart", c, $a);
    };
  }, []);
  var p = e.removeScrollBar, m = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    m ? w.createElement(a, { styles: TH(o) }) : null,
    p ? w.createElement(yH, { gapMode: e.gapMode }) : null
  );
}
function OH(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const MH = QW(M2, $H);
var F2 = w.forwardRef(function(e, t) {
  return w.createElement($f, dn({}, e, { ref: t, sideCar: MH }));
});
F2.classNames = $f.classNames;
const IH = F2;
function RH(e) {
  const {
    autoFocus: t,
    trapFocus: r,
    dialogRef: n,
    initialFocusRef: o,
    blockScrollOnMount: a,
    allowPinchZoom: i,
    finalFocusRef: s,
    returnFocusOnClose: l,
    preserveScrollBarGap: u,
    lockFocusAcrossFrames: c,
    isOpen: d
  } = Vi(), [f, p] = J_();
  w.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const m = E2(n, d);
  return /* @__PURE__ */ I.jsx(
    i2,
    {
      autoFocus: t,
      isDisabled: !r,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: n,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ I.jsx(
        IH,
        {
          removeScrollBar: !u,
          allowPinchZoom: i,
          enabled: m === 1 && a,
          forwardProps: !0,
          children: e.children
        }
      )
    }
  );
}
var [DH, AH] = xr(), FH = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function LH(e, t) {
  var r, n;
  if (e)
    return (n = (r = FH[e]) == null ? void 0 : r[t]) != null ? n : e;
}
function NH(e) {
  var t;
  const {
    isOpen: r,
    onClose: n,
    placement: o = "right",
    children: a,
    ...i
  } = e, s = Mo(), l = (t = s.components) == null ? void 0 : t.Drawer, u = LH(o, s.direction);
  return /* @__PURE__ */ I.jsx(DH, { value: { placement: u }, children: /* @__PURE__ */ I.jsx(
    O2,
    {
      isOpen: r,
      onClose: n,
      styleConfig: l,
      ...i,
      children: a
    }
  ) });
}
var zH = Se(vT), L2 = Ze(
  (e, t) => {
    const {
      className: r,
      children: n,
      motionProps: o,
      containerProps: a,
      ...i
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = Vi(), c = s(i, t), d = l(a), f = Be("chakra-modal__content", r), p = Xl(), m = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...p.dialog
    }, g = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...p.dialogContainer
    }, { placement: y } = AH();
    return /* @__PURE__ */ I.jsx(RH, { children: /* @__PURE__ */ I.jsx(
      Se.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: g,
        children: /* @__PURE__ */ I.jsx(
          zH,
          {
            motionProps: o,
            direction: y,
            in: u,
            className: f,
            ...c,
            __css: m,
            children: n
          }
        )
      }
    ) });
  }
);
L2.displayName = "DrawerContent";
var N2 = Ze(
  (e, t) => {
    const { className: r, ...n } = e, { headerId: o, setHeaderMounted: a } = Vi();
    w.useEffect(() => (a(!0), () => a(!1)), [a]);
    const i = Be("chakra-modal__header", r), l = {
      flex: 0,
      ...Xl().header
    };
    return /* @__PURE__ */ I.jsx(
      Se.header,
      {
        ref: t,
        className: i,
        id: o,
        ...n,
        __css: l
      }
    );
  }
);
N2.displayName = "ModalHeader";
var jH = Se(kf.div), z2 = Ze(
  (e, t) => {
    const { className: r, transition: n, motionProps: o, ...a } = e, i = Be("chakra-modal__overlay", r), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Xl().overlay
    }, { motionPreset: u } = Vi(), d = o || (u === "none" ? {} : hT);
    return /* @__PURE__ */ I.jsx(
      jH,
      {
        ...d,
        __css: l,
        ref: t,
        className: i,
        ...a
      }
    );
  }
);
z2.displayName = "ModalOverlay";
var j2 = Ze((e, t) => {
  const { className: r, ...n } = e, { bodyId: o, setBodyMounted: a } = Vi();
  w.useEffect(() => (a(!0), () => a(!1)), [a]);
  const i = Be("chakra-modal__body", r), s = Xl();
  return /* @__PURE__ */ I.jsx(
    Se.div,
    {
      ref: t,
      className: i,
      id: o,
      ...n,
      __css: s.body
    }
  );
});
j2.displayName = "ModalBody";
var V2 = Ze(
  (e, t) => {
    const { onClick: r, className: n, ...o } = e, { onClose: a } = Vi(), i = Be("chakra-modal__close-btn", n), s = Xl();
    return /* @__PURE__ */ I.jsx(
      e0,
      {
        ref: t,
        __css: s.closeButton,
        className: i,
        onClick: kt(r, (l) => {
          l.stopPropagation(), a();
        }),
        ...o
      }
    );
  }
);
V2.displayName = "ModalCloseButton";
var [VH, ba] = xr({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [BH, Ql] = xr({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
}), B2 = Ze(
  function(t, r) {
    const { getHeaderProps: n } = ba(), o = Ql();
    return /* @__PURE__ */ I.jsx(
      Se.header,
      {
        ...n(t, r),
        className: Be("chakra-popover__header", t.className),
        __css: o.header
      }
    );
  }
);
B2.displayName = "PopoverHeader";
function y0(e) {
  const t = w.Children.only(e.children), { getTriggerProps: r } = ba();
  return w.cloneElement(t, r(t.props, t.ref));
}
y0.displayName = "PopoverTrigger";
var Ma = {
  click: "click",
  hover: "hover"
};
function WH(e = {}) {
  const {
    closeOnBlur: t = !0,
    closeOnEsc: r = !0,
    initialFocusRef: n,
    id: o,
    returnFocusOnClose: a = !0,
    autoFocus: i = !0,
    arrowSize: s,
    arrowShadowColor: l,
    trigger: u = Ma.click,
    openDelay: c = 200,
    closeDelay: d = 200,
    isLazy: f,
    lazyBehavior: p = "unmount",
    computePositionOnMount: m,
    ...g
  } = e, { isOpen: y, onClose: h, onOpen: v, onToggle: b } = C2(e), x = w.useRef(null), k = w.useRef(null), P = w.useRef(null), C = w.useRef(!1), _ = w.useRef(!1);
  y && (_.current = !0);
  const [$, O] = w.useState(!1), [D, H] = w.useState(!1), V = w.useId(), L = o ?? V, [F, B, Z, R] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((de) => `${de}-${L}`), {
    referenceRef: N,
    getArrowProps: K,
    getPopperProps: W,
    getArrowInnerProps: Q,
    forceUpdate: j
  } = S2({
    ...g,
    enabled: y || !!m
  }), J = k2({ isOpen: y, ref: P });
  zW({
    enabled: y,
    ref: k
  }), f2(P, {
    focusRef: k,
    visible: y,
    shouldFocus: a && u === Ma.click
  }), h9(P, {
    focusRef: n,
    visible: y,
    shouldFocus: i && u === Ma.click
  });
  const ce = LU({
    wasSelected: _.current,
    enabled: f,
    mode: p,
    isSelected: J.present
  }), se = w.useCallback(
    (de = {}, $t = null) => {
      const it = {
        ...de,
        style: {
          ...de.style,
          transformOrigin: At.transformOrigin.varRef,
          [At.arrowSize.var]: s ? `${s}px` : void 0,
          [At.arrowShadowColor.var]: l
        },
        ref: ur(P, $t),
        children: ce ? de.children : null,
        id: B,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: kt(de.onKeyDown, (ir) => {
          r && ir.key === "Escape" && h();
        }),
        onBlur: kt(de.onBlur, (ir) => {
          const Xn = ax(ir), Ot = uh(P.current, Xn), Jr = uh(k.current, Xn);
          y && t && (!Ot && !Jr) && h();
        }),
        "aria-labelledby": $ ? Z : void 0,
        "aria-describedby": D ? R : void 0
      };
      return u === Ma.hover && (it.role = "tooltip", it.onMouseEnter = kt(de.onMouseEnter, () => {
        C.current = !0;
      }), it.onMouseLeave = kt(
        de.onMouseLeave,
        (ir) => {
          ir.nativeEvent.relatedTarget !== null && (C.current = !1, setTimeout(() => h(), d));
        }
      )), it;
    },
    [
      ce,
      B,
      $,
      Z,
      D,
      R,
      u,
      r,
      h,
      y,
      t,
      d,
      l,
      s
    ]
  ), ue = w.useCallback(
    (de = {}, $t = null) => W(
      {
        ...de,
        style: {
          visibility: y ? "visible" : "hidden",
          ...de.style
        }
      },
      $t
    ),
    [y, W]
  ), ne = w.useCallback(
    (de, $t = null) => ({
      ...de,
      // If anchor is rendered, it is used as reference.
      ref: ur($t, x, N)
    }),
    [x, N]
  ), ee = w.useRef(), xe = w.useRef(), Le = w.useCallback(
    (de) => {
      x.current == null && N(de);
    },
    [N]
  ), Nt = w.useCallback(
    (de = {}, $t = null) => {
      const it = {
        ...de,
        ref: ur(k, $t, Le),
        id: F,
        "aria-haspopup": "dialog",
        "aria-expanded": y,
        "aria-controls": B
      };
      return u === Ma.click && (it.onClick = kt(de.onClick, b)), u === Ma.hover && (it.onFocus = kt(de.onFocus, () => {
        ee.current === void 0 && v();
      }), it.onBlur = kt(de.onBlur, (ir) => {
        const Xn = ax(ir), Ot = !uh(P.current, Xn);
        y && t && Ot && h();
      }), it.onKeyDown = kt(de.onKeyDown, (ir) => {
        ir.key === "Escape" && h();
      }), it.onMouseEnter = kt(de.onMouseEnter, () => {
        C.current = !0, ee.current = window.setTimeout(() => v(), c);
      }), it.onMouseLeave = kt(de.onMouseLeave, () => {
        C.current = !1, ee.current && (clearTimeout(ee.current), ee.current = void 0), xe.current = window.setTimeout(() => {
          C.current === !1 && h();
        }, d);
      })), it;
    },
    [
      F,
      y,
      B,
      u,
      Le,
      b,
      v,
      t,
      h,
      c,
      d
    ]
  );
  w.useEffect(() => () => {
    ee.current && clearTimeout(ee.current), xe.current && clearTimeout(xe.current);
  }, []);
  const Gt = w.useCallback(
    (de = {}, $t = null) => ({
      ...de,
      id: Z,
      ref: ur($t, (it) => {
        O(!!it);
      })
    }),
    [Z]
  ), Sr = w.useCallback(
    (de = {}, $t = null) => ({
      ...de,
      id: R,
      ref: ur($t, (it) => {
        H(!!it);
      })
    }),
    [R]
  );
  return {
    forceUpdate: j,
    isOpen: y,
    onAnimationComplete: J.onComplete,
    onClose: h,
    getAnchorProps: ne,
    getArrowProps: K,
    getArrowInnerProps: Q,
    getPopoverPositionerProps: ue,
    getPopoverProps: se,
    getTriggerProps: Nt,
    getHeaderProps: Gt,
    getBodyProps: Sr
  };
}
function uh(e, t) {
  return e === t || (e == null ? void 0 : e.contains(t));
}
function ax(e) {
  var t;
  const r = e.currentTarget.ownerDocument.activeElement;
  return (t = e.relatedTarget) != null ? t : r;
}
function b0(e) {
  const t = vr("Popover", e), { children: r, ...n } = qn(e), o = Mo(), a = WH({ ...n, direction: o.direction });
  return /* @__PURE__ */ I.jsx(VH, { value: a, children: /* @__PURE__ */ I.jsx(BH, { value: t, children: In(r, {
    isOpen: a.isOpen,
    onClose: a.onClose,
    forceUpdate: a.forceUpdate
  }) }) });
}
b0.displayName = "Popover";
var ch = (e, t) => t ? `${e}.${t}, ${t}` : void 0;
function w0(e) {
  var t;
  const { bg: r, bgColor: n, backgroundColor: o, shadow: a, boxShadow: i, shadowColor: s } = e, { getArrowProps: l, getArrowInnerProps: u } = ba(), c = Ql(), d = (t = r ?? n) != null ? t : o, f = a ?? i;
  return /* @__PURE__ */ I.jsx(
    Se.div,
    {
      ...l(),
      className: "chakra-popover__arrow-positioner",
      children: /* @__PURE__ */ I.jsx(
        Se.div,
        {
          className: Be("chakra-popover__arrow", e.className),
          ...u(e),
          __css: {
            "--popper-arrow-shadow-color": ch("colors", s),
            "--popper-arrow-bg": ch("colors", d),
            "--popper-arrow-shadow": ch("shadows", f),
            ...c.arrow
          }
        }
      )
    }
  );
}
w0.displayName = "PopoverArrow";
var x0 = Ze(
  function(t, r) {
    const { getBodyProps: n } = ba(), o = Ql();
    return /* @__PURE__ */ I.jsx(
      Se.div,
      {
        ...n(t, r),
        className: Be("chakra-popover__body", t.className),
        __css: o.body
      }
    );
  }
);
x0.displayName = "PopoverBody";
var S0 = Ze(
  function(t, r) {
    const { onClose: n } = ba(), o = Ql();
    return /* @__PURE__ */ I.jsx(
      e0,
      {
        size: "sm",
        onClick: n,
        className: Be("chakra-popover__close-btn", t.className),
        __css: o.closeButton,
        ref: r,
        ...t
      }
    );
  }
);
S0.displayName = "PopoverCloseButton";
function UH(e) {
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
var HH = {
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
}, GH = Se(kf.section), W2 = Ze(function(t, r) {
  const { variants: n = HH, ...o } = t, { isOpen: a } = ba();
  return /* @__PURE__ */ I.jsx(
    GH,
    {
      ref: r,
      variants: UH(n),
      initial: !1,
      animate: a ? "enter" : "exit",
      ...o
    }
  );
});
W2.displayName = "PopoverTransition";
var C0 = Ze(
  function(t, r) {
    const { rootProps: n, motionProps: o, ...a } = t, { getPopoverProps: i, getPopoverPositionerProps: s, onAnimationComplete: l } = ba(), u = Ql(), c = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...u.content
    };
    return /* @__PURE__ */ I.jsx(
      Se.div,
      {
        ...s(n),
        __css: u.popper,
        className: "chakra-popover__popper",
        children: /* @__PURE__ */ I.jsx(
          W2,
          {
            ...o,
            ...i(a, r),
            onAnimationComplete: BD(
              l,
              a.onAnimationComplete
            ),
            className: Be("chakra-popover__content", t.className),
            __css: c
          }
        )
      }
    );
  }
);
C0.displayName = "PopoverContent";
var YH = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, qH = Object.defineProperty, KH = Object.defineProperties, XH = Object.getOwnPropertyDescriptors, wd = Object.getOwnPropertySymbols, U2 = Object.prototype.hasOwnProperty, H2 = Object.prototype.propertyIsEnumerable, ix = (e, t, r) => t in e ? qH(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, sx = (e, t) => {
  for (var r in t || (t = {}))
    U2.call(t, r) && ix(e, r, t[r]);
  if (wd)
    for (var r of wd(t))
      H2.call(t, r) && ix(e, r, t[r]);
  return e;
}, QH = (e, t) => KH(e, XH(t)), ZH = (e, t) => {
  var r = {};
  for (var n in e)
    U2.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && wd)
    for (var n of wd(e))
      t.indexOf(n) < 0 && H2.call(e, n) && (r[n] = e[n]);
  return r;
}, Zl = (e, t, r) => {
  const n = w.forwardRef(
    (o, a) => {
      var i = o, { color: s = "currentColor", size: l = 24, stroke: u = 2, children: c } = i, d = ZH(i, ["color", "size", "stroke", "children"]);
      return w.createElement(
        "svg",
        sx(QH(sx({
          ref: a
        }, YH), {
          width: l,
          height: l,
          stroke: s,
          strokeWidth: u,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...r.map(([f, p]) => w.createElement(f, p)), ...c || []]
      );
    }
  );
  return n.propTypes = {
    color: le.string,
    size: le.oneOfType([le.string, le.number]),
    stroke: le.oneOfType([le.string, le.number])
  }, n.displayName = `${t}`, n;
}, JH = Zl("folder", "IconFolder", [
  [
    "path",
    {
      d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ]
]), G2 = Zl("plus", "IconPlus", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M5 12l14 0", key: "svg-1" }]
]), e7 = Zl("tag", "IconTag", [
  ["path", { d: "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",
      key: "svg-1"
    }
  ]
]), t7 = Zl("trash", "IconTrash", [
  ["path", { d: "M4 7l16 0", key: "svg-0" }],
  ["path", { d: "M10 11l0 6", key: "svg-1" }],
  ["path", { d: "M14 11l0 6", key: "svg-2" }],
  [
    "path",
    { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }
  ],
  ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]
]), r7 = Zl(
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
);
let Wu;
const n7 = new Uint8Array(16);
function o7() {
  if (!Wu && (Wu = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Wu))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Wu(n7);
}
const Ct = [];
for (let e = 0; e < 256; ++e)
  Ct.push((e + 256).toString(16).slice(1));
function a7(e, t = 0) {
  return Ct[e[t + 0]] + Ct[e[t + 1]] + Ct[e[t + 2]] + Ct[e[t + 3]] + "-" + Ct[e[t + 4]] + Ct[e[t + 5]] + "-" + Ct[e[t + 6]] + Ct[e[t + 7]] + "-" + Ct[e[t + 8]] + Ct[e[t + 9]] + "-" + Ct[e[t + 10]] + Ct[e[t + 11]] + Ct[e[t + 12]] + Ct[e[t + 13]] + Ct[e[t + 14]] + Ct[e[t + 15]];
}
const i7 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), lx = {
  randomUUID: i7
};
function s7(e, t, r) {
  if (lx.randomUUID && !t && !e)
    return lx.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || o7)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    r = r || 0;
    for (let o = 0; o < 16; ++o)
      t[r + o] = n[o];
    return t;
  }
  return a7(n);
}
async function Rl(e, t) {
  const r = e + "/" + Date.now() + ".json";
  l7(r, t);
  try {
    return await (await fetch("/workspace/save_db", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ table: e, json: t })
    })).text();
  } catch (n) {
    console.error("Error saving workspace:", n);
  }
}
async function l7(e, t) {
  try {
    const n = await (await fetch("/workspace/save_backup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        file_path: e,
        json_str: t
      })
    })).text();
    return console.log(n), n;
  } catch (r) {
    console.error("Error saving workspace backup:", r);
  }
}
let tt, rn = null;
async function u7() {
  const e = async () => {
    let r = await Y2("workflows");
    r == null && (r = localStorage.getItem("workspace") ?? "{}"), tt = JSON.parse(r ?? "{}");
  }, t = async () => {
    rn = await d7();
  };
  await Promise.all([e(), t()]);
}
function em(e, t) {
  if (tt == null)
    return;
  const r = tt[e];
  if (r == null) {
    console.error("updateFlow: workflow not found", e);
    return;
  }
  const n = {
    ...r,
    ...t,
    id: e
  }, o = JSON.stringify(r), a = JSON.stringify(n);
  o !== a && (tt[e] = {
    ...tt[e],
    ...t,
    id: e,
    updateTime: Date.now()
  }, localStorage.setItem("workspace", JSON.stringify(tt)), Rl("workflows", JSON.stringify(tt)));
}
function ux(e, t) {
  if (tt == null)
    throw new Error("workspace is not loaded");
  const r = s7();
  return tt[r] = {
    id: r,
    name: t ?? "Untitled Flow",
    json: e,
    updateTime: Date.now(),
    tags: []
  }, localStorage.setItem("workspace", JSON.stringify(tt)), Rl("workflows", JSON.stringify(tt)), tt[r];
}
function cx() {
  if (tt == null)
    throw new Error("workspace is not loaded");
  return Object.values(tt).sort((e, t) => t.updateTime - e.updateTime);
}
function c7(e) {
  if (tt == null)
    throw new Error("workspace is not loaded");
  delete tt[e], localStorage.setItem("workspace", JSON.stringify(tt)), Rl("workflows", JSON.stringify(tt));
}
async function Y2(e) {
  try {
    const t = await fetch(`/workspace/get_db?table=${e}`);
    return t.ok ? await t.json() : void 0;
  } catch (t) {
    console.error("Error fetching workspace:", t);
    return;
  }
}
async function d7() {
  let e = await Y2("tags"), t = JSON.parse(e ?? "{}") ?? {};
  return {
    tags: t,
    // Expose the tags array publicly
    listAll() {
      return Object.values(t).sort((r, n) => n.updateTime - r.updateTime);
    },
    upsert(r) {
      return t[r] == null && (t[r] = {
        name: r,
        workflowIDs: [],
        updateTime: Date.now()
      }), t[r].updateTime = Date.now(), Rl("tags", JSON.stringify(t)), t[r];
    },
    delete(r) {
      delete t[r], Rl("tags", JSON.stringify(t));
    }
  };
}
const q2 = w.createContext({
  curFlowID: null
});
function dx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dx(Object(r), !0).forEach(function(n) {
      z(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function f7(e) {
  if (Array.isArray(e))
    return e;
}
function p7(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, i, s = [], l = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        l = !1;
      } else
        for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0)
          ;
    } catch (c) {
      u = !0, o = c;
    } finally {
      try {
        if (!l && r.return != null && (i = r.return(), Object(i) !== i))
          return;
      } finally {
        if (u)
          throw o;
      }
    }
    return s;
  }
}
function tm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function P0(e, t) {
  if (e) {
    if (typeof e == "string")
      return tm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return tm(e, t);
  }
}
function h7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zn(e, t) {
  return f7(e) || p7(e, t) || P0(e, t) || h7();
}
function Kn(e, t) {
  if (e == null)
    return {};
  var r = da(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
var v7 = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function m7(e) {
  var t = e.defaultInputValue, r = t === void 0 ? "" : t, n = e.defaultMenuIsOpen, o = n === void 0 ? !1 : n, a = e.defaultValue, i = a === void 0 ? null : a, s = e.inputValue, l = e.menuIsOpen, u = e.onChange, c = e.onInputChange, d = e.onMenuClose, f = e.onMenuOpen, p = e.value, m = Kn(e, v7), g = w.useState(s !== void 0 ? s : r), y = zn(g, 2), h = y[0], v = y[1], b = w.useState(l !== void 0 ? l : o), x = zn(b, 2), k = x[0], P = x[1], C = w.useState(p !== void 0 ? p : i), _ = zn(C, 2), $ = _[0], O = _[1], D = w.useCallback(function(R, N) {
    typeof u == "function" && u(R, N), O(R);
  }, [u]), H = w.useCallback(function(R, N) {
    var K;
    typeof c == "function" && (K = c(R, N)), v(K !== void 0 ? K : R);
  }, [c]), V = w.useCallback(function() {
    typeof f == "function" && f(), P(!0);
  }, [f]), L = w.useCallback(function() {
    typeof d == "function" && d(), P(!1);
  }, [d]), F = s !== void 0 ? s : h, B = l !== void 0 ? l : k, Z = p !== void 0 ? p : $;
  return re(re({}, m), {}, {
    inputValue: F,
    menuIsOpen: B,
    onChange: D,
    onInputChange: H,
    onMenuClose: L,
    onMenuOpen: V,
    value: Z
  });
}
function pe(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fx(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, RT(n.key), n);
  }
}
function he(e, t, r) {
  return t && fx(e.prototype, t), r && fx(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ye(e, t) {
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
  }), t && vd(e, t);
}
function xd(e) {
  return xd = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xd(e);
}
function g7() {
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
function Y(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function y7(e, t) {
  if (t && (wn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Y(e);
}
function be(e) {
  var t = g7();
  return function() {
    var n = xd(e), o;
    if (t) {
      var a = xd(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else
      o = n.apply(this, arguments);
    return y7(this, o);
  };
}
function b7(e) {
  if (Array.isArray(e))
    return tm(e);
}
function w7(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function x7() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K2(e) {
  return b7(e) || w7(e) || P0(e) || x7();
}
function S7(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const C7 = Math.min, P7 = Math.max, Sd = Math.round, Uu = Math.floor, Cd = (e) => ({
  x: e,
  y: e
});
function k7(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function X2(e) {
  return Z2(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Xr(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Q2(e) {
  var t;
  return (t = (Z2(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Z2(e) {
  return e instanceof Node || e instanceof Xr(e).Node;
}
function rm(e) {
  return e instanceof Element || e instanceof Xr(e).Element;
}
function k0(e) {
  return e instanceof HTMLElement || e instanceof Xr(e).HTMLElement;
}
function px(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Xr(e).ShadowRoot;
}
function J2(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = _0(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o);
}
function _7() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function T7(e) {
  return ["html", "body", "#document"].includes(X2(e));
}
function _0(e) {
  return Xr(e).getComputedStyle(e);
}
function E7(e) {
  if (X2(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    px(e) && e.host || // Fallback.
    Q2(e)
  );
  return px(t) ? t.host : t;
}
function eE(e) {
  const t = E7(e);
  return T7(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : k0(t) && J2(t) ? t : eE(t);
}
function Pd(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = eE(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Xr(o);
  return a ? t.concat(i, i.visualViewport || [], J2(o) ? o : [], i.frameElement && r ? Pd(i.frameElement) : []) : t.concat(o, Pd(o, [], r));
}
function $7(e) {
  const t = _0(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = k0(e), a = o ? e.offsetWidth : r, i = o ? e.offsetHeight : n, s = Sd(r) !== a || Sd(n) !== i;
  return s && (r = a, n = i), {
    width: r,
    height: n,
    $: s
  };
}
function T0(e) {
  return rm(e) ? e : e.contextElement;
}
function dh(e) {
  const t = T0(e);
  if (!k0(t))
    return Cd(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = $7(t);
  let i = (a ? Sd(r.width) : r.width) / n, s = (a ? Sd(r.height) : r.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const O7 = /* @__PURE__ */ Cd(0);
function M7(e) {
  const t = Xr(e);
  return !_7() || !t.visualViewport ? O7 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function I7(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== Xr(e) ? !1 : t;
}
function hx(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), a = T0(e);
  let i = Cd(1);
  t && (n ? rm(n) && (i = dh(n)) : i = dh(e));
  const s = I7(a, r, n) ? M7(a) : Cd(0);
  let l = (o.left + s.x) / i.x, u = (o.top + s.y) / i.y, c = o.width / i.x, d = o.height / i.y;
  if (a) {
    const f = Xr(a), p = n && rm(n) ? Xr(n) : n;
    let m = f.frameElement;
    for (; m && n && p !== f; ) {
      const g = dh(m), y = m.getBoundingClientRect(), h = _0(m), v = y.left + (m.clientLeft + parseFloat(h.paddingLeft)) * g.x, b = y.top + (m.clientTop + parseFloat(h.paddingTop)) * g.y;
      l *= g.x, u *= g.y, c *= g.x, d *= g.y, l += v, u += b, m = Xr(m).frameElement;
    }
  }
  return k7({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function R7(e, t) {
  let r = null, n;
  const o = Q2(e);
  function a() {
    clearTimeout(n), r && r.disconnect(), r = null;
  }
  function i(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), a();
    const {
      left: u,
      top: c,
      width: d,
      height: f
    } = e.getBoundingClientRect();
    if (s || t(), !d || !f)
      return;
    const p = Uu(c), m = Uu(o.clientWidth - (u + d)), g = Uu(o.clientHeight - (c + f)), y = Uu(u), v = {
      rootMargin: -p + "px " + -m + "px " + -g + "px " + -y + "px",
      threshold: P7(0, C7(1, l)) || 1
    };
    let b = !0;
    function x(k) {
      const P = k[0].intersectionRatio;
      if (P !== l) {
        if (!b)
          return i();
        P ? i(!1, P) : n = setTimeout(() => {
          i(!1, 1e-7);
        }, 100);
      }
      b = !1;
    }
    try {
      r = new IntersectionObserver(x, {
        ...v,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(x, v);
    }
    r.observe(e);
  }
  return i(!0), a;
}
function D7(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, u = T0(e), c = o || a ? [...u ? Pd(u) : [], ...Pd(t)] : [];
  c.forEach((h) => {
    o && h.addEventListener("scroll", r, {
      passive: !0
    }), a && h.addEventListener("resize", r);
  });
  const d = u && s ? R7(u, r) : null;
  let f = -1, p = null;
  i && (p = new ResizeObserver((h) => {
    let [v] = h;
    v && v.target === u && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), r();
  }), u && !l && p.observe(u), p.observe(t));
  let m, g = l ? hx(e) : null;
  l && y();
  function y() {
    const h = hx(e);
    g && (h.x !== g.x || h.y !== g.y || h.width !== g.width || h.height !== g.height) && r(), g = h, m = requestAnimationFrame(y);
  }
  return r(), () => {
    c.forEach((h) => {
      o && h.removeEventListener("scroll", r), a && h.removeEventListener("resize", r);
    }), d && d(), p && p.disconnect(), p = null, l && cancelAnimationFrame(m);
  };
}
var nm = w.useLayoutEffect, A7 = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], kd = function() {
};
function F7(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function L7(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    n[o - 2] = arguments[o];
  var a = [].concat(n);
  if (t && e)
    for (var i in t)
      t.hasOwnProperty(i) && t[i] && a.push("".concat(F7(e, i)));
  return a.filter(function(s) {
    return s;
  }).map(function(s) {
    return String(s).trim();
  }).join(" ");
}
var vx = function(t) {
  return G7(t) ? t.filter(Boolean) : wn(t) === "object" && t !== null ? [t] : [];
}, tE = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var r = Kn(t, A7);
  return re({}, r);
}, nt = function(t, r, n) {
  var o = t.cx, a = t.getStyles, i = t.getClassNames, s = t.className;
  return {
    css: a(r, t),
    className: o(n ?? {}, i(r, t), s)
  };
};
function Of(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function N7(e) {
  return Of(e) ? window.innerHeight : e.clientHeight;
}
function rE(e) {
  return Of(e) ? window.pageYOffset : e.scrollTop;
}
function _d(e, t) {
  if (Of(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function z7(e) {
  var t = getComputedStyle(e), r = t.position === "absolute", n = /(auto|scroll)/;
  if (t.position === "fixed")
    return document.documentElement;
  for (var o = e; o = o.parentElement; )
    if (t = getComputedStyle(o), !(r && t.position === "static") && n.test(t.overflow + t.overflowY + t.overflowX))
      return o;
  return document.documentElement;
}
function j7(e, t, r, n) {
  return r * ((e = e / n - 1) * e * e + 1) + t;
}
function Hu(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : kd, o = rE(e), a = t - o, i = 10, s = 0;
  function l() {
    s += i;
    var u = j7(s, o, a, r);
    _d(e, u), s < r ? window.requestAnimationFrame(l) : n(e);
  }
  l();
}
function mx(e, t) {
  var r = e.getBoundingClientRect(), n = t.getBoundingClientRect(), o = t.offsetHeight / 3;
  n.bottom + o > r.bottom ? _d(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + o, e.scrollHeight)) : n.top - o < r.top && _d(e, Math.max(t.offsetTop - o, 0));
}
function V7(e) {
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
function gx() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function B7() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var nE = !1, W7 = {
  get passive() {
    return nE = !0;
  }
}, Gu = typeof window < "u" ? window : {};
Gu.addEventListener && Gu.removeEventListener && (Gu.addEventListener("p", kd, W7), Gu.removeEventListener("p", kd, !1));
var U7 = nE;
function H7(e) {
  return e != null;
}
function G7(e) {
  return Array.isArray(e);
}
function Yu(e, t, r) {
  return e ? t : r;
}
var Y7 = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    n[o - 1] = arguments[o];
  var a = Object.entries(t).filter(function(i) {
    var s = zn(i, 1), l = s[0];
    return !n.includes(l);
  });
  return a.reduce(function(i, s) {
    var l = zn(s, 2), u = l[0], c = l[1];
    return i[u] = c, i;
  }, {});
}, q7 = ["children", "innerProps"], K7 = ["children", "innerProps"];
function X7(e) {
  var t = e.maxHeight, r = e.menuEl, n = e.minHeight, o = e.placement, a = e.shouldScroll, i = e.isFixedPosition, s = e.controlHeight, l = z7(r), u = {
    placement: "bottom",
    maxHeight: t
  };
  if (!r || !r.offsetParent)
    return u;
  var c = l.getBoundingClientRect(), d = c.height, f = r.getBoundingClientRect(), p = f.bottom, m = f.height, g = f.top, y = r.offsetParent.getBoundingClientRect(), h = y.top, v = i ? window.innerHeight : N7(l), b = rE(l), x = parseInt(getComputedStyle(r).marginBottom, 10), k = parseInt(getComputedStyle(r).marginTop, 10), P = h - k, C = v - g, _ = P + b, $ = d - b - g, O = p - v + b + x, D = b + g - k, H = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (C >= m)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if ($ >= m && !i)
        return a && Hu(l, O, H), {
          placement: "bottom",
          maxHeight: t
        };
      if (!i && $ >= n || i && C >= n) {
        a && Hu(l, O, H);
        var V = i ? C - x : $ - x;
        return {
          placement: "bottom",
          maxHeight: V
        };
      }
      if (o === "auto" || i) {
        var L = t, F = i ? P : _;
        return F >= n && (L = Math.min(F - x - s, t)), {
          placement: "top",
          maxHeight: L
        };
      }
      if (o === "bottom")
        return a && _d(l, O), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (P >= m)
        return {
          placement: "top",
          maxHeight: t
        };
      if (_ >= m && !i)
        return a && Hu(l, D, H), {
          placement: "top",
          maxHeight: t
        };
      if (!i && _ >= n || i && P >= n) {
        var B = t;
        return (!i && _ >= n || i && P >= n) && (B = i ? P - k : _ - k), a && Hu(l, D, H), {
          placement: "top",
          maxHeight: B
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
function Q7(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var oE = function(t) {
  return t === "auto" ? "bottom" : t;
}, Z7 = function(t, r) {
  var n, o = t.placement, a = t.theme, i = a.borderRadius, s = a.spacing, l = a.colors;
  return re((n = {
    label: "menu"
  }, z(n, Q7(o), "100%"), z(n, "position", "absolute"), z(n, "width", "100%"), z(n, "zIndex", 1), n), r ? {} : {
    backgroundColor: l.neutral0,
    borderRadius: i,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: s.menuGutter,
    marginTop: s.menuGutter
  });
}, aE = /* @__PURE__ */ w.createContext(null), J7 = function(t) {
  var r = t.children, n = t.minMenuHeight, o = t.maxMenuHeight, a = t.menuPlacement, i = t.menuPosition, s = t.menuShouldScrollIntoView, l = t.theme, u = w.useContext(aE) || {}, c = u.setPortalPlacement, d = w.useRef(null), f = w.useState(o), p = zn(f, 2), m = p[0], g = p[1], y = w.useState(null), h = zn(y, 2), v = h[0], b = h[1], x = l.spacing.controlHeight;
  return nm(function() {
    var k = d.current;
    if (k) {
      var P = i === "fixed", C = s && !P, _ = X7({
        maxHeight: o,
        menuEl: k,
        minHeight: n,
        placement: a,
        shouldScroll: C,
        isFixedPosition: P,
        controlHeight: x
      });
      g(_.maxHeight), b(_.placement), c == null || c(_.placement);
    }
  }, [o, a, i, s, n, c, x]), r({
    ref: d,
    placerProps: re(re({}, t), {}, {
      placement: v || oE(a),
      maxHeight: m
    })
  });
}, eG = function(t) {
  var r = t.children, n = t.innerRef, o = t.innerProps;
  return oe("div", X({}, nt(t, "menu", {
    menu: !0
  }), {
    ref: n
  }, o), r);
}, tG = eG, rG = function(t, r) {
  var n = t.maxHeight, o = t.theme.spacing.baseUnit;
  return re({
    maxHeight: n,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, r ? {} : {
    paddingBottom: o,
    paddingTop: o
  });
}, nG = function(t) {
  var r = t.children, n = t.innerProps, o = t.innerRef, a = t.isMulti;
  return oe("div", X({}, nt(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": a
  }), {
    ref: o
  }, n), r);
}, iE = function(t, r) {
  var n = t.theme, o = n.spacing.baseUnit, a = n.colors;
  return re({
    textAlign: "center"
  }, r ? {} : {
    color: a.neutral40,
    padding: "".concat(o * 2, "px ").concat(o * 3, "px")
  });
}, oG = iE, aG = iE, iG = function(t) {
  var r = t.children, n = r === void 0 ? "No options" : r, o = t.innerProps, a = Kn(t, q7);
  return oe("div", X({}, nt(re(re({}, a), {}, {
    children: n,
    innerProps: o
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), o), n);
}, sG = function(t) {
  var r = t.children, n = r === void 0 ? "Loading..." : r, o = t.innerProps, a = Kn(t, K7);
  return oe("div", X({}, nt(re(re({}, a), {}, {
    children: n,
    innerProps: o
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), o), n);
}, lG = function(t) {
  var r = t.rect, n = t.offset, o = t.position;
  return {
    left: r.left,
    position: o,
    top: n,
    width: r.width,
    zIndex: 1
  };
}, uG = function(t) {
  var r = t.appendTo, n = t.children, o = t.controlElement, a = t.innerProps, i = t.menuPlacement, s = t.menuPosition, l = w.useRef(null), u = w.useRef(null), c = w.useState(oE(i)), d = zn(c, 2), f = d[0], p = d[1], m = w.useMemo(function() {
    return {
      setPortalPlacement: p
    };
  }, []), g = w.useState(null), y = zn(g, 2), h = y[0], v = y[1], b = w.useCallback(function() {
    if (o) {
      var C = V7(o), _ = s === "fixed" ? 0 : window.pageYOffset, $ = C[f] + _;
      ($ !== (h == null ? void 0 : h.offset) || C.left !== (h == null ? void 0 : h.rect.left) || C.width !== (h == null ? void 0 : h.rect.width)) && v({
        offset: $,
        rect: C
      });
    }
  }, [o, s, f, h == null ? void 0 : h.offset, h == null ? void 0 : h.rect.left, h == null ? void 0 : h.rect.width]);
  nm(function() {
    b();
  }, [b]);
  var x = w.useCallback(function() {
    typeof u.current == "function" && (u.current(), u.current = null), o && l.current && (u.current = D7(o, l.current, b, {
      elementResize: "ResizeObserver" in window
    }));
  }, [o, b]);
  nm(function() {
    x();
  }, [x]);
  var k = w.useCallback(function(C) {
    l.current = C, x();
  }, [x]);
  if (!r && s !== "fixed" || !h)
    return null;
  var P = oe("div", X({
    ref: k
  }, nt(re(re({}, t), {}, {
    offset: h.offset,
    position: s,
    rect: h.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), a), n);
  return oe(aE.Provider, {
    value: m
  }, r ? /* @__PURE__ */ zl.createPortal(P, r) : P);
}, cG = function(t) {
  var r = t.isDisabled, n = t.isRtl;
  return {
    label: "container",
    direction: n ? "rtl" : void 0,
    pointerEvents: r ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, dG = function(t) {
  var r = t.children, n = t.innerProps, o = t.isDisabled, a = t.isRtl;
  return oe("div", X({}, nt(t, "container", {
    "--is-disabled": o,
    "--is-rtl": a
  }), n), r);
}, fG = function(t, r) {
  var n = t.theme.spacing, o = t.isMulti, a = t.hasValue, i = t.selectProps.controlShouldRenderValue;
  return re({
    alignItems: "center",
    display: o && a && i ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, r ? {} : {
    padding: "".concat(n.baseUnit / 2, "px ").concat(n.baseUnit * 2, "px")
  });
}, pG = function(t) {
  var r = t.children, n = t.innerProps, o = t.isMulti, a = t.hasValue;
  return oe("div", X({}, nt(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": o,
    "value-container--has-value": a
  }), n), r);
}, hG = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, vG = function(t) {
  var r = t.children, n = t.innerProps;
  return oe("div", X({}, nt(t, "indicatorsContainer", {
    indicators: !0
  }), n), r);
}, yx, mG = ["size"], gG = ["innerProps", "isRtl", "size"], yG = {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
}, sE = function(t) {
  var r = t.size, n = Kn(t, mG);
  return oe("svg", X({
    height: r,
    width: r,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: yG
  }, n));
}, E0 = function(t) {
  return oe(sE, X({
    size: 20
  }, t), oe("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, lE = function(t) {
  return oe(sE, X({
    size: 20
  }, t), oe("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, uE = function(t, r) {
  var n = t.isFocused, o = t.theme, a = o.spacing.baseUnit, i = o.colors;
  return re({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, r ? {} : {
    color: n ? i.neutral60 : i.neutral20,
    padding: a * 2,
    ":hover": {
      color: n ? i.neutral80 : i.neutral40
    }
  });
}, bG = uE, wG = function(t) {
  var r = t.children, n = t.innerProps;
  return oe("div", X({}, nt(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), n), r || oe(lE, null));
}, xG = uE, SG = function(t) {
  var r = t.children, n = t.innerProps;
  return oe("div", X({}, nt(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), n), r || oe(E0, null));
}, CG = function(t, r) {
  var n = t.isDisabled, o = t.theme, a = o.spacing.baseUnit, i = o.colors;
  return re({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, r ? {} : {
    backgroundColor: n ? i.neutral10 : i.neutral20,
    marginBottom: a * 2,
    marginTop: a * 2
  });
}, PG = function(t) {
  var r = t.innerProps;
  return oe("span", X({}, r, nt(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, kG = bk(yx || (yx = S7([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), _G = function(t, r) {
  var n = t.isFocused, o = t.size, a = t.theme, i = a.colors, s = a.spacing.baseUnit;
  return re({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: o,
    lineHeight: 1,
    marginRight: o,
    textAlign: "center",
    verticalAlign: "middle"
  }, r ? {} : {
    color: n ? i.neutral60 : i.neutral20,
    padding: s * 2
  });
}, fh = function(t) {
  var r = t.delay, n = t.offset;
  return oe("span", {
    css: /* @__PURE__ */ bg({
      animation: "".concat(kG, " 1s ease-in-out ").concat(r, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: n ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, "", "")
  });
}, TG = function(t) {
  var r = t.innerProps, n = t.isRtl, o = t.size, a = o === void 0 ? 4 : o, i = Kn(t, gG);
  return oe("div", X({}, nt(re(re({}, i), {}, {
    innerProps: r,
    isRtl: n,
    size: a
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), r), oe(fh, {
    delay: 0,
    offset: n
  }), oe(fh, {
    delay: 160,
    offset: !0
  }), oe(fh, {
    delay: 320,
    offset: !n
  }));
}, EG = function(t, r) {
  var n = t.isDisabled, o = t.isFocused, a = t.theme, i = a.colors, s = a.borderRadius, l = a.spacing;
  return re({
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
  }, r ? {} : {
    backgroundColor: n ? i.neutral5 : i.neutral0,
    borderColor: n ? i.neutral10 : o ? i.primary : i.neutral20,
    borderRadius: s,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: o ? "0 0 0 1px ".concat(i.primary) : void 0,
    "&:hover": {
      borderColor: o ? i.primary : i.neutral30
    }
  });
}, $G = function(t) {
  var r = t.children, n = t.isDisabled, o = t.isFocused, a = t.innerRef, i = t.innerProps, s = t.menuIsOpen;
  return oe("div", X({
    ref: a
  }, nt(t, "control", {
    control: !0,
    "control--is-disabled": n,
    "control--is-focused": o,
    "control--menu-is-open": s
  }), i, {
    "aria-disabled": n || void 0
  }), r);
}, OG = $G, MG = ["data"], IG = function(t, r) {
  var n = t.theme.spacing;
  return r ? {} : {
    paddingBottom: n.baseUnit * 2,
    paddingTop: n.baseUnit * 2
  };
}, RG = function(t) {
  var r = t.children, n = t.cx, o = t.getStyles, a = t.getClassNames, i = t.Heading, s = t.headingProps, l = t.innerProps, u = t.label, c = t.theme, d = t.selectProps;
  return oe("div", X({}, nt(t, "group", {
    group: !0
  }), l), oe(i, X({}, s, {
    selectProps: d,
    theme: c,
    getStyles: o,
    getClassNames: a,
    cx: n
  }), u), oe("div", null, r));
}, DG = function(t, r) {
  var n = t.theme, o = n.colors, a = n.spacing;
  return re({
    label: "group",
    cursor: "default",
    display: "block"
  }, r ? {} : {
    color: o.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: a.baseUnit * 3,
    paddingRight: a.baseUnit * 3,
    textTransform: "uppercase"
  });
}, AG = function(t) {
  var r = tE(t);
  r.data;
  var n = Kn(r, MG);
  return oe("div", X({}, nt(t, "groupHeading", {
    "group-heading": !0
  }), n));
}, FG = RG, LG = ["innerRef", "isDisabled", "isHidden", "inputClassName"], NG = function(t, r) {
  var n = t.isDisabled, o = t.value, a = t.theme, i = a.spacing, s = a.colors;
  return re(re({
    visibility: n ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : ""
  }, zG), r ? {} : {
    margin: i.baseUnit / 2,
    paddingBottom: i.baseUnit / 2,
    paddingTop: i.baseUnit / 2,
    color: s.neutral80
  });
}, cE = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, zG = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": re({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, cE)
}, jG = function(t) {
  return re({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, cE);
}, VG = function(t) {
  var r = t.cx, n = t.value, o = tE(t), a = o.innerRef, i = o.isDisabled, s = o.isHidden, l = o.inputClassName, u = Kn(o, LG);
  return oe("div", X({}, nt(t, "input", {
    "input-container": !0
  }), {
    "data-value": n || ""
  }), oe("input", X({
    className: r({
      input: !0
    }, l),
    ref: a,
    style: jG(s),
    disabled: i
  }, u)));
}, BG = VG, WG = function(t, r) {
  var n = t.theme, o = n.spacing, a = n.borderRadius, i = n.colors;
  return re({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, r ? {} : {
    backgroundColor: i.neutral10,
    borderRadius: a / 2,
    margin: o.baseUnit / 2
  });
}, UG = function(t, r) {
  var n = t.theme, o = n.borderRadius, a = n.colors, i = t.cropWithEllipsis;
  return re({
    overflow: "hidden",
    textOverflow: i || i === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, r ? {} : {
    borderRadius: o / 2,
    color: a.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, HG = function(t, r) {
  var n = t.theme, o = n.spacing, a = n.borderRadius, i = n.colors, s = t.isFocused;
  return re({
    alignItems: "center",
    display: "flex"
  }, r ? {} : {
    borderRadius: a / 2,
    backgroundColor: s ? i.dangerLight : void 0,
    paddingLeft: o.baseUnit,
    paddingRight: o.baseUnit,
    ":hover": {
      backgroundColor: i.dangerLight,
      color: i.danger
    }
  });
}, dE = function(t) {
  var r = t.children, n = t.innerProps;
  return oe("div", n, r);
}, GG = dE, YG = dE;
function qG(e) {
  var t = e.children, r = e.innerProps;
  return oe("div", X({
    role: "button"
  }, r), t || oe(E0, {
    size: 14
  }));
}
var KG = function(t) {
  var r = t.children, n = t.components, o = t.data, a = t.innerProps, i = t.isDisabled, s = t.removeProps, l = t.selectProps, u = n.Container, c = n.Label, d = n.Remove;
  return oe(u, {
    data: o,
    innerProps: re(re({}, nt(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": i
    })), a),
    selectProps: l
  }, oe(c, {
    data: o,
    innerProps: re({}, nt(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: l
  }, r), oe(d, {
    data: o,
    innerProps: re(re({}, nt(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(r || "option")
    }, s),
    selectProps: l
  }));
}, XG = KG, QG = function(t, r) {
  var n = t.isDisabled, o = t.isFocused, a = t.isSelected, i = t.theme, s = i.spacing, l = i.colors;
  return re({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, r ? {} : {
    backgroundColor: a ? l.primary : o ? l.primary25 : "transparent",
    color: n ? l.neutral20 : a ? l.neutral0 : "inherit",
    padding: "".concat(s.baseUnit * 2, "px ").concat(s.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: n ? void 0 : a ? l.primary : l.primary50
    }
  });
}, ZG = function(t) {
  var r = t.children, n = t.isDisabled, o = t.isFocused, a = t.isSelected, i = t.innerRef, s = t.innerProps;
  return oe("div", X({}, nt(t, "option", {
    option: !0,
    "option--is-disabled": n,
    "option--is-focused": o,
    "option--is-selected": a
  }), {
    ref: i,
    "aria-disabled": n
  }, s), r);
}, JG = ZG, eY = function(t, r) {
  var n = t.theme, o = n.spacing, a = n.colors;
  return re({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, r ? {} : {
    color: a.neutral50,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, tY = function(t) {
  var r = t.children, n = t.innerProps;
  return oe("div", X({}, nt(t, "placeholder", {
    placeholder: !0
  }), n), r);
}, rY = tY, nY = function(t, r) {
  var n = t.isDisabled, o = t.theme, a = o.spacing, i = o.colors;
  return re({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, r ? {} : {
    color: n ? i.neutral40 : i.neutral80,
    marginLeft: a.baseUnit / 2,
    marginRight: a.baseUnit / 2
  });
}, oY = function(t) {
  var r = t.children, n = t.isDisabled, o = t.innerProps;
  return oe("div", X({}, nt(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": n
  }), o), r);
}, aY = oY, iY = {
  ClearIndicator: SG,
  Control: OG,
  DropdownIndicator: wG,
  DownChevron: lE,
  CrossIcon: E0,
  Group: FG,
  GroupHeading: AG,
  IndicatorsContainer: vG,
  IndicatorSeparator: PG,
  Input: BG,
  LoadingIndicator: TG,
  Menu: tG,
  MenuList: nG,
  MenuPortal: uG,
  LoadingMessage: sG,
  NoOptionsMessage: iG,
  MultiValue: XG,
  MultiValueContainer: GG,
  MultiValueLabel: YG,
  MultiValueRemove: qG,
  Option: JG,
  Placeholder: rY,
  SelectContainer: dG,
  SingleValue: aY,
  ValueContainer: pG
}, sY = function(t) {
  return re(re({}, iY), t.components);
}, bx = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function lY(e, t) {
  return !!(e === t || bx(e) && bx(t));
}
function uY(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!lY(e[r], t[r]))
      return !1;
  return !0;
}
function cY(e, t) {
  t === void 0 && (t = uY);
  var r = null;
  function n() {
    for (var o = [], a = 0; a < arguments.length; a++)
      o[a] = arguments[a];
    if (r && r.lastThis === this && t(o, r.lastArgs))
      return r.lastResult;
    var i = e.apply(this, o);
    return r = {
      lastResult: i,
      lastArgs: o,
      lastThis: this
    }, i;
  }
  return n.clear = function() {
    r = null;
  }, n;
}
var dY = {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
}, fY = function(t) {
  return oe("span", X({
    css: dY
  }, t));
}, wx = fY, pY = {
  guidance: function(t) {
    var r = t.isSearchable, n = t.isMulti, o = t.isDisabled, a = t.tabSelectsValue, i = t.context;
    switch (i) {
      case "menu":
        return "Use Up and Down to choose options".concat(o ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(a ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return "".concat(t["aria-label"] || "Select", " is focused ").concat(r ? ",type to refine list" : "", ", press Down to open the menu, ").concat(n ? " press left to focus selected values" : "");
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(t) {
    var r = t.action, n = t.label, o = n === void 0 ? "" : n, a = t.labels, i = t.isDisabled;
    switch (r) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(o, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(a.length > 1 ? "s" : "", " ").concat(a.join(","), ", selected.");
      case "select-option":
        return i ? "option ".concat(o, " is disabled. Select another option.") : "option ".concat(o, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(t) {
    var r = t.context, n = t.focused, o = t.options, a = t.label, i = a === void 0 ? "" : a, s = t.selectValue, l = t.isDisabled, u = t.isSelected, c = function(m, g) {
      return m && m.length ? "".concat(m.indexOf(g) + 1, " of ").concat(m.length) : "";
    };
    if (r === "value" && s)
      return "value ".concat(i, " focused, ").concat(c(s, n), ".");
    if (r === "menu") {
      var d = l ? " disabled" : "", f = "".concat(u ? "selected" : "focused").concat(d);
      return "option ".concat(i, " ").concat(f, ", ").concat(c(o, n), ".");
    }
    return "";
  },
  onFilter: function(t) {
    var r = t.inputValue, n = t.resultsMessage;
    return "".concat(n).concat(r ? " for search term " + r : "", ".");
  }
}, hY = function(t) {
  var r = t.ariaSelection, n = t.focusedOption, o = t.focusedValue, a = t.focusableOptions, i = t.isFocused, s = t.selectValue, l = t.selectProps, u = t.id, c = l.ariaLiveMessages, d = l.getOptionLabel, f = l.inputValue, p = l.isMulti, m = l.isOptionDisabled, g = l.isSearchable, y = l.menuIsOpen, h = l.options, v = l.screenReaderStatus, b = l.tabSelectsValue, x = l["aria-label"], k = l["aria-live"], P = w.useMemo(function() {
    return re(re({}, pY), c || {});
  }, [c]), C = w.useMemo(function() {
    var L = "";
    if (r && P.onChange) {
      var F = r.option, B = r.options, Z = r.removedValue, R = r.removedValues, N = r.value, K = function(ue) {
        return Array.isArray(ue) ? null : ue;
      }, W = Z || F || K(N), Q = W ? d(W) : "", j = B || R || void 0, J = j ? j.map(d) : [], ce = re({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: W && m(W, s),
        label: Q,
        labels: J
      }, r);
      L = P.onChange(ce);
    }
    return L;
  }, [r, P, m, s, d]), _ = w.useMemo(function() {
    var L = "", F = n || o, B = !!(n && s && s.includes(n));
    if (F && P.onFocus) {
      var Z = {
        focused: F,
        label: d(F),
        isDisabled: m(F, s),
        isSelected: B,
        options: a,
        context: F === n ? "menu" : "value",
        selectValue: s
      };
      L = P.onFocus(Z);
    }
    return L;
  }, [n, o, d, m, P, a, s]), $ = w.useMemo(function() {
    var L = "";
    if (y && h.length && P.onFilter) {
      var F = v({
        count: a.length
      });
      L = P.onFilter({
        inputValue: f,
        resultsMessage: F
      });
    }
    return L;
  }, [a, f, y, P, h, v]), O = w.useMemo(function() {
    var L = "";
    if (P.guidance) {
      var F = o ? "value" : y ? "menu" : "input";
      L = P.guidance({
        "aria-label": x,
        context: F,
        isDisabled: n && m(n, s),
        isMulti: p,
        isSearchable: g,
        tabSelectsValue: b
      });
    }
    return L;
  }, [x, n, o, p, m, g, y, P, s, b]), D = "".concat(_, " ").concat($, " ").concat(O), H = oe(w.Fragment, null, oe("span", {
    id: "aria-selection"
  }, C), oe("span", {
    id: "aria-context"
  }, D)), V = (r == null ? void 0 : r.action) === "initial-input-focus";
  return oe(w.Fragment, null, oe(wx, {
    id: u
  }, V && H), oe(wx, {
    "aria-live": k,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, i && !V && H));
}, vY = hY, om = [{
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
}], mY = new RegExp("[" + om.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), fE = {};
for (var ph = 0; ph < om.length; ph++)
  for (var hh = om[ph], vh = 0; vh < hh.letters.length; vh++)
    fE[hh.letters[vh]] = hh.base;
var pE = function(t) {
  return t.replace(mY, function(r) {
    return fE[r];
  });
}, gY = cY(pE), xx = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, yY = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, bY = function(t) {
  return function(r, n) {
    if (r.data.__isNew__)
      return !0;
    var o = re({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: yY,
      trim: !0,
      matchFrom: "any"
    }, t), a = o.ignoreCase, i = o.ignoreAccents, s = o.stringify, l = o.trim, u = o.matchFrom, c = l ? xx(n) : n, d = l ? xx(s(r)) : s(r);
    return a && (c = c.toLowerCase(), d = d.toLowerCase()), i && (c = gY(c), d = pE(d)), u === "start" ? d.substr(0, c.length) === c : d.indexOf(c) > -1;
  };
}, wY = ["innerRef"];
function xY(e) {
  var t = e.innerRef, r = Kn(e, wY), n = Y7(r, "onExited", "in", "enter", "exit", "appear");
  return oe("input", X({
    ref: t
  }, n, {
    css: /* @__PURE__ */ bg({
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
var SY = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function CY(e) {
  var t = e.isEnabled, r = e.onBottomArrive, n = e.onBottomLeave, o = e.onTopArrive, a = e.onTopLeave, i = w.useRef(!1), s = w.useRef(!1), l = w.useRef(0), u = w.useRef(null), c = w.useCallback(function(y, h) {
    if (u.current !== null) {
      var v = u.current, b = v.scrollTop, x = v.scrollHeight, k = v.clientHeight, P = u.current, C = h > 0, _ = x - k - b, $ = !1;
      _ > h && i.current && (n && n(y), i.current = !1), C && s.current && (a && a(y), s.current = !1), C && h > _ ? (r && !i.current && r(y), P.scrollTop = x, $ = !0, i.current = !0) : !C && -h > b && (o && !s.current && o(y), P.scrollTop = 0, $ = !0, s.current = !0), $ && SY(y);
    }
  }, [r, n, o, a]), d = w.useCallback(function(y) {
    c(y, y.deltaY);
  }, [c]), f = w.useCallback(function(y) {
    l.current = y.changedTouches[0].clientY;
  }, []), p = w.useCallback(function(y) {
    var h = l.current - y.changedTouches[0].clientY;
    c(y, h);
  }, [c]), m = w.useCallback(function(y) {
    if (y) {
      var h = U7 ? {
        passive: !1
      } : !1;
      y.addEventListener("wheel", d, h), y.addEventListener("touchstart", f, h), y.addEventListener("touchmove", p, h);
    }
  }, [p, f, d]), g = w.useCallback(function(y) {
    y && (y.removeEventListener("wheel", d, !1), y.removeEventListener("touchstart", f, !1), y.removeEventListener("touchmove", p, !1));
  }, [p, f, d]);
  return w.useEffect(function() {
    if (t) {
      var y = u.current;
      return m(y), function() {
        g(y);
      };
    }
  }, [t, m, g]), function(y) {
    u.current = y;
  };
}
var Sx = ["boxSizing", "height", "overflow", "paddingRight", "position"], Cx = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function Px(e) {
  e.preventDefault();
}
function kx(e) {
  e.stopPropagation();
}
function _x() {
  var e = this.scrollTop, t = this.scrollHeight, r = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : r === t && (this.scrollTop = e - 1);
}
function Tx() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var Ex = !!(typeof window < "u" && window.document && window.document.createElement), ms = 0, Ia = {
  capture: !1,
  passive: !1
};
function PY(e) {
  var t = e.isEnabled, r = e.accountForScrollbars, n = r === void 0 ? !0 : r, o = w.useRef({}), a = w.useRef(null), i = w.useCallback(function(l) {
    if (Ex) {
      var u = document.body, c = u && u.style;
      if (n && Sx.forEach(function(m) {
        var g = c && c[m];
        o.current[m] = g;
      }), n && ms < 1) {
        var d = parseInt(o.current.paddingRight, 10) || 0, f = document.body ? document.body.clientWidth : 0, p = window.innerWidth - f + d || 0;
        Object.keys(Cx).forEach(function(m) {
          var g = Cx[m];
          c && (c[m] = g);
        }), c && (c.paddingRight = "".concat(p, "px"));
      }
      u && Tx() && (u.addEventListener("touchmove", Px, Ia), l && (l.addEventListener("touchstart", _x, Ia), l.addEventListener("touchmove", kx, Ia))), ms += 1;
    }
  }, [n]), s = w.useCallback(function(l) {
    if (Ex) {
      var u = document.body, c = u && u.style;
      ms = Math.max(ms - 1, 0), n && ms < 1 && Sx.forEach(function(d) {
        var f = o.current[d];
        c && (c[d] = f);
      }), u && Tx() && (u.removeEventListener("touchmove", Px, Ia), l && (l.removeEventListener("touchstart", _x, Ia), l.removeEventListener("touchmove", kx, Ia)));
    }
  }, [n]);
  return w.useEffect(function() {
    if (t) {
      var l = a.current;
      return i(l), function() {
        s(l);
      };
    }
  }, [t, i, s]), function(l) {
    a.current = l;
  };
}
var kY = function(t) {
  var r = t.target;
  return r.ownerDocument.activeElement && r.ownerDocument.activeElement.blur();
}, _Y = {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
};
function TY(e) {
  var t = e.children, r = e.lockEnabled, n = e.captureEnabled, o = n === void 0 ? !0 : n, a = e.onBottomArrive, i = e.onBottomLeave, s = e.onTopArrive, l = e.onTopLeave, u = CY({
    isEnabled: o,
    onBottomArrive: a,
    onBottomLeave: i,
    onTopArrive: s,
    onTopLeave: l
  }), c = PY({
    isEnabled: r
  }), d = function(p) {
    u(p), c(p);
  };
  return oe(w.Fragment, null, r && oe("div", {
    onClick: kY,
    css: _Y
  }), t(d));
}
var EY = {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
}, $Y = function(t) {
  var r = t.name, n = t.onFocus;
  return oe("input", {
    required: !0,
    name: r,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: n,
    css: EY,
    value: "",
    onChange: function() {
    }
  });
}, OY = $Y, MY = function(t) {
  return t.label;
}, IY = function(t) {
  return t.label;
}, RY = function(t) {
  return t.value;
}, DY = function(t) {
  return !!t.isDisabled;
}, AY = {
  clearIndicator: xG,
  container: cG,
  control: EG,
  dropdownIndicator: bG,
  group: IG,
  groupHeading: DG,
  indicatorsContainer: hG,
  indicatorSeparator: CG,
  input: NG,
  loadingIndicator: _G,
  loadingMessage: aG,
  menu: Z7,
  menuList: rG,
  menuPortal: lG,
  multiValue: WG,
  multiValueLabel: UG,
  multiValueRemove: HG,
  noOptionsMessage: oG,
  option: QG,
  placeholder: eY,
  singleValue: nY,
  valueContainer: fG
}, FY = {
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
}, LY = 4, hE = 4, NY = 38, zY = hE * 2, jY = {
  baseUnit: hE,
  controlHeight: NY,
  menuGutter: zY
}, mh = {
  borderRadius: LY,
  colors: FY,
  spacing: jY
}, VY = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: gx(),
  captureMenuScroll: !gx(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: bY(),
  formatGroupLabel: MY,
  getOptionLabel: IY,
  getOptionValue: RY,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: DY,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !B7(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(t) {
    var r = t.count;
    return "".concat(r, " result").concat(r !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function $x(e, t, r, n) {
  var o = yE(e, t, r), a = bE(e, t, r), i = gE(e, t), s = Td(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: o,
    isSelected: a,
    label: i,
    value: s,
    index: n
  };
}
function vE(e, t) {
  return e.options.map(function(r, n) {
    if ("options" in r) {
      var o = r.options.map(function(i, s) {
        return $x(e, i, t, s);
      }).filter(function(i) {
        return Ox(e, i);
      });
      return o.length > 0 ? {
        type: "group",
        data: r,
        options: o,
        index: n
      } : void 0;
    }
    var a = $x(e, r, t, n);
    return Ox(e, a) ? a : void 0;
  }).filter(H7);
}
function mE(e) {
  return e.reduce(function(t, r) {
    return r.type === "group" ? t.push.apply(t, K2(r.options.map(function(n) {
      return n.data;
    }))) : t.push(r.data), t;
  }, []);
}
function BY(e, t) {
  return mE(vE(e, t));
}
function Ox(e, t) {
  var r = e.inputValue, n = r === void 0 ? "" : r, o = t.data, a = t.isSelected, i = t.label, s = t.value;
  return (!xE(e) || !a) && wE(e, {
    label: i,
    value: s,
    data: o
  }, n);
}
function WY(e, t) {
  var r = e.focusedValue, n = e.selectValue, o = n.indexOf(r);
  if (o > -1) {
    var a = t.indexOf(r);
    if (a > -1)
      return r;
    if (o < t.length)
      return t[o];
  }
  return null;
}
function UY(e, t) {
  var r = e.focusedOption;
  return r && t.indexOf(r) > -1 ? r : t[0];
}
var gE = function(t, r) {
  return t.getOptionLabel(r);
}, Td = function(t, r) {
  return t.getOptionValue(r);
};
function yE(e, t, r) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, r) : !1;
}
function bE(e, t, r) {
  if (r.indexOf(t) > -1)
    return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, r);
  var n = Td(e, t);
  return r.some(function(o) {
    return Td(e, o) === n;
  });
}
function wE(e, t, r) {
  return e.filterOption ? e.filterOption(t, r) : !0;
}
var xE = function(t) {
  var r = t.hideSelectedOptions, n = t.isMulti;
  return r === void 0 ? n : r;
}, HY = 1, SE = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r(n) {
    var o;
    if (pe(this, r), o = t.call(this, n), o.state = {
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
      var l = o.props, u = l.blurInputOnSelect, c = l.isMulti, d = l.name, f = o.state.selectValue, p = c && o.isOptionSelected(s, f), m = o.isOptionDisabled(s, f);
      if (p) {
        var g = o.getOptionValue(s);
        o.setValue(f.filter(function(y) {
          return o.getOptionValue(y) !== g;
        }), "deselect-option", s);
      } else if (!m)
        c ? o.setValue([].concat(K2(f), [s]), "select-option", s) : o.setValue(s, "select-option");
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
      }), f = Yu(l, d, d[0] || null);
      o.onChange(f, {
        action: "remove-value",
        removedValue: s
      }), o.focusInput();
    }, o.clearValue = function() {
      var s = o.state.selectValue;
      o.onChange(Yu(o.props.isMulti, [], null), {
        action: "clear",
        removedValues: s
      });
    }, o.popValue = function() {
      var s = o.props.isMulti, l = o.state.selectValue, u = l[l.length - 1], c = l.slice(0, l.length - 1), d = Yu(s, c, c[0] || null);
      o.onChange(d, {
        action: "pop-value",
        removedValue: u
      });
    }, o.getValue = function() {
      return o.state.selectValue;
    }, o.cx = function() {
      for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
        l[u] = arguments[u];
      return L7.apply(void 0, [o.props.classNamePrefix].concat(l));
    }, o.getOptionLabel = function(s) {
      return gE(o.props, s);
    }, o.getOptionValue = function(s) {
      return Td(o.props, s);
    }, o.getStyles = function(s, l) {
      var u = o.props.unstyled, c = AY[s](l, u);
      c.boxSizing = "border-box";
      var d = o.props.styles[s];
      return d ? d(c, l) : c;
    }, o.getClassNames = function(s, l) {
      var u, c;
      return (u = (c = o.props.classNames)[s]) === null || u === void 0 ? void 0 : u.call(c, l);
    }, o.getElementId = function(s) {
      return "".concat(o.instancePrefix, "-").concat(s);
    }, o.getComponents = function() {
      return sY(o.props);
    }, o.buildCategorizedOptions = function() {
      return vE(o.props, o.state.selectValue);
    }, o.getCategorizedOptions = function() {
      return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
    }, o.buildFocusableOptions = function() {
      return mE(o.buildCategorizedOptions());
    }, o.getFocusableOptions = function() {
      return o.props.menuIsOpen ? o.buildFocusableOptions() : [];
    }, o.ariaOnChange = function(s, l) {
      o.setState({
        ariaSelection: re({
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
      typeof o.props.closeMenuOnScroll == "boolean" ? s.target instanceof HTMLElement && Of(s.target) && o.props.onMenuClose() : typeof o.props.closeMenuOnScroll == "function" && o.props.closeMenuOnScroll(s) && o.props.onMenuClose();
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
      return xE(o.props);
    }, o.onValueInputFocus = function(s) {
      s.preventDefault(), s.stopPropagation(), o.focus();
    }, o.onKeyDown = function(s) {
      var l = o.props, u = l.isMulti, c = l.backspaceRemovesValue, d = l.escapeClearsValue, f = l.inputValue, p = l.isClearable, m = l.isDisabled, g = l.menuIsOpen, y = l.onKeyDown, h = l.tabSelectsValue, v = l.openMenuOnFocus, b = o.state, x = b.focusedOption, k = b.focusedValue, P = b.selectValue;
      if (!m && !(typeof y == "function" && (y(s), s.defaultPrevented))) {
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
            if (o.isComposing || s.shiftKey || !g || !h || !x || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            v && o.isOptionSelected(x, P))
              return;
            o.selectOption(x);
            break;
          case "Enter":
            if (s.keyCode === 229)
              break;
            if (g) {
              if (!x || o.isComposing)
                return;
              o.selectOption(x);
              break;
            }
            return;
          case "Escape":
            g ? (o.setState({
              inputIsHiddenAfterUpdate: !1
            }), o.onInputChange("", {
              action: "menu-close",
              prevInputValue: f
            }), o.onMenuClose()) : p && d && o.clearValue();
            break;
          case " ":
            if (f)
              return;
            if (!g) {
              o.openMenu("first");
              break;
            }
            if (!x)
              return;
            o.selectOption(x);
            break;
          case "ArrowUp":
            g ? o.focusOption("up") : o.openMenu("last");
            break;
          case "ArrowDown":
            g ? o.focusOption("down") : o.openMenu("first");
            break;
          case "PageUp":
            if (!g)
              return;
            o.focusOption("pageup");
            break;
          case "PageDown":
            if (!g)
              return;
            o.focusOption("pagedown");
            break;
          case "Home":
            if (!g)
              return;
            o.focusOption("first");
            break;
          case "End":
            if (!g)
              return;
            o.focusOption("last");
            break;
          default:
            return;
        }
        s.preventDefault();
      }
    }, o.instancePrefix = "react-select-" + (o.props.instanceId || ++HY), o.state.selectValue = vx(n.value), n.menuIsOpen && o.state.selectValue.length) {
      var a = o.buildFocusableOptions(), i = a.indexOf(o.state.selectValue[0]);
      o.state.focusedOption = a[i];
    }
    return o;
  }
  return he(r, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && mx(this.menuListRef, this.focusedOptionRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function(o) {
      var a = this.props, i = a.isDisabled, s = a.menuIsOpen, l = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (l && !i && o.isDisabled || // ensure focus is on the Input when the menu opens
      l && s && !o.menuIsOpen) && this.focusInput(), l && i && !o.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !l && !i && o.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (mx(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
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
    value: function(o, a) {
      this.props.onInputChange(o, a);
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
      var a = this, i = this.state, s = i.selectValue, l = i.isFocused, u = this.buildFocusableOptions(), c = o === "first" ? 0 : u.length - 1;
      if (!this.props.isMulti) {
        var d = u.indexOf(s[0]);
        d > -1 && (c = d);
      }
      this.scrollToFocusedOptionOnUpdate = !(l && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: u[c]
      }, function() {
        return a.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(o) {
      var a = this.state, i = a.selectValue, s = a.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var l = i.indexOf(s);
        s || (l = -1);
        var u = i.length - 1, c = -1;
        if (i.length) {
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
            focusedValue: i[c]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", a = this.props.pageSize, i = this.state.focusedOption, s = this.getFocusableOptions();
      if (s.length) {
        var l = 0, u = s.indexOf(i);
        i || (u = -1), o === "up" ? l = u > 0 ? u - 1 : s.length - 1 : o === "down" ? l = (u + 1) % s.length : o === "pageup" ? (l = u - a, l < 0 && (l = 0)) : o === "pagedown" ? (l = u + a, l > s.length - 1 && (l = s.length - 1)) : o === "last" && (l = s.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
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
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(mh) : re(re({}, mh), this.props.theme) : mh;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var o = this.clearValue, a = this.cx, i = this.getStyles, s = this.getClassNames, l = this.getValue, u = this.selectOption, c = this.setValue, d = this.props, f = d.isMulti, p = d.isRtl, m = d.options, g = this.hasValue();
      return {
        clearValue: o,
        cx: a,
        getStyles: i,
        getClassNames: s,
        getValue: l,
        hasValue: g,
        isMulti: f,
        isRtl: p,
        options: m,
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
      var o = this.props, a = o.isClearable, i = o.isMulti;
      return a === void 0 ? i : a;
    }
  }, {
    key: "isOptionDisabled",
    value: function(o, a) {
      return yE(this.props, o, a);
    }
  }, {
    key: "isOptionSelected",
    value: function(o, a) {
      return bE(this.props, o, a);
    }
  }, {
    key: "filterOption",
    value: function(o, a) {
      return wE(this.props, o, a);
    }
  }, {
    key: "formatOptionLabel",
    value: function(o, a) {
      if (typeof this.props.formatOptionLabel == "function") {
        var i = this.props.inputValue, s = this.state.selectValue;
        return this.props.formatOptionLabel(o, {
          context: a,
          inputValue: i,
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
        var o = this.props, a = o.isDisabled, i = o.isSearchable, s = o.inputId, l = o.inputValue, u = o.tabIndex, c = o.form, d = o.menuIsOpen, f = o.required, p = this.getComponents(), m = p.Input, g = this.state, y = g.inputIsHidden, h = g.ariaSelection, v = this.commonProps, b = s || this.getElementId("input"), x = re(re(re({
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
        }), !i && {
          "aria-readonly": !0
        }), this.hasValue() ? (h == null ? void 0 : h.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return i ? /* @__PURE__ */ w.createElement(m, X({}, v, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: b,
          innerRef: this.getInputRef,
          isDisabled: a,
          isHidden: y,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: u,
          form: c,
          type: "text",
          value: l
        }, x)) : /* @__PURE__ */ w.createElement(xY, X({
          id: b,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: kd,
          onFocus: this.onInputFocus,
          disabled: a,
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
      var o = this, a = this.getComponents(), i = a.MultiValue, s = a.MultiValueContainer, l = a.MultiValueLabel, u = a.MultiValueRemove, c = a.SingleValue, d = a.Placeholder, f = this.commonProps, p = this.props, m = p.controlShouldRenderValue, g = p.isDisabled, y = p.isMulti, h = p.inputValue, v = p.placeholder, b = this.state, x = b.selectValue, k = b.focusedValue, P = b.isFocused;
      if (!this.hasValue() || !m)
        return h ? null : /* @__PURE__ */ w.createElement(d, X({}, f, {
          key: "placeholder",
          isDisabled: g,
          isFocused: P,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), v);
      if (y)
        return x.map(function(_, $) {
          var O = _ === k, D = "".concat(o.getOptionLabel(_), "-").concat(o.getOptionValue(_));
          return /* @__PURE__ */ w.createElement(i, X({}, f, {
            components: {
              Container: s,
              Label: l,
              Remove: u
            },
            isFocused: O,
            isDisabled: g,
            key: D,
            index: $,
            removeProps: {
              onClick: function() {
                return o.removeValue(_);
              },
              onTouchEnd: function() {
                return o.removeValue(_);
              },
              onMouseDown: function(V) {
                V.preventDefault();
              }
            },
            data: _
          }), o.formatOptionLabel(_, "value"));
        });
      if (h)
        return null;
      var C = x[0];
      return /* @__PURE__ */ w.createElement(c, X({}, f, {
        data: C,
        isDisabled: g
      }), this.formatOptionLabel(C, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var o = this.getComponents(), a = o.ClearIndicator, i = this.commonProps, s = this.props, l = s.isDisabled, u = s.isLoading, c = this.state.isFocused;
      if (!this.isClearable() || !a || l || !this.hasValue() || u)
        return null;
      var d = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ w.createElement(a, X({}, i, {
        innerProps: d,
        isFocused: c
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var o = this.getComponents(), a = o.LoadingIndicator, i = this.commonProps, s = this.props, l = s.isDisabled, u = s.isLoading, c = this.state.isFocused;
      if (!a || !u)
        return null;
      var d = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ w.createElement(a, X({}, i, {
        innerProps: d,
        isDisabled: l,
        isFocused: c
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var o = this.getComponents(), a = o.DropdownIndicator, i = o.IndicatorSeparator;
      if (!a || !i)
        return null;
      var s = this.commonProps, l = this.props.isDisabled, u = this.state.isFocused;
      return /* @__PURE__ */ w.createElement(i, X({}, s, {
        isDisabled: l,
        isFocused: u
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var o = this.getComponents(), a = o.DropdownIndicator;
      if (!a)
        return null;
      var i = this.commonProps, s = this.props.isDisabled, l = this.state.isFocused, u = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ w.createElement(a, X({}, i, {
        innerProps: u,
        isDisabled: s,
        isFocused: l
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var o = this, a = this.getComponents(), i = a.Group, s = a.GroupHeading, l = a.Menu, u = a.MenuList, c = a.MenuPortal, d = a.LoadingMessage, f = a.NoOptionsMessage, p = a.Option, m = this.commonProps, g = this.state.focusedOption, y = this.props, h = y.captureMenuScroll, v = y.inputValue, b = y.isLoading, x = y.loadingMessage, k = y.minMenuHeight, P = y.maxMenuHeight, C = y.menuIsOpen, _ = y.menuPlacement, $ = y.menuPosition, O = y.menuPortalTarget, D = y.menuShouldBlockScroll, H = y.menuShouldScrollIntoView, V = y.noOptionsMessage, L = y.onMenuScrollToTop, F = y.onMenuScrollToBottom;
      if (!C)
        return null;
      var B = function(j, J) {
        var ce = j.type, se = j.data, ue = j.isDisabled, ne = j.isSelected, ee = j.label, xe = j.value, Le = g === se, Nt = ue ? void 0 : function() {
          return o.onOptionHover(se);
        }, Gt = ue ? void 0 : function() {
          return o.selectOption(se);
        }, Sr = "".concat(o.getElementId("option"), "-").concat(J), de = {
          id: Sr,
          onClick: Gt,
          onMouseMove: Nt,
          onMouseOver: Nt,
          tabIndex: -1
        };
        return /* @__PURE__ */ w.createElement(p, X({}, m, {
          innerProps: de,
          data: se,
          isDisabled: ue,
          isSelected: ne,
          key: Sr,
          label: ee,
          type: ce,
          value: xe,
          isFocused: Le,
          innerRef: Le ? o.getFocusedOptionRef : void 0
        }), o.formatOptionLabel(j.data, "menu"));
      }, Z;
      if (this.hasOptions())
        Z = this.getCategorizedOptions().map(function(Q) {
          if (Q.type === "group") {
            var j = Q.data, J = Q.options, ce = Q.index, se = "".concat(o.getElementId("group"), "-").concat(ce), ue = "".concat(se, "-heading");
            return /* @__PURE__ */ w.createElement(i, X({}, m, {
              key: se,
              data: j,
              options: J,
              Heading: s,
              headingProps: {
                id: ue,
                data: Q.data
              },
              label: o.formatGroupLabel(Q.data)
            }), Q.options.map(function(ne) {
              return B(ne, "".concat(ce, "-").concat(ne.index));
            }));
          } else if (Q.type === "option")
            return B(Q, "".concat(Q.index));
        });
      else if (b) {
        var R = x({
          inputValue: v
        });
        if (R === null)
          return null;
        Z = /* @__PURE__ */ w.createElement(d, m, R);
      } else {
        var N = V({
          inputValue: v
        });
        if (N === null)
          return null;
        Z = /* @__PURE__ */ w.createElement(f, m, N);
      }
      var K = {
        minMenuHeight: k,
        maxMenuHeight: P,
        menuPlacement: _,
        menuPosition: $,
        menuShouldScrollIntoView: H
      }, W = /* @__PURE__ */ w.createElement(J7, X({}, m, K), function(Q) {
        var j = Q.ref, J = Q.placerProps, ce = J.placement, se = J.maxHeight;
        return /* @__PURE__ */ w.createElement(l, X({}, m, K, {
          innerRef: j,
          innerProps: {
            onMouseDown: o.onMenuMouseDown,
            onMouseMove: o.onMenuMouseMove,
            id: o.getElementId("listbox")
          },
          isLoading: b,
          placement: ce
        }), /* @__PURE__ */ w.createElement(TY, {
          captureEnabled: h,
          onTopArrive: L,
          onBottomArrive: F,
          lockEnabled: D
        }, function(ue) {
          return /* @__PURE__ */ w.createElement(u, X({}, m, {
            innerRef: function(ee) {
              o.getMenuListRef(ee), ue(ee);
            },
            isLoading: b,
            maxHeight: se,
            focusedOption: g
          }), Z);
        }));
      });
      return O || $ === "fixed" ? /* @__PURE__ */ w.createElement(c, X({}, m, {
        appendTo: O,
        controlElement: this.controlRef,
        menuPlacement: _,
        menuPosition: $
      }), W) : W;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var o = this, a = this.props, i = a.delimiter, s = a.isDisabled, l = a.isMulti, u = a.name, c = a.required, d = this.state.selectValue;
      if (c && !this.hasValue() && !s)
        return /* @__PURE__ */ w.createElement(OY, {
          name: u,
          onFocus: this.onValueInputFocus
        });
      if (!(!u || s))
        if (l)
          if (i) {
            var f = d.map(function(g) {
              return o.getOptionValue(g);
            }).join(i);
            return /* @__PURE__ */ w.createElement("input", {
              name: u,
              type: "hidden",
              value: f
            });
          } else {
            var p = d.length > 0 ? d.map(function(g, y) {
              return /* @__PURE__ */ w.createElement("input", {
                key: "i-".concat(y),
                name: u,
                type: "hidden",
                value: o.getOptionValue(g)
              });
            }) : /* @__PURE__ */ w.createElement("input", {
              name: u,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ w.createElement("div", null, p);
          }
        else {
          var m = d[0] ? this.getOptionValue(d[0]) : "";
          return /* @__PURE__ */ w.createElement("input", {
            name: u,
            type: "hidden",
            value: m
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var o = this.commonProps, a = this.state, i = a.ariaSelection, s = a.focusedOption, l = a.focusedValue, u = a.isFocused, c = a.selectValue, d = this.getFocusableOptions();
      return /* @__PURE__ */ w.createElement(vY, X({}, o, {
        id: this.getElementId("live-region"),
        ariaSelection: i,
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
      var o = this.getComponents(), a = o.Control, i = o.IndicatorsContainer, s = o.SelectContainer, l = o.ValueContainer, u = this.props, c = u.className, d = u.id, f = u.isDisabled, p = u.menuIsOpen, m = this.state.isFocused, g = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ w.createElement(s, X({}, g, {
        className: c,
        innerProps: {
          id: d,
          onKeyDown: this.onKeyDown
        },
        isDisabled: f,
        isFocused: m
      }), this.renderLiveRegion(), /* @__PURE__ */ w.createElement(a, X({}, g, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: f,
        isFocused: m,
        menuIsOpen: p
      }), /* @__PURE__ */ w.createElement(l, X({}, g, {
        isDisabled: f
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ w.createElement(i, X({}, g, {
        isDisabled: f
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o, a) {
      var i = a.prevProps, s = a.clearFocusValueOnUpdate, l = a.inputIsHiddenAfterUpdate, u = a.ariaSelection, c = a.isFocused, d = a.prevWasFocused, f = o.options, p = o.value, m = o.menuIsOpen, g = o.inputValue, y = o.isMulti, h = vx(p), v = {};
      if (i && (p !== i.value || f !== i.options || m !== i.menuIsOpen || g !== i.inputValue)) {
        var b = m ? BY(o, h) : [], x = s ? WY(a, h) : null, k = UY(a, b);
        v = {
          selectValue: h,
          focusedOption: k,
          focusedValue: x,
          clearFocusValueOnUpdate: !1
        };
      }
      var P = l != null && o !== i ? {
        inputIsHidden: l,
        inputIsHiddenAfterUpdate: void 0
      } : {}, C = u, _ = c && d;
      return c && !_ && (C = {
        value: Yu(y, h, h[0] || null),
        options: h,
        action: "initial-input-focus"
      }, _ = !d), (u == null ? void 0 : u.action) === "initial-input-focus" && (C = null), re(re(re({}, v), P), {}, {
        prevProps: o,
        ariaSelection: C,
        prevWasFocused: _
      });
    }
  }]), r;
}(w.Component);
SE.defaultProps = VY;
var GY = /* @__PURE__ */ w.forwardRef(function(e, t) {
  var r = m7(e);
  return /* @__PURE__ */ w.createElement(SE, X({
    ref: t
  }, r));
}), YY = GY, qY = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
function am() {
  return am = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, am.apply(this, arguments);
}
function KY(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var CE = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var r = KY(t, qY);
  return am({}, r);
}, XY = function(t) {
  var r = typeof t == "string";
  return r && ["sm", "md", "lg"].includes(t);
}, QY = function(t) {
  return XY(t) ? t : t === "xs" ? "sm" : t === "xl" ? "lg" : "md";
}, Zr = function(t) {
  var r = Mo(), n = QY(r.components.Input.defaultProps.size), o = t ?? n, a = d9(typeof o == "string" ? [o] : o, {
    fallback: "md"
  }) || n;
  return a;
};
function Ai() {
  return Ai = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ai.apply(this, arguments);
}
var ZY = function(t) {
  var r = t.children, n = t.className, o = t.cx, a = t.innerProps, i = t.isDisabled, s = t.isRtl, l = t.hasValue, u = t.selectProps.chakraStyles, c = Ai({
    position: "relative",
    direction: s ? "rtl" : void 0
  }, i ? {
    cursor: "not-allowed"
  } : {}), d = u != null && u.container ? u.container(c, t) : c;
  return /* @__PURE__ */ U.createElement(ot, Ai({}, a, {
    className: o({
      "--is-disabled": i,
      "--is-rtl": s,
      "--has-value": l
    }, n),
    sx: d
  }), r);
}, JY = function(t) {
  var r = t.children, n = t.className, o = t.cx, a = t.isMulti, i = t.hasValue, s = t.innerProps, l = t.selectProps, u = l.chakraStyles, c = l.size, d = l.variant, f = l.focusBorderColor, p = l.errorBorderColor, m = l.controlShouldRenderValue, g = Zr(c), y = vr("Input", {
    size: g,
    variant: d,
    focusBorderColor: f,
    errorBorderColor: p
  }), h = {
    display: a && i && m ? "flex" : "grid",
    alignItems: "center",
    flex: 1,
    paddingY: "2px",
    paddingX: y.field.px,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, v = u != null && u.valueContainer ? u.valueContainer(h, t) : h;
  return /* @__PURE__ */ U.createElement(ot, Ai({}, s, {
    className: o({
      "value-container": !0,
      "value-container--is-multi": a,
      "value-container--has-value": i
    }, n),
    sx: v
  }), r);
}, eq = function(t) {
  var r = t.children, n = t.className, o = t.cx, a = t.innerProps, i = t.selectProps.chakraStyles, s = {
    display: "flex",
    alignItems: "center",
    alignSelf: "stretch",
    flexShrink: 0
  }, l = i != null && i.indicatorsContainer ? i.indicatorsContainer(s, t) : s;
  return /* @__PURE__ */ U.createElement(ot, Ai({}, a, {
    className: o({
      indicators: !0
    }, n),
    sx: l
  }), r);
}, tq = ["height", "h"];
function zr() {
  return zr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, zr.apply(this, arguments);
}
function rq(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var nq = function(t) {
  var r = t.className, n = t.cx, o = t.children, a = t.innerRef, i = t.innerProps, s = t.isDisabled, l = t.isFocused, u = t.menuIsOpen, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, m = c.focusBorderColor, g = c.errorBorderColor, y = c.isInvalid, h = c.isReadOnly, v = Zr(f), b = vr("Input", {
    size: v,
    variant: p,
    focusBorderColor: m,
    errorBorderColor: g
  }), x = b.field, k = x.height, P = x.h, C = rq(x, tq), _ = k || P, $ = zr({}, C, {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 0,
    overflow: "hidden",
    height: "auto",
    minH: _
  }, s ? {
    pointerEvents: "none"
  } : {}), O = d != null && d.control ? d.control($, t) : $;
  return /* @__PURE__ */ U.createElement(ot, zr({
    ref: a,
    className: n({
      control: !0,
      "control--is-disabled": s,
      "control--is-focused": l,
      "control--menu-is-open": u
    }, r),
    sx: O
  }, i, {
    "data-focus": l ? !0 : void 0,
    "data-focus-visible": l ? !0 : void 0,
    "data-invalid": y ? !0 : void 0,
    "data-disabled": s ? !0 : void 0,
    "data-readonly": h ? !0 : void 0
  }), o);
}, oq = function(t) {
  var r = t.className, n = t.cx, o = t.selectProps, a = o.chakraStyles, i = o.useBasicStyles, s = o.variant, l = zr({
    opacity: 1
  }, i || s !== "outline" ? {
    display: "none"
  } : {}), u = a != null && a.indicatorSeparator ? a.indicatorSeparator(l, t) : l;
  return /* @__PURE__ */ U.createElement(d2, {
    className: n({
      "indicator-separator": !0
    }, r),
    sx: u,
    orientation: "vertical"
  });
}, aq = function(t) {
  return /* @__PURE__ */ U.createElement(Yl, zr({
    role: "presentation",
    focusable: "false",
    "aria-hidden": "true"
  }, t), /* @__PURE__ */ U.createElement("path", {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }));
}, iq = function(t) {
  var r = t.children, n = t.className, o = t.cx, a = t.innerProps, i = t.selectProps, s = i.chakraStyles, l = i.useBasicStyles, u = i.size, c = i.focusBorderColor, d = i.errorBorderColor, f = i.variant, p = Zr(u), m = vr("Input", {
    size: p,
    variant: f,
    focusBorderColor: c,
    errorBorderColor: d
  }), g = {
    sm: "16px",
    md: "20px",
    lg: "24px"
  }, y = g[p], h = zr({}, m.addon, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: 0,
    borderWidth: 0,
    fontSize: y
  }, l && {
    background: "transparent",
    padding: 0,
    width: 6,
    marginRight: 2,
    marginLeft: 1,
    cursor: "inherit"
  }), v = s != null && s.dropdownIndicator ? s.dropdownIndicator(h, t) : h, b = {
    height: "1em",
    width: "1em"
  }, x = s != null && s.downChevron ? s.downChevron(b, t) : b;
  return /* @__PURE__ */ U.createElement(ot, zr({}, a, {
    className: o({
      indicator: !0,
      "dropdown-indicator": !0
    }, n),
    sx: v
  }), r || /* @__PURE__ */ U.createElement(aq, {
    sx: x
  }));
}, sq = function(t) {
  return /* @__PURE__ */ U.createElement(Yl, zr({
    focusable: "false",
    "aria-hidden": !0
  }, t), /* @__PURE__ */ U.createElement("path", {
    fill: "currentColor",
    d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
  }));
}, lq = function(t) {
  var r = t.children, n = t.className, o = t.cx, a = t.innerProps, i = t.selectProps, s = i.chakraStyles, l = i.size, u = Zr(l), c = ma("CloseButton", {
    size: u
  }), d = zr({}, c, {
    marginX: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    cursor: "pointer"
  }), f = s != null && s.clearIndicator ? s.clearIndicator(d, t) : d, p = {
    width: "1em",
    height: "1em"
  }, m = s != null && s.crossIcon ? s.crossIcon(p, t) : p;
  return /* @__PURE__ */ U.createElement(ot, zr({
    role: "button",
    className: o({
      indicator: !0,
      "clear-indicator": !0
    }, n),
    sx: f,
    "aria-label": "Clear selected options"
  }, a), r || /* @__PURE__ */ U.createElement(sq, {
    sx: m
  }));
}, uq = function(t) {
  var r = t.className, n = t.cx, o = t.innerProps, a = t.selectProps, i = a.chakraStyles, s = a.size, l = t.color, u = t.emptyColor, c = t.speed, d = t.thickness, f = t.spinnerSize, p = Zr(s), m = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }, g = m[p], y = {
    marginRight: 3
  }, h = i != null && i.loadingIndicator ? i.loadingIndicator(y, t) : y;
  return /* @__PURE__ */ U.createElement(Jg, zr({
    className: n({
      indicator: !0,
      "loading-indicator": !0
    }, r),
    sx: h
  }, o, {
    size: f || g,
    color: l,
    emptyColor: u,
    speed: c,
    thickness: d
  }));
};
const cq = nq;
var dq = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
function Js() {
  return Js = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Js.apply(this, arguments);
}
function fq(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var pq = function(t) {
  var r = t.className, n = t.cx, o = t.value, a = t.selectProps, i = a.chakraStyles, s = a.isReadOnly, l = CE(t), u = l.innerRef, c = l.isDisabled, d = l.isHidden, f = l.inputClassName, p = fq(l, dq), m = {
    gridArea: "1 / 2",
    minW: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0
  }, g = {
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
    _after: Js({
      content: 'attr(data-value) " "',
      visibility: "hidden",
      whiteSpace: "pre",
      padding: 0
    }, m)
  }, y = i != null && i.inputContainer ? i.inputContainer(g, t) : g, h = Js({
    background: 0,
    opacity: d ? 0 : 1,
    width: "100%"
  }, m), v = i != null && i.input ? i.input(h, t) : h;
  return /* @__PURE__ */ U.createElement(ot, {
    className: n({
      "input-container": !0
    }, r),
    "data-value": o || "",
    sx: y
  }, /* @__PURE__ */ U.createElement(Se.input, Js({
    className: n({
      input: !0
    }, f),
    ref: u,
    sx: v,
    disabled: c,
    readOnly: s ? !0 : void 0
  }, p)));
};
const hq = pq;
var vq = ["data"];
function mq(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function nr() {
  return nr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, nr.apply(this, arguments);
}
var gq = function(t) {
  var r = {
    bottom: "top",
    top: "bottom"
  };
  return t ? r[t] : "top";
}, yq = function(t) {
  var r, n = t.className, o = t.cx, a = t.children, i = t.innerProps, s = t.innerRef, l = t.placement, u = t.selectProps.chakraStyles, c = (r = {
    position: "absolute"
  }, r[gq(l)] = "100%", r.marginY = "8px", r.width = "100%", r.zIndex = 1, r), d = u != null && u.menu ? u.menu(c, t) : c;
  return /* @__PURE__ */ U.createElement(_2, null, /* @__PURE__ */ U.createElement(ot, nr({}, i, {
    ref: s,
    className: o({
      menu: !0
    }, n),
    sx: d
  }), a));
};
const bq = yq;
var wq = function(t) {
  var r, n = t.className, o = t.cx, a = t.innerRef, i = t.children, s = t.maxHeight, l = t.isMulti, u = t.innerProps, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, m = c.focusBorderColor, g = c.errorBorderColor, y = vr("Menu"), h = Zr(f), v = vr("Input", {
    size: h,
    variant: p,
    focusBorderColor: m,
    errorBorderColor: g
  }), b = v.field, x = nr({}, y.list, {
    minW: "100%",
    maxHeight: s + "px",
    overflowY: "auto",
    // This is hacky, but it works. May be removed in the future
    "--input-border-radius": b == null ? void 0 : b["--input-border-radius"],
    borderRadius: (b == null ? void 0 : b.borderRadius) || ((r = y.list) == null ? void 0 : r.borderRadius),
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }), k = d != null && d.menuList ? d.menuList(x, t) : x;
  return /* @__PURE__ */ U.createElement(ot, nr({
    role: "listbox"
  }, u, {
    className: o({
      "menu-list": !0,
      "menu-list--is-multi": l
    }, n),
    sx: k,
    ref: a
  }), i);
}, xq = function(t) {
  var r = t.children, n = t.className, o = t.cx, a = t.innerProps, i = t.selectProps, s = i.chakraStyles, l = i.size, u = Zr(l), c = {
    sm: "6px",
    md: "8px",
    lg: "10px"
  }, d = {
    color: "chakra-subtle-text",
    textAlign: "center",
    paddingY: c[u],
    fontSize: u
  }, f = s != null && s.loadingMessage ? s.loadingMessage(d, t) : d;
  return /* @__PURE__ */ U.createElement(ot, nr({}, a, {
    className: o({
      "menu-notice": !0,
      "menu-notice--loading": !0
    }, n),
    sx: f
  }), r);
}, Sq = function(t) {
  var r = t.children, n = t.className, o = t.cx, a = t.innerProps, i = t.selectProps, s = i.chakraStyles, l = i.size, u = Zr(l), c = {
    sm: "6px",
    md: "8px",
    lg: "10px"
  }, d = {
    color: "chakra-subtle-text",
    textAlign: "center",
    paddingY: c[u],
    fontSize: u
  }, f = s != null && s.noOptionsMessage ? s.noOptionsMessage(d, t) : d;
  return /* @__PURE__ */ U.createElement(ot, nr({}, a, {
    className: o({
      "menu-notice": !0,
      "menu-notice--no-options": !0
    }, n),
    sx: f
  }), r);
}, Cq = function(t) {
  var r = t.children, n = t.className, o = t.cx, a = t.theme, i = t.getStyles, s = t.Heading, l = t.headingProps, u = t.label, c = t.selectProps, d = t.innerProps, f = t.getClassNames, p = c.chakraStyles, m = {}, g = p != null && p.group ? p.group(m, t) : m;
  return /* @__PURE__ */ U.createElement(ot, nr({}, d, {
    className: o({
      group: !0
    }, n),
    sx: g
  }), /* @__PURE__ */ U.createElement(s, nr({}, l, {
    selectProps: c,
    cx: o,
    theme: a,
    getStyles: i,
    getClassNames: f
  }), u), /* @__PURE__ */ U.createElement(ot, null, r));
}, Pq = function(t) {
  var r = t.cx, n = t.className, o = t.selectProps, a = o.chakraStyles, i = o.size, s = o.hasStickyGroupHeaders, l = CE(t);
  l.data;
  var u = mq(l, vq), c = vr("Menu"), d = Zr(i), f = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }, p = {
    sm: "0.4rem 0.8rem",
    md: "0.5rem 1rem",
    lg: "0.6rem 1.2rem"
  }, m = nr({}, c.groupTitle, {
    fontSize: f[d],
    padding: p[d],
    margin: 0,
    borderBottomWidth: s ? "1px" : 0,
    position: s ? "sticky" : "static",
    top: -2,
    bg: c.list.bg,
    zIndex: 1
  }), g = a != null && a.groupHeading ? a.groupHeading(m, t) : m;
  return /* @__PURE__ */ U.createElement(ot, nr({}, u, {
    className: r({
      "group-heading": !0
    }, n),
    sx: g
  }));
}, kq = function(t) {
  return /* @__PURE__ */ U.createElement("svg", nr({
    viewBox: "0 0 14 14",
    width: "1em",
    height: "1em"
  }, t), /* @__PURE__ */ U.createElement("polygon", {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }));
}, _q = function(t) {
  var r = t.className, n = t.cx, o = t.innerRef, a = t.innerProps, i = t.children, s = t.isFocused, l = t.isDisabled, u = t.isSelected, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.isMulti, m = c.hideSelectedOptions, g = c.selectedOptionStyle, y = c.selectedOptionColorScheme, h = vr("Menu").item, v = Zr(f), b = {
    sm: "0.6rem",
    md: "0.8rem",
    lg: "1rem"
  }, x = {
    sm: "0.3rem",
    md: "0.4rem",
    lg: "0.5rem"
  }, k = Fb(y + ".500", y + ".300"), P = Fb("white", "black"), C = g === "check" && (!p || m === !1), _ = g === "color", $ = nr({}, h, {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    width: "100%",
    textAlign: "start",
    fontSize: v,
    paddingX: b[v],
    paddingY: x[v]
  }, _ && {
    _selected: {
      bg: k,
      color: P,
      _active: {
        bg: k
      }
    }
  }), O = d != null && d.option ? d.option($, t) : $;
  return /* @__PURE__ */ U.createElement(ot, nr({
    role: "option"
  }, a, {
    className: n({
      option: !0,
      "option--is-disabled": l,
      "option--is-focused": s,
      "option--is-selected": u
    }, r),
    sx: O,
    ref: o,
    "data-focus": s ? !0 : void 0,
    "aria-disabled": l ? !0 : void 0,
    "aria-selected": u
  }), C && /* @__PURE__ */ U.createElement(T2, {
    fontSize: "0.8em",
    marginEnd: "0.75rem",
    opacity: u ? 1 : 0
  }, /* @__PURE__ */ U.createElement(kq, null)), i);
};
function Gr() {
  return Gr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gr.apply(this, arguments);
}
var Tq = function(t) {
  return typeof t == "object" && t !== null && "colorScheme" in t && typeof t.colorScheme == "string";
}, Eq = function(t) {
  return typeof t == "object" && t !== null && "variant" in t && typeof t.variant == "string";
}, PE = function(t) {
  return typeof t == "object" && t !== null && "isFixed" in t && typeof t.isFixed == "boolean";
}, $q = function(t) {
  var r = t.children, n = t.className, o = t.components, a = t.cx, i = t.data, s = t.innerProps, l = t.isDisabled, u = t.isFocused, c = t.removeProps, d = t.selectProps, f = t.cropWithEllipsis, p = o.Container, m = o.Label, g = o.Remove, y = d.chakraStyles, h = d.colorScheme, v = d.tagVariant, b = d.size, x = Zr(b), k = "", P = "", C = !1;
  Tq(i) && (k = i.colorScheme), Eq(i) && (P = i.variant), PE(i) && (C = i.isFixed);
  var _ = vr("Tag", {
    size: x,
    colorScheme: k || h,
    variant: P || v || (C ? "solid" : "subtle")
  }), $ = Gr({}, _.container, {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    // resolves flex/text-overflow bug
    margin: "0.125rem"
  }), O = y != null && y.multiValue ? y.multiValue($, t) : $, D = Gr({}, _.label, {
    overflow: "hidden",
    textOverflow: f || f === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }), H = y != null && y.multiValueLabel ? y.multiValueLabel(D, t) : D, V = Gr({}, _.closeButton, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }), L = y != null && y.multiValueRemove ? y.multiValueRemove(V, t) : V;
  return /* @__PURE__ */ U.createElement(p, {
    data: i,
    innerProps: Gr({
      className: a({
        "multi-value": !0,
        "multi-value--is-disabled": l
      }, n)
    }, s),
    sx: O,
    selectProps: d
  }, /* @__PURE__ */ U.createElement(m, {
    data: i,
    innerProps: {
      className: a({
        "multi-value__label": !0
      }, n)
    },
    sx: H,
    selectProps: d
  }, r), /* @__PURE__ */ U.createElement(g, {
    data: i,
    innerProps: Gr({
      className: a({
        "multi-value__remove": !0
      }, n),
      "aria-label": "Remove " + (r || "option")
    }, c),
    sx: L,
    selectProps: d,
    isFocused: u
  }));
}, Oq = function(t) {
  var r = t.children, n = t.innerProps, o = t.sx;
  return /* @__PURE__ */ U.createElement(Se.span, Gr({}, n, {
    sx: o
  }), r);
}, Mq = function(t) {
  var r = t.children, n = t.innerProps, o = t.sx;
  return /* @__PURE__ */ U.createElement(Se.span, Gr({}, n, {
    sx: o
  }), r);
}, Iq = function(t) {
  return /* @__PURE__ */ U.createElement(Yl, Gr({
    verticalAlign: "inherit",
    viewBox: "0 0 512 512"
  }, t), /* @__PURE__ */ U.createElement("path", {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }));
}, Rq = function(t) {
  var r = t.children, n = t.innerProps, o = t.isFocused, a = t.data, i = t.sx;
  return PE(a) && a.isFixed ? null : /* @__PURE__ */ U.createElement(ot, Gr({}, n, {
    role: "button",
    sx: i,
    "data-focus": o ? !0 : void 0,
    "data-focus-visible": o ? !0 : void 0
  }), r || /* @__PURE__ */ U.createElement(Iq, null));
};
const Dq = $q;
function im() {
  return im = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, im.apply(this, arguments);
}
var Aq = function(t) {
  var r = t.children, n = t.className, o = t.cx, a = t.innerProps, i = t.selectProps.chakraStyles, s = {
    gridArea: "1 / 1 / 2 / 3",
    color: "chakra-placeholder-color",
    mx: "0.125rem",
    userSelect: "none"
  }, l = i != null && i.placeholder ? i.placeholder(s, t) : s;
  return /* @__PURE__ */ U.createElement(ot, im({}, a, {
    className: o({
      placeholder: !0
    }, n),
    sx: l
  }), r);
};
const Fq = Aq;
function sm() {
  return sm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, sm.apply(this, arguments);
}
var Lq = function(t) {
  var r = t.children, n = t.className, o = t.cx, a = t.isDisabled, i = t.innerProps, s = t.selectProps.chakraStyles, l = {
    gridArea: "1 / 1 / 2 / 3",
    mx: "0.125rem",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, u = s != null && s.singleValue ? s.singleValue(l, t) : l;
  return /* @__PURE__ */ U.createElement(ot, sm({
    className: o({
      "single-value": !0,
      "single-value--is-disabled": a
    }, n),
    sx: u
  }, i), r);
};
const Nq = Lq;
var zq = {
  ClearIndicator: lq,
  Control: cq,
  DropdownIndicator: iq,
  Group: Cq,
  GroupHeading: Pq,
  IndicatorSeparator: oq,
  IndicatorsContainer: eq,
  Input: hq,
  LoadingIndicator: uq,
  LoadingMessage: xq,
  Menu: bq,
  MenuList: wq,
  MultiValue: Dq,
  MultiValueContainer: Oq,
  MultiValueLabel: Mq,
  MultiValueRemove: Rq,
  NoOptionsMessage: Sq,
  Option: _q,
  Placeholder: Fq,
  SelectContainer: ZY,
  SingleValue: Nq,
  ValueContainer: JY
};
const jq = zq;
var Vq = ["components", "theme", "size", "colorScheme", "isDisabled", "isInvalid", "isReadOnly", "required", "isRequired", "inputId", "tagVariant", "selectedOptionStyle", "selectedOptionColorScheme", "selectedOptionColor", "variant", "focusBorderColor", "errorBorderColor", "chakraStyles", "onFocus", "onBlur", "menuIsOpen"];
function Ed() {
  return Ed = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ed.apply(this, arguments);
}
function Bq(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var Wq = function(t) {
  var r, n = t.components, o = n === void 0 ? {} : n;
  t.theme;
  var a = t.size, i = t.colorScheme, s = i === void 0 ? "gray" : i, l = t.isDisabled, u = t.isInvalid, c = t.isReadOnly, d = t.required, f = t.isRequired, p = t.inputId, m = t.tagVariant, g = t.selectedOptionStyle, y = g === void 0 ? "color" : g, h = t.selectedOptionColorScheme, v = t.selectedOptionColor, b = t.variant, x = t.focusBorderColor, k = t.errorBorderColor, P = t.chakraStyles, C = P === void 0 ? {} : P, _ = t.onFocus, $ = t.onBlur, O = t.menuIsOpen, D = Bq(t, Vq), H = Mo(), V = H.components.Input.defaultProps.variant, L = gT({
    id: p,
    isDisabled: l,
    isInvalid: u,
    isRequired: f,
    isReadOnly: c,
    onFocus: _,
    onBlur: $
  }), F = O ?? (L.readOnly ? !1 : void 0), B = y, Z = ["color", "check"];
  Z.includes(y) || (B = "color");
  var R = h || v || "blue";
  typeof R != "string" && (R = "blue");
  var N = Ed({
    // Allow overriding of custom components
    components: Ed({}, jq, o),
    // Custom select props
    colorScheme: s,
    size: a,
    tagVariant: m,
    selectedOptionStyle: B,
    selectedOptionColorScheme: R,
    variant: b ?? V,
    chakraStyles: C,
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
    menuIsOpen: F
  }, D, {
    // aria-invalid can be passed to react-select, so we allow that to
    // override the `isInvalid` prop
    "aria-invalid": (r = D["aria-invalid"]) != null ? r : L["aria-invalid"]
  });
  return N;
};
const Uq = Wq;
function lm() {
  return lm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lm.apply(this, arguments);
}
var Hq = /* @__PURE__ */ w.forwardRef(function(e, t) {
  var r = Uq(e);
  return /* @__PURE__ */ U.createElement(YY, lm({
    ref: t
  }, r));
});
const Gq = Hq;
function Yq({ workflow: e }) {
  var c;
  const [t, r] = w.useState([]), [n, o] = w.useState(""), a = ((c = e.tags) == null ? void 0 : c.map((d) => ({
    value: d,
    label: d
  }))) ?? [], [i, s] = w.useState(a);
  if (w.useEffect(() => {
    rn && r(rn.listAll() ?? []);
  }, []), rn == null)
    return alert("Error: TagsTable is not loaded"), null;
  const l = t.map((d) => ({
    value: d.name,
    label: d.name
  })), u = 37 * 5;
  return /* @__PURE__ */ I.jsx(b0, { children: ({}) => /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
    /* @__PURE__ */ I.jsx(y0, { children: /* @__PURE__ */ I.jsx(El, { variant: "ghost", size: "sm", colorScheme: "teal", children: /* @__PURE__ */ I.jsx(e7, { color: "#718096" }) }) }),
    /* @__PURE__ */ I.jsxs(C0, { children: [
      /* @__PURE__ */ I.jsx(w0, {}),
      /* @__PURE__ */ I.jsx(S0, {}),
      /* @__PURE__ */ I.jsx(B2, { children: /* @__PURE__ */ I.jsx("b", { children: e.name }) }),
      /* @__PURE__ */ I.jsxs(x0, { children: [
        /* @__PURE__ */ I.jsx(
          Gq,
          {
            isMulti: !0,
            name: "tags",
            options: l,
            menuIsOpen: !0,
            value: i,
            defaultValue: a,
            onChange: (d) => {
              console.log(d), s(d), em(e.id, {
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
        /* @__PURE__ */ I.jsxs(
          po,
          {
            gap: 4,
            mt: Math.min(u, t.length * 37),
            children: [
              /* @__PURE__ */ I.jsx(
                Tf,
                {
                  placeholder: "New tag name",
                  size: "sm",
                  mt: 6,
                  mb: 6,
                  variant: "flushed",
                  value: n,
                  onChange: (d) => {
                    o(d.target.value);
                  }
                }
              ),
              /* @__PURE__ */ I.jsx(
                El,
                {
                  iconSpacing: 1,
                  leftIcon: /* @__PURE__ */ I.jsx(G2, { size: 16 }),
                  colorScheme: "teal",
                  variant: "solid",
                  size: "xs",
                  px: 5,
                  isDisabled: n.length === 0,
                  onClick: () => {
                    rn == null || rn.upsert(n), r((rn == null ? void 0 : rn.listAll()) ?? []), o("");
                  },
                  children: "New Tag"
                }
              )
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function qq(e) {
  const t = new Date(e), r = String(t.getDate()).padStart(2, "0"), n = String(t.getMonth() + 1).padStart(2, "0"), o = t.getFullYear(), a = String(t.getHours()).padStart(2, "0"), i = String(t.getMinutes()).padStart(2, "0");
  return `${n}-${r}-${o} ${a}:${i}`;
}
function Kq({
  onclose: e,
  loadWorkflowID: t,
  onClickNewFlow: r
}) {
  const [n, o] = w.useState([]), { colorMode: a } = Vl(), { curFlowID: i } = w.useContext(q2);
  w.useEffect(() => {
    const l = cx();
    o(l);
  }, []);
  const s = (l) => {
    c7(l);
    const u = cx();
    o(u);
  };
  return /* @__PURE__ */ I.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ I.jsxs(
    NH,
    {
      isOpen: !0,
      placement: "left",
      onClose: () => e(),
      size: "sm",
      children: [
        /* @__PURE__ */ I.jsx(z2, {}),
        /* @__PURE__ */ I.jsxs(L2, { children: [
          /* @__PURE__ */ I.jsx(V2, {}),
          /* @__PURE__ */ I.jsx(N2, { children: /* @__PURE__ */ I.jsxs(po, { alignItems: "center", children: [
            /* @__PURE__ */ I.jsx(Ms, { mr: 6, children: "Recent Workflows" }),
            /* @__PURE__ */ I.jsx(
              El,
              {
                leftIcon: /* @__PURE__ */ I.jsx(G2, {}),
                variant: "outline",
                size: "sm",
                colorScheme: "teal",
                onClick: r,
                children: "New"
              }
            )
          ] }) }),
          /* @__PURE__ */ I.jsx(j2, { children: n.map((l) => {
            const u = l.id === i;
            return /* @__PURE__ */ I.jsxs(po, { w: "100%", justify: "space-between", children: [
              /* @__PURE__ */ I.jsxs(
                ot,
                {
                  as: "button",
                  textAlign: "left",
                  backgroundColor: u ? "teal.200" : void 0,
                  color: u ? "#333" : void 0,
                  w: "90%",
                  borderRadius: 6,
                  p: 2,
                  mb: 2,
                  onClick: () => {
                    t(l.id);
                  },
                  _hover: {
                    bg: a === "light" ? "gray.200" : "#4A5568"
                  },
                  _active: {
                    bg: "#dddfe2",
                    transform: "scale(0.98)",
                    borderColor: "#bec3c9"
                  },
                  children: [
                    /* @__PURE__ */ I.jsx(Ms, { fontWeight: "500", children: l.name ?? "untitled" }),
                    /* @__PURE__ */ I.jsxs(Ms, { color: "GrayText", ml: 2, fontSize: "sm", children: [
                      "Updated: ",
                      qq(l.updateTime)
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ I.jsx(Yq, { workflow: l }),
              /* @__PURE__ */ I.jsx(b0, { children: ({ isOpen: c, onClose: d }) => /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
                /* @__PURE__ */ I.jsx(y0, { children: /* @__PURE__ */ I.jsx(t7, { color: "#F56565", cursor: "pointer" }) }),
                /* @__PURE__ */ I.jsxs(C0, { children: [
                  /* @__PURE__ */ I.jsx(w0, {}),
                  /* @__PURE__ */ I.jsx(S0, {}),
                  /* @__PURE__ */ I.jsxs(x0, { children: [
                    /* @__PURE__ */ I.jsx(Ms, { mb: 4, fontWeight: 600, children: "Are you sure you want to delete this workflow?" }),
                    /* @__PURE__ */ I.jsx(
                      El,
                      {
                        colorScheme: "red",
                        size: "sm",
                        onClick: () => {
                          s(l.id), d();
                        },
                        children: "Yes, delete"
                      }
                    )
                  ] })
                ] })
              ] }) })
            ] });
          }) })
        ] })
      ]
    }
  ) });
}
const Xq = {
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
function gh(e, t) {
  return t || (t = e.slice(0)), e.raw = t, e;
}
var kE = !!(typeof window < "u" && window.document && window.document.createElement);
function Qq(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var _E = Qq;
function Zq(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Jq = Zq, eK = typeof Or == "object" && Or && Or.Object === Object && Or, TE = eK, tK = TE, rK = typeof self == "object" && self && self.Object === Object && self, nK = tK || rK || Function("return this")(), ar = nK, oK = ar, aK = oK.Symbol, Jl = aK, Mx = Jl, EE = Object.prototype, iK = EE.hasOwnProperty, sK = EE.toString, gs = Mx ? Mx.toStringTag : void 0;
function lK(e) {
  var t = iK.call(e, gs), r = e[gs];
  try {
    e[gs] = void 0;
    var n = !0;
  } catch {
  }
  var o = sK.call(e);
  return n && (t ? e[gs] = r : delete e[gs]), o;
}
var uK = lK, cK = Object.prototype, dK = cK.toString;
function fK(e) {
  return dK.call(e);
}
var pK = fK, Ix = Jl, hK = uK, vK = pK, mK = "[object Null]", gK = "[object Undefined]", Rx = Ix ? Ix.toStringTag : void 0;
function yK(e) {
  return e == null ? e === void 0 ? gK : mK : Rx && Rx in Object(e) ? hK(e) : vK(e);
}
var Bi = yK;
function bK(e) {
  return e != null && typeof e == "object";
}
var Do = bK, wK = Bi, xK = Do, SK = "[object Arguments]";
function CK(e) {
  return xK(e) && wK(e) == SK;
}
var PK = CK, Dx = PK, kK = Do, $E = Object.prototype, _K = $E.hasOwnProperty, TK = $E.propertyIsEnumerable, EK = Dx(/* @__PURE__ */ function() {
  return arguments;
}()) ? Dx : function(e) {
  return kK(e) && _K.call(e, "callee") && !TK.call(e, "callee");
}, OE = EK, $K = Array.isArray, Ao = $K, $d = { exports: {} };
function OK() {
  return !1;
}
var MK = OK;
$d.exports;
(function(e, t) {
  var r = ar, n = MK, o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, i = a && a.exports === o, s = i ? r.Buffer : void 0, l = s ? s.isBuffer : void 0, u = l || n;
  e.exports = u;
})($d, $d.exports);
var ME = $d.exports, IK = 9007199254740991, RK = /^(?:0|[1-9]\d*)$/;
function DK(e, t) {
  var r = typeof e;
  return t = t ?? IK, !!t && (r == "number" || r != "symbol" && RK.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var IE = DK, AK = 9007199254740991;
function FK(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= AK;
}
var RE = FK, LK = Bi, NK = RE, zK = Do, jK = "[object Arguments]", VK = "[object Array]", BK = "[object Boolean]", WK = "[object Date]", UK = "[object Error]", HK = "[object Function]", GK = "[object Map]", YK = "[object Number]", qK = "[object Object]", KK = "[object RegExp]", XK = "[object Set]", QK = "[object String]", ZK = "[object WeakMap]", JK = "[object ArrayBuffer]", eX = "[object DataView]", tX = "[object Float32Array]", rX = "[object Float64Array]", nX = "[object Int8Array]", oX = "[object Int16Array]", aX = "[object Int32Array]", iX = "[object Uint8Array]", sX = "[object Uint8ClampedArray]", lX = "[object Uint16Array]", uX = "[object Uint32Array]", je = {};
je[tX] = je[rX] = je[nX] = je[oX] = je[aX] = je[iX] = je[sX] = je[lX] = je[uX] = !0;
je[jK] = je[VK] = je[JK] = je[BK] = je[eX] = je[WK] = je[UK] = je[HK] = je[GK] = je[YK] = je[qK] = je[KK] = je[XK] = je[QK] = je[ZK] = !1;
function cX(e) {
  return zK(e) && NK(e.length) && !!je[LK(e)];
}
var dX = cX;
function fX(e) {
  return function(t) {
    return e(t);
  };
}
var $0 = fX, Od = { exports: {} };
Od.exports;
(function(e, t) {
  var r = TE, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, i = a && r.process, s = function() {
    try {
      var l = o && o.require && o.require("util").types;
      return l || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(Od, Od.exports);
var O0 = Od.exports, pX = dX, hX = $0, Ax = O0, Fx = Ax && Ax.isTypedArray, vX = Fx ? hX(Fx) : pX, mX = vX, gX = Jq, yX = OE, bX = Ao, wX = ME, xX = IE, SX = mX, CX = Object.prototype, PX = CX.hasOwnProperty;
function kX(e, t) {
  var r = bX(e), n = !r && yX(e), o = !r && !n && wX(e), a = !r && !n && !o && SX(e), i = r || n || o || a, s = i ? gX(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || PX.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    xX(u, l))) && s.push(u);
  return s;
}
var DE = kX, _X = Object.prototype;
function TX(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || _X;
  return e === r;
}
var M0 = TX;
function EX(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var AE = EX, $X = AE, OX = $X(Object.keys, Object), MX = OX, IX = M0, RX = MX, DX = Object.prototype, AX = DX.hasOwnProperty;
function FX(e) {
  if (!IX(e))
    return RX(e);
  var t = [];
  for (var r in Object(e))
    AX.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var LX = FX;
function NX(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var wa = NX, zX = Bi, jX = wa, VX = "[object AsyncFunction]", BX = "[object Function]", WX = "[object GeneratorFunction]", UX = "[object Proxy]";
function HX(e) {
  if (!jX(e))
    return !1;
  var t = zX(e);
  return t == BX || t == WX || t == VX || t == UX;
}
var I0 = HX;
const GX = /* @__PURE__ */ Sn(I0);
var YX = I0, qX = RE;
function KX(e) {
  return e != null && qX(e.length) && !YX(e);
}
var FE = KX, XX = DE, QX = LX, ZX = FE;
function JX(e) {
  return ZX(e) ? XX(e) : QX(e);
}
var R0 = JX;
function eQ(e) {
  return e;
}
var LE = eQ;
function tQ(e, t, r, n) {
  for (var o = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < o; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var rQ = tQ;
function nQ(e) {
  return e !== e;
}
var oQ = nQ;
function aQ(e, t, r) {
  for (var n = r - 1, o = e.length; ++n < o; )
    if (e[n] === t)
      return n;
  return -1;
}
var iQ = aQ, sQ = rQ, lQ = oQ, uQ = iQ;
function cQ(e, t, r) {
  return t === t ? uQ(e, t, r) : sQ(e, lQ, r);
}
var dQ = cQ, fQ = /\s/;
function pQ(e) {
  for (var t = e.length; t-- && fQ.test(e.charAt(t)); )
    ;
  return t;
}
var hQ = pQ, vQ = hQ, mQ = /^\s+/;
function gQ(e) {
  return e && e.slice(0, vQ(e) + 1).replace(mQ, "");
}
var yQ = gQ, bQ = Bi, wQ = Do, xQ = "[object Symbol]";
function SQ(e) {
  return typeof e == "symbol" || wQ(e) && bQ(e) == xQ;
}
var Mf = SQ, CQ = yQ, Lx = wa, PQ = Mf, Nx = NaN, kQ = /^[-+]0x[0-9a-f]+$/i, _Q = /^0b[01]+$/i, TQ = /^0o[0-7]+$/i, EQ = parseInt;
function $Q(e) {
  if (typeof e == "number")
    return e;
  if (PQ(e))
    return Nx;
  if (Lx(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Lx(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = CQ(e);
  var r = _Q.test(e);
  return r || TQ.test(e) ? EQ(e.slice(2), r ? 2 : 8) : kQ.test(e) ? Nx : +e;
}
var OQ = $Q, MQ = OQ, zx = 1 / 0, IQ = 17976931348623157e292;
function RQ(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = MQ(e), e === zx || e === -zx) {
    var t = e < 0 ? -1 : 1;
    return t * IQ;
  }
  return e === e ? e : 0;
}
var DQ = RQ, AQ = DQ;
function FQ(e) {
  var t = AQ(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var LQ = FQ;
function NQ(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}
var NE = NQ, zQ = Ao, jQ = Mf, VQ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, BQ = /^\w*$/;
function WQ(e, t) {
  if (zQ(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || jQ(e) ? !0 : BQ.test(e) || !VQ.test(e) || t != null && e in Object(t);
}
var UQ = WQ, HQ = ar, GQ = HQ["__core-js_shared__"], YQ = GQ, yh = YQ, jx = function() {
  var e = /[^.]+$/.exec(yh && yh.keys && yh.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function qQ(e) {
  return !!jx && jx in e;
}
var KQ = qQ, XQ = Function.prototype, QQ = XQ.toString;
function ZQ(e) {
  if (e != null) {
    try {
      return QQ.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var zE = ZQ, JQ = I0, eZ = KQ, tZ = wa, rZ = zE, nZ = /[\\^$.*+?()[\]{}|]/g, oZ = /^\[object .+?Constructor\]$/, aZ = Function.prototype, iZ = Object.prototype, sZ = aZ.toString, lZ = iZ.hasOwnProperty, uZ = RegExp(
  "^" + sZ.call(lZ).replace(nZ, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function cZ(e) {
  if (!tZ(e) || eZ(e))
    return !1;
  var t = JQ(e) ? uZ : oZ;
  return t.test(rZ(e));
}
var dZ = cZ;
function fZ(e, t) {
  return e == null ? void 0 : e[t];
}
var pZ = fZ, hZ = dZ, vZ = pZ;
function mZ(e, t) {
  var r = vZ(e, t);
  return hZ(r) ? r : void 0;
}
var xa = mZ, gZ = xa, yZ = gZ(Object, "create"), If = yZ, Vx = If;
function bZ() {
  this.__data__ = Vx ? Vx(null) : {}, this.size = 0;
}
var wZ = bZ;
function xZ(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var SZ = xZ, CZ = If, PZ = "__lodash_hash_undefined__", kZ = Object.prototype, _Z = kZ.hasOwnProperty;
function TZ(e) {
  var t = this.__data__;
  if (CZ) {
    var r = t[e];
    return r === PZ ? void 0 : r;
  }
  return _Z.call(t, e) ? t[e] : void 0;
}
var EZ = TZ, $Z = If, OZ = Object.prototype, MZ = OZ.hasOwnProperty;
function IZ(e) {
  var t = this.__data__;
  return $Z ? t[e] !== void 0 : MZ.call(t, e);
}
var RZ = IZ, DZ = If, AZ = "__lodash_hash_undefined__";
function FZ(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = DZ && t === void 0 ? AZ : t, this;
}
var LZ = FZ, NZ = wZ, zZ = SZ, jZ = EZ, VZ = RZ, BZ = LZ;
function Wi(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Wi.prototype.clear = NZ;
Wi.prototype.delete = zZ;
Wi.prototype.get = jZ;
Wi.prototype.has = VZ;
Wi.prototype.set = BZ;
var WZ = Wi;
function UZ() {
  this.__data__ = [], this.size = 0;
}
var HZ = UZ;
function GZ(e, t) {
  return e === t || e !== e && t !== t;
}
var jE = GZ, YZ = jE;
function qZ(e, t) {
  for (var r = e.length; r--; )
    if (YZ(e[r][0], t))
      return r;
  return -1;
}
var Rf = qZ, KZ = Rf, XZ = Array.prototype, QZ = XZ.splice;
function ZZ(e) {
  var t = this.__data__, r = KZ(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : QZ.call(t, r, 1), --this.size, !0;
}
var JZ = ZZ, eJ = Rf;
function tJ(e) {
  var t = this.__data__, r = eJ(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var rJ = tJ, nJ = Rf;
function oJ(e) {
  return nJ(this.__data__, e) > -1;
}
var aJ = oJ, iJ = Rf;
function sJ(e, t) {
  var r = this.__data__, n = iJ(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var lJ = sJ, uJ = HZ, cJ = JZ, dJ = rJ, fJ = aJ, pJ = lJ;
function Ui(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ui.prototype.clear = uJ;
Ui.prototype.delete = cJ;
Ui.prototype.get = dJ;
Ui.prototype.has = fJ;
Ui.prototype.set = pJ;
var Df = Ui, hJ = xa, vJ = ar, mJ = hJ(vJ, "Map"), D0 = mJ, Bx = WZ, gJ = Df, yJ = D0;
function bJ() {
  this.size = 0, this.__data__ = {
    hash: new Bx(),
    map: new (yJ || gJ)(),
    string: new Bx()
  };
}
var wJ = bJ;
function xJ(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var SJ = xJ, CJ = SJ;
function PJ(e, t) {
  var r = e.__data__;
  return CJ(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Af = PJ, kJ = Af;
function _J(e) {
  var t = kJ(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var TJ = _J, EJ = Af;
function $J(e) {
  return EJ(this, e).get(e);
}
var OJ = $J, MJ = Af;
function IJ(e) {
  return MJ(this, e).has(e);
}
var RJ = IJ, DJ = Af;
function AJ(e, t) {
  var r = DJ(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var FJ = AJ, LJ = wJ, NJ = TJ, zJ = OJ, jJ = RJ, VJ = FJ;
function Hi(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Hi.prototype.clear = LJ;
Hi.prototype.delete = NJ;
Hi.prototype.get = zJ;
Hi.prototype.has = jJ;
Hi.prototype.set = VJ;
var VE = Hi, BE = VE, BJ = "Expected a function";
function A0(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(BJ);
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(o))
      return a.get(o);
    var i = e.apply(this, n);
    return r.cache = a.set(o, i) || a, i;
  };
  return r.cache = new (A0.Cache || BE)(), r;
}
A0.Cache = BE;
var WJ = A0, UJ = WJ, HJ = 500;
function GJ(e) {
  var t = UJ(e, function(n) {
    return r.size === HJ && r.clear(), n;
  }), r = t.cache;
  return t;
}
var YJ = GJ, qJ = YJ, KJ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, XJ = /\\(\\)?/g, QJ = qJ(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(KJ, function(r, n, o, a) {
    t.push(o ? a.replace(XJ, "$1") : n || r);
  }), t;
}), ZJ = QJ, Wx = Jl, JJ = NE, eee = Ao, tee = Mf, ree = 1 / 0, Ux = Wx ? Wx.prototype : void 0, Hx = Ux ? Ux.toString : void 0;
function WE(e) {
  if (typeof e == "string")
    return e;
  if (eee(e))
    return JJ(e, WE) + "";
  if (tee(e))
    return Hx ? Hx.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ree ? "-0" : t;
}
var nee = WE, oee = nee;
function aee(e) {
  return e == null ? "" : oee(e);
}
var iee = aee, see = Ao, lee = UQ, uee = ZJ, cee = iee;
function dee(e, t) {
  return see(e) ? e : lee(e, t) ? [e] : uee(cee(e));
}
var F0 = dee, fee = Mf, pee = 1 / 0;
function hee(e) {
  if (typeof e == "string" || fee(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -pee ? "-0" : t;
}
var UE = hee, vee = F0, mee = UE;
function gee(e, t) {
  t = vee(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[mee(t[r++])];
  return r && r == n ? e : void 0;
}
var yee = gee, bee = xa, wee = function() {
  try {
    var e = bee(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), HE = wee, Gx = HE;
function xee(e, t, r) {
  t == "__proto__" && Gx ? Gx(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var GE = xee, See = GE, Cee = jE, Pee = Object.prototype, kee = Pee.hasOwnProperty;
function _ee(e, t, r) {
  var n = e[t];
  (!(kee.call(e, t) && Cee(n, r)) || r === void 0 && !(t in e)) && See(e, t, r);
}
var YE = _ee;
function Tee(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var L0 = Tee, Yx = Jl, Eee = OE, $ee = Ao, qx = Yx ? Yx.isConcatSpreadable : void 0;
function Oee(e) {
  return $ee(e) || Eee(e) || !!(qx && e && e[qx]);
}
var Mee = Oee, Iee = L0, Ree = Mee;
function qE(e, t, r, n, o) {
  var a = -1, i = e.length;
  for (r || (r = Ree), o || (o = []); ++a < i; ) {
    var s = e[a];
    t > 0 && r(s) ? t > 1 ? qE(s, t - 1, r, n, o) : Iee(o, s) : n || (o[o.length] = s);
  }
  return o;
}
var Dee = qE, Aee = Dee;
function Fee(e) {
  var t = e == null ? 0 : e.length;
  return t ? Aee(e, 1) : [];
}
var Lee = Fee;
function Nee(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var N0 = Nee, zee = N0, Kx = Math.max;
function jee(e, t, r) {
  return t = Kx(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, a = Kx(n.length - t, 0), i = Array(a); ++o < a; )
      i[o] = n[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = n[o];
    return s[t] = r(i), zee(e, this, s);
  };
}
var Vee = jee;
function Bee(e) {
  return function() {
    return e;
  };
}
var Wee = Bee, Uee = Wee, Xx = HE, Hee = LE, Gee = Xx ? function(e, t) {
  return Xx(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Uee(t),
    writable: !0
  });
} : Hee, Yee = Gee, qee = 800, Kee = 16, Xee = Date.now;
function Qee(e) {
  var t = 0, r = 0;
  return function() {
    var n = Xee(), o = Kee - (n - r);
    if (r = n, o > 0) {
      if (++t >= qee)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var KE = Qee, Zee = Yee, Jee = KE, ete = Jee(Zee), XE = ete, tte = Lee, rte = Vee, nte = XE;
function ote(e) {
  return nte(rte(e, void 0, tte), e + "");
}
var ate = ote, ite = Df;
function ste() {
  this.__data__ = new ite(), this.size = 0;
}
var lte = ste;
function ute(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var cte = ute;
function dte(e) {
  return this.__data__.get(e);
}
var fte = dte;
function pte(e) {
  return this.__data__.has(e);
}
var hte = pte, vte = Df, mte = D0, gte = VE, yte = 200;
function bte(e, t) {
  var r = this.__data__;
  if (r instanceof vte) {
    var n = r.__data__;
    if (!mte || n.length < yte - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new gte(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var wte = bte, xte = Df, Ste = lte, Cte = cte, Pte = fte, kte = hte, _te = wte;
function Gi(e) {
  var t = this.__data__ = new xte(e);
  this.size = t.size;
}
Gi.prototype.clear = Ste;
Gi.prototype.delete = Cte;
Gi.prototype.get = Pte;
Gi.prototype.has = kte;
Gi.prototype.set = _te;
var Tte = Gi, Ete = ar, $te = Ete.Uint8Array, Ote = $te, Mte = L0, Ite = Ao;
function Rte(e, t, r) {
  var n = t(e);
  return Ite(e) ? n : Mte(n, r(e));
}
var QE = Rte;
function Dte(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (a[o++] = i);
  }
  return a;
}
var Ate = Dte;
function Fte() {
  return [];
}
var ZE = Fte, Lte = Ate, Nte = ZE, zte = Object.prototype, jte = zte.propertyIsEnumerable, Qx = Object.getOwnPropertySymbols, Vte = Qx ? function(e) {
  return e == null ? [] : (e = Object(e), Lte(Qx(e), function(t) {
    return jte.call(e, t);
  }));
} : Nte, z0 = Vte, Bte = QE, Wte = z0, Ute = R0;
function Hte(e) {
  return Bte(e, Ute, Wte);
}
var Gte = Hte, Yte = xa, qte = ar, Kte = Yte(qte, "DataView"), Xte = Kte, Qte = xa, Zte = ar, Jte = Qte(Zte, "Promise"), ere = Jte, tre = xa, rre = ar, nre = tre(rre, "Set"), ore = nre, are = xa, ire = ar, sre = are(ire, "WeakMap"), JE = sre, um = Xte, cm = D0, dm = ere, fm = ore, pm = JE, e$ = Bi, Yi = zE, Zx = "[object Map]", lre = "[object Object]", Jx = "[object Promise]", eS = "[object Set]", tS = "[object WeakMap]", rS = "[object DataView]", ure = Yi(um), cre = Yi(cm), dre = Yi(dm), fre = Yi(fm), pre = Yi(pm), Go = e$;
(um && Go(new um(new ArrayBuffer(1))) != rS || cm && Go(new cm()) != Zx || dm && Go(dm.resolve()) != Jx || fm && Go(new fm()) != eS || pm && Go(new pm()) != tS) && (Go = function(e) {
  var t = e$(e), r = t == lre ? e.constructor : void 0, n = r ? Yi(r) : "";
  if (n)
    switch (n) {
      case ure:
        return rS;
      case cre:
        return Zx;
      case dre:
        return Jx;
      case fre:
        return eS;
      case pre:
        return tS;
    }
  return t;
});
var j0 = Go, hre = AE, vre = hre(Object.getPrototypeOf, Object), V0 = vre, mre = L0, gre = V0, yre = z0, bre = ZE, wre = Object.getOwnPropertySymbols, xre = wre ? function(e) {
  for (var t = []; e; )
    mre(t, yre(e)), e = gre(e);
  return t;
} : bre, t$ = xre;
function Sre(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Cre = Sre, Pre = wa, kre = M0, _re = Cre, Tre = Object.prototype, Ere = Tre.hasOwnProperty;
function $re(e) {
  if (!Pre(e))
    return _re(e);
  var t = kre(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Ere.call(e, n)) || r.push(n);
  return r;
}
var Ore = $re, Mre = DE, Ire = Ore, Rre = FE;
function Dre(e) {
  return Rre(e) ? Mre(e, !0) : Ire(e);
}
var B0 = Dre, Are = QE, Fre = t$, Lre = B0;
function Nre(e) {
  return Are(e, Lre, Fre);
}
var r$ = Nre;
function ht(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Lt(e) {
  ht(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || wn(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function or(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
var zre = {};
function qi() {
  return zre;
}
function jre(e) {
  return ht(1, arguments), e instanceof Date || wn(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Vre(e) {
  if (ht(1, arguments), !jre(e) && typeof e != "number")
    return !1;
  var t = Lt(e);
  return !isNaN(Number(t));
}
function Bre(e, t) {
  ht(2, arguments);
  var r = Lt(e).getTime(), n = or(t);
  return new Date(r + n);
}
function n$(e, t) {
  ht(2, arguments);
  var r = or(t);
  return Bre(e, -r);
}
var Wre = 864e5;
function Ure(e) {
  ht(1, arguments);
  var t = Lt(e), r = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var n = t.getTime(), o = r - n;
  return Math.floor(o / Wre) + 1;
}
function Fi(e) {
  ht(1, arguments);
  var t = 1, r = Lt(e), n = r.getUTCDay(), o = (n < t ? 7 : 0) + n - t;
  return r.setUTCDate(r.getUTCDate() - o), r.setUTCHours(0, 0, 0, 0), r;
}
function o$(e) {
  ht(1, arguments);
  var t = Lt(e), r = t.getUTCFullYear(), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(r + 1, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var o = Fi(n), a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(r, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var i = Fi(a);
  return t.getTime() >= o.getTime() ? r + 1 : t.getTime() >= i.getTime() ? r : r - 1;
}
function Hre(e) {
  ht(1, arguments);
  var t = o$(e), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(t, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var n = Fi(r);
  return n;
}
var Gre = 6048e5;
function a$(e) {
  ht(1, arguments);
  var t = Lt(e), r = Fi(t).getTime() - Hre(t).getTime();
  return Math.round(r / Gre) + 1;
}
function pa(e, t) {
  var r, n, o, a, i, s, l, u;
  ht(1, arguments);
  var c = qi(), d = or((r = (n = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : c.weekStartsOn) !== null && n !== void 0 ? n : (l = c.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = Lt(e), p = f.getUTCDay(), m = (p < d ? 7 : 0) + p - d;
  return f.setUTCDate(f.getUTCDate() - m), f.setUTCHours(0, 0, 0, 0), f;
}
function W0(e, t) {
  var r, n, o, a, i, s, l, u;
  ht(1, arguments);
  var c = Lt(e), d = c.getUTCFullYear(), f = qi(), p = or((r = (n = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = f.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var m = /* @__PURE__ */ new Date(0);
  m.setUTCFullYear(d + 1, 0, p), m.setUTCHours(0, 0, 0, 0);
  var g = pa(m, t), y = /* @__PURE__ */ new Date(0);
  y.setUTCFullYear(d, 0, p), y.setUTCHours(0, 0, 0, 0);
  var h = pa(y, t);
  return c.getTime() >= g.getTime() ? d + 1 : c.getTime() >= h.getTime() ? d : d - 1;
}
function Yre(e, t) {
  var r, n, o, a, i, s, l, u;
  ht(1, arguments);
  var c = qi(), d = or((r = (n = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : c.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = c.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), f = W0(e, t), p = /* @__PURE__ */ new Date(0);
  p.setUTCFullYear(f, 0, d), p.setUTCHours(0, 0, 0, 0);
  var m = pa(p, t);
  return m;
}
var qre = 6048e5;
function i$(e, t) {
  ht(1, arguments);
  var r = Lt(e), n = pa(r, t).getTime() - Yre(r, t).getTime();
  return Math.round(n / qre) + 1;
}
function $e(e, t) {
  for (var r = e < 0 ? "-" : "", n = Math.abs(e).toString(); n.length < t; )
    n = "0" + n;
  return r + n;
}
var Kre = {
  // Year
  y: function(t, r) {
    var n = t.getUTCFullYear(), o = n > 0 ? n : 1 - n;
    return $e(r === "yy" ? o % 100 : o, r.length);
  },
  // Month
  M: function(t, r) {
    var n = t.getUTCMonth();
    return r === "M" ? String(n + 1) : $e(n + 1, 2);
  },
  // Day of the month
  d: function(t, r) {
    return $e(t.getUTCDate(), r.length);
  },
  // AM or PM
  a: function(t, r) {
    var n = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(t, r) {
    return $e(t.getUTCHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H: function(t, r) {
    return $e(t.getUTCHours(), r.length);
  },
  // Minute
  m: function(t, r) {
    return $e(t.getUTCMinutes(), r.length);
  },
  // Second
  s: function(t, r) {
    return $e(t.getUTCSeconds(), r.length);
  },
  // Fraction of second
  S: function(t, r) {
    var n = r.length, o = t.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, n - 3));
    return $e(a, r.length);
  }
};
const ro = Kre;
var Ra = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Xre = {
  // Era
  G: function(t, r, n) {
    var o = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(o, {
          width: "abbreviated"
        });
      case "GGGGG":
        return n.era(o, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return n.era(o, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, r, n) {
    if (r === "yo") {
      var o = t.getUTCFullYear(), a = o > 0 ? o : 1 - o;
      return n.ordinalNumber(a, {
        unit: "year"
      });
    }
    return ro.y(t, r);
  },
  // Local week-numbering year
  Y: function(t, r, n, o) {
    var a = W0(t, o), i = a > 0 ? a : 1 - a;
    if (r === "YY") {
      var s = i % 100;
      return $e(s, 2);
    }
    return r === "Yo" ? n.ordinalNumber(i, {
      unit: "year"
    }) : $e(i, r.length);
  },
  // ISO week-numbering year
  R: function(t, r) {
    var n = o$(t);
    return $e(n, r.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, r) {
    var n = t.getUTCFullYear();
    return $e(n, r.length);
  },
  // Quarter
  Q: function(t, r, n) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(o);
      case "QQ":
        return $e(o, 2);
      case "Qo":
        return n.ordinalNumber(o, {
          unit: "quarter"
        });
      case "QQQ":
        return n.quarter(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(o, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, r, n) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (r) {
      case "q":
        return String(o);
      case "qq":
        return $e(o, 2);
      case "qo":
        return n.ordinalNumber(o, {
          unit: "quarter"
        });
      case "qqq":
        return n.quarter(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(o, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, r, n) {
    var o = t.getUTCMonth();
    switch (r) {
      case "M":
      case "MM":
        return ro.M(t, r);
      case "Mo":
        return n.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "MMM":
        return n.month(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(o, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, r, n) {
    var o = t.getUTCMonth();
    switch (r) {
      case "L":
        return String(o + 1);
      case "LL":
        return $e(o + 1, 2);
      case "Lo":
        return n.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "LLL":
        return n.month(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(o, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, r, n, o) {
    var a = i$(t, o);
    return r === "wo" ? n.ordinalNumber(a, {
      unit: "week"
    }) : $e(a, r.length);
  },
  // ISO week of year
  I: function(t, r, n) {
    var o = a$(t);
    return r === "Io" ? n.ordinalNumber(o, {
      unit: "week"
    }) : $e(o, r.length);
  },
  // Day of the month
  d: function(t, r, n) {
    return r === "do" ? n.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : ro.d(t, r);
  },
  // Day of year
  D: function(t, r, n) {
    var o = Ure(t);
    return r === "Do" ? n.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : $e(o, r.length);
  },
  // Day of week
  E: function(t, r, n) {
    var o = t.getUTCDay();
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, r, n, o) {
    var a = t.getUTCDay(), i = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "e":
        return String(i);
      case "ee":
        return $e(i, 2);
      case "eo":
        return n.ordinalNumber(i, {
          unit: "day"
        });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, r, n, o) {
    var a = t.getUTCDay(), i = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "c":
        return String(i);
      case "cc":
        return $e(i, r.length);
      case "co":
        return n.ordinalNumber(i, {
          unit: "day"
        });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, r, n) {
    var o = t.getUTCDay(), a = o === 0 ? 7 : o;
    switch (r) {
      case "i":
        return String(a);
      case "ii":
        return $e(a, r.length);
      case "io":
        return n.ordinalNumber(a, {
          unit: "day"
        });
      case "iii":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, r, n) {
    var o = t.getUTCHours(), a = o / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, r, n) {
    var o = t.getUTCHours(), a;
    switch (o === 12 ? a = Ra.noon : o === 0 ? a = Ra.midnight : a = o / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, r, n) {
    var o = t.getUTCHours(), a;
    switch (o >= 17 ? a = Ra.evening : o >= 12 ? a = Ra.afternoon : o >= 4 ? a = Ra.morning : a = Ra.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, r, n) {
    if (r === "ho") {
      var o = t.getUTCHours() % 12;
      return o === 0 && (o = 12), n.ordinalNumber(o, {
        unit: "hour"
      });
    }
    return ro.h(t, r);
  },
  // Hour [0-23]
  H: function(t, r, n) {
    return r === "Ho" ? n.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : ro.H(t, r);
  },
  // Hour [0-11]
  K: function(t, r, n) {
    var o = t.getUTCHours() % 12;
    return r === "Ko" ? n.ordinalNumber(o, {
      unit: "hour"
    }) : $e(o, r.length);
  },
  // Hour [1-24]
  k: function(t, r, n) {
    var o = t.getUTCHours();
    return o === 0 && (o = 24), r === "ko" ? n.ordinalNumber(o, {
      unit: "hour"
    }) : $e(o, r.length);
  },
  // Minute
  m: function(t, r, n) {
    return r === "mo" ? n.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : ro.m(t, r);
  },
  // Second
  s: function(t, r, n) {
    return r === "so" ? n.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : ro.s(t, r);
  },
  // Fraction of second
  S: function(t, r) {
    return ro.S(t, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, r, n, o) {
    var a = o._originalDate || t, i = a.getTimezoneOffset();
    if (i === 0)
      return "Z";
    switch (r) {
      case "X":
        return oS(i);
      case "XXXX":
      case "XX":
        return Yo(i);
      case "XXXXX":
      case "XXX":
      default:
        return Yo(i, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, r, n, o) {
    var a = o._originalDate || t, i = a.getTimezoneOffset();
    switch (r) {
      case "x":
        return oS(i);
      case "xxxx":
      case "xx":
        return Yo(i);
      case "xxxxx":
      case "xxx":
      default:
        return Yo(i, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, r, n, o) {
    var a = o._originalDate || t, i = a.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + nS(i, ":");
      case "OOOO":
      default:
        return "GMT" + Yo(i, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, r, n, o) {
    var a = o._originalDate || t, i = a.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + nS(i, ":");
      case "zzzz":
      default:
        return "GMT" + Yo(i, ":");
    }
  },
  // Seconds timestamp
  t: function(t, r, n, o) {
    var a = o._originalDate || t, i = Math.floor(a.getTime() / 1e3);
    return $e(i, r.length);
  },
  // Milliseconds timestamp
  T: function(t, r, n, o) {
    var a = o._originalDate || t, i = a.getTime();
    return $e(i, r.length);
  }
};
function nS(e, t) {
  var r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.floor(n / 60), a = n % 60;
  if (a === 0)
    return r + String(o);
  var i = t || "";
  return r + String(o) + i + $e(a, 2);
}
function oS(e, t) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + $e(Math.abs(e) / 60, 2);
  }
  return Yo(e, t);
}
function Yo(e, t) {
  var r = t || "", n = e > 0 ? "-" : "+", o = Math.abs(e), a = $e(Math.floor(o / 60), 2), i = $e(o % 60, 2);
  return n + a + r + i;
}
const Qre = Xre;
var aS = function(t, r) {
  switch (t) {
    case "P":
      return r.date({
        width: "short"
      });
    case "PP":
      return r.date({
        width: "medium"
      });
    case "PPP":
      return r.date({
        width: "long"
      });
    case "PPPP":
    default:
      return r.date({
        width: "full"
      });
  }
}, s$ = function(t, r) {
  switch (t) {
    case "p":
      return r.time({
        width: "short"
      });
    case "pp":
      return r.time({
        width: "medium"
      });
    case "ppp":
      return r.time({
        width: "long"
      });
    case "pppp":
    default:
      return r.time({
        width: "full"
      });
  }
}, Zre = function(t, r) {
  var n = t.match(/(P+)(p+)?/) || [], o = n[1], a = n[2];
  if (!a)
    return aS(t, r);
  var i;
  switch (o) {
    case "P":
      i = r.dateTime({
        width: "short"
      });
      break;
    case "PP":
      i = r.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      i = r.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      i = r.dateTime({
        width: "full"
      });
      break;
  }
  return i.replace("{{date}}", aS(o, r)).replace("{{time}}", s$(a, r));
}, Jre = {
  p: s$,
  P: Zre
};
const hm = Jre;
function l$(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var ene = ["D", "DD"], tne = ["YY", "YYYY"];
function u$(e) {
  return ene.indexOf(e) !== -1;
}
function c$(e) {
  return tne.indexOf(e) !== -1;
}
function Md(e, t, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var rne = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, nne = function(t, r, n) {
  var o, a = rne[t];
  return typeof a == "string" ? o = a : r === 1 ? o = a.one : o = a.other.replace("{{count}}", r.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + o : o + " ago" : o;
};
const d$ = nne;
function gi(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.width ? String(t.width) : e.defaultWidth, n = e.formats[r] || e.formats[e.defaultWidth];
    return n;
  };
}
var one = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ane = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ine = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, sne = {
  date: gi({
    formats: one,
    defaultWidth: "full"
  }),
  time: gi({
    formats: ane,
    defaultWidth: "full"
  }),
  dateTime: gi({
    formats: ine,
    defaultWidth: "full"
  })
};
const lne = sne;
var une = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, cne = function(t, r, n, o) {
  return une[t];
};
const f$ = cne;
function ys(e) {
  return function(t, r) {
    var n = r != null && r.context ? String(r.context) : "standalone", o;
    if (n === "formatting" && e.formattingValues) {
      var a = e.defaultFormattingWidth || e.defaultWidth, i = r != null && r.width ? String(r.width) : a;
      o = e.formattingValues[i] || e.formattingValues[a];
    } else {
      var s = e.defaultWidth, l = r != null && r.width ? String(r.width) : e.defaultWidth;
      o = e.values[l] || e.values[s];
    }
    var u = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[u];
  };
}
var dne = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, fne = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, pne = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, hne = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, vne = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, mne = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, gne = function(t, r) {
  var n = Number(t), o = n % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, yne = {
  ordinalNumber: gne,
  era: ys({
    values: dne,
    defaultWidth: "wide"
  }),
  quarter: ys({
    values: fne,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: ys({
    values: pne,
    defaultWidth: "wide"
  }),
  day: ys({
    values: hne,
    defaultWidth: "wide"
  }),
  dayPeriod: ys({
    values: vne,
    defaultWidth: "wide",
    formattingValues: mne,
    defaultFormattingWidth: "wide"
  })
};
const p$ = yne;
function bs(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    var i = a[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? wne(s, function(d) {
      return d.test(i);
    }) : bne(s, function(d) {
      return d.test(i);
    }), u;
    u = e.valueCallback ? e.valueCallback(l) : l, u = r.valueCallback ? r.valueCallback(u) : u;
    var c = t.slice(i.length);
    return {
      value: u,
      rest: c
    };
  };
}
function bne(e, t) {
  for (var r in e)
    if (e.hasOwnProperty(r) && t(e[r]))
      return r;
}
function wne(e, t) {
  for (var r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function xne(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.match(e.matchPattern);
    if (!n)
      return null;
    var o = n[0], a = t.match(e.parsePattern);
    if (!a)
      return null;
    var i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = r.valueCallback ? r.valueCallback(i) : i;
    var s = t.slice(o.length);
    return {
      value: i,
      rest: s
    };
  };
}
var Sne = /^(\d+)(th|st|nd|rd)?/i, Cne = /\d+/i, Pne = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, kne = {
  any: [/^b/i, /^(a|c)/i]
}, _ne = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Tne = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ene = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, $ne = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, One = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Mne = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ine = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Rne = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Dne = {
  ordinalNumber: xne({
    matchPattern: Sne,
    parsePattern: Cne,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: bs({
    matchPatterns: Pne,
    defaultMatchWidth: "wide",
    parsePatterns: kne,
    defaultParseWidth: "any"
  }),
  quarter: bs({
    matchPatterns: _ne,
    defaultMatchWidth: "wide",
    parsePatterns: Tne,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: bs({
    matchPatterns: Ene,
    defaultMatchWidth: "wide",
    parsePatterns: $ne,
    defaultParseWidth: "any"
  }),
  day: bs({
    matchPatterns: One,
    defaultMatchWidth: "wide",
    parsePatterns: Mne,
    defaultParseWidth: "any"
  }),
  dayPeriod: bs({
    matchPatterns: Ine,
    defaultMatchWidth: "any",
    parsePatterns: Rne,
    defaultParseWidth: "any"
  })
};
const h$ = Dne;
var Ane = {
  code: "en-US",
  formatDistance: d$,
  formatLong: lne,
  formatRelative: f$,
  localize: p$,
  match: h$,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const v$ = Ane;
var Fne = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Lne = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Nne = /^'([^]*?)'?$/, zne = /''/g, jne = /[a-zA-Z]/;
function Vne(e, t, r) {
  var n, o, a, i, s, l, u, c, d, f, p, m, g, y, h, v, b, x;
  ht(2, arguments);
  var k = String(t), P = qi(), C = (n = (o = r == null ? void 0 : r.locale) !== null && o !== void 0 ? o : P.locale) !== null && n !== void 0 ? n : v$, _ = or((a = (i = (s = (l = r == null ? void 0 : r.firstWeekContainsDate) !== null && l !== void 0 ? l : r == null || (u = r.locale) === null || u === void 0 || (c = u.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && s !== void 0 ? s : P.firstWeekContainsDate) !== null && i !== void 0 ? i : (d = P.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(_ >= 1 && _ <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var $ = or((p = (m = (g = (y = r == null ? void 0 : r.weekStartsOn) !== null && y !== void 0 ? y : r == null || (h = r.locale) === null || h === void 0 || (v = h.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && g !== void 0 ? g : P.weekStartsOn) !== null && m !== void 0 ? m : (b = P.locale) === null || b === void 0 || (x = b.options) === null || x === void 0 ? void 0 : x.weekStartsOn) !== null && p !== void 0 ? p : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!C.localize)
    throw new RangeError("locale must contain localize property");
  if (!C.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var O = Lt(e);
  if (!Vre(O))
    throw new RangeError("Invalid time value");
  var D = l$(O), H = n$(O, D), V = {
    firstWeekContainsDate: _,
    weekStartsOn: $,
    locale: C,
    _originalDate: O
  }, L = k.match(Lne).map(function(F) {
    var B = F[0];
    if (B === "p" || B === "P") {
      var Z = hm[B];
      return Z(F, C.formatLong);
    }
    return F;
  }).join("").match(Fne).map(function(F) {
    if (F === "''")
      return "'";
    var B = F[0];
    if (B === "'")
      return Bne(F);
    var Z = Qre[B];
    if (Z)
      return !(r != null && r.useAdditionalWeekYearTokens) && c$(F) && Md(F, t, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && u$(F) && Md(F, t, String(e)), Z(H, F, C.localize, V);
    if (B.match(jne))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + B + "`");
    return F;
  }).join("");
  return L;
}
function Bne(e) {
  var t = e.match(Nne);
  return t ? t[1].replace(zne, "'") : e;
}
function iS(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = P0(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var n = 0, o = function() {
      };
      return {
        s: o,
        n: function() {
          return n >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[n++]
          };
        },
        e: function(u) {
          throw u;
        },
        f: o
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, i = !1, s;
  return {
    s: function() {
      r = r.call(e);
    },
    n: function() {
      var u = r.next();
      return a = u.done, u;
    },
    e: function(u) {
      i = !0, s = u;
    },
    f: function() {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (i)
          throw s;
      }
    }
  };
}
function Wne(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e;
}
var Une = 10, m$ = /* @__PURE__ */ function() {
  function e() {
    pe(this, e), z(this, "priority", void 0), z(this, "subPriority", 0);
  }
  return he(e, [{
    key: "validate",
    value: function(r, n) {
      return !0;
    }
  }]), e;
}(), Hne = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r(n, o, a, i, s) {
    var l;
    return pe(this, r), l = t.call(this), l.value = n, l.validateValue = o, l.setValue = a, l.priority = i, s && (l.subPriority = s), l;
  }
  return he(r, [{
    key: "validate",
    value: function(o, a) {
      return this.validateValue(o, this.value, a);
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return this.setValue(o, a, this.value, i);
    }
  }]), r;
}(m$), Gne = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", Une), z(Y(n), "subPriority", -1), n;
  }
  return he(r, [{
    key: "set",
    value: function(o, a) {
      if (a.timestampIsSet)
        return o;
      var i = /* @__PURE__ */ new Date(0);
      return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i;
    }
  }]), r;
}(m$), Ee = /* @__PURE__ */ function() {
  function e() {
    pe(this, e), z(this, "incompatibleTokens", void 0), z(this, "priority", void 0), z(this, "subPriority", void 0);
  }
  return he(e, [{
    key: "run",
    value: function(r, n, o, a) {
      var i = this.parse(r, n, o, a);
      return i ? {
        setter: new Hne(i.value, this.validate, this.set, this.priority, this.subPriority),
        rest: i.rest
      } : null;
    }
  }, {
    key: "validate",
    value: function(r, n, o) {
      return !0;
    }
  }]), e;
}(), Yne = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 140), z(Y(n), "incompatibleTokens", ["R", "u", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      switch (a) {
        case "G":
        case "GG":
        case "GGG":
          return i.era(o, {
            width: "abbreviated"
          }) || i.era(o, {
            width: "narrow"
          });
        case "GGGGG":
          return i.era(o, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return i.era(o, {
            width: "wide"
          }) || i.era(o, {
            width: "abbreviated"
          }) || i.era(o, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return a.era = i, o.setUTCFullYear(i, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(Ee), qne = 6e4, Kne = 36e5, Xne = 1e3, ut = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, fn = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function ct(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function Ke(e, t) {
  var r = t.match(e);
  return r ? {
    value: parseInt(r[0], 10),
    rest: t.slice(r[0].length)
  } : null;
}
function pn(e, t) {
  var r = t.match(e);
  if (!r)
    return null;
  if (r[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  var n = r[1] === "+" ? 1 : -1, o = r[2] ? parseInt(r[2], 10) : 0, a = r[3] ? parseInt(r[3], 10) : 0, i = r[5] ? parseInt(r[5], 10) : 0;
  return {
    value: n * (o * Kne + a * qne + i * Xne),
    rest: t.slice(r[0].length)
  };
}
function g$(e) {
  return Ke(ut.anyDigitsSigned, e);
}
function at(e, t) {
  switch (e) {
    case 1:
      return Ke(ut.singleDigit, t);
    case 2:
      return Ke(ut.twoDigits, t);
    case 3:
      return Ke(ut.threeDigits, t);
    case 4:
      return Ke(ut.fourDigits, t);
    default:
      return Ke(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function Id(e, t) {
  switch (e) {
    case 1:
      return Ke(ut.singleDigitSigned, t);
    case 2:
      return Ke(ut.twoDigitsSigned, t);
    case 3:
      return Ke(ut.threeDigitsSigned, t);
    case 4:
      return Ke(ut.fourDigitsSigned, t);
    default:
      return Ke(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function U0(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function y$(e, t) {
  var r = t > 0, n = r ? t : 1 - t, o;
  if (n <= 50)
    o = e || 100;
  else {
    var a = n + 50, i = Math.floor(a / 100) * 100, s = e >= a % 100;
    o = e + i - (s ? 100 : 0);
  }
  return r ? o : 1 - o;
}
function b$(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
var Qne = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 130), z(Y(n), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      var s = function(u) {
        return {
          year: u,
          isTwoDigitYear: a === "yy"
        };
      };
      switch (a) {
        case "y":
          return ct(at(4, o), s);
        case "yo":
          return ct(i.ordinalNumber(o, {
            unit: "year"
          }), s);
        default:
          return ct(at(a.length, o), s);
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      return a.isTwoDigitYear || a.year > 0;
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      var s = o.getUTCFullYear();
      if (i.isTwoDigitYear) {
        var l = y$(i.year, s);
        return o.setUTCFullYear(l, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
      }
      var u = !("era" in a) || a.era === 1 ? i.year : 1 - i.year;
      return o.setUTCFullYear(u, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(Ee), Zne = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 130), z(Y(n), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      var s = function(u) {
        return {
          year: u,
          isTwoDigitYear: a === "YY"
        };
      };
      switch (a) {
        case "Y":
          return ct(at(4, o), s);
        case "Yo":
          return ct(i.ordinalNumber(o, {
            unit: "year"
          }), s);
        default:
          return ct(at(a.length, o), s);
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      return a.isTwoDigitYear || a.year > 0;
    }
  }, {
    key: "set",
    value: function(o, a, i, s) {
      var l = W0(o, s);
      if (i.isTwoDigitYear) {
        var u = y$(i.year, l);
        return o.setUTCFullYear(u, 0, s.firstWeekContainsDate), o.setUTCHours(0, 0, 0, 0), pa(o, s);
      }
      var c = !("era" in a) || a.era === 1 ? i.year : 1 - i.year;
      return o.setUTCFullYear(c, 0, s.firstWeekContainsDate), o.setUTCHours(0, 0, 0, 0), pa(o, s);
    }
  }]), r;
}(Ee), Jne = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 130), z(Y(n), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a) {
      return Id(a === "R" ? 4 : a.length, o);
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      var s = /* @__PURE__ */ new Date(0);
      return s.setUTCFullYear(i, 0, 4), s.setUTCHours(0, 0, 0, 0), Fi(s);
    }
  }]), r;
}(Ee), eoe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 130), z(Y(n), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a) {
      return Id(a === "u" ? 4 : a.length, o);
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return o.setUTCFullYear(i, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(Ee), toe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 120), z(Y(n), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      switch (a) {
        case "Q":
        case "QQ":
          return at(a.length, o);
        case "Qo":
          return i.ordinalNumber(o, {
            unit: "quarter"
          });
        case "QQQ":
          return i.quarter(o, {
            width: "abbreviated",
            context: "formatting"
          }) || i.quarter(o, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return i.quarter(o, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return i.quarter(o, {
            width: "wide",
            context: "formatting"
          }) || i.quarter(o, {
            width: "abbreviated",
            context: "formatting"
          }) || i.quarter(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      return a >= 1 && a <= 4;
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return o.setUTCMonth((i - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(Ee), roe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 120), z(Y(n), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      switch (a) {
        case "q":
        case "qq":
          return at(a.length, o);
        case "qo":
          return i.ordinalNumber(o, {
            unit: "quarter"
          });
        case "qqq":
          return i.quarter(o, {
            width: "abbreviated",
            context: "standalone"
          }) || i.quarter(o, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return i.quarter(o, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return i.quarter(o, {
            width: "wide",
            context: "standalone"
          }) || i.quarter(o, {
            width: "abbreviated",
            context: "standalone"
          }) || i.quarter(o, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      return a >= 1 && a <= 4;
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return o.setUTCMonth((i - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(Ee), noe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), z(Y(n), "priority", 110), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      var s = function(u) {
        return u - 1;
      };
      switch (a) {
        case "M":
          return ct(Ke(ut.month, o), s);
        case "MM":
          return ct(at(2, o), s);
        case "Mo":
          return ct(i.ordinalNumber(o, {
            unit: "month"
          }), s);
        case "MMM":
          return i.month(o, {
            width: "abbreviated",
            context: "formatting"
          }) || i.month(o, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return i.month(o, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return i.month(o, {
            width: "wide",
            context: "formatting"
          }) || i.month(o, {
            width: "abbreviated",
            context: "formatting"
          }) || i.month(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      return a >= 0 && a <= 11;
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return o.setUTCMonth(i, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(Ee), ooe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 110), z(Y(n), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      var s = function(u) {
        return u - 1;
      };
      switch (a) {
        case "L":
          return ct(Ke(ut.month, o), s);
        case "LL":
          return ct(at(2, o), s);
        case "Lo":
          return ct(i.ordinalNumber(o, {
            unit: "month"
          }), s);
        case "LLL":
          return i.month(o, {
            width: "abbreviated",
            context: "standalone"
          }) || i.month(o, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return i.month(o, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return i.month(o, {
            width: "wide",
            context: "standalone"
          }) || i.month(o, {
            width: "abbreviated",
            context: "standalone"
          }) || i.month(o, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      return a >= 0 && a <= 11;
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return o.setUTCMonth(i, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(Ee);
function aoe(e, t, r) {
  ht(2, arguments);
  var n = Lt(e), o = or(t), a = i$(n, r) - o;
  return n.setUTCDate(n.getUTCDate() - a * 7), n;
}
var ioe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 100), z(Y(n), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      switch (a) {
        case "w":
          return Ke(ut.week, o);
        case "wo":
          return i.ordinalNumber(o, {
            unit: "week"
          });
        default:
          return at(a.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      return a >= 1 && a <= 53;
    }
  }, {
    key: "set",
    value: function(o, a, i, s) {
      return pa(aoe(o, i, s), s);
    }
  }]), r;
}(Ee);
function soe(e, t) {
  ht(2, arguments);
  var r = Lt(e), n = or(t), o = a$(r) - n;
  return r.setUTCDate(r.getUTCDate() - o * 7), r;
}
var loe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 100), z(Y(n), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      switch (a) {
        case "I":
          return Ke(ut.week, o);
        case "Io":
          return i.ordinalNumber(o, {
            unit: "week"
          });
        default:
          return at(a.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      return a >= 1 && a <= 53;
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return Fi(soe(o, i));
    }
  }]), r;
}(Ee), uoe = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], coe = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], doe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 90), z(Y(n), "subPriority", 1), z(Y(n), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      switch (a) {
        case "d":
          return Ke(ut.date, o);
        case "do":
          return i.ordinalNumber(o, {
            unit: "date"
          });
        default:
          return at(a.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      var i = o.getUTCFullYear(), s = b$(i), l = o.getUTCMonth();
      return s ? a >= 1 && a <= coe[l] : a >= 1 && a <= uoe[l];
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return o.setUTCDate(i), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(Ee), foe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 90), z(Y(n), "subpriority", 1), z(Y(n), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      switch (a) {
        case "D":
        case "DD":
          return Ke(ut.dayOfYear, o);
        case "Do":
          return i.ordinalNumber(o, {
            unit: "date"
          });
        default:
          return at(a.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      var i = o.getUTCFullYear(), s = b$(i);
      return s ? a >= 1 && a <= 366 : a >= 1 && a <= 365;
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return o.setUTCMonth(0, i), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(Ee);
function H0(e, t, r) {
  var n, o, a, i, s, l, u, c;
  ht(2, arguments);
  var d = qi(), f = or((n = (o = (a = (i = r == null ? void 0 : r.weekStartsOn) !== null && i !== void 0 ? i : r == null || (s = r.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && a !== void 0 ? a : d.weekStartsOn) !== null && o !== void 0 ? o : (u = d.locale) === null || u === void 0 || (c = u.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Lt(e), m = or(t), g = p.getUTCDay(), y = m % 7, h = (y + 7) % 7, v = (h < f ? 7 : 0) + m - g;
  return p.setUTCDate(p.getUTCDate() + v), p;
}
var poe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 90), z(Y(n), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      switch (a) {
        case "E":
        case "EE":
        case "EEE":
          return i.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(o, {
            width: "short",
            context: "formatting"
          }) || i.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return i.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return i.day(o, {
            width: "short",
            context: "formatting"
          }) || i.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return i.day(o, {
            width: "wide",
            context: "formatting"
          }) || i.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(o, {
            width: "short",
            context: "formatting"
          }) || i.day(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      return a >= 0 && a <= 6;
    }
  }, {
    key: "set",
    value: function(o, a, i, s) {
      return o = H0(o, i, s), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(Ee), hoe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 90), z(Y(n), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i, s) {
      var l = function(c) {
        var d = Math.floor((c - 1) / 7) * 7;
        return (c + s.weekStartsOn + 6) % 7 + d;
      };
      switch (a) {
        case "e":
        case "ee":
          return ct(at(a.length, o), l);
        case "eo":
          return ct(i.ordinalNumber(o, {
            unit: "day"
          }), l);
        case "eee":
          return i.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(o, {
            width: "short",
            context: "formatting"
          }) || i.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return i.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return i.day(o, {
            width: "short",
            context: "formatting"
          }) || i.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return i.day(o, {
            width: "wide",
            context: "formatting"
          }) || i.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(o, {
            width: "short",
            context: "formatting"
          }) || i.day(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      return a >= 0 && a <= 6;
    }
  }, {
    key: "set",
    value: function(o, a, i, s) {
      return o = H0(o, i, s), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(Ee), voe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 90), z(Y(n), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i, s) {
      var l = function(c) {
        var d = Math.floor((c - 1) / 7) * 7;
        return (c + s.weekStartsOn + 6) % 7 + d;
      };
      switch (a) {
        case "c":
        case "cc":
          return ct(at(a.length, o), l);
        case "co":
          return ct(i.ordinalNumber(o, {
            unit: "day"
          }), l);
        case "ccc":
          return i.day(o, {
            width: "abbreviated",
            context: "standalone"
          }) || i.day(o, {
            width: "short",
            context: "standalone"
          }) || i.day(o, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return i.day(o, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return i.day(o, {
            width: "short",
            context: "standalone"
          }) || i.day(o, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return i.day(o, {
            width: "wide",
            context: "standalone"
          }) || i.day(o, {
            width: "abbreviated",
            context: "standalone"
          }) || i.day(o, {
            width: "short",
            context: "standalone"
          }) || i.day(o, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      return a >= 0 && a <= 6;
    }
  }, {
    key: "set",
    value: function(o, a, i, s) {
      return o = H0(o, i, s), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(Ee);
function moe(e, t) {
  ht(2, arguments);
  var r = or(t);
  r % 7 === 0 && (r = r - 7);
  var n = 1, o = Lt(e), a = o.getUTCDay(), i = r % 7, s = (i + 7) % 7, l = (s < n ? 7 : 0) + r - a;
  return o.setUTCDate(o.getUTCDate() + l), o;
}
var goe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 90), z(Y(n), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      var s = function(u) {
        return u === 0 ? 7 : u;
      };
      switch (a) {
        case "i":
        case "ii":
          return at(a.length, o);
        case "io":
          return i.ordinalNumber(o, {
            unit: "day"
          });
        case "iii":
          return ct(i.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(o, {
            width: "short",
            context: "formatting"
          }) || i.day(o, {
            width: "narrow",
            context: "formatting"
          }), s);
        case "iiiii":
          return ct(i.day(o, {
            width: "narrow",
            context: "formatting"
          }), s);
        case "iiiiii":
          return ct(i.day(o, {
            width: "short",
            context: "formatting"
          }) || i.day(o, {
            width: "narrow",
            context: "formatting"
          }), s);
        case "iiii":
        default:
          return ct(i.day(o, {
            width: "wide",
            context: "formatting"
          }) || i.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(o, {
            width: "short",
            context: "formatting"
          }) || i.day(o, {
            width: "narrow",
            context: "formatting"
          }), s);
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      return a >= 1 && a <= 7;
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return o = moe(o, i), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(Ee), yoe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 80), z(Y(n), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      switch (a) {
        case "a":
        case "aa":
        case "aaa":
          return i.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return i.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return i.dayPeriod(o, {
            width: "wide",
            context: "formatting"
          }) || i.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return o.setUTCHours(U0(i), 0, 0, 0), o;
    }
  }]), r;
}(Ee), boe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 80), z(Y(n), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      switch (a) {
        case "b":
        case "bb":
        case "bbb":
          return i.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return i.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return i.dayPeriod(o, {
            width: "wide",
            context: "formatting"
          }) || i.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return o.setUTCHours(U0(i), 0, 0, 0), o;
    }
  }]), r;
}(Ee), woe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 80), z(Y(n), "incompatibleTokens", ["a", "b", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      switch (a) {
        case "B":
        case "BB":
        case "BBB":
          return i.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return i.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return i.dayPeriod(o, {
            width: "wide",
            context: "formatting"
          }) || i.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return o.setUTCHours(U0(i), 0, 0, 0), o;
    }
  }]), r;
}(Ee), xoe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 70), z(Y(n), "incompatibleTokens", ["H", "K", "k", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      switch (a) {
        case "h":
          return Ke(ut.hour12h, o);
        case "ho":
          return i.ordinalNumber(o, {
            unit: "hour"
          });
        default:
          return at(a.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      return a >= 1 && a <= 12;
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      var s = o.getUTCHours() >= 12;
      return s && i < 12 ? o.setUTCHours(i + 12, 0, 0, 0) : !s && i === 12 ? o.setUTCHours(0, 0, 0, 0) : o.setUTCHours(i, 0, 0, 0), o;
    }
  }]), r;
}(Ee), Soe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 70), z(Y(n), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      switch (a) {
        case "H":
          return Ke(ut.hour23h, o);
        case "Ho":
          return i.ordinalNumber(o, {
            unit: "hour"
          });
        default:
          return at(a.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      return a >= 0 && a <= 23;
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return o.setUTCHours(i, 0, 0, 0), o;
    }
  }]), r;
}(Ee), Coe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 70), z(Y(n), "incompatibleTokens", ["h", "H", "k", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      switch (a) {
        case "K":
          return Ke(ut.hour11h, o);
        case "Ko":
          return i.ordinalNumber(o, {
            unit: "hour"
          });
        default:
          return at(a.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      return a >= 0 && a <= 11;
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      var s = o.getUTCHours() >= 12;
      return s && i < 12 ? o.setUTCHours(i + 12, 0, 0, 0) : o.setUTCHours(i, 0, 0, 0), o;
    }
  }]), r;
}(Ee), Poe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 70), z(Y(n), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      switch (a) {
        case "k":
          return Ke(ut.hour24h, o);
        case "ko":
          return i.ordinalNumber(o, {
            unit: "hour"
          });
        default:
          return at(a.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      return a >= 1 && a <= 24;
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      var s = i <= 24 ? i % 24 : i;
      return o.setUTCHours(s, 0, 0, 0), o;
    }
  }]), r;
}(Ee), koe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 60), z(Y(n), "incompatibleTokens", ["t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      switch (a) {
        case "m":
          return Ke(ut.minute, o);
        case "mo":
          return i.ordinalNumber(o, {
            unit: "minute"
          });
        default:
          return at(a.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      return a >= 0 && a <= 59;
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return o.setUTCMinutes(i, 0, 0), o;
    }
  }]), r;
}(Ee), _oe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 50), z(Y(n), "incompatibleTokens", ["t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a, i) {
      switch (a) {
        case "s":
          return Ke(ut.second, o);
        case "so":
          return i.ordinalNumber(o, {
            unit: "second"
          });
        default:
          return at(a.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, a) {
      return a >= 0 && a <= 59;
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return o.setUTCSeconds(i, 0), o;
    }
  }]), r;
}(Ee), Toe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 30), z(Y(n), "incompatibleTokens", ["t", "T"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a) {
      var i = function(l) {
        return Math.floor(l * Math.pow(10, -a.length + 3));
      };
      return ct(at(a.length, o), i);
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return o.setUTCMilliseconds(i), o;
    }
  }]), r;
}(Ee), Eoe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 10), z(Y(n), "incompatibleTokens", ["t", "T", "x"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a) {
      switch (a) {
        case "X":
          return pn(fn.basicOptionalMinutes, o);
        case "XX":
          return pn(fn.basic, o);
        case "XXXX":
          return pn(fn.basicOptionalSeconds, o);
        case "XXXXX":
          return pn(fn.extendedOptionalSeconds, o);
        case "XXX":
        default:
          return pn(fn.extended, o);
      }
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return a.timestampIsSet ? o : new Date(o.getTime() - i);
    }
  }]), r;
}(Ee), $oe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 10), z(Y(n), "incompatibleTokens", ["t", "T", "X"]), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o, a) {
      switch (a) {
        case "x":
          return pn(fn.basicOptionalMinutes, o);
        case "xx":
          return pn(fn.basic, o);
        case "xxxx":
          return pn(fn.basicOptionalSeconds, o);
        case "xxxxx":
          return pn(fn.extendedOptionalSeconds, o);
        case "xxx":
        default:
          return pn(fn.extended, o);
      }
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return a.timestampIsSet ? o : new Date(o.getTime() - i);
    }
  }]), r;
}(Ee), Ooe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 40), z(Y(n), "incompatibleTokens", "*"), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o) {
      return g$(o);
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return [new Date(i * 1e3), {
        timestampIsSet: !0
      }];
    }
  }]), r;
}(Ee), Moe = /* @__PURE__ */ function(e) {
  ye(r, e);
  var t = be(r);
  function r() {
    var n;
    pe(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return n = t.call.apply(t, [this].concat(a)), z(Y(n), "priority", 20), z(Y(n), "incompatibleTokens", "*"), n;
  }
  return he(r, [{
    key: "parse",
    value: function(o) {
      return g$(o);
    }
  }, {
    key: "set",
    value: function(o, a, i) {
      return [new Date(i), {
        timestampIsSet: !0
      }];
    }
  }]), r;
}(Ee), Ioe = {
  G: new Yne(),
  y: new Qne(),
  Y: new Zne(),
  R: new Jne(),
  u: new eoe(),
  Q: new toe(),
  q: new roe(),
  M: new noe(),
  L: new ooe(),
  w: new ioe(),
  I: new loe(),
  d: new doe(),
  D: new foe(),
  E: new poe(),
  e: new hoe(),
  c: new voe(),
  i: new goe(),
  a: new yoe(),
  b: new boe(),
  B: new woe(),
  h: new xoe(),
  H: new Soe(),
  K: new Coe(),
  k: new Poe(),
  m: new koe(),
  s: new _oe(),
  S: new Toe(),
  X: new Eoe(),
  x: new $oe(),
  t: new Ooe(),
  T: new Moe()
}, Roe = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Doe = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Aoe = /^'([^]*?)'?$/, Foe = /''/g, Loe = /\S/, Noe = /[a-zA-Z]/;
function zoe(e, t, r, n) {
  var o, a, i, s, l, u, c, d, f, p, m, g, y, h, v, b, x, k;
  ht(3, arguments);
  var P = String(e), C = String(t), _ = qi(), $ = (o = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : _.locale) !== null && o !== void 0 ? o : v$;
  if (!$.match)
    throw new RangeError("locale must contain match property");
  var O = or((i = (s = (l = (u = n == null ? void 0 : n.firstWeekContainsDate) !== null && u !== void 0 ? u : n == null || (c = n.locale) === null || c === void 0 || (d = c.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && l !== void 0 ? l : _.firstWeekContainsDate) !== null && s !== void 0 ? s : (f = _.locale) === null || f === void 0 || (p = f.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(O >= 1 && O <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var D = or((m = (g = (y = (h = n == null ? void 0 : n.weekStartsOn) !== null && h !== void 0 ? h : n == null || (v = n.locale) === null || v === void 0 || (b = v.options) === null || b === void 0 ? void 0 : b.weekStartsOn) !== null && y !== void 0 ? y : _.weekStartsOn) !== null && g !== void 0 ? g : (x = _.locale) === null || x === void 0 || (k = x.options) === null || k === void 0 ? void 0 : k.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(D >= 0 && D <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (C === "")
    return P === "" ? Lt(r) : /* @__PURE__ */ new Date(NaN);
  var H = {
    firstWeekContainsDate: O,
    weekStartsOn: D,
    locale: $
  }, V = [new Gne()], L = C.match(Doe).map(function(ne) {
    var ee = ne[0];
    if (ee in hm) {
      var xe = hm[ee];
      return xe(ne, $.formatLong);
    }
    return ne;
  }).join("").match(Roe), F = [], B = iS(L), Z;
  try {
    var R = function() {
      var ee = Z.value;
      !(n != null && n.useAdditionalWeekYearTokens) && c$(ee) && Md(ee, C, e), !(n != null && n.useAdditionalDayOfYearTokens) && u$(ee) && Md(ee, C, e);
      var xe = ee[0], Le = Ioe[xe];
      if (Le) {
        var Nt = Le.incompatibleTokens;
        if (Array.isArray(Nt)) {
          var Gt = F.find(function(de) {
            return Nt.includes(de.token) || de.token === xe;
          });
          if (Gt)
            throw new RangeError("The format string mustn't contain `".concat(Gt.fullToken, "` and `").concat(ee, "` at the same time"));
        } else if (Le.incompatibleTokens === "*" && F.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(ee, "` and any other token at the same time"));
        F.push({
          token: xe,
          fullToken: ee
        });
        var Sr = Le.run(P, ee, $.match, H);
        if (!Sr)
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        V.push(Sr.setter), P = Sr.rest;
      } else {
        if (xe.match(Noe))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + xe + "`");
        if (ee === "''" ? ee = "'" : xe === "'" && (ee = joe(ee)), P.indexOf(ee) === 0)
          P = P.slice(ee.length);
        else
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
      }
    };
    for (B.s(); !(Z = B.n()).done; ) {
      var N = R();
      if (wn(N) === "object")
        return N.v;
    }
  } catch (ne) {
    B.e(ne);
  } finally {
    B.f();
  }
  if (P.length > 0 && Loe.test(P))
    return /* @__PURE__ */ new Date(NaN);
  var K = V.map(function(ne) {
    return ne.priority;
  }).sort(function(ne, ee) {
    return ee - ne;
  }).filter(function(ne, ee, xe) {
    return xe.indexOf(ne) === ee;
  }).map(function(ne) {
    return V.filter(function(ee) {
      return ee.priority === ne;
    }).sort(function(ee, xe) {
      return xe.subPriority - ee.subPriority;
    });
  }).map(function(ne) {
    return ne[0];
  }), W = Lt(r);
  if (isNaN(W.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var Q = n$(W, l$(W)), j = {}, J = iS(K), ce;
  try {
    for (J.s(); !(ce = J.n()).done; ) {
      var se = ce.value;
      if (!se.validate(Q, H))
        return /* @__PURE__ */ new Date(NaN);
      var ue = se.set(Q, j, H);
      Array.isArray(ue) ? (Q = ue[0], Wne(j, ue[1])) : Q = ue;
    }
  } catch (ne) {
    J.e(ne);
  } finally {
    J.f();
  }
  return Q;
}
function joe(e) {
  return e.match(Aoe)[1].replace(Foe, "'");
}
var w$ = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], o = 0; o < arguments.length; o++) {
        var a = arguments[o];
        if (a) {
          var i = typeof a;
          if (i === "string" || i === "number")
            n.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var s = r.apply(null, a);
              s && n.push(s);
            }
          } else if (i === "object") {
            if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
              n.push(a.toString());
              continue;
            }
            for (var l in a)
              t.call(a, l) && a[l] && n.push(l);
          }
        }
      }
      return n.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(w$);
var Voe = w$.exports;
const yi = /* @__PURE__ */ Sn(Voe);
var sS = JE, Boe = sS && new sS(), x$ = Boe, Woe = LE, lS = x$, Uoe = lS ? function(e, t) {
  return lS.set(e, t), e;
} : Woe, S$ = Uoe, Hoe = wa, uS = Object.create, Goe = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Hoe(t))
      return {};
    if (uS)
      return uS(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), Ff = Goe, Yoe = Ff, qoe = wa;
function Koe(e) {
  return function() {
    var t = arguments;
    switch (t.length) {
      case 0:
        return new e();
      case 1:
        return new e(t[0]);
      case 2:
        return new e(t[0], t[1]);
      case 3:
        return new e(t[0], t[1], t[2]);
      case 4:
        return new e(t[0], t[1], t[2], t[3]);
      case 5:
        return new e(t[0], t[1], t[2], t[3], t[4]);
      case 6:
        return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
      case 7:
        return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
    }
    var r = Yoe(e.prototype), n = e.apply(r, t);
    return qoe(n) ? n : r;
  };
}
var Lf = Koe, Xoe = Lf, Qoe = ar, Zoe = 1;
function Joe(e, t, r) {
  var n = t & Zoe, o = Xoe(e);
  function a() {
    var i = this && this !== Qoe && this instanceof a ? o : e;
    return i.apply(n ? r : this, arguments);
  }
  return a;
}
var eae = Joe, tae = Math.max;
function rae(e, t, r, n) {
  for (var o = -1, a = e.length, i = r.length, s = -1, l = t.length, u = tae(a - i, 0), c = Array(l + u), d = !n; ++s < l; )
    c[s] = t[s];
  for (; ++o < i; )
    (d || o < a) && (c[r[o]] = e[o]);
  for (; u--; )
    c[s++] = e[o++];
  return c;
}
var C$ = rae, nae = Math.max;
function oae(e, t, r, n) {
  for (var o = -1, a = e.length, i = -1, s = r.length, l = -1, u = t.length, c = nae(a - s, 0), d = Array(c + u), f = !n; ++o < c; )
    d[o] = e[o];
  for (var p = o; ++l < u; )
    d[p + l] = t[l];
  for (; ++i < s; )
    (f || o < a) && (d[p + r[i]] = e[o++]);
  return d;
}
var P$ = oae;
function aae(e, t) {
  for (var r = e.length, n = 0; r--; )
    e[r] === t && ++n;
  return n;
}
var iae = aae;
function sae() {
}
var G0 = sae, lae = Ff, uae = G0, cae = 4294967295;
function Rd(e) {
  this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = cae, this.__views__ = [];
}
Rd.prototype = lae(uae.prototype);
Rd.prototype.constructor = Rd;
var Y0 = Rd;
function dae() {
}
var fae = dae, cS = x$, pae = fae, hae = cS ? function(e) {
  return cS.get(e);
} : pae, k$ = hae, vae = {}, mae = vae, dS = mae, gae = Object.prototype, yae = gae.hasOwnProperty;
function bae(e) {
  for (var t = e.name + "", r = dS[t], n = yae.call(dS, t) ? r.length : 0; n--; ) {
    var o = r[n], a = o.func;
    if (a == null || a == e)
      return o.name;
  }
  return t;
}
var wae = bae, xae = Ff, Sae = G0;
function Dd(e, t) {
  this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0;
}
Dd.prototype = xae(Sae.prototype);
Dd.prototype.constructor = Dd;
var _$ = Dd;
function Cae(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var q0 = Cae, Pae = Y0, kae = _$, _ae = q0;
function Tae(e) {
  if (e instanceof Pae)
    return e.clone();
  var t = new kae(e.__wrapped__, e.__chain__);
  return t.__actions__ = _ae(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
}
var Eae = Tae, $ae = Y0, fS = _$, Oae = G0, Mae = Ao, Iae = Do, Rae = Eae, Dae = Object.prototype, Aae = Dae.hasOwnProperty;
function Ad(e) {
  if (Iae(e) && !Mae(e) && !(e instanceof $ae)) {
    if (e instanceof fS)
      return e;
    if (Aae.call(e, "__wrapped__"))
      return Rae(e);
  }
  return new fS(e);
}
Ad.prototype = Oae.prototype;
Ad.prototype.constructor = Ad;
var Fae = Ad, Lae = Y0, Nae = k$, zae = wae, jae = Fae;
function Vae(e) {
  var t = zae(e), r = jae[t];
  if (typeof r != "function" || !(t in Lae.prototype))
    return !1;
  if (e === r)
    return !0;
  var n = Nae(r);
  return !!n && e === n[0];
}
var Bae = Vae, Wae = S$, Uae = KE, Hae = Uae(Wae), T$ = Hae, Gae = /\{\n\/\* \[wrapped with (.+)\] \*/, Yae = /,? & /;
function qae(e) {
  var t = e.match(Gae);
  return t ? t[1].split(Yae) : [];
}
var Kae = qae, Xae = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function Qae(e, t) {
  var r = t.length;
  if (!r)
    return e;
  var n = r - 1;
  return t[n] = (r > 1 ? "& " : "") + t[n], t = t.join(r > 2 ? ", " : " "), e.replace(Xae, `{
/* [wrapped with ` + t + `] */
`);
}
var Zae = Qae, Jae = dQ;
function eie(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && Jae(e, t, 0) > -1;
}
var tie = eie, rie = _E, nie = tie, oie = 1, aie = 2, iie = 8, sie = 16, lie = 32, uie = 64, cie = 128, die = 256, fie = 512, pie = [
  ["ary", cie],
  ["bind", oie],
  ["bindKey", aie],
  ["curry", iie],
  ["curryRight", sie],
  ["flip", fie],
  ["partial", lie],
  ["partialRight", uie],
  ["rearg", die]
];
function hie(e, t) {
  return rie(pie, function(r) {
    var n = "_." + r[0];
    t & r[1] && !nie(e, n) && e.push(n);
  }), e.sort();
}
var vie = hie, mie = Kae, gie = Zae, yie = XE, bie = vie;
function wie(e, t, r) {
  var n = t + "";
  return yie(e, gie(n, bie(mie(n), r)));
}
var E$ = wie, xie = Bae, Sie = T$, Cie = E$, Pie = 1, kie = 2, _ie = 4, Tie = 8, pS = 32, hS = 64;
function Eie(e, t, r, n, o, a, i, s, l, u) {
  var c = t & Tie, d = c ? i : void 0, f = c ? void 0 : i, p = c ? a : void 0, m = c ? void 0 : a;
  t |= c ? pS : hS, t &= ~(c ? hS : pS), t & _ie || (t &= ~(Pie | kie));
  var g = [
    e,
    t,
    o,
    p,
    d,
    m,
    f,
    s,
    l,
    u
  ], y = r.apply(void 0, g);
  return xie(e) && Sie(y, g), y.placeholder = n, Cie(y, e, t);
}
var $$ = Eie;
function $ie(e) {
  var t = e;
  return t.placeholder;
}
var O$ = $ie, Oie = q0, Mie = IE, Iie = Math.min;
function Rie(e, t) {
  for (var r = e.length, n = Iie(t.length, r), o = Oie(e); n--; ) {
    var a = t[n];
    e[n] = Mie(a, r) ? o[a] : void 0;
  }
  return e;
}
var Die = Rie, vS = "__lodash_placeholder__";
function Aie(e, t) {
  for (var r = -1, n = e.length, o = 0, a = []; ++r < n; ) {
    var i = e[r];
    (i === t || i === vS) && (e[r] = vS, a[o++] = r);
  }
  return a;
}
var K0 = Aie, Fie = C$, Lie = P$, Nie = iae, mS = Lf, zie = $$, jie = O$, Vie = Die, Bie = K0, Wie = ar, Uie = 1, Hie = 2, Gie = 8, Yie = 16, qie = 128, Kie = 512;
function M$(e, t, r, n, o, a, i, s, l, u) {
  var c = t & qie, d = t & Uie, f = t & Hie, p = t & (Gie | Yie), m = t & Kie, g = f ? void 0 : mS(e);
  function y() {
    for (var h = arguments.length, v = Array(h), b = h; b--; )
      v[b] = arguments[b];
    if (p)
      var x = jie(y), k = Nie(v, x);
    if (n && (v = Fie(v, n, o, p)), a && (v = Lie(v, a, i, p)), h -= k, p && h < u) {
      var P = Bie(v, x);
      return zie(
        e,
        t,
        M$,
        y.placeholder,
        r,
        v,
        P,
        s,
        l,
        u - h
      );
    }
    var C = d ? r : this, _ = f ? C[e] : e;
    return h = v.length, s ? v = Vie(v, s) : m && h > 1 && v.reverse(), c && l < h && (v.length = l), this && this !== Wie && this instanceof y && (_ = g || mS(_)), _.apply(C, v);
  }
  return y;
}
var I$ = M$, Xie = N0, Qie = Lf, Zie = I$, Jie = $$, ese = O$, tse = K0, rse = ar;
function nse(e, t, r) {
  var n = Qie(e);
  function o() {
    for (var a = arguments.length, i = Array(a), s = a, l = ese(o); s--; )
      i[s] = arguments[s];
    var u = a < 3 && i[0] !== l && i[a - 1] !== l ? [] : tse(i, l);
    if (a -= u.length, a < r)
      return Jie(
        e,
        t,
        Zie,
        o.placeholder,
        void 0,
        i,
        u,
        void 0,
        void 0,
        r - a
      );
    var c = this && this !== rse && this instanceof o ? n : e;
    return Xie(c, this, i);
  }
  return o;
}
var ose = nse, ase = N0, ise = Lf, sse = ar, lse = 1;
function use(e, t, r, n) {
  var o = t & lse, a = ise(e);
  function i() {
    for (var s = -1, l = arguments.length, u = -1, c = n.length, d = Array(c + l), f = this && this !== sse && this instanceof i ? a : e; ++u < c; )
      d[u] = n[u];
    for (; l--; )
      d[u++] = arguments[++s];
    return ase(f, o ? r : this, d);
  }
  return i;
}
var cse = use, dse = C$, fse = P$, gS = K0, yS = "__lodash_placeholder__", bh = 1, pse = 2, hse = 4, bS = 8, ws = 128, wS = 256, vse = Math.min;
function mse(e, t) {
  var r = e[1], n = t[1], o = r | n, a = o < (bh | pse | ws), i = n == ws && r == bS || n == ws && r == wS && e[7].length <= t[8] || n == (ws | wS) && t[7].length <= t[8] && r == bS;
  if (!(a || i))
    return e;
  n & bh && (e[2] = t[2], o |= r & bh ? 0 : hse);
  var s = t[3];
  if (s) {
    var l = e[3];
    e[3] = l ? dse(l, s, t[4]) : s, e[4] = l ? gS(e[3], yS) : t[4];
  }
  return s = t[5], s && (l = e[5], e[5] = l ? fse(l, s, t[6]) : s, e[6] = l ? gS(e[5], yS) : t[6]), s = t[7], s && (e[7] = s), n & ws && (e[8] = e[8] == null ? t[8] : vse(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = o, e;
}
var gse = mse, yse = S$, bse = eae, wse = ose, xse = I$, Sse = cse, Cse = k$, Pse = gse, kse = T$, _se = E$, xS = LQ, Tse = "Expected a function", SS = 1, Ese = 2, wh = 8, xh = 16, Sh = 32, CS = 64, PS = Math.max;
function $se(e, t, r, n, o, a, i, s) {
  var l = t & Ese;
  if (!l && typeof e != "function")
    throw new TypeError(Tse);
  var u = n ? n.length : 0;
  if (u || (t &= ~(Sh | CS), n = o = void 0), i = i === void 0 ? i : PS(xS(i), 0), s = s === void 0 ? s : xS(s), u -= o ? o.length : 0, t & CS) {
    var c = n, d = o;
    n = o = void 0;
  }
  var f = l ? void 0 : Cse(e), p = [
    e,
    t,
    r,
    n,
    o,
    c,
    d,
    a,
    i,
    s
  ];
  if (f && Pse(p, f), e = p[0], t = p[1], r = p[2], n = p[3], o = p[4], s = p[9] = p[9] === void 0 ? l ? 0 : e.length : PS(p[9] - u, 0), !s && t & (wh | xh) && (t &= ~(wh | xh)), !t || t == SS)
    var m = bse(e, t, r);
  else
    t == wh || t == xh ? m = wse(e, t, s) : (t == Sh || t == (SS | Sh)) && !o.length ? m = Sse(e, t, r, n) : m = xse.apply(void 0, p);
  var g = f ? yse : kse;
  return _se(g(m, p), e, t);
}
var Ose = $se, Mse = Ose, Ise = 8;
function X0(e, t, r) {
  t = r ? void 0 : t;
  var n = Mse(e, Ise, void 0, void 0, void 0, void 0, void 0, t);
  return n.placeholder = X0.placeholder, n;
}
X0.placeholder = {};
var Rse = X0;
const Dse = /* @__PURE__ */ Sn(Rse);
function Pc(e, t) {
  return !e || !t ? "" : Array.isArray(t) ? yi(t.filter(function(r) {
    return !!r;
  }).map(function(r) {
    return e + "-" + r;
  })) : e[e.length - 1] === "-" ? "" + e + t : e + "-" + t;
}
Dse(Pc);
function Ase(e, t) {
  return Array.isArray(t) ? t.indexOf(e) >= 0 : e === t;
}
function Fse(e) {
  return e && "setState" in e ? yR.findDOMNode(e) : e ?? null;
}
var Lse = function(t) {
  return t && ("current" in t ? t.current : t);
};
function kS(e) {
  var t = (e == null ? void 0 : e.root) || (e == null ? void 0 : e.child) || Lse(e);
  return t != null && t.nodeType && typeof (t == null ? void 0 : t.nodeName) == "string" ? t : Fse(t);
}
var _S = function(t) {
  return !t || typeof t == "function" ? t : function(r) {
    t.current = r;
  };
};
function Nse(e, t) {
  var r = _S(e), n = _S(t);
  return function(o) {
    typeof r == "function" && r(o), typeof n == "function" && n(o);
  };
}
function zse(e) {
  return e === (e == null ? void 0 : e.window) ? e : (e == null ? void 0 : e.nodeType) === 9 ? (e == null ? void 0 : e.defaultView) || (e == null ? void 0 : e.parentWindow) : null;
}
var R$ = function(t, r) {
  if (!r)
    return !1;
  do
    if (r === t)
      return !0;
  while (r.parentNode && (r = r.parentNode));
  return !1;
}, jse = function(t, r) {
  return r ? t.contains ? t.contains(r) : t.compareDocumentPosition ? t === r || !!(t.compareDocumentPosition(r) & 16) : R$(t, r) : !1;
};
const Vse = /* @__PURE__ */ function() {
  return kE ? jse : R$;
}();
function Bse(e) {
  return e && e.ownerDocument || document;
}
function D$(e, t, r, n) {
  return n === void 0 && (n = !1), e.addEventListener(t, r, n), {
    off: function() {
      e.removeEventListener(t, r, n);
    }
  };
}
function Wse(e) {
  var t = Bse(e), r = zse(t), n = t && t.documentElement, o = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  return t ? (Vse(n, e) && ((e == null ? void 0 : e.getBoundingClientRect) !== void 0 && (o = e.getBoundingClientRect()), (o.width || o.height) && n && r && (o = {
    top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
    left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0),
    width: (o.width === null ? e.offsetWidth : o.width) || 0,
    height: (o.height === null ? e.offsetHeight : o.height) || 0
  })), o) : null;
}
function Use() {
  if (!kE)
    return {};
  for (var e = {
    O: function(u) {
      return "o" + u.toLowerCase();
    },
    Moz: function(u) {
      return u.toLowerCase();
    },
    Webkit: function(u) {
      return "webkit" + u;
    },
    ms: function(u) {
      return "MS" + u;
    }
  }, t = Object.keys(e), r = document.createElement("div").style, n, o = "", a = 0; a < t.length; a += 1) {
    var i = t[a];
    if (i + "TransitionProperty" in r) {
      o = "-" + i.toLowerCase(), n = e[i]("TransitionEnd");
      break;
    }
  }
  !n && "transitionProperty" in r && (n = "transitionend"), r = null;
  var s = function(u) {
    return o + "-" + u;
  };
  return {
    end: n,
    backfaceVisibility: s("backface-visibility"),
    transform: s("transform"),
    property: s("transition-property"),
    timing: s("transition-timing-function"),
    delay: s("transition-delay"),
    duration: s("transition-duration")
  };
}
function Hse() {
  return Use().end;
}
var Gse = YE, Yse = GE;
function qse(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, i = t.length; ++a < i; ) {
    var s = t[a], l = n ? n(r[s], e[s], s, r, e) : void 0;
    l === void 0 && (l = e[s]), o ? Yse(r, s, l) : Gse(r, s, l);
  }
  return r;
}
var eu = qse, Kse = eu, Xse = R0;
function Qse(e, t) {
  return e && Kse(t, Xse(t), e);
}
var Zse = Qse, Jse = eu, ele = B0;
function tle(e, t) {
  return e && Jse(t, ele(t), e);
}
var rle = tle, Fd = { exports: {} };
Fd.exports;
(function(e, t) {
  var r = ar, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, i = a ? r.Buffer : void 0, s = i ? i.allocUnsafe : void 0;
  function l(u, c) {
    if (c)
      return u.slice();
    var d = u.length, f = s ? s(d) : new u.constructor(d);
    return u.copy(f), f;
  }
  e.exports = l;
})(Fd, Fd.exports);
var nle = Fd.exports, ole = eu, ale = z0;
function ile(e, t) {
  return ole(e, ale(e), t);
}
var sle = ile, lle = eu, ule = t$;
function cle(e, t) {
  return lle(e, ule(e), t);
}
var dle = cle, fle = Object.prototype, ple = fle.hasOwnProperty;
function hle(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && ple.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var vle = hle, TS = Ote;
function mle(e) {
  var t = new e.constructor(e.byteLength);
  return new TS(t).set(new TS(e)), t;
}
var Q0 = mle, gle = Q0;
function yle(e, t) {
  var r = t ? gle(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var ble = yle, wle = /\w*$/;
function xle(e) {
  var t = new e.constructor(e.source, wle.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Sle = xle, ES = Jl, $S = ES ? ES.prototype : void 0, OS = $S ? $S.valueOf : void 0;
function Cle(e) {
  return OS ? Object(OS.call(e)) : {};
}
var Ple = Cle, kle = Q0;
function _le(e, t) {
  var r = t ? kle(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Tle = _le, Ele = Q0, $le = ble, Ole = Sle, Mle = Ple, Ile = Tle, Rle = "[object Boolean]", Dle = "[object Date]", Ale = "[object Map]", Fle = "[object Number]", Lle = "[object RegExp]", Nle = "[object Set]", zle = "[object String]", jle = "[object Symbol]", Vle = "[object ArrayBuffer]", Ble = "[object DataView]", Wle = "[object Float32Array]", Ule = "[object Float64Array]", Hle = "[object Int8Array]", Gle = "[object Int16Array]", Yle = "[object Int32Array]", qle = "[object Uint8Array]", Kle = "[object Uint8ClampedArray]", Xle = "[object Uint16Array]", Qle = "[object Uint32Array]";
function Zle(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Vle:
      return Ele(e);
    case Rle:
    case Dle:
      return new n(+e);
    case Ble:
      return $le(e, r);
    case Wle:
    case Ule:
    case Hle:
    case Gle:
    case Yle:
    case qle:
    case Kle:
    case Xle:
    case Qle:
      return Ile(e, r);
    case Ale:
      return new n();
    case Fle:
    case zle:
      return new n(e);
    case Lle:
      return Ole(e);
    case Nle:
      return new n();
    case jle:
      return Mle(e);
  }
}
var Jle = Zle, eue = Ff, tue = V0, rue = M0;
function nue(e) {
  return typeof e.constructor == "function" && !rue(e) ? eue(tue(e)) : {};
}
var oue = nue, aue = j0, iue = Do, sue = "[object Map]";
function lue(e) {
  return iue(e) && aue(e) == sue;
}
var uue = lue, cue = uue, due = $0, MS = O0, IS = MS && MS.isMap, fue = IS ? due(IS) : cue, pue = fue, hue = j0, vue = Do, mue = "[object Set]";
function gue(e) {
  return vue(e) && hue(e) == mue;
}
var yue = gue, bue = yue, wue = $0, RS = O0, DS = RS && RS.isSet, xue = DS ? wue(DS) : bue, Sue = xue, Cue = Tte, Pue = _E, kue = YE, _ue = Zse, Tue = rle, Eue = nle, $ue = q0, Oue = sle, Mue = dle, Iue = Gte, Rue = r$, Due = j0, Aue = vle, Fue = Jle, Lue = oue, Nue = Ao, zue = ME, jue = pue, Vue = wa, Bue = Sue, Wue = R0, Uue = B0, Hue = 1, Gue = 2, Yue = 4, A$ = "[object Arguments]", que = "[object Array]", Kue = "[object Boolean]", Xue = "[object Date]", Que = "[object Error]", F$ = "[object Function]", Zue = "[object GeneratorFunction]", Jue = "[object Map]", ece = "[object Number]", L$ = "[object Object]", tce = "[object RegExp]", rce = "[object Set]", nce = "[object String]", oce = "[object Symbol]", ace = "[object WeakMap]", ice = "[object ArrayBuffer]", sce = "[object DataView]", lce = "[object Float32Array]", uce = "[object Float64Array]", cce = "[object Int8Array]", dce = "[object Int16Array]", fce = "[object Int32Array]", pce = "[object Uint8Array]", hce = "[object Uint8ClampedArray]", vce = "[object Uint16Array]", mce = "[object Uint32Array]", Re = {};
Re[A$] = Re[que] = Re[ice] = Re[sce] = Re[Kue] = Re[Xue] = Re[lce] = Re[uce] = Re[cce] = Re[dce] = Re[fce] = Re[Jue] = Re[ece] = Re[L$] = Re[tce] = Re[rce] = Re[nce] = Re[oce] = Re[pce] = Re[hce] = Re[vce] = Re[mce] = !0;
Re[Que] = Re[F$] = Re[ace] = !1;
function kc(e, t, r, n, o, a) {
  var i, s = t & Hue, l = t & Gue, u = t & Yue;
  if (r && (i = o ? r(e, n, o, a) : r(e)), i !== void 0)
    return i;
  if (!Vue(e))
    return e;
  var c = Nue(e);
  if (c) {
    if (i = Aue(e), !s)
      return $ue(e, i);
  } else {
    var d = Due(e), f = d == F$ || d == Zue;
    if (zue(e))
      return Eue(e, s);
    if (d == L$ || d == A$ || f && !o) {
      if (i = l || f ? {} : Lue(e), !s)
        return l ? Mue(e, Tue(i, e)) : Oue(e, _ue(i, e));
    } else {
      if (!Re[d])
        return o ? e : {};
      i = Fue(e, d, s);
    }
  }
  a || (a = new Cue());
  var p = a.get(e);
  if (p)
    return p;
  a.set(e, i), Bue(e) ? e.forEach(function(y) {
    i.add(kc(y, t, r, y, e, a));
  }) : jue(e) && e.forEach(function(y, h) {
    i.set(h, kc(y, t, r, h, e, a));
  });
  var m = u ? l ? Rue : Iue : l ? Uue : Wue, g = c ? void 0 : m(e);
  return Pue(g || e, function(y, h) {
    g && (h = y, y = e[h]), kue(i, h, kc(y, t, r, h, e, a));
  }), i;
}
var gce = kc;
function yce(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var bce = yce;
function wce(e, t, r) {
  var n = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), r = r > o ? o : r, r < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(o); ++n < o; )
    a[n] = e[n + t];
  return a;
}
var xce = wce, Sce = yee, Cce = xce;
function Pce(e, t) {
  return t.length < 2 ? e : Sce(e, Cce(t, 0, -1));
}
var kce = Pce, _ce = F0, Tce = bce, Ece = kce, $ce = UE;
function Oce(e, t) {
  return t = _ce(t, e), e = Ece(e, t), e == null || delete e[$ce(Tce(t))];
}
var Mce = Oce, Ice = Bi, Rce = V0, Dce = Do, Ace = "[object Object]", Fce = Function.prototype, Lce = Object.prototype, N$ = Fce.toString, Nce = Lce.hasOwnProperty, zce = N$.call(Object);
function jce(e) {
  if (!Dce(e) || Ice(e) != Ace)
    return !1;
  var t = Rce(e);
  if (t === null)
    return !0;
  var r = Nce.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && N$.call(r) == zce;
}
var Vce = jce, Bce = Vce;
function Wce(e) {
  return Bce(e) ? void 0 : e;
}
var Uce = Wce, Hce = NE, Gce = gce, Yce = Mce, qce = F0, Kce = eu, Xce = Uce, Qce = ate, Zce = r$, Jce = 1, ede = 2, tde = 4, rde = Qce(function(e, t) {
  var r = {};
  if (e == null)
    return r;
  var n = !1;
  t = Hce(t, function(a) {
    return a = qce(a, e), n || (n = a.length > 1), a;
  }), Kce(e, Zce(e), r), n && (r = Gce(r, Jce | ede | tde, Xce));
  for (var o = t.length; o--; )
    Yce(r, t[o]);
  return r;
}), nde = rde;
const ode = /* @__PURE__ */ Sn(nde);
function ade() {
  var e = document.createElement("div").style;
  return "webkitAnimation" in e ? "webkitAnimationEnd" : "animationend";
}
var ide = {
  onEnter: le.func,
  onEntering: le.func,
  onEntered: le.func,
  onExit: le.func,
  onExiting: le.func,
  onExited: le.func
}, Ge;
(function(e) {
  e[e.UNMOUNTED = 0] = "UNMOUNTED", e[e.EXITED = 1] = "EXITED", e[e.ENTERING = 2] = "ENTERING", e[e.ENTERED = 3] = "ENTERED", e[e.EXITING = 4] = "EXITING";
})(Ge || (Ge = {}));
var z$ = X({}, ide, {
  animation: le.bool,
  children: le.oneOfType([le.node, le.func]),
  className: le.string,
  in: le.bool,
  unmountOnExit: le.bool,
  transitionAppear: le.bool,
  timeout: le.number,
  exitedClassName: le.string,
  exitingClassName: le.string,
  enteredClassName: le.string,
  enteringClassName: le.string
}), Nf = /* @__PURE__ */ function(e) {
  IT(t, e);
  function t(n) {
    var o;
    o = e.call(this, n) || this, o.animationEventListener = null, o.instanceElement = null, o.nextCallback = null, o.needsUpdate = null, o.childRef = void 0;
    var a;
    return n.in ? a = n.transitionAppear ? Ge.EXITED : Ge.ENTERED : a = n.unmountOnExit ? Ge.UNMOUNTED : Ge.EXITED, o.state = {
      status: a
    }, o.nextCallback = null, o.childRef = /* @__PURE__ */ U.createRef(), o;
  }
  t.getDerivedStateFromProps = function(o, a) {
    return o.in && o.unmountOnExit && a.status === Ge.UNMOUNTED ? {
      status: Ge.EXITED
    } : null;
  };
  var r = t.prototype;
  return r.getSnapshotBeforeUpdate = function() {
    return (!this.props.in || !this.props.unmountOnExit) && (this.needsUpdate = !0), null;
  }, r.componentDidMount = function() {
    this.props.transitionAppear && this.props.in && this.performEnter(this.props);
  }, r.componentDidUpdate = function() {
    var o = this.state.status, a = this.props.unmountOnExit;
    if (a && o === Ge.EXITED) {
      this.props.in ? this.performEnter(this.props) : this.instanceElement && this.setState({
        status: Ge.UNMOUNTED
      });
      return;
    }
    this.needsUpdate && (this.needsUpdate = !1, this.props.in ? (o === Ge.EXITING || o === Ge.EXITED) && this.performEnter(this.props) : (o === Ge.ENTERING || o === Ge.ENTERED) && this.performExit(this.props));
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback(), this.instanceElement = null;
  }, r.onTransitionEnd = function(o, a) {
    var i;
    if (this.setNextCallback(a), (i = this.animationEventListener) === null || i === void 0 || i.off(), !!this.nextCallback)
      if (o) {
        var s = this.props, l = s.timeout, u = s.animation;
        this.animationEventListener = D$(o, u ? ade() : Hse(), this.nextCallback), l !== null && setTimeout(this.nextCallback, l);
      } else
        setTimeout(this.nextCallback, 0);
  }, r.setNextCallback = function(o) {
    var a = this, i = !0;
    return this.nextCallback = function(s) {
      if (i) {
        if (s) {
          a.instanceElement === s.target && (o(s), i = !1, a.nextCallback = null);
          return;
        }
        o(s), i = !1, a.nextCallback = null;
      }
    }, this.nextCallback && (this.nextCallback.cancel = function() {
      i = !1;
    }), this.nextCallback;
  }, r.getChildElement = function() {
    return this.childRef.current ? kS(this.childRef.current) : kS(this);
  }, r.performEnter = function(o) {
    var a = this, i = o || this.props, s = i.onEnter, l = i.onEntering, u = i.onEntered;
    this.cancelNextCallback();
    var c = this.getChildElement();
    this.instanceElement = c, s == null || s(c), this.safeSetState({
      status: Ge.ENTERING
    }, function() {
      l == null || l(c), a.onTransitionEnd(c, function() {
        a.safeSetState({
          status: Ge.ENTERED
        }, function() {
          u == null || u(c);
        });
      });
    });
  }, r.performExit = function(o) {
    var a = this, i = o || this.props, s = i.onExit, l = i.onExiting, u = i.onExited;
    this.cancelNextCallback();
    var c = this.getChildElement();
    this.instanceElement = c, s == null || s(c), this.safeSetState({
      status: Ge.EXITING
    }, function() {
      l == null || l(c), a.onTransitionEnd(c, function() {
        a.safeSetState({
          status: Ge.EXITED
        }, function() {
          u == null || u(c);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(o, a) {
    if (this.instanceElement) {
      var i = this.setNextCallback(a);
      this.setState(o, function() {
        return i == null ? void 0 : i();
      });
    }
  }, r.render = function() {
    var o, a = this.state.status;
    if (a === Ge.UNMOUNTED)
      return null;
    var i = this.props, s = i.children, l = i.className, u = i.exitedClassName, c = i.enteringClassName, d = i.enteredClassName, f = i.exitingClassName, p = da(i, ["children", "className", "exitedClassName", "enteringClassName", "enteredClassName", "exitingClassName"]), m = ode(p, Object.keys(z$)), g;
    if (a === Ge.EXITED ? g = u : a === Ge.ENTERING ? g = c : a === Ge.ENTERED ? g = d : a === Ge.EXITING && (g = f), GX(s))
      return m.className = yi(l, g), s(m, this.childRef);
    var y = U.Children.only(s);
    return /* @__PURE__ */ U.cloneElement(y, X({}, m, {
      ref: this.childRef,
      className: yi(l, (o = y.props) === null || o === void 0 ? void 0 : o.className, g)
    }));
  }, t;
}(U.Component);
Nf.propTypes = z$;
Nf.displayName = "Transition";
Nf.defaultProps = {
  timeout: 1e3
};
const sde = Nf;
var j$ = /* @__PURE__ */ U.createContext({});
function V$(e) {
  var t = w.useContext(j$) || {}, r = t.classPrefix, n = r === void 0 ? "rs" : r, o = Pc(n, e), a = w.useCallback(function() {
    var l = arguments.length ? yi.apply(void 0, arguments).split(" ").map(function(u) {
      return Pc(o, u);
    }) : [];
    return l.filter(function(u) {
      return u;
    }).join(" ");
  }, [o]), i = w.useCallback(function() {
    for (var l = arguments.length, u = new Array(l), c = 0; c < l; c++)
      u[c] = arguments[c];
    var d = a(u);
    return d ? o + " " + d : o;
  }, [o, a]), s = function() {
    var u = arguments.length ? yi.apply(void 0, arguments).split(" ").map(function(c) {
      return Pc(n, c);
    }) : [];
    return u.filter(function(c) {
      return c;
    }).join(" ");
  };
  return {
    withClassPrefix: i,
    merge: yi,
    prefix: a,
    rootPrefix: s
  };
}
var lde = {
  full: "EEEE, d MMMM yyyy",
  long: "d MMMM yyyy",
  medium: "d MMM yyyy",
  short: "dd/MM/yyyy"
}, ude = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, cde = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, dde = {
  date: gi({
    formats: lde,
    defaultWidth: "full"
  }),
  time: gi({
    formats: ude,
    defaultWidth: "full"
  }),
  dateTime: gi({
    formats: cde,
    defaultWidth: "full"
  })
};
const fde = dde;
var pde = {
  code: "en-GB",
  formatDistance: d$,
  formatLong: fde,
  formatRelative: f$,
  localize: p$,
  match: h$,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
const hde = pde;
var Ch = {
  sunday: "Su",
  monday: "Mo",
  tuesday: "Tu",
  wednesday: "We",
  thursday: "Th",
  friday: "Fr",
  saturday: "Sa",
  ok: "OK",
  today: "Today",
  yesterday: "Yesterday",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
  /**
   * Format of the string is based on Unicode Technical Standard #35:
   * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
   **/
  formattedMonthPattern: "MMM yyyy",
  formattedDayPattern: "dd MMM yyyy",
  dateLocale: hde
};
const vde = {
  common: {
    loading: "Loading...",
    emptyMessage: "No data found",
    remove: "Remove",
    clear: "Clear"
  },
  Plaintext: {
    unfilled: "Unfilled",
    notSelected: "Not selected",
    notUploaded: "Not uploaded"
  },
  Pagination: {
    more: "More",
    prev: "Previous",
    next: "Next",
    first: "First",
    last: "Last",
    limit: "{0} / page",
    total: "Total Rows: {0}",
    skip: "Go to{0}"
  },
  Calendar: Ch,
  DatePicker: X({}, Ch),
  DateRangePicker: X({}, Ch, {
    last7Days: "Last 7 Days"
  }),
  Picker: {
    noResultsText: "No results found",
    placeholder: "Select",
    searchPlaceholder: "Search",
    checkAll: "All"
  },
  InputPicker: {
    newItem: "New item",
    createOption: 'Create option "{0}"'
  },
  Uploader: {
    inited: "Initial",
    progress: "Uploading",
    error: "Error",
    complete: "Finished",
    emptyFile: "Empty",
    upload: "Upload",
    removeFile: "Remove file"
  },
  CloseButton: {
    closeLabel: "Close"
  },
  Breadcrumb: {
    expandText: "Show path"
  },
  Toggle: {
    on: "Open",
    off: "Close"
  }
};
var AS = function(t) {
  return t.reduce(function(r, n) {
    return r = X({}, r, n), r;
  }, {});
}, mde = function() {
  return typeof window < "u" && (document.body.getAttribute("dir") || document.dir) === "rtl";
};
function gde(e, t) {
  var r, n, o = w.useContext(j$), a = o.locale, i = a === void 0 ? vde : a, s = o.rtl, l = s === void 0 ? mde() : s, u = o.formatDate, c = o.parseDate, d = o.toasters, f = o.disableRipple, p = X({}, i == null ? void 0 : i.common, typeof e == "string" ? i == null ? void 0 : i[e] : typeof e == "object" ? AS(e.map(function(y) {
    return i == null ? void 0 : i[y];
  })) : {});
  t && (p = AS([p, t]));
  var m = w.useCallback(function(y, h) {
    var v;
    return Vne(y, h, {
      locale: i == null || (v = i.Calendar) === null || v === void 0 ? void 0 : v.dateLocale
    });
  }, [(r = i.Calendar) === null || r === void 0 ? void 0 : r.dateLocale]), g = w.useCallback(function(y, h) {
    var v;
    return zoe(y, h, /* @__PURE__ */ new Date(), {
      locale: i == null || (v = i.Calendar) === null || v === void 0 ? void 0 : v.dateLocale
    });
  }, [(n = i.Calendar) === null || n === void 0 ? void 0 : n.dateLocale]);
  return {
    locale: p,
    rtl: l,
    toasters: d,
    disableRipple: f,
    formatDate: u || m,
    parseDate: c || g
  };
}
var yde = /* @__PURE__ */ U.createContext(null);
const bde = yde;
function FS(e) {
  return !e || e.trim() === "#";
}
var Z0 = /* @__PURE__ */ U.forwardRef(function(e, t) {
  var r = e.as, n = r === void 0 ? "a" : r, o = e.href, a = e.disabled, i = e.onClick, s = da(e, ["as", "href", "disabled", "onClick"]), l = w.useCallback(function(c) {
    if ((a || FS(o)) && c.preventDefault(), a) {
      c.stopPropagation();
      return;
    }
    i == null || i(c);
  }, [a, o, i]), u = FS(o) ? {
    role: "button",
    href: "#"
  } : null;
  return a && (s.tabIndex = -1, s["aria-disabled"] = !0), /* @__PURE__ */ U.createElement(n, X({
    ref: t,
    href: o
  }, u, s, {
    onClick: l
  }));
});
Z0.displayName = "SafeAnchor";
Z0.propTypes = {
  href: le.string,
  disabled: le.bool,
  as: le.elementType
};
const wde = Z0;
var xde = function(t, r) {
  var n = Wse(t), o = (r.pageX || 0) - n.left, a = (r.pageY || 0) - n.top, i = Math.max(n.width - o, o), s = Math.max(n.height - a, a), l = Math.sqrt(Math.pow(i, 2) + Math.pow(s, 2));
  return {
    width: l * 2,
    height: l * 2,
    left: o - l,
    top: a - l
  };
}, J0 = /* @__PURE__ */ U.forwardRef(function(e, t) {
  var r = gde(), n = r.disableRipple, o = e.as, a = o === void 0 ? "span" : o, i = e.className, s = e.classPrefix, l = s === void 0 ? "ripple" : s, u = e.onMouseDown, c = da(e, ["as", "className", "classPrefix", "onMouseDown"]), d = V$(l), f = d.merge, p = d.prefix, m = d.withClassPrefix, g = f(i, p("pond")), y = w.useRef(null), h = w.useState(!1), v = h[0], b = h[1], x = w.useState(), k = x[0], P = x[1], C = function() {
    b(!1);
  }, _ = w.useCallback(function($) {
    if (y.current) {
      var O = xde(y.current, $);
      b(!0), P(O), u == null || u(O, $);
    }
  }, [u]);
  return w.useEffect(function() {
    var $, O = ($ = y.current) === null || $ === void 0 ? void 0 : $.parentNode;
    if (O) {
      var D = D$(O, "mousedown", _);
      return function() {
        D == null || D.off();
      };
    }
  }, [_]), n ? null : /* @__PURE__ */ U.createElement(a, X({}, c, {
    className: g,
    ref: Nse(y, t)
  }), /* @__PURE__ */ U.createElement(sde, {
    in: v,
    enteringClassName: p("rippling"),
    onEntered: C
  }, function($, O) {
    var D = $.className, H = da($, ["className"]);
    return /* @__PURE__ */ U.createElement("span", X({}, H, {
      ref: O,
      className: f(m(), D),
      style: k
    }));
  }));
});
J0.displayName = "Ripple";
J0.propTypes = {
  classPrefix: le.string,
  className: le.string,
  onMouseDown: le.func
};
const Sde = J0;
var LS, NS, zS, ey = /* @__PURE__ */ U.forwardRef(function(e, t) {
  var r = e.as, n = e.active, o = e.appearance, a = o === void 0 ? "default" : o, i = e.block, s = e.className, l = e.children, u = e.classPrefix, c = u === void 0 ? "btn" : u, d = e.color, f = e.disabled, p = e.loading, m = e.ripple, g = m === void 0 ? !0 : m, y = e.size, h = e.startIcon, v = e.endIcon, b = e.type, x = da(e, ["as", "active", "appearance", "block", "className", "children", "classPrefix", "color", "disabled", "loading", "ripple", "size", "startIcon", "endIcon", "type"]), k = w.useContext(bde), P = y ?? (k == null ? void 0 : k.size), C = V$(c), _ = C.withClassPrefix, $ = C.prefix, O = C.merge, D = O(s, _(a, d, P, {
    active: n,
    disabled: f,
    loading: p,
    block: i
  })), H = w.useCallback(function() {
    var B = /* @__PURE__ */ U.createElement("span", {
      className: $(LS || (LS = gh(["spin"])))
    }), Z = g && !Ase(a, ["link", "ghost"]) ? /* @__PURE__ */ U.createElement(Sde, null) : null;
    return /* @__PURE__ */ U.createElement(U.Fragment, null, p && B, h ? /* @__PURE__ */ U.createElement("span", {
      className: $(NS || (NS = gh(["start-icon"])))
    }, h) : null, l, v ? /* @__PURE__ */ U.createElement("span", {
      className: $(zS || (zS = gh(["end-icon"])))
    }, v) : null, Z);
  }, [a, l, v, p, $, g, h]);
  if (x.href)
    return /* @__PURE__ */ U.createElement(wde, X({}, x, {
      as: r,
      ref: t,
      "aria-disabled": f,
      disabled: f,
      className: D
    }), H());
  var V = r || "button", L = b || (V === "button" ? "button" : void 0), F = x.role || (V !== "button" ? "button" : void 0);
  return /* @__PURE__ */ U.createElement(V, X({}, x, {
    role: F,
    type: L,
    ref: t,
    disabled: f,
    "aria-disabled": f,
    className: D
  }), H());
});
ey.displayName = "Button";
ey.propTypes = {
  as: le.elementType,
  active: le.bool,
  appearance: le.oneOf(["default", "primary", "link", "subtle", "ghost"]),
  block: le.bool,
  children: le.node,
  color: le.oneOf(["red", "orange", "yellow", "green", "cyan", "blue", "violet"]),
  disabled: le.bool,
  href: le.string,
  loading: le.bool,
  ripple: le.bool,
  size: le.oneOf(["lg", "md", "sm", "xs"]),
  type: le.oneOf(["button", "reset", "submit"])
};
const jS = ey;
function Cde() {
  w.useState([]);
  const e = w.useRef({}), [t, r] = w.useState(null), [n, o] = w.useState("root"), [a, i] = w.useState(!0), [s, l] = w.useState(null), u = w.useRef(null);
  Vl();
  const c = (y) => {
    u.current = y, l(y);
  }, d = async () => {
    var v;
    const y = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(b) {
      },
      async addCustomNodeDefs(b) {
        e.current = b;
      }
      // async loadedGraphNode(node: LGraphNode, app: ComfyApp) {},
    };
    lu.registerExtension(y);
    try {
      await u7();
    } catch (b) {
      console.error("error loading db", b);
    }
    i(!1);
    const h = localStorage.getItem("curFlowID");
    if (h)
      c(h), tt && r(((v = tt[h]) == null ? void 0 : v.name) ?? "");
    else {
      const b = localStorage.getItem("workflow"), x = ux(b ?? "");
      c(x.id), r(x.name ?? "");
    }
  };
  w.useEffect(() => {
    d(), setInterval(() => {
      if (u.current != null) {
        const y = JSON.stringify(lu.graph.serialize());
        localStorage.setItem("curFlowID", u.current), y != null && em(u.current, {
          json: y
        });
      }
    }, 1e3);
  }, []);
  const f = (y) => {
    u.current != null && em(u.current, {
      name: y
    });
  }, p = w.useCallback(
    LR(f, 700),
    []
  ), m = (y) => {
    if (tt == null) {
      alert("Error: Workspace not loaded!");
      return;
    }
    c(y);
    const h = tt[y];
    if (h == null) {
      alert("Error: Workflow not found! id: " + y);
      return;
    }
    lu.loadGraphData(JSON.parse(h.json)), r(h.name), o("root");
  }, g = () => {
    const y = Xq, h = ux(JSON.stringify(y));
    c(h.id), r(h.name), lu.loadGraphData(y);
  };
  return a ? null : /* @__PURE__ */ I.jsx(q2.Provider, { value: { curFlowID: s }, children: /* @__PURE__ */ I.jsxs(
    ot,
    {
      style: {
        width: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
      },
      children: [
        /* @__PURE__ */ I.jsxs(
          po,
          {
            style: {
              padding: 8,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0
            },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
            children: [
              /* @__PURE__ */ I.jsxs(po, { children: [
                /* @__PURE__ */ I.jsx(jS, { appearance: "primary", children: "Hello World" }),
                /* @__PURE__ */ I.jsx(
                  jS,
                  {
                    size: "sm",
                    "aria-label": "workspace folder",
                    onClick: () => o("recentFlows"),
                    children: /* @__PURE__ */ I.jsxs(po, { gap: 1, children: [
                      /* @__PURE__ */ I.jsx(JH, { size: 21 }),
                      /* @__PURE__ */ I.jsx(r7, { size: 8 })
                    ] })
                  }
                ),
                /* @__PURE__ */ I.jsx(
                  Tf,
                  {
                    variant: "unstyled",
                    placeholder: "Workflow name",
                    color: "white",
                    value: t ?? "",
                    onChange: (y) => {
                      r(y.target.value), p(y.target.value);
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ I.jsx(po, {})
            ]
          }
        ),
        n === "recentFlows" && /* @__PURE__ */ I.jsx(
          Kq,
          {
            onclose: () => o("root"),
            loadWorkflowID: m,
            onClickNewFlow: () => {
              g(), o("root");
            }
          }
        )
      ]
    }
  ) });
}
const B$ = document.createElement("div");
document.body.append(B$);
const Pde = {
  initialColorMode: "dark",
  useSystemColorMode: !1
};
bz({ config: Pde });
Ph.createRoot(B$).render(
  /* @__PURE__ */ I.jsx(U.StrictMode, { children: /* @__PURE__ */ I.jsx(Cde, {}) })
);
