(() => {
    "use strict";
    function e(t) {
        return (
            (e =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e &&
                              "function" == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                      }),
            e(t)
        );
    }
    function t(e, t) {
        for (var a = 0; a < t.length; a++) {
            var o = t[a];
            (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, n(o.key), o);
        }
    }
    function n(t) {
        var n = (function (t, n) {
            if ("object" != e(t) || !t) return t;
            var a = t[Symbol.toPrimitive];
            if (void 0 !== a) {
                var o = a.call(t, n || "default");
                if ("object" != e(o)) return o;
                throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                );
            }
            return ("string" === n ? String : Number)(t);
        })(t, "string");
        return "symbol" == e(n) ? n : n + "";
    }
    var a,
        o = (function () {
            return (
                (a = function e(t) {
                    var a, o, i;
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, e),
                        (a = this),
                        (i = {
                            oldestFirst: !0,
                            text: "Toastify is awesome!",
                            node: void 0,
                            duration: 3e3,
                            selector: void 0,
                            callback: function () {},
                            close: !1,
                            gravity: "toastify-top",
                            position: "",
                            className: "",
                            stopOnFocus: !0,
                            onClick: function () {},
                            offset: { x: 0, y: 0 },
                            escapeMarkup: !0,
                            ariaLive: "polite",
                            style: { background: "" },
                        }),
                        (o = n((o = "defaults"))) in a
                            ? Object.defineProperty(a, o, {
                                  value: i,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (a[o] = i),
                        (this.options = {}),
                        (this.toastElement = null),
                        (this._rootElement = document.body),
                        this._init(t);
                }),
                (o = [
                    {
                        key: "showToast",
                        value: function () {
                            var e = this;
                            if (
                                ((this.toastElement = this._buildToast()),
                                "string" == typeof this.options.selector
                                    ? (this._rootElement =
                                          document.getElementById(
                                              this.options.selector
                                          ))
                                    : this.options.selector instanceof
                                          HTMLElement ||
                                      this.options.selector instanceof
                                          ShadowRoot
                                    ? (this._rootElement =
                                          this.options.selector)
                                    : (this._rootElement = document.body),
                                !this._rootElement)
                            )
                                throw "Root element is not defined";
                            return (
                                this._rootElement.insertBefore(
                                    this.toastElement,
                                    this._rootElement.firstChild
                                ),
                                this._reposition(),
                                this.options.duration > 0 &&
                                    (this.toastElement.timeOutValue =
                                        window.setTimeout(function () {
                                            e._removeElement(e.toastElement);
                                        }, this.options.duration)),
                                this
                            );
                        },
                    },
                    {
                        key: "hideToast",
                        value: function () {
                            this.toastElement.timeOutValue &&
                                clearTimeout(this.toastElement.timeOutValue),
                                this._removeElement(this.toastElement);
                        },
                    },
                    {
                        key: "_init",
                        value: function (e) {
                            (this.options = Object.assign(this.defaults, e)),
                                (this.toastElement = null),
                                (this.options.gravity =
                                    "bottom" === e.gravity
                                        ? "toastify-bottom"
                                        : "toastify-top"),
                                (this.options.stopOnFocus =
                                    void 0 === e.stopOnFocus || e.stopOnFocus);
                        },
                    },
                    {
                        key: "_buildToast",
                        value: function () {
                            var t = this;
                            if (!this.options)
                                throw "Toastify is not initialized";
                            var n = document.createElement("div");
                            for (var a in ((n.className = "toastify on ".concat(
                                this.options.className,
                                " pe-5"
                            )),
                            (n.className += " toastify-".concat(
                                this.options.position
                            )),
                            (n.className += " ".concat(this.options.gravity)),
                            this.options.style))
                                n.style[a] = this.options.style[a];
                            if (
                                (this.options.ariaLive &&
                                    n.setAttribute(
                                        "aria-live",
                                        this.options.ariaLive
                                    ),
                                "" !== this.options.icon)
                            ) {
                                var o = document.createElement("div");
                                (o.className = "toastify-icon"),
                                    (o.innerHTML = this.options.icon),
                                    n.appendChild(o);
                            }
                            var i = document.createElement("span");
                            if (
                                ((i.className = "toastify-text"),
                                this.options.node &&
                                this.options.node.nodeType === Node.ELEMENT_NODE
                                    ? i.appendChild(this.options.node)
                                    : this.options.escapeMarkup
                                    ? (i.innerText = this.options.text)
                                    : (i.innerHTML = this.options.text),
                                n.appendChild(i),
                                !0 === this.options.close)
                            ) {
                                var r = document.createElement("button");
                                (r.type = "button"),
                                    r.setAttribute("aria-label", "Close"),
                                    (r.className = "toast-close"),
                                    (r.style.cssText =
                                        "position: absolute; top: 8px; inset-inline-end: 8px;"),
                                    (r.innerHTML =
                                        '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                <path d="M18 6l-12 12"></path>\n                <path d="M6 6l12 12"></path>\n            </svg>'),
                                    r.addEventListener("click", function (e) {
                                        e.stopPropagation(),
                                            t._removeElement(t.toastElement),
                                            window.clearTimeout(
                                                t.toastElement.timeOutValue
                                            );
                                    });
                                var c =
                                    window.innerWidth > 0
                                        ? window.innerWidth
                                        : screen.width;
                                "left" === this.options.position && c > 360
                                    ? n.insertAdjacentElement("afterbegin", r)
                                    : n.appendChild(r);
                            }
                            if (
                                (this.options.stopOnFocus &&
                                    this.options.duration > 0 &&
                                    (n.addEventListener(
                                        "mouseover",
                                        function (e) {
                                            window.clearTimeout(n.timeOutValue);
                                        }
                                    ),
                                    n.addEventListener(
                                        "mouseleave",
                                        function () {
                                            n.timeOutValue = window.setTimeout(
                                                function () {
                                                    t._removeElement(n);
                                                },
                                                t.options.duration
                                            );
                                        }
                                    )),
                                "function" == typeof this.options.onClick &&
                                    n.addEventListener("click", function (e) {
                                        e.stopPropagation(),
                                            t.options.onClick();
                                    }),
                                "object" === e(this.options.offset))
                            ) {
                                var l = this._getAxisOffsetAValue(
                                        "x",
                                        this.options
                                    ),
                                    s = this._getAxisOffsetAValue(
                                        "y",
                                        this.options
                                    ),
                                    d =
                                        "left" === this.options.position
                                            ? l
                                            : "-".concat(l),
                                    u =
                                        "toastify-top" === this.options.gravity
                                            ? s
                                            : "-".concat(s);
                                n.style.transform = "translate("
                                    .concat(d, ",")
                                    .concat(u, ")");
                            }
                            return n;
                        },
                    },
                    {
                        key: "_removeElement",
                        value: function (e) {
                            var t = this;
                            (e.className = e.className.replace(" on", "")),
                                window.setTimeout(function () {
                                    t.options.node &&
                                        t.options.node.parentNode &&
                                        t.options.node.parentNode.removeChild(
                                            t.options.node
                                        ),
                                        e.parentNode &&
                                            e.parentNode.removeChild(e),
                                        t.options.callback.call(e),
                                        t._reposition();
                                }, 400);
                        },
                    },
                    {
                        key: "_reposition",
                        value: function () {
                            for (
                                var e,
                                    t = { top: 15, bottom: 15 },
                                    n = { top: 15, bottom: 15 },
                                    a = { top: 15, bottom: 15 },
                                    o =
                                        this._rootElement.querySelectorAll(
                                            ".toastify"
                                        ),
                                    i = 0;
                                i < o.length;
                                i++
                            ) {
                                e =
                                    !0 ===
                                    o[i].classList.contains("toastify-top")
                                        ? "toastify-top"
                                        : "toastify-bottom";
                                var r = o[i].offsetHeight;
                                (e = e.substr(9, e.length - 1)),
                                    (window.innerWidth > 0
                                        ? window.innerWidth
                                        : screen.width) <= 360
                                        ? ((o[i].style[e] = "".concat(
                                              a[e],
                                              "px"
                                          )),
                                          (a[e] += r + 15))
                                        : !0 ===
                                          o[i].classList.contains(
                                              "toastify-left"
                                          )
                                        ? ((o[i].style[e] = "".concat(
                                              t[e],
                                              "px"
                                          )),
                                          (t[e] += r + 15))
                                        : ((o[i].style[e] = "".concat(
                                              n[e],
                                              "px"
                                          )),
                                          (n[e] += r + 15));
                            }
                        },
                    },
                    {
                        key: "_getAxisOffsetAValue",
                        value: function (e, t) {
                            return t.offset[e]
                                ? isNaN(t.offset[e])
                                    ? t.offset[e]
                                    : "".concat(t.offset[e], "px")
                                : "0px";
                        },
                    },
                ]) && t(a.prototype, o),
                i && t(a, i),
                Object.defineProperty(a, "prototype", { writable: !1 }),
                a
            );
            var a, o, i;
        })();
    ((a = document.createElement("style")).textContent =
        "\n        .toastify {\n            padding: 0.75rem 2rem 0.75rem 0.75rem;\n            color: #ffffff;\n            display: flex;\n            align-items: center;\n            gap: 0.5rem;\n            box-shadow:\n                0 3px 6px -1px rgba(0, 0, 0, 0.12),\n                0 10px 36px -4px rgba(77, 96, 232, 0.3);\n            background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);\n            background: linear-gradient(135deg, #73a5ff, #5477f5);\n            position: fixed;\n            opacity: 0;\n            transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n            border-radius: 2px;\n            cursor: pointer;\n            text-decoration: none;\n            z-index: 999999;\n            width: 25rem;\n            max-width: calc(100% - 30px);\n        }\n\n        .toastify.on {\n            opacity: 1;\n        }\n\n        .toastify-icon {\n            width: 1.5rem;\n            height: 1.5rem;\n        }\n\n        .toast-close {\n            background: transparent;\n            border: 0;\n            color: white;\n            cursor: pointer;\n            font-family: inherit;\n            font-size: 1em;\n            opacity: 0.4;\n            padding: 0 5px;\n            position: absolute;\n            top: 0.25rem;\n            inset-inline-end: 0.25rem;\n        }\n\n        .toast-close svg {\n            width: 1em;\n            height: 1em;\n        }\n\n        .toastify-text a {\n            text-decoration: underline;\n            color: #fff;\n        }\n\n        .toastify-right {\n            inset-inline-end: 15px;\n        }\n\n        .toastify-left {\n            inset-inline-start: 15px;\n        }\n\n        .toastify-top {\n            top: -150px;\n        }\n\n        .toastify-bottom {\n            bottom: -150px;\n        }\n\n        .toastify-rounded {\n            border-radius: 25px;\n        }\n\n        .toastify-center {\n            margin-inline-start: auto;\n            margin-inline-end: auto;\n            inset-inline-start: 0;\n            inset-inline-end: 0;\n            max-width: fit-content;\n            max-width: -moz-fit-content;\n        }\n\n        @media only screen and (max-width: 360px) {\n            .toastify-right,\n            .toastify-left {\n                margin-inline-start: auto;\n                margin-inline-end: auto;\n                inset-inline-start: 0;\n                inset-inline-end: 0;\n                max-width: fit-content;\n            }\n        }\n    "),
        document.head.appendChild(a);
    const i = function (e) {
        return new o(e);
    };
    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t &&
                (a = a.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, a);
        }
        return n;
    }
    function c(e) {
        return (
            (c =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e &&
                              "function" == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                      }),
            c(e)
        );
    }
    function l() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ l =
            function () {
                return t;
            };
        var e,
            t = {},
            n = Object.prototype,
            a = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (e, t, n) {
                    e[t] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            r = i.iterator || "@@iterator",
            s = i.asyncIterator || "@@asyncIterator",
            d = i.toStringTag || "@@toStringTag";
        function u(e, t, n) {
            return (
                Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                }),
                e[t]
            );
        }
        try {
            u({}, "");
        } catch (e) {
            u = function (e, t, n) {
                return (e[t] = n);
            };
        }
        function p(e, t, n, a) {
            var i = t && t.prototype instanceof y ? t : y,
                r = Object.create(i.prototype),
                c = new M(a || []);
            return o(r, "_invoke", { value: O(e, n, c) }), r;
        }
        function f(e, t, n) {
            try {
                return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
                return { type: "throw", arg: e };
            }
        }
        t.wrap = p;
        var h = "suspendedStart",
            m = "suspendedYield",
            g = "executing",
            v = "completed",
            b = {};
        function y() {}
        function w() {}
        function k() {}
        var $ = {};
        u($, r, function () {
            return this;
        });
        var x = Object.getPrototypeOf,
            C = x && x(x(N([])));
        C && C !== n && a.call(C, r) && ($ = C);
        var _ = (k.prototype = y.prototype = Object.create($));
        function E(e) {
            ["next", "throw", "return"].forEach(function (t) {
                u(e, t, function (e) {
                    return this._invoke(t, e);
                });
            });
        }
        function T(e, t) {
            function n(o, i, r, l) {
                var s = f(e[o], e, i);
                if ("throw" !== s.type) {
                    var d = s.arg,
                        u = d.value;
                    return u && "object" == c(u) && a.call(u, "__await")
                        ? t.resolve(u.__await).then(
                              function (e) {
                                  n("next", e, r, l);
                              },
                              function (e) {
                                  n("throw", e, r, l);
                              }
                          )
                        : t.resolve(u).then(
                              function (e) {
                                  (d.value = e), r(d);
                              },
                              function (e) {
                                  return n("throw", e, r, l);
                              }
                          );
                }
                l(s.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (e, a) {
                    function o() {
                        return new t(function (t, o) {
                            n(e, a, t, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function O(t, n, a) {
            var o = h;
            return function (i, r) {
                if (o === g) throw Error("Generator is already running");
                if (o === v) {
                    if ("throw" === i) throw r;
                    return { value: e, done: !0 };
                }
                for (a.method = i, a.arg = r; ; ) {
                    var c = a.delegate;
                    if (c) {
                        var l = S(c, a);
                        if (l) {
                            if (l === b) continue;
                            return l;
                        }
                    }
                    if ("next" === a.method) a.sent = a._sent = a.arg;
                    else if ("throw" === a.method) {
                        if (o === h) throw ((o = v), a.arg);
                        a.dispatchException(a.arg);
                    } else "return" === a.method && a.abrupt("return", a.arg);
                    o = g;
                    var s = f(t, n, a);
                    if ("normal" === s.type) {
                        if (((o = a.done ? v : m), s.arg === b)) continue;
                        return { value: s.arg, done: a.done };
                    }
                    "throw" === s.type &&
                        ((o = v), (a.method = "throw"), (a.arg = s.arg));
                }
            };
        }
        function S(t, n) {
            var a = n.method,
                o = t.iterator[a];
            if (o === e)
                return (
                    (n.delegate = null),
                    ("throw" === a &&
                        t.iterator.return &&
                        ((n.method = "return"),
                        (n.arg = e),
                        S(t, n),
                        "throw" === n.method)) ||
                        ("return" !== a &&
                            ((n.method = "throw"),
                            (n.arg = new TypeError(
                                "The iterator does not provide a '" +
                                    a +
                                    "' method"
                            )))),
                    b
                );
            var i = f(o, t.iterator, n.arg);
            if ("throw" === i.type)
                return (
                    (n.method = "throw"),
                    (n.arg = i.arg),
                    (n.delegate = null),
                    b
                );
            var r = i.arg;
            return r
                ? r.done
                    ? ((n[t.resultName] = r.value),
                      (n.next = t.nextLoc),
                      "return" !== n.method &&
                          ((n.method = "next"), (n.arg = e)),
                      (n.delegate = null),
                      b)
                    : r
                : ((n.method = "throw"),
                  (n.arg = new TypeError("iterator result is not an object")),
                  (n.delegate = null),
                  b);
        }
        function j(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
                2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                this.tryEntries.push(t);
        }
        function L(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function M(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
                e.forEach(j, this),
                this.reset(!0);
        }
        function N(t) {
            if (t || "" === t) {
                var n = t[r];
                if (n) return n.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < t.length; )
                                if (a.call(t, o))
                                    return (n.value = t[o]), (n.done = !1), n;
                            return (n.value = e), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError(c(t) + " is not iterable");
        }
        return (
            (w.prototype = k),
            o(_, "constructor", { value: k, configurable: !0 }),
            o(k, "constructor", { value: w, configurable: !0 }),
            (w.displayName = u(k, d, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return (
                    !!t &&
                    (t === w ||
                        "GeneratorFunction" === (t.displayName || t.name))
                );
            }),
            (t.mark = function (e) {
                return (
                    Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, k)
                        : ((e.__proto__ = k), u(e, d, "GeneratorFunction")),
                    (e.prototype = Object.create(_)),
                    e
                );
            }),
            (t.awrap = function (e) {
                return { __await: e };
            }),
            E(T.prototype),
            u(T.prototype, s, function () {
                return this;
            }),
            (t.AsyncIterator = T),
            (t.async = function (e, n, a, o, i) {
                void 0 === i && (i = Promise);
                var r = new T(p(e, n, a, o), i);
                return t.isGeneratorFunction(n)
                    ? r
                    : r.next().then(function (e) {
                          return e.done ? e.value : r.next();
                      });
            }),
            E(_),
            u(_, d, "Generator"),
            u(_, r, function () {
                return this;
            }),
            u(_, "toString", function () {
                return "[object Generator]";
            }),
            (t.keys = function (e) {
                var t = Object(e),
                    n = [];
                for (var a in t) n.push(a);
                return (
                    n.reverse(),
                    function e() {
                        for (; n.length; ) {
                            var a = n.pop();
                            if (a in t) return (e.value = a), (e.done = !1), e;
                        }
                        return (e.done = !0), e;
                    }
                );
            }),
            (t.values = N),
            (M.prototype = {
                constructor: M,
                reset: function (t) {
                    if (
                        ((this.prev = 0),
                        (this.next = 0),
                        (this.sent = this._sent = e),
                        (this.done = !1),
                        (this.delegate = null),
                        (this.method = "next"),
                        (this.arg = e),
                        this.tryEntries.forEach(L),
                        !t)
                    )
                        for (var n in this)
                            "t" === n.charAt(0) &&
                                a.call(this, n) &&
                                !isNaN(+n.slice(1)) &&
                                (this[n] = e);
                },
                stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                },
                dispatchException: function (t) {
                    if (this.done) throw t;
                    var n = this;
                    function o(a, o) {
                        return (
                            (c.type = "throw"),
                            (c.arg = t),
                            (n.next = a),
                            o && ((n.method = "next"), (n.arg = e)),
                            !!o
                        );
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var r = this.tryEntries[i],
                            c = r.completion;
                        if ("root" === r.tryLoc) return o("end");
                        if (r.tryLoc <= this.prev) {
                            var l = a.call(r, "catchLoc"),
                                s = a.call(r, "finallyLoc");
                            if (l && s) {
                                if (this.prev < r.catchLoc)
                                    return o(r.catchLoc, !0);
                                if (this.prev < r.finallyLoc)
                                    return o(r.finallyLoc);
                            } else if (l) {
                                if (this.prev < r.catchLoc)
                                    return o(r.catchLoc, !0);
                            } else {
                                if (!s)
                                    throw Error(
                                        "try statement without catch or finally"
                                    );
                                if (this.prev < r.finallyLoc)
                                    return o(r.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (
                            o.tryLoc <= this.prev &&
                            a.call(o, "finallyLoc") &&
                            this.prev < o.finallyLoc
                        ) {
                            var i = o;
                            break;
                        }
                    }
                    i &&
                        ("break" === e || "continue" === e) &&
                        i.tryLoc <= t &&
                        t <= i.finallyLoc &&
                        (i = null);
                    var r = i ? i.completion : {};
                    return (
                        (r.type = e),
                        (r.arg = t),
                        i
                            ? ((this.method = "next"),
                              (this.next = i.finallyLoc),
                              b)
                            : this.complete(r)
                    );
                },
                complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return (
                        "break" === e.type || "continue" === e.type
                            ? (this.next = e.arg)
                            : "return" === e.type
                            ? ((this.rval = this.arg = e.arg),
                              (this.method = "return"),
                              (this.next = "end"))
                            : "normal" === e.type && t && (this.next = t),
                        b
                    );
                },
                finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e)
                            return (
                                this.complete(n.completion, n.afterLoc), L(n), b
                            );
                    }
                },
                catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var a = n.completion;
                            if ("throw" === a.type) {
                                var o = a.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (t, n, a) {
                    return (
                        (this.delegate = {
                            iterator: N(t),
                            resultName: n,
                            nextLoc: a,
                        }),
                        "next" === this.method && (this.arg = e),
                        b
                    );
                },
            }),
            t
        );
    }
    function s(e, t, n, a, o, i, r) {
        try {
            var c = e[i](r),
                l = c.value;
        } catch (e) {
            return void n(e);
        }
        c.done ? t(l) : Promise.resolve(l).then(a, o);
    }
    function d(e) {
        return function () {
            var t = this,
                n = arguments;
            return new Promise(function (a, o) {
                var i = e.apply(t, n);
                function r(e) {
                    s(i, a, o, r, c, "next", e);
                }
                function c(e) {
                    s(i, a, o, r, c, "throw", e);
                }
                r(void 0);
            });
        };
    }
    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, f(a.key), a);
        }
    }
    function p(e, t, n) {
        return (
            (t = f(t)) in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (e[t] = n),
            e
        );
    }
    function f(e) {
        var t = (function (e, t) {
            if ("object" != c(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var a = n.call(e, t || "default");
                if ("object" != c(a)) return a;
                throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                );
            }
            return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == c(t) ? t : t + "";
    }
    var h = (function () {
        function e() {
            !(function (e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            })(this, e),
                this.initGlobalModal(),
                this.countCharacter(),
                this.manageSidebar(),
                this.handleWayPoint(),
                this.handleTurnOffDebugMode(),
                e.initNavbarMinimal(),
                e.initResources(),
                e.initGlobalResources(),
                e.handleCounterUp(),
                e.initMediaIntegrate(),
                    this.processAuthorize(),
                this.countMenuItemNotifications();
        }
        return (
            (t = e),
            (n = [
                {
                    key: "initGlobalModal",
                    value: function () {
                        $(function () {
                            $('[data-bb-toggle="modal"]').on(
                                "click",
                                function (e) {
                                    e.preventDefault();
                                    var t = $(e.currentTarget),
                                        n = t.data("type"),
                                        a = t.data("actionModal"),
                                        o = JSON.parse(t.data("payload")),
                                        i = t.data("url"),
                                        r = t.data("method"),
                                        c = t.data("confirmText"),
                                        l = t.data("cancelText"),
                                        s = "global-".concat(n, "-modal"),
                                        d = $("#" + s),
                                        u = t
                                            .find(".modal-replace-title")
                                            .html(),
                                        p = t
                                            .find(".modal-replace-description")
                                            .html();
                                    if (
                                        (d.find(".mb-2 i").siblings().remove(),
                                        d.find(".mb-2").append(u),
                                        d.find(".mb-2").append(p),
                                        a)
                                    ) {
                                        var f =
                                            "\n                    <div class='modal-footer'>\n                        <div class='w-100'>\n                            <div class='row'>\n                                <div class='col'>\n                                    <button type='button' class='w-100 btn' data-bs-dismiss='modal'>"
                                                .concat(
                                                    l,
                                                    "</button>\n                                </div>\n                                <div class='col'>\n                                    <button type='button' class='w-100 btn btn-"
                                                )
                                                .concat(
                                                    n,
                                                    " confirm-trigger-single-action-button'>"
                                                )
                                                .concat(
                                                    c,
                                                    "</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    "
                                                );
                                        d
                                            .find(".modal-body")
                                            .siblings()
                                            .remove(),
                                            d.find(".modal-body").after(f),
                                            d
                                                .find(
                                                    ".confirm-trigger-single-action-button"
                                                )
                                                .on("click", function () {
                                                    $.ajax({
                                                        type: r,
                                                        url: i,
                                                        data: o,
                                                        success: function (
                                                            e
                                                        ) {},
                                                        error: function (e) {},
                                                        complete: function () {
                                                            return d.modal(
                                                                "hide"
                                                            );
                                                        },
                                                    });
                                                });
                                    } else d.find(".modal-footer").remove();
                                    d.modal("show");
                                }
                            );
                        });
                    },
                },
                {
                    key: "countCharacter",
                    value: function () {
                        ($.fn.charCounter = function (e, t) {
                            var n, a;
                            (e = e || 100),
                                (t = $.extend(
                                    {
                                        container: "<span></span>",
                                        classname: "charcounter",
                                        format: "(%1/%2)",
                                        pulse: !0,
                                        delay: 0,
                                        allowOverLimit: !1,
                                    },
                                    t
                                ));
                            var o = function (o, r) {
                                    var c = (o = $(o)).val().length,
                                        l = e - o.val().length;
                                    r.html(
                                        t.format
                                            .replace(/%1/, c)
                                            .replace(/%2/, e)
                                    ),
                                        r.toggleClass(
                                            "text-danger",
                                            o.val().length > e
                                        ),
                                        !t.allowOverLimit &&
                                            o.val().length > e &&
                                            (o.val(o.val().substring(0, e)),
                                            t.pulse && !n && i(r, !0)),
                                        t.delay > 0 &&
                                            (a && window.clearTimeout(a),
                                            (a = window.setTimeout(function () {
                                                r.html(
                                                    t.format
                                                        .replace(/%1/, l)
                                                        .replace(/%2/, e)
                                                );
                                            }, t.delay)));
                                },
                                i = function e(t, a) {
                                    n && (window.clearTimeout(n), (n = null)),
                                        t.animate(
                                            { opacity: 0.1 },
                                            100,
                                            function () {
                                                $(t).animate(
                                                    { opacity: 1 },
                                                    100
                                                );
                                            }
                                        ),
                                        a &&
                                            (n = window.setTimeout(function () {
                                                return e(t);
                                            }, 200));
                                };
                            return this.each(function (e, n) {
                                var a;
                                t.container.match(/^<.+>$/)
                                    ? ($(n)
                                          .nextAll("." + t.classname)
                                          .remove(),
                                      (a = $(t.container)
                                          .insertAfter(n)
                                          .addClass(t.classname)))
                                    : (a = $(t.container)),
                                    $(n)
                                        .off(".charCounter")
                                        .on("keydown.charCounter", function () {
                                            o(n, a);
                                        })
                                        .on(
                                            "keypress.charCounter",
                                            function () {
                                                o(n, a);
                                            }
                                        )
                                        .on("keyup.charCounter", function () {
                                            o(n, a);
                                        })
                                        .on("focus.charCounter", function () {
                                            o(n, a);
                                        })
                                        .on(
                                            "mouseover.charCounter",
                                            function () {
                                                o(n, a);
                                            }
                                        )
                                        .on(
                                            "mouseout.charCounter",
                                            function () {
                                                o(n, a);
                                            }
                                        )
                                        .on("paste.charCounter", function () {
                                            setTimeout(function () {
                                                o(n, a);
                                            }, 10);
                                        }),
                                    n.addEventListener &&
                                        n.addEventListener(
                                            "input",
                                            function () {
                                                o(n, a);
                                            },
                                            !1
                                        ),
                                    o(n, a);
                            });
                        }),
                            $(document).on(
                                "click",
                                "input[data-counter], textarea[data-counter]",
                                function (e) {
                                    var t = $(e.currentTarget);
                                    $(e.currentTarget).charCounter(
                                        t.data("counter"),
                                        {
                                            container: "<small></small>",
                                            allowOverLimit:
                                                "" ==
                                                t.data("allow-over-limit"),
                                        }
                                    );
                                }
                            );
                    },
                },
                {
                    key: "manageSidebar",
                    value: function () {
                        var e = $("body"),
                            t = $(".navigation"),
                            n = $(".sidebar-content");
                        t.find("li.active").parents("li").addClass("active"),
                            t
                                .find("li")
                                .has("ul")
                                .children("a")
                                .parent("li")
                                .addClass("has-ul"),
                            $(document).on(
                                "click",
                                ".sidebar-toggle.d-none",
                                function (a) {
                                    a.preventDefault(),
                                        e.toggleClass("sidebar-narrow"),
                                        e.toggleClass("page-sidebar-closed"),
                                        e.hasClass("sidebar-narrow")
                                            ? (t
                                                  .children("li")
                                                  .children("ul")
                                                  .css("display", ""),
                                              n.delay().queue(function () {
                                                  $(a.currentTarget)
                                                      .show()
                                                      .addClass(
                                                          "animated fadeIn"
                                                      )
                                                      .clearQueue();
                                              }))
                                            : (t
                                                  .children("li")
                                                  .children("ul")
                                                  .hide(),
                                              t
                                                  .children("li.active")
                                                  .children("ul")
                                                  .show(),
                                              n.delay().queue(function () {
                                                  $(a.currentTarget)
                                                      .show()
                                                      .addClass(
                                                          "animated fadeIn"
                                                      )
                                                      .clearQueue();
                                              }));
                                }
                            );
                    },
                },
                {
                    key: "handleWayPoint",
                    value: function () {
                        $(document)
                            .find("[data-bb-waypoint]")
                            .each(function () {
                                var e = $($(this).data("bb-target"));
                                new Waypoint({
                                    element: $(this),
                                    handler: function (t) {
                                        "down" === t ? e.show() : e.hide();
                                    },
                                });
                            });
                    },
                },
                {
                    key: "handleTurnOffDebugMode",
                    value: function () {
                        var t = $(document).find(
                            "#debug-mode-turn-off-confirmation-modal"
                        );
                        if (t.length) {
                            var n = t.find("#debug-mode-turn-off-form-submit");
                            n.length &&
                                n.on("click", function (a) {
                                    a.preventDefault(),
                                        e.showButtonLoading(n[0]),
                                        $httpClient
                                            .make()
                                            .post(n.data("url"))
                                            .then(function (n) {
                                                var a = n.data;
                                                e.showSuccess(a.message),
                                                    t.modal("hide"),
                                                    setTimeout(function () {
                                                        window.location.reload();
                                                    }, 1e3);
                                            })
                                            .finally(function () {
                                                e.hideButtonLoading(n[0]);
                                            });
                                });
                        }
                    },
                },
                {
                    key: "processAuthorize",
                    value: function () {
                        const request = $httpClient.makeWithoutErrorHandler();
                        if (request && typeof request.catch === 'function') {
                            request.catch(function () {});
                        } else {
                            // Wrap the result in a promise if it does not return a promise
                            Promise.resolve(request).catch(function () {});
                        }
                    },
                },
                {
                    key: "countMenuItemNotifications",
                    value: function () {
                        var e = $(".menu-item-count");
                        e.length &&
                            $httpClient
                                .make()
                                .then(function (e) {
                                    e.data.data.map(function (e) {
                                        e.value > 0 &&
                                            $(".menu-item-count.".concat(e.key))
                                                .text(e.value)
                                                .show()
                                                .removeClass("hidden");
                                    });
                                });
                    },
                },
            ]),
            (a = [
                {
                    key: "initCoreIcon",
                    value: function () {
                        var t = $(document).find("[data-bb-core-icon]"),
                            n = function (e) {
                                var t = e.id,
                                    n = e.text;
                                return (
                                    void 0 === t && (t = ""),
                                    $(
                                        '<span><span class="dropdown-item-indicator">'
                                            .concat(n, "</span> ")
                                            .concat(t, "</span>")
                                    )
                                );
                            };
                        e.select(
                            t,
                            {
                                ajax: {
                                    url: t.data("url"),
                                    delay: 250,
                                    cache: !0,
                                    data: function (e) {
                                        return { q: e.term, page: e.page || 1 };
                                    },
                                    processResults: function (e) {
                                        var t = e.data;
                                        return {
                                            results: $.map(
                                                t.data,
                                                function (e, t) {
                                                    return { text: e, id: t };
                                                }
                                            ),
                                            pagination: {
                                                more:
                                                    t.next_page_url &&
                                                    Object.keys(t.data).length >
                                                        0,
                                            },
                                        };
                                    },
                                },
                                placeholder: t.data("placeholder"),
                                templateResult: n,
                                templateSelection: n,
                            },
                            !0
                        );
                    },
                },
                {
                    key: "blockUI",
                    value: function (t) {
                        (t = t || {}), e.showLoading(t.target);
                    },
                },
                {
                    key: "unblockUI",
                    value: function (t) {
                        e.hideLoading(t);
                    },
                },
                {
                    key: "showNotice",
                    value: function (t, n) {
                        var a =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : "",
                            o = "notices_msg.".concat(t, ".").concat(n),
                            r = "",
                            c = "";
                        e.noticesTimeout[o] &&
                            clearTimeout(e.noticesTimeout[o]),
                            (e.noticesTimeout[o] = setTimeout(function () {
                                if (!a)
                                    switch (t) {
                                        case "error":
                                            break;
                                        case "success":
                                    }
                                switch (t) {
                                    case "error":
                                        (r = "#f44336"),
                                            (c =
                                                '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 9v4" /><path d="M12 16v.01" /></svg>');
                                        break;
                                    case "success":
                                        (r = "#4caf50"),
                                            (c =
                                                '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>');
                                }
                                i({
                                    text: n,
                                    duration: 5e3,
                                    close: !0,
                                    gravity: "bottom",
                                    position: "right",
                                    stopOnFocus: !0,
                                    escapeMarkup: !1,
                                    icon: c,
                                    style: { background: r },
                                }).showToast();
                            }, e.noticesTimeoutCount));
                    },
                },
                {
                    key: "showError",
                    value: function (e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "";
                        this.showNotice("error", e, t);
                    },
                },
                {
                    key: "showSuccess",
                    value: function (e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "";
                        this.showNotice("success", e, t);
                    },
                },
                {
                    key: "handleError",
                    value: function (t) {
                        void 0 === t.errors || _.isArray(t.errors)
                            ? void 0 !== t.responseJSON
                                ? void 0 !== t.responseJSON.errors
                                    ? 422 === t.status &&
                                      e.handleValidationError(
                                          t.responseJSON.errors
                                      )
                                    : void 0 !== t.responseJSON.message
                                    ? e.showError(t.responseJSON.message)
                                    : $.each(t.responseJSON, function (t, n) {
                                          $.each(n, function (t, n) {
                                              e.showError(n);
                                          });
                                      })
                                : e.showError(t.statusText)
                            : e.handleValidationError(t.errors);
                    },
                },
                {
                    key: "handleValidationError",
                    value: function (t) {
                        var n = "";
                        $.each(t, function (e, t) {
                            n += t + "\n";
                        }),
                            e.showError(n);
                    },
                },
                {
                    key: "callScroll",
                    value: function (e) {
                        e.mCustomScrollbar({
                            theme: "dark",
                            scrollInertia: 0,
                            callbacks: {
                                whileScrolling: function () {
                                    e.find(".tableFloatingHeaderOriginal").css({
                                        top: -this.mcs.top + "px",
                                    });
                                },
                            },
                        }),
                            e.stickyTableHeaders({
                                scrollableArea: e,
                                fixedOffset: 2,
                            });
                    },
                },
                {
                    key: "copyToClipboard",
                    value:
                        ((o = d(
                            l().mark(function t(n, a) {
                                return l().wrap(function (t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                if (
                                                    !navigator.clipboard ||
                                                    !window.isSecureContext
                                                ) {
                                                    t.next = 5;
                                                    break;
                                                }
                                                return (
                                                    (t.next = 3),
                                                    navigator.clipboard.writeText(
                                                        n
                                                    )
                                                );
                                            case 3:
                                                t.next = 6;
                                                break;
                                            case 5:
                                                e.unsecuredCopyToClipboard(
                                                    n,
                                                    a
                                                );
                                            case 6:
                                            case "end":
                                                return t.stop();
                                        }
                                }, t);
                            })
                        )),
                        function (e, t) {
                            return o.apply(this, arguments);
                        }),
                },
                {
                    key: "unsecuredCopyToClipboard",
                    value: function (e, t) {
                        t = t || document.body;
                        var n = document.createElement("textarea");
                        (n.value = e),
                            (n.style.position = "absolute"),
                            (n.style.left = "-999999px"),
                            t.append(n),
                            n.select();
                        try {
                            document.execCommand("copy");
                        } catch (e) {
                            console.error("Unable to copy to clipboard", e);
                        }
                        t.removeChild(n);
                    },
                },
                {
                    key: "initNavbarMinimal",
                    value: function () {
                        $(document).on(
                            "click",
                            '[data-bb-toggle="navbar-minimal"]',
                            function (e) {
                                var t = $(e.currentTarget),
                                    n = $(t.data("bb-target"));
                                n.length > 0 &&
                                    (n.toggleClass("navbar-minimal"),
                                    $httpClient
                                        .makeWithoutErrorHandler()
                                        .post(t.data("url"), {
                                            _method: t.data("method"),
                                            minimal_sidebar: n.hasClass(
                                                "navbar-minimal"
                                            )
                                                ? "yes"
                                                : "no",
                                        })
                                        .then(function () {})
                                        .catch(function () {}));
                            }
                        );
                    },
                },
                {
                    key: "initDatePicker",
                    value: function (e) {
                        if (jQuery().flatpickr) {
                            var t = $(document).find(e),
                                n = t.find("input"),
                                a = n.data("date-format");
                            a || (a = "Y-m-d");
                            var o = window.siteEditorLocale;
                            "vi" === o && (o = "vn");
                            var i = {
                                dateFormat: a,
                                wrap: !0,
                                locale: o || "en",
                            };
                            n.data("options") &&
                                (i = Object.assign(i, n.data("options"))),
                                t.flatpickr(i);
                        }
                    },
                },
                {
                    key: "initResources",
                    value: function () {
                        $(document).on(
                            "click",
                            '[data-bb-toggle="check-all"]',
                            function (e) {
                                var t = $(e.currentTarget),
                                    n = $(t.data("bb-target"));
                                t.prop("checked")
                                    ? (n.prop("checked", !0),
                                      t.prop("checked", !1))
                                    : (n.prop("checked", !1),
                                      t.prop("checked", !0));
                            }
                        ),
                            $(document)
                                .find('[data-bb-toggle="check-all"]')
                                .each(function (e, t) {
                                    var n = $(document).find(
                                            $(t).attr("data-target")
                                        ),
                                        a = $(t).find("input[type=checkbox]");
                                    n.length === n.filter(":checked").length
                                        ? (a.prop("indeterminate", !1),
                                          a.prop("checked", !0))
                                        : a.prop("indeterminate", !0);
                                }),
                            $(document)
                                .find('[data-bb-toggle="check-all"]')
                                .each(function (e, t) {
                                    $(document).on(
                                        "click",
                                        $(t).attr("data-target"),
                                        function () {
                                            var e = $(document).find(
                                                    $(t).attr("data-target")
                                                ),
                                                n = $(t).find(
                                                    "input[type=checkbox]"
                                                );
                                            e.length ===
                                            e.filter(":checked").length
                                                ? (n.prop("indeterminate", !1),
                                                  n.prop("checked", !0))
                                                : n.prop("indeterminate", !0);
                                        }
                                    );
                                }),
                            $(document).on(
                                "change",
                                ".check-all",
                                function (e) {
                                    var t = $(e.currentTarget),
                                        n = t.attr("data-set"),
                                        a = t.find("input").prop("checked");
                                    $(n).each(function (e, t) {
                                        a
                                            ? $(t).prop("checked", !0)
                                            : $(t).prop("checked", !1);
                                    });
                                }
                            ),
                            $(document)
                                .find(".check-all")
                                .each(function (e, t) {
                                    $(document).on(
                                        "click",
                                        $(t).attr("data-set"),
                                        function () {
                                            var e = $(document).find(
                                                    $(t).attr("data-set")
                                                ),
                                                n = $(t).find(
                                                    "input[type=checkbox]"
                                                );
                                            e.length ===
                                            e.filter(":checked").length
                                                ? (n.prop("indeterminate", !1),
                                                  n.prop("checked", !0))
                                                : n.prop("indeterminate", !0);
                                        }
                                    );
                                }),
                            $(document)
                                .find(".check-all")
                                .each(function (e, t) {
                                    var n = $(document).find(
                                            $(t).attr("data-set")
                                        ),
                                        a = $(t).find("input[type=checkbox]");
                                    n.length === n.filter(":checked").length
                                        ? (a.prop("indeterminate", !1),
                                          a.prop("checked", !0))
                                        : a.prop("indeterminate", !0);
                                }),
                            $.each(
                                $(document).find("select.select-search-full"),
                                function (t, n) {
                                    e.select(n);
                                }
                            ),
                            $.each(
                                $(document).find("select.select-full"),
                                function (t, n) {
                                    e.select(n, { controlInput: null });
                                }
                            ),
                            $(document)
                                .find("select.select-autocomplete")
                                .each(function (t, n) {
                                    e.select(n, {
                                        minimumInputLength:
                                            $(n).data("minimum-input") || 1,
                                        width: "100%",
                                        delay: 250,
                                        ajax: {
                                            url: $(n).data("url"),
                                            data: function (e) {
                                                return {
                                                    q: e.term,
                                                    page: e.page || 1,
                                                };
                                            },
                                            dataType: "json",
                                            type: $(n).data("type") || "GET",
                                            processResults: function (e) {
                                                return {
                                                    results: $.map(
                                                        e.data,
                                                        function (e) {
                                                            return Object.assign(
                                                                {
                                                                    text: e.name,
                                                                    id: e.id,
                                                                },
                                                                e
                                                            );
                                                        }
                                                    ),
                                                    pagination: {
                                                        more: e.links
                                                            ? e.links.next
                                                            : null,
                                                    },
                                                };
                                            },
                                            cache: !0,
                                        },
                                    });
                                }),
                            $.each(
                                $(document).find(".select-multiple"),
                                function (t, n) {
                                    var a = $(n);
                                    e.select(n, {
                                        allowClear: a.data("allow-clear"),
                                        placeholder: a.data("placeholder"),
                                    }),
                                        $(this).hasClass(".select-sorting") &&
                                            $(this).on(
                                                "select2:select",
                                                function (e) {
                                                    var t = $(
                                                        e.params.data.element
                                                    );
                                                    t.detach(),
                                                        $(this).append(t),
                                                        $(this).trigger(
                                                            "change"
                                                        );
                                                }
                                            );
                                }
                            ),
                            $.each(
                                $(document).find(".select-search-ajax"),
                                function (t, n) {
                                    var a = $(n);
                                    if (a.data("url")) {
                                        var o = {
                                            placeholder:
                                                a.data("placeholder") ||
                                                "--Select--",
                                            minimumInputLength:
                                                a.data("minimum-input") || 1,
                                            width: "100%",
                                            delay: 250,
                                            ajax: {
                                                url: a.data("url"),
                                                dataType: "json",
                                                type: a.data("type") || "GET",
                                                quietMillis: 50,
                                                data: function (e) {
                                                    return {
                                                        search: e.term,
                                                        page: e.page || 1,
                                                    };
                                                },
                                                processResults: function (e) {
                                                    var t = Array.isArray(
                                                        e.data
                                                    )
                                                        ? e.data
                                                        : e.data.data;
                                                    return {
                                                        results: $.map(
                                                            t,
                                                            function (e) {
                                                                return {
                                                                    text: e.name,
                                                                    id: e.id,
                                                                };
                                                            }
                                                        ),
                                                        pagination: {
                                                            more: e.links
                                                                ? e.links.next
                                                                : null,
                                                        },
                                                    };
                                                },
                                                cache: !0,
                                            },
                                            allowClear: !0,
                                        };
                                        e.select(n, o);
                                        var i = a.data("selected");
                                        void 0 !== i &&
                                            Object.keys(i).length > 0 &&
                                            Object.keys(i).forEach(function (
                                                e
                                            ) {
                                                var t = new Option(
                                                    i[e],
                                                    e,
                                                    !0,
                                                    !0
                                                );
                                                a.append(t).trigger("change");
                                            });
                                    }
                                }
                            ),
                            $(document)
                                .find('[data-bb-toggle="google-font-selector"]')
                                .each(function (t, n) {
                                    if (
                                        !$(n).hasClass(
                                            "select2-hidden-accessible"
                                        )
                                    ) {
                                        var a = {
                                            templateResult: function (e) {
                                                return e.id
                                                    ? $(
                                                          "<span style=\"font-family:'" +
                                                              e.id +
                                                              "';\"> " +
                                                              e.text +
                                                              "</span>"
                                                      )
                                                    : e.text;
                                            },
                                            width: "100%",
                                        };
                                        e.select(n, a);
                                    }
                                }),
                            jQuery().timepicker &&
                                ($(".timepicker-default").timepicker({
                                    autoclose: !0,
                                    showSeconds: !1,
                                    minuteStep: 1,
                                    defaultTime: !1,
                                }),
                                $(".timepicker-24").timepicker({
                                    autoclose: !0,
                                    minuteStep: 5,
                                    showSeconds: !1,
                                    showMeridian: !1,
                                    defaultTime: !1,
                                    icons: {
                                        up: "icon ti ti-chevron-up",
                                        down: "icon ti ti-chevron-down",
                                    },
                                })),
                            jQuery().inputmask &&
                                $.each(
                                    $(document).find(".input-mask-number"),
                                    function (e, t) {
                                        var n, a, o, i;
                                        $(t).inputmask({
                                            alias: "numeric",
                                            rightAlign: !1,
                                            digits:
                                                null !==
                                                    (n = $(t).data("digits")) &&
                                                void 0 !== n
                                                    ? n
                                                    : 5,
                                            groupSeparator:
                                                null !==
                                                    (a = $(t).data(
                                                        "thousands-separator"
                                                    )) && void 0 !== a
                                                    ? a
                                                    : ",",
                                            radixPoint:
                                                null !==
                                                    (o =
                                                        $(t).data(
                                                            "decimal-separator"
                                                        )) && void 0 !== o
                                                    ? o
                                                    : ".",
                                            digitsOptional: !0,
                                            placeholder:
                                                null !==
                                                    (i =
                                                        $(t).data(
                                                            "placeholder"
                                                        )) && void 0 !== i
                                                    ? i
                                                    : "0",
                                            autoGroup: !0,
                                            autoUnmask: !0,
                                            removeMaskOnSubmit: !0,
                                        });
                                    }
                                ),
                            jQuery().colorpicker &&
                                $.each(
                                    $(document).find(".color-picker"),
                                    function (e, t) {
                                        $(t)
                                            .colorpicker({
                                                popover: !1,
                                                inline: !1,
                                                container: !0,
                                                format: "hex",
                                                extensions: [
                                                    {
                                                        name: "swatches",
                                                        options: {
                                                            colors: {
                                                                tetrad1:
                                                                    "#000000",
                                                                tetrad2:
                                                                    "#000000",
                                                                tetrad3:
                                                                    "#000000",
                                                                tetrad4:
                                                                    "#000000",
                                                            },
                                                            namesAsValues: !1,
                                                        },
                                                    },
                                                ],
                                            })
                                            .on(
                                                "colorpickerChange colorpickerCreate",
                                                function (e) {
                                                    e.color
                                                        .generate("tetrad")
                                                        .forEach(function (
                                                            t,
                                                            n
                                                        ) {
                                                            var a = t.string();
                                                            e.colorpicker.picker
                                                                .find(
                                                                    '.colorpicker-swatch[data-name="tetrad' +
                                                                        (n +
                                                                            1) +
                                                                        '"]'
                                                                )
                                                                .attr(
                                                                    "data-value",
                                                                    a
                                                                )
                                                                .attr(
                                                                    "title",
                                                                    a
                                                                )
                                                                .find("> i")
                                                                .css(
                                                                    "background-color",
                                                                    a
                                                                );
                                                        });
                                                }
                                            );
                                    }
                                ),
                            jQuery().fancybox &&
                                ($(".iframe-btn").fancybox({
                                    width: "900px",
                                    height: "700px",
                                    type: "iframe",
                                    autoScale: !1,
                                    openEffect: "none",
                                    closeEffect: "none",
                                    overlayShow: !0,
                                    overlayOpacity: 0.7,
                                }),
                                $(".fancybox").fancybox({
                                    openEffect: "none",
                                    closeEffect: "none",
                                    overlayShow: !0,
                                    overlayOpacity: 0.7,
                                    helpers: { media: {} },
                                })),
                            jQuery().tooltip &&
                                $('[data-bs-toggle="tooltip"]').tooltip({
                                    placement: "top",
                                    boundary: "window",
                                }),
                            jQuery().areYouSure &&
                                $("form.dirty-check").areYouSure(),
                            $.each(
                                $(document).find(".form-hint"),
                                function (e, t) {
                                    var n;
                                    $(t).html(
                                        (n = $(t).html()).includes("<a ") ||
                                            n.includes("</a>") ||
                                            n.includes(" href=") ||
                                            n.includes('target="_blank"')
                                            ? n
                                            : n.replace(
                                                  /(https?:\/\/[^\s]+)/g,
                                                  function (e) {
                                                      return (
                                                          '<a href="' +
                                                          e +
                                                          '" target="_blank">' +
                                                          e +
                                                          "</a>"
                                                      );
                                                  }
                                              )
                                    );
                                }
                            ),
                            e.initDatePicker(".datepicker"),
                            jQuery().textareaAutoSize &&
                                $(
                                    "textarea.textarea-auto-height"
                                ).textareaAutoSize(),
                            e.initCodeEditorComponent(),
                            e.initColorPicker(),
                            e.initLightbox(),
                            e.initTreeCategoriesSelect(),
                            e.initCoreIcon(),
                            document.dispatchEvent(
                                new CustomEvent("core-init-resources")
                            );
                    },
                },
                {
                    key: "initGlobalResources",
                    value: function () {
                        $(document).on("submit", ".js-base-form", function (e) {
                            $(e.currentTarget)
                                .find("button[type=submit]")
                                .addClass("disabled");
                        }),
                            $(document).on(
                                "change",
                                ".media-image-input",
                                function () {
                                    var e = this;
                                    if (e.files && e.files.length > 0) {
                                        var t = new FileReader();
                                        (t.onload = function (t) {
                                            $(e)
                                                .closest(".image-box")
                                                .find(".preview-image")
                                                .prop("src", t.target.result);
                                        }),
                                            t.readAsDataURL(e.files[0]);
                                    }
                                }
                            ),
                            $(document).on(
                                "click",
                                ".media-select-file",
                                function (e) {
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        $(this)
                                            .closest(".attachment-wrapper")
                                            .find(".media-file-input")
                                            .trigger("click");
                                }
                            ),
                            e.initFieldCollapse(),
                            e.initTreeCheckboxes(),
                            e.initClipboard(),
                            e.initDropdownCheckboxes();
                    },
                },
                {
                    key: "numberFormat",
                    value: function (e, t, n, a) {
                        var o = isFinite(+e) ? +e : 0,
                            i = isFinite(+t) ? Math.abs(t) : 0,
                            r = void 0 === a ? "," : a,
                            c = void 0 === n ? "." : n,
                            l = (
                                i
                                    ? (function (e, t) {
                                          var n = Math.pow(10, t);
                                          return Math.round(e * n) / n;
                                      })(o, i)
                                    : Math.round(o)
                            )
                                .toString()
                                .split(".");
                        return (
                            l[0].length > 3 &&
                                (l[0] = l[0].replace(
                                    /\B(?=(?:\d{3})+(?!\d))/g,
                                    r
                                )),
                            (l[1] || "").length < i &&
                                ((l[1] = l[1] || ""),
                                (l[1] += new Array(i - l[1].length + 1).join(
                                    "0"
                                ))),
                            l.join(c)
                        );
                    },
                },
                {
                    key: "handleCounterUp",
                    value: function () {
                        $().counterUp &&
                            $('[data-counter="counterup"]').counterUp({
                                delay: 10,
                                time: 1e3,
                            });
                    },
                },
                { key: "openMediaUsing", value: function (e) {} },
                { key: "handleOpenMedia", value: function (e) {} },
                {
                    key: "initMediaIntegrate",
                    value: function () {
                        if (jQuery().rvMedia) {
                            e.gallerySelectImageTemplate =
                                "\n            <div class='custom-image-box image-box'>\n                <input type='hidden' name='__name__' value='' class='image-data'>\n                    <div class='preview-image-wrapper w-100'>\n                    <div class='preview-image-inner'>\n                        <img src='"
                                    .concat(
                                        RV_MEDIA_CONFIG.default_image,
                                        "' alt='"
                                    )
                                    .concat(
                                        RV_MEDIA_CONFIG.translations
                                            .preview_image,
                                        '\' class=\'preview-image\'>\n                        <div class=\'image-picker-backdrop\'></div>\n                        <span class=\'image-picker-remove-button\'>\n                            <button data-bb-toggle=\'image-picker-remove\' class=\'btn btn-sm btn-icon\'>\n                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-sm icon-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n                                  <path d="M18 6l-12 12" />\n                                  <path d="M6 6l12 12" />\n                                </svg>\n                            </button>\n                        </span>\n                        <div data-bb-toggle=\'image-picker-edit\' class=\'image-box-actions cursor-pointer\'></div>\n                    </div>\n                </div>\n            </div>'
                                    );
                            var t = $(".btn_gallery");
                            t.length > 0 &&
                                t.each(function () {
                                    var e = $(this);
                                    $(e).rvMedia({
                                        multiple: !1,
                                        filter:
                                            "select-image" ===
                                            $(e).data("action")
                                                ? "image"
                                                : "everything",
                                        view_in: "all_media",
                                        onSelectFiles: function (e, t) {
                                            switch (t.data("action")) {
                                                case "media-insert-ckeditor":
                                                    var n = "";
                                                    $.each(e, function (e, t) {
                                                        var a = t.full_url;
                                                        if (
                                                            "youtube" === t.type
                                                        )
                                                            (a = a.replace(
                                                                "watch?v=",
                                                                "embed/"
                                                            )),
                                                                (n +=
                                                                    '<iframe width="420" height="315" src="' +
                                                                    a +
                                                                    '" frameborder="0" allowfullscreen loading="lazy"></iframe><br />');
                                                        else if (
                                                            "image" === t.type
                                                        ) {
                                                            var o = t.alt
                                                                ? t.alt
                                                                : t.name;
                                                            n +=
                                                                '<img src="' +
                                                                a +
                                                                '" alt="' +
                                                                o +
                                                                '" loading="lazy"/><br />';
                                                        } else
                                                            n +=
                                                                '<a href="' +
                                                                a +
                                                                '">' +
                                                                t.name +
                                                                "</a><br />";
                                                    }),
                                                        window.EDITOR.CKEDITOR[
                                                            t.data("result")
                                                        ].insertHtml(n);
                                                    break;
                                                case "media-insert-tinymce":
                                                    var a = "";
                                                    $.each(e, function (e, t) {
                                                        var n = t.full_url;
                                                        if (
                                                            "youtube" === t.type
                                                        )
                                                            (n = n.replace(
                                                                "watch?v=",
                                                                "embed/"
                                                            )),
                                                                (a +=
                                                                    "<iframe width='420' height='315' src='".concat(
                                                                        n,
                                                                        "' allowfullscreen loading='lazy'></iframe><br />"
                                                                    ));
                                                        else if (
                                                            "image" === t.type
                                                        ) {
                                                            var o = t.alt
                                                                ? t.alt
                                                                : t.name;
                                                            a += "<img src='"
                                                                .concat(
                                                                    n,
                                                                    "' alt='"
                                                                )
                                                                .concat(
                                                                    o,
                                                                    "' loading='lazy'/><br />"
                                                                );
                                                        } else
                                                            a += "<a href='"
                                                                .concat(n, "'>")
                                                                .concat(
                                                                    t.name,
                                                                    "</a><br />"
                                                                );
                                                    }),
                                                        tinymce.activeEditor.execCommand(
                                                            "mceInsertContent",
                                                            !1,
                                                            a
                                                        );
                                                    break;
                                                case "select-image":
                                                    var o = _.first(e),
                                                        i =
                                                            t.closest(
                                                                ".image-box"
                                                            ),
                                                        r =
                                                            t.data(
                                                                "allow-thumb"
                                                            );
                                                    i
                                                        .find(".image-data")
                                                        .val(o.url)
                                                        .trigger("change"),
                                                        i
                                                            .find(
                                                                ".preview-image"
                                                            )
                                                            .attr(
                                                                "src",
                                                                r && o.thumb
                                                                    ? o.thumb
                                                                    : o.full_url
                                                            ),
                                                        i
                                                            .find(
                                                                '[data-bb-toggle="image-picker-remove"]'
                                                            )
                                                            .show(),
                                                        i
                                                            .find(
                                                                ".preview-image"
                                                            )
                                                            .removeClass(
                                                                "default-image"
                                                            ),
                                                        i
                                                            .find(
                                                                ".preview-image-wrapper"
                                                            )
                                                            .show();
                                                    break;
                                                case "attachment":
                                                    var c = _.first(e),
                                                        l = t.closest(
                                                            ".attachment-wrapper"
                                                        );
                                                    l
                                                        .find(".attachment-url")
                                                        .val(c.url),
                                                        l
                                                            .find(
                                                                ".attachment-info"
                                                            )
                                                            .html(
                                                                '\n                                        <a href="'
                                                                    .concat(
                                                                        c.full_url,
                                                                        '" target="_blank" title="'
                                                                    )
                                                                    .concat(
                                                                        c.name,
                                                                        '">'
                                                                    )
                                                                    .concat(
                                                                        c.url,
                                                                        '</a>\n                                        <small class="d-block">'
                                                                    )
                                                                    .concat(
                                                                        c.size,
                                                                        "</small>\n                                    "
                                                                    )
                                                            ),
                                                        l
                                                            .find(
                                                                '[data-bb-toggle="media-file-remove"]'
                                                            )
                                                            .show(),
                                                        l
                                                            .find(
                                                                ".attachment-details"
                                                            )
                                                            .removeClass(
                                                                "hidden"
                                                            );
                                                    break;
                                                default:
                                                    var s = new CustomEvent(
                                                        "core-insert-media",
                                                        {
                                                            detail: {
                                                                files: e,
                                                                element: t,
                                                            },
                                                        }
                                                    );
                                                    document.dispatchEvent(s);
                                            }
                                        },
                                    });
                                });
                            var n = function (t, n) {
                                var a =
                                        arguments.length > 2 &&
                                        void 0 !== arguments[2]
                                            ? arguments[2]
                                            : [],
                                    o = e.gallerySelectImageTemplate,
                                    i = n.data("allow-thumb");
                                _.forEach(t, function (e, t) {
                                    if (!_.includes(a, t)) {
                                        var r = o.replace(
                                                /__name__/gi,
                                                n.data("name")
                                            ),
                                            c = $(
                                                '<div class="col-lg-2 col-md-3 col-4 gallery-image-item-handler mb-2">' +
                                                    r +
                                                    "</div>"
                                            );
                                        c
                                            .find(".image-data")
                                            .val(e.url)
                                            .trigger("change"),
                                            c
                                                .find(".preview-image")
                                                .attr(
                                                    "src",
                                                    i ? e.thumb : e.full_url
                                                )
                                                .show(),
                                            i ||
                                                c
                                                    .find(
                                                        ".preview-image-wrapper"
                                                    )
                                                    .addClass(
                                                        "preview-image-wrapper-not-allow-thumb"
                                                    ),
                                            n.append(c),
                                            $(".list-images")
                                                .find(".footer-action")
                                                .show();
                                    }
                                });
                            };
                            new RvMediaStandAlone(
                                '[data-bb-toggle="gallery-add"]',
                                {
                                    filter: "image",
                                    view_in: "all_media",
                                    onSelectFiles: function (e, t) {
                                        var a = t
                                            .closest(".gallery-images-wrapper")
                                            .find(
                                                ".images-wrapper .list-gallery-media-images"
                                            );
                                        a.removeClass("hidden"),
                                            $(
                                                ".default-placeholder-gallery-image"
                                            ).addClass("hidden"),
                                            n(e, a);
                                    },
                                }
                            ),
                                new RvMediaStandAlone(
                                    '[data-bb-toggle="image-picker-edit"]',
                                    {
                                        filter: "image",
                                        view_in: "all_media",
                                        onSelectFiles: function (e, t) {
                                            var a = _.first(e),
                                                o = t
                                                    .closest(
                                                        ".gallery-image-item-handler"
                                                    )
                                                    .find(".image-box"),
                                                i = t.closest(
                                                    ".list-gallery-media-images"
                                                ),
                                                r = i.data("allow-thumb");
                                            o
                                                .find(".image-data")
                                                .val(a.url)
                                                .trigger("change"),
                                                o
                                                    .find(".preview-image")
                                                    .attr(
                                                        "src",
                                                        r ? a.thumb : a.full_url
                                                    )
                                                    .show(),
                                                n(e, i, [0]);
                                        },
                                    }
                                ),
                                $.each(
                                    $(document).find(
                                        '[data-bb-toggle="image-picker-choose"][data-target="popup"]'
                                    ),
                                    function (e, t) {
                                        $(t).rvMedia({
                                            multiple: !1,
                                            filter: "image",
                                            view_in: "all_media",
                                            onSelectFiles: function (e, t) {
                                                var n = _.first(e),
                                                    a = t.closest(".image-box"),
                                                    o = t.data("allow-thumb");
                                                a
                                                    .find(".image-data")
                                                    .val(n.url)
                                                    .trigger("change"),
                                                    a
                                                        .find(".preview-image")
                                                        .attr(
                                                            "src",
                                                            o && n.thumb
                                                                ? n.thumb
                                                                : n.full_url
                                                        ),
                                                    a
                                                        .find(
                                                            '[data-bb-toggle="image-picker-remove"]'
                                                        )
                                                        .show(),
                                                    a
                                                        .find(".preview-image")
                                                        .removeClass(
                                                            "default-image"
                                                        ),
                                                    a
                                                        .find(
                                                            ".preview-image-wrapper"
                                                        )
                                                        .show();
                                                var i = new CustomEvent(
                                                    "core-insert-media",
                                                    {
                                                        detail: {
                                                            files: e,
                                                            element: t,
                                                        },
                                                    }
                                                );
                                                document.dispatchEvent(i);
                                            },
                                        });
                                    }
                                );
                        }
                        $(document).on(
                            "click",
                            '[data-bb-toggle="image-picker-choose"][data-target="direct"]',
                            function (e) {
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    $(e.currentTarget)
                                        .closest(".image-box")
                                        .find(".media-image-input")
                                        .trigger("click");
                            }
                        ),
                            $(document).on(
                                "show.bs.modal",
                                "#image-picker-add-from-url",
                                function (e) {
                                    var t = $(e.relatedTarget).data(
                                        "bb-target"
                                    );
                                    $(e.currentTarget)
                                        .find('input[name="image-box-target"]')
                                        .val(t);
                                }
                            ),
                            $(document).on(
                                "submit",
                                "#image-picker-add-from-url-form",
                                function (e) {
                                    e.preventDefault();
                                    var t = $(e.currentTarget),
                                        n = t.closest(".modal"),
                                        a = n.find('button[type="submit"]'),
                                        o = t.find('input[name="url"]').val();
                                    if (
                                        t
                                            .find(
                                                "#download_image_to_local_storage"
                                            )
                                            .is(":checked")
                                    )
                                        $httpClient
                                            .make()
                                            .withButtonLoading(a)
                                            .post(t.prop("action"), {
                                                url: o,
                                                folderId: 0,
                                            })
                                            .then(function (e) {
                                                var a = e.data;
                                                t[0].reset(), n.modal("hide");
                                                var o = $(
                                                    t
                                                        .find(
                                                            'input[name="image-box-target"]'
                                                        )
                                                        .val()
                                                );
                                                o
                                                    .find(".image-data")
                                                    .val(a.data.url)
                                                    .trigger("change"),
                                                    o
                                                        .find(".preview-image")
                                                        .prop(
                                                            "src",
                                                            a.data.src
                                                        ),
                                                    o
                                                        .find(
                                                            '[data-bb-toggle="image-picker-remove"]'
                                                        )
                                                        .show(),
                                                    o
                                                        .find(".preview-image")
                                                        .removeClass(
                                                            "default-image"
                                                        ),
                                                    o
                                                        .find(
                                                            ".preview-image-wrapper"
                                                        )
                                                        .show();
                                            });
                                    else {
                                        t[0].reset(), n.modal("hide");
                                        var i = $(
                                            t
                                                .find(
                                                    'input[name="image-box-target"]'
                                                )
                                                .val()
                                        );
                                        i
                                            .find(".image-data")
                                            .val(o)
                                            .trigger("change"),
                                            i
                                                .find(".preview-image")
                                                .prop("src", o),
                                            i
                                                .find(
                                                    '[data-bb-toggle="image-picker-remove"]'
                                                )
                                                .show(),
                                            i
                                                .find(".preview-image")
                                                .removeClass("default-image"),
                                            i
                                                .find(".preview-image-wrapper")
                                                .show();
                                    }
                                }
                            ),
                            $(document).on(
                                "click",
                                '[data-bb-toggle="image-picker-remove"]',
                                function (e) {
                                    e.preventDefault();
                                    var t = $(e.currentTarget),
                                        n = t.closest(".image-box");
                                    n
                                        .find(".preview-image-wrapper img")
                                        .prop(
                                            "src",
                                            n
                                                .find(
                                                    ".preview-image-wrapper img"
                                                )
                                                .data("default")
                                        ),
                                        n
                                            .find(".image-data")
                                            .val("")
                                            .trigger("change"),
                                        n
                                            .find(".preview-image")
                                            .addClass("default-image"),
                                        t.hide();
                                }
                            ),
                            $(document).on(
                                "click",
                                '[data-bb-toggle="media-file-remove"]',
                                function (e) {
                                    e.preventDefault();
                                    var t = $(e.currentTarget),
                                        n = t.closest(".attachment-wrapper");
                                    n
                                        .find(".attachment-details")
                                        .addClass("hidden"),
                                        n.find(".attachment-url").val(""),
                                        t.hide();
                                }
                            ),
                            $(document).on(
                                "click",
                                '[data-bb-toggle="image-picker-remove"]',
                                function (e) {
                                    e.preventDefault();
                                    var t = $(e.currentTarget);
                                    t.tooltip("dispose");
                                    var n = t.closest(
                                        ".list-gallery-media-images"
                                    );
                                    if (
                                        (t
                                            .closest(
                                                ".gallery-image-item-handler"
                                            )
                                            .remove(),
                                        0 ===
                                            n.find(
                                                ".gallery-image-item-handler"
                                            ).length)
                                    ) {
                                        var a = n.closest(".list-images");
                                        a
                                            .find(
                                                ".default-placeholder-gallery-image"
                                            )
                                            .removeClass("hidden"),
                                            a.find(".footer-action").hide();
                                    }
                                }
                            );
                        var a = $(".list-images");
                        a.length &&
                            ($(document).on(
                                "click",
                                '[data-bb-toggle="gallery-reset"]',
                                function (e) {
                                    e.preventDefault(),
                                        a
                                            .find(
                                                ".list-gallery-media-images .gallery-image-item-handler"
                                            )
                                            .remove(),
                                        a
                                            .find(
                                                ".default-placeholder-gallery-image"
                                            )
                                            .removeClass("hidden"),
                                        a.find(".footer-action").hide();
                                }
                            ),
                            a
                                .find(".list-gallery-media-images")
                                .each(function (e, t) {
                                    if (jQuery().sortable) {
                                        var n = $(t);
                                        n.data("ui-sortable") &&
                                            n.sortable("destroy"),
                                            n.sortable();
                                    }
                                }));
                    },
                },
                {
                    key: "getViewPort",
                    value: function () {
                        var e = window,
                            t = "inner";
                        return (
                            "innerWidth" in window ||
                                ((t = "client"),
                                (e =
                                    document.documentElement || document.body)),
                            { width: e[t + "Width"], height: e[t + "Height"] }
                        );
                    },
                },
                {
                    key: "initCodeEditor",
                    value: function (t) {
                        var n =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : "css",
                            a = "object" === c(t),
                            o = a ? $(t) : $(document).find("#" + t);
                        (t = a ? t.id : t),
                            (a ? void 0 !== o : o.length) &&
                                (o.wrap(
                                    "<div id='wrapper_".concat(
                                        t,
                                        "'><div class='container_content_codemirror'></div> </div>"
                                    )
                                ),
                                $("#wrapper_".concat(t)).append(
                                    "<div class='handle-tool-drag' id='tool-drag_".concat(
                                        t,
                                        "'></div>"
                                    )
                                ),
                                CodeMirror.fromTextArea(o[0], {
                                    extraKeys: { "Ctrl-Space": "autocomplete" },
                                    lineNumbers: !0,
                                    mode: n,
                                    autoRefresh: !0,
                                    lineWrapping: !0,
                                }),
                                $(".handle-tool-drag").mousedown(function (t) {
                                    var n = $(t.currentTarget);
                                    n
                                        .attr(
                                            "data-start_h",
                                            n
                                                .parent()
                                                .find(".CodeMirror")
                                                .height()
                                        )
                                        .attr("data-start_y", t.pageY),
                                        $("body")
                                            .attr("data-dragtool", n.attr("id"))
                                            .on("mousemove", e.onDragTool),
                                        $(window).on(
                                            "mouseup",
                                            e.onReleaseTool
                                        );
                                }));
                    },
                },
                {
                    key: "onDragTool",
                    value: function (e) {
                        var t = $("#".concat($("body").attr("data-dragtool"))),
                            n = parseInt(t.attr("data-start_h"));
                        t.parent()
                            .find(".CodeMirror")
                            .css(
                                "height",
                                Math.max(
                                    200,
                                    n + e.pageY - t.attr("data-start_y")
                                )
                            );
                    },
                },
                {
                    key: "onReleaseTool",
                    value: function () {
                        $("body").off("mousemove", e.onDragTool),
                            $(window).off("mouseup", e.onReleaseTool);
                    },
                },
                {
                    key: "initFieldCollapse",
                    value: function () {
                        var e = function (e, t) {
                                return String(e) === String(t);
                            },
                            t = function (t, n) {
                                $("".concat(t, "[data-bb-value]")).each(
                                    function (t, a) {
                                        var o = $(a),
                                            i = (function (e) {
                                                if ("string" == typeof e)
                                                    try {
                                                        return JSON.parse(e);
                                                    } catch (t) {
                                                        return e;
                                                    }
                                                return e;
                                            })(o.data("bb-value"));
                                        (
                                            Array.isArray(i)
                                                ? i.some(function (t) {
                                                      return e(t, n);
                                                  })
                                                : e(i, n)
                                        )
                                            ? o.slideDown()
                                            : o.slideUp();
                                    }
                                );
                            };
                        $(document).on(
                            "click change",
                            '[data-bb-toggle="collapse"]',
                            function (e) {
                                var n = $(e.currentTarget),
                                    a = n.data("bb-target"),
                                    o = e.currentTarget.type;
                                switch (o) {
                                    case "checkbox":
                                        !(function (e, t, n) {
                                            var a = $(e);
                                            t
                                                ? n
                                                    ? a.slideUp()
                                                    : a.slideDown()
                                                : n
                                                ? a.slideDown()
                                                : a.slideUp();
                                        })(
                                            a,
                                            n.data("bb-reverse"),
                                            n.prop("checked")
                                        );
                                        break;
                                    case "radio":
                                    case "select-one":
                                        t(a, n.val());
                                        break;
                                    case "button":
                                        !(function (e) {
                                            var t = $(e);
                                            t.length && t.slideToggle();
                                        })(a);
                                        break;
                                    default:
                                        console.warn(
                                            "[Botble] Unknown type ".concat(
                                                o,
                                                " of collapse"
                                            )
                                        );
                                }
                            }
                        );
                        var n = {};
                        $(document)
                            .find("[data-bb-collapse]")
                            .each(function (e, t) {
                                n[$(t).data("bb-trigger")] = !0;
                            }),
                            Object.keys(n).forEach(function (e) {
                                $(document).on("change", e, function (n) {
                                    var a = $(n.currentTarget),
                                        o = a.val(),
                                        i = '[data-bb-trigger="'.concat(
                                            e,
                                            '"]'
                                        );
                                    $(i).slideUp(),
                                        ("checkbox" !== n.currentTarget.type ||
                                            a.is(":checked")) &&
                                            t(i, o);
                                });
                            });
                    },
                },
                {
                    key: "initTreeCheckboxes",
                    value: function () {
                        var e = function e(t) {
                                var n = $(t)
                                        .closest("ul")
                                        .closest("li")
                                        .find(
                                            "> .form-check > input[type=checkbox]"
                                        ),
                                    a = n.parent().parent();
                                a.find("ul input[type=checkbox]:checked")
                                    .length > 0
                                    ? a.find("ul input[type=checkbox]:checked")
                                          .length ===
                                      a.find("ul input[type=checkbox]").length
                                        ? (n.prop("indeterminate", !1),
                                          n.prop("checked", !0))
                                        : n.prop("indeterminate", !0)
                                    : (n.prop("indeterminate", !1),
                                      n.prop("checked") ||
                                      a.find("ul input[type=checkbox]:checked")
                                          .length > 0
                                          ? n.prop("checked", !0)
                                          : n.prop("checked", !1)),
                                    n.length > 0 && e(n);
                            },
                            t =
                                '[data-bb-toggle="tree-checkboxes"] input[type="checkbox"]';
                        $(document).on("click", t, function () {
                            var e = $(this);
                            e.parent()
                                .parent()
                                .find("ul input[type=checkbox]")
                                .each(function () {
                                    e.prop("checked")
                                        ? $(this).prop("checked", !0)
                                        : ($(this).prop("checked", !1),
                                          $(this).prop("indeterminate", !1));
                                });
                        }),
                            $(document).on("click", t, function () {
                                e(this);
                            }),
                            $(document).ready(function () {
                                $(t).each(function () {
                                    e(this);
                                });
                            });
                    },
                },
                {
                    key: "initCodeEditorComponent",
                    value: function () {
                        $(document)
                            .find("textarea[data-bb-code-editor]")
                            .each(function () {
                                $(this).next().hasClass("CodeMirror") ||
                                    e.initCodeEditor(
                                        this,
                                        this.dataset.mode || "htmlmixed"
                                    );
                            });
                    },
                },
                {
                    key: "showButtonLoading",
                    value: function (e) {
                        var t =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : "start";
                        if (
                            (arguments.length > 1 &&
                                void 0 !== arguments[1] &&
                                !arguments[1]) ||
                            !e
                        ) {
                            var n =
                                    '<span class="spinner-border spinner-border-sm me-2" role="status"></span>',
                                a = $(e).find("svg");
                            a.length && a.addClass("d-none"),
                                "start" === t
                                    ? $(e).prepend(n)
                                    : "end" === t && $(e).append(n);
                        } else
                            $(e).addClass("btn-loading").attr("disabled", !0);
                    },
                },
                {
                    key: "hideButtonLoading",
                    value: function (e) {
                        e &&
                            ($(e).hasClass("btn-loading")
                                ? $(e)
                                      .removeClass("btn-loading")
                                      .removeAttr("disabled")
                                : ($(e).find(".spinner-border").remove(),
                                  $(e).find("svg").removeClass("d-none")));
                    },
                },
                {
                    key: "showLoading",
                    value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : null;
                        e || (e = document.querySelector(".page-wrapper")),
                            $(e).find(".loading-spinner").length ||
                                ($(e).addClass("position-relative"),
                                $(e).append(
                                    '<div class="loading-spinner"></div>'
                                ));
                    },
                },
                {
                    key: "hideLoading",
                    value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : null;
                        e || (e = document.querySelector(".page-wrapper")),
                            $(e).removeClass("position-relative"),
                            $(e).find(".loading-spinner").remove();
                    },
                },
                {
                    key: "select",
                    value: function (e) {
                        var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {},
                            n =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2],
                            a = $(e);
                        if (
                            jQuery().select2 &&
                            (!a.hasClass("select2-hidden-accessible") || n)
                        ) {
                            t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n =
                                        null != arguments[t]
                                            ? arguments[t]
                                            : {};
                                    t % 2
                                        ? r(Object(n), !0).forEach(function (
                                              t
                                          ) {
                                              p(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(
                                                  n
                                              )
                                          )
                                        : r(Object(n)).forEach(function (t) {
                                              Object.defineProperty(
                                                  e,
                                                  t,
                                                  Object.getOwnPropertyDescriptor(
                                                      n,
                                                      t
                                                  )
                                              );
                                          });
                                }
                                return e;
                            })(
                                {
                                    width: "100%",
                                    placeholder: a.data("placeholder") || null,
                                    allowClear: a.data("allow-clear") || !1,
                                },
                                t
                            );
                            var o =
                                a.closest(
                                    "div[data-select2-dropdown-parent]"
                                ) ||
                                a.closest(".modal-content") ||
                                a.closest(".modal");
                            o.length &&
                                ((t.dropdownParent = o), (t.width = "100%")),
                                a.select2(t);
                        }
                    },
                },
                {
                    key: "lightbox",
                    value: function (e) {
                        var t = new FsLightbox();
                        return (
                            Array.isArray(e) &&
                                ((t.props.sources = e), t.open()),
                            t
                        );
                    },
                },
                {
                    key: "initLightbox",
                    value: function () {
                        var t = window.lightboxInstance || {},
                            n = document.querySelectorAll(
                                "a[data-bb-lightbox]"
                            );
                        n.length &&
                            (n.forEach(function (n) {
                                var a = n.dataset.bbLightbox;
                                t[a] || (t[a] = e.lightbox());
                                var o = n.href;
                                t[a].props.sources.push(o),
                                    t[a].elements.a.push(n);
                                var i = t[a].props.sources.length - 1;
                                n.addEventListener("click", function (e) {
                                    e.preventDefault(), t[a].open(i);
                                });
                            }),
                            (window.lightboxInstance = t));
                    },
                },
                {
                    key: "initColorPicker",
                    value: function () {
                        document.querySelector("[data-bb-color-picker]") &&
                            $("[data-bb-color-picker]").each(function (e, t) {
                                var n = $(t),
                                    a = {
                                        allowEmpty: !0,
                                        color: n.val() || "rgb(51, 51, 51)",
                                        showInput: !0,
                                        containerClassName: "full-spectrum",
                                        showInitial: !0,
                                        showSelectionPalette: !1,
                                        showPalette: !0,
                                        showAlpha: !0,
                                        preferredFormat: "hex",
                                        showButtons: !1,
                                        palette: [
                                            [
                                                "rgb(0, 0, 0)",
                                                "rgb(102, 102, 102)",
                                                "rgb(183, 183, 183)",
                                                "rgb(217, 217, 217)",
                                                "rgb(239, 239, 239)",
                                                "rgb(243, 243, 243)",
                                                "rgb(255, 255, 255)",
                                                "rgb(230, 184, 175)",
                                                "rgb(244, 204, 204)",
                                                "rgb(252, 229, 205)",
                                                "rgb(255, 242, 204)",
                                                "rgb(217, 234, 211)",
                                                "rgb(208, 224, 227)",
                                                "rgb(201, 218, 248)",
                                                "rgb(207, 226, 243)",
                                                "rgb(217, 210, 233)",
                                                "rgb(234, 209, 220)",
                                                "rgb(221, 126, 107)",
                                                "rgb(234, 153, 153)",
                                                "rgb(249, 203, 156)",
                                                "rgb(255, 229, 153)",
                                                "rgb(182, 215, 168)",
                                                "rgb(162, 196, 201)",
                                                "rgb(164, 194, 244)",
                                                "rgb(159, 197, 232)",
                                                "rgb(180, 167, 214)",
                                                "rgb(213, 166, 189)",
                                                "rgb(204, 65, 37)",
                                                "rgb(224, 102, 102)",
                                                "rgb(246, 178, 107)",
                                                "rgb(255, 217, 102)",
                                                "rgb(147, 196, 125)",
                                                "rgb(118, 165, 175)",
                                                "rgb(109, 158, 235)",
                                                "rgb(111, 168, 220)",
                                                "rgb(142, 124, 195)",
                                                "rgb(194, 123, 160)",
                                                "rgb(166, 28, 0)",
                                                "rgb(204, 0, 0)",
                                                "rgb(230, 145, 56)",
                                                "rgb(241, 194, 50)",
                                                "rgb(106, 168, 79)",
                                                "rgb(69, 129, 142)",
                                                "rgb(60, 120, 216)",
                                                "rgb(61, 133, 198)",
                                                "rgb(103, 78, 167)",
                                                "rgb(166, 77, 121)",
                                                "rgb(133, 32, 12)",
                                                "rgb(153, 0, 0)",
                                                "rgb(180, 95, 6)",
                                                "rgb(191, 144, 0)",
                                                "rgb(56, 118, 29)",
                                                "rgb(19, 79, 92)",
                                                "rgb(17, 85, 204)",
                                                "rgb(11, 83, 148)",
                                                "rgb(53, 28, 117)",
                                                "rgb(116, 27, 71)",
                                                "rgb(91, 15, 0)",
                                                "rgb(102, 0, 0)",
                                                "rgb(120, 63, 4)",
                                                "rgb(127, 96, 0)",
                                                "rgb(39, 78, 19)",
                                                "rgb(12, 52, 61)",
                                                "rgb(28, 69, 135)",
                                                "rgb(7, 55, 99)",
                                                "rgb(32, 18, 77)",
                                                "rgb(76, 17, 48)",
                                                "rgb(152, 0, 0)",
                                                "rgb(255, 0, 0)",
                                                "rgb(255, 153, 0)",
                                                "rgb(255, 255, 0)",
                                                "rgb(0, 255, 0)",
                                                "rgb(0, 255, 255)",
                                                "rgb(74, 134, 232)",
                                                "rgb(0, 0, 255)",
                                                "rgb(153, 0, 255)",
                                                "rgb(255, 0, 255)",
                                            ],
                                        ],
                                        change: function (e) {
                                            e && n.val(e.toRgbString());
                                        },
                                    },
                                    o = n.closest(".modal");
                                o.length && (a.appendTo = o), n.spectrum(a);
                            });
                    },
                },
                {
                    key: "initClipboard",
                    value: function () {
                        $(document).on(
                            "click",
                            '[data-bb-toggle="clipboard"]',
                            (function () {
                                var t = d(
                                    l().mark(function t(n) {
                                        var a, o, i, r, c, s, d, u, p, f;
                                        return l().wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            n.preventDefault(),
                                                            (a = $(
                                                                n.currentTarget
                                                            )),
                                                            (o =
                                                                a.data(
                                                                    "clipboard-message"
                                                                )),
                                                            (i =
                                                                a.data(
                                                                    "clipboard-action"
                                                                ) || "copy"),
                                                            (r =
                                                                "cut" ===
                                                                i.toLowerCase()),
                                                            (c = a.find(
                                                                "[data-clipboard-icon]"
                                                            )),
                                                            (s = a.find(
                                                                "[data-clipboard-success-icon]"
                                                            )),
                                                            (d =
                                                                a.data(
                                                                    "clipboard-parent"
                                                                )),
                                                            (u = d
                                                                ? document.querySelector(
                                                                      d
                                                                  )
                                                                : void 0),
                                                            (p =
                                                                a.data(
                                                                    "clipboard-text"
                                                                )) ||
                                                                ((f = $(
                                                                    a.data(
                                                                        "clipboard-target"
                                                                    )
                                                                )).length > 0 &&
                                                                    ((p =
                                                                        f.val()),
                                                                    r &&
                                                                        f.val(
                                                                            ""
                                                                        ))),
                                                            (t.next = 13),
                                                            e.copyToClipboard(
                                                                p,
                                                                u
                                                            )
                                                        );
                                                    case 13:
                                                        o && e.showSuccess(o),
                                                            c.addClass(
                                                                "d-none"
                                                            ),
                                                            s.removeClass(
                                                                "d-none"
                                                            ),
                                                            setTimeout(
                                                                function () {
                                                                    c.removeClass(
                                                                        "d-none"
                                                                    ),
                                                                        s.addClass(
                                                                            "d-none"
                                                                        );
                                                                },
                                                                1e3
                                                            );
                                                    case 17:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                );
                                return function (e) {
                                    return t.apply(this, arguments);
                                };
                            })()
                        );
                    },
                },
                {
                    key: "initTreeCategoriesSelect",
                    value: function () {
                        var t = document.querySelector(
                            '[data-bb-toggle="tree-categories-select"]'
                        );
                        t &&
                            e.select(t, {
                                render: {
                                    option: function (e) {
                                        return "<div>".concat(
                                            e.renderOption,
                                            "</div>"
                                        );
                                    },
                                    item: function (e) {
                                        return "<div>".concat(
                                            e.renderItem,
                                            "</div>"
                                        );
                                    },
                                },
                            });
                    },
                },
                {
                    key: "initDropdownCheckboxes",
                    value: function () {
                        var e = function e(t) {
                            var n = t
                                ? $(t.currentTarget).closest(
                                      '[data-bb-toggle="dropdown-checkboxes"]'
                                  )
                                : $('[data-bb-toggle="dropdown-checkboxes"]');
                            if (Array.isArray(n))
                                n.forEach(function (t) {
                                    e(t);
                                });
                            else {
                                var a = n.find(
                                        'input[type="checkbox"]:checked'
                                    ),
                                    o = n.find("> span");
                                if (a.length)
                                    if (a.length > 3)
                                        o.text(
                                            a.length +
                                                " " +
                                                n.data("selected-text")
                                        );
                                    else {
                                        var i = [];
                                        a.each(function () {
                                            i.push(
                                                $(this)
                                                    .siblings(
                                                        ".form-check-label"
                                                    )
                                                    .text()
                                                    .trim()
                                            );
                                        }),
                                            o.text(i.join(", "));
                                    }
                                else
                                    n.length &&
                                        $.map(n, function (e) {
                                            $(e)
                                                .find("> span")
                                                .text(
                                                    $(e).data("placeholder") ||
                                                        " "
                                                );
                                        });
                            }
                        };
                        e(),
                            $(document).on(
                                "click",
                                '[data-bb-toggle="dropdown-checkboxes"] input[type="checkbox"]',
                                function (t) {
                                    e(t);
                                    var n = $(t.currentTarget).closest(
                                            '[data-bb-toggle="dropdown-checkboxes"]'
                                        ),
                                        a = n.find(".multi-checklist-selected");
                                    if ($(t.currentTarget).is(":checked")) {
                                        var o = '<input type="hidden" name="'
                                            .concat(n.data("name"), '" value="')
                                            .concat(
                                                $(t.currentTarget).val(),
                                                '">'
                                            );
                                        a.append(o);
                                    } else
                                        a.find(
                                            'input[value="'.concat(
                                                $(t.currentTarget).val(),
                                                '"]'
                                            )
                                        ).remove();
                                }
                            ),
                            $(document).on(
                                "click",
                                '[data-bb-toggle="dropdown-checkboxes"] > span',
                                function (e) {
                                    e.stopPropagation();
                                    var t = $(this),
                                        n = t.siblings('input[type="text"]'),
                                        a = t.siblings(".dropdown-menu"),
                                        o = t.closest(
                                            '[data-bb-toggle="dropdown-checkboxes"]'
                                        );
                                    if (
                                        (a.addClass("show"),
                                        t.hide(),
                                        n.show().trigger("focus"),
                                        o.data("ajax-url"))
                                    ) {
                                        var i = o.data("name");
                                        $httpClient
                                            .make()
                                            .withLoading(a)
                                            .get(o.data("ajax-url"))
                                            .then(function (e) {
                                                var t = e.data,
                                                    n = "";
                                                Object.keys(t).map(function (
                                                    e
                                                ) {
                                                    n +=
                                                        '<li>\n                    <label class="form-check">\n                        <input type="checkbox" id="__id__" class="form-check-input" value="__value__">\n                        <span class="form-check-label">\n                            __label__\n                        </span>\n                    </label>\n                </li>'
                                                            .replace(
                                                                /__id__/g,
                                                                ""
                                                                    .concat(
                                                                        i,
                                                                        "-"
                                                                    )
                                                                    .concat(e)
                                                            )
                                                            .replace(
                                                                /__value__/g,
                                                                e
                                                            )
                                                            .replace(
                                                                /__label__/g,
                                                                t[e]
                                                            );
                                                }),
                                                    a.find("ul").html(n),
                                                    o
                                                        .find(
                                                            ".multi-checklist-selected"
                                                        )
                                                        .find(
                                                            'input[type="hidden"]'
                                                        )
                                                        .each(function () {
                                                            var e = $(this);
                                                            a.find(
                                                                'input[value="'.concat(
                                                                    e.val(),
                                                                    '"]'
                                                                )
                                                            ).prop(
                                                                "checked",
                                                                !0
                                                            );
                                                        });
                                            });
                                    }
                                }
                            ),
                            $(document).on("click", function (e) {
                                var t = $(e.target),
                                    n = $(
                                        '[data-bb-toggle="dropdown-checkboxes"]'
                                    );
                                t.closest(
                                    '[data-bb-toggle="dropdown-checkboxes"]'
                                ).length ||
                                    (n
                                        .find("> .dropdown-menu")
                                        .removeClass("show"),
                                    n.find("> span").show(),
                                    n
                                        .find('> input[type="text"]')
                                        .val("")
                                        .hide(),
                                    n.data("ajax-url") &&
                                        n
                                            .find("> .dropdown-menu ul")
                                            .html('<div class="py-5"></div>'));
                            }),
                            $(document).on(
                                "keyup",
                                '[data-bb-toggle="dropdown-checkboxes"] input[type="text"]',
                                function () {
                                    var e = $(this),
                                        t = e
                                            .closest(
                                                '[data-bb-toggle="dropdown-checkboxes"]'
                                            )
                                            .find("li"),
                                        n = e.val().trim().toLowerCase();
                                    n.length
                                        ? (t.hide(),
                                          t.each(function () {
                                              var e = $(this);
                                              -1 !==
                                                  e
                                                      .find(".form-check-label")
                                                      .text()
                                                      .trim()
                                                      .toLowerCase()
                                                      .indexOf(n) && e.show();
                                          }))
                                        : t.show();
                                }
                            );
                    },
                },
                {
                    key: "initEditable",
                    value: function () {
                        var t = $(".editable");
                        t.length &&
                            t.editable({
                                mode: "inline",
                                success: function (t) {
                                    t.error &&
                                        t.message &&
                                        e.showError(t.message);
                                },
                                error: function (t) {
                                    e.handleError(t);
                                },
                            });
                    },
                },
                {
                    key: "unmaskInputNumber",
                    value: function (e, t) {
                        if (jQuery().inputmask)
                            return (
                                e
                                    .find("input.input-mask-number")
                                    .map(function (e, n) {
                                        var a = $(n);
                                        a.inputmask &&
                                            ($.isArray(t)
                                                ? (t[a.attr("name")] =
                                                      a.inputmask(
                                                          "unmaskedvalue"
                                                      ))
                                                : t.append(
                                                      a.attr("name"),
                                                      a.inputmask(
                                                          "unmaskedvalue"
                                                      )
                                                  ));
                                    }),
                                t
                            );
                    },
                },
            ]),
            n && u(t.prototype, n),
            a && u(t, a),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
        );
        var t, n, a, o;
    })();
    p(h, "noticesTimeout", {}),
        p(h, "noticesTimeoutCount", 500),
        $(function () {
            $.ajaxSetup({
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    ),
                },
            }),
                new h(),
                (window.Botble = h);
        });
})();
