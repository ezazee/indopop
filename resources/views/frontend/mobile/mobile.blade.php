@extends('frontend.mobile.master.master-app')

@section('content')
    <div>
        <div id="div-ad-top" data-ad-type="msite_top" class="ads ads--top_home">
            <script type="text/javascript">
                googletag.cmd.push(function() {
                    googletag.display('div-ad-top');
                });
            </script>
        </div>
        <!-- Headline -->
        @include('frontend.mobile.components.ads-2')
        <div>
            @if ($topPostheadline)
                @php
                    $images = explode('|', $topPostheadline->gambar);
                @endphp
                <article class="card-headline">
                    <img alt="image" class="card-headline-img" src="{{ isset($images[0]) ? $images[0] : '' }}" />
                    <div class="card-headline-info">
                        <h4 class="card-headline-title">
                            <a
                                href="{{ route('detail.desktop', ['slug' => $topPostheadline->slug]) }}">{{ $topPostheadline->title }}</a>
                        </h4>
                        <p class="card-headline-desc">{!! Str::limit(strip_tags($topPostheadline->content), 150) !!}</p>
                        <!-- <span class="card-headline-category">Seleb</span> -->
                    </div>
                </article>
            @else
                <p>No post found.</p>
            @endif
            <div class="card-headline-small-wrap">
                @foreach ($otherPostsheadline->take(4) as $item)
                    <article class="card-headline-small">
                        <img alt="image" class="card-headline-small-img"
                            src="{{ is_array($item->gambar) ? $item->gambar[0] : $item->gambar }}" />
                        <div class="card-headline-small-info">
                            <h4 class="card-headline-small-title">
                                <a href="{{ route('detail.desktop', ['slug' => $item->slug]) }}">{{ $item->title }}</a>
                            </h4>
                            <!-- <span class="card-headline-small-category">Seleb</span> -->
                            <div class="category-and-time-head">
                                <span>{{ \Carbon\Carbon::parse($item->created_at)->format('H:i') }} WIB</span>
                            </div>
                        </div>
                    </article>
                @endforeach
            </div>
        </div>

        <div>
            @foreach ($otherPostsheadline->slice(4, 5) as $item)
                <article class="main-card">
                    <div class="main-card-img-wrap">
                        <img alt="image" class="main-card-img"
                            src="{{ is_array($item->gambar) ? $item->gambar[0] : $item->gambar }}" />
                    </div>
                    <div class="main-card--info">
                        <h4 class="main-card--title">
                            <a href="{{ route('detail.desktop', ['slug' => $item->slug]) }}">{{ $item->title }}</a>
                        </h4>
                        <div class="category-and-time">
                            <a href="?page=detail">{{ $item->kategori->nama_kategori }}</a>
                            <span>{{ \Carbon\Carbon::parse($item->created_at)->format('H:i') }} WIB</span>
                        </div>
                    </div>
                </article>
            @endforeach

        </div>

        <!-- terpopuler -->
        <div class="mb-20 bg1">
            <h3 class="base-title pl-20 pt-20 fw-bold">Terpopuler</h3>
            <div class="list">
                @foreach ($postTerpopuler as $item)
                    <div class="list-element">
                        <article class="main-card">
                            <div class="main-card--infoml0">
                                <h4 class="main-card--title">
                                    <a href="?page=detail">{{ $item->title }}</a>
                                </h4>
                                <div class="category-and-time">
                                    <span>{{ \Carbon\Carbon::parse($item->created_at)->format('d-m-Y') }}</span>
                                </div>
                            </div>
                        </article>
                    </div>
                @endforeach
            </div>
        </div>
        <!-- end terpopuler -->

        @include('frontend.mobile.components.ads-3')

        <!-- dangdut -->
        <div class="mt-20">
            <h3 class="base-title pl-20 mb-10 fw-bold">Dangdut</h3>
            @if ($topPostDangdut)
                @php
                    $images = explode('|', $topPostDangdut->gambar);
                @endphp
                <article class="card-headline">
                    <img alt="image" class="card-headline-img" src="{{ isset($images[0]) ? $images[0] : '' }}" />
                    <div class="card-headline-info">
                        <h4 class="card-headline-title">
                            <a
                                href="{{ route('detail.desktop', ['slug' => $topPostDangdut->slug]) }}">{{ $topPostDangdut->title }}</a>
                        </h4>
                        <p class="card-headline-desc">{!! Str::limit(strip_tags($topPostDangdut->content), 100) !!}</p>
                    </div>
                </article>
            @else
                <p>No post found.</p>
            @endif
            <div>
                @foreach ($otherPostsDangdut as $post)
                    <article class="main-card">
                        <div class="main-card-img-wrap">
                            <img alt="image" class="main-card-img"
                                src="{{ is_array($post->gambar) ? $post->gambar[0] : $post->gambar }}" />
                        </div>
                        <div class="main-card--info">
                            <h4 class="main-card--title">
                                <a href="{{ route('detail.desktop', ['slug' => $post->slug]) }}">{{ $post->title }}</a>
                            </h4>
                            <div class="category-and-time">
                                <span>{{ \Carbon\Carbon::parse($post->created_at)->format('d-m-Y') }}</span>
                            </div>
                        </div>
                    </article>
                @endforeach
                <div class="t10-b20 mb-20">
                    <a href="{{ route('kanal.desktop', ['slug' => 'dangdut']) }}">
                        <button class="main-card-loadmore">Selengkapnya</button>
                    </a>
                </div>
            </div>
        </div>
        <!-- end Dangdut -->

        <!-- Video -->
        <div class="live-report-card m-20">
            <h2 class="live-report-card--heading fw-bold">Video</h2>
            <div class="live-report-card-img-wrap">
                <img alt="image" class="live-report-card-img"
                    src="https://staging.indopop.id/mobile/assets/images/thumb1a.jpg" />
                <svg class="live-report-card-img--play" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                    fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path
                        d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                </svg>
            </div>
            <h3 class="live-report-card--title">
                <a href="https://youtu.be/nkfip0yppsQ?si=HlK5Cwt2eR8PUR64" target="_blank">8 Fakta Megan Fox,
                    Aktris yang Tampil Sangat Seksi di MTV VMA 2021</a>
            </h3>
            <div class="live-report-card-wrap">
                <a href="https://youtu.be/nkfip0yppsQ?si=HlK5Cwt2eR8PUR64" target="_blank"
                    class="live-report-card-more">Video Lainnya</a>
            </div>
        </div>
        <!-- end Video -->

        <!-- Flexing -->
        <div class="mt-20">
            <h3 class="base-title pl-20 mb-10 fw-bold">Flexing</h3>
            @if ($topPostFlexing)
                @php
                    $images = explode('|', $topPostFlexing->gambar);
                @endphp
                <article class="card-headline">
                    <img alt="image" class="card-headline-img"
                        src="{{ is_array($post->gambar) ? $post->gambar[0] : $post->gambar }}" />
                    <div class="card-headline-info">
                        <h4 class="card-headline-title">
                            <a href="{{ route('detail.desktop', ['slug' => $post->slug]) }}">{{ $post->title }}</a>
                        </h4>
                        <p class="card-headline-desc">{{ \Carbon\Carbon::parse($post->created_at)->format('H:i') }} WIB</p>
                    </div>
                </article>
            @else
                <p>No post found.</p>
            @endif
            <div>
                @foreach ($otherPostsFlexing as $post)
                    <article class="main-card">
                        <div class="main-card--infomr10">
                            <h4 class="main-card--title">
                                <a href="?page=detail">{{ $post->title }}</a>
                            </h4>
                            <div class="category-and-time">
                                <span>{{ \Carbon\Carbon::parse($post->created_at)->format('H:i') }} WIB</span>
                            </div>
                        </div>
                        <div class="main-card-img-wrap">
                            <img alt="image" class="main-card-img"
                                src="{{ is_array($post->gambar) ? $post->gambar[0] : $post->gambar }}" />
                        </div>
                    </article>
                @endforeach
                <div class="t10-b20 mb-20">
                    <a href="{{ route('kanal.desktop', ['slug' => 'flexing']) }}">
                        <button class="main-card-loadmore" id="loadmore">Selengkapnya</button>
                    </a>
                </div>
            </div>
        </div>
        <!-- end Flexing -->

        @include('frontend.mobile.components.ads-4')

        <!-- Gosip -->
        <div class="mt-20">
            <h3 class="base-title pl-20 mb-10 fw-bold">Gosip</h3>
            @if ($topPostGosip)
                @php
                    $images = explode('|', $topPostGosip->gambar);
                @endphp
                <article class="card-headline">
                    <img alt="image" class="card-headline-img" src="{{ isset($images[0]) ? $images[0] : '' }}" />
                    <div class="card-headline-info">
                        <h4 class="card-headline-title">
                            <a
                                href="{{ route('detail.desktop', ['slug' => $topPostGosip->slug]) }}">{{ $topPostGosip->title }}</a>
                        </h4>
                        <p class="card-headline-desc">{!! Str::limit(strip_tags($topPostGosip->content), 100) !!}</p>
                    </div>
                </article>
            @else
                <p>No post found.</p>
            @endif
            <div>
                @foreach ($otherPostsGosip as $post)
                    <article class="main-card">
                        <div class="main-card-img-wrap">
                            <img alt="image" class="main-card-img"
                                src="{{ is_array($post->gambar) ? $post->gambar[0] : $post->gambar }}" />
                        </div>
                        <div class="main-card--info">
                            <h4 class="main-card--title">
                                <a href="{{ route('detail.desktop', ['slug' => $post->slug]) }}">{{ $post->title }}
                                </a>
                            </h4>
                            <div class="category-and-time">
                                <span>{{ \Carbon\Carbon::parse($post->created_at)->format('H:i') }} WIB</span>
                            </div>
                        </div>
                    </article>
                @endforeach
            </div>
        </div>
        <!-- end Gosip -->

        <!-- K-Pop -->
        <div class="mt-20">
            <h3 class="base-title pl-20 mb-10 fw-bold">K-Pop</h3>
            @if ($topPostKPop)
                @php
                    $images = explode('|', $topPostKPop->gambar);
                @endphp
                <article class="card-headline">
                    <img alt="image" class="card-headline-img" src="{{ isset($images[0]) ? $images[0] : '' }}" />
                    <div class="card-headline-info">
                        <h4 class="card-headline-title">
                            <a
                                href="{{ route('detail.desktop', ['slug' => $topPostKPop->slug]) }}">{{ $topPostKPop->title }}</a>
                        </h4>
                        <p class="card-headline-desc">{!! Str::limit(strip_tags($topPostKPop->content), 100) !!}</p>
                    </div>
                </article>
            @else
                <p>No post found.</p>
            @endif
            <div>
                @foreach ($otherPostsKPop as $post)
                    <article class="main-card">
                        <div class="main-card--infomr10">
                            <h4 class="main-card--title">
                                <a href="{{ route('detail.desktop', ['slug' => $post->slug]) }}">{{ $post->title }}</a>
                            </h4>
                            <div class="category-and-time">
                                <span>11:15 WIB</span>
                            </div>
                        </div>
                        <div class="main-card-img-wrap">
                            <img alt="image" class="main-card-img"
                                src="{{ is_array($post->gambar) ? $post->gambar[0] : $post->gambar }}" />
                        </div>
                    </article>
                @endforeach
                <div class="t10-b20 mb-20">
                    <a href="{{ route('kanal.desktop', ['slug' => 'k-pop']) }}">
                        <button class="main-card-loadmore" id="loadmore">Selengkapnya</button>
                    </a>
                </div>
            </div>
        </div>
        <!-- end K-Pop -->

        @include('frontend.mobile.components.ads-5')

        <!-- Vibes -->
        <div class="mt-20">
            <h3 class="base-title pl-20 mb-10 fw-bold">Vibes</h3>
            @if ($topPostVibes)
                @php
                    $images = explode('|', $topPostVibes->gambar);
                @endphp
                <article class="card-headline">
                    <img alt="image" class="card-headline-img" src="{{ isset($images[0]) ? $images[0] : '' }}" />
                    <div class="card-headline-info">
                        <h4 class="card-headline-title">
                            <a
                                href="{{ route('detail.desktop', ['slug' => $topPostVibes->slug]) }}">{{ $topPostVibes->title }}</a>
                        </h4>
                        <p class="card-headline-desc">{!! Str::limit(strip_tags($topPostVibes->content), 100) !!}</p>
                    </div>
                </article>
            @else
                <p>No post found.</p>
            @endif
            <div>
                @foreach ($otherPostsVibes as $post)
                    <article class="main-card">
                        <div class="main-card-img-wrap">
                            <img alt="image" class="main-card-img"
                                src="{{ is_array($post->gambar) ? $post->gambar[0] : $post->gambar }}" />
                        </div>
                        <div class="main-card--info">
                            <h4 class="main-card--title">
                                <a href="{{ route('detail.desktop', ['slug' => $post->slug]) }}">{{ $post->title }}</a>
                            </h4>
                            <div class="category-and-time">
                                <span>{{ \Carbon\Carbon::parse($post->created_at)->format('H:i') }} WIB</span>
                            </div>
                        </div>
                    </article>
                @endforeach
                <div class="t10-b20 mb-20">
                    <a href="{{ route('kanal.desktop', ['slug' => 'vibes']) }}">
                        <button class="main-card-loadmore" id="loadmore">Selengkapnya</button>
                    </a>
                </div>
            </div>
        </div>
        <!-- end Vibes -->

        <!-- Me And Moms -->
        <div class="mt-20">
            <h3 class="base-title pl-20 mb-10 fw-bold">Me And Moms</h3>
            @if ($topPostMeandmom)
                @php
                    $images = explode('|', $topPostMeandmom->gambar);
                @endphp
                <article class="card-headline">
                    <img alt="image" class="card-headline-img" src="{{ isset($images[0]) ? $images[0] : '' }}" />
                    <div class="card-headline-info">
                        <h4 class="card-headline-title">
                            <a
                                href="{{ route('detail.desktop', ['slug' => $topPostMeandmom->slug]) }}">{{ $topPostMeandmom->title }}</a>
                        </h4>
                        <p class="card-headline-desc">{!! Str::limit(strip_tags($topPostMeandmom->content), 100) !!}</p>
                    </div>
                </article>
            @else
                <p>No post found.</p>
            @endif
            <div>
                @foreach ($otherPostsMeandmom as $post)
                    <article class="main-card">
                        <div class="main-card--infomr10">
                            <h4 class="main-card--title">
                                <a href="{{ route('detail.desktop', ['slug' => $post->slug]) }}">{{ $post->title }}</a>
                            </h4>
                            <div class="category-and-time">
                                <span>{{ \Carbon\Carbon::parse($post->created_at)->format('H:i') }} WIB</span>
                            </div>
                        </div>
                        <div class="main-card-img-wrap">
                            <img alt="image" class="main-card-img"
                                src="{{ is_array($post->gambar) ? $post->gambar[0] : $post->gambar }}" />
                        </div>
                    </article>
                @endforeach
                <div class="t10-b20 mb-20">
                    <a href="{{ route('kanal.desktop', ['slug' => 'me-and-moms']) }}">
                        <button class="main-card-loadmore" id="loadmore">Tampilkan lebih banyak</button>
                    </a>
                </div>
            </div>
        </div>
        <!-- end Me And Moms -->

        @include('frontend.mobile.components.ads-6')

        <!-- start terkini -->
        <div class="mt-20">
            <h3 class="base-title pl-20 fw-bold">Terkini</h3>
            <div>

                <div class="list">
                    @foreach ($postTerkini as $post)
                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img"
                                        src="{{ is_array($post->gambar) ? $post->gambar[0] : $post->gambar }}" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a
                                            href="{{ route('detail.desktop', ['slug' => $post->slug]) }}">{{ $post->title }}</a>
                                    </h4>
                                    <div class="category-and-time">
                                        <a href="?page=detail">{{ $post->kategori->nama_kategori }}</a>
                                        <span>{{ \Carbon\Carbon::parse($post->created_at)->format('H:i') }} WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    @endforeach
                </div>
                <div class="t10-b20 mb-20">
                    <a href="">
                        <button class="main-card-loadmore" id="loadmore">Tampilkan lebih banyak</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
@endsection
