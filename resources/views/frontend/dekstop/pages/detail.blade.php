@extends('frontend.dekstop.master.master-app')

<style>
    .article-detail--body img {
        width: 100% !important;
        height: auto !important;
        margin: 10px 0 !important;
        border-radius: 8px !important;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1) !important;
    }

    .article-detail--body  iframe {
        width: 100% !important;
        height: 800px !important;
        margin: 10px 0 !important;
        border-radius: 8px !important;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1) !important;
    }
</style>
@section('content')
    <div class="main-content">

        {{-- Ads --}}
        @include('frontend.dekstop.components.ads-1')

        <div class="mt-20">
            <h3 class="card-headline-no-image-title">{{ $post->kategori->nama_kategori }}</h3>
        </div>

        <div class="content-home" id="content">
            <div class="content-article">
                <article class="article-detail">
                    <h1 class="article-detail--title">{{ $post->title }}</h1>
                    @if ($post->description)
                        <div class="article-detail--desc">{{ $post->description }}</div>
                    @endif
                    <div class="article-detail--info">
                        <div class="author">
                            <strong>{{ $post->user->name }}</strong>
                        </div>
                        <div class="date">
                            {{ \Carbon\Carbon::parse($post->created_at)->translatedFormat('l, d F Y | H:i') }} WIB
                        </div>
                    </div>

                    <div class="share-baru-header">
                        <a href="#">
                            <img src="{{ asset('frontend/icons/fb.svg') }}" alt="">
                        </a>
                        <a href="#">
                            <img src="{{ asset('frontend/icons/twitter.svg') }}" alt="">
                        </a>
                        <a href="#">
                            <img src="{{ asset('frontend/icons/tele.svg') }}" alt="">
                        </a>
                        <a href="#">
                            <img src="{{ asset('frontend/icons/wa.svg') }}" alt="">
                        </a>
                        <a href="#">
                            <img src="{{ asset('frontend/icons/link.svg') }}" alt="">
                        </a>
                    </div>

                    <figure class="article-detail-figure">
                        <img alt="image" width="660" height="497"
                            src="{{ is_array($post->gambar) ? $post->gambar[0] : $post->gambar }}"
                            class="card-headline-img" />

                    </figure>
                    <div class="article-detail--body">
                        <p><strong>Indopop.id</strong> {!! preg_replace_callback(
                            '/<img[^>]+alt="([^"]*)"[^>]*>/i',
                            function ($matches) {
                                return $matches[0] . '<br><i>' . htmlspecialchars($matches[1]) . '</i>';
                            },
                            preg_replace('/\[caption[^\]]*\]/is', '', $post->content),
                        ) !!}
                        </p>
                    </div>
                    <div class="article-detail-tag">
                        <span class="label card-headline-no-image-title-detail2">Tag</span>
                        @foreach ($tagsdetail as $index => $tags)
                            <a href="{{ route('bytag', ['slug' => $tags->slug]) }}" class="tag-item">
                                {{ $tags->nama_tags }}</a>
                        @endforeach
                    </div>

                    <div class="share-baru-bottom">
                        <span>Share link :</span>
                        <a href="#">
                            <img src="{{ asset('frontend/icons/fb.svg') }}" alt="">
                        </a>
                        <a href="#">
                            <img src="{{ asset('frontend/icons/twitter.svg') }}" alt="">
                        </a>
                        <a href="#">
                            <img src="{{ asset('frontend/icons/tele.svg') }}" alt="">
                        </a>
                        <a href="#">
                            <img src="{{ asset('frontend/icons/wa.svg') }}" alt="">
                        </a>
                        <a href="#">
                            <img src="{{ asset('frontend/icons/link.svg') }}" alt="">
                        </a>
                    </div>
                </article>

                <div class="mt-30">
                    <h3 class="card-headline-no-image-title">Terkini</h3>
                    <div class="list">
                        @foreach ($postTerkiniBottom as $item)
                            <div class="list-element">
                                <article class="main-card">
                                    <div class="main-card-img-wrap">
                                        <img alt="image" class="main-card-img" width="213" height="130"
                                            src="{{ is_array($item->gambar) ? $item->gambar[0] : $item->gambar }}" />
                                    </div>
                                    <div class="main-card--info">
                                        <h4 class="main-card--title">
                                            <a
                                                href="{{ route('detail.desktop', ['slug' => $item->slug]) }}">{{ $item->title }}</a>
                                        </h4>
                                        <p class="main-card--desc">{!! Str::limit(strip_tags($item->content), 100) !!}</p>
                                        <div class="category-and-time">
                                            <span>{{ \Carbon\Carbon::parse($item->created_at)->format('H:i') }} WIB</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        @endforeach
                    </div>
                    <div>
                        <button class="main-card-loadmore" id="loadmore">Tampilkan lebih banyak</button>
                    </div>
                </div>
            </div>
            @include('frontend.dekstop.components.sidebar')
        </div>
    </div>
@endsection
