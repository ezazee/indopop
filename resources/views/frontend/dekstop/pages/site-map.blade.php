@extends('frontend.dekstop.master.master-app')
@section('content')
    <div class="content-home" id="content">
        <div class="content-article mt-15">
            <article class="article-detail">
                <h3 class="card-headline-no-image-title-detail">SITE MAP</h3>
                <div class="article-detail--body">
                    <div class="list-article">
                        <ul>
                            <li><a href="?page=home">HOME</a></li>
                            <li><a href="?page=kanal">DANGDUT</a></li>
                            <li><a href="?page=kanal">FLEXING</a></li>
                            <li><a href="?page=kanal">GOSIP</a></li>
                            <li><a href="?page=kanal">K-POP</a></li>
                            <li><a href="?page=kanal">VIBES</a></li>
                            <li><a href="?page=kanal">ME AND MOMS</a></li>
                            <li><a href="?page=kanal">VIDEO</a></li>
                            <li><a href="?page=kanal">INDEKS</a></li>
                        </ul>
                    </div>
                </div>
            </article>

        </div>

        @include('frontend.dekstop.components.sidebar')
    </div>
@endsection
