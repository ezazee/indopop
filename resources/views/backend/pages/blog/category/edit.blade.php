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
            <div class="col-md-4">
                <div role="alert" class="alert alert-info">
                    <div class="d-flex">
                        <div>
                            <svg class="icon alert-icon svg-icon-ti-ti-info-circle" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                <path d="M12 9h.01" />
                                <path d="M11 12h1v4h1" />
                            </svg>
                        </div>
                        <div class="w-100">
                            Drag and drop on the left to change the order or parent of the categories.
                        </div>
                    </div>
                </div>
                <div class="card tree-categories-container">
                    <div class="card-header">
                        <div class="card-actions">
                            <a class="btn btn-primary tree-categories-create mx-2" type="button"
                                href="{{ route('category.create') }}">
                                <svg class="icon icon-left svg-icon-ti-ti-plus" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 5l0 14" />
                                    <path d="M5 12l14 0" />
                                </svg>
                                Create
                            </a>
                        </div>
                    </div>
                    <div class="card-body tree-categories-body">
                        <div class="file-tree-wrapper" data-url=""
                            data-update-url="https://cms.botble.com/admin/blog/categories/update-tree">
                            <div class="dd" data-depth="0" data-empty-text="No categories found.">
                                <ol class="list-group dd-list ">
                                    @foreach ($categories as $item)
                                    <li class="dd-item" data-id="1" data-name="Artificial Intelligence">
                                        <div class="dd-handle dd3-handle"></div>
                                        <div class="dd3-content d-flex align-items-center gap-2">
                                            <div class="d-flex align-items-center gap-1" style="width: 90%;">
                                                <svg class="icon svg-icon-ti-ti-file" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                                    <path
                                                        d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                                </svg>
                                                <a href="{{ route('category.edit', ['id' => $item->id ]) }}" class="text-truncate"
                                                    data-bs-toggle="tooltip">
                                                    {{ $item->nama_kategori }}
                                                </a>
            
                                                <a href="https://cms.botble.com/artificial-intelligence" data-bs-toggle="tooltip"
                                                    data-bs-original-title="Total posts: 5" target="_blank"></a>
            
                                                <span data-bs-toggle="modal" data-bs-target=".modal-confirm-delete"
                                                    data-url="https://cms.botble.com/admin/blog/categories/1" class="ms-2">
                                                    <button class="btn btn-icon btn-danger btn-sm delete-button" type="button"
                                                        data-bs-placement="right" data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Delete">
                                                        <svg class="icon icon-sm icon-left svg-icon-ti-ti-trash"
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
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    @endforeach
                                    <!-- Repeat for other categories -->
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            

            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
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
                                <label for="name" class="form-label">Name</label>
                                <input id="nama_kategori" class="form-control" data-counter="250" placeholder="Name"
                                    name="nama_kategori" type="text" value="{{ $category->nama_kategori }}">
                            </div>
                            <div class="mb-3">
                                <div class="slug-field-wrapper">
                                    <div class="mb-3 position-relative">
                                        <label class="form-label" for="slug">
                                            Permalink
                                        </label>
                                        <div class="input-group input-group-flat">
                                            <span class="input-group-text" >
                                                {{ config('app.url') }}/
                                            </span>                                            
                                            <input id="slug" class="form-control ps-0" type="text" value="{{ $category->slug }}" readonly />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 position-relative">
                                <label for="parent_id" class="form-label">Parent</label>
                                <select class="select-search-full form-select" data-allow-clear="false" id="parent_id"
                                    name="parent_id">
                                    <option value="">None</option>
                                    @foreach ($categories as $item)
                                    <option value="{{ $item->id }}">{{ $item->nama_kategori }}</option>
                                    @endforeach
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
                                    </form>
                                        <form action="{{ route('category.destroy', ['id' => $category->id]) }}" method="POST">
                                            @csrf
                                            @method('DELETE')
                                            
                                            <button class="btn btn-danger" type="submit" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                                <svg class="icon icon-sm icon-left svg-icon-ti-ti-trash"
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
                                                Delete
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
