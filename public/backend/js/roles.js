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
        for (var o = 0; o < t.length; o++) {
            var r = t[o];
            (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, n(r.key), r);
        }
    }
    function n(t) {
        var n = (function (t, n) {
            if ("object" != e(t) || !t) return t;
            var o = t[Symbol.toPrimitive];
            if (void 0 !== o) {
                var r = o.call(t, n || "default");
                if ("object" != e(r)) return r;
                throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                );
            }
            return ("string" === n ? String : Number)(t);
        })(t, "string");
        return "symbol" == e(n) ? n : n + "";
    }
    var o = (function () {
        return (
            (e = function e() {
                !(function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                })(this, e);
            }),
            (n = [
                {
                    key: "init",
                    value: function () {
                        var e = $(".has-children");
                        e.length &&
                            e.map(function (e, t) {
                                $(t).treeview({
                                    collapsed: !0,
                                    animated: "medium",
                                    control: "#sidetreecontrol",
                                    persist: "location",
                                });
                            }),
                            $("#allTreeChecked:checkbox").on(
                                "click",
                                function (e) {
                                    e.stopPropagation();
                                    var t = $(e.currentTarget).is(":checked");
                                    $("#checkboxes-permisstions").length &&
                                        $("#checkboxes-permisstions")
                                            .find(":checkbox")
                                            .prop("checked", t)
                                            .each(function () {
                                                var e = $(this),
                                                    t =
                                                        e.find(":checkbox")
                                                            .length ==
                                                        e.find(":checked")
                                                            .length;
                                                e.siblings(":checkbox").prop(
                                                    "checked",
                                                    t
                                                );
                                            });
                                }
                            ),
                            $("#checkboxes-permisstions :checkbox").on(
                                "click",
                                function (e) {
                                    e.stopPropagation();
                                    var t = $(e.currentTarget),
                                        n = t.is(":checked"),
                                        o = t.closest("li"),
                                        r = o.parents("ul");
                                    o.find(":checkbox").prop("checked", n),
                                        r.each(function () {
                                            var e = $(this),
                                                t =
                                                    e.find(":checkbox")
                                                        .length ==
                                                    e.find(":checked").length;
                                            e.siblings(":checkbox").prop(
                                                "checked",
                                                t
                                            );
                                        });
                                }
                            );
                    },
                },
            ]) && t(e.prototype, n),
            o && t(e, o),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
        );
        var e, n, o;
    })();
    $(function () {
        new o().init();
    });
})();
