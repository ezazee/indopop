@extends('backend.master.app')
@section('content')
    @include('backend.components.breadcrumb')
    <div class="page-body page-content">
        <div class="container-xl">
            <div class="table-wrapper">
                <div class="card mb-3 table-configuration-wrap" style="display: none;">
                    <div class="card-body">
                        <button class="btn btn-icon  btn-sm btn-show-table-options rounded-pill" type="button">
                            <svg class="icon icon-sm icon-left svg-icon-ti-ti-x" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M18 6l-12 12" />
                                <path d="M6 6l12 12" />
                            </svg>
                        </button>
                        <div class="wrapper-filter">
                            <p>Filters</p>
                            <input type="hidden" class="filter-data-url"
                                value="https://cms.botble.com/admin/tables/filters" />
                            <div class="sample-filter-item-wrap hidden">
                                <div class="row filter-item form-filter">
                                    <div class="col-auto w-50 w-sm-auto">
                                        <div class="mb-3 position-relative">
                                            <select class="form-select filter-column-key" name="filter_columns[]"
                                                id="filter_columns[]">
                                                <option value="username">Username</option>
                                                <option value="email">Email</option>
                                                <option value="status">Status</option>
                                                <option value="created_at">Created At</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-auto w-50 w-sm-auto">
                                        <div class="mb-3 position-relative">
                                            <select class="form-select filter-operator filter-column-operator"
                                                name="filter_operators[]" id="filter_operators[]">
                                                <option value="like">Contains</option>
                                                <option value="=">Is equal to</option>
                                                <option value="&gt;">Greater than</option>
                                                <option value="&lt;">Less than</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-auto w-100 w-sm-25">
                                        <span class="filter-column-value-wrap">
                                            <input class="form-control filter-column-value" type="text"
                                                placeholder="Value" name="filter_values[]">
                                        </span>
                                    </div>
                                    <div class="col">
                                        <button class="btn btn-icon   btn-remove-filter-item mb-3 text-danger"
                                            type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                            <svg class="icon icon-left svg-icon-ti-ti-trash"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M4 7l16 0" />
                                                <path d="M10 11l0 6" />
                                                <path d="M14 11l0 6" />
                                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <form method="GET" action="https://cms.botble.com/admin/system/users" accept-charset="UTF-8"
                                class="filter-form">
                                <input type="hidden" name="filter_table_id" class="filter-data-table-id"
                                    value="botble-a-c-l-tables-user-table">
                                <input type="hidden" name="class" class="filter-data-class"
                                    value="Botble\ACL\Tables\UserTable">
                                <div class="filter_list inline-block filter-items-wrap">
                                    <div class="row filter-item form-filter filter-item-default">
                                        <div class="col-auto w-50 w-sm-auto">
                                            <div class="mb-3 position-relative">
                                                <select class="form-select filter-column-key" name="filter_columns[]"
                                                    id="filter_columns[]">
                                                    <option value="" selected>Select field</option>
                                                    <option value="username">Username</option>
                                                    <option value="email">Email</option>
                                                    <option value="status">Status</option>
                                                    <option value="created_at">Created At</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-auto w-50 w-sm-auto">
                                            <div class="mb-3 position-relative">
                                                <select class="form-select filter-operator filter-column-operator"
                                                    name="filter_operators[]" id="filter_operators[]">
                                                    <option value="like">Contains</option>
                                                    <option value="=" selected>Is equal to</option>
                                                    <option value="&gt;">Greater than</option>
                                                    <option value="&lt;">Less than</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-auto w-100 w-sm-25">
                                            <div class="filter-column-value-wrap mb-3">
                                                <input class="form-control filter-column-value" type="text"
                                                    placeholder="Value" name="filter_values[]" value="">
                                            </div>
                                        </div>
                                        <div class="col">
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-list">
                                    <button class="btn   add-more-filter" type="button">
                                        Add additional filter
                                    </button>
                                    <button class="btn btn-primary  btn-apply" type="submit">
                                        Apply
                                    </button>
                                    <a class="btn btn-icon" style="display: none;" type="button"
                                        href="https://cms.botble.com/admin/system/users"
                                        data-bb-toggle="datatable-reset-filter">
                                        <svg class="icon icon-left svg-icon-ti-ti-refresh"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                                        </svg>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="card has-actions has-filter">
                    <div class="card-header">
                        <div class="w-100 justify-content-between d-flex flex-wrap align-items-center gap-1">
                            <div class="d-flex flex-wrap flex-md-nowrap align-items-center gap-1">
                                <div class="dropdown d-inline-block">
                                    <button class="btn   dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                        Bulk Actions
                                    </button>
                                    <div class="dropdown-menu">
                                        <div class="dropdown-submenu">
                                            <button class="dropdown-item">
                                                Bulk changes
                                                <svg class="icon dropdown-item-icon ms-auto me-0 svg-icon-ti-ti-chevron-right"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M9 6l6 6l-6 6" />
                                                </svg>
                                            </button>
                                            <div class="dropdown-menu">
                                                <button class="dropdown-item bulk-change-item" data-key="username"
                                                    data-class-item="Botble\ACL\Tables\UserTable"
                                                    data-save-url="https://cms.botble.com/admin/tables/bulk-changes/save">
                                                    Username
                                                </button>
                                                <button class="dropdown-item bulk-change-item" data-key="email"
                                                    data-class-item="Botble\ACL\Tables\UserTable"
                                                    data-save-url="https://cms.botble.com/admin/tables/bulk-changes/save">
                                                    Email
                                                </button>
                                                <button class="dropdown-item bulk-change-item" data-key="status"
                                                    data-class-item="Botble\ACL\Tables\UserTable"
                                                    data-save-url="https://cms.botble.com/admin/tables/bulk-changes/save">
                                                    Status
                                                </button>
                                                <button class="dropdown-item bulk-change-item" data-key="created_at"
                                                    data-class-item="Botble\ACL\Tables\UserTable"
                                                    data-save-url="https://cms.botble.com/admin/tables/bulk-changes/save">
                                                    Created At
                                                </button>
                                            </div>
                                        </div>
                                        <a class="dropdown-item" href="https://cms.botble.com/admin/tables/bulk-actions"
                                            data-trigger-bulk-action="data-trigger-bulk-action" data-method="POST"
                                            data-table-target="Botble\ACL\Tables\UserTable"
                                            data-target="Botble\Table\BulkActions\DeleteBulkAction"
                                            data-confirmation-modal-title="Confirm to perform this action"
                                            data-confirmation-modal-message="Are you sure you want to do this action? This cannot be undone."
                                            data-confirmation-modal-button="Delete"
                                            data-confirmation-modal-cancel-button="Cancel">
                                            Delete
                                        </a>
                                    </div>
                                </div>
                                <button class="btn   btn-show-table-options" type="button">
                                    Filters
                                </button>
                                <div class="table-search-input">
                                    <label>
                                        <input type="search" class="form-control input-sm" placeholder="Search..."
                                            style="min-width: 120px">
                                        <button type="button" title="Search..." class="search-icon">
                                            <svg class="icon  svg-icon-ti-ti-search" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                                <path d="M21 21l-6 -6" />
                                            </svg>
                                        </button>
                                        <button type="button" title="Clear" class="search-reset-icon">
                                            <svg class="icon  svg-icon-ti-ti-x" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M18 6l-12 12" />
                                                <path d="M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </label>
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-1">
                                <button class="btn action-item btn-primary " tabindex="0"
                                    aria-controls="botble-a-c-l-tables-user-table" type="button" aria-haspopup="dialog"
                                    aria-expanded="false">
                                    <span data-action="create"
                                        data-href="{{ route('settings.createMemberDashboard') }}">
                                        <svg class="icon  svg-icon-ti-ti-plus" xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 5l0 14" />
                                            <path d="M5 12l14 0" />
                                        </svg>
                                        Create
                                    </span>
                                </button>
                                <button class="btn" type="button" data-bb-toggle="dt-buttons"
                                    data-bb-target=".buttons-reload" tabindex="0"
                                    aria-controls="botble-a-c-l-tables-user-table">
                                    <svg class="icon icon-left svg-icon-ti-ti-refresh" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                        <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                                    </svg>
                                    Reload
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-table">
                        <div class="table-responsive table-has-actions table-has-filter">
                            <table class="table card-table table-vcenter table-striped table-hover"
                                id="botble-a-c-l-tables-user-table">
                                <thead>
                                    <tr>
                                        <th title="Checkbox"><input
                                                class="form-check-input m-0 align-middle table-check-all"
                                                data-set=".dataTable .checkboxes" name="" type="checkbox"></th>
                                        <th title="Image" width="50"
                                                class=" column-key-1  column-key-1  column-key-1">Avatar</th>
                                        <th title="Name" class="text-start  column-key-0">Name
                                        </th>
                                        <th title="Email" class="text-start  column-key-1">Email</th>
                                        <th title="Role" class=" column-key-2">Role</th>
                                        <th title="Created At" width="100" class=" column-key-3">
                                            Created At
                                        </th>
                                        <th title="Status" width="100" class=" column-key-4">Status
                                        </th>
                                        <th class="text-center" title="Operations">Operations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($user as $item)
                                    <tr class="odd">
                                        <td class="w-1 text-start no-column-visibility dtr-control"><input
                                                class="form-check-input m-0 align-middle checkboxes" type="checkbox"
                                                name="id[]" value="1"></td>
                                                <td class="column-key-1  column-key-1  column-key-1"><img
                                                    src="{{ asset('backend/images/profile/profile.png') }}" width="50"
                                                    alt="Image"></td>
                                        <td class="text-start column-key-0 sorting_1"><a
                                                href="{{ route('settings.editMemberDashboard', ['id' => $item->id ]) }}"
                                                title="{{$item->name}}">{{$item->name}}</a></td>
                                        <td class="  text-start  column-key-1"><a
                                                href="mailto:{{ $item->email }}">{{ $item->email }}</a></td>
                                        <td class="   column-key-2">
                                                {{ $item->role->name }}
                                            </a>
                                        </td>
                                        <td class="column-key-3">{{ date('Y-m-d', strtotime($item->created_at)) }}</td>
                                        <td class="column-key-4"><span
                                                class="badge bg-info text-info-fg">{{ $item->status }}</span></td>
                                        <td class="  text-center no-column-visibility text-nowrap">
                                            <div class="table-actions">
                                                <a href="{{ route('settings.editMemberDashboard', ['id' => $item->id ]) }}"
                                                    class="btn btn-sm btn-icon btn-primary">
                                                    <svg class="icon  svg-icon-ti-ti-edit" data-bs-toggle="tooltip"
                                                        data-bs-title="Edit" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path
                                                            d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1">
                                                        </path>
                                                        <path
                                                            d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z">
                                                        </path>
                                                        <path d="M16 5l3 3"></path>
                                                    </svg>
                                                    <span class="sr-only">Edit</span>
                                                </a>
                                                <form action="{{ route('settings.deleteMemberDashboard', ['id' => $item->id]) }}" method="POST" style="display:inline;">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-sm btn-icon btn-danger" data-bs-toggle="tooltip" data-bs-title="Delete"
                                                        onclick="return confirm('Do you really want to delete this record?');">
                                                        <svg class="icon svg-icon-ti-ti-trash" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M4 7l16 0"></path>
                                                            <path d="M10 11l0 6"></path>
                                                            <path d="M14 11l0 6"></path>
                                                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                                        </svg>
                                                        <span class="sr-only">Delete</span>
                                                    </button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>   
                                    @endforeach
                                </tbody>
                            </table>
                            <div class="mt-3">
                                {{ $user->links('pagination::bootstrap-4') }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
