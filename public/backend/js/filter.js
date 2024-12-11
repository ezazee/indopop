(() => {
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
        for (var r = 0; r < t.length; r++) {
            var i = t[r];
            (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, a(i.key), i);
        }
    }
    function r(e, t, r) {
        return (
            (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (e[t] = r),
            e
        );
    }
    function a(t) {
        var r = (function (t, r) {
            if ("object" != e(t) || !t) return t;
            var a = t[Symbol.toPrimitive];
            if (void 0 !== a) {
                var i = a.call(t, r || "default");
                if ("object" != e(i)) return i;
                throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                );
            }
            return ("string" === r ? String : Number)(t);
        })(t, "string");
        return "symbol" == e(r) ? r : r + "";
    }
    var i = (function () {
        return (
            (e = function e() {
                !(function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                })(this, e),
                    r(
                        this,
                        "$filterForm",
                        $(document).find("form.filter-form")
                    ),
                    r(
                        this,
                        "$table",
                        this.$filterForm.closest(".table-wrapper").find("table")
                    );
            }),
            (a = [
                {
                    key: "loadData",
                    value: function (e) {
                        $httpClient
                            .make()
                            .get($(".filter-data-url").val(), {
                                class: $(".filter-data-class").val(),
                                key: e.val(),
                                value: e
                                    .closest(".filter-item")
                                    .find(".filter-column-value")
                                    .val(),
                            })
                            .then(function (t) {
                                var r = t.data,
                                    a = $.map(r.data, function (e, t) {
                                        return { id: t, name: e };
                                    });
                                e.closest(".filter-item")
                                    .find(".filter-column-value-wrap")
                                    .html(r.html);
                                var i = e
                                    .closest(".filter-item")
                                    .find(".filter-column-value");
                                i.length &&
                                    "text" === i.prop("type") &&
                                    (i.typeahead({ source: a }),
                                    (i.data("typeahead").source = a)),
                                    Botble.initResources();
                            });
                    },
                },
                {
                    key: "init",
                    value: function () {
                        var e = this,
                            t = this;
                        $.each(
                            $(".filter-items-wrap .filter-column-key"),
                            function (e, r) {
                                $(r).val() && t.loadData($(r));
                            }
                        ),
                            this.$filterForm
                                .on(
                                    "change",
                                    ".filter-column-key",
                                    function (e) {
                                        t.loadData($(e.currentTarget));
                                    }
                                )
                                .on("click", ".add-more-filter", function () {
                                    var e = $(document)
                                        .find(".sample-filter-item-wrap")
                                        .html();
                                    $(document)
                                        .find(".filter-items-wrap")
                                        .append(
                                            e
                                                .replace("<script>", "")
                                                .replace("<\\/script>", "")
                                        ),
                                        Botble.initResources();
                                    var r = $(document)
                                        .find(
                                            ".filter-items-wrap .filter-item:last-child"
                                        )
                                        .find(".filter-column-key");
                                    $(r).val() && t.loadData(r);
                                })
                                .on(
                                    "click",
                                    ".btn-remove-filter-item",
                                    function (e) {
                                        e.preventDefault();
                                        var t = $(e.currentTarget);
                                        t.closest(".filter-item").remove(),
                                            t.tooltip("hide");
                                    }
                                )
                                .on("click", ".btn-apply", function (t) {
                                    t.preventDefault();
                                    var r = $(t.currentTarget).closest(
                                        "form.filter-form"
                                    );
                                    e.$filterForm
                                        .find(
                                            '[data-bb-toggle="datatable-reset-filter"]'
                                        )
                                        .show();
                                    var a = new URL(window.location.href),
                                        i = new URLSearchParams(a.search),
                                        n = r.serializeArray(),
                                        l = {};
                                    $.each(n, function (e, t) {
                                        var r = t.name;
                                        if (
                                            "string" == typeof r &&
                                            r.endsWith("[]")
                                        ) {
                                            var a = (l[r] = l[r] || 0);
                                            i.set(
                                                "".concat(
                                                    r.replace(
                                                        "[]",
                                                        "[".concat(a, "]")
                                                    )
                                                ),
                                                t.value
                                            ),
                                                l[r]++;
                                        } else i.set(t.name, t.value);
                                    }),
                                        window.history.pushState(
                                            {},
                                            "",
                                            ""
                                                .concat(a.pathname, "?")
                                                .concat(i.toString())
                                        ),
                                        e.reloadDatatable(e.$table.DataTable());
                                })
                                .on(
                                    "click",
                                    '[data-bb-toggle="datatable-reset-filter"]',
                                    function (t) {
                                        t.preventDefault(),
                                            e.$filterForm
                                                .find(
                                                    ".form-filter:not(.filter-item-default)"
                                                )
                                                .remove(),
                                            e.$filterForm
                                                .find(".filter-item")
                                                .find(".filter-column-key")
                                                .val("")
                                                .trigger("change"),
                                            e.$filterForm
                                                .find(".filter-item")
                                                .find(".filter-column-operator")
                                                .val("="),
                                            e.$filterForm
                                                .find(".filter-item")
                                                .find(".filter-column-value")
                                                .val(""),
                                            $(t.currentTarget).hide();
                                        var r = new URL(window.location.href);
                                        window.history.pushState(
                                            {},
                                            "",
                                            r.pathname
                                        ),
                                            e.reloadDatatable(
                                                e.$table.DataTable()
                                            );
                                    }
                                );
                    },
                },
                {
                    key: "reloadDatatable",
                    value: function (e) {
                        e.ajax.url(window.location.href).load();
                    },
                },
            ]) && t(e.prototype, a),
            i && t(e, i),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
        );
        var e, a, i;
    })();
    $(function () {
        new i().init();
    });
})();
