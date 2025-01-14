@extends('backend.master.app')
@section('content')
@include('backend.components.breadcrumb')
<div class="page-body page-content">
   <div class="container-xl">
      <form method="POST" action="https://cms.botble.com/admin/blog/tools/data-synchronize/export/posts"
         accept-charset="UTF-8" data-bb-toggle="export-data" class="data-synchronize-export-form"
         data-success-message="Exported successfully." data-error-message="Export failed.">
         <input name="_token"
            type="hidden" value="42fIbQT6Xrovsd94lwR86DyRlKGguWCIqCcbupto">
         <div class="card">
            <div class="card-header">
               <h4 class="card-title">
                  Export Posts
               </h4>
            </div>
            <div class="card-body">
               <div class="mb-5">
                  <div class="row g-3">
                     <div class="col">
                        <div class="text-center bg-body-tertiary rounded p-3">
                           <h3 class="text-muted mb-2">Total Posts</h3>
                           <div class="fs-1 fw-bold">20</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  <label class="form-label">
                  Columns
                  <a href="javascript:void(0)" class="ms-2 text-primary" data-bb-toggle="check-all"
                     data-bb-target=".export-column">Check
                  all</a>
                  </label>
                  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                     <div class="mb-3 position-relative">
                        <label class="form-check">
                        <input type="checkbox" name="columns[]" class="form-check-input export-column"
                           value="name" checked>
                        <span class="form-check-label">
                        Name
                        </span>
                        </label>
                     </div>
                     <div class="mb-3 position-relative">
                        <label class="form-check">
                        <input type="checkbox" name="columns[]" class="form-check-input export-column"
                           value="description" checked>
                        <span class="form-check-label">
                        Description
                        </span>
                        </label>
                     </div>
                     <div class="mb-3 position-relative">
                        <label class="form-check">
                        <input type="checkbox" name="columns[]" class="form-check-input export-column"
                           value="content" checked>
                        <span class="form-check-label">
                        Content
                        </span>
                        </label>
                     </div>
                     <div class="mb-3 position-relative">
                        <label class="form-check">
                        <input type="checkbox" name="columns[]" class="form-check-input export-column"
                           value="is_featured" checked>
                        <span class="form-check-label">
                        Is Featured
                        </span>
                        </label>
                     </div>
                     <div class="mb-3 position-relative">
                        <label class="form-check">
                        <input type="checkbox" name="columns[]" class="form-check-input export-column"
                           value="format_type" checked>
                        <span class="form-check-label">
                        Format Type
                        </span>
                        </label>
                     </div>
                     <div class="mb-3 position-relative">
                        <label class="form-check">
                        <input type="checkbox" name="columns[]" class="form-check-input export-column"
                           value="image" checked>
                        <span class="form-check-label">
                        Image
                        </span>
                        </label>
                     </div>
                     <div class="mb-3 position-relative">
                        <label class="form-check">
                        <input type="checkbox" name="columns[]" class="form-check-input export-column"
                           value="views" checked>
                        <span class="form-check-label">
                        Views
                        </span>
                        </label>
                     </div>
                     <div class="mb-3 position-relative">
                        <label class="form-check">
                        <input type="checkbox" name="columns[]" class="form-check-input export-column"
                           value="slug" checked>
                        <span class="form-check-label">
                        Slug
                        </span>
                        </label>
                     </div>
                     <div class="mb-3 position-relative">
                        <label class="form-check">
                        <input type="checkbox" name="columns[]" class="form-check-input export-column"
                           value="url" checked>
                        <span class="form-check-label">
                        URL
                        </span>
                        </label>
                     </div>
                     <div class="mb-3 position-relative">
                        <label class="form-check">
                        <input type="checkbox" name="columns[]" class="form-check-input export-column"
                           value="status" checked>
                        <span class="form-check-label">
                        Status
                        </span>
                        </label>
                     </div>
                     <div class="mb-3 position-relative">
                        <label class="form-check">
                        <input type="checkbox" name="columns[]" class="form-check-input export-column"
                           value="categories" checked>
                        <span class="form-check-label">
                        Categories
                        </span>
                        </label>
                     </div>
                     <div class="mb-3 position-relative">
                        <label class="form-check">
                        <input type="checkbox" name="columns[]" class="form-check-input export-column"
                           value="tags" checked>
                        <span class="form-check-label">
                        Tags
                        </span>
                        </label>
                     </div>
                  </div>
               </div>
               <div class="mb-3 position-relative">
                  <label class="form-label">
                  Format
                  </label>
                  <div class="position-relative form-check-group">
                     <label class="form-check form-check-inline">
                     <input class="form-check-input" type="radio" name="format" value="csv"
                        checked>
                     <span class="form-check-label">CSV</span>
                     </label>
                     <label class="form-check form-check-inline">
                     <input class="form-check-input" type="radio" name="format" value="xlsx">
                     <span class="form-check-label">Excel</span>
                     </label>
                  </div>
               </div>
            </div>
            <div class="card-footer">
               <button class="btn btn-primary" type="submit">
               Export
               </button>
            </div>
         </div>
      </form>
   </div>
</div>
@endsection
