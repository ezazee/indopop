@extends('backend.master.app')
@section('content')
<div class="page-header d-print-none">
   <div class="container-xl">
      <div class="row g-2 align-items-center">
         <div class="col">
            <div class="page-pretitle">
               <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                     <li class="breadcrumb-item active" aria-current="page">
                        <h1 class="mb-0 d-inline-block fs-6 lh-1">Dashboard</h1>
                     </li>
                  </ol>
               </nav>
            </div>
         </div>
      </div>
   </div>
</div>
<div class="page-body page-content">
   <div class="container-xl">
      <div class="row">
         <div class="col-12">
            <div class="row row-cards">
               <div class="col dashboard-widget-item col-12 col-md-6 col-lg-3">
                  <a class="text-white d-block rounded position-relative overflow-hidden text-decoration-none bg-pink"
                     href="" style="">
                     <div class="d-flex justify-content-between align-items-center">
                        <div class="details px-4 py-3 d-flex flex-column justify-content-between">
                           <div class="desc fw-medium">Post Total</div>
                           <div class="number fw-bolder">
                              <span>{{ $postCount }}</span>
                           </div>
                        </div>
                        <div class="visual ps-1 position-absolute end-0">
                           <svg class="icon me-n2 svg-icon-ti-ti-palette"
                              style="opacity: .1; --bb-icon-size: 80px;" xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path
                                 d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                              <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                           </svg>
                        </div>
                     </div>
                  </a>
               </div>
               <div class="col dashboard-widget-item col-12 col-md-6 col-lg-3">
                  <a class="text-white d-block rounded position-relative overflow-hidden text-decoration-none bg-info"
                     href="{{ route('member.index') }}" style="">
                     <div class="d-flex justify-content-between align-items-center">
                        <div class="details px-4 py-3 d-flex flex-column justify-content-between">
                           <div class="desc fw-medium">Users</div>
                           <div class="number fw-bolder">
                              <span>{{ $userCount }}</span>
                           </div>
                        </div>
                        <div class="visual ps-1 position-absolute end-0">
                           <svg class="icon me-n2 svg-icon-ti-ti-users"
                              style="opacity: .1; --bb-icon-size: 80px;" xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                           </svg>
                        </div>
                     </div>
                  </a>
               </div>
               <div class="col dashboard-widget-item col-12 col-md-6 col-lg-3">
                  <a class="text-white d-block rounded position-relative overflow-hidden text-decoration-none bg-success"
                     href="https://cms.botble.com/admin/plugins/installed" style="">
                     <div class="d-flex justify-content-between align-items-center">
                        <div class="details px-4 py-3 d-flex flex-column justify-content-between">
                           <div class="desc fw-medium">Plugins</div>
                           <div class="number fw-bolder">
                              <span>16</span>
                           </div>
                        </div>
                        <div class="visual ps-1 position-absolute end-0">
                           <svg class="icon me-n2 svg-icon-ti-ti-plug"
                              style="opacity: .1; --bb-icon-size: 80px;" xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path
                                 d="M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054z" />
                              <path d="M4 20l3.5 -3.5" />
                              <path d="M15 4l-3.5 3.5" />
                              <path d="M20 9l-3.5 3.5" />
                           </svg>
                        </div>
                     </div>
                  </a>
               </div>
               <div class="col dashboard-widget-item col-12 col-md-6 col-lg-3">
                  <a class="text-white d-block rounded position-relative overflow-hidden text-decoration-none bg-yellow"
                     href="https://cms.botble.com/admin/pages" style="">
                     <div class="d-flex justify-content-between align-items-center">
                        <div class="details px-4 py-3 d-flex flex-column justify-content-between">
                           <div class="desc fw-medium">Pages</div>
                           <div class="number fw-bolder">
                              <span>5</span>
                           </div>
                        </div>
                        <div class="visual ps-1 position-absolute end-0">
                           <svg class="icon me-n2 svg-icon-ti-ti-files"
                              style="opacity: .1; --bb-icon-size: 80px;" xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M15 3v4a1 1 0 0 0 1 1h4" />
                              <path
                                 d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z" />
                              <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
                           </svg>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
         </div>
      </div>
      <div class="mb-3 col-12">
      </div>
      <div class="col-12">
         <div id="list_widgets" class="row row-cards" data-bb-toggle="widgets-list"
            data-url="https://cms.botble.com/admin/widgets/order">
            <div class="widget-item col-12 d-flex " id="widget_analytics_general"
               data-url="https://cms.botble.com/admin/analytics/general">
               <div class="card card-sm flex-fill">
                  <div class="card-header">
                     <h4 class="card-title">
                        Site Analytics
                     </h4>
                     <div class="card-actions btn-actions">
                        <div class="dropdown d-flex align-items-center me-2 predefined_range">
                           <a class="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown"
                              aria-haspopup="true" aria-expanded="false">
                           Today
                           </a>
                           <div class="dropdown-menu">
                              <button class="dropdown-item" data-key="today" data-label="Today">
                              Today
                              </button>
                              <button class="dropdown-item" data-key="yesterday" data-label="Yesterday">
                              Yesterday
                              </button>
                              <button class="dropdown-item" data-key="this_week" data-label="This Week">
                              This Week
                              </button>
                              <button class="dropdown-item" data-key="last_7_days"
                                 data-label="Last 7 Days">
                              Last 7 Days
                              </button>
                              <button class="dropdown-item" data-key="this_month" data-label="This Month">
                              This Month
                              </button>
                              <button class="dropdown-item" data-key="last_30_days"
                                 data-label="Last 30 Days">
                              Last 30 Days
                              </button>
                              <button class="dropdown-item" data-key="this_year" data-label="This Year">
                              This Year
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="d-flex flex-column justify-content-between h-100 widget-content  "
                     style="min-height: 10rem;"></div>
               </div>
            </div>
            <div class="widget-item col-12 d-flex col-md-6 col-sm-6">
               <div class="card card-sm flex-fill">
                  <div class="card-header">
                     <h4 class="card-title">
                        Top Most Visit Pages
                     </h4>
                     <div class="card-actions btn-actions">
                        <div class="dropdown d-flex align-items-center me-2 predefined_range">
                           <a class="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown"
                              aria-haspopup="true" aria-expanded="false">
                           Today
                           </a>
                           <div class="dropdown-menu">
                              <button class="dropdown-item" data-key="today" data-label="Today">
                              Today
                              </button>
                              <button class="dropdown-item" data-key="yesterday" data-label="Yesterday">
                              Yesterday
                              </button>
                              <button class="dropdown-item" data-key="this_week" data-label="This Week">
                              This Week
                              </button>
                              <button class="dropdown-item" data-key="last_7_days"
                                 data-label="Last 7 Days">
                              Last 7 Days
                              </button>
                              <button class="dropdown-item" data-key="this_month" data-label="This Month">
                              This Month
                              </button>
                              <button class="dropdown-item" data-key="last_30_days"
                                 data-label="Last 30 Days">
                              Last 30 Days
                              </button>
                              <button class="dropdown-item" data-key="this_year" data-label="This Year">
                              This Year
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="d-flex flex-column justify-content-between h-100 widget-content" style="min-height: 10rem;">
                     <table class="table table-striped" id="top-pages-table">
                         <thead>
                             <tr>
                                 <th>#</th>
                                 <th>URL</th>
                                 <th>Views</th>
                             </tr>
                         </thead>
                         <tbody class="table-body-getTopPages">
                       </tbody>
                     </table>
                     <p id="no-data" class="text-center" style="display: none;">No data received</p>
                 </div>
               </div>
            </div>
            <div class="widget-item col-12 d-flex col-md-6 col-sm-6">
               <div class="card card-sm flex-fill">
                  <div class="card-header">
                     <h4 class="card-title">
                        Top Browsers
                     </h4>
                     <div class="card-actions btn-actions">
                        <div class="dropdown d-flex align-items-center me-2 predefined_range">
                           <a class="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown"
                              aria-haspopup="true" aria-expanded="false">
                           Today
                           </a>
                           <div class="dropdown-menu">
                              <button class="dropdown-item" data-key="today" data-label="Today">
                              Today
                              </button>
                              <button class="dropdown-item" data-key="yesterday" data-label="Yesterday">
                              Yesterday
                              </button>
                              <button class="dropdown-item" data-key="this_week" data-label="This Week">
                              This Week
                              </button>
                              <button class="dropdown-item" data-key="last_7_days"
                                 data-label="Last 7 Days">
                              Last 7 Days
                              </button>
                              <button class="dropdown-item" data-key="this_month" data-label="This Month">
                              This Month
                              </button>
                              <button class="dropdown-item" data-key="last_30_days"
                                 data-label="Last 30 Days">
                              Last 30 Days
                              </button>
                              <button class="dropdown-item" data-key="this_year" data-label="This Year">
                              This Year
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="d-flex flex-column justify-content-between h-100 widget-content" style="min-height: 10rem;">
                     <table class="table table-striped" id="top-browsers-table">
                         <thead>
                             <tr>
                                 <th>#</th>
                                 <th>Browser</th>
                                 <th>Views</th>
                             </tr>
                         </thead>
                         <tbody class="table-body-gettopBrowsers">
                       </tbody>
                     </table>
                     <p id="no-data" class="text-center" style="display: none;">No data received</p>
                 </div>
               </div>
            </div>
            <div class="widget-item col-12 d-flex col-md-6 col-sm-6">
               <div class="card card-sm flex-fill">
                  <div class="card-header">
                     <h4 class="card-title">
                        Top Referrers
                     </h4>
                     <div class="card-actions btn-actions">
                        <div class="dropdown d-flex align-items-center me-2 predefined_range">
                           <a class="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown"
                              aria-haspopup="true" aria-expanded="false">
                           Today
                           </a>
                           <div class="dropdown-menu">
                              <button class="dropdown-item" data-key="today" data-label="Today">
                              Today
                              </button>
                              <button class="dropdown-item" data-key="yesterday" data-label="Yesterday">
                              Yesterday
                              </button>
                              <button class="dropdown-item" data-key="this_week" data-label="This Week">
                              This Week
                              </button>
                              <button class="dropdown-item" data-key="last_7_days"
                                 data-label="Last 7 Days">
                              Last 7 Days
                              </button>
                              <button class="dropdown-item" data-key="this_month" data-label="This Month">
                              This Month
                              </button>
                              <button class="dropdown-item" data-key="last_30_days"
                                 data-label="Last 30 Days">
                              Last 30 Days
                              </button>
                              <button class="dropdown-item" data-key="this_year" data-label="This Year">
                              This Year
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="d-flex flex-column justify-content-between h-100 widget-content" style="min-height: 10rem;">
                     <table class="table table-striped" id="top-refrer-table">
                         <thead>
                             <tr>
                                 <th>#</th>
                                 <th>URL</th>
                                 <th>Views</th>
                             </tr>
                         </thead>
                         <tbody class="table-body-gettopReferrers">
                         </tbody>
                     </table>
                     <p id="no-data" class="text-center" style="display: none;">No data received</p>
                 </div>
               </div>
            </div>
            <div class="widget-item col-12 d-flex col-md-6 col-sm-6" id="widget_posts_recent"
               data-url="https://cms.botble.com/admin/blog/posts/widgets/recent-posts">
               <div class="card card-sm flex-fill">
                  <div class="card-header">
                     <h4 class="card-title">
                        Recent Posts
                     </h4>
                     <div class="card-actions btn-actions"></div>
                  </div>
                  <div class="d-flex flex-column justify-content-between h-100 widget-content  "
                     style="min-height: 10rem;"></div>
               </div>
            </div>
            <div class="widget-item col-12 d-flex col-md-6 col-sm-6" id="widget_audit_logs"
               data-url="https://cms.botble.com/admin/audit-logs/widgets/activities">
               <div class="card card-sm flex-fill">
                  <div class="card-header">
                     <h4 class="card-title">
                        Activities Logs
                     </h4>
                     <div class="card-actions btn-actions"></div>
                  </div>
                  <div class="d-flex flex-column justify-content-between h-100 widget-content  "
                     style="min-height: 10rem;"></div>
               </div>
            </div>
            <div class="widget-item col-12 d-flex col-md-6 col-sm-6" id="widget_request_errors"
               data-url="https://cms.botble.com/admin/request-logs/widgets/request-errors">
               <div class="card card-sm flex-fill">
                  <div class="card-header">
                     <h4 class="card-title">
                        Request Errors
                     </h4>
                     <div class="card-actions btn-actions"></div>
                  </div>
                  <div class="d-flex flex-column justify-content-between h-100 widget-content  "
                     style="min-height: 10rem;"></div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

<script>
   document.addEventListener('DOMContentLoaded', function () {
       fetchTopPages();
       fetchTopBrowsers();
      //  fetchTopReferrers();
   });
   
   function fetchTopPages() {
      const tableBody = document.querySelector('.table-body-getTopPages');
      const loadingRow = document.createElement('tr');
      loadingRow.classList.add('loading-row');
      loadingRow.innerHTML = `<td colspan="3" class="text-center">Loading...</td>`;
      tableBody.innerHTML = ''; 
      tableBody.appendChild(loadingRow);

      fetch('/top-pages')
      .then(response => response.json())
      .then(data => {
         const loadingRow = document.querySelector('.loading-row');
         if (loadingRow) {
            loadingRow.remove();
         }
         if (data.topPages && data.topPages.length > 0) {
               const tableBody = document.querySelector('.table-body-getTopPages');
               data.topPages.forEach((page, index) => {
                  let row = document.createElement('tr');
                  row.innerHTML = `
                     <td>${index + 1}</td>
                     <td>${page.page}</td>
                     <td>${page.sessions}</td>
                  `;
                  tableBody.appendChild(row);
               });
         } else {
               const tableBody = document.querySelector('.table-body-getTopPages');
               let row = document.createElement('tr');
               row.innerHTML = `<td colspan="3" class="text-center">No data received</td>`;
               tableBody.appendChild(row);
         }
      })
      .catch(error => {
         console.error('Error fetching data:', error);
      });

   }

   function fetchTopBrowsers() {
      const tableBody = document.querySelector('.table-body-gettopBrowsers');
      const loadingRow = document.createElement('tr');
      loadingRow.classList.add('loading-row');
      loadingRow.innerHTML = `<td colspan="3" class="text-center">Loading...</td>`;
      tableBody.innerHTML = ''; 
      tableBody.appendChild(loadingRow);
      
      fetch('/top-browsers')
      .then(response => response.json())
      .then(data => {
         const loadingRow = document.querySelector('.loading-row');
         if (loadingRow) {
            loadingRow.remove();
         }
         if (data.topBrowsers && data.topBrowsers.length > 0) {
               const tableBody = document.querySelector('.table-body-gettopBrowsers');
               data.topBrowsers.forEach((browser, index) => {
                  let row = document.createElement('tr');
                  row.innerHTML = `
                     <td>${index + 1}</td>
                     <td>${browser.browser}</td>
                     <td>${browser.sessions}</td>
                  `;
                  tableBody.appendChild(row);
               });
         } else {
               const tableBody = document.querySelector('.table-body-gettopBrowsers');
               let row = document.createElement('tr');
               row.innerHTML = `<td colspan="3" class="text-center">No data received</td>`;
               tableBody.appendChild(row);
         }
      })
      .catch(error => {
         console.error('Error fetching data:', error);
         tableBody.innerHTML = `<tr><td colspan="3" class="text-center">Failed to load data</td></tr>`;
      });

   }
</script>
@endsection