﻿/*
 Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function () {
    var u = function (d, k) {
        function u() {
            var a = arguments,
                b = this.getContentElement("advanced", "txtdlgGenStyle");
            b && b.commit.apply(b, a);
            this.foreach(function (b) {
                b.commit && "txtdlgGenStyle" != b.id && b.commit.apply(b, a)
            })
        }

        function g(a) {
            if (!v) {
                v = 1;
                var b = this.getDialog(),
                    c = b.imageElement;
                if (c) {
                    this.commit(1, c);
                    a = [].concat(a);
                    for (var d = a.length, h, e = 0; e < d; e++)(h = b.getContentElement.apply(b, a[e].split(":"))) && h.setup(1, c)
                }
                v = 0
            }
        }
        var l = /^\s*(\d+)((px)|\%)?\s*$/i,
            y = /(^\s*(\d+)((px)|\%)?\s*$)|^$/i,
            q = /^\d+px$/,
            z = function () {
                var a = this.getValue(),
                    b = this.getDialog(),
                    c = a.match(l);
                c && ("%" == c[2] && m(b, !1), a = c[1]);
                b.lockRatio && (c = b.originalElement, "true" == c.getCustomData("isReady") && ("txtHeight" == this.id ? (a && "0" != a && (a = Math.round(a / c.$.height * c.$.width)), isNaN(a) || b.setValueOf("info", "txtWidth", a)) : (a && "0" != a && (a = Math.round(a / c.$.width * c.$.height)), isNaN(a) || b.setValueOf("info", "txtHeight", a))));
                e(b)
            },
            e = function (a) {
                if (!a.originalElement || !a.preview) return 1;
                a.commitContent(4, a.preview);
                return 0
            },
            v, m = function (a,
                b) {
                if (!a.getContentElement("info", "ratioLock")) return null;
                var c = a.originalElement;
                if (!c) return null;
                if ("check" == b) {
                    if (!a.userlockRatio && "true" == c.getCustomData("isReady")) {
                        var d = a.getValueOf("info", "txtWidth"),
                            h = a.getValueOf("info", "txtHeight"),
                            c = c.$.width / c.$.height,
                            e = d / h;
                        a.lockRatio = !1;
                        d || h ? 1 == Math.round(c / e * 100) / 100 && (a.lockRatio = !0) : a.lockRatio = !0
                    }
                } else void 0 !== b ? a.lockRatio = b : (a.userlockRatio = 1, a.lockRatio = !a.lockRatio);
                d = CKEDITOR.document.getById(r);
                a.lockRatio ? d.removeClass("cke_btn_unlocked") :
                    d.addClass("cke_btn_unlocked");
                d.setAttribute("aria-checked", a.lockRatio);
                CKEDITOR.env.hc && d.getChild(0).setHtml(a.lockRatio ? CKEDITOR.env.ie ? "■" : "▣" : CKEDITOR.env.ie ? "□" : "▢");
                return a.lockRatio
            },
            A = function (a, b) {
                var c = a.originalElement;
                if ("true" == c.getCustomData("isReady")) {
                    var d = a.getContentElement("info", "txtWidth"),
                        h = a.getContentElement("info", "txtHeight"),
                        f;
                    b ? c = f = 0 : (f = c.$.width, c = c.$.height);
                    d && d.setValue(f);
                    h && h.setValue(c)
                }
                e(a)
            },
            B = function (a, b) {
                function c(a, b) {
                    var c = a.match(l);
                    return c ? ("%" ==
                        c[2] && (c[1] += "%", m(d, !1)), c[1]) : b
                }
                if (1 == a) {
                    var d = this.getDialog(),
                        e = "",
                        f = "txtWidth" == this.id ? "width" : "height",
                        g = b.getAttribute(f);
                    g && (e = c(g, e));
                    e = c(b.getStyle(f), e);
                    this.setValue(e)
                }
            },
            w, t = function () {
                var a = this.originalElement,
                    b = CKEDITOR.document.getById(n);
                a.setCustomData("isReady", "true");
                a.removeListener("load", t);
                a.removeListener("error", f);
                a.removeListener("abort", f);
                b && b.setStyle("display", "none");
                this.dontResetSize || A(this, !1 === d.config.image_prefillDimensions);
                this.firstLoad && CKEDITOR.tools.setTimeout(function () {
                    m(this,
                        "check")
                }, 0, this);
                this.dontResetSize = this.firstLoad = !1;
                e(this)
            },
            f = function () {
                var a = this.originalElement,
                    b = CKEDITOR.document.getById(n);
                a.removeListener("load", t);
                a.removeListener("error", f);
                a.removeListener("abort", f);
                a = CKEDITOR.getUrl(CKEDITOR.plugins.get("image").path + "images/noimage.png");
                this.preview && this.preview.setAttribute("src", a);
                b && b.setStyle("display", "none");
                m(this, !1)
            },
            p = function (a) {
                return CKEDITOR.tools.getNextId() + "_" + a
            },
            r = p("btnLockSizes"),
            x = p("btnResetSize"),
            n = p("ImagePreviewLoader"),
            D = p("previewLink"),
            C = p("previewImage");
        return {
            title: d.lang.image["image" == k ? "title" : "titleButton"],
            minWidth: "moono-lisa" == (CKEDITOR.skinName || d.config.skin) ? 500 : 420,
            minHeight: 360,
            getModel: function (a) {
                var b = (a = a.getSelection().getSelectedElement()) && "img" === a.getName(),
                    c = a && "input" === a.getName() && "image" === a.getAttribute("type");
                return b || c ? a : null
            },
            onShow: function () {
                this.linkEditMode = this.imageEditMode = this.linkElement = this.imageElement = !1;
                this.lockRatio = !0;
                this.userlockRatio = 0;
                this.dontResetSize = !1;
                this.firstLoad = !0;
                this.addLink = !1;
                var a = this.getParentEditor(),
                    b = a.getSelection(),
                    c = (b = b && b.getSelectedElement()) && a.elementPath(b).contains("a", 1),
                    d = CKEDITOR.document.getById(n);
                d && d.setStyle("display", "none");
                w = new CKEDITOR.dom.element("img", a.document);
                this.preview = CKEDITOR.document.getById(C);
                this.originalElement = a.document.createElement("img");
                this.originalElement.setAttribute("alt", "");
                this.originalElement.setCustomData("isReady", "false");
                c && (this.linkElement = c, this.addLink = this.linkEditMode = !0, a = c.getChildren(), 1 == a.count() && (d = a.getItem(0), d.type == CKEDITOR.NODE_ELEMENT && (d.is("img") || d.is("input")) && (this.imageElement = a.getItem(0), this.imageElement.is("img") ? this.imageEditMode = "img" : this.imageElement.is("input") && (this.imageEditMode = "input"))), "image" == k && this.setupContent(2, c));
                if (this.customImageElement) this.imageEditMode = "img", this.imageElement = this.customImageElement, delete this.customImageElement;
                else if (b && "img" == b.getName() && !b.data("cke-realelement") || b && "input" == b.getName() &&
                    "image" == b.getAttribute("type")) this.imageEditMode = b.getName(), this.imageElement = b;
                this.imageEditMode && (this.cleanImageElement = this.imageElement, this.imageElement = this.cleanImageElement.clone(!0, !0), this.setupContent(1, this.imageElement));
                m(this, !0);
                CKEDITOR.tools.trim(this.getValueOf("info", "txtUrl")) || (this.preview.removeAttribute("src"), this.preview.setStyle("display", "none"))
            },
            onOk: function () {
                if (this.imageEditMode) {
                    var a = this.imageEditMode;
                    "image" == k && "input" == a && confirm(d.lang.image.button2Img) ?
                        (this.imageElement = d.document.createElement("img"), this.imageElement.setAttribute("alt", ""), d.insertElement(this.imageElement)) : "image" != k && "img" == a && confirm(d.lang.image.img2Button) ? (this.imageElement = d.document.createElement("input"), this.imageElement.setAttributes({
                            type: "image",
                            alt: ""
                        }), d.insertElement(this.imageElement)) : (this.imageElement = this.cleanImageElement, delete this.cleanImageElement)
                } else "image" == k ? this.imageElement = d.document.createElement("img") : (this.imageElement = d.document.createElement("input"),
                    this.imageElement.setAttribute("type", "image")), this.imageElement.setAttribute("alt", "");
                this.linkEditMode || (this.linkElement = d.document.createElement("a"));
                this.commitContent(1, this.imageElement);
                this.commitContent(2, this.linkElement);
                this.imageElement.getAttribute("style") || this.imageElement.removeAttribute("style");
                this.imageEditMode ? !this.linkEditMode && this.addLink ? (d.insertElement(this.linkElement), this.imageElement.appendTo(this.linkElement)) : this.linkEditMode && !this.addLink && (d.getSelection().selectElement(this.linkElement),
                    d.insertElement(this.imageElement)) : this.addLink ? this.linkEditMode ? this.linkElement.equals(d.getSelection().getSelectedElement()) ? (this.linkElement.setHtml(""), this.linkElement.append(this.imageElement, !1)) : d.insertElement(this.imageElement) : (d.insertElement(this.linkElement), this.linkElement.append(this.imageElement, !1)) : d.insertElement(this.imageElement)
            },
            onLoad: function () {
                "image" != k && this.hidePage("Link");
                var a = this._.element.getDocument();
                this.getContentElement("info", "ratioLock") && (this.addFocusable(a.getById(x),
                    5), this.addFocusable(a.getById(r), 5));
                this.commitContent = u
            },
            onHide: function () {
                this.preview && this.commitContent(8, this.preview);
                this.originalElement && (this.originalElement.removeListener("load", t), this.originalElement.removeListener("error", f), this.originalElement.removeListener("abort", f), this.originalElement.remove(), this.originalElement = !1);
                delete this.imageElement
            },
            contents: [{
                id: "info",
                label: d.lang.image.infoTab,
                accessKey: "I",
                elements: [{
                        type: "vbox",
                        padding: 0,
                        children: [{
                            type: "hbox",
                            widths: ["280px",
                                "110px"
                            ],
                            align: "right",
                            className: "cke_dialog_image_url",
                            children: [{
                                    id: "txtUrl",
                                    type: "text",
                                    label: d.lang.common.url,
                                    required: !0,
                                    onChange: function () {
                                        var a = this.getDialog(),
                                            b = this.getValue();
                                        if (0 < b.length) {
                                            var a = this.getDialog(),
                                                c = a.originalElement;
                                            a.preview && a.preview.removeStyle("display");
                                            c.setCustomData("isReady", "false");
                                            var d = CKEDITOR.document.getById(n);
                                            d && d.setStyle("display", "");
                                            c.on("load", t, a);
                                            c.on("error", f, a);
                                            c.on("abort", f, a);
                                            c.setAttribute("src", b);
                                            a.preview && (w.setAttribute("src", b),
                                                a.preview.setAttribute("src", w.$.src), e(a))
                                        } else a.preview && (a.preview.removeAttribute("src"), a.preview.setStyle("display", "none"))
                                    },
                                    setup: function (a, b) {
                                        if (1 == a) {
                                            var c = b.data("cke-saved-src") || b.getAttribute("src");
                                            this.getDialog().dontResetSize = !0;
                                            this.setValue(c);
                                            this.setInitValue()
                                        }
                                    },
                                    commit: function (a, b) {
                                        1 == a && (this.getValue() || this.isChanged()) ? (b.data("cke-saved-src", this.getValue()), b.setAttribute("src", this.getValue())) : 8 == a && (b.setAttribute("src", ""), b.removeAttribute("src"))
                                    },
                                    validate: CKEDITOR.dialog.validate.notEmpty(d.lang.image.urlMissing)
                                },
                                {
                                    type: "button",
                                    id: "browse",
                                    style: "display:inline-block;margin-top:14px;",
                                    align: "center",
                                    label: d.lang.common.browseServer,
                                    hidden: !0,
                                    filebrowser: "info:txtUrl"
                                }
                            ]
                        }]
                    }, {
                        id: "txtAlt",
                        type: "text",
                        label: d.lang.image.alt,
                        accessKey: "T",
                        "default": "",
                        onChange: function () {
                            e(this.getDialog())
                        },
                        setup: function (a, b) {
                            1 == a && this.setValue(b.getAttribute("alt"))
                        },
                        commit: function (a, b) {
                            1 == a ? (this.getValue() || this.isChanged()) && b.setAttribute("alt", this.getValue()) : 4 == a ? b.setAttribute("alt", this.getValue()) : 8 == a && b.removeAttribute("alt")
                        }
                    },
                    {
                        type: "hbox",
                        children: [{
                            id: "basic",
                            type: "vbox",
                            children: [{
                                type: "hbox",
                                requiredContent: "img{width,height}",
                                widths: ["50%", "50%"],
                                children: [{
                                    type: "vbox",
                                    padding: 1,
                                    children: [{
                                        type: "text",
                                        width: "45px",
                                        id: "txtWidth",
                                        label: d.lang.common.width,
                                        onKeyUp: z,
                                        onChange: function () {
                                            g.call(this, "advanced:txtdlgGenStyle")
                                        },
                                        validate: function () {
                                            var a = this.getValue().match(y);
                                            (a = !(!a || 0 === parseInt(a[1], 10))) || alert(d.lang.common.invalidLength.replace("%1", d.lang.common.width).replace("%2", "px, %"));
                                            return a
                                        },
                                        setup: B,
                                        commit: function (a,
                                            b) {
                                            var c = this.getValue();
                                            1 == a ? (c && d.activeFilter.check("img{width,height}") ? b.setStyle("width", CKEDITOR.tools.cssLength(c)) : b.removeStyle("width"), b.removeAttribute("width")) : 4 == a ? c.match(l) ? b.setStyle("width", CKEDITOR.tools.cssLength(c)) : (c = this.getDialog().originalElement, "true" == c.getCustomData("isReady") && b.setStyle("width", c.$.width + "px")) : 8 == a && (b.removeAttribute("width"), b.removeStyle("width"))
                                        }
                                    }, {
                                        type: "text",
                                        id: "txtHeight",
                                        width: "45px",
                                        label: d.lang.common.height,
                                        onKeyUp: z,
                                        onChange: function () {
                                            g.call(this,
                                                "advanced:txtdlgGenStyle")
                                        },
                                        validate: function () {
                                            var a = this.getValue().match(y);
                                            (a = !(!a || 0 === parseInt(a[1], 10))) || alert(d.lang.common.invalidLength.replace("%1", d.lang.common.height).replace("%2", "px, %"));
                                            return a
                                        },
                                        setup: B,
                                        commit: function (a, b) {
                                            var c = this.getValue();
                                            1 == a ? (c && d.activeFilter.check("img{width,height}") ? b.setStyle("height", CKEDITOR.tools.cssLength(c)) : b.removeStyle("height"), b.removeAttribute("height")) : 4 == a ? c.match(l) ? b.setStyle("height", CKEDITOR.tools.cssLength(c)) : (c = this.getDialog().originalElement,
                                                "true" == c.getCustomData("isReady") && b.setStyle("height", c.$.height + "px")) : 8 == a && (b.removeAttribute("height"), b.removeStyle("height"))
                                        }
                                    }]
                                }, {
                                    id: "ratioLock",
                                    type: "html",
                                    className: "cke_dialog_image_ratiolock",
                                    style: "margin-top:30px;width:40px;height:40px;",
                                    onLoad: function () {
                                        var a = CKEDITOR.document.getById(x),
                                            b = CKEDITOR.document.getById(r);
                                        a && (a.on("click", function (a) {
                                            A(this);
                                            a.data && a.data.preventDefault()
                                        }, this.getDialog()), a.on("mouseover", function () {
                                            this.addClass("cke_btn_over")
                                        }, a), a.on("mouseout",
                                            function () {
                                                this.removeClass("cke_btn_over")
                                            }, a));
                                        b && (b.on("click", function (a) {
                                            m(this);
                                            var b = this.originalElement,
                                                d = this.getValueOf("info", "txtWidth");
                                            "true" == b.getCustomData("isReady") && d && (b = b.$.height / b.$.width * d, isNaN(b) || (this.setValueOf("info", "txtHeight", Math.round(b)), e(this)));
                                            a.data && a.data.preventDefault()
                                        }, this.getDialog()), b.on("mouseover", function () {
                                            this.addClass("cke_btn_over")
                                        }, b), b.on("mouseout", function () {
                                            this.removeClass("cke_btn_over")
                                        }, b))
                                    },
                                    html: '\x3cdiv\x3e\x3ca href\x3d"javascript:void(0)" tabindex\x3d"-1" title\x3d"' +
                                        d.lang.image.lockRatio + '" class\x3d"cke_btn_locked" id\x3d"' + r + '" role\x3d"checkbox"\x3e\x3cspan class\x3d"cke_icon"\x3e\x3c/span\x3e\x3cspan class\x3d"cke_label"\x3e' + d.lang.image.lockRatio + '\x3c/span\x3e\x3c/a\x3e\x3ca href\x3d"javascript:void(0)" tabindex\x3d"-1" title\x3d"' + d.lang.image.resetSize + '" class\x3d"cke_btn_reset" id\x3d"' + x + '" role\x3d"button"\x3e\x3cspan class\x3d"cke_label"\x3e' + d.lang.image.resetSize + "\x3c/span\x3e\x3c/a\x3e\x3c/div\x3e"
                                }]
                            }, {
                                type: "vbox",
                                padding: 1,
                                children: [{
                                    type: "text",
                                    id: "txtBorder",
                                    requiredContent: "img{border-width}",
                                    width: "60px",
                                    label: d.lang.image.border,
                                    "default": "",
                                    onKeyUp: function () {
                                        e(this.getDialog())
                                    },
                                    onChange: function () {
                                        g.call(this, "advanced:txtdlgGenStyle")
                                    },
                                    validate: CKEDITOR.dialog.validate.integer(d.lang.image.validateBorder),
                                    setup: function (a, b) {
                                        if (1 == a) {
                                            var c;
                                            c = (c = (c = b.getStyle("border-width")) && c.match(/^(\d+px)(?: \1 \1 \1)?$/)) && parseInt(c[1], 10);
                                            isNaN(parseInt(c, 10)) && (c = b.getAttribute("border"));
                                            this.setValue(c)
                                        }
                                    },
                                    commit: function (a, b) {
                                        var c = parseInt(this.getValue(),
                                            10);
                                        1 == a || 4 == a ? (isNaN(c) ? !c && this.isChanged() && b.removeStyle("border") : (b.setStyle("border-width", CKEDITOR.tools.cssLength(c)), b.setStyle("border-style", "solid")), 1 == a && b.removeAttribute("border")) : 8 == a && (b.removeAttribute("border"), b.removeStyle("border-width"), b.removeStyle("border-style"), b.removeStyle("border-color"))
                                    }
                                }, {
                                    type: "text",
                                    id: "txtHSpace",
                                    requiredContent: "img{margin-left,margin-right}",
                                    width: "60px",
                                    label: d.lang.image.hSpace,
                                    "default": "",
                                    onKeyUp: function () {
                                        e(this.getDialog())
                                    },
                                    onChange: function () {
                                        g.call(this,
                                            "advanced:txtdlgGenStyle")
                                    },
                                    validate: CKEDITOR.dialog.validate.integer(d.lang.image.validateHSpace),
                                    setup: function (a, b) {
                                        if (1 == a) {
                                            var c, d;
                                            c = b.getStyle("margin-left");
                                            d = b.getStyle("margin-right");
                                            c = c && c.match(q);
                                            d = d && d.match(q);
                                            c = parseInt(c, 10);
                                            d = parseInt(d, 10);
                                            c = c == d && c;
                                            isNaN(parseInt(c, 10)) && (c = b.getAttribute("hspace"));
                                            this.setValue(c)
                                        }
                                    },
                                    commit: function (a, b) {
                                        var c = parseInt(this.getValue(), 10);
                                        1 == a || 4 == a ? (isNaN(c) ? !c && this.isChanged() && (b.removeStyle("margin-left"), b.removeStyle("margin-right")) : (b.setStyle("margin-left",
                                            CKEDITOR.tools.cssLength(c)), b.setStyle("margin-right", CKEDITOR.tools.cssLength(c))), 1 == a && b.removeAttribute("hspace")) : 8 == a && (b.removeAttribute("hspace"), b.removeStyle("margin-left"), b.removeStyle("margin-right"))
                                    }
                                }, {
                                    type: "text",
                                    id: "txtVSpace",
                                    requiredContent: "img{margin-top,margin-bottom}",
                                    width: "60px",
                                    label: d.lang.image.vSpace,
                                    "default": "",
                                    onKeyUp: function () {
                                        e(this.getDialog())
                                    },
                                    onChange: function () {
                                        g.call(this, "advanced:txtdlgGenStyle")
                                    },
                                    validate: CKEDITOR.dialog.validate.integer(d.lang.image.validateVSpace),
                                    setup: function (a, b) {
                                        if (1 == a) {
                                            var c, d;
                                            c = b.getStyle("margin-top");
                                            d = b.getStyle("margin-bottom");
                                            c = c && c.match(q);
                                            d = d && d.match(q);
                                            c = parseInt(c, 10);
                                            d = parseInt(d, 10);
                                            c = c == d && c;
                                            isNaN(parseInt(c, 10)) && (c = b.getAttribute("vspace"));
                                            this.setValue(c)
                                        }
                                    },
                                    commit: function (a, b) {
                                        var c = parseInt(this.getValue(), 10);
                                        1 == a || 4 == a ? (isNaN(c) ? !c && this.isChanged() && (b.removeStyle("margin-top"), b.removeStyle("margin-bottom")) : (b.setStyle("margin-top", CKEDITOR.tools.cssLength(c)), b.setStyle("margin-bottom", CKEDITOR.tools.cssLength(c))),
                                            1 == a && b.removeAttribute("vspace")) : 8 == a && (b.removeAttribute("vspace"), b.removeStyle("margin-top"), b.removeStyle("margin-bottom"))
                                    }
                                }, {
                                    id: "cmbAlign",
                                    requiredContent: "img{float}",
                                    type: "select",
                                    widths: ["35%", "65%"],
                                    style: "width:90px",
                                    label: d.lang.common.align,
                                    "default": "",
                                    items: [
                                        [d.lang.common.notSet, ""],
                                        [d.lang.common.left, "left"],
                                        [d.lang.common.right, "right"]
                                    ],
                                    onChange: function () {
                                        e(this.getDialog());
                                        g.call(this, "advanced:txtdlgGenStyle")
                                    },
                                    setup: function (a, b) {
                                        if (1 == a) {
                                            var c = b.getStyle("float");
                                            switch (c) {
                                                case "inherit":
                                                case "none":
                                                    c =
                                                        ""
                                            }!c && (c = (b.getAttribute("align") || "").toLowerCase());
                                            this.setValue(c)
                                        }
                                    },
                                    commit: function (a, b) {
                                        var c = this.getValue();
                                        if (1 == a || 4 == a) {
                                            if (c ? b.setStyle("float", c) : b.removeStyle("float"), 1 == a) switch (c = (b.getAttribute("align") || "").toLowerCase(), c) {
                                                case "left":
                                                case "right":
                                                    b.removeAttribute("align")
                                            }
                                        } else 8 == a && b.removeStyle("float")
                                    }
                                }]
                            }]
                        }, {
                            type: "vbox",
                            height: "250px",
                            children: [{
                                type: "html",
                                id: "htmlPreview",
                                style: "width:95%;",
                                html: "\x3cdiv\x3e" + CKEDITOR.tools.htmlEncode(d.lang.common.preview) + '\x3cbr\x3e\x3cdiv id\x3d"' +
                                    n + '" class\x3d"ImagePreviewLoader" style\x3d"display:none"\x3e\x3cdiv class\x3d"loading"\x3e\x26nbsp;\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"ImagePreviewBox"\x3e\x3ctable\x3e\x3ctr\x3e\x3ctd\x3e\x3ca href\x3d"javascript:void(0)" target\x3d"_blank" onclick\x3d"return false;" id\x3d"' + D + '"\x3e\x3cimg id\x3d"' + C + '" alt\x3d"" /\x3e\x3c/a\x3e' + (d.config.image_previewText || "") +
                                    "\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e\x3c/div\x3e"
                            }]
                        }]
                    }
                ]
            }]
        }
    };
    CKEDITOR.dialog.add("image", function (d) {
        return u(d, "image")
    });
    CKEDITOR.dialog.add("imagebutton", function (d) {
        return u(d, "imagebutton")
    })
})();
