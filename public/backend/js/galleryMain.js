(() => {
    "use strict";
    $(function () {
        if (typeof $.fn.rvMedia !== 'undefined') {
            $(".btn_select_gallery").rvMedia({
                filter: "image",
                view_in: "all_media",
                onSelectFiles: function (l) {
                    var t =
                        $(
                            ".list-photos-gallery .photo-gallery-item:last-child"
                        ).data("id") + 1;
                    $.each(l, function (e, a) {
                        $(".list-photos-gallery .row").append(
                            '<div class="col-md-2 col-sm-3 col-4 photo-gallery-item" data-id="' +
                                (t + e) +
                                '" data-img="' +
                                a.url +
                                '" data-description=""><div class="gallery_image_wrapper"><img src="' +
                                a.thumb +
                                '" alt="image" loading="lazy"/></div></div>'
                        );
                    }),
                        e(),
                        a(),
                        $(".reset-gallery").removeClass("hidden");
                },
            });
        } else {
            console.error('rvMedia is not defined.');
        }

        var e = function () {
            var e = document.getElementById("list-photos-items");
            e &&
                Sortable.create(e, {
                    group: "galleries",
                    sort: !0,
                    delay: 0,
                    disabled: !1,
                    store: null,
                    animation: 150,
                    handle: ".photo-gallery-item",
                    ghostClass: "sortable-ghost",
                    chosenClass: "sortable-chosen",
                    dataIdAttr: "data-id",
                    forceFallback: !1,
                    fallbackClass: "sortable-fallback",
                    fallbackOnBody: !1,
                    scroll: !0,
                    scrollSensitivity: 30,
                    scrollSpeed: 10,
                    onEnd: function () {
                        a();
                    },
                });
        };
        e();
        var a = function () {
                var e = [];
                $.each($(".photo-gallery-item"), function (a, l) {
                    e.push({
                        img: $(l).data("img"),
                        description: $(l).data("description"),
                    });
                }),
                    $("#gallery-data").val(JSON.stringify(e));
            },
            l = $(".list-photos-gallery"),
            t = $("#edit-gallery-item");
        $(".reset-gallery").on("click", function (e) {
            e.preventDefault(),
                $(".list-photos-gallery .photo-gallery-item").remove(),
                a(),
                $(this).addClass("hidden");
        }),
            l.on("click", ".photo-gallery-item", function () {
                var e = $(this).data("id");
                $("#delete-gallery-item").data("id", e),
                    $("#update-gallery-item").data("id", e),
                    $("#gallery-item-description").val(
                        $(this).data("description")
                    ),
                    t.modal("show");
            }),
            t.on("click", "#delete-gallery-item", function (e) {
                e.preventDefault(),
                    t.modal("hide"),
                    l
                        .find(
                            ".photo-gallery-item[data-id=" +
                                $(this).data("id") +
                                "]"
                        )
                        .remove(),
                    a(),
                    0 === l.find(".photo-gallery-item").length &&
                        $(".reset-gallery").addClass("hidden");
            }),
            t.on("click", "#update-gallery-item", function (e) {
                e.preventDefault(),
                    t.modal("hide"),
                    l
                        .find(
                            ".photo-gallery-item[data-id=" +
                                $(this).data("id") +
                                "]"
                        )
                        .data(
                            "description",
                            $("#gallery-item-description").val()
                        ),
                    a();
            });
    });
})();
