@extends('backend.master.app')
@section('content')
@include('backend.components.breadcrumb')
<div class="page-body page-content">
   <div class="container-xl">
      <form method="POST" action="{{ route('tags.add') }}" class="js-base-form dirty-check">
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
                  You are editing "<strong class="current_language_text">English</strong>"
                  version
               </div>
            </div>
         </div>
         <div class="row">
            <div class="gap-3 col-md-9">
               <div class="card mb-3">
                  <div class="card-body">
                    <div class="form-body">    
                        <div class="mb-3 position-relative">
                            <label for="nama_tags" class="form-label required">Name</label>
                            <input id="nama_tags" class="form-control" data-counter="120" placeholder="Name"
                                required="required" name="nama_tags" type="text">
                        </div>
                        <div class="mb-3">
                            <div id="slug-field-wrapper" class="slug-field-wrapper" data-field-name="name">
                                <div class="mb-3 position-relative">
                                    <label class="form-label required" for="slug">Permalink</label>
                                    <div class="input-group input-group-flat">
                                        <span class="input-group-text">
                                            {{ config('app.url') }}/
                                        </span>
                                        <input id="slug" class="form-control ps-0" type="text" readonly/>
                                    </div>
                                </div>
                                <small id="slug-preview" class="form-hint mt-n2 text-truncate">Preview: 
                                    <a href="" target="_blank">{{ config('app.url') }}/</a>
                                </small>
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
            </div>
         </div>
      </form>
   </div>
</div>
@endsection