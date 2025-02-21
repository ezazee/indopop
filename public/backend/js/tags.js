(() => {
    function t(e) {
        return (
            (t =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t &&
                              "function" == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? "symbol"
                              : typeof t;
                      }),
            t(e)
        );
    }
    function e(t, e) {
        return (
            (function (t) {
                if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
                var n =
                    null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                              t[Symbol.iterator]) ||
                          t["@@iterator"];
                if (null != n) {
                    var a,
                        r,
                        i,
                        o,
                        l = [],
                        s = !0,
                        u = !1;
                    try {
                        if (((i = (n = n.call(t)).next), 0 === e)) {
                            if (Object(n) !== n) return;
                            s = !1;
                        } else
                            for (
                                ;
                                !(s = (a = i.call(n)).done) &&
                                (l.push(a.value), l.length !== e);
                                s = !0
                            );
                    } catch (t) {
                        (u = !0), (r = t);
                    } finally {
                        try {
                            if (
                                !s &&
                                null != n.return &&
                                ((o = n.return()), Object(o) !== o)
                            )
                                return;
                        } finally {
                            if (u) throw r;
                        }
                    }
                    return l;
                }
            })(t, e) ||
            (function (t, e) {
                if (t) {
                    if ("string" == typeof t) return n(t, e);
                    var a = {}.toString.call(t).slice(8, -1);
                    return (
                        "Object" === a &&
                            t.constructor &&
                            (a = t.constructor.name),
                        "Map" === a || "Set" === a
                            ? Array.from(t)
                            : "Arguments" === a ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                            ? n(t, e)
                            : void 0
                    );
                }
            })(t, e) ||
            (function () {
                throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
            })()
        );
    }
    function n(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, a = Array(e); n < e; n++) a[n] = t[n];
        return a;
    }
    function a(t, e) {
        for (var n = 0; n < e.length; n++) {
            var a = e[n];
            (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(t, r(a.key), a);
        }
    }
    function r(e) {
        var n = (function (e, n) {
            if ("object" != t(e) || !e) return e;
            var a = e[Symbol.toPrimitive];
            if (void 0 !== a) {
                var r = a.call(e, n || "default");
                if ("object" != t(r)) return r;
                throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                );
            }
            return ("string" === n ? String : Number)(e);
        })(e, "string");
        return "symbol" == t(n) ? n : n + "";
    }
    var i = (function () {
        return (
            (t = function t() {
                !(function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                })(this, t);
            }),
            (n = [
                {
                    key: "init",
                    value: function () {
                        $(document)
                            .find(".tags")
                            .each(function (t, e) {
                                if (!$(e).hasClass("tagify")) {
                                    var n = new Tagify(e, {
                                        keepInvalidTags:
                                            void 0 ===
                                                $(e).data(
                                                    "keep-invalid-tags"
                                                ) ||
                                            $(e).data("keep-invalid-tags"),
                                        enforceWhitelist:
                                            void 0 !==
                                                $(e).data(
                                                    "enforce-whitelist"
                                                ) &&
                                            $(e).data("enforce-whitelist"),
                                        delimiters:
                                            void 0 !== $(e).data("delimiters")
                                                ? $(e).data("delimiters")
                                                : ",",
                                        whitelist: e.value
                                            ? e.value.trim().split(/\s*,\s*/)
                                            : [],
                                        userInput:
                                            void 0 ===
                                                $(e).data("user-input") ||
                                            $(e).data("user-input"),
                                    });
                                    $(e).data("url") &&
                                        n.on("input", function (t) {
                                            (n.settings.whitelist.length = 0),
                                                n
                                                    .loading(!0)
                                                    .dropdown.hide.call(n),
                                                $httpClient
                                                    .make()
                                                    .get($(e).data("url"))
                                                    .then(function (e) {
                                                        var a = e.data;
                                                        (n.settings.whitelist =
                                                            a),
                                                            n
                                                                .loading(!1)
                                                                .dropdown.show.call(
                                                                    n,
                                                                    t.detail
                                                                        .value
                                                                );
                                                    });
                                        });
                                }
                            }),
                            document
                                .querySelectorAll(".list-tagify")
                                .forEach(function (t) {
                                    if (
                                        t.dataset.list &&
                                        !$(t).hasClass("tagify")
                                    ) {
                                        for (
                                            var n = JSON.parse(t.dataset.list),
                                                a = [],
                                                r = 0,
                                                i = Object.entries(n);
                                            r < i.length;
                                            r++
                                        ) {
                                            var o = e(i[r], 2),
                                                l = o[0],
                                                s = o[1];
                                            a.push({ value: l, name: s });
                                        }
                                        var u = String(t.value).split(","),
                                            c = a.filter(function (t) {
                                                if (u.includes(String(t.value)))
                                                    return {
                                                        value: t.id,
                                                        name: t.name,
                                                    };
                                            });
                                        new Tagify(t, {
                                            tagTextProp: "name",
                                            enforceWhitelist: !0,
                                            skipInvalid: !0,
                                            dropdown: {
                                                closeOnSelect: !1,
                                                enabled: 0,
                                                classname: "users-list",
                                                searchKeys: ["value", "name"],
                                            },
                                            templates: {
                                                tag: function (t) {
                                                    return '\n                <tag title="'
                                                        .concat(
                                                            t.title || t.name,
                                                            "\"\n                        contenteditable='false'\n                        spellcheck='false'\n                        tabIndex=\"-1\"\n                        class=\""
                                                        )
                                                        .concat(
                                                            this.settings
                                                                .classNames.tag,
                                                            " "
                                                        )
                                                        .concat(
                                                            t.class
                                                                ? t.class
                                                                : "",
                                                            '"\n                        '
                                                        )
                                                        .concat(
                                                            this.getAttributes(
                                                                t
                                                            ),
                                                            ">\n                    <x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>\n                    <div class=\"d-flex align-items-center\">\n                        <span class='tagify__tag-text'>"
                                                        )
                                                        .concat(
                                                            t.name,
                                                            "</span>\n                    </div>\n                </tag>\n            "
                                                        );
                                                },
                                                dropdownItem: function (t) {
                                                    return "\n                <div "
                                                        .concat(
                                                            this.getAttributes(
                                                                t
                                                            ),
                                                            '\n                    class="tagify__dropdown__item d-flex align-items-center '
                                                        )
                                                        .concat(
                                                            t.class
                                                                ? t.class
                                                                : "",
                                                            '"\n                    tabindex="0"\n                    role="option">\n\n                    <div class="d-flex flex-column">\n                        <strong>'
                                                        )
                                                        .concat(
                                                            t.name,
                                                            "</strong>\n                    </div>\n                </div>\n            "
                                                        );
                                                },
                                            },
                                            whitelist: a,
                                            originalInputValueFormat: function (
                                                t
                                            ) {
                                                return t
                                                    .map(function (t) {
                                                        return t.value;
                                                    })
                                                    .join(",");
                                            },
                                        }).loadOriginalValues(c);
                                    }
                                });
                    },
                },
            ]),
            n && a(t.prototype, n),
            r && a(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
        );
        var t, n, r;
    })();
    $(function () {
        new i().init();
    });
})();
