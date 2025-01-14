@extends('backend.master.app')

@section('content')
@include('backend.components.breadcrumb')

<div class="page-body page-content">
   <div class="container-xl">
      <form method="POST" action="{{ route('blog.add') }}" accept-charset="UTF-8" id="botble-blog-forms-post-form" class="js-base-form dirty-check">
         @csrf
         <div class="row">
            <div class="gap-3 col-md-9">
               <div class="card mb-3">
                  <div class="card-body">
                     <div class="form-body">
                        <div class="mb-3 position-relative">
                           <label for="name" class="form-label required">Name</label>
                           <input class="form-control" data-counter="250" placeholder="Name"
                              required="required" name="title" type="text" id="name">
                        </div>
                        <div class="mb-3 ">
                           <div class="slug-field-wrapper" data-field-name="name">
                              <div class="mb-3 position-relative">
                                 <label class="form-label required" for="slug">Permalink</label>
                                 <div class="input-group input-group-flat">
                                    <span class="input-group-text">
                                        {{ config('app.url') }}/
                                    </span>
                                    <input class="form-control ps-0" type="text" name="slug"
                                       id="slug" />
                                    <span class="input-group-text slug-actions">
                                       <a href="#" class="link-secondary d-none"
                                          data-bs-toggle="tooltip" aria-label="Generate URL"
                                          data-bs-original-title="Generate URL"
                                          data-bb-toggle="generate-slug">
                                          <svg class="icon  svg-icon-ti-ti-wand"
                                             xmlns="http://www.w3.org/2000/svg" width="24"
                                             height="24" viewBox="0 0 24 24" fill="none"
                                             stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round">
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
                              <small class="form-hint mt-n2 text-truncate">Preview: <a
                                 href="#"
                                 target="_blank">https://cms.botble.com/</a></small>
                              <input class="slug-current" name="slug" type="hidden" value="">
                              <div class="slug-data" data-url="#"
                                 data-view="#" data-id="0">
                              </div>
                           </div>
                        </div>
                        <div class="mb-3 position-relative">
                           <label for="description" class="form-label">Description</label>
                           <textarea class="form-control" data-counter="400" rows="4" placeholder="Short description" name="short_description"
                              cols="50" id="description"></textarea>
                        </div>
                        <div class="mb-3 position-relative">
                           <label for="content" class="form-label">Content</label>
                           <div class="mb-2 btn-list">
                              <a href="{{ url('/laravel-filemanager') }}" onclick="openFileManager(event)" class="btn">
                                 <svg class="icon icon-left svg-icon-ti-ti-photo"
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
                              Add media
                             </a>
                           </div>
                           <textarea class="form-control form-control editor-ckeditor ays-ignore" data-counter="100000" rows="4"
                              placeholder="Write your content" with-short-code id="content" name="content" cols="50"></textarea>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="advanced-sortables" class="meta-box-sortables">
                  <div class="card meta-boxes mb-3" id="seo_wrap">
                     <div class="card-header">
                        <h4 class="card-title">Search Engine Optimize</h4>
                        <div class="card-actions"><a href="#" class="btn-trigger-show-seo-detail">Edit SEO meta</a></div>
                     </div>
                     <div class="card-body">
                        <div class="hidden seo-edit-section" v-pre>
                           <div class="mb-3 position-relative">
                              <label for="seo_meta[seo_title]" class="form-label">SEO Title</label>
                              <input class="form-control" data-counter="70" placeholder="SEO Title" data-allow-over-limit name="seo_meta[seo_title]" type="text" id="seo_meta[seo_title]">
                           </div>
                           <div class="mb-3 position-relative">
                              <label for="seo_meta[seo_description]" class="form-label">SEO description</label>
                              <textarea class="form-control" data-counter="160" rows="3" placeholder="SEO description" data-allow-over-limit name="seo_meta[seo_description]" cols="50" id="seo_meta[seo_description]"></textarea>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-3 gap-3 d-flex flex-column-reverse flex-md-column mb-md-0 mb-5">
               <div class="card">
                  <div class="card-header">
                     <h4 class="card-title">Publish</h4>
                  </div>
                  <div class="card-body">
                     <div class="btn-list">
                        <button class="btn btn-primary" type="submit" value="apply" name="submitter">
                           <svg class="icon icon-left svg-icon-ti-ti-device-floppy"
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                              <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                              <path d="M14 4l0 4l-6 0l0 -4" />
                           </svg>
                           Save
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
                                 <button class="btn btn-primary" type="submit" value="apply" name="submitter">
                                    <svg class="icon icon-left svg-icon-ti-ti-device-floppy"
                                       xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                       viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                       <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                                       <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                       <path d="M14 4l0 4l-6 0l0 -4" />
                                    </svg>
                                    Save
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
                     </div>
                  </div>
               </header>
               <div class="card meta-boxes">
                  <div class="card-header">
                     <h4 class="card-title">
                        <label for="status" class="form-label required">Status</label>
                     </h4>
                  </div>
                  <div class="card-body">
                     <label for="status">Status</label>
                     <select class="form-control form-select" id="status" name="status">
                         <option value="publish">Published</option>
                         <option value="scheduled">Scheduled</option>
                     </select>

                     <div id="form-scheduled" style="margin-top: 10px;">
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
                        <label for="categories[]" class="form-label required">Categories</label>
                     </h4>
                  </div>
                  <div class="card-body">
                     <div class="mb-3">
                        <div class="input-icon">
                           <input type="text" id="search-category-input-998852741" class="form-control"
                              placeholder="Search..." onkeyup="filter_categories_998852741(998852741)"
                              formnovalidate />
                           <span class="input-icon-addon">
                              <svg class="icon  svg-icon-ti-ti-search" xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round">
                                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                 <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                 <path d="M21 21l-6 -6" />
                              </svg>
                           </span>
                        </div>
                     </div>
                     <div data-bb-toggle="tree-checkboxes" class="tree-categories-list-998852741">
                        <ul class="list-unstyled ">
                           @foreach ($category as $item)
                          <li>
                             <label class="form-check">
                                <input type="checkbox" name="categories" class="form-check-input category-checkbox" value="{{ $item->id }}" data-category-id="{{ $item->id }}">
                                <span class="form-check-label" required>
                                   {{ $item->nama_kategori }}
                                </span>
                             </label>
                             <ul class="list-unstyled ms-4 mt-2">
                                @foreach ($item->subCategories as $subItem)
                                   <li>
                                      <label class="form-check">
                                         <input type="checkbox" name="subcategories[{{ $item->id }}][]" class="form-check-input subcategory-checkbox" data-parent-id="{{ $item->id }}" data-subcategory-id="{{ $subItem->id }}">
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
                  </div>
               </div>
               <div class="card meta-boxes">
                  <div class="card-header">
                     <h4 class="card-title">
                        <label for="banner_image" class="form-label required">Banner image</label>
                     </h4>
                  </div>
                  <div class="card-body">
                     <div class="image-box image-box-banner_image" data-counter="250">
                         <input class="image-data" name="banner_image" type="hidden" value="" data-counter="250" required/>
                         <div style="width: 8rem; height: 8rem; border: 1px dashed #ddd; display: flex; align-items: center; justify-content: center;"
                              class="preview-image-wrapper mb-1">
                             <div class="preview-image-inner">
                                 <a href="#" data-bb-toggle="image-picker-choose" onclick="openFileManager(event)" class="image-box-actions"
                                    data-result="banner_image" data-action="select-image" data-allow-thumb="1">
                                     <img class="preview-image default-image" data-default="https://cms.botble.com/vendor/core/core/base/images/placeholder.png"
                                          src="https://cms.botble.com/vendor/core/core/base/images/placeholder.png"
                                          alt="Preview image" style="max-width: 100%; max-height: 100%;" />
                                     <span class="image-picker-backdrop"></span>
                                 </a>
                                 <button class="btn btn-pill btn-icon btn-sm image-picker-remove-button p-0" style="display: none; --bb-btn-font-size: 0.5rem;" type="button"
                                         onclick="removeImage()" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove image">
                                     <svg class="icon icon-sm icon-left svg-icon-ti-ti-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                         <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                         <path d="M18 6l-12 12" />
                                         <path d="M6 6l12 12" />
                                     </svg>
                                 </button>
                             </div>
                         </div>
                         <a href="{{ url('/laravel-filemanager') }}" onclick="openFileManager(event)" class="btn btn-primary btn-sm">
                             Choose image
                         </a>
                     </div>
                 </div>
               </div>
               <div class="card meta-boxes">
                  <div class="card-header">
                     <h4 class="card-title">
                        <label for="tag" class="form-label required">Tags</label>
                     </h4>
                  </div>
                  <div class="card-body">
                     <input class="form-control tags" placeholder="Write some tags"
                        data-url="" name="tag" type="text"
                        id="tag" required="required">
                  </div>
               </div>
            </div>
         </div>
      </form>
   </div>
</div>

<!-- Tambahkan jQuery dan CKEditor -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="{{ asset('backend/ckeditor/adapters/jquery.js') }}"></script>
<script src="{{ asset('backend/ckeditor/ckeditor.js') }}"></script>
<script>
    $(document).ready(function() {
        CKEDITOR.replace('content', {
         filebrowserBrowseUrl: '/laravel-filemanager?type=Images',
         filebrowserUploadUrl: '/laravel-filemanager/upload?type=Images&_token={{ csrf_token() }}',
         filebrowserImageBrowseUrl: '/laravel-filemanager?type=Images',
               //   filebrowserUploadMethod: 'form',
         toolbar: [
                { name: 'document', items: ['Source', 'NewPage', 'Preview', 'Print'] },
                { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
                { name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll'] },
                { name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'SpecialChar'] },
                { name: 'styles', items: ['Styles', 'Format'] },
                { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
                { name: 'alignment', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
                { name: 'ui', items: ['Font', 'FontSize', 'TextColor', 'BGColor'] },
                { name: 'tools', items: ['Maximize'] },
                { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote'] },
                { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
                { name: 'source', items: [''] },
                { name: 'iframe', items: ['Iframe'] }
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

       window.SetUrl = function (file) {
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
            // console.error('Invalid file object or missing URL property:', fileData);
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

@endsection
