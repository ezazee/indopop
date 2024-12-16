(() => {
    function t(a) {
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
            t(a)
        );
    }
    function a(t, a) {
        for (var r = 0; r < a.length; r++) {
            var e = a[r];
            (e.enumerable = e.enumerable || !1),
                (e.configurable = !0),
                "value" in e && (e.writable = !0),
                Object.defineProperty(t, i(e.key), e);
        }
    }
    function i(a) {
        var i = (function (a, i) {
            if ("object" != t(a) || !a) return a;
            var r = a[Symbol.toPrimitive];
            if (void 0 !== r) {
                var e = r.call(a, i || "default");
                if ("object" != t(e)) return e;
                throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                );
            }
            return ("string" === i ? String : Number)(a);
        })(a, "string");
        return "symbol" == t(i) ? i : i + "";
    }
    var r = (function () {
        function t(a) {
            !(function (t, a) {
                if (!(t instanceof a))
                    throw new TypeError("Cannot call a class as a function");
            })(this, t),
                (this.$container = a),
                (this.$avatarView = this.$container.find(".avatar-view")),
                (this.$triggerButton = this.$avatarView.find(
                    ".action .edit-avatar"
                )),
                (this.$triggerButtonRemove = this.$avatarView.find(
                    ".action .remove-avatar"
                )),
                (this.$avatar = this.$avatarView.find("img")),
                (this.$avatarModal = this.$container.find("#avatar-modal")),
                (this.$loading = this.$container.find(".loading")),
                (this.$avatarForm = this.$avatarModal.find(".avatar-form")),
                (this.$avatarSrc = this.$avatarForm.find(".avatar-src")),
                (this.$avatarData = this.$avatarForm.find(".avatar-data")),
                (this.$avatarInput = this.$avatarForm.find(".avatar-input")),
                (this.$avatarSave = this.$avatarForm.find(".avatar-save")),
                (this.$avatarWrapper =
                    this.$avatarModal.find(".avatar-wrapper")),
                (this.$avatarPreview =
                    this.$avatarModal.find(".avatar-preview")),
                (this.support = {
                    fileList: !!$('<input type="file">').prop("files"),
                    fileReader: !!window.FileReader,
                    formData: !!window.FormData,
                });
        }
        return (
            (i = t),
            (e = [
                {
                    key: "isImageFile",
                    value: function (t) {
                        return t.type
                            ? /^image\/\w+$/.test(t.type)
                            : /\.(jpg|jpeg|png|gif)$/.test(t);
                    },
                },
            ]),
            (r = [
                {
                    key: "init",
                    value: function () {
                        (this.support.datauri =
                            this.support.fileList && this.support.fileReader),
                            this.support.formData || this.initIframe(),
                            this.initTooltip(),
                            this.initModal(),
                            this.addListener();
                    },
                },
                {
                    key: "addListener",
                    value: function () {
                        this.$triggerButton.on(
                            "click",
                            $.proxy(this.click, this)
                        ),
                            this.$avatarInput.on(
                                "change",
                                $.proxy(this.change, this)
                            ),
                            this.$avatarForm.on(
                                "submit",
                                $.proxy(this.submit, this)
                            ),
                            this.$triggerButtonRemove.on("click", function () {
                                $httpClient
                                    .make()
                                    .post($(this).attr("data-url"))
                                    .then(function (t) {
                                        t.data.error ||
                                            (Botble.showSuccess(t.data.message),
                                            $(".image-preview").attr(
                                                "src",
                                                t.data.data.url
                                            ),
                                            $(".avatar-view")
                                                .find(".action .remove-avatar")
                                                .hide());
                                    });
                            });
                    },
                },
                {
                    key: "initTooltip",
                    value: function () {
                        this.$avatarView.tooltip({ placement: "bottom" });
                    },
                },
                {
                    key: "initModal",
                    value: function () {
                        this.$avatarModal.modal("hide"), this.initPreview();
                    },
                },
                {
                    key: "initPreview",
                    value: function () {
                        var t = this.$avatar.prop("src");
                        this.$avatarPreview
                            .empty()
                            .html('<img src="' + t + '" alt="avatar">');
                    },
                },
                {
                    key: "initIframe",
                    value: function () {
                        var t =
                                "avatar-iframe-" +
                                Math.random().toString().replace(".", ""),
                            a = $(
                                '<iframe name="' +
                                    t +
                                    '" style="display:none;"></iframe>'
                            ),
                            i = !0,
                            r = this;
                        (this.$iframe = a),
                            this.$avatarForm.attr("target", t).after(a),
                            this.$iframe.on("load", function () {
                                var t, a, e;
                                try {
                                    (a = this.contentWindow),
                                        (t = (e =
                                            (e = this.contentDocument) ||
                                            a.document)
                                            ? e.body.innerText
                                            : null);
                                } catch (t) {}
                                t
                                    ? r.submitDone(t)
                                    : i
                                    ? (i = !1)
                                    : Botble.showError("Image upload failed!"),
                                    r.submitEnd();
                            });
                    },
                },
                {
                    key: "click",
                    value: function () {
                        this.$avatarModal.modal("show");
                    },
                },
                {
                    key: "change",
                    value: function () {
                        var a, i;
                        this.support.datauri
                            ? (a = this.$avatarInput.prop("files")).length >
                                  0 &&
                              ((i = a[0]), t.isImageFile(i) && this.read(i))
                            : ((i = this.$avatarInput.val()),
                              t.isImageFile(i) && this.syncUpload());
                    },
                },
                {
                    key: "submit",
                    value: function () {
                        return this.$avatarSrc.val() || this.$avatarInput.val()
                            ? this.support.formData
                                ? (this.ajaxUpload(), !1)
                                : void 0
                            : (Botble.showError("Please select image!"), !1);
                    },
                },
                {
                    key: "read",
                    value: function (t) {
                        var a = this,
                            i = new FileReader();
                        i.readAsDataURL(t),
                            (i.onload = function () {
                                (a.url = this.result), a.startCropper();
                            });
                    },
                },
                {
                    key: "startCropper",
                    value: function () {
                        var t = this;
                        this.active
                            ? this.$img.cropper("replace", this.url)
                            : ((this.$img = $(
                                  '<img src="' + this.url + '" alt="avatar">'
                              )),
                              this.$avatarWrapper.empty().html(this.$img),
                              this.$img.cropper({
                                  aspectRatio: 1,
                                  rotatable: !0,
                                  preview: this.$avatarPreview.selector,
                                  done: function (a) {
                                      var i = [
                                          '{"x":' + a.x,
                                          '"y":' + a.y,
                                          '"height":' + a.height,
                                          '"width":' + a.width + "}",
                                      ].join();
                                      t.$avatarData.val(i);
                                  },
                              }),
                              (this.active = !0));
                    },
                },
                {
                    key: "stopCropper",
                    value: function () {
                        this.active &&
                            (this.$img.cropper("destroy"),
                            this.$img.remove(),
                            (this.active = !1));
                    },
                },
                {
                    key: "ajaxUpload",
                    value: function () {
                        var t = this,
                            a = this.$avatarForm.attr("action"),
                            i = new FormData(this.$avatarForm[0]);
                        this.submitStart(),
                            $httpClient
                                .make()
                                .post(a, i)
                                .then(function (a) {
                                    return t.submitDone(a.data);
                                })
                                .finally(function () {
                                    return t.submitEnd();
                                });
                    },
                },
                {
                    key: "syncUpload",
                    value: function () {
                        this.$avatarSave.trigger("click");
                    },
                },
                {
                    key: "submitStart",
                    value: function () {
                        this.$loading.fadeIn(),
                            this.$avatarSave
                                .attr("disabled", !0)
                                .text("Saving...");
                    },
                },
                {
                    key: "submitDone",
                    value: function (t) {
                        try {
                            t = $.parseJSON(t);
                        } catch (t) {}
                        t && !t.error && t.data
                            ? ((this.url = t.data.url),
                              this.support.datauri || this.uploaded
                                  ? ((this.uploaded = !1), this.cropDone())
                                  : ((this.uploaded = !0),
                                    this.$avatarSrc.val(this.url),
                                    this.startCropper()),
                              $(".avatar-view")
                                  .find(".action .remove-avatar")
                                  .show(),
                              this.$avatarInput.val(""),
                              Botble.showSuccess(t.message))
                            : Botble.showError(t.message);
                    },
                },
                {
                    key: "submitEnd",
                    value: function () {
                        this.$loading.fadeOut(),
                            this.$avatarSave
                                .removeAttr("disabled")
                                .text("Save");
                    },
                },
                {
                    key: "cropDone",
                    value: function () {
                        this.$avatarSrc.val(""),
                            this.$avatarData.val(""),
                            this.$avatar.prop("src", this.url),
                            $(".user-menu img").prop("src", this.url),
                            $(".user.dropdown img").prop("src", this.url),
                            this.stopCropper(),
                            this.initModal();
                    },
                },
            ]) && a(i.prototype, r),
            e && a(i, e),
            Object.defineProperty(i, "prototype", { writable: !1 }),
            i
        );
        var i, r, e;
    })();
    $(function () {
        new r($(".crop-avatar")).init();
    });
})();
