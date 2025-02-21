/*! jQuery UI - v1.12.1 - 2016-09-16
 * http://jqueryui.com
 * Includes: position.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (t) {
    "function" == typeof define && define.amd
        ? define(["jquery"], t)
        : t(jQuery);
})(function (t) {
    (t.ui = t.ui || {}),
        (t.ui.version = "1.12.1"),
        (function () {
            function e(t, e, i) {
                return [
                    parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1),
                    parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1),
                ];
            }
            function i(e, i) {
                return parseInt(t.css(e, i), 10) || 0;
            }
            function s(e) {
                var i = e[0];
                return 9 === i.nodeType
                    ? {
                          width: e.width(),
                          height: e.height(),
                          offset: { top: 0, left: 0 },
                      }
                    : t.isWindow(i)
                    ? {
                          width: e.width(),
                          height: e.height(),
                          offset: { top: e.scrollTop(), left: e.scrollLeft() },
                      }
                    : i.preventDefault
                    ? {
                          width: 0,
                          height: 0,
                          offset: { top: i.pageY, left: i.pageX },
                      }
                    : {
                          width: e.outerWidth(),
                          height: e.outerHeight(),
                          offset: e.offset(),
                      };
            }
            var n,
                o = Math.max,
                a = Math.abs,
                r = /left|center|right/,
                l = /top|center|bottom/,
                h = /[\+\-]\d+(\.[\d]+)?%?/,
                c = /^\w+/,
                u = /%$/,
                d = t.fn.position;
            (t.position = {
                scrollbarWidth: function () {
                    if (void 0 !== n) return n;
                    var e,
                        i,
                        s = t(
                            "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
                        ),
                        o = s.children()[0];
                    return (
                        t("body").append(s),
                        (e = o.offsetWidth),
                        s.css("overflow", "scroll"),
                        (i = o.offsetWidth),
                        e === i && (i = s[0].clientWidth),
                        s.remove(),
                        (n = e - i)
                    );
                },
                getScrollInfo: function (e) {
                    var i =
                            e.isWindow || e.isDocument
                                ? ""
                                : e.element.css("overflow-x"),
                        s =
                            e.isWindow || e.isDocument
                                ? ""
                                : e.element.css("overflow-y"),
                        n =
                            "scroll" === i ||
                            ("auto" === i &&
                                e.width < e.element[0].scrollWidth),
                        o =
                            "scroll" === s ||
                            ("auto" === s &&
                                e.height < e.element[0].scrollHeight);
                    return {
                        width: o ? t.position.scrollbarWidth() : 0,
                        height: n ? t.position.scrollbarWidth() : 0,
                    };
                },
                getWithinInfo: function (e) {
                    var i = t(e || window),
                        s = t.isWindow(i[0]),
                        n = !!i[0] && 9 === i[0].nodeType,
                        o = !s && !n;
                    return {
                        element: i,
                        isWindow: s,
                        isDocument: n,
                        offset: o ? t(e).offset() : { left: 0, top: 0 },
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: i.outerWidth(),
                        height: i.outerHeight(),
                    };
                },
            }),
                (t.fn.position = function (n) {
                    if (!n || !n.of) return d.apply(this, arguments);
                    n = t.extend({}, n);
                    var u,
                        p,
                        f,
                        g,
                        m,
                        _,
                        v = t(n.of),
                        b = t.position.getWithinInfo(n.within),
                        y = t.position.getScrollInfo(b),
                        w = (n.collision || "flip").split(" "),
                        k = {};
                    return (
                        (_ = s(v)),
                        v[0].preventDefault && (n.at = "left top"),
                        (p = _.width),
                        (f = _.height),
                        (g = _.offset),
                        (m = t.extend({}, g)),
                        t.each(["my", "at"], function () {
                            var t,
                                e,
                                i = (n[this] || "").split(" ");
                            1 === i.length &&
                                (i = r.test(i[0])
                                    ? i.concat(["center"])
                                    : l.test(i[0])
                                    ? ["center"].concat(i)
                                    : ["center", "center"]),
                                (i[0] = r.test(i[0]) ? i[0] : "center"),
                                (i[1] = l.test(i[1]) ? i[1] : "center"),
                                (t = h.exec(i[0])),
                                (e = h.exec(i[1])),
                                (k[this] = [t ? t[0] : 0, e ? e[0] : 0]),
                                (n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]);
                        }),
                        1 === w.length && (w[1] = w[0]),
                        "right" === n.at[0]
                            ? (m.left += p)
                            : "center" === n.at[0] && (m.left += p / 2),
                        "bottom" === n.at[1]
                            ? (m.top += f)
                            : "center" === n.at[1] && (m.top += f / 2),
                        (u = e(k.at, p, f)),
                        (m.left += u[0]),
                        (m.top += u[1]),
                        this.each(function () {
                            var s,
                                r,
                                l = t(this),
                                h = l.outerWidth(),
                                c = l.outerHeight(),
                                d = i(this, "marginLeft"),
                                _ = i(this, "marginTop"),
                                x = h + d + i(this, "marginRight") + y.width,
                                C = c + _ + i(this, "marginBottom") + y.height,
                                D = t.extend({}, m),
                                T = e(k.my, l.outerWidth(), l.outerHeight());
                            "right" === n.my[0]
                                ? (D.left -= h)
                                : "center" === n.my[0] && (D.left -= h / 2),
                                "bottom" === n.my[1]
                                    ? (D.top -= c)
                                    : "center" === n.my[1] && (D.top -= c / 2),
                                (D.left += T[0]),
                                (D.top += T[1]),
                                (s = { marginLeft: d, marginTop: _ }),
                                t.each(["left", "top"], function (e, i) {
                                    t.ui.position[w[e]] &&
                                        t.ui.position[w[e]][i](D, {
                                            targetWidth: p,
                                            targetHeight: f,
                                            elemWidth: h,
                                            elemHeight: c,
                                            collisionPosition: s,
                                            collisionWidth: x,
                                            collisionHeight: C,
                                            offset: [u[0] + T[0], u[1] + T[1]],
                                            my: n.my,
                                            at: n.at,
                                            within: b,
                                            elem: l,
                                        });
                                }),
                                n.using &&
                                    (r = function (t) {
                                        var e = g.left - D.left,
                                            i = e + p - h,
                                            s = g.top - D.top,
                                            r = s + f - c,
                                            u = {
                                                target: {
                                                    element: v,
                                                    left: g.left,
                                                    top: g.top,
                                                    width: p,
                                                    height: f,
                                                },
                                                element: {
                                                    element: l,
                                                    left: D.left,
                                                    top: D.top,
                                                    width: h,
                                                    height: c,
                                                },
                                                horizontal:
                                                    0 > i
                                                        ? "left"
                                                        : e > 0
                                                        ? "right"
                                                        : "center",
                                                vertical:
                                                    0 > r
                                                        ? "top"
                                                        : s > 0
                                                        ? "bottom"
                                                        : "middle",
                                            };
                                        h > p &&
                                            p > a(e + i) &&
                                            (u.horizontal = "center"),
                                            c > f &&
                                                f > a(s + r) &&
                                                (u.vertical = "middle"),
                                            (u.important =
                                                o(a(e), a(i)) > o(a(s), a(r))
                                                    ? "horizontal"
                                                    : "vertical"),
                                            n.using.call(this, t, u);
                                    }),
                                l.offset(t.extend(D, { using: r }));
                        })
                    );
                }),
                (t.ui.position = {
                    fit: {
                        left: function (t, e) {
                            var i,
                                s = e.within,
                                n = s.isWindow ? s.scrollLeft : s.offset.left,
                                a = s.width,
                                r = t.left - e.collisionPosition.marginLeft,
                                l = n - r,
                                h = r + e.collisionWidth - a - n;
                            e.collisionWidth > a
                                ? l > 0 && 0 >= h
                                    ? ((i =
                                          t.left +
                                          l +
                                          e.collisionWidth -
                                          a -
                                          n),
                                      (t.left += l - i))
                                    : (t.left =
                                          h > 0 && 0 >= l
                                              ? n
                                              : l > h
                                              ? n + a - e.collisionWidth
                                              : n)
                                : l > 0
                                ? (t.left += l)
                                : h > 0
                                ? (t.left -= h)
                                : (t.left = o(t.left - r, t.left));
                        },
                        top: function (t, e) {
                            var i,
                                s = e.within,
                                n = s.isWindow ? s.scrollTop : s.offset.top,
                                a = e.within.height,
                                r = t.top - e.collisionPosition.marginTop,
                                l = n - r,
                                h = r + e.collisionHeight - a - n;
                            e.collisionHeight > a
                                ? l > 0 && 0 >= h
                                    ? ((i =
                                          t.top +
                                          l +
                                          e.collisionHeight -
                                          a -
                                          n),
                                      (t.top += l - i))
                                    : (t.top =
                                          h > 0 && 0 >= l
                                              ? n
                                              : l > h
                                              ? n + a - e.collisionHeight
                                              : n)
                                : l > 0
                                ? (t.top += l)
                                : h > 0
                                ? (t.top -= h)
                                : (t.top = o(t.top - r, t.top));
                        },
                    },
                    flip: {
                        left: function (t, e) {
                            var i,
                                s,
                                n = e.within,
                                o = n.offset.left + n.scrollLeft,
                                r = n.width,
                                l = n.isWindow ? n.scrollLeft : n.offset.left,
                                h = t.left - e.collisionPosition.marginLeft,
                                c = h - l,
                                u = h + e.collisionWidth - r - l,
                                d =
                                    "left" === e.my[0]
                                        ? -e.elemWidth
                                        : "right" === e.my[0]
                                        ? e.elemWidth
                                        : 0,
                                p =
                                    "left" === e.at[0]
                                        ? e.targetWidth
                                        : "right" === e.at[0]
                                        ? -e.targetWidth
                                        : 0,
                                f = -2 * e.offset[0];
                            0 > c
                                ? ((i =
                                      t.left +
                                      d +
                                      p +
                                      f +
                                      e.collisionWidth -
                                      r -
                                      o),
                                  (0 > i || a(c) > i) && (t.left += d + p + f))
                                : u > 0 &&
                                  ((s =
                                      t.left -
                                      e.collisionPosition.marginLeft +
                                      d +
                                      p +
                                      f -
                                      l),
                                  (s > 0 || u > a(s)) && (t.left += d + p + f));
                        },
                        top: function (t, e) {
                            var i,
                                s,
                                n = e.within,
                                o = n.offset.top + n.scrollTop,
                                r = n.height,
                                l = n.isWindow ? n.scrollTop : n.offset.top,
                                h = t.top - e.collisionPosition.marginTop,
                                c = h - l,
                                u = h + e.collisionHeight - r - l,
                                d = "top" === e.my[1],
                                p = d
                                    ? -e.elemHeight
                                    : "bottom" === e.my[1]
                                    ? e.elemHeight
                                    : 0,
                                f =
                                    "top" === e.at[1]
                                        ? e.targetHeight
                                        : "bottom" === e.at[1]
                                        ? -e.targetHeight
                                        : 0,
                                g = -2 * e.offset[1];
                            0 > c
                                ? ((s =
                                      t.top +
                                      p +
                                      f +
                                      g +
                                      e.collisionHeight -
                                      r -
                                      o),
                                  (0 > s || a(c) > s) && (t.top += p + f + g))
                                : u > 0 &&
                                  ((i =
                                      t.top -
                                      e.collisionPosition.marginTop +
                                      p +
                                      f +
                                      g -
                                      l),
                                  (i > 0 || u > a(i)) && (t.top += p + f + g));
                        },
                    },
                    flipfit: {
                        left: function () {
                            t.ui.position.flip.left.apply(this, arguments),
                                t.ui.position.fit.left.apply(this, arguments);
                        },
                        top: function () {
                            t.ui.position.flip.top.apply(this, arguments),
                                t.ui.position.fit.top.apply(this, arguments);
                        },
                    },
                });
        })(),
        t.ui.position;
});
