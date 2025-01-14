<aside class="navbar navbar-vertical navbar-expand-lg flex-auto" data-bs-theme="dark" id="sidebar-menu-main">
    <div class="container-xl">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar-menu"
            aria-controls="sidebar-menu" aria-expanded="false" aria-label="Toggle navigation">
            <svg class="icon svg-icon-ti-ti-menu-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
            </svg>
        </button>
        <h2 class="d-block d-lg-none navbar-brand navbar-brand-autodark">
            <a href="{{ route('dashboard') }}">
                <img src="{{ asset('backend/images/logo/logo.svg') }}" style="max-height: 32px; height: auto;"
                    alt="Botble Technologies" class="navbar-brand-image">
            </a>
        </h2>
        <div class="navbar-nav flex-row d-lg-none">
            <div class="dropdown nav-item">
                <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown"
                    aria-label="Open user menu">
                    <span class="crop-image-original avatar avatar-sm"
                        style="background-image: url(data:image/jpeg;base64,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)"></span>
                    <div class="d-none d-xl-block ps-2">
                        <div>Conor Smith</div>
                        <div class="mt-1 small text-muted"><span class="__cf_email__"
                                data-cfemail="c5b3b0a9a9b7aca6ad85a1aca6aeacabb6aaabeba6aaa8">[email&#160;protected]</span>
                        </div>
                    </div>
                </a>
                <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-end">
                    <a class="dropdown-item" href="#">
                        <svg class="icon dropdown-item-icon svg-icon-ti-ti-user" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                        Profile
                    </a>
                    <a class="dropdown-item" href="#">
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
        <div class="collapse navbar-collapse" id="sidebar-menu">
            <ul class="navbar-nav ">
                <li class="nav-item {{ Request::is('dashboard') ? 'active' : '' }}">
                    <a class="nav-link nav-priority--9999 {{ Request::is('dashboard') ? 'active' : '' }}"
                        href="{{ route('dashboard') }}" id="cms-core-dashboard" title="Dashboard">
                        <span class="nav-link-icon d-md-none d-lg-inline-block" title="Dashboard">
                            <svg class="icon svg-icon-ti-ti-home" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                            </svg>
                        </span>
                        <span class="nav-link-title text-truncate">
                            Dashboard
                        </span>
                    </a>
                </li>
                <li class="nav-item dropdown {{ Request::is('dashboard/blog*') ? 'active' : '' }}">
                    <a class="nav-link dropdown-toggle nav-priority-3" href="#cms-plugins-blog" id="cms-plugins-blog"
                        data-bs-toggle="dropdown" data-bs-auto-close="false" role="button" aria-expanded="false"
                        title="Blog">
                        <span class="nav-link-icon d-md-none d-lg-inline-block" title="Blog">
                            <svg class="icon svg-icon-ti-ti-article" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                <path d="M7 8h10" />
                                <path d="M7 12h10" />
                                <path d="M7 16h10" />
                            </svg>
                        </span>
                        <span class="nav-link-title text-truncate">
                            Blog
                        </span>
                    </a>
                    <div
                        class="dropdown-menu animate slideIn dropdown-menu-start {{ Request::is('dashboard/blog*') ? 'show' : '' }}">
                        <a class="dropdown-item nav-priority-10 {{ Request::is('dashboard/blog/post*') ? 'active' : '' }}"
                            href="{{ route('blog.post') }}" id="cms-plugins-blog-post" title="Posts">
                            <span class="nav-link-icon d-md-none d-lg-inline-block" title="Posts">
                                <svg class="icon svg-icon-ti-ti-file-text" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                    <path d="M9 9l1 0" />
                                    <path d="M9 13l6 0" />
                                    <path d="M9 17l6 0" />
                                </svg>
                            </span>
                            <span class="nav-link-title text-truncate">
                                Posts
                            </span>
                        </a>
                        <a class="dropdown-item nav-priority-20 {{ Request::is('dashboard/blog/category*') ? 'active' : '' }}"
                            href="{{ route('category.create') }}" id="cms-plugins-blog-categories" title="Categories">
                            <span class="nav-link-icon d-md-none d-lg-inline-block" title="Categories">
                                <svg class="icon svg-icon-ti-ti-folder" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
                                </svg>
                            </span>
                            <span class="nav-link-title text-truncate">
                                Categories
                            </span>
                        </a>
                        <a class="dropdown-item nav-priority-30 {{ Request::is('dashboard/blog/tags*') ? 'active' : '' }}"
                            href="{{ route('tags.index') }}" id="cms-plugins-blog-tags" title="Tags">
                            <span class="nav-link-icon d-md-none d-lg-inline-block" title="Tags">
                                <svg class="icon svg-icon-ti-ti-tag" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                    <path
                                        d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" />
                                </svg>
                            </span>
                            <span class="nav-link-title text-truncate">
                                Tags
                            </span>
                        </a>
                    </div>
                </li>
                <li
                    class="nav-item {{ Request::is('dashboard/member') || Request::is('dashboard/member/create') || Request::is('dashboard/member/edit/*') ? 'active' : '' }}">
                    <a class="nav-link nav-priority-50" href="{{ route('member.index') }}" id="cms-core-member"
                        title="Members">
                        <span class="nav-link-icon d-md-none d-lg-inline-block" title="Members">
                            <svg class="icon svg-icon-ti-ti-users" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                            </svg>
                        </span>
                        <span class="nav-link-title text-truncate">
                            Members
                        </span>
                    </a>
                </li>
                <li class="nav-item {{ Request::is('dashboard/media') ? 'active' : '' }}">
                    <a class="nav-link nav-priority-999" href="{{ route('media.index') }}" id="cms-core-media"
                        title="Media">
                        <span class="nav-link-icon d-md-none d-lg-inline-block" title="Media">
                            <svg class="icon svg-icon-ti-ti-folder" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
                            </svg>
                        </span>
                        <span class="nav-link-title text-truncate">
                            Media
                        </span>
                    </a>
                </li>
                <li class="nav-item dropdown {{ Request::is('dashboard/export*') ? 'active' : '' }}">
                    <a class="nav-link dropdown-toggle nav-priority-3" href="#cms-plugins-blog" id="cms-plugins-blog"
                        data-bs-toggle="dropdown" data-bs-auto-close="false" role="button" aria-expanded="false"
                        title="Blog">
                        <span class="nav-link-icon d-md-none d-lg-inline-block" title="Media">
                            <svg class="icon svg-icon-ti-ti-package-import" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5" />
                                <path d="M12 12l8 -4.5" />
                                <path d="M12 12v9" />
                                <path d="M12 12l-8 -4.5" />
                                <path d="M22 18h-7" />
                                <path d="M18 15l-3 3l3 3" />
                            </svg>
                        </span>
                        <span class="nav-link-title text-truncate">
                            Export Data
                        </span>
                    </a>
                    <div
                        class="dropdown-menu animate slideIn dropdown-menu-start {{ Request::is('dashboard/export*') ? 'show' : '' }}">
                        <a class="dropdown-item nav-priority-10 {{ Request::is('dashboard/export/export-post*') ? 'active' : '' }}"
                            href="{{ route('dashboard.exportPost') }}" id="cms-plugins-blog-post" title="Posts">
                            <span class="nav-link-icon d-md-none d-lg-inline-block" title="Widgets">
                                <svg class="icon  svg-icon-ti-ti-layout" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                    <path
                                        d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                    <path
                                        d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                </svg> </span>
                            <span class="nav-link-title text-truncate">
                                Posts Data
                            </span>
                        </a>
                        <a class="dropdown-item nav-priority-20 {{ Request::is('dashboard/export/export-report*') ? 'active' : '' }}"
                            href="{{ route('dashboard.exportReport') }}" id="cms-plugins-blog-categories"
                            title="Categories">
                            <span class="nav-link-icon d-md-none d-lg-inline-block" title="Theme Options">
                                <svg class="icon  svg-icon-ti-ti-list-tree" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 6h11" />
                                    <path d="M12 12h8" />
                                    <path d="M15 18h5" />
                                    <path d="M5 6v.01" />
                                    <path d="M8 12v.01" />
                                    <path d="M11 18v.01" />
                                </svg> </span>
                            <span class="nav-link-title text-truncate">
                                Report
                            </span>
                        </a>
                    </div>
                </li>
                <li class="nav-item dropdown {{ Request::is('dashboard/settings*') ? 'active' : '' }}">
                    <a class="nav-link dropdown-toggle nav-priority-3" href="#cms-plugins-blog" id="cms-plugins-blog"
                        data-bs-toggle="dropdown" data-bs-auto-close="false" role="button" aria-expanded="false"
                        title="Blog">
                        <span class="nav-link-icon d-md-none d-lg-inline-block" title="Settings">
                            <svg class="icon svg-icon-ti-ti-settings" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            </svg>
                        </span>
                        <span class="nav-link-title text-truncate">
                            Settings
                        </span>
                    </a>
                    <div
                        class="dropdown-menu animate slideIn dropdown-menu-start {{ Request::is('dashboard/settings*') ? 'show' : '' }}">
                        <a class="dropdown-item nav-priority-10 {{ Request::is('dashboard/settings/google-tag*') ? 'active' : '' }}"
                            href="{{ route('settings.googletag') }}" id="cms-plugins-blog-post" title="Posts">
                            <span class="nav-link-icon d-md-none d-lg-inline-block" title="Posts">
                                <svg class="icon  svg-icon-ti-ti-world" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                    <path d="M3.6 9h16.8" />
                                    <path d="M3.6 15h16.8" />
                                    <path d="M11.5 3a17 17 0 0 0 0 18" />
                                    <path d="M12.5 3a17 17 0 0 1 0 18" />
                                </svg>
                            </span>
                            <span class="nav-link-title text-truncate">
                                Google Tag
                            </span>
                        </a>
                        <a class="dropdown-item nav-priority-20 {{ Request::is('dashboard/settings/annalyics*') ? 'active' : '' }}"
                            href="{{ route('settings.annalytic') }}" id="cms-plugins-blog-categories"
                            title="Categories">
                            <span class="nav-link-icon d-md-none d-lg-inline-block" title="Categories">
                                <svg class="icon  svg-icon-ti-ti-brand-google-analytics"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M10 9m0 1.105a1.105 1.105 0 0 1 1.105 -1.105h1.79a1.105 1.105 0 0 1 1.105 1.105v9.79a1.105 1.105 0 0 1 -1.105 1.105h-1.79a1.105 1.105 0 0 1 -1.105 -1.105z" />
                                    <path
                                        d="M17 3m0 1.105a1.105 1.105 0 0 1 1.105 -1.105h1.79a1.105 1.105 0 0 1 1.105 1.105v15.79a1.105 1.105 0 0 1 -1.105 1.105h-1.79a1.105 1.105 0 0 1 -1.105 -1.105z" />
                                    <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                </svg>
                            </span>
                            <span class="nav-link-title text-truncate">
                                Annalyics
                            </span>
                        </a>
                        <a class="dropdown-item nav-priority-20 {{ Request::is('dashboard/settings/member-dashboard*') ? 'active' : '' }}"
                            href="{{ route('settings.memberDashboard') }}" id="cms-plugins-blog-categories"
                            title="Categories">
                            <span class="nav-link-icon d-md-none d-lg-inline-block" title="Categories">
                                <svg class="icon svg-icon-ti-ti-user-shield" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h2" />
                                    <path
                                        d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" />
                                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                </svg>
                            </span>
                            <span class="nav-link-title text-truncate">
                                Member Dashboard
                            </span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</aside>
