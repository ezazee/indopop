@extends('backend.master.app')
@section('content')
    @include('backend.components.breadcrumb')
    <div class="page-body page-content">
        <div class="container-xl">
            <form method="POST" action="https://cms.botble.com/admin/system/users/create" accept-charset="UTF-8"
                id="botble-a-c-l-forms-user-form" class="js-base-form dirty-check">
                <input name="_token" type="hidden" value="U1lk1x2RAY1jBoJbF9pPgEkmfRrsgMp78U2kvbE6">
                <div class="row">
                    <div class="gap-3 col-md-9">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="form-body">
                                    <div class="row row-cols-lg-2">
                                        <div class="mb-3 position-relative">
                                            <label class="form-label form-label required" for="first_name">
                                                First Name
                                            </label>
                                            <input class="form-control" data-counter="30" required="required"
                                                name="first_name" type="text">
                                        </div>
                                        <div class="mb-3 position-relative">
                                            <label class="form-label form-label required" for="last_name">
                                                Last Name
                                            </label>
                                            <input class="form-control" data-counter="30" required="required"
                                                name="last_name" type="text">
                                        </div>
                                        <div class="mb-3 position-relative">
                                            <label class="form-label form-label required" for="username">
                                                Username
                                            </label>
                                            <input class="form-control" data-counter="30" required="required"
                                                name="username" type="text">
                                        </div>
                                        <div class="mb-3 position-relative">
                                            <label class="form-label form-label required" for="email">
                                                Email
                                            </label>
                                            <input class="form-control" data-counter="60"
                                                placeholder="e.g: example@domain.com" required="required" name="email"
                                                type="text">
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="mb-3 position-relative">
                                                <label class="form-label form-label required" for="password">
                                                    Password
                                                </label>
                                                <input class="form-control" data-counter="60" required="required"
                                                    name="password" type="password">
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="mb-3 position-relative">
                                                <label class="form-label form-label required" for="password_confirmation">
                                                    Re-type password
                                                </label>
                                                <input class="form-control" data-counter="60" required="required"
                                                    name="password_confirmation" type="password">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 gap-3 d-flex flex-column-reverse flex-md-column mb-md-0 mb-5">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">
                                    Publish
                                </h4>
                            </div>
                            <div class="card-body">
                                <div class="btn-list">
                                    <button class="btn btn-primary" type="submit" value="apply" name="submitter">
                                        <svg class="icon icon-left svg-icon-ti-ti-device-floppy"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path
                                                d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                                            <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                            <path d="M14 4l0 4l-6 0l0 -4" />
                                        </svg>
                                        Save
                                    </button>
                                    <button class="btn" type="submit" name="submitter" value="save">
                                        <svg class="icon icon-left svg-icon-ti-ti-transfer-in"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M4 18v3h16v-14l-8 -4l-8 4v3" />
                                            <path d="M4 14h9" />
                                            <path d="M10 11l3 3l-3 3" />
                                        </svg>
                                        Save &amp; Exit
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div data-bb-waypoint data-bb-target="#form-actions"></div>
                        <header class="top-0 w-100 position-fixed end-0 z-1000" id="form-actions" style="display: none;">
                            <div class="navbar">
                                <div class="container-xl">
                                    <div class="row g-2 align-items-center w-100">
                                        <div class="col">
                                            <div class="page-pretitle">
                                                <nav aria-label="breadcrumb">
                                                    <ol class="breadcrumb">
                                                    </ol>
                                                </nav>
                                            </div>
                                        </div>
                                        <div class="col-auto ms-auto d-print-none">
                                            <div class="btn-list">
                                                <button class="btn btn-primary" type="submit" value="apply"
                                                    name="submitter">
                                                    <svg class="icon icon-left svg-icon-ti-ti-device-floppy"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path
                                                            d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                                                        <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                        <path d="M14 4l0 4l-6 0l0 -4" />
                                                    </svg>
                                                    Save
                                                </button>
                                                <button class="btn" type="submit" name="submitter" value="save">
                                                    <svg class="icon icon-left svg-icon-ti-ti-transfer-in"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M4 18v3h16v-14l-8 -4l-8 4v3" />
                                                        <path d="M4 14h9" />
                                                        <path d="M10 11l3 3l-3 3" />
                                                    </svg>
                                                    Save &amp; Exit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
