(() => {
    var t = {
            5685: () => {
                [].slice
                    .call(
                        document.querySelectorAll(
                            '[data-bs-toggle="switch-icon"]'
                        )
                    )
                    .map(function (t) {
                        t.addEventListener("click", (e) => {
                            e.stopPropagation(), t.classList.toggle("active");
                        });
                    });
            },
            5947: function (t, e, n) {
                var i, s;
                /* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
                 * @license MIT */ (i = function () {
                    var t,
                        e,
                        n = { version: "0.2.0" },
                        i = (n.settings = {
                            minimum: 0.08,
                            easing: "ease",
                            positionUsing: "",
                            speed: 200,
                            trickle: !0,
                            trickleRate: 0.02,
                            trickleSpeed: 800,
                            showSpinner: !0,
                            barSelector: '[role="bar"]',
                            spinnerSelector: '[role="spinner"]',
                            parent: "body",
                            template:
                                '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
                        });
                    function s(t, e, n) {
                        return t < e ? e : t > n ? n : t;
                    }
                    function o(t) {
                        return 100 * (-1 + t);
                    }
                    function r(t, e, n) {
                        var s;
                        return (
                            ((s =
                                "translate3d" === i.positionUsing
                                    ? {
                                          transform:
                                              "translate3d(" + o(t) + "%,0,0)",
                                      }
                                    : "translate" === i.positionUsing
                                    ? {
                                          transform:
                                              "translate(" + o(t) + "%,0)",
                                      }
                                    : {
                                          "margin-left": o(t) + "%",
                                      }).transition = "all " + e + "ms " + n),
                            s
                        );
                    }
                    (n.configure = function (t) {
                        var e, n;
                        for (e in t)
                            void 0 !== (n = t[e]) &&
                                t.hasOwnProperty(e) &&
                                (i[e] = n);
                        return this;
                    }),
                        (n.status = null),
                        (n.set = function (t) {
                            var e = n.isStarted();
                            (t = s(t, i.minimum, 1)),
                                (n.status = 1 === t ? null : t);
                            var o = n.render(!e),
                                c = o.querySelector(i.barSelector),
                                u = i.speed,
                                d = i.easing;
                            return (
                                o.offsetWidth,
                                a(function (e) {
                                    "" === i.positionUsing &&
                                        (i.positionUsing =
                                            n.getPositioningCSS()),
                                        l(c, r(t, u, d)),
                                        1 === t
                                            ? (l(o, {
                                                  transition: "none",
                                                  opacity: 1,
                                              }),
                                              o.offsetWidth,
                                              setTimeout(function () {
                                                  l(o, {
                                                      transition:
                                                          "all " +
                                                          u +
                                                          "ms linear",
                                                      opacity: 0,
                                                  }),
                                                      setTimeout(function () {
                                                          n.remove(), e();
                                                      }, u);
                                              }, u))
                                            : setTimeout(e, u);
                                }),
                                this
                            );
                        }),
                        (n.isStarted = function () {
                            return "number" == typeof n.status;
                        }),
                        (n.start = function () {
                            n.status || n.set(0);
                            var t = function () {
                                setTimeout(function () {
                                    n.status && (n.trickle(), t());
                                }, i.trickleSpeed);
                            };
                            return i.trickle && t(), this;
                        }),
                        (n.done = function (t) {
                            return t || n.status
                                ? n.inc(0.3 + 0.5 * Math.random()).set(1)
                                : this;
                        }),
                        (n.inc = function (t) {
                            var e = n.status;
                            return e
                                ? ("number" != typeof t &&
                                      (t =
                                          (1 - e) *
                                          s(Math.random() * e, 0.1, 0.95)),
                                  (e = s(e + t, 0, 0.994)),
                                  n.set(e))
                                : n.start();
                        }),
                        (n.trickle = function () {
                            return n.inc(Math.random() * i.trickleRate);
                        }),
                        (t = 0),
                        (e = 0),
                        (n.promise = function (i) {
                            return i && "resolved" !== i.state()
                                ? (0 === e && n.start(),
                                  t++,
                                  e++,
                                  i.always(function () {
                                      0 == --e
                                          ? ((t = 0), n.done())
                                          : n.set((t - e) / t);
                                  }),
                                  this)
                                : this;
                        }),
                        (n.render = function (t) {
                            if (n.isRendered())
                                return document.getElementById("nprogress");
                            u(document.documentElement, "nprogress-busy");
                            var e = document.createElement("div");
                            (e.id = "nprogress"), (e.innerHTML = i.template);
                            var s,
                                r = e.querySelector(i.barSelector),
                                a = t ? "-100" : o(n.status || 0),
                                c = document.querySelector(i.parent);
                            return (
                                l(r, {
                                    transition: "all 0 linear",
                                    transform: "translate3d(" + a + "%,0,0)",
                                }),
                                i.showSpinner ||
                                    ((s = e.querySelector(i.spinnerSelector)) &&
                                        f(s)),
                                c != document.body &&
                                    u(c, "nprogress-custom-parent"),
                                c.appendChild(e),
                                e
                            );
                        }),
                        (n.remove = function () {
                            d(document.documentElement, "nprogress-busy"),
                                d(
                                    document.querySelector(i.parent),
                                    "nprogress-custom-parent"
                                );
                            var t = document.getElementById("nprogress");
                            t && f(t);
                        }),
                        (n.isRendered = function () {
                            return !!document.getElementById("nprogress");
                        }),
                        (n.getPositioningCSS = function () {
                            var t = document.body.style,
                                e =
                                    "WebkitTransform" in t
                                        ? "Webkit"
                                        : "MozTransform" in t
                                        ? "Moz"
                                        : "msTransform" in t
                                        ? "ms"
                                        : "OTransform" in t
                                        ? "O"
                                        : "";
                            return e + "Perspective" in t
                                ? "translate3d"
                                : e + "Transform" in t
                                ? "translate"
                                : "margin";
                        });
                    var a = (function () {
                            var t = [];
                            function e() {
                                var n = t.shift();
                                n && n(e);
                            }
                            return function (n) {
                                t.push(n), 1 == t.length && e();
                            };
                        })(),
                        l = (function () {
                            var t = ["Webkit", "O", "Moz", "ms"],
                                e = {};
                            function n(t) {
                                return t
                                    .replace(/^-ms-/, "ms-")
                                    .replace(/-([\da-z])/gi, function (t, e) {
                                        return e.toUpperCase();
                                    });
                            }
                            function i(e) {
                                var n = document.body.style;
                                if (e in n) return e;
                                for (
                                    var i,
                                        s = t.length,
                                        o =
                                            e.charAt(0).toUpperCase() +
                                            e.slice(1);
                                    s--;

                                )
                                    if ((i = t[s] + o) in n) return i;
                                return e;
                            }
                            function s(t) {
                                return (t = n(t)), e[t] || (e[t] = i(t));
                            }
                            function o(t, e, n) {
                                (e = s(e)), (t.style[e] = n);
                            }
                            return function (t, e) {
                                var n,
                                    i,
                                    s = arguments;
                                if (2 == s.length)
                                    for (n in e)
                                        void 0 !== (i = e[n]) &&
                                            e.hasOwnProperty(n) &&
                                            o(t, n, i);
                                else o(t, s[1], s[2]);
                            };
                        })();
                    function c(t, e) {
                        return (
                            ("string" == typeof t ? t : h(t)).indexOf(
                                " " + e + " "
                            ) >= 0
                        );
                    }
                    function u(t, e) {
                        var n = h(t),
                            i = n + e;
                        c(n, e) || (t.className = i.substring(1));
                    }
                    function d(t, e) {
                        var n,
                            i = h(t);
                        c(t, e) &&
                            ((n = i.replace(" " + e + " ", " ")),
                            (t.className = n.substring(1, n.length - 1)));
                    }
                    function h(t) {
                        return (" " + (t.className || "") + " ").replace(
                            /\s+/gi,
                            " "
                        );
                    }
                    function f(t) {
                        t && t.parentNode && t.parentNode.removeChild(t);
                    }
                    return n;
                }),
                    void 0 ===
                        (s = "function" == typeof i ? i.call(e, n, e, t) : i) ||
                        (t.exports = s);
            },
        },
        e = {};
    function n(i) {
        var s = e[i];
        if (void 0 !== s) return s.exports;
        var o = (e[i] = { exports: {} });
        return t[i].call(o.exports, o, o.exports, n), o.exports;
    }
    (n.n = (t) => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, { a: e }), e;
    }),
        (n.d = (t, e) => {
            for (var i in e)
                n.o(e, i) &&
                    !n.o(t, i) &&
                    Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        }),
        (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (n.r = (t) => {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (() => {
            "use strict";
            var t = {};
            n.r(t),
                n.d(t, {
                    afterMain: () => S,
                    afterRead: () => C,
                    afterWrite: () => I,
                    applyStyles: () => z,
                    arrow: () => rt,
                    auto: () => p,
                    basePlacements: () => g,
                    beforeMain: () => O,
                    beforeRead: () => T,
                    beforeWrite: () => L,
                    bottom: () => d,
                    clippingParents: () => b,
                    computeStyles: () => ut,
                    createPopper: () => zt,
                    createPopperBase: () => Ht,
                    createPopperLite: () => Wt,
                    detectOverflow: () => Ct,
                    end: () => _,
                    eventListeners: () => ht,
                    flip: () => Ot,
                    hide: () => Lt,
                    left: () => f,
                    main: () => k,
                    modifierPhases: () => N,
                    offset: () => $t,
                    placements: () => E,
                    popper: () => y,
                    popperGenerator: () => Ft,
                    popperOffsets: () => Dt,
                    preventOverflow: () => It,
                    read: () => x,
                    reference: () => w,
                    right: () => h,
                    start: () => m,
                    top: () => u,
                    variationPlacements: () => A,
                    viewport: () => v,
                    write: () => D,
                });
            var e = {};
            n.r(e),
                n.d(e, {
                    Alert: () => Pe,
                    Button: () => je,
                    Carousel: () => bn,
                    Collapse: () => Dn,
                    Dropdown: () => ii,
                    Modal: () => Fi,
                    Offcanvas: () => ns,
                    Popover: () => Os,
                    ScrollSpy: () => Fs,
                    Tab: () => ao,
                    Toast: () => Eo,
                    Tooltip: () => As,
                });
            var i = {};
            n.r(i),
                n.d(i, {
                    getColor: () => Co,
                    hexToRgba: () => xo,
                    prefix: () => To,
                });
            var s = new Map();
            function o(t) {
                var e = s.get(t);
                e && e.destroy();
            }
            function r(t) {
                var e = s.get(t);
                e && e.update();
            }
            var a = null;
            "undefined" == typeof window
                ? (((a = function (t) {
                      return t;
                  }).destroy = function (t) {
                      return t;
                  }),
                  (a.update = function (t) {
                      return t;
                  }))
                : (((a = function (t, e) {
                      return (
                          t &&
                              Array.prototype.forEach.call(
                                  t.length ? t : [t],
                                  function (t) {
                                      return (function (t) {
                                          if (
                                              t &&
                                              t.nodeName &&
                                              "TEXTAREA" === t.nodeName &&
                                              !s.has(t)
                                          ) {
                                              var e,
                                                  n = null,
                                                  i =
                                                      window.getComputedStyle(
                                                          t
                                                      ),
                                                  o =
                                                      ((e = t.value),
                                                      function () {
                                                          a({
                                                              testForHeightReduction:
                                                                  "" === e ||
                                                                  !t.value.startsWith(
                                                                      e
                                                                  ),
                                                              restoreTextAlign:
                                                                  null,
                                                          }),
                                                              (e = t.value);
                                                      }),
                                                  r = function (e) {
                                                      t.removeEventListener(
                                                          "autosize:destroy",
                                                          r
                                                      ),
                                                          t.removeEventListener(
                                                              "autosize:update",
                                                              l
                                                          ),
                                                          t.removeEventListener(
                                                              "input",
                                                              o
                                                          ),
                                                          window.removeEventListener(
                                                              "resize",
                                                              l
                                                          ),
                                                          Object.keys(
                                                              e
                                                          ).forEach(function (
                                                              n
                                                          ) {
                                                              return (t.style[
                                                                  n
                                                              ] = e[n]);
                                                          }),
                                                          s.delete(t);
                                                  }.bind(t, {
                                                      height: t.style.height,
                                                      resize: t.style.resize,
                                                      textAlign:
                                                          t.style.textAlign,
                                                      overflowY:
                                                          t.style.overflowY,
                                                      overflowX:
                                                          t.style.overflowX,
                                                      wordWrap:
                                                          t.style.wordWrap,
                                                  });
                                              t.addEventListener(
                                                  "autosize:destroy",
                                                  r
                                              ),
                                                  t.addEventListener(
                                                      "autosize:update",
                                                      l
                                                  ),
                                                  t.addEventListener(
                                                      "input",
                                                      o
                                                  ),
                                                  window.addEventListener(
                                                      "resize",
                                                      l
                                                  ),
                                                  (t.style.overflowX =
                                                      "hidden"),
                                                  (t.style.wordWrap =
                                                      "break-word"),
                                                  s.set(t, {
                                                      destroy: r,
                                                      update: l,
                                                  }),
                                                  l();
                                          }
                                          function a(e) {
                                              var s,
                                                  o,
                                                  r = e.restoreTextAlign,
                                                  l = void 0 === r ? null : r,
                                                  c = e.testForHeightReduction,
                                                  u = void 0 === c || c,
                                                  d = i.overflowY;
                                              if (
                                                  0 !== t.scrollHeight &&
                                                  ("vertical" === i.resize
                                                      ? (t.style.resize =
                                                            "none")
                                                      : "both" === i.resize &&
                                                        (t.style.resize =
                                                            "horizontal"),
                                                  u &&
                                                      ((s = (function (t) {
                                                          for (
                                                              var e = [];
                                                              t &&
                                                              t.parentNode &&
                                                              t.parentNode instanceof
                                                                  Element;

                                                          )
                                                              t.parentNode
                                                                  .scrollTop &&
                                                                  e.push([
                                                                      t.parentNode,
                                                                      t
                                                                          .parentNode
                                                                          .scrollTop,
                                                                  ]),
                                                                  (t =
                                                                      t.parentNode);
                                                          return function () {
                                                              return e.forEach(
                                                                  function (t) {
                                                                      var e =
                                                                              t[0],
                                                                          n =
                                                                              t[1];
                                                                      (e.style.scrollBehavior =
                                                                          "auto"),
                                                                          (e.scrollTop =
                                                                              n),
                                                                          (e.style.scrollBehavior =
                                                                              null);
                                                                  }
                                                              );
                                                          };
                                                      })(t)),
                                                      (t.style.height = "")),
                                                  (o =
                                                      "content-box" ===
                                                      i.boxSizing
                                                          ? t.scrollHeight -
                                                            (parseFloat(
                                                                i.paddingTop
                                                            ) +
                                                                parseFloat(
                                                                    i.paddingBottom
                                                                ))
                                                          : t.scrollHeight +
                                                            parseFloat(
                                                                i.borderTopWidth
                                                            ) +
                                                            parseFloat(
                                                                i.borderBottomWidth
                                                            )),
                                                  "none" !== i.maxHeight &&
                                                  o > parseFloat(i.maxHeight)
                                                      ? ("hidden" ===
                                                            i.overflowY &&
                                                            (t.style.overflow =
                                                                "scroll"),
                                                        (o = parseFloat(
                                                            i.maxHeight
                                                        )))
                                                      : "hidden" !==
                                                            i.overflowY &&
                                                        (t.style.overflow =
                                                            "hidden"),
                                                  (t.style.height = o + "px"),
                                                  l && (t.style.textAlign = l),
                                                  s && s(),
                                                  n !== o &&
                                                      (t.dispatchEvent(
                                                          new Event(
                                                              "autosize:resized",
                                                              { bubbles: !0 }
                                                          )
                                                      ),
                                                      (n = o)),
                                                  d !== i.overflow && !l)
                                              ) {
                                                  var h = i.textAlign;
                                                  "hidden" === i.overflow &&
                                                      (t.style.textAlign =
                                                          "start" === h
                                                              ? "end"
                                                              : "start"),
                                                      a({
                                                          restoreTextAlign: h,
                                                          testForHeightReduction:
                                                              !0,
                                                      });
                                              }
                                          }
                                          function l() {
                                              a({
                                                  testForHeightReduction: !0,
                                                  restoreTextAlign: null,
                                              });
                                          }
                                      })(t);
                                  }
                              ),
                          t
                      );
                  }).destroy = function (t) {
                      return (
                          t &&
                              Array.prototype.forEach.call(
                                  t.length ? t : [t],
                                  o
                              ),
                          t
                      );
                  }),
                  (a.update = function (t) {
                      return (
                          t &&
                              Array.prototype.forEach.call(
                                  t.length ? t : [t],
                                  r
                              ),
                          t
                      );
                  }));
            const l = a,
                c = document.querySelectorAll('[data-bs-toggle="autosize"]');
            c.length &&
                c.forEach(function (t) {
                    l(t);
                });
            var u = "top",
                d = "bottom",
                h = "right",
                f = "left",
                p = "auto",
                g = [u, d, h, f],
                m = "start",
                _ = "end",
                b = "clippingParents",
                v = "viewport",
                y = "popper",
                w = "reference",
                A = g.reduce(function (t, e) {
                    return t.concat([e + "-" + m, e + "-" + _]);
                }, []),
                E = [].concat(g, [p]).reduce(function (t, e) {
                    return t.concat([e, e + "-" + m, e + "-" + _]);
                }, []),
                T = "beforeRead",
                x = "read",
                C = "afterRead",
                O = "beforeMain",
                k = "main",
                S = "afterMain",
                L = "beforeWrite",
                D = "write",
                I = "afterWrite",
                N = [T, x, C, O, k, S, L, D, I];
            function P(t) {
                return t ? (t.nodeName || "").toLowerCase() : null;
            }
            function M(t) {
                if (null == t) return window;
                if ("[object Window]" !== t.toString()) {
                    var e = t.ownerDocument;
                    return (e && e.defaultView) || window;
                }
                return t;
            }
            function j(t) {
                return t instanceof M(t).Element || t instanceof Element;
            }
            function F(t) {
                return (
                    t instanceof M(t).HTMLElement || t instanceof HTMLElement
                );
            }
            function H(t) {
                return (
                    "undefined" != typeof ShadowRoot &&
                    (t instanceof M(t).ShadowRoot || t instanceof ShadowRoot)
                );
            }
            const z = {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function (t) {
                    var e = t.state;
                    Object.keys(e.elements).forEach(function (t) {
                        var n = e.styles[t] || {},
                            i = e.attributes[t] || {},
                            s = e.elements[t];
                        F(s) &&
                            P(s) &&
                            (Object.assign(s.style, n),
                            Object.keys(i).forEach(function (t) {
                                var e = i[t];
                                !1 === e
                                    ? s.removeAttribute(t)
                                    : s.setAttribute(t, !0 === e ? "" : e);
                            }));
                    });
                },
                effect: function (t) {
                    var e = t.state,
                        n = {
                            popper: {
                                position: e.options.strategy,
                                left: "0",
                                top: "0",
                                margin: "0",
                            },
                            arrow: { position: "absolute" },
                            reference: {},
                        };
                    return (
                        Object.assign(e.elements.popper.style, n.popper),
                        (e.styles = n),
                        e.elements.arrow &&
                            Object.assign(e.elements.arrow.style, n.arrow),
                        function () {
                            Object.keys(e.elements).forEach(function (t) {
                                var i = e.elements[t],
                                    s = e.attributes[t] || {},
                                    o = Object.keys(
                                        e.styles.hasOwnProperty(t)
                                            ? e.styles[t]
                                            : n[t]
                                    ).reduce(function (t, e) {
                                        return (t[e] = ""), t;
                                    }, {});
                                F(i) &&
                                    P(i) &&
                                    (Object.assign(i.style, o),
                                    Object.keys(s).forEach(function (t) {
                                        i.removeAttribute(t);
                                    }));
                            });
                        }
                    );
                },
                requires: ["computeStyles"],
            };
            function W(t) {
                return t.split("-")[0];
            }
            var B = Math.max,
                R = Math.min,
                q = Math.round;
            function V() {
                var t = navigator.userAgentData;
                return null != t && t.brands && Array.isArray(t.brands)
                    ? t.brands
                          .map(function (t) {
                              return t.brand + "/" + t.version;
                          })
                          .join(" ")
                    : navigator.userAgent;
            }
            function U() {
                return !/^((?!chrome|android).)*safari/i.test(V());
            }
            function Y(t, e, n) {
                void 0 === e && (e = !1), void 0 === n && (n = !1);
                var i = t.getBoundingClientRect(),
                    s = 1,
                    o = 1;
                e &&
                    F(t) &&
                    ((s =
                        (t.offsetWidth > 0 && q(i.width) / t.offsetWidth) || 1),
                    (o =
                        (t.offsetHeight > 0 && q(i.height) / t.offsetHeight) ||
                        1));
                var r = (j(t) ? M(t) : window).visualViewport,
                    a = !U() && n,
                    l = (i.left + (a && r ? r.offsetLeft : 0)) / s,
                    c = (i.top + (a && r ? r.offsetTop : 0)) / o,
                    u = i.width / s,
                    d = i.height / o;
                return {
                    width: u,
                    height: d,
                    top: c,
                    right: l + u,
                    bottom: c + d,
                    left: l,
                    x: l,
                    y: c,
                };
            }
            function X(t) {
                var e = Y(t),
                    n = t.offsetWidth,
                    i = t.offsetHeight;
                return (
                    Math.abs(e.width - n) <= 1 && (n = e.width),
                    Math.abs(e.height - i) <= 1 && (i = e.height),
                    { x: t.offsetLeft, y: t.offsetTop, width: n, height: i }
                );
            }
            function K(t, e) {
                var n = e.getRootNode && e.getRootNode();
                if (t.contains(e)) return !0;
                if (n && H(n)) {
                    var i = e;
                    do {
                        if (i && t.isSameNode(i)) return !0;
                        i = i.parentNode || i.host;
                    } while (i);
                }
                return !1;
            }
            function Q(t) {
                return M(t).getComputedStyle(t);
            }
            function G(t) {
                return ["table", "td", "th"].indexOf(P(t)) >= 0;
            }
            function J(t) {
                return (
                    (j(t) ? t.ownerDocument : t.document) || window.document
                ).documentElement;
            }
            function Z(t) {
                return "html" === P(t)
                    ? t
                    : t.assignedSlot ||
                          t.parentNode ||
                          (H(t) ? t.host : null) ||
                          J(t);
            }
            function tt(t) {
                return F(t) && "fixed" !== Q(t).position
                    ? t.offsetParent
                    : null;
            }
            function et(t) {
                for (
                    var e = M(t), n = tt(t);
                    n && G(n) && "static" === Q(n).position;

                )
                    n = tt(n);
                return n &&
                    ("html" === P(n) ||
                        ("body" === P(n) && "static" === Q(n).position))
                    ? e
                    : n ||
                          (function (t) {
                              var e = /firefox/i.test(V());
                              if (
                                  /Trident/i.test(V()) &&
                                  F(t) &&
                                  "fixed" === Q(t).position
                              )
                                  return null;
                              var n = Z(t);
                              for (
                                  H(n) && (n = n.host);
                                  F(n) && ["html", "body"].indexOf(P(n)) < 0;

                              ) {
                                  var i = Q(n);
                                  if (
                                      "none" !== i.transform ||
                                      "none" !== i.perspective ||
                                      "paint" === i.contain ||
                                      -1 !==
                                          ["transform", "perspective"].indexOf(
                                              i.willChange
                                          ) ||
                                      (e && "filter" === i.willChange) ||
                                      (e && i.filter && "none" !== i.filter)
                                  )
                                      return n;
                                  n = n.parentNode;
                              }
                              return null;
                          })(t) ||
                          e;
            }
            function nt(t) {
                return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
            }
            function it(t, e, n) {
                return B(t, R(e, n));
            }
            function st(t) {
                return Object.assign(
                    {},
                    { top: 0, right: 0, bottom: 0, left: 0 },
                    t
                );
            }
            function ot(t, e) {
                return e.reduce(function (e, n) {
                    return (e[n] = t), e;
                }, {});
            }
            const rt = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function (t) {
                    var e,
                        n = t.state,
                        i = t.name,
                        s = t.options,
                        o = n.elements.arrow,
                        r = n.modifiersData.popperOffsets,
                        a = W(n.placement),
                        l = nt(a),
                        c = [f, h].indexOf(a) >= 0 ? "height" : "width";
                    if (o && r) {
                        var p = (function (t, e) {
                                return st(
                                    "number" !=
                                        typeof (t =
                                            "function" == typeof t
                                                ? t(
                                                      Object.assign(
                                                          {},
                                                          e.rects,
                                                          {
                                                              placement:
                                                                  e.placement,
                                                          }
                                                      )
                                                  )
                                                : t)
                                        ? t
                                        : ot(t, g)
                                );
                            })(s.padding, n),
                            m = X(o),
                            _ = "y" === l ? u : f,
                            b = "y" === l ? d : h,
                            v =
                                n.rects.reference[c] +
                                n.rects.reference[l] -
                                r[l] -
                                n.rects.popper[c],
                            y = r[l] - n.rects.reference[l],
                            w = et(o),
                            A = w
                                ? "y" === l
                                    ? w.clientHeight || 0
                                    : w.clientWidth || 0
                                : 0,
                            E = v / 2 - y / 2,
                            T = p[_],
                            x = A - m[c] - p[b],
                            C = A / 2 - m[c] / 2 + E,
                            O = it(T, C, x),
                            k = l;
                        n.modifiersData[i] =
                            (((e = {})[k] = O), (e.centerOffset = O - C), e);
                    }
                },
                effect: function (t) {
                    var e = t.state,
                        n = t.options.element,
                        i = void 0 === n ? "[data-popper-arrow]" : n;
                    null != i &&
                        ("string" != typeof i ||
                            (i = e.elements.popper.querySelector(i))) &&
                        K(e.elements.popper, i) &&
                        (e.elements.arrow = i);
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"],
            };
            function at(t) {
                return t.split("-")[1];
            }
            var lt = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto",
            };
            function ct(t) {
                var e,
                    n = t.popper,
                    i = t.popperRect,
                    s = t.placement,
                    o = t.variation,
                    r = t.offsets,
                    a = t.position,
                    l = t.gpuAcceleration,
                    c = t.adaptive,
                    p = t.roundOffsets,
                    g = t.isFixed,
                    m = r.x,
                    b = void 0 === m ? 0 : m,
                    v = r.y,
                    y = void 0 === v ? 0 : v,
                    w = "function" == typeof p ? p({ x: b, y }) : { x: b, y };
                (b = w.x), (y = w.y);
                var A = r.hasOwnProperty("x"),
                    E = r.hasOwnProperty("y"),
                    T = f,
                    x = u,
                    C = window;
                if (c) {
                    var O = et(n),
                        k = "clientHeight",
                        S = "clientWidth";
                    if (
                        (O === M(n) &&
                            "static" !== Q((O = J(n))).position &&
                            "absolute" === a &&
                            ((k = "scrollHeight"), (S = "scrollWidth")),
                        s === u || ((s === f || s === h) && o === _))
                    )
                        (x = d),
                            (y -=
                                (g && O === C && C.visualViewport
                                    ? C.visualViewport.height
                                    : O[k]) - i.height),
                            (y *= l ? 1 : -1);
                    if (s === f || ((s === u || s === d) && o === _))
                        (T = h),
                            (b -=
                                (g && O === C && C.visualViewport
                                    ? C.visualViewport.width
                                    : O[S]) - i.width),
                            (b *= l ? 1 : -1);
                }
                var L,
                    $ = Object.assign({ position: a }, c && lt),
                    D =
                        !0 === p
                            ? (function (t, e) {
                                  var n = t.x,
                                      i = t.y,
                                      s = e.devicePixelRatio || 1;
                                  return {
                                      x: q(n * s) / s || 0,
                                      y: q(i * s) / s || 0,
                                  };
                              })({ x: b, y }, M(n))
                            : { x: b, y };
                return (
                    (b = D.x),
                    (y = D.y),
                    l
                        ? Object.assign(
                              {},
                              $,
                              (((L = {})[x] = E ? "0" : ""),
                              (L[T] = A ? "0" : ""),
                              (L.transform =
                                  (C.devicePixelRatio || 1) <= 1
                                      ? "translate(" + b + "px, " + y + "px)"
                                      : "translate3d(" +
                                        b +
                                        "px, " +
                                        y +
                                        "px, 0)"),
                              L)
                          )
                        : Object.assign(
                              {},
                              $,
                              (((e = {})[x] = E ? y + "px" : ""),
                              (e[T] = A ? b + "px" : ""),
                              (e.transform = ""),
                              e)
                          )
                );
            }
            const ut = {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function (t) {
                    var e = t.state,
                        n = t.options,
                        i = n.gpuAcceleration,
                        s = void 0 === i || i,
                        o = n.adaptive,
                        r = void 0 === o || o,
                        a = n.roundOffsets,
                        l = void 0 === a || a,
                        c = {
                            placement: W(e.placement),
                            variation: at(e.placement),
                            popper: e.elements.popper,
                            popperRect: e.rects.popper,
                            gpuAcceleration: s,
                            isFixed: "fixed" === e.options.strategy,
                        };
                    null != e.modifiersData.popperOffsets &&
                        (e.styles.popper = Object.assign(
                            {},
                            e.styles.popper,
                            ct(
                                Object.assign({}, c, {
                                    offsets: e.modifiersData.popperOffsets,
                                    position: e.options.strategy,
                                    adaptive: r,
                                    roundOffsets: l,
                                })
                            )
                        )),
                        null != e.modifiersData.arrow &&
                            (e.styles.arrow = Object.assign(
                                {},
                                e.styles.arrow,
                                ct(
                                    Object.assign({}, c, {
                                        offsets: e.modifiersData.arrow,
                                        position: "absolute",
                                        adaptive: !1,
                                        roundOffsets: l,
                                    })
                                )
                            )),
                        (e.attributes.popper = Object.assign(
                            {},
                            e.attributes.popper,
                            { "data-popper-placement": e.placement }
                        ));
                },
                data: {},
            };
            var dt = { passive: !0 };
            const ht = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function () {},
                effect: function (t) {
                    var e = t.state,
                        n = t.instance,
                        i = t.options,
                        s = i.scroll,
                        o = void 0 === s || s,
                        r = i.resize,
                        a = void 0 === r || r,
                        l = M(e.elements.popper),
                        c = [].concat(
                            e.scrollParents.reference,
                            e.scrollParents.popper
                        );
                    return (
                        o &&
                            c.forEach(function (t) {
                                t.addEventListener("scroll", n.update, dt);
                            }),
                        a && l.addEventListener("resize", n.update, dt),
                        function () {
                            o &&
                                c.forEach(function (t) {
                                    t.removeEventListener(
                                        "scroll",
                                        n.update,
                                        dt
                                    );
                                }),
                                a &&
                                    l.removeEventListener(
                                        "resize",
                                        n.update,
                                        dt
                                    );
                        }
                    );
                },
                data: {},
            };
            var ft = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom",
            };
            function pt(t) {
                return t.replace(/left|right|bottom|top/g, function (t) {
                    return ft[t];
                });
            }
            var gt = { start: "end", end: "start" };
            function mt(t) {
                return t.replace(/start|end/g, function (t) {
                    return gt[t];
                });
            }
            function _t(t) {
                var e = M(t);
                return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
            }
            function bt(t) {
                return Y(J(t)).left + _t(t).scrollLeft;
            }
            function vt(t) {
                var e = Q(t),
                    n = e.overflow,
                    i = e.overflowX,
                    s = e.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + s + i);
            }
            function yt(t) {
                return ["html", "body", "#document"].indexOf(P(t)) >= 0
                    ? t.ownerDocument.body
                    : F(t) && vt(t)
                    ? t
                    : yt(Z(t));
            }
            function wt(t, e) {
                var n;
                void 0 === e && (e = []);
                var i = yt(t),
                    s = i === (null == (n = t.ownerDocument) ? void 0 : n.body),
                    o = M(i),
                    r = s
                        ? [o].concat(o.visualViewport || [], vt(i) ? i : [])
                        : i,
                    a = e.concat(r);
                return s ? a : a.concat(wt(Z(r)));
            }
            function At(t) {
                return Object.assign({}, t, {
                    left: t.x,
                    top: t.y,
                    right: t.x + t.width,
                    bottom: t.y + t.height,
                });
            }
            function Et(t, e, n) {
                return e === v
                    ? At(
                          (function (t, e) {
                              var n = M(t),
                                  i = J(t),
                                  s = n.visualViewport,
                                  o = i.clientWidth,
                                  r = i.clientHeight,
                                  a = 0,
                                  l = 0;
                              if (s) {
                                  (o = s.width), (r = s.height);
                                  var c = U();
                                  (c || (!c && "fixed" === e)) &&
                                      ((a = s.offsetLeft), (l = s.offsetTop));
                              }
                              return {
                                  width: o,
                                  height: r,
                                  x: a + bt(t),
                                  y: l,
                              };
                          })(t, n)
                      )
                    : j(e)
                    ? (function (t, e) {
                          var n = Y(t, !1, "fixed" === e);
                          return (
                              (n.top = n.top + t.clientTop),
                              (n.left = n.left + t.clientLeft),
                              (n.bottom = n.top + t.clientHeight),
                              (n.right = n.left + t.clientWidth),
                              (n.width = t.clientWidth),
                              (n.height = t.clientHeight),
                              (n.x = n.left),
                              (n.y = n.top),
                              n
                          );
                      })(e, n)
                    : At(
                          (function (t) {
                              var e,
                                  n = J(t),
                                  i = _t(t),
                                  s =
                                      null == (e = t.ownerDocument)
                                          ? void 0
                                          : e.body,
                                  o = B(
                                      n.scrollWidth,
                                      n.clientWidth,
                                      s ? s.scrollWidth : 0,
                                      s ? s.clientWidth : 0
                                  ),
                                  r = B(
                                      n.scrollHeight,
                                      n.clientHeight,
                                      s ? s.scrollHeight : 0,
                                      s ? s.clientHeight : 0
                                  ),
                                  a = -i.scrollLeft + bt(t),
                                  l = -i.scrollTop;
                              return (
                                  "rtl" === Q(s || n).direction &&
                                      (a +=
                                          B(
                                              n.clientWidth,
                                              s ? s.clientWidth : 0
                                          ) - o),
                                  { width: o, height: r, x: a, y: l }
                              );
                          })(J(t))
                      );
            }
            function Tt(t, e, n, i) {
                var s =
                        "clippingParents" === e
                            ? (function (t) {
                                  var e = wt(Z(t)),
                                      n =
                                          ["absolute", "fixed"].indexOf(
                                              Q(t).position
                                          ) >= 0 && F(t)
                                              ? et(t)
                                              : t;
                                  return j(n)
                                      ? e.filter(function (t) {
                                            return (
                                                j(t) &&
                                                K(t, n) &&
                                                "body" !== P(t)
                                            );
                                        })
                                      : [];
                              })(t)
                            : [].concat(e),
                    o = [].concat(s, [n]),
                    r = o[0],
                    a = o.reduce(function (e, n) {
                        var s = Et(t, n, i);
                        return (
                            (e.top = B(s.top, e.top)),
                            (e.right = R(s.right, e.right)),
                            (e.bottom = R(s.bottom, e.bottom)),
                            (e.left = B(s.left, e.left)),
                            e
                        );
                    }, Et(t, r, i));
                return (
                    (a.width = a.right - a.left),
                    (a.height = a.bottom - a.top),
                    (a.x = a.left),
                    (a.y = a.top),
                    a
                );
            }
            function xt(t) {
                var e,
                    n = t.reference,
                    i = t.element,
                    s = t.placement,
                    o = s ? W(s) : null,
                    r = s ? at(s) : null,
                    a = n.x + n.width / 2 - i.width / 2,
                    l = n.y + n.height / 2 - i.height / 2;
                switch (o) {
                    case u:
                        e = { x: a, y: n.y - i.height };
                        break;
                    case d:
                        e = { x: a, y: n.y + n.height };
                        break;
                    case h:
                        e = { x: n.x + n.width, y: l };
                        break;
                    case f:
                        e = { x: n.x - i.width, y: l };
                        break;
                    default:
                        e = { x: n.x, y: n.y };
                }
                var c = o ? nt(o) : null;
                if (null != c) {
                    var p = "y" === c ? "height" : "width";
                    switch (r) {
                        case m:
                            e[c] = e[c] - (n[p] / 2 - i[p] / 2);
                            break;
                        case _:
                            e[c] = e[c] + (n[p] / 2 - i[p] / 2);
                    }
                }
                return e;
            }
            function Ct(t, e) {
                void 0 === e && (e = {});
                var n = e,
                    i = n.placement,
                    s = void 0 === i ? t.placement : i,
                    o = n.strategy,
                    r = void 0 === o ? t.strategy : o,
                    a = n.boundary,
                    l = void 0 === a ? b : a,
                    c = n.rootBoundary,
                    f = void 0 === c ? v : c,
                    p = n.elementContext,
                    m = void 0 === p ? y : p,
                    _ = n.altBoundary,
                    A = void 0 !== _ && _,
                    E = n.padding,
                    T = void 0 === E ? 0 : E,
                    x = st("number" != typeof T ? T : ot(T, g)),
                    C = m === y ? w : y,
                    O = t.rects.popper,
                    k = t.elements[A ? C : m],
                    S = Tt(
                        j(k) ? k : k.contextElement || J(t.elements.popper),
                        l,
                        f,
                        r
                    ),
                    L = Y(t.elements.reference),
                    $ = xt({
                        reference: L,
                        element: O,
                        strategy: "absolute",
                        placement: s,
                    }),
                    D = At(Object.assign({}, O, $)),
                    I = m === y ? D : L,
                    N = {
                        top: S.top - I.top + x.top,
                        bottom: I.bottom - S.bottom + x.bottom,
                        left: S.left - I.left + x.left,
                        right: I.right - S.right + x.right,
                    },
                    P = t.modifiersData.offset;
                if (m === y && P) {
                    var M = P[s];
                    Object.keys(N).forEach(function (t) {
                        var e = [h, d].indexOf(t) >= 0 ? 1 : -1,
                            n = [u, d].indexOf(t) >= 0 ? "y" : "x";
                        N[t] += M[n] * e;
                    });
                }
                return N;
            }
            const Ot = {
                name: "flip",
                enabled: !0,
                phase: "main",
                fn: function (t) {
                    var e = t.state,
                        n = t.options,
                        i = t.name;
                    if (!e.modifiersData[i]._skip) {
                        for (
                            var s = n.mainAxis,
                                o = void 0 === s || s,
                                r = n.altAxis,
                                a = void 0 === r || r,
                                l = n.fallbackPlacements,
                                c = n.padding,
                                _ = n.boundary,
                                b = n.rootBoundary,
                                v = n.altBoundary,
                                y = n.flipVariations,
                                w = void 0 === y || y,
                                T = n.allowedAutoPlacements,
                                x = e.options.placement,
                                C = W(x),
                                O =
                                    l ||
                                    (C === x || !w
                                        ? [pt(x)]
                                        : (function (t) {
                                              if (W(t) === p) return [];
                                              var e = pt(t);
                                              return [mt(t), e, mt(e)];
                                          })(x)),
                                k = [x].concat(O).reduce(function (t, n) {
                                    return t.concat(
                                        W(n) === p
                                            ? (function (t, e) {
                                                  void 0 === e && (e = {});
                                                  var n = e,
                                                      i = n.placement,
                                                      s = n.boundary,
                                                      o = n.rootBoundary,
                                                      r = n.padding,
                                                      a = n.flipVariations,
                                                      l =
                                                          n.allowedAutoPlacements,
                                                      c = void 0 === l ? E : l,
                                                      u = at(i),
                                                      d = u
                                                          ? a
                                                              ? A
                                                              : A.filter(
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        return (
                                                                            at(
                                                                                t
                                                                            ) ===
                                                                            u
                                                                        );
                                                                    }
                                                                )
                                                          : g,
                                                      h = d.filter(function (
                                                          t
                                                      ) {
                                                          return (
                                                              c.indexOf(t) >= 0
                                                          );
                                                      });
                                                  0 === h.length && (h = d);
                                                  var f = h.reduce(function (
                                                      e,
                                                      n
                                                  ) {
                                                      return (
                                                          (e[n] = Ct(t, {
                                                              placement: n,
                                                              boundary: s,
                                                              rootBoundary: o,
                                                              padding: r,
                                                          })[W(n)]),
                                                          e
                                                      );
                                                  },
                                                  {});
                                                  return Object.keys(f).sort(
                                                      function (t, e) {
                                                          return f[t] - f[e];
                                                      }
                                                  );
                                              })(e, {
                                                  placement: n,
                                                  boundary: _,
                                                  rootBoundary: b,
                                                  padding: c,
                                                  flipVariations: w,
                                                  allowedAutoPlacements: T,
                                              })
                                            : n
                                    );
                                }, []),
                                S = e.rects.reference,
                                L = e.rects.popper,
                                $ = new Map(),
                                D = !0,
                                I = k[0],
                                N = 0;
                            N < k.length;
                            N++
                        ) {
                            var P = k[N],
                                M = W(P),
                                j = at(P) === m,
                                F = [u, d].indexOf(M) >= 0,
                                H = F ? "width" : "height",
                                z = Ct(e, {
                                    placement: P,
                                    boundary: _,
                                    rootBoundary: b,
                                    altBoundary: v,
                                    padding: c,
                                }),
                                B = F ? (j ? h : f) : j ? d : u;
                            S[H] > L[H] && (B = pt(B));
                            var R = pt(B),
                                q = [];
                            if (
                                (o && q.push(z[M] <= 0),
                                a && q.push(z[B] <= 0, z[R] <= 0),
                                q.every(function (t) {
                                    return t;
                                }))
                            ) {
                                (I = P), (D = !1);
                                break;
                            }
                            $.set(P, q);
                        }
                        if (D)
                            for (
                                var V = function (t) {
                                        var e = k.find(function (e) {
                                            var n = $.get(e);
                                            if (n)
                                                return n
                                                    .slice(0, t)
                                                    .every(function (t) {
                                                        return t;
                                                    });
                                        });
                                        if (e) return (I = e), "break";
                                    },
                                    U = w ? 3 : 1;
                                U > 0;
                                U--
                            ) {
                                if ("break" === V(U)) break;
                            }
                        e.placement !== I &&
                            ((e.modifiersData[i]._skip = !0),
                            (e.placement = I),
                            (e.reset = !0));
                    }
                },
                requiresIfExists: ["offset"],
                data: { _skip: !1 },
            };
            function kt(t, e, n) {
                return (
                    void 0 === n && (n = { x: 0, y: 0 }),
                    {
                        top: t.top - e.height - n.y,
                        right: t.right - e.width + n.x,
                        bottom: t.bottom - e.height + n.y,
                        left: t.left - e.width - n.x,
                    }
                );
            }
            function St(t) {
                return [u, h, d, f].some(function (e) {
                    return t[e] >= 0;
                });
            }
            const Lt = {
                name: "hide",
                enabled: !0,
                phase: "main",
                requiresIfExists: ["preventOverflow"],
                fn: function (t) {
                    var e = t.state,
                        n = t.name,
                        i = e.rects.reference,
                        s = e.rects.popper,
                        o = e.modifiersData.preventOverflow,
                        r = Ct(e, { elementContext: "reference" }),
                        a = Ct(e, { altBoundary: !0 }),
                        l = kt(r, i),
                        c = kt(a, s, o),
                        u = St(l),
                        d = St(c);
                    (e.modifiersData[n] = {
                        referenceClippingOffsets: l,
                        popperEscapeOffsets: c,
                        isReferenceHidden: u,
                        hasPopperEscaped: d,
                    }),
                        (e.attributes.popper = Object.assign(
                            {},
                            e.attributes.popper,
                            {
                                "data-popper-reference-hidden": u,
                                "data-popper-escaped": d,
                            }
                        ));
                },
            };
            const $t = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function (t) {
                    var e = t.state,
                        n = t.options,
                        i = t.name,
                        s = n.offset,
                        o = void 0 === s ? [0, 0] : s,
                        r = E.reduce(function (t, n) {
                            return (
                                (t[n] = (function (t, e, n) {
                                    var i = W(t),
                                        s = [f, u].indexOf(i) >= 0 ? -1 : 1,
                                        o =
                                            "function" == typeof n
                                                ? n(
                                                      Object.assign({}, e, {
                                                          placement: t,
                                                      })
                                                  )
                                                : n,
                                        r = o[0],
                                        a = o[1];
                                    return (
                                        (r = r || 0),
                                        (a = (a || 0) * s),
                                        [f, h].indexOf(i) >= 0
                                            ? { x: a, y: r }
                                            : { x: r, y: a }
                                    );
                                })(n, e.rects, o)),
                                t
                            );
                        }, {}),
                        a = r[e.placement],
                        l = a.x,
                        c = a.y;
                    null != e.modifiersData.popperOffsets &&
                        ((e.modifiersData.popperOffsets.x += l),
                        (e.modifiersData.popperOffsets.y += c)),
                        (e.modifiersData[i] = r);
                },
            };
            const Dt = {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function (t) {
                    var e = t.state,
                        n = t.name;
                    e.modifiersData[n] = xt({
                        reference: e.rects.reference,
                        element: e.rects.popper,
                        strategy: "absolute",
                        placement: e.placement,
                    });
                },
                data: {},
            };
            const It = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function (t) {
                    var e = t.state,
                        n = t.options,
                        i = t.name,
                        s = n.mainAxis,
                        o = void 0 === s || s,
                        r = n.altAxis,
                        a = void 0 !== r && r,
                        l = n.boundary,
                        c = n.rootBoundary,
                        p = n.altBoundary,
                        g = n.padding,
                        _ = n.tether,
                        b = void 0 === _ || _,
                        v = n.tetherOffset,
                        y = void 0 === v ? 0 : v,
                        w = Ct(e, {
                            boundary: l,
                            rootBoundary: c,
                            padding: g,
                            altBoundary: p,
                        }),
                        A = W(e.placement),
                        E = at(e.placement),
                        T = !E,
                        x = nt(A),
                        C = "x" === x ? "y" : "x",
                        O = e.modifiersData.popperOffsets,
                        k = e.rects.reference,
                        S = e.rects.popper,
                        L =
                            "function" == typeof y
                                ? y(
                                      Object.assign({}, e.rects, {
                                          placement: e.placement,
                                      })
                                  )
                                : y,
                        $ =
                            "number" == typeof L
                                ? { mainAxis: L, altAxis: L }
                                : Object.assign({ mainAxis: 0, altAxis: 0 }, L),
                        D = e.modifiersData.offset
                            ? e.modifiersData.offset[e.placement]
                            : null,
                        I = { x: 0, y: 0 };
                    if (O) {
                        if (o) {
                            var N,
                                P = "y" === x ? u : f,
                                M = "y" === x ? d : h,
                                j = "y" === x ? "height" : "width",
                                F = O[x],
                                H = F + w[P],
                                z = F - w[M],
                                q = b ? -S[j] / 2 : 0,
                                V = E === m ? k[j] : S[j],
                                U = E === m ? -S[j] : -k[j],
                                Y = e.elements.arrow,
                                K = b && Y ? X(Y) : { width: 0, height: 0 },
                                Q = e.modifiersData["arrow#persistent"]
                                    ? e.modifiersData["arrow#persistent"]
                                          .padding
                                    : { top: 0, right: 0, bottom: 0, left: 0 },
                                G = Q[P],
                                J = Q[M],
                                Z = it(0, k[j], K[j]),
                                tt = T
                                    ? k[j] / 2 - q - Z - G - $.mainAxis
                                    : V - Z - G - $.mainAxis,
                                st = T
                                    ? -k[j] / 2 + q + Z + J + $.mainAxis
                                    : U + Z + J + $.mainAxis,
                                ot = e.elements.arrow && et(e.elements.arrow),
                                rt = ot
                                    ? "y" === x
                                        ? ot.clientTop || 0
                                        : ot.clientLeft || 0
                                    : 0,
                                lt =
                                    null != (N = null == D ? void 0 : D[x])
                                        ? N
                                        : 0,
                                ct = F + st - lt,
                                ut = it(
                                    b ? R(H, F + tt - lt - rt) : H,
                                    F,
                                    b ? B(z, ct) : z
                                );
                            (O[x] = ut), (I[x] = ut - F);
                        }
                        if (a) {
                            var dt,
                                ht = "x" === x ? u : f,
                                ft = "x" === x ? d : h,
                                pt = O[C],
                                gt = "y" === C ? "height" : "width",
                                mt = pt + w[ht],
                                _t = pt - w[ft],
                                bt = -1 !== [u, f].indexOf(A),
                                vt =
                                    null != (dt = null == D ? void 0 : D[C])
                                        ? dt
                                        : 0,
                                yt = bt
                                    ? mt
                                    : pt - k[gt] - S[gt] - vt + $.altAxis,
                                wt = bt
                                    ? pt + k[gt] + S[gt] - vt - $.altAxis
                                    : _t,
                                At =
                                    b && bt
                                        ? (function (t, e, n) {
                                              var i = it(t, e, n);
                                              return i > n ? n : i;
                                          })(yt, pt, wt)
                                        : it(b ? yt : mt, pt, b ? wt : _t);
                            (O[C] = At), (I[C] = At - pt);
                        }
                        e.modifiersData[i] = I;
                    }
                },
                requiresIfExists: ["offset"],
            };
            function Nt(t, e, n) {
                void 0 === n && (n = !1);
                var i,
                    s,
                    o = F(e),
                    r =
                        F(e) &&
                        (function (t) {
                            var e = t.getBoundingClientRect(),
                                n = q(e.width) / t.offsetWidth || 1,
                                i = q(e.height) / t.offsetHeight || 1;
                            return 1 !== n || 1 !== i;
                        })(e),
                    a = J(e),
                    l = Y(t, r, n),
                    c = { scrollLeft: 0, scrollTop: 0 },
                    u = { x: 0, y: 0 };
                return (
                    (o || (!o && !n)) &&
                        (("body" !== P(e) || vt(a)) &&
                            (c =
                                (i = e) !== M(i) && F(i)
                                    ? {
                                          scrollLeft: (s = i).scrollLeft,
                                          scrollTop: s.scrollTop,
                                      }
                                    : _t(i)),
                        F(e)
                            ? (((u = Y(e, !0)).x += e.clientLeft),
                              (u.y += e.clientTop))
                            : a && (u.x = bt(a))),
                    {
                        x: l.left + c.scrollLeft - u.x,
                        y: l.top + c.scrollTop - u.y,
                        width: l.width,
                        height: l.height,
                    }
                );
            }
            function Pt(t) {
                var e = new Map(),
                    n = new Set(),
                    i = [];
                function s(t) {
                    n.add(t.name),
                        []
                            .concat(t.requires || [], t.requiresIfExists || [])
                            .forEach(function (t) {
                                if (!n.has(t)) {
                                    var i = e.get(t);
                                    i && s(i);
                                }
                            }),
                        i.push(t);
                }
                return (
                    t.forEach(function (t) {
                        e.set(t.name, t);
                    }),
                    t.forEach(function (t) {
                        n.has(t.name) || s(t);
                    }),
                    i
                );
            }
            var Mt = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute",
            };
            function jt() {
                for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                )
                    e[n] = arguments[n];
                return !e.some(function (t) {
                    return !(t && "function" == typeof t.getBoundingClientRect);
                });
            }
            function Ft(t) {
                void 0 === t && (t = {});
                var e = t,
                    n = e.defaultModifiers,
                    i = void 0 === n ? [] : n,
                    s = e.defaultOptions,
                    o = void 0 === s ? Mt : s;
                return function (t, e, n) {
                    void 0 === n && (n = o);
                    var s,
                        r,
                        a = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, Mt, o),
                            modifiersData: {},
                            elements: { reference: t, popper: e },
                            attributes: {},
                            styles: {},
                        },
                        l = [],
                        c = !1,
                        u = {
                            state: a,
                            setOptions: function (n) {
                                var s =
                                    "function" == typeof n ? n(a.options) : n;
                                d(),
                                    (a.options = Object.assign(
                                        {},
                                        o,
                                        a.options,
                                        s
                                    )),
                                    (a.scrollParents = {
                                        reference: j(t)
                                            ? wt(t)
                                            : t.contextElement
                                            ? wt(t.contextElement)
                                            : [],
                                        popper: wt(e),
                                    });
                                var r,
                                    c,
                                    h = (function (t) {
                                        var e = Pt(t);
                                        return N.reduce(function (t, n) {
                                            return t.concat(
                                                e.filter(function (t) {
                                                    return t.phase === n;
                                                })
                                            );
                                        }, []);
                                    })(
                                        ((r = [].concat(
                                            i,
                                            a.options.modifiers
                                        )),
                                        (c = r.reduce(function (t, e) {
                                            var n = t[e.name];
                                            return (
                                                (t[e.name] = n
                                                    ? Object.assign({}, n, e, {
                                                          options:
                                                              Object.assign(
                                                                  {},
                                                                  n.options,
                                                                  e.options
                                                              ),
                                                          data: Object.assign(
                                                              {},
                                                              n.data,
                                                              e.data
                                                          ),
                                                      })
                                                    : e),
                                                t
                                            );
                                        }, {})),
                                        Object.keys(c).map(function (t) {
                                            return c[t];
                                        }))
                                    );
                                return (
                                    (a.orderedModifiers = h.filter(function (
                                        t
                                    ) {
                                        return t.enabled;
                                    })),
                                    a.orderedModifiers.forEach(function (t) {
                                        var e = t.name,
                                            n = t.options,
                                            i = void 0 === n ? {} : n,
                                            s = t.effect;
                                        if ("function" == typeof s) {
                                            var o = s({
                                                    state: a,
                                                    name: e,
                                                    instance: u,
                                                    options: i,
                                                }),
                                                r = function () {};
                                            l.push(o || r);
                                        }
                                    }),
                                    u.update()
                                );
                            },
                            forceUpdate: function () {
                                if (!c) {
                                    var t = a.elements,
                                        e = t.reference,
                                        n = t.popper;
                                    if (jt(e, n)) {
                                        (a.rects = {
                                            reference: Nt(
                                                e,
                                                et(n),
                                                "fixed" === a.options.strategy
                                            ),
                                            popper: X(n),
                                        }),
                                            (a.reset = !1),
                                            (a.placement = a.options.placement),
                                            a.orderedModifiers.forEach(
                                                function (t) {
                                                    return (a.modifiersData[
                                                        t.name
                                                    ] = Object.assign(
                                                        {},
                                                        t.data
                                                    ));
                                                }
                                            );
                                        for (
                                            var i = 0;
                                            i < a.orderedModifiers.length;
                                            i++
                                        )
                                            if (!0 !== a.reset) {
                                                var s = a.orderedModifiers[i],
                                                    o = s.fn,
                                                    r = s.options,
                                                    l = void 0 === r ? {} : r,
                                                    d = s.name;
                                                "function" == typeof o &&
                                                    (a =
                                                        o({
                                                            state: a,
                                                            options: l,
                                                            name: d,
                                                            instance: u,
                                                        }) || a);
                                            } else (a.reset = !1), (i = -1);
                                    }
                                }
                            },
                            update:
                                ((s = function () {
                                    return new Promise(function (t) {
                                        u.forceUpdate(), t(a);
                                    });
                                }),
                                function () {
                                    return (
                                        r ||
                                            (r = new Promise(function (t) {
                                                Promise.resolve().then(
                                                    function () {
                                                        (r = void 0), t(s());
                                                    }
                                                );
                                            })),
                                        r
                                    );
                                }),
                            destroy: function () {
                                d(), (c = !0);
                            },
                        };
                    if (!jt(t, e)) return u;
                    function d() {
                        l.forEach(function (t) {
                            return t();
                        }),
                            (l = []);
                    }
                    return (
                        u.setOptions(n).then(function (t) {
                            !c && n.onFirstUpdate && n.onFirstUpdate(t);
                        }),
                        u
                    );
                };
            }
            var Ht = Ft(),
                zt = Ft({
                    defaultModifiers: [ht, Dt, ut, z, $t, Ot, It, rt, Lt],
                }),
                Wt = Ft({ defaultModifiers: [ht, Dt, ut, z] });
            /*!
             * Bootstrap v5.3.3 (https://getbootstrap.com/)
             * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             */
            const Bt = new Map(),
                Rt = {
                    set(t, e, n) {
                        Bt.has(t) || Bt.set(t, new Map());
                        const i = Bt.get(t);
                        i.has(e) || 0 === i.size
                            ? i.set(e, n)
                            : console.error(
                                  `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                                      Array.from(i.keys())[0]
                                  }.`
                              );
                    },
                    get: (t, e) => (Bt.has(t) && Bt.get(t).get(e)) || null,
                    remove(t, e) {
                        if (!Bt.has(t)) return;
                        const n = Bt.get(t);
                        n.delete(e), 0 === n.size && Bt.delete(t);
                    },
                },
                qt = "transitionend",
                Vt = (t) => (
                    t &&
                        window.CSS &&
                        window.CSS.escape &&
                        (t = t.replace(
                            /#([^\s"#']+)/g,
                            (t, e) => `#${CSS.escape(e)}`
                        )),
                    t
                ),
                Ut = (t) => {
                    t.dispatchEvent(new Event(qt));
                },
                Yt = (t) =>
                    !(!t || "object" != typeof t) &&
                    (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
                Xt = (t) =>
                    Yt(t)
                        ? t.jquery
                            ? t[0]
                            : t
                        : "string" == typeof t && t.length > 0
                        ? document.querySelector(Vt(t))
                        : null,
                Kt = (t) => {
                    if (!Yt(t) || 0 === t.getClientRects().length) return !1;
                    const e =
                            "visible" ===
                            getComputedStyle(t).getPropertyValue("visibility"),
                        n = t.closest("details:not([open])");
                    if (!n) return e;
                    if (n !== t) {
                        const e = t.closest("summary");
                        if (e && e.parentNode !== n) return !1;
                        if (null === e) return !1;
                    }
                    return e;
                },
                Qt = (t) =>
                    !t ||
                    t.nodeType !== Node.ELEMENT_NODE ||
                    !!t.classList.contains("disabled") ||
                    (void 0 !== t.disabled
                        ? t.disabled
                        : t.hasAttribute("disabled") &&
                          "false" !== t.getAttribute("disabled")),
                Gt = (t) => {
                    if (!document.documentElement.attachShadow) return null;
                    if ("function" == typeof t.getRootNode) {
                        const e = t.getRootNode();
                        return e instanceof ShadowRoot ? e : null;
                    }
                    return t instanceof ShadowRoot
                        ? t
                        : t.parentNode
                        ? Gt(t.parentNode)
                        : null;
                },
                Jt = () => {},
                Zt = (t) => {
                    t.offsetHeight;
                },
                te = () =>
                    window.jQuery &&
                    !document.body.hasAttribute("data-bs-no-jquery")
                        ? window.jQuery
                        : null,
                ee = [],
                ne = () => "rtl" === document.documentElement.dir,
                ie = (t) => {
                    var e;
                    (e = () => {
                        const e = te();
                        if (e) {
                            const n = t.NAME,
                                i = e.fn[n];
                            (e.fn[n] = t.jQueryInterface),
                                (e.fn[n].Constructor = t),
                                (e.fn[n].noConflict = () => (
                                    (e.fn[n] = i), t.jQueryInterface
                                ));
                        }
                    }),
                        "loading" === document.readyState
                            ? (ee.length ||
                                  document.addEventListener(
                                      "DOMContentLoaded",
                                      () => {
                                          for (const t of ee) t();
                                      }
                                  ),
                              ee.push(e))
                            : e();
                },
                se = (t, e = [], n = t) =>
                    "function" == typeof t ? t(...e) : n,
                oe = (t, e, n = !0) => {
                    if (!n) return void se(t);
                    const i =
                        ((t) => {
                            if (!t) return 0;
                            let { transitionDuration: e, transitionDelay: n } =
                                window.getComputedStyle(t);
                            const i = Number.parseFloat(e),
                                s = Number.parseFloat(n);
                            return i || s
                                ? ((e = e.split(",")[0]),
                                  (n = n.split(",")[0]),
                                  1e3 *
                                      (Number.parseFloat(e) +
                                          Number.parseFloat(n)))
                                : 0;
                        })(e) + 5;
                    let s = !1;
                    const o = ({ target: n }) => {
                        n === e &&
                            ((s = !0), e.removeEventListener(qt, o), se(t));
                    };
                    e.addEventListener(qt, o),
                        setTimeout(() => {
                            s || Ut(e);
                        }, i);
                },
                re = (t, e, n, i) => {
                    const s = t.length;
                    let o = t.indexOf(e);
                    return -1 === o
                        ? !n && i
                            ? t[s - 1]
                            : t[0]
                        : ((o += n ? 1 : -1),
                          i && (o = (o + s) % s),
                          t[Math.max(0, Math.min(o, s - 1))]);
                },
                ae = /[^.]*(?=\..*)\.|.*/,
                le = /\..*/,
                ce = /::\d+$/,
                ue = {};
            let de = 1;
            const he = { mouseenter: "mouseover", mouseleave: "mouseout" },
                fe = new Set([
                    "click",
                    "dblclick",
                    "mouseup",
                    "mousedown",
                    "contextmenu",
                    "mousewheel",
                    "DOMMouseScroll",
                    "mouseover",
                    "mouseout",
                    "mousemove",
                    "selectstart",
                    "selectend",
                    "keydown",
                    "keypress",
                    "keyup",
                    "orientationchange",
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                    "pointerdown",
                    "pointermove",
                    "pointerup",
                    "pointerleave",
                    "pointercancel",
                    "gesturestart",
                    "gesturechange",
                    "gestureend",
                    "focus",
                    "blur",
                    "change",
                    "reset",
                    "select",
                    "submit",
                    "focusin",
                    "focusout",
                    "load",
                    "unload",
                    "beforeunload",
                    "resize",
                    "move",
                    "DOMContentLoaded",
                    "readystatechange",
                    "error",
                    "abort",
                    "scroll",
                ]);
            function pe(t, e) {
                return (e && `${e}::${de++}`) || t.uidEvent || de++;
            }
            function ge(t) {
                const e = pe(t);
                return (t.uidEvent = e), (ue[e] = ue[e] || {}), ue[e];
            }
            function me(t, e, n = null) {
                return Object.values(t).find(
                    (t) => t.callable === e && t.delegationSelector === n
                );
            }
            function _e(t, e, n) {
                const i = "string" == typeof e,
                    s = i ? n : e || n;
                let o = we(t);
                return fe.has(o) || (o = t), [i, s, o];
            }
            function be(t, e, n, i, s) {
                if ("string" != typeof e || !t) return;
                let [o, r, a] = _e(e, n, i);
                if (e in he) {
                    const t = (t) =>
                        function (e) {
                            if (
                                !e.relatedTarget ||
                                (e.relatedTarget !== e.delegateTarget &&
                                    !e.delegateTarget.contains(e.relatedTarget))
                            )
                                return t.call(this, e);
                        };
                    r = t(r);
                }
                const l = ge(t),
                    c = l[a] || (l[a] = {}),
                    u = me(c, r, o ? n : null);
                if (u) return void (u.oneOff = u.oneOff && s);
                const d = pe(r, e.replace(ae, "")),
                    h = o
                        ? (function (t, e, n) {
                              return function i(s) {
                                  const o = t.querySelectorAll(e);
                                  for (
                                      let { target: r } = s;
                                      r && r !== this;
                                      r = r.parentNode
                                  )
                                      for (const a of o)
                                          if (a === r)
                                              return (
                                                  Ee(s, { delegateTarget: r }),
                                                  i.oneOff &&
                                                      Ae.off(t, s.type, e, n),
                                                  n.apply(r, [s])
                                              );
                              };
                          })(t, n, r)
                        : (function (t, e) {
                              return function n(i) {
                                  return (
                                      Ee(i, { delegateTarget: t }),
                                      n.oneOff && Ae.off(t, i.type, e),
                                      e.apply(t, [i])
                                  );
                              };
                          })(t, r);
                (h.delegationSelector = o ? n : null),
                    (h.callable = r),
                    (h.oneOff = s),
                    (h.uidEvent = d),
                    (c[d] = h),
                    t.addEventListener(a, h, o);
            }
            function ve(t, e, n, i, s) {
                const o = me(e[n], i, s);
                o &&
                    (t.removeEventListener(n, o, Boolean(s)),
                    delete e[n][o.uidEvent]);
            }
            function ye(t, e, n, i) {
                const s = e[n] || {};
                for (const [o, r] of Object.entries(s))
                    o.includes(i) &&
                        ve(t, e, n, r.callable, r.delegationSelector);
            }
            function we(t) {
                return (t = t.replace(le, "")), he[t] || t;
            }
            const Ae = {
                on(t, e, n, i) {
                    be(t, e, n, i, !1);
                },
                one(t, e, n, i) {
                    be(t, e, n, i, !0);
                },
                off(t, e, n, i) {
                    if ("string" != typeof e || !t) return;
                    const [s, o, r] = _e(e, n, i),
                        a = r !== e,
                        l = ge(t),
                        c = l[r] || {},
                        u = e.startsWith(".");
                    if (void 0 === o) {
                        if (u)
                            for (const n of Object.keys(l))
                                ye(t, l, n, e.slice(1));
                        for (const [n, i] of Object.entries(c)) {
                            const s = n.replace(ce, "");
                            (a && !e.includes(s)) ||
                                ve(t, l, r, i.callable, i.delegationSelector);
                        }
                    } else {
                        if (!Object.keys(c).length) return;
                        ve(t, l, r, o, s ? n : null);
                    }
                },
                trigger(t, e, n) {
                    if ("string" != typeof e || !t) return null;
                    const i = te();
                    let s = null,
                        o = !0,
                        r = !0,
                        a = !1;
                    e !== we(e) &&
                        i &&
                        ((s = i.Event(e, n)),
                        i(t).trigger(s),
                        (o = !s.isPropagationStopped()),
                        (r = !s.isImmediatePropagationStopped()),
                        (a = s.isDefaultPrevented()));
                    const l = Ee(
                        new Event(e, { bubbles: o, cancelable: !0 }),
                        n
                    );
                    return (
                        a && l.preventDefault(),
                        r && t.dispatchEvent(l),
                        l.defaultPrevented && s && s.preventDefault(),
                        l
                    );
                },
            };
            function Ee(t, e = {}) {
                for (const [n, i] of Object.entries(e))
                    try {
                        t[n] = i;
                    } catch (e) {
                        Object.defineProperty(t, n, {
                            configurable: !0,
                            get: () => i,
                        });
                    }
                return t;
            }
            function Te(t) {
                if ("true" === t) return !0;
                if ("false" === t) return !1;
                if (t === Number(t).toString()) return Number(t);
                if ("" === t || "null" === t) return null;
                if ("string" != typeof t) return t;
                try {
                    return JSON.parse(decodeURIComponent(t));
                } catch (e) {
                    return t;
                }
            }
            function xe(t) {
                return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
            }
            const Ce = {
                setDataAttribute(t, e, n) {
                    t.setAttribute(`data-bs-${xe(e)}`, n);
                },
                removeDataAttribute(t, e) {
                    t.removeAttribute(`data-bs-${xe(e)}`);
                },
                getDataAttributes(t) {
                    if (!t) return {};
                    const e = {},
                        n = Object.keys(t.dataset).filter(
                            (t) =>
                                t.startsWith("bs") && !t.startsWith("bsConfig")
                        );
                    for (const i of n) {
                        let n = i.replace(/^bs/, "");
                        (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
                            (e[n] = Te(t.dataset[i]));
                    }
                    return e;
                },
                getDataAttribute: (t, e) =>
                    Te(t.getAttribute(`data-bs-${xe(e)}`)),
            };
            class Oe {
                static get Default() {
                    return {};
                }
                static get DefaultType() {
                    return {};
                }
                static get NAME() {
                    throw new Error(
                        'You have to implement the static method "NAME", for each component!'
                    );
                }
                _getConfig(t) {
                    return (
                        (t = this._mergeConfigObj(t)),
                        (t = this._configAfterMerge(t)),
                        this._typeCheckConfig(t),
                        t
                    );
                }
                _configAfterMerge(t) {
                    return t;
                }
                _mergeConfigObj(t, e) {
                    const n = Yt(e) ? Ce.getDataAttribute(e, "config") : {};
                    return {
                        ...this.constructor.Default,
                        ...("object" == typeof n ? n : {}),
                        ...(Yt(e) ? Ce.getDataAttributes(e) : {}),
                        ...("object" == typeof t ? t : {}),
                    };
                }
                _typeCheckConfig(t, e = this.constructor.DefaultType) {
                    for (const [i, s] of Object.entries(e)) {
                        const e = t[i],
                            o = Yt(e)
                                ? "element"
                                : null == (n = e)
                                ? `${n}`
                                : Object.prototype.toString
                                      .call(n)
                                      .match(/\s([a-z]+)/i)[1]
                                      .toLowerCase();
                        if (!new RegExp(s).test(o))
                            throw new TypeError(
                                `${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${s}".`
                            );
                    }
                    var n;
                }
            }
            class ke extends Oe {
                constructor(t, e) {
                    super(),
                        (t = Xt(t)) &&
                            ((this._element = t),
                            (this._config = this._getConfig(e)),
                            Rt.set(
                                this._element,
                                this.constructor.DATA_KEY,
                                this
                            ));
                }
                dispose() {
                    Rt.remove(this._element, this.constructor.DATA_KEY),
                        Ae.off(this._element, this.constructor.EVENT_KEY);
                    for (const t of Object.getOwnPropertyNames(this))
                        this[t] = null;
                }
                _queueCallback(t, e, n = !0) {
                    oe(t, e, n);
                }
                _getConfig(t) {
                    return (
                        (t = this._mergeConfigObj(t, this._element)),
                        (t = this._configAfterMerge(t)),
                        this._typeCheckConfig(t),
                        t
                    );
                }
                static getInstance(t) {
                    return Rt.get(Xt(t), this.DATA_KEY);
                }
                static getOrCreateInstance(t, e = {}) {
                    return (
                        this.getInstance(t) ||
                        new this(t, "object" == typeof e ? e : null)
                    );
                }
                static get VERSION() {
                    return "5.3.3";
                }
                static get DATA_KEY() {
                    return `bs.${this.NAME}`;
                }
                static get EVENT_KEY() {
                    return `.${this.DATA_KEY}`;
                }
                static eventName(t) {
                    return `${t}${this.EVENT_KEY}`;
                }
            }
            const Se = (t) => {
                    let e = t.getAttribute("data-bs-target");
                    if (!e || "#" === e) {
                        let n = t.getAttribute("href");
                        if (!n || (!n.includes("#") && !n.startsWith(".")))
                            return null;
                        n.includes("#") &&
                            !n.startsWith("#") &&
                            (n = `#${n.split("#")[1]}`),
                            (e = n && "#" !== n ? n.trim() : null);
                    }
                    return e
                        ? e
                              .split(",")
                              .map((t) => Vt(t))
                              .join(",")
                        : null;
                },
                Le = {
                    find: (t, e = document.documentElement) =>
                        [].concat(
                            ...Element.prototype.querySelectorAll.call(e, t)
                        ),
                    findOne: (t, e = document.documentElement) =>
                        Element.prototype.querySelector.call(e, t),
                    children: (t, e) =>
                        [].concat(...t.children).filter((t) => t.matches(e)),
                    parents(t, e) {
                        const n = [];
                        let i = t.parentNode.closest(e);
                        for (; i; ) n.push(i), (i = i.parentNode.closest(e));
                        return n;
                    },
                    prev(t, e) {
                        let n = t.previousElementSibling;
                        for (; n; ) {
                            if (n.matches(e)) return [n];
                            n = n.previousElementSibling;
                        }
                        return [];
                    },
                    next(t, e) {
                        let n = t.nextElementSibling;
                        for (; n; ) {
                            if (n.matches(e)) return [n];
                            n = n.nextElementSibling;
                        }
                        return [];
                    },
                    focusableChildren(t) {
                        const e = [
                            "a",
                            "button",
                            "input",
                            "textarea",
                            "select",
                            "details",
                            "[tabindex]",
                            '[contenteditable="true"]',
                        ]
                            .map((t) => `${t}:not([tabindex^="-"])`)
                            .join(",");
                        return this.find(e, t).filter((t) => !Qt(t) && Kt(t));
                    },
                    getSelectorFromElement(t) {
                        const e = Se(t);
                        return e && Le.findOne(e) ? e : null;
                    },
                    getElementFromSelector(t) {
                        const e = Se(t);
                        return e ? Le.findOne(e) : null;
                    },
                    getMultipleElementsFromSelector(t) {
                        const e = Se(t);
                        return e ? Le.find(e) : [];
                    },
                },
                $e = (t, e = "hide") => {
                    const n = `click.dismiss${t.EVENT_KEY}`,
                        i = t.NAME;
                    Ae.on(
                        document,
                        n,
                        `[data-bs-dismiss="${i}"]`,
                        function (n) {
                            if (
                                (["A", "AREA"].includes(this.tagName) &&
                                    n.preventDefault(),
                                Qt(this))
                            )
                                return;
                            const s =
                                Le.getElementFromSelector(this) ||
                                this.closest(`.${i}`);
                            t.getOrCreateInstance(s)[e]();
                        }
                    );
                },
                De = ".bs.alert",
                Ie = `close${De}`,
                Ne = `closed${De}`;
            class Pe extends ke {
                static get NAME() {
                    return "alert";
                }
                close() {
                    if (Ae.trigger(this._element, Ie).defaultPrevented) return;
                    this._element.classList.remove("show");
                    const t = this._element.classList.contains("fade");
                    this._queueCallback(
                        () => this._destroyElement(),
                        this._element,
                        t
                    );
                }
                _destroyElement() {
                    this._element.remove(),
                        Ae.trigger(this._element, Ne),
                        this.dispose();
                }
                static jQueryInterface(t) {
                    return this.each(function () {
                        const e = Pe.getOrCreateInstance(this);
                        if ("string" == typeof t) {
                            if (
                                void 0 === e[t] ||
                                t.startsWith("_") ||
                                "constructor" === t
                            )
                                throw new TypeError(`No method named "${t}"`);
                            e[t](this);
                        }
                    });
                }
            }
            $e(Pe, "close"), ie(Pe);
            const Me = '[data-bs-toggle="button"]';
            class je extends ke {
                static get NAME() {
                    return "button";
                }
                toggle() {
                    this._element.setAttribute(
                        "aria-pressed",
                        this._element.classList.toggle("active")
                    );
                }
                static jQueryInterface(t) {
                    return this.each(function () {
                        const e = je.getOrCreateInstance(this);
                        "toggle" === t && e[t]();
                    });
                }
            }
            Ae.on(document, "click.bs.button.data-api", Me, (t) => {
                t.preventDefault();
                const e = t.target.closest(Me);
                je.getOrCreateInstance(e).toggle();
            }),
                ie(je);
            const Fe = ".bs.swipe",
                He = `touchstart${Fe}`,
                ze = `touchmove${Fe}`,
                We = `touchend${Fe}`,
                Be = `pointerdown${Fe}`,
                Re = `pointerup${Fe}`,
                qe = {
                    endCallback: null,
                    leftCallback: null,
                    rightCallback: null,
                },
                Ve = {
                    endCallback: "(function|null)",
                    leftCallback: "(function|null)",
                    rightCallback: "(function|null)",
                };
            class Ue extends Oe {
                constructor(t, e) {
                    super(),
                        (this._element = t),
                        t &&
                            Ue.isSupported() &&
                            ((this._config = this._getConfig(e)),
                            (this._deltaX = 0),
                            (this._supportPointerEvents = Boolean(
                                window.PointerEvent
                            )),
                            this._initEvents());
                }
                static get Default() {
                    return qe;
                }
                static get DefaultType() {
                    return Ve;
                }
                static get NAME() {
                    return "swipe";
                }
                dispose() {
                    Ae.off(this._element, Fe);
                }
                _start(t) {
                    this._supportPointerEvents
                        ? this._eventIsPointerPenTouch(t) &&
                          (this._deltaX = t.clientX)
                        : (this._deltaX = t.touches[0].clientX);
                }
                _end(t) {
                    this._eventIsPointerPenTouch(t) &&
                        (this._deltaX = t.clientX - this._deltaX),
                        this._handleSwipe(),
                        se(this._config.endCallback);
                }
                _move(t) {
                    this._deltaX =
                        t.touches && t.touches.length > 1
                            ? 0
                            : t.touches[0].clientX - this._deltaX;
                }
                _handleSwipe() {
                    const t = Math.abs(this._deltaX);
                    if (t <= 40) return;
                    const e = t / this._deltaX;
                    (this._deltaX = 0),
                        e &&
                            se(
                                e > 0
                                    ? this._config.rightCallback
                                    : this._config.leftCallback
                            );
                }
                _initEvents() {
                    this._supportPointerEvents
                        ? (Ae.on(this._element, Be, (t) => this._start(t)),
                          Ae.on(this._element, Re, (t) => this._end(t)),
                          this._element.classList.add("pointer-event"))
                        : (Ae.on(this._element, He, (t) => this._start(t)),
                          Ae.on(this._element, ze, (t) => this._move(t)),
                          Ae.on(this._element, We, (t) => this._end(t)));
                }
                _eventIsPointerPenTouch(t) {
                    return (
                        this._supportPointerEvents &&
                        ("pen" === t.pointerType || "touch" === t.pointerType)
                    );
                }
                static isSupported() {
                    return (
                        "ontouchstart" in document.documentElement ||
                        navigator.maxTouchPoints > 0
                    );
                }
            }
            const Ye = ".bs.carousel",
                Xe = ".data-api",
                Ke = "ArrowLeft",
                Qe = "ArrowRight",
                Ge = "next",
                Je = "prev",
                Ze = "left",
                tn = "right",
                en = `slide${Ye}`,
                nn = `slid${Ye}`,
                sn = `keydown${Ye}`,
                on = `mouseenter${Ye}`,
                rn = `mouseleave${Ye}`,
                an = `dragstart${Ye}`,
                ln = `load${Ye}${Xe}`,
                cn = `click${Ye}${Xe}`,
                un = "carousel",
                dn = "active",
                hn = ".active",
                fn = ".carousel-item",
                pn = hn + fn,
                gn = { [Ke]: tn, [Qe]: Ze },
                mn = {
                    interval: 5e3,
                    keyboard: !0,
                    pause: "hover",
                    ride: !1,
                    touch: !0,
                    wrap: !0,
                },
                _n = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    pause: "(string|boolean)",
                    ride: "(boolean|string)",
                    touch: "boolean",
                    wrap: "boolean",
                };
            class bn extends ke {
                constructor(t, e) {
                    super(t, e),
                        (this._interval = null),
                        (this._activeElement = null),
                        (this._isSliding = !1),
                        (this.touchTimeout = null),
                        (this._swipeHelper = null),
                        (this._indicatorsElement = Le.findOne(
                            ".carousel-indicators",
                            this._element
                        )),
                        this._addEventListeners(),
                        this._config.ride === un && this.cycle();
                }
                static get Default() {
                    return mn;
                }
                static get DefaultType() {
                    return _n;
                }
                static get NAME() {
                    return "carousel";
                }
                next() {
                    this._slide(Ge);
                }
                nextWhenVisible() {
                    !document.hidden && Kt(this._element) && this.next();
                }
                prev() {
                    this._slide(Je);
                }
                pause() {
                    this._isSliding && Ut(this._element), this._clearInterval();
                }
                cycle() {
                    this._clearInterval(),
                        this._updateInterval(),
                        (this._interval = setInterval(
                            () => this.nextWhenVisible(),
                            this._config.interval
                        ));
                }
                _maybeEnableCycle() {
                    this._config.ride &&
                        (this._isSliding
                            ? Ae.one(this._element, nn, () => this.cycle())
                            : this.cycle());
                }
                to(t) {
                    const e = this._getItems();
                    if (t > e.length - 1 || t < 0) return;
                    if (this._isSliding)
                        return void Ae.one(this._element, nn, () => this.to(t));
                    const n = this._getItemIndex(this._getActive());
                    if (n === t) return;
                    const i = t > n ? Ge : Je;
                    this._slide(i, e[t]);
                }
                dispose() {
                    this._swipeHelper && this._swipeHelper.dispose(),
                        super.dispose();
                }
                _configAfterMerge(t) {
                    return (t.defaultInterval = t.interval), t;
                }
                _addEventListeners() {
                    this._config.keyboard &&
                        Ae.on(this._element, sn, (t) => this._keydown(t)),
                        "hover" === this._config.pause &&
                            (Ae.on(this._element, on, () => this.pause()),
                            Ae.on(this._element, rn, () =>
                                this._maybeEnableCycle()
                            )),
                        this._config.touch &&
                            Ue.isSupported() &&
                            this._addTouchEventListeners();
                }
                _addTouchEventListeners() {
                    for (const t of Le.find(
                        ".carousel-item img",
                        this._element
                    ))
                        Ae.on(t, an, (t) => t.preventDefault());
                    const t = {
                        leftCallback: () =>
                            this._slide(this._directionToOrder(Ze)),
                        rightCallback: () =>
                            this._slide(this._directionToOrder(tn)),
                        endCallback: () => {
                            "hover" === this._config.pause &&
                                (this.pause(),
                                this.touchTimeout &&
                                    clearTimeout(this.touchTimeout),
                                (this.touchTimeout = setTimeout(
                                    () => this._maybeEnableCycle(),
                                    500 + this._config.interval
                                )));
                        },
                    };
                    this._swipeHelper = new Ue(this._element, t);
                }
                _keydown(t) {
                    if (/input|textarea/i.test(t.target.tagName)) return;
                    const e = gn[t.key];
                    e &&
                        (t.preventDefault(),
                        this._slide(this._directionToOrder(e)));
                }
                _getItemIndex(t) {
                    return this._getItems().indexOf(t);
                }
                _setActiveIndicatorElement(t) {
                    if (!this._indicatorsElement) return;
                    const e = Le.findOne(hn, this._indicatorsElement);
                    e.classList.remove(dn), e.removeAttribute("aria-current");
                    const n = Le.findOne(
                        `[data-bs-slide-to="${t}"]`,
                        this._indicatorsElement
                    );
                    n &&
                        (n.classList.add(dn),
                        n.setAttribute("aria-current", "true"));
                }
                _updateInterval() {
                    const t = this._activeElement || this._getActive();
                    if (!t) return;
                    const e = Number.parseInt(
                        t.getAttribute("data-bs-interval"),
                        10
                    );
                    this._config.interval = e || this._config.defaultInterval;
                }
                _slide(t, e = null) {
                    if (this._isSliding) return;
                    const n = this._getActive(),
                        i = t === Ge,
                        s = e || re(this._getItems(), n, i, this._config.wrap);
                    if (s === n) return;
                    const o = this._getItemIndex(s),
                        r = (e) =>
                            Ae.trigger(this._element, e, {
                                relatedTarget: s,
                                direction: this._orderToDirection(t),
                                from: this._getItemIndex(n),
                                to: o,
                            });
                    if (r(en).defaultPrevented) return;
                    if (!n || !s) return;
                    const a = Boolean(this._interval);
                    this.pause(),
                        (this._isSliding = !0),
                        this._setActiveIndicatorElement(o),
                        (this._activeElement = s);
                    const l = i ? "carousel-item-start" : "carousel-item-end",
                        c = i ? "carousel-item-next" : "carousel-item-prev";
                    s.classList.add(c),
                        Zt(s),
                        n.classList.add(l),
                        s.classList.add(l);
                    this._queueCallback(
                        () => {
                            s.classList.remove(l, c),
                                s.classList.add(dn),
                                n.classList.remove(dn, c, l),
                                (this._isSliding = !1),
                                r(nn);
                        },
                        n,
                        this._isAnimated()
                    ),
                        a && this.cycle();
                }
                _isAnimated() {
                    return this._element.classList.contains("slide");
                }
                _getActive() {
                    return Le.findOne(pn, this._element);
                }
                _getItems() {
                    return Le.find(fn, this._element);
                }
                _clearInterval() {
                    this._interval &&
                        (clearInterval(this._interval),
                        (this._interval = null));
                }
                _directionToOrder(t) {
                    return ne() ? (t === Ze ? Je : Ge) : t === Ze ? Ge : Je;
                }
                _orderToDirection(t) {
                    return ne() ? (t === Je ? Ze : tn) : t === Je ? tn : Ze;
                }
                static jQueryInterface(t) {
                    return this.each(function () {
                        const e = bn.getOrCreateInstance(this, t);
                        if ("number" != typeof t) {
                            if ("string" == typeof t) {
                                if (
                                    void 0 === e[t] ||
                                    t.startsWith("_") ||
                                    "constructor" === t
                                )
                                    throw new TypeError(
                                        `No method named "${t}"`
                                    );
                                e[t]();
                            }
                        } else e.to(t);
                    });
                }
            }
            Ae.on(
                document,
                cn,
                "[data-bs-slide], [data-bs-slide-to]",
                function (t) {
                    const e = Le.getElementFromSelector(this);
                    if (!e || !e.classList.contains(un)) return;
                    t.preventDefault();
                    const n = bn.getOrCreateInstance(e),
                        i = this.getAttribute("data-bs-slide-to");
                    return i
                        ? (n.to(i), void n._maybeEnableCycle())
                        : "next" === Ce.getDataAttribute(this, "slide")
                        ? (n.next(), void n._maybeEnableCycle())
                        : (n.prev(), void n._maybeEnableCycle());
                }
            ),
                Ae.on(window, ln, () => {
                    const t = Le.find('[data-bs-ride="carousel"]');
                    for (const e of t) bn.getOrCreateInstance(e);
                }),
                ie(bn);
            const vn = ".bs.collapse",
                yn = `show${vn}`,
                wn = `shown${vn}`,
                An = `hide${vn}`,
                En = `hidden${vn}`,
                Tn = `click${vn}.data-api`,
                xn = "show",
                Cn = "collapse",
                On = "collapsing",
                kn = `:scope .${Cn} .${Cn}`,
                Sn = '[data-bs-toggle="collapse"]',
                Ln = { parent: null, toggle: !0 },
                $n = { parent: "(null|element)", toggle: "boolean" };
            class Dn extends ke {
                constructor(t, e) {
                    super(t, e),
                        (this._isTransitioning = !1),
                        (this._triggerArray = []);
                    const n = Le.find(Sn);
                    for (const t of n) {
                        const e = Le.getSelectorFromElement(t),
                            n = Le.find(e).filter((t) => t === this._element);
                        null !== e && n.length && this._triggerArray.push(t);
                    }
                    this._initializeChildren(),
                        this._config.parent ||
                            this._addAriaAndCollapsedClass(
                                this._triggerArray,
                                this._isShown()
                            ),
                        this._config.toggle && this.toggle();
                }
                static get Default() {
                    return Ln;
                }
                static get DefaultType() {
                    return $n;
                }
                static get NAME() {
                    return "collapse";
                }
                toggle() {
                    this._isShown() ? this.hide() : this.show();
                }
                show() {
                    if (this._isTransitioning || this._isShown()) return;
                    let t = [];
                    if (
                        (this._config.parent &&
                            (t = this._getFirstLevelChildren(
                                ".collapse.show, .collapse.collapsing"
                            )
                                .filter((t) => t !== this._element)
                                .map((t) =>
                                    Dn.getOrCreateInstance(t, { toggle: !1 })
                                )),
                        t.length && t[0]._isTransitioning)
                    )
                        return;
                    if (Ae.trigger(this._element, yn).defaultPrevented) return;
                    for (const e of t) e.hide();
                    const e = this._getDimension();
                    this._element.classList.remove(Cn),
                        this._element.classList.add(On),
                        (this._element.style[e] = 0),
                        this._addAriaAndCollapsedClass(this._triggerArray, !0),
                        (this._isTransitioning = !0);
                    const n = `scroll${e[0].toUpperCase() + e.slice(1)}`;
                    this._queueCallback(
                        () => {
                            (this._isTransitioning = !1),
                                this._element.classList.remove(On),
                                this._element.classList.add(Cn, xn),
                                (this._element.style[e] = ""),
                                Ae.trigger(this._element, wn);
                        },
                        this._element,
                        !0
                    ),
                        (this._element.style[e] = `${this._element[n]}px`);
                }
                hide() {
                    if (this._isTransitioning || !this._isShown()) return;
                    if (Ae.trigger(this._element, An).defaultPrevented) return;
                    const t = this._getDimension();
                    (this._element.style[t] = `${
                        this._element.getBoundingClientRect()[t]
                    }px`),
                        Zt(this._element),
                        this._element.classList.add(On),
                        this._element.classList.remove(Cn, xn);
                    for (const t of this._triggerArray) {
                        const e = Le.getElementFromSelector(t);
                        e &&
                            !this._isShown(e) &&
                            this._addAriaAndCollapsedClass([t], !1);
                    }
                    this._isTransitioning = !0;
                    (this._element.style[t] = ""),
                        this._queueCallback(
                            () => {
                                (this._isTransitioning = !1),
                                    this._element.classList.remove(On),
                                    this._element.classList.add(Cn),
                                    Ae.trigger(this._element, En);
                            },
                            this._element,
                            !0
                        );
                }
                _isShown(t = this._element) {
                    return t.classList.contains(xn);
                }
                _configAfterMerge(t) {
                    return (
                        (t.toggle = Boolean(t.toggle)),
                        (t.parent = Xt(t.parent)),
                        t
                    );
                }
                _getDimension() {
                    return this._element.classList.contains(
                        "collapse-horizontal"
                    )
                        ? "width"
                        : "height";
                }
                _initializeChildren() {
                    if (!this._config.parent) return;
                    const t = this._getFirstLevelChildren(Sn);
                    for (const e of t) {
                        const t = Le.getElementFromSelector(e);
                        t &&
                            this._addAriaAndCollapsedClass(
                                [e],
                                this._isShown(t)
                            );
                    }
                }
                _getFirstLevelChildren(t) {
                    const e = Le.find(kn, this._config.parent);
                    return Le.find(t, this._config.parent).filter(
                        (t) => !e.includes(t)
                    );
                }
                _addAriaAndCollapsedClass(t, e) {
                    if (t.length)
                        for (const n of t)
                            n.classList.toggle("collapsed", !e),
                                n.setAttribute("aria-expanded", e);
                }
                static jQueryInterface(t) {
                    const e = {};
                    return (
                        "string" == typeof t &&
                            /show|hide/.test(t) &&
                            (e.toggle = !1),
                        this.each(function () {
                            const n = Dn.getOrCreateInstance(this, e);
                            if ("string" == typeof t) {
                                if (void 0 === n[t])
                                    throw new TypeError(
                                        `No method named "${t}"`
                                    );
                                n[t]();
                            }
                        })
                    );
                }
            }
            Ae.on(document, Tn, Sn, function (t) {
                ("A" === t.target.tagName ||
                    (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
                    t.preventDefault();
                for (const t of Le.getMultipleElementsFromSelector(this))
                    Dn.getOrCreateInstance(t, { toggle: !1 }).toggle();
            }),
                ie(Dn);
            const In = "dropdown",
                Nn = ".bs.dropdown",
                Pn = ".data-api",
                Mn = "ArrowUp",
                jn = "ArrowDown",
                Fn = `hide${Nn}`,
                Hn = `hidden${Nn}`,
                zn = `show${Nn}`,
                Wn = `shown${Nn}`,
                Bn = `click${Nn}${Pn}`,
                Rn = `keydown${Nn}${Pn}`,
                qn = `keyup${Nn}${Pn}`,
                Vn = "show",
                Un =
                    '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
                Yn = `${Un}.${Vn}`,
                Xn = ".dropdown-menu",
                Kn = ne() ? "top-end" : "top-start",
                Qn = ne() ? "top-start" : "top-end",
                Gn = ne() ? "bottom-end" : "bottom-start",
                Jn = ne() ? "bottom-start" : "bottom-end",
                Zn = ne() ? "left-start" : "right-start",
                ti = ne() ? "right-start" : "left-start",
                ei = {
                    autoClose: !0,
                    boundary: "clippingParents",
                    display: "dynamic",
                    offset: [0, 2],
                    popperConfig: null,
                    reference: "toggle",
                },
                ni = {
                    autoClose: "(boolean|string)",
                    boundary: "(string|element)",
                    display: "string",
                    offset: "(array|string|function)",
                    popperConfig: "(null|object|function)",
                    reference: "(string|element|object)",
                };
            class ii extends ke {
                constructor(t, e) {
                    super(t, e),
                        (this._popper = null),
                        (this._parent = this._element.parentNode),
                        (this._menu =
                            Le.next(this._element, Xn)[0] ||
                            Le.prev(this._element, Xn)[0] ||
                            Le.findOne(Xn, this._parent)),
                        (this._inNavbar = this._detectNavbar());
                }
                static get Default() {
                    return ei;
                }
                static get DefaultType() {
                    return ni;
                }
                static get NAME() {
                    return In;
                }
                toggle() {
                    return this._isShown() ? this.hide() : this.show();
                }
                show() {
                    if (Qt(this._element) || this._isShown()) return;
                    const t = { relatedTarget: this._element };
                    if (!Ae.trigger(this._element, zn, t).defaultPrevented) {
                        if (
                            (this._createPopper(),
                            "ontouchstart" in document.documentElement &&
                                !this._parent.closest(".navbar-nav"))
                        )
                            for (const t of [].concat(
                                ...document.body.children
                            ))
                                Ae.on(t, "mouseover", Jt);
                        this._element.focus(),
                            this._element.setAttribute("aria-expanded", !0),
                            this._menu.classList.add(Vn),
                            this._element.classList.add(Vn),
                            Ae.trigger(this._element, Wn, t);
                    }
                }
                hide() {
                    if (Qt(this._element) || !this._isShown()) return;
                    const t = { relatedTarget: this._element };
                    this._completeHide(t);
                }
                dispose() {
                    this._popper && this._popper.destroy(), super.dispose();
                }
                update() {
                    (this._inNavbar = this._detectNavbar()),
                        this._popper && this._popper.update();
                }
                _completeHide(t) {
                    if (!Ae.trigger(this._element, Fn, t).defaultPrevented) {
                        if ("ontouchstart" in document.documentElement)
                            for (const t of [].concat(
                                ...document.body.children
                            ))
                                Ae.off(t, "mouseover", Jt);
                        this._popper && this._popper.destroy(),
                            this._menu.classList.remove(Vn),
                            this._element.classList.remove(Vn),
                            this._element.setAttribute(
                                "aria-expanded",
                                "false"
                            ),
                            Ce.removeDataAttribute(this._menu, "popper"),
                            Ae.trigger(this._element, Hn, t);
                    }
                }
                _getConfig(t) {
                    if (
                        "object" ==
                            typeof (t = super._getConfig(t)).reference &&
                        !Yt(t.reference) &&
                        "function" != typeof t.reference.getBoundingClientRect
                    )
                        throw new TypeError(
                            `${In.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
                        );
                    return t;
                }
                _createPopper() {
                    if (void 0 === t)
                        throw new TypeError(
                            "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                        );
                    let e = this._element;
                    "parent" === this._config.reference
                        ? (e = this._parent)
                        : Yt(this._config.reference)
                        ? (e = Xt(this._config.reference))
                        : "object" == typeof this._config.reference &&
                          (e = this._config.reference);
                    const n = this._getPopperConfig();
                    this._popper = zt(e, this._menu, n);
                }
                _isShown() {
                    return this._menu.classList.contains(Vn);
                }
                _getPlacement() {
                    const t = this._parent;
                    if (t.classList.contains("dropend")) return Zn;
                    if (t.classList.contains("dropstart")) return ti;
                    if (t.classList.contains("dropup-center")) return "top";
                    if (t.classList.contains("dropdown-center"))
                        return "bottom";
                    const e =
                        "end" ===
                        getComputedStyle(this._menu)
                            .getPropertyValue("--bs-position")
                            .trim();
                    return t.classList.contains("dropup")
                        ? e
                            ? Qn
                            : Kn
                        : e
                        ? Jn
                        : Gn;
                }
                _detectNavbar() {
                    return null !== this._element.closest(".navbar");
                }
                _getOffset() {
                    const { offset: t } = this._config;
                    return "string" == typeof t
                        ? t.split(",").map((t) => Number.parseInt(t, 10))
                        : "function" == typeof t
                        ? (e) => t(e, this._element)
                        : t;
                }
                _getPopperConfig() {
                    const t = {
                        placement: this._getPlacement(),
                        modifiers: [
                            {
                                name: "preventOverflow",
                                options: { boundary: this._config.boundary },
                            },
                            {
                                name: "offset",
                                options: { offset: this._getOffset() },
                            },
                        ],
                    };
                    return (
                        (this._inNavbar || "static" === this._config.display) &&
                            (Ce.setDataAttribute(
                                this._menu,
                                "popper",
                                "static"
                            ),
                            (t.modifiers = [
                                { name: "applyStyles", enabled: !1 },
                            ])),
                        { ...t, ...se(this._config.popperConfig, [t]) }
                    );
                }
                _selectMenuItem({ key: t, target: e }) {
                    const n = Le.find(
                        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                        this._menu
                    ).filter((t) => Kt(t));
                    n.length && re(n, e, t === jn, !n.includes(e)).focus();
                }
                static jQueryInterface(t) {
                    return this.each(function () {
                        const e = ii.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t])
                                throw new TypeError(`No method named "${t}"`);
                            e[t]();
                        }
                    });
                }
                static clearMenus(t) {
                    if (
                        2 === t.button ||
                        ("keyup" === t.type && "Tab" !== t.key)
                    )
                        return;
                    const e = Le.find(Yn);
                    for (const n of e) {
                        const e = ii.getInstance(n);
                        if (!e || !1 === e._config.autoClose) continue;
                        const i = t.composedPath(),
                            s = i.includes(e._menu);
                        if (
                            i.includes(e._element) ||
                            ("inside" === e._config.autoClose && !s) ||
                            ("outside" === e._config.autoClose && s)
                        )
                            continue;
                        if (
                            e._menu.contains(t.target) &&
                            (("keyup" === t.type && "Tab" === t.key) ||
                                /input|select|option|textarea|form/i.test(
                                    t.target.tagName
                                ))
                        )
                            continue;
                        const o = { relatedTarget: e._element };
                        "click" === t.type && (o.clickEvent = t),
                            e._completeHide(o);
                    }
                }
                static dataApiKeydownHandler(t) {
                    const e = /input|textarea/i.test(t.target.tagName),
                        n = "Escape" === t.key,
                        i = [Mn, jn].includes(t.key);
                    if (!i && !n) return;
                    if (e && !n) return;
                    t.preventDefault();
                    const s = this.matches(Un)
                            ? this
                            : Le.prev(this, Un)[0] ||
                              Le.next(this, Un)[0] ||
                              Le.findOne(Un, t.delegateTarget.parentNode),
                        o = ii.getOrCreateInstance(s);
                    if (i)
                        return (
                            t.stopPropagation(),
                            o.show(),
                            void o._selectMenuItem(t)
                        );
                    o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
                }
            }
            Ae.on(document, Rn, Un, ii.dataApiKeydownHandler),
                Ae.on(document, Rn, Xn, ii.dataApiKeydownHandler),
                Ae.on(document, Bn, ii.clearMenus),
                Ae.on(document, qn, ii.clearMenus),
                Ae.on(document, Bn, Un, function (t) {
                    t.preventDefault(), ii.getOrCreateInstance(this).toggle();
                }),
                ie(ii);
            const si = "backdrop",
                oi = "show",
                ri = `mousedown.bs.${si}`,
                ai = {
                    className: "modal-backdrop",
                    clickCallback: null,
                    isAnimated: !1,
                    isVisible: !0,
                    rootElement: "body",
                },
                li = {
                    className: "string",
                    clickCallback: "(function|null)",
                    isAnimated: "boolean",
                    isVisible: "boolean",
                    rootElement: "(element|string)",
                };
            class ci extends Oe {
                constructor(t) {
                    super(),
                        (this._config = this._getConfig(t)),
                        (this._isAppended = !1),
                        (this._element = null);
                }
                static get Default() {
                    return ai;
                }
                static get DefaultType() {
                    return li;
                }
                static get NAME() {
                    return si;
                }
                show(t) {
                    if (!this._config.isVisible) return void se(t);
                    this._append();
                    const e = this._getElement();
                    this._config.isAnimated && Zt(e),
                        e.classList.add(oi),
                        this._emulateAnimation(() => {
                            se(t);
                        });
                }
                hide(t) {
                    this._config.isVisible
                        ? (this._getElement().classList.remove(oi),
                          this._emulateAnimation(() => {
                              this.dispose(), se(t);
                          }))
                        : se(t);
                }
                dispose() {
                    this._isAppended &&
                        (Ae.off(this._element, ri),
                        this._element.remove(),
                        (this._isAppended = !1));
                }
                _getElement() {
                    if (!this._element) {
                        const t = document.createElement("div");
                        (t.className = this._config.className),
                            this._config.isAnimated && t.classList.add("fade"),
                            (this._element = t);
                    }
                    return this._element;
                }
                _configAfterMerge(t) {
                    return (t.rootElement = Xt(t.rootElement)), t;
                }
                _append() {
                    if (this._isAppended) return;
                    const t = this._getElement();
                    this._config.rootElement.append(t),
                        Ae.on(t, ri, () => {
                            se(this._config.clickCallback);
                        }),
                        (this._isAppended = !0);
                }
                _emulateAnimation(t) {
                    oe(t, this._getElement(), this._config.isAnimated);
                }
            }
            const ui = ".bs.focustrap",
                di = `focusin${ui}`,
                hi = `keydown.tab${ui}`,
                fi = "backward",
                pi = { autofocus: !0, trapElement: null },
                gi = { autofocus: "boolean", trapElement: "element" };
            class mi extends Oe {
                constructor(t) {
                    super(),
                        (this._config = this._getConfig(t)),
                        (this._isActive = !1),
                        (this._lastTabNavDirection = null);
                }
                static get Default() {
                    return pi;
                }
                static get DefaultType() {
                    return gi;
                }
                static get NAME() {
                    return "focustrap";
                }
                activate() {
                    this._isActive ||
                        (this._config.autofocus &&
                            this._config.trapElement.focus(),
                        Ae.off(document, ui),
                        Ae.on(document, di, (t) => this._handleFocusin(t)),
                        Ae.on(document, hi, (t) => this._handleKeydown(t)),
                        (this._isActive = !0));
                }
                deactivate() {
                    this._isActive &&
                        ((this._isActive = !1), Ae.off(document, ui));
                }
                _handleFocusin(t) {
                    const { trapElement: e } = this._config;
                    if (
                        t.target === document ||
                        t.target === e ||
                        e.contains(t.target)
                    )
                        return;
                    const n = Le.focusableChildren(e);
                    0 === n.length
                        ? e.focus()
                        : this._lastTabNavDirection === fi
                        ? n[n.length - 1].focus()
                        : n[0].focus();
                }
                _handleKeydown(t) {
                    "Tab" === t.key &&
                        (this._lastTabNavDirection = t.shiftKey
                            ? fi
                            : "forward");
                }
            }
            const _i = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                bi = ".sticky-top",
                vi = "padding-right",
                yi = "margin-right";
            class wi {
                constructor() {
                    this._element = document.body;
                }
                getWidth() {
                    const t = document.documentElement.clientWidth;
                    return Math.abs(window.innerWidth - t);
                }
                hide() {
                    const t = this.getWidth();
                    this._disableOverFlow(),
                        this._setElementAttributes(
                            this._element,
                            vi,
                            (e) => e + t
                        ),
                        this._setElementAttributes(_i, vi, (e) => e + t),
                        this._setElementAttributes(bi, yi, (e) => e - t);
                }
                reset() {
                    this._resetElementAttributes(this._element, "overflow"),
                        this._resetElementAttributes(this._element, vi),
                        this._resetElementAttributes(_i, vi),
                        this._resetElementAttributes(bi, yi);
                }
                isOverflowing() {
                    return this.getWidth() > 0;
                }
                _disableOverFlow() {
                    this._saveInitialAttribute(this._element, "overflow"),
                        (this._element.style.overflow = "hidden");
                }
                _setElementAttributes(t, e, n) {
                    const i = this.getWidth();
                    this._applyManipulationCallback(t, (t) => {
                        if (
                            t !== this._element &&
                            window.innerWidth > t.clientWidth + i
                        )
                            return;
                        this._saveInitialAttribute(t, e);
                        const s = window
                            .getComputedStyle(t)
                            .getPropertyValue(e);
                        t.style.setProperty(e, `${n(Number.parseFloat(s))}px`);
                    });
                }
                _saveInitialAttribute(t, e) {
                    const n = t.style.getPropertyValue(e);
                    n && Ce.setDataAttribute(t, e, n);
                }
                _resetElementAttributes(t, e) {
                    this._applyManipulationCallback(t, (t) => {
                        const n = Ce.getDataAttribute(t, e);
                        null !== n
                            ? (Ce.removeDataAttribute(t, e),
                              t.style.setProperty(e, n))
                            : t.style.removeProperty(e);
                    });
                }
                _applyManipulationCallback(t, e) {
                    if (Yt(t)) e(t);
                    else for (const n of Le.find(t, this._element)) e(n);
                }
            }
            const Ai = ".bs.modal",
                Ei = `hide${Ai}`,
                Ti = `hidePrevented${Ai}`,
                xi = `hidden${Ai}`,
                Ci = `show${Ai}`,
                Oi = `shown${Ai}`,
                ki = `resize${Ai}`,
                Si = `click.dismiss${Ai}`,
                Li = `mousedown.dismiss${Ai}`,
                $i = `keydown.dismiss${Ai}`,
                Di = `click${Ai}.data-api`,
                Ii = "modal-open",
                Ni = "show",
                Pi = "modal-static",
                Mi = { backdrop: !0, focus: !0, keyboard: !0 },
                ji = {
                    backdrop: "(boolean|string)",
                    focus: "boolean",
                    keyboard: "boolean",
                };
            class Fi extends ke {
                constructor(t, e) {
                    super(t, e),
                        (this._dialog = Le.findOne(
                            ".modal-dialog",
                            this._element
                        )),
                        (this._backdrop = this._initializeBackDrop()),
                        (this._focustrap = this._initializeFocusTrap()),
                        (this._isShown = !1),
                        (this._isTransitioning = !1),
                        (this._scrollBar = new wi()),
                        this._addEventListeners();
                }
                static get Default() {
                    return Mi;
                }
                static get DefaultType() {
                    return ji;
                }
                static get NAME() {
                    return "modal";
                }
                toggle(t) {
                    return this._isShown ? this.hide() : this.show(t);
                }
                show(t) {
                    if (this._isShown || this._isTransitioning) return;
                    Ae.trigger(this._element, Ci, { relatedTarget: t })
                        .defaultPrevented ||
                        ((this._isShown = !0),
                        (this._isTransitioning = !0),
                        this._scrollBar.hide(),
                        document.body.classList.add(Ii),
                        this._adjustDialog(),
                        this._backdrop.show(() => this._showElement(t)));
                }
                hide() {
                    if (!this._isShown || this._isTransitioning) return;
                    Ae.trigger(this._element, Ei).defaultPrevented ||
                        ((this._isShown = !1),
                        (this._isTransitioning = !0),
                        this._focustrap.deactivate(),
                        this._element.classList.remove(Ni),
                        this._queueCallback(
                            () => this._hideModal(),
                            this._element,
                            this._isAnimated()
                        ));
                }
                dispose() {
                    Ae.off(window, Ai),
                        Ae.off(this._dialog, Ai),
                        this._backdrop.dispose(),
                        this._focustrap.deactivate(),
                        super.dispose();
                }
                handleUpdate() {
                    this._adjustDialog();
                }
                _initializeBackDrop() {
                    return new ci({
                        isVisible: Boolean(this._config.backdrop),
                        isAnimated: this._isAnimated(),
                    });
                }
                _initializeFocusTrap() {
                    return new mi({ trapElement: this._element });
                }
                _showElement(t) {
                    document.body.contains(this._element) ||
                        document.body.append(this._element),
                        (this._element.style.display = "block"),
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        this._element.setAttribute("role", "dialog"),
                        (this._element.scrollTop = 0);
                    const e = Le.findOne(".modal-body", this._dialog);
                    e && (e.scrollTop = 0),
                        Zt(this._element),
                        this._element.classList.add(Ni);
                    this._queueCallback(
                        () => {
                            this._config.focus && this._focustrap.activate(),
                                (this._isTransitioning = !1),
                                Ae.trigger(this._element, Oi, {
                                    relatedTarget: t,
                                });
                        },
                        this._dialog,
                        this._isAnimated()
                    );
                }
                _addEventListeners() {
                    Ae.on(this._element, $i, (t) => {
                        "Escape" === t.key &&
                            (this._config.keyboard
                                ? this.hide()
                                : this._triggerBackdropTransition());
                    }),
                        Ae.on(window, ki, () => {
                            this._isShown &&
                                !this._isTransitioning &&
                                this._adjustDialog();
                        }),
                        Ae.on(this._element, Li, (t) => {
                            Ae.one(this._element, Si, (e) => {
                                this._element === t.target &&
                                    this._element === e.target &&
                                    ("static" !== this._config.backdrop
                                        ? this._config.backdrop && this.hide()
                                        : this._triggerBackdropTransition());
                            });
                        });
                }
                _hideModal() {
                    (this._element.style.display = "none"),
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        (this._isTransitioning = !1),
                        this._backdrop.hide(() => {
                            document.body.classList.remove(Ii),
                                this._resetAdjustments(),
                                this._scrollBar.reset(),
                                Ae.trigger(this._element, xi);
                        });
                }
                _isAnimated() {
                    return this._element.classList.contains("fade");
                }
                _triggerBackdropTransition() {
                    if (Ae.trigger(this._element, Ti).defaultPrevented) return;
                    const t =
                            this._element.scrollHeight >
                            document.documentElement.clientHeight,
                        e = this._element.style.overflowY;
                    "hidden" === e ||
                        this._element.classList.contains(Pi) ||
                        (t || (this._element.style.overflowY = "hidden"),
                        this._element.classList.add(Pi),
                        this._queueCallback(() => {
                            this._element.classList.remove(Pi),
                                this._queueCallback(() => {
                                    this._element.style.overflowY = e;
                                }, this._dialog);
                        }, this._dialog),
                        this._element.focus());
                }
                _adjustDialog() {
                    const t =
                            this._element.scrollHeight >
                            document.documentElement.clientHeight,
                        e = this._scrollBar.getWidth(),
                        n = e > 0;
                    if (n && !t) {
                        const t = ne() ? "paddingLeft" : "paddingRight";
                        this._element.style[t] = `${e}px`;
                    }
                    if (!n && t) {
                        const t = ne() ? "paddingRight" : "paddingLeft";
                        this._element.style[t] = `${e}px`;
                    }
                }
                _resetAdjustments() {
                    (this._element.style.paddingLeft = ""),
                        (this._element.style.paddingRight = "");
                }
                static jQueryInterface(t, e) {
                    return this.each(function () {
                        const n = Fi.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === n[t])
                                throw new TypeError(`No method named "${t}"`);
                            n[t](e);
                        }
                    });
                }
            }
            Ae.on(document, Di, '[data-bs-toggle="modal"]', function (t) {
                const e = Le.getElementFromSelector(this);
                ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                    Ae.one(e, Ci, (t) => {
                        t.defaultPrevented ||
                            Ae.one(e, xi, () => {
                                Kt(this) && this.focus();
                            });
                    });
                const n = Le.findOne(".modal.show");
                n && Fi.getInstance(n).hide();
                Fi.getOrCreateInstance(e).toggle(this);
            }),
                $e(Fi),
                ie(Fi);
            const Hi = ".bs.offcanvas",
                zi = ".data-api",
                Wi = `load${Hi}${zi}`,
                Bi = "show",
                Ri = "showing",
                qi = "hiding",
                Vi = ".offcanvas.show",
                Ui = `show${Hi}`,
                Yi = `shown${Hi}`,
                Xi = `hide${Hi}`,
                Ki = `hidePrevented${Hi}`,
                Qi = `hidden${Hi}`,
                Gi = `resize${Hi}`,
                Ji = `click${Hi}${zi}`,
                Zi = `keydown.dismiss${Hi}`,
                ts = { backdrop: !0, keyboard: !0, scroll: !1 },
                es = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    scroll: "boolean",
                };
            class ns extends ke {
                constructor(t, e) {
                    super(t, e),
                        (this._isShown = !1),
                        (this._backdrop = this._initializeBackDrop()),
                        (this._focustrap = this._initializeFocusTrap()),
                        this._addEventListeners();
                }
                static get Default() {
                    return ts;
                }
                static get DefaultType() {
                    return es;
                }
                static get NAME() {
                    return "offcanvas";
                }
                toggle(t) {
                    return this._isShown ? this.hide() : this.show(t);
                }
                show(t) {
                    if (this._isShown) return;
                    if (
                        Ae.trigger(this._element, Ui, { relatedTarget: t })
                            .defaultPrevented
                    )
                        return;
                    (this._isShown = !0),
                        this._backdrop.show(),
                        this._config.scroll || new wi().hide(),
                        this._element.setAttribute("aria-modal", !0),
                        this._element.setAttribute("role", "dialog"),
                        this._element.classList.add(Ri);
                    this._queueCallback(
                        () => {
                            (this._config.scroll && !this._config.backdrop) ||
                                this._focustrap.activate(),
                                this._element.classList.add(Bi),
                                this._element.classList.remove(Ri),
                                Ae.trigger(this._element, Yi, {
                                    relatedTarget: t,
                                });
                        },
                        this._element,
                        !0
                    );
                }
                hide() {
                    if (!this._isShown) return;
                    if (Ae.trigger(this._element, Xi).defaultPrevented) return;
                    this._focustrap.deactivate(),
                        this._element.blur(),
                        (this._isShown = !1),
                        this._element.classList.add(qi),
                        this._backdrop.hide();
                    this._queueCallback(
                        () => {
                            this._element.classList.remove(Bi, qi),
                                this._element.removeAttribute("aria-modal"),
                                this._element.removeAttribute("role"),
                                this._config.scroll || new wi().reset(),
                                Ae.trigger(this._element, Qi);
                        },
                        this._element,
                        !0
                    );
                }
                dispose() {
                    this._backdrop.dispose(),
                        this._focustrap.deactivate(),
                        super.dispose();
                }
                _initializeBackDrop() {
                    const t = Boolean(this._config.backdrop);
                    return new ci({
                        className: "offcanvas-backdrop",
                        isVisible: t,
                        isAnimated: !0,
                        rootElement: this._element.parentNode,
                        clickCallback: t
                            ? () => {
                                  "static" !== this._config.backdrop
                                      ? this.hide()
                                      : Ae.trigger(this._element, Ki);
                              }
                            : null,
                    });
                }
                _initializeFocusTrap() {
                    return new mi({ trapElement: this._element });
                }
                _addEventListeners() {
                    Ae.on(this._element, Zi, (t) => {
                        "Escape" === t.key &&
                            (this._config.keyboard
                                ? this.hide()
                                : Ae.trigger(this._element, Ki));
                    });
                }
                static jQueryInterface(t) {
                    return this.each(function () {
                        const e = ns.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (
                                void 0 === e[t] ||
                                t.startsWith("_") ||
                                "constructor" === t
                            )
                                throw new TypeError(`No method named "${t}"`);
                            e[t](this);
                        }
                    });
                }
            }
            Ae.on(document, Ji, '[data-bs-toggle="offcanvas"]', function (t) {
                const e = Le.getElementFromSelector(this);
                if (
                    (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                    Qt(this))
                )
                    return;
                Ae.one(e, Qi, () => {
                    Kt(this) && this.focus();
                });
                const n = Le.findOne(Vi);
                n && n !== e && ns.getInstance(n).hide();
                ns.getOrCreateInstance(e).toggle(this);
            }),
                Ae.on(window, Wi, () => {
                    for (const t of Le.find(Vi))
                        ns.getOrCreateInstance(t).show();
                }),
                Ae.on(window, Gi, () => {
                    for (const t of Le.find(
                        "[aria-modal][class*=show][class*=offcanvas-]"
                    ))
                        "fixed" !== getComputedStyle(t).position &&
                            ns.getOrCreateInstance(t).hide();
                }),
                $e(ns),
                ie(ns);
            const is = {
                    "*": [
                        "class",
                        "dir",
                        "id",
                        "lang",
                        "role",
                        /^aria-[\w-]*$/i,
                    ],
                    a: ["target", "href", "title", "rel"],
                    area: [],
                    b: [],
                    br: [],
                    col: [],
                    code: [],
                    dd: [],
                    div: [],
                    dl: [],
                    dt: [],
                    em: [],
                    hr: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    i: [],
                    img: ["src", "srcset", "alt", "title", "width", "height"],
                    li: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    u: [],
                    ul: [],
                },
                ss = new Set([
                    "background",
                    "cite",
                    "href",
                    "itemtype",
                    "longdesc",
                    "poster",
                    "src",
                    "xlink:href",
                ]),
                os = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
                rs = (t, e) => {
                    const n = t.nodeName.toLowerCase();
                    return e.includes(n)
                        ? !ss.has(n) || Boolean(os.test(t.nodeValue))
                        : e
                              .filter((t) => t instanceof RegExp)
                              .some((t) => t.test(n));
                };
            const as = {
                    allowList: is,
                    content: {},
                    extraClass: "",
                    html: !1,
                    sanitize: !0,
                    sanitizeFn: null,
                    template: "<div></div>",
                },
                ls = {
                    allowList: "object",
                    content: "object",
                    extraClass: "(string|function)",
                    html: "boolean",
                    sanitize: "boolean",
                    sanitizeFn: "(null|function)",
                    template: "string",
                },
                cs = {
                    entry: "(string|element|function|null)",
                    selector: "(string|element)",
                };
            class us extends Oe {
                constructor(t) {
                    super(), (this._config = this._getConfig(t));
                }
                static get Default() {
                    return as;
                }
                static get DefaultType() {
                    return ls;
                }
                static get NAME() {
                    return "TemplateFactory";
                }
                getContent() {
                    return Object.values(this._config.content)
                        .map((t) => this._resolvePossibleFunction(t))
                        .filter(Boolean);
                }
                hasContent() {
                    return this.getContent().length > 0;
                }
                changeContent(t) {
                    return (
                        this._checkContent(t),
                        (this._config.content = {
                            ...this._config.content,
                            ...t,
                        }),
                        this
                    );
                }
                toHtml() {
                    const t = document.createElement("div");
                    t.innerHTML = this._maybeSanitize(this._config.template);
                    for (const [e, n] of Object.entries(this._config.content))
                        this._setContent(t, n, e);
                    const e = t.children[0],
                        n = this._resolvePossibleFunction(
                            this._config.extraClass
                        );
                    return n && e.classList.add(...n.split(" ")), e;
                }
                _typeCheckConfig(t) {
                    super._typeCheckConfig(t), this._checkContent(t.content);
                }
                _checkContent(t) {
                    for (const [e, n] of Object.entries(t))
                        super._typeCheckConfig({ selector: e, entry: n }, cs);
                }
                _setContent(t, e, n) {
                    const i = Le.findOne(n, t);
                    i &&
                        ((e = this._resolvePossibleFunction(e))
                            ? Yt(e)
                                ? this._putElementInTemplate(Xt(e), i)
                                : this._config.html
                                ? (i.innerHTML = this._maybeSanitize(e))
                                : (i.textContent = e)
                            : i.remove());
                }
                _maybeSanitize(t) {
                    return this._config.sanitize
                        ? (function (t, e, n) {
                              if (!t.length) return t;
                              if (n && "function" == typeof n) return n(t);
                              const i = new window.DOMParser().parseFromString(
                                      t,
                                      "text/html"
                                  ),
                                  s = [].concat(
                                      ...i.body.querySelectorAll("*")
                                  );
                              for (const t of s) {
                                  const n = t.nodeName.toLowerCase();
                                  if (!Object.keys(e).includes(n)) {
                                      t.remove();
                                      continue;
                                  }
                                  const i = [].concat(...t.attributes),
                                      s = [].concat(e["*"] || [], e[n] || []);
                                  for (const e of i)
                                      rs(e, s) || t.removeAttribute(e.nodeName);
                              }
                              return i.body.innerHTML;
                          })(t, this._config.allowList, this._config.sanitizeFn)
                        : t;
                }
                _resolvePossibleFunction(t) {
                    return se(t, [this]);
                }
                _putElementInTemplate(t, e) {
                    if (this._config.html)
                        return (e.innerHTML = ""), void e.append(t);
                    e.textContent = t.textContent;
                }
            }
            const ds = new Set(["sanitize", "allowList", "sanitizeFn"]),
                hs = "fade",
                fs = "show",
                ps = ".tooltip-inner",
                gs = ".modal",
                ms = "hide.bs.modal",
                _s = "hover",
                bs = "focus",
                vs = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: ne() ? "left" : "right",
                    BOTTOM: "bottom",
                    LEFT: ne() ? "right" : "left",
                },
                ys = {
                    allowList: is,
                    animation: !0,
                    boundary: "clippingParents",
                    container: !1,
                    customClass: "",
                    delay: 0,
                    fallbackPlacements: ["top", "right", "bottom", "left"],
                    html: !1,
                    offset: [0, 6],
                    placement: "top",
                    popperConfig: null,
                    sanitize: !0,
                    sanitizeFn: null,
                    selector: !1,
                    template:
                        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    title: "",
                    trigger: "hover focus",
                },
                ws = {
                    allowList: "object",
                    animation: "boolean",
                    boundary: "(string|element)",
                    container: "(string|element|boolean)",
                    customClass: "(string|function)",
                    delay: "(number|object)",
                    fallbackPlacements: "array",
                    html: "boolean",
                    offset: "(array|string|function)",
                    placement: "(string|function)",
                    popperConfig: "(null|object|function)",
                    sanitize: "boolean",
                    sanitizeFn: "(null|function)",
                    selector: "(string|boolean)",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                };
            class As extends ke {
                constructor(e, n) {
                    if (void 0 === t)
                        throw new TypeError(
                            "Bootstrap's tooltips require Popper (https://popper.js.org)"
                        );
                    super(e, n),
                        (this._isEnabled = !0),
                        (this._timeout = 0),
                        (this._isHovered = null),
                        (this._activeTrigger = {}),
                        (this._popper = null),
                        (this._templateFactory = null),
                        (this._newContent = null),
                        (this.tip = null),
                        this._setListeners(),
                        this._config.selector || this._fixTitle();
                }
                static get Default() {
                    return ys;
                }
                static get DefaultType() {
                    return ws;
                }
                static get NAME() {
                    return "tooltip";
                }
                enable() {
                    this._isEnabled = !0;
                }
                disable() {
                    this._isEnabled = !1;
                }
                toggleEnabled() {
                    this._isEnabled = !this._isEnabled;
                }
                toggle() {
                    this._isEnabled &&
                        ((this._activeTrigger.click =
                            !this._activeTrigger.click),
                        this._isShown() ? this._leave() : this._enter());
                }
                dispose() {
                    clearTimeout(this._timeout),
                        Ae.off(
                            this._element.closest(gs),
                            ms,
                            this._hideModalHandler
                        ),
                        this._element.getAttribute("data-bs-original-title") &&
                            this._element.setAttribute(
                                "title",
                                this._element.getAttribute(
                                    "data-bs-original-title"
                                )
                            ),
                        this._disposePopper(),
                        super.dispose();
                }
                show() {
                    if ("none" === this._element.style.display)
                        throw new Error("Please use show on visible elements");
                    if (!this._isWithContent() || !this._isEnabled) return;
                    const t = Ae.trigger(
                            this._element,
                            this.constructor.eventName("show")
                        ),
                        e = (
                            Gt(this._element) ||
                            this._element.ownerDocument.documentElement
                        ).contains(this._element);
                    if (t.defaultPrevented || !e) return;
                    this._disposePopper();
                    const n = this._getTipElement();
                    this._element.setAttribute(
                        "aria-describedby",
                        n.getAttribute("id")
                    );
                    const { container: i } = this._config;
                    if (
                        (this._element.ownerDocument.documentElement.contains(
                            this.tip
                        ) ||
                            (i.append(n),
                            Ae.trigger(
                                this._element,
                                this.constructor.eventName("inserted")
                            )),
                        (this._popper = this._createPopper(n)),
                        n.classList.add(fs),
                        "ontouchstart" in document.documentElement)
                    )
                        for (const t of [].concat(...document.body.children))
                            Ae.on(t, "mouseover", Jt);
                    this._queueCallback(
                        () => {
                            Ae.trigger(
                                this._element,
                                this.constructor.eventName("shown")
                            ),
                                !1 === this._isHovered && this._leave(),
                                (this._isHovered = !1);
                        },
                        this.tip,
                        this._isAnimated()
                    );
                }
                hide() {
                    if (!this._isShown()) return;
                    if (
                        Ae.trigger(
                            this._element,
                            this.constructor.eventName("hide")
                        ).defaultPrevented
                    )
                        return;
                    if (
                        (this._getTipElement().classList.remove(fs),
                        "ontouchstart" in document.documentElement)
                    )
                        for (const t of [].concat(...document.body.children))
                            Ae.off(t, "mouseover", Jt);
                    (this._activeTrigger.click = !1),
                        (this._activeTrigger[bs] = !1),
                        (this._activeTrigger[_s] = !1),
                        (this._isHovered = null);
                    this._queueCallback(
                        () => {
                            this._isWithActiveTrigger() ||
                                (this._isHovered || this._disposePopper(),
                                this._element.removeAttribute(
                                    "aria-describedby"
                                ),
                                Ae.trigger(
                                    this._element,
                                    this.constructor.eventName("hidden")
                                ));
                        },
                        this.tip,
                        this._isAnimated()
                    );
                }
                update() {
                    this._popper && this._popper.update();
                }
                _isWithContent() {
                    return Boolean(this._getTitle());
                }
                _getTipElement() {
                    return (
                        this.tip ||
                            (this.tip = this._createTipElement(
                                this._newContent ||
                                    this._getContentForTemplate()
                            )),
                        this.tip
                    );
                }
                _createTipElement(t) {
                    const e = this._getTemplateFactory(t).toHtml();
                    if (!e) return null;
                    e.classList.remove(hs, fs),
                        e.classList.add(`bs-${this.constructor.NAME}-auto`);
                    const n = ((t) => {
                        do {
                            t += Math.floor(1e6 * Math.random());
                        } while (document.getElementById(t));
                        return t;
                    })(this.constructor.NAME).toString();
                    return (
                        e.setAttribute("id", n),
                        this._isAnimated() && e.classList.add(hs),
                        e
                    );
                }
                setContent(t) {
                    (this._newContent = t),
                        this._isShown() && (this._disposePopper(), this.show());
                }
                _getTemplateFactory(t) {
                    return (
                        this._templateFactory
                            ? this._templateFactory.changeContent(t)
                            : (this._templateFactory = new us({
                                  ...this._config,
                                  content: t,
                                  extraClass: this._resolvePossibleFunction(
                                      this._config.customClass
                                  ),
                              })),
                        this._templateFactory
                    );
                }
                _getContentForTemplate() {
                    return { [ps]: this._getTitle() };
                }
                _getTitle() {
                    return (
                        this._resolvePossibleFunction(this._config.title) ||
                        this._element.getAttribute("data-bs-original-title")
                    );
                }
                _initializeOnDelegatedTarget(t) {
                    return this.constructor.getOrCreateInstance(
                        t.delegateTarget,
                        this._getDelegateConfig()
                    );
                }
                _isAnimated() {
                    return (
                        this._config.animation ||
                        (this.tip && this.tip.classList.contains(hs))
                    );
                }
                _isShown() {
                    return this.tip && this.tip.classList.contains(fs);
                }
                _createPopper(t) {
                    const e = se(this._config.placement, [
                            this,
                            t,
                            this._element,
                        ]),
                        n = vs[e.toUpperCase()];
                    return zt(this._element, t, this._getPopperConfig(n));
                }
                _getOffset() {
                    const { offset: t } = this._config;
                    return "string" == typeof t
                        ? t.split(",").map((t) => Number.parseInt(t, 10))
                        : "function" == typeof t
                        ? (e) => t(e, this._element)
                        : t;
                }
                _resolvePossibleFunction(t) {
                    return se(t, [this._element]);
                }
                _getPopperConfig(t) {
                    const e = {
                        placement: t,
                        modifiers: [
                            {
                                name: "flip",
                                options: {
                                    fallbackPlacements:
                                        this._config.fallbackPlacements,
                                },
                            },
                            {
                                name: "offset",
                                options: { offset: this._getOffset() },
                            },
                            {
                                name: "preventOverflow",
                                options: { boundary: this._config.boundary },
                            },
                            {
                                name: "arrow",
                                options: {
                                    element: `.${this.constructor.NAME}-arrow`,
                                },
                            },
                            {
                                name: "preSetPlacement",
                                enabled: !0,
                                phase: "beforeMain",
                                fn: (t) => {
                                    this._getTipElement().setAttribute(
                                        "data-popper-placement",
                                        t.state.placement
                                    );
                                },
                            },
                        ],
                    };
                    return { ...e, ...se(this._config.popperConfig, [e]) };
                }
                _setListeners() {
                    const t = this._config.trigger.split(" ");
                    for (const e of t)
                        if ("click" === e)
                            Ae.on(
                                this._element,
                                this.constructor.eventName("click"),
                                this._config.selector,
                                (t) => {
                                    this._initializeOnDelegatedTarget(
                                        t
                                    ).toggle();
                                }
                            );
                        else if ("manual" !== e) {
                            const t =
                                    e === _s
                                        ? this.constructor.eventName(
                                              "mouseenter"
                                          )
                                        : this.constructor.eventName("focusin"),
                                n =
                                    e === _s
                                        ? this.constructor.eventName(
                                              "mouseleave"
                                          )
                                        : this.constructor.eventName(
                                              "focusout"
                                          );
                            Ae.on(
                                this._element,
                                t,
                                this._config.selector,
                                (t) => {
                                    const e =
                                        this._initializeOnDelegatedTarget(t);
                                    (e._activeTrigger[
                                        "focusin" === t.type ? bs : _s
                                    ] = !0),
                                        e._enter();
                                }
                            ),
                                Ae.on(
                                    this._element,
                                    n,
                                    this._config.selector,
                                    (t) => {
                                        const e =
                                            this._initializeOnDelegatedTarget(
                                                t
                                            );
                                        (e._activeTrigger[
                                            "focusout" === t.type ? bs : _s
                                        ] = e._element.contains(
                                            t.relatedTarget
                                        )),
                                            e._leave();
                                    }
                                );
                        }
                    (this._hideModalHandler = () => {
                        this._element && this.hide();
                    }),
                        Ae.on(
                            this._element.closest(gs),
                            ms,
                            this._hideModalHandler
                        );
                }
                _fixTitle() {
                    const t = this._element.getAttribute("title");
                    t &&
                        (this._element.getAttribute("aria-label") ||
                            this._element.textContent.trim() ||
                            this._element.setAttribute("aria-label", t),
                        this._element.setAttribute("data-bs-original-title", t),
                        this._element.removeAttribute("title"));
                }
                _enter() {
                    this._isShown() || this._isHovered
                        ? (this._isHovered = !0)
                        : ((this._isHovered = !0),
                          this._setTimeout(() => {
                              this._isHovered && this.show();
                          }, this._config.delay.show));
                }
                _leave() {
                    this._isWithActiveTrigger() ||
                        ((this._isHovered = !1),
                        this._setTimeout(() => {
                            this._isHovered || this.hide();
                        }, this._config.delay.hide));
                }
                _setTimeout(t, e) {
                    clearTimeout(this._timeout),
                        (this._timeout = setTimeout(t, e));
                }
                _isWithActiveTrigger() {
                    return Object.values(this._activeTrigger).includes(!0);
                }
                _getConfig(t) {
                    const e = Ce.getDataAttributes(this._element);
                    for (const t of Object.keys(e)) ds.has(t) && delete e[t];
                    return (
                        (t = { ...e, ...("object" == typeof t && t ? t : {}) }),
                        (t = this._mergeConfigObj(t)),
                        (t = this._configAfterMerge(t)),
                        this._typeCheckConfig(t),
                        t
                    );
                }
                _configAfterMerge(t) {
                    return (
                        (t.container =
                            !1 === t.container
                                ? document.body
                                : Xt(t.container)),
                        "number" == typeof t.delay &&
                            (t.delay = { show: t.delay, hide: t.delay }),
                        "number" == typeof t.title &&
                            (t.title = t.title.toString()),
                        "number" == typeof t.content &&
                            (t.content = t.content.toString()),
                        t
                    );
                }
                _getDelegateConfig() {
                    const t = {};
                    for (const [e, n] of Object.entries(this._config))
                        this.constructor.Default[e] !== n && (t[e] = n);
                    return (t.selector = !1), (t.trigger = "manual"), t;
                }
                _disposePopper() {
                    this._popper &&
                        (this._popper.destroy(), (this._popper = null)),
                        this.tip && (this.tip.remove(), (this.tip = null));
                }
                static jQueryInterface(t) {
                    return this.each(function () {
                        const e = As.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t])
                                throw new TypeError(`No method named "${t}"`);
                            e[t]();
                        }
                    });
                }
            }
            ie(As);
            const Es = ".popover-header",
                Ts = ".popover-body",
                xs = {
                    ...As.Default,
                    content: "",
                    offset: [0, 8],
                    placement: "right",
                    template:
                        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                    trigger: "click",
                },
                Cs = {
                    ...As.DefaultType,
                    content: "(null|string|element|function)",
                };
            class Os extends As {
                static get Default() {
                    return xs;
                }
                static get DefaultType() {
                    return Cs;
                }
                static get NAME() {
                    return "popover";
                }
                _isWithContent() {
                    return this._getTitle() || this._getContent();
                }
                _getContentForTemplate() {
                    return { [Es]: this._getTitle(), [Ts]: this._getContent() };
                }
                _getContent() {
                    return this._resolvePossibleFunction(this._config.content);
                }
                static jQueryInterface(t) {
                    return this.each(function () {
                        const e = Os.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t])
                                throw new TypeError(`No method named "${t}"`);
                            e[t]();
                        }
                    });
                }
            }
            ie(Os);
            const ks = ".bs.scrollspy",
                Ss = `activate${ks}`,
                Ls = `click${ks}`,
                $s = `load${ks}.data-api`,
                Ds = "active",
                Is = "[href]",
                Ns = ".nav-link",
                Ps = `${Ns}, .nav-item > ${Ns}, .list-group-item`,
                Ms = {
                    offset: null,
                    rootMargin: "0px 0px -25%",
                    smoothScroll: !1,
                    target: null,
                    threshold: [0.1, 0.5, 1],
                },
                js = {
                    offset: "(number|null)",
                    rootMargin: "string",
                    smoothScroll: "boolean",
                    target: "element",
                    threshold: "array",
                };
            class Fs extends ke {
                constructor(t, e) {
                    super(t, e),
                        (this._targetLinks = new Map()),
                        (this._observableSections = new Map()),
                        (this._rootElement =
                            "visible" ===
                            getComputedStyle(this._element).overflowY
                                ? null
                                : this._element),
                        (this._activeTarget = null),
                        (this._observer = null),
                        (this._previousScrollData = {
                            visibleEntryTop: 0,
                            parentScrollTop: 0,
                        }),
                        this.refresh();
                }
                static get Default() {
                    return Ms;
                }
                static get DefaultType() {
                    return js;
                }
                static get NAME() {
                    return "scrollspy";
                }
                refresh() {
                    this._initializeTargetsAndObservables(),
                        this._maybeEnableSmoothScroll(),
                        this._observer
                            ? this._observer.disconnect()
                            : (this._observer = this._getNewObserver());
                    for (const t of this._observableSections.values())
                        this._observer.observe(t);
                }
                dispose() {
                    this._observer.disconnect(), super.dispose();
                }
                _configAfterMerge(t) {
                    return (
                        (t.target = Xt(t.target) || document.body),
                        (t.rootMargin = t.offset
                            ? `${t.offset}px 0px -30%`
                            : t.rootMargin),
                        "string" == typeof t.threshold &&
                            (t.threshold = t.threshold
                                .split(",")
                                .map((t) => Number.parseFloat(t))),
                        t
                    );
                }
                _maybeEnableSmoothScroll() {
                    this._config.smoothScroll &&
                        (Ae.off(this._config.target, Ls),
                        Ae.on(this._config.target, Ls, Is, (t) => {
                            const e = this._observableSections.get(
                                t.target.hash
                            );
                            if (e) {
                                t.preventDefault();
                                const n = this._rootElement || window,
                                    i = e.offsetTop - this._element.offsetTop;
                                if (n.scrollTo)
                                    return void n.scrollTo({
                                        top: i,
                                        behavior: "smooth",
                                    });
                                n.scrollTop = i;
                            }
                        }));
                }
                _getNewObserver() {
                    const t = {
                        root: this._rootElement,
                        threshold: this._config.threshold,
                        rootMargin: this._config.rootMargin,
                    };
                    return new IntersectionObserver(
                        (t) => this._observerCallback(t),
                        t
                    );
                }
                _observerCallback(t) {
                    const e = (t) => this._targetLinks.get(`#${t.target.id}`),
                        n = (t) => {
                            (this._previousScrollData.visibleEntryTop =
                                t.target.offsetTop),
                                this._process(e(t));
                        },
                        i = (this._rootElement || document.documentElement)
                            .scrollTop,
                        s = i >= this._previousScrollData.parentScrollTop;
                    this._previousScrollData.parentScrollTop = i;
                    for (const o of t) {
                        if (!o.isIntersecting) {
                            (this._activeTarget = null),
                                this._clearActiveClass(e(o));
                            continue;
                        }
                        const t =
                            o.target.offsetTop >=
                            this._previousScrollData.visibleEntryTop;
                        if (s && t) {
                            if ((n(o), !i)) return;
                        } else s || t || n(o);
                    }
                }
                _initializeTargetsAndObservables() {
                    (this._targetLinks = new Map()),
                        (this._observableSections = new Map());
                    const t = Le.find(Is, this._config.target);
                    for (const e of t) {
                        if (!e.hash || Qt(e)) continue;
                        const t = Le.findOne(decodeURI(e.hash), this._element);
                        Kt(t) &&
                            (this._targetLinks.set(decodeURI(e.hash), e),
                            this._observableSections.set(e.hash, t));
                    }
                }
                _process(t) {
                    this._activeTarget !== t &&
                        (this._clearActiveClass(this._config.target),
                        (this._activeTarget = t),
                        t.classList.add(Ds),
                        this._activateParents(t),
                        Ae.trigger(this._element, Ss, { relatedTarget: t }));
                }
                _activateParents(t) {
                    if (t.classList.contains("dropdown-item"))
                        Le.findOne(
                            ".dropdown-toggle",
                            t.closest(".dropdown")
                        ).classList.add(Ds);
                    else
                        for (const e of Le.parents(t, ".nav, .list-group"))
                            for (const t of Le.prev(e, Ps)) t.classList.add(Ds);
                }
                _clearActiveClass(t) {
                    t.classList.remove(Ds);
                    const e = Le.find(`${Is}.${Ds}`, t);
                    for (const t of e) t.classList.remove(Ds);
                }
                static jQueryInterface(t) {
                    return this.each(function () {
                        const e = Fs.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (
                                void 0 === e[t] ||
                                t.startsWith("_") ||
                                "constructor" === t
                            )
                                throw new TypeError(`No method named "${t}"`);
                            e[t]();
                        }
                    });
                }
            }
            Ae.on(window, $s, () => {
                for (const t of Le.find('[data-bs-spy="scroll"]'))
                    Fs.getOrCreateInstance(t);
            }),
                ie(Fs);
            const Hs = ".bs.tab",
                zs = `hide${Hs}`,
                Ws = `hidden${Hs}`,
                Bs = `show${Hs}`,
                Rs = `shown${Hs}`,
                qs = `click${Hs}`,
                Vs = `keydown${Hs}`,
                Us = `load${Hs}`,
                Ys = "ArrowLeft",
                Xs = "ArrowRight",
                Ks = "ArrowUp",
                Qs = "ArrowDown",
                Gs = "Home",
                Js = "End",
                Zs = "active",
                to = "fade",
                eo = "show",
                no = ".dropdown-toggle",
                io = `:not(${no})`,
                so =
                    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
                oo = `${`.nav-link${io}, .list-group-item${io}, [role="tab"]${io}`}, ${so}`,
                ro = `.${Zs}[data-bs-toggle="tab"], .${Zs}[data-bs-toggle="pill"], .${Zs}[data-bs-toggle="list"]`;
            class ao extends ke {
                constructor(t) {
                    super(t),
                        (this._parent = this._element.closest(
                            '.list-group, .nav, [role="tablist"]'
                        )),
                        this._parent &&
                            (this._setInitialAttributes(
                                this._parent,
                                this._getChildren()
                            ),
                            Ae.on(this._element, Vs, (t) => this._keydown(t)));
                }
                static get NAME() {
                    return "tab";
                }
                show() {
                    const t = this._element;
                    if (this._elemIsActive(t)) return;
                    const e = this._getActiveElem(),
                        n = e ? Ae.trigger(e, zs, { relatedTarget: t }) : null;
                    Ae.trigger(t, Bs, { relatedTarget: e }).defaultPrevented ||
                        (n && n.defaultPrevented) ||
                        (this._deactivate(e, t), this._activate(t, e));
                }
                _activate(t, e) {
                    if (!t) return;
                    t.classList.add(Zs),
                        this._activate(Le.getElementFromSelector(t));
                    this._queueCallback(
                        () => {
                            "tab" === t.getAttribute("role")
                                ? (t.removeAttribute("tabindex"),
                                  t.setAttribute("aria-selected", !0),
                                  this._toggleDropDown(t, !0),
                                  Ae.trigger(t, Rs, { relatedTarget: e }))
                                : t.classList.add(eo);
                        },
                        t,
                        t.classList.contains(to)
                    );
                }
                _deactivate(t, e) {
                    if (!t) return;
                    t.classList.remove(Zs),
                        t.blur(),
                        this._deactivate(Le.getElementFromSelector(t));
                    this._queueCallback(
                        () => {
                            "tab" === t.getAttribute("role")
                                ? (t.setAttribute("aria-selected", !1),
                                  t.setAttribute("tabindex", "-1"),
                                  this._toggleDropDown(t, !1),
                                  Ae.trigger(t, Ws, { relatedTarget: e }))
                                : t.classList.remove(eo);
                        },
                        t,
                        t.classList.contains(to)
                    );
                }
                _keydown(t) {
                    if (![Ys, Xs, Ks, Qs, Gs, Js].includes(t.key)) return;
                    t.stopPropagation(), t.preventDefault();
                    const e = this._getChildren().filter((t) => !Qt(t));
                    let n;
                    if ([Gs, Js].includes(t.key))
                        n = e[t.key === Gs ? 0 : e.length - 1];
                    else {
                        const i = [Xs, Qs].includes(t.key);
                        n = re(e, t.target, i, !0);
                    }
                    n &&
                        (n.focus({ preventScroll: !0 }),
                        ao.getOrCreateInstance(n).show());
                }
                _getChildren() {
                    return Le.find(oo, this._parent);
                }
                _getActiveElem() {
                    return (
                        this._getChildren().find((t) =>
                            this._elemIsActive(t)
                        ) || null
                    );
                }
                _setInitialAttributes(t, e) {
                    this._setAttributeIfNotExists(t, "role", "tablist");
                    for (const t of e) this._setInitialAttributesOnChild(t);
                }
                _setInitialAttributesOnChild(t) {
                    t = this._getInnerElement(t);
                    const e = this._elemIsActive(t),
                        n = this._getOuterElement(t);
                    t.setAttribute("aria-selected", e),
                        n !== t &&
                            this._setAttributeIfNotExists(
                                n,
                                "role",
                                "presentation"
                            ),
                        e || t.setAttribute("tabindex", "-1"),
                        this._setAttributeIfNotExists(t, "role", "tab"),
                        this._setInitialAttributesOnTargetPanel(t);
                }
                _setInitialAttributesOnTargetPanel(t) {
                    const e = Le.getElementFromSelector(t);
                    e &&
                        (this._setAttributeIfNotExists(e, "role", "tabpanel"),
                        t.id &&
                            this._setAttributeIfNotExists(
                                e,
                                "aria-labelledby",
                                `${t.id}`
                            ));
                }
                _toggleDropDown(t, e) {
                    const n = this._getOuterElement(t);
                    if (!n.classList.contains("dropdown")) return;
                    const i = (t, i) => {
                        const s = Le.findOne(t, n);
                        s && s.classList.toggle(i, e);
                    };
                    i(no, Zs),
                        i(".dropdown-menu", eo),
                        n.setAttribute("aria-expanded", e);
                }
                _setAttributeIfNotExists(t, e, n) {
                    t.hasAttribute(e) || t.setAttribute(e, n);
                }
                _elemIsActive(t) {
                    return t.classList.contains(Zs);
                }
                _getInnerElement(t) {
                    return t.matches(oo) ? t : Le.findOne(oo, t);
                }
                _getOuterElement(t) {
                    return t.closest(".nav-item, .list-group-item") || t;
                }
                static jQueryInterface(t) {
                    return this.each(function () {
                        const e = ao.getOrCreateInstance(this);
                        if ("string" == typeof t) {
                            if (
                                void 0 === e[t] ||
                                t.startsWith("_") ||
                                "constructor" === t
                            )
                                throw new TypeError(`No method named "${t}"`);
                            e[t]();
                        }
                    });
                }
            }
            Ae.on(document, qs, so, function (t) {
                ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                    Qt(this) || ao.getOrCreateInstance(this).show();
            }),
                Ae.on(window, Us, () => {
                    for (const t of Le.find(ro)) ao.getOrCreateInstance(t);
                }),
                ie(ao);
            const lo = ".bs.toast",
                co = `mouseover${lo}`,
                uo = `mouseout${lo}`,
                ho = `focusin${lo}`,
                fo = `focusout${lo}`,
                po = `hide${lo}`,
                go = `hidden${lo}`,
                mo = `show${lo}`,
                _o = `shown${lo}`,
                bo = "hide",
                vo = "show",
                yo = "showing",
                wo = {
                    animation: "boolean",
                    autohide: "boolean",
                    delay: "number",
                },
                Ao = { animation: !0, autohide: !0, delay: 5e3 };
            class Eo extends ke {
                constructor(t, e) {
                    super(t, e),
                        (this._timeout = null),
                        (this._hasMouseInteraction = !1),
                        (this._hasKeyboardInteraction = !1),
                        this._setListeners();
                }
                static get Default() {
                    return Ao;
                }
                static get DefaultType() {
                    return wo;
                }
                static get NAME() {
                    return "toast";
                }
                show() {
                    if (Ae.trigger(this._element, mo).defaultPrevented) return;
                    this._clearTimeout(),
                        this._config.animation &&
                            this._element.classList.add("fade");
                    this._element.classList.remove(bo),
                        Zt(this._element),
                        this._element.classList.add(vo, yo),
                        this._queueCallback(
                            () => {
                                this._element.classList.remove(yo),
                                    Ae.trigger(this._element, _o),
                                    this._maybeScheduleHide();
                            },
                            this._element,
                            this._config.animation
                        );
                }
                hide() {
                    if (!this.isShown()) return;
                    if (Ae.trigger(this._element, po).defaultPrevented) return;
                    this._element.classList.add(yo),
                        this._queueCallback(
                            () => {
                                this._element.classList.add(bo),
                                    this._element.classList.remove(yo, vo),
                                    Ae.trigger(this._element, go);
                            },
                            this._element,
                            this._config.animation
                        );
                }
                dispose() {
                    this._clearTimeout(),
                        this.isShown() && this._element.classList.remove(vo),
                        super.dispose();
                }
                isShown() {
                    return this._element.classList.contains(vo);
                }
                _maybeScheduleHide() {
                    this._config.autohide &&
                        (this._hasMouseInteraction ||
                            this._hasKeyboardInteraction ||
                            (this._timeout = setTimeout(() => {
                                this.hide();
                            }, this._config.delay)));
                }
                _onInteraction(t, e) {
                    switch (t.type) {
                        case "mouseover":
                        case "mouseout":
                            this._hasMouseInteraction = e;
                            break;
                        case "focusin":
                        case "focusout":
                            this._hasKeyboardInteraction = e;
                    }
                    if (e) return void this._clearTimeout();
                    const n = t.relatedTarget;
                    this._element === n ||
                        this._element.contains(n) ||
                        this._maybeScheduleHide();
                }
                _setListeners() {
                    Ae.on(this._element, co, (t) => this._onInteraction(t, !0)),
                        Ae.on(this._element, uo, (t) =>
                            this._onInteraction(t, !1)
                        ),
                        Ae.on(this._element, ho, (t) =>
                            this._onInteraction(t, !0)
                        ),
                        Ae.on(this._element, fo, (t) =>
                            this._onInteraction(t, !1)
                        );
                }
                _clearTimeout() {
                    clearTimeout(this._timeout), (this._timeout = null);
                }
                static jQueryInterface(t) {
                    return this.each(function () {
                        const e = Eo.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t])
                                throw new TypeError(`No method named "${t}"`);
                            e[t](this);
                        }
                    });
                }
            }
            $e(Eo),
                ie(Eo),
                [].slice
                    .call(
                        document.querySelectorAll('[data-bs-toggle="dropdown"]')
                    )
                    .map(function (t) {
                        let e = {
                            boundary:
                                "viewport" ===
                                t.getAttribute("data-bs-boundary")
                                    ? document.querySelector(".btn")
                                    : "clippingParents",
                        };
                        return new ii(t, e);
                    }),
                [].slice
                    .call(
                        document.querySelectorAll('[data-bs-toggle="tooltip"]')
                    )
                    .map(function (t) {
                        let e = {
                            delay: { show: 50, hide: 50 },
                            html:
                                "true" === t.getAttribute("data-bs-html") ?? !1,
                            placement:
                                t.getAttribute("data-bs-placement") ?? "auto",
                        };
                        return new As(t, e);
                    }),
                [].slice
                    .call(
                        document.querySelectorAll('[data-bs-toggle="popover"]')
                    )
                    .map(function (t) {
                        let e = {
                            delay: { show: 50, hide: 50 },
                            html:
                                "true" === t.getAttribute("data-bs-html") ?? !1,
                            placement:
                                t.getAttribute("data-bs-placement") ?? "auto",
                        };
                        return new Os(t, e);
                    });
            n(5685);
            (() => {
                const t = window.location.hash;
                if (t) {
                    [].slice
                        .call(
                            document.querySelectorAll('[data-bs-toggle="tab"]')
                        )
                        .filter((e) => e.hash === t)
                        .map((t) => {
                            new ao(t).show();
                        });
                }
            })();
            const To = "tblr-",
                xo = (t, e) => {
                    const n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
                        t
                    );
                    return n
                        ? `rgba(${parseInt(n[1], 16)}, ${parseInt(
                              n[2],
                              16
                          )}, ${parseInt(n[3], 16)}, ${e})`
                        : null;
                },
                Co = (t, e = 1) => {
                    const n = getComputedStyle(document.body)
                        .getPropertyValue(`--${To}${t}`)
                        .trim();
                    return 1 !== e ? xo(n, e) : n;
                };
            var Oo = n(5947),
                ko = n.n(Oo);
            function So(t) {
                var e = document.createElement("style");
                (e.textContent =
                    "\n        #nprogress {\n          pointer-events: none;\n        }\n\n        #nprogress .bar {\n          background: "
                        .concat(
                            t,
                            ";\n\n          position: fixed;\n          z-index: 1031;\n          top: 0;\n          left: 0;\n\n          width: 100%;\n          height: 2px;\n        }\n\n        #nprogress .peg {\n          display: block;\n          position: absolute;\n          right: 0px;\n          width: 100px;\n          height: 100%;\n          box-shadow: 0 0 10px "
                        )
                        .concat(t, ", 0 0 5px ")
                        .concat(
                            t,
                            ";\n          opacity: 1.0;\n\n          -webkit-transform: rotate(3deg) translate(0px, -4px);\n              -ms-transform: rotate(3deg) translate(0px, -4px);\n                  transform: rotate(3deg) translate(0px, -4px);\n        }\n\n        #nprogress .spinner {\n          display: block;\n          position: fixed;\n          z-index: 1031;\n          top: 15px;\n          right: 15px;\n        }\n\n        #nprogress .spinner-icon {\n          width: 18px;\n          height: 18px;\n          box-sizing: border-box;\n\n          border: solid 2px transparent;\n          border-top-color: "
                        )
                        .concat(t, ";\n          border-left-color: ")
                        .concat(
                            t,
                            ";\n          border-radius: 50%;\n\n          -webkit-animation: nprogress-spinner 400ms linear infinite;\n                  animation: nprogress-spinner 400ms linear infinite;\n        }\n\n        .nprogress-custom-parent {\n          overflow: hidden;\n          position: relative;\n        }\n\n        .nprogress-custom-parent #nprogress .spinner,\n        .nprogress-custom-parent #nprogress .bar {\n          position: absolute;\n        }\n\n        @-webkit-keyframes nprogress-spinner {\n          0%   { -webkit-transform: rotate(0deg); }\n          100% { -webkit-transform: rotate(360deg); }\n        }\n        @keyframes nprogress-spinner {\n          0%   { transform: rotate(0deg); }\n          100% { transform: rotate(360deg); }\n        }\n    "
                        )),
                    document.head.appendChild(e);
            }
            So("#007bff"),
                (globalThis.bootstrap = e),
                (globalThis.tabler = i),
                (function () {
                    var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                        e = t.delay,
                        n = void 0 === e ? 250 : e,
                        i = t.color,
                        s = void 0 === i ? "var(--bb-primary)" : i,
                        o = t.includeCSS,
                        r = void 0 === o || o,
                        a = t.showSpinner,
                        l = void 0 !== a && a;
                    $(document).on("ajaxSend", function () {
                        return ko().inc(n);
                    }),
                        $(document).on("ajaxStop", function () {
                            return ko().done();
                        }),
                        $httpClient.beforeSend(function () {
                            return ko().inc(n);
                        }),
                        $httpClient.completed(function () {
                            return ko().done();
                        }),
                        ko().configure({ showSpinner: l }),
                        r && So(s);
                })({ showSpinner: !0 });
        })();
})();
