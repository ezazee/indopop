$(function () {
    var t = $(document).find("#notification-sidebar"),
        n = function () {
            $httpClient
                .make()
                .get(t.data("count-url"))
                .then(function (t) {
                    var n = t.data;
                    $(document).find(".badge.notification-count").text(n.data);
                });
        },
        i = function (n) {
            $httpClient
                .make()
                .get(n || t.data("url"))
                .then(function (n) {
                    var i = n.data;
                    t.find(".notification-content").html(i.data);
                });
        },
        a = function () {
            t.offcanvas("hide");
        };
    t.on("hide.bs.offcanvas", function () {
        $(".offcanvas-backdrop").remove();
    }),
        $(document).on("click", ".offcanvas-backdrop", function () {
            $(this).remove(), a();
        }),
        t
            .on("show.bs.offcanvas", function () {
                i(), $("body").after('<div class="offcanvas-backdrop"></div>');
            })
            .on("click", ".mark-all-notifications-as-read", function (a) {
                a.preventDefault(),
                    $httpClient
                        .make()
                        .put($(this).data("url"))
                        .then(function (n) {
                            var i = n.data;
                            t.find(".notification-content").html(i.data);
                        })
                        .finally(function () {
                            n(), i();
                        });
            })
            .on("click", ".clear-notifications", function () {
                $httpClient
                    .make()
                    .delete($(this).data("url"))
                    .then(function () {})
                    .finally(function () {
                        n(), a();
                    });
            })
            .on(
                "click",
                ".list-group-item .btn-delete-notification",
                function () {
                    var t = this;
                    $httpClient
                        .make()
                        .delete($(this).data("url"))
                        .then(function () {
                            var n = $(t).closest(".list-group-item");
                            n.hide("slow", function () {
                                n.remove(), i();
                            });
                        })
                        .finally(function () {
                            n();
                        });
                }
            )
            .on("click", "nav .btn-previous", function () {
                i($(this).data("url"));
            })
            .on("click", "nav .btn-next", function () {
                i($(this).data("url"));
            });
});
