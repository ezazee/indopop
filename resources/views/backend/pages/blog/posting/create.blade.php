@extends('backend.master.app')

@section('content')
    @include('backend.components.breadcrumb')

    <div class="page-body page-content">
        <div class="container-xl">
            <form method="POST" action="{{ route('blog.add') }}" enctype="multipart/form-data"
                class="js-base-form dirty-check">
                @csrf
                <div class="row">
                    <div class="gap-3 col-md-9">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="form-body">
                                    <div class="mb-3 position-relative">
                                        <label for="name" class="form-label">Name</label>
                                        <input class="form-control" data-counter="250" placeholder="Name" name="title" type="text" id="name">
                                        @if ($errors->has('title'))
                                            <small class="text-danger">{{ $errors->first('title') }}</small>
                                        @endif
                                    </div>
                                    <div class="mb-3 position-relative">
                                        <label for="description" class="form-label">Description</label>
                                        <textarea class="form-control" data-counter="400" rows="4" placeholder="Short description"
                                            name="short_description" cols="50" id="description"></textarea>
                                    </div>
                                    <div class="mb-3 position-relative">
                                        <label for="content" class="form-label">Content</label>
                                        <textarea class="form-control form-control editor-ckeditor ays-ignore" data-counter="100000" rows="4"
                                            placeholder="Write your content" with-short-code id="content" name="content" cols="50"></textarea>
                                        @if ($errors->has('content'))
                                            <small class="text-danger">{{ $errors->first('content') }}</small>
                                        @endif
                                    </div>
                                    <div class="mb-3 position-relative">
                                        <label for="video-url" class="mt-4 block">Video URL</label>
                                        <input class="form-control" id="video-url" placeholder="Paste video URL di sini" type="text" >
                                        <button type="button" class="btn btn-primary btn-sm mt-2" onclick="insertVideo()">
                                            Insert Video
                                        </button>
                                     </div>
                                     <div class="mb-3 position-relative " id="embed-container">
                                        <label for="embed-url" >Generated Embed URL:</label>
                                        <textarea class="form-control" data-counter="160" rows="3" id="embed-url" placeholder="URL Embed" ></textarea>
                                        <button type="button" class="btn btn-primary btn-sm mt-2" onclick="copyEmbedUrl()">
                                            Copy Embed URL
                                        </button>
                                     </div>
                                </div>
                            </div>
                        </div>
                        <div class="meta-box-sortables">
                            <div class="card meta-boxes mb-3">
                                <div class="card-header">
                                    <h4 class="card-title">Search Engine Optimize</h4>
                                </div>
                                <div class="card-body">
                                    <div class="seo-edit-section" v-pre>
                                        <div class="mb-3 position-relative">
                                            <label for="seo_meta[seo_title]" class="form-label">SEO Keyword</label>
                                            <input class="form-control" data-counter="70" placeholder="SEO Keyword"
                                                data-allow-over-limit name="seo_meta[seo_title]" type="text"
                                                id="seo_meta[seo_title]">
                                        </div>
                                        <div class="mb-3 position-relative">
                                            <label for="seo_meta[seo_description]" class="form-label">SEO
                                                description</label>
                                            <textarea class="form-control" data-counter="160" rows="3" placeholder="SEO description" data-allow-over-limit
                                                name="seo_meta[seo_description]" cols="50" id="seo_meta[seo_description]"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 gap-3 d-flex flex-column-reverse flex-md-column mb-md-0 mb-5">
                        <div class="card">
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
                                        Publish
                                    </button>
                                    <a href="{{ route('blog.post') }}" class="btn">
                                        <svg class="icon icon-left svg-icon-ti-ti-transfer-in"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M4 18v3h16v-14l-8 -4l-8 4v3" />
                                            <path d="M4 14h9" />
                                            <path d="M10 11l3 3l-3 3" />
                                        </svg>
                                        Back
                                    </a>
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
                                                    <ol class="breadcrumb"></ol>
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
                                                <a href="{{ route('blog.post') }}" class="btn">
                                                    <svg class="icon icon-left svg-icon-ti-ti-transfer-in"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M4 18v3h16v-14l-8 -4l-8 4v3" />
                                                        <path d="M4 14h9" />
                                                        <path d="M10 11l3 3l-3 3" />
                                                    </svg>
                                                    Back
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div class="card meta-boxes">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <label for="status" class="form-label">Status</label>
                                </h4>
                            </div>
                            <div class="card-body">
                                <select class="form-control form-select" id="status" name="status">
                                    <option value="publish">Published</option>
                                    <option value="schedule">Scheduled</option>
                                </select>
                                <div id="form-schedule" style="margin-top: 10px; display: none;">
                                    <label class="form-label">Date</label>
                                    <input type="date" class="form-control" min="{{ date('Y-m-d') }}">
                                    <label class="form-label">Time</label>
                                    <input type="time" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="card meta-boxes">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <label for="author_id" class="form-label">Headline</label>
                                </h4>
                            </div>
                            <div class="card-body">
                                <div class="position-relative">
                                    <label class="form-check form-switch ">
                                        <input name="headline" type="hidden" value="no" />
                                        <input class="form-check-input" name="headline" type="checkbox"
                                            value="yes" />
                                        <span class="form-check-label">Is headline?</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="card meta-boxes">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <label for="categories" class="form-label">Categories</label>
                                </h4>
                            </div>
                            <div class="card-body">
                                <div class="tree-categories-list-998852741">
                                    <ul class="list-unstyled">
                                        @foreach ($category as $item)
                                        <li>
                                            <label class="form-check">
                                                <input type="checkbox" id="category-{{ $item->id }}" name="categories" class="form-check-input category-checkbox" value="{{ $item->id }}" onchange="toggleCategorySelection(this)">
                                                <span class="form-check-label">
                                                    {{ $item->nama_kategori }}
                                                </span>
                                            </label>
                                            <ul class="list-unstyled ms-4 mt-2">
                                                @foreach ($item->subCategories as $subItem)
                                                <li>
                                                    <label class="form-check">
                                                        <input type="checkbox" id="subcategory-{{ $subItem->id }}" name="subcategories[]" class="form-check-input subcategory-checkbox" onchange="toggleSubCategorySelection(this)">
                                                        <span class="form-check-label">
                                                            {{ $subItem->nama_sub_kategori }}
                                                        </span>
                                                    </label>
                                                </li>
                                                @endforeach
                                            </ul>
                                        </li>
                                        @endforeach
                                    </ul>
                                </div>
                                @if ($errors->has('categories'))
                                    <small class="text-danger">{{ $errors->first('categories') }}</small>
                                @endif
                            </div>
                        </div>
                        <div class="card meta-boxes">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <label for="banner_image" class="form-label">Featured Image</label>
                                </h4>
                            </div>
                            <div class="card-body">
                                <div class="image-box image-box-banner_image" data-counter="250">
                                    <input class="image-data" name="banner_image" type="file" data-counter="250" />
                                    {{-- <div style="width: 8rem; height: 8rem; border: 1px dashed #ddd; display: flex; align-items: center; justify-content: center;"
                                        class="preview-image-wrapper mb-1">
                                        <div class="preview-image-inner">
                                            <a href="#" data-bb-toggle="image-picker-choose"
                                                onclick="openFileManager(event)" class="image-box-actions"
                                                data-result="banner_image" data-action="select-image"
                                                data-allow-thumb="1">
                                                <img class="preview-image default-image"
                                                    data-default="https://cms.botble.com/vendor/core/core/base/images/placeholder.png"
                                                    src="https://cms.botble.com/vendor/core/core/base/images/placeholder.png"
                                                    alt="Preview image" style="max-width: 100%; max-height: 100%;" />
                                                <span class="image-picker-backdrop"></span>
                                            </a>
                                            <button class="btn btn-pill btn-icon btn-sm image-picker-remove-button p-0"
                                                style="display: none; --bb-btn-font-size: 0.5rem;" type="button"
                                                onclick="removeImage()" data-bs-toggle="tooltip" data-bs-placement="top"
                                                title="Remove image">
                                                <svg class="icon icon-sm icon-left svg-icon-ti-ti-x"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M18 6l-12 12" />
                                                    <path d="M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div> --}}
                                    @if ($errors->has('banner_image'))
                                        <small class="text-danger">{{ $errors->first('banner_image') }}</small>
                                    @endif
                                    <input class="form-control mb-3" placeholder="Image Caption" name="image_caption" type="text">

                                    {{-- <a href="{{ url('/laravel-filemanager') }}" onclick="openFileManager(event)"
                                        class="btn btn-primary btn-sm">
                                        Choose image
                                    </a> --}}
                                </div>
                            </div>
                        </div>
                        <div class="card meta-boxes">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <label for="tag" class="form-label">Tags</label>
                                </h4>
                            </div>
                            <div class="card-body">
                                <input class="form-control tags" placeholder="Write some tags" data-url=""
                                    name="tag" type="text" id="tag">
                                @if ($errors->has('tag'))
                                    <small class="text-danger">{{ $errors->first('tag') }}</small>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <!-- Tambahkan jQuery dan CKEditor -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="{{ asset('backend/ckeditor/ckeditor.js') }}"></script>
    <script src="{{ asset('backend/ckeditor/adapters/jquery.js') }}"></script>
    <script>
        $(document).ready(function() {
            CKEDITOR.replace('content', {
                filebrowserBrowseUrl: '/laravel-filemanager?type=Images',
                filebrowserUploadUrl: '/laravel-filemanager/upload?type=Images&_token={{ csrf_token() }}',
                filebrowserImageBrowseUrl: '/laravel-filemanager?type=Images',
                toolbar: [{
                        name: 'document',
                        items: ['Source', 'NewPage', 'Preview', 'Print']
                    },
                    {
                        name: 'clipboard',
                        items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo']
                    },
                    {
                        name: 'editing',
                        items: ['Find', 'Replace', '-', 'SelectAll']
                    },
                    {
                        name: 'insert',
                        items: ['Image', 'Table', 'HorizontalRule', 'SpecialChar']
                    },
                    {
                        name: 'styles',
                        items: ['Styles', 'Format']
                    },
                    {
                        name: 'basicstyles',
                        items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat']
                    },
                    {
                        name: 'alignment',
                        items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
                    },
                    {
                        name: 'ui',
                        items: ['Font', 'FontSize', 'TextColor', 'BGColor']
                    },
                    {
                        name: 'tools',
                        items: ['Maximize']
                    },
                    {
                        name: 'paragraph',
                        items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote']
                    },
                    {
                        name: 'links',
                        items: ['Link', 'Unlink', 'Anchor']
                    },
                    {
                        name: 'source',
                        items: ['']
                    },
                    {
                        name: 'iframe',
                        items: ['Iframe']
                    }
                ],
                height: 400
            });
        });
    </script>

    <script>
        function openFileManager(event) {
            event.preventDefault();

            const route_prefix = "/laravel-filemanager?type=image";

            window.open(route_prefix, 'FileManager', 'width=900,height=600');

            window.SetUrl = function(file) {
                const fileData = Array.isArray(file) ? file[0] : file;

                const fileUrl = fileData.url || fileData.thumb_url;

                if (fileUrl) {
                    const inputField = document.querySelector('input[name="banner_image"]');
                    if (inputField) {
                        inputField.value = fileUrl;
                    }

                    const previewImage = document.querySelector('.preview-image');
                    if (previewImage) {
                        previewImage.src = fileUrl;
                    }

                    const removeButton = document.querySelector('.image-picker-remove-button');
                    if (removeButton) {
                        removeButton.style.display = 'inline-block';
                    }
                } else {
                    console.error('Invalid file object or missing URL property:', fileData);
                }
            };
        }

        function removeImage() {
            const inputField = document.querySelector('input[name="banner_image"]');
            inputField.value = '';

            const previewImage = document.querySelector('.preview-image');
            previewImage.src = previewImage.getAttribute('data-default');

            const removeButton = document.querySelector('.image-picker-remove-button');
            removeButton.style.display = 'none';
        }
    </script>

    <script>
        $(document).ready(function () {
            function toggleScheduledForm() {
                if ($("#status").val() === "schedule") {
                    $("#form-schedule").show();
                } else {
                    $("#form-schedule").hide();
                }
            }

            toggleScheduledForm();

            $("#status").change(function () {
                toggleScheduledForm();
            });
        });
    </script>

    <script>
        function toggleCategorySelection(selectedCategory) {
            let categoryCheckboxes = document.querySelectorAll('.category-checkbox');
            categoryCheckboxes.forEach(function(checkbox) {
                if (checkbox !== selectedCategory) {
                    checkbox.disabled = selectedCategory.checked;
                }
            });

            let subcategoryCheckboxes = document.querySelectorAll('.subcategory-checkbox');
            subcategoryCheckboxes.forEach(function(checkbox) {
                checkbox.disabled = !selectedCategory.checked;
            });

            if (!selectedCategory.checked) {
                categoryCheckboxes.forEach(function(checkbox) {
                    checkbox.disabled = false;
                });

                subcategoryCheckboxes.forEach(function(checkbox) {
                    checkbox.disabled = false;
                });
            }
        }

        function toggleSubCategorySelection(selectedSubCategory) {
            let subcategoryCheckboxes = document.querySelectorAll('.subcategory-checkbox');
            subcategoryCheckboxes.forEach(function(checkbox) {
                if (checkbox !== selectedSubCategory) {
                    checkbox.disabled = selectedSubCategory.checked;
                }
            });

            if (!selectedSubCategory.checked) {
                subcategoryCheckboxes.forEach(function(checkbox) {
                    checkbox.disabled = false;
                });
            }
        }
    </script>

    <script>
        function convertSocialMediaLink(url) {
            let regex = /https:\/\/www\.instagram\.com\/(p|reel|tv)\/([^\/?]+)\//;
            let match = url.match(regex);
            if (match) {
                const postId = match[2];
                return `https://www.instagram.com/p/${postId}/embed`;
            }

            regex = /https:\/\/www\.tiktok\.com\/@[^\/]+\/video\/([^\/?]+)/;
            match = url.match(regex);
            if (match) {
                const videoId = match[1];
                return `https://www.tiktok.com/embed/v2/${videoId}`;
            }

            regex = /https:\/\/x\.com\/[^\/]+\/status\/([^\/?]+)/;
            match = url.match(regex);
            if (match) {
                const tweetId = match[1];
                return `https://platform.twitter.com/embed/Tweet.html?id=${tweetId}`;
            }

            regex = /https:\/\/www\.youtube\.com\/watch\?v=([^\/&?]+)/;
            match = url.match(regex);
            if (match) {
                const videoId = match[1];
                return `https://www.youtube.com/embed/${videoId}`;
            }

            throw new Error('URL tidak valid atau tidak didukung.');
        }

        function insertVideo() {
            const url = document.getElementById('video-url').value;

            try {
                const embedUrl = convertSocialMediaLink(url);

                document.getElementById('embed-url').value = embedUrl;
                document.getElementById('embed-container').style.display = 'block';
            } catch (error) {
                alert(`Error: ${error.message}`);
            }
        }

        function copyEmbedUrl() {
            const embedUrlInput = document.getElementById('embed-url');

            embedUrlInput.select();
            embedUrlInput.setSelectionRange(0, 99999);

            document.execCommand("copy");
            alert("Embed URL copied to clipboard: " + embedUrlInput.value);
        }
    </script>

@endsection
