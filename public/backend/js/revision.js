$(function () {
    $.each($(".html-diff-content"), function (t, n) {
        $(n).html(htmldiff($(n).data("original"), $(n).html()));
    });
});
