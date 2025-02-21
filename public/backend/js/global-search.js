$(function () {
    var t = $('[data-bb-toggle="gs-modal"]'),
        e = $("#gs-no-result-template"),
        n = $('[data-bb-toggle="gs-form"]'),
        a = $('[data-bb-toggle="gs-input"]'),
        o = "",
        r = function (t) {
            t && (t.addClass("active"), t.attr("aria-selected", "true"));
        },
        i = function (t) {
            t && (t.removeClass("active"), t.attr("aria-selected", "false"));
        },
        s = null,
        l = function () {
            return $('[data-bb-toggle="gs-result"]');
        },
        c = function () {
            var t = l(),
                e = t.find("a.active");
            return e.length <= 0 && (e = t.find("a:first")), e;
        },
        d = function () {
            var t = l().find("a");
            if (!(t.length <= 0)) {
                t.attr("aria-selected", "false"), t.removeClass("active");
                var e = c();
                e.length <= 0 || e.hasClass("active") || r(e);
            }
        },
        f = function (e) {
            if ((e.preventDefault(), t.hasClass("show"))) {
                var r = a.val();
                if (r !== o) {
                    o = r;
                    var i = l();
                    $httpClient
                        .make()
                        .withLoading(i)
                        .get(n.attr("action"), { keyword: r })
                        .then(function (t) {
                            var e = t.data;
                            i.html(e.data), d();
                        });
                }
            }
        };
    $(document).on("keydown", function (e) {
        t.hasClass("show") ||
            (((("Slash" === e.code || "KeyK" === e.code) &&
                (e.metaKey || e.ctrlKey)) ||
                ("Slash" === e.code && "BODY" === e.target.tagName)) &&
                t.modal("show"));
    }),
        $(document).on("keydown", function (e) {
            if (
                t.hasClass("show") &&
                ("ArrowUp" === e.code || "ArrowDown" === e.code)
            ) {
                var n = "ArrowDown" === e.code,
                    a = c();
                if (!(a.length <= 0))
                    if (n) {
                        var o = a.next();
                        if ((i(a), o.length <= 0)) {
                            var s = l().find("a:first");
                            return void r(s);
                        }
                        r(o);
                    } else {
                        var d = a.prev();
                        if ((i(a), d.length <= 0)) {
                            var f = l().find("a:last");
                            return void r(f);
                        }
                        r(d);
                    }
            }
        }),
        $(document).on("keydown", function (e) {
            if (t.hasClass("show") && "Enter" === e.code) {
                var n = c();
                n.length <= 0 || n[0].click();
            }
        }),
        n.on("submit", f),
        t.on("show.bs.modal", function () {
            l().html(e.html());
        }),
        t.on("shown.bs.modal", function () {
            a.trigger("focus"), d();
        }),
        t.on("hidden.bs.modal", function () {
            a.val("");
        }),
        a.on("keydown", function (t) {
            "ArrowUp" !== t.key && "ArrowDown" !== t.key && "Enter" !== t.key
                ? (function (t) {
                      s && clearTimeout(s),
                          (s = setTimeout(function () {
                              return f(t);
                          }, 200));
                  })(t)
                : t.preventDefault();
        }),
        $('[data-bb-toggle="gs-navbar-input"]').on("focus", function () {
            return t.modal("show");
        });
});
