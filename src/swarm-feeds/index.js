(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SwarmFeeds"] = factory();
	else
		root["SwarmFeeds"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@ethersphere/bee-js/dist/index.browser.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ethersphere/bee-js/dist/index.browser.min.js ***!
  \********************************************************************/
/***/ (function(module) {

/*! For license information please see index.browser.min.js.LICENSE.txt */
!function (e, t) {
   true ? module.exports = t() : 0;
}(this, function () {
  return (() => {
    var e = {
      4559: (e, t, r) => {
        e.exports = r(9335);
      },
      1786: (e, t, r) => {
        "use strict";

        var n = r(8266),
            i = r(5608),
            a = r(159),
            s = r(9568),
            o = r(3943),
            f = r(8201),
            d = r(1745),
            c = r(7979);

        e.exports = function (e) {
          return new Promise(function (t, r) {
            var u = e.data,
                h = e.headers;
            n.isFormData(u) && delete h["Content-Type"];
            var l = new XMLHttpRequest();

            if (e.auth) {
              var p = e.auth.username || "",
                  b = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
              h.Authorization = "Basic " + btoa(p + ":" + b);
            }

            var m = o(e.baseURL, e.url);

            if (l.open(e.method.toUpperCase(), s(m, e.params, e.paramsSerializer), !0), l.timeout = e.timeout, l.onreadystatechange = function () {
              if (l && 4 === l.readyState && (0 !== l.status || l.responseURL && 0 === l.responseURL.indexOf("file:"))) {
                var n = "getAllResponseHeaders" in l ? f(l.getAllResponseHeaders()) : null,
                    a = {
                  data: e.responseType && "text" !== e.responseType ? l.response : l.responseText,
                  status: l.status,
                  statusText: l.statusText,
                  headers: n,
                  config: e,
                  request: l
                };
                i(t, r, a), l = null;
              }
            }, l.onabort = function () {
              l && (r(c("Request aborted", e, "ECONNABORTED", l)), l = null);
            }, l.onerror = function () {
              r(c("Network Error", e, null, l)), l = null;
            }, l.ontimeout = function () {
              var t = "timeout of " + e.timeout + "ms exceeded";
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage), r(c(t, e, "ECONNABORTED", l)), l = null;
            }, n.isStandardBrowserEnv()) {
              var y = (e.withCredentials || d(m)) && e.xsrfCookieName ? a.read(e.xsrfCookieName) : void 0;
              y && (h[e.xsrfHeaderName] = y);
            }

            if ("setRequestHeader" in l && n.forEach(h, function (e, t) {
              void 0 === u && "content-type" === t.toLowerCase() ? delete h[t] : l.setRequestHeader(t, e);
            }), n.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), e.responseType) try {
              l.responseType = e.responseType;
            } catch (g) {
              if ("json" !== e.responseType) throw g;
            }
            "function" == typeof e.onDownloadProgress && l.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && l.upload && l.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
              l && (l.abort(), r(e), l = null);
            }), u || (u = null), l.send(u);
          });
        };
      },
      9335: (e, t, r) => {
        "use strict";

        var n = r(8266),
            i = r(4345),
            a = r(7929),
            s = r(650);

        function o(e) {
          var t = new a(e),
              r = i(a.prototype.request, t);
          return n.extend(r, a.prototype, t), n.extend(r, t), r;
        }

        var f = o(r(9046));
        f.Axios = a, f.create = function (e) {
          return o(s(f.defaults, e));
        }, f.Cancel = r(9760), f.CancelToken = r(7510), f.isCancel = r(8825), f.all = function (e) {
          return Promise.all(e);
        }, f.spread = r(4346), f.isAxiosError = r(3276), e.exports = f, e.exports.default = f;
      },
      9760: e => {
        "use strict";

        function t(e) {
          this.message = e;
        }

        t.prototype.toString = function () {
          return "Cancel" + (this.message ? ": " + this.message : "");
        }, t.prototype.__CANCEL__ = !0, e.exports = t;
      },
      7510: (e, t, r) => {
        "use strict";

        var n = r(9760);

        function i(e) {
          if ("function" != typeof e) throw new TypeError("executor must be a function.");
          var t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          var r = this;
          e(function (e) {
            r.reason || (r.reason = new n(e), t(r.reason));
          });
        }

        i.prototype.throwIfRequested = function () {
          if (this.reason) throw this.reason;
        }, i.source = function () {
          var e;
          return {
            token: new i(function (t) {
              e = t;
            }),
            cancel: e
          };
        }, e.exports = i;
      },
      8825: e => {
        "use strict";

        e.exports = function (e) {
          return !(!e || !e.__CANCEL__);
        };
      },
      7929: (e, t, r) => {
        "use strict";

        var n = r(8266),
            i = r(9568),
            a = r(6252),
            s = r(6029),
            o = r(650);

        function f(e) {
          this.defaults = e, this.interceptors = {
            request: new a(),
            response: new a()
          };
        }

        f.prototype.request = function (e) {
          "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = o(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
          var t = [s, void 0],
              r = Promise.resolve(e);

          for (this.interceptors.request.forEach(function (e) {
            t.unshift(e.fulfilled, e.rejected);
          }), this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected);
          }); t.length;) r = r.then(t.shift(), t.shift());

          return r;
        }, f.prototype.getUri = function (e) {
          return e = o(this.defaults, e), i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
        }, n.forEach(["delete", "get", "head", "options"], function (e) {
          f.prototype[e] = function (t, r) {
            return this.request(o(r || {}, {
              method: e,
              url: t,
              data: (r || {}).data
            }));
          };
        }), n.forEach(["post", "put", "patch"], function (e) {
          f.prototype[e] = function (t, r, n) {
            return this.request(o(n || {}, {
              method: e,
              url: t,
              data: r
            }));
          };
        }), e.exports = f;
      },
      6252: (e, t, r) => {
        "use strict";

        var n = r(8266);

        function i() {
          this.handlers = [];
        }

        i.prototype.use = function (e, t) {
          return this.handlers.push({
            fulfilled: e,
            rejected: t
          }), this.handlers.length - 1;
        }, i.prototype.eject = function (e) {
          this.handlers[e] && (this.handlers[e] = null);
        }, i.prototype.forEach = function (e) {
          n.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }, e.exports = i;
      },
      3943: (e, t, r) => {
        "use strict";

        var n = r(406),
            i = r(5027);

        e.exports = function (e, t) {
          return e && !n(t) ? i(e, t) : t;
        };
      },
      7979: (e, t, r) => {
        "use strict";

        var n = r(2050);

        e.exports = function (e, t, r, i, a) {
          var s = new Error(e);
          return n(s, t, r, i, a);
        };
      },
      6029: (e, t, r) => {
        "use strict";

        var n = r(8266),
            i = r(2661),
            a = r(8825),
            s = r(9046);

        function o(e) {
          e.cancelToken && e.cancelToken.throwIfRequested();
        }

        e.exports = function (e) {
          return o(e), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
            delete e.headers[t];
          }), (e.adapter || s.adapter)(e).then(function (t) {
            return o(e), t.data = i(t.data, t.headers, e.transformResponse), t;
          }, function (t) {
            return a(t) || (o(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
          });
        };
      },
      2050: e => {
        "use strict";

        e.exports = function (e, t, r, n, i) {
          return e.config = t, r && (e.code = r), e.request = n, e.response = i, e.isAxiosError = !0, e.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code
            };
          }, e;
        };
      },
      650: (e, t, r) => {
        "use strict";

        var n = r(8266);

        e.exports = function (e, t) {
          t = t || {};
          var r = {},
              i = ["url", "method", "data"],
              a = ["headers", "auth", "proxy", "params"],
              s = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
              o = ["validateStatus"];

          function f(e, t) {
            return n.isPlainObject(e) && n.isPlainObject(t) ? n.merge(e, t) : n.isPlainObject(t) ? n.merge({}, t) : n.isArray(t) ? t.slice() : t;
          }

          function d(i) {
            n.isUndefined(t[i]) ? n.isUndefined(e[i]) || (r[i] = f(void 0, e[i])) : r[i] = f(e[i], t[i]);
          }

          n.forEach(i, function (e) {
            n.isUndefined(t[e]) || (r[e] = f(void 0, t[e]));
          }), n.forEach(a, d), n.forEach(s, function (i) {
            n.isUndefined(t[i]) ? n.isUndefined(e[i]) || (r[i] = f(void 0, e[i])) : r[i] = f(void 0, t[i]);
          }), n.forEach(o, function (n) {
            n in t ? r[n] = f(e[n], t[n]) : n in e && (r[n] = f(void 0, e[n]));
          });
          var c = i.concat(a).concat(s).concat(o),
              u = Object.keys(e).concat(Object.keys(t)).filter(function (e) {
            return -1 === c.indexOf(e);
          });
          return n.forEach(u, d), r;
        };
      },
      5608: (e, t, r) => {
        "use strict";

        var n = r(7979);

        e.exports = function (e, t, r) {
          var i = r.config.validateStatus;
          r.status && i && !i(r.status) ? t(n("Request failed with status code " + r.status, r.config, null, r.request, r)) : e(r);
        };
      },
      2661: (e, t, r) => {
        "use strict";

        var n = r(8266);

        e.exports = function (e, t, r) {
          return n.forEach(r, function (r) {
            e = r(e, t);
          }), e;
        };
      },
      9046: (e, t, r) => {
        "use strict";

        var n = r(8266),
            i = r(1490),
            a = {
          "Content-Type": "application/x-www-form-urlencoded"
        };

        function s(e, t) {
          !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
        }

        var o,
            f = {
          adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (o = r(1786)), o),
          transformRequest: [function (e, t) {
            return i(t, "Accept"), i(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
          }],
          transformResponse: [function (e) {
            if ("string" == typeof e) try {
              e = JSON.parse(e);
            } catch (t) {}
            return e;
          }],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          }
        };
        f.headers = {
          common: {
            Accept: "application/json, text/plain, */*"
          }
        }, n.forEach(["delete", "get", "head"], function (e) {
          f.headers[e] = {};
        }), n.forEach(["post", "put", "patch"], function (e) {
          f.headers[e] = n.merge(a);
        }), e.exports = f;
      },
      4345: e => {
        "use strict";

        e.exports = function (e, t) {
          return function () {
            for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];

            return e.apply(t, r);
          };
        };
      },
      9568: (e, t, r) => {
        "use strict";

        var n = r(8266);

        function i(e) {
          return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }

        e.exports = function (e, t, r) {
          if (!t) return e;
          var a;
          if (r) a = r(t);else if (n.isURLSearchParams(t)) a = t.toString();else {
            var s = [];
            n.forEach(t, function (e, t) {
              null != e && (n.isArray(e) ? t += "[]" : e = [e], n.forEach(e, function (e) {
                n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), s.push(i(t) + "=" + i(e));
              }));
            }), a = s.join("&");
          }

          if (a) {
            var o = e.indexOf("#");
            -1 !== o && (e = e.slice(0, o)), e += (-1 === e.indexOf("?") ? "?" : "&") + a;
          }

          return e;
        };
      },
      5027: e => {
        "use strict";

        e.exports = function (e, t) {
          return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        };
      },
      159: (e, t, r) => {
        "use strict";

        var n = r(8266);
        e.exports = n.isStandardBrowserEnv() ? {
          write: function (e, t, r, i, a, s) {
            var o = [];
            o.push(e + "=" + encodeURIComponent(t)), n.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), n.isString(i) && o.push("path=" + i), n.isString(a) && o.push("domain=" + a), !0 === s && o.push("secure"), document.cookie = o.join("; ");
          },
          read: function (e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          }
        } : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {}
        };
      },
      406: e => {
        "use strict";

        e.exports = function (e) {
          return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
        };
      },
      3276: e => {
        "use strict";

        e.exports = function (e) {
          return "object" == typeof e && !0 === e.isAxiosError;
        };
      },
      1745: (e, t, r) => {
        "use strict";

        var n = r(8266);
        e.exports = n.isStandardBrowserEnv() ? function () {
          var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              r = document.createElement("a");

          function i(e) {
            var n = e;
            return t && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
              href: r.href,
              protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
              host: r.host,
              search: r.search ? r.search.replace(/^\?/, "") : "",
              hash: r.hash ? r.hash.replace(/^#/, "") : "",
              hostname: r.hostname,
              port: r.port,
              pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
            };
          }

          return e = i(window.location.href), function (t) {
            var r = n.isString(t) ? i(t) : t;
            return r.protocol === e.protocol && r.host === e.host;
          };
        }() : function () {
          return !0;
        };
      },
      1490: (e, t, r) => {
        "use strict";

        var n = r(8266);

        e.exports = function (e, t) {
          n.forEach(e, function (r, n) {
            n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[n]);
          });
        };
      },
      8201: (e, t, r) => {
        "use strict";

        var n = r(8266),
            i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];

        e.exports = function (e) {
          var t,
              r,
              a,
              s = {};
          return e ? (n.forEach(e.split("\n"), function (e) {
            if (a = e.indexOf(":"), t = n.trim(e.substr(0, a)).toLowerCase(), r = n.trim(e.substr(a + 1)), t) {
              if (s[t] && i.indexOf(t) >= 0) return;
              s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([r]) : s[t] ? s[t] + ", " + r : r;
            }
          }), s) : s;
        };
      },
      4346: e => {
        "use strict";

        e.exports = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        };
      },
      8266: (e, t, r) => {
        "use strict";

        var n = r(4345),
            i = Object.prototype.toString;

        function a(e) {
          return "[object Array]" === i.call(e);
        }

        function s(e) {
          return void 0 === e;
        }

        function o(e) {
          return null !== e && "object" == typeof e;
        }

        function f(e) {
          if ("[object Object]" !== i.call(e)) return !1;
          var t = Object.getPrototypeOf(e);
          return null === t || t === Object.prototype;
        }

        function d(e) {
          return "[object Function]" === i.call(e);
        }

        function c(e, t) {
          if (null != e) if ("object" != typeof e && (e = [e]), a(e)) for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
        }

        e.exports = {
          isArray: a,
          isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === i.call(e);
          },
          isBuffer: function (e) {
            return null !== e && !s(e) && null !== e.constructor && !s(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
          },
          isFormData: function (e) {
            return "undefined" != typeof FormData && e instanceof FormData;
          },
          isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
          },
          isString: function (e) {
            return "string" == typeof e;
          },
          isNumber: function (e) {
            return "number" == typeof e;
          },
          isObject: o,
          isPlainObject: f,
          isUndefined: s,
          isDate: function (e) {
            return "[object Date]" === i.call(e);
          },
          isFile: function (e) {
            return "[object File]" === i.call(e);
          },
          isBlob: function (e) {
            return "[object Blob]" === i.call(e);
          },
          isFunction: d,
          isStream: function (e) {
            return o(e) && d(e.pipe);
          },
          isURLSearchParams: function (e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
          },
          isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
          },
          forEach: c,
          merge: function e() {
            var t = {};

            function r(r, n) {
              f(t[n]) && f(r) ? t[n] = e(t[n], r) : f(r) ? t[n] = e({}, r) : a(r) ? t[n] = r.slice() : t[n] = r;
            }

            for (var n = 0, i = arguments.length; n < i; n++) c(arguments[n], r);

            return t;
          },
          extend: function (e, t, r) {
            return c(t, function (t, i) {
              e[i] = r && "function" == typeof t ? n(t, r) : t;
            }), e;
          },
          trim: function (e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "");
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          }
        };
      },
      9919: function (e, t, r) {
        !function (e, t) {
          "use strict";

          function n(e, t) {
            if (!e) throw new Error(t || "Assertion failed");
          }

          function i(e, t) {
            e.super_ = t;

            var r = function () {};

            r.prototype = t.prototype, e.prototype = new r(), e.prototype.constructor = e;
          }

          function a(e, t, r) {
            if (a.isBN(e)) return e;
            this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && ("le" !== t && "be" !== t || (r = t, t = 10), this._init(e || 0, t || 10, r || "be"));
          }

          var s;
          "object" == typeof e ? e.exports = a : t.BN = a, a.BN = a, a.wordSize = 26;

          try {
            s = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(6601).Buffer;
          } catch (E) {}

          function o(e, t) {
            var r = e.charCodeAt(t);
            return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15;
          }

          function f(e, t, r) {
            var n = o(e, r);
            return r - 1 >= t && (n |= o(e, r - 1) << 4), n;
          }

          function d(e, t, r, n) {
            for (var i = 0, a = Math.min(e.length, r), s = t; s < a; s++) {
              var o = e.charCodeAt(s) - 48;
              i *= n, i += o >= 49 ? o - 49 + 10 : o >= 17 ? o - 17 + 10 : o;
            }

            return i;
          }

          a.isBN = function (e) {
            return e instanceof a || null !== e && "object" == typeof e && e.constructor.wordSize === a.wordSize && Array.isArray(e.words);
          }, a.max = function (e, t) {
            return e.cmp(t) > 0 ? e : t;
          }, a.min = function (e, t) {
            return e.cmp(t) < 0 ? e : t;
          }, a.prototype._init = function (e, t, r) {
            if ("number" == typeof e) return this._initNumber(e, t, r);
            if ("object" == typeof e) return this._initArray(e, t, r);
            "hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36);
            var i = 0;
            "-" === (e = e.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < e.length && (16 === t ? this._parseHex(e, i, r) : (this._parseBase(e, t, i), "le" === r && this._initArray(this.toArray(), t, r)));
          }, a.prototype._initNumber = function (e, t, r) {
            e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (n(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), t, r);
          }, a.prototype._initArray = function (e, t, r) {
            if (n("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
            this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);

            for (var i = 0; i < this.length; i++) this.words[i] = 0;

            var a,
                s,
                o = 0;
            if ("be" === r) for (i = e.length - 1, a = 0; i >= 0; i -= 3) s = e[i] | e[i - 1] << 8 | e[i - 2] << 16, this.words[a] |= s << o & 67108863, this.words[a + 1] = s >>> 26 - o & 67108863, (o += 24) >= 26 && (o -= 26, a++);else if ("le" === r) for (i = 0, a = 0; i < e.length; i += 3) s = e[i] | e[i + 1] << 8 | e[i + 2] << 16, this.words[a] |= s << o & 67108863, this.words[a + 1] = s >>> 26 - o & 67108863, (o += 24) >= 26 && (o -= 26, a++);
            return this.strip();
          }, a.prototype._parseHex = function (e, t, r) {
            this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length);

            for (var n = 0; n < this.length; n++) this.words[n] = 0;

            var i,
                a = 0,
                s = 0;
            if ("be" === r) for (n = e.length - 1; n >= t; n -= 2) i = f(e, t, n) << a, this.words[s] |= 67108863 & i, a >= 18 ? (a -= 18, s += 1, this.words[s] |= i >>> 26) : a += 8;else for (n = (e.length - t) % 2 == 0 ? t + 1 : t; n < e.length; n += 2) i = f(e, t, n) << a, this.words[s] |= 67108863 & i, a >= 18 ? (a -= 18, s += 1, this.words[s] |= i >>> 26) : a += 8;
            this.strip();
          }, a.prototype._parseBase = function (e, t, r) {
            this.words = [0], this.length = 1;

            for (var n = 0, i = 1; i <= 67108863; i *= t) n++;

            n--, i = i / t | 0;

            for (var a = e.length - r, s = a % n, o = Math.min(a, a - s) + r, f = 0, c = r; c < o; c += n) f = d(e, c, c + n, t), this.imuln(i), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);

            if (0 !== s) {
              var u = 1;

              for (f = d(e, c, e.length, t), c = 0; c < s; c++) u *= t;

              this.imuln(u), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
            }

            this.strip();
          }, a.prototype.copy = function (e) {
            e.words = new Array(this.length);

            for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];

            e.length = this.length, e.negative = this.negative, e.red = this.red;
          }, a.prototype.clone = function () {
            var e = new a(null);
            return this.copy(e), e;
          }, a.prototype._expand = function (e) {
            for (; this.length < e;) this.words[this.length++] = 0;

            return this;
          }, a.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;

            return this._normSign();
          }, a.prototype._normSign = function () {
            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
          }, a.prototype.inspect = function () {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          };
          var c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
              u = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
              h = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

          function l(e, t, r) {
            r.negative = t.negative ^ e.negative;
            var n = e.length + t.length | 0;
            r.length = n, n = n - 1 | 0;
            var i = 0 | e.words[0],
                a = 0 | t.words[0],
                s = i * a,
                o = 67108863 & s,
                f = s / 67108864 | 0;
            r.words[0] = o;

            for (var d = 1; d < n; d++) {
              for (var c = f >>> 26, u = 67108863 & f, h = Math.min(d, t.length - 1), l = Math.max(0, d - e.length + 1); l <= h; l++) {
                var p = d - l | 0;
                c += (s = (i = 0 | e.words[p]) * (a = 0 | t.words[l]) + u) / 67108864 | 0, u = 67108863 & s;
              }

              r.words[d] = 0 | u, f = 0 | c;
            }

            return 0 !== f ? r.words[d] = 0 | f : r.length--, r.strip();
          }

          a.prototype.toString = function (e, t) {
            var r;

            if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
              r = "";

              for (var i = 0, a = 0, s = 0; s < this.length; s++) {
                var o = this.words[s],
                    f = (16777215 & (o << i | a)).toString(16);
                r = 0 !== (a = o >>> 24 - i & 16777215) || s !== this.length - 1 ? c[6 - f.length] + f + r : f + r, (i += 2) >= 26 && (i -= 26, s--);
              }

              for (0 !== a && (r = a.toString(16) + r); r.length % t != 0;) r = "0" + r;

              return 0 !== this.negative && (r = "-" + r), r;
            }

            if (e === (0 | e) && e >= 2 && e <= 36) {
              var d = u[e],
                  l = h[e];
              r = "";
              var p = this.clone();

              for (p.negative = 0; !p.isZero();) {
                var b = p.modn(l).toString(e);
                r = (p = p.idivn(l)).isZero() ? b + r : c[d - b.length] + b + r;
              }

              for (this.isZero() && (r = "0" + r); r.length % t != 0;) r = "0" + r;

              return 0 !== this.negative && (r = "-" + r), r;
            }

            n(!1, "Base should be between 2 and 36");
          }, a.prototype.toNumber = function () {
            var e = this.words[0];
            return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e;
          }, a.prototype.toJSON = function () {
            return this.toString(16);
          }, a.prototype.toBuffer = function (e, t) {
            return n(void 0 !== s), this.toArrayLike(s, e, t);
          }, a.prototype.toArray = function (e, t) {
            return this.toArrayLike(Array, e, t);
          }, a.prototype.toArrayLike = function (e, t, r) {
            var i = this.byteLength(),
                a = r || Math.max(1, i);
            n(i <= a, "byte array longer than desired length"), n(a > 0, "Requested array length <= 0"), this.strip();
            var s,
                o,
                f = "le" === t,
                d = new e(a),
                c = this.clone();

            if (f) {
              for (o = 0; !c.isZero(); o++) s = c.andln(255), c.iushrn(8), d[o] = s;

              for (; o < a; o++) d[o] = 0;
            } else {
              for (o = 0; o < a - i; o++) d[o] = 0;

              for (o = 0; !c.isZero(); o++) s = c.andln(255), c.iushrn(8), d[a - o - 1] = s;
            }

            return d;
          }, Math.clz32 ? a.prototype._countBits = function (e) {
            return 32 - Math.clz32(e);
          } : a.prototype._countBits = function (e) {
            var t = e,
                r = 0;
            return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t;
          }, a.prototype._zeroBits = function (e) {
            if (0 === e) return 26;
            var t = e,
                r = 0;
            return 0 == (8191 & t) && (r += 13, t >>>= 13), 0 == (127 & t) && (r += 7, t >>>= 7), 0 == (15 & t) && (r += 4, t >>>= 4), 0 == (3 & t) && (r += 2, t >>>= 2), 0 == (1 & t) && r++, r;
          }, a.prototype.bitLength = function () {
            var e = this.words[this.length - 1],
                t = this._countBits(e);

            return 26 * (this.length - 1) + t;
          }, a.prototype.zeroBits = function () {
            if (this.isZero()) return 0;

            for (var e = 0, t = 0; t < this.length; t++) {
              var r = this._zeroBits(this.words[t]);

              if (e += r, 26 !== r) break;
            }

            return e;
          }, a.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }, a.prototype.toTwos = function (e) {
            return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone();
          }, a.prototype.fromTwos = function (e) {
            return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone();
          }, a.prototype.isNeg = function () {
            return 0 !== this.negative;
          }, a.prototype.neg = function () {
            return this.clone().ineg();
          }, a.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }, a.prototype.iuor = function (e) {
            for (; this.length < e.length;) this.words[this.length++] = 0;

            for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];

            return this.strip();
          }, a.prototype.ior = function (e) {
            return n(0 == (this.negative | e.negative)), this.iuor(e);
          }, a.prototype.or = function (e) {
            return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this);
          }, a.prototype.uor = function (e) {
            return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this);
          }, a.prototype.iuand = function (e) {
            var t;
            t = this.length > e.length ? e : this;

            for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r];

            return this.length = t.length, this.strip();
          }, a.prototype.iand = function (e) {
            return n(0 == (this.negative | e.negative)), this.iuand(e);
          }, a.prototype.and = function (e) {
            return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this);
          }, a.prototype.uand = function (e) {
            return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this);
          }, a.prototype.iuxor = function (e) {
            var t, r;
            this.length > e.length ? (t = this, r = e) : (t = e, r = this);

            for (var n = 0; n < r.length; n++) this.words[n] = t.words[n] ^ r.words[n];

            if (this !== t) for (; n < t.length; n++) this.words[n] = t.words[n];
            return this.length = t.length, this.strip();
          }, a.prototype.ixor = function (e) {
            return n(0 == (this.negative | e.negative)), this.iuxor(e);
          }, a.prototype.xor = function (e) {
            return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this);
          }, a.prototype.uxor = function (e) {
            return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this);
          }, a.prototype.inotn = function (e) {
            n("number" == typeof e && e >= 0);
            var t = 0 | Math.ceil(e / 26),
                r = e % 26;
            this._expand(t), r > 0 && t--;

            for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i];

            return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip();
          }, a.prototype.notn = function (e) {
            return this.clone().inotn(e);
          }, a.prototype.setn = function (e, t) {
            n("number" == typeof e && e >= 0);
            var r = e / 26 | 0,
                i = e % 26;
            return this._expand(r + 1), this.words[r] = t ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip();
          }, a.prototype.iadd = function (e) {
            var t, r, n;
            if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
            if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
            this.length > e.length ? (r = this, n = e) : (r = e, n = this);

            for (var i = 0, a = 0; a < n.length; a++) t = (0 | r.words[a]) + (0 | n.words[a]) + i, this.words[a] = 67108863 & t, i = t >>> 26;

            for (; 0 !== i && a < r.length; a++) t = (0 | r.words[a]) + i, this.words[a] = 67108863 & t, i = t >>> 26;

            if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;else if (r !== this) for (; a < r.length; a++) this.words[a] = r.words[a];
            return this;
          }, a.prototype.add = function (e) {
            var t;
            return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this);
          }, a.prototype.isub = function (e) {
            if (0 !== e.negative) {
              e.negative = 0;
              var t = this.iadd(e);
              return e.negative = 1, t._normSign();
            }

            if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
            var r,
                n,
                i = this.cmp(e);
            if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
            i > 0 ? (r = this, n = e) : (r = e, n = this);

            for (var a = 0, s = 0; s < n.length; s++) a = (t = (0 | r.words[s]) - (0 | n.words[s]) + a) >> 26, this.words[s] = 67108863 & t;

            for (; 0 !== a && s < r.length; s++) a = (t = (0 | r.words[s]) + a) >> 26, this.words[s] = 67108863 & t;

            if (0 === a && s < r.length && r !== this) for (; s < r.length; s++) this.words[s] = r.words[s];
            return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this.strip();
          }, a.prototype.sub = function (e) {
            return this.clone().isub(e);
          };

          var p = function (e, t, r) {
            var n,
                i,
                a,
                s = e.words,
                o = t.words,
                f = r.words,
                d = 0,
                c = 0 | s[0],
                u = 8191 & c,
                h = c >>> 13,
                l = 0 | s[1],
                p = 8191 & l,
                b = l >>> 13,
                m = 0 | s[2],
                y = 8191 & m,
                g = m >>> 13,
                v = 0 | s[3],
                w = 8191 & v,
                M = v >>> 13,
                A = 0 | s[4],
                _ = 8191 & A,
                S = A >>> 13,
                E = 0 | s[5],
                x = 8191 & E,
                T = E >>> 13,
                P = 0 | s[6],
                k = 8191 & P,
                I = P >>> 13,
                B = 0 | s[7],
                j = 8191 & B,
                O = B >>> 13,
                R = 0 | s[8],
                N = 8191 & R,
                H = R >>> 13,
                C = 0 | s[9],
                z = 8191 & C,
                D = C >>> 13,
                q = 0 | o[0],
                L = 8191 & q,
                F = q >>> 13,
                U = 0 | o[1],
                $ = 8191 & U,
                X = U >>> 13,
                G = 0 | o[2],
                W = 8191 & G,
                J = G >>> 13,
                V = 0 | o[3],
                Y = 8191 & V,
                Z = V >>> 13,
                K = 0 | o[4],
                Q = 8191 & K,
                ee = K >>> 13,
                te = 0 | o[5],
                re = 8191 & te,
                ne = te >>> 13,
                ie = 0 | o[6],
                ae = 8191 & ie,
                se = ie >>> 13,
                oe = 0 | o[7],
                fe = 8191 & oe,
                de = oe >>> 13,
                ce = 0 | o[8],
                ue = 8191 & ce,
                he = ce >>> 13,
                le = 0 | o[9],
                pe = 8191 & le,
                be = le >>> 13;

            r.negative = e.negative ^ t.negative, r.length = 19;
            var me = (d + (n = Math.imul(u, L)) | 0) + ((8191 & (i = (i = Math.imul(u, F)) + Math.imul(h, L) | 0)) << 13) | 0;
            d = ((a = Math.imul(h, F)) + (i >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, n = Math.imul(p, L), i = (i = Math.imul(p, F)) + Math.imul(b, L) | 0, a = Math.imul(b, F);
            var ye = (d + (n = n + Math.imul(u, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(u, X) | 0) + Math.imul(h, $) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(h, X) | 0) + (i >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, n = Math.imul(y, L), i = (i = Math.imul(y, F)) + Math.imul(g, L) | 0, a = Math.imul(g, F), n = n + Math.imul(p, $) | 0, i = (i = i + Math.imul(p, X) | 0) + Math.imul(b, $) | 0, a = a + Math.imul(b, X) | 0;
            var ge = (d + (n = n + Math.imul(u, W) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(u, J) | 0) + Math.imul(h, W) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(h, J) | 0) + (i >>> 13) | 0) + (ge >>> 26) | 0, ge &= 67108863, n = Math.imul(w, L), i = (i = Math.imul(w, F)) + Math.imul(M, L) | 0, a = Math.imul(M, F), n = n + Math.imul(y, $) | 0, i = (i = i + Math.imul(y, X) | 0) + Math.imul(g, $) | 0, a = a + Math.imul(g, X) | 0, n = n + Math.imul(p, W) | 0, i = (i = i + Math.imul(p, J) | 0) + Math.imul(b, W) | 0, a = a + Math.imul(b, J) | 0;
            var ve = (d + (n = n + Math.imul(u, Y) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(u, Z) | 0) + Math.imul(h, Y) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(h, Z) | 0) + (i >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, n = Math.imul(_, L), i = (i = Math.imul(_, F)) + Math.imul(S, L) | 0, a = Math.imul(S, F), n = n + Math.imul(w, $) | 0, i = (i = i + Math.imul(w, X) | 0) + Math.imul(M, $) | 0, a = a + Math.imul(M, X) | 0, n = n + Math.imul(y, W) | 0, i = (i = i + Math.imul(y, J) | 0) + Math.imul(g, W) | 0, a = a + Math.imul(g, J) | 0, n = n + Math.imul(p, Y) | 0, i = (i = i + Math.imul(p, Z) | 0) + Math.imul(b, Y) | 0, a = a + Math.imul(b, Z) | 0;
            var we = (d + (n = n + Math.imul(u, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(u, ee) | 0) + Math.imul(h, Q) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(h, ee) | 0) + (i >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, n = Math.imul(x, L), i = (i = Math.imul(x, F)) + Math.imul(T, L) | 0, a = Math.imul(T, F), n = n + Math.imul(_, $) | 0, i = (i = i + Math.imul(_, X) | 0) + Math.imul(S, $) | 0, a = a + Math.imul(S, X) | 0, n = n + Math.imul(w, W) | 0, i = (i = i + Math.imul(w, J) | 0) + Math.imul(M, W) | 0, a = a + Math.imul(M, J) | 0, n = n + Math.imul(y, Y) | 0, i = (i = i + Math.imul(y, Z) | 0) + Math.imul(g, Y) | 0, a = a + Math.imul(g, Z) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, ee) | 0) + Math.imul(b, Q) | 0, a = a + Math.imul(b, ee) | 0;
            var Me = (d + (n = n + Math.imul(u, re) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(u, ne) | 0) + Math.imul(h, re) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(h, ne) | 0) + (i >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, n = Math.imul(k, L), i = (i = Math.imul(k, F)) + Math.imul(I, L) | 0, a = Math.imul(I, F), n = n + Math.imul(x, $) | 0, i = (i = i + Math.imul(x, X) | 0) + Math.imul(T, $) | 0, a = a + Math.imul(T, X) | 0, n = n + Math.imul(_, W) | 0, i = (i = i + Math.imul(_, J) | 0) + Math.imul(S, W) | 0, a = a + Math.imul(S, J) | 0, n = n + Math.imul(w, Y) | 0, i = (i = i + Math.imul(w, Z) | 0) + Math.imul(M, Y) | 0, a = a + Math.imul(M, Z) | 0, n = n + Math.imul(y, Q) | 0, i = (i = i + Math.imul(y, ee) | 0) + Math.imul(g, Q) | 0, a = a + Math.imul(g, ee) | 0, n = n + Math.imul(p, re) | 0, i = (i = i + Math.imul(p, ne) | 0) + Math.imul(b, re) | 0, a = a + Math.imul(b, ne) | 0;
            var Ae = (d + (n = n + Math.imul(u, ae) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(u, se) | 0) + Math.imul(h, ae) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(h, se) | 0) + (i >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, n = Math.imul(j, L), i = (i = Math.imul(j, F)) + Math.imul(O, L) | 0, a = Math.imul(O, F), n = n + Math.imul(k, $) | 0, i = (i = i + Math.imul(k, X) | 0) + Math.imul(I, $) | 0, a = a + Math.imul(I, X) | 0, n = n + Math.imul(x, W) | 0, i = (i = i + Math.imul(x, J) | 0) + Math.imul(T, W) | 0, a = a + Math.imul(T, J) | 0, n = n + Math.imul(_, Y) | 0, i = (i = i + Math.imul(_, Z) | 0) + Math.imul(S, Y) | 0, a = a + Math.imul(S, Z) | 0, n = n + Math.imul(w, Q) | 0, i = (i = i + Math.imul(w, ee) | 0) + Math.imul(M, Q) | 0, a = a + Math.imul(M, ee) | 0, n = n + Math.imul(y, re) | 0, i = (i = i + Math.imul(y, ne) | 0) + Math.imul(g, re) | 0, a = a + Math.imul(g, ne) | 0, n = n + Math.imul(p, ae) | 0, i = (i = i + Math.imul(p, se) | 0) + Math.imul(b, ae) | 0, a = a + Math.imul(b, se) | 0;

            var _e = (d + (n = n + Math.imul(u, fe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(u, de) | 0) + Math.imul(h, fe) | 0)) << 13) | 0;

            d = ((a = a + Math.imul(h, de) | 0) + (i >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, n = Math.imul(N, L), i = (i = Math.imul(N, F)) + Math.imul(H, L) | 0, a = Math.imul(H, F), n = n + Math.imul(j, $) | 0, i = (i = i + Math.imul(j, X) | 0) + Math.imul(O, $) | 0, a = a + Math.imul(O, X) | 0, n = n + Math.imul(k, W) | 0, i = (i = i + Math.imul(k, J) | 0) + Math.imul(I, W) | 0, a = a + Math.imul(I, J) | 0, n = n + Math.imul(x, Y) | 0, i = (i = i + Math.imul(x, Z) | 0) + Math.imul(T, Y) | 0, a = a + Math.imul(T, Z) | 0, n = n + Math.imul(_, Q) | 0, i = (i = i + Math.imul(_, ee) | 0) + Math.imul(S, Q) | 0, a = a + Math.imul(S, ee) | 0, n = n + Math.imul(w, re) | 0, i = (i = i + Math.imul(w, ne) | 0) + Math.imul(M, re) | 0, a = a + Math.imul(M, ne) | 0, n = n + Math.imul(y, ae) | 0, i = (i = i + Math.imul(y, se) | 0) + Math.imul(g, ae) | 0, a = a + Math.imul(g, se) | 0, n = n + Math.imul(p, fe) | 0, i = (i = i + Math.imul(p, de) | 0) + Math.imul(b, fe) | 0, a = a + Math.imul(b, de) | 0;
            var Se = (d + (n = n + Math.imul(u, ue) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(u, he) | 0) + Math.imul(h, ue) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(h, he) | 0) + (i >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, n = Math.imul(z, L), i = (i = Math.imul(z, F)) + Math.imul(D, L) | 0, a = Math.imul(D, F), n = n + Math.imul(N, $) | 0, i = (i = i + Math.imul(N, X) | 0) + Math.imul(H, $) | 0, a = a + Math.imul(H, X) | 0, n = n + Math.imul(j, W) | 0, i = (i = i + Math.imul(j, J) | 0) + Math.imul(O, W) | 0, a = a + Math.imul(O, J) | 0, n = n + Math.imul(k, Y) | 0, i = (i = i + Math.imul(k, Z) | 0) + Math.imul(I, Y) | 0, a = a + Math.imul(I, Z) | 0, n = n + Math.imul(x, Q) | 0, i = (i = i + Math.imul(x, ee) | 0) + Math.imul(T, Q) | 0, a = a + Math.imul(T, ee) | 0, n = n + Math.imul(_, re) | 0, i = (i = i + Math.imul(_, ne) | 0) + Math.imul(S, re) | 0, a = a + Math.imul(S, ne) | 0, n = n + Math.imul(w, ae) | 0, i = (i = i + Math.imul(w, se) | 0) + Math.imul(M, ae) | 0, a = a + Math.imul(M, se) | 0, n = n + Math.imul(y, fe) | 0, i = (i = i + Math.imul(y, de) | 0) + Math.imul(g, fe) | 0, a = a + Math.imul(g, de) | 0, n = n + Math.imul(p, ue) | 0, i = (i = i + Math.imul(p, he) | 0) + Math.imul(b, ue) | 0, a = a + Math.imul(b, he) | 0;
            var Ee = (d + (n = n + Math.imul(u, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(u, be) | 0) + Math.imul(h, pe) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(h, be) | 0) + (i >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, n = Math.imul(z, $), i = (i = Math.imul(z, X)) + Math.imul(D, $) | 0, a = Math.imul(D, X), n = n + Math.imul(N, W) | 0, i = (i = i + Math.imul(N, J) | 0) + Math.imul(H, W) | 0, a = a + Math.imul(H, J) | 0, n = n + Math.imul(j, Y) | 0, i = (i = i + Math.imul(j, Z) | 0) + Math.imul(O, Y) | 0, a = a + Math.imul(O, Z) | 0, n = n + Math.imul(k, Q) | 0, i = (i = i + Math.imul(k, ee) | 0) + Math.imul(I, Q) | 0, a = a + Math.imul(I, ee) | 0, n = n + Math.imul(x, re) | 0, i = (i = i + Math.imul(x, ne) | 0) + Math.imul(T, re) | 0, a = a + Math.imul(T, ne) | 0, n = n + Math.imul(_, ae) | 0, i = (i = i + Math.imul(_, se) | 0) + Math.imul(S, ae) | 0, a = a + Math.imul(S, se) | 0, n = n + Math.imul(w, fe) | 0, i = (i = i + Math.imul(w, de) | 0) + Math.imul(M, fe) | 0, a = a + Math.imul(M, de) | 0, n = n + Math.imul(y, ue) | 0, i = (i = i + Math.imul(y, he) | 0) + Math.imul(g, ue) | 0, a = a + Math.imul(g, he) | 0;
            var xe = (d + (n = n + Math.imul(p, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, be) | 0) + Math.imul(b, pe) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(b, be) | 0) + (i >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, n = Math.imul(z, W), i = (i = Math.imul(z, J)) + Math.imul(D, W) | 0, a = Math.imul(D, J), n = n + Math.imul(N, Y) | 0, i = (i = i + Math.imul(N, Z) | 0) + Math.imul(H, Y) | 0, a = a + Math.imul(H, Z) | 0, n = n + Math.imul(j, Q) | 0, i = (i = i + Math.imul(j, ee) | 0) + Math.imul(O, Q) | 0, a = a + Math.imul(O, ee) | 0, n = n + Math.imul(k, re) | 0, i = (i = i + Math.imul(k, ne) | 0) + Math.imul(I, re) | 0, a = a + Math.imul(I, ne) | 0, n = n + Math.imul(x, ae) | 0, i = (i = i + Math.imul(x, se) | 0) + Math.imul(T, ae) | 0, a = a + Math.imul(T, se) | 0, n = n + Math.imul(_, fe) | 0, i = (i = i + Math.imul(_, de) | 0) + Math.imul(S, fe) | 0, a = a + Math.imul(S, de) | 0, n = n + Math.imul(w, ue) | 0, i = (i = i + Math.imul(w, he) | 0) + Math.imul(M, ue) | 0, a = a + Math.imul(M, he) | 0;
            var Te = (d + (n = n + Math.imul(y, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(y, be) | 0) + Math.imul(g, pe) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(g, be) | 0) + (i >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, n = Math.imul(z, Y), i = (i = Math.imul(z, Z)) + Math.imul(D, Y) | 0, a = Math.imul(D, Z), n = n + Math.imul(N, Q) | 0, i = (i = i + Math.imul(N, ee) | 0) + Math.imul(H, Q) | 0, a = a + Math.imul(H, ee) | 0, n = n + Math.imul(j, re) | 0, i = (i = i + Math.imul(j, ne) | 0) + Math.imul(O, re) | 0, a = a + Math.imul(O, ne) | 0, n = n + Math.imul(k, ae) | 0, i = (i = i + Math.imul(k, se) | 0) + Math.imul(I, ae) | 0, a = a + Math.imul(I, se) | 0, n = n + Math.imul(x, fe) | 0, i = (i = i + Math.imul(x, de) | 0) + Math.imul(T, fe) | 0, a = a + Math.imul(T, de) | 0, n = n + Math.imul(_, ue) | 0, i = (i = i + Math.imul(_, he) | 0) + Math.imul(S, ue) | 0, a = a + Math.imul(S, he) | 0;
            var Pe = (d + (n = n + Math.imul(w, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, be) | 0) + Math.imul(M, pe) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(M, be) | 0) + (i >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, n = Math.imul(z, Q), i = (i = Math.imul(z, ee)) + Math.imul(D, Q) | 0, a = Math.imul(D, ee), n = n + Math.imul(N, re) | 0, i = (i = i + Math.imul(N, ne) | 0) + Math.imul(H, re) | 0, a = a + Math.imul(H, ne) | 0, n = n + Math.imul(j, ae) | 0, i = (i = i + Math.imul(j, se) | 0) + Math.imul(O, ae) | 0, a = a + Math.imul(O, se) | 0, n = n + Math.imul(k, fe) | 0, i = (i = i + Math.imul(k, de) | 0) + Math.imul(I, fe) | 0, a = a + Math.imul(I, de) | 0, n = n + Math.imul(x, ue) | 0, i = (i = i + Math.imul(x, he) | 0) + Math.imul(T, ue) | 0, a = a + Math.imul(T, he) | 0;
            var ke = (d + (n = n + Math.imul(_, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, be) | 0) + Math.imul(S, pe) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(S, be) | 0) + (i >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, n = Math.imul(z, re), i = (i = Math.imul(z, ne)) + Math.imul(D, re) | 0, a = Math.imul(D, ne), n = n + Math.imul(N, ae) | 0, i = (i = i + Math.imul(N, se) | 0) + Math.imul(H, ae) | 0, a = a + Math.imul(H, se) | 0, n = n + Math.imul(j, fe) | 0, i = (i = i + Math.imul(j, de) | 0) + Math.imul(O, fe) | 0, a = a + Math.imul(O, de) | 0, n = n + Math.imul(k, ue) | 0, i = (i = i + Math.imul(k, he) | 0) + Math.imul(I, ue) | 0, a = a + Math.imul(I, he) | 0;
            var Ie = (d + (n = n + Math.imul(x, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(x, be) | 0) + Math.imul(T, pe) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(T, be) | 0) + (i >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, n = Math.imul(z, ae), i = (i = Math.imul(z, se)) + Math.imul(D, ae) | 0, a = Math.imul(D, se), n = n + Math.imul(N, fe) | 0, i = (i = i + Math.imul(N, de) | 0) + Math.imul(H, fe) | 0, a = a + Math.imul(H, de) | 0, n = n + Math.imul(j, ue) | 0, i = (i = i + Math.imul(j, he) | 0) + Math.imul(O, ue) | 0, a = a + Math.imul(O, he) | 0;
            var Be = (d + (n = n + Math.imul(k, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(k, be) | 0) + Math.imul(I, pe) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(I, be) | 0) + (i >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, n = Math.imul(z, fe), i = (i = Math.imul(z, de)) + Math.imul(D, fe) | 0, a = Math.imul(D, de), n = n + Math.imul(N, ue) | 0, i = (i = i + Math.imul(N, he) | 0) + Math.imul(H, ue) | 0, a = a + Math.imul(H, he) | 0;
            var je = (d + (n = n + Math.imul(j, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(j, be) | 0) + Math.imul(O, pe) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(O, be) | 0) + (i >>> 13) | 0) + (je >>> 26) | 0, je &= 67108863, n = Math.imul(z, ue), i = (i = Math.imul(z, he)) + Math.imul(D, ue) | 0, a = Math.imul(D, he);
            var Oe = (d + (n = n + Math.imul(N, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(N, be) | 0) + Math.imul(H, pe) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(H, be) | 0) + (i >>> 13) | 0) + (Oe >>> 26) | 0, Oe &= 67108863;
            var Re = (d + (n = Math.imul(z, pe)) | 0) + ((8191 & (i = (i = Math.imul(z, be)) + Math.imul(D, pe) | 0)) << 13) | 0;
            return d = ((a = Math.imul(D, be)) + (i >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863, f[0] = me, f[1] = ye, f[2] = ge, f[3] = ve, f[4] = we, f[5] = Me, f[6] = Ae, f[7] = _e, f[8] = Se, f[9] = Ee, f[10] = xe, f[11] = Te, f[12] = Pe, f[13] = ke, f[14] = Ie, f[15] = Be, f[16] = je, f[17] = Oe, f[18] = Re, 0 !== d && (f[19] = d, r.length++), r;
          };

          function b(e, t, r) {
            return new m().mulp(e, t, r);
          }

          function m(e, t) {
            this.x = e, this.y = t;
          }

          Math.imul || (p = l), a.prototype.mulTo = function (e, t) {
            var r = this.length + e.length;
            return 10 === this.length && 10 === e.length ? p(this, e, t) : r < 63 ? l(this, e, t) : r < 1024 ? function (e, t, r) {
              r.negative = t.negative ^ e.negative, r.length = e.length + t.length;

              for (var n = 0, i = 0, a = 0; a < r.length - 1; a++) {
                var s = i;
                i = 0;

                for (var o = 67108863 & n, f = Math.min(a, t.length - 1), d = Math.max(0, a - e.length + 1); d <= f; d++) {
                  var c = a - d,
                      u = (0 | e.words[c]) * (0 | t.words[d]),
                      h = 67108863 & u;
                  o = 67108863 & (h = h + o | 0), i += (s = (s = s + (u / 67108864 | 0) | 0) + (h >>> 26) | 0) >>> 26, s &= 67108863;
                }

                r.words[a] = o, n = s, s = i;
              }

              return 0 !== n ? r.words[a] = n : r.length--, r.strip();
            }(this, e, t) : b(this, e, t);
          }, m.prototype.makeRBT = function (e) {
            for (var t = new Array(e), r = a.prototype._countBits(e) - 1, n = 0; n < e; n++) t[n] = this.revBin(n, r, e);

            return t;
          }, m.prototype.revBin = function (e, t, r) {
            if (0 === e || e === r - 1) return e;

            for (var n = 0, i = 0; i < t; i++) n |= (1 & e) << t - i - 1, e >>= 1;

            return n;
          }, m.prototype.permute = function (e, t, r, n, i, a) {
            for (var s = 0; s < a; s++) n[s] = t[e[s]], i[s] = r[e[s]];
          }, m.prototype.transform = function (e, t, r, n, i, a) {
            this.permute(a, e, t, r, n, i);

            for (var s = 1; s < i; s <<= 1) for (var o = s << 1, f = Math.cos(2 * Math.PI / o), d = Math.sin(2 * Math.PI / o), c = 0; c < i; c += o) for (var u = f, h = d, l = 0; l < s; l++) {
              var p = r[c + l],
                  b = n[c + l],
                  m = r[c + l + s],
                  y = n[c + l + s],
                  g = u * m - h * y;
              y = u * y + h * m, m = g, r[c + l] = p + m, n[c + l] = b + y, r[c + l + s] = p - m, n[c + l + s] = b - y, l !== o && (g = f * u - d * h, h = f * h + d * u, u = g);
            }
          }, m.prototype.guessLen13b = function (e, t) {
            var r = 1 | Math.max(t, e),
                n = 1 & r,
                i = 0;

            for (r = r / 2 | 0; r; r >>>= 1) i++;

            return 1 << i + 1 + n;
          }, m.prototype.conjugate = function (e, t, r) {
            if (!(r <= 1)) for (var n = 0; n < r / 2; n++) {
              var i = e[n];
              e[n] = e[r - n - 1], e[r - n - 1] = i, i = t[n], t[n] = -t[r - n - 1], t[r - n - 1] = -i;
            }
          }, m.prototype.normalize13b = function (e, t) {
            for (var r = 0, n = 0; n < t / 2; n++) {
              var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
              e[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0;
            }

            return e;
          }, m.prototype.convert13b = function (e, t, r, i) {
            for (var a = 0, s = 0; s < t; s++) a += 0 | e[s], r[2 * s] = 8191 & a, a >>>= 13, r[2 * s + 1] = 8191 & a, a >>>= 13;

            for (s = 2 * t; s < i; ++s) r[s] = 0;

            n(0 === a), n(0 == (-8192 & a));
          }, m.prototype.stub = function (e) {
            for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;

            return t;
          }, m.prototype.mulp = function (e, t, r) {
            var n = 2 * this.guessLen13b(e.length, t.length),
                i = this.makeRBT(n),
                a = this.stub(n),
                s = new Array(n),
                o = new Array(n),
                f = new Array(n),
                d = new Array(n),
                c = new Array(n),
                u = new Array(n),
                h = r.words;
            h.length = n, this.convert13b(e.words, e.length, s, n), this.convert13b(t.words, t.length, d, n), this.transform(s, a, o, f, n, i), this.transform(d, a, c, u, n, i);

            for (var l = 0; l < n; l++) {
              var p = o[l] * c[l] - f[l] * u[l];
              f[l] = o[l] * u[l] + f[l] * c[l], o[l] = p;
            }

            return this.conjugate(o, f, n), this.transform(o, f, h, a, n, i), this.conjugate(h, a, n), this.normalize13b(h, n), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r.strip();
          }, a.prototype.mul = function (e) {
            var t = new a(null);
            return t.words = new Array(this.length + e.length), this.mulTo(e, t);
          }, a.prototype.mulf = function (e) {
            var t = new a(null);
            return t.words = new Array(this.length + e.length), b(this, e, t);
          }, a.prototype.imul = function (e) {
            return this.clone().mulTo(e, this);
          }, a.prototype.imuln = function (e) {
            n("number" == typeof e), n(e < 67108864);

            for (var t = 0, r = 0; r < this.length; r++) {
              var i = (0 | this.words[r]) * e,
                  a = (67108863 & i) + (67108863 & t);
              t >>= 26, t += i / 67108864 | 0, t += a >>> 26, this.words[r] = 67108863 & a;
            }

            return 0 !== t && (this.words[r] = t, this.length++), this;
          }, a.prototype.muln = function (e) {
            return this.clone().imuln(e);
          }, a.prototype.sqr = function () {
            return this.mul(this);
          }, a.prototype.isqr = function () {
            return this.imul(this.clone());
          }, a.prototype.pow = function (e) {
            var t = function (e) {
              for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
                var n = r / 26 | 0,
                    i = r % 26;
                t[r] = (e.words[n] & 1 << i) >>> i;
              }

              return t;
            }(e);

            if (0 === t.length) return new a(1);

            for (var r = this, n = 0; n < t.length && 0 === t[n]; n++, r = r.sqr());

            if (++n < t.length) for (var i = r.sqr(); n < t.length; n++, i = i.sqr()) 0 !== t[n] && (r = r.mul(i));
            return r;
          }, a.prototype.iushln = function (e) {
            n("number" == typeof e && e >= 0);
            var t,
                r = e % 26,
                i = (e - r) / 26,
                a = 67108863 >>> 26 - r << 26 - r;

            if (0 !== r) {
              var s = 0;

              for (t = 0; t < this.length; t++) {
                var o = this.words[t] & a,
                    f = (0 | this.words[t]) - o << r;
                this.words[t] = f | s, s = o >>> 26 - r;
              }

              s && (this.words[t] = s, this.length++);
            }

            if (0 !== i) {
              for (t = this.length - 1; t >= 0; t--) this.words[t + i] = this.words[t];

              for (t = 0; t < i; t++) this.words[t] = 0;

              this.length += i;
            }

            return this.strip();
          }, a.prototype.ishln = function (e) {
            return n(0 === this.negative), this.iushln(e);
          }, a.prototype.iushrn = function (e, t, r) {
            var i;
            n("number" == typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0;
            var a = e % 26,
                s = Math.min((e - a) / 26, this.length),
                o = 67108863 ^ 67108863 >>> a << a,
                f = r;

            if (i -= s, i = Math.max(0, i), f) {
              for (var d = 0; d < s; d++) f.words[d] = this.words[d];

              f.length = s;
            }

            if (0 === s) ;else if (this.length > s) for (this.length -= s, d = 0; d < this.length; d++) this.words[d] = this.words[d + s];else this.words[0] = 0, this.length = 1;
            var c = 0;

            for (d = this.length - 1; d >= 0 && (0 !== c || d >= i); d--) {
              var u = 0 | this.words[d];
              this.words[d] = c << 26 - a | u >>> a, c = u & o;
            }

            return f && 0 !== c && (f.words[f.length++] = c), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip();
          }, a.prototype.ishrn = function (e, t, r) {
            return n(0 === this.negative), this.iushrn(e, t, r);
          }, a.prototype.shln = function (e) {
            return this.clone().ishln(e);
          }, a.prototype.ushln = function (e) {
            return this.clone().iushln(e);
          }, a.prototype.shrn = function (e) {
            return this.clone().ishrn(e);
          }, a.prototype.ushrn = function (e) {
            return this.clone().iushrn(e);
          }, a.prototype.testn = function (e) {
            n("number" == typeof e && e >= 0);
            var t = e % 26,
                r = (e - t) / 26,
                i = 1 << t;
            return !(this.length <= r) && !!(this.words[r] & i);
          }, a.prototype.imaskn = function (e) {
            n("number" == typeof e && e >= 0);
            var t = e % 26,
                r = (e - t) / 26;
            if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;

            if (0 !== t && r++, this.length = Math.min(r, this.length), 0 !== t) {
              var i = 67108863 ^ 67108863 >>> t << t;
              this.words[this.length - 1] &= i;
            }

            return this.strip();
          }, a.prototype.maskn = function (e) {
            return this.clone().imaskn(e);
          }, a.prototype.iaddn = function (e) {
            return n("number" == typeof e), n(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e);
          }, a.prototype._iaddn = function (e) {
            this.words[0] += e;

            for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;

            return this.length = Math.max(this.length, t + 1), this;
          }, a.prototype.isubn = function (e) {
            if (n("number" == typeof e), n(e < 67108864), e < 0) return this.iaddn(-e);
            if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
            if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;else for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
            return this.strip();
          }, a.prototype.addn = function (e) {
            return this.clone().iaddn(e);
          }, a.prototype.subn = function (e) {
            return this.clone().isubn(e);
          }, a.prototype.iabs = function () {
            return this.negative = 0, this;
          }, a.prototype.abs = function () {
            return this.clone().iabs();
          }, a.prototype._ishlnsubmul = function (e, t, r) {
            var i,
                a,
                s = e.length + r;

            this._expand(s);

            var o = 0;

            for (i = 0; i < e.length; i++) {
              a = (0 | this.words[i + r]) + o;
              var f = (0 | e.words[i]) * t;
              o = ((a -= 67108863 & f) >> 26) - (f / 67108864 | 0), this.words[i + r] = 67108863 & a;
            }

            for (; i < this.length - r; i++) o = (a = (0 | this.words[i + r]) + o) >> 26, this.words[i + r] = 67108863 & a;

            if (0 === o) return this.strip();

            for (n(-1 === o), o = 0, i = 0; i < this.length; i++) o = (a = -(0 | this.words[i]) + o) >> 26, this.words[i] = 67108863 & a;

            return this.negative = 1, this.strip();
          }, a.prototype._wordDiv = function (e, t) {
            var r = (this.length, e.length),
                n = this.clone(),
                i = e,
                s = 0 | i.words[i.length - 1];
            0 !== (r = 26 - this._countBits(s)) && (i = i.ushln(r), n.iushln(r), s = 0 | i.words[i.length - 1]);
            var o,
                f = n.length - i.length;

            if ("mod" !== t) {
              (o = new a(null)).length = f + 1, o.words = new Array(o.length);

              for (var d = 0; d < o.length; d++) o.words[d] = 0;
            }

            var c = n.clone()._ishlnsubmul(i, 1, f);

            0 === c.negative && (n = c, o && (o.words[f] = 1));

            for (var u = f - 1; u >= 0; u--) {
              var h = 67108864 * (0 | n.words[i.length + u]) + (0 | n.words[i.length + u - 1]);

              for (h = Math.min(h / s | 0, 67108863), n._ishlnsubmul(i, h, u); 0 !== n.negative;) h--, n.negative = 0, n._ishlnsubmul(i, 1, u), n.isZero() || (n.negative ^= 1);

              o && (o.words[u] = h);
            }

            return o && o.strip(), n.strip(), "div" !== t && 0 !== r && n.iushrn(r), {
              div: o || null,
              mod: n
            };
          }, a.prototype.divmod = function (e, t, r) {
            return n(!e.isZero()), this.isZero() ? {
              div: new a(0),
              mod: new a(0)
            } : 0 !== this.negative && 0 === e.negative ? (o = this.neg().divmod(e, t), "mod" !== t && (i = o.div.neg()), "div" !== t && (s = o.mod.neg(), r && 0 !== s.negative && s.iadd(e)), {
              div: i,
              mod: s
            }) : 0 === this.negative && 0 !== e.negative ? (o = this.divmod(e.neg(), t), "mod" !== t && (i = o.div.neg()), {
              div: i,
              mod: o.mod
            }) : 0 != (this.negative & e.negative) ? (o = this.neg().divmod(e.neg(), t), "div" !== t && (s = o.mod.neg(), r && 0 !== s.negative && s.isub(e)), {
              div: o.div,
              mod: s
            }) : e.length > this.length || this.cmp(e) < 0 ? {
              div: new a(0),
              mod: this
            } : 1 === e.length ? "div" === t ? {
              div: this.divn(e.words[0]),
              mod: null
            } : "mod" === t ? {
              div: null,
              mod: new a(this.modn(e.words[0]))
            } : {
              div: this.divn(e.words[0]),
              mod: new a(this.modn(e.words[0]))
            } : this._wordDiv(e, t);
            var i, s, o;
          }, a.prototype.div = function (e) {
            return this.divmod(e, "div", !1).div;
          }, a.prototype.mod = function (e) {
            return this.divmod(e, "mod", !1).mod;
          }, a.prototype.umod = function (e) {
            return this.divmod(e, "mod", !0).mod;
          }, a.prototype.divRound = function (e) {
            var t = this.divmod(e);
            if (t.mod.isZero()) return t.div;
            var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                n = e.ushrn(1),
                i = e.andln(1),
                a = r.cmp(n);
            return a < 0 || 1 === i && 0 === a ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1);
          }, a.prototype.modn = function (e) {
            n(e <= 67108863);

            for (var t = (1 << 26) % e, r = 0, i = this.length - 1; i >= 0; i--) r = (t * r + (0 | this.words[i])) % e;

            return r;
          }, a.prototype.idivn = function (e) {
            n(e <= 67108863);

            for (var t = 0, r = this.length - 1; r >= 0; r--) {
              var i = (0 | this.words[r]) + 67108864 * t;
              this.words[r] = i / e | 0, t = i % e;
            }

            return this.strip();
          }, a.prototype.divn = function (e) {
            return this.clone().idivn(e);
          }, a.prototype.egcd = function (e) {
            n(0 === e.negative), n(!e.isZero());
            var t = this,
                r = e.clone();
            t = 0 !== t.negative ? t.umod(e) : t.clone();

            for (var i = new a(1), s = new a(0), o = new a(0), f = new a(1), d = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++d;

            for (var c = r.clone(), u = t.clone(); !t.isZero();) {
              for (var h = 0, l = 1; 0 == (t.words[0] & l) && h < 26; ++h, l <<= 1);

              if (h > 0) for (t.iushrn(h); h-- > 0;) (i.isOdd() || s.isOdd()) && (i.iadd(c), s.isub(u)), i.iushrn(1), s.iushrn(1);

              for (var p = 0, b = 1; 0 == (r.words[0] & b) && p < 26; ++p, b <<= 1);

              if (p > 0) for (r.iushrn(p); p-- > 0;) (o.isOdd() || f.isOdd()) && (o.iadd(c), f.isub(u)), o.iushrn(1), f.iushrn(1);
              t.cmp(r) >= 0 ? (t.isub(r), i.isub(o), s.isub(f)) : (r.isub(t), o.isub(i), f.isub(s));
            }

            return {
              a: o,
              b: f,
              gcd: r.iushln(d)
            };
          }, a.prototype._invmp = function (e) {
            n(0 === e.negative), n(!e.isZero());
            var t = this,
                r = e.clone();
            t = 0 !== t.negative ? t.umod(e) : t.clone();

            for (var i, s = new a(1), o = new a(0), f = r.clone(); t.cmpn(1) > 0 && r.cmpn(1) > 0;) {
              for (var d = 0, c = 1; 0 == (t.words[0] & c) && d < 26; ++d, c <<= 1);

              if (d > 0) for (t.iushrn(d); d-- > 0;) s.isOdd() && s.iadd(f), s.iushrn(1);

              for (var u = 0, h = 1; 0 == (r.words[0] & h) && u < 26; ++u, h <<= 1);

              if (u > 0) for (r.iushrn(u); u-- > 0;) o.isOdd() && o.iadd(f), o.iushrn(1);
              t.cmp(r) >= 0 ? (t.isub(r), s.isub(o)) : (r.isub(t), o.isub(s));
            }

            return (i = 0 === t.cmpn(1) ? s : o).cmpn(0) < 0 && i.iadd(e), i;
          }, a.prototype.gcd = function (e) {
            if (this.isZero()) return e.abs();
            if (e.isZero()) return this.abs();
            var t = this.clone(),
                r = e.clone();
            t.negative = 0, r.negative = 0;

            for (var n = 0; t.isEven() && r.isEven(); n++) t.iushrn(1), r.iushrn(1);

            for (;;) {
              for (; t.isEven();) t.iushrn(1);

              for (; r.isEven();) r.iushrn(1);

              var i = t.cmp(r);

              if (i < 0) {
                var a = t;
                t = r, r = a;
              } else if (0 === i || 0 === r.cmpn(1)) break;

              t.isub(r);
            }

            return r.iushln(n);
          }, a.prototype.invm = function (e) {
            return this.egcd(e).a.umod(e);
          }, a.prototype.isEven = function () {
            return 0 == (1 & this.words[0]);
          }, a.prototype.isOdd = function () {
            return 1 == (1 & this.words[0]);
          }, a.prototype.andln = function (e) {
            return this.words[0] & e;
          }, a.prototype.bincn = function (e) {
            n("number" == typeof e);
            var t = e % 26,
                r = (e - t) / 26,
                i = 1 << t;
            if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;

            for (var a = i, s = r; 0 !== a && s < this.length; s++) {
              var o = 0 | this.words[s];
              a = (o += a) >>> 26, o &= 67108863, this.words[s] = o;
            }

            return 0 !== a && (this.words[s] = a, this.length++), this;
          }, a.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }, a.prototype.cmpn = function (e) {
            var t,
                r = e < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if (this.strip(), this.length > 1) t = 1;else {
              r && (e = -e), n(e <= 67108863, "Number is too big");
              var i = 0 | this.words[0];
              t = i === e ? 0 : i < e ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -t : t;
          }, a.prototype.cmp = function (e) {
            if (0 !== this.negative && 0 === e.negative) return -1;
            if (0 === this.negative && 0 !== e.negative) return 1;
            var t = this.ucmp(e);
            return 0 !== this.negative ? 0 | -t : t;
          }, a.prototype.ucmp = function (e) {
            if (this.length > e.length) return 1;
            if (this.length < e.length) return -1;

            for (var t = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                  i = 0 | e.words[r];

              if (n !== i) {
                n < i ? t = -1 : n > i && (t = 1);
                break;
              }
            }

            return t;
          }, a.prototype.gtn = function (e) {
            return 1 === this.cmpn(e);
          }, a.prototype.gt = function (e) {
            return 1 === this.cmp(e);
          }, a.prototype.gten = function (e) {
            return this.cmpn(e) >= 0;
          }, a.prototype.gte = function (e) {
            return this.cmp(e) >= 0;
          }, a.prototype.ltn = function (e) {
            return -1 === this.cmpn(e);
          }, a.prototype.lt = function (e) {
            return -1 === this.cmp(e);
          }, a.prototype.lten = function (e) {
            return this.cmpn(e) <= 0;
          }, a.prototype.lte = function (e) {
            return this.cmp(e) <= 0;
          }, a.prototype.eqn = function (e) {
            return 0 === this.cmpn(e);
          }, a.prototype.eq = function (e) {
            return 0 === this.cmp(e);
          }, a.red = function (e) {
            return new _(e);
          }, a.prototype.toRed = function (e) {
            return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e);
          }, a.prototype.fromRed = function () {
            return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
          }, a.prototype._forceRed = function (e) {
            return this.red = e, this;
          }, a.prototype.forceRed = function (e) {
            return n(!this.red, "Already a number in reduction context"), this._forceRed(e);
          }, a.prototype.redAdd = function (e) {
            return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e);
          }, a.prototype.redIAdd = function (e) {
            return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e);
          }, a.prototype.redSub = function (e) {
            return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e);
          }, a.prototype.redISub = function (e) {
            return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e);
          }, a.prototype.redShl = function (e) {
            return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e);
          }, a.prototype.redMul = function (e) {
            return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e);
          }, a.prototype.redIMul = function (e) {
            return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e);
          }, a.prototype.redSqr = function () {
            return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
          }, a.prototype.redISqr = function () {
            return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
          }, a.prototype.redSqrt = function () {
            return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
          }, a.prototype.redInvm = function () {
            return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
          }, a.prototype.redNeg = function () {
            return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
          }, a.prototype.redPow = function (e) {
            return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e);
          };
          var y = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null
          };

          function g(e, t) {
            this.name = e, this.p = new a(t, 16), this.n = this.p.bitLength(), this.k = new a(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
          }

          function v() {
            g.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
          }

          function w() {
            g.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
          }

          function M() {
            g.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
          }

          function A() {
            g.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
          }

          function _(e) {
            if ("string" == typeof e) {
              var t = a._prime(e);

              this.m = t.p, this.prime = t;
            } else n(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null;
          }

          function S(e) {
            _.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new a(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
          }

          g.prototype._tmp = function () {
            var e = new a(null);
            return e.words = new Array(Math.ceil(this.n / 13)), e;
          }, g.prototype.ireduce = function (e) {
            var t,
                r = e;

            do {
              this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength();
            } while (t > this.n);

            var n = t < this.n ? -1 : r.ucmp(this.p);
            return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r;
          }, g.prototype.split = function (e, t) {
            e.iushrn(this.n, 0, t);
          }, g.prototype.imulK = function (e) {
            return e.imul(this.k);
          }, i(v, g), v.prototype.split = function (e, t) {
            for (var r = 4194303, n = Math.min(e.length, 9), i = 0; i < n; i++) t.words[i] = e.words[i];

            if (t.length = n, e.length <= 9) return e.words[0] = 0, void (e.length = 1);
            var a = e.words[9];

            for (t.words[t.length++] = a & r, i = 10; i < e.length; i++) {
              var s = 0 | e.words[i];
              e.words[i - 10] = (s & r) << 4 | a >>> 22, a = s;
            }

            a >>>= 22, e.words[i - 10] = a, 0 === a && e.length > 10 ? e.length -= 10 : e.length -= 9;
          }, v.prototype.imulK = function (e) {
            e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;

            for (var t = 0, r = 0; r < e.length; r++) {
              var n = 0 | e.words[r];
              t += 977 * n, e.words[r] = 67108863 & t, t = 64 * n + (t / 67108864 | 0);
            }

            return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e;
          }, i(w, g), i(M, g), i(A, g), A.prototype.imulK = function (e) {
            for (var t = 0, r = 0; r < e.length; r++) {
              var n = 19 * (0 | e.words[r]) + t,
                  i = 67108863 & n;
              n >>>= 26, e.words[r] = i, t = n;
            }

            return 0 !== t && (e.words[e.length++] = t), e;
          }, a._prime = function (e) {
            if (y[e]) return y[e];
            var t;
            if ("k256" === e) t = new v();else if ("p224" === e) t = new w();else if ("p192" === e) t = new M();else {
              if ("p25519" !== e) throw new Error("Unknown prime " + e);
              t = new A();
            }
            return y[e] = t, t;
          }, _.prototype._verify1 = function (e) {
            n(0 === e.negative, "red works only with positives"), n(e.red, "red works only with red numbers");
          }, _.prototype._verify2 = function (e, t) {
            n(0 == (e.negative | t.negative), "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers");
          }, _.prototype.imod = function (e) {
            return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this);
          }, _.prototype.neg = function (e) {
            return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
          }, _.prototype.add = function (e, t) {
            this._verify2(e, t);

            var r = e.add(t);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }, _.prototype.iadd = function (e, t) {
            this._verify2(e, t);

            var r = e.iadd(t);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }, _.prototype.sub = function (e, t) {
            this._verify2(e, t);

            var r = e.sub(t);
            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
          }, _.prototype.isub = function (e, t) {
            this._verify2(e, t);

            var r = e.isub(t);
            return r.cmpn(0) < 0 && r.iadd(this.m), r;
          }, _.prototype.shl = function (e, t) {
            return this._verify1(e), this.imod(e.ushln(t));
          }, _.prototype.imul = function (e, t) {
            return this._verify2(e, t), this.imod(e.imul(t));
          }, _.prototype.mul = function (e, t) {
            return this._verify2(e, t), this.imod(e.mul(t));
          }, _.prototype.isqr = function (e) {
            return this.imul(e, e.clone());
          }, _.prototype.sqr = function (e) {
            return this.mul(e, e);
          }, _.prototype.sqrt = function (e) {
            if (e.isZero()) return e.clone();
            var t = this.m.andln(3);

            if (n(t % 2 == 1), 3 === t) {
              var r = this.m.add(new a(1)).iushrn(2);
              return this.pow(e, r);
            }

            for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1);) s++, i.iushrn(1);

            n(!i.isZero());
            var o = new a(1).toRed(this),
                f = o.redNeg(),
                d = this.m.subn(1).iushrn(1),
                c = this.m.bitLength();

            for (c = new a(2 * c * c).toRed(this); 0 !== this.pow(c, d).cmp(f);) c.redIAdd(f);

            for (var u = this.pow(c, i), h = this.pow(e, i.addn(1).iushrn(1)), l = this.pow(e, i), p = s; 0 !== l.cmp(o);) {
              for (var b = l, m = 0; 0 !== b.cmp(o); m++) b = b.redSqr();

              n(m < p);
              var y = this.pow(u, new a(1).iushln(p - m - 1));
              h = h.redMul(y), u = y.redSqr(), l = l.redMul(u), p = m;
            }

            return h;
          }, _.prototype.invm = function (e) {
            var t = e._invmp(this.m);

            return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t);
          }, _.prototype.pow = function (e, t) {
            if (t.isZero()) return new a(1).toRed(this);
            if (0 === t.cmpn(1)) return e.clone();
            var r = new Array(16);
            r[0] = new a(1).toRed(this), r[1] = e;

            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e);

            var i = r[0],
                s = 0,
                o = 0,
                f = t.bitLength() % 26;

            for (0 === f && (f = 26), n = t.length - 1; n >= 0; n--) {
              for (var d = t.words[n], c = f - 1; c >= 0; c--) {
                var u = d >> c & 1;
                i !== r[0] && (i = this.sqr(i)), 0 !== u || 0 !== s ? (s <<= 1, s |= u, (4 === ++o || 0 === n && 0 === c) && (i = this.mul(i, r[s]), o = 0, s = 0)) : o = 0;
              }

              f = 26;
            }

            return i;
          }, _.prototype.convertTo = function (e) {
            var t = e.umod(this.m);
            return t === e ? t.clone() : t;
          }, _.prototype.convertFrom = function (e) {
            var t = e.clone();
            return t.red = null, t;
          }, a.mont = function (e) {
            return new S(e);
          }, i(S, _), S.prototype.convertTo = function (e) {
            return this.imod(e.ushln(this.shift));
          }, S.prototype.convertFrom = function (e) {
            var t = this.imod(e.mul(this.rinv));
            return t.red = null, t;
          }, S.prototype.imul = function (e, t) {
            if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
            var r = e.imul(t),
                n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                a = i;
            return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this);
          }, S.prototype.mul = function (e, t) {
            if (e.isZero() || t.isZero()) return new a(0)._forceRed(this);
            var r = e.mul(t),
                n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                s = i;
            return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this);
          }, S.prototype.invm = function (e) {
            return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
          };
        }(e = r.nmd(e), this);
      },
      7056: (e, t, r) => {
        var n;

        function i(e) {
          this.rand = e;
        }

        if (e.exports = function (e) {
          return n || (n = new i(null)), n.generate(e);
        }, e.exports.Rand = i, i.prototype.generate = function (e) {
          return this._rand(e);
        }, i.prototype._rand = function (e) {
          if (this.rand.getBytes) return this.rand.getBytes(e);

          for (var t = new Uint8Array(e), r = 0; r < t.length; r++) t[r] = this.rand.getByte();

          return t;
        }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function (e) {
          var t = new Uint8Array(e);
          return self.crypto.getRandomValues(t), t;
        } : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function (e) {
          var t = new Uint8Array(e);
          return self.msCrypto.getRandomValues(t), t;
        } : "object" == typeof window && (i.prototype._rand = function () {
          throw new Error("Not implemented yet");
        });else try {
          var a = r(9214);
          if ("function" != typeof a.randomBytes) throw new Error("Not supported");

          i.prototype._rand = function (e) {
            return a.randomBytes(e);
          };
        } catch (s) {}
      },
      236: (e, t, r) => {
        "use strict";

        var n = t;
        n.version = r(7519).i8, n.utils = r(1560), n.rand = r(7056), n.curve = r(5533), n.curves = r(5914), n.ec = r(3090), n.eddsa = r(4082);
      },
      4861: (e, t, r) => {
        "use strict";

        var n = r(9919),
            i = r(1560),
            a = i.getNAF,
            s = i.getJSF,
            o = i.assert;

        function f(e, t) {
          this.type = e, this.p = new n(t.p, 16), this.red = t.prime ? n.red(t.prime) : n.mont(this.p), this.zero = new n(0).toRed(this.red), this.one = new n(1).toRed(this.red), this.two = new n(2).toRed(this.red), this.n = t.n && new n(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
          var r = this.n && this.p.div(this.n);
          !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
        }

        function d(e, t) {
          this.curve = e, this.type = t, this.precomputed = null;
        }

        e.exports = f, f.prototype.point = function () {
          throw new Error("Not implemented");
        }, f.prototype.validate = function () {
          throw new Error("Not implemented");
        }, f.prototype._fixedNafMul = function (e, t) {
          o(e.precomputed);

          var r = e._getDoubles(),
              n = a(t, 1, this._bitLength),
              i = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);

          i /= 3;
          var s,
              f,
              d = [];

          for (s = 0; s < n.length; s += r.step) {
            f = 0;

            for (var c = s + r.step - 1; c >= s; c--) f = (f << 1) + n[c];

            d.push(f);
          }

          for (var u = this.jpoint(null, null, null), h = this.jpoint(null, null, null), l = i; l > 0; l--) {
            for (s = 0; s < d.length; s++) (f = d[s]) === l ? h = h.mixedAdd(r.points[s]) : f === -l && (h = h.mixedAdd(r.points[s].neg()));

            u = u.add(h);
          }

          return u.toP();
        }, f.prototype._wnafMul = function (e, t) {
          var r = 4,
              n = e._getNAFPoints(r);

          r = n.wnd;

          for (var i = n.points, s = a(t, r, this._bitLength), f = this.jpoint(null, null, null), d = s.length - 1; d >= 0; d--) {
            for (var c = 0; d >= 0 && 0 === s[d]; d--) c++;

            if (d >= 0 && c++, f = f.dblp(c), d < 0) break;
            var u = s[d];
            o(0 !== u), f = "affine" === e.type ? u > 0 ? f.mixedAdd(i[u - 1 >> 1]) : f.mixedAdd(i[-u - 1 >> 1].neg()) : u > 0 ? f.add(i[u - 1 >> 1]) : f.add(i[-u - 1 >> 1].neg());
          }

          return "affine" === e.type ? f.toP() : f;
        }, f.prototype._wnafMulAdd = function (e, t, r, n, i) {
          var o,
              f,
              d,
              c = this._wnafT1,
              u = this._wnafT2,
              h = this._wnafT3,
              l = 0;

          for (o = 0; o < n; o++) {
            var p = (d = t[o])._getNAFPoints(e);

            c[o] = p.wnd, u[o] = p.points;
          }

          for (o = n - 1; o >= 1; o -= 2) {
            var b = o - 1,
                m = o;

            if (1 === c[b] && 1 === c[m]) {
              var y = [t[b], null, null, t[m]];
              0 === t[b].y.cmp(t[m].y) ? (y[1] = t[b].add(t[m]), y[2] = t[b].toJ().mixedAdd(t[m].neg())) : 0 === t[b].y.cmp(t[m].y.redNeg()) ? (y[1] = t[b].toJ().mixedAdd(t[m]), y[2] = t[b].add(t[m].neg())) : (y[1] = t[b].toJ().mixedAdd(t[m]), y[2] = t[b].toJ().mixedAdd(t[m].neg()));
              var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                  v = s(r[b], r[m]);

              for (l = Math.max(v[0].length, l), h[b] = new Array(l), h[m] = new Array(l), f = 0; f < l; f++) {
                var w = 0 | v[0][f],
                    M = 0 | v[1][f];
                h[b][f] = g[3 * (w + 1) + (M + 1)], h[m][f] = 0, u[b] = y;
              }
            } else h[b] = a(r[b], c[b], this._bitLength), h[m] = a(r[m], c[m], this._bitLength), l = Math.max(h[b].length, l), l = Math.max(h[m].length, l);
          }

          var A = this.jpoint(null, null, null),
              _ = this._wnafT4;

          for (o = l; o >= 0; o--) {
            for (var S = 0; o >= 0;) {
              var E = !0;

              for (f = 0; f < n; f++) _[f] = 0 | h[f][o], 0 !== _[f] && (E = !1);

              if (!E) break;
              S++, o--;
            }

            if (o >= 0 && S++, A = A.dblp(S), o < 0) break;

            for (f = 0; f < n; f++) {
              var x = _[f];
              0 !== x && (x > 0 ? d = u[f][x - 1 >> 1] : x < 0 && (d = u[f][-x - 1 >> 1].neg()), A = "affine" === d.type ? A.mixedAdd(d) : A.add(d));
            }
          }

          for (o = 0; o < n; o++) u[o] = null;

          return i ? A : A.toP();
        }, f.BasePoint = d, d.prototype.eq = function () {
          throw new Error("Not implemented");
        }, d.prototype.validate = function () {
          return this.curve.validate(this);
        }, f.prototype.decodePoint = function (e, t) {
          e = i.toArray(e, t);
          var r = this.p.byteLength();
          if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r) return 6 === e[0] ? o(e[e.length - 1] % 2 == 0) : 7 === e[0] && o(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
          if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r) return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
          throw new Error("Unknown point format");
        }, d.prototype.encodeCompressed = function (e) {
          return this.encode(e, !0);
        }, d.prototype._encode = function (e) {
          var t = this.curve.p.byteLength(),
              r = this.getX().toArray("be", t);
          return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t));
        }, d.prototype.encode = function (e, t) {
          return i.encode(this._encode(t), e);
        }, d.prototype.precompute = function (e) {
          if (this.precomputed) return this;
          var t = {
            doubles: null,
            naf: null,
            beta: null
          };
          return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this;
        }, d.prototype._hasDoubles = function (e) {
          if (!this.precomputed) return !1;
          var t = this.precomputed.doubles;
          return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step);
        }, d.prototype._getDoubles = function (e, t) {
          if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;

          for (var r = [this], n = this, i = 0; i < t; i += e) {
            for (var a = 0; a < e; a++) n = n.dbl();

            r.push(n);
          }

          return {
            step: e,
            points: r
          };
        }, d.prototype._getNAFPoints = function (e) {
          if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;

          for (var t = [this], r = (1 << e) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++) t[i] = t[i - 1].add(n);

          return {
            wnd: e,
            points: t
          };
        }, d.prototype._getBeta = function () {
          return null;
        }, d.prototype.dblp = function (e) {
          for (var t = this, r = 0; r < e; r++) t = t.dbl();

          return t;
        };
      },
      5649: (e, t, r) => {
        "use strict";

        var n = r(1560),
            i = r(9919),
            a = r(5153),
            s = r(4861),
            o = n.assert;

        function f(e) {
          this.twisted = 1 != (0 | e.a), this.mOneA = this.twisted && -1 == (0 | e.a), this.extended = this.mOneA, s.call(this, "edwards", e), this.a = new i(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new i(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new i(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), o(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | e.c);
        }

        function d(e, t, r, n, a) {
          s.BasePoint.call(this, e, "projective"), null === t && null === r && null === n ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new i(t, 16), this.y = new i(r, 16), this.z = n ? new i(n, 16) : this.curve.one, this.t = a && new i(a, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
        }

        a(f, s), e.exports = f, f.prototype._mulA = function (e) {
          return this.mOneA ? e.redNeg() : this.a.redMul(e);
        }, f.prototype._mulC = function (e) {
          return this.oneC ? e : this.c.redMul(e);
        }, f.prototype.jpoint = function (e, t, r, n) {
          return this.point(e, t, r, n);
        }, f.prototype.pointFromX = function (e, t) {
          (e = new i(e, 16)).red || (e = e.toRed(this.red));
          var r = e.redSqr(),
              n = this.c2.redSub(this.a.redMul(r)),
              a = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
              s = n.redMul(a.redInvm()),
              o = s.redSqrt();
          if (0 !== o.redSqr().redSub(s).cmp(this.zero)) throw new Error("invalid point");
          var f = o.fromRed().isOdd();
          return (t && !f || !t && f) && (o = o.redNeg()), this.point(e, o);
        }, f.prototype.pointFromY = function (e, t) {
          (e = new i(e, 16)).red || (e = e.toRed(this.red));
          var r = e.redSqr(),
              n = r.redSub(this.c2),
              a = r.redMul(this.d).redMul(this.c2).redSub(this.a),
              s = n.redMul(a.redInvm());

          if (0 === s.cmp(this.zero)) {
            if (t) throw new Error("invalid point");
            return this.point(this.zero, e);
          }

          var o = s.redSqrt();
          if (0 !== o.redSqr().redSub(s).cmp(this.zero)) throw new Error("invalid point");
          return o.fromRed().isOdd() !== t && (o = o.redNeg()), this.point(o, e);
        }, f.prototype.validate = function (e) {
          if (e.isInfinity()) return !0;
          e.normalize();
          var t = e.x.redSqr(),
              r = e.y.redSqr(),
              n = t.redMul(this.a).redAdd(r),
              i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
          return 0 === n.cmp(i);
        }, a(d, s.BasePoint), f.prototype.pointFromJSON = function (e) {
          return d.fromJSON(this, e);
        }, f.prototype.point = function (e, t, r, n) {
          return new d(this, e, t, r, n);
        }, d.fromJSON = function (e, t) {
          return new d(e, t[0], t[1], t[2]);
        }, d.prototype.inspect = function () {
          return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
        }, d.prototype.isInfinity = function () {
          return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c));
        }, d.prototype._extDbl = function () {
          var e = this.x.redSqr(),
              t = this.y.redSqr(),
              r = this.z.redSqr();
          r = r.redIAdd(r);

          var n = this.curve._mulA(e),
              i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
              a = n.redAdd(t),
              s = a.redSub(r),
              o = n.redSub(t),
              f = i.redMul(s),
              d = a.redMul(o),
              c = i.redMul(o),
              u = s.redMul(a);

          return this.curve.point(f, d, u, c);
        }, d.prototype._projDbl = function () {
          var e,
              t,
              r,
              n,
              i,
              a,
              s = this.x.redAdd(this.y).redSqr(),
              o = this.x.redSqr(),
              f = this.y.redSqr();

          if (this.curve.twisted) {
            var d = (n = this.curve._mulA(o)).redAdd(f);

            this.zOne ? (e = s.redSub(o).redSub(f).redMul(d.redSub(this.curve.two)), t = d.redMul(n.redSub(f)), r = d.redSqr().redSub(d).redSub(d)) : (i = this.z.redSqr(), a = d.redSub(i).redISub(i), e = s.redSub(o).redISub(f).redMul(a), t = d.redMul(n.redSub(f)), r = d.redMul(a));
          } else n = o.redAdd(f), i = this.curve._mulC(this.z).redSqr(), a = n.redSub(i).redSub(i), e = this.curve._mulC(s.redISub(n)).redMul(a), t = this.curve._mulC(n).redMul(o.redISub(f)), r = n.redMul(a);

          return this.curve.point(e, t, r);
        }, d.prototype.dbl = function () {
          return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
        }, d.prototype._extAdd = function (e) {
          var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
              r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
              n = this.t.redMul(this.curve.dd).redMul(e.t),
              i = this.z.redMul(e.z.redAdd(e.z)),
              a = r.redSub(t),
              s = i.redSub(n),
              o = i.redAdd(n),
              f = r.redAdd(t),
              d = a.redMul(s),
              c = o.redMul(f),
              u = a.redMul(f),
              h = s.redMul(o);
          return this.curve.point(d, c, h, u);
        }, d.prototype._projAdd = function (e) {
          var t,
              r,
              n = this.z.redMul(e.z),
              i = n.redSqr(),
              a = this.x.redMul(e.x),
              s = this.y.redMul(e.y),
              o = this.curve.d.redMul(a).redMul(s),
              f = i.redSub(o),
              d = i.redAdd(o),
              c = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(a).redISub(s),
              u = n.redMul(f).redMul(c);
          return this.curve.twisted ? (t = n.redMul(d).redMul(s.redSub(this.curve._mulA(a))), r = f.redMul(d)) : (t = n.redMul(d).redMul(s.redSub(a)), r = this.curve._mulC(f).redMul(d)), this.curve.point(u, t, r);
        }, d.prototype.add = function (e) {
          return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e);
        }, d.prototype.mul = function (e) {
          return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e);
        }, d.prototype.mulAdd = function (e, t, r) {
          return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1);
        }, d.prototype.jmulAdd = function (e, t, r) {
          return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0);
        }, d.prototype.normalize = function () {
          if (this.zOne) return this;
          var e = this.z.redInvm();
          return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this;
        }, d.prototype.neg = function () {
          return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
        }, d.prototype.getX = function () {
          return this.normalize(), this.x.fromRed();
        }, d.prototype.getY = function () {
          return this.normalize(), this.y.fromRed();
        }, d.prototype.eq = function (e) {
          return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY());
        }, d.prototype.eqXToP = function (e) {
          var t = e.toRed(this.curve.red).redMul(this.z);
          if (0 === this.x.cmp(t)) return !0;

          for (var r = e.clone(), n = this.curve.redN.redMul(this.z);;) {
            if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
            if (t.redIAdd(n), 0 === this.x.cmp(t)) return !0;
          }
        }, d.prototype.toP = d.prototype.normalize, d.prototype.mixedAdd = d.prototype.add;
      },
      5533: (e, t, r) => {
        "use strict";

        var n = t;
        n.base = r(4861), n.short = r(8707), n.mont = r(7474), n.edwards = r(5649);
      },
      7474: (e, t, r) => {
        "use strict";

        var n = r(9919),
            i = r(5153),
            a = r(4861),
            s = r(1560);

        function o(e) {
          a.call(this, "mont", e), this.a = new n(e.a, 16).toRed(this.red), this.b = new n(e.b, 16).toRed(this.red), this.i4 = new n(4).toRed(this.red).redInvm(), this.two = new n(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two));
        }

        function f(e, t, r) {
          a.BasePoint.call(this, e, "projective"), null === t && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new n(t, 16), this.z = new n(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)));
        }

        i(o, a), e.exports = o, o.prototype.validate = function (e) {
          var t = e.normalize().x,
              r = t.redSqr(),
              n = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
          return 0 === n.redSqrt().redSqr().cmp(n);
        }, i(f, a.BasePoint), o.prototype.decodePoint = function (e, t) {
          return this.point(s.toArray(e, t), 1);
        }, o.prototype.point = function (e, t) {
          return new f(this, e, t);
        }, o.prototype.pointFromJSON = function (e) {
          return f.fromJSON(this, e);
        }, f.prototype.precompute = function () {}, f.prototype._encode = function () {
          return this.getX().toArray("be", this.curve.p.byteLength());
        }, f.fromJSON = function (e, t) {
          return new f(e, t[0], t[1] || e.one);
        }, f.prototype.inspect = function () {
          return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
        }, f.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        }, f.prototype.dbl = function () {
          var e = this.x.redAdd(this.z).redSqr(),
              t = this.x.redSub(this.z).redSqr(),
              r = e.redSub(t),
              n = e.redMul(t),
              i = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
          return this.curve.point(n, i);
        }, f.prototype.add = function () {
          throw new Error("Not supported on Montgomery curve");
        }, f.prototype.diffAdd = function (e, t) {
          var r = this.x.redAdd(this.z),
              n = this.x.redSub(this.z),
              i = e.x.redAdd(e.z),
              a = e.x.redSub(e.z).redMul(r),
              s = i.redMul(n),
              o = t.z.redMul(a.redAdd(s).redSqr()),
              f = t.x.redMul(a.redISub(s).redSqr());
          return this.curve.point(o, f);
        }, f.prototype.mul = function (e) {
          for (var t = e.clone(), r = this, n = this.curve.point(null, null), i = []; 0 !== t.cmpn(0); t.iushrn(1)) i.push(t.andln(1));

          for (var a = i.length - 1; a >= 0; a--) 0 === i[a] ? (r = r.diffAdd(n, this), n = n.dbl()) : (n = r.diffAdd(n, this), r = r.dbl());

          return n;
        }, f.prototype.mulAdd = function () {
          throw new Error("Not supported on Montgomery curve");
        }, f.prototype.jumlAdd = function () {
          throw new Error("Not supported on Montgomery curve");
        }, f.prototype.eq = function (e) {
          return 0 === this.getX().cmp(e.getX());
        }, f.prototype.normalize = function () {
          return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this;
        }, f.prototype.getX = function () {
          return this.normalize(), this.x.fromRed();
        };
      },
      8707: (e, t, r) => {
        "use strict";

        var n = r(1560),
            i = r(9919),
            a = r(5153),
            s = r(4861),
            o = n.assert;

        function f(e) {
          s.call(this, "short", e), this.a = new i(e.a, 16).toRed(this.red), this.b = new i(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
        }

        function d(e, t, r, n) {
          s.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i(t, 16), this.y = new i(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
        }

        function c(e, t, r, n) {
          s.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i(0)) : (this.x = new i(t, 16), this.y = new i(r, 16), this.z = new i(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
        }

        a(f, s), e.exports = f, f.prototype._getEndomorphism = function (e) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var t, r;
            if (e.beta) t = new i(e.beta, 16).toRed(this.red);else {
              var n = this._getEndoRoots(this.p);

              t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
            }
            if (e.lambda) r = new i(e.lambda, 16);else {
              var a = this._getEndoRoots(this.n);

              0 === this.g.mul(a[0]).x.cmp(this.g.x.redMul(t)) ? r = a[0] : (r = a[1], o(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
            }
            return {
              beta: t,
              lambda: r,
              basis: e.basis ? e.basis.map(function (e) {
                return {
                  a: new i(e.a, 16),
                  b: new i(e.b, 16)
                };
              }) : this._getEndoBasis(r)
            };
          }
        }, f.prototype._getEndoRoots = function (e) {
          var t = e === this.p ? this.red : i.mont(e),
              r = new i(2).toRed(t).redInvm(),
              n = r.redNeg(),
              a = new i(3).toRed(t).redNeg().redSqrt().redMul(r);
          return [n.redAdd(a).fromRed(), n.redSub(a).fromRed()];
        }, f.prototype._getEndoBasis = function (e) {
          for (var t, r, n, a, s, o, f, d, c, u = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), h = e, l = this.n.clone(), p = new i(1), b = new i(0), m = new i(0), y = new i(1), g = 0; 0 !== h.cmpn(0);) {
            var v = l.div(h);
            d = l.sub(v.mul(h)), c = m.sub(v.mul(p));
            var w = y.sub(v.mul(b));
            if (!n && d.cmp(u) < 0) t = f.neg(), r = p, n = d.neg(), a = c;else if (n && 2 == ++g) break;
            f = d, l = h, h = d, m = p, p = c, y = b, b = w;
          }

          s = d.neg(), o = c;
          var M = n.sqr().add(a.sqr());
          return s.sqr().add(o.sqr()).cmp(M) >= 0 && (s = t, o = r), n.negative && (n = n.neg(), a = a.neg()), s.negative && (s = s.neg(), o = o.neg()), [{
            a: n,
            b: a
          }, {
            a: s,
            b: o
          }];
        }, f.prototype._endoSplit = function (e) {
          var t = this.endo.basis,
              r = t[0],
              n = t[1],
              i = n.b.mul(e).divRound(this.n),
              a = r.b.neg().mul(e).divRound(this.n),
              s = i.mul(r.a),
              o = a.mul(n.a),
              f = i.mul(r.b),
              d = a.mul(n.b);
          return {
            k1: e.sub(s).sub(o),
            k2: f.add(d).neg()
          };
        }, f.prototype.pointFromX = function (e, t) {
          (e = new i(e, 16)).red || (e = e.toRed(this.red));
          var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
              n = r.redSqrt();
          if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
          var a = n.fromRed().isOdd();
          return (t && !a || !t && a) && (n = n.redNeg()), this.point(e, n);
        }, f.prototype.validate = function (e) {
          if (e.inf) return !0;
          var t = e.x,
              r = e.y,
              n = this.a.redMul(t),
              i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
          return 0 === r.redSqr().redISub(i).cmpn(0);
        }, f.prototype._endoWnafMulAdd = function (e, t, r) {
          for (var n = this._endoWnafT1, i = this._endoWnafT2, a = 0; a < e.length; a++) {
            var s = this._endoSplit(t[a]),
                o = e[a],
                f = o._getBeta();

            s.k1.negative && (s.k1.ineg(), o = o.neg(!0)), s.k2.negative && (s.k2.ineg(), f = f.neg(!0)), n[2 * a] = o, n[2 * a + 1] = f, i[2 * a] = s.k1, i[2 * a + 1] = s.k2;
          }

          for (var d = this._wnafMulAdd(1, n, i, 2 * a, r), c = 0; c < 2 * a; c++) n[c] = null, i[c] = null;

          return d;
        }, a(d, s.BasePoint), f.prototype.point = function (e, t, r) {
          return new d(this, e, t, r);
        }, f.prototype.pointFromJSON = function (e, t) {
          return d.fromJSON(this, e, t);
        }, d.prototype._getBeta = function () {
          if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);

            if (e) {
              var r = this.curve,
                  n = function (e) {
                return r.point(e.x.redMul(r.endo.beta), e.y);
              };

              e.beta = t, t.precomputed = {
                beta: null,
                naf: e.naf && {
                  wnd: e.naf.wnd,
                  points: e.naf.points.map(n)
                },
                doubles: e.doubles && {
                  step: e.doubles.step,
                  points: e.doubles.points.map(n)
                }
              };
            }

            return t;
          }
        }, d.prototype.toJSON = function () {
          return this.precomputed ? [this.x, this.y, this.precomputed && {
            doubles: this.precomputed.doubles && {
              step: this.precomputed.doubles.step,
              points: this.precomputed.doubles.points.slice(1)
            },
            naf: this.precomputed.naf && {
              wnd: this.precomputed.naf.wnd,
              points: this.precomputed.naf.points.slice(1)
            }
          }] : [this.x, this.y];
        }, d.fromJSON = function (e, t, r) {
          "string" == typeof t && (t = JSON.parse(t));
          var n = e.point(t[0], t[1], r);
          if (!t[2]) return n;

          function i(t) {
            return e.point(t[0], t[1], r);
          }

          var a = t[2];
          return n.precomputed = {
            beta: null,
            doubles: a.doubles && {
              step: a.doubles.step,
              points: [n].concat(a.doubles.points.map(i))
            },
            naf: a.naf && {
              wnd: a.naf.wnd,
              points: [n].concat(a.naf.points.map(i))
            }
          }, n;
        }, d.prototype.inspect = function () {
          return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
        }, d.prototype.isInfinity = function () {
          return this.inf;
        }, d.prototype.add = function (e) {
          if (this.inf) return e;
          if (e.inf) return this;
          if (this.eq(e)) return this.dbl();
          if (this.neg().eq(e)) return this.curve.point(null, null);
          if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
          var t = this.y.redSub(e.y);
          0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
          var r = t.redSqr().redISub(this.x).redISub(e.x),
              n = t.redMul(this.x.redSub(r)).redISub(this.y);
          return this.curve.point(r, n);
        }, d.prototype.dbl = function () {
          if (this.inf) return this;
          var e = this.y.redAdd(this.y);
          if (0 === e.cmpn(0)) return this.curve.point(null, null);
          var t = this.curve.a,
              r = this.x.redSqr(),
              n = e.redInvm(),
              i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),
              a = i.redSqr().redISub(this.x.redAdd(this.x)),
              s = i.redMul(this.x.redSub(a)).redISub(this.y);
          return this.curve.point(a, s);
        }, d.prototype.getX = function () {
          return this.x.fromRed();
        }, d.prototype.getY = function () {
          return this.y.fromRed();
        }, d.prototype.mul = function (e) {
          return e = new i(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e);
        }, d.prototype.mulAdd = function (e, t, r) {
          var n = [this, t],
              i = [e, r];
          return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2);
        }, d.prototype.jmulAdd = function (e, t, r) {
          var n = [this, t],
              i = [e, r];
          return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0);
        }, d.prototype.eq = function (e) {
          return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y));
        }, d.prototype.neg = function (e) {
          if (this.inf) return this;
          var t = this.curve.point(this.x, this.y.redNeg());

          if (e && this.precomputed) {
            var r = this.precomputed,
                n = function (e) {
              return e.neg();
            };

            t.precomputed = {
              naf: r.naf && {
                wnd: r.naf.wnd,
                points: r.naf.points.map(n)
              },
              doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(n)
              }
            };
          }

          return t;
        }, d.prototype.toJ = function () {
          return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one);
        }, a(c, s.BasePoint), f.prototype.jpoint = function (e, t, r) {
          return new c(this, e, t, r);
        }, c.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var e = this.z.redInvm(),
              t = e.redSqr(),
              r = this.x.redMul(t),
              n = this.y.redMul(t).redMul(e);
          return this.curve.point(r, n);
        }, c.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }, c.prototype.add = function (e) {
          if (this.isInfinity()) return e;
          if (e.isInfinity()) return this;
          var t = e.z.redSqr(),
              r = this.z.redSqr(),
              n = this.x.redMul(t),
              i = e.x.redMul(r),
              a = this.y.redMul(t.redMul(e.z)),
              s = e.y.redMul(r.redMul(this.z)),
              o = n.redSub(i),
              f = a.redSub(s);
          if (0 === o.cmpn(0)) return 0 !== f.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
          var d = o.redSqr(),
              c = d.redMul(o),
              u = n.redMul(d),
              h = f.redSqr().redIAdd(c).redISub(u).redISub(u),
              l = f.redMul(u.redISub(h)).redISub(a.redMul(c)),
              p = this.z.redMul(e.z).redMul(o);
          return this.curve.jpoint(h, l, p);
        }, c.prototype.mixedAdd = function (e) {
          if (this.isInfinity()) return e.toJ();
          if (e.isInfinity()) return this;
          var t = this.z.redSqr(),
              r = this.x,
              n = e.x.redMul(t),
              i = this.y,
              a = e.y.redMul(t).redMul(this.z),
              s = r.redSub(n),
              o = i.redSub(a);
          if (0 === s.cmpn(0)) return 0 !== o.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
          var f = s.redSqr(),
              d = f.redMul(s),
              c = r.redMul(f),
              u = o.redSqr().redIAdd(d).redISub(c).redISub(c),
              h = o.redMul(c.redISub(u)).redISub(i.redMul(d)),
              l = this.z.redMul(s);
          return this.curve.jpoint(u, h, l);
        }, c.prototype.dblp = function (e) {
          if (0 === e) return this;
          if (this.isInfinity()) return this;
          if (!e) return this.dbl();
          var t;

          if (this.curve.zeroA || this.curve.threeA) {
            var r = this;

            for (t = 0; t < e; t++) r = r.dbl();

            return r;
          }

          var n = this.curve.a,
              i = this.curve.tinv,
              a = this.x,
              s = this.y,
              o = this.z,
              f = o.redSqr().redSqr(),
              d = s.redAdd(s);

          for (t = 0; t < e; t++) {
            var c = a.redSqr(),
                u = d.redSqr(),
                h = u.redSqr(),
                l = c.redAdd(c).redIAdd(c).redIAdd(n.redMul(f)),
                p = a.redMul(u),
                b = l.redSqr().redISub(p.redAdd(p)),
                m = p.redISub(b),
                y = l.redMul(m);
            y = y.redIAdd(y).redISub(h);
            var g = d.redMul(o);
            t + 1 < e && (f = f.redMul(h)), a = b, o = g, d = y;
          }

          return this.curve.jpoint(a, d.redMul(i), o);
        }, c.prototype.dbl = function () {
          return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
        }, c.prototype._zeroDbl = function () {
          var e, t, r;

          if (this.zOne) {
            var n = this.x.redSqr(),
                i = this.y.redSqr(),
                a = i.redSqr(),
                s = this.x.redAdd(i).redSqr().redISub(n).redISub(a);
            s = s.redIAdd(s);
            var o = n.redAdd(n).redIAdd(n),
                f = o.redSqr().redISub(s).redISub(s),
                d = a.redIAdd(a);
            d = (d = d.redIAdd(d)).redIAdd(d), e = f, t = o.redMul(s.redISub(f)).redISub(d), r = this.y.redAdd(this.y);
          } else {
            var c = this.x.redSqr(),
                u = this.y.redSqr(),
                h = u.redSqr(),
                l = this.x.redAdd(u).redSqr().redISub(c).redISub(h);
            l = l.redIAdd(l);
            var p = c.redAdd(c).redIAdd(c),
                b = p.redSqr(),
                m = h.redIAdd(h);
            m = (m = m.redIAdd(m)).redIAdd(m), e = b.redISub(l).redISub(l), t = p.redMul(l.redISub(e)).redISub(m), r = (r = this.y.redMul(this.z)).redIAdd(r);
          }

          return this.curve.jpoint(e, t, r);
        }, c.prototype._threeDbl = function () {
          var e, t, r;

          if (this.zOne) {
            var n = this.x.redSqr(),
                i = this.y.redSqr(),
                a = i.redSqr(),
                s = this.x.redAdd(i).redSqr().redISub(n).redISub(a);
            s = s.redIAdd(s);
            var o = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                f = o.redSqr().redISub(s).redISub(s);
            e = f;
            var d = a.redIAdd(a);
            d = (d = d.redIAdd(d)).redIAdd(d), t = o.redMul(s.redISub(f)).redISub(d), r = this.y.redAdd(this.y);
          } else {
            var c = this.z.redSqr(),
                u = this.y.redSqr(),
                h = this.x.redMul(u),
                l = this.x.redSub(c).redMul(this.x.redAdd(c));
            l = l.redAdd(l).redIAdd(l);
            var p = h.redIAdd(h),
                b = (p = p.redIAdd(p)).redAdd(p);
            e = l.redSqr().redISub(b), r = this.y.redAdd(this.z).redSqr().redISub(u).redISub(c);
            var m = u.redSqr();
            m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m), t = l.redMul(p.redISub(e)).redISub(m);
          }

          return this.curve.jpoint(e, t, r);
        }, c.prototype._dbl = function () {
          var e = this.curve.a,
              t = this.x,
              r = this.y,
              n = this.z,
              i = n.redSqr().redSqr(),
              a = t.redSqr(),
              s = r.redSqr(),
              o = a.redAdd(a).redIAdd(a).redIAdd(e.redMul(i)),
              f = t.redAdd(t),
              d = (f = f.redIAdd(f)).redMul(s),
              c = o.redSqr().redISub(d.redAdd(d)),
              u = d.redISub(c),
              h = s.redSqr();
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var l = o.redMul(u).redISub(h),
              p = r.redAdd(r).redMul(n);
          return this.curve.jpoint(c, l, p);
        }, c.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var e = this.x.redSqr(),
              t = this.y.redSqr(),
              r = this.z.redSqr(),
              n = t.redSqr(),
              i = e.redAdd(e).redIAdd(e),
              a = i.redSqr(),
              s = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
              o = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(a)).redSqr(),
              f = n.redIAdd(n);
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
          var d = i.redIAdd(s).redSqr().redISub(a).redISub(o).redISub(f),
              c = t.redMul(d);
          c = (c = c.redIAdd(c)).redIAdd(c);
          var u = this.x.redMul(o).redISub(c);
          u = (u = u.redIAdd(u)).redIAdd(u);
          var h = this.y.redMul(d.redMul(f.redISub(d)).redISub(s.redMul(o)));
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var l = this.z.redAdd(s).redSqr().redISub(r).redISub(o);
          return this.curve.jpoint(u, h, l);
        }, c.prototype.mul = function (e, t) {
          return e = new i(e, t), this.curve._wnafMul(this, e);
        }, c.prototype.eq = function (e) {
          if ("affine" === e.type) return this.eq(e.toJ());
          if (this === e) return !0;
          var t = this.z.redSqr(),
              r = e.z.redSqr();
          if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
          var n = t.redMul(this.z),
              i = r.redMul(e.z);
          return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0);
        }, c.prototype.eqXToP = function (e) {
          var t = this.z.redSqr(),
              r = e.toRed(this.curve.red).redMul(t);
          if (0 === this.x.cmp(r)) return !0;

          for (var n = e.clone(), i = this.curve.redN.redMul(t);;) {
            if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
            if (r.redIAdd(i), 0 === this.x.cmp(r)) return !0;
          }
        }, c.prototype.inspect = function () {
          return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
        }, c.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        };
      },
      5914: (e, t, r) => {
        "use strict";

        var n,
            i = t,
            a = r(6204),
            s = r(5533),
            o = r(1560).assert;

        function f(e) {
          "short" === e.type ? this.curve = new s.short(e) : "edwards" === e.type ? this.curve = new s.edwards(e) : this.curve = new s.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, o(this.g.validate(), "Invalid curve"), o(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
        }

        function d(e, t) {
          Object.defineProperty(i, e, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              var r = new f(t);
              return Object.defineProperty(i, e, {
                configurable: !0,
                enumerable: !0,
                value: r
              }), r;
            }
          });
        }

        i.PresetCurve = f, d("p192", {
          type: "short",
          prime: "p192",
          p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
          b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
          n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
          hash: a.sha256,
          gRed: !1,
          g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
        }), d("p224", {
          type: "short",
          prime: "p224",
          p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
          b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
          n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
          hash: a.sha256,
          gRed: !1,
          g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
        }), d("p256", {
          type: "short",
          prime: null,
          p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
          a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
          b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
          n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
          hash: a.sha256,
          gRed: !1,
          g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
        }), d("p384", {
          type: "short",
          prime: null,
          p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
          a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
          b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
          n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
          hash: a.sha384,
          gRed: !1,
          g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
        }), d("p521", {
          type: "short",
          prime: null,
          p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
          a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
          b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
          n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
          hash: a.sha512,
          gRed: !1,
          g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
        }), d("curve25519", {
          type: "mont",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "76d06",
          b: "1",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: a.sha256,
          gRed: !1,
          g: ["9"]
        }), d("ed25519", {
          type: "edwards",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "-1",
          c: "1",
          d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: a.sha256,
          gRed: !1,
          g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
        });

        try {
          n = r(2970);
        } catch (c) {
          n = void 0;
        }

        d("secp256k1", {
          type: "short",
          prime: "k256",
          p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
          a: "0",
          b: "7",
          n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
          h: "1",
          hash: a.sha256,
          beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
          lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
          basis: [{
            a: "3086d221a7d46bcde86c90e49284eb15",
            b: "-e4437ed6010e88286f547fa90abfe4c3"
          }, {
            a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
            b: "3086d221a7d46bcde86c90e49284eb15"
          }],
          gRed: !1,
          g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", n]
        });
      },
      3090: (e, t, r) => {
        "use strict";

        var n = r(9919),
            i = r(4859),
            a = r(1560),
            s = r(5914),
            o = r(7056),
            f = a.assert,
            d = r(4858),
            c = r(3539);

        function u(e) {
          if (!(this instanceof u)) return new u(e);
          "string" == typeof e && (f(Object.prototype.hasOwnProperty.call(s, e), "Unknown curve " + e), e = s[e]), e instanceof s.PresetCurve && (e = {
            curve: e
          }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash;
        }

        e.exports = u, u.prototype.keyPair = function (e) {
          return new d(this, e);
        }, u.prototype.keyFromPrivate = function (e, t) {
          return d.fromPrivate(this, e, t);
        }, u.prototype.keyFromPublic = function (e, t) {
          return d.fromPublic(this, e, t);
        }, u.prototype.genKeyPair = function (e) {
          e || (e = {});

          for (var t = new i({
            hash: this.hash,
            pers: e.pers,
            persEnc: e.persEnc || "utf8",
            entropy: e.entropy || o(this.hash.hmacStrength),
            entropyEnc: e.entropy && e.entropyEnc || "utf8",
            nonce: this.n.toArray()
          }), r = this.n.byteLength(), a = this.n.sub(new n(2));;) {
            var s = new n(t.generate(r));
            if (!(s.cmp(a) > 0)) return s.iaddn(1), this.keyFromPrivate(s);
          }
        }, u.prototype._truncateToN = function (e, t) {
          var r = 8 * e.byteLength() - this.n.bitLength();
          return r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e;
        }, u.prototype.sign = function (e, t, r, a) {
          "object" == typeof r && (a = r, r = null), a || (a = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new n(e, 16));

          for (var s = this.n.byteLength(), o = t.getPrivate().toArray("be", s), f = e.toArray("be", s), d = new i({
            hash: this.hash,
            entropy: o,
            nonce: f,
            pers: a.pers,
            persEnc: a.persEnc || "utf8"
          }), u = this.n.sub(new n(1)), h = 0;; h++) {
            var l = a.k ? a.k(h) : new n(d.generate(this.n.byteLength()));

            if (!((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(u) >= 0)) {
              var p = this.g.mul(l);

              if (!p.isInfinity()) {
                var b = p.getX(),
                    m = b.umod(this.n);

                if (0 !== m.cmpn(0)) {
                  var y = l.invm(this.n).mul(m.mul(t.getPrivate()).iadd(e));

                  if (0 !== (y = y.umod(this.n)).cmpn(0)) {
                    var g = (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(m) ? 2 : 0);
                    return a.canonical && y.cmp(this.nh) > 0 && (y = this.n.sub(y), g ^= 1), new c({
                      r: m,
                      s: y,
                      recoveryParam: g
                    });
                  }
                }
              }
            }
          }
        }, u.prototype.verify = function (e, t, r, i) {
          e = this._truncateToN(new n(e, 16)), r = this.keyFromPublic(r, i);
          var a = (t = new c(t, "hex")).r,
              s = t.s;
          if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
          if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
          var o,
              f = s.invm(this.n),
              d = f.mul(e).umod(this.n),
              u = f.mul(a).umod(this.n);
          return this.curve._maxwellTrick ? !(o = this.g.jmulAdd(d, r.getPublic(), u)).isInfinity() && o.eqXToP(a) : !(o = this.g.mulAdd(d, r.getPublic(), u)).isInfinity() && 0 === o.getX().umod(this.n).cmp(a);
        }, u.prototype.recoverPubKey = function (e, t, r, i) {
          f((3 & r) === r, "The recovery param is more than two bits"), t = new c(t, i);
          var a = this.n,
              s = new n(e),
              o = t.r,
              d = t.s,
              u = 1 & r,
              h = r >> 1;
          if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h) throw new Error("Unable to find sencond key candinate");
          o = h ? this.curve.pointFromX(o.add(this.curve.n), u) : this.curve.pointFromX(o, u);
          var l = t.r.invm(a),
              p = a.sub(s).mul(l).umod(a),
              b = d.mul(l).umod(a);
          return this.g.mulAdd(p, o, b);
        }, u.prototype.getKeyRecoveryParam = function (e, t, r, n) {
          if (null !== (t = new c(t, n)).recoveryParam) return t.recoveryParam;

          for (var i = 0; i < 4; i++) {
            var a;

            try {
              a = this.recoverPubKey(e, t, i);
            } catch (e) {
              continue;
            }

            if (a.eq(r)) return i;
          }

          throw new Error("Unable to find valid recovery factor");
        };
      },
      4858: (e, t, r) => {
        "use strict";

        var n = r(9919),
            i = r(1560).assert;

        function a(e, t) {
          this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc);
        }

        e.exports = a, a.fromPublic = function (e, t, r) {
          return t instanceof a ? t : new a(e, {
            pub: t,
            pubEnc: r
          });
        }, a.fromPrivate = function (e, t, r) {
          return t instanceof a ? t : new a(e, {
            priv: t,
            privEnc: r
          });
        }, a.prototype.validate = function () {
          var e = this.getPublic();
          return e.isInfinity() ? {
            result: !1,
            reason: "Invalid public key"
          } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
            result: !0,
            reason: null
          } : {
            result: !1,
            reason: "Public key * N != O"
          } : {
            result: !1,
            reason: "Public key is not a point"
          };
        }, a.prototype.getPublic = function (e, t) {
          return "string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub;
        }, a.prototype.getPrivate = function (e) {
          return "hex" === e ? this.priv.toString(16, 2) : this.priv;
        }, a.prototype._importPrivate = function (e, t) {
          this.priv = new n(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n);
        }, a.prototype._importPublic = function (e, t) {
          if (e.x || e.y) return "mont" === this.ec.curve.type ? i(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || i(e.x && e.y, "Need both x and y coordinate"), void (this.pub = this.ec.curve.point(e.x, e.y));
          this.pub = this.ec.curve.decodePoint(e, t);
        }, a.prototype.derive = function (e) {
          return e.validate() || i(e.validate(), "public point not validated"), e.mul(this.priv).getX();
        }, a.prototype.sign = function (e, t, r) {
          return this.ec.sign(e, this, t, r);
        }, a.prototype.verify = function (e, t) {
          return this.ec.verify(e, t, this);
        }, a.prototype.inspect = function () {
          return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
        };
      },
      3539: (e, t, r) => {
        "use strict";

        var n = r(9919),
            i = r(1560),
            a = i.assert;

        function s(e, t) {
          if (e instanceof s) return e;
          this._importDER(e, t) || (a(e.r && e.s, "Signature without r or s"), this.r = new n(e.r, 16), this.s = new n(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam);
        }

        function o() {
          this.place = 0;
        }

        function f(e, t) {
          var r = e[t.place++];
          if (!(128 & r)) return r;
          var n = 15 & r;
          if (0 === n || n > 4) return !1;

          for (var i = 0, a = 0, s = t.place; a < n; a++, s++) i <<= 8, i |= e[s], i >>>= 0;

          return !(i <= 127) && (t.place = s, i);
        }

        function d(e) {
          for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r;) t++;

          return 0 === t ? e : e.slice(t);
        }

        function c(e, t) {
          if (t < 128) e.push(t);else {
            var r = 1 + (Math.log(t) / Math.LN2 >>> 3);

            for (e.push(128 | r); --r;) e.push(t >>> (r << 3) & 255);

            e.push(t);
          }
        }

        e.exports = s, s.prototype._importDER = function (e, t) {
          e = i.toArray(e, t);
          var r = new o();
          if (48 !== e[r.place++]) return !1;
          var a = f(e, r);
          if (!1 === a) return !1;
          if (a + r.place !== e.length) return !1;
          if (2 !== e[r.place++]) return !1;
          var s = f(e, r);
          if (!1 === s) return !1;
          var d = e.slice(r.place, s + r.place);
          if (r.place += s, 2 !== e[r.place++]) return !1;
          var c = f(e, r);
          if (!1 === c) return !1;
          if (e.length !== c + r.place) return !1;
          var u = e.slice(r.place, c + r.place);

          if (0 === d[0]) {
            if (!(128 & d[1])) return !1;
            d = d.slice(1);
          }

          if (0 === u[0]) {
            if (!(128 & u[1])) return !1;
            u = u.slice(1);
          }

          return this.r = new n(d), this.s = new n(u), this.recoveryParam = null, !0;
        }, s.prototype.toDER = function (e) {
          var t = this.r.toArray(),
              r = this.s.toArray();

          for (128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r)), t = d(t), r = d(r); !(r[0] || 128 & r[1]);) r = r.slice(1);

          var n = [2];
          c(n, t.length), (n = n.concat(t)).push(2), c(n, r.length);
          var a = n.concat(r),
              s = [48];
          return c(s, a.length), s = s.concat(a), i.encode(s, e);
        };
      },
      4082: (e, t, r) => {
        "use strict";

        var n = r(6204),
            i = r(5914),
            a = r(1560),
            s = a.assert,
            o = a.parseBytes,
            f = r(6958),
            d = r(6018);

        function c(e) {
          if (s("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof c)) return new c(e);
          e = i[e].curve, this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = n.sha512;
        }

        e.exports = c, c.prototype.sign = function (e, t) {
          e = o(e);
          var r = this.keyFromSecret(t),
              n = this.hashInt(r.messagePrefix(), e),
              i = this.g.mul(n),
              a = this.encodePoint(i),
              s = this.hashInt(a, r.pubBytes(), e).mul(r.priv()),
              f = n.add(s).umod(this.curve.n);
          return this.makeSignature({
            R: i,
            S: f,
            Rencoded: a
          });
        }, c.prototype.verify = function (e, t, r) {
          e = o(e), t = this.makeSignature(t);
          var n = this.keyFromPublic(r),
              i = this.hashInt(t.Rencoded(), n.pubBytes(), e),
              a = this.g.mul(t.S());
          return t.R().add(n.pub().mul(i)).eq(a);
        }, c.prototype.hashInt = function () {
          for (var e = this.hash(), t = 0; t < arguments.length; t++) e.update(arguments[t]);

          return a.intFromLE(e.digest()).umod(this.curve.n);
        }, c.prototype.keyFromPublic = function (e) {
          return f.fromPublic(this, e);
        }, c.prototype.keyFromSecret = function (e) {
          return f.fromSecret(this, e);
        }, c.prototype.makeSignature = function (e) {
          return e instanceof d ? e : new d(this, e);
        }, c.prototype.encodePoint = function (e) {
          var t = e.getY().toArray("le", this.encodingLength);
          return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, t;
        }, c.prototype.decodePoint = function (e) {
          var t = (e = a.parseBytes(e)).length - 1,
              r = e.slice(0, t).concat(-129 & e[t]),
              n = 0 != (128 & e[t]),
              i = a.intFromLE(r);
          return this.curve.pointFromY(i, n);
        }, c.prototype.encodeInt = function (e) {
          return e.toArray("le", this.encodingLength);
        }, c.prototype.decodeInt = function (e) {
          return a.intFromLE(e);
        }, c.prototype.isPoint = function (e) {
          return e instanceof this.pointClass;
        };
      },
      6958: (e, t, r) => {
        "use strict";

        var n = r(1560),
            i = n.assert,
            a = n.parseBytes,
            s = n.cachedProperty;

        function o(e, t) {
          this.eddsa = e, this._secret = a(t.secret), e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = a(t.pub);
        }

        o.fromPublic = function (e, t) {
          return t instanceof o ? t : new o(e, {
            pub: t
          });
        }, o.fromSecret = function (e, t) {
          return t instanceof o ? t : new o(e, {
            secret: t
          });
        }, o.prototype.secret = function () {
          return this._secret;
        }, s(o, "pubBytes", function () {
          return this.eddsa.encodePoint(this.pub());
        }), s(o, "pub", function () {
          return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv());
        }), s(o, "privBytes", function () {
          var e = this.eddsa,
              t = this.hash(),
              r = e.encodingLength - 1,
              n = t.slice(0, e.encodingLength);
          return n[0] &= 248, n[r] &= 127, n[r] |= 64, n;
        }), s(o, "priv", function () {
          return this.eddsa.decodeInt(this.privBytes());
        }), s(o, "hash", function () {
          return this.eddsa.hash().update(this.secret()).digest();
        }), s(o, "messagePrefix", function () {
          return this.hash().slice(this.eddsa.encodingLength);
        }), o.prototype.sign = function (e) {
          return i(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this);
        }, o.prototype.verify = function (e, t) {
          return this.eddsa.verify(e, t, this);
        }, o.prototype.getSecret = function (e) {
          return i(this._secret, "KeyPair is public only"), n.encode(this.secret(), e);
        }, o.prototype.getPublic = function (e) {
          return n.encode(this.pubBytes(), e);
        }, e.exports = o;
      },
      6018: (e, t, r) => {
        "use strict";

        var n = r(9919),
            i = r(1560),
            a = i.assert,
            s = i.cachedProperty,
            o = i.parseBytes;

        function f(e, t) {
          this.eddsa = e, "object" != typeof t && (t = o(t)), Array.isArray(t) && (t = {
            R: t.slice(0, e.encodingLength),
            S: t.slice(e.encodingLength)
          }), a(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof n && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded;
        }

        s(f, "S", function () {
          return this.eddsa.decodeInt(this.Sencoded());
        }), s(f, "R", function () {
          return this.eddsa.decodePoint(this.Rencoded());
        }), s(f, "Rencoded", function () {
          return this.eddsa.encodePoint(this.R());
        }), s(f, "Sencoded", function () {
          return this.eddsa.encodeInt(this.S());
        }), f.prototype.toBytes = function () {
          return this.Rencoded().concat(this.Sencoded());
        }, f.prototype.toHex = function () {
          return i.encode(this.toBytes(), "hex").toUpperCase();
        }, e.exports = f;
      },
      2970: e => {
        e.exports = {
          doubles: {
            step: 4,
            points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]
          },
          naf: {
            wnd: 7,
            points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]
          }
        };
      },
      1560: (e, t, r) => {
        "use strict";

        var n = t,
            i = r(9919),
            a = r(6794),
            s = r(7705);
        n.assert = a, n.toArray = s.toArray, n.zero2 = s.zero2, n.toHex = s.toHex, n.encode = s.encode, n.getNAF = function (e, t, r) {
          var n = new Array(Math.max(e.bitLength(), r) + 1);
          n.fill(0);

          for (var i = 1 << t + 1, a = e.clone(), s = 0; s < n.length; s++) {
            var o,
                f = a.andln(i - 1);
            a.isOdd() ? (o = f > (i >> 1) - 1 ? (i >> 1) - f : f, a.isubn(o)) : o = 0, n[s] = o, a.iushrn(1);
          }

          return n;
        }, n.getJSF = function (e, t) {
          var r = [[], []];
          e = e.clone(), t = t.clone();

          for (var n, i = 0, a = 0; e.cmpn(-i) > 0 || t.cmpn(-a) > 0;) {
            var s,
                o,
                f = e.andln(3) + i & 3,
                d = t.andln(3) + a & 3;
            3 === f && (f = -1), 3 === d && (d = -1), s = 0 == (1 & f) ? 0 : 3 !== (n = e.andln(7) + i & 7) && 5 !== n || 2 !== d ? f : -f, r[0].push(s), o = 0 == (1 & d) ? 0 : 3 !== (n = t.andln(7) + a & 7) && 5 !== n || 2 !== f ? d : -d, r[1].push(o), 2 * i === s + 1 && (i = 1 - i), 2 * a === o + 1 && (a = 1 - a), e.iushrn(1), t.iushrn(1);
          }

          return r;
        }, n.cachedProperty = function (e, t, r) {
          var n = "_" + t;

          e.prototype[t] = function () {
            return void 0 !== this[n] ? this[n] : this[n] = r.call(this);
          };
        }, n.parseBytes = function (e) {
          return "string" == typeof e ? n.toArray(e, "hex") : e;
        }, n.intFromLE = function (e) {
          return new i(e, "hex", "le");
        };
      },
      6204: (e, t, r) => {
        var n = t;
        n.utils = r(6414), n.common = r(2238), n.sha = r(165), n.ripemd = r(2185), n.hmac = r(6316), n.sha1 = n.sha.sha1, n.sha256 = n.sha.sha256, n.sha224 = n.sha.sha224, n.sha384 = n.sha.sha384, n.sha512 = n.sha.sha512, n.ripemd160 = n.ripemd.ripemd160;
      },
      2238: (e, t, r) => {
        "use strict";

        var n = r(6414),
            i = r(6794);

        function a() {
          this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
        }

        t.BlockHash = a, a.prototype.update = function (e, t) {
          if (e = n.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
            var r = (e = this.pending).length % this._delta8;
            this.pending = e.slice(e.length - r, e.length), 0 === this.pending.length && (this.pending = null), e = n.join32(e, 0, e.length - r, this.endian);

            for (var i = 0; i < e.length; i += this._delta32) this._update(e, i, i + this._delta32);
          }

          return this;
        }, a.prototype.digest = function (e) {
          return this.update(this._pad()), i(null === this.pending), this._digest(e);
        }, a.prototype._pad = function () {
          var e = this.pendingTotal,
              t = this._delta8,
              r = t - (e + this.padLength) % t,
              n = new Array(r + this.padLength);
          n[0] = 128;

          for (var i = 1; i < r; i++) n[i] = 0;

          if (e <<= 3, "big" === this.endian) {
            for (var a = 8; a < this.padLength; a++) n[i++] = 0;

            n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = e >>> 24 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 8 & 255, n[i++] = 255 & e;
          } else for (n[i++] = 255 & e, n[i++] = e >>> 8 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, a = 8; a < this.padLength; a++) n[i++] = 0;

          return n;
        };
      },
      6316: (e, t, r) => {
        "use strict";

        var n = r(6414),
            i = r(6794);

        function a(e, t, r) {
          if (!(this instanceof a)) return new a(e, t, r);
          this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(n.toArray(t, r));
        }

        e.exports = a, a.prototype._init = function (e) {
          e.length > this.blockSize && (e = new this.Hash().update(e).digest()), i(e.length <= this.blockSize);

          for (var t = e.length; t < this.blockSize; t++) e.push(0);

          for (t = 0; t < e.length; t++) e[t] ^= 54;

          for (this.inner = new this.Hash().update(e), t = 0; t < e.length; t++) e[t] ^= 106;

          this.outer = new this.Hash().update(e);
        }, a.prototype.update = function (e, t) {
          return this.inner.update(e, t), this;
        }, a.prototype.digest = function (e) {
          return this.outer.update(this.inner.digest()), this.outer.digest(e);
        };
      },
      2185: (e, t, r) => {
        "use strict";

        var n = r(6414),
            i = r(2238),
            a = n.rotl32,
            s = n.sum32,
            o = n.sum32_3,
            f = n.sum32_4,
            d = i.BlockHash;

        function c() {
          if (!(this instanceof c)) return new c();
          d.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
        }

        function u(e, t, r, n) {
          return e <= 15 ? t ^ r ^ n : e <= 31 ? t & r | ~t & n : e <= 47 ? (t | ~r) ^ n : e <= 63 ? t & n | r & ~n : t ^ (r | ~n);
        }

        function h(e) {
          return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838;
        }

        function l(e) {
          return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0;
        }

        n.inherits(c, d), t.ripemd160 = c, c.blockSize = 512, c.outSize = 160, c.hmacStrength = 192, c.padLength = 64, c.prototype._update = function (e, t) {
          for (var r = this.h[0], n = this.h[1], i = this.h[2], d = this.h[3], c = this.h[4], g = r, v = n, w = i, M = d, A = c, _ = 0; _ < 80; _++) {
            var S = s(a(f(r, u(_, n, i, d), e[p[_] + t], h(_)), m[_]), c);
            r = c, c = d, d = a(i, 10), i = n, n = S, S = s(a(f(g, u(79 - _, v, w, M), e[b[_] + t], l(_)), y[_]), A), g = A, A = M, M = a(w, 10), w = v, v = S;
          }

          S = o(this.h[1], i, M), this.h[1] = o(this.h[2], d, A), this.h[2] = o(this.h[3], c, g), this.h[3] = o(this.h[4], r, v), this.h[4] = o(this.h[0], n, w), this.h[0] = S;
        }, c.prototype._digest = function (e) {
          return "hex" === e ? n.toHex32(this.h, "little") : n.split32(this.h, "little");
        };
        var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
            b = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
            m = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
            y = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
      },
      165: (e, t, r) => {
        "use strict";

        t.sha1 = r(6854), t.sha224 = r(9104), t.sha256 = r(7284), t.sha384 = r(8909), t.sha512 = r(1260);
      },
      6854: (e, t, r) => {
        "use strict";

        var n = r(6414),
            i = r(2238),
            a = r(2181),
            s = n.rotl32,
            o = n.sum32,
            f = n.sum32_5,
            d = a.ft_1,
            c = i.BlockHash,
            u = [1518500249, 1859775393, 2400959708, 3395469782];

        function h() {
          if (!(this instanceof h)) return new h();
          c.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80);
        }

        n.inherits(h, c), e.exports = h, h.blockSize = 512, h.outSize = 160, h.hmacStrength = 80, h.padLength = 64, h.prototype._update = function (e, t) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];

          for (; n < r.length; n++) r[n] = s(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);

          var i = this.h[0],
              a = this.h[1],
              c = this.h[2],
              h = this.h[3],
              l = this.h[4];

          for (n = 0; n < r.length; n++) {
            var p = ~~(n / 20),
                b = f(s(i, 5), d(p, a, c, h), l, r[n], u[p]);
            l = h, h = c, c = s(a, 30), a = i, i = b;
          }

          this.h[0] = o(this.h[0], i), this.h[1] = o(this.h[1], a), this.h[2] = o(this.h[2], c), this.h[3] = o(this.h[3], h), this.h[4] = o(this.h[4], l);
        }, h.prototype._digest = function (e) {
          return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
        };
      },
      9104: (e, t, r) => {
        "use strict";

        var n = r(6414),
            i = r(7284);

        function a() {
          if (!(this instanceof a)) return new a();
          i.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
        }

        n.inherits(a, i), e.exports = a, a.blockSize = 512, a.outSize = 224, a.hmacStrength = 192, a.padLength = 64, a.prototype._digest = function (e) {
          return "hex" === e ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big");
        };
      },
      7284: (e, t, r) => {
        "use strict";

        var n = r(6414),
            i = r(2238),
            a = r(2181),
            s = r(6794),
            o = n.sum32,
            f = n.sum32_4,
            d = n.sum32_5,
            c = a.ch32,
            u = a.maj32,
            h = a.s0_256,
            l = a.s1_256,
            p = a.g0_256,
            b = a.g1_256,
            m = i.BlockHash,
            y = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

        function g() {
          if (!(this instanceof g)) return new g();
          m.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = y, this.W = new Array(64);
        }

        n.inherits(g, m), e.exports = g, g.blockSize = 512, g.outSize = 256, g.hmacStrength = 192, g.padLength = 64, g.prototype._update = function (e, t) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];

          for (; n < r.length; n++) r[n] = f(b(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);

          var i = this.h[0],
              a = this.h[1],
              m = this.h[2],
              y = this.h[3],
              g = this.h[4],
              v = this.h[5],
              w = this.h[6],
              M = this.h[7];

          for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
            var A = d(M, l(g), c(g, v, w), this.k[n], r[n]),
                _ = o(h(i), u(i, a, m));

            M = w, w = v, v = g, g = o(y, A), y = m, m = a, a = i, i = o(A, _);
          }

          this.h[0] = o(this.h[0], i), this.h[1] = o(this.h[1], a), this.h[2] = o(this.h[2], m), this.h[3] = o(this.h[3], y), this.h[4] = o(this.h[4], g), this.h[5] = o(this.h[5], v), this.h[6] = o(this.h[6], w), this.h[7] = o(this.h[7], M);
        }, g.prototype._digest = function (e) {
          return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
        };
      },
      8909: (e, t, r) => {
        "use strict";

        var n = r(6414),
            i = r(1260);

        function a() {
          if (!(this instanceof a)) return new a();
          i.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
        }

        n.inherits(a, i), e.exports = a, a.blockSize = 1024, a.outSize = 384, a.hmacStrength = 192, a.padLength = 128, a.prototype._digest = function (e) {
          return "hex" === e ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big");
        };
      },
      1260: (e, t, r) => {
        "use strict";

        var n = r(6414),
            i = r(2238),
            a = r(6794),
            s = n.rotr64_hi,
            o = n.rotr64_lo,
            f = n.shr64_hi,
            d = n.shr64_lo,
            c = n.sum64,
            u = n.sum64_hi,
            h = n.sum64_lo,
            l = n.sum64_4_hi,
            p = n.sum64_4_lo,
            b = n.sum64_5_hi,
            m = n.sum64_5_lo,
            y = i.BlockHash,
            g = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

        function v() {
          if (!(this instanceof v)) return new v();
          y.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = g, this.W = new Array(160);
        }

        function w(e, t, r, n, i) {
          var a = e & r ^ ~e & i;
          return a < 0 && (a += 4294967296), a;
        }

        function M(e, t, r, n, i, a) {
          var s = t & n ^ ~t & a;
          return s < 0 && (s += 4294967296), s;
        }

        function A(e, t, r, n, i) {
          var a = e & r ^ e & i ^ r & i;
          return a < 0 && (a += 4294967296), a;
        }

        function _(e, t, r, n, i, a) {
          var s = t & n ^ t & a ^ n & a;
          return s < 0 && (s += 4294967296), s;
        }

        function S(e, t) {
          var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
          return r < 0 && (r += 4294967296), r;
        }

        function E(e, t) {
          var r = o(e, t, 28) ^ o(t, e, 2) ^ o(t, e, 7);
          return r < 0 && (r += 4294967296), r;
        }

        function x(e, t) {
          var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
          return r < 0 && (r += 4294967296), r;
        }

        function T(e, t) {
          var r = o(e, t, 14) ^ o(e, t, 18) ^ o(t, e, 9);
          return r < 0 && (r += 4294967296), r;
        }

        function P(e, t) {
          var r = s(e, t, 1) ^ s(e, t, 8) ^ f(e, t, 7);
          return r < 0 && (r += 4294967296), r;
        }

        function k(e, t) {
          var r = o(e, t, 1) ^ o(e, t, 8) ^ d(e, t, 7);
          return r < 0 && (r += 4294967296), r;
        }

        function I(e, t) {
          var r = s(e, t, 19) ^ s(t, e, 29) ^ f(e, t, 6);
          return r < 0 && (r += 4294967296), r;
        }

        function B(e, t) {
          var r = o(e, t, 19) ^ o(t, e, 29) ^ d(e, t, 6);
          return r < 0 && (r += 4294967296), r;
        }

        n.inherits(v, y), e.exports = v, v.blockSize = 1024, v.outSize = 512, v.hmacStrength = 192, v.padLength = 128, v.prototype._prepareBlock = function (e, t) {
          for (var r = this.W, n = 0; n < 32; n++) r[n] = e[t + n];

          for (; n < r.length; n += 2) {
            var i = I(r[n - 4], r[n - 3]),
                a = B(r[n - 4], r[n - 3]),
                s = r[n - 14],
                o = r[n - 13],
                f = P(r[n - 30], r[n - 29]),
                d = k(r[n - 30], r[n - 29]),
                c = r[n - 32],
                u = r[n - 31];
            r[n] = l(i, a, s, o, f, d, c, u), r[n + 1] = p(i, a, s, o, f, d, c, u);
          }
        }, v.prototype._update = function (e, t) {
          this._prepareBlock(e, t);

          var r = this.W,
              n = this.h[0],
              i = this.h[1],
              s = this.h[2],
              o = this.h[3],
              f = this.h[4],
              d = this.h[5],
              l = this.h[6],
              p = this.h[7],
              y = this.h[8],
              g = this.h[9],
              v = this.h[10],
              P = this.h[11],
              k = this.h[12],
              I = this.h[13],
              B = this.h[14],
              j = this.h[15];
          a(this.k.length === r.length);

          for (var O = 0; O < r.length; O += 2) {
            var R = B,
                N = j,
                H = x(y, g),
                C = T(y, g),
                z = w(y, g, v, P, k),
                D = M(y, g, v, P, k, I),
                q = this.k[O],
                L = this.k[O + 1],
                F = r[O],
                U = r[O + 1],
                $ = b(R, N, H, C, z, D, q, L, F, U),
                X = m(R, N, H, C, z, D, q, L, F, U);
            R = S(n, i), N = E(n, i), H = A(n, i, s, o, f), C = _(n, i, s, o, f, d);
            var G = u(R, N, H, C),
                W = h(R, N, H, C);
            B = k, j = I, k = v, I = P, v = y, P = g, y = u(l, p, $, X), g = h(p, p, $, X), l = f, p = d, f = s, d = o, s = n, o = i, n = u($, X, G, W), i = h($, X, G, W);
          }

          c(this.h, 0, n, i), c(this.h, 2, s, o), c(this.h, 4, f, d), c(this.h, 6, l, p), c(this.h, 8, y, g), c(this.h, 10, v, P), c(this.h, 12, k, I), c(this.h, 14, B, j);
        }, v.prototype._digest = function (e) {
          return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
        };
      },
      2181: (e, t, r) => {
        "use strict";

        var n = r(6414).rotr32;

        function i(e, t, r) {
          return e & t ^ ~e & r;
        }

        function a(e, t, r) {
          return e & t ^ e & r ^ t & r;
        }

        function s(e, t, r) {
          return e ^ t ^ r;
        }

        t.ft_1 = function (e, t, r, n) {
          return 0 === e ? i(t, r, n) : 1 === e || 3 === e ? s(t, r, n) : 2 === e ? a(t, r, n) : void 0;
        }, t.ch32 = i, t.maj32 = a, t.p32 = s, t.s0_256 = function (e) {
          return n(e, 2) ^ n(e, 13) ^ n(e, 22);
        }, t.s1_256 = function (e) {
          return n(e, 6) ^ n(e, 11) ^ n(e, 25);
        }, t.g0_256 = function (e) {
          return n(e, 7) ^ n(e, 18) ^ e >>> 3;
        }, t.g1_256 = function (e) {
          return n(e, 17) ^ n(e, 19) ^ e >>> 10;
        };
      },
      6414: (e, t, r) => {
        "use strict";

        var n = r(6794),
            i = r(5153);

        function a(e, t) {
          return 55296 == (64512 & e.charCodeAt(t)) && !(t < 0 || t + 1 >= e.length) && 56320 == (64512 & e.charCodeAt(t + 1));
        }

        function s(e) {
          return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0;
        }

        function o(e) {
          return 1 === e.length ? "0" + e : e;
        }

        function f(e) {
          return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e;
        }

        t.inherits = i, t.toArray = function (e, t) {
          if (Array.isArray(e)) return e.slice();
          if (!e) return [];
          var r = [];
          if ("string" == typeof e) {
            if (t) {
              if ("hex" === t) for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), i = 0; i < e.length; i += 2) r.push(parseInt(e[i] + e[i + 1], 16));
            } else for (var n = 0, i = 0; i < e.length; i++) {
              var s = e.charCodeAt(i);
              s < 128 ? r[n++] = s : s < 2048 ? (r[n++] = s >> 6 | 192, r[n++] = 63 & s | 128) : a(e, i) ? (s = 65536 + ((1023 & s) << 10) + (1023 & e.charCodeAt(++i)), r[n++] = s >> 18 | 240, r[n++] = s >> 12 & 63 | 128, r[n++] = s >> 6 & 63 | 128, r[n++] = 63 & s | 128) : (r[n++] = s >> 12 | 224, r[n++] = s >> 6 & 63 | 128, r[n++] = 63 & s | 128);
            }
          } else for (i = 0; i < e.length; i++) r[i] = 0 | e[i];
          return r;
        }, t.toHex = function (e) {
          for (var t = "", r = 0; r < e.length; r++) t += o(e[r].toString(16));

          return t;
        }, t.htonl = s, t.toHex32 = function (e, t) {
          for (var r = "", n = 0; n < e.length; n++) {
            var i = e[n];
            "little" === t && (i = s(i)), r += f(i.toString(16));
          }

          return r;
        }, t.zero2 = o, t.zero8 = f, t.join32 = function (e, t, r, i) {
          var a = r - t;
          n(a % 4 == 0);

          for (var s = new Array(a / 4), o = 0, f = t; o < s.length; o++, f += 4) {
            var d;
            d = "big" === i ? e[f] << 24 | e[f + 1] << 16 | e[f + 2] << 8 | e[f + 3] : e[f + 3] << 24 | e[f + 2] << 16 | e[f + 1] << 8 | e[f], s[o] = d >>> 0;
          }

          return s;
        }, t.split32 = function (e, t) {
          for (var r = new Array(4 * e.length), n = 0, i = 0; n < e.length; n++, i += 4) {
            var a = e[n];
            "big" === t ? (r[i] = a >>> 24, r[i + 1] = a >>> 16 & 255, r[i + 2] = a >>> 8 & 255, r[i + 3] = 255 & a) : (r[i + 3] = a >>> 24, r[i + 2] = a >>> 16 & 255, r[i + 1] = a >>> 8 & 255, r[i] = 255 & a);
          }

          return r;
        }, t.rotr32 = function (e, t) {
          return e >>> t | e << 32 - t;
        }, t.rotl32 = function (e, t) {
          return e << t | e >>> 32 - t;
        }, t.sum32 = function (e, t) {
          return e + t >>> 0;
        }, t.sum32_3 = function (e, t, r) {
          return e + t + r >>> 0;
        }, t.sum32_4 = function (e, t, r, n) {
          return e + t + r + n >>> 0;
        }, t.sum32_5 = function (e, t, r, n, i) {
          return e + t + r + n + i >>> 0;
        }, t.sum64 = function (e, t, r, n) {
          var i = e[t],
              a = n + e[t + 1] >>> 0,
              s = (a < n ? 1 : 0) + r + i;
          e[t] = s >>> 0, e[t + 1] = a;
        }, t.sum64_hi = function (e, t, r, n) {
          return (t + n >>> 0 < t ? 1 : 0) + e + r >>> 0;
        }, t.sum64_lo = function (e, t, r, n) {
          return t + n >>> 0;
        }, t.sum64_4_hi = function (e, t, r, n, i, a, s, o) {
          var f = 0,
              d = t;
          return f += (d = d + n >>> 0) < t ? 1 : 0, f += (d = d + a >>> 0) < a ? 1 : 0, e + r + i + s + (f += (d = d + o >>> 0) < o ? 1 : 0) >>> 0;
        }, t.sum64_4_lo = function (e, t, r, n, i, a, s, o) {
          return t + n + a + o >>> 0;
        }, t.sum64_5_hi = function (e, t, r, n, i, a, s, o, f, d) {
          var c = 0,
              u = t;
          return c += (u = u + n >>> 0) < t ? 1 : 0, c += (u = u + a >>> 0) < a ? 1 : 0, c += (u = u + o >>> 0) < o ? 1 : 0, e + r + i + s + f + (c += (u = u + d >>> 0) < d ? 1 : 0) >>> 0;
        }, t.sum64_5_lo = function (e, t, r, n, i, a, s, o, f, d) {
          return t + n + a + o + d >>> 0;
        }, t.rotr64_hi = function (e, t, r) {
          return (t << 32 - r | e >>> r) >>> 0;
        }, t.rotr64_lo = function (e, t, r) {
          return (e << 32 - r | t >>> r) >>> 0;
        }, t.shr64_hi = function (e, t, r) {
          return e >>> r;
        }, t.shr64_lo = function (e, t, r) {
          return (e << 32 - r | t >>> r) >>> 0;
        };
      },
      4859: (e, t, r) => {
        "use strict";

        var n = r(6204),
            i = r(7705),
            a = r(6794);

        function s(e) {
          if (!(this instanceof s)) return new s(e);
          this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
          var t = i.toArray(e.entropy, e.entropyEnc || "hex"),
              r = i.toArray(e.nonce, e.nonceEnc || "hex"),
              n = i.toArray(e.pers, e.persEnc || "hex");
          a(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, n);
        }

        e.exports = s, s.prototype._init = function (e, t, r) {
          var n = e.concat(t).concat(r);
          this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);

          for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;

          this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656;
        }, s.prototype._hmac = function () {
          return new n.hmac(this.hash, this.K);
        }, s.prototype._update = function (e) {
          var t = this._hmac().update(this.V).update([0]);

          e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest());
        }, s.prototype.reseed = function (e, t, r, n) {
          "string" != typeof t && (n = r, r = t, t = null), e = i.toArray(e, t), r = i.toArray(r, n), a(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this._reseed = 1;
        }, s.prototype.generate = function (e, t, r, n) {
          if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
          "string" != typeof t && (n = r, r = t, t = null), r && (r = i.toArray(r, n || "hex"), this._update(r));

          for (var a = []; a.length < e;) this.V = this._hmac().update(this.V).digest(), a = a.concat(this.V);

          var s = a.slice(0, e);
          return this._update(r), this._reseed++, i.encode(s, t);
        };
      },
      5153: e => {
        "function" == typeof Object.create ? e.exports = function (e, t) {
          t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }));
        } : e.exports = function (e, t) {
          if (t) {
            e.super_ = t;

            var r = function () {};

            r.prototype = t.prototype, e.prototype = new r(), e.prototype.constructor = e;
          }
        };
      },
      2256: (e, t, r) => {
        var n = null;
        "undefined" != typeof WebSocket ? n = WebSocket : "undefined" != typeof MozWebSocket ? n = MozWebSocket : void 0 !== r.g ? n = r.g.WebSocket || r.g.MozWebSocket : "undefined" != typeof window ? n = window.WebSocket || window.MozWebSocket : "undefined" != typeof self && (n = self.WebSocket || self.MozWebSocket), e.exports = n;
      },
      8086: (e, t, r) => {
        var n;
        !function () {
          "use strict";

          var i = "input is invalid type",
              a = "object" == typeof window,
              s = a ? window : {};
          s.JS_SHA3_NO_WINDOW && (a = !1);
          var o = !a && "object" == typeof self;
          !s.JS_SHA3_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node ? s = r.g : o && (s = self);
          var f = !s.JS_SHA3_NO_COMMON_JS && e.exports,
              d = r.amdO,
              c = !s.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
              u = "0123456789abcdef".split(""),
              h = [4, 1024, 262144, 67108864],
              l = [0, 8, 16, 24],
              p = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
              b = [224, 256, 384, 512],
              m = [128, 256],
              y = ["hex", "buffer", "arrayBuffer", "array", "digest"],
              g = {
            128: 168,
            256: 136
          };
          !s.JS_SHA3_NO_NODE_JS && Array.isArray || (Array.isArray = function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          }), !c || !s.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (e) {
            return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer;
          });

          for (var v = function (e, t, r) {
            return function (n) {
              return new R(e, t, e).update(n)[r]();
            };
          }, w = function (e, t, r) {
            return function (n, i) {
              return new R(e, t, i).update(n)[r]();
            };
          }, M = function (e, t, r) {
            return function (t, n, i, a) {
              return x["cshake" + e].update(t, n, i, a)[r]();
            };
          }, A = function (e, t, r) {
            return function (t, n, i, a) {
              return x["kmac" + e].update(t, n, i, a)[r]();
            };
          }, _ = function (e, t, r, n) {
            for (var i = 0; i < y.length; ++i) {
              var a = y[i];
              e[a] = t(r, n, a);
            }

            return e;
          }, S = function (e, t) {
            var r = v(e, t, "hex");
            return r.create = function () {
              return new R(e, t, e);
            }, r.update = function (e) {
              return r.create().update(e);
            }, _(r, v, e, t);
          }, E = [{
            name: "keccak",
            padding: [1, 256, 65536, 16777216],
            bits: b,
            createMethod: S
          }, {
            name: "sha3",
            padding: [6, 1536, 393216, 100663296],
            bits: b,
            createMethod: S
          }, {
            name: "shake",
            padding: [31, 7936, 2031616, 520093696],
            bits: m,
            createMethod: function (e, t) {
              var r = w(e, t, "hex");
              return r.create = function (r) {
                return new R(e, t, r);
              }, r.update = function (e, t) {
                return r.create(t).update(e);
              }, _(r, w, e, t);
            }
          }, {
            name: "cshake",
            padding: h,
            bits: m,
            createMethod: function (e, t) {
              var r = g[e],
                  n = M(e, 0, "hex");
              return n.create = function (n, i, a) {
                return i || a ? new R(e, t, n).bytepad([i, a], r) : x["shake" + e].create(n);
              }, n.update = function (e, t, r, i) {
                return n.create(t, r, i).update(e);
              }, _(n, M, e, t);
            }
          }, {
            name: "kmac",
            padding: h,
            bits: m,
            createMethod: function (e, t) {
              var r = g[e],
                  n = A(e, 0, "hex");
              return n.create = function (n, i, a) {
                return new N(e, t, i).bytepad(["KMAC", a], r).bytepad([n], r);
              }, n.update = function (e, t, r, i) {
                return n.create(e, r, i).update(t);
              }, _(n, A, e, t);
            }
          }], x = {}, T = [], P = 0; P < E.length; ++P) for (var k = E[P], I = k.bits, B = 0; B < I.length; ++B) {
            var j = k.name + "_" + I[B];

            if (T.push(j), x[j] = k.createMethod(I[B], k.padding), "sha3" !== k.name) {
              var O = k.name + I[B];
              T.push(O), x[O] = x[j];
            }
          }

          function R(e, t, r) {
            this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;

            for (var n = 0; n < 50; ++n) this.s[n] = 0;
          }

          function N(e, t, r) {
            R.call(this, e, t, r);
          }

          R.prototype.update = function (e) {
            if (this.finalized) throw new Error("finalize already called");
            var t,
                r = typeof e;

            if ("string" !== r) {
              if ("object" !== r) throw new Error(i);
              if (null === e) throw new Error(i);
              if (c && e.constructor === ArrayBuffer) e = new Uint8Array(e);else if (!(Array.isArray(e) || c && ArrayBuffer.isView(e))) throw new Error(i);
              t = !0;
            }

            for (var n, a, s = this.blocks, o = this.byteCount, f = e.length, d = this.blockCount, u = 0, h = this.s; u < f;) {
              if (this.reset) for (this.reset = !1, s[0] = this.block, n = 1; n < d + 1; ++n) s[n] = 0;
              if (t) for (n = this.start; u < f && n < o; ++u) s[n >> 2] |= e[u] << l[3 & n++];else for (n = this.start; u < f && n < o; ++u) (a = e.charCodeAt(u)) < 128 ? s[n >> 2] |= a << l[3 & n++] : a < 2048 ? (s[n >> 2] |= (192 | a >> 6) << l[3 & n++], s[n >> 2] |= (128 | 63 & a) << l[3 & n++]) : a < 55296 || a >= 57344 ? (s[n >> 2] |= (224 | a >> 12) << l[3 & n++], s[n >> 2] |= (128 | a >> 6 & 63) << l[3 & n++], s[n >> 2] |= (128 | 63 & a) << l[3 & n++]) : (a = 65536 + ((1023 & a) << 10 | 1023 & e.charCodeAt(++u)), s[n >> 2] |= (240 | a >> 18) << l[3 & n++], s[n >> 2] |= (128 | a >> 12 & 63) << l[3 & n++], s[n >> 2] |= (128 | a >> 6 & 63) << l[3 & n++], s[n >> 2] |= (128 | 63 & a) << l[3 & n++]);

              if (this.lastByteIndex = n, n >= o) {
                for (this.start = n - o, this.block = s[d], n = 0; n < d; ++n) h[n] ^= s[n];

                H(h), this.reset = !0;
              } else this.start = n;
            }

            return this;
          }, R.prototype.encode = function (e, t) {
            var r = 255 & e,
                n = 1,
                i = [r];

            for (r = 255 & (e >>= 8); r > 0;) i.unshift(r), r = 255 & (e >>= 8), ++n;

            return t ? i.push(n) : i.unshift(n), this.update(i), i.length;
          }, R.prototype.encodeString = function (e) {
            var t,
                r = typeof e;

            if ("string" !== r) {
              if ("object" !== r) throw new Error(i);
              if (null === e) throw new Error(i);
              if (c && e.constructor === ArrayBuffer) e = new Uint8Array(e);else if (!(Array.isArray(e) || c && ArrayBuffer.isView(e))) throw new Error(i);
              t = !0;
            }

            var n = 0,
                a = e.length;
            if (t) n = a;else for (var s = 0; s < e.length; ++s) {
              var o = e.charCodeAt(s);
              o < 128 ? n += 1 : o < 2048 ? n += 2 : o < 55296 || o >= 57344 ? n += 3 : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++s)), n += 4);
            }
            return n += this.encode(8 * n), this.update(e), n;
          }, R.prototype.bytepad = function (e, t) {
            for (var r = this.encode(t), n = 0; n < e.length; ++n) r += this.encodeString(e[n]);

            var i = t - r % t,
                a = [];
            return a.length = i, this.update(a), this;
          }, R.prototype.finalize = function () {
            if (!this.finalized) {
              this.finalized = !0;
              var e = this.blocks,
                  t = this.lastByteIndex,
                  r = this.blockCount,
                  n = this.s;
              if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount) for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0;

              for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];

              H(n);
            }
          }, R.prototype.toString = R.prototype.hex = function () {
            this.finalize();

            for (var e, t = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, a = 0, s = 0, o = ""; s < n;) {
              for (a = 0; a < t && s < n; ++a, ++s) e = r[a], o += u[e >> 4 & 15] + u[15 & e] + u[e >> 12 & 15] + u[e >> 8 & 15] + u[e >> 20 & 15] + u[e >> 16 & 15] + u[e >> 28 & 15] + u[e >> 24 & 15];

              s % t == 0 && (H(r), a = 0);
            }

            return i && (e = r[a], o += u[e >> 4 & 15] + u[15 & e], i > 1 && (o += u[e >> 12 & 15] + u[e >> 8 & 15]), i > 2 && (o += u[e >> 20 & 15] + u[e >> 16 & 15])), o;
          }, R.prototype.arrayBuffer = function () {
            this.finalize();
            var e,
                t = this.blockCount,
                r = this.s,
                n = this.outputBlocks,
                i = this.extraBytes,
                a = 0,
                s = 0,
                o = this.outputBits >> 3;
            e = i ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(o);

            for (var f = new Uint32Array(e); s < n;) {
              for (a = 0; a < t && s < n; ++a, ++s) f[s] = r[a];

              s % t == 0 && H(r);
            }

            return i && (f[a] = r[a], e = e.slice(0, o)), e;
          }, R.prototype.buffer = R.prototype.arrayBuffer, R.prototype.digest = R.prototype.array = function () {
            this.finalize();

            for (var e, t, r = this.blockCount, n = this.s, i = this.outputBlocks, a = this.extraBytes, s = 0, o = 0, f = []; o < i;) {
              for (s = 0; s < r && o < i; ++s, ++o) e = o << 2, t = n[s], f[e] = 255 & t, f[e + 1] = t >> 8 & 255, f[e + 2] = t >> 16 & 255, f[e + 3] = t >> 24 & 255;

              o % r == 0 && H(n);
            }

            return a && (e = o << 2, t = n[s], f[e] = 255 & t, a > 1 && (f[e + 1] = t >> 8 & 255), a > 2 && (f[e + 2] = t >> 16 & 255)), f;
          }, N.prototype = new R(), N.prototype.finalize = function () {
            return this.encode(this.outputBits, !0), R.prototype.finalize.call(this);
          };

          var H = function (e) {
            var t, r, n, i, a, s, o, f, d, c, u, h, l, b, m, y, g, v, w, M, A, _, S, E, x, T, P, k, I, B, j, O, R, N, H, C, z, D, q, L, F, U, $, X, G, W, J, V, Y, Z, K, Q, ee, te, re, ne, ie, ae, se, oe, fe, de, ce;

            for (n = 0; n < 48; n += 2) i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], a = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], o = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], f = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], d = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], c = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], u = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (s << 1 | o >>> 31), r = (l = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (o << 1 | s >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = i ^ (f << 1 | d >>> 31), r = a ^ (d << 1 | f >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = s ^ (c << 1 | u >>> 31), r = o ^ (u << 1 | c >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = f ^ (h << 1 | l >>> 31), r = d ^ (l << 1 | h >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = c ^ (i << 1 | a >>> 31), r = u ^ (a << 1 | i >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, b = e[0], m = e[1], W = e[11] << 4 | e[10] >>> 28, J = e[10] << 4 | e[11] >>> 28, k = e[20] << 3 | e[21] >>> 29, I = e[21] << 3 | e[20] >>> 29, oe = e[31] << 9 | e[30] >>> 23, fe = e[30] << 9 | e[31] >>> 23, U = e[40] << 18 | e[41] >>> 14, $ = e[41] << 18 | e[40] >>> 14, N = e[2] << 1 | e[3] >>> 31, H = e[3] << 1 | e[2] >>> 31, y = e[13] << 12 | e[12] >>> 20, g = e[12] << 12 | e[13] >>> 20, V = e[22] << 10 | e[23] >>> 22, Y = e[23] << 10 | e[22] >>> 22, B = e[33] << 13 | e[32] >>> 19, j = e[32] << 13 | e[33] >>> 19, de = e[42] << 2 | e[43] >>> 30, ce = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, re = e[4] << 30 | e[5] >>> 2, C = e[14] << 6 | e[15] >>> 26, z = e[15] << 6 | e[14] >>> 26, v = e[25] << 11 | e[24] >>> 21, w = e[24] << 11 | e[25] >>> 21, Z = e[34] << 15 | e[35] >>> 17, K = e[35] << 15 | e[34] >>> 17, O = e[45] << 29 | e[44] >>> 3, R = e[44] << 29 | e[45] >>> 3, E = e[6] << 28 | e[7] >>> 4, x = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, ie = e[16] << 23 | e[17] >>> 9, D = e[26] << 25 | e[27] >>> 7, q = e[27] << 25 | e[26] >>> 7, M = e[36] << 21 | e[37] >>> 11, A = e[37] << 21 | e[36] >>> 11, Q = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, X = e[8] << 27 | e[9] >>> 5, G = e[9] << 27 | e[8] >>> 5, T = e[18] << 20 | e[19] >>> 12, P = e[19] << 20 | e[18] >>> 12, ae = e[29] << 7 | e[28] >>> 25, se = e[28] << 7 | e[29] >>> 25, L = e[38] << 8 | e[39] >>> 24, F = e[39] << 8 | e[38] >>> 24, _ = e[48] << 14 | e[49] >>> 18, S = e[49] << 14 | e[48] >>> 18, e[0] = b ^ ~y & v, e[1] = m ^ ~g & w, e[10] = E ^ ~T & k, e[11] = x ^ ~P & I, e[20] = N ^ ~C & D, e[21] = H ^ ~z & q, e[30] = X ^ ~W & V, e[31] = G ^ ~J & Y, e[40] = te ^ ~ne & ae, e[41] = re ^ ~ie & se, e[2] = y ^ ~v & M, e[3] = g ^ ~w & A, e[12] = T ^ ~k & B, e[13] = P ^ ~I & j, e[22] = C ^ ~D & L, e[23] = z ^ ~q & F, e[32] = W ^ ~V & Z, e[33] = J ^ ~Y & K, e[42] = ne ^ ~ae & oe, e[43] = ie ^ ~se & fe, e[4] = v ^ ~M & _, e[5] = w ^ ~A & S, e[14] = k ^ ~B & O, e[15] = I ^ ~j & R, e[24] = D ^ ~L & U, e[25] = q ^ ~F & $, e[34] = V ^ ~Z & Q, e[35] = Y ^ ~K & ee, e[44] = ae ^ ~oe & de, e[45] = se ^ ~fe & ce, e[6] = M ^ ~_ & b, e[7] = A ^ ~S & m, e[16] = B ^ ~O & E, e[17] = j ^ ~R & x, e[26] = L ^ ~U & N, e[27] = F ^ ~$ & H, e[36] = Z ^ ~Q & X, e[37] = K ^ ~ee & G, e[46] = oe ^ ~de & te, e[47] = fe ^ ~ce & re, e[8] = _ ^ ~b & y, e[9] = S ^ ~m & g, e[18] = O ^ ~E & T, e[19] = R ^ ~x & P, e[28] = U ^ ~N & C, e[29] = $ ^ ~H & z, e[38] = Q ^ ~X & W, e[39] = ee ^ ~G & J, e[48] = de ^ ~te & ne, e[49] = ce ^ ~re & ie, e[0] ^= p[n], e[1] ^= p[n + 1];
          };

          if (f) e.exports = x;else {
            for (P = 0; P < T.length; ++P) s[T[P]] = x[T[P]];

            d && (void 0 === (n = function () {
              return x;
            }.call(t, r, t, e)) || (e.exports = n));
          }
        }();
      },
      6794: e => {
        function t(e, t) {
          if (!e) throw new Error(t || "Assertion failed");
        }

        e.exports = t, t.equal = function (e, t, r) {
          if (e != t) throw new Error(r || "Assertion failed: " + e + " != " + t);
        };
      },
      7705: (e, t) => {
        "use strict";

        var r = t;

        function n(e) {
          return 1 === e.length ? "0" + e : e;
        }

        function i(e) {
          for (var t = "", r = 0; r < e.length; r++) t += n(e[r].toString(16));

          return t;
        }

        r.toArray = function (e, t) {
          if (Array.isArray(e)) return e.slice();
          if (!e) return [];
          var r = [];

          if ("string" != typeof e) {
            for (var n = 0; n < e.length; n++) r[n] = 0 | e[n];

            return r;
          }

          if ("hex" === t) {
            (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e);

            for (n = 0; n < e.length; n += 2) r.push(parseInt(e[n] + e[n + 1], 16));
          } else for (n = 0; n < e.length; n++) {
            var i = e.charCodeAt(n),
                a = i >> 8,
                s = 255 & i;
            a ? r.push(a, s) : r.push(s);
          }

          return r;
        }, r.zero2 = n, r.toHex = i, r.encode = function (e, t) {
          return "hex" === t ? i(e) : e;
        };
      },
      116: (e, t, r) => {
        !function () {
          "use strict";

          var t,
              n = r(7096);
          t = [{
            field: "fileName",
            length: 100
          }, {
            field: "fileMode",
            length: 8
          }, {
            field: "uid",
            length: 8
          }, {
            field: "gid",
            length: 8
          }, {
            field: "fileSize",
            length: 12
          }, {
            field: "mtime",
            length: 12
          }, {
            field: "checksum",
            length: 8
          }, {
            field: "type",
            length: 1
          }, {
            field: "linkName",
            length: 100
          }, {
            field: "ustar",
            length: 8
          }, {
            field: "owner",
            length: 32
          }, {
            field: "group",
            length: 32
          }, {
            field: "majorNumber",
            length: 8
          }, {
            field: "minorNumber",
            length: 8
          }, {
            field: "filenamePrefix",
            length: 155
          }, {
            field: "padding",
            length: 12
          }], e.exports.structure = t, e.exports.format = function (e, r) {
            var i = n.clean(512),
                a = 0;
            return t.forEach(function (t) {
              var r,
                  n,
                  s = e[t.field] || "";

              for (r = 0, n = s.length; r < n; r += 1) i[a] = s.charCodeAt(r), a += 1;

              a += t.length - r;
            }), "function" == typeof r ? r(i, a) : i;
          };
        }();
      },
      1117: (e, t, r) => {
        !function () {
          "use strict";

          var t,
              n = r(116),
              i = r(7096),
              a = 512;

          function s(e) {
            this.written = 0, t = (e || 20) * a, this.out = i.clean(t);
          }

          s.prototype.append = function (e, r, s, o) {
            var f, d, c, u, h, l, p;
            if ("string" == typeof r) r = i.stringToUint8(r);else if (r.constructor !== Uint8Array.prototype.constructor) throw "Invalid input type. You gave me: " + r.constructor.toString().match(/function\s*([$A-Za-z_][0-9A-Za-z_]*)\s*\(/)[1];
            return "function" == typeof s && (o = s, s = {}), c = (s = s || {}).mode || 4095 & parseInt("777", 8), u = s.mtime || Math.floor(+new Date() / 1e3), h = s.uid || 0, l = s.gid || 0, f = {
              fileName: e,
              fileMode: i.pad(c, 7),
              uid: i.pad(h, 7),
              gid: i.pad(l, 7),
              fileSize: i.pad(r.length, 11),
              mtime: i.pad(u, 11),
              checksum: "        ",
              type: "0",
              ustar: "ustar  ",
              owner: s.owner || "",
              group: s.group || ""
            }, d = 0, Object.keys(f).forEach(function (e) {
              var t,
                  r,
                  n = f[e];

              for (t = 0, r = n.length; t < r; t += 1) d += n.charCodeAt(t);
            }), f.checksum = i.pad(d, 6) + "\0 ", p = n.format(f), this.out.set(p, this.written), this.written += p.length, this.written + r.length > this.out.length && (this.out = i.extend(this.out, this.written, r.length, t)), this.out.set(r, this.written), this.written += r.length + (a - (r.length % a || a)), this.out.length - this.written < 1024 && (this.out = i.extend(this.out, this.written, 1024, t)), "function" == typeof o && o(this.out), this.out;
          }, s.prototype.clear = function () {
            this.written = 0, this.out = i.clean(t);
          }, s.utils = i, s.stringToUint8 = i.stringToUint8, s.uint8ToBase64 = i.uint8ToBase64, s.base64ToUint8 = i.base64ToUint8, e.exports = s;
        }();
      },
      7096: e => {
        !function () {
          "use strict";

          var t = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"];

          function r(e) {
            var t,
                r = new Uint8Array(e);

            for (t = 0; t < e; t += 1) r[t] = 0;

            return r;
          }

          e.exports.clean = r, e.exports.pad = function (e, t, r) {
            return e = e.toString(r || 8), "000000000000".substr(e.length + 12 - t) + e;
          }, e.exports.extend = function (e, t, n, i) {
            var a = r((parseInt((t + n) / i) + 1) * i);
            return a.set(e), a;
          }, e.exports.stringToUint8 = function (e, t, n) {
            var i, a;

            for (t = t || r(e.length), n = n || 0, i = 0, a = e.length; i < a; i += 1) t[n] = e.charCodeAt(i), n += 1;

            return t;
          }, e.exports.uint8ToBase64 = function (e) {
            var r,
                n,
                i,
                a,
                s = e.length % 3,
                o = "";

            for (r = 0, i = e.length - s; r < i; r += 3) n = (e[r] << 16) + (e[r + 1] << 8) + e[r + 2], o += t[(a = n) >> 18 & 63] + t[a >> 12 & 63] + t[a >> 6 & 63] + t[63 & a];

            switch (o.length % 4) {
              case 1:
                o += "=";
                break;

              case 2:
                o += "==";
            }

            return o;
          }, e.exports.base64ToUint8 = function (e) {
            for (var n, i = e.match(/^([^=]+)/)[1], a = e.match(/(=*)$/)[1].length, s = 0, o = i.length, f = 0, d = r(.75 * i.length + a); s < o;) n = 0, n |= t.indexOf(i.charAt(s) || "A") << 18, s += 1, n |= t.indexOf(i.charAt(s) || "A") << 12, s += 1, n |= t.indexOf(i.charAt(s) || "A") << 6, s += 1, n |= t.indexOf(i.charAt(s) || "A"), s += 1, d[f] = n >> 16 & 255, d[f += 1] = n >> 8 & 255, d[f += 1] = 255 & n, f += 1;

            return d;
          };
        }();
      },
      6457: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.BeeDebug = void 0;
        var n = y(r(4369)),
            i = y(r(4995)),
            a = y(r(5689)),
            s = y(r(4955)),
            o = y(r(2038)),
            f = y(r(614)),
            d = y(r(569)),
            c = r(9470),
            u = r(1376),
            h = r(3792),
            l = r(1713),
            p = y(r(6344)),
            b = y(r(7894));

        function m(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
              r = new WeakMap();
          return (m = function (e) {
            return e ? r : t;
          })(e);
        }

        function y(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var r = m(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var a in e) if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
            var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
            s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a];
          }

          return n.default = e, r && r.set(e, n), n;
        }

        t.BeeDebug = class {
          constructor(e) {
            var t, r, n;
            n = void 0, (r = "url") in (t = this) ? Object.defineProperty(t, r, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : t[r] = n, (0, u.assertBeeUrl)(e), this.url = (0, u.stripLastSlash)(e);
          }

          async getNodeAddresses() {
            return n.getNodeAddresses(this.url);
          }

          async getBlocklist() {
            return n.getBlocklist(this.url);
          }

          async retrieveExtendedTag(e) {
            if ((0, h.isTag)(e)) e = e.uid;else {
              if ("number" != typeof e) throw new TypeError("tagUid has to be either Tag or a number (UID)!");
              (0, h.assertNonNegativeInteger)(e, "UID");
            }
            return p.retrieveExtendedTag(this.url, e);
          }

          async getPeers() {
            return n.getPeers(this.url);
          }

          async removePeer(e) {
            return (0, h.assertAddress)(e), n.removePeer(this.url, e);
          }

          async getTopology() {
            return n.getTopology(this.url);
          }

          async pingPeer(e) {
            return (0, h.assertAddress)(e), n.pingPeer(this.url, e);
          }

          async getAllBalances() {
            return i.getAllBalances(this.url);
          }

          async getPeerBalance(e) {
            return (0, h.assertAddress)(e), i.getPeerBalance(this.url, e);
          }

          async getPastDueConsumptionBalances() {
            return i.getPastDueConsumptionBalances(this.url);
          }

          async getPastDueConsumptionPeerBalance(e) {
            return (0, h.assertAddress)(e), i.getPastDueConsumptionPeerBalance(this.url, e);
          }

          async getChequebookAddress() {
            return a.getChequebookAddress(this.url);
          }

          async getChequebookBalance() {
            return a.getChequebookBalance(this.url);
          }

          async getLastCheques() {
            return a.getLastCheques(this.url);
          }

          async getLastChequesForPeer(e) {
            return (0, h.assertAddress)(e), a.getLastChequesForPeer(this.url, e);
          }

          async getLastCashoutAction(e) {
            return (0, h.assertAddress)(e), a.getLastCashoutAction(this.url, e);
          }

          async cashoutLastCheque(e, t) {
            return (0, h.assertAddress)(e), null != t && t.gasLimit && (0, h.assertNonNegativeInteger)(t.gasLimit), null != t && t.gasPrice && (0, h.assertNonNegativeInteger)(t.gasPrice), a.cashoutLastCheque(this.url, e, t);
          }

          async depositTokens(e, t) {
            return (0, h.assertNonNegativeInteger)(e), t && (0, h.assertNonNegativeInteger)(t), a.depositTokens(this.url, e, t);
          }

          async withdrawTokens(e, t) {
            return (0, h.assertNonNegativeInteger)(e), t && (0, h.assertNonNegativeInteger)(t), a.withdrawTokens(this.url, e, t);
          }

          async getSettlements(e) {
            return (0, h.assertAddress)(e), s.getSettlements(this.url, e);
          }

          async getAllSettlements() {
            return s.getAllSettlements(this.url);
          }

          async getHealth() {
            return o.getHealth(this.url);
          }

          async isSupportedVersion() {
            return o.isSupportedVersion(this.url);
          }

          async getReserveState() {
            return d.getReserveState(this.url);
          }

          async getChainState() {
            return d.getChainState(this.url);
          }

          async createPostageBatch(e, t, r) {
            if ((0, h.assertNonNegativeInteger)(e), (0, h.assertNonNegativeInteger)(t), t < l.STAMPS_DEPTH_MIN) throw new c.BeeArgumentError(`Depth has to be at least ${l.STAMPS_DEPTH_MIN}`, t);
            if (t > l.STAMPS_DEPTH_MAX) throw new c.BeeArgumentError(`Depth has to be at most ${l.STAMPS_DEPTH_MAX}`, t);
            return null != r && r.gasPrice && (0, h.assertNonNegativeInteger)(r.gasPrice), void 0 !== (null == r ? void 0 : r.immutableFlag) && (0, h.assertBoolean)(r.immutableFlag), b.createPostageBatch(this.url, e, t, r);
          }

          async getPostageBatch(e) {
            return (0, h.assertBatchId)(e), b.getPostageBatch(this.url, e);
          }

          async getPostageBatchBuckets(e) {
            return (0, h.assertBatchId)(e), b.getPostageBatchBuckets(this.url, e);
          }

          async getAllPostageBatch() {
            return b.getAllPostageBatches(this.url);
          }

          async getAllPendingTransactions() {
            return f.getAllTransactions(this.url);
          }

          async getPendingTransaction(e) {
            return (0, h.assertTransactionHash)(e), f.getTransaction(this.url, e);
          }

          async rebroadcastPendingTransaction(e) {
            return (0, h.assertTransactionHash)(e), f.rebroadcastTransaction(this.url, e);
          }

          async cancelPendingTransaction(e, t) {
            return (0, h.assertTransactionHash)(e), t && (0, h.assertNonNegativeInteger)(t), f.cancelTransaction(this.url, e, t);
          }

        };
      },
      3604: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.Bee = void 0;

        var n = P(r(9068)),
            i = P(r(3920)),
            a = P(r(8211)),
            s = P(r(7922)),
            o = P(r(5660)),
            f = P(r(148)),
            d = P(r(9364)),
            c = P(r(9423)),
            u = r(9470),
            h = r(4161),
            l = r(2607),
            p = r(5897),
            b = r(4466),
            m = r(3259),
            y = r(4302),
            g = r(6894),
            v = r(8873),
            w = r(1376),
            M = r(264),
            A = r(1834),
            _ = r(3792),
            S = r(1120),
            E = r(6688),
            x = r(1713);

        function T(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
              r = new WeakMap();
          return (T = function (e) {
            return e ? r : t;
          })(e);
        }

        function P(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var r = T(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var a in e) if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
            var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
            s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a];
          }

          return n.default = e, r && r.set(e, n), n;
        }

        function k(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r, e;
        }

        t.Bee = class {
          constructor(e, t) {
            k(this, "url", void 0), k(this, "signer", void 0), (0, w.assertBeeUrl)(e), this.url = (0, w.stripLastSlash)(e), null != t && t.signer && (this.signer = (0, b.makeSigner)(t.signer));
          }

          async uploadData(e, t, r) {
            return (0, _.assertBatchId)(e), (0, _.assertData)(t), r && (0, _.assertUploadOptions)(r), o.upload(this.url, t, e, r);
          }

          async downloadData(e) {
            return (0, _.assertReference)(e), o.download(this.url, e);
          }

          async downloadReadableData(e, t) {
            return (0, _.assertReference)(e), o.downloadReadable(this.url, e, t);
          }

          async uploadFile(e, t, r, i) {
            if ((0, _.assertBatchId)(e), (0, _.assertFileData)(t), i && (0, _.assertFileUploadOptions)(i), r && "string" != typeof r) throw new TypeError("name has to be string or undefined!");

            if ((0, l.isFile)(t)) {
              const a = await (0, l.fileArrayBuffer)(t),
                    s = null != r ? r : t.name,
                    o = {
                contentType: t.type,
                ...i
              };
              return n.uploadFile(this.url, a, e, s, o);
            }

            if ((0, _.isReadable)(t) && null != i && i.tag && !i.size) {
              const a = await n.uploadFile(this.url, t, e, r, i);
              return await this.updateTag(i.tag, a), a;
            }

            return n.uploadFile(this.url, t, e, r, i);
          }

          async downloadFile(e, t = "") {
            return (0, _.assertReference)(e), n.downloadFile(this.url, e, t);
          }

          async downloadReadableFile(e, t = "") {
            return (0, _.assertReference)(e), n.downloadFileReadable(this.url, e, t);
          }

          async uploadFiles(e, t, r) {
            (0, _.assertBatchId)(e), r && (0, _.assertCollectionUploadOptions)(r);
            const i = await (0, E.makeCollectionFromFileList)(t);
            return n.uploadCollection(this.url, i, e, r);
          }

          async uploadFilesFromDirectory(e, t, r) {
            (0, _.assertBatchId)(e), r && (0, _.assertCollectionUploadOptions)(r);
            const i = await (0, E.makeCollectionFromFS)(t);
            return n.uploadCollection(this.url, i, e, r);
          }

          async createTag() {
            return a.createTag(this.url);
          }

          async getAllTags(e) {
            return (0, _.assertAllTagsOptions)(e), a.getAllTags(this.url, null == e ? void 0 : e.offset, null == e ? void 0 : e.limit);
          }

          async retrieveTag(e) {
            return e = (0, _.makeTagUid)(e), a.retrieveTag(this.url, e);
          }

          async deleteTag(e) {
            return e = (0, _.makeTagUid)(e), a.deleteTag(this.url, e);
          }

          async updateTag(e, t) {
            return (0, _.assertReference)(t), e = (0, _.makeTagUid)(e), a.updateTag(this.url, e, t);
          }

          async pin(e) {
            return (0, _.assertReference)(e), s.pin(this.url, e);
          }

          async unpin(e) {
            return (0, _.assertReference)(e), s.unpin(this.url, e);
          }

          async getAllPins() {
            return s.getAllPins(this.url);
          }

          async getPin(e) {
            return (0, _.assertReference)(e), s.getPin(this.url, e);
          }

          async reuploadPinnedData(e, t) {
            (0, _.assertReference)(e);

            try {
              await this.getPin(e);
            } catch (r) {
              if (404 === r.status) throw new u.BeeArgumentError("The passed reference is not locally pinned!", e);
            }

            await i.reupload(this.url, e, t);
          }

          async pssSend(e, t, r, n, i) {
            if ((0, _.assertData)(n), (0, _.assertBatchId)(e), (0, _.assertAddressPrefix)(r), "string" != typeof t) throw new TypeError("topic has to be an string!");
            return i ? ((0, _.assertPublicKey)(i), f.send(this.url, t, r, n, e, i)) : f.send(this.url, t, r, n, e);
          }

          pssSubscribe(e, t) {
            if ((0, _.assertPssMessageHandler)(t), "string" != typeof e) throw new TypeError("topic has to be an string!");
            const r = f.subscribe(this.url, e);
            let n = !1;
            const i = {
              topic: e,
              cancel: () => {
                !1 === n && (n = !0, r.terminate ? r.terminate() : r.close());
              }
            };
            return r.onmessage = async e => {
              const r = await (0, h.prepareWebsocketData)(e.data);
              r.length > 0 && t.onMessage((0, A.wrapBytesWithHelpers)(r), i);
            }, r.onerror = e => {
              n || t.onError(new u.BeeError(e.message), i);
            }, i;
          }

          async pssReceive(e, t = 0) {
            if ("string" != typeof e) throw new TypeError("topic has to be an string!");
            if ("number" != typeof t) throw new TypeError("timeoutMsc parameter has to be a number!");
            return new Promise((r, n) => {
              let i;
              const a = this.pssSubscribe(e, {
                onError: e => {
                  clearTimeout(i), a.cancel(), n(e.message);
                },
                onMessage: e => {
                  clearTimeout(i), a.cancel(), r(e);
                }
              });
              t > 0 && (i = setTimeout(() => {
                a.cancel(), n(new u.BeeError("pssReceive timeout"));
              }, t));
            });
          }

          async createFeedManifest(e, t, r, n) {
            (0, m.assertFeedType)(t), (0, _.assertBatchId)(e);
            const i = (0, g.makeTopic)(r),
                  a = (0, M.makeHexEthAddress)(n);
            return (0, v.createFeedManifest)(this.url, a, i, e, {
              type: t
            });
          }

          makeFeedReader(e, t, r) {
            (0, m.assertFeedType)(e);
            const n = (0, g.makeTopic)(t),
                  i = (0, M.makeHexEthAddress)(r);
            return (0, p.makeFeedReader)(this.url, e, n, i);
          }

          makeFeedWriter(e, t, r) {
            (0, m.assertFeedType)(e);
            const n = (0, g.makeTopic)(t),
                  i = this.resolveSigner(r);
            return (0, p.makeFeedWriter)(this.url, e, n, i);
          }

          async setJsonFeed(e, t, r, n) {
            var i;
            (0, _.assertBatchId)(e);
            const a = this.makeFeedTopic(t),
                  s = null !== (i = null == n ? void 0 : n.type) && void 0 !== i ? i : m.DEFAULT_FEED_TYPE,
                  o = this.makeFeedWriter(s, a, null == n ? void 0 : n.signer);
            return (0, S.setJsonData)(this, o, e, r);
          }

          async getJsonFeed(e, t) {
            var r;
            const n = this.makeFeedTopic(e),
                  i = null !== (r = null == t ? void 0 : t.type) && void 0 !== r ? r : m.DEFAULT_FEED_TYPE;
            if (null != t && t.signer && null != t && t.address) throw new u.BeeError('Both options "signer" and "address" can not be specified at one time!');
            let a;
            if (null != t && t.address) a = (0, M.makeEthAddress)(null == t ? void 0 : t.address);else try {
              a = this.resolveSigner(null == t ? void 0 : t.signer).address;
            } catch (o) {
              throw o instanceof u.BeeError ? new u.BeeError("Either address, signer or default signer has to be specified!") : o;
            }
            const s = this.makeFeedReader(i, n, a);
            return (0, S.getJsonData)(this, s);
          }

          makeFeedTopic(e) {
            return (0, g.makeTopicFromString)(e);
          }

          makeSOCReader(e) {
            const t = (0, M.makeEthAddress)(e);
            return {
              download: y.downloadSingleOwnerChunk.bind(null, this.url, t)
            };
          }

          makeSOCWriter(e) {
            const t = this.resolveSigner(e);
            return { ...this.makeSOCReader(t.address),
              upload: y.uploadSingleOwnerChunkData.bind(null, this.url, t)
            };
          }

          async createPostageBatch(e, t, r) {
            if ((0, _.assertNonNegativeInteger)(e), (0, _.assertNonNegativeInteger)(t), t < x.STAMPS_DEPTH_MIN) throw new u.BeeArgumentError(`Depth has to be at least ${x.STAMPS_DEPTH_MIN}`, t);
            if (t > x.STAMPS_DEPTH_MAX) throw new u.BeeArgumentError(`Depth has to be at most ${x.STAMPS_DEPTH_MAX}`, t);
            return null != r && r.gasPrice && (0, _.assertNonNegativeInteger)(r.gasPrice), void 0 !== (null == r ? void 0 : r.immutableFlag) && (0, _.assertBoolean)(r.immutableFlag), c.createPostageBatch(this.url, e, t, r);
          }

          async getPostageBatch(e) {
            return (0, _.assertBatchId)(e), c.getPostageBatch(this.url, e);
          }

          async getAllPostageBatch() {
            return c.getAllPostageBatches(this.url);
          }

          async checkConnection() {
            return d.checkConnection(this.url);
          }

          async isConnected() {
            try {
              await d.checkConnection(this.url);
            } catch (e) {
              return !1;
            }

            return !0;
          }

          resolveSigner(e) {
            if (e) return (0, b.makeSigner)(e);
            if (this.signer) return this.signer;
            throw new u.BeeError("You have to pass Signer as property to either the method call or constructor! Non found.");
          }

        };
      },
      4003: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.bmtHash = function (e) {
          const t = e.slice(0, 8),
                r = function (e) {
            if (e.length > s) throw new i.BeeArgumentError("invalid data length", e);
            let t = new Uint8Array([...e, ...new Uint8Array(s - e.length)]);

            for (; 32 !== t.length;) {
              const e = new Uint8Array(t.length / 2);

              for (let r = 0; r < t.length; r += 64) {
                const i = n.keccak256.array(t.slice(r, r + 64));
                e.set(i, r / 2);
              }

              t = e;
            }

            return t;
          }(e.slice(8)),
                o = new Uint8Array([...t, ...r]);

          return (0, a.keccak256Hash)(o);
        };
        var n = r(8086),
            i = r(9470),
            a = r(9769);
        const s = 4096;
      },
      6969: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.makeContentAddressedChunk = function (e) {
          const t = (0, o.makeSpan)(e.length);
          (0, a.assertFlexBytes)(e, 1, f);
          const r = (0, s.serializeBytes)(t, e);
          return {
            data: r,
            span: () => t,
            payload: () => (0, a.flexBytesAtOffset)(r, d, 1, f),
            address: () => (0, i.bmtHash)(r)
          };
        }, t.isValidChunkData = c, t.assertValidChunkData = function (e, t) {
          if (!c(e, t)) throw new n.BeeError("Address of content address chunk does not match given data!");
        }, t.MAX_PAYLOAD_SIZE = t.MIN_PAYLOAD_SIZE = void 0;
        var n = r(9470),
            i = r(4003),
            a = r(1834),
            s = r(6695),
            o = r(1933);
        t.MIN_PAYLOAD_SIZE = 1;
        const f = 4096;
        t.MAX_PAYLOAD_SIZE = f;
        const d = 0 + o.SPAN_SIZE;

        function c(e, t) {
          if (!(e instanceof Uint8Array)) return !1;
          const r = (0, i.bmtHash)(e);
          return (0, a.bytesEqual)(r, t);
        }
      },
      6695: (e, t) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.serializeBytes = function (...e) {
          const t = e.reduce((e, t) => e + t.length, 0),
                r = new Uint8Array(t);
          let n = 0;
          return e.forEach(e => {
            r.set(e, n), n += e.length;
          }), r;
        };
      },
      4466: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.defaultSign = u, t.recoverAddress = function (e, t) {
          const r = new n.ec("secp256k1"),
                i = {
            r: e.slice(0, 32),
            s: e.slice(32, 64)
          },
                a = e[64] - 27,
                s = c(t);
          return h(r.recoverPubKey(s, i, a));
        }, t.makePrivateKeySigner = l, t.assertSigner = p, t.makeSigner = function (e) {
          if ("string" == typeof e) {
            const t = (0, o.makeHexString)(e, 64);
            return l((0, o.hexToBytes)(t));
          }

          if (e instanceof Uint8Array) return (0, a.assertBytes)(e, 32), l(e);
          return p(e), e;
        }, t.sign = async function (e, t) {
          const r = await e.sign((0, a.wrapBytesWithHelpers)(t));

          if ("string" == typeof r) {
            const e = (0, o.makeHexString)(r, f.SIGNATURE_HEX_LENGTH);
            return (0, o.hexToBytes)(e);
          }

          if (r instanceof Uint8Array) return (0, a.assertBytes)(r, f.SIGNATURE_BYTES_LENGTH), r;
          throw new TypeError("Invalid output of sign function!");
        };
        var n = r(236),
            i = r(9470),
            a = r(1834),
            s = r(9769),
            o = r(7151),
            f = r(1713),
            d = r(3792);

        function c(e) {
          const t = `Ethereum Signed Message:\n${e.length}`,
                r = new TextEncoder().encode(t);
          return (0, s.keccak256Hash)(r, e);
        }

        function u(e, t) {
          const r = new n.ec("secp256k1"),
                a = r.keyFromPrivate(t),
                s = c(e),
                o = r.sign(s, a, {
            canonical: !0,
            pers: void 0
          });
          if (null === o.recoveryParam) throw new i.BeeError("signDigest recovery param was null");
          return new Uint8Array([...o.r.toArray("be", 32), ...o.s.toArray("be", 32), o.recoveryParam + 27]);
        }

        function h(e) {
          const t = e.encode("array", !1);
          return (0, s.keccak256Hash)(t.slice(1)).slice(12);
        }

        function l(e) {
          return {
            sign: t => u(t, e),
            address: h(new n.ec("secp256k1").keyFromPrivate(e).getPublic())
          };
        }

        function p(e) {
          if (!(0, d.isStrictlyObject)(e)) throw new TypeError("Signer must be an object!");
          const t = e;
          if (!(0, a.isBytes)(t.address, 20)) throw new TypeError("Signer's address must be Uint8Array with 20 bytes!");
          if ("function" != typeof t.sign) throw new TypeError("Signer sign property needs to be function!");
        }
      },
      4302: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.makeSingleOwnerChunkFromData = g, t.makeSOCAddress = v, t.makeSingleOwnerChunk = w, t.uploadSingleOwnerChunk = M, t.uploadSingleOwnerChunkData = async function (e, t, r, n, i, a) {
          (0, p.assertAddress)(r);
          const s = (0, c.makeContentAddressedChunk)(i),
                o = await w(s, n, t);
          return M(e, o, r, a);
        }, t.downloadSingleOwnerChunk = async function (e, t, r) {
          const n = v(r, t);
          return g(await l.download(e, (0, u.bytesToHex)(n)), n);
        };
        var n = r(1834),
            i = r(4003),
            a = r(4466),
            s = r(9769),
            o = r(1933),
            f = r(6695),
            d = r(9470),
            c = r(6969),
            u = r(7151),
            h = m(r(6866)),
            l = m(r(3521)),
            p = r(3792);

        function b(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
              r = new WeakMap();
          return (b = function (e) {
            return e ? r : t;
          })(e);
        }

        function m(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var r = b(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var a in e) if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
            var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
            s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a];
          }

          return n.default = e, r && r.set(e, n), n;
        }

        const y = 97 + o.SPAN_SIZE;

        function g(e, t) {
          const r = function (e) {
            const t = e.slice(97),
                  r = (0, i.bmtHash)(t),
                  o = (0, n.bytesAtOffset)(e, 32, 65),
                  f = (0, n.bytesAtOffset)(e, 0, 32),
                  d = (0, s.keccak256Hash)(f, r);
            return (0, a.recoverAddress)(o, d);
          }(e),
                f = (0, n.bytesAtOffset)(e, 0, 32),
                u = (0, s.keccak256Hash)(f, r);

          if (!(0, n.bytesEqual)(t, u)) throw new d.BeeError("SOC Data does not match given address!");
          return {
            data: e,
            identifier: () => f,
            signature: () => (0, n.bytesAtOffset)(e, 32, 65),
            span: () => (0, n.bytesAtOffset)(e, 97, o.SPAN_SIZE),
            payload: () => (0, n.flexBytesAtOffset)(e, y, c.MIN_PAYLOAD_SIZE, c.MAX_PAYLOAD_SIZE),
            address: () => u,
            owner: () => r
          };
        }

        function v(e, t) {
          return (0, s.keccak256Hash)(e, t);
        }

        async function w(e, t, r) {
          const n = e.address();
          (0, c.assertValidChunkData)(e.data, n);
          const i = (0, s.keccak256Hash)(t, n),
                o = await (0, a.sign)(r, i),
                d = (0, f.serializeBytes)(t, o, e.span(), e.payload()),
                u = v(t, r.address);
          return {
            data: d,
            identifier: () => t,
            signature: () => o,
            span: () => e.span(),
            payload: () => e.payload(),
            address: () => u,
            owner: () => r.address
          };
        }

        async function M(e, t, r, n) {
          const i = (0, u.bytesToHex)(t.owner()),
                a = (0, u.bytesToHex)(t.identifier()),
                s = (0, u.bytesToHex)(t.signature()),
                o = (0, f.serializeBytes)(t.span(), t.payload());
          return h.upload(e, i, a, s, o, r, n);
        }
      },
      1933: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.makeSpan = function (e) {
          if (e <= 0) throw new n.BeeArgumentError("invalid length for span", e);
          if (e > 4294967295) throw new n.BeeArgumentError("invalid length (> MAX_SPAN_LENGTH)", e);
          const t = new Uint8Array(8),
                r = new DataView(t.buffer),
                i = 4294967295 & e;
          return r.setUint32(0, i, !0), t;
        }, t.SPAN_SIZE = void 0;
        var n = r(9470);
        t.SPAN_SIZE = 8;
      },
      5897: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.isEpoch = m, t.makeSequentialFeedIdentifier = g, t.makeFeedIndexBytes = v, t.makeFeedIdentifier = w, t.uploadFeedUpdate = M, t.findNextIndex = A, t.updateFeed = _, t.verifyChunkReference = E, t.downloadFeedUpdate = async function (e, t, r, i) {
          const s = w(r, i),
                o = (0, n.keccak256Hash)(s, t),
                d = (0, c.bytesToHex)(o),
                l = await h.download(e, d),
                p = (0, a.makeSingleOwnerChunkFromData)(l, o).payload(),
                b = (0, f.bytesAtOffset)(p, 0, 8),
                m = (0, u.readUint64BigEndian)(b),
                y = S(8, p);
          return {
            timestamp: m,
            reference: y
          };
        }, t.makeFeedReader = x, t.makeFeedWriter = function (e, t, r, n) {
          return { ...x(e, t, r, (0, l.makeHexEthAddress)(n.address)),
            upload: async (i, a, s) => {
              (0, p.assertAddress)(i);

              const f = function (e) {
                if ("string" == typeof e) try {
                  const t = (0, c.makeHexString)(e, o.REFERENCE_HEX_LENGTH);
                  return (0, c.hexToBytes)(t);
                } catch (t) {
                  if (!(t instanceof TypeError)) throw t;
                  const r = (0, c.makeHexString)(e, o.ENCRYPTED_REFERENCE_HEX_LENGTH);
                  return (0, c.hexToBytes)(r);
                } else if (e instanceof Uint8Array) return E(e);
                throw new TypeError("invalid chunk reference");
              }(a);

              return _(e, n, r, f, i, { ...s,
                type: t
              });
            }
          };
        };

        var n = r(9769),
            i = r(6695),
            a = r(4302),
            s = r(8873),
            o = r(1713),
            f = r(1834),
            d = r(9470),
            c = r(7151),
            u = r(7359),
            h = function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var r = b(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var a in e) if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
            var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
            s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a];
          }

          n.default = e, r && r.set(e, n);
          return n;
        }(r(3521)),
            l = r(264),
            p = r(3792);

        function b(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
              r = new WeakMap();
          return (b = function (e) {
            return e ? r : t;
          })(e);
        }

        function m(e) {
          return "object" == typeof e && null !== e && "time" in e && "level" in e;
        }

        function y(e, t) {
          return (0, n.keccak256Hash)((0, c.hexToBytes)(e), t);
        }

        function g(e, t) {
          return y(e, (0, u.writeUint64BigEndian)(t));
        }

        function v(e) {
          const t = (0, c.makeHexString)(e, 16);
          return (0, c.hexToBytes)(t);
        }

        function w(e, t) {
          if ("number" == typeof t) return g(e, t);

          if ("string" == typeof t) {
            return y(e, v(t));
          }

          if (m(t)) throw new TypeError("epoch is not yet implemented");
          return y(e, t);
        }

        async function M(e, t, r, n, s, o, f) {
          var d;
          const c = w(r, n),
                h = null !== (d = null == f ? void 0 : f.at) && void 0 !== d ? d : Date.now() / 1e3,
                l = (0, u.writeUint64BigEndian)(h),
                p = (0, i.serializeBytes)(l, s);
          return (0, a.uploadSingleOwnerChunkData)(e, t, o, c, p, f);
        }

        async function A(e, t, r, n) {
          try {
            const i = await (0, s.fetchFeedUpdate)(e, t, r, n);
            return (0, c.makeHexString)(i.feedIndexNext, 16);
          } catch (i) {
            if (i instanceof d.BeeResponseError && 404 === i.status) return (0, c.bytesToHex)((0, f.makeBytes)(8));
            throw i;
          }
        }

        async function _(e, t, r, n, i, a) {
          const s = (0, l.makeHexEthAddress)(t.address);
          return M(e, t, r, await A(e, s, r, a), n, i, a);
        }

        function S(e, t) {
          try {
            return (0, f.bytesAtOffset)(t, e, 64);
          } catch (r) {
            return (0, f.bytesAtOffset)(t, e, 32);
          }
        }

        function E(e) {
          return S(0, e);
        }

        function x(e, t, r, n) {
          return {
            type: t,
            owner: n,
            topic: r,
            download: async i => (0, s.fetchFeedUpdate)(e, n, r, { ...i,
              type: t
            })
          };
        }
      },
      1120: (e, t) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.getJsonData = async function (e, t) {
          const r = await t.download();
          return (await e.downloadData(r.reference)).json();
        }, t.setJsonData = async function (e, t, r, n) {
          const i = function (e) {
            try {
              const t = JSON.stringify(e);
              return new TextEncoder().encode(t);
            } catch (t) {
              throw t.message = `JsonFeed: ${t.message}`, t;
            }
          }(n),
                a = await e.uploadData(r, i);

          return t.upload(r, a);
        };
      },
      6894: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.makeTopic = function (e) {
          if ("string" == typeof e) return (0, a.makeHexString)(e, s.TOPIC_HEX_LENGTH);
          if (e instanceof Uint8Array) return (0, i.assertBytes)(e, s.TOPIC_BYTES_LENGTH), (0, a.bytesToHex)(e, s.TOPIC_HEX_LENGTH);
          throw new TypeError("invalid topic");
        }, t.makeTopicFromString = function (e) {
          if ("string" != typeof e) throw new TypeError("topic has to be string!");
          return (0, a.bytesToHex)((0, n.keccak256Hash)(e), s.TOPIC_HEX_LENGTH);
        };
        var n = r(9769),
            i = r(1834),
            a = r(7151),
            s = r(1713);
      },
      3259: (e, t) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.isFeedType = n, t.assertFeedType = function (e) {
          if (!n(e)) throw new TypeError("invalid feed type");
        }, t.DEFAULT_FEED_TYPE = void 0;
        const r = ["sequence", "epoch"];

        function n(e) {
          return "string" == typeof e && r.includes(e);
        }

        t.DEFAULT_FEED_TYPE = "sequence";
      },
      8809: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = {
          Bee: !0,
          BeeDebug: !0,
          Utils: !0,
          SUPPORTED_BEE_VERSION: !0,
          SUPPORTED_BEE_VERSION_EXACT: !0
        };
        Object.defineProperty(t, "Bee", {
          enumerable: !0,
          get: function () {
            return i.Bee;
          }
        }), Object.defineProperty(t, "BeeDebug", {
          enumerable: !0,
          get: function () {
            return a.BeeDebug;
          }
        }), Object.defineProperty(t, "SUPPORTED_BEE_VERSION", {
          enumerable: !0,
          get: function () {
            return d.SUPPORTED_BEE_VERSION;
          }
        }), Object.defineProperty(t, "SUPPORTED_BEE_VERSION_EXACT", {
          enumerable: !0,
          get: function () {
            return d.SUPPORTED_BEE_VERSION_EXACT;
          }
        }), t.Utils = void 0;

        var i = r(3604),
            a = r(6457),
            s = function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var r = c(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var a in e) if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
            var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
            s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a];
          }

          n.default = e, r && r.set(e, n);
          return n;
        }(r(5085));

        t.Utils = s;
        var o = r(1713);
        Object.keys(o).forEach(function (e) {
          "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === o[e] || Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return o[e];
            }
          }));
        });
        var f = r(9470);
        Object.keys(f).forEach(function (e) {
          "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === f[e] || Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return f[e];
            }
          }));
        });
        var d = r(2038);

        function c(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
              r = new WeakMap();
          return (c = function (e) {
            return e ? r : t;
          })(e);
        }
      },
      5660: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.upload = async function (e, t, r, s) {
          return (await (0, a.safeAxios)({ ...(null == s ? void 0 : s.axiosOptions),
            method: "post",
            url: e + o,
            data: await (0, n.prepareData)(t),
            headers: {
              "content-type": "application/octet-stream",
              ...(0, i.extractUploadHeaders)(r, s)
            },
            responseType: "json"
          })).data.reference;
        }, t.download = async function (e, t) {
          const r = await (0, a.safeAxios)({
            responseType: "arraybuffer",
            url: `${e}/bytes/${t}`
          });
          return (0, s.wrapBytesWithHelpers)(new Uint8Array(r.data));
        }, t.downloadReadable = async function (e, t, r) {
          return (await (0, a.safeAxios)({ ...r,
            method: "GET",
            responseType: "stream",
            url: `${e}/bytes/${t}`
          })).data;
        };
        var n = r(4161),
            i = r(7551),
            a = r(5837),
            s = r(1834);
        const o = "/bytes";
      },
      9068: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.uploadFile = async function (e, t, r, n, o) {
          if (!e) throw new s.BeeArgumentError("url parameter is required and cannot be empty", e);
          return (await (0, i.safeAxios)({ ...(null == o ? void 0 : o.axiosOptions),
            method: "post",
            url: e + c,
            data: (0, a.prepareData)(t),
            headers: { ...u(r, o)
            },
            params: {
              name: n
            },
            responseType: "json"
          })).data.reference;
        }, t.downloadFile = async function (e, t, r = "", a) {
          const s = await (0, i.safeAxios)({ ...a,
            method: "GET",
            responseType: "arraybuffer",
            url: `${e}/bzz/${t}/${r}`
          });
          return { ...(0, n.readFileHeaders)(s.headers),
            data: (0, d.wrapBytesWithHelpers)(new Uint8Array(s.data))
          };
        }, t.downloadFileReadable = async function (e, t, r = "", a) {
          const s = await (0, i.safeAxios)({ ...a,
            method: "GET",
            responseType: "stream",
            url: `${e}/bzz/${t}/${r}`
          });
          return { ...(0, n.readFileHeaders)(s.headers),
            data: s.data
          };
        }, t.uploadCollection = async function (e, t, r, n) {
          if (!e) throw new s.BeeArgumentError("url parameter is required and cannot be empty", e);
          (0, f.assertCollection)(t);
          const a = (0, o.makeTar)(t);
          return (await (0, i.safeAxios)({ ...(null == n ? void 0 : n.axiosOptions),
            method: "post",
            url: e + c,
            data: a,
            responseType: "json",
            headers: {
              "content-type": "application/x-tar",
              "swarm-collection": "true",
              ...h(r, n)
            }
          })).data.reference;
        };
        var n = r(7551),
            i = r(5837),
            a = r(4161),
            s = r(9470),
            o = r(5696),
            f = r(6688),
            d = r(1834);
        const c = "/bzz";

        function u(e, t) {
          const r = (0, n.extractUploadHeaders)(e, t);
          return null != t && t.size && (r["content-length"] = String(t.size)), null != t && t.contentType && (r["content-type"] = t.contentType), r;
        }

        function h(e, t) {
          const r = (0, n.extractUploadHeaders)(e, t);
          return null != t && t.indexDocument && (r["swarm-index-document"] = t.indexDocument), null != t && t.errorDocument && (r["swarm-error-document"] = t.errorDocument), r;
        }
      },
      3521: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.upload = async function (e, t, r, a) {
          return (await (0, i.safeAxios)({ ...(null == a ? void 0 : a.axiosOptions),
            method: "post",
            url: `${e}/chunks`,
            data: t,
            headers: {
              "content-type": "application/octet-stream",
              ...(0, n.extractUploadHeaders)(r, a)
            },
            responseType: "json"
          })).data.reference;
        }, t.download = async function (e, t) {
          const r = await (0, i.safeAxios)({
            responseType: "arraybuffer",
            url: `${e}/chunks/${t}`
          });
          return new Uint8Array(r.data);
        }, t.downloadReadable = async function (e, t, r) {
          return (await (0, i.safeAxios)({ ...r,
            method: "GET",
            responseType: "stream",
            url: `${e}/chunks/${t}`
          })).data;
        };
        var n = r(7551),
            i = r(5837);
      },
      4995: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.getAllBalances = async function (e) {
          return (await (0, n.safeAxios)({
            url: e + i,
            responseType: "json"
          })).data;
        }, t.getPeerBalance = async function (e, t) {
          return (await (0, n.safeAxios)({
            url: e + `/balances/${t}`,
            responseType: "json"
          })).data;
        }, t.getPastDueConsumptionBalances = async function (e) {
          return (await (0, n.safeAxios)({
            url: e + a,
            responseType: "json"
          })).data;
        }, t.getPastDueConsumptionPeerBalance = async function (e, t) {
          return (await (0, n.safeAxios)({
            url: e + `/consumed/${t}`,
            responseType: "json"
          })).data;
        };
        var n = r(5837);
        const i = "/balances",
              a = "/consumed";
      },
      5689: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.getChequebookAddress = async function (e) {
          return (await (0, n.safeAxios)({
            url: e + i + "/address",
            responseType: "json"
          })).data;
        }, t.getChequebookBalance = async function (e) {
          return (await (0, n.safeAxios)({
            url: e + i + "/balance",
            responseType: "json"
          })).data;
        }, t.getLastCashoutAction = async function (e, t) {
          return (await (0, n.safeAxios)({
            url: e + i + `/cashout/${t}`,
            responseType: "json"
          })).data;
        }, t.cashoutLastCheque = async function (e, t, r) {
          const a = {};
          null != r && r.gasPrice && (a["gas-price"] = r.gasPrice.toString());
          null != r && r.gasLimit && (a["gas-limit"] = r.gasLimit.toString());
          return (await (0, n.safeAxios)({
            method: "post",
            url: e + i + `/cashout/${t}`,
            responseType: "json",
            headers: a
          })).data.transactionHash;
        }, t.getLastChequesForPeer = async function (e, t) {
          return (await (0, n.safeAxios)({
            url: e + i + `/cheque/${t}`,
            responseType: "json"
          })).data;
        }, t.getLastCheques = async function (e) {
          return (await (0, n.safeAxios)({
            url: e + i + "/cheque",
            responseType: "json"
          })).data;
        }, t.depositTokens = async function (e, t, r) {
          const a = {};
          r && (a["gas-price"] = r.toString());
          return (await (0, n.safeAxios)({
            method: "post",
            url: e + i + "/deposit",
            responseType: "json",
            params: {
              amount: t.toString(10)
            },
            headers: a
          })).data.transactionHash;
        }, t.withdrawTokens = async function (e, t, r) {
          const a = {};
          r && (a["gas-price"] = r.toString());
          return (await (0, n.safeAxios)({
            method: "post",
            url: e + i + "/withdraw",
            responseType: "json",
            params: {
              amount: t.toString(10)
            },
            headers: a
          })).data.transactionHash;
        };
        var n = r(5837);
        const i = "/chequebook";
      },
      4369: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.getNodeAddresses = async function (e) {
          return (await (0, n.safeAxios)({
            url: e + "/addresses",
            responseType: "json"
          })).data;
        }, t.getPeers = async function (e) {
          return (await (0, n.safeAxios)({
            url: e + "/peers",
            responseType: "json"
          })).data.peers || [];
        }, t.getBlocklist = async function (e) {
          return (await (0, n.safeAxios)({
            url: e + "/blocklist",
            responseType: "json"
          })).data.peers || [];
        }, t.removePeer = async function (e, t) {
          return (await (0, n.safeAxios)({
            url: `${e}/peers/${t}`,
            responseType: "json",
            method: "DELETE"
          })).data;
        }, t.getTopology = async function (e) {
          return (await (0, n.safeAxios)({
            url: `${e}/topology`,
            responseType: "json"
          })).data;
        }, t.pingPeer = async function (e, t) {
          return (await (0, n.safeAxios)({
            url: `${e}/pingpong/${t}`,
            responseType: "json",
            method: "POST"
          })).data;
        };
        var n = r(5837);
      },
      4955: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.getSettlements = async function (e, t) {
          return (await (0, n.safeAxios)({
            url: e + `/settlements/${t}`,
            responseType: "json"
          })).data;
        }, t.getAllSettlements = async function (e) {
          return (await (0, n.safeAxios)({
            url: e + i,
            responseType: "json"
          })).data;
        };
        var n = r(5837);
        const i = "/settlements";
      },
      7894: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.getAllPostageBatches = async function (e) {
          return (await (0, n.safeAxios)({
            method: "get",
            url: `${e}/stamps`,
            responseType: "json"
          })).data.stamps || [];
        }, t.getPostageBatch = async function (e, t) {
          return (await (0, n.safeAxios)({
            method: "get",
            url: `${e}/stamps/${t}`,
            responseType: "json"
          })).data;
        }, t.getPostageBatchBuckets = async function (e, t) {
          return (await (0, n.safeAxios)({
            method: "get",
            url: `${e}/stamps/${t}/buckets`,
            responseType: "json"
          })).data;
        }, t.createPostageBatch = async function (e, t, r, i) {
          const a = {};
          null != i && i.gasPrice && (a["gas-price"] = i.gasPrice.toString());
          void 0 !== (null == i ? void 0 : i.immutableFlag) && (a.immutable = String(i.immutableFlag));
          return (await (0, n.safeAxios)({
            method: "post",
            url: `${e}/stamps/${t}/${r}`,
            responseType: "json",
            params: {
              label: null == i ? void 0 : i.label
            },
            headers: a
          })).data.batchID;
        };
        var n = r(5837);
      },
      569: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.getReserveState = async function (e) {
          return (await (0, n.safeAxios)({
            method: "get",
            url: `${e}/reservestate`,
            responseType: "json"
          })).data;
        }, t.getChainState = async function (e) {
          return (await (0, n.safeAxios)({
            method: "get",
            url: `${e}/chainstate`,
            responseType: "json"
          })).data;
        };
        var n = r(5837);
      },
      2038: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.getHealth = o, t.isSupportedVersion = async function (e) {
          const {
            version: t
          } = await o(e);
          return t === a || "1.1.0-dev" === t;
        }, t.SUPPORTED_BEE_VERSION = t.SUPPORTED_BEE_VERSION_EXACT = void 0;
        var n = r(5837),
            i = r(306);
        const a = i.engines.bee;
        t.SUPPORTED_BEE_VERSION_EXACT = a;
        const s = i.engines.bee.substr(0, i.engines.bee.indexOf("-"));

        async function o(e) {
          return (await (0, n.safeAxios)({
            method: "get",
            url: `${e}/health`,
            responseType: "json"
          })).data;
        }

        t.SUPPORTED_BEE_VERSION = s;
      },
      6344: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.retrieveExtendedTag = async function (e, t) {
          return (await (0, n.safeAxios)({
            url: `${e}/tags/${t}`,
            responseType: "json"
          })).data;
        };
        var n = r(5837);
      },
      614: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.getAllTransactions = async function (e) {
          return (await (0, n.safeAxios)({
            url: `${e}/transactions`,
            responseType: "json"
          })).data.pendingTransactions;
        }, t.getTransaction = async function (e, t) {
          return (await (0, n.safeAxios)({
            url: `${e}/transactions/${t}`,
            responseType: "json"
          })).data;
        }, t.rebroadcastTransaction = async function (e, t) {
          return (await (0, n.safeAxios)({
            method: "post",
            url: `${e}/transactions/${t}`,
            responseType: "json"
          })).data.transactionHash;
        }, t.cancelTransaction = async function (e, t, r) {
          return (await (0, n.safeAxios)({
            method: "delete",
            headers: {
              "gas-price": r
            },
            url: `${e}/transactions/${t}`,
            responseType: "json"
          })).data.transactionHash;
        };
        var n = r(5837);
      },
      8873: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.createFeedManifest = async function (e, t, r, a, s) {
          return (await (0, n.safeAxios)({
            method: "post",
            url: `${e}/feeds/${t}/${r}`,
            params: s,
            headers: (0, i.extractUploadHeaders)(a)
          })).data.reference;
        }, t.fetchFeedUpdate = async function (e, t, r, i) {
          const a = await (0, n.safeAxios)({
            url: `${e}/feeds/${t}/${r}`,
            params: i
          });
          return { ...a.data,
            ...(s = a.headers, {
              feedIndex: s["swarm-feed-index"],
              feedIndexNext: s["swarm-feed-index-next"]
            })
          };
          var s;
        };
        var n = r(5837),
            i = r(7551);
      },
      7922: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.pin = async function (e, t) {
          await (0, n.safeAxios)({
            method: "post",
            responseType: "json",
            url: `${e}/pins/${t}`
          });
        }, t.unpin = async function (e, t) {
          await (0, n.safeAxios)({
            method: "delete",
            responseType: "json",
            url: `${e}/pins/${t}`
          });
        }, t.getPin = async function (e, t) {
          return (await (0, n.safeAxios)({
            method: "get",
            responseType: "json",
            url: `${e}/pins/${t}`
          })).data;
        }, t.getAllPins = async function (e) {
          const t = (await (0, n.safeAxios)({
            method: "get",
            responseType: "json",
            url: `${e}/pins`
          })).data.references;
          if (null === t) return [];
          return t;
        };
        var n = r(5837);
      },
      148: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.send = async function (e, t, r, n, i, f) {
          await (0, s.safeAxios)({
            method: "post",
            url: `${e}/pss/send/${t}/${r.slice(0, 4)}`,
            data: await (0, a.prepareData)(n),
            responseType: "json",
            params: {
              recipient: f
            },
            headers: (0, o.extractUploadHeaders)(i)
          });
        }, t.subscribe = function (e, t) {
          const r = e.replace(/^http/i, "ws");
          return new i.default(`${r}/pss/subscribe/${t}`);
        };
        var n,
            i = (n = r(2256)) && n.__esModule ? n : {
          default: n
        },
            a = r(4161),
            s = r(5837),
            o = r(7551);
      },
      6866: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.upload = async function (e, t, r, a, s, o, f) {
          return (await (0, i.safeAxios)({ ...(null == f ? void 0 : f.axiosOptions),
            method: "post",
            url: `${e}/soc/${t}/${r}`,
            data: s,
            headers: {
              "content-type": "application/octet-stream",
              ...(0, n.extractUploadHeaders)(o, f)
            },
            responseType: "json",
            params: {
              sig: a
            }
          })).data.reference;
        };
        var n = r(7551),
            i = r(5837);
      },
      9423: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.getAllPostageBatches = async function (e) {
          return (await (0, n.safeAxios)({
            method: "get",
            url: `${e}/stamps`,
            responseType: "json"
          })).data.stamps || [];
        }, t.getPostageBatch = async function (e, t) {
          return (await (0, n.safeAxios)({
            method: "get",
            url: `${e}/stamps/${t}`,
            responseType: "json"
          })).data;
        }, t.createPostageBatch = async function (e, t, r, i) {
          const a = {};
          null != i && i.gasPrice && (a["gas-price"] = i.gasPrice.toString());
          void 0 !== (null == i ? void 0 : i.immutableFlag) && (a.immutable = String(i.immutableFlag));
          return (await (0, n.safeAxios)({
            method: "post",
            url: `${e}/stamps/${t}/${r}`,
            responseType: "json",
            params: {
              label: null == i ? void 0 : i.label
            },
            headers: a
          })).data.batchID;
        };
        var n = r(5837);
      },
      9364: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.checkConnection = async function (e) {
          await (0, n.safeAxios)({
            url: e,
            responseType: "json"
          });
        };
        var n = r(5837);
      },
      3920: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.reupload = async function (e, t, r) {
          await (0, n.safeAxios)({ ...r,
            method: "put",
            url: `${e}/stewardship/${t}`,
            responseType: "json"
          });
        };
        var n = r(5837);
      },
      8211: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.createTag = async function (e) {
          return (await (0, n.safeAxios)({
            method: "post",
            url: e + i,
            responseType: "json"
          })).data;
        }, t.retrieveTag = async function (e, t) {
          return (await (0, n.safeAxios)({
            url: `${e}/tags/${t}`,
            responseType: "json"
          })).data;
        }, t.getAllTags = async function (e, t, r) {
          return (await (0, n.safeAxios)({
            url: `${e}/tags`,
            params: {
              offset: t,
              limit: r
            },
            responseType: "json"
          })).data.tags;
        }, t.deleteTag = async function (e, t) {
          await (0, n.safeAxios)({
            method: "delete",
            url: `${e}/tags/${t}`
          });
        }, t.updateTag = async function (e, t, r) {
          await (0, n.safeAxios)({
            method: "patch",
            url: `${e}/tags/${t}`,
            data: {
              reference: r
            }
          });
        };
        var n = r(5837);
        const i = "/tags";
      },
      2387: () => {},
      1713: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = {
          ADDRESS_HEX_LENGTH: !0,
          PUBKEY_HEX_LENGTH: !0,
          BATCH_ID_HEX_LENGTH: !0,
          REFERENCE_HEX_LENGTH: !0,
          ENCRYPTED_REFERENCE_HEX_LENGTH: !0,
          REFERENCE_BYTES_LENGTH: !0,
          ENCRYPTED_REFERENCE_BYTES_LENGTH: !0,
          STAMPS_DEPTH_MIN: !0,
          STAMPS_DEPTH_MAX: !0,
          TAGS_LIMIT_MIN: !0,
          TAGS_LIMIT_MAX: !0,
          TOPIC_BYTES_LENGTH: !0,
          TOPIC_HEX_LENGTH: !0,
          SIGNATURE_HEX_LENGTH: !0,
          SIGNATURE_BYTES_LENGTH: !0
        };
        t.SIGNATURE_BYTES_LENGTH = t.SIGNATURE_HEX_LENGTH = t.TOPIC_HEX_LENGTH = t.TOPIC_BYTES_LENGTH = t.TAGS_LIMIT_MAX = t.TAGS_LIMIT_MIN = t.STAMPS_DEPTH_MAX = t.STAMPS_DEPTH_MIN = t.ENCRYPTED_REFERENCE_BYTES_LENGTH = t.REFERENCE_BYTES_LENGTH = t.ENCRYPTED_REFERENCE_HEX_LENGTH = t.REFERENCE_HEX_LENGTH = t.BATCH_ID_HEX_LENGTH = t.PUBKEY_HEX_LENGTH = t.ADDRESS_HEX_LENGTH = void 0;
        var i = r(2387);
        Object.keys(i).forEach(function (e) {
          "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === i[e] || Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return i[e];
            }
          }));
        });
        t.ADDRESS_HEX_LENGTH = 64;
        t.PUBKEY_HEX_LENGTH = 66;
        t.BATCH_ID_HEX_LENGTH = 64;
        t.REFERENCE_HEX_LENGTH = 64;
        t.ENCRYPTED_REFERENCE_HEX_LENGTH = 128;
        t.REFERENCE_BYTES_LENGTH = 32;
        t.ENCRYPTED_REFERENCE_BYTES_LENGTH = 64;
        t.STAMPS_DEPTH_MIN = 17;
        t.STAMPS_DEPTH_MAX = 255;
        t.TAGS_LIMIT_MIN = 1;
        t.TAGS_LIMIT_MAX = 1e3;
        t.TOPIC_BYTES_LENGTH = 32;
        t.TOPIC_HEX_LENGTH = 64;
        t.SIGNATURE_HEX_LENGTH = 130;
        t.SIGNATURE_BYTES_LENGTH = 65;
      },
      1834: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.isBytes = i, t.assertBytes = a, t.isFlexBytes = s, t.assertFlexBytes = function (e, t, r) {
          if (!s(e, t, r)) throw new TypeError(`Parameter is not valid FlexBytes of  min: ${t}, max: ${r}, length: ${e.length}`);
        }, t.bytesAtOffset = function (e, t, r) {
          const n = e.slice(t, t + r);
          return a(n, r), n;
        }, t.flexBytesAtOffset = function (e, t, r, n) {
          return e.slice(t);
        }, t.bytesEqual = function (e, t) {
          return e.length === t.length && e.every((e, r) => e === t[r]);
        }, t.makeBytes = function (e) {
          return new Uint8Array(e);
        }, t.wrapBytesWithHelpers = function (e) {
          return Object.assign(e, {
            text: () => new TextDecoder("utf-8").decode(e),
            json: () => JSON.parse(new TextDecoder("utf-8").decode(e)),
            hex: () => (0, n.bytesToHex)(e)
          });
        };
        var n = r(7151);

        function i(e, t) {
          return e instanceof Uint8Array && e.length === t;
        }

        function a(e, t) {
          if (!i(e, t)) throw new TypeError(`Parameter is not valid Bytes of length: ${t} !== ${e.length}`);
        }

        function s(e, t, r) {
          return e instanceof Uint8Array && e.length >= t && e.length <= r;
        }
      },
      6688: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.isCollection = d, t.assertCollection = function (e) {
          if (!d(e)) throw new a.BeeArgumentError("invalid collection", e);
        }, t.makeCollectionFromFS = async function (e) {
          if ("string" != typeof e) throw new TypeError("dir has to be string!");
          if ("" === e) throw new TypeError("dir must not be empty string!");
          return c(e, "");
        }, t.makeCollectionFromFileList = async function (e) {
          const t = [];

          for (let r = 0; r < e.length; r++) {
            const n = e[r];
            n && t.push({
              path: u(n),
              data: new Uint8Array(await (0, s.fileArrayBuffer)(n))
            });
          }

          return t;
        }, t.getCollectionSize = function (e) {
          let t = 0;

          for (let r = 0; r < e.length; r++) {
            const n = e[r];
            n && (t += n.size);
          }

          return t;
        }, t.getFolderSize = async function e(t) {
          if ("string" != typeof t) throw new TypeError("dir has to be string!");
          if ("" === t) throw new TypeError("dir must not be empty string!");
          const r = await n.default.promises.opendir(t);
          let a = 0;

          for await (const s of r) if (s.isFile()) {
            const e = await n.default.promises.stat(i.default.join(t, s.name));
            a += e.size;
          } else s.isDirectory() && (a += await e(i.default.join(t, s.name)));

          return a;
        };
        var n = f(r(233)),
            i = f(r(4538)),
            a = r(9470),
            s = r(2607),
            o = r(3792);

        function f(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }

        function d(e) {
          return !!Array.isArray(e) && e.every(e => "object" == typeof e && e.data && e.path && (0, o.isUint8Array)(e.data));
        }

        async function c(e, t) {
          const r = i.default.join(e, t),
                a = await n.default.promises.opendir(r);
          let s = [];

          for await (const o of a) {
            const r = i.default.join(e, t, o.name),
                  a = i.default.join(t, o.name);
            o.isFile() ? s.push({
              path: a,
              data: new Uint8Array(await n.default.promises.readFile(r))
            }) : o.isDirectory() && (s = [...(await c(e, a)), ...s]);
          }

          return s;
        }

        function u(e) {
          if (e.webkitRelativePath && "" !== e.webkitRelativePath) return e.webkitRelativePath.replace(/.*?\//i, "");
          if (e.name) return e.name;
          throw new TypeError("file is not valid File object");
        }
      },
      4161: (e, t) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.prepareData = function (e) {
          if ("string" == typeof e) return new TextEncoder().encode(e);
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (e instanceof Uint8Array) return e;
          throw new TypeError("unknown data type");
        }, t.prepareWebsocketData = async function (e) {
          if ("string" == typeof e) return new TextEncoder().encode(e);
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (e instanceof Blob) return new Uint8Array(await new Response(e).arrayBuffer());
          throw new TypeError("unknown websocket data type");
        };
      },
      9470: (e, t) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.BeeResponseError = t.BeeRequestError = t.BeeArgumentError = t.BeeError = void 0;

        class r extends Error {
          constructor(e) {
            super(e);
          }

        }

        t.BeeError = r;
        t.BeeArgumentError = class extends r {
          constructor(e, t) {
            super(e), this.value = t;
          }

        };
        t.BeeRequestError = class extends r {
          constructor(e) {
            super(e);
          }

        };
        t.BeeResponseError = class extends r {
          constructor(e, t) {
            super(t), this.status = e;
          }

        };
      },
      264: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.makeEthAddress = s, t.makeHexEthAddress = o, t.isHexEthAddress = f, t.toLittleEndian = d, t.fromLittleEndian = function (e, t = 2) {
          return d(e, t);
        }, t.ethToSwarmAddress = function (e, t = 1) {
          (function (e) {
            if (!f(e)) throw new TypeError("invalid ETH address");
          })(e), function (e) {
            if (Number.isInteger(e && e > 0 && e < Number.MAX_SAFE_INTEGER)) throw new TypeError("swarm network id must be positive integer");
          }(t);
          const r = `${(0, i.makeHexString)(e)}${d(t, 16)}`;
          (0, i.assertHexString)(r);
          return (0, n.sha3_256)((0, i.hexToBytes)(r));
        }, t.makeEthereumWalletSigner = async function (e, t) {
          let r;
          if ("object" != typeof e || null === e) throw new TypeError("We need JsonRPC provider object!");
          if (e.request) r = e.request;else {
            if (!e.sendAsync) throw new Error("Incompatible interface of given provider!");
            r = e.sendAsync;
          }
          t || (t = (await r({
            method: "eth_requestAccounts"
          }))[0]);
          const n = s(t),
                i = o(t);
          return {
            address: n,
            sign: async e => await r({
              jsonrpc: "2.0",
              method: "personal_sign",
              params: ["0x" + e.hex(), "0x" + i]
            })
          };
        };
        var n = r(8086),
            i = r(7151),
            a = r(1834);

        function s(e) {
          if ("string" == typeof e) {
            const t = (0, i.makeHexString)(e, 40),
                  r = (0, i.hexToBytes)(t);
            return (0, a.assertBytes)(r, 20), r;
          }

          if (e instanceof Uint8Array) return (0, a.assertBytes)(e, 20), e;
          throw new TypeError("Invalid EthAddress");
        }

        function o(e) {
          try {
            return (0, i.makeHexString)(e, 40);
          } catch (t) {
            throw t instanceof TypeError && (t.message = `Invalid HexEthAddress: ${t.message}`), t;
          }
        }

        function f(e) {
          return function (e) {
            return "string" == typeof e && (/^(0x|0X)?[0-9a-f]{40}$/.test(e) || /^(0x|0X)?[0-9A-F]{40}$/.test(e));
          }(e) || function (e) {
            try {
              const t = (0, i.makeHexString)(e, 40),
                    r = (0, n.keccak256)(t.toLowerCase());

              for (let e = 0; e < 40; e += 1) if (parseInt(r[e], 16) > 7 && t[e].toUpperCase() !== t[e] || parseInt(r[e], 16) <= 7 && t[e].toLowerCase() !== t[e]) return !1;

              return !0;
            } catch (t) {
              if (t instanceof TypeError) return !1;
              throw t;
            }
          }(e);
        }

        function d(e, t = 2) {
          var r;
          if (!(Number.isInteger(t) && t >= 2 && t % 2 == 0)) throw new TypeError("minimal padding for conversion needs to be positive even integer");
          let n;
          if ("string" == typeof e) n = (0, i.makeHexString)(e);else {
            if ("number" != typeof e) throw new TypeError("incorrect input type");
            n = (0, i.intToHex)(e);
          }
          n = n.padStart(t, "0"), n.length % 2 != 0 && (n = n.padStart(n.length + 1, "0"));
          const a = null === (r = n.match(/../g)) || void 0 === r ? void 0 : r.reverse().join("");
          if (a) return a;
          throw new Error("failed to convert");
        }
      },
      5085: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), Object.defineProperty(t, "setDefaultHeaders", {
          enumerable: !0,
          get: function () {
            return u.setDefaultHeaders;
          }
        }), Object.defineProperty(t, "keccak256Hash", {
          enumerable: !0,
          get: function () {
            return h.keccak256Hash;
          }
        }), t.Hooks = t.Eth = t.Tar = t.Hex = t.File = t.Data = t.Bytes = t.Collections = void 0;
        var n = p(r(6688));
        t.Collections = n;
        var i = p(r(1834));
        t.Bytes = i;
        var a = p(r(4161));
        t.Data = a;
        var s = p(r(2607));
        t.File = s;
        var o = p(r(7151));
        t.Hex = o;
        var f = p(r(5696));
        t.Tar = f;
        var d = p(r(264));
        t.Eth = d;
        var c = p(r(7170));
        t.Hooks = c;
        var u = r(5837),
            h = r(9769);

        function l(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
              r = new WeakMap();
          return (l = function (e) {
            return e ? r : t;
          })(e);
        }

        function p(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var r = l(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var a in e) if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
            var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
            s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a];
          }

          return n.default = e, r && r.set(e, n), n;
        }
      },
      2607: (e, t) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.isFile = function (e) {
          if ("function" == typeof File) return e instanceof File;
          const t = e;
          return "object" == typeof t && "string" == typeof t.name && ("function" == typeof t.stream || "function" == typeof t.arrayBuffer);
        }, t.fileArrayBuffer = async function (e) {
          if (e.arrayBuffer) return e.arrayBuffer();
          return new Promise(t => {
            const r = new FileReader();
            r.onload = () => t(r.result), r.readAsArrayBuffer(e);
          });
        };
      },
      9769: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.keccak256Hash = function (...e) {
          const t = n.keccak256.create();
          return e.forEach(e => t.update(e)), Uint8Array.from(t.digest());
        };
        var n = r(8086);
      },
      7551: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.readFileHeaders = function (e) {
          const t = function (e) {
            if (!e) throw new n.BeeError("missing content-disposition header");
            const t = e.match(/filename\*?=['"]?(?:UTF-\d['"]*)?([^;\r\n"']*)['"]?;?/i);
            if (t && t.length > 0) return t[1];
            throw new n.BeeError("invalid content-disposition header");
          }(e["content-disposition"]),
                r = function (e) {
            if (!e) return;
            return parseInt(e, 10);
          }(e["swarm-tag-uid"]),
                i = e["content-type"];

          return {
            name: t,
            tagUid: r,
            contentType: i
          };
        }, t.extractUploadHeaders = function (e, t) {
          if (!e) throw new n.BeeError("Postage BatchID has to be specified!");
          const r = {
            "swarm-postage-batch-id": e
          };
          null != t && t.pin && (r["swarm-pin"] = String(t.pin));
          null != t && t.encrypt && (r["swarm-encrypt"] = String(t.encrypt));
          null != t && t.tag && (r["swarm-tag"] = String(t.tag));
          return r;
        };
        var n = r(9470);
      },
      7151: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.makeHexString = function (e, t) {
          if ("number" == typeof e) return a(e, t);
          if (e instanceof Uint8Array) return i(e, t);

          if ("string" == typeof e) {
            if (o(e)) {
              const r = e.slice(2);
              if (t && r.length !== t) throw new TypeError(`Length mismatch for valid hex string. Expecting length ${t}: ${r}`);
              return r;
            }

            return f(e, t), e;
          }

          throw new TypeError("Not HexString compatible type!");
        }, t.hexToBytes = function (e) {
          f(e);
          const t = (0, n.makeBytes)(e.length / 2);

          for (let r = 0; r < t.length; r++) {
            const n = e.substr(2 * r, 2);
            t[r] = parseInt(n, 16);
          }

          return t;
        }, t.bytesToHex = i, t.intToHex = a, t.isHexString = s, t.isPrefixedHexString = o, t.assertHexString = f, t.assertPrefixedHexString = function (e, t = "value") {
          if (!o(e)) throw new TypeError(`${t} not valid prefixed hex string: ${e}`);
        };
        var n = r(1834);

        function i(e, t) {
          const r = Array.from(e, e => e.toString(16).padStart(2, "0")).join("");
          if (t && r.length !== t) throw new TypeError(`Resulting HexString does not have expected length ${t}: ${r}`);
          return r;
        }

        function a(e, t) {
          if (!Number.isInteger(e)) throw new TypeError("the value provided is not integer");
          if (e > Number.MAX_SAFE_INTEGER) throw new TypeError("the value provided exceeds safe integer");
          if (e < 0) throw new TypeError("the value provided is a negative integer");
          const r = e.toString(16);
          if (t && r.length !== t) throw new TypeError(`Resulting HexString does not have expected length ${t}: ${r}`);
          return r;
        }

        function s(e, t) {
          return "string" == typeof e && /^[0-9a-f]+$/i.test(e) && (!t || e.length === t);
        }

        function o(e) {
          return "string" == typeof e && /^0x[0-9a-f]+$/i.test(e);
        }

        function f(e, t, r = "value") {
          if (!s(e, t)) {
            if (o(e)) throw new TypeError(`${r} not valid non prefixed hex string (has 0x prefix): ${e}`);
            throw new TypeError(`${r} not valid hex string${t ? ` of length ${t}` : ""}: ${e}`);
          }
        }
      },
      7170: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.onRequest = function (e) {
          return i.default.interceptors.request.use(function (e) {
            return async t => (await e(a(t)), t);
          }(e));
        }, t.clearOnRequest = function (e) {
          i.default.interceptors.request.eject(e);
        }, t.onResponse = function (e) {
          return i.default.interceptors.response.use(function (e) {
            return async t => (await e({
              headers: t.headers,
              data: t.data,
              status: t.status,
              statusText: t.statusText,
              request: a(t.config)
            }), t);
          }(e));
        }, t.clearOnResponse = function (e) {
          i.default.interceptors.response.eject(e);
        };
        var n,
            i = (n = r(4559)) && n.__esModule ? n : {
          default: n
        };

        function a(e) {
          let t = e.headers;

          if (t.common && t.get && t.delete && t.post && t.patch) {
            var r, n;
            const {
              common: i,
              get: a,
              delete: s,
              post: o,
              patch: f,
              head: d,
              put: c,
              ...u
            } = t;
            t = Object.assign({}, null !== (r = e.headers.common) && void 0 !== r ? r : {}, null !== (n = e.headers[e.method]) && void 0 !== n ? n : {}, u);
          }

          return {
            url: `${e.url}`,
            method: e.method,
            params: e.params,
            headers: t,
            data: e.data
          };
        }
      },
      5837: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.setDefaultHeaders = function (e) {
          n.default.defaults.headers.common = e;
        }, t.safeAxios = async function (e) {
          try {
            return await (0, n.default)({
              maxContentLength: 1 / 0,
              maxBodyLength: 1 / 0,
              transformRequest: d,
              ...e
            });
          } catch (r) {
            var t;
            if (r.response) throw null !== (t = r.response.data) && void 0 !== t && t.message ? new i.BeeResponseError(r.response.status, `${r.response.statusText}: ${r.response.data.message}`) : new i.BeeResponseError(r.response.status, r.response.statusText);
            throw r.request ? new i.BeeRequestError(r.message) : new i.BeeError(r.message);
          }
        };
        var n = o(r(4559)),
            i = r(9470),
            a = o(r(8266)),
            s = o(r(1490));

        function o(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }

        function f(e, t) {
          !a.default.isUndefined(e) && a.default.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
        }

        function d(e, t) {
          return (0, s.default)(t, "Accept"), (0, s.default)(t, "Content-Type"), a.default.isFormData(e) || a.default.isArrayBuffer(e) || a.default.isBuffer(e) || a.default.isStream(e) || a.default.isFile(e) || a.default.isBlob(e) ? e : a.default.isArrayBufferView(e) ? e.buffer : a.default.isURLSearchParams(e) ? (f(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : a.default.isObject(e) || t && "application/json" === t["Content-Type"] ? (f(t, "application/json"), JSON.stringify(e)) : e;
        }

        n.default.defaults.adapter = r(1786);
      },
      5696: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.makeTar = function (e) {
          const t = new i.default();

          for (const r of e) {
            const e = a(r.path);
            t.append(e, r.data);
          }

          return t.out;
        };
        var n,
            i = (n = r(1117)) && n.__esModule ? n : {
          default: n
        };

        function a(e) {
          const t = new TextEncoder().encode(e);
          return {
            length: t.length,
            charCodeAt: e => t[e]
          };
        }
      },
      3792: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.isReadable = o, t.isUint8Array = function (e) {
          return e instanceof Uint8Array;
        }, t.isInteger = f, t.isObject = d, t.isStrictlyObject = c, t.assertBoolean = function (e) {
          if (!0 !== e && !1 !== e) throw new TypeError("value is not boolean");
        }, t.assertInteger = u, t.assertNonNegativeInteger = h, t.assertReference = function (e) {
          try {
            (0, s.assertHexString)(e, n.REFERENCE_HEX_LENGTH);
          } catch (t) {
            (0, s.assertHexString)(e, n.ENCRYPTED_REFERENCE_HEX_LENGTH);
          }
        }, t.assertAddress = function (e) {
          (0, s.assertHexString)(e, n.ADDRESS_HEX_LENGTH, "Address");
        }, t.assertBatchId = function (e) {
          (0, s.assertHexString)(e, n.BATCH_ID_HEX_LENGTH, "BatchId");
        }, t.assertUploadOptions = l, t.assertFileUploadOptions = function (e) {
          l(e, "FileUploadOptions");
          const t = e;

          if (t.size) {
            if ("number" != typeof t.size) throw new TypeError("tag property in FileUploadOptions has to be number or undefined!");
            h(t.size, "options.size");
          }

          if (t.contentType && "string" != typeof t.contentType) throw new TypeError("contentType property in FileUploadOptions has to be string or undefined!");
        }, t.assertCollectionUploadOptions = function (e) {
          l(e, "CollectionUploadOptions");
          const t = e;
          if (t.indexDocument && "string" != typeof t.indexDocument) throw new TypeError("indexDocument property in CollectionUploadOptions has to be string or undefined!");
          if (t.errorDocument && "string" != typeof t.errorDocument) throw new TypeError("errorDocument property in CollectionUploadOptions has to be string or undefined!");
        }, t.isTag = p, t.assertTag = function (e) {
          if (!c(e)) throw new TypeError("Tag is not an object!");
          const t = e,
                r = ["total", "processed", "synced", "uid"];

          for (const n of r) {
            if (!t[n]) throw new TypeError(`Tag's property '${n}' has to be specified!`);
            if ("number" != typeof t[n]) throw new TypeError(`Tag's property '${n}' has to be number!`);
          }

          if (!t.startedAt) throw new TypeError("Tag's property 'startedAt' has to be specified!");
          if ("string" != typeof t.startedAt) throw new TypeError("Tag's property 'startedAt' has to be string!");
        }, t.assertAddressPrefix = function (e) {
          if ((0, s.assertHexString)(e, void 0, "AddressPrefix"), e.length > n.ADDRESS_HEX_LENGTH) throw new i.BeeArgumentError(`AddressPrefix must have length of ${n.ADDRESS_HEX_LENGTH} at most! Got string with ${e.length}`, e);
        }, t.assertPssMessageHandler = function (e) {
          if (!c(e)) throw new TypeError("PssMessageHandler has to be object!");
          const t = e;
          if ("function" != typeof t.onMessage) throw new TypeError("onMessage property of PssMessageHandler has to be function!");
          if ("function" != typeof t.onError) throw new TypeError("onError property of PssMessageHandler has to be function!");
        }, t.assertPublicKey = function (e) {
          (0, s.assertHexString)(e, n.PUBKEY_HEX_LENGTH, "PublicKey");
        }, t.assertData = function (e) {
          if ("string" != typeof e && !(e instanceof Uint8Array)) throw new TypeError("Data must be either string or Uint8Array!");
        }, t.assertFileData = function (e) {
          if (!("string" == typeof e || e instanceof Uint8Array || (0, a.isFile)(e) || o(e))) throw new TypeError("Data must be either string, Readable, Uint8Array or File!");
        }, t.assertAllTagsOptions = function (e) {
          if (void 0 !== e && !c(e)) throw new TypeError("options has to be an object or undefined!");

          if (void 0 !== (null == e ? void 0 : e.limit)) {
            if ("number" != typeof e.limit) throw new TypeError("options.limit has to be a number or undefined!");
            if (e.limit < n.TAGS_LIMIT_MIN) throw new i.BeeArgumentError(`options.limit has to be at least ${n.TAGS_LIMIT_MIN}`, e.limit);
            if (e.limit > n.TAGS_LIMIT_MAX) throw new i.BeeArgumentError(`options.limit has to be at most ${n.TAGS_LIMIT_MAX}`, e.limit);
          }

          void 0 !== (null == e ? void 0 : e.offset) && h(e.offset, "options.offset");
        }, t.makeTagUid = function (e) {
          if (p(e)) return e.uid;
          if ("number" == typeof e) return h(e, "UID"), e;
          throw new TypeError("tagUid has to be either Tag or a number (UID)!");
        }, t.assertTransactionHash = function (e) {
          if ("string" != typeof e) throw new TypeError("TransactionHash has to be a string!");
          if ((0, s.assertPrefixedHexString)(e, "TransactionHash"), 66 !== e.length) throw new TypeError("TransactionHash has to be prefixed hex string with total length 66 (prefix including)");
        };
        var n = r(1713),
            i = r(9470),
            a = r(2607),
            s = r(7151);

        function o(e) {
          return "object" == typeof e && null !== e && "function" == typeof e.pipe && e.readable && "function" == typeof e._read;
        }

        function f(e) {
          return "string" == typeof e && /^-?(0|[1-9][0-9]*)$/g.test(e) || "number" == typeof e && e > Number.MIN_SAFE_INTEGER && e < Number.MAX_SAFE_INTEGER && Number.isInteger(e);
        }

        function d(e) {
          return null !== e && "object" == typeof e;
        }

        function c(e) {
          return d(e) && !Array.isArray(e);
        }

        function u(e) {
          if (!f(e)) throw new TypeError("value is not integer");
        }

        function h(e, t = "Value") {
          if (u(e), Number(e) < 0) throw new i.BeeArgumentError(`${t} has to be bigger or equal to zero`, e);
        }

        function l(e, t = "UploadOptions") {
          if (!c(e)) throw new TypeError(`${t} has to be an object!`);
          const r = e;
          if (r.pin && "boolean" != typeof r.pin) throw new TypeError(`options.pin property in ${t} has to be boolean or undefined!`);
          if (r.encrypt && "boolean" != typeof r.encrypt) throw new TypeError(`options.encrypt property in ${t} has to be boolean or undefined!`);

          if (r.tag) {
            if ("number" != typeof r.tag) throw new TypeError(`options.tag property in ${t} has to be number or undefined!`);
            h(r.tag, "options.tag");
          }

          if (r.axiosOptions && !c(r.axiosOptions)) throw new TypeError(`options.axiosOptions property in ${t} has to be object or undefined!`);
        }

        function p(e) {
          if (!c(e)) return !1;
          const t = e;
          return !(!["total", "processed", "synced", "uid"].every(e => "number" == typeof t[e]) || !t.startedAt || "string" != typeof t.startedAt);
        }
      },
      7359: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.writeUint64LittleEndian = function (e, t = (0, n.makeBytes)(8)) {
          const r = new DataView(t.buffer),
                i = 4294967295 & e;
          return r.setUint32(0, i, true), r.setUint32(4, 0, true), t;
        }, t.writeUint64BigEndian = function (e, t = (0, n.makeBytes)(8)) {
          const r = new DataView(t.buffer),
                i = 4294967295 & e;
          return r.setUint32(0, 0), r.setUint32(4, i), t;
        }, t.readUint64BigEndian = function (e) {
          return new DataView(e.buffer).getUint32(4);
        };
        var n = r(1834);
      },
      1376: (e, t, r) => {
        "use strict";

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.isValidBeeUrl = i, t.assertBeeUrl = function (e) {
          if (!i(e)) throw new n.BeeArgumentError("URL is not valid!", e);
        }, t.stripLastSlash = function (e) {
          if (e.endsWith("/")) return e.slice(0, -1);
          return e;
        };
        var n = r(9470);

        function i(e) {
          try {
            if ("string" != typeof e) return !1;
            const t = new URL(e);
            return "http:" === t.protocol || "https:" === t.protocol;
          } catch (t) {
            if (t instanceof TypeError || t.code && "ERR_INVALID_URL" === t.code) return !1;
            throw t;
          }
        }
      },
      7519: e => {
        "use strict";

        e.exports = {
          i8: "6.5.4"
        };
      },
      306: e => {
        "use strict";

        e.exports = JSON.parse('{"name":"@ethersphere/bee-js","version":"1.2.1","description":"Javascript client for Bee","keywords":["bee","swarm","decentralised","storage","ethereum","typescript","p2p","browser","node"],"homepage":"https://github.com/ethersphere/bee-js","bugs":{"url":"https://github.com/ethersphere/bee-js/issues/"},"license":"BSD-3-Clause","main":"dist/index.min.js","repository":{"type":"git","url":"https://github.com/ethersphere/bee-js.git"},"browser":{"./dist/index.min.js":"./dist/index.browser.min.js","data":"data.browser"},"types":"dist/src/index.d.ts","scripts":{"prepare":"rimraf dist && npm run compile:types && npm run compile:browser --env mode=production && npm run compile:node --env mode=production","compile:node":"webpack --progress --env target=node","compile:types":"tsc --emitDeclarationOnly --declaration","compile:browser":"webpack --progress --env target=web","mock-ci":"npm run lint:check && npm run check:types && npm run test","docs":"rimraf docs && typedoc","test":"npm run compile:browser && jest --verbose --selectProjects=node:unit node:integration dom:integration --config=jest.config.ts","test:integration:browser":"npm run compile:browser && jest --verbose --selectProjects=dom:integration --config=jest.config.ts","test:integration:node":"jest --verbose --selectProjects=node:integration --config=jest.config.ts","test:integration":"npm run compile:browser && jest --verbose --selectProjects=node:integration dom:integration --config=jest.config.ts ","test:unit":"jest --verbose --selectProjects=node:unit --config=jest.config.ts ","test:node":"jest --verbose --selectProjects=node:unit node:integration --config=jest.config.ts","test:browser":"npm run test:integration:browser","check:types":"tsc --project tsconfig.test.json","lint":"eslint --fix \\"src/**/*.ts\\" \\"test/**/*.ts\\" && prettier --write \\"src/**/*.ts\\" \\"test/**/*.ts\\"","lint:check":"eslint \\"src/**/*.ts\\" \\"test/**/*.ts\\" && prettier --check \\"src/**/*.ts\\" \\"test/**/*.ts\\"","depcheck":"depcheck ."},"dependencies":{"axios":"^0.21.1","elliptic":"^6.5.4","isomorphic-ws":"^4.0.1","js-sha3":"^0.8.0","tar-js":"^0.3.0","ws":"^7.5.0"},"devDependencies":{"@babel/core":"^7.14.6","@babel/plugin-proposal-class-properties":"^7.14.5","@babel/plugin-transform-runtime":"^7.14.5","@babel/preset-env":"^7.14.7","@babel/preset-typescript":"^7.14.5","@commitlint/cli":"^12.1.1","@commitlint/config-conventional":"^12.1.4","@fluffy-spoon/substitute":"^1.208.0","@jest/test-sequencer":"^27.0.5","@jest/types":"^27.0.2","@types/content-disposition":"^0.5.3","@types/debug":"^4.1.5","@types/elliptic":"^6.4.12","@types/expect-puppeteer":"^4.4.5","@types/glob":"^7.1.3","@types/jest":"^26.0.23","@types/jest-environment-puppeteer":"^4.4.1","@types/node":"^15.12.4","@types/puppeteer":"^5.4.3","@types/tar-stream":"^2.2.0","@types/terser-webpack-plugin":"^5.0.3","@types/ws":"^7.4.5","@typescript-eslint/eslint-plugin":"^4.28.0","@typescript-eslint/parser":"^4.28.0","babel-jest":"^27.0.5","babel-loader":"^8.2.2","bufferutil":"^4.0.3","debug":"^4.3.1","depcheck":"^1.4.0","eslint":"^7.29.0","eslint-config-prettier":"^8.3.0","eslint-plugin-jest":"^24.3.6","eslint-plugin-prettier":"^3.4.0","eslint-plugin-unused-imports":"^1.1.1","glob":"^7.1.7","husky":"^6.0.0","jest":"^27.0.5","jest-puppeteer":"^5.0.4","nock":"^13.1.0","prettier":"^2.3.1","puppeteer":"^9.1.1","rimraf":"^3.0.2","terser-webpack-plugin":"^5.1.3","ts-node":"^10.0.0","typedoc":"^0.21.0","typedoc-plugin-markdown":"^3.10.0","typescript":"^4.3.4","utf-8-validate":"^5.0.5","webpack":"^5.40.0","webpack-bundle-analyzer":"^4.4.1","webpack-cli":"^4.7.2"},"engines":{"node":">=12.0.0","npm":">=6.0.0","bee":"1.1.0-80cdea19"}}');
      },
      6601: () => {},
      9214: () => {},
      233: () => {},
      4538: () => {}
    },
        t = {};

    function r(n) {
      var i = t[n];
      if (void 0 !== i) return i.exports;
      var a = t[n] = {
        id: n,
        loaded: !1,
        exports: {}
      };
      return e[n].call(a.exports, a, a.exports, r), a.loaded = !0, a.exports;
    }

    return r.amdO = {}, r.g = function () {
      if ("object" == typeof globalThis) return globalThis;

      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    }(), r.nmd = e => (e.paths = [], e.children || (e.children = []), e), r(8809);
  })();
});

/***/ }),

/***/ "./node_modules/bn.js/lib/bn.js":
/*!**************************************!*\
  !*** ./node_modules/bn.js/lib/bn.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
(function (module, exports) {
  'use strict'; // Utils

  function assert(val, msg) {
    if (!val) throw new Error(msg || 'Assertion failed');
  } // Could use `inherits` module, but don't want to move from single file
  // architecture yet.


  function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;

    var TempCtor = function () {};

    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  } // BN


  function BN(number, base, endian) {
    if (BN.isBN(number)) {
      return number;
    }

    this.negative = 0;
    this.words = null;
    this.length = 0; // Reduction context

    this.red = null;

    if (number !== null) {
      if (base === 'le' || base === 'be') {
        endian = base;
        base = 10;
      }

      this._init(number || 0, base || 10, endian || 'be');
    }
  }

  if (typeof module === 'object') {
    module.exports = BN;
  } else {
    exports.BN = BN;
  }

  BN.BN = BN;
  BN.wordSize = 26;
  var Buffer;

  try {
    if (typeof window !== 'undefined' && typeof window.Buffer !== 'undefined') {
      Buffer = window.Buffer;
    } else {
      Buffer = (__webpack_require__(/*! buffer */ "?8131").Buffer);
    }
  } catch (e) {}

  BN.isBN = function isBN(num) {
    if (num instanceof BN) {
      return true;
    }

    return num !== null && typeof num === 'object' && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
  };

  BN.max = function max(left, right) {
    if (left.cmp(right) > 0) return left;
    return right;
  };

  BN.min = function min(left, right) {
    if (left.cmp(right) < 0) return left;
    return right;
  };

  BN.prototype._init = function init(number, base, endian) {
    if (typeof number === 'number') {
      return this._initNumber(number, base, endian);
    }

    if (typeof number === 'object') {
      return this._initArray(number, base, endian);
    }

    if (base === 'hex') {
      base = 16;
    }

    assert(base === (base | 0) && base >= 2 && base <= 36);
    number = number.toString().replace(/\s+/g, '');
    var start = 0;

    if (number[0] === '-') {
      start++;
      this.negative = 1;
    }

    if (start < number.length) {
      if (base === 16) {
        this._parseHex(number, start, endian);
      } else {
        this._parseBase(number, base, start);

        if (endian === 'le') {
          this._initArray(this.toArray(), base, endian);
        }
      }
    }
  };

  BN.prototype._initNumber = function _initNumber(number, base, endian) {
    if (number < 0) {
      this.negative = 1;
      number = -number;
    }

    if (number < 0x4000000) {
      this.words = [number & 0x3ffffff];
      this.length = 1;
    } else if (number < 0x10000000000000) {
      this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff];
      this.length = 2;
    } else {
      assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)

      this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff, 1];
      this.length = 3;
    }

    if (endian !== 'le') return; // Reverse the bytes

    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initArray = function _initArray(number, base, endian) {
    // Perhaps a Uint8Array
    assert(typeof number.length === 'number');

    if (number.length <= 0) {
      this.words = [0];
      this.length = 1;
      return this;
    }

    this.length = Math.ceil(number.length / 3);
    this.words = new Array(this.length);

    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    var off = 0;

    if (endian === 'be') {
      for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
        w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
        this.words[j] |= w << off & 0x3ffffff;
        this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
        off += 24;

        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    } else if (endian === 'le') {
      for (i = 0, j = 0; i < number.length; i += 3) {
        w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
        this.words[j] |= w << off & 0x3ffffff;
        this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
        off += 24;

        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    }

    return this.strip();
  };

  function parseHex4Bits(string, index) {
    var c = string.charCodeAt(index); // 'A' - 'F'

    if (c >= 65 && c <= 70) {
      return c - 55; // 'a' - 'f'
    } else if (c >= 97 && c <= 102) {
      return c - 87; // '0' - '9'
    } else {
      return c - 48 & 0xf;
    }
  }

  function parseHexByte(string, lowerBound, index) {
    var r = parseHex4Bits(string, index);

    if (index - 1 >= lowerBound) {
      r |= parseHex4Bits(string, index - 1) << 4;
    }

    return r;
  }

  BN.prototype._parseHex = function _parseHex(number, start, endian) {
    // Create possibly bigger array to ensure that it fits the number
    this.length = Math.ceil((number.length - start) / 6);
    this.words = new Array(this.length);

    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    } // 24-bits chunks


    var off = 0;
    var j = 0;
    var w;

    if (endian === 'be') {
      for (i = number.length - 1; i >= start; i -= 2) {
        w = parseHexByte(number, start, i) << off;
        this.words[j] |= w & 0x3ffffff;

        if (off >= 18) {
          off -= 18;
          j += 1;
          this.words[j] |= w >>> 26;
        } else {
          off += 8;
        }
      }
    } else {
      var parseLength = number.length - start;

      for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
        w = parseHexByte(number, start, i) << off;
        this.words[j] |= w & 0x3ffffff;

        if (off >= 18) {
          off -= 18;
          j += 1;
          this.words[j] |= w >>> 26;
        } else {
          off += 8;
        }
      }
    }

    this.strip();
  };

  function parseBase(str, start, end, mul) {
    var r = 0;
    var len = Math.min(str.length, end);

    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;
      r *= mul; // 'a'

      if (c >= 49) {
        r += c - 49 + 0xa; // 'A'
      } else if (c >= 17) {
        r += c - 17 + 0xa; // '0' - '9'
      } else {
        r += c;
      }
    }

    return r;
  }

  BN.prototype._parseBase = function _parseBase(number, base, start) {
    // Initialize as zero
    this.words = [0];
    this.length = 1; // Find length of limb in base

    for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
      limbLen++;
    }

    limbLen--;
    limbPow = limbPow / base | 0;
    var total = number.length - start;
    var mod = total % limbLen;
    var end = Math.min(total, total - mod) + start;
    var word = 0;

    for (var i = start; i < end; i += limbLen) {
      word = parseBase(number, i, i + limbLen, base);
      this.imuln(limbPow);

      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }

    if (mod !== 0) {
      var pow = 1;
      word = parseBase(number, i, number.length, base);

      for (i = 0; i < mod; i++) {
        pow *= base;
      }

      this.imuln(pow);

      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }

    this.strip();
  };

  BN.prototype.copy = function copy(dest) {
    dest.words = new Array(this.length);

    for (var i = 0; i < this.length; i++) {
      dest.words[i] = this.words[i];
    }

    dest.length = this.length;
    dest.negative = this.negative;
    dest.red = this.red;
  };

  BN.prototype.clone = function clone() {
    var r = new BN(null);
    this.copy(r);
    return r;
  };

  BN.prototype._expand = function _expand(size) {
    while (this.length < size) {
      this.words[this.length++] = 0;
    }

    return this;
  }; // Remove leading `0` from `this`


  BN.prototype.strip = function strip() {
    while (this.length > 1 && this.words[this.length - 1] === 0) {
      this.length--;
    }

    return this._normSign();
  };

  BN.prototype._normSign = function _normSign() {
    // -0 = 0
    if (this.length === 1 && this.words[0] === 0) {
      this.negative = 0;
    }

    return this;
  };

  BN.prototype.inspect = function inspect() {
    return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
  };
  /*
   var zeros = [];
  var groupSizes = [];
  var groupBases = [];
   var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }
   */


  var zeros = ['', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000'];
  var groupSizes = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  var groupBases = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

  BN.prototype.toString = function toString(base, padding) {
    base = base || 10;
    padding = padding | 0 || 1;
    var out;

    if (base === 16 || base === 'hex') {
      out = '';
      var off = 0;
      var carry = 0;

      for (var i = 0; i < this.length; i++) {
        var w = this.words[i];
        var word = ((w << off | carry) & 0xffffff).toString(16);
        carry = w >>> 24 - off & 0xffffff;

        if (carry !== 0 || i !== this.length - 1) {
          out = zeros[6 - word.length] + word + out;
        } else {
          out = word + out;
        }

        off += 2;

        if (off >= 26) {
          off -= 26;
          i--;
        }
      }

      if (carry !== 0) {
        out = carry.toString(16) + out;
      }

      while (out.length % padding !== 0) {
        out = '0' + out;
      }

      if (this.negative !== 0) {
        out = '-' + out;
      }

      return out;
    }

    if (base === (base | 0) && base >= 2 && base <= 36) {
      // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
      var groupSize = groupSizes[base]; // var groupBase = Math.pow(base, groupSize);

      var groupBase = groupBases[base];
      out = '';
      var c = this.clone();
      c.negative = 0;

      while (!c.isZero()) {
        var r = c.modn(groupBase).toString(base);
        c = c.idivn(groupBase);

        if (!c.isZero()) {
          out = zeros[groupSize - r.length] + r + out;
        } else {
          out = r + out;
        }
      }

      if (this.isZero()) {
        out = '0' + out;
      }

      while (out.length % padding !== 0) {
        out = '0' + out;
      }

      if (this.negative !== 0) {
        out = '-' + out;
      }

      return out;
    }

    assert(false, 'Base should be between 2 and 36');
  };

  BN.prototype.toNumber = function toNumber() {
    var ret = this.words[0];

    if (this.length === 2) {
      ret += this.words[1] * 0x4000000;
    } else if (this.length === 3 && this.words[2] === 0x01) {
      // NOTE: at this stage it is known that the top bit is set
      ret += 0x10000000000000 + this.words[1] * 0x4000000;
    } else if (this.length > 2) {
      assert(false, 'Number can only safely store up to 53 bits');
    }

    return this.negative !== 0 ? -ret : ret;
  };

  BN.prototype.toJSON = function toJSON() {
    return this.toString(16);
  };

  BN.prototype.toBuffer = function toBuffer(endian, length) {
    assert(typeof Buffer !== 'undefined');
    return this.toArrayLike(Buffer, endian, length);
  };

  BN.prototype.toArray = function toArray(endian, length) {
    return this.toArrayLike(Array, endian, length);
  };

  BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
    var byteLength = this.byteLength();
    var reqLength = length || Math.max(1, byteLength);
    assert(byteLength <= reqLength, 'byte array longer than desired length');
    assert(reqLength > 0, 'Requested array length <= 0');
    this.strip();
    var littleEndian = endian === 'le';
    var res = new ArrayType(reqLength);
    var b, i;
    var q = this.clone();

    if (!littleEndian) {
      // Assume big-endian
      for (i = 0; i < reqLength - byteLength; i++) {
        res[i] = 0;
      }

      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);
        res[reqLength - i - 1] = b;
      }
    } else {
      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);
        res[i] = b;
      }

      for (; i < reqLength; i++) {
        res[i] = 0;
      }
    }

    return res;
  };

  if (Math.clz32) {
    BN.prototype._countBits = function _countBits(w) {
      return 32 - Math.clz32(w);
    };
  } else {
    BN.prototype._countBits = function _countBits(w) {
      var t = w;
      var r = 0;

      if (t >= 0x1000) {
        r += 13;
        t >>>= 13;
      }

      if (t >= 0x40) {
        r += 7;
        t >>>= 7;
      }

      if (t >= 0x8) {
        r += 4;
        t >>>= 4;
      }

      if (t >= 0x02) {
        r += 2;
        t >>>= 2;
      }

      return r + t;
    };
  }

  BN.prototype._zeroBits = function _zeroBits(w) {
    // Short-cut
    if (w === 0) return 26;
    var t = w;
    var r = 0;

    if ((t & 0x1fff) === 0) {
      r += 13;
      t >>>= 13;
    }

    if ((t & 0x7f) === 0) {
      r += 7;
      t >>>= 7;
    }

    if ((t & 0xf) === 0) {
      r += 4;
      t >>>= 4;
    }

    if ((t & 0x3) === 0) {
      r += 2;
      t >>>= 2;
    }

    if ((t & 0x1) === 0) {
      r++;
    }

    return r;
  }; // Return number of used bits in a BN


  BN.prototype.bitLength = function bitLength() {
    var w = this.words[this.length - 1];

    var hi = this._countBits(w);

    return (this.length - 1) * 26 + hi;
  };

  function toBitArray(num) {
    var w = new Array(num.bitLength());

    for (var bit = 0; bit < w.length; bit++) {
      var off = bit / 26 | 0;
      var wbit = bit % 26;
      w[bit] = (num.words[off] & 1 << wbit) >>> wbit;
    }

    return w;
  } // Number of trailing zero bits


  BN.prototype.zeroBits = function zeroBits() {
    if (this.isZero()) return 0;
    var r = 0;

    for (var i = 0; i < this.length; i++) {
      var b = this._zeroBits(this.words[i]);

      r += b;
      if (b !== 26) break;
    }

    return r;
  };

  BN.prototype.byteLength = function byteLength() {
    return Math.ceil(this.bitLength() / 8);
  };

  BN.prototype.toTwos = function toTwos(width) {
    if (this.negative !== 0) {
      return this.abs().inotn(width).iaddn(1);
    }

    return this.clone();
  };

  BN.prototype.fromTwos = function fromTwos(width) {
    if (this.testn(width - 1)) {
      return this.notn(width).iaddn(1).ineg();
    }

    return this.clone();
  };

  BN.prototype.isNeg = function isNeg() {
    return this.negative !== 0;
  }; // Return negative clone of `this`


  BN.prototype.neg = function neg() {
    return this.clone().ineg();
  };

  BN.prototype.ineg = function ineg() {
    if (!this.isZero()) {
      this.negative ^= 1;
    }

    return this;
  }; // Or `num` with `this` in-place


  BN.prototype.iuor = function iuor(num) {
    while (this.length < num.length) {
      this.words[this.length++] = 0;
    }

    for (var i = 0; i < num.length; i++) {
      this.words[i] = this.words[i] | num.words[i];
    }

    return this.strip();
  };

  BN.prototype.ior = function ior(num) {
    assert((this.negative | num.negative) === 0);
    return this.iuor(num);
  }; // Or `num` with `this`


  BN.prototype.or = function or(num) {
    if (this.length > num.length) return this.clone().ior(num);
    return num.clone().ior(this);
  };

  BN.prototype.uor = function uor(num) {
    if (this.length > num.length) return this.clone().iuor(num);
    return num.clone().iuor(this);
  }; // And `num` with `this` in-place


  BN.prototype.iuand = function iuand(num) {
    // b = min-length(num, this)
    var b;

    if (this.length > num.length) {
      b = num;
    } else {
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = this.words[i] & num.words[i];
    }

    this.length = b.length;
    return this.strip();
  };

  BN.prototype.iand = function iand(num) {
    assert((this.negative | num.negative) === 0);
    return this.iuand(num);
  }; // And `num` with `this`


  BN.prototype.and = function and(num) {
    if (this.length > num.length) return this.clone().iand(num);
    return num.clone().iand(this);
  };

  BN.prototype.uand = function uand(num) {
    if (this.length > num.length) return this.clone().iuand(num);
    return num.clone().iuand(this);
  }; // Xor `num` with `this` in-place


  BN.prototype.iuxor = function iuxor(num) {
    // a.length > b.length
    var a;
    var b;

    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = a.words[i] ^ b.words[i];
    }

    if (this !== a) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = a.length;
    return this.strip();
  };

  BN.prototype.ixor = function ixor(num) {
    assert((this.negative | num.negative) === 0);
    return this.iuxor(num);
  }; // Xor `num` with `this`


  BN.prototype.xor = function xor(num) {
    if (this.length > num.length) return this.clone().ixor(num);
    return num.clone().ixor(this);
  };

  BN.prototype.uxor = function uxor(num) {
    if (this.length > num.length) return this.clone().iuxor(num);
    return num.clone().iuxor(this);
  }; // Not ``this`` with ``width`` bitwidth


  BN.prototype.inotn = function inotn(width) {
    assert(typeof width === 'number' && width >= 0);
    var bytesNeeded = Math.ceil(width / 26) | 0;
    var bitsLeft = width % 26; // Extend the buffer with leading zeroes

    this._expand(bytesNeeded);

    if (bitsLeft > 0) {
      bytesNeeded--;
    } // Handle complete words


    for (var i = 0; i < bytesNeeded; i++) {
      this.words[i] = ~this.words[i] & 0x3ffffff;
    } // Handle the residue


    if (bitsLeft > 0) {
      this.words[i] = ~this.words[i] & 0x3ffffff >> 26 - bitsLeft;
    } // And remove leading zeroes


    return this.strip();
  };

  BN.prototype.notn = function notn(width) {
    return this.clone().inotn(width);
  }; // Set `bit` of `this`


  BN.prototype.setn = function setn(bit, val) {
    assert(typeof bit === 'number' && bit >= 0);
    var off = bit / 26 | 0;
    var wbit = bit % 26;

    this._expand(off + 1);

    if (val) {
      this.words[off] = this.words[off] | 1 << wbit;
    } else {
      this.words[off] = this.words[off] & ~(1 << wbit);
    }

    return this.strip();
  }; // Add `num` to `this` in-place


  BN.prototype.iadd = function iadd(num) {
    var r; // negative + positive

    if (this.negative !== 0 && num.negative === 0) {
      this.negative = 0;
      r = this.isub(num);
      this.negative ^= 1;
      return this._normSign(); // positive + negative
    } else if (this.negative === 0 && num.negative !== 0) {
      num.negative = 0;
      r = this.isub(num);
      num.negative = 1;
      return r._normSign();
    } // a.length > b.length


    var a, b;

    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;

    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }

    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }

    this.length = a.length;

    if (carry !== 0) {
      this.words[this.length] = carry;
      this.length++; // Copy the rest of the words
    } else if (a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    return this;
  }; // Add `num` to `this`


  BN.prototype.add = function add(num) {
    var res;

    if (num.negative !== 0 && this.negative === 0) {
      num.negative = 0;
      res = this.sub(num);
      num.negative ^= 1;
      return res;
    } else if (num.negative === 0 && this.negative !== 0) {
      this.negative = 0;
      res = num.sub(this);
      this.negative = 1;
      return res;
    }

    if (this.length > num.length) return this.clone().iadd(num);
    return num.clone().iadd(this);
  }; // Subtract `num` from `this` in-place


  BN.prototype.isub = function isub(num) {
    // this - (-num) = this + num
    if (num.negative !== 0) {
      num.negative = 0;
      var r = this.iadd(num);
      num.negative = 1;
      return r._normSign(); // -this - num = -(this + num)
    } else if (this.negative !== 0) {
      this.negative = 0;
      this.iadd(num);
      this.negative = 1;
      return this._normSign();
    } // At this point both numbers are positive


    var cmp = this.cmp(num); // Optimization - zeroify

    if (cmp === 0) {
      this.negative = 0;
      this.length = 1;
      this.words[0] = 0;
      return this;
    } // a > b


    var a, b;

    if (cmp > 0) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;

    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }

    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    } // Copy rest of the words


    if (carry === 0 && i < a.length && a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = Math.max(this.length, i);

    if (a !== this) {
      this.negative = 1;
    }

    return this.strip();
  }; // Subtract `num` from `this`


  BN.prototype.sub = function sub(num) {
    return this.clone().isub(num);
  };

  function smallMulTo(self, num, out) {
    out.negative = num.negative ^ self.negative;
    var len = self.length + num.length | 0;
    out.length = len;
    len = len - 1 | 0; // Peel one iteration (compiler can't do it, because of code complexity)

    var a = self.words[0] | 0;
    var b = num.words[0] | 0;
    var r = a * b;
    var lo = r & 0x3ffffff;
    var carry = r / 0x4000000 | 0;
    out.words[0] = lo;

    for (var k = 1; k < len; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = carry >>> 26;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);

      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = k - j | 0;
        a = self.words[i] | 0;
        b = num.words[j] | 0;
        r = a * b + rword;
        ncarry += r / 0x4000000 | 0;
        rword = r & 0x3ffffff;
      }

      out.words[k] = rword | 0;
      carry = ncarry | 0;
    }

    if (carry !== 0) {
      out.words[k] = carry | 0;
    } else {
      out.length--;
    }

    return out.strip();
  } // TODO(indutny): it may be reasonable to omit it for users who don't need
  // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
  // multiplication (like elliptic secp256k1).


  var comb10MulTo = function comb10MulTo(self, num, out) {
    var a = self.words;
    var b = num.words;
    var o = out.words;
    var c = 0;
    var lo;
    var mid;
    var hi;
    var a0 = a[0] | 0;
    var al0 = a0 & 0x1fff;
    var ah0 = a0 >>> 13;
    var a1 = a[1] | 0;
    var al1 = a1 & 0x1fff;
    var ah1 = a1 >>> 13;
    var a2 = a[2] | 0;
    var al2 = a2 & 0x1fff;
    var ah2 = a2 >>> 13;
    var a3 = a[3] | 0;
    var al3 = a3 & 0x1fff;
    var ah3 = a3 >>> 13;
    var a4 = a[4] | 0;
    var al4 = a4 & 0x1fff;
    var ah4 = a4 >>> 13;
    var a5 = a[5] | 0;
    var al5 = a5 & 0x1fff;
    var ah5 = a5 >>> 13;
    var a6 = a[6] | 0;
    var al6 = a6 & 0x1fff;
    var ah6 = a6 >>> 13;
    var a7 = a[7] | 0;
    var al7 = a7 & 0x1fff;
    var ah7 = a7 >>> 13;
    var a8 = a[8] | 0;
    var al8 = a8 & 0x1fff;
    var ah8 = a8 >>> 13;
    var a9 = a[9] | 0;
    var al9 = a9 & 0x1fff;
    var ah9 = a9 >>> 13;
    var b0 = b[0] | 0;
    var bl0 = b0 & 0x1fff;
    var bh0 = b0 >>> 13;
    var b1 = b[1] | 0;
    var bl1 = b1 & 0x1fff;
    var bh1 = b1 >>> 13;
    var b2 = b[2] | 0;
    var bl2 = b2 & 0x1fff;
    var bh2 = b2 >>> 13;
    var b3 = b[3] | 0;
    var bl3 = b3 & 0x1fff;
    var bh3 = b3 >>> 13;
    var b4 = b[4] | 0;
    var bl4 = b4 & 0x1fff;
    var bh4 = b4 >>> 13;
    var b5 = b[5] | 0;
    var bl5 = b5 & 0x1fff;
    var bh5 = b5 >>> 13;
    var b6 = b[6] | 0;
    var bl6 = b6 & 0x1fff;
    var bh6 = b6 >>> 13;
    var b7 = b[7] | 0;
    var bl7 = b7 & 0x1fff;
    var bh7 = b7 >>> 13;
    var b8 = b[8] | 0;
    var bl8 = b8 & 0x1fff;
    var bh8 = b8 >>> 13;
    var b9 = b[9] | 0;
    var bl9 = b9 & 0x1fff;
    var bh9 = b9 >>> 13;
    out.negative = self.negative ^ num.negative;
    out.length = 19;
    /* k = 0 */

    lo = Math.imul(al0, bl0);
    mid = Math.imul(al0, bh0);
    mid = mid + Math.imul(ah0, bl0) | 0;
    hi = Math.imul(ah0, bh0);
    var w0 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
    c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
    w0 &= 0x3ffffff;
    /* k = 1 */

    lo = Math.imul(al1, bl0);
    mid = Math.imul(al1, bh0);
    mid = mid + Math.imul(ah1, bl0) | 0;
    hi = Math.imul(ah1, bh0);
    lo = lo + Math.imul(al0, bl1) | 0;
    mid = mid + Math.imul(al0, bh1) | 0;
    mid = mid + Math.imul(ah0, bl1) | 0;
    hi = hi + Math.imul(ah0, bh1) | 0;
    var w1 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
    c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
    w1 &= 0x3ffffff;
    /* k = 2 */

    lo = Math.imul(al2, bl0);
    mid = Math.imul(al2, bh0);
    mid = mid + Math.imul(ah2, bl0) | 0;
    hi = Math.imul(ah2, bh0);
    lo = lo + Math.imul(al1, bl1) | 0;
    mid = mid + Math.imul(al1, bh1) | 0;
    mid = mid + Math.imul(ah1, bl1) | 0;
    hi = hi + Math.imul(ah1, bh1) | 0;
    lo = lo + Math.imul(al0, bl2) | 0;
    mid = mid + Math.imul(al0, bh2) | 0;
    mid = mid + Math.imul(ah0, bl2) | 0;
    hi = hi + Math.imul(ah0, bh2) | 0;
    var w2 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
    c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
    w2 &= 0x3ffffff;
    /* k = 3 */

    lo = Math.imul(al3, bl0);
    mid = Math.imul(al3, bh0);
    mid = mid + Math.imul(ah3, bl0) | 0;
    hi = Math.imul(ah3, bh0);
    lo = lo + Math.imul(al2, bl1) | 0;
    mid = mid + Math.imul(al2, bh1) | 0;
    mid = mid + Math.imul(ah2, bl1) | 0;
    hi = hi + Math.imul(ah2, bh1) | 0;
    lo = lo + Math.imul(al1, bl2) | 0;
    mid = mid + Math.imul(al1, bh2) | 0;
    mid = mid + Math.imul(ah1, bl2) | 0;
    hi = hi + Math.imul(ah1, bh2) | 0;
    lo = lo + Math.imul(al0, bl3) | 0;
    mid = mid + Math.imul(al0, bh3) | 0;
    mid = mid + Math.imul(ah0, bl3) | 0;
    hi = hi + Math.imul(ah0, bh3) | 0;
    var w3 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
    c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
    w3 &= 0x3ffffff;
    /* k = 4 */

    lo = Math.imul(al4, bl0);
    mid = Math.imul(al4, bh0);
    mid = mid + Math.imul(ah4, bl0) | 0;
    hi = Math.imul(ah4, bh0);
    lo = lo + Math.imul(al3, bl1) | 0;
    mid = mid + Math.imul(al3, bh1) | 0;
    mid = mid + Math.imul(ah3, bl1) | 0;
    hi = hi + Math.imul(ah3, bh1) | 0;
    lo = lo + Math.imul(al2, bl2) | 0;
    mid = mid + Math.imul(al2, bh2) | 0;
    mid = mid + Math.imul(ah2, bl2) | 0;
    hi = hi + Math.imul(ah2, bh2) | 0;
    lo = lo + Math.imul(al1, bl3) | 0;
    mid = mid + Math.imul(al1, bh3) | 0;
    mid = mid + Math.imul(ah1, bl3) | 0;
    hi = hi + Math.imul(ah1, bh3) | 0;
    lo = lo + Math.imul(al0, bl4) | 0;
    mid = mid + Math.imul(al0, bh4) | 0;
    mid = mid + Math.imul(ah0, bl4) | 0;
    hi = hi + Math.imul(ah0, bh4) | 0;
    var w4 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
    c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
    w4 &= 0x3ffffff;
    /* k = 5 */

    lo = Math.imul(al5, bl0);
    mid = Math.imul(al5, bh0);
    mid = mid + Math.imul(ah5, bl0) | 0;
    hi = Math.imul(ah5, bh0);
    lo = lo + Math.imul(al4, bl1) | 0;
    mid = mid + Math.imul(al4, bh1) | 0;
    mid = mid + Math.imul(ah4, bl1) | 0;
    hi = hi + Math.imul(ah4, bh1) | 0;
    lo = lo + Math.imul(al3, bl2) | 0;
    mid = mid + Math.imul(al3, bh2) | 0;
    mid = mid + Math.imul(ah3, bl2) | 0;
    hi = hi + Math.imul(ah3, bh2) | 0;
    lo = lo + Math.imul(al2, bl3) | 0;
    mid = mid + Math.imul(al2, bh3) | 0;
    mid = mid + Math.imul(ah2, bl3) | 0;
    hi = hi + Math.imul(ah2, bh3) | 0;
    lo = lo + Math.imul(al1, bl4) | 0;
    mid = mid + Math.imul(al1, bh4) | 0;
    mid = mid + Math.imul(ah1, bl4) | 0;
    hi = hi + Math.imul(ah1, bh4) | 0;
    lo = lo + Math.imul(al0, bl5) | 0;
    mid = mid + Math.imul(al0, bh5) | 0;
    mid = mid + Math.imul(ah0, bl5) | 0;
    hi = hi + Math.imul(ah0, bh5) | 0;
    var w5 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
    c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
    w5 &= 0x3ffffff;
    /* k = 6 */

    lo = Math.imul(al6, bl0);
    mid = Math.imul(al6, bh0);
    mid = mid + Math.imul(ah6, bl0) | 0;
    hi = Math.imul(ah6, bh0);
    lo = lo + Math.imul(al5, bl1) | 0;
    mid = mid + Math.imul(al5, bh1) | 0;
    mid = mid + Math.imul(ah5, bl1) | 0;
    hi = hi + Math.imul(ah5, bh1) | 0;
    lo = lo + Math.imul(al4, bl2) | 0;
    mid = mid + Math.imul(al4, bh2) | 0;
    mid = mid + Math.imul(ah4, bl2) | 0;
    hi = hi + Math.imul(ah4, bh2) | 0;
    lo = lo + Math.imul(al3, bl3) | 0;
    mid = mid + Math.imul(al3, bh3) | 0;
    mid = mid + Math.imul(ah3, bl3) | 0;
    hi = hi + Math.imul(ah3, bh3) | 0;
    lo = lo + Math.imul(al2, bl4) | 0;
    mid = mid + Math.imul(al2, bh4) | 0;
    mid = mid + Math.imul(ah2, bl4) | 0;
    hi = hi + Math.imul(ah2, bh4) | 0;
    lo = lo + Math.imul(al1, bl5) | 0;
    mid = mid + Math.imul(al1, bh5) | 0;
    mid = mid + Math.imul(ah1, bl5) | 0;
    hi = hi + Math.imul(ah1, bh5) | 0;
    lo = lo + Math.imul(al0, bl6) | 0;
    mid = mid + Math.imul(al0, bh6) | 0;
    mid = mid + Math.imul(ah0, bl6) | 0;
    hi = hi + Math.imul(ah0, bh6) | 0;
    var w6 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
    c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
    w6 &= 0x3ffffff;
    /* k = 7 */

    lo = Math.imul(al7, bl0);
    mid = Math.imul(al7, bh0);
    mid = mid + Math.imul(ah7, bl0) | 0;
    hi = Math.imul(ah7, bh0);
    lo = lo + Math.imul(al6, bl1) | 0;
    mid = mid + Math.imul(al6, bh1) | 0;
    mid = mid + Math.imul(ah6, bl1) | 0;
    hi = hi + Math.imul(ah6, bh1) | 0;
    lo = lo + Math.imul(al5, bl2) | 0;
    mid = mid + Math.imul(al5, bh2) | 0;
    mid = mid + Math.imul(ah5, bl2) | 0;
    hi = hi + Math.imul(ah5, bh2) | 0;
    lo = lo + Math.imul(al4, bl3) | 0;
    mid = mid + Math.imul(al4, bh3) | 0;
    mid = mid + Math.imul(ah4, bl3) | 0;
    hi = hi + Math.imul(ah4, bh3) | 0;
    lo = lo + Math.imul(al3, bl4) | 0;
    mid = mid + Math.imul(al3, bh4) | 0;
    mid = mid + Math.imul(ah3, bl4) | 0;
    hi = hi + Math.imul(ah3, bh4) | 0;
    lo = lo + Math.imul(al2, bl5) | 0;
    mid = mid + Math.imul(al2, bh5) | 0;
    mid = mid + Math.imul(ah2, bl5) | 0;
    hi = hi + Math.imul(ah2, bh5) | 0;
    lo = lo + Math.imul(al1, bl6) | 0;
    mid = mid + Math.imul(al1, bh6) | 0;
    mid = mid + Math.imul(ah1, bl6) | 0;
    hi = hi + Math.imul(ah1, bh6) | 0;
    lo = lo + Math.imul(al0, bl7) | 0;
    mid = mid + Math.imul(al0, bh7) | 0;
    mid = mid + Math.imul(ah0, bl7) | 0;
    hi = hi + Math.imul(ah0, bh7) | 0;
    var w7 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
    c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
    w7 &= 0x3ffffff;
    /* k = 8 */

    lo = Math.imul(al8, bl0);
    mid = Math.imul(al8, bh0);
    mid = mid + Math.imul(ah8, bl0) | 0;
    hi = Math.imul(ah8, bh0);
    lo = lo + Math.imul(al7, bl1) | 0;
    mid = mid + Math.imul(al7, bh1) | 0;
    mid = mid + Math.imul(ah7, bl1) | 0;
    hi = hi + Math.imul(ah7, bh1) | 0;
    lo = lo + Math.imul(al6, bl2) | 0;
    mid = mid + Math.imul(al6, bh2) | 0;
    mid = mid + Math.imul(ah6, bl2) | 0;
    hi = hi + Math.imul(ah6, bh2) | 0;
    lo = lo + Math.imul(al5, bl3) | 0;
    mid = mid + Math.imul(al5, bh3) | 0;
    mid = mid + Math.imul(ah5, bl3) | 0;
    hi = hi + Math.imul(ah5, bh3) | 0;
    lo = lo + Math.imul(al4, bl4) | 0;
    mid = mid + Math.imul(al4, bh4) | 0;
    mid = mid + Math.imul(ah4, bl4) | 0;
    hi = hi + Math.imul(ah4, bh4) | 0;
    lo = lo + Math.imul(al3, bl5) | 0;
    mid = mid + Math.imul(al3, bh5) | 0;
    mid = mid + Math.imul(ah3, bl5) | 0;
    hi = hi + Math.imul(ah3, bh5) | 0;
    lo = lo + Math.imul(al2, bl6) | 0;
    mid = mid + Math.imul(al2, bh6) | 0;
    mid = mid + Math.imul(ah2, bl6) | 0;
    hi = hi + Math.imul(ah2, bh6) | 0;
    lo = lo + Math.imul(al1, bl7) | 0;
    mid = mid + Math.imul(al1, bh7) | 0;
    mid = mid + Math.imul(ah1, bl7) | 0;
    hi = hi + Math.imul(ah1, bh7) | 0;
    lo = lo + Math.imul(al0, bl8) | 0;
    mid = mid + Math.imul(al0, bh8) | 0;
    mid = mid + Math.imul(ah0, bl8) | 0;
    hi = hi + Math.imul(ah0, bh8) | 0;
    var w8 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
    c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
    w8 &= 0x3ffffff;
    /* k = 9 */

    lo = Math.imul(al9, bl0);
    mid = Math.imul(al9, bh0);
    mid = mid + Math.imul(ah9, bl0) | 0;
    hi = Math.imul(ah9, bh0);
    lo = lo + Math.imul(al8, bl1) | 0;
    mid = mid + Math.imul(al8, bh1) | 0;
    mid = mid + Math.imul(ah8, bl1) | 0;
    hi = hi + Math.imul(ah8, bh1) | 0;
    lo = lo + Math.imul(al7, bl2) | 0;
    mid = mid + Math.imul(al7, bh2) | 0;
    mid = mid + Math.imul(ah7, bl2) | 0;
    hi = hi + Math.imul(ah7, bh2) | 0;
    lo = lo + Math.imul(al6, bl3) | 0;
    mid = mid + Math.imul(al6, bh3) | 0;
    mid = mid + Math.imul(ah6, bl3) | 0;
    hi = hi + Math.imul(ah6, bh3) | 0;
    lo = lo + Math.imul(al5, bl4) | 0;
    mid = mid + Math.imul(al5, bh4) | 0;
    mid = mid + Math.imul(ah5, bl4) | 0;
    hi = hi + Math.imul(ah5, bh4) | 0;
    lo = lo + Math.imul(al4, bl5) | 0;
    mid = mid + Math.imul(al4, bh5) | 0;
    mid = mid + Math.imul(ah4, bl5) | 0;
    hi = hi + Math.imul(ah4, bh5) | 0;
    lo = lo + Math.imul(al3, bl6) | 0;
    mid = mid + Math.imul(al3, bh6) | 0;
    mid = mid + Math.imul(ah3, bl6) | 0;
    hi = hi + Math.imul(ah3, bh6) | 0;
    lo = lo + Math.imul(al2, bl7) | 0;
    mid = mid + Math.imul(al2, bh7) | 0;
    mid = mid + Math.imul(ah2, bl7) | 0;
    hi = hi + Math.imul(ah2, bh7) | 0;
    lo = lo + Math.imul(al1, bl8) | 0;
    mid = mid + Math.imul(al1, bh8) | 0;
    mid = mid + Math.imul(ah1, bl8) | 0;
    hi = hi + Math.imul(ah1, bh8) | 0;
    lo = lo + Math.imul(al0, bl9) | 0;
    mid = mid + Math.imul(al0, bh9) | 0;
    mid = mid + Math.imul(ah0, bl9) | 0;
    hi = hi + Math.imul(ah0, bh9) | 0;
    var w9 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
    c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
    w9 &= 0x3ffffff;
    /* k = 10 */

    lo = Math.imul(al9, bl1);
    mid = Math.imul(al9, bh1);
    mid = mid + Math.imul(ah9, bl1) | 0;
    hi = Math.imul(ah9, bh1);
    lo = lo + Math.imul(al8, bl2) | 0;
    mid = mid + Math.imul(al8, bh2) | 0;
    mid = mid + Math.imul(ah8, bl2) | 0;
    hi = hi + Math.imul(ah8, bh2) | 0;
    lo = lo + Math.imul(al7, bl3) | 0;
    mid = mid + Math.imul(al7, bh3) | 0;
    mid = mid + Math.imul(ah7, bl3) | 0;
    hi = hi + Math.imul(ah7, bh3) | 0;
    lo = lo + Math.imul(al6, bl4) | 0;
    mid = mid + Math.imul(al6, bh4) | 0;
    mid = mid + Math.imul(ah6, bl4) | 0;
    hi = hi + Math.imul(ah6, bh4) | 0;
    lo = lo + Math.imul(al5, bl5) | 0;
    mid = mid + Math.imul(al5, bh5) | 0;
    mid = mid + Math.imul(ah5, bl5) | 0;
    hi = hi + Math.imul(ah5, bh5) | 0;
    lo = lo + Math.imul(al4, bl6) | 0;
    mid = mid + Math.imul(al4, bh6) | 0;
    mid = mid + Math.imul(ah4, bl6) | 0;
    hi = hi + Math.imul(ah4, bh6) | 0;
    lo = lo + Math.imul(al3, bl7) | 0;
    mid = mid + Math.imul(al3, bh7) | 0;
    mid = mid + Math.imul(ah3, bl7) | 0;
    hi = hi + Math.imul(ah3, bh7) | 0;
    lo = lo + Math.imul(al2, bl8) | 0;
    mid = mid + Math.imul(al2, bh8) | 0;
    mid = mid + Math.imul(ah2, bl8) | 0;
    hi = hi + Math.imul(ah2, bh8) | 0;
    lo = lo + Math.imul(al1, bl9) | 0;
    mid = mid + Math.imul(al1, bh9) | 0;
    mid = mid + Math.imul(ah1, bl9) | 0;
    hi = hi + Math.imul(ah1, bh9) | 0;
    var w10 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
    c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
    w10 &= 0x3ffffff;
    /* k = 11 */

    lo = Math.imul(al9, bl2);
    mid = Math.imul(al9, bh2);
    mid = mid + Math.imul(ah9, bl2) | 0;
    hi = Math.imul(ah9, bh2);
    lo = lo + Math.imul(al8, bl3) | 0;
    mid = mid + Math.imul(al8, bh3) | 0;
    mid = mid + Math.imul(ah8, bl3) | 0;
    hi = hi + Math.imul(ah8, bh3) | 0;
    lo = lo + Math.imul(al7, bl4) | 0;
    mid = mid + Math.imul(al7, bh4) | 0;
    mid = mid + Math.imul(ah7, bl4) | 0;
    hi = hi + Math.imul(ah7, bh4) | 0;
    lo = lo + Math.imul(al6, bl5) | 0;
    mid = mid + Math.imul(al6, bh5) | 0;
    mid = mid + Math.imul(ah6, bl5) | 0;
    hi = hi + Math.imul(ah6, bh5) | 0;
    lo = lo + Math.imul(al5, bl6) | 0;
    mid = mid + Math.imul(al5, bh6) | 0;
    mid = mid + Math.imul(ah5, bl6) | 0;
    hi = hi + Math.imul(ah5, bh6) | 0;
    lo = lo + Math.imul(al4, bl7) | 0;
    mid = mid + Math.imul(al4, bh7) | 0;
    mid = mid + Math.imul(ah4, bl7) | 0;
    hi = hi + Math.imul(ah4, bh7) | 0;
    lo = lo + Math.imul(al3, bl8) | 0;
    mid = mid + Math.imul(al3, bh8) | 0;
    mid = mid + Math.imul(ah3, bl8) | 0;
    hi = hi + Math.imul(ah3, bh8) | 0;
    lo = lo + Math.imul(al2, bl9) | 0;
    mid = mid + Math.imul(al2, bh9) | 0;
    mid = mid + Math.imul(ah2, bl9) | 0;
    hi = hi + Math.imul(ah2, bh9) | 0;
    var w11 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
    c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
    w11 &= 0x3ffffff;
    /* k = 12 */

    lo = Math.imul(al9, bl3);
    mid = Math.imul(al9, bh3);
    mid = mid + Math.imul(ah9, bl3) | 0;
    hi = Math.imul(ah9, bh3);
    lo = lo + Math.imul(al8, bl4) | 0;
    mid = mid + Math.imul(al8, bh4) | 0;
    mid = mid + Math.imul(ah8, bl4) | 0;
    hi = hi + Math.imul(ah8, bh4) | 0;
    lo = lo + Math.imul(al7, bl5) | 0;
    mid = mid + Math.imul(al7, bh5) | 0;
    mid = mid + Math.imul(ah7, bl5) | 0;
    hi = hi + Math.imul(ah7, bh5) | 0;
    lo = lo + Math.imul(al6, bl6) | 0;
    mid = mid + Math.imul(al6, bh6) | 0;
    mid = mid + Math.imul(ah6, bl6) | 0;
    hi = hi + Math.imul(ah6, bh6) | 0;
    lo = lo + Math.imul(al5, bl7) | 0;
    mid = mid + Math.imul(al5, bh7) | 0;
    mid = mid + Math.imul(ah5, bl7) | 0;
    hi = hi + Math.imul(ah5, bh7) | 0;
    lo = lo + Math.imul(al4, bl8) | 0;
    mid = mid + Math.imul(al4, bh8) | 0;
    mid = mid + Math.imul(ah4, bl8) | 0;
    hi = hi + Math.imul(ah4, bh8) | 0;
    lo = lo + Math.imul(al3, bl9) | 0;
    mid = mid + Math.imul(al3, bh9) | 0;
    mid = mid + Math.imul(ah3, bl9) | 0;
    hi = hi + Math.imul(ah3, bh9) | 0;
    var w12 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
    c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
    w12 &= 0x3ffffff;
    /* k = 13 */

    lo = Math.imul(al9, bl4);
    mid = Math.imul(al9, bh4);
    mid = mid + Math.imul(ah9, bl4) | 0;
    hi = Math.imul(ah9, bh4);
    lo = lo + Math.imul(al8, bl5) | 0;
    mid = mid + Math.imul(al8, bh5) | 0;
    mid = mid + Math.imul(ah8, bl5) | 0;
    hi = hi + Math.imul(ah8, bh5) | 0;
    lo = lo + Math.imul(al7, bl6) | 0;
    mid = mid + Math.imul(al7, bh6) | 0;
    mid = mid + Math.imul(ah7, bl6) | 0;
    hi = hi + Math.imul(ah7, bh6) | 0;
    lo = lo + Math.imul(al6, bl7) | 0;
    mid = mid + Math.imul(al6, bh7) | 0;
    mid = mid + Math.imul(ah6, bl7) | 0;
    hi = hi + Math.imul(ah6, bh7) | 0;
    lo = lo + Math.imul(al5, bl8) | 0;
    mid = mid + Math.imul(al5, bh8) | 0;
    mid = mid + Math.imul(ah5, bl8) | 0;
    hi = hi + Math.imul(ah5, bh8) | 0;
    lo = lo + Math.imul(al4, bl9) | 0;
    mid = mid + Math.imul(al4, bh9) | 0;
    mid = mid + Math.imul(ah4, bl9) | 0;
    hi = hi + Math.imul(ah4, bh9) | 0;
    var w13 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
    c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
    w13 &= 0x3ffffff;
    /* k = 14 */

    lo = Math.imul(al9, bl5);
    mid = Math.imul(al9, bh5);
    mid = mid + Math.imul(ah9, bl5) | 0;
    hi = Math.imul(ah9, bh5);
    lo = lo + Math.imul(al8, bl6) | 0;
    mid = mid + Math.imul(al8, bh6) | 0;
    mid = mid + Math.imul(ah8, bl6) | 0;
    hi = hi + Math.imul(ah8, bh6) | 0;
    lo = lo + Math.imul(al7, bl7) | 0;
    mid = mid + Math.imul(al7, bh7) | 0;
    mid = mid + Math.imul(ah7, bl7) | 0;
    hi = hi + Math.imul(ah7, bh7) | 0;
    lo = lo + Math.imul(al6, bl8) | 0;
    mid = mid + Math.imul(al6, bh8) | 0;
    mid = mid + Math.imul(ah6, bl8) | 0;
    hi = hi + Math.imul(ah6, bh8) | 0;
    lo = lo + Math.imul(al5, bl9) | 0;
    mid = mid + Math.imul(al5, bh9) | 0;
    mid = mid + Math.imul(ah5, bl9) | 0;
    hi = hi + Math.imul(ah5, bh9) | 0;
    var w14 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
    c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
    w14 &= 0x3ffffff;
    /* k = 15 */

    lo = Math.imul(al9, bl6);
    mid = Math.imul(al9, bh6);
    mid = mid + Math.imul(ah9, bl6) | 0;
    hi = Math.imul(ah9, bh6);
    lo = lo + Math.imul(al8, bl7) | 0;
    mid = mid + Math.imul(al8, bh7) | 0;
    mid = mid + Math.imul(ah8, bl7) | 0;
    hi = hi + Math.imul(ah8, bh7) | 0;
    lo = lo + Math.imul(al7, bl8) | 0;
    mid = mid + Math.imul(al7, bh8) | 0;
    mid = mid + Math.imul(ah7, bl8) | 0;
    hi = hi + Math.imul(ah7, bh8) | 0;
    lo = lo + Math.imul(al6, bl9) | 0;
    mid = mid + Math.imul(al6, bh9) | 0;
    mid = mid + Math.imul(ah6, bl9) | 0;
    hi = hi + Math.imul(ah6, bh9) | 0;
    var w15 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
    c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
    w15 &= 0x3ffffff;
    /* k = 16 */

    lo = Math.imul(al9, bl7);
    mid = Math.imul(al9, bh7);
    mid = mid + Math.imul(ah9, bl7) | 0;
    hi = Math.imul(ah9, bh7);
    lo = lo + Math.imul(al8, bl8) | 0;
    mid = mid + Math.imul(al8, bh8) | 0;
    mid = mid + Math.imul(ah8, bl8) | 0;
    hi = hi + Math.imul(ah8, bh8) | 0;
    lo = lo + Math.imul(al7, bl9) | 0;
    mid = mid + Math.imul(al7, bh9) | 0;
    mid = mid + Math.imul(ah7, bl9) | 0;
    hi = hi + Math.imul(ah7, bh9) | 0;
    var w16 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
    c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
    w16 &= 0x3ffffff;
    /* k = 17 */

    lo = Math.imul(al9, bl8);
    mid = Math.imul(al9, bh8);
    mid = mid + Math.imul(ah9, bl8) | 0;
    hi = Math.imul(ah9, bh8);
    lo = lo + Math.imul(al8, bl9) | 0;
    mid = mid + Math.imul(al8, bh9) | 0;
    mid = mid + Math.imul(ah8, bl9) | 0;
    hi = hi + Math.imul(ah8, bh9) | 0;
    var w17 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
    c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
    w17 &= 0x3ffffff;
    /* k = 18 */

    lo = Math.imul(al9, bl9);
    mid = Math.imul(al9, bh9);
    mid = mid + Math.imul(ah9, bl9) | 0;
    hi = Math.imul(ah9, bh9);
    var w18 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
    c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
    w18 &= 0x3ffffff;
    o[0] = w0;
    o[1] = w1;
    o[2] = w2;
    o[3] = w3;
    o[4] = w4;
    o[5] = w5;
    o[6] = w6;
    o[7] = w7;
    o[8] = w8;
    o[9] = w9;
    o[10] = w10;
    o[11] = w11;
    o[12] = w12;
    o[13] = w13;
    o[14] = w14;
    o[15] = w15;
    o[16] = w16;
    o[17] = w17;
    o[18] = w18;

    if (c !== 0) {
      o[19] = c;
      out.length++;
    }

    return out;
  }; // Polyfill comb


  if (!Math.imul) {
    comb10MulTo = smallMulTo;
  }

  function bigMulTo(self, num, out) {
    out.negative = num.negative ^ self.negative;
    out.length = self.length + num.length;
    var carry = 0;
    var hncarry = 0;

    for (var k = 0; k < out.length - 1; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = hncarry;
      hncarry = 0;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);

      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = k - j;
        var a = self.words[i] | 0;
        var b = num.words[j] | 0;
        var r = a * b;
        var lo = r & 0x3ffffff;
        ncarry = ncarry + (r / 0x4000000 | 0) | 0;
        lo = lo + rword | 0;
        rword = lo & 0x3ffffff;
        ncarry = ncarry + (lo >>> 26) | 0;
        hncarry += ncarry >>> 26;
        ncarry &= 0x3ffffff;
      }

      out.words[k] = rword;
      carry = ncarry;
      ncarry = hncarry;
    }

    if (carry !== 0) {
      out.words[k] = carry;
    } else {
      out.length--;
    }

    return out.strip();
  }

  function jumboMulTo(self, num, out) {
    var fftm = new FFTM();
    return fftm.mulp(self, num, out);
  }

  BN.prototype.mulTo = function mulTo(num, out) {
    var res;
    var len = this.length + num.length;

    if (this.length === 10 && num.length === 10) {
      res = comb10MulTo(this, num, out);
    } else if (len < 63) {
      res = smallMulTo(this, num, out);
    } else if (len < 1024) {
      res = bigMulTo(this, num, out);
    } else {
      res = jumboMulTo(this, num, out);
    }

    return res;
  }; // Cooley-Tukey algorithm for FFT
  // slightly revisited to rely on looping instead of recursion


  function FFTM(x, y) {
    this.x = x;
    this.y = y;
  }

  FFTM.prototype.makeRBT = function makeRBT(N) {
    var t = new Array(N);
    var l = BN.prototype._countBits(N) - 1;

    for (var i = 0; i < N; i++) {
      t[i] = this.revBin(i, l, N);
    }

    return t;
  }; // Returns binary-reversed representation of `x`


  FFTM.prototype.revBin = function revBin(x, l, N) {
    if (x === 0 || x === N - 1) return x;
    var rb = 0;

    for (var i = 0; i < l; i++) {
      rb |= (x & 1) << l - i - 1;
      x >>= 1;
    }

    return rb;
  }; // Performs "tweedling" phase, therefore 'emulating'
  // behaviour of the recursive algorithm


  FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
    for (var i = 0; i < N; i++) {
      rtws[i] = rws[rbt[i]];
      itws[i] = iws[rbt[i]];
    }
  };

  FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
    this.permute(rbt, rws, iws, rtws, itws, N);

    for (var s = 1; s < N; s <<= 1) {
      var l = s << 1;
      var rtwdf = Math.cos(2 * Math.PI / l);
      var itwdf = Math.sin(2 * Math.PI / l);

      for (var p = 0; p < N; p += l) {
        var rtwdf_ = rtwdf;
        var itwdf_ = itwdf;

        for (var j = 0; j < s; j++) {
          var re = rtws[p + j];
          var ie = itws[p + j];
          var ro = rtws[p + j + s];
          var io = itws[p + j + s];
          var rx = rtwdf_ * ro - itwdf_ * io;
          io = rtwdf_ * io + itwdf_ * ro;
          ro = rx;
          rtws[p + j] = re + ro;
          itws[p + j] = ie + io;
          rtws[p + j + s] = re - ro;
          itws[p + j + s] = ie - io;
          /* jshint maxdepth : false */

          if (j !== l) {
            rx = rtwdf * rtwdf_ - itwdf * itwdf_;
            itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
            rtwdf_ = rx;
          }
        }
      }
    }
  };

  FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
    var N = Math.max(m, n) | 1;
    var odd = N & 1;
    var i = 0;

    for (N = N / 2 | 0; N; N = N >>> 1) {
      i++;
    }

    return 1 << i + 1 + odd;
  };

  FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
    if (N <= 1) return;

    for (var i = 0; i < N / 2; i++) {
      var t = rws[i];
      rws[i] = rws[N - i - 1];
      rws[N - i - 1] = t;
      t = iws[i];
      iws[i] = -iws[N - i - 1];
      iws[N - i - 1] = -t;
    }
  };

  FFTM.prototype.normalize13b = function normalize13b(ws, N) {
    var carry = 0;

    for (var i = 0; i < N / 2; i++) {
      var w = Math.round(ws[2 * i + 1] / N) * 0x2000 + Math.round(ws[2 * i] / N) + carry;
      ws[i] = w & 0x3ffffff;

      if (w < 0x4000000) {
        carry = 0;
      } else {
        carry = w / 0x4000000 | 0;
      }
    }

    return ws;
  };

  FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
    var carry = 0;

    for (var i = 0; i < len; i++) {
      carry = carry + (ws[i] | 0);
      rws[2 * i] = carry & 0x1fff;
      carry = carry >>> 13;
      rws[2 * i + 1] = carry & 0x1fff;
      carry = carry >>> 13;
    } // Pad with zeroes


    for (i = 2 * len; i < N; ++i) {
      rws[i] = 0;
    }

    assert(carry === 0);
    assert((carry & ~0x1fff) === 0);
  };

  FFTM.prototype.stub = function stub(N) {
    var ph = new Array(N);

    for (var i = 0; i < N; i++) {
      ph[i] = 0;
    }

    return ph;
  };

  FFTM.prototype.mulp = function mulp(x, y, out) {
    var N = 2 * this.guessLen13b(x.length, y.length);
    var rbt = this.makeRBT(N);

    var _ = this.stub(N);

    var rws = new Array(N);
    var rwst = new Array(N);
    var iwst = new Array(N);
    var nrws = new Array(N);
    var nrwst = new Array(N);
    var niwst = new Array(N);
    var rmws = out.words;
    rmws.length = N;
    this.convert13b(x.words, x.length, rws, N);
    this.convert13b(y.words, y.length, nrws, N);
    this.transform(rws, _, rwst, iwst, N, rbt);
    this.transform(nrws, _, nrwst, niwst, N, rbt);

    for (var i = 0; i < N; i++) {
      var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
      iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
      rwst[i] = rx;
    }

    this.conjugate(rwst, iwst, N);
    this.transform(rwst, iwst, rmws, _, N, rbt);
    this.conjugate(rmws, _, N);
    this.normalize13b(rmws, N);
    out.negative = x.negative ^ y.negative;
    out.length = x.length + y.length;
    return out.strip();
  }; // Multiply `this` by `num`


  BN.prototype.mul = function mul(num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return this.mulTo(num, out);
  }; // Multiply employing FFT


  BN.prototype.mulf = function mulf(num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return jumboMulTo(this, num, out);
  }; // In-place Multiplication


  BN.prototype.imul = function imul(num) {
    return this.clone().mulTo(num, this);
  };

  BN.prototype.imuln = function imuln(num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000); // Carry

    var carry = 0;

    for (var i = 0; i < this.length; i++) {
      var w = (this.words[i] | 0) * num;
      var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
      carry >>= 26;
      carry += w / 0x4000000 | 0; // NOTE: lo is 27bit maximum

      carry += lo >>> 26;
      this.words[i] = lo & 0x3ffffff;
    }

    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }

    return this;
  };

  BN.prototype.muln = function muln(num) {
    return this.clone().imuln(num);
  }; // `this` * `this`


  BN.prototype.sqr = function sqr() {
    return this.mul(this);
  }; // `this` * `this` in-place


  BN.prototype.isqr = function isqr() {
    return this.imul(this.clone());
  }; // Math.pow(`this`, `num`)


  BN.prototype.pow = function pow(num) {
    var w = toBitArray(num);
    if (w.length === 0) return new BN(1); // Skip leading zeroes

    var res = this;

    for (var i = 0; i < w.length; i++, res = res.sqr()) {
      if (w[i] !== 0) break;
    }

    if (++i < w.length) {
      for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
        if (w[i] === 0) continue;
        res = res.mul(q);
      }
    }

    return res;
  }; // Shift-left in-place


  BN.prototype.iushln = function iushln(bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;
    var carryMask = 0x3ffffff >>> 26 - r << 26 - r;
    var i;

    if (r !== 0) {
      var carry = 0;

      for (i = 0; i < this.length; i++) {
        var newCarry = this.words[i] & carryMask;
        var c = (this.words[i] | 0) - newCarry << r;
        this.words[i] = c | carry;
        carry = newCarry >>> 26 - r;
      }

      if (carry) {
        this.words[i] = carry;
        this.length++;
      }
    }

    if (s !== 0) {
      for (i = this.length - 1; i >= 0; i--) {
        this.words[i + s] = this.words[i];
      }

      for (i = 0; i < s; i++) {
        this.words[i] = 0;
      }

      this.length += s;
    }

    return this.strip();
  };

  BN.prototype.ishln = function ishln(bits) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushln(bits);
  }; // Shift-right in-place
  // NOTE: `hint` is a lowest bit before trailing zeroes
  // NOTE: if `extended` is present - it will be filled with destroyed bits


  BN.prototype.iushrn = function iushrn(bits, hint, extended) {
    assert(typeof bits === 'number' && bits >= 0);
    var h;

    if (hint) {
      h = (hint - hint % 26) / 26;
    } else {
      h = 0;
    }

    var r = bits % 26;
    var s = Math.min((bits - r) / 26, this.length);
    var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
    var maskedWords = extended;
    h -= s;
    h = Math.max(0, h); // Extended mode, copy masked part

    if (maskedWords) {
      for (var i = 0; i < s; i++) {
        maskedWords.words[i] = this.words[i];
      }

      maskedWords.length = s;
    }

    if (s === 0) {// No-op, we should not move anything at all
    } else if (this.length > s) {
      this.length -= s;

      for (i = 0; i < this.length; i++) {
        this.words[i] = this.words[i + s];
      }
    } else {
      this.words[0] = 0;
      this.length = 1;
    }

    var carry = 0;

    for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
      var word = this.words[i] | 0;
      this.words[i] = carry << 26 - r | word >>> r;
      carry = word & mask;
    } // Push carried bits as a mask


    if (maskedWords && carry !== 0) {
      maskedWords.words[maskedWords.length++] = carry;
    }

    if (this.length === 0) {
      this.words[0] = 0;
      this.length = 1;
    }

    return this.strip();
  };

  BN.prototype.ishrn = function ishrn(bits, hint, extended) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushrn(bits, hint, extended);
  }; // Shift-left


  BN.prototype.shln = function shln(bits) {
    return this.clone().ishln(bits);
  };

  BN.prototype.ushln = function ushln(bits) {
    return this.clone().iushln(bits);
  }; // Shift-right


  BN.prototype.shrn = function shrn(bits) {
    return this.clone().ishrn(bits);
  };

  BN.prototype.ushrn = function ushrn(bits) {
    return this.clone().iushrn(bits);
  }; // Test if n bit is set


  BN.prototype.testn = function testn(bit) {
    assert(typeof bit === 'number' && bit >= 0);
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r; // Fast case: bit is much higher than all existing words

    if (this.length <= s) return false; // Check bit and return

    var w = this.words[s];
    return !!(w & q);
  }; // Return only lowers bits of number (in-place)


  BN.prototype.imaskn = function imaskn(bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;
    assert(this.negative === 0, 'imaskn works only with positive numbers');

    if (this.length <= s) {
      return this;
    }

    if (r !== 0) {
      s++;
    }

    this.length = Math.min(s, this.length);

    if (r !== 0) {
      var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
      this.words[this.length - 1] &= mask;
    }

    return this.strip();
  }; // Return only lowers bits of number


  BN.prototype.maskn = function maskn(bits) {
    return this.clone().imaskn(bits);
  }; // Add plain number `num` to `this`


  BN.prototype.iaddn = function iaddn(num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.isubn(-num); // Possible sign change

    if (this.negative !== 0) {
      if (this.length === 1 && (this.words[0] | 0) < num) {
        this.words[0] = num - (this.words[0] | 0);
        this.negative = 0;
        return this;
      }

      this.negative = 0;
      this.isubn(num);
      this.negative = 1;
      return this;
    } // Add without checks


    return this._iaddn(num);
  };

  BN.prototype._iaddn = function _iaddn(num) {
    this.words[0] += num; // Carry

    for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
      this.words[i] -= 0x4000000;

      if (i === this.length - 1) {
        this.words[i + 1] = 1;
      } else {
        this.words[i + 1]++;
      }
    }

    this.length = Math.max(this.length, i + 1);
    return this;
  }; // Subtract plain number `num` from `this`


  BN.prototype.isubn = function isubn(num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.iaddn(-num);

    if (this.negative !== 0) {
      this.negative = 0;
      this.iaddn(num);
      this.negative = 1;
      return this;
    }

    this.words[0] -= num;

    if (this.length === 1 && this.words[0] < 0) {
      this.words[0] = -this.words[0];
      this.negative = 1;
    } else {
      // Carry
      for (var i = 0; i < this.length && this.words[i] < 0; i++) {
        this.words[i] += 0x4000000;
        this.words[i + 1] -= 1;
      }
    }

    return this.strip();
  };

  BN.prototype.addn = function addn(num) {
    return this.clone().iaddn(num);
  };

  BN.prototype.subn = function subn(num) {
    return this.clone().isubn(num);
  };

  BN.prototype.iabs = function iabs() {
    this.negative = 0;
    return this;
  };

  BN.prototype.abs = function abs() {
    return this.clone().iabs();
  };

  BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
    var len = num.length + shift;
    var i;

    this._expand(len);

    var w;
    var carry = 0;

    for (i = 0; i < num.length; i++) {
      w = (this.words[i + shift] | 0) + carry;
      var right = (num.words[i] | 0) * mul;
      w -= right & 0x3ffffff;
      carry = (w >> 26) - (right / 0x4000000 | 0);
      this.words[i + shift] = w & 0x3ffffff;
    }

    for (; i < this.length - shift; i++) {
      w = (this.words[i + shift] | 0) + carry;
      carry = w >> 26;
      this.words[i + shift] = w & 0x3ffffff;
    }

    if (carry === 0) return this.strip(); // Subtraction overflow

    assert(carry === -1);
    carry = 0;

    for (i = 0; i < this.length; i++) {
      w = -(this.words[i] | 0) + carry;
      carry = w >> 26;
      this.words[i] = w & 0x3ffffff;
    }

    this.negative = 1;
    return this.strip();
  };

  BN.prototype._wordDiv = function _wordDiv(num, mode) {
    var shift = this.length - num.length;
    var a = this.clone();
    var b = num; // Normalize

    var bhi = b.words[b.length - 1] | 0;

    var bhiBits = this._countBits(bhi);

    shift = 26 - bhiBits;

    if (shift !== 0) {
      b = b.ushln(shift);
      a.iushln(shift);
      bhi = b.words[b.length - 1] | 0;
    } // Initialize quotient


    var m = a.length - b.length;
    var q;

    if (mode !== 'mod') {
      q = new BN(null);
      q.length = m + 1;
      q.words = new Array(q.length);

      for (var i = 0; i < q.length; i++) {
        q.words[i] = 0;
      }
    }

    var diff = a.clone()._ishlnsubmul(b, 1, m);

    if (diff.negative === 0) {
      a = diff;

      if (q) {
        q.words[m] = 1;
      }
    }

    for (var j = m - 1; j >= 0; j--) {
      var qj = (a.words[b.length + j] | 0) * 0x4000000 + (a.words[b.length + j - 1] | 0); // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
      // (0x7ffffff)

      qj = Math.min(qj / bhi | 0, 0x3ffffff);

      a._ishlnsubmul(b, qj, j);

      while (a.negative !== 0) {
        qj--;
        a.negative = 0;

        a._ishlnsubmul(b, 1, j);

        if (!a.isZero()) {
          a.negative ^= 1;
        }
      }

      if (q) {
        q.words[j] = qj;
      }
    }

    if (q) {
      q.strip();
    }

    a.strip(); // Denormalize

    if (mode !== 'div' && shift !== 0) {
      a.iushrn(shift);
    }

    return {
      div: q || null,
      mod: a
    };
  }; // NOTE: 1) `mode` can be set to `mod` to request mod only,
  //       to `div` to request div only, or be absent to
  //       request both div & mod
  //       2) `positive` is true if unsigned mod is requested


  BN.prototype.divmod = function divmod(num, mode, positive) {
    assert(!num.isZero());

    if (this.isZero()) {
      return {
        div: new BN(0),
        mod: new BN(0)
      };
    }

    var div, mod, res;

    if (this.negative !== 0 && num.negative === 0) {
      res = this.neg().divmod(num, mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      if (mode !== 'div') {
        mod = res.mod.neg();

        if (positive && mod.negative !== 0) {
          mod.iadd(num);
        }
      }

      return {
        div: div,
        mod: mod
      };
    }

    if (this.negative === 0 && num.negative !== 0) {
      res = this.divmod(num.neg(), mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      return {
        div: div,
        mod: res.mod
      };
    }

    if ((this.negative & num.negative) !== 0) {
      res = this.neg().divmod(num.neg(), mode);

      if (mode !== 'div') {
        mod = res.mod.neg();

        if (positive && mod.negative !== 0) {
          mod.isub(num);
        }
      }

      return {
        div: res.div,
        mod: mod
      };
    } // Both numbers are positive at this point
    // Strip both numbers to approximate shift value


    if (num.length > this.length || this.cmp(num) < 0) {
      return {
        div: new BN(0),
        mod: this
      };
    } // Very short reduction


    if (num.length === 1) {
      if (mode === 'div') {
        return {
          div: this.divn(num.words[0]),
          mod: null
        };
      }

      if (mode === 'mod') {
        return {
          div: null,
          mod: new BN(this.modn(num.words[0]))
        };
      }

      return {
        div: this.divn(num.words[0]),
        mod: new BN(this.modn(num.words[0]))
      };
    }

    return this._wordDiv(num, mode);
  }; // Find `this` / `num`


  BN.prototype.div = function div(num) {
    return this.divmod(num, 'div', false).div;
  }; // Find `this` % `num`


  BN.prototype.mod = function mod(num) {
    return this.divmod(num, 'mod', false).mod;
  };

  BN.prototype.umod = function umod(num) {
    return this.divmod(num, 'mod', true).mod;
  }; // Find Round(`this` / `num`)


  BN.prototype.divRound = function divRound(num) {
    var dm = this.divmod(num); // Fast case - exact division

    if (dm.mod.isZero()) return dm.div;
    var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
    var half = num.ushrn(1);
    var r2 = num.andln(1);
    var cmp = mod.cmp(half); // Round down

    if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div; // Round up

    return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
  };

  BN.prototype.modn = function modn(num) {
    assert(num <= 0x3ffffff);
    var p = (1 << 26) % num;
    var acc = 0;

    for (var i = this.length - 1; i >= 0; i--) {
      acc = (p * acc + (this.words[i] | 0)) % num;
    }

    return acc;
  }; // In-place division by number


  BN.prototype.idivn = function idivn(num) {
    assert(num <= 0x3ffffff);
    var carry = 0;

    for (var i = this.length - 1; i >= 0; i--) {
      var w = (this.words[i] | 0) + carry * 0x4000000;
      this.words[i] = w / num | 0;
      carry = w % num;
    }

    return this.strip();
  };

  BN.prototype.divn = function divn(num) {
    return this.clone().idivn(num);
  };

  BN.prototype.egcd = function egcd(p) {
    assert(p.negative === 0);
    assert(!p.isZero());
    var x = this;
    var y = p.clone();

    if (x.negative !== 0) {
      x = x.umod(p);
    } else {
      x = x.clone();
    } // A * x + B * y = x


    var A = new BN(1);
    var B = new BN(0); // C * x + D * y = y

    var C = new BN(0);
    var D = new BN(1);
    var g = 0;

    while (x.isEven() && y.isEven()) {
      x.iushrn(1);
      y.iushrn(1);
      ++g;
    }

    var yp = y.clone();
    var xp = x.clone();

    while (!x.isZero()) {
      for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);

      if (i > 0) {
        x.iushrn(i);

        while (i-- > 0) {
          if (A.isOdd() || B.isOdd()) {
            A.iadd(yp);
            B.isub(xp);
          }

          A.iushrn(1);
          B.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);

      if (j > 0) {
        y.iushrn(j);

        while (j-- > 0) {
          if (C.isOdd() || D.isOdd()) {
            C.iadd(yp);
            D.isub(xp);
          }

          C.iushrn(1);
          D.iushrn(1);
        }
      }

      if (x.cmp(y) >= 0) {
        x.isub(y);
        A.isub(C);
        B.isub(D);
      } else {
        y.isub(x);
        C.isub(A);
        D.isub(B);
      }
    }

    return {
      a: C,
      b: D,
      gcd: y.iushln(g)
    };
  }; // This is reduced incarnation of the binary EEA
  // above, designated to invert members of the
  // _prime_ fields F(p) at a maximal speed


  BN.prototype._invmp = function _invmp(p) {
    assert(p.negative === 0);
    assert(!p.isZero());
    var a = this;
    var b = p.clone();

    if (a.negative !== 0) {
      a = a.umod(p);
    } else {
      a = a.clone();
    }

    var x1 = new BN(1);
    var x2 = new BN(0);
    var delta = b.clone();

    while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
      for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);

      if (i > 0) {
        a.iushrn(i);

        while (i-- > 0) {
          if (x1.isOdd()) {
            x1.iadd(delta);
          }

          x1.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);

      if (j > 0) {
        b.iushrn(j);

        while (j-- > 0) {
          if (x2.isOdd()) {
            x2.iadd(delta);
          }

          x2.iushrn(1);
        }
      }

      if (a.cmp(b) >= 0) {
        a.isub(b);
        x1.isub(x2);
      } else {
        b.isub(a);
        x2.isub(x1);
      }
    }

    var res;

    if (a.cmpn(1) === 0) {
      res = x1;
    } else {
      res = x2;
    }

    if (res.cmpn(0) < 0) {
      res.iadd(p);
    }

    return res;
  };

  BN.prototype.gcd = function gcd(num) {
    if (this.isZero()) return num.abs();
    if (num.isZero()) return this.abs();
    var a = this.clone();
    var b = num.clone();
    a.negative = 0;
    b.negative = 0; // Remove common factor of two

    for (var shift = 0; a.isEven() && b.isEven(); shift++) {
      a.iushrn(1);
      b.iushrn(1);
    }

    do {
      while (a.isEven()) {
        a.iushrn(1);
      }

      while (b.isEven()) {
        b.iushrn(1);
      }

      var r = a.cmp(b);

      if (r < 0) {
        // Swap `a` and `b` to make `a` always bigger than `b`
        var t = a;
        a = b;
        b = t;
      } else if (r === 0 || b.cmpn(1) === 0) {
        break;
      }

      a.isub(b);
    } while (true);

    return b.iushln(shift);
  }; // Invert number in the field F(num)


  BN.prototype.invm = function invm(num) {
    return this.egcd(num).a.umod(num);
  };

  BN.prototype.isEven = function isEven() {
    return (this.words[0] & 1) === 0;
  };

  BN.prototype.isOdd = function isOdd() {
    return (this.words[0] & 1) === 1;
  }; // And first word and num


  BN.prototype.andln = function andln(num) {
    return this.words[0] & num;
  }; // Increment at the bit position in-line


  BN.prototype.bincn = function bincn(bit) {
    assert(typeof bit === 'number');
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r; // Fast case: bit is much higher than all existing words

    if (this.length <= s) {
      this._expand(s + 1);

      this.words[s] |= q;
      return this;
    } // Add bit and propagate, if needed


    var carry = q;

    for (var i = s; carry !== 0 && i < this.length; i++) {
      var w = this.words[i] | 0;
      w += carry;
      carry = w >>> 26;
      w &= 0x3ffffff;
      this.words[i] = w;
    }

    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }

    return this;
  };

  BN.prototype.isZero = function isZero() {
    return this.length === 1 && this.words[0] === 0;
  };

  BN.prototype.cmpn = function cmpn(num) {
    var negative = num < 0;
    if (this.negative !== 0 && !negative) return -1;
    if (this.negative === 0 && negative) return 1;
    this.strip();
    var res;

    if (this.length > 1) {
      res = 1;
    } else {
      if (negative) {
        num = -num;
      }

      assert(num <= 0x3ffffff, 'Number is too big');
      var w = this.words[0] | 0;
      res = w === num ? 0 : w < num ? -1 : 1;
    }

    if (this.negative !== 0) return -res | 0;
    return res;
  }; // Compare two numbers and return:
  // 1 - if `this` > `num`
  // 0 - if `this` == `num`
  // -1 - if `this` < `num`


  BN.prototype.cmp = function cmp(num) {
    if (this.negative !== 0 && num.negative === 0) return -1;
    if (this.negative === 0 && num.negative !== 0) return 1;
    var res = this.ucmp(num);
    if (this.negative !== 0) return -res | 0;
    return res;
  }; // Unsigned comparison


  BN.prototype.ucmp = function ucmp(num) {
    // At this point both numbers have the same sign
    if (this.length > num.length) return 1;
    if (this.length < num.length) return -1;
    var res = 0;

    for (var i = this.length - 1; i >= 0; i--) {
      var a = this.words[i] | 0;
      var b = num.words[i] | 0;
      if (a === b) continue;

      if (a < b) {
        res = -1;
      } else if (a > b) {
        res = 1;
      }

      break;
    }

    return res;
  };

  BN.prototype.gtn = function gtn(num) {
    return this.cmpn(num) === 1;
  };

  BN.prototype.gt = function gt(num) {
    return this.cmp(num) === 1;
  };

  BN.prototype.gten = function gten(num) {
    return this.cmpn(num) >= 0;
  };

  BN.prototype.gte = function gte(num) {
    return this.cmp(num) >= 0;
  };

  BN.prototype.ltn = function ltn(num) {
    return this.cmpn(num) === -1;
  };

  BN.prototype.lt = function lt(num) {
    return this.cmp(num) === -1;
  };

  BN.prototype.lten = function lten(num) {
    return this.cmpn(num) <= 0;
  };

  BN.prototype.lte = function lte(num) {
    return this.cmp(num) <= 0;
  };

  BN.prototype.eqn = function eqn(num) {
    return this.cmpn(num) === 0;
  };

  BN.prototype.eq = function eq(num) {
    return this.cmp(num) === 0;
  }; //
  // A reduce context, could be using montgomery or something better, depending
  // on the `m` itself.
  //


  BN.red = function red(num) {
    return new Red(num);
  };

  BN.prototype.toRed = function toRed(ctx) {
    assert(!this.red, 'Already a number in reduction context');
    assert(this.negative === 0, 'red works only with positives');
    return ctx.convertTo(this)._forceRed(ctx);
  };

  BN.prototype.fromRed = function fromRed() {
    assert(this.red, 'fromRed works only with numbers in reduction context');
    return this.red.convertFrom(this);
  };

  BN.prototype._forceRed = function _forceRed(ctx) {
    this.red = ctx;
    return this;
  };

  BN.prototype.forceRed = function forceRed(ctx) {
    assert(!this.red, 'Already a number in reduction context');
    return this._forceRed(ctx);
  };

  BN.prototype.redAdd = function redAdd(num) {
    assert(this.red, 'redAdd works only with red numbers');
    return this.red.add(this, num);
  };

  BN.prototype.redIAdd = function redIAdd(num) {
    assert(this.red, 'redIAdd works only with red numbers');
    return this.red.iadd(this, num);
  };

  BN.prototype.redSub = function redSub(num) {
    assert(this.red, 'redSub works only with red numbers');
    return this.red.sub(this, num);
  };

  BN.prototype.redISub = function redISub(num) {
    assert(this.red, 'redISub works only with red numbers');
    return this.red.isub(this, num);
  };

  BN.prototype.redShl = function redShl(num) {
    assert(this.red, 'redShl works only with red numbers');
    return this.red.shl(this, num);
  };

  BN.prototype.redMul = function redMul(num) {
    assert(this.red, 'redMul works only with red numbers');

    this.red._verify2(this, num);

    return this.red.mul(this, num);
  };

  BN.prototype.redIMul = function redIMul(num) {
    assert(this.red, 'redMul works only with red numbers');

    this.red._verify2(this, num);

    return this.red.imul(this, num);
  };

  BN.prototype.redSqr = function redSqr() {
    assert(this.red, 'redSqr works only with red numbers');

    this.red._verify1(this);

    return this.red.sqr(this);
  };

  BN.prototype.redISqr = function redISqr() {
    assert(this.red, 'redISqr works only with red numbers');

    this.red._verify1(this);

    return this.red.isqr(this);
  }; // Square root over p


  BN.prototype.redSqrt = function redSqrt() {
    assert(this.red, 'redSqrt works only with red numbers');

    this.red._verify1(this);

    return this.red.sqrt(this);
  };

  BN.prototype.redInvm = function redInvm() {
    assert(this.red, 'redInvm works only with red numbers');

    this.red._verify1(this);

    return this.red.invm(this);
  }; // Return negative clone of `this` % `red modulo`


  BN.prototype.redNeg = function redNeg() {
    assert(this.red, 'redNeg works only with red numbers');

    this.red._verify1(this);

    return this.red.neg(this);
  };

  BN.prototype.redPow = function redPow(num) {
    assert(this.red && !num.red, 'redPow(normalNum)');

    this.red._verify1(this);

    return this.red.pow(this, num);
  }; // Prime numbers with efficient reduction


  var primes = {
    k256: null,
    p224: null,
    p192: null,
    p25519: null
  }; // Pseudo-Mersenne prime

  function MPrime(name, p) {
    // P = 2 ^ N - K
    this.name = name;
    this.p = new BN(p, 16);
    this.n = this.p.bitLength();
    this.k = new BN(1).iushln(this.n).isub(this.p);
    this.tmp = this._tmp();
  }

  MPrime.prototype._tmp = function _tmp() {
    var tmp = new BN(null);
    tmp.words = new Array(Math.ceil(this.n / 13));
    return tmp;
  };

  MPrime.prototype.ireduce = function ireduce(num) {
    // Assumes that `num` is less than `P^2`
    // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
    var r = num;
    var rlen;

    do {
      this.split(r, this.tmp);
      r = this.imulK(r);
      r = r.iadd(this.tmp);
      rlen = r.bitLength();
    } while (rlen > this.n);

    var cmp = rlen < this.n ? -1 : r.ucmp(this.p);

    if (cmp === 0) {
      r.words[0] = 0;
      r.length = 1;
    } else if (cmp > 0) {
      r.isub(this.p);
    } else {
      if (r.strip !== undefined) {
        // r is BN v4 instance
        r.strip();
      } else {
        // r is BN v5 instance
        r._strip();
      }
    }

    return r;
  };

  MPrime.prototype.split = function split(input, out) {
    input.iushrn(this.n, 0, out);
  };

  MPrime.prototype.imulK = function imulK(num) {
    return num.imul(this.k);
  };

  function K256() {
    MPrime.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
  }

  inherits(K256, MPrime);

  K256.prototype.split = function split(input, output) {
    // 256 = 9 * 26 + 22
    var mask = 0x3fffff;
    var outLen = Math.min(input.length, 9);

    for (var i = 0; i < outLen; i++) {
      output.words[i] = input.words[i];
    }

    output.length = outLen;

    if (input.length <= 9) {
      input.words[0] = 0;
      input.length = 1;
      return;
    } // Shift by 9 limbs


    var prev = input.words[9];
    output.words[output.length++] = prev & mask;

    for (i = 10; i < input.length; i++) {
      var next = input.words[i] | 0;
      input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
      prev = next;
    }

    prev >>>= 22;
    input.words[i - 10] = prev;

    if (prev === 0 && input.length > 10) {
      input.length -= 10;
    } else {
      input.length -= 9;
    }
  };

  K256.prototype.imulK = function imulK(num) {
    // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
    num.words[num.length] = 0;
    num.words[num.length + 1] = 0;
    num.length += 2; // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390

    var lo = 0;

    for (var i = 0; i < num.length; i++) {
      var w = num.words[i] | 0;
      lo += w * 0x3d1;
      num.words[i] = lo & 0x3ffffff;
      lo = w * 0x40 + (lo / 0x4000000 | 0);
    } // Fast length reduction


    if (num.words[num.length - 1] === 0) {
      num.length--;

      if (num.words[num.length - 1] === 0) {
        num.length--;
      }
    }

    return num;
  };

  function P224() {
    MPrime.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
  }

  inherits(P224, MPrime);

  function P192() {
    MPrime.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
  }

  inherits(P192, MPrime);

  function P25519() {
    // 2 ^ 255 - 19
    MPrime.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
  }

  inherits(P25519, MPrime);

  P25519.prototype.imulK = function imulK(num) {
    // K = 0x13
    var carry = 0;

    for (var i = 0; i < num.length; i++) {
      var hi = (num.words[i] | 0) * 0x13 + carry;
      var lo = hi & 0x3ffffff;
      hi >>>= 26;
      num.words[i] = lo;
      carry = hi;
    }

    if (carry !== 0) {
      num.words[num.length++] = carry;
    }

    return num;
  }; // Exported mostly for testing purposes, use plain name instead


  BN._prime = function prime(name) {
    // Cached version of prime
    if (primes[name]) return primes[name];
    var prime;

    if (name === 'k256') {
      prime = new K256();
    } else if (name === 'p224') {
      prime = new P224();
    } else if (name === 'p192') {
      prime = new P192();
    } else if (name === 'p25519') {
      prime = new P25519();
    } else {
      throw new Error('Unknown prime ' + name);
    }

    primes[name] = prime;
    return prime;
  }; //
  // Base reduction engine
  //


  function Red(m) {
    if (typeof m === 'string') {
      var prime = BN._prime(m);

      this.m = prime.p;
      this.prime = prime;
    } else {
      assert(m.gtn(1), 'modulus must be greater than 1');
      this.m = m;
      this.prime = null;
    }
  }

  Red.prototype._verify1 = function _verify1(a) {
    assert(a.negative === 0, 'red works only with positives');
    assert(a.red, 'red works only with red numbers');
  };

  Red.prototype._verify2 = function _verify2(a, b) {
    assert((a.negative | b.negative) === 0, 'red works only with positives');
    assert(a.red && a.red === b.red, 'red works only with red numbers');
  };

  Red.prototype.imod = function imod(a) {
    if (this.prime) return this.prime.ireduce(a)._forceRed(this);
    return a.umod(this.m)._forceRed(this);
  };

  Red.prototype.neg = function neg(a) {
    if (a.isZero()) {
      return a.clone();
    }

    return this.m.sub(a)._forceRed(this);
  };

  Red.prototype.add = function add(a, b) {
    this._verify2(a, b);

    var res = a.add(b);

    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }

    return res._forceRed(this);
  };

  Red.prototype.iadd = function iadd(a, b) {
    this._verify2(a, b);

    var res = a.iadd(b);

    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }

    return res;
  };

  Red.prototype.sub = function sub(a, b) {
    this._verify2(a, b);

    var res = a.sub(b);

    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Red.prototype.isub = function isub(a, b) {
    this._verify2(a, b);

    var res = a.isub(b);

    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }

    return res;
  };

  Red.prototype.shl = function shl(a, num) {
    this._verify1(a);

    return this.imod(a.ushln(num));
  };

  Red.prototype.imul = function imul(a, b) {
    this._verify2(a, b);

    return this.imod(a.imul(b));
  };

  Red.prototype.mul = function mul(a, b) {
    this._verify2(a, b);

    return this.imod(a.mul(b));
  };

  Red.prototype.isqr = function isqr(a) {
    return this.imul(a, a.clone());
  };

  Red.prototype.sqr = function sqr(a) {
    return this.mul(a, a);
  };

  Red.prototype.sqrt = function sqrt(a) {
    if (a.isZero()) return a.clone();
    var mod3 = this.m.andln(3);
    assert(mod3 % 2 === 1); // Fast case

    if (mod3 === 3) {
      var pow = this.m.add(new BN(1)).iushrn(2);
      return this.pow(a, pow);
    } // Tonelli-Shanks algorithm (Totally unoptimized and slow)
    //
    // Find Q and S, that Q * 2 ^ S = (P - 1)


    var q = this.m.subn(1);
    var s = 0;

    while (!q.isZero() && q.andln(1) === 0) {
      s++;
      q.iushrn(1);
    }

    assert(!q.isZero());
    var one = new BN(1).toRed(this);
    var nOne = one.redNeg(); // Find quadratic non-residue
    // NOTE: Max is such because of generalized Riemann hypothesis.

    var lpow = this.m.subn(1).iushrn(1);
    var z = this.m.bitLength();
    z = new BN(2 * z * z).toRed(this);

    while (this.pow(z, lpow).cmp(nOne) !== 0) {
      z.redIAdd(nOne);
    }

    var c = this.pow(z, q);
    var r = this.pow(a, q.addn(1).iushrn(1));
    var t = this.pow(a, q);
    var m = s;

    while (t.cmp(one) !== 0) {
      var tmp = t;

      for (var i = 0; tmp.cmp(one) !== 0; i++) {
        tmp = tmp.redSqr();
      }

      assert(i < m);
      var b = this.pow(c, new BN(1).iushln(m - i - 1));
      r = r.redMul(b);
      c = b.redSqr();
      t = t.redMul(c);
      m = i;
    }

    return r;
  };

  Red.prototype.invm = function invm(a) {
    var inv = a._invmp(this.m);

    if (inv.negative !== 0) {
      inv.negative = 0;
      return this.imod(inv).redNeg();
    } else {
      return this.imod(inv);
    }
  };

  Red.prototype.pow = function pow(a, num) {
    if (num.isZero()) return new BN(1).toRed(this);
    if (num.cmpn(1) === 0) return a.clone();
    var windowSize = 4;
    var wnd = new Array(1 << windowSize);
    wnd[0] = new BN(1).toRed(this);
    wnd[1] = a;

    for (var i = 2; i < wnd.length; i++) {
      wnd[i] = this.mul(wnd[i - 1], a);
    }

    var res = wnd[0];
    var current = 0;
    var currentLen = 0;
    var start = num.bitLength() % 26;

    if (start === 0) {
      start = 26;
    }

    for (i = num.length - 1; i >= 0; i--) {
      var word = num.words[i];

      for (var j = start - 1; j >= 0; j--) {
        var bit = word >> j & 1;

        if (res !== wnd[0]) {
          res = this.sqr(res);
        }

        if (bit === 0 && current === 0) {
          currentLen = 0;
          continue;
        }

        current <<= 1;
        current |= bit;
        currentLen++;
        if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
        res = this.mul(res, wnd[current]);
        currentLen = 0;
        current = 0;
      }

      start = 26;
    }

    return res;
  };

  Red.prototype.convertTo = function convertTo(num) {
    var r = num.umod(this.m);
    return r === num ? r.clone() : r;
  };

  Red.prototype.convertFrom = function convertFrom(num) {
    var res = num.clone();
    res.red = null;
    return res;
  }; //
  // Montgomery method engine
  //


  BN.mont = function mont(num) {
    return new Mont(num);
  };

  function Mont(m) {
    Red.call(this, m);
    this.shift = this.m.bitLength();

    if (this.shift % 26 !== 0) {
      this.shift += 26 - this.shift % 26;
    }

    this.r = new BN(1).iushln(this.shift);
    this.r2 = this.imod(this.r.sqr());
    this.rinv = this.r._invmp(this.m);
    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
    this.minv = this.minv.umod(this.r);
    this.minv = this.r.sub(this.minv);
  }

  inherits(Mont, Red);

  Mont.prototype.convertTo = function convertTo(num) {
    return this.imod(num.ushln(this.shift));
  };

  Mont.prototype.convertFrom = function convertFrom(num) {
    var r = this.imod(num.mul(this.rinv));
    r.red = null;
    return r;
  };

  Mont.prototype.imul = function imul(a, b) {
    if (a.isZero() || b.isZero()) {
      a.words[0] = 0;
      a.length = 1;
      return a;
    }

    var t = a.imul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;

    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.mul = function mul(a, b) {
    if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
    var t = a.mul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;

    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.invm = function invm(a) {
    // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
    var res = this.imod(a._invmp(this.m).mul(this.r2));
    return res._forceRed(this);
  };
})( false || module, this);

/***/ }),

/***/ "./node_modules/brorand/index.js":
/*!***************************************!*\
  !*** ./node_modules/brorand/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var r;

module.exports = function rand(len) {
  if (!r) r = new Rand(null);
  return r.generate(len);
};

function Rand(rand) {
  this.rand = rand;
}

module.exports.Rand = Rand;

Rand.prototype.generate = function generate(len) {
  return this._rand(len);
}; // Emulate crypto API using randy


Rand.prototype._rand = function _rand(n) {
  if (this.rand.getBytes) return this.rand.getBytes(n);
  var res = new Uint8Array(n);

  for (var i = 0; i < res.length; i++) res[i] = this.rand.getByte();

  return res;
};

if (typeof self === 'object') {
  if (self.crypto && self.crypto.getRandomValues) {
    // Modern browsers
    Rand.prototype._rand = function _rand(n) {
      var arr = new Uint8Array(n);
      self.crypto.getRandomValues(arr);
      return arr;
    };
  } else if (self.msCrypto && self.msCrypto.getRandomValues) {
    // IE
    Rand.prototype._rand = function _rand(n) {
      var arr = new Uint8Array(n);
      self.msCrypto.getRandomValues(arr);
      return arr;
    }; // Safari's WebWorkers do not have `crypto`

  } else if (typeof window === 'object') {
    // Old junk
    Rand.prototype._rand = function () {
      throw new Error('Not implemented yet');
    };
  }
} else {
  // Node.js or Web worker with no crypto support
  try {
    var crypto = __webpack_require__(/*! crypto */ "?3fc0");

    if (typeof crypto.randomBytes !== 'function') throw new Error('Not supported');

    Rand.prototype._rand = function _rand(n) {
      return crypto.randomBytes(n);
    };
  } catch (e) {}
}

/***/ }),

/***/ "./node_modules/elliptic/lib/elliptic.js":
/*!***********************************************!*\
  !*** ./node_modules/elliptic/lib/elliptic.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var elliptic = exports;
elliptic.version = (__webpack_require__(/*! ../package.json */ "./node_modules/elliptic/package.json").version);
elliptic.utils = __webpack_require__(/*! ./elliptic/utils */ "./node_modules/elliptic/lib/elliptic/utils.js");
elliptic.rand = __webpack_require__(/*! brorand */ "./node_modules/brorand/index.js");
elliptic.curve = __webpack_require__(/*! ./elliptic/curve */ "./node_modules/elliptic/lib/elliptic/curve/index.js");
elliptic.curves = __webpack_require__(/*! ./elliptic/curves */ "./node_modules/elliptic/lib/elliptic/curves.js"); // Protocols

elliptic.ec = __webpack_require__(/*! ./elliptic/ec */ "./node_modules/elliptic/lib/elliptic/ec/index.js");
elliptic.eddsa = __webpack_require__(/*! ./elliptic/eddsa */ "./node_modules/elliptic/lib/elliptic/eddsa/index.js");

/***/ }),

/***/ "./node_modules/elliptic/lib/elliptic/curve/base.js":
/*!**********************************************************!*\
  !*** ./node_modules/elliptic/lib/elliptic/curve/base.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var BN = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");

var utils = __webpack_require__(/*! ../utils */ "./node_modules/elliptic/lib/elliptic/utils.js");

var getNAF = utils.getNAF;
var getJSF = utils.getJSF;
var assert = utils.assert;

function BaseCurve(type, conf) {
  this.type = type;
  this.p = new BN(conf.p, 16); // Use Montgomery, when there is no fast reduction for the prime

  this.red = conf.prime ? BN.red(conf.prime) : BN.mont(this.p); // Useful for many curves

  this.zero = new BN(0).toRed(this.red);
  this.one = new BN(1).toRed(this.red);
  this.two = new BN(2).toRed(this.red); // Curve configuration, optional

  this.n = conf.n && new BN(conf.n, 16);
  this.g = conf.g && this.pointFromJSON(conf.g, conf.gRed); // Temporary arrays

  this._wnafT1 = new Array(4);
  this._wnafT2 = new Array(4);
  this._wnafT3 = new Array(4);
  this._wnafT4 = new Array(4);
  this._bitLength = this.n ? this.n.bitLength() : 0; // Generalized Greg Maxwell's trick

  var adjustCount = this.n && this.p.div(this.n);

  if (!adjustCount || adjustCount.cmpn(100) > 0) {
    this.redN = null;
  } else {
    this._maxwellTrick = true;
    this.redN = this.n.toRed(this.red);
  }
}

module.exports = BaseCurve;

BaseCurve.prototype.point = function point() {
  throw new Error('Not implemented');
};

BaseCurve.prototype.validate = function validate() {
  throw new Error('Not implemented');
};

BaseCurve.prototype._fixedNafMul = function _fixedNafMul(p, k) {
  assert(p.precomputed);

  var doubles = p._getDoubles();

  var naf = getNAF(k, 1, this._bitLength);
  var I = (1 << doubles.step + 1) - (doubles.step % 2 === 0 ? 2 : 1);
  I /= 3; // Translate into more windowed form

  var repr = [];
  var j;
  var nafW;

  for (j = 0; j < naf.length; j += doubles.step) {
    nafW = 0;

    for (var l = j + doubles.step - 1; l >= j; l--) nafW = (nafW << 1) + naf[l];

    repr.push(nafW);
  }

  var a = this.jpoint(null, null, null);
  var b = this.jpoint(null, null, null);

  for (var i = I; i > 0; i--) {
    for (j = 0; j < repr.length; j++) {
      nafW = repr[j];
      if (nafW === i) b = b.mixedAdd(doubles.points[j]);else if (nafW === -i) b = b.mixedAdd(doubles.points[j].neg());
    }

    a = a.add(b);
  }

  return a.toP();
};

BaseCurve.prototype._wnafMul = function _wnafMul(p, k) {
  var w = 4; // Precompute window

  var nafPoints = p._getNAFPoints(w);

  w = nafPoints.wnd;
  var wnd = nafPoints.points; // Get NAF form

  var naf = getNAF(k, w, this._bitLength); // Add `this`*(N+1) for every w-NAF index

  var acc = this.jpoint(null, null, null);

  for (var i = naf.length - 1; i >= 0; i--) {
    // Count zeroes
    for (var l = 0; i >= 0 && naf[i] === 0; i--) l++;

    if (i >= 0) l++;
    acc = acc.dblp(l);
    if (i < 0) break;
    var z = naf[i];
    assert(z !== 0);

    if (p.type === 'affine') {
      // J +- P
      if (z > 0) acc = acc.mixedAdd(wnd[z - 1 >> 1]);else acc = acc.mixedAdd(wnd[-z - 1 >> 1].neg());
    } else {
      // J +- J
      if (z > 0) acc = acc.add(wnd[z - 1 >> 1]);else acc = acc.add(wnd[-z - 1 >> 1].neg());
    }
  }

  return p.type === 'affine' ? acc.toP() : acc;
};

BaseCurve.prototype._wnafMulAdd = function _wnafMulAdd(defW, points, coeffs, len, jacobianResult) {
  var wndWidth = this._wnafT1;
  var wnd = this._wnafT2;
  var naf = this._wnafT3; // Fill all arrays

  var max = 0;
  var i;
  var j;
  var p;

  for (i = 0; i < len; i++) {
    p = points[i];

    var nafPoints = p._getNAFPoints(defW);

    wndWidth[i] = nafPoints.wnd;
    wnd[i] = nafPoints.points;
  } // Comb small window NAFs


  for (i = len - 1; i >= 1; i -= 2) {
    var a = i - 1;
    var b = i;

    if (wndWidth[a] !== 1 || wndWidth[b] !== 1) {
      naf[a] = getNAF(coeffs[a], wndWidth[a], this._bitLength);
      naf[b] = getNAF(coeffs[b], wndWidth[b], this._bitLength);
      max = Math.max(naf[a].length, max);
      max = Math.max(naf[b].length, max);
      continue;
    }

    var comb = [points[a],
    /* 1 */
    null,
    /* 3 */
    null,
    /* 5 */
    points[b]
    /* 7 */
    ]; // Try to avoid Projective points, if possible

    if (points[a].y.cmp(points[b].y) === 0) {
      comb[1] = points[a].add(points[b]);
      comb[2] = points[a].toJ().mixedAdd(points[b].neg());
    } else if (points[a].y.cmp(points[b].y.redNeg()) === 0) {
      comb[1] = points[a].toJ().mixedAdd(points[b]);
      comb[2] = points[a].add(points[b].neg());
    } else {
      comb[1] = points[a].toJ().mixedAdd(points[b]);
      comb[2] = points[a].toJ().mixedAdd(points[b].neg());
    }

    var index = [-3,
    /* -1 -1 */
    -1,
    /* -1 0 */
    -5,
    /* -1 1 */
    -7,
    /* 0 -1 */
    0,
    /* 0 0 */
    7,
    /* 0 1 */
    5,
    /* 1 -1 */
    1,
    /* 1 0 */
    3
    /* 1 1 */
    ];
    var jsf = getJSF(coeffs[a], coeffs[b]);
    max = Math.max(jsf[0].length, max);
    naf[a] = new Array(max);
    naf[b] = new Array(max);

    for (j = 0; j < max; j++) {
      var ja = jsf[0][j] | 0;
      var jb = jsf[1][j] | 0;
      naf[a][j] = index[(ja + 1) * 3 + (jb + 1)];
      naf[b][j] = 0;
      wnd[a] = comb;
    }
  }

  var acc = this.jpoint(null, null, null);
  var tmp = this._wnafT4;

  for (i = max; i >= 0; i--) {
    var k = 0;

    while (i >= 0) {
      var zero = true;

      for (j = 0; j < len; j++) {
        tmp[j] = naf[j][i] | 0;
        if (tmp[j] !== 0) zero = false;
      }

      if (!zero) break;
      k++;
      i--;
    }

    if (i >= 0) k++;
    acc = acc.dblp(k);
    if (i < 0) break;

    for (j = 0; j < len; j++) {
      var z = tmp[j];
      p;
      if (z === 0) continue;else if (z > 0) p = wnd[j][z - 1 >> 1];else if (z < 0) p = wnd[j][-z - 1 >> 1].neg();
      if (p.type === 'affine') acc = acc.mixedAdd(p);else acc = acc.add(p);
    }
  } // Zeroify references


  for (i = 0; i < len; i++) wnd[i] = null;

  if (jacobianResult) return acc;else return acc.toP();
};

function BasePoint(curve, type) {
  this.curve = curve;
  this.type = type;
  this.precomputed = null;
}

BaseCurve.BasePoint = BasePoint;

BasePoint.prototype.eq = function
  /*other*/
eq() {
  throw new Error('Not implemented');
};

BasePoint.prototype.validate = function validate() {
  return this.curve.validate(this);
};

BaseCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
  bytes = utils.toArray(bytes, enc);
  var len = this.p.byteLength(); // uncompressed, hybrid-odd, hybrid-even

  if ((bytes[0] === 0x04 || bytes[0] === 0x06 || bytes[0] === 0x07) && bytes.length - 1 === 2 * len) {
    if (bytes[0] === 0x06) assert(bytes[bytes.length - 1] % 2 === 0);else if (bytes[0] === 0x07) assert(bytes[bytes.length - 1] % 2 === 1);
    var res = this.point(bytes.slice(1, 1 + len), bytes.slice(1 + len, 1 + 2 * len));
    return res;
  } else if ((bytes[0] === 0x02 || bytes[0] === 0x03) && bytes.length - 1 === len) {
    return this.pointFromX(bytes.slice(1, 1 + len), bytes[0] === 0x03);
  }

  throw new Error('Unknown point format');
};

BasePoint.prototype.encodeCompressed = function encodeCompressed(enc) {
  return this.encode(enc, true);
};

BasePoint.prototype._encode = function _encode(compact) {
  var len = this.curve.p.byteLength();
  var x = this.getX().toArray('be', len);
  if (compact) return [this.getY().isEven() ? 0x02 : 0x03].concat(x);
  return [0x04].concat(x, this.getY().toArray('be', len));
};

BasePoint.prototype.encode = function encode(enc, compact) {
  return utils.encode(this._encode(compact), enc);
};

BasePoint.prototype.precompute = function precompute(power) {
  if (this.precomputed) return this;
  var precomputed = {
    doubles: null,
    naf: null,
    beta: null
  };
  precomputed.naf = this._getNAFPoints(8);
  precomputed.doubles = this._getDoubles(4, power);
  precomputed.beta = this._getBeta();
  this.precomputed = precomputed;
  return this;
};

BasePoint.prototype._hasDoubles = function _hasDoubles(k) {
  if (!this.precomputed) return false;
  var doubles = this.precomputed.doubles;
  if (!doubles) return false;
  return doubles.points.length >= Math.ceil((k.bitLength() + 1) / doubles.step);
};

BasePoint.prototype._getDoubles = function _getDoubles(step, power) {
  if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
  var doubles = [this];
  var acc = this;

  for (var i = 0; i < power; i += step) {
    for (var j = 0; j < step; j++) acc = acc.dbl();

    doubles.push(acc);
  }

  return {
    step: step,
    points: doubles
  };
};

BasePoint.prototype._getNAFPoints = function _getNAFPoints(wnd) {
  if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
  var res = [this];
  var max = (1 << wnd) - 1;
  var dbl = max === 1 ? null : this.dbl();

  for (var i = 1; i < max; i++) res[i] = res[i - 1].add(dbl);

  return {
    wnd: wnd,
    points: res
  };
};

BasePoint.prototype._getBeta = function _getBeta() {
  return null;
};

BasePoint.prototype.dblp = function dblp(k) {
  var r = this;

  for (var i = 0; i < k; i++) r = r.dbl();

  return r;
};

/***/ }),

/***/ "./node_modules/elliptic/lib/elliptic/curve/edwards.js":
/*!*************************************************************!*\
  !*** ./node_modules/elliptic/lib/elliptic/curve/edwards.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/elliptic/lib/elliptic/utils.js");

var BN = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");

var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

var Base = __webpack_require__(/*! ./base */ "./node_modules/elliptic/lib/elliptic/curve/base.js");

var assert = utils.assert;

function EdwardsCurve(conf) {
  // NOTE: Important as we are creating point in Base.call()
  this.twisted = (conf.a | 0) !== 1;
  this.mOneA = this.twisted && (conf.a | 0) === -1;
  this.extended = this.mOneA;
  Base.call(this, 'edwards', conf);
  this.a = new BN(conf.a, 16).umod(this.red.m);
  this.a = this.a.toRed(this.red);
  this.c = new BN(conf.c, 16).toRed(this.red);
  this.c2 = this.c.redSqr();
  this.d = new BN(conf.d, 16).toRed(this.red);
  this.dd = this.d.redAdd(this.d);
  assert(!this.twisted || this.c.fromRed().cmpn(1) === 0);
  this.oneC = (conf.c | 0) === 1;
}

inherits(EdwardsCurve, Base);
module.exports = EdwardsCurve;

EdwardsCurve.prototype._mulA = function _mulA(num) {
  if (this.mOneA) return num.redNeg();else return this.a.redMul(num);
};

EdwardsCurve.prototype._mulC = function _mulC(num) {
  if (this.oneC) return num;else return this.c.redMul(num);
}; // Just for compatibility with Short curve


EdwardsCurve.prototype.jpoint = function jpoint(x, y, z, t) {
  return this.point(x, y, z, t);
};

EdwardsCurve.prototype.pointFromX = function pointFromX(x, odd) {
  x = new BN(x, 16);
  if (!x.red) x = x.toRed(this.red);
  var x2 = x.redSqr();
  var rhs = this.c2.redSub(this.a.redMul(x2));
  var lhs = this.one.redSub(this.c2.redMul(this.d).redMul(x2));
  var y2 = rhs.redMul(lhs.redInvm());
  var y = y2.redSqrt();
  if (y.redSqr().redSub(y2).cmp(this.zero) !== 0) throw new Error('invalid point');
  var isOdd = y.fromRed().isOdd();
  if (odd && !isOdd || !odd && isOdd) y = y.redNeg();
  return this.point(x, y);
};

EdwardsCurve.prototype.pointFromY = function pointFromY(y, odd) {
  y = new BN(y, 16);
  if (!y.red) y = y.toRed(this.red); // x^2 = (y^2 - c^2) / (c^2 d y^2 - a)

  var y2 = y.redSqr();
  var lhs = y2.redSub(this.c2);
  var rhs = y2.redMul(this.d).redMul(this.c2).redSub(this.a);
  var x2 = lhs.redMul(rhs.redInvm());

  if (x2.cmp(this.zero) === 0) {
    if (odd) throw new Error('invalid point');else return this.point(this.zero, y);
  }

  var x = x2.redSqrt();
  if (x.redSqr().redSub(x2).cmp(this.zero) !== 0) throw new Error('invalid point');
  if (x.fromRed().isOdd() !== odd) x = x.redNeg();
  return this.point(x, y);
};

EdwardsCurve.prototype.validate = function validate(point) {
  if (point.isInfinity()) return true; // Curve: A * X^2 + Y^2 = C^2 * (1 + D * X^2 * Y^2)

  point.normalize();
  var x2 = point.x.redSqr();
  var y2 = point.y.redSqr();
  var lhs = x2.redMul(this.a).redAdd(y2);
  var rhs = this.c2.redMul(this.one.redAdd(this.d.redMul(x2).redMul(y2)));
  return lhs.cmp(rhs) === 0;
};

function Point(curve, x, y, z, t) {
  Base.BasePoint.call(this, curve, 'projective');

  if (x === null && y === null && z === null) {
    this.x = this.curve.zero;
    this.y = this.curve.one;
    this.z = this.curve.one;
    this.t = this.curve.zero;
    this.zOne = true;
  } else {
    this.x = new BN(x, 16);
    this.y = new BN(y, 16);
    this.z = z ? new BN(z, 16) : this.curve.one;
    this.t = t && new BN(t, 16);
    if (!this.x.red) this.x = this.x.toRed(this.curve.red);
    if (!this.y.red) this.y = this.y.toRed(this.curve.red);
    if (!this.z.red) this.z = this.z.toRed(this.curve.red);
    if (this.t && !this.t.red) this.t = this.t.toRed(this.curve.red);
    this.zOne = this.z === this.curve.one; // Use extended coordinates

    if (this.curve.extended && !this.t) {
      this.t = this.x.redMul(this.y);
      if (!this.zOne) this.t = this.t.redMul(this.z.redInvm());
    }
  }
}

inherits(Point, Base.BasePoint);

EdwardsCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
  return Point.fromJSON(this, obj);
};

EdwardsCurve.prototype.point = function point(x, y, z, t) {
  return new Point(this, x, y, z, t);
};

Point.fromJSON = function fromJSON(curve, obj) {
  return new Point(curve, obj[0], obj[1], obj[2]);
};

Point.prototype.inspect = function inspect() {
  if (this.isInfinity()) return '<EC Point Infinity>';
  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + ' z: ' + this.z.fromRed().toString(16, 2) + '>';
};

Point.prototype.isInfinity = function isInfinity() {
  // XXX This code assumes that zero is always zero in red
  return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || this.zOne && this.y.cmp(this.curve.c) === 0);
};

Point.prototype._extDbl = function _extDbl() {
  // hyperelliptic.org/EFD/g1p/auto-twisted-extended-1.html
  //     #doubling-dbl-2008-hwcd
  // 4M + 4S
  // A = X1^2
  var a = this.x.redSqr(); // B = Y1^2

  var b = this.y.redSqr(); // C = 2 * Z1^2

  var c = this.z.redSqr();
  c = c.redIAdd(c); // D = a * A

  var d = this.curve._mulA(a); // E = (X1 + Y1)^2 - A - B


  var e = this.x.redAdd(this.y).redSqr().redISub(a).redISub(b); // G = D + B

  var g = d.redAdd(b); // F = G - C

  var f = g.redSub(c); // H = D - B

  var h = d.redSub(b); // X3 = E * F

  var nx = e.redMul(f); // Y3 = G * H

  var ny = g.redMul(h); // T3 = E * H

  var nt = e.redMul(h); // Z3 = F * G

  var nz = f.redMul(g);
  return this.curve.point(nx, ny, nz, nt);
};

Point.prototype._projDbl = function _projDbl() {
  // hyperelliptic.org/EFD/g1p/auto-twisted-projective.html
  //     #doubling-dbl-2008-bbjlp
  //     #doubling-dbl-2007-bl
  // and others
  // Generally 3M + 4S or 2M + 4S
  // B = (X1 + Y1)^2
  var b = this.x.redAdd(this.y).redSqr(); // C = X1^2

  var c = this.x.redSqr(); // D = Y1^2

  var d = this.y.redSqr();
  var nx;
  var ny;
  var nz;
  var e;
  var h;
  var j;

  if (this.curve.twisted) {
    // E = a * C
    e = this.curve._mulA(c); // F = E + D

    var f = e.redAdd(d);

    if (this.zOne) {
      // X3 = (B - C - D) * (F - 2)
      nx = b.redSub(c).redSub(d).redMul(f.redSub(this.curve.two)); // Y3 = F * (E - D)

      ny = f.redMul(e.redSub(d)); // Z3 = F^2 - 2 * F

      nz = f.redSqr().redSub(f).redSub(f);
    } else {
      // H = Z1^2
      h = this.z.redSqr(); // J = F - 2 * H

      j = f.redSub(h).redISub(h); // X3 = (B-C-D)*J

      nx = b.redSub(c).redISub(d).redMul(j); // Y3 = F * (E - D)

      ny = f.redMul(e.redSub(d)); // Z3 = F * J

      nz = f.redMul(j);
    }
  } else {
    // E = C + D
    e = c.redAdd(d); // H = (c * Z1)^2

    h = this.curve._mulC(this.z).redSqr(); // J = E - 2 * H

    j = e.redSub(h).redSub(h); // X3 = c * (B - E) * J

    nx = this.curve._mulC(b.redISub(e)).redMul(j); // Y3 = c * E * (C - D)

    ny = this.curve._mulC(e).redMul(c.redISub(d)); // Z3 = E * J

    nz = e.redMul(j);
  }

  return this.curve.point(nx, ny, nz);
};

Point.prototype.dbl = function dbl() {
  if (this.isInfinity()) return this; // Double in extended coordinates

  if (this.curve.extended) return this._extDbl();else return this._projDbl();
};

Point.prototype._extAdd = function _extAdd(p) {
  // hyperelliptic.org/EFD/g1p/auto-twisted-extended-1.html
  //     #addition-add-2008-hwcd-3
  // 8M
  // A = (Y1 - X1) * (Y2 - X2)
  var a = this.y.redSub(this.x).redMul(p.y.redSub(p.x)); // B = (Y1 + X1) * (Y2 + X2)

  var b = this.y.redAdd(this.x).redMul(p.y.redAdd(p.x)); // C = T1 * k * T2

  var c = this.t.redMul(this.curve.dd).redMul(p.t); // D = Z1 * 2 * Z2

  var d = this.z.redMul(p.z.redAdd(p.z)); // E = B - A

  var e = b.redSub(a); // F = D - C

  var f = d.redSub(c); // G = D + C

  var g = d.redAdd(c); // H = B + A

  var h = b.redAdd(a); // X3 = E * F

  var nx = e.redMul(f); // Y3 = G * H

  var ny = g.redMul(h); // T3 = E * H

  var nt = e.redMul(h); // Z3 = F * G

  var nz = f.redMul(g);
  return this.curve.point(nx, ny, nz, nt);
};

Point.prototype._projAdd = function _projAdd(p) {
  // hyperelliptic.org/EFD/g1p/auto-twisted-projective.html
  //     #addition-add-2008-bbjlp
  //     #addition-add-2007-bl
  // 10M + 1S
  // A = Z1 * Z2
  var a = this.z.redMul(p.z); // B = A^2

  var b = a.redSqr(); // C = X1 * X2

  var c = this.x.redMul(p.x); // D = Y1 * Y2

  var d = this.y.redMul(p.y); // E = d * C * D

  var e = this.curve.d.redMul(c).redMul(d); // F = B - E

  var f = b.redSub(e); // G = B + E

  var g = b.redAdd(e); // X3 = A * F * ((X1 + Y1) * (X2 + Y2) - C - D)

  var tmp = this.x.redAdd(this.y).redMul(p.x.redAdd(p.y)).redISub(c).redISub(d);
  var nx = a.redMul(f).redMul(tmp);
  var ny;
  var nz;

  if (this.curve.twisted) {
    // Y3 = A * G * (D - a * C)
    ny = a.redMul(g).redMul(d.redSub(this.curve._mulA(c))); // Z3 = F * G

    nz = f.redMul(g);
  } else {
    // Y3 = A * G * (D - C)
    ny = a.redMul(g).redMul(d.redSub(c)); // Z3 = c * F * G

    nz = this.curve._mulC(f).redMul(g);
  }

  return this.curve.point(nx, ny, nz);
};

Point.prototype.add = function add(p) {
  if (this.isInfinity()) return p;
  if (p.isInfinity()) return this;
  if (this.curve.extended) return this._extAdd(p);else return this._projAdd(p);
};

Point.prototype.mul = function mul(k) {
  if (this._hasDoubles(k)) return this.curve._fixedNafMul(this, k);else return this.curve._wnafMul(this, k);
};

Point.prototype.mulAdd = function mulAdd(k1, p, k2) {
  return this.curve._wnafMulAdd(1, [this, p], [k1, k2], 2, false);
};

Point.prototype.jmulAdd = function jmulAdd(k1, p, k2) {
  return this.curve._wnafMulAdd(1, [this, p], [k1, k2], 2, true);
};

Point.prototype.normalize = function normalize() {
  if (this.zOne) return this; // Normalize coordinates

  var zi = this.z.redInvm();
  this.x = this.x.redMul(zi);
  this.y = this.y.redMul(zi);
  if (this.t) this.t = this.t.redMul(zi);
  this.z = this.curve.one;
  this.zOne = true;
  return this;
};

Point.prototype.neg = function neg() {
  return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
};

Point.prototype.getX = function getX() {
  this.normalize();
  return this.x.fromRed();
};

Point.prototype.getY = function getY() {
  this.normalize();
  return this.y.fromRed();
};

Point.prototype.eq = function eq(other) {
  return this === other || this.getX().cmp(other.getX()) === 0 && this.getY().cmp(other.getY()) === 0;
};

Point.prototype.eqXToP = function eqXToP(x) {
  var rx = x.toRed(this.curve.red).redMul(this.z);
  if (this.x.cmp(rx) === 0) return true;
  var xc = x.clone();
  var t = this.curve.redN.redMul(this.z);

  for (;;) {
    xc.iadd(this.curve.n);
    if (xc.cmp(this.curve.p) >= 0) return false;
    rx.redIAdd(t);
    if (this.x.cmp(rx) === 0) return true;
  }
}; // Compatibility with BaseCurve


Point.prototype.toP = Point.prototype.normalize;
Point.prototype.mixedAdd = Point.prototype.add;

/***/ }),

/***/ "./node_modules/elliptic/lib/elliptic/curve/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/elliptic/lib/elliptic/curve/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var curve = exports;
curve.base = __webpack_require__(/*! ./base */ "./node_modules/elliptic/lib/elliptic/curve/base.js");
curve.short = __webpack_require__(/*! ./short */ "./node_modules/elliptic/lib/elliptic/curve/short.js");
curve.mont = __webpack_require__(/*! ./mont */ "./node_modules/elliptic/lib/elliptic/curve/mont.js");
curve.edwards = __webpack_require__(/*! ./edwards */ "./node_modules/elliptic/lib/elliptic/curve/edwards.js");

/***/ }),

/***/ "./node_modules/elliptic/lib/elliptic/curve/mont.js":
/*!**********************************************************!*\
  !*** ./node_modules/elliptic/lib/elliptic/curve/mont.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var BN = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");

var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

var Base = __webpack_require__(/*! ./base */ "./node_modules/elliptic/lib/elliptic/curve/base.js");

var utils = __webpack_require__(/*! ../utils */ "./node_modules/elliptic/lib/elliptic/utils.js");

function MontCurve(conf) {
  Base.call(this, 'mont', conf);
  this.a = new BN(conf.a, 16).toRed(this.red);
  this.b = new BN(conf.b, 16).toRed(this.red);
  this.i4 = new BN(4).toRed(this.red).redInvm();
  this.two = new BN(2).toRed(this.red);
  this.a24 = this.i4.redMul(this.a.redAdd(this.two));
}

inherits(MontCurve, Base);
module.exports = MontCurve;

MontCurve.prototype.validate = function validate(point) {
  var x = point.normalize().x;
  var x2 = x.redSqr();
  var rhs = x2.redMul(x).redAdd(x2.redMul(this.a)).redAdd(x);
  var y = rhs.redSqrt();
  return y.redSqr().cmp(rhs) === 0;
};

function Point(curve, x, z) {
  Base.BasePoint.call(this, curve, 'projective');

  if (x === null && z === null) {
    this.x = this.curve.one;
    this.z = this.curve.zero;
  } else {
    this.x = new BN(x, 16);
    this.z = new BN(z, 16);
    if (!this.x.red) this.x = this.x.toRed(this.curve.red);
    if (!this.z.red) this.z = this.z.toRed(this.curve.red);
  }
}

inherits(Point, Base.BasePoint);

MontCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
  return this.point(utils.toArray(bytes, enc), 1);
};

MontCurve.prototype.point = function point(x, z) {
  return new Point(this, x, z);
};

MontCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
  return Point.fromJSON(this, obj);
};

Point.prototype.precompute = function precompute() {// No-op
};

Point.prototype._encode = function _encode() {
  return this.getX().toArray('be', this.curve.p.byteLength());
};

Point.fromJSON = function fromJSON(curve, obj) {
  return new Point(curve, obj[0], obj[1] || curve.one);
};

Point.prototype.inspect = function inspect() {
  if (this.isInfinity()) return '<EC Point Infinity>';
  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' z: ' + this.z.fromRed().toString(16, 2) + '>';
};

Point.prototype.isInfinity = function isInfinity() {
  // XXX This code assumes that zero is always zero in red
  return this.z.cmpn(0) === 0;
};

Point.prototype.dbl = function dbl() {
  // http://hyperelliptic.org/EFD/g1p/auto-montgom-xz.html#doubling-dbl-1987-m-3
  // 2M + 2S + 4A
  // A = X1 + Z1
  var a = this.x.redAdd(this.z); // AA = A^2

  var aa = a.redSqr(); // B = X1 - Z1

  var b = this.x.redSub(this.z); // BB = B^2

  var bb = b.redSqr(); // C = AA - BB

  var c = aa.redSub(bb); // X3 = AA * BB

  var nx = aa.redMul(bb); // Z3 = C * (BB + A24 * C)

  var nz = c.redMul(bb.redAdd(this.curve.a24.redMul(c)));
  return this.curve.point(nx, nz);
};

Point.prototype.add = function add() {
  throw new Error('Not supported on Montgomery curve');
};

Point.prototype.diffAdd = function diffAdd(p, diff) {
  // http://hyperelliptic.org/EFD/g1p/auto-montgom-xz.html#diffadd-dadd-1987-m-3
  // 4M + 2S + 6A
  // A = X2 + Z2
  var a = this.x.redAdd(this.z); // B = X2 - Z2

  var b = this.x.redSub(this.z); // C = X3 + Z3

  var c = p.x.redAdd(p.z); // D = X3 - Z3

  var d = p.x.redSub(p.z); // DA = D * A

  var da = d.redMul(a); // CB = C * B

  var cb = c.redMul(b); // X5 = Z1 * (DA + CB)^2

  var nx = diff.z.redMul(da.redAdd(cb).redSqr()); // Z5 = X1 * (DA - CB)^2

  var nz = diff.x.redMul(da.redISub(cb).redSqr());
  return this.curve.point(nx, nz);
};

Point.prototype.mul = function mul(k) {
  var t = k.clone();
  var a = this; // (N / 2) * Q + Q

  var b = this.curve.point(null, null); // (N / 2) * Q

  var c = this; // Q

  for (var bits = []; t.cmpn(0) !== 0; t.iushrn(1)) bits.push(t.andln(1));

  for (var i = bits.length - 1; i >= 0; i--) {
    if (bits[i] === 0) {
      // N * Q + Q = ((N / 2) * Q + Q)) + (N / 2) * Q
      a = a.diffAdd(b, c); // N * Q = 2 * ((N / 2) * Q + Q))

      b = b.dbl();
    } else {
      // N * Q = ((N / 2) * Q + Q) + ((N / 2) * Q)
      b = a.diffAdd(b, c); // N * Q + Q = 2 * ((N / 2) * Q + Q)

      a = a.dbl();
    }
  }

  return b;
};

Point.prototype.mulAdd = function mulAdd() {
  throw new Error('Not supported on Montgomery curve');
};

Point.prototype.jumlAdd = function jumlAdd() {
  throw new Error('Not supported on Montgomery curve');
};

Point.prototype.eq = function eq(other) {
  return this.getX().cmp(other.getX()) === 0;
};

Point.prototype.normalize = function normalize() {
  this.x = this.x.redMul(this.z.redInvm());
  this.z = this.curve.one;
  return this;
};

Point.prototype.getX = function getX() {
  // Normalize coordinates
  this.normalize();
  return this.x.fromRed();
};

/***/ }),

/***/ "./node_modules/elliptic/lib/elliptic/curve/short.js":
/*!***********************************************************!*\
  !*** ./node_modules/elliptic/lib/elliptic/curve/short.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/elliptic/lib/elliptic/utils.js");

var BN = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");

var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

var Base = __webpack_require__(/*! ./base */ "./node_modules/elliptic/lib/elliptic/curve/base.js");

var assert = utils.assert;

function ShortCurve(conf) {
  Base.call(this, 'short', conf);
  this.a = new BN(conf.a, 16).toRed(this.red);
  this.b = new BN(conf.b, 16).toRed(this.red);
  this.tinv = this.two.redInvm();
  this.zeroA = this.a.fromRed().cmpn(0) === 0;
  this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0; // If the curve is endomorphic, precalculate beta and lambda

  this.endo = this._getEndomorphism(conf);
  this._endoWnafT1 = new Array(4);
  this._endoWnafT2 = new Array(4);
}

inherits(ShortCurve, Base);
module.exports = ShortCurve;

ShortCurve.prototype._getEndomorphism = function _getEndomorphism(conf) {
  // No efficient endomorphism
  if (!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1) return; // Compute beta and lambda, that lambda * P = (beta * Px; Py)

  var beta;
  var lambda;

  if (conf.beta) {
    beta = new BN(conf.beta, 16).toRed(this.red);
  } else {
    var betas = this._getEndoRoots(this.p); // Choose the smallest beta


    beta = betas[0].cmp(betas[1]) < 0 ? betas[0] : betas[1];
    beta = beta.toRed(this.red);
  }

  if (conf.lambda) {
    lambda = new BN(conf.lambda, 16);
  } else {
    // Choose the lambda that is matching selected beta
    var lambdas = this._getEndoRoots(this.n);

    if (this.g.mul(lambdas[0]).x.cmp(this.g.x.redMul(beta)) === 0) {
      lambda = lambdas[0];
    } else {
      lambda = lambdas[1];
      assert(this.g.mul(lambda).x.cmp(this.g.x.redMul(beta)) === 0);
    }
  } // Get basis vectors, used for balanced length-two representation


  var basis;

  if (conf.basis) {
    basis = conf.basis.map(function (vec) {
      return {
        a: new BN(vec.a, 16),
        b: new BN(vec.b, 16)
      };
    });
  } else {
    basis = this._getEndoBasis(lambda);
  }

  return {
    beta: beta,
    lambda: lambda,
    basis: basis
  };
};

ShortCurve.prototype._getEndoRoots = function _getEndoRoots(num) {
  // Find roots of for x^2 + x + 1 in F
  // Root = (-1 +- Sqrt(-3)) / 2
  //
  var red = num === this.p ? this.red : BN.mont(num);
  var tinv = new BN(2).toRed(red).redInvm();
  var ntinv = tinv.redNeg();
  var s = new BN(3).toRed(red).redNeg().redSqrt().redMul(tinv);
  var l1 = ntinv.redAdd(s).fromRed();
  var l2 = ntinv.redSub(s).fromRed();
  return [l1, l2];
};

ShortCurve.prototype._getEndoBasis = function _getEndoBasis(lambda) {
  // aprxSqrt >= sqrt(this.n)
  var aprxSqrt = this.n.ushrn(Math.floor(this.n.bitLength() / 2)); // 3.74
  // Run EGCD, until r(L + 1) < aprxSqrt

  var u = lambda;
  var v = this.n.clone();
  var x1 = new BN(1);
  var y1 = new BN(0);
  var x2 = new BN(0);
  var y2 = new BN(1); // NOTE: all vectors are roots of: a + b * lambda = 0 (mod n)

  var a0;
  var b0; // First vector

  var a1;
  var b1; // Second vector

  var a2;
  var b2;
  var prevR;
  var i = 0;
  var r;
  var x;

  while (u.cmpn(0) !== 0) {
    var q = v.div(u);
    r = v.sub(q.mul(u));
    x = x2.sub(q.mul(x1));
    var y = y2.sub(q.mul(y1));

    if (!a1 && r.cmp(aprxSqrt) < 0) {
      a0 = prevR.neg();
      b0 = x1;
      a1 = r.neg();
      b1 = x;
    } else if (a1 && ++i === 2) {
      break;
    }

    prevR = r;
    v = u;
    u = r;
    x2 = x1;
    x1 = x;
    y2 = y1;
    y1 = y;
  }

  a2 = r.neg();
  b2 = x;
  var len1 = a1.sqr().add(b1.sqr());
  var len2 = a2.sqr().add(b2.sqr());

  if (len2.cmp(len1) >= 0) {
    a2 = a0;
    b2 = b0;
  } // Normalize signs


  if (a1.negative) {
    a1 = a1.neg();
    b1 = b1.neg();
  }

  if (a2.negative) {
    a2 = a2.neg();
    b2 = b2.neg();
  }

  return [{
    a: a1,
    b: b1
  }, {
    a: a2,
    b: b2
  }];
};

ShortCurve.prototype._endoSplit = function _endoSplit(k) {
  var basis = this.endo.basis;
  var v1 = basis[0];
  var v2 = basis[1];
  var c1 = v2.b.mul(k).divRound(this.n);
  var c2 = v1.b.neg().mul(k).divRound(this.n);
  var p1 = c1.mul(v1.a);
  var p2 = c2.mul(v2.a);
  var q1 = c1.mul(v1.b);
  var q2 = c2.mul(v2.b); // Calculate answer

  var k1 = k.sub(p1).sub(p2);
  var k2 = q1.add(q2).neg();
  return {
    k1: k1,
    k2: k2
  };
};

ShortCurve.prototype.pointFromX = function pointFromX(x, odd) {
  x = new BN(x, 16);
  if (!x.red) x = x.toRed(this.red);
  var y2 = x.redSqr().redMul(x).redIAdd(x.redMul(this.a)).redIAdd(this.b);
  var y = y2.redSqrt();
  if (y.redSqr().redSub(y2).cmp(this.zero) !== 0) throw new Error('invalid point'); // XXX Is there any way to tell if the number is odd without converting it
  // to non-red form?

  var isOdd = y.fromRed().isOdd();
  if (odd && !isOdd || !odd && isOdd) y = y.redNeg();
  return this.point(x, y);
};

ShortCurve.prototype.validate = function validate(point) {
  if (point.inf) return true;
  var x = point.x;
  var y = point.y;
  var ax = this.a.redMul(x);
  var rhs = x.redSqr().redMul(x).redIAdd(ax).redIAdd(this.b);
  return y.redSqr().redISub(rhs).cmpn(0) === 0;
};

ShortCurve.prototype._endoWnafMulAdd = function _endoWnafMulAdd(points, coeffs, jacobianResult) {
  var npoints = this._endoWnafT1;
  var ncoeffs = this._endoWnafT2;

  for (var i = 0; i < points.length; i++) {
    var split = this._endoSplit(coeffs[i]);

    var p = points[i];

    var beta = p._getBeta();

    if (split.k1.negative) {
      split.k1.ineg();
      p = p.neg(true);
    }

    if (split.k2.negative) {
      split.k2.ineg();
      beta = beta.neg(true);
    }

    npoints[i * 2] = p;
    npoints[i * 2 + 1] = beta;
    ncoeffs[i * 2] = split.k1;
    ncoeffs[i * 2 + 1] = split.k2;
  }

  var res = this._wnafMulAdd(1, npoints, ncoeffs, i * 2, jacobianResult); // Clean-up references to points and coefficients


  for (var j = 0; j < i * 2; j++) {
    npoints[j] = null;
    ncoeffs[j] = null;
  }

  return res;
};

function Point(curve, x, y, isRed) {
  Base.BasePoint.call(this, curve, 'affine');

  if (x === null && y === null) {
    this.x = null;
    this.y = null;
    this.inf = true;
  } else {
    this.x = new BN(x, 16);
    this.y = new BN(y, 16); // Force redgomery representation when loading from JSON

    if (isRed) {
      this.x.forceRed(this.curve.red);
      this.y.forceRed(this.curve.red);
    }

    if (!this.x.red) this.x = this.x.toRed(this.curve.red);
    if (!this.y.red) this.y = this.y.toRed(this.curve.red);
    this.inf = false;
  }
}

inherits(Point, Base.BasePoint);

ShortCurve.prototype.point = function point(x, y, isRed) {
  return new Point(this, x, y, isRed);
};

ShortCurve.prototype.pointFromJSON = function pointFromJSON(obj, red) {
  return Point.fromJSON(this, obj, red);
};

Point.prototype._getBeta = function _getBeta() {
  if (!this.curve.endo) return;
  var pre = this.precomputed;
  if (pre && pre.beta) return pre.beta;
  var beta = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);

  if (pre) {
    var curve = this.curve;

    var endoMul = function (p) {
      return curve.point(p.x.redMul(curve.endo.beta), p.y);
    };

    pre.beta = beta;
    beta.precomputed = {
      beta: null,
      naf: pre.naf && {
        wnd: pre.naf.wnd,
        points: pre.naf.points.map(endoMul)
      },
      doubles: pre.doubles && {
        step: pre.doubles.step,
        points: pre.doubles.points.map(endoMul)
      }
    };
  }

  return beta;
};

Point.prototype.toJSON = function toJSON() {
  if (!this.precomputed) return [this.x, this.y];
  return [this.x, this.y, this.precomputed && {
    doubles: this.precomputed.doubles && {
      step: this.precomputed.doubles.step,
      points: this.precomputed.doubles.points.slice(1)
    },
    naf: this.precomputed.naf && {
      wnd: this.precomputed.naf.wnd,
      points: this.precomputed.naf.points.slice(1)
    }
  }];
};

Point.fromJSON = function fromJSON(curve, obj, red) {
  if (typeof obj === 'string') obj = JSON.parse(obj);
  var res = curve.point(obj[0], obj[1], red);
  if (!obj[2]) return res;

  function obj2point(obj) {
    return curve.point(obj[0], obj[1], red);
  }

  var pre = obj[2];
  res.precomputed = {
    beta: null,
    doubles: pre.doubles && {
      step: pre.doubles.step,
      points: [res].concat(pre.doubles.points.map(obj2point))
    },
    naf: pre.naf && {
      wnd: pre.naf.wnd,
      points: [res].concat(pre.naf.points.map(obj2point))
    }
  };
  return res;
};

Point.prototype.inspect = function inspect() {
  if (this.isInfinity()) return '<EC Point Infinity>';
  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + '>';
};

Point.prototype.isInfinity = function isInfinity() {
  return this.inf;
};

Point.prototype.add = function add(p) {
  // O + P = P
  if (this.inf) return p; // P + O = P

  if (p.inf) return this; // P + P = 2P

  if (this.eq(p)) return this.dbl(); // P + (-P) = O

  if (this.neg().eq(p)) return this.curve.point(null, null); // P + Q = O

  if (this.x.cmp(p.x) === 0) return this.curve.point(null, null);
  var c = this.y.redSub(p.y);
  if (c.cmpn(0) !== 0) c = c.redMul(this.x.redSub(p.x).redInvm());
  var nx = c.redSqr().redISub(this.x).redISub(p.x);
  var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
  return this.curve.point(nx, ny);
};

Point.prototype.dbl = function dbl() {
  if (this.inf) return this; // 2P = O

  var ys1 = this.y.redAdd(this.y);
  if (ys1.cmpn(0) === 0) return this.curve.point(null, null);
  var a = this.curve.a;
  var x2 = this.x.redSqr();
  var dyinv = ys1.redInvm();
  var c = x2.redAdd(x2).redIAdd(x2).redIAdd(a).redMul(dyinv);
  var nx = c.redSqr().redISub(this.x.redAdd(this.x));
  var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
  return this.curve.point(nx, ny);
};

Point.prototype.getX = function getX() {
  return this.x.fromRed();
};

Point.prototype.getY = function getY() {
  return this.y.fromRed();
};

Point.prototype.mul = function mul(k) {
  k = new BN(k, 16);
  if (this.isInfinity()) return this;else if (this._hasDoubles(k)) return this.curve._fixedNafMul(this, k);else if (this.curve.endo) return this.curve._endoWnafMulAdd([this], [k]);else return this.curve._wnafMul(this, k);
};

Point.prototype.mulAdd = function mulAdd(k1, p2, k2) {
  var points = [this, p2];
  var coeffs = [k1, k2];
  if (this.curve.endo) return this.curve._endoWnafMulAdd(points, coeffs);else return this.curve._wnafMulAdd(1, points, coeffs, 2);
};

Point.prototype.jmulAdd = function jmulAdd(k1, p2, k2) {
  var points = [this, p2];
  var coeffs = [k1, k2];
  if (this.curve.endo) return this.curve._endoWnafMulAdd(points, coeffs, true);else return this.curve._wnafMulAdd(1, points, coeffs, 2, true);
};

Point.prototype.eq = function eq(p) {
  return this === p || this.inf === p.inf && (this.inf || this.x.cmp(p.x) === 0 && this.y.cmp(p.y) === 0);
};

Point.prototype.neg = function neg(_precompute) {
  if (this.inf) return this;
  var res = this.curve.point(this.x, this.y.redNeg());

  if (_precompute && this.precomputed) {
    var pre = this.precomputed;

    var negate = function (p) {
      return p.neg();
    };

    res.precomputed = {
      naf: pre.naf && {
        wnd: pre.naf.wnd,
        points: pre.naf.points.map(negate)
      },
      doubles: pre.doubles && {
        step: pre.doubles.step,
        points: pre.doubles.points.map(negate)
      }
    };
  }

  return res;
};

Point.prototype.toJ = function toJ() {
  if (this.inf) return this.curve.jpoint(null, null, null);
  var res = this.curve.jpoint(this.x, this.y, this.curve.one);
  return res;
};

function JPoint(curve, x, y, z) {
  Base.BasePoint.call(this, curve, 'jacobian');

  if (x === null && y === null && z === null) {
    this.x = this.curve.one;
    this.y = this.curve.one;
    this.z = new BN(0);
  } else {
    this.x = new BN(x, 16);
    this.y = new BN(y, 16);
    this.z = new BN(z, 16);
  }

  if (!this.x.red) this.x = this.x.toRed(this.curve.red);
  if (!this.y.red) this.y = this.y.toRed(this.curve.red);
  if (!this.z.red) this.z = this.z.toRed(this.curve.red);
  this.zOne = this.z === this.curve.one;
}

inherits(JPoint, Base.BasePoint);

ShortCurve.prototype.jpoint = function jpoint(x, y, z) {
  return new JPoint(this, x, y, z);
};

JPoint.prototype.toP = function toP() {
  if (this.isInfinity()) return this.curve.point(null, null);
  var zinv = this.z.redInvm();
  var zinv2 = zinv.redSqr();
  var ax = this.x.redMul(zinv2);
  var ay = this.y.redMul(zinv2).redMul(zinv);
  return this.curve.point(ax, ay);
};

JPoint.prototype.neg = function neg() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};

JPoint.prototype.add = function add(p) {
  // O + P = P
  if (this.isInfinity()) return p; // P + O = P

  if (p.isInfinity()) return this; // 12M + 4S + 7A

  var pz2 = p.z.redSqr();
  var z2 = this.z.redSqr();
  var u1 = this.x.redMul(pz2);
  var u2 = p.x.redMul(z2);
  var s1 = this.y.redMul(pz2.redMul(p.z));
  var s2 = p.y.redMul(z2.redMul(this.z));
  var h = u1.redSub(u2);
  var r = s1.redSub(s2);

  if (h.cmpn(0) === 0) {
    if (r.cmpn(0) !== 0) return this.curve.jpoint(null, null, null);else return this.dbl();
  }

  var h2 = h.redSqr();
  var h3 = h2.redMul(h);
  var v = u1.redMul(h2);
  var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
  var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
  var nz = this.z.redMul(p.z).redMul(h);
  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.mixedAdd = function mixedAdd(p) {
  // O + P = P
  if (this.isInfinity()) return p.toJ(); // P + O = P

  if (p.isInfinity()) return this; // 8M + 3S + 7A

  var z2 = this.z.redSqr();
  var u1 = this.x;
  var u2 = p.x.redMul(z2);
  var s1 = this.y;
  var s2 = p.y.redMul(z2).redMul(this.z);
  var h = u1.redSub(u2);
  var r = s1.redSub(s2);

  if (h.cmpn(0) === 0) {
    if (r.cmpn(0) !== 0) return this.curve.jpoint(null, null, null);else return this.dbl();
  }

  var h2 = h.redSqr();
  var h3 = h2.redMul(h);
  var v = u1.redMul(h2);
  var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
  var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
  var nz = this.z.redMul(h);
  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.dblp = function dblp(pow) {
  if (pow === 0) return this;
  if (this.isInfinity()) return this;
  if (!pow) return this.dbl();
  var i;

  if (this.curve.zeroA || this.curve.threeA) {
    var r = this;

    for (i = 0; i < pow; i++) r = r.dbl();

    return r;
  } // 1M + 2S + 1A + N * (4S + 5M + 8A)
  // N = 1 => 6M + 6S + 9A


  var a = this.curve.a;
  var tinv = this.curve.tinv;
  var jx = this.x;
  var jy = this.y;
  var jz = this.z;
  var jz4 = jz.redSqr().redSqr(); // Reuse results

  var jyd = jy.redAdd(jy);

  for (i = 0; i < pow; i++) {
    var jx2 = jx.redSqr();
    var jyd2 = jyd.redSqr();
    var jyd4 = jyd2.redSqr();
    var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));
    var t1 = jx.redMul(jyd2);
    var nx = c.redSqr().redISub(t1.redAdd(t1));
    var t2 = t1.redISub(nx);
    var dny = c.redMul(t2);
    dny = dny.redIAdd(dny).redISub(jyd4);
    var nz = jyd.redMul(jz);
    if (i + 1 < pow) jz4 = jz4.redMul(jyd4);
    jx = nx;
    jz = nz;
    jyd = dny;
  }

  return this.curve.jpoint(jx, jyd.redMul(tinv), jz);
};

JPoint.prototype.dbl = function dbl() {
  if (this.isInfinity()) return this;
  if (this.curve.zeroA) return this._zeroDbl();else if (this.curve.threeA) return this._threeDbl();else return this._dbl();
};

JPoint.prototype._zeroDbl = function _zeroDbl() {
  var nx;
  var ny;
  var nz; // Z = 1

  if (this.zOne) {
    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html
    //     #doubling-mdbl-2007-bl
    // 1M + 5S + 14A
    // XX = X1^2
    var xx = this.x.redSqr(); // YY = Y1^2

    var yy = this.y.redSqr(); // YYYY = YY^2

    var yyyy = yy.redSqr(); // S = 2 * ((X1 + YY)^2 - XX - YYYY)

    var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
    s = s.redIAdd(s); // M = 3 * XX + a; a = 0

    var m = xx.redAdd(xx).redIAdd(xx); // T = M ^ 2 - 2*S

    var t = m.redSqr().redISub(s).redISub(s); // 8 * YYYY

    var yyyy8 = yyyy.redIAdd(yyyy);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    yyyy8 = yyyy8.redIAdd(yyyy8); // X3 = T

    nx = t; // Y3 = M * (S - T) - 8 * YYYY

    ny = m.redMul(s.redISub(t)).redISub(yyyy8); // Z3 = 2*Y1

    nz = this.y.redAdd(this.y);
  } else {
    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html
    //     #doubling-dbl-2009-l
    // 2M + 5S + 13A
    // A = X1^2
    var a = this.x.redSqr(); // B = Y1^2

    var b = this.y.redSqr(); // C = B^2

    var c = b.redSqr(); // D = 2 * ((X1 + B)^2 - A - C)

    var d = this.x.redAdd(b).redSqr().redISub(a).redISub(c);
    d = d.redIAdd(d); // E = 3 * A

    var e = a.redAdd(a).redIAdd(a); // F = E^2

    var f = e.redSqr(); // 8 * C

    var c8 = c.redIAdd(c);
    c8 = c8.redIAdd(c8);
    c8 = c8.redIAdd(c8); // X3 = F - 2 * D

    nx = f.redISub(d).redISub(d); // Y3 = E * (D - X3) - 8 * C

    ny = e.redMul(d.redISub(nx)).redISub(c8); // Z3 = 2 * Y1 * Z1

    nz = this.y.redMul(this.z);
    nz = nz.redIAdd(nz);
  }

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype._threeDbl = function _threeDbl() {
  var nx;
  var ny;
  var nz; // Z = 1

  if (this.zOne) {
    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-3.html
    //     #doubling-mdbl-2007-bl
    // 1M + 5S + 15A
    // XX = X1^2
    var xx = this.x.redSqr(); // YY = Y1^2

    var yy = this.y.redSqr(); // YYYY = YY^2

    var yyyy = yy.redSqr(); // S = 2 * ((X1 + YY)^2 - XX - YYYY)

    var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
    s = s.redIAdd(s); // M = 3 * XX + a

    var m = xx.redAdd(xx).redIAdd(xx).redIAdd(this.curve.a); // T = M^2 - 2 * S

    var t = m.redSqr().redISub(s).redISub(s); // X3 = T

    nx = t; // Y3 = M * (S - T) - 8 * YYYY

    var yyyy8 = yyyy.redIAdd(yyyy);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    ny = m.redMul(s.redISub(t)).redISub(yyyy8); // Z3 = 2 * Y1

    nz = this.y.redAdd(this.y);
  } else {
    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-3.html#doubling-dbl-2001-b
    // 3M + 5S
    // delta = Z1^2
    var delta = this.z.redSqr(); // gamma = Y1^2

    var gamma = this.y.redSqr(); // beta = X1 * gamma

    var beta = this.x.redMul(gamma); // alpha = 3 * (X1 - delta) * (X1 + delta)

    var alpha = this.x.redSub(delta).redMul(this.x.redAdd(delta));
    alpha = alpha.redAdd(alpha).redIAdd(alpha); // X3 = alpha^2 - 8 * beta

    var beta4 = beta.redIAdd(beta);
    beta4 = beta4.redIAdd(beta4);
    var beta8 = beta4.redAdd(beta4);
    nx = alpha.redSqr().redISub(beta8); // Z3 = (Y1 + Z1)^2 - gamma - delta

    nz = this.y.redAdd(this.z).redSqr().redISub(gamma).redISub(delta); // Y3 = alpha * (4 * beta - X3) - 8 * gamma^2

    var ggamma8 = gamma.redSqr();
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ny = alpha.redMul(beta4.redISub(nx)).redISub(ggamma8);
  }

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype._dbl = function _dbl() {
  var a = this.curve.a; // 4M + 6S + 10A

  var jx = this.x;
  var jy = this.y;
  var jz = this.z;
  var jz4 = jz.redSqr().redSqr();
  var jx2 = jx.redSqr();
  var jy2 = jy.redSqr();
  var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));
  var jxd4 = jx.redAdd(jx);
  jxd4 = jxd4.redIAdd(jxd4);
  var t1 = jxd4.redMul(jy2);
  var nx = c.redSqr().redISub(t1.redAdd(t1));
  var t2 = t1.redISub(nx);
  var jyd8 = jy2.redSqr();
  jyd8 = jyd8.redIAdd(jyd8);
  jyd8 = jyd8.redIAdd(jyd8);
  jyd8 = jyd8.redIAdd(jyd8);
  var ny = c.redMul(t2).redISub(jyd8);
  var nz = jy.redAdd(jy).redMul(jz);
  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.trpl = function trpl() {
  if (!this.curve.zeroA) return this.dbl().add(this); // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html#tripling-tpl-2007-bl
  // 5M + 10S + ...
  // XX = X1^2

  var xx = this.x.redSqr(); // YY = Y1^2

  var yy = this.y.redSqr(); // ZZ = Z1^2

  var zz = this.z.redSqr(); // YYYY = YY^2

  var yyyy = yy.redSqr(); // M = 3 * XX + a * ZZ2; a = 0

  var m = xx.redAdd(xx).redIAdd(xx); // MM = M^2

  var mm = m.redSqr(); // E = 6 * ((X1 + YY)^2 - XX - YYYY) - MM

  var e = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
  e = e.redIAdd(e);
  e = e.redAdd(e).redIAdd(e);
  e = e.redISub(mm); // EE = E^2

  var ee = e.redSqr(); // T = 16*YYYY

  var t = yyyy.redIAdd(yyyy);
  t = t.redIAdd(t);
  t = t.redIAdd(t);
  t = t.redIAdd(t); // U = (M + E)^2 - MM - EE - T

  var u = m.redIAdd(e).redSqr().redISub(mm).redISub(ee).redISub(t); // X3 = 4 * (X1 * EE - 4 * YY * U)

  var yyu4 = yy.redMul(u);
  yyu4 = yyu4.redIAdd(yyu4);
  yyu4 = yyu4.redIAdd(yyu4);
  var nx = this.x.redMul(ee).redISub(yyu4);
  nx = nx.redIAdd(nx);
  nx = nx.redIAdd(nx); // Y3 = 8 * Y1 * (U * (T - U) - E * EE)

  var ny = this.y.redMul(u.redMul(t.redISub(u)).redISub(e.redMul(ee)));
  ny = ny.redIAdd(ny);
  ny = ny.redIAdd(ny);
  ny = ny.redIAdd(ny); // Z3 = (Z1 + E)^2 - ZZ - EE

  var nz = this.z.redAdd(e).redSqr().redISub(zz).redISub(ee);
  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.mul = function mul(k, kbase) {
  k = new BN(k, kbase);
  return this.curve._wnafMul(this, k);
};

JPoint.prototype.eq = function eq(p) {
  if (p.type === 'affine') return this.eq(p.toJ());
  if (this === p) return true; // x1 * z2^2 == x2 * z1^2

  var z2 = this.z.redSqr();
  var pz2 = p.z.redSqr();
  if (this.x.redMul(pz2).redISub(p.x.redMul(z2)).cmpn(0) !== 0) return false; // y1 * z2^3 == y2 * z1^3

  var z3 = z2.redMul(this.z);
  var pz3 = pz2.redMul(p.z);
  return this.y.redMul(pz3).redISub(p.y.redMul(z3)).cmpn(0) === 0;
};

JPoint.prototype.eqXToP = function eqXToP(x) {
  var zs = this.z.redSqr();
  var rx = x.toRed(this.curve.red).redMul(zs);
  if (this.x.cmp(rx) === 0) return true;
  var xc = x.clone();
  var t = this.curve.redN.redMul(zs);

  for (;;) {
    xc.iadd(this.curve.n);
    if (xc.cmp(this.curve.p) >= 0) return false;
    rx.redIAdd(t);
    if (this.x.cmp(rx) === 0) return true;
  }
};

JPoint.prototype.inspect = function inspect() {
  if (this.isInfinity()) return '<EC JPoint Infinity>';
  return '<EC JPoint x: ' + this.x.toString(16, 2) + ' y: ' + this.y.toString(16, 2) + ' z: ' + this.z.toString(16, 2) + '>';
};

JPoint.prototype.isInfinity = function isInfinity() {
  // XXX This code assumes that zero is always zero in red
  return this.z.cmpn(0) === 0;
};

/***/ }),

/***/ "./node_modules/elliptic/lib/elliptic/curves.js":
/*!******************************************************!*\
  !*** ./node_modules/elliptic/lib/elliptic/curves.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var curves = exports;

var hash = __webpack_require__(/*! hash.js */ "./node_modules/hash.js/lib/hash.js");

var curve = __webpack_require__(/*! ./curve */ "./node_modules/elliptic/lib/elliptic/curve/index.js");

var utils = __webpack_require__(/*! ./utils */ "./node_modules/elliptic/lib/elliptic/utils.js");

var assert = utils.assert;

function PresetCurve(options) {
  if (options.type === 'short') this.curve = new curve.short(options);else if (options.type === 'edwards') this.curve = new curve.edwards(options);else this.curve = new curve.mont(options);
  this.g = this.curve.g;
  this.n = this.curve.n;
  this.hash = options.hash;
  assert(this.g.validate(), 'Invalid curve');
  assert(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O');
}

curves.PresetCurve = PresetCurve;

function defineCurve(name, options) {
  Object.defineProperty(curves, name, {
    configurable: true,
    enumerable: true,
    get: function () {
      var curve = new PresetCurve(options);
      Object.defineProperty(curves, name, {
        configurable: true,
        enumerable: true,
        value: curve
      });
      return curve;
    }
  });
}

defineCurve('p192', {
  type: 'short',
  prime: 'p192',
  p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
  a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
  b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
  n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
  hash: hash.sha256,
  gRed: false,
  g: ['188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012', '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811']
});
defineCurve('p224', {
  type: 'short',
  prime: 'p224',
  p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
  a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
  b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
  n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
  hash: hash.sha256,
  gRed: false,
  g: ['b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21', 'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34']
});
defineCurve('p256', {
  type: 'short',
  prime: null,
  p: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
  a: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
  b: '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
  n: 'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
  hash: hash.sha256,
  gRed: false,
  g: ['6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296', '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5']
});
defineCurve('p384', {
  type: 'short',
  prime: null,
  p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'fffffffe ffffffff 00000000 00000000 ffffffff',
  a: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'fffffffe ffffffff 00000000 00000000 fffffffc',
  b: 'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f ' + '5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',
  n: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 ' + 'f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',
  hash: hash.sha384,
  gRed: false,
  g: ['aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 ' + '5502f25d bf55296c 3a545e38 72760ab7', '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 ' + '0a60b1ce 1d7e819d 7a431d7c 90ea0e5f']
});
defineCurve('p521', {
  type: 'short',
  prime: null,
  p: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff ffffffff ffffffff ffffffff',
  a: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff ffffffff ffffffff fffffffc',
  b: '00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b ' + '99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd ' + '3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',
  n: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 ' + 'f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',
  hash: hash.sha512,
  gRed: false,
  g: ['000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 ' + '053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 ' + 'a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66', '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 ' + '579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 ' + '3fad0761 353c7086 a272c240 88be9476 9fd16650']
});
defineCurve('curve25519', {
  type: 'mont',
  prime: 'p25519',
  p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
  a: '76d06',
  b: '1',
  n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
  hash: hash.sha256,
  gRed: false,
  g: ['9']
});
defineCurve('ed25519', {
  type: 'edwards',
  prime: 'p25519',
  p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
  a: '-1',
  c: '1',
  // -121665 * (121666^(-1)) (mod P)
  d: '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
  n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
  hash: hash.sha256,
  gRed: false,
  g: ['216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a', // 4/5
  '6666666666666666666666666666666666666666666666666666666666666658']
});
var pre;

try {
  pre = __webpack_require__(/*! ./precomputed/secp256k1 */ "./node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js");
} catch (e) {
  pre = undefined;
}

defineCurve('secp256k1', {
  type: 'short',
  prime: 'k256',
  p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
  a: '0',
  b: '7',
  n: 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
  h: '1',
  hash: hash.sha256,
  // Precomputed endomorphism
  beta: '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
  lambda: '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
  basis: [{
    a: '3086d221a7d46bcde86c90e49284eb15',
    b: '-e4437ed6010e88286f547fa90abfe4c3'
  }, {
    a: '114ca50f7a8e2f3f657c1108d9d44cfd8',
    b: '3086d221a7d46bcde86c90e49284eb15'
  }],
  gRed: false,
  g: ['79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798', '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8', pre]
});

/***/ }),

/***/ "./node_modules/elliptic/lib/elliptic/ec/index.js":
/*!********************************************************!*\
  !*** ./node_modules/elliptic/lib/elliptic/ec/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var BN = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");

var HmacDRBG = __webpack_require__(/*! hmac-drbg */ "./node_modules/hmac-drbg/lib/hmac-drbg.js");

var utils = __webpack_require__(/*! ../utils */ "./node_modules/elliptic/lib/elliptic/utils.js");

var curves = __webpack_require__(/*! ../curves */ "./node_modules/elliptic/lib/elliptic/curves.js");

var rand = __webpack_require__(/*! brorand */ "./node_modules/brorand/index.js");

var assert = utils.assert;

var KeyPair = __webpack_require__(/*! ./key */ "./node_modules/elliptic/lib/elliptic/ec/key.js");

var Signature = __webpack_require__(/*! ./signature */ "./node_modules/elliptic/lib/elliptic/ec/signature.js");

function EC(options) {
  if (!(this instanceof EC)) return new EC(options); // Shortcut `elliptic.ec(curve-name)`

  if (typeof options === 'string') {
    assert(Object.prototype.hasOwnProperty.call(curves, options), 'Unknown curve ' + options);
    options = curves[options];
  } // Shortcut for `elliptic.ec(elliptic.curves.curveName)`


  if (options instanceof curves.PresetCurve) options = {
    curve: options
  };
  this.curve = options.curve.curve;
  this.n = this.curve.n;
  this.nh = this.n.ushrn(1);
  this.g = this.curve.g; // Point on curve

  this.g = options.curve.g;
  this.g.precompute(options.curve.n.bitLength() + 1); // Hash for function for DRBG

  this.hash = options.hash || options.curve.hash;
}

module.exports = EC;

EC.prototype.keyPair = function keyPair(options) {
  return new KeyPair(this, options);
};

EC.prototype.keyFromPrivate = function keyFromPrivate(priv, enc) {
  return KeyPair.fromPrivate(this, priv, enc);
};

EC.prototype.keyFromPublic = function keyFromPublic(pub, enc) {
  return KeyPair.fromPublic(this, pub, enc);
};

EC.prototype.genKeyPair = function genKeyPair(options) {
  if (!options) options = {}; // Instantiate Hmac_DRBG

  var drbg = new HmacDRBG({
    hash: this.hash,
    pers: options.pers,
    persEnc: options.persEnc || 'utf8',
    entropy: options.entropy || rand(this.hash.hmacStrength),
    entropyEnc: options.entropy && options.entropyEnc || 'utf8',
    nonce: this.n.toArray()
  });
  var bytes = this.n.byteLength();
  var ns2 = this.n.sub(new BN(2));

  for (;;) {
    var priv = new BN(drbg.generate(bytes));
    if (priv.cmp(ns2) > 0) continue;
    priv.iaddn(1);
    return this.keyFromPrivate(priv);
  }
};

EC.prototype._truncateToN = function _truncateToN(msg, truncOnly) {
  var delta = msg.byteLength() * 8 - this.n.bitLength();
  if (delta > 0) msg = msg.ushrn(delta);
  if (!truncOnly && msg.cmp(this.n) >= 0) return msg.sub(this.n);else return msg;
};

EC.prototype.sign = function sign(msg, key, enc, options) {
  if (typeof enc === 'object') {
    options = enc;
    enc = null;
  }

  if (!options) options = {};
  key = this.keyFromPrivate(key, enc);
  msg = this._truncateToN(new BN(msg, 16)); // Zero-extend key to provide enough entropy

  var bytes = this.n.byteLength();
  var bkey = key.getPrivate().toArray('be', bytes); // Zero-extend nonce to have the same byte size as N

  var nonce = msg.toArray('be', bytes); // Instantiate Hmac_DRBG

  var drbg = new HmacDRBG({
    hash: this.hash,
    entropy: bkey,
    nonce: nonce,
    pers: options.pers,
    persEnc: options.persEnc || 'utf8'
  }); // Number of bytes to generate

  var ns1 = this.n.sub(new BN(1));

  for (var iter = 0;; iter++) {
    var k = options.k ? options.k(iter) : new BN(drbg.generate(this.n.byteLength()));
    k = this._truncateToN(k, true);
    if (k.cmpn(1) <= 0 || k.cmp(ns1) >= 0) continue;
    var kp = this.g.mul(k);
    if (kp.isInfinity()) continue;
    var kpX = kp.getX();
    var r = kpX.umod(this.n);
    if (r.cmpn(0) === 0) continue;
    var s = k.invm(this.n).mul(r.mul(key.getPrivate()).iadd(msg));
    s = s.umod(this.n);
    if (s.cmpn(0) === 0) continue;
    var recoveryParam = (kp.getY().isOdd() ? 1 : 0) | (kpX.cmp(r) !== 0 ? 2 : 0); // Use complement of `s`, if it is > `n / 2`

    if (options.canonical && s.cmp(this.nh) > 0) {
      s = this.n.sub(s);
      recoveryParam ^= 1;
    }

    return new Signature({
      r: r,
      s: s,
      recoveryParam: recoveryParam
    });
  }
};

EC.prototype.verify = function verify(msg, signature, key, enc) {
  msg = this._truncateToN(new BN(msg, 16));
  key = this.keyFromPublic(key, enc);
  signature = new Signature(signature, 'hex'); // Perform primitive values validation

  var r = signature.r;
  var s = signature.s;
  if (r.cmpn(1) < 0 || r.cmp(this.n) >= 0) return false;
  if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return false; // Validate signature

  var sinv = s.invm(this.n);
  var u1 = sinv.mul(msg).umod(this.n);
  var u2 = sinv.mul(r).umod(this.n);
  var p;

  if (!this.curve._maxwellTrick) {
    p = this.g.mulAdd(u1, key.getPublic(), u2);
    if (p.isInfinity()) return false;
    return p.getX().umod(this.n).cmp(r) === 0;
  } // NOTE: Greg Maxwell's trick, inspired by:
  // https://git.io/vad3K


  p = this.g.jmulAdd(u1, key.getPublic(), u2);
  if (p.isInfinity()) return false; // Compare `p.x` of Jacobian point with `r`,
  // this will do `p.x == r * p.z^2` instead of multiplying `p.x` by the
  // inverse of `p.z^2`

  return p.eqXToP(r);
};

EC.prototype.recoverPubKey = function (msg, signature, j, enc) {
  assert((3 & j) === j, 'The recovery param is more than two bits');
  signature = new Signature(signature, enc);
  var n = this.n;
  var e = new BN(msg);
  var r = signature.r;
  var s = signature.s; // A set LSB signifies that the y-coordinate is odd

  var isYOdd = j & 1;
  var isSecondKey = j >> 1;
  if (r.cmp(this.curve.p.umod(this.curve.n)) >= 0 && isSecondKey) throw new Error('Unable to find sencond key candinate'); // 1.1. Let x = r + jn.

  if (isSecondKey) r = this.curve.pointFromX(r.add(this.curve.n), isYOdd);else r = this.curve.pointFromX(r, isYOdd);
  var rInv = signature.r.invm(n);
  var s1 = n.sub(e).mul(rInv).umod(n);
  var s2 = s.mul(rInv).umod(n); // 1.6.1 Compute Q = r^-1 (sR -  eG)
  //               Q = r^-1 (sR + -eG)

  return this.g.mulAdd(s1, r, s2);
};

EC.prototype.getKeyRecoveryParam = function (e, signature, Q, enc) {
  signature = new Signature(signature, enc);
  if (signature.recoveryParam !== null) return signature.recoveryParam;

  for (var i = 0; i < 4; i++) {
    var Qprime;

    try {
      Qprime = this.recoverPubKey(e, signature, i);
    } catch (e) {
      continue;
    }

    if (Qprime.eq(Q)) return i;
  }

  throw new Error('Unable to find valid recovery factor');
};

/***/ }),

/***/ "./node_modules/elliptic/lib/elliptic/ec/key.js":
/*!******************************************************!*\
  !*** ./node_modules/elliptic/lib/elliptic/ec/key.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var BN = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");

var utils = __webpack_require__(/*! ../utils */ "./node_modules/elliptic/lib/elliptic/utils.js");

var assert = utils.assert;

function KeyPair(ec, options) {
  this.ec = ec;
  this.priv = null;
  this.pub = null; // KeyPair(ec, { priv: ..., pub: ... })

  if (options.priv) this._importPrivate(options.priv, options.privEnc);
  if (options.pub) this._importPublic(options.pub, options.pubEnc);
}

module.exports = KeyPair;

KeyPair.fromPublic = function fromPublic(ec, pub, enc) {
  if (pub instanceof KeyPair) return pub;
  return new KeyPair(ec, {
    pub: pub,
    pubEnc: enc
  });
};

KeyPair.fromPrivate = function fromPrivate(ec, priv, enc) {
  if (priv instanceof KeyPair) return priv;
  return new KeyPair(ec, {
    priv: priv,
    privEnc: enc
  });
};

KeyPair.prototype.validate = function validate() {
  var pub = this.getPublic();
  if (pub.isInfinity()) return {
    result: false,
    reason: 'Invalid public key'
  };
  if (!pub.validate()) return {
    result: false,
    reason: 'Public key is not a point'
  };
  if (!pub.mul(this.ec.curve.n).isInfinity()) return {
    result: false,
    reason: 'Public key * N != O'
  };
  return {
    result: true,
    reason: null
  };
};

KeyPair.prototype.getPublic = function getPublic(compact, enc) {
  // compact is optional argument
  if (typeof compact === 'string') {
    enc = compact;
    compact = null;
  }

  if (!this.pub) this.pub = this.ec.g.mul(this.priv);
  if (!enc) return this.pub;
  return this.pub.encode(enc, compact);
};

KeyPair.prototype.getPrivate = function getPrivate(enc) {
  if (enc === 'hex') return this.priv.toString(16, 2);else return this.priv;
};

KeyPair.prototype._importPrivate = function _importPrivate(key, enc) {
  this.priv = new BN(key, enc || 16); // Ensure that the priv won't be bigger than n, otherwise we may fail
  // in fixed multiplication method

  this.priv = this.priv.umod(this.ec.curve.n);
};

KeyPair.prototype._importPublic = function _importPublic(key, enc) {
  if (key.x || key.y) {
    // Montgomery points only have an `x` coordinate.
    // Weierstrass/Edwards points on the other hand have both `x` and
    // `y` coordinates.
    if (this.ec.curve.type === 'mont') {
      assert(key.x, 'Need x coordinate');
    } else if (this.ec.curve.type === 'short' || this.ec.curve.type === 'edwards') {
      assert(key.x && key.y, 'Need both x and y coordinate');
    }

    this.pub = this.ec.curve.point(key.x, key.y);
    return;
  }

  this.pub = this.ec.curve.decodePoint(key, enc);
}; // ECDH


KeyPair.prototype.derive = function derive(pub) {
  if (!pub.validate()) {
    assert(pub.validate(), 'public point not validated');
  }

  return pub.mul(this.priv).getX();
}; // ECDSA


KeyPair.prototype.sign = function sign(msg, enc, options) {
  return this.ec.sign(msg, this, enc, options);
};

KeyPair.prototype.verify = function verify(msg, signature) {
  return this.ec.verify(msg, signature, this);
};

KeyPair.prototype.inspect = function inspect() {
  return '<Key priv: ' + (this.priv && this.priv.toString(16, 2)) + ' pub: ' + (this.pub && this.pub.inspect()) + ' >';
};

/***/ }),

/***/ "./node_modules/elliptic/lib/elliptic/ec/signature.js":
/*!************************************************************!*\
  !*** ./node_modules/elliptic/lib/elliptic/ec/signature.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var BN = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");

var utils = __webpack_require__(/*! ../utils */ "./node_modules/elliptic/lib/elliptic/utils.js");

var assert = utils.assert;

function Signature(options, enc) {
  if (options instanceof Signature) return options;
  if (this._importDER(options, enc)) return;
  assert(options.r && options.s, 'Signature without r or s');
  this.r = new BN(options.r, 16);
  this.s = new BN(options.s, 16);
  if (options.recoveryParam === undefined) this.recoveryParam = null;else this.recoveryParam = options.recoveryParam;
}

module.exports = Signature;

function Position() {
  this.place = 0;
}

function getLength(buf, p) {
  var initial = buf[p.place++];

  if (!(initial & 0x80)) {
    return initial;
  }

  var octetLen = initial & 0xf; // Indefinite length or overflow

  if (octetLen === 0 || octetLen > 4) {
    return false;
  }

  var val = 0;

  for (var i = 0, off = p.place; i < octetLen; i++, off++) {
    val <<= 8;
    val |= buf[off];
    val >>>= 0;
  } // Leading zeroes


  if (val <= 0x7f) {
    return false;
  }

  p.place = off;
  return val;
}

function rmPadding(buf) {
  var i = 0;
  var len = buf.length - 1;

  while (!buf[i] && !(buf[i + 1] & 0x80) && i < len) {
    i++;
  }

  if (i === 0) {
    return buf;
  }

  return buf.slice(i);
}

Signature.prototype._importDER = function _importDER(data, enc) {
  data = utils.toArray(data, enc);
  var p = new Position();

  if (data[p.place++] !== 0x30) {
    return false;
  }

  var len = getLength(data, p);

  if (len === false) {
    return false;
  }

  if (len + p.place !== data.length) {
    return false;
  }

  if (data[p.place++] !== 0x02) {
    return false;
  }

  var rlen = getLength(data, p);

  if (rlen === false) {
    return false;
  }

  var r = data.slice(p.place, rlen + p.place);
  p.place += rlen;

  if (data[p.place++] !== 0x02) {
    return false;
  }

  var slen = getLength(data, p);

  if (slen === false) {
    return false;
  }

  if (data.length !== slen + p.place) {
    return false;
  }

  var s = data.slice(p.place, slen + p.place);

  if (r[0] === 0) {
    if (r[1] & 0x80) {
      r = r.slice(1);
    } else {
      // Leading zeroes
      return false;
    }
  }

  if (s[0] === 0) {
    if (s[1] & 0x80) {
      s = s.slice(1);
    } else {
      // Leading zeroes
      return false;
    }
  }

  this.r = new BN(r);
  this.s = new BN(s);
  this.recoveryParam = null;
  return true;
};

function constructLength(arr, len) {
  if (len < 0x80) {
    arr.push(len);
    return;
  }

  var octets = 1 + (Math.log(len) / Math.LN2 >>> 3);
  arr.push(octets | 0x80);

  while (--octets) {
    arr.push(len >>> (octets << 3) & 0xff);
  }

  arr.push(len);
}

Signature.prototype.toDER = function toDER(enc) {
  var r = this.r.toArray();
  var s = this.s.toArray(); // Pad values

  if (r[0] & 0x80) r = [0].concat(r); // Pad values

  if (s[0] & 0x80) s = [0].concat(s);
  r = rmPadding(r);
  s = rmPadding(s);

  while (!s[0] && !(s[1] & 0x80)) {
    s = s.slice(1);
  }

  var arr = [0x02];
  constructLength(arr, r.length);
  arr = arr.concat(r);
  arr.push(0x02);
  constructLength(arr, s.length);
  var backHalf = arr.concat(s);
  var res = [0x30];
  constructLength(res, backHalf.length);
  res = res.concat(backHalf);
  return utils.encode(res, enc);
};

/***/ }),

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/elliptic/lib/elliptic/eddsa/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hash = __webpack_require__(/*! hash.js */ "./node_modules/hash.js/lib/hash.js");

var curves = __webpack_require__(/*! ../curves */ "./node_modules/elliptic/lib/elliptic/curves.js");

var utils = __webpack_require__(/*! ../utils */ "./node_modules/elliptic/lib/elliptic/utils.js");

var assert = utils.assert;
var parseBytes = utils.parseBytes;

var KeyPair = __webpack_require__(/*! ./key */ "./node_modules/elliptic/lib/elliptic/eddsa/key.js");

var Signature = __webpack_require__(/*! ./signature */ "./node_modules/elliptic/lib/elliptic/eddsa/signature.js");

function EDDSA(curve) {
  assert(curve === 'ed25519', 'only tested with ed25519 so far');
  if (!(this instanceof EDDSA)) return new EDDSA(curve);
  curve = curves[curve].curve;
  this.curve = curve;
  this.g = curve.g;
  this.g.precompute(curve.n.bitLength() + 1);
  this.pointClass = curve.point().constructor;
  this.encodingLength = Math.ceil(curve.n.bitLength() / 8);
  this.hash = hash.sha512;
}

module.exports = EDDSA;
/**
* @param {Array|String} message - message bytes
* @param {Array|String|KeyPair} secret - secret bytes or a keypair
* @returns {Signature} - signature
*/

EDDSA.prototype.sign = function sign(message, secret) {
  message = parseBytes(message);
  var key = this.keyFromSecret(secret);
  var r = this.hashInt(key.messagePrefix(), message);
  var R = this.g.mul(r);
  var Rencoded = this.encodePoint(R);
  var s_ = this.hashInt(Rencoded, key.pubBytes(), message).mul(key.priv());
  var S = r.add(s_).umod(this.curve.n);
  return this.makeSignature({
    R: R,
    S: S,
    Rencoded: Rencoded
  });
};
/**
* @param {Array} message - message bytes
* @param {Array|String|Signature} sig - sig bytes
* @param {Array|String|Point|KeyPair} pub - public key
* @returns {Boolean} - true if public key matches sig of message
*/


EDDSA.prototype.verify = function verify(message, sig, pub) {
  message = parseBytes(message);
  sig = this.makeSignature(sig);
  var key = this.keyFromPublic(pub);
  var h = this.hashInt(sig.Rencoded(), key.pubBytes(), message);
  var SG = this.g.mul(sig.S());
  var RplusAh = sig.R().add(key.pub().mul(h));
  return RplusAh.eq(SG);
};

EDDSA.prototype.hashInt = function hashInt() {
  var hash = this.hash();

  for (var i = 0; i < arguments.length; i++) hash.update(arguments[i]);

  return utils.intFromLE(hash.digest()).umod(this.curve.n);
};

EDDSA.prototype.keyFromPublic = function keyFromPublic(pub) {
  return KeyPair.fromPublic(this, pub);
};

EDDSA.prototype.keyFromSecret = function keyFromSecret(secret) {
  return KeyPair.fromSecret(this, secret);
};

EDDSA.prototype.makeSignature = function makeSignature(sig) {
  if (sig instanceof Signature) return sig;
  return new Signature(this, sig);
};
/**
* * https://tools.ietf.org/html/draft-josefsson-eddsa-ed25519-03#section-5.2
*
* EDDSA defines methods for encoding and decoding points and integers. These are
* helper convenience methods, that pass along to utility functions implied
* parameters.
*
*/


EDDSA.prototype.encodePoint = function encodePoint(point) {
  var enc = point.getY().toArray('le', this.encodingLength);
  enc[this.encodingLength - 1] |= point.getX().isOdd() ? 0x80 : 0;
  return enc;
};

EDDSA.prototype.decodePoint = function decodePoint(bytes) {
  bytes = utils.parseBytes(bytes);
  var lastIx = bytes.length - 1;
  var normed = bytes.slice(0, lastIx).concat(bytes[lastIx] & ~0x80);
  var xIsOdd = (bytes[lastIx] & 0x80) !== 0;
  var y = utils.intFromLE(normed);
  return this.curve.pointFromY(y, xIsOdd);
};

EDDSA.prototype.encodeInt = function encodeInt(num) {
  return num.toArray('le', this.encodingLength);
};

EDDSA.prototype.decodeInt = function decodeInt(bytes) {
  return utils.intFromLE(bytes);
};

EDDSA.prototype.isPoint = function isPoint(val) {
  return val instanceof this.pointClass;
};

/***/ }),

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/key.js":
/*!*********************************************************!*\
  !*** ./node_modules/elliptic/lib/elliptic/eddsa/key.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/elliptic/lib/elliptic/utils.js");

var assert = utils.assert;
var parseBytes = utils.parseBytes;
var cachedProperty = utils.cachedProperty;
/**
* @param {EDDSA} eddsa - instance
* @param {Object} params - public/private key parameters
*
* @param {Array<Byte>} [params.secret] - secret seed bytes
* @param {Point} [params.pub] - public key point (aka `A` in eddsa terms)
* @param {Array<Byte>} [params.pub] - public key point encoded as bytes
*
*/

function KeyPair(eddsa, params) {
  this.eddsa = eddsa;
  this._secret = parseBytes(params.secret);
  if (eddsa.isPoint(params.pub)) this._pub = params.pub;else this._pubBytes = parseBytes(params.pub);
}

KeyPair.fromPublic = function fromPublic(eddsa, pub) {
  if (pub instanceof KeyPair) return pub;
  return new KeyPair(eddsa, {
    pub: pub
  });
};

KeyPair.fromSecret = function fromSecret(eddsa, secret) {
  if (secret instanceof KeyPair) return secret;
  return new KeyPair(eddsa, {
    secret: secret
  });
};

KeyPair.prototype.secret = function secret() {
  return this._secret;
};

cachedProperty(KeyPair, 'pubBytes', function pubBytes() {
  return this.eddsa.encodePoint(this.pub());
});
cachedProperty(KeyPair, 'pub', function pub() {
  if (this._pubBytes) return this.eddsa.decodePoint(this._pubBytes);
  return this.eddsa.g.mul(this.priv());
});
cachedProperty(KeyPair, 'privBytes', function privBytes() {
  var eddsa = this.eddsa;
  var hash = this.hash();
  var lastIx = eddsa.encodingLength - 1;
  var a = hash.slice(0, eddsa.encodingLength);
  a[0] &= 248;
  a[lastIx] &= 127;
  a[lastIx] |= 64;
  return a;
});
cachedProperty(KeyPair, 'priv', function priv() {
  return this.eddsa.decodeInt(this.privBytes());
});
cachedProperty(KeyPair, 'hash', function hash() {
  return this.eddsa.hash().update(this.secret()).digest();
});
cachedProperty(KeyPair, 'messagePrefix', function messagePrefix() {
  return this.hash().slice(this.eddsa.encodingLength);
});

KeyPair.prototype.sign = function sign(message) {
  assert(this._secret, 'KeyPair can only verify');
  return this.eddsa.sign(message, this);
};

KeyPair.prototype.verify = function verify(message, sig) {
  return this.eddsa.verify(message, sig, this);
};

KeyPair.prototype.getSecret = function getSecret(enc) {
  assert(this._secret, 'KeyPair is public only');
  return utils.encode(this.secret(), enc);
};

KeyPair.prototype.getPublic = function getPublic(enc) {
  return utils.encode(this.pubBytes(), enc);
};

module.exports = KeyPair;

/***/ }),

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/signature.js":
/*!***************************************************************!*\
  !*** ./node_modules/elliptic/lib/elliptic/eddsa/signature.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var BN = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");

var utils = __webpack_require__(/*! ../utils */ "./node_modules/elliptic/lib/elliptic/utils.js");

var assert = utils.assert;
var cachedProperty = utils.cachedProperty;
var parseBytes = utils.parseBytes;
/**
* @param {EDDSA} eddsa - eddsa instance
* @param {Array<Bytes>|Object} sig -
* @param {Array<Bytes>|Point} [sig.R] - R point as Point or bytes
* @param {Array<Bytes>|bn} [sig.S] - S scalar as bn or bytes
* @param {Array<Bytes>} [sig.Rencoded] - R point encoded
* @param {Array<Bytes>} [sig.Sencoded] - S scalar encoded
*/

function Signature(eddsa, sig) {
  this.eddsa = eddsa;
  if (typeof sig !== 'object') sig = parseBytes(sig);

  if (Array.isArray(sig)) {
    sig = {
      R: sig.slice(0, eddsa.encodingLength),
      S: sig.slice(eddsa.encodingLength)
    };
  }

  assert(sig.R && sig.S, 'Signature without R or S');
  if (eddsa.isPoint(sig.R)) this._R = sig.R;
  if (sig.S instanceof BN) this._S = sig.S;
  this._Rencoded = Array.isArray(sig.R) ? sig.R : sig.Rencoded;
  this._Sencoded = Array.isArray(sig.S) ? sig.S : sig.Sencoded;
}

cachedProperty(Signature, 'S', function S() {
  return this.eddsa.decodeInt(this.Sencoded());
});
cachedProperty(Signature, 'R', function R() {
  return this.eddsa.decodePoint(this.Rencoded());
});
cachedProperty(Signature, 'Rencoded', function Rencoded() {
  return this.eddsa.encodePoint(this.R());
});
cachedProperty(Signature, 'Sencoded', function Sencoded() {
  return this.eddsa.encodeInt(this.S());
});

Signature.prototype.toBytes = function toBytes() {
  return this.Rencoded().concat(this.Sencoded());
};

Signature.prototype.toHex = function toHex() {
  return utils.encode(this.toBytes(), 'hex').toUpperCase();
};

module.exports = Signature;

/***/ }),

/***/ "./node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js":
/*!*********************************************************************!*\
  !*** ./node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {
  doubles: {
    step: 4,
    points: [['e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a', 'f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821'], ['8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508', '11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf'], ['175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739', 'd3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695'], ['363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640', '4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9'], ['8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c', '4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36'], ['723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda', '96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f'], ['eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa', '5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999'], ['100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0', 'cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09'], ['e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d', '9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d'], ['feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d', 'e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088'], ['da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1', '9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d'], ['53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0', '5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8'], ['8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047', '10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a'], ['385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862', '283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453'], ['6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7', '7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160'], ['3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd', '56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0'], ['85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83', '7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6'], ['948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a', '53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589'], ['6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8', 'bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17'], ['e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d', '4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda'], ['e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725', '7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd'], ['213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754', '4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2'], ['4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c', '17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6'], ['fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6', '6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f'], ['76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39', 'c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01'], ['c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891', '893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3'], ['d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b', 'febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f'], ['b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03', '2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7'], ['e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d', 'eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78'], ['a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070', '7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1'], ['90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4', 'e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150'], ['8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da', '662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82'], ['e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11', '1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc'], ['8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e', 'efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b'], ['e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41', '2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51'], ['b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef', '67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45'], ['d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8', 'db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120'], ['324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d', '648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84'], ['4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96', '35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d'], ['9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd', 'ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d'], ['6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5', '9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8'], ['a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266', '40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8'], ['7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71', '34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac'], ['928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac', 'c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f'], ['85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751', '1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962'], ['ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e', '493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907'], ['827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241', 'c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec'], ['eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3', 'be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d'], ['e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f', '4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414'], ['1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19', 'aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd'], ['146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be', 'b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0'], ['fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9', '6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811'], ['da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2', '8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1'], ['a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13', '7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c'], ['174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c', 'ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73'], ['959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba', '2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd'], ['d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151', 'e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405'], ['64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073', 'd99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589'], ['8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458', '38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e'], ['13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b', '69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27'], ['bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366', 'd3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1'], ['8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa', '40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482'], ['8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0', '620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945'], ['dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787', '7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573'], ['f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e', 'ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82']]
  },
  naf: {
    wnd: 7,
    points: [['f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9', '388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672'], ['2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4', 'd8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6'], ['5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc', '6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da'], ['acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe', 'cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37'], ['774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb', 'd984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b'], ['f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8', 'ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81'], ['d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e', '581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58'], ['defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34', '4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77'], ['2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c', '85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a'], ['352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5', '321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c'], ['2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f', '2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67'], ['9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714', '73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402'], ['daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729', 'a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55'], ['c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db', '2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482'], ['6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4', 'e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82'], ['1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5', 'b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396'], ['605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479', '2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49'], ['62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d', '80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf'], ['80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f', '1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a'], ['7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb', 'd0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7'], ['d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9', 'eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933'], ['49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963', '758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a'], ['77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74', '958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6'], ['f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530', 'e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37'], ['463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b', '5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e'], ['f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247', 'cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6'], ['caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1', 'cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476'], ['2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120', '4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40'], ['7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435', '91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61'], ['754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18', '673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683'], ['e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8', '59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5'], ['186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb', '3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b'], ['df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f', '55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417'], ['5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143', 'efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868'], ['290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba', 'e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a'], ['af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45', 'f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6'], ['766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a', '744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996'], ['59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e', 'c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e'], ['f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8', 'e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d'], ['7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c', '30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2'], ['948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519', 'e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e'], ['7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab', '100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437'], ['3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca', 'ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311'], ['d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf', '8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4'], ['1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610', '68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575'], ['733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4', 'f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d'], ['15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c', 'd56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d'], ['a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940', 'edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629'], ['e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980', 'a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06'], ['311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3', '66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374'], ['34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf', '9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee'], ['f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63', '4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1'], ['d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448', 'fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b'], ['32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf', '5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661'], ['7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5', '8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6'], ['ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6', '8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e'], ['16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5', '5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d'], ['eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99', 'f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc'], ['78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51', 'f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4'], ['494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5', '42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c'], ['a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5', '204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b'], ['c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997', '4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913'], ['841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881', '73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154'], ['5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5', '39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865'], ['36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66', 'd2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc'], ['336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726', 'ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224'], ['8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede', '6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e'], ['1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94', '60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6'], ['85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31', '3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511'], ['29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51', 'b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b'], ['a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252', 'ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2'], ['4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5', 'cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c'], ['d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b', '6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3'], ['ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4', '322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d'], ['af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f', '6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700'], ['e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889', '2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4'], ['591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246', 'b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196'], ['11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984', '998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4'], ['3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a', 'b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257'], ['cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030', 'bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13'], ['c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197', '6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096'], ['c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593', 'c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38'], ['a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef', '21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f'], ['347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38', '60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448'], ['da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a', '49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a'], ['c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111', '5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4'], ['4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502', '7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437'], ['3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea', 'be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7'], ['cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26', '8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d'], ['b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986', '39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a'], ['d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e', '62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54'], ['48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4', '25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77'], ['dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda', 'ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517'], ['6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859', 'cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10'], ['e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f', 'f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125'], ['eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c', '6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e'], ['13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942', 'fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1'], ['ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a', '1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2'], ['b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80', '5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423'], ['ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d', '438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8'], ['8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1', 'cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758'], ['52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63', 'c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375'], ['e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352', '6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d'], ['7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193', 'ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec'], ['5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00', '9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0'], ['32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58', 'ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c'], ['e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7', 'd3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4'], ['8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8', 'c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f'], ['4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e', '67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649'], ['3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d', 'cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826'], ['674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b', '299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5'], ['d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f', 'f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87'], ['30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6', '462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b'], ['be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297', '62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc'], ['93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a', '7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c'], ['b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c', 'ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f'], ['d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52', '4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a'], ['d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb', 'bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46'], ['463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065', 'bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f'], ['7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917', '603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03'], ['74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9', 'cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08'], ['30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3', '553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8'], ['9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57', '712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373'], ['176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66', 'ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3'], ['75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8', '9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8'], ['809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721', '9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1'], ['1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180', '4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9']]
  }
};

/***/ }),

/***/ "./node_modules/elliptic/lib/elliptic/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/elliptic/lib/elliptic/utils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var utils = exports;

var BN = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");

var minAssert = __webpack_require__(/*! minimalistic-assert */ "./node_modules/minimalistic-assert/index.js");

var minUtils = __webpack_require__(/*! minimalistic-crypto-utils */ "./node_modules/minimalistic-crypto-utils/lib/utils.js");

utils.assert = minAssert;
utils.toArray = minUtils.toArray;
utils.zero2 = minUtils.zero2;
utils.toHex = minUtils.toHex;
utils.encode = minUtils.encode; // Represent num in a w-NAF form

function getNAF(num, w, bits) {
  var naf = new Array(Math.max(num.bitLength(), bits) + 1);
  naf.fill(0);
  var ws = 1 << w + 1;
  var k = num.clone();

  for (var i = 0; i < naf.length; i++) {
    var z;
    var mod = k.andln(ws - 1);

    if (k.isOdd()) {
      if (mod > (ws >> 1) - 1) z = (ws >> 1) - mod;else z = mod;
      k.isubn(z);
    } else {
      z = 0;
    }

    naf[i] = z;
    k.iushrn(1);
  }

  return naf;
}

utils.getNAF = getNAF; // Represent k1, k2 in a Joint Sparse Form

function getJSF(k1, k2) {
  var jsf = [[], []];
  k1 = k1.clone();
  k2 = k2.clone();
  var d1 = 0;
  var d2 = 0;
  var m8;

  while (k1.cmpn(-d1) > 0 || k2.cmpn(-d2) > 0) {
    // First phase
    var m14 = k1.andln(3) + d1 & 3;
    var m24 = k2.andln(3) + d2 & 3;
    if (m14 === 3) m14 = -1;
    if (m24 === 3) m24 = -1;
    var u1;

    if ((m14 & 1) === 0) {
      u1 = 0;
    } else {
      m8 = k1.andln(7) + d1 & 7;
      if ((m8 === 3 || m8 === 5) && m24 === 2) u1 = -m14;else u1 = m14;
    }

    jsf[0].push(u1);
    var u2;

    if ((m24 & 1) === 0) {
      u2 = 0;
    } else {
      m8 = k2.andln(7) + d2 & 7;
      if ((m8 === 3 || m8 === 5) && m14 === 2) u2 = -m24;else u2 = m24;
    }

    jsf[1].push(u2); // Second phase

    if (2 * d1 === u1 + 1) d1 = 1 - d1;
    if (2 * d2 === u2 + 1) d2 = 1 - d2;
    k1.iushrn(1);
    k2.iushrn(1);
  }

  return jsf;
}

utils.getJSF = getJSF;

function cachedProperty(obj, name, computer) {
  var key = '_' + name;

  obj.prototype[name] = function cachedProperty() {
    return this[key] !== undefined ? this[key] : this[key] = computer.call(this);
  };
}

utils.cachedProperty = cachedProperty;

function parseBytes(bytes) {
  return typeof bytes === 'string' ? utils.toArray(bytes, 'hex') : bytes;
}

utils.parseBytes = parseBytes;

function intFromLE(bytes) {
  return new BN(bytes, 'hex', 'le');
}

utils.intFromLE = intFromLE;

/***/ }),

/***/ "./node_modules/hash.js/lib/hash.js":
/*!******************************************!*\
  !*** ./node_modules/hash.js/lib/hash.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var hash = exports;
hash.utils = __webpack_require__(/*! ./hash/utils */ "./node_modules/hash.js/lib/hash/utils.js");
hash.common = __webpack_require__(/*! ./hash/common */ "./node_modules/hash.js/lib/hash/common.js");
hash.sha = __webpack_require__(/*! ./hash/sha */ "./node_modules/hash.js/lib/hash/sha.js");
hash.ripemd = __webpack_require__(/*! ./hash/ripemd */ "./node_modules/hash.js/lib/hash/ripemd.js");
hash.hmac = __webpack_require__(/*! ./hash/hmac */ "./node_modules/hash.js/lib/hash/hmac.js"); // Proxy hash functions to the main object

hash.sha1 = hash.sha.sha1;
hash.sha256 = hash.sha.sha256;
hash.sha224 = hash.sha.sha224;
hash.sha384 = hash.sha.sha384;
hash.sha512 = hash.sha.sha512;
hash.ripemd160 = hash.ripemd.ripemd160;

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/common.js":
/*!*************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/common.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/hash.js/lib/hash/utils.js");

var assert = __webpack_require__(/*! minimalistic-assert */ "./node_modules/minimalistic-assert/index.js");

function BlockHash() {
  this.pending = null;
  this.pendingTotal = 0;
  this.blockSize = this.constructor.blockSize;
  this.outSize = this.constructor.outSize;
  this.hmacStrength = this.constructor.hmacStrength;
  this.padLength = this.constructor.padLength / 8;
  this.endian = 'big';
  this._delta8 = this.blockSize / 8;
  this._delta32 = this.blockSize / 32;
}

exports.BlockHash = BlockHash;

BlockHash.prototype.update = function update(msg, enc) {
  // Convert message to array, pad it, and join into 32bit blocks
  msg = utils.toArray(msg, enc);
  if (!this.pending) this.pending = msg;else this.pending = this.pending.concat(msg);
  this.pendingTotal += msg.length; // Enough data, try updating

  if (this.pending.length >= this._delta8) {
    msg = this.pending; // Process pending data in blocks

    var r = msg.length % this._delta8;
    this.pending = msg.slice(msg.length - r, msg.length);
    if (this.pending.length === 0) this.pending = null;
    msg = utils.join32(msg, 0, msg.length - r, this.endian);

    for (var i = 0; i < msg.length; i += this._delta32) this._update(msg, i, i + this._delta32);
  }

  return this;
};

BlockHash.prototype.digest = function digest(enc) {
  this.update(this._pad());
  assert(this.pending === null);
  return this._digest(enc);
};

BlockHash.prototype._pad = function pad() {
  var len = this.pendingTotal;
  var bytes = this._delta8;
  var k = bytes - (len + this.padLength) % bytes;
  var res = new Array(k + this.padLength);
  res[0] = 0x80;

  for (var i = 1; i < k; i++) res[i] = 0; // Append length


  len <<= 3;

  if (this.endian === 'big') {
    for (var t = 8; t < this.padLength; t++) res[i++] = 0;

    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = len >>> 24 & 0xff;
    res[i++] = len >>> 16 & 0xff;
    res[i++] = len >>> 8 & 0xff;
    res[i++] = len & 0xff;
  } else {
    res[i++] = len & 0xff;
    res[i++] = len >>> 8 & 0xff;
    res[i++] = len >>> 16 & 0xff;
    res[i++] = len >>> 24 & 0xff;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;

    for (t = 8; t < this.padLength; t++) res[i++] = 0;
  }

  return res;
};

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/hmac.js":
/*!***********************************************!*\
  !*** ./node_modules/hash.js/lib/hash/hmac.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/hash.js/lib/hash/utils.js");

var assert = __webpack_require__(/*! minimalistic-assert */ "./node_modules/minimalistic-assert/index.js");

function Hmac(hash, key, enc) {
  if (!(this instanceof Hmac)) return new Hmac(hash, key, enc);
  this.Hash = hash;
  this.blockSize = hash.blockSize / 8;
  this.outSize = hash.outSize / 8;
  this.inner = null;
  this.outer = null;

  this._init(utils.toArray(key, enc));
}

module.exports = Hmac;

Hmac.prototype._init = function init(key) {
  // Shorten key, if needed
  if (key.length > this.blockSize) key = new this.Hash().update(key).digest();
  assert(key.length <= this.blockSize); // Add padding to key

  for (var i = key.length; i < this.blockSize; i++) key.push(0);

  for (i = 0; i < key.length; i++) key[i] ^= 0x36;

  this.inner = new this.Hash().update(key); // 0x36 ^ 0x5c = 0x6a

  for (i = 0; i < key.length; i++) key[i] ^= 0x6a;

  this.outer = new this.Hash().update(key);
};

Hmac.prototype.update = function update(msg, enc) {
  this.inner.update(msg, enc);
  return this;
};

Hmac.prototype.digest = function digest(enc) {
  this.outer.update(this.inner.digest());
  return this.outer.digest(enc);
};

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/ripemd.js":
/*!*************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/ripemd.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/hash.js/lib/hash/utils.js");

var common = __webpack_require__(/*! ./common */ "./node_modules/hash.js/lib/hash/common.js");

var rotl32 = utils.rotl32;
var sum32 = utils.sum32;
var sum32_3 = utils.sum32_3;
var sum32_4 = utils.sum32_4;
var BlockHash = common.BlockHash;

function RIPEMD160() {
  if (!(this instanceof RIPEMD160)) return new RIPEMD160();
  BlockHash.call(this);
  this.h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
  this.endian = 'little';
}

utils.inherits(RIPEMD160, BlockHash);
exports.ripemd160 = RIPEMD160;
RIPEMD160.blockSize = 512;
RIPEMD160.outSize = 160;
RIPEMD160.hmacStrength = 192;
RIPEMD160.padLength = 64;

RIPEMD160.prototype._update = function update(msg, start) {
  var A = this.h[0];
  var B = this.h[1];
  var C = this.h[2];
  var D = this.h[3];
  var E = this.h[4];
  var Ah = A;
  var Bh = B;
  var Ch = C;
  var Dh = D;
  var Eh = E;

  for (var j = 0; j < 80; j++) {
    var T = sum32(rotl32(sum32_4(A, f(j, B, C, D), msg[r[j] + start], K(j)), s[j]), E);
    A = E;
    E = D;
    D = rotl32(C, 10);
    C = B;
    B = T;
    T = sum32(rotl32(sum32_4(Ah, f(79 - j, Bh, Ch, Dh), msg[rh[j] + start], Kh(j)), sh[j]), Eh);
    Ah = Eh;
    Eh = Dh;
    Dh = rotl32(Ch, 10);
    Ch = Bh;
    Bh = T;
  }

  T = sum32_3(this.h[1], C, Dh);
  this.h[1] = sum32_3(this.h[2], D, Eh);
  this.h[2] = sum32_3(this.h[3], E, Ah);
  this.h[3] = sum32_3(this.h[4], A, Bh);
  this.h[4] = sum32_3(this.h[0], B, Ch);
  this.h[0] = T;
};

RIPEMD160.prototype._digest = function digest(enc) {
  if (enc === 'hex') return utils.toHex32(this.h, 'little');else return utils.split32(this.h, 'little');
};

function f(j, x, y, z) {
  if (j <= 15) return x ^ y ^ z;else if (j <= 31) return x & y | ~x & z;else if (j <= 47) return (x | ~y) ^ z;else if (j <= 63) return x & z | y & ~z;else return x ^ (y | ~z);
}

function K(j) {
  if (j <= 15) return 0x00000000;else if (j <= 31) return 0x5a827999;else if (j <= 47) return 0x6ed9eba1;else if (j <= 63) return 0x8f1bbcdc;else return 0xa953fd4e;
}

function Kh(j) {
  if (j <= 15) return 0x50a28be6;else if (j <= 31) return 0x5c4dd124;else if (j <= 47) return 0x6d703ef3;else if (j <= 63) return 0x7a6d76e9;else return 0x00000000;
}

var r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13];
var rh = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11];
var s = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6];
var sh = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/sha.js":
/*!**********************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.sha1 = __webpack_require__(/*! ./sha/1 */ "./node_modules/hash.js/lib/hash/sha/1.js");
exports.sha224 = __webpack_require__(/*! ./sha/224 */ "./node_modules/hash.js/lib/hash/sha/224.js");
exports.sha256 = __webpack_require__(/*! ./sha/256 */ "./node_modules/hash.js/lib/hash/sha/256.js");
exports.sha384 = __webpack_require__(/*! ./sha/384 */ "./node_modules/hash.js/lib/hash/sha/384.js");
exports.sha512 = __webpack_require__(/*! ./sha/512 */ "./node_modules/hash.js/lib/hash/sha/512.js");

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/sha/1.js":
/*!************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha/1.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/hash.js/lib/hash/utils.js");

var common = __webpack_require__(/*! ../common */ "./node_modules/hash.js/lib/hash/common.js");

var shaCommon = __webpack_require__(/*! ./common */ "./node_modules/hash.js/lib/hash/sha/common.js");

var rotl32 = utils.rotl32;
var sum32 = utils.sum32;
var sum32_5 = utils.sum32_5;
var ft_1 = shaCommon.ft_1;
var BlockHash = common.BlockHash;
var sha1_K = [0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xCA62C1D6];

function SHA1() {
  if (!(this instanceof SHA1)) return new SHA1();
  BlockHash.call(this);
  this.h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
  this.W = new Array(80);
}

utils.inherits(SHA1, BlockHash);
module.exports = SHA1;
SHA1.blockSize = 512;
SHA1.outSize = 160;
SHA1.hmacStrength = 80;
SHA1.padLength = 64;

SHA1.prototype._update = function _update(msg, start) {
  var W = this.W;

  for (var i = 0; i < 16; i++) W[i] = msg[start + i];

  for (; i < W.length; i++) W[i] = rotl32(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);

  var a = this.h[0];
  var b = this.h[1];
  var c = this.h[2];
  var d = this.h[3];
  var e = this.h[4];

  for (i = 0; i < W.length; i++) {
    var s = ~~(i / 20);
    var t = sum32_5(rotl32(a, 5), ft_1(s, b, c, d), e, W[i], sha1_K[s]);
    e = d;
    d = c;
    c = rotl32(b, 30);
    b = a;
    a = t;
  }

  this.h[0] = sum32(this.h[0], a);
  this.h[1] = sum32(this.h[1], b);
  this.h[2] = sum32(this.h[2], c);
  this.h[3] = sum32(this.h[3], d);
  this.h[4] = sum32(this.h[4], e);
};

SHA1.prototype._digest = function digest(enc) {
  if (enc === 'hex') return utils.toHex32(this.h, 'big');else return utils.split32(this.h, 'big');
};

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/sha/224.js":
/*!**************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha/224.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/hash.js/lib/hash/utils.js");

var SHA256 = __webpack_require__(/*! ./256 */ "./node_modules/hash.js/lib/hash/sha/256.js");

function SHA224() {
  if (!(this instanceof SHA224)) return new SHA224();
  SHA256.call(this);
  this.h = [0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4];
}

utils.inherits(SHA224, SHA256);
module.exports = SHA224;
SHA224.blockSize = 512;
SHA224.outSize = 224;
SHA224.hmacStrength = 192;
SHA224.padLength = 64;

SHA224.prototype._digest = function digest(enc) {
  // Just truncate output
  if (enc === 'hex') return utils.toHex32(this.h.slice(0, 7), 'big');else return utils.split32(this.h.slice(0, 7), 'big');
};

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/sha/256.js":
/*!**************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha/256.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/hash.js/lib/hash/utils.js");

var common = __webpack_require__(/*! ../common */ "./node_modules/hash.js/lib/hash/common.js");

var shaCommon = __webpack_require__(/*! ./common */ "./node_modules/hash.js/lib/hash/sha/common.js");

var assert = __webpack_require__(/*! minimalistic-assert */ "./node_modules/minimalistic-assert/index.js");

var sum32 = utils.sum32;
var sum32_4 = utils.sum32_4;
var sum32_5 = utils.sum32_5;
var ch32 = shaCommon.ch32;
var maj32 = shaCommon.maj32;
var s0_256 = shaCommon.s0_256;
var s1_256 = shaCommon.s1_256;
var g0_256 = shaCommon.g0_256;
var g1_256 = shaCommon.g1_256;
var BlockHash = common.BlockHash;
var sha256_K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];

function SHA256() {
  if (!(this instanceof SHA256)) return new SHA256();
  BlockHash.call(this);
  this.h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
  this.k = sha256_K;
  this.W = new Array(64);
}

utils.inherits(SHA256, BlockHash);
module.exports = SHA256;
SHA256.blockSize = 512;
SHA256.outSize = 256;
SHA256.hmacStrength = 192;
SHA256.padLength = 64;

SHA256.prototype._update = function _update(msg, start) {
  var W = this.W;

  for (var i = 0; i < 16; i++) W[i] = msg[start + i];

  for (; i < W.length; i++) W[i] = sum32_4(g1_256(W[i - 2]), W[i - 7], g0_256(W[i - 15]), W[i - 16]);

  var a = this.h[0];
  var b = this.h[1];
  var c = this.h[2];
  var d = this.h[3];
  var e = this.h[4];
  var f = this.h[5];
  var g = this.h[6];
  var h = this.h[7];
  assert(this.k.length === W.length);

  for (i = 0; i < W.length; i++) {
    var T1 = sum32_5(h, s1_256(e), ch32(e, f, g), this.k[i], W[i]);
    var T2 = sum32(s0_256(a), maj32(a, b, c));
    h = g;
    g = f;
    f = e;
    e = sum32(d, T1);
    d = c;
    c = b;
    b = a;
    a = sum32(T1, T2);
  }

  this.h[0] = sum32(this.h[0], a);
  this.h[1] = sum32(this.h[1], b);
  this.h[2] = sum32(this.h[2], c);
  this.h[3] = sum32(this.h[3], d);
  this.h[4] = sum32(this.h[4], e);
  this.h[5] = sum32(this.h[5], f);
  this.h[6] = sum32(this.h[6], g);
  this.h[7] = sum32(this.h[7], h);
};

SHA256.prototype._digest = function digest(enc) {
  if (enc === 'hex') return utils.toHex32(this.h, 'big');else return utils.split32(this.h, 'big');
};

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/sha/384.js":
/*!**************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha/384.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/hash.js/lib/hash/utils.js");

var SHA512 = __webpack_require__(/*! ./512 */ "./node_modules/hash.js/lib/hash/sha/512.js");

function SHA384() {
  if (!(this instanceof SHA384)) return new SHA384();
  SHA512.call(this);
  this.h = [0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a, 0x3070dd17, 0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31, 0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d, 0xbefa4fa4];
}

utils.inherits(SHA384, SHA512);
module.exports = SHA384;
SHA384.blockSize = 1024;
SHA384.outSize = 384;
SHA384.hmacStrength = 192;
SHA384.padLength = 128;

SHA384.prototype._digest = function digest(enc) {
  if (enc === 'hex') return utils.toHex32(this.h.slice(0, 12), 'big');else return utils.split32(this.h.slice(0, 12), 'big');
};

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/sha/512.js":
/*!**************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha/512.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/hash.js/lib/hash/utils.js");

var common = __webpack_require__(/*! ../common */ "./node_modules/hash.js/lib/hash/common.js");

var assert = __webpack_require__(/*! minimalistic-assert */ "./node_modules/minimalistic-assert/index.js");

var rotr64_hi = utils.rotr64_hi;
var rotr64_lo = utils.rotr64_lo;
var shr64_hi = utils.shr64_hi;
var shr64_lo = utils.shr64_lo;
var sum64 = utils.sum64;
var sum64_hi = utils.sum64_hi;
var sum64_lo = utils.sum64_lo;
var sum64_4_hi = utils.sum64_4_hi;
var sum64_4_lo = utils.sum64_4_lo;
var sum64_5_hi = utils.sum64_5_hi;
var sum64_5_lo = utils.sum64_5_lo;
var BlockHash = common.BlockHash;
var sha512_K = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];

function SHA512() {
  if (!(this instanceof SHA512)) return new SHA512();
  BlockHash.call(this);
  this.h = [0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179];
  this.k = sha512_K;
  this.W = new Array(160);
}

utils.inherits(SHA512, BlockHash);
module.exports = SHA512;
SHA512.blockSize = 1024;
SHA512.outSize = 512;
SHA512.hmacStrength = 192;
SHA512.padLength = 128;

SHA512.prototype._prepareBlock = function _prepareBlock(msg, start) {
  var W = this.W; // 32 x 32bit words

  for (var i = 0; i < 32; i++) W[i] = msg[start + i];

  for (; i < W.length; i += 2) {
    var c0_hi = g1_512_hi(W[i - 4], W[i - 3]); // i - 2

    var c0_lo = g1_512_lo(W[i - 4], W[i - 3]);
    var c1_hi = W[i - 14]; // i - 7

    var c1_lo = W[i - 13];
    var c2_hi = g0_512_hi(W[i - 30], W[i - 29]); // i - 15

    var c2_lo = g0_512_lo(W[i - 30], W[i - 29]);
    var c3_hi = W[i - 32]; // i - 16

    var c3_lo = W[i - 31];
    W[i] = sum64_4_hi(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo);
    W[i + 1] = sum64_4_lo(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo);
  }
};

SHA512.prototype._update = function _update(msg, start) {
  this._prepareBlock(msg, start);

  var W = this.W;
  var ah = this.h[0];
  var al = this.h[1];
  var bh = this.h[2];
  var bl = this.h[3];
  var ch = this.h[4];
  var cl = this.h[5];
  var dh = this.h[6];
  var dl = this.h[7];
  var eh = this.h[8];
  var el = this.h[9];
  var fh = this.h[10];
  var fl = this.h[11];
  var gh = this.h[12];
  var gl = this.h[13];
  var hh = this.h[14];
  var hl = this.h[15];
  assert(this.k.length === W.length);

  for (var i = 0; i < W.length; i += 2) {
    var c0_hi = hh;
    var c0_lo = hl;
    var c1_hi = s1_512_hi(eh, el);
    var c1_lo = s1_512_lo(eh, el);
    var c2_hi = ch64_hi(eh, el, fh, fl, gh, gl);
    var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);
    var c3_hi = this.k[i];
    var c3_lo = this.k[i + 1];
    var c4_hi = W[i];
    var c4_lo = W[i + 1];
    var T1_hi = sum64_5_hi(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo, c4_hi, c4_lo);
    var T1_lo = sum64_5_lo(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo, c4_hi, c4_lo);
    c0_hi = s0_512_hi(ah, al);
    c0_lo = s0_512_lo(ah, al);
    c1_hi = maj64_hi(ah, al, bh, bl, ch, cl);
    c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);
    var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
    var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);
    hh = gh;
    hl = gl;
    gh = fh;
    gl = fl;
    fh = eh;
    fl = el;
    eh = sum64_hi(dh, dl, T1_hi, T1_lo);
    el = sum64_lo(dl, dl, T1_hi, T1_lo);
    dh = ch;
    dl = cl;
    ch = bh;
    cl = bl;
    bh = ah;
    bl = al;
    ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
    al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
  }

  sum64(this.h, 0, ah, al);
  sum64(this.h, 2, bh, bl);
  sum64(this.h, 4, ch, cl);
  sum64(this.h, 6, dh, dl);
  sum64(this.h, 8, eh, el);
  sum64(this.h, 10, fh, fl);
  sum64(this.h, 12, gh, gl);
  sum64(this.h, 14, hh, hl);
};

SHA512.prototype._digest = function digest(enc) {
  if (enc === 'hex') return utils.toHex32(this.h, 'big');else return utils.split32(this.h, 'big');
};

function ch64_hi(xh, xl, yh, yl, zh) {
  var r = xh & yh ^ ~xh & zh;
  if (r < 0) r += 0x100000000;
  return r;
}

function ch64_lo(xh, xl, yh, yl, zh, zl) {
  var r = xl & yl ^ ~xl & zl;
  if (r < 0) r += 0x100000000;
  return r;
}

function maj64_hi(xh, xl, yh, yl, zh) {
  var r = xh & yh ^ xh & zh ^ yh & zh;
  if (r < 0) r += 0x100000000;
  return r;
}

function maj64_lo(xh, xl, yh, yl, zh, zl) {
  var r = xl & yl ^ xl & zl ^ yl & zl;
  if (r < 0) r += 0x100000000;
  return r;
}

function s0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 28);
  var c1_hi = rotr64_hi(xl, xh, 2); // 34

  var c2_hi = rotr64_hi(xl, xh, 7); // 39

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0) r += 0x100000000;
  return r;
}

function s0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 28);
  var c1_lo = rotr64_lo(xl, xh, 2); // 34

  var c2_lo = rotr64_lo(xl, xh, 7); // 39

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0) r += 0x100000000;
  return r;
}

function s1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 14);
  var c1_hi = rotr64_hi(xh, xl, 18);
  var c2_hi = rotr64_hi(xl, xh, 9); // 41

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0) r += 0x100000000;
  return r;
}

function s1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 14);
  var c1_lo = rotr64_lo(xh, xl, 18);
  var c2_lo = rotr64_lo(xl, xh, 9); // 41

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0) r += 0x100000000;
  return r;
}

function g0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 1);
  var c1_hi = rotr64_hi(xh, xl, 8);
  var c2_hi = shr64_hi(xh, xl, 7);
  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0) r += 0x100000000;
  return r;
}

function g0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 1);
  var c1_lo = rotr64_lo(xh, xl, 8);
  var c2_lo = shr64_lo(xh, xl, 7);
  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0) r += 0x100000000;
  return r;
}

function g1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 19);
  var c1_hi = rotr64_hi(xl, xh, 29); // 61

  var c2_hi = shr64_hi(xh, xl, 6);
  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0) r += 0x100000000;
  return r;
}

function g1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 19);
  var c1_lo = rotr64_lo(xl, xh, 29); // 61

  var c2_lo = shr64_lo(xh, xl, 6);
  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0) r += 0x100000000;
  return r;
}

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/sha/common.js":
/*!*****************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha/common.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/hash.js/lib/hash/utils.js");

var rotr32 = utils.rotr32;

function ft_1(s, x, y, z) {
  if (s === 0) return ch32(x, y, z);
  if (s === 1 || s === 3) return p32(x, y, z);
  if (s === 2) return maj32(x, y, z);
}

exports.ft_1 = ft_1;

function ch32(x, y, z) {
  return x & y ^ ~x & z;
}

exports.ch32 = ch32;

function maj32(x, y, z) {
  return x & y ^ x & z ^ y & z;
}

exports.maj32 = maj32;

function p32(x, y, z) {
  return x ^ y ^ z;
}

exports.p32 = p32;

function s0_256(x) {
  return rotr32(x, 2) ^ rotr32(x, 13) ^ rotr32(x, 22);
}

exports.s0_256 = s0_256;

function s1_256(x) {
  return rotr32(x, 6) ^ rotr32(x, 11) ^ rotr32(x, 25);
}

exports.s1_256 = s1_256;

function g0_256(x) {
  return rotr32(x, 7) ^ rotr32(x, 18) ^ x >>> 3;
}

exports.g0_256 = g0_256;

function g1_256(x) {
  return rotr32(x, 17) ^ rotr32(x, 19) ^ x >>> 10;
}

exports.g1_256 = g1_256;

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/utils.js":
/*!************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/utils.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var assert = __webpack_require__(/*! minimalistic-assert */ "./node_modules/minimalistic-assert/index.js");

var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports.inherits = inherits;

function isSurrogatePair(msg, i) {
  if ((msg.charCodeAt(i) & 0xFC00) !== 0xD800) {
    return false;
  }

  if (i < 0 || i + 1 >= msg.length) {
    return false;
  }

  return (msg.charCodeAt(i + 1) & 0xFC00) === 0xDC00;
}

function toArray(msg, enc) {
  if (Array.isArray(msg)) return msg.slice();
  if (!msg) return [];
  var res = [];

  if (typeof msg === 'string') {
    if (!enc) {
      // Inspired by stringToUtf8ByteArray() in closure-library by Google
      // https://github.com/google/closure-library/blob/8598d87242af59aac233270742c8984e2b2bdbe0/closure/goog/crypt/crypt.js#L117-L143
      // Apache License 2.0
      // https://github.com/google/closure-library/blob/master/LICENSE
      var p = 0;

      for (var i = 0; i < msg.length; i++) {
        var c = msg.charCodeAt(i);

        if (c < 128) {
          res[p++] = c;
        } else if (c < 2048) {
          res[p++] = c >> 6 | 192;
          res[p++] = c & 63 | 128;
        } else if (isSurrogatePair(msg, i)) {
          c = 0x10000 + ((c & 0x03FF) << 10) + (msg.charCodeAt(++i) & 0x03FF);
          res[p++] = c >> 18 | 240;
          res[p++] = c >> 12 & 63 | 128;
          res[p++] = c >> 6 & 63 | 128;
          res[p++] = c & 63 | 128;
        } else {
          res[p++] = c >> 12 | 224;
          res[p++] = c >> 6 & 63 | 128;
          res[p++] = c & 63 | 128;
        }
      }
    } else if (enc === 'hex') {
      msg = msg.replace(/[^a-z0-9]+/ig, '');
      if (msg.length % 2 !== 0) msg = '0' + msg;

      for (i = 0; i < msg.length; i += 2) res.push(parseInt(msg[i] + msg[i + 1], 16));
    }
  } else {
    for (i = 0; i < msg.length; i++) res[i] = msg[i] | 0;
  }

  return res;
}

exports.toArray = toArray;

function toHex(msg) {
  var res = '';

  for (var i = 0; i < msg.length; i++) res += zero2(msg[i].toString(16));

  return res;
}

exports.toHex = toHex;

function htonl(w) {
  var res = w >>> 24 | w >>> 8 & 0xff00 | w << 8 & 0xff0000 | (w & 0xff) << 24;
  return res >>> 0;
}

exports.htonl = htonl;

function toHex32(msg, endian) {
  var res = '';

  for (var i = 0; i < msg.length; i++) {
    var w = msg[i];
    if (endian === 'little') w = htonl(w);
    res += zero8(w.toString(16));
  }

  return res;
}

exports.toHex32 = toHex32;

function zero2(word) {
  if (word.length === 1) return '0' + word;else return word;
}

exports.zero2 = zero2;

function zero8(word) {
  if (word.length === 7) return '0' + word;else if (word.length === 6) return '00' + word;else if (word.length === 5) return '000' + word;else if (word.length === 4) return '0000' + word;else if (word.length === 3) return '00000' + word;else if (word.length === 2) return '000000' + word;else if (word.length === 1) return '0000000' + word;else return word;
}

exports.zero8 = zero8;

function join32(msg, start, end, endian) {
  var len = end - start;
  assert(len % 4 === 0);
  var res = new Array(len / 4);

  for (var i = 0, k = start; i < res.length; i++, k += 4) {
    var w;
    if (endian === 'big') w = msg[k] << 24 | msg[k + 1] << 16 | msg[k + 2] << 8 | msg[k + 3];else w = msg[k + 3] << 24 | msg[k + 2] << 16 | msg[k + 1] << 8 | msg[k];
    res[i] = w >>> 0;
  }

  return res;
}

exports.join32 = join32;

function split32(msg, endian) {
  var res = new Array(msg.length * 4);

  for (var i = 0, k = 0; i < msg.length; i++, k += 4) {
    var m = msg[i];

    if (endian === 'big') {
      res[k] = m >>> 24;
      res[k + 1] = m >>> 16 & 0xff;
      res[k + 2] = m >>> 8 & 0xff;
      res[k + 3] = m & 0xff;
    } else {
      res[k + 3] = m >>> 24;
      res[k + 2] = m >>> 16 & 0xff;
      res[k + 1] = m >>> 8 & 0xff;
      res[k] = m & 0xff;
    }
  }

  return res;
}

exports.split32 = split32;

function rotr32(w, b) {
  return w >>> b | w << 32 - b;
}

exports.rotr32 = rotr32;

function rotl32(w, b) {
  return w << b | w >>> 32 - b;
}

exports.rotl32 = rotl32;

function sum32(a, b) {
  return a + b >>> 0;
}

exports.sum32 = sum32;

function sum32_3(a, b, c) {
  return a + b + c >>> 0;
}

exports.sum32_3 = sum32_3;

function sum32_4(a, b, c, d) {
  return a + b + c + d >>> 0;
}

exports.sum32_4 = sum32_4;

function sum32_5(a, b, c, d, e) {
  return a + b + c + d + e >>> 0;
}

exports.sum32_5 = sum32_5;

function sum64(buf, pos, ah, al) {
  var bh = buf[pos];
  var bl = buf[pos + 1];
  var lo = al + bl >>> 0;
  var hi = (lo < al ? 1 : 0) + ah + bh;
  buf[pos] = hi >>> 0;
  buf[pos + 1] = lo;
}

exports.sum64 = sum64;

function sum64_hi(ah, al, bh, bl) {
  var lo = al + bl >>> 0;
  var hi = (lo < al ? 1 : 0) + ah + bh;
  return hi >>> 0;
}

exports.sum64_hi = sum64_hi;

function sum64_lo(ah, al, bh, bl) {
  var lo = al + bl;
  return lo >>> 0;
}

exports.sum64_lo = sum64_lo;

function sum64_4_hi(ah, al, bh, bl, ch, cl, dh, dl) {
  var carry = 0;
  var lo = al;
  lo = lo + bl >>> 0;
  carry += lo < al ? 1 : 0;
  lo = lo + cl >>> 0;
  carry += lo < cl ? 1 : 0;
  lo = lo + dl >>> 0;
  carry += lo < dl ? 1 : 0;
  var hi = ah + bh + ch + dh + carry;
  return hi >>> 0;
}

exports.sum64_4_hi = sum64_4_hi;

function sum64_4_lo(ah, al, bh, bl, ch, cl, dh, dl) {
  var lo = al + bl + cl + dl;
  return lo >>> 0;
}

exports.sum64_4_lo = sum64_4_lo;

function sum64_5_hi(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
  var carry = 0;
  var lo = al;
  lo = lo + bl >>> 0;
  carry += lo < al ? 1 : 0;
  lo = lo + cl >>> 0;
  carry += lo < cl ? 1 : 0;
  lo = lo + dl >>> 0;
  carry += lo < dl ? 1 : 0;
  lo = lo + el >>> 0;
  carry += lo < el ? 1 : 0;
  var hi = ah + bh + ch + dh + eh + carry;
  return hi >>> 0;
}

exports.sum64_5_hi = sum64_5_hi;

function sum64_5_lo(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
  var lo = al + bl + cl + dl + el;
  return lo >>> 0;
}

exports.sum64_5_lo = sum64_5_lo;

function rotr64_hi(ah, al, num) {
  var r = al << 32 - num | ah >>> num;
  return r >>> 0;
}

exports.rotr64_hi = rotr64_hi;

function rotr64_lo(ah, al, num) {
  var r = ah << 32 - num | al >>> num;
  return r >>> 0;
}

exports.rotr64_lo = rotr64_lo;

function shr64_hi(ah, al, num) {
  return ah >>> num;
}

exports.shr64_hi = shr64_hi;

function shr64_lo(ah, al, num) {
  var r = ah << 32 - num | al >>> num;
  return r >>> 0;
}

exports.shr64_lo = shr64_lo;

/***/ }),

/***/ "./node_modules/hmac-drbg/lib/hmac-drbg.js":
/*!*************************************************!*\
  !*** ./node_modules/hmac-drbg/lib/hmac-drbg.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hash = __webpack_require__(/*! hash.js */ "./node_modules/hash.js/lib/hash.js");

var utils = __webpack_require__(/*! minimalistic-crypto-utils */ "./node_modules/minimalistic-crypto-utils/lib/utils.js");

var assert = __webpack_require__(/*! minimalistic-assert */ "./node_modules/minimalistic-assert/index.js");

function HmacDRBG(options) {
  if (!(this instanceof HmacDRBG)) return new HmacDRBG(options);
  this.hash = options.hash;
  this.predResist = !!options.predResist;
  this.outLen = this.hash.outSize;
  this.minEntropy = options.minEntropy || this.hash.hmacStrength;
  this._reseed = null;
  this.reseedInterval = null;
  this.K = null;
  this.V = null;
  var entropy = utils.toArray(options.entropy, options.entropyEnc || 'hex');
  var nonce = utils.toArray(options.nonce, options.nonceEnc || 'hex');
  var pers = utils.toArray(options.pers, options.persEnc || 'hex');
  assert(entropy.length >= this.minEntropy / 8, 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');

  this._init(entropy, nonce, pers);
}

module.exports = HmacDRBG;

HmacDRBG.prototype._init = function init(entropy, nonce, pers) {
  var seed = entropy.concat(nonce).concat(pers);
  this.K = new Array(this.outLen / 8);
  this.V = new Array(this.outLen / 8);

  for (var i = 0; i < this.V.length; i++) {
    this.K[i] = 0x00;
    this.V[i] = 0x01;
  }

  this._update(seed);

  this._reseed = 1;
  this.reseedInterval = 0x1000000000000; // 2^48
};

HmacDRBG.prototype._hmac = function hmac() {
  return new hash.hmac(this.hash, this.K);
};

HmacDRBG.prototype._update = function update(seed) {
  var kmac = this._hmac().update(this.V).update([0x00]);

  if (seed) kmac = kmac.update(seed);
  this.K = kmac.digest();
  this.V = this._hmac().update(this.V).digest();
  if (!seed) return;
  this.K = this._hmac().update(this.V).update([0x01]).update(seed).digest();
  this.V = this._hmac().update(this.V).digest();
};

HmacDRBG.prototype.reseed = function reseed(entropy, entropyEnc, add, addEnc) {
  // Optional entropy enc
  if (typeof entropyEnc !== 'string') {
    addEnc = add;
    add = entropyEnc;
    entropyEnc = null;
  }

  entropy = utils.toArray(entropy, entropyEnc);
  add = utils.toArray(add, addEnc);
  assert(entropy.length >= this.minEntropy / 8, 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');

  this._update(entropy.concat(add || []));

  this._reseed = 1;
};

HmacDRBG.prototype.generate = function generate(len, enc, add, addEnc) {
  if (this._reseed > this.reseedInterval) throw new Error('Reseed is required'); // Optional encoding

  if (typeof enc !== 'string') {
    addEnc = add;
    add = enc;
    enc = null;
  } // Optional additional data


  if (add) {
    add = utils.toArray(add, addEnc || 'hex');

    this._update(add);
  }

  var temp = [];

  while (temp.length < len) {
    this.V = this._hmac().update(this.V).digest();
    temp = temp.concat(this.V);
  }

  var res = temp.slice(0, len);

  this._update(add);

  this._reseed++;
  return utils.encode(res, enc);
};

/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/***/ ((module) => {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;

      var TempCtor = function () {};

      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}

/***/ }),

/***/ "./node_modules/minimalistic-assert/index.js":
/*!***************************************************!*\
  !*** ./node_modules/minimalistic-assert/index.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports = assert;

function assert(val, msg) {
  if (!val) throw new Error(msg || 'Assertion failed');
}

assert.equal = function assertEqual(l, r, msg) {
  if (l != r) throw new Error(msg || 'Assertion failed: ' + l + ' != ' + r);
};

/***/ }),

/***/ "./node_modules/minimalistic-crypto-utils/lib/utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/minimalistic-crypto-utils/lib/utils.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var utils = exports;

function toArray(msg, enc) {
  if (Array.isArray(msg)) return msg.slice();
  if (!msg) return [];
  var res = [];

  if (typeof msg !== 'string') {
    for (var i = 0; i < msg.length; i++) res[i] = msg[i] | 0;

    return res;
  }

  if (enc === 'hex') {
    msg = msg.replace(/[^a-z0-9]+/ig, '');
    if (msg.length % 2 !== 0) msg = '0' + msg;

    for (var i = 0; i < msg.length; i += 2) res.push(parseInt(msg[i] + msg[i + 1], 16));
  } else {
    for (var i = 0; i < msg.length; i++) {
      var c = msg.charCodeAt(i);
      var hi = c >> 8;
      var lo = c & 0xff;
      if (hi) res.push(hi, lo);else res.push(lo);
    }
  }

  return res;
}

utils.toArray = toArray;

function zero2(word) {
  if (word.length === 1) return '0' + word;else return word;
}

utils.zero2 = zero2;

function toHex(msg) {
  var res = '';

  for (var i = 0; i < msg.length; i++) res += zero2(msg[i].toString(16));

  return res;
}

utils.toHex = toHex;

utils.encode = function encode(arr, enc) {
  if (enc === 'hex') return toHex(arr);else return arr;
};

/***/ }),

/***/ "./src/feed.ts":
/*!*********************!*\
  !*** ./src/feed.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FEED_TYPES = void 0;
exports.assembleSocPayload = assembleSocPayload;
exports.extractDataFromSocPayload = extractDataFromSocPayload;
exports.fetchIndexToInt = fetchIndexToInt;
exports.makeTopic = makeTopic;
exports.mapSocToFeed = mapSocToFeed;

var _beeJs = __webpack_require__(/*! @ethersphere/bee-js */ "./node_modules/@ethersphere/bee-js/dist/index.browser.min.js");

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.ts");

const FEED_TYPES = ['sequential', 'fault-tolerant-stream'];
exports.FEED_TYPES = FEED_TYPES;

function extractDataFromSocPayload(payload) {
  const timestamp = (0, _utils.readUint64BigEndian)(payload.slice(0, 8));
  const p = payload.slice(8);

  if (p.length === 32 || p.length === 64) {
    return {
      timestamp,
      reference: p
    };
  } // TODO handle JSON-like metadata


  throw new Error('NotImplemented: payload is longer than expected');
}

function mapSocToFeed(socChunk, index) {
  const {
    reference,
    timestamp
  } = extractDataFromSocPayload(socChunk.payload());
  return { ...socChunk,
    index,
    timestamp,
    reference: (0, _utils.bytesToHex)(reference)
  };
}

function assembleSocPayload(reference, options //TODO metadata
) {
  var _options$at;

  const at = (_options$at = options === null || options === void 0 ? void 0 : options.at) !== null && _options$at !== void 0 ? _options$at : Date.now() / 1000.0;
  const timestamp = (0, _utils.writeUint64BigEndian)(at);
  return (0, _utils.serializeBytes)(timestamp, reference);
}
/** Converts feedIndex response to integer */


function fetchIndexToInt(fetchIndex) {
  const indexBytes = (0, _utils.hexToBytes)(fetchIndex);
  let index = 0;

  for (let i = indexBytes.length - 1; i >= 0; i--) {
    const byte = indexBytes[i];
    if (byte === 0) break;
    index += byte;
  }

  return index;
}

function makeTopic(topic) {
  if (typeof topic === 'string') {
    return _beeJs.Utils.Hex.makeHexString(topic, _utils.TOPIC_HEX_LENGTH);
  } else if (topic instanceof Uint8Array) {
    (0, _utils.assertBytes)(topic, _utils.TOPIC_BYTES_LENGTH);
    return (0, _utils.bytesToHex)(topic, _utils.TOPIC_HEX_LENGTH);
  }

  throw new TypeError('invalid topic');
}

/***/ }),

/***/ "./src/sequential-feed.ts":
/*!********************************!*\
  !*** ./src/sequential-feed.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SequentialFeed = void 0;

var _beeJs = __webpack_require__(/*! @ethersphere/bee-js */ "./node_modules/@ethersphere/bee-js/dist/index.browser.min.js");

var _feed = __webpack_require__(/*! ./feed */ "./src/feed.ts");

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.ts");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  Hex
} = _beeJs.Utils;
const {
  hexToBytes
} = Hex;

class SequentialFeed {
  constructor(bee) {
    this.bee = bee;

    _defineProperty(this, "type", void 0);

    this.type = 'sequential';
  }
  /**
   * Creates a sequential feed reader
   * @param topic a swarm topic
   * @param owner owner
   * @returns a sequential feed reader
   */


  makeFeedR(topic, owner) {
    const socReader = this.bee.makeSOCReader(owner);
    const topicHex = (0, _feed.makeTopic)(topic);
    const topicBytes = hexToBytes(topicHex);

    const ownerHex = _beeJs.Utils.Eth.makeHexEthAddress(owner);
    /**
     * Gets the last index in the feed
     * @returns An index number
     */


    const getLastIndex = async () => {
      // It fetches the latest feed on bee-side, because it is faster than lookup for the last index by individual API calls.
      const feedReader = this.bee.makeFeedReader('sequence', topic, owner);
      let index;

      try {
        const lastUpdate = await feedReader.download();
        const {
          feedIndex
        } = lastUpdate;
        index = (0, _feed.fetchIndexToInt)(feedIndex);
      } catch (e) {
        index = -1;
      }

      return index;
    };
    /**
     * Gets the last appended chunk in the feed
     * @returns A feed chunk
     */


    const findLastUpdate = async () => {
      const index = await getLastIndex();
      const socChunk = await socReader.download(this.getIdentifier(topicBytes, index));
      return (0, _feed.mapSocToFeed)(socChunk, index);
    };
    /**
     * Downloads a chunk by index number
     * @param index index number
     * @returns A feed chunk
     */


    const getUpdate = async index => {
      const socChunk = await socReader.download(this.getIdentifier(topicBytes, index));
      return (0, _feed.mapSocToFeed)(socChunk, index);
    };
    /**
     * Download all chunk by indices
     * @param indices an array of index numbers
     * @returns An array of chunks
     */


    const getUpdates = async indices => {
      const promises = [];

      for (const index of indices) {
        promises.push(socReader.download(this.getIdentifier(topic, index)));
      }

      const socs = await Promise.all(promises);
      const feeds = socs.map((soc, orderIndex) => {
        return (0, _feed.mapSocToFeed)(soc, indices[orderIndex]);
      });
      return feeds;
    };

    return {
      type: 'sequential',
      owner: ownerHex,
      topic: topicHex,
      findLastUpdate,
      getUpdate,
      getUpdates,
      getLastIndex
    };
  }
  /**
   * Creates a sequential feed reader / writer
   * @param topic a swarm topic
   * @param signer signer
   * @returns a sequential feed reader / writer
   */


  makeFeedRW(topic, signer) {
    const canonicalSigner = (0, _utils.makeSigner)(signer);
    const topicHex = (0, _feed.makeTopic)(topic);
    const topicBytes = hexToBytes(topicHex);
    const feedR = this.makeFeedR(topic, canonicalSigner.address);
    const socWriter = this.bee.makeSOCWriter(canonicalSigner);
    /**
     * Sets the upload chunk to update
     * @param index the chunk index to update
     * @param postageBatchId swarm postage batch id
     * @param reference chunk reference
     * @returns a chunk reference
     */

    const setUpdate = async (index, postageBatchId, reference) => {
      const identifier = this.getIdentifier(topicBytes, index);
      return socWriter.upload(postageBatchId, identifier, (0, _feed.assembleSocPayload)(hexToBytes(reference)) //TODO metadata
      );
    };
    /**
     * Sets the next upload chunk
     * @param postageBatchId swarm postage batch id
     * @param reference chunk reference
     * @returns a chunk reference
     */


    const setLastUpdate = async (postageBatchId, reference) => {
      let index;

      try {
        const lastIndex = await feedR.getLastIndex();
        index = lastIndex + 1;
      } catch (e) {
        index = 0;
      }

      return setUpdate(index, postageBatchId, reference);
    };

    return { ...feedR,
      setUpdate,
      setLastUpdate
    };
  }
  /**
   * Get Single Owner Chunk identifier
   * @param topic a swarm topic, bytes 32 length
   * @param index the chunk index
   * @returns a bytes 32
   */


  getIdentifier(topic, index) {
    const indexBytes = (0, _utils.writeUint64BigEndian)(index);
    return _beeJs.Utils.keccak256Hash(topic, indexBytes);
  }

}

exports.SequentialFeed = SequentialFeed;

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UNCOMPRESSED_RECOVERY_ID = exports.TOPIC_HEX_LENGTH = exports.TOPIC_BYTES_LENGTH = void 0;
exports.assertBytes = assertBytes;
exports.assertSigner = assertSigner;
exports.bytesToHex = bytesToHex;
exports.defaultSign = defaultSign;
exports.hexToBytes = hexToBytes;
exports.isObject = isObject;
exports.isStrictlyObject = isStrictlyObject;
exports.makePrivateKeySigner = makePrivateKeySigner;
exports.makeSigner = makeSigner;
exports.readUint64BigEndian = readUint64BigEndian;
exports.serializeBytes = serializeBytes;
exports.writeUint64BigEndian = writeUint64BigEndian;

var _beeJs = __webpack_require__(/*! @ethersphere/bee-js */ "./node_modules/@ethersphere/bee-js/dist/index.browser.min.js");

var _elliptic = __webpack_require__(/*! elliptic */ "./node_modules/elliptic/lib/elliptic.js");

const TOPIC_BYTES_LENGTH = 32;
exports.TOPIC_BYTES_LENGTH = TOPIC_BYTES_LENGTH;
const TOPIC_HEX_LENGTH = 64;
exports.TOPIC_HEX_LENGTH = TOPIC_HEX_LENGTH;
const UNCOMPRESSED_RECOVERY_ID = 27;
exports.UNCOMPRESSED_RECOVERY_ID = UNCOMPRESSED_RECOVERY_ID;

function writeUint64BigEndian(value, bytes = _beeJs.Utils.Bytes.makeBytes(8)) {
  const dataView = new DataView(bytes.buffer);
  const valueLower32 = value & 0xffffffff;
  dataView.setUint32(0, 0);
  dataView.setUint32(4, valueLower32);
  return bytes;
}

function publicKeyToAddress(pubKey) {
  const pubBytes = pubKey.encode('array', false);
  return _beeJs.Utils.keccak256Hash(pubBytes.slice(1)).slice(12);
}

function hashWithEthereumPrefix(data) {
  const ethereumSignedMessagePrefix = `\x19Ethereum Signed Message:\n${data.length}`;
  const prefixBytes = new TextEncoder().encode(ethereumSignedMessagePrefix);
  return _beeJs.Utils.keccak256Hash(prefixBytes, data);
}
/**
 * The default signer function that can be used for integrating with
 * other applications (e.g. wallets).
 *
 * @param data      The data to be signed
 * @param privateKey  The private key used for signing the data
 */


function defaultSign(data, privateKey) {
  const curve = new _elliptic.ec('secp256k1');
  const keyPair = curve.keyFromPrivate(privateKey);
  const hashedDigest = hashWithEthereumPrefix(data);
  const sigRaw = curve.sign(hashedDigest, keyPair, {
    canonical: true,
    pers: undefined
  });

  if (sigRaw.recoveryParam === null) {
    throw new Error('signDigest recovery param was null');
  }

  const signature = new Uint8Array([...sigRaw.r.toArray('be', 32), ...sigRaw.s.toArray('be', 32), sigRaw.recoveryParam + UNCOMPRESSED_RECOVERY_ID]);
  return signature;
}

function makeSigner(signer) {
  if (typeof signer === 'string') {
    const hexKey = _beeJs.Utils.Hex.makeHexString(signer, 64);

    const keyBytes = hexToBytes(hexKey); // HexString is verified for 64 length => 32 is guaranteed

    return makePrivateKeySigner(keyBytes);
  } else if (signer instanceof Uint8Array) {
    assertBytes(signer, 32);
    return makePrivateKeySigner(signer);
  }

  assertSigner(signer);
  return signer;
}

function assertSigner(signer) {
  if (!isStrictlyObject(signer)) {
    throw new TypeError('Signer must be an object!');
  }

  const typedSigner = signer;

  if (!_beeJs.Utils.Bytes.isBytes(typedSigner.address, 20)) {
    throw new TypeError("Signer's address must be Uint8Array with 20 bytes!");
  }

  if (typeof typedSigner.sign !== 'function') {
    throw new TypeError('Signer sign property needs to be function!');
  }
}
/**
 * Creates a singer object that can be used when the private key is known.
 *
 * @param privateKey The private key
 */


function makePrivateKeySigner(privateKey) {
  const curve = new _elliptic.ec('secp256k1');
  const keyPair = curve.keyFromPrivate(privateKey);
  const address = publicKeyToAddress(keyPair.getPublic());
  return {
    sign: digest => defaultSign(digest, privateKey),
    address
  };
}

function readUint64BigEndian(bytes) {
  const dataView = new DataView(bytes.buffer);
  return dataView.getUint32(4);
}
/**
 * Converts a hex string to Uint8Array
 *
 * wrapper
 *
 * @param hex string input without 0x prefix!
 */


function hexToBytes(hex) {
  return _beeJs.Utils.Hex.hexToBytes(hex);
}
/**
 * Converts array of number or Uint8Array to HexString without prefix.
 *
 * wrapper
 *
 * @param bytes   The input array
 * @param len     The length of the non prefixed HexString
 */


function bytesToHex(bytes, len) {
  return _beeJs.Utils.Hex.bytesToHex(bytes, len);
}
/**
 * Verifies if a byte array has a certain length
 *
 * wrapper
 *
 * @param b       The byte array
 * @param length  The specified length
 */


function assertBytes(b, length) {
  return _beeJs.Utils.Bytes.assertBytes(b, length);
}
/**
 * Helper function for serialize byte arrays
 *
 * @param arrays Any number of byte array arguments
 */


function serializeBytes(...arrays) {
  const length = arrays.reduce((prev, curr) => prev + curr.length, 0);
  const buffer = new Uint8Array(length);
  let offset = 0;
  arrays.forEach(arr => {
    buffer.set(arr, offset);
    offset += arr.length;
  });
  return buffer;
}
/**
 * Generally it is discouraged to use `object` type, but in this case I think
 * it is best to do so as it is possible to easily convert from `object`to other
 * types, which will be usually the case after asserting that the object is
 * strictly object. With for example Record<string, unknown> you have to first
 * cast it to `unknown` which I think bit defeat the purpose.
 *
 * @param value
 */
// eslint-disable-next-line @typescript-eslint/ban-types


function isStrictlyObject(value) {
  return isObject(value) && !Array.isArray(value);
}

function isObject(value) {
  return value !== null && typeof value === 'object';
}

/***/ }),

/***/ "?8131":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?3fc0":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/elliptic/package.json":
/*!********************************************!*\
  !*** ./node_modules/elliptic/package.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"elliptic","version":"6.5.4","description":"EC cryptography","main":"lib/elliptic.js","files":["lib"],"scripts":{"lint":"eslint lib test","lint:fix":"npm run lint -- --fix","unit":"istanbul test _mocha --reporter=spec test/index.js","test":"npm run lint && npm run unit","version":"grunt dist && git add dist/"},"repository":{"type":"git","url":"git@github.com:indutny/elliptic"},"keywords":["EC","Elliptic","curve","Cryptography"],"author":"Fedor Indutny <fedor@indutny.com>","license":"MIT","bugs":{"url":"https://github.com/indutny/elliptic/issues"},"homepage":"https://github.com/indutny/elliptic","devDependencies":{"brfs":"^2.0.2","coveralls":"^3.1.0","eslint":"^7.6.0","grunt":"^1.2.1","grunt-browserify":"^5.3.0","grunt-cli":"^1.3.2","grunt-contrib-connect":"^3.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^5.0.0","grunt-mocha-istanbul":"^5.0.2","grunt-saucelabs":"^9.0.1","istanbul":"^0.4.5","mocha":"^8.0.1"},"dependencies":{"bn.js":"^4.11.9","brorand":"^1.1.0","hash.js":"^1.0.0","hmac-drbg":"^1.0.1","inherits":"^2.0.4","minimalistic-assert":"^1.0.1","minimalistic-crypto-utils":"^1.0.1"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Feeds = void 0;
Object.defineProperty(exports, "SequentialFeed", ({
  enumerable: true,
  get: function () {
    return _sequentialFeed.SequentialFeed;
  }
}));

var _Feeds = _interopRequireWildcard(__webpack_require__(/*! ./feed */ "./src/feed.ts"));

exports.Feeds = _Feeds;

var _sequentialFeed = __webpack_require__(/*! ./sequential-feed */ "./src/sequential-feed.ts");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map