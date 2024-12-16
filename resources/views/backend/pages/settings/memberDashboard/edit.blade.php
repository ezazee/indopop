@extends('backend.master.app')
@section('content')
    @include('backend.components.breadcrumb')
    <div class="page-body page-content">
        <div class="container-xl">
            <div class="user-profile">
                <div class="card">
                    <div class="card-header">
                        <ul data-bs-toggle="tabs" class="nav nav-tabs card-header-tabs">
                            <li class="nav-item">
                                <a href="#profile" class="nav-link active" data-bs-toggle="tab">
                                    <svg class="icon me-2 svg-icon-ti-ti-user" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                    </svg>
                                    User profile
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#avatar" class="nav-link" data-bs-toggle="tab">
                                    <svg class="icon me-2 svg-icon-ti-ti-camera-selfie" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                                        <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                                        <path d="M15 11l.01 0" />
                                        <path d="M9 11l.01 0" />
                                    </svg>
                                    Avatar
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#change-password" class="nav-link" data-bs-toggle="tab">
                                    <svg class="icon me-2 svg-icon-ti-ti-lock" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                                        <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                                        <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                                    </svg>
                                    Change password
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content">
                            <div class="tab-pane active show" id="profile">
                                <form method="POST" action="https://cms.botble.com/admin/system/users/profile/1"
                                    accept-charset="UTF-8" id="profile-form" class="js-base-form dirty-check">
                                    <input name="_method" type="hidden" value="PUT"><input name="_token" type="hidden"
                                        value="U1lk1x2RAY1jBoJbF9pPgEkmfRrsgMp78U2kvbE6">
                                    <div class="row row-cols-lg-2">
                                        <div class="mb-3 position-relative">
                                            <label class="form-label form-label required" for="first_name">
                                                First Name
                                            </label>
                                            <input class="form-control" data-counter="30" required="required"
                                                name="first_name" type="text" value="Conor">
                                        </div>
                                        <div class="mb-3 position-relative">
                                            <label class="form-label form-label required" for="last_name">
                                                Last Name
                                            </label>
                                            <input class="form-control" data-counter="30" required="required"
                                                name="last_name" type="text" value="Smith">
                                        </div>
                                        <div class="mb-3 position-relative">
                                            <label class="form-label form-label required" for="username">
                                                Username
                                            </label>
                                            <input class="form-control" data-counter="30" required="required"
                                                name="username" type="text" value="admin">
                                        </div>
                                        <div class="mb-3 position-relative">
                                            <label class="form-label form-label required" for="email">
                                                Email
                                            </label>
                                            <input class="form-control" data-counter="60"
                                                placeholder="e.g: example@domain.com" required="required" name="email"
                                                type="text" value="vullrich@dickinson.com">
                                        </div>
                                    </div>
                                    <div class="card-footer bg-transparent mt-3 p-0 pt-3">
                                        <div class="btn-list justify-content-end">
                                            <button class="btn btn-primary" type="submit">
                                                <svg class="icon icon-left svg-icon-ti-ti-circle-check"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                    <path d="M9 12l2 2l4 -4" />
                                                </svg>
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="tab-pane" id="avatar">
                                <div class="crop-image-container">
                                    <div class="mb-3 position-relative">
                                        <label class="form-label">
                                            Avatar
                                        </label>
                                        <div class="avatar-view rounded-pill overflow-hidden">
                                            <img class="image-preview crop-image-original avatar avatar-2xl rounded-pill"
                                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAD6APoDASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAUGBwQDAQL/xABFEAEAAgEDAQIKBgYFDQAAAAAAAQIDBAURBjFRBxITISJBYXGBoTJSkbHB0RUXVXKSshQjYpPhNDU2QkNTVGRzdILC0v/EABoBAQEBAQEBAQAAAAAAAAAAAAAFBAIDAQb/xAAnEQEAAgIBAwIGAwAAAAAAAAAAAQIDBBESITEiQQUyM0JRYSNxgf/aAAwDAQACEQMRAD8A9wEN+aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIiZmIiOZn1QAk9s6f3Pd/PpdNacf+9v6NPtnt+C29N9E0pSms3anjXnz0089lf3u+fZ9q71rWlYrWIrWI4iIjiIbMWrNo5u34NGbR1ZOyh6TwdTxE6zcOJ9dcNPxn8klTwf7RWPSy6u0+29f/AJWsao18cezdXVwx9qp38H202j0c+rrP79Z/9UbqvB1eImdHuFbT6q5qcfOOfuX4J18c+xbUwz9rGty2Dctp5nV6a0Y+eIy19Ks/GOz4oxu9q1vWa2iLVmOJiY5iVH6k6Kpal9ZtNPFvHnvp47Lfu90+z7GXLqzWOad2HPozWOqndQAmJiZiY4mBjYAAAAAAAAAAAAAAAAAAAABeehun65J/S+qpzWs8aesx2zHbb8IVDbtFfcdx0+jx/Sy3ivPdHrn4R521afBj0umx6fDXxceOsVrHdENerj6p6p9m7Rwxe3XPiHoDg3jdMWz7Zl1mXz+L5qU5+laeyFCZiI5lWtMVjmXvrNfpNvw+W1eox4aeqbT2+6PWr+br7ZsVpikanLHfTHER85hnO4bjqt01dtTq8s3vbsj1VjuiPVDlYL7dufSlZN+8z6I7NRw9ebLltEXnUYY774+fumU/o9fpNww+V0mox5qeuaTzx749TD3Vt246ra9ZTU6XJNL17Y9Vo7pj1wU27c+qDHv2ifXHZtw49q3HFuu2YNbi81clfPX6s9kx9rsb4mJjmFWJiY5hnnXWw10+SN101OMeS3GesR2Wnst8fv8AepTcNfo8e4aDPpMv0MtJrM93dPw7WJZsV8GbJhyRxfHaa2jumJ4lO2sfTbqj3SN3FFL9UeJfgBlYgAAAAAAAAAAAAAAAAAFw8HujjNu2o1do5jBj4r7LW/wiftaQqHg8wxTZtTm48+TP4vwisfnK3qutXjHC5p16cMfsZ14QtfOTcNPoaz6GKnlLR/an/CPm0VkHVWac/U+vtM9mTxP4YiPwc7VuMfH5ee9bjFx+UMAmI4ADQvB1qpvotbpZnzY71vX/AMomJ/lXZh2n1mq0c2nTanNgm30pxXmvPv4e/wCmt1/aet/v7fm2YtqKUiswoYd2MdIrMeG1Mj6u08abqjWREeje0ZI+MRM/Plw/prdf2nrf7+35ubPqM+qyeU1GbJmycceNktNp498uc2eMleOHGztVzV6Yh5AMrEAAAAAAAAAAAAAAAAAA1PoSvHTNJ78t5+ayq30N/oxi/wCpf71kWMP04X9f6Vf6GLb5PO/7jP8AzOT+aW0sV3r/AD9uP/dZP5pZ9z5YZfiHyw4QE9KAAAAAAAAAAAAAAAAAAAAAAAAAAah0DeL9NzX6me1Z+yJ/FaFI8HOo50mu03P0b1yRHvjif5YXdXwTzjhe1Z5w1GMb/TxOotxif+IvP22mWzsn6z086fqjUzxxXLFclfjHE/OJeO3HoiWf4hH8cT+1fATkkAAE30/05m6g/pHk89MMYfF5m1Znnnn8k1+rnVftDD/BL1rhvaOYh7U18t46qx2UoXX9XOq/aGH+CVZ3jbLbPuWTRXy1y2pETNqxxHnjl8tivSObQ+XwZMcc2hwAPN5AAAAAAAAAAAAAAAAAALH0Tr40XUWPHaeKams4p9/bHzjj4tVYTS9sWSuSlpresxNZj1TDZNi3XHvG04dXWY8eY8XLWP8AVvHbH4/Fv1L9poqaGTtOOUkpXhA2u2bS4Nyx15nD/V5ePqzPmn4T966vxlxY8+G+LLSL47xNbVnsmJaslOus1bcuOMlJrLChbt76G1ely3zbbWdRp588Y+fTp7Pb96sZdFq8FvFy6XNjtHqvjmEq+O1J4mEK+K+OeLQ8B1Ydu12ptFcGj1GSZ+rjmVq2LoXUZc1M+6xGLDWefIxPNr+/jsj5+4pjteeIgx4b5J4rCd6F2+2j2Hy+SvF9Tfykc/V7I/Gfis75WtaVitYiKxHERHZEPqtSvRWKr2OkUpFY9hjXUOrjW9Q67PWeazlmtZ74r6Mfc0/qTda7RsufPFuM1o8nij+1Pr+Hb8GOse5fxVP+IZPFP9AGFNAAAAAAAAAAAAAAAAAAE301v+TYtf41vGtpcvEZaR8rR7YQg6raazzDql5pbqr5bpp9Rh1WnpnwZK5MV45ras+aYejH9j6j1uxZZ8lMZNPaeb4bz5p9sd0tF2vqvat0rEVzxgzT/ss0+LPPsnslTxbFbx37Ss4NqmSOJ7SmwHu1APkzFYmZmIiO2ZB9eWp1OHR6a+o1GSuPFSObWt6kJunWG1bbW1a5o1WaOzHhnmPjbshnu9dQa3fM3OotFMNZ9DDT6MfnPtZ8uxWkdu8smbbpjjiO8v31HvuTfdw8pETXTY+a4aT3d8+2UMCba02nmUe9pvabW8gDlyAAAAAAAAAAAAAAAAAAAAAA7NLuu4aKONNrc+Kv1a5J4+zsSFer9+pHEbhb446T98IMdxe0eJdxkvXxMpq/Vu+5I4tuN4/dpWv3QjtTuGt1n+U6vPmjuyZJmHMPk3tPmXycl7eZAHLkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k="
                                                alt="Avatar" style="--bb-avatar-size: 10rem;" />
                                            <div class="backdrop"></div>
                                            <div class="action">
                                                <a href="javascript:void(0);" class="text-decoration-none text-white"
                                                    data-bs-toggle="modal" data-bs-target="#avatar_file-modal">
                                                    <svg class="icon  svg-icon-ti-ti-edit"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path
                                                            d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                                        <path
                                                            d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                                        <path d="M16 5l3 3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <a href="javascript:void(0);" data-bs-toggle="modal"
                                            data-bs-target="#avatar_file-modal" class="d-block mt-1">
                                            Choose image
                                        </a>
                                    </div>
                                    <div class="modal fade modal-blur modal fade modal-blur crop-image-modal"
                                        id="avatar_file-modal" tabindex="-1" role="dialog" aria-hidden="true"
                                        data-select2-dropdown-parent="true">
                                        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Update Avatar</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="row">
                                                        <div class="col-md-8">
                                                            <form
                                                                action="https://cms.botble.com/admin/system/users/modify-profile-image/1">
                                                                <div class="mb-3 position-relative">
                                                                    <label class="form-label" for="avatar_file">
                                                                        Avatar
                                                                    </label>
                                                                    <input class="form-control" type="file"
                                                                        name="avatar_file" id="avatar_file"
                                                                        accept="image/*" />
                                                                </div>
                                                            </form>
                                                            <div class="cropper-image-wrap">
                                                                <img src="" class="cropper-image" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="img-preview preview-lg"></div>
                                                            <div class="img-preview preview-md"></div>
                                                            <div class="img-preview preview-sm"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button class="btn" type="button" data-bs-dismiss="modal">
                                                        Close
                                                    </button>
                                                    <button class="btn btn-primary  ms-auto" type="submit">
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="change-password">
                                <form method="POST" action="https://cms.botble.com/admin/system/users/password/1"
                                    accept-charset="UTF-8" id="password-form" class="js-base-form dirty-check">
                                    <input name="_method" type="hidden" value="PUT"><input name="_token"
                                        type="hidden" value="U1lk1x2RAY1jBoJbF9pPgEkmfRrsgMp78U2kvbE6">
                                    <div class="row row-cols-lg-2">
                                        <div class="col-lg-12">
                                            <div class="mb-3 position-relative">
                                                <label class="form-label form-label required" for="old_password">
                                                    Current Password
                                                </label>
                                                <input class="form-control" data-counter="60" required="required"
                                                    name="old_password" type="password">
                                            </div>
                                        </div>
                                        <div class="mb-3 position-relative">
                                            <label class="form-label form-label required" for="password">
                                                New Password
                                            </label>
                                            <input class="form-control" data-counter="60" required="required"
                                                name="password" type="password">
                                        </div>
                                        <div class="mb-3 position-relative">
                                            <label class="form-label form-label required" for="password_confirmation">
                                                Confirm New Password
                                            </label>
                                            <input class="form-control" data-counter="60" required="required"
                                                name="password_confirmation" type="password">
                                        </div>
                                    </div>
                                    <div class="card-footer bg-transparent mt-3 p-0 pt-3">
                                        <div class="btn-list justify-content-end">
                                            <button class="btn btn-primary" type="submit">
                                                <svg class="icon icon-left svg-icon-ti-ti-circle-check"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                    <path d="M9 12l2 2l4 -4" />
                                                </svg>
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
