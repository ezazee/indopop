<!doctype html>
<html lang="en">

<head>
    @include('backend.master.master-meta')
    @include('backend.master.master-css')
</head>

<body class="page-sidebar-closed-hide-logo page-content-white page-container-bg-solid">
    <div id="app">
        @include('backend.components.topbar')
        <div class="d-block d-lg-flex">
            @include('backend.components.sidebar')
            @yield('content')
        </div>
    </div>
    @extends('backend.master.master-js')
</body>

</html>
