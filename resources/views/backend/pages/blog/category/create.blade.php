@extends('backend.master.app')
@section('content')
@include('backend.components.breadcrumb')
<div class="page-body page-content">
    <div class="container-xl">
        <div class="row row-cards">
            <div class="col-12">
                <div class="my-2 text-end">
                </div>
            </div>
            @include('backend.components.list-category')
            <div class="col-md-8">
                <div class="card tree-form-container">
                    <div class="card-body tree-form-body">
                        <form method="POST" action="{{ route('category.add') }}">
                            @csrf
                            <div role="alert" class="alert alert-info">
                                <div class="d-flex">
                                    <div>
                                        <svg class="icon alert-icon svg-icon-ti-ti-info-circle"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                            <path d="M12 9h.01" />
                                            <path d="M11 12h1v4h1" />
                                        </svg>
                                    </div>
                                    <div class="w-100">
                                        You are editing "<strong class="current_language_text">English</strong>"
                                        version
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 position-relative">
                                <label for="name" class="form-label required">Name</label>
                                <input class="form-control" data-counter="250" placeholder="Name" required="required"
                                    name="nama_kategori" type="text">
                            </div>
                            <div class="mb-3 ">
                                <div class="slug-field-wrapper" >
                                    <div class="mb-3 position-relative">
                                        <label class="form-label required" for="slug">
                                            Permalink
                                        </label>
                                        <div class="input-group input-group-flat">
                                            <span class="input-group-text">
                                                https://cms.botble.com/
                                            </span>
                                            <input class="form-control ps-0" type="text" required="required" />
                                            <span class="input-group-text slug-actions">
                                                <a href="#" class="link-secondary d-none">
                                                    <svg class="icon  svg-icon-ti-ti-wand"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M6 21l15 -15l-3 -3l-15 15l3 3" />
                                                        <path d="M15 6l3 3" />
                                                        <path
                                                            d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
                                                        <path
                                                            d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
                                                    </svg>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 position-relative">
                                <label for="parent_id" class="form-label">Parent</label>
                                <select class="select-search-full form-select" data-allow-clear="false" id="parent_id"
                                    name="parent_id">
                                    <option value="0">None</option>
                                    <option value="1"> Artificial Intelligence</option>
                                    <option value="2"> Cybersecurity</option>
                                    <option value="3"> Blockchain Technology</option>
                                    <option value="4"> 5G and Connectivity</option>
                                    <option value="5"> Augmented Reality (AR)</option>
                                    <option value="6"> Green Technology</option>
                                    <option value="7"> Quantum Computing</option>
                                    <option value="8"> Edge Computing</option>
                                </select>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">
                                        Publish
                                    </h4>
                                </div>
                                <div class="card-body">
                                    <div class="btn-list">
                                        <button class="btn btn-primary" type="submit">
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
                                        <button class="btn" type="button" name="submitter" value="save">
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
