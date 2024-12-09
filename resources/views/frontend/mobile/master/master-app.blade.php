<!DOCTYPE html>
<html lang="en">

<head>
    @include('frontend.mobile.master.master-meta')
    @include('frontend.mobile.master.master-css')
</head>

<body>
    <div class="wrapper">
        @include('frontend.mobile.components.navbar')
        <div class="main-content mt-20 mb-20">
            @yield('content')
        </div>
        @include('frontend.mobile.components.footer')
    </div>


    @include('frontend.mobile.master.master-js')
</body>

</html>
