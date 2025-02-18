(() => {
    "use strict";
    var e = {
            6262: (e, t) => {
                t.A = (e, t) => {
                    const n = e.__vccOpts || e;
                    for (const [e, r] of t) n[e] = r;
                    return n;
                };
            },
        },
        t = {};
    const r = {
        props: {
            checkUpdateUrl: {
                type: String,
                default: function () {
                    return null;
                },
                required: !0,
            },
        },
        data: function () {
            return { hasNewVersion: !1, message: null };
        },
        mounted: function () {
            this.checkUpdate();
        },
        methods: {
            checkUpdate: function () {
                var e = this;
                axios
                    .get(this.checkUpdateUrl)
                    .then(function (t) {
                        var n = t.data;
                        !n.error &&
                            n.data.has_new_version &&
                            ((e.hasNewVersion = !0), (e.message = n.message));
                    })
                    .catch(function () {});
            },
        },
    };
    var s = (function n(r) {
        var s = t[r];
        if (void 0 !== s) return s.exports;
        var o = (t[r] = { exports: {} });
        return e[r](o, o.exports, n), o.exports;
    })(6262);
    const o = (0, s.A)(r, [
        [
            "render",
            function (e, t, r, s, o, a) {
                return (0, n.renderSlot)(
                    e.$slots,
                    "default",
                    (0, n.normalizeProps)(
                        (0, n.guardReactiveProps)({
                            hasNewVersion: o.hasNewVersion,
                            message: o.message,
                        })
                    )
                );
            },
        ],
    ]);
    "undefined" != typeof vueApp &&
        vueApp.booting(function (e) {
            e.component("v-check-for-updates", o);
        });
})();
