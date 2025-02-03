@extends('frontend.mobile.master.master-app')
@section('content')
    <div class="mt-20">
        <h3 class="card-headline-no-image-title ml-10 fw-bold">{{ $category->nama_kategori }}</h3>
    </div>
    <div>
        <article class="card-headline">
            <img alt="image" class="card-headline-img" src="https://placehold.co/600x400" />
            <div class="card-headline-info">
                <h4 class="card-headline-title">
                    <a href="#">sadasd</a>
                </h4>
                <p class="card-headline-desc">#sdsdsdsdsd</p>
            </div>
        </article>
        <div class="card-headline-small-wrap">
            <article class="card-headline-small">
                <img alt="image" class="card-headline-small-img" src="https://placehold.co/600x400" />
                <div class="card-headline-small-info">
                    <h4 class="card-headline-small-title">
                        <a href="#">#sdsdsdsd</a>
                    </h4>
                    <div class="category-and-time-head">
                        <span>WIB</span>
                    </div>
                </div>
            </article>
            <article class="card-headline-small">
                <img alt="image" class="card-headline-small-img" src="https://placehold.co/600x400" />
                <div class="card-headline-small-info">
                    <h4 class="card-headline-small-title">
                        <a href="#">#sdsdsdsd</a>
                    </h4>
                    <div class="category-and-time-head">
                        <span>WIB</span>
                    </div>
                </div>
            </article>
            <article class="card-headline-small">
                <img alt="image" class="card-headline-small-img" src="https://placehold.co/600x400" />
                <div class="card-headline-small-info">
                    <h4 class="card-headline-small-title">
                        <a href="#">#sdsdsdsd</a>
                    </h4>
                    <div class="category-and-time-head">
                        <span>WIB</span>
                    </div>
                </div>
            </article>
            <article class="card-headline-small">
                <img alt="image" class="card-headline-small-img" src="https://placehold.co/600x400" />
                <div class="card-headline-small-info">
                    <h4 class="card-headline-small-title">
                        <a href="#">#sdsdsdsd</a>
                    </h4>
                    <div class="category-and-time-head">
                        <span>WIB</span>
                    </div>
                </div>
            </article>
        </div>
    </div>
    <div>
        @foreach ($post as $item)
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
                        <a
                            href="{{ route('kanal.desktop', ['slug' => $item->kategori->slug]) }}">{{ $item->kategori->nama_kategori }}</a>
                        <span>{{ \Carbon\Carbon::parse($item->created_at)->format('H:i') }} WIB</span>
                    </div>
                </div>
            </article>
        @endforeach
    </div>
@endsection
