<!DOCTYPE html>
<html lang="en">

<head>
    @include('backend.master.master-meta')
    @include('backend.master.master-css')
</head>

<body class="page-sidebar-closed-hide-logo page-content-white page-container-bg-solid">
    <div id="app">
        <div class="row g-0 flex-fill vh-100">
            <div
                class="col-12 col-lg-6 col-xl-4 border-top-wide border-primary d-flex flex-column justify-content-center">
                <div class="container container-tight my-5 px-lg-5">
                    <div class="text-center mb-4">
                        <a href="#" class="navbar-brand">
                            <img src="{{ asset('backend/images/logo/favicon.png') }}"
                                style="max-height: 50px; max-width: 100%;" alt="Botble Technologies">
                        </a>
                    </div>
                    <form action="#" accept-charset="UTF-8"
                        id="botble-a-c-l-forms-auth-login-form" class="js-base-form dirty-check">
                        <input name="_token" type="hidden" value="QJOvzLgmrWSCHuSY1tXGUoKRFpDO1tZdCxz1ZouT">
                        <div class="form-body">
                            <h2 class="h3 text-center mb-3">Sign In Below</h2>
                            <div class="mb-3 position-relative">
                                <label class="form-label form-label required" for="username">
                                    Email/Username
                                </label>
                                <input class="form-control" tabindex="1"
                                    placeholder="Enter your username or email address" required="required"
                                    name="username" type="text" value="admin">
                            </div>
                            <div class="mb-3 position-relative">
                                <label class="form-label form-label required" for="password">
                                    Password
                                    <span class="form-label-description">
                                        <a href="#" tabindex="5"
                                            title="Forgot Password">Lost your password?</a>
                                    </span>
                                </label>
                                <div class="input-group">
                                    <input type="password" name="password" id="password" value="12345678"
                                        class="form-control" tabindex="2" placeholder="Enter your password"
                                        required="required" data-bb-password>
                                    <span class="input-password-toggle" data-bb-toggle-password>
                                        <svg class="icon  svg-icon-ti-ti-eye" xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                            <path
                                                d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <label class="form-check">
                                <input type="checkbox" id="remember" name="remember" class="form-check-input"
                                    tabindex="3" value="1" checked>
                                <span class="form-check-label">
                                    Remember me?
                                </span>
                            </label>
                            <div class="form-footer">
                                <button class="btn btn-primary  w-full" type="submit">
                                    <svg class="icon icon-left svg-icon-ti-ti-login-2"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
                                        <path d="M3 12h13l-3 -3" />
                                        <path d="M13 15l3 -3" />
                                    </svg>
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="position-relative col-12 col-lg-6 col-xl-8 d-none d-lg-block">
                <div class="bg-cover bg-white h-100 min-vh-100"
                    style="background-image: url('{{ asset('backend/images/indopop.id.jpg') }}')">
                </div>
                <div class="end-0 bottom-0 position-absolute">
                    <div class="text-white me-5 mb-4">
                        <h1 class="mb-1">KBN Technologies</h1>
                        <p>Copyright {{ date('Y') }} © KBN Technologies</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include('backend.master.master-js')
    <script>
        document.querySelectorAll('[data-bb-toggle-password]').forEach(button => {
            button.addEventListener('click', () => {
                const passwordField = button.parentElement.querySelector('[data-bb-password]');
                const icon = button.querySelector('svg');

                if (passwordField.getAttribute('type') === 'password') {
                    passwordField.setAttribute('type', 'text');
                    icon.setAttribute('class', 'icon icon-tabler icon-tabler-eye-off');
                    icon.innerHTML = `
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 3l18 18"></path>
                        <path d="M10.585 10.585a2 2 0 0 0 2.83 2.83"></path>
                        <path d="M9.878 15.121c-2.735 -.948 -4.878 -2.735 -4.878 -3.121c0 -.386 2.143 -2.173 4.878 -3.121m3.5 -.621c1.562 .434 3.006 1.184 4.126 2.106c.956 .797 1.874 1.803 2.496 2.635"></path>
                        <path d="M14.121 14.121c-.949 2.735 -2.735 4.878 -3.121 4.878c-.386 0 -2.173 -2.143 -3.121 -4.878m-.621 -3.5c.434 -1.562 1.184 -3.006 2.106 -4.126c.797 -.956 1.803 -1.874 2.635 -2.496"></path>
                        `;
                } else {
                    passwordField.setAttribute('type', 'password');
                    icon.setAttribute('class', 'icon icon-tabler icon-tabler-eye');
                    icon.innerHTML = `
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="12" cy="12" r="2"></circle>
                        <path d="M22 12c0 3.866 -5.373 7 -10 7s-10 -3.134 -10 -7 5.373 -7 10 -7 10 3.134 10 7"></path>
                        `;
                }
            });
        });
    </script>
</body>

</html>
