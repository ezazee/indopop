$(function () {
    "undefined" != typeof BDashboard &&
        BDashboard.loadWidget(
            $("#widget_audit_logs").find(".widget-content"),
            $("#widget_audit_logs").data("url")
        ),
        $(document).on("click", ".empty-activities-logs-button", function (t) {
            t.preventDefault(),
                $("#modal-confirm-delete-records").modal("show"),
                $("#modal-confirm-delete-records").on(
                    "click",
                    ".button-delete-records",
                    function (t) {
                        t.preventDefault();
                        var e = $(t.currentTarget);
                        $httpClient
                            .make()
                            .withButtonLoading(e)
                            .get(e.data("url"))
                            .then(function (t) {
                                var o = t.data;
                                return (
                                    e.closest(".modal").modal("hide"),
                                    $(
                                        "#botble-audit-log-tables-audit-log-table"
                                    )
                                        .DataTable()
                                        .draw(),
                                    Botble.showSuccess(o.message)
                                );
                            });
                    }
                );
        });
});
