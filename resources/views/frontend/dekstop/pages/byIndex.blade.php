@extends('frontend.dekstop.master.master-app')
@section('content')
<div class="content-home" id="content">
    <div class="content-article">
        <div class="mt-20">
            <div class="list">
                @foreach ($post as $item)
                <div class="list-element">
                    <article class="main-card">
                        <div class="main-card-img-wrap">
                            <img alt="image" class="main-card-img" width="213" height="130"
                                src="{{ is_array($item->gambar) ? $item->gambar[0] : $item->gambar }}" />
                        </div>
                        <div class="main-card--info">
                            <h4 class="main-card--title">
                                <a href="{{ route('detail.desktop', ['slug' => $item->slug]) }}">{{ $item->title }}</a>
                            </h4>
                            <p class="main-card--desc">{!! Str::limit(strip_tags($item->content ), 150) !!}</p>
                            <div class="category-and-time">
                                <span>{{ \Carbon\Carbon::parse($item->created_at)->format('H:i') }} WIB</span>
                            </div>
                        </div>
                    </article>
                </div>
                @endforeach
            </div>
            <div class="mb-20">
                <button class="main-card-loadmore" id="loadmore">Tampilkan lebih banyak</button>
            </div>
        </div>
    </div>
    @include('frontend.dekstop.components.sidebar')
</div>
@endsection
