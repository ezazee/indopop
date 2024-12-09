<header class="header-fix">
    <div class="main-header">
        <div class="header-container">
            <div class="logo-wrap">
                <a href="/">
                    <img alt="IndoParents.com" width="120" height="30" src="{{ asset('frontend/logo/logo.svg') }}" />
                </a>
            </div>
            <div class="fr">
                <div class="main-menu-wrap">
                    <div class="main-menu-container">
                        <ul class="main-menu">
                            <li class="menu-item">
                                <a href="{{ url('/') }}" class="{{ Request::is('/') ? 'active' : '' }}">HOME</a>
                            </li>
                            <li class="menu-item">
                                <a href="{{ url('/kanal') }}" class="{{ Request::is('kanal*') ? 'active' : '' }}">KANAL</a>
                            </li>
                            <li class="menu-item">
                                <a href="{{ url('/kanal') }}" class="{{ Request::is('kanal*') ? 'active' : '' }}">KANAL</a>
                            </li>
                            <li class="menu-item">
                                <a href="{{ url('/kanal') }}" class="{{ Request::is('kanal*') ? 'active' : '' }}">KANAL</a>
                            </li>
                            <li class="menu-item">
                                <a href="{{ url('/kanal') }}" class="{{ Request::is('kanal*') ? 'active' : '' }}">KANAL</a>
                            </li>
                            <li class="menu-item">
                                <a href="{{ url('/kanal') }}" class="{{ Request::is('kanal*') ? 'active' : '' }}">KANAL</a>
                            </li>
                            <li class="menu-item">
                                <a href="{{ url('/kanal') }}" class="{{ Request::is('kanal*') ? 'active' : '' }}">KANAL</a>
                            </li>
                            <li class="menu-item">
                                <a href="{{ url('/kanal') }}" class="{{ Request::is('kanal*') ? 'active' : '' }}">KANAL</a>
                            </li>
                            <li class="menu-item">
                                <a href="https://www.youtube.com/@indopopid" target="_blank">VIDEO</a>
                            </li>
                            <li class="menu-item">
                                <a href="{{ url('/indeks') }}" class="{{ Request::is('indeks') ? 'active' : '' }}">INDEKS</a>
                            </li>
                        </ul>
                    </div>
                    <div class="search-container">
                        <div class="search-wrap" id="search-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <form action="" method="GET">
            <div class="wrap-search-form hidden" id="search-form">
                <input type="text" name="query" class="input-search" placeholder="Cari disini">
                <button type="submit" class="button-search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-search" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </button>
            </div>
        </form>
    </div>
</header>
