$(function () {
    "undefined" != typeof BDashboard &&
        BDashboard.loadWidget(
            $("#widget_request_errors").find(".widget-content"),
            $("#widget_request_errors").data("url")
        ),
        $(document).on("click", ".empty-request-logs-button", function (e) {
            e.preventDefault();
            var t = $("#modal-confirm-delete-records");
            t.modal("show"),
                t.on("click", ".button-delete-records", function (e) {
                    e.preventDefault();
                    var t = $(e.currentTarget);
                    $httpClient
                        .make()
                        .withButtonLoading(t)
                        .delete(t.data("url"))
                        .then(function (e) {
                            var o = e.data;
                            t.closest(".modal").modal("hide"),
                                $(
                                    "#botble-request-log-tables-request-log-table"
                                )
                                    .DataTable()
                                    .draw(),
                                Botble.showSuccess(o.message);
                        });
                });
        });
});
