@extends('backend.master.app')
@section('content')
@include('backend.components.breadcrumb')
<div class="page-body page-content">
   <div class="container-xl">
      <form method="POST" action="https://cms.botble.com/admin/settings/analytics"
         accept-charset="UTF-8" id="google-analytics-settings" class="js-base-form dirty-check"
         section_title="Google Analytics"
         section_description="Config Credentials for Google Analytics">
         <input name="_method"
            type="hidden" value="PUT"><input name="_token" type="hidden"
            value="lWnJjtO6aqZjajFn17PiOq7UJe9buwdlsnoOgaV5">
         <div class="row mb-5 d-block d-md-flex">
            <div class="col-12 col-md-3">
               <h2>Google Analytics</h2>
               <p class="text-muted">Config Credentials for Google Analytics</p>
            </div>
            <div class="col-12 col-md-9">
               <div class="card">
                  <div class="card-body">
                     <div class="mb-3 position-relative">
                        <label class="form-check form-switch ">
                        <input name="analytics_dashboard_widgets" type="hidden" value="0" />
                        <input class="form-check-input" name="analytics_dashboard_widgets"
                           type="checkbox" value="1" id="analytics_dashboard_widgets"
                           checked />
                        <span class="form-check-label">Enable Dashboard Widgets</span>
                        </label>
                     </div>
                     <fieldset class="form-fieldset" data-bb-collapse="true"
                        data-bb-trigger="[name=analytics_dashboard_widgets]" data-bb-value="1">
                        <div class="mb-3 position-relative">
                           <label class="form-label" for="analytics_property_id">
                           Property ID for GA4
                           </label>
                           <input class="form-control" data-counter="250"
                              placeholder="Google Analytics Property ID (GA4)"
                              name="analytics_property_id" type="text" value="344382041">
                           <small class="form-hint">
                           <a href="https://developers.google.com/analytics/devguides/reporting/data/v1/property-id"
                              target="_blank">https://developers.google.com/analytics/devguides/reporting/data/v1/property-id</a>
                           </small>
                        </div>
                     </fieldset>
                     <div class="mb-3 position-relative">
                        <label class="form-label" for="google_analytics_info">
                        </label>
                        <div role="alert" class="alert alert-info form-control">
                           <div class="d-flex">
                              <div>
                                 <svg class="icon alert-icon svg-icon-ti-ti-info-circle"
                                    xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                    <path d="M12 9h.01" />
                                    <path d="M11 12h1v4h1" />
                                 </svg>
                              </div>
                              <div class="w-100">
                                 If you want to add Google Analytics Tag ID to tracking your
                                 website, please go to Admin → Settings → Website Tracking.
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-12 col-md-9 offset-md-3">
               <button class="btn btn-primary" type="submit" form="google-analytics-settings">
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
                  Save settings
               </button>
            </div>
         </div>
      </form>
   </div>
</div>
@endsection