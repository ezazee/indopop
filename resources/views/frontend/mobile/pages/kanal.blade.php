@extends('frontend.mobile.master.master-app')
@section('content')
    <div class="mt-20">
        <h3 class="card-headline-no-image-title ml-10 fw-bold">{{ $category->nama_kategori }}</h3>
    </div>

    @if ($post->isNotEmpty())
        @php $latestPost = $post->first(); @endphp
        <div>
            <article class="card-headline">
                <img alt="{{ $latestPost->title }}" class="card-headline-img" src="{{ is_array($latestPost->gambar) ? $latestPost->gambar[0] : $latestPost->gambar }}" />
                <div class="card-headline-info">
                    <h4 class="card-headline-title">
                        <a href="{{ route('detail.desktop', ['slug' => $latestPost->slug]) }}">{{ $latestPost->title }}</a>
                    </h4>
                </div>
            </article>
        </div>

        <div class="card-headline-small-wrap">
            @foreach ($post->skip(1)->take(4) as $item)
                <article class="card-headline-small">
                    <img alt="{{ $item->title }}" class="card-headline-small-img" src="{{ is_array($item->gambar) ? $item->gambar[0] : $item->gambar }}" />
                    <div class="card-headline-small-info">
                        <h4 class="card-headline-small-title">
                            <a href="{{ route('detail.desktop', ['slug' => $item->slug]) }}">{{ $item->title }}</a>
                        </h4>
                        <div class="category-and-time-head">
                            <span>{{ \Carbon\Carbon::parse($item->created_at)->format('H:i') }} WIB</span>
                        </div>
                    </div>
                </article>
            @endforeach
        </div>
    @endif

    <div>
        @foreach ($post->skip(5)->sortByDesc('created_at') as $item)
            <article class="main-card">
                <div class="main-card-img-wrap">
                    <img alt="{{ $item->title }}" class="main-card-img"
                        src="{{ is_array($item->gambar) ? $item->gambar[0] : $item->gambar }}" />
                </div>
                <div class="main-card--info">
                    <h4 class="main-card--title">
                        <a href="{{ route('detail.desktop', ['slug' => $item->slug]) }}">{{ $item->title }}</a>
                    </h4>
                    <div class="category-and-time">
                        <a href="{{ route('kanal.desktop', ['slug' => $item->kategori->slug]) }}">
                            {{ $item->kategori->nama_kategori }}
                        </a>
                        <span>{{ \Carbon\Carbon::parse($item->created_at)->format('H:i') }} WIB</span>
                    </div>
                </div>
            </article>
        @endforeach
    </div>
@endsection
