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
            <div class="d-flex align-items-center me-3">
                <div class="">
                    <label class="form-label sr-only" for="global-search-input">
                        Search
                    </label>
                    <div class="input-group input-group-flat">
                        <input class="form-control" type="text" name="keyword" id="global-search-input"
                            placeholder="Search" tabindex="0" data-bb-toggle="gs-navbar-input" autocomplete="off" />
                        <div class="input-group-text">
                            <kbd>ctrl/cmd + k</kbd>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-none d-md-flex me-2">
                <div class="nav-item d-none d-md-flex me-2">
                    <a class="px-0 nav-link" data-bs-toggle="offcanvas" href="#notification-sidebar" role="button"
                        aria-controls="notification-sidebar">
                        <svg class="icon  svg-icon-ti-ti-bell" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        </svg> <span class="badge bg-blue text-blue-fg badge-pill notification-count">0</span>
                    </a>
                </div>
                <div class="nav-item dropdown d-none d-md-flex me-2">
                    <button class="nav-link px-0" data-bs-toggle="dropdown" type="button" aria-label="Show contacts"
                        tabindex="-1">
                        <svg class="icon  svg-icon-ti-ti-mail" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                            <path d="M3 7l9 6l9 -6" />
                        </svg> <span class="badge bg-red text-red-fg badge-pill">3</span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">
                                    You have <span class="bold">3</span> New Messages
                                </h4>
                                <div class="card-actions"><a href="https://cms.botble.com/admin/contacts">View
                                        all</a></div>
                            </div>
                            <div class="list-group list-group-flush list-group-hoverable overflow-auto"
                                style="max-height: 35rem">
                                <a href="https://cms.botble.com/admin/contacts/edit/4" class="text-decoration-none">
                                    <div class="list-group-item">
                                        <div class="row">
                                            <div class="col-auto">
                                                <img class="avatar"
                                                    src="data:image/jpeg;base64,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"
                                                    alt="Raphaelle Upton">
                                            </div>
                                            <div class="col align-items-center">
                                                <p class="text-truncate mb-2">
                                                    Raphaelle Upton
                                                    <time class="small text-muted" title="2024-09-01 10:08:32"
                                                        datetime="2024-09-01 10:08:32">
                                                        2024-09-01 10:08:32
                                                    </time>
                                                </p>
                                                <p class="text-secondary text-truncate mt-n1 mb-0">
                                                    530-529-3969 - <span class="__cf_email__"
                                                        data-cfemail="d0b1a2b5bebeb5a290b5a8b1bda0bcb5febfa2b7">[email&#160;protected]</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://cms.botble.com/admin/contacts/edit/8" class="text-decoration-none">
                                    <div class="list-group-item">
                                        <div class="row">
                                            <div class="col-auto">
                                                <img class="avatar"
                                                    src="data:image/jpeg;base64,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"
                                                    alt="Gerry Larson">
                                            </div>
                                            <div class="col align-items-center">
                                                <p class="text-truncate mb-2">
                                                    Gerry Larson
                                                    <time class="small text-muted" title="2024-09-01 10:08:32"
                                                        datetime="2024-09-01 10:08:32">
                                                        2024-09-01 10:08:32
                                                    </time>
                                                </p>
                                                <p class="text-secondary text-truncate mt-n1 mb-0">
                                                    814-376-5924 - <span class="__cf_email__"
                                                        data-cfemail="fe97939f9097c8cdbe9b869f938e929bd09d9193">[email&#160;protected]</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://cms.botble.com/admin/contacts/edit/10" class="text-decoration-none">
                                    <div class="list-group-item">
                                        <div class="row">
                                            <div class="col-auto">
                                                <img class="avatar"
                                                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAD6APoDASIAAhEBAxEB/8QAGwABAAMAAwEAAAAAAAAAAAAAAAUGBwIDBAH/xABDEAEAAQMCAgQJCAUNAAAAAAAAAQIDBAURBjESIUGBBxMUIlFhcZGhFkJDYnKxwdEVMlJV4RcjJDNjgpOissLi8PH/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgQFAwEG/8QAJxEBAAICAgIBAwQDAAAAAAAAAAECAwQRIRIxQSIyUQUTYXEUQoH/2gAMAwEAAhEDEQA/AO8BhvmgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHdi4t7NybeNj25uXbk7U0w99kRz1DpTGncL6vqcRXZxZotTyuXfNp/Oe5e9A4Pw9KopvZVNOTmc+lVG9NE/Vj8fuWVcx6nPd2jh0OY5ySoON4Oa5iJytRppn9m1b3+MzH3PfT4PNMiPPy8ufZNMf7VvFmNfHHwtxqYY/1U654O9OmP5vMyqZ+t0Z/CEZl+DvLtxM4mbavfVuUzRP4tEHk6+OfgtqYZ+GKahpOfpdfRzMau1v1RVMb0z7JjqeJut6zayLVVq9bouW6o2qprjeJ7mfcTcGeSW687TKaqrMddyxzmiPTHphVy6s1jmvcKOfSmkeVO4UsBUUQAAAAAAAAAAAAAAAAAAABpfA2i04enfpG7T/AEjJjzN/m0dnv5+5m1qibt2i3HOqqKY7252bVFixbs242ot0xTTHoiI2XNSkTabT8L+hji1ptPw5g8Gs6hGlaPk5u0TNunzYntqmdo+MwvzMRHMtW0xWJmX3UdYwNKoirNyaLUzG8U86p9kR1oG54QdJoqmKLGXX64opiPjLOMnJvZmTXkZFyq5drneqqrtdTPtt2mfpZN9+8z9PUNQxuPdGv1RTc8oseu5b3j/LMrHj5NjLs03se7RdtVcqqJ3iWGJnhvXLui6lRV058luVRF6js29PthLHtzzxdPDvW8uMnpr4R1xvAvtRlnGWh06TqUXseno4uTvVTEcqKu2PZ2x/BWmscZ4cZfDWRVtvXYmLtPdO0/CZZOy9ikUv18sPbxRjydepAFdWAAAAAAAAAAAAAAAAAAduNci1lWbk8qK6ap7pbnExMbxyYO13hTVKdU0KzM1b3rMRaux27xynvjr967p27mrR/T7xEzX8ptEcT4N3UeHcuxZiaru0V00x29GYnb4JcXrV8omJaVqxas1n5YPynYajrvBmJqtdeRjVeTZVXXMxG9Fc+uOyfXCiajw1qulzVN/Fqqtx9La86n4cu/ZlZMF6f0xMutkx+45hEgOKuvuN4QbFnFs2q8G7VVRRTTNXTjrmI5u3+UbG/d93/Ehnosf5OT8rUbmaPledQ48xs3TcrFjAu0zetVW4qmuOqZiY3UYHO+S1+7OOTLfJPNgBzcwAAAAAAAAAAAAAAAAABKaDrd/Q9Qi/bjp2qvNu29/1o/P0IsSrM1nmHtbTWeY9tu0/UcXVMSnJxLsV26ufppn0THZL1MT03VMzScnx+Hem3V86OdNUeiY7V/0njvBy4pt6hT5Le5dLnRPfzjv97RxbNbdW6lr4Nyl44v1K2jhau279uLlm5Rct1cqqJ3ie9zWV1GZ3D+lalvOThWprn59MdGr3wqupeDyYia9Nyul/ZX/wqj8l9HK+Gl/cOOTXx5PuhiOdp2Zpt7xWZj12a+zpR1T7J5T3PK3LKxMfOx6rGVZou2qudNUb/wDjOeJODrmmU15mD0ruJHXVRPXVb/OP++tSy6007r3DNz6dsceVe4VMBVUgAAAAAAAAAAAAAAAAAAAAevC0zN1Ka4w8au9NG3S6PZvy+57Pkxrf7tv+6Eopae4hKMd5jmIRAl/kxrf7tv8AuhH5eHkYF+bGVZqtXYiJ6NXPYmto9wTS1e5hzw9RzNOudPEybtme3oVdU+2OUrPgeEHNs7U52PbyKf26PMq/L4QpwlTJen2ylTNkx/bLXdM4r0nU5iijI8Tdn6O95s908p96bYOtPDHFeTp2Taxcy7Vdwqpineud5teuJ9HqW8W3zPF1/Dvcz45I/wCtPfJiJiYmN4nnEvoutJlXF+hU6PqUXbFO2Lkb1URHzKu2n8v4K41njLDpy+Gsidt67Exdp7p6/hMsmZexjil+mHt4ox5OvUgCurAAAAAAAAAAAAAAAAAALn4O78U6nmWJnruWoqj+7P8AyaKxnQdR/ROtY2XO/Qpq2ubfsz1T+fc2WmqmuiK6ZiqmqN4mOUw0tS3NOPw2NC8Tj8fw+s48IWJVb1XHy4jzLtrob/WpmfwmGjvBq+lY+s6fXiZG8RPXRXHOirsmHXNj86TEO2xi/dxzWPbFhN6nwrqumXKt8eq/Zjldsx0o29cc470LMTTMxMTEx2SyrVms8TDDtS1J4tHD4OVu3Xdrii3RVXVPKKY3lbeHODcrIybeVqVqbONRMVeKrjaq56pjsj2vaY7XniEseK2SeKw0LB6fkGN4zfp+Kp6W/p263eDZh9BEcQj9d2+T+o78vJrn+mWLtZ4yzKcThrIp32rvzFqmPTvPX8IlkzP25+qIZX6hMTeI/gAU1AAAAAAAAAAAAAAAAAAAXvg3iii3bo0rPuRTEdVi7VPV9mfw9yiDpjyTjtzDpiy2xW8qt4GX6HxpmaZTTj5UTlY0dUbz59Eeqe32SvWncSaTqcRFjLopuT9Hd82r48+7dpY89L/22cWzjyep4lLOFdq3c/Xt01fajdzHZYcaLdFuNqKKaY9UbOQAPlVVNFFVddUU00xvMzO0RCK1LiTStLpnx+VTVcj6K3PSq90cu/Zn2v8AFuXrUTYtx5Pib/1cT11/an8HHJnrSP5Vs2zTHH5k4s16Na1GKLEz5JY3pt/WntqV4GXa02nyli3vN7TawAiiAAAAAAAAAAAAAAAAAAAAAA9mNq2o4cRGPnZFqmPm03J293JIUcX69RG0ahVP2rdE/fCDE4vaPUpxkvX1Mpuvi/Xq42nUKu63RH3Q8OTq+pZkTGRnZFymfm1XJ293J4gm9p9yTkvPuZAEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q=="
                                                    alt="Stephany Bode Jr.">
                                            </div>
                                            <div class="col align-items-center">
                                                <p class="text-truncate mb-2">
                                                    Stephany Bode Jr.
                                                    <time class="small text-muted" title="2024-09-01 10:08:32"
                                                        datetime="2024-09-01 10:08:32">
                                                        2024-09-01 10:08:32
                                                    </time>
                                                </p>
                                                <p class="text-secondary text-truncate mt-n1 mb-0">
                                                    618-376-2147 - <span class="__cf_email__"
                                                        data-cfemail="94f1f8f9fde6f5bae3f5e0f1e6e7d4f1ecf5f9e4f8f1bafbe6f3">[email&#160;protected]</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="dropdown nav-item">
                <a href="https://cms.botble.com/admin/system/users/profile/1"
                    class="p-0 nav-link d-flex lh-1 text-reset" data-bs-toggle="dropdown"
                    aria-label="Open user menu">
                    <span class="crop-image-original avatar avatar-sm"
                        style="background-image: url(data:image/jpeg;base64,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)"></span>
                    <div class="d-none d-xl-block ps-2">
                        <div>Conor Smith</div>
                        <div class="mt-1 small text-muted"><span class="__cf_email__"
                                data-cfemail="0e787b62627c676d664e6a676d6567607d6160206d6163">[email&#160;protected]</span>
                        </div>
                    </div>
                </a>

                <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-end">
                    <a class="dropdown-item" href="https://cms.botble.com/admin/system/users/profile/1">
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
