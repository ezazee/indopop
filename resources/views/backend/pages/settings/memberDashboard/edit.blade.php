@extends('backend.master.app')
@section('content')
@include('backend.components.breadcrumb')
<div class="page-body page-content">
    <div class="container-xl">
        <form method="POST" action="{{ route('settings.addMemberDashboard') }}" accept-charset="UTF-8"
            class="js-base-form dirty-check">
            @csrf
            <div class="row">
                <div class="gap-3 col-md-9">
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="form-body">
                                <div class="row row-cols-lg-2">
                                    <div class="mb-3 position-relative">
                                        <label class="form-label form-label required" for="first_name">
                                            First Name
                                        </label>
                                        <input class="form-control" data-counter="30" required="required"
                                            name="first_name" type="text" value="{{ $member->first_name }}">
                                    </div>
                                    <div class="mb-3 position-relative">
                                        <label class="form-label form-label required" for="last_name">
                                            Last Name
                                        </label>
                                        <input class="form-control" data-counter="30" name="last_name" type="text" value="{{ $member->last_name }}">
                                    </div>
                                    <div class="mb-3 position-relative">
                                        <label class="form-label form-label required" for="email">
                                            Email
                                        </label>
                                        <input class="form-control" data-counter="60"
                                            placeholder="e.g: example@domain.com" required="required" name="email"
                                            type="text" value="{{ $member->email }}">
                                    </div>
                                    <div class="mb-3 position-relative">
                                        <label class="form-label form-label required" for="phone" value="{{ $member->phone }}">
                                            Phone
                                        </label>
                                        <input class="form-control" data-counter="16" required="required" name="phone"
                                            type="number">
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="mb-3 position-relative">
                                            <label class="form-label form-label required" for="password">
                                                Password
                                            </label>
                                            <input class="form-control" data-counter="60" required="required"
                                                name="password" type="password">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="mb-3 position-relative">
                                            <label class="form-label form-label required" for="password_confirmation">
                                                Re-type password
                                            </label>
                                            <input class="form-control" data-counter="60" required="required"
                                                name="password_confirmation" type="password">
                                        </div>
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
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
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
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
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
                    <div class="card meta-boxes">
                        <div class="card-header">
                            <h4 class="card-title">
                                <label for="status" class="form-label required">Role</label>
                            </h4>
                        </div>

                        <div class="card-body">
                            <select class="form-control form-select" name="role">
                                <option value="1" {{ $member->role->name == 'Editor' ? 'selected' : '' }}>Editor</option>
                                <option value="2" {{ $member->role->name== 'Administrator' ? 'selected' : '' }}>Administrator</option>
                            </select>
                        </div>                        
                    </div>
                    <div class="card meta-boxes">
                        <div class="card-header">
                            <h4 class="card-title">
                                <label for="status" class="form-label required">Status</label>
                            </h4>
                        </div>

                        <div class="card-body">
                            <select class="form-control form-select" name="status">
                                <option value="active" {{ $member->status == 'active' ? 'selected' : '' }}>Active</option>
                                <option value="block" {{ $member->status == 'block' ? 'selected' : '' }}>Block</option>
                            </select>
                        </div>                        
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection
