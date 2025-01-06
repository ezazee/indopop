@extends('backend.master.app')
<style>
    iframe {
        width: 100%;
        height: 600px; /* Adjust height as needed */
        border: none;
    }
</style>
@section('content')
    @include('backend.components.breadcrumb')

    <div class="page-body page-content">
        <div class="container-xl">
            <iframe src="{{ url('/laravel-filemanager') }}" title="File Manager"></iframe>
        </div>
    </div>
@endsection
