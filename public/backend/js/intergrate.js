(() => {
    var t = {
            6294: (t, e, i) => {
                "use strict";
                i.d(e, { T: () => n, y: () => r });
                var n = $.parseJSON(localStorage.getItem("MediaConfig")) || {},
                    a = {
                        app_key: RV_MEDIA_CONFIG.random_hash
                            ? RV_MEDIA_CONFIG.random_hash
                            : "21d06709fe1d3abdf0e35ddda89c4b282",
                        request_params: {
                            view_type: "tiles",
                            filter: "everything",
                            view_in: "all_media",
                            sort_by: "created_at-desc",
                            folder_id: 0,
                        },
                        hide_details_pane: !1,
                        icons: {
                            folder: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n            <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"></path>\n        </svg>',
                        },
                        actions_list: {
                            basic: [
                                {
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>\n                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>\n                </svg>',
                                    name: "Preview",
                                    action: "preview",
                                    order: 0,
                                    class: "rv-action-preview",
                                },
                                {
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                    <path d="M8 5v10a1 1 0 0 0 1 1h10"></path>\n                    <path d="M5 8h10a1 1 0 0 1 1 1v10"></path>\n                </svg>',
                                    name: "Crop",
                                    action: "crop",
                                    order: 1,
                                    class: "rv-action-crop",
                                },
                            ],
                            file: [
                                {
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>\n                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>\n                    <path d="M16 5l3 3"></path>\n                </svg>',
                                    name: "Rename",
                                    action: "rename",
                                    order: 0,
                                    class: "rv-action-rename",
                                },
                                {
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                    <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>\n                    <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>\n                </svg>',
                                    name: "Make a copy",
                                    action: "make_copy",
                                    order: 1,
                                    class: "rv-action-make-copy",
                                },
                                {
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                    <path d="M15 8h.01"></path>\n                    <path d="M11 20h-4a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v4"></path>\n                    <path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l3 3"></path>\n                    <path d="M14 14l1 -1c.31 -.298 .644 -.497 .987 -.596"></path>\n                    <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z"></path>\n                </svg>',
                                    name: "Alt text",
                                    action: "alt_text",
                                    order: 2,
                                    class: "rv-action-alt-text",
                                },
                                {
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                    <path d="M9 15l6 -6"></path>\n                    <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path>\n                    <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path>\n                </svg>',
                                    name: "Copy link",
                                    action: "copy_link",
                                    order: 3,
                                    class: "rv-action-copy-link",
                                },
                                {
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                    <path d="M9 15l6 -6"></path>\n                    <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path>\n                    <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path>\n                </svg>',
                                    name: "Copy indirect link",
                                    action: "copy_indirect_link",
                                    order: 4,
                                    class: "rv-action-copy-indirect-link",
                                },
                                {
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>\n                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>\n                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>\n                  <path d="M8.7 10.7l6.6 -3.4"></path>\n                  <path d="M8.7 13.3l6.6 3.4"></path>\n                </svg>',
                                    name: "Share",
                                    action: "share",
                                    order: 5,
                                    class: "rv-action-share",
                                },
                            ],
                            user: [
                                {
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>\n                </svg>',
                                    name: "Favorite",
                                    action: "favorite",
                                    order: 2,
                                    class: "rv-action-favorite",
                                },
                                {
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>\n                </svg>',
                                    name: "Remove favorite",
                                    action: "remove_favorite",
                                    order: 3,
                                    class: "rv-action-favorite",
                                },
                            ],
                            other: [
                                {
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>\n                    <path d="M7 11l5 5l5 -5"></path>\n                    <path d="M12 4l0 12"></path>\n                </svg>',
                                    name: "Download",
                                    action: "download",
                                    order: 0,
                                    class: "rv-action-download",
                                },
                                {
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                    <path d="M4 7l16 0"></path>\n                    <path d="M10 11l0 6"></path>\n                    <path d="M14 11l0 6"></path>\n                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>\n                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>\n                </svg>',
                                    name: "Move to trash",
                                    action: "trash",
                                    order: 1,
                                    class: "rv-action-trash",
                                },
                                {
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                    <path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3"></path>\n                    <path d="M18 13.3l-6.3 -6.3"></path>\n                </svg>',
                                    name: "Delete permanently",
                                    action: "delete",
                                    order: 2,
                                    class: "rv-action-delete",
                                },
                                {
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                    <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"></path>\n                </svg>',
                                    name: "Restore",
                                    action: "restore",
                                    order: 3,
                                    class: "rv-action-restore",
                                },
                                {
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" /><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>',
                                    name: "Properties",
                                    action: "properties",
                                    order: 4,
                                    class: "rv-action-properties",
                                },
                            ],
                        },
                    };
                (n.app_key && n.app_key === a.app_key) || (n = a),
                    (n.request_params.search = "");
                var r = $.parseJSON(localStorage.getItem("RecentItems")) || [];
            },
            418: (t, e, i) => {
                "use strict";
                i.d(e, { M: () => l });
                var n = i(6294);
                function a(t) {
                    return (
                        (a =
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
                        a(t)
                    );
                }
                function r(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e &&
                            (n = n.filter(function (e) {
                                return Object.getOwnPropertyDescriptor(
                                    t,
                                    e
                                ).enumerable;
                            })),
                            i.push.apply(i, n);
                    }
                    return i;
                }
                function o(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2
                            ? r(Object(i), !0).forEach(function (e) {
                                  s(t, e, i[e]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                  t,
                                  Object.getOwnPropertyDescriptors(i)
                              )
                            : r(Object(i)).forEach(function (e) {
                                  Object.defineProperty(
                                      t,
                                      e,
                                      Object.getOwnPropertyDescriptor(i, e)
                                  );
                              });
                    }
                    return t;
                }
                function s(t, e, i) {
                    return (
                        (e = c(e)) in t
                            ? Object.defineProperty(t, e, {
                                  value: i,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (t[e] = i),
                        t
                    );
                }
                function h(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, c(n.key), n);
                    }
                }
                function c(t) {
                    var e = (function (t, e) {
                        if ("object" != a(t) || !t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != a(n)) return n;
                            throw new TypeError(
                                "@@toPrimitive must return a primitive value."
                            );
                        }
                        return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == a(e) ? e : e + "";
                }
                var l = (function () {
                    function t() {
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                    }
                    return (
                        (e = t),
                        (a = [
                            {
                                key: "getUrlParam",
                                value: function (t) {
                                    var e =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : null;
                                    e || (e = window.location.search);
                                    var i = new RegExp(
                                            "(?:[?&]|&)" + t + "=([^&]+)",
                                            "i"
                                        ),
                                        n = e.match(i);
                                    return n && n.length > 1 ? n[1] : null;
                                },
                            },
                            {
                                key: "asset",
                                value: function (t) {
                                    if (
                                        "//" === t.substring(0, 2) ||
                                        "http://" === t.substring(0, 7) ||
                                        "https://" === t.substring(0, 8)
                                    )
                                        return t;
                                    var e =
                                        "/" !==
                                        RV_MEDIA_URL.base_url.substr(-1, 1)
                                            ? RV_MEDIA_URL.base_url + "/"
                                            : RV_MEDIA_URL.base_url;
                                    return "/" === t.substring(0, 1)
                                        ? e + t.substring(1)
                                        : e + t;
                                },
                            },
                            {
                                key: "showAjaxLoading",
                                value: function () {
                                    (arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : $(".rv-media-main")
                                    )
                                        .addClass("on-loading")
                                        .append($("#rv_media_loading").html());
                                },
                            },
                            {
                                key: "hideAjaxLoading",
                                value: function () {
                                    (arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : $(".rv-media-main")
                                    )
                                        .removeClass("on-loading")
                                        .find(".loading-spinner")
                                        .remove();
                                },
                            },
                            {
                                key: "isOnAjaxLoading",
                                value: function () {
                                    return (
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : $(".rv-media-items")
                                    ).hasClass("on-loading");
                                },
                            },
                            {
                                key: "jsonEncode",
                                value: function (t) {
                                    return (
                                        void 0 === t && (t = null),
                                        JSON.stringify(t)
                                    );
                                },
                            },
                            {
                                key: "jsonDecode",
                                value: function (t, e) {
                                    if (!t) return e;
                                    if ("string" == typeof t) {
                                        var i;
                                        try {
                                            i = $.parseJSON(t);
                                        } catch (t) {
                                            i = e;
                                        }
                                        return i;
                                    }
                                    return t;
                                },
                            },
                            {
                                key: "getRequestParams",
                                value: function () {
                                    return window.rvMedia.options &&
                                        "modal" ===
                                            window.rvMedia.options.open_in
                                        ? o(
                                              o({}, n.T.request_params),
                                              window.rvMedia.options
                                          )
                                        : n.T.request_params;
                                },
                            },
                            {
                                key: "setSelectedFile",
                                value: function (t) {
                                    void 0 !== window.rvMedia.options
                                        ? (window.rvMedia.options.selected_file_id =
                                              t)
                                        : (n.T.request_params.selected_file_id =
                                              t);
                                },
                            },
                            {
                                key: "getConfigs",
                                value: function () {
                                    return n.T;
                                },
                            },
                            {
                                key: "storeConfig",
                                value: function () {
                                    localStorage.setItem(
                                        "MediaConfig",
                                        t.jsonEncode(n.T)
                                    );
                                },
                            },
                            {
                                key: "storeRecentItems",
                                value: function () {
                                    localStorage.setItem(
                                        "RecentItems",
                                        t.jsonEncode(n.y)
                                    );
                                },
                            },
                            {
                                key: "addToRecent",
                                value: function (e) {
                                    e instanceof Array
                                        ? t.each(e, function (t) {
                                              n.y.push(t);
                                          })
                                        : (n.y.push(e),
                                          this.storeRecentItems());
                                },
                            },
                            {
                                key: "getItems",
                                value: function () {
                                    var t = [];
                                    return (
                                        $(".js-media-list-title").each(
                                            function (e, i) {
                                                var n = $(i),
                                                    a = n.data() || {};
                                                (a.index_key = n.index()),
                                                    t.push(a);
                                            }
                                        ),
                                        t
                                    );
                                },
                            },
                            {
                                key: "getSelectedItems",
                                value: function () {
                                    var t = [];
                                    return (
                                        $(
                                            ".js-media-list-title input[type=checkbox]:checked"
                                        ).each(function (e, i) {
                                            var n = $(i).closest(
                                                    ".js-media-list-title"
                                                ),
                                                a = n.data() || {};
                                            (a.index_key = n.index()),
                                                t.push(a);
                                        }),
                                        t
                                    );
                                },
                            },
                            {
                                key: "getSelectedFiles",
                                value: function () {
                                    var t = [];
                                    return (
                                        $(
                                            ".js-media-list-title[data-context=file] input[type=checkbox]:checked"
                                        ).each(function (e, i) {
                                            var n = $(i).closest(
                                                    ".js-media-list-title"
                                                ),
                                                a = n.data() || {};
                                            (a.index_key = n.index()),
                                                t.push(a);
                                        }),
                                        t
                                    );
                                },
                            },
                            {
                                key: "getSelectedFolder",
                                value: function () {
                                    var t = [];
                                    return (
                                        $(
                                            ".js-media-list-title[data-context=folder] input[type=checkbox]:checked"
                                        ).each(function (e, i) {
                                            var n = $(i).closest(
                                                    ".js-media-list-title"
                                                ),
                                                a = n.data() || {};
                                            (a.index_key = n.index()),
                                                t.push(a);
                                        }),
                                        t
                                    );
                                },
                            },
                            {
                                key: "isUseInModal",
                                value: function () {
                                    return (
                                        window.rvMedia &&
                                        window.rvMedia.options &&
                                        "modal" ===
                                            window.rvMedia.options.open_in
                                    );
                                },
                            },
                            {
                                key: "resetPagination",
                                value: function () {
                                    RV_MEDIA_CONFIG.pagination = {
                                        paged: 1,
                                        posts_per_page: 40,
                                        in_process_get_media: !1,
                                        has_more: !0,
                                    };
                                },
                            },
                            {
                                key: "trans",
                                value: function (t) {
                                    return _.get(
                                        RV_MEDIA_CONFIG.translations,
                                        t,
                                        t
                                    );
                                },
                            },
                            {
                                key: "config",
                                value: function (t) {
                                    var e =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : null;
                                    return _.get(RV_MEDIA_CONFIG, t, e);
                                },
                            },
                            {
                                key: "hasPermission",
                                value: function (e) {
                                    return t.inArray(
                                        t.config("permissions", []),
                                        e
                                    );
                                },
                            },
                            {
                                key: "inArray",
                                value: function (t, e) {
                                    return _.includes(t, e);
                                },
                            },
                            {
                                key: "each",
                                value: function (t, e) {
                                    return _.each(t, e);
                                },
                            },
                            {
                                key: "forEach",
                                value: function (t, e) {
                                    return _.forEach(t, e);
                                },
                            },
                            {
                                key: "arrayReject",
                                value: function (t, e) {
                                    return _.reject(t, e);
                                },
                            },
                            {
                                key: "arrayFilter",
                                value: function (t, e) {
                                    return _.filter(t, e);
                                },
                            },
                            {
                                key: "arrayFirst",
                                value: function (t) {
                                    return _.first(t);
                                },
                            },
                            {
                                key: "isArray",
                                value: function (t) {
                                    return _.isArray(t);
                                },
                            },
                            {
                                key: "isEmpty",
                                value: function (t) {
                                    return _.isEmpty(t);
                                },
                            },
                            {
                                key: "size",
                                value: function (t) {
                                    return _.size(t);
                                },
                            },
                        ]),
                        (i = null) && h(e.prototype, i),
                        a && h(e, a),
                        Object.defineProperty(e, "prototype", { writable: !1 }),
                        e
                    );
                    var e, i, a;
                })();
            },
            8758: (t, e, i) => {
                "use strict";
                i.d(e, { d: () => f });
                var n = i(5643),
                    a = i.n(n),
                    r = i(6294),
                    o = i(418),
                    s = i(1994);
                function h(t) {
                    return (
                        (h =
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
                        h(t)
                    );
                }
                function c() {
                    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ c =
                        function () {
                            return e;
                        };
                    var t,
                        e = {},
                        i = Object.prototype,
                        n = i.hasOwnProperty,
                        a =
                            Object.defineProperty ||
                            function (t, e, i) {
                                t[e] = i.value;
                            },
                        r = "function" == typeof Symbol ? Symbol : {},
                        o = r.iterator || "@@iterator",
                        s = r.asyncIterator || "@@asyncIterator",
                        l = r.toStringTag || "@@toStringTag";
                    function d(t, e, i) {
                        return (
                            Object.defineProperty(t, e, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                            }),
                            t[e]
                        );
                    }
                    try {
                        d({}, "");
                    } catch (t) {
                        d = function (t, e, i) {
                            return (t[e] = i);
                        };
                    }
                    function u(t, e, i, n) {
                        var r = e && e.prototype instanceof y ? e : y,
                            o = Object.create(r.prototype),
                            s = new R(n || []);
                        return a(o, "_invoke", { value: E(t, i, s) }), o;
                    }
                    function p(t, e, i) {
                        try {
                            return { type: "normal", arg: t.call(e, i) };
                        } catch (t) {
                            return { type: "throw", arg: t };
                        }
                    }
                    e.wrap = u;
                    var f = "suspendedStart",
                        m = "suspendedYield",
                        v = "executing",
                        g = "completed",
                        w = {};
                    function y() {}
                    function b() {}
                    function M() {}
                    var x = {};
                    d(x, o, function () {
                        return this;
                    });
                    var k = Object.getPrototypeOf,
                        _ = k && k(k(B([])));
                    _ && _ !== i && n.call(_, o) && (x = _);
                    var C = (M.prototype = y.prototype = Object.create(x));
                    function j(t) {
                        ["next", "throw", "return"].forEach(function (e) {
                            d(t, e, function (t) {
                                return this._invoke(e, t);
                            });
                        });
                    }
                    function D(t, e) {
                        function i(a, r, o, s) {
                            var c = p(t[a], t, r);
                            if ("throw" !== c.type) {
                                var l = c.arg,
                                    d = l.value;
                                return d &&
                                    "object" == h(d) &&
                                    n.call(d, "__await")
                                    ? e.resolve(d.__await).then(
                                          function (t) {
                                              i("next", t, o, s);
                                          },
                                          function (t) {
                                              i("throw", t, o, s);
                                          }
                                      )
                                    : e.resolve(d).then(
                                          function (t) {
                                              (l.value = t), o(l);
                                          },
                                          function (t) {
                                              return i("throw", t, o, s);
                                          }
                                      );
                            }
                            s(c.arg);
                        }
                        var r;
                        a(this, "_invoke", {
                            value: function (t, n) {
                                function a() {
                                    return new e(function (e, a) {
                                        i(t, n, e, a);
                                    });
                                }
                                return (r = r ? r.then(a, a) : a());
                            },
                        });
                    }
                    function E(e, i, n) {
                        var a = f;
                        return function (r, o) {
                            if (a === v)
                                throw Error("Generator is already running");
                            if (a === g) {
                                if ("throw" === r) throw o;
                                return { value: t, done: !0 };
                            }
                            for (n.method = r, n.arg = o; ; ) {
                                var s = n.delegate;
                                if (s) {
                                    var h = O(s, n);
                                    if (h) {
                                        if (h === w) continue;
                                        return h;
                                    }
                                }
                                if ("next" === n.method)
                                    n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (a === f) throw ((a = g), n.arg);
                                    n.dispatchException(n.arg);
                                } else
                                    "return" === n.method &&
                                        n.abrupt("return", n.arg);
                                a = v;
                                var c = p(e, i, n);
                                if ("normal" === c.type) {
                                    if (((a = n.done ? g : m), c.arg === w))
                                        continue;
                                    return { value: c.arg, done: n.done };
                                }
                                "throw" === c.type &&
                                    ((a = g),
                                    (n.method = "throw"),
                                    (n.arg = c.arg));
                            }
                        };
                    }
                    function O(e, i) {
                        var n = i.method,
                            a = e.iterator[n];
                        if (a === t)
                            return (
                                (i.delegate = null),
                                ("throw" === n &&
                                    e.iterator.return &&
                                    ((i.method = "return"),
                                    (i.arg = t),
                                    O(e, i),
                                    "throw" === i.method)) ||
                                    ("return" !== n &&
                                        ((i.method = "throw"),
                                        (i.arg = new TypeError(
                                            "The iterator does not provide a '" +
                                                n +
                                                "' method"
                                        )))),
                                w
                            );
                        var r = p(a, e.iterator, i.arg);
                        if ("throw" === r.type)
                            return (
                                (i.method = "throw"),
                                (i.arg = r.arg),
                                (i.delegate = null),
                                w
                            );
                        var o = r.arg;
                        return o
                            ? o.done
                                ? ((i[e.resultName] = o.value),
                                  (i.next = e.nextLoc),
                                  "return" !== i.method &&
                                      ((i.method = "next"), (i.arg = t)),
                                  (i.delegate = null),
                                  w)
                                : o
                            : ((i.method = "throw"),
                              (i.arg = new TypeError(
                                  "iterator result is not an object"
                              )),
                              (i.delegate = null),
                              w);
                    }
                    function S(t) {
                        var e = { tryLoc: t[0] };
                        1 in t && (e.catchLoc = t[1]),
                            2 in t &&
                                ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                            this.tryEntries.push(e);
                    }
                    function P(t) {
                        var e = t.completion || {};
                        (e.type = "normal"), delete e.arg, (t.completion = e);
                    }
                    function R(t) {
                        (this.tryEntries = [{ tryLoc: "root" }]),
                            t.forEach(S, this),
                            this.reset(!0);
                    }
                    function B(e) {
                        if (e || "" === e) {
                            var i = e[o];
                            if (i) return i.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var a = -1,
                                    r = function i() {
                                        for (; ++a < e.length; )
                                            if (n.call(e, a))
                                                return (
                                                    (i.value = e[a]),
                                                    (i.done = !1),
                                                    i
                                                );
                                        return (i.value = t), (i.done = !0), i;
                                    };
                                return (r.next = r);
                            }
                        }
                        throw new TypeError(h(e) + " is not iterable");
                    }
                    return (
                        (b.prototype = M),
                        a(C, "constructor", { value: M, configurable: !0 }),
                        a(M, "constructor", { value: b, configurable: !0 }),
                        (b.displayName = d(M, l, "GeneratorFunction")),
                        (e.isGeneratorFunction = function (t) {
                            var e = "function" == typeof t && t.constructor;
                            return (
                                !!e &&
                                (e === b ||
                                    "GeneratorFunction" ===
                                        (e.displayName || e.name))
                            );
                        }),
                        (e.mark = function (t) {
                            return (
                                Object.setPrototypeOf
                                    ? Object.setPrototypeOf(t, M)
                                    : ((t.__proto__ = M),
                                      d(t, l, "GeneratorFunction")),
                                (t.prototype = Object.create(C)),
                                t
                            );
                        }),
                        (e.awrap = function (t) {
                            return { __await: t };
                        }),
                        j(D.prototype),
                        d(D.prototype, s, function () {
                            return this;
                        }),
                        (e.AsyncIterator = D),
                        (e.async = function (t, i, n, a, r) {
                            void 0 === r && (r = Promise);
                            var o = new D(u(t, i, n, a), r);
                            return e.isGeneratorFunction(i)
                                ? o
                                : o.next().then(function (t) {
                                      return t.done ? t.value : o.next();
                                  });
                        }),
                        j(C),
                        d(C, l, "Generator"),
                        d(C, o, function () {
                            return this;
                        }),
                        d(C, "toString", function () {
                            return "[object Generator]";
                        }),
                        (e.keys = function (t) {
                            var e = Object(t),
                                i = [];
                            for (var n in e) i.push(n);
                            return (
                                i.reverse(),
                                function t() {
                                    for (; i.length; ) {
                                        var n = i.pop();
                                        if (n in e)
                                            return (
                                                (t.value = n), (t.done = !1), t
                                            );
                                    }
                                    return (t.done = !0), t;
                                }
                            );
                        }),
                        (e.values = B),
                        (R.prototype = {
                            constructor: R,
                            reset: function (e) {
                                if (
                                    ((this.prev = 0),
                                    (this.next = 0),
                                    (this.sent = this._sent = t),
                                    (this.done = !1),
                                    (this.delegate = null),
                                    (this.method = "next"),
                                    (this.arg = t),
                                    this.tryEntries.forEach(P),
                                    !e)
                                )
                                    for (var i in this)
                                        "t" === i.charAt(0) &&
                                            n.call(this, i) &&
                                            !isNaN(+i.slice(1)) &&
                                            (this[i] = t);
                            },
                            stop: function () {
                                this.done = !0;
                                var t = this.tryEntries[0].completion;
                                if ("throw" === t.type) throw t.arg;
                                return this.rval;
                            },
                            dispatchException: function (e) {
                                if (this.done) throw e;
                                var i = this;
                                function a(n, a) {
                                    return (
                                        (s.type = "throw"),
                                        (s.arg = e),
                                        (i.next = n),
                                        a && ((i.method = "next"), (i.arg = t)),
                                        !!a
                                    );
                                }
                                for (
                                    var r = this.tryEntries.length - 1;
                                    r >= 0;
                                    --r
                                ) {
                                    var o = this.tryEntries[r],
                                        s = o.completion;
                                    if ("root" === o.tryLoc) return a("end");
                                    if (o.tryLoc <= this.prev) {
                                        var h = n.call(o, "catchLoc"),
                                            c = n.call(o, "finallyLoc");
                                        if (h && c) {
                                            if (this.prev < o.catchLoc)
                                                return a(o.catchLoc, !0);
                                            if (this.prev < o.finallyLoc)
                                                return a(o.finallyLoc);
                                        } else if (h) {
                                            if (this.prev < o.catchLoc)
                                                return a(o.catchLoc, !0);
                                        } else {
                                            if (!c)
                                                throw Error(
                                                    "try statement without catch or finally"
                                                );
                                            if (this.prev < o.finallyLoc)
                                                return a(o.finallyLoc);
                                        }
                                    }
                                }
                            },
                            abrupt: function (t, e) {
                                for (
                                    var i = this.tryEntries.length - 1;
                                    i >= 0;
                                    --i
                                ) {
                                    var a = this.tryEntries[i];
                                    if (
                                        a.tryLoc <= this.prev &&
                                        n.call(a, "finallyLoc") &&
                                        this.prev < a.finallyLoc
                                    ) {
                                        var r = a;
                                        break;
                                    }
                                }
                                r &&
                                    ("break" === t || "continue" === t) &&
                                    r.tryLoc <= e &&
                                    e <= r.finallyLoc &&
                                    (r = null);
                                var o = r ? r.completion : {};
                                return (
                                    (o.type = t),
                                    (o.arg = e),
                                    r
                                        ? ((this.method = "next"),
                                          (this.next = r.finallyLoc),
                                          w)
                                        : this.complete(o)
                                );
                            },
                            complete: function (t, e) {
                                if ("throw" === t.type) throw t.arg;
                                return (
                                    "break" === t.type || "continue" === t.type
                                        ? (this.next = t.arg)
                                        : "return" === t.type
                                        ? ((this.rval = this.arg = t.arg),
                                          (this.method = "return"),
                                          (this.next = "end"))
                                        : "normal" === t.type &&
                                          e &&
                                          (this.next = e),
                                    w
                                );
                            },
                            finish: function (t) {
                                for (
                                    var e = this.tryEntries.length - 1;
                                    e >= 0;
                                    --e
                                ) {
                                    var i = this.tryEntries[e];
                                    if (i.finallyLoc === t)
                                        return (
                                            this.complete(
                                                i.completion,
                                                i.afterLoc
                                            ),
                                            P(i),
                                            w
                                        );
                                }
                            },
                            catch: function (t) {
                                for (
                                    var e = this.tryEntries.length - 1;
                                    e >= 0;
                                    --e
                                ) {
                                    var i = this.tryEntries[e];
                                    if (i.tryLoc === t) {
                                        var n = i.completion;
                                        if ("throw" === n.type) {
                                            var a = n.arg;
                                            P(i);
                                        }
                                        return a;
                                    }
                                }
                                throw Error("illegal catch attempt");
                            },
                            delegateYield: function (e, i, n) {
                                return (
                                    (this.delegate = {
                                        iterator: B(e),
                                        resultName: i,
                                        nextLoc: n,
                                    }),
                                    "next" === this.method && (this.arg = t),
                                    w
                                );
                            },
                        }),
                        e
                    );
                }
                function l(t, e, i, n, a, r, o) {
                    try {
                        var s = t[r](o),
                            h = s.value;
                    } catch (t) {
                        return void i(t);
                    }
                    s.done ? e(h) : Promise.resolve(h).then(n, a);
                }
                function d(t) {
                    return function () {
                        var e = this,
                            i = arguments;
                        return new Promise(function (n, a) {
                            var r = t.apply(e, i);
                            function o(t) {
                                l(r, n, a, o, s, "next", t);
                            }
                            function s(t) {
                                l(r, n, a, o, s, "throw", t);
                            }
                            o(void 0);
                        });
                    };
                }
                function u(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, p(n.key), n);
                    }
                }
                function p(t) {
                    var e = (function (t, e) {
                        if ("object" != h(t) || !t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != h(n)) return n;
                            throw new TypeError(
                                "@@toPrimitive must return a primitive value."
                            );
                        }
                        return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == h(e) ? e : e + "";
                }
                var f = (function () {
                    function t() {
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                    }
                    return (
                        (e = t),
                        (i = null),
                        (n = [
                            {
                                key: "handleDropdown",
                                value: function () {
                                    var e = o.M.size(o.M.getSelectedItems());
                                    t.renderActions(),
                                        e > 0
                                            ? $(
                                                  ".rv-dropdown-actions > .dropdown-toggle"
                                              )
                                                  .removeClass("disabled")
                                                  .prop("disabled", !1)
                                            : $(
                                                  ".rv-dropdown-actions > .dropdown-toggle"
                                              )
                                                  .addClass("disabled")
                                                  .prop("disabled", !0);
                                },
                            },
                            {
                                key: "handlePreview",
                                value: function () {
                                    var t = [];
                                    o.M.each(
                                        o.M.getSelectedFiles(),
                                        function (e) {
                                            if (e.preview_url) {
                                                if ("document" === e.type) {
                                                    var i =
                                                        document.createElement(
                                                            "iframe"
                                                        );
                                                    (i.src = e.preview_url),
                                                        (i.allowFullscreen =
                                                            !0),
                                                        (i.style.width =
                                                            "100vh"),
                                                        (i.style.height =
                                                            "100vh"),
                                                        t.push(i);
                                                } else t.push(e.preview_url);
                                                r.y.push(e.id);
                                            }
                                        }
                                    ),
                                        o.M.size(t) > 0
                                            ? (Botble.lightbox(t),
                                              o.M.storeRecentItems())
                                            : this.handleGlobalAction(
                                                  "download"
                                              );
                                },
                            },
                            {
                                key: "renderCropImage",
                                value: function () {
                                    var t,
                                        e = $("#rv_media_crop_image").html(),
                                        i = $(
                                            "#modal_crop_image .crop-image"
                                        ).empty(),
                                        n = o.M.getSelectedItems()[0],
                                        r = $("#modal_crop_image .form-crop"),
                                        s = e.replace(/__src__/gi, n.full_url);
                                    i.append(s);
                                    var h = i.find("img")[0],
                                        c = {
                                            minContainerWidth: 500,
                                            minContainerHeight: 550,
                                            dragMode: "move",
                                            crop: function (e) {
                                                (t = e.detail),
                                                    r
                                                        .find(
                                                            'input[name="image_id"]'
                                                        )
                                                        .val(n.id),
                                                    r
                                                        .find(
                                                            'input[name="crop_data"]'
                                                        )
                                                        .val(JSON.stringify(t)),
                                                    d(t.height),
                                                    u(t.width);
                                            },
                                        },
                                        l = new (a())(h, c);
                                    r
                                        .find("#aspectRatio")
                                        .on("click", function () {
                                            l.destroy(),
                                                $(this).is(":checked")
                                                    ? (c.aspectRatio =
                                                          t.width / t.height)
                                                    : (c.aspectRatio = null),
                                                (l = new (a())(h, c));
                                        }),
                                        r
                                            .find("#dataHeight")
                                            .on("change", function () {
                                                (t.height = parseFloat(
                                                    $(this).val()
                                                )),
                                                    l.setData(t),
                                                    d(t.height);
                                            }),
                                        r
                                            .find("#dataWidth")
                                            .on("change", function () {
                                                (t.width = parseFloat(
                                                    $(this).val()
                                                )),
                                                    l.setData(t),
                                                    u(t.width);
                                            });
                                    var d = function (t) {
                                            r.find("#dataHeight").val(
                                                parseInt(t)
                                            );
                                        },
                                        u = function (t) {
                                            r.find("#dataWidth").val(
                                                parseInt(t)
                                            );
                                        };
                                },
                            },
                            {
                                key: "handleCopyLink",
                                value:
                                    ((l = d(
                                        c().mark(function t() {
                                            var e;
                                            return c().wrap(function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return (
                                                                (e = ""),
                                                                o.M.each(
                                                                    o.M.getSelectedFiles(),
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        o.M.isEmpty(
                                                                            e
                                                                        ) ||
                                                                            (e +=
                                                                                "\n"),
                                                                            (e +=
                                                                                t.full_url);
                                                                    }
                                                                ),
                                                                (t.next = 4),
                                                                Botble.copyToClipboard(
                                                                    e
                                                                )
                                                            );
                                                        case 4:
                                                            s.b.showMessage(
                                                                "success",
                                                                o.M.trans(
                                                                    "clipboard.success"
                                                                ),
                                                                o.M.trans(
                                                                    "message.success_header"
                                                                )
                                                            );
                                                        case 5:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            }, t);
                                        })
                                    )),
                                    function () {
                                        return l.apply(this, arguments);
                                    }),
                            },
                            {
                                key: "handleCopyIndirectLink",
                                value:
                                    ((h = d(
                                        c().mark(function t() {
                                            var e;
                                            return c().wrap(function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return (
                                                                (e = ""),
                                                                o.M.each(
                                                                    o.M.getSelectedFiles(),
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        o.M.isEmpty(
                                                                            e
                                                                        ) ||
                                                                            (e +=
                                                                                "\n"),
                                                                            (e +=
                                                                                t.indirect_url);
                                                                    }
                                                                ),
                                                                (t.next = 4),
                                                                Botble.copyToClipboard(
                                                                    e
                                                                )
                                                            );
                                                        case 4:
                                                            s.b.showMessage(
                                                                "success",
                                                                o.M.trans(
                                                                    "clipboard.success"
                                                                ),
                                                                o.M.trans(
                                                                    "message.success_header"
                                                                )
                                                            );
                                                        case 5:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            }, t);
                                        })
                                    )),
                                    function () {
                                        return h.apply(this, arguments);
                                    }),
                            },
                            {
                                key: "handleShare",
                                value: function () {
                                    $("#modal_share_items")
                                        .modal("show")
                                        .find("form.form-alt-text")
                                        .data("action", type);
                                },
                            },
                            {
                                key: "handleGlobalAction",
                                value: function (e, i) {
                                    var n = [];
                                    switch (
                                        (o.M.each(
                                            o.M.getSelectedItems(),
                                            function (t) {
                                                n.push({
                                                    is_folder: t.is_folder,
                                                    id: t.id,
                                                    full_url: t.full_url,
                                                });
                                            }
                                        ),
                                        e)
                                    ) {
                                        case "rename":
                                            $("#modal_rename_items")
                                                .modal("show")
                                                .find("form.form-rename")
                                                .data("action", e);
                                            break;
                                        case "copy_link":
                                            t.handleCopyLink().then(
                                                function () {}
                                            );
                                            break;
                                        case "copy_indirect_link":
                                            t.handleCopyIndirectLink().then(
                                                function () {}
                                            );
                                            break;
                                        case "share":
                                            $("#modal_share_items").modal(
                                                "show"
                                            );
                                            break;
                                        case "preview":
                                            t.handlePreview();
                                            break;
                                        case "alt_text":
                                            $("#modal_alt_text_items")
                                                .modal("show")
                                                .find("form.form-alt-text")
                                                .data("action", e);
                                            break;
                                        case "crop":
                                            $("#modal_crop_image")
                                                .modal("show")
                                                .find("form.rv-form")
                                                .data("action", e);
                                            break;
                                        case "trash":
                                            $("#modal_trash_items")
                                                .modal("show")
                                                .find("form.form-delete-items")
                                                .data("action", e);
                                            break;
                                        case "delete":
                                            $("#modal_delete_items")
                                                .modal("show")
                                                .find("form.form-delete-items")
                                                .data("action", e);
                                            break;
                                        case "empty_trash":
                                            $("#modal_empty_trash")
                                                .modal("show")
                                                .find("form.form-empty-trash")
                                                .data("action", e);
                                            break;
                                        case "download":
                                            var a = [];
                                            o.M.each(
                                                o.M.getSelectedItems(),
                                                function (t) {
                                                    o.M.inArray(
                                                        o.M.getConfigs()
                                                            .denied_download,
                                                        t.mime_type
                                                    ) ||
                                                        a.push({
                                                            id: t.id,
                                                            is_folder:
                                                                t.is_folder,
                                                        });
                                                }
                                            ),
                                                a.length
                                                    ? t.handleDownload(a)
                                                    : s.b.showMessage(
                                                          "error",
                                                          o.M.trans(
                                                              "download.error"
                                                          ),
                                                          o.M.trans(
                                                              "message.error_header"
                                                          )
                                                      );
                                            break;
                                        case "properties":
                                            $("#modal-properties").modal(
                                                "show"
                                            );
                                            break;
                                        default:
                                            t.processAction(
                                                { selected: n, action: e },
                                                i
                                            );
                                    }
                                },
                            },
                            {
                                key: "processAction",
                                value: function (t) {
                                    var e =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : null;
                                    o.M.showAjaxLoading(),
                                        $httpClient
                                            .make()
                                            .post(
                                                RV_MEDIA_URL.global_actions,
                                                t
                                            )
                                            .then(function (t) {
                                                var i = t.data;
                                                o.M.resetPagination(),
                                                    s.b.showMessage(
                                                        "success",
                                                        i.message,
                                                        o.M.trans(
                                                            "message.success_header"
                                                        )
                                                    ),
                                                    e && e(i);
                                            })
                                            .catch(function (t) {
                                                var i = t.response;
                                                return e && e(i.data);
                                            })
                                            .finally(function () {
                                                return o.M.hideAjaxLoading();
                                            });
                                },
                            },
                            {
                                key: "renderRenameItems",
                                value: function () {
                                    var t = $("#rv_media_rename_item").html(),
                                        e = $(
                                            "#modal_rename_items .rename-items"
                                        ).empty();
                                    o.M.each(
                                        o.M.getSelectedItems(),
                                        function (i) {
                                            var n = t
                                                    .replace(
                                                        /__icon__/gi,
                                                        i.icon ||
                                                            '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                    <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"></path>\n                </svg>'
                                                    )
                                                    .replace(
                                                        /__placeholder__/gi,
                                                        "Input file name"
                                                    )
                                                    .replace(
                                                        /__value__/gi,
                                                        i.name
                                                    ),
                                                a = $(n);
                                            a.data("id", i.id.toString()),
                                                a.data(
                                                    "is_folder",
                                                    i.is_folder
                                                ),
                                                a.data("name", i.name);
                                            var r = a.find(
                                                'input[name="rename_physical_file"]'
                                            );
                                            r
                                                .closest(".form-check")
                                                .find("span")
                                                .text(
                                                    i.is_folder
                                                        ? r.data("folder-label")
                                                        : r.data("file-label")
                                                ),
                                                a
                                                    .find(
                                                        'input[name="rename_physical_file"]'
                                                    )
                                                    .on("change", function () {
                                                        a.data(
                                                            "rename_physical_file",
                                                            $(this).is(
                                                                ":checked"
                                                            )
                                                        );
                                                    }),
                                                e.append(a),
                                                Botble.initFieldCollapse();
                                        }
                                    );
                                },
                            },
                            {
                                key: "renderAltTextItems",
                                value: function () {
                                    var t = $("#rv_media_alt_text_item").html(),
                                        e = $(
                                            "#modal_alt_text_items .alt-text-items"
                                        ).empty();
                                    o.M.each(
                                        o.M.getSelectedItems(),
                                        function (i) {
                                            var n = t
                                                    .replace(
                                                        /__icon__/gi,
                                                        i.icon ||
                                                            '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                    <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"></path>\n                </svg>'
                                                    )
                                                    .replace(
                                                        /__placeholder__/gi,
                                                        "Input file alt"
                                                    )
                                                    .replace(
                                                        /__value__/gi,
                                                        null === i.alt
                                                            ? ""
                                                            : i.alt
                                                    ),
                                                a = $(n);
                                            a.data("id", i.id),
                                                a.data("alt", i.alt),
                                                e.append(a);
                                        }
                                    );
                                },
                            },
                            {
                                key: "renderShareItems",
                                value: function () {
                                    var t = $(
                                            '#modal_share_items [data-bb-value="share-result"]'
                                        ),
                                        e = $(
                                            '#modal_share_items select[data-bb-value="share-type"]'
                                        ).val();
                                    t.val("");
                                    var i = [];
                                    o.M.each(
                                        o.M.getSelectedItems(),
                                        function (t) {
                                            switch (e) {
                                                case "html":
                                                    i.push(
                                                        "image" === t.type
                                                            ? '<img src="'
                                                                  .concat(
                                                                      t.full_url,
                                                                      '" alt="'
                                                                  )
                                                                  .concat(
                                                                      t.alt,
                                                                      '" />'
                                                                  )
                                                            : '<a href="'
                                                                  .concat(
                                                                      t.full_url,
                                                                      '" target="_blank">'
                                                                  )
                                                                  .concat(
                                                                      t.alt,
                                                                      "</a>"
                                                                  )
                                                    );
                                                    break;
                                                case "markdown":
                                                    i.push(
                                                        ("image" === t.type
                                                            ? "!"
                                                            : "") +
                                                            "["
                                                                .concat(
                                                                    t.alt,
                                                                    "]("
                                                                )
                                                                .concat(
                                                                    t.full_url,
                                                                    ")"
                                                                )
                                                    );
                                                    break;
                                                case "indirect_url":
                                                    i.push(t.indirect_url);
                                                    break;
                                                default:
                                                    i.push(t.full_url);
                                            }
                                        }
                                    ),
                                        t.val(i.join("\n"));
                                },
                            },
                            {
                                key: "renderActions",
                                value: function () {
                                    var t = o.M.getSelectedFolder().length > 0,
                                        e = $("#rv_action_item").html(),
                                        i = 0,
                                        n = $(
                                            ".rv-dropdown-actions .dropdown-menu"
                                        );
                                    n.empty();
                                    var a = $.extend(
                                        {},
                                        !0,
                                        o.M.getConfigs().actions_list
                                    );
                                    if (t) {
                                        var r = [
                                            "preview",
                                            "crop",
                                            "alt_text",
                                            "copy_link",
                                            "copy_direct_link",
                                            "share",
                                        ];
                                        (a.basic = o.M.arrayReject(
                                            a.basic,
                                            function (t) {
                                                return r.includes(t.action);
                                            }
                                        )),
                                            o.M.hasPermission(
                                                "folders.create"
                                            ) ||
                                                (a.file = o.M.arrayReject(
                                                    a.file,
                                                    function (t) {
                                                        return (
                                                            "make_copy" ===
                                                            t.action
                                                        );
                                                    }
                                                )),
                                            o.M.hasPermission("folders.edit") ||
                                                ((a.file = o.M.arrayReject(
                                                    a.file,
                                                    function (t) {
                                                        return o.M.inArray(
                                                            ["rename"],
                                                            t.action
                                                        );
                                                    }
                                                )),
                                                (a.user = o.M.arrayReject(
                                                    a.user,
                                                    function (t) {
                                                        return o.M.inArray(
                                                            ["rename"],
                                                            t.action
                                                        );
                                                    }
                                                ))),
                                            o.M.hasPermission(
                                                "folders.trash"
                                            ) ||
                                                (a.other = o.M.arrayReject(
                                                    a.other,
                                                    function (t) {
                                                        return o.M.inArray(
                                                            [
                                                                "trash",
                                                                "restore",
                                                            ],
                                                            t.action
                                                        );
                                                    }
                                                )),
                                            o.M.hasPermission(
                                                "folders.destroy"
                                            ) ||
                                                (a.other = o.M.arrayReject(
                                                    a.other,
                                                    function (t) {
                                                        return o.M.inArray(
                                                            ["delete"],
                                                            t.action
                                                        );
                                                    }
                                                )),
                                            o.M.hasPermission(
                                                "folders.favorite"
                                            ) ||
                                                (a.other = o.M.arrayReject(
                                                    a.other,
                                                    function (t) {
                                                        return o.M.inArray(
                                                            [
                                                                "favorite",
                                                                "remove_favorite",
                                                            ],
                                                            t.action
                                                        );
                                                    }
                                                ));
                                    }
                                    var s = o.M.getSelectedFiles();
                                    o.M.arrayFilter(s, function (t) {
                                        return t.preview_url;
                                    }).length ||
                                        (a.basic = o.M.arrayReject(
                                            a.basic,
                                            function (t) {
                                                return "preview" === t.action;
                                            }
                                        )),
                                        o.M.arrayFilter(s, function (t) {
                                            return "image" === t.type;
                                        }).length ||
                                            ((a.basic = o.M.arrayReject(
                                                a.basic,
                                                function (t) {
                                                    return "crop" === t.action;
                                                }
                                            )),
                                            (a.file = o.M.arrayReject(
                                                a.file,
                                                function (t) {
                                                    return (
                                                        "alt_text" === t.action
                                                    );
                                                }
                                            ))),
                                        s.length > 0 &&
                                            (o.M.hasPermission(
                                                "files.create"
                                            ) ||
                                                (a.file = o.M.arrayReject(
                                                    a.file,
                                                    function (t) {
                                                        return (
                                                            "make_copy" ===
                                                            t.action
                                                        );
                                                    }
                                                )),
                                            o.M.hasPermission("files.edit") ||
                                                (a.file = o.M.arrayReject(
                                                    a.file,
                                                    function (t) {
                                                        return o.M.inArray(
                                                            ["rename"],
                                                            t.action
                                                        );
                                                    }
                                                )),
                                            o.M.hasPermission("files.trash") ||
                                                (a.other = o.M.arrayReject(
                                                    a.other,
                                                    function (t) {
                                                        return o.M.inArray(
                                                            [
                                                                "trash",
                                                                "restore",
                                                            ],
                                                            t.action
                                                        );
                                                    }
                                                )),
                                            o.M.hasPermission(
                                                "files.destroy"
                                            ) ||
                                                (a.other = o.M.arrayReject(
                                                    a.other,
                                                    function (t) {
                                                        return o.M.inArray(
                                                            ["delete"],
                                                            t.action
                                                        );
                                                    }
                                                )),
                                            o.M.hasPermission(
                                                "files.favorite"
                                            ) ||
                                                (a.other = o.M.arrayReject(
                                                    a.other,
                                                    function (t) {
                                                        return o.M.inArray(
                                                            [
                                                                "favorite",
                                                                "remove_favorite",
                                                            ],
                                                            t.action
                                                        );
                                                    }
                                                )),
                                            s.length > 1 &&
                                                (a.basic = o.M.arrayReject(
                                                    a.basic,
                                                    function (t) {
                                                        return (
                                                            "crop" === t.action
                                                        );
                                                    }
                                                ))),
                                        (!o.M.hasPermission("folders.edit") ||
                                            s.length > 0) &&
                                            (a.other = o.M.arrayReject(
                                                a.other,
                                                function (t) {
                                                    return o.M.inArray(
                                                        ["properties"],
                                                        t.action
                                                    );
                                                }
                                            )),
                                        o.M.each(a, function (t, a) {
                                            o.M.each(t, function (t, r) {
                                                var s = !1;
                                                switch (
                                                    o.M.getRequestParams()
                                                        .view_in
                                                ) {
                                                    case "all_media":
                                                        o.M.inArray(
                                                            [
                                                                "remove_favorite",
                                                                "delete",
                                                                "restore",
                                                            ],
                                                            t.action
                                                        ) && (s = !0);
                                                        break;
                                                    case "recent":
                                                        o.M.inArray(
                                                            [
                                                                "remove_favorite",
                                                                "delete",
                                                                "restore",
                                                                "make_copy",
                                                            ],
                                                            t.action
                                                        ) && (s = !0);
                                                        break;
                                                    case "favorites":
                                                        o.M.inArray(
                                                            [
                                                                "favorite",
                                                                "delete",
                                                                "restore",
                                                                "make_copy",
                                                            ],
                                                            t.action
                                                        ) && (s = !0);
                                                        break;
                                                    case "trash":
                                                        o.M.inArray(
                                                            [
                                                                "preview",
                                                                "delete",
                                                                "restore",
                                                                "rename",
                                                                "download",
                                                            ],
                                                            t.action
                                                        ) || (s = !0);
                                                }
                                                if (!s) {
                                                    var h = e
                                                        .replace(
                                                            /__action__/gi,
                                                            t.action || ""
                                                        )
                                                        .replace(
                                                            '<i class="__icon__ dropdown-item-icon dropdown-item-icon"></i>',
                                                            '<span class="icon-tabler-wrapper dropdown-item-icon">__icon__</span>'
                                                        )
                                                        .replace(
                                                            "__icon__",
                                                            '<span class="icon-tabler-wrapper dropdown-item-icon">__icon__</span>'
                                                        )
                                                        .replace(
                                                            "__icon__",
                                                            t.icon || ""
                                                        )
                                                        .replace(
                                                            /__name__/gi,
                                                            o.M.trans(
                                                                "actions_list."
                                                                    .concat(
                                                                        a,
                                                                        "."
                                                                    )
                                                                    .concat(
                                                                        t.action
                                                                    )
                                                            ) || t.name
                                                        );
                                                    t.icon &&
                                                        (h = h.replace(
                                                            "media-icon",
                                                            "media-icon dropdown-item-icon"
                                                        )),
                                                        !r &&
                                                            i &&
                                                            (h =
                                                                '<li role="separator" class="divider"></li>'.concat(
                                                                    h
                                                                )),
                                                        n.append(h);
                                                }
                                            }),
                                                t.length > 0 && i++;
                                        });
                                },
                            },
                            {
                                key: "handleDownload",
                                value: function (t) {
                                    var e = $(".media-download-popup");
                                    e.show(),
                                        $httpClient
                                            .make()
                                            .withResponseType("blob")
                                            .post(RV_MEDIA_URL.download, {
                                                selected: t,
                                            })
                                            .then(function (t) {
                                                var e = (
                                                        t.headers[
                                                            "content-disposition"
                                                        ] || ""
                                                    )
                                                        .split("filename=")[1]
                                                        .split(";")[0],
                                                    i = URL.createObjectURL(
                                                        t.data
                                                    ),
                                                    n =
                                                        document.createElement(
                                                            "a"
                                                        );
                                                (n.href = i),
                                                    (n.download = e),
                                                    document.body.appendChild(
                                                        n
                                                    ),
                                                    n.click(),
                                                    n.remove(),
                                                    URL.revokeObjectURL(i);
                                            })
                                            .finally(function () {
                                                e.hide(), clearTimeout(null);
                                            });
                                },
                            },
                        ]),
                        i && u(e.prototype, i),
                        n && u(e, n),
                        Object.defineProperty(e, "prototype", { writable: !1 }),
                        e
                    );
                    var e, i, n, h, l;
                })();
            },
            27: (t, e, i) => {
                "use strict";
                i.d(e, { K: () => h });
                var n = i(8758),
                    a = i(418);
                function r(t) {
                    return (
                        (r =
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
                        r(t)
                    );
                }
                function o(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, s(n.key), n);
                    }
                }
                function s(t) {
                    var e = (function (t, e) {
                        if ("object" != r(t) || !t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != r(n)) return n;
                            throw new TypeError(
                                "@@toPrimitive must return a primitive value."
                            );
                        }
                        return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == r(e) ? e : e + "";
                }
                var h = (function () {
                    function t() {
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                    }
                    return (
                        (e = t),
                        (r = [
                            {
                                key: "initContext",
                                value: function () {
                                    jQuery().contextMenu &&
                                        ($.contextMenu({
                                            selector:
                                                '.js-context-menu[data-context="file"]',
                                            build: function () {
                                                return {
                                                    items: t._fileContextMenu(),
                                                };
                                            },
                                        }),
                                        $.contextMenu({
                                            selector:
                                                '.js-context-menu[data-context="folder"]',
                                            build: function () {
                                                return {
                                                    items: t._folderContextMenu(),
                                                };
                                            },
                                        }));
                                },
                            },
                            {
                                key: "_fileContextMenu",
                                value: function () {
                                    var t = {
                                        preview: {
                                            name: "Preview",
                                            icon: function (t, e, i, n) {
                                                return (
                                                    e.html(
                                                        '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>\n                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>\n                    </svg> '.concat(
                                                            n.name
                                                        )
                                                    ),
                                                    "context-menu-icon-updated"
                                                );
                                            },
                                            callback: function () {
                                                n.d.handlePreview();
                                            },
                                        },
                                    };
                                    a.M.each(
                                        a.M.getConfigs().actions_list,
                                        function (e, i) {
                                            a.M.each(e, function (e) {
                                                t[e.action] = {
                                                    name: e.name,
                                                    icon: function (
                                                        t,
                                                        n,
                                                        r,
                                                        o
                                                    ) {
                                                        return (
                                                            n.html(
                                                                ""
                                                                    .concat(
                                                                        e.icon,
                                                                        " "
                                                                    )
                                                                    .concat(
                                                                        a.M.trans(
                                                                            "actions_list."
                                                                                .concat(
                                                                                    i,
                                                                                    "."
                                                                                )
                                                                                .concat(
                                                                                    e.action
                                                                                )
                                                                        ) ||
                                                                            o.name
                                                                    )
                                                            ),
                                                            "context-menu-icon-updated"
                                                        );
                                                    },
                                                    callback: function () {
                                                        $(
                                                            '.js-files-action[data-action="'.concat(
                                                                e.action,
                                                                '"]'
                                                            )
                                                        ).trigger("click");
                                                    },
                                                };
                                            });
                                        }
                                    );
                                    var e = [];
                                    switch (a.M.getRequestParams().view_in) {
                                        case "all_media":
                                            e = [
                                                "remove_favorite",
                                                "delete",
                                                "restore",
                                            ];
                                            break;
                                        case "recent":
                                            e = [
                                                "remove_favorite",
                                                "delete",
                                                "restore",
                                                "make_copy",
                                            ];
                                            break;
                                        case "favorites":
                                            e = [
                                                "favorite",
                                                "delete",
                                                "restore",
                                                "make_copy",
                                            ];
                                            break;
                                        case "trash":
                                            t = {
                                                preview: t.preview,
                                                rename: t.rename,
                                                download: t.download,
                                                delete: t.delete,
                                                restore: t.restore,
                                            };
                                    }
                                    a.M.each(e, function (e) {
                                        t[e] = void 0;
                                    }),
                                        a.M.getSelectedFolder().length > 0 &&
                                            ((t.preview = void 0),
                                            (t.crop = void 0),
                                            (t.copy_link = void 0),
                                            (t.copy_indirect_link = void 0),
                                            (t.share = void 0),
                                            (t.alt_text = void 0),
                                            a.M.hasPermission(
                                                "folders.create"
                                            ) || (t.make_copy = void 0),
                                            a.M.hasPermission("folders.edit") ||
                                                (t.rename = void 0),
                                            a.M.hasPermission(
                                                "folders.trash"
                                            ) ||
                                                ((t.trash = void 0),
                                                (t.restore = void 0)),
                                            a.M.hasPermission(
                                                "folders.destroy"
                                            ) || (t.delete = void 0),
                                            a.M.hasPermission(
                                                "folders.favorite"
                                            ) ||
                                                ((t.favorite = void 0),
                                                (t.remove_favorite = void 0)));
                                    var i = a.M.getSelectedFiles();
                                    return (
                                        i.length > 0 &&
                                            (a.M.hasPermission(
                                                "files.create"
                                            ) || (t.make_copy = void 0),
                                            a.M.hasPermission("files.edit") ||
                                                (t.rename = void 0),
                                            a.M.hasPermission("files.trash") ||
                                                ((t.trash = void 0),
                                                (t.restore = void 0)),
                                            a.M.hasPermission(
                                                "files.destroy"
                                            ) || (t.delete = void 0),
                                            a.M.hasPermission(
                                                "files.favorite"
                                            ) ||
                                                ((t.favorite = void 0),
                                                (t.remove_favorite = void 0)),
                                            i.length > 1 && (t.crop = void 0),
                                            (t.properties = void 0)),
                                        a.M.arrayFilter(i, function (t) {
                                            return t.preview_url;
                                        }).length || (t.preview = void 0),
                                        a.M.arrayFilter(i, function (t) {
                                            return "image" === t.type;
                                        }).length ||
                                            ((t.crop = void 0),
                                            (t.alt_text = void 0)),
                                        a.M.arrayFilter(i, function (t) {
                                            return t.full_url;
                                        }).length || (t.copy_link = void 0),
                                        t
                                    );
                                },
                            },
                            {
                                key: "_folderContextMenu",
                                value: function () {
                                    var e = t._fileContextMenu();
                                    return (
                                        (e.preview = void 0),
                                        (e.copy_link = void 0),
                                        e
                                    );
                                },
                            },
                            {
                                key: "destroyContext",
                                value: function () {
                                    jQuery().contextMenu &&
                                        $.contextMenu("destroy");
                                },
                            },
                        ]),
                        (i = null) && o(e.prototype, i),
                        r && o(e, r),
                        Object.defineProperty(e, "prototype", { writable: !1 }),
                        e
                    );
                    var e, i, r;
                })();
            },
            1994: (t, e, i) => {
                "use strict";
                function n(t) {
                    return (
                        (n =
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
                        n(t)
                    );
                }
                function a(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, r(n.key), n);
                    }
                }
                function r(t) {
                    var e = (function (t, e) {
                        if ("object" != n(t) || !t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var a = i.call(t, e || "default");
                            if ("object" != n(a)) return a;
                            throw new TypeError(
                                "@@toPrimitive must return a primitive value."
                            );
                        }
                        return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == n(e) ? e : e + "";
                }
                i.d(e, { b: () => o });
                var o = (function () {
                    return (
                        (t = function t() {
                            !(function (t, e) {
                                if (!(t instanceof e))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, t);
                        }),
                        (i = [
                            {
                                key: "showMessage",
                                value: function (t, e) {
                                    Botble.showNotice(t, e);
                                },
                            },
                        ]),
                        (e = null) && a(t.prototype, e),
                        i && a(t, i),
                        Object.defineProperty(t, "prototype", { writable: !1 }),
                        t
                    );
                    var t, e, i;
                })();
            },
            5643: function (t) {
                /*!
                 * Cropper.js v1.6.2
                 * https://fengyuanchen.github.io/cropperjs
                 *
                 * Copyright 2015-present Chen Fengyuan
                 * Released under the MIT license
                 *
                 * Date: 2024-04-21T07:43:05.335Z
                 */
                t.exports = (function () {
                    "use strict";
                    function t(t, e) {
                        var i = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(t);
                            e &&
                                (n = n.filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(
                                        t,
                                        e
                                    ).enumerable;
                                })),
                                i.push.apply(i, n);
                        }
                        return i;
                    }
                    function e(e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var n = null != arguments[i] ? arguments[i] : {};
                            i % 2
                                ? t(Object(n), !0).forEach(function (t) {
                                      h(e, t, n[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                      e,
                                      Object.getOwnPropertyDescriptors(n)
                                  )
                                : t(Object(n)).forEach(function (t) {
                                      Object.defineProperty(
                                          e,
                                          t,
                                          Object.getOwnPropertyDescriptor(n, t)
                                      );
                                  });
                        }
                        return e;
                    }
                    function i(t, e) {
                        if ("object" != typeof t || !t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError(
                                "@@toPrimitive must return a primitive value."
                            );
                        }
                        return ("string" === e ? String : Number)(t);
                    }
                    function n(t) {
                        var e = i(t, "string");
                        return "symbol" == typeof e ? e : e + "";
                    }
                    function a(t) {
                        return (
                            (a =
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
                            a(t)
                        );
                    }
                    function r(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    }
                    function o(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var a = e[i];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(t, n(a.key), a);
                        }
                    }
                    function s(t, e, i) {
                        return (
                            e && o(t.prototype, e),
                            i && o(t, i),
                            Object.defineProperty(t, "prototype", {
                                writable: !1,
                            }),
                            t
                        );
                    }
                    function h(t, e, i) {
                        return (
                            (e = n(e)) in t
                                ? Object.defineProperty(t, e, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (t[e] = i),
                            t
                        );
                    }
                    function c(t) {
                        return l(t) || d(t) || u(t) || f();
                    }
                    function l(t) {
                        if (Array.isArray(t)) return p(t);
                    }
                    function d(t) {
                        if (
                            ("undefined" != typeof Symbol &&
                                null != t[Symbol.iterator]) ||
                            null != t["@@iterator"]
                        )
                            return Array.from(t);
                    }
                    function u(t, e) {
                        if (t) {
                            if ("string" == typeof t) return p(t, e);
                            var i = Object.prototype.toString
                                .call(t)
                                .slice(8, -1);
                            return (
                                "Object" === i &&
                                    t.constructor &&
                                    (i = t.constructor.name),
                                "Map" === i || "Set" === i
                                    ? Array.from(t)
                                    : "Arguments" === i ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          i
                                      )
                                    ? p(t, e)
                                    : void 0
                            );
                        }
                    }
                    function p(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var i = 0, n = new Array(e); i < e; i++)
                            n[i] = t[i];
                        return n;
                    }
                    function f() {
                        throw new TypeError(
                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                    }
                    var m =
                            "undefined" != typeof window &&
                            void 0 !== window.document,
                        v = m ? window : {},
                        g =
                            !(!m || !v.document.documentElement) &&
                            "ontouchstart" in v.document.documentElement,
                        w = !!m && "PointerEvent" in v,
                        y = "cropper",
                        b = "all",
                        M = "crop",
                        x = "move",
                        k = "zoom",
                        _ = "e",
                        C = "w",
                        j = "s",
                        D = "n",
                        E = "ne",
                        O = "nw",
                        S = "se",
                        P = "sw",
                        R = "".concat(y, "-crop"),
                        B = "".concat(y, "-disabled"),
                        L = "".concat(y, "-hidden"),
                        T = "".concat(y, "-hide"),
                        A = "".concat(y, "-invisible"),
                        N = "".concat(y, "-modal"),
                        H = "".concat(y, "-move"),
                        $ = "".concat(y, "Action"),
                        z = "".concat(y, "Preview"),
                        I = "crop",
                        W = "move",
                        Y = "none",
                        X = "crop",
                        F = "cropend",
                        U = "cropmove",
                        q = "cropstart",
                        G = "dblclick",
                        V = g ? "touchstart" : "mousedown",
                        K = g ? "touchmove" : "mousemove",
                        Q = g ? "touchend touchcancel" : "mouseup",
                        J = w ? "pointerdown" : V,
                        Z = w ? "pointermove" : K,
                        tt = w ? "pointerup pointercancel" : Q,
                        et = "ready",
                        it = "resize",
                        nt = "wheel",
                        at = "zoom",
                        rt = "image/jpeg",
                        ot = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
                        st = /^data:/,
                        ht = /^data:image\/jpeg;base64,/,
                        ct = /^img|canvas$/i,
                        lt = 200,
                        dt = 100,
                        ut = {
                            viewMode: 0,
                            dragMode: I,
                            initialAspectRatio: NaN,
                            aspectRatio: NaN,
                            data: null,
                            preview: "",
                            responsive: !0,
                            restore: !0,
                            checkCrossOrigin: !0,
                            checkOrientation: !0,
                            modal: !0,
                            guides: !0,
                            center: !0,
                            highlight: !0,
                            background: !0,
                            autoCrop: !0,
                            autoCropArea: 0.8,
                            movable: !0,
                            rotatable: !0,
                            scalable: !0,
                            zoomable: !0,
                            zoomOnTouch: !0,
                            zoomOnWheel: !0,
                            wheelZoomRatio: 0.1,
                            cropBoxMovable: !0,
                            cropBoxResizable: !0,
                            toggleDragModeOnDblclick: !0,
                            minCanvasWidth: 0,
                            minCanvasHeight: 0,
                            minCropBoxWidth: 0,
                            minCropBoxHeight: 0,
                            minContainerWidth: lt,
                            minContainerHeight: dt,
                            ready: null,
                            cropstart: null,
                            cropmove: null,
                            cropend: null,
                            crop: null,
                            zoom: null,
                        },
                        pt =
                            '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',
                        ft = Number.isNaN || v.isNaN;
                    function mt(t) {
                        return "number" == typeof t && !ft(t);
                    }
                    var vt = function (t) {
                        return t > 0 && t < 1 / 0;
                    };
                    function gt(t) {
                        return void 0 === t;
                    }
                    function wt(t) {
                        return "object" === a(t) && null !== t;
                    }
                    var yt = Object.prototype.hasOwnProperty;
                    function bt(t) {
                        if (!wt(t)) return !1;
                        try {
                            var e = t.constructor,
                                i = e.prototype;
                            return e && i && yt.call(i, "isPrototypeOf");
                        } catch (t) {
                            return !1;
                        }
                    }
                    function Mt(t) {
                        return "function" == typeof t;
                    }
                    var xt = Array.prototype.slice;
                    function kt(t) {
                        return Array.from ? Array.from(t) : xt.call(t);
                    }
                    function _t(t, e) {
                        return (
                            t &&
                                Mt(e) &&
                                (Array.isArray(t) || mt(t.length)
                                    ? kt(t).forEach(function (i, n) {
                                          e.call(t, i, n, t);
                                      })
                                    : wt(t) &&
                                      Object.keys(t).forEach(function (i) {
                                          e.call(t, t[i], i, t);
                                      })),
                            t
                        );
                    }
                    var Ct =
                            Object.assign ||
                            function (t) {
                                for (
                                    var e = arguments.length,
                                        i = new Array(e > 1 ? e - 1 : 0),
                                        n = 1;
                                    n < e;
                                    n++
                                )
                                    i[n - 1] = arguments[n];
                                return (
                                    wt(t) &&
                                        i.length > 0 &&
                                        i.forEach(function (e) {
                                            wt(e) &&
                                                Object.keys(e).forEach(
                                                    function (i) {
                                                        t[i] = e[i];
                                                    }
                                                );
                                        }),
                                    t
                                );
                            },
                        jt = /\.\d*(?:0|9){12}\d*$/;
                    function Dt(t) {
                        var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 1e11;
                        return jt.test(t) ? Math.round(t * e) / e : t;
                    }
                    var Et = /^width|height|left|top|marginLeft|marginTop$/;
                    function Ot(t, e) {
                        var i = t.style;
                        _t(e, function (t, e) {
                            Et.test(e) && mt(t) && (t = "".concat(t, "px")),
                                (i[e] = t);
                        });
                    }
                    function St(t, e) {
                        return t.classList
                            ? t.classList.contains(e)
                            : t.className.indexOf(e) > -1;
                    }
                    function Pt(t, e) {
                        if (e)
                            if (mt(t.length))
                                _t(t, function (t) {
                                    Pt(t, e);
                                });
                            else if (t.classList) t.classList.add(e);
                            else {
                                var i = t.className.trim();
                                i
                                    ? i.indexOf(e) < 0 &&
                                      (t.className = ""
                                          .concat(i, " ")
                                          .concat(e))
                                    : (t.className = e);
                            }
                    }
                    function Rt(t, e) {
                        e &&
                            (mt(t.length)
                                ? _t(t, function (t) {
                                      Rt(t, e);
                                  })
                                : t.classList
                                ? t.classList.remove(e)
                                : t.className.indexOf(e) >= 0 &&
                                  (t.className = t.className.replace(e, "")));
                    }
                    function Bt(t, e, i) {
                        e &&
                            (mt(t.length)
                                ? _t(t, function (t) {
                                      Bt(t, e, i);
                                  })
                                : i
                                ? Pt(t, e)
                                : Rt(t, e));
                    }
                    var Lt = /([a-z\d])([A-Z])/g;
                    function Tt(t) {
                        return t.replace(Lt, "$1-$2").toLowerCase();
                    }
                    function At(t, e) {
                        return wt(t[e])
                            ? t[e]
                            : t.dataset
                            ? t.dataset[e]
                            : t.getAttribute("data-".concat(Tt(e)));
                    }
                    function Nt(t, e, i) {
                        wt(i)
                            ? (t[e] = i)
                            : t.dataset
                            ? (t.dataset[e] = i)
                            : t.setAttribute("data-".concat(Tt(e)), i);
                    }
                    function Ht(t, e) {
                        if (wt(t[e]))
                            try {
                                delete t[e];
                            } catch (i) {
                                t[e] = void 0;
                            }
                        else if (t.dataset)
                            try {
                                delete t.dataset[e];
                            } catch (i) {
                                t.dataset[e] = void 0;
                            }
                        else t.removeAttribute("data-".concat(Tt(e)));
                    }
                    var $t = /\s\s*/,
                        zt = (function () {
                            var t = !1;
                            if (m) {
                                var e = !1,
                                    i = function () {},
                                    n = Object.defineProperty({}, "once", {
                                        get: function () {
                                            return (t = !0), e;
                                        },
                                        set: function (t) {
                                            e = t;
                                        },
                                    });
                                v.addEventListener("test", i, n),
                                    v.removeEventListener("test", i, n);
                            }
                            return t;
                        })();
                    function It(t, e, i) {
                        var n =
                                arguments.length > 3 && void 0 !== arguments[3]
                                    ? arguments[3]
                                    : {},
                            a = i;
                        e.trim()
                            .split($t)
                            .forEach(function (e) {
                                if (!zt) {
                                    var r = t.listeners;
                                    r &&
                                        r[e] &&
                                        r[e][i] &&
                                        ((a = r[e][i]),
                                        delete r[e][i],
                                        0 === Object.keys(r[e]).length &&
                                            delete r[e],
                                        0 === Object.keys(r).length &&
                                            delete t.listeners);
                                }
                                t.removeEventListener(e, a, n);
                            });
                    }
                    function Wt(t, e, i) {
                        var n =
                                arguments.length > 3 && void 0 !== arguments[3]
                                    ? arguments[3]
                                    : {},
                            a = i;
                        e.trim()
                            .split($t)
                            .forEach(function (e) {
                                if (n.once && !zt) {
                                    var r = t.listeners,
                                        o = void 0 === r ? {} : r;
                                    (a = function () {
                                        delete o[e][i],
                                            t.removeEventListener(e, a, n);
                                        for (
                                            var r = arguments.length,
                                                s = new Array(r),
                                                h = 0;
                                            h < r;
                                            h++
                                        )
                                            s[h] = arguments[h];
                                        i.apply(t, s);
                                    }),
                                        o[e] || (o[e] = {}),
                                        o[e][i] &&
                                            t.removeEventListener(
                                                e,
                                                o[e][i],
                                                n
                                            ),
                                        (o[e][i] = a),
                                        (t.listeners = o);
                                }
                                t.addEventListener(e, a, n);
                            });
                    }
                    function Yt(t, e, i) {
                        var n;
                        return (
                            Mt(Event) && Mt(CustomEvent)
                                ? (n = new CustomEvent(e, {
                                      detail: i,
                                      bubbles: !0,
                                      cancelable: !0,
                                  }))
                                : (n =
                                      document.createEvent(
                                          "CustomEvent"
                                      )).initCustomEvent(e, !0, !0, i),
                            t.dispatchEvent(n)
                        );
                    }
                    function Xt(t) {
                        var e = t.getBoundingClientRect();
                        return {
                            left:
                                e.left +
                                (window.pageXOffset -
                                    document.documentElement.clientLeft),
                            top:
                                e.top +
                                (window.pageYOffset -
                                    document.documentElement.clientTop),
                        };
                    }
                    var Ft = v.location,
                        Ut = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
                    function qt(t) {
                        var e = t.match(Ut);
                        return (
                            null !== e &&
                            (e[1] !== Ft.protocol ||
                                e[2] !== Ft.hostname ||
                                e[3] !== Ft.port)
                        );
                    }
                    function Gt(t) {
                        var e = "timestamp=".concat(new Date().getTime());
                        return t + (-1 === t.indexOf("?") ? "?" : "&") + e;
                    }
                    function Vt(t) {
                        var e = t.rotate,
                            i = t.scaleX,
                            n = t.scaleY,
                            a = t.translateX,
                            r = t.translateY,
                            o = [];
                        mt(a) &&
                            0 !== a &&
                            o.push("translateX(".concat(a, "px)")),
                            mt(r) &&
                                0 !== r &&
                                o.push("translateY(".concat(r, "px)")),
                            mt(e) &&
                                0 !== e &&
                                o.push("rotate(".concat(e, "deg)")),
                            mt(i) &&
                                1 !== i &&
                                o.push("scaleX(".concat(i, ")")),
                            mt(n) &&
                                1 !== n &&
                                o.push("scaleY(".concat(n, ")"));
                        var s = o.length ? o.join(" ") : "none";
                        return {
                            WebkitTransform: s,
                            msTransform: s,
                            transform: s,
                        };
                    }
                    function Kt(t) {
                        var i = e({}, t),
                            n = 0;
                        return (
                            _t(t, function (t, e) {
                                delete i[e],
                                    _t(i, function (e) {
                                        var i = Math.abs(t.startX - e.startX),
                                            a = Math.abs(t.startY - e.startY),
                                            r = Math.abs(t.endX - e.endX),
                                            o = Math.abs(t.endY - e.endY),
                                            s = Math.sqrt(i * i + a * a),
                                            h =
                                                (Math.sqrt(r * r + o * o) - s) /
                                                s;
                                        Math.abs(h) > Math.abs(n) && (n = h);
                                    });
                            }),
                            n
                        );
                    }
                    function Qt(t, i) {
                        var n = t.pageX,
                            a = t.pageY,
                            r = { endX: n, endY: a };
                        return i ? r : e({ startX: n, startY: a }, r);
                    }
                    function Jt(t) {
                        var e = 0,
                            i = 0,
                            n = 0;
                        return (
                            _t(t, function (t) {
                                var a = t.startX,
                                    r = t.startY;
                                (e += a), (i += r), (n += 1);
                            }),
                            { pageX: (e /= n), pageY: (i /= n) }
                        );
                    }
                    function Zt(t) {
                        var e = t.aspectRatio,
                            i = t.height,
                            n = t.width,
                            a =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : "contain",
                            r = vt(n),
                            o = vt(i);
                        if (r && o) {
                            var s = i * e;
                            ("contain" === a && s > n) ||
                            ("cover" === a && s < n)
                                ? (i = n / e)
                                : (n = i * e);
                        } else r ? (i = n / e) : o && (n = i * e);
                        return { width: n, height: i };
                    }
                    function te(t) {
                        var e = t.width,
                            i = t.height,
                            n = t.degree;
                        if (90 == (n = Math.abs(n) % 180))
                            return { width: i, height: e };
                        var a = ((n % 90) * Math.PI) / 180,
                            r = Math.sin(a),
                            o = Math.cos(a),
                            s = e * o + i * r,
                            h = e * r + i * o;
                        return n > 90
                            ? { width: h, height: s }
                            : { width: s, height: h };
                    }
                    function ee(t, e, i, n) {
                        var a = e.aspectRatio,
                            r = e.naturalWidth,
                            o = e.naturalHeight,
                            s = e.rotate,
                            h = void 0 === s ? 0 : s,
                            l = e.scaleX,
                            d = void 0 === l ? 1 : l,
                            u = e.scaleY,
                            p = void 0 === u ? 1 : u,
                            f = i.aspectRatio,
                            m = i.naturalWidth,
                            v = i.naturalHeight,
                            g = n.fillColor,
                            w = void 0 === g ? "transparent" : g,
                            y = n.imageSmoothingEnabled,
                            b = void 0 === y || y,
                            M = n.imageSmoothingQuality,
                            x = void 0 === M ? "low" : M,
                            k = n.maxWidth,
                            _ = void 0 === k ? 1 / 0 : k,
                            C = n.maxHeight,
                            j = void 0 === C ? 1 / 0 : C,
                            D = n.minWidth,
                            E = void 0 === D ? 0 : D,
                            O = n.minHeight,
                            S = void 0 === O ? 0 : O,
                            P = document.createElement("canvas"),
                            R = P.getContext("2d"),
                            B = Zt({ aspectRatio: f, width: _, height: j }),
                            L = Zt(
                                { aspectRatio: f, width: E, height: S },
                                "cover"
                            ),
                            T = Math.min(B.width, Math.max(L.width, m)),
                            A = Math.min(B.height, Math.max(L.height, v)),
                            N = Zt({ aspectRatio: a, width: _, height: j }),
                            H = Zt(
                                { aspectRatio: a, width: E, height: S },
                                "cover"
                            ),
                            $ = Math.min(N.width, Math.max(H.width, r)),
                            z = Math.min(N.height, Math.max(H.height, o)),
                            I = [-$ / 2, -z / 2, $, z];
                        return (
                            (P.width = Dt(T)),
                            (P.height = Dt(A)),
                            (R.fillStyle = w),
                            R.fillRect(0, 0, T, A),
                            R.save(),
                            R.translate(T / 2, A / 2),
                            R.rotate((h * Math.PI) / 180),
                            R.scale(d, p),
                            (R.imageSmoothingEnabled = b),
                            (R.imageSmoothingQuality = x),
                            R.drawImage.apply(
                                R,
                                [t].concat(
                                    c(
                                        I.map(function (t) {
                                            return Math.floor(Dt(t));
                                        })
                                    )
                                )
                            ),
                            R.restore(),
                            P
                        );
                    }
                    var ie = String.fromCharCode;
                    function ne(t, e, i) {
                        var n = "";
                        i += e;
                        for (var a = e; a < i; a += 1) n += ie(t.getUint8(a));
                        return n;
                    }
                    var ae = /^data:.*,/;
                    function re(t) {
                        var e = t.replace(ae, ""),
                            i = atob(e),
                            n = new ArrayBuffer(i.length),
                            a = new Uint8Array(n);
                        return (
                            _t(a, function (t, e) {
                                a[e] = i.charCodeAt(e);
                            }),
                            n
                        );
                    }
                    function oe(t, e) {
                        for (
                            var i = [], n = 8192, a = new Uint8Array(t);
                            a.length > 0;

                        )
                            i.push(ie.apply(null, kt(a.subarray(0, n)))),
                                (a = a.subarray(n));
                        return "data:"
                            .concat(e, ";base64,")
                            .concat(btoa(i.join("")));
                    }
                    function se(t) {
                        var e,
                            i = new DataView(t);
                        try {
                            var n, a, r;
                            if (255 === i.getUint8(0) && 216 === i.getUint8(1))
                                for (var o = i.byteLength, s = 2; s + 1 < o; ) {
                                    if (
                                        255 === i.getUint8(s) &&
                                        225 === i.getUint8(s + 1)
                                    ) {
                                        a = s;
                                        break;
                                    }
                                    s += 1;
                                }
                            if (a) {
                                var h = a + 10;
                                if ("Exif" === ne(i, a + 4, 4)) {
                                    var c = i.getUint16(h);
                                    if (
                                        ((n = 18761 === c) || 19789 === c) &&
                                        42 === i.getUint16(h + 2, n)
                                    ) {
                                        var l = i.getUint32(h + 4, n);
                                        l >= 8 && (r = h + l);
                                    }
                                }
                            }
                            if (r) {
                                var d,
                                    u,
                                    p = i.getUint16(r, n);
                                for (u = 0; u < p; u += 1)
                                    if (
                                        ((d = r + 12 * u + 2),
                                        274 === i.getUint16(d, n))
                                    ) {
                                        (d += 8),
                                            (e = i.getUint16(d, n)),
                                            i.setUint16(d, 1, n);
                                        break;
                                    }
                            }
                        } catch (t) {
                            e = 1;
                        }
                        return e;
                    }
                    function he(t) {
                        var e = 0,
                            i = 1,
                            n = 1;
                        switch (t) {
                            case 2:
                                i = -1;
                                break;
                            case 3:
                                e = -180;
                                break;
                            case 4:
                                n = -1;
                                break;
                            case 5:
                                (e = 90), (n = -1);
                                break;
                            case 6:
                                e = 90;
                                break;
                            case 7:
                                (e = 90), (i = -1);
                                break;
                            case 8:
                                e = -90;
                        }
                        return { rotate: e, scaleX: i, scaleY: n };
                    }
                    var ce = {
                            render: function () {
                                this.initContainer(),
                                    this.initCanvas(),
                                    this.initCropBox(),
                                    this.renderCanvas(),
                                    this.cropped && this.renderCropBox();
                            },
                            initContainer: function () {
                                var t = this.element,
                                    e = this.options,
                                    i = this.container,
                                    n = this.cropper,
                                    a = Number(e.minContainerWidth),
                                    r = Number(e.minContainerHeight);
                                Pt(n, L), Rt(t, L);
                                var o = {
                                    width: Math.max(
                                        i.offsetWidth,
                                        a >= 0 ? a : lt
                                    ),
                                    height: Math.max(
                                        i.offsetHeight,
                                        r >= 0 ? r : dt
                                    ),
                                };
                                (this.containerData = o),
                                    Ot(n, { width: o.width, height: o.height }),
                                    Pt(t, L),
                                    Rt(n, L);
                            },
                            initCanvas: function () {
                                var t = this.containerData,
                                    e = this.imageData,
                                    i = this.options.viewMode,
                                    n = Math.abs(e.rotate) % 180 == 90,
                                    a = n ? e.naturalHeight : e.naturalWidth,
                                    r = n ? e.naturalWidth : e.naturalHeight,
                                    o = a / r,
                                    s = t.width,
                                    h = t.height;
                                t.height * o > t.width
                                    ? 3 === i
                                        ? (s = t.height * o)
                                        : (h = t.width / o)
                                    : 3 === i
                                    ? (h = t.width / o)
                                    : (s = t.height * o);
                                var c = {
                                    aspectRatio: o,
                                    naturalWidth: a,
                                    naturalHeight: r,
                                    width: s,
                                    height: h,
                                };
                                (this.canvasData = c),
                                    (this.limited = 1 === i || 2 === i),
                                    this.limitCanvas(!0, !0),
                                    (c.width = Math.min(
                                        Math.max(c.width, c.minWidth),
                                        c.maxWidth
                                    )),
                                    (c.height = Math.min(
                                        Math.max(c.height, c.minHeight),
                                        c.maxHeight
                                    )),
                                    (c.left = (t.width - c.width) / 2),
                                    (c.top = (t.height - c.height) / 2),
                                    (c.oldLeft = c.left),
                                    (c.oldTop = c.top),
                                    (this.initialCanvasData = Ct({}, c));
                            },
                            limitCanvas: function (t, e) {
                                var i = this.options,
                                    n = this.containerData,
                                    a = this.canvasData,
                                    r = this.cropBoxData,
                                    o = i.viewMode,
                                    s = a.aspectRatio,
                                    h = this.cropped && r;
                                if (t) {
                                    var c = Number(i.minCanvasWidth) || 0,
                                        l = Number(i.minCanvasHeight) || 0;
                                    o > 1
                                        ? ((c = Math.max(c, n.width)),
                                          (l = Math.max(l, n.height)),
                                          3 === o &&
                                              (l * s > c
                                                  ? (c = l * s)
                                                  : (l = c / s)))
                                        : o > 0 &&
                                          (c
                                              ? (c = Math.max(
                                                    c,
                                                    h ? r.width : 0
                                                ))
                                              : l
                                              ? (l = Math.max(
                                                    l,
                                                    h ? r.height : 0
                                                ))
                                              : h &&
                                                ((c = r.width),
                                                (l = r.height) * s > c
                                                    ? (c = l * s)
                                                    : (l = c / s)));
                                    var d = Zt({
                                        aspectRatio: s,
                                        width: c,
                                        height: l,
                                    });
                                    (c = d.width),
                                        (l = d.height),
                                        (a.minWidth = c),
                                        (a.minHeight = l),
                                        (a.maxWidth = 1 / 0),
                                        (a.maxHeight = 1 / 0);
                                }
                                if (e)
                                    if (o > (h ? 0 : 1)) {
                                        var u = n.width - a.width,
                                            p = n.height - a.height;
                                        (a.minLeft = Math.min(0, u)),
                                            (a.minTop = Math.min(0, p)),
                                            (a.maxLeft = Math.max(0, u)),
                                            (a.maxTop = Math.max(0, p)),
                                            h &&
                                                this.limited &&
                                                ((a.minLeft = Math.min(
                                                    r.left,
                                                    r.left + (r.width - a.width)
                                                )),
                                                (a.minTop = Math.min(
                                                    r.top,
                                                    r.top +
                                                        (r.height - a.height)
                                                )),
                                                (a.maxLeft = r.left),
                                                (a.maxTop = r.top),
                                                2 === o &&
                                                    (a.width >= n.width &&
                                                        ((a.minLeft = Math.min(
                                                            0,
                                                            u
                                                        )),
                                                        (a.maxLeft = Math.max(
                                                            0,
                                                            u
                                                        ))),
                                                    a.height >= n.height &&
                                                        ((a.minTop = Math.min(
                                                            0,
                                                            p
                                                        )),
                                                        (a.maxTop = Math.max(
                                                            0,
                                                            p
                                                        )))));
                                    } else
                                        (a.minLeft = -a.width),
                                            (a.minTop = -a.height),
                                            (a.maxLeft = n.width),
                                            (a.maxTop = n.height);
                            },
                            renderCanvas: function (t, e) {
                                var i = this.canvasData,
                                    n = this.imageData;
                                if (e) {
                                    var a = te({
                                            width:
                                                n.naturalWidth *
                                                Math.abs(n.scaleX || 1),
                                            height:
                                                n.naturalHeight *
                                                Math.abs(n.scaleY || 1),
                                            degree: n.rotate || 0,
                                        }),
                                        r = a.width,
                                        o = a.height,
                                        s = i.width * (r / i.naturalWidth),
                                        h = i.height * (o / i.naturalHeight);
                                    (i.left -= (s - i.width) / 2),
                                        (i.top -= (h - i.height) / 2),
                                        (i.width = s),
                                        (i.height = h),
                                        (i.aspectRatio = r / o),
                                        (i.naturalWidth = r),
                                        (i.naturalHeight = o),
                                        this.limitCanvas(!0, !1);
                                }
                                (i.width > i.maxWidth ||
                                    i.width < i.minWidth) &&
                                    (i.left = i.oldLeft),
                                    (i.height > i.maxHeight ||
                                        i.height < i.minHeight) &&
                                        (i.top = i.oldTop),
                                    (i.width = Math.min(
                                        Math.max(i.width, i.minWidth),
                                        i.maxWidth
                                    )),
                                    (i.height = Math.min(
                                        Math.max(i.height, i.minHeight),
                                        i.maxHeight
                                    )),
                                    this.limitCanvas(!1, !0),
                                    (i.left = Math.min(
                                        Math.max(i.left, i.minLeft),
                                        i.maxLeft
                                    )),
                                    (i.top = Math.min(
                                        Math.max(i.top, i.minTop),
                                        i.maxTop
                                    )),
                                    (i.oldLeft = i.left),
                                    (i.oldTop = i.top),
                                    Ot(
                                        this.canvas,
                                        Ct(
                                            {
                                                width: i.width,
                                                height: i.height,
                                            },
                                            Vt({
                                                translateX: i.left,
                                                translateY: i.top,
                                            })
                                        )
                                    ),
                                    this.renderImage(t),
                                    this.cropped &&
                                        this.limited &&
                                        this.limitCropBox(!0, !0);
                            },
                            renderImage: function (t) {
                                var e = this.canvasData,
                                    i = this.imageData,
                                    n =
                                        i.naturalWidth *
                                        (e.width / e.naturalWidth),
                                    a =
                                        i.naturalHeight *
                                        (e.height / e.naturalHeight);
                                Ct(i, {
                                    width: n,
                                    height: a,
                                    left: (e.width - n) / 2,
                                    top: (e.height - a) / 2,
                                }),
                                    Ot(
                                        this.image,
                                        Ct(
                                            {
                                                width: i.width,
                                                height: i.height,
                                            },
                                            Vt(
                                                Ct(
                                                    {
                                                        translateX: i.left,
                                                        translateY: i.top,
                                                    },
                                                    i
                                                )
                                            )
                                        )
                                    ),
                                    t && this.output();
                            },
                            initCropBox: function () {
                                var t = this.options,
                                    e = this.canvasData,
                                    i = t.aspectRatio || t.initialAspectRatio,
                                    n = Number(t.autoCropArea) || 0.8,
                                    a = { width: e.width, height: e.height };
                                i &&
                                    (e.height * i > e.width
                                        ? (a.height = a.width / i)
                                        : (a.width = a.height * i)),
                                    (this.cropBoxData = a),
                                    this.limitCropBox(!0, !0),
                                    (a.width = Math.min(
                                        Math.max(a.width, a.minWidth),
                                        a.maxWidth
                                    )),
                                    (a.height = Math.min(
                                        Math.max(a.height, a.minHeight),
                                        a.maxHeight
                                    )),
                                    (a.width = Math.max(
                                        a.minWidth,
                                        a.width * n
                                    )),
                                    (a.height = Math.max(
                                        a.minHeight,
                                        a.height * n
                                    )),
                                    (a.left = e.left + (e.width - a.width) / 2),
                                    (a.top = e.top + (e.height - a.height) / 2),
                                    (a.oldLeft = a.left),
                                    (a.oldTop = a.top),
                                    (this.initialCropBoxData = Ct({}, a));
                            },
                            limitCropBox: function (t, e) {
                                var i = this.options,
                                    n = this.containerData,
                                    a = this.canvasData,
                                    r = this.cropBoxData,
                                    o = this.limited,
                                    s = i.aspectRatio;
                                if (t) {
                                    var h = Number(i.minCropBoxWidth) || 0,
                                        c = Number(i.minCropBoxHeight) || 0,
                                        l = o
                                            ? Math.min(
                                                  n.width,
                                                  a.width,
                                                  a.width + a.left,
                                                  n.width - a.left
                                              )
                                            : n.width,
                                        d = o
                                            ? Math.min(
                                                  n.height,
                                                  a.height,
                                                  a.height + a.top,
                                                  n.height - a.top
                                              )
                                            : n.height;
                                    (h = Math.min(h, n.width)),
                                        (c = Math.min(c, n.height)),
                                        s &&
                                            (h && c
                                                ? c * s > h
                                                    ? (c = h / s)
                                                    : (h = c * s)
                                                : h
                                                ? (c = h / s)
                                                : c && (h = c * s),
                                            d * s > l
                                                ? (d = l / s)
                                                : (l = d * s)),
                                        (r.minWidth = Math.min(h, l)),
                                        (r.minHeight = Math.min(c, d)),
                                        (r.maxWidth = l),
                                        (r.maxHeight = d);
                                }
                                e &&
                                    (o
                                        ? ((r.minLeft = Math.max(0, a.left)),
                                          (r.minTop = Math.max(0, a.top)),
                                          (r.maxLeft =
                                              Math.min(
                                                  n.width,
                                                  a.left + a.width
                                              ) - r.width),
                                          (r.maxTop =
                                              Math.min(
                                                  n.height,
                                                  a.top + a.height
                                              ) - r.height))
                                        : ((r.minLeft = 0),
                                          (r.minTop = 0),
                                          (r.maxLeft = n.width - r.width),
                                          (r.maxTop = n.height - r.height)));
                            },
                            renderCropBox: function () {
                                var t = this.options,
                                    e = this.containerData,
                                    i = this.cropBoxData;
                                (i.width > i.maxWidth ||
                                    i.width < i.minWidth) &&
                                    (i.left = i.oldLeft),
                                    (i.height > i.maxHeight ||
                                        i.height < i.minHeight) &&
                                        (i.top = i.oldTop),
                                    (i.width = Math.min(
                                        Math.max(i.width, i.minWidth),
                                        i.maxWidth
                                    )),
                                    (i.height = Math.min(
                                        Math.max(i.height, i.minHeight),
                                        i.maxHeight
                                    )),
                                    this.limitCropBox(!1, !0),
                                    (i.left = Math.min(
                                        Math.max(i.left, i.minLeft),
                                        i.maxLeft
                                    )),
                                    (i.top = Math.min(
                                        Math.max(i.top, i.minTop),
                                        i.maxTop
                                    )),
                                    (i.oldLeft = i.left),
                                    (i.oldTop = i.top),
                                    t.movable &&
                                        t.cropBoxMovable &&
                                        Nt(
                                            this.face,
                                            $,
                                            i.width >= e.width &&
                                                i.height >= e.height
                                                ? x
                                                : b
                                        ),
                                    Ot(
                                        this.cropBox,
                                        Ct(
                                            {
                                                width: i.width,
                                                height: i.height,
                                            },
                                            Vt({
                                                translateX: i.left,
                                                translateY: i.top,
                                            })
                                        )
                                    ),
                                    this.cropped &&
                                        this.limited &&
                                        this.limitCanvas(!0, !0),
                                    this.disabled || this.output();
                            },
                            output: function () {
                                this.preview(),
                                    Yt(this.element, X, this.getData());
                            },
                        },
                        le = {
                            initPreview: function () {
                                var t = this.element,
                                    e = this.crossOrigin,
                                    i = this.options.preview,
                                    n = e ? this.crossOriginUrl : this.url,
                                    a = t.alt || "The image to preview",
                                    r = document.createElement("img");
                                if (
                                    (e && (r.crossOrigin = e),
                                    (r.src = n),
                                    (r.alt = a),
                                    this.viewBox.appendChild(r),
                                    (this.viewBoxImage = r),
                                    i)
                                ) {
                                    var o = i;
                                    "string" == typeof i
                                        ? (o =
                                              t.ownerDocument.querySelectorAll(
                                                  i
                                              ))
                                        : i.querySelector && (o = [i]),
                                        (this.previews = o),
                                        _t(o, function (t) {
                                            var i =
                                                document.createElement("img");
                                            Nt(t, z, {
                                                width: t.offsetWidth,
                                                height: t.offsetHeight,
                                                html: t.innerHTML,
                                            }),
                                                e && (i.crossOrigin = e),
                                                (i.src = n),
                                                (i.alt = a),
                                                (i.style.cssText =
                                                    'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"'),
                                                (t.innerHTML = ""),
                                                t.appendChild(i);
                                        });
                                }
                            },
                            resetPreview: function () {
                                _t(this.previews, function (t) {
                                    var e = At(t, z);
                                    Ot(t, { width: e.width, height: e.height }),
                                        (t.innerHTML = e.html),
                                        Ht(t, z);
                                });
                            },
                            preview: function () {
                                var t = this.imageData,
                                    e = this.canvasData,
                                    i = this.cropBoxData,
                                    n = i.width,
                                    a = i.height,
                                    r = t.width,
                                    o = t.height,
                                    s = i.left - e.left - t.left,
                                    h = i.top - e.top - t.top;
                                this.cropped &&
                                    !this.disabled &&
                                    (Ot(
                                        this.viewBoxImage,
                                        Ct(
                                            { width: r, height: o },
                                            Vt(
                                                Ct(
                                                    {
                                                        translateX: -s,
                                                        translateY: -h,
                                                    },
                                                    t
                                                )
                                            )
                                        )
                                    ),
                                    _t(this.previews, function (e) {
                                        var i = At(e, z),
                                            c = i.width,
                                            l = i.height,
                                            d = c,
                                            u = l,
                                            p = 1;
                                        n && (u = a * (p = c / n)),
                                            a &&
                                                u > l &&
                                                ((d = n * (p = l / a)),
                                                (u = l)),
                                            Ot(e, { width: d, height: u }),
                                            Ot(
                                                e.getElementsByTagName(
                                                    "img"
                                                )[0],
                                                Ct(
                                                    {
                                                        width: r * p,
                                                        height: o * p,
                                                    },
                                                    Vt(
                                                        Ct(
                                                            {
                                                                translateX:
                                                                    -s * p,
                                                                translateY:
                                                                    -h * p,
                                                            },
                                                            t
                                                        )
                                                    )
                                                )
                                            );
                                    }));
                            },
                        },
                        de = {
                            bind: function () {
                                var t = this.element,
                                    e = this.options,
                                    i = this.cropper;
                                Mt(e.cropstart) && Wt(t, q, e.cropstart),
                                    Mt(e.cropmove) && Wt(t, U, e.cropmove),
                                    Mt(e.cropend) && Wt(t, F, e.cropend),
                                    Mt(e.crop) && Wt(t, X, e.crop),
                                    Mt(e.zoom) && Wt(t, at, e.zoom),
                                    Wt(
                                        i,
                                        J,
                                        (this.onCropStart =
                                            this.cropStart.bind(this))
                                    ),
                                    e.zoomable &&
                                        e.zoomOnWheel &&
                                        Wt(
                                            i,
                                            nt,
                                            (this.onWheel =
                                                this.wheel.bind(this)),
                                            { passive: !1, capture: !0 }
                                        ),
                                    e.toggleDragModeOnDblclick &&
                                        Wt(
                                            i,
                                            G,
                                            (this.onDblclick =
                                                this.dblclick.bind(this))
                                        ),
                                    Wt(
                                        t.ownerDocument,
                                        Z,
                                        (this.onCropMove =
                                            this.cropMove.bind(this))
                                    ),
                                    Wt(
                                        t.ownerDocument,
                                        tt,
                                        (this.onCropEnd =
                                            this.cropEnd.bind(this))
                                    ),
                                    e.responsive &&
                                        Wt(
                                            window,
                                            it,
                                            (this.onResize =
                                                this.resize.bind(this))
                                        );
                            },
                            unbind: function () {
                                var t = this.element,
                                    e = this.options,
                                    i = this.cropper;
                                Mt(e.cropstart) && It(t, q, e.cropstart),
                                    Mt(e.cropmove) && It(t, U, e.cropmove),
                                    Mt(e.cropend) && It(t, F, e.cropend),
                                    Mt(e.crop) && It(t, X, e.crop),
                                    Mt(e.zoom) && It(t, at, e.zoom),
                                    It(i, J, this.onCropStart),
                                    e.zoomable &&
                                        e.zoomOnWheel &&
                                        It(i, nt, this.onWheel, {
                                            passive: !1,
                                            capture: !0,
                                        }),
                                    e.toggleDragModeOnDblclick &&
                                        It(i, G, this.onDblclick),
                                    It(t.ownerDocument, Z, this.onCropMove),
                                    It(t.ownerDocument, tt, this.onCropEnd),
                                    e.responsive &&
                                        It(window, it, this.onResize);
                            },
                        },
                        ue = {
                            resize: function () {
                                if (!this.disabled) {
                                    var t,
                                        e,
                                        i = this.options,
                                        n = this.container,
                                        a = this.containerData,
                                        r = n.offsetWidth / a.width,
                                        o = n.offsetHeight / a.height,
                                        s =
                                            Math.abs(r - 1) > Math.abs(o - 1)
                                                ? r
                                                : o;
                                    1 !== s &&
                                        (i.restore &&
                                            ((t = this.getCanvasData()),
                                            (e = this.getCropBoxData())),
                                        this.render(),
                                        i.restore &&
                                            (this.setCanvasData(
                                                _t(t, function (e, i) {
                                                    t[i] = e * s;
                                                })
                                            ),
                                            this.setCropBoxData(
                                                _t(e, function (t, i) {
                                                    e[i] = t * s;
                                                })
                                            )));
                                }
                            },
                            dblclick: function () {
                                this.disabled ||
                                    this.options.dragMode === Y ||
                                    this.setDragMode(
                                        St(this.dragBox, R) ? W : I
                                    );
                            },
                            wheel: function (t) {
                                var e = this,
                                    i =
                                        Number(this.options.wheelZoomRatio) ||
                                        0.1,
                                    n = 1;
                                this.disabled ||
                                    (t.preventDefault(),
                                    this.wheeling ||
                                        ((this.wheeling = !0),
                                        setTimeout(function () {
                                            e.wheeling = !1;
                                        }, 50),
                                        t.deltaY
                                            ? (n = t.deltaY > 0 ? 1 : -1)
                                            : t.wheelDelta
                                            ? (n = -t.wheelDelta / 120)
                                            : t.detail &&
                                              (n = t.detail > 0 ? 1 : -1),
                                        this.zoom(-n * i, t)));
                            },
                            cropStart: function (t) {
                                var e = t.buttons,
                                    i = t.button;
                                if (
                                    !(
                                        this.disabled ||
                                        (("mousedown" === t.type ||
                                            ("pointerdown" === t.type &&
                                                "mouse" === t.pointerType)) &&
                                            ((mt(e) && 1 !== e) ||
                                                (mt(i) && 0 !== i) ||
                                                t.ctrlKey))
                                    )
                                ) {
                                    var n,
                                        a = this.options,
                                        r = this.pointers;
                                    t.changedTouches
                                        ? _t(t.changedTouches, function (t) {
                                              r[t.identifier] = Qt(t);
                                          })
                                        : (r[t.pointerId || 0] = Qt(t)),
                                        (n =
                                            Object.keys(r).length > 1 &&
                                            a.zoomable &&
                                            a.zoomOnTouch
                                                ? k
                                                : At(t.target, $)),
                                        ot.test(n) &&
                                            !1 !==
                                                Yt(this.element, q, {
                                                    originalEvent: t,
                                                    action: n,
                                                }) &&
                                            (t.preventDefault(),
                                            (this.action = n),
                                            (this.cropping = !1),
                                            n === M &&
                                                ((this.cropping = !0),
                                                Pt(this.dragBox, N)));
                                }
                            },
                            cropMove: function (t) {
                                var e = this.action;
                                if (!this.disabled && e) {
                                    var i = this.pointers;
                                    t.preventDefault(),
                                        !1 !==
                                            Yt(this.element, U, {
                                                originalEvent: t,
                                                action: e,
                                            }) &&
                                            (t.changedTouches
                                                ? _t(
                                                      t.changedTouches,
                                                      function (t) {
                                                          Ct(
                                                              i[t.identifier] ||
                                                                  {},
                                                              Qt(t, !0)
                                                          );
                                                      }
                                                  )
                                                : Ct(
                                                      i[t.pointerId || 0] || {},
                                                      Qt(t, !0)
                                                  ),
                                            this.change(t));
                                }
                            },
                            cropEnd: function (t) {
                                if (!this.disabled) {
                                    var e = this.action,
                                        i = this.pointers;
                                    t.changedTouches
                                        ? _t(t.changedTouches, function (t) {
                                              delete i[t.identifier];
                                          })
                                        : delete i[t.pointerId || 0],
                                        e &&
                                            (t.preventDefault(),
                                            Object.keys(i).length ||
                                                (this.action = ""),
                                            this.cropping &&
                                                ((this.cropping = !1),
                                                Bt(
                                                    this.dragBox,
                                                    N,
                                                    this.cropped &&
                                                        this.options.modal
                                                )),
                                            Yt(this.element, F, {
                                                originalEvent: t,
                                                action: e,
                                            }));
                                }
                            },
                        },
                        pe = {
                            change: function (t) {
                                var e,
                                    i = this.options,
                                    n = this.canvasData,
                                    a = this.containerData,
                                    r = this.cropBoxData,
                                    o = this.pointers,
                                    s = this.action,
                                    h = i.aspectRatio,
                                    c = r.left,
                                    l = r.top,
                                    d = r.width,
                                    u = r.height,
                                    p = c + d,
                                    f = l + u,
                                    m = 0,
                                    v = 0,
                                    g = a.width,
                                    w = a.height,
                                    y = !0;
                                !h && t.shiftKey && (h = d && u ? d / u : 1),
                                    this.limited &&
                                        ((m = r.minLeft),
                                        (v = r.minTop),
                                        (g =
                                            m +
                                            Math.min(
                                                a.width,
                                                n.width,
                                                n.left + n.width
                                            )),
                                        (w =
                                            v +
                                            Math.min(
                                                a.height,
                                                n.height,
                                                n.top + n.height
                                            )));
                                var R = o[Object.keys(o)[0]],
                                    B = {
                                        x: R.endX - R.startX,
                                        y: R.endY - R.startY,
                                    },
                                    T = function (t) {
                                        switch (t) {
                                            case _:
                                                p + B.x > g && (B.x = g - p);
                                                break;
                                            case C:
                                                c + B.x < m && (B.x = m - c);
                                                break;
                                            case D:
                                                l + B.y < v && (B.y = v - l);
                                                break;
                                            case j:
                                                f + B.y > w && (B.y = w - f);
                                        }
                                    };
                                switch (s) {
                                    case b:
                                        (c += B.x), (l += B.y);
                                        break;
                                    case _:
                                        if (
                                            B.x >= 0 &&
                                            (p >= g ||
                                                (h && (l <= v || f >= w)))
                                        ) {
                                            y = !1;
                                            break;
                                        }
                                        T(_),
                                            (d += B.x) < 0 &&
                                                ((s = C), (c -= d = -d)),
                                            h &&
                                                ((u = d / h),
                                                (l += (r.height - u) / 2));
                                        break;
                                    case D:
                                        if (
                                            B.y <= 0 &&
                                            (l <= v ||
                                                (h && (c <= m || p >= g)))
                                        ) {
                                            y = !1;
                                            break;
                                        }
                                        T(D),
                                            (u -= B.y),
                                            (l += B.y),
                                            u < 0 && ((s = j), (l -= u = -u)),
                                            h &&
                                                ((d = u * h),
                                                (c += (r.width - d) / 2));
                                        break;
                                    case C:
                                        if (
                                            B.x <= 0 &&
                                            (c <= m ||
                                                (h && (l <= v || f >= w)))
                                        ) {
                                            y = !1;
                                            break;
                                        }
                                        T(C),
                                            (d -= B.x),
                                            (c += B.x),
                                            d < 0 && ((s = _), (c -= d = -d)),
                                            h &&
                                                ((u = d / h),
                                                (l += (r.height - u) / 2));
                                        break;
                                    case j:
                                        if (
                                            B.y >= 0 &&
                                            (f >= w ||
                                                (h && (c <= m || p >= g)))
                                        ) {
                                            y = !1;
                                            break;
                                        }
                                        T(j),
                                            (u += B.y) < 0 &&
                                                ((s = D), (l -= u = -u)),
                                            h &&
                                                ((d = u * h),
                                                (c += (r.width - d) / 2));
                                        break;
                                    case E:
                                        if (h) {
                                            if (
                                                B.y <= 0 &&
                                                (l <= v || p >= g)
                                            ) {
                                                y = !1;
                                                break;
                                            }
                                            T(D),
                                                (u -= B.y),
                                                (l += B.y),
                                                (d = u * h);
                                        } else
                                            T(D),
                                                T(_),
                                                B.x >= 0
                                                    ? p < g
                                                        ? (d += B.x)
                                                        : B.y <= 0 &&
                                                          l <= v &&
                                                          (y = !1)
                                                    : (d += B.x),
                                                B.y <= 0
                                                    ? l > v &&
                                                      ((u -= B.y), (l += B.y))
                                                    : ((u -= B.y), (l += B.y));
                                        d < 0 && u < 0
                                            ? ((s = P),
                                              (l -= u = -u),
                                              (c -= d = -d))
                                            : d < 0
                                            ? ((s = O), (c -= d = -d))
                                            : u < 0 && ((s = S), (l -= u = -u));
                                        break;
                                    case O:
                                        if (h) {
                                            if (
                                                B.y <= 0 &&
                                                (l <= v || c <= m)
                                            ) {
                                                y = !1;
                                                break;
                                            }
                                            T(D),
                                                (u -= B.y),
                                                (l += B.y),
                                                (d = u * h),
                                                (c += r.width - d);
                                        } else
                                            T(D),
                                                T(C),
                                                B.x <= 0
                                                    ? c > m
                                                        ? ((d -= B.x),
                                                          (c += B.x))
                                                        : B.y <= 0 &&
                                                          l <= v &&
                                                          (y = !1)
                                                    : ((d -= B.x), (c += B.x)),
                                                B.y <= 0
                                                    ? l > v &&
                                                      ((u -= B.y), (l += B.y))
                                                    : ((u -= B.y), (l += B.y));
                                        d < 0 && u < 0
                                            ? ((s = S),
                                              (l -= u = -u),
                                              (c -= d = -d))
                                            : d < 0
                                            ? ((s = E), (c -= d = -d))
                                            : u < 0 && ((s = P), (l -= u = -u));
                                        break;
                                    case P:
                                        if (h) {
                                            if (
                                                B.x <= 0 &&
                                                (c <= m || f >= w)
                                            ) {
                                                y = !1;
                                                break;
                                            }
                                            T(C),
                                                (d -= B.x),
                                                (c += B.x),
                                                (u = d / h);
                                        } else
                                            T(j),
                                                T(C),
                                                B.x <= 0
                                                    ? c > m
                                                        ? ((d -= B.x),
                                                          (c += B.x))
                                                        : B.y >= 0 &&
                                                          f >= w &&
                                                          (y = !1)
                                                    : ((d -= B.x), (c += B.x)),
                                                B.y >= 0
                                                    ? f < w && (u += B.y)
                                                    : (u += B.y);
                                        d < 0 && u < 0
                                            ? ((s = E),
                                              (l -= u = -u),
                                              (c -= d = -d))
                                            : d < 0
                                            ? ((s = S), (c -= d = -d))
                                            : u < 0 && ((s = O), (l -= u = -u));
                                        break;
                                    case S:
                                        if (h) {
                                            if (
                                                B.x >= 0 &&
                                                (p >= g || f >= w)
                                            ) {
                                                y = !1;
                                                break;
                                            }
                                            T(_), (u = (d += B.x) / h);
                                        } else
                                            T(j),
                                                T(_),
                                                B.x >= 0
                                                    ? p < g
                                                        ? (d += B.x)
                                                        : B.y >= 0 &&
                                                          f >= w &&
                                                          (y = !1)
                                                    : (d += B.x),
                                                B.y >= 0
                                                    ? f < w && (u += B.y)
                                                    : (u += B.y);
                                        d < 0 && u < 0
                                            ? ((s = O),
                                              (l -= u = -u),
                                              (c -= d = -d))
                                            : d < 0
                                            ? ((s = P), (c -= d = -d))
                                            : u < 0 && ((s = E), (l -= u = -u));
                                        break;
                                    case x:
                                        this.move(B.x, B.y), (y = !1);
                                        break;
                                    case k:
                                        this.zoom(Kt(o), t), (y = !1);
                                        break;
                                    case M:
                                        if (!B.x || !B.y) {
                                            y = !1;
                                            break;
                                        }
                                        (e = Xt(this.cropper)),
                                            (c = R.startX - e.left),
                                            (l = R.startY - e.top),
                                            (d = r.minWidth),
                                            (u = r.minHeight),
                                            B.x > 0
                                                ? (s = B.y > 0 ? S : E)
                                                : B.x < 0 &&
                                                  ((c -= d),
                                                  (s = B.y > 0 ? P : O)),
                                            B.y < 0 && (l -= u),
                                            this.cropped ||
                                                (Rt(this.cropBox, L),
                                                (this.cropped = !0),
                                                this.limited &&
                                                    this.limitCropBox(!0, !0));
                                }
                                y &&
                                    ((r.width = d),
                                    (r.height = u),
                                    (r.left = c),
                                    (r.top = l),
                                    (this.action = s),
                                    this.renderCropBox()),
                                    _t(o, function (t) {
                                        (t.startX = t.endX),
                                            (t.startY = t.endY);
                                    });
                            },
                        },
                        fe = {
                            crop: function () {
                                return (
                                    !this.ready ||
                                        this.cropped ||
                                        this.disabled ||
                                        ((this.cropped = !0),
                                        this.limitCropBox(!0, !0),
                                        this.options.modal &&
                                            Pt(this.dragBox, N),
                                        Rt(this.cropBox, L),
                                        this.setCropBoxData(
                                            this.initialCropBoxData
                                        )),
                                    this
                                );
                            },
                            reset: function () {
                                return (
                                    this.ready &&
                                        !this.disabled &&
                                        ((this.imageData = Ct(
                                            {},
                                            this.initialImageData
                                        )),
                                        (this.canvasData = Ct(
                                            {},
                                            this.initialCanvasData
                                        )),
                                        (this.cropBoxData = Ct(
                                            {},
                                            this.initialCropBoxData
                                        )),
                                        this.renderCanvas(),
                                        this.cropped && this.renderCropBox()),
                                    this
                                );
                            },
                            clear: function () {
                                return (
                                    this.cropped &&
                                        !this.disabled &&
                                        (Ct(this.cropBoxData, {
                                            left: 0,
                                            top: 0,
                                            width: 0,
                                            height: 0,
                                        }),
                                        (this.cropped = !1),
                                        this.renderCropBox(),
                                        this.limitCanvas(!0, !0),
                                        this.renderCanvas(),
                                        Rt(this.dragBox, N),
                                        Pt(this.cropBox, L)),
                                    this
                                );
                            },
                            replace: function (t) {
                                var e =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1] &&
                                    arguments[1];
                                return (
                                    !this.disabled &&
                                        t &&
                                        (this.isImg && (this.element.src = t),
                                        e
                                            ? ((this.url = t),
                                              (this.image.src = t),
                                              this.ready &&
                                                  ((this.viewBoxImage.src = t),
                                                  _t(
                                                      this.previews,
                                                      function (e) {
                                                          e.getElementsByTagName(
                                                              "img"
                                                          )[0].src = t;
                                                      }
                                                  )))
                                            : (this.isImg &&
                                                  (this.replaced = !0),
                                              (this.options.data = null),
                                              this.uncreate(),
                                              this.load(t))),
                                    this
                                );
                            },
                            enable: function () {
                                return (
                                    this.ready &&
                                        this.disabled &&
                                        ((this.disabled = !1),
                                        Rt(this.cropper, B)),
                                    this
                                );
                            },
                            disable: function () {
                                return (
                                    this.ready &&
                                        !this.disabled &&
                                        ((this.disabled = !0),
                                        Pt(this.cropper, B)),
                                    this
                                );
                            },
                            destroy: function () {
                                var t = this.element;
                                return t[y]
                                    ? ((t[y] = void 0),
                                      this.isImg &&
                                          this.replaced &&
                                          (t.src = this.originalUrl),
                                      this.uncreate(),
                                      this)
                                    : this;
                            },
                            move: function (t) {
                                var e =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : t,
                                    i = this.canvasData,
                                    n = i.left,
                                    a = i.top;
                                return this.moveTo(
                                    gt(t) ? t : n + Number(t),
                                    gt(e) ? e : a + Number(e)
                                );
                            },
                            moveTo: function (t) {
                                var e =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : t,
                                    i = this.canvasData,
                                    n = !1;
                                return (
                                    (t = Number(t)),
                                    (e = Number(e)),
                                    this.ready &&
                                        !this.disabled &&
                                        this.options.movable &&
                                        (mt(t) && ((i.left = t), (n = !0)),
                                        mt(e) && ((i.top = e), (n = !0)),
                                        n && this.renderCanvas(!0)),
                                    this
                                );
                            },
                            zoom: function (t, e) {
                                var i = this.canvasData;
                                return (
                                    (t =
                                        (t = Number(t)) < 0
                                            ? 1 / (1 - t)
                                            : 1 + t),
                                    this.zoomTo(
                                        (i.width * t) / i.naturalWidth,
                                        null,
                                        e
                                    )
                                );
                            },
                            zoomTo: function (t, e, i) {
                                var n = this.options,
                                    a = this.canvasData,
                                    r = a.width,
                                    o = a.height,
                                    s = a.naturalWidth,
                                    h = a.naturalHeight;
                                if (
                                    (t = Number(t)) >= 0 &&
                                    this.ready &&
                                    !this.disabled &&
                                    n.zoomable
                                ) {
                                    var c = s * t,
                                        l = h * t;
                                    if (
                                        !1 ===
                                        Yt(this.element, at, {
                                            ratio: t,
                                            oldRatio: r / s,
                                            originalEvent: i,
                                        })
                                    )
                                        return this;
                                    if (i) {
                                        var d = this.pointers,
                                            u = Xt(this.cropper),
                                            p =
                                                d && Object.keys(d).length
                                                    ? Jt(d)
                                                    : {
                                                          pageX: i.pageX,
                                                          pageY: i.pageY,
                                                      };
                                        (a.left -=
                                            (c - r) *
                                            ((p.pageX - u.left - a.left) / r)),
                                            (a.top -=
                                                (l - o) *
                                                ((p.pageY - u.top - a.top) /
                                                    o));
                                    } else
                                        bt(e) && mt(e.x) && mt(e.y)
                                            ? ((a.left -=
                                                  (c - r) *
                                                  ((e.x - a.left) / r)),
                                              (a.top -=
                                                  (l - o) *
                                                  ((e.y - a.top) / o)))
                                            : ((a.left -= (c - r) / 2),
                                              (a.top -= (l - o) / 2));
                                    (a.width = c),
                                        (a.height = l),
                                        this.renderCanvas(!0);
                                }
                                return this;
                            },
                            rotate: function (t) {
                                return this.rotateTo(
                                    (this.imageData.rotate || 0) + Number(t)
                                );
                            },
                            rotateTo: function (t) {
                                return (
                                    mt((t = Number(t))) &&
                                        this.ready &&
                                        !this.disabled &&
                                        this.options.rotatable &&
                                        ((this.imageData.rotate = t % 360),
                                        this.renderCanvas(!0, !0)),
                                    this
                                );
                            },
                            scaleX: function (t) {
                                var e = this.imageData.scaleY;
                                return this.scale(t, mt(e) ? e : 1);
                            },
                            scaleY: function (t) {
                                var e = this.imageData.scaleX;
                                return this.scale(mt(e) ? e : 1, t);
                            },
                            scale: function (t) {
                                var e =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : t,
                                    i = this.imageData,
                                    n = !1;
                                return (
                                    (t = Number(t)),
                                    (e = Number(e)),
                                    this.ready &&
                                        !this.disabled &&
                                        this.options.scalable &&
                                        (mt(t) && ((i.scaleX = t), (n = !0)),
                                        mt(e) && ((i.scaleY = e), (n = !0)),
                                        n && this.renderCanvas(!0, !0)),
                                    this
                                );
                            },
                            getData: function () {
                                var t,
                                    e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0] &&
                                        arguments[0],
                                    i = this.options,
                                    n = this.imageData,
                                    a = this.canvasData,
                                    r = this.cropBoxData;
                                if (this.ready && this.cropped) {
                                    t = {
                                        x: r.left - a.left,
                                        y: r.top - a.top,
                                        width: r.width,
                                        height: r.height,
                                    };
                                    var o = n.width / n.naturalWidth;
                                    if (
                                        (_t(t, function (e, i) {
                                            t[i] = e / o;
                                        }),
                                        e)
                                    ) {
                                        var s = Math.round(t.y + t.height),
                                            h = Math.round(t.x + t.width);
                                        (t.x = Math.round(t.x)),
                                            (t.y = Math.round(t.y)),
                                            (t.width = h - t.x),
                                            (t.height = s - t.y);
                                    }
                                } else t = { x: 0, y: 0, width: 0, height: 0 };
                                return (
                                    i.rotatable && (t.rotate = n.rotate || 0),
                                    i.scalable &&
                                        ((t.scaleX = n.scaleX || 1),
                                        (t.scaleY = n.scaleY || 1)),
                                    t
                                );
                            },
                            setData: function (t) {
                                var e = this.options,
                                    i = this.imageData,
                                    n = this.canvasData,
                                    a = {};
                                if (this.ready && !this.disabled && bt(t)) {
                                    var r = !1;
                                    e.rotatable &&
                                        mt(t.rotate) &&
                                        t.rotate !== i.rotate &&
                                        ((i.rotate = t.rotate), (r = !0)),
                                        e.scalable &&
                                            (mt(t.scaleX) &&
                                                t.scaleX !== i.scaleX &&
                                                ((i.scaleX = t.scaleX),
                                                (r = !0)),
                                            mt(t.scaleY) &&
                                                t.scaleY !== i.scaleY &&
                                                ((i.scaleY = t.scaleY),
                                                (r = !0))),
                                        r && this.renderCanvas(!0, !0);
                                    var o = i.width / i.naturalWidth;
                                    mt(t.x) && (a.left = t.x * o + n.left),
                                        mt(t.y) && (a.top = t.y * o + n.top),
                                        mt(t.width) && (a.width = t.width * o),
                                        mt(t.height) &&
                                            (a.height = t.height * o),
                                        this.setCropBoxData(a);
                                }
                                return this;
                            },
                            getContainerData: function () {
                                return this.ready
                                    ? Ct({}, this.containerData)
                                    : {};
                            },
                            getImageData: function () {
                                return this.sized ? Ct({}, this.imageData) : {};
                            },
                            getCanvasData: function () {
                                var t = this.canvasData,
                                    e = {};
                                return (
                                    this.ready &&
                                        _t(
                                            [
                                                "left",
                                                "top",
                                                "width",
                                                "height",
                                                "naturalWidth",
                                                "naturalHeight",
                                            ],
                                            function (i) {
                                                e[i] = t[i];
                                            }
                                        ),
                                    e
                                );
                            },
                            setCanvasData: function (t) {
                                var e = this.canvasData,
                                    i = e.aspectRatio;
                                return (
                                    this.ready &&
                                        !this.disabled &&
                                        bt(t) &&
                                        (mt(t.left) && (e.left = t.left),
                                        mt(t.top) && (e.top = t.top),
                                        mt(t.width)
                                            ? ((e.width = t.width),
                                              (e.height = t.width / i))
                                            : mt(t.height) &&
                                              ((e.height = t.height),
                                              (e.width = t.height * i)),
                                        this.renderCanvas(!0)),
                                    this
                                );
                            },
                            getCropBoxData: function () {
                                var t,
                                    e = this.cropBoxData;
                                return (
                                    this.ready &&
                                        this.cropped &&
                                        (t = {
                                            left: e.left,
                                            top: e.top,
                                            width: e.width,
                                            height: e.height,
                                        }),
                                    t || {}
                                );
                            },
                            setCropBoxData: function (t) {
                                var e,
                                    i,
                                    n = this.cropBoxData,
                                    a = this.options.aspectRatio;
                                return (
                                    this.ready &&
                                        this.cropped &&
                                        !this.disabled &&
                                        bt(t) &&
                                        (mt(t.left) && (n.left = t.left),
                                        mt(t.top) && (n.top = t.top),
                                        mt(t.width) &&
                                            t.width !== n.width &&
                                            ((e = !0), (n.width = t.width)),
                                        mt(t.height) &&
                                            t.height !== n.height &&
                                            ((i = !0), (n.height = t.height)),
                                        a &&
                                            (e
                                                ? (n.height = n.width / a)
                                                : i &&
                                                  (n.width = n.height * a)),
                                        this.renderCropBox()),
                                    this
                                );
                            },
                            getCroppedCanvas: function () {
                                var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : {};
                                if (!this.ready || !window.HTMLCanvasElement)
                                    return null;
                                var e = this.canvasData,
                                    i = ee(this.image, this.imageData, e, t);
                                if (!this.cropped) return i;
                                var n = this.getData(t.rounded),
                                    a = n.x,
                                    r = n.y,
                                    o = n.width,
                                    s = n.height,
                                    h = i.width / Math.floor(e.naturalWidth);
                                1 !== h &&
                                    ((a *= h), (r *= h), (o *= h), (s *= h));
                                var l = o / s,
                                    d = Zt({
                                        aspectRatio: l,
                                        width: t.maxWidth || 1 / 0,
                                        height: t.maxHeight || 1 / 0,
                                    }),
                                    u = Zt(
                                        {
                                            aspectRatio: l,
                                            width: t.minWidth || 0,
                                            height: t.minHeight || 0,
                                        },
                                        "cover"
                                    ),
                                    p = Zt({
                                        aspectRatio: l,
                                        width:
                                            t.width || (1 !== h ? i.width : o),
                                        height:
                                            t.height ||
                                            (1 !== h ? i.height : s),
                                    }),
                                    f = p.width,
                                    m = p.height;
                                (f = Math.min(d.width, Math.max(u.width, f))),
                                    (m = Math.min(
                                        d.height,
                                        Math.max(u.height, m)
                                    ));
                                var v = document.createElement("canvas"),
                                    g = v.getContext("2d");
                                (v.width = Dt(f)),
                                    (v.height = Dt(m)),
                                    (g.fillStyle =
                                        t.fillColor || "transparent"),
                                    g.fillRect(0, 0, f, m);
                                var w = t.imageSmoothingEnabled,
                                    y = void 0 === w || w,
                                    b = t.imageSmoothingQuality;
                                (g.imageSmoothingEnabled = y),
                                    b && (g.imageSmoothingQuality = b);
                                var M,
                                    x,
                                    k,
                                    _,
                                    C,
                                    j,
                                    D = i.width,
                                    E = i.height,
                                    O = a,
                                    S = r;
                                O <= -o || O > D
                                    ? ((O = 0), (M = 0), (k = 0), (C = 0))
                                    : O <= 0
                                    ? ((k = -O),
                                      (O = 0),
                                      (C = M = Math.min(D, o + O)))
                                    : O <= D &&
                                      ((k = 0), (C = M = Math.min(o, D - O))),
                                    M <= 0 || S <= -s || S > E
                                        ? ((S = 0), (x = 0), (_ = 0), (j = 0))
                                        : S <= 0
                                        ? ((_ = -S),
                                          (S = 0),
                                          (j = x = Math.min(E, s + S)))
                                        : S <= E &&
                                          ((_ = 0),
                                          (j = x = Math.min(s, E - S)));
                                var P = [O, S, M, x];
                                if (C > 0 && j > 0) {
                                    var R = f / o;
                                    P.push(k * R, _ * R, C * R, j * R);
                                }
                                return (
                                    g.drawImage.apply(
                                        g,
                                        [i].concat(
                                            c(
                                                P.map(function (t) {
                                                    return Math.floor(Dt(t));
                                                })
                                            )
                                        )
                                    ),
                                    v
                                );
                            },
                            setAspectRatio: function (t) {
                                var e = this.options;
                                return (
                                    this.disabled ||
                                        gt(t) ||
                                        ((e.aspectRatio =
                                            Math.max(0, t) || NaN),
                                        this.ready &&
                                            (this.initCropBox(),
                                            this.cropped &&
                                                this.renderCropBox())),
                                    this
                                );
                            },
                            setDragMode: function (t) {
                                var e = this.options,
                                    i = this.dragBox,
                                    n = this.face;
                                if (this.ready && !this.disabled) {
                                    var a = t === I,
                                        r = e.movable && t === W;
                                    (t = a || r ? t : Y),
                                        (e.dragMode = t),
                                        Nt(i, $, t),
                                        Bt(i, R, a),
                                        Bt(i, H, r),
                                        e.cropBoxMovable ||
                                            (Nt(n, $, t),
                                            Bt(n, R, a),
                                            Bt(n, H, r));
                                }
                                return this;
                            },
                        },
                        me = v.Cropper,
                        ve = (function () {
                            function t(e) {
                                var i =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {};
                                if ((r(this, t), !e || !ct.test(e.tagName)))
                                    throw new Error(
                                        "The first argument is required and must be an <img> or <canvas> element."
                                    );
                                (this.element = e),
                                    (this.options = Ct({}, ut, bt(i) && i)),
                                    (this.cropped = !1),
                                    (this.disabled = !1),
                                    (this.pointers = {}),
                                    (this.ready = !1),
                                    (this.reloading = !1),
                                    (this.replaced = !1),
                                    (this.sized = !1),
                                    (this.sizing = !1),
                                    this.init();
                            }
                            return s(
                                t,
                                [
                                    {
                                        key: "init",
                                        value: function () {
                                            var t,
                                                e = this.element,
                                                i = e.tagName.toLowerCase();
                                            if (!e[y]) {
                                                if (
                                                    ((e[y] = this), "img" === i)
                                                ) {
                                                    if (
                                                        ((this.isImg = !0),
                                                        (t =
                                                            e.getAttribute(
                                                                "src"
                                                            ) || ""),
                                                        (this.originalUrl = t),
                                                        !t)
                                                    )
                                                        return;
                                                    t = e.src;
                                                } else
                                                    "canvas" === i &&
                                                        window.HTMLCanvasElement &&
                                                        (t = e.toDataURL());
                                                this.load(t);
                                            }
                                        },
                                    },
                                    {
                                        key: "load",
                                        value: function (t) {
                                            var e = this;
                                            if (t) {
                                                (this.url = t),
                                                    (this.imageData = {});
                                                var i = this.element,
                                                    n = this.options;
                                                if (
                                                    (n.rotatable ||
                                                        n.scalable ||
                                                        (n.checkOrientation =
                                                            !1),
                                                    n.checkOrientation &&
                                                        window.ArrayBuffer)
                                                )
                                                    if (st.test(t))
                                                        ht.test(t)
                                                            ? this.read(re(t))
                                                            : this.clone();
                                                    else {
                                                        var a =
                                                                new XMLHttpRequest(),
                                                            r =
                                                                this.clone.bind(
                                                                    this
                                                                );
                                                        (this.reloading = !0),
                                                            (this.xhr = a),
                                                            (a.onabort = r),
                                                            (a.onerror = r),
                                                            (a.ontimeout = r),
                                                            (a.onprogress =
                                                                function () {
                                                                    a.getResponseHeader(
                                                                        "content-type"
                                                                    ) !== rt &&
                                                                        a.abort();
                                                                }),
                                                            (a.onload =
                                                                function () {
                                                                    e.read(
                                                                        a.response
                                                                    );
                                                                }),
                                                            (a.onloadend =
                                                                function () {
                                                                    (e.reloading =
                                                                        !1),
                                                                        (e.xhr =
                                                                            null);
                                                                }),
                                                            n.checkCrossOrigin &&
                                                                qt(t) &&
                                                                i.crossOrigin &&
                                                                (t = Gt(t)),
                                                            a.open(
                                                                "GET",
                                                                t,
                                                                !0
                                                            ),
                                                            (a.responseType =
                                                                "arraybuffer"),
                                                            (a.withCredentials =
                                                                "use-credentials" ===
                                                                i.crossOrigin),
                                                            a.send();
                                                    }
                                                else this.clone();
                                            }
                                        },
                                    },
                                    {
                                        key: "read",
                                        value: function (t) {
                                            var e = this.options,
                                                i = this.imageData,
                                                n = se(t),
                                                a = 0,
                                                r = 1,
                                                o = 1;
                                            if (n > 1) {
                                                this.url = oe(t, rt);
                                                var s = he(n);
                                                (a = s.rotate),
                                                    (r = s.scaleX),
                                                    (o = s.scaleY);
                                            }
                                            e.rotatable && (i.rotate = a),
                                                e.scalable &&
                                                    ((i.scaleX = r),
                                                    (i.scaleY = o)),
                                                this.clone();
                                        },
                                    },
                                    {
                                        key: "clone",
                                        value: function () {
                                            var t = this.element,
                                                e = this.url,
                                                i = t.crossOrigin,
                                                n = e;
                                            this.options.checkCrossOrigin &&
                                                qt(e) &&
                                                (i || (i = "anonymous"),
                                                (n = Gt(e))),
                                                (this.crossOrigin = i),
                                                (this.crossOriginUrl = n);
                                            var a =
                                                document.createElement("img");
                                            i && (a.crossOrigin = i),
                                                (a.src = n || e),
                                                (a.alt =
                                                    t.alt ||
                                                    "The image to crop"),
                                                (this.image = a),
                                                (a.onload =
                                                    this.start.bind(this)),
                                                (a.onerror =
                                                    this.stop.bind(this)),
                                                Pt(a, T),
                                                t.parentNode.insertBefore(
                                                    a,
                                                    t.nextSibling
                                                );
                                        },
                                    },
                                    {
                                        key: "start",
                                        value: function () {
                                            var t = this,
                                                e = this.image;
                                            (e.onload = null),
                                                (e.onerror = null),
                                                (this.sizing = !0);
                                            var i =
                                                    v.navigator &&
                                                    /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(
                                                        v.navigator.userAgent
                                                    ),
                                                n = function (e, i) {
                                                    Ct(t.imageData, {
                                                        naturalWidth: e,
                                                        naturalHeight: i,
                                                        aspectRatio: e / i,
                                                    }),
                                                        (t.initialImageData =
                                                            Ct(
                                                                {},
                                                                t.imageData
                                                            )),
                                                        (t.sizing = !1),
                                                        (t.sized = !0),
                                                        t.build();
                                                };
                                            if (!e.naturalWidth || i) {
                                                var a =
                                                        document.createElement(
                                                            "img"
                                                        ),
                                                    r =
                                                        document.body ||
                                                        document.documentElement;
                                                (this.sizingImage = a),
                                                    (a.onload = function () {
                                                        n(a.width, a.height),
                                                            i ||
                                                                r.removeChild(
                                                                    a
                                                                );
                                                    }),
                                                    (a.src = e.src),
                                                    i ||
                                                        ((a.style.cssText =
                                                            "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;"),
                                                        r.appendChild(a));
                                            } else
                                                n(
                                                    e.naturalWidth,
                                                    e.naturalHeight
                                                );
                                        },
                                    },
                                    {
                                        key: "stop",
                                        value: function () {
                                            var t = this.image;
                                            (t.onload = null),
                                                (t.onerror = null),
                                                t.parentNode.removeChild(t),
                                                (this.image = null);
                                        },
                                    },
                                    {
                                        key: "build",
                                        value: function () {
                                            if (this.sized && !this.ready) {
                                                var t = this.element,
                                                    e = this.options,
                                                    i = this.image,
                                                    n = t.parentNode,
                                                    a =
                                                        document.createElement(
                                                            "div"
                                                        );
                                                a.innerHTML = pt;
                                                var r = a.querySelector(
                                                        ".".concat(
                                                            y,
                                                            "-container"
                                                        )
                                                    ),
                                                    o = r.querySelector(
                                                        ".".concat(y, "-canvas")
                                                    ),
                                                    s = r.querySelector(
                                                        ".".concat(
                                                            y,
                                                            "-drag-box"
                                                        )
                                                    ),
                                                    h = r.querySelector(
                                                        ".".concat(
                                                            y,
                                                            "-crop-box"
                                                        )
                                                    ),
                                                    c = h.querySelector(
                                                        ".".concat(y, "-face")
                                                    );
                                                (this.container = n),
                                                    (this.cropper = r),
                                                    (this.canvas = o),
                                                    (this.dragBox = s),
                                                    (this.cropBox = h),
                                                    (this.viewBox =
                                                        r.querySelector(
                                                            ".".concat(
                                                                y,
                                                                "-view-box"
                                                            )
                                                        )),
                                                    (this.face = c),
                                                    o.appendChild(i),
                                                    Pt(t, L),
                                                    n.insertBefore(
                                                        r,
                                                        t.nextSibling
                                                    ),
                                                    Rt(i, T),
                                                    this.initPreview(),
                                                    this.bind(),
                                                    (e.initialAspectRatio =
                                                        Math.max(
                                                            0,
                                                            e.initialAspectRatio
                                                        ) || NaN),
                                                    (e.aspectRatio =
                                                        Math.max(
                                                            0,
                                                            e.aspectRatio
                                                        ) || NaN),
                                                    (e.viewMode =
                                                        Math.max(
                                                            0,
                                                            Math.min(
                                                                3,
                                                                Math.round(
                                                                    e.viewMode
                                                                )
                                                            )
                                                        ) || 0),
                                                    Pt(h, L),
                                                    e.guides ||
                                                        Pt(
                                                            h.getElementsByClassName(
                                                                "".concat(
                                                                    y,
                                                                    "-dashed"
                                                                )
                                                            ),
                                                            L
                                                        ),
                                                    e.center ||
                                                        Pt(
                                                            h.getElementsByClassName(
                                                                "".concat(
                                                                    y,
                                                                    "-center"
                                                                )
                                                            ),
                                                            L
                                                        ),
                                                    e.background &&
                                                        Pt(
                                                            r,
                                                            "".concat(y, "-bg")
                                                        ),
                                                    e.highlight || Pt(c, A),
                                                    e.cropBoxMovable &&
                                                        (Pt(c, H), Nt(c, $, b)),
                                                    e.cropBoxResizable ||
                                                        (Pt(
                                                            h.getElementsByClassName(
                                                                "".concat(
                                                                    y,
                                                                    "-line"
                                                                )
                                                            ),
                                                            L
                                                        ),
                                                        Pt(
                                                            h.getElementsByClassName(
                                                                "".concat(
                                                                    y,
                                                                    "-point"
                                                                )
                                                            ),
                                                            L
                                                        )),
                                                    this.render(),
                                                    (this.ready = !0),
                                                    this.setDragMode(
                                                        e.dragMode
                                                    ),
                                                    e.autoCrop && this.crop(),
                                                    this.setData(e.data),
                                                    Mt(e.ready) &&
                                                        Wt(t, et, e.ready, {
                                                            once: !0,
                                                        }),
                                                    Yt(t, et);
                                            }
                                        },
                                    },
                                    {
                                        key: "unbuild",
                                        value: function () {
                                            if (this.ready) {
                                                (this.ready = !1),
                                                    this.unbind(),
                                                    this.resetPreview();
                                                var t = this.cropper.parentNode;
                                                t &&
                                                    t.removeChild(this.cropper),
                                                    Rt(this.element, L);
                                            }
                                        },
                                    },
                                    {
                                        key: "uncreate",
                                        value: function () {
                                            this.ready
                                                ? (this.unbuild(),
                                                  (this.ready = !1),
                                                  (this.cropped = !1))
                                                : this.sizing
                                                ? ((this.sizingImage.onload =
                                                      null),
                                                  (this.sizing = !1),
                                                  (this.sized = !1))
                                                : this.reloading
                                                ? ((this.xhr.onabort = null),
                                                  this.xhr.abort())
                                                : this.image && this.stop();
                                        },
                                    },
                                ],
                                [
                                    {
                                        key: "noConflict",
                                        value: function () {
                                            return (window.Cropper = me), t;
                                        },
                                    },
                                    {
                                        key: "setDefaults",
                                        value: function (t) {
                                            Ct(ut, bt(t) && t);
                                        },
                                    },
                                ]
                            );
                        })();
                    return Ct(ve.prototype, ce, le, de, ue, pe, fe), ve;
                })();
            },
        },
        e = {};
    function i(n) {
        var a = e[n];
        if (void 0 !== a) return a.exports;
        var r = (e[n] = { exports: {} });
        return t[n].call(r.exports, r, r.exports, i), r.exports;
    }
    (i.n = (t) => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return i.d(e, { a: e }), e;
    }),
        (i.d = (t, e) => {
            for (var n in e)
                i.o(e, n) &&
                    !i.o(t, n) &&
                    Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        }),
        (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (() => {
            "use strict";
            var t = i(418),
                e = i(6294),
                n = i(27);
            function a(t) {
                return (
                    (a =
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
                    a(t)
                );
            }
            function r(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
            }
            function o(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(t, h(n.key), n);
                }
            }
            function s(t, e, i) {
                return (
                    e && o(t.prototype, e),
                    i && o(t, i),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    t
                );
            }
            function h(t) {
                var e = (function (t, e) {
                    if ("object" != a(t) || !t) return t;
                    var i = t[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(t, e || "default");
                        if ("object" != a(n)) return n;
                        throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                        );
                    }
                    return ("string" === e ? String : Number)(t);
                })(t, "string");
                return "symbol" == a(e) ? e : e + "";
            }
            var c = (function () {
                    return s(
                        function t() {
                            r(this, t);
                        },
                        null,
                        [
                            {
                                key: "editorSelectFile",
                                value: function (e) {
                                    var i =
                                        t.M.getUrlParam("CKEditor") ||
                                        t.M.getUrlParam("CKEditorFuncNum");
                                    if (window.opener && i) {
                                        var n = t.M.arrayFirst(e);
                                        window.opener.CKEDITOR.tools.callFunction(
                                            t.M.getUrlParam("CKEditorFuncNum"),
                                            n.full_url
                                        ),
                                            window.opener && window.close();
                                    }
                                },
                            },
                        ]
                    );
                })(),
                l = s(function i(a, o) {
                    r(this, i);
                    var s = window.RvMediaCustomCallback || null;
                    if ("function" != typeof s) {
                        window.rvMedia = window.rvMedia || {};
                        var h = $("body");
                        o = $.extend(
                            !0,
                            {
                                multiple: !0,
                                type: "*",
                                onSelectFiles: function (t, e) {},
                            },
                            o
                        );
                        var c = function (i) {
                            i.preventDefault();
                            var a = $(i.currentTarget);
                            $("#rv_media_modal").modal("show"),
                                (window.rvMedia.options = o),
                                (window.rvMedia.options.open_in = "modal"),
                                (window.rvMedia.$el = a),
                                (e.T.request_params.filter = "everything"),
                                t.M.storeConfig();
                            var r = window.rvMedia.$el.data("rv-media");
                            void 0 !== r &&
                                r.length > 0 &&
                                ((r = r[0]),
                                (window.rvMedia.options = $.extend(
                                    !0,
                                    window.rvMedia.options,
                                    r || {}
                                )),
                                void 0 !== r.selected_file_id
                                    ? (window.rvMedia.options.is_popup = !0)
                                    : void 0 !==
                                          window.rvMedia.options.is_popup &&
                                      (window.rvMedia.options.is_popup =
                                          void 0)),
                                0 ===
                                $("#rv_media_body .rv-media-container").length
                                    ? $("#rv_media_body").load(
                                          RV_MEDIA_URL.popup,
                                          function (e) {
                                              e.error && alert(e.message),
                                                  $("#rv_media_body")
                                                      .removeClass(
                                                          "media-modal-loading"
                                                      )
                                                      .closest(".modal-content")
                                                      .removeClass(
                                                          "bb-loading"
                                                      ),
                                                  $(document)
                                                      .find(
                                                          ".rv-media-container .js-change-action[data-type=refresh]"
                                                      )
                                                      .trigger("click"),
                                                  "everything" !==
                                                      t.M.getRequestParams()
                                                          .filter &&
                                                      $(
                                                          ".rv-media-actions .btn.js-rv-media-change-filter-group.js-filter-by-type"
                                                      ).hide(),
                                                  n.K.destroyContext(),
                                                  n.K.initContext();
                                          }
                                      )
                                    : $(document)
                                          .find(
                                              ".rv-media-container .js-change-action[data-type=refresh]"
                                          )
                                          .trigger("click");
                        };
                        "string" == typeof a
                            ? h.off("click", a).on("click", a, c)
                            : a.off("click").on("click", c);
                    } else s(a, o);
                });
            (window.RvMediaStandAlone = l),
                $(".js-insert-to-editor")
                    .off("click")
                    .on("click", function (e) {
                        e.preventDefault();
                        var i = t.M.getSelectedFiles();
                        t.M.size(i) > 0 && c.editorSelectFile(i);
                    }),
                ($.fn.rvMedia = function (i) {
                    var n = $(this);
                    (e.T.request_params.filter = "everything"),
                        $(document)
                            .find(".js-insert-to-editor")
                            .prop(
                                "disabled",
                                "trash" === e.T.request_params.view_in
                            ),
                        t.M.storeConfig();
                    var a = window.RvMediaCustomCallback || null;
                    "function" != typeof a ? new l(n, i) : a(n, i);
                }),
                document.dispatchEvent(new CustomEvent("core-media-loaded"));
        })();
})();
