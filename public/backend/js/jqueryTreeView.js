!(function (a) {
    a.extend(a.fn, {
        swapClass: function (a, e) {
            var l = this.filter("." + a);
            return (
                this.filter("." + e)
                    .removeClass(e)
                    .addClass(a),
                l.removeClass(a).addClass(e),
                this
            );
        },
        replaceClass: function (a, e) {
            return this.filter("." + a)
                .removeClass(a)
                .addClass(e)
                .end();
        },
        hoverClass: function (e) {
            return (
                (e = e || "hover"),
                this.hover(
                    function () {
                        a(this).addClass(e);
                    },
                    function () {
                        a(this).removeClass(e);
                    }
                )
            );
        },
        heightToggle: function (a, e) {
            a
                ? this.animate({ height: "toggle" }, a, e)
                : this.each(function () {
                      jQuery(this)[
                          jQuery(this).is(":hidden") ? "show" : "hide"
                      ](),
                          e && e.apply(this, arguments);
                  });
        },
        heightHide: function (a, e) {
            a
                ? this.animate({ height: "hide" }, a, e)
                : (this.hide(), e && this.each(e));
        },
        prepareBranches: function (a) {
            return (
                a.prerendered ||
                    (this.filter(":last-child:not(ul)").addClass(e.last),
                    this.filter(
                        (a.collapsed ? "" : "." + e.closed) +
                            ":not(." +
                            e.open +
                            ")"
                    )
                        .find(">ul")
                        .hide()),
                this.filter(":has(>ul)")
            );
        },
        applyClasses: function (l, s) {
            if (
                (this.filter(":has(>ul):not(:has(>a))")
                    .find(">span")
                    .unbind("click.treeview")
                    .bind("click.treeview", function (e) {
                        this == e.target && s.apply(a(this).next());
                    })
                    .add(a("a", this))
                    .hoverClass(),
                !l.prerendered)
            ) {
                this.filter(":has(>ul:hidden)")
                    .addClass(e.expandable)
                    .replaceClass(e.last, e.lastExpandable),
                    this.not(":has(>ul:hidden)")
                        .addClass(e.collapsable)
                        .replaceClass(e.last, e.lastCollapsable);
                var t = this.find("div." + e.hitarea);
                t.length ||
                    (t = this.prepend('<div class="' + e.hitarea + '"/>').find(
                        "div." + e.hitarea
                    )),
                    t
                        .removeClass()
                        .addClass(e.hitarea)
                        .each(function () {
                            var e = "";
                            a.each(
                                a(this).parent().attr("class").split(" "),
                                function () {
                                    e += this + "-hitarea ";
                                }
                            ),
                                a(this).addClass(e);
                        });
            }
            this.find("div." + e.hitarea).click(s);
        },
        treeview: function (l) {
            if ((l = a.extend({ cookieId: "treeview" }, l)).toggle) {
                var s = l.toggle;
                l.toggle = function () {
                    return s.apply(a(this).parent()[0], arguments);
                };
            }
            function t() {
                a(this)
                    .parent()
                    .find(">.hitarea")
                    .swapClass(e.collapsableHitarea, e.expandableHitarea)
                    .swapClass(
                        e.lastCollapsableHitarea,
                        e.lastExpandableHitarea
                    )
                    .end()
                    .swapClass(e.collapsable, e.expandable)
                    .swapClass(e.lastCollapsable, e.lastExpandable)
                    .find(">ul")
                    .heightToggle(l.animated, l.toggle),
                    l.unique &&
                        a(this)
                            .parent()
                            .siblings()
                            .find(">.hitarea")
                            .replaceClass(
                                e.collapsableHitarea,
                                e.expandableHitarea
                            )
                            .replaceClass(
                                e.lastCollapsableHitarea,
                                e.lastExpandableHitarea
                            )
                            .end()
                            .replaceClass(e.collapsable, e.expandable)
                            .replaceClass(e.lastCollapsable, e.lastExpandable)
                            .find(">ul")
                            .heightHide(l.animated, l.toggle);
            }
            this.data("toggler", t), this.addClass("treeview");
            var i = this.find("li").prepareBranches(l);
            switch (l.persist) {
                case "cookie":
                    var n = l.toggle;
                    (l.toggle = function () {
                        (function e() {
                            function s(a) {
                                return a ? 1 : 0;
                            }
                            var t = [];
                            i.each(function (e, l) {
                                t[e] = a(l).is(":has(>ul:visible)") ? 1 : 0;
                            }),
                                a.cookie(
                                    l.cookieId,
                                    t.join(""),
                                    l.cookieOptions
                                );
                        })(),
                            n && n.apply(this, arguments);
                    }),
                        (function e() {
                            var s = a.cookie(l.cookieId);
                            if (s) {
                                var t = s.split("");
                                i.each(function (e, l) {
                                    a(l)
                                        .find(">ul")
                                        [parseInt(t[e]) ? "show" : "hide"]();
                                });
                            }
                        })();
                    break;
                case "location":
                    var r = this.find("a").filter(function () {
                        return (
                            0 ==
                            location.href
                                .toLowerCase()
                                .indexOf(this.href.toLowerCase())
                        );
                    });
                    if (r.length) {
                        var o = r
                            .addClass("selected")
                            .parents("ul, li")
                            .add(r.next())
                            .show();
                        l.prerendered &&
                            o
                                .filter("li")
                                .swapClass(e.collapsable, e.expandable)
                                .swapClass(e.lastCollapsable, e.lastExpandable)
                                .find(">.hitarea")
                                .swapClass(
                                    e.collapsableHitarea,
                                    e.expandableHitarea
                                )
                                .swapClass(
                                    e.lastCollapsableHitarea,
                                    e.lastExpandableHitarea
                                );
                    }
            }
            return (
                i.applyClasses(l, t),
                l.control &&
                    ((function l(s, i) {
                        function n(l) {
                            return function () {
                                return (
                                    t.apply(
                                        a("div." + e.hitarea, s).filter(
                                            function () {
                                                return (
                                                    !l ||
                                                    a(this).parent("." + l)
                                                        .length
                                                );
                                            }
                                        )
                                    ),
                                    !1
                                );
                            };
                        }
                        a("a:eq(0)", i).click(n(e.collapsable)),
                            a("a:eq(1)", i).click(n(e.expandable)),
                            a("a:eq(2)", i).click(n());
                    })(this, l.control),
                    a(l.control).show()),
                this
            );
        },
    }),
        (a.treeview = {});
    var e = (a.treeview.classes = {
        open: "open",
        closed: "closed",
        expandable: "expandable",
        expandableHitarea: "expandable-hitarea",
        lastExpandableHitarea: "lastExpandable-hitarea",
        collapsable: "collapsable",
        collapsableHitarea: "collapsable-hitarea",
        lastCollapsableHitarea: "lastCollapsable-hitarea",
        lastCollapsable: "lastCollapsable",
        lastExpandable: "lastExpandable",
        last: "last",
        hitarea: "hitarea",
    });
})(jQuery);
