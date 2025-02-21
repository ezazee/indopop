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
            var i = t[o];
            (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, n(i.key), i);
        }
    }
    function n(t) {
        var n = (function (t, n) {
            if ("object" != e(t) || !t) return t;
            var o = t[Symbol.toPrimitive];
            if (void 0 !== o) {
                var i = o.call(t, n || "default");
                if ("object" != e(i)) return i;
                throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                );
            }
            return ("string" === n ? String : Number)(t);
        })(t, "string");
        return "symbol" == e(n) ? n : n + "";
    }
    var o = (function () {
        function e() {
            !(function (e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            })(this, e),
                (this.$document = $(document));
        }
        return (
            (n = e),
            (i = [
                {
                    key: "updateSEOTitle",
                    value: function (e) {
                        e
                            ? ($("#seo_title").val() ||
                                  $(".page-title-seo").text(e),
                              $(".default-seo-description").addClass("hidden"),
                              $(".existed-seo-meta").removeClass("hidden"))
                            : ($(".default-seo-description").removeClass(
                                  "hidden"
                              ),
                              $(".existed-seo-meta").addClass("hidden"));
                    },
                },
                {
                    key: "updateSEODescription",
                    value: function (e) {
                        e &&
                            ($("#seo_description").val() ||
                                $(".page-description-seo").text(e));
                    },
                },
            ]),
            (o = [
                {
                    key: "handleMetaBox",
                    value: function () {
                        var t = this.$document.find("#sample-permalink a");
                        t.length &&
                            $(".page-url-seo p").text(
                                t.prop("href").replace("?preview=true", "")
                            ),
                            this.$document.on(
                                "click",
                                ".btn-trigger-show-seo-detail",
                                function (e) {
                                    e.preventDefault(),
                                        $(".seo-edit-section").toggleClass(
                                            "hidden"
                                        );
                                }
                            ),
                            this.$document.on(
                                "keyup",
                                "input[name=name]",
                                function (t) {
                                    e.updateSEOTitle($(t.currentTarget).val());
                                }
                            ),
                            this.$document.on(
                                "keyup",
                                "input[name=title]",
                                function (t) {
                                    e.updateSEOTitle($(t.currentTarget).val());
                                }
                            ),
                            this.$document.on(
                                "keyup",
                                "textarea[name=description]",
                                function (t) {
                                    e.updateSEODescription(
                                        $(t.currentTarget).val()
                                    );
                                }
                            ),
                            this.$document.on(
                                "keyup",
                                "#seo_title",
                                function (e) {
                                    if ($(e.currentTarget).val())
                                        $(".page-title-seo").text(
                                            $(e.currentTarget).val()
                                        ),
                                            $(
                                                ".default-seo-description"
                                            ).addClass("hidden"),
                                            $(".existed-seo-meta").removeClass(
                                                "hidden"
                                            );
                                    else {
                                        var t = $("input[name=name]");
                                        t.val()
                                            ? $(".page-title-seo").text(t.val())
                                            : $(".page-title-seo").text(
                                                  $("input[name=title]").val()
                                              );
                                    }
                                }
                            ),
                            this.$document.on(
                                "keyup",
                                "#seo_description",
                                function (e) {
                                    $(e.currentTarget).val()
                                        ? $(".page-description-seo").text(
                                              $(e.currentTarget).val()
                                          )
                                        : $(".page-description-seo").text(
                                              $(
                                                  "textarea[name=description]"
                                              ).val()
                                          );
                                }
                            );
                    },
                },
            ]) && t(n.prototype, o),
            i && t(n, i),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
        );
        var n, o, i;
    })();
    $(function () {
        new o().handleMetaBox();
    });
})();
