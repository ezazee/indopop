/**
 * htmldiff.js a diff algorithm that understands HTML, and produces HTML in the browser.
 *
 * @author https://github.com/tnwinc
 * @see https://github.com/tnwinc/htmldiff.js
 */
!(function () {
    var e, n, t, r, i, f, _, a, o, s, u, h, l, c, d, b, p;
    (o = function (e) {
        return ">" === e;
    }),
        (s = function (e) {
            return "<" === e;
        }),
        (h = function (e) {
            return /^\s+$/.test(e);
        }),
        (u = function (e) {
            return /^\s*<[^>]+>\s*$/.test(e);
        }),
        (l = function (e) {
            return !u(e);
        }),
        (e = (function () {
            return function (e, n, t) {
                (this.start_in_before = e),
                    (this.start_in_after = n),
                    (this.length = t),
                    (this.end_in_before =
                        this.start_in_before + this.length - 1),
                    (this.end_in_after = this.start_in_after + this.length - 1);
            };
        })()),
        (a = function (e) {
            var n, t, r, i, f, _;
            for (f = "char", t = "", _ = [], r = 0, i = e.length; r < i; r++)
                switch (((n = e[r]), f)) {
                    case "tag":
                        o(n)
                            ? ((t += ">"),
                              _.push(t),
                              (t = ""),
                              (f = h(n) ? "whitespace" : "char"))
                            : (t += n);
                        break;
                    case "char":
                        s(n)
                            ? (t && _.push(t), (t = "<"), (f = "tag"))
                            : /\s/.test(n)
                            ? (t && _.push(t), (t = n), (f = "whitespace"))
                            : /[\w\#@]+/i.test(n)
                            ? (t += n)
                            : (t && _.push(t), (t = n));
                        break;
                    case "whitespace":
                        s(n)
                            ? (t && _.push(t), (t = "<"), (f = "tag"))
                            : h(n)
                            ? (t += n)
                            : (t && _.push(t), (t = n), (f = "char"));
                        break;
                    default:
                        throw new Error("Unknown mode " + f);
                }
            return t && _.push(t), _;
        }),
        (f = function (n, t, r, i, f, _, a) {
            var o, s, u, h, l, c, d, b, p, g, w, v, k, m, y;
            for (
                s = i, o = _, u = 0, w = {}, c = h = m = i, y = f;
                m <= y ? h < y : h > y;
                c = m <= y ? ++h : --h
            ) {
                for (k = {}, d = 0, b = (p = r[n[c]]).length; d < b; d++)
                    if (!((l = p[d]) < _)) {
                        if (l >= a) break;
                        null == w[l - 1] && (w[l - 1] = 0),
                            (v = w[l - 1] + 1),
                            (k[l] = v),
                            v > u &&
                                ((s = c - v + 1), (o = l - v + 1), (u = v));
                    }
                w = k;
            }
            return 0 !== u && (g = new e(s, o, u)), g;
        }),
        (d = function (e, n, t, r, i, _, a, o) {
            var s;
            return (
                null != (s = f(e, 0, t, r, i, _, a)) &&
                    (r < s.start_in_before &&
                        _ < s.start_in_after &&
                        d(
                            e,
                            n,
                            t,
                            r,
                            s.start_in_before,
                            _,
                            s.start_in_after,
                            o
                        ),
                    o.push(s),
                    s.end_in_before <= i &&
                        s.end_in_after <= a &&
                        d(
                            e,
                            n,
                            t,
                            s.end_in_before + 1,
                            i,
                            s.end_in_after + 1,
                            a,
                            o
                        )),
                o
            );
        }),
        (r = function (e) {
            var n, t, r, i, f, _;
            if (null == e.find_these)
                throw new Error("params must have find_these key");
            if (null == e.in_these)
                throw new Error("params must have in_these key");
            for (r = {}, n = 0, i = (f = e.find_these).length; n < i; n++)
                for (r[(_ = f[n])] = [], t = e.in_these.indexOf(_); -1 !== t; )
                    r[_].push(t), (t = e.in_these.indexOf(_, t + 1));
            return r;
        }),
        (_ = function (e, n) {
            var t, i;
            return (
                (i = []),
                (t = r({ find_these: e, in_these: n })),
                d(e, n, t, 0, e.length, 0, n.length, i)
            );
        }),
        (n = function (n, t) {
            var r, i, f, a, o, s, u, h, l, c, d, b, p, g, w, v;
            if (null == n) throw new Error("before_tokens?");
            if (null == t) throw new Error("after_tokens?");
            for (
                w = g = 0,
                    p = [],
                    r = {
                        "false,false": "replace",
                        "true,false": "insert",
                        "false,true": "delete",
                        "true,true": "none",
                    },
                    (d = _(n, t)).push(new e(n.length, t.length, 0)),
                    a = f = 0,
                    h = d.length;
                f < h;
                a = ++f
            )
                "none" !==
                    (i =
                        r[
                            [
                                w === (c = d[a]).start_in_before,
                                g === c.start_in_after,
                            ].toString()
                        ]) &&
                    p.push({
                        action: i,
                        start_in_before: w,
                        end_in_before:
                            "insert" !== i ? c.start_in_before - 1 : void 0,
                        start_in_after: g,
                        end_in_after:
                            "delete" !== i ? c.start_in_after - 1 : void 0,
                    }),
                    0 !== c.length &&
                        p.push({
                            action: "equal",
                            start_in_before: c.start_in_before,
                            end_in_before: c.end_in_before,
                            start_in_after: c.start_in_after,
                            end_in_after: c.end_in_after,
                        }),
                    (w = c.end_in_before + 1),
                    (g = c.end_in_after + 1);
            for (
                v = [],
                    u = { action: "none" },
                    o = function (e) {
                        return (
                            "equal" === e.action &&
                            e.end_in_before - e.start_in_before == 0 &&
                            /^\s$/.test(
                                n.slice(
                                    e.start_in_before,
                                    +e.end_in_before + 1 || 9e9
                                )
                            )
                        );
                    },
                    s = 0,
                    l = p.length;
                s < l;
                s++
            )
                (o((b = p[s])) && "replace" === u.action) ||
                ("replace" === b.action && "replace" === u.action)
                    ? ((u.end_in_before = b.end_in_before),
                      (u.end_in_after = b.end_in_after))
                    : (v.push(b), (u = b));
            return v;
        }),
        (t = function (e, n, t) {
            var r, i, f, _, a, o;
            for (
                _ = void 0,
                    f = i = 0,
                    a = (n = n.slice(e, +n.length + 1 || 9e9)).length;
                i < a && ((o = n[f]), !0 === (r = t(o)) && (_ = f), !1 !== r);
                f = ++i
            );
            return null != _ ? n.slice(0, +_ + 1 || 9e9) : [];
        }),
        (p = function (e, n) {
            var r, i, f, _, a;
            for (_ = "", f = 0, r = n.length; ; ) {
                if (f >= r) break;
                if (
                    ((i = t(f, n, l)),
                    (f += i.length),
                    0 !== i.length &&
                        (_ += "<" + e + ">" + i.join("") + "</" + e + ">"),
                    f >= r)
                )
                    break;
                (f += (a = t(f, n, u)).length), (_ += a.join(""));
            }
            return _;
        }),
        ((c = {
            equal: function (e, n, t) {
                return n
                    .slice(e.start_in_before, +e.end_in_before + 1 || 9e9)
                    .join("");
            },
            insert: function (e, n, t) {
                var r;
                return (
                    (r = t.slice(e.start_in_after, +e.end_in_after + 1 || 9e9)),
                    p("ins", r)
                );
            },
            delete: function (e, n, t) {
                var r;
                return (
                    (r = n.slice(
                        e.start_in_before,
                        +e.end_in_before + 1 || 9e9
                    )),
                    p("del", r)
                );
            },
        }).replace = function (e, n, t) {
            return c.delete(e, n, t) + c.insert(e, n, t);
        }),
        (b = function (e, n, t) {
            var r, i, f, _;
            for (_ = "", r = 0, i = t.length; r < i; r++)
                (f = t[r]), (_ += c[f.action](f, e, n));
            return _;
        }),
        ((i = function (e, t) {
            var r;
            return e === t
                ? e
                : ((e = a(e)), (t = a(t)), (r = n(e, t)), b(e, t, r));
        }).html_to_tokens = a),
        (i.find_matching_blocks = _),
        (_.find_match = f),
        (_.create_index = r),
        (i.calculate_operations = n),
        (i.render_operations = b),
        "function" == typeof define
            ? define([], function () {
                  return i;
              })
            : "undefined" != typeof module && null !== module
            ? (module.exports = i)
            : "undefined" != typeof window && (window.htmldiff = i);
})();
