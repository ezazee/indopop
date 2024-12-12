@extends('backend.master.app')

@section('content')
    @include('backend.components.breadcrumb')

    <div class="page-body page-content">
        <div class="container-xl">
            <div class="rv-media-container">
                <div class="card rv-media-wrapper">
                    <input type="checkbox" id="media_details_collapse" class="d-none fake-click-event">
                    <div class="offcanvas offcanvas-start d-md-none" tabindex="-1" aria-labelledby="rvMediaAsideLabel"
                        style="--bb-offcanvas-width: 85%;" id="rv-media-aside">
                        <div class="offcanvas-header">
                            <h2 class="offcanvas-title">Media</h2>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body p-0">
                            <div class="list-group list-group-flush">
                                <div class="list-group-header">
                                    Filter
                                </div>
                                <a class="list-group-item list-group-item-action js-rv-media-change-filter"
                                    data-type="filter" data-value="everything">
                                    <svg class="icon  svg-icon-ti-ti-recycle" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 17l-2 2l2 2" />
                                        <path d="M10 19h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
                                        <path d="M8.536 11l-.732 -2.732l-2.732 .732" />
                                        <path d="M7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024" />
                                        <path d="M15.464 11l2.732 .732l.732 -2.732" />
                                        <path d="M18.196 11.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976" />
                                    </svg> Everything
                                </a>

                                <a class="list-group-item list-group-item-action js-rv-media-change-filter"
                                    data-type="filter" data-value="video">
                                    <svg class="icon  svg-icon-ti-ti-photo" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M15 8h.01" />
                                        <path
                                            d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
                                        <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
                                        <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
                                    </svg> Image
                                </a>

                                <a class="list-group-item list-group-item-action js-rv-media-change-filter"
                                    data-type="filter" data-value="document">
                                    <svg class="icon  svg-icon-ti-ti-video" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
                                        <path
                                            d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                                    </svg> Video
                                </a>

                                <a class="list-group-item list-group-item-action js-rv-media-change-filter"
                                    data-type="filter" data-value="image">
                                    <svg class="icon  svg-icon-ti-ti-file" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                    </svg> Document
                                </a>
                            </div>

                            <div class="list-group list-group-flush">
                                <div class="list-group-header">
                                    View in
                                </div>
                                <a class="list-group-item list-group-item-action js-rv-media-change-filter"
                                    data-type="view_in" data-value="all_media">
                                    <svg class="icon  svg-icon-ti-ti-world" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                        <path d="M3.6 9h16.8" />
                                        <path d="M3.6 15h16.8" />
                                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                                    </svg> All media
                                </a>

                                <a class="list-group-item list-group-item-action js-rv-media-change-filter"
                                    data-type="view_in" data-value="trash">
                                    <svg class="icon  svg-icon-ti-ti-trash" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 7l16 0" />
                                        <path d="M10 11l0 6" />
                                        <path d="M14 11l0 6" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                    </svg> Trash
                                </a>

                                <a class="list-group-item list-group-item-action js-rv-media-change-filter"
                                    data-type="view_in" data-value="recent">
                                    <svg class="icon  svg-icon-ti-ti-clock" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                        <path d="M12 7v5l3 3" />
                                    </svg> Recent
                                </a>

                                <a class="list-group-item list-group-item-action js-rv-media-change-filter"
                                    data-type="view_in" data-value="favorites">
                                    <svg class="icon  svg-icon-ti-ti-star" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                    </svg> Favorites
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="rv-media-main-wrapper">
                        <div class="card-header flex-column rv-media-header p-0">
                            <div
                                class="w-100 p-2 rv-media-top-header flex-wrap gap-3 d-flex justify-content-between align-items-start border-bottom bg-body">
                                <div class="d-flex gap-2 justify-content-between w-100 w-md-auto rv-media-actions">
                                    <button class="btn btn-icon   d-flex d-md-none" type="button"
                                        data-bs-toggle="offcanvas" href="#rv-media-aside">
                                        <svg class="icon icon-left svg-icon-ti-ti-menu-2"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M4 6l16 0" />
                                            <path d="M4 12l16 0" />
                                            <path d="M4 18l16 0" />
                                        </svg>

                                    </button>

                                    <div class="btn-list">
                                        <div class="dropdown ">
                                            <button class="btn btn-primary  dropdown-toggle" type="button"
                                                data-bs-toggle="dropdown">

                                                <svg class="icon  svg-icon-ti-ti-upload"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                                    <path d="M7 9l5 -5l5 5" />
                                                    <path d="M12 4l0 12" />
                                                </svg>
                                                Upload

                                            </button>

                                            <div class="dropdown-menu">
                                                <button class="dropdown-item js-dropzone-upload dropdown-item">
                                                    <svg class="icon dropdown-item-icon svg-icon-ti-ti-upload"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                                        <path d="M7 9l5 -5l5 5" />
                                                        <path d="M12 4l0 12" />
                                                    </svg>
                                                    Upload from local

                                                </button>

                                                <button class="dropdown-item js-download-action dropdown-item">
                                                    <svg class="icon dropdown-item-icon svg-icon-ti-ti-link"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M9 15l6 -6" />
                                                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                                                        <path
                                                            d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                                                    </svg>
                                                    Upload from URL

                                                </button>
                                            </div>
                                        </div>

                                        <button class="btn btn-icon btn-primary  js-create-folder-action" type="button"
                                            data-bs-toggle="tooltip" data-bs-placement="top" title="Create folder">
                                            <svg class="icon icon-left svg-icon-ti-ti-folder-plus"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path
                                                    d="M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5" />
                                                <path d="M16 19h6" />
                                                <path d="M19 16v6" />
                                            </svg>

                                        </button>

                                        <button class="btn btn-icon btn-primary  js-change-action" type="button"
                                            data-type="refresh" data-bs-toggle="tooltip" data-bs-placement="top"
                                            title="Refresh">
                                            <svg class="icon icon-left svg-icon-ti-ti-refresh"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                                            </svg>

                                        </button>

                                        <div class="dropdown d-none d-md-block">
                                            <button
                                                class="btn btn-primary  dropdown-toggle js-rv-media-change-filter-group js-filter-by-type"
                                                type="button" data-bs-toggle="dropdown" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Filter">
                                                <svg class="icon icon-left svg-icon-ti-ti-filter"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path
                                                        d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" />
                                                </svg>
                                                <span class="js-rv-media-filter-current"></span>

                                            </button>

                                            <div class="dropdown-menu">
                                                <button class="dropdown-item js-rv-media-change-filter" data-type="filter"
                                                    data-value="everything">
                                                    <svg class="icon dropdown-item-icon svg-icon-ti-ti-recycle"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M12 17l-2 2l2 2" />
                                                        <path d="M10 19h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
                                                        <path d="M8.536 11l-.732 -2.732l-2.732 .732" />
                                                        <path d="M7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024" />
                                                        <path d="M15.464 11l2.732 .732l.732 -2.732" />
                                                        <path
                                                            d="M18.196 11.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976" />
                                                    </svg>
                                                    Everything

                                                </button>

                                                <button class="dropdown-item js-rv-media-change-filter" data-type="filter"
                                                    data-value="image">
                                                    <svg class="icon dropdown-item-icon svg-icon-ti-ti-photo"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M15 8h.01" />
                                                        <path
                                                            d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
                                                        <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
                                                        <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
                                                    </svg>
                                                    Image

                                                </button>

                                                <button class="dropdown-item js-rv-media-change-filter" data-type="filter"
                                                    data-value="video">
                                                    <svg class="icon dropdown-item-icon svg-icon-ti-ti-video"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path
                                                            d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
                                                        <path
                                                            d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                                                    </svg>
                                                    Video

                                                </button>

                                                <button class="dropdown-item js-rv-media-change-filter" data-type="filter"
                                                    data-value="document">
                                                    <svg class="icon dropdown-item-icon svg-icon-ti-ti-file"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                                        <path
                                                            d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                                    </svg>
                                                    Document

                                                </button>
                                            </div>
                                        </div>

                                        <div class="dropdown d-none d-md-block">
                                            <button
                                                class="btn btn-primary  dropdown-toggle js-rv-media-change-filter-group js-filter-by-view-in"
                                                type="button" data-bs-toggle="dropdown" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="View in">
                                                <svg class="icon icon-left svg-icon-ti-ti-eye"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                    <path
                                                        d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                                </svg>
                                                <span class="js-rv-media-filter-current"></span>

                                            </button>

                                            <div class="dropdown-menu">
                                                <button class="dropdown-item js-rv-media-change-filter"
                                                    data-type="view_in" data-value="all_media">
                                                    <svg class="icon dropdown-item-icon svg-icon-ti-ti-world"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                                        <path d="M3.6 9h16.8" />
                                                        <path d="M3.6 15h16.8" />
                                                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                                                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                                                    </svg>
                                                    All media

                                                </button>

                                                <button class="dropdown-item js-rv-media-change-filter"
                                                    data-type="view_in" data-value="trash">
                                                    <svg class="icon dropdown-item-icon svg-icon-ti-ti-trash"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M4 7l16 0" />
                                                        <path d="M10 11l0 6" />
                                                        <path d="M14 11l0 6" />
                                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                    </svg>
                                                    Trash

                                                </button>

                                                <button class="dropdown-item js-rv-media-change-filter"
                                                    data-type="view_in" data-value="recent">
                                                    <svg class="icon dropdown-item-icon svg-icon-ti-ti-clock"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                                        <path d="M12 7v5l3 3" />
                                                    </svg>
                                                    Recent

                                                </button>

                                                <button class="dropdown-item js-rv-media-change-filter"
                                                    data-type="view_in" data-value="favorites">
                                                    <svg class="icon dropdown-item-icon svg-icon-ti-ti-star"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path
                                                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                                    </svg>
                                                    Favorites

                                                </button>
                                            </div>
                                        </div>

                                        <button class="btn btn-danger  d-none js-files-action" type="button"
                                            data-action="empty_trash">
                                            <svg class="icon icon-left svg-icon-ti-ti-trash"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M4 7l16 0" />
                                                <path d="M10 11l0 6" />
                                                <path d="M14 11l0 6" />
                                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                            </svg>
                                            Empty trash

                                        </button>
                                    </div>
                                </div>
                                <div class="rv-media-search">
                                    <form class="input-search-wrapper" action="" method="GET">
                                        <div class="input-group">
                                            <input type="search" class="form-control" name="search"
                                                placeholder="Search in current folder" />
                                            <button class="btn btn-icon" type="submit">
                                                <svg class="icon icon-left svg-icon-ti-ti-search"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                                    <path d="M21 21l-6 -6" />
                                                </svg>

                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="w-100 d-flex flex-wrap gap-3 p-2">
                                <div class="d-flex w-100 w-md-auto align-items-center rv-media-breadcrumb">
                                    <ul class="breadcrumb"></ul>
                                </div>
                                <div
                                    class="d-flex justify-content-between justify-content-md-end align-items-center rv-media-tools w-100 w-md-auto">
                                    <div class="btn-list" role="group">
                                        <div class="dropdown ">
                                            <button class="btn   dropdown-toggle" type="button"
                                                data-bs-toggle="dropdown">

                                                <svg class="icon  svg-icon-ti-ti-sort-a-z"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M16 8h4l-4 8h4" />
                                                    <path d="M4 16v-6a2 2 0 1 1 4 0v6" />
                                                    <path d="M4 13h4" />
                                                    <path d="M11 12h2" />
                                                </svg>
                                                Sort

                                            </button>

                                            <div class="dropdown-menu">
                                                <button class="dropdown-item js-rv-media-change-filter"
                                                    data-type="sort_by" data-value="name-asc">
                                                    <svg class="icon dropdown-item-icon svg-icon-ti-ti-sort-ascending-letters"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M15 10v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4" />
                                                        <path d="M19 21h-4l4 -7h-4" />
                                                        <path d="M4 15l3 3l3 -3" />
                                                        <path d="M7 6v12" />
                                                    </svg>
                                                    File name - ASC

                                                </button>
                                                <button class="dropdown-item js-rv-media-change-filter"
                                                    data-type="sort_by" data-value="name-desc">
                                                    <svg class="icon dropdown-item-icon svg-icon-ti-ti-sort-descending-letters"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M15 21v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4" />
                                                        <path d="M19 10h-4l4 -7h-4" />
                                                        <path d="M4 15l3 3l3 -3" />
                                                        <path d="M7 6v12" />
                                                    </svg>
                                                    File name - DESC

                                                </button>
                                                <button class="dropdown-item js-rv-media-change-filter"
                                                    data-type="sort_by" data-value="created_at-asc">
                                                    <svg class="icon dropdown-item-icon svg-icon-ti-ti-sort-ascending-numbers"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M4 15l3 3l3 -3" />
                                                        <path d="M7 6v12" />
                                                        <path d="M17 3a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2z" />
                                                        <path d="M17 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                        <path d="M19 16v3a2 2 0 0 1 -2 2h-1.5" />
                                                    </svg>
                                                    Uploaded date - ASC

                                                </button>
                                                <button class="dropdown-item js-rv-media-change-filter"
                                                    data-type="sort_by" data-value="created_at-desc">
                                                    <svg class="icon dropdown-item-icon svg-icon-ti-ti-sort-descending-numbers"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M4 15l3 3l3 -3" />
                                                        <path d="M7 6v12" />
                                                        <path
                                                            d="M17 14a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2z" />
                                                        <path d="M17 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                        <path d="M19 5v3a2 2 0 0 1 -2 2h-1.5" />
                                                    </svg>
                                                    Uploaded date - DESC

                                                </button>
                                                <button class="dropdown-item js-rv-media-change-filter"
                                                    data-type="sort_by" data-value="size-asc">
                                                    <svg class="icon dropdown-item-icon svg-icon-ti-ti-sort-ascending-2"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M14 9l3 -3l3 3" />
                                                        <path
                                                            d="M5 5m0 .5a.5 .5 0 0 1 .5 -.5h4a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-4a.5 .5 0 0 1 -.5 -.5z" />
                                                        <path
                                                            d="M5 14m0 .5a.5 .5 0 0 1 .5 -.5h4a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-4a.5 .5 0 0 1 -.5 -.5z" />
                                                        <path d="M17 6v12" />
                                                    </svg>
                                                    Size - ASC

                                                </button>
                                                <button class="dropdown-item js-rv-media-change-filter"
                                                    data-type="sort_by" data-value="size-desc">
                                                    <svg class="icon dropdown-item-icon svg-icon-ti-ti-sort-descending-2"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path
                                                            d="M5 5m0 .5a.5 .5 0 0 1 .5 -.5h4a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-4a.5 .5 0 0 1 -.5 -.5z" />
                                                        <path
                                                            d="M5 14m0 .5a.5 .5 0 0 1 .5 -.5h4a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-4a.5 .5 0 0 1 -.5 -.5z" />
                                                        <path d="M14 15l3 3l3 -3" />
                                                        <path d="M17 18v-12" />
                                                    </svg>
                                                    Size - DESC

                                                </button>
                                            </div>
                                        </div>

                                        <div class="dropdown rv-dropdown-actions">
                                            <button class="btn disabled   dropdown-toggle" type="button"
                                                disabled="disabled" data-bs-toggle="dropdown">

                                                <svg class="icon  svg-icon-ti-ti-hand-finger"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
                                                    <path d="M11 11.5v-2a1.5 1.5 0 1 1 3 0v2.5" />
                                                    <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />
                                                    <path
                                                        d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
                                                </svg>
                                                Actions

                                            </button>

                                            <div class="dropdown-menu">

                                            </div>
                                        </div>
                                    </div>
                                    <div class="btn-group js-rv-media-change-view-type ms-2" role="group">
                                        <button class="btn btn-icon" type="button" data-type="tiles">
                                            <svg class="icon icon-left svg-icon-ti-ti-layout-grid"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path
                                                    d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                                <path
                                                    d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                                <path
                                                    d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                                <path
                                                    d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                            </svg>

                                        </button>
                                        <button class="btn btn-icon" type="button" data-type="list">
                                            <svg class="icon icon-left svg-icon-ti-ti-layout-list"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path
                                                    d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                                <path
                                                    d="M4 14m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                            </svg>

                                        </button>
                                    </div>
                                    <label class="btn btn-icon   collapse-panel ms-2 d-none d-sm-flex" type="button"
                                        for="media_details_collapse">
                                        <svg class="icon icon-left svg-icon-ti-ti-arrow-bar-right"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M20 12l-10 0" />
                                            <path d="M20 12l-4 4" />
                                            <path d="M20 12l-4 -4" />
                                            <path d="M4 4l0 16" />
                                        </svg>

                                    </label>
                                </div>
                            </div>
                        </div>

                        <main class="rv-media-main">
                            <div class="rv-media-items"></div>
                            <div class="rv-media-details" style="display: none">
                                <div class="rv-media-thumbnail">
                                    <svg class="icon  svg-icon-ti-ti-photo" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M15 8h.01" />
                                        <path
                                            d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
                                        <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
                                        <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
                                    </svg>
                                </div>
                                <div class="rv-media-description">
                                    <div class="rv-media-name">
                                        <p>Nothing is selected</p>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <footer class="d-none rv-media-footer">
                            <button class="btn btn-primary  js-insert-to-editor" type="button">
                                Insert
                            </button>
                        </footer>
                    </div>
                    <div class="rv-upload-progress hide-the-pane position-fixed bottom-0 end-0 ">
                        <div class="card">
                            <div class="card-header position-relative">
                                <h3 class="panel-title mb-0">Upload progress</h3>
                                <button
                                    class="btn   close-pane position-absolute top-50 bg-primary text-white text-center p-0"
                                    type="button">

                                    <svg class="icon m-0 svg-icon-ti-ti-x" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M18 6l-12 12" />
                                        <path d="M6 6l12 12" />
                                    </svg>

                                </button>
                            </div>
                            <div class="table-responsive overflow-auto" style="max-height: 180px">
                                <table class="table table-vcenter card-table table-hover table-striped">
                                    <tbody class="rv-upload-progress-table">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade modal-blur" id="modal_add_folder" tabindex="-1" role="dialog" aria-hidden="true"
                data-select2-dropdown-parent="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-has-form " role="document">
                    <div class="modal-content">
                        <form action="" method="POST" class="rv-form form-add-folder">
                            <input type="hidden" name="_token" value="ZomMcTjBrmCGafyJ5GMAh46L9SPPEMlrkrQGaGzI"
                                autocomplete="off">
                            <div class="modal-header">
                                <h5 class="modal-title">Create folder</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>


                            <div class="modal-body">
                                <div class="mb-3 position-relative">
                                    <div class="input-group">


                                        <input class="form-control" type="text" name="name" id="name"
                                            placeholder="Folder name" />


                                        <button class="btn btn-primary" type="submit">

                                            Create

                                        </button>

                                    </div>
                                </div>
                                <div class="modal-notice"></div>
                            </div>


                        </form>
                    </div>
                </div>
            </div>

            <div class="modal fade modal-blur" id="modal_rename_items" tabindex="-1" role="dialog" aria-hidden="true"
                data-select2-dropdown-parent="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-has-form " role="document">
                    <div class="modal-content">
                        <form action="" method="POST" class="form-rename">
                            <input type="hidden" name="_token" value="ZomMcTjBrmCGafyJ5GMAh46L9SPPEMlrkrQGaGzI"
                                autocomplete="off">
                            <div class="modal-header">
                                <h5 class="modal-title">Rename</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>


                            <div class="modal-body">
                                <div class="rename-items"></div>
                                <div class="modal-notice"></div>
                            </div>

                            <div class="modal-footer">
                                <button class="btn" type="button" data-bs-dismiss="modal">

                                    Close

                                </button>
                                <button class="btn btn-primary" type="submit">

                                    Save changes

                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <div class="modal fade modal-blur" id="modal_alt_text_items" tabindex="-1" role="dialog"
                aria-hidden="true" data-select2-dropdown-parent="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-has-form " role="document">
                    <div class="modal-content">
                        <form action="" method="POST" class="form-alt-text">
                            <input type="hidden" name="_token" value="ZomMcTjBrmCGafyJ5GMAh46L9SPPEMlrkrQGaGzI"
                                autocomplete="off">
                            <div class="modal-header">
                                <h5 class="modal-title">Alt text</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>


                            <div class="modal-body">
                                <div class="alt-text-items"></div>
                                <div class="modal-notice"></div>
                            </div>

                            <div class="modal-footer">
                                <button class="btn" type="button" data-bs-dismiss="modal">

                                    Close

                                </button>
                                <button class="btn btn-primary" type="submit">

                                    Save changes

                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <div class="modal fade modal-blur" id="modal_trash_items" tabindex="-1" role="dialog" aria-hidden="true"
                data-select2-dropdown-parent="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-has-form " role="document">
                    <div class="modal-content">
                        <form action="" method="POST" class="form-delete-items">
                            <input type="hidden" name="_token" value="ZomMcTjBrmCGafyJ5GMAh46L9SPPEMlrkrQGaGzI"
                                autocomplete="off">
                            <div class="modal-header">
                                <h5 class="modal-title">Move items to trash</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>


                            <div class="modal-body">
                                <p>Are you sure you want to move these items to trash?</p>
                                <div class="modal-notice"></div>
                            </div>

                            <div class="modal-footer">
                                <button type="submit" class="btn btn-danger">Confirm</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <div class="modal fade modal-blur" id="modal_delete_items" tabindex="-1" role="dialog" aria-hidden="true"
                data-select2-dropdown-parent="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-has-form " role="document">
                    <div class="modal-content">
                        <form action="" method="POST" class="form-delete-items">
                            <input type="hidden" name="_token" value="ZomMcTjBrmCGafyJ5GMAh46L9SPPEMlrkrQGaGzI"
                                autocomplete="off">
                            <div class="modal-header">
                                <h5 class="modal-title">Delete item(s)</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>


                            <div class="modal-body">
                                <p>This action is irreversible. Are you sure want to delete these items?</p>
                                <div class="modal-notice"></div>
                            </div>

                            <div class="modal-footer">
                                <button type="submit" class="btn btn-danger">Confirm</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <div class="modal fade modal-blur" id="modal_empty_trash" tabindex="-1" role="dialog" aria-hidden="true"
                data-select2-dropdown-parent="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-has-form " role="document">
                    <div class="modal-content">
                        <form action="" method="POST" class="form-empty-trash">
                            <input type="hidden" name="_token" value="ZomMcTjBrmCGafyJ5GMAh46L9SPPEMlrkrQGaGzI"
                                autocomplete="off">
                            <div class="modal-header">
                                <h5 class="modal-title">Empty trash</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>


                            <div class="modal-body">
                                <p>This action is irreversible. Are you sure you want to permanently delete
                                    all items in trash?</p>
                                <div class="modal-notice"></div>
                            </div>

                            <div class="modal-footer">
                                <button type="submit" class="btn btn-danger">Confirm</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <div class="modal modal-blur fade" tabindex="-1" role="dialog" id="modal_download_url">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" data-downloading="Downloading..." data-text="Download">
                                <svg class="icon  svg-icon-ti-ti-download" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                    <path d="M7 11l5 5l5 -5" />
                                    <path d="M12 4l0 12" />
                                </svg> Download
                            </h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div class="modal-body">
                            <form class="rv-form form-download-url">
                                <div id="download-form-wrapper">
                                    <div class="mb-3">
                                        <textarea rows="4" name="urls" class="form-control"
                                            placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg&#10;https://example.com/image3.jpg&#10;..."></textarea>

                                        <small class="form-hint">Enter one URL per line.</small>
                                    </div>
                                </div>

                                <button class="btn btn-primary  w-100" type="submit">

                                    Download

                                </button>
                            </form>
                            <div class="mt-2 modal-notice" id="modal-notice" style="max-height: 350px;overflow: auto">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade modal-blur" id="modal_crop_image" tabindex="-1" role="dialog" aria-hidden="true"
                data-select2-dropdown-parent="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-has-form modal-lg" role="document">
                    <div class="modal-content">
                        <form action="" method="POST" class="rv-form form-crop">
                            <input type="hidden" name="_token" value="ZomMcTjBrmCGafyJ5GMAh46L9SPPEMlrkrQGaGzI"
                                autocomplete="off">
                            <div class="modal-header">
                                <h5 class="modal-title">Crop</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>


                            <div class="modal-body">
                                <div>
                                    <input type="hidden" name="image_id">
                                    <input type="hidden" name="crop_data">
                                    <div class="row">
                                        <div class="col-lg-9">
                                            <div class="crop-image"></div>
                                        </div>
                                        <div class="col-lg-3">
                                            <div class="mt-3">
                                                <div class="mb-3 position-relative">
                                                    <label class="form-label" for="dataHeight">
                                                        Height


                                                    </label>



                                                    <input class="form-control" type="text" name="dataHeight"
                                                        id="dataHeight" />
                                                </div>

                                                <div class="mb-3 position-relative">
                                                    <label class="form-label" for="dataWidth">
                                                        Width


                                                    </label>



                                                    <input class="form-control" type="text" name="dataWidth"
                                                        id="dataWidth" />
                                                </div>

                                                <label class="form-check">
                                                    <input type="checkbox" id="aspectRatio" name="aspectRatio"
                                                        class="form-check-input" value="">

                                                    <span class="form-check-label">
                                                        Aspect ratio
                                                    </span>

                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button class="btn" type="button" data-bs-dismiss="modal">

                                    Close

                                </button>

                                <button class="btn btn-primary" type="submit">

                                    Crop

                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <div class="modal fade modal-blur" id="modal-properties" tabindex="-1" role="dialog" aria-hidden="true"
                data-select2-dropdown-parent="true">
                <div class="modal-dialog modal-dialog-centered " role="document">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h5 class="modal-title">Properties</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>


                        <div class="modal-body">
                            <input type="hidden" name="selected">

                            <div class="mb-3 position-relative">
                                <label class="form-label" for="color">
                                    Choose a color for this folder


                                </label>

                                <div class="row g-2">
                                    <div class="col-auto">
                                        <label class="form-colorinput form-colorinput-light">
                                            <input name="color" type="radio" value="#3498db"
                                                class="form-colorinput-input">
                                            <span class="form-colorinput-color" style="background-color:#3498db;"></span>
                                        </label>
                                    </div>
                                    <div class="col-auto">
                                        <label class="form-colorinput form-colorinput-light">
                                            <input name="color" type="radio" value="#2ecc71"
                                                class="form-colorinput-input">
                                            <span class="form-colorinput-color" style="background-color:#2ecc71;"></span>
                                        </label>
                                    </div>
                                    <div class="col-auto">
                                        <label class="form-colorinput form-colorinput-light">
                                            <input name="color" type="radio" value="#e74c3c"
                                                class="form-colorinput-input">
                                            <span class="form-colorinput-color" style="background-color:#e74c3c;"></span>
                                        </label>
                                    </div>
                                    <div class="col-auto">
                                        <label class="form-colorinput form-colorinput-light">
                                            <input name="color" type="radio" value="#f39c12"
                                                class="form-colorinput-input">
                                            <span class="form-colorinput-color"
                                                style="background-color:#f39c12;"></span>
                                        </label>
                                    </div>
                                    <div class="col-auto">
                                        <label class="form-colorinput form-colorinput-light">
                                            <input name="color" type="radio" value="#9b59b6"
                                                class="form-colorinput-input">
                                            <span class="form-colorinput-color"
                                                style="background-color:#9b59b6;"></span>
                                        </label>
                                    </div>
                                    <div class="col-auto">
                                        <label class="form-colorinput form-colorinput-light">
                                            <input name="color" type="radio" value="#1abc9c"
                                                class="form-colorinput-input">
                                            <span class="form-colorinput-color"
                                                style="background-color:#1abc9c;"></span>
                                        </label>
                                    </div>
                                    <div class="col-auto">
                                        <label class="form-colorinput form-colorinput-light">
                                            <input name="color" type="radio" value="#34495e"
                                                class="form-colorinput-input">
                                            <span class="form-colorinput-color"
                                                style="background-color:#34495e;"></span>
                                        </label>
                                    </div>
                                    <div class="col-auto">
                                        <label class="form-colorinput form-colorinput-light">
                                            <input name="color" type="radio" value="#e67e22"
                                                class="form-colorinput-input">
                                            <span class="form-colorinput-color"
                                                style="background-color:#e67e22;"></span>
                                        </label>
                                    </div>
                                    <div class="col-auto">
                                        <label class="form-colorinput form-colorinput-light">
                                            <input name="color" type="radio" value="#27ae60"
                                                class="form-colorinput-input">
                                            <span class="form-colorinput-color"
                                                style="background-color:#27ae60;"></span>
                                        </label>
                                    </div>
                                    <div class="col-auto">
                                        <label class="form-colorinput form-colorinput-light">
                                            <input name="color" type="radio" value="#c0392b"
                                                class="form-colorinput-input">
                                            <span class="form-colorinput-color"
                                                style="background-color:#c0392b;"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button class="btn" type="button" data-bs-dismiss="modal">

                                Close

                            </button>

                            <button class="btn btn-primary" type="submit">

                                Save changes

                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal fade modal-blur" id="modal_share_items" tabindex="-1" role="dialog"
                aria-hidden="true" data-select2-dropdown-parent="true">
                <div class="modal-dialog modal-dialog-centered " role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Share</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="share-items">
                                <div class="mb-3">
                                    <label for="media-share-type" class="form-label">Share Type</label>
                                    <select id="media-share-type" data-bb-value="share-type" class=" form-select"
                                        name="share_type">
                                        <option value="url">URL</option>
                                        <option value="indirect_url">Indirect URL</option>
                                        <option value="html">HTML</option>
                                        <option value="markdown">Markdown</option>
                                    </select>
                                </div>
                                <div class="mb-3" data-bb-value="results">
                                    <label for="media-share-results" class="form-label">Share
                                        Results</label>
                                    <textarea id="media-share-results" class="form-control" readonly data-bb-value="share-result"
                                        name="share_result" cols="50" rows="10"></textarea>
                                </div>
                                <div class="mb-0 text-end">
                                    <button class="btn   btn-icon" type="button" data-bb-toggle="clipboard"
                                        data-clipboard-parent="#modal_share_items .share-items"
                                        data-clipboard-target="[data-bb-value='share-result']">
                                        <svg class="icon  svg-icon-ti-ti-clipboard" data-clipboard-icon="true"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path
                                                d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                                            <path
                                                d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                        </svg> <svg class="icon text-success d-none svg-icon-ti-ti-check"
                                            data-clipboard-success-icon="true" xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="d-none js-rv-clipboard-temp"></button>
            <div class="media-download-popup" style="display: none">
                <div role="alert" class="alert alert-success">
                    <div class="d-flex">
                        <div>
                            <svg class="icon alert-icon svg-icon-ti-ti-circle-check" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M9 12l2 2l4 -4" />
                            </svg>
                        </div>
                        <div class="w-100">
                            Preparing file to download...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
