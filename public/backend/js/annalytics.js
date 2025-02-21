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
        for (var a = 0; a < e.length; a++) {
            var i = e[a];
            (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, n(i.key), i);
        }
    }
    function n(e) {
        var n = (function (e, n) {
            if ("object" != t(e) || !e) return e;
            var a = e[Symbol.toPrimitive];
            if (void 0 !== a) {
                var i = a.call(e, n || "default");
                if ("object" != t(i)) return i;
                throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                );
            }
            return ("string" === n ? String : Number)(e);
        })(e, "string");
        return "symbol" == t(n) ? n : n + "";
    }
    var a = (function () {
        return (
            (t = function t() {
                !(function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                })(this, t);
            }),
            (a = [
                {
                    key: "initCharts",
                    value: function () {
                        var t = window.analyticsStats || {},
                            e = $("#stats-chart"),
                            n = $("#world-map"),
                            a = [];
                        $.each(t.stats, function (t, e) {
                            a.push({
                                axis: e.axis,
                                visitors: e.visitors,
                                pageViews: e.pageViews,
                            });
                        }),
                            e.length &&
                                new Morris.Area({
                                    element: "stats-chart",
                                    resize: !0,
                                    data: a,
                                    xkey: "axis",
                                    ykeys: ["visitors", "pageViews"],
                                    labels: [
                                        t.translations.visits,
                                        t.translations.pageViews,
                                    ],
                                    lineColors: ["#d6336c", "#4299e1"],
                                    hideHover: "auto",
                                    parseTime: !1,
                                });
                        var i = {};
                        $.each(t.countryStats, function (t, e) {
                            i[e[0]] = e[1];
                        }),
                            n.length &&
                                n.vectorMap({
                                    map: "world_mill_en",
                                    backgroundColor: "transparent",
                                    regionStyle: {
                                        initial: {
                                            fill: "#f6f8fb",
                                            stroke: "#dce1e7",
                                            "stroke-width": 2,
                                        },
                                    },
                                    series: {
                                        regions: [
                                            {
                                                values: i,
                                                scale: ["#ffffff", "#47005e"],
                                                normalizeFunction: "polynomial",
                                            },
                                        ],
                                    },
                                    onRegionLabelShow: function (e, n, a) {
                                        void 0 !== i[a] &&
                                            n.html(
                                                n.html() +
                                                    ": " +
                                                    i[a] +
                                                    " " +
                                                    t.translations.visits
                                            );
                                    },
                                });
                    },
                },
            ]),
            (n = null) && e(t.prototype, n),
            a && e(t, a),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
        );
        var t, n, a;
    })();
    $(function () {
        var t = $("#widget_analytics_general");
        BDashboard.loadWidget(
            t.find(".widget-content"),
            t.data("url"),
            null,
            function () {
                var e;
                a.initCharts(),
                    null !== (e = (window.analyticsStats.stats || [])[1]) &&
                    void 0 !== e &&
                    e.visitors
                        ? (t.find(".stats-warning").addClass("d-none"),
                          t.find(".stats-warning").removeClass("d-block"))
                        : (t.find(".stats-warning").addClass("d-block"),
                          t.find(".stats-warning").removeClass("d-none"));
            }
        ),
            BDashboard.loadWidget(
                $("#widget_analytics_page").find(".widget-content"),
                $("#widget_analytics_page").data("url")
            ),
            BDashboard.loadWidget(
                $("#widget_analytics_browser").find(".widget-content"),
                $("#widget_analytics_browser").data("url")
            ),
            BDashboard.loadWidget(
                $("#widget_analytics_referrer").find(".widget-content"),
                $("#widget_analytics_referrer").data("url")
            );
    });
})();
