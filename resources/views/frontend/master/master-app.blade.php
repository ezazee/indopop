<!DOCTYPE html>
<html lang="en">

<head>
    @include('frontend.master.master-meta')
    @include('frontend.master.master-css')
</head>

<body>
    <div class="wrapper">
        @include('frontend.components.navbar')
        <div>
            @yield('content')
        </div>
        @include('frontend.components.floating-ads')

        @include('frontend.components.footer')
    </div>


    @include('frontend.master.master-js')
</body>

</html>
