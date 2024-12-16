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
            var o = t[r];
            (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, n(o.key), o);
        }
    }
    function r(e, t, r) {
        return (
            (t = n(t)) in e
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
    function n(t) {
        var r = (function (t, r) {
            if ("object" != e(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var o = n.call(t, r || "default");
                if ("object" != e(o)) return o;
                throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                );
            }
            return ("string" === r ? String : Number)(t);
        })(t, "string");
        return "symbol" == e(r) ? r : r + "";
    }
    var o = (function () {
        return (
            (e = function e() {
                var t = this;
                !(function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                })(this, e),
                    r(this, "modal", $(document).find(".crop-image-modal")),
                    r(this, "image", this.modal.find(".cropper-image")),
                    r(this, "cropper", null),
                    this.modal
                        .on("change", 'input[type="file"]', function (e) {
                            var r,
                                n,
                                o = e.target.files;
                            o &&
                                o.length > 0 &&
                                ((n = o[0]),
                                URL
                                    ? t.image.prop(
                                          "src",
                                          URL.createObjectURL(n)
                                      )
                                    : FileReader &&
                                      (((r = new FileReader()).onload =
                                          function () {
                                              t.image.prop("src", r.result);
                                          }),
                                      r.readAsDataURL(n))),
                                t.init();
                        })
                        .on("click", 'button[type="submit"]', function (e) {
                            e.preventDefault();
                            var r = $(e.currentTarget),
                                n = t.modal.find("form");
                            t.cropper
                                .getCroppedCanvas({ width: 160, height: 160 })
                                .toBlob(function (e) {
                                    var o = new FormData();
                                    o.append(
                                        n
                                            .find('input[type="file"]')
                                            .prop("name"),
                                        e
                                    ),
                                        $httpClient
                                            .make()
                                            .withButtonLoading(r)
                                            .post(n.prop("action"), o)
                                            .then(function (e) {
                                                var r = e.data;
                                                t.updateImage(r.data.url),
                                                    Botble.showSuccess(
                                                        r.message
                                                    ),
                                                    t.modal.modal("hide");
                                            });
                                });
                        })
                        .on("shown.bs.modal", function (e) {
                            var r = $(e.relatedTarget)
                                    .closest(".crop-image-container")
                                    .find(".crop-image-original"),
                                n = new Image();
                            (n.src = r.prop("src")),
                                (n.onload = function () {
                                    t.image.prop("src", n.src), t.init();
                                });
                        })
                        .on("hidden.bs.modal", function () {
                            t.destroy();
                        }),
                    $(document).on(
                        "click",
                        '[data-bb-toggle="delete-avatar"]',
                        function (e) {
                            e.preventDefault();
                            var r = $(e.currentTarget);
                            $httpClient
                                .make()
                                .post(r.prop("href"))
                                .then(function (e) {
                                    var r = e.data;
                                    t.updateImage(r.data.url),
                                        Botble.showSuccess(r.message),
                                        t.modal.modal("hide");
                                });
                        }
                    );
            }),
            (n = [
                {
                    key: "init",
                    value: function () {
                        this.cropper && this.cropper.destroy(),
                            (this.cropper = new Cropper(this.image[0], {
                                aspectRatio: 1,
                                preview: ".img-preview",
                            }));
                    },
                },
                {
                    key: "destroy",
                    value: function () {
                        this.cropper.destroy(),
                            (this.cropper = null),
                            this.image.prop("src", ""),
                            this.modal.find('input[type="file"]').val("");
                    },
                },
                {
                    key: "updateImage",
                    value: function (e) {
                        $(document)
                            .find(".crop-image-original")
                            .each(function (t, r) {
                                $(r).is("img")
                                    ? $(r).prop("src", e)
                                    : $(r).css(
                                          "background-image",
                                          "url(".concat(e, ")")
                                      );
                            });
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
        new o();
    });
})();
