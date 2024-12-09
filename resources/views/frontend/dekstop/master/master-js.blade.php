<script src="{{ asset('frontend/js/main.js') }}"></script>
<script src="{{ asset('frontend/js/sticky-sidebar.min.js') }}"></script>
<script src="{{ asset('frontend/js/splide.min.js') }}"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script>
    const loadmore = document.querySelector('#loadmore');
    let currentItems = 5;
    loadmore.addEventListener('click', (e) => {
        const elementList = [...document.querySelectorAll('.list .list-element')];
        for (let i = currentItems; i < currentItems + 5; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'block';
            }
        }
        currentItems += 5;
        // Load more button will be hidden after list fully loaded
        if (currentItems >= elementList.length) {
            event.target.style.display = 'none';
        }
    })
</script>

<script>
    document.getElementById("search-button").addEventListener("click", function () {
        document.getElementById("search-form").classList.toggle("hidden");
    });
</script>
