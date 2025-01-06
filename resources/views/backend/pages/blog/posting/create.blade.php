@extends('backend.master.app')

@section('content')
@include('backend.components.breadcrumb')

<div class="page-body page-content">
   <div class="container-xl">
      <form method="POST" action="{{ route('blog.add') }}" accept-charset="UTF-8" id="botble-blog-forms-post-form" class="js-base-form dirty-check">
         @csrf
         <div role="alert" class="alert alert-info">
            <div class="d-flex">
               <div>
                  <svg class="icon alert-icon svg-icon-ti-ti-info-circle" xmlns="http://www.w3.org/2000/svg"
                     width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                     <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                     <path d="M12 9h.01" />
                     <path d="M11 12h1v4h1" />
                  </svg>
               </div>
               <div class="w-100">
                  You are editing "<strong class="current_language_text">English</strong>" version
               </div>
            </div>
         </div>
         <div class="row">
            <div class="gap-3 col-md-9">
               <div class="card mb-3">
                  <div class="card-body">
                     <div class="form-body">
                        <div class="mb-3 position-relative">
                           <label for="name" class="form-label required">Name</label>
                           <input class="form-control" data-counter="250" placeholder="Name"
                              required="required" name="name" type="text" id="name">
                        </div>
                        <input type="hidden" name="model" value="Botble\Blog\Models\Post">
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
                                 href="https://cms.botble.com/"
                                 target="_blank">https://cms.botble.com/</a></small>
                              <input class="slug-current" name="slug" type="hidden" value="">
                              <div class="slug-data" data-url="https://cms.botble.com/ajax/slug/create"
                                 data-view="https://cms.botble.com/" data-id="0">
                              </div>
                              <input name="slug_id" type="hidden" value="0">
                              <input name="is_slug_editable" type="hidden" value="1">
                           </div>
                        </div>
                        <div class="mb-3 position-relative">
                           <label for="description" class="form-label">Description</label>
                           <textarea class="form-control" data-counter="400" rows="4" placeholder="Short description" name="description"
                              cols="50" id="description"></textarea>
                        </div>
                        <div class="mb-3 position-relative">
                           <label for="content" class="form-label">Content</label>
                           <div class="mb-2 btn-list">
                              <button class="btn show-hide-editor-btn" type="button"
                                 data-result="content">
                              Show/Hide Editor
                              </button>
                              <button class="btn btn_gallery" type="button" data-result="content"
                                 data-multiple="true" data-action="media-insert-ckeditor">
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
                              </button>
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
                        <div class="seo-preview" v-pre>
                           <p class="default-seo-description">Setup meta title &amp; description to make your site easy to discovered on search engines such as Google</p>
                        </div>
                        <div class="hidden seo-edit-section" v-pre>
                           <hr class="my-4">
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
               <div class="card meta-boxes">
                  <div class="card-header">
                     <h4 class="card-title">
                        <label for="status" class="form-label required">Status</label>
                     </h4>
                  </div>
                  <div class="card-body">
                     <select class="form-control form-select" required="required" id="status"
                        name="status">
                        <option value="published">Published</option>
                        <option value="draft">Draft</option>
                        <option value="scheduled">Scheduled</option>
                     </select>
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
                        <input name="is_featured" type="hidden" value="0" />
                        <input class="form-check-input" name="is_featured" type="checkbox"
                           value="1" id="is_featured" />
                        <span class="form-check-label">Is headline?</span>
                        </label>
                     </div>
                  </div>
               </div>
               <div class="card meta-boxes">
                  <div class="card-header">
                     <h4 class="card-title">
                        <label for="categories[]" class="form-label">Categories</label>
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
                              <input type="checkbox" name="categories" class="form-check-input" >
                              <span class="form-check-label">
                               {{ $item->nama_kategori }}
                              </span>
                              </label>
                           </li>
                           @endforeach
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="card meta-boxes">
                  <div class="card-header">
                     <h4 class="card-title">
                        <label for="banner_image" class="form-label">Banner image (1920x170px)</label>
                     </h4>
                  </div>
                  <div class="card-body">
                     <div class="image-box image-box-banner_image" action="select-image" data-counter="250">
                        <input class="image-data" name="banner_image" type="hidden" value=""
                           class="" data-counter="250" />
                        <div style="width: 8rem" class="preview-image-wrapper mb-1">
                           <div class="preview-image-inner">
                              <a data-bb-toggle="image-picker-choose" data-target="popup"
                                 class="image-box-actions" data-result="banner_image"
                                 data-action="select-image" data-allow-thumb="1" href="#">
                              <img class="preview-image default-image"
                                 data-default="https://cms.botble.com/vendor/core/core/base/images/placeholder.png"
                                 src="https://cms.botble.com/vendor/core/core/base/images/placeholder.png"
                                 alt="Preview image" />
                              <span class="image-picker-backdrop"></span>
                              </a>
                              <button class="btn btn-pill btn-icon  btn-sm image-picker-remove-button p-0"
                                 style="display: none; --bb-btn-font-size: 0.5rem;" type="button"
                                 data-bb-toggle="image-picker-remove" data-bs-toggle="tooltip"
                                 data-bs-placement="top" title="Remove image">
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
                        </div>
                        <a data-bb-toggle="image-picker-choose" data-target="popup"
                           data-result="banner_image" data-action="select-image" data-allow-thumb="1"
                           href="#">
                        Choose image
                        </a>
                        <div data-bb-toggle="upload-from-url">
                           <span class="text-muted">or</span>
                           <a href="javascript:void(0)" class="mt-1" data-bs-toggle="modal"
                              data-bs-target="#image-picker-add-from-url"
                              data-bb-target=".image-box-banner_image">
                           Add from URL
                           </a>
                        </div>
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
                     <input class="form-control tags" placeholder="Write some tags"
                        data-url="https://cms.botble.com/admin/blog/tags/all" name="tag" type="text"
                        id="tag">
                  </div>
               </div>
               <input class="form-control" name="author_type" type="hidden"
                  value="Botble\Member\Models\Member">
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


@endsection
