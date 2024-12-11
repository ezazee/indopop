(() => {
    function n(t) {
        return (
            (n =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                    ? function (n) {
                          return typeof n;
                      }
                    : function (n) {
                          return n &&
                              "function" == typeof Symbol &&
                              n.constructor === Symbol &&
                              n !== Symbol.prototype
                              ? "symbol"
                              : typeof n;
                      }),
            n(t)
        );
    }
    function t(n, t) {
        for (var e = 0; e < t.length; e++) {
            var r = t[e];
            (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(n, a(r.key), r);
        }
    }
    function e(n, e, a) {
        return (
            e && t(n.prototype, e),
            a && t(n, a),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
        );
    }
    function a(t) {
        var e = (function (t, e) {
            if ("object" != n(t) || !t) return t;
            var a = t[Symbol.toPrimitive];
            if (void 0 !== a) {
                var r = a.call(t, e || "default");
                if ("object" != n(r)) return r;
                throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                );
            }
            return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == n(e) ? e : e + "";
    }
    var r = e(function n() {
        !(function (n, t) {
            if (!(n instanceof t))
                throw new TypeError("Cannot call a class as a function");
        })(this, n);
        var t,
            e = $(document).find(".slug-field-wrapper");
        $(document).on(
            "blur",
            ".js-base-form input[name=".concat(e.data("field-name"), "]"),
            function (n) {
                if (
                    !(e = $(document).find(".slug-field-wrapper"))
                        .find('input[name="slug"]')
                        .is("[readonly]")
                ) {
                    var t = $(n.currentTarget).val();
                    null === t ||
                        "" === t ||
                        e.find('input[name="slug"]').val() ||
                        r(t, 0);
                }
            }
        ),
            $(document).on("keyup", 'input[name="slug"]', function (n) {
                clearTimeout(t),
                    (t = setTimeout(function () {
                        var t = $(n.currentTarget);
                        if (
                            0 !==
                            (e = $(document).find(".slug-field-wrapper")).has(
                                ".slug-data"
                            ).length
                        ) {
                            var a = t.val();
                            null !== a && "" !== a
                                ? r(a, e.find(".slug-data").data("id") || 0)
                                : t.addClass("is-invalid");
                        }
                    }, 700));
            }),
            $(document).on(
                "click",
                '[data-bb-toggle="generate-slug"]',
                function (n) {
                    n.preventDefault();
                    var t = $(n.currentTarget)
                        .closest(".js-base-form")
                        .find("input[name=".concat(e.data("field-name"), "]"));
                    null !== t.val() &&
                        "" !== t.val() &&
                        r(t.val(), e.find(".slug-data").data("id") || 0);
                }
            );
        var a = function () {
                var n =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0],
                    t = e.find(".slug-actions a"),
                    a = $(
                        '<div class="spinner-border spinner-border-sm" role="status"></div>'
                    );
                n
                    ? (t.removeClass("d-none"),
                      e.find(".spinner-border").remove())
                    : (t.addClass("d-none"), t.after(a));
            },
            r = function (n, t) {
                var r = (e = $(document).find(".slug-field-wrapper")).closest(
                        "form"
                    ),
                    i = e.find(".slug-data");
                e.length &&
                    i.length &&
                    r.length &&
                    (a(),
                    $httpClient
                        .make()
                        .post(i.data("url"), {
                            value: n,
                            slug_id: t.toString(),
                            model: r.find('input[name="model"]').val(),
                            _token: r.find('input[name="_token"]').val(),
                        })
                        .then(function (n) {
                            var t = n.data;
                            a(!0);
                            var o = ""
                                .concat(i.data("view"))
                                .concat(t.toString().replace("/", ""));
                            e.find('input[name="slug"]').val(t),
                                r.find(".page-url-seo p").text(o),
                                e.find(".slug-current").val(t);
                        }));
            };
    });
    $(function () {
        new r();
    });
})();
