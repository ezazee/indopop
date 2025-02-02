@extends('backend.master.app')
<style>
    iframe {
        width: 100%;
        height: 600px; /* Adjust height as needed */
        border: none;
    }
</style>
@section('content')
<div class="page-header d-print-none">
    <div class="container-xl">
        <div class="row g-2 align-items-center">
            <div class="col">
                <div class="page-pretitle">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="{{ route('dashboard') }}">Dashboard</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                               <h1 class="mb-0 d-inline-block fs-6 lh-1">Media</h1>
                           </li>
                        </ol>
                    </nav>
 
                </div>
            </div>
            <div class="col-auto ms-auto d-print-none">
                <div class="btn-list">
                </div>
            </div>
        </div>
    </div>
 </div>
 

    <div class="page-body page-content">
        <div class="container-xl">
            <iframe src="{{ url('/laravel-filemanager?type=image') }}" title="File Manager"></iframe>
        </div>
    </div>
@endsection
