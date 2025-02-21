!(function (e) {
    "function" == typeof define && define.amd
        ? define(["jquery"], e)
        : e("object" == typeof exports ? require("jquery") : jQuery);
})(function (e) {
    "use strict";
    function t(e) {
        for (var t, n = e.split(/\s+/), a = [], o = 0; (t = n[o]); o++)
            (t = t.charAt(0).toUpperCase()), a.push(t);
        return a;
    }
    function n(t) {
        return (t.id && e('label[for="' + t.id + '"]').val()) || t.name;
    }
    function a(t, o, i) {
        return (
            i || (i = 0),
            o.each(function () {
                var o,
                    s,
                    c = e(this),
                    r = this,
                    l = this.nodeName.toLowerCase();
                switch (
                    ("label" === l &&
                        c.find("input, textarea, select").length &&
                        ((o = c.text()),
                        (c = c.children().first()),
                        (r = c.get(0)),
                        (l = r.nodeName.toLowerCase())),
                    l)
                ) {
                    case "menu":
                        (s = { name: c.attr("label"), items: {} }),
                            (i = a(s.items, c.children(), i));
                        break;
                    case "a":
                    case "button":
                        s = {
                            name: c.text(),
                            disabled: !!c.attr("disabled"),
                            callback: (function () {
                                return function () {
                                    c.click();
                                };
                            })(),
                        };
                        break;
                    case "menuitem":
                    case "command":
                        switch (c.attr("type")) {
                            case void 0:
                            case "command":
                            case "menuitem":
                                s = {
                                    name: c.attr("label"),
                                    disabled: !!c.attr("disabled"),
                                    icon: c.attr("icon"),
                                    callback: (function () {
                                        return function () {
                                            c.click();
                                        };
                                    })(),
                                };
                                break;
                            case "checkbox":
                                s = {
                                    type: "checkbox",
                                    disabled: !!c.attr("disabled"),
                                    name: c.attr("label"),
                                    selected: !!c.attr("checked"),
                                };
                                break;
                            case "radio":
                                s = {
                                    type: "radio",
                                    disabled: !!c.attr("disabled"),
                                    name: c.attr("label"),
                                    radio: c.attr("radiogroup"),
                                    value: c.attr("id"),
                                    selected: !!c.attr("checked"),
                                };
                                break;
                            default:
                                s = void 0;
                        }
                        break;
                    case "hr":
                        s = "-------";
                        break;
                    case "input":
                        switch (c.attr("type")) {
                            case "text":
                                s = {
                                    type: "text",
                                    name: o || n(r),
                                    disabled: !!c.attr("disabled"),
                                    value: c.val(),
                                };
                                break;
                            case "checkbox":
                                s = {
                                    type: "checkbox",
                                    name: o || n(r),
                                    disabled: !!c.attr("disabled"),
                                    selected: !!c.attr("checked"),
                                };
                                break;
                            case "radio":
                                s = {
                                    type: "radio",
                                    name: o || n(r),
                                    disabled: !!c.attr("disabled"),
                                    radio: !!c.attr("name"),
                                    value: c.val(),
                                    selected: !!c.attr("checked"),
                                };
                                break;
                            default:
                                s = void 0;
                        }
                        break;
                    case "select":
                        (s = {
                            type: "select",
                            name: o || n(r),
                            disabled: !!c.attr("disabled"),
                            selected: c.val(),
                            options: {},
                        }),
                            c.children().each(function () {
                                s.options[this.value] = e(this).text();
                            });
                        break;
                    case "textarea":
                        s = {
                            type: "textarea",
                            name: o || n(r),
                            disabled: !!c.attr("disabled"),
                            value: c.val(),
                        };
                        break;
                    case "label":
                        break;
                    default:
                        s = { type: "html", html: c.clone(!0) };
                }
                s && (i++, (t["key" + i] = s));
            }),
            i
        );
    }
    (e.support.htmlMenuitem = "HTMLMenuItemElement" in window),
        (e.support.htmlCommand = "HTMLCommandElement" in window),
        (e.support.eventSelectstart =
            "onselectstart" in document.documentElement),
        (e.ui && e.widget) ||
            (e.cleanData = (function (t) {
                return function (n) {
                    var a, o, i;
                    for (i = 0; null != n[i]; i++) {
                        o = n[i];
                        try {
                            (a = e._data(o, "events")),
                                a && a.remove && e(o).triggerHandler("remove");
                        } catch (e) {}
                    }
                    t(n);
                };
            })(e.cleanData));
    var o = null,
        i = !1,
        s = e(window),
        c = 0,
        r = {},
        l = {},
        u = {},
        d = {
            selector: null,
            appendTo: null,
            trigger: "right",
            autoHide: !1,
            delay: 200,
            reposition: !0,
            selectableSubMenu: !1,
            classNames: {
                hover: "context-menu-hover",
                disabled: "context-menu-disabled",
                visible: "context-menu-visible",
                notSelectable: "context-menu-not-selectable",
                icon: "context-menu-icon",
                iconEdit: "context-menu-icon-edit",
                iconCut: "context-menu-icon-cut",
                iconCopy: "context-menu-icon-copy",
                iconPaste: "context-menu-icon-paste",
                iconDelete: "context-menu-icon-delete",
                iconAdd: "context-menu-icon-add",
                iconQuit: "context-menu-icon-quit",
                iconLoadingClass: "context-menu-icon-loading",
            },
            determinePosition: function (t) {
                if (e.ui && e.ui.position)
                    t.css("display", "block")
                        .position({
                            my: "center top",
                            at: "center bottom",
                            of: this,
                            offset: "0 5",
                            collision: "fit",
                        })
                        .css("display", "none");
                else {
                    var n = this.offset();
                    (n.top += this.outerHeight()),
                        (n.left += this.outerWidth() / 2 - t.outerWidth() / 2),
                        t.css(n);
                }
            },
            position: function (e, t, n) {
                var a;
                if (!t && !n)
                    return void e.determinePosition.call(this, e.$menu);
                if ("maintain" === t && "maintain" === n)
                    a = e.$menu.position();
                else {
                    var o = e.$menu.offsetParent().offset();
                    a = { top: n - o.top, left: t - o.left };
                }
                var i = s.scrollTop() + s.height(),
                    c = s.scrollLeft() + s.width(),
                    r = e.$menu.outerHeight(),
                    l = e.$menu.outerWidth();
                a.top + r > i && (a.top -= r),
                    a.top < 0 && (a.top = 0),
                    a.left + l > c && (a.left -= l),
                    a.left < 0 && (a.left = 0),
                    e.$menu.css(a);
            },
            positionSubmenu: function (t) {
                if ("undefined" != typeof t)
                    if (e.ui && e.ui.position)
                        t.css("display", "block")
                            .position({
                                my: "left top-5",
                                at: "right top",
                                of: this,
                                collision: "flipfit fit",
                            })
                            .css("display", "");
                    else {
                        var n = { top: -9, left: this.outerWidth() - 5 };
                        t.css(n);
                    }
            },
            zIndex: 1,
            animation: { duration: 50, show: "slideDown", hide: "slideUp" },
            events: { show: e.noop, hide: e.noop },
            callback: null,
            items: {},
        },
        m = { timer: null, pageX: null, pageY: null },
        p = function (e) {
            for (var t = 0, n = e; ; )
                if (
                    ((t = Math.max(t, parseInt(n.css("z-index"), 10) || 0)),
                    (n = n.parent()),
                    !n ||
                        !n.length ||
                        "html body".indexOf(n.prop("nodeName").toLowerCase()) >
                            -1)
                )
                    break;
            return t;
        },
        f = {
            abortevent: function (e) {
                e.preventDefault(), e.stopImmediatePropagation();
            },
            contextmenu: function (t) {
                var n = e(this);
                if (
                    ("right" === t.data.trigger &&
                        (t.preventDefault(), t.stopImmediatePropagation()),
                    !(
                        ("right" !== t.data.trigger &&
                            "demand" !== t.data.trigger &&
                            t.originalEvent) ||
                        !(
                            "undefined" == typeof t.mouseButton ||
                            !t.data ||
                            ("left" === t.data.trigger &&
                                0 === t.mouseButton) ||
                            ("right" === t.data.trigger && 2 === t.mouseButton)
                        ) ||
                        n.hasClass("context-menu-active") ||
                        n.hasClass("context-menu-disabled")
                    ))
                ) {
                    if (((o = n), t.data.build)) {
                        var a = t.data.build(o, t);
                        if (a === !1) return;
                        if (
                            ((t.data = e.extend(!0, {}, d, t.data, a || {})),
                            !t.data.items || e.isEmptyObject(t.data.items))
                        )
                            throw (
                                (window.console &&
                                    (console.error || console.log).call(
                                        console,
                                        "No items specified to show in contextMenu"
                                    ),
                                new Error("No Items specified"))
                            );
                        (t.data.$trigger = o), h.create(t.data);
                    }
                    var i = !1;
                    for (var s in t.data.items)
                        if (t.data.items.hasOwnProperty(s)) {
                            var c;
                            (c = e.isFunction(t.data.items[s].visible)
                                ? t.data.items[s].visible.call(
                                      e(t.currentTarget),
                                      s,
                                      t.data
                                  )
                                : "undefined" == typeof t.data.items[s] ||
                                  !t.data.items[s].visible ||
                                  t.data.items[s].visible === !0),
                                c && (i = !0);
                        }
                    i && h.show.call(n, t.data, t.pageX, t.pageY);
                }
            },
            click: function (t) {
                t.preventDefault(),
                    t.stopImmediatePropagation(),
                    e(this).trigger(
                        e.Event("contextmenu", {
                            data: t.data,
                            pageX: t.pageX,
                            pageY: t.pageY,
                        })
                    );
            },
            mousedown: function (t) {
                var n = e(this);
                o &&
                    o.length &&
                    !o.is(n) &&
                    o.data("contextMenu").$menu.trigger("contextmenu:hide"),
                    2 === t.button && (o = n.data("contextMenuActive", !0));
            },
            mouseup: function (t) {
                var n = e(this);
                n.data("contextMenuActive") &&
                    o &&
                    o.length &&
                    o.is(n) &&
                    !n.hasClass("context-menu-disabled") &&
                    (t.preventDefault(),
                    t.stopImmediatePropagation(),
                    (o = n),
                    n.trigger(
                        e.Event("contextmenu", {
                            data: t.data,
                            pageX: t.pageX,
                            pageY: t.pageY,
                        })
                    )),
                    n.removeData("contextMenuActive");
            },
            mouseenter: function (t) {
                var n = e(this),
                    a = e(t.relatedTarget),
                    i = e(document);
                a.is(".context-menu-list") ||
                    a.closest(".context-menu-list").length ||
                    (o && o.length) ||
                    ((m.pageX = t.pageX),
                    (m.pageY = t.pageY),
                    (m.data = t.data),
                    i.on("mousemove.contextMenuShow", f.mousemove),
                    (m.timer = setTimeout(function () {
                        (m.timer = null),
                            i.off("mousemove.contextMenuShow"),
                            (o = n),
                            n.trigger(
                                e.Event("contextmenu", {
                                    data: m.data,
                                    pageX: m.pageX,
                                    pageY: m.pageY,
                                })
                            );
                    }, t.data.delay)));
            },
            mousemove: function (e) {
                (m.pageX = e.pageX), (m.pageY = e.pageY);
            },
            mouseleave: function (t) {
                var n = e(t.relatedTarget);
                if (
                    !n.is(".context-menu-list") &&
                    !n.closest(".context-menu-list").length
                ) {
                    try {
                        clearTimeout(m.timer);
                    } catch (e) {}
                    m.timer = null;
                }
            },
            layerClick: function (t) {
                var n,
                    a,
                    o = e(this),
                    i = o.data("contextMenuRoot"),
                    c = t.button,
                    r = t.pageX,
                    l = t.pageY;
                t.preventDefault(),
                    setTimeout(function () {
                        var o,
                            u =
                                ("left" === i.trigger && 0 === c) ||
                                ("right" === i.trigger && 2 === c);
                        if (document.elementFromPoint && i.$layer) {
                            if (
                                (i.$layer.hide(),
                                (n = document.elementFromPoint(
                                    r - s.scrollLeft(),
                                    l - s.scrollTop()
                                )),
                                n.isContentEditable)
                            ) {
                                var d = document.createRange(),
                                    m = window.getSelection();
                                d.selectNode(n),
                                    d.collapse(!0),
                                    m.removeAllRanges(),
                                    m.addRange(d);
                            }
                            e(n).trigger(t), i.$layer.show();
                        }
                        if (i.reposition && u)
                            if (document.elementFromPoint) {
                                if (i.$trigger.is(n))
                                    return void i.position.call(
                                        i.$trigger,
                                        i,
                                        r,
                                        l
                                    );
                            } else if (
                                ((a = i.$trigger.offset()),
                                (o = e(window)),
                                (a.top += o.scrollTop()),
                                a.top <= t.pageY &&
                                    ((a.left += o.scrollLeft()),
                                    a.left <= t.pageX &&
                                        ((a.bottom =
                                            a.top + i.$trigger.outerHeight()),
                                        a.bottom >= t.pageY &&
                                            ((a.right =
                                                a.left +
                                                i.$trigger.outerWidth()),
                                            a.right >= t.pageX))))
                            )
                                return void i.position.call(
                                    i.$trigger,
                                    i,
                                    r,
                                    l
                                );
                        n &&
                            u &&
                            i.$trigger.one("contextmenu:hidden", function () {
                                e(n).contextMenu({ x: r, y: l, button: c });
                            }),
                            null !== i &&
                                "undefined" != typeof i &&
                                null !== i.$menu &&
                                "undefined" != typeof i.$menu &&
                                i.$menu.trigger("contextmenu:hide");
                    }, 50);
            },
            keyStop: function (e, t) {
                t.isInput || e.preventDefault(), e.stopPropagation();
            },
            key: function (e) {
                var t = {};
                o && (t = o.data("contextMenu") || {}),
                    "undefined" == typeof t.zIndex && (t.zIndex = 0);
                var n = 0,
                    a = function (e) {
                        "" !== e.style.zIndex
                            ? (n = e.style.zIndex)
                            : null !== e.offsetParent &&
                              "undefined" != typeof e.offsetParent
                            ? a(e.offsetParent)
                            : null !== e.parentElement &&
                              "undefined" != typeof e.parentElement &&
                              a(e.parentElement);
                    };
                if ((a(e.target), !(n > t.zIndex))) {
                    switch (e.keyCode) {
                        case 9:
                        case 38:
                            if ((f.keyStop(e, t), t.isInput)) {
                                if (9 === e.keyCode && e.shiftKey)
                                    return (
                                        e.preventDefault(),
                                        t.$selected &&
                                            t.$selected
                                                .find("input, textarea, select")
                                                .blur(),
                                        void (
                                            null !== t.$menu &&
                                            "undefined" != typeof t.$menu &&
                                            t.$menu.trigger("prevcommand")
                                        )
                                    );
                                if (
                                    38 === e.keyCode &&
                                    "checkbox" ===
                                        t.$selected
                                            .find("input, textarea, select")
                                            .prop("type")
                                )
                                    return void e.preventDefault();
                            } else if (9 !== e.keyCode || e.shiftKey)
                                return void (
                                    null !== t.$menu &&
                                    "undefined" != typeof t.$menu &&
                                    t.$menu.trigger("prevcommand")
                                );
                            break;
                        case 40:
                            if ((f.keyStop(e, t), !t.isInput))
                                return void (
                                    null !== t.$menu &&
                                    "undefined" != typeof t.$menu &&
                                    t.$menu.trigger("nextcommand")
                                );
                            if (9 === e.keyCode)
                                return (
                                    e.preventDefault(),
                                    t.$selected &&
                                        t.$selected
                                            .find("input, textarea, select")
                                            .blur(),
                                    void (
                                        null !== t.$menu &&
                                        "undefined" != typeof t.$menu &&
                                        t.$menu.trigger("nextcommand")
                                    )
                                );
                            if (
                                40 === e.keyCode &&
                                "checkbox" ===
                                    t.$selected
                                        .find("input, textarea, select")
                                        .prop("type")
                            )
                                return void e.preventDefault();
                            break;
                        case 37:
                            if (
                                (f.keyStop(e, t),
                                t.isInput ||
                                    !t.$selected ||
                                    !t.$selected.length)
                            )
                                break;
                            if (
                                !t.$selected
                                    .parent()
                                    .hasClass("context-menu-root")
                            ) {
                                var i = t.$selected.parent().parent();
                                return (
                                    t.$selected.trigger("contextmenu:blur"),
                                    void (t.$selected = i)
                                );
                            }
                            break;
                        case 39:
                            if (
                                (f.keyStop(e, t),
                                t.isInput ||
                                    !t.$selected ||
                                    !t.$selected.length)
                            )
                                break;
                            var s = t.$selected.data("contextMenu") || {};
                            if (
                                s.$menu &&
                                t.$selected.hasClass("context-menu-submenu")
                            )
                                return (
                                    (t.$selected = null),
                                    (s.$selected = null),
                                    void s.$menu.trigger("nextcommand")
                                );
                            break;
                        case 35:
                        case 36:
                            return t.$selected &&
                                t.$selected.find("input, textarea, select")
                                    .length
                                ? void 0
                                : ((
                                      (t.$selected && t.$selected.parent()) ||
                                      t.$menu
                                  )
                                      .children(
                                          ":not(." +
                                              t.classNames.disabled +
                                              ", ." +
                                              t.classNames.notSelectable +
                                              ")"
                                      )
                                      [36 === e.keyCode ? "first" : "last"]()
                                      .trigger("contextmenu:focus"),
                                  void e.preventDefault());
                        case 13:
                            if ((f.keyStop(e, t), t.isInput)) {
                                if (
                                    t.$selected &&
                                    !t.$selected.is("textarea, select")
                                )
                                    return void e.preventDefault();
                                break;
                            }
                            return void (
                                "undefined" != typeof t.$selected &&
                                null !== t.$selected &&
                                t.$selected.trigger("mouseup")
                            );
                        case 32:
                        case 33:
                        case 34:
                            return void f.keyStop(e, t);
                        case 27:
                            return (
                                f.keyStop(e, t),
                                void (
                                    null !== t.$menu &&
                                    "undefined" != typeof t.$menu &&
                                    t.$menu.trigger("contextmenu:hide")
                                )
                            );
                        default:
                            var c = String.fromCharCode(
                                e.keyCode
                            ).toUpperCase();
                            if (t.accesskeys && t.accesskeys[c])
                                return void t.accesskeys[c].$node.trigger(
                                    t.accesskeys[c].$menu
                                        ? "contextmenu:focus"
                                        : "mouseup"
                                );
                    }
                    e.stopPropagation(),
                        "undefined" != typeof t.$selected &&
                            null !== t.$selected &&
                            t.$selected.trigger(e);
                }
            },
            prevItem: function (t) {
                t.stopPropagation();
                var n = e(this).data("contextMenu") || {},
                    a = e(this).data("contextMenuRoot") || {};
                if (n.$selected) {
                    var o = n.$selected;
                    (n = n.$selected.parent().data("contextMenu") || {}),
                        (n.$selected = o);
                }
                for (
                    var i = n.$menu.children(),
                        s =
                            n.$selected && n.$selected.prev().length
                                ? n.$selected.prev()
                                : i.last(),
                        c = s;
                    s.hasClass(a.classNames.disabled) ||
                    s.hasClass(a.classNames.notSelectable) ||
                    s.is(":hidden");

                )
                    if (((s = s.prev().length ? s.prev() : i.last()), s.is(c)))
                        return;
                n.$selected && f.itemMouseleave.call(n.$selected.get(0), t),
                    f.itemMouseenter.call(s.get(0), t);
                var r = s.find("input, textarea, select");
                r.length && r.focus();
            },
            nextItem: function (t) {
                t.stopPropagation();
                var n = e(this).data("contextMenu") || {},
                    a = e(this).data("contextMenuRoot") || {};
                if (n.$selected) {
                    var o = n.$selected;
                    (n = n.$selected.parent().data("contextMenu") || {}),
                        (n.$selected = o);
                }
                for (
                    var i = n.$menu.children(),
                        s =
                            n.$selected && n.$selected.next().length
                                ? n.$selected.next()
                                : i.first(),
                        c = s;
                    s.hasClass(a.classNames.disabled) ||
                    s.hasClass(a.classNames.notSelectable) ||
                    s.is(":hidden");

                )
                    if (((s = s.next().length ? s.next() : i.first()), s.is(c)))
                        return;
                n.$selected && f.itemMouseleave.call(n.$selected.get(0), t),
                    f.itemMouseenter.call(s.get(0), t);
                var r = s.find("input, textarea, select");
                r.length && r.focus();
            },
            focusInput: function () {
                var t = e(this).closest(".context-menu-item"),
                    n = t.data(),
                    a = n.contextMenu,
                    o = n.contextMenuRoot;
                (o.$selected = a.$selected = t), (o.isInput = a.isInput = !0);
            },
            blurInput: function () {
                var t = e(this).closest(".context-menu-item"),
                    n = t.data(),
                    a = n.contextMenu,
                    o = n.contextMenuRoot;
                o.isInput = a.isInput = !1;
            },
            menuMouseenter: function () {
                var t = e(this).data().contextMenuRoot;
                t.hovering = !0;
            },
            menuMouseleave: function (t) {
                var n = e(this).data().contextMenuRoot;
                n.$layer && n.$layer.is(t.relatedTarget) && (n.hovering = !1);
            },
            itemMouseenter: function (t) {
                var n = e(this),
                    a = n.data(),
                    o = a.contextMenu,
                    i = a.contextMenuRoot;
                return (
                    (i.hovering = !0),
                    t &&
                        i.$layer &&
                        i.$layer.is(t.relatedTarget) &&
                        (t.preventDefault(), t.stopImmediatePropagation()),
                    (o.$menu ? o : i).$menu
                        .children("." + i.classNames.hover)
                        .trigger("contextmenu:blur")
                        .children(".hover")
                        .trigger("contextmenu:blur"),
                    n.hasClass(i.classNames.disabled) ||
                    n.hasClass(i.classNames.notSelectable)
                        ? void (o.$selected = null)
                        : void n.trigger("contextmenu:focus")
                );
            },
            itemMouseleave: function (t) {
                var n = e(this),
                    a = n.data(),
                    o = a.contextMenu,
                    i = a.contextMenuRoot;
                return i !== o && i.$layer && i.$layer.is(t.relatedTarget)
                    ? ("undefined" != typeof i.$selected &&
                          null !== i.$selected &&
                          i.$selected.trigger("contextmenu:blur"),
                      t.preventDefault(),
                      t.stopImmediatePropagation(),
                      void (i.$selected = o.$selected = o.$node))
                    : void n.trigger("contextmenu:blur");
            },
            itemClick: function (t) {
                var n,
                    a = e(this),
                    o = a.data(),
                    i = o.contextMenu,
                    s = o.contextMenuRoot,
                    c = o.contextMenuKey;
                if (
                    !(
                        !i.items[c] ||
                        a.is(
                            "." +
                                s.classNames.disabled +
                                ", .context-menu-separator, ." +
                                s.classNames.notSelectable
                        ) ||
                        (a.is(".context-menu-submenu") &&
                            s.selectableSubMenu === !1)
                    )
                ) {
                    if (
                        (t.preventDefault(),
                        t.stopImmediatePropagation(),
                        e.isFunction(i.callbacks[c]) &&
                            Object.prototype.hasOwnProperty.call(
                                i.callbacks,
                                c
                            ))
                    )
                        n = i.callbacks[c];
                    else {
                        if (!e.isFunction(s.callback)) return;
                        n = s.callback;
                    }
                    n.call(s.$trigger, c, s) !== !1
                        ? s.$menu.trigger("contextmenu:hide")
                        : s.$menu.parent().length &&
                          h.update.call(s.$trigger, s);
                }
            },
            inputClick: function (e) {
                e.stopImmediatePropagation();
            },
            hideMenu: function (t, n) {
                var a = e(this).data("contextMenuRoot");
                h.hide.call(a.$trigger, a, n && n.force);
            },
            focusItem: function (t) {
                t.stopPropagation();
                var n = e(this),
                    a = n.data(),
                    o = a.contextMenu,
                    i = a.contextMenuRoot;
                n.hasClass(i.classNames.disabled) ||
                    n.hasClass(i.classNames.notSelectable) ||
                    (n
                        .addClass(
                            [i.classNames.hover, i.classNames.visible].join(" ")
                        )
                        .parent()
                        .find(".context-menu-item")
                        .not(n)
                        .removeClass(i.classNames.visible)
                        .filter("." + i.classNames.hover)
                        .trigger("contextmenu:blur"),
                    (o.$selected = i.$selected = n),
                    o.$node && i.positionSubmenu.call(o.$node, o.$menu));
            },
            blurItem: function (t) {
                t.stopPropagation();
                var n = e(this),
                    a = n.data(),
                    o = a.contextMenu,
                    i = a.contextMenuRoot;
                o.autoHide && n.removeClass(i.classNames.visible),
                    n.removeClass(i.classNames.hover),
                    (o.$selected = null);
            },
        },
        h = {
            show: function (t, n, a) {
                var i = e(this),
                    s = {};
                if (
                    (e("#context-menu-layer").trigger("mousedown"),
                    (t.$trigger = i),
                    t.events.show.call(i, t) === !1)
                )
                    return void (o = null);
                if (
                    (h.update.call(i, t), t.position.call(i, t, n, a), t.zIndex)
                ) {
                    var c = t.zIndex;
                    "function" == typeof t.zIndex && (c = t.zIndex.call(i, t)),
                        (s.zIndex = p(i) + c);
                }
                h.layer.call(t.$menu, t, s.zIndex),
                    t.$menu.find("ul").css("zIndex", s.zIndex + 1),
                    t.$menu
                        .css(s)
                        [t.animation.show](t.animation.duration, function () {
                            i.trigger("contextmenu:visible");
                        }),
                    i.data("contextMenu", t).addClass("context-menu-active"),
                    e(document)
                        .off("keydown.contextMenu")
                        .on("keydown.contextMenu", f.key),
                    t.autoHide &&
                        e(document).on(
                            "mousemove.contextMenuAutoHide",
                            function (e) {
                                var n = i.offset();
                                (n.right = n.left + i.outerWidth()),
                                    (n.bottom = n.top + i.outerHeight()),
                                    !t.$layer ||
                                        t.hovering ||
                                        (e.pageX >= n.left &&
                                            e.pageX <= n.right &&
                                            e.pageY >= n.top &&
                                            e.pageY <= n.bottom) ||
                                        setTimeout(function () {
                                            t.hovering ||
                                                null === t.$menu ||
                                                "undefined" == typeof t.$menu ||
                                                t.$menu.trigger(
                                                    "contextmenu:hide"
                                                );
                                        }, 50);
                            }
                        );
            },
            hide: function (t, n) {
                var a = e(this);
                if (
                    (t || (t = a.data("contextMenu") || {}),
                    n || !t.events || t.events.hide.call(a, t) !== !1)
                ) {
                    if (
                        (a
                            .removeData("contextMenu")
                            .removeClass("context-menu-active"),
                        t.$layer)
                    ) {
                        setTimeout(
                            (function (e) {
                                return function () {
                                    e.remove();
                                };
                            })(t.$layer),
                            10
                        );
                        try {
                            delete t.$layer;
                        } catch (e) {
                            t.$layer = null;
                        }
                    }
                    (o = null),
                        t.$menu
                            .find("." + t.classNames.hover)
                            .trigger("contextmenu:blur"),
                        (t.$selected = null),
                        t.$menu
                            .find("." + t.classNames.visible)
                            .removeClass(t.classNames.visible),
                        e(document)
                            .off(".contextMenuAutoHide")
                            .off("keydown.contextMenu"),
                        t.$menu &&
                            t.$menu[t.animation.hide](
                                t.animation.duration,
                                function () {
                                    t.build &&
                                        (t.$menu.remove(),
                                        e.each(t, function (e) {
                                            switch (e) {
                                                case "ns":
                                                case "selector":
                                                case "build":
                                                case "trigger":
                                                    return !0;
                                                default:
                                                    t[e] = void 0;
                                                    try {
                                                        delete t[e];
                                                    } catch (e) {}
                                                    return !0;
                                            }
                                        })),
                                        setTimeout(function () {
                                            a.trigger("contextmenu:hidden");
                                        }, 10);
                                }
                            );
                }
            },
            create: function (n, a) {
                function o(t) {
                    var n = e("<span></span>");
                    if (t._accesskey)
                        t._beforeAccesskey &&
                            n.append(
                                document.createTextNode(t._beforeAccesskey)
                            ),
                            e("<span></span>")
                                .addClass("context-menu-accesskey")
                                .text(t._accesskey)
                                .appendTo(n),
                            t._afterAccesskey &&
                                n.append(
                                    document.createTextNode(t._afterAccesskey)
                                );
                    else if (t.isHtmlName) {
                        if ("undefined" != typeof t.accesskey)
                            throw new Error(
                                "accesskeys are not compatible with HTML names and cannot be used together in the same item"
                            );
                        n.html(t.name);
                    } else n.text(t.name);
                    return n;
                }
                "undefined" == typeof a && (a = n),
                    (n.$menu = e('<ul class="context-menu-list"></ul>')
                        .addClass(n.className || "")
                        .data({ contextMenu: n, contextMenuRoot: a })),
                    e.each(
                        ["callbacks", "commands", "inputs"],
                        function (e, t) {
                            (n[t] = {}), a[t] || (a[t] = {});
                        }
                    ),
                    a.accesskeys || (a.accesskeys = {}),
                    e.each(n.items, function (i, s) {
                        var c = e(
                                '<li class="context-menu-item"></li>'
                            ).addClass(s.className || ""),
                            r = null,
                            l = null;
                        if (
                            (c.on("click", e.noop),
                            ("string" != typeof s &&
                                "cm_separator" !== s.type) ||
                                (s = { type: "cm_seperator" }),
                            (s.$node = c.data({
                                contextMenu: n,
                                contextMenuRoot: a,
                                contextMenuKey: i,
                            })),
                            "undefined" != typeof s.accesskey)
                        )
                            for (
                                var d, m = t(s.accesskey), p = 0;
                                (d = m[p]);
                                p++
                            )
                                if (!a.accesskeys[d]) {
                                    a.accesskeys[d] = s;
                                    var x = s.name.match(
                                        new RegExp(
                                            "^(.*?)(" + d + ")(.*)$",
                                            "i"
                                        )
                                    );
                                    x &&
                                        ((s._beforeAccesskey = x[1]),
                                        (s._accesskey = x[2]),
                                        (s._afterAccesskey = x[3]));
                                    break;
                                }
                        if (s.type && u[s.type])
                            u[s.type].call(c, s, n, a),
                                e.each([n, a], function (t, a) {
                                    (a.commands[i] = s),
                                        !e.isFunction(s.callback) ||
                                            ("undefined" !=
                                                typeof a.callbacks[i] &&
                                                "undefined" != typeof n.type) ||
                                            (a.callbacks[i] = s.callback);
                                });
                        else {
                            switch (
                                ("cm_seperator" === s.type
                                    ? c.addClass(
                                          "context-menu-separator " +
                                              a.classNames.notSelectable
                                      )
                                    : "html" === s.type
                                    ? c.addClass(
                                          "context-menu-html " +
                                              a.classNames.notSelectable
                                      )
                                    : "sub" === s.type ||
                                      (s.type
                                          ? ((r =
                                                e("<label></label>").appendTo(
                                                    c
                                                )),
                                            o(s).appendTo(r),
                                            c.addClass("context-menu-input"),
                                            (n.hasTypes = !0),
                                            e.each([n, a], function (e, t) {
                                                (t.commands[i] = s),
                                                    (t.inputs[i] = s);
                                            }))
                                          : s.items && (s.type = "sub")),
                                s.type)
                            ) {
                                case "cm_seperator":
                                    break;
                                case "text":
                                    l = e(
                                        '<input type="text" value="1" name="" />'
                                    )
                                        .attr("name", "context-menu-input-" + i)
                                        .val(s.value || "")
                                        .appendTo(r);
                                    break;
                                case "textarea":
                                    (l = e('<textarea name=""></textarea>')
                                        .attr("name", "context-menu-input-" + i)
                                        .val(s.value || "")
                                        .appendTo(r)),
                                        s.height && l.height(s.height);
                                    break;
                                case "checkbox":
                                    l = e(
                                        '<input type="checkbox" value="1" name="" />'
                                    )
                                        .attr("name", "context-menu-input-" + i)
                                        .val(s.value || "")
                                        .prop("checked", !!s.selected)
                                        .prependTo(r);
                                    break;
                                case "radio":
                                    l = e(
                                        '<input type="radio" value="1" name="" />'
                                    )
                                        .attr(
                                            "name",
                                            "context-menu-input-" + s.radio
                                        )
                                        .val(s.value || "")
                                        .prop("checked", !!s.selected)
                                        .prependTo(r);
                                    break;
                                case "select":
                                    (l = e('<select name=""></select>')
                                        .attr("name", "context-menu-input-" + i)
                                        .appendTo(r)),
                                        s.options &&
                                            (e.each(s.options, function (t, n) {
                                                e("<option></option>")
                                                    .val(t)
                                                    .text(n)
                                                    .appendTo(l);
                                            }),
                                            l.val(s.selected));
                                    break;
                                case "sub":
                                    o(s).appendTo(c),
                                        (s.appendTo = s.$node),
                                        c
                                            .data("contextMenu", s)
                                            .addClass("context-menu-submenu"),
                                        (s.callback = null),
                                        "function" == typeof s.items.then
                                            ? h.processPromises(s, a, s.items)
                                            : h.create(s, a);
                                    break;
                                case "html":
                                    e(s.html).appendTo(c);
                                    break;
                                default:
                                    e.each([n, a], function (t, a) {
                                        (a.commands[i] = s),
                                            !e.isFunction(s.callback) ||
                                                ("undefined" !=
                                                    typeof a.callbacks[i] &&
                                                    "undefined" !=
                                                        typeof n.type) ||
                                                (a.callbacks[i] = s.callback);
                                    }),
                                        o(s).appendTo(c);
                            }
                            s.type &&
                                "sub" !== s.type &&
                                "html" !== s.type &&
                                "cm_seperator" !== s.type &&
                                (l
                                    .on("focus", f.focusInput)
                                    .on("blur", f.blurInput),
                                s.events && l.on(s.events, n)),
                                s.icon &&
                                    (e.isFunction(s.icon)
                                        ? (s._icon = s.icon.call(
                                              this,
                                              this,
                                              c,
                                              i,
                                              s
                                          ))
                                        : "string" == typeof s.icon &&
                                          "fa-" === s.icon.substring(0, 3)
                                        ? (s._icon =
                                              a.classNames.icon +
                                              " " +
                                              a.classNames.icon +
                                              "--fa fa " +
                                              s.icon)
                                        : (s._icon =
                                              a.classNames.icon +
                                              " " +
                                              a.classNames.icon +
                                              "-" +
                                              s.icon),
                                    c.addClass(s._icon));
                        }
                        (s.$input = l),
                            (s.$label = r),
                            c.appendTo(n.$menu),
                            !n.hasTypes &&
                                e.support.eventSelectstart &&
                                c.on(
                                    "selectstart.disableTextSelect",
                                    f.abortevent
                                );
                    }),
                    n.$node ||
                        n.$menu
                            .css("display", "none")
                            .addClass("context-menu-root"),
                    n.$menu.appendTo(n.appendTo || document.body);
            },
            resize: function (t, n) {
                var a;
                t.css({ position: "absolute", display: "block" }),
                    t.data(
                        "width",
                        (a = t.get(0)).getBoundingClientRect
                            ? Math.ceil(a.getBoundingClientRect().width)
                            : t.outerWidth() + 1
                    ),
                    t.css({
                        position: "static",
                        minWidth: "0px",
                        maxWidth: "100000px",
                    }),
                    t.find("> li > ul").each(function () {
                        h.resize(e(this), !0);
                    }),
                    n ||
                        t
                            .find("ul")
                            .addBack()
                            .css({
                                position: "",
                                display: "",
                                minWidth: "",
                                maxWidth: "",
                            })
                            .outerWidth(function () {
                                return e(this).data("width");
                            });
            },
            update: function (t, n) {
                var a = this;
                "undefined" == typeof n && ((n = t), h.resize(t.$menu)),
                    t.$menu.children().each(function () {
                        var o,
                            i = e(this),
                            s = i.data("contextMenuKey"),
                            c = t.items[s],
                            r =
                                (e.isFunction(c.disabled) &&
                                    c.disabled.call(a, s, n)) ||
                                c.disabled === !0;
                        if (
                            ((o = e.isFunction(c.visible)
                                ? c.visible.call(a, s, n)
                                : "undefined" == typeof c.visible ||
                                  c.visible === !0),
                            i[o ? "show" : "hide"](),
                            i[r ? "addClass" : "removeClass"](
                                n.classNames.disabled
                            ),
                            e.isFunction(c.icon) &&
                                (i.removeClass(c._icon),
                                (c._icon = c.icon.call(this, a, i, s, c)),
                                i.addClass(c._icon)),
                            c.type)
                        )
                            switch (
                                (i
                                    .find("input, select, textarea")
                                    .prop("disabled", r),
                                c.type)
                            ) {
                                case "text":
                                case "textarea":
                                    c.$input.val(c.value || "");
                                    break;
                                case "checkbox":
                                case "radio":
                                    c.$input
                                        .val(c.value || "")
                                        .prop("checked", !!c.selected);
                                    break;
                                case "select":
                                    c.$input.val(
                                        (0 === c.selected ? "0" : c.selected) ||
                                            ""
                                    );
                            }
                        c.$menu && h.update.call(a, c, n);
                    });
            },
            layer: function (t, n) {
                var a = (t.$layer = e('<div id="context-menu-layer"></div>')
                    .css({
                        height: s.height(),
                        width: s.width(),
                        display: "block",
                        position: "fixed",
                        "z-index": n,
                        top: 0,
                        left: 0,
                        opacity: 0,
                        filter: "alpha(opacity=0)",
                        "background-color": "#000",
                    })
                    .data("contextMenuRoot", t)
                    .insertBefore(this)
                    .on("contextmenu", f.abortevent)
                    .on("mousedown", f.layerClick));
                return (
                    "undefined" == typeof document.body.style.maxWidth &&
                        a.css({
                            position: "absolute",
                            height: e(document).height(),
                        }),
                    a
                );
            },
            processPromises: function (e, t, n) {
                function a(e, t, n) {
                    "undefined" == typeof n && o(void 0), i(e, t, n);
                }
                function o(e, t, n) {
                    "undefined" == typeof n
                        ? ((n = {
                              error: {
                                  name: "No items and no error item",
                                  icon: "context-menu-icon context-menu-icon-quit",
                              },
                          }),
                          window.console &&
                              (console.error || console.log).call(
                                  console,
                                  'When you reject a promise, provide an "items" object, equal to normal sub-menu items'
                              ))
                        : "string" == typeof n && (n = { error: { name: n } }),
                        i(e, t, n);
                }
                function i(e, t, n) {
                    "undefined" != typeof t.$menu &&
                        t.$menu.is(":visible") &&
                        (e.$node.removeClass(t.classNames.iconLoadingClass),
                        (e.items = n),
                        h.create(e, t, !0),
                        h.update(e, t),
                        t.positionSubmenu.call(e.$node, e.$menu));
                }
                e.$node.addClass(t.classNames.iconLoadingClass),
                    n.then(a.bind(this, e, t), o.bind(this, e, t));
            },
        };
    (e.fn.contextMenu = function (t) {
        var n = this,
            a = t;
        if (this.length > 0)
            if ("undefined" == typeof t) this.first().trigger("contextmenu");
            else if ("undefined" != typeof t.x && "undefined" != typeof t.y)
                this.first().trigger(
                    e.Event("contextmenu", {
                        pageX: t.x,
                        pageY: t.y,
                        mouseButton: t.button,
                    })
                );
            else if ("hide" === t) {
                var o = this.first().data("contextMenu")
                    ? this.first().data("contextMenu").$menu
                    : null;
                o && o.trigger("contextmenu:hide");
            } else
                "destroy" === t
                    ? e.contextMenu("destroy", { context: this })
                    : e.isPlainObject(t)
                    ? ((t.context = this), e.contextMenu("create", t))
                    : t
                    ? this.removeClass("context-menu-disabled")
                    : t || this.addClass("context-menu-disabled");
        else
            e.each(l, function () {
                this.selector === n.selector &&
                    ((a.data = this), e.extend(a.data, { trigger: "demand" }));
            }),
                f.contextmenu.call(a.target, a);
        return this;
    }),
        (e.contextMenu = function (t, n) {
            "string" != typeof t && ((n = t), (t = "create")),
                "string" == typeof n
                    ? (n = { selector: n })
                    : "undefined" == typeof n && (n = {});
            var a = e.extend(!0, {}, d, n || {}),
                o = e(document),
                s = o,
                u = !1;
            switch (
                (a.context && a.context.length
                    ? ((s = e(a.context).first()),
                      (a.context = s.get(0)),
                      (u = !e(a.context).is(document)))
                    : (a.context = document),
                t)
            ) {
                case "create":
                    if (!a.selector) throw new Error("No selector specified");
                    if (
                        a.selector.match(
                            /.context-menu-(list|item|input)($|\s)/
                        )
                    )
                        throw new Error(
                            'Cannot bind to selector "' +
                                a.selector +
                                '" as it contains a reserved className'
                        );
                    if (!a.build && (!a.items || e.isEmptyObject(a.items)))
                        throw new Error("No Items specified");
                    if (
                        (c++,
                        (a.ns = ".contextMenu" + c),
                        u || (r[a.selector] = a.ns),
                        (l[a.ns] = a),
                        a.trigger || (a.trigger = "right"),
                        !i)
                    ) {
                        var m =
                                "click" === a.itemClickEvent
                                    ? "click.contextMenu"
                                    : "mouseup.contextMenu",
                            p = {
                                "contextmenu:focus.contextMenu": f.focusItem,
                                "contextmenu:blur.contextMenu": f.blurItem,
                                "contextmenu.contextMenu": f.abortevent,
                                "mouseenter.contextMenu": f.itemMouseenter,
                                "mouseleave.contextMenu": f.itemMouseleave,
                            };
                        (p[m] = f.itemClick),
                            o
                                .on(
                                    {
                                        "contextmenu:hide.contextMenu":
                                            f.hideMenu,
                                        "prevcommand.contextMenu": f.prevItem,
                                        "nextcommand.contextMenu": f.nextItem,
                                        "contextmenu.contextMenu": f.abortevent,
                                        "mouseenter.contextMenu":
                                            f.menuMouseenter,
                                        "mouseleave.contextMenu":
                                            f.menuMouseleave,
                                    },
                                    ".context-menu-list"
                                )
                                .on(
                                    "mouseup.contextMenu",
                                    ".context-menu-input",
                                    f.inputClick
                                )
                                .on(p, ".context-menu-item"),
                            (i = !0);
                    }
                    switch (
                        (s.on(
                            "contextmenu" + a.ns,
                            a.selector,
                            a,
                            f.contextmenu
                        ),
                        u &&
                            s.on("remove" + a.ns, function () {
                                e(this).contextMenu("destroy");
                            }),
                        a.trigger)
                    ) {
                        case "hover":
                            s.on(
                                "mouseenter" + a.ns,
                                a.selector,
                                a,
                                f.mouseenter
                            ).on(
                                "mouseleave" + a.ns,
                                a.selector,
                                a,
                                f.mouseleave
                            );
                            break;
                        case "left":
                            s.on("click" + a.ns, a.selector, a, f.click);
                    }
                    a.build || h.create(a);
                    break;
                case "destroy":
                    var x;
                    if (u) {
                        var g = a.context;
                        e.each(l, function (t, n) {
                            if (!n) return !0;
                            if (!e(g).is(n.selector)) return !0;
                            (x = e(".context-menu-list").filter(":visible")),
                                x.length &&
                                    x
                                        .data()
                                        .contextMenuRoot.$trigger.is(
                                            e(n.context).find(n.selector)
                                        ) &&
                                    x.trigger("contextmenu:hide", {
                                        force: !0,
                                    });
                            try {
                                l[n.ns].$menu && l[n.ns].$menu.remove(),
                                    delete l[n.ns];
                            } catch (e) {
                                l[n.ns] = null;
                            }
                            return e(n.context).off(n.ns), !0;
                        });
                    } else if (a.selector) {
                        if (r[a.selector]) {
                            (x = e(".context-menu-list").filter(":visible")),
                                x.length &&
                                    x
                                        .data()
                                        .contextMenuRoot.$trigger.is(
                                            a.selector
                                        ) &&
                                    x.trigger("contextmenu:hide", {
                                        force: !0,
                                    });
                            try {
                                l[r[a.selector]].$menu &&
                                    l[r[a.selector]].$menu.remove(),
                                    delete l[r[a.selector]];
                            } catch (e) {
                                l[r[a.selector]] = null;
                            }
                            o.off(r[a.selector]);
                        }
                    } else
                        o.off(".contextMenu .contextMenuAutoHide"),
                            e.each(l, function (t, n) {
                                e(n.context).off(n.ns);
                            }),
                            (r = {}),
                            (l = {}),
                            (c = 0),
                            (i = !1),
                            e(
                                "#context-menu-layer, .context-menu-list"
                            ).remove();
                    break;
                case "html5":
                    ((!e.support.htmlCommand && !e.support.htmlMenuitem) ||
                        ("boolean" == typeof n && n)) &&
                        e('menu[type="context"]')
                            .each(function () {
                                this.id &&
                                    e.contextMenu({
                                        selector:
                                            "[contextmenu=" + this.id + "]",
                                        items: e.contextMenu.fromMenu(this),
                                    });
                            })
                            .css("display", "none");
                    break;
                default:
                    throw new Error('Unknown operation "' + t + '"');
            }
            return this;
        }),
        (e.contextMenu.setInputValues = function (t, n) {
            "undefined" == typeof n && (n = {}),
                e.each(t.inputs, function (e, t) {
                    switch (t.type) {
                        case "text":
                        case "textarea":
                            t.value = n[e] || "";
                            break;
                        case "checkbox":
                            t.selected = !!n[e];
                            break;
                        case "radio":
                            t.selected = (n[t.radio] || "") === t.value;
                            break;
                        case "select":
                            t.selected = n[e] || "";
                    }
                });
        }),
        (e.contextMenu.getInputValues = function (t, n) {
            return (
                "undefined" == typeof n && (n = {}),
                e.each(t.inputs, function (e, t) {
                    switch (t.type) {
                        case "text":
                        case "textarea":
                        case "select":
                            n[e] = t.$input.val();
                            break;
                        case "checkbox":
                            n[e] = t.$input.prop("checked");
                            break;
                        case "radio":
                            t.$input.prop("checked") && (n[t.radio] = t.value);
                    }
                }),
                n
            );
        }),
        (e.contextMenu.fromMenu = function (t) {
            var n = e(t),
                o = {};
            return a(o, n.children()), o;
        }),
        (e.contextMenu.defaults = d),
        (e.contextMenu.types = u),
        (e.contextMenu.handle = f),
        (e.contextMenu.op = h),
        (e.contextMenu.menus = l);
});
