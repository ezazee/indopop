$(document).ready(function () {
    if ($("#slider-videos").length > 0) {
        new Splide("#slider-videos", {
            autoplay: true,
            perPage: 4,
            rewind: true,
            pagination: false,
            gap: "10px",
        }).mount();
    }
    if ($("#slider-videos-detail").length > 0) {
        new Splide("#slider-videos-detail", {
            perPage: 3,
            rewind: true,
            pagination: false,
        }).mount();
    }
    if ($("#slider-galleries").length > 0) {
        new Splide("#slider-galleries", {
            perPage: 4,
            rewind: true,
            pagination: true,
            arrows: false,
            gap: "5px",
        }).mount();
    }
    $("#search-button").click(function () {
        $("#search-form").slideToggle();
    });
    if ($("#artist-list").length > 0) {
        let el = document.querySelector("#artist-list");
        let x = 0,
            y = 0,
            top = 0,
            left = 0;

        let draggingFunction = (e) => {
            document.addEventListener("mouseup", () => {
                document.removeEventListener("mousemove", draggingFunction);
            });

            el.scrollLeft = left - e.pageX + x;
            el.scrollTop = top - e.pageY + y;
        };

        el.addEventListener("mousedown", (e) => {
            e.preventDefault();

            y = e.pageY;
            x = e.pageX;
            top = el.scrollTop;
            left = el.scrollLeft;

            document.addEventListener("mousemove", draggingFunction);
        });
    }
    if ($("#sticky-sidebar").length > 0) {
        $("#sticky-sidebar").stickySidebar({
            containerSelector: "#content",
            innerWrapperSelector: ".sidebar__inner",
            topSpacing: 75,
            bottomSpacing: 10,
        });
    }
});
