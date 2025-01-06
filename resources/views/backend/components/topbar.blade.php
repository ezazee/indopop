<header class="navbar navbar-expand-md d-none d-lg-flex d-print-none" data-bs-theme="dark">
    <div class="container-fluid">
        <button class="navbar-toggler d-none d-lg-block me-2 ms-n1" type="button" data-bb-toggle="navbar-minimal"
            data-bb-target="#sidebar-menu-main" aria-controls="navbar-menu" aria-expanded="false"
            aria-label="Toggle navigation" data-url="https://cms.botble.com/admin/system/users/profile/1/preferences"
            data-method="PATCH">
            <svg class="icon  svg-icon-ti-ti-menu-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
            </svg> </button>
        <h1 class="navbar-brand navbar-brand-autodark me-4">
            <a href="{{ route('dashboard') }}">
                <img src="{{ asset('backend/images/logo/logo.svg') }}" style="max-height: 32px; height: auto;"
                    alt="Botble Technologies" class="navbar-brand-image">
            </a>
        </h1>
        <div class="flex-row navbar-nav order-md-last">
            <div class="dropdown nav-item">
                <a href="{{ route('profile.indexProfile') }}" class="p-0 nav-link d-flex lh-1 text-reset"
                    data-bs-toggle="dropdown" aria-label="Open user menu">
                    <span class="crop-image-original avatar avatar-sm"
                        style="background-image: url(data:image/jpeg;base64,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)"></span>
                    <div class="d-none d-xl-block ps-2">
                        <div>Conor Smith</div>
                        <div class="mt-1 small text-muted"><span class="__cf_email__"
                                data-cfemail="0e787b62627c676d664e6a676d6567607d6160206d6163">aguspinjol004@email.com</span>
                        </div>
                    </div>
                </a>

                <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-end">
                    <a class="dropdown-item" href="{{ route('profile.indexProfile') }}">
                        <svg class="icon dropdown-item-icon svg-icon-ti-ti-user" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                        Profile
                    </a>
                    <a class="dropdown-item" href="https://cms.botble.com/admin/logout">
                        <svg class="icon dropdown-item-icon svg-icon-ti-ti-logout" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                            <path d="M9 12h12l-3 -3" />
                            <path d="M18 15l3 -3" />
                        </svg>
                        Logout
                    </a>
                </div>
            </div>
        </div>
        <div class="collapse navbar-collapse" id="navbar-menu"></div>
    </div>
</header>
