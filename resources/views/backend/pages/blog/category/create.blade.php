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
                            <form method="POST" action="https://cms.botble.com/admin/blog/categories/create"
                                accept-charset="UTF-8" id="botble-blog-forms-category-form"
                                class="js-base-form dirty-check" createRoute="categories.create"
                                editRoute="categories.edit" deleteRoute="categories.destroy"
                                updateTreeRoute="categories.update-tree"><input name="_token" type="hidden"
                                    value="ZomMcTjBrmCGafyJ5GMAh46L9SPPEMlrkrQGaGzI">

                                <div role="alert" class="alert alert-info">
                                    <div class="d-flex">
                                        <div>
                                            <svg class="icon alert-icon svg-icon-ti-ti-info-circle"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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




                                <input class="form-control" name="order" type="hidden" value="8">







                                <div class="mb-3 position-relative">

                                    <label for="name" class="form-label required">Name</label>


                                    <input class="form-control" data-counter="250" placeholder="Name"
                                        required="required" name="name" type="text" id="name">




                                </div>




                                <input type="hidden" name="model" value="Botble\Blog\Models\Category">

                                <div class="mb-3 ">
                                    <div class="slug-field-wrapper" data-field-name="name">
                                        <div class="mb-3 position-relative">
                                            <label class="form-label required" for="slug">
                                                Permalink


                                            </label>

                                            <div class="input-group input-group-flat">

                                                <span class="input-group-text">
                                                    https://cms.botble.com/
                                                </span>

                                                <input class="form-control ps-0" type="text" name="slug"
                                                    id="slug" required="required" />


                                                <span class="input-group-text slug-actions">
                                                    <a href="#" class="link-secondary d-none"
                                                        data-bs-toggle="tooltip" aria-label="Generate URL"
                                                        data-bs-original-title="Generate URL"
                                                        data-bb-toggle="generate-slug">
                                                        <svg class="icon  svg-icon-ti-ti-wand"
                                                            xmlns="http://www.w3.org/2000/svg" width="24"
                                                            height="24" viewBox="0 0 24 24" fill="none"
                                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M6 21l15 -15l-3 -3l-15 15l3 3" />
                                                            <path d="M15 6l3 3" />
                                                            <path
                                                                d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
                                                            <path
                                                                d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
                                                        </svg> </a>
                                                </span>

                                            </div>
                                        </div>
                                        <small class="form-hint mt-n2 text-truncate">Preview: <a
                                                href="https://cms.botble.com/"
                                                target="_blank">https://cms.botble.com/</a></small>
                                        <input class="slug-current" name="slug" type="hidden" value="">
                                        <div class="slug-data" data-url="https://cms.botble.com/ajax/slug/create"
                                            data-view="https://cms.botble.com/" data-id="0"></div>
                                        <input name="slug_id" type="hidden" value="0">
                                        <input name="is_slug_editable" type="hidden" value="1">
                                    </div>


                                </div>



                                <div class="mb-3 position-relative">

                                    <label for="parent_id" class="form-label">Parent</label>


                                    <select class="select-search-full form-select" data-allow-clear="false"
                                        id="parent_id" name="parent_id">
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



                                <div class="mb-3 position-relative">

                                    <label for="description" class="form-label">Description</label>


                                    <textarea class="form-control" data-counter="400" rows="4" placeholder="Short description" name="description"
                                        cols="50" id="description"></textarea>




                                </div>



                                <div class="mb-3 position-relative">



                                    <label class="form-check form-switch ">
                                        <input name="is_default" type="hidden" value="0" />
                                        <input class="form-check-input" name="is_default" type="checkbox" value="1"
                                            id="is_default" />

                                        <span class="form-check-label">Is default?</span>
                                    </label>




                                </div>



                                <div class="mb-3 position-relative">

                                    <label for="icon" class="form-label">Icon</label>


                                    <select name="icon" data-bb-core-icon
                                        data-url="https://cms.botble.com/admin/core-icons"
                                        data-placeholder="Ex: ti ti-home" class="form-control" data-counter="120"
                                        data-placeholder="Ex: ti ti-home" data-allow-clear="true">
                                    </select>




                                </div>



                                <div class="mb-3 position-relative">



                                    <label class="form-check form-switch ">
                                        <input name="is_featured" type="hidden" value="0" />
                                        <input class="form-check-input" name="is_featured" type="checkbox"
                                            value="1" id="is_featured" />

                                        <span class="form-check-label">Is featured?</span>
                                    </label>




                                </div>



                                <div class="mb-3 position-relative">

                                    <label for="status" class="form-label required">Status</label>


                                    <select class="form-control form-select" required="required" id="status"
                                        name="status">
                                        <option value="published">Published</option>
                                        <option value="draft">Draft</option>
                                        <option value="pending">Pending</option>
                                    </select>




                                </div>






                                <div id="advanced-sortables" class="meta-box-sortables">
                                    <div class="card meta-boxes mb-3" id="seo_wrap">
                                        <div class="card-header">
                                            <h4 class="card-title">
                                                Search Engine Optimize
                                            </h4>

                                            <div class="card-actions"><a href="#"
                                                    class="btn-trigger-show-seo-detail">
                                                    Edit SEO meta
                                                </a></div>
                                        </div>

                                        <div class="card-body">
                                            <div class="seo-preview" v-pre>
                                                <p class="default-seo-description">
                                                    Setup meta title &amp; description to make your site
                                                    easy to discovered on search engines such as Google
                                                </p>

                                                <div class="existed-seo-meta hidden">

                                                    <h4 class="page-title-seo text-truncate">

                                                    </h4>

                                                    <div class="page-url-seo">
                                                        <p>-</p>
                                                    </div>

                                                    <div>
                                                        <span style="color: #70757a;">Dec 11, 2024
                                                            - </span>
                                                        <span class="page-description-seo">
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="hidden seo-edit-section" v-pre>
                                                <hr class="my-4">
                                                </hr>

                                                <div class="mb-3 position-relative">

                                                    <label for="seo_meta[seo_title]" class="form-label">SEO Title</label>


                                                    <input class="form-control" data-counter="70" placeholder="SEO Title"
                                                        data-allow-over-limit name="seo_meta[seo_title]" type="text"
                                                        id="seo_meta[seo_title]">




                                                </div>



                                                <div class="mb-3 position-relative">

                                                    <label for="seo_meta[seo_description]" class="form-label">SEO
                                                        description</label>


                                                    <textarea class="form-control" data-counter="160" rows="3" placeholder="SEO description" data-allow-over-limit
                                                        name="seo_meta[seo_description]" cols="50" id="seo_meta[seo_description]"></textarea>




                                                </div>



                                                <div class="mb-3 position-relative">

                                                    <label for="seo_meta_image" class="form-label">SEO
                                                        image</label>


                                                    <div class="image-box image-box-seo_meta_image" action="select-image"
                                                        data-counter="250">
                                                        <input class="image-data" name="seo_meta_image" type="hidden"
                                                            value="" class="" data-counter="250" />


                                                        <div style="width: 8rem" class="preview-image-wrapper mb-1">
                                                            <div class="preview-image-inner">
                                                                <a data-bb-toggle="image-picker-choose"
                                                                    data-target="popup" class="image-box-actions"
                                                                    data-result="seo_meta_image"
                                                                    data-action="select-image" data-allow-thumb="1"
                                                                    href="#">
                                                                    <img class="preview-image default-image"
                                                                        data-default="https://cms.botble.com/vendor/core/core/base/images/placeholder.png"
                                                                        src="https://cms.botble.com/vendor/core/core/base/images/placeholder.png"
                                                                        alt="Preview image" />
                                                                    <span class="image-picker-backdrop"></span>
                                                                </a>
                                                                <button
                                                                    class="btn btn-pill btn-icon  btn-sm image-picker-remove-button p-0"
                                                                    style="display: none; --bb-btn-font-size: 0.5rem;"
                                                                    type="button" data-bb-toggle="image-picker-remove"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Remove image">
                                                                    <svg class="icon icon-sm icon-left svg-icon-ti-ti-x"
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                                        stroke="currentColor" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round">
                                                                        <path stroke="none" d="M0 0h24v24H0z"
                                                                            fill="none" />
                                                                        <path d="M18 6l-12 12" />
                                                                        <path d="M6 6l12 12" />
                                                                    </svg>

                                                                </button>
                                                            </div>
                                                        </div>

                                                        <a data-bb-toggle="image-picker-choose" data-target="popup"
                                                            data-result="seo_meta_image" data-action="select-image"
                                                            data-allow-thumb="1" href="#">
                                                            Choose image
                                                        </a>

                                                        <div data-bb-toggle="upload-from-url">
                                                            <span class="text-muted">or</span>
                                                            <a href="javascript:void(0)" class="mt-1"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#image-picker-add-from-url"
                                                                data-bb-target=".image-box-seo_meta_image">
                                                                Add from URL
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-3 position-relative">
                                                    <label for="seo_meta[index]" class="form-label">Index</label>
                                                    <div class="position-relative form-check-group">
                                                        <label class="form-check form-check-inline">
                                                            <input class="form-check-input" id="seo_meta[index]"
                                                                type="radio" name="seo_meta[index]" value="index"
                                                                checked>

                                                            <span class="form-check-label">Index</span>
                                                        </label>
                                                        <label class="form-check form-check-inline">
                                                            <input class="form-check-input" id="seo_meta[index]"
                                                                type="radio" name="seo_meta[index]" value="noindex">

                                                            <span class="form-check-label">No index</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            Publish
                                        </h4>
                                    </div>
                                    <div class="card-body">
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
                                <div data-bb-waypoint data-bb-target="#form-actions"></div>
                                <header class="top-0 w-100 position-fixed end-0 z-1000" id="form-actions"
                                    style="display: none;">
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
                                                                xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path
                                                                    d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                                                                <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                                <path d="M14 4l0 4l-6 0l0 -4" />
                                                            </svg>
                                                            Save
                                                        </button>
                                                        <button class="btn" type="submit" name="submitter"
                                                            value="save">
                                                            <svg class="icon icon-left svg-icon-ti-ti-transfer-in"
                                                                xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" stroke-width="2"
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
                                        </div>
                                    </div>
                                </header>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
